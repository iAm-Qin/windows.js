"use strict";

import util from "util";
import assert from "assert";
import createDebug from "debug";
import koffi from "koffi";


const debug = createDebug("koffi-struct-union");

export default /*@__NO_SIDE_EFFECTS__*/ function () {
	debug("Defining a new UnionType.");

	function UnionType (arg, data) {
		if (!(this instanceof UnionType)) {
			return new UnionType(arg, data);
		}
		debug("Creating a new union instance.");
		let store;
		if (Buffer.isBuffer(arg)) {
			debug("using passed-in Buffer instance to back the union", arg);
			assert(arg.length >= UnionType.size, "Buffer instance must be at least "
				+ UnionType.size + " bytes to back this untion type");
			store = arg;
			arg = data;
		} else {
			debug("creating new Buffer instance to back the union (size: %d)", UnionType.size);
			store = new Buffer(UnionType.size);
		}

		// set the backing Buffer store
		store.type = UnionType;
		this.buffer = store;

		// initialise the union with values supplied
		if (arg) {
			for (const key in arg) {
				// hopefully hit the union setters
				this[key] = arg[key];
			}
		}
		UnionType._instanceCreated = true;
	}

	// make instances inherit from `proto`
	UnionType.prototype = Object.create(proto, {
		constructor: {
			value: UnionType,
			enumerable: false,
			writable: true,
			configurable: true,
		},
	});

	UnionType.defineProperty = defineProperty;
	UnionType.defineProperties = defineProperties;
	UnionType.toString = toString;
	UnionType.toJSON = toJSON;

	const opt = (arguments.length > 0 && arguments[1]) ? arguments[1] : {};

	// comply with `koffi.introspect()`
	UnionType.primitive = "Union";
	UnionType.size = 0;
	UnionType.alignment = 0;
	UnionType.members = {};

	UnionType.packed = opt.packed ? Boolean(opt.packed) : false;

	UnionType.get = get;
	UnionType.set = set;

	// Read the members list
	const arg = arguments[0];
	if (typeof arg === "object") {
		const bound = internalDefineProperty.bind(UnionType);
		Object.keys(arg).forEach(function (name) {
			const type = arg[name];
			bound(name, type);
		});
		recalculate(UnionType);
	}

	return UnionType;
}

/**
 * The UnionType interface.
 * The usage is like getting a value within a `ref` type.
 */
function get (buffer, offset) {
	debug("get(%o, %d)", buffer, offset);

	if (offset > 0) {
		buffer = buffer.slice(offset);
	}
	return new this(buffer);
}

/**
 * The UnionType interface.
 * The usage is like setting a value within a `ref` type.
 */
function set (buffer, offset, value) {
	debug("set(%o, %d, %o)", buffer, offset, value);

	if (offset > 0) {
		buffer = buffer.slice(offset);
	}
	const union = new this(buffer);
	const isUnion = value instanceof this;
	if (isUnion) {
		value.buffer.copy(buffer, offset, 0, this.size);
	} else {
		for (const name in value) {
			// hopefully hit the setters
			union[name] = value[name];
		}
	}
}

/**
 * Custom `toString()` override for UnionType instances.
 */
function toString () {
	return "[Function: UnionType] "
		+ JSON.stringify(this.toJSON(), (k, v) => "bigint" === typeof (v) ? v.toString() : v, 4);
}

function toJSON () {
	return {
		primitive: this.primitive,
		size: this.size,
		alignment: this.alignment,
		members: this.members,
		packed: this.packed,
	};
}

/**
 * Adds a new field to the union instance with the given name and type.
 * Note that this function will throw an Error if any instances of the union
 * type have already been created, therefore this function must be called at the
 * beginning, before any instances are created.
 */
function internalDefineProperty (name, type) {
	debug("Defining a new member, name=%s", name);

	assert(!this._instanceCreated,
		"An instance of this Union has already been created. Cannot add new members anymore.");

	const member = {name, type, offset: "always zero"};
	this.members[name] = member;

	// define the getter/setter property
	const desc = {enumerable: true, configurable: true};

	if (type.primitive) {
		desc.get = function () {
			debug("Getting member `%s`", name);
			return member.type.get(this.buffer, 0);
		};
		desc.set = function (value) {
			debug("Setting member `%s`, value: %s", name, value);
			return member.type.set(this.buffer, 0, value);
		};
	} else {
		desc.get = function () {
			debug("Getting member `%s`", name);
			return koffi.decode(this.buffer, 0, member.type);
		};
		desc.set = function (value) {
			debug("Setting member `%s`, value: %s", name, value);
			return koffi.encode(this.buffer, 0, member.type, value);
		};
	}

	Object.defineProperty(this.prototype, name, desc);
}

/**
 * Defines a new member, or update an existing member.
 *
 * @param name
 * @param type
 */
function defineProperty (name, type) {
	internalDefineProperty.bind(this)(name, type);
	recalculate(this);
	return this;
}

/**
 * Defines new members, or update existing members.
 *
 * @param members {object}
 */
function defineProperties (members) {
	const bound = internalDefineProperty.bind(this);
	Object.entries(members).forEach(([name, type]) => bound(name, type));
	recalculate(this);
	return this;
}

/**
 * Similar to `compile the union`.
 *
 * @param unionType
 */
function recalculate (unionType) {
	// reset size and alignment
	unionType.size = 0;
	unionType.alignment = 0;

	const fieldNames = Object.keys(unionType.members);

	// loop through to set the size of the union of the largest member field
	// and the alignment to the requirements of the largest member
	fieldNames.forEach(function (name) {
		const member = unionType.members[name];
		const type = member.type;

		const typeDesc = "function" === typeof (type) ? type : koffi.introspect(type);
		const {alignment, size} = typeDesc;

		unionType.alignment = Math.max(unionType.alignment, alignment);
		unionType.size = Math.max(unionType.size, size);
	});

	// final padding
	const left = unionType.size % unionType.alignment;
	if (left > 0) {
		const padding = unionType.alignment - left;
		debug("Additional padding to the end of union:", padding);
		unionType.size += padding;
	}
}

/**
 * the base prototype that union type instances will inherit from.
 */
const proto = {};

proto.buffer = null;

/**
 * Flattens the Struct instance into a regular JavaScript Object. This function
 * "gets" all the defined properties.
 *
 * @api public
 */
proto.toObject = function toObject () {
	const obj = {};
	Object.keys(this.constructor.members).forEach(function (k) {
		let value = this[k];
		if ("function" === typeof (value.toObject)) {
			value = value.toObject();
		}
		obj[k] = value;
	}, this);
	return obj;
};

/**
 * Basic `JSON.stringify(struct)` support.
 */
proto.toJSON = function toJSON () {
	return this.toObject();
};

/**
 * `.inspect()` override. For the REPL.
 *
 * @api public
 */
proto.inspect = function inspect () {
	const obj = this.toObject();
	// add instance's "own properties"
	Object.keys(this).forEach(function (k) {
		obj[k] = this[k];
	}, this);
	return util.inspect(obj);
};

/**
 * returns a Buffer pointing to this union data structure.
 */
proto.ref = function ref () {
	return this.buffer;
};

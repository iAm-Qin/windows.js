"use strict";

/**
 * An interface extending the `koffi.struct()`, implementing bitfields that the `koffi` not implemented.
 *
 *
 * Example:
 *
 * ``` javascript
 * import koffi from "koffi";
 * import {struct, bitfield} from "koffi-struct-bitfield";
 *
 * var string = koffi.types.string;
 * var int = koffi.types.int;
 *
 * // create the struct "type"/constructor
 * const MENUBARINFO = struct({
 *     cbSize:      DWORD,              // DWORD
 *     rcBar:       RECT,               // RECT  // rect of bar, popup, item
 *     hMenu:       HMENU,              // HMENU // real menu handle of bar, popup
 *     hwndMenu:    HWND,               // HWND  // hwnd of item submenu if one
 *     fBarFocused: bitfield(BOOL, 1),  // BOOL  // bar, popup has the focus
 *     fFocused:    bitfield(BOOL, 1),  // BOOL  // item has the focus
 *     fUnused:     bitfield(BOOL, 30), // BOOL  // reserved. Cleared to prevent Information Disclosure
 * });
 *
 * // create an instance of the struct, backed a Buffer instance
 * const s = new MENUBARINFO({
 *     cbSize: MENUBARINFO.size,
 *     rcBar: {left: 0x11223344, top: 0x22334455, right: 0x33445566, bottom: 0x44556677},
 *     hMenu: 0x1122334455667788n,
 *     hwndMenu: 0x8877665544332211n,
 *     fBarFocused: 1,
 *     fFocused: 1,
 *     fUnused: 2,
 * });
 *
 * console.log(s.cbSize);	// 48
 * s.cbSize = 50;
 * console.log(s.cbSize);	// 50
 *
 * console.log(s.buffer);	// <Buffer 3a 00 00 00 44 33 22 11 55 44 33 22 66 55 44 33 77 66 55 44 00 00 00 00 88 77 66 55 44 33 22 11 11 22 33 44 55 66 77 88 0b 00 00 00 00 00 00 00>
 * ```
 */

import util from "util";
import assert from "assert";
import createDebug from "debug";
import koffi from "koffi";

import {isSignedInteger} from "../globals/globals.js";
import bitfield from "./bitfield.js";
import union from "./union.js";
import array from "./array.js";

const debug = createDebug("koffi-struct-bitfield");


struct.bitfield = bitfield;
struct.union = union;
struct.array = array;

export {struct, bitfield, union, array};

/**
 * The Struct "type" meta-constructor.
 */
export default /*@__NO_SIDE_EFFECTS__*/ function struct () {
	debug("Defining a new StructType");

	/**
	 * This is the "constructor" of the Struct type that gets returned.
	 *
	 * Invoke it with `new` to create a new Buffer instance backing the struct.
	 * Pass it an existing Buffer instance to use that as the backing buffer.
	 * Pass in an Object containing the struct members to auto-populate the
	 * struct with the data.
	 */
	function StructType (arg, data) {
		if (!(this instanceof StructType)) {
			return new StructType(arg, data);
		}
		debug("Creating a new struct instance");

		let store;
		if (Buffer.isBuffer(arg)) {
			debug("using passed-in Buffer instance to back the struct", arg);
			assert(arg.length >= StructType.size,
				`Buffer instance must be at least ${StructType.size} bytes to back this struct type.`);
			store = arg;
			arg = data;
		} else {
			debug("creating new Buffer instance to back the struct (size: %d)", StructType.size);
			store = Buffer.alloc(StructType.size);
		}

		// set the backing Buffer store
		store.type = StructType;
		this.buffer = store;

		if (arg) {
			for (const key in arg) {
				// hopefully hit the struct setters
				this[key] = arg[key];
			}
		}
		StructType._instanceCreated = true;
	}

	// make instances inherit from the `proto`
	StructType.prototype = Object.create(proto, {
		constructor: {value: StructType, enumerable: false, writable: true, configurable: true},
	});

	StructType.defineProperty = defineProperty;
	StructType.defineProperties = defineProperties;
	StructType.toString = toString;
	StructType.toJSON = toJSON;

	const opt = (arguments.length > 0 && arguments[1]) ? arguments[1] : {};

	// comply with `koffi.introspect()`
	StructType.primitive = "Record";
	StructType.size = 0;
	StructType.alignment = 0;
	StructType.members = {};

	StructType.structAlignment = opt.alignment;
	StructType.packed = opt.packed ? Boolean(opt.packed) : false;

	StructType.get = get;
	StructType.set = set;

	// define the members
	const membersDefinitions = arguments[0];
	if (typeof membersDefinitions === "object") {
		const bound = internalDefineProperty.bind(StructType);
		Object.keys(membersDefinitions).forEach(function (name) {
			const type = membersDefinitions[name];
			bound(name, type);
		});
	}
	recalculate(StructType);

	return StructType;
}

/**
 * The StructType interface.
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
 * The StructType interface.
 * The usage is like setting a value within a `ref` type.
 */
function set (buffer, offset, value) {
	debug("set(%o, %d, %o)", buffer, offset, value);

	const isStruct = value instanceof this;
	if (isStruct) {
		// optimization: copy the buffer contents directly rather than going through the constructor
		value.buffer.copy(buffer, offset, 0, this.size);
	} else {
		if (offset > 0) {
			buffer = buffer.slice(offset);
		}
		new this(buffer, value);
	}
}

/**
 * Custom `toString()` override for StructType instances.
 */
function toString () {
	return "[Function: StructType] "
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
 * Adds a new member to the struct instance with the given name and type.
 * Note that this function will throw an Error if any instances of the struct
 * type have already been created, therefore this function must be called at the
 * beginning, before any instances are created.
 */
function internalDefineProperty (name, type) {
	debug("Defining a new member, name=%s, type=%o", name, type);

	assert(!this._instanceCreated,
		"An instance of this Struct has already been created. Cannot add new members anymore.");

	const member = {name, type, offset: "will be calculated soon"};
	this.members[name] = member;

	// define the getter/setter property
	const desc = {enumerable: true, configurable: true};

	if (type.bits) {
		desc.get = function () {
			debug("Getting bitfield `%s`", name);

			let value = koffi.decode(this.buffer, member.offset, type.type);
			value = BigInt(value);
			value = (value >> member.bitStart) & member.mask;
			if (isSignedInteger(type.type)) {
				value = BigInt.asIntN(member.bits, value);
			}
			if (koffi.introspect(type.type).size <= 4) {
				value = Number(value);
			}

			debug("Got bitfield `%s` value: %d", name, value);
			return value;
		};

		desc.set = function (value) {
			debug("Setting bitfield `%s` (value: %d)", name, value);
			let val = koffi.decode(this.buffer, member.offset, type.type);
			val = BigInt(val);
			val = val | ((BigInt(value) & member.mask) << member.bitStart);
			return koffi.encode(this.buffer, member.offset, type.type, val);
		};
	} else if (type.primitive) {
		desc.get = function () {
			debug("Getting member `%s`", name);
			return member.type.get(this.buffer, member.offset);
		};
		desc.set = function (value) {
			debug("Setting member `%s`, value: %s", name, value);
			return member.type.set(this.buffer, member.offset, value);
		};
	} else {
		desc.get = function () {
			debug("Getting member `%s`", name);
			return koffi.decode(this.buffer, member.offset, member.type);
		};
		desc.set = function (value) {
			debug("Setting member `%s`, value: %s", name, value);
			return koffi.encode(this.buffer, member.offset, member.type, value);
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
 * Similar to `compile the struct`.
 *
 * @param structType
 */
function recalculate (structType) {

	// reset size and alignment
	structType.size = 0;
	structType.alignment = 0;
	clearBitfieldSettings();

	const memberNames = Object.keys(structType.members);

	// first loop through is to determine the `alignment` of this struct
	memberNames.forEach(function (name) {
		const member = structType.members[name];
		const type = member.type;
		const typeDesc = type.primitive ? type : koffi.introspect(type);
		const alignment = typeDesc.alignment;
		if (structType.packed) {
			structType.alignment = Math.min(structType.alignment, alignment);
		} else {
			structType.alignment = Math.max(structType.alignment, alignment);
		}
	});

	// second loop through sets the `offset` property on each "member"
	// object, and sets the `struct.size` as we go along
	memberNames.forEach(function (name) {
		const member = structType.members[name];
		const type = member.type;
		const typeDesc = type.primitive ? type : koffi.introspect(type);

		if (!type.bits) {
			clearBitfieldSettings();	// 遇到非位域，清除 bits
		}

		if ("Array" === typeDesc.primitive) {
			// don't treat arrays like one contiguous entity. instead, treat them like individual elements in the
			// struct. doing this makes the padding end up being calculated correctly.
			member.offset = calcSizeAndReturnOffset(typeDesc.ref);
			for (let i = 1; i < typeDesc.length; i++) {
				calcSizeAndReturnOffset(typeDesc.ref);
			}
		} else if (type.bits) {	// bitfield
			assert(type.bits <= type.size * 8, "bits must be less than the size of the type");

			let firstFieldInGroup = false;	// 本次是否第 1 个位域(之前没有，或者类型不一致，或者剩余位已无法容纳本次位域)
			let newCurrBits = structType.currBits + type.bits;	// 已使用的位数 + 本次所需位数

			const typeDifferent = structType.lastBitfieldType?.size !== type.size
				|| structType.lastBitfieldType?.alignment !== type.alignment;	// 本次类型与上次不一样
			const bitsInsufficient = newCurrBits > 8 * type.size;	// 剩余位数已无法容纳本次位域

			if (typeDifferent || bitsInsufficient) {
				firstFieldInGroup = true;
				structType.currBits = 0;	// 当前已使用位数清零
				newCurrBits = type.bits;
			}
			if (typeDifferent) {
				const padding = structType.packed ? 0 : (type.alignment - (structType.size % type.alignment)) % type.alignment;
				structType.size += padding;
			}

			if (firstFieldInGroup) {
				member.offset = structType.size;				// 新开始的
				structType.lastBitfieldOffset = member.offset;
			} else {
				member.offset = structType.lastBitfieldOffset;	// 接续的
			}
			if (firstFieldInGroup) {	// 剩余位已无法容纳本次位域
				structType.size += type.size;	// 增加总长度
			}

			member.bitStart = BigInt(structType.currBits);
			member.bits = type.bits;
			member.mask = BigInt(0);
			for (let i = 0; i < member.bits; i++) {
				member.mask = (member.mask << 1n) | 1n;
			}

			structType.lastBitfieldType = type;
			structType.currBits = newCurrBits;			// 当前已使用位数
		} else {
			member.offset = calcSizeAndReturnOffset(type);
		}
	});

	addFinalPadding();

	deleteTemp();

	function clearBitfieldSettings () {
		structType.currBits = 0;	// 当前已使用位数清零
		structType.lastBitfieldType = null;
	}

	function calcSizeAndReturnOffset (type) {
		const typeDesc = type.primitive ? type : koffi.introspect(type);
		const {alignment, size} = typeDesc;

		let offset = structType.size;
		const padding = structType.packed ? 0 : (alignment - (offset % alignment)) % alignment;

		offset += padding;

		if (!structType.packed) {
			assert.equal(offset % alignment, 0, "Offset should align.");
		}

		structType.size = offset + size;

		return offset;
	}

	function addFinalPadding () {
		const left = structType.size % structType.alignment;
		if (left > 0) {
			let padding = structType.alignment - left;
			debug("Additional padding to the end of struct:", padding);
			structType.size += padding;
		}
	}

	function deleteTemp () {
		// deletes the temp fields
		delete structType.currBits;
		delete structType.lastBitfieldType;
		delete structType.lastBitfieldOffset;
	}
}

/**
 * this is the custom prototype of Struct type instances.
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
 * returns a Buffer pointing to this struct data structure.
 */
proto.ref = function ref () {
	return this.buffer;
};

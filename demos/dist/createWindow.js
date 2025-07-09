import koffi from 'koffi';
import path from 'path';
import { fileURLToPath } from 'url';
import { isMainThread, Worker, parentPort, threadId } from 'worker_threads';
import util, { promisify } from 'util';
import assert from 'assert';

const buffer = Buffer.alloc(8);
buffer.writeBigInt64LE(-1n);

function isSignedInteger (type) {
	return -1 === koffi.decode(buffer, 0, type);
}

function introspect (type) {
	return type.primitive ? type : koffi.introspect("string" === typeof type ? koffi.resolve(type) : type);
}

/*@__NO_SIDE_EFFECTS__*/ function bitfield (type, bits = 1) {
	const typeDesc = koffi.introspect(type);
	const {alignment, size} = typeDesc;

	assert([
		"Int8", "UInt8",
		"Int16", "UInt16",
		"Int32", "UInt32",
		"Int64", "UInt64",
		"Bool",
	].includes(typeDesc.primitive), "'type' must be an (unsigned) char/short/int/long");

	assert(Math.floor(bits) === bits, "'bits' must be an integer.");
	assert(bits > 0, "'bits' must be bigger than 0.");

	return {bits, type, size, alignment, primitive: "Bitfield"};
}

/*@__NO_SIDE_EFFECTS__*/ function bitfieldUnion () {

	function UnionType (arg, data) {
		if (!(this instanceof UnionType)) {
			return new UnionType(arg, data);
		}
		let store;
		if (Buffer.isBuffer(arg)) {
			assert(arg.length >= UnionType.size, "Buffer instance must be at least "
				+ UnionType.size + " bytes to back this untion type");
			store = arg;
			arg = data;
		} else {
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
	UnionType.prototype = Object.create(proto$1, {
		constructor: {
			value: UnionType,
			enumerable: false,
			writable: true,
			configurable: true,
		},
	});

	UnionType.defineProperty = defineProperty$1;
	UnionType.defineProperties = defineProperties$1;
	UnionType.toString = toString$2;
	UnionType.toJSON = toJSON$1;

	const opt = (arguments.length > 0 && arguments[1]) ? arguments[1] : {};

	// comply with `koffi.introspect()`
	UnionType.primitive = "Union";
	UnionType.size = 0;
	UnionType.alignment = 0;
	UnionType.members = {};

	UnionType.packed = opt.packed ? Boolean(opt.packed) : false;

	UnionType.get = get$2;
	UnionType.set = set$2;

	// Read the members list
	const arg = arguments[0];
	if (typeof arg === "object") {
		const bound = internalDefineProperty$1.bind(UnionType);
		Object.keys(arg).forEach(function (name) {
			const type = arg[name];
			bound(name, type);
		});
		recalculate$1(UnionType);
	}

	return UnionType;
}

/**
 * The UnionType interface.
 * The usage is like getting a value within a `ref` type.
 */
function get$2 (buffer, offset) {

	if (offset > 0) {
		buffer = buffer.slice(offset);
	}
	return new this(buffer);
}

/**
 * The UnionType interface.
 * The usage is like setting a value within a `ref` type.
 */
function set$2 (buffer, offset, value) {

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
function toString$2 () {
	return "[Function: UnionType] "
		+ JSON.stringify(this.toJSON(), (k, v) => "bigint" === typeof (v) ? v.toString() : v, 4);
}

function toJSON$1 () {
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
function internalDefineProperty$1 (name, type) {

	assert(!this._instanceCreated,
		"An instance of this Union has already been created. Cannot add new members anymore.");

	const member = {name, type, offset: "always zero"};
	this.members[name] = member;

	// define the getter/setter property
	const desc = {enumerable: true, configurable: true};

	if (type.primitive) {
		desc.get = function () {
			return member.type.get(this.buffer, 0);
		};
		desc.set = function (value) {
			return member.type.set(this.buffer, 0, value);
		};
	} else {
		desc.get = function () {
			return koffi.decode(this.buffer, 0, member.type);
		};
		desc.set = function (value) {
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
function defineProperty$1 (name, type) {
	internalDefineProperty$1.bind(this)(name, type);
	recalculate$1(this);
	return this;
}

/**
 * Defines new members, or update existing members.
 *
 * @param members {object}
 */
function defineProperties$1 (members) {
	const bound = internalDefineProperty$1.bind(this);
	Object.entries(members).forEach(([name, type]) => bound(name, type));
	recalculate$1(this);
	return this;
}

/**
 * Similar to `compile the union`.
 *
 * @param unionType
 */
function recalculate$1 (unionType) {
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
		unionType.size += padding;
	}
}

/**
 * the base prototype that union type instances will inherit from.
 */
const proto$1 = {};

proto$1.buffer = null;

/**
 * Flattens the Struct instance into a regular JavaScript Object. This function
 * "gets" all the defined properties.
 *
 * @api public
 */
proto$1.toObject = function toObject () {
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
proto$1.toJSON = function toJSON () {
	return this.toObject();
};

/**
 * `.inspect()` override. For the REPL.
 *
 * @api public
 */
proto$1.inspect = function inspect () {
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
proto$1.ref = function ref () {
	return this.buffer;
};

const isArray = Array.isArray;

/*@__NO_SIDE_EFFECTS__*/ function structArray (elementType, length, hint = "Typed") {

	const fixedLength = length | 0;

	const elTypeDesc = introspect(elementType);

	assert(elTypeDesc.size > 0, "Cannot define an ArrayType of element's size=0.");
	assert(fixedLength > 0, "Cannot define a zero-length ArrayType.");

	class ArrayType {
		static elementType = elementType;
		static BYTES_PER_ELEMENT = elTypeDesc.size;

		static get type () {return this.elementType;}

		static toString = toString$1;

		length;
		buffer;
		slice = slice;
		decode = decode;
		getItem = getItem;
		setItem = setItem;

		// comply with `koffi.introspect()`
		static primitive = "Array";
		static length = fixedLength;
		static alignment = elTypeDesc.alignment;
		static size = ArrayType.BYTES_PER_ELEMENT * ArrayType.length;
		static hint = hint;
		static ref = elementType;
		static get = get$1;
		static set = set$1;

		constructor (data, length) {
			const itemSize = ArrayType.BYTES_PER_ELEMENT;
			const fixedLength = ArrayType.length;

			if (!data && !length) {					// new IntArray()
				assert(fixedLength > 0, `A 'length', 'array' or 'buffer' must be passed as the first argument.`);

				this.length = fixedLength;
				this.buffer = Buffer.alloc(itemSize * this.length);
			} else if ("number" == typeof data) {	// new IntArray(69)
				this.length = data;
				this.buffer = Buffer.alloc(itemSize * this.length);
			} else if (isArray(data)) {				// new IntArray([ 1, 2, 3, 4, 5 ], len)
				const len =
					null != length ? length :		// use optional `length` if provided,
					fixedLength > 0 ? fixedLength :	// otherwise use `fixedLength`,
					data.length;					// otherwise use the Array's .length

				assert(data.length >= len, `Array length must be at least ${len}, got ${data.length}.`);

				this.length = len;
				this.buffer = Buffer.alloc(itemSize * len);
				for (let i = 0; i < len; i++) {
					this.setItem(i, data[i]);
				}
			} else if (Buffer.isBuffer(data)) {		// new IntArray(Buffer(8))
				const len =
					null != length ? length :
					fixedLength > 0 ? fixedLength :
					data.length / itemSize | 0;
				const expectedLength = itemSize * len;
				this.length = len;
				if (data.length !== expectedLength) {
					assert(data.length >= expectedLength, `Buffer length must be at least ${expectedLength}, got ${data.length}.`);

					data = data.slice(0, expectedLength);
				}
				this.buffer = data;
			}
		}
	}

	return new Proxy(ArrayType, {
		construct: function (ArrayType, argumentsList) {
			const [data, length] = argumentsList;

			const instance = new ArrayType(data, length);

			return new Proxy(instance, {
				get (instance, prop) {
					const index = prop - 0;
					if (!isNaN(index)) {
						return instance.getItem(index);
					}
					return instance[prop];
				},
				set (instance, prop, value) {
					const index = prop - 0;
					if (!isNaN(index)) {
						instance.setItem(index, value);
						return true;
					}
					instance[prop] = value;
					return true;
				},
			});
		},
	});
}

/**
 * The ArrayType interface.
 */
function toString$1 () { return `[ArrayType], ElementType=${this.elementType}, BYTES_PER_ELEMENT=${this.BYTES_PER_ELEMENT}`;}

/**
 * The ArrayType interface.
 * The usage is like getting a value within a `ref` type.
 */
function get$1 (buffer, offset) {

	if (offset > 0) {
		buffer = buffer.slice(offset);
	}
	return new this(buffer);
}

/**
 * The ArrayType interface.
 * The usage is like setting a value within a `ref` type.
 */
function set$1 (buffer, offset, value) {

	const array = this.get(buffer, offset);
	const isInstance = value instanceof this;
	if (isInstance || isArray(value)) {
		for (let i = 0; i < value.length; i++) {
			array[i] = value[i];
		}
	} else {
		throw new Error("not sure how to set into Array: " + value);
	}
}

/**
 * The prototype method for the `ArrayType`.
 * Gets the element at the given index.
 *
 * @instance ArrayType
 */
function getItem (index) {

	const size = this.constructor.BYTES_PER_ELEMENT;
	const elementType = this.constructor.elementType;
	const offset = size * index;
	const buffer = this.buffer;

	return elementType.primitive ? elementType.get(buffer, offset) : koffi.decode(buffer, offset, elementType);
}

/**
 * The prototype method for the `ArrayType`.
 * Sets the element at the given index with the given value.
 *
 * @instance ArrayType
 */
function setItem (index, value) {

	const ArrayType = this.constructor;
	const size = ArrayType.BYTES_PER_ELEMENT;
	const elementType = ArrayType.elementType;
	const offset = size * index;
	const buffer = this.buffer;

	if ("String" === ArrayType.hint) {
		if ("number" !== typeof (value)) {
			value = value?.toString().charCodeAt(0);
		}
	}

	elementType.primitive ? elementType.set(buffer, offset, value, elementType) : koffi.encode(buffer, offset, elementType, value);
}

/**
 * The prototype method for the `ArrayType`.
 * The "slice" implementation.
 *
 * @instance ArrayType
 */
function slice (start, end) {

	const elementSize = this.constructor.BYTES_PER_ELEMENT;
	let buffer;

	if (end) {
		buffer = this.buffer.slice(elementSize * start, elementSize * end);
	} else {
		buffer = this.buffer.slice(elementSize * start);
	}

	return new this.constructor(buffer);
}

/**
 * The prototype method for the `ArrayType`.
 * Translate the buffer into javascript `Array`.
 *
 * @instance ArrayType
 */
function decode () {

	const ArrayType = this.constructor;
	if (ArrayType.elementType.primitive) {
		let Class;
		// noinspection FallThroughInSwitchStatementJS
		switch (ArrayType.hint) {
			case "Typed":
				Class = ArrayType.elementType.unsigned
						? {1: Uint8Array, 2: Uint16Array, 4: Uint32Array}[ArrayType.BYTES_PER_ELEMENT]
						: {1: Int8Array, 2: Int16Array, 4: Int32Array}[ArrayType.BYTES_PER_ELEMENT];
			case "Array":
				Class ??= Array;
				const result = new Class(ArrayType.length);
				for (let i = 0; i < result.length; i++) {
					result[i] = this.getItem(i);
				}
				return result;
			case "String":
				switch (ArrayType.BYTES_PER_ELEMENT) {
					case 2:
						return koffi.decode(this.buffer, "wchar", ArrayType.length);
					case 1:
						return koffi.decode(this.buffer, "char", ArrayType.length);
				}
				throw new Error(`Error: Array hint 'String' can only be used with 8 and 16-bit signed integer types`);
			default:
				return this.buffer;
		}
	} else {
		return koffi.decode(this.buffer, koffi.array(ArrayType.elementType, ArrayType.length, ArrayType.hint));
	}
}

struct$1.bitfield = bitfield;
struct$1.union = bitfieldUnion;
struct$1.array = structArray;

/**
 * The Struct "type" meta-constructor.
 */
/*@__NO_SIDE_EFFECTS__*/ function struct$1 () {

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

		let store;
		if (Buffer.isBuffer(arg)) {
			assert(arg.length >= StructType.size,
				`Buffer instance must be at least ${StructType.size} bytes to back this struct type.`);
			store = arg;
			arg = data;
		} else {
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

	assert(!this._instanceCreated,
		"An instance of this Struct has already been created. Cannot add new members anymore.");

	const member = {name, type, offset: "will be calculated soon"};
	this.members[name] = member;

	// define the getter/setter property
	const desc = {enumerable: true, configurable: true};

	if (type.bits) {
		desc.get = function () {

			let value = koffi.decode(this.buffer, member.offset, type.type);
			value = BigInt(value);
			value = (value >> member.bitStart) & member.mask;
			if (isSignedInteger(type.type)) {
				value = BigInt.asIntN(member.bits, value);
			}
			if (koffi.introspect(type.type).size <= 4) {
				value = Number(value);
			}
			return value;
		};

		desc.set = function (value) {
			let val = koffi.decode(this.buffer, member.offset, type.type);
			val = BigInt(val);
			val = val | ((BigInt(value) & member.mask) << member.bitStart);
			return koffi.encode(this.buffer, member.offset, type.type, val);
		};
	} else if (type.primitive) {
		desc.get = function () {
			return member.type.get(this.buffer, member.offset);
		};
		desc.set = function (value) {
			return member.type.set(this.buffer, member.offset, value);
		};
	} else {
		desc.get = function () {
			return koffi.decode(this.buffer, member.offset, member.type);
		};
		desc.set = function (value) {
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

/**
 * Defines an array member in structs. Rewrites the `koffi.array()`, supporting bitfield-structs.
 *
 * @param elementType
 * @param length
 * @param jsArrayType
 * @return {(function(*=, *=): (ArrayType))|IKoffiCType}
 */
function array (elementType, length, jsArrayType = "Array") {
	if (elementType.primitive) {
		return structArray(elementType, length, jsArrayType);
	} else {
		return koffi.array(elementType, length, jsArrayType);
	}
}

/**
 * Defines a struct. Rewrites the `koffi.struct()`, supporting bitfields.
 *
 * @param args
 * @return {(function(definition): constructor)|IKoffiCType}
 */
const struct = (...args) => {
	const definition = args[0];
	if (Object.values(definition).some(d => d.primitive)) {
		return struct$1(definition);
	} else {
		return koffi.struct(...args);
	}
};
// export /*@__NO_SIDE_EFFECTS__*/ const bitfield = (type, bits) => bitfield(type, bits);

/**
 * Defines a pointer type. Rewrites the `koffi.pointer()`, supporting bitfield-structs.
 *
 * @param args
 * @return {IKoffiCType}
 */
const pointer = (...args) => {
	const type = args[0];
	if (type?.primitive) {
		return koffi.pointer(koffi.types.void);
	} else {
		return koffi.pointer(...args);
	}
};

const out = (...args) => koffi.out(...args);

/**
 * Gets the size of the specific type. Rewrites the `koffi.sizeof()`, supporting bitfield-structs.
 *
 * @param type
 * @return {number}
 */
const sizeof = (type) => {
	if (type.primitive) {
		return type.size;
	} else {
		return koffi.sizeof(type);
	}
};
const uchar = koffi.types.uchar;
const ushort = koffi.types.ushort;
const int = koffi.types.int;
const uint = koffi.types.uint;
const long = koffi.types.long;
const ulong = koffi.types.ulong;
const size_t = koffi.types.size_t;

// vcruntime.h
const NULL = 0;

/**
 * Simulates the type cast.
 *
 * 模拟强制类型转换。
 *
 * @param type  {object|number|string|IKoffiCType} `koffi.types.xxx`, or the name of the type in string, or the size of the type(1/2/4/8).
 * @param value {number|BigInt}
 * @return {number|BigInt}
 */
function typecast (type, value) {
	let size, unsigned = false;
	if ("number" === typeof (type)) {
		size = type;
	} else {
		if ("string" === typeof (type)) {
			type = koffi.types[type];
		}
		size = sizeof(type);
		const {name} = koffi.introspect(type);
		if (name?.startsWith("u") || "size_t" === name) {
			unsigned = true;
		}
	}
	const buffer = Buffer.alloc(size);
	switch (size) {
		case 1:
			value = Number(value);
			value &= 0xFF;
			if (unsigned) {
				return value;
			} else {
				buffer.writeUint8(value);
				return buffer.readInt8();
			}
		case 2:
			value = Number(value);
			value &= 0xFFFF;
			if (unsigned) {
				return value;
			} else {
				buffer.writeUint16LE(value);
				return buffer.readInt16LE();
			}
		case 4:
			value = Number(value);
			value &= 0xFFFFFFFF;
			if (unsigned) {
				buffer.writeInt32LE(value);
				return buffer.readUint32LE();
			} else {
				return value;
			}
		case 8:
			value = BigInt(value);
			if (unsigned) {
				if (value < 0n) {
					buffer.writeBigInt64LE(value);
					return buffer.readBigUint64LE();
				} else {
					return value;
				}
			} else {
				value = value & 0xFFFFFFFFFFFFFFFFn;
				buffer.writeBigUint64LE(value);
				return buffer.readBigInt64LE();
			}
	}
	return value;
}

const UINT_PTR = size_t;
const LONG_PTR = size_t;

// winnt.h 循环引用
const HANDLE = size_t;

const FALSE = 0;
const DWORD = ulong;					// typedef unsigned long       DWORD;
const BOOL = int;					// typedef int                 BOOL;	// printf("%lu\n", sizeof(BOOL));	// 4
const BYTE = uchar;					// typedef unsigned char       BYTE;
const WORD = ushort;					// typedef unsigned short      WORD;
const LPVOID = pointer(koffi.types.void);	// typedef void far            *LPVOID;
const UINT = uint;					// typedef unsigned int        UINT;

/* Types use for passing & returning polymorphic values */
const WPARAM = UINT_PTR;				// typedef UINT_PTR            WPARAM;
const LPARAM = LONG_PTR;				// typedef LONG_PTR            LPARAM;
const LRESULT = LONG_PTR;			// typedef LONG_PTR            LRESULT;

const ATOM = WORD;	// typedef WORD                ATOM;   //BUGBUG - might want to remove this from minwin
const HINSTANCE = HANDLE;			// DECLARE_HANDLE(HINSTANCE);

//
// Basics
//

const VOID = koffi.types.void;	// #define VOID void
const LONG = long;				// typedef long LONG;
const LPCWSTR = koffi.types.str16;

/***
 * 为指定的 entryPoint 创建一个 loader。
 * 注：
 * 1、loader 加载的函数是异步模式。
 * 2、也可使用 .sync() 调用原同步方法，如 .MessageBox.sync(0, "", "", 0)。
 * 3、也可使用 .callback() 调用 原异步方法。
 *
 * @param lib         {object} `koffi` 加载的动态库，如：`lib = koffi.load("user32.dll")`。
 * @param entryName   {string} 函数(entryPoint)名称。
 * @param entryType   {any}  函数返回值类型。
 * @param entryParams {Array}  参数定义。
 * @param loaded      {function(function)} 回调，用于覆盖掉原来的 loader，如 `f => MessageBox = f`，后续调用就会直接调用已加载的函数了。一定要使用此办法，否则虽然能运行，但每次调用函数都会先调用 loader，效率就低了。
 *
 * @return {function<Promise>}
 */
function createAutoLoader (lib, entryName, entryType, entryParams, loaded = func => {}) {
	// 思路：首先赋值为 loader，首次调用时调用的是 loader，loader 中使用 koffi 加载对应的函数并调用，
	// 并用所加载的函数覆盖掉 loader；后续调用则是直接调用已加载的函数。

	loader.sync = syncLoader;
	loader.callback = callbackLoader;
	return loader;	// 首先赋值为 loader

	/**
	 * 先加载，再调用。
	 * 注：
	 * 1、加载时，会将本 loader 覆盖掉，再次调用则不会再次加载。
	 * 2、手动加载时也会将本 loader 覆盖掉。
	 * 3、加载的函数是异步模式(async function)，如需同步模式请手动加载。
	 * 4、也可以使用 .sync() 调用原同步方法，如 .MessageBox.sync(0, "", "", 0)。
	 * 5、也可以使用 .callback() 调用原异步方法，如 .MessageBox.callback(0, "", "", 0, (err, dr) => {})。
	 *
	 * @return {Promise<*>}
	 */
	async function loader () {
		const func = load();
		return await func(...arguments);
	}

	function syncLoader () {
		const func = load();
		return func.sync(...arguments);
	}

	function callbackLoader () {
		const func = load();
		return func.callback(...arguments);
	}

	/**
	 * loader 的通用方法。
	 */
	function load () {
		const func = lib.func("__stdcall", entryName, entryType, entryParams);
		const sync = func;
		const callback = func.async;
		const promise = promisify(callback);	// 默认是异步模式
		promise.sync = sync;					// 并且保留同步模式
		promise.callback = callback;			// 并且保留回调模式
		loaded(promise);	// 覆盖掉原来的 loader
		return promise;	// 是为了给3个 loader 用
	}
}

// @formatter: off

const HWND = HANDLE;					// DECLARE_HANDLE            (HWND);
const HGDIOBJ = HANDLE;				// typedef void NEAR* HGDIOBJ;
const HBRUSH = HANDLE;				// DECLARE_HANDLE(HBRUSH);
const HDC = HANDLE;					// DECLARE_HANDLE(HDC);
const HFONT = HANDLE;				// DECLARE_HANDLE(HFONT);
const HICON = HANDLE;				// DECLARE_HANDLE(HICON);
const HMENU = HANDLE;				// DECLARE_HANDLE(HMENU);
const HCURSOR = HICON;				// typedef HICON HCURSOR;

const COLORREF = DWORD;				// typedef DWORD   COLORREF;

const RECT = struct({
	left   : LONG, // LONG
	top    : LONG, // LONG
	right  : LONG, // LONG
	bottom : LONG, // LONG
});
const PRECT = pointer(RECT);
const LPRECT = PRECT;

const POINT = struct({
	x : LONG, // LONG
	y : LONG, // LONG
});

const OUT_TT_PRECIS = 4;
const CLIP_DEFAULT_PRECIS = 0;
const DEFAULT_QUALITY = 0;
const DEFAULT_PITCH = 0;
const ANSI_CHARSET = 0;
const FF_DONTCARE = (0 << 4);
const FW_DONTCARE = 0;
const TRANSPARENT = 1;
const WHITE_BRUSH = 0;

const WNDPROC = pointer(koffi.proto("__stdcall", "WNDPROC", LRESULT /* LRESULT */, [
	HWND,   /*  HWND    */
	UINT,   /*  UINT    */
	WPARAM, /*  WPARAM  */
	LPARAM, /*  LPARAM  */
]));

const SW_SHOWNORMAL = 1;
const WM_DESTROY = 0x0002;
const WM_PAINT = 0x000F;
const WS_OVERLAPPED = 0x00000000;
const WS_CAPTION = 0x00C00000;
const WS_SYSMENU = 0x00080000;
const WS_THICKFRAME = 0x00040000;
const WS_MINIMIZEBOX = 0x00020000;
const WS_MAXIMIZEBOX = 0x00010000;
const WS_OVERLAPPEDWINDOW = (WS_OVERLAPPED | WS_CAPTION | WS_SYSMENU | WS_THICKFRAME | WS_MINIMIZEBOX | WS_MAXIMIZEBOX);
const CS_VREDRAW = 0x0001;
const CS_HREDRAW = 0x0002;
const CW_USEDEFAULT = typecast(int, (0x80000000));
const DT_CENTER = 0x00000001;
const DT_VCENTER = 0x00000004;
const IMAGE_ICON = 1;
const LR_LOADFROMFILE = 0x00000010;
const LR_LOADTRANSPARENT = 0x00000020;

const WNDCLASSEXW = struct({
	cbSize        : UINT,      // UINT
	style         : UINT,      // UINT
	lpfnWndProc   : WNDPROC,   // WNDPROC
	cbClsExtra    : int,       // int
	cbWndExtra    : int,       // int
	hInstance     : HINSTANCE, // HINSTANCE
	hIcon         : HICON,     // HICON
	hCursor       : HCURSOR,   // HCURSOR
	hbrBackground : HBRUSH,    // HBRUSH
	lpszMenuName  : LPCWSTR,   // LPCWSTR
	lpszClassName : LPCWSTR,   // LPCWSTR
	hIconSm       : HICON,     // HICON
});
const WNDCLASSEX = WNDCLASSEXW;

const MSG = struct({
	hwnd     : HWND,   // HWND
	message  : UINT,   // UINT
	wParam   : WPARAM, // WPARAM
	lParam   : LPARAM, // LPARAM
	time     : DWORD,  // DWORD
	pt       : POINT,  // POINT
	lPrivate : DWORD,  // DWORD // #ifdef _MAC
});
const LPMSG = pointer(MSG);

const PAINTSTRUCT = struct({
	hdc         : HDC,             // HDC
	fErase      : BOOL,            // BOOL
	rcPaint     : RECT,            // RECT
	fRestore    : BOOL,            // BOOL
	fIncUpdate  : BOOL,            // BOOL
	rgbReserved : array(BYTE, 32), // BYTE
});
const LPPAINTSTRUCT = pointer(PAINTSTRUCT);

const lib$1 = koffi.load("user32.dll");

function GetMessageW () {}GetMessageW = createAutoLoader(lib$1, "GetMessageW", BOOL /* BOOL */, [
	out(LPMSG), /* out    LPMSG lpMsg         */
	HWND,       /* in opt HWND  hWnd          */
	UINT,       /* in     UINT  wMsgFilterMin */
	UINT,       /* in     UINT  wMsgFilterMax */
], f => GetMessageW = f);

function TranslateMessage () {}TranslateMessage = createAutoLoader(lib$1, "TranslateMessage", BOOL /* BOOL */, [
	pointer(MSG), /* in CONST MSG * lpMsg */
], f => TranslateMessage = f);

function DispatchMessageW () {}DispatchMessageW = createAutoLoader(lib$1, "DispatchMessageW", LRESULT /* LRESULT */, [
	pointer(MSG), /* in CONST MSG * lpMsg */
], f => DispatchMessageW = f);

function DefWindowProcW () {}DefWindowProcW = createAutoLoader(lib$1, "DefWindowProcW", LRESULT, [
	HWND,   /* in HWND   hWnd   */
	UINT,   /* in UINT   Msg    */
	WPARAM, /* in WPARAM wParam */
	LPARAM, /* in LPARAM lParam */
], f => DefWindowProcW = f);

function PostQuitMessage () {}PostQuitMessage = createAutoLoader(lib$1, "PostQuitMessage", VOID /* VOID */, [
	int, /* in int nExitCode */
], f => PostQuitMessage = f);

function RegisterClassExW () {}RegisterClassExW = createAutoLoader(lib$1, "RegisterClassExW", ATOM /* ATOM */, [
	pointer(WNDCLASSEXW), /* in CONST WNDCLASSEXW*  */
], f => RegisterClassExW = f);

function CreateWindowExW () {}CreateWindowExW = createAutoLoader(lib$1, "CreateWindowExW", HWND /* HWND */, [
	DWORD,     /* in     DWORD     dwExStyle    */
	LPCWSTR,   /* in opt LPCWSTR   lpClassName  */
	LPCWSTR,   /* in opt LPCWSTR   lpWindowName */
	DWORD,     /* in     DWORD     dwStyle      */
	int,       /* in     int       X            */
	int,       /* in     int       Y            */
	int,       /* in     int       nWidth       */
	int,       /* in     int       nHeight      */
	HWND,      /* in opt HWND      hWndParent   */
	HMENU,     /* in opt HMENU     hMenu        */
	HINSTANCE, /* in opt HINSTANCE hInstance    */
	LPVOID,    /* in opt LPVOID    lpParam      */
], f => CreateWindowExW = f);

function ShowWindow () {}ShowWindow = createAutoLoader(lib$1, "ShowWindow", BOOL /* BOOL */, [
	HWND, /* in HWND hWnd     */
	int,  /* in int  nCmdShow */
], f => ShowWindow = f);

function DrawTextW () {}DrawTextW = createAutoLoader(lib$1, "DrawTextW", int /* int */, [
	HDC,                 /* in     HDC     hdc      */
	LPCWSTR,             /*        LPCWSTR lpchText */
	int,                 /* in     int     cchText  */
	koffi.inout(LPRECT), /* in out LPRECT  lprc     */
	UINT,                /* in     UINT    format   */
], f => DrawTextW = f);

function UpdateWindow () {}UpdateWindow = createAutoLoader(lib$1, "UpdateWindow", BOOL /* BOOL */, [
	HWND, /* in HWND hWnd */
], f => UpdateWindow = f);

function BeginPaint () {}BeginPaint = createAutoLoader(lib$1, "BeginPaint", HDC /* HDC */, [
	HWND,               /* in  HWND          hWnd    */
	out(LPPAINTSTRUCT), /* out LPPAINTSTRUCT lpPaint */
], f => BeginPaint = f);

function EndPaint () {}EndPaint = createAutoLoader(lib$1, "EndPaint", BOOL /* BOOL */, [
	HWND,                 /* in HWND                hWnd    */
	pointer(PAINTSTRUCT), /* in CONST PAINTSTRUCT * lpPaint */
], f => EndPaint = f);

function GetClientRect () {}GetClientRect = createAutoLoader(lib$1, "GetClientRect", BOOL /* BOOL */, [
	HWND,        /* in  HWND   hWnd   */
	out(LPRECT), /* out LPRECT lpRect */
], f => GetClientRect = f);

function LoadImageW () {}LoadImageW = createAutoLoader(lib$1, "LoadImageW", HANDLE /* HANDLE */, [
	HINSTANCE, /* in opt HINSTANCE hInst  */
	LPCWSTR,   /* in     LPCWSTR   name   */
	UINT,      /* in     UINT      type   */
	int,       /* in     int       cx     */
	int,       /* in     int       cy     */
	UINT,      /* in     UINT      fuLoad */
], f => LoadImageW = f);

const lib = koffi.load("gdi32.dll");

function CreateFontW () {}CreateFontW = createAutoLoader(lib, "CreateFontW", HFONT /* HFONT */, [
	int,     /* in     int     cHeight         */
	int,     /* in     int     cWidth          */
	int,     /* in     int     cEscapement     */
	int,     /* in     int     cOrientation    */
	int,     /* in     int     cWeight         */
	DWORD,   /* in     DWORD   bItalic         */
	DWORD,   /* in     DWORD   bUnderline      */
	DWORD,   /* in     DWORD   bStrikeOut      */
	DWORD,   /* in     DWORD   iCharSet        */
	DWORD,   /* in     DWORD   iOutPrecision   */
	DWORD,   /* in     DWORD   iClipPrecision  */
	DWORD,   /* in     DWORD   iQuality        */
	DWORD,   /* in     DWORD   iPitchAndFamily */
	LPCWSTR, /* in opt LPCWSTR pszFaceName     */
], f => CreateFontW = f);

function GetStockObject () {}GetStockObject = createAutoLoader(lib, "GetStockObject", HGDIOBJ /* HGDIOBJ */, [
	int, /* in int i */
], f => GetStockObject = f);

function SelectObject () {}SelectObject = createAutoLoader(lib, "SelectObject", HGDIOBJ /* HGDIOBJ */, [
	HDC,     /* in HDC     hdc */
	HGDIOBJ, /* in HGDIOBJ h   */
], f => SelectObject = f);

function SetBkMode () {}SetBkMode = createAutoLoader(lib, "SetBkMode", int /* int */, [
	HDC, /* in HDC hdc  */
	int, /* in int mode */
], f => SetBkMode = f);

function SetTextColor () {}SetTextColor = createAutoLoader(lib, "SetTextColor", COLORREF /* COLORREF */, [
	HDC,      /* in HDC      hdc   */
	COLORREF, /* in COLORREF color */
], f => SetTextColor = f);

const hellos = ""
	+ "Hello" + "\r\n"
	+ "你好" + "\r\n"
	+ "こんにちは" + "\r\n"	// 日语
	+ "안녕하세요" + "\r\n"	// 韩语
	+ "Bonjour" + "\r\n"	// 法语
	+ "Hallo" + "\r\n"		// 德语
	+ "Привет" + "\r\n"		// 俄语
	+ "مرحبا" + "\r\n"		// 阿拉伯语
	+ "hej" + "\r\n"		// 丹麦语
	+ "Olá" + "\r\n"		// 葡萄牙语
	+ "tere" + "\r\n"		// 爱沙尼亚语
	+ "Hallo" + "\r\n"		// 荷兰语
	+ "Buenas" + "\r\n"		// 西班牙语
	+ "здравей" + "\r\n"	// 保加利亚语
	+ "ahoj" + "\r\n"		// 捷克语
	+ "hej" + "\r\n"		// 瑞典语
	+ "Γεια σου" + "\r\n"	// 希腊语
	+ "Ciao" + "\r\n"		// 意大利语
	+ "cześć" + "\r\n"		// 波兰语
	+ "bună" + "\r\n"		// 罗马尼亚语
	+ "zdravo" + "\r\n"		// 斯洛文尼亚语
	+ "helló" + "\r\n"		// 匈牙利语
	+ "hei" + "\r\n"		// 芬兰语
	+ "สวัสดี" + "\r\n"		// 泰语
;

function polyfill (importMeta) {
	const __filename = fileURLToPath(importMeta.url);
	const __dirname = path.dirname(__filename);

	// polyfill
	if (!importMeta.filename) { importMeta.filename = __filename;}
	if (!importMeta.dirname) { importMeta.dirname = __dirname;}

	return {__dirname, __filename};
}

/**
 * Windows API 'CreateWindowEx' Example.
 * The Hello world of the Windows GUI.
 */

polyfill(import.meta);


if (isMainThread) {
	const filename = import.meta.filename;
	const worker = new Worker(filename);
	worker.on("error", console.error);
	worker.on("message", msg => {
		switch (msg.msg) {
			case "log":
				console.log(...msg.args);
				break;
			case "exit":
				clearInterval(timer);
				break;
		}
	});
	const timer = setInterval(() => console.log("Main thread timer"), 1000);
} else {
	// Cannot directly output after entering the message loop,
	// because the script of the worker thread does not return and javascript is single-thread.
	// We post the messages to the main thread to output it.
	// **NOTE** You may lose some information while posting, because only serializable values can be post.
	console.log = function (...args) {
		parentPort.postMessage({threadId, msg: "log", args});
	};

	// Cannot trigger after entering the message loop,
	// because the script of the worker thread is not returned and javascript is single thread.
	const timer = setInterval(() => console.log("Worker thread timer"), 1000);


	// the font
	const hFont = await CreateFontW(24, 0, 0, 0, FW_DONTCARE, FALSE, FALSE, FALSE, ANSI_CHARSET,
		OUT_TT_PRECIS, CLIP_DEFAULT_PRECIS, DEFAULT_QUALITY,
		DEFAULT_PITCH | FF_DONTCARE, "");
	console.log({hFont});

	// the window proc
	const wndProc = koffi.register(function (hWnd, msg, wParam, lParam) {	// Do NOT use async for a Window proc
		console.log("Window proc called. hWnd:", hWnd.toString(16), "msg:", msg, "wParam:", wParam, "lParam:", lParam.toString(16));

		switch (msg) {
			case WM_PAINT: {
				const ps = Buffer.alloc(100);
				const rc = Buffer.alloc(100);
				const hDc = BeginPaint.sync(hWnd, ps);	// Do NOT use async in a Window proc

				SelectObject.sync(hDc, hFont);

				GetClientRect.sync(hWnd, rc);
				SetTextColor.sync(hDc, 0);
				SetBkMode.sync(hDc, TRANSPARENT);
				DrawTextW.sync(hDc, hellos, -1, rc, DT_CENTER | DT_VCENTER);

				EndPaint.sync(hWnd, ps);
				break;
			}
			case WM_DESTROY:
				PostQuitMessage.sync(0);	// Do NOT use async in a Window proc
				break;
			default:
				const r = DefWindowProcW.sync(hWnd, msg, wParam, lParam);	// Do NOT use async
				console.log("DefWindowProc:", r);
				return r;
		}
		return 0;	// Must return 0, or the DispatchMessage function will raise an error when close the window.
	}, WNDPROC);

	// registers the window class
	const className = "aFormClass";
	const wndClassEx = {
		cbSize: koffi.sizeof(WNDCLASSEX),
		lpfnWndProc: wndProc,
		lpszClassName: className,

		// below are optional
		style: CS_HREDRAW | CS_VREDRAW,
		hbrBackground: await GetStockObject(WHITE_BRUSH),
		hIconSm: await LoadImageW(0, "icon.ico", IMAGE_ICON, 16, 16, LR_LOADFROMFILE | LR_LOADTRANSPARENT),
	};
	const atom = await RegisterClassExW(wndClassEx);	// can be async
	console.log({atom});

	// creates the window
	const hWnd = CreateWindowExW.sync(0, className, "a form created in node.js", WS_OVERLAPPEDWINDOW,
		CW_USEDEFAULT, CW_USEDEFAULT, CW_USEDEFAULT, CW_USEDEFAULT,
		0, 0, 0, null);	// Do NOT use async, or the ShowWindow function never returns.
	console.log("hWnd:", hWnd.toString(16));

	// shows the window
	console.log("ShowWindow:", ShowWindow.sync(hWnd, SW_SHOWNORMAL));	// Do NOT use async，会卡死的
	console.log("UpdateWindow:", UpdateWindow.sync(hWnd));				// Do NOT use async, or the function never returns.

	// the message loop
	const msg = {};
	while (GetMessageW.sync(msg, NULL, 0, 0)) {	// Do NOT use async, or the function never returns.
		TranslateMessage.sync(msg);				// Do NOT use async, or the function never returns.
		DispatchMessageW.sync(msg);				// Do NOT use async, or the function never returns.
	}

	parentPort.postMessage({threadId, msg: "exit"});
	clearInterval(timer);
}
//# sourceMappingURL=createWindow.js.map

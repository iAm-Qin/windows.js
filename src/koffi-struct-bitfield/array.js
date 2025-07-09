import assert from "assert";
import createDebug from "debug";
import koffi from "koffi";
import {introspect} from "../globals/globals.js";

const debug = createDebug("koffi-struct-array");


const isArray = Array.isArray;

export default /*@__NO_SIDE_EFFECTS__*/ function (elementType, length, hint = "Typed") {
	debug("Defining a new `ArrayType`, elementType=%o, length=%d, hint=%s", elementType, length, hint);

	const fixedLength = length | 0;

	const elTypeDesc = introspect(elementType);

	assert(elTypeDesc.size > 0, "Cannot define an ArrayType of element's size=0.");
	assert(fixedLength > 0, "Cannot define a zero-length ArrayType.");

	class ArrayType {
		static elementType = elementType;
		static BYTES_PER_ELEMENT = elTypeDesc.size;

		static get type () {return this.elementType;}

		static toString = toString;

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
		static get = get;
		static set = set;

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
					debug("Resizing buffer from %d to %d", data.length, expectedLength);

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
function toString () { return `[ArrayType], ElementType=${this.elementType}, BYTES_PER_ELEMENT=${this.BYTES_PER_ELEMENT}`;}

/**
 * The ArrayType interface.
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
 * The ArrayType interface.
 * The usage is like setting a value within a `ref` type.
 */
function set (buffer, offset, value) {
	debug("set(%o, %d, %o)", buffer, offset, value);

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
	debug("getItem(%d)", index);

	const size = this.constructor.BYTES_PER_ELEMENT;
	const elementType = this.constructor.elementType;
	const offset = size * index;
	const end = offset + size;
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
	debug("setItem(%d, %o)", index, value);

	const ArrayType = this.constructor;
	const size = ArrayType.BYTES_PER_ELEMENT;
	const elementType = ArrayType.elementType;
	const offset = size * index;
	const end = offset + size;
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
	debug("slice(%d, %d)", start, end);

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
	debug("decode()");

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

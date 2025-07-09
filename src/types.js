import koffi from "koffi";

import {default as bitfieldStruct, bitfield, union as bitfieldUnion, array as structArray} from "./koffi-struct-bitfield/struct.js";


/**
 * Indicates whether it is 64bit windows.
 *
 * @type {boolean}
 */
export const isArch64 = /*@__PURE__*/ process.arch.includes("64");

/**
 * Defines an array member in structs. Rewrites the `koffi.array()`, supporting bitfield-structs.
 *
 * @param elementType
 * @param length
 * @param jsArrayType
 * @return {function|IKoffiCType}
 */
export /*@__NO_SIDE_EFFECTS__*/ function array (elementType, length, jsArrayType = "Array") {
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
 * @return {function(definition): constructor|IKoffiCType}
 */
export /*@__NO_SIDE_EFFECTS__*/ const struct = (...args) => {
	const definition = args[0];
	if (Object.values(definition).some(d => d.primitive)) {
		return bitfieldStruct(definition);
	} else {
		return koffi.struct(...args);
	}
};

/**
 * Defines a union. Rewrites the `koffi.union()`, supporting bitfield-structs.
 *
 * @param args
 * @return {function(definition): constructor|IKoffiCType}
 */
export /*@__NO_SIDE_EFFECTS__*/ const union = (...args) => {
	const definition = args[0];
	if (Object.values(definition).some(d => d.primitive)) {
		return bitfieldUnion(definition);
	} else {
		return koffi.union(...args);
	}
};

/**
 * Defines a bitfield member in structs. Extends the `koffi`, supporting bitfield-structs.
 *
 * @param args
 * @return {function(type, bits): {}|IKoffiCType}
 */
export {bitfield};
// export /*@__NO_SIDE_EFFECTS__*/ const bitfield = (type, bits) => bitfield(type, bits);

/**
 * Defines a pointer type. Rewrites the `koffi.pointer()`, supporting bitfield-structs.
 *
 * @param args
 * @return {IKoffiCType}
 */
export /*@__NO_SIDE_EFFECTS__*/ const pointer = (...args) => {
	const type = args[0];
	if (type?.primitive) {
		return koffi.pointer(koffi.types.void);
	} else {
		return koffi.pointer(...args);
	}
};

export /*@__NO_SIDE_EFFECTS__*/ const out = (...args) => koffi.out(...args);

export /*@__NO_SIDE_EFFECTS__*/ const inout = (...args) => koffi.inout(...args);

/**
 * Gets the size of the specific type. Rewrites the `koffi.sizeof()`, supporting bitfield-structs.
 *
 * @param type
 * @return {number}
 */
export /*@__NO_SIDE_EFFECTS__*/ const sizeof = (type) => {
	if (type.primitive) {
		return type.size;
	} else {
		return koffi.sizeof(type);
	}
};

export const char = koffi.types.char;
export const uchar = koffi.types.uchar;
export const short = koffi.types.short;
export const ushort = koffi.types.ushort;
export const int = koffi.types.int;
export const uint = koffi.types.uint;
export const long = koffi.types.long;
export const ulong = koffi.types.ulong;
export const __int32 = koffi.types.int32;
export const __int64 = koffi.types.int64;
export const u__int64 = koffi.types.uint64;
export const size_t = koffi.types.size_t;
export const wchar_t = koffi.types.int16;

export const double = koffi.types.double;
export const float = koffi.types.float;

// vcruntime.h
export const NULL = 0;

// vadefs.h
export const va_list = pointer(char);	// typedef char* va_list;

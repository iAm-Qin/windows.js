import koffi from "koffi";


const buffer = Buffer.alloc(8);
buffer.writeBigInt64LE(-1n);

/**
 * Checks whether the specific type is a signed integer.
 *
 * @param type {PrimitiveType|IKoffiCType}
 * @return {boolean}
 */
export /*@__NO_SIDE_EFFECTS__*/ function isSignedInteger (type) {
	return type.primitive
		   ? null != type.unsigned ? !type.unsigned : !(type.unsigned = -1 !== type.get(buffer, 0))
		   : -1 === koffi.decode(buffer, 0, type);
}

export /*@__NO_SIDE_EFFECTS__*/ function introspect (type) {
	return type.primitive ? type : koffi.introspect("string" === typeof type ? koffi.resolve(type) : type);
}

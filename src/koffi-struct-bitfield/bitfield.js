import assert from "assert";
import koffi from "koffi";

export default /*@__NO_SIDE_EFFECTS__*/ function (type, bits = 1) {
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
};

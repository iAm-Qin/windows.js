export const primitiveInt = {
	size: 4, alignment: 4, primitive: "Int32",
	get (buffer, offset) {
		return buffer.readInt32LE(offset);
	},
	set (buffer, offset, value) {
		buffer.writeInt32LE(value, offset);
	},
};
export const primitiveUInt = {
	size: 4, alignment: 4, primitive: "UInt32", unsigned: true,
	get (buffer, offset) {
		return buffer.readUint32LE(offset);
	},
	set (buffer, offset, value) {
		buffer.writeUint32LE(value, offset);
	},
};
export const primitiveChar = {
	size: 1, alignment: 1, primitive: "Int8",
	get (buffer, offset) {
		return buffer.readInt8(offset);
	},
	set (buffer, offset, value) {
		buffer.writeInt8(value, offset);
	},
};
export const primitiveChar16 = {
	size: 2, alignment: 2, primitive: "Int16",
	get (buffer, offset) {
		return buffer.readInt16LE(offset);
	},
	set (buffer, offset, value) {
		buffer.writeInt16LE(value, offset);
	},
};

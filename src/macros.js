import koffi from "koffi";

import {sizeof} from "./types.js";
import {isSignedInteger} from "./globals/globals.js";

/**
 * Returns the input in unicode encoding, as the behavour of `L""` in C++.
 * **NOTE** It is not necessary to use `Buffer` in `koffi`. This function directly returns the inputted string.
 *
 * 返回字符串的 unicode 编码的 Buffer，类似于 C++ 中的 L""。
 * **注** 对于 `koffi` 库，没有必要使用 `Buffer`，本函数直接返回输入字符串。
 *
 * @param text {string}
 * @return {string}
 */
export /*@__NO_SIDE_EFFECTS__*/ function L (text) {
	return text;
}

/**
 * Converts the inputted string into unicode encoding.
 * **NOTE** It is not necessary to do the convert for `koffi`. This function directly returns the inputted string.
 *
 * 转 UTF-16。
 * **注** 对于 `koffi` 库，没有必要进行转换，本函数直接返回输入字符串。
 *
 * @param text {string}
 * @return {string}
 */
export /*@__NO_SIDE_EFFECTS__*/ function TEXT (text) {
	return text;
}

/**
 * Converts the input string into `Buffer` used for fixed-sized string buffer.
 *
 * 返回适用于结构体内定长字符串的数组。
 *
 * @param str        {string}
 * @param notUnicode {boolean}
 * @return {number[]}
 */
export /*@__NO_SIDE_EFFECTS__*/ function bufferString (str, notUnicode) {
	if (null == str) {
		return null;
	}
	if (notUnicode) {
		return Buffer.concat([Buffer.from(str), Buffer.alloc(1)]).toJSON().data;
	}
	return str.split("").map(e => e.charCodeAt(0));
}

/**
 * Does the type cast(Currently only integers).
 *
 * @param type  {number|string|PrimitiveType|IKoffiCType} `koffi.types.xxx`, or the name of the type in string, or the size of the type(1/2/4/8).
 * @param value {number|BigInt}
 * @return {number|BigInt}
 */
export /*@__NO_SIDE_EFFECTS__*/ function typecast (type, value) {
	let size, unsigned = false;
	if ("number" === typeof (type)) {
		size = type;
	} else {
		if ("string" === typeof (type)) {
			type = koffi.types[type];
		}
		size = sizeof(type);
		unsigned = !isSignedInteger(type);
	}

	const bits = 8 * size;
	if (unsigned) {
		value = BigInt.asUintN(bits, BigInt(value));
	} else {
		value = BigInt.asIntN(bits, BigInt(value));
	}
	if (size <= 4) {
		value = Number(value);
	}

	return value;
}

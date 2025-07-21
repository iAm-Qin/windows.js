import TestRunner from "js-test-runner";
import koffi from "koffi";
import {typecast, int} from "windows.js";

import array from "../../src/koffi-struct-bitfield/array.js";

import {primitiveChar, primitiveChar16, primitiveInt, primitiveUInt} from "../globals/primitiveTypes.js";


function fixedLength (test, type) {
	const A = array(type, 3);
	test("primitive", t => t.expect(A.primitive).equals("Array"));
	test("alignment", t => t.expect(A.alignment).equals(4));
	test("size", t => t.expect(A.size).equals(12));
	test("length", t => t.expect(A.length).equals(3));
	test("hint", t => t.expect(A.hint).equals("Typed"));

	test("BYTES_PER_ELEMENT", t => t.expect(A.BYTES_PER_ELEMENT).equals(4));

	{
		test("a = new A();");
		const a = new A();
		test("length", t => t.expect(a.length).equals(3));
		test("buffer", t => t.expect(a.buffer.length).equals(12));
	}
	{
		test("a = new A(2);");
		const a = new A(2);
		test("length", t => t.expect(a.length).equals(2));
		test("buffer", t => t.expect(a.buffer.length).equals(8));
	}
	{
		test("a = new A([1, 2, 3]);");
		const a = new A([1, 2, 3]);
		test("length", t => t.expect(a.length).equals(3));
		test("buffer", t => t.expect(a.buffer.length).equals(12));
		test("values", t => {
			t.expect(a[0]).equalsStrictly(1);
			t.expect(a[1]).equalsStrictly(2);
			t.expect(a[2]).equalsStrictly(3);
		});
		{
			let err = false;
			try {
				new A([1, 2], 3);
			} catch (ex) {
				err = true;
			}
			test("new A([1, 2], 3)", t => t.expect(err).equals(true));
		}
		{
			let err = false;
			try {
				new A([1, 2, 3, 4], 3);
			} catch (ex) {
				err = true;
			}
			test("new A([1, 2, 3, 4], 3)", t => t.expect(err).equals(false));
		}
	}
	{
		test("a = new A(Buffer);");
		const a = new A(Buffer.alloc(13, 0xFF));
		test("length", t => t.expect(a.length).equals(3));
		test("buffer", t => t.expect(a.buffer.length).equals(12));
		test("values", t => {
			t.expect(a[0]).equalsStrictly(-1);
			t.expect(a[1]).equalsStrictly(-1);
			t.expect(a[2]).equalsStrictly(-1);
		});
	}
	{
		const a = A.get(Buffer.alloc(13, 0xEE), 0);
		test("values", t => {
			t.expect(a.buffer.toString("hex").toUpperCase())
				.equalsStrictly("EEEEEEEE".repeat(3));
			t.expect(a[0]).equalsStrictly(-286331154);
			t.expect(a[1]).equalsStrictly(-286331154);
			t.expect(a[2]).equalsStrictly(-286331154);
			t.expect(a.buffer.toString("hex").toUpperCase())
				.equalsStrictly("EEEEEEEE".repeat(3));
		});

		a[1] = 1;
		a[2] = -1;
		test("values", t => {
			t.expect(a.buffer.toString("hex").toUpperCase())
				.equalsStrictly("EEEEEEEE 01000000 FFFFFFFF".replace(/\s+/g, ""));
			t.expect(a[0]).equalsStrictly(-286331154);
			t.expect(a[1]).equalsStrictly(1);
			t.expect(a[2]).equalsStrictly(-1);
			t.expect(a.buffer.toString("hex").toUpperCase())
				.equalsStrictly("EEEEEEEE 01000000 FFFFFFFF".replace(/\s+/g, ""));
		});
	}
}

const koffiInt = koffi.types.int;


function decodeTest (test, typeInt, uint, char, char16) {
	{
		test("hint: Typed");
		{
			const A = array(typeInt ?? koffi.types.int, 4);
			const a = new A(Buffer.from("112233445566778899AABBCCDDEEFF00", "hex"));
			test("int", t => {
				const decoded = a.decode();
				t.expect(decoded.constructor.name).equalsStrictly("Int32Array");
				t.expect(decoded[0]).equalsStrictly(0x44332211);
				t.expect(decoded[1]).equalsStrictly(typecast(int, 0x88776655));
				t.expect(decoded[2]).equalsStrictly(typecast(int, 0xCCBBAA99));
				t.expect(decoded[3]).equalsStrictly(typecast(int, 0x00FFEEDD));
			});
		}
		{
			const A = array(uint ?? koffi.types.uint, 4);
			const a = new A(Buffer.from("112233445566778899AABBCCDDEEFF00", "hex"));
			test("uint", t => {
				const decoded = a.decode();
				t.expect(decoded.constructor.name).equalsStrictly("Uint32Array");
				t.expect(decoded[0]).equalsStrictly(0x44332211);
				t.expect(decoded[1]).equalsStrictly(0x88776655);
				t.expect(decoded[2]).equalsStrictly(0xCCBBAA99);
				t.expect(decoded[3]).equalsStrictly(0x00FFEEDD);
			});
		}

		test("hint: Array");
		{
			const A = array(typeInt ?? koffi.types.int, 4, "Array");
			const a = new A(Buffer.from("112233445566778899AABBCCDDEEFF00", "hex"));
			test("int", t => {
				const decoded = a.decode();
				t.expect(Array.isArray(decoded)).equalsStrictly(true);
				t.expect(decoded[0]).equalsStrictly(0x44332211);
				t.expect(decoded[1]).equalsStrictly(typecast(int, 0x88776655));
				t.expect(decoded[2]).equalsStrictly(typecast(int, 0xCCBBAA99));
				t.expect(decoded[3]).equalsStrictly(typecast(int, 0x00FFEEDD));
			});
		}
		{
			const A = array(uint ?? koffi.types.uint, 4, "Array");
			const a = new A(Buffer.from("112233445566778899AABBCCDDEEFF00", "hex"));
			test("uint", t => {
				const decoded = a.decode();
				t.expect(Array.isArray(decoded)).equalsStrictly(true);
				t.expect(decoded[0]).equalsStrictly(0x44332211);
				t.expect(decoded[1]).equalsStrictly(0x88776655);
				t.expect(decoded[2]).equalsStrictly(0xCCBBAA99);
				t.expect(decoded[3]).equalsStrictly(0x00FFEEDD);
			});
		}

		test("hint: String");
		{
			const A = array(char ?? koffi.types.char, 10, "String");
			// const A = array(koffi.types.int8, 10, "String");	// ok
			// const A = array(koffi.types.uint8, 10, "String");// Error: Array hint 'String' can only be used with 8 and 16-bit signed integer types
			const a = new A(Buffer.from("abcdefghijlmn"));
			test("String", t => {
				t.expect(a.decode()).equalsStrictly("abcdefghij");
			});

			a[0] = "b";
			test("String", t => {
				t.expect(a.decode()).equalsStrictly("bbcdefghij");
			});
		}
		{
			// const A = array(koffi.types.char16, 10);			// will not decode to string
			const A = array(char16 ?? koffi.types.char16, 10, "String");	// must explicitly pass "String"
			// const A = array(koffi.types.wchar, 10, "String");// ok
			// const A = array(koffi.types.char32, 4, "String");// Error: Array hint 'String' can only be used with 8 and 16-bit signed integer types

			const a = new A(Buffer.from("a\0b\0c\0d\0e\0f\0g\0h\0i\0j\0k\0l\0"));
			test("String", t => {
				t.expect(a.decode()).equalsStrictly("abcdefghij");
			});

			a[0] = "bc";	// only the first char will be set into
			test("String", t => {
				t.expect(a.decode()).equalsStrictly("bbcdefghij");
			});
		}
	}
}

const groups = [{
	title: "fixed",
	test (test) {
		fixedLength(test, primitiveInt);
	},
}, {
	title: "fixed-koffi.types",
	test (test) {
		fixedLength(test, koffiInt);
	},
}, {
	title: "decode()-koffi.types",
	test (test) {
		decodeTest(test);
	},
}, {
	title: "decode()-primitive",
	test (test) {
		decodeTest(test, primitiveInt, primitiveUInt, primitiveChar, primitiveChar16);
	},
}];

const results = await new TestRunner(groups).run();
console.log(TestRunner.textView(results));

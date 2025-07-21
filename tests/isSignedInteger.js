import koffi from "koffi";

import TestRunner from "js-test-runner";

import {isSignedInteger} from "../src/globals/globals.js";

import {primitiveInt, primitiveUInt} from "./globals/primitiveTypes.js";


const groups = [{
	title: "primitive",
	test (test) {
		test("signed", t => {
			t.expect(isSignedInteger(primitiveInt)).equals(true);
		});

		test("unsigned", t => {
			t.expect(isSignedInteger(primitiveUInt)).equals(false);
		});
	},
}, {
	title: "koffi",
	test (test) {
		test("signed", t => {
			t.expect(isSignedInteger(koffi.types.int)).equals(true);
			t.expect(isSignedInteger(koffi.types.short)).equals(true);
			t.expect(isSignedInteger(koffi.types.long)).equals(true);
			t.expect(isSignedInteger(koffi.types.longlong)).equals(true);
			t.expect(isSignedInteger(koffi.types.char)).equals(true);
		});

		test("unsigned", t => {
			t.expect(isSignedInteger(koffi.types.uint)).equals(false);
			t.expect(isSignedInteger(koffi.types.ushort)).equals(false);
			t.expect(isSignedInteger(koffi.types.ulong)).equals(false);
			t.expect(isSignedInteger(koffi.types.ulonglong)).equals(false);
			t.expect(isSignedInteger(koffi.types.uchar)).equals(false);
			t.expect(isSignedInteger(koffi.types.bool)).equals(false);
		});
	},
}];

const results = await new TestRunner(groups).run();
console.log(TestRunner.textView(results));

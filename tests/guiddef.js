import TestRunner from "js-test-runner";

import {
	IsEqualGUID, IsEqualIID, IsEqualCLSID,
} from "windows.js";


const guid1 = {
	Data1: 0x11223344,
	Data2: 0x5566,
	Data3: 0x7788,
	Data4: [0x99, 0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF, 0x00],
};
const guid2 = {
	Data1: 0x11223344,
	Data2: 0x5566,
	Data3: 0x7788,
	Data4: [0x99, 0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF, 0x00],
};
const guid3 = {
	Data1: 0x11223344,
	Data2: 0x5566,
	Data3: 0x7788,
	Data4: [0x99, 0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF, 0x01],
};
const groups = [{
	title: "IsEqualGUID",
	test (test) {
		test("eq", t => t.expect(IsEqualGUID(guid1, guid2)).equals(true));
		test("ne", t => t.expect(IsEqualGUID(guid1, guid3)).equals(false));
	},
}, {
	title: "IsEqualIID",
	test (test) {
		test("eq", t => t.expect(IsEqualIID(guid1, guid2)).equals(true));
		test("ne", t => t.expect(IsEqualIID(guid1, guid3)).equals(false));
	},
}, {
	title: "IsEqualCLSID",
	test (test) {
		test("eq", t => t.expect(IsEqualCLSID(guid1, guid2)).equals(true));
		test("ne", t => t.expect(IsEqualCLSID(guid1, guid3)).equals(false));
	},
}];

const results = await new TestRunner(groups).run();
console.log(TestRunner.textView(results));

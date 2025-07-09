import TestRunner from "js-test-runner";

import {
	CBT_CREATEWNDW, CBTACTIVATESTRUCT, CREATESTRUCTW,
	FIELD_OFFSET, UFIELD_OFFSET, RTL_FIELD_SIZE,
	Int32x32To64, UInt32x32To64, Int64ShllMod32, Int64ShraMod32, Int64ShrlMod32,
	REPARSE_GUID_DATA_BUFFER_HEADER_SIZE,
	isArch64,
	typecast,
	__int64,
} from "windows.js";


const groups = [{
	title: "REPARSE_GUID_DATA_BUFFER_HEADER_SIZE",
	test (test) {
		test("value", t => t.expect(REPARSE_GUID_DATA_BUFFER_HEADER_SIZE).equals(24));
	},
}, {
	title: "FIELD_OFFSET",
	test (test) {
		test("lpcs", t => t.expect(FIELD_OFFSET(CBT_CREATEWNDW, "lpcs")).equals(0));
		test("hwndInsertAfter", t => t.expect(FIELD_OFFSET(CBT_CREATEWNDW, "hwndInsertAfter")).equals(isArch64 ? 8 : 4));

		test("fMouse", t => t.expect(FIELD_OFFSET(CBTACTIVATESTRUCT, "fMouse")).equals(0));
		test("hWndActive", t => t.expect(FIELD_OFFSET(CBTACTIVATESTRUCT, "hWndActive")).equals(isArch64 ? 8 : 4));
	},
}, {
	title: "UFIELD_OFFSET",
	test (test) {
		test("lpcs", t => t.expect(UFIELD_OFFSET(CBT_CREATEWNDW, "lpcs")).equals(0));
		test("hwndInsertAfter", t => t.expect(UFIELD_OFFSET(CBT_CREATEWNDW, "hwndInsertAfter")).equals(isArch64 ? 8 : 4));

		test("fMouse", t => t.expect(UFIELD_OFFSET(CBTACTIVATESTRUCT, "fMouse")).equals(0));
		test("hWndActive", t => t.expect(UFIELD_OFFSET(CBTACTIVATESTRUCT, "hWndActive")).equals(isArch64 ? 8 : 4));
	},
}, {
	title: "RTL_FIELD_SIZE",
	test (test) {
		test("lpcs", t => t.expect(RTL_FIELD_SIZE(CBT_CREATEWNDW, "lpcs")).equals(isArch64 ? 8 : 4));
		test("hwndInsertAfter", t => t.expect(RTL_FIELD_SIZE(CBT_CREATEWNDW, "hwndInsertAfter")).equals(isArch64 ? 8 : 4));

		test("fMouse", t => t.expect(RTL_FIELD_SIZE(CBTACTIVATESTRUCT, "fMouse")).equals(4));
		test("hWndActive", t => t.expect(RTL_FIELD_SIZE(CBTACTIVATESTRUCT, "hWndActive")).equals(isArch64 ? 8 : 4));

		test("CREATESTRUCTW", t => {
			t.expect(RTL_FIELD_SIZE(CREATESTRUCTW, "lpCreateParams")).equals(isArch64 ? 8 : 4);
			t.expect(RTL_FIELD_SIZE(CREATESTRUCTW, "x")).equals(4);
		});
	},
}, {
	title: "Int32x32To64",
	test (test) {
		test("value", t => {
			t.expect(Int32x32To64(10, 10)).equalsStrictly(100n);
			t.expect(Int32x32To64(0xFFFFFFFF, 0xFFFFFFFF)).equalsStrictly(1n);
			t.expect(Int32x32To64(0x7FFFFFFF, 0x7FFFFFFF)).equalsStrictly(0x3FFFFFFF00000001n);
		});
	},
}, {
	title: "UInt32x32To64",
	test (test) {
		test("value", t => {
			t.expect(UInt32x32To64(10, 10)).equalsStrictly(100n);
			t.expect(UInt32x32To64(0xFFFFFFFF, 0xFFFFFFFF)).equalsStrictly(0xFFFFFFFE00000001n);
		});
	},
}, {
	title: "Int64ShllMod32",
	test (test) {
		test("value", t => t.expect(Int64ShllMod32(1, 10)).equalsStrictly(0b10000000000n));
	},
}, {
	title: "Int64ShraMod32",
	test (test) {
		test("value", t => t.expect(Int64ShraMod32(0x8000_0000_0000_0000n, 1)).equalsStrictly(typecast(__int64, 0xC000_0000_0000_0000n)));
	},
}, {
	title: "Int64ShrlMod32",
	test (test) {
		test("value", t => t.expect(Int64ShrlMod32(0x8000_0000_0000_0000n, 1)).equalsStrictly(0x4000_0000_0000_0000n));
	},
}];

const results = await new TestRunner(groups).run();
console.log(TestRunner.textView(results));

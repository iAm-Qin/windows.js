import {
	typecast,
	__int64,
	int,
	short, ushort,
	char, uchar,
	UINT,
	UINT64, size_t, isArch64,
} from "windows.js";

import TestRunner from "js-test-runner";


const groups = [{
	title: "__int64",
	test (test) {
		test("signed", t => {
			t.expect(typecast(__int64, 1)).equals(1);
			t.expect(typecast(__int64, -1)).equals(-1);

			t.expect(typecast(__int64, 0xFFFF_FFFF_FFFF_FFFFn)).equals(-1);
			t.expect(typecast(__int64, 0xFFFF_FFFF_FFFF_FFFEn)).equals(-2);
			t.expect(typecast(__int64, 0xFFFF_FFFF_FFFF_FFFdn)).equals(-3);
		});

		test("unsigned", t => {
			t.expect(typecast(UINT64, 1)).equals(1);
			t.expect(typecast(UINT64, -1)).equals(0xFFFF_FFFF_FFFF_FFFFn);
			t.expect(typecast(UINT64, -2)).equals(0xFFFF_FFFF_FFFF_FFFen);
			t.expect(typecast(UINT64, -3)).equals(0xFFFF_FFFF_FFFF_FFFdn);
			t.expect(typecast(UINT64, 0xFFFF_FFFF_FFFF_FFFFn)).equals(0xFFFF_FFFF_FFFF_FFFFn);
		});
	},
}, {
	title: "int",
	test (test) {
		test("signed", t => {
			t.expect(typecast(int, 1)).equals(1);
			t.expect(typecast(int, -1)).equals(-1);

			t.expect(typecast(int, 0xFFFF_FFFF)).equals(-1);
			t.expect(typecast(int, 0xFFFF_FFFE)).equals(-2);
			t.expect(typecast(int, 0xFFFF_FFFd)).equals(-3);
		});

		test("unsigned", t => {
			t.expect(typecast(UINT, 1)).equals(1);
			t.expect(typecast(UINT, -1)).equals(0xFFFF_FFFF);
			t.expect(typecast(UINT, -2)).equals(0xFFFF_FFFe);
			t.expect(typecast(UINT, -3)).equals(0xFFFF_FFFd);
			t.expect(typecast(UINT, 0xFFFF_FFFF)).equals(0xFFFF_FFFF);
		});
	},
}, {
	title: "short",
	test (test) {
		test("signed", t => {
			t.expect(typecast(short, 1)).equals(1);
			t.expect(typecast(short, -1)).equals(-1);

			t.expect(typecast(short, 0xFFFF)).equals(-1);
			t.expect(typecast(short, 0xFFFE)).equals(-2);
			t.expect(typecast(short, 0xFFFd)).equals(-3);

			t.expect(typecast(short, 0x7FFF)).equals(0x7FFF);

			t.expect(typecast(short, 0x1FFFF)).equals(-1);
			t.expect(typecast(short, 0xFFFF7FFF)).equals(0x7FFF);
		});

		test("unsigned", t => {
			t.expect(typecast(ushort, 1)).equals(1);
			t.expect(typecast(ushort, -1)).equals(0xFFFF);
			t.expect(typecast(ushort, -2)).equals(0xFFFe);
			t.expect(typecast(ushort, -3)).equals(0xFFFd);
			t.expect(typecast(ushort, 0xFFFF)).equals(0xFFFF);
		});
	},
}, {
	title: "char",
	test (test) {
		test("signed", t => {
			t.expect(typecast(char, 1)).equals(1);
			t.expect(typecast(char, -1)).equals(-1);

			t.expect(typecast(char, 0xFF)).equals(-1);
			t.expect(typecast(char, 0xFE)).equals(-2);
			t.expect(typecast(char, 0xFd)).equals(-3);

			t.expect(typecast(char, 0x7F)).equals(0x7F);

			t.expect(typecast(char, 0x1FF)).equals(-1);
			t.expect(typecast(char, 0xFFFFFF7F)).equals(0x7F);
		});

		test("unsigned", t => {
			t.expect(typecast(uchar, 1)).equals(1);
			t.expect(typecast(uchar, -1)).equals(0xFF);
			t.expect(typecast(uchar, -2)).equals(0xFe);
			t.expect(typecast(uchar, -3)).equals(0xFd);
			t.expect(typecast(uchar, 0xFF)).equals(0xFF);
		});
	},
}, {
	title: "size_t",
	test (test) {
		test("unsigned", t => {
			t.expect(typecast(size_t, 1)).equals(1);
			t.expect(typecast(size_t, -1)).equals(isArch64 ? 0xFFFF_FFFF_FFFF_FFFFn : 0xFFFF_FFFF);
			t.expect(typecast(size_t, -2)).equals(isArch64 ? 0xFFFF_FFFF_FFFF_FFFen : 0xFFFF_FFFF);
			t.expect(typecast(size_t, -3)).equals(isArch64 ? 0xFFFF_FFFF_FFFF_FFFdn : 0xFFFF_FFFF);
			t.expect(typecast(size_t, 0xFFFF_FFFF_FFFF_FFFFn)).equals(isArch64 ? 0xFFFF_FFFF_FFFF_FFFFn : 0xFFFF_FFFF);
		});
	},
}];

const results = await new TestRunner(groups).run();
console.log(TestRunner.textView(results));

import koffi from "koffi";
import TestRunner from "js-test-runner";
import {
	MENUBARINFO,			// WinUser.h 中唯一一个含有 bitfield 的结构
	IMAGE_TLS_DIRECTORY64,	// struct/union/struct(bitfield)
	PROCESSOR_POWER_POLICY, PROCESSOR_POWER_POLICY_INFO,	// struct/array(struct(bitfield))
} from "windows.js";
import {isArch64} from "windows.js";


const groups = [{
	title: "MENUBARINFO",
	test (test) {
		const S = MENUBARINFO;

		test("size", t => t.expect(S.size).equals(isArch64 ? 48 : 32));
		test("alignment", t => t.expect(S.alignment).equals(isArch64 ? 8 : 4));
		test("primitive", t => t.expect(S.primitive).equals("Record"));
		test("members", t => {
			t.expect(S.members.cbSize.name).equals("cbSize");
			t.expect(S.members.cbSize.offset).equals(0);
			const type = koffi.introspect(S.members.cbSize.type);
			t.expect(type.name).equals("unsigned long");
			t.expect(type.primitive).equals("UInt32");
			t.expect(type.size).equals(4);
			t.expect(type.alignment).equals(4);

			t.expect(S.members.rcBar.name).equals("rcBar");
			t.expect(S.members.rcBar.offset).equals(4);

			t.expect(S.members.hMenu.name).equals("hMenu");
			t.expect(S.members.hMenu.offset).equals(24);

			t.expect(S.members.hwndMenu.name).equals("hwndMenu");
			t.expect(S.members.hwndMenu.offset).equals(32);

			t.expect(S.members.fBarFocused.name).equals("fBarFocused");
			t.expect(S.members.fBarFocused.offset).equals(40);
			t.expect(S.members.fBarFocused.bitStart).equals(0);
			t.expect(S.members.fBarFocused.bits).equals(1);
			t.expect(S.members.fBarFocused.mask).equals(1);

			t.expect(S.members.fFocused.name).equals("fFocused");
			t.expect(S.members.fFocused.offset).equals(40);
			t.expect(S.members.fFocused.bitStart).equals(1);
			t.expect(S.members.fFocused.bits).equals(1);
			t.expect(S.members.fFocused.mask).equals(1);

			t.expect(S.members.fUnused.name).equals("fUnused");
			t.expect(S.members.fUnused.offset).equals(40);
			t.expect(S.members.fUnused.bitStart).equals(2);
			t.expect(S.members.fUnused.bits).equals(30);
			t.expect(S.members.fUnused.mask).equals(0x3FFFFFFF);
		});
		test("packed", t => t.expect(S.packed).equals(false));

		const s = new S({
			fBarFocused: 1,
		});
		test("buffer", t => t.expect(
			s.buffer.toString("hex") === "00".repeat(S.size - 8) + "01" + "00".repeat(isArch64 ? 7 : 3),
		).equals(true));

		{
			const s = new S({
				cbSize: MENUBARINFO.size,
				rcBar: {left: 0x11223344, top: 0x22334455, right: 0x33445566, bottom: 0x44556677},
				hMenu: 0x1122334455667788n,
				hwndMenu: 0x8877665544332211n,
				fBarFocused: 1,
				fFocused: 1,
				fUnused: 2,
			});
			test("buffer", t => t.expect(
				s.buffer.toString("hex").toLowerCase() === (
					isArch64
					? "30000000 44332211 55443322 66554433 77665544 00000000 8877665544332211 1122334455667788 0b000000 00000000"
					: "20000000 44332211 55443322 66554433 77665544 44332211 11223344 0b000000"
				).replace(/\s+/g, "").toLowerCase(),
			).equals(true));
		}

		test("value", t => t.expect(s.fBarFocused).equals(-1));
	},
}, {
	title: "IMAGE_TLS_DIRECTORY64",
	test (test) {
		const S = IMAGE_TLS_DIRECTORY64;

		test("size", t => t.expect(S.size).equals(40));
		test("alignment", t => t.expect(S.alignment).equals(8));
		test("members", t => {
			t.expect(S.members.StartAddressOfRawData.offset).equals(0);
			t.expect(S.members.EndAddressOfRawData.offset).equals(8);
			t.expect(S.members.AddressOfIndex.offset).equals(16);
			t.expect(S.members.AddressOfCallBacks.offset).equals(24);
			t.expect(S.members.SizeOfZeroFill.offset).equals(32);
			t.expect(S.members.u.offset).equals(36);
			t.expect(S.members.u.type.members.s.type.members.Reserved0.offset).equals(0);	// It's the offset of the current
			t.expect(S.members.u.type.members.s.type.members.Alignment.offset).equals(0);	// struct, not the top level.
			t.expect(S.members.u.type.members.s.type.members.Reserved1.offset).equals(0);
		});

		const s = new S();
		s.u.s.Alignment = 0b1111;
		test("buffer", t => t.expect(s.buffer.toString("hex").substr(36 * 2).toUpperCase()).equals("0000F000"));
		test("value", t => t.expect(s.u.Characteristics).equals(0x00F00000));
		test("Alignment", t => t.expect(s.u.s.Alignment).equals(15));


		s.StartAddressOfRawData = 0x1122334455667788n;
		s.EndAddressOfRawData = 0x2233445566778899n;
		s.AddressOfIndex = 0x33445566778899AAn;
		s.AddressOfCallBacks = 0x445566778899AABBn;
		s.SizeOfZeroFill = 0xCCDDEEFF;
		s.u.s.Reserved0 = 0x112233;	// exceeds 4 bits. the higher bits will be truncated
		s.u.s.Reserved1 = 1;
		test("buffer", t => t.expect(s.buffer.toString("hex").toUpperCase() === "8877665544332211 9988776655443322 AA99887766554433 BBAA998877665544 FFEEDDCC 3322F101".replace(/\s+/g, "")).equals(true));

	},
}, {
	title: "PROCESSOR_POWER_POLICY",
	test (test) {
		const S = PROCESSOR_POWER_POLICY;

		test("size", t => t.expect(S.size).equals(76));
		test("alignment", t => t.expect(S.alignment).equals(4));
		test("members", t => {
			t.expect(S.members.Revision.offset).equals(0);
			t.expect(S.members.DynamicThrottle.offset).equals(4);
			t.expect(S.members.Spare.offset).equals(5);
			t.expect(S.members.DisableCStates.offset).equals(8);
			t.expect(S.members.Reserved.offset).equals(8);
			t.expect(S.members.PolicyCount.offset).equals(12);
			t.expect(S.members.Policy.offset).equals(16);
			t.expect(S.members.Policy.type.size).equals(60);
			t.expect(S.members.Policy.type.length).equals(3);
		});

		const s = new S();
		s.Revision = 0x11223344;
		s.DynamicThrottle = 0x55;
		s.Spare = [0x66, 0x77, 0x88];
		s.DisableCStates = 1;
		s.Reserved = 2;
		s.PolicyCount = 3;
		const processorPowerPolicyInfo = new PROCESSOR_POWER_POLICY_INFO({
			TimeCheck: 0x11223344,
			DemoteLimit: 0x55667788,
			PromoteLimit: 0x99AABBCC,
			DemotePercent: 0xDD,
			PromotePercent: 0xEE,
			Spare: [0xFF, 0x00],
			AllowDemotion: 1,
			AllowPromotion: 0,
			Reserved: 0x30,
		});
		s.Policy = [processorPowerPolicyInfo, processorPowerPolicyInfo, processorPowerPolicyInfo];

		test("buffer", t => t.expect(s.buffer.toString("hex").toUpperCase() === ("44332211 55 667788 05000000 03000000" + "44332211 88776655 CCBBAA99 DD EE FF00 C1000000".repeat(3)).replace(/\s+/g, "")).equals(true));
	},
}];

const results = await new TestRunner(groups).run();
console.log(TestRunner.textView(results));

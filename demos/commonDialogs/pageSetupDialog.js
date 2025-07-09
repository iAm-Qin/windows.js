import koffi from "koffi";

import {
	PageSetupDlg, CommDlgExtendedError,
	GlobalLock, GlobalUnlock, GlobalFree, CloseHandle,
} from "windows.js";
import {PAGESETUPDLG, DEVMODE, DEVNAMES} from "windows.js";


const ps = {
	lStructSize: koffi.sizeof(PAGESETUPDLG),
	hwndOwner: 0,
	hDevMode: 0,
	hDevNames: 0,
	Flags: 0,
	ptPaperSize: {},
	rtMinMargin: {},
	rtMargin: {},
	hInstance: 0,
	lCustData: 0,
	lpfnPageSetupHook: null,
	lpfnPagePaintHook: null,
	lpPageSetupTemplateName: null,
	hPageSetupTemplate: 0,
};
let dr = await PageSetupDlg(ps);
if (!dr) {
	console.log("You cancelled the dialog, or an error code: ", (await CommDlgExtendedError()).toString(16));
} else {
	let dm, da;
	if (ps.hDevMode) {
		const lpDevMode = await GlobalLock(ps.hDevMode);
		if (lpDevMode) {
			dm = koffi.decode(lpDevMode, DEVMODE);
		}
		await GlobalUnlock(ps.hDevMode);
		await GlobalFree(ps.hDevMode);
		await CloseHandle(ps.hDevMode);
	}
	if (ps.hDevNames) {
		const lpDevNames = await GlobalLock(ps.hDevNames);
		if (lpDevNames) {
			da = koffi.decode(lpDevNames, DEVNAMES);
			const buffer = koffi.view(lpDevNames, 1000);
			da.driver = koffi.decode(buffer.slice(da.wDriverOffset * 2), "wchar", 1000);
			da.device = koffi.decode(buffer.slice(da.wDeviceOffset * 2), "wchar", 1000);
			da.output = koffi.decode(buffer.slice(da.wOutputOffset * 2), "wchar", 1000);
		}
		await GlobalUnlock(ps.hDevNames);
		await GlobalFree(ps.hDevNames);
		await CloseHandle(ps.hDevNames);
	}
	console.log({
		ptPaperSize: ps.ptPaperSize,
		rtMinMargin: ps.rtMinMargin,
		rtMargin: ps.rtMargin,
		dm, da,
	});
	console.log(JSON.stringify(dm, null, 4));
}

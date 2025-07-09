import koffi from "koffi";

import {
	PrintDlg, CommDlgExtendedError,
	GlobalLock, GlobalUnlock, GlobalFree, CloseHandle,
} from "windows.js";
import {PD_PRINTSETUP} from "windows.js";
import {PRINTDLG, DEVMODE, DEVNAMES} from "windows.js";


const pd = {
	lStructSize: koffi.sizeof(PRINTDLG),
	hwndOwner: 0,
	hDevMode: 0,
	hDevNames: 0,
	hDC: 0,
	Flags: 0,
	nFromPage: 0,
	nToPage: 100,
	nMinPage: 1,
	nMaxPage: 100,
	nCopies: 0,
	hInstance: 0,
	lCustData: 0,
	lpfnPrintHook: null,
	lpfnSetupHook: null,
	lpPrintTemplateName: null,
	lpSetupTemplateName: null,
	hPrintTemplate: 0,
	hSetupTemplate: 0,
};
let dr = await PrintDlg(pd);
if (!dr) {
	console.log("You cancelled the dialog, or an error code: ", (await CommDlgExtendedError()).toString(16));
} else {
	pd.Flags |= PD_PRINTSETUP;

	dr = await PrintDlg(pd);
	if (!dr) {
		console.log("You cancelled the dialog, or an error code: ", (await CommDlgExtendedError()).toString(16));
	} else {
		let dm, da;
		if (pd.hDevMode) {
			const lpDevMode = await GlobalLock(pd.hDevMode);
			if (lpDevMode) {
				dm = koffi.decode(lpDevMode, DEVMODE);
			}
			await GlobalUnlock(pd.hDevMode);
			await GlobalFree(pd.hDevMode);
			await CloseHandle(pd.hDevMode);
		}
		if (pd.hDevNames) {
			const lpDevNames = await GlobalLock(pd.hDevNames);
			if (lpDevNames) {
				da = koffi.decode(lpDevNames, DEVNAMES);
				const buffer = koffi.view(lpDevNames, 1000);
				da.driver = koffi.decode(buffer.slice(da.wDriverOffset * 2), "wchar", 1000);
				da.device = koffi.decode(buffer.slice(da.wDeviceOffset * 2), "wchar", 1000);
				da.output = koffi.decode(buffer.slice(da.wOutputOffset * 2), "wchar", 1000);
			}
			await GlobalUnlock(pd.hDevNames);
			await GlobalFree(pd.hDevNames);
			await CloseHandle(pd.hDevNames);
		}
		console.log({
			nFromPage: pd.nFromPage,
			nToPage: pd.nToPage,
			nCopies: pd.nCopies,
			hDevMode: pd.hDevMode,
			dm, da,
		});
		console.log(JSON.stringify(dm, null, 4));
	}
}

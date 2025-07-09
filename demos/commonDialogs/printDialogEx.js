import koffi from "koffi";

import {
	FindWindow,
	PrintDlgEx, FormatMessage,
	GlobalLock, GlobalUnlock, GlobalFree, CloseHandle,
	DeleteDC,
	typecast,
} from "windows.js";
import {DWORD} from "windows.js";
import {PRINTDLGEX, PRINTPAGERANGE, DEVMODE, DEVNAMES} from "windows.js";
import {
	FORMAT_MESSAGE_FROM_SYSTEM, FORMAT_MESSAGE_IGNORE_INSERTS, S_OK, PD_RETURNDC, PD_COLLATE, START_PAGE_GENERAL,
	PD_RESULT_APPLY, PD_RESULT_CANCEL, PD_RESULT_PRINT,
} from "windows.js";


const hWndOwner = await FindWindow("Notepad", null);
if (!hWndOwner) {
	console.log("`Notepad` window not found.");
	process.exit();
}

const ppr = {
	nFromPage: 1,
	nToPage: 100,
};
const pdx = {
	lStructSize: koffi.sizeof(PRINTDLGEX),
	hwndOwner: hWndOwner,	// cannot be NULL
	hDevMode: 0,
	hDevNames: 0,
	hDC: 0,
	Flags: PD_RETURNDC | PD_COLLATE,
	Flags2: 0,
	ExclusionFlags: 0,
	nPageRanges: 0,
	nMaxPageRanges: 1,
	lpPageRanges: [ppr],
	nMinPage: 1,
	nMaxPage: 1000,
	nCopies: 1,
	hInstance: 0,
	lpPrintTemplateName: null,
	lpCallback: null,
	nPropertyPages: 0,
	lphPropertyPages: null,
	nStartPage: START_PAGE_GENERAL,
	dwResultAction: 0,
};
const dr = await PrintDlgEx(pdx);
if (S_OK !== dr) {
	console.log("An error code: ", typecast(DWORD, dr).toString(16));
	const buffer = Buffer.alloc(500 * 2);
	const len = await FormatMessage(
		FORMAT_MESSAGE_FROM_SYSTEM | FORMAT_MESSAGE_IGNORE_INSERTS,
		null, dr, 0, buffer, 500, null);
	console.log({len, str: buffer.slice(0, len * 2).toString("ucs-2")});
} else {
	switch (pdx.dwResultAction) {
		case PD_RESULT_APPLY:
			console.log("You applied the settings.");
			break;
		case PD_RESULT_CANCEL:
			console.log("You cancelled the dialog.");
			break;
		case PD_RESULT_PRINT:
			console.log("You want to print now.");
			let dm, da;
			if (pdx.hDevMode) {
				const lpDevMode = await GlobalLock(pdx.hDevMode);
				if (lpDevMode) {
					dm = koffi.decode(lpDevMode, DEVMODE);
				}
				await GlobalUnlock(pdx.hDevMode);
				await GlobalFree(pdx.hDevMode);
				await CloseHandle(pdx.hDevMode);
			}
			if (pdx.hDevNames) {
				const lpDevNames = await GlobalLock(pdx.hDevNames);
				if (lpDevNames) {
					da = koffi.decode(lpDevNames, DEVNAMES);
					const buffer = koffi.view(lpDevNames, 1000);
					da.driver = koffi.decode(buffer.slice(da.wDriverOffset * 2), "wchar", 1000);
					da.device = koffi.decode(buffer.slice(da.wDeviceOffset * 2), "wchar", 1000);
					da.output = koffi.decode(buffer.slice(da.wOutputOffset * 2), "wchar", 1000);
				}
				await GlobalUnlock(pdx.hDevNames);
				await GlobalFree(pdx.hDevNames);
				await CloseHandle(pdx.hDevNames);
			}
			console.log({
				nFromPage: ppr.nFromPage,
				nToPage: ppr.nToPage,
				nCopies: pdx.nCopies,
				hDevMode: pdx.hDevMode,
				dm, da,
			});
			console.log(JSON.stringify(dm, null, 4));
			break;
	}
	if (pdx.hDC) {
		DeleteDC(pdx.hDC);
	}
}

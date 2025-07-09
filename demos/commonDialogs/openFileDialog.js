import koffi from "koffi";

import {GetOpenFileName, CommDlgExtendedError, GetFileTitle} from "windows.js";
import {MAX_PATH, OFN_ALLOWMULTISELECT, OFN_ENABLESIZING, OFN_EXPLORER} from "windows.js";
import {OPENFILENAME} from "windows.js";


const filepath = Buffer.alloc(MAX_PATH * 20);
const filename = Buffer.alloc(MAX_PATH * 2);
const ofn = {
	lStructSize: koffi.sizeof(OPENFILENAME),
	hwndOwner: 0,
	hInstance: 0,
	lpstrFilter: "Javascript\0*.js;*.cjs;*.mjs\0JSON\0*.json\0C/C++\0*.c;*.cpp;*.h;*.hpp\0All files\0*.*\0\0",
	lpstrCustomFilter: null,
	nMaxCustFilter: 0,
	nFilterIndex: 0,
	lpstrFile: filepath,
	nMaxFile: MAX_PATH * 10,
	lpstrFileTitle: filename,
	nMaxFileTitle: MAX_PATH,
	lpstrInitialDir: null,
	lpstrTitle: "Select a file",
	Flags: OFN_ALLOWMULTISELECT,
	nFileOffset: 0,
	nFileExtension: 0,
	lpstrDefExt: null,
	lCustData: 0,
	lpfnHook: null,
	lpTemplateName: null,
};

console.log("Displaying an open file dialog of the old style.");
let dr = await GetOpenFileName(ofn);
if (!dr) {
	console.log("You cancelled the dialog, or an error code: ", (await CommDlgExtendedError()).toString(16));
} else {
	console.log({
		filepath: koffi.decode(filepath, "wchar", filepath.length),
		filename: koffi.decode(filename, "wchar", filename.length),
		filenameOffset: ofn.nFileOffset,
		extensionOffset: ofn.nFileExtension,
	});
}

ofn.Flags |= OFN_EXPLORER | OFN_ENABLESIZING;
console.log("Displaying an open file dialog of the new style.");
dr = await GetOpenFileName(ofn);
if (!dr) {
	console.log("You cancelled the dialog, or an error code: ", (await CommDlgExtendedError()).toString(16));
} else {
	console.log({
		filepath: koffi.decode(filepath, "wchar", filepath.length),
		filename: koffi.decode(filename, "wchar", filename.length),
		filenameOffset: ofn.nFileOffset,
		extensionOffset: ofn.nFileExtension,
	});
}

const len = await GetFileTitle("c:\\windows\\explorer.exe", filename, 0);
console.log("GetFileTitle needs buffer size:", len);	// 13
const r = 0 === await GetFileTitle("c:\\windows\\explorer.exe", filename, len);
console.log({GetFileTitle: r, fileTitle: koffi.decode(filename, "wchar", filename.length)});

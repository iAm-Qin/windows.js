import koffi from "koffi";

// basic
import {short} from "../../types.js";

// minwindef.h
import {LPVOID, WORD} from "../minwindef.h/minWindef.js";

// winnt.h
import {
	LPCSTR, LPCWSTR,
} from "../winnt.h/winnt.js";


const lib = koffi.load("comdlg32.dll");
import {createAutoLoader} from "../../internals/loader.js";

export function GetFileTitleA () {}

GetFileTitleA = createAutoLoader(lib, "GetFileTitleA", short /* short */, [
	LPCSTR, /*    LPCSTR         */
	LPVOID, /*    LPSTR  Buf     */
	WORD,   /* in WORD   cchSize */
], f => GetFileTitleA = f);

export function GetFileTitleW () {}

GetFileTitleW = createAutoLoader(lib, "GetFileTitleW", short /* short */, [
	LPCWSTR, /*    LPCWSTR         */
	LPVOID,  /*    LPWSTR  Buf     */
	WORD,    /* in WORD    cchSize */
], f => GetFileTitleW = f);
export {GetFileTitleW as GetFileTitle};

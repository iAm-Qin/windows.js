import koffi from "koffi";

// basic
import {inout} from "../../types.js";
import {short} from "../../types.js";

// minwindef.h
import {BOOL, DWORD, WORD} from "../minwindef.h/minWindef.js";

// windef.h
import {HWND} from "../windef.h/windef.js";

// winnt.h
import {
	LPSTR, LPCSTR, LPWSTR, LPCWSTR, HRESULT,
} from "../winnt.h/winnt.js";

// comdlg.h
import {
	LPCHOOSECOLORA, LPCHOOSECOLORW,
	LPCHOOSEFONTA, LPCHOOSEFONTW,
	LPFINDREPLACEA, LPFINDREPLACEW,
	LPOPENFILENAMEA, LPOPENFILENAMEW,
	LPPAGESETUPDLGA, LPPAGESETUPDLGW,
	LPPRINTDLGA, LPPRINTDLGW,
	LPPRINTDLGEXA, LPPRINTDLGEXW,
} from "./structs.js";


const lib = koffi.load("comdlg32.dll");
import {createAutoLoader} from "../../internals/loader.js";

export function GetOpenFileNameA () {};
GetOpenFileNameA = createAutoLoader(lib, "GetOpenFileNameA", BOOL /* BOOL */, [
	inout(LPOPENFILENAMEA), /*  LPOPENFILENAMEA  */
], f => GetOpenFileNameA = f);

export function GetOpenFileNameW () {};
GetOpenFileNameW = createAutoLoader(lib, "GetOpenFileNameW", BOOL /* BOOL */, [
	inout(LPOPENFILENAMEW), /*  LPOPENFILENAMEW  */
], f => GetOpenFileNameW = f);
export {GetOpenFileNameW as GetOpenFileName};

export function GetSaveFileNameA () {};
GetSaveFileNameA = createAutoLoader(lib, "GetSaveFileNameA", BOOL /* BOOL */, [
	inout(LPOPENFILENAMEA), /*  LPOPENFILENAMEA  */
], f => GetSaveFileNameA = f);

export function GetSaveFileNameW () {};
GetSaveFileNameW = createAutoLoader(lib, "GetSaveFileNameW", BOOL /* BOOL */, [
	inout(LPOPENFILENAMEW), /*  LPOPENFILENAMEW  */
], f => GetSaveFileNameW = f);
export {GetSaveFileNameW as GetSaveFileName};

export function GetFileTitleA () {};
GetFileTitleA = createAutoLoader(lib, "GetFileTitleA", short /* short */, [
	LPCSTR, /*    LPCSTR         */
	LPSTR,  /*    LPSTR  Buf     */
	WORD,   /* in WORD   cchSize */
], f => GetFileTitleA = f);

export function GetFileTitleW () {};
GetFileTitleW = createAutoLoader(lib, "GetFileTitleW", short /* short */, [
	LPCWSTR, /*    LPCWSTR         */
	LPWSTR,  /*    LPWSTR  Buf     */
	WORD,    /* in WORD    cchSize */
], f => GetFileTitleW = f);
export {GetFileTitleW as GetFileTitle};

export function ChooseColorA () {};
ChooseColorA = createAutoLoader(lib, "ChooseColorA", BOOL /* BOOL */, [
	inout(LPCHOOSECOLORA), /*  LPCHOOSECOLORA  */
], f => ChooseColorA = f);

export function ChooseColorW () {};
ChooseColorW = createAutoLoader(lib, "ChooseColorW", BOOL /* BOOL */, [
	inout(LPCHOOSECOLORW), /*  LPCHOOSECOLORW  */
], f => ChooseColorW = f);
export {ChooseColorW as ChooseColor};

export function FindTextA () {};
FindTextA = createAutoLoader(lib, "FindTextA", HWND /* HWND */, [
	inout(LPFINDREPLACEA), /*  LPFINDREPLACEA  */
], f => FindTextA = f);

export function FindTextW () {};
FindTextW = createAutoLoader(lib, "FindTextW", HWND /* HWND */, [
	inout(LPFINDREPLACEW), /*  LPFINDREPLACEW  */
], f => FindTextW = f);
export {FindTextW as FindText};

export function ReplaceTextA () {};
ReplaceTextA = createAutoLoader(lib, "ReplaceTextA", HWND /* HWND */, [
	inout(LPFINDREPLACEA), /*  LPFINDREPLACEA  */
], f => ReplaceTextA = f);

export function ReplaceTextW () {};
ReplaceTextW = createAutoLoader(lib, "ReplaceTextW", HWND /* HWND */, [
	inout(LPFINDREPLACEW), /*  LPFINDREPLACEW  */
], f => ReplaceTextW = f);
export {ReplaceTextW as ReplaceText};

export function AfxReplaceTextA () {};
AfxReplaceTextA = createAutoLoader(lib, "AfxReplaceTextA", HWND /* HWND */, [
	inout(LPFINDREPLACEA), /*  LPFINDREPLACEA  */
], f => AfxReplaceTextA = f);

export function AfxReplaceTextW () {};
AfxReplaceTextW = createAutoLoader(lib, "AfxReplaceTextW", HWND /* HWND */, [
	inout(LPFINDREPLACEW), /*  LPFINDREPLACEW  */
], f => AfxReplaceTextW = f);
export {AfxReplaceTextW as AfxReplaceText};

export function ChooseFontA () {};
ChooseFontA = createAutoLoader(lib, "ChooseFontA", BOOL /* BOOL */, [
	inout(LPCHOOSEFONTA), /*  LPCHOOSEFONTA  */
], f => ChooseFontA = f);

export function ChooseFontW () {};
ChooseFontW = createAutoLoader(lib, "ChooseFontW", BOOL /* BOOL */, [
	inout(LPCHOOSEFONTW), /*  LPCHOOSEFONTW  */
], f => ChooseFontW = f);
export {ChooseFontW as ChooseFont};

export function PrintDlgA () {};
PrintDlgA = createAutoLoader(lib, "PrintDlgA", BOOL /* BOOL */, [
	inout(LPPRINTDLGA), /* in out LPPRINTDLGA pPD */
], f => PrintDlgA = f);

export function PrintDlgW () {};
PrintDlgW = createAutoLoader(lib, "PrintDlgW", BOOL /* BOOL */, [
	inout(LPPRINTDLGW), /* in out LPPRINTDLGW pPD */
], f => PrintDlgW = f);
export {PrintDlgW as PrintDlg};

export function PrintDlgExA () {};
PrintDlgExA = createAutoLoader(lib, "PrintDlgExA", HRESULT /* HRESULT */, [
	inout(LPPRINTDLGEXA), /* in out LPPRINTDLGEXA pPD */
], f => PrintDlgExA = f);

export function PrintDlgExW () {};
PrintDlgExW = createAutoLoader(lib, "PrintDlgExW", HRESULT /* HRESULT */, [
	inout(LPPRINTDLGEXW), /* in out LPPRINTDLGEXW pPD */
], f => PrintDlgExW = f);
export {PrintDlgExW as PrintDlgEx};

export function CommDlgExtendedError () {};
CommDlgExtendedError = createAutoLoader(lib, "CommDlgExtendedError", DWORD /* DWORD */, [
	/* void */
], f => CommDlgExtendedError = f);

export function PageSetupDlgA () {};
PageSetupDlgA = createAutoLoader(lib, "PageSetupDlgA", BOOL /* BOOL */, [
	inout(LPPAGESETUPDLGA), /*  LPPAGESETUPDLGA  */
], f => PageSetupDlgA = f);

export function PageSetupDlgW () {};
PageSetupDlgW = createAutoLoader(lib, "PageSetupDlgW", BOOL /* BOOL */, [
	inout(LPPAGESETUPDLGW), /*  LPPAGESETUPDLGW  */
], f => PageSetupDlgW = f);
export {PageSetupDlgW as PageSetupDlg};

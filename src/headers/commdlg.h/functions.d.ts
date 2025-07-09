// basic
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


export function GetOpenFileNameA (param0: LPOPENFILENAMEA): BOOL;
export function GetOpenFileNameW (param0: LPOPENFILENAMEW): BOOL;
export function GetOpenFileName (param0: LPOPENFILENAMEW): BOOL;
export function GetSaveFileNameA (param0: LPOPENFILENAMEA): BOOL;
export function GetSaveFileNameW (param0: LPOPENFILENAMEW): BOOL;
export function GetSaveFileName (param0: LPOPENFILENAMEW): BOOL;
export function GetFileTitleA (param0: LPCSTR, Buf: LPSTR, cchSize: WORD): short;
export function GetFileTitleW (param0: LPCWSTR, Buf: LPWSTR, cchSize: WORD): short;
export function GetFileTitle (param0: LPCWSTR, Buf: LPWSTR, cchSize: WORD): short;
export function ChooseColorA (param0: LPCHOOSECOLORA): BOOL;
export function ChooseColorW (param0: LPCHOOSECOLORW): BOOL;
export function ChooseColor (param0: LPCHOOSECOLORW): BOOL;
export function FindTextA (param0: LPFINDREPLACEA): HWND;
export function FindTextW (param0: LPFINDREPLACEW): HWND;
export function FindText (param0: LPFINDREPLACEW): HWND;
export function ReplaceTextA (param0: LPFINDREPLACEA): HWND;
export function ReplaceTextW (param0: LPFINDREPLACEW): HWND;
export function ReplaceText (param0: LPFINDREPLACEW): HWND;
export function AfxReplaceTextA (param0: LPFINDREPLACEA): HWND;
export function AfxReplaceTextW (param0: LPFINDREPLACEW): HWND;
export function AfxReplaceText (param0: LPFINDREPLACEW): HWND;
export function ChooseFontA (param0: LPCHOOSEFONTA): BOOL;
export function ChooseFontW (param0: LPCHOOSEFONTW): BOOL;
export function ChooseFont (param0: LPCHOOSEFONTW): BOOL;
export function PrintDlgA (pPD: LPPRINTDLGA): BOOL;
export function PrintDlgW (pPD: LPPRINTDLGW): BOOL;
export function PrintDlg (pPD: LPPRINTDLGW): BOOL;
export function PrintDlgExA (pPD: LPPRINTDLGEXA): HRESULT;
export function PrintDlgExW (pPD: LPPRINTDLGEXW): HRESULT;
export function PrintDlgEx (pPD: LPPRINTDLGEXW): HRESULT;
export function CommDlgExtendedError (): DWORD;
export function PageSetupDlgA (param0: LPPAGESETUPDLGA): BOOL;
export function PageSetupDlgW (param0: LPPAGESETUPDLGW): BOOL;
export function PageSetupDlg (param0: LPPAGESETUPDLGW): BOOL;

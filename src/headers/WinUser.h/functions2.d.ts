// basic
import {
	int,
} from "../../types.js";

// minwindef.h
import {
	UINT, LRESULT, WPARAM, LPARAM,
} from "../minwindef.h/minWindef.js";

// windef.h
import {LPRECT} from "../windef.h/windef.js";
import {HDC, HWND} from "../windef.h/windef.js";

// winnt.h
import {
	LPSTR, LPCSTR, LPWSTR, LPCWSTR,
} from "../winnt.h/winnt.js";

import {
	LPDRAWTEXTPARAMS,
} from "./structs.js";


//region 头文件声明太复杂，正则表达式识别不了，手动添加

export function DefWindowProcA (hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM): LRESULT;
export function DefWindowProcW (hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM): LRESULT;
export function DefWindowProc (hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM): LRESULT;

export function DrawTextA (hDC: HDC, lpchText: LPCSTR, cchText: int, lprc: LPRECT, format: UINT): int;
export function DrawTextW (hDC: HDC, lpchText: LPCWSTR, cchText: int, lprc: LPRECT, format: UINT): int;
export function DrawText (hDC: HDC, lpchText: LPCWSTR, cchText: int, lprc: LPRECT, format: UINT): int;
export function DrawTextExA (hDC: HDC, lpchText: LPSTR, cchText: int, lprc: LPRECT, format: UINT, lpdtp: LPDRAWTEXTPARAMS): int;
export function DrawTextExW (hDC: HDC, lpchText: LPWSTR, cchText: int, lprc: LPRECT, format: UINT, lpdtp: LPDRAWTEXTPARAMS): int;
export function DrawTextEx (hDC: HDC, lpchText: LPWSTR, cchText: int, lprc: LPRECT, format: UINT, lpdtp: LPDRAWTEXTPARAMS): int;

//endregion

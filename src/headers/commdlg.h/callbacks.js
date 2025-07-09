import koffi from "koffi";

// basic
import {pointer} from "../../types.js";

// basetsd.h
import {
	UINT_PTR,
} from "../basetsd.h/basetsd.js";

// minwindef.h
import {
	UINT,
	LPARAM, WPARAM,
} from "../minwindef.h/minWindef.js";

// windef.h
import {HWND} from "../windef.h/windef.js";


export const LPOFNHOOKPROC = pointer(koffi.proto("__stdcall", "LPOFNHOOKPROC", UINT_PTR /* UINT_PTR */, [
	HWND,   /*  HWND    */
	UINT,   /*  UINT    */
	WPARAM, /*  WPARAM  */
	LPARAM, /*  LPARAM  */
]));

export const LPCCHOOKPROC = pointer(koffi.proto("__stdcall", "LPCCHOOKPROC", UINT_PTR /* UINT_PTR */, [
	HWND,   /*  HWND    */
	UINT,   /*  UINT    */
	WPARAM, /*  WPARAM  */
	LPARAM, /*  LPARAM  */
]));

export const LPFRHOOKPROC = pointer(koffi.proto("__stdcall", "LPFRHOOKPROC", UINT_PTR /* UINT_PTR */, [
	HWND,   /*  HWND    */
	UINT,   /*  UINT    */
	WPARAM, /*  WPARAM  */
	LPARAM, /*  LPARAM  */
]));

export const LPCFHOOKPROC = pointer(koffi.proto("__stdcall", "LPCFHOOKPROC", UINT_PTR /* UINT_PTR */, [
	HWND,   /*  HWND    */
	UINT,   /*  UINT    */
	WPARAM, /*  WPARAM  */
	LPARAM, /*  LPARAM  */
]));

export const LPPRINTHOOKPROC = pointer(koffi.proto("__stdcall", "LPPRINTHOOKPROC", UINT_PTR /* UINT_PTR */, [
	HWND,   /*  HWND    */
	UINT,   /*  UINT    */
	WPARAM, /*  WPARAM  */
	LPARAM, /*  LPARAM  */
]));

export const LPSETUPHOOKPROC = pointer(koffi.proto("__stdcall", "LPSETUPHOOKPROC", UINT_PTR /* UINT_PTR */, [
	HWND,   /*  HWND    */
	UINT,   /*  UINT    */
	WPARAM, /*  WPARAM  */
	LPARAM, /*  LPARAM  */
]));

export const LPPAGEPAINTHOOK = pointer(koffi.proto("__stdcall", "LPPAGEPAINTHOOK", UINT_PTR /* UINT_PTR */, [
	HWND,   /*  HWND    */
	UINT,   /*  UINT    */
	WPARAM, /*  WPARAM  */
	LPARAM, /*  LPARAM  */
]));

export const LPPAGESETUPHOOK = pointer(koffi.proto("__stdcall", "LPPAGESETUPHOOK", UINT_PTR /* UINT_PTR */, [
	HWND,   /*  HWND    */
	UINT,   /*  UINT    */
	WPARAM, /*  WPARAM  */
	LPARAM, /*  LPARAM  */
]));


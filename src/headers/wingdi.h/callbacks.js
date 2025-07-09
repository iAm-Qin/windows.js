import koffi from "koffi";

// basic
import {pointer} from "../../types.js";
import {int} from "../../types.js";

// minwindef.h
import {
	DWORD, BOOL,
	UINT,
	LPVOID,
	LPARAM,
	HMODULE,
} from "../minwindef.h/minWindef.js";

// windef.h
import {HDC, HWND} from "../windef.h/windef.js";

// winnt.h
import {
	LPSTR, LPWSTR,
	VOID, PVOID,
} from "../winnt.h/winnt.js";

import {ENHMETARECORD, HANDLETABLE, LOGFONTA, LOGFONTW, LPDEVMODE, METARECORD, TEXTMETRICA, TEXTMETRICW} from "./structs.js";

export const OLDFONTENUMPROCA = pointer(koffi.proto("__stdcall", "OLDFONTENUMPROCA", int /* int */, [
	pointer(LOGFONTA),    /*  CONST LOGFONTA*     */
	pointer(TEXTMETRICA), /*  CONST TEXTMETRICA*  */
	DWORD,                /*  DWORD               */
	LPARAM,               /*  LPARAM              */
]));

export const OLDFONTENUMPROCW = pointer(koffi.proto("__stdcall", "OLDFONTENUMPROCW", int /* int */, [
	pointer(LOGFONTW),    /*  CONST LOGFONTW*     */
	pointer(TEXTMETRICW), /*  CONST TEXTMETRICW*  */
	DWORD,                /*  DWORD               */
	LPARAM,               /*  LPARAM              */
]));
export const OLDFONTENUMPROC = OLDFONTENUMPROCW;

export const FONTENUMPROCA = OLDFONTENUMPROCA;
export const FONTENUMPROCW = OLDFONTENUMPROCW;
export const FONTENUMPROC = FONTENUMPROCW;


export const GOBJENUMPROC = pointer(koffi.proto("__stdcall", "GOBJENUMPROC", int /* int */, [
	LPVOID, /*  LPVOID  */
	LPARAM, /*  LPARAM  */
]));

export const LINEDDAPROC = pointer(koffi.proto("__stdcall", "LINEDDAPROC", VOID /* VOID */, [
	int,    /*  int     */
	int,    /*  int     */
	LPARAM, /*  LPARAM  */
]));

export const LPFNDEVMODE = pointer(koffi.proto("__stdcall", "LPFNDEVMODE", UINT /* UINT */, [
	HWND,      /*  HWND       */
	HMODULE,   /*  HMODULE    */
	LPDEVMODE, /*  LPDEVMODE  */
	LPSTR,     /*  LPSTR      */
	LPSTR,     /*  LPSTR      */
	LPDEVMODE, /*  LPDEVMODE  */
	LPSTR,     /*  LPSTR      */
	UINT,      /*  UINT       */
]));

export const LPFNDEVCAPS = pointer(koffi.proto("__stdcall", "LPFNDEVCAPS", DWORD /* DWORD */, [
	LPSTR,     /*  LPSTR      */
	LPSTR,     /*  LPSTR      */
	UINT,      /*  UINT       */
	LPSTR,     /*  LPSTR      */
	LPDEVMODE, /*  LPDEVMODE  */
]));

export const GDIMARSHALLOC = pointer(koffi.proto("__stdcall", "GDIMARSHALLOC", PVOID /* PVOID */, [
	DWORD,  /*    DWORD  dwSize  */
	LPVOID, /* in LPVOID pGdiRef */
]));

// 在 structs.js 中定义
// export const DDRAWMARSHCALLBACKMARSHAL = pointer(koffi.proto("__stdcall", "DDRAWMARSHCALLBACKMARSHAL", HRESULT /* HRESULT */, [
// 	HGDIOBJ,              /* in  HGDIOBJ  hGdiObj    */
// 	LPVOID,               /* in  LPVOID   pGdiRef    */
// 	out(pointer(LPVOID)), /* out LPVOID * ppDDrawRef */
// ]));
//
// export const DDRAWMARSHCALLBACKUNMARSHAL = pointer(koffi.proto("__stdcall", "DDRAWMARSHCALLBACKUNMARSHAL", HRESULT /* HRESULT */, [
// 	LPVOID,               /* in  LPVOID   pData      */
// 	out(pointer(HDC)),    /* out HDC *    phdc       */
// 	out(pointer(LPVOID)), /* out LPVOID * ppDDrawRef */
// ]));
//
// export const DDRAWMARSHCALLBACKRELEASE = pointer(koffi.proto("__stdcall", "DDRAWMARSHCALLBACKRELEASE", HRESULT /* HRESULT */, [
// 	LPVOID, /* in LPVOID pDDrawRef */
// ]));

export const MFENUMPROC = pointer(koffi.proto("__stdcall", "MFENUMPROC", int /* int */, [
	HDC,                  /* in     HDC              hdc   */
	pointer(HANDLETABLE), /*        HANDLETABLE FAR* lpht  */
	pointer(METARECORD),  /* in     METARECORD FAR*  lpMR  */
	int,                  /* in     int              nObj  */
	LPARAM,               /* in opt LPARAM           param */
]));

export const ENHMFENUMPROC = pointer(koffi.proto("__stdcall", "ENHMFENUMPROC", int /* int */, [
	HDC,                    /* in     HDC                   hdc      */
	pointer(HANDLETABLE),   /*        HANDLETABLE FAR*      lpht     */
	pointer(ENHMETARECORD), /* in     CONST ENHMETARECORD * lpmr     */
	int,                    /* in     int                   nHandles */
	LPARAM,                 /* in opt LPARAM                data     */
]));

export const ABORTPROC = pointer(koffi.proto("__stdcall", "ABORTPROC", BOOL /* BOOL */, [
	HDC, /* in HDC  */
	int, /* in int  */
]));

export const ICMENUMPROCA = pointer(koffi.proto("__stdcall", "ICMENUMPROCA", int /* int */, [
	LPSTR,  /*  LPSTR   */
	LPARAM, /*  LPARAM  */
]));

export const ICMENUMPROCW = pointer(koffi.proto("__stdcall", "ICMENUMPROCW", int /* int */, [
	LPWSTR, /*  LPWSTR  */
	LPARAM, /*  LPARAM  */
]));
export const ICMENUMPROC = ICMENUMPROCW;

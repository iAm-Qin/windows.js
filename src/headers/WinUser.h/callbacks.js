import koffi from "koffi";

// basic
import {pointer} from "../../types.js";
import {int} from "../../types.js";

// basetsd.h
import {
	INT_PTR,
	UINT_PTR,
	ULONG_PTR,
} from "../basetsd.h/basetsd.js";

// minwindef.h
import {DWORD, BOOL, UINT} from "../minwindef.h/minWindef.js";
import {LPARAM, LRESULT, WPARAM} from "../minwindef.h/minWindef.js";

// windef.h
import {HWND, HDC, HMONITOR, HWINEVENTHOOK} from "../windef.h/windef.js";
import {LPRECT} from "../windef.h/windef.js";

// winnt.h
import {HANDLE} from "../winnt.h/winnt.js";
import {BOOLEAN, LONG, LPSTR, LPCSTR, LPWSTR, LPCWSTR, VOID} from "../winnt.h/winnt.js";


export const WNDPROC = pointer(koffi.proto("__stdcall", "WNDPROC", LRESULT /* LRESULT */, [
	HWND,   /*  HWND    */
	UINT,   /*  UINT    */
	WPARAM, /*  WPARAM  */
	LPARAM, /*  LPARAM  */
]));

export const DLGPROC = pointer(koffi.proto("__stdcall", "DLGPROC", INT_PTR /* INT_PTR */, [
	HWND,   /*  HWND    */
	UINT,   /*  UINT    */
	WPARAM, /*  WPARAM  */
	LPARAM, /*  LPARAM  */
]));

export const TIMERPROC = pointer(koffi.proto("__stdcall", "TIMERPROC", VOID /* VOID */, [
	HWND,     /*  HWND      */
	UINT,     /*  UINT      */
	UINT_PTR, /*  UINT_PTR  */
	DWORD,    /*  DWORD     */
]));

export const GRAYSTRINGPROC = pointer(koffi.proto("__stdcall", "GRAYSTRINGPROC", BOOL /* BOOL */, [
	HDC,    /*  HDC     */
	LPARAM, /*  LPARAM  */
	int,    /*  int     */
]));

export const WNDENUMPROC = pointer(koffi.proto("__stdcall", "WNDENUMPROC", BOOL /* BOOL */, [
	HWND,   /*  HWND    */
	LPARAM, /*  LPARAM  */
]));

export const HOOKPROC = pointer(koffi.proto("__stdcall", "HOOKPROC", LRESULT /* LRESULT */, [
	int,    /*  int    code   */
	WPARAM, /*  WPARAM wParam */
	LPARAM, /*  LPARAM lParam */
]));

export const SENDASYNCPROC = pointer(koffi.proto("__stdcall", "SENDASYNCPROC", VOID /* VOID */, [
	HWND,      /*  HWND       */
	UINT,      /*  UINT       */
	ULONG_PTR, /*  ULONG_PTR  */
	LRESULT,   /*  LRESULT    */
]));

export const PROPENUMPROCA = pointer(koffi.proto("__stdcall", "PROPENUMPROCA", BOOL /* BOOL */, [
	HWND,   /*  HWND    */
	LPCSTR, /*  LPCSTR  */
	HANDLE, /*  HANDLE  */
]));

export const PROPENUMPROCW = pointer(koffi.proto("__stdcall", "PROPENUMPROCW", BOOL /* BOOL */, [
	HWND,    /*  HWND     */
	LPCWSTR, /*  LPCWSTR  */
	HANDLE,  /*  HANDLE   */
]));
export const PROPENUMPROC = PROPENUMPROCW;

export const PROPENUMPROCEXA = pointer(koffi.proto("__stdcall", "PROPENUMPROCEXA", BOOL /* BOOL */, [
	HWND,      /*  HWND       */
	LPSTR,     /*  LPSTR      */
	HANDLE,    /*  HANDLE     */
	ULONG_PTR, /*  ULONG_PTR  */
]));

export const PROPENUMPROCEXW = pointer(koffi.proto("__stdcall", "PROPENUMPROCEXW", BOOL /* BOOL */, [
	HWND,      /*  HWND       */
	LPWSTR,    /*  LPWSTR     */
	HANDLE,    /*  HANDLE     */
	ULONG_PTR, /*  ULONG_PTR  */
]));
export const PROPENUMPROCEX = PROPENUMPROCEXW;

export const EDITWORDBREAKPROCA = pointer(koffi.proto("__stdcall", "EDITWORDBREAKPROCA", int /* int */, [
	LPSTR, /*  LPSTR lpch       */
	int,   /*  int   ichCurrent */
	int,   /*  int   cch        */
	int,   /*  int   code       */
]));

export const EDITWORDBREAKPROCW = pointer(koffi.proto("__stdcall", "EDITWORDBREAKPROCW", int /* int */, [
	LPWSTR, /*  LPWSTR lpch       */
	int,    /*  int    ichCurrent */
	int,    /*  int    cch        */
	int,    /*  int    code       */
]));
export const EDITWORDBREAKPROC = EDITWORDBREAKPROCW;

export const DRAWSTATEPROC = pointer(koffi.proto("__stdcall", "DRAWSTATEPROC", BOOL /* BOOL */, [
	HDC,    /*  HDC    hdc   */
	LPARAM, /*  LPARAM lData */
	WPARAM, /*  WPARAM wData */
	int,    /*  int    cx    */
	int,    /*  int    cy    */
]));

export const NAMEENUMPROCA = pointer(koffi.proto("__stdcall", "NAMEENUMPROCA", BOOL /* BOOL */, [
	LPSTR,  /*  LPSTR   */
	LPARAM, /*  LPARAM  */
]));

export const NAMEENUMPROCW = pointer(koffi.proto("__stdcall", "NAMEENUMPROCW", BOOL /* BOOL */, [
	LPWSTR, /*  LPWSTR  */
	LPARAM, /*  LPARAM  */
]));
export const NAMEENUMPROC = NAMEENUMPROCW;

export const PREGISTERCLASSNAMEW = pointer(koffi.proto("__stdcall", "PREGISTERCLASSNAMEW", BOOLEAN /* BOOLEAN */, [
	LPCWSTR, /*  LPCWSTR  */
]));
export const PREGISTERCLASSNAME = PREGISTERCLASSNAMEW;

// ./structs.js
// export const MSGBOXCALLBACK = pointer(koffi.proto("__stdcall", "MSGBOXCALLBACK", VOID /* VOID */, [
// 	LPHELPINFO, /*  LPHELPINFO lpHelpInfo */
// ]));

export const MONITORENUMPROC = pointer(koffi.proto("__stdcall", "MONITORENUMPROC", BOOL /* BOOL */, [
	HMONITOR, /*  HMONITOR  */
	HDC,      /*  HDC       */
	LPRECT,   /*  LPRECT    */
	LPARAM,   /*  LPARAM    */
]));

export const WINEVENTPROC = pointer(koffi.proto("__stdcall", "WINEVENTPROC", VOID /* VOID */, [
	HWINEVENTHOOK, /*  HWINEVENTHOOK hWinEventHook */
	DWORD,         /*  DWORD         event         */
	HWND,          /*  HWND          hwnd          */
	LONG,          /*  LONG          idObject      */
	LONG,          /*  LONG          idChild       */
	DWORD,         /*  DWORD         idEventThread */
	DWORD,         /*  DWORD         dwmsEventTime */
]));

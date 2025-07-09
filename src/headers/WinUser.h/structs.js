import koffi from "koffi";

// basic
import {array, struct, union, bitfield, pointer} from "../../types.js";
import {int, short, float} from "../../types.js";

// basetsd.h
import {
	INT32,
	UINT16,
	UINT32,
	UINT64,
	UINT_PTR,
	ULONG_PTR,
	DWORD_PTR,
} from "../basetsd.h/basetsd.js";

// guiddef.h
import {
	GUID,
} from "../guiddef.h/guiddef.js";

// minwindef.h
import {
	UCHAR, USHORT, UINT, ULONG,
	LPVOID,
	MAX_PATH,
	DWORD, WORD, BYTE, BOOL, ATOM,
	LPARAM, LRESULT, WPARAM,
	HINSTANCE,
} from "../minwindef.h/minWindef.js";

// windef.h
import {COLORREF} from "../windef.h/windef.js";
import {POINT, POINTS, RECT, SIZE} from "../windef.h/windef.js";
import {HMONITOR, HMENU, HWND, HDC, HICON, HCURSOR, HBRUSH, HDESK, HBITMAP} from "../windef.h/windef.js";

// winnt.h
import {
	HANDLE,
} from "../winnt.h/winnt.js";
import {
	VOID, PVOID,
	LONG,
	ULONGLONG,
	LCID,
	CHAR, WCHAR, LPSTR, LPCSTR, LPWSTR, LPCWSTR,
} from "../winnt.h/winnt.js";
import {LUID} from "../winnt.h/structs.js";

// wingdi.h
import {BLENDFUNCTION, LOGFONTA, LOGFONTW} from "../wingdi.h/structs.js";

// WinUser.h
import {
	POINTER_INPUT_TYPE, POINTER_FLAGS,
	TOUCH_FLAGS, TOUCH_MASK,
	PEN_FLAGS, PEN_MASK,
} from "./aliases.js";
import {
	INPUT_MESSAGE_DEVICE_TYPE,
	INPUT_MESSAGE_ORIGIN_ID,
	POINTER_BUTTON_CHANGE_TYPE,
	POINTER_DEVICE_TYPE,
	POINTER_DEVICE_CURSOR_TYPE,
} from "./enums.js";
import {CCHDEVICENAME, CCHILDREN_SCROLLBAR, CCHILDREN_TITLEBAR, POINTER_DEVICE_PRODUCT_STRING_MAX} from "./constants.js";
import {WNDPROC} from "./callbacks.js";


// region forward declarations

const tagCREATESTRUCTA = koffi.opaque();
const tagCREATESTRUCTW = koffi.opaque();

// endregion

// @formatter: off

export const CBT_CREATEWNDA = struct({
	lpcs            : pointer(tagCREATESTRUCTA), // struct tagCREATESTRUCTA*
	hwndInsertAfter : HWND,                      // HWND
});
export const LPCBT_CREATEWNDA = pointer(CBT_CREATEWNDA);

export const CBT_CREATEWNDW = struct({
	lpcs            : pointer(tagCREATESTRUCTW), // struct tagCREATESTRUCTW*
	hwndInsertAfter : HWND,                      // HWND
});
export const LPCBT_CREATEWNDW = pointer(CBT_CREATEWNDW);
export const CBT_CREATEWND = CBT_CREATEWNDW;
export const LPCBT_CREATEWND = LPCBT_CREATEWNDW;

export const CBTACTIVATESTRUCT = struct({
	fMouse     : BOOL, // BOOL
	hWndActive : HWND, // HWND
});
export const LPCBTACTIVATESTRUCT = pointer(CBTACTIVATESTRUCT);

export const WTSSESSION_NOTIFICATION = struct({
	cbSize      : DWORD, // DWORD
	dwSessionId : DWORD, // DWORD
});
export const PWTSSESSION_NOTIFICATION = pointer(WTSSESSION_NOTIFICATION);

export const SHELLHOOKINFO = struct({
	hwnd : HWND, // HWND
	rc   : RECT, // RECT
});
export const LPSHELLHOOKINFO = pointer(SHELLHOOKINFO);

export const EVENTMSG = struct({
	message : UINT,  // UINT
	paramL  : UINT,  // UINT
	paramH  : UINT,  // UINT
	time    : DWORD, // DWORD
	hwnd    : HWND,  // HWND
});
export const PEVENTMSGMSG = pointer(EVENTMSG);
export const NPEVENTMSGMSG = pointer(EVENTMSG);
export const LPEVENTMSGMSG = pointer(EVENTMSG);

export const CWPSTRUCT = struct({
	lParam  : LPARAM, // LPARAM
	wParam  : WPARAM, // WPARAM
	message : UINT,   // UINT
	hwnd    : HWND,   // HWND
});
export const PCWPSTRUCT = pointer(CWPSTRUCT);
export const NPCWPSTRUCT = pointer(CWPSTRUCT);
export const LPCWPSTRUCT = pointer(CWPSTRUCT);

export const CWPRETSTRUCT = struct({
	lResult : LRESULT, // LRESULT
	lParam  : LPARAM,  // LPARAM
	wParam  : WPARAM,  // WPARAM
	message : UINT,    // UINT
	hwnd    : HWND,    // HWND
});
export const PCWPRETSTRUCT = pointer(CWPRETSTRUCT);
export const NPCWPRETSTRUCT = pointer(CWPRETSTRUCT);
export const LPCWPRETSTRUCT = pointer(CWPRETSTRUCT);

export const KBDLLHOOKSTRUCT = struct({
	vkCode      : DWORD,     // DWORD
	scanCode    : DWORD,     // DWORD
	flags       : DWORD,     // DWORD
	time        : DWORD,     // DWORD
	dwExtraInfo : ULONG_PTR, // ULONG_PTR
});
export const LPKBDLLHOOKSTRUCT = pointer(KBDLLHOOKSTRUCT);
export const PKBDLLHOOKSTRUCT = pointer(KBDLLHOOKSTRUCT);

export const MSLLHOOKSTRUCT = struct({
	pt          : POINT,     // POINT
	mouseData   : DWORD,     // DWORD
	flags       : DWORD,     // DWORD
	time        : DWORD,     // DWORD
	dwExtraInfo : ULONG_PTR, // ULONG_PTR
});
export const LPMSLLHOOKSTRUCT = pointer(MSLLHOOKSTRUCT);
export const PMSLLHOOKSTRUCT = pointer(MSLLHOOKSTRUCT);

export const DEBUGHOOKINFO = struct({
	idThread          : DWORD,  // DWORD
	idThreadInstaller : DWORD,  // DWORD
	lParam            : LPARAM, // LPARAM
	wParam            : WPARAM, // WPARAM
	code              : int,    // int
});
export const PDEBUGHOOKINFO = pointer(DEBUGHOOKINFO);
export const NPDEBUGHOOKINFO = pointer(DEBUGHOOKINFO);
export const LPDEBUGHOOKINFO = pointer(DEBUGHOOKINFO);

export const MOUSEHOOKSTRUCT = struct({
	pt           : POINT,     // POINT
	hwnd         : HWND,      // HWND
	wHitTestCode : UINT,      // UINT
	dwExtraInfo  : ULONG_PTR, // ULONG_PTR
});
export const LPMOUSEHOOKSTRUCT = pointer(MOUSEHOOKSTRUCT);
export const PMOUSEHOOKSTRUCT = pointer(MOUSEHOOKSTRUCT);

export const MOUSEHOOKSTRUCTEX = struct({
	s         : MOUSEHOOKSTRUCT, // MOUSEHOOKSTRUCT
	mouseData : DWORD,           // DWORD
});
export const LPMOUSEHOOKSTRUCTEX = pointer(MOUSEHOOKSTRUCTEX);
export const PMOUSEHOOKSTRUCTEX = pointer(MOUSEHOOKSTRUCTEX);

export const HARDWAREHOOKSTRUCT = struct({
	hwnd    : HWND,   // HWND
	message : UINT,   // UINT
	wParam  : WPARAM, // WPARAM
	lParam  : LPARAM, // LPARAM
});
export const LPHARDWAREHOOKSTRUCT = pointer(HARDWAREHOOKSTRUCT);
export const PHARDWAREHOOKSTRUCT = pointer(HARDWAREHOOKSTRUCT);

export const MOUSEMOVEPOINT = struct({
	x           : int,       // int
	y           : int,       // int
	time        : DWORD,     // DWORD
	dwExtraInfo : ULONG_PTR, // ULONG_PTR
});
export const PMOUSEMOVEPOINT = pointer(MOUSEMOVEPOINT);
export const LPMOUSEMOVEPOINT = pointer(MOUSEMOVEPOINT);

export const USEROBJECTFLAGS = struct({
	fInherit  : BOOL,  // BOOL
	fReserved : BOOL,  // BOOL
	dwFlags   : DWORD, // DWORD
});
export const PUSEROBJECTFLAGS = pointer(USEROBJECTFLAGS);

export const WNDCLASSEXA = struct({
	cbSize        : UINT,      // UINT
	style         : UINT,      // UINT
	lpfnWndProc   : WNDPROC,   // WNDPROC
	cbClsExtra    : int,       // int
	cbWndExtra    : int,       // int
	hInstance     : HINSTANCE, // HINSTANCE
	hIcon         : HICON,     // HICON
	hCursor       : HCURSOR,   // HCURSOR
	hbrBackground : HBRUSH,    // HBRUSH
	lpszMenuName  : LPCSTR,    // LPCSTR
	lpszClassName : LPCSTR,    // LPCSTR
	hIconSm       : HICON,     // HICON
});
export const PWNDCLASSEXA = pointer(WNDCLASSEXA);
export const NPWNDCLASSEXA = pointer(WNDCLASSEXA);
export const LPWNDCLASSEXA = pointer(WNDCLASSEXA);

export const WNDCLASSEXW = struct({
	cbSize        : UINT,      // UINT
	style         : UINT,      // UINT
	lpfnWndProc   : WNDPROC,   // WNDPROC
	cbClsExtra    : int,       // int
	cbWndExtra    : int,       // int
	hInstance     : HINSTANCE, // HINSTANCE
	hIcon         : HICON,     // HICON
	hCursor       : HCURSOR,   // HCURSOR
	hbrBackground : HBRUSH,    // HBRUSH
	lpszMenuName  : LPCWSTR,   // LPCWSTR
	lpszClassName : LPCWSTR,   // LPCWSTR
	hIconSm       : HICON,     // HICON
});
export const PWNDCLASSEXW = pointer(WNDCLASSEXW);
export const NPWNDCLASSEXW = pointer(WNDCLASSEXW);
export const LPWNDCLASSEXW = pointer(WNDCLASSEXW);
export const WNDCLASSEX = WNDCLASSEXW;
export const PWNDCLASSEX = PWNDCLASSEXW;
export const NPWNDCLASSEX = NPWNDCLASSEXW;
export const LPWNDCLASSEX = LPWNDCLASSEXW;

export const WNDCLASSA = struct({
	style         : UINT,      // UINT
	lpfnWndProc   : WNDPROC,   // WNDPROC
	cbClsExtra    : int,       // int
	cbWndExtra    : int,       // int
	hInstance     : HINSTANCE, // HINSTANCE
	hIcon         : HICON,     // HICON
	hCursor       : HCURSOR,   // HCURSOR
	hbrBackground : HBRUSH,    // HBRUSH
	lpszMenuName  : LPCSTR,    // LPCSTR
	lpszClassName : LPCSTR,    // LPCSTR
});
export const PWNDCLASSA = pointer(WNDCLASSA);
export const NPWNDCLASSA = pointer(WNDCLASSA);
export const LPWNDCLASSA = pointer(WNDCLASSA);

export const WNDCLASSW = struct({
	style         : UINT,      // UINT
	lpfnWndProc   : WNDPROC,   // WNDPROC
	cbClsExtra    : int,       // int
	cbWndExtra    : int,       // int
	hInstance     : HINSTANCE, // HINSTANCE
	hIcon         : HICON,     // HICON
	hCursor       : HCURSOR,   // HCURSOR
	hbrBackground : HBRUSH,    // HBRUSH
	lpszMenuName  : LPCWSTR,   // LPCWSTR
	lpszClassName : LPCWSTR,   // LPCWSTR
});
export const PWNDCLASSW = pointer(WNDCLASSW);
export const NPWNDCLASSW = pointer(WNDCLASSW);
export const LPWNDCLASSW = pointer(WNDCLASSW);
export const WNDCLASS = WNDCLASSW;
export const PWNDCLASS = PWNDCLASSW;
export const NPWNDCLASS = NPWNDCLASSW;
export const LPWNDCLASS = LPWNDCLASSW;

export const MSG = struct({
	hwnd     : HWND,   // HWND
	message  : UINT,   // UINT
	wParam   : WPARAM, // WPARAM
	lParam   : LPARAM, // LPARAM
	time     : DWORD,  // DWORD
	pt       : POINT,  // POINT
	lPrivate : DWORD,  // DWORD // #ifdef _MAC
});
export const PMSG = pointer(MSG);
export const NPMSG = pointer(MSG);
export const LPMSG = pointer(MSG);

export const MINMAXINFO = struct({
	ptReserved     : POINT, // POINT
	ptMaxSize      : POINT, // POINT
	ptMaxPosition  : POINT, // POINT
	ptMinTrackSize : POINT, // POINT
	ptMaxTrackSize : POINT, // POINT
});
export const PMINMAXINFO = pointer(MINMAXINFO);
export const LPMINMAXINFO = pointer(MINMAXINFO);

export const COPYDATASTRUCT = struct({
	dwData : ULONG_PTR, // ULONG_PTR
	cbData : DWORD,     // DWORD
	lpData : PVOID,     // _Field_size_bytes_(cbData) PVOID lpData
});
export const PCOPYDATASTRUCT = pointer(COPYDATASTRUCT);

export const MDINEXTMENU = struct({
	hmenuIn   : HMENU, // HMENU
	hmenuNext : HMENU, // HMENU
	hwndNext  : HWND,  // HWND
});
export const PMDINEXTMENU = pointer(MDINEXTMENU);
export const LPMDINEXTMENU = pointer(MDINEXTMENU);

export const POWERBROADCAST_SETTING = struct({
	PowerSetting : GUID,            // GUID
	DataLength   : DWORD,           // DWORD
	Data         : array(UCHAR, 1), // UCHAR
});
export const PPOWERBROADCAST_SETTING = pointer(POWERBROADCAST_SETTING);

export const WINDOWPOS = struct({
	hwnd            : HWND, // HWND
	hwndInsertAfter : HWND, // HWND
	x               : int,  // int
	y               : int,  // int
	cx              : int,  // int
	cy              : int,  // int
	flags           : UINT, // UINT
});
export const LPWINDOWPOS = pointer(WINDOWPOS);
export const PWINDOWPOS = pointer(WINDOWPOS);

export const NCCALCSIZE_PARAMS = struct({
	rgrc  : array(RECT, 3), // RECT
	lppos : PWINDOWPOS,     // PWINDOWPOS
});
export const LPNCCALCSIZE_PARAMS = pointer(NCCALCSIZE_PARAMS);

export const TRACKMOUSEEVENT = struct({
	cbSize      : DWORD, // DWORD
	dwFlags     : DWORD, // DWORD
	hwndTrack   : HWND,  // HWND
	dwHoverTime : DWORD, // DWORD
});
export const LPTRACKMOUSEEVENT = pointer(TRACKMOUSEEVENT);

export const ACCEL = struct({
	fVirt : BYTE, // BYTE
	key   : WORD, // WORD
	cmd   : WORD, // WORD
});
export const LPACCEL = pointer(ACCEL);

export const PAINTSTRUCT = struct({
	hdc         : HDC,             // HDC
	fErase      : BOOL,            // BOOL
	rcPaint     : RECT,            // RECT
	fRestore    : BOOL,            // BOOL
	fIncUpdate  : BOOL,            // BOOL
	rgbReserved : array(BYTE, 32), // BYTE
});
export const PPAINTSTRUCT = pointer(PAINTSTRUCT);
export const NPPAINTSTRUCT = pointer(PAINTSTRUCT);
export const LPPAINTSTRUCT = pointer(PAINTSTRUCT);

export const CREATESTRUCTA = struct(tagCREATESTRUCTA, {
	lpCreateParams : LPVOID,    // LPVOID
	hInstance      : HINSTANCE, // HINSTANCE
	hMenu          : HMENU,     // HMENU
	hwndParent     : HWND,      // HWND
	cy             : int,       // int
	cx             : int,       // int
	y              : int,       // int
	x              : int,       // int
	style          : LONG,      // LONG
	lpszName       : LPCSTR,    // LPCSTR
	lpszClass      : LPCSTR,    // LPCSTR
	dwExStyle      : DWORD,     // DWORD
});
export const LPCREATESTRUCTA = pointer(CREATESTRUCTA);

export const CREATESTRUCTW = struct(tagCREATESTRUCTW, {
	lpCreateParams : LPVOID,    // LPVOID
	hInstance      : HINSTANCE, // HINSTANCE
	hMenu          : HMENU,     // HMENU
	hwndParent     : HWND,      // HWND
	cy             : int,       // int
	cx             : int,       // int
	y              : int,       // int
	x              : int,       // int
	style          : LONG,      // LONG
	lpszName       : LPCWSTR,   // LPCWSTR
	lpszClass      : LPCWSTR,   // LPCWSTR
	dwExStyle      : DWORD,     // DWORD
});
export const LPCREATESTRUCTW = pointer(CREATESTRUCTW);
export const CREATESTRUCT = CREATESTRUCTW;
export const LPCREATESTRUCT = LPCREATESTRUCTW;

export const WINDOWPLACEMENT = struct({
	length           : UINT,  // UINT
	flags            : UINT,  // UINT
	showCmd          : UINT,  // UINT
	ptMinPosition    : POINT, // POINT
	ptMaxPosition    : POINT, // POINT
	rcNormalPosition : RECT,  // RECT
	rcDevice         : RECT,  // RECT  // #ifdef _MAC
});

export const NMHDR = struct({
	hwndFrom : HWND,     // HWND
	idFrom   : UINT_PTR, // UINT_PTR
	code     : UINT,     // UINT     // NM_ code
});
export const LPNMHDR = NMHDR;

export const STYLESTRUCT = struct({
	styleOld : DWORD, // DWORD
	styleNew : DWORD, // DWORD
});
export const LPSTYLESTRUCT = pointer(STYLESTRUCT);

export const MEASUREITEMSTRUCT = struct({
	CtlType    : UINT,      // UINT
	CtlID      : UINT,      // UINT
	itemID     : UINT,      // UINT
	itemWidth  : UINT,      // UINT
	itemHeight : UINT,      // UINT
	itemData   : ULONG_PTR, // ULONG_PTR
});
export const PMEASUREITEMSTRUCT = pointer(MEASUREITEMSTRUCT);
export const LPMEASUREITEMSTRUCT = pointer(MEASUREITEMSTRUCT);

export const DRAWITEMSTRUCT = struct({
	CtlType    : UINT,      // UINT
	CtlID      : UINT,      // UINT
	itemID     : UINT,      // UINT
	itemAction : UINT,      // UINT
	itemState  : UINT,      // UINT
	hwndItem   : HWND,      // HWND
	hDC        : HDC,       // HDC
	rcItem     : RECT,      // RECT
	itemData   : ULONG_PTR, // ULONG_PTR
});
export const PDRAWITEMSTRUCT = pointer(DRAWITEMSTRUCT);
export const LPDRAWITEMSTRUCT = pointer(DRAWITEMSTRUCT);

export const DELETEITEMSTRUCT = struct({
	CtlType  : UINT,      // UINT
	CtlID    : UINT,      // UINT
	itemID   : UINT,      // UINT
	hwndItem : HWND,      // HWND
	itemData : ULONG_PTR, // ULONG_PTR
});
export const PDELETEITEMSTRUCT = pointer(DELETEITEMSTRUCT);
export const LPDELETEITEMSTRUCT = pointer(DELETEITEMSTRUCT);

export const COMPAREITEMSTRUCT = struct({
	CtlType    : UINT,      // UINT
	CtlID      : UINT,      // UINT
	hwndItem   : HWND,      // HWND
	itemID1    : UINT,      // UINT
	itemData1  : ULONG_PTR, // ULONG_PTR
	itemID2    : UINT,      // UINT
	itemData2  : ULONG_PTR, // ULONG_PTR
	dwLocaleId : DWORD,     // DWORD
});
export const PCOMPAREITEMSTRUCT = pointer(COMPAREITEMSTRUCT);
export const LPCOMPAREITEMSTRUCT = pointer(COMPAREITEMSTRUCT);

export const BSMINFO = struct({
	cbSize : UINT,  // UINT
	hdesk  : HDESK, // HDESK
	hwnd   : HWND,  // HWND
	luid   : LUID,  // LUID
});
export const PBSMINFO = pointer(BSMINFO);

export const UPDATELAYEREDWINDOWINFO = struct({
	cbSize   : DWORD,                  // DWORD
	hdcDst   : HDC,                    // HDC
	pptDst   : pointer(POINT),         // const POINT*
	psize    : pointer(SIZE),          // const SIZE*
	hdcSrc   : HDC,                    // HDC
	pptSrc   : pointer(POINT),         // const POINT*
	crKey    : COLORREF,               // COLORREF
	pblend   : pointer(BLENDFUNCTION), // const BLENDFUNCTION*
	dwFlags  : DWORD,                  // DWORD
	prcDirty : pointer(RECT),          // const RECT*
});
export const PUPDATELAYEREDWINDOWINFO = pointer(UPDATELAYEREDWINDOWINFO);

export const FLASHWINFO = struct({
	cbSize    : UINT,  // UINT
	hwnd      : HWND,  // HWND
	dwFlags   : DWORD, // DWORD
	uCount    : UINT,  // UINT
	dwTimeout : DWORD, // DWORD
});
export const PFLASHWINFO = pointer(FLASHWINFO);

export const DLGTEMPLATE = struct({
	style           : DWORD, // DWORD
	dwExtendedStyle : DWORD, // DWORD
	cdit            : WORD,  // WORD
	x               : short, // short
	y               : short, // short
	cx              : short, // short
	cy              : short, // short
});
export const LPDLGTEMPLATE = pointer(DLGTEMPLATE);
export const LPCDLGTEMPLATE = pointer(DLGTEMPLATE);
export const DLGTEMPLATEA = DLGTEMPLATE;
export const DLGTEMPLATEW = DLGTEMPLATE;
export const LPDLGTEMPLATEA = LPDLGTEMPLATE;
export const LPDLGTEMPLATEW = LPDLGTEMPLATE;
export const LPCDLGTEMPLATEA = LPDLGTEMPLATE;
export const LPCDLGTEMPLATEW = LPDLGTEMPLATE;

export const DLGITEMTEMPLATE = struct({
	style           : DWORD, // DWORD
	dwExtendedStyle : DWORD, // DWORD
	x               : short, // short
	y               : short, // short
	cx              : short, // short
	cy              : short, // short
	id              : WORD,  // WORD
});
export const PDLGITEMTEMPLATE = pointer(DLGITEMTEMPLATE);
export const LPDLGITEMTEMPLATE = pointer(DLGITEMTEMPLATE);

export const MOUSEINPUT = struct({
	dx          : LONG,      // LONG
	dy          : LONG,      // LONG
	mouseData   : DWORD,     // DWORD
	dwFlags     : DWORD,     // DWORD
	time        : DWORD,     // DWORD
	dwExtraInfo : ULONG_PTR, // ULONG_PTR
});
export const PMOUSEINPUT = pointer(MOUSEINPUT);
export const LPMOUSEINPUT = pointer(MOUSEINPUT);

export const KEYBDINPUT = struct({
	wVk         : WORD,      // WORD
	wScan       : WORD,      // WORD
	dwFlags     : DWORD,     // DWORD
	time        : DWORD,     // DWORD
	dwExtraInfo : ULONG_PTR, // ULONG_PTR
});
export const PKEYBDINPUT = pointer(KEYBDINPUT);
export const LPKEYBDINPUT = pointer(KEYBDINPUT);

export const HARDWAREINPUT = struct({
	uMsg    : DWORD, // DWORD
	wParamL : WORD,  // WORD
	wParamH : WORD,  // WORD
});
export const PHARDWAREINPUT = pointer(HARDWAREINPUT);
export const LPHARDWAREINPUT = pointer(HARDWAREINPUT);

export const INPUT = struct({
	type : DWORD, // DWORD
	u    : union({
		mi : MOUSEINPUT,    // MOUSEINPUT
		ki : KEYBDINPUT,    // KEYBDINPUT
		hi : HARDWAREINPUT, // HARDWAREINPUT
	}), // union
});
export const PINPUT = pointer(INPUT);
export const LPINPUT = pointer(INPUT);

export const TOUCHINPUT = struct({
	x           : LONG,      // LONG
	y           : LONG,      // LONG
	hSource     : HANDLE,    // HANDLE
	dwID        : DWORD,     // DWORD
	dwFlags     : DWORD,     // DWORD
	dwMask      : DWORD,     // DWORD
	dwTime      : DWORD,     // DWORD
	dwExtraInfo : ULONG_PTR, // ULONG_PTR
	cxContact   : DWORD,     // DWORD
	cyContact   : DWORD,     // DWORD
});
export const PTOUCHINPUT = pointer(TOUCHINPUT);

export const POINTER_INFO = struct({
	pointerType           : POINTER_INPUT_TYPE,         // POINTER_INPUT_TYPE
	pointerId             : UINT32,                     // UINT32
	frameId               : UINT32,                     // UINT32
	pointerFlags          : POINTER_FLAGS,              // POINTER_FLAGS
	sourceDevice          : HANDLE,                     // HANDLE
	hwndTarget            : HWND,                       // HWND
	ptPixelLocation       : POINT,                      // POINT
	ptHimetricLocation    : POINT,                      // POINT
	ptPixelLocationRaw    : POINT,                      // POINT
	ptHimetricLocationRaw : POINT,                      // POINT
	dwTime                : DWORD,                      // DWORD
	historyCount          : UINT32,                     // UINT32
	InputData             : INT32,                      // INT32
	dwKeyStates           : DWORD,                      // DWORD
	PerformanceCount      : UINT64,                     // UINT64
	ButtonChangeType      : POINTER_BUTTON_CHANGE_TYPE, // POINTER_BUTTON_CHANGE_TYPE
});

export const POINTER_TOUCH_INFO = struct({
	pointerInfo  : POINTER_INFO, // POINTER_INFO
	touchFlags   : TOUCH_FLAGS,  // TOUCH_FLAGS
	touchMask    : TOUCH_MASK,   // TOUCH_MASK
	rcContact    : RECT,         // RECT
	rcContactRaw : RECT,         // RECT
	orientation  : UINT32,       // UINT32
	pressure     : UINT32,       // UINT32
});

export const POINTER_PEN_INFO = struct({
	pointerInfo : POINTER_INFO, // POINTER_INFO
	penFlags    : PEN_FLAGS,    // PEN_FLAGS
	penMask     : PEN_MASK,     // PEN_MASK
	pressure    : UINT32,       // UINT32
	rotation    : UINT32,       // UINT32
	tiltX       : INT32,        // INT32
	tiltY       : INT32,        // INT32
});

export const USAGE_PROPERTIES = struct({
	level           : USHORT, // USHORT
	page            : USHORT, // USHORT
	usage           : USHORT, // USHORT
	logicalMinimum  : INT32,  // INT32
	logicalMaximum  : INT32,  // INT32
	unit            : USHORT, // USHORT
	exponent        : USHORT, // USHORT
	count           : BYTE,   // BYTE
	physicalMinimum : INT32,  // INT32
	physicalMaximum : INT32,  // INT32
});
export const PUSAGE_PROPERTIES = pointer(USAGE_PROPERTIES);

export const POINTER_TYPE_INFO = struct({
	type : POINTER_INPUT_TYPE, // POINTER_INPUT_TYPE
	u    : union({
		touchInfo : POINTER_TOUCH_INFO,  // POINTER_TOUCH_INFO
		penInfo   : POINTER_PEN_INFO,    // POINTER_PEN_INFO
	}),
});
export const PPOINTER_TYPE_INFO = pointer(POINTER_TYPE_INFO);

export const INPUT_INJECTION_VALUE = struct({
	page  : USHORT, // USHORT
	usage : USHORT, // USHORT
	value : INT32,  // INT32
	index : USHORT, // USHORT
});
export const PINPUT_INJECTION_VALUE = pointer(INPUT_INJECTION_VALUE);

export const TOUCH_HIT_TESTING_PROXIMITY_EVALUATION = struct({
	score         : UINT16, // UINT16
	adjustedPoint : POINT,  // POINT
});
export const PTOUCH_HIT_TESTING_PROXIMITY_EVALUATION = pointer(TOUCH_HIT_TESTING_PROXIMITY_EVALUATION);

export const TOUCH_HIT_TESTING_INPUT = struct({
	pointerId              : UINT32, // UINT32
	point                  : POINT,  // POINT
	boundingBox            : RECT,   // RECT
	nonOccludedBoundingBox : RECT,   // RECT
	orientation            : UINT32, // UINT32
});
export const PTOUCH_HIT_TESTING_INPUT = pointer(TOUCH_HIT_TESTING_INPUT);

export const INPUT_TRANSFORM = struct({
	u : union({
		s : struct({
			_11: float, _12: float, _13: float, _14: float,
			_21: float, _22: float, _23: float, _24: float,
			_31: float, _32: float, _33: float, _34: float,
			_41: float, _42: float, _43: float, _44: float,
		}), // struct
		m : array(array(float, 4), 4), // float
	}), // union
});

export const LASTINPUTINFO = struct({
	cbSize : UINT,  // UINT
	dwTime : DWORD, // DWORD
});
export const PLASTINPUTINFO = pointer(LASTINPUTINFO);

export const TPMPARAMS = struct({
	cbSize    : UINT, // UINT
	rcExclude : RECT, // RECT
});
export const LPTPMPARAMS = pointer(TPMPARAMS);

export const MENUINFO = struct({
	cbSize          : DWORD,     // DWORD
	fMask           : DWORD,     // DWORD
	dwStyle         : DWORD,     // DWORD
	cyMax           : UINT,      // UINT
	hbrBack         : HBRUSH,    // HBRUSH
	dwContextHelpID : DWORD,     // DWORD
	dwMenuData      : ULONG_PTR, // ULONG_PTR
});
export const LPMENUINFO = pointer(MENUINFO);
export const LPCMENUINFO = pointer(MENUINFO);

export const MENUGETOBJECTINFO = struct({
	dwFlags : DWORD, // DWORD
	uPos    : UINT,  // UINT
	hmenu   : HMENU, // HMENU
	riid    : PVOID, // PVOID
	pvObj   : PVOID, // PVOID
});
export const PMENUGETOBJECTINFO = pointer(MENUGETOBJECTINFO);

export const MENUITEMINFOA = struct({
	cbSize        : UINT,      // UINT
	fMask         : UINT,      // UINT
	fType         : UINT,      // UINT      // used if MIIM_TYPE (4.0) or MIIM_FTYPE (>4.0)
	fState        : UINT,      // UINT      // used if MIIM_STATE
	wID           : UINT,      // UINT      // used if MIIM_ID
	hSubMenu      : HMENU,     // HMENU     // used if MIIM_SUBMENU
	hbmpChecked   : HBITMAP,   // HBITMAP   // used if MIIM_CHECKMARKS
	hbmpUnchecked : HBITMAP,   // HBITMAP   // used if MIIM_CHECKMARKS
	dwItemData    : ULONG_PTR, // ULONG_PTR // used if MIIM_DATA
	dwTypeData    : LPSTR,     // LPSTR     // used if MIIM_TYPE (4.0) or MIIM_STRING (>4.0)
	cch           : UINT,      // UINT      // used if MIIM_TYPE (4.0) or MIIM_STRING (>4.0)
	hbmpItem      : HBITMAP,   // HBITMAP   // used if MIIM_BITMAP
});
export const LPMENUITEMINFOA = pointer(MENUITEMINFOA);
export const LPCMENUITEMINFOA = LPMENUITEMINFOA;

export const MENUITEMINFOW = struct({
	cbSize        : UINT,      // UINT
	fMask         : UINT,      // UINT
	fType         : UINT,      // UINT      // used if MIIM_TYPE (4.0) or MIIM_FTYPE (>4.0)
	fState        : UINT,      // UINT      // used if MIIM_STATE
	wID           : UINT,      // UINT      // used if MIIM_ID
	hSubMenu      : HMENU,     // HMENU     // used if MIIM_SUBMENU
	hbmpChecked   : HBITMAP,   // HBITMAP   // used if MIIM_CHECKMARKS
	hbmpUnchecked : HBITMAP,   // HBITMAP   // used if MIIM_CHECKMARKS
	dwItemData    : ULONG_PTR, // ULONG_PTR // used if MIIM_DATA
	dwTypeData    : LPWSTR,    // LPWSTR    // used if MIIM_TYPE (4.0) or MIIM_STRING (>4.0)
	cch           : UINT,      // UINT      // used if MIIM_TYPE (4.0) or MIIM_STRING (>4.0)
	hbmpItem      : HBITMAP,   // HBITMAP   // used if MIIM_BITMAP
});
export const LPMENUITEMINFOW = pointer(MENUITEMINFOW);
export const MENUITEMINFO = MENUITEMINFOW;
export const LPMENUITEMINFO = LPMENUITEMINFOW;
export const LPCMENUITEMINFOW = LPMENUITEMINFOW;
export const LPCMENUITEMINFO = LPCMENUITEMINFOW;

export const DROPSTRUCT = struct({
	hwndSource    : HWND,      // HWND
	hwndSink      : HWND,      // HWND
	wFmt          : DWORD,     // DWORD
	dwData        : ULONG_PTR, // ULONG_PTR
	ptDrop        : POINT,     // POINT
	dwControlData : DWORD,     // DWORD
});
export const PDROPSTRUCT = pointer(DROPSTRUCT);
export const LPDROPSTRUCT = pointer(DROPSTRUCT);

export const DRAWTEXTPARAMS = struct({
	cbSize        : UINT, // UINT
	iTabLength    : int,  // int
	iLeftMargin   : int,  // int
	iRightMargin  : int,  // int
	uiLengthDrawn : UINT, // UINT
});
export const LPDRAWTEXTPARAMS = pointer(DRAWTEXTPARAMS);

export const HELPINFO = struct({
	cbSize       : UINT,      // UINT
	iContextType : int,       // int
	iCtrlId      : int,       // int
	hItemHandle  : HANDLE,    // HANDLE
	dwContextId  : DWORD_PTR, // DWORD_PTR
	MousePos     : POINT,     // POINT
});
export const LPHELPINFO = pointer(HELPINFO);

export const MSGBOXCALLBACK = pointer(koffi.proto("__stdcall", "MSGBOXCALLBACK", VOID /* VOID */, [
	LPHELPINFO, /*  LPHELPINFO lpHelpInfo */
]));

export const MSGBOXPARAMSA = struct({
	cbSize             : UINT,           // UINT
	hwndOwner          : HWND,           // HWND
	hInstance          : HINSTANCE,      // HINSTANCE
	lpszText           : LPCSTR,         // LPCSTR
	lpszCaption        : LPCSTR,         // LPCSTR
	dwStyle            : DWORD,          // DWORD
	lpszIcon           : LPCSTR,         // LPCSTR
	dwContextHelpId    : DWORD_PTR,      // DWORD_PTR
	lpfnMsgBoxCallback : MSGBOXCALLBACK, // MSGBOXCALLBACK
	dwLanguageId       : DWORD,          // DWORD
});
export const PMSGBOXPARAMSA = pointer(MSGBOXPARAMSA);
export const LPMSGBOXPARAMSA = pointer(MSGBOXPARAMSA);

export const MSGBOXPARAMSW = struct({
	cbSize             : UINT,           // UINT
	hwndOwner          : HWND,           // HWND
	hInstance          : HINSTANCE,      // HINSTANCE
	lpszText           : LPCWSTR,        // LPCWSTR
	lpszCaption        : LPCWSTR,        // LPCWSTR
	dwStyle            : DWORD,          // DWORD
	lpszIcon           : LPCWSTR,        // LPCWSTR
	dwContextHelpId    : DWORD_PTR,      // DWORD_PTR
	lpfnMsgBoxCallback : MSGBOXCALLBACK, // MSGBOXCALLBACK
	dwLanguageId       : DWORD,          // DWORD
});
export const PMSGBOXPARAMSW = pointer(MSGBOXPARAMSW);
export const LPMSGBOXPARAMSW = pointer(MSGBOXPARAMSW);
export const MSGBOXPARAMS = MSGBOXPARAMSW;
export const PMSGBOXPARAMS = PMSGBOXPARAMSW;
export const LPMSGBOXPARAMS = LPMSGBOXPARAMSW;

export const MENUITEMTEMPLATEHEADER = struct({
	versionNumber : WORD, // WORD
	offset        : WORD, // WORD
});
export const PMENUITEMTEMPLATEHEADER = pointer(MENUITEMTEMPLATEHEADER);

export const MENUITEMTEMPLATE = struct({
	mtOption : WORD,                      // WORD
	mtID     : WORD,                      // WORD
	mtString : array(WCHAR, 1, "String"), // WCHAR
});
export const PMENUITEMTEMPLATE = pointer(MENUITEMTEMPLATE);

export const ICONINFO = struct({
	fIcon    : BOOL,    // BOOL
	xHotspot : DWORD,   // DWORD
	yHotspot : DWORD,   // DWORD
	hbmMask  : HBITMAP, // HBITMAP
	hbmColor : HBITMAP, // HBITMAP
});
export const PICONINFO = pointer(ICONINFO);

export const CURSORSHAPE = struct({
	xHotSpot  : int,  // int
	yHotSpot  : int,  // int
	cx        : int,  // int
	cy        : int,  // int
	cbWidth   : int,  // int
	Planes    : BYTE, // BYTE
	BitsPixel : BYTE, // BYTE
});
export const LPCURSORSHAPE = pointer(CURSORSHAPE);

export const ICONINFOEXA = struct({
	cbSize    : DWORD,                           // DWORD
	fIcon     : BOOL,                            // BOOL
	xHotspot  : DWORD,                           // DWORD
	yHotspot  : DWORD,                           // DWORD
	hbmMask   : HBITMAP,                         // HBITMAP
	hbmColor  : HBITMAP,                         // HBITMAP
	wResID    : WORD,                            // WORD
	szModName : array(CHAR, MAX_PATH, "String"), // CHAR
	szResName : array(CHAR, MAX_PATH, "String"), // CHAR
});
export const PICONINFOEXA = pointer(ICONINFOEXA);

export const ICONINFOEXW = struct({
	cbSize    : DWORD,                            // DWORD
	fIcon     : BOOL,                             // BOOL
	xHotspot  : DWORD,                            // DWORD
	yHotspot  : DWORD,                            // DWORD
	hbmMask   : HBITMAP,                          // HBITMAP
	hbmColor  : HBITMAP,                          // HBITMAP
	wResID    : WORD,                             // WORD
	szModName : array(WCHAR, MAX_PATH, "String"), // WCHAR
	szResName : array(WCHAR, MAX_PATH, "String"), // WCHAR
});
export const PICONINFOEXW = pointer(ICONINFOEXW);
export const ICONINFOEX = ICONINFOEXW;
export const PICONINFOEX = PICONINFOEXW;

export const SCROLLINFO = struct({
	cbSize    : UINT, // UINT
	fMask     : UINT, // UINT
	nMin      : int,  // int
	nMax      : int,  // int
	nPage     : UINT, // UINT
	nPos      : int,  // int
	nTrackPos : int,  // int
});
export const LPSCROLLINFO = pointer(SCROLLINFO);
export const LPCSCROLLINFO = pointer(SCROLLINFO);

export const MDICREATESTRUCTA = struct({
	szClass : LPCSTR, // LPCSTR
	szTitle : LPCSTR, // LPCSTR
	hOwner  : HANDLE, // HANDLE
	x       : int,    // int
	y       : int,    // int
	cx      : int,    // int
	cy      : int,    // int
	style   : DWORD,  // DWORD
	lParam  : LPARAM, // LPARAM
});
export const LPMDICREATESTRUCTA = pointer(MDICREATESTRUCTA);

export const MDICREATESTRUCTW = struct({
	szClass : LPCWSTR, // LPCWSTR
	szTitle : LPCWSTR, // LPCWSTR
	hOwner  : HANDLE,  // HANDLE
	x       : int,     // int
	y       : int,     // int
	cx      : int,     // int
	cy      : int,     // int
	style   : DWORD,   // DWORD
	lParam  : LPARAM,  // LPARAM
});
export const LPMDICREATESTRUCTW = pointer(MDICREATESTRUCTW);
export const MDICREATESTRUCT = MDICREATESTRUCTW;
export const LPMDICREATESTRUCT = LPMDICREATESTRUCTW;

export const CLIENTCREATESTRUCT = struct({
	hWindowMenu  : HANDLE, // HANDLE
	idFirstChild : UINT,   // UINT
});
export const LPCLIENTCREATESTRUCT = pointer(CLIENTCREATESTRUCT);

export const MULTIKEYHELPA = struct({
	mkSize      : WORD,                     // WORD
	mkKeylist   : CHAR,                     // CHAR
	szKeyphrase : array(CHAR, 1, "String"), // CHAR
});
export const PMULTIKEYHELPA = pointer(MULTIKEYHELPA);
export const LPMULTIKEYHELPA = pointer(MULTIKEYHELPA);

export const MULTIKEYHELPW = struct({
	mkSize      : WORD,            // WORD
	mkKeylist   : WCHAR,           // WCHAR
	szKeyphrase : array(WCHAR, 1), // WCHAR
});
export const PMULTIKEYHELPW = pointer(MULTIKEYHELPW);
export const LPMULTIKEYHELPW = pointer(MULTIKEYHELPW);
export const MULTIKEYHELP = MULTIKEYHELPW;
export const PMULTIKEYHELP = PMULTIKEYHELPW;
export const LPMULTIKEYHELP = LPMULTIKEYHELPW;

export const HELPWININFOA = struct({
	wStructSize : int,                      // int
	x           : int,                      // int
	y           : int,                      // int
	dx          : int,                      // int
	dy          : int,                      // int
	wMax        : int,                      // int
	rgchMember  : array(CHAR, 2, "String"), // CHAR
});
export const PHELPWININFOA = pointer(HELPWININFOA);
export const LPHELPWININFOA = pointer(HELPWININFOA);

export const HELPWININFOW = struct({
	wStructSize : int,                       // int
	x           : int,                       // int
	y           : int,                       // int
	dx          : int,                       // int
	dy          : int,                       // int
	wMax        : int,                       // int
	rgchMember  : array(WCHAR, 2, "String"), // WCHAR
});
export const PHELPWININFOW = pointer(HELPWININFOW);
export const LPHELPWININFOW = pointer(HELPWININFOW);
export const HELPWININFO = HELPWININFOW;
export const PHELPWININFO = PHELPWININFOW;
export const LPHELPWININFO = LPHELPWININFOW;

export const TOUCHPREDICTIONPARAMETERS = struct({
	cbSize          : UINT, // UINT
	dwLatency       : UINT, // UINT // Latency in millisecs
	dwSampleTime    : UINT, // UINT // Sample time in millisecs (used to deduce velocity)
	bUseHWTimeStamp : UINT, // UINT // Use H/W TimeStamps
});
export const PTOUCHPREDICTIONPARAMETERS = pointer(TOUCHPREDICTIONPARAMETERS);

export const NONCLIENTMETRICSA = struct({
	cbSize             : UINT,     // UINT
	iBorderWidth       : int,      // int
	iScrollWidth       : int,      // int
	iScrollHeight      : int,      // int
	iCaptionWidth      : int,      // int
	iCaptionHeight     : int,      // int
	lfCaptionFont      : LOGFONTA, // LOGFONTA
	iSmCaptionWidth    : int,      // int
	iSmCaptionHeight   : int,      // int
	lfSmCaptionFont    : LOGFONTA, // LOGFONTA
	iMenuWidth         : int,      // int
	iMenuHeight        : int,      // int
	lfMenuFont         : LOGFONTA, // LOGFONTA
	lfStatusFont       : LOGFONTA, // LOGFONTA
	lfMessageFont      : LOGFONTA, // LOGFONTA
	iPaddedBorderWidth : int,      // int
});
export const PNONCLIENTMETRICSA = pointer(NONCLIENTMETRICSA);
export const LPNONCLIENTMETRICSA = pointer(NONCLIENTMETRICSA);

export const NONCLIENTMETRICSW = struct({
	cbSize             : UINT,     // UINT
	iBorderWidth       : int,      // int
	iScrollWidth       : int,      // int
	iScrollHeight      : int,      // int
	iCaptionWidth      : int,      // int
	iCaptionHeight     : int,      // int
	lfCaptionFont      : LOGFONTW, // LOGFONTW
	iSmCaptionWidth    : int,      // int
	iSmCaptionHeight   : int,      // int
	lfSmCaptionFont    : LOGFONTW, // LOGFONTW
	iMenuWidth         : int,      // int
	iMenuHeight        : int,      // int
	lfMenuFont         : LOGFONTW, // LOGFONTW
	lfStatusFont       : LOGFONTW, // LOGFONTW
	lfMessageFont      : LOGFONTW, // LOGFONTW
	iPaddedBorderWidth : int,      // int
});
export const PNONCLIENTMETRICSW = pointer(NONCLIENTMETRICSW);
export const LPNONCLIENTMETRICSW = pointer(NONCLIENTMETRICSW);
export const NONCLIENTMETRICS = NONCLIENTMETRICSW;
export const PNONCLIENTMETRICS = PNONCLIENTMETRICSW;
export const LPNONCLIENTMETRICS = LPNONCLIENTMETRICSW;

export const MINIMIZEDMETRICS = struct({
	cbSize   : UINT, // UINT
	iWidth   : int,  // int
	iHorzGap : int,  // int
	iVertGap : int,  // int
	iArrange : int,  // int
});
export const PMINIMIZEDMETRICS = pointer(MINIMIZEDMETRICS);
export const LPMINIMIZEDMETRICS = pointer(MINIMIZEDMETRICS);

export const ICONMETRICSA = struct({
	cbSize       : UINT,     // UINT
	iHorzSpacing : int,      // int
	iVertSpacing : int,      // int
	iTitleWrap   : int,      // int
	lfFont       : LOGFONTA, // LOGFONTA
});
export const PICONMETRICSA = pointer(ICONMETRICSA);
export const LPICONMETRICSA = pointer(ICONMETRICSA);

export const ICONMETRICSW = struct({
	cbSize       : UINT,     // UINT
	iHorzSpacing : int,      // int
	iVertSpacing : int,      // int
	iTitleWrap   : int,      // int
	lfFont       : LOGFONTW, // LOGFONTW
});
export const PICONMETRICSW = pointer(ICONMETRICSW);
export const LPICONMETRICSW = pointer(ICONMETRICSW);
export const ICONMETRICS = ICONMETRICSW;
export const PICONMETRICS = PICONMETRICSW;
export const LPICONMETRICS = LPICONMETRICSW;

export const ANIMATIONINFO = struct({
	cbSize      : UINT, // UINT
	iMinAnimate : int,  // int
});
export const LPANIMATIONINFO = pointer(ANIMATIONINFO);

export const SERIALKEYSA = struct({
	cbSize         : UINT,  // UINT
	dwFlags        : DWORD, // DWORD
	lpszActivePort : LPSTR, // LPSTR
	lpszPort       : LPSTR, // LPSTR
	iBaudRate      : UINT,  // UINT
	iPortState     : UINT,  // UINT
	iActive        : UINT,  // UINT
});
export const LPSERIALKEYSA = pointer(SERIALKEYSA);

export const SERIALKEYSW = struct({
	cbSize         : UINT,   // UINT
	dwFlags        : DWORD,  // DWORD
	lpszActivePort : LPWSTR, // LPWSTR
	lpszPort       : LPWSTR, // LPWSTR
	iBaudRate      : UINT,   // UINT
	iPortState     : UINT,   // UINT
	iActive        : UINT,   // UINT
});
export const LPSERIALKEYSW = pointer(SERIALKEYSW);
export const SERIALKEYS = SERIALKEYSW;
export const LPSERIALKEYS = LPSERIALKEYSW;

export const HIGHCONTRASTA = struct({
	cbSize            : UINT,  // UINT
	dwFlags           : DWORD, // DWORD
	lpszDefaultScheme : LPSTR, // LPSTR
});
export const LPHIGHCONTRASTA = pointer(HIGHCONTRASTA);

export const HIGHCONTRASTW = struct({
	cbSize            : UINT,   // UINT
	dwFlags           : DWORD,  // DWORD
	lpszDefaultScheme : LPWSTR, // LPWSTR
});
export const LPHIGHCONTRASTW = pointer(HIGHCONTRASTW);
export const HIGHCONTRAST = HIGHCONTRASTW;
export const LPHIGHCONTRAST = LPHIGHCONTRASTW;

export const FILTERKEYS = struct({
	cbSize      : UINT,  // UINT
	dwFlags     : DWORD, // DWORD
	iWaitMSec   : DWORD, // DWORD // Acceptance Delay
	iDelayMSec  : DWORD, // DWORD // Delay Until Repeat
	iRepeatMSec : DWORD, // DWORD // Repeat Rate
	iBounceMSec : DWORD, // DWORD // Debounce Time
});
export const LPFILTERKEYS = pointer(FILTERKEYS);

export const STICKYKEYS = struct({
	cbSize  : UINT,  // UINT
	dwFlags : DWORD, // DWORD
});
export const LPSTICKYKEYS = pointer(STICKYKEYS);

export const MOUSEKEYS = struct({
	cbSize          : UINT,  // UINT
	dwFlags         : DWORD, // DWORD
	iMaxSpeed       : DWORD, // DWORD
	iTimeToMaxSpeed : DWORD, // DWORD
	iCtrlSpeed      : DWORD, // DWORD
	dwReserved1     : DWORD, // DWORD
	dwReserved2     : DWORD, // DWORD
});
export const LPMOUSEKEYS = pointer(MOUSEKEYS);

export const ACCESSTIMEOUT = struct({
	cbSize       : UINT,  // UINT
	dwFlags      : DWORD, // DWORD
	iTimeOutMSec : DWORD, // DWORD
});
export const LPACCESSTIMEOUT = pointer(ACCESSTIMEOUT);

export const SOUNDSENTRYA = struct({
	cbSize                 : UINT,  // UINT
	dwFlags                : DWORD, // DWORD
	iFSTextEffect          : DWORD, // DWORD
	iFSTextEffectMSec      : DWORD, // DWORD
	iFSTextEffectColorBits : DWORD, // DWORD
	iFSGrafEffect          : DWORD, // DWORD
	iFSGrafEffectMSec      : DWORD, // DWORD
	iFSGrafEffectColor     : DWORD, // DWORD
	iWindowsEffect         : DWORD, // DWORD
	iWindowsEffectMSec     : DWORD, // DWORD
	lpszWindowsEffectDLL   : LPSTR, // LPSTR
	iWindowsEffectOrdinal  : DWORD, // DWORD
});
export const LPSOUNDSENTRYA = pointer(SOUNDSENTRYA);

export const SOUNDSENTRYW = struct({
	cbSize                 : UINT,   // UINT
	dwFlags                : DWORD,  // DWORD
	iFSTextEffect          : DWORD,  // DWORD
	iFSTextEffectMSec      : DWORD,  // DWORD
	iFSTextEffectColorBits : DWORD,  // DWORD
	iFSGrafEffect          : DWORD,  // DWORD
	iFSGrafEffectMSec      : DWORD,  // DWORD
	iFSGrafEffectColor     : DWORD,  // DWORD
	iWindowsEffect         : DWORD,  // DWORD
	iWindowsEffectMSec     : DWORD,  // DWORD
	lpszWindowsEffectDLL   : LPWSTR, // LPWSTR
	iWindowsEffectOrdinal  : DWORD,  // DWORD
});
export const LPSOUNDSENTRYW = pointer(SOUNDSENTRYW);
export const SOUNDSENTRY = SOUNDSENTRYW;
export const LPSOUNDSENTRY = LPSOUNDSENTRYW;

export const TOGGLEKEYS = struct({
	cbSize  : UINT,  // UINT
	dwFlags : DWORD, // DWORD
});
export const LPTOGGLEKEYS = pointer(TOGGLEKEYS);

export const AUDIODESCRIPTION = struct({
	cbSize  : UINT, // UINT // sizeof(AudioDescriptionType)
	Enabled : BOOL, // BOOL // On/Off
	Locale  : LCID, // LCID // locale ID for language
});
export const LPAUDIODESCRIPTION = pointer(AUDIODESCRIPTION);

export const MONITORINFO = struct({
	cbSize    : DWORD, // DWORD
	rcMonitor : RECT,  // RECT
	rcWork    : RECT,  // RECT
	dwFlags   : DWORD, // DWORD
});
export const LPMONITORINFO = pointer(MONITORINFO);

export const MONITORINFOEXA = struct({
	s        : MONITORINFO,                          // MONITORINFO
	szDevice : array(CHAR, CCHDEVICENAME, "String"), // CHAR
});
export const LPMONITORINFOEXA = pointer(MONITORINFOEXA);

export const MONITORINFOEXW = struct({
	s        : MONITORINFO,                           // MONITORINFO
	szDevice : array(WCHAR, CCHDEVICENAME, "String"), // WCHAR
});
export const LPMONITORINFOEXW = pointer(MONITORINFOEXW);
export const MONITORINFOEX = MONITORINFOEXW;
export const LPMONITORINFOEX = LPMONITORINFOEXW;

export const GUITHREADINFO = struct({
	cbSize        : DWORD, // DWORD
	flags         : DWORD, // DWORD
	hwndActive    : HWND,  // HWND
	hwndFocus     : HWND,  // HWND
	hwndCapture   : HWND,  // HWND
	hwndMenuOwner : HWND,  // HWND
	hwndMoveSize  : HWND,  // HWND
	hwndCaret     : HWND,  // HWND
	rcCaret       : RECT,  // RECT
});
export const PGUITHREADINFO = pointer(GUITHREADINFO);
export const LPGUITHREADINFO = pointer(GUITHREADINFO);

export const CURSORINFO = struct({
	cbSize      : DWORD,   // DWORD
	flags       : DWORD,   // DWORD
	hCursor     : HCURSOR, // HCURSOR
	ptScreenPos : POINT,   // POINT
});
export const PCURSORINFO = pointer(CURSORINFO);
export const LPCURSORINFO = pointer(CURSORINFO);

export const WINDOWINFO = struct({
	cbSize          : DWORD, // DWORD
	rcWindow        : RECT,  // RECT
	rcClient        : RECT,  // RECT
	dwStyle         : DWORD, // DWORD
	dwExStyle       : DWORD, // DWORD
	dwWindowStatus  : DWORD, // DWORD
	cxWindowBorders : UINT,  // UINT
	cyWindowBorders : UINT,  // UINT
	atomWindowType  : ATOM,  // ATOM
	wCreatorVersion : WORD,  // WORD
});
export const PWINDOWINFO = pointer(WINDOWINFO);
export const LPWINDOWINFO = pointer(WINDOWINFO);

export const TITLEBARINFO = struct({
	cbSize     : DWORD,                                // DWORD
	rcTitleBar : RECT,                                 // RECT
	rgstate    : array(DWORD, CCHILDREN_TITLEBAR + 1), // DWORD
});
export const PTITLEBARINFO = pointer(TITLEBARINFO);
export const LPTITLEBARINFO = pointer(TITLEBARINFO);

export const TITLEBARINFOEX = struct({
	cbSize     : DWORD,                                // DWORD
	rcTitleBar : RECT,                                 // RECT
	rgstate    : array(DWORD, CCHILDREN_TITLEBAR + 1), // DWORD
	rgrect     : array(RECT, CCHILDREN_TITLEBAR + 1),  // RECT
});
export const PTITLEBARINFOEX = pointer(TITLEBARINFOEX);
export const LPTITLEBARINFOEX = pointer(TITLEBARINFOEX);

export const MENUBARINFO = struct({
	cbSize      : DWORD,              // DWORD
	rcBar       : RECT,               // RECT  // rect of bar, popup, item
	hMenu       : HMENU,              // HMENU // real menu handle of bar, popup
	hwndMenu    : HWND,               // HWND  // hwnd of item submenu if one
	fBarFocused : bitfield(BOOL, 1),  // BOOL  // bar, popup has the focus
	fFocused    : bitfield(BOOL, 1),  // BOOL  // item has the focus
	fUnused     : bitfield(BOOL, 30), // BOOL  // reserved. Cleared to prevent Information Disclosure
});
export const PMENUBARINFO = pointer(MENUBARINFO);
export const LPMENUBARINFO = pointer(MENUBARINFO);

export const SCROLLBARINFO = struct({
	cbSize        : DWORD,                                 // DWORD
	rcScrollBar   : RECT,                                  // RECT
	dxyLineButton : int,                                   // int
	xyThumbTop    : int,                                   // int
	xyThumbBottom : int,                                   // int
	reserved      : int,                                   // int
	rgstate       : array(DWORD, CCHILDREN_SCROLLBAR + 1), // DWORD
});
export const PSCROLLBARINFO = pointer(SCROLLBARINFO);
export const LPSCROLLBARINFO = pointer(SCROLLBARINFO);

export const COMBOBOXINFO = struct({
	cbSize      : DWORD, // DWORD
	rcItem      : RECT,  // RECT
	rcButton    : RECT,  // RECT
	stateButton : DWORD, // DWORD
	hwndCombo   : HWND,  // HWND
	hwndItem    : HWND,  // HWND
	hwndList    : HWND,  // HWND
});
export const PCOMBOBOXINFO = pointer(COMBOBOXINFO);
export const LPCOMBOBOXINFO = pointer(COMBOBOXINFO);

export const ALTTABINFO = struct({
	cbSize    : DWORD, // DWORD
	cItems    : int,   // int
	cColumns  : int,   // int
	cRows     : int,   // int
	iColFocus : int,   // int
	iRowFocus : int,   // int
	cxItem    : int,   // int
	cyItem    : int,   // int
	ptStart   : POINT, // POINT
});
export const PALTTABINFO = pointer(ALTTABINFO);
export const LPALTTABINFO = pointer(ALTTABINFO);

export const RAWINPUTHEADER = struct({
	dwType  : DWORD,  // DWORD
	dwSize  : DWORD,  // DWORD
	hDevice : HANDLE, // HANDLE
	wParam  : WPARAM, // WPARAM
});
export const PRAWINPUTHEADER = pointer(RAWINPUTHEADER);
export const LPRAWINPUTHEADER = pointer(RAWINPUTHEADER);

export const RAWMOUSE = struct({
	usFlags            : USHORT, // USHORT
	u                  : union({
		ulButtons : ULONG,  // ULONG
		s         : struct({
			usButtonFlags : USHORT, // USHORT
			usButtonData  : USHORT, // USHORT
		}), // struct
	}), // union
	ulRawButtons       : ULONG,  // ULONG
	lLastX             : LONG,   // LONG
	lLastY             : LONG,   // LONG
	ulExtraInformation : ULONG,  // ULONG
});
export const PRAWMOUSE = pointer(RAWMOUSE);
export const LPRAWMOUSE = pointer(RAWMOUSE);

export const RAWKEYBOARD = struct({
	MakeCode         : USHORT, // USHORT
	Flags            : USHORT, // USHORT
	Reserved         : USHORT, // USHORT
	VKey             : USHORT, // USHORT
	Message          : UINT,   // UINT
	ExtraInformation : ULONG,  // ULONG
});
export const PRAWKEYBOARD = pointer(RAWKEYBOARD);
export const LPRAWKEYBOARD = pointer(RAWKEYBOARD);

export const RAWHID = struct({
	dwSizeHid : DWORD,          // DWORD // byte size of each report
	dwCount   : DWORD,          // DWORD // number of input packed
	bRawData  : array(BYTE, 1), // BYTE
});
export const PRAWHID = pointer(RAWHID);
export const LPRAWHID = pointer(RAWHID);

export const RAWINPUT = struct({
	header : RAWINPUTHEADER, // RAWINPUTHEADER
	data   : union({
		mouse    : RAWMOUSE,    // RAWMOUSE
		keyboard : RAWKEYBOARD, // RAWKEYBOARD
		hid      : RAWHID,      // RAWHID
	}), // union
});
export const PRAWINPUT = pointer(RAWINPUT);
export const LPRAWINPUT = pointer(RAWINPUT);

export const RID_DEVICE_INFO_MOUSE = struct({
	dwId                : DWORD, // DWORD
	dwNumberOfButtons   : DWORD, // DWORD
	dwSampleRate        : DWORD, // DWORD
	fHasHorizontalWheel : BOOL,  // BOOL
});
export const PRID_DEVICE_INFO_MOUSE = pointer(RID_DEVICE_INFO_MOUSE);

export const RID_DEVICE_INFO_KEYBOARD = struct({
	dwType                 : DWORD, // DWORD
	dwSubType              : DWORD, // DWORD
	dwKeyboardMode         : DWORD, // DWORD
	dwNumberOfFunctionKeys : DWORD, // DWORD
	dwNumberOfIndicators   : DWORD, // DWORD
	dwNumberOfKeysTotal    : DWORD, // DWORD
});
export const PRID_DEVICE_INFO_KEYBOARD = pointer(RID_DEVICE_INFO_KEYBOARD);

export const RID_DEVICE_INFO_HID = struct({
	dwVendorId      : DWORD,  // DWORD
	dwProductId     : DWORD,  // DWORD
	dwVersionNumber : DWORD,  // DWORD
	usUsagePage     : USHORT, // USHORT
	usUsage         : USHORT, // USHORT
});
export const PRID_DEVICE_INFO_HID = pointer(RID_DEVICE_INFO_HID);

export const RID_DEVICE_INFO = struct({
	cbSize : DWORD, // DWORD
	dwType : DWORD, // DWORD
	u      : union({
		mouse    : RID_DEVICE_INFO_MOUSE,    // RID_DEVICE_INFO_MOUSE
		keyboard : RID_DEVICE_INFO_KEYBOARD, // RID_DEVICE_INFO_KEYBOARD
		hid      : RID_DEVICE_INFO_HID,      // RID_DEVICE_INFO_HID
	}), // union
});
export const PRID_DEVICE_INFO = pointer(RID_DEVICE_INFO);
export const LPRID_DEVICE_INFO = pointer(RID_DEVICE_INFO);

export const RAWINPUTDEVICE = struct({
	usUsagePage : USHORT, // USHORT // Toplevel collection UsagePage
	usUsage     : USHORT, // USHORT // Toplevel collection Usage
	dwFlags     : DWORD,  // DWORD
	hwndTarget  : HWND,   // HWND   // Target hwnd. NULL = follows keyboard focus
});
export const PRAWINPUTDEVICE = pointer(RAWINPUTDEVICE);
export const LPRAWINPUTDEVICE = pointer(RAWINPUTDEVICE);
export const PCRAWINPUTDEVICE = pointer(RAWINPUTDEVICE);

export const RAWINPUTDEVICELIST = struct({
	hDevice : HANDLE, // HANDLE
	dwType  : DWORD,  // DWORD
});
export const PRAWINPUTDEVICELIST = pointer(RAWINPUTDEVICELIST);

export const POINTER_DEVICE_INFO = struct({
	displayOrientation : DWORD,                                                     // DWORD
	device             : HANDLE,                                                    // HANDLE
	pointerDeviceType  : POINTER_DEVICE_TYPE,                                       // POINTER_DEVICE_TYPE
	monitor            : HMONITOR,                                                  // HMONITOR
	startingCursorId   : ULONG,                                                     // ULONG
	maxActiveContacts  : USHORT,                                                    // USHORT
	productString      : array(WCHAR, POINTER_DEVICE_PRODUCT_STRING_MAX, "String"), // WCHAR
});

export const POINTER_DEVICE_PROPERTY = struct({
	logicalMin   : INT32,  // INT32
	logicalMax   : INT32,  // INT32
	physicalMin  : INT32,  // INT32
	physicalMax  : INT32,  // INT32
	unit         : UINT32, // UINT32
	unitExponent : UINT32, // UINT32
	usagePageId  : USHORT, // USHORT
	usageId      : USHORT, // USHORT
});

export const POINTER_DEVICE_CURSOR_INFO = struct({
	cursorId : UINT32,                     // UINT32
	cursor   : POINTER_DEVICE_CURSOR_TYPE, // POINTER_DEVICE_CURSOR_TYPE
});

export const CHANGEFILTERSTRUCT = struct({
	cbSize    : DWORD, // DWORD
	ExtStatus : DWORD, // DWORD
});
export const PCHANGEFILTERSTRUCT = pointer(CHANGEFILTERSTRUCT);

export const GESTUREINFO = struct({
	cbSize       : UINT,      // UINT      // size, in bytes, of this structure (including variable length Args field)
	dwFlags      : DWORD,     // DWORD     // see GF_* flags
	dwID         : DWORD,     // DWORD     // gesture ID, see GID_* defines
	hwndTarget   : HWND,      // HWND      // handle to window targeted by this gesture
	ptsLocation  : POINTS,    // POINTS    // current location of this gesture
	dwInstanceID : DWORD,     // DWORD     // internally used
	dwSequenceID : DWORD,     // DWORD     // internally used
	ullArguments : ULONGLONG, // ULONGLONG // arguments for gestures whose arguments fit in 8 BYTES
	cbExtraArgs  : UINT,      // UINT      // size, in bytes, of extra arguments, if any, that accompany this gesture
});
export const PGESTUREINFO = pointer(GESTUREINFO);

export const GESTURENOTIFYSTRUCT = struct({
	cbSize       : UINT,   // UINT   // size, in bytes, of this structure
	dwFlags      : DWORD,  // DWORD  // unused
	hwndTarget   : HWND,   // HWND   // handle to window targeted by the gesture
	ptsLocation  : POINTS, // POINTS // starting location
	dwInstanceID : DWORD,  // DWORD  // internally used
});
export const PGESTURENOTIFYSTRUCT = pointer(GESTURENOTIFYSTRUCT);

export const GESTURECONFIG = struct({
	dwID    : DWORD, // DWORD // gesture ID
	dwWant  : DWORD, // DWORD // settings related to gesture ID that are to be turned on
	dwBlock : DWORD, // DWORD // settings related to gesture ID that are to be turned off
});
export const PGESTURECONFIG = pointer(GESTURECONFIG);

export const INPUT_MESSAGE_SOURCE = struct({
	deviceType : INPUT_MESSAGE_DEVICE_TYPE, // INPUT_MESSAGE_DEVICE_TYPE
	originId   : INPUT_MESSAGE_ORIGIN_ID,   // INPUT_MESSAGE_ORIGIN_ID
});


import koffi from "koffi";

// basic
import {pointer, out, inout} from "../../types.js";
import {
	int, long, va_list,
} from "../../types.js";

// basetsd.h
import {
	UINT32,
	INT_PTR,
	UINT_PTR,
	LONG_PTR,
	ULONG_PTR,
	PDWORD_PTR,
} from "../basetsd.h/basetsd.js";

// guiddef.h
import {
	LPCGUID,
} from "../guiddef.h/guiddef.js";

// minwindef.h
import {
	DWORD, LPDWORD,
	WORD,
	BYTE, PBYTE, LPBYTE,
	BOOL,
	ATOM,
	INT, LPINT,
	UINT, PUINT,
	ULONG, PULONG,
	LPVOID,
	LPARAM, LRESULT, WPARAM,
	HINSTANCE, HMODULE, HKL, HWINSTA, HRGN,
} from "../minwindef.h/minWindef.js";

// windef.h
import {DPI_AWARENESS_CONTEXT, DPI_AWARENESS, DPI_HOSTING_BEHAVIOR} from "../windef.h/windef.js";
import {COLORREF, LPCRECT, LPPOINT, LPRECT, POINT, RECT, SIZE} from "../windef.h/windef.js";
import {HMONITOR, HMENU, HWND, HDC, HICON, HCURSOR, HBRUSH, HDESK, HBITMAP, HHOOK, HWINEVENTHOOK, HACCEL} from "../windef.h/windef.js";

// winnt.h
import {
	HANDLE,
} from "../winnt.h/winnt.js";
import {
	LONG,
	SHORT,
	CHAR,
	WCHAR,
	LPSTR, LPCSTR, LPWSTR, LPCWSTR,
	VOID, PVOID,
	ACCESS_MASK, PSECURITY_INFORMATION, PSECURITY_DESCRIPTOR,
} from "../winnt.h/winnt.js";

// minWinBase.h
import {LPSECURITY_ATTRIBUTES} from "../minwinbase.h/minWinBase.js";

// wingdi.h
import {
	BLENDFUNCTION,
	DISPLAYCONFIG_DEVICE_INFO_HEADER,
	PDISPLAY_DEVICEA, PDISPLAY_DEVICEW,
	DEVMODEA, DEVMODEW,
} from "../wingdi.h/structs.js";

// WinUser.h
import {
	POINTER_INPUT_TYPE,
	HDEVNOTIFY,
	HPOWERNOTIFY,
	HDWP,
	DESKTOPENUMPROCA,
	DESKTOPENUMPROCW,
	WINSTAENUMPROCA,
	WINSTAENUMPROCW,
	MENUTEMPLATEA,
	MENUTEMPLATEW,
	HGESTUREINFO,
	HTOUCHINPUT,
	HSYNTHETICPOINTERDEVICE,
} from "./aliases.js";
import {
	FEEDBACK_TYPE,
	DIALOG_CONTROL_DPI_CHANGE_BEHAVIORS,
	DIALOG_DPI_CHANGE_BEHAVIORS,
	ORIENTATION_PREFERENCE,
	POINTER_FEEDBACK_MODE,
	PAR_STATE,
} from "./enums.js";
import {
	INPUT_MESSAGE_SOURCE,
	LPCDLGTEMPLATEA, LPCDLGTEMPLATEW, LPCMENUITEMINFOA, LPCMENUITEMINFOW,
	LPACCEL,
	LPMOUSEMOVEPOINT,
	LPMENUINFO, LPMENUITEMINFOA, LPMENUITEMINFOW,
	LPMONITORINFO,
	LPMSG,
	LPPAINTSTRUCT,
	LPSCROLLINFO,
	LPTRACKMOUSEEVENT,
	LPWNDCLASSA, LPWNDCLASSEXA, LPWNDCLASSEXW, LPWNDCLASSW,
	MSG,
	MSGBOXPARAMSA, MSGBOXPARAMSW,
	PAINTSTRUCT,
	PBSMINFO,
	PCHANGEFILTERSTRUCT,
	PCOMBOBOXINFO,
	PCURSORINFO,
	PFLASHWINFO,
	PGESTURECONFIG,
	PGESTUREINFO,
	PGUITHREADINFO, PICONINFO,
	PICONINFOEXA,
	PICONINFOEXW,
	PLASTINPUTINFO,
	PMENUBARINFO,
	PSCROLLBARINFO,
	PTITLEBARINFO,
	PWINDOWINFO,
	POINTER_DEVICE_INFO, POINTER_DEVICE_PROPERTY,
	POINTER_INFO, POINTER_PEN_INFO, POINTER_TOUCH_INFO, PTOUCHINPUT,
	TOUCH_HIT_TESTING_INPUT, TOUCH_HIT_TESTING_PROXIMITY_EVALUATION,
	UPDATELAYEREDWINDOWINFO,
	WINDOWPLACEMENT,
	WNDCLASSA, WNDCLASSW, WNDCLASSEXA, WNDCLASSEXW,
	LPTPMPARAMS,
	LPCMENUINFO,
	LPCSCROLLINFO,
	PCRAWINPUTDEVICE,
	PRAWINPUT,
	INPUT_TRANSFORM,
	POINTER_TYPE_INFO,
	LPINPUT,
	LPDRAWTEXTPARAMS, PRAWINPUTDEVICE, PRAWINPUTDEVICELIST, POINTER_DEVICE_CURSOR_INFO, PALTTABINFO,
} from "./structs.js";
import {
	DLGPROC,
	DRAWSTATEPROC,
	GRAYSTRINGPROC,
	HOOKPROC,
	MONITORENUMPROC,
	PROPENUMPROCA, PROPENUMPROCEXA, PROPENUMPROCEXW, PROPENUMPROCW,
	SENDASYNCPROC,
	TIMERPROC,
	WINEVENTPROC,
	WNDENUMPROC,
	WNDPROC,
} from "./callbacks.js";


const lib = koffi.load("user32.dll");
import {createAutoLoader} from "../../internals/loader.js";

export function wvsprintfA () {};
wvsprintfA = createAutoLoader(lib, "wvsprintfA", int /* int */, [
	out(LPSTR), /* out LPSTR           */
	LPCSTR,     /* in  LPCSTR          */
	va_list,    /* in  va_list arglist */
], f => wvsprintfA = f);

export function wvsprintfW () {};
wvsprintfW = createAutoLoader(lib, "wvsprintfW", int /* int */, [
	out(LPWSTR), /* out LPWSTR          */
	LPCWSTR,     /* in  LPCWSTR         */
	va_list,     /* in  va_list arglist */
], f => wvsprintfW = f);
export {wvsprintfW as wvsprintf};

export function LoadKeyboardLayoutA () {};
LoadKeyboardLayoutA = createAutoLoader(lib, "LoadKeyboardLayoutA", HKL /* HKL */, [
	LPCSTR, /* in LPCSTR pwszKLID */
	UINT,   /* in UINT   Flags    */
], f => LoadKeyboardLayoutA = f);

export function LoadKeyboardLayoutW () {};
LoadKeyboardLayoutW = createAutoLoader(lib, "LoadKeyboardLayoutW", HKL /* HKL */, [
	LPCWSTR, /* in LPCWSTR pwszKLID */
	UINT,    /* in UINT    Flags    */
], f => LoadKeyboardLayoutW = f);
export {LoadKeyboardLayoutW as LoadKeyboardLayout};

export function ActivateKeyboardLayout () {};
//#if(WINVER >= 0x0400)
ActivateKeyboardLayout = createAutoLoader(lib, "ActivateKeyboardLayout", HKL /* HKL */, [
	HKL,  /* in HKL  hkl   */
	UINT, /* in UINT Flags */
], f => ActivateKeyboardLayout = f);
//#else
// export function ActivateKeyboardLayout () {};
// ActivateKeyboardLayout = createAutoLoader(lib, "ActivateKeyboardLayout", BOOL /* BOOL */, [
// 	HKL,  /* in HKL  hkl   */
// 	UINT, /* in UINT Flags */
// ], f => ActivateKeyboardLayout = f);
//#endif

export function ToUnicodeEx () {};
ToUnicodeEx = createAutoLoader(lib, "ToUnicodeEx", int /* int */, [
	UINT,          /* in     UINT         wVirtKey   */
	UINT,          /* in     UINT         wScanCode  */
	pointer(BYTE), /*        CONST BYTE * lpKeyState */
	LPWSTR,        /*        LPWSTR       pwszBuff   */
	int,           /* in     int          cchBuff    */
	UINT,          /* in     UINT         wFlags     */
	HKL,           /* in opt HKL          dwhkl      */
], f => ToUnicodeEx = f);

export function UnloadKeyboardLayout () {};
UnloadKeyboardLayout = createAutoLoader(lib, "UnloadKeyboardLayout", BOOL /* BOOL */, [
	HKL, /* in HKL hkl */
], f => UnloadKeyboardLayout = f);

export function GetKeyboardLayoutNameA () {};
GetKeyboardLayoutNameA = createAutoLoader(lib, "GetKeyboardLayoutNameA", BOOL /* BOOL */, [
	LPSTR, /*  LPSTR pwszKLID */
], f => GetKeyboardLayoutNameA = f);

export function GetKeyboardLayoutNameW () {};
GetKeyboardLayoutNameW = createAutoLoader(lib, "GetKeyboardLayoutNameW", BOOL /* BOOL */, [
	LPWSTR, /*  LPWSTR pwszKLID */
], f => GetKeyboardLayoutNameW = f);
export {GetKeyboardLayoutNameW as GetKeyboardLayoutName};

export function GetKeyboardLayoutList () {};
GetKeyboardLayoutList = createAutoLoader(lib, "GetKeyboardLayoutList", int /* int */, [
	int,          /* in int       nBuff  */
	pointer(HKL), /*    HKL FAR * lpList */
], f => GetKeyboardLayoutList = f);

export function GetKeyboardLayout () {};
GetKeyboardLayout = createAutoLoader(lib, "GetKeyboardLayout", HKL /* HKL */, [
	DWORD, /* in DWORD idThread */
], f => GetKeyboardLayout = f);

export function GetMouseMovePointsEx () {};
GetMouseMovePointsEx = createAutoLoader(lib, "GetMouseMovePointsEx", int /* int */, [
	UINT,             /* in UINT             cbSize     */
	LPMOUSEMOVEPOINT, /* in LPMOUSEMOVEPOINT lppt       */
	LPMOUSEMOVEPOINT, /*    LPMOUSEMOVEPOINT lpptBuf    */
	int,              /* in int              nBufPoints */
	DWORD,            /* in DWORD            resolution */
], f => GetMouseMovePointsEx = f);

export function CreateDesktopA () {};
CreateDesktopA = createAutoLoader(lib, "CreateDesktopA", HDESK /* HDESK */, [
	LPCSTR,                /* in       LPCSTR                lpszDesktop     */
	LPCSTR,                /* reserved LPCSTR                lpszDevice      */
	pointer(DEVMODEA),     /* reserved DEVMODEA*             pDevmode        */
	DWORD,                 /* in       DWORD                 dwFlags         */
	ACCESS_MASK,           /* in       ACCESS_MASK           dwDesiredAccess */
	LPSECURITY_ATTRIBUTES, /* in opt   LPSECURITY_ATTRIBUTES lpsa            */
], f => CreateDesktopA = f);

export function CreateDesktopW () {};
CreateDesktopW = createAutoLoader(lib, "CreateDesktopW", HDESK /* HDESK */, [
	LPCWSTR,               /* in       LPCWSTR               lpszDesktop     */
	LPCWSTR,               /* reserved LPCWSTR               lpszDevice      */
	pointer(DEVMODEW),     /* reserved DEVMODEW*             pDevmode        */
	DWORD,                 /* in       DWORD                 dwFlags         */
	ACCESS_MASK,           /* in       ACCESS_MASK           dwDesiredAccess */
	LPSECURITY_ATTRIBUTES, /* in opt   LPSECURITY_ATTRIBUTES lpsa            */
], f => CreateDesktopW = f);
export {CreateDesktopW as CreateDesktop};

export function CreateDesktopExA () {};
CreateDesktopExA = createAutoLoader(lib, "CreateDesktopExA", HDESK /* HDESK */, [
	LPCSTR,                /* in       LPCSTR                lpszDesktop     */
	LPCSTR,                /* reserved LPCSTR                lpszDevice      */
	pointer(DEVMODEA),     /* reserved DEVMODEA*             pDevmode        */
	DWORD,                 /* in       DWORD                 dwFlags         */
	ACCESS_MASK,           /* in       ACCESS_MASK           dwDesiredAccess */
	LPSECURITY_ATTRIBUTES, /* in opt   LPSECURITY_ATTRIBUTES lpsa            */
	ULONG,                 /* in       ULONG                 ulHeapSize      */
	PVOID,                 /* reserved PVOID                 pvoid           */
], f => CreateDesktopExA = f);

export function CreateDesktopExW () {};
CreateDesktopExW = createAutoLoader(lib, "CreateDesktopExW", HDESK /* HDESK */, [
	LPCWSTR,               /* in       LPCWSTR               lpszDesktop     */
	LPCWSTR,               /* reserved LPCWSTR               lpszDevice      */
	pointer(DEVMODEW),     /* reserved DEVMODEW*             pDevmode        */
	DWORD,                 /* in       DWORD                 dwFlags         */
	ACCESS_MASK,           /* in       ACCESS_MASK           dwDesiredAccess */
	LPSECURITY_ATTRIBUTES, /* in opt   LPSECURITY_ATTRIBUTES lpsa            */
	ULONG,                 /* in       ULONG                 ulHeapSize      */
	PVOID,                 /* reserved PVOID                 pvoid           */
], f => CreateDesktopExW = f);
export {CreateDesktopExW as CreateDesktopEx};

export function OpenDesktopA () {};
OpenDesktopA = createAutoLoader(lib, "OpenDesktopA", HDESK /* HDESK */, [
	LPCSTR,      /* in LPCSTR      lpszDesktop     */
	DWORD,       /* in DWORD       dwFlags         */
	BOOL,        /* in BOOL        fInherit        */
	ACCESS_MASK, /* in ACCESS_MASK dwDesiredAccess */
], f => OpenDesktopA = f);

export function OpenDesktopW () {};
OpenDesktopW = createAutoLoader(lib, "OpenDesktopW", HDESK /* HDESK */, [
	LPCWSTR,     /* in LPCWSTR     lpszDesktop     */
	DWORD,       /* in DWORD       dwFlags         */
	BOOL,        /* in BOOL        fInherit        */
	ACCESS_MASK, /* in ACCESS_MASK dwDesiredAccess */
], f => OpenDesktopW = f);
export {OpenDesktopW as OpenDesktop};

export function OpenInputDesktop () {};
OpenInputDesktop = createAutoLoader(lib, "OpenInputDesktop", HDESK /* HDESK */, [
	DWORD,       /* in DWORD       dwFlags         */
	BOOL,        /* in BOOL        fInherit        */
	ACCESS_MASK, /* in ACCESS_MASK dwDesiredAccess */
], f => OpenInputDesktop = f);

export function EnumDesktopsA () {};
EnumDesktopsA = createAutoLoader(lib, "EnumDesktopsA", BOOL /* BOOL */, [
	HWINSTA,          /* in opt HWINSTA          hwinsta    */
	DESKTOPENUMPROCA, /* in     DESKTOPENUMPROCA lpEnumFunc */
	LPARAM,           /* in     LPARAM           lParam     */
], f => EnumDesktopsA = f);

export function EnumDesktopsW () {};
EnumDesktopsW = createAutoLoader(lib, "EnumDesktopsW", BOOL /* BOOL */, [
	HWINSTA,          /* in opt HWINSTA          hwinsta    */
	DESKTOPENUMPROCW, /* in     DESKTOPENUMPROCW lpEnumFunc */
	LPARAM,           /* in     LPARAM           lParam     */
], f => EnumDesktopsW = f);
export {EnumDesktopsW as EnumDesktops};

export function EnumDesktopWindows () {};
EnumDesktopWindows = createAutoLoader(lib, "EnumDesktopWindows", BOOL /* BOOL */, [
	HDESK,       /* in opt HDESK       hDesktop */
	WNDENUMPROC, /* in     WNDENUMPROC lpfn     */
	LPARAM,      /* in     LPARAM      lParam   */
], f => EnumDesktopWindows = f);

export function SwitchDesktop () {};
SwitchDesktop = createAutoLoader(lib, "SwitchDesktop", BOOL /* BOOL */, [
	HDESK, /* in HDESK hDesktop */
], f => SwitchDesktop = f);

export function SetThreadDesktop () {};
SetThreadDesktop = createAutoLoader(lib, "SetThreadDesktop", BOOL /* BOOL */, [
	HDESK, /* in HDESK hDesktop */
], f => SetThreadDesktop = f);

export function CloseDesktop () {};
CloseDesktop = createAutoLoader(lib, "CloseDesktop", BOOL /* BOOL */, [
	HDESK, /* in HDESK hDesktop */
], f => CloseDesktop = f);

export function GetThreadDesktop () {};
GetThreadDesktop = createAutoLoader(lib, "GetThreadDesktop", HDESK /* HDESK */, [
	DWORD, /* in DWORD dwThreadId */
], f => GetThreadDesktop = f);

export function CreateWindowStationA () {};
CreateWindowStationA = createAutoLoader(lib, "CreateWindowStationA", HWINSTA /* HWINSTA */, [
	LPCSTR,                /* in opt LPCSTR                lpwinsta        */
	DWORD,                 /* in     DWORD                 dwFlags         */
	ACCESS_MASK,           /* in     ACCESS_MASK           dwDesiredAccess */
	LPSECURITY_ATTRIBUTES, /* in opt LPSECURITY_ATTRIBUTES lpsa            */
], f => CreateWindowStationA = f);

export function CreateWindowStationW () {};
CreateWindowStationW = createAutoLoader(lib, "CreateWindowStationW", HWINSTA /* HWINSTA */, [
	LPCWSTR,               /* in opt LPCWSTR               lpwinsta        */
	DWORD,                 /* in     DWORD                 dwFlags         */
	ACCESS_MASK,           /* in     ACCESS_MASK           dwDesiredAccess */
	LPSECURITY_ATTRIBUTES, /* in opt LPSECURITY_ATTRIBUTES lpsa            */
], f => CreateWindowStationW = f);
export {CreateWindowStationW as CreateWindowStation};

export function OpenWindowStationA () {};
OpenWindowStationA = createAutoLoader(lib, "OpenWindowStationA", HWINSTA /* HWINSTA */, [
	LPCSTR,      /* in LPCSTR      lpszWinSta      */
	BOOL,        /* in BOOL        fInherit        */
	ACCESS_MASK, /* in ACCESS_MASK dwDesiredAccess */
], f => OpenWindowStationA = f);

export function OpenWindowStationW () {};
OpenWindowStationW = createAutoLoader(lib, "OpenWindowStationW", HWINSTA /* HWINSTA */, [
	LPCWSTR,     /* in LPCWSTR     lpszWinSta      */
	BOOL,        /* in BOOL        fInherit        */
	ACCESS_MASK, /* in ACCESS_MASK dwDesiredAccess */
], f => OpenWindowStationW = f);
export {OpenWindowStationW as OpenWindowStation};

export function EnumWindowStationsA () {};
EnumWindowStationsA = createAutoLoader(lib, "EnumWindowStationsA", BOOL /* BOOL */, [
	WINSTAENUMPROCA, /* in WINSTAENUMPROCA lpEnumFunc */
	LPARAM,          /* in LPARAM          lParam     */
], f => EnumWindowStationsA = f);

export function EnumWindowStationsW () {};
EnumWindowStationsW = createAutoLoader(lib, "EnumWindowStationsW", BOOL /* BOOL */, [
	WINSTAENUMPROCW, /* in WINSTAENUMPROCW lpEnumFunc */
	LPARAM,          /* in LPARAM          lParam     */
], f => EnumWindowStationsW = f);
export {EnumWindowStationsW as EnumWindowStations};

export function CloseWindowStation () {};
CloseWindowStation = createAutoLoader(lib, "CloseWindowStation", BOOL /* BOOL */, [
	HWINSTA, /* in HWINSTA hWinSta */
], f => CloseWindowStation = f);

export function SetProcessWindowStation () {};
SetProcessWindowStation = createAutoLoader(lib, "SetProcessWindowStation", BOOL /* BOOL */, [
	HWINSTA, /* in HWINSTA hWinSta */
], f => SetProcessWindowStation = f);

export function GetProcessWindowStation () {};
GetProcessWindowStation = createAutoLoader(lib, "GetProcessWindowStation", HWINSTA /* HWINSTA */, [
	/* void */
], f => GetProcessWindowStation = f);

export function SetUserObjectSecurity () {};
SetUserObjectSecurity = createAutoLoader(lib, "SetUserObjectSecurity", BOOL /* BOOL */, [
	HANDLE,                /* in HANDLE                hObj         */
	PSECURITY_INFORMATION, /* in PSECURITY_INFORMATION pSIRequested */
	PSECURITY_DESCRIPTOR,  /* in PSECURITY_DESCRIPTOR  pSID         */
], f => SetUserObjectSecurity = f);

export function GetUserObjectSecurity () {};
GetUserObjectSecurity = createAutoLoader(lib, "GetUserObjectSecurity", BOOL /* BOOL */, [
	HANDLE,                /* in  HANDLE                hObj            */
	PSECURITY_INFORMATION, /* in  PSECURITY_INFORMATION pSIRequested    */
	PSECURITY_DESCRIPTOR,  /*     PSECURITY_DESCRIPTOR  pSID            */
	DWORD,                 /* in  DWORD                 nLength         */
	out(LPDWORD),          /* out LPDWORD               lpnLengthNeeded */
], f => GetUserObjectSecurity = f);

export function GetUserObjectInformationA () {};
GetUserObjectInformationA = createAutoLoader(lib, "GetUserObjectInformationA", BOOL /* BOOL */, [
	HANDLE,       /* in      HANDLE  hObj            */
	int,          /* in      int     nIndex          */
	PVOID,        /*         PVOID   pvInfo          */
	DWORD,        /* in      DWORD   nLength         */
	out(LPDWORD), /* out opt LPDWORD lpnLengthNeeded */
], f => GetUserObjectInformationA = f);

export function GetUserObjectInformationW () {};
GetUserObjectInformationW = createAutoLoader(lib, "GetUserObjectInformationW", BOOL /* BOOL */, [
	HANDLE,       /* in      HANDLE  hObj            */
	int,          /* in      int     nIndex          */
	PVOID,        /*         PVOID   pvInfo          */
	DWORD,        /* in      DWORD   nLength         */
	out(LPDWORD), /* out opt LPDWORD lpnLengthNeeded */
], f => GetUserObjectInformationW = f);
export {GetUserObjectInformationW as GetUserObjectInformation};

export function SetUserObjectInformationA () {};
SetUserObjectInformationA = createAutoLoader(lib, "SetUserObjectInformationA", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hObj    */
	int,    /* in int    nIndex  */
	PVOID,  /*    PVOID  pvInfo  */
	DWORD,  /* in DWORD  nLength */
], f => SetUserObjectInformationA = f);

export function SetUserObjectInformationW () {};
SetUserObjectInformationW = createAutoLoader(lib, "SetUserObjectInformationW", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hObj    */
	int,    /* in int    nIndex  */
	PVOID,  /*    PVOID  pvInfo  */
	DWORD,  /* in DWORD  nLength */
], f => SetUserObjectInformationW = f);
export {SetUserObjectInformationW as SetUserObjectInformation};

export function IsHungAppWindow () {};
IsHungAppWindow = createAutoLoader(lib, "IsHungAppWindow", BOOL /* BOOL */, [
	HWND, /* in HWND hwnd */
], f => IsHungAppWindow = f);

export function DisableProcessWindowsGhosting () {};
DisableProcessWindowsGhosting = createAutoLoader(lib, "DisableProcessWindowsGhosting", VOID /* VOID */, [
	/* void */
], f => DisableProcessWindowsGhosting = f);

export function RegisterWindowMessageA () {};
RegisterWindowMessageA = createAutoLoader(lib, "RegisterWindowMessageA", UINT /* UINT */, [
	LPCSTR, /* in LPCSTR lpString */
], f => RegisterWindowMessageA = f);

export function RegisterWindowMessageW () {};
RegisterWindowMessageW = createAutoLoader(lib, "RegisterWindowMessageW", UINT /* UINT */, [
	LPCWSTR, /* in LPCWSTR lpString */
], f => RegisterWindowMessageW = f);
export {RegisterWindowMessageW as RegisterWindowMessage};

export function TrackMouseEvent () {};
TrackMouseEvent = createAutoLoader(lib, "TrackMouseEvent", BOOL /* BOOL */, [
	inout(LPTRACKMOUSEEVENT), /* in out LPTRACKMOUSEEVENT lpEventTrack */
], f => TrackMouseEvent = f);

export function DrawEdge () {};
DrawEdge = createAutoLoader(lib, "DrawEdge", BOOL /* BOOL */, [
	HDC,           /* in     HDC    hdc      */
	inout(LPRECT), /* in out LPRECT qrc      */
	UINT,          /* in     UINT   edge     */
	UINT,          /* in     UINT   grfFlags */
], f => DrawEdge = f);

export function DrawFrameControl () {};
DrawFrameControl = createAutoLoader(lib, "DrawFrameControl", BOOL /* BOOL */, [
	HDC,           /* in     HDC     */
	inout(LPRECT), /* in out LPRECT  */
	UINT,          /* in     UINT    */
	UINT,          /* in     UINT    */
], f => DrawFrameControl = f);

export function DrawCaption () {};
DrawCaption = createAutoLoader(lib, "DrawCaption", BOOL /* BOOL */, [
	HWND,          /* in HWND         hwnd   */
	HDC,           /* in HDC          hdc    */
	pointer(RECT), /* in CONST RECT * lprect */
	UINT,          /* in UINT         flags  */
], f => DrawCaption = f);

export function DrawAnimatedRects () {};
DrawAnimatedRects = createAutoLoader(lib, "DrawAnimatedRects", BOOL /* BOOL */, [
	HWND,          /* in opt HWND         hwnd     */
	int,           /* in     int          idAni    */
	pointer(RECT), /* in     CONST RECT * lprcFrom */
	pointer(RECT), /* in     CONST RECT * lprcTo   */
], f => DrawAnimatedRects = f);

export function GetMessageA () {};
GetMessageA = createAutoLoader(lib, "GetMessageA", BOOL /* BOOL */, [
	out(LPMSG), /* out    LPMSG lpMsg         */
	HWND,       /* in opt HWND  hWnd          */
	UINT,       /* in     UINT  wMsgFilterMin */
	UINT,       /* in     UINT  wMsgFilterMax */
], f => GetMessageA = f);

export function GetMessageW () {};
GetMessageW = createAutoLoader(lib, "GetMessageW", BOOL /* BOOL */, [
	out(LPMSG), /* out    LPMSG lpMsg         */
	HWND,       /* in opt HWND  hWnd          */
	UINT,       /* in     UINT  wMsgFilterMin */
	UINT,       /* in     UINT  wMsgFilterMax */
], f => GetMessageW = f);
export {GetMessageW as GetMessage};

export function TranslateMessage () {};
TranslateMessage = createAutoLoader(lib, "TranslateMessage", BOOL /* BOOL */, [
	pointer(MSG), /* in CONST MSG * lpMsg */
], f => TranslateMessage = f);

export function DispatchMessageA () {};
DispatchMessageA = createAutoLoader(lib, "DispatchMessageA", LRESULT /* LRESULT */, [
	pointer(MSG), /* in CONST MSG * lpMsg */
], f => DispatchMessageA = f);

export function DispatchMessageW () {};
DispatchMessageW = createAutoLoader(lib, "DispatchMessageW", LRESULT /* LRESULT */, [
	pointer(MSG), /* in CONST MSG * lpMsg */
], f => DispatchMessageW = f);
export {DispatchMessageW as DispatchMessage};

export function SetMessageQueue () {};
SetMessageQueue = createAutoLoader(lib, "SetMessageQueue", BOOL /* BOOL */, [
	int, /* in int cMessagesMax */
], f => SetMessageQueue = f);

export function PeekMessageA () {};
PeekMessageA = createAutoLoader(lib, "PeekMessageA", BOOL /* BOOL */, [
	out(LPMSG), /* out    LPMSG lpMsg         */
	HWND,       /* in opt HWND  hWnd          */
	UINT,       /* in     UINT  wMsgFilterMin */
	UINT,       /* in     UINT  wMsgFilterMax */
	UINT,       /* in     UINT  wRemoveMsg    */
], f => PeekMessageA = f);

export function PeekMessageW () {};
PeekMessageW = createAutoLoader(lib, "PeekMessageW", BOOL /* BOOL */, [
	out(LPMSG), /* out    LPMSG lpMsg         */
	HWND,       /* in opt HWND  hWnd          */
	UINT,       /* in     UINT  wMsgFilterMin */
	UINT,       /* in     UINT  wMsgFilterMax */
	UINT,       /* in     UINT  wRemoveMsg    */
], f => PeekMessageW = f);
export {PeekMessageW as PeekMessage};

export function RegisterHotKey () {};
RegisterHotKey = createAutoLoader(lib, "RegisterHotKey", BOOL /* BOOL */, [
	HWND, /* in opt HWND hWnd        */
	int,  /* in     int  id          */
	UINT, /* in     UINT fsModifiers */
	UINT, /* in     UINT vk          */
], f => RegisterHotKey = f);

export function UnregisterHotKey () {};
UnregisterHotKey = createAutoLoader(lib, "UnregisterHotKey", BOOL /* BOOL */, [
	HWND, /* in opt HWND hWnd */
	int,  /* in     int  id   */
], f => UnregisterHotKey = f);

export function ExitWindowsEx () {};
ExitWindowsEx = createAutoLoader(lib, "ExitWindowsEx", BOOL /* BOOL */, [
	UINT,  /* in UINT  uFlags   */
	DWORD, /* in DWORD dwReason */
], f => ExitWindowsEx = f);

export function SwapMouseButton () {};
SwapMouseButton = createAutoLoader(lib, "SwapMouseButton", BOOL /* BOOL */, [
	BOOL, /* in BOOL fSwap */
], f => SwapMouseButton = f);

export function GetMessagePos () {};
GetMessagePos = createAutoLoader(lib, "GetMessagePos", DWORD /* DWORD */, [
	/* void */
], f => GetMessagePos = f);

export function GetMessageTime () {};
GetMessageTime = createAutoLoader(lib, "GetMessageTime", LONG /* LONG */, [
	/* void */
], f => GetMessageTime = f);

export function GetMessageExtraInfo () {};
GetMessageExtraInfo = createAutoLoader(lib, "GetMessageExtraInfo", LPARAM /* LPARAM */, [
	/* void */
], f => GetMessageExtraInfo = f);

export function GetUnpredictedMessagePos () {};
GetUnpredictedMessagePos = createAutoLoader(lib, "GetUnpredictedMessagePos", DWORD /* DWORD */, [
	/* void */
], f => GetUnpredictedMessagePos = f);

export function IsWow64Message () {};
IsWow64Message = createAutoLoader(lib, "IsWow64Message", BOOL /* BOOL */, [
	/* void */
], f => IsWow64Message = f);

export function SetMessageExtraInfo () {};
SetMessageExtraInfo = createAutoLoader(lib, "SetMessageExtraInfo", LPARAM /* LPARAM */, [
	LPARAM, /* in LPARAM lParam */
], f => SetMessageExtraInfo = f);

export function SendMessageA () {};
SendMessageA = createAutoLoader(lib, "SendMessageA", LRESULT /* LRESULT */, [
	HWND,   /* in HWND   hWnd   */
	UINT,   /* in UINT   Msg    */
	WPARAM, /*    WPARAM wParam */
	LPARAM, /*    LPARAM lParam */
], f => SendMessageA = f);

export function SendMessageW () {};
SendMessageW = createAutoLoader(lib, "SendMessageW", LRESULT /* LRESULT */, [
	HWND,   /* in HWND   hWnd   */
	UINT,   /* in UINT   Msg    */
	WPARAM, /*    WPARAM wParam */
	LPARAM, /*    LPARAM lParam */
], f => SendMessageW = f);
export {SendMessageW as SendMessage};

export function SendMessageTimeoutA () {};
SendMessageTimeoutA = createAutoLoader(lib, "SendMessageTimeoutA", LRESULT /* LRESULT */, [
	HWND,            /* in      HWND       hWnd       */
	UINT,            /* in      UINT       Msg        */
	WPARAM,          /* in      WPARAM     wParam     */
	LPARAM,          /* in      LPARAM     lParam     */
	UINT,            /* in      UINT       fuFlags    */
	UINT,            /* in      UINT       uTimeout   */
	out(PDWORD_PTR), /* out opt PDWORD_PTR lpdwResult */
], f => SendMessageTimeoutA = f);

export function SendMessageTimeoutW () {};
SendMessageTimeoutW = createAutoLoader(lib, "SendMessageTimeoutW", LRESULT /* LRESULT */, [
	HWND,            /* in      HWND       hWnd       */
	UINT,            /* in      UINT       Msg        */
	WPARAM,          /* in      WPARAM     wParam     */
	LPARAM,          /* in      LPARAM     lParam     */
	UINT,            /* in      UINT       fuFlags    */
	UINT,            /* in      UINT       uTimeout   */
	out(PDWORD_PTR), /* out opt PDWORD_PTR lpdwResult */
], f => SendMessageTimeoutW = f);
export {SendMessageTimeoutW as SendMessageTimeout};

export function SendNotifyMessageA () {};
SendNotifyMessageA = createAutoLoader(lib, "SendNotifyMessageA", BOOL /* BOOL */, [
	HWND,   /* in HWND   hWnd   */
	UINT,   /* in UINT   Msg    */
	WPARAM, /* in WPARAM wParam */
	LPARAM, /* in LPARAM lParam */
], f => SendNotifyMessageA = f);

export function SendNotifyMessageW () {};
SendNotifyMessageW = createAutoLoader(lib, "SendNotifyMessageW", BOOL /* BOOL */, [
	HWND,   /* in HWND   hWnd   */
	UINT,   /* in UINT   Msg    */
	WPARAM, /* in WPARAM wParam */
	LPARAM, /* in LPARAM lParam */
], f => SendNotifyMessageW = f);
export {SendNotifyMessageW as SendNotifyMessage};

export function SendMessageCallbackA () {};
SendMessageCallbackA = createAutoLoader(lib, "SendMessageCallbackA", BOOL /* BOOL */, [
	HWND,          /* in HWND          hWnd             */
	UINT,          /* in UINT          Msg              */
	WPARAM,        /* in WPARAM        wParam           */
	LPARAM,        /* in LPARAM        lParam           */
	SENDASYNCPROC, /* in SENDASYNCPROC lpResultCallBack */
	ULONG_PTR,     /* in ULONG_PTR     dwData           */
], f => SendMessageCallbackA = f);

export function SendMessageCallbackW () {};
SendMessageCallbackW = createAutoLoader(lib, "SendMessageCallbackW", BOOL /* BOOL */, [
	HWND,          /* in HWND          hWnd             */
	UINT,          /* in UINT          Msg              */
	WPARAM,        /* in WPARAM        wParam           */
	LPARAM,        /* in LPARAM        lParam           */
	SENDASYNCPROC, /* in SENDASYNCPROC lpResultCallBack */
	ULONG_PTR,     /* in ULONG_PTR     dwData           */
], f => SendMessageCallbackW = f);
export {SendMessageCallbackW as SendMessageCallback};

export function BroadcastSystemMessageExA () {};
BroadcastSystemMessageExA = createAutoLoader(lib, "BroadcastSystemMessageExA", long /* long */, [
	DWORD,          /* in         DWORD    flags    */
	inout(LPDWORD), /* in out opt LPDWORD  lpInfo   */
	UINT,           /* in         UINT     Msg      */
	WPARAM,         /* in         WPARAM   wParam   */
	LPARAM,         /* in         LPARAM   lParam   */
	out(PBSMINFO),  /* out opt    PBSMINFO pbsmInfo */
], f => BroadcastSystemMessageExA = f);

export function BroadcastSystemMessageExW () {};
BroadcastSystemMessageExW = createAutoLoader(lib, "BroadcastSystemMessageExW", long /* long */, [
	DWORD,          /* in         DWORD    flags    */
	inout(LPDWORD), /* in out opt LPDWORD  lpInfo   */
	UINT,           /* in         UINT     Msg      */
	WPARAM,         /* in         WPARAM   wParam   */
	LPARAM,         /* in         LPARAM   lParam   */
	out(PBSMINFO),  /* out opt    PBSMINFO pbsmInfo */
], f => BroadcastSystemMessageExW = f);
export {BroadcastSystemMessageExW as BroadcastSystemMessageEx};

export function BroadcastSystemMessageA () {};
BroadcastSystemMessageA = createAutoLoader(lib, "BroadcastSystemMessageA", long /* long */, [
	DWORD,          /* in         DWORD   flags  */
	inout(LPDWORD), /* in out opt LPDWORD lpInfo */
	UINT,           /* in         UINT    Msg    */
	WPARAM,         /* in         WPARAM  wParam */
	LPARAM,         /* in         LPARAM  lParam */
], f => BroadcastSystemMessageA = f);

export function BroadcastSystemMessageW () {};
BroadcastSystemMessageW = createAutoLoader(lib, "BroadcastSystemMessageW", long /* long */, [
	DWORD,          /* in         DWORD   flags  */
	inout(LPDWORD), /* in out opt LPDWORD lpInfo */
	UINT,           /* in         UINT    Msg    */
	WPARAM,         /* in         WPARAM  wParam */
	LPARAM,         /* in         LPARAM  lParam */
], f => BroadcastSystemMessageW = f);
export {BroadcastSystemMessageW as BroadcastSystemMessage};

// #elif defined(_WIN32_WINDOWS)
// // The Win95 version isn't A/W decorated
// export function BroadcastSystemMessage () {};
// BroadcastSystemMessage = createAutoLoader(lib, "BroadcastSystemMessage", long /* long */, [
// 	DWORD,          /* in         DWORD   flags  */
// 	inout(LPDWORD), /* in out opt LPDWORD lpInfo */
// 	UINT,           /* in         UINT    Msg    */
// 	WPARAM,         /* in         WPARAM  wParam */
// 	LPARAM,         /* in         LPARAM  lParam */
// ], f => BroadcastSystemMessage = f);
// #endif

export function RegisterDeviceNotificationA () {};
RegisterDeviceNotificationA = createAutoLoader(lib, "RegisterDeviceNotificationA", HDEVNOTIFY /* HDEVNOTIFY */, [
	HANDLE, /* in HANDLE hRecipient         */
	LPVOID, /* in LPVOID NotificationFilter */
	DWORD,  /* in DWORD  Flags              */
], f => RegisterDeviceNotificationA = f);

export function RegisterDeviceNotificationW () {};
RegisterDeviceNotificationW = createAutoLoader(lib, "RegisterDeviceNotificationW", HDEVNOTIFY /* HDEVNOTIFY */, [
	HANDLE, /* in HANDLE hRecipient         */
	LPVOID, /* in LPVOID NotificationFilter */
	DWORD,  /* in DWORD  Flags              */
], f => RegisterDeviceNotificationW = f);
export {RegisterDeviceNotificationW as RegisterDeviceNotification};

export function UnregisterDeviceNotification () {};
UnregisterDeviceNotification = createAutoLoader(lib, "UnregisterDeviceNotification", BOOL /* BOOL */, [
	HDEVNOTIFY, /* in HDEVNOTIFY Handle */
], f => UnregisterDeviceNotification = f);

export function RegisterPowerSettingNotification () {};
RegisterPowerSettingNotification = createAutoLoader(lib, "RegisterPowerSettingNotification", HPOWERNOTIFY /* HPOWERNOTIFY */, [
	HANDLE,  /* in HANDLE  hRecipient       */
	LPCGUID, /* in LPCGUID PowerSettingGuid */
	DWORD,   /* in DWORD   Flags            */
], f => RegisterPowerSettingNotification = f);

export function UnregisterPowerSettingNotification () {};
UnregisterPowerSettingNotification = createAutoLoader(lib, "UnregisterPowerSettingNotification", BOOL /* BOOL */, [
	HPOWERNOTIFY, /* in HPOWERNOTIFY Handle */
], f => UnregisterPowerSettingNotification = f);

export function RegisterSuspendResumeNotification () {};
RegisterSuspendResumeNotification = createAutoLoader(lib, "RegisterSuspendResumeNotification", HPOWERNOTIFY /* HPOWERNOTIFY */, [
	HANDLE, /* in HANDLE hRecipient */
	DWORD,  /* in DWORD  Flags      */
], f => RegisterSuspendResumeNotification = f);

export function UnregisterSuspendResumeNotification () {};
UnregisterSuspendResumeNotification = createAutoLoader(lib, "UnregisterSuspendResumeNotification", BOOL /* BOOL */, [
	HPOWERNOTIFY, /* in HPOWERNOTIFY Handle */
], f => UnregisterSuspendResumeNotification = f);

export function PostMessageA () {};
PostMessageA = createAutoLoader(lib, "PostMessageA", BOOL /* BOOL */, [
	HWND,   /* in opt HWND   hWnd   */
	UINT,   /* in     UINT   Msg    */
	WPARAM, /* in     WPARAM wParam */
	LPARAM, /* in     LPARAM lParam */
], f => PostMessageA = f);

export function PostMessageW () {};
PostMessageW = createAutoLoader(lib, "PostMessageW", BOOL /* BOOL */, [
	HWND,   /* in opt HWND   hWnd   */
	UINT,   /* in     UINT   Msg    */
	WPARAM, /* in     WPARAM wParam */
	LPARAM, /* in     LPARAM lParam */
], f => PostMessageW = f);
export {PostMessageW as PostMessage};

export function PostThreadMessageA () {};
PostThreadMessageA = createAutoLoader(lib, "PostThreadMessageA", BOOL /* BOOL */, [
	DWORD,  /* in DWORD  idThread */
	UINT,   /* in UINT   Msg      */
	WPARAM, /* in WPARAM wParam   */
	LPARAM, /* in LPARAM lParam   */
], f => PostThreadMessageA = f);

export function PostThreadMessageW () {};
PostThreadMessageW = createAutoLoader(lib, "PostThreadMessageW", BOOL /* BOOL */, [
	DWORD,  /* in DWORD  idThread */
	UINT,   /* in UINT   Msg      */
	WPARAM, /* in WPARAM wParam   */
	LPARAM, /* in LPARAM lParam   */
], f => PostThreadMessageW = f);
export {PostThreadMessageW as PostThreadMessage};

export function AttachThreadInput () {};
AttachThreadInput = createAutoLoader(lib, "AttachThreadInput", BOOL /* BOOL */, [
	DWORD, /* in DWORD idAttach   */
	DWORD, /* in DWORD idAttachTo */
	BOOL,  /* in BOOL  fAttach    */
], f => AttachThreadInput = f);

export function ReplyMessage () {};
ReplyMessage = createAutoLoader(lib, "ReplyMessage", BOOL /* BOOL */, [
	LRESULT, /* in LRESULT lResult */
], f => ReplyMessage = f);

export function WaitMessage () {};
WaitMessage = createAutoLoader(lib, "WaitMessage", BOOL /* BOOL */, [
	/* void */
], f => WaitMessage = f);

export function WaitForInputIdle () {};
WaitForInputIdle = createAutoLoader(lib, "WaitForInputIdle", DWORD /* DWORD */, [
	HANDLE, /* in HANDLE hProcess       */
	DWORD,  /* in DWORD  dwMilliseconds */
], f => WaitForInputIdle = f);

export function DefWindowProcA () {};
DefWindowProcA = createAutoLoader(lib, "DefWindowProcA", LRESULT, [
	HWND,   /* in HWND   hWnd   */
	UINT,   /* in UINT   Msg    */
	WPARAM, /* in WPARAM wParam */
	LPARAM, /* in LPARAM lParam */
], f => DefWindowProcA = f);

export function DefWindowProcW () {};
DefWindowProcW = createAutoLoader(lib, "DefWindowProcW", LRESULT, [
	HWND,   /* in HWND   hWnd   */
	UINT,   /* in UINT   Msg    */
	WPARAM, /* in WPARAM wParam */
	LPARAM, /* in LPARAM lParam */
], f => DefWindowProcW = f);
export {DefWindowProcW as DefWindowProc};

export function PostQuitMessage () {};
PostQuitMessage = createAutoLoader(lib, "PostQuitMessage", VOID /* VOID */, [
	int, /* in int nExitCode */
], f => PostQuitMessage = f);

// #if STRICT
export function CallWindowProcA () {};
CallWindowProcA = createAutoLoader(lib, "CallWindowProcA", LRESULT /* LRESULT */, [
	WNDPROC, /* in WNDPROC lpPrevWndFunc */
	HWND,    /* in HWND    hWnd          */
	UINT,    /* in UINT    Msg           */
	WPARAM,  /* in WPARAM  wParam        */
	LPARAM,  /* in LPARAM  lParam        */
], f => CallWindowProcA = f);

export function CallWindowProcW () {};
CallWindowProcW = createAutoLoader(lib, "CallWindowProcW", LRESULT /* LRESULT */, [
	WNDPROC, /* in WNDPROC lpPrevWndFunc */
	HWND,    /* in HWND    hWnd          */
	UINT,    /* in UINT    Msg           */
	WPARAM,  /* in WPARAM  wParam        */
	LPARAM,  /* in LPARAM  lParam        */
], f => CallWindowProcW = f);

// #else
// export function CallWindowProcA () {};
// CallWindowProcA = createAutoLoader(lib, "CallWindowProcA", LRESULT /* LRESULT */, [
// 	FARPROC, /* in FARPROC lpPrevWndFunc */
// 	HWND,    /* in HWND    hWnd          */
// 	UINT,    /* in UINT    Msg           */
// 	WPARAM,  /* in WPARAM  wParam        */
// 	LPARAM,  /* in LPARAM  lParam        */
// ], f => CallWindowProcA = f);
//
// export function CallWindowProcW () {};
// CallWindowProcW = createAutoLoader(lib, "CallWindowProcW", LRESULT /* LRESULT */, [
// 	FARPROC, /* in FARPROC lpPrevWndFunc */
// 	HWND,    /* in HWND    hWnd          */
// 	UINT,    /* in UINT    Msg           */
// 	WPARAM,  /* in WPARAM  wParam        */
// 	LPARAM,  /* in LPARAM  lParam        */
// ], f => CallWindowProcW = f);
// #endif

export function InSendMessage () {};
InSendMessage = createAutoLoader(lib, "InSendMessage", BOOL /* BOOL */, [
	/* void */
], f => InSendMessage = f);

export function InSendMessageEx () {};
InSendMessageEx = createAutoLoader(lib, "InSendMessageEx", DWORD /* DWORD */, [
	LPVOID, /* reserved LPVOID lpReserved */
], f => InSendMessageEx = f);

export function GetDoubleClickTime () {};
GetDoubleClickTime = createAutoLoader(lib, "GetDoubleClickTime", UINT /* UINT */, [
	/* void */
], f => GetDoubleClickTime = f);

export function SetDoubleClickTime () {};
SetDoubleClickTime = createAutoLoader(lib, "SetDoubleClickTime", BOOL /* BOOL */, [
	UINT, /* in UINT  */
], f => SetDoubleClickTime = f);

export function RegisterClassA () {};
RegisterClassA = createAutoLoader(lib, "RegisterClassA", ATOM /* ATOM */, [
	pointer(WNDCLASSA), /* in CONST WNDCLASSA * lpWndClass */
], f => RegisterClassA = f);

export function RegisterClassW () {};
RegisterClassW = createAutoLoader(lib, "RegisterClassW", ATOM /* ATOM */, [
	pointer(WNDCLASSW), /* in CONST WNDCLASSW * lpWndClass */
], f => RegisterClassW = f);
export {RegisterClassW as RegisterClass};

export function UnregisterClassA () {};
UnregisterClassA = createAutoLoader(lib, "UnregisterClassA", BOOL /* BOOL */, [
	LPCSTR,    /* in     LPCSTR    lpClassName */
	HINSTANCE, /* in opt HINSTANCE hInstance   */
], f => UnregisterClassA = f);

export function UnregisterClassW () {};
UnregisterClassW = createAutoLoader(lib, "UnregisterClassW", BOOL /* BOOL */, [
	LPCWSTR,   /* in     LPCWSTR   lpClassName */
	HINSTANCE, /* in opt HINSTANCE hInstance   */
], f => UnregisterClassW = f);
export {UnregisterClassW as UnregisterClass};

export function GetClassInfoA () {};
GetClassInfoA = createAutoLoader(lib, "GetClassInfoA", BOOL /* BOOL */, [
	HINSTANCE,        /* in opt HINSTANCE   hInstance   */
	LPCSTR,           /* in     LPCSTR      lpClassName */
	out(LPWNDCLASSA), /* out    LPWNDCLASSA lpWndClass  */
], f => GetClassInfoA = f);

export function GetClassInfoW () {};
GetClassInfoW = createAutoLoader(lib, "GetClassInfoW", BOOL /* BOOL */, [
	HINSTANCE,        /* in opt HINSTANCE   hInstance   */
	LPCWSTR,          /* in     LPCWSTR     lpClassName */
	out(LPWNDCLASSW), /* out    LPWNDCLASSW lpWndClass  */
], f => GetClassInfoW = f);
export {GetClassInfoW as GetClassInfo};

export function RegisterClassExA () {};
RegisterClassExA = createAutoLoader(lib, "RegisterClassExA", ATOM /* ATOM */, [
	pointer(WNDCLASSEXA), /* in CONST WNDCLASSEXA*  */
], f => RegisterClassExA = f);

export function RegisterClassExW () {};
RegisterClassExW = createAutoLoader(lib, "RegisterClassExW", ATOM /* ATOM */, [
	pointer(WNDCLASSEXW), /* in CONST WNDCLASSEXW*  */
], f => RegisterClassExW = f);
export {RegisterClassExW as RegisterClassEx};

export function GetClassInfoExA () {};
GetClassInfoExA = createAutoLoader(lib, "GetClassInfoExA", BOOL /* BOOL */, [
	HINSTANCE,          /* in opt HINSTANCE     hInstance */
	LPCSTR,             /* in     LPCSTR        lpszClass */
	out(LPWNDCLASSEXA), /* out    LPWNDCLASSEXA lpwcx     */
], f => GetClassInfoExA = f);

export function GetClassInfoExW () {};
GetClassInfoExW = createAutoLoader(lib, "GetClassInfoExW", BOOL /* BOOL */, [
	HINSTANCE,          /* in opt HINSTANCE     hInstance */
	LPCWSTR,            /* in     LPCWSTR       lpszClass */
	out(LPWNDCLASSEXW), /* out    LPWNDCLASSEXW lpwcx     */
], f => GetClassInfoExW = f);
export {GetClassInfoExW as GetClassInfoEx};

export function CreateWindowExA () {};
CreateWindowExA = createAutoLoader(lib, "CreateWindowExA", HWND /* HWND */, [
	DWORD,     /* in     DWORD     dwExStyle    */
	LPCSTR,    /* in opt LPCSTR    lpClassName  */
	LPCSTR,    /* in opt LPCSTR    lpWindowName */
	DWORD,     /* in     DWORD     dwStyle      */
	int,       /* in     int       X            */
	int,       /* in     int       Y            */
	int,       /* in     int       nWidth       */
	int,       /* in     int       nHeight      */
	HWND,      /* in opt HWND      hWndParent   */
	HMENU,     /* in opt HMENU     hMenu        */
	HINSTANCE, /* in opt HINSTANCE hInstance    */
	LPVOID,    /* in opt LPVOID    lpParam      */
], f => CreateWindowExA = f);

export function CreateWindowExW () {};
CreateWindowExW = createAutoLoader(lib, "CreateWindowExW", HWND /* HWND */, [
	DWORD,     /* in     DWORD     dwExStyle    */
	LPCWSTR,   /* in opt LPCWSTR   lpClassName  */
	LPCWSTR,   /* in opt LPCWSTR   lpWindowName */
	DWORD,     /* in     DWORD     dwStyle      */
	int,       /* in     int       X            */
	int,       /* in     int       Y            */
	int,       /* in     int       nWidth       */
	int,       /* in     int       nHeight      */
	HWND,      /* in opt HWND      hWndParent   */
	HMENU,     /* in opt HMENU     hMenu        */
	HINSTANCE, /* in opt HINSTANCE hInstance    */
	LPVOID,    /* in opt LPVOID    lpParam      */
], f => CreateWindowExW = f);
export {CreateWindowExW as CreateWindowEx};

export function IsWindow () {};
IsWindow = createAutoLoader(lib, "IsWindow", BOOL /* BOOL */, [
	HWND, /* in opt HWND hWnd */
], f => IsWindow = f);

export function IsMenu () {};
IsMenu = createAutoLoader(lib, "IsMenu", BOOL /* BOOL */, [
	HMENU, /* in HMENU hMenu */
], f => IsMenu = f);

export function IsChild () {};
IsChild = createAutoLoader(lib, "IsChild", BOOL /* BOOL */, [
	HWND, /* in HWND hWndParent */
	HWND, /* in HWND hWnd       */
], f => IsChild = f);

export function DestroyWindow () {};
DestroyWindow = createAutoLoader(lib, "DestroyWindow", BOOL /* BOOL */, [
	HWND, /* in HWND hWnd */
], f => DestroyWindow = f);

export function ShowWindow () {};
ShowWindow = createAutoLoader(lib, "ShowWindow", BOOL /* BOOL */, [
	HWND, /* in HWND hWnd     */
	int,  /* in int  nCmdShow */
], f => ShowWindow = f);

export function AnimateWindow () {};
AnimateWindow = createAutoLoader(lib, "AnimateWindow", BOOL /* BOOL */, [
	HWND,  /* in HWND  hWnd    */
	DWORD, /* in DWORD dwTime  */
	DWORD, /* in DWORD dwFlags */
], f => AnimateWindow = f);

export function UpdateLayeredWindow () {};
UpdateLayeredWindow = createAutoLoader(lib, "UpdateLayeredWindow", BOOL /* BOOL */, [
	HWND,                   /* in     HWND           hWnd    */
	HDC,                    /* in opt HDC            hdcDst  */
	pointer(POINT),         /* in opt POINT*         pptDst  */
	pointer(SIZE),          /* in opt SIZE*          psize   */
	HDC,                    /* in opt HDC            hdcSrc  */
	pointer(POINT),         /* in opt POINT*         pptSrc  */
	COLORREF,               /* in     COLORREF       crKey   */
	pointer(BLENDFUNCTION), /* in opt BLENDFUNCTION* pblend  */
	DWORD,                  /* in     DWORD          dwFlags */
], f => UpdateLayeredWindow = f);

export function UpdateLayeredWindowIndirect () {};
UpdateLayeredWindowIndirect = createAutoLoader(lib, "UpdateLayeredWindowIndirect", BOOL /* BOOL */, [
	HWND,                             /* in HWND                           hWnd     */
	pointer(UPDATELAYEREDWINDOWINFO), /* in const UPDATELAYEREDWINDOWINFO* pULWInfo */
], f => UpdateLayeredWindowIndirect = f);

export function GetLayeredWindowAttributes () {};
GetLayeredWindowAttributes = createAutoLoader(lib, "GetLayeredWindowAttributes", BOOL /* BOOL */, [
	HWND,                   /* in      HWND      hwnd     */
	out(pointer(COLORREF)), /* out opt COLORREF* pcrKey   */
	out(pointer(BYTE)),     /* out opt BYTE*     pbAlpha  */
	out(pointer(DWORD)),    /* out opt DWORD*    pdwFlags */
], f => GetLayeredWindowAttributes = f);

export function PrintWindow () {};
PrintWindow = createAutoLoader(lib, "PrintWindow", BOOL /* BOOL */, [
	HWND, /* in HWND hwnd   */
	HDC,  /* in HDC  hdcBlt */
	UINT, /* in UINT nFlags */
], f => PrintWindow = f);

export function SetLayeredWindowAttributes () {};
SetLayeredWindowAttributes = createAutoLoader(lib, "SetLayeredWindowAttributes", BOOL /* BOOL */, [
	HWND,     /* in HWND     hwnd    */
	COLORREF, /* in COLORREF crKey   */
	BYTE,     /* in BYTE     bAlpha  */
	DWORD,    /* in DWORD    dwFlags */
], f => SetLayeredWindowAttributes = f);

export function ShowWindowAsync () {};
ShowWindowAsync = createAutoLoader(lib, "ShowWindowAsync", BOOL /* BOOL */, [
	HWND, /* in HWND hWnd     */
	int,  /* in int  nCmdShow */
], f => ShowWindowAsync = f);

export function FlashWindow () {};
FlashWindow = createAutoLoader(lib, "FlashWindow", BOOL /* BOOL */, [
	HWND, /* in HWND hWnd    */
	BOOL, /* in BOOL bInvert */
], f => FlashWindow = f);

export function FlashWindowEx () {};
FlashWindowEx = createAutoLoader(lib, "FlashWindowEx", BOOL /* BOOL */, [
	PFLASHWINFO, /* in PFLASHWINFO pfwi */
], f => FlashWindowEx = f);

export function ShowOwnedPopups () {};
ShowOwnedPopups = createAutoLoader(lib, "ShowOwnedPopups", BOOL /* BOOL */, [
	HWND, /* in HWND hWnd  */
	BOOL, /* in BOOL fShow */
], f => ShowOwnedPopups = f);

export function OpenIcon () {};
OpenIcon = createAutoLoader(lib, "OpenIcon", BOOL /* BOOL */, [
	HWND, /* in HWND hWnd */
], f => OpenIcon = f);

export function CloseWindow () {};
CloseWindow = createAutoLoader(lib, "CloseWindow", BOOL /* BOOL */, [
	HWND, /* in HWND hWnd */
], f => CloseWindow = f);

export function MoveWindow () {};
MoveWindow = createAutoLoader(lib, "MoveWindow", BOOL /* BOOL */, [
	HWND, /* in HWND hWnd     */
	int,  /* in int  X        */
	int,  /* in int  Y        */
	int,  /* in int  nWidth   */
	int,  /* in int  nHeight  */
	BOOL, /* in BOOL bRepaint */
], f => MoveWindow = f);

export function SetWindowPos () {};
SetWindowPos = createAutoLoader(lib, "SetWindowPos", BOOL /* BOOL */, [
	HWND, /* in     HWND hWnd            */
	HWND, /* in opt HWND hWndInsertAfter */
	int,  /* in     int  X               */
	int,  /* in     int  Y               */
	int,  /* in     int  cx              */
	int,  /* in     int  cy              */
	UINT, /* in     UINT uFlags          */
], f => SetWindowPos = f);

export function GetWindowPlacement () {};
GetWindowPlacement = createAutoLoader(lib, "GetWindowPlacement", BOOL /* BOOL */, [
	HWND,                            /* in     HWND              hWnd    */
	inout(pointer(WINDOWPLACEMENT)), /* in out WINDOWPLACEMENT * lpwndpl */
], f => GetWindowPlacement = f);

export function SetWindowPlacement () {};
SetWindowPlacement = createAutoLoader(lib, "SetWindowPlacement", BOOL /* BOOL */, [
	HWND,                     /* in HWND                    hWnd    */
	pointer(WINDOWPLACEMENT), /* in CONST WINDOWPLACEMENT * lpwndpl */
], f => SetWindowPlacement = f);

export function GetWindowDisplayAffinity () {};
GetWindowDisplayAffinity = createAutoLoader(lib, "GetWindowDisplayAffinity", BOOL /* BOOL */, [
	HWND,                /* in  HWND   hWnd        */
	out(pointer(DWORD)), /* out DWORD* pdwAffinity */
], f => GetWindowDisplayAffinity = f);

export function SetWindowDisplayAffinity () {};
SetWindowDisplayAffinity = createAutoLoader(lib, "SetWindowDisplayAffinity", BOOL /* BOOL */, [
	HWND,  /* in HWND  hWnd       */
	DWORD, /* in DWORD dwAffinity */
], f => SetWindowDisplayAffinity = f);

export function BeginDeferWindowPos () {};
BeginDeferWindowPos = createAutoLoader(lib, "BeginDeferWindowPos", HDWP /* HDWP */, [
	int, /* in int nNumWindows */
], f => BeginDeferWindowPos = f);

export function DeferWindowPos () {};
DeferWindowPos = createAutoLoader(lib, "DeferWindowPos", HDWP /* HDWP */, [
	HDWP, /* in     HDWP hWinPosInfo     */
	HWND, /* in     HWND hWnd            */
	HWND, /* in opt HWND hWndInsertAfter */
	int,  /* in     int  x               */
	int,  /* in     int  y               */
	int,  /* in     int  cx              */
	int,  /* in     int  cy              */
	UINT, /* in     UINT uFlags          */
], f => DeferWindowPos = f);

export function EndDeferWindowPos () {};
EndDeferWindowPos = createAutoLoader(lib, "EndDeferWindowPos", BOOL /* BOOL */, [
	HDWP, /* in HDWP hWinPosInfo */
], f => EndDeferWindowPos = f);

export function IsWindowVisible () {};
IsWindowVisible = createAutoLoader(lib, "IsWindowVisible", BOOL /* BOOL */, [
	HWND, /* in HWND hWnd */
], f => IsWindowVisible = f);

export function IsIconic () {};
IsIconic = createAutoLoader(lib, "IsIconic", BOOL /* BOOL */, [
	HWND, /* in HWND hWnd */
], f => IsIconic = f);

export function AnyPopup () {};
AnyPopup = createAutoLoader(lib, "AnyPopup", BOOL /* BOOL */, [
	/* void */
], f => AnyPopup = f);

export function BringWindowToTop () {};
BringWindowToTop = createAutoLoader(lib, "BringWindowToTop", BOOL /* BOOL */, [
	HWND, /* in HWND hWnd */
], f => BringWindowToTop = f);

export function IsZoomed () {};
IsZoomed = createAutoLoader(lib, "IsZoomed", BOOL /* BOOL */, [
	HWND, /* in HWND hWnd */
], f => IsZoomed = f);

export function CreateDialogParamA () {};
CreateDialogParamA = createAutoLoader(lib, "CreateDialogParamA", HWND /* HWND */, [
	HINSTANCE, /* in opt HINSTANCE hInstance      */
	LPCSTR,    /* in     LPCSTR    lpTemplateName */
	HWND,      /* in opt HWND      hWndParent     */
	DLGPROC,   /* in opt DLGPROC   lpDialogFunc   */
	LPARAM,    /* in     LPARAM    dwInitParam    */
], f => CreateDialogParamA = f);

export function CreateDialogParamW () {};
CreateDialogParamW = createAutoLoader(lib, "CreateDialogParamW", HWND /* HWND */, [
	HINSTANCE, /* in opt HINSTANCE hInstance      */
	LPCWSTR,   /* in     LPCWSTR   lpTemplateName */
	HWND,      /* in opt HWND      hWndParent     */
	DLGPROC,   /* in opt DLGPROC   lpDialogFunc   */
	LPARAM,    /* in     LPARAM    dwInitParam    */
], f => CreateDialogParamW = f);
export {CreateDialogParamW as CreateDialogParam};

export function CreateDialogIndirectParamA () {};
CreateDialogIndirectParamA = createAutoLoader(lib, "CreateDialogIndirectParamA", HWND /* HWND */, [
	HINSTANCE,       /* in opt HINSTANCE       hInstance    */
	LPCDLGTEMPLATEA, /* in     LPCDLGTEMPLATEA lpTemplate   */
	HWND,            /* in opt HWND            hWndParent   */
	DLGPROC,         /* in opt DLGPROC         lpDialogFunc */
	LPARAM,          /* in     LPARAM          dwInitParam  */
], f => CreateDialogIndirectParamA = f);

export function CreateDialogIndirectParamW () {};
CreateDialogIndirectParamW = createAutoLoader(lib, "CreateDialogIndirectParamW", HWND /* HWND */, [
	HINSTANCE,       /* in opt HINSTANCE       hInstance    */
	LPCDLGTEMPLATEW, /* in     LPCDLGTEMPLATEW lpTemplate   */
	HWND,            /* in opt HWND            hWndParent   */
	DLGPROC,         /* in opt DLGPROC         lpDialogFunc */
	LPARAM,          /* in     LPARAM          dwInitParam  */
], f => CreateDialogIndirectParamW = f);
export {CreateDialogIndirectParamW as CreateDialogIndirectParam};

export function DialogBoxParamA () {};
DialogBoxParamA = createAutoLoader(lib, "DialogBoxParamA", INT_PTR /* INT_PTR */, [
	HINSTANCE, /* in opt HINSTANCE hInstance      */
	LPCSTR,    /* in     LPCSTR    lpTemplateName */
	HWND,      /* in opt HWND      hWndParent     */
	DLGPROC,   /* in opt DLGPROC   lpDialogFunc   */
	LPARAM,    /* in     LPARAM    dwInitParam    */
], f => DialogBoxParamA = f);

export function DialogBoxParamW () {};
DialogBoxParamW = createAutoLoader(lib, "DialogBoxParamW", INT_PTR /* INT_PTR */, [
	HINSTANCE, /* in opt HINSTANCE hInstance      */
	LPCWSTR,   /* in     LPCWSTR   lpTemplateName */
	HWND,      /* in opt HWND      hWndParent     */
	DLGPROC,   /* in opt DLGPROC   lpDialogFunc   */
	LPARAM,    /* in     LPARAM    dwInitParam    */
], f => DialogBoxParamW = f);
export {DialogBoxParamW as DialogBoxParam};

export function DialogBoxIndirectParamA () {};
DialogBoxIndirectParamA = createAutoLoader(lib, "DialogBoxIndirectParamA", INT_PTR /* INT_PTR */, [
	HINSTANCE,       /* in opt HINSTANCE       hInstance       */
	LPCDLGTEMPLATEA, /* in     LPCDLGTEMPLATEA hDialogTemplate */
	HWND,            /* in opt HWND            hWndParent      */
	DLGPROC,         /* in opt DLGPROC         lpDialogFunc    */
	LPARAM,          /* in     LPARAM          dwInitParam     */
], f => DialogBoxIndirectParamA = f);

export function DialogBoxIndirectParamW () {};
DialogBoxIndirectParamW = createAutoLoader(lib, "DialogBoxIndirectParamW", INT_PTR /* INT_PTR */, [
	HINSTANCE,       /* in opt HINSTANCE       hInstance       */
	LPCDLGTEMPLATEW, /* in     LPCDLGTEMPLATEW hDialogTemplate */
	HWND,            /* in opt HWND            hWndParent      */
	DLGPROC,         /* in opt DLGPROC         lpDialogFunc    */
	LPARAM,          /* in     LPARAM          dwInitParam     */
], f => DialogBoxIndirectParamW = f);
export {DialogBoxIndirectParamW as DialogBoxIndirectParam};

export function EndDialog () {};
EndDialog = createAutoLoader(lib, "EndDialog", BOOL /* BOOL */, [
	HWND,    /* in HWND    hDlg    */
	INT_PTR, /* in INT_PTR nResult */
], f => EndDialog = f);

export function GetDlgItem () {};
GetDlgItem = createAutoLoader(lib, "GetDlgItem", HWND /* HWND */, [
	HWND, /* in opt HWND hDlg       */
	int,  /* in     int  nIDDlgItem */
], f => GetDlgItem = f);

export function SetDlgItemInt () {};
SetDlgItemInt = createAutoLoader(lib, "SetDlgItemInt", BOOL /* BOOL */, [
	HWND, /* in HWND hDlg       */
	int,  /* in int  nIDDlgItem */
	UINT, /* in UINT uValue     */
	BOOL, /* in BOOL bSigned    */
], f => SetDlgItemInt = f);

export function GetDlgItemInt () {};
GetDlgItemInt = createAutoLoader(lib, "GetDlgItemInt", UINT /* UINT */, [
	HWND,               /* in      HWND   hDlg         */
	int,                /* in      int    nIDDlgItem   */
	out(pointer(BOOL)), /* out opt BOOL * lpTranslated */
	BOOL,               /* in      BOOL   bSigned      */
], f => GetDlgItemInt = f);

export function SetDlgItemTextA () {};
SetDlgItemTextA = createAutoLoader(lib, "SetDlgItemTextA", BOOL /* BOOL */, [
	HWND,   /* in HWND   hDlg       */
	int,    /* in int    nIDDlgItem */
	LPCSTR, /* in LPCSTR lpString   */
], f => SetDlgItemTextA = f);

export function SetDlgItemTextW () {};
SetDlgItemTextW = createAutoLoader(lib, "SetDlgItemTextW", BOOL /* BOOL */, [
	HWND,    /* in HWND    hDlg       */
	int,     /* in int     nIDDlgItem */
	LPCWSTR, /* in LPCWSTR lpString   */
], f => SetDlgItemTextW = f);
export {SetDlgItemTextW as SetDlgItemText};

export function GetDlgItemTextA () {};
GetDlgItemTextA = createAutoLoader(lib, "GetDlgItemTextA", UINT /* UINT */, [
	HWND,  /* in HWND  hDlg       */
	int,   /* in int   nIDDlgItem */
	LPSTR, /*    LPSTR lpString   */
	int,   /* in int   cchMax     */
], f => GetDlgItemTextA = f);

export function GetDlgItemTextW () {};
GetDlgItemTextW = createAutoLoader(lib, "GetDlgItemTextW", UINT /* UINT */, [
	HWND,   /* in HWND   hDlg       */
	int,    /* in int    nIDDlgItem */
	LPWSTR, /*    LPWSTR lpString   */
	int,    /* in int    cchMax     */
], f => GetDlgItemTextW = f);
export {GetDlgItemTextW as GetDlgItemText};

export function CheckDlgButton () {};
CheckDlgButton = createAutoLoader(lib, "CheckDlgButton", BOOL /* BOOL */, [
	HWND, /* in HWND hDlg      */
	int,  /* in int  nIDButton */
	UINT, /* in UINT uCheck    */
], f => CheckDlgButton = f);

export function CheckRadioButton () {};
CheckRadioButton = createAutoLoader(lib, "CheckRadioButton", BOOL /* BOOL */, [
	HWND, /* in HWND hDlg           */
	int,  /* in int  nIDFirstButton */
	int,  /* in int  nIDLastButton  */
	int,  /* in int  nIDCheckButton */
], f => CheckRadioButton = f);

export function IsDlgButtonChecked () {};
IsDlgButtonChecked = createAutoLoader(lib, "IsDlgButtonChecked", UINT /* UINT */, [
	HWND, /* in HWND hDlg      */
	int,  /* in int  nIDButton */
], f => IsDlgButtonChecked = f);

export function SendDlgItemMessageA () {};
SendDlgItemMessageA = createAutoLoader(lib, "SendDlgItemMessageA", LRESULT /* LRESULT */, [
	HWND,   /* in HWND   hDlg       */
	int,    /* in int    nIDDlgItem */
	UINT,   /* in UINT   Msg        */
	WPARAM, /* in WPARAM wParam     */
	LPARAM, /* in LPARAM lParam     */
], f => SendDlgItemMessageA = f);

export function SendDlgItemMessageW () {};
SendDlgItemMessageW = createAutoLoader(lib, "SendDlgItemMessageW", LRESULT /* LRESULT */, [
	HWND,   /* in HWND   hDlg       */
	int,    /* in int    nIDDlgItem */
	UINT,   /* in UINT   Msg        */
	WPARAM, /* in WPARAM wParam     */
	LPARAM, /* in LPARAM lParam     */
], f => SendDlgItemMessageW = f);
export {SendDlgItemMessageW as SendDlgItemMessage};

export function GetNextDlgGroupItem () {};
GetNextDlgGroupItem = createAutoLoader(lib, "GetNextDlgGroupItem", HWND /* HWND */, [
	HWND, /* in     HWND hDlg      */
	HWND, /* in opt HWND hCtl      */
	BOOL, /* in     BOOL bPrevious */
], f => GetNextDlgGroupItem = f);

export function GetNextDlgTabItem () {};
GetNextDlgTabItem = createAutoLoader(lib, "GetNextDlgTabItem", HWND /* HWND */, [
	HWND, /* in     HWND hDlg      */
	HWND, /* in opt HWND hCtl      */
	BOOL, /* in     BOOL bPrevious */
], f => GetNextDlgTabItem = f);

export function GetDlgCtrlID () {};
GetDlgCtrlID = createAutoLoader(lib, "GetDlgCtrlID", int /* int */, [
	HWND, /* in HWND hWnd */
], f => GetDlgCtrlID = f);

export function GetDialogBaseUnits () {};
GetDialogBaseUnits = createAutoLoader(lib, "GetDialogBaseUnits", long /* long */, [
	/* void */
], f => GetDialogBaseUnits = f);

export function SetDialogControlDpiChangeBehavior () {};
SetDialogControlDpiChangeBehavior = createAutoLoader(lib, "SetDialogControlDpiChangeBehavior", BOOL /* BOOL */, [
	HWND,                                /* in HWND                                hWnd   */
	DIALOG_CONTROL_DPI_CHANGE_BEHAVIORS, /* in DIALOG_CONTROL_DPI_CHANGE_BEHAVIORS mask   */
	DIALOG_CONTROL_DPI_CHANGE_BEHAVIORS, /* in DIALOG_CONTROL_DPI_CHANGE_BEHAVIORS values */
], f => SetDialogControlDpiChangeBehavior = f);

export function GetDialogControlDpiChangeBehavior () {};
GetDialogControlDpiChangeBehavior = createAutoLoader(lib, "GetDialogControlDpiChangeBehavior", DIALOG_CONTROL_DPI_CHANGE_BEHAVIORS /* DIALOG_CONTROL_DPI_CHANGE_BEHAVIORS */, [
	HWND, /* in HWND hWnd */
], f => GetDialogControlDpiChangeBehavior = f);

export function SetDialogDpiChangeBehavior () {};
SetDialogDpiChangeBehavior = createAutoLoader(lib, "SetDialogDpiChangeBehavior", BOOL /* BOOL */, [
	HWND,                        /* in HWND                        hDlg   */
	DIALOG_DPI_CHANGE_BEHAVIORS, /* in DIALOG_DPI_CHANGE_BEHAVIORS mask   */
	DIALOG_DPI_CHANGE_BEHAVIORS, /* in DIALOG_DPI_CHANGE_BEHAVIORS values */
], f => SetDialogDpiChangeBehavior = f);

export function GetDialogDpiChangeBehavior () {};
GetDialogDpiChangeBehavior = createAutoLoader(lib, "GetDialogDpiChangeBehavior", DIALOG_DPI_CHANGE_BEHAVIORS /* DIALOG_DPI_CHANGE_BEHAVIORS */, [
	HWND, /* in HWND hDlg */
], f => GetDialogDpiChangeBehavior = f);

export function CallMsgFilterA () {};
CallMsgFilterA = createAutoLoader(lib, "CallMsgFilterA", BOOL /* BOOL */, [
	LPMSG, /* in LPMSG lpMsg */
	int,   /* in int   nCode */
], f => CallMsgFilterA = f);

export function CallMsgFilterW () {};
CallMsgFilterW = createAutoLoader(lib, "CallMsgFilterW", BOOL /* BOOL */, [
	LPMSG, /* in LPMSG lpMsg */
	int,   /* in int   nCode */
], f => CallMsgFilterW = f);
export {CallMsgFilterW as CallMsgFilter};

export function OpenClipboard () {};
OpenClipboard = createAutoLoader(lib, "OpenClipboard", BOOL /* BOOL */, [
	HWND, /* in opt HWND hWndNewOwner */
], f => OpenClipboard = f);

export function CloseClipboard () {};
CloseClipboard = createAutoLoader(lib, "CloseClipboard", BOOL /* BOOL */, [
	/* void */
], f => CloseClipboard = f);

export function GetClipboardSequenceNumber () {};
GetClipboardSequenceNumber = createAutoLoader(lib, "GetClipboardSequenceNumber", DWORD /* DWORD */, [
	/* void */
], f => GetClipboardSequenceNumber = f);

export function GetClipboardOwner () {};
GetClipboardOwner = createAutoLoader(lib, "GetClipboardOwner", HWND /* HWND */, [
	/* void */
], f => GetClipboardOwner = f);

export function SetClipboardViewer () {};
SetClipboardViewer = createAutoLoader(lib, "SetClipboardViewer", HWND /* HWND */, [
	HWND, /* in HWND hWndNewViewer */
], f => SetClipboardViewer = f);

export function GetClipboardViewer () {};
GetClipboardViewer = createAutoLoader(lib, "GetClipboardViewer", HWND /* HWND */, [
	/* void */
], f => GetClipboardViewer = f);

export function ChangeClipboardChain () {};
ChangeClipboardChain = createAutoLoader(lib, "ChangeClipboardChain", BOOL /* BOOL */, [
	HWND, /* in HWND hWndRemove  */
	HWND, /* in HWND hWndNewNext */
], f => ChangeClipboardChain = f);

export function SetClipboardData () {};
SetClipboardData = createAutoLoader(lib, "SetClipboardData", HANDLE /* HANDLE */, [
	UINT,   /* in     UINT   uFormat */
	HANDLE, /* in opt HANDLE hMem    */
], f => SetClipboardData = f);

export function GetClipboardData () {};
GetClipboardData = createAutoLoader(lib, "GetClipboardData", HANDLE /* HANDLE */, [
	UINT, /* in UINT uFormat */
], f => GetClipboardData = f);

export function RegisterClipboardFormatA () {};
RegisterClipboardFormatA = createAutoLoader(lib, "RegisterClipboardFormatA", UINT /* UINT */, [
	LPCSTR, /* in LPCSTR lpszFormat */
], f => RegisterClipboardFormatA = f);

export function RegisterClipboardFormatW () {};
RegisterClipboardFormatW = createAutoLoader(lib, "RegisterClipboardFormatW", UINT /* UINT */, [
	LPCWSTR, /* in LPCWSTR lpszFormat */
], f => RegisterClipboardFormatW = f);
export {RegisterClipboardFormatW as RegisterClipboardFormat};

export function CountClipboardFormats () {};
CountClipboardFormats = createAutoLoader(lib, "CountClipboardFormats", int /* int */, [
	/* void */
], f => CountClipboardFormats = f);

export function EnumClipboardFormats () {};
EnumClipboardFormats = createAutoLoader(lib, "EnumClipboardFormats", UINT /* UINT */, [
	UINT, /* in UINT format */
], f => EnumClipboardFormats = f);

export function GetClipboardFormatNameA () {};
GetClipboardFormatNameA = createAutoLoader(lib, "GetClipboardFormatNameA", int /* int */, [
	UINT,  /* in UINT  format         */
	LPSTR, /*    LPSTR lpszFormatName */
	int,   /* in int   cchMaxCount    */
], f => GetClipboardFormatNameA = f);

export function GetClipboardFormatNameW () {};
GetClipboardFormatNameW = createAutoLoader(lib, "GetClipboardFormatNameW", int /* int */, [
	UINT,   /* in UINT   format         */
	LPWSTR, /*    LPWSTR lpszFormatName */
	int,    /* in int    cchMaxCount    */
], f => GetClipboardFormatNameW = f);
export {GetClipboardFormatNameW as GetClipboardFormatName};

export function EmptyClipboard () {};
EmptyClipboard = createAutoLoader(lib, "EmptyClipboard", BOOL /* BOOL */, [
	/* void */
], f => EmptyClipboard = f);

export function IsClipboardFormatAvailable () {};
IsClipboardFormatAvailable = createAutoLoader(lib, "IsClipboardFormatAvailable", BOOL /* BOOL */, [
	UINT, /* in UINT format */
], f => IsClipboardFormatAvailable = f);

export function GetPriorityClipboardFormat () {};
GetPriorityClipboardFormat = createAutoLoader(lib, "GetPriorityClipboardFormat", int /* int */, [
	pointer(UINT), /*    UINT * paFormatPriorityList */
	int,           /* in int    cFormats             */
], f => GetPriorityClipboardFormat = f);

export function GetOpenClipboardWindow () {};
GetOpenClipboardWindow = createAutoLoader(lib, "GetOpenClipboardWindow", HWND /* HWND */, [
	/* void */
], f => GetOpenClipboardWindow = f);

export function AddClipboardFormatListener () {};
AddClipboardFormatListener = createAutoLoader(lib, "AddClipboardFormatListener", BOOL /* BOOL */, [
	HWND, /* in HWND hwnd */
], f => AddClipboardFormatListener = f);

export function RemoveClipboardFormatListener () {};
RemoveClipboardFormatListener = createAutoLoader(lib, "RemoveClipboardFormatListener", BOOL /* BOOL */, [
	HWND, /* in HWND hwnd */
], f => RemoveClipboardFormatListener = f);

export function GetUpdatedClipboardFormats () {};
GetUpdatedClipboardFormats = createAutoLoader(lib, "GetUpdatedClipboardFormats", BOOL /* BOOL */, [
	PUINT,      /*     PUINT lpuiFormats  */
	UINT,       /* in  UINT  cFormats     */
	out(PUINT), /* out PUINT pcFormatsOut */
], f => GetUpdatedClipboardFormats = f);

export function CharToOemBuffA () {};
CharToOemBuffA = createAutoLoader(lib, "CharToOemBuffA", BOOL /* BOOL */, [
	LPCSTR, /* in LPCSTR lpszSrc      */
	LPSTR,  /*    LPSTR  lpszDst      */
	DWORD,  /* in DWORD  cchDstLength */
], f => CharToOemBuffA = f);

export function CharToOemBuffW () {};
CharToOemBuffW = createAutoLoader(lib, "CharToOemBuffW", BOOL /* BOOL */, [
	LPCWSTR, /* in LPCWSTR lpszSrc      */
	LPSTR,   /*    LPSTR   lpszDst      */
	DWORD,   /* in DWORD   cchDstLength */
], f => CharToOemBuffW = f);
export {CharToOemBuffW as CharToOemBuff};

export function OemToCharBuffA () {};
OemToCharBuffA = createAutoLoader(lib, "OemToCharBuffA", BOOL /* BOOL */, [
	LPCSTR, /* in LPCSTR lpszSrc      */
	LPSTR,  /*    LPSTR  lpszDst      */
	DWORD,  /* in DWORD  cchDstLength */
], f => OemToCharBuffA = f);

export function OemToCharBuffW () {};
OemToCharBuffW = createAutoLoader(lib, "OemToCharBuffW", BOOL /* BOOL */, [
	LPCSTR, /* in LPCSTR lpszSrc      */
	LPWSTR, /*    LPWSTR lpszDst      */
	DWORD,  /* in DWORD  cchDstLength */
], f => OemToCharBuffW = f);
export {OemToCharBuffW as OemToCharBuff};

export function CharUpperA () {};
CharUpperA = createAutoLoader(lib, "CharUpperA", LPSTR /* LPSTR */, [
	inout(LPSTR), /* in out LPSTR lpsz */
], f => CharUpperA = f);

export function CharUpperW () {};
CharUpperW = createAutoLoader(lib, "CharUpperW", LPWSTR /* LPWSTR */, [
	inout(LPWSTR), /* in out LPWSTR lpsz */
], f => CharUpperW = f);
export {CharUpperW as CharUpper};

export function CharLowerA () {};
CharLowerA = createAutoLoader(lib, "CharLowerA", LPSTR /* LPSTR */, [
	inout(LPSTR), /* in out LPSTR lpsz */
], f => CharLowerA = f);

export function CharLowerW () {};
CharLowerW = createAutoLoader(lib, "CharLowerW", LPWSTR /* LPWSTR */, [
	inout(LPWSTR), /* in out LPWSTR lpsz */
], f => CharLowerW = f);
export {CharLowerW as CharLower};

export function CharNextA () {};
CharNextA = createAutoLoader(lib, "CharNextA", LPSTR /* LPSTR */, [
	LPCSTR, /* in LPCSTR lpsz */
], f => CharNextA = f);

export function CharNextW () {};
CharNextW = createAutoLoader(lib, "CharNextW", LPWSTR /* LPWSTR */, [
	LPCWSTR, /* in LPCWSTR lpsz */
], f => CharNextW = f);
export {CharNextW as CharNext};

export function CharPrevA () {};
CharPrevA = createAutoLoader(lib, "CharPrevA", LPSTR /* LPSTR */, [
	LPCSTR, /* in LPCSTR lpszStart   */
	LPCSTR, /* in LPCSTR lpszCurrent */
], f => CharPrevA = f);

export function CharPrevW () {};
CharPrevW = createAutoLoader(lib, "CharPrevW", LPWSTR /* LPWSTR */, [
	LPCWSTR, /* in LPCWSTR lpszStart   */
	LPCWSTR, /* in LPCWSTR lpszCurrent */
], f => CharPrevW = f);
export {CharPrevW as CharPrev};

export function CharNextExA () {};
CharNextExA = createAutoLoader(lib, "CharNextExA", LPSTR /* LPSTR */, [
	WORD,   /* in WORD   CodePage      */
	LPCSTR, /* in LPCSTR lpCurrentChar */
	DWORD,  /* in DWORD  dwFlags       */
], f => CharNextExA = f);

export function CharPrevExA () {};
CharPrevExA = createAutoLoader(lib, "CharPrevExA", LPSTR /* LPSTR */, [
	WORD,   /* in WORD   CodePage      */
	LPCSTR, /* in LPCSTR lpStart       */
	LPCSTR, /* in LPCSTR lpCurrentChar */
	DWORD,  /* in DWORD  dwFlags       */
], f => CharPrevExA = f);

export function IsCharAlphaA () {};
IsCharAlphaA = createAutoLoader(lib, "IsCharAlphaA", BOOL /* BOOL */, [
	CHAR, /* in CHAR ch */
], f => IsCharAlphaA = f);

export function IsCharAlphaW () {};
IsCharAlphaW = createAutoLoader(lib, "IsCharAlphaW", BOOL /* BOOL */, [
	WCHAR, /* in WCHAR ch */
], f => IsCharAlphaW = f);
export {IsCharAlphaW as IsCharAlpha};

export function IsCharAlphaNumericA () {};
IsCharAlphaNumericA = createAutoLoader(lib, "IsCharAlphaNumericA", BOOL /* BOOL */, [
	CHAR, /* in CHAR ch */
], f => IsCharAlphaNumericA = f);

export function IsCharAlphaNumericW () {};
IsCharAlphaNumericW = createAutoLoader(lib, "IsCharAlphaNumericW", BOOL /* BOOL */, [
	WCHAR, /* in WCHAR ch */
], f => IsCharAlphaNumericW = f);
export {IsCharAlphaNumericW as IsCharAlphaNumeric};

export function IsCharUpperA () {};
IsCharUpperA = createAutoLoader(lib, "IsCharUpperA", BOOL /* BOOL */, [
	CHAR, /* in CHAR ch */
], f => IsCharUpperA = f);

export function IsCharUpperW () {};
IsCharUpperW = createAutoLoader(lib, "IsCharUpperW", BOOL /* BOOL */, [
	WCHAR, /* in WCHAR ch */
], f => IsCharUpperW = f);
export {IsCharUpperW as IsCharUpper};

export function IsCharLowerA () {};
IsCharLowerA = createAutoLoader(lib, "IsCharLowerA", BOOL /* BOOL */, [
	CHAR, /* in CHAR ch */
], f => IsCharLowerA = f);

export function IsCharLowerW () {};
IsCharLowerW = createAutoLoader(lib, "IsCharLowerW", BOOL /* BOOL */, [
	WCHAR, /* in WCHAR ch */
], f => IsCharLowerW = f);
export {IsCharLowerW as IsCharLower};

export function SetFocus () {};
SetFocus = createAutoLoader(lib, "SetFocus", HWND /* HWND */, [
	HWND, /* in opt HWND hWnd */
], f => SetFocus = f);

export function GetActiveWindow () {};
GetActiveWindow = createAutoLoader(lib, "GetActiveWindow", HWND /* HWND */, [
	/* void */
], f => GetActiveWindow = f);

export function GetFocus () {};
GetFocus = createAutoLoader(lib, "GetFocus", HWND /* HWND */, [
	/* void */
], f => GetFocus = f);

export function GetKBCodePage () {};
GetKBCodePage = createAutoLoader(lib, "GetKBCodePage", UINT /* UINT */, [
	/* void */
], f => GetKBCodePage = f);

export function GetKeyState () {};
GetKeyState = createAutoLoader(lib, "GetKeyState", SHORT /* SHORT */, [
	int, /* in int nVirtKey */
], f => GetKeyState = f);

export function GetAsyncKeyState () {};
GetAsyncKeyState = createAutoLoader(lib, "GetAsyncKeyState", SHORT /* SHORT */, [
	int, /* in int vKey */
], f => GetAsyncKeyState = f);

export function GetKeyboardState () {};
GetKeyboardState = createAutoLoader(lib, "GetKeyboardState", BOOL /* BOOL */, [
	PBYTE, /*  PBYTE lpKeyState */
], f => GetKeyboardState = f);

export function SetKeyboardState () {};
SetKeyboardState = createAutoLoader(lib, "SetKeyboardState", BOOL /* BOOL */, [
	LPBYTE, /*  LPBYTE lpKeyState */
], f => SetKeyboardState = f);

export function GetKeyNameTextA () {};
GetKeyNameTextA = createAutoLoader(lib, "GetKeyNameTextA", int /* int */, [
	LONG,  /* in LONG  lParam   */
	LPSTR, /*    LPSTR lpString */
	int,   /* in int   cchSize  */
], f => GetKeyNameTextA = f);

export function GetKeyNameTextW () {};
GetKeyNameTextW = createAutoLoader(lib, "GetKeyNameTextW", int /* int */, [
	LONG,   /* in LONG   lParam   */
	LPWSTR, /*    LPWSTR lpString */
	int,    /* in int    cchSize  */
], f => GetKeyNameTextW = f);
export {GetKeyNameTextW as GetKeyNameText};

export function GetKeyboardType () {};
GetKeyboardType = createAutoLoader(lib, "GetKeyboardType", int /* int */, [
	int, /* in int nTypeFlag */
], f => GetKeyboardType = f);

export function ToUnicode () {};
ToUnicode = createAutoLoader(lib, "ToUnicode", int /* int */, [
	UINT,          /* in UINT         wVirtKey   */
	UINT,          /* in UINT         wScanCode  */
	pointer(BYTE), /*    CONST BYTE * lpKeyState */
	LPWSTR,        /*    LPWSTR       pwszBuff   */
	int,           /* in int          cchBuff    */
	UINT,          /* in UINT         wFlags     */
], f => ToUnicode = f);

export function OemKeyScan () {};
OemKeyScan = createAutoLoader(lib, "OemKeyScan", DWORD /* DWORD */, [
	WORD, /* in WORD wOemChar */
], f => OemKeyScan = f);

export function VkKeyScanA () {};
VkKeyScanA = createAutoLoader(lib, "VkKeyScanA", SHORT /* SHORT */, [
	CHAR, /* in CHAR ch */
], f => VkKeyScanA = f);

export function VkKeyScanW () {};
VkKeyScanW = createAutoLoader(lib, "VkKeyScanW", SHORT /* SHORT */, [
	WCHAR, /* in WCHAR ch */
], f => VkKeyScanW = f);
export {VkKeyScanW as VkKeyScan};

export function VkKeyScanExA () {};
VkKeyScanExA = createAutoLoader(lib, "VkKeyScanExA", SHORT /* SHORT */, [
	CHAR, /* in CHAR ch    */
	HKL,  /* in HKL  dwhkl */
], f => VkKeyScanExA = f);

export function VkKeyScanExW () {};
VkKeyScanExW = createAutoLoader(lib, "VkKeyScanExW", SHORT /* SHORT */, [
	WCHAR, /* in WCHAR ch    */
	HKL,   /* in HKL   dwhkl */
], f => VkKeyScanExW = f);
export {VkKeyScanExW as VkKeyScanEx};

export function keybd_event () {};
keybd_event = createAutoLoader(lib, "keybd_event", VOID /* VOID */, [
	BYTE,      /* in BYTE      bVk         */
	BYTE,      /* in BYTE      bScan       */
	DWORD,     /* in DWORD     dwFlags     */
	ULONG_PTR, /* in ULONG_PTR dwExtraInfo */
], f => keybd_event = f);

export function mouse_event () {};
mouse_event = createAutoLoader(lib, "mouse_event", VOID /* VOID */, [
	DWORD,     /* in DWORD     dwFlags     */
	DWORD,     /* in DWORD     dx          */
	DWORD,     /* in DWORD     dy          */
	DWORD,     /* in DWORD     dwData      */
	ULONG_PTR, /* in ULONG_PTR dwExtraInfo */
], f => mouse_event = f);

export function SendInput () {};
SendInput = createAutoLoader(lib, "SendInput", UINT /* UINT */, [
	UINT,    /* in UINT    cInputs */
	LPINPUT, /*    LPINPUT pInputs */
	int,     /* in int     cbSize  */
], f => SendInput = f);

export function GetTouchInputInfo () {};
GetTouchInputInfo = createAutoLoader(lib, "GetTouchInputInfo", BOOL /* BOOL */, [
	HTOUCHINPUT, /* in HTOUCHINPUT hTouchInput */
	UINT,        /* in UINT        cInputs     */
	PTOUCHINPUT, /*    PTOUCHINPUT pInputs     */
	int,         /* in int         cbSize      */
], f => GetTouchInputInfo = f);

export function CloseTouchInputHandle () {};
CloseTouchInputHandle = createAutoLoader(lib, "CloseTouchInputHandle", BOOL /* BOOL */, [
	HTOUCHINPUT, /* in HTOUCHINPUT hTouchInput */
], f => CloseTouchInputHandle = f);

export function RegisterTouchWindow () {};
RegisterTouchWindow = createAutoLoader(lib, "RegisterTouchWindow", BOOL /* BOOL */, [
	HWND,  /* in HWND  hwnd    */
	ULONG, /* in ULONG ulFlags */
], f => RegisterTouchWindow = f);

export function UnregisterTouchWindow () {};
UnregisterTouchWindow = createAutoLoader(lib, "UnregisterTouchWindow", BOOL /* BOOL */, [
	HWND, /* in HWND hwnd */
], f => UnregisterTouchWindow = f);

export function IsTouchWindow () {};
IsTouchWindow = createAutoLoader(lib, "IsTouchWindow", BOOL /* BOOL */, [
	HWND,        /* in      HWND   hwnd     */
	out(PULONG), /* out opt PULONG pulFlags */
], f => IsTouchWindow = f);

export function InitializeTouchInjection () {};
InitializeTouchInjection = createAutoLoader(lib, "InitializeTouchInjection", BOOL /* BOOL */, [
	UINT32, /* in UINT32 maxCount */
	DWORD,  /* in DWORD  dwMode   */
], f => InitializeTouchInjection = f);

export function InjectTouchInput () {};
InjectTouchInput = createAutoLoader(lib, "InjectTouchInput", BOOL /* BOOL */, [
	UINT32,                      /* in UINT32                     count    */
	pointer(POINTER_TOUCH_INFO), /*    CONST POINTER_TOUCH_INFO * contacts */
], f => InjectTouchInput = f);

export function GetPointerType () {};
GetPointerType = createAutoLoader(lib, "GetPointerType", BOOL /* BOOL */, [
	UINT32,                           /* in  UINT32               pointerId   */
	out(pointer(POINTER_INPUT_TYPE)), /* out POINTER_INPUT_TYPE * pointerType */
], f => GetPointerType = f);

export function GetPointerCursorId () {};
GetPointerCursorId = createAutoLoader(lib, "GetPointerCursorId", BOOL /* BOOL */, [
	UINT32,               /* in  UINT32   pointerId */
	out(pointer(UINT32)), /* out UINT32 * cursorId  */
], f => GetPointerCursorId = f);

export function GetPointerInfo () {};
GetPointerInfo = createAutoLoader(lib, "GetPointerInfo", BOOL /* BOOL */, [
	UINT32,                /* in UINT32         pointerId   */
	pointer(POINTER_INFO), /*    POINTER_INFO * pointerInfo */
], f => GetPointerInfo = f);

export function GetPointerInfoHistory () {};
GetPointerInfoHistory = createAutoLoader(lib, "GetPointerInfoHistory", BOOL /* BOOL */, [
	UINT32,                 /* in     UINT32         pointerId    */
	inout(pointer(UINT32)), /* in out UINT32 *       entriesCount */
	pointer(POINTER_INFO),  /*        POINTER_INFO * pointerInfo  */
], f => GetPointerInfoHistory = f);

export function GetPointerFrameInfo () {};
GetPointerFrameInfo = createAutoLoader(lib, "GetPointerFrameInfo", BOOL /* BOOL */, [
	UINT32,                 /* in     UINT32         pointerId    */
	inout(pointer(UINT32)), /* in out UINT32 *       pointerCount */
	pointer(POINTER_INFO),  /*        POINTER_INFO * pointerInfo  */
], f => GetPointerFrameInfo = f);

export function GetPointerFrameInfoHistory () {};
GetPointerFrameInfoHistory = createAutoLoader(lib, "GetPointerFrameInfoHistory", BOOL /* BOOL */, [
	UINT32,                 /* in     UINT32         pointerId    */
	inout(pointer(UINT32)), /* in out UINT32 *       entriesCount */
	inout(pointer(UINT32)), /* in out UINT32 *       pointerCount */
	pointer(POINTER_INFO),  /*        POINTER_INFO * pointerInfo  */
], f => GetPointerFrameInfoHistory = f);

export function GetPointerTouchInfo () {};
GetPointerTouchInfo = createAutoLoader(lib, "GetPointerTouchInfo", BOOL /* BOOL */, [
	UINT32,                      /* in UINT32               pointerId */
	pointer(POINTER_TOUCH_INFO), /*    POINTER_TOUCH_INFO * touchInfo */
], f => GetPointerTouchInfo = f);

export function GetPointerTouchInfoHistory () {};
GetPointerTouchInfoHistory = createAutoLoader(lib, "GetPointerTouchInfoHistory", BOOL /* BOOL */, [
	UINT32,                      /* in     UINT32               pointerId    */
	inout(pointer(UINT32)),      /* in out UINT32 *             entriesCount */
	pointer(POINTER_TOUCH_INFO), /*        POINTER_TOUCH_INFO * touchInfo    */
], f => GetPointerTouchInfoHistory = f);

export function GetPointerFrameTouchInfo () {};
GetPointerFrameTouchInfo = createAutoLoader(lib, "GetPointerFrameTouchInfo", BOOL /* BOOL */, [
	UINT32,                      /* in     UINT32               pointerId    */
	inout(pointer(UINT32)),      /* in out UINT32 *             pointerCount */
	pointer(POINTER_TOUCH_INFO), /*        POINTER_TOUCH_INFO * touchInfo    */
], f => GetPointerFrameTouchInfo = f);

export function GetPointerFrameTouchInfoHistory () {};
GetPointerFrameTouchInfoHistory = createAutoLoader(lib, "GetPointerFrameTouchInfoHistory", BOOL /* BOOL */, [
	UINT32,                      /* in     UINT32               pointerId    */
	inout(pointer(UINT32)),      /* in out UINT32 *             entriesCount */
	inout(pointer(UINT32)),      /* in out UINT32 *             pointerCount */
	pointer(POINTER_TOUCH_INFO), /*        POINTER_TOUCH_INFO * touchInfo    */
], f => GetPointerFrameTouchInfoHistory = f);

export function GetPointerPenInfo () {};
GetPointerPenInfo = createAutoLoader(lib, "GetPointerPenInfo", BOOL /* BOOL */, [
	UINT32,                    /* in UINT32             pointerId */
	pointer(POINTER_PEN_INFO), /*    POINTER_PEN_INFO * penInfo   */
], f => GetPointerPenInfo = f);

export function GetPointerPenInfoHistory () {};
GetPointerPenInfoHistory = createAutoLoader(lib, "GetPointerPenInfoHistory", BOOL /* BOOL */, [
	UINT32,                    /* in     UINT32             pointerId    */
	inout(pointer(UINT32)),    /* in out UINT32 *           entriesCount */
	pointer(POINTER_PEN_INFO), /*        POINTER_PEN_INFO * penInfo      */
], f => GetPointerPenInfoHistory = f);

export function GetPointerFramePenInfo () {};
GetPointerFramePenInfo = createAutoLoader(lib, "GetPointerFramePenInfo", BOOL /* BOOL */, [
	UINT32,                    /* in     UINT32             pointerId    */
	inout(pointer(UINT32)),    /* in out UINT32 *           pointerCount */
	pointer(POINTER_PEN_INFO), /*        POINTER_PEN_INFO * penInfo      */
], f => GetPointerFramePenInfo = f);

export function GetPointerFramePenInfoHistory () {};
GetPointerFramePenInfoHistory = createAutoLoader(lib, "GetPointerFramePenInfoHistory", BOOL /* BOOL */, [
	UINT32,                    /* in     UINT32             pointerId    */
	inout(pointer(UINT32)),    /* in out UINT32 *           entriesCount */
	inout(pointer(UINT32)),    /* in out UINT32 *           pointerCount */
	pointer(POINTER_PEN_INFO), /*        POINTER_PEN_INFO * penInfo      */
], f => GetPointerFramePenInfoHistory = f);

export function SkipPointerFrameMessages () {};
SkipPointerFrameMessages = createAutoLoader(lib, "SkipPointerFrameMessages", BOOL /* BOOL */, [
	UINT32, /* in UINT32 pointerId */
], f => SkipPointerFrameMessages = f);

export function RegisterPointerInputTarget () {};
RegisterPointerInputTarget = createAutoLoader(lib, "RegisterPointerInputTarget", BOOL /* BOOL */, [
	HWND,               /* in HWND               hwnd        */
	POINTER_INPUT_TYPE, /* in POINTER_INPUT_TYPE pointerType */
], f => RegisterPointerInputTarget = f);

export function UnregisterPointerInputTarget () {};
UnregisterPointerInputTarget = createAutoLoader(lib, "UnregisterPointerInputTarget", BOOL /* BOOL */, [
	HWND,               /* in HWND               hwnd        */
	POINTER_INPUT_TYPE, /* in POINTER_INPUT_TYPE pointerType */
], f => UnregisterPointerInputTarget = f);

export function RegisterPointerInputTargetEx () {};
RegisterPointerInputTargetEx = createAutoLoader(lib, "RegisterPointerInputTargetEx", BOOL /* BOOL */, [
	HWND,               /* in HWND               hwnd        */
	POINTER_INPUT_TYPE, /* in POINTER_INPUT_TYPE pointerType */
	BOOL,               /* in BOOL               fObserve    */
], f => RegisterPointerInputTargetEx = f);

export function UnregisterPointerInputTargetEx () {};
UnregisterPointerInputTargetEx = createAutoLoader(lib, "UnregisterPointerInputTargetEx", BOOL /* BOOL */, [
	HWND,               /* in HWND               hwnd        */
	POINTER_INPUT_TYPE, /* in POINTER_INPUT_TYPE pointerType */
], f => UnregisterPointerInputTargetEx = f);

export function CreateSyntheticPointerDevice () {};
CreateSyntheticPointerDevice = createAutoLoader(lib, "CreateSyntheticPointerDevice", HSYNTHETICPOINTERDEVICE /* HSYNTHETICPOINTERDEVICE */, [
	POINTER_INPUT_TYPE,    /* in POINTER_INPUT_TYPE    pointerType */
	ULONG,                 /* in ULONG                 maxCount    */
	POINTER_FEEDBACK_MODE, /* in POINTER_FEEDBACK_MODE mode        */
], f => CreateSyntheticPointerDevice = f);

export function InjectSyntheticPointerInput () {};
InjectSyntheticPointerInput = createAutoLoader(lib, "InjectSyntheticPointerInput", BOOL /* BOOL */, [
	HSYNTHETICPOINTERDEVICE,    /* in HSYNTHETICPOINTERDEVICE  device      */
	pointer(POINTER_TYPE_INFO), /*    CONST POINTER_TYPE_INFO* pointerInfo */
	UINT32,                     /* in UINT32                   count       */
], f => InjectSyntheticPointerInput = f);

export function DestroySyntheticPointerDevice () {};
DestroySyntheticPointerDevice = createAutoLoader(lib, "DestroySyntheticPointerDevice", VOID /* VOID */, [
	HSYNTHETICPOINTERDEVICE, /* in HSYNTHETICPOINTERDEVICE device */
], f => DestroySyntheticPointerDevice = f);

export function EnableMouseInPointer () {};
EnableMouseInPointer = createAutoLoader(lib, "EnableMouseInPointer", BOOL /* BOOL */, [
	BOOL, /* in BOOL fEnable */
], f => EnableMouseInPointer = f);

export function IsMouseInPointerEnabled () {};
IsMouseInPointerEnabled = createAutoLoader(lib, "IsMouseInPointerEnabled", BOOL /* BOOL */, [
	/* void */
], f => IsMouseInPointerEnabled = f);

export function EnableMouseInPointerForThread () {};
EnableMouseInPointerForThread = createAutoLoader(lib, "EnableMouseInPointerForThread", BOOL /* BOOL */, [
	/* void */
], f => EnableMouseInPointerForThread = f);

export function RegisterTouchHitTestingWindow () {};
RegisterTouchHitTestingWindow = createAutoLoader(lib, "RegisterTouchHitTestingWindow", BOOL /* BOOL */, [
	HWND,  /* in HWND  hwnd  */
	ULONG, /* in ULONG value */
], f => RegisterTouchHitTestingWindow = f);

export function EvaluateProximityToRect () {};
EvaluateProximityToRect = createAutoLoader(lib, "EvaluateProximityToRect", BOOL /* BOOL */, [
	pointer(RECT),                                        /* in  const RECT *                             controlBoundingBox */
	pointer(TOUCH_HIT_TESTING_INPUT),                     /* in  const TOUCH_HIT_TESTING_INPUT *          pHitTestingInput   */
	out(pointer(TOUCH_HIT_TESTING_PROXIMITY_EVALUATION)), /* out TOUCH_HIT_TESTING_PROXIMITY_EVALUATION * pProximityEval     */
], f => EvaluateProximityToRect = f);

export function EvaluateProximityToPolygon () {};
EvaluateProximityToPolygon = createAutoLoader(lib, "EvaluateProximityToPolygon", BOOL /* BOOL */, [
	UINT32,                                               /*     UINT32                                   numVertices      */
	pointer(POINT),                                       /*     const POINT *                            controlPolygon   */
	pointer(TOUCH_HIT_TESTING_INPUT),                     /* in  const TOUCH_HIT_TESTING_INPUT *          pHitTestingInput */
	out(pointer(TOUCH_HIT_TESTING_PROXIMITY_EVALUATION)), /* out TOUCH_HIT_TESTING_PROXIMITY_EVALUATION * pProximityEval   */
], f => EvaluateProximityToPolygon = f);

export function PackTouchHitTestingProximityEvaluation () {};
PackTouchHitTestingProximityEvaluation = createAutoLoader(lib, "PackTouchHitTestingProximityEvaluation", LRESULT /* LRESULT */, [
	pointer(TOUCH_HIT_TESTING_INPUT),                /* in const TOUCH_HIT_TESTING_INPUT *                pHitTestingInput */
	pointer(TOUCH_HIT_TESTING_PROXIMITY_EVALUATION), /* in const TOUCH_HIT_TESTING_PROXIMITY_EVALUATION * pProximityEval   */
], f => PackTouchHitTestingProximityEvaluation = f);

export function GetWindowFeedbackSetting () {};
GetWindowFeedbackSetting = createAutoLoader(lib, "GetWindowFeedbackSetting", BOOL /* BOOL */, [
	HWND,                   /* in     HWND          hwnd     */
	FEEDBACK_TYPE,          /* in     FEEDBACK_TYPE feedback */
	DWORD,                  /* in     DWORD         dwFlags  */
	inout(pointer(UINT32)), /* in out UINT32*       pSize    */
	pointer(VOID),          /*        VOID*         config   */
], f => GetWindowFeedbackSetting = f);

export function SetWindowFeedbackSetting () {};
SetWindowFeedbackSetting = createAutoLoader(lib, "SetWindowFeedbackSetting", BOOL /* BOOL */, [
	HWND,          /* in HWND          hwnd          */
	FEEDBACK_TYPE, /* in FEEDBACK_TYPE feedback      */
	DWORD,         /* in DWORD         dwFlags       */
	UINT32,        /* in UINT32        size          */
	pointer(VOID), /*    CONST VOID*   configuration */
], f => SetWindowFeedbackSetting = f);

export function GetPointerInputTransform () {};
GetPointerInputTransform = createAutoLoader(lib, "GetPointerInputTransform", BOOL /* BOOL */, [
	UINT32,                   /* in UINT32            pointerId      */
	UINT32,                   /* in UINT32            historyCount   */
	pointer(INPUT_TRANSFORM), /*    INPUT_TRANSFORM * inputTransform */
], f => GetPointerInputTransform = f);

export function GetLastInputInfo () {};
GetLastInputInfo = createAutoLoader(lib, "GetLastInputInfo", BOOL /* BOOL */, [
	out(PLASTINPUTINFO), /* out PLASTINPUTINFO plii */
], f => GetLastInputInfo = f);

export function MapVirtualKeyA () {};
MapVirtualKeyA = createAutoLoader(lib, "MapVirtualKeyA", UINT /* UINT */, [
	UINT, /* in UINT uCode    */
	UINT, /* in UINT uMapType */
], f => MapVirtualKeyA = f);

export function MapVirtualKeyW () {};
MapVirtualKeyW = createAutoLoader(lib, "MapVirtualKeyW", UINT /* UINT */, [
	UINT, /* in UINT uCode    */
	UINT, /* in UINT uMapType */
], f => MapVirtualKeyW = f);
export {MapVirtualKeyW as MapVirtualKey};

export function MapVirtualKeyExA () {};
MapVirtualKeyExA = createAutoLoader(lib, "MapVirtualKeyExA", UINT /* UINT */, [
	UINT, /* in     UINT uCode    */
	UINT, /* in     UINT uMapType */
	HKL,  /* in opt HKL  dwhkl    */
], f => MapVirtualKeyExA = f);

export function MapVirtualKeyExW () {};
MapVirtualKeyExW = createAutoLoader(lib, "MapVirtualKeyExW", UINT /* UINT */, [
	UINT, /* in     UINT uCode    */
	UINT, /* in     UINT uMapType */
	HKL,  /* in opt HKL  dwhkl    */
], f => MapVirtualKeyExW = f);
export {MapVirtualKeyExW as MapVirtualKeyEx};

export function GetInputState () {};
GetInputState = createAutoLoader(lib, "GetInputState", BOOL /* BOOL */, [
	/* void */
], f => GetInputState = f);

export function GetQueueStatus () {};
GetQueueStatus = createAutoLoader(lib, "GetQueueStatus", DWORD /* DWORD */, [
	UINT, /* in UINT flags */
], f => GetQueueStatus = f);

export function GetCapture () {};
GetCapture = createAutoLoader(lib, "GetCapture", HWND /* HWND */, [
	/* void */
], f => GetCapture = f);

export function SetCapture () {};
SetCapture = createAutoLoader(lib, "SetCapture", HWND /* HWND */, [
	HWND, /* in HWND hWnd */
], f => SetCapture = f);

export function ReleaseCapture () {};
ReleaseCapture = createAutoLoader(lib, "ReleaseCapture", BOOL /* BOOL */, [
	/* void */
], f => ReleaseCapture = f);

export function SetTimer () {};
SetTimer = createAutoLoader(lib, "SetTimer", UINT_PTR /* UINT_PTR */, [
	HWND,      /* in opt HWND      hWnd        */
	UINT_PTR,  /* in     UINT_PTR  nIDEvent    */
	UINT,      /* in     UINT      uElapse     */
	TIMERPROC, /* in opt TIMERPROC lpTimerFunc */
], f => SetTimer = f);

export function SetCoalescableTimer () {};
SetCoalescableTimer = createAutoLoader(lib, "SetCoalescableTimer", UINT_PTR /* UINT_PTR */, [
	HWND,      /* in opt HWND      hWnd            */
	UINT_PTR,  /* in     UINT_PTR  nIDEvent        */
	UINT,      /* in     UINT      uElapse         */
	TIMERPROC, /* in opt TIMERPROC lpTimerFunc     */
	ULONG,     /* in     ULONG     uToleranceDelay */
], f => SetCoalescableTimer = f);

export function KillTimer () {};
KillTimer = createAutoLoader(lib, "KillTimer", BOOL /* BOOL */, [
	HWND,     /* in opt HWND     hWnd     */
	UINT_PTR, /* in     UINT_PTR uIDEvent */
], f => KillTimer = f);

export function IsWindowUnicode () {};
IsWindowUnicode = createAutoLoader(lib, "IsWindowUnicode", BOOL /* BOOL */, [
	HWND, /* in HWND hWnd */
], f => IsWindowUnicode = f);

export function EnableWindow () {};
EnableWindow = createAutoLoader(lib, "EnableWindow", BOOL /* BOOL */, [
	HWND, /* in HWND hWnd    */
	BOOL, /* in BOOL bEnable */
], f => EnableWindow = f);

export function IsWindowEnabled () {};
IsWindowEnabled = createAutoLoader(lib, "IsWindowEnabled", BOOL /* BOOL */, [
	HWND, /* in HWND hWnd */
], f => IsWindowEnabled = f);

export function LoadAcceleratorsA () {};
LoadAcceleratorsA = createAutoLoader(lib, "LoadAcceleratorsA", HACCEL /* HACCEL */, [
	HINSTANCE, /* in opt HINSTANCE hInstance   */
	LPCSTR,    /* in     LPCSTR    lpTableName */
], f => LoadAcceleratorsA = f);

export function LoadAcceleratorsW () {};
LoadAcceleratorsW = createAutoLoader(lib, "LoadAcceleratorsW", HACCEL /* HACCEL */, [
	HINSTANCE, /* in opt HINSTANCE hInstance   */
	LPCWSTR,   /* in     LPCWSTR   lpTableName */
], f => LoadAcceleratorsW = f);
export {LoadAcceleratorsW as LoadAccelerators};

export function CreateAcceleratorTableA () {};
CreateAcceleratorTableA = createAutoLoader(lib, "CreateAcceleratorTableA", HACCEL /* HACCEL */, [
	LPACCEL, /*    LPACCEL paccel */
	int,     /* in int     cAccel */
], f => CreateAcceleratorTableA = f);

export function CreateAcceleratorTableW () {};
CreateAcceleratorTableW = createAutoLoader(lib, "CreateAcceleratorTableW", HACCEL /* HACCEL */, [
	LPACCEL, /*    LPACCEL paccel */
	int,     /* in int     cAccel */
], f => CreateAcceleratorTableW = f);
export {CreateAcceleratorTableW as CreateAcceleratorTable};

export function DestroyAcceleratorTable () {};
DestroyAcceleratorTable = createAutoLoader(lib, "DestroyAcceleratorTable", BOOL /* BOOL */, [
	HACCEL, /* in HACCEL hAccel */
], f => DestroyAcceleratorTable = f);

export function CopyAcceleratorTableA () {};
CopyAcceleratorTableA = createAutoLoader(lib, "CopyAcceleratorTableA", int /* int */, [
	HACCEL,  /* in HACCEL  hAccelSrc     */
	LPACCEL, /*    LPACCEL lpAccelDst    */
	int,     /* in int     cAccelEntries */
], f => CopyAcceleratorTableA = f);

export function CopyAcceleratorTableW () {};
CopyAcceleratorTableW = createAutoLoader(lib, "CopyAcceleratorTableW", int /* int */, [
	HACCEL,  /* in HACCEL  hAccelSrc     */
	LPACCEL, /*    LPACCEL lpAccelDst    */
	int,     /* in int     cAccelEntries */
], f => CopyAcceleratorTableW = f);
export {CopyAcceleratorTableW as CopyAcceleratorTable};

export function TranslateAcceleratorA () {};
TranslateAcceleratorA = createAutoLoader(lib, "TranslateAcceleratorA", int /* int */, [
	HWND,   /* in HWND   hWnd      */
	HACCEL, /* in HACCEL hAccTable */
	LPMSG,  /* in LPMSG  lpMsg     */
], f => TranslateAcceleratorA = f);

export function TranslateAcceleratorW () {};
TranslateAcceleratorW = createAutoLoader(lib, "TranslateAcceleratorW", int /* int */, [
	HWND,   /* in HWND   hWnd      */
	HACCEL, /* in HACCEL hAccTable */
	LPMSG,  /* in LPMSG  lpMsg     */
], f => TranslateAcceleratorW = f);
export {TranslateAcceleratorW as TranslateAccelerator};

export function GetSystemMetrics () {};
GetSystemMetrics = createAutoLoader(lib, "GetSystemMetrics", int /* int */, [
	int, /* in int nIndex */
], f => GetSystemMetrics = f);

export function GetSystemMetricsForDpi () {};
GetSystemMetricsForDpi = createAutoLoader(lib, "GetSystemMetricsForDpi", int /* int */, [
	int,  /* in int  nIndex */
	UINT, /* in UINT dpi    */
], f => GetSystemMetricsForDpi = f);

export function LoadMenuA () {};
LoadMenuA = createAutoLoader(lib, "LoadMenuA", HMENU /* HMENU */, [
	HINSTANCE, /* in opt HINSTANCE hInstance  */
	LPCSTR,    /* in     LPCSTR    lpMenuName */
], f => LoadMenuA = f);

export function LoadMenuW () {};
LoadMenuW = createAutoLoader(lib, "LoadMenuW", HMENU /* HMENU */, [
	HINSTANCE, /* in opt HINSTANCE hInstance  */
	LPCWSTR,   /* in     LPCWSTR   lpMenuName */
], f => LoadMenuW = f);
export {LoadMenuW as LoadMenu};

export function LoadMenuIndirectA () {};
LoadMenuIndirectA = createAutoLoader(lib, "LoadMenuIndirectA", HMENU /* HMENU */, [
	pointer(MENUTEMPLATEA), /* in CONST MENUTEMPLATEA * lpMenuTemplate */
], f => LoadMenuIndirectA = f);

export function LoadMenuIndirectW () {};
LoadMenuIndirectW = createAutoLoader(lib, "LoadMenuIndirectW", HMENU /* HMENU */, [
	pointer(MENUTEMPLATEW), /* in CONST MENUTEMPLATEW * lpMenuTemplate */
], f => LoadMenuIndirectW = f);
export {LoadMenuIndirectW as LoadMenuIndirect};

export function GetMenu () {};
GetMenu = createAutoLoader(lib, "GetMenu", HMENU /* HMENU */, [
	HWND, /* in HWND hWnd */
], f => GetMenu = f);

export function SetMenu () {};
SetMenu = createAutoLoader(lib, "SetMenu", BOOL /* BOOL */, [
	HWND,  /* in     HWND  hWnd  */
	HMENU, /* in opt HMENU hMenu */
], f => SetMenu = f);

export function ChangeMenuA () {};
ChangeMenuA = createAutoLoader(lib, "ChangeMenuA", BOOL /* BOOL */, [
	HMENU,  /* in     HMENU  hMenu       */
	UINT,   /* in     UINT   cmd         */
	LPCSTR, /* in opt LPCSTR lpszNewItem */
	UINT,   /* in     UINT   cmdInsert   */
	UINT,   /* in     UINT   flags       */
], f => ChangeMenuA = f);

export function ChangeMenuW () {};
ChangeMenuW = createAutoLoader(lib, "ChangeMenuW", BOOL /* BOOL */, [
	HMENU,   /* in     HMENU   hMenu       */
	UINT,    /* in     UINT    cmd         */
	LPCWSTR, /* in opt LPCWSTR lpszNewItem */
	UINT,    /* in     UINT    cmdInsert   */
	UINT,    /* in     UINT    flags       */
], f => ChangeMenuW = f);
export {ChangeMenuW as ChangeMenu};

export function HiliteMenuItem () {};
HiliteMenuItem = createAutoLoader(lib, "HiliteMenuItem", BOOL /* BOOL */, [
	HWND,  /* in HWND  hWnd          */
	HMENU, /* in HMENU hMenu         */
	UINT,  /* in UINT  uIDHiliteItem */
	UINT,  /* in UINT  uHilite       */
], f => HiliteMenuItem = f);

export function GetMenuStringA () {};
GetMenuStringA = createAutoLoader(lib, "GetMenuStringA", int /* int */, [
	HMENU, /* in HMENU hMenu    */
	UINT,  /* in UINT  uIDItem  */
	LPSTR, /*    LPSTR lpString */
	int,   /* in int   cchMax   */
	UINT,  /* in UINT  flags    */
], f => GetMenuStringA = f);

export function GetMenuStringW () {};
GetMenuStringW = createAutoLoader(lib, "GetMenuStringW", int /* int */, [
	HMENU,  /* in HMENU  hMenu    */
	UINT,   /* in UINT   uIDItem  */
	LPWSTR, /*    LPWSTR lpString */
	int,    /* in int    cchMax   */
	UINT,   /* in UINT   flags    */
], f => GetMenuStringW = f);
export {GetMenuStringW as GetMenuString};

export function GetMenuState () {};
GetMenuState = createAutoLoader(lib, "GetMenuState", UINT /* UINT */, [
	HMENU, /* in HMENU hMenu  */
	UINT,  /* in UINT  uId    */
	UINT,  /* in UINT  uFlags */
], f => GetMenuState = f);

export function DrawMenuBar () {};
DrawMenuBar = createAutoLoader(lib, "DrawMenuBar", BOOL /* BOOL */, [
	HWND, /* in HWND hWnd */
], f => DrawMenuBar = f);

export function GetSystemMenu () {};
GetSystemMenu = createAutoLoader(lib, "GetSystemMenu", HMENU /* HMENU */, [
	HWND, /* in HWND hWnd    */
	BOOL, /* in BOOL bRevert */
], f => GetSystemMenu = f);

export function CreateMenu () {};
CreateMenu = createAutoLoader(lib, "CreateMenu", HMENU /* HMENU */, [
	/* void */
], f => CreateMenu = f);

export function CreatePopupMenu () {};
CreatePopupMenu = createAutoLoader(lib, "CreatePopupMenu", HMENU /* HMENU */, [
	/* void */
], f => CreatePopupMenu = f);

export function DestroyMenu () {};
DestroyMenu = createAutoLoader(lib, "DestroyMenu", BOOL /* BOOL */, [
	HMENU, /* in HMENU hMenu */
], f => DestroyMenu = f);

export function CheckMenuItem () {};
CheckMenuItem = createAutoLoader(lib, "CheckMenuItem", DWORD /* DWORD */, [
	HMENU, /* in HMENU hMenu        */
	UINT,  /* in UINT  uIDCheckItem */
	UINT,  /* in UINT  uCheck       */
], f => CheckMenuItem = f);

export function EnableMenuItem () {};
EnableMenuItem = createAutoLoader(lib, "EnableMenuItem", BOOL /* BOOL */, [
	HMENU, /* in HMENU hMenu         */
	UINT,  /* in UINT  uIDEnableItem */
	UINT,  /* in UINT  uEnable       */
], f => EnableMenuItem = f);

export function GetSubMenu () {};
GetSubMenu = createAutoLoader(lib, "GetSubMenu", HMENU /* HMENU */, [
	HMENU, /* in HMENU hMenu */
	int,   /* in int   nPos  */
], f => GetSubMenu = f);

export function GetMenuItemID () {};
GetMenuItemID = createAutoLoader(lib, "GetMenuItemID", UINT /* UINT */, [
	HMENU, /* in HMENU hMenu */
	int,   /* in int   nPos  */
], f => GetMenuItemID = f);

export function GetMenuItemCount () {};
GetMenuItemCount = createAutoLoader(lib, "GetMenuItemCount", int /* int */, [
	HMENU, /* in opt HMENU hMenu */
], f => GetMenuItemCount = f);

export function InsertMenuA () {};
InsertMenuA = createAutoLoader(lib, "InsertMenuA", BOOL /* BOOL */, [
	HMENU,    /* in     HMENU    hMenu      */
	UINT,     /* in     UINT     uPosition  */
	UINT,     /* in     UINT     uFlags     */
	UINT_PTR, /* in     UINT_PTR uIDNewItem */
	LPCSTR,   /* in opt LPCSTR   lpNewItem  */
], f => InsertMenuA = f);

export function InsertMenuW () {};
InsertMenuW = createAutoLoader(lib, "InsertMenuW", BOOL /* BOOL */, [
	HMENU,    /* in     HMENU    hMenu      */
	UINT,     /* in     UINT     uPosition  */
	UINT,     /* in     UINT     uFlags     */
	UINT_PTR, /* in     UINT_PTR uIDNewItem */
	LPCWSTR,  /* in opt LPCWSTR  lpNewItem  */
], f => InsertMenuW = f);
export {InsertMenuW as InsertMenu};

export function AppendMenuA () {};
AppendMenuA = createAutoLoader(lib, "AppendMenuA", BOOL /* BOOL */, [
	HMENU,    /* in     HMENU    hMenu      */
	UINT,     /* in     UINT     uFlags     */
	UINT_PTR, /* in     UINT_PTR uIDNewItem */
	LPCSTR,   /* in opt LPCSTR   lpNewItem  */
], f => AppendMenuA = f);

export function AppendMenuW () {};
AppendMenuW = createAutoLoader(lib, "AppendMenuW", BOOL /* BOOL */, [
	HMENU,    /* in     HMENU    hMenu      */
	UINT,     /* in     UINT     uFlags     */
	UINT_PTR, /* in     UINT_PTR uIDNewItem */
	LPCWSTR,  /* in opt LPCWSTR  lpNewItem  */
], f => AppendMenuW = f);
export {AppendMenuW as AppendMenu};

export function ModifyMenuA () {};
ModifyMenuA = createAutoLoader(lib, "ModifyMenuA", BOOL /* BOOL */, [
	HMENU,    /* in     HMENU    hMnu       */
	UINT,     /* in     UINT     uPosition  */
	UINT,     /* in     UINT     uFlags     */
	UINT_PTR, /* in     UINT_PTR uIDNewItem */
	LPCSTR,   /* in opt LPCSTR   lpNewItem  */
], f => ModifyMenuA = f);

export function ModifyMenuW () {};
ModifyMenuW = createAutoLoader(lib, "ModifyMenuW", BOOL /* BOOL */, [
	HMENU,    /* in     HMENU    hMnu       */
	UINT,     /* in     UINT     uPosition  */
	UINT,     /* in     UINT     uFlags     */
	UINT_PTR, /* in     UINT_PTR uIDNewItem */
	LPCWSTR,  /* in opt LPCWSTR  lpNewItem  */
], f => ModifyMenuW = f);
export {ModifyMenuW as ModifyMenu};

export function RemoveMenu () {};
RemoveMenu = createAutoLoader(lib, "RemoveMenu", BOOL /* BOOL */, [
	HMENU, /* in HMENU hMenu     */
	UINT,  /* in UINT  uPosition */
	UINT,  /* in UINT  uFlags    */
], f => RemoveMenu = f);

export function DeleteMenu () {};
DeleteMenu = createAutoLoader(lib, "DeleteMenu", BOOL /* BOOL */, [
	HMENU, /* in HMENU hMenu     */
	UINT,  /* in UINT  uPosition */
	UINT,  /* in UINT  uFlags    */
], f => DeleteMenu = f);

export function SetMenuItemBitmaps () {};
SetMenuItemBitmaps = createAutoLoader(lib, "SetMenuItemBitmaps", BOOL /* BOOL */, [
	HMENU,   /* in     HMENU   hMenu            */
	UINT,    /* in     UINT    uPosition        */
	UINT,    /* in     UINT    uFlags           */
	HBITMAP, /* in opt HBITMAP hBitmapUnchecked */
	HBITMAP, /* in opt HBITMAP hBitmapChecked   */
], f => SetMenuItemBitmaps = f);

export function GetMenuCheckMarkDimensions () {};
GetMenuCheckMarkDimensions = createAutoLoader(lib, "GetMenuCheckMarkDimensions", LONG /* LONG */, [
	/* void */
], f => GetMenuCheckMarkDimensions = f);

export function TrackPopupMenu () {};
TrackPopupMenu = createAutoLoader(lib, "TrackPopupMenu", BOOL /* BOOL */, [
	HMENU,         /* in       HMENU        hMenu     */
	UINT,          /* in       UINT         uFlags    */
	int,           /* in       int          x         */
	int,           /* in       int          y         */
	int,           /* reserved int          nReserved */
	HWND,          /* in       HWND         hWnd      */
	pointer(RECT), /* reserved CONST RECT * prcRect   */
], f => TrackPopupMenu = f);

export function TrackPopupMenuEx () {};
TrackPopupMenuEx = createAutoLoader(lib, "TrackPopupMenuEx", BOOL /* BOOL */, [
	HMENU,       /* in     HMENU       hMenu  */
	UINT,        /* in     UINT        uFlags */
	int,         /* in     int         x      */
	int,         /* in     int         y      */
	HWND,        /* in     HWND        hwnd   */
	LPTPMPARAMS, /* in opt LPTPMPARAMS lptpm  */
], f => TrackPopupMenuEx = f);

export function CalculatePopupWindowPosition () {};
CalculatePopupWindowPosition = createAutoLoader(lib, "CalculatePopupWindowPosition", BOOL /* BOOL */, [
	pointer(POINT),     /* in     const POINT * anchorPoint         */
	pointer(SIZE),      /* in     const SIZE *  windowSize          */
	UINT,               /* in     UINT          flags               */
	pointer(RECT),      /* in opt RECT *        excludeRect         */
	out(pointer(RECT)), /* out    RECT *        popupWindowPosition */
], f => CalculatePopupWindowPosition = f);

export function GetMenuInfo () {};
GetMenuInfo = createAutoLoader(lib, "GetMenuInfo", BOOL /* BOOL */, [
	HMENU,             /* in     HMENU       */
	inout(LPMENUINFO), /* in out LPMENUINFO  */
], f => GetMenuInfo = f);

export function SetMenuInfo () {};
SetMenuInfo = createAutoLoader(lib, "SetMenuInfo", BOOL /* BOOL */, [
	HMENU,       /* in HMENU        */
	LPCMENUINFO, /* in LPCMENUINFO  */
], f => SetMenuInfo = f);

export function EndMenu () {};
EndMenu = createAutoLoader(lib, "EndMenu", BOOL /* BOOL */, [
	/* void */
], f => EndMenu = f);

export function InsertMenuItemA () {};
InsertMenuItemA = createAutoLoader(lib, "InsertMenuItemA", BOOL /* BOOL */, [
	HMENU,            /* in HMENU            hmenu       */
	UINT,             /* in UINT             item        */
	BOOL,             /* in BOOL             fByPosition */
	LPCMENUITEMINFOA, /* in LPCMENUITEMINFOA lpmi        */
], f => InsertMenuItemA = f);

export function InsertMenuItemW () {};
InsertMenuItemW = createAutoLoader(lib, "InsertMenuItemW", BOOL /* BOOL */, [
	HMENU,            /* in HMENU            hmenu       */
	UINT,             /* in UINT             item        */
	BOOL,             /* in BOOL             fByPosition */
	LPCMENUITEMINFOW, /* in LPCMENUITEMINFOW lpmi        */
], f => InsertMenuItemW = f);
export {InsertMenuItemW as InsertMenuItem};

export function GetMenuItemInfoA () {};
GetMenuItemInfoA = createAutoLoader(lib, "GetMenuItemInfoA", BOOL /* BOOL */, [
	HMENU,                  /* in     HMENU           hmenu       */
	UINT,                   /* in     UINT            item        */
	BOOL,                   /* in     BOOL            fByPosition */
	inout(LPMENUITEMINFOA), /* in out LPMENUITEMINFOA lpmii       */
], f => GetMenuItemInfoA = f);

export function GetMenuItemInfoW () {};
GetMenuItemInfoW = createAutoLoader(lib, "GetMenuItemInfoW", BOOL /* BOOL */, [
	HMENU,                  /* in     HMENU           hmenu       */
	UINT,                   /* in     UINT            item        */
	BOOL,                   /* in     BOOL            fByPosition */
	inout(LPMENUITEMINFOW), /* in out LPMENUITEMINFOW lpmii       */
], f => GetMenuItemInfoW = f);
export {GetMenuItemInfoW as GetMenuItemInfo};

export function SetMenuItemInfoA () {};
SetMenuItemInfoA = createAutoLoader(lib, "SetMenuItemInfoA", BOOL /* BOOL */, [
	HMENU,            /* in HMENU            hmenu      */
	UINT,             /* in UINT             item       */
	BOOL,             /* in BOOL             fByPositon */
	LPCMENUITEMINFOA, /* in LPCMENUITEMINFOA lpmii      */
], f => SetMenuItemInfoA = f);

export function SetMenuItemInfoW () {};
SetMenuItemInfoW = createAutoLoader(lib, "SetMenuItemInfoW", BOOL /* BOOL */, [
	HMENU,            /* in HMENU            hmenu      */
	UINT,             /* in UINT             item       */
	BOOL,             /* in BOOL             fByPositon */
	LPCMENUITEMINFOW, /* in LPCMENUITEMINFOW lpmii      */
], f => SetMenuItemInfoW = f);
export {SetMenuItemInfoW as SetMenuItemInfo};

export function GetMenuDefaultItem () {};
GetMenuDefaultItem = createAutoLoader(lib, "GetMenuDefaultItem", UINT /* UINT */, [
	HMENU, /* in HMENU hMenu     */
	UINT,  /* in UINT  fByPos    */
	UINT,  /* in UINT  gmdiFlags */
], f => GetMenuDefaultItem = f);

export function SetMenuDefaultItem () {};
SetMenuDefaultItem = createAutoLoader(lib, "SetMenuDefaultItem", BOOL /* BOOL */, [
	HMENU, /* in HMENU hMenu  */
	UINT,  /* in UINT  uItem  */
	UINT,  /* in UINT  fByPos */
], f => SetMenuDefaultItem = f);

export function GetMenuItemRect () {};
GetMenuItemRect = createAutoLoader(lib, "GetMenuItemRect", BOOL /* BOOL */, [
	HWND,        /* in opt HWND   hWnd     */
	HMENU,       /* in     HMENU  hMenu    */
	UINT,        /* in     UINT   uItem    */
	out(LPRECT), /* out    LPRECT lprcItem */
], f => GetMenuItemRect = f);

export function MenuItemFromPoint () {};
MenuItemFromPoint = createAutoLoader(lib, "MenuItemFromPoint", int /* int */, [
	HWND,  /* in opt HWND  hWnd     */
	HMENU, /* in     HMENU hMenu    */
	POINT, /* in     POINT ptScreen */
], f => MenuItemFromPoint = f);

export function DragObject () {};
DragObject = createAutoLoader(lib, "DragObject", DWORD /* DWORD */, [
	HWND,      /* in     HWND      hwndParent */
	HWND,      /* in     HWND      hwndFrom   */
	UINT,      /* in     UINT      fmt        */
	ULONG_PTR, /* in     ULONG_PTR data       */
	HCURSOR,   /* in opt HCURSOR   hcur       */
], f => DragObject = f);

export function DragDetect () {};
DragDetect = createAutoLoader(lib, "DragDetect", BOOL /* BOOL */, [
	HWND,  /* in HWND  hwnd */
	POINT, /* in POINT pt   */
], f => DragDetect = f);

export function DrawIcon () {};
DrawIcon = createAutoLoader(lib, "DrawIcon", BOOL /* BOOL */, [
	HDC,   /* in HDC   hDC   */
	int,   /* in int   X     */
	int,   /* in int   Y     */
	HICON, /* in HICON hIcon */
], f => DrawIcon = f);

export function DrawTextA () {};
DrawTextA = createAutoLoader(lib, "DrawTextA", int /* int */, [
	HDC,                 /* in     HDC    hdc      */
	LPCSTR,              /*        LPCSTR lpchText */
	int,                 /* in     int    cchText  */
	koffi.inout(LPRECT), /* in out LPRECT lprc     */
	UINT,                /* in     UINT   format   */
], f => DrawTextA = f);

export function DrawTextW () {};
DrawTextW = createAutoLoader(lib, "DrawTextW", int /* int */, [
	HDC,                 /* in     HDC     hdc      */
	LPCWSTR,             /*        LPCWSTR lpchText */
	int,                 /* in     int     cchText  */
	koffi.inout(LPRECT), /* in out LPRECT  lprc     */
	UINT,                /* in     UINT    format   */
], f => DrawTextW = f);
export {DrawTextW as DrawText};

export function DrawTextExA () {};
DrawTextExA = createAutoLoader(lib, "DrawTextExA", int /* int */, [
	HDC,              /* in     HDC              hdc      */
	LPCSTR,           /*        LPCSTR           lpchText */
	int,              /* in     int              cchText  */
	LPRECT,           /* in out LPRECT           lprc     */
	UINT,             /* in     UINT             format   */
	LPDRAWTEXTPARAMS, /*        LPDRAWTEXTPARAMS lpdtp    */
], f => DrawTextExA = f);

export function DrawTextExW () {};
DrawTextExW = createAutoLoader(lib, "DrawTextExW", int /* int */, [
	HDC,              /* in     HDC              hdc      */
	LPCWSTR,          /*        LPCWSTR          lpchText */
	int,              /* in     int              cchText  */
	LPRECT,           /* in out LPRECT           lprc     */
	UINT,             /* in     UINT             format   */
	LPDRAWTEXTPARAMS, /*        LPDRAWTEXTPARAMS lpdtp    */
], f => DrawTextExW = f);
export {DrawTextExW as DrawTextEx};

export function GrayStringA () {};
GrayStringA = createAutoLoader(lib, "GrayStringA", BOOL /* BOOL */, [
	HDC,            /* in     HDC            hDC          */
	HBRUSH,         /* in opt HBRUSH         hBrush       */
	GRAYSTRINGPROC, /* in opt GRAYSTRINGPROC lpOutputFunc */
	LPARAM,         /* in     LPARAM         lpData       */
	int,            /* in     int            nCount       */
	int,            /* in     int            X            */
	int,            /* in     int            Y            */
	int,            /* in     int            nWidth       */
	int,            /* in     int            nHeight      */
], f => GrayStringA = f);

export function GrayStringW () {};
GrayStringW = createAutoLoader(lib, "GrayStringW", BOOL /* BOOL */, [
	HDC,            /* in     HDC            hDC          */
	HBRUSH,         /* in opt HBRUSH         hBrush       */
	GRAYSTRINGPROC, /* in opt GRAYSTRINGPROC lpOutputFunc */
	LPARAM,         /* in     LPARAM         lpData       */
	int,            /* in     int            nCount       */
	int,            /* in     int            X            */
	int,            /* in     int            Y            */
	int,            /* in     int            nWidth       */
	int,            /* in     int            nHeight      */
], f => GrayStringW = f);
export {GrayStringW as GrayString};

export function DrawStateA () {};
DrawStateA = createAutoLoader(lib, "DrawStateA", BOOL /* BOOL */, [
	HDC,           /* in     HDC           hdc         */
	HBRUSH,        /* in opt HBRUSH        hbrFore     */
	DRAWSTATEPROC, /* in opt DRAWSTATEPROC qfnCallBack */
	LPARAM,        /* in     LPARAM        lData       */
	WPARAM,        /* in     WPARAM        wData       */
	int,           /* in     int           x           */
	int,           /* in     int           y           */
	int,           /* in     int           cx          */
	int,           /* in     int           cy          */
	UINT,          /* in     UINT          uFlags      */
], f => DrawStateA = f);

export function DrawStateW () {};
DrawStateW = createAutoLoader(lib, "DrawStateW", BOOL /* BOOL */, [
	HDC,           /* in     HDC           hdc         */
	HBRUSH,        /* in opt HBRUSH        hbrFore     */
	DRAWSTATEPROC, /* in opt DRAWSTATEPROC qfnCallBack */
	LPARAM,        /* in     LPARAM        lData       */
	WPARAM,        /* in     WPARAM        wData       */
	int,           /* in     int           x           */
	int,           /* in     int           y           */
	int,           /* in     int           cx          */
	int,           /* in     int           cy          */
	UINT,          /* in     UINT          uFlags      */
], f => DrawStateW = f);
export {DrawStateW as DrawState};

export function UpdateWindow () {};
UpdateWindow = createAutoLoader(lib, "UpdateWindow", BOOL /* BOOL */, [
	HWND, /* in HWND hWnd */
], f => UpdateWindow = f);

export function SetActiveWindow () {};
SetActiveWindow = createAutoLoader(lib, "SetActiveWindow", HWND /* HWND */, [
	HWND, /* in HWND hWnd */
], f => SetActiveWindow = f);

export function GetForegroundWindow () {};
GetForegroundWindow = createAutoLoader(lib, "GetForegroundWindow", HWND /* HWND */, [
	/* void */
], f => GetForegroundWindow = f);

export function PaintDesktop () {};
PaintDesktop = createAutoLoader(lib, "PaintDesktop", BOOL /* BOOL */, [
	HDC, /* in HDC hdc */
], f => PaintDesktop = f);

export function SwitchToThisWindow () {};
SwitchToThisWindow = createAutoLoader(lib, "SwitchToThisWindow", VOID /* VOID */, [
	HWND, /* in HWND hwnd     */
	BOOL, /* in BOOL fUnknown */
], f => SwitchToThisWindow = f);

export function SetForegroundWindow () {};
SetForegroundWindow = createAutoLoader(lib, "SetForegroundWindow", BOOL /* BOOL */, [
	HWND, /* in HWND hWnd */
], f => SetForegroundWindow = f);

export function AllowSetForegroundWindow () {};
AllowSetForegroundWindow = createAutoLoader(lib, "AllowSetForegroundWindow", BOOL /* BOOL */, [
	DWORD, /* in DWORD dwProcessId */
], f => AllowSetForegroundWindow = f);

export function LockSetForegroundWindow () {};
LockSetForegroundWindow = createAutoLoader(lib, "LockSetForegroundWindow", BOOL /* BOOL */, [
	UINT, /* in UINT uLockCode */
], f => LockSetForegroundWindow = f);

export function WindowFromDC () {};
WindowFromDC = createAutoLoader(lib, "WindowFromDC", HWND /* HWND */, [
	HDC, /* in HDC hDC */
], f => WindowFromDC = f);

export function GetDC () {};
GetDC = createAutoLoader(lib, "GetDC", HDC /* HDC */, [
	HWND, /* in opt HWND hWnd */
], f => GetDC = f);

export function GetDCEx () {};
GetDCEx = createAutoLoader(lib, "GetDCEx", HDC /* HDC */, [
	HWND,  /* in opt HWND  hWnd     */
	HRGN,  /* in opt HRGN  hrgnClip */
	DWORD, /* in     DWORD flags    */
], f => GetDCEx = f);

export function GetWindowDC () {};
GetWindowDC = createAutoLoader(lib, "GetWindowDC", HDC /* HDC */, [
	HWND, /* in opt HWND hWnd */
], f => GetWindowDC = f);

export function ReleaseDC () {};
ReleaseDC = createAutoLoader(lib, "ReleaseDC", int /* int */, [
	HWND, /* in opt HWND hWnd */
	HDC,  /* in     HDC  hDC  */
], f => ReleaseDC = f);

export function BeginPaint () {};
BeginPaint = createAutoLoader(lib, "BeginPaint", HDC /* HDC */, [
	HWND,               /* in  HWND          hWnd    */
	out(LPPAINTSTRUCT), /* out LPPAINTSTRUCT lpPaint */
], f => BeginPaint = f);

export function EndPaint () {};
EndPaint = createAutoLoader(lib, "EndPaint", BOOL /* BOOL */, [
	HWND,                 /* in HWND                hWnd    */
	pointer(PAINTSTRUCT), /* in CONST PAINTSTRUCT * lpPaint */
], f => EndPaint = f);

export function GetUpdateRect () {};
GetUpdateRect = createAutoLoader(lib, "GetUpdateRect", BOOL /* BOOL */, [
	HWND,        /* in      HWND   hWnd   */
	out(LPRECT), /* out opt LPRECT lpRect */
	BOOL,        /* in      BOOL   bErase */
], f => GetUpdateRect = f);

export function GetUpdateRgn () {};
GetUpdateRgn = createAutoLoader(lib, "GetUpdateRgn", int /* int */, [
	HWND, /* in HWND hWnd   */
	HRGN, /* in HRGN hRgn   */
	BOOL, /* in BOOL bErase */
], f => GetUpdateRgn = f);

export function SetWindowRgn () {};
SetWindowRgn = createAutoLoader(lib, "SetWindowRgn", int /* int */, [
	HWND, /* in     HWND hWnd    */
	HRGN, /* in opt HRGN hRgn    */
	BOOL, /* in     BOOL bRedraw */
], f => SetWindowRgn = f);

export function GetWindowRgn () {};
GetWindowRgn = createAutoLoader(lib, "GetWindowRgn", int /* int */, [
	HWND, /* in HWND hWnd */
	HRGN, /* in HRGN hRgn */
], f => GetWindowRgn = f);

export function GetWindowRgnBox () {};
GetWindowRgnBox = createAutoLoader(lib, "GetWindowRgnBox", int /* int */, [
	HWND,        /* in  HWND   hWnd */
	out(LPRECT), /* out LPRECT lprc */
], f => GetWindowRgnBox = f);

export function ExcludeUpdateRgn () {};
ExcludeUpdateRgn = createAutoLoader(lib, "ExcludeUpdateRgn", int /* int */, [
	HDC,  /* in HDC  hDC  */
	HWND, /* in HWND hWnd */
], f => ExcludeUpdateRgn = f);

export function InvalidateRect () {};
InvalidateRect = createAutoLoader(lib, "InvalidateRect", BOOL /* BOOL */, [
	HWND,          /* in opt HWND         hWnd   */
	pointer(RECT), /* in opt CONST RECT * lpRect */
	BOOL,          /* in     BOOL         bErase */
], f => InvalidateRect = f);

export function ValidateRect () {};
ValidateRect = createAutoLoader(lib, "ValidateRect", BOOL /* BOOL */, [
	HWND,          /* in opt HWND         hWnd   */
	pointer(RECT), /* in opt CONST RECT * lpRect */
], f => ValidateRect = f);

export function InvalidateRgn () {};
InvalidateRgn = createAutoLoader(lib, "InvalidateRgn", BOOL /* BOOL */, [
	HWND, /* in     HWND hWnd   */
	HRGN, /* in opt HRGN hRgn   */
	BOOL, /* in     BOOL bErase */
], f => InvalidateRgn = f);

export function ValidateRgn () {};
ValidateRgn = createAutoLoader(lib, "ValidateRgn", BOOL /* BOOL */, [
	HWND, /* in     HWND hWnd */
	HRGN, /* in opt HRGN hRgn */
], f => ValidateRgn = f);

export function RedrawWindow () {};
RedrawWindow = createAutoLoader(lib, "RedrawWindow", BOOL /* BOOL */, [
	HWND,          /* in opt HWND         hWnd       */
	pointer(RECT), /* in opt CONST RECT * lprcUpdate */
	HRGN,          /* in opt HRGN         hrgnUpdate */
	UINT,          /* in     UINT         flags      */
], f => RedrawWindow = f);

export function LockWindowUpdate () {};
LockWindowUpdate = createAutoLoader(lib, "LockWindowUpdate", BOOL /* BOOL */, [
	HWND, /* in opt HWND hWndLock */
], f => LockWindowUpdate = f);

export function ScrollWindow () {};
ScrollWindow = createAutoLoader(lib, "ScrollWindow", BOOL /* BOOL */, [
	HWND,          /* in     HWND         hWnd       */
	int,           /* in     int          XAmount    */
	int,           /* in     int          YAmount    */
	pointer(RECT), /* in opt CONST RECT * lpRect     */
	pointer(RECT), /* in opt CONST RECT * lpClipRect */
], f => ScrollWindow = f);

export function ScrollDC () {};
ScrollDC = createAutoLoader(lib, "ScrollDC", BOOL /* BOOL */, [
	HDC,           /* in      HDC          hDC        */
	int,           /* in      int          dx         */
	int,           /* in      int          dy         */
	pointer(RECT), /* in opt  CONST RECT * lprcScroll */
	pointer(RECT), /* in opt  CONST RECT * lprcClip   */
	HRGN,          /* in opt  HRGN         hrgnUpdate */
	out(LPRECT),   /* out opt LPRECT       lprcUpdate */
], f => ScrollDC = f);

export function ScrollWindowEx () {};
ScrollWindowEx = createAutoLoader(lib, "ScrollWindowEx", int /* int */, [
	HWND,          /* in      HWND         hWnd       */
	int,           /* in      int          dx         */
	int,           /* in      int          dy         */
	pointer(RECT), /* in opt  CONST RECT * prcScroll  */
	pointer(RECT), /* in opt  CONST RECT * prcClip    */
	HRGN,          /* in opt  HRGN         hrgnUpdate */
	out(LPRECT),   /* out opt LPRECT       prcUpdate  */
	UINT,          /* in      UINT         flags      */
], f => ScrollWindowEx = f);

export function SetScrollPos () {};
SetScrollPos = createAutoLoader(lib, "SetScrollPos", int /* int */, [
	HWND, /* in HWND hWnd    */
	int,  /* in int  nBar    */
	int,  /* in int  nPos    */
	BOOL, /* in BOOL bRedraw */
], f => SetScrollPos = f);

export function GetScrollPos () {};
GetScrollPos = createAutoLoader(lib, "GetScrollPos", int /* int */, [
	HWND, /* in HWND hWnd */
	int,  /* in int  nBar */
], f => GetScrollPos = f);

export function SetScrollRange () {};
SetScrollRange = createAutoLoader(lib, "SetScrollRange", BOOL /* BOOL */, [
	HWND, /* in HWND hWnd    */
	int,  /* in int  nBar    */
	int,  /* in int  nMinPos */
	int,  /* in int  nMaxPos */
	BOOL, /* in BOOL bRedraw */
], f => SetScrollRange = f);

export function GetScrollRange () {};
GetScrollRange = createAutoLoader(lib, "GetScrollRange", BOOL /* BOOL */, [
	HWND,       /* in  HWND  hWnd     */
	int,        /* in  int   nBar     */
	out(LPINT), /* out LPINT lpMinPos */
	out(LPINT), /* out LPINT lpMaxPos */
], f => GetScrollRange = f);

export function ShowScrollBar () {};
ShowScrollBar = createAutoLoader(lib, "ShowScrollBar", BOOL /* BOOL */, [
	HWND, /* in HWND hWnd  */
	int,  /* in int  wBar  */
	BOOL, /* in BOOL bShow */
], f => ShowScrollBar = f);

export function EnableScrollBar () {};
EnableScrollBar = createAutoLoader(lib, "EnableScrollBar", BOOL /* BOOL */, [
	HWND, /* in HWND hWnd     */
	UINT, /* in UINT wSBflags */
	UINT, /* in UINT wArrows  */
], f => EnableScrollBar = f);

export function SetPropA () {};
SetPropA = createAutoLoader(lib, "SetPropA", BOOL /* BOOL */, [
	HWND,   /* in     HWND   hWnd     */
	LPCSTR, /* in     LPCSTR lpString */
	HANDLE, /* in opt HANDLE hData    */
], f => SetPropA = f);

export function SetPropW () {};
SetPropW = createAutoLoader(lib, "SetPropW", BOOL /* BOOL */, [
	HWND,    /* in     HWND    hWnd     */
	LPCWSTR, /* in     LPCWSTR lpString */
	HANDLE,  /* in opt HANDLE  hData    */
], f => SetPropW = f);
export {SetPropW as SetProp};

export function GetPropA () {};
GetPropA = createAutoLoader(lib, "GetPropA", HANDLE /* HANDLE */, [
	HWND,   /* in HWND   hWnd     */
	LPCSTR, /* in LPCSTR lpString */
], f => GetPropA = f);

export function GetPropW () {};
GetPropW = createAutoLoader(lib, "GetPropW", HANDLE /* HANDLE */, [
	HWND,    /* in HWND    hWnd     */
	LPCWSTR, /* in LPCWSTR lpString */
], f => GetPropW = f);
export {GetPropW as GetProp};

export function RemovePropA () {};
RemovePropA = createAutoLoader(lib, "RemovePropA", HANDLE /* HANDLE */, [
	HWND,   /* in HWND   hWnd     */
	LPCSTR, /* in LPCSTR lpString */
], f => RemovePropA = f);

export function RemovePropW () {};
RemovePropW = createAutoLoader(lib, "RemovePropW", HANDLE /* HANDLE */, [
	HWND,    /* in HWND    hWnd     */
	LPCWSTR, /* in LPCWSTR lpString */
], f => RemovePropW = f);
export {RemovePropW as RemoveProp};

export function EnumPropsExA () {};
EnumPropsExA = createAutoLoader(lib, "EnumPropsExA", int /* int */, [
	HWND,            /* in HWND            hWnd       */
	PROPENUMPROCEXA, /* in PROPENUMPROCEXA lpEnumFunc */
	LPARAM,          /* in LPARAM          lParam     */
], f => EnumPropsExA = f);

export function EnumPropsExW () {};
EnumPropsExW = createAutoLoader(lib, "EnumPropsExW", int /* int */, [
	HWND,            /* in HWND            hWnd       */
	PROPENUMPROCEXW, /* in PROPENUMPROCEXW lpEnumFunc */
	LPARAM,          /* in LPARAM          lParam     */
], f => EnumPropsExW = f);
export {EnumPropsExW as EnumPropsEx};

export function EnumPropsA () {};
EnumPropsA = createAutoLoader(lib, "EnumPropsA", int /* int */, [
	HWND,          /* in HWND          hWnd       */
	PROPENUMPROCA, /* in PROPENUMPROCA lpEnumFunc */
], f => EnumPropsA = f);

export function EnumPropsW () {};
EnumPropsW = createAutoLoader(lib, "EnumPropsW", int /* int */, [
	HWND,          /* in HWND          hWnd       */
	PROPENUMPROCW, /* in PROPENUMPROCW lpEnumFunc */
], f => EnumPropsW = f);
export {EnumPropsW as EnumProps};

export function SetWindowTextA () {};
SetWindowTextA = createAutoLoader(lib, "SetWindowTextA", BOOL /* BOOL */, [
	HWND,   /* in     HWND   hWnd     */
	LPCSTR, /* in opt LPCSTR lpString */
], f => SetWindowTextA = f);

export function SetWindowTextW () {};
SetWindowTextW = createAutoLoader(lib, "SetWindowTextW", BOOL /* BOOL */, [
	HWND,    /* in     HWND    hWnd     */
	LPCWSTR, /* in opt LPCWSTR lpString */
], f => SetWindowTextW = f);
export {SetWindowTextW as SetWindowText};

export function GetWindowTextA () {};
GetWindowTextA = createAutoLoader(lib, "GetWindowTextA", int /* int */, [
	HWND,  /* in HWND  hWnd      */
	LPSTR, /*    LPSTR lpString  */
	int,   /* in int   nMaxCount */
], f => GetWindowTextA = f);

export function GetWindowTextW () {};
GetWindowTextW = createAutoLoader(lib, "GetWindowTextW", int /* int */, [
	HWND,   /* in HWND   hWnd      */
	LPWSTR, /*    LPWSTR lpString  */
	int,    /* in int    nMaxCount */
], f => GetWindowTextW = f);
export {GetWindowTextW as GetWindowText};

export function GetWindowTextLengthA () {};
GetWindowTextLengthA = createAutoLoader(lib, "GetWindowTextLengthA", int /* int */, [
	HWND, /* in HWND hWnd */
], f => GetWindowTextLengthA = f);

export function GetWindowTextLengthW () {};
GetWindowTextLengthW = createAutoLoader(lib, "GetWindowTextLengthW", int /* int */, [
	HWND, /* in HWND hWnd */
], f => GetWindowTextLengthW = f);
export {GetWindowTextLengthW as GetWindowTextLength};

export function GetClientRect () {};
GetClientRect = createAutoLoader(lib, "GetClientRect", BOOL /* BOOL */, [
	HWND,        /* in  HWND   hWnd   */
	out(LPRECT), /* out LPRECT lpRect */
], f => GetClientRect = f);

export function GetWindowRect () {};
GetWindowRect = createAutoLoader(lib, "GetWindowRect", BOOL /* BOOL */, [
	HWND,        /* in  HWND   hWnd   */
	out(LPRECT), /* out LPRECT lpRect */
], f => GetWindowRect = f);

export function AdjustWindowRect () {};
AdjustWindowRect = createAutoLoader(lib, "AdjustWindowRect", BOOL /* BOOL */, [
	inout(LPRECT), /* in out LPRECT lpRect  */
	DWORD,         /* in     DWORD  dwStyle */
	BOOL,          /* in     BOOL   bMenu   */
], f => AdjustWindowRect = f);

export function AdjustWindowRectEx () {};
AdjustWindowRectEx = createAutoLoader(lib, "AdjustWindowRectEx", BOOL /* BOOL */, [
	inout(LPRECT), /* in out LPRECT lpRect    */
	DWORD,         /* in     DWORD  dwStyle   */
	BOOL,          /* in     BOOL   bMenu     */
	DWORD,         /* in     DWORD  dwExStyle */
], f => AdjustWindowRectEx = f);

export function AdjustWindowRectExForDpi () {};
AdjustWindowRectExForDpi = createAutoLoader(lib, "AdjustWindowRectExForDpi", BOOL /* BOOL */, [
	inout(LPRECT), /* in out LPRECT lpRect    */
	DWORD,         /* in     DWORD  dwStyle   */
	BOOL,          /* in     BOOL   bMenu     */
	DWORD,         /* in     DWORD  dwExStyle */
	UINT,          /* in     UINT   dpi       */
], f => AdjustWindowRectExForDpi = f);

export function SetWindowContextHelpId () {};
SetWindowContextHelpId = createAutoLoader(lib, "SetWindowContextHelpId", BOOL /* BOOL */, [
	HWND,  /* in HWND   */
	DWORD, /* in DWORD  */
], f => SetWindowContextHelpId = f);

export function GetWindowContextHelpId () {};
GetWindowContextHelpId = createAutoLoader(lib, "GetWindowContextHelpId", DWORD /* DWORD */, [
	HWND, /* in HWND  */
], f => GetWindowContextHelpId = f);

export function SetMenuContextHelpId () {};
SetMenuContextHelpId = createAutoLoader(lib, "SetMenuContextHelpId", BOOL /* BOOL */, [
	HMENU, /* in HMENU  */
	DWORD, /* in DWORD  */
], f => SetMenuContextHelpId = f);

export function GetMenuContextHelpId () {};
GetMenuContextHelpId = createAutoLoader(lib, "GetMenuContextHelpId", DWORD /* DWORD */, [
	HMENU, /* in HMENU  */
], f => GetMenuContextHelpId = f);

export function MessageBoxA () {};
MessageBoxA = createAutoLoader(lib, "MessageBoxA", int /* int */, [
	HWND,   /* in opt HWND   hWnd      */
	LPCSTR, /* in opt LPCSTR lpText    */
	LPCSTR, /* in opt LPCSTR lpCaption */
	UINT,   /* in     UINT   uType     */
], f => MessageBoxA = f);

export function MessageBoxW () {};
MessageBoxW = createAutoLoader(lib, "MessageBoxW", int /* int */, [
	HWND,    /* in opt HWND    hWnd      */
	LPCWSTR, /* in opt LPCWSTR lpText    */
	LPCWSTR, /* in opt LPCWSTR lpCaption */
	UINT,    /* in     UINT    uType     */
], f => MessageBoxW = f);
export {MessageBoxW as MessageBox};

export function MessageBoxExA () {};
MessageBoxExA = createAutoLoader(lib, "MessageBoxExA", int /* int */, [
	HWND,   /* in opt HWND   hWnd        */
	LPCSTR, /* in opt LPCSTR lpText      */
	LPCSTR, /* in opt LPCSTR lpCaption   */
	UINT,   /* in     UINT   uType       */
	WORD,   /* in     WORD   wLanguageId */
], f => MessageBoxExA = f);

export function MessageBoxExW () {};
MessageBoxExW = createAutoLoader(lib, "MessageBoxExW", int /* int */, [
	HWND,    /* in opt HWND    hWnd        */
	LPCWSTR, /* in opt LPCWSTR lpText      */
	LPCWSTR, /* in opt LPCWSTR lpCaption   */
	UINT,    /* in     UINT    uType       */
	WORD,    /* in     WORD    wLanguageId */
], f => MessageBoxExW = f);
export {MessageBoxExW as MessageBoxEx};

export function MessageBoxIndirectA () {};
MessageBoxIndirectA = createAutoLoader(lib, "MessageBoxIndirectA", int /* int */, [
	pointer(MSGBOXPARAMSA), /* in CONST MSGBOXPARAMSA * lpmbp */
], f => MessageBoxIndirectA = f);

export function MessageBoxIndirectW () {};
MessageBoxIndirectW = createAutoLoader(lib, "MessageBoxIndirectW", int /* int */, [
	pointer(MSGBOXPARAMSW), /* in CONST MSGBOXPARAMSW * lpmbp */
], f => MessageBoxIndirectW = f);
export {MessageBoxIndirectW as MessageBoxIndirect};

export function MessageBeep () {};
MessageBeep = createAutoLoader(lib, "MessageBeep", BOOL /* BOOL */, [
	UINT, /* in UINT uType */
], f => MessageBeep = f);

export function ShowCursor () {};
ShowCursor = createAutoLoader(lib, "ShowCursor", int /* int */, [
	BOOL, /* in BOOL bShow */
], f => ShowCursor = f);

export function SetCursorPos () {};
SetCursorPos = createAutoLoader(lib, "SetCursorPos", BOOL /* BOOL */, [
	int, /* in int X */
	int, /* in int Y */
], f => SetCursorPos = f);

export function SetPhysicalCursorPos () {};
SetPhysicalCursorPos = createAutoLoader(lib, "SetPhysicalCursorPos", BOOL /* BOOL */, [
	int, /* in int X */
	int, /* in int Y */
], f => SetPhysicalCursorPos = f);

export function SetCursor () {};
SetCursor = createAutoLoader(lib, "SetCursor", HCURSOR /* HCURSOR */, [
	HCURSOR, /* in opt HCURSOR hCursor */
], f => SetCursor = f);

export function GetCursorPos () {};
GetCursorPos = createAutoLoader(lib, "GetCursorPos", BOOL /* BOOL */, [
	out(LPPOINT), /* out LPPOINT lpPoint */
], f => GetCursorPos = f);

export function GetPhysicalCursorPos () {};
GetPhysicalCursorPos = createAutoLoader(lib, "GetPhysicalCursorPos", BOOL /* BOOL */, [
	out(LPPOINT), /* out LPPOINT lpPoint */
], f => GetPhysicalCursorPos = f);

export function GetClipCursor () {};
GetClipCursor = createAutoLoader(lib, "GetClipCursor", BOOL /* BOOL */, [
	out(LPRECT), /* out LPRECT lpRect */
], f => GetClipCursor = f);

export function GetCursor () {};
GetCursor = createAutoLoader(lib, "GetCursor", HCURSOR /* HCURSOR */, [
	/* void */
], f => GetCursor = f);

export function CreateCaret () {};
CreateCaret = createAutoLoader(lib, "CreateCaret", BOOL /* BOOL */, [
	HWND,    /* in     HWND    hWnd    */
	HBITMAP, /* in opt HBITMAP hBitmap */
	int,     /* in     int     nWidth  */
	int,     /* in     int     nHeight */
], f => CreateCaret = f);

export function GetCaretBlinkTime () {};
GetCaretBlinkTime = createAutoLoader(lib, "GetCaretBlinkTime", UINT /* UINT */, [
	/* void */
], f => GetCaretBlinkTime = f);

export function SetCaretBlinkTime () {};
SetCaretBlinkTime = createAutoLoader(lib, "SetCaretBlinkTime", BOOL /* BOOL */, [
	UINT, /* in UINT uMSeconds */
], f => SetCaretBlinkTime = f);

export function DestroyCaret () {};
DestroyCaret = createAutoLoader(lib, "DestroyCaret", BOOL /* BOOL */, [
	/* void */
], f => DestroyCaret = f);

export function HideCaret () {};
HideCaret = createAutoLoader(lib, "HideCaret", BOOL /* BOOL */, [
	HWND, /* in opt HWND hWnd */
], f => HideCaret = f);

export function ShowCaret () {};
ShowCaret = createAutoLoader(lib, "ShowCaret", BOOL /* BOOL */, [
	HWND, /* in opt HWND hWnd */
], f => ShowCaret = f);

export function SetCaretPos () {};
SetCaretPos = createAutoLoader(lib, "SetCaretPos", BOOL /* BOOL */, [
	int, /* in int X */
	int, /* in int Y */
], f => SetCaretPos = f);

export function GetCaretPos () {};
GetCaretPos = createAutoLoader(lib, "GetCaretPos", BOOL /* BOOL */, [
	out(LPPOINT), /* out LPPOINT lpPoint */
], f => GetCaretPos = f);

export function ClientToScreen () {};
ClientToScreen = createAutoLoader(lib, "ClientToScreen", BOOL /* BOOL */, [
	HWND,           /* in     HWND    hWnd    */
	inout(LPPOINT), /* in out LPPOINT lpPoint */
], f => ClientToScreen = f);

export function ScreenToClient () {};
ScreenToClient = createAutoLoader(lib, "ScreenToClient", BOOL /* BOOL */, [
	HWND,           /* in     HWND    hWnd    */
	inout(LPPOINT), /* in out LPPOINT lpPoint */
], f => ScreenToClient = f);

export function LogicalToPhysicalPoint () {};
LogicalToPhysicalPoint = createAutoLoader(lib, "LogicalToPhysicalPoint", BOOL /* BOOL */, [
	HWND,           /* in     HWND    hWnd    */
	inout(LPPOINT), /* in out LPPOINT lpPoint */
], f => LogicalToPhysicalPoint = f);

export function PhysicalToLogicalPoint () {};
PhysicalToLogicalPoint = createAutoLoader(lib, "PhysicalToLogicalPoint", BOOL /* BOOL */, [
	HWND,           /* in     HWND    hWnd    */
	inout(LPPOINT), /* in out LPPOINT lpPoint */
], f => PhysicalToLogicalPoint = f);

export function LogicalToPhysicalPointForPerMonitorDPI () {};
LogicalToPhysicalPointForPerMonitorDPI = createAutoLoader(lib, "LogicalToPhysicalPointForPerMonitorDPI", BOOL /* BOOL */, [
	HWND,           /* in opt HWND    hWnd    */
	inout(LPPOINT), /* in out LPPOINT lpPoint */
], f => LogicalToPhysicalPointForPerMonitorDPI = f);

export function PhysicalToLogicalPointForPerMonitorDPI () {};
PhysicalToLogicalPointForPerMonitorDPI = createAutoLoader(lib, "PhysicalToLogicalPointForPerMonitorDPI", BOOL /* BOOL */, [
	HWND,           /* in opt HWND    hWnd    */
	inout(LPPOINT), /* in out LPPOINT lpPoint */
], f => PhysicalToLogicalPointForPerMonitorDPI = f);

export function WindowFromPoint () {};
WindowFromPoint = createAutoLoader(lib, "WindowFromPoint", HWND /* HWND */, [
	POINT, /* in POINT Point */
], f => WindowFromPoint = f);

export function WindowFromPhysicalPoint () {};
WindowFromPhysicalPoint = createAutoLoader(lib, "WindowFromPhysicalPoint", HWND /* HWND */, [
	POINT, /* in POINT Point */
], f => WindowFromPhysicalPoint = f);

export function ChildWindowFromPoint () {};
ChildWindowFromPoint = createAutoLoader(lib, "ChildWindowFromPoint", HWND /* HWND */, [
	HWND,  /* in HWND  hWndParent */
	POINT, /* in POINT Point      */
], f => ChildWindowFromPoint = f);

export function ClipCursor () {};
ClipCursor = createAutoLoader(lib, "ClipCursor", BOOL /* BOOL */, [
	pointer(RECT), /* in opt CONST RECT * lpRect */
], f => ClipCursor = f);

export function ChildWindowFromPointEx () {};
ChildWindowFromPointEx = createAutoLoader(lib, "ChildWindowFromPointEx", HWND /* HWND */, [
	HWND,  /* in HWND  hwnd  */
	POINT, /* in POINT pt    */
	UINT,  /* in UINT  flags */
], f => ChildWindowFromPointEx = f);

export function GetSysColor () {};
GetSysColor = createAutoLoader(lib, "GetSysColor", DWORD /* DWORD */, [
	int, /* in int nIndex */
], f => GetSysColor = f);

export function GetSysColorBrush () {};
GetSysColorBrush = createAutoLoader(lib, "GetSysColorBrush", HBRUSH /* HBRUSH */, [
	int, /* in int nIndex */
], f => GetSysColorBrush = f);

export function SetSysColors () {};
SetSysColors = createAutoLoader(lib, "SetSysColors", BOOL /* BOOL */, [
	int,               /* in int              cElements    */
	pointer(INT),      /*    CONST INT *      lpaElements  */
	pointer(COLORREF), /*    CONST COLORREF * lpaRgbValues */
], f => SetSysColors = f);

export function DrawFocusRect () {};
DrawFocusRect = createAutoLoader(lib, "DrawFocusRect", BOOL /* BOOL */, [
	HDC,           /* in HDC          hDC  */
	pointer(RECT), /* in CONST RECT * lprc */
], f => DrawFocusRect = f);

export function FillRect () {};
FillRect = createAutoLoader(lib, "FillRect", int /* int */, [
	HDC,           /* in HDC          hDC  */
	pointer(RECT), /* in CONST RECT * lprc */
	HBRUSH,        /* in HBRUSH       hbr  */
], f => FillRect = f);

export function FrameRect () {};
FrameRect = createAutoLoader(lib, "FrameRect", int /* int */, [
	HDC,           /* in HDC          hDC  */
	pointer(RECT), /* in CONST RECT * lprc */
	HBRUSH,        /* in HBRUSH       hbr  */
], f => FrameRect = f);

export function InvertRect () {};
InvertRect = createAutoLoader(lib, "InvertRect", BOOL /* BOOL */, [
	HDC,           /* in HDC          hDC  */
	pointer(RECT), /* in CONST RECT * lprc */
], f => InvertRect = f);

export function SetRect () {};
SetRect = createAutoLoader(lib, "SetRect", BOOL /* BOOL */, [
	out(LPRECT), /* out LPRECT lprc    */
	int,         /* in  int    xLeft   */
	int,         /* in  int    yTop    */
	int,         /* in  int    xRight  */
	int,         /* in  int    yBottom */
], f => SetRect = f);

export function SetRectEmpty () {};
SetRectEmpty = createAutoLoader(lib, "SetRectEmpty", BOOL /* BOOL */, [
	out(LPRECT), /* out LPRECT lprc */
], f => SetRectEmpty = f);

export function CopyRect () {};
CopyRect = createAutoLoader(lib, "CopyRect", BOOL /* BOOL */, [
	out(LPRECT),   /* out LPRECT       lprcDst */
	pointer(RECT), /* in  CONST RECT * lprcSrc */
], f => CopyRect = f);

export function InflateRect () {};
InflateRect = createAutoLoader(lib, "InflateRect", BOOL /* BOOL */, [
	inout(LPRECT), /* in out LPRECT lprc */
	int,           /* in     int    dx   */
	int,           /* in     int    dy   */
], f => InflateRect = f);

export function IntersectRect () {};
IntersectRect = createAutoLoader(lib, "IntersectRect", BOOL /* BOOL */, [
	out(LPRECT),   /* out LPRECT       lprcDst  */
	pointer(RECT), /* in  CONST RECT * lprcSrc1 */
	pointer(RECT), /* in  CONST RECT * lprcSrc2 */
], f => IntersectRect = f);

export function UnionRect () {};
UnionRect = createAutoLoader(lib, "UnionRect", BOOL /* BOOL */, [
	out(LPRECT),   /* out LPRECT       lprcDst  */
	pointer(RECT), /* in  CONST RECT * lprcSrc1 */
	pointer(RECT), /* in  CONST RECT * lprcSrc2 */
], f => UnionRect = f);

export function SubtractRect () {};
SubtractRect = createAutoLoader(lib, "SubtractRect", BOOL /* BOOL */, [
	out(LPRECT),   /* out LPRECT       lprcDst  */
	pointer(RECT), /* in  CONST RECT * lprcSrc1 */
	pointer(RECT), /* in  CONST RECT * lprcSrc2 */
], f => SubtractRect = f);

export function OffsetRect () {};
OffsetRect = createAutoLoader(lib, "OffsetRect", BOOL /* BOOL */, [
	inout(LPRECT), /* in out LPRECT lprc */
	int,           /* in     int    dx   */
	int,           /* in     int    dy   */
], f => OffsetRect = f);

export function IsRectEmpty () {};
IsRectEmpty = createAutoLoader(lib, "IsRectEmpty", BOOL /* BOOL */, [
	pointer(RECT), /* in CONST RECT * lprc */
], f => IsRectEmpty = f);

export function EqualRect () {};
EqualRect = createAutoLoader(lib, "EqualRect", BOOL /* BOOL */, [
	pointer(RECT), /* in CONST RECT * lprc1 */
	pointer(RECT), /* in CONST RECT * lprc2 */
], f => EqualRect = f);

export function PtInRect () {};
PtInRect = createAutoLoader(lib, "PtInRect", BOOL /* BOOL */, [
	pointer(RECT), /* in CONST RECT * lprc */
	POINT,         /* in POINT        pt   */
], f => PtInRect = f);

export function GetWindowWord () {};
GetWindowWord = createAutoLoader(lib, "GetWindowWord", WORD /* WORD */, [
	HWND, /* in HWND hWnd   */
	int,  /* in int  nIndex */
], f => GetWindowWord = f);

export function SetWindowWord () {};
SetWindowWord = createAutoLoader(lib, "SetWindowWord", WORD /* WORD */, [
	HWND, /* in HWND hWnd     */
	int,  /* in int  nIndex   */
	WORD, /* in WORD wNewWord */
], f => SetWindowWord = f);

export function GetWindowLongA () {};
GetWindowLongA = createAutoLoader(lib, "GetWindowLongA", LONG /* LONG */, [
	HWND, /* in HWND hWnd   */
	int,  /* in int  nIndex */
], f => GetWindowLongA = f);

export function GetWindowLongW () {};
GetWindowLongW = createAutoLoader(lib, "GetWindowLongW", LONG /* LONG */, [
	HWND, /* in HWND hWnd   */
	int,  /* in int  nIndex */
], f => GetWindowLongW = f);
export {GetWindowLongW as GetWindowLong};

export function SetWindowLongA () {};
SetWindowLongA = createAutoLoader(lib, "SetWindowLongA", LONG /* LONG */, [
	HWND, /* in HWND hWnd      */
	int,  /* in int  nIndex    */
	LONG, /* in LONG dwNewLong */
], f => SetWindowLongA = f);

export function SetWindowLongW () {};
SetWindowLongW = createAutoLoader(lib, "SetWindowLongW", LONG /* LONG */, [
	HWND, /* in HWND hWnd      */
	int,  /* in int  nIndex    */
	LONG, /* in LONG dwNewLong */
], f => SetWindowLongW = f);
export {SetWindowLongW as SetWindowLong};

export function GetWindowLongPtrA () {};
GetWindowLongPtrA = createAutoLoader(lib, "GetWindowLongPtrA", LONG_PTR /* LONG_PTR */, [
	HWND, /* in HWND hWnd   */
	int,  /* in int  nIndex */
], f => GetWindowLongPtrA = f);

export function GetWindowLongPtrW () {};
GetWindowLongPtrW = createAutoLoader(lib, "GetWindowLongPtrW", LONG_PTR /* LONG_PTR */, [
	HWND, /* in HWND hWnd   */
	int,  /* in int  nIndex */
], f => GetWindowLongPtrW = f);
export {GetWindowLongPtrW as GetWindowLongPtr};

export function SetWindowLongPtrA () {};
SetWindowLongPtrA = createAutoLoader(lib, "SetWindowLongPtrA", LONG_PTR /* LONG_PTR */, [
	HWND,     /* in HWND     hWnd      */
	int,      /* in int      nIndex    */
	LONG_PTR, /* in LONG_PTR dwNewLong */
], f => SetWindowLongPtrA = f);

export function SetWindowLongPtrW () {};
SetWindowLongPtrW = createAutoLoader(lib, "SetWindowLongPtrW", LONG_PTR /* LONG_PTR */, [
	HWND,     /* in HWND     hWnd      */
	int,      /* in int      nIndex    */
	LONG_PTR, /* in LONG_PTR dwNewLong */
], f => SetWindowLongPtrW = f);
export {SetWindowLongPtrW as SetWindowLongPtr};

export function GetClassWord () {};
GetClassWord = createAutoLoader(lib, "GetClassWord", WORD /* WORD */, [
	HWND, /* in HWND hWnd   */
	int,  /* in int  nIndex */
], f => GetClassWord = f);

export function SetClassWord () {};
SetClassWord = createAutoLoader(lib, "SetClassWord", WORD /* WORD */, [
	HWND, /* in HWND hWnd     */
	int,  /* in int  nIndex   */
	WORD, /* in WORD wNewWord */
], f => SetClassWord = f);

export function GetClassLongA () {};
GetClassLongA = createAutoLoader(lib, "GetClassLongA", DWORD /* DWORD */, [
	HWND, /* in HWND hWnd   */
	int,  /* in int  nIndex */
], f => GetClassLongA = f);

export function GetClassLongW () {};
GetClassLongW = createAutoLoader(lib, "GetClassLongW", DWORD /* DWORD */, [
	HWND, /* in HWND hWnd   */
	int,  /* in int  nIndex */
], f => GetClassLongW = f);
export {GetClassLongW as GetClassLong};

export function SetClassLongA () {};
SetClassLongA = createAutoLoader(lib, "SetClassLongA", DWORD /* DWORD */, [
	HWND, /* in HWND hWnd      */
	int,  /* in int  nIndex    */
	LONG, /* in LONG dwNewLong */
], f => SetClassLongA = f);

export function SetClassLongW () {};
SetClassLongW = createAutoLoader(lib, "SetClassLongW", DWORD /* DWORD */, [
	HWND, /* in HWND hWnd      */
	int,  /* in int  nIndex    */
	LONG, /* in LONG dwNewLong */
], f => SetClassLongW = f);
export {SetClassLongW as SetClassLong};

export function GetClassLongPtrA () {};
GetClassLongPtrA = createAutoLoader(lib, "GetClassLongPtrA", ULONG_PTR /* ULONG_PTR */, [
	HWND, /* in HWND hWnd   */
	int,  /* in int  nIndex */
], f => GetClassLongPtrA = f);

export function GetClassLongPtrW () {};
GetClassLongPtrW = createAutoLoader(lib, "GetClassLongPtrW", ULONG_PTR /* ULONG_PTR */, [
	HWND, /* in HWND hWnd   */
	int,  /* in int  nIndex */
], f => GetClassLongPtrW = f);
export {GetClassLongPtrW as GetClassLongPtr};

export function SetClassLongPtrA () {};
SetClassLongPtrA = createAutoLoader(lib, "SetClassLongPtrA", ULONG_PTR /* ULONG_PTR */, [
	HWND,     /* in HWND     hWnd      */
	int,      /* in int      nIndex    */
	LONG_PTR, /* in LONG_PTR dwNewLong */
], f => SetClassLongPtrA = f);

export function SetClassLongPtrW () {};
SetClassLongPtrW = createAutoLoader(lib, "SetClassLongPtrW", ULONG_PTR /* ULONG_PTR */, [
	HWND,     /* in HWND     hWnd      */
	int,      /* in int      nIndex    */
	LONG_PTR, /* in LONG_PTR dwNewLong */
], f => SetClassLongPtrW = f);
export {SetClassLongPtrW as SetClassLongPtr};

export function GetProcessDefaultLayout () {};
GetProcessDefaultLayout = createAutoLoader(lib, "GetProcessDefaultLayout", BOOL /* BOOL */, [
	out(pointer(DWORD)), /* out DWORD * pdwDefaultLayout */
], f => GetProcessDefaultLayout = f);

export function SetProcessDefaultLayout () {};
SetProcessDefaultLayout = createAutoLoader(lib, "SetProcessDefaultLayout", BOOL /* BOOL */, [
	DWORD, /* in DWORD dwDefaultLayout */
], f => SetProcessDefaultLayout = f);

export function GetDesktopWindow () {};
GetDesktopWindow = createAutoLoader(lib, "GetDesktopWindow", HWND /* HWND */, [
	/* void */
], f => GetDesktopWindow = f);

export function GetParent () {};
GetParent = createAutoLoader(lib, "GetParent", HWND /* HWND */, [
	HWND, /* in HWND hWnd */
], f => GetParent = f);

export function SetParent () {};
SetParent = createAutoLoader(lib, "SetParent", HWND /* HWND */, [
	HWND, /* in     HWND hWndChild     */
	HWND, /* in opt HWND hWndNewParent */
], f => SetParent = f);

export function EnumChildWindows () {};
EnumChildWindows = createAutoLoader(lib, "EnumChildWindows", BOOL /* BOOL */, [
	HWND,        /* in opt HWND        hWndParent */
	WNDENUMPROC, /* in     WNDENUMPROC lpEnumFunc */
	LPARAM,      /* in     LPARAM      lParam     */
], f => EnumChildWindows = f);

export function FindWindowA () {};
FindWindowA = createAutoLoader(lib, "FindWindowA", HWND /* HWND */, [
	LPCSTR, /* in opt LPCSTR lpClassName  */
	LPCSTR, /* in opt LPCSTR lpWindowName */
], f => FindWindowA = f);

export function FindWindowW () {};
FindWindowW = createAutoLoader(lib, "FindWindowW", HWND /* HWND */, [
	LPCWSTR, /* in opt LPCWSTR lpClassName  */
	LPCWSTR, /* in opt LPCWSTR lpWindowName */
], f => FindWindowW = f);
export {FindWindowW as FindWindow};

export function FindWindowExA () {};
FindWindowExA = createAutoLoader(lib, "FindWindowExA", HWND /* HWND */, [
	HWND,   /* in opt HWND   hWndParent     */
	HWND,   /* in opt HWND   hWndChildAfter */
	LPCSTR, /* in opt LPCSTR lpszClass      */
	LPCSTR, /* in opt LPCSTR lpszWindow     */
], f => FindWindowExA = f);

export function FindWindowExW () {};
FindWindowExW = createAutoLoader(lib, "FindWindowExW", HWND /* HWND */, [
	HWND,    /* in opt HWND    hWndParent     */
	HWND,    /* in opt HWND    hWndChildAfter */
	LPCWSTR, /* in opt LPCWSTR lpszClass      */
	LPCWSTR, /* in opt LPCWSTR lpszWindow     */
], f => FindWindowExW = f);
export {FindWindowExW as FindWindowEx};

export function GetShellWindow () {};
GetShellWindow = createAutoLoader(lib, "GetShellWindow", HWND /* HWND */, [
	/* void */
], f => GetShellWindow = f);

export function RegisterShellHookWindow () {};
RegisterShellHookWindow = createAutoLoader(lib, "RegisterShellHookWindow", BOOL /* BOOL */, [
	HWND, /* in HWND hwnd */
], f => RegisterShellHookWindow = f);

export function DeregisterShellHookWindow () {};
DeregisterShellHookWindow = createAutoLoader(lib, "DeregisterShellHookWindow", BOOL /* BOOL */, [
	HWND, /* in HWND hwnd */
], f => DeregisterShellHookWindow = f);

export function EnumWindows () {};
EnumWindows = createAutoLoader(lib, "EnumWindows", BOOL /* BOOL */, [
	WNDENUMPROC, /* in WNDENUMPROC lpEnumFunc */
	LPARAM,      /* in LPARAM      lParam     */
], f => EnumWindows = f);

export function EnumThreadWindows () {};
EnumThreadWindows = createAutoLoader(lib, "EnumThreadWindows", BOOL /* BOOL */, [
	DWORD,       /* in DWORD       dwThreadId */
	WNDENUMPROC, /* in WNDENUMPROC lpfn       */
	LPARAM,      /* in LPARAM      lParam     */
], f => EnumThreadWindows = f);

export function GetTopWindow () {};
GetTopWindow = createAutoLoader(lib, "GetTopWindow", HWND /* HWND */, [
	HWND, /* in opt HWND hWnd */
], f => GetTopWindow = f);

export function GetWindowThreadProcessId () {};
GetWindowThreadProcessId = createAutoLoader(lib, "GetWindowThreadProcessId", DWORD /* DWORD */, [
	HWND,         /* in      HWND    hWnd          */
	out(LPDWORD), /* out opt LPDWORD lpdwProcessId */
], f => GetWindowThreadProcessId = f);

export function IsGUIThread () {};
IsGUIThread = createAutoLoader(lib, "IsGUIThread", BOOL /* BOOL */, [
	BOOL, /* in BOOL bConvert */
], f => IsGUIThread = f);

export function GetLastActivePopup () {};
GetLastActivePopup = createAutoLoader(lib, "GetLastActivePopup", HWND /* HWND */, [
	HWND, /* in HWND hWnd */
], f => GetLastActivePopup = f);

export function GetWindow () {};
GetWindow = createAutoLoader(lib, "GetWindow", HWND /* HWND */, [
	HWND, /* in HWND hWnd */
	UINT, /* in UINT uCmd */
], f => GetWindow = f);

// #ifdef STRICT
export function SetWindowsHookA () {};
SetWindowsHookA = createAutoLoader(lib, "SetWindowsHookA", HHOOK /* HHOOK */, [
	int,      /* in int      nFilterType   */
	HOOKPROC, /* in HOOKPROC pfnFilterProc */
], f => SetWindowsHookA = f);

export function SetWindowsHookW () {};
SetWindowsHookW = createAutoLoader(lib, "SetWindowsHookW", HHOOK /* HHOOK */, [
	int,      /* in int      nFilterType   */
	HOOKPROC, /* in HOOKPROC pfnFilterProc */
], f => SetWindowsHookW = f);
export {SetWindowsHookW as SetWindowsHook};

// #else
// export function SetWindowsHookA () {};
// SetWindowsHookA = createAutoLoader(lib, "SetWindowsHookA", HOOKPROC /* HOOKPROC */, [
// 	int,      /* in int      nFilterType   */
// 	HOOKPROC, /* in HOOKPROC pfnFilterProc */
// ], f => SetWindowsHookA = f);
//
// export function SetWindowsHookW () {};
// SetWindowsHookW = createAutoLoader(lib, "SetWindowsHookW", HOOKPROC /* HOOKPROC */, [
// 	int,      /* in int      nFilterType   */
// 	HOOKPROC, /* in HOOKPROC pfnFilterProc */
// ], f => SetWindowsHookW = f);
// #endif

export function UnhookWindowsHook () {};
UnhookWindowsHook = createAutoLoader(lib, "UnhookWindowsHook", BOOL /* BOOL */, [
	int,      /* in int      nCode         */
	HOOKPROC, /* in HOOKPROC pfnFilterProc */
], f => UnhookWindowsHook = f);

export function SetWindowsHookExA () {};
SetWindowsHookExA = createAutoLoader(lib, "SetWindowsHookExA", HHOOK /* HHOOK */, [
	int,       /* in     int       idHook     */
	HOOKPROC,  /* in     HOOKPROC  lpfn       */
	HINSTANCE, /* in opt HINSTANCE hmod       */
	DWORD,     /* in     DWORD     dwThreadId */
], f => SetWindowsHookExA = f);

export function SetWindowsHookExW () {};
SetWindowsHookExW = createAutoLoader(lib, "SetWindowsHookExW", HHOOK /* HHOOK */, [
	int,       /* in     int       idHook     */
	HOOKPROC,  /* in     HOOKPROC  lpfn       */
	HINSTANCE, /* in opt HINSTANCE hmod       */
	DWORD,     /* in     DWORD     dwThreadId */
], f => SetWindowsHookExW = f);
export {SetWindowsHookExW as SetWindowsHookEx};

export function UnhookWindowsHookEx () {};
UnhookWindowsHookEx = createAutoLoader(lib, "UnhookWindowsHookEx", BOOL /* BOOL */, [
	HHOOK, /* in HHOOK hhk */
], f => UnhookWindowsHookEx = f);

export function CallNextHookEx () {};
CallNextHookEx = createAutoLoader(lib, "CallNextHookEx", LRESULT /* LRESULT */, [
	HHOOK,  /* in opt HHOOK  hhk    */
	int,    /* in     int    nCode  */
	WPARAM, /* in     WPARAM wParam */
	LPARAM, /* in     LPARAM lParam */
], f => CallNextHookEx = f);

export function CheckMenuRadioItem () {};
CheckMenuRadioItem = createAutoLoader(lib, "CheckMenuRadioItem", BOOL /* BOOL */, [
	HMENU, /* in HMENU hmenu */
	UINT,  /* in UINT  first */
	UINT,  /* in UINT  last  */
	UINT,  /* in UINT  check */
	UINT,  /* in UINT  flags */
], f => CheckMenuRadioItem = f);

export function LoadBitmapA () {};
LoadBitmapA = createAutoLoader(lib, "LoadBitmapA", HBITMAP /* HBITMAP */, [
	HINSTANCE, /* in opt HINSTANCE hInstance    */
	LPCSTR,    /* in     LPCSTR    lpBitmapName */
], f => LoadBitmapA = f);

export function LoadBitmapW () {};
LoadBitmapW = createAutoLoader(lib, "LoadBitmapW", HBITMAP /* HBITMAP */, [
	HINSTANCE, /* in opt HINSTANCE hInstance    */
	LPCWSTR,   /* in     LPCWSTR   lpBitmapName */
], f => LoadBitmapW = f);
export {LoadBitmapW as LoadBitmap};

export function LoadCursorA () {};
LoadCursorA = createAutoLoader(lib, "LoadCursorA", HCURSOR /* HCURSOR */, [
	HINSTANCE, /* in opt HINSTANCE hInstance    */
	LPCSTR,    /* in     LPCSTR    lpCursorName */
], f => LoadCursorA = f);

export function LoadCursorW () {};
LoadCursorW = createAutoLoader(lib, "LoadCursorW", HCURSOR /* HCURSOR */, [
	HINSTANCE, /* in opt HINSTANCE hInstance    */
	LPCWSTR,   /* in     LPCWSTR   lpCursorName */
], f => LoadCursorW = f);
export {LoadCursorW as LoadCursor};

export function LoadCursorFromFileA () {};
LoadCursorFromFileA = createAutoLoader(lib, "LoadCursorFromFileA", HCURSOR /* HCURSOR */, [
	LPCSTR, /* in LPCSTR lpFileName */
], f => LoadCursorFromFileA = f);

export function LoadCursorFromFileW () {};
LoadCursorFromFileW = createAutoLoader(lib, "LoadCursorFromFileW", HCURSOR /* HCURSOR */, [
	LPCWSTR, /* in LPCWSTR lpFileName */
], f => LoadCursorFromFileW = f);
export {LoadCursorFromFileW as LoadCursorFromFile};

export function CreateCursor () {};
CreateCursor = createAutoLoader(lib, "CreateCursor", HCURSOR /* HCURSOR */, [
	HINSTANCE,     /* in opt HINSTANCE    hInst      */
	int,           /* in     int          xHotSpot   */
	int,           /* in     int          yHotSpot   */
	int,           /* in     int          nWidth     */
	int,           /* in     int          nHeight    */
	pointer(VOID), /* in     CONST VOID * pvANDPlane */
	pointer(VOID), /* in     CONST VOID * pvXORPlane */
], f => CreateCursor = f);

export function DestroyCursor () {};
DestroyCursor = createAutoLoader(lib, "DestroyCursor", BOOL /* BOOL */, [
	HCURSOR, /* in HCURSOR hCursor */
], f => DestroyCursor = f);

export function CopyCursor () {};
CopyCursor = createAutoLoader(lib, "CopyCursor", HCURSOR /* HCURSOR */, [
	HCURSOR, /* in HCURSOR hCursor */
], f => CopyCursor = f);

export function SetSystemCursor () {};
SetSystemCursor = createAutoLoader(lib, "SetSystemCursor", BOOL /* BOOL */, [
	HCURSOR, /* in HCURSOR hcur */
	DWORD,   /* in DWORD   id   */
], f => SetSystemCursor = f);

export function LoadIconA () {};
LoadIconA = createAutoLoader(lib, "LoadIconA", HICON /* HICON */, [
	HINSTANCE, /* in opt HINSTANCE hInstance  */
	LPCSTR,    /* in     LPCSTR    lpIconName */
], f => LoadIconA = f);

export function LoadIconW () {};
LoadIconW = createAutoLoader(lib, "LoadIconW", HICON /* HICON */, [
	HINSTANCE, /* in opt HINSTANCE hInstance  */
	LPCWSTR,   /* in     LPCWSTR   lpIconName */
], f => LoadIconW = f);
export {LoadIconW as LoadIcon};

export function PrivateExtractIconsA () {};
PrivateExtractIconsA = createAutoLoader(lib, "PrivateExtractIconsA", UINT /* UINT */, [
	LPCSTR,         /*    LPCSTR  szFileName */
	int,            /* in int     nIconIndex */
	int,            /* in int     cxIcon     */
	int,            /* in int     cyIcon     */
	pointer(HICON), /*    HICON * phicon     */
	pointer(UINT),  /*    UINT *  piconid    */
	UINT,           /* in UINT    nIcons     */
	UINT,           /* in UINT    flags      */
], f => PrivateExtractIconsA = f);

export function PrivateExtractIconsW () {};
PrivateExtractIconsW = createAutoLoader(lib, "PrivateExtractIconsW", UINT /* UINT */, [
	LPCWSTR,        /*    LPCWSTR szFileName */
	int,            /* in int     nIconIndex */
	int,            /* in int     cxIcon     */
	int,            /* in int     cyIcon     */
	pointer(HICON), /*    HICON * phicon     */
	pointer(UINT),  /*    UINT *  piconid    */
	UINT,           /* in UINT    nIcons     */
	UINT,           /* in UINT    flags      */
], f => PrivateExtractIconsW = f);
export {PrivateExtractIconsW as PrivateExtractIcons};

export function CreateIcon () {};
CreateIcon = createAutoLoader(lib, "CreateIcon", HICON /* HICON */, [
	HINSTANCE,     /* in opt HINSTANCE    hInstance  */
	int,           /* in     int          nWidth     */
	int,           /* in     int          nHeight    */
	BYTE,          /* in     BYTE         cPlanes    */
	BYTE,          /* in     BYTE         cBitsPixel */
	pointer(BYTE), /* in     CONST BYTE * lpbANDbits */
	pointer(BYTE), /* in     CONST BYTE * lpbXORbits */
], f => CreateIcon = f);

export function DestroyIcon () {};
DestroyIcon = createAutoLoader(lib, "DestroyIcon", BOOL /* BOOL */, [
	HICON, /* in HICON hIcon */
], f => DestroyIcon = f);

export function CreateIconFromResource () {};
CreateIconFromResource = createAutoLoader(lib, "CreateIconFromResource", HICON /* HICON */, [
	PBYTE, /*    PBYTE presbits  */
	DWORD, /* in DWORD dwResSize */
	BOOL,  /* in BOOL  fIcon     */
	DWORD, /* in DWORD dwVer     */
], f => CreateIconFromResource = f);

export function CreateIconFromResourceEx () {};
CreateIconFromResourceEx = createAutoLoader(lib, "CreateIconFromResourceEx", HICON /* HICON */, [
	PBYTE, /*    PBYTE presbits  */
	DWORD, /* in DWORD dwResSize */
	BOOL,  /* in BOOL  fIcon     */
	DWORD, /* in DWORD dwVer     */
	int,   /* in int   cxDesired */
	int,   /* in int   cyDesired */
	UINT,  /* in UINT  Flags     */
], f => CreateIconFromResourceEx = f);

export function LoadImageA () {};
LoadImageA = createAutoLoader(lib, "LoadImageA", HANDLE /* HANDLE */, [
	HINSTANCE, /* in opt HINSTANCE hInst  */
	LPCSTR,    /* in     LPCSTR    name   */
	UINT,      /* in     UINT      type   */
	int,       /* in     int       cx     */
	int,       /* in     int       cy     */
	UINT,      /* in     UINT      fuLoad */
], f => LoadImageA = f);

export function LoadImageW () {};
LoadImageW = createAutoLoader(lib, "LoadImageW", HANDLE /* HANDLE */, [
	HINSTANCE, /* in opt HINSTANCE hInst  */
	LPCWSTR,   /* in     LPCWSTR   name   */
	UINT,      /* in     UINT      type   */
	int,       /* in     int       cx     */
	int,       /* in     int       cy     */
	UINT,      /* in     UINT      fuLoad */
], f => LoadImageW = f);
export {LoadImageW as LoadImage};

export function CopyImage () {};
CopyImage = createAutoLoader(lib, "CopyImage", HANDLE /* HANDLE */, [
	HANDLE, /* in HANDLE h     */
	UINT,   /* in UINT   type  */
	int,    /* in int    cx    */
	int,    /* in int    cy    */
	UINT,   /* in UINT   flags */
], f => CopyImage = f);

export function DrawIconEx () {};
DrawIconEx = createAutoLoader(lib, "DrawIconEx", BOOL /* BOOL */, [
	HDC,    /* in     HDC    hdc                */
	int,    /* in     int    xLeft              */
	int,    /* in     int    yTop               */
	HICON,  /* in     HICON  hIcon              */
	int,    /* in     int    cxWidth            */
	int,    /* in     int    cyWidth            */
	UINT,   /* in     UINT   istepIfAniCur      */
	HBRUSH, /* in opt HBRUSH hbrFlickerFreeDraw */
	UINT,   /* in     UINT   diFlags            */
], f => DrawIconEx = f);

export function CreateIconIndirect () {};
CreateIconIndirect = createAutoLoader(lib, "CreateIconIndirect", HICON /* HICON */, [
	PICONINFO, /* in PICONINFO piconinfo */
], f => CreateIconIndirect = f);

export function CopyIcon () {};
CopyIcon = createAutoLoader(lib, "CopyIcon", HICON /* HICON */, [
	HICON, /* in HICON hIcon */
], f => CopyIcon = f);

export function GetIconInfo () {};
GetIconInfo = createAutoLoader(lib, "GetIconInfo", BOOL /* BOOL */, [
	HICON,          /* in  HICON     hIcon     */
	out(PICONINFO), /* out PICONINFO piconinfo */
], f => GetIconInfo = f);

export function GetIconInfoExA () {};
GetIconInfoExA = createAutoLoader(lib, "GetIconInfoExA", BOOL /* BOOL */, [
	HICON,               /* in     HICON        hicon     */
	inout(PICONINFOEXA), /* in out PICONINFOEXA piconinfo */
], f => GetIconInfoExA = f);

export function GetIconInfoExW () {};
GetIconInfoExW = createAutoLoader(lib, "GetIconInfoExW", BOOL /* BOOL */, [
	HICON,               /* in     HICON        hicon     */
	inout(PICONINFOEXW), /* in out PICONINFOEXW piconinfo */
], f => GetIconInfoExW = f);
export {GetIconInfoExW as GetIconInfoEx};

export function IsDialogMessageA () {};
IsDialogMessageA = createAutoLoader(lib, "IsDialogMessageA", BOOL /* BOOL */, [
	HWND,  /* in HWND  hDlg  */
	LPMSG, /* in LPMSG lpMsg */
], f => IsDialogMessageA = f);

export function IsDialogMessageW () {};
IsDialogMessageW = createAutoLoader(lib, "IsDialogMessageW", BOOL /* BOOL */, [
	HWND,  /* in HWND  hDlg  */
	LPMSG, /* in LPMSG lpMsg */
], f => IsDialogMessageW = f);
export {IsDialogMessageW as IsDialogMessage};

export function MapDialogRect () {};
MapDialogRect = createAutoLoader(lib, "MapDialogRect", BOOL /* BOOL */, [
	HWND,          /* in     HWND   hDlg   */
	inout(LPRECT), /* in out LPRECT lpRect */
], f => MapDialogRect = f);

export function DlgDirListA () {};
DlgDirListA = createAutoLoader(lib, "DlgDirListA", int /* int */, [
	HWND,         /* in     HWND  hDlg          */
	inout(LPSTR), /* in out LPSTR lpPathSpec    */
	int,          /* in     int   nIDListBox    */
	int,          /* in     int   nIDStaticPath */
	UINT,         /* in     UINT  uFileType     */
], f => DlgDirListA = f);

export function DlgDirListW () {};
DlgDirListW = createAutoLoader(lib, "DlgDirListW", int /* int */, [
	HWND,          /* in     HWND   hDlg          */
	inout(LPWSTR), /* in out LPWSTR lpPathSpec    */
	int,           /* in     int    nIDListBox    */
	int,           /* in     int    nIDStaticPath */
	UINT,          /* in     UINT   uFileType     */
], f => DlgDirListW = f);
export {DlgDirListW as DlgDirList};

export function DlgDirSelectExA () {};
DlgDirSelectExA = createAutoLoader(lib, "DlgDirSelectExA", BOOL /* BOOL */, [
	HWND,  /* in HWND  hwndDlg   */
	LPSTR, /*    LPSTR lpString  */
	int,   /* in int   chCount   */
	int,   /* in int   idListBox */
], f => DlgDirSelectExA = f);

export function DlgDirSelectExW () {};
DlgDirSelectExW = createAutoLoader(lib, "DlgDirSelectExW", BOOL /* BOOL */, [
	HWND,   /* in HWND   hwndDlg   */
	LPWSTR, /*    LPWSTR lpString  */
	int,    /* in int    chCount   */
	int,    /* in int    idListBox */
], f => DlgDirSelectExW = f);
export {DlgDirSelectExW as DlgDirSelectEx};

export function DlgDirListComboBoxA () {};
DlgDirListComboBoxA = createAutoLoader(lib, "DlgDirListComboBoxA", int /* int */, [
	HWND,         /* in     HWND  hDlg          */
	inout(LPSTR), /* in out LPSTR lpPathSpec    */
	int,          /* in     int   nIDComboBox   */
	int,          /* in     int   nIDStaticPath */
	UINT,         /* in     UINT  uFiletype     */
], f => DlgDirListComboBoxA = f);

export function DlgDirListComboBoxW () {};
DlgDirListComboBoxW = createAutoLoader(lib, "DlgDirListComboBoxW", int /* int */, [
	HWND,          /* in     HWND   hDlg          */
	inout(LPWSTR), /* in out LPWSTR lpPathSpec    */
	int,           /* in     int    nIDComboBox   */
	int,           /* in     int    nIDStaticPath */
	UINT,          /* in     UINT   uFiletype     */
], f => DlgDirListComboBoxW = f);
export {DlgDirListComboBoxW as DlgDirListComboBox};

export function DlgDirSelectComboBoxExA () {};
DlgDirSelectComboBoxExA = createAutoLoader(lib, "DlgDirSelectComboBoxExA", BOOL /* BOOL */, [
	HWND,  /* in HWND  hwndDlg    */
	LPSTR, /*    LPSTR lpString   */
	int,   /* in int   cchOut     */
	int,   /* in int   idComboBox */
], f => DlgDirSelectComboBoxExA = f);

export function DlgDirSelectComboBoxExW () {};
DlgDirSelectComboBoxExW = createAutoLoader(lib, "DlgDirSelectComboBoxExW", BOOL /* BOOL */, [
	HWND,   /* in HWND   hwndDlg    */
	LPWSTR, /*    LPWSTR lpString   */
	int,    /* in int    cchOut     */
	int,    /* in int    idComboBox */
], f => DlgDirSelectComboBoxExW = f);
export {DlgDirSelectComboBoxExW as DlgDirSelectComboBoxEx};

export function SetScrollInfo () {};
SetScrollInfo = createAutoLoader(lib, "SetScrollInfo", int /* int */, [
	HWND,          /* in HWND          hwnd   */
	int,           /* in int           nBar   */
	LPCSCROLLINFO, /* in LPCSCROLLINFO lpsi   */
	BOOL,          /* in BOOL          redraw */
], f => SetScrollInfo = f);

export function GetScrollInfo () {};
GetScrollInfo = createAutoLoader(lib, "GetScrollInfo", BOOL /* BOOL */, [
	HWND,                /* in     HWND         hwnd */
	int,                 /* in     int          nBar */
	inout(LPSCROLLINFO), /* in out LPSCROLLINFO lpsi */
], f => GetScrollInfo = f);

export function DefFrameProcA () {};
DefFrameProcA = createAutoLoader(lib, "DefFrameProcA", LRESULT /* LRESULT */, [
	HWND,   /* in     HWND   hWnd          */
	HWND,   /* in opt HWND   hWndMDIClient */
	UINT,   /* in     UINT   uMsg          */
	WPARAM, /* in     WPARAM wParam        */
	LPARAM, /* in     LPARAM lParam        */
], f => DefFrameProcA = f);

export function DefFrameProcW () {};
DefFrameProcW = createAutoLoader(lib, "DefFrameProcW", LRESULT /* LRESULT */, [
	HWND,   /* in     HWND   hWnd          */
	HWND,   /* in opt HWND   hWndMDIClient */
	UINT,   /* in     UINT   uMsg          */
	WPARAM, /* in     WPARAM wParam        */
	LPARAM, /* in     LPARAM lParam        */
], f => DefFrameProcW = f);
export {DefFrameProcW as DefFrameProc};

export function TranslateMDISysAccel () {};
TranslateMDISysAccel = createAutoLoader(lib, "TranslateMDISysAccel", BOOL /* BOOL */, [
	HWND,  /* in HWND  hWndClient */
	LPMSG, /* in LPMSG lpMsg      */
], f => TranslateMDISysAccel = f);

export function ArrangeIconicWindows () {};
ArrangeIconicWindows = createAutoLoader(lib, "ArrangeIconicWindows", UINT /* UINT */, [
	HWND, /* in HWND hWnd */
], f => ArrangeIconicWindows = f);

export function CreateMDIWindowA () {};
CreateMDIWindowA = createAutoLoader(lib, "CreateMDIWindowA", HWND /* HWND */, [
	LPCSTR,    /* in     LPCSTR    lpClassName  */
	LPCSTR,    /* in     LPCSTR    lpWindowName */
	DWORD,     /* in     DWORD     dwStyle      */
	int,       /* in     int       X            */
	int,       /* in     int       Y            */
	int,       /* in     int       nWidth       */
	int,       /* in     int       nHeight      */
	HWND,      /* in opt HWND      hWndParent   */
	HINSTANCE, /* in opt HINSTANCE hInstance    */
	LPARAM,    /* in     LPARAM    lParam       */
], f => CreateMDIWindowA = f);

export function CreateMDIWindowW () {};
CreateMDIWindowW = createAutoLoader(lib, "CreateMDIWindowW", HWND /* HWND */, [
	LPCWSTR,   /* in     LPCWSTR   lpClassName  */
	LPCWSTR,   /* in     LPCWSTR   lpWindowName */
	DWORD,     /* in     DWORD     dwStyle      */
	int,       /* in     int       X            */
	int,       /* in     int       Y            */
	int,       /* in     int       nWidth       */
	int,       /* in     int       nHeight      */
	HWND,      /* in opt HWND      hWndParent   */
	HINSTANCE, /* in opt HINSTANCE hInstance    */
	LPARAM,    /* in     LPARAM    lParam       */
], f => CreateMDIWindowW = f);
export {CreateMDIWindowW as CreateMDIWindow};

export function WinHelpA () {};
WinHelpA = createAutoLoader(lib, "WinHelpA", BOOL /* BOOL */, [
	HWND,      /* in opt HWND      hWndMain */
	LPCSTR,    /* in opt LPCSTR    lpszHelp */
	UINT,      /* in     UINT      uCommand */
	ULONG_PTR, /* in     ULONG_PTR dwData   */
], f => WinHelpA = f);

export function WinHelpW () {};
WinHelpW = createAutoLoader(lib, "WinHelpW", BOOL /* BOOL */, [
	HWND,      /* in opt HWND      hWndMain */
	LPCWSTR,   /* in opt LPCWSTR   lpszHelp */
	UINT,      /* in     UINT      uCommand */
	ULONG_PTR, /* in     ULONG_PTR dwData   */
], f => WinHelpW = f);
export {WinHelpW as WinHelp};

export function GetGuiResources () {};
GetGuiResources = createAutoLoader(lib, "GetGuiResources", DWORD /* DWORD */, [
	HANDLE, /* in HANDLE hProcess */
	DWORD,  /* in DWORD  uiFlags  */
], f => GetGuiResources = f);

export function ChangeDisplaySettingsA () {};
ChangeDisplaySettingsA = createAutoLoader(lib, "ChangeDisplaySettingsA", LONG /* LONG */, [
	pointer(DEVMODEA), /* in opt DEVMODEA* lpDevMode */
	DWORD,             /* in     DWORD     dwFlags   */
], f => ChangeDisplaySettingsA = f);

export function ChangeDisplaySettingsW () {};
ChangeDisplaySettingsW = createAutoLoader(lib, "ChangeDisplaySettingsW", LONG /* LONG */, [
	pointer(DEVMODEW), /* in opt DEVMODEW* lpDevMode */
	DWORD,             /* in     DWORD     dwFlags   */
], f => ChangeDisplaySettingsW = f);
export {ChangeDisplaySettingsW as ChangeDisplaySettings};

export function ChangeDisplaySettingsExA () {};
ChangeDisplaySettingsExA = createAutoLoader(lib, "ChangeDisplaySettingsExA", LONG /* LONG */, [
	LPCSTR,            /* in opt   LPCSTR    lpszDeviceName */
	pointer(DEVMODEA), /* in opt   DEVMODEA* lpDevMode      */
	HWND,              /* reserved HWND      hwnd           */
	DWORD,             /* in       DWORD     dwflags        */
	LPVOID,            /* in opt   LPVOID    lParam         */
], f => ChangeDisplaySettingsExA = f);

export function ChangeDisplaySettingsExW () {};
ChangeDisplaySettingsExW = createAutoLoader(lib, "ChangeDisplaySettingsExW", LONG /* LONG */, [
	LPCWSTR,           /* in opt   LPCWSTR   lpszDeviceName */
	pointer(DEVMODEW), /* in opt   DEVMODEW* lpDevMode      */
	HWND,              /* reserved HWND      hwnd           */
	DWORD,             /* in       DWORD     dwflags        */
	LPVOID,            /* in opt   LPVOID    lParam         */
], f => ChangeDisplaySettingsExW = f);
export {ChangeDisplaySettingsExW as ChangeDisplaySettingsEx};

export function EnumDisplaySettingsA () {};
EnumDisplaySettingsA = createAutoLoader(lib, "EnumDisplaySettingsA", BOOL /* BOOL */, [
	LPCSTR,                   /* in opt LPCSTR    lpszDeviceName */
	DWORD,                    /* in     DWORD     iModeNum       */
	inout(pointer(DEVMODEA)), /* in out DEVMODEA* lpDevMode      */
], f => EnumDisplaySettingsA = f);

export function EnumDisplaySettingsW () {};
EnumDisplaySettingsW = createAutoLoader(lib, "EnumDisplaySettingsW", BOOL /* BOOL */, [
	LPCWSTR,                  /* in opt LPCWSTR   lpszDeviceName */
	DWORD,                    /* in     DWORD     iModeNum       */
	inout(pointer(DEVMODEW)), /* in out DEVMODEW* lpDevMode      */
], f => EnumDisplaySettingsW = f);
export {EnumDisplaySettingsW as EnumDisplaySettings};

export function EnumDisplaySettingsExA () {};
EnumDisplaySettingsExA = createAutoLoader(lib, "EnumDisplaySettingsExA", BOOL /* BOOL */, [
	LPCSTR,                   /* in opt LPCSTR    lpszDeviceName */
	DWORD,                    /* in     DWORD     iModeNum       */
	inout(pointer(DEVMODEA)), /* in out DEVMODEA* lpDevMode      */
	DWORD,                    /* in     DWORD     dwFlags        */
], f => EnumDisplaySettingsExA = f);

export function EnumDisplaySettingsExW () {};
EnumDisplaySettingsExW = createAutoLoader(lib, "EnumDisplaySettingsExW", BOOL /* BOOL */, [
	LPCWSTR,                  /* in opt LPCWSTR   lpszDeviceName */
	DWORD,                    /* in     DWORD     iModeNum       */
	inout(pointer(DEVMODEW)), /* in out DEVMODEW* lpDevMode      */
	DWORD,                    /* in     DWORD     dwFlags        */
], f => EnumDisplaySettingsExW = f);
export {EnumDisplaySettingsExW as EnumDisplaySettingsEx};

export function EnumDisplayDevicesA () {};
EnumDisplayDevicesA = createAutoLoader(lib, "EnumDisplayDevicesA", BOOL /* BOOL */, [
	LPCSTR,                  /* in opt LPCSTR           lpDevice        */
	DWORD,                   /* in     DWORD            iDevNum         */
	inout(PDISPLAY_DEVICEA), /* in out PDISPLAY_DEVICEA lpDisplayDevice */
	DWORD,                   /* in     DWORD            dwFlags         */
], f => EnumDisplayDevicesA = f);

export function EnumDisplayDevicesW () {};
EnumDisplayDevicesW = createAutoLoader(lib, "EnumDisplayDevicesW", BOOL /* BOOL */, [
	LPCWSTR,                 /* in opt LPCWSTR          lpDevice        */
	DWORD,                   /* in     DWORD            iDevNum         */
	inout(PDISPLAY_DEVICEW), /* in out PDISPLAY_DEVICEW lpDisplayDevice */
	DWORD,                   /* in     DWORD            dwFlags         */
], f => EnumDisplayDevicesW = f);
export {EnumDisplayDevicesW as EnumDisplayDevices};

export function GetDisplayConfigBufferSizes () {};
GetDisplayConfigBufferSizes = createAutoLoader(lib, "GetDisplayConfigBufferSizes", LONG /* LONG */, [
	UINT32,               /* in  UINT32  flags                    */
	out(pointer(UINT32)), /* out UINT32* numPathArrayElements     */
	out(pointer(UINT32)), /* out UINT32* numModeInfoArrayElements */
], f => GetDisplayConfigBufferSizes = f);

export function DisplayConfigGetDeviceInfo () {};
DisplayConfigGetDeviceInfo = createAutoLoader(lib, "DisplayConfigGetDeviceInfo", LONG /* LONG */, [
	inout(pointer(DISPLAYCONFIG_DEVICE_INFO_HEADER)), /* in out DISPLAYCONFIG_DEVICE_INFO_HEADER* requestPacket */
], f => DisplayConfigGetDeviceInfo = f);

export function DisplayConfigSetDeviceInfo () {};
DisplayConfigSetDeviceInfo = createAutoLoader(lib, "DisplayConfigSetDeviceInfo", LONG /* LONG */, [
	pointer(DISPLAYCONFIG_DEVICE_INFO_HEADER), /* in DISPLAYCONFIG_DEVICE_INFO_HEADER* setPacket */
], f => DisplayConfigSetDeviceInfo = f);

export function SystemParametersInfoA () {};
SystemParametersInfoA = createAutoLoader(lib, "SystemParametersInfoA", BOOL /* BOOL */, [
	UINT,  /* in UINT  uiAction */
	UINT,  /* in UINT  uiParam  */
	PVOID, /*    PVOID pvParam  */
	UINT,  /* in UINT  fWinIni  */
], f => SystemParametersInfoA = f);

export function SystemParametersInfoW () {};
SystemParametersInfoW = createAutoLoader(lib, "SystemParametersInfoW", BOOL /* BOOL */, [
	UINT,  /* in UINT  uiAction */
	UINT,  /* in UINT  uiParam  */
	PVOID, /*    PVOID pvParam  */
	UINT,  /* in UINT  fWinIni  */
], f => SystemParametersInfoW = f);
export {SystemParametersInfoW as SystemParametersInfo};

export function SystemParametersInfoForDpi () {};
SystemParametersInfoForDpi = createAutoLoader(lib, "SystemParametersInfoForDpi", BOOL /* BOOL */, [
	UINT,  /* in UINT  uiAction */
	UINT,  /* in UINT  uiParam  */
	PVOID, /*    PVOID pvParam  */
	UINT,  /* in UINT  fWinIni  */
	UINT,  /* in UINT  dpi      */
], f => SystemParametersInfoForDpi = f);

export function SoundSentry () {};
SoundSentry = createAutoLoader(lib, "SoundSentry", BOOL /* BOOL */, [
	/* void */
], f => SoundSentry = f);

export function SetDebugErrorLevel () {};
SetDebugErrorLevel = createAutoLoader(lib, "SetDebugErrorLevel", VOID /* VOID */, [
	DWORD, /* in DWORD dwLevel */
], f => SetDebugErrorLevel = f);

export function SetLastErrorEx () {};
SetLastErrorEx = createAutoLoader(lib, "SetLastErrorEx", VOID /* VOID */, [
	DWORD, /* in DWORD dwErrCode */
	DWORD, /* in DWORD dwType    */
], f => SetLastErrorEx = f);

export function EndTask () {};
EndTask = createAutoLoader(lib, "EndTask", BOOL /* BOOL */, [
	HWND, /* in HWND hWnd      */
	BOOL, /* in BOOL fShutDown */
	BOOL, /* in BOOL fForce    */
], f => EndTask = f);

export function CancelShutdown () {};
CancelShutdown = createAutoLoader(lib, "CancelShutdown", BOOL /* BOOL */, [
	/* void */
], f => CancelShutdown = f);

export function MonitorFromPoint () {};
MonitorFromPoint = createAutoLoader(lib, "MonitorFromPoint", HMONITOR /* HMONITOR */, [
	POINT, /* in POINT pt      */
	DWORD, /* in DWORD dwFlags */
], f => MonitorFromPoint = f);

export function MonitorFromRect () {};
MonitorFromRect = createAutoLoader(lib, "MonitorFromRect", HMONITOR /* HMONITOR */, [
	LPCRECT, /* in LPCRECT lprc    */
	DWORD,   /* in DWORD   dwFlags */
], f => MonitorFromRect = f);

export function MonitorFromWindow () {};
MonitorFromWindow = createAutoLoader(lib, "MonitorFromWindow", HMONITOR /* HMONITOR */, [
	HWND,  /* in HWND  hwnd    */
	DWORD, /* in DWORD dwFlags */
], f => MonitorFromWindow = f);

export function GetMonitorInfoA () {};
GetMonitorInfoA = createAutoLoader(lib, "GetMonitorInfoA", BOOL /* BOOL */, [
	HMONITOR,             /* in     HMONITOR      hMonitor */
	inout(LPMONITORINFO), /* in out LPMONITORINFO lpmi     */
], f => GetMonitorInfoA = f);

export function GetMonitorInfoW () {};
GetMonitorInfoW = createAutoLoader(lib, "GetMonitorInfoW", BOOL /* BOOL */, [
	HMONITOR,             /* in     HMONITOR      hMonitor */
	inout(LPMONITORINFO), /* in out LPMONITORINFO lpmi     */
], f => GetMonitorInfoW = f);
export {GetMonitorInfoW as GetMonitorInfo};

export function EnumDisplayMonitors () {};
EnumDisplayMonitors = createAutoLoader(lib, "EnumDisplayMonitors", BOOL /* BOOL */, [
	HDC,             /* in opt HDC             hdc      */
	LPCRECT,         /* in opt LPCRECT         lprcClip */
	MONITORENUMPROC, /* in     MONITORENUMPROC lpfnEnum */
	LPARAM,          /* in     LPARAM          dwData   */
], f => EnumDisplayMonitors = f);

export function NotifyWinEvent () {};
NotifyWinEvent = createAutoLoader(lib, "NotifyWinEvent", VOID /* VOID */, [
	DWORD, /* in DWORD event    */
	HWND,  /* in HWND  hwnd     */
	LONG,  /* in LONG  idObject */
	LONG,  /* in LONG  idChild  */
], f => NotifyWinEvent = f);

export function SetWinEventHook () {};
SetWinEventHook = createAutoLoader(lib, "SetWinEventHook", HWINEVENTHOOK /* HWINEVENTHOOK */, [
	DWORD,        /* in     DWORD        eventMin         */
	DWORD,        /* in     DWORD        eventMax         */
	HMODULE,      /* in opt HMODULE      hmodWinEventProc */
	WINEVENTPROC, /* in     WINEVENTPROC pfnWinEventProc  */
	DWORD,        /* in     DWORD        idProcess        */
	DWORD,        /* in     DWORD        idThread         */
	DWORD,        /* in     DWORD        dwFlags          */
], f => SetWinEventHook = f);

export function IsWinEventHookInstalled () {};
IsWinEventHookInstalled = createAutoLoader(lib, "IsWinEventHookInstalled", BOOL /* BOOL */, [
	DWORD, /* in DWORD event */
], f => IsWinEventHookInstalled = f);

export function UnhookWinEvent () {};
UnhookWinEvent = createAutoLoader(lib, "UnhookWinEvent", BOOL /* BOOL */, [
	HWINEVENTHOOK, /* in HWINEVENTHOOK hWinEventHook */
], f => UnhookWinEvent = f);

export function GetGUIThreadInfo () {};
GetGUIThreadInfo = createAutoLoader(lib, "GetGUIThreadInfo", BOOL /* BOOL */, [
	DWORD,                 /* in     DWORD          idThread */
	inout(PGUITHREADINFO), /* in out PGUITHREADINFO pgui     */
], f => GetGUIThreadInfo = f);

export function BlockInput () {};
BlockInput = createAutoLoader(lib, "BlockInput", BOOL /* BOOL */, [
	BOOL, /*  BOOL fBlockIt */
], f => BlockInput = f);

export function SetProcessDPIAware () {};
SetProcessDPIAware = createAutoLoader(lib, "SetProcessDPIAware", BOOL /* BOOL */, [
	/* void */
], f => SetProcessDPIAware = f);

export function IsProcessDPIAware () {};
IsProcessDPIAware = createAutoLoader(lib, "IsProcessDPIAware", BOOL /* BOOL */, [
	/* void */
], f => IsProcessDPIAware = f);

export function SetThreadDpiAwarenessContext () {};
SetThreadDpiAwarenessContext = createAutoLoader(lib, "SetThreadDpiAwarenessContext", DPI_AWARENESS_CONTEXT /* DPI_AWARENESS_CONTEXT */, [
	DPI_AWARENESS_CONTEXT, /* in DPI_AWARENESS_CONTEXT dpiContext */
], f => SetThreadDpiAwarenessContext = f);

export function GetThreadDpiAwarenessContext () {};
GetThreadDpiAwarenessContext = createAutoLoader(lib, "GetThreadDpiAwarenessContext", DPI_AWARENESS_CONTEXT /* DPI_AWARENESS_CONTEXT */, [
	/* void */
], f => GetThreadDpiAwarenessContext = f);

export function GetWindowDpiAwarenessContext () {};
GetWindowDpiAwarenessContext = createAutoLoader(lib, "GetWindowDpiAwarenessContext", DPI_AWARENESS_CONTEXT /* DPI_AWARENESS_CONTEXT */, [
	HWND, /* in HWND hwnd */
], f => GetWindowDpiAwarenessContext = f);

export function GetAwarenessFromDpiAwarenessContext () {};
GetAwarenessFromDpiAwarenessContext = createAutoLoader(lib, "GetAwarenessFromDpiAwarenessContext", DPI_AWARENESS /* DPI_AWARENESS */, [
	DPI_AWARENESS_CONTEXT, /* in DPI_AWARENESS_CONTEXT value */
], f => GetAwarenessFromDpiAwarenessContext = f);

export function GetDpiFromDpiAwarenessContext () {};
GetDpiFromDpiAwarenessContext = createAutoLoader(lib, "GetDpiFromDpiAwarenessContext", UINT /* UINT */, [
	DPI_AWARENESS_CONTEXT, /* in DPI_AWARENESS_CONTEXT value */
], f => GetDpiFromDpiAwarenessContext = f);

export function AreDpiAwarenessContextsEqual () {};
AreDpiAwarenessContextsEqual = createAutoLoader(lib, "AreDpiAwarenessContextsEqual", BOOL /* BOOL */, [
	DPI_AWARENESS_CONTEXT, /* in DPI_AWARENESS_CONTEXT dpiContextA */
	DPI_AWARENESS_CONTEXT, /* in DPI_AWARENESS_CONTEXT dpiContextB */
], f => AreDpiAwarenessContextsEqual = f);

export function IsValidDpiAwarenessContext () {};
IsValidDpiAwarenessContext = createAutoLoader(lib, "IsValidDpiAwarenessContext", BOOL /* BOOL */, [
	DPI_AWARENESS_CONTEXT, /* in DPI_AWARENESS_CONTEXT value */
], f => IsValidDpiAwarenessContext = f);

export function GetDpiForWindow () {};
GetDpiForWindow = createAutoLoader(lib, "GetDpiForWindow", UINT /* UINT */, [
	HWND, /* in HWND hwnd */
], f => GetDpiForWindow = f);

export function GetDpiForSystem () {};
GetDpiForSystem = createAutoLoader(lib, "GetDpiForSystem", UINT /* UINT */, [
	/* void */
], f => GetDpiForSystem = f);

export function GetSystemDpiForProcess () {};
GetSystemDpiForProcess = createAutoLoader(lib, "GetSystemDpiForProcess", UINT /* UINT */, [
	HANDLE, /* in HANDLE hProcess */
], f => GetSystemDpiForProcess = f);

export function EnableNonClientDpiScaling () {};
EnableNonClientDpiScaling = createAutoLoader(lib, "EnableNonClientDpiScaling", BOOL /* BOOL */, [
	HWND, /* in HWND hwnd */
], f => EnableNonClientDpiScaling = f);

export function InheritWindowMonitor () {};
InheritWindowMonitor = createAutoLoader(lib, "InheritWindowMonitor", BOOL /* BOOL */, [
	HWND, /* in     HWND hwnd        */
	HWND, /* in opt HWND hwndInherit */
], f => InheritWindowMonitor = f);

export function SetProcessDpiAwarenessContext () {};
SetProcessDpiAwarenessContext = createAutoLoader(lib, "SetProcessDpiAwarenessContext", BOOL /* BOOL */, [
	DPI_AWARENESS_CONTEXT, /* in DPI_AWARENESS_CONTEXT value */
], f => SetProcessDpiAwarenessContext = f);

export function GetDpiAwarenessContextForProcess () {};
GetDpiAwarenessContextForProcess = createAutoLoader(lib, "GetDpiAwarenessContextForProcess", DPI_AWARENESS_CONTEXT /* DPI_AWARENESS_CONTEXT */, [
	HANDLE, /* in HANDLE hProcess */
], f => GetDpiAwarenessContextForProcess = f);

export function SetThreadDpiHostingBehavior () {};
SetThreadDpiHostingBehavior = createAutoLoader(lib, "SetThreadDpiHostingBehavior", DPI_HOSTING_BEHAVIOR /* DPI_HOSTING_BEHAVIOR */, [
	DPI_HOSTING_BEHAVIOR, /* in DPI_HOSTING_BEHAVIOR value */
], f => SetThreadDpiHostingBehavior = f);

export function GetThreadDpiHostingBehavior () {};
GetThreadDpiHostingBehavior = createAutoLoader(lib, "GetThreadDpiHostingBehavior", DPI_HOSTING_BEHAVIOR /* DPI_HOSTING_BEHAVIOR */, [
	/* void */
], f => GetThreadDpiHostingBehavior = f);

export function GetWindowDpiHostingBehavior () {};
GetWindowDpiHostingBehavior = createAutoLoader(lib, "GetWindowDpiHostingBehavior", DPI_HOSTING_BEHAVIOR /* DPI_HOSTING_BEHAVIOR */, [
	HWND, /* in HWND hwnd */
], f => GetWindowDpiHostingBehavior = f);

export function GetCursorInfo () {};
GetCursorInfo = createAutoLoader(lib, "GetCursorInfo", BOOL /* BOOL */, [
	inout(PCURSORINFO), /* in out PCURSORINFO pci */
], f => GetCursorInfo = f);

export function GetWindowInfo () {};
GetWindowInfo = createAutoLoader(lib, "GetWindowInfo", BOOL /* BOOL */, [
	HWND,               /* in     HWND        hwnd */
	inout(PWINDOWINFO), /* in out PWINDOWINFO pwi  */
], f => GetWindowInfo = f);

export function GetTitleBarInfo () {};
GetTitleBarInfo = createAutoLoader(lib, "GetTitleBarInfo", BOOL /* BOOL */, [
	HWND,                 /* in     HWND          hwnd */
	inout(PTITLEBARINFO), /* in out PTITLEBARINFO pti  */
], f => GetTitleBarInfo = f);

export function GetMenuBarInfo () {};
GetMenuBarInfo = createAutoLoader(lib, "GetMenuBarInfo", BOOL /* BOOL */, [
	HWND,                /* in     HWND         hwnd     */
	LONG,                /* in     LONG         idObject */
	LONG,                /* in     LONG         idItem   */
	inout(PMENUBARINFO), /* in out PMENUBARINFO pmbi     */
], f => GetMenuBarInfo = f);

export function GetScrollBarInfo () {};
GetScrollBarInfo = createAutoLoader(lib, "GetScrollBarInfo", BOOL /* BOOL */, [
	HWND,                  /* in     HWND           hwnd     */
	LONG,                  /* in     LONG           idObject */
	inout(PSCROLLBARINFO), /* in out PSCROLLBARINFO psbi     */
], f => GetScrollBarInfo = f);

export function GetComboBoxInfo () {};
GetComboBoxInfo = createAutoLoader(lib, "GetComboBoxInfo", BOOL /* BOOL */, [
	HWND,                 /* in     HWND          hwndCombo */
	inout(PCOMBOBOXINFO), /* in out PCOMBOBOXINFO pcbi      */
], f => GetComboBoxInfo = f);

export function GetAncestor () {};
GetAncestor = createAutoLoader(lib, "GetAncestor", HWND /* HWND */, [
	HWND, /* in HWND hwnd    */
	UINT, /* in UINT gaFlags */
], f => GetAncestor = f);

export function RealChildWindowFromPoint () {};
RealChildWindowFromPoint = createAutoLoader(lib, "RealChildWindowFromPoint", HWND /* HWND */, [
	HWND,  /* in HWND  hwndParent           */
	POINT, /* in POINT ptParentClientCoords */
], f => RealChildWindowFromPoint = f);

export function GetAltTabInfoA () {};
GetAltTabInfoA = createAutoLoader(lib, "GetAltTabInfoA", BOOL /* BOOL */, [
	HWND,               /* in opt HWND        hwnd        */
	int,                /* in     int         iItem       */
	inout(PALTTABINFO), /* in out PALTTABINFO pati        */
	LPSTR,              /*        LPSTR       pszItemText */
	UINT,               /* in     UINT        cchItemText */
], f => GetAltTabInfoA = f);

export function GetAltTabInfoW () {};
GetAltTabInfoW = createAutoLoader(lib, "GetAltTabInfoW", BOOL /* BOOL */, [
	HWND,               /* in opt HWND        hwnd        */
	int,                /* in     int         iItem       */
	inout(PALTTABINFO), /* in out PALTTABINFO pati        */
	LPWSTR,             /*        LPWSTR      pszItemText */
	UINT,               /* in     UINT        cchItemText */
], f => GetAltTabInfoW = f);
export {GetAltTabInfoW as GetAltTabInfo};

export function GetListBoxInfo () {};
GetListBoxInfo = createAutoLoader(lib, "GetListBoxInfo", DWORD /* DWORD */, [
	HWND, /* in HWND hwnd */
], f => GetListBoxInfo = f);

export function LockWorkStation () {};
LockWorkStation = createAutoLoader(lib, "LockWorkStation", BOOL /* BOOL */, [
	/* void */
], f => LockWorkStation = f);

export function UserHandleGrantAccess () {};
UserHandleGrantAccess = createAutoLoader(lib, "UserHandleGrantAccess", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hUserHandle */
	HANDLE, /* in HANDLE hJob        */
	BOOL,   /* in BOOL   bGrant      */
], f => UserHandleGrantAccess = f);

export function GetRawInputBuffer () {};
GetRawInputBuffer = createAutoLoader(lib, "GetRawInputBuffer", UINT /* UINT */, [
	PRAWINPUT,    /*        PRAWINPUT pData        */
	inout(PUINT), /* in out PUINT     pcbSize      */
	UINT,         /* in     UINT      cbSizeHeader */
], f => GetRawInputBuffer = f);

export function RegisterRawInputDevices () {};
RegisterRawInputDevices = createAutoLoader(lib, "RegisterRawInputDevices", BOOL /* BOOL */, [
	PCRAWINPUTDEVICE, /*    PCRAWINPUTDEVICE pRawInputDevices */
	UINT,             /* in UINT             uiNumDevices     */
	UINT,             /* in UINT             cbSize           */
], f => RegisterRawInputDevices = f);

export function GetRegisteredRawInputDevices () {};
GetRegisteredRawInputDevices = createAutoLoader(lib, "GetRegisteredRawInputDevices", UINT /* UINT */, [
	PRAWINPUTDEVICE, /*        PRAWINPUTDEVICE pRawInputDevices */
	inout(PUINT),    /* in out PUINT           puiNumDevices    */
	UINT,            /* in     UINT            cbSize           */
], f => GetRegisteredRawInputDevices = f);

export function GetRawInputDeviceList () {};
GetRawInputDeviceList = createAutoLoader(lib, "GetRawInputDeviceList", UINT /* UINT */, [
	PRAWINPUTDEVICELIST, /*        PRAWINPUTDEVICELIST pRawInputDeviceList */
	inout(PUINT),        /* in out PUINT               puiNumDevices       */
	UINT,                /* in     UINT                cbSize              */
], f => GetRawInputDeviceList = f);

export function DefRawInputProc () {};
DefRawInputProc = createAutoLoader(lib, "DefRawInputProc", LRESULT /* LRESULT */, [
	pointer(PRAWINPUT), /*    PRAWINPUT* paRawInput   */
	INT,                /* in INT        nInput       */
	UINT,               /* in UINT       cbSizeHeader */
], f => DefRawInputProc = f);

export function GetPointerDevices () {};
GetPointerDevices = createAutoLoader(lib, "GetPointerDevices", BOOL /* BOOL */, [
	inout(pointer(UINT32)),       /* in out UINT32*               deviceCount    */
	pointer(POINTER_DEVICE_INFO), /*        POINTER_DEVICE_INFO * pointerDevices */
], f => GetPointerDevices = f);

export function GetPointerDevice () {};
GetPointerDevice = createAutoLoader(lib, "GetPointerDevice", BOOL /* BOOL */, [
	HANDLE,                       /* in HANDLE                device        */
	pointer(POINTER_DEVICE_INFO), /*    POINTER_DEVICE_INFO * pointerDevice */
], f => GetPointerDevice = f);

export function GetPointerDeviceProperties () {};
GetPointerDeviceProperties = createAutoLoader(lib, "GetPointerDeviceProperties", BOOL /* BOOL */, [
	HANDLE,                           /* in     HANDLE                    device            */
	inout(pointer(UINT32)),           /* in out UINT32*                   propertyCount     */
	pointer(POINTER_DEVICE_PROPERTY), /*        POINTER_DEVICE_PROPERTY * pointerProperties */
], f => GetPointerDeviceProperties = f);

export function RegisterPointerDeviceNotifications () {};
RegisterPointerDeviceNotifications = createAutoLoader(lib, "RegisterPointerDeviceNotifications", BOOL /* BOOL */, [
	HWND, /* in HWND window      */
	BOOL, /* in BOOL notifyRange */
], f => RegisterPointerDeviceNotifications = f);

export function GetPointerDeviceRects () {};
GetPointerDeviceRects = createAutoLoader(lib, "GetPointerDeviceRects", BOOL /* BOOL */, [
	HANDLE,        /* in HANDLE device            */
	pointer(RECT), /*    RECT*  pointerDeviceRect */
	pointer(RECT), /*    RECT*  displayRect       */
], f => GetPointerDeviceRects = f);

export function GetPointerDeviceCursors () {};
GetPointerDeviceCursors = createAutoLoader(lib, "GetPointerDeviceCursors", BOOL /* BOOL */, [
	HANDLE,                              /* in     HANDLE                       device        */
	inout(pointer(UINT32)),              /* in out UINT32*                      cursorCount   */
	pointer(POINTER_DEVICE_CURSOR_INFO), /*        POINTER_DEVICE_CURSOR_INFO * deviceCursors */
], f => GetPointerDeviceCursors = f);

export function GetRawPointerDeviceData () {};
GetRawPointerDeviceData = createAutoLoader(lib, "GetRawPointerDeviceData", BOOL /* BOOL */, [
	UINT32,                           /* in UINT32                   pointerId       */
	UINT32,                           /* in UINT32                   historyCount    */
	UINT32,                           /* in UINT32                   propertiesCount */
	pointer(POINTER_DEVICE_PROPERTY), /*    POINTER_DEVICE_PROPERTY* pProperties     */
	pointer(LONG),                    /*    LONG*                    pValues         */
], f => GetRawPointerDeviceData = f);

export function ChangeWindowMessageFilter () {};
ChangeWindowMessageFilter = createAutoLoader(lib, "ChangeWindowMessageFilter", BOOL /* BOOL */, [
	UINT,  /* in UINT  message */
	DWORD, /* in DWORD dwFlag  */
], f => ChangeWindowMessageFilter = f);

export function ChangeWindowMessageFilterEx () {};
ChangeWindowMessageFilterEx = createAutoLoader(lib, "ChangeWindowMessageFilterEx", BOOL /* BOOL */, [
	HWND,                       /* in         HWND                hwnd                */
	UINT,                       /* in         UINT                message             */
	DWORD,                      /* in         DWORD               action              */
	inout(PCHANGEFILTERSTRUCT), /* in out opt PCHANGEFILTERSTRUCT pChangeFilterStruct */
], f => ChangeWindowMessageFilterEx = f);

export function GetGestureInfo () {};
GetGestureInfo = createAutoLoader(lib, "GetGestureInfo", BOOL /* BOOL */, [
	HGESTUREINFO,      /* in  HGESTUREINFO hGestureInfo */
	out(PGESTUREINFO), /* out PGESTUREINFO pGestureInfo */
], f => GetGestureInfo = f);

export function GetGestureExtraArgs () {};
GetGestureExtraArgs = createAutoLoader(lib, "GetGestureExtraArgs", BOOL /* BOOL */, [
	HGESTUREINFO, /* in HGESTUREINFO hGestureInfo */
	UINT,         /* in UINT         cbExtraArgs  */
	PBYTE,        /*    PBYTE        pExtraArgs   */
], f => GetGestureExtraArgs = f);

export function CloseGestureInfoHandle () {};
CloseGestureInfoHandle = createAutoLoader(lib, "CloseGestureInfoHandle", BOOL /* BOOL */, [
	HGESTUREINFO, /* in HGESTUREINFO hGestureInfo */
], f => CloseGestureInfoHandle = f);

export function SetGestureConfig () {};
SetGestureConfig = createAutoLoader(lib, "SetGestureConfig", BOOL /* BOOL */, [
	HWND,           /* in HWND           hwnd           */
	DWORD,          /* in DWORD          dwReserved     */
	UINT,           /* in UINT           cIDs           */
	PGESTURECONFIG, /*    PGESTURECONFIG pGestureConfig */
	UINT,           /* in UINT           cbSize         */
], f => SetGestureConfig = f);

export function ShutdownBlockReasonCreate () {};
ShutdownBlockReasonCreate = createAutoLoader(lib, "ShutdownBlockReasonCreate", BOOL /* BOOL */, [
	HWND,    /* in HWND    hWnd       */
	LPCWSTR, /* in LPCWSTR pwszReason */
], f => ShutdownBlockReasonCreate = f);

export function ShutdownBlockReasonQuery () {};
ShutdownBlockReasonQuery = createAutoLoader(lib, "ShutdownBlockReasonQuery", BOOL /* BOOL */, [
	HWND,                  /* in     HWND    hWnd     */
	LPWSTR,                /*        LPWSTR  pwszBuff */
	inout(pointer(DWORD)), /* in out DWORD * pcchBuff */
], f => ShutdownBlockReasonQuery = f);

export function ShutdownBlockReasonDestroy () {};
ShutdownBlockReasonDestroy = createAutoLoader(lib, "ShutdownBlockReasonDestroy", BOOL /* BOOL */, [
	HWND, /* in HWND hWnd */
], f => ShutdownBlockReasonDestroy = f);

export function GetCurrentInputMessageSource () {};
GetCurrentInputMessageSource = createAutoLoader(lib, "GetCurrentInputMessageSource", BOOL /* BOOL */, [
	out(pointer(INPUT_MESSAGE_SOURCE)), /* out INPUT_MESSAGE_SOURCE * inputMessageSource */
], f => GetCurrentInputMessageSource = f);

export function GetCIMSSM () {};
GetCIMSSM = createAutoLoader(lib, "GetCIMSSM", BOOL /* BOOL */, [
	out(pointer(INPUT_MESSAGE_SOURCE)), /* out INPUT_MESSAGE_SOURCE * inputMessageSource */
], f => GetCIMSSM = f);

export function GetAutoRotationState () {};
GetAutoRotationState = createAutoLoader(lib, "GetAutoRotationState", BOOL /* BOOL */, [
	out(PAR_STATE), /* out PAR_STATE pState */
], f => GetAutoRotationState = f);

export function GetDisplayAutoRotationPreferences () {};
GetDisplayAutoRotationPreferences = createAutoLoader(lib, "GetDisplayAutoRotationPreferences", BOOL /* BOOL */, [
	out(pointer(ORIENTATION_PREFERENCE)), /* out ORIENTATION_PREFERENCE * pOrientation */
], f => GetDisplayAutoRotationPreferences = f);

export function GetDisplayAutoRotationPreferencesByProcessId () {};
GetDisplayAutoRotationPreferencesByProcessId = createAutoLoader(lib, "GetDisplayAutoRotationPreferencesByProcessId", BOOL /* BOOL */, [
	DWORD,                                /* in  DWORD                    dwProcessId   */
	out(pointer(ORIENTATION_PREFERENCE)), /* out ORIENTATION_PREFERENCE * pOrientation  */
	out(pointer(BOOL)),                   /* out BOOL *                   fRotateScreen */
], f => GetDisplayAutoRotationPreferencesByProcessId = f);

export function SetDisplayAutoRotationPreferences () {};
SetDisplayAutoRotationPreferences = createAutoLoader(lib, "SetDisplayAutoRotationPreferences", BOOL /* BOOL */, [
	ORIENTATION_PREFERENCE, /* in ORIENTATION_PREFERENCE orientation */
], f => SetDisplayAutoRotationPreferences = f);

export function IsImmersiveProcess () {};
IsImmersiveProcess = createAutoLoader(lib, "IsImmersiveProcess", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hProcess */
], f => IsImmersiveProcess = f);

export function SetProcessRestrictionExemption () {};
SetProcessRestrictionExemption = createAutoLoader(lib, "SetProcessRestrictionExemption", BOOL /* BOOL */, [
	BOOL, /* in BOOL fEnableExemption */
], f => SetProcessRestrictionExemption = f);

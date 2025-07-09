// basic
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

export function wvsprintfA (param0: LPSTR, param1: LPCSTR, arglist: va_list): int;
export function wvsprintfW (param0: LPWSTR, param1: LPCWSTR, arglist: va_list): int;
export function wvsprintf (param0: LPWSTR, param1: LPCWSTR, arglist: va_list): int;
export function LoadKeyboardLayoutA (pwszKLID: LPCSTR, Flags: UINT): HKL;
export function LoadKeyboardLayoutW (pwszKLID: LPCWSTR, Flags: UINT): HKL;
export function LoadKeyboardLayout (pwszKLID: LPCWSTR, Flags: UINT): HKL;
export function ActivateKeyboardLayout (hkl: HKL, Flags: UINT): HKL;
export function ActivateKeyboardLayout (hkl: HKL, Flags: UINT): BOOL;
export function ToUnicodeEx (wVirtKey: UINT, wScanCode: UINT, lpKeyState: "BYTE *", pwszBuff: LPWSTR, cchBuff: int, wFlags: UINT, dwhkl: HKL): int;
export function UnloadKeyboardLayout (hkl: HKL): BOOL;
export function GetKeyboardLayoutNameA (pwszKLID: LPSTR): BOOL;
export function GetKeyboardLayoutNameW (pwszKLID: LPWSTR): BOOL;
export function GetKeyboardLayoutName (pwszKLID: LPWSTR): BOOL;
export function GetKeyboardLayoutList (nBuff: int, lpList: "HKL FAR *"): int;
export function GetKeyboardLayout (idThread: DWORD): HKL;
export function GetMouseMovePointsEx (cbSize: UINT, lppt: LPMOUSEMOVEPOINT, lpptBuf: LPMOUSEMOVEPOINT, nBufPoints: int, resolution: DWORD): int;
export function CreateDesktopA (lpszDesktop: LPCSTR, lpszDevice: LPCSTR, pDevmode: "DEVMODEA*", dwFlags: DWORD, dwDesiredAccess: ACCESS_MASK, lpsa: LPSECURITY_ATTRIBUTES): HDESK;
export function CreateDesktopW (lpszDesktop: LPCWSTR, lpszDevice: LPCWSTR, pDevmode: "DEVMODEW*", dwFlags: DWORD, dwDesiredAccess: ACCESS_MASK, lpsa: LPSECURITY_ATTRIBUTES): HDESK;
export function CreateDesktop (lpszDesktop: LPCWSTR, lpszDevice: LPCWSTR, pDevmode: "DEVMODEW*", dwFlags: DWORD, dwDesiredAccess: ACCESS_MASK, lpsa: LPSECURITY_ATTRIBUTES): HDESK;
export function CreateDesktopExA (lpszDesktop: LPCSTR, lpszDevice: LPCSTR, pDevmode: "DEVMODEA*", dwFlags: DWORD, dwDesiredAccess: ACCESS_MASK, lpsa: LPSECURITY_ATTRIBUTES, ulHeapSize: ULONG, pvoid: PVOID): HDESK;
export function CreateDesktopExW (lpszDesktop: LPCWSTR, lpszDevice: LPCWSTR, pDevmode: "DEVMODEW*", dwFlags: DWORD, dwDesiredAccess: ACCESS_MASK, lpsa: LPSECURITY_ATTRIBUTES, ulHeapSize: ULONG, pvoid: PVOID): HDESK;
export function CreateDesktopEx (lpszDesktop: LPCWSTR, lpszDevice: LPCWSTR, pDevmode: "DEVMODEW*", dwFlags: DWORD, dwDesiredAccess: ACCESS_MASK, lpsa: LPSECURITY_ATTRIBUTES, ulHeapSize: ULONG, pvoid: PVOID): HDESK;
export function OpenDesktopA (lpszDesktop: LPCSTR, dwFlags: DWORD, fInherit: BOOL, dwDesiredAccess: ACCESS_MASK): HDESK;
export function OpenDesktopW (lpszDesktop: LPCWSTR, dwFlags: DWORD, fInherit: BOOL, dwDesiredAccess: ACCESS_MASK): HDESK;
export function OpenDesktop (lpszDesktop: LPCWSTR, dwFlags: DWORD, fInherit: BOOL, dwDesiredAccess: ACCESS_MASK): HDESK;
export function OpenInputDesktop (dwFlags: DWORD, fInherit: BOOL, dwDesiredAccess: ACCESS_MASK): HDESK;
export function EnumDesktopsA (hwinsta: HWINSTA, lpEnumFunc: DESKTOPENUMPROCA, lParam: LPARAM): BOOL;
export function EnumDesktopsW (hwinsta: HWINSTA, lpEnumFunc: DESKTOPENUMPROCW, lParam: LPARAM): BOOL;
export function EnumDesktops (hwinsta: HWINSTA, lpEnumFunc: DESKTOPENUMPROCW, lParam: LPARAM): BOOL;
export function EnumDesktopWindows (hDesktop: HDESK, lpfn: WNDENUMPROC, lParam: LPARAM): BOOL;
export function SwitchDesktop (hDesktop: HDESK): BOOL;
export function SetThreadDesktop (hDesktop: HDESK): BOOL;
export function CloseDesktop (hDesktop: HDESK): BOOL;
export function GetThreadDesktop (dwThreadId: DWORD): HDESK;
export function CreateWindowStationA (lpwinsta: LPCSTR, dwFlags: DWORD, dwDesiredAccess: ACCESS_MASK, lpsa: LPSECURITY_ATTRIBUTES): HWINSTA;
export function CreateWindowStationW (lpwinsta: LPCWSTR, dwFlags: DWORD, dwDesiredAccess: ACCESS_MASK, lpsa: LPSECURITY_ATTRIBUTES): HWINSTA;
export function CreateWindowStation (lpwinsta: LPCWSTR, dwFlags: DWORD, dwDesiredAccess: ACCESS_MASK, lpsa: LPSECURITY_ATTRIBUTES): HWINSTA;
export function OpenWindowStationA (lpszWinSta: LPCSTR, fInherit: BOOL, dwDesiredAccess: ACCESS_MASK): HWINSTA;
export function OpenWindowStationW (lpszWinSta: LPCWSTR, fInherit: BOOL, dwDesiredAccess: ACCESS_MASK): HWINSTA;
export function OpenWindowStation (lpszWinSta: LPCWSTR, fInherit: BOOL, dwDesiredAccess: ACCESS_MASK): HWINSTA;
export function EnumWindowStationsA (lpEnumFunc: WINSTAENUMPROCA, lParam: LPARAM): BOOL;
export function EnumWindowStationsW (lpEnumFunc: WINSTAENUMPROCW, lParam: LPARAM): BOOL;
export function EnumWindowStations (lpEnumFunc: WINSTAENUMPROCW, lParam: LPARAM): BOOL;
export function CloseWindowStation (hWinSta: HWINSTA): BOOL;
export function SetProcessWindowStation (hWinSta: HWINSTA): BOOL;
export function GetProcessWindowStation (): HWINSTA;
export function SetUserObjectSecurity (hObj: HANDLE, pSIRequested: PSECURITY_INFORMATION, pSID: PSECURITY_DESCRIPTOR): BOOL;
export function GetUserObjectSecurity (hObj: HANDLE, pSIRequested: PSECURITY_INFORMATION, pSID: PSECURITY_DESCRIPTOR, nLength: DWORD, lpnLengthNeeded: LPDWORD): BOOL;
export function GetUserObjectInformationA (hObj: HANDLE, nIndex: int, pvInfo: PVOID, nLength: DWORD, lpnLengthNeeded: LPDWORD): BOOL;
export function GetUserObjectInformationW (hObj: HANDLE, nIndex: int, pvInfo: PVOID, nLength: DWORD, lpnLengthNeeded: LPDWORD): BOOL;
export function GetUserObjectInformation (hObj: HANDLE, nIndex: int, pvInfo: PVOID, nLength: DWORD, lpnLengthNeeded: LPDWORD): BOOL;
export function SetUserObjectInformationA (hObj: HANDLE, nIndex: int, pvInfo: PVOID, nLength: DWORD): BOOL;
export function SetUserObjectInformationW (hObj: HANDLE, nIndex: int, pvInfo: PVOID, nLength: DWORD): BOOL;
export function SetUserObjectInformation (hObj: HANDLE, nIndex: int, pvInfo: PVOID, nLength: DWORD): BOOL;
export function IsHungAppWindow (hwnd: HWND): BOOL;
export function DisableProcessWindowsGhosting (): VOID;
export function RegisterWindowMessageA (lpString: LPCSTR): UINT;
export function RegisterWindowMessageW (lpString: LPCWSTR): UINT;
export function RegisterWindowMessage (lpString: LPCWSTR): UINT;
export function TrackMouseEvent (lpEventTrack: LPTRACKMOUSEEVENT): BOOL;
export function DrawEdge (hdc: HDC, qrc: LPRECT, edge: UINT, grfFlags: UINT): BOOL;
export function DrawFrameControl (param0: HDC, param1: LPRECT, param2: UINT, param3: UINT): BOOL;
export function DrawCaption (hwnd: HWND, hdc: HDC, lprect: "RECT *", flags: UINT): BOOL;
export function DrawAnimatedRects (hwnd: HWND, idAni: int, lprcFrom: "RECT *", lprcTo: "RECT *"): BOOL;
export function GetMessageA (lpMsg: LPMSG, hWnd: HWND, wMsgFilterMin: UINT, wMsgFilterMax: UINT): BOOL;
export function GetMessageW (lpMsg: LPMSG, hWnd: HWND, wMsgFilterMin: UINT, wMsgFilterMax: UINT): BOOL;
export function GetMessage (lpMsg: LPMSG, hWnd: HWND, wMsgFilterMin: UINT, wMsgFilterMax: UINT): BOOL;
export function TranslateMessage (lpMsg: "MSG *"): BOOL;
export function DispatchMessageA (lpMsg: "MSG *"): LRESULT;
export function DispatchMessageW (lpMsg: "MSG *"): LRESULT;
export function DispatchMessage (lpMsg: "MSG *"): LRESULT;
export function SetMessageQueue (cMessagesMax: int): BOOL;
export function PeekMessageA (lpMsg: LPMSG, hWnd: HWND, wMsgFilterMin: UINT, wMsgFilterMax: UINT, wRemoveMsg: UINT): BOOL;
export function PeekMessageW (lpMsg: LPMSG, hWnd: HWND, wMsgFilterMin: UINT, wMsgFilterMax: UINT, wRemoveMsg: UINT): BOOL;
export function PeekMessage (lpMsg: LPMSG, hWnd: HWND, wMsgFilterMin: UINT, wMsgFilterMax: UINT, wRemoveMsg: UINT): BOOL;
export function RegisterHotKey (hWnd: HWND, id: int, fsModifiers: UINT, vk: UINT): BOOL;
export function UnregisterHotKey (hWnd: HWND, id: int): BOOL;
export function ExitWindowsEx (uFlags: UINT, dwReason: DWORD): BOOL;
export function SwapMouseButton (fSwap: BOOL): BOOL;
export function GetMessagePos (): DWORD;
export function GetMessageTime (): LONG;
export function GetMessageExtraInfo (): LPARAM;
export function GetUnpredictedMessagePos (): DWORD;
export function IsWow64Message (): BOOL;
export function SetMessageExtraInfo (lParam: LPARAM): LPARAM;
export function SendMessageA (hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM): LRESULT;
export function SendMessageW (hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM): LRESULT;
export function SendMessage (hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM): LRESULT;
export function SendMessageTimeoutA (hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM, fuFlags: UINT, uTimeout: UINT, lpdwResult: PDWORD_PTR): LRESULT;
export function SendMessageTimeoutW (hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM, fuFlags: UINT, uTimeout: UINT, lpdwResult: PDWORD_PTR): LRESULT;
export function SendMessageTimeout (hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM, fuFlags: UINT, uTimeout: UINT, lpdwResult: PDWORD_PTR): LRESULT;
export function SendNotifyMessageA (hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM): BOOL;
export function SendNotifyMessageW (hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM): BOOL;
export function SendNotifyMessage (hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM): BOOL;
export function SendMessageCallbackA (hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM, lpResultCallBack: SENDASYNCPROC, dwData: ULONG_PTR): BOOL;
export function SendMessageCallbackW (hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM, lpResultCallBack: SENDASYNCPROC, dwData: ULONG_PTR): BOOL;
export function SendMessageCallback (hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM, lpResultCallBack: SENDASYNCPROC, dwData: ULONG_PTR): BOOL;
export function BroadcastSystemMessageExA (flags: DWORD, lpInfo: LPDWORD, Msg: UINT, wParam: WPARAM, lParam: LPARAM, pbsmInfo: PBSMINFO): long;
export function BroadcastSystemMessageExW (flags: DWORD, lpInfo: LPDWORD, Msg: UINT, wParam: WPARAM, lParam: LPARAM, pbsmInfo: PBSMINFO): long;
export function BroadcastSystemMessageEx (flags: DWORD, lpInfo: LPDWORD, Msg: UINT, wParam: WPARAM, lParam: LPARAM, pbsmInfo: PBSMINFO): long;
export function BroadcastSystemMessageA (flags: DWORD, lpInfo: LPDWORD, Msg: UINT, wParam: WPARAM, lParam: LPARAM): long;
export function BroadcastSystemMessageW (flags: DWORD, lpInfo: LPDWORD, Msg: UINT, wParam: WPARAM, lParam: LPARAM): long;
export function BroadcastSystemMessage (flags: DWORD, lpInfo: LPDWORD, Msg: UINT, wParam: WPARAM, lParam: LPARAM): long;
export function BroadcastSystemMessage (flags: DWORD, lpInfo: LPDWORD, Msg: UINT, wParam: WPARAM, lParam: LPARAM): long;
export function RegisterDeviceNotificationA (hRecipient: HANDLE, NotificationFilter: LPVOID, Flags: DWORD): HDEVNOTIFY;
export function RegisterDeviceNotificationW (hRecipient: HANDLE, NotificationFilter: LPVOID, Flags: DWORD): HDEVNOTIFY;
export function RegisterDeviceNotification (hRecipient: HANDLE, NotificationFilter: LPVOID, Flags: DWORD): HDEVNOTIFY;
export function UnregisterDeviceNotification (Handle: HDEVNOTIFY): BOOL;
export function RegisterPowerSettingNotification (hRecipient: HANDLE, PowerSettingGuid: LPCGUID, Flags: DWORD): HPOWERNOTIFY;
export function UnregisterPowerSettingNotification (Handle: HPOWERNOTIFY): BOOL;
export function RegisterSuspendResumeNotification (hRecipient: HANDLE, Flags: DWORD): HPOWERNOTIFY;
export function UnregisterSuspendResumeNotification (Handle: HPOWERNOTIFY): BOOL;
export function PostMessageA (hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM): BOOL;
export function PostMessageW (hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM): BOOL;
export function PostMessage (hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM): BOOL;
export function PostThreadMessageA (idThread: DWORD, Msg: UINT, wParam: WPARAM, lParam: LPARAM): BOOL;
export function PostThreadMessageW (idThread: DWORD, Msg: UINT, wParam: WPARAM, lParam: LPARAM): BOOL;
export function PostThreadMessage (idThread: DWORD, Msg: UINT, wParam: WPARAM, lParam: LPARAM): BOOL;
export function AttachThreadInput (idAttach: DWORD, idAttachTo: DWORD, fAttach: BOOL): BOOL;
export function ReplyMessage (lResult: LRESULT): BOOL;
export function WaitMessage (): BOOL;
export function WaitForInputIdle (hProcess: HANDLE, dwMilliseconds: DWORD): DWORD;
export function PostQuitMessage (nExitCode: int): VOID;
export function CallWindowProcA (lpPrevWndFunc: WNDPROC, hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM): LRESULT;
export function CallWindowProcW (lpPrevWndFunc: WNDPROC, hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM): LRESULT;
export function CallWindowProc (lpPrevWndFunc: WNDPROC, hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM): LRESULT;
export function InSendMessage (): BOOL;
export function InSendMessageEx (lpReserved: LPVOID): DWORD;
export function GetDoubleClickTime (): UINT;
export function SetDoubleClickTime (param0: UINT): BOOL;
export function RegisterClassA (lpWndClass: "WNDCLASSA *"): ATOM;
export function RegisterClassW (lpWndClass: "WNDCLASSW *"): ATOM;
export function RegisterClass (lpWndClass: "WNDCLASSW *"): ATOM;
export function UnregisterClassA (lpClassName: LPCSTR, hInstance: HINSTANCE): BOOL;
export function UnregisterClassW (lpClassName: LPCWSTR, hInstance: HINSTANCE): BOOL;
export function UnregisterClass (lpClassName: LPCWSTR, hInstance: HINSTANCE): BOOL;
export function GetClassInfoA (hInstance: HINSTANCE, lpClassName: LPCSTR, lpWndClass: LPWNDCLASSA): BOOL;
export function GetClassInfoW (hInstance: HINSTANCE, lpClassName: LPCWSTR, lpWndClass: LPWNDCLASSW): BOOL;
export function GetClassInfo (hInstance: HINSTANCE, lpClassName: LPCWSTR, lpWndClass: LPWNDCLASSW): BOOL;
export function RegisterClassExA (param0: "WNDCLASSEXA*"): ATOM;
export function RegisterClassExW (param0: "WNDCLASSEXW*"): ATOM;
export function RegisterClassEx (param0: "WNDCLASSEXW*"): ATOM;
export function GetClassInfoExA (hInstance: HINSTANCE, lpszClass: LPCSTR, lpwcx: LPWNDCLASSEXA): BOOL;
export function GetClassInfoExW (hInstance: HINSTANCE, lpszClass: LPCWSTR, lpwcx: LPWNDCLASSEXW): BOOL;
export function GetClassInfoEx (hInstance: HINSTANCE, lpszClass: LPCWSTR, lpwcx: LPWNDCLASSEXW): BOOL;
export function CreateWindowExA (dwExStyle: DWORD, lpClassName: LPCSTR, lpWindowName: LPCSTR, dwStyle: DWORD, X: int, Y: int, nWidth: int, nHeight: int, hWndParent: HWND, hMenu: HMENU, hInstance: HINSTANCE, lpParam: LPVOID): HWND;
export function CreateWindowExW (dwExStyle: DWORD, lpClassName: LPCWSTR, lpWindowName: LPCWSTR, dwStyle: DWORD, X: int, Y: int, nWidth: int, nHeight: int, hWndParent: HWND, hMenu: HMENU, hInstance: HINSTANCE, lpParam: LPVOID): HWND;
export function CreateWindowEx (dwExStyle: DWORD, lpClassName: LPCWSTR, lpWindowName: LPCWSTR, dwStyle: DWORD, X: int, Y: int, nWidth: int, nHeight: int, hWndParent: HWND, hMenu: HMENU, hInstance: HINSTANCE, lpParam: LPVOID): HWND;
export function IsWindow (hWnd: HWND): BOOL;
export function IsMenu (hMenu: HMENU): BOOL;
export function IsChild (hWndParent: HWND, hWnd: HWND): BOOL;
export function DestroyWindow (hWnd: HWND): BOOL;
export function ShowWindow (hWnd: HWND, nCmdShow: int): BOOL;
export function AnimateWindow (hWnd: HWND, dwTime: DWORD, dwFlags: DWORD): BOOL;
export function UpdateLayeredWindow (hWnd: HWND, hdcDst: HDC, pptDst: "POINT*", psize: "SIZE*", hdcSrc: HDC, pptSrc: "POINT*", crKey: COLORREF, pblend: "BLENDFUNCTION*", dwFlags: DWORD): BOOL;
export function UpdateLayeredWindowIndirect (hWnd: HWND, pULWInfo: "UPDATELAYEREDWINDOWINFO*"): BOOL;
export function GetLayeredWindowAttributes (hwnd: HWND, pcrKey: "COLORREF*", pbAlpha: "BYTE*", pdwFlags: "DWORD*"): BOOL;
export function PrintWindow (hwnd: HWND, hdcBlt: HDC, nFlags: UINT): BOOL;
export function SetLayeredWindowAttributes (hwnd: HWND, crKey: COLORREF, bAlpha: BYTE, dwFlags: DWORD): BOOL;
export function ShowWindowAsync (hWnd: HWND, nCmdShow: int): BOOL;
export function FlashWindow (hWnd: HWND, bInvert: BOOL): BOOL;
export function FlashWindowEx (pfwi: PFLASHWINFO): BOOL;
export function ShowOwnedPopups (hWnd: HWND, fShow: BOOL): BOOL;
export function OpenIcon (hWnd: HWND): BOOL;
export function CloseWindow (hWnd: HWND): BOOL;
export function MoveWindow (hWnd: HWND, X: int, Y: int, nWidth: int, nHeight: int, bRepaint: BOOL): BOOL;
export function SetWindowPos (hWnd: HWND, hWndInsertAfter: HWND, X: int, Y: int, cx: int, cy: int, uFlags: UINT): BOOL;
export function GetWindowPlacement (hWnd: HWND, lpwndpl: "WINDOWPLACEMENT *"): BOOL;
export function SetWindowPlacement (hWnd: HWND, lpwndpl: "WINDOWPLACEMENT *"): BOOL;
export function GetWindowDisplayAffinity (hWnd: HWND, pdwAffinity: "DWORD*"): BOOL;
export function SetWindowDisplayAffinity (hWnd: HWND, dwAffinity: DWORD): BOOL;
export function BeginDeferWindowPos (nNumWindows: int): HDWP;
export function DeferWindowPos (hWinPosInfo: HDWP, hWnd: HWND, hWndInsertAfter: HWND, x: int, y: int, cx: int, cy: int, uFlags: UINT): HDWP;
export function EndDeferWindowPos (hWinPosInfo: HDWP): BOOL;
export function IsWindowVisible (hWnd: HWND): BOOL;
export function IsIconic (hWnd: HWND): BOOL;
export function AnyPopup (): BOOL;
export function BringWindowToTop (hWnd: HWND): BOOL;
export function IsZoomed (hWnd: HWND): BOOL;
export function CreateDialogParamA (hInstance: HINSTANCE, lpTemplateName: LPCSTR, hWndParent: HWND, lpDialogFunc: DLGPROC, dwInitParam: LPARAM): HWND;
export function CreateDialogParamW (hInstance: HINSTANCE, lpTemplateName: LPCWSTR, hWndParent: HWND, lpDialogFunc: DLGPROC, dwInitParam: LPARAM): HWND;
export function CreateDialogParam (hInstance: HINSTANCE, lpTemplateName: LPCWSTR, hWndParent: HWND, lpDialogFunc: DLGPROC, dwInitParam: LPARAM): HWND;
export function CreateDialogIndirectParamA (hInstance: HINSTANCE, lpTemplate: LPCDLGTEMPLATEA, hWndParent: HWND, lpDialogFunc: DLGPROC, dwInitParam: LPARAM): HWND;
export function CreateDialogIndirectParamW (hInstance: HINSTANCE, lpTemplate: LPCDLGTEMPLATEW, hWndParent: HWND, lpDialogFunc: DLGPROC, dwInitParam: LPARAM): HWND;
export function CreateDialogIndirectParam (hInstance: HINSTANCE, lpTemplate: LPCDLGTEMPLATEW, hWndParent: HWND, lpDialogFunc: DLGPROC, dwInitParam: LPARAM): HWND;
export function DialogBoxParamA (hInstance: HINSTANCE, lpTemplateName: LPCSTR, hWndParent: HWND, lpDialogFunc: DLGPROC, dwInitParam: LPARAM): INT_PTR;
export function DialogBoxParamW (hInstance: HINSTANCE, lpTemplateName: LPCWSTR, hWndParent: HWND, lpDialogFunc: DLGPROC, dwInitParam: LPARAM): INT_PTR;
export function DialogBoxParam (hInstance: HINSTANCE, lpTemplateName: LPCWSTR, hWndParent: HWND, lpDialogFunc: DLGPROC, dwInitParam: LPARAM): INT_PTR;
export function DialogBoxIndirectParamA (hInstance: HINSTANCE, hDialogTemplate: LPCDLGTEMPLATEA, hWndParent: HWND, lpDialogFunc: DLGPROC, dwInitParam: LPARAM): INT_PTR;
export function DialogBoxIndirectParamW (hInstance: HINSTANCE, hDialogTemplate: LPCDLGTEMPLATEW, hWndParent: HWND, lpDialogFunc: DLGPROC, dwInitParam: LPARAM): INT_PTR;
export function DialogBoxIndirectParam (hInstance: HINSTANCE, hDialogTemplate: LPCDLGTEMPLATEW, hWndParent: HWND, lpDialogFunc: DLGPROC, dwInitParam: LPARAM): INT_PTR;
export function EndDialog (hDlg: HWND, nResult: INT_PTR): BOOL;
export function GetDlgItem (hDlg: HWND, nIDDlgItem: int): HWND;
export function SetDlgItemInt (hDlg: HWND, nIDDlgItem: int, uValue: UINT, bSigned: BOOL): BOOL;
export function GetDlgItemInt (hDlg: HWND, nIDDlgItem: int, lpTranslated: "BOOL *", bSigned: BOOL): UINT;
export function SetDlgItemTextA (hDlg: HWND, nIDDlgItem: int, lpString: LPCSTR): BOOL;
export function SetDlgItemTextW (hDlg: HWND, nIDDlgItem: int, lpString: LPCWSTR): BOOL;
export function SetDlgItemText (hDlg: HWND, nIDDlgItem: int, lpString: LPCWSTR): BOOL;
export function GetDlgItemTextA (hDlg: HWND, nIDDlgItem: int, lpString: LPSTR, cchMax: int): UINT;
export function GetDlgItemTextW (hDlg: HWND, nIDDlgItem: int, lpString: LPWSTR, cchMax: int): UINT;
export function GetDlgItemText (hDlg: HWND, nIDDlgItem: int, lpString: LPWSTR, cchMax: int): UINT;
export function CheckDlgButton (hDlg: HWND, nIDButton: int, uCheck: UINT): BOOL;
export function CheckRadioButton (hDlg: HWND, nIDFirstButton: int, nIDLastButton: int, nIDCheckButton: int): BOOL;
export function IsDlgButtonChecked (hDlg: HWND, nIDButton: int): UINT;
export function SendDlgItemMessageA (hDlg: HWND, nIDDlgItem: int, Msg: UINT, wParam: WPARAM, lParam: LPARAM): LRESULT;
export function SendDlgItemMessageW (hDlg: HWND, nIDDlgItem: int, Msg: UINT, wParam: WPARAM, lParam: LPARAM): LRESULT;
export function SendDlgItemMessage (hDlg: HWND, nIDDlgItem: int, Msg: UINT, wParam: WPARAM, lParam: LPARAM): LRESULT;
export function GetNextDlgGroupItem (hDlg: HWND, hCtl: HWND, bPrevious: BOOL): HWND;
export function GetNextDlgTabItem (hDlg: HWND, hCtl: HWND, bPrevious: BOOL): HWND;
export function GetDlgCtrlID (hWnd: HWND): int;
export function GetDialogBaseUnits (): long;
export function SetDialogControlDpiChangeBehavior (hWnd: HWND, mask: DIALOG_CONTROL_DPI_CHANGE_BEHAVIORS, values: DIALOG_CONTROL_DPI_CHANGE_BEHAVIORS): BOOL;
export function GetDialogControlDpiChangeBehavior (hWnd: HWND): DIALOG_CONTROL_DPI_CHANGE_BEHAVIORS;
export function SetDialogDpiChangeBehavior (hDlg: HWND, mask: DIALOG_DPI_CHANGE_BEHAVIORS, values: DIALOG_DPI_CHANGE_BEHAVIORS): BOOL;
export function GetDialogDpiChangeBehavior (hDlg: HWND): DIALOG_DPI_CHANGE_BEHAVIORS;
export function CallMsgFilterA (lpMsg: LPMSG, nCode: int): BOOL;
export function CallMsgFilterW (lpMsg: LPMSG, nCode: int): BOOL;
export function CallMsgFilter (lpMsg: LPMSG, nCode: int): BOOL;
export function OpenClipboard (hWndNewOwner: HWND): BOOL;
export function CloseClipboard (): BOOL;
export function GetClipboardSequenceNumber (): DWORD;
export function GetClipboardOwner (): HWND;
export function SetClipboardViewer (hWndNewViewer: HWND): HWND;
export function GetClipboardViewer (): HWND;
export function ChangeClipboardChain (hWndRemove: HWND, hWndNewNext: HWND): BOOL;
export function SetClipboardData (uFormat: UINT, hMem: HANDLE): HANDLE;
export function GetClipboardData (uFormat: UINT): HANDLE;
export function RegisterClipboardFormatA (lpszFormat: LPCSTR): UINT;
export function RegisterClipboardFormatW (lpszFormat: LPCWSTR): UINT;
export function RegisterClipboardFormat (lpszFormat: LPCWSTR): UINT;
export function CountClipboardFormats (): int;
export function EnumClipboardFormats (format: UINT): UINT;
export function GetClipboardFormatNameA (format: UINT, lpszFormatName: LPSTR, cchMaxCount: int): int;
export function GetClipboardFormatNameW (format: UINT, lpszFormatName: LPWSTR, cchMaxCount: int): int;
export function GetClipboardFormatName (format: UINT, lpszFormatName: LPWSTR, cchMaxCount: int): int;
export function EmptyClipboard (): BOOL;
export function IsClipboardFormatAvailable (format: UINT): BOOL;
export function GetPriorityClipboardFormat (paFormatPriorityList: "UINT *", cFormats: int): int;
export function GetOpenClipboardWindow (): HWND;
export function AddClipboardFormatListener (hwnd: HWND): BOOL;
export function RemoveClipboardFormatListener (hwnd: HWND): BOOL;
export function GetUpdatedClipboardFormats (lpuiFormats: PUINT, cFormats: UINT, pcFormatsOut: PUINT): BOOL;
export function CharToOemBuffA (lpszSrc: LPCSTR, lpszDst: LPSTR, cchDstLength: DWORD): BOOL;
export function CharToOemBuffW (lpszSrc: LPCWSTR, lpszDst: LPSTR, cchDstLength: DWORD): BOOL;
export function CharToOemBuff (lpszSrc: LPCWSTR, lpszDst: LPSTR, cchDstLength: DWORD): BOOL;
export function OemToCharBuffA (lpszSrc: LPCSTR, lpszDst: LPSTR, cchDstLength: DWORD): BOOL;
export function OemToCharBuffW (lpszSrc: LPCSTR, lpszDst: LPWSTR, cchDstLength: DWORD): BOOL;
export function OemToCharBuff (lpszSrc: LPCSTR, lpszDst: LPWSTR, cchDstLength: DWORD): BOOL;
export function CharUpperA (lpsz: LPSTR): LPSTR;
export function CharUpperW (lpsz: LPWSTR): LPWSTR;
export function CharUpper (lpsz: LPWSTR): LPWSTR;
export function CharLowerA (lpsz: LPSTR): LPSTR;
export function CharLowerW (lpsz: LPWSTR): LPWSTR;
export function CharLower (lpsz: LPWSTR): LPWSTR;
export function CharNextA (lpsz: LPCSTR): LPSTR;
export function CharNextW (lpsz: LPCWSTR): LPWSTR;
export function CharNext (lpsz: LPCWSTR): LPWSTR;
export function CharPrevA (lpszStart: LPCSTR, lpszCurrent: LPCSTR): LPSTR;
export function CharPrevW (lpszStart: LPCWSTR, lpszCurrent: LPCWSTR): LPWSTR;
export function CharPrev (lpszStart: LPCWSTR, lpszCurrent: LPCWSTR): LPWSTR;
export function CharNextExA (CodePage: WORD, lpCurrentChar: LPCSTR, dwFlags: DWORD): LPSTR;
export function CharPrevExA (CodePage: WORD, lpStart: LPCSTR, lpCurrentChar: LPCSTR, dwFlags: DWORD): LPSTR;
export function IsCharAlphaA (ch: CHAR): BOOL;
export function IsCharAlphaW (ch: WCHAR): BOOL;
export function IsCharAlpha (ch: WCHAR): BOOL;
export function IsCharAlphaNumericA (ch: CHAR): BOOL;
export function IsCharAlphaNumericW (ch: WCHAR): BOOL;
export function IsCharAlphaNumeric (ch: WCHAR): BOOL;
export function IsCharUpperA (ch: CHAR): BOOL;
export function IsCharUpperW (ch: WCHAR): BOOL;
export function IsCharUpper (ch: WCHAR): BOOL;
export function IsCharLowerA (ch: CHAR): BOOL;
export function IsCharLowerW (ch: WCHAR): BOOL;
export function IsCharLower (ch: WCHAR): BOOL;
export function SetFocus (hWnd: HWND): HWND;
export function GetActiveWindow (): HWND;
export function GetFocus (): HWND;
export function GetKBCodePage (): UINT;
export function GetKeyState (nVirtKey: int): SHORT;
export function GetAsyncKeyState (vKey: int): SHORT;
export function GetKeyboardState (lpKeyState: PBYTE): BOOL;
export function SetKeyboardState (lpKeyState: LPBYTE): BOOL;
export function GetKeyNameTextA (lParam: LONG, lpString: LPSTR, cchSize: int): int;
export function GetKeyNameTextW (lParam: LONG, lpString: LPWSTR, cchSize: int): int;
export function GetKeyNameText (lParam: LONG, lpString: LPWSTR, cchSize: int): int;
export function GetKeyboardType (nTypeFlag: int): int;
export function ToUnicode (wVirtKey: UINT, wScanCode: UINT, lpKeyState: "BYTE *", pwszBuff: LPWSTR, cchBuff: int, wFlags: UINT): int;
export function OemKeyScan (wOemChar: WORD): DWORD;
export function VkKeyScanA (ch: CHAR): SHORT;
export function VkKeyScanW (ch: WCHAR): SHORT;
export function VkKeyScan (ch: WCHAR): SHORT;
export function VkKeyScanExA (ch: CHAR, dwhkl: HKL): SHORT;
export function VkKeyScanExW (ch: WCHAR, dwhkl: HKL): SHORT;
export function VkKeyScanEx (ch: WCHAR, dwhkl: HKL): SHORT;
export function keybd_event (bVk: BYTE, bScan: BYTE, dwFlags: DWORD, dwExtraInfo: ULONG_PTR): VOID;
export function mouse_event (dwFlags: DWORD, dx: DWORD, dy: DWORD, dwData: DWORD, dwExtraInfo: ULONG_PTR): VOID;
export function SendInput (cInputs: UINT, pInputs: LPINPUT, cbSize: int): UINT;
export function GetTouchInputInfo (hTouchInput: HTOUCHINPUT, cInputs: UINT, pInputs: PTOUCHINPUT, cbSize: int): BOOL;
export function CloseTouchInputHandle (hTouchInput: HTOUCHINPUT): BOOL;
export function RegisterTouchWindow (hwnd: HWND, ulFlags: ULONG): BOOL;
export function UnregisterTouchWindow (hwnd: HWND): BOOL;
export function IsTouchWindow (hwnd: HWND, pulFlags: PULONG): BOOL;
export function InitializeTouchInjection (maxCount: UINT32, dwMode: DWORD): BOOL;
export function InjectTouchInput (count: UINT32, contacts: "POINTER_TOUCH_INFO *"): BOOL;
export function GetPointerType (pointerId: UINT32, pointerType: "POINTER_INPUT_TYPE *"): BOOL;
export function GetPointerCursorId (pointerId: UINT32, cursorId: "UINT32 *"): BOOL;
export function GetPointerInfo (pointerId: UINT32, pointerInfo: "POINTER_INFO *"): BOOL;
export function GetPointerInfoHistory (pointerId: UINT32, entriesCount: "UINT32 *", pointerInfo: "POINTER_INFO *"): BOOL;
export function GetPointerFrameInfo (pointerId: UINT32, pointerCount: "UINT32 *", pointerInfo: "POINTER_INFO *"): BOOL;
export function GetPointerFrameInfoHistory (pointerId: UINT32, entriesCount: "UINT32 *", pointerCount: "UINT32 *", pointerInfo: "POINTER_INFO *"): BOOL;
export function GetPointerTouchInfo (pointerId: UINT32, touchInfo: "POINTER_TOUCH_INFO *"): BOOL;
export function GetPointerTouchInfoHistory (pointerId: UINT32, entriesCount: "UINT32 *", touchInfo: "POINTER_TOUCH_INFO *"): BOOL;
export function GetPointerFrameTouchInfo (pointerId: UINT32, pointerCount: "UINT32 *", touchInfo: "POINTER_TOUCH_INFO *"): BOOL;
export function GetPointerFrameTouchInfoHistory (pointerId: UINT32, entriesCount: "UINT32 *", pointerCount: "UINT32 *", touchInfo: "POINTER_TOUCH_INFO *"): BOOL;
export function GetPointerPenInfo (pointerId: UINT32, penInfo: "POINTER_PEN_INFO *"): BOOL;
export function GetPointerPenInfoHistory (pointerId: UINT32, entriesCount: "UINT32 *", penInfo: "POINTER_PEN_INFO *"): BOOL;
export function GetPointerFramePenInfo (pointerId: UINT32, pointerCount: "UINT32 *", penInfo: "POINTER_PEN_INFO *"): BOOL;
export function GetPointerFramePenInfoHistory (pointerId: UINT32, entriesCount: "UINT32 *", pointerCount: "UINT32 *", penInfo: "POINTER_PEN_INFO *"): BOOL;
export function SkipPointerFrameMessages (pointerId: UINT32): BOOL;
export function RegisterPointerInputTarget (hwnd: HWND, pointerType: POINTER_INPUT_TYPE): BOOL;
export function UnregisterPointerInputTarget (hwnd: HWND, pointerType: POINTER_INPUT_TYPE): BOOL;
export function RegisterPointerInputTargetEx (hwnd: HWND, pointerType: POINTER_INPUT_TYPE, fObserve: BOOL): BOOL;
export function UnregisterPointerInputTargetEx (hwnd: HWND, pointerType: POINTER_INPUT_TYPE): BOOL;
export function CreateSyntheticPointerDevice (pointerType: POINTER_INPUT_TYPE, maxCount: ULONG, mode: POINTER_FEEDBACK_MODE): HSYNTHETICPOINTERDEVICE;
export function InjectSyntheticPointerInput (device: HSYNTHETICPOINTERDEVICE, pointerInfo: "POINTER_TYPE_INFO*", count: UINT32): BOOL;
export function DestroySyntheticPointerDevice (device: HSYNTHETICPOINTERDEVICE): VOID;
export function EnableMouseInPointer (fEnable: BOOL): BOOL;
export function IsMouseInPointerEnabled (): BOOL;
export function EnableMouseInPointerForThread (): BOOL;
export function RegisterTouchHitTestingWindow (hwnd: HWND, value: ULONG): BOOL;
export function EvaluateProximityToRect (controlBoundingBox: "RECT *", pHitTestingInput: "TOUCH_HIT_TESTING_INPUT *", pProximityEval: "TOUCH_HIT_TESTING_PROXIMITY_EVALUATION *"): BOOL;
export function EvaluateProximityToPolygon (numVertices: UINT32, controlPolygon: "POINT *", pHitTestingInput: "TOUCH_HIT_TESTING_INPUT *", pProximityEval: "TOUCH_HIT_TESTING_PROXIMITY_EVALUATION *"): BOOL;
export function PackTouchHitTestingProximityEvaluation (pHitTestingInput: "TOUCH_HIT_TESTING_INPUT *", pProximityEval: "TOUCH_HIT_TESTING_PROXIMITY_EVALUATION *"): LRESULT;
export function GetWindowFeedbackSetting (hwnd: HWND, feedback: FEEDBACK_TYPE, dwFlags: DWORD, pSize: "UINT32*", config: "VOID*"): BOOL;
export function SetWindowFeedbackSetting (hwnd: HWND, feedback: FEEDBACK_TYPE, dwFlags: DWORD, size: UINT32, configuration: "VOID*"): BOOL;
export function GetPointerInputTransform (pointerId: UINT32, historyCount: UINT32, inputTransform: "INPUT_TRANSFORM *"): BOOL;
export function GetLastInputInfo (plii: PLASTINPUTINFO): BOOL;
export function MapVirtualKeyA (uCode: UINT, uMapType: UINT): UINT;
export function MapVirtualKeyW (uCode: UINT, uMapType: UINT): UINT;
export function MapVirtualKey (uCode: UINT, uMapType: UINT): UINT;
export function MapVirtualKeyExA (uCode: UINT, uMapType: UINT, dwhkl: HKL): UINT;
export function MapVirtualKeyExW (uCode: UINT, uMapType: UINT, dwhkl: HKL): UINT;
export function MapVirtualKeyEx (uCode: UINT, uMapType: UINT, dwhkl: HKL): UINT;
export function GetInputState (): BOOL;
export function GetQueueStatus (flags: UINT): DWORD;
export function GetCapture (): HWND;
export function SetCapture (hWnd: HWND): HWND;
export function ReleaseCapture (): BOOL;
export function SetTimer (hWnd: HWND, nIDEvent: UINT_PTR, uElapse: UINT, lpTimerFunc: TIMERPROC): UINT_PTR;
export function SetCoalescableTimer (hWnd: HWND, nIDEvent: UINT_PTR, uElapse: UINT, lpTimerFunc: TIMERPROC, uToleranceDelay: ULONG): UINT_PTR;
export function KillTimer (hWnd: HWND, uIDEvent: UINT_PTR): BOOL;
export function IsWindowUnicode (hWnd: HWND): BOOL;
export function EnableWindow (hWnd: HWND, bEnable: BOOL): BOOL;
export function IsWindowEnabled (hWnd: HWND): BOOL;
export function LoadAcceleratorsA (hInstance: HINSTANCE, lpTableName: LPCSTR): HACCEL;
export function LoadAcceleratorsW (hInstance: HINSTANCE, lpTableName: LPCWSTR): HACCEL;
export function LoadAccelerators (hInstance: HINSTANCE, lpTableName: LPCWSTR): HACCEL;
export function CreateAcceleratorTableA (paccel: LPACCEL, cAccel: int): HACCEL;
export function CreateAcceleratorTableW (paccel: LPACCEL, cAccel: int): HACCEL;
export function CreateAcceleratorTable (paccel: LPACCEL, cAccel: int): HACCEL;
export function DestroyAcceleratorTable (hAccel: HACCEL): BOOL;
export function CopyAcceleratorTableA (hAccelSrc: HACCEL, lpAccelDst: LPACCEL, cAccelEntries: int): int;
export function CopyAcceleratorTableW (hAccelSrc: HACCEL, lpAccelDst: LPACCEL, cAccelEntries: int): int;
export function CopyAcceleratorTable (hAccelSrc: HACCEL, lpAccelDst: LPACCEL, cAccelEntries: int): int;
export function TranslateAcceleratorA (hWnd: HWND, hAccTable: HACCEL, lpMsg: LPMSG): int;
export function TranslateAcceleratorW (hWnd: HWND, hAccTable: HACCEL, lpMsg: LPMSG): int;
export function TranslateAccelerator (hWnd: HWND, hAccTable: HACCEL, lpMsg: LPMSG): int;
export function GetSystemMetrics (nIndex: int): int;
export function GetSystemMetricsForDpi (nIndex: int, dpi: UINT): int;
export function LoadMenuA (hInstance: HINSTANCE, lpMenuName: LPCSTR): HMENU;
export function LoadMenuW (hInstance: HINSTANCE, lpMenuName: LPCWSTR): HMENU;
export function LoadMenu (hInstance: HINSTANCE, lpMenuName: LPCWSTR): HMENU;
export function LoadMenuIndirectA (lpMenuTemplate: "MENUTEMPLATEA *"): HMENU;
export function LoadMenuIndirectW (lpMenuTemplate: "MENUTEMPLATEW *"): HMENU;
export function LoadMenuIndirect (lpMenuTemplate: "MENUTEMPLATEW *"): HMENU;
export function GetMenu (hWnd: HWND): HMENU;
export function SetMenu (hWnd: HWND, hMenu: HMENU): BOOL;
export function ChangeMenuA (hMenu: HMENU, cmd: UINT, lpszNewItem: LPCSTR, cmdInsert: UINT, flags: UINT): BOOL;
export function ChangeMenuW (hMenu: HMENU, cmd: UINT, lpszNewItem: LPCWSTR, cmdInsert: UINT, flags: UINT): BOOL;
export function ChangeMenu (hMenu: HMENU, cmd: UINT, lpszNewItem: LPCWSTR, cmdInsert: UINT, flags: UINT): BOOL;
export function HiliteMenuItem (hWnd: HWND, hMenu: HMENU, uIDHiliteItem: UINT, uHilite: UINT): BOOL;
export function GetMenuStringA (hMenu: HMENU, uIDItem: UINT, lpString: LPSTR, cchMax: int, flags: UINT): int;
export function GetMenuStringW (hMenu: HMENU, uIDItem: UINT, lpString: LPWSTR, cchMax: int, flags: UINT): int;
export function GetMenuString (hMenu: HMENU, uIDItem: UINT, lpString: LPWSTR, cchMax: int, flags: UINT): int;
export function GetMenuState (hMenu: HMENU, uId: UINT, uFlags: UINT): UINT;
export function DrawMenuBar (hWnd: HWND): BOOL;
export function GetSystemMenu (hWnd: HWND, bRevert: BOOL): HMENU;
export function CreateMenu (): HMENU;
export function CreatePopupMenu (): HMENU;
export function DestroyMenu (hMenu: HMENU): BOOL;
export function CheckMenuItem (hMenu: HMENU, uIDCheckItem: UINT, uCheck: UINT): DWORD;
export function EnableMenuItem (hMenu: HMENU, uIDEnableItem: UINT, uEnable: UINT): BOOL;
export function GetSubMenu (hMenu: HMENU, nPos: int): HMENU;
export function GetMenuItemID (hMenu: HMENU, nPos: int): UINT;
export function GetMenuItemCount (hMenu: HMENU): int;
export function InsertMenuA (hMenu: HMENU, uPosition: UINT, uFlags: UINT, uIDNewItem: UINT_PTR, lpNewItem: LPCSTR): BOOL;
export function InsertMenuW (hMenu: HMENU, uPosition: UINT, uFlags: UINT, uIDNewItem: UINT_PTR, lpNewItem: LPCWSTR): BOOL;
export function InsertMenu (hMenu: HMENU, uPosition: UINT, uFlags: UINT, uIDNewItem: UINT_PTR, lpNewItem: LPCWSTR): BOOL;
export function AppendMenuA (hMenu: HMENU, uFlags: UINT, uIDNewItem: UINT_PTR, lpNewItem: LPCSTR): BOOL;
export function AppendMenuW (hMenu: HMENU, uFlags: UINT, uIDNewItem: UINT_PTR, lpNewItem: LPCWSTR): BOOL;
export function AppendMenu (hMenu: HMENU, uFlags: UINT, uIDNewItem: UINT_PTR, lpNewItem: LPCWSTR): BOOL;
export function ModifyMenuA (hMnu: HMENU, uPosition: UINT, uFlags: UINT, uIDNewItem: UINT_PTR, lpNewItem: LPCSTR): BOOL;
export function ModifyMenuW (hMnu: HMENU, uPosition: UINT, uFlags: UINT, uIDNewItem: UINT_PTR, lpNewItem: LPCWSTR): BOOL;
export function ModifyMenu (hMnu: HMENU, uPosition: UINT, uFlags: UINT, uIDNewItem: UINT_PTR, lpNewItem: LPCWSTR): BOOL;
export function RemoveMenu (hMenu: HMENU, uPosition: UINT, uFlags: UINT): BOOL;
export function DeleteMenu (hMenu: HMENU, uPosition: UINT, uFlags: UINT): BOOL;
export function SetMenuItemBitmaps (hMenu: HMENU, uPosition: UINT, uFlags: UINT, hBitmapUnchecked: HBITMAP, hBitmapChecked: HBITMAP): BOOL;
export function GetMenuCheckMarkDimensions (): LONG;
export function TrackPopupMenu (hMenu: HMENU, uFlags: UINT, x: int, y: int, nReserved: int, hWnd: HWND, prcRect: "RECT *"): BOOL;
export function TrackPopupMenuEx (hMenu: HMENU, uFlags: UINT, x: int, y: int, hwnd: HWND, lptpm: LPTPMPARAMS): BOOL;
export function CalculatePopupWindowPosition (anchorPoint: "POINT *", windowSize: "SIZE *", flags: UINT, excludeRect: "RECT *", popupWindowPosition: "RECT *"): BOOL;
export function GetMenuInfo (param0: HMENU, param1: LPMENUINFO): BOOL;
export function SetMenuInfo (param0: HMENU, param1: LPCMENUINFO): BOOL;
export function EndMenu (): BOOL;
export function InsertMenuItemA (hmenu: HMENU, item: UINT, fByPosition: BOOL, lpmi: LPCMENUITEMINFOA): BOOL;
export function InsertMenuItemW (hmenu: HMENU, item: UINT, fByPosition: BOOL, lpmi: LPCMENUITEMINFOW): BOOL;
export function InsertMenuItem (hmenu: HMENU, item: UINT, fByPosition: BOOL, lpmi: LPCMENUITEMINFOW): BOOL;
export function GetMenuItemInfoA (hmenu: HMENU, item: UINT, fByPosition: BOOL, lpmii: LPMENUITEMINFOA): BOOL;
export function GetMenuItemInfoW (hmenu: HMENU, item: UINT, fByPosition: BOOL, lpmii: LPMENUITEMINFOW): BOOL;
export function GetMenuItemInfo (hmenu: HMENU, item: UINT, fByPosition: BOOL, lpmii: LPMENUITEMINFOW): BOOL;
export function SetMenuItemInfoA (hmenu: HMENU, item: UINT, fByPositon: BOOL, lpmii: LPCMENUITEMINFOA): BOOL;
export function SetMenuItemInfoW (hmenu: HMENU, item: UINT, fByPositon: BOOL, lpmii: LPCMENUITEMINFOW): BOOL;
export function SetMenuItemInfo (hmenu: HMENU, item: UINT, fByPositon: BOOL, lpmii: LPCMENUITEMINFOW): BOOL;
export function GetMenuDefaultItem (hMenu: HMENU, fByPos: UINT, gmdiFlags: UINT): UINT;
export function SetMenuDefaultItem (hMenu: HMENU, uItem: UINT, fByPos: UINT): BOOL;
export function GetMenuItemRect (hWnd: HWND, hMenu: HMENU, uItem: UINT, lprcItem: LPRECT): BOOL;
export function MenuItemFromPoint (hWnd: HWND, hMenu: HMENU, ptScreen: POINT): int;
export function DragObject (hwndParent: HWND, hwndFrom: HWND, fmt: UINT, data: ULONG_PTR, hcur: HCURSOR): DWORD;
export function DragDetect (hwnd: HWND, pt: POINT): BOOL;
export function DrawIcon (hDC: HDC, X: int, Y: int, hIcon: HICON): BOOL;
export function GrayStringA (hDC: HDC, hBrush: HBRUSH, lpOutputFunc: GRAYSTRINGPROC, lpData: LPARAM, nCount: int, X: int, Y: int, nWidth: int, nHeight: int): BOOL;
export function GrayStringW (hDC: HDC, hBrush: HBRUSH, lpOutputFunc: GRAYSTRINGPROC, lpData: LPARAM, nCount: int, X: int, Y: int, nWidth: int, nHeight: int): BOOL;
export function GrayString (hDC: HDC, hBrush: HBRUSH, lpOutputFunc: GRAYSTRINGPROC, lpData: LPARAM, nCount: int, X: int, Y: int, nWidth: int, nHeight: int): BOOL;
export function DrawStateA (hdc: HDC, hbrFore: HBRUSH, qfnCallBack: DRAWSTATEPROC, lData: LPARAM, wData: WPARAM, x: int, y: int, cx: int, cy: int, uFlags: UINT): BOOL;
export function DrawStateW (hdc: HDC, hbrFore: HBRUSH, qfnCallBack: DRAWSTATEPROC, lData: LPARAM, wData: WPARAM, x: int, y: int, cx: int, cy: int, uFlags: UINT): BOOL;
export function DrawState (hdc: HDC, hbrFore: HBRUSH, qfnCallBack: DRAWSTATEPROC, lData: LPARAM, wData: WPARAM, x: int, y: int, cx: int, cy: int, uFlags: UINT): BOOL;
export function UpdateWindow (hWnd: HWND): BOOL;
export function SetActiveWindow (hWnd: HWND): HWND;
export function GetForegroundWindow (): HWND;
export function PaintDesktop (hdc: HDC): BOOL;
export function SwitchToThisWindow (hwnd: HWND, fUnknown: BOOL): VOID;
export function SetForegroundWindow (hWnd: HWND): BOOL;
export function AllowSetForegroundWindow (dwProcessId: DWORD): BOOL;
export function LockSetForegroundWindow (uLockCode: UINT): BOOL;
export function WindowFromDC (hDC: HDC): HWND;
export function GetDC (hWnd: HWND): HDC;
export function GetDCEx (hWnd: HWND, hrgnClip: HRGN, flags: DWORD): HDC;
export function GetWindowDC (hWnd: HWND): HDC;
export function ReleaseDC (hWnd: HWND, hDC: HDC): int;
export function BeginPaint (hWnd: HWND, lpPaint: LPPAINTSTRUCT): HDC;
export function EndPaint (hWnd: HWND, lpPaint: "PAINTSTRUCT *"): BOOL;
export function GetUpdateRect (hWnd: HWND, lpRect: LPRECT, bErase: BOOL): BOOL;
export function GetUpdateRgn (hWnd: HWND, hRgn: HRGN, bErase: BOOL): int;
export function SetWindowRgn (hWnd: HWND, hRgn: HRGN, bRedraw: BOOL): int;
export function GetWindowRgn (hWnd: HWND, hRgn: HRGN): int;
export function GetWindowRgnBox (hWnd: HWND, lprc: LPRECT): int;
export function ExcludeUpdateRgn (hDC: HDC, hWnd: HWND): int;
export function InvalidateRect (hWnd: HWND, lpRect: "RECT *", bErase: BOOL): BOOL;
export function ValidateRect (hWnd: HWND, lpRect: "RECT *"): BOOL;
export function InvalidateRgn (hWnd: HWND, hRgn: HRGN, bErase: BOOL): BOOL;
export function ValidateRgn (hWnd: HWND, hRgn: HRGN): BOOL;
export function RedrawWindow (hWnd: HWND, lprcUpdate: "RECT *", hrgnUpdate: HRGN, flags: UINT): BOOL;
export function LockWindowUpdate (hWndLock: HWND): BOOL;
export function ScrollWindow (hWnd: HWND, XAmount: int, YAmount: int, lpRect: "RECT *", lpClipRect: "RECT *"): BOOL;
export function ScrollDC (hDC: HDC, dx: int, dy: int, lprcScroll: "RECT *", lprcClip: "RECT *", hrgnUpdate: HRGN, lprcUpdate: LPRECT): BOOL;
export function ScrollWindowEx (hWnd: HWND, dx: int, dy: int, prcScroll: "RECT *", prcClip: "RECT *", hrgnUpdate: HRGN, prcUpdate: LPRECT, flags: UINT): int;
export function SetScrollPos (hWnd: HWND, nBar: int, nPos: int, bRedraw: BOOL): int;
export function GetScrollPos (hWnd: HWND, nBar: int): int;
export function SetScrollRange (hWnd: HWND, nBar: int, nMinPos: int, nMaxPos: int, bRedraw: BOOL): BOOL;
export function GetScrollRange (hWnd: HWND, nBar: int, lpMinPos: LPINT, lpMaxPos: LPINT): BOOL;
export function ShowScrollBar (hWnd: HWND, wBar: int, bShow: BOOL): BOOL;
export function EnableScrollBar (hWnd: HWND, wSBflags: UINT, wArrows: UINT): BOOL;
export function SetPropA (hWnd: HWND, lpString: LPCSTR, hData: HANDLE): BOOL;
export function SetPropW (hWnd: HWND, lpString: LPCWSTR, hData: HANDLE): BOOL;
export function SetProp (hWnd: HWND, lpString: LPCWSTR, hData: HANDLE): BOOL;
export function GetPropA (hWnd: HWND, lpString: LPCSTR): HANDLE;
export function GetPropW (hWnd: HWND, lpString: LPCWSTR): HANDLE;
export function GetProp (hWnd: HWND, lpString: LPCWSTR): HANDLE;
export function RemovePropA (hWnd: HWND, lpString: LPCSTR): HANDLE;
export function RemovePropW (hWnd: HWND, lpString: LPCWSTR): HANDLE;
export function RemoveProp (hWnd: HWND, lpString: LPCWSTR): HANDLE;
export function EnumPropsExA (hWnd: HWND, lpEnumFunc: PROPENUMPROCEXA, lParam: LPARAM): int;
export function EnumPropsExW (hWnd: HWND, lpEnumFunc: PROPENUMPROCEXW, lParam: LPARAM): int;
export function EnumPropsEx (hWnd: HWND, lpEnumFunc: PROPENUMPROCEXW, lParam: LPARAM): int;
export function EnumPropsA (hWnd: HWND, lpEnumFunc: PROPENUMPROCA): int;
export function EnumPropsW (hWnd: HWND, lpEnumFunc: PROPENUMPROCW): int;
export function EnumProps (hWnd: HWND, lpEnumFunc: PROPENUMPROCW): int;
export function SetWindowTextA (hWnd: HWND, lpString: LPCSTR): BOOL;
export function SetWindowTextW (hWnd: HWND, lpString: LPCWSTR): BOOL;
export function SetWindowText (hWnd: HWND, lpString: LPCWSTR): BOOL;
export function GetWindowTextA (hWnd: HWND, lpString: LPSTR, nMaxCount: int): int;
export function GetWindowTextW (hWnd: HWND, lpString: LPWSTR, nMaxCount: int): int;
export function GetWindowText (hWnd: HWND, lpString: LPWSTR, nMaxCount: int): int;
export function GetWindowTextLengthA (hWnd: HWND): int;
export function GetWindowTextLengthW (hWnd: HWND): int;
export function GetWindowTextLength (hWnd: HWND): int;
export function GetClientRect (hWnd: HWND, lpRect: LPRECT): BOOL;
export function GetWindowRect (hWnd: HWND, lpRect: LPRECT): BOOL;
export function AdjustWindowRect (lpRect: LPRECT, dwStyle: DWORD, bMenu: BOOL): BOOL;
export function AdjustWindowRectEx (lpRect: LPRECT, dwStyle: DWORD, bMenu: BOOL, dwExStyle: DWORD): BOOL;
export function AdjustWindowRectExForDpi (lpRect: LPRECT, dwStyle: DWORD, bMenu: BOOL, dwExStyle: DWORD, dpi: UINT): BOOL;
export function SetWindowContextHelpId (param0: HWND, param1: DWORD): BOOL;
export function GetWindowContextHelpId (param0: HWND): DWORD;
export function SetMenuContextHelpId (param0: HMENU, param1: DWORD): BOOL;
export function GetMenuContextHelpId (param0: HMENU): DWORD;
export function MessageBoxA (hWnd: HWND, lpText: LPCSTR, lpCaption: LPCSTR, uType: UINT): int;
export function MessageBoxW (hWnd: HWND, lpText: LPCWSTR, lpCaption: LPCWSTR, uType: UINT): int;
export function MessageBox (hWnd: HWND, lpText: LPCWSTR, lpCaption: LPCWSTR, uType: UINT): int;
export function MessageBoxExA (hWnd: HWND, lpText: LPCSTR, lpCaption: LPCSTR, uType: UINT, wLanguageId: WORD): int;
export function MessageBoxExW (hWnd: HWND, lpText: LPCWSTR, lpCaption: LPCWSTR, uType: UINT, wLanguageId: WORD): int;
export function MessageBoxEx (hWnd: HWND, lpText: LPCWSTR, lpCaption: LPCWSTR, uType: UINT, wLanguageId: WORD): int;
export function MessageBoxIndirectA (lpmbp: "MSGBOXPARAMSA *"): int;
export function MessageBoxIndirectW (lpmbp: "MSGBOXPARAMSW *"): int;
export function MessageBoxIndirect (lpmbp: "MSGBOXPARAMSW *"): int;
export function MessageBeep (uType: UINT): BOOL;
export function ShowCursor (bShow: BOOL): int;
export function SetCursorPos (X: int, Y: int): BOOL;
export function SetPhysicalCursorPos (X: int, Y: int): BOOL;
export function SetCursor (hCursor: HCURSOR): HCURSOR;
export function GetCursorPos (lpPoint: LPPOINT): BOOL;
export function GetPhysicalCursorPos (lpPoint: LPPOINT): BOOL;
export function GetClipCursor (lpRect: LPRECT): BOOL;
export function GetCursor (): HCURSOR;
export function CreateCaret (hWnd: HWND, hBitmap: HBITMAP, nWidth: int, nHeight: int): BOOL;
export function GetCaretBlinkTime (): UINT;
export function SetCaretBlinkTime (uMSeconds: UINT): BOOL;
export function DestroyCaret (): BOOL;
export function HideCaret (hWnd: HWND): BOOL;
export function ShowCaret (hWnd: HWND): BOOL;
export function SetCaretPos (X: int, Y: int): BOOL;
export function GetCaretPos (lpPoint: LPPOINT): BOOL;
export function ClientToScreen (hWnd: HWND, lpPoint: LPPOINT): BOOL;
export function ScreenToClient (hWnd: HWND, lpPoint: LPPOINT): BOOL;
export function LogicalToPhysicalPoint (hWnd: HWND, lpPoint: LPPOINT): BOOL;
export function PhysicalToLogicalPoint (hWnd: HWND, lpPoint: LPPOINT): BOOL;
export function LogicalToPhysicalPointForPerMonitorDPI (hWnd: HWND, lpPoint: LPPOINT): BOOL;
export function PhysicalToLogicalPointForPerMonitorDPI (hWnd: HWND, lpPoint: LPPOINT): BOOL;
export function WindowFromPoint (Point: POINT): HWND;
export function WindowFromPhysicalPoint (Point: POINT): HWND;
export function ChildWindowFromPoint (hWndParent: HWND, Point: POINT): HWND;
export function ClipCursor (lpRect: "RECT *"): BOOL;
export function ChildWindowFromPointEx (hwnd: HWND, pt: POINT, flags: UINT): HWND;
export function GetSysColor (nIndex: int): DWORD;
export function GetSysColorBrush (nIndex: int): HBRUSH;
export function SetSysColors (cElements: int, lpaElements: "INT *", lpaRgbValues: "COLORREF *"): BOOL;
export function DrawFocusRect (hDC: HDC, lprc: "RECT *"): BOOL;
export function FillRect (hDC: HDC, lprc: "RECT *", hbr: HBRUSH): int;
export function FrameRect (hDC: HDC, lprc: "RECT *", hbr: HBRUSH): int;
export function InvertRect (hDC: HDC, lprc: "RECT *"): BOOL;
export function SetRect (lprc: LPRECT, xLeft: int, yTop: int, xRight: int, yBottom: int): BOOL;
export function SetRectEmpty (lprc: LPRECT): BOOL;
export function CopyRect (lprcDst: LPRECT, lprcSrc: "RECT *"): BOOL;
export function InflateRect (lprc: LPRECT, dx: int, dy: int): BOOL;
export function IntersectRect (lprcDst: LPRECT, lprcSrc1: "RECT *", lprcSrc2: "RECT *"): BOOL;
export function UnionRect (lprcDst: LPRECT, lprcSrc1: "RECT *", lprcSrc2: "RECT *"): BOOL;
export function SubtractRect (lprcDst: LPRECT, lprcSrc1: "RECT *", lprcSrc2: "RECT *"): BOOL;
export function OffsetRect (lprc: LPRECT, dx: int, dy: int): BOOL;
export function IsRectEmpty (lprc: "RECT *"): BOOL;
export function EqualRect (lprc1: "RECT *", lprc2: "RECT *"): BOOL;
export function PtInRect (lprc: "RECT *", pt: POINT): BOOL;
export function GetWindowWord (hWnd: HWND, nIndex: int): WORD;
export function SetWindowWord (hWnd: HWND, nIndex: int, wNewWord: WORD): WORD;
export function GetWindowLongA (hWnd: HWND, nIndex: int): LONG;
export function GetWindowLongW (hWnd: HWND, nIndex: int): LONG;
export function GetWindowLong (hWnd: HWND, nIndex: int): LONG;
export function SetWindowLongA (hWnd: HWND, nIndex: int, dwNewLong: LONG): LONG;
export function SetWindowLongW (hWnd: HWND, nIndex: int, dwNewLong: LONG): LONG;
export function SetWindowLong (hWnd: HWND, nIndex: int, dwNewLong: LONG): LONG;
export function GetWindowLongPtrA (hWnd: HWND, nIndex: int): LONG_PTR;
export function GetWindowLongPtrW (hWnd: HWND, nIndex: int): LONG_PTR;
export function GetWindowLongPtr (hWnd: HWND, nIndex: int): LONG_PTR;
export function SetWindowLongPtrA (hWnd: HWND, nIndex: int, dwNewLong: LONG_PTR): LONG_PTR;
export function SetWindowLongPtrW (hWnd: HWND, nIndex: int, dwNewLong: LONG_PTR): LONG_PTR;
export function SetWindowLongPtr (hWnd: HWND, nIndex: int, dwNewLong: LONG_PTR): LONG_PTR;
export function GetClassWord (hWnd: HWND, nIndex: int): WORD;
export function SetClassWord (hWnd: HWND, nIndex: int, wNewWord: WORD): WORD;
export function GetClassLongA (hWnd: HWND, nIndex: int): DWORD;
export function GetClassLongW (hWnd: HWND, nIndex: int): DWORD;
export function GetClassLong (hWnd: HWND, nIndex: int): DWORD;
export function SetClassLongA (hWnd: HWND, nIndex: int, dwNewLong: LONG): DWORD;
export function SetClassLongW (hWnd: HWND, nIndex: int, dwNewLong: LONG): DWORD;
export function SetClassLong (hWnd: HWND, nIndex: int, dwNewLong: LONG): DWORD;
export function GetClassLongPtrA (hWnd: HWND, nIndex: int): ULONG_PTR;
export function GetClassLongPtrW (hWnd: HWND, nIndex: int): ULONG_PTR;
export function GetClassLongPtr (hWnd: HWND, nIndex: int): ULONG_PTR;
export function SetClassLongPtrA (hWnd: HWND, nIndex: int, dwNewLong: LONG_PTR): ULONG_PTR;
export function SetClassLongPtrW (hWnd: HWND, nIndex: int, dwNewLong: LONG_PTR): ULONG_PTR;
export function SetClassLongPtr (hWnd: HWND, nIndex: int, dwNewLong: LONG_PTR): ULONG_PTR;
export function GetProcessDefaultLayout (pdwDefaultLayout: "DWORD *"): BOOL;
export function SetProcessDefaultLayout (dwDefaultLayout: DWORD): BOOL;
export function GetDesktopWindow (): HWND;
export function GetParent (hWnd: HWND): HWND;
export function SetParent (hWndChild: HWND, hWndNewParent: HWND): HWND;
export function EnumChildWindows (hWndParent: HWND, lpEnumFunc: WNDENUMPROC, lParam: LPARAM): BOOL;
export function FindWindowA (lpClassName: LPCSTR, lpWindowName: LPCSTR): HWND;
export function FindWindowW (lpClassName: LPCWSTR, lpWindowName: LPCWSTR): HWND;
export function FindWindow (lpClassName: LPCWSTR, lpWindowName: LPCWSTR): HWND;
export function FindWindowExA (hWndParent: HWND, hWndChildAfter: HWND, lpszClass: LPCSTR, lpszWindow: LPCSTR): HWND;
export function FindWindowExW (hWndParent: HWND, hWndChildAfter: HWND, lpszClass: LPCWSTR, lpszWindow: LPCWSTR): HWND;
export function FindWindowEx (hWndParent: HWND, hWndChildAfter: HWND, lpszClass: LPCWSTR, lpszWindow: LPCWSTR): HWND;
export function GetShellWindow (): HWND;
export function RegisterShellHookWindow (hwnd: HWND): BOOL;
export function DeregisterShellHookWindow (hwnd: HWND): BOOL;
export function EnumWindows (lpEnumFunc: WNDENUMPROC, lParam: LPARAM): BOOL;
export function EnumThreadWindows (dwThreadId: DWORD, lpfn: WNDENUMPROC, lParam: LPARAM): BOOL;
export function GetTopWindow (hWnd: HWND): HWND;
export function GetWindowThreadProcessId (hWnd: HWND, lpdwProcessId: LPDWORD): DWORD;
export function IsGUIThread (bConvert: BOOL): BOOL;
export function GetLastActivePopup (hWnd: HWND): HWND;
export function GetWindow (hWnd: HWND, uCmd: UINT): HWND;
export function SetWindowsHookA (nFilterType: int, pfnFilterProc: HOOKPROC): HHOOK;
export function SetWindowsHookW (nFilterType: int, pfnFilterProc: HOOKPROC): HHOOK;
export function SetWindowsHook (nFilterType: int, pfnFilterProc: HOOKPROC): HHOOK;
export function SetWindowsHookA (nFilterType: int, pfnFilterProc: HOOKPROC): HOOKPROC;
export function SetWindowsHookW (nFilterType: int, pfnFilterProc: HOOKPROC): HOOKPROC;
export function SetWindowsHook (nFilterType: int, pfnFilterProc: HOOKPROC): HOOKPROC;
export function UnhookWindowsHook (nCode: int, pfnFilterProc: HOOKPROC): BOOL;
export function SetWindowsHookExA (idHook: int, lpfn: HOOKPROC, hmod: HINSTANCE, dwThreadId: DWORD): HHOOK;
export function SetWindowsHookExW (idHook: int, lpfn: HOOKPROC, hmod: HINSTANCE, dwThreadId: DWORD): HHOOK;
export function SetWindowsHookEx (idHook: int, lpfn: HOOKPROC, hmod: HINSTANCE, dwThreadId: DWORD): HHOOK;
export function UnhookWindowsHookEx (hhk: HHOOK): BOOL;
export function CallNextHookEx (hhk: HHOOK, nCode: int, wParam: WPARAM, lParam: LPARAM): LRESULT;
export function CheckMenuRadioItem (hmenu: HMENU, first: UINT, last: UINT, check: UINT, flags: UINT): BOOL;
export function LoadBitmapA (hInstance: HINSTANCE, lpBitmapName: LPCSTR): HBITMAP;
export function LoadBitmapW (hInstance: HINSTANCE, lpBitmapName: LPCWSTR): HBITMAP;
export function LoadBitmap (hInstance: HINSTANCE, lpBitmapName: LPCWSTR): HBITMAP;
export function LoadCursorA (hInstance: HINSTANCE, lpCursorName: LPCSTR): HCURSOR;
export function LoadCursorW (hInstance: HINSTANCE, lpCursorName: LPCWSTR): HCURSOR;
export function LoadCursor (hInstance: HINSTANCE, lpCursorName: LPCWSTR): HCURSOR;
export function LoadCursorFromFileA (lpFileName: LPCSTR): HCURSOR;
export function LoadCursorFromFileW (lpFileName: LPCWSTR): HCURSOR;
export function LoadCursorFromFile (lpFileName: LPCWSTR): HCURSOR;
export function CreateCursor (hInst: HINSTANCE, xHotSpot: int, yHotSpot: int, nWidth: int, nHeight: int, pvANDPlane: "VOID *", pvXORPlane: "VOID *"): HCURSOR;
export function DestroyCursor (hCursor: HCURSOR): BOOL;
export function CopyCursor (hCursor: HCURSOR): HCURSOR;
export function SetSystemCursor (hcur: HCURSOR, id: DWORD): BOOL;
export function LoadIconA (hInstance: HINSTANCE, lpIconName: LPCSTR): HICON;
export function LoadIconW (hInstance: HINSTANCE, lpIconName: LPCWSTR): HICON;
export function LoadIcon (hInstance: HINSTANCE, lpIconName: LPCWSTR): HICON;
export function PrivateExtractIconsA (szFileName: LPCSTR, nIconIndex: int, cxIcon: int, cyIcon: int, phicon: "HICON *", piconid: "UINT *", nIcons: UINT, flags: UINT): UINT;
export function PrivateExtractIconsW (szFileName: LPCWSTR, nIconIndex: int, cxIcon: int, cyIcon: int, phicon: "HICON *", piconid: "UINT *", nIcons: UINT, flags: UINT): UINT;
export function PrivateExtractIcons (szFileName: LPCWSTR, nIconIndex: int, cxIcon: int, cyIcon: int, phicon: "HICON *", piconid: "UINT *", nIcons: UINT, flags: UINT): UINT;
export function CreateIcon (hInstance: HINSTANCE, nWidth: int, nHeight: int, cPlanes: BYTE, cBitsPixel: BYTE, lpbANDbits: "BYTE *", lpbXORbits: "BYTE *"): HICON;
export function DestroyIcon (hIcon: HICON): BOOL;
export function CreateIconFromResource (presbits: PBYTE, dwResSize: DWORD, fIcon: BOOL, dwVer: DWORD): HICON;
export function CreateIconFromResourceEx (presbits: PBYTE, dwResSize: DWORD, fIcon: BOOL, dwVer: DWORD, cxDesired: int, cyDesired: int, Flags: UINT): HICON;
export function LoadImageA (hInst: HINSTANCE, name: LPCSTR, type: UINT, cx: int, cy: int, fuLoad: UINT): HANDLE;
export function LoadImageW (hInst: HINSTANCE, name: LPCWSTR, type: UINT, cx: int, cy: int, fuLoad: UINT): HANDLE;
export function LoadImage (hInst: HINSTANCE, name: LPCWSTR, type: UINT, cx: int, cy: int, fuLoad: UINT): HANDLE;
export function CopyImage (h: HANDLE, type: UINT, cx: int, cy: int, flags: UINT): HANDLE;
export function DrawIconEx (hdc: HDC, xLeft: int, yTop: int, hIcon: HICON, cxWidth: int, cyWidth: int, istepIfAniCur: UINT, hbrFlickerFreeDraw: HBRUSH, diFlags: UINT): BOOL;
export function CreateIconIndirect (piconinfo: PICONINFO): HICON;
export function CopyIcon (hIcon: HICON): HICON;
export function GetIconInfo (hIcon: HICON, piconinfo: PICONINFO): BOOL;
export function GetIconInfoExA (hicon: HICON, piconinfo: PICONINFOEXA): BOOL;
export function GetIconInfoExW (hicon: HICON, piconinfo: PICONINFOEXW): BOOL;
export function GetIconInfoEx (hicon: HICON, piconinfo: PICONINFOEXW): BOOL;
export function IsDialogMessageA (hDlg: HWND, lpMsg: LPMSG): BOOL;
export function IsDialogMessageW (hDlg: HWND, lpMsg: LPMSG): BOOL;
export function IsDialogMessage (hDlg: HWND, lpMsg: LPMSG): BOOL;
export function MapDialogRect (hDlg: HWND, lpRect: LPRECT): BOOL;
export function DlgDirListA (hDlg: HWND, lpPathSpec: LPSTR, nIDListBox: int, nIDStaticPath: int, uFileType: UINT): int;
export function DlgDirListW (hDlg: HWND, lpPathSpec: LPWSTR, nIDListBox: int, nIDStaticPath: int, uFileType: UINT): int;
export function DlgDirList (hDlg: HWND, lpPathSpec: LPWSTR, nIDListBox: int, nIDStaticPath: int, uFileType: UINT): int;
export function DlgDirSelectExA (hwndDlg: HWND, lpString: LPSTR, chCount: int, idListBox: int): BOOL;
export function DlgDirSelectExW (hwndDlg: HWND, lpString: LPWSTR, chCount: int, idListBox: int): BOOL;
export function DlgDirSelectEx (hwndDlg: HWND, lpString: LPWSTR, chCount: int, idListBox: int): BOOL;
export function DlgDirListComboBoxA (hDlg: HWND, lpPathSpec: LPSTR, nIDComboBox: int, nIDStaticPath: int, uFiletype: UINT): int;
export function DlgDirListComboBoxW (hDlg: HWND, lpPathSpec: LPWSTR, nIDComboBox: int, nIDStaticPath: int, uFiletype: UINT): int;
export function DlgDirListComboBox (hDlg: HWND, lpPathSpec: LPWSTR, nIDComboBox: int, nIDStaticPath: int, uFiletype: UINT): int;
export function DlgDirSelectComboBoxExA (hwndDlg: HWND, lpString: LPSTR, cchOut: int, idComboBox: int): BOOL;
export function DlgDirSelectComboBoxExW (hwndDlg: HWND, lpString: LPWSTR, cchOut: int, idComboBox: int): BOOL;
export function DlgDirSelectComboBoxEx (hwndDlg: HWND, lpString: LPWSTR, cchOut: int, idComboBox: int): BOOL;
export function SetScrollInfo (hwnd: HWND, nBar: int, lpsi: LPCSCROLLINFO, redraw: BOOL): int;
export function GetScrollInfo (hwnd: HWND, nBar: int, lpsi: LPSCROLLINFO): BOOL;
export function DefFrameProcA (hWnd: HWND, hWndMDIClient: HWND, uMsg: UINT, wParam: WPARAM, lParam: LPARAM): LRESULT;
export function DefFrameProcW (hWnd: HWND, hWndMDIClient: HWND, uMsg: UINT, wParam: WPARAM, lParam: LPARAM): LRESULT;
export function DefFrameProc (hWnd: HWND, hWndMDIClient: HWND, uMsg: UINT, wParam: WPARAM, lParam: LPARAM): LRESULT;
export function TranslateMDISysAccel (hWndClient: HWND, lpMsg: LPMSG): BOOL;
export function ArrangeIconicWindows (hWnd: HWND): UINT;
export function CreateMDIWindowA (lpClassName: LPCSTR, lpWindowName: LPCSTR, dwStyle: DWORD, X: int, Y: int, nWidth: int, nHeight: int, hWndParent: HWND, hInstance: HINSTANCE, lParam: LPARAM): HWND;
export function CreateMDIWindowW (lpClassName: LPCWSTR, lpWindowName: LPCWSTR, dwStyle: DWORD, X: int, Y: int, nWidth: int, nHeight: int, hWndParent: HWND, hInstance: HINSTANCE, lParam: LPARAM): HWND;
export function CreateMDIWindow (lpClassName: LPCWSTR, lpWindowName: LPCWSTR, dwStyle: DWORD, X: int, Y: int, nWidth: int, nHeight: int, hWndParent: HWND, hInstance: HINSTANCE, lParam: LPARAM): HWND;
export function WinHelpA (hWndMain: HWND, lpszHelp: LPCSTR, uCommand: UINT, dwData: ULONG_PTR): BOOL;
export function WinHelpW (hWndMain: HWND, lpszHelp: LPCWSTR, uCommand: UINT, dwData: ULONG_PTR): BOOL;
export function WinHelp (hWndMain: HWND, lpszHelp: LPCWSTR, uCommand: UINT, dwData: ULONG_PTR): BOOL;
export function GetGuiResources (hProcess: HANDLE, uiFlags: DWORD): DWORD;
export function ChangeDisplaySettingsA (lpDevMode: "DEVMODEA*", dwFlags: DWORD): LONG;
export function ChangeDisplaySettingsW (lpDevMode: "DEVMODEW*", dwFlags: DWORD): LONG;
export function ChangeDisplaySettings (lpDevMode: "DEVMODEW*", dwFlags: DWORD): LONG;
export function ChangeDisplaySettingsExA (lpszDeviceName: LPCSTR, lpDevMode: "DEVMODEA*", hwnd: HWND, dwflags: DWORD, lParam: LPVOID): LONG;
export function ChangeDisplaySettingsExW (lpszDeviceName: LPCWSTR, lpDevMode: "DEVMODEW*", hwnd: HWND, dwflags: DWORD, lParam: LPVOID): LONG;
export function ChangeDisplaySettingsEx (lpszDeviceName: LPCWSTR, lpDevMode: "DEVMODEW*", hwnd: HWND, dwflags: DWORD, lParam: LPVOID): LONG;
export function EnumDisplaySettingsA (lpszDeviceName: LPCSTR, iModeNum: DWORD, lpDevMode: "DEVMODEA*"): BOOL;
export function EnumDisplaySettingsW (lpszDeviceName: LPCWSTR, iModeNum: DWORD, lpDevMode: "DEVMODEW*"): BOOL;
export function EnumDisplaySettings (lpszDeviceName: LPCWSTR, iModeNum: DWORD, lpDevMode: "DEVMODEW*"): BOOL;
export function EnumDisplaySettingsExA (lpszDeviceName: LPCSTR, iModeNum: DWORD, lpDevMode: "DEVMODEA*", dwFlags: DWORD): BOOL;
export function EnumDisplaySettingsExW (lpszDeviceName: LPCWSTR, iModeNum: DWORD, lpDevMode: "DEVMODEW*", dwFlags: DWORD): BOOL;
export function EnumDisplaySettingsEx (lpszDeviceName: LPCWSTR, iModeNum: DWORD, lpDevMode: "DEVMODEW*", dwFlags: DWORD): BOOL;
export function EnumDisplayDevicesA (lpDevice: LPCSTR, iDevNum: DWORD, lpDisplayDevice: PDISPLAY_DEVICEA, dwFlags: DWORD): BOOL;
export function EnumDisplayDevicesW (lpDevice: LPCWSTR, iDevNum: DWORD, lpDisplayDevice: PDISPLAY_DEVICEW, dwFlags: DWORD): BOOL;
export function EnumDisplayDevices (lpDevice: LPCWSTR, iDevNum: DWORD, lpDisplayDevice: PDISPLAY_DEVICEW, dwFlags: DWORD): BOOL;
export function GetDisplayConfigBufferSizes (flags: UINT32, numPathArrayElements: "UINT32*", numModeInfoArrayElements: "UINT32*"): LONG;
export function DisplayConfigGetDeviceInfo (requestPacket: "DISPLAYCONFIG_DEVICE_INFO_HEADER*"): LONG;
export function DisplayConfigSetDeviceInfo (setPacket: "DISPLAYCONFIG_DEVICE_INFO_HEADER*"): LONG;
export function SystemParametersInfoA (uiAction: UINT, uiParam: UINT, pvParam: PVOID, fWinIni: UINT): BOOL;
export function SystemParametersInfoW (uiAction: UINT, uiParam: UINT, pvParam: PVOID, fWinIni: UINT): BOOL;
export function SystemParametersInfo (uiAction: UINT, uiParam: UINT, pvParam: PVOID, fWinIni: UINT): BOOL;
export function SystemParametersInfoForDpi (uiAction: UINT, uiParam: UINT, pvParam: PVOID, fWinIni: UINT, dpi: UINT): BOOL;
export function SoundSentry (): BOOL;
export function SetDebugErrorLevel (dwLevel: DWORD): VOID;
export function SetLastErrorEx (dwErrCode: DWORD, dwType: DWORD): VOID;
export function EndTask (hWnd: HWND, fShutDown: BOOL, fForce: BOOL): BOOL;
export function CancelShutdown (): BOOL;
export function MonitorFromPoint (pt: POINT, dwFlags: DWORD): HMONITOR;
export function MonitorFromRect (lprc: LPCRECT, dwFlags: DWORD): HMONITOR;
export function MonitorFromWindow (hwnd: HWND, dwFlags: DWORD): HMONITOR;
export function GetMonitorInfoA (hMonitor: HMONITOR, lpmi: LPMONITORINFO): BOOL;
export function GetMonitorInfoW (hMonitor: HMONITOR, lpmi: LPMONITORINFO): BOOL;
export function GetMonitorInfo (hMonitor: HMONITOR, lpmi: LPMONITORINFO): BOOL;
export function EnumDisplayMonitors (hdc: HDC, lprcClip: LPCRECT, lpfnEnum: MONITORENUMPROC, dwData: LPARAM): BOOL;
export function NotifyWinEvent (event: DWORD, hwnd: HWND, idObject: LONG, idChild: LONG): VOID;
export function SetWinEventHook (eventMin: DWORD, eventMax: DWORD, hmodWinEventProc: HMODULE, pfnWinEventProc: WINEVENTPROC, idProcess: DWORD, idThread: DWORD, dwFlags: DWORD): HWINEVENTHOOK;
export function IsWinEventHookInstalled (event: DWORD): BOOL;
export function UnhookWinEvent (hWinEventHook: HWINEVENTHOOK): BOOL;
export function GetGUIThreadInfo (idThread: DWORD, pgui: PGUITHREADINFO): BOOL;
export function BlockInput (fBlockIt: BOOL): BOOL;
export function SetProcessDPIAware (): BOOL;
export function IsProcessDPIAware (): BOOL;
export function SetThreadDpiAwarenessContext (dpiContext: DPI_AWARENESS_CONTEXT): DPI_AWARENESS_CONTEXT;
export function GetThreadDpiAwarenessContext (): DPI_AWARENESS_CONTEXT;
export function GetWindowDpiAwarenessContext (hwnd: HWND): DPI_AWARENESS_CONTEXT;
export function GetAwarenessFromDpiAwarenessContext (value: DPI_AWARENESS_CONTEXT): DPI_AWARENESS;
export function GetDpiFromDpiAwarenessContext (value: DPI_AWARENESS_CONTEXT): UINT;
export function AreDpiAwarenessContextsEqual (dpiContextA: DPI_AWARENESS_CONTEXT, dpiContextB: DPI_AWARENESS_CONTEXT): BOOL;
export function IsValidDpiAwarenessContext (value: DPI_AWARENESS_CONTEXT): BOOL;
export function GetDpiForWindow (hwnd: HWND): UINT;
export function GetDpiForSystem (): UINT;
export function GetSystemDpiForProcess (hProcess: HANDLE): UINT;
export function EnableNonClientDpiScaling (hwnd: HWND): BOOL;
export function InheritWindowMonitor (hwnd: HWND, hwndInherit: HWND): BOOL;
export function SetProcessDpiAwarenessContext (value: DPI_AWARENESS_CONTEXT): BOOL;
export function GetDpiAwarenessContextForProcess (hProcess: HANDLE): DPI_AWARENESS_CONTEXT;
export function SetThreadDpiHostingBehavior (value: DPI_HOSTING_BEHAVIOR): DPI_HOSTING_BEHAVIOR;
export function GetThreadDpiHostingBehavior (): DPI_HOSTING_BEHAVIOR;
export function GetWindowDpiHostingBehavior (hwnd: HWND): DPI_HOSTING_BEHAVIOR;
export function GetCursorInfo (pci: PCURSORINFO): BOOL;
export function GetWindowInfo (hwnd: HWND, pwi: PWINDOWINFO): BOOL;
export function GetTitleBarInfo (hwnd: HWND, pti: PTITLEBARINFO): BOOL;
export function GetMenuBarInfo (hwnd: HWND, idObject: LONG, idItem: LONG, pmbi: PMENUBARINFO): BOOL;
export function GetScrollBarInfo (hwnd: HWND, idObject: LONG, psbi: PSCROLLBARINFO): BOOL;
export function GetComboBoxInfo (hwndCombo: HWND, pcbi: PCOMBOBOXINFO): BOOL;
export function GetAncestor (hwnd: HWND, gaFlags: UINT): HWND;
export function RealChildWindowFromPoint (hwndParent: HWND, ptParentClientCoords: POINT): HWND;
export function GetAltTabInfoA (hwnd: HWND, iItem: int, pati: PALTTABINFO, pszItemText: LPSTR, cchItemText: UINT): BOOL;
export function GetAltTabInfoW (hwnd: HWND, iItem: int, pati: PALTTABINFO, pszItemText: LPWSTR, cchItemText: UINT): BOOL;
export function GetAltTabInfo (hwnd: HWND, iItem: int, pati: PALTTABINFO, pszItemText: LPWSTR, cchItemText: UINT): BOOL;
export function GetListBoxInfo (hwnd: HWND): DWORD;
export function LockWorkStation (): BOOL;
export function UserHandleGrantAccess (hUserHandle: HANDLE, hJob: HANDLE, bGrant: BOOL): BOOL;
export function GetRawInputBuffer (pData: PRAWINPUT, pcbSize: PUINT, cbSizeHeader: UINT): UINT;
export function RegisterRawInputDevices (pRawInputDevices: PCRAWINPUTDEVICE, uiNumDevices: UINT, cbSize: UINT): BOOL;
export function GetRegisteredRawInputDevices (pRawInputDevices: PRAWINPUTDEVICE, puiNumDevices: PUINT, cbSize: UINT): UINT;
export function GetRawInputDeviceList (pRawInputDeviceList: PRAWINPUTDEVICELIST, puiNumDevices: PUINT, cbSize: UINT): UINT;
export function DefRawInputProc (paRawInput: "PRAWINPUT*", nInput: INT, cbSizeHeader: UINT): LRESULT;
export function GetPointerDevices (deviceCount: "UINT32*", pointerDevices: "POINTER_DEVICE_INFO *"): BOOL;
export function GetPointerDevice (device: HANDLE, pointerDevice: "POINTER_DEVICE_INFO *"): BOOL;
export function GetPointerDeviceProperties (device: HANDLE, propertyCount: "UINT32*", pointerProperties: "POINTER_DEVICE_PROPERTY *"): BOOL;
export function RegisterPointerDeviceNotifications (window: HWND, notifyRange: BOOL): BOOL;
export function GetPointerDeviceRects (device: HANDLE, pointerDeviceRect: "RECT*", displayRect: "RECT*"): BOOL;
export function GetPointerDeviceCursors (device: HANDLE, cursorCount: "UINT32*", deviceCursors: "POINTER_DEVICE_CURSOR_INFO *"): BOOL;
export function GetRawPointerDeviceData (pointerId: UINT32, historyCount: UINT32, propertiesCount: UINT32, pProperties: "POINTER_DEVICE_PROPERTY*", pValues: "LONG*"): BOOL;
export function ChangeWindowMessageFilter (message: UINT, dwFlag: DWORD): BOOL;
export function ChangeWindowMessageFilterEx (hwnd: HWND, message: UINT, action: DWORD, pChangeFilterStruct: PCHANGEFILTERSTRUCT): BOOL;
export function GetGestureInfo (hGestureInfo: HGESTUREINFO, pGestureInfo: PGESTUREINFO): BOOL;
export function GetGestureExtraArgs (hGestureInfo: HGESTUREINFO, cbExtraArgs: UINT, pExtraArgs: PBYTE): BOOL;
export function CloseGestureInfoHandle (hGestureInfo: HGESTUREINFO): BOOL;
export function SetGestureConfig (hwnd: HWND, dwReserved: DWORD, cIDs: UINT, pGestureConfig: PGESTURECONFIG, cbSize: UINT): BOOL;
export function ShutdownBlockReasonCreate (hWnd: HWND, pwszReason: LPCWSTR): BOOL;
export function ShutdownBlockReasonQuery (hWnd: HWND, pwszBuff: LPWSTR, pcchBuff: "DWORD *"): BOOL;
export function ShutdownBlockReasonDestroy (hWnd: HWND): BOOL;
export function GetCurrentInputMessageSource (inputMessageSource: "INPUT_MESSAGE_SOURCE *"): BOOL;
export function GetCIMSSM (inputMessageSource: "INPUT_MESSAGE_SOURCE *"): BOOL;
export function GetAutoRotationState (pState: PAR_STATE): BOOL;
export function GetDisplayAutoRotationPreferences (pOrientation: "ORIENTATION_PREFERENCE *"): BOOL;
export function GetDisplayAutoRotationPreferencesByProcessId (dwProcessId: DWORD, pOrientation: "ORIENTATION_PREFERENCE *", fRotateScreen: "BOOL *"): BOOL;
export function SetDisplayAutoRotationPreferences (orientation: ORIENTATION_PREFERENCE): BOOL;
export function IsImmersiveProcess (hProcess: HANDLE): BOOL;
export function SetProcessRestrictionExemption (fEnableExemption: BOOL): BOOL;

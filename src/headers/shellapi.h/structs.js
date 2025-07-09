import koffi from "koffi";

import {L} from "../../macros.js";

// basic
import {array, struct, union, pointer} from "../../types.js";
import {int, __int64} from "../../types.js";

// guiddef.h
import {
	GUID,
} from "../guiddef.h/guiddef.js";

// minwindef.h
import {
	DWORD, WORD, BYTE, BOOL,
	UINT,
	USHORT, ULONG,
	LPVOID,
	MAX_PATH,
	LPARAM,
	HINSTANCE, HKEY,
} from "../minwindef.h/minWindef.js";

// windef.h
import {POINT, RECT} from "../windef.h/windef.js";
import {HWND, HICON} from "../windef.h/windef.js";

// winnt.h
import {
	HANDLE,
} from "../winnt.h/winnt.js";
import {
	HRESULT,
	CHAR,
	WCHAR,
	LPSTR, LPCSTR, LPWSTR, LPCWSTR,
	PZZSTR, PZZWSTR, PCZZSTR, PCSTR, PCWSTR, PCZZWSTR,
} from "../winnt.h/winnt.js";

// processthreadsapi.h
import {LPPROCESS_INFORMATION, LPSTARTUPINFOW} from "../processthreadsapi.h/structs.js";

// minWinBase.h
import {LPSECURITY_ATTRIBUTES} from "../minwinbase.h/minWinBase.js";

// WinUser.h
import {WM_USER} from "../WinUser.h/constants.js";

export const HDROP = HANDLE;

// @formatter: off
export const DRAGINFOA = struct({
	uSize       : UINT,   // UINT
	pt          : POINT,  // POINT
	fNC         : BOOL,   // BOOL
	lpFileList  : PZZSTR, // PZZSTR
	grfKeyState : DWORD,  // DWORD
});
export const LPDRAGINFOA = pointer(DRAGINFOA);

export const DRAGINFOW = struct({
	uSize       : UINT,    // UINT
	pt          : POINT,   // POINT
	fNC         : BOOL,    // BOOL
	lpFileList  : PZZWSTR, // PZZWSTR
	grfKeyState : DWORD,   // DWORD
});
export const LPDRAGINFOW = pointer(DRAGINFOW);
export const DRAGINFO = DRAGINFOW;
export const LPDRAGINFO = LPDRAGINFOW;


////
//// AppBar stuff
////
export const ABM_NEW = 0x00000000;
export const ABM_REMOVE = 0x00000001;
export const ABM_QUERYPOS = 0x00000002;
export const ABM_SETPOS = 0x00000003;
export const ABM_GETSTATE = 0x00000004;
export const ABM_GETTASKBARPOS = 0x00000005;
export const ABM_ACTIVATE = 0x00000006;
export const ABM_GETAUTOHIDEBAR = 0x00000007;
export const ABM_SETAUTOHIDEBAR = 0x00000008;
export const ABM_WINDOWPOSCHANGED = 0x0000009;
export const ABM_SETSTATE = 0x0000000a;
export const ABM_GETAUTOHIDEBAREX = 0x0000000b;
export const ABM_SETAUTOHIDEBAREX = 0x0000000c;

// these are put in the wparam of callback messages
export const ABN_STATECHANGE = 0x0000000;
export const ABN_POSCHANGED = 0x0000001;
export const ABN_FULLSCREENAPP = 0x0000002;
export const ABN_WINDOWARRANGE = 0x0000003;

// flags for get state
export const ABS_AUTOHIDE = 0x0000001;
export const ABS_ALWAYSONTOP = 0x0000002;

export const ABE_LEFT = 0;
export const ABE_TOP = 1;
export const ABE_RIGHT = 2;
export const ABE_BOTTOM = 3;

export const APPBARDATA = struct({
	cbSize           : DWORD,  // DWORD
	hWnd             : HWND,   // HWND
	uCallbackMessage : UINT,   // UINT
	uEdge            : UINT,   // UINT
	rc               : RECT,   // RECT
	lParam           : LPARAM, // LPARAM // message specific
});
export const PAPPBARDATA = pointer(APPBARDATA);


// Shell File Operations

export const FO_MOVE   = 0x0001;
export const FO_COPY   = 0x0002;
export const FO_DELETE = 0x0003;
export const FO_RENAME = 0x0004;

// SHFILEOPSTRUCT.fFlags and IFileOperation::SetOperationFlags() flag values

export const FOF_MULTIDESTFILES        = 0x0001;
export const FOF_CONFIRMMOUSE          = 0x0002;
export const FOF_SILENT                = 0x0004;
export const FOF_RENAMEONCOLLISION     = 0x0008;
export const FOF_NOCONFIRMATION        = 0x0010;
export const FOF_WANTMAPPINGHANDLE     = 0x0020;
export const FOF_ALLOWUNDO             = 0x0040;
export const FOF_FILESONLY             = 0x0080;
export const FOF_SIMPLEPROGRESS        = 0x0100;
export const FOF_NOCONFIRMMKDIR        = 0x0200;
export const FOF_NOERRORUI             = 0x0400;
export const FOF_NOCOPYSECURITYATTRIBS = 0x0800;
export const FOF_NORECURSION           = 0x1000;
export const FOF_NO_CONNECTED_ELEMENTS = 0x2000;
export const FOF_WANTNUKEWARNING       = 0x4000;
export const FOF_NORECURSEREPARSE      = 0x8000;
export const FOF_NO_UI = (FOF_SILENT | FOF_NOCONFIRMATION | FOF_NOERRORUI | FOF_NOCONFIRMMKDIR);

export const FILEOP_FLAGS = WORD;

export const PO_DELETE     = 0x0013;
export const PO_RENAME     = 0x0014;
export const PO_PORTCHANGE = 0x0020;
export const PO_REN_PORT   = 0x0034;

export const PRINTEROP_FLAGS = WORD;

export const SHFILEOPSTRUCTA = struct({
	hwnd                  : HWND,         // HWND
	wFunc                 : UINT,         // UINT
	pFrom                 : PCZZSTR,      // PCZZSTR
	pTo                   : PCZZSTR,      // PCZZSTR
	fFlags                : FILEOP_FLAGS, // FILEOP_FLAGS
	fAnyOperationsAborted : BOOL,         // BOOL
	hNameMappings         : LPVOID,       // LPVOID
	lpszProgressTitle     : PCSTR,        // PCSTR        // only used if FOF_SIMPLEPROGRESS
});
export const LPSHFILEOPSTRUCTA = pointer(SHFILEOPSTRUCTA);

export const SHFILEOPSTRUCTW = struct({
	hwnd                  : HWND,         // HWND
	wFunc                 : UINT,         // UINT
	pFrom                 : PCZZWSTR,     // PCZZWSTR
	pTo                   : PCZZWSTR,     // PCZZWSTR
	fFlags                : FILEOP_FLAGS, // FILEOP_FLAGS
	fAnyOperationsAborted : BOOL,         // BOOL
	hNameMappings         : LPVOID,       // LPVOID
	lpszProgressTitle     : PCWSTR,       // PCWSTR       // only used if FOF_SIMPLEPROGRESS
});
export const LPSHFILEOPSTRUCTW = pointer(SHFILEOPSTRUCTW);
export const SHFILEOPSTRUCT = SHFILEOPSTRUCTW;
export const LPSHFILEOPSTRUCT = LPSHFILEOPSTRUCTW;

export const SHNAMEMAPPINGA = struct({
	pszOldPath : LPSTR, // LPSTR
	pszNewPath : LPSTR, // LPSTR
	cchOldPath : int,   // int
	cchNewPath : int,   // int
});
export const LPSHNAMEMAPPINGA = pointer(SHNAMEMAPPINGA);


////
//// End Shell File Operations
////

////
////  Begin ShellExecuteEx and family
////

/* ShellExecute() and ShellExecuteEx() error codes */

/* regular WinExec() codes */
export const SE_ERR_FNF          = 2;
export const SE_ERR_PNF          = 3;
export const SE_ERR_ACCESSDENIED = 5;
export const SE_ERR_OOM          = 8;
export const SE_ERR_DLLNOTFOUND  = 32;

/* error values for ShellExecute() beyond the regular WinExec() codes */
export const SE_ERR_SHARE           = 26;
export const SE_ERR_ASSOCINCOMPLETE = 27;
export const SE_ERR_DDETIMEOUT      = 28;
export const SE_ERR_DDEFAIL         = 29;
export const SE_ERR_DDEBUSY         = 30;
export const SE_ERR_NOASSOC         = 31;

export const SEE_MASK_DEFAULT            = 0x00000000;
export const SEE_MASK_CLASSNAME          = 0x00000001;
export const SEE_MASK_CLASSKEY           = 0x00000003;
export const SEE_MASK_IDLIST             = 0x00000004;
export const SEE_MASK_INVOKEIDLIST       = 0x0000000c;
export const SEE_MASK_ICON               = 0x00000010;
export const SEE_MASK_HOTKEY             = 0x00000020;
export const SEE_MASK_NOCLOSEPROCESS     = 0x00000040;
export const SEE_MASK_CONNECTNETDRV      = 0x00000080;
export const SEE_MASK_NOASYNC            = 0x00000100;
export const SEE_MASK_FLAG_DDEWAIT       = SEE_MASK_NOASYNC;
export const SEE_MASK_DOENVSUBST         = 0x00000200;
export const SEE_MASK_FLAG_NO_UI         = 0x00000400;
export const SEE_MASK_UNICODE            = 0x00004000;
export const SEE_MASK_NO_CONSOLE         = 0x00008000;
export const SEE_MASK_ASYNCOK            = 0x00100000;
export const SEE_MASK_HMONITOR           = 0x00200000;
export const SEE_MASK_NOZONECHECKS       = 0x00800000;
export const SEE_MASK_NOQUERYCLASSSTORE  = 0x01000000;
export const SEE_MASK_WAITFORINPUTIDLE   = 0x02000000;
export const SEE_MASK_FLAG_LOG_USAGE     = 0x04000000;
export const SEE_MASK_FLAG_HINST_IS_SITE = 0x08000000;


export const SHNAMEMAPPINGW = struct({
	pszOldPath : LPWSTR, // LPWSTR
	pszNewPath : LPWSTR, // LPWSTR
	cchOldPath : int,    // int
	cchNewPath : int,    // int
});
export const LPSHNAMEMAPPINGW = pointer(SHNAMEMAPPINGW);
export const SHNAMEMAPPING = SHNAMEMAPPINGW;
export const LPSHNAMEMAPPING = LPSHNAMEMAPPINGW;

export const SHELLEXECUTEINFOA = struct({
	cbSize       : DWORD,                     // DWORD     // in, required, sizeof of this structure
	fMask        : ULONG,                     // ULONG     // in, SEE_MASK_XXX values
	hwnd         : HWND,                      // HWND      // in, optional
	lpVerb       : LPCSTR,                    // LPCSTR    // in, optional when unspecified the default verb is choosen
	lpFile       : LPCSTR,                    // LPCSTR    // in, either this value or lpIDList must be specified
	lpParameters : LPCSTR,                    // LPCSTR    // in, optional
	lpDirectory  : LPCSTR,                    // LPCSTR    // in, optional
	nShow        : int,                       // int       // in, required
	hInstApp     : HINSTANCE,                 // HINSTANCE // out when SEE_MASK_NOCLOSEPROCESS is specified
	lpIDList     : pointer(koffi.types.void), // void*     // in, valid when SEE_MASK_IDLIST is specified, PCIDLIST_ABSOLUTE, for use with SEE_MASK_IDLIST & SEE_MASK_INVOKEIDLIST
	lpClass      : LPCSTR,                    // LPCSTR    // in, valid when SEE_MASK_CLASSNAME is specified
	hkeyClass    : HKEY,                      // HKEY      // in, valid when SEE_MASK_CLASSKEY is specified
	dwHotKey     : DWORD,                     // DWORD     // in, valid when SEE_MASK_HOTKEY is specified
	u            : union({
		hIcon    : HANDLE, // HANDLE // not used
		hMonitor : HANDLE, // HANDLE // in, valid when SEE_MASK_HMONITOR specified
	}), // union
	hProcess     : HANDLE,                    // HANDLE    // out, valid when SEE_MASK_NOCLOSEPROCESS specified
});
export const LPSHELLEXECUTEINFOA = pointer(SHELLEXECUTEINFOA);

export const SHELLEXECUTEINFOW = struct({
	cbSize       : DWORD,                     // DWORD     // in, required, sizeof of this structure
	fMask        : ULONG,                     // ULONG     // in, SEE_MASK_XXX values
	hwnd         : HWND,                      // HWND      // in, optional
	lpVerb       : LPCWSTR,                   // LPCWSTR   // in, optional when unspecified the default verb is choosen
	lpFile       : LPCWSTR,                   // LPCWSTR   // in, either this value or lpIDList must be specified
	lpParameters : LPCWSTR,                   // LPCWSTR   // in, optional
	lpDirectory  : LPCWSTR,                   // LPCWSTR   // in, optional
	nShow        : int,                       // int       // in, required
	hInstApp     : HINSTANCE,                 // HINSTANCE // out when SEE_MASK_NOCLOSEPROCESS is specified
	lpIDList     : pointer(koffi.types.void), // void*     // in, valid when SEE_MASK_IDLIST is specified, PCIDLIST_ABSOLUTE, for use with SEE_MASK_IDLIST & SEE_MASK_INVOKEIDLIST
	lpClass      : LPCWSTR,                   // LPCWSTR   // in, valid when SEE_MASK_CLASSNAME is specified
	hkeyClass    : HKEY,                      // HKEY      // in, valid when SEE_MASK_CLASSKEY is specified
	dwHotKey     : DWORD,                     // DWORD     // in, valid when SEE_MASK_HOTKEY is specified
	u            : union({
		hIcon    : HANDLE, // HANDLE // not used
		hMonitor : HANDLE, // HANDLE // in, valid when SEE_MASK_HMONITOR specified
	}), // union
	hProcess     : HANDLE,                    // HANDLE    // out, valid when SEE_MASK_NOCLOSEPROCESS specified
});
export const LPSHELLEXECUTEINFOW = pointer(SHELLEXECUTEINFOW);
export const SHELLEXECUTEINFO = SHELLEXECUTEINFOW;
export const LPSHELLEXECUTEINFO = LPSHELLEXECUTEINFOW;

export const SHCREATEPROCESSINFOW = struct({
	cbSize               : DWORD,                 // DWORD
	fMask                : ULONG,                 // ULONG
	hwnd                 : HWND,                  // HWND
	pszFile              : LPCWSTR,               // LPCWSTR
	pszParameters        : LPCWSTR,               // LPCWSTR
	pszCurrentDirectory  : LPCWSTR,               // LPCWSTR
	hUserToken           : HANDLE,                // HANDLE
	lpProcessAttributes  : LPSECURITY_ATTRIBUTES, // LPSECURITY_ATTRIBUTES
	lpThreadAttributes   : LPSECURITY_ATTRIBUTES, // LPSECURITY_ATTRIBUTES
	bInheritHandles      : BOOL,                  // BOOL
	dwCreationFlags      : DWORD,                 // DWORD
	lpStartupInfo        : LPSTARTUPINFOW,        // LPSTARTUPINFOW
	lpProcessInformation : LPPROCESS_INFORMATION, // LPPROCESS_INFORMATION
});
export const PSHCREATEPROCESSINFOW = pointer(SHCREATEPROCESSINFOW);
export const SHCREATEPROCESSINFO = SHCREATEPROCESSINFOW;
export const PSHCREATEPROCESSINFO = PSHCREATEPROCESSINFOW;

export const ASSOCCLASS = int;
export const ASSOCCLASS_SHELL_KEY = 0;
export const ASSOCCLASS_PROGID_KEY = 1;
export const ASSOCCLASS_PROGID_STR = 2;
export const ASSOCCLASS_CLSID_KEY = 3;
export const ASSOCCLASS_CLSID_STR = 4;
export const ASSOCCLASS_APP_KEY = 5;
export const ASSOCCLASS_APP_STR = 6;
export const ASSOCCLASS_SYSTEM_STR = 7;
export const ASSOCCLASS_FOLDER = 8;
export const ASSOCCLASS_STAR = 9;
export const ASSOCCLASS_FIXED_PROGID_STR = 10;
export const ASSOCCLASS_PROTOCOL_STR = 11;

export const ASSOCIATIONELEMENT = struct({
	ac       : ASSOCCLASS, // ASSOCCLASS // required
	hkClass  : HKEY,       // HKEY       // may be NULL
	pszClass : PCWSTR,     // PCWSTR     // may be NULL
});

////
////  End ShellExecuteEx and family
////


//
// RecycleBin
//

// struct for query recycle bin info
export const SHQUERYRBINFO = struct({
	cbSize      : DWORD,   // DWORD
	i64Size     : __int64, // __int64
	i64NumItems : __int64, // __int64
});
export const LPSHQUERYRBINFO = pointer(SHQUERYRBINFO);

// flags for SHEmptyRecycleBin
//
export const SHERB_NOCONFIRMATION = 0x00000001;
export const SHERB_NOPROGRESSUI   = 0x00000002;
export const SHERB_NOSOUND        = 0x00000004;


export const QUERY_USER_NOTIFICATION_STATE = int;
export const QUNS_NOT_PRESENT = 1;
export const QUNS_BUSY = 2;
export const QUNS_RUNNING_D3D_FULL_SCREEN = 3;
export const QUNS_PRESENTATION_MODE = 4;
export const QUNS_ACCEPTS_NOTIFICATIONS = 5;
export const QUNS_QUIET_TIME = 6;
export const QUNS_APP = 7;

export const NOTIFYICONDATAA = struct({
	cbSize           : DWORD,                      // DWORD
	hWnd             : HWND,                       // HWND
	uID              : UINT,                       // UINT
	uFlags           : UINT,                       // UINT
	uCallbackMessage : UINT,                       // UINT
	hIcon            : HICON,                      // HICON
	// szTip            : array(CHAR, 64, "String"),  // CHAR	// #if (NTDDI_VERSION < NTDDI_WIN2K)
	szTip            : array(CHAR, 128, "String"), // CHAR
	dwState          : DWORD,                      // DWORD
	dwStateMask      : DWORD,                      // DWORD
	szInfo           : array(CHAR, 256, "String"), // CHAR
	u                : union({
		uTimeout : UINT, // UINT
		uVersion : UINT, // UINT // used with NIM_SETVERSION, values 0, 3 and 4
	}),
	szInfoTitle      : array(CHAR, 64, "String"),  // CHAR
	dwInfoFlags      : DWORD,                      // DWORD
	guidItem         : GUID,                       // GUID
	hBalloonIcon     : HICON,                      // HICON
});
export const PNOTIFYICONDATAA = pointer(NOTIFYICONDATAA);

export const NOTIFYICONDATAW = struct({
	cbSize           : DWORD,                       // DWORD
	hWnd             : HWND,                        // HWND
	uID              : UINT,                        // UINT
	uFlags           : UINT,                        // UINT
	uCallbackMessage : UINT,                        // UINT
	hIcon            : HICON,                       // HICON
	// szTip            : array(WCHAR, 64, "String"),  // WCHAR	// #if (NTDDI_VERSION < NTDDI_WIN2K)
	szTip            : array(WCHAR, 128, "String"), // WCHAR
	dwState          : DWORD,                       // DWORD
	dwStateMask      : DWORD,                       // DWORD
	szInfo           : array(WCHAR, 256, "String"), // WCHAR
	u                : union({
		uTimeout : UINT, // UINT
		uVersion : UINT, // UINT // used with NIM_SETVERSION, values 0, 3 and 4
	}),
	szInfoTitle      : array(WCHAR, 64, "String"),  // CHAR
	dwInfoFlags      : DWORD,                       // DWORD
	guidItem         : GUID,                        // GUID
	hBalloonIcon     : HICON,                       // HICON
});
export const PNOTIFYICONDATAW = pointer(NOTIFYICONDATAW);
export const NOTIFYICONDATA = NOTIFYICONDATAW;
export const PNOTIFYICONDATA = PNOTIFYICONDATAW;

export const NIN_SELECT = (WM_USER + 0);
export const NINF_KEY = 0x1;
export const NIN_KEYSELECT = (NIN_SELECT | NINF_KEY);

export const NIN_BALLOONSHOW = (WM_USER + 2);
export const NIN_BALLOONHIDE = (WM_USER + 3);
export const NIN_BALLOONTIMEOUT = (WM_USER + 4);
export const NIN_BALLOONUSERCLICK = (WM_USER + 5);
export const NIN_POPUPOPEN = (WM_USER + 6);
export const NIN_POPUPCLOSE = (WM_USER + 7);

export const NIM_ADD        = 0x00000000;
export const NIM_MODIFY     = 0x00000001;
export const NIM_DELETE     = 0x00000002;
export const NIM_SETFOCUS   = 0x00000003;
export const NIM_SETVERSION = 0x00000004;

export const NOTIFYICON_VERSION   = 3;
export const NOTIFYICON_VERSION_4 = 4;

export const NIF_MESSAGE    = 0x00000001;
export const NIF_ICON       = 0x00000002;
export const NIF_TIP        = 0x00000004;
export const NIF_STATE      = 0x00000008;
export const NIF_INFO       = 0x00000010;
export const NIF_GUID       = 0x00000020;
export const NIF_REALTIME   = 0x00000040;
export const NIF_SHOWTIP    = 0x00000080;

export const NIS_HIDDEN     = 0x00000001;
export const NIS_SHAREDICON = 0x00000002;

export const NIIF_NONE               = 0x00000000;
export const NIIF_INFO               = 0x00000001;
export const NIIF_WARNING            = 0x00000002;
export const NIIF_ERROR              = 0x00000003;
export const NIIF_USER               = 0x00000004;
export const NIIF_ICON_MASK          = 0x0000000F;
export const NIIF_NOSOUND            = 0x00000010;
export const NIIF_LARGE_ICON         = 0x00000020;
export const NIIF_RESPECT_QUIET_TIME = 0x00000080;

export const NOTIFYICONIDENTIFIER = struct({
	cbSize   : DWORD, // DWORD
	hWnd     : HWND,  // HWND
	uID      : UINT,  // UINT
	guidItem : GUID,  // GUID
});
export const PNOTIFYICONIDENTIFIER = pointer(NOTIFYICONIDENTIFIER);

export const SHFILEINFOA = struct({
	hIcon         : HICON,                           // HICON // out: icon
	iIcon         : int,                             // int   // out: icon index
	dwAttributes  : DWORD,                           // DWORD // out: SFGAO_ flags
	szDisplayName : array(CHAR, MAX_PATH, "String"), // CHAR  // out: display name (or path)
	szTypeName    : array(CHAR, 80, "String"),       // CHAR  // out: type name
});

export const SHFILEINFOW = struct({
	hIcon         : HICON,                            // HICON // out: icon
	iIcon         : int,                              // int   // out: icon index
	dwAttributes  : DWORD,                            // DWORD // out: SFGAO_ flags
	szDisplayName : array(WCHAR, MAX_PATH, "String"), // WCHAR // out: display name (or path)
	szTypeName    : array(WCHAR, 80, "String"),       // WCHAR // out: type name
});
export const SHFILEINFO = SHFILEINFOW;

export const SHGFI_ICON              = 0x000000100;
export const SHGFI_DISPLAYNAME       = 0x000000200;
export const SHGFI_TYPENAME          = 0x000000400;
export const SHGFI_ATTRIBUTES        = 0x000000800;
export const SHGFI_ICONLOCATION      = 0x000001000;
export const SHGFI_EXETYPE           = 0x000002000;
export const SHGFI_SYSICONINDEX      = 0x000004000;
export const SHGFI_LINKOVERLAY       = 0x000008000;
export const SHGFI_SELECTED          = 0x000010000;
export const SHGFI_ATTR_SPECIFIED    = 0x000020000;
export const SHGFI_LARGEICON         = 0x000000000;
export const SHGFI_SMALLICON         = 0x000000001;
export const SHGFI_OPENICON          = 0x000000002;
export const SHGFI_SHELLICONSIZE     = 0x000000004;
export const SHGFI_PIDL              = 0x000000008;
export const SHGFI_USEFILEATTRIBUTES = 0x000000010;

export const SHGFI_ADDOVERLAYS       = 0x000000020;
export const SHGFI_OVERLAYINDEX      = 0x000000040;


export const SHSTOCKICONINFO = struct({
	cbSize         : DWORD,                            // DWORD
	hIcon          : HICON,                            // HICON
	iSysImageIndex : int,                              // int
	iIcon          : int,                              // int
	szPath         : array(WCHAR, MAX_PATH, "String"), // WCHAR
});

export const SHGSI_ICONLOCATION  = 0;
export const SHGSI_ICON          = SHGFI_ICON;
export const SHGSI_SYSICONINDEX  = SHGFI_SYSICONINDEX;
export const SHGSI_LINKOVERLAY   = SHGFI_LINKOVERLAY;
export const SHGSI_SELECTED      = SHGFI_SELECTED;
export const SHGSI_LARGEICON     = SHGFI_LARGEICON;
export const SHGSI_SMALLICON     = SHGFI_SMALLICON;
export const SHGSI_SHELLICONSIZE = SHGFI_SHELLICONSIZE;


export const SHSTOCKICONID          = int;
export const SIID_DOCNOASSOC        = 0;
export const SIID_DOCASSOC          = 1;
export const SIID_APPLICATION       = 2;
export const SIID_FOLDER            = 3;
export const SIID_FOLDEROPEN        = 4;
export const SIID_DRIVE525          = 5;
export const SIID_DRIVE35           = 6;
export const SIID_DRIVEREMOVE       = 7;
export const SIID_DRIVEFIXED        = 8;
export const SIID_DRIVENET          = 9;
export const SIID_DRIVENETDISABLED  = 10;
export const SIID_DRIVECD           = 11;
export const SIID_DRIVERAM          = 12;
export const SIID_WORLD             = 13;
export const SIID_SERVER            = 15;
export const SIID_PRINTER           = 16;
export const SIID_MYNETWORK         = 17;
export const SIID_FIND              = 22;
export const SIID_HELP              = 23;
export const SIID_SHARE             = 28;
export const SIID_LINK              = 29;
export const SIID_SLOWFILE          = 30;
export const SIID_RECYCLER          = 31;
export const SIID_RECYCLERFULL      = 32;
export const SIID_MEDIACDAUDIO      = 40;
export const SIID_LOCK              = 47;
export const SIID_AUTOLIST          = 49;
export const SIID_PRINTERNET        = 50;
export const SIID_SERVERSHARE       = 51;
export const SIID_PRINTERFAX        = 52;
export const SIID_PRINTERFAXNET     = 53;
export const SIID_PRINTERFILE       = 54;
export const SIID_STACK             = 55;
export const SIID_MEDIASVCD         = 56;
export const SIID_STUFFEDFOLDER     = 57;
export const SIID_DRIVEUNKNOWN      = 58;
export const SIID_DRIVEDVD          = 59;
export const SIID_MEDIADVD          = 60;
export const SIID_MEDIADVDRAM       = 61;
export const SIID_MEDIADVDRW        = 62;
export const SIID_MEDIADVDR         = 63;
export const SIID_MEDIADVDROM       = 64;
export const SIID_MEDIACDAUDIOPLUS  = 65;
export const SIID_MEDIACDRW         = 66;
export const SIID_MEDIACDR          = 67;
export const SIID_MEDIACDBURN       = 68;
export const SIID_MEDIABLANKCD      = 69;
export const SIID_MEDIACDROM        = 70;
export const SIID_AUDIOFILES        = 71;
export const SIID_IMAGEFILES        = 72;
export const SIID_VIDEOFILES        = 73;
export const SIID_MIXEDFILES        = 74;
export const SIID_FOLDERBACK        = 75;
export const SIID_FOLDERFRONT       = 76;
export const SIID_SHIELD            = 77;
export const SIID_WARNING           = 78;
export const SIID_INFO              = 79;
export const SIID_ERROR             = 80;
export const SIID_KEY               = 81;
export const SIID_SOFTWARE          = 82;
export const SIID_RENAME            = 83;
export const SIID_DELETE            = 84;
export const SIID_MEDIAAUDIODVD     = 85;
export const SIID_MEDIAMOVIEDVD     = 86;
export const SIID_MEDIAENHANCEDCD   = 87;
export const SIID_MEDIAENHANCEDDVD  = 88;
export const SIID_MEDIAHDDVD        = 89;
export const SIID_MEDIABLURAY       = 90;
export const SIID_MEDIAVCD          = 91;
export const SIID_MEDIADVDPLUSR     = 92;
export const SIID_MEDIADVDPLUSRW    = 93;
export const SIID_DESKTOPPC         = 94;
export const SIID_MOBILEPC          = 95;
export const SIID_USERS             = 96;
export const SIID_MEDIASMARTMEDIA   = 97;
export const SIID_MEDIACOMPACTFLASH = 98;
export const SIID_DEVICECELLPHONE   = 99;
export const SIID_DEVICECAMERA      = 100;
export const SIID_DEVICEVIDEOCAMERA = 101;
export const SIID_DEVICEAUDIOPLAYER = 102;
export const SIID_NETWORKCONNECT    = 103;
export const SIID_INTERNET          = 104;
export const SIID_ZIPFILE           = 105;
export const SIID_SETTINGS          = 106;
export const SIID_DRIVEHDDVD        = 132;
export const SIID_DRIVEBD           = 133;
export const SIID_MEDIAHDDVDROM     = 134;
export const SIID_MEDIAHDDVDR       = 135;
export const SIID_MEDIAHDDVDRAM     = 136;
export const SIID_MEDIABDROM        = 137;
export const SIID_MEDIABDR          = 138;
export const SIID_MEDIABDRE         = 139;
export const SIID_CLUSTEREDDRIVE    = 140;
export const SIID_MAX_ICONS         = 181;

export const SIID_INVALID = (-1);

export const SHGNLI_PIDL       = 0x000000001;
export const SHGNLI_PREFIXNAME = 0x000000002;
export const SHGNLI_NOUNIQUE   = 0x000000004;
export const SHGNLI_NOLNK      = 0x000000008;
export const SHGNLI_NOLOCNAME  = 0x000000010;
export const SHGNLI_USEURLEXT  = 0x000000020;

export const PRINTACTION_OPEN             = 0;
export const PRINTACTION_PROPERTIES       = 1;
export const PRINTACTION_NETINSTALL       = 2;
export const PRINTACTION_NETINSTALLLINK   = 3;
export const PRINTACTION_TESTPAGE         = 4;
export const PRINTACTION_OPENNETPRN       = 5;
export const PRINTACTION_DOCUMENTDEFAULTS = 6;
export const PRINTACTION_SERVERPROPERTIES = 7;

export const OPEN_PRINTER_PROPS_INFOA = struct({
	dwSize       : DWORD, // DWORD
	pszSheetName : LPSTR, // LPSTR
	uSheetIndex  : UINT,  // UINT
	dwFlags      : DWORD, // DWORD
	bModal       : BOOL,  // BOOL
});
export const POPEN_PRINTER_PROPS_INFOA = pointer(OPEN_PRINTER_PROPS_INFOA);

export const OPEN_PRINTER_PROPS_INFOW = struct({
	dwSize       : DWORD,  // DWORD
	pszSheetName : LPWSTR, // LPWSTR
	uSheetIndex  : UINT,   // UINT
	dwFlags      : DWORD,  // DWORD
	bModal       : BOOL,   // BOOL
});
export const POPEN_PRINTER_PROPS_INFOW = pointer(OPEN_PRINTER_PROPS_INFOW);
export const OPEN_PRINTER_PROPS_INFO = OPEN_PRINTER_PROPS_INFOW;
export const POPEN_PRINTER_PROPS_INFO = POPEN_PRINTER_PROPS_INFOW;

export const PRINT_PROP_FORCE_NAME = 0x01;

export const OFFLINE_STATUS_LOCAL      = 0x0001;
export const OFFLINE_STATUS_REMOTE     = 0x0002;
export const OFFLINE_STATUS_INCOMPLETE = 0x0004;

export const SHIL_LARGE = 0;
export const SHIL_SMALL = 1;
export const SHIL_EXTRALARGE = 2;
export const SHIL_SYSSMALL = 3;
export const SHIL_JUMBO = 4;
export const SHIL_LAST = SHIL_JUMBO;

export const PFNCANSHAREFOLDERW = koffi.proto("__stdcall", "PFNCANSHAREFOLDERW", HRESULT /* HRESULT */, [
	PCWSTR, /* in PCWSTR pszPath */
]);
export const PFNCANSHAREFOLDER = PFNCANSHAREFOLDERW;

export const PFNSHOWSHAREFOLDERUIW = koffi.proto("__stdcall", "PFNSHOWSHAREFOLDERUIW", HRESULT /* HRESULT */, [
	HWND,   /* in opt HWND   hwndParent */
	PCWSTR, /* in     PCWSTR pszPath    */
]);
export const PFNSHOWSHAREFOLDERUI = PFNSHOWSHAREFOLDERUIW;

export const WC_NETADDRESS = L("msctls_netaddress");
export const NCM_GETADDRESS      = (WM_USER+1);
export const NCM_SETALLOWTYPE    = (WM_USER+2);
export const NCM_GETALLOWTYPE    = (WM_USER+3);
export const NCM_DISPLAYERRORTIP = (WM_USER+4);


const NET_ADDRESS_INFO_= koffi.types.void;	// iphlpapi.h

export const NC_ADDRESS = struct({
	pAddrInfo    : pointer(NET_ADDRESS_INFO_), // struct NET_ADDRESS_INFO_* // defined in iphlpapi.h
	PortNumber   : USHORT,                     // USHORT
	PrefixLength : BYTE,                       // BYTE
});
export const PNC_ADDRESS = pointer(NC_ADDRESS);


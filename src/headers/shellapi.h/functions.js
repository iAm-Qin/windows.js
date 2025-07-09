import koffi from "koffi";

// basic
import {pointer, out, inout} from "../../types.js";
import {int} from "../../types.js";

// guiddef.h
import {
	REFIID,
} from "../guiddef.h/guiddef.js";

// basetsd.h
import {
	UINT_PTR,
} from "../basetsd.h/basetsd.js";

// minwindef.h
import {
	DWORD, BOOL,
	INT, UINT,
	ULONG,
	HINSTANCE,
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
	LPSTR, LPCSTR, LPWSTR, LPCWSTR,
	PCWSTR, PWSTR,
} from "../winnt.h/winnt.js";
import {ULARGE_INTEGER} from "../winnt.h/structs.js";

// shellapi.h
import {
	HDROP,
	ASSOCIATIONELEMENT,
	LPSHFILEOPSTRUCTA, LPSHFILEOPSTRUCTW,
	LPSHQUERYRBINFO,
	NOTIFYICONIDENTIFIER,
	PAPPBARDATA,
	PNOTIFYICONDATAA, PNOTIFYICONDATAW,
	PSHCREATEPROCESSINFOW,
	SHELLEXECUTEINFOA, SHELLEXECUTEINFOW,
	SHSTOCKICONINFO,
	QUERY_USER_NOTIFICATION_STATE, SHSTOCKICONID,
} from "./structs.js";


const lib = koffi.load("shell32.dll");
import {createAutoLoader} from "../../internals/loader.js";

export function CommandLineToArgvW () {};
CommandLineToArgvW = createAutoLoader(lib, "CommandLineToArgvW", pointer(LPWSTR) /* LPWSTR * */, [
	LPCWSTR,           /* in  LPCWSTR lpCmdLine */
	out(pointer(int)), /* out int*    pNumArgs  */
], f => CommandLineToArgvW = f);
export {CommandLineToArgvW as CommandLineToArgv};

export function DragQueryFileA () {};
DragQueryFileA = createAutoLoader(lib, "DragQueryFileA", UINT /* UINT */, [
	HDROP, /* in HDROP hDrop    */
	UINT,  /* in UINT  iFile    */
	LPSTR, /*    LPSTR lpszFile */
	UINT,  /* in UINT  cch      */
], f => DragQueryFileA = f);

export function DragQueryFileW () {};
DragQueryFileW = createAutoLoader(lib, "DragQueryFileW", UINT /* UINT */, [
	HDROP,  /* in HDROP  hDrop    */
	UINT,   /* in UINT   iFile    */
	LPWSTR, /*    LPWSTR lpszFile */
	UINT,   /* in UINT   cch      */
], f => DragQueryFileW = f);
export {DragQueryFileW as DragQueryFile};

export function DragQueryPoint () {};
DragQueryPoint = createAutoLoader(lib, "DragQueryPoint", BOOL /* BOOL */, [
	HDROP,               /* in  HDROP   hDrop */
	out(pointer(POINT)), /* out POINT * ppt   */
], f => DragQueryPoint = f);

export function DragFinish () {};
DragFinish = createAutoLoader(lib, "DragFinish", koffi.types.void /* void */, [
	HDROP, /* in HDROP hDrop */
], f => DragFinish = f);

export function DragAcceptFiles () {};
DragAcceptFiles = createAutoLoader(lib, "DragAcceptFiles", koffi.types.void /* void */, [
	HWND, /* in HWND hWnd    */
	BOOL, /* in BOOL fAccept */
], f => DragAcceptFiles = f);

export function ShellExecuteA () {};
ShellExecuteA = createAutoLoader(lib, "ShellExecuteA", HINSTANCE /* HINSTANCE */, [
	HWND,   /* in opt HWND   hwnd         */
	LPCSTR, /* in opt LPCSTR lpOperation  */
	LPCSTR, /* in     LPCSTR lpFile       */
	LPCSTR, /* in opt LPCSTR lpParameters */
	LPCSTR, /* in opt LPCSTR lpDirectory  */
	INT,    /* in     INT    nShowCmd     */
], f => ShellExecuteA = f);

export function ShellExecuteW () {};
ShellExecuteW = createAutoLoader(lib, "ShellExecuteW", HINSTANCE /* HINSTANCE */, [
	HWND,    /* in opt HWND    hwnd         */
	LPCWSTR, /* in opt LPCWSTR lpOperation  */
	LPCWSTR, /* in     LPCWSTR lpFile       */
	LPCWSTR, /* in opt LPCWSTR lpParameters */
	LPCWSTR, /* in opt LPCWSTR lpDirectory  */
	INT,     /* in     INT     nShowCmd     */
], f => ShellExecuteW = f);
export {ShellExecuteW as ShellExecute};

export function FindExecutableA () {};
FindExecutableA = createAutoLoader(lib, "FindExecutableA", HINSTANCE /* HINSTANCE */, [
	LPCSTR, /* in     LPCSTR lpFile      */
	LPCSTR, /* in opt LPCSTR lpDirectory */
	LPSTR,  /*        LPSTR  lpResult    */
], f => FindExecutableA = f);

export function FindExecutableW () {};
FindExecutableW = createAutoLoader(lib, "FindExecutableW", HINSTANCE /* HINSTANCE */, [
	LPCWSTR, /* in     LPCWSTR lpFile      */
	LPCWSTR, /* in opt LPCWSTR lpDirectory */
	LPWSTR,  /*        LPWSTR  lpResult    */
], f => FindExecutableW = f);
export {FindExecutableW as FindExecutable};

export function ShellAboutA () {};
ShellAboutA = createAutoLoader(lib, "ShellAboutA", INT /* INT */, [
	HWND,   /* in opt HWND   hWnd         */
	LPCSTR, /* in     LPCSTR szApp        */
	LPCSTR, /* in opt LPCSTR szOtherStuff */
	HICON,  /* in opt HICON  hIcon        */
], f => ShellAboutA = f);

export function ShellAboutW () {};
ShellAboutW = createAutoLoader(lib, "ShellAboutW", INT /* INT */, [
	HWND,    /* in opt HWND    hWnd         */
	LPCWSTR, /* in     LPCWSTR szApp        */
	LPCWSTR, /* in opt LPCWSTR szOtherStuff */
	HICON,   /* in opt HICON   hIcon        */
], f => ShellAboutW = f);
export {ShellAboutW as ShellAbout};

export function DuplicateIcon () {};
DuplicateIcon = createAutoLoader(lib, "DuplicateIcon", HICON /* HICON */, [
	HINSTANCE, /* reserved HINSTANCE hInst */
	HICON,     /* in       HICON     hIcon */
], f => DuplicateIcon = f);

export function ExtractIconA () {};
ExtractIconA = createAutoLoader(lib, "ExtractIconA", HICON /* HICON */, [
	HINSTANCE, /* reserved HINSTANCE hInst          */
	LPCSTR,    /* in       LPCSTR    pszExeFileName */
	UINT,      /*          UINT      nIconIndex     */
], f => ExtractIconA = f);

export function ExtractIconW () {};
ExtractIconW = createAutoLoader(lib, "ExtractIconW", HICON /* HICON */, [
	HINSTANCE, /* reserved HINSTANCE hInst          */
	LPCWSTR,   /* in       LPCWSTR   pszExeFileName */
	UINT,      /*          UINT      nIconIndex     */
], f => ExtractIconW = f);
export {ExtractIconW as ExtractIcon};

export function SHAppBarMessage () {};
SHAppBarMessage = createAutoLoader(lib, "SHAppBarMessage", UINT_PTR /* UINT_PTR */, [
	DWORD,              /* in     DWORD       dwMessage */
	inout(PAPPBARDATA), /* in out PAPPBARDATA pData     */
], f => SHAppBarMessage = f);

export function ExtractIconExA () {};
ExtractIconExA = createAutoLoader(lib, "ExtractIconExA", UINT /* UINT */, [
	LPCSTR,         /* in LPCSTR  lpszFile    */
	int,            /*    int     nIconIndex  */
	pointer(HICON), /*    HICON * phiconLarge */
	pointer(HICON), /*    HICON * phiconSmall */
	UINT,           /*    UINT    nIcons      */
], f => ExtractIconExA = f);

export function ExtractIconExW () {};
ExtractIconExW = createAutoLoader(lib, "ExtractIconExW", UINT /* UINT */, [
	LPCWSTR,        /* in LPCWSTR lpszFile    */
	int,            /*    int     nIconIndex  */
	pointer(HICON), /*    HICON * phiconLarge */
	pointer(HICON), /*    HICON * phiconSmall */
	UINT,           /*    UINT    nIcons      */
], f => ExtractIconExW = f);
export {ExtractIconExW as ExtractIconEx};

export function SHFileOperationA () {};
SHFileOperationA = createAutoLoader(lib, "SHFileOperationA", int /* int */, [
	inout(LPSHFILEOPSTRUCTA), /* in out LPSHFILEOPSTRUCTA lpFileOp */
], f => SHFileOperationA = f);

export function SHFileOperationW () {};
SHFileOperationW = createAutoLoader(lib, "SHFileOperationW", int /* int */, [
	inout(LPSHFILEOPSTRUCTW), /* in out LPSHFILEOPSTRUCTW lpFileOp */
], f => SHFileOperationW = f);
export {SHFileOperationW as SHFileOperation};

export function SHFreeNameMappings () {};
SHFreeNameMappings = createAutoLoader(lib, "SHFreeNameMappings", koffi.types.void /* void */, [
	HANDLE, /* in opt HANDLE hNameMappings */
], f => SHFreeNameMappings = f);

export function ShellExecuteExA () {};
ShellExecuteExA = createAutoLoader(lib, "ShellExecuteExA", BOOL /* BOOL */, [
	inout(pointer(SHELLEXECUTEINFOA)), /* in out SHELLEXECUTEINFOA * pExecInfo */
], f => ShellExecuteExA = f);

export function ShellExecuteExW () {};
ShellExecuteExW = createAutoLoader(lib, "ShellExecuteExW", BOOL /* BOOL */, [
	inout(pointer(SHELLEXECUTEINFOW)), /* in out SHELLEXECUTEINFOW * pExecInfo */
], f => ShellExecuteExW = f);
export {ShellExecuteExW as ShellExecuteEx};

export function SHCreateProcessAsUserW () {};
SHCreateProcessAsUserW = createAutoLoader(lib, "SHCreateProcessAsUserW", BOOL /* BOOL */, [
	inout(PSHCREATEPROCESSINFOW), /* in out PSHCREATEPROCESSINFOW pscpi */
], f => SHCreateProcessAsUserW = f);
export {SHCreateProcessAsUserW as SHCreateProcessAsUser};

export function SHEvaluateSystemCommandTemplate () {};
SHEvaluateSystemCommandTemplate = createAutoLoader(lib, "SHEvaluateSystemCommandTemplate", HRESULT /* HRESULT */, [
	PCWSTR,         /* in PCWSTR  pszCmdTemplate  */
	pointer(PWSTR), /*    PWSTR * ppszApplication */
	pointer(PWSTR), /*    PWSTR * ppszCommandLine */
	pointer(PWSTR), /*    PWSTR * ppszParameters  */
], f => SHEvaluateSystemCommandTemplate = f);

export function AssocCreateForClasses () {};
AssocCreateForClasses = createAutoLoader(lib, "AssocCreateForClasses", HRESULT /* HRESULT */, [
	pointer(ASSOCIATIONELEMENT),        /*    const ASSOCIATIONELEMENT * rgClasses */
	ULONG,                              /*    ULONG                      cClasses  */
	REFIID,                             /* in REFIID                     riid      */
	pointer(pointer(koffi.types.void)), /*    void **                    ppv       */
], f => AssocCreateForClasses = f);

export function SHQueryRecycleBinA () {};
SHQueryRecycleBinA = createAutoLoader(lib, "SHQueryRecycleBinA", HRESULT /* HRESULT */, [
	LPCSTR,                 /* in opt LPCSTR          pszRootPath    */
	inout(LPSHQUERYRBINFO), /* in out LPSHQUERYRBINFO pSHQueryRBInfo */
], f => SHQueryRecycleBinA = f);

export function SHQueryRecycleBinW () {};
SHQueryRecycleBinW = createAutoLoader(lib, "SHQueryRecycleBinW", HRESULT /* HRESULT */, [
	LPCWSTR,                /* in opt LPCWSTR         pszRootPath    */
	inout(LPSHQUERYRBINFO), /* in out LPSHQUERYRBINFO pSHQueryRBInfo */
], f => SHQueryRecycleBinW = f);
export {SHQueryRecycleBinW as SHQueryRecycleBin};

export function SHEmptyRecycleBinA () {};
SHEmptyRecycleBinA = createAutoLoader(lib, "SHEmptyRecycleBinA", HRESULT /* HRESULT */, [
	HWND,   /* in opt HWND   hwnd        */
	LPCSTR, /* in opt LPCSTR pszRootPath */
	DWORD,  /*        DWORD  dwFlags     */
], f => SHEmptyRecycleBinA = f);

export function SHEmptyRecycleBinW () {};
SHEmptyRecycleBinW = createAutoLoader(lib, "SHEmptyRecycleBinW", HRESULT /* HRESULT */, [
	HWND,    /* in opt HWND    hwnd        */
	LPCWSTR, /* in opt LPCWSTR pszRootPath */
	DWORD,   /*        DWORD   dwFlags     */
], f => SHEmptyRecycleBinW = f);
export {SHEmptyRecycleBinW as SHEmptyRecycleBin};

export function SHQueryUserNotificationState () {};
SHQueryUserNotificationState = createAutoLoader(lib, "SHQueryUserNotificationState", HRESULT /* HRESULT */, [
	out(pointer(QUERY_USER_NOTIFICATION_STATE)), /* out QUERY_USER_NOTIFICATION_STATE * pquns */
], f => SHQueryUserNotificationState = f);

export function SHGetPropertyStoreForWindow () {};
SHGetPropertyStoreForWindow = createAutoLoader(lib, "SHGetPropertyStoreForWindow", HRESULT /* HRESULT */, [
	HWND,                               /* in HWND    hwnd */
	REFIID,                             /* in REFIID  riid */
	pointer(pointer(koffi.types.void)), /*    void* * ppv  */
], f => SHGetPropertyStoreForWindow = f);

export function Shell_NotifyIconA () {};
Shell_NotifyIconA = createAutoLoader(lib, "Shell_NotifyIconA", BOOL /* BOOL */, [
	DWORD,            /*    DWORD            dwMessage */
	PNOTIFYICONDATAA, /* in PNOTIFYICONDATAA lpData    */
], f => Shell_NotifyIconA = f);

export function Shell_NotifyIconW () {};
Shell_NotifyIconW = createAutoLoader(lib, "Shell_NotifyIconW", BOOL /* BOOL */, [
	DWORD,            /*    DWORD            dwMessage */
	PNOTIFYICONDATAW, /* in PNOTIFYICONDATAW lpData    */
], f => Shell_NotifyIconW = f);
export {Shell_NotifyIconW as Shell_NotifyIcon};

export function Shell_NotifyIconGetRect () {};
Shell_NotifyIconGetRect = createAutoLoader(lib, "Shell_NotifyIconGetRect", HRESULT /* HRESULT */, [
	pointer(NOTIFYICONIDENTIFIER), /* in  const NOTIFYICONIDENTIFIER* identifier   */
	out(pointer(RECT)),            /* out RECT*                       iconLocation */
], f => Shell_NotifyIconGetRect = f);

export function SHGetStockIconInfo () {};
SHGetStockIconInfo = createAutoLoader(lib, "SHGetStockIconInfo", HRESULT /* HRESULT */, [
	SHSTOCKICONID,                   /*        SHSTOCKICONID     siid   */
	UINT,                            /*        UINT              uFlags */
	inout(pointer(SHSTOCKICONINFO)), /* in out SHSTOCKICONINFO * psii   */
], f => SHGetStockIconInfo = f);

export function SHGetDiskFreeSpaceExA () {};
SHGetDiskFreeSpaceExA = createAutoLoader(lib, "SHGetDiskFreeSpaceExA", BOOL /* BOOL */, [
	LPCSTR,                       /* in      LPCSTR          pszDirectoryName              */
	out(pointer(ULARGE_INTEGER)), /* out opt ULARGE_INTEGER* pulFreeBytesAvailableToCaller */
	out(pointer(ULARGE_INTEGER)), /* out opt ULARGE_INTEGER* pulTotalNumberOfBytes         */
	out(pointer(ULARGE_INTEGER)), /* out opt ULARGE_INTEGER* pulTotalNumberOfFreeBytes     */
], f => SHGetDiskFreeSpaceExA = f);

export function SHGetDiskFreeSpaceExW () {};
SHGetDiskFreeSpaceExW = createAutoLoader(lib, "SHGetDiskFreeSpaceExW", BOOL /* BOOL */, [
	LPCWSTR,                      /* in      LPCWSTR         pszDirectoryName              */
	out(pointer(ULARGE_INTEGER)), /* out opt ULARGE_INTEGER* pulFreeBytesAvailableToCaller */
	out(pointer(ULARGE_INTEGER)), /* out opt ULARGE_INTEGER* pulTotalNumberOfBytes         */
	out(pointer(ULARGE_INTEGER)), /* out opt ULARGE_INTEGER* pulTotalNumberOfFreeBytes     */
], f => SHGetDiskFreeSpaceExW = f);
export {SHGetDiskFreeSpaceExW as SHGetDiskFreeSpaceEx};

export function SHGetNewLinkInfoA () {};
SHGetNewLinkInfoA = createAutoLoader(lib, "SHGetNewLinkInfoA", BOOL /* BOOL */, [
	LPCSTR,             /* in  LPCSTR pszLinkTo  */
	LPCSTR,             /* in  LPCSTR pszDir     */
	LPSTR,              /*     LPSTR  pszName    */
	out(pointer(BOOL)), /* out BOOL * pfMustCopy */
	UINT,               /* in  UINT   uFlags     */
], f => SHGetNewLinkInfoA = f);

export function SHGetNewLinkInfoW () {};
SHGetNewLinkInfoW = createAutoLoader(lib, "SHGetNewLinkInfoW", BOOL /* BOOL */, [
	LPCWSTR,            /* in  LPCWSTR pszLinkTo  */
	LPCWSTR,            /* in  LPCWSTR pszDir     */
	LPWSTR,             /*     LPWSTR  pszName    */
	out(pointer(BOOL)), /* out BOOL *  pfMustCopy */
	UINT,               /* in  UINT    uFlags     */
], f => SHGetNewLinkInfoW = f);
export {SHGetNewLinkInfoW as SHGetNewLinkInfo};

export function SHInvokePrinterCommandA () {};
SHInvokePrinterCommandA = createAutoLoader(lib, "SHInvokePrinterCommandA", BOOL /* BOOL */, [
	HWND,   /* in opt HWND   hwnd    */
	UINT,   /*        UINT   uAction */
	LPCSTR, /* in     LPCSTR lpBuf1  */
	LPCSTR, /* in opt LPCSTR lpBuf2  */
	BOOL,   /*        BOOL   fModal  */
], f => SHInvokePrinterCommandA = f);

export function SHInvokePrinterCommandW () {};
SHInvokePrinterCommandW = createAutoLoader(lib, "SHInvokePrinterCommandW", BOOL /* BOOL */, [
	HWND,    /* in opt HWND    hwnd    */
	UINT,    /*        UINT    uAction */
	LPCWSTR, /* in     LPCWSTR lpBuf1  */
	LPCWSTR, /* in opt LPCWSTR lpBuf2  */
	BOOL,    /*        BOOL    fModal  */
], f => SHInvokePrinterCommandW = f);
export {SHInvokePrinterCommandW as SHInvokePrinterCommand};

export function SHLoadNonloadedIconOverlayIdentifiers () {};
SHLoadNonloadedIconOverlayIdentifiers = createAutoLoader(lib, "SHLoadNonloadedIconOverlayIdentifiers", HRESULT /* HRESULT */, [
	/* void */
], f => SHLoadNonloadedIconOverlayIdentifiers = f);

export function SHIsFileAvailableOffline () {};
SHIsFileAvailableOffline = createAutoLoader(lib, "SHIsFileAvailableOffline", HRESULT /* HRESULT */, [
	PCWSTR,              /* in      PCWSTR  pwszPath  */
	out(pointer(DWORD)), /* out opt DWORD * pdwStatus */
], f => SHIsFileAvailableOffline = f);

export function SHSetLocalizedName () {};
SHSetLocalizedName = createAutoLoader(lib, "SHSetLocalizedName", HRESULT /* HRESULT */, [
	PCWSTR, /* in PCWSTR pszPath      */
	PCWSTR, /* in PCWSTR pszResModule */
	int,    /*    int    idsRes       */
], f => SHSetLocalizedName = f);

export function SHRemoveLocalizedName () {};
SHRemoveLocalizedName = createAutoLoader(lib, "SHRemoveLocalizedName", HRESULT /* HRESULT */, [
	PCWSTR, /* in PCWSTR pszPath */
], f => SHRemoveLocalizedName = f);

export function SHGetLocalizedName () {};
SHGetLocalizedName = createAutoLoader(lib, "SHGetLocalizedName", HRESULT /* HRESULT */, [
	PCWSTR,            /* in  PCWSTR pszPath      */
	PWSTR,             /*     PWSTR  pszResModule */
	UINT,              /*     UINT   cch          */
	out(pointer(int)), /* out int *  pidsRes      */
], f => SHGetLocalizedName = f);

export function IsLFNDriveA () {};
IsLFNDriveA = createAutoLoader(lib, "IsLFNDriveA", BOOL /* BOOL */, [
	LPCSTR, /* in opt LPCSTR pszPath */
], f => IsLFNDriveA = f);

export function IsLFNDriveW () {};
IsLFNDriveW = createAutoLoader(lib, "IsLFNDriveW", BOOL /* BOOL */, [
	LPCWSTR, /* in opt LPCWSTR pszPath */
], f => IsLFNDriveW = f);
export {IsLFNDriveW as IsLFNDrive};

export function SHGetImageList () {};
SHGetImageList = createAutoLoader(lib, "SHGetImageList", HRESULT /* HRESULT */, [
	int,                                /* in int     iImageList */
	REFIID,                             /* in REFIID  riid       */
	pointer(pointer(koffi.types.void)), /*    void ** ppvObj     */
], f => SHGetImageList = f);

export function InitNetworkAddressControl () {};
InitNetworkAddressControl = createAutoLoader(lib, "InitNetworkAddressControl", BOOL /* BOOL */, [
	/* void */
], f => InitNetworkAddressControl = f);

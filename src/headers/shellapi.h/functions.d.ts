// basic
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

// shellapi.h
import {
	HDROP,
	LPSHFILEOPSTRUCTA, LPSHFILEOPSTRUCTW,
	LPSHQUERYRBINFO,
	PAPPBARDATA,
	PNOTIFYICONDATAA, PNOTIFYICONDATAW,
	PSHCREATEPROCESSINFOW,
	SHSTOCKICONID,
} from "./structs.js";


export function CommandLineToArgvW (lpCmdLine: LPCWSTR, pNumArgs: "int*"): "LPWSTR *";
export function CommandLineToArgv (lpCmdLine: LPCWSTR, pNumArgs: "int*"): "LPWSTR *";
export function DragQueryFileA (hDrop: HDROP, iFile: UINT, lpszFile: LPSTR, cch: UINT): UINT;
export function DragQueryFileW (hDrop: HDROP, iFile: UINT, lpszFile: LPWSTR, cch: UINT): UINT;
export function DragQueryFile (hDrop: HDROP, iFile: UINT, lpszFile: LPWSTR, cch: UINT): UINT;
export function DragQueryPoint (hDrop: HDROP, ppt: "POINT *"): BOOL;
export function DragFinish (hDrop: HDROP): void;
export function DragAcceptFiles (hWnd: HWND, fAccept: BOOL): void;
export function ShellExecuteA (hwnd: HWND, lpOperation: LPCSTR, lpFile: LPCSTR, lpParameters: LPCSTR, lpDirectory: LPCSTR, nShowCmd: INT): HINSTANCE;
export function ShellExecuteW (hwnd: HWND, lpOperation: LPCWSTR, lpFile: LPCWSTR, lpParameters: LPCWSTR, lpDirectory: LPCWSTR, nShowCmd: INT): HINSTANCE;
export function ShellExecute (hwnd: HWND, lpOperation: LPCWSTR, lpFile: LPCWSTR, lpParameters: LPCWSTR, lpDirectory: LPCWSTR, nShowCmd: INT): HINSTANCE;
export function FindExecutableA (lpFile: LPCSTR, lpDirectory: LPCSTR, lpResult: LPSTR): HINSTANCE;
export function FindExecutableW (lpFile: LPCWSTR, lpDirectory: LPCWSTR, lpResult: LPWSTR): HINSTANCE;
export function FindExecutable (lpFile: LPCWSTR, lpDirectory: LPCWSTR, lpResult: LPWSTR): HINSTANCE;
export function ShellAboutA (hWnd: HWND, szApp: LPCSTR, szOtherStuff: LPCSTR, hIcon: HICON): INT;
export function ShellAboutW (hWnd: HWND, szApp: LPCWSTR, szOtherStuff: LPCWSTR, hIcon: HICON): INT;
export function ShellAbout (hWnd: HWND, szApp: LPCWSTR, szOtherStuff: LPCWSTR, hIcon: HICON): INT;
export function DuplicateIcon (hInst: HINSTANCE, hIcon: HICON): HICON;
export function ExtractIconA (hInst: HINSTANCE, pszExeFileName: LPCSTR, nIconIndex: UINT): HICON;
export function ExtractIconW (hInst: HINSTANCE, pszExeFileName: LPCWSTR, nIconIndex: UINT): HICON;
export function ExtractIcon (hInst: HINSTANCE, pszExeFileName: LPCWSTR, nIconIndex: UINT): HICON;
export function SHAppBarMessage (dwMessage: DWORD, pData: PAPPBARDATA): UINT_PTR;
export function ExtractIconExA (lpszFile: LPCSTR, nIconIndex: int, phiconLarge: "HICON *", phiconSmall: "HICON *", nIcons: UINT): UINT;
export function ExtractIconExW (lpszFile: LPCWSTR, nIconIndex: int, phiconLarge: "HICON *", phiconSmall: "HICON *", nIcons: UINT): UINT;
export function ExtractIconEx (lpszFile: LPCWSTR, nIconIndex: int, phiconLarge: "HICON *", phiconSmall: "HICON *", nIcons: UINT): UINT;
export function SHFileOperationA (lpFileOp: LPSHFILEOPSTRUCTA): int;
export function SHFileOperationW (lpFileOp: LPSHFILEOPSTRUCTW): int;
export function SHFileOperation (lpFileOp: LPSHFILEOPSTRUCTW): int;
export function SHFreeNameMappings (hNameMappings: HANDLE): void;
export function ShellExecuteExA (pExecInfo: "SHELLEXECUTEINFOA *"): BOOL;
export function ShellExecuteExW (pExecInfo: "SHELLEXECUTEINFOW *"): BOOL;
export function ShellExecuteEx (pExecInfo: "SHELLEXECUTEINFOW *"): BOOL;
export function SHCreateProcessAsUserW (pscpi: PSHCREATEPROCESSINFOW): BOOL;
export function SHCreateProcessAsUser (pscpi: PSHCREATEPROCESSINFOW): BOOL;
export function SHEvaluateSystemCommandTemplate (pszCmdTemplate: PCWSTR, ppszApplication: "PWSTR *", ppszCommandLine: "PWSTR *", ppszParameters: "PWSTR *"): HRESULT;
export function AssocCreateForClasses (rgClasses: "ASSOCIATIONELEMENT *", cClasses: ULONG, riid: REFIID, ppv: "void **"): HRESULT;
export function SHQueryRecycleBinA (pszRootPath: LPCSTR, pSHQueryRBInfo: LPSHQUERYRBINFO): HRESULT;
export function SHQueryRecycleBinW (pszRootPath: LPCWSTR, pSHQueryRBInfo: LPSHQUERYRBINFO): HRESULT;
export function SHQueryRecycleBin (pszRootPath: LPCWSTR, pSHQueryRBInfo: LPSHQUERYRBINFO): HRESULT;
export function SHEmptyRecycleBinA (hwnd: HWND, pszRootPath: LPCSTR, dwFlags: DWORD): HRESULT;
export function SHEmptyRecycleBinW (hwnd: HWND, pszRootPath: LPCWSTR, dwFlags: DWORD): HRESULT;
export function SHEmptyRecycleBin (hwnd: HWND, pszRootPath: LPCWSTR, dwFlags: DWORD): HRESULT;
export function SHQueryUserNotificationState (pquns: "QUERY_USER_NOTIFICATION_STATE *"): HRESULT;
export function SHGetPropertyStoreForWindow (hwnd: HWND, riid: REFIID, ppv: "void* *"): HRESULT;
export function Shell_NotifyIconA (dwMessage: DWORD, lpData: PNOTIFYICONDATAA): BOOL;
export function Shell_NotifyIconW (dwMessage: DWORD, lpData: PNOTIFYICONDATAW): BOOL;
export function Shell_NotifyIcon (dwMessage: DWORD, lpData: PNOTIFYICONDATAW): BOOL;
export function Shell_NotifyIconGetRect (identifier: "NOTIFYICONIDENTIFIER*", iconLocation: "RECT*"): HRESULT;
export function SHGetStockIconInfo (siid: SHSTOCKICONID, uFlags: UINT, psii: "SHSTOCKICONINFO *"): HRESULT;
export function SHGetDiskFreeSpaceExA (pszDirectoryName: LPCSTR, pulFreeBytesAvailableToCaller: "ULARGE_INTEGER*", pulTotalNumberOfBytes: "ULARGE_INTEGER*", pulTotalNumberOfFreeBytes: "ULARGE_INTEGER*"): BOOL;
export function SHGetDiskFreeSpaceExW (pszDirectoryName: LPCWSTR, pulFreeBytesAvailableToCaller: "ULARGE_INTEGER*", pulTotalNumberOfBytes: "ULARGE_INTEGER*", pulTotalNumberOfFreeBytes: "ULARGE_INTEGER*"): BOOL;
export function SHGetDiskFreeSpaceEx (pszDirectoryName: LPCWSTR, pulFreeBytesAvailableToCaller: "ULARGE_INTEGER*", pulTotalNumberOfBytes: "ULARGE_INTEGER*", pulTotalNumberOfFreeBytes: "ULARGE_INTEGER*"): BOOL;
export function SHGetNewLinkInfoA (pszLinkTo: LPCSTR, pszDir: LPCSTR, pszName: LPSTR, pfMustCopy: "BOOL *", uFlags: UINT): BOOL;
export function SHGetNewLinkInfoW (pszLinkTo: LPCWSTR, pszDir: LPCWSTR, pszName: LPWSTR, pfMustCopy: "BOOL *", uFlags: UINT): BOOL;
export function SHGetNewLinkInfo (pszLinkTo: LPCWSTR, pszDir: LPCWSTR, pszName: LPWSTR, pfMustCopy: "BOOL *", uFlags: UINT): BOOL;
export function SHInvokePrinterCommandA (hwnd: HWND, uAction: UINT, lpBuf1: LPCSTR, lpBuf2: LPCSTR, fModal: BOOL): BOOL;
export function SHInvokePrinterCommandW (hwnd: HWND, uAction: UINT, lpBuf1: LPCWSTR, lpBuf2: LPCWSTR, fModal: BOOL): BOOL;
export function SHInvokePrinterCommand (hwnd: HWND, uAction: UINT, lpBuf1: LPCWSTR, lpBuf2: LPCWSTR, fModal: BOOL): BOOL;
export function SHLoadNonloadedIconOverlayIdentifiers (): HRESULT;
export function SHIsFileAvailableOffline (pwszPath: PCWSTR, pdwStatus: "DWORD *"): HRESULT;
export function SHSetLocalizedName (pszPath: PCWSTR, pszResModule: PCWSTR, idsRes: int): HRESULT;
export function SHRemoveLocalizedName (pszPath: PCWSTR): HRESULT;
export function SHGetLocalizedName (pszPath: PCWSTR, pszResModule: PWSTR, cch: UINT, pidsRes: "int *"): HRESULT;
export function IsLFNDriveA (pszPath: LPCSTR): BOOL;
export function IsLFNDriveW (pszPath: LPCWSTR): BOOL;
export function IsLFNDrive (pszPath: LPCWSTR): BOOL;
export function SHGetImageList (iImageList: int, riid: REFIID, ppvObj: "void **"): HRESULT;
export function InitNetworkAddressControl (): BOOL;

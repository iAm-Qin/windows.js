// minwindef.h
import {
	DWORD,
	BOOL,
} from "../minwindef.h/minWindef.js";

// winnt.h
import {
	HANDLE,
	PHANDLE,
	LPCH, LPWCH,
	LPSTR, LPCSTR, LPWSTR, LPCWSTR,
} from "../winnt.h/winnt.js";


export function SetEnvironmentStringsW (NewEnvironment: LPWCH): BOOL;
export function SetEnvironmentStrings (NewEnvironment: LPWCH): BOOL;
export function GetStdHandle (nStdHandle: DWORD): HANDLE;
export function SetStdHandle (nStdHandle: DWORD, hHandle: HANDLE): BOOL;
export function SetStdHandleEx (nStdHandle: DWORD, hHandle: HANDLE, phPrevValue: PHANDLE): BOOL;
export function GetCommandLineA (): LPSTR;
export function GetCommandLineW (): LPWSTR;
export function GetCommandLine (): LPWSTR;
export function GetEnvironmentStrings (): LPCH;
export function GetEnvironmentStringsW (): LPWCH;
export function GetEnvironmentStrings (): LPWCH;
export function FreeEnvironmentStringsA (penv: LPCH): BOOL;
export function FreeEnvironmentStringsW (penv: LPWCH): BOOL;
export function FreeEnvironmentStrings (penv: LPWCH): BOOL;
export function GetEnvironmentVariableA (lpName: LPCSTR, lpBuffer: LPSTR, nSize: DWORD): DWORD;
export function GetEnvironmentVariableW (lpName: LPCWSTR, lpBuffer: LPWSTR, nSize: DWORD): DWORD;
export function GetEnvironmentVariable (lpName: LPCWSTR, lpBuffer: LPWSTR, nSize: DWORD): DWORD;
export function SetEnvironmentVariableA (lpName: LPCSTR, lpValue: LPCSTR): BOOL;
export function SetEnvironmentVariableW (lpName: LPCWSTR, lpValue: LPCWSTR): BOOL;
export function SetEnvironmentVariable (lpName: LPCWSTR, lpValue: LPCWSTR): BOOL;
export function ExpandEnvironmentStringsA (lpSrc: LPCSTR, lpDst: LPSTR, nSize: DWORD): DWORD;
export function ExpandEnvironmentStringsW (lpSrc: LPCWSTR, lpDst: LPWSTR, nSize: DWORD): DWORD;
export function ExpandEnvironmentStrings (lpSrc: LPCWSTR, lpDst: LPWSTR, nSize: DWORD): DWORD;
export function SetCurrentDirectoryA (lpPathName: LPCSTR): BOOL;
export function SetCurrentDirectoryW (lpPathName: LPCWSTR): BOOL;
export function SetCurrentDirectory (lpPathName: LPCWSTR): BOOL;
export function GetCurrentDirectoryA (nBufferLength: DWORD, lpBuffer: LPSTR): DWORD;
export function GetCurrentDirectoryW (nBufferLength: DWORD, lpBuffer: LPWSTR): DWORD;
export function GetCurrentDirectory (nBufferLength: DWORD, lpBuffer: LPWSTR): DWORD;
export function SearchPathW (lpPath: LPCWSTR, lpFileName: LPCWSTR, lpExtension: LPCWSTR, nBufferLength: DWORD, lpBuffer: LPWSTR, lpFilePart: "LPWSTR*"): DWORD;
export function SearchPath (lpPath: LPCWSTR, lpFileName: LPCWSTR, lpExtension: LPCWSTR, nBufferLength: DWORD, lpBuffer: LPWSTR, lpFilePart: "LPWSTR*"): DWORD;
export function SearchPathA (lpPath: LPCSTR, lpFileName: LPCSTR, lpExtension: LPCSTR, nBufferLength: DWORD, lpBuffer: LPSTR, lpFilePart: "LPSTR*"): DWORD;
export function NeedCurrentDirectoryForExePathA (ExeName: LPCSTR): BOOL;
export function NeedCurrentDirectoryForExePathW (ExeName: LPCWSTR): BOOL;
export function NeedCurrentDirectoryForExePath (ExeName: LPCWSTR): BOOL;

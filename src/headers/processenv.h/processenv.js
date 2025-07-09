import koffi from "koffi";

import {pointer, out} from "../../types.js";

// minwindef.h
import {
	DWORD,
	BOOL,
} from "../minwindef.h/minWindef.js";

// winnt.h
import {
	HANDLE,
	PHANDLE,
} from "../winnt.h/winnt.js";
import {
	LPCH, LPWCH,
	LPSTR, LPCSTR, LPWSTR, LPCWSTR,
} from "../winnt.h/winnt.js";


const lib = koffi.load("kernel32.dll");
import {createAutoLoader} from "../../internals/loader.js";

export function SetEnvironmentStringsW () {};
SetEnvironmentStringsW = createAutoLoader(lib, "SetEnvironmentStringsW", BOOL /* BOOL */, [
	LPWCH, /* in LPWCH NewEnvironment */
], f => SetEnvironmentStringsW = f);
export {SetEnvironmentStringsW as SetEnvironmentStrings};

export function GetStdHandle () {};
GetStdHandle = createAutoLoader(lib, "GetStdHandle", HANDLE /* HANDLE */, [
	DWORD, /* in DWORD nStdHandle */
], f => GetStdHandle = f);

export function SetStdHandle () {};
SetStdHandle = createAutoLoader(lib, "SetStdHandle", BOOL /* BOOL */, [
	DWORD,  /* in DWORD  nStdHandle */
	HANDLE, /* in HANDLE hHandle    */
], f => SetStdHandle = f);

export function SetStdHandleEx () {};
SetStdHandleEx = createAutoLoader(lib, "SetStdHandleEx", BOOL /* BOOL */, [
	DWORD,        /* in      DWORD   nStdHandle  */
	HANDLE,       /* in      HANDLE  hHandle     */
	out(PHANDLE), /* out opt PHANDLE phPrevValue */
], f => SetStdHandleEx = f);

export function GetCommandLineA () {};
GetCommandLineA = createAutoLoader(lib, "GetCommandLineA", LPSTR /* LPSTR */, [
	/* void */
], f => GetCommandLineA = f);

export function GetCommandLineW () {};
GetCommandLineW = createAutoLoader(lib, "GetCommandLineW", LPWSTR /* LPWSTR */, [
	/* void */
], f => GetCommandLineW = f);
export {GetCommandLineW as GetCommandLine};

// 注：dll 中定义的是 GetEnvironmentStrings，没有 A。
export function GetEnvironmentStringsA () {};
GetEnvironmentStringsA = createAutoLoader(lib, "GetEnvironmentStrings", LPCH /* LPCH */, [
	/* void */
], f => GetEnvironmentStringsA = f);

export function GetEnvironmentStringsW () {};
GetEnvironmentStringsW = createAutoLoader(lib, "GetEnvironmentStringsW", LPWCH /* LPWCH */, [
	/* void */
], f => GetEnvironmentStringsW = f);
export {GetEnvironmentStringsW as GetEnvironmentStrings};

export function FreeEnvironmentStringsA () {};
FreeEnvironmentStringsA = createAutoLoader(lib, "FreeEnvironmentStringsA", BOOL /* BOOL */, [
	LPCH, /* in LPCH penv */
], f => FreeEnvironmentStringsA = f);

export function FreeEnvironmentStringsW () {};
FreeEnvironmentStringsW = createAutoLoader(lib, "FreeEnvironmentStringsW", BOOL /* BOOL */, [
	LPWCH, /* in LPWCH penv */
], f => FreeEnvironmentStringsW = f);
export {FreeEnvironmentStringsW as FreeEnvironmentStrings};

export function GetEnvironmentVariableA () {};
GetEnvironmentVariableA = createAutoLoader(lib, "GetEnvironmentVariableA", DWORD /* DWORD */, [
	LPCSTR, /* in opt LPCSTR lpName   */
	LPSTR,  /*        LPSTR  lpBuffer */
	DWORD,  /* in     DWORD  nSize    */
], f => GetEnvironmentVariableA = f);

export function GetEnvironmentVariableW () {};
GetEnvironmentVariableW = createAutoLoader(lib, "GetEnvironmentVariableW", DWORD /* DWORD */, [
	LPCWSTR, /* in opt LPCWSTR lpName   */
	LPWSTR,  /*        LPWSTR  lpBuffer */
	DWORD,   /* in     DWORD   nSize    */
], f => GetEnvironmentVariableW = f);
export {GetEnvironmentVariableW as GetEnvironmentVariable};

export function SetEnvironmentVariableA () {};
SetEnvironmentVariableA = createAutoLoader(lib, "SetEnvironmentVariableA", BOOL /* BOOL */, [
	LPCSTR, /* in     LPCSTR lpName  */
	LPCSTR, /* in opt LPCSTR lpValue */
], f => SetEnvironmentVariableA = f);

export function SetEnvironmentVariableW () {};
SetEnvironmentVariableW = createAutoLoader(lib, "SetEnvironmentVariableW", BOOL /* BOOL */, [
	LPCWSTR, /* in     LPCWSTR lpName  */
	LPCWSTR, /* in opt LPCWSTR lpValue */
], f => SetEnvironmentVariableW = f);
export {SetEnvironmentVariableW as SetEnvironmentVariable};

export function ExpandEnvironmentStringsA () {};
ExpandEnvironmentStringsA = createAutoLoader(lib, "ExpandEnvironmentStringsA", DWORD /* DWORD */, [
	LPCSTR, /* in LPCSTR lpSrc */
	LPSTR,  /*    LPSTR  lpDst */
	DWORD,  /* in DWORD  nSize */
], f => ExpandEnvironmentStringsA = f);

export function ExpandEnvironmentStringsW () {};
ExpandEnvironmentStringsW = createAutoLoader(lib, "ExpandEnvironmentStringsW", DWORD /* DWORD */, [
	LPCWSTR, /* in LPCWSTR lpSrc */
	LPWSTR,  /*    LPWSTR  lpDst */
	DWORD,   /* in DWORD   nSize */
], f => ExpandEnvironmentStringsW = f);
export {ExpandEnvironmentStringsW as ExpandEnvironmentStrings};

export function SetCurrentDirectoryA () {};
SetCurrentDirectoryA = createAutoLoader(lib, "SetCurrentDirectoryA", BOOL /* BOOL */, [
	LPCSTR, /* in LPCSTR lpPathName */
], f => SetCurrentDirectoryA = f);

export function SetCurrentDirectoryW () {};
SetCurrentDirectoryW = createAutoLoader(lib, "SetCurrentDirectoryW", BOOL /* BOOL */, [
	LPCWSTR, /* in LPCWSTR lpPathName */
], f => SetCurrentDirectoryW = f);
export {SetCurrentDirectoryW as SetCurrentDirectory};

export function GetCurrentDirectoryA () {};
GetCurrentDirectoryA = createAutoLoader(lib, "GetCurrentDirectoryA", DWORD /* DWORD */, [
	DWORD, /* in DWORD nBufferLength */
	LPSTR, /*    LPSTR lpBuffer      */
], f => GetCurrentDirectoryA = f);

export function GetCurrentDirectoryW () {};
GetCurrentDirectoryW = createAutoLoader(lib, "GetCurrentDirectoryW", DWORD /* DWORD */, [
	DWORD,  /* in DWORD  nBufferLength */
	LPWSTR, /*    LPWSTR lpBuffer      */
], f => GetCurrentDirectoryW = f);
export {GetCurrentDirectoryW as GetCurrentDirectory};

export function SearchPathW () {};
SearchPathW = createAutoLoader(lib, "SearchPathW", DWORD /* DWORD */, [
	LPCWSTR,              /* in opt  LPCWSTR lpPath        */
	LPCWSTR,              /* in      LPCWSTR lpFileName    */
	LPCWSTR,              /* in opt  LPCWSTR lpExtension   */
	DWORD,                /* in      DWORD   nBufferLength */
	LPWSTR,               /*         LPWSTR  lpBuffer      */
	out(pointer(LPWSTR)), /* out opt LPWSTR* lpFilePart    */
], f => SearchPathW = f);
export {SearchPathW as SearchPath};

export function SearchPathA () {};
SearchPathA = createAutoLoader(lib, "SearchPathA", DWORD /* DWORD */, [
	LPCSTR,              /* in opt  LPCSTR lpPath        */
	LPCSTR,              /* in      LPCSTR lpFileName    */
	LPCSTR,              /* in opt  LPCSTR lpExtension   */
	DWORD,               /* in      DWORD  nBufferLength */
	LPSTR,               /*         LPSTR  lpBuffer      */
	out(pointer(LPSTR)), /* out opt LPSTR* lpFilePart    */
], f => SearchPathA = f);

export function NeedCurrentDirectoryForExePathA () {};
NeedCurrentDirectoryForExePathA = createAutoLoader(lib, "NeedCurrentDirectoryForExePathA", BOOL /* BOOL */, [
	LPCSTR, /* in LPCSTR ExeName */
], f => NeedCurrentDirectoryForExePathA = f);

export function NeedCurrentDirectoryForExePathW () {};
NeedCurrentDirectoryForExePathW = createAutoLoader(lib, "NeedCurrentDirectoryForExePathW", BOOL /* BOOL */, [
	LPCWSTR, /* in LPCWSTR ExeName */
], f => NeedCurrentDirectoryForExePathW = f);
export {NeedCurrentDirectoryForExePathW as NeedCurrentDirectoryForExePath};

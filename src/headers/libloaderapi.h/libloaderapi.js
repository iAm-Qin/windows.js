import koffi from "koffi";

import {pointer, out} from "../../types.js";

// basic
import {
	struct,
	int,
} from "../../types.js";

// basetsd.h
import {
	LONG_PTR,
} from "../basetsd.h/basetsd.js";

// minwindef.h
import {
	DWORD,
	WORD,
	BOOL,
	ULONG,
	LPVOID,
	HMODULE, HRSRC, HGLOBAL, FARPROC,
} from "../minwindef.h/minWindef.js";

// winnt.h
import {
	HANDLE,
} from "../winnt.h/winnt.js";
import {
	LPSTR, LPCSTR, LPWSTR, LPCWSTR,
	PCSTR, PCWSTR,
	VOID, PVOID,
	LANGID,
} from "../winnt.h/winnt.js";


const lib = koffi.load("kernel32.dll");
import {createAutoLoader} from "../../internals/loader.js";

// @formatter: off

export const FIND_RESOURCE_DIRECTORY_TYPES     = (0x0100);
export const FIND_RESOURCE_DIRECTORY_NAMES     = (0x0200);
export const FIND_RESOURCE_DIRECTORY_LANGUAGES = (0x0400);

export const RESOURCE_ENUM_LN           = (0x0001);
export const RESOURCE_ENUM_MUI          = (0x0002);
export const RESOURCE_ENUM_MUI_SYSTEM   = (0x0004);
export const RESOURCE_ENUM_VALIDATE     = (0x0008);
export const RESOURCE_ENUM_MODULE_EXACT = (0x0010);

export const SUPPORT_LANG_NUMBER = 32;

export const ENUMUILANG = struct({
	NumOfEnumUILang    : ULONG,           // ULONG   // Acutall number of enumerated languages
	SizeOfEnumUIBuffer : ULONG,           // ULONG   // Buffer size of pMUIEnumUILanguages
	pEnumUIBuffer      : pointer(LANGID), // LANGID*
});
export const PENUMUILANG = pointer(ENUMUILANG);

export const ENUMRESLANGPROCA = pointer(koffi.proto("__stdcall", "ENUMRESLANGPROCA", BOOL /* BOOL */, [
	HMODULE,  /* in opt HMODULE  hModule   */
	LPCSTR,   /* in     LPCSTR   lpType    */
	LPCSTR,   /* in     LPCSTR   lpName    */
	WORD,     /* in     WORD     wLanguage */
	LONG_PTR, /* in     LONG_PTR lParam    */
]));

export const ENUMRESLANGPROCW = pointer(koffi.proto("__stdcall", "ENUMRESLANGPROCW", BOOL /* BOOL */, [
	HMODULE,  /* in opt HMODULE  hModule   */
	LPCWSTR,  /* in     LPCWSTR  lpType    */
	LPCWSTR,  /* in     LPCWSTR  lpName    */
	WORD,     /* in     WORD     wLanguage */
	LONG_PTR, /* in     LONG_PTR lParam    */
]));
export const ENUMRESLANGPROC = ENUMRESLANGPROCW;

export const ENUMRESNAMEPROCA = pointer(koffi.proto("__stdcall", "ENUMRESNAMEPROCA", BOOL /* BOOL */, [
	HMODULE,  /* in opt HMODULE  hModule */
	LPCSTR,   /* in     LPCSTR   lpType  */
	LPSTR,    /* in     LPSTR    lpName  */
	LONG_PTR, /* in     LONG_PTR lParam  */
]));

export const ENUMRESNAMEPROCW = pointer(koffi.proto("__stdcall", "ENUMRESNAMEPROCW", BOOL /* BOOL */, [
	HMODULE,  /* in opt HMODULE  hModule */
	LPCWSTR,  /* in     LPCWSTR  lpType  */
	LPWSTR,   /* in     LPWSTR   lpName  */
	LONG_PTR, /* in     LONG_PTR lParam  */
]));
export const ENUMRESNAMEPROC = ENUMRESNAMEPROCW;

export const ENUMRESTYPEPROCA = pointer(koffi.proto("__stdcall", "ENUMRESTYPEPROCA", BOOL /* BOOL */, [
	HMODULE,  /* in opt HMODULE  hModule */
	LPSTR,    /* in     LPSTR    lpType  */
	LONG_PTR, /* in     LONG_PTR lParam  */
]));

export const ENUMRESTYPEPROCW = pointer(koffi.proto("__stdcall", "ENUMRESTYPEPROCW", BOOL /* BOOL */, [
	HMODULE,  /* in opt HMODULE  hModule */
	LPWSTR,   /* in     LPWSTR   lpType  */
	LONG_PTR, /* in     LONG_PTR lParam  */
]));
export const ENUMRESTYPEPROC = ENUMRESTYPEPROCW;

export function DisableThreadLibraryCalls () {};
DisableThreadLibraryCalls = createAutoLoader(lib, "DisableThreadLibraryCalls", BOOL /* BOOL */, [
	HMODULE, /* in HMODULE hLibModule */
], f => DisableThreadLibraryCalls = f);

export function FindResourceExW () {};
FindResourceExW = createAutoLoader(lib, "FindResourceExW", HRSRC /* HRSRC */, [
	HMODULE, /* in opt HMODULE hModule   */
	LPCWSTR, /* in     LPCWSTR lpType    */
	LPCWSTR, /* in     LPCWSTR lpName    */
	WORD,    /* in     WORD    wLanguage */
], f => FindResourceExW = f);
export {FindResourceExW as FindResourceEx};

export function FindStringOrdinal () {};
FindStringOrdinal = createAutoLoader(lib, "FindStringOrdinal", int /* int */, [
	DWORD,   /* in DWORD   dwFindStringOrdinalFlags */
	LPCWSTR, /*    LPCWSTR lpStringSource           */
	int,     /* in int     cchSource                */
	LPCWSTR, /*    LPCWSTR lpStringValue            */
	int,     /* in int     cchValue                 */
	BOOL,    /* in BOOL    bIgnoreCase              */
], f => FindStringOrdinal = f);

export function FreeLibrary () {};
FreeLibrary = createAutoLoader(lib, "FreeLibrary", BOOL /* BOOL */, [
	HMODULE, /* in HMODULE hLibModule */
], f => FreeLibrary = f);

export function FreeLibraryAndExitThread () {};
FreeLibraryAndExitThread = createAutoLoader(lib, "FreeLibraryAndExitThread", VOID /* VOID */, [
	HMODULE, /* in HMODULE hLibModule */
	DWORD,   /* in DWORD   dwExitCode */
], f => FreeLibraryAndExitThread = f);

export function FreeResource () {};
FreeResource = createAutoLoader(lib, "FreeResource", BOOL /* BOOL */, [
	HGLOBAL, /* in HGLOBAL hResData */
], f => FreeResource = f);

export function GetModuleHandleA () {};
GetModuleHandleA = createAutoLoader(lib, "GetModuleHandleA", HMODULE /* HMODULE */, [
	LPCSTR, /* in opt LPCSTR lpModuleName */
], f => GetModuleHandleA = f);

export function GetModuleHandleW () {};
GetModuleHandleW = createAutoLoader(lib, "GetModuleHandleW", HMODULE /* HMODULE */, [
	LPCWSTR, /* in opt LPCWSTR lpModuleName */
], f => GetModuleHandleW = f);
export {GetModuleHandleW as GetModuleHandle};

export const GET_MODULE_HANDLE_EX_FLAG_PIN                = (0x00000001);
export const GET_MODULE_HANDLE_EX_FLAG_UNCHANGED_REFCOUNT = (0x00000002);
export const GET_MODULE_HANDLE_EX_FLAG_FROM_ADDRESS       = (0x00000004);

export const PGET_MODULE_HANDLE_EXA = pointer(koffi.proto("__stdcall", "PGET_MODULE_HANDLE_EXA", BOOL /* BOOL */, [
	DWORD,            /* in     DWORD    dwFlags      */
	LPCSTR,           /* in opt LPCSTR   lpModuleName */
	pointer(HMODULE), /*        HMODULE* phModule     */
]));

export const PGET_MODULE_HANDLE_EXW = pointer(koffi.proto("__stdcall", "PGET_MODULE_HANDLE_EXW", BOOL /* BOOL */, [
	DWORD,            /* in     DWORD    dwFlags      */
	LPCWSTR,          /* in opt LPCWSTR  lpModuleName */
	pointer(HMODULE), /*        HMODULE* phModule     */
]));
export const PGET_MODULE_HANDLE_EX = PGET_MODULE_HANDLE_EXW;

export function GetModuleHandleExA () {};
GetModuleHandleExA = createAutoLoader(lib, "GetModuleHandleExA", BOOL /* BOOL */, [
	DWORD,                 /* in     DWORD    dwFlags      */
	LPCSTR,                /* in opt LPCSTR   lpModuleName */
	out(pointer(HMODULE)), /* out    HMODULE* phModule     */
], f => GetModuleHandleExA = f);

export function GetModuleHandleExW () {};
GetModuleHandleExW = createAutoLoader(lib, "GetModuleHandleExW", BOOL /* BOOL */, [
	DWORD,                 /* in     DWORD    dwFlags      */
	LPCWSTR,               /* in opt LPCWSTR  lpModuleName */
	out(pointer(HMODULE)), /* out    HMODULE* phModule     */
], f => GetModuleHandleExW = f);
export {GetModuleHandleExW as GetModuleHandleEx};

export function GetProcAddress () {};
GetProcAddress = createAutoLoader(lib, "GetProcAddress", FARPROC /* FARPROC */, [
	HMODULE, /* in HMODULE hModule    */
	LPCSTR,  /* in LPCSTR  lpProcName */
], f => GetProcAddress = f);

export const CURRENT_IMPORT_REDIRECTION_VERSION = 1;

export const REDIRECTION_FUNCTION_DESCRIPTOR = struct({
	DllName           : PCSTR, // PCSTR
	FunctionName      : PCSTR, // PCSTR
	RedirectionTarget : PVOID, // PVOID
});
export const PREDIRECTION_FUNCTION_DESCRIPTOR = pointer(REDIRECTION_FUNCTION_DESCRIPTOR);
export const PCREDIRECTION_FUNCTION_DESCRIPTOR = pointer(REDIRECTION_FUNCTION_DESCRIPTOR);

export const REDIRECTION_DESCRIPTOR = struct({
	Version       : ULONG,                             // ULONG
	FunctionCount : ULONG,                             // ULONG
	Redirections  : PCREDIRECTION_FUNCTION_DESCRIPTOR, // PCREDIRECTION_FUNCTION_DESCRIPTOR
});
export const PREDIRECTION_DESCRIPTOR = pointer(REDIRECTION_DESCRIPTOR);
export const PCREDIRECTION_DESCRIPTOR = pointer(REDIRECTION_DESCRIPTOR);

export function LoadLibraryExA () {};
LoadLibraryExA = createAutoLoader(lib, "LoadLibraryExA", HMODULE /* HMODULE */, [
	LPCSTR, /* in       LPCSTR lpLibFileName */
	HANDLE, /* reserved HANDLE hFile         */
	DWORD,  /* in       DWORD  dwFlags       */
], f => LoadLibraryExA = f);

export function LoadLibraryExW () {};
LoadLibraryExW = createAutoLoader(lib, "LoadLibraryExW", HMODULE /* HMODULE */, [
	LPCWSTR, /* in       LPCWSTR lpLibFileName */
	HANDLE,  /* reserved HANDLE  hFile         */
	DWORD,   /* in       DWORD   dwFlags       */
], f => LoadLibraryExW = f);
export {LoadLibraryExW as LoadLibraryEx};

export const DONT_RESOLVE_DLL_REFERENCES = 0x00000001;
export const LOAD_LIBRARY_AS_DATAFILE = 0x00000002;
export const LOAD_WITH_ALTERED_SEARCH_PATH = 0x00000008;
export const LOAD_IGNORE_CODE_AUTHZ_LEVEL = 0x00000010;
export const LOAD_LIBRARY_AS_IMAGE_RESOURCE = 0x00000020;
export const LOAD_LIBRARY_AS_DATAFILE_EXCLUSIVE = 0x00000040;
export const LOAD_LIBRARY_REQUIRE_SIGNED_TARGET = 0x00000080;
export const LOAD_LIBRARY_SEARCH_DLL_LOAD_DIR = 0x00000100;
export const LOAD_LIBRARY_SEARCH_APPLICATION_DIR = 0x00000200;
export const LOAD_LIBRARY_SEARCH_USER_DIRS = 0x00000400;
export const LOAD_LIBRARY_SEARCH_SYSTEM32 = 0x00000800;
export const LOAD_LIBRARY_SEARCH_DEFAULT_DIRS = 0x00001000;
export const LOAD_LIBRARY_SAFE_CURRENT_DIRS = 0x00002000;

export const LOAD_LIBRARY_SEARCH_SYSTEM32_NO_FORWARDER = 0x00004000;
// export const LOAD_LIBRARY_SEARCH_SYSTEM32_NO_FORWARDER = LOAD_LIBRARY_SEARCH_SYSTEM32;	// < win10

export const LOAD_LIBRARY_OS_INTEGRITY_CONTINUITY = 0x00008000;

export function LoadResource () {};
LoadResource = createAutoLoader(lib, "LoadResource", HGLOBAL /* HGLOBAL */, [
	HMODULE, /* in opt HMODULE hModule  */
	HRSRC,   /* in     HRSRC   hResInfo */
], f => LoadResource = f);

export function LockResource () {};
LockResource = createAutoLoader(lib, "LockResource", LPVOID /* LPVOID */, [
	HGLOBAL, /* in HGLOBAL hResData */
], f => LockResource = f);

export function SizeofResource () {};
SizeofResource = createAutoLoader(lib, "SizeofResource", DWORD /* DWORD */, [
	HMODULE, /* in opt HMODULE hModule  */
	HRSRC,   /* in     HRSRC   hResInfo */
], f => SizeofResource = f);

export const DLL_DIRECTORY_COOKIE = PVOID;
export const PDLL_DIRECTORY_COOKIE = pointer(PVOID);

export function AddDllDirectory () {};
AddDllDirectory = createAutoLoader(lib, "AddDllDirectory", DLL_DIRECTORY_COOKIE /* DLL_DIRECTORY_COOKIE */, [
	PCWSTR, /* in PCWSTR NewDirectory */
], f => AddDllDirectory = f);

export function RemoveDllDirectory () {};
RemoveDllDirectory = createAutoLoader(lib, "RemoveDllDirectory", BOOL /* BOOL */, [
	DLL_DIRECTORY_COOKIE, /* in DLL_DIRECTORY_COOKIE Cookie */
], f => RemoveDllDirectory = f);

export function SetDefaultDllDirectories () {};
SetDefaultDllDirectories = createAutoLoader(lib, "SetDefaultDllDirectories", BOOL /* BOOL */, [
	DWORD, /* in DWORD DirectoryFlags */
], f => SetDefaultDllDirectories = f);

export function EnumResourceLanguagesExA () {};
EnumResourceLanguagesExA = createAutoLoader(lib, "EnumResourceLanguagesExA", BOOL /* BOOL */, [
	HMODULE,          /* in opt HMODULE          hModule    */
	LPCSTR,           /* in     LPCSTR           lpType     */
	LPCSTR,           /* in     LPCSTR           lpName     */
	ENUMRESLANGPROCA, /* in     ENUMRESLANGPROCA lpEnumFunc */
	LONG_PTR,         /* in opt LONG_PTR         lParam     */
	DWORD,            /*        DWORD            dwFlags    */
	LANGID,           /*        LANGID           LangId     */
], f => EnumResourceLanguagesExA = f);

export function EnumResourceLanguagesExW () {};
EnumResourceLanguagesExW = createAutoLoader(lib, "EnumResourceLanguagesExW", BOOL /* BOOL */, [
	HMODULE,          /* in opt HMODULE          hModule    */
	LPCWSTR,          /* in     LPCWSTR          lpType     */
	LPCWSTR,          /* in     LPCWSTR          lpName     */
	ENUMRESLANGPROCW, /* in     ENUMRESLANGPROCW lpEnumFunc */
	LONG_PTR,         /* in opt LONG_PTR         lParam     */
	DWORD,            /*        DWORD            dwFlags    */
	LANGID,           /*        LANGID           LangId     */
], f => EnumResourceLanguagesExW = f);
export {EnumResourceLanguagesExW as EnumResourceLanguagesEx};

export function EnumResourceNamesExA () {};
EnumResourceNamesExA = createAutoLoader(lib, "EnumResourceNamesExA", BOOL /* BOOL */, [
	HMODULE,          /* in opt HMODULE          hModule    */
	LPCSTR,           /* in     LPCSTR           lpType     */
	ENUMRESNAMEPROCA, /* in     ENUMRESNAMEPROCA lpEnumFunc */
	LONG_PTR,         /* in     LONG_PTR         lParam     */
	DWORD,            /*        DWORD            dwFlags    */
	LANGID,           /*        LANGID           LangId     */
], f => EnumResourceNamesExA = f);

export function EnumResourceNamesExW () {};
EnumResourceNamesExW = createAutoLoader(lib, "EnumResourceNamesExW", BOOL /* BOOL */, [
	HMODULE,          /* in opt HMODULE          hModule    */
	LPCWSTR,          /* in     LPCWSTR          lpType     */
	ENUMRESNAMEPROCW, /* in     ENUMRESNAMEPROCW lpEnumFunc */
	LONG_PTR,         /* in     LONG_PTR         lParam     */
	DWORD,            /*        DWORD            dwFlags    */
	LANGID,           /*        LANGID           LangId     */
], f => EnumResourceNamesExW = f);
export {EnumResourceNamesExW as EnumResourceNamesEx};

export function EnumResourceTypesExA () {};
EnumResourceTypesExA = createAutoLoader(lib, "EnumResourceTypesExA", BOOL /* BOOL */, [
	HMODULE,          /* in opt HMODULE          hModule    */
	ENUMRESTYPEPROCA, /* in     ENUMRESTYPEPROCA lpEnumFunc */
	LONG_PTR,         /* in     LONG_PTR         lParam     */
	DWORD,            /*        DWORD            dwFlags    */
	LANGID,           /*        LANGID           LangId     */
], f => EnumResourceTypesExA = f);

export function EnumResourceTypesExW () {};
EnumResourceTypesExW = createAutoLoader(lib, "EnumResourceTypesExW", BOOL /* BOOL */, [
	HMODULE,          /* in opt HMODULE          hModule    */
	ENUMRESTYPEPROCW, /* in     ENUMRESTYPEPROCW lpEnumFunc */
	LONG_PTR,         /* in     LONG_PTR         lParam     */
	DWORD,            /*        DWORD            dwFlags    */
	LANGID,           /*        LANGID           LangId     */
], f => EnumResourceTypesExW = f);
export {EnumResourceTypesExW as EnumResourceTypesEx};

export function FindResourceW () {};
FindResourceW = createAutoLoader(lib, "FindResourceW", HRSRC /* HRSRC */, [
	HMODULE, /* in opt HMODULE hModule */
	LPCWSTR, /* in     LPCWSTR lpName  */
	LPCWSTR, /* in     LPCWSTR lpType  */
], f => FindResourceW = f);
export {FindResourceW as FindResource};

export function LoadLibraryA () {};
LoadLibraryA = createAutoLoader(lib, "LoadLibraryA", HMODULE /* HMODULE */, [
	LPCSTR, /* in LPCSTR lpLibFileName */
], f => LoadLibraryA = f);

export function LoadLibraryW () {};
LoadLibraryW = createAutoLoader(lib, "LoadLibraryW", HMODULE /* HMODULE */, [
	LPCWSTR, /* in LPCWSTR lpLibFileName */
], f => LoadLibraryW = f);
export {LoadLibraryW as LoadLibrary};

export function EnumResourceNamesW () {};
EnumResourceNamesW = createAutoLoader(lib, "EnumResourceNamesW", BOOL /* BOOL */, [
	HMODULE,          /* in opt HMODULE          hModule    */
	LPCWSTR,          /* in     LPCWSTR          lpType     */
	ENUMRESNAMEPROCW, /* in     ENUMRESNAMEPROCW lpEnumFunc */
	LONG_PTR,         /* in     LONG_PTR         lParam     */
], f => EnumResourceNamesW = f);
export {EnumResourceNamesW as EnumResourceNames};

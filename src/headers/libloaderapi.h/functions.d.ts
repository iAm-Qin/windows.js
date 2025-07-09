// basic
import {
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
	LPSTR, LPCSTR, LPWSTR, LPCWSTR,
	PCSTR, PCWSTR,
	VOID, PVOID,
	LANGID,
} from "../winnt.h/winnt.js";

import {
	DLL_DIRECTORY_COOKIE,
	ENUMRESLANGPROCA, ENUMRESLANGPROCW,
	ENUMRESNAMEPROCA, ENUMRESNAMEPROCW,
	ENUMRESTYPEPROCA, ENUMRESTYPEPROCW,
} from "./libloaderapi.js";


export function DisableThreadLibraryCalls (hLibModule: HMODULE): BOOL;
export function FindResourceExW (hModule: HMODULE, lpType: LPCWSTR, lpName: LPCWSTR, wLanguage: WORD): HRSRC;
export function FindResourceEx (hModule: HMODULE, lpType: LPCWSTR, lpName: LPCWSTR, wLanguage: WORD): HRSRC;
export function FindStringOrdinal (dwFindStringOrdinalFlags: DWORD, lpStringSource: LPCWSTR, cchSource: int, lpStringValue: LPCWSTR, cchValue: int, bIgnoreCase: BOOL): int;
export function FreeLibrary (hLibModule: HMODULE): BOOL;
export function FreeLibraryAndExitThread (hLibModule: HMODULE, dwExitCode: DWORD): VOID;
export function FreeResource (hResData: HGLOBAL): BOOL;
export function GetModuleHandleA (lpModuleName: LPCSTR): HMODULE;
export function GetModuleHandleW (lpModuleName: LPCWSTR): HMODULE;
export function GetModuleHandle (lpModuleName: LPCWSTR): HMODULE;
export function GetModuleFileNameA (hModule: HMODULE, lpFilename: LPSTR, nSize: DWORD): DWORD;
export function GetModuleFileNameW (hModule: HMODULE, lpFilename: LPWSTR, nSize: DWORD): DWORD;
export function GetModuleFileName (hModule: HMODULE, lpFilename: LPWSTR, nSize: DWORD): DWORD;
export function GetModuleHandleExA (dwFlags: DWORD, lpModuleName: LPCSTR, phModule: "HMODULE*"): BOOL;
export function GetModuleHandleExW (dwFlags: DWORD, lpModuleName: LPCWSTR, phModule: "HMODULE*"): BOOL;
export function GetModuleHandleEx (dwFlags: DWORD, lpModuleName: LPCWSTR, phModule: "HMODULE*"): BOOL;
export function GetProcAddress (hModule: HMODULE, lpProcName: LPCSTR): FARPROC;
export function LoadLibraryExA (lpLibFileName: LPCSTR, hFile: HANDLE, dwFlags: DWORD): HMODULE;
export function LoadLibraryExW (lpLibFileName: LPCWSTR, hFile: HANDLE, dwFlags: DWORD): HMODULE;
export function LoadLibraryEx (lpLibFileName: LPCWSTR, hFile: HANDLE, dwFlags: DWORD): HMODULE;
export function LoadResource (hModule: HMODULE, hResInfo: HRSRC): HGLOBAL;
export function LockResource (hResData: HGLOBAL): LPVOID;
export function SizeofResource (hModule: HMODULE, hResInfo: HRSRC): DWORD;
export function AddDllDirectory (NewDirectory: PCWSTR): DLL_DIRECTORY_COOKIE;
export function RemoveDllDirectory (Cookie: DLL_DIRECTORY_COOKIE): BOOL;
export function SetDefaultDllDirectories (DirectoryFlags: DWORD): BOOL;
export function EnumResourceLanguagesExA (hModule: HMODULE, lpType: LPCSTR, lpName: LPCSTR, lpEnumFunc: ENUMRESLANGPROCA, lParam: LONG_PTR, dwFlags: DWORD, LangId: LANGID): BOOL;
export function EnumResourceLanguagesExW (hModule: HMODULE, lpType: LPCWSTR, lpName: LPCWSTR, lpEnumFunc: ENUMRESLANGPROCW, lParam: LONG_PTR, dwFlags: DWORD, LangId: LANGID): BOOL;
export function EnumResourceLanguagesEx (hModule: HMODULE, lpType: LPCWSTR, lpName: LPCWSTR, lpEnumFunc: ENUMRESLANGPROCW, lParam: LONG_PTR, dwFlags: DWORD, LangId: LANGID): BOOL;
export function EnumResourceNamesExA (hModule: HMODULE, lpType: LPCSTR, lpEnumFunc: ENUMRESNAMEPROCA, lParam: LONG_PTR, dwFlags: DWORD, LangId: LANGID): BOOL;
export function EnumResourceNamesExW (hModule: HMODULE, lpType: LPCWSTR, lpEnumFunc: ENUMRESNAMEPROCW, lParam: LONG_PTR, dwFlags: DWORD, LangId: LANGID): BOOL;
export function EnumResourceNamesEx (hModule: HMODULE, lpType: LPCWSTR, lpEnumFunc: ENUMRESNAMEPROCW, lParam: LONG_PTR, dwFlags: DWORD, LangId: LANGID): BOOL;
export function EnumResourceTypesExA (hModule: HMODULE, lpEnumFunc: ENUMRESTYPEPROCA, lParam: LONG_PTR, dwFlags: DWORD, LangId: LANGID): BOOL;
export function EnumResourceTypesExW (hModule: HMODULE, lpEnumFunc: ENUMRESTYPEPROCW, lParam: LONG_PTR, dwFlags: DWORD, LangId: LANGID): BOOL;
export function EnumResourceTypesEx (hModule: HMODULE, lpEnumFunc: ENUMRESTYPEPROCW, lParam: LONG_PTR, dwFlags: DWORD, LangId: LANGID): BOOL;
export function FindResourceW (hModule: HMODULE, lpName: LPCWSTR, lpType: LPCWSTR): HRSRC;
export function FindResource (hModule: HMODULE, lpName: LPCWSTR, lpType: LPCWSTR): HRSRC;
export function LoadLibraryA (lpLibFileName: LPCSTR): HMODULE;
export function LoadLibraryW (lpLibFileName: LPCWSTR): HMODULE;
export function LoadLibrary (lpLibFileName: LPCWSTR): HMODULE;
export function EnumResourceNamesW (hModule: HMODULE, lpType: LPCWSTR, lpEnumFunc: ENUMRESNAMEPROCW, lParam: LONG_PTR): BOOL;
export function EnumResourceNames (hModule: HMODULE, lpType: LPCWSTR, lpEnumFunc: ENUMRESNAMEPROCW, lParam: LONG_PTR): BOOL;

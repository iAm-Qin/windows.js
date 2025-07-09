// minwindef.h
import {
	DWORD,
	LPCVOID,
} from "../minwindef.h/minWindef.js";

// winnt.h
import {
	LPSTR, LPWSTR,
} from "../winnt.h/winnt.js";


export function FormatMessageA (dwFlags: DWORD, lpSource: LPCVOID, dwMessageId: DWORD, dwLanguageId: DWORD, lpBuffer: LPSTR, nSize: DWORD, Arguments: "va_list*"): DWORD;
export function FormatMessageW (dwFlags: DWORD, lpSource: LPCVOID, dwMessageId: DWORD, dwLanguageId: DWORD, lpBuffer: LPWSTR, nSize: DWORD, Arguments: "va_list*"): DWORD;
export function FormatMessage (dwFlags: DWORD, lpSource: LPCVOID, dwMessageId: DWORD, dwLanguageId: DWORD, lpBuffer: LPWSTR, nSize: DWORD, Arguments: "va_list*"): DWORD;

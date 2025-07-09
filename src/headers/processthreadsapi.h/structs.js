import koffi from "koffi";

import {struct, pointer} from "../../types.js";

// basetsd.h
import {
	ULONG_PTR,
	ULONG64,
} from "../basetsd.h/basetsd.js";

// minwindef.h
import {
	DWORD,
	WORD,
	LPBYTE,
	USHORT,
	ULONG,
} from "../minwindef.h/minWindef.js";

// winnt.h
import {
	HANDLE,
} from "../winnt.h/winnt.js";
import {
	LPSTR, LPWSTR,
} from "../winnt.h/winnt.js";

// processthreadsapi.h
import {PROCESS_MEMORY_EXHAUSTION_TYPE} from "./enums.js";

// @formatter: off

export const PROCESS_INFORMATION = struct({
	hProcess    : HANDLE, // HANDLE
	hThread     : HANDLE, // HANDLE
	dwProcessId : DWORD,  // DWORD
	dwThreadId  : DWORD,  // DWORD
});
export const PPROCESS_INFORMATION = pointer(PROCESS_INFORMATION);
export const LPPROCESS_INFORMATION = pointer(PROCESS_INFORMATION);

export const STARTUPINFOA = struct({
	cb              : DWORD,  // DWORD
	lpReserved      : LPSTR,  // LPSTR
	lpDesktop       : LPSTR,  // LPSTR
	lpTitle         : LPSTR,  // LPSTR
	dwX             : DWORD,  // DWORD
	dwY             : DWORD,  // DWORD
	dwXSize         : DWORD,  // DWORD
	dwYSize         : DWORD,  // DWORD
	dwXCountChars   : DWORD,  // DWORD
	dwYCountChars   : DWORD,  // DWORD
	dwFillAttribute : DWORD,  // DWORD
	dwFlags         : DWORD,  // DWORD
	wShowWindow     : WORD,   // WORD
	cbReserved2     : WORD,   // WORD
	lpReserved2     : LPBYTE, // LPBYTE
	hStdInput       : HANDLE, // HANDLE
	hStdOutput      : HANDLE, // HANDLE
	hStdError       : HANDLE, // HANDLE
});
export const LPSTARTUPINFOA = pointer(STARTUPINFOA);

export const STARTUPINFOW = struct({
	cb              : DWORD,  // DWORD
	lpReserved      : LPWSTR, // LPWSTR
	lpDesktop       : LPWSTR, // LPWSTR
	lpTitle         : LPWSTR, // LPWSTR
	dwX             : DWORD,  // DWORD
	dwY             : DWORD,  // DWORD
	dwXSize         : DWORD,  // DWORD
	dwYSize         : DWORD,  // DWORD
	dwXCountChars   : DWORD,  // DWORD
	dwYCountChars   : DWORD,  // DWORD
	dwFillAttribute : DWORD,  // DWORD
	dwFlags         : DWORD,  // DWORD
	wShowWindow     : WORD,   // WORD
	cbReserved2     : WORD,   // WORD
	lpReserved2     : LPBYTE, // LPBYTE
	hStdInput       : HANDLE, // HANDLE
	hStdOutput      : HANDLE, // HANDLE
	hStdError       : HANDLE, // HANDLE
});
export const LPSTARTUPINFOW = pointer(STARTUPINFOW);
export const STARTUPINFO = STARTUPINFOW;
export const LPSTARTUPINFO = LPSTARTUPINFOW;

// typedef struct _PROC_THREAD_ATTRIBUTE_LIST *PPROC_THREAD_ATTRIBUTE_LIST, *LPPROC_THREAD_ATTRIBUTE_LIST;
// 该结构未定义字段
export const PPROC_THREAD_ATTRIBUTE_LIST = pointer(koffi.types.void);
export const LPPROC_THREAD_ATTRIBUTE_LIST = pointer(koffi.types.void);

export const MEMORY_PRIORITY_INFORMATION = struct({
	MemoryPriority : ULONG, // ULONG
});
export const PMEMORY_PRIORITY_INFORMATION = pointer(MEMORY_PRIORITY_INFORMATION);

export const THREAD_POWER_THROTTLING_STATE = struct({
	Version     : ULONG, // ULONG
	ControlMask : ULONG, // ULONG
	StateMask   : ULONG, // ULONG
});

export const APP_MEMORY_INFORMATION = struct({
	AvailableCommit        : ULONG64, // ULONG64
	PrivateCommitUsage     : ULONG64, // ULONG64
	PeakPrivateCommitUsage : ULONG64, // ULONG64
	TotalCommitUsage       : ULONG64, // ULONG64
});
export const PAPP_MEMORY_INFORMATION = pointer(APP_MEMORY_INFORMATION);

export const PROCESS_MEMORY_EXHAUSTION_INFO = struct({
	Version  : USHORT,                         // USHORT
	Reserved : USHORT,                         // USHORT
	Type     : PROCESS_MEMORY_EXHAUSTION_TYPE, // PROCESS_MEMORY_EXHAUSTION_TYPE
	Value    : ULONG_PTR,                      // ULONG_PTR
});
export const PPROCESS_MEMORY_EXHAUSTION_INFO = pointer(PROCESS_MEMORY_EXHAUSTION_INFO);

export const PROCESS_POWER_THROTTLING_STATE = struct({
	Version     : ULONG, // ULONG
	ControlMask : ULONG, // ULONG
	StateMask   : ULONG, // ULONG
});
export const PPROCESS_POWER_THROTTLING_STATE = pointer(PROCESS_POWER_THROTTLING_STATE);

export const PROCESS_PROTECTION_LEVEL_INFORMATION = struct({
	ProtectionLevel : DWORD, // DWORD
});

export const PROCESS_LEAP_SECOND_INFO = struct({
	Flags    : ULONG, // ULONG
	Reserved : ULONG, // ULONG
});
export const PPROCESS_LEAP_SECOND_INFO = pointer(PROCESS_LEAP_SECOND_INFO);


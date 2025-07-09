import koffi from "koffi";

import {array, struct, union, pointer, inout} from "../../types.js";
import {
	int,
} from "../../types.js";

// basetsd.h
import {
	ULONG_PTR,
} from "../basetsd.h/basetsd.js";

// minwindef.h
import {
	DWORD,
	WORD,
	BYTE,
	BOOL,
	ULONG,
	LPVOID,
	MAX_PATH,
	HMODULE,
} from "../minwindef.h/minWindef.js";

// winnt.h
import {
	HANDLE,
} from "../winnt.h/winnt.js";
import {
	CHAR,
	WCHAR,
	LPSTR, LPWSTR,
	VOID, PVOID,
} from "../winnt.h/winnt.js";
import {
	STATUS_ACCESS_VIOLATION,
	STATUS_PENDING,
	STATUS_DATATYPE_MISALIGNMENT,
	STATUS_BREAKPOINT,
	STATUS_SINGLE_STEP,
	STATUS_ARRAY_BOUNDS_EXCEEDED,
	STATUS_FLOAT_DENORMAL_OPERAND,
	STATUS_FLOAT_DIVIDE_BY_ZERO,
	STATUS_FLOAT_INEXACT_RESULT,
	STATUS_FLOAT_INVALID_OPERATION,
	STATUS_FLOAT_STACK_CHECK,
	STATUS_INTEGER_DIVIDE_BY_ZERO,
	STATUS_PRIVILEGED_INSTRUCTION,
	STATUS_IN_PAGE_ERROR,
	STATUS_ILLEGAL_INSTRUCTION,
	STATUS_NONCONTINUABLE_EXCEPTION,
	STATUS_INVALID_DISPOSITION,
	STATUS_GUARD_PAGE_VIOLATION,
	STATUS_INVALID_HANDLE,
	STATUS_CONTROL_C_EXIT,
} from "../winnt.h/winnt.js";
import {
	EXCEPTION_RECORD,
	PCONTEXT,
	RTL_CRITICAL_SECTION,
	PRTL_CRITICAL_SECTION,
	RTL_CRITICAL_SECTION_DEBUG,
	PRTL_CRITICAL_SECTION_DEBUG,
} from "../winnt.h/structs.js";

// todo winnt.h
// export const MoveMemory = RtlMoveMemory;
// export const CopyMemory = RtlCopyMemory;
// export const FillMemory = RtlFillMemory;
// export const ZeroMemory = RtlZeroMemory;

// @formatter: off

export const SECURITY_ATTRIBUTES = struct({
	nLength              : DWORD,  // DWORD
	lpSecurityDescriptor : LPVOID, // LPVOID
	bInheritHandle       : BOOL,   // BOOL
});
export const PSECURITY_ATTRIBUTES = pointer(SECURITY_ATTRIBUTES);
export const LPSECURITY_ATTRIBUTES = pointer(SECURITY_ATTRIBUTES);

export const OVERLAPPED = struct({
	Internal     : ULONG_PTR, // ULONG_PTR
	InternalHigh : ULONG_PTR, // ULONG_PTR
	u            : union({
		s       : struct({
			Offset     : DWORD, // DWORD
			OffsetHigh : DWORD, // DWORD
		}), // struct
		Pointer : PVOID,  // PVOID
	}), // union
	hEvent       : HANDLE,    // HANDLE
});
export const LPOVERLAPPED = pointer(OVERLAPPED);

export const OVERLAPPED_ENTRY = struct({
	lpCompletionKey            : ULONG_PTR,    // ULONG_PTR
	lpOverlapped               : LPOVERLAPPED, // LPOVERLAPPED
	Internal                   : ULONG_PTR,    // ULONG_PTR
	dwNumberOfBytesTransferred : DWORD,        // DWORD
});
export const LPOVERLAPPED_ENTRY = pointer(OVERLAPPED_ENTRY);

export const FILETIME = struct({
	dwLowDateTime  : DWORD, // DWORD
	dwHighDateTime : DWORD, // DWORD
});
export const PFILETIME = pointer(FILETIME);
export const LPFILETIME = pointer(FILETIME);

export const SYSTEMTIME = struct({
	wYear         : WORD, // WORD
	wMonth        : WORD, // WORD
	wDayOfWeek    : WORD, // WORD
	wDay          : WORD, // WORD
	wHour         : WORD, // WORD
	wMinute       : WORD, // WORD
	wSecond       : WORD, // WORD
	wMilliseconds : WORD, // WORD
});
export const PSYSTEMTIME = pointer(SYSTEMTIME);
export const LPSYSTEMTIME = pointer(SYSTEMTIME);

export const WIN32_FIND_DATAA = struct({
	dwFileAttributes   : DWORD,                           // DWORD
	ftCreationTime     : FILETIME,                        // FILETIME
	ftLastAccessTime   : FILETIME,                        // FILETIME
	ftLastWriteTime    : FILETIME,                        // FILETIME
	nFileSizeHigh      : DWORD,                           // DWORD
	nFileSizeLow       : DWORD,                           // DWORD
	dwReserved0        : DWORD,                           // DWORD
	dwReserved1        : DWORD,                           // DWORD
	cFileName          : array(CHAR, MAX_PATH, "String"), // CHAR
	cAlternateFileName : array(CHAR, 14, "String"),       // CHAR
	dwFileType         : DWORD,                           // DWORD
	dwCreatorType      : DWORD,                           // DWORD
	wFinderFlags       : WORD,                            // WORD
});
export const PWIN32_FIND_DATAA = pointer(WIN32_FIND_DATAA);
export const LPWIN32_FIND_DATAA = pointer(WIN32_FIND_DATAA);

export const WIN32_FIND_DATAW = struct({
	dwFileAttributes   : DWORD,                            // DWORD
	ftCreationTime     : FILETIME,                         // FILETIME
	ftLastAccessTime   : FILETIME,                         // FILETIME
	ftLastWriteTime    : FILETIME,                         // FILETIME
	nFileSizeHigh      : DWORD,                            // DWORD
	nFileSizeLow       : DWORD,                            // DWORD
	dwReserved0        : DWORD,                            // DWORD
	dwReserved1        : DWORD,                            // DWORD
	cFileName          : array(WCHAR, MAX_PATH, "String"), // WCHAR
	cAlternateFileName : array(WCHAR, 14, "String"),       // WCHAR
	dwFileType         : DWORD,                            // DWORD
	dwCreatorType      : DWORD,                            // DWORD
	wFinderFlags       : WORD,                             // WORD
});
export const PWIN32_FIND_DATAW = pointer(WIN32_FIND_DATAW);
export const LPWIN32_FIND_DATAW = pointer(WIN32_FIND_DATAW);
export const WIN32_FIND_DATA = WIN32_FIND_DATAW;
export const PWIN32_FIND_DATA = PWIN32_FIND_DATAW;
export const LPWIN32_FIND_DATA = LPWIN32_FIND_DATAW;

export const FINDEX_INFO_LEVELS = int;
export const FindExInfoStandard = 0;
export const FindExInfoBasic = 1;
export const FindExInfoMaxInfoLevel = 2;

export const FIND_FIRST_EX_CASE_SENSITIVE       = 0x00000001;
export const FIND_FIRST_EX_LARGE_FETCH          = 0x00000002;
export const FIND_FIRST_EX_ON_DISK_ENTRIES_ONLY = 0x00000004;

export const FINDEX_SEARCH_OPS = int;
export const FindExSearchNameMatch = 0;
export const FindExSearchLimitToDirectories = 1;
export const FindExSearchLimitToDevices = 2;
export const FindExSearchMaxSearchOp = 3;

export const READ_DIRECTORY_NOTIFY_INFORMATION_CLASS = int;
export const ReadDirectoryNotifyInformation = 1;
export const ReadDirectoryNotifyExtendedInformation = 2;

export const GET_FILEEX_INFO_LEVELS = int;
export const GetFileExInfoStandard = 0;
export const GetFileExMaxInfoLevel = 1;

export const FILE_INFO_BY_HANDLE_CLASS = int;
export const FileBasicInfo = 0;
export const FileStandardInfo = 1;
export const FileNameInfo = 2;
export const FileRenameInfo = 3;
export const FileDispositionInfo = 4;
export const FileAllocationInfo = 5;
export const FileEndOfFileInfo = 6;
export const FileStreamInfo = 7;
export const FileCompressionInfo = 8;
export const FileAttributeTagInfo = 9;
export const FileIdBothDirectoryInfo = 10;
export const FileIdBothDirectoryRestartInfo = 11;
export const FileIoPriorityHintInfo = 12;
export const FileRemoteProtocolInfo = 13;
export const FileFullDirectoryInfo = 14;
export const FileFullDirectoryRestartInfo = 15;
export const FileStorageInfo = 16;
export const FileAlignmentInfo = 17;
export const FileIdInfo = 18;
export const FileIdExtdDirectoryInfo = 19;
export const FileIdExtdDirectoryRestartInfo = 20;
export const FileDispositionInfoEx = 21;
export const FileRenameInfoEx = 22;
export const FileCaseSensitiveInfo = 23;
export const FileNormalizedNameInfo = 24;
export const MaximumFileInfoByHandleClass = 25;

export const CRITICAL_SECTION = RTL_CRITICAL_SECTION;
export const PCRITICAL_SECTION = PRTL_CRITICAL_SECTION;
export const LPCRITICAL_SECTION = PRTL_CRITICAL_SECTION;
export const CRITICAL_SECTION_DEBUG = RTL_CRITICAL_SECTION_DEBUG;
export const PCRITICAL_SECTION_DEBUG = PRTL_CRITICAL_SECTION_DEBUG;
export const LPCRITICAL_SECTION_DEBUG = PRTL_CRITICAL_SECTION_DEBUG;

export const LPOVERLAPPED_COMPLETION_ROUTINE = pointer(koffi.proto("__stdcall", "LPOVERLAPPED_COMPLETION_ROUTINE", VOID /* VOID */, [
	DWORD,               /* in     DWORD        dwErrorCode               */
	DWORD,               /* in     DWORD        dwNumberOfBytesTransfered */
	inout(LPOVERLAPPED), /* in out LPOVERLAPPED lpOverlapped              */
]));

export const LOCKFILE_FAIL_IMMEDIATELY = 0x00000001;
export const LOCKFILE_EXCLUSIVE_LOCK   = 0x00000002;

export const PROCESS_HEAP_ENTRY = struct({
	lpData       : PVOID, // PVOID
	cbData       : DWORD, // DWORD
	cbOverhead   : BYTE,  // BYTE
	iRegionIndex : BYTE,  // BYTE
	wFlags       : WORD,  // WORD
	u            : union({
		Block  : struct({
			hMem       : HANDLE,          // HANDLE
			dwReserved : array(DWORD, 3), // DWORD
		}), // struct
		Region : struct({
			dwCommittedSize   : DWORD,  // DWORD
			dwUnCommittedSize : DWORD,  // DWORD
			lpFirstBlock      : LPVOID, // LPVOID
			lpLastBlock       : LPVOID, // LPVOID
		}), // struct
	}), // union
});
export const LPPROCESS_HEAP_ENTRY = pointer(PROCESS_HEAP_ENTRY);
export const PPROCESS_HEAP_ENTRY = pointer(PROCESS_HEAP_ENTRY);

export const PROCESS_HEAP_REGION            = 0x0001;
export const PROCESS_HEAP_UNCOMMITTED_RANGE = 0x0002;
export const PROCESS_HEAP_ENTRY_BUSY        = 0x0004;
export const PROCESS_HEAP_SEG_ALLOC         = 0x0008;
export const PROCESS_HEAP_ENTRY_MOVEABLE    = 0x0010;
export const PROCESS_HEAP_ENTRY_DDESHARE    = 0x0020;

export const REASON_CONTEXT = struct({
	Version : ULONG, // ULONG
	Flags   : DWORD, // DWORD
	Reason  : union({
		Detailed           : struct({
			LocalizedReasonModule : HMODULE,         // HMODULE
			LocalizedReasonId     : ULONG,           // ULONG
			ReasonStringCount     : ULONG,           // ULONG
			ReasonStrings         : pointer(LPWSTR), // LPWSTR*
		}), // struct
		SimpleReasonString : LPWSTR, // LPWSTR
	}), // union
});
export const PREASON_CONTEXT = pointer(REASON_CONTEXT);

//
// Debug APIs
//
export const EXCEPTION_DEBUG_EVENT      = 1;
export const CREATE_THREAD_DEBUG_EVENT  = 2;
export const CREATE_PROCESS_DEBUG_EVENT = 3;
export const EXIT_THREAD_DEBUG_EVENT    = 4;
export const EXIT_PROCESS_DEBUG_EVENT   = 5;
export const LOAD_DLL_DEBUG_EVENT       = 6;
export const UNLOAD_DLL_DEBUG_EVENT     = 7;
export const OUTPUT_DEBUG_STRING_EVENT  = 8;
export const RIP_EVENT                  = 9;

export const PTHREAD_START_ROUTINE = pointer(koffi.proto("__stdcall", "PTHREAD_START_ROUTINE", DWORD /* DWORD */, [
	LPVOID, /*  LPVOID lpThreadParameter */
]));
export const LPTHREAD_START_ROUTINE = PTHREAD_START_ROUTINE;

export const PENCLAVE_ROUTINE = pointer(koffi.proto("__stdcall", "PENCLAVE_ROUTINE", LPVOID /* LPVOID */, [
	LPVOID, /*  LPVOID lpThreadParameter */
]));
export const LPENCLAVE_ROUTINE = PENCLAVE_ROUTINE;

export const EXCEPTION_DEBUG_INFO = struct({
	ExceptionRecord : EXCEPTION_RECORD, // EXCEPTION_RECORD
	dwFirstChance   : DWORD,            // DWORD
});
export const LPEXCEPTION_DEBUG_INFO = pointer(EXCEPTION_DEBUG_INFO);

export const CREATE_THREAD_DEBUG_INFO = struct({
	hThread           : HANDLE,                 // HANDLE
	lpThreadLocalBase : LPVOID,                 // LPVOID
	lpStartAddress    : LPTHREAD_START_ROUTINE, // LPTHREAD_START_ROUTINE
});
export const LPCREATE_THREAD_DEBUG_INFO = pointer(CREATE_THREAD_DEBUG_INFO);

export const CREATE_PROCESS_DEBUG_INFO = struct({
	hFile                 : HANDLE,                 // HANDLE
	hProcess              : HANDLE,                 // HANDLE
	hThread               : HANDLE,                 // HANDLE
	lpBaseOfImage         : LPVOID,                 // LPVOID
	dwDebugInfoFileOffset : DWORD,                  // DWORD
	nDebugInfoSize        : DWORD,                  // DWORD
	lpThreadLocalBase     : LPVOID,                 // LPVOID
	lpStartAddress        : LPTHREAD_START_ROUTINE, // LPTHREAD_START_ROUTINE
	lpImageName           : LPVOID,                 // LPVOID
	fUnicode              : WORD,                   // WORD
});
export const LPCREATE_PROCESS_DEBUG_INFO = pointer(CREATE_PROCESS_DEBUG_INFO);

export const EXIT_THREAD_DEBUG_INFO = struct({
	dwExitCode : DWORD, // DWORD
});
export const LPEXIT_THREAD_DEBUG_INFO = pointer(EXIT_THREAD_DEBUG_INFO);

export const EXIT_PROCESS_DEBUG_INFO = struct({
	dwExitCode : DWORD, // DWORD
});
export const LPEXIT_PROCESS_DEBUG_INFO = pointer(EXIT_PROCESS_DEBUG_INFO);

export const LOAD_DLL_DEBUG_INFO = struct({
	hFile                 : HANDLE, // HANDLE
	lpBaseOfDll           : LPVOID, // LPVOID
	dwDebugInfoFileOffset : DWORD,  // DWORD
	nDebugInfoSize        : DWORD,  // DWORD
	lpImageName           : LPVOID, // LPVOID
	fUnicode              : WORD,   // WORD
});
export const LPLOAD_DLL_DEBUG_INFO = pointer(LOAD_DLL_DEBUG_INFO);

export const UNLOAD_DLL_DEBUG_INFO = struct({
	lpBaseOfDll : LPVOID, // LPVOID
});
export const LPUNLOAD_DLL_DEBUG_INFO = pointer(UNLOAD_DLL_DEBUG_INFO);

export const OUTPUT_DEBUG_STRING_INFO = struct({
	lpDebugStringData  : LPSTR, // LPSTR
	fUnicode           : WORD,  // WORD
	nDebugStringLength : WORD,  // WORD
});
export const LPOUTPUT_DEBUG_STRING_INFO = pointer(OUTPUT_DEBUG_STRING_INFO);

export const RIP_INFO = struct({
	dwError : DWORD, // DWORD
	dwType  : DWORD, // DWORD
});
export const LPRIP_INFO = pointer(RIP_INFO);

export const DEBUG_EVENT = struct({
	dwDebugEventCode : DWORD, // DWORD
	dwProcessId      : DWORD, // DWORD
	dwThreadId       : DWORD, // DWORD
	u                : union({
		Exception         : EXCEPTION_DEBUG_INFO,      // EXCEPTION_DEBUG_INFO
		CreateThread      : CREATE_THREAD_DEBUG_INFO,  // CREATE_THREAD_DEBUG_INFO
		CreateProcessInfo : CREATE_PROCESS_DEBUG_INFO, // CREATE_PROCESS_DEBUG_INFO
		ExitThread        : EXIT_THREAD_DEBUG_INFO,    // EXIT_THREAD_DEBUG_INFO
		ExitProcess       : EXIT_PROCESS_DEBUG_INFO,   // EXIT_PROCESS_DEBUG_INFO
		LoadDll           : LOAD_DLL_DEBUG_INFO,       // LOAD_DLL_DEBUG_INFO
		UnloadDll         : UNLOAD_DLL_DEBUG_INFO,     // UNLOAD_DLL_DEBUG_INFO
		DebugString       : OUTPUT_DEBUG_STRING_INFO,  // OUTPUT_DEBUG_STRING_INFO
		RipInfo           : RIP_INFO,                  // RIP_INFO
	}), // union
});
export const LPDEBUG_EVENT = pointer(DEBUG_EVENT);


//
// Context definitions
//

export const LPCONTEXT = PCONTEXT;
//
// macros
//

/* compatibility macros */
export const STILL_ACTIVE = STATUS_PENDING;
export const EXCEPTION_ACCESS_VIOLATION = STATUS_ACCESS_VIOLATION;
export const EXCEPTION_DATATYPE_MISALIGNMENT = STATUS_DATATYPE_MISALIGNMENT;
export const EXCEPTION_BREAKPOINT = STATUS_BREAKPOINT;
export const EXCEPTION_SINGLE_STEP = STATUS_SINGLE_STEP;
export const EXCEPTION_ARRAY_BOUNDS_EXCEEDED = STATUS_ARRAY_BOUNDS_EXCEEDED;
export const EXCEPTION_FLT_DENORMAL_OPERAND = STATUS_FLOAT_DENORMAL_OPERAND;
export const EXCEPTION_FLT_DIVIDE_BY_ZERO = STATUS_FLOAT_DIVIDE_BY_ZERO;
export const EXCEPTION_FLT_INEXACT_RESULT = STATUS_FLOAT_INEXACT_RESULT;
export const EXCEPTION_FLT_INVALID_OPERATION = STATUS_FLOAT_INVALID_OPERATION;
export const EXCEPTION_FLT_STACK_CHECK = STATUS_FLOAT_STACK_CHECK;
export const EXCEPTION_INT_DIVIDE_BY_ZERO = STATUS_INTEGER_DIVIDE_BY_ZERO;
export const EXCEPTION_PRIV_INSTRUCTION = STATUS_PRIVILEGED_INSTRUCTION;
export const EXCEPTION_IN_PAGE_ERROR = STATUS_IN_PAGE_ERROR;
export const EXCEPTION_ILLEGAL_INSTRUCTION = STATUS_ILLEGAL_INSTRUCTION;
export const EXCEPTION_NONCONTINUABLE_EXCEPTION = STATUS_NONCONTINUABLE_EXCEPTION;
export const EXCEPTION_INVALID_DISPOSITION = STATUS_INVALID_DISPOSITION;
export const EXCEPTION_GUARD_PAGE = STATUS_GUARD_PAGE_VIOLATION;
export const EXCEPTION_INVALID_HANDLE = STATUS_INVALID_HANDLE;
// export const EXCEPTION_POSSIBLE_DEADLOCK = STATUS_POSSIBLE_DEADLOCK;	// STATUS_POSSIBLE_DEADLOCK 未定义(x86/x64)
export const CONTROL_C_EXIT = STATUS_CONTROL_C_EXIT;

/* Local Memory Flags */
export const LMEM_FIXED = 0x0000;
export const LMEM_MOVEABLE = 0x0002;
export const LMEM_NOCOMPACT = 0x0010;
export const LMEM_NODISCARD = 0x0020;
export const LMEM_ZEROINIT = 0x0040;
export const LMEM_MODIFY = 0x0080;
export const LMEM_DISCARDABLE = 0x0F00;
export const LMEM_VALID_FLAGS = 0x0F72;
export const LMEM_INVALID_HANDLE = 0x8000;

export const LHND = (LMEM_MOVEABLE | LMEM_ZEROINIT);
export const LPTR = (LMEM_FIXED | LMEM_ZEROINIT);

/* Flags returned by LocalFlags (in addition to LMEM_DISCARDABLE) */
export const NONZEROLHND = (LMEM_MOVEABLE);
export const NONZEROLPTR = (LMEM_FIXED);

export const LMEM_DISCARDED = 0x4000;
export const LMEM_LOCKCOUNT = 0x00FF;

//
// NUMA values
//

export const NUMA_NO_PREFERRED_NODE = (-1);


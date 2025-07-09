import koffi from "koffi";

import {
	array, struct, union, bitfield, pointer,
	char,
} from "../../types.js";

// basetsd.h
import {
	ULONG64,
	SIZE_T,
} from "../basetsd.h/basetsd.js";

// guiddef.h
import {
	GUID,
} from "../guiddef.h/guiddef.js";

// minwindef.h
import {
	DWORD,
	WORD,
	BYTE,
	BOOL,
	UCHAR,
	USHORT,
	ULONG,
	HMODULE,
} from "../minwindef.h/minWindef.js";

// winnt.h
import {
	HANDLE,
} from "../winnt.h/winnt.js";
import {
	ANYSIZE_ARRAY,
	BOOLEAN,
	HRESULT,
	LANGID,
	ULONGLONG,
	CHAR, CCHAR,
	WCHAR,
	LPCSTR, LPCWSTR,
	PVOID,
} from "../winnt.h/winnt.js";
import {FILE_ID_128, LARGE_INTEGER, ULARGE_INTEGER} from "../winnt.h/structs.js";

// WinBase.h
import {HW_PROFILE_GUIDLEN, MAX_PROFILE_LEN, OFS_MAXPATHNAME} from "./constants.js";
import {COPYFILE2_COPY_PHASE, COPYFILE2_MESSAGE_ACTION, COPYFILE2_MESSAGE_TYPE, FILE_ID_TYPE, PRIORITY_HINT} from "./enums.js";
import {OPERATION_ID, PUMS_COMPLETION_LIST, PUMS_SCHEDULER_ENTRY_POINT} from "./aliases.js";
import {LPPROC_THREAD_ATTRIBUTE_LIST, STARTUPINFOA, STARTUPINFOW} from "../processthreadsapi.h/structs.js";

// @formatter: off
export const COMMPROP = struct({
	wPacketLength       : WORD,                      // WORD
	wPacketVersion      : WORD,                      // WORD
	dwServiceMask       : DWORD,                     // DWORD
	dwReserved1         : DWORD,                     // DWORD
	dwMaxTxQueue        : DWORD,                     // DWORD
	dwMaxRxQueue        : DWORD,                     // DWORD
	dwMaxBaud           : DWORD,                     // DWORD
	dwProvSubType       : DWORD,                     // DWORD
	dwProvCapabilities  : DWORD,                     // DWORD
	dwSettableParams    : DWORD,                     // DWORD
	dwSettableBaud      : DWORD,                     // DWORD
	wSettableData       : WORD,                      // WORD
	wSettableStopParity : WORD,                      // WORD
	dwCurrentTxQueue    : DWORD,                     // DWORD
	dwCurrentRxQueue    : DWORD,                     // DWORD
	dwProvSpec1         : DWORD,                     // DWORD
	dwProvSpec2         : DWORD,                     // DWORD
	wcProvChar          : array(WCHAR, 1, "String"), // WCHAR
});
export const LPCOMMPROP = pointer(COMMPROP);

export const COMSTAT = struct({
	fCtsHold  : bitfield(DWORD, 1),  // DWORD
	fDsrHold  : bitfield(DWORD, 1),  // DWORD
	fRlsdHold : bitfield(DWORD, 1),  // DWORD
	fXoffHold : bitfield(DWORD, 1),  // DWORD
	fXoffSent : bitfield(DWORD, 1),  // DWORD
	fEof      : bitfield(DWORD, 1),  // DWORD
	fTxim     : bitfield(DWORD, 1),  // DWORD
	fReserved : bitfield(DWORD, 25), // DWORD
	cbInQue   : DWORD,               // DWORD
	cbOutQue  : DWORD,               // DWORD
});
export const LPCOMSTAT = pointer(COMSTAT);

export const DCB = struct({
	DCBlength         : DWORD,               // DWORD
	BaudRate          : DWORD,               // DWORD
	fBinary           : bitfield(DWORD, 1),  // DWORD
	fParity           : bitfield(DWORD, 1),  // DWORD
	fOutxCtsFlow      : bitfield(DWORD, 1),  // DWORD
	fOutxDsrFlow      : bitfield(DWORD, 1),  // DWORD
	fDtrControl       : bitfield(DWORD, 2),  // DWORD
	fDsrSensitivity   : bitfield(DWORD, 1),  // DWORD
	fTXContinueOnXoff : bitfield(DWORD, 1),  // DWORD
	fOutX             : bitfield(DWORD, 1),  // DWORD
	fInX              : bitfield(DWORD, 1),  // DWORD
	fErrorChar        : bitfield(DWORD, 1),  // DWORD
	fNull             : bitfield(DWORD, 1),  // DWORD
	fRtsControl       : bitfield(DWORD, 2),  // DWORD
	fAbortOnError     : bitfield(DWORD, 1),  // DWORD
	fDummy2           : bitfield(DWORD, 17), // DWORD
	wReserved         : WORD,                // WORD
	XonLim            : WORD,                // WORD
	XoffLim           : WORD,                // WORD
	ByteSize          : BYTE,                // BYTE
	Parity            : BYTE,                // BYTE
	StopBits          : BYTE,                // BYTE
	XonChar           : char,                // char
	XoffChar          : char,                // char
	ErrorChar         : char,                // char
	EofChar           : char,                // char
	EvtChar           : char,                // char
	wReserved1        : WORD,                // WORD
});
export const LPDCB = pointer(DCB);

export const COMMTIMEOUTS = struct({
	ReadIntervalTimeout         : DWORD, // DWORD
	ReadTotalTimeoutMultiplier  : DWORD, // DWORD
	ReadTotalTimeoutConstant    : DWORD, // DWORD
	WriteTotalTimeoutMultiplier : DWORD, // DWORD
	WriteTotalTimeoutConstant   : DWORD, // DWORD
});
export const LPCOMMTIMEOUTS = pointer(COMMTIMEOUTS);

export const COMMCONFIG = struct({
	dwSize            : DWORD,                     // DWORD
	wVersion          : WORD,                      // WORD
	wReserved         : WORD,                      // WORD
	dcb               : DCB,                       // DCB
	dwProviderSubType : DWORD,                     // DWORD
	dwProviderOffset  : DWORD,                     // DWORD
	dwProviderSize    : DWORD,                     // DWORD
	wcProviderData    : array(WCHAR, 1, "String"), // WCHAR
});
export const LPCOMMCONFIG = pointer(COMMCONFIG);

export const MEMORYSTATUS = struct({
	dwLength        : DWORD,  // DWORD
	dwMemoryLoad    : DWORD,  // DWORD
	dwTotalPhys     : SIZE_T, // SIZE_T
	dwAvailPhys     : SIZE_T, // SIZE_T
	dwTotalPageFile : SIZE_T, // SIZE_T
	dwAvailPageFile : SIZE_T, // SIZE_T
	dwTotalVirtual  : SIZE_T, // SIZE_T
	dwAvailVirtual  : SIZE_T, // SIZE_T
});
export const LPMEMORYSTATUS = pointer(MEMORYSTATUS);

export const JIT_DEBUG_INFO = struct({
	dwSize                  : DWORD,   // DWORD
	dwProcessorArchitecture : DWORD,   // DWORD
	dwThreadID              : DWORD,   // DWORD
	dwReserved0             : DWORD,   // DWORD
	lpExceptionAddress      : ULONG64, // ULONG64
	lpExceptionRecord       : ULONG64, // ULONG64
	lpContextRecord         : ULONG64, // ULONG64
});
export const LPJIT_DEBUG_INFO = pointer(JIT_DEBUG_INFO);
export const JIT_DEBUG_INFO32 = JIT_DEBUG_INFO;
export const LPJIT_DEBUG_INFO32 = pointer(JIT_DEBUG_INFO32);
export const JIT_DEBUG_INFO64 = JIT_DEBUG_INFO;
export const LPJIT_DEBUG_INFO64 = pointer(JIT_DEBUG_INFO64);

export const OFSTRUCT = struct({
	cBytes     : BYTE,                                   // BYTE
	fFixedDisk : BYTE,                                   // BYTE
	nErrCode   : WORD,                                   // WORD
	Reserved1  : WORD,                                   // WORD
	Reserved2  : WORD,                                   // WORD
	szPathName : array(CHAR, OFS_MAXPATHNAME, "String"), // CHAR
});
export const LPOFSTRUCT = pointer(OFSTRUCT);
export const POFSTRUCT = pointer(OFSTRUCT);

export const UMS_SCHEDULER_STARTUP_INFO = struct({
	UmsVersion     : ULONG,                      // ULONG
	CompletionList : PUMS_COMPLETION_LIST,       // PUMS_COMPLETION_LIST
	SchedulerProc  : PUMS_SCHEDULER_ENTRY_POINT, // PUMS_SCHEDULER_ENTRY_POINT
	SchedulerParam : PVOID,                      // PVOID
});
export const PUMS_SCHEDULER_STARTUP_INFO = pointer(UMS_SCHEDULER_STARTUP_INFO);

export const UMS_SYSTEM_THREAD_INFORMATION = struct({
	UmsVersion : ULONG, // ULONG
	u          : union({
		s              : struct({
			IsUmsSchedulerThread : bitfield(ULONG, 1), // ULONG
			IsUmsWorkerThread    : bitfield(ULONG, 1), // ULONG
		}), // struct
		ThreadUmsFlags : ULONG,  // ULONG
	}), // union
});
export const PUMS_SYSTEM_THREAD_INFORMATION = pointer(UMS_SYSTEM_THREAD_INFORMATION);

export const WIN32_STREAM_ID = struct({
	dwStreamId         : DWORD,                                 // DWORD
	dwStreamAttributes : DWORD,                                 // DWORD
	Size               : LARGE_INTEGER,                         // LARGE_INTEGER
	dwStreamNameSize   : DWORD,                                 // DWORD
	cStreamName        : array(WCHAR, ANYSIZE_ARRAY, "String"), // WCHAR
});
export const LPWIN32_STREAM_ID = pointer(WIN32_STREAM_ID);

export const STARTUPINFOEXA = struct({
	StartupInfo     : STARTUPINFOA,                 // STARTUPINFOA
	lpAttributeList : LPPROC_THREAD_ATTRIBUTE_LIST, // LPPROC_THREAD_ATTRIBUTE_LIST
});
export const LPSTARTUPINFOEXA = pointer(STARTUPINFOEXA);

export const STARTUPINFOEXW = struct({
	StartupInfo     : STARTUPINFOW,                 // STARTUPINFOW
	lpAttributeList : LPPROC_THREAD_ATTRIBUTE_LIST, // LPPROC_THREAD_ATTRIBUTE_LIST
});
export const LPSTARTUPINFOEXW = pointer(STARTUPINFOEXW);
export const STARTUPINFOEX = STARTUPINFOEXW;
export const LPSTARTUPINFOEX = LPSTARTUPINFOEXW;

export const COPYFILE2_MESSAGE = struct({
	Type      : COPYFILE2_MESSAGE_TYPE, // COPYFILE2_MESSAGE_TYPE
	dwPadding : DWORD,                  // DWORD
	Info      : union({
		ChunkStarted   : struct({
			dwStreamNumber   : DWORD,          // DWORD          // monotonically increasing stream number
			dwReserved       : DWORD,          // DWORD
			hSourceFile      : HANDLE,         // HANDLE         // handle to the source stream
			hDestinationFile : HANDLE,         // HANDLE         // handle to the destination stream
			uliChunkNumber   : ULARGE_INTEGER, // ULARGE_INTEGER // monotonically increasing chunk number
			uliChunkSize     : ULARGE_INTEGER, // ULARGE_INTEGER // size of the copied chunk
			uliStreamSize    : ULARGE_INTEGER, // ULARGE_INTEGER // size of the current stream
			uliTotalFileSize : ULARGE_INTEGER, // ULARGE_INTEGER // size of all streams for this file
		}), // struct
		ChunkFinished  : struct({
			dwStreamNumber            : DWORD,          // DWORD          // monotonically increasing stream number
			dwFlags                   : DWORD,          // DWORD
			hSourceFile               : HANDLE,         // HANDLE         // handle to the source stream
			hDestinationFile          : HANDLE,         // HANDLE         // handle to the destination stream
			uliChunkNumber            : ULARGE_INTEGER, // ULARGE_INTEGER // monotonically increasing chunk number
			uliChunkSize              : ULARGE_INTEGER, // ULARGE_INTEGER // size of the copied chunk
			uliStreamSize             : ULARGE_INTEGER, // ULARGE_INTEGER // size of the current stream
			uliStreamBytesTransferred : ULARGE_INTEGER, // ULARGE_INTEGER // bytes copied for this stream so far
			uliTotalFileSize          : ULARGE_INTEGER, // ULARGE_INTEGER // size of all streams for this file
			uliTotalBytesTransferred  : ULARGE_INTEGER, // ULARGE_INTEGER // total bytes copied so far
		}), // struct
		StreamStarted  : struct({
			dwStreamNumber   : DWORD,          // DWORD
			dwReserved       : DWORD,          // DWORD
			hSourceFile      : HANDLE,         // HANDLE         // handle to the source stream
			hDestinationFile : HANDLE,         // HANDLE         // handle to the destination stream
			uliStreamSize    : ULARGE_INTEGER, // ULARGE_INTEGER // size of this stream
			uliTotalFileSize : ULARGE_INTEGER, // ULARGE_INTEGER // total size of all streams for this file
		}), // struct
		StreamFinished : struct({
			dwStreamNumber            : DWORD,          // DWORD
			dwReserved                : DWORD,          // DWORD
			hSourceFile               : HANDLE,         // HANDLE         // handle to the source stream
			hDestinationFile          : HANDLE,         // HANDLE         // handle to the destination stream
			uliStreamSize             : ULARGE_INTEGER, // ULARGE_INTEGER
			uliStreamBytesTransferred : ULARGE_INTEGER, // ULARGE_INTEGER
			uliTotalFileSize          : ULARGE_INTEGER, // ULARGE_INTEGER
			uliTotalBytesTransferred  : ULARGE_INTEGER, // ULARGE_INTEGER
		}), // struct
		PollContinue   : struct({
			dwReserved : DWORD, // DWORD
		}), // struct
		Error          : struct({
			CopyPhase                 : COPYFILE2_COPY_PHASE, // COPYFILE2_COPY_PHASE
			dwStreamNumber            : DWORD,                // DWORD
			hrFailure                 : HRESULT,              // HRESULT
			dwReserved                : DWORD,                // DWORD
			uliChunkNumber            : ULARGE_INTEGER,       // ULARGE_INTEGER
			uliStreamSize             : ULARGE_INTEGER,       // ULARGE_INTEGER
			uliStreamBytesTransferred : ULARGE_INTEGER,       // ULARGE_INTEGER
			uliTotalFileSize          : ULARGE_INTEGER,       // ULARGE_INTEGER
			uliTotalBytesTransferred  : ULARGE_INTEGER,       // ULARGE_INTEGER
		}), // struct
	}), // union
});

export const PCOPYFILE2_PROGRESS_ROUTINE = pointer(koffi.proto("__stdcall", "PCOPYFILE2_PROGRESS_ROUTINE", COPYFILE2_MESSAGE_ACTION /* COPYFILE2_MESSAGE_ACTION */, [
	pointer(COPYFILE2_MESSAGE), /* in     const COPYFILE2_MESSAGE * pMessage          */
	PVOID,                      /* in opt PVOID                     pvCallbackContext */
]));

export const COPYFILE2_EXTENDED_PARAMETERS = struct({
	dwSize            : DWORD,                       // DWORD
	dwCopyFlags       : DWORD,                       // DWORD
	pfCancel          : pointer(BOOL),               // BOOL*
	pProgressRoutine  : PCOPYFILE2_PROGRESS_ROUTINE, // PCOPYFILE2_PROGRESS_ROUTINE
	pvCallbackContext : PVOID,                       // PVOID
});

export const EVENTLOG_FULL_INFORMATION = struct({
	dwFull : DWORD, // DWORD
});
export const LPEVENTLOG_FULL_INFORMATION = pointer(EVENTLOG_FULL_INFORMATION);

export const OPERATION_START_PARAMETERS = struct({
	Version     : ULONG,        // ULONG
	OperationId : OPERATION_ID, // OPERATION_ID
	Flags       : ULONG,        // ULONG
});
export const POPERATION_START_PARAMETERS = pointer(OPERATION_START_PARAMETERS);

export const OPERATION_END_PARAMETERS = struct({
	Version     : ULONG,        // ULONG
	OperationId : OPERATION_ID, // OPERATION_ID
	Flags       : ULONG,        // ULONG
});
export const POPERATION_END_PARAMETERS = pointer(OPERATION_END_PARAMETERS);

export const HW_PROFILE_INFOA = struct({
	dwDockInfo      : DWORD,                                     // DWORD
	szHwProfileGuid : array(CHAR, HW_PROFILE_GUIDLEN, "String"), // CHAR
	szHwProfileName : array(CHAR, MAX_PROFILE_LEN, "String"),    // CHAR
});
export const LPHW_PROFILE_INFOA = pointer(HW_PROFILE_INFOA);

export const HW_PROFILE_INFOW = struct({
	dwDockInfo      : DWORD,                                      // DWORD
	szHwProfileGuid : array(WCHAR, HW_PROFILE_GUIDLEN, "String"), // WCHAR
	szHwProfileName : array(WCHAR, MAX_PROFILE_LEN, "String"),    // WCHAR
});
export const LPHW_PROFILE_INFOW = pointer(HW_PROFILE_INFOW);
export const HW_PROFILE_INFO = HW_PROFILE_INFOW;
export const LPHW_PROFILE_INFO = LPHW_PROFILE_INFOW;

export const SYSTEM_POWER_STATUS = struct({
	ACLineStatus        : BYTE,  // BYTE
	BatteryFlag         : BYTE,  // BYTE
	BatteryLifePercent  : BYTE,  // BYTE
	SystemStatusFlag    : BYTE,  // BYTE
	BatteryLifeTime     : DWORD, // DWORD
	BatteryFullLifeTime : DWORD, // DWORD
});
export const LPSYSTEM_POWER_STATUS = pointer(SYSTEM_POWER_STATUS);

export const ACTCTXA = struct({
	cbSize                 : ULONG,   // ULONG
	dwFlags                : DWORD,   // DWORD
	lpSource               : LPCSTR,  // LPCSTR
	wProcessorArchitecture : USHORT,  // USHORT
	wLangId                : LANGID,  // LANGID
	lpAssemblyDirectory    : LPCSTR,  // LPCSTR
	lpResourceName         : LPCSTR,  // LPCSTR
	lpApplicationName      : LPCSTR,  // LPCSTR
	hModule                : HMODULE, // HMODULE
});
export const PACTCTXA = pointer(ACTCTXA);
export const PCACTCTXA = pointer(ACTCTXA);

export const ACTCTXW = struct({
	cbSize                 : ULONG,   // ULONG
	dwFlags                : DWORD,   // DWORD
	lpSource               : LPCWSTR, // LPCWSTR
	wProcessorArchitecture : USHORT,  // USHORT
	wLangId                : LANGID,  // LANGID
	lpAssemblyDirectory    : LPCWSTR, // LPCWSTR
	lpResourceName         : LPCWSTR, // LPCWSTR
	lpApplicationName      : LPCWSTR, // LPCWSTR
	hModule                : HMODULE, // HMODULE
});
export const PACTCTXW = pointer(ACTCTXW);
export const PCACTCTXW = pointer(ACTCTXW);
export const ACTCTX = ACTCTXW;
export const PACTCTX = PACTCTXW;
export const PCACTCTX = PACTCTXW;

export const ACTCTX_SECTION_KEYED_DATA_2600 = struct({
	cbSize                    : ULONG,  // ULONG
	ulDataFormatVersion       : ULONG,  // ULONG
	lpData                    : PVOID,  // PVOID
	ulLength                  : ULONG,  // ULONG
	lpSectionGlobalData       : PVOID,  // PVOID
	ulSectionGlobalDataLength : ULONG,  // ULONG
	lpSectionBase             : PVOID,  // PVOID
	ulSectionTotalLength      : ULONG,  // ULONG
	hActCtx                   : HANDLE, // HANDLE
	ulAssemblyRosterIndex     : ULONG,  // ULONG
});
export const PACTCTX_SECTION_KEYED_DATA_2600 = pointer(ACTCTX_SECTION_KEYED_DATA_2600);

export const ACTCTX_SECTION_KEYED_DATA_ASSEMBLY_METADATA = struct({
	lpInformation             : PVOID, // PVOID
	lpSectionBase             : PVOID, // PVOID
	ulSectionLength           : ULONG, // ULONG
	lpSectionGlobalDataBase   : PVOID, // PVOID
	ulSectionGlobalDataLength : ULONG, // ULONG
});
export const PACTCTX_SECTION_KEYED_DATA_ASSEMBLY_METADATA = pointer(ACTCTX_SECTION_KEYED_DATA_ASSEMBLY_METADATA);

export const ACTCTX_SECTION_KEYED_DATA = struct({
	cbSize                    : ULONG,                                       // ULONG
	ulDataFormatVersion       : ULONG,                                       // ULONG
	lpData                    : PVOID,                                       // PVOID
	ulLength                  : ULONG,                                       // ULONG
	lpSectionGlobalData       : PVOID,                                       // PVOID
	ulSectionGlobalDataLength : ULONG,                                       // ULONG
	lpSectionBase             : PVOID,                                       // PVOID
	ulSectionTotalLength      : ULONG,                                       // ULONG
	hActCtx                   : HANDLE,                                      // HANDLE
	ulAssemblyRosterIndex     : ULONG,                                       // ULONG
	ulFlags                   : ULONG,                                       // ULONG
	AssemblyMetadata          : ACTCTX_SECTION_KEYED_DATA_ASSEMBLY_METADATA, // ACTCTX_SECTION_KEYED_DATA_ASSEMBLY_METADATA
});
export const PACTCTX_SECTION_KEYED_DATA = pointer(ACTCTX_SECTION_KEYED_DATA);

export const ACTIVATION_CONTEXT_BASIC_INFORMATION = struct({
	hActCtx : HANDLE, // HANDLE
	dwFlags : DWORD,  // DWORD
});
export const PACTIVATION_CONTEXT_BASIC_INFORMATION = pointer(ACTIVATION_CONTEXT_BASIC_INFORMATION);

export const FILE_BASIC_INFO = struct({
	CreationTime   : LARGE_INTEGER, // LARGE_INTEGER
	LastAccessTime : LARGE_INTEGER, // LARGE_INTEGER
	LastWriteTime  : LARGE_INTEGER, // LARGE_INTEGER
	ChangeTime     : LARGE_INTEGER, // LARGE_INTEGER
	FileAttributes : DWORD,         // DWORD
});
export const PFILE_BASIC_INFO = pointer(FILE_BASIC_INFO);

export const FILE_STANDARD_INFO = struct({
	AllocationSize : LARGE_INTEGER, // LARGE_INTEGER
	EndOfFile      : LARGE_INTEGER, // LARGE_INTEGER
	NumberOfLinks  : DWORD,         // DWORD
	DeletePending  : BOOLEAN,       // BOOLEAN
	Directory      : BOOLEAN,       // BOOLEAN
});
export const PFILE_STANDARD_INFO = pointer(FILE_STANDARD_INFO);

export const FILE_NAME_INFO = struct({
	FileNameLength : DWORD,                     // DWORD
	FileName       : array(WCHAR, 1, "String"), // WCHAR
});
export const PFILE_NAME_INFO = pointer(FILE_NAME_INFO);

export const FILE_CASE_SENSITIVE_INFO = struct({
	Flags : ULONG, // ULONG
});
export const PFILE_CASE_SENSITIVE_INFO = pointer(FILE_CASE_SENSITIVE_INFO);

export const FILE_RENAME_INFO = struct({
	u               : union({
		ReplaceIfExists : BOOLEAN, // BOOLEAN
		Flags           : DWORD,   // DWORD
	}),
	ReplaceIfExists : BOOLEAN,                   // BOOLEAN
	RootDirectory   : HANDLE,                    // HANDLE
	FileNameLength  : DWORD,                     // DWORD
	FileName        : array(WCHAR, 1, "String"), // WCHAR
});
export const PFILE_RENAME_INFO = pointer(FILE_RENAME_INFO);

export const FILE_ALLOCATION_INFO = struct({
	AllocationSize : LARGE_INTEGER, // LARGE_INTEGER
});
export const PFILE_ALLOCATION_INFO = pointer(FILE_ALLOCATION_INFO);

export const FILE_END_OF_FILE_INFO = struct({
	EndOfFile : LARGE_INTEGER, // LARGE_INTEGER
});
export const PFILE_END_OF_FILE_INFO = pointer(FILE_END_OF_FILE_INFO);

export const FILE_STREAM_INFO = struct({
	NextEntryOffset      : DWORD,                     // DWORD
	StreamNameLength     : DWORD,                     // DWORD
	StreamSize           : LARGE_INTEGER,             // LARGE_INTEGER
	StreamAllocationSize : LARGE_INTEGER,             // LARGE_INTEGER
	StreamName           : array(WCHAR, 1, "String"), // WCHAR
});
export const PFILE_STREAM_INFO = pointer(FILE_STREAM_INFO);

export const FILE_COMPRESSION_INFO = struct({
	CompressedFileSize   : LARGE_INTEGER,   // LARGE_INTEGER
	CompressionFormat    : WORD,            // WORD
	CompressionUnitShift : UCHAR,           // UCHAR
	ChunkShift           : UCHAR,           // UCHAR
	ClusterShift         : UCHAR,           // UCHAR
	Reserved             : array(UCHAR, 3), // UCHAR
});
export const PFILE_COMPRESSION_INFO = pointer(FILE_COMPRESSION_INFO);

export const FILE_ATTRIBUTE_TAG_INFO = struct({
	FileAttributes : DWORD, // DWORD
	ReparseTag     : DWORD, // DWORD
});
export const PFILE_ATTRIBUTE_TAG_INFO = pointer(FILE_ATTRIBUTE_TAG_INFO);

export const FILE_DISPOSITION_INFO = struct({
	DeleteFile : BOOLEAN, // BOOLEAN
});
export const PFILE_DISPOSITION_INFO = pointer(FILE_DISPOSITION_INFO);

export const FILE_DISPOSITION_INFO_EX = struct({
	Flags : DWORD, // DWORD
});
export const PFILE_DISPOSITION_INFO_EX = pointer(FILE_DISPOSITION_INFO_EX);

export const FILE_ID_BOTH_DIR_INFO = struct({
	NextEntryOffset : DWORD,                      // DWORD
	FileIndex       : DWORD,                      // DWORD
	CreationTime    : LARGE_INTEGER,              // LARGE_INTEGER
	LastAccessTime  : LARGE_INTEGER,              // LARGE_INTEGER
	LastWriteTime   : LARGE_INTEGER,              // LARGE_INTEGER
	ChangeTime      : LARGE_INTEGER,              // LARGE_INTEGER
	EndOfFile       : LARGE_INTEGER,              // LARGE_INTEGER
	AllocationSize  : LARGE_INTEGER,              // LARGE_INTEGER
	FileAttributes  : DWORD,                      // DWORD
	FileNameLength  : DWORD,                      // DWORD
	EaSize          : DWORD,                      // DWORD
	ShortNameLength : CCHAR,                      // CCHAR
	ShortName       : array(WCHAR, 12, "String"), // WCHAR
	FileId          : LARGE_INTEGER,              // LARGE_INTEGER
	FileName        : array(WCHAR, 1, "String"),  // WCHAR
});
export const PFILE_ID_BOTH_DIR_INFO = pointer(FILE_ID_BOTH_DIR_INFO);

export const FILE_FULL_DIR_INFO = struct({
	NextEntryOffset : ULONG,                     // ULONG
	FileIndex       : ULONG,                     // ULONG
	CreationTime    : LARGE_INTEGER,             // LARGE_INTEGER
	LastAccessTime  : LARGE_INTEGER,             // LARGE_INTEGER
	LastWriteTime   : LARGE_INTEGER,             // LARGE_INTEGER
	ChangeTime      : LARGE_INTEGER,             // LARGE_INTEGER
	EndOfFile       : LARGE_INTEGER,             // LARGE_INTEGER
	AllocationSize  : LARGE_INTEGER,             // LARGE_INTEGER
	FileAttributes  : ULONG,                     // ULONG
	FileNameLength  : ULONG,                     // ULONG
	EaSize          : ULONG,                     // ULONG
	FileName        : array(WCHAR, 1, "String"), // WCHAR
});
export const PFILE_FULL_DIR_INFO = pointer(FILE_FULL_DIR_INFO);

export const FILE_IO_PRIORITY_HINT_INFO = struct({
	PriorityHint : PRIORITY_HINT, // PRIORITY_HINT
});
export const PFILE_IO_PRIORITY_HINT_INFO = pointer(FILE_IO_PRIORITY_HINT_INFO);

export const FILE_ALIGNMENT_INFO = struct({
	AlignmentRequirement : ULONG, // ULONG
});
export const PFILE_ALIGNMENT_INFO = pointer(FILE_ALIGNMENT_INFO);

export const FILE_STORAGE_INFO = struct({
	LogicalBytesPerSector                                 : ULONG, // ULONG
	PhysicalBytesPerSectorForAtomicity                    : ULONG, // ULONG
	PhysicalBytesPerSectorForPerformance                  : ULONG, // ULONG
	FileSystemEffectivePhysicalBytesPerSectorForAtomicity : ULONG, // ULONG
	Flags                                                 : ULONG, // ULONG
	ByteOffsetForSectorAlignment                          : ULONG, // ULONG
	ByteOffsetForPartitionAlignment                       : ULONG, // ULONG
});
export const PFILE_STORAGE_INFO = pointer(FILE_STORAGE_INFO);

export const FILE_ID_INFO = struct({
	VolumeSerialNumber : ULONGLONG,   // ULONGLONG
	FileId             : FILE_ID_128, // FILE_ID_128
});
export const PFILE_ID_INFO = pointer(FILE_ID_INFO);

export const FILE_ID_EXTD_DIR_INFO = struct({
	NextEntryOffset : ULONG,                     // ULONG
	FileIndex       : ULONG,                     // ULONG
	CreationTime    : LARGE_INTEGER,             // LARGE_INTEGER
	LastAccessTime  : LARGE_INTEGER,             // LARGE_INTEGER
	LastWriteTime   : LARGE_INTEGER,             // LARGE_INTEGER
	ChangeTime      : LARGE_INTEGER,             // LARGE_INTEGER
	EndOfFile       : LARGE_INTEGER,             // LARGE_INTEGER
	AllocationSize  : LARGE_INTEGER,             // LARGE_INTEGER
	FileAttributes  : ULONG,                     // ULONG
	FileNameLength  : ULONG,                     // ULONG
	EaSize          : ULONG,                     // ULONG
	ReparsePointTag : ULONG,                     // ULONG
	FileId          : FILE_ID_128,               // FILE_ID_128
	FileName        : array(WCHAR, 1, "String"), // WCHAR
});
export const PFILE_ID_EXTD_DIR_INFO = pointer(FILE_ID_EXTD_DIR_INFO);

export const FILE_REMOTE_PROTOCOL_INFO = struct({
	StructureVersion     : USHORT,      // USHORT   // 1 for Win7, 2 for Win8 SMB3, 3 for Blue SMB3.
	StructureSize        : USHORT,      // USHORT   // sizeof(FILE_REMOTE_PROTOCOL_INFO)
	Protocol             : ULONG,       // ULONG    // Protocol (WNNC_NET_*) defined in winnetwk.h or ntifs.h.
	ProtocolMajorVersion : USHORT,      // USHORT
	ProtocolMinorVersion : USHORT,      // USHORT
	ProtocolRevision     : USHORT,      // USHORT
	Reserved             : USHORT,      // USHORT
	Flags                : ULONG,       // ULONG
	GenericReserved      : struct({
		Reserved : array(ULONG, 8), // ULONG
	}),

	// #if (_WIN32_WINNT < _WIN32_WINNT_WIN8)
	// ProtocolSpecificReserved : struct({
	// 	Reserved : array(ULONG, 8), // ULONG
	// }),
	// #endif
	//
	// #if (_WIN32_WINNT >= _WIN32_WINNT_WIN8)
	ProtocolSpecific     : union({
		Smb2     : struct({
			Server : struct({
				Capabilities : ULONG, // ULONG
			}), // struct
			Share  : struct({
				Capabilities : ULONG, // ULONG
				CachingFlags : ULONG, // ULONG
			}), // struct
		}), // struct
		Reserved : array(ULONG, 16), // ULONG
	}), // union
	// #endif
});

export const FILE_ID_DESCRIPTOR = struct({
	dwSize : DWORD,        // DWORD        // Size of the struct
	Type   : FILE_ID_TYPE, // FILE_ID_TYPE // Describes the type of identifier passed in.
	u      : union({
		FileId         : LARGE_INTEGER, // LARGE_INTEGER
		ObjectId       : GUID,          // GUID
		ExtendedFileId : FILE_ID_128,   // FILE_ID_128
	}), // union
});
export const LPFILE_ID_DESCRIPTOR = pointer(FILE_ID_DESCRIPTOR);

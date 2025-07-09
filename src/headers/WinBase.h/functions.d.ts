// basic
import {
	char, int, long,
} from "../../types.js";

// basetsd.h
import {
	DWORD64, PDWORD64,
	UINT_PTR,
	LONG_PTR,
	ULONG_PTR,
	ULONG64,
	DWORD_PTR, PDWORD_PTR,
	SIZE_T, PSIZE_T,
} from "../basetsd.h/basetsd.js";

// guiddef.h
import {
	GUID,
} from "../guiddef.h/guiddef.js";

// minwindef.h
import {
	DWORD, PDWORD, LPDWORD,
	WORD, LPWORD,
	LPBYTE,
	BOOL, PBOOL, LPBOOL,
	ATOM, USHORT, PUSHORT,
	INT, LPINT,
	UINT,
	ULONG, PULONG,
	UCHAR, PUCHAR,
	LPVOID, LPCVOID,
	HGLOBAL, HLOCAL, HFILE, FARPROC,
	HRSRC,
	HMODULE,
} from "../minwindef.h/minWindef.js";

// windef.h
import {HWND} from "../windef.h/windef.js";

// winnt.h
import {
	HANDLE, PHANDLE,
} from "../winnt.h/winnt.js";
import {
	LPCCH, LPCH,
	PULONGLONG,
	LONG,
	LPSTR, LPCSTR, LPWSTR, LPCWSTR, PCWSTR,
	VOID, PVOID,
	BOOLEAN, DWORDLONG, HRESULT, PSID,
	EXECUTION_STATE, PWSTR, PSECURITY_DESCRIPTOR, SECURITY_INFORMATION, PWCHAR, PBOOLEAN,
} from "../winnt.h/winnt.js";
import {LATENCY_TIME, PFIRMWARE_TYPE, POWER_REQUEST_TYPE, PSID_NAME_USE} from "../winnt.h/enums.js";
import {
	PCONTEXT,
	PLUID,
	PPROCESSOR_NUMBER,
	LPOSVERSIONINFOEXA,
	LPOSVERSIONINFOEXW,
	PCUSTOM_SYSTEM_EVENT_TRIGGER_CONFIG,
	PWOW64_LDT_ENTRY,
	PIO_COUNTERS, PGENERIC_MAPPING, PPRIVILEGE_SET, PACL, PJOB_SET_ARRAY, PPERFORMANCE_DATA,
} from "../winnt.h/structs.js";
import {PSECURE_MEMORY_CACHE_CALLBACK, WAITORTIMERCALLBACK} from "../winnt.h/callbacks.js";

// libloaderapi.h
import {
	ENUMRESNAMEPROCA, ENUMRESNAMEPROCW,
	ENUMRESTYPEPROCA, ENUMRESTYPEPROCW,
	ENUMRESLANGPROCA, ENUMRESLANGPROCW,
} from "../libloaderapi.h/libloaderapi.js";

// minWinBase.h
import {
	FILE_INFO_BY_HANDLE_CLASS, READ_DIRECTORY_NOTIFY_INFORMATION_CLASS,
	LPOVERLAPPED, FILETIME, LPFILETIME, LPSECURITY_ATTRIBUTES, LPOVERLAPPED_COMPLETION_ROUTINE, PREASON_CONTEXT,
} from "../minwinbase.h/minWinBase.js";

// processthreadsapi.h
import {LPPROCESS_INFORMATION, LPSTARTUPINFOA, LPSTARTUPINFOW} from "../processthreadsapi.h/structs.js";

// WinBase.h
import {LPLDT_ENTRY, PUMS_COMPLETION_LIST, PUMS_CONTEXT} from "./aliases.js";
import {DEP_SYSTEM_POLICY_TYPE, UMS_THREAD_INFO_CLASS} from "./enums.js";
import {
	COPYFILE2_EXTENDED_PARAMETERS,
	LPCOMMCONFIG,
	LPCOMMPROP,
	LPCOMMTIMEOUTS,
	LPCOMSTAT,
	LPDCB,
	LPOFSTRUCT,
	LPSYSTEM_POWER_STATUS,
	PACTCTX_SECTION_KEYED_DATA,
	PUMS_SCHEDULER_STARTUP_INFO,
	LPMEMORYSTATUS,
	PCACTCTXA, PCACTCTXW,
	PUMS_SYSTEM_THREAD_INFORMATION,
	LPFILE_ID_DESCRIPTOR,
	LPHW_PROFILE_INFOA, LPHW_PROFILE_INFOW,
	OPERATION_END_PARAMETERS,
	OPERATION_START_PARAMETERS,
} from "./structs.js";
import {APPLICATION_RECOVERY_CALLBACK, LPFIBER_START_ROUTINE, LPPROGRESS_ROUTINE, PFE_EXPORT_FUNC, PFE_IMPORT_FUNC} from "./callbacks.js";


export function GetFreeSpace (param0: UINT): DWORD;
export function GlobalAlloc (uFlags: UINT, dwBytes: SIZE_T): HGLOBAL;
export function GlobalReAlloc (hMem: HGLOBAL, dwBytes: SIZE_T, uFlags: UINT): HGLOBAL;
export function GlobalSize (hMem: HGLOBAL): SIZE_T;
export function GlobalUnlock (hMem: HGLOBAL): BOOL;
export function GlobalLock (hMem: HGLOBAL): LPVOID;
export function GlobalFlags (hMem: HGLOBAL): UINT;
export function GlobalHandle (pMem: LPCVOID): HGLOBAL;
export function GlobalFree (hMem: HGLOBAL): HGLOBAL;
export function GlobalCompact (dwMinFree: DWORD): SIZE_T;
export function GlobalFix (hMem: HGLOBAL): VOID;
export function GlobalUnfix (hMem: HGLOBAL): VOID;
export function GlobalWire (hMem: HGLOBAL): LPVOID;
export function GlobalUnWire (hMem: HGLOBAL): BOOL;
export function GlobalMemoryStatus (lpBuffer: LPMEMORYSTATUS): VOID;
export function LocalAlloc (uFlags: UINT, uBytes: SIZE_T): HLOCAL;
export function LocalReAlloc (hMem: HLOCAL, uBytes: SIZE_T, uFlags: UINT): HLOCAL;
export function LocalLock (hMem: HLOCAL): LPVOID;
export function LocalHandle (pMem: LPCVOID): HLOCAL;
export function LocalUnlock (hMem: HLOCAL): BOOL;
export function LocalSize (hMem: HLOCAL): SIZE_T;
export function LocalFlags (hMem: HLOCAL): UINT;
export function LocalFree (hMem: HLOCAL): HLOCAL;
export function LocalShrink (hMem: HLOCAL, cbNewSize: UINT): SIZE_T;
export function LocalCompact (uMinFree: UINT): SIZE_T;
export function GetBinaryTypeA (lpApplicationName: LPCSTR, lpBinaryType: LPDWORD): BOOL;
export function GetBinaryTypeW (lpApplicationName: LPCWSTR, lpBinaryType: LPDWORD): BOOL;
export function GetBinaryType (lpApplicationName: LPCWSTR, lpBinaryType: LPDWORD): BOOL;
export function GetShortPathNameA (lpszLongPath: LPCSTR, lpszShortPath: LPSTR, cchBuffer: DWORD): DWORD;
export function GetLongPathNameTransactedA (lpszShortPath: LPCSTR, lpszLongPath: LPSTR, cchBuffer: DWORD, hTransaction: HANDLE): DWORD;
export function GetLongPathNameTransactedW (lpszShortPath: LPCWSTR, lpszLongPath: LPWSTR, cchBuffer: DWORD, hTransaction: HANDLE): DWORD;
export function GetLongPathNameTransacted (lpszShortPath: LPCWSTR, lpszLongPath: LPWSTR, cchBuffer: DWORD, hTransaction: HANDLE): DWORD;
export function GetProcessAffinityMask (hProcess: HANDLE, lpProcessAffinityMask: PDWORD_PTR, lpSystemAffinityMask: PDWORD_PTR): BOOL;
export function SetProcessAffinityMask (hProcess: HANDLE, dwProcessAffinityMask: DWORD_PTR): BOOL;
export function GetProcessIoCounters (hProcess: HANDLE, lpIoCounters: PIO_COUNTERS): BOOL;
export function GetProcessWorkingSetSize (hProcess: HANDLE, lpMinimumWorkingSetSize: PSIZE_T, lpMaximumWorkingSetSize: PSIZE_T): BOOL;
export function SetProcessWorkingSetSize (hProcess: HANDLE, dwMinimumWorkingSetSize: SIZE_T, dwMaximumWorkingSetSize: SIZE_T): BOOL;
export function FatalExit (ExitCode: int): VOID;
export function SetEnvironmentStringsA (NewEnvironment: LPCH): BOOL;
export function SwitchToFiber (lpFiber: LPVOID): VOID;
export function DeleteFiber (lpFiber: LPVOID): VOID;
export function ConvertFiberToThread (): BOOL;
export function CreateFiberEx (dwStackCommitSize: SIZE_T, dwStackReserveSize: SIZE_T, dwFlags: DWORD, lpStartAddress: LPFIBER_START_ROUTINE, lpParameter: LPVOID): LPVOID;
export function ConvertThreadToFiberEx (lpParameter: LPVOID, dwFlags: DWORD): LPVOID;
export function CreateFiber (dwStackSize: SIZE_T, lpStartAddress: LPFIBER_START_ROUTINE, lpParameter: LPVOID): LPVOID;
export function ConvertThreadToFiber (lpParameter: LPVOID): LPVOID;
export function CreateUmsCompletionList (UmsCompletionList: "PUMS_COMPLETION_LIST*"): BOOL;
export function DequeueUmsCompletionListItems (UmsCompletionList: PUMS_COMPLETION_LIST, WaitTimeOut: DWORD, UmsThreadList: "PUMS_CONTEXT*"): BOOL;
export function GetUmsCompletionListEvent (UmsCompletionList: PUMS_COMPLETION_LIST, UmsCompletionEvent: PHANDLE): BOOL;
export function ExecuteUmsThread (UmsThread: PUMS_CONTEXT): BOOL;
export function UmsThreadYield (SchedulerParam: PVOID): BOOL;
export function DeleteUmsCompletionList (UmsCompletionList: PUMS_COMPLETION_LIST): BOOL;
export function GetCurrentUmsThread (): PUMS_CONTEXT;
export function GetNextUmsListItem (UmsContext: PUMS_CONTEXT): PUMS_CONTEXT;
export function QueryUmsThreadInformation (UmsThread: PUMS_CONTEXT, UmsThreadInfoClass: UMS_THREAD_INFO_CLASS, UmsThreadInformation: PVOID, UmsThreadInformationLength: ULONG, ReturnLength: PULONG): BOOL;
export function SetUmsThreadInformation (UmsThread: PUMS_CONTEXT, UmsThreadInfoClass: UMS_THREAD_INFO_CLASS, UmsThreadInformation: PVOID, UmsThreadInformationLength: ULONG): BOOL;
export function DeleteUmsThreadContext (UmsThread: PUMS_CONTEXT): BOOL;
export function CreateUmsThreadContext (lpUmsThread: "PUMS_CONTEXT *"): BOOL;
export function EnterUmsSchedulingMode (SchedulerStartupInfo: PUMS_SCHEDULER_STARTUP_INFO): BOOL;
export function GetUmsSystemThreadInformation (ThreadHandle: HANDLE, SystemThreadInfo: PUMS_SYSTEM_THREAD_INFORMATION): BOOL;
export function SetThreadAffinityMask (hThread: HANDLE, dwThreadAffinityMask: DWORD_PTR): DWORD_PTR;
export function SetProcessDEPPolicy (dwFlags: DWORD): BOOL;
export function GetProcessDEPPolicy (hProcess: HANDLE, lpFlags: LPDWORD, lpPermanent: PBOOL): BOOL;
export function RequestWakeupLatency (latency: LATENCY_TIME): BOOL;
export function IsSystemResumeAutomatic (): BOOL;
export function GetThreadSelectorEntry (hThread: HANDLE, dwSelector: DWORD, lpSelectorEntry: LPLDT_ENTRY): BOOL;
export function SetThreadExecutionState (esFlags: EXECUTION_STATE): EXECUTION_STATE;
export function PowerCreateRequest (Context: PREASON_CONTEXT): HANDLE;
export function PowerSetRequest (PowerRequest: HANDLE, RequestType: POWER_REQUEST_TYPE): BOOL;
export function PowerClearRequest (PowerRequest: HANDLE, RequestType: POWER_REQUEST_TYPE): BOOL;
export function RestoreLastError (dwErrCode: DWORD): VOID;
export function SetFileCompletionNotificationModes (FileHandle: HANDLE, Flags: UCHAR): BOOL;
export function Wow64GetThreadSelectorEntry (hThread: HANDLE, dwSelector: DWORD, lpSelectorEntry: PWOW64_LDT_ENTRY): BOOL;
export function DebugSetProcessKillOnExit (KillOnExit: BOOL): BOOL;
export function DebugBreakProcess (Process: HANDLE): BOOL;
export function PulseEvent (hEvent: HANDLE): BOOL;
export function GlobalDeleteAtom (nAtom: ATOM): ATOM;
export function InitAtomTable (nSize: DWORD): BOOL;
export function DeleteAtom (nAtom: ATOM): ATOM;
export function SetHandleCount (uNumber: UINT): UINT;
export function RequestDeviceWakeup (hDevice: HANDLE): BOOL;
export function CancelDeviceWakeupRequest (hDevice: HANDLE): BOOL;
export function GetDevicePowerState (hDevice: HANDLE, pfOn: "BOOL *"): BOOL;
export function SetMessageWaitingIndicator (hMsgIndicator: HANDLE, ulMsgCount: ULONG): BOOL;
export function SetFileShortNameA (hFile: HANDLE, lpShortName: LPCSTR): BOOL;
export function SetFileShortNameW (hFile: HANDLE, lpShortName: LPCWSTR): BOOL;
export function SetFileShortName (hFile: HANDLE, lpShortName: LPCWSTR): BOOL;
export function LoadModule (lpModuleName: LPCSTR, lpParameterBlock: LPVOID): DWORD;
export function WinExec (lpCmdLine: LPCSTR, uCmdShow: UINT): UINT;
export function ClearCommBreak (hFile: HANDLE): BOOL;
export function ClearCommError (hFile: HANDLE, lpErrors: LPDWORD, lpStat: LPCOMSTAT): BOOL;
export function SetupComm (hFile: HANDLE, dwInQueue: DWORD, dwOutQueue: DWORD): BOOL;
export function EscapeCommFunction (hFile: HANDLE, dwFunc: DWORD): BOOL;
export function GetCommConfig (hCommDev: HANDLE, lpCC: LPCOMMCONFIG, lpdwSize: LPDWORD): BOOL;
export function GetCommMask (hFile: HANDLE, lpEvtMask: LPDWORD): BOOL;
export function GetCommProperties (hFile: HANDLE, lpCommProp: LPCOMMPROP): BOOL;
export function GetCommModemStatus (hFile: HANDLE, lpModemStat: LPDWORD): BOOL;
export function GetCommState (hFile: HANDLE, lpDCB: LPDCB): BOOL;
export function GetCommTimeouts (hFile: HANDLE, lpCommTimeouts: LPCOMMTIMEOUTS): BOOL;
export function PurgeComm (hFile: HANDLE, dwFlags: DWORD): BOOL;
export function SetCommBreak (hFile: HANDLE): BOOL;
export function SetCommConfig (hCommDev: HANDLE, lpCC: LPCOMMCONFIG, dwSize: DWORD): BOOL;
export function SetCommMask (hFile: HANDLE, dwEvtMask: DWORD): BOOL;
export function SetCommState (hFile: HANDLE, lpDCB: LPDCB): BOOL;
export function SetCommTimeouts (hFile: HANDLE, lpCommTimeouts: LPCOMMTIMEOUTS): BOOL;
export function TransmitCommChar (hFile: HANDLE, cChar: char): BOOL;
export function WaitCommEvent (hFile: HANDLE, lpEvtMask: LPDWORD, lpOverlapped: LPOVERLAPPED): BOOL;
export function OpenCommPort (uPortNumber: ULONG, dwDesiredAccess: DWORD, dwFlagsAndAttributes: DWORD): HANDLE;
export function GetCommPorts (lpPortNumbers: PULONG, uPortNumbersCount: ULONG, puPortNumbersFound: PULONG): ULONG;
export function SetTapePosition (hDevice: HANDLE, dwPositionMethod: DWORD, dwPartition: DWORD, dwOffsetLow: DWORD, dwOffsetHigh: DWORD, bImmediate: BOOL): DWORD;
export function GetTapePosition (hDevice: HANDLE, dwPositionType: DWORD, lpdwPartition: LPDWORD, lpdwOffsetLow: LPDWORD, lpdwOffsetHigh: LPDWORD): DWORD;
export function PrepareTape (hDevice: HANDLE, dwOperation: DWORD, bImmediate: BOOL): DWORD;
export function EraseTape (hDevice: HANDLE, dwEraseType: DWORD, bImmediate: BOOL): DWORD;
export function CreateTapePartition (hDevice: HANDLE, dwPartitionMethod: DWORD, dwCount: DWORD, dwSize: DWORD): DWORD;
export function WriteTapemark (hDevice: HANDLE, dwTapemarkType: DWORD, dwTapemarkCount: DWORD, bImmediate: BOOL): DWORD;
export function GetTapeStatus (hDevice: HANDLE): DWORD;
export function GetTapeParameters (hDevice: HANDLE, dwOperation: DWORD, lpdwSize: LPDWORD, lpTapeInformation: LPVOID): DWORD;
export function SetTapeParameters (hDevice: HANDLE, dwOperation: DWORD, lpTapeInformation: LPVOID): DWORD;
export function MulDiv (nNumber: int, nNumerator: int, nDenominator: int): int;
export function GetSystemDEPPolicy (): DEP_SYSTEM_POLICY_TYPE;
export function GetSystemRegistryQuota (pdwQuotaAllowed: PDWORD, pdwQuotaUsed: PDWORD): BOOL;
export function FileTimeToDosDateTime (lpFileTime: "FILETIME *", lpFatDate: LPWORD, lpFatTime: LPWORD): BOOL;
export function DosDateTimeToFileTime (wFatDate: WORD, wFatTime: WORD, lpFileTime: LPFILETIME): BOOL;
export function CreateMailslotA (lpName: LPCSTR, nMaxMessageSize: DWORD, lReadTimeout: DWORD, lpSecurityAttributes: LPSECURITY_ATTRIBUTES): HANDLE;
export function CreateMailslotW (lpName: LPCWSTR, nMaxMessageSize: DWORD, lReadTimeout: DWORD, lpSecurityAttributes: LPSECURITY_ATTRIBUTES): HANDLE;
export function CreateMailslot (lpName: LPCWSTR, nMaxMessageSize: DWORD, lReadTimeout: DWORD, lpSecurityAttributes: LPSECURITY_ATTRIBUTES): HANDLE;
export function GetMailslotInfo (hMailslot: HANDLE, lpMaxMessageSize: LPDWORD, lpNextSize: LPDWORD, lpMessageCount: LPDWORD, lpReadTimeout: LPDWORD): BOOL;
export function SetMailslotInfo (hMailslot: HANDLE, lReadTimeout: DWORD): BOOL;
export function EncryptFileA (lpFileName: LPCSTR): BOOL;
export function EncryptFileW (lpFileName: LPCWSTR): BOOL;
export function EncryptFile (lpFileName: LPCWSTR): BOOL;
export function DecryptFileA (lpFileName: LPCSTR, dwReserved: DWORD): BOOL;
export function DecryptFileW (lpFileName: LPCWSTR, dwReserved: DWORD): BOOL;
export function DecryptFile (lpFileName: LPCWSTR, dwReserved: DWORD): BOOL;
export function FileEncryptionStatusA (lpFileName: LPCSTR, lpStatus: LPDWORD): BOOL;
export function FileEncryptionStatusW (lpFileName: LPCWSTR, lpStatus: LPDWORD): BOOL;
export function FileEncryptionStatus (lpFileName: LPCWSTR, lpStatus: LPDWORD): BOOL;
export function OpenEncryptedFileRawA (lpFileName: LPCSTR, ulFlags: ULONG, pvContext: "PVOID *"): DWORD;
export function OpenEncryptedFileRawW (lpFileName: LPCWSTR, ulFlags: ULONG, pvContext: "PVOID *"): DWORD;
export function OpenEncryptedFileRaw (lpFileName: LPCWSTR, ulFlags: ULONG, pvContext: "PVOID *"): DWORD;
export function ReadEncryptedFileRaw (pfExportCallback: PFE_EXPORT_FUNC, pvCallbackContext: PVOID, pvContext: PVOID): DWORD;
export function WriteEncryptedFileRaw (pfImportCallback: PFE_IMPORT_FUNC, pvCallbackContext: PVOID, pvContext: PVOID): DWORD;
export function CloseEncryptedFileRaw (pvContext: PVOID): VOID;
export function lstrcmpA (lpString1: LPCSTR, lpString2: LPCSTR): int;
export function lstrcmpW (lpString1: LPCWSTR, lpString2: LPCWSTR): int;
export function lstrcmp (lpString1: LPCWSTR, lpString2: LPCWSTR): int;
export function lstrcmpiA (lpString1: LPCSTR, lpString2: LPCSTR): int;
export function lstrcmpiW (lpString1: LPCWSTR, lpString2: LPCWSTR): int;
export function lstrcmpi (lpString1: LPCWSTR, lpString2: LPCWSTR): int;
export function lstrcpynA (lpString1: LPSTR, lpString2: LPCSTR, iMaxLength: int): LPSTR;
export function lstrcpynW (lpString1: LPWSTR, lpString2: LPCWSTR, iMaxLength: int): LPWSTR;
export function lstrcpyn (lpString1: LPWSTR, lpString2: LPCWSTR, iMaxLength: int): LPWSTR;
export function lstrlenA (lpString: LPCSTR): int;
export function lstrlenW (lpString: LPCWSTR): int;
export function lstrlen (lpString: LPCWSTR): int;
export function OpenFile (lpFileName: LPCSTR, lpReOpenBuff: LPOFSTRUCT, uStyle: UINT): HFILE;
export function _lopen (lpPathName: LPCSTR, iReadWrite: int): HFILE;
export function _lcreat (lpPathName: LPCSTR, iAttribute: int): HFILE;
export function _lread (hFile: HFILE, lpBuffer: LPVOID, uBytes: UINT): UINT;
export function _lwrite (hFile: HFILE, lpBuffer: LPCCH, uBytes: UINT): UINT;
export function _hread (hFile: HFILE, lpBuffer: LPVOID, lBytes: long): long;
export function _hwrite (hFile: HFILE, lpBuffer: LPCCH, lBytes: long): long;
export function _lclose (hFile: HFILE): HFILE;
export function _llseek (hFile: HFILE, lOffset: LONG, iOrigin: int): LONG;
export function IsTextUnicode (lpv: "VOID*", iSize: int, lpiResult: LPINT): BOOL;
export function SignalObjectAndWait (hObjectToSignal: HANDLE, hObjectToWaitOn: HANDLE, dwMilliseconds: DWORD, bAlertable: BOOL): DWORD;
export function BackupRead (hFile: HANDLE, lpBuffer: LPBYTE, nNumberOfBytesToRead: DWORD, lpNumberOfBytesRead: LPDWORD, bAbort: BOOL, bProcessSecurity: BOOL, lpContext: "LPVOID *"): BOOL;
export function BackupSeek (hFile: HANDLE, dwLowBytesToSeek: DWORD, dwHighBytesToSeek: DWORD, lpdwLowByteSeeked: LPDWORD, lpdwHighByteSeeked: LPDWORD, lpContext: "LPVOID *"): BOOL;
export function BackupWrite (hFile: HANDLE, lpBuffer: LPBYTE, nNumberOfBytesToWrite: DWORD, lpNumberOfBytesWritten: LPDWORD, bAbort: BOOL, bProcessSecurity: BOOL, lpContext: "LPVOID *"): BOOL;
export function OpenMutexA (dwDesiredAccess: DWORD, bInheritHandle: BOOL, lpName: LPCSTR): HANDLE;
export function CreateSemaphoreA (lpSemaphoreAttributes: LPSECURITY_ATTRIBUTES, lInitialCount: LONG, lMaximumCount: LONG, lpName: LPCSTR): HANDLE;
export function OpenSemaphoreA (dwDesiredAccess: DWORD, bInheritHandle: BOOL, lpName: LPCSTR): HANDLE;
export function CreateWaitableTimerA (lpTimerAttributes: LPSECURITY_ATTRIBUTES, bManualReset: BOOL, lpTimerName: LPCSTR): HANDLE;
export function OpenWaitableTimerA (dwDesiredAccess: DWORD, bInheritHandle: BOOL, lpTimerName: LPCSTR): HANDLE;
export function CreateSemaphoreExA (lpSemaphoreAttributes: LPSECURITY_ATTRIBUTES, lInitialCount: LONG, lMaximumCount: LONG, lpName: LPCSTR, dwFlags: DWORD, dwDesiredAccess: DWORD): HANDLE;
export function CreateWaitableTimerExA (lpTimerAttributes: LPSECURITY_ATTRIBUTES, lpTimerName: LPCSTR, dwFlags: DWORD, dwDesiredAccess: DWORD): HANDLE;
export function CreateFileMappingA (hFile: HANDLE, lpFileMappingAttributes: LPSECURITY_ATTRIBUTES, flProtect: DWORD, dwMaximumSizeHigh: DWORD, dwMaximumSizeLow: DWORD, lpName: LPCSTR): HANDLE;
export function CreateFileMappingNumaA (hFile: HANDLE, lpFileMappingAttributes: LPSECURITY_ATTRIBUTES, flProtect: DWORD, dwMaximumSizeHigh: DWORD, dwMaximumSizeLow: DWORD, lpName: LPCSTR, nndPreferred: DWORD): HANDLE;
export function OpenFileMappingA (dwDesiredAccess: DWORD, bInheritHandle: BOOL, lpName: LPCSTR): HANDLE;
export function GetLogicalDriveStringsA (nBufferLength: DWORD, lpBuffer: LPSTR): DWORD;
export function LoadPackagedLibrary (lpwLibFileName: LPCWSTR, Reserved: DWORD): HMODULE;
export function GetStartupInfoA (lpStartupInfo: LPSTARTUPINFOA): VOID;
export function SetFirmwareEnvironmentVariableA (lpName: LPCSTR, lpGuid: LPCSTR, pValue: PVOID, nSize: DWORD): BOOL;
export function SetFirmwareEnvironmentVariableW (lpName: LPCWSTR, lpGuid: LPCWSTR, pValue: PVOID, nSize: DWORD): BOOL;
export function SetFirmwareEnvironmentVariable (lpName: LPCWSTR, lpGuid: LPCWSTR, pValue: PVOID, nSize: DWORD): BOOL;
export function SetFirmwareEnvironmentVariableExA (lpName: LPCSTR, lpGuid: LPCSTR, pValue: PVOID, nSize: DWORD, dwAttributes: DWORD): BOOL;
export function SetFirmwareEnvironmentVariableExW (lpName: LPCWSTR, lpGuid: LPCWSTR, pValue: PVOID, nSize: DWORD, dwAttributes: DWORD): BOOL;
export function SetFirmwareEnvironmentVariableEx (lpName: LPCWSTR, lpGuid: LPCWSTR, pValue: PVOID, nSize: DWORD, dwAttributes: DWORD): BOOL;
export function GetFirmwareType (FirmwareType: PFIRMWARE_TYPE): BOOL;
export function IsNativeVhdBoot (NativeVhdBoot: PBOOL): BOOL;
export function FindResourceA (hModule: HMODULE, lpName: LPCSTR, lpType: LPCSTR): HRSRC;
export function FindResourceExA (hModule: HMODULE, lpType: LPCSTR, lpName: LPCSTR, wLanguage: WORD): HRSRC;
export function EnumResourceTypesA (hModule: HMODULE, lpEnumFunc: ENUMRESTYPEPROCA, lParam: LONG_PTR): BOOL;
export function EnumResourceTypesW (hModule: HMODULE, lpEnumFunc: ENUMRESTYPEPROCW, lParam: LONG_PTR): BOOL;
export function EnumResourceTypes (hModule: HMODULE, lpEnumFunc: ENUMRESTYPEPROCW, lParam: LONG_PTR): BOOL;
export function EnumResourceNamesA (hModule: HMODULE, lpType: LPCSTR, lpEnumFunc: ENUMRESNAMEPROCA, lParam: LONG_PTR): BOOL;
export function EnumResourceLanguagesA (hModule: HMODULE, lpType: LPCSTR, lpName: LPCSTR, lpEnumFunc: ENUMRESLANGPROCA, lParam: LONG_PTR): BOOL;
export function EnumResourceLanguagesW (hModule: HMODULE, lpType: LPCWSTR, lpName: LPCWSTR, lpEnumFunc: ENUMRESLANGPROCW, lParam: LONG_PTR): BOOL;
export function EnumResourceLanguages (hModule: HMODULE, lpType: LPCWSTR, lpName: LPCWSTR, lpEnumFunc: ENUMRESLANGPROCW, lParam: LONG_PTR): BOOL;
export function BeginUpdateResourceA (pFileName: LPCSTR, bDeleteExistingResources: BOOL): HANDLE;
export function BeginUpdateResourceW (pFileName: LPCWSTR, bDeleteExistingResources: BOOL): HANDLE;
export function BeginUpdateResource (pFileName: LPCWSTR, bDeleteExistingResources: BOOL): HANDLE;
export function UpdateResourceA (hUpdate: HANDLE, lpType: LPCSTR, lpName: LPCSTR, wLanguage: WORD, lpData: LPVOID, cb: DWORD): BOOL;
export function UpdateResourceW (hUpdate: HANDLE, lpType: LPCWSTR, lpName: LPCWSTR, wLanguage: WORD, lpData: LPVOID, cb: DWORD): BOOL;
export function UpdateResource (hUpdate: HANDLE, lpType: LPCWSTR, lpName: LPCWSTR, wLanguage: WORD, lpData: LPVOID, cb: DWORD): BOOL;
export function EndUpdateResourceA (hUpdate: HANDLE, fDiscard: BOOL): BOOL;
export function EndUpdateResourceW (hUpdate: HANDLE, fDiscard: BOOL): BOOL;
export function EndUpdateResource (hUpdate: HANDLE, fDiscard: BOOL): BOOL;
export function GlobalAddAtomA (lpString: LPCSTR): ATOM;
export function GlobalAddAtomW (lpString: LPCWSTR): ATOM;
export function GlobalAddAtom (lpString: LPCWSTR): ATOM;
export function GlobalAddAtomExA (lpString: LPCSTR, Flags: DWORD): ATOM;
export function GlobalAddAtomExW (lpString: LPCWSTR, Flags: DWORD): ATOM;
export function GlobalAddAtomEx (lpString: LPCWSTR, Flags: DWORD): ATOM;
export function GlobalFindAtomA (lpString: LPCSTR): ATOM;
export function GlobalFindAtomW (lpString: LPCWSTR): ATOM;
export function GlobalFindAtom (lpString: LPCWSTR): ATOM;
export function AddAtomA (lpString: LPCSTR): ATOM;
export function AddAtomW (lpString: LPCWSTR): ATOM;
export function AddAtom (lpString: LPCWSTR): ATOM;
export function FindAtomA (lpString: LPCSTR): ATOM;
export function FindAtomW (lpString: LPCWSTR): ATOM;
export function FindAtom (lpString: LPCWSTR): ATOM;
export function GetProfileIntA (lpAppName: LPCSTR, lpKeyName: LPCSTR, nDefault: INT): UINT;
export function GetProfileIntW (lpAppName: LPCWSTR, lpKeyName: LPCWSTR, nDefault: INT): UINT;
export function GetProfileInt (lpAppName: LPCWSTR, lpKeyName: LPCWSTR, nDefault: INT): UINT;
export function GetProfileStringA (lpAppName: LPCSTR, lpKeyName: LPCSTR, lpDefault: LPCSTR, lpReturnedString: LPSTR, nSize: DWORD): DWORD;
export function GetProfileStringW (lpAppName: LPCWSTR, lpKeyName: LPCWSTR, lpDefault: LPCWSTR, lpReturnedString: LPWSTR, nSize: DWORD): DWORD;
export function GetProfileString (lpAppName: LPCWSTR, lpKeyName: LPCWSTR, lpDefault: LPCWSTR, lpReturnedString: LPWSTR, nSize: DWORD): DWORD;
export function WriteProfileStringA (lpAppName: LPCSTR, lpKeyName: LPCSTR, lpString: LPCSTR): BOOL;
export function WriteProfileStringW (lpAppName: LPCWSTR, lpKeyName: LPCWSTR, lpString: LPCWSTR): BOOL;
export function WriteProfileString (lpAppName: LPCWSTR, lpKeyName: LPCWSTR, lpString: LPCWSTR): BOOL;
export function GetProfileSectionA (lpAppName: LPCSTR, lpReturnedString: LPSTR, nSize: DWORD): DWORD;
export function GetProfileSectionW (lpAppName: LPCWSTR, lpReturnedString: LPWSTR, nSize: DWORD): DWORD;
export function GetProfileSection (lpAppName: LPCWSTR, lpReturnedString: LPWSTR, nSize: DWORD): DWORD;
export function WriteProfileSectionA (lpAppName: LPCSTR, lpString: LPCSTR): BOOL;
export function WriteProfileSectionW (lpAppName: LPCWSTR, lpString: LPCWSTR): BOOL;
export function WriteProfileSection (lpAppName: LPCWSTR, lpString: LPCWSTR): BOOL;
export function GetPrivateProfileIntA (lpAppName: LPCSTR, lpKeyName: LPCSTR, nDefault: INT, lpFileName: LPCSTR): UINT;
export function GetPrivateProfileIntW (lpAppName: LPCWSTR, lpKeyName: LPCWSTR, nDefault: INT, lpFileName: LPCWSTR): UINT;
export function GetPrivateProfileInt (lpAppName: LPCWSTR, lpKeyName: LPCWSTR, nDefault: INT, lpFileName: LPCWSTR): UINT;
export function GetPrivateProfileStringA (lpAppName: LPCSTR, lpKeyName: LPCSTR, lpDefault: LPCSTR, lpReturnedString: LPSTR, nSize: DWORD, lpFileName: LPCSTR): DWORD;
export function GetPrivateProfileStringW (lpAppName: LPCWSTR, lpKeyName: LPCWSTR, lpDefault: LPCWSTR, lpReturnedString: LPWSTR, nSize: DWORD, lpFileName: LPCWSTR): DWORD;
export function GetPrivateProfileString (lpAppName: LPCWSTR, lpKeyName: LPCWSTR, lpDefault: LPCWSTR, lpReturnedString: LPWSTR, nSize: DWORD, lpFileName: LPCWSTR): DWORD;
export function WritePrivateProfileStringA (lpAppName: LPCSTR, lpKeyName: LPCSTR, lpString: LPCSTR, lpFileName: LPCSTR): BOOL;
export function WritePrivateProfileStringW (lpAppName: LPCWSTR, lpKeyName: LPCWSTR, lpString: LPCWSTR, lpFileName: LPCWSTR): BOOL;
export function WritePrivateProfileString (lpAppName: LPCWSTR, lpKeyName: LPCWSTR, lpString: LPCWSTR, lpFileName: LPCWSTR): BOOL;
export function GetPrivateProfileSectionA (lpAppName: LPCSTR, lpReturnedString: LPSTR, nSize: DWORD, lpFileName: LPCSTR): DWORD;
export function GetPrivateProfileSectionW (lpAppName: LPCWSTR, lpReturnedString: LPWSTR, nSize: DWORD, lpFileName: LPCWSTR): DWORD;
export function GetPrivateProfileSection (lpAppName: LPCWSTR, lpReturnedString: LPWSTR, nSize: DWORD, lpFileName: LPCWSTR): DWORD;
export function WritePrivateProfileSectionA (lpAppName: LPCSTR, lpString: LPCSTR, lpFileName: LPCSTR): BOOL;
export function WritePrivateProfileSectionW (lpAppName: LPCWSTR, lpString: LPCWSTR, lpFileName: LPCWSTR): BOOL;
export function WritePrivateProfileSection (lpAppName: LPCWSTR, lpString: LPCWSTR, lpFileName: LPCWSTR): BOOL;
export function GetPrivateProfileSectionNamesA (lpszReturnBuffer: LPSTR, nSize: DWORD, lpFileName: LPCSTR): DWORD;
export function GetPrivateProfileSectionNamesW (lpszReturnBuffer: LPWSTR, nSize: DWORD, lpFileName: LPCWSTR): DWORD;
export function GetPrivateProfileSectionNames (lpszReturnBuffer: LPWSTR, nSize: DWORD, lpFileName: LPCWSTR): DWORD;
export function GetPrivateProfileStructA (lpszSection: LPCSTR, lpszKey: LPCSTR, lpStruct: LPVOID, uSizeStruct: UINT, szFile: LPCSTR): BOOL;
export function GetPrivateProfileStructW (lpszSection: LPCWSTR, lpszKey: LPCWSTR, lpStruct: LPVOID, uSizeStruct: UINT, szFile: LPCWSTR): BOOL;
export function GetPrivateProfileStruct (lpszSection: LPCWSTR, lpszKey: LPCWSTR, lpStruct: LPVOID, uSizeStruct: UINT, szFile: LPCWSTR): BOOL;
export function WritePrivateProfileStructA (lpszSection: LPCSTR, lpszKey: LPCSTR, lpStruct: LPVOID, uSizeStruct: UINT, szFile: LPCSTR): BOOL;
export function WritePrivateProfileStructW (lpszSection: LPCWSTR, lpszKey: LPCWSTR, lpStruct: LPVOID, uSizeStruct: UINT, szFile: LPCWSTR): BOOL;
export function WritePrivateProfileStruct (lpszSection: LPCWSTR, lpszKey: LPCWSTR, lpStruct: LPVOID, uSizeStruct: UINT, szFile: LPCWSTR): BOOL;
export function Wow64EnableWow64FsRedirection (Wow64FsEnableRedirection: BOOLEAN): BOOLEAN;
export function SetDllDirectoryA (lpPathName: LPCSTR): BOOL;
export function SetDllDirectoryW (lpPathName: LPCWSTR): BOOL;
export function SetDllDirectory (lpPathName: LPCWSTR): BOOL;
export function GetDllDirectoryA (nBufferLength: DWORD, lpBuffer: LPSTR): DWORD;
export function GetDllDirectoryW (nBufferLength: DWORD, lpBuffer: LPWSTR): DWORD;
export function GetDllDirectory (nBufferLength: DWORD, lpBuffer: LPWSTR): DWORD;
export function SetSearchPathMode (Flags: DWORD): BOOL;
export function CreateDirectoryExA (lpTemplateDirectory: LPCSTR, lpNewDirectory: LPCSTR, lpSecurityAttributes: LPSECURITY_ATTRIBUTES): BOOL;
export function CreateDirectoryExW (lpTemplateDirectory: LPCWSTR, lpNewDirectory: LPCWSTR, lpSecurityAttributes: LPSECURITY_ATTRIBUTES): BOOL;
export function CreateDirectoryEx (lpTemplateDirectory: LPCWSTR, lpNewDirectory: LPCWSTR, lpSecurityAttributes: LPSECURITY_ATTRIBUTES): BOOL;
export function CreateDirectoryTransactedA (lpTemplateDirectory: LPCSTR, lpNewDirectory: LPCSTR, lpSecurityAttributes: LPSECURITY_ATTRIBUTES, hTransaction: HANDLE): BOOL;
export function CreateDirectoryTransactedW (lpTemplateDirectory: LPCWSTR, lpNewDirectory: LPCWSTR, lpSecurityAttributes: LPSECURITY_ATTRIBUTES, hTransaction: HANDLE): BOOL;
export function CreateDirectoryTransacted (lpTemplateDirectory: LPCWSTR, lpNewDirectory: LPCWSTR, lpSecurityAttributes: LPSECURITY_ATTRIBUTES, hTransaction: HANDLE): BOOL;
export function RemoveDirectoryTransactedA (lpPathName: LPCSTR, hTransaction: HANDLE): BOOL;
export function RemoveDirectoryTransactedW (lpPathName: LPCWSTR, hTransaction: HANDLE): BOOL;
export function RemoveDirectoryTransacted (lpPathName: LPCWSTR, hTransaction: HANDLE): BOOL;
export function GetFullPathNameTransactedA (lpFileName: LPCSTR, nBufferLength: DWORD, lpBuffer: LPSTR, lpFilePart: "LPSTR *", hTransaction: HANDLE): DWORD;
export function GetFullPathNameTransactedW (lpFileName: LPCWSTR, nBufferLength: DWORD, lpBuffer: LPWSTR, lpFilePart: "LPWSTR *", hTransaction: HANDLE): DWORD;
export function GetFullPathNameTransacted (lpFileName: LPCWSTR, nBufferLength: DWORD, lpBuffer: LPWSTR, lpFilePart: "LPWSTR *", hTransaction: HANDLE): DWORD;
export function DefineDosDeviceA (dwFlags: DWORD, lpDeviceName: LPCSTR, lpTargetPath: LPCSTR): BOOL;
export function QueryDosDeviceA (lpDeviceName: LPCSTR, lpTargetPath: LPSTR, ucchMax: DWORD): DWORD;
export function CreateFileTransactedA (lpFileName: LPCSTR, dwDesiredAccess: DWORD, dwShareMode: DWORD, lpSecurityAttributes: LPSECURITY_ATTRIBUTES, dwCreationDisposition: DWORD, dwFlagsAndAttributes: DWORD, hTemplateFile: HANDLE, hTransaction: HANDLE, pusMiniVersion: PUSHORT, lpExtendedParameter: PVOID): HANDLE;
export function CreateFileTransactedW (lpFileName: LPCWSTR, dwDesiredAccess: DWORD, dwShareMode: DWORD, lpSecurityAttributes: LPSECURITY_ATTRIBUTES, dwCreationDisposition: DWORD, dwFlagsAndAttributes: DWORD, hTemplateFile: HANDLE, hTransaction: HANDLE, pusMiniVersion: PUSHORT, lpExtendedParameter: PVOID): HANDLE;
export function CreateFileTransacted (lpFileName: LPCWSTR, dwDesiredAccess: DWORD, dwShareMode: DWORD, lpSecurityAttributes: LPSECURITY_ATTRIBUTES, dwCreationDisposition: DWORD, dwFlagsAndAttributes: DWORD, hTemplateFile: HANDLE, hTransaction: HANDLE, pusMiniVersion: PUSHORT, lpExtendedParameter: PVOID): HANDLE;
export function ReOpenFile (hOriginalFile: HANDLE, dwDesiredAccess: DWORD, dwShareMode: DWORD, dwFlagsAndAttributes: DWORD): HANDLE;
export function SetFileAttributesTransactedA (lpFileName: LPCSTR, dwFileAttributes: DWORD, hTransaction: HANDLE): BOOL;
export function SetFileAttributesTransactedW (lpFileName: LPCWSTR, dwFileAttributes: DWORD, hTransaction: HANDLE): BOOL;
export function SetFileAttributesTransacted (lpFileName: LPCWSTR, dwFileAttributes: DWORD, hTransaction: HANDLE): BOOL;
export function GetCompressedFileSizeTransactedA (lpFileName: LPCSTR, lpFileSizeHigh: LPDWORD, hTransaction: HANDLE): DWORD;
export function GetCompressedFileSizeTransactedW (lpFileName: LPCWSTR, lpFileSizeHigh: LPDWORD, hTransaction: HANDLE): DWORD;
export function GetCompressedFileSizeTransacted (lpFileName: LPCWSTR, lpFileSizeHigh: LPDWORD, hTransaction: HANDLE): DWORD;
export function DeleteFileTransactedA (lpFileName: LPCSTR, hTransaction: HANDLE): BOOL;
export function DeleteFileTransactedW (lpFileName: LPCWSTR, hTransaction: HANDLE): BOOL;
export function DeleteFileTransacted (lpFileName: LPCWSTR, hTransaction: HANDLE): BOOL;
export function CheckNameLegalDOS8Dot3A (lpName: LPCSTR, lpOemName: LPSTR, OemNameSize: DWORD, pbNameContainsSpaces: PBOOL, pbNameLegal: PBOOL): BOOL;
export function CheckNameLegalDOS8Dot3W (lpName: LPCWSTR, lpOemName: LPSTR, OemNameSize: DWORD, pbNameContainsSpaces: PBOOL, pbNameLegal: PBOOL): BOOL;
export function CheckNameLegalDOS8Dot3 (lpName: LPCWSTR, lpOemName: LPSTR, OemNameSize: DWORD, pbNameContainsSpaces: PBOOL, pbNameLegal: PBOOL): BOOL;
export function CopyFileA (lpExistingFileName: LPCSTR, lpNewFileName: LPCSTR, bFailIfExists: BOOL): BOOL;
export function CopyFileW (lpExistingFileName: LPCWSTR, lpNewFileName: LPCWSTR, bFailIfExists: BOOL): BOOL;
export function CopyFile (lpExistingFileName: LPCWSTR, lpNewFileName: LPCWSTR, bFailIfExists: BOOL): BOOL;
export function CopyFileTransactedA (lpExistingFileName: LPCSTR, lpNewFileName: LPCSTR, lpProgressRoutine: LPPROGRESS_ROUTINE, lpData: LPVOID, pbCancel: LPBOOL, dwCopyFlags: DWORD, hTransaction: HANDLE): BOOL;
export function CopyFileTransactedW (lpExistingFileName: LPCWSTR, lpNewFileName: LPCWSTR, lpProgressRoutine: LPPROGRESS_ROUTINE, lpData: LPVOID, pbCancel: LPBOOL, dwCopyFlags: DWORD, hTransaction: HANDLE): BOOL;
export function CopyFileTransacted (lpExistingFileName: LPCWSTR, lpNewFileName: LPCWSTR, lpProgressRoutine: LPPROGRESS_ROUTINE, lpData: LPVOID, pbCancel: LPBOOL, dwCopyFlags: DWORD, hTransaction: HANDLE): BOOL;
export function CopyFile2 (pwszExistingFileName: PCWSTR, pwszNewFileName: PCWSTR, pExtendedParameters: "COPYFILE2_EXTENDED_PARAMETERS *"): HRESULT;
export function MoveFileA (lpExistingFileName: LPCSTR, lpNewFileName: LPCSTR): BOOL;
export function MoveFileW (lpExistingFileName: LPCWSTR, lpNewFileName: LPCWSTR): BOOL;
export function MoveFile (lpExistingFileName: LPCWSTR, lpNewFileName: LPCWSTR): BOOL;
export function MoveFileExA (lpExistingFileName: LPCSTR, lpNewFileName: LPCSTR, dwFlags: DWORD): BOOL;
export function MoveFileExW (lpExistingFileName: LPCWSTR, lpNewFileName: LPCWSTR, dwFlags: DWORD): BOOL;
export function MoveFileEx (lpExistingFileName: LPCWSTR, lpNewFileName: LPCWSTR, dwFlags: DWORD): BOOL;
export function MoveFileWithProgressA (lpExistingFileName: LPCSTR, lpNewFileName: LPCSTR, lpProgressRoutine: LPPROGRESS_ROUTINE, lpData: LPVOID, dwFlags: DWORD): BOOL;
export function MoveFileWithProgressW (lpExistingFileName: LPCWSTR, lpNewFileName: LPCWSTR, lpProgressRoutine: LPPROGRESS_ROUTINE, lpData: LPVOID, dwFlags: DWORD): BOOL;
export function MoveFileWithProgress (lpExistingFileName: LPCWSTR, lpNewFileName: LPCWSTR, lpProgressRoutine: LPPROGRESS_ROUTINE, lpData: LPVOID, dwFlags: DWORD): BOOL;
export function MoveFileTransactedA (lpExistingFileName: LPCSTR, lpNewFileName: LPCSTR, lpProgressRoutine: LPPROGRESS_ROUTINE, lpData: LPVOID, dwFlags: DWORD, hTransaction: HANDLE): BOOL;
export function MoveFileTransactedW (lpExistingFileName: LPCWSTR, lpNewFileName: LPCWSTR, lpProgressRoutine: LPPROGRESS_ROUTINE, lpData: LPVOID, dwFlags: DWORD, hTransaction: HANDLE): BOOL;
export function MoveFileTransacted (lpExistingFileName: LPCWSTR, lpNewFileName: LPCWSTR, lpProgressRoutine: LPPROGRESS_ROUTINE, lpData: LPVOID, dwFlags: DWORD, hTransaction: HANDLE): BOOL;
export function ReplaceFileA (lpReplacedFileName: LPCSTR, lpReplacementFileName: LPCSTR, lpBackupFileName: LPCSTR, dwReplaceFlags: DWORD, lpExclude: LPVOID, lpReserved: LPVOID): BOOL;
export function ReplaceFileW (lpReplacedFileName: LPCWSTR, lpReplacementFileName: LPCWSTR, lpBackupFileName: LPCWSTR, dwReplaceFlags: DWORD, lpExclude: LPVOID, lpReserved: LPVOID): BOOL;
export function ReplaceFile (lpReplacedFileName: LPCWSTR, lpReplacementFileName: LPCWSTR, lpBackupFileName: LPCWSTR, dwReplaceFlags: DWORD, lpExclude: LPVOID, lpReserved: LPVOID): BOOL;
export function CreateHardLinkA (lpFileName: LPCSTR, lpExistingFileName: LPCSTR, lpSecurityAttributes: LPSECURITY_ATTRIBUTES): BOOL;
export function CreateHardLinkW (lpFileName: LPCWSTR, lpExistingFileName: LPCWSTR, lpSecurityAttributes: LPSECURITY_ATTRIBUTES): BOOL;
export function CreateHardLink (lpFileName: LPCWSTR, lpExistingFileName: LPCWSTR, lpSecurityAttributes: LPSECURITY_ATTRIBUTES): BOOL;
export function CreateHardLinkTransactedA (lpFileName: LPCSTR, lpExistingFileName: LPCSTR, lpSecurityAttributes: LPSECURITY_ATTRIBUTES, hTransaction: HANDLE): BOOL;
export function CreateHardLinkTransactedW (lpFileName: LPCWSTR, lpExistingFileName: LPCWSTR, lpSecurityAttributes: LPSECURITY_ATTRIBUTES, hTransaction: HANDLE): BOOL;
export function CreateHardLinkTransacted (lpFileName: LPCWSTR, lpExistingFileName: LPCWSTR, lpSecurityAttributes: LPSECURITY_ATTRIBUTES, hTransaction: HANDLE): BOOL;
export function FindFirstFileNameTransactedW (lpFileName: LPCWSTR, dwFlags: DWORD, StringLength: LPDWORD, LinkName: PWSTR, hTransaction: HANDLE): HANDLE;
export function FindFirstFileNameTransacted (lpFileName: LPCWSTR, dwFlags: DWORD, StringLength: LPDWORD, LinkName: PWSTR, hTransaction: HANDLE): HANDLE;
export function CreateNamedPipeA (lpName: LPCSTR, dwOpenMode: DWORD, dwPipeMode: DWORD, nMaxInstances: DWORD, nOutBufferSize: DWORD, nInBufferSize: DWORD, nDefaultTimeOut: DWORD, lpSecurityAttributes: LPSECURITY_ATTRIBUTES): HANDLE;
export function GetNamedPipeHandleStateA (hNamedPipe: HANDLE, lpState: LPDWORD, lpCurInstances: LPDWORD, lpMaxCollectionCount: LPDWORD, lpCollectDataTimeout: LPDWORD, lpUserName: LPSTR, nMaxUserNameSize: DWORD): BOOL;
export function WaitNamedPipeA (lpNamedPipeName: LPCSTR, nTimeOut: DWORD): BOOL;
export function GetNamedPipeClientComputerNameA (Pipe: HANDLE, ClientComputerName: LPSTR, ClientComputerNameLength: ULONG): BOOL;
export function GetNamedPipeClientProcessId (Pipe: HANDLE, ClientProcessId: PULONG): BOOL;
export function GetNamedPipeClientSessionId (Pipe: HANDLE, ClientSessionId: PULONG): BOOL;
export function GetNamedPipeServerProcessId (Pipe: HANDLE, ServerProcessId: PULONG): BOOL;
export function GetNamedPipeServerSessionId (Pipe: HANDLE, ServerSessionId: PULONG): BOOL;
export function SetVolumeLabelA (lpRootPathName: LPCSTR, lpVolumeName: LPCSTR): BOOL;
export function SetVolumeLabelW (lpRootPathName: LPCWSTR, lpVolumeName: LPCWSTR): BOOL;
export function SetVolumeLabel (lpRootPathName: LPCWSTR, lpVolumeName: LPCWSTR): BOOL;
export function SetFileBandwidthReservation (hFile: HANDLE, nPeriodMilliseconds: DWORD, nBytesPerPeriod: DWORD, bDiscardable: BOOL, lpTransferSize: LPDWORD, lpNumOutstandingRequests: LPDWORD): BOOL;
export function GetFileBandwidthReservation (hFile: HANDLE, lpPeriodMilliseconds: LPDWORD, lpBytesPerPeriod: LPDWORD, pDiscardable: LPBOOL, lpTransferSize: LPDWORD, lpNumOutstandingRequests: LPDWORD): BOOL;
export function ClearEventLogA (hEventLog: HANDLE, lpBackupFileName: LPCSTR): BOOL;
export function ClearEventLogW (hEventLog: HANDLE, lpBackupFileName: LPCWSTR): BOOL;
export function ClearEventLog (hEventLog: HANDLE, lpBackupFileName: LPCWSTR): BOOL;
export function BackupEventLogA (hEventLog: HANDLE, lpBackupFileName: LPCSTR): BOOL;
export function BackupEventLogW (hEventLog: HANDLE, lpBackupFileName: LPCWSTR): BOOL;
export function BackupEventLog (hEventLog: HANDLE, lpBackupFileName: LPCWSTR): BOOL;
export function CloseEventLog (hEventLog: HANDLE): BOOL;
export function DeregisterEventSource (hEventLog: HANDLE): BOOL;
export function NotifyChangeEventLog (hEventLog: HANDLE, hEvent: HANDLE): BOOL;
export function GetNumberOfEventLogRecords (hEventLog: HANDLE, NumberOfRecords: PDWORD): BOOL;
export function GetOldestEventLogRecord (hEventLog: HANDLE, OldestRecord: PDWORD): BOOL;
export function OpenEventLogA (lpUNCServerName: LPCSTR, lpSourceName: LPCSTR): HANDLE;
export function OpenEventLogW (lpUNCServerName: LPCWSTR, lpSourceName: LPCWSTR): HANDLE;
export function OpenEventLog (lpUNCServerName: LPCWSTR, lpSourceName: LPCWSTR): HANDLE;
export function RegisterEventSourceA (lpUNCServerName: LPCSTR, lpSourceName: LPCSTR): HANDLE;
export function RegisterEventSourceW (lpUNCServerName: LPCWSTR, lpSourceName: LPCWSTR): HANDLE;
export function RegisterEventSource (lpUNCServerName: LPCWSTR, lpSourceName: LPCWSTR): HANDLE;
export function OpenBackupEventLogA (lpUNCServerName: LPCSTR, lpFileName: LPCSTR): HANDLE;
export function OpenBackupEventLogW (lpUNCServerName: LPCWSTR, lpFileName: LPCWSTR): HANDLE;
export function OpenBackupEventLog (lpUNCServerName: LPCWSTR, lpFileName: LPCWSTR): HANDLE;
export function ReadEventLogA (hEventLog: HANDLE, dwReadFlags: DWORD, dwRecordOffset: DWORD, lpBuffer: LPVOID, nNumberOfBytesToRead: DWORD, pnBytesRead: "DWORD *", pnMinNumberOfBytesNeeded: "DWORD *"): BOOL;
export function ReadEventLogW (hEventLog: HANDLE, dwReadFlags: DWORD, dwRecordOffset: DWORD, lpBuffer: LPVOID, nNumberOfBytesToRead: DWORD, pnBytesRead: "DWORD *", pnMinNumberOfBytesNeeded: "DWORD *"): BOOL;
export function ReadEventLog (hEventLog: HANDLE, dwReadFlags: DWORD, dwRecordOffset: DWORD, lpBuffer: LPVOID, nNumberOfBytesToRead: DWORD, pnBytesRead: "DWORD *", pnMinNumberOfBytesNeeded: "DWORD *"): BOOL;
export function GetEventLogInformation (hEventLog: HANDLE, dwInfoLevel: DWORD, lpBuffer: LPVOID, cbBufSize: DWORD, pcbBytesNeeded: LPDWORD): BOOL;
export function OperationStart (OperationStartParams: "OPERATION_START_PARAMETERS*"): BOOL;
export function OperationEnd (OperationEndParams: "OPERATION_END_PARAMETERS*"): BOOL;
export function AccessCheckAndAuditAlarmA (SubsystemName: LPCSTR, HandleId: LPVOID, ObjectTypeName: LPSTR, ObjectName: LPSTR, SecurityDescriptor: PSECURITY_DESCRIPTOR, DesiredAccess: DWORD, GenericMapping: PGENERIC_MAPPING, ObjectCreation: BOOL, GrantedAccess: LPDWORD, AccessStatus: LPBOOL, pfGenerateOnClose: LPBOOL): BOOL;
export function ObjectOpenAuditAlarmA (SubsystemName: LPCSTR, HandleId: LPVOID, ObjectTypeName: LPSTR, ObjectName: LPSTR, pSecurityDescriptor: PSECURITY_DESCRIPTOR, ClientToken: HANDLE, DesiredAccess: DWORD, GrantedAccess: DWORD, Privileges: PPRIVILEGE_SET, ObjectCreation: BOOL, AccessGranted: BOOL, GenerateOnClose: LPBOOL): BOOL;
export function ObjectPrivilegeAuditAlarmA (SubsystemName: LPCSTR, HandleId: LPVOID, ClientToken: HANDLE, DesiredAccess: DWORD, Privileges: PPRIVILEGE_SET, AccessGranted: BOOL): BOOL;
export function ObjectCloseAuditAlarmA (SubsystemName: LPCSTR, HandleId: LPVOID, GenerateOnClose: BOOL): BOOL;
export function ObjectDeleteAuditAlarmA (SubsystemName: LPCSTR, HandleId: LPVOID, GenerateOnClose: BOOL): BOOL;
export function PrivilegedServiceAuditAlarmA (SubsystemName: LPCSTR, ServiceName: LPCSTR, ClientToken: HANDLE, Privileges: PPRIVILEGE_SET, AccessGranted: BOOL): BOOL;
export function AddConditionalAce (pAcl: PACL, dwAceRevision: DWORD, AceFlags: DWORD, AceType: UCHAR, AccessMask: DWORD, pSid: PSID, ConditionStr: PWCHAR, ReturnLength: "DWORD *"): BOOL;
export function SetFileSecurityA (lpFileName: LPCSTR, SecurityInformation: SECURITY_INFORMATION, pSecurityDescriptor: PSECURITY_DESCRIPTOR): BOOL;
export function ReadDirectoryChangesW (hDirectory: HANDLE, lpBuffer: LPVOID, nBufferLength: DWORD, bWatchSubtree: BOOL, dwNotifyFilter: DWORD, lpBytesReturned: LPDWORD, lpOverlapped: LPOVERLAPPED, lpCompletionRoutine: LPOVERLAPPED_COMPLETION_ROUTINE): BOOL;
export function ReadDirectoryChanges (hDirectory: HANDLE, lpBuffer: LPVOID, nBufferLength: DWORD, bWatchSubtree: BOOL, dwNotifyFilter: DWORD, lpBytesReturned: LPDWORD, lpOverlapped: LPOVERLAPPED, lpCompletionRoutine: LPOVERLAPPED_COMPLETION_ROUTINE): BOOL;
export function ReadDirectoryChangesExW (hDirectory: HANDLE, lpBuffer: LPVOID, nBufferLength: DWORD, bWatchSubtree: BOOL, dwNotifyFilter: DWORD, lpBytesReturned: LPDWORD, lpOverlapped: LPOVERLAPPED, lpCompletionRoutine: LPOVERLAPPED_COMPLETION_ROUTINE, ReadDirectoryNotifyInformationClass: READ_DIRECTORY_NOTIFY_INFORMATION_CLASS): BOOL;
export function ReadDirectoryChangesEx (hDirectory: HANDLE, lpBuffer: LPVOID, nBufferLength: DWORD, bWatchSubtree: BOOL, dwNotifyFilter: DWORD, lpBytesReturned: LPDWORD, lpOverlapped: LPOVERLAPPED, lpCompletionRoutine: LPOVERLAPPED_COMPLETION_ROUTINE, ReadDirectoryNotifyInformationClass: READ_DIRECTORY_NOTIFY_INFORMATION_CLASS): BOOL;
export function MapViewOfFileExNuma (hFileMappingObject: HANDLE, dwDesiredAccess: DWORD, dwFileOffsetHigh: DWORD, dwFileOffsetLow: DWORD, dwNumberOfBytesToMap: SIZE_T, lpBaseAddress: LPVOID, nndPreferred: DWORD): LPVOID;
export function IsBadReadPtr (lp: "VOID *", ucb: UINT_PTR): BOOL;
export function IsBadWritePtr (lp: LPVOID, ucb: UINT_PTR): BOOL;
export function IsBadHugeReadPtr (lp: "VOID *", ucb: UINT_PTR): BOOL;
export function IsBadHugeWritePtr (lp: LPVOID, ucb: UINT_PTR): BOOL;
export function IsBadCodePtr (lpfn: FARPROC): BOOL;
export function IsBadStringPtrA (lpsz: LPCSTR, ucchMax: UINT_PTR): BOOL;
export function IsBadStringPtrW (lpsz: LPCWSTR, ucchMax: UINT_PTR): BOOL;
export function IsBadStringPtr (lpsz: LPCWSTR, ucchMax: UINT_PTR): BOOL;
export function LookupAccountSidA (lpSystemName: LPCSTR, Sid: PSID, Name: LPSTR, cchName: LPDWORD, ReferencedDomainName: LPSTR, cchReferencedDomainName: LPDWORD, peUse: PSID_NAME_USE): BOOL;
export function LookupAccountSidW (lpSystemName: LPCWSTR, Sid: PSID, Name: LPWSTR, cchName: LPDWORD, ReferencedDomainName: LPWSTR, cchReferencedDomainName: LPDWORD, peUse: PSID_NAME_USE): BOOL;
export function LookupAccountSid (lpSystemName: LPCWSTR, Sid: PSID, Name: LPWSTR, cchName: LPDWORD, ReferencedDomainName: LPWSTR, cchReferencedDomainName: LPDWORD, peUse: PSID_NAME_USE): BOOL;
export function LookupAccountSidLocalA (Sid: PSID, Name: LPSTR, cchName: LPDWORD, ReferencedDomainName: LPSTR, cchReferencedDomainName: LPDWORD, peUse: PSID_NAME_USE): BOOL;
export function LookupAccountSidLocalW (Sid: PSID, Name: LPWSTR, cchName: LPDWORD, ReferencedDomainName: LPWSTR, cchReferencedDomainName: LPDWORD, peUse: PSID_NAME_USE): BOOL;
export function LookupAccountSidLocal (Sid: PSID, Name: LPWSTR, cchName: LPDWORD, ReferencedDomainName: LPWSTR, cchReferencedDomainName: LPDWORD, peUse: PSID_NAME_USE): BOOL;
export function LookupPrivilegeValueA (lpSystemName: LPCSTR, lpName: LPCSTR, lpLuid: PLUID): BOOL;
export function LookupPrivilegeValueW (lpSystemName: LPCWSTR, lpName: LPCWSTR, lpLuid: PLUID): BOOL;
export function LookupPrivilegeValue (lpSystemName: LPCWSTR, lpName: LPCWSTR, lpLuid: PLUID): BOOL;
export function LookupPrivilegeNameA (lpSystemName: LPCSTR, lpLuid: PLUID, lpName: LPSTR, cchName: LPDWORD): BOOL;
export function LookupPrivilegeNameW (lpSystemName: LPCWSTR, lpLuid: PLUID, lpName: LPWSTR, cchName: LPDWORD): BOOL;
export function LookupPrivilegeName (lpSystemName: LPCWSTR, lpLuid: PLUID, lpName: LPWSTR, cchName: LPDWORD): BOOL;
export function LookupPrivilegeDisplayNameA (lpSystemName: LPCSTR, lpName: LPCSTR, lpDisplayName: LPSTR, cchDisplayName: LPDWORD, lpLanguageId: LPDWORD): BOOL;
export function LookupPrivilegeDisplayNameW (lpSystemName: LPCWSTR, lpName: LPCWSTR, lpDisplayName: LPWSTR, cchDisplayName: LPDWORD, lpLanguageId: LPDWORD): BOOL;
export function LookupPrivilegeDisplayName (lpSystemName: LPCWSTR, lpName: LPCWSTR, lpDisplayName: LPWSTR, cchDisplayName: LPDWORD, lpLanguageId: LPDWORD): BOOL;
export function BuildCommDCBA (lpDef: LPCSTR, lpDCB: LPDCB): BOOL;
export function BuildCommDCBW (lpDef: LPCWSTR, lpDCB: LPDCB): BOOL;
export function BuildCommDCB (lpDef: LPCWSTR, lpDCB: LPDCB): BOOL;
export function BuildCommDCBAndTimeoutsA (lpDef: LPCSTR, lpDCB: LPDCB, lpCommTimeouts: LPCOMMTIMEOUTS): BOOL;
export function BuildCommDCBAndTimeoutsW (lpDef: LPCWSTR, lpDCB: LPDCB, lpCommTimeouts: LPCOMMTIMEOUTS): BOOL;
export function BuildCommDCBAndTimeouts (lpDef: LPCWSTR, lpDCB: LPDCB, lpCommTimeouts: LPCOMMTIMEOUTS): BOOL;
export function CommConfigDialogA (lpszName: LPCSTR, hWnd: HWND, lpCC: LPCOMMCONFIG): BOOL;
export function CommConfigDialogW (lpszName: LPCWSTR, hWnd: HWND, lpCC: LPCOMMCONFIG): BOOL;
export function CommConfigDialog (lpszName: LPCWSTR, hWnd: HWND, lpCC: LPCOMMCONFIG): BOOL;
export function GetDefaultCommConfigA (lpszName: LPCSTR, lpCC: LPCOMMCONFIG, lpdwSize: LPDWORD): BOOL;
export function GetDefaultCommConfigW (lpszName: LPCWSTR, lpCC: LPCOMMCONFIG, lpdwSize: LPDWORD): BOOL;
export function GetDefaultCommConfig (lpszName: LPCWSTR, lpCC: LPCOMMCONFIG, lpdwSize: LPDWORD): BOOL;
export function SetDefaultCommConfigA (lpszName: LPCSTR, lpCC: LPCOMMCONFIG, dwSize: DWORD): BOOL;
export function SetDefaultCommConfigW (lpszName: LPCWSTR, lpCC: LPCOMMCONFIG, dwSize: DWORD): BOOL;
export function SetDefaultCommConfig (lpszName: LPCWSTR, lpCC: LPCOMMCONFIG, dwSize: DWORD): BOOL;
export function GetComputerNameA (lpBuffer: LPSTR, nSize: LPDWORD): BOOL;
export function GetComputerNameW (lpBuffer: LPWSTR, nSize: LPDWORD): BOOL;
export function GetComputerName (lpBuffer: LPWSTR, nSize: LPDWORD): BOOL;
export function DnsHostnameToComputerNameA (Hostname: LPCSTR, ComputerName: LPSTR, nSize: LPDWORD): BOOL;
export function DnsHostnameToComputerNameW (Hostname: LPCWSTR, ComputerName: LPWSTR, nSize: LPDWORD): BOOL;
export function DnsHostnameToComputerName (Hostname: LPCWSTR, ComputerName: LPWSTR, nSize: LPDWORD): BOOL;
export function GetUserNameA (lpBuffer: LPSTR, pcbBuffer: LPDWORD): BOOL;
export function GetUserNameW (lpBuffer: LPWSTR, pcbBuffer: LPDWORD): BOOL;
export function GetUserName (lpBuffer: LPWSTR, pcbBuffer: LPDWORD): BOOL;
export function LogonUserA (lpszUsername: LPCSTR, lpszDomain: LPCSTR, lpszPassword: LPCSTR, dwLogonType: DWORD, dwLogonProvider: DWORD, phToken: PHANDLE): BOOL;
export function LogonUserW (lpszUsername: LPCWSTR, lpszDomain: LPCWSTR, lpszPassword: LPCWSTR, dwLogonType: DWORD, dwLogonProvider: DWORD, phToken: PHANDLE): BOOL;
export function LogonUser (lpszUsername: LPCWSTR, lpszDomain: LPCWSTR, lpszPassword: LPCWSTR, dwLogonType: DWORD, dwLogonProvider: DWORD, phToken: PHANDLE): BOOL;
export function CreateProcessWithLogonW (lpUsername: LPCWSTR, lpDomain: LPCWSTR, lpPassword: LPCWSTR, dwLogonFlags: DWORD, lpApplicationName: LPCWSTR, lpCommandLine: LPWSTR, dwCreationFlags: DWORD, lpEnvironment: LPVOID, lpCurrentDirectory: LPCWSTR, lpStartupInfo: LPSTARTUPINFOW, lpProcessInformation: LPPROCESS_INFORMATION): BOOL;
export function CreateProcessWithLogon (lpUsername: LPCWSTR, lpDomain: LPCWSTR, lpPassword: LPCWSTR, dwLogonFlags: DWORD, lpApplicationName: LPCWSTR, lpCommandLine: LPWSTR, dwCreationFlags: DWORD, lpEnvironment: LPVOID, lpCurrentDirectory: LPCWSTR, lpStartupInfo: LPSTARTUPINFOW, lpProcessInformation: LPPROCESS_INFORMATION): BOOL;
export function CreateProcessWithTokenW (hToken: HANDLE, dwLogonFlags: DWORD, lpApplicationName: LPCWSTR, lpCommandLine: LPWSTR, dwCreationFlags: DWORD, lpEnvironment: LPVOID, lpCurrentDirectory: LPCWSTR, lpStartupInfo: LPSTARTUPINFOW, lpProcessInformation: LPPROCESS_INFORMATION): BOOL;
export function CreateProcessWithToken (hToken: HANDLE, dwLogonFlags: DWORD, lpApplicationName: LPCWSTR, lpCommandLine: LPWSTR, dwCreationFlags: DWORD, lpEnvironment: LPVOID, lpCurrentDirectory: LPCWSTR, lpStartupInfo: LPSTARTUPINFOW, lpProcessInformation: LPPROCESS_INFORMATION): BOOL;
export function IsTokenUntrusted (TokenHandle: HANDLE): BOOL;
export function RegisterWaitForSingleObject (phNewWaitObject: PHANDLE, hObject: HANDLE, Callback: WAITORTIMERCALLBACK, Context: PVOID, dwMilliseconds: ULONG, dwFlags: ULONG): BOOL;
export function UnregisterWait (WaitHandle: HANDLE): BOOL;
export function BindIoCompletionCallback (FileHandle: HANDLE, Function: LPOVERLAPPED_COMPLETION_ROUTINE, Flags: ULONG): BOOL;
export function SetTimerQueueTimer (TimerQueue: HANDLE, Callback: WAITORTIMERCALLBACK, Parameter: PVOID, DueTime: DWORD, Period: DWORD, PreferIo: BOOL): HANDLE;
export function CancelTimerQueueTimer (TimerQueue: HANDLE, Timer: HANDLE): BOOL;
export function DeleteTimerQueue (TimerQueue: HANDLE): BOOL;
export function CreatePrivateNamespaceA (lpPrivateNamespaceAttributes: LPSECURITY_ATTRIBUTES, lpBoundaryDescriptor: LPVOID, lpAliasPrefix: LPCSTR): HANDLE;
export function OpenPrivateNamespaceA (lpBoundaryDescriptor: LPVOID, lpAliasPrefix: LPCSTR): HANDLE;
export function CreateBoundaryDescriptorA (Name: LPCSTR, Flags: ULONG): HANDLE;
export function AddIntegrityLabelToBoundaryDescriptor (BoundaryDescriptor: "HANDLE *", IntegrityLabel: PSID): BOOL;
export function GetCurrentHwProfileA (lpHwProfileInfo: LPHW_PROFILE_INFOA): BOOL;
export function GetCurrentHwProfileW (lpHwProfileInfo: LPHW_PROFILE_INFOW): BOOL;
export function GetCurrentHwProfile (lpHwProfileInfo: LPHW_PROFILE_INFOW): BOOL;
export function VerifyVersionInfoA (lpVersionInformation: LPOSVERSIONINFOEXA, dwTypeMask: DWORD, dwlConditionMask: DWORDLONG): BOOL;
export function VerifyVersionInfoW (lpVersionInformation: LPOSVERSIONINFOEXW, dwTypeMask: DWORD, dwlConditionMask: DWORDLONG): BOOL;
export function VerifyVersionInfo (lpVersionInformation: LPOSVERSIONINFOEXW, dwTypeMask: DWORD, dwlConditionMask: DWORDLONG): BOOL;
export function SetSystemPowerState (fSuspend: BOOL, fForce: BOOL): BOOL;
export function GetSystemPowerStatus (lpSystemPowerStatus: LPSYSTEM_POWER_STATUS): BOOL;
export function CreateJobObjectA (lpJobAttributes: LPSECURITY_ATTRIBUTES, lpName: LPCSTR): HANDLE;
export function OpenJobObjectA (dwDesiredAccess: DWORD, bInheritHandle: BOOL, lpName: LPCSTR): HANDLE;
export function CreateJobSet (NumJob: ULONG, UserJobSet: PJOB_SET_ARRAY, Flags: ULONG): BOOL;
export function FindFirstVolumeA (lpszVolumeName: LPSTR, cchBufferLength: DWORD): HANDLE;
export function FindNextVolumeA (hFindVolume: HANDLE, lpszVolumeName: LPSTR, cchBufferLength: DWORD): BOOL;
export function FindFirstVolumeMountPointA (lpszRootPathName: LPCSTR, lpszVolumeMountPoint: LPSTR, cchBufferLength: DWORD): HANDLE;
export function FindFirstVolumeMountPointW (lpszRootPathName: LPCWSTR, lpszVolumeMountPoint: LPWSTR, cchBufferLength: DWORD): HANDLE;
export function FindFirstVolumeMountPoint (lpszRootPathName: LPCWSTR, lpszVolumeMountPoint: LPWSTR, cchBufferLength: DWORD): HANDLE;
export function FindNextVolumeMountPointA (hFindVolumeMountPoint: HANDLE, lpszVolumeMountPoint: LPSTR, cchBufferLength: DWORD): BOOL;
export function FindNextVolumeMountPointW (hFindVolumeMountPoint: HANDLE, lpszVolumeMountPoint: LPWSTR, cchBufferLength: DWORD): BOOL;
export function FindNextVolumeMountPoint (hFindVolumeMountPoint: HANDLE, lpszVolumeMountPoint: LPWSTR, cchBufferLength: DWORD): BOOL;
export function FindVolumeMountPointClose (hFindVolumeMountPoint: HANDLE): BOOL;
export function SetVolumeMountPointA (lpszVolumeMountPoint: LPCSTR, lpszVolumeName: LPCSTR): BOOL;
export function SetVolumeMountPointW (lpszVolumeMountPoint: LPCWSTR, lpszVolumeName: LPCWSTR): BOOL;
export function SetVolumeMountPoint (lpszVolumeMountPoint: LPCWSTR, lpszVolumeName: LPCWSTR): BOOL;
export function DeleteVolumeMountPointA (lpszVolumeMountPoint: LPCSTR): BOOL;
export function GetVolumeNameForVolumeMountPointA (lpszVolumeMountPoint: LPCSTR, lpszVolumeName: LPSTR, cchBufferLength: DWORD): BOOL;
export function GetVolumePathNameA (lpszFileName: LPCSTR, lpszVolumePathName: LPSTR, cchBufferLength: DWORD): BOOL;
export function GetVolumePathNamesForVolumeNameA (lpszVolumeName: LPCSTR, lpszVolumePathNames: LPCH, cchBufferLength: DWORD, lpcchReturnLength: PDWORD): BOOL;
export function CreateActCtxA (pActCtx: PCACTCTXA): HANDLE;
export function CreateActCtxW (pActCtx: PCACTCTXW): HANDLE;
export function CreateActCtx (pActCtx: PCACTCTXW): HANDLE;
export function AddRefActCtx (hActCtx: HANDLE): VOID;
export function ReleaseActCtx (hActCtx: HANDLE): VOID;
export function ZombifyActCtx (hActCtx: HANDLE): BOOL;
export function ActivateActCtx (hActCtx: HANDLE, lpCookie: "ULONG_PTR *"): BOOL;
export function DeactivateActCtx (dwFlags: DWORD, ulCookie: ULONG_PTR): BOOL;
export function GetCurrentActCtx (lphActCtx: "HANDLE *"): BOOL;
export function FindActCtxSectionStringA (dwFlags: DWORD, lpExtensionGuid: "GUID *", ulSectionId: ULONG, lpStringToFind: LPCSTR, ReturnedData: PACTCTX_SECTION_KEYED_DATA): BOOL;
export function FindActCtxSectionStringW (dwFlags: DWORD, lpExtensionGuid: "GUID *", ulSectionId: ULONG, lpStringToFind: LPCWSTR, ReturnedData: PACTCTX_SECTION_KEYED_DATA): BOOL;
export function FindActCtxSectionString (dwFlags: DWORD, lpExtensionGuid: "GUID *", ulSectionId: ULONG, lpStringToFind: LPCWSTR, ReturnedData: PACTCTX_SECTION_KEYED_DATA): BOOL;
export function FindActCtxSectionGuid (dwFlags: DWORD, lpExtensionGuid: "GUID *", ulSectionId: ULONG, lpGuidToFind: "GUID *", ReturnedData: PACTCTX_SECTION_KEYED_DATA): BOOL;
export function WTSGetActiveConsoleSessionId (): DWORD;
export function WTSGetServiceSessionId (): DWORD;
export function WTSIsServerContainer (): BOOLEAN;
export function GetActiveProcessorGroupCount (): WORD;
export function GetMaximumProcessorGroupCount (): WORD;
export function GetActiveProcessorCount (GroupNumber: WORD): DWORD;
export function GetMaximumProcessorCount (GroupNumber: WORD): DWORD;
export function GetNumaProcessorNode (Processor: UCHAR, NodeNumber: PUCHAR): BOOL;
export function GetNumaNodeNumberFromHandle (hFile: HANDLE, NodeNumber: PUSHORT): BOOL;
export function GetNumaProcessorNodeEx (Processor: PPROCESSOR_NUMBER, NodeNumber: PUSHORT): BOOL;
export function GetNumaNodeProcessorMask (Node: UCHAR, ProcessorMask: PULONGLONG): BOOL;
export function GetNumaAvailableMemoryNode (Node: UCHAR, AvailableBytes: PULONGLONG): BOOL;
export function GetNumaAvailableMemoryNodeEx (Node: USHORT, AvailableBytes: PULONGLONG): BOOL;
export function GetNumaProximityNode (ProximityId: ULONG, NodeNumber: PUCHAR): BOOL;
export function RegisterApplicationRecoveryCallback (pRecoveyCallback: APPLICATION_RECOVERY_CALLBACK, pvParameter: PVOID, dwPingInterval: DWORD, dwFlags: DWORD): HRESULT;
export function UnregisterApplicationRecoveryCallback (): HRESULT;
export function RegisterApplicationRestart (pwzCommandline: PCWSTR, dwFlags: DWORD): HRESULT;
export function UnregisterApplicationRestart (): HRESULT;
export function GetApplicationRecoveryCallback (hProcess: HANDLE, pRecoveryCallback: "APPLICATION_RECOVERY_CALLBACK*", ppvParameter: "PVOID*", pdwPingInterval: PDWORD, pdwFlags: PDWORD): HRESULT;
export function GetApplicationRestartSettings (hProcess: HANDLE, pwzCommandline: PWSTR, pcchSize: PDWORD, pdwFlags: PDWORD): HRESULT;
export function ApplicationRecoveryInProgress (pbCancelled: PBOOL): HRESULT;
export function ApplicationRecoveryFinished (bSuccess: BOOL): VOID;
export function GetFileInformationByHandleEx (hFile: HANDLE, FileInformationClass: FILE_INFO_BY_HANDLE_CLASS, lpFileInformation: LPVOID, dwBufferSize: DWORD): BOOL;
export function OpenFileById (hVolumeHint: HANDLE, lpFileId: LPFILE_ID_DESCRIPTOR, dwDesiredAccess: DWORD, dwShareMode: DWORD, lpSecurityAttributes: LPSECURITY_ATTRIBUTES, dwFlagsAndAttributes: DWORD): HANDLE;
export function CreateSymbolicLinkA (lpSymlinkFileName: LPCSTR, lpTargetFileName: LPCSTR, dwFlags: DWORD): BOOLEAN;
export function CreateSymbolicLinkW (lpSymlinkFileName: LPCWSTR, lpTargetFileName: LPCWSTR, dwFlags: DWORD): BOOLEAN;
export function CreateSymbolicLink (lpSymlinkFileName: LPCWSTR, lpTargetFileName: LPCWSTR, dwFlags: DWORD): BOOLEAN;
export function CreateSymbolicLinkTransactedA (lpSymlinkFileName: LPCSTR, lpTargetFileName: LPCSTR, dwFlags: DWORD, hTransaction: HANDLE): BOOLEAN;
export function CreateSymbolicLinkTransactedW (lpSymlinkFileName: LPCWSTR, lpTargetFileName: LPCWSTR, dwFlags: DWORD, hTransaction: HANDLE): BOOLEAN;
export function CreateSymbolicLinkTransacted (lpSymlinkFileName: LPCWSTR, lpTargetFileName: LPCWSTR, dwFlags: DWORD, hTransaction: HANDLE): BOOLEAN;
export function ReplacePartitionUnit (TargetPartition: PWSTR, SparePartition: PWSTR, Flags: ULONG): BOOL;
export function AddSecureMemoryCacheCallback (pfnCallBack: PSECURE_MEMORY_CACHE_CALLBACK): BOOL;
export function RemoveSecureMemoryCacheCallback (pfnCallBack: PSECURE_MEMORY_CACHE_CALLBACK): BOOL;
export function CopyContext (Destination: PCONTEXT, ContextFlags: DWORD, Source: PCONTEXT): BOOL;
export function InitializeContext (Buffer: PVOID, ContextFlags: DWORD, Context: "PCONTEXT*", ContextLength: PDWORD): BOOL;
export function InitializeContext2 (Buffer: PVOID, ContextFlags: DWORD, Context: "PCONTEXT*", ContextLength: PDWORD, XStateCompactionMask: ULONG64): BOOL;
export function GetEnabledXStateFeatures (): DWORD64;
export function GetXStateFeaturesMask (Context: PCONTEXT, FeatureMask: PDWORD64): BOOL;
export function LocateXStateFeature (Context: PCONTEXT, FeatureId: DWORD, Length: PDWORD): PVOID;
export function SetXStateFeaturesMask (Context: PCONTEXT, FeatureMask: DWORD64): BOOL;
export function EnableThreadProfiling (ThreadHandle: HANDLE, Flags: DWORD, HardwareCounters: DWORD64, PerformanceDataHandle: "HANDLE *"): DWORD;
export function DisableThreadProfiling (PerformanceDataHandle: HANDLE): DWORD;
export function QueryThreadProfiling (ThreadHandle: HANDLE, Enabled: PBOOLEAN): DWORD;
export function ReadThreadProfilingData (PerformanceDataHandle: HANDLE, Flags: DWORD, PerformanceData: PPERFORMANCE_DATA): DWORD;
export function RaiseCustomSystemEventTrigger (CustomSystemEventTriggerConfig: PCUSTOM_SYSTEM_EVENT_TRIGGER_CONFIG): DWORD;

import koffi from "koffi";

// basic
import {pointer, out, inout} from "../../types.js";
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


const lib = koffi.load("kernel32.dll");
import {createAutoLoader} from "../../internals/loader.js";

export function GetFreeSpace () {};
GetFreeSpace = createAutoLoader(lib, "GetFreeSpace", DWORD /* DWORD */, [
	UINT, /* in UINT  */
], f => GetFreeSpace = f);

export function GlobalAlloc () {};
GlobalAlloc = createAutoLoader(lib, "GlobalAlloc", HGLOBAL /* HGLOBAL */, [
	UINT,   /* in UINT   uFlags  */
	SIZE_T, /* in SIZE_T dwBytes */
], f => GlobalAlloc = f);

export function GlobalReAlloc () {};
GlobalReAlloc = createAutoLoader(lib, "GlobalReAlloc", HGLOBAL /* HGLOBAL */, [
	HGLOBAL, /*    HGLOBAL hMem    */
	SIZE_T,  /* in SIZE_T  dwBytes */
	UINT,    /* in UINT    uFlags  */
], f => GlobalReAlloc = f);

export function GlobalSize () {};
GlobalSize = createAutoLoader(lib, "GlobalSize", SIZE_T /* SIZE_T */, [
	HGLOBAL, /* in HGLOBAL hMem */
], f => GlobalSize = f);

export function GlobalUnlock () {};
GlobalUnlock = createAutoLoader(lib, "GlobalUnlock", BOOL /* BOOL */, [
	HGLOBAL, /* in HGLOBAL hMem */
], f => GlobalUnlock = f);

export function GlobalLock () {};
GlobalLock = createAutoLoader(lib, "GlobalLock", LPVOID /* LPVOID */, [
	HGLOBAL, /* in HGLOBAL hMem */
], f => GlobalLock = f);

export function GlobalFlags () {};
GlobalFlags = createAutoLoader(lib, "GlobalFlags", UINT /* UINT */, [
	HGLOBAL, /* in HGLOBAL hMem */
], f => GlobalFlags = f);

export function GlobalHandle () {};
GlobalHandle = createAutoLoader(lib, "GlobalHandle", HGLOBAL /* HGLOBAL */, [
	LPCVOID, /* in LPCVOID pMem */
], f => GlobalHandle = f);

export function GlobalFree () {};
GlobalFree = createAutoLoader(lib, "GlobalFree", HGLOBAL /* HGLOBAL */, [
	HGLOBAL, /*  opt_ HGLOBAL hMem */
], f => GlobalFree = f);

export function GlobalCompact () {};
GlobalCompact = createAutoLoader(lib, "GlobalCompact", SIZE_T /* SIZE_T */, [
	DWORD, /* in DWORD dwMinFree */
], f => GlobalCompact = f);

export function GlobalFix () {};
GlobalFix = createAutoLoader(lib, "GlobalFix", VOID /* VOID */, [
	HGLOBAL, /* in HGLOBAL hMem */
], f => GlobalFix = f);

export function GlobalUnfix () {};
GlobalUnfix = createAutoLoader(lib, "GlobalUnfix", VOID /* VOID */, [
	HGLOBAL, /* in HGLOBAL hMem */
], f => GlobalUnfix = f);

export function GlobalWire () {};
GlobalWire = createAutoLoader(lib, "GlobalWire", LPVOID /* LPVOID */, [
	HGLOBAL, /* in HGLOBAL hMem */
], f => GlobalWire = f);

export function GlobalUnWire () {};
GlobalUnWire = createAutoLoader(lib, "GlobalUnWire", BOOL /* BOOL */, [
	HGLOBAL, /* in HGLOBAL hMem */
], f => GlobalUnWire = f);

export function GlobalMemoryStatus () {};
GlobalMemoryStatus = createAutoLoader(lib, "GlobalMemoryStatus", VOID /* VOID */, [
	out(LPMEMORYSTATUS), /* out LPMEMORYSTATUS lpBuffer */
], f => GlobalMemoryStatus = f);

export function LocalAlloc () {};
LocalAlloc = createAutoLoader(lib, "LocalAlloc", HLOCAL /* HLOCAL */, [
	UINT,   /* in UINT   uFlags */
	SIZE_T, /* in SIZE_T uBytes */
], f => LocalAlloc = f);

export function LocalReAlloc () {};
LocalReAlloc = createAutoLoader(lib, "LocalReAlloc", HLOCAL /* HLOCAL */, [
	HLOCAL, /*    opt_ HLOCAL hMem   */
	SIZE_T,      /* in SIZE_T      uBytes */
	UINT,        /* in UINT        uFlags */
], f => LocalReAlloc = f);

export function LocalLock () {};
LocalLock = createAutoLoader(lib, "LocalLock", LPVOID /* LPVOID */, [
	HLOCAL, /* in HLOCAL hMem */
], f => LocalLock = f);

export function LocalHandle () {};
LocalHandle = createAutoLoader(lib, "LocalHandle", HLOCAL /* HLOCAL */, [
	LPCVOID, /* in LPCVOID pMem */
], f => LocalHandle = f);

export function LocalUnlock () {};
LocalUnlock = createAutoLoader(lib, "LocalUnlock", BOOL /* BOOL */, [
	HLOCAL, /* in HLOCAL hMem */
], f => LocalUnlock = f);

export function LocalSize () {};
LocalSize = createAutoLoader(lib, "LocalSize", SIZE_T /* SIZE_T */, [
	HLOCAL, /* in HLOCAL hMem */
], f => LocalSize = f);

export function LocalFlags () {};
LocalFlags = createAutoLoader(lib, "LocalFlags", UINT /* UINT */, [
	HLOCAL, /* in HLOCAL hMem */
], f => LocalFlags = f);

export function LocalFree () {};
LocalFree = createAutoLoader(lib, "LocalFree", HLOCAL /* HLOCAL */, [
	HLOCAL, /*  opt_ HLOCAL hMem */
], f => LocalFree = f);

export function LocalShrink () {};
LocalShrink = createAutoLoader(lib, "LocalShrink", SIZE_T /* SIZE_T */, [
	HLOCAL, /* in HLOCAL hMem      */
	UINT,   /* in UINT   cbNewSize */
], f => LocalShrink = f);

export function LocalCompact () {};
LocalCompact = createAutoLoader(lib, "LocalCompact", SIZE_T /* SIZE_T */, [
	UINT, /* in UINT uMinFree */
], f => LocalCompact = f);

export function GetBinaryTypeA () {};
GetBinaryTypeA = createAutoLoader(lib, "GetBinaryTypeA", BOOL /* BOOL */, [
	LPCSTR,       /* in  LPCSTR  lpApplicationName */
	out(LPDWORD), /* out LPDWORD lpBinaryType      */
], f => GetBinaryTypeA = f);

export function GetBinaryTypeW () {};
GetBinaryTypeW = createAutoLoader(lib, "GetBinaryTypeW", BOOL /* BOOL */, [
	LPCWSTR,      /* in  LPCWSTR lpApplicationName */
	out(LPDWORD), /* out LPDWORD lpBinaryType      */
], f => GetBinaryTypeW = f);
export {GetBinaryTypeW as GetBinaryType};

export function GetShortPathNameA () {};
GetShortPathNameA = createAutoLoader(lib, "GetShortPathNameA", DWORD /* DWORD */, [
	LPCSTR, /* in LPCSTR lpszLongPath  */
	LPSTR,  /*    LPSTR  lpszShortPath */
	DWORD,  /* in DWORD  cchBuffer     */
], f => GetShortPathNameA = f);

export function GetLongPathNameTransactedA () {};
GetLongPathNameTransactedA = createAutoLoader(lib, "GetLongPathNameTransactedA", DWORD /* DWORD */, [
	LPCSTR, /* in LPCSTR lpszShortPath */
	LPSTR,  /*    LPSTR  lpszLongPath  */
	DWORD,  /* in DWORD  cchBuffer     */
	HANDLE, /* in HANDLE hTransaction  */
], f => GetLongPathNameTransactedA = f);

export function GetLongPathNameTransactedW () {};
GetLongPathNameTransactedW = createAutoLoader(lib, "GetLongPathNameTransactedW", DWORD /* DWORD */, [
	LPCWSTR, /* in LPCWSTR lpszShortPath */
	LPWSTR,  /*    LPWSTR  lpszLongPath  */
	DWORD,   /* in DWORD   cchBuffer     */
	HANDLE,  /* in HANDLE  hTransaction  */
], f => GetLongPathNameTransactedW = f);
export {GetLongPathNameTransactedW as GetLongPathNameTransacted};

export function GetProcessAffinityMask () {};
GetProcessAffinityMask = createAutoLoader(lib, "GetProcessAffinityMask", BOOL /* BOOL */, [
	HANDLE,          /* in  HANDLE     hProcess              */
	out(PDWORD_PTR), /* out PDWORD_PTR lpProcessAffinityMask */
	out(PDWORD_PTR), /* out PDWORD_PTR lpSystemAffinityMask  */
], f => GetProcessAffinityMask = f);

export function SetProcessAffinityMask () {};
SetProcessAffinityMask = createAutoLoader(lib, "SetProcessAffinityMask", BOOL /* BOOL */, [
	HANDLE,    /* in HANDLE    hProcess              */
	DWORD_PTR, /* in DWORD_PTR dwProcessAffinityMask */
], f => SetProcessAffinityMask = f);

export function GetProcessIoCounters () {};
GetProcessIoCounters = createAutoLoader(lib, "GetProcessIoCounters", BOOL /* BOOL */, [
	HANDLE,            /* in  HANDLE       hProcess     */
	out(PIO_COUNTERS), /* out PIO_COUNTERS lpIoCounters */
], f => GetProcessIoCounters = f);

export function GetProcessWorkingSetSize () {};
GetProcessWorkingSetSize = createAutoLoader(lib, "GetProcessWorkingSetSize", BOOL /* BOOL */, [
	HANDLE,       /* in  HANDLE  hProcess                */
	out(PSIZE_T), /* out PSIZE_T lpMinimumWorkingSetSize */
	out(PSIZE_T), /* out PSIZE_T lpMaximumWorkingSetSize */
], f => GetProcessWorkingSetSize = f);

export function SetProcessWorkingSetSize () {};
SetProcessWorkingSetSize = createAutoLoader(lib, "SetProcessWorkingSetSize", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hProcess                */
	SIZE_T, /* in SIZE_T dwMinimumWorkingSetSize */
	SIZE_T, /* in SIZE_T dwMaximumWorkingSetSize */
], f => SetProcessWorkingSetSize = f);

export function FatalExit () {};
FatalExit = createAutoLoader(lib, "FatalExit", VOID /* VOID */, [
	int, /* in int ExitCode */
], f => FatalExit = f);

export function SetEnvironmentStringsA () {};
SetEnvironmentStringsA = createAutoLoader(lib, "SetEnvironmentStringsA", BOOL /* BOOL */, [
	LPCH, /* in LPCH NewEnvironment */
], f => SetEnvironmentStringsA = f);

export function SwitchToFiber () {};
SwitchToFiber = createAutoLoader(lib, "SwitchToFiber", VOID /* VOID */, [
	LPVOID, /* in LPVOID lpFiber */
], f => SwitchToFiber = f);

export function DeleteFiber () {};
DeleteFiber = createAutoLoader(lib, "DeleteFiber", VOID /* VOID */, [
	LPVOID, /* in LPVOID lpFiber */
], f => DeleteFiber = f);

export function ConvertFiberToThread () {};
ConvertFiberToThread = createAutoLoader(lib, "ConvertFiberToThread", BOOL /* BOOL */, [
	/* void */
], f => ConvertFiberToThread = f);

export function CreateFiberEx () {};
CreateFiberEx = createAutoLoader(lib, "CreateFiberEx", LPVOID /* LPVOID */, [
	SIZE_T,                /* in     SIZE_T                dwStackCommitSize  */
	SIZE_T,                /* in     SIZE_T                dwStackReserveSize */
	DWORD,                 /* in     DWORD                 dwFlags            */
	LPFIBER_START_ROUTINE, /* in     LPFIBER_START_ROUTINE lpStartAddress     */
	LPVOID,                /* in opt LPVOID                lpParameter        */
], f => CreateFiberEx = f);

export function ConvertThreadToFiberEx () {};
ConvertThreadToFiberEx = createAutoLoader(lib, "ConvertThreadToFiberEx", LPVOID /* LPVOID */, [
	LPVOID, /* in opt LPVOID lpParameter */
	DWORD,  /* in     DWORD  dwFlags     */
], f => ConvertThreadToFiberEx = f);

export function CreateFiber () {};
CreateFiber = createAutoLoader(lib, "CreateFiber", LPVOID /* LPVOID */, [
	SIZE_T,                /* in     SIZE_T                dwStackSize    */
	LPFIBER_START_ROUTINE, /* in     LPFIBER_START_ROUTINE lpStartAddress */
	LPVOID,                /* in opt LPVOID                lpParameter    */
], f => CreateFiber = f);

export function ConvertThreadToFiber () {};
ConvertThreadToFiber = createAutoLoader(lib, "ConvertThreadToFiber", LPVOID /* LPVOID */, [
	LPVOID, /* in opt LPVOID lpParameter */
], f => ConvertThreadToFiber = f);

export function CreateUmsCompletionList () {};
CreateUmsCompletionList = createAutoLoader(lib, "CreateUmsCompletionList", BOOL /* BOOL */, [
	pointer(PUMS_COMPLETION_LIST), /*  PUMS_COMPLETION_LIST* UmsCompletionList */
], f => CreateUmsCompletionList = f);

export function DequeueUmsCompletionListItems () {};
DequeueUmsCompletionListItems = createAutoLoader(lib, "DequeueUmsCompletionListItems", BOOL /* BOOL */, [
	PUMS_COMPLETION_LIST,       /* in  PUMS_COMPLETION_LIST UmsCompletionList */
	DWORD,                      /* in  DWORD                WaitTimeOut       */
	out(pointer(PUMS_CONTEXT)), /* out PUMS_CONTEXT*        UmsThreadList     */
], f => DequeueUmsCompletionListItems = f);

export function GetUmsCompletionListEvent () {};
GetUmsCompletionListEvent = createAutoLoader(lib, "GetUmsCompletionListEvent", BOOL /* BOOL */, [
	PUMS_COMPLETION_LIST, /* in     PUMS_COMPLETION_LIST UmsCompletionList  */
	inout(PHANDLE),       /* in out PHANDLE              UmsCompletionEvent */
], f => GetUmsCompletionListEvent = f);

export function ExecuteUmsThread () {};
ExecuteUmsThread = createAutoLoader(lib, "ExecuteUmsThread", BOOL /* BOOL */, [
	inout(PUMS_CONTEXT), /* in out PUMS_CONTEXT UmsThread */
], f => ExecuteUmsThread = f);

export function UmsThreadYield () {};
UmsThreadYield = createAutoLoader(lib, "UmsThreadYield", BOOL /* BOOL */, [
	PVOID, /* in PVOID SchedulerParam */
], f => UmsThreadYield = f);

export function DeleteUmsCompletionList () {};
DeleteUmsCompletionList = createAutoLoader(lib, "DeleteUmsCompletionList", BOOL /* BOOL */, [
	PUMS_COMPLETION_LIST, /* in PUMS_COMPLETION_LIST UmsCompletionList */
], f => DeleteUmsCompletionList = f);

export function GetCurrentUmsThread () {};
GetCurrentUmsThread = createAutoLoader(lib, "GetCurrentUmsThread", PUMS_CONTEXT /* PUMS_CONTEXT */, [
	/* void */
], f => GetCurrentUmsThread = f);

export function GetNextUmsListItem () {};
GetNextUmsListItem = createAutoLoader(lib, "GetNextUmsListItem", PUMS_CONTEXT /* PUMS_CONTEXT */, [
	inout(PUMS_CONTEXT), /* in out PUMS_CONTEXT UmsContext */
], f => GetNextUmsListItem = f);

export function QueryUmsThreadInformation () {};
QueryUmsThreadInformation = createAutoLoader(lib, "QueryUmsThreadInformation", BOOL /* BOOL */, [
	PUMS_CONTEXT,          /* in      PUMS_CONTEXT          UmsThread                  */
	UMS_THREAD_INFO_CLASS, /* in      UMS_THREAD_INFO_CLASS UmsThreadInfoClass         */
	PVOID,                 /*         PVOID                 UmsThreadInformation       */
	ULONG,                 /* in      ULONG                 UmsThreadInformationLength */
	out(PULONG),           /* out opt PULONG                ReturnLength               */
], f => QueryUmsThreadInformation = f);

export function SetUmsThreadInformation () {};
SetUmsThreadInformation = createAutoLoader(lib, "SetUmsThreadInformation", BOOL /* BOOL */, [
	PUMS_CONTEXT,          /* in PUMS_CONTEXT          UmsThread                  */
	UMS_THREAD_INFO_CLASS, /* in UMS_THREAD_INFO_CLASS UmsThreadInfoClass         */
	PVOID,                 /* in PVOID                 UmsThreadInformation       */
	ULONG,                 /* in ULONG                 UmsThreadInformationLength */
], f => SetUmsThreadInformation = f);

export function DeleteUmsThreadContext () {};
DeleteUmsThreadContext = createAutoLoader(lib, "DeleteUmsThreadContext", BOOL /* BOOL */, [
	PUMS_CONTEXT, /* in PUMS_CONTEXT UmsThread */
], f => DeleteUmsThreadContext = f);

export function CreateUmsThreadContext () {};
CreateUmsThreadContext = createAutoLoader(lib, "CreateUmsThreadContext", BOOL /* BOOL */, [
	pointer(PUMS_CONTEXT), /*  PUMS_CONTEXT * lpUmsThread */
], f => CreateUmsThreadContext = f);

export function EnterUmsSchedulingMode () {};
EnterUmsSchedulingMode = createAutoLoader(lib, "EnterUmsSchedulingMode", BOOL /* BOOL */, [
	PUMS_SCHEDULER_STARTUP_INFO, /* in PUMS_SCHEDULER_STARTUP_INFO SchedulerStartupInfo */
], f => EnterUmsSchedulingMode = f);

export function GetUmsSystemThreadInformation () {};
GetUmsSystemThreadInformation = createAutoLoader(lib, "GetUmsSystemThreadInformation", BOOL /* BOOL */, [
	HANDLE,                                /* in     HANDLE                         ThreadHandle     */
	inout(PUMS_SYSTEM_THREAD_INFORMATION), /* in out PUMS_SYSTEM_THREAD_INFORMATION SystemThreadInfo */
], f => GetUmsSystemThreadInformation = f);

export function SetThreadAffinityMask () {};
SetThreadAffinityMask = createAutoLoader(lib, "SetThreadAffinityMask", DWORD_PTR /* DWORD_PTR */, [
	HANDLE,    /* in HANDLE    hThread              */
	DWORD_PTR, /* in DWORD_PTR dwThreadAffinityMask */
], f => SetThreadAffinityMask = f);

export function SetProcessDEPPolicy () {};
SetProcessDEPPolicy = createAutoLoader(lib, "SetProcessDEPPolicy", BOOL /* BOOL */, [
	DWORD, /* in DWORD dwFlags */
], f => SetProcessDEPPolicy = f);

export function GetProcessDEPPolicy () {};
GetProcessDEPPolicy = createAutoLoader(lib, "GetProcessDEPPolicy", BOOL /* BOOL */, [
	HANDLE,       /* in  HANDLE  hProcess    */
	out(LPDWORD), /* out LPDWORD lpFlags     */
	out(PBOOL),   /* out PBOOL   lpPermanent */
], f => GetProcessDEPPolicy = f);

export function RequestWakeupLatency () {};
RequestWakeupLatency = createAutoLoader(lib, "RequestWakeupLatency", BOOL /* BOOL */, [
	LATENCY_TIME, /* in LATENCY_TIME latency */
], f => RequestWakeupLatency = f);

export function IsSystemResumeAutomatic () {};
IsSystemResumeAutomatic = createAutoLoader(lib, "IsSystemResumeAutomatic", BOOL /* BOOL */, [
	/* void */
], f => IsSystemResumeAutomatic = f);

export function GetThreadSelectorEntry () {};
GetThreadSelectorEntry = createAutoLoader(lib, "GetThreadSelectorEntry", BOOL /* BOOL */, [
	HANDLE,           /* in  HANDLE      hThread         */
	DWORD,            /* in  DWORD       dwSelector      */
	out(LPLDT_ENTRY), /* out LPLDT_ENTRY lpSelectorEntry */
], f => GetThreadSelectorEntry = f);

export function SetThreadExecutionState () {};
SetThreadExecutionState = createAutoLoader(lib, "SetThreadExecutionState", EXECUTION_STATE /* EXECUTION_STATE */, [
	EXECUTION_STATE, /* in EXECUTION_STATE esFlags */
], f => SetThreadExecutionState = f);

export function PowerCreateRequest () {};
PowerCreateRequest = createAutoLoader(lib, "PowerCreateRequest", HANDLE /* HANDLE */, [
	PREASON_CONTEXT, /* in PREASON_CONTEXT Context */
], f => PowerCreateRequest = f);

export function PowerSetRequest () {};
PowerSetRequest = createAutoLoader(lib, "PowerSetRequest", BOOL /* BOOL */, [
	HANDLE,             /* in HANDLE             PowerRequest */
	POWER_REQUEST_TYPE, /* in POWER_REQUEST_TYPE RequestType  */
], f => PowerSetRequest = f);

export function PowerClearRequest () {};
PowerClearRequest = createAutoLoader(lib, "PowerClearRequest", BOOL /* BOOL */, [
	HANDLE,             /* in HANDLE             PowerRequest */
	POWER_REQUEST_TYPE, /* in POWER_REQUEST_TYPE RequestType  */
], f => PowerClearRequest = f);

export function RestoreLastError () {};
RestoreLastError = createAutoLoader(lib, "RestoreLastError", VOID /* VOID */, [
	DWORD, /* in DWORD dwErrCode */
], f => RestoreLastError = f);

export function SetFileCompletionNotificationModes () {};
SetFileCompletionNotificationModes = createAutoLoader(lib, "SetFileCompletionNotificationModes", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE FileHandle */
	UCHAR,  /* in UCHAR  Flags      */
], f => SetFileCompletionNotificationModes = f);

export function Wow64GetThreadSelectorEntry () {};
Wow64GetThreadSelectorEntry = createAutoLoader(lib, "Wow64GetThreadSelectorEntry", BOOL /* BOOL */, [
	HANDLE,                /* in  HANDLE           hThread         */
	DWORD,                 /* in  DWORD            dwSelector      */
	out(PWOW64_LDT_ENTRY), /* out PWOW64_LDT_ENTRY lpSelectorEntry */
], f => Wow64GetThreadSelectorEntry = f);

export function DebugSetProcessKillOnExit () {};
DebugSetProcessKillOnExit = createAutoLoader(lib, "DebugSetProcessKillOnExit", BOOL /* BOOL */, [
	BOOL, /* in BOOL KillOnExit */
], f => DebugSetProcessKillOnExit = f);

export function DebugBreakProcess () {};
DebugBreakProcess = createAutoLoader(lib, "DebugBreakProcess", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE Process */
], f => DebugBreakProcess = f);

export function PulseEvent () {};
PulseEvent = createAutoLoader(lib, "PulseEvent", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hEvent */
], f => PulseEvent = f);

export function GlobalDeleteAtom () {};
GlobalDeleteAtom = createAutoLoader(lib, "GlobalDeleteAtom", ATOM /* ATOM */, [
	ATOM, /* in ATOM nAtom */
], f => GlobalDeleteAtom = f);

export function InitAtomTable () {};
InitAtomTable = createAutoLoader(lib, "InitAtomTable", BOOL /* BOOL */, [
	DWORD, /* in DWORD nSize */
], f => InitAtomTable = f);

export function DeleteAtom () {};
DeleteAtom = createAutoLoader(lib, "DeleteAtom", ATOM /* ATOM */, [
	ATOM, /* in ATOM nAtom */
], f => DeleteAtom = f);

export function SetHandleCount () {};
SetHandleCount = createAutoLoader(lib, "SetHandleCount", UINT /* UINT */, [
	UINT, /* in UINT uNumber */
], f => SetHandleCount = f);

export function RequestDeviceWakeup () {};
RequestDeviceWakeup = createAutoLoader(lib, "RequestDeviceWakeup", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hDevice */
], f => RequestDeviceWakeup = f);

export function CancelDeviceWakeupRequest () {};
CancelDeviceWakeupRequest = createAutoLoader(lib, "CancelDeviceWakeupRequest", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hDevice */
], f => CancelDeviceWakeupRequest = f);

export function GetDevicePowerState () {};
GetDevicePowerState = createAutoLoader(lib, "GetDevicePowerState", BOOL /* BOOL */, [
	HANDLE,             /* in  HANDLE hDevice */
	out(pointer(BOOL)), /* out BOOL * pfOn    */
], f => GetDevicePowerState = f);

export function SetMessageWaitingIndicator () {};
SetMessageWaitingIndicator = createAutoLoader(lib, "SetMessageWaitingIndicator", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hMsgIndicator */
	ULONG,  /* in ULONG  ulMsgCount    */
], f => SetMessageWaitingIndicator = f);

export function SetFileShortNameA () {};
SetFileShortNameA = createAutoLoader(lib, "SetFileShortNameA", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hFile       */
	LPCSTR, /* in LPCSTR lpShortName */
], f => SetFileShortNameA = f);

export function SetFileShortNameW () {};
SetFileShortNameW = createAutoLoader(lib, "SetFileShortNameW", BOOL /* BOOL */, [
	HANDLE,  /* in HANDLE  hFile       */
	LPCWSTR, /* in LPCWSTR lpShortName */
], f => SetFileShortNameW = f);
export {SetFileShortNameW as SetFileShortName};

export function LoadModule () {};
LoadModule = createAutoLoader(lib, "LoadModule", DWORD /* DWORD */, [
	LPCSTR, /* in LPCSTR lpModuleName     */
	LPVOID, /* in LPVOID lpParameterBlock */
], f => LoadModule = f);

export function WinExec () {};
WinExec = createAutoLoader(lib, "WinExec", UINT /* UINT */, [
	LPCSTR, /* in LPCSTR lpCmdLine */
	UINT,   /* in UINT   uCmdShow  */
], f => WinExec = f);

export function ClearCommBreak () {};
ClearCommBreak = createAutoLoader(lib, "ClearCommBreak", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hFile */
], f => ClearCommBreak = f);

export function ClearCommError () {};
ClearCommError = createAutoLoader(lib, "ClearCommError", BOOL /* BOOL */, [
	HANDLE,         /* in      HANDLE    hFile    */
	out(LPDWORD),   /* out opt LPDWORD   lpErrors */
	out(LPCOMSTAT), /* out opt LPCOMSTAT lpStat   */
], f => ClearCommError = f);

export function SetupComm () {};
SetupComm = createAutoLoader(lib, "SetupComm", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hFile      */
	DWORD,  /* in DWORD  dwInQueue  */
	DWORD,  /* in DWORD  dwOutQueue */
], f => SetupComm = f);

export function EscapeCommFunction () {};
EscapeCommFunction = createAutoLoader(lib, "EscapeCommFunction", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hFile  */
	DWORD,  /* in DWORD  dwFunc */
], f => EscapeCommFunction = f);

export function GetCommConfig () {};
GetCommConfig = createAutoLoader(lib, "GetCommConfig", BOOL /* BOOL */, [
	HANDLE,         /* in     HANDLE       hCommDev */
	LPCOMMCONFIG,   /*        LPCOMMCONFIG lpCC     */
	inout(LPDWORD), /* in out LPDWORD      lpdwSize */
], f => GetCommConfig = f);

export function GetCommMask () {};
GetCommMask = createAutoLoader(lib, "GetCommMask", BOOL /* BOOL */, [
	HANDLE,       /* in  HANDLE  hFile     */
	out(LPDWORD), /* out LPDWORD lpEvtMask */
], f => GetCommMask = f);

export function GetCommProperties () {};
GetCommProperties = createAutoLoader(lib, "GetCommProperties", BOOL /* BOOL */, [
	HANDLE,            /* in     HANDLE     hFile      */
	inout(LPCOMMPROP), /* in out LPCOMMPROP lpCommProp */
], f => GetCommProperties = f);

export function GetCommModemStatus () {};
GetCommModemStatus = createAutoLoader(lib, "GetCommModemStatus", BOOL /* BOOL */, [
	HANDLE,       /* in  HANDLE  hFile       */
	out(LPDWORD), /* out LPDWORD lpModemStat */
], f => GetCommModemStatus = f);

export function GetCommState () {};
GetCommState = createAutoLoader(lib, "GetCommState", BOOL /* BOOL */, [
	HANDLE,     /* in  HANDLE hFile */
	out(LPDCB), /* out LPDCB  lpDCB */
], f => GetCommState = f);

export function GetCommTimeouts () {};
GetCommTimeouts = createAutoLoader(lib, "GetCommTimeouts", BOOL /* BOOL */, [
	HANDLE,              /* in  HANDLE         hFile          */
	out(LPCOMMTIMEOUTS), /* out LPCOMMTIMEOUTS lpCommTimeouts */
], f => GetCommTimeouts = f);

export function PurgeComm () {};
PurgeComm = createAutoLoader(lib, "PurgeComm", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hFile   */
	DWORD,  /* in DWORD  dwFlags */
], f => PurgeComm = f);

export function SetCommBreak () {};
SetCommBreak = createAutoLoader(lib, "SetCommBreak", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hFile */
], f => SetCommBreak = f);

export function SetCommConfig () {};
SetCommConfig = createAutoLoader(lib, "SetCommConfig", BOOL /* BOOL */, [
	HANDLE,       /* in HANDLE       hCommDev */
	LPCOMMCONFIG, /*    LPCOMMCONFIG lpCC     */
	DWORD,        /* in DWORD        dwSize   */
], f => SetCommConfig = f);

export function SetCommMask () {};
SetCommMask = createAutoLoader(lib, "SetCommMask", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hFile     */
	DWORD,  /* in DWORD  dwEvtMask */
], f => SetCommMask = f);

export function SetCommState () {};
SetCommState = createAutoLoader(lib, "SetCommState", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hFile */
	LPDCB,  /* in LPDCB  lpDCB */
], f => SetCommState = f);

export function SetCommTimeouts () {};
SetCommTimeouts = createAutoLoader(lib, "SetCommTimeouts", BOOL /* BOOL */, [
	HANDLE,         /* in HANDLE         hFile          */
	LPCOMMTIMEOUTS, /* in LPCOMMTIMEOUTS lpCommTimeouts */
], f => SetCommTimeouts = f);

export function TransmitCommChar () {};
TransmitCommChar = createAutoLoader(lib, "TransmitCommChar", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hFile */
	char,   /* in char   cChar */
], f => TransmitCommChar = f);

export function WaitCommEvent () {};
WaitCommEvent = createAutoLoader(lib, "WaitCommEvent", BOOL /* BOOL */, [
	HANDLE,              /* in         HANDLE       hFile        */
	inout(LPDWORD),      /* in out     LPDWORD      lpEvtMask    */
	inout(LPOVERLAPPED), /* in out opt LPOVERLAPPED lpOverlapped */
], f => WaitCommEvent = f);

export function OpenCommPort () {};
OpenCommPort = createAutoLoader(lib, "OpenCommPort", HANDLE /* HANDLE */, [
	ULONG, /* in ULONG uPortNumber          */
	DWORD, /* in DWORD dwDesiredAccess      */
	DWORD, /* in DWORD dwFlagsAndAttributes */
], f => OpenCommPort = f);

export function GetCommPorts () {};
GetCommPorts = createAutoLoader(lib, "GetCommPorts", ULONG /* ULONG */, [
	PULONG,      /*     PULONG lpPortNumbers      */
	ULONG,       /* in  ULONG  uPortNumbersCount  */
	out(PULONG), /* out PULONG puPortNumbersFound */
], f => GetCommPorts = f);

export function SetTapePosition () {};
SetTapePosition = createAutoLoader(lib, "SetTapePosition", DWORD /* DWORD */, [
	HANDLE, /* in HANDLE hDevice          */
	DWORD,  /* in DWORD  dwPositionMethod */
	DWORD,  /* in DWORD  dwPartition      */
	DWORD,  /* in DWORD  dwOffsetLow      */
	DWORD,  /* in DWORD  dwOffsetHigh     */
	BOOL,   /* in BOOL   bImmediate       */
], f => SetTapePosition = f);

export function GetTapePosition () {};
GetTapePosition = createAutoLoader(lib, "GetTapePosition", DWORD /* DWORD */, [
	HANDLE,       /* in  HANDLE  hDevice        */
	DWORD,        /* in  DWORD   dwPositionType */
	out(LPDWORD), /* out LPDWORD lpdwPartition  */
	out(LPDWORD), /* out LPDWORD lpdwOffsetLow  */
	out(LPDWORD), /* out LPDWORD lpdwOffsetHigh */
], f => GetTapePosition = f);

export function PrepareTape () {};
PrepareTape = createAutoLoader(lib, "PrepareTape", DWORD /* DWORD */, [
	HANDLE, /* in HANDLE hDevice     */
	DWORD,  /* in DWORD  dwOperation */
	BOOL,   /* in BOOL   bImmediate  */
], f => PrepareTape = f);

export function EraseTape () {};
EraseTape = createAutoLoader(lib, "EraseTape", DWORD /* DWORD */, [
	HANDLE, /* in HANDLE hDevice     */
	DWORD,  /* in DWORD  dwEraseType */
	BOOL,   /* in BOOL   bImmediate  */
], f => EraseTape = f);

export function CreateTapePartition () {};
CreateTapePartition = createAutoLoader(lib, "CreateTapePartition", DWORD /* DWORD */, [
	HANDLE, /* in HANDLE hDevice           */
	DWORD,  /* in DWORD  dwPartitionMethod */
	DWORD,  /* in DWORD  dwCount           */
	DWORD,  /* in DWORD  dwSize            */
], f => CreateTapePartition = f);

export function WriteTapemark () {};
WriteTapemark = createAutoLoader(lib, "WriteTapemark", DWORD /* DWORD */, [
	HANDLE, /* in HANDLE hDevice         */
	DWORD,  /* in DWORD  dwTapemarkType  */
	DWORD,  /* in DWORD  dwTapemarkCount */
	BOOL,   /* in BOOL   bImmediate      */
], f => WriteTapemark = f);

export function GetTapeStatus () {};
GetTapeStatus = createAutoLoader(lib, "GetTapeStatus", DWORD /* DWORD */, [
	HANDLE, /* in HANDLE hDevice */
], f => GetTapeStatus = f);

export function GetTapeParameters () {};
GetTapeParameters = createAutoLoader(lib, "GetTapeParameters", DWORD /* DWORD */, [
	HANDLE,         /* in     HANDLE  hDevice           */
	DWORD,          /* in     DWORD   dwOperation       */
	inout(LPDWORD), /* in out LPDWORD lpdwSize          */
	LPVOID,         /*        LPVOID  lpTapeInformation */
], f => GetTapeParameters = f);

export function SetTapeParameters () {};
SetTapeParameters = createAutoLoader(lib, "SetTapeParameters", DWORD /* DWORD */, [
	HANDLE, /* in HANDLE hDevice           */
	DWORD,  /* in DWORD  dwOperation       */
	LPVOID, /* in LPVOID lpTapeInformation */
], f => SetTapeParameters = f);

export function MulDiv () {};
MulDiv = createAutoLoader(lib, "MulDiv", int /* int */, [
	int, /* in int nNumber      */
	int, /* in int nNumerator   */
	int, /* in int nDenominator */
], f => MulDiv = f);

export function GetSystemDEPPolicy () {};
GetSystemDEPPolicy = createAutoLoader(lib, "GetSystemDEPPolicy", DEP_SYSTEM_POLICY_TYPE /* DEP_SYSTEM_POLICY_TYPE */, [
	/* void */
], f => GetSystemDEPPolicy = f);

export function GetSystemRegistryQuota () {};
GetSystemRegistryQuota = createAutoLoader(lib, "GetSystemRegistryQuota", BOOL /* BOOL */, [
	out(PDWORD), /* out opt PDWORD pdwQuotaAllowed */
	out(PDWORD), /* out opt PDWORD pdwQuotaUsed    */
], f => GetSystemRegistryQuota = f);

export function FileTimeToDosDateTime () {};
FileTimeToDosDateTime = createAutoLoader(lib, "FileTimeToDosDateTime", BOOL /* BOOL */, [
	pointer(FILETIME), /* in  CONST FILETIME * lpFileTime */
	out(LPWORD),       /* out LPWORD           lpFatDate  */
	out(LPWORD),       /* out LPWORD           lpFatTime  */
], f => FileTimeToDosDateTime = f);

export function DosDateTimeToFileTime () {};
DosDateTimeToFileTime = createAutoLoader(lib, "DosDateTimeToFileTime", BOOL /* BOOL */, [
	WORD,            /* in  WORD       wFatDate   */
	WORD,            /* in  WORD       wFatTime   */
	out(LPFILETIME), /* out LPFILETIME lpFileTime */
], f => DosDateTimeToFileTime = f);

export function CreateMailslotA () {};
CreateMailslotA = createAutoLoader(lib, "CreateMailslotA", HANDLE /* HANDLE */, [
	LPCSTR,                /* in     LPCSTR                lpName               */
	DWORD,                 /* in     DWORD                 nMaxMessageSize      */
	DWORD,                 /* in     DWORD                 lReadTimeout         */
	LPSECURITY_ATTRIBUTES, /* in opt LPSECURITY_ATTRIBUTES lpSecurityAttributes */
], f => CreateMailslotA = f);

export function CreateMailslotW () {};
CreateMailslotW = createAutoLoader(lib, "CreateMailslotW", HANDLE /* HANDLE */, [
	LPCWSTR,               /* in     LPCWSTR               lpName               */
	DWORD,                 /* in     DWORD                 nMaxMessageSize      */
	DWORD,                 /* in     DWORD                 lReadTimeout         */
	LPSECURITY_ATTRIBUTES, /* in opt LPSECURITY_ATTRIBUTES lpSecurityAttributes */
], f => CreateMailslotW = f);
export {CreateMailslotW as CreateMailslot};

export function GetMailslotInfo () {};
GetMailslotInfo = createAutoLoader(lib, "GetMailslotInfo", BOOL /* BOOL */, [
	HANDLE,       /* in      HANDLE  hMailslot        */
	out(LPDWORD), /* out opt LPDWORD lpMaxMessageSize */
	out(LPDWORD), /* out opt LPDWORD lpNextSize       */
	out(LPDWORD), /* out opt LPDWORD lpMessageCount   */
	out(LPDWORD), /* out opt LPDWORD lpReadTimeout    */
], f => GetMailslotInfo = f);

export function SetMailslotInfo () {};
SetMailslotInfo = createAutoLoader(lib, "SetMailslotInfo", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hMailslot    */
	DWORD,  /* in DWORD  lReadTimeout */
], f => SetMailslotInfo = f);

export function EncryptFileA () {};
EncryptFileA = createAutoLoader(lib, "EncryptFileA", BOOL /* BOOL */, [
	LPCSTR, /* in LPCSTR lpFileName */
], f => EncryptFileA = f);

export function EncryptFileW () {};
EncryptFileW = createAutoLoader(lib, "EncryptFileW", BOOL /* BOOL */, [
	LPCWSTR, /* in LPCWSTR lpFileName */
], f => EncryptFileW = f);
export {EncryptFileW as EncryptFile};

export function DecryptFileA () {};
DecryptFileA = createAutoLoader(lib, "DecryptFileA", BOOL /* BOOL */, [
	LPCSTR, /* in       LPCSTR lpFileName */
	DWORD,  /* reserved DWORD  dwReserved */
], f => DecryptFileA = f);

export function DecryptFileW () {};
DecryptFileW = createAutoLoader(lib, "DecryptFileW", BOOL /* BOOL */, [
	LPCWSTR, /* in       LPCWSTR lpFileName */
	DWORD,   /* reserved DWORD   dwReserved */
], f => DecryptFileW = f);
export {DecryptFileW as DecryptFile};

export function FileEncryptionStatusA () {};
FileEncryptionStatusA = createAutoLoader(lib, "FileEncryptionStatusA", BOOL /* BOOL */, [
	LPCSTR,       /* in  LPCSTR  lpFileName */
	out(LPDWORD), /* out LPDWORD lpStatus   */
], f => FileEncryptionStatusA = f);

export function FileEncryptionStatusW () {};
FileEncryptionStatusW = createAutoLoader(lib, "FileEncryptionStatusW", BOOL /* BOOL */, [
	LPCWSTR,      /* in  LPCWSTR lpFileName */
	out(LPDWORD), /* out LPDWORD lpStatus   */
], f => FileEncryptionStatusW = f);
export {FileEncryptionStatusW as FileEncryptionStatus};

export function OpenEncryptedFileRawA () {};
OpenEncryptedFileRawA = createAutoLoader(lib, "OpenEncryptedFileRawA", DWORD /* DWORD */, [
	LPCSTR,         /* in LPCSTR  lpFileName */
	ULONG,          /* in ULONG   ulFlags    */
	pointer(PVOID), /*    PVOID * pvContext  */
], f => OpenEncryptedFileRawA = f);

export function OpenEncryptedFileRawW () {};
OpenEncryptedFileRawW = createAutoLoader(lib, "OpenEncryptedFileRawW", DWORD /* DWORD */, [
	LPCWSTR,        /* in LPCWSTR lpFileName */
	ULONG,          /* in ULONG   ulFlags    */
	pointer(PVOID), /*    PVOID * pvContext  */
], f => OpenEncryptedFileRawW = f);
export {OpenEncryptedFileRawW as OpenEncryptedFileRaw};

export function ReadEncryptedFileRaw () {};
ReadEncryptedFileRaw = createAutoLoader(lib, "ReadEncryptedFileRaw", DWORD /* DWORD */, [
	PFE_EXPORT_FUNC, /* in     PFE_EXPORT_FUNC pfExportCallback  */
	PVOID,           /* in opt PVOID           pvCallbackContext */
	PVOID,           /* in     PVOID           pvContext         */
], f => ReadEncryptedFileRaw = f);

export function WriteEncryptedFileRaw () {};
WriteEncryptedFileRaw = createAutoLoader(lib, "WriteEncryptedFileRaw", DWORD /* DWORD */, [
	PFE_IMPORT_FUNC, /* in     PFE_IMPORT_FUNC pfImportCallback  */
	PVOID,           /* in opt PVOID           pvCallbackContext */
	PVOID,           /* in     PVOID           pvContext         */
], f => WriteEncryptedFileRaw = f);

export function CloseEncryptedFileRaw () {};
CloseEncryptedFileRaw = createAutoLoader(lib, "CloseEncryptedFileRaw", VOID /* VOID */, [
	PVOID, /* in PVOID pvContext */
], f => CloseEncryptedFileRaw = f);

export function lstrcmpA () {};
lstrcmpA = createAutoLoader(lib, "lstrcmpA", int /* int */, [
	LPCSTR, /* in LPCSTR lpString1 */
	LPCSTR, /* in LPCSTR lpString2 */
], f => lstrcmpA = f);

export function lstrcmpW () {};
lstrcmpW = createAutoLoader(lib, "lstrcmpW", int /* int */, [
	LPCWSTR, /* in LPCWSTR lpString1 */
	LPCWSTR, /* in LPCWSTR lpString2 */
], f => lstrcmpW = f);
export {lstrcmpW as lstrcmp};

export function lstrcmpiA () {};
lstrcmpiA = createAutoLoader(lib, "lstrcmpiA", int /* int */, [
	LPCSTR, /* in LPCSTR lpString1 */
	LPCSTR, /* in LPCSTR lpString2 */
], f => lstrcmpiA = f);

export function lstrcmpiW () {};
lstrcmpiW = createAutoLoader(lib, "lstrcmpiW", int /* int */, [
	LPCWSTR, /* in LPCWSTR lpString1 */
	LPCWSTR, /* in LPCWSTR lpString2 */
], f => lstrcmpiW = f);
export {lstrcmpiW as lstrcmpi};

export function lstrcpynA () {};
lstrcpynA = createAutoLoader(lib, "lstrcpynA", LPSTR /* LPSTR */, [
	LPSTR,  /*    LPSTR  lpString1  */
	LPCSTR, /* in LPCSTR lpString2  */
	int,    /* in int    iMaxLength */
], f => lstrcpynA = f);

export function lstrcpynW () {};
lstrcpynW = createAutoLoader(lib, "lstrcpynW", LPWSTR /* LPWSTR */, [
	LPWSTR,  /*    LPWSTR  lpString1  */
	LPCWSTR, /* in LPCWSTR lpString2  */
	int,     /* in int     iMaxLength */
], f => lstrcpynW = f);
export {lstrcpynW as lstrcpyn};

export function lstrlenA () {};
lstrlenA = createAutoLoader(lib, "lstrlenA", int /* int */, [
	LPCSTR, /* in LPCSTR lpString */
], f => lstrlenA = f);

export function lstrlenW () {};
lstrlenW = createAutoLoader(lib, "lstrlenW", int /* int */, [
	LPCWSTR, /* in LPCWSTR lpString */
], f => lstrlenW = f);
export {lstrlenW as lstrlen};

export function OpenFile () {};
OpenFile = createAutoLoader(lib, "OpenFile", HFILE /* HFILE */, [
	LPCSTR,            /* in     LPCSTR     lpFileName   */
	inout(LPOFSTRUCT), /* in out LPOFSTRUCT lpReOpenBuff */
	UINT,              /* in     UINT       uStyle       */
], f => OpenFile = f);

export function _lopen () {};
_lopen = createAutoLoader(lib, "_lopen", HFILE /* HFILE */, [
	LPCSTR, /* in LPCSTR lpPathName */
	int,    /* in int    iReadWrite */
], f => _lopen = f);

export function _lcreat () {};
_lcreat = createAutoLoader(lib, "_lcreat", HFILE /* HFILE */, [
	LPCSTR, /* in LPCSTR lpPathName */
	int,    /* in int    iAttribute */
], f => _lcreat = f);

export function _lread () {};
_lread = createAutoLoader(lib, "_lread", UINT /* UINT */, [
	HFILE,  /* in HFILE  hFile    */
	LPVOID, /*    LPVOID lpBuffer */
	UINT,   /* in UINT   uBytes   */
], f => _lread = f);

export function _lwrite () {};
_lwrite = createAutoLoader(lib, "_lwrite", UINT /* UINT */, [
	HFILE, /* in HFILE hFile    */
	LPCCH, /*    LPCCH lpBuffer */
	UINT,  /* in UINT  uBytes   */
], f => _lwrite = f);

export function _hread () {};
_hread = createAutoLoader(lib, "_hread", long /* long */, [
	HFILE,  /* in HFILE  hFile    */
	LPVOID, /*    LPVOID lpBuffer */
	long,   /* in long   lBytes   */
], f => _hread = f);

export function _hwrite () {};
_hwrite = createAutoLoader(lib, "_hwrite", long /* long */, [
	HFILE, /* in HFILE hFile    */
	LPCCH, /*    LPCCH lpBuffer */
	long,  /* in long  lBytes   */
], f => _hwrite = f);

export function _lclose () {};
_lclose = createAutoLoader(lib, "_lclose", HFILE /* HFILE */, [
	HFILE, /* in HFILE hFile */
], f => _lclose = f);

export function _llseek () {};
_llseek = createAutoLoader(lib, "_llseek", LONG /* LONG */, [
	HFILE, /* in HFILE hFile   */
	LONG,  /* in LONG  lOffset */
	int,   /* in int   iOrigin */
], f => _llseek = f);

export function IsTextUnicode () {};
IsTextUnicode = createAutoLoader(lib, "IsTextUnicode", BOOL /* BOOL */, [
	pointer(VOID), /*            CONST VOID* lpv       */
	int,           /* in         int         iSize     */
	inout(LPINT),  /* in out opt LPINT       lpiResult */
], f => IsTextUnicode = f);

export function SignalObjectAndWait () {};
SignalObjectAndWait = createAutoLoader(lib, "SignalObjectAndWait", DWORD /* DWORD */, [
	HANDLE, /* in HANDLE hObjectToSignal */
	HANDLE, /* in HANDLE hObjectToWaitOn */
	DWORD,  /* in DWORD  dwMilliseconds  */
	BOOL,   /* in BOOL   bAlertable      */
], f => SignalObjectAndWait = f);

export function BackupRead () {};
BackupRead = createAutoLoader(lib, "BackupRead", BOOL /* BOOL */, [
	HANDLE,                 /* in     HANDLE   hFile                */
	LPBYTE,                 /*        LPBYTE   lpBuffer             */
	DWORD,                  /* in     DWORD    nNumberOfBytesToRead */
	out(LPDWORD),           /* out    LPDWORD  lpNumberOfBytesRead  */
	BOOL,                   /* in     BOOL     bAbort               */
	BOOL,                   /* in     BOOL     bProcessSecurity     */
	inout(pointer(LPVOID)), /* in out LPVOID * lpContext            */
], f => BackupRead = f);

export function BackupSeek () {};
BackupSeek = createAutoLoader(lib, "BackupSeek", BOOL /* BOOL */, [
	HANDLE,                 /* in     HANDLE   hFile              */
	DWORD,                  /* in     DWORD    dwLowBytesToSeek   */
	DWORD,                  /* in     DWORD    dwHighBytesToSeek  */
	out(LPDWORD),           /* out    LPDWORD  lpdwLowByteSeeked  */
	out(LPDWORD),           /* out    LPDWORD  lpdwHighByteSeeked */
	inout(pointer(LPVOID)), /* in out LPVOID * lpContext          */
], f => BackupSeek = f);

export function BackupWrite () {};
BackupWrite = createAutoLoader(lib, "BackupWrite", BOOL /* BOOL */, [
	HANDLE,                 /* in     HANDLE   hFile                  */
	LPBYTE,                 /*        LPBYTE   lpBuffer               */
	DWORD,                  /* in     DWORD    nNumberOfBytesToWrite  */
	out(LPDWORD),           /* out    LPDWORD  lpNumberOfBytesWritten */
	BOOL,                   /* in     BOOL     bAbort                 */
	BOOL,                   /* in     BOOL     bProcessSecurity       */
	inout(pointer(LPVOID)), /* in out LPVOID * lpContext              */
], f => BackupWrite = f);

export function OpenMutexA () {};
OpenMutexA = createAutoLoader(lib, "OpenMutexA", HANDLE /* HANDLE */, [
	DWORD,  /* in DWORD  dwDesiredAccess */
	BOOL,   /* in BOOL   bInheritHandle  */
	LPCSTR, /* in LPCSTR lpName          */
], f => OpenMutexA = f);

export function CreateSemaphoreA () {};
CreateSemaphoreA = createAutoLoader(lib, "CreateSemaphoreA", HANDLE /* HANDLE */, [
	LPSECURITY_ATTRIBUTES, /* in opt LPSECURITY_ATTRIBUTES lpSemaphoreAttributes */
	LONG,                  /* in     LONG                  lInitialCount         */
	LONG,                  /* in     LONG                  lMaximumCount         */
	LPCSTR,                /* in opt LPCSTR                lpName                */
], f => CreateSemaphoreA = f);

export function OpenSemaphoreA () {};
OpenSemaphoreA = createAutoLoader(lib, "OpenSemaphoreA", HANDLE /* HANDLE */, [
	DWORD,  /* in DWORD  dwDesiredAccess */
	BOOL,   /* in BOOL   bInheritHandle  */
	LPCSTR, /* in LPCSTR lpName          */
], f => OpenSemaphoreA = f);

export function CreateWaitableTimerA () {};
CreateWaitableTimerA = createAutoLoader(lib, "CreateWaitableTimerA", HANDLE /* HANDLE */, [
	LPSECURITY_ATTRIBUTES, /* in opt LPSECURITY_ATTRIBUTES lpTimerAttributes */
	BOOL,                  /* in     BOOL                  bManualReset      */
	LPCSTR,                /* in opt LPCSTR                lpTimerName       */
], f => CreateWaitableTimerA = f);

export function OpenWaitableTimerA () {};
OpenWaitableTimerA = createAutoLoader(lib, "OpenWaitableTimerA", HANDLE /* HANDLE */, [
	DWORD,  /* in DWORD  dwDesiredAccess */
	BOOL,   /* in BOOL   bInheritHandle  */
	LPCSTR, /* in LPCSTR lpTimerName     */
], f => OpenWaitableTimerA = f);

export function CreateSemaphoreExA () {};
CreateSemaphoreExA = createAutoLoader(lib, "CreateSemaphoreExA", HANDLE /* HANDLE */, [
	LPSECURITY_ATTRIBUTES, /* in opt   LPSECURITY_ATTRIBUTES lpSemaphoreAttributes */
	LONG,                  /* in       LONG                  lInitialCount         */
	LONG,                  /* in       LONG                  lMaximumCount         */
	LPCSTR,                /* in opt   LPCSTR                lpName                */
	DWORD,                 /* reserved DWORD                 dwFlags               */
	DWORD,                 /* in       DWORD                 dwDesiredAccess       */
], f => CreateSemaphoreExA = f);

export function CreateWaitableTimerExA () {};
CreateWaitableTimerExA = createAutoLoader(lib, "CreateWaitableTimerExA", HANDLE /* HANDLE */, [
	LPSECURITY_ATTRIBUTES, /* in opt LPSECURITY_ATTRIBUTES lpTimerAttributes */
	LPCSTR,                /* in opt LPCSTR                lpTimerName       */
	DWORD,                 /* in     DWORD                 dwFlags           */
	DWORD,                 /* in     DWORD                 dwDesiredAccess   */
], f => CreateWaitableTimerExA = f);

export function CreateFileMappingA () {};
CreateFileMappingA = createAutoLoader(lib, "CreateFileMappingA", HANDLE /* HANDLE */, [
	HANDLE,                /* in     HANDLE                hFile                   */
	LPSECURITY_ATTRIBUTES, /* in opt LPSECURITY_ATTRIBUTES lpFileMappingAttributes */
	DWORD,                 /* in     DWORD                 flProtect               */
	DWORD,                 /* in     DWORD                 dwMaximumSizeHigh       */
	DWORD,                 /* in     DWORD                 dwMaximumSizeLow        */
	LPCSTR,                /* in opt LPCSTR                lpName                  */
], f => CreateFileMappingA = f);

export function CreateFileMappingNumaA () {};
CreateFileMappingNumaA = createAutoLoader(lib, "CreateFileMappingNumaA", HANDLE /* HANDLE */, [
	HANDLE,                /* in     HANDLE                hFile                   */
	LPSECURITY_ATTRIBUTES, /* in opt LPSECURITY_ATTRIBUTES lpFileMappingAttributes */
	DWORD,                 /* in     DWORD                 flProtect               */
	DWORD,                 /* in     DWORD                 dwMaximumSizeHigh       */
	DWORD,                 /* in     DWORD                 dwMaximumSizeLow        */
	LPCSTR,                /* in opt LPCSTR                lpName                  */
	DWORD,                 /* in     DWORD                 nndPreferred            */
], f => CreateFileMappingNumaA = f);

export function OpenFileMappingA () {};
OpenFileMappingA = createAutoLoader(lib, "OpenFileMappingA", HANDLE /* HANDLE */, [
	DWORD,  /* in DWORD  dwDesiredAccess */
	BOOL,   /* in BOOL   bInheritHandle  */
	LPCSTR, /* in LPCSTR lpName          */
], f => OpenFileMappingA = f);

export function GetLogicalDriveStringsA () {};
GetLogicalDriveStringsA = createAutoLoader(lib, "GetLogicalDriveStringsA", DWORD /* DWORD */, [
	DWORD, /* in DWORD nBufferLength */
	LPSTR, /*    LPSTR lpBuffer      */
], f => GetLogicalDriveStringsA = f);

export function LoadPackagedLibrary () {};
LoadPackagedLibrary = createAutoLoader(lib, "LoadPackagedLibrary", HMODULE /* HMODULE */, [
	LPCWSTR, /* in       LPCWSTR lpwLibFileName */
	DWORD,   /* reserved DWORD   Reserved       */
], f => LoadPackagedLibrary = f);

export function GetStartupInfoA () {};
GetStartupInfoA = createAutoLoader(lib, "GetStartupInfoA", VOID /* VOID */, [
	out(LPSTARTUPINFOA), /* out LPSTARTUPINFOA lpStartupInfo */
], f => GetStartupInfoA = f);

export function SetFirmwareEnvironmentVariableA () {};
SetFirmwareEnvironmentVariableA = createAutoLoader(lib, "SetFirmwareEnvironmentVariableA", BOOL /* BOOL */, [
	LPCSTR, /* in LPCSTR lpName */
	LPCSTR, /* in LPCSTR lpGuid */
	PVOID,  /*    PVOID  pValue */
	DWORD,  /* in DWORD  nSize  */
], f => SetFirmwareEnvironmentVariableA = f);

export function SetFirmwareEnvironmentVariableW () {};
SetFirmwareEnvironmentVariableW = createAutoLoader(lib, "SetFirmwareEnvironmentVariableW", BOOL /* BOOL */, [
	LPCWSTR, /* in LPCWSTR lpName */
	LPCWSTR, /* in LPCWSTR lpGuid */
	PVOID,   /*    PVOID   pValue */
	DWORD,   /* in DWORD   nSize  */
], f => SetFirmwareEnvironmentVariableW = f);
export {SetFirmwareEnvironmentVariableW as SetFirmwareEnvironmentVariable};

export function SetFirmwareEnvironmentVariableExA () {};
SetFirmwareEnvironmentVariableExA = createAutoLoader(lib, "SetFirmwareEnvironmentVariableExA", BOOL /* BOOL */, [
	LPCSTR, /* in LPCSTR lpName       */
	LPCSTR, /* in LPCSTR lpGuid       */
	PVOID,  /*    PVOID  pValue       */
	DWORD,  /* in DWORD  nSize        */
	DWORD,  /* in DWORD  dwAttributes */
], f => SetFirmwareEnvironmentVariableExA = f);

export function SetFirmwareEnvironmentVariableExW () {};
SetFirmwareEnvironmentVariableExW = createAutoLoader(lib, "SetFirmwareEnvironmentVariableExW", BOOL /* BOOL */, [
	LPCWSTR, /* in LPCWSTR lpName       */
	LPCWSTR, /* in LPCWSTR lpGuid       */
	PVOID,   /*    PVOID   pValue       */
	DWORD,   /* in DWORD   nSize        */
	DWORD,   /* in DWORD   dwAttributes */
], f => SetFirmwareEnvironmentVariableExW = f);
export {SetFirmwareEnvironmentVariableExW as SetFirmwareEnvironmentVariableEx};

export function GetFirmwareType () {};
GetFirmwareType = createAutoLoader(lib, "GetFirmwareType", BOOL /* BOOL */, [
	inout(PFIRMWARE_TYPE), /* in out PFIRMWARE_TYPE FirmwareType */
], f => GetFirmwareType = f);

export function IsNativeVhdBoot () {};
IsNativeVhdBoot = createAutoLoader(lib, "IsNativeVhdBoot", BOOL /* BOOL */, [
	out(PBOOL), /* out PBOOL NativeVhdBoot */
], f => IsNativeVhdBoot = f);

export function FindResourceA () {};
FindResourceA = createAutoLoader(lib, "FindResourceA", HRSRC /* HRSRC */, [
	HMODULE, /* in opt HMODULE hModule */
	LPCSTR,  /* in     LPCSTR  lpName  */
	LPCSTR,  /* in     LPCSTR  lpType  */
], f => FindResourceA = f);

export function FindResourceExA () {};
FindResourceExA = createAutoLoader(lib, "FindResourceExA", HRSRC /* HRSRC */, [
	HMODULE, /* in opt HMODULE hModule   */
	LPCSTR,  /* in     LPCSTR  lpType    */
	LPCSTR,  /* in     LPCSTR  lpName    */
	WORD,    /* in     WORD    wLanguage */
], f => FindResourceExA = f);

export function EnumResourceTypesA () {};
EnumResourceTypesA = createAutoLoader(lib, "EnumResourceTypesA", BOOL /* BOOL */, [
	HMODULE,          /* in opt HMODULE          hModule    */
	ENUMRESTYPEPROCA, /* in     ENUMRESTYPEPROCA lpEnumFunc */
	LONG_PTR,         /* in     LONG_PTR         lParam     */
], f => EnumResourceTypesA = f);

export function EnumResourceTypesW () {};
EnumResourceTypesW = createAutoLoader(lib, "EnumResourceTypesW", BOOL /* BOOL */, [
	HMODULE,          /* in opt HMODULE          hModule    */
	ENUMRESTYPEPROCW, /* in     ENUMRESTYPEPROCW lpEnumFunc */
	LONG_PTR,         /* in     LONG_PTR         lParam     */
], f => EnumResourceTypesW = f);
export {EnumResourceTypesW as EnumResourceTypes};

export function EnumResourceNamesA () {};
EnumResourceNamesA = createAutoLoader(lib, "EnumResourceNamesA", BOOL /* BOOL */, [
	HMODULE,          /* in opt HMODULE          hModule    */
	LPCSTR,           /* in     LPCSTR           lpType     */
	ENUMRESNAMEPROCA, /* in     ENUMRESNAMEPROCA lpEnumFunc */
	LONG_PTR,         /* in     LONG_PTR         lParam     */
], f => EnumResourceNamesA = f);

export function EnumResourceLanguagesA () {};
EnumResourceLanguagesA = createAutoLoader(lib, "EnumResourceLanguagesA", BOOL /* BOOL */, [
	HMODULE,          /* in opt HMODULE          hModule    */
	LPCSTR,           /* in     LPCSTR           lpType     */
	LPCSTR,           /* in     LPCSTR           lpName     */
	ENUMRESLANGPROCA, /* in     ENUMRESLANGPROCA lpEnumFunc */
	LONG_PTR,         /* in     LONG_PTR         lParam     */
], f => EnumResourceLanguagesA = f);

export function EnumResourceLanguagesW () {};
EnumResourceLanguagesW = createAutoLoader(lib, "EnumResourceLanguagesW", BOOL /* BOOL */, [
	HMODULE,          /* in opt HMODULE          hModule    */
	LPCWSTR,          /* in     LPCWSTR          lpType     */
	LPCWSTR,          /* in     LPCWSTR          lpName     */
	ENUMRESLANGPROCW, /* in     ENUMRESLANGPROCW lpEnumFunc */
	LONG_PTR,         /* in     LONG_PTR         lParam     */
], f => EnumResourceLanguagesW = f);
export {EnumResourceLanguagesW as EnumResourceLanguages};

export function BeginUpdateResourceA () {};
BeginUpdateResourceA = createAutoLoader(lib, "BeginUpdateResourceA", HANDLE /* HANDLE */, [
	LPCSTR, /* in LPCSTR pFileName                */
	BOOL,   /* in BOOL   bDeleteExistingResources */
], f => BeginUpdateResourceA = f);

export function BeginUpdateResourceW () {};
BeginUpdateResourceW = createAutoLoader(lib, "BeginUpdateResourceW", HANDLE /* HANDLE */, [
	LPCWSTR, /* in LPCWSTR pFileName                */
	BOOL,    /* in BOOL    bDeleteExistingResources */
], f => BeginUpdateResourceW = f);
export {BeginUpdateResourceW as BeginUpdateResource};

export function UpdateResourceA () {};
UpdateResourceA = createAutoLoader(lib, "UpdateResourceA", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hUpdate   */
	LPCSTR, /* in LPCSTR lpType    */
	LPCSTR, /* in LPCSTR lpName    */
	WORD,   /* in WORD   wLanguage */
	LPVOID, /*    LPVOID lpData    */
	DWORD,  /* in DWORD  cb        */
], f => UpdateResourceA = f);

export function UpdateResourceW () {};
UpdateResourceW = createAutoLoader(lib, "UpdateResourceW", BOOL /* BOOL */, [
	HANDLE,  /* in HANDLE  hUpdate   */
	LPCWSTR, /* in LPCWSTR lpType    */
	LPCWSTR, /* in LPCWSTR lpName    */
	WORD,    /* in WORD    wLanguage */
	LPVOID,  /*    LPVOID  lpData    */
	DWORD,   /* in DWORD   cb        */
], f => UpdateResourceW = f);
export {UpdateResourceW as UpdateResource};

export function EndUpdateResourceA () {};
EndUpdateResourceA = createAutoLoader(lib, "EndUpdateResourceA", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hUpdate  */
	BOOL,   /* in BOOL   fDiscard */
], f => EndUpdateResourceA = f);

export function EndUpdateResourceW () {};
EndUpdateResourceW = createAutoLoader(lib, "EndUpdateResourceW", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hUpdate  */
	BOOL,   /* in BOOL   fDiscard */
], f => EndUpdateResourceW = f);
export {EndUpdateResourceW as EndUpdateResource};

export function GlobalAddAtomA () {};
GlobalAddAtomA = createAutoLoader(lib, "GlobalAddAtomA", ATOM /* ATOM */, [
	LPCSTR, /* in opt LPCSTR lpString */
], f => GlobalAddAtomA = f);

export function GlobalAddAtomW () {};
GlobalAddAtomW = createAutoLoader(lib, "GlobalAddAtomW", ATOM /* ATOM */, [
	LPCWSTR, /* in opt LPCWSTR lpString */
], f => GlobalAddAtomW = f);
export {GlobalAddAtomW as GlobalAddAtom};

export function GlobalAddAtomExA () {};
GlobalAddAtomExA = createAutoLoader(lib, "GlobalAddAtomExA", ATOM /* ATOM */, [
	LPCSTR, /* in opt LPCSTR lpString */
	DWORD,  /* in     DWORD  Flags    */
], f => GlobalAddAtomExA = f);

export function GlobalAddAtomExW () {};
GlobalAddAtomExW = createAutoLoader(lib, "GlobalAddAtomExW", ATOM /* ATOM */, [
	LPCWSTR, /* in opt LPCWSTR lpString */
	DWORD,   /* in     DWORD   Flags    */
], f => GlobalAddAtomExW = f);
export {GlobalAddAtomExW as GlobalAddAtomEx};

export function GlobalFindAtomA () {};
GlobalFindAtomA = createAutoLoader(lib, "GlobalFindAtomA", ATOM /* ATOM */, [
	LPCSTR, /* in opt LPCSTR lpString */
], f => GlobalFindAtomA = f);

export function GlobalFindAtomW () {};
GlobalFindAtomW = createAutoLoader(lib, "GlobalFindAtomW", ATOM /* ATOM */, [
	LPCWSTR, /* in opt LPCWSTR lpString */
], f => GlobalFindAtomW = f);
export {GlobalFindAtomW as GlobalFindAtom};

export function AddAtomA () {};
AddAtomA = createAutoLoader(lib, "AddAtomA", ATOM /* ATOM */, [
	LPCSTR, /* in opt LPCSTR lpString */
], f => AddAtomA = f);

export function AddAtomW () {};
AddAtomW = createAutoLoader(lib, "AddAtomW", ATOM /* ATOM */, [
	LPCWSTR, /* in opt LPCWSTR lpString */
], f => AddAtomW = f);
export {AddAtomW as AddAtom};

export function FindAtomA () {};
FindAtomA = createAutoLoader(lib, "FindAtomA", ATOM /* ATOM */, [
	LPCSTR, /* in opt LPCSTR lpString */
], f => FindAtomA = f);

export function FindAtomW () {};
FindAtomW = createAutoLoader(lib, "FindAtomW", ATOM /* ATOM */, [
	LPCWSTR, /* in opt LPCWSTR lpString */
], f => FindAtomW = f);
export {FindAtomW as FindAtom};

export function GetProfileIntA () {};
GetProfileIntA = createAutoLoader(lib, "GetProfileIntA", UINT /* UINT */, [
	LPCSTR, /* in LPCSTR lpAppName */
	LPCSTR, /* in LPCSTR lpKeyName */
	INT,    /* in INT    nDefault  */
], f => GetProfileIntA = f);

export function GetProfileIntW () {};
GetProfileIntW = createAutoLoader(lib, "GetProfileIntW", UINT /* UINT */, [
	LPCWSTR, /* in LPCWSTR lpAppName */
	LPCWSTR, /* in LPCWSTR lpKeyName */
	INT,     /* in INT     nDefault  */
], f => GetProfileIntW = f);
export {GetProfileIntW as GetProfileInt};

export function GetProfileStringA () {};
GetProfileStringA = createAutoLoader(lib, "GetProfileStringA", DWORD /* DWORD */, [
	LPCSTR, /* in opt LPCSTR lpAppName        */
	LPCSTR, /* in opt LPCSTR lpKeyName        */
	LPCSTR, /* in opt LPCSTR lpDefault        */
	LPSTR,  /*        LPSTR  lpReturnedString */
	DWORD,  /* in     DWORD  nSize            */
], f => GetProfileStringA = f);

export function GetProfileStringW () {};
GetProfileStringW = createAutoLoader(lib, "GetProfileStringW", DWORD /* DWORD */, [
	LPCWSTR, /* in opt LPCWSTR lpAppName        */
	LPCWSTR, /* in opt LPCWSTR lpKeyName        */
	LPCWSTR, /* in opt LPCWSTR lpDefault        */
	LPWSTR,  /*        LPWSTR  lpReturnedString */
	DWORD,   /* in     DWORD   nSize            */
], f => GetProfileStringW = f);
export {GetProfileStringW as GetProfileString};

export function WriteProfileStringA () {};
WriteProfileStringA = createAutoLoader(lib, "WriteProfileStringA", BOOL /* BOOL */, [
	LPCSTR, /* in opt LPCSTR lpAppName */
	LPCSTR, /* in opt LPCSTR lpKeyName */
	LPCSTR, /* in opt LPCSTR lpString  */
], f => WriteProfileStringA = f);

export function WriteProfileStringW () {};
WriteProfileStringW = createAutoLoader(lib, "WriteProfileStringW", BOOL /* BOOL */, [
	LPCWSTR, /* in opt LPCWSTR lpAppName */
	LPCWSTR, /* in opt LPCWSTR lpKeyName */
	LPCWSTR, /* in opt LPCWSTR lpString  */
], f => WriteProfileStringW = f);
export {WriteProfileStringW as WriteProfileString};

export function GetProfileSectionA () {};
GetProfileSectionA = createAutoLoader(lib, "GetProfileSectionA", DWORD /* DWORD */, [
	LPCSTR, /* in LPCSTR lpAppName        */
	LPSTR,  /*    LPSTR  lpReturnedString */
	DWORD,  /* in DWORD  nSize            */
], f => GetProfileSectionA = f);

export function GetProfileSectionW () {};
GetProfileSectionW = createAutoLoader(lib, "GetProfileSectionW", DWORD /* DWORD */, [
	LPCWSTR, /* in LPCWSTR lpAppName        */
	LPWSTR,  /*    LPWSTR  lpReturnedString */
	DWORD,   /* in DWORD   nSize            */
], f => GetProfileSectionW = f);
export {GetProfileSectionW as GetProfileSection};

export function WriteProfileSectionA () {};
WriteProfileSectionA = createAutoLoader(lib, "WriteProfileSectionA", BOOL /* BOOL */, [
	LPCSTR, /* in LPCSTR lpAppName */
	LPCSTR, /* in LPCSTR lpString  */
], f => WriteProfileSectionA = f);

export function WriteProfileSectionW () {};
WriteProfileSectionW = createAutoLoader(lib, "WriteProfileSectionW", BOOL /* BOOL */, [
	LPCWSTR, /* in LPCWSTR lpAppName */
	LPCWSTR, /* in LPCWSTR lpString  */
], f => WriteProfileSectionW = f);
export {WriteProfileSectionW as WriteProfileSection};

export function GetPrivateProfileIntA () {};
GetPrivateProfileIntA = createAutoLoader(lib, "GetPrivateProfileIntA", UINT /* UINT */, [
	LPCSTR, /* in     LPCSTR lpAppName  */
	LPCSTR, /* in     LPCSTR lpKeyName  */
	INT,    /* in     INT    nDefault   */
	LPCSTR, /* in opt LPCSTR lpFileName */
], f => GetPrivateProfileIntA = f);

export function GetPrivateProfileIntW () {};
GetPrivateProfileIntW = createAutoLoader(lib, "GetPrivateProfileIntW", UINT /* UINT */, [
	LPCWSTR, /* in     LPCWSTR lpAppName  */
	LPCWSTR, /* in     LPCWSTR lpKeyName  */
	INT,     /* in     INT     nDefault   */
	LPCWSTR, /* in opt LPCWSTR lpFileName */
], f => GetPrivateProfileIntW = f);
export {GetPrivateProfileIntW as GetPrivateProfileInt};

export function GetPrivateProfileStringA () {};
GetPrivateProfileStringA = createAutoLoader(lib, "GetPrivateProfileStringA", DWORD /* DWORD */, [
	LPCSTR, /* in opt LPCSTR lpAppName        */
	LPCSTR, /* in opt LPCSTR lpKeyName        */
	LPCSTR, /* in opt LPCSTR lpDefault        */
	LPSTR,  /*        LPSTR  lpReturnedString */
	DWORD,  /* in     DWORD  nSize            */
	LPCSTR, /* in opt LPCSTR lpFileName       */
], f => GetPrivateProfileStringA = f);

export function GetPrivateProfileStringW () {};
GetPrivateProfileStringW = createAutoLoader(lib, "GetPrivateProfileStringW", DWORD /* DWORD */, [
	LPCWSTR, /* in opt LPCWSTR lpAppName        */
	LPCWSTR, /* in opt LPCWSTR lpKeyName        */
	LPCWSTR, /* in opt LPCWSTR lpDefault        */
	LPWSTR,  /*        LPWSTR  lpReturnedString */
	DWORD,   /* in     DWORD   nSize            */
	LPCWSTR, /* in opt LPCWSTR lpFileName       */
], f => GetPrivateProfileStringW = f);
export {GetPrivateProfileStringW as GetPrivateProfileString};

export function WritePrivateProfileStringA () {};
WritePrivateProfileStringA = createAutoLoader(lib, "WritePrivateProfileStringA", BOOL /* BOOL */, [
	LPCSTR, /* in opt LPCSTR lpAppName  */
	LPCSTR, /* in opt LPCSTR lpKeyName  */
	LPCSTR, /* in opt LPCSTR lpString   */
	LPCSTR, /* in opt LPCSTR lpFileName */
], f => WritePrivateProfileStringA = f);

export function WritePrivateProfileStringW () {};
WritePrivateProfileStringW = createAutoLoader(lib, "WritePrivateProfileStringW", BOOL /* BOOL */, [
	LPCWSTR, /* in opt LPCWSTR lpAppName  */
	LPCWSTR, /* in opt LPCWSTR lpKeyName  */
	LPCWSTR, /* in opt LPCWSTR lpString   */
	LPCWSTR, /* in opt LPCWSTR lpFileName */
], f => WritePrivateProfileStringW = f);
export {WritePrivateProfileStringW as WritePrivateProfileString};

export function GetPrivateProfileSectionA () {};
GetPrivateProfileSectionA = createAutoLoader(lib, "GetPrivateProfileSectionA", DWORD /* DWORD */, [
	LPCSTR, /* in     LPCSTR lpAppName        */
	LPSTR,  /*        LPSTR  lpReturnedString */
	DWORD,  /* in     DWORD  nSize            */
	LPCSTR, /* in opt LPCSTR lpFileName       */
], f => GetPrivateProfileSectionA = f);

export function GetPrivateProfileSectionW () {};
GetPrivateProfileSectionW = createAutoLoader(lib, "GetPrivateProfileSectionW", DWORD /* DWORD */, [
	LPCWSTR, /* in     LPCWSTR lpAppName        */
	LPWSTR,  /*        LPWSTR  lpReturnedString */
	DWORD,   /* in     DWORD   nSize            */
	LPCWSTR, /* in opt LPCWSTR lpFileName       */
], f => GetPrivateProfileSectionW = f);
export {GetPrivateProfileSectionW as GetPrivateProfileSection};

export function WritePrivateProfileSectionA () {};
WritePrivateProfileSectionA = createAutoLoader(lib, "WritePrivateProfileSectionA", BOOL /* BOOL */, [
	LPCSTR, /* in opt LPCSTR lpAppName  */
	LPCSTR, /* in opt LPCSTR lpString   */
	LPCSTR, /* in opt LPCSTR lpFileName */
], f => WritePrivateProfileSectionA = f);

export function WritePrivateProfileSectionW () {};
WritePrivateProfileSectionW = createAutoLoader(lib, "WritePrivateProfileSectionW", BOOL /* BOOL */, [
	LPCWSTR, /* in opt LPCWSTR lpAppName  */
	LPCWSTR, /* in opt LPCWSTR lpString   */
	LPCWSTR, /* in opt LPCWSTR lpFileName */
], f => WritePrivateProfileSectionW = f);
export {WritePrivateProfileSectionW as WritePrivateProfileSection};

export function GetPrivateProfileSectionNamesA () {};
GetPrivateProfileSectionNamesA = createAutoLoader(lib, "GetPrivateProfileSectionNamesA", DWORD /* DWORD */, [
	LPSTR,  /*        LPSTR  lpszReturnBuffer */
	DWORD,  /* in     DWORD  nSize            */
	LPCSTR, /* in opt LPCSTR lpFileName       */
], f => GetPrivateProfileSectionNamesA = f);

export function GetPrivateProfileSectionNamesW () {};
GetPrivateProfileSectionNamesW = createAutoLoader(lib, "GetPrivateProfileSectionNamesW", DWORD /* DWORD */, [
	LPWSTR,  /*        LPWSTR  lpszReturnBuffer */
	DWORD,   /* in     DWORD   nSize            */
	LPCWSTR, /* in opt LPCWSTR lpFileName       */
], f => GetPrivateProfileSectionNamesW = f);
export {GetPrivateProfileSectionNamesW as GetPrivateProfileSectionNames};

export function GetPrivateProfileStructA () {};
GetPrivateProfileStructA = createAutoLoader(lib, "GetPrivateProfileStructA", BOOL /* BOOL */, [
	LPCSTR, /* in     LPCSTR lpszSection */
	LPCSTR, /* in     LPCSTR lpszKey     */
	LPVOID, /*        LPVOID lpStruct    */
	UINT,   /* in     UINT   uSizeStruct */
	LPCSTR, /* in opt LPCSTR szFile      */
], f => GetPrivateProfileStructA = f);

export function GetPrivateProfileStructW () {};
GetPrivateProfileStructW = createAutoLoader(lib, "GetPrivateProfileStructW", BOOL /* BOOL */, [
	LPCWSTR, /* in     LPCWSTR lpszSection */
	LPCWSTR, /* in     LPCWSTR lpszKey     */
	LPVOID,  /*        LPVOID  lpStruct    */
	UINT,    /* in     UINT    uSizeStruct */
	LPCWSTR, /* in opt LPCWSTR szFile      */
], f => GetPrivateProfileStructW = f);
export {GetPrivateProfileStructW as GetPrivateProfileStruct};

export function WritePrivateProfileStructA () {};
WritePrivateProfileStructA = createAutoLoader(lib, "WritePrivateProfileStructA", BOOL /* BOOL */, [
	LPCSTR, /* in     LPCSTR lpszSection */
	LPCSTR, /* in     LPCSTR lpszKey     */
	LPVOID, /*        LPVOID lpStruct    */
	UINT,   /* in     UINT   uSizeStruct */
	LPCSTR, /* in opt LPCSTR szFile      */
], f => WritePrivateProfileStructA = f);

export function WritePrivateProfileStructW () {};
WritePrivateProfileStructW = createAutoLoader(lib, "WritePrivateProfileStructW", BOOL /* BOOL */, [
	LPCWSTR, /* in     LPCWSTR lpszSection */
	LPCWSTR, /* in     LPCWSTR lpszKey     */
	LPVOID,  /*        LPVOID  lpStruct    */
	UINT,    /* in     UINT    uSizeStruct */
	LPCWSTR, /* in opt LPCWSTR szFile      */
], f => WritePrivateProfileStructW = f);
export {WritePrivateProfileStructW as WritePrivateProfileStruct};

export function Wow64EnableWow64FsRedirection () {};
Wow64EnableWow64FsRedirection = createAutoLoader(lib, "Wow64EnableWow64FsRedirection", BOOLEAN /* BOOLEAN */, [
	BOOLEAN, /* in BOOLEAN Wow64FsEnableRedirection */
], f => Wow64EnableWow64FsRedirection = f);

export function SetDllDirectoryA () {};
SetDllDirectoryA = createAutoLoader(lib, "SetDllDirectoryA", BOOL /* BOOL */, [
	LPCSTR, /* in opt LPCSTR lpPathName */
], f => SetDllDirectoryA = f);

export function SetDllDirectoryW () {};
SetDllDirectoryW = createAutoLoader(lib, "SetDllDirectoryW", BOOL /* BOOL */, [
	LPCWSTR, /* in opt LPCWSTR lpPathName */
], f => SetDllDirectoryW = f);
export {SetDllDirectoryW as SetDllDirectory};

export function GetDllDirectoryA () {};
GetDllDirectoryA = createAutoLoader(lib, "GetDllDirectoryA", DWORD /* DWORD */, [
	DWORD, /* in DWORD nBufferLength */
	LPSTR, /*    LPSTR lpBuffer      */
], f => GetDllDirectoryA = f);

export function GetDllDirectoryW () {};
GetDllDirectoryW = createAutoLoader(lib, "GetDllDirectoryW", DWORD /* DWORD */, [
	DWORD,  /* in DWORD  nBufferLength */
	LPWSTR, /*    LPWSTR lpBuffer      */
], f => GetDllDirectoryW = f);
export {GetDllDirectoryW as GetDllDirectory};

export function SetSearchPathMode () {};
SetSearchPathMode = createAutoLoader(lib, "SetSearchPathMode", BOOL /* BOOL */, [
	DWORD, /* in DWORD Flags */
], f => SetSearchPathMode = f);

export function CreateDirectoryExA () {};
CreateDirectoryExA = createAutoLoader(lib, "CreateDirectoryExA", BOOL /* BOOL */, [
	LPCSTR,                /* in     LPCSTR                lpTemplateDirectory  */
	LPCSTR,                /* in     LPCSTR                lpNewDirectory       */
	LPSECURITY_ATTRIBUTES, /* in opt LPSECURITY_ATTRIBUTES lpSecurityAttributes */
], f => CreateDirectoryExA = f);

export function CreateDirectoryExW () {};
CreateDirectoryExW = createAutoLoader(lib, "CreateDirectoryExW", BOOL /* BOOL */, [
	LPCWSTR,               /* in     LPCWSTR               lpTemplateDirectory  */
	LPCWSTR,               /* in     LPCWSTR               lpNewDirectory       */
	LPSECURITY_ATTRIBUTES, /* in opt LPSECURITY_ATTRIBUTES lpSecurityAttributes */
], f => CreateDirectoryExW = f);
export {CreateDirectoryExW as CreateDirectoryEx};

export function CreateDirectoryTransactedA () {};
CreateDirectoryTransactedA = createAutoLoader(lib, "CreateDirectoryTransactedA", BOOL /* BOOL */, [
	LPCSTR,                /* in opt LPCSTR                lpTemplateDirectory  */
	LPCSTR,                /* in     LPCSTR                lpNewDirectory       */
	LPSECURITY_ATTRIBUTES, /* in opt LPSECURITY_ATTRIBUTES lpSecurityAttributes */
	HANDLE,                /* in     HANDLE                hTransaction         */
], f => CreateDirectoryTransactedA = f);

export function CreateDirectoryTransactedW () {};
CreateDirectoryTransactedW = createAutoLoader(lib, "CreateDirectoryTransactedW", BOOL /* BOOL */, [
	LPCWSTR,               /* in opt LPCWSTR               lpTemplateDirectory  */
	LPCWSTR,               /* in     LPCWSTR               lpNewDirectory       */
	LPSECURITY_ATTRIBUTES, /* in opt LPSECURITY_ATTRIBUTES lpSecurityAttributes */
	HANDLE,                /* in     HANDLE                hTransaction         */
], f => CreateDirectoryTransactedW = f);
export {CreateDirectoryTransactedW as CreateDirectoryTransacted};

export function RemoveDirectoryTransactedA () {};
RemoveDirectoryTransactedA = createAutoLoader(lib, "RemoveDirectoryTransactedA", BOOL /* BOOL */, [
	LPCSTR, /* in LPCSTR lpPathName   */
	HANDLE, /* in HANDLE hTransaction */
], f => RemoveDirectoryTransactedA = f);

export function RemoveDirectoryTransactedW () {};
RemoveDirectoryTransactedW = createAutoLoader(lib, "RemoveDirectoryTransactedW", BOOL /* BOOL */, [
	LPCWSTR, /* in LPCWSTR lpPathName   */
	HANDLE,  /* in HANDLE  hTransaction */
], f => RemoveDirectoryTransactedW = f);
export {RemoveDirectoryTransactedW as RemoveDirectoryTransacted};

export function GetFullPathNameTransactedA () {};
GetFullPathNameTransactedA = createAutoLoader(lib, "GetFullPathNameTransactedA", DWORD /* DWORD */, [
	LPCSTR,         /* in LPCSTR  lpFileName    */
	DWORD,          /* in DWORD   nBufferLength */
	LPSTR,          /*    LPSTR   lpBuffer      */
	pointer(LPSTR), /*    LPSTR * lpFilePart    */
	HANDLE,         /* in HANDLE  hTransaction  */
], f => GetFullPathNameTransactedA = f);

export function GetFullPathNameTransactedW () {};
GetFullPathNameTransactedW = createAutoLoader(lib, "GetFullPathNameTransactedW", DWORD /* DWORD */, [
	LPCWSTR,         /* in LPCWSTR  lpFileName    */
	DWORD,           /* in DWORD    nBufferLength */
	LPWSTR,          /*    LPWSTR   lpBuffer      */
	pointer(LPWSTR), /*    LPWSTR * lpFilePart    */
	HANDLE,          /* in HANDLE   hTransaction  */
], f => GetFullPathNameTransactedW = f);
export {GetFullPathNameTransactedW as GetFullPathNameTransacted};

export function DefineDosDeviceA () {};
DefineDosDeviceA = createAutoLoader(lib, "DefineDosDeviceA", BOOL /* BOOL */, [
	DWORD,  /* in     DWORD  dwFlags      */
	LPCSTR, /* in     LPCSTR lpDeviceName */
	LPCSTR, /* in opt LPCSTR lpTargetPath */
], f => DefineDosDeviceA = f);

export function QueryDosDeviceA () {};
QueryDosDeviceA = createAutoLoader(lib, "QueryDosDeviceA", DWORD /* DWORD */, [
	LPCSTR, /* in opt LPCSTR lpDeviceName */
	LPSTR,  /*        LPSTR  lpTargetPath */
	DWORD,  /* in     DWORD  ucchMax      */
], f => QueryDosDeviceA = f);

export function CreateFileTransactedA () {};
CreateFileTransactedA = createAutoLoader(lib, "CreateFileTransactedA", HANDLE /* HANDLE */, [
	LPCSTR,                /* in       LPCSTR                lpFileName            */
	DWORD,                 /* in       DWORD                 dwDesiredAccess       */
	DWORD,                 /* in       DWORD                 dwShareMode           */
	LPSECURITY_ATTRIBUTES, /* in opt   LPSECURITY_ATTRIBUTES lpSecurityAttributes  */
	DWORD,                 /* in       DWORD                 dwCreationDisposition */
	DWORD,                 /* in       DWORD                 dwFlagsAndAttributes  */
	HANDLE,                /* in opt   HANDLE                hTemplateFile         */
	HANDLE,                /* in       HANDLE                hTransaction          */
	PUSHORT,               /* in opt   PUSHORT               pusMiniVersion        */
	PVOID,                 /* reserved PVOID                 lpExtendedParameter   */
], f => CreateFileTransactedA = f);

export function CreateFileTransactedW () {};
CreateFileTransactedW = createAutoLoader(lib, "CreateFileTransactedW", HANDLE /* HANDLE */, [
	LPCWSTR,               /* in       LPCWSTR               lpFileName            */
	DWORD,                 /* in       DWORD                 dwDesiredAccess       */
	DWORD,                 /* in       DWORD                 dwShareMode           */
	LPSECURITY_ATTRIBUTES, /* in opt   LPSECURITY_ATTRIBUTES lpSecurityAttributes  */
	DWORD,                 /* in       DWORD                 dwCreationDisposition */
	DWORD,                 /* in       DWORD                 dwFlagsAndAttributes  */
	HANDLE,                /* in opt   HANDLE                hTemplateFile         */
	HANDLE,                /* in       HANDLE                hTransaction          */
	PUSHORT,               /* in opt   PUSHORT               pusMiniVersion        */
	PVOID,                 /* reserved PVOID                 lpExtendedParameter   */
], f => CreateFileTransactedW = f);
export {CreateFileTransactedW as CreateFileTransacted};

export function ReOpenFile () {};
ReOpenFile = createAutoLoader(lib, "ReOpenFile", HANDLE /* HANDLE */, [
	HANDLE, /* in HANDLE hOriginalFile        */
	DWORD,  /* in DWORD  dwDesiredAccess      */
	DWORD,  /* in DWORD  dwShareMode          */
	DWORD,  /* in DWORD  dwFlagsAndAttributes */
], f => ReOpenFile = f);

export function SetFileAttributesTransactedA () {};
SetFileAttributesTransactedA = createAutoLoader(lib, "SetFileAttributesTransactedA", BOOL /* BOOL */, [
	LPCSTR, /* in LPCSTR lpFileName       */
	DWORD,  /* in DWORD  dwFileAttributes */
	HANDLE, /* in HANDLE hTransaction     */
], f => SetFileAttributesTransactedA = f);

export function SetFileAttributesTransactedW () {};
SetFileAttributesTransactedW = createAutoLoader(lib, "SetFileAttributesTransactedW", BOOL /* BOOL */, [
	LPCWSTR, /* in LPCWSTR lpFileName       */
	DWORD,   /* in DWORD   dwFileAttributes */
	HANDLE,  /* in HANDLE  hTransaction     */
], f => SetFileAttributesTransactedW = f);
export {SetFileAttributesTransactedW as SetFileAttributesTransacted};

export function GetCompressedFileSizeTransactedA () {};
GetCompressedFileSizeTransactedA = createAutoLoader(lib, "GetCompressedFileSizeTransactedA", DWORD /* DWORD */, [
	LPCSTR,       /* in      LPCSTR  lpFileName     */
	out(LPDWORD), /* out opt LPDWORD lpFileSizeHigh */
	HANDLE,       /* in      HANDLE  hTransaction   */
], f => GetCompressedFileSizeTransactedA = f);

export function GetCompressedFileSizeTransactedW () {};
GetCompressedFileSizeTransactedW = createAutoLoader(lib, "GetCompressedFileSizeTransactedW", DWORD /* DWORD */, [
	LPCWSTR,      /* in      LPCWSTR lpFileName     */
	out(LPDWORD), /* out opt LPDWORD lpFileSizeHigh */
	HANDLE,       /* in      HANDLE  hTransaction   */
], f => GetCompressedFileSizeTransactedW = f);
export {GetCompressedFileSizeTransactedW as GetCompressedFileSizeTransacted};

export function DeleteFileTransactedA () {};
DeleteFileTransactedA = createAutoLoader(lib, "DeleteFileTransactedA", BOOL /* BOOL */, [
	LPCSTR, /* in LPCSTR lpFileName   */
	HANDLE, /* in HANDLE hTransaction */
], f => DeleteFileTransactedA = f);

export function DeleteFileTransactedW () {};
DeleteFileTransactedW = createAutoLoader(lib, "DeleteFileTransactedW", BOOL /* BOOL */, [
	LPCWSTR, /* in LPCWSTR lpFileName   */
	HANDLE,  /* in HANDLE  hTransaction */
], f => DeleteFileTransactedW = f);
export {DeleteFileTransactedW as DeleteFileTransacted};

export function CheckNameLegalDOS8Dot3A () {};
CheckNameLegalDOS8Dot3A = createAutoLoader(lib, "CheckNameLegalDOS8Dot3A", BOOL /* BOOL */, [
	LPCSTR,     /* in      LPCSTR                     lpName      */
	LPSTR,      /*         LPSTR                      lpOemName   */
	DWORD,      /* in      DWORD                      OemNameSize */
	out(PBOOL), /* out opt PBOOL pbNameContainsSpaces OPTIONAL    */
	out(PBOOL), /* out     PBOOL                      pbNameLegal */
], f => CheckNameLegalDOS8Dot3A = f);

export function CheckNameLegalDOS8Dot3W () {};
CheckNameLegalDOS8Dot3W = createAutoLoader(lib, "CheckNameLegalDOS8Dot3W", BOOL /* BOOL */, [
	LPCWSTR,    /* in      LPCWSTR                    lpName      */
	LPSTR,      /*         LPSTR                      lpOemName   */
	DWORD,      /* in      DWORD                      OemNameSize */
	out(PBOOL), /* out opt PBOOL pbNameContainsSpaces OPTIONAL    */
	out(PBOOL), /* out     PBOOL                      pbNameLegal */
], f => CheckNameLegalDOS8Dot3W = f);
export {CheckNameLegalDOS8Dot3W as CheckNameLegalDOS8Dot3};

export function CopyFileA () {};
CopyFileA = createAutoLoader(lib, "CopyFileA", BOOL /* BOOL */, [
	LPCSTR, /* in LPCSTR lpExistingFileName */
	LPCSTR, /* in LPCSTR lpNewFileName      */
	BOOL,   /* in BOOL   bFailIfExists      */
], f => CopyFileA = f);

export function CopyFileW () {};
CopyFileW = createAutoLoader(lib, "CopyFileW", BOOL /* BOOL */, [
	LPCWSTR, /* in LPCWSTR lpExistingFileName */
	LPCWSTR, /* in LPCWSTR lpNewFileName      */
	BOOL,    /* in BOOL    bFailIfExists      */
], f => CopyFileW = f);
export {CopyFileW as CopyFile};

export function CopyFileTransactedA () {};
CopyFileTransactedA = createAutoLoader(lib, "CopyFileTransactedA", BOOL /* BOOL */, [
	LPCSTR,             /* in     LPCSTR             lpExistingFileName */
	LPCSTR,             /* in     LPCSTR             lpNewFileName      */
	LPPROGRESS_ROUTINE, /* in opt LPPROGRESS_ROUTINE lpProgressRoutine  */
	LPVOID,             /* in opt LPVOID             lpData             */
	LPBOOL,             /* in opt LPBOOL             pbCancel           */
	DWORD,              /* in     DWORD              dwCopyFlags        */
	HANDLE,             /* in     HANDLE             hTransaction       */
], f => CopyFileTransactedA = f);

export function CopyFileTransactedW () {};
CopyFileTransactedW = createAutoLoader(lib, "CopyFileTransactedW", BOOL /* BOOL */, [
	LPCWSTR,            /* in     LPCWSTR            lpExistingFileName */
	LPCWSTR,            /* in     LPCWSTR            lpNewFileName      */
	LPPROGRESS_ROUTINE, /* in opt LPPROGRESS_ROUTINE lpProgressRoutine  */
	LPVOID,             /* in opt LPVOID             lpData             */
	LPBOOL,             /* in opt LPBOOL             pbCancel           */
	DWORD,              /* in     DWORD              dwCopyFlags        */
	HANDLE,             /* in     HANDLE             hTransaction       */
], f => CopyFileTransactedW = f);
export {CopyFileTransactedW as CopyFileTransacted};

export function CopyFile2 () {};
CopyFile2 = createAutoLoader(lib, "CopyFile2", HRESULT /* HRESULT */, [
	PCWSTR,                                 /* in     PCWSTR                          pwszExistingFileName */
	PCWSTR,                                 /* in     PCWSTR                          pwszNewFileName      */
	pointer(COPYFILE2_EXTENDED_PARAMETERS), /* in opt COPYFILE2_EXTENDED_PARAMETERS * pExtendedParameters  */
], f => CopyFile2 = f);

export function MoveFileA () {};
MoveFileA = createAutoLoader(lib, "MoveFileA", BOOL /* BOOL */, [
	LPCSTR, /* in LPCSTR lpExistingFileName */
	LPCSTR, /* in LPCSTR lpNewFileName      */
], f => MoveFileA = f);

export function MoveFileW () {};
MoveFileW = createAutoLoader(lib, "MoveFileW", BOOL /* BOOL */, [
	LPCWSTR, /* in LPCWSTR lpExistingFileName */
	LPCWSTR, /* in LPCWSTR lpNewFileName      */
], f => MoveFileW = f);
export {MoveFileW as MoveFile};

export function MoveFileExA () {};
MoveFileExA = createAutoLoader(lib, "MoveFileExA", BOOL /* BOOL */, [
	LPCSTR, /* in     LPCSTR lpExistingFileName */
	LPCSTR, /* in opt LPCSTR lpNewFileName      */
	DWORD,  /* in     DWORD  dwFlags            */
], f => MoveFileExA = f);

export function MoveFileExW () {};
MoveFileExW = createAutoLoader(lib, "MoveFileExW", BOOL /* BOOL */, [
	LPCWSTR, /* in     LPCWSTR lpExistingFileName */
	LPCWSTR, /* in opt LPCWSTR lpNewFileName      */
	DWORD,   /* in     DWORD   dwFlags            */
], f => MoveFileExW = f);
export {MoveFileExW as MoveFileEx};

export function MoveFileWithProgressA () {};
MoveFileWithProgressA = createAutoLoader(lib, "MoveFileWithProgressA", BOOL /* BOOL */, [
	LPCSTR,             /* in     LPCSTR             lpExistingFileName */
	LPCSTR,             /* in opt LPCSTR             lpNewFileName      */
	LPPROGRESS_ROUTINE, /* in opt LPPROGRESS_ROUTINE lpProgressRoutine  */
	LPVOID,             /* in opt LPVOID             lpData             */
	DWORD,              /* in     DWORD              dwFlags            */
], f => MoveFileWithProgressA = f);

export function MoveFileWithProgressW () {};
MoveFileWithProgressW = createAutoLoader(lib, "MoveFileWithProgressW", BOOL /* BOOL */, [
	LPCWSTR,            /* in     LPCWSTR            lpExistingFileName */
	LPCWSTR,            /* in opt LPCWSTR            lpNewFileName      */
	LPPROGRESS_ROUTINE, /* in opt LPPROGRESS_ROUTINE lpProgressRoutine  */
	LPVOID,             /* in opt LPVOID             lpData             */
	DWORD,              /* in     DWORD              dwFlags            */
], f => MoveFileWithProgressW = f);
export {MoveFileWithProgressW as MoveFileWithProgress};

export function MoveFileTransactedA () {};
MoveFileTransactedA = createAutoLoader(lib, "MoveFileTransactedA", BOOL /* BOOL */, [
	LPCSTR,             /* in     LPCSTR             lpExistingFileName */
	LPCSTR,             /* in opt LPCSTR             lpNewFileName      */
	LPPROGRESS_ROUTINE, /* in opt LPPROGRESS_ROUTINE lpProgressRoutine  */
	LPVOID,             /* in opt LPVOID             lpData             */
	DWORD,              /* in     DWORD              dwFlags            */
	HANDLE,             /* in     HANDLE             hTransaction       */
], f => MoveFileTransactedA = f);

export function MoveFileTransactedW () {};
MoveFileTransactedW = createAutoLoader(lib, "MoveFileTransactedW", BOOL /* BOOL */, [
	LPCWSTR,            /* in     LPCWSTR            lpExistingFileName */
	LPCWSTR,            /* in opt LPCWSTR            lpNewFileName      */
	LPPROGRESS_ROUTINE, /* in opt LPPROGRESS_ROUTINE lpProgressRoutine  */
	LPVOID,             /* in opt LPVOID             lpData             */
	DWORD,              /* in     DWORD              dwFlags            */
	HANDLE,             /* in     HANDLE             hTransaction       */
], f => MoveFileTransactedW = f);
export {MoveFileTransactedW as MoveFileTransacted};

export function ReplaceFileA () {};
ReplaceFileA = createAutoLoader(lib, "ReplaceFileA", BOOL /* BOOL */, [
	LPCSTR, /* in       LPCSTR lpReplacedFileName    */
	LPCSTR, /* in       LPCSTR lpReplacementFileName */
	LPCSTR, /* in opt   LPCSTR lpBackupFileName      */
	DWORD,  /* in       DWORD  dwReplaceFlags        */
	LPVOID, /* reserved LPVOID lpExclude             */
	LPVOID, /* reserved LPVOID lpReserved            */
], f => ReplaceFileA = f);

export function ReplaceFileW () {};
ReplaceFileW = createAutoLoader(lib, "ReplaceFileW", BOOL /* BOOL */, [
	LPCWSTR, /* in       LPCWSTR lpReplacedFileName    */
	LPCWSTR, /* in       LPCWSTR lpReplacementFileName */
	LPCWSTR, /* in opt   LPCWSTR lpBackupFileName      */
	DWORD,   /* in       DWORD   dwReplaceFlags        */
	LPVOID,  /* reserved LPVOID  lpExclude             */
	LPVOID,  /* reserved LPVOID  lpReserved            */
], f => ReplaceFileW = f);
export {ReplaceFileW as ReplaceFile};

export function CreateHardLinkA () {};
CreateHardLinkA = createAutoLoader(lib, "CreateHardLinkA", BOOL /* BOOL */, [
	LPCSTR,                /* in       LPCSTR                lpFileName           */
	LPCSTR,                /* in       LPCSTR                lpExistingFileName   */
	LPSECURITY_ATTRIBUTES, /* reserved LPSECURITY_ATTRIBUTES lpSecurityAttributes */
], f => CreateHardLinkA = f);

export function CreateHardLinkW () {};
CreateHardLinkW = createAutoLoader(lib, "CreateHardLinkW", BOOL /* BOOL */, [
	LPCWSTR,               /* in       LPCWSTR               lpFileName           */
	LPCWSTR,               /* in       LPCWSTR               lpExistingFileName   */
	LPSECURITY_ATTRIBUTES, /* reserved LPSECURITY_ATTRIBUTES lpSecurityAttributes */
], f => CreateHardLinkW = f);
export {CreateHardLinkW as CreateHardLink};

export function CreateHardLinkTransactedA () {};
CreateHardLinkTransactedA = createAutoLoader(lib, "CreateHardLinkTransactedA", BOOL /* BOOL */, [
	LPCSTR,                /* in       LPCSTR                lpFileName           */
	LPCSTR,                /* in       LPCSTR                lpExistingFileName   */
	LPSECURITY_ATTRIBUTES, /* reserved LPSECURITY_ATTRIBUTES lpSecurityAttributes */
	HANDLE,                /* in       HANDLE                hTransaction         */
], f => CreateHardLinkTransactedA = f);

export function CreateHardLinkTransactedW () {};
CreateHardLinkTransactedW = createAutoLoader(lib, "CreateHardLinkTransactedW", BOOL /* BOOL */, [
	LPCWSTR,               /* in       LPCWSTR               lpFileName           */
	LPCWSTR,               /* in       LPCWSTR               lpExistingFileName   */
	LPSECURITY_ATTRIBUTES, /* reserved LPSECURITY_ATTRIBUTES lpSecurityAttributes */
	HANDLE,                /* in       HANDLE                hTransaction         */
], f => CreateHardLinkTransactedW = f);
export {CreateHardLinkTransactedW as CreateHardLinkTransacted};

export function FindFirstFileNameTransactedW () {};
FindFirstFileNameTransactedW = createAutoLoader(lib, "FindFirstFileNameTransactedW", HANDLE /* HANDLE */, [
	LPCWSTR,        /* in     LPCWSTR lpFileName   */
	DWORD,          /* in     DWORD   dwFlags      */
	inout(LPDWORD), /* in out LPDWORD StringLength */
	PWSTR,          /*        PWSTR   LinkName     */
	HANDLE,         /* in opt HANDLE  hTransaction */
], f => FindFirstFileNameTransactedW = f);
export {FindFirstFileNameTransactedW as FindFirstFileNameTransacted};

export function CreateNamedPipeA () {};
CreateNamedPipeA = createAutoLoader(lib, "CreateNamedPipeA", HANDLE /* HANDLE */, [
	LPCSTR,                /* in     LPCSTR                lpName               */
	DWORD,                 /* in     DWORD                 dwOpenMode           */
	DWORD,                 /* in     DWORD                 dwPipeMode           */
	DWORD,                 /* in     DWORD                 nMaxInstances        */
	DWORD,                 /* in     DWORD                 nOutBufferSize       */
	DWORD,                 /* in     DWORD                 nInBufferSize        */
	DWORD,                 /* in     DWORD                 nDefaultTimeOut      */
	LPSECURITY_ATTRIBUTES, /* in opt LPSECURITY_ATTRIBUTES lpSecurityAttributes */
], f => CreateNamedPipeA = f);

export function GetNamedPipeHandleStateA () {};
GetNamedPipeHandleStateA = createAutoLoader(lib, "GetNamedPipeHandleStateA", BOOL /* BOOL */, [
	HANDLE,       /* in      HANDLE  hNamedPipe           */
	out(LPDWORD), /* out opt LPDWORD lpState              */
	out(LPDWORD), /* out opt LPDWORD lpCurInstances       */
	out(LPDWORD), /* out opt LPDWORD lpMaxCollectionCount */
	out(LPDWORD), /* out opt LPDWORD lpCollectDataTimeout */
	LPSTR,        /*         LPSTR   lpUserName           */
	DWORD,        /* in      DWORD   nMaxUserNameSize     */
], f => GetNamedPipeHandleStateA = f);

export function WaitNamedPipeA () {};
WaitNamedPipeA = createAutoLoader(lib, "WaitNamedPipeA", BOOL /* BOOL */, [
	LPCSTR, /* in LPCSTR lpNamedPipeName */
	DWORD,  /* in DWORD  nTimeOut        */
], f => WaitNamedPipeA = f);

export function GetNamedPipeClientComputerNameA () {};
GetNamedPipeClientComputerNameA = createAutoLoader(lib, "GetNamedPipeClientComputerNameA", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE Pipe                     */
	LPSTR,  /*    LPSTR  ClientComputerName       */
	ULONG,  /* in ULONG  ClientComputerNameLength */
], f => GetNamedPipeClientComputerNameA = f);

export function GetNamedPipeClientProcessId () {};
GetNamedPipeClientProcessId = createAutoLoader(lib, "GetNamedPipeClientProcessId", BOOL /* BOOL */, [
	HANDLE,      /* in  HANDLE Pipe            */
	out(PULONG), /* out PULONG ClientProcessId */
], f => GetNamedPipeClientProcessId = f);

export function GetNamedPipeClientSessionId () {};
GetNamedPipeClientSessionId = createAutoLoader(lib, "GetNamedPipeClientSessionId", BOOL /* BOOL */, [
	HANDLE,      /* in  HANDLE Pipe            */
	out(PULONG), /* out PULONG ClientSessionId */
], f => GetNamedPipeClientSessionId = f);

export function GetNamedPipeServerProcessId () {};
GetNamedPipeServerProcessId = createAutoLoader(lib, "GetNamedPipeServerProcessId", BOOL /* BOOL */, [
	HANDLE,      /* in  HANDLE Pipe            */
	out(PULONG), /* out PULONG ServerProcessId */
], f => GetNamedPipeServerProcessId = f);

export function GetNamedPipeServerSessionId () {};
GetNamedPipeServerSessionId = createAutoLoader(lib, "GetNamedPipeServerSessionId", BOOL /* BOOL */, [
	HANDLE,      /* in  HANDLE Pipe            */
	out(PULONG), /* out PULONG ServerSessionId */
], f => GetNamedPipeServerSessionId = f);

export function SetVolumeLabelA () {};
SetVolumeLabelA = createAutoLoader(lib, "SetVolumeLabelA", BOOL /* BOOL */, [
	LPCSTR, /* in opt LPCSTR lpRootPathName */
	LPCSTR, /* in opt LPCSTR lpVolumeName   */
], f => SetVolumeLabelA = f);

export function SetVolumeLabelW () {};
SetVolumeLabelW = createAutoLoader(lib, "SetVolumeLabelW", BOOL /* BOOL */, [
	LPCWSTR, /* in opt LPCWSTR lpRootPathName */
	LPCWSTR, /* in opt LPCWSTR lpVolumeName   */
], f => SetVolumeLabelW = f);
export {SetVolumeLabelW as SetVolumeLabel};

export function SetFileBandwidthReservation () {};
SetFileBandwidthReservation = createAutoLoader(lib, "SetFileBandwidthReservation", BOOL /* BOOL */, [
	HANDLE,       /* in  HANDLE  hFile                    */
	DWORD,        /* in  DWORD   nPeriodMilliseconds      */
	DWORD,        /* in  DWORD   nBytesPerPeriod          */
	BOOL,         /* in  BOOL    bDiscardable             */
	out(LPDWORD), /* out LPDWORD lpTransferSize           */
	out(LPDWORD), /* out LPDWORD lpNumOutstandingRequests */
], f => SetFileBandwidthReservation = f);

export function GetFileBandwidthReservation () {};
GetFileBandwidthReservation = createAutoLoader(lib, "GetFileBandwidthReservation", BOOL /* BOOL */, [
	HANDLE,       /* in  HANDLE  hFile                    */
	out(LPDWORD), /* out LPDWORD lpPeriodMilliseconds     */
	out(LPDWORD), /* out LPDWORD lpBytesPerPeriod         */
	out(LPBOOL),  /* out LPBOOL  pDiscardable             */
	out(LPDWORD), /* out LPDWORD lpTransferSize           */
	out(LPDWORD), /* out LPDWORD lpNumOutstandingRequests */
], f => GetFileBandwidthReservation = f);

export function ClearEventLogA () {};
ClearEventLogA = createAutoLoader(lib, "ClearEventLogA", BOOL /* BOOL */, [
	HANDLE, /* in     HANDLE hEventLog        */
	LPCSTR, /* in opt LPCSTR lpBackupFileName */
], f => ClearEventLogA = f);

export function ClearEventLogW () {};
ClearEventLogW = createAutoLoader(lib, "ClearEventLogW", BOOL /* BOOL */, [
	HANDLE,  /* in     HANDLE  hEventLog        */
	LPCWSTR, /* in opt LPCWSTR lpBackupFileName */
], f => ClearEventLogW = f);
export {ClearEventLogW as ClearEventLog};

export function BackupEventLogA () {};
BackupEventLogA = createAutoLoader(lib, "BackupEventLogA", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hEventLog        */
	LPCSTR, /* in LPCSTR lpBackupFileName */
], f => BackupEventLogA = f);

export function BackupEventLogW () {};
BackupEventLogW = createAutoLoader(lib, "BackupEventLogW", BOOL /* BOOL */, [
	HANDLE,  /* in HANDLE  hEventLog        */
	LPCWSTR, /* in LPCWSTR lpBackupFileName */
], f => BackupEventLogW = f);
export {BackupEventLogW as BackupEventLog};

export function CloseEventLog () {};
CloseEventLog = createAutoLoader(lib, "CloseEventLog", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hEventLog */
], f => CloseEventLog = f);

export function DeregisterEventSource () {};
DeregisterEventSource = createAutoLoader(lib, "DeregisterEventSource", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hEventLog */
], f => DeregisterEventSource = f);

export function NotifyChangeEventLog () {};
NotifyChangeEventLog = createAutoLoader(lib, "NotifyChangeEventLog", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hEventLog */
	HANDLE, /* in HANDLE hEvent    */
], f => NotifyChangeEventLog = f);

export function GetNumberOfEventLogRecords () {};
GetNumberOfEventLogRecords = createAutoLoader(lib, "GetNumberOfEventLogRecords", BOOL /* BOOL */, [
	HANDLE,      /* in  HANDLE hEventLog       */
	out(PDWORD), /* out PDWORD NumberOfRecords */
], f => GetNumberOfEventLogRecords = f);

export function GetOldestEventLogRecord () {};
GetOldestEventLogRecord = createAutoLoader(lib, "GetOldestEventLogRecord", BOOL /* BOOL */, [
	HANDLE,      /* in  HANDLE hEventLog    */
	out(PDWORD), /* out PDWORD OldestRecord */
], f => GetOldestEventLogRecord = f);

export function OpenEventLogA () {};
OpenEventLogA = createAutoLoader(lib, "OpenEventLogA", HANDLE /* HANDLE */, [
	LPCSTR, /* in opt LPCSTR lpUNCServerName */
	LPCSTR, /* in     LPCSTR lpSourceName    */
], f => OpenEventLogA = f);

export function OpenEventLogW () {};
OpenEventLogW = createAutoLoader(lib, "OpenEventLogW", HANDLE /* HANDLE */, [
	LPCWSTR, /* in opt LPCWSTR lpUNCServerName */
	LPCWSTR, /* in     LPCWSTR lpSourceName    */
], f => OpenEventLogW = f);
export {OpenEventLogW as OpenEventLog};

export function RegisterEventSourceA () {};
RegisterEventSourceA = createAutoLoader(lib, "RegisterEventSourceA", HANDLE /* HANDLE */, [
	LPCSTR, /* in opt LPCSTR lpUNCServerName */
	LPCSTR, /* in     LPCSTR lpSourceName    */
], f => RegisterEventSourceA = f);

export function RegisterEventSourceW () {};
RegisterEventSourceW = createAutoLoader(lib, "RegisterEventSourceW", HANDLE /* HANDLE */, [
	LPCWSTR, /* in opt LPCWSTR lpUNCServerName */
	LPCWSTR, /* in     LPCWSTR lpSourceName    */
], f => RegisterEventSourceW = f);
export {RegisterEventSourceW as RegisterEventSource};

export function OpenBackupEventLogA () {};
OpenBackupEventLogA = createAutoLoader(lib, "OpenBackupEventLogA", HANDLE /* HANDLE */, [
	LPCSTR, /* in opt LPCSTR lpUNCServerName */
	LPCSTR, /* in     LPCSTR lpFileName      */
], f => OpenBackupEventLogA = f);

export function OpenBackupEventLogW () {};
OpenBackupEventLogW = createAutoLoader(lib, "OpenBackupEventLogW", HANDLE /* HANDLE */, [
	LPCWSTR, /* in opt LPCWSTR lpUNCServerName */
	LPCWSTR, /* in     LPCWSTR lpFileName      */
], f => OpenBackupEventLogW = f);
export {OpenBackupEventLogW as OpenBackupEventLog};

export function ReadEventLogA () {};
ReadEventLogA = createAutoLoader(lib, "ReadEventLogA", BOOL /* BOOL */, [
	HANDLE,              /* in  HANDLE  hEventLog                */
	DWORD,               /* in  DWORD   dwReadFlags              */
	DWORD,               /* in  DWORD   dwRecordOffset           */
	LPVOID,              /*     LPVOID  lpBuffer                 */
	DWORD,               /* in  DWORD   nNumberOfBytesToRead     */
	out(pointer(DWORD)), /* out DWORD * pnBytesRead              */
	out(pointer(DWORD)), /* out DWORD * pnMinNumberOfBytesNeeded */
], f => ReadEventLogA = f);

export function ReadEventLogW () {};
ReadEventLogW = createAutoLoader(lib, "ReadEventLogW", BOOL /* BOOL */, [
	HANDLE,              /* in  HANDLE  hEventLog                */
	DWORD,               /* in  DWORD   dwReadFlags              */
	DWORD,               /* in  DWORD   dwRecordOffset           */
	LPVOID,              /*     LPVOID  lpBuffer                 */
	DWORD,               /* in  DWORD   nNumberOfBytesToRead     */
	out(pointer(DWORD)), /* out DWORD * pnBytesRead              */
	out(pointer(DWORD)), /* out DWORD * pnMinNumberOfBytesNeeded */
], f => ReadEventLogW = f);
export {ReadEventLogW as ReadEventLog};

export function GetEventLogInformation () {};
GetEventLogInformation = createAutoLoader(lib, "GetEventLogInformation", BOOL /* BOOL */, [
	HANDLE,       /* in  HANDLE  hEventLog      */
	DWORD,        /* in  DWORD   dwInfoLevel    */
	LPVOID,       /*     LPVOID  lpBuffer       */
	DWORD,        /* in  DWORD   cbBufSize      */
	out(LPDWORD), /* out LPDWORD pcbBytesNeeded */
], f => GetEventLogInformation = f);

export function OperationStart () {};
OperationStart = createAutoLoader(lib, "OperationStart", BOOL /* BOOL */, [
	pointer(OPERATION_START_PARAMETERS), /* in OPERATION_START_PARAMETERS* OperationStartParams */
], f => OperationStart = f);

export function OperationEnd () {};
OperationEnd = createAutoLoader(lib, "OperationEnd", BOOL /* BOOL */, [
	pointer(OPERATION_END_PARAMETERS), /* in OPERATION_END_PARAMETERS* OperationEndParams */
], f => OperationEnd = f);

export function AccessCheckAndAuditAlarmA () {};
AccessCheckAndAuditAlarmA = createAutoLoader(lib, "AccessCheckAndAuditAlarmA", BOOL /* BOOL */, [
	LPCSTR,               /* in     LPCSTR               SubsystemName      */
	LPVOID,               /* in opt LPVOID               HandleId           */
	LPSTR,                /* in     LPSTR                ObjectTypeName     */
	LPSTR,                /* in opt LPSTR                ObjectName         */
	PSECURITY_DESCRIPTOR, /* in     PSECURITY_DESCRIPTOR SecurityDescriptor */
	DWORD,                /* in     DWORD                DesiredAccess      */
	PGENERIC_MAPPING,     /* in     PGENERIC_MAPPING     GenericMapping     */
	BOOL,                 /* in     BOOL                 ObjectCreation     */
	out(LPDWORD),         /* out    LPDWORD              GrantedAccess      */
	out(LPBOOL),          /* out    LPBOOL               AccessStatus       */
	out(LPBOOL),          /* out    LPBOOL               pfGenerateOnClose  */
], f => AccessCheckAndAuditAlarmA = f);

export function ObjectOpenAuditAlarmA () {};
ObjectOpenAuditAlarmA = createAutoLoader(lib, "ObjectOpenAuditAlarmA", BOOL /* BOOL */, [
	LPCSTR,               /* in     LPCSTR               SubsystemName       */
	LPVOID,               /* in     LPVOID               HandleId            */
	LPSTR,                /* in     LPSTR                ObjectTypeName      */
	LPSTR,                /* in opt LPSTR                ObjectName          */
	PSECURITY_DESCRIPTOR, /* in     PSECURITY_DESCRIPTOR pSecurityDescriptor */
	HANDLE,               /* in     HANDLE               ClientToken         */
	DWORD,                /* in     DWORD                DesiredAccess       */
	DWORD,                /* in     DWORD                GrantedAccess       */
	PPRIVILEGE_SET,       /* in opt PPRIVILEGE_SET       Privileges          */
	BOOL,                 /* in     BOOL                 ObjectCreation      */
	BOOL,                 /* in     BOOL                 AccessGranted       */
	out(LPBOOL),          /* out    LPBOOL               GenerateOnClose     */
], f => ObjectOpenAuditAlarmA = f);

export function ObjectPrivilegeAuditAlarmA () {};
ObjectPrivilegeAuditAlarmA = createAutoLoader(lib, "ObjectPrivilegeAuditAlarmA", BOOL /* BOOL */, [
	LPCSTR,         /* in LPCSTR         SubsystemName */
	LPVOID,         /* in LPVOID         HandleId      */
	HANDLE,         /* in HANDLE         ClientToken   */
	DWORD,          /* in DWORD          DesiredAccess */
	PPRIVILEGE_SET, /* in PPRIVILEGE_SET Privileges    */
	BOOL,           /* in BOOL           AccessGranted */
], f => ObjectPrivilegeAuditAlarmA = f);

export function ObjectCloseAuditAlarmA () {};
ObjectCloseAuditAlarmA = createAutoLoader(lib, "ObjectCloseAuditAlarmA", BOOL /* BOOL */, [
	LPCSTR, /* in LPCSTR SubsystemName   */
	LPVOID, /* in LPVOID HandleId        */
	BOOL,   /* in BOOL   GenerateOnClose */
], f => ObjectCloseAuditAlarmA = f);

export function ObjectDeleteAuditAlarmA () {};
ObjectDeleteAuditAlarmA = createAutoLoader(lib, "ObjectDeleteAuditAlarmA", BOOL /* BOOL */, [
	LPCSTR, /* in LPCSTR SubsystemName   */
	LPVOID, /* in LPVOID HandleId        */
	BOOL,   /* in BOOL   GenerateOnClose */
], f => ObjectDeleteAuditAlarmA = f);

export function PrivilegedServiceAuditAlarmA () {};
PrivilegedServiceAuditAlarmA = createAutoLoader(lib, "PrivilegedServiceAuditAlarmA", BOOL /* BOOL */, [
	LPCSTR,         /* in LPCSTR         SubsystemName */
	LPCSTR,         /* in LPCSTR         ServiceName   */
	HANDLE,         /* in HANDLE         ClientToken   */
	PPRIVILEGE_SET, /* in PPRIVILEGE_SET Privileges    */
	BOOL,           /* in BOOL           AccessGranted */
], f => PrivilegedServiceAuditAlarmA = f);

export function AddConditionalAce () {};
AddConditionalAce = createAutoLoader(lib, "AddConditionalAce", BOOL /* BOOL */, [
	inout(PACL),         /* in out PACL    pAcl          */
	DWORD,               /* in     DWORD   dwAceRevision */
	DWORD,               /* in     DWORD   AceFlags      */
	UCHAR,               /* in     UCHAR   AceType       */
	DWORD,               /* in     DWORD   AccessMask    */
	PSID,                /* in     PSID    pSid          */
	PWCHAR,              /* in     PWCHAR  ConditionStr  */
	out(pointer(DWORD)), /* out    DWORD * ReturnLength  */
], f => AddConditionalAce = f);

export function SetFileSecurityA () {};
SetFileSecurityA = createAutoLoader(lib, "SetFileSecurityA", BOOL /* BOOL */, [
	LPCSTR,               /* in LPCSTR               lpFileName          */
	SECURITY_INFORMATION, /* in SECURITY_INFORMATION SecurityInformation */
	PSECURITY_DESCRIPTOR, /* in PSECURITY_DESCRIPTOR pSecurityDescriptor */
], f => SetFileSecurityA = f);

export function ReadDirectoryChangesW () {};
ReadDirectoryChangesW = createAutoLoader(lib, "ReadDirectoryChangesW", BOOL /* BOOL */, [
	HANDLE,                          /* in         HANDLE                          hDirectory          */
	LPVOID,                          /*            LPVOID                          lpBuffer            */
	DWORD,                           /* in         DWORD                           nBufferLength       */
	BOOL,                            /* in         BOOL                            bWatchSubtree       */
	DWORD,                           /* in         DWORD                           dwNotifyFilter      */
	out(LPDWORD),                    /* out opt    LPDWORD                         lpBytesReturned     */
	inout(LPOVERLAPPED),             /* in out opt LPOVERLAPPED                    lpOverlapped        */
	LPOVERLAPPED_COMPLETION_ROUTINE, /* in opt     LPOVERLAPPED_COMPLETION_ROUTINE lpCompletionRoutine */
], f => ReadDirectoryChangesW = f);
export {ReadDirectoryChangesW as ReadDirectoryChanges};

export function ReadDirectoryChangesExW () {};
ReadDirectoryChangesExW = createAutoLoader(lib, "ReadDirectoryChangesExW", BOOL /* BOOL */, [
	HANDLE,                                  /* in         HANDLE                                  hDirectory                          */
	LPVOID,                                  /*            LPVOID                                  lpBuffer                            */
	DWORD,                                   /* in         DWORD                                   nBufferLength                       */
	BOOL,                                    /* in         BOOL                                    bWatchSubtree                       */
	DWORD,                                   /* in         DWORD                                   dwNotifyFilter                      */
	out(LPDWORD),                            /* out opt    LPDWORD                                 lpBytesReturned                     */
	inout(LPOVERLAPPED),                     /* in out opt LPOVERLAPPED                            lpOverlapped                        */
	LPOVERLAPPED_COMPLETION_ROUTINE,         /* in opt     LPOVERLAPPED_COMPLETION_ROUTINE         lpCompletionRoutine                 */
	READ_DIRECTORY_NOTIFY_INFORMATION_CLASS, /* in         READ_DIRECTORY_NOTIFY_INFORMATION_CLASS ReadDirectoryNotifyInformationClass */
], f => ReadDirectoryChangesExW = f);
export {ReadDirectoryChangesExW as ReadDirectoryChangesEx};

export function MapViewOfFileExNuma () {};
MapViewOfFileExNuma = createAutoLoader(lib, "MapViewOfFileExNuma", LPVOID /* LPVOID */, [
	HANDLE, /* in     HANDLE hFileMappingObject   */
	DWORD,  /* in     DWORD  dwDesiredAccess      */
	DWORD,  /* in     DWORD  dwFileOffsetHigh     */
	DWORD,  /* in     DWORD  dwFileOffsetLow      */
	SIZE_T, /* in     SIZE_T dwNumberOfBytesToMap */
	LPVOID, /* in opt LPVOID lpBaseAddress        */
	DWORD,  /* in     DWORD  nndPreferred         */
], f => MapViewOfFileExNuma = f);

export function IsBadReadPtr () {};
IsBadReadPtr = createAutoLoader(lib, "IsBadReadPtr", BOOL /* BOOL */, [
	pointer(VOID), /* in opt CONST VOID * lp  */
	UINT_PTR,      /* in     UINT_PTR     ucb */
], f => IsBadReadPtr = f);

export function IsBadWritePtr () {};
IsBadWritePtr = createAutoLoader(lib, "IsBadWritePtr", BOOL /* BOOL */, [
	LPVOID,   /* in opt LPVOID   lp  */
	UINT_PTR, /* in     UINT_PTR ucb */
], f => IsBadWritePtr = f);

export function IsBadHugeReadPtr () {};
IsBadHugeReadPtr = createAutoLoader(lib, "IsBadHugeReadPtr", BOOL /* BOOL */, [
	pointer(VOID), /* in opt CONST VOID * lp  */
	UINT_PTR,      /* in     UINT_PTR     ucb */
], f => IsBadHugeReadPtr = f);

export function IsBadHugeWritePtr () {};
IsBadHugeWritePtr = createAutoLoader(lib, "IsBadHugeWritePtr", BOOL /* BOOL */, [
	LPVOID,   /* in opt LPVOID   lp  */
	UINT_PTR, /* in     UINT_PTR ucb */
], f => IsBadHugeWritePtr = f);

export function IsBadCodePtr () {};
IsBadCodePtr = createAutoLoader(lib, "IsBadCodePtr", BOOL /* BOOL */, [
	FARPROC, /* in opt FARPROC lpfn */
], f => IsBadCodePtr = f);

export function IsBadStringPtrA () {};
IsBadStringPtrA = createAutoLoader(lib, "IsBadStringPtrA", BOOL /* BOOL */, [
	LPCSTR,   /* in opt LPCSTR   lpsz    */
	UINT_PTR, /* in     UINT_PTR ucchMax */
], f => IsBadStringPtrA = f);

export function IsBadStringPtrW () {};
IsBadStringPtrW = createAutoLoader(lib, "IsBadStringPtrW", BOOL /* BOOL */, [
	LPCWSTR,  /* in opt LPCWSTR  lpsz    */
	UINT_PTR, /* in     UINT_PTR ucchMax */
], f => IsBadStringPtrW = f);
export {IsBadStringPtrW as IsBadStringPtr};

export function LookupAccountSidA () {};
LookupAccountSidA = createAutoLoader(lib, "LookupAccountSidA", BOOL /* BOOL */, [
	LPCSTR,             /* in opt LPCSTR        lpSystemName            */
	PSID,               /* in     PSID          Sid                     */
	LPSTR,              /*        LPSTR         Name                    */
	inout(LPDWORD),     /* in out LPDWORD       cchName                 */
	LPSTR,              /*        LPSTR         ReferencedDomainName    */
	inout(LPDWORD),     /* in out LPDWORD       cchReferencedDomainName */
	out(PSID_NAME_USE), /* out    PSID_NAME_USE peUse                   */
], f => LookupAccountSidA = f);

export function LookupAccountSidW () {};
LookupAccountSidW = createAutoLoader(lib, "LookupAccountSidW", BOOL /* BOOL */, [
	LPCWSTR,            /* in opt LPCWSTR       lpSystemName            */
	PSID,               /* in     PSID          Sid                     */
	LPWSTR,             /*        LPWSTR        Name                    */
	inout(LPDWORD),     /* in out LPDWORD       cchName                 */
	LPWSTR,             /*        LPWSTR        ReferencedDomainName    */
	inout(LPDWORD),     /* in out LPDWORD       cchReferencedDomainName */
	out(PSID_NAME_USE), /* out    PSID_NAME_USE peUse                   */
], f => LookupAccountSidW = f);
export {LookupAccountSidW as LookupAccountSid};

export function LookupAccountSidLocalA () {};
LookupAccountSidLocalA = createAutoLoader(lib, "LookupAccountSidLocalA", BOOL /* BOOL */, [
	PSID,               /* in     PSID          Sid                     */
	LPSTR,              /*        LPSTR         Name                    */
	inout(LPDWORD),     /* in out LPDWORD       cchName                 */
	LPSTR,              /*        LPSTR         ReferencedDomainName    */
	inout(LPDWORD),     /* in out LPDWORD       cchReferencedDomainName */
	out(PSID_NAME_USE), /* out    PSID_NAME_USE peUse                   */
], f => LookupAccountSidLocalA = f);

export function LookupAccountSidLocalW () {};
LookupAccountSidLocalW = createAutoLoader(lib, "LookupAccountSidLocalW", BOOL /* BOOL */, [
	PSID,               /* in     PSID          Sid                     */
	LPWSTR,             /*        LPWSTR        Name                    */
	inout(LPDWORD),     /* in out LPDWORD       cchName                 */
	LPWSTR,             /*        LPWSTR        ReferencedDomainName    */
	inout(LPDWORD),     /* in out LPDWORD       cchReferencedDomainName */
	out(PSID_NAME_USE), /* out    PSID_NAME_USE peUse                   */
], f => LookupAccountSidLocalW = f);
export {LookupAccountSidLocalW as LookupAccountSidLocal};

export function LookupPrivilegeValueA () {};
LookupPrivilegeValueA = createAutoLoader(lib, "LookupPrivilegeValueA", BOOL /* BOOL */, [
	LPCSTR,     /* in opt LPCSTR lpSystemName */
	LPCSTR,     /* in     LPCSTR lpName       */
	out(PLUID), /* out    PLUID  lpLuid       */
], f => LookupPrivilegeValueA = f);

export function LookupPrivilegeValueW () {};
LookupPrivilegeValueW = createAutoLoader(lib, "LookupPrivilegeValueW", BOOL /* BOOL */, [
	LPCWSTR,    /* in opt LPCWSTR lpSystemName */
	LPCWSTR,    /* in     LPCWSTR lpName       */
	out(PLUID), /* out    PLUID   lpLuid       */
], f => LookupPrivilegeValueW = f);
export {LookupPrivilegeValueW as LookupPrivilegeValue};

export function LookupPrivilegeNameA () {};
LookupPrivilegeNameA = createAutoLoader(lib, "LookupPrivilegeNameA", BOOL /* BOOL */, [
	LPCSTR,         /* in opt LPCSTR  lpSystemName */
	PLUID,          /* in     PLUID   lpLuid       */
	LPSTR,          /*        LPSTR   lpName       */
	inout(LPDWORD), /* in out LPDWORD cchName      */
], f => LookupPrivilegeNameA = f);

export function LookupPrivilegeNameW () {};
LookupPrivilegeNameW = createAutoLoader(lib, "LookupPrivilegeNameW", BOOL /* BOOL */, [
	LPCWSTR,        /* in opt LPCWSTR lpSystemName */
	PLUID,          /* in     PLUID   lpLuid       */
	LPWSTR,         /*        LPWSTR  lpName       */
	inout(LPDWORD), /* in out LPDWORD cchName      */
], f => LookupPrivilegeNameW = f);
export {LookupPrivilegeNameW as LookupPrivilegeName};

export function LookupPrivilegeDisplayNameA () {};
LookupPrivilegeDisplayNameA = createAutoLoader(lib, "LookupPrivilegeDisplayNameA", BOOL /* BOOL */, [
	LPCSTR,         /* in opt LPCSTR  lpSystemName   */
	LPCSTR,         /* in     LPCSTR  lpName         */
	LPSTR,          /*        LPSTR   lpDisplayName  */
	inout(LPDWORD), /* in out LPDWORD cchDisplayName */
	out(LPDWORD),   /* out    LPDWORD lpLanguageId   */
], f => LookupPrivilegeDisplayNameA = f);

export function LookupPrivilegeDisplayNameW () {};
LookupPrivilegeDisplayNameW = createAutoLoader(lib, "LookupPrivilegeDisplayNameW", BOOL /* BOOL */, [
	LPCWSTR,        /* in opt LPCWSTR lpSystemName   */
	LPCWSTR,        /* in     LPCWSTR lpName         */
	LPWSTR,         /*        LPWSTR  lpDisplayName  */
	inout(LPDWORD), /* in out LPDWORD cchDisplayName */
	out(LPDWORD),   /* out    LPDWORD lpLanguageId   */
], f => LookupPrivilegeDisplayNameW = f);
export {LookupPrivilegeDisplayNameW as LookupPrivilegeDisplayName};

export function BuildCommDCBA () {};
BuildCommDCBA = createAutoLoader(lib, "BuildCommDCBA", BOOL /* BOOL */, [
	LPCSTR,     /* in  LPCSTR lpDef */
	out(LPDCB), /* out LPDCB  lpDCB */
], f => BuildCommDCBA = f);

export function BuildCommDCBW () {};
BuildCommDCBW = createAutoLoader(lib, "BuildCommDCBW", BOOL /* BOOL */, [
	LPCWSTR,    /* in  LPCWSTR lpDef */
	out(LPDCB), /* out LPDCB   lpDCB */
], f => BuildCommDCBW = f);
export {BuildCommDCBW as BuildCommDCB};

export function BuildCommDCBAndTimeoutsA () {};
BuildCommDCBAndTimeoutsA = createAutoLoader(lib, "BuildCommDCBAndTimeoutsA", BOOL /* BOOL */, [
	LPCSTR,              /* in  LPCSTR         lpDef          */
	out(LPDCB),          /* out LPDCB          lpDCB          */
	out(LPCOMMTIMEOUTS), /* out LPCOMMTIMEOUTS lpCommTimeouts */
], f => BuildCommDCBAndTimeoutsA = f);

export function BuildCommDCBAndTimeoutsW () {};
BuildCommDCBAndTimeoutsW = createAutoLoader(lib, "BuildCommDCBAndTimeoutsW", BOOL /* BOOL */, [
	LPCWSTR,             /* in  LPCWSTR        lpDef          */
	out(LPDCB),          /* out LPDCB          lpDCB          */
	out(LPCOMMTIMEOUTS), /* out LPCOMMTIMEOUTS lpCommTimeouts */
], f => BuildCommDCBAndTimeoutsW = f);
export {BuildCommDCBAndTimeoutsW as BuildCommDCBAndTimeouts};

export function CommConfigDialogA () {};
CommConfigDialogA = createAutoLoader(lib, "CommConfigDialogA", BOOL /* BOOL */, [
	LPCSTR,              /* in     LPCSTR       lpszName */
	HWND,                /* in opt HWND         hWnd     */
	inout(LPCOMMCONFIG), /* in out LPCOMMCONFIG lpCC     */
], f => CommConfigDialogA = f);

export function CommConfigDialogW () {};
CommConfigDialogW = createAutoLoader(lib, "CommConfigDialogW", BOOL /* BOOL */, [
	LPCWSTR,             /* in     LPCWSTR      lpszName */
	HWND,                /* in opt HWND         hWnd     */
	inout(LPCOMMCONFIG), /* in out LPCOMMCONFIG lpCC     */
], f => CommConfigDialogW = f);
export {CommConfigDialogW as CommConfigDialog};

export function GetDefaultCommConfigA () {};
GetDefaultCommConfigA = createAutoLoader(lib, "GetDefaultCommConfigA", BOOL /* BOOL */, [
	LPCSTR,         /* in     LPCSTR       lpszName */
	LPCOMMCONFIG,   /*        LPCOMMCONFIG lpCC     */
	inout(LPDWORD), /* in out LPDWORD      lpdwSize */
], f => GetDefaultCommConfigA = f);

export function GetDefaultCommConfigW () {};
GetDefaultCommConfigW = createAutoLoader(lib, "GetDefaultCommConfigW", BOOL /* BOOL */, [
	LPCWSTR,        /* in     LPCWSTR      lpszName */
	LPCOMMCONFIG,   /*        LPCOMMCONFIG lpCC     */
	inout(LPDWORD), /* in out LPDWORD      lpdwSize */
], f => GetDefaultCommConfigW = f);
export {GetDefaultCommConfigW as GetDefaultCommConfig};

export function SetDefaultCommConfigA () {};
SetDefaultCommConfigA = createAutoLoader(lib, "SetDefaultCommConfigA", BOOL /* BOOL */, [
	LPCSTR,       /* in LPCSTR       lpszName */
	LPCOMMCONFIG, /*    LPCOMMCONFIG lpCC     */
	DWORD,        /* in DWORD        dwSize   */
], f => SetDefaultCommConfigA = f);

export function SetDefaultCommConfigW () {};
SetDefaultCommConfigW = createAutoLoader(lib, "SetDefaultCommConfigW", BOOL /* BOOL */, [
	LPCWSTR,      /* in LPCWSTR      lpszName */
	LPCOMMCONFIG, /*    LPCOMMCONFIG lpCC     */
	DWORD,        /* in DWORD        dwSize   */
], f => SetDefaultCommConfigW = f);
export {SetDefaultCommConfigW as SetDefaultCommConfig};

export function GetComputerNameA () {};
GetComputerNameA = createAutoLoader(lib, "GetComputerNameA", BOOL /* BOOL */, [
	LPSTR,          /*        LPSTR   lpBuffer */
	inout(LPDWORD), /* in out LPDWORD nSize    */
], f => GetComputerNameA = f);

export function GetComputerNameW () {};
GetComputerNameW = createAutoLoader(lib, "GetComputerNameW", BOOL /* BOOL */, [
	LPWSTR,         /*        LPWSTR  lpBuffer */
	inout(LPDWORD), /* in out LPDWORD nSize    */
], f => GetComputerNameW = f);
export {GetComputerNameW as GetComputerName};

export function DnsHostnameToComputerNameA () {};
DnsHostnameToComputerNameA = createAutoLoader(lib, "DnsHostnameToComputerNameA", BOOL /* BOOL */, [
	LPCSTR,         /* in     LPCSTR  Hostname     */
	LPSTR,          /*        LPSTR   ComputerName */
	inout(LPDWORD), /* in out LPDWORD nSize        */
], f => DnsHostnameToComputerNameA = f);

export function DnsHostnameToComputerNameW () {};
DnsHostnameToComputerNameW = createAutoLoader(lib, "DnsHostnameToComputerNameW", BOOL /* BOOL */, [
	LPCWSTR,        /* in     LPCWSTR Hostname     */
	LPWSTR,         /*        LPWSTR  ComputerName */
	inout(LPDWORD), /* in out LPDWORD nSize        */
], f => DnsHostnameToComputerNameW = f);
export {DnsHostnameToComputerNameW as DnsHostnameToComputerName};

export function GetUserNameA () {};
GetUserNameA = createAutoLoader(lib, "GetUserNameA", BOOL /* BOOL */, [
	LPSTR,          /*        LPSTR   lpBuffer  */
	inout(LPDWORD), /* in out LPDWORD pcbBuffer */
], f => GetUserNameA = f);

export function GetUserNameW () {};
GetUserNameW = createAutoLoader(lib, "GetUserNameW", BOOL /* BOOL */, [
	LPWSTR,         /*        LPWSTR  lpBuffer  */
	inout(LPDWORD), /* in out LPDWORD pcbBuffer */
], f => GetUserNameW = f);
export {GetUserNameW as GetUserName};

export function LogonUserA () {};
LogonUserA = createAutoLoader(lib, "LogonUserA", BOOL /* BOOL */, [
	LPCSTR,  /* in     LPCSTR  lpszUsername    */
	LPCSTR,  /* in opt LPCSTR  lpszDomain      */
	LPCSTR,  /* in opt LPCSTR  lpszPassword    */
	DWORD,   /* in     DWORD   dwLogonType     */
	DWORD,   /* in     DWORD   dwLogonProvider */
	PHANDLE, /*        PHANDLE phToken         */
], f => LogonUserA = f);

export function LogonUserW () {};
LogonUserW = createAutoLoader(lib, "LogonUserW", BOOL /* BOOL */, [
	LPCWSTR, /* in     LPCWSTR lpszUsername    */
	LPCWSTR, /* in opt LPCWSTR lpszDomain      */
	LPCWSTR, /* in opt LPCWSTR lpszPassword    */
	DWORD,   /* in     DWORD   dwLogonType     */
	DWORD,   /* in     DWORD   dwLogonProvider */
	PHANDLE, /*        PHANDLE phToken         */
], f => LogonUserW = f);
export {LogonUserW as LogonUser};

export function CreateProcessWithLogonW () {};
CreateProcessWithLogonW = createAutoLoader(lib, "CreateProcessWithLogonW", BOOL /* BOOL */, [
	LPCWSTR,                    /* in         LPCWSTR               lpUsername           */
	LPCWSTR,                    /* in opt     LPCWSTR               lpDomain             */
	LPCWSTR,                    /* in         LPCWSTR               lpPassword           */
	DWORD,                      /* in         DWORD                 dwLogonFlags         */
	LPCWSTR,                    /* in opt     LPCWSTR               lpApplicationName    */
	inout(LPWSTR),              /* in out opt LPWSTR                lpCommandLine        */
	DWORD,                      /* in         DWORD                 dwCreationFlags      */
	LPVOID,                     /* in opt     LPVOID                lpEnvironment        */
	LPCWSTR,                    /* in opt     LPCWSTR               lpCurrentDirectory   */
	LPSTARTUPINFOW,             /* in         LPSTARTUPINFOW        lpStartupInfo        */
	out(LPPROCESS_INFORMATION), /* out        LPPROCESS_INFORMATION lpProcessInformation */
], f => CreateProcessWithLogonW = f);
export {CreateProcessWithLogonW as CreateProcessWithLogon};

export function CreateProcessWithTokenW () {};
CreateProcessWithTokenW = createAutoLoader(lib, "CreateProcessWithTokenW", BOOL /* BOOL */, [
	HANDLE,                     /* in         HANDLE                hToken               */
	DWORD,                      /* in         DWORD                 dwLogonFlags         */
	LPCWSTR,                    /* in opt     LPCWSTR               lpApplicationName    */
	inout(LPWSTR),              /* in out opt LPWSTR                lpCommandLine        */
	DWORD,                      /* in         DWORD                 dwCreationFlags      */
	LPVOID,                     /* in opt     LPVOID                lpEnvironment        */
	LPCWSTR,                    /* in opt     LPCWSTR               lpCurrentDirectory   */
	LPSTARTUPINFOW,             /* in         LPSTARTUPINFOW        lpStartupInfo        */
	out(LPPROCESS_INFORMATION), /* out        LPPROCESS_INFORMATION lpProcessInformation */
], f => CreateProcessWithTokenW = f);
export {CreateProcessWithTokenW as CreateProcessWithToken};

export function IsTokenUntrusted () {};
IsTokenUntrusted = createAutoLoader(lib, "IsTokenUntrusted", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE TokenHandle */
], f => IsTokenUntrusted = f);

export function RegisterWaitForSingleObject () {};
RegisterWaitForSingleObject = createAutoLoader(lib, "RegisterWaitForSingleObject", BOOL /* BOOL */, [
	PHANDLE,             /*        PHANDLE             phNewWaitObject */
	HANDLE,              /* in     HANDLE              hObject         */
	WAITORTIMERCALLBACK, /* in     WAITORTIMERCALLBACK Callback        */
	PVOID,               /* in opt PVOID               Context         */
	ULONG,               /* in     ULONG               dwMilliseconds  */
	ULONG,               /* in     ULONG               dwFlags         */
], f => RegisterWaitForSingleObject = f);

export function UnregisterWait () {};
UnregisterWait = createAutoLoader(lib, "UnregisterWait", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE WaitHandle */
], f => UnregisterWait = f);

export function BindIoCompletionCallback () {};
BindIoCompletionCallback = createAutoLoader(lib, "BindIoCompletionCallback", BOOL /* BOOL */, [
	HANDLE,                          /* in HANDLE                          FileHandle */
	LPOVERLAPPED_COMPLETION_ROUTINE, /* in LPOVERLAPPED_COMPLETION_ROUTINE Function   */
	ULONG,                           /* in ULONG                           Flags      */
], f => BindIoCompletionCallback = f);

export function SetTimerQueueTimer () {};
SetTimerQueueTimer = createAutoLoader(lib, "SetTimerQueueTimer", HANDLE /* HANDLE */, [
	HANDLE,              /* in opt HANDLE              TimerQueue */
	WAITORTIMERCALLBACK, /* in     WAITORTIMERCALLBACK Callback   */
	PVOID,               /* in opt PVOID               Parameter  */
	DWORD,               /* in     DWORD               DueTime    */
	DWORD,               /* in     DWORD               Period     */
	BOOL,                /* in     BOOL                PreferIo   */
], f => SetTimerQueueTimer = f);

export function CancelTimerQueueTimer () {};
CancelTimerQueueTimer = createAutoLoader(lib, "CancelTimerQueueTimer", BOOL /* BOOL */, [
	HANDLE, /* in opt HANDLE TimerQueue */
	HANDLE, /* in     HANDLE Timer      */
], f => CancelTimerQueueTimer = f);

export function DeleteTimerQueue () {};
DeleteTimerQueue = createAutoLoader(lib, "DeleteTimerQueue", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE TimerQueue */
], f => DeleteTimerQueue = f);

export function CreatePrivateNamespaceA () {};
CreatePrivateNamespaceA = createAutoLoader(lib, "CreatePrivateNamespaceA", HANDLE /* HANDLE */, [
	LPSECURITY_ATTRIBUTES, /* in opt LPSECURITY_ATTRIBUTES lpPrivateNamespaceAttributes */
	LPVOID,                /* in     LPVOID                lpBoundaryDescriptor         */
	LPCSTR,                /* in     LPCSTR                lpAliasPrefix                */
], f => CreatePrivateNamespaceA = f);

export function OpenPrivateNamespaceA () {};
OpenPrivateNamespaceA = createAutoLoader(lib, "OpenPrivateNamespaceA", HANDLE /* HANDLE */, [
	LPVOID, /* in LPVOID lpBoundaryDescriptor */
	LPCSTR, /* in LPCSTR lpAliasPrefix        */
], f => OpenPrivateNamespaceA = f);

export function CreateBoundaryDescriptorA () {};
CreateBoundaryDescriptorA = createAutoLoader(lib, "CreateBoundaryDescriptorA", HANDLE /* HANDLE */, [
	LPCSTR, /* in LPCSTR Name  */
	ULONG,  /* in ULONG  Flags */
], f => CreateBoundaryDescriptorA = f);

export function AddIntegrityLabelToBoundaryDescriptor () {};
AddIntegrityLabelToBoundaryDescriptor = createAutoLoader(lib, "AddIntegrityLabelToBoundaryDescriptor", BOOL /* BOOL */, [
	inout(pointer(HANDLE)), /* in out HANDLE * BoundaryDescriptor */
	PSID,                   /* in     PSID     IntegrityLabel     */
], f => AddIntegrityLabelToBoundaryDescriptor = f);

export function GetCurrentHwProfileA () {};
GetCurrentHwProfileA = createAutoLoader(lib, "GetCurrentHwProfileA", BOOL /* BOOL */, [
	out(LPHW_PROFILE_INFOA), /* out LPHW_PROFILE_INFOA lpHwProfileInfo */
], f => GetCurrentHwProfileA = f);

export function GetCurrentHwProfileW () {};
GetCurrentHwProfileW = createAutoLoader(lib, "GetCurrentHwProfileW", BOOL /* BOOL */, [
	out(LPHW_PROFILE_INFOW), /* out LPHW_PROFILE_INFOW lpHwProfileInfo */
], f => GetCurrentHwProfileW = f);
export {GetCurrentHwProfileW as GetCurrentHwProfile};

export function VerifyVersionInfoA () {};
VerifyVersionInfoA = createAutoLoader(lib, "VerifyVersionInfoA", BOOL /* BOOL */, [
	inout(LPOSVERSIONINFOEXA), /* in out LPOSVERSIONINFOEXA lpVersionInformation */
	DWORD,                     /* in     DWORD              dwTypeMask           */
	DWORDLONG,                 /* in     DWORDLONG          dwlConditionMask     */
], f => VerifyVersionInfoA = f);

export function VerifyVersionInfoW () {};
VerifyVersionInfoW = createAutoLoader(lib, "VerifyVersionInfoW", BOOL /* BOOL */, [
	inout(LPOSVERSIONINFOEXW), /* in out LPOSVERSIONINFOEXW lpVersionInformation */
	DWORD,                     /* in     DWORD              dwTypeMask           */
	DWORDLONG,                 /* in     DWORDLONG          dwlConditionMask     */
], f => VerifyVersionInfoW = f);
export {VerifyVersionInfoW as VerifyVersionInfo};

export function SetSystemPowerState () {};
SetSystemPowerState = createAutoLoader(lib, "SetSystemPowerState", BOOL /* BOOL */, [
	BOOL, /* in BOOL fSuspend */
	BOOL, /* in BOOL fForce   */
], f => SetSystemPowerState = f);

export function GetSystemPowerStatus () {};
GetSystemPowerStatus = createAutoLoader(lib, "GetSystemPowerStatus", BOOL /* BOOL */, [
	out(LPSYSTEM_POWER_STATUS), /* out LPSYSTEM_POWER_STATUS lpSystemPowerStatus */
], f => GetSystemPowerStatus = f);

export function CreateJobObjectA () {};
CreateJobObjectA = createAutoLoader(lib, "CreateJobObjectA", HANDLE /* HANDLE */, [
	LPSECURITY_ATTRIBUTES, /* in opt LPSECURITY_ATTRIBUTES lpJobAttributes */
	LPCSTR,                /* in opt LPCSTR                lpName          */
], f => CreateJobObjectA = f);

export function OpenJobObjectA () {};
OpenJobObjectA = createAutoLoader(lib, "OpenJobObjectA", HANDLE /* HANDLE */, [
	DWORD,  /* in DWORD  dwDesiredAccess */
	BOOL,   /* in BOOL   bInheritHandle  */
	LPCSTR, /* in LPCSTR lpName          */
], f => OpenJobObjectA = f);

export function CreateJobSet () {};
CreateJobSet = createAutoLoader(lib, "CreateJobSet", BOOL /* BOOL */, [
	ULONG,          /* in ULONG          NumJob     */
	PJOB_SET_ARRAY, /*    PJOB_SET_ARRAY UserJobSet */
	ULONG,          /* in ULONG          Flags      */
], f => CreateJobSet = f);

export function FindFirstVolumeA () {};
FindFirstVolumeA = createAutoLoader(lib, "FindFirstVolumeA", HANDLE /* HANDLE */, [
	LPSTR, /*    LPSTR lpszVolumeName  */
	DWORD, /* in DWORD cchBufferLength */
], f => FindFirstVolumeA = f);

export function FindNextVolumeA () {};
FindNextVolumeA = createAutoLoader(lib, "FindNextVolumeA", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hFindVolume     */	// 头文件定义错
	LPSTR,  /*    LPSTR  lpszVolumeName  */
	DWORD,  /* in DWORD  cchBufferLength */
], f => FindNextVolumeA = f);

export function FindFirstVolumeMountPointA () {};
FindFirstVolumeMountPointA = createAutoLoader(lib, "FindFirstVolumeMountPointA", HANDLE /* HANDLE */, [
	LPCSTR, /* in LPCSTR lpszRootPathName     */
	LPSTR,  /*    LPSTR  lpszVolumeMountPoint */
	DWORD,  /* in DWORD  cchBufferLength      */
], f => FindFirstVolumeMountPointA = f);

export function FindFirstVolumeMountPointW () {};
FindFirstVolumeMountPointW = createAutoLoader(lib, "FindFirstVolumeMountPointW", HANDLE /* HANDLE */, [
	LPCWSTR, /* in LPCWSTR lpszRootPathName     */
	LPWSTR,  /*    LPWSTR  lpszVolumeMountPoint */
	DWORD,   /* in DWORD   cchBufferLength      */
], f => FindFirstVolumeMountPointW = f);
export {FindFirstVolumeMountPointW as FindFirstVolumeMountPoint};

export function FindNextVolumeMountPointA () {};
FindNextVolumeMountPointA = createAutoLoader(lib, "FindNextVolumeMountPointA", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hFindVolumeMountPoint */
	LPSTR,  /*    LPSTR  lpszVolumeMountPoint  */
	DWORD,  /* in DWORD  cchBufferLength       */
], f => FindNextVolumeMountPointA = f);

export function FindNextVolumeMountPointW () {};
FindNextVolumeMountPointW = createAutoLoader(lib, "FindNextVolumeMountPointW", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hFindVolumeMountPoint */
	LPWSTR, /*    LPWSTR lpszVolumeMountPoint  */
	DWORD,  /* in DWORD  cchBufferLength       */
], f => FindNextVolumeMountPointW = f);
export {FindNextVolumeMountPointW as FindNextVolumeMountPoint};

export function FindVolumeMountPointClose () {};
FindVolumeMountPointClose = createAutoLoader(lib, "FindVolumeMountPointClose", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hFindVolumeMountPoint */
], f => FindVolumeMountPointClose = f);

export function SetVolumeMountPointA () {};
SetVolumeMountPointA = createAutoLoader(lib, "SetVolumeMountPointA", BOOL /* BOOL */, [
	LPCSTR, /* in LPCSTR lpszVolumeMountPoint */
	LPCSTR, /* in LPCSTR lpszVolumeName       */
], f => SetVolumeMountPointA = f);

export function SetVolumeMountPointW () {};
SetVolumeMountPointW = createAutoLoader(lib, "SetVolumeMountPointW", BOOL /* BOOL */, [
	LPCWSTR, /* in LPCWSTR lpszVolumeMountPoint */
	LPCWSTR, /* in LPCWSTR lpszVolumeName       */
], f => SetVolumeMountPointW = f);
export {SetVolumeMountPointW as SetVolumeMountPoint};

export function DeleteVolumeMountPointA () {};
DeleteVolumeMountPointA = createAutoLoader(lib, "DeleteVolumeMountPointA", BOOL /* BOOL */, [
	LPCSTR, /* in LPCSTR lpszVolumeMountPoint */
], f => DeleteVolumeMountPointA = f);

export function GetVolumeNameForVolumeMountPointA () {};
GetVolumeNameForVolumeMountPointA = createAutoLoader(lib, "GetVolumeNameForVolumeMountPointA", BOOL /* BOOL */, [
	LPCSTR, /* in LPCSTR lpszVolumeMountPoint */
	LPSTR,  /*    LPSTR  lpszVolumeName       */
	DWORD,  /* in DWORD  cchBufferLength      */
], f => GetVolumeNameForVolumeMountPointA = f);

export function GetVolumePathNameA () {};
GetVolumePathNameA = createAutoLoader(lib, "GetVolumePathNameA", BOOL /* BOOL */, [
	LPCSTR, /* in LPCSTR lpszFileName       */
	LPSTR,  /*    LPSTR  lpszVolumePathName */
	DWORD,  /* in DWORD  cchBufferLength    */
], f => GetVolumePathNameA = f);

export function GetVolumePathNamesForVolumeNameA () {};
GetVolumePathNamesForVolumeNameA = createAutoLoader(lib, "GetVolumePathNamesForVolumeNameA", BOOL /* BOOL */, [
	LPCSTR,      /* in  LPCSTR lpszVolumeName      */
	LPCH,        /*     LPCH   lpszVolumePathNames */
	DWORD,       /* in  DWORD  cchBufferLength     */
	out(PDWORD), /* out PDWORD lpcchReturnLength   */
], f => GetVolumePathNamesForVolumeNameA = f);

export function CreateActCtxA () {};
CreateActCtxA = createAutoLoader(lib, "CreateActCtxA", HANDLE /* HANDLE */, [
	PCACTCTXA, /* in PCACTCTXA pActCtx */
], f => CreateActCtxA = f);

export function CreateActCtxW () {};
CreateActCtxW = createAutoLoader(lib, "CreateActCtxW", HANDLE /* HANDLE */, [
	PCACTCTXW, /* in PCACTCTXW pActCtx */
], f => CreateActCtxW = f);
export {CreateActCtxW as CreateActCtx};

export function AddRefActCtx () {};
AddRefActCtx = createAutoLoader(lib, "AddRefActCtx", VOID /* VOID */, [
	HANDLE, /* in HANDLE hActCtx */	// 头文件定义错
], f => AddRefActCtx = f);

export function ReleaseActCtx () {};
ReleaseActCtx = createAutoLoader(lib, "ReleaseActCtx", VOID /* VOID */, [
	HANDLE, /* in HANDLE hActCtx */	// 头文件定义错
], f => ReleaseActCtx = f);

export function ZombifyActCtx () {};
ZombifyActCtx = createAutoLoader(lib, "ZombifyActCtx", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hActCtx */	// 头文件定义错
], f => ZombifyActCtx = f);

export function ActivateActCtx () {};
ActivateActCtx = createAutoLoader(lib, "ActivateActCtx", BOOL /* BOOL */, [
	HANDLE,                  /* in  opt HANDLE      hActCtx  */	// 头文件定义错
	out(pointer(ULONG_PTR)), /* out     ULONG_PTR * lpCookie */
], f => ActivateActCtx = f);

export function DeactivateActCtx () {};
DeactivateActCtx = createAutoLoader(lib, "DeactivateActCtx", BOOL /* BOOL */, [
	DWORD,     /* in DWORD     dwFlags  */
	ULONG_PTR, /* in ULONG_PTR ulCookie */
], f => DeactivateActCtx = f);

export function GetCurrentActCtx () {};
GetCurrentActCtx = createAutoLoader(lib, "GetCurrentActCtx", BOOL /* BOOL */, [
	pointer(HANDLE), /*  HANDLE * lphActCtx */
], f => GetCurrentActCtx = f);

export function FindActCtxSectionStringA () {};
FindActCtxSectionStringA = createAutoLoader(lib, "FindActCtxSectionStringA", BOOL /* BOOL */, [
	DWORD,                           /* in       DWORD                      dwFlags         */
	pointer(GUID),                   /* reserved const GUID *               lpExtensionGuid */
	ULONG,                           /* in       ULONG                      ulSectionId     */
	LPCSTR,                          /* in       LPCSTR                     lpStringToFind  */
	out(PACTCTX_SECTION_KEYED_DATA), /* out      PACTCTX_SECTION_KEYED_DATA ReturnedData    */
], f => FindActCtxSectionStringA = f);

export function FindActCtxSectionStringW () {};
FindActCtxSectionStringW = createAutoLoader(lib, "FindActCtxSectionStringW", BOOL /* BOOL */, [
	DWORD,                           /* in       DWORD                      dwFlags         */
	pointer(GUID),                   /* reserved const GUID *               lpExtensionGuid */
	ULONG,                           /* in       ULONG                      ulSectionId     */
	LPCWSTR,                         /* in       LPCWSTR                    lpStringToFind  */
	out(PACTCTX_SECTION_KEYED_DATA), /* out      PACTCTX_SECTION_KEYED_DATA ReturnedData    */
], f => FindActCtxSectionStringW = f);
export {FindActCtxSectionStringW as FindActCtxSectionString};

export function FindActCtxSectionGuid () {};
FindActCtxSectionGuid = createAutoLoader(lib, "FindActCtxSectionGuid", BOOL /* BOOL */, [
	DWORD,                           /* in       DWORD                      dwFlags         */
	pointer(GUID),                   /* reserved const GUID *               lpExtensionGuid */
	ULONG,                           /* in       ULONG                      ulSectionId     */
	pointer(GUID),                   /* in opt   const GUID *               lpGuidToFind    */
	out(PACTCTX_SECTION_KEYED_DATA), /* out      PACTCTX_SECTION_KEYED_DATA ReturnedData    */
], f => FindActCtxSectionGuid = f);

export function WTSGetActiveConsoleSessionId () {};
WTSGetActiveConsoleSessionId = createAutoLoader(lib, "WTSGetActiveConsoleSessionId", DWORD /* DWORD */, [
	/* void */
], f => WTSGetActiveConsoleSessionId = f);

export function WTSGetServiceSessionId () {};
WTSGetServiceSessionId = createAutoLoader(lib, "WTSGetServiceSessionId", DWORD /* DWORD */, [
	/* void */
], f => WTSGetServiceSessionId = f);

export function WTSIsServerContainer () {};
WTSIsServerContainer = createAutoLoader(lib, "WTSIsServerContainer", BOOLEAN /* BOOLEAN */, [
	/* void */
], f => WTSIsServerContainer = f);

export function GetActiveProcessorGroupCount () {};
GetActiveProcessorGroupCount = createAutoLoader(lib, "GetActiveProcessorGroupCount", WORD /* WORD */, [
	/* void */
], f => GetActiveProcessorGroupCount = f);

export function GetMaximumProcessorGroupCount () {};
GetMaximumProcessorGroupCount = createAutoLoader(lib, "GetMaximumProcessorGroupCount", WORD /* WORD */, [
	/* void */
], f => GetMaximumProcessorGroupCount = f);

export function GetActiveProcessorCount () {};
GetActiveProcessorCount = createAutoLoader(lib, "GetActiveProcessorCount", DWORD /* DWORD */, [
	WORD, /* in WORD GroupNumber */
], f => GetActiveProcessorCount = f);

export function GetMaximumProcessorCount () {};
GetMaximumProcessorCount = createAutoLoader(lib, "GetMaximumProcessorCount", DWORD /* DWORD */, [
	WORD, /* in WORD GroupNumber */
], f => GetMaximumProcessorCount = f);

export function GetNumaProcessorNode () {};
GetNumaProcessorNode = createAutoLoader(lib, "GetNumaProcessorNode", BOOL /* BOOL */, [
	UCHAR,       /* in  UCHAR  Processor  */
	out(PUCHAR), /* out PUCHAR NodeNumber */
], f => GetNumaProcessorNode = f);

export function GetNumaNodeNumberFromHandle () {};
GetNumaNodeNumberFromHandle = createAutoLoader(lib, "GetNumaNodeNumberFromHandle", BOOL /* BOOL */, [
	HANDLE,       /* in  HANDLE  hFile      */
	out(PUSHORT), /* out PUSHORT NodeNumber */
], f => GetNumaNodeNumberFromHandle = f);

export function GetNumaProcessorNodeEx () {};
GetNumaProcessorNodeEx = createAutoLoader(lib, "GetNumaProcessorNodeEx", BOOL /* BOOL */, [
	PPROCESSOR_NUMBER, /* in  PPROCESSOR_NUMBER Processor  */
	out(PUSHORT),      /* out PUSHORT           NodeNumber */
], f => GetNumaProcessorNodeEx = f);

export function GetNumaNodeProcessorMask () {};
GetNumaNodeProcessorMask = createAutoLoader(lib, "GetNumaNodeProcessorMask", BOOL /* BOOL */, [
	UCHAR,           /* in  UCHAR      Node          */
	out(PULONGLONG), /* out PULONGLONG ProcessorMask */
], f => GetNumaNodeProcessorMask = f);

export function GetNumaAvailableMemoryNode () {};
GetNumaAvailableMemoryNode = createAutoLoader(lib, "GetNumaAvailableMemoryNode", BOOL /* BOOL */, [
	UCHAR,           /* in  UCHAR      Node           */
	out(PULONGLONG), /* out PULONGLONG AvailableBytes */
], f => GetNumaAvailableMemoryNode = f);

export function GetNumaAvailableMemoryNodeEx () {};
GetNumaAvailableMemoryNodeEx = createAutoLoader(lib, "GetNumaAvailableMemoryNodeEx", BOOL /* BOOL */, [
	USHORT,          /* in  USHORT     Node           */
	out(PULONGLONG), /* out PULONGLONG AvailableBytes */
], f => GetNumaAvailableMemoryNodeEx = f);

export function GetNumaProximityNode () {};
GetNumaProximityNode = createAutoLoader(lib, "GetNumaProximityNode", BOOL /* BOOL */, [
	ULONG,       /* in  ULONG  ProximityId */
	out(PUCHAR), /* out PUCHAR NodeNumber  */
], f => GetNumaProximityNode = f);

export function RegisterApplicationRecoveryCallback () {};
RegisterApplicationRecoveryCallback = createAutoLoader(lib, "RegisterApplicationRecoveryCallback", HRESULT /* HRESULT */, [
	APPLICATION_RECOVERY_CALLBACK, /* in     APPLICATION_RECOVERY_CALLBACK pRecoveyCallback */
	PVOID,                         /* in opt PVOID                         pvParameter      */
	DWORD,                         /* in     DWORD                         dwPingInterval   */
	DWORD,                         /* in     DWORD                         dwFlags          */
], f => RegisterApplicationRecoveryCallback = f);

export function UnregisterApplicationRecoveryCallback () {};
UnregisterApplicationRecoveryCallback = createAutoLoader(lib, "UnregisterApplicationRecoveryCallback", HRESULT /* HRESULT */, [
	/* void */
], f => UnregisterApplicationRecoveryCallback = f);

export function RegisterApplicationRestart () {};
RegisterApplicationRestart = createAutoLoader(lib, "RegisterApplicationRestart", HRESULT /* HRESULT */, [
	PCWSTR, /* in opt PCWSTR pwzCommandline */
	DWORD,  /* in     DWORD  dwFlags        */
], f => RegisterApplicationRestart = f);

export function UnregisterApplicationRestart () {};
UnregisterApplicationRestart = createAutoLoader(lib, "UnregisterApplicationRestart", HRESULT /* HRESULT */, [
	/* void */
], f => UnregisterApplicationRestart = f);

export function GetApplicationRecoveryCallback () {};
GetApplicationRecoveryCallback = createAutoLoader(lib, "GetApplicationRecoveryCallback", HRESULT /* HRESULT */, [
	HANDLE,                                      /* in      HANDLE                         hProcess          */
	out(pointer(APPLICATION_RECOVERY_CALLBACK)), /* out     APPLICATION_RECOVERY_CALLBACK* pRecoveryCallback */
	pointer(PVOID),                              /*         PVOID*                         ppvParameter      */
	out(PDWORD),                                 /* out opt PDWORD                         pdwPingInterval   */
	out(PDWORD),                                 /* out opt PDWORD                         pdwFlags          */
], f => GetApplicationRecoveryCallback = f);

export function GetApplicationRestartSettings () {};
GetApplicationRestartSettings = createAutoLoader(lib, "GetApplicationRestartSettings", HRESULT /* HRESULT */, [
	HANDLE,        /* in      HANDLE hProcess       */
	PWSTR,         /*         PWSTR  pwzCommandline */
	inout(PDWORD), /* in out  PDWORD pcchSize       */
	out(PDWORD),   /* out opt PDWORD pdwFlags       */
], f => GetApplicationRestartSettings = f);

export function ApplicationRecoveryInProgress () {};
ApplicationRecoveryInProgress = createAutoLoader(lib, "ApplicationRecoveryInProgress", HRESULT /* HRESULT */, [
	out(PBOOL), /* out PBOOL pbCancelled */
], f => ApplicationRecoveryInProgress = f);

export function ApplicationRecoveryFinished () {};
ApplicationRecoveryFinished = createAutoLoader(lib, "ApplicationRecoveryFinished", VOID /* VOID */, [
	BOOL, /* in BOOL bSuccess */
], f => ApplicationRecoveryFinished = f);

export function GetFileInformationByHandleEx () {};
GetFileInformationByHandleEx = createAutoLoader(lib, "GetFileInformationByHandleEx", BOOL /* BOOL */, [
	HANDLE,                    /* in HANDLE                    hFile                */
	FILE_INFO_BY_HANDLE_CLASS, /* in FILE_INFO_BY_HANDLE_CLASS FileInformationClass */
	LPVOID,                    /*    LPVOID                    lpFileInformation    */
	DWORD,                     /* in DWORD                     dwBufferSize         */
], f => GetFileInformationByHandleEx = f);

export function OpenFileById () {};
OpenFileById = createAutoLoader(lib, "OpenFileById", HANDLE /* HANDLE */, [
	HANDLE,                /* in     HANDLE                hVolumeHint          */
	LPFILE_ID_DESCRIPTOR,  /* in     LPFILE_ID_DESCRIPTOR  lpFileId             */
	DWORD,                 /* in     DWORD                 dwDesiredAccess      */
	DWORD,                 /* in     DWORD                 dwShareMode          */
	LPSECURITY_ATTRIBUTES, /* in opt LPSECURITY_ATTRIBUTES lpSecurityAttributes */
	DWORD,                 /* in     DWORD                 dwFlagsAndAttributes */
], f => OpenFileById = f);

export function CreateSymbolicLinkA () {};
CreateSymbolicLinkA = createAutoLoader(lib, "CreateSymbolicLinkA", BOOLEAN /* BOOLEAN */, [
	LPCSTR, /* in LPCSTR lpSymlinkFileName */
	LPCSTR, /* in LPCSTR lpTargetFileName  */
	DWORD,  /* in DWORD  dwFlags           */
], f => CreateSymbolicLinkA = f);

export function CreateSymbolicLinkW () {};
CreateSymbolicLinkW = createAutoLoader(lib, "CreateSymbolicLinkW", BOOLEAN /* BOOLEAN */, [
	LPCWSTR, /* in LPCWSTR lpSymlinkFileName */
	LPCWSTR, /* in LPCWSTR lpTargetFileName  */
	DWORD,   /* in DWORD   dwFlags           */
], f => CreateSymbolicLinkW = f);
export {CreateSymbolicLinkW as CreateSymbolicLink};

export function CreateSymbolicLinkTransactedA () {};
CreateSymbolicLinkTransactedA = createAutoLoader(lib, "CreateSymbolicLinkTransactedA", BOOLEAN /* BOOLEAN */, [
	LPCSTR, /* in LPCSTR lpSymlinkFileName */
	LPCSTR, /* in LPCSTR lpTargetFileName  */
	DWORD,  /* in DWORD  dwFlags           */
	HANDLE, /* in HANDLE hTransaction      */
], f => CreateSymbolicLinkTransactedA = f);

export function CreateSymbolicLinkTransactedW () {};
CreateSymbolicLinkTransactedW = createAutoLoader(lib, "CreateSymbolicLinkTransactedW", BOOLEAN /* BOOLEAN */, [
	LPCWSTR, /* in LPCWSTR lpSymlinkFileName */
	LPCWSTR, /* in LPCWSTR lpTargetFileName  */
	DWORD,   /* in DWORD   dwFlags           */
	HANDLE,  /* in HANDLE  hTransaction      */
], f => CreateSymbolicLinkTransactedW = f);
export {CreateSymbolicLinkTransactedW as CreateSymbolicLinkTransacted};

export function ReplacePartitionUnit () {};
ReplacePartitionUnit = createAutoLoader(lib, "ReplacePartitionUnit", BOOL /* BOOL */, [
	PWSTR, /* in PWSTR TargetPartition */
	PWSTR, /* in PWSTR SparePartition  */
	ULONG, /* in ULONG Flags           */
], f => ReplacePartitionUnit = f);

export function AddSecureMemoryCacheCallback () {};
AddSecureMemoryCacheCallback = createAutoLoader(lib, "AddSecureMemoryCacheCallback", BOOL /* BOOL */, [
	PSECURE_MEMORY_CACHE_CALLBACK, /* in PSECURE_MEMORY_CACHE_CALLBACK pfnCallBack */
], f => AddSecureMemoryCacheCallback = f);

export function RemoveSecureMemoryCacheCallback () {};
RemoveSecureMemoryCacheCallback = createAutoLoader(lib, "RemoveSecureMemoryCacheCallback", BOOL /* BOOL */, [
	PSECURE_MEMORY_CACHE_CALLBACK, /* in PSECURE_MEMORY_CACHE_CALLBACK pfnCallBack */
], f => RemoveSecureMemoryCacheCallback = f);

export function CopyContext () {};
CopyContext = createAutoLoader(lib, "CopyContext", BOOL /* BOOL */, [
	inout(PCONTEXT), /* in out PCONTEXT Destination  */
	DWORD,           /* in     DWORD    ContextFlags */
	PCONTEXT,        /* in     PCONTEXT Source       */
], f => CopyContext = f);

export function InitializeContext () {};
InitializeContext = createAutoLoader(lib, "InitializeContext", BOOL /* BOOL */, [
	PVOID,                  /*        PVOID     Buffer        */
	DWORD,                  /* in     DWORD     ContextFlags  */
	out(pointer(PCONTEXT)), /* out    PCONTEXT* Context       */
	inout(PDWORD),          /* in out PDWORD    ContextLength */
], f => InitializeContext = f);

export function InitializeContext2 () {};
InitializeContext2 = createAutoLoader(lib, "InitializeContext2", BOOL /* BOOL */, [
	PVOID,                  /*        PVOID     Buffer               */
	DWORD,                  /* in     DWORD     ContextFlags         */
	out(pointer(PCONTEXT)), /* out    PCONTEXT* Context              */
	inout(PDWORD),          /* in out PDWORD    ContextLength        */
	ULONG64,                /* in     ULONG64   XStateCompactionMask */
], f => InitializeContext2 = f);

export function GetEnabledXStateFeatures () {};
GetEnabledXStateFeatures = createAutoLoader(lib, "GetEnabledXStateFeatures", DWORD64 /* DWORD64 */, [
	/* void */
], f => GetEnabledXStateFeatures = f);

export function GetXStateFeaturesMask () {};
GetXStateFeaturesMask = createAutoLoader(lib, "GetXStateFeaturesMask", BOOL /* BOOL */, [
	PCONTEXT,      /* in  PCONTEXT Context     */
	out(PDWORD64), /* out PDWORD64 FeatureMask */
], f => GetXStateFeaturesMask = f);

export function LocateXStateFeature () {};
LocateXStateFeature = createAutoLoader(lib, "LocateXStateFeature", PVOID /* PVOID */, [
	PCONTEXT,    /* in      PCONTEXT Context   */
	DWORD,       /* in      DWORD    FeatureId */
	out(PDWORD), /* out opt PDWORD   Length    */
], f => LocateXStateFeature = f);

export function SetXStateFeaturesMask () {};
SetXStateFeaturesMask = createAutoLoader(lib, "SetXStateFeaturesMask", BOOL /* BOOL */, [
	inout(PCONTEXT), /* in out PCONTEXT Context     */
	DWORD64,         /* in     DWORD64  FeatureMask */
], f => SetXStateFeaturesMask = f);

export function EnableThreadProfiling () {};
EnableThreadProfiling = createAutoLoader(lib, "EnableThreadProfiling", DWORD /* DWORD */, [
	HANDLE,               /* in  HANDLE   ThreadHandle          */
	DWORD,                /* in  DWORD    Flags                 */
	DWORD64,              /* in  DWORD64  HardwareCounters      */
	out(pointer(HANDLE)), /* out HANDLE * PerformanceDataHandle */
], f => EnableThreadProfiling = f);

export function DisableThreadProfiling () {};
DisableThreadProfiling = createAutoLoader(lib, "DisableThreadProfiling", DWORD /* DWORD */, [
	HANDLE, /* in HANDLE PerformanceDataHandle */
], f => DisableThreadProfiling = f);

export function QueryThreadProfiling () {};
QueryThreadProfiling = createAutoLoader(lib, "QueryThreadProfiling", DWORD /* DWORD */, [
	HANDLE,        /* in  HANDLE   ThreadHandle */
	out(PBOOLEAN), /* out PBOOLEAN Enabled      */
], f => QueryThreadProfiling = f);

export function ReadThreadProfilingData () {};
ReadThreadProfilingData = createAutoLoader(lib, "ReadThreadProfilingData", DWORD /* DWORD */, [
	HANDLE,                 /* in  HANDLE            PerformanceDataHandle */
	DWORD,                  /* in  DWORD             Flags                 */
	out(PPERFORMANCE_DATA), /* out PPERFORMANCE_DATA PerformanceData       */
], f => ReadThreadProfilingData = f);

export function RaiseCustomSystemEventTrigger () {};
RaiseCustomSystemEventTrigger = createAutoLoader(lib, "RaiseCustomSystemEventTrigger", DWORD /* DWORD */, [
	PCUSTOM_SYSTEM_EVENT_TRIGGER_CONFIG, /* in PCUSTOM_SYSTEM_EVENT_TRIGGER_CONFIG CustomSystemEventTriggerConfig */
], f => RaiseCustomSystemEventTrigger = f);

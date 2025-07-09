import koffi from "koffi";

// basic
import {pointer, out, inout} from "../../types.js";
import {
	int,
} from "../../types.js";

// basetsd.h
import {
	ULONG_PTR, PULONG_PTR,
	DWORD_PTR,
	SIZE_T, PSIZE_T,
} from "../basetsd.h/basetsd.js";

// guiddef.h
import {
	LPCGUID,
} from "../guiddef.h/guiddef.js";

// minwindef.h
import {
	DWORD, PDWORD, LPDWORD,
	BOOL, PBOOL,
	UINT,
	ULONG, PULONG,
	LPVOID, LPCVOID,
} from "../minwindef.h/minWindef.js";

// winnt.h
import {
	HANDLE, PHANDLE,
} from "../winnt.h/winnt.js";
import {
	LPSTR, LPCSTR, LPWSTR, LPCWSTR, PCWSTR,
	VOID, PVOID,
	HRESULT, PWSTR,
} from "../winnt.h/winnt.js";
import {PROCESS_MITIGATION_POLICY} from "../winnt.h/enums.js";
import {
	CONTEXT,
	PPROCESSOR_NUMBER,
} from "../winnt.h/structs.js";
import {PAPCFUNC} from "../winnt.h/callbacks.js";

// minwinbase.h
import {LPFILETIME, LPSECURITY_ATTRIBUTES, PFILETIME, LPCONTEXT, LPTHREAD_START_ROUTINE} from "../minwinbase.h/minWinBase.js";

// processthreadsapi.h
import {PROCESS_INFORMATION_CLASS, THREAD_INFORMATION_CLASS} from "./enums.js";
import {LPPROCESS_INFORMATION, LPSTARTUPINFOA, LPSTARTUPINFOW, LPPROC_THREAD_ATTRIBUTE_LIST} from "./structs.js";


const lib = koffi.load("kernel32.dll");
import {createAutoLoader} from "../../internals/loader.js";

export function QueueUserAPC () {};
QueueUserAPC = createAutoLoader(lib, "QueueUserAPC", DWORD /* DWORD */, [
	PAPCFUNC,  /* in PAPCFUNC  pfnAPC  */
	HANDLE,    /* in HANDLE    hThread */
	ULONG_PTR, /* in ULONG_PTR dwData  */
], f => QueueUserAPC = f);

export function GetProcessTimes () {};
GetProcessTimes = createAutoLoader(lib, "GetProcessTimes", BOOL /* BOOL */, [
	HANDLE,          /* in  HANDLE     hProcess       */
	out(LPFILETIME), /* out LPFILETIME lpCreationTime */
	out(LPFILETIME), /* out LPFILETIME lpExitTime     */
	out(LPFILETIME), /* out LPFILETIME lpKernelTime   */
	out(LPFILETIME), /* out LPFILETIME lpUserTime     */
], f => GetProcessTimes = f);

export function GetCurrentProcess () {};
GetCurrentProcess = createAutoLoader(lib, "GetCurrentProcess", HANDLE /* HANDLE */, [
	/* void */
], f => GetCurrentProcess = f);

export function GetCurrentProcessId () {};
GetCurrentProcessId = createAutoLoader(lib, "GetCurrentProcessId", DWORD /* DWORD */, [
	/* void */
], f => GetCurrentProcessId = f);

export function ExitProcess () {};
ExitProcess = createAutoLoader(lib, "ExitProcess", VOID /* VOID */, [
	UINT, /* in UINT uExitCode */
], f => ExitProcess = f);

export function TerminateProcess () {};
TerminateProcess = createAutoLoader(lib, "TerminateProcess", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hProcess  */
	UINT,   /* in UINT   uExitCode */
], f => TerminateProcess = f);

export function GetExitCodeProcess () {};
GetExitCodeProcess = createAutoLoader(lib, "GetExitCodeProcess", BOOL /* BOOL */, [
	HANDLE,       /* in  HANDLE  hProcess   */
	out(LPDWORD), /* out LPDWORD lpExitCode */
], f => GetExitCodeProcess = f);

export function SwitchToThread () {};
SwitchToThread = createAutoLoader(lib, "SwitchToThread", BOOL /* BOOL */, [
	/* void */
], f => SwitchToThread = f);

export function CreateThread () {};
CreateThread = createAutoLoader(lib, "CreateThread", HANDLE /* HANDLE */, [
	LPSECURITY_ATTRIBUTES,  /* in opt  LPSECURITY_ATTRIBUTES  lpThreadAttributes */
	SIZE_T,                 /* in      SIZE_T                 dwStackSize        */
	LPTHREAD_START_ROUTINE, /* in      LPTHREAD_START_ROUTINE lpStartAddress     */
	LPVOID,                 /* in opt  LPVOID                 lpParameter        */
	DWORD,                  /* in      DWORD                  dwCreationFlags    */
	out(LPDWORD),           /* out opt LPDWORD                lpThreadId         */
], f => CreateThread = f);

export function CreateRemoteThread () {};
CreateRemoteThread = createAutoLoader(lib, "CreateRemoteThread", HANDLE /* HANDLE */, [
	HANDLE,                 /* in      HANDLE                 hProcess           */
	LPSECURITY_ATTRIBUTES,  /* in opt  LPSECURITY_ATTRIBUTES  lpThreadAttributes */
	SIZE_T,                 /* in      SIZE_T                 dwStackSize        */
	LPTHREAD_START_ROUTINE, /* in      LPTHREAD_START_ROUTINE lpStartAddress     */
	LPVOID,                 /* in opt  LPVOID                 lpParameter        */
	DWORD,                  /* in      DWORD                  dwCreationFlags    */
	out(LPDWORD),           /* out opt LPDWORD                lpThreadId         */
], f => CreateRemoteThread = f);

export function GetCurrentThread () {};
GetCurrentThread = createAutoLoader(lib, "GetCurrentThread", HANDLE /* HANDLE */, [
	/* void */
], f => GetCurrentThread = f);

export function GetCurrentThreadId () {};
GetCurrentThreadId = createAutoLoader(lib, "GetCurrentThreadId", DWORD /* DWORD */, [
	/* void */
], f => GetCurrentThreadId = f);

export function OpenThread () {};
OpenThread = createAutoLoader(lib, "OpenThread", HANDLE /* HANDLE */, [
	DWORD, /* in DWORD dwDesiredAccess */
	BOOL,  /* in BOOL  bInheritHandle  */
	DWORD, /* in DWORD dwThreadId      */
], f => OpenThread = f);

export function SetThreadPriority () {};
SetThreadPriority = createAutoLoader(lib, "SetThreadPriority", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hThread   */
	int,    /* in int    nPriority */
], f => SetThreadPriority = f);

export function SetThreadPriorityBoost () {};
SetThreadPriorityBoost = createAutoLoader(lib, "SetThreadPriorityBoost", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hThread               */
	BOOL,   /* in BOOL   bDisablePriorityBoost */
], f => SetThreadPriorityBoost = f);

export function GetThreadPriorityBoost () {};
GetThreadPriorityBoost = createAutoLoader(lib, "GetThreadPriorityBoost", BOOL /* BOOL */, [
	HANDLE,     /* in  HANDLE hThread               */
	out(PBOOL), /* out PBOOL  pDisablePriorityBoost */
], f => GetThreadPriorityBoost = f);

export function GetThreadPriority () {};
GetThreadPriority = createAutoLoader(lib, "GetThreadPriority", int /* int */, [
	HANDLE, /* in HANDLE hThread */
], f => GetThreadPriority = f);

export function ExitThread () {};
ExitThread = createAutoLoader(lib, "ExitThread", VOID /* VOID */, [
	DWORD, /* in DWORD dwExitCode */
], f => ExitThread = f);

export function TerminateThread () {};
TerminateThread = createAutoLoader(lib, "TerminateThread", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hThread    */
	DWORD,  /* in DWORD  dwExitCode */
], f => TerminateThread = f);

export function GetExitCodeThread () {};
GetExitCodeThread = createAutoLoader(lib, "GetExitCodeThread", BOOL /* BOOL */, [
	HANDLE,       /* in  HANDLE  hThread    */
	out(LPDWORD), /* out LPDWORD lpExitCode */
], f => GetExitCodeThread = f);

export function SuspendThread () {};
SuspendThread = createAutoLoader(lib, "SuspendThread", DWORD /* DWORD */, [
	HANDLE, /* in HANDLE hThread */
], f => SuspendThread = f);

export function ResumeThread () {};
ResumeThread = createAutoLoader(lib, "ResumeThread", DWORD /* DWORD */, [
	HANDLE, /* in HANDLE hThread */
], f => ResumeThread = f);

export function TlsAlloc () {};
TlsAlloc = createAutoLoader(lib, "TlsAlloc", DWORD /* DWORD */, [
	/* void */
], f => TlsAlloc = f);

export function TlsGetValue () {};
TlsGetValue = createAutoLoader(lib, "TlsGetValue", LPVOID /* LPVOID */, [
	DWORD, /* in DWORD dwTlsIndex */
], f => TlsGetValue = f);

export function TlsSetValue () {};
TlsSetValue = createAutoLoader(lib, "TlsSetValue", BOOL /* BOOL */, [
	DWORD,  /* in     DWORD  dwTlsIndex */
	LPVOID, /* in opt LPVOID lpTlsValue */
], f => TlsSetValue = f);

export function TlsFree () {};
TlsFree = createAutoLoader(lib, "TlsFree", BOOL /* BOOL */, [
	DWORD, /* in DWORD dwTlsIndex */
], f => TlsFree = f);

export function CreateProcessA () {};
CreateProcessA = createAutoLoader(lib, "CreateProcessA", BOOL /* BOOL */, [
	LPCSTR,                     /* in opt     LPCSTR                lpApplicationName    */
	inout(LPSTR),               /* in out opt LPSTR                 lpCommandLine        */
	LPSECURITY_ATTRIBUTES,      /* in opt     LPSECURITY_ATTRIBUTES lpProcessAttributes  */
	LPSECURITY_ATTRIBUTES,      /* in opt     LPSECURITY_ATTRIBUTES lpThreadAttributes   */
	BOOL,                       /* in         BOOL                  bInheritHandles      */
	DWORD,                      /* in         DWORD                 dwCreationFlags      */
	LPVOID,                     /* in opt     LPVOID                lpEnvironment        */
	LPCSTR,                     /* in opt     LPCSTR                lpCurrentDirectory   */
	LPSTARTUPINFOA,             /* in         LPSTARTUPINFOA        lpStartupInfo        */
	out(LPPROCESS_INFORMATION), /* out        LPPROCESS_INFORMATION lpProcessInformation */
], f => CreateProcessA = f);

export function CreateProcessW () {};
CreateProcessW = createAutoLoader(lib, "CreateProcessW", BOOL /* BOOL */, [
	LPCWSTR,                    /* in opt     LPCWSTR               lpApplicationName    */
	inout(LPWSTR),              /* in out opt LPWSTR                lpCommandLine        */
	LPSECURITY_ATTRIBUTES,      /* in opt     LPSECURITY_ATTRIBUTES lpProcessAttributes  */
	LPSECURITY_ATTRIBUTES,      /* in opt     LPSECURITY_ATTRIBUTES lpThreadAttributes   */
	BOOL,                       /* in         BOOL                  bInheritHandles      */
	DWORD,                      /* in         DWORD                 dwCreationFlags      */
	LPVOID,                     /* in opt     LPVOID                lpEnvironment        */
	LPCWSTR,                    /* in opt     LPCWSTR               lpCurrentDirectory   */
	LPSTARTUPINFOW,             /* in         LPSTARTUPINFOW        lpStartupInfo        */
	out(LPPROCESS_INFORMATION), /* out        LPPROCESS_INFORMATION lpProcessInformation */
], f => CreateProcessW = f);
export {CreateProcessW as CreateProcess};

export function SetProcessShutdownParameters () {};
SetProcessShutdownParameters = createAutoLoader(lib, "SetProcessShutdownParameters", BOOL /* BOOL */, [
	DWORD, /* in DWORD dwLevel */
	DWORD, /* in DWORD dwFlags */
], f => SetProcessShutdownParameters = f);

export function GetProcessVersion () {};
GetProcessVersion = createAutoLoader(lib, "GetProcessVersion", DWORD /* DWORD */, [
	DWORD, /* in DWORD ProcessId */
], f => GetProcessVersion = f);

export function GetStartupInfoW () {};
GetStartupInfoW = createAutoLoader(lib, "GetStartupInfoW", VOID /* VOID */, [
	out(LPSTARTUPINFOW), /* out LPSTARTUPINFOW lpStartupInfo */
], f => GetStartupInfoW = f);
export {GetStartupInfoW as GetStartupInfo};

export function CreateProcessAsUserW () {};
CreateProcessAsUserW = createAutoLoader(lib, "CreateProcessAsUserW", BOOL /* BOOL */, [
	HANDLE,                     /* in opt     HANDLE                hToken               */
	LPCWSTR,                    /* in opt     LPCWSTR               lpApplicationName    */
	inout(LPWSTR),              /* in out opt LPWSTR                lpCommandLine        */
	LPSECURITY_ATTRIBUTES,      /* in opt     LPSECURITY_ATTRIBUTES lpProcessAttributes  */
	LPSECURITY_ATTRIBUTES,      /* in opt     LPSECURITY_ATTRIBUTES lpThreadAttributes   */
	BOOL,                       /* in         BOOL                  bInheritHandles      */
	DWORD,                      /* in         DWORD                 dwCreationFlags      */
	LPVOID,                     /* in opt     LPVOID                lpEnvironment        */
	LPCWSTR,                    /* in opt     LPCWSTR               lpCurrentDirectory   */
	LPSTARTUPINFOW,             /* in         LPSTARTUPINFOW        lpStartupInfo        */
	out(LPPROCESS_INFORMATION), /* out        LPPROCESS_INFORMATION lpProcessInformation */
], f => CreateProcessAsUserW = f);
export {CreateProcessAsUserW as CreateProcessAsUser};

export function SetThreadToken () {};
SetThreadToken = createAutoLoader(lib, "SetThreadToken", BOOL /* BOOL */, [
	PHANDLE, /* in opt PHANDLE Thread */
	HANDLE,  /* in opt HANDLE  Token  */
], f => SetThreadToken = f);

export function OpenProcessToken () {};
OpenProcessToken = createAutoLoader(lib, "OpenProcessToken", BOOL /* BOOL */, [
	HANDLE,  /* in HANDLE  ProcessHandle */
	DWORD,   /* in DWORD   DesiredAccess */
	PHANDLE, /*    PHANDLE TokenHandle   */
], f => OpenProcessToken = f);

export function OpenThreadToken () {};
OpenThreadToken = createAutoLoader(lib, "OpenThreadToken", BOOL /* BOOL */, [
	HANDLE,  /* in HANDLE  ThreadHandle  */
	DWORD,   /* in DWORD   DesiredAccess */
	BOOL,    /* in BOOL    OpenAsSelf    */
	PHANDLE, /*    PHANDLE TokenHandle   */
], f => OpenThreadToken = f);

export function SetPriorityClass () {};
SetPriorityClass = createAutoLoader(lib, "SetPriorityClass", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hProcess        */
	DWORD,  /* in DWORD  dwPriorityClass */
], f => SetPriorityClass = f);

export function GetPriorityClass () {};
GetPriorityClass = createAutoLoader(lib, "GetPriorityClass", DWORD /* DWORD */, [
	HANDLE, /* in HANDLE hProcess */
], f => GetPriorityClass = f);

export function SetThreadStackGuarantee () {};
SetThreadStackGuarantee = createAutoLoader(lib, "SetThreadStackGuarantee", BOOL /* BOOL */, [
	inout(PULONG), /* in out PULONG StackSizeInBytes */
], f => SetThreadStackGuarantee = f);

export function ProcessIdToSessionId () {};
ProcessIdToSessionId = createAutoLoader(lib, "ProcessIdToSessionId", BOOL /* BOOL */, [
	DWORD,               /* in  DWORD  dwProcessId */
	out(pointer(DWORD)), /* out DWORD* pSessionId  */
], f => ProcessIdToSessionId = f);

export function GetProcessId () {};
GetProcessId = createAutoLoader(lib, "GetProcessId", DWORD /* DWORD */, [
	HANDLE, /* in HANDLE Process */
], f => GetProcessId = f);

export function GetThreadId () {};
GetThreadId = createAutoLoader(lib, "GetThreadId", DWORD /* DWORD */, [
	HANDLE, /* in HANDLE Thread */
], f => GetThreadId = f);

export function FlushProcessWriteBuffers () {};
FlushProcessWriteBuffers = createAutoLoader(lib, "FlushProcessWriteBuffers", VOID /* VOID */, [
	/* void */
], f => FlushProcessWriteBuffers = f);

export function GetProcessIdOfThread () {};
GetProcessIdOfThread = createAutoLoader(lib, "GetProcessIdOfThread", DWORD /* DWORD */, [
	HANDLE, /* in HANDLE Thread */
], f => GetProcessIdOfThread = f);

export function DeleteProcThreadAttributeList () {};
DeleteProcThreadAttributeList = createAutoLoader(lib, "DeleteProcThreadAttributeList", VOID /* VOID */, [
	inout(LPPROC_THREAD_ATTRIBUTE_LIST), /* in out LPPROC_THREAD_ATTRIBUTE_LIST lpAttributeList */
], f => DeleteProcThreadAttributeList = f);

export function UpdateProcThreadAttribute () {};
UpdateProcThreadAttribute = createAutoLoader(lib, "UpdateProcThreadAttribute", BOOL /* BOOL */, [
	inout(LPPROC_THREAD_ATTRIBUTE_LIST), /* in out LPPROC_THREAD_ATTRIBUTE_LIST lpAttributeList */
	DWORD,                               /* in     DWORD                        dwFlags         */
	DWORD_PTR,                           /* in     DWORD_PTR                    Attribute       */
	PVOID,                               /*        PVOID                        lpValue         */
	SIZE_T,                              /* in     SIZE_T                       cbSize          */
	PVOID,                               /*        PVOID                        lpPreviousValue */
	PSIZE_T,                             /* in opt PSIZE_T                      lpReturnSize    */
], f => UpdateProcThreadAttribute = f);

export function SetProcessAffinityUpdateMode () {};
SetProcessAffinityUpdateMode = createAutoLoader(lib, "SetProcessAffinityUpdateMode", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hProcess */
	DWORD,  /* in DWORD  dwFlags  */
], f => SetProcessAffinityUpdateMode = f);

export function QueryProcessAffinityUpdateMode () {};
QueryProcessAffinityUpdateMode = createAutoLoader(lib, "QueryProcessAffinityUpdateMode", BOOL /* BOOL */, [
	HANDLE,       /* in      HANDLE  hProcess  */
	out(LPDWORD), /* out opt LPDWORD lpdwFlags */
], f => QueryProcessAffinityUpdateMode = f);

export function CreateRemoteThreadEx () {};
CreateRemoteThreadEx = createAutoLoader(lib, "CreateRemoteThreadEx", HANDLE /* HANDLE */, [
	HANDLE,                       /* in      HANDLE                       hProcess           */
	LPSECURITY_ATTRIBUTES,        /* in opt  LPSECURITY_ATTRIBUTES        lpThreadAttributes */
	SIZE_T,                       /* in      SIZE_T                       dwStackSize        */
	LPTHREAD_START_ROUTINE,       /* in      LPTHREAD_START_ROUTINE       lpStartAddress     */
	LPVOID,                       /* in opt  LPVOID                       lpParameter        */
	DWORD,                        /* in      DWORD                        dwCreationFlags    */
	LPPROC_THREAD_ATTRIBUTE_LIST, /* in opt  LPPROC_THREAD_ATTRIBUTE_LIST lpAttributeList    */
	out(LPDWORD),                 /* out opt LPDWORD                      lpThreadId         */
], f => CreateRemoteThreadEx = f);

export function GetCurrentThreadStackLimits () {};
GetCurrentThreadStackLimits = createAutoLoader(lib, "GetCurrentThreadStackLimits", VOID /* VOID */, [
	out(PULONG_PTR), /* out PULONG_PTR LowLimit  */
	out(PULONG_PTR), /* out PULONG_PTR HighLimit */
], f => GetCurrentThreadStackLimits = f);

export function GetThreadContext () {};
GetThreadContext = createAutoLoader(lib, "GetThreadContext", BOOL /* BOOL */, [
	HANDLE,           /* in     HANDLE    hThread   */
	inout(LPCONTEXT), /* in out LPCONTEXT lpContext */
], f => GetThreadContext = f);

export function GetProcessMitigationPolicy () {};
GetProcessMitigationPolicy = createAutoLoader(lib, "GetProcessMitigationPolicy", BOOL /* BOOL */, [
	HANDLE,                    /* in HANDLE                    hProcess         */
	PROCESS_MITIGATION_POLICY, /* in PROCESS_MITIGATION_POLICY MitigationPolicy */
	PVOID,                     /*    PVOID                     lpBuffer         */
	SIZE_T,                    /* in SIZE_T                    dwLength         */
], f => GetProcessMitigationPolicy = f);

export function SetThreadContext () {};
SetThreadContext = createAutoLoader(lib, "SetThreadContext", BOOL /* BOOL */, [
	HANDLE,           /* in HANDLE         hThread   */
	pointer(CONTEXT), /* in CONST CONTEXT* lpContext */
], f => SetThreadContext = f);

export function SetProcessMitigationPolicy () {};
SetProcessMitigationPolicy = createAutoLoader(lib, "SetProcessMitigationPolicy", BOOL /* BOOL */, [
	PROCESS_MITIGATION_POLICY, /* in PROCESS_MITIGATION_POLICY MitigationPolicy */
	PVOID,                     /*    PVOID                     lpBuffer         */
	SIZE_T,                    /* in SIZE_T                    dwLength         */
], f => SetProcessMitigationPolicy = f);

export function FlushInstructionCache () {};
FlushInstructionCache = createAutoLoader(lib, "FlushInstructionCache", BOOL /* BOOL */, [
	HANDLE,  /* in HANDLE  hProcess      */
	LPCVOID, /*    LPCVOID lpBaseAddress */
	SIZE_T,  /* in SIZE_T  dwSize        */
], f => FlushInstructionCache = f);

export function GetThreadTimes () {};
GetThreadTimes = createAutoLoader(lib, "GetThreadTimes", BOOL /* BOOL */, [
	HANDLE,          /* in  HANDLE     hThread        */
	out(LPFILETIME), /* out LPFILETIME lpCreationTime */
	out(LPFILETIME), /* out LPFILETIME lpExitTime     */
	out(LPFILETIME), /* out LPFILETIME lpKernelTime   */
	out(LPFILETIME), /* out LPFILETIME lpUserTime     */
], f => GetThreadTimes = f);

export function OpenProcess () {};
OpenProcess = createAutoLoader(lib, "OpenProcess", HANDLE /* HANDLE */, [
	DWORD, /* in DWORD dwDesiredAccess */
	BOOL,  /* in BOOL  bInheritHandle  */
	DWORD, /* in DWORD dwProcessId     */
], f => OpenProcess = f);

export function IsProcessorFeaturePresent () {};
IsProcessorFeaturePresent = createAutoLoader(lib, "IsProcessorFeaturePresent", BOOL /* BOOL */, [
	DWORD, /* in DWORD ProcessorFeature */
], f => IsProcessorFeaturePresent = f);

export function GetProcessHandleCount () {};
GetProcessHandleCount = createAutoLoader(lib, "GetProcessHandleCount", BOOL /* BOOL */, [
	HANDLE,      /* in  HANDLE hProcess       */
	out(PDWORD), /* out PDWORD pdwHandleCount */
], f => GetProcessHandleCount = f);

export function GetCurrentProcessorNumber () {};
GetCurrentProcessorNumber = createAutoLoader(lib, "GetCurrentProcessorNumber", DWORD /* DWORD */, [
	/* void */
], f => GetCurrentProcessorNumber = f);

export function SetThreadIdealProcessorEx () {};
SetThreadIdealProcessorEx = createAutoLoader(lib, "SetThreadIdealProcessorEx", BOOL /* BOOL */, [
	HANDLE,                 /* in      HANDLE            hThread                  */
	PPROCESSOR_NUMBER,      /* in      PPROCESSOR_NUMBER lpIdealProcessor         */
	out(PPROCESSOR_NUMBER), /* out opt PPROCESSOR_NUMBER lpPreviousIdealProcessor */
], f => SetThreadIdealProcessorEx = f);

export function GetThreadIdealProcessorEx () {};
GetThreadIdealProcessorEx = createAutoLoader(lib, "GetThreadIdealProcessorEx", BOOL /* BOOL */, [
	HANDLE,                 /* in  HANDLE            hThread          */
	out(PPROCESSOR_NUMBER), /* out PPROCESSOR_NUMBER lpIdealProcessor */
], f => GetThreadIdealProcessorEx = f);

export function GetCurrentProcessorNumberEx () {};
GetCurrentProcessorNumberEx = createAutoLoader(lib, "GetCurrentProcessorNumberEx", VOID /* VOID */, [
	out(PPROCESSOR_NUMBER), /* out PPROCESSOR_NUMBER ProcNumber */
], f => GetCurrentProcessorNumberEx = f);

export function GetProcessPriorityBoost () {};
GetProcessPriorityBoost = createAutoLoader(lib, "GetProcessPriorityBoost", BOOL /* BOOL */, [
	HANDLE,     /* in  HANDLE hProcess              */
	out(PBOOL), /* out PBOOL  pDisablePriorityBoost */
], f => GetProcessPriorityBoost = f);

export function SetProcessPriorityBoost () {};
SetProcessPriorityBoost = createAutoLoader(lib, "SetProcessPriorityBoost", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hProcess              */
	BOOL,   /* in BOOL   bDisablePriorityBoost */
], f => SetProcessPriorityBoost = f);

export function GetThreadIOPendingFlag () {};
GetThreadIOPendingFlag = createAutoLoader(lib, "GetThreadIOPendingFlag", BOOL /* BOOL */, [
	HANDLE,     /* in  HANDLE hThread       */
	out(PBOOL), /* out PBOOL  lpIOIsPending */
], f => GetThreadIOPendingFlag = f);

export function GetSystemTimes () {};
GetSystemTimes = createAutoLoader(lib, "GetSystemTimes", BOOL /* BOOL */, [
	out(PFILETIME), /* out opt PFILETIME lpIdleTime   */
	out(PFILETIME), /* out opt PFILETIME lpKernelTime */
	out(PFILETIME), /* out opt PFILETIME lpUserTime   */
], f => GetSystemTimes = f);

export function GetThreadInformation () {};
GetThreadInformation = createAutoLoader(lib, "GetThreadInformation", BOOL /* BOOL */, [
	HANDLE,                   /* in HANDLE                   hThread                */
	THREAD_INFORMATION_CLASS, /* in THREAD_INFORMATION_CLASS ThreadInformationClass */
	LPVOID,                   /*    LPVOID                   ThreadInformation      */
	DWORD,                    /* in DWORD                    ThreadInformationSize  */
], f => GetThreadInformation = f);

export function SetThreadInformation () {};
SetThreadInformation = createAutoLoader(lib, "SetThreadInformation", BOOL /* BOOL */, [
	HANDLE,                   /* in HANDLE                   hThread                */
	THREAD_INFORMATION_CLASS, /* in THREAD_INFORMATION_CLASS ThreadInformationClass */
	LPVOID,                   /*    LPVOID                   ThreadInformation      */
	DWORD,                    /* in DWORD                    ThreadInformationSize  */
], f => SetThreadInformation = f);

export function IsProcessCritical () {};
IsProcessCritical = createAutoLoader(lib, "IsProcessCritical", BOOL /* BOOL */, [
	HANDLE,     /* in  HANDLE hProcess */
	out(PBOOL), /* out PBOOL  Critical */
], f => IsProcessCritical = f);

export function SetProtectedPolicy () {};
SetProtectedPolicy = createAutoLoader(lib, "SetProtectedPolicy", BOOL /* BOOL */, [
	LPCGUID,         /* in      LPCGUID    PolicyGuid     */
	ULONG_PTR,       /* in      ULONG_PTR  PolicyValue    */
	out(PULONG_PTR), /* out opt PULONG_PTR OldPolicyValue */
], f => SetProtectedPolicy = f);

export function QueryProtectedPolicy () {};
QueryProtectedPolicy = createAutoLoader(lib, "QueryProtectedPolicy", BOOL /* BOOL */, [
	LPCGUID,         /* in  LPCGUID    PolicyGuid  */
	out(PULONG_PTR), /* out PULONG_PTR PolicyValue */
], f => QueryProtectedPolicy = f);

export function SetThreadIdealProcessor () {};
SetThreadIdealProcessor = createAutoLoader(lib, "SetThreadIdealProcessor", DWORD /* DWORD */, [
	HANDLE, /* in HANDLE hThread          */
	DWORD,  /* in DWORD  dwIdealProcessor */
], f => SetThreadIdealProcessor = f);

export function SetProcessInformation () {};
SetProcessInformation = createAutoLoader(lib, "SetProcessInformation", BOOL /* BOOL */, [
	HANDLE,                    /* in HANDLE                    hProcess                */
	PROCESS_INFORMATION_CLASS, /* in PROCESS_INFORMATION_CLASS ProcessInformationClass */
	LPVOID,                    /*    LPVOID                    ProcessInformation      */
	DWORD,                     /* in DWORD                     ProcessInformationSize  */
], f => SetProcessInformation = f);

export function GetProcessInformation () {};
GetProcessInformation = createAutoLoader(lib, "GetProcessInformation", BOOL /* BOOL */, [
	HANDLE,                    /* in HANDLE                    hProcess                */
	PROCESS_INFORMATION_CLASS, /* in PROCESS_INFORMATION_CLASS ProcessInformationClass */
	LPVOID,                    /*    LPVOID                    ProcessInformation      */
	DWORD,                     /* in DWORD                     ProcessInformationSize  */
], f => GetProcessInformation = f);

export function SetThreadSelectedCpuSets () {};
SetThreadSelectedCpuSets = createAutoLoader(lib, "SetThreadSelectedCpuSets", BOOL /* BOOL */, [
	HANDLE,         /* in HANDLE       Thread        */
	pointer(ULONG), /*    const ULONG* CpuSetIds     */
	ULONG,          /* in ULONG        CpuSetIdCount */
], f => SetThreadSelectedCpuSets = f);

export function CreateProcessAsUserA () {};
CreateProcessAsUserA = createAutoLoader(lib, "CreateProcessAsUserA", BOOL /* BOOL */, [
	HANDLE,                     /* in opt     HANDLE                hToken               */
	LPCSTR,                     /* in opt     LPCSTR                lpApplicationName    */
	inout(LPSTR),               /* in out opt LPSTR                 lpCommandLine        */
	LPSECURITY_ATTRIBUTES,      /* in opt     LPSECURITY_ATTRIBUTES lpProcessAttributes  */
	LPSECURITY_ATTRIBUTES,      /* in opt     LPSECURITY_ATTRIBUTES lpThreadAttributes   */
	BOOL,                       /* in         BOOL                  bInheritHandles      */
	DWORD,                      /* in         DWORD                 dwCreationFlags      */
	LPVOID,                     /* in opt     LPVOID                lpEnvironment        */
	LPCSTR,                     /* in opt     LPCSTR                lpCurrentDirectory   */
	LPSTARTUPINFOA,             /* in         LPSTARTUPINFOA        lpStartupInfo        */
	out(LPPROCESS_INFORMATION), /* out        LPPROCESS_INFORMATION lpProcessInformation */
], f => CreateProcessAsUserA = f);

export function GetProcessShutdownParameters () {};
GetProcessShutdownParameters = createAutoLoader(lib, "GetProcessShutdownParameters", BOOL /* BOOL */, [
	out(LPDWORD), /* out LPDWORD lpdwLevel */
	out(LPDWORD), /* out LPDWORD lpdwFlags */
], f => GetProcessShutdownParameters = f);

export function SetThreadDescription () {};
SetThreadDescription = createAutoLoader(lib, "SetThreadDescription", HRESULT /* HRESULT */, [
	HANDLE, /* in HANDLE hThread             */
	PCWSTR, /* in PCWSTR lpThreadDescription */
], f => SetThreadDescription = f);

export function GetThreadDescription () {};
GetThreadDescription = createAutoLoader(lib, "GetThreadDescription", HRESULT /* HRESULT */, [
	HANDLE,         /* in HANDLE hThread               */
	pointer(PWSTR), /*    PWSTR* ppszThreadDescription */
], f => GetThreadDescription = f);

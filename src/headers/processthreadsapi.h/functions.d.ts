// basic
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
	HRESULT,
} from "../winnt.h/winnt.js";
import {PROCESS_MITIGATION_POLICY} from "../winnt.h/enums.js";
import {
	PPROCESSOR_NUMBER,
} from "../winnt.h/structs.js";
import {PAPCFUNC} from "../winnt.h/callbacks.js";

// minwinbase.h
import {LPFILETIME, LPSECURITY_ATTRIBUTES, PFILETIME, LPCONTEXT, LPTHREAD_START_ROUTINE} from "../minwinbase.h/minWinBase.js";

// processthreadsapi.h
import {PROCESS_INFORMATION_CLASS, THREAD_INFORMATION_CLASS} from "./enums.js";
import {LPPROCESS_INFORMATION, LPSTARTUPINFOA, LPSTARTUPINFOW, LPPROC_THREAD_ATTRIBUTE_LIST} from "./structs.js";


export function QueueUserAPC (pfnAPC: PAPCFUNC, hThread: HANDLE, dwData: ULONG_PTR): DWORD;
export function GetProcessTimes (hProcess: HANDLE, lpCreationTime: LPFILETIME, lpExitTime: LPFILETIME, lpKernelTime: LPFILETIME, lpUserTime: LPFILETIME): BOOL;
export function GetCurrentProcess (): HANDLE;
export function GetCurrentProcessId (): DWORD;
export function ExitProcess (uExitCode: UINT): VOID;
export function TerminateProcess (hProcess: HANDLE, uExitCode: UINT): BOOL;
export function GetExitCodeProcess (hProcess: HANDLE, lpExitCode: LPDWORD): BOOL;
export function SwitchToThread (): BOOL;
export function CreateThread (lpThreadAttributes: LPSECURITY_ATTRIBUTES, dwStackSize: SIZE_T, lpStartAddress: LPTHREAD_START_ROUTINE, lpParameter: LPVOID, dwCreationFlags: DWORD, lpThreadId: LPDWORD): HANDLE;
export function CreateRemoteThread (hProcess: HANDLE, lpThreadAttributes: LPSECURITY_ATTRIBUTES, dwStackSize: SIZE_T, lpStartAddress: LPTHREAD_START_ROUTINE, lpParameter: LPVOID, dwCreationFlags: DWORD, lpThreadId: LPDWORD): HANDLE;
export function GetCurrentThread (): HANDLE;
export function GetCurrentThreadId (): DWORD;
export function OpenThread (dwDesiredAccess: DWORD, bInheritHandle: BOOL, dwThreadId: DWORD): HANDLE;
export function SetThreadPriority (hThread: HANDLE, nPriority: int): BOOL;
export function SetThreadPriorityBoost (hThread: HANDLE, bDisablePriorityBoost: BOOL): BOOL;
export function GetThreadPriorityBoost (hThread: HANDLE, pDisablePriorityBoost: PBOOL): BOOL;
export function GetThreadPriority (hThread: HANDLE): int;
export function ExitThread (dwExitCode: DWORD): VOID;
export function TerminateThread (hThread: HANDLE, dwExitCode: DWORD): BOOL;
export function GetExitCodeThread (hThread: HANDLE, lpExitCode: LPDWORD): BOOL;
export function SuspendThread (hThread: HANDLE): DWORD;
export function ResumeThread (hThread: HANDLE): DWORD;
export function TlsAlloc (): DWORD;
export function TlsGetValue (dwTlsIndex: DWORD): LPVOID;
export function TlsSetValue (dwTlsIndex: DWORD, lpTlsValue: LPVOID): BOOL;
export function TlsFree (dwTlsIndex: DWORD): BOOL;
export function CreateProcessA (lpApplicationName: LPCSTR, lpCommandLine: LPSTR, lpProcessAttributes: LPSECURITY_ATTRIBUTES, lpThreadAttributes: LPSECURITY_ATTRIBUTES, bInheritHandles: BOOL, dwCreationFlags: DWORD, lpEnvironment: LPVOID, lpCurrentDirectory: LPCSTR, lpStartupInfo: LPSTARTUPINFOA, lpProcessInformation: LPPROCESS_INFORMATION): BOOL;
export function CreateProcessW (lpApplicationName: LPCWSTR, lpCommandLine: LPWSTR, lpProcessAttributes: LPSECURITY_ATTRIBUTES, lpThreadAttributes: LPSECURITY_ATTRIBUTES, bInheritHandles: BOOL, dwCreationFlags: DWORD, lpEnvironment: LPVOID, lpCurrentDirectory: LPCWSTR, lpStartupInfo: LPSTARTUPINFOW, lpProcessInformation: LPPROCESS_INFORMATION): BOOL;
export function CreateProcess (lpApplicationName: LPCWSTR, lpCommandLine: LPWSTR, lpProcessAttributes: LPSECURITY_ATTRIBUTES, lpThreadAttributes: LPSECURITY_ATTRIBUTES, bInheritHandles: BOOL, dwCreationFlags: DWORD, lpEnvironment: LPVOID, lpCurrentDirectory: LPCWSTR, lpStartupInfo: LPSTARTUPINFOW, lpProcessInformation: LPPROCESS_INFORMATION): BOOL;
export function SetProcessShutdownParameters (dwLevel: DWORD, dwFlags: DWORD): BOOL;
export function GetProcessVersion (ProcessId: DWORD): DWORD;
export function GetStartupInfoW (lpStartupInfo: LPSTARTUPINFOW): VOID;
export function GetStartupInfo (lpStartupInfo: LPSTARTUPINFOW): VOID;
export function CreateProcessAsUserW (hToken: HANDLE, lpApplicationName: LPCWSTR, lpCommandLine: LPWSTR, lpProcessAttributes: LPSECURITY_ATTRIBUTES, lpThreadAttributes: LPSECURITY_ATTRIBUTES, bInheritHandles: BOOL, dwCreationFlags: DWORD, lpEnvironment: LPVOID, lpCurrentDirectory: LPCWSTR, lpStartupInfo: LPSTARTUPINFOW, lpProcessInformation: LPPROCESS_INFORMATION): BOOL;
export function CreateProcessAsUser (hToken: HANDLE, lpApplicationName: LPCWSTR, lpCommandLine: LPWSTR, lpProcessAttributes: LPSECURITY_ATTRIBUTES, lpThreadAttributes: LPSECURITY_ATTRIBUTES, bInheritHandles: BOOL, dwCreationFlags: DWORD, lpEnvironment: LPVOID, lpCurrentDirectory: LPCWSTR, lpStartupInfo: LPSTARTUPINFOW, lpProcessInformation: LPPROCESS_INFORMATION): BOOL;
export function SetThreadToken (Thread: PHANDLE, Token: HANDLE): BOOL;
export function OpenProcessToken (ProcessHandle: HANDLE, DesiredAccess: DWORD, TokenHandle: PHANDLE): BOOL;
export function OpenThreadToken (ThreadHandle: HANDLE, DesiredAccess: DWORD, OpenAsSelf: BOOL, TokenHandle: PHANDLE): BOOL;
export function SetPriorityClass (hProcess: HANDLE, dwPriorityClass: DWORD): BOOL;
export function GetPriorityClass (hProcess: HANDLE): DWORD;
export function SetThreadStackGuarantee (StackSizeInBytes: PULONG): BOOL;
export function ProcessIdToSessionId (dwProcessId: DWORD, pSessionId: "DWORD*"): BOOL;
export function GetProcessId (Process: HANDLE): DWORD;
export function GetThreadId (Thread: HANDLE): DWORD;
export function FlushProcessWriteBuffers (): VOID;
export function GetProcessIdOfThread (Thread: HANDLE): DWORD;
export function DeleteProcThreadAttributeList (lpAttributeList: LPPROC_THREAD_ATTRIBUTE_LIST): VOID;
export function UpdateProcThreadAttribute (lpAttributeList: LPPROC_THREAD_ATTRIBUTE_LIST, dwFlags: DWORD, Attribute: DWORD_PTR, lpValue: PVOID, cbSize: SIZE_T, lpPreviousValue: PVOID, lpReturnSize: PSIZE_T): BOOL;
export function SetProcessAffinityUpdateMode (hProcess: HANDLE, dwFlags: DWORD): BOOL;
export function QueryProcessAffinityUpdateMode (hProcess: HANDLE, lpdwFlags: LPDWORD): BOOL;
export function CreateRemoteThreadEx (hProcess: HANDLE, lpThreadAttributes: LPSECURITY_ATTRIBUTES, dwStackSize: SIZE_T, lpStartAddress: LPTHREAD_START_ROUTINE, lpParameter: LPVOID, dwCreationFlags: DWORD, lpAttributeList: LPPROC_THREAD_ATTRIBUTE_LIST, lpThreadId: LPDWORD): HANDLE;
export function GetCurrentThreadStackLimits (LowLimit: PULONG_PTR, HighLimit: PULONG_PTR): VOID;
export function GetThreadContext (hThread: HANDLE, lpContext: LPCONTEXT): BOOL;
export function GetProcessMitigationPolicy (hProcess: HANDLE, MitigationPolicy: PROCESS_MITIGATION_POLICY, lpBuffer: PVOID, dwLength: SIZE_T): BOOL;
export function SetThreadContext (hThread: HANDLE, lpContext: "CONTEXT*"): BOOL;
export function SetProcessMitigationPolicy (MitigationPolicy: PROCESS_MITIGATION_POLICY, lpBuffer: PVOID, dwLength: SIZE_T): BOOL;
export function FlushInstructionCache (hProcess: HANDLE, lpBaseAddress: LPCVOID, dwSize: SIZE_T): BOOL;
export function GetThreadTimes (hThread: HANDLE, lpCreationTime: LPFILETIME, lpExitTime: LPFILETIME, lpKernelTime: LPFILETIME, lpUserTime: LPFILETIME): BOOL;
export function OpenProcess (dwDesiredAccess: DWORD, bInheritHandle: BOOL, dwProcessId: DWORD): HANDLE;
export function IsProcessorFeaturePresent (ProcessorFeature: DWORD): BOOL;
export function GetProcessHandleCount (hProcess: HANDLE, pdwHandleCount: PDWORD): BOOL;
export function GetCurrentProcessorNumber (): DWORD;
export function SetThreadIdealProcessorEx (hThread: HANDLE, lpIdealProcessor: PPROCESSOR_NUMBER, lpPreviousIdealProcessor: PPROCESSOR_NUMBER): BOOL;
export function GetThreadIdealProcessorEx (hThread: HANDLE, lpIdealProcessor: PPROCESSOR_NUMBER): BOOL;
export function GetCurrentProcessorNumberEx (ProcNumber: PPROCESSOR_NUMBER): VOID;
export function GetProcessPriorityBoost (hProcess: HANDLE, pDisablePriorityBoost: PBOOL): BOOL;
export function SetProcessPriorityBoost (hProcess: HANDLE, bDisablePriorityBoost: BOOL): BOOL;
export function GetThreadIOPendingFlag (hThread: HANDLE, lpIOIsPending: PBOOL): BOOL;
export function GetSystemTimes (lpIdleTime: PFILETIME, lpKernelTime: PFILETIME, lpUserTime: PFILETIME): BOOL;
export function GetThreadInformation (hThread: HANDLE, ThreadInformationClass: THREAD_INFORMATION_CLASS, ThreadInformation: LPVOID, ThreadInformationSize: DWORD): BOOL;
export function SetThreadInformation (hThread: HANDLE, ThreadInformationClass: THREAD_INFORMATION_CLASS, ThreadInformation: LPVOID, ThreadInformationSize: DWORD): BOOL;
export function IsProcessCritical (hProcess: HANDLE, Critical: PBOOL): BOOL;
export function SetProtectedPolicy (PolicyGuid: LPCGUID, PolicyValue: ULONG_PTR, OldPolicyValue: PULONG_PTR): BOOL;
export function QueryProtectedPolicy (PolicyGuid: LPCGUID, PolicyValue: PULONG_PTR): BOOL;
export function SetThreadIdealProcessor (hThread: HANDLE, dwIdealProcessor: DWORD): DWORD;
export function SetProcessInformation (hProcess: HANDLE, ProcessInformationClass: PROCESS_INFORMATION_CLASS, ProcessInformation: LPVOID, ProcessInformationSize: DWORD): BOOL;
export function GetProcessInformation (hProcess: HANDLE, ProcessInformationClass: PROCESS_INFORMATION_CLASS, ProcessInformation: LPVOID, ProcessInformationSize: DWORD): BOOL;
export function SetThreadSelectedCpuSets (Thread: HANDLE, CpuSetIds: "ULONG*", CpuSetIdCount: ULONG): BOOL;
export function CreateProcessAsUserA (hToken: HANDLE, lpApplicationName: LPCSTR, lpCommandLine: LPSTR, lpProcessAttributes: LPSECURITY_ATTRIBUTES, lpThreadAttributes: LPSECURITY_ATTRIBUTES, bInheritHandles: BOOL, dwCreationFlags: DWORD, lpEnvironment: LPVOID, lpCurrentDirectory: LPCSTR, lpStartupInfo: LPSTARTUPINFOA, lpProcessInformation: LPPROCESS_INFORMATION): BOOL;
export function GetProcessShutdownParameters (lpdwLevel: LPDWORD, lpdwFlags: LPDWORD): BOOL;
export function SetThreadDescription (hThread: HANDLE, lpThreadDescription: PCWSTR): HRESULT;
export function GetThreadDescription (hThread: HANDLE, ppszThreadDescription: "PWSTR*"): HRESULT;

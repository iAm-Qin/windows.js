// basetsd.h
import {
	SIZE_T,
} from "../basetsd.h/basetsd.js";

// minwindef.h
import {
	HANDLE,
	DWORD,
	BOOL, PBOOL,
	ULONG,
	LPLONG,
	LPVOID,
} from "../minwindef.h/minWindef.js";

// winnt.h
import {
	LONG,
	LPCSTR,
	LPCWSTR,
	VOID,
	PVOID,
	BOOLEAN,
} from "../winnt.h/winnt.js";

// minWinBase.h
import {
	LPCRITICAL_SECTION, PCRITICAL_SECTION,
	LPSECURITY_ATTRIBUTES, PREASON_CONTEXT,
} from "../minwinbase.h/minWinBase.js";

// synchapi.h
import {
	PSRWLOCK,
	PINIT_ONCE, LPINIT_ONCE,
	PINIT_ONCE_FN,
	PCONDITION_VARIABLE,
	PTIMERAPCROUTINE,
	LPSYNCHRONIZATION_BARRIER,
} from "./synchapi.js";


export function InitializeSRWLock (SRWLock: PSRWLOCK): VOID;
export function ReleaseSRWLockExclusive (SRWLock: PSRWLOCK): VOID;
export function ReleaseSRWLockShared (SRWLock: PSRWLOCK): VOID;
export function AcquireSRWLockExclusive (SRWLock: PSRWLOCK): VOID;
export function AcquireSRWLockShared (SRWLock: PSRWLOCK): VOID;
export function TryAcquireSRWLockExclusive (SRWLock: PSRWLOCK): BOOLEAN;
export function TryAcquireSRWLockShared (SRWLock: PSRWLOCK): BOOLEAN;
export function InitializeCriticalSection (lpCriticalSection: LPCRITICAL_SECTION): VOID;
export function InitializeCriticalSection (lpCriticalSection: LPCRITICAL_SECTION): VOID;
export function EnterCriticalSection (lpCriticalSection: LPCRITICAL_SECTION): VOID;
export function LeaveCriticalSection (lpCriticalSection: LPCRITICAL_SECTION): VOID;
export function InitializeCriticalSectionAndSpinCount (lpCriticalSection: LPCRITICAL_SECTION, dwSpinCount: DWORD): BOOL;
export function InitializeCriticalSectionEx (lpCriticalSection: LPCRITICAL_SECTION, dwSpinCount: DWORD, Flags: DWORD): BOOL;
export function SetCriticalSectionSpinCount (lpCriticalSection: LPCRITICAL_SECTION, dwSpinCount: DWORD): DWORD;
export function TryEnterCriticalSection (lpCriticalSection: LPCRITICAL_SECTION): BOOL;
export function DeleteCriticalSection (lpCriticalSection: LPCRITICAL_SECTION): VOID;
export function InitOnceInitialize (InitOnce: PINIT_ONCE): VOID;
export function InitOnceExecuteOnce (InitOnce: PINIT_ONCE, InitFn: PINIT_ONCE_FN, Parameter: PVOID, Context: "LPVOID*"): BOOL;
export function InitOnceBeginInitialize (lpInitOnce: LPINIT_ONCE, dwFlags: DWORD, fPending: PBOOL, lpContext: "LPVOID*"): BOOL;
export function InitOnceComplete (lpInitOnce: LPINIT_ONCE, dwFlags: DWORD, lpContext: LPVOID): BOOL;
export function InitializeConditionVariable (ConditionVariable: PCONDITION_VARIABLE): VOID;
export function WakeConditionVariable (ConditionVariable: PCONDITION_VARIABLE): VOID;
export function WakeAllConditionVariable (ConditionVariable: PCONDITION_VARIABLE): VOID;
export function SleepConditionVariableCS (ConditionVariable: PCONDITION_VARIABLE, CriticalSection: PCRITICAL_SECTION, dwMilliseconds: DWORD): BOOL;
export function SleepConditionVariableSRW (ConditionVariable: PCONDITION_VARIABLE, SRWLock: PSRWLOCK, dwMilliseconds: DWORD, Flags: ULONG): BOOL;
export function SleepConditionVariableSR (ConditionVariable: PCONDITION_VARIABLE, SRWLock: PSRWLOCK, dwMilliseconds: DWORD, Flags: ULONG): BOOL;
export function SetEvent (hEvent: HANDLE): BOOL;
export function ResetEvent (hEvent: HANDLE): BOOL;
export function ReleaseSemaphore (hSemaphore: HANDLE, lReleaseCount: LONG, lpPreviousCount: LPLONG): BOOL;
export function ReleaseMutex (hMutex: HANDLE): BOOL;
export function WaitForSingleObject (hHandle: HANDLE, dwMilliseconds: DWORD): DWORD;
export function SleepEx (dwMilliseconds: DWORD, bAlertable: BOOL): DWORD;
export function WaitForSingleObjectEx (hHandle: HANDLE, dwMilliseconds: DWORD, bAlertable: BOOL): DWORD;
export function WaitForMultipleObjectsEx (nCount: DWORD, lpHandles: "HANDLE*", bWaitAll: BOOL, dwMilliseconds: DWORD, bAlertable: BOOL): DWORD;
export function CreateMutexA (lpMutexAttributes: LPSECURITY_ATTRIBUTES, bInitialOwner: BOOL, lpName: LPCSTR): HANDLE;
export function CreateMutexW (lpMutexAttributes: LPSECURITY_ATTRIBUTES, bInitialOwner: BOOL, lpName: LPCWSTR): HANDLE;
export function CreateMutex (lpMutexAttributes: LPSECURITY_ATTRIBUTES, bInitialOwner: BOOL, lpName: LPCWSTR): HANDLE;
export function OpenMutexW (dwDesiredAccess: DWORD, bInheritHandle: BOOL, lpName: LPCWSTR): HANDLE;
export function OpenMutex (dwDesiredAccess: DWORD, bInheritHandle: BOOL, lpName: LPCWSTR): HANDLE;
export function CreateEventA (lpEventAttributes: LPSECURITY_ATTRIBUTES, bManualReset: BOOL, bInitialState: BOOL, lpName: LPCSTR): HANDLE;
export function CreateEventW (lpEventAttributes: LPSECURITY_ATTRIBUTES, bManualReset: BOOL, bInitialState: BOOL, lpName: LPCWSTR): HANDLE;
export function CreateEvent (lpEventAttributes: LPSECURITY_ATTRIBUTES, bManualReset: BOOL, bInitialState: BOOL, lpName: LPCWSTR): HANDLE;
export function OpenEventA (dwDesiredAccess: DWORD, bInheritHandle: BOOL, lpName: LPCSTR): HANDLE;
export function OpenEventW (dwDesiredAccess: DWORD, bInheritHandle: BOOL, lpName: LPCWSTR): HANDLE;
export function OpenEvent (dwDesiredAccess: DWORD, bInheritHandle: BOOL, lpName: LPCWSTR): HANDLE;
export function OpenSemaphoreW (dwDesiredAccess: DWORD, bInheritHandle: BOOL, lpName: LPCWSTR): HANDLE;
export function OpenSemaphore (dwDesiredAccess: DWORD, bInheritHandle: BOOL, lpName: LPCWSTR): HANDLE;
export function OpenWaitableTimerW (dwDesiredAccess: DWORD, bInheritHandle: BOOL, lpTimerName: LPCWSTR): HANDLE;
export function OpenWaitableTimer (dwDesiredAccess: DWORD, bInheritHandle: BOOL, lpTimerName: LPCWSTR): HANDLE;
export function SetWaitableTimerEx (hTimer: HANDLE, lpDueTime: "LARGE_INTEGER*", lPeriod: LONG, pfnCompletionRoutine: PTIMERAPCROUTINE, lpArgToCompletionRoutine: LPVOID, WakeContext: PREASON_CONTEXT, TolerableDelay: ULONG): BOOL;
export function SetWaitableTimer (hTimer: HANDLE, lpDueTime: "LARGE_INTEGER*", lPeriod: LONG, pfnCompletionRoutine: PTIMERAPCROUTINE, lpArgToCompletionRoutine: LPVOID, fResume: BOOL): BOOL;
export function CancelWaitableTimer (hTimer: HANDLE): BOOL;
export function CreateMutexExA (lpMutexAttributes: LPSECURITY_ATTRIBUTES, lpName: LPCSTR, dwFlags: DWORD, dwDesiredAccess: DWORD): HANDLE;
export function CreateMutexExW (lpMutexAttributes: LPSECURITY_ATTRIBUTES, lpName: LPCWSTR, dwFlags: DWORD, dwDesiredAccess: DWORD): HANDLE;
export function CreateMutexEx (lpMutexAttributes: LPSECURITY_ATTRIBUTES, lpName: LPCWSTR, dwFlags: DWORD, dwDesiredAccess: DWORD): HANDLE;
export function CreateEventExA (lpEventAttributes: LPSECURITY_ATTRIBUTES, lpName: LPCSTR, dwFlags: DWORD, dwDesiredAccess: DWORD): HANDLE;
export function CreateEventExW (lpEventAttributes: LPSECURITY_ATTRIBUTES, lpName: LPCWSTR, dwFlags: DWORD, dwDesiredAccess: DWORD): HANDLE;
export function CreateEventEx (lpEventAttributes: LPSECURITY_ATTRIBUTES, lpName: LPCWSTR, dwFlags: DWORD, dwDesiredAccess: DWORD): HANDLE;
export function CreateSemaphoreExW (lpSemaphoreAttributes: LPSECURITY_ATTRIBUTES, lInitialCount: LONG, lMaximumCount: LONG, lpName: LPCWSTR, dwFlags: DWORD, dwDesiredAccess: DWORD): HANDLE;
export function CreateSemaphoreEx (lpSemaphoreAttributes: LPSECURITY_ATTRIBUTES, lInitialCount: LONG, lMaximumCount: LONG, lpName: LPCWSTR, dwFlags: DWORD, dwDesiredAccess: DWORD): HANDLE;
export function CreateWaitableTimerExW (lpTimerAttributes: LPSECURITY_ATTRIBUTES, lpTimerName: LPCWSTR, dwFlags: DWORD, dwDesiredAccess: DWORD): HANDLE;
export function CreateWaitableTimerEx (lpTimerAttributes: LPSECURITY_ATTRIBUTES, lpTimerName: LPCWSTR, dwFlags: DWORD, dwDesiredAccess: DWORD): HANDLE;
export function EnterSynchronizationBarrier (lpBarrier: LPSYNCHRONIZATION_BARRIER, dwFlags: DWORD): BOOL;
export function InitializeSynchronizationBarrier (lpBarrier: LPSYNCHRONIZATION_BARRIER, lTotalThreads: LONG, lSpinCount: LONG): BOOL;
export function DeleteSynchronizationBarrier (lpBarrier: LPSYNCHRONIZATION_BARRIER): BOOL;
export function Sleep (dwMilliseconds: DWORD): VOID;
export function WaitOnAddress (Address: "volatile VOID*", CompareAddress: PVOID, AddressSize: SIZE_T, dwMilliseconds: DWORD): BOOL;
export function WakeByAddressSingle (Address: PVOID): VOID;
export function WakeByAddressAll (Address: PVOID): VOID;
export function SignalObjectAndWait (hObjectToSignal: HANDLE, hObjectToWaitOn: HANDLE, dwMilliseconds: DWORD, bAlertable: BOOL): DWORD;
export function WaitForMultipleObjects (nCount: DWORD, lpHandles: "HANDLE*", bWaitAll: BOOL, dwMilliseconds: DWORD): DWORD;
export function CreateSemaphoreW (lpSemaphoreAttributes: LPSECURITY_ATTRIBUTES, lInitialCount: LONG, lMaximumCount: LONG, lpName: LPCWSTR): HANDLE;
export function CreateSemaphore (lpSemaphoreAttributes: LPSECURITY_ATTRIBUTES, lInitialCount: LONG, lMaximumCount: LONG, lpName: LPCWSTR): HANDLE;
export function CreateWaitableTimerW (lpTimerAttributes: LPSECURITY_ATTRIBUTES, bManualReset: BOOL, lpTimerName: LPCWSTR): HANDLE;
export function CreateWaitableTimer (lpTimerAttributes: LPSECURITY_ATTRIBUTES, bManualReset: BOOL, lpTimerName: LPCWSTR): HANDLE;

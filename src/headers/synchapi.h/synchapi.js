import koffi from "koffi";

import {pointer, out, inout} from "../../types.js";

// basetsd.h
import {
	SIZE_T,
} from "../basetsd.h/basetsd.js";

// minwindef.h
import {
	DWORD,
	BOOL, PBOOL,
	ULONG,
	LPLONG,
	LPVOID,
} from "../minwindef.h/minWindef.js";

// winnt.h
import {
	HANDLE,
} from "../winnt.h/winnt.js";
import {
	LONG,
	LPCSTR,
	LPCWSTR,
	VOID,
	PVOID,
	BOOLEAN,
	RTL_SRWLOCK_INIT,
	RTL_RUN_ONCE_CHECK_ONLY,
	RTL_RUN_ONCE_ASYNC,
	RTL_RUN_ONCE_INIT_FAILED,
	RTL_RUN_ONCE_CTX_RESERVED_BITS,
	RTL_CONDITION_VARIABLE_INIT,
	RTL_CONDITION_VARIABLE_LOCKMODE_SHARED,
	MUTANT_QUERY_STATE,
	MUTANT_ALL_ACCESS,
} from "../winnt.h/winnt.js";
import {
	LARGE_INTEGER, RTL_SRWLOCK, RTL_RUN_ONCE, PRTL_RUN_ONCE, RTL_BARRIER, PRTL_BARRIER, RTL_CONDITION_VARIABLE,
} from "../winnt.h/structs.js";

// minWinBase.h
import {
	LPCRITICAL_SECTION, PCRITICAL_SECTION,
	LPSECURITY_ATTRIBUTES, PREASON_CONTEXT,
} from "../minwinbase.h/minWinBase.js";


const lib = koffi.load("kernel32.dll");
import {createAutoLoader} from "../../internals/loader.js";

export const SRWLOCK_INIT = RTL_SRWLOCK_INIT;
export const SRWLOCK = RTL_SRWLOCK;
export const PSRWLOCK = pointer(RTL_SRWLOCK);
export const INIT_ONCE = RTL_RUN_ONCE;
export const PINIT_ONCE = PRTL_RUN_ONCE;
export const LPINIT_ONCE = PRTL_RUN_ONCE;
// export const INIT_ONCE_STATIC_INIT = RTL_RUN_ONCE_INIT;
export const INIT_ONCE_CHECK_ONLY = RTL_RUN_ONCE_CHECK_ONLY;
export const INIT_ONCE_ASYNC = RTL_RUN_ONCE_ASYNC;
export const INIT_ONCE_INIT_FAILED = RTL_RUN_ONCE_INIT_FAILED;
export const INIT_ONCE_CTX_RESERVED_BITS = RTL_RUN_ONCE_CTX_RESERVED_BITS;

export const PINIT_ONCE_FN = pointer(koffi.proto("__stdcall", "PINIT_ONCE_FN", BOOL /* BOOL */, [
	inout(PINIT_ONCE), /* in out     PINIT_ONCE InitOnce  */
	inout(PVOID),      /* in out opt PVOID      Parameter */
	pointer(PVOID),    /*            PVOID *    Context   */
]));

export const CONDITION_VARIABLE = RTL_CONDITION_VARIABLE;
export const PCONDITION_VARIABLE = pointer(RTL_CONDITION_VARIABLE);
export const CONDITION_VARIABLE_INIT = RTL_CONDITION_VARIABLE_INIT;
export const CONDITION_VARIABLE_LOCKMODE_SHARED = RTL_CONDITION_VARIABLE_LOCKMODE_SHARED;
export const MUTEX_MODIFY_STATE = MUTANT_QUERY_STATE;
export const MUTEX_ALL_ACCESS = MUTANT_ALL_ACCESS;

export const PTIMERAPCROUTINE = pointer(koffi.proto("__stdcall", "PTIMERAPCROUTINE", VOID /* VOID */, [
	LPVOID, /* in opt LPVOID lpArgToCompletionRoutine */
	DWORD,  /* in     DWORD  dwTimerLowValue          */
	DWORD,  /* in     DWORD  dwTimerHighValue         */
]));

export const CREATE_MUTEX_INITIAL_OWNER = 0x00000001;
export const CREATE_EVENT_MANUAL_RESET = 0x00000001;
export const CREATE_EVENT_INITIAL_SET = 0x00000002;
export const CREATE_WAITABLE_TIMER_MANUAL_RESET = 0x00000001;
export const CREATE_WAITABLE_TIMER_HIGH_RESOLUTION = 0x00000002;
export const SYNCHRONIZATION_BARRIER = RTL_BARRIER;
export const PSYNCHRONIZATION_BARRIER = PRTL_BARRIER;
export const LPSYNCHRONIZATION_BARRIER = PRTL_BARRIER;
export const SYNCHRONIZATION_BARRIER_FLAGS_SPIN_ONLY = 0x01;
export const SYNCHRONIZATION_BARRIER_FLAGS_BLOCK_ONLY = 0x02;
export const SYNCHRONIZATION_BARRIER_FLAGS_NO_DELETE = 0x04;

export function InitializeSRWLock () {};
InitializeSRWLock = createAutoLoader(lib, "InitializeSRWLock", VOID /* VOID */, [
	out(PSRWLOCK), /* out PSRWLOCK SRWLock */
], f => InitializeSRWLock = f);

export function ReleaseSRWLockExclusive () {};
ReleaseSRWLockExclusive = createAutoLoader(lib, "ReleaseSRWLockExclusive", VOID /* VOID */, [
	inout(PSRWLOCK), /* in out PSRWLOCK SRWLock */
], f => ReleaseSRWLockExclusive = f);

export function ReleaseSRWLockShared () {};
ReleaseSRWLockShared = createAutoLoader(lib, "ReleaseSRWLockShared", VOID /* VOID */, [
	inout(PSRWLOCK), /* in out PSRWLOCK SRWLock */
], f => ReleaseSRWLockShared = f);

export function AcquireSRWLockExclusive () {};
AcquireSRWLockExclusive = createAutoLoader(lib, "AcquireSRWLockExclusive", VOID /* VOID */, [
	inout(PSRWLOCK), /* in out PSRWLOCK SRWLock */
], f => AcquireSRWLockExclusive = f);

export function AcquireSRWLockShared () {};
AcquireSRWLockShared = createAutoLoader(lib, "AcquireSRWLockShared", VOID /* VOID */, [
	inout(PSRWLOCK), /* in out PSRWLOCK SRWLock */
], f => AcquireSRWLockShared = f);

export function TryAcquireSRWLockExclusive () {};
TryAcquireSRWLockExclusive = createAutoLoader(lib, "TryAcquireSRWLockExclusive", BOOLEAN /* BOOLEAN */, [
	inout(PSRWLOCK), /* in out PSRWLOCK SRWLock */
], f => TryAcquireSRWLockExclusive = f);

export function TryAcquireSRWLockShared () {};
TryAcquireSRWLockShared = createAutoLoader(lib, "TryAcquireSRWLockShared", BOOLEAN /* BOOLEAN */, [
	inout(PSRWLOCK), /* in out PSRWLOCK SRWLock */
], f => TryAcquireSRWLockShared = f);

export function InitializeCriticalSection () {};
InitializeCriticalSection = createAutoLoader(lib, "InitializeCriticalSection", VOID /* VOID */, [
	out(LPCRITICAL_SECTION), /* out LPCRITICAL_SECTION lpCriticalSection */
], f => InitializeCriticalSection = f);

export function EnterCriticalSection () {};
EnterCriticalSection = createAutoLoader(lib, "EnterCriticalSection", VOID /* VOID */, [
	inout(LPCRITICAL_SECTION), /* in out LPCRITICAL_SECTION lpCriticalSection */
], f => EnterCriticalSection = f);

export function LeaveCriticalSection () {};
LeaveCriticalSection = createAutoLoader(lib, "LeaveCriticalSection", VOID /* VOID */, [
	inout(LPCRITICAL_SECTION), /* in out LPCRITICAL_SECTION lpCriticalSection */
], f => LeaveCriticalSection = f);

export function InitializeCriticalSectionAndSpinCount () {};
InitializeCriticalSectionAndSpinCount = createAutoLoader(lib, "InitializeCriticalSectionAndSpinCount", BOOL /* BOOL */, [
	out(LPCRITICAL_SECTION), /* out LPCRITICAL_SECTION lpCriticalSection */
	DWORD,                   /* in  DWORD              dwSpinCount       */
], f => InitializeCriticalSectionAndSpinCount = f);

export function InitializeCriticalSectionEx () {};
InitializeCriticalSectionEx = createAutoLoader(lib, "InitializeCriticalSectionEx", BOOL /* BOOL */, [
	out(LPCRITICAL_SECTION), /* out LPCRITICAL_SECTION lpCriticalSection */
	DWORD,                   /* in  DWORD              dwSpinCount       */
	DWORD,                   /* in  DWORD              Flags             */
], f => InitializeCriticalSectionEx = f);

export function SetCriticalSectionSpinCount () {};
SetCriticalSectionSpinCount = createAutoLoader(lib, "SetCriticalSectionSpinCount", DWORD /* DWORD */, [
	inout(LPCRITICAL_SECTION), /* in out LPCRITICAL_SECTION lpCriticalSection */
	DWORD,                     /* in     DWORD              dwSpinCount       */
], f => SetCriticalSectionSpinCount = f);

export function TryEnterCriticalSection () {};
TryEnterCriticalSection = createAutoLoader(lib, "TryEnterCriticalSection", BOOL /* BOOL */, [
	inout(LPCRITICAL_SECTION), /* in out LPCRITICAL_SECTION lpCriticalSection */
], f => TryEnterCriticalSection = f);

export function DeleteCriticalSection () {};
DeleteCriticalSection = createAutoLoader(lib, "DeleteCriticalSection", VOID /* VOID */, [
	inout(LPCRITICAL_SECTION), /* in out LPCRITICAL_SECTION lpCriticalSection */
], f => DeleteCriticalSection = f);

export function InitOnceInitialize () {};
InitOnceInitialize = createAutoLoader(lib, "InitOnceInitialize", VOID /* VOID */, [
	out(PINIT_ONCE), /* out PINIT_ONCE InitOnce */
], f => InitOnceInitialize = f);

export function InitOnceExecuteOnce () {};
InitOnceExecuteOnce = createAutoLoader(lib, "InitOnceExecuteOnce", BOOL /* BOOL */, [
	inout(PINIT_ONCE), /* in out     PINIT_ONCE    InitOnce  */
	PINIT_ONCE_FN,     /* in         PINIT_ONCE_FN InitFn    */
	inout(PVOID),      /* in out opt PVOID         Parameter */
	pointer(LPVOID),   /*            LPVOID*       Context   */
], f => InitOnceExecuteOnce = f);

export function InitOnceBeginInitialize () {};
InitOnceBeginInitialize = createAutoLoader(lib, "InitOnceBeginInitialize", BOOL /* BOOL */, [
	inout(LPINIT_ONCE), /* in out LPINIT_ONCE lpInitOnce */
	DWORD,              /* in     DWORD       dwFlags    */
	out(PBOOL),         /* out    PBOOL       fPending   */
	pointer(LPVOID),    /*        LPVOID*     lpContext  */
], f => InitOnceBeginInitialize = f);

export function InitOnceComplete () {};
InitOnceComplete = createAutoLoader(lib, "InitOnceComplete", BOOL /* BOOL */, [
	inout(LPINIT_ONCE), /* in out LPINIT_ONCE lpInitOnce */
	DWORD,              /* in     DWORD       dwFlags    */
	LPVOID,             /* in opt LPVOID      lpContext  */
], f => InitOnceComplete = f);

export function InitializeConditionVariable () {};
InitializeConditionVariable = createAutoLoader(lib, "InitializeConditionVariable", VOID /* VOID */, [
	out(PCONDITION_VARIABLE), /* out PCONDITION_VARIABLE ConditionVariable */
], f => InitializeConditionVariable = f);

export function WakeConditionVariable () {};
WakeConditionVariable = createAutoLoader(lib, "WakeConditionVariable", VOID /* VOID */, [
	inout(PCONDITION_VARIABLE), /* in out PCONDITION_VARIABLE ConditionVariable */
], f => WakeConditionVariable = f);

export function WakeAllConditionVariable () {};
WakeAllConditionVariable = createAutoLoader(lib, "WakeAllConditionVariable", VOID /* VOID */, [
	inout(PCONDITION_VARIABLE), /* in out PCONDITION_VARIABLE ConditionVariable */
], f => WakeAllConditionVariable = f);

export function SleepConditionVariableCS () {};
SleepConditionVariableCS = createAutoLoader(lib, "SleepConditionVariableCS", BOOL /* BOOL */, [
	inout(PCONDITION_VARIABLE), /* in out PCONDITION_VARIABLE ConditionVariable */
	inout(PCRITICAL_SECTION),   /* in out PCRITICAL_SECTION   CriticalSection   */
	DWORD,                      /* in     DWORD               dwMilliseconds    */
], f => SleepConditionVariableCS = f);

export function SleepConditionVariableSRW () {};
SleepConditionVariableSRW = createAutoLoader(lib, "SleepConditionVariableSRW", BOOL /* BOOL */, [
	inout(PCONDITION_VARIABLE), /* in out PCONDITION_VARIABLE ConditionVariable */
	inout(PSRWLOCK),            /* in out PSRWLOCK            SRWLock           */
	DWORD,                      /* in     DWORD               dwMilliseconds    */
	ULONG,                      /* in     ULONG               Flags             */
], f => SleepConditionVariableSRW = f);
export {SleepConditionVariableSRW as SleepConditionVariableSR};

export function SetEvent () {};
SetEvent = createAutoLoader(lib, "SetEvent", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hEvent */
], f => SetEvent = f);

export function ResetEvent () {};
ResetEvent = createAutoLoader(lib, "ResetEvent", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hEvent */
], f => ResetEvent = f);

export function ReleaseSemaphore () {};
ReleaseSemaphore = createAutoLoader(lib, "ReleaseSemaphore", BOOL /* BOOL */, [
	HANDLE,      /* in      HANDLE hSemaphore      */
	LONG,        /* in      LONG   lReleaseCount   */
	out(LPLONG), /* out opt LPLONG lpPreviousCount */
], f => ReleaseSemaphore = f);

export function ReleaseMutex () {};
ReleaseMutex = createAutoLoader(lib, "ReleaseMutex", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hMutex */
], f => ReleaseMutex = f);

export function WaitForSingleObject () {};
WaitForSingleObject = createAutoLoader(lib, "WaitForSingleObject", DWORD /* DWORD */, [
	HANDLE, /* in HANDLE hHandle        */
	DWORD,  /* in DWORD  dwMilliseconds */
], f => WaitForSingleObject = f);

export function SleepEx () {};
SleepEx = createAutoLoader(lib, "SleepEx", DWORD /* DWORD */, [
	DWORD, /* in DWORD dwMilliseconds */
	BOOL,  /* in BOOL  bAlertable     */
], f => SleepEx = f);

export function WaitForSingleObjectEx () {};
WaitForSingleObjectEx = createAutoLoader(lib, "WaitForSingleObjectEx", DWORD /* DWORD */, [
	HANDLE, /* in HANDLE hHandle        */
	DWORD,  /* in DWORD  dwMilliseconds */
	BOOL,   /* in BOOL   bAlertable     */
], f => WaitForSingleObjectEx = f);

export function WaitForMultipleObjectsEx () {};
WaitForMultipleObjectsEx = createAutoLoader(lib, "WaitForMultipleObjectsEx", DWORD /* DWORD */, [
	DWORD,           /* in DWORD         nCount         */
	pointer(HANDLE), /*    CONST HANDLE* lpHandles      */
	BOOL,            /* in BOOL          bWaitAll       */
	DWORD,           /* in DWORD         dwMilliseconds */
	BOOL,            /* in BOOL          bAlertable     */
], f => WaitForMultipleObjectsEx = f);

export function CreateMutexA () {};
CreateMutexA = createAutoLoader(lib, "CreateMutexA", HANDLE /* HANDLE */, [
	LPSECURITY_ATTRIBUTES, /* in opt LPSECURITY_ATTRIBUTES lpMutexAttributes */
	BOOL,                  /* in     BOOL                  bInitialOwner     */
	LPCSTR,                /* in opt LPCSTR                lpName            */
], f => CreateMutexA = f);

export function CreateMutexW () {};
CreateMutexW = createAutoLoader(lib, "CreateMutexW", HANDLE /* HANDLE */, [
	LPSECURITY_ATTRIBUTES, /* in opt LPSECURITY_ATTRIBUTES lpMutexAttributes */
	BOOL,                  /* in     BOOL                  bInitialOwner     */
	LPCWSTR,               /* in opt LPCWSTR               lpName            */
], f => CreateMutexW = f);
export {CreateMutexW as CreateMutex};

export function OpenMutexW () {};
OpenMutexW = createAutoLoader(lib, "OpenMutexW", HANDLE /* HANDLE */, [
	DWORD,   /* in DWORD   dwDesiredAccess */
	BOOL,    /* in BOOL    bInheritHandle  */
	LPCWSTR, /* in LPCWSTR lpName          */
], f => OpenMutexW = f);
export {OpenMutexW as OpenMutex};

export function CreateEventA () {};
CreateEventA = createAutoLoader(lib, "CreateEventA", HANDLE /* HANDLE */, [
	LPSECURITY_ATTRIBUTES, /* in opt LPSECURITY_ATTRIBUTES lpEventAttributes */
	BOOL,                  /* in     BOOL                  bManualReset      */
	BOOL,                  /* in     BOOL                  bInitialState     */
	LPCSTR,                /* in opt LPCSTR                lpName            */
], f => CreateEventA = f);

export function CreateEventW () {};
CreateEventW = createAutoLoader(lib, "CreateEventW", HANDLE /* HANDLE */, [
	LPSECURITY_ATTRIBUTES, /* in opt LPSECURITY_ATTRIBUTES lpEventAttributes */
	BOOL,                  /* in     BOOL                  bManualReset      */
	BOOL,                  /* in     BOOL                  bInitialState     */
	LPCWSTR,               /* in opt LPCWSTR               lpName            */
], f => CreateEventW = f);
export {CreateEventW as CreateEvent};

export function OpenEventA () {};
OpenEventA = createAutoLoader(lib, "OpenEventA", HANDLE /* HANDLE */, [
	DWORD,  /* in DWORD  dwDesiredAccess */
	BOOL,   /* in BOOL   bInheritHandle  */
	LPCSTR, /* in LPCSTR lpName          */
], f => OpenEventA = f);

export function OpenEventW () {};
OpenEventW = createAutoLoader(lib, "OpenEventW", HANDLE /* HANDLE */, [
	DWORD,   /* in DWORD   dwDesiredAccess */
	BOOL,    /* in BOOL    bInheritHandle  */
	LPCWSTR, /* in LPCWSTR lpName          */
], f => OpenEventW = f);
export {OpenEventW as OpenEvent};

export function OpenSemaphoreW () {};
OpenSemaphoreW = createAutoLoader(lib, "OpenSemaphoreW", HANDLE /* HANDLE */, [
	DWORD,   /* in DWORD   dwDesiredAccess */
	BOOL,    /* in BOOL    bInheritHandle  */
	LPCWSTR, /* in LPCWSTR lpName          */
], f => OpenSemaphoreW = f);
export {OpenSemaphoreW as OpenSemaphore};

export function OpenWaitableTimerW () {};
OpenWaitableTimerW = createAutoLoader(lib, "OpenWaitableTimerW", HANDLE /* HANDLE */, [
	DWORD,   /* in DWORD   dwDesiredAccess */
	BOOL,    /* in BOOL    bInheritHandle  */
	LPCWSTR, /* in LPCWSTR lpTimerName     */
], f => OpenWaitableTimerW = f);
export {OpenWaitableTimerW as OpenWaitableTimer};

export function SetWaitableTimerEx () {};
SetWaitableTimerEx = createAutoLoader(lib, "SetWaitableTimerEx", BOOL /* BOOL */, [
	HANDLE,                 /* in     HANDLE               hTimer                   */
	pointer(LARGE_INTEGER), /* in     const LARGE_INTEGER* lpDueTime                */
	LONG,                   /* in     LONG                 lPeriod                  */
	PTIMERAPCROUTINE,       /* in opt PTIMERAPCROUTINE     pfnCompletionRoutine     */
	LPVOID,                 /* in opt LPVOID               lpArgToCompletionRoutine */
	PREASON_CONTEXT,        /* in opt PREASON_CONTEXT      WakeContext              */
	ULONG,                  /* in     ULONG                TolerableDelay           */
], f => SetWaitableTimerEx = f);

export function SetWaitableTimer () {};
SetWaitableTimer = createAutoLoader(lib, "SetWaitableTimer", BOOL /* BOOL */, [
	HANDLE,                 /* in     HANDLE               hTimer                   */
	pointer(LARGE_INTEGER), /* in     const LARGE_INTEGER* lpDueTime                */
	LONG,                   /* in     LONG                 lPeriod                  */
	PTIMERAPCROUTINE,       /* in opt PTIMERAPCROUTINE     pfnCompletionRoutine     */
	LPVOID,                 /* in opt LPVOID               lpArgToCompletionRoutine */
	BOOL,                   /* in     BOOL                 fResume                  */
], f => SetWaitableTimer = f);

export function CancelWaitableTimer () {};
CancelWaitableTimer = createAutoLoader(lib, "CancelWaitableTimer", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hTimer */
], f => CancelWaitableTimer = f);

export function CreateMutexExA () {};
CreateMutexExA = createAutoLoader(lib, "CreateMutexExA", HANDLE /* HANDLE */, [
	LPSECURITY_ATTRIBUTES, /* in opt LPSECURITY_ATTRIBUTES lpMutexAttributes */
	LPCSTR,                /* in opt LPCSTR                lpName            */
	DWORD,                 /* in     DWORD                 dwFlags           */
	DWORD,                 /* in     DWORD                 dwDesiredAccess   */
], f => CreateMutexExA = f);

export function CreateMutexExW () {};
CreateMutexExW = createAutoLoader(lib, "CreateMutexExW", HANDLE /* HANDLE */, [
	LPSECURITY_ATTRIBUTES, /* in opt LPSECURITY_ATTRIBUTES lpMutexAttributes */
	LPCWSTR,               /* in opt LPCWSTR               lpName            */
	DWORD,                 /* in     DWORD                 dwFlags           */
	DWORD,                 /* in     DWORD                 dwDesiredAccess   */
], f => CreateMutexExW = f);
export {CreateMutexExW as CreateMutexEx};

export function CreateEventExA () {};
CreateEventExA = createAutoLoader(lib, "CreateEventExA", HANDLE /* HANDLE */, [
	LPSECURITY_ATTRIBUTES, /* in opt LPSECURITY_ATTRIBUTES lpEventAttributes */
	LPCSTR,                /* in opt LPCSTR                lpName            */
	DWORD,                 /* in     DWORD                 dwFlags           */
	DWORD,                 /* in     DWORD                 dwDesiredAccess   */
], f => CreateEventExA = f);

export function CreateEventExW () {};
CreateEventExW = createAutoLoader(lib, "CreateEventExW", HANDLE /* HANDLE */, [
	LPSECURITY_ATTRIBUTES, /* in opt LPSECURITY_ATTRIBUTES lpEventAttributes */
	LPCWSTR,               /* in opt LPCWSTR               lpName            */
	DWORD,                 /* in     DWORD                 dwFlags           */
	DWORD,                 /* in     DWORD                 dwDesiredAccess   */
], f => CreateEventExW = f);
export {CreateEventExW as CreateEventEx};

export function CreateSemaphoreExW () {};
CreateSemaphoreExW = createAutoLoader(lib, "CreateSemaphoreExW", HANDLE /* HANDLE */, [
	LPSECURITY_ATTRIBUTES, /* in opt   LPSECURITY_ATTRIBUTES lpSemaphoreAttributes */
	LONG,                  /* in       LONG                  lInitialCount         */
	LONG,                  /* in       LONG                  lMaximumCount         */
	LPCWSTR,               /* in opt   LPCWSTR               lpName                */
	DWORD,                 /* reserved DWORD                 dwFlags               */
	DWORD,                 /* in       DWORD                 dwDesiredAccess       */
], f => CreateSemaphoreExW = f);
export {CreateSemaphoreExW as CreateSemaphoreEx};

export function CreateWaitableTimerExW () {};
CreateWaitableTimerExW = createAutoLoader(lib, "CreateWaitableTimerExW", HANDLE /* HANDLE */, [
	LPSECURITY_ATTRIBUTES, /* in opt LPSECURITY_ATTRIBUTES lpTimerAttributes */
	LPCWSTR,               /* in opt LPCWSTR               lpTimerName       */
	DWORD,                 /* in     DWORD                 dwFlags           */
	DWORD,                 /* in     DWORD                 dwDesiredAccess   */
], f => CreateWaitableTimerExW = f);
export {CreateWaitableTimerExW as CreateWaitableTimerEx};

export function EnterSynchronizationBarrier () {};
EnterSynchronizationBarrier = createAutoLoader(lib, "EnterSynchronizationBarrier", BOOL /* BOOL */, [
	inout(LPSYNCHRONIZATION_BARRIER), /* in out LPSYNCHRONIZATION_BARRIER lpBarrier */
	DWORD,                            /* in     DWORD                     dwFlags   */
], f => EnterSynchronizationBarrier = f);

export function InitializeSynchronizationBarrier () {};
InitializeSynchronizationBarrier = createAutoLoader(lib, "InitializeSynchronizationBarrier", BOOL /* BOOL */, [
	out(LPSYNCHRONIZATION_BARRIER), /* out LPSYNCHRONIZATION_BARRIER lpBarrier     */
	LONG,                           /* in  LONG                      lTotalThreads */
	LONG,                           /* in  LONG                      lSpinCount    */
], f => InitializeSynchronizationBarrier = f);

export function DeleteSynchronizationBarrier () {};
DeleteSynchronizationBarrier = createAutoLoader(lib, "DeleteSynchronizationBarrier", BOOL /* BOOL */, [
	inout(LPSYNCHRONIZATION_BARRIER), /* in out LPSYNCHRONIZATION_BARRIER lpBarrier */
], f => DeleteSynchronizationBarrier = f);

export function Sleep () {};
Sleep = createAutoLoader(lib, "Sleep", VOID /* VOID */, [
	DWORD, /* in DWORD dwMilliseconds */
], f => Sleep = f);

export function WaitOnAddress () {};
WaitOnAddress = createAutoLoader(lib, "WaitOnAddress", BOOL /* BOOL */, [
	pointer(VOID), /*        VOID*  Address        */
	PVOID,         /*        PVOID  CompareAddress */
	SIZE_T,        /* in     SIZE_T AddressSize    */
	DWORD,         /* in opt DWORD  dwMilliseconds */
], f => WaitOnAddress = f);

export function WakeByAddressSingle () {};
WakeByAddressSingle = createAutoLoader(lib, "WakeByAddressSingle", VOID /* VOID */, [
	PVOID, /* in PVOID Address */
], f => WakeByAddressSingle = f);

export function WakeByAddressAll () {};
WakeByAddressAll = createAutoLoader(lib, "WakeByAddressAll", VOID /* VOID */, [
	PVOID, /* in PVOID Address */
], f => WakeByAddressAll = f);

export function SignalObjectAndWait () {};
SignalObjectAndWait = createAutoLoader(lib, "SignalObjectAndWait", DWORD /* DWORD */, [
	HANDLE, /* in HANDLE hObjectToSignal */
	HANDLE, /* in HANDLE hObjectToWaitOn */
	DWORD,  /* in DWORD  dwMilliseconds  */
	BOOL,   /* in BOOL   bAlertable      */
], f => SignalObjectAndWait = f);

export function WaitForMultipleObjects () {};
WaitForMultipleObjects = createAutoLoader(lib, "WaitForMultipleObjects", DWORD /* DWORD */, [
	DWORD,           /* in DWORD         nCount         */
	pointer(HANDLE), /*    CONST HANDLE* lpHandles      */
	BOOL,            /* in BOOL          bWaitAll       */
	DWORD,           /* in DWORD         dwMilliseconds */
], f => WaitForMultipleObjects = f);

export function CreateSemaphoreW () {};
CreateSemaphoreW = createAutoLoader(lib, "CreateSemaphoreW", HANDLE /* HANDLE */, [
	LPSECURITY_ATTRIBUTES, /* in opt LPSECURITY_ATTRIBUTES lpSemaphoreAttributes */
	LONG,                  /* in     LONG                  lInitialCount         */
	LONG,                  /* in     LONG                  lMaximumCount         */
	LPCWSTR,               /* in opt LPCWSTR               lpName                */
], f => CreateSemaphoreW = f);
export {CreateSemaphoreW as CreateSemaphore};

export function CreateWaitableTimerW () {};
CreateWaitableTimerW = createAutoLoader(lib, "CreateWaitableTimerW", HANDLE /* HANDLE */, [
	LPSECURITY_ATTRIBUTES, /* in opt LPSECURITY_ATTRIBUTES lpTimerAttributes */
	BOOL,                  /* in     BOOL                  bManualReset      */
	LPCWSTR,               /* in opt LPCWSTR               lpTimerName       */
], f => CreateWaitableTimerW = f);
export {CreateWaitableTimerW as CreateWaitableTimer};

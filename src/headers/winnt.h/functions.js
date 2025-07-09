import koffi from "koffi";

import {typecast} from "../../macros.js";

// basic
import {pointer, out, inout} from "../../types.js";
import {
	int, uint, long, __int64, u__int64, size_t,
} from "../../types.js";

// basetsd.h
import {
	DWORD64, PDWORD64,
	ULONG_PTR,
	SIZE_T,
} from "../basetsd.h/basetsd.js";

// guiddef.h
import {
	GUID,
} from "../guiddef.h/guiddef.js";

// minwindef.h
import {
	DWORD, PDWORD,
	WORD,
	BYTE,
} from "../minwindef.h/minWindef.js";

// winnt.h
import {
	BOOLEAN,
	PSECURITY_DESCRIPTOR,
	PVOID,
	PWSTR,
	ULONGLONG,
	VOID,
} from "./winnt.js";
import {
	RTL_UMS_SCHEDULER_REASON,
	OS_DEPLOYEMENT_STATE_VALUES,
} from "./enums.js";
import {
	PCONTEXT,
	PEXCEPTION_RECORD,
	PEXCEPTION_ROUTINE,
	PIMAGE_ARM64_RUNTIME_FUNCTION_ENTRY,
	PKNONVOLATILE_CONTEXT_POINTERS,
	PRUNTIME_FUNCTION,
	PUNWIND_HISTORY_TABLE,
	PSLIST_HEADER,
	PSLIST_ENTRY,
	SLIST_HEADER,
	PNV_MEMORY_RANGE,
	PCORRELATION_VECTOR,
	PCUSTOM_SYSTEM_EVENT_TRIGGER_CONFIG,
	PRTL_OSVERSIONINFOEXW,
} from "./structs.js";


const lib = koffi.load("kernel32.dll");
import {createAutoLoader} from "../../internals/loader.js";

export function Int32x32To64 (a, b) {
	return typecast(__int64, typecast(long, a)) * typecast(__int64, typecast(long, b));
}

export function UInt32x32To64 (a, b) {
	return typecast(u__int64, typecast(uint, a)) * typecast(u__int64, typecast(uint, b));
}

export function Int64ShllMod32 (a, b) {
	return typecast(u__int64, a) << BigInt(b);
}

export function Int64ShraMod32 (a, b) {
	return typecast(__int64, typecast(__int64, a) >> BigInt(b));
}

export function Int64ShrlMod32 (a, b) {
	return typecast(u__int64, a) >> BigInt(b);
}

//#if defined(_IA64_)
// export function RtlUnwind2 () {};
// RtlUnwind2 = createAutoLoader(lib, "RtlUnwind2", VOID /* VOID */, [
// 	FRAME_POINTERS,    /* in opt FRAME_POINTERS    TargetFrame     */
// 	PVOID,             /* in opt PVOID             TargetIp        */
// 	PEXCEPTION_RECORD, /* in opt PEXCEPTION_RECORD ExceptionRecord */
// 	PVOID,             /* in     PVOID             ReturnValue     */
// 	PCONTEXT,          /* in     PCONTEXT          ContextRecord   */
// ], f => RtlUnwind2 = f);
//#endif _IA64_

export function RtlCaptureStackBackTrace () {};
RtlCaptureStackBackTrace = createAutoLoader(lib, "RtlCaptureStackBackTrace", WORD /* WORD */, [
	DWORD,               /* DWORD FramesToSkip */
	DWORD,               /* DWORD FramesToCapture */
	out(pointer(PVOID)), /* PVOID* BackTrace */
	out(PDWORD),         /* PDWORD BackTraceHash */
], f => RtlCaptureContext = f);

export function RtlCaptureContext () {};
RtlCaptureContext = createAutoLoader(lib, "RtlCaptureContext", VOID /* VOID */, [
	out(PCONTEXT), /* out PCONTEXT ContextRecord */
], f => RtlCaptureContext = f);

export function RtlCaptureContext2 () {};
RtlCaptureContext2 = createAutoLoader(lib, "RtlCaptureContext2", VOID /* VOID */, [
	inout(PCONTEXT), /* in out PCONTEXT ContextRecord */
], f => RtlCaptureContext2 = f);

export function RtlUnwind () {};
RtlUnwind = createAutoLoader(lib, "RtlUnwind", VOID /* VOID */, [
	PVOID,             /* in opt PVOID             TargetFrame     */
	PVOID,             /* in opt PVOID             TargetIp        */
	PEXCEPTION_RECORD, /* in opt PEXCEPTION_RECORD ExceptionRecord */
	PVOID,             /* in     PVOID             ReturnValue     */
], f => RtlUnwind = f);

export function RtlAddGrowableFunctionTable () {};
RtlAddGrowableFunctionTable = createAutoLoader(lib, "RtlAddGrowableFunctionTable", DWORD /* DWORD */, [
	out(pointer(PVOID)), /* out PVOID*            DynamicTable      */
	PRUNTIME_FUNCTION,   /*     PRUNTIME_FUNCTION FunctionTable     */
	DWORD,               /* in  DWORD             EntryCount        */
	DWORD,               /* in  DWORD             MaximumEntryCount */
	ULONG_PTR,           /* in  ULONG_PTR         RangeBase         */
	ULONG_PTR,           /* in  ULONG_PTR         RangeEnd          */
], f => RtlAddGrowableFunctionTable = f);

export function RtlGrowFunctionTable () {};
RtlGrowFunctionTable = createAutoLoader(lib, "RtlGrowFunctionTable", VOID /* VOID */, [
	inout(PVOID), /* in out PVOID DynamicTable  */
	DWORD,        /* in     DWORD NewEntryCount */
], f => RtlGrowFunctionTable = f);

export function RtlDeleteGrowableFunctionTable () {};
RtlDeleteGrowableFunctionTable = createAutoLoader(lib, "RtlDeleteGrowableFunctionTable", VOID /* VOID */, [
	PVOID, /* in PVOID DynamicTable */
], f => RtlDeleteGrowableFunctionTable = f);

export function RtlLookupFunctionEntry () {};
RtlLookupFunctionEntry = createAutoLoader(lib, "RtlLookupFunctionEntry", PRUNTIME_FUNCTION /* PRUNTIME_FUNCTION */, [
	DWORD64,                      /* in         DWORD64               ControlPc    */
	out(PDWORD64),                /* out        PDWORD64              ImageBase    */
	inout(PUNWIND_HISTORY_TABLE), /* in out opt PUNWIND_HISTORY_TABLE HistoryTable */
], f => RtlLookupFunctionEntry = f);

export function RtlUnwindEx () {};
RtlUnwindEx = createAutoLoader(lib, "RtlUnwindEx", VOID /* VOID */, [
	PVOID,                 /* in opt PVOID                 TargetFrame     */
	PVOID,                 /* in opt PVOID                 TargetIp        */
	PEXCEPTION_RECORD,     /* in opt PEXCEPTION_RECORD     ExceptionRecord */
	PVOID,                 /* in     PVOID                 ReturnValue     */
	PCONTEXT,              /* in     PCONTEXT              ContextRecord   */
	PUNWIND_HISTORY_TABLE, /* in opt PUNWIND_HISTORY_TABLE HistoryTable    */
], f => RtlUnwindEx = f);

export function RtlVirtualUnwind () {};
RtlVirtualUnwind = createAutoLoader(lib, "RtlVirtualUnwind", PEXCEPTION_ROUTINE /* PEXCEPTION_ROUTINE */, [
	DWORD,                                 /* in         DWORD                          HandlerType      */
	DWORD64,                               /* in         DWORD64                        ImageBase        */
	DWORD64,                               /* in         DWORD64                        ControlPc        */
	PRUNTIME_FUNCTION,                     /* in         PRUNTIME_FUNCTION              FunctionEntry    */
	inout(PCONTEXT),                       /* in out     PCONTEXT                       ContextRecord    */
	out(pointer(PVOID)),                   /* out        PVOID*                         HandlerData      */
	out(PDWORD64),                         /* out        PDWORD64                       EstablisherFrame */
	inout(PKNONVOLATILE_CONTEXT_POINTERS), /* in out opt PKNONVOLATILE_CONTEXT_POINTERS ContextPointers  */
], f => RtlVirtualUnwind = f);

//#if defined(_ARM_)
// export function RtlAddGrowableFunctionTable () {};
// RtlAddGrowableFunctionTable = createAutoLoader(lib, "RtlAddGrowableFunctionTable", DWORD /* DWORD */, [
// 	out(pointer(PVOID)), /* out PVOID*            DynamicTable      */
// 	PRUNTIME_FUNCTION,   /*     PRUNTIME_FUNCTION FunctionTable     */
// 	DWORD,               /* in  DWORD             EntryCount        */
// 	DWORD,               /* in  DWORD             MaximumEntryCount */
// 	ULONG_PTR,           /* in  ULONG_PTR         RangeBase         */
// 	ULONG_PTR,           /* in  ULONG_PTR         RangeEnd          */
// ], f => RtlAddGrowableFunctionTable = f);
//
// export function RtlGrowFunctionTable () {};
// RtlGrowFunctionTable = createAutoLoader(lib, "RtlGrowFunctionTable", VOID /* VOID */, [
// 	inout(PVOID), /* in out PVOID DynamicTable  */
// 	DWORD,        /* in     DWORD NewEntryCount */
// ], f => RtlGrowFunctionTable = f);
//
// export function RtlDeleteGrowableFunctionTable () {};
// RtlDeleteGrowableFunctionTable = createAutoLoader(lib, "RtlDeleteGrowableFunctionTable", VOID /* VOID */, [
// 	PVOID, /* in PVOID DynamicTable */
// ], f => RtlDeleteGrowableFunctionTable = f);
//
// export function RtlLookupFunctionEntry () {};
// RtlLookupFunctionEntry = createAutoLoader(lib, "RtlLookupFunctionEntry", PRUNTIME_FUNCTION /* PRUNTIME_FUNCTION */, [
// 	ULONG_PTR,                    /* in         ULONG_PTR             ControlPc    */
// 	out(PDWORD),                  /* out        PDWORD                ImageBase    */
// 	inout(PUNWIND_HISTORY_TABLE), /* in out opt PUNWIND_HISTORY_TABLE HistoryTable */
// ], f => RtlLookupFunctionEntry = f);
//
// export function RtlUnwindEx () {};
// RtlUnwindEx = createAutoLoader(lib, "RtlUnwindEx", VOID /* VOID */, [
// 	PVOID,                 /* in opt PVOID                 TargetFrame     */
// 	PVOID,                 /* in opt PVOID                 TargetIp        */
// 	PEXCEPTION_RECORD,     /* in opt PEXCEPTION_RECORD     ExceptionRecord */
// 	PVOID,                 /* in     PVOID                 ReturnValue     */
// 	PCONTEXT,              /* in     PCONTEXT              ContextRecord   */
// 	PUNWIND_HISTORY_TABLE, /* in opt PUNWIND_HISTORY_TABLE HistoryTable    */
// ], f => RtlUnwindEx = f);
//
// export function RtlVirtualUnwind () {};
// RtlVirtualUnwind = createAutoLoader(lib, "RtlVirtualUnwind", PEXCEPTION_ROUTINE /* PEXCEPTION_ROUTINE */, [
// 	DWORD,                                 /* in         DWORD                          HandlerType      */
// 	DWORD,                                 /* in         DWORD                          ImageBase        */
// 	DWORD,                                 /* in         DWORD                          ControlPc        */
// 	PRUNTIME_FUNCTION,                     /* in         PRUNTIME_FUNCTION              FunctionEntry    */
// 	inout(PCONTEXT),                       /* in out     PCONTEXT                       ContextRecord    */
// 	out(pointer(PVOID)),                   /* out        PVOID*                         HandlerData      */
// 	out(PDWORD),                           /* out        PDWORD                         EstablisherFrame */
// 	inout(PKNONVOLATILE_CONTEXT_POINTERS), /* in out opt PKNONVOLATILE_CONTEXT_POINTERS ContextPointers  */
// ], f => RtlVirtualUnwind = f);
//#endif // _ARM_

//#if defined(_ARM64_)
// export function RtlAddGrowableFunctionTable () {};
// RtlAddGrowableFunctionTable = createAutoLoader(lib, "RtlAddGrowableFunctionTable", DWORD /* DWORD */, [
// 	out(pointer(PVOID)), /* out PVOID*            DynamicTable      */
// 	PRUNTIME_FUNCTION,   /*     PRUNTIME_FUNCTION FunctionTable     */
// 	DWORD,               /* in  DWORD             EntryCount        */
// 	DWORD,               /* in  DWORD             MaximumEntryCount */
// 	ULONG_PTR,           /* in  ULONG_PTR         RangeBase         */
// 	ULONG_PTR,           /* in  ULONG_PTR         RangeEnd          */
// ], f => RtlAddGrowableFunctionTable = f);
//
// export function RtlGrowFunctionTable () {};
// RtlGrowFunctionTable = createAutoLoader(lib, "RtlGrowFunctionTable", VOID /* VOID */, [
// 	inout(PVOID), /* in out PVOID DynamicTable  */
// 	DWORD,        /* in     DWORD NewEntryCount */
// ], f => RtlGrowFunctionTable = f);
//
// export function RtlDeleteGrowableFunctionTable () {};
// RtlDeleteGrowableFunctionTable = createAutoLoader(lib, "RtlDeleteGrowableFunctionTable", VOID /* VOID */, [
// 	PVOID, /* in PVOID DynamicTable */
// ], f => RtlDeleteGrowableFunctionTable = f);
//
// export function RtlLookupFunctionEntry () {};
// RtlLookupFunctionEntry = createAutoLoader(lib, "RtlLookupFunctionEntry", PRUNTIME_FUNCTION /* PRUNTIME_FUNCTION */, [
// 	ULONG_PTR,                    /* in         ULONG_PTR             ControlPc    */
// 	out(PULONG_PTR),              /* out        PULONG_PTR            ImageBase    */
// 	inout(PUNWIND_HISTORY_TABLE), /* in out opt PUNWIND_HISTORY_TABLE HistoryTable */
// ], f => RtlLookupFunctionEntry = f);
//
// export function RtlUnwindEx () {};
// RtlUnwindEx = createAutoLoader(lib, "RtlUnwindEx", VOID /* VOID */, [
// 	PVOID,                 /* in opt PVOID                 TargetFrame     */
// 	PVOID,                 /* in opt PVOID                 TargetIp        */
// 	PEXCEPTION_RECORD,     /* in opt PEXCEPTION_RECORD     ExceptionRecord */
// 	PVOID,                 /* in     PVOID                 ReturnValue     */
// 	PCONTEXT,              /* in     PCONTEXT              ContextRecord   */
// 	PUNWIND_HISTORY_TABLE, /* in opt PUNWIND_HISTORY_TABLE HistoryTable    */
// ], f => RtlUnwindEx = f);
//
// export function RtlVirtualUnwind () {};
// RtlVirtualUnwind = createAutoLoader(lib, "RtlVirtualUnwind", PEXCEPTION_ROUTINE /* PEXCEPTION_ROUTINE */, [
// 	DWORD,                                 /* in         DWORD                          HandlerType      */
// 	ULONG_PTR,                             /* in         ULONG_PTR                      ImageBase        */
// 	ULONG_PTR,                             /* in         ULONG_PTR                      ControlPc        */
// 	PRUNTIME_FUNCTION,                     /* in         PRUNTIME_FUNCTION              FunctionEntry    */
// 	inout(PCONTEXT),                       /* in out     PCONTEXT                       ContextRecord    */
// 	out(pointer(PVOID)),                   /* out        PVOID*                         HandlerData      */
// 	out(PULONG_PTR),                       /* out        PULONG_PTR                     EstablisherFrame */
// 	inout(PKNONVOLATILE_CONTEXT_POINTERS), /* in out opt PKNONVOLATILE_CONTEXT_POINTERS ContextPointers  */
// ], f => RtlVirtualUnwind = f);
//#endif // _ARM64_

//#if defined(_CHPE_X86_ARM64_)
// export function RtlUnwindEx () {};
// RtlUnwindEx = createAutoLoader(lib, "RtlUnwindEx", VOID /* VOID */, [
// 	PVOID,             /* in opt PVOID             TargetFrame     */
// 	PVOID,             /* in opt PVOID             TargetIp        */
// 	PEXCEPTION_RECORD, /* in opt PEXCEPTION_RECORD ExceptionRecord */
// 	PVOID,             /* in     PVOID             ReturnValue     */
// 	PCONTEXT,          /* in     PCONTEXT          ContextRecord   */
// 	PVOID,             /* in opt PVOID             HistoryTable    */
// ], f => RtlUnwindEx = f);
//
// export function RtlLookupFunctionEntryCHPE () {};
// RtlLookupFunctionEntryCHPE = createAutoLoader(lib, "RtlLookupFunctionEntryCHPE", PIMAGE_ARM64_RUNTIME_FUNCTION_ENTRY /* PIMAGE_ARM64_RUNTIME_FUNCTION_ENTRY */, [
// 	ULONG_PTR,       /* in         ULONG_PTR  ControlPc    */
// 	out(PULONG_PTR), /* out        PULONG_PTR ImageBase    */
// 	inout(PVOID),    /* in out opt PVOID      HistoryTable */
// ], f => RtlLookupFunctionEntryCHPE = f);
//#endif // _CHPE_X86_ARM64_

export function RtlRaiseException () {};
RtlRaiseException = createAutoLoader(lib, "RtlRaiseException", VOID /* VOID */, [
	PEXCEPTION_RECORD, /* in PEXCEPTION_RECORD ExceptionRecord */
], f => RtlRaiseException = f);

export function RtlPcToFileHeader () {};
RtlPcToFileHeader = createAutoLoader(lib, "RtlPcToFileHeader", PVOID /* PVOID */, [
	PVOID,               /* in  PVOID  PcValue     */
	out(pointer(PVOID)), /* out PVOID* BaseOfImage */
], f => RtlPcToFileHeader = f);

export function RtlCompareMemory () {};
RtlCompareMemory = createAutoLoader(lib, "RtlCompareMemory", SIZE_T /* SIZE_T */, [
	pointer(VOID), /* in const VOID* Source1 */
	pointer(VOID), /* in const VOID* Source2 */
	SIZE_T,        /* in SIZE_T      Length  */
], f => RtlCompareMemory = f);

export function RtlInitializeSListHead () {};
RtlInitializeSListHead = createAutoLoader(lib, "RtlInitializeSListHead", VOID /* VOID */, [
	out(PSLIST_HEADER), /* out PSLIST_HEADER ListHead */
], f => RtlInitializeSListHead = f);

export function RtlFirstEntrySList () {};
RtlFirstEntrySList = createAutoLoader(lib, "RtlFirstEntrySList", PSLIST_ENTRY /* PSLIST_ENTRY */, [
	pointer(koffi.types.void), /* in const SLIST_HEADER * ListHead */
], f => RtlFirstEntrySList = f);

export function RtlInterlockedPopEntrySList () {};
RtlInterlockedPopEntrySList = createAutoLoader(lib, "RtlInterlockedPopEntrySList", PSLIST_ENTRY /* PSLIST_ENTRY */, [
	inout(PSLIST_HEADER), /* in out PSLIST_HEADER ListHead */
], f => RtlInterlockedPopEntrySList = f);

export function RtlInterlockedPushEntrySList () {};
RtlInterlockedPushEntrySList = createAutoLoader(lib, "RtlInterlockedPushEntrySList", PSLIST_ENTRY /* PSLIST_ENTRY */, [
	inout(PSLIST_HEADER), /* in out PSLIST_HEADER ListHead  */
	inout(PSLIST_ENTRY),  /* in out PSLIST_ENTRY  ListEntry */
], f => RtlInterlockedPushEntrySList = f);

export function RtlInterlockedPushListSListEx () {};
RtlInterlockedPushListSListEx = createAutoLoader(lib, "RtlInterlockedPushListSListEx", PSLIST_ENTRY /* PSLIST_ENTRY */, [
	inout(PSLIST_HEADER), /* in out PSLIST_HEADER ListHead */
	inout(PSLIST_ENTRY),  /* in out PSLIST_ENTRY  List     */
	inout(PSLIST_ENTRY),  /* in out PSLIST_ENTRY  ListEnd  */
	DWORD,                /* in     DWORD         Count    */
], f => RtlInterlockedPushListSListEx = f);

export function RtlInterlockedFlushSList () {};
RtlInterlockedFlushSList = createAutoLoader(lib, "RtlInterlockedFlushSList", PSLIST_ENTRY /* PSLIST_ENTRY */, [
	inout(PSLIST_HEADER), /* in out PSLIST_HEADER ListHead */
], f => RtlInterlockedFlushSList = f);

export function RtlQueryDepthSList () {};
RtlQueryDepthSList = createAutoLoader(lib, "RtlQueryDepthSList", WORD /* WORD */, [
	PSLIST_HEADER, /* in PSLIST_HEADER ListHead */
], f => RtlQueryDepthSList = f);

export function RtlGetReturnAddressHijackTarget () {};
RtlGetReturnAddressHijackTarget = createAutoLoader(lib, "RtlGetReturnAddressHijackTarget", ULONG_PTR /* ULONG_PTR */, [
	/* void */
], f => RtlGetReturnAddressHijackTarget = f);

export function VerSetConditionMask () {};
VerSetConditionMask = createAutoLoader(lib, "VerSetConditionMask", ULONGLONG /* ULONGLONG */, [
	ULONGLONG, /* in ULONGLONG ConditionMask */
	DWORD,     /* in DWORD     TypeMask      */
	BYTE,      /* in BYTE      Condition     */
], f => VerSetConditionMask = f);

export function RtlGetProductInfo () {};
RtlGetProductInfo = createAutoLoader(lib, "RtlGetProductInfo", BOOLEAN /* BOOLEAN */, [
	DWORD,       /* in  DWORD  OSMajorVersion      */
	DWORD,       /* in  DWORD  OSMinorVersion      */
	DWORD,       /* in  DWORD  SpMajorVersion      */
	DWORD,       /* in  DWORD  SpMinorVersion      */
	out(PDWORD), /* out PDWORD ReturnedProductType */
], f => RtlGetProductInfo = f);

export const RTL_UMS_SCHEDULER_ENTRY_POINT = pointer(koffi.proto("__stdcall", "RTL_UMS_SCHEDULER_ENTRY_POINT", VOID /* VOID */, [
	RTL_UMS_SCHEDULER_REASON, /* in RTL_UMS_SCHEDULER_REASON Reason            */
	ULONG_PTR,                /* in ULONG_PTR                ActivationPayload */
	PVOID,                    /* in PVOID                    SchedulerParam    */
]));

export function RtlCrc32 () {};
RtlCrc32 = createAutoLoader(lib, "RtlCrc32", DWORD /* DWORD */, [
	pointer(koffi.types.void), /*    const void * Buffer     */
	size_t,                    /* in size_t       Size       */
	DWORD,                     /* in DWORD        InitialCrc */
], f => RtlCrc32 = f);

export function RtlCrc64 () {};
RtlCrc64 = createAutoLoader(lib, "RtlCrc64", ULONGLONG /* ULONGLONG */, [
	pointer(koffi.types.void), /*    const void * Buffer     */
	size_t,                    /* in size_t       Size       */
	ULONGLONG,                 /* in ULONGLONG    InitialCrc */
], f => RtlCrc64 = f);

export function RtlOsDeploymentState () {};
RtlOsDeploymentState = createAutoLoader(lib, "RtlOsDeploymentState", OS_DEPLOYEMENT_STATE_VALUES /* OS_DEPLOYEMENT_STATE_VALUES */, [
	DWORD, /* in DWORD Flags */
], f => RtlOsDeploymentState = f);

export function RtlGetNonVolatileToken () {};
RtlGetNonVolatileToken = createAutoLoader(lib, "RtlGetNonVolatileToken", DWORD /* DWORD */, [
	PVOID,          /*    PVOID   NvBuffer */
	SIZE_T,         /* in SIZE_T  Size     */
	pointer(PVOID), /*    PVOID * NvToken  */
], f => RtlGetNonVolatileToken = f);

export function RtlFreeNonVolatileToken () {};
RtlFreeNonVolatileToken = createAutoLoader(lib, "RtlFreeNonVolatileToken", DWORD /* DWORD */, [
	PVOID, /* in PVOID NvToken */
], f => RtlFreeNonVolatileToken = f);

export function RtlFlushNonVolatileMemory () {};
RtlFlushNonVolatileMemory = createAutoLoader(lib, "RtlFlushNonVolatileMemory", DWORD /* DWORD */, [
	PVOID,  /* in PVOID  NvToken  */
	PVOID,  /*    PVOID  NvBuffer */
	SIZE_T, /* in SIZE_T Size     */
	DWORD,  /* in DWORD  Flags    */
], f => RtlFlushNonVolatileMemory = f);

export function RtlDrainNonVolatileFlush () {};
RtlDrainNonVolatileFlush = createAutoLoader(lib, "RtlDrainNonVolatileFlush", DWORD /* DWORD */, [
	PVOID, /* in PVOID NvToken */
], f => RtlDrainNonVolatileFlush = f);

export function RtlWriteNonVolatileMemory () {};
RtlWriteNonVolatileMemory = createAutoLoader(lib, "RtlWriteNonVolatileMemory", DWORD /* DWORD */, [
	PVOID,         /* in PVOID                  NvToken       */
	pointer(VOID), /*    VOID UNALIGNED *       NvDestination */
	pointer(VOID), /*    CONST VOID UNALIGNED * Source        */
	SIZE_T,        /* in SIZE_T                 Size          */
	DWORD,         /* in DWORD                  Flags         */
], f => RtlWriteNonVolatileMemory = f);

export function RtlFillNonVolatileMemory () {};
RtlFillNonVolatileMemory = createAutoLoader(lib, "RtlFillNonVolatileMemory", DWORD /* DWORD */, [
	PVOID,         /* in PVOID            NvToken       */
	pointer(VOID), /*    VOID UNALIGNED * NvDestination */
	SIZE_T,        /* in SIZE_T           Size          */
	BYTE,          /* in CONST BYTE       Value         */
	DWORD,         /* in DWORD            Flags         */
], f => RtlFillNonVolatileMemory = f);

export function RtlFlushNonVolatileMemoryRanges () {};
RtlFlushNonVolatileMemoryRanges = createAutoLoader(lib, "RtlFlushNonVolatileMemoryRanges", DWORD /* DWORD */, [
	PVOID,            /* in PVOID            NvToken   */
	PNV_MEMORY_RANGE, /*    PNV_MEMORY_RANGE NvRanges  */
	SIZE_T,           /* in SIZE_T           NumRanges */
	DWORD,            /* in DWORD            Flags     */
], f => RtlFlushNonVolatileMemoryRanges = f);

export function RtlInitializeCorrelationVector () {};
RtlInitializeCorrelationVector = createAutoLoader(lib, "RtlInitializeCorrelationVector", DWORD /* DWORD */, [
	out(PCORRELATION_VECTOR), /* out    PCORRELATION_VECTOR CorrelationVector */
	int,                      /* in     int                 Version           */
	pointer(GUID),            /* in opt const GUID *        Guid              */
], f => RtlInitializeCorrelationVector = f);

export function RtlIncrementCorrelationVector () {};
RtlIncrementCorrelationVector = createAutoLoader(lib, "RtlIncrementCorrelationVector", DWORD /* DWORD */, [
	inout(PCORRELATION_VECTOR), /* in out PCORRELATION_VECTOR CorrelationVector */
], f => RtlIncrementCorrelationVector = f);

export function RtlExtendCorrelationVector () {};
RtlExtendCorrelationVector = createAutoLoader(lib, "RtlExtendCorrelationVector", DWORD /* DWORD */, [
	inout(PCORRELATION_VECTOR), /* in out PCORRELATION_VECTOR CorrelationVector */
], f => RtlExtendCorrelationVector = f);

export function RtlValidateCorrelationVector () {};
RtlValidateCorrelationVector = createAutoLoader(lib, "RtlValidateCorrelationVector", DWORD /* DWORD */, [
	PCORRELATION_VECTOR, /* in PCORRELATION_VECTOR Vector */
], f => RtlValidateCorrelationVector = f);

export function RtlRaiseCustomSystemEventTrigger () {};
RtlRaiseCustomSystemEventTrigger = createAutoLoader(lib, "RtlRaiseCustomSystemEventTrigger", DWORD /* DWORD */, [
	PCUSTOM_SYSTEM_EVENT_TRIGGER_CONFIG, /* in PCUSTOM_SYSTEM_EVENT_TRIGGER_CONFIG TriggerConfig */
], f => RtlRaiseCustomSystemEventTrigger = f);

export function RtlIsZeroMemory () {};
RtlIsZeroMemory = createAutoLoader(lib, "RtlIsZeroMemory", BOOLEAN /* BOOLEAN */, [
	PVOID,  /* in PVOID  Buffer */
	SIZE_T, /* in SIZE_T Length */
], f => RtlIsZeroMemory = f);

export function RtlNormalizeSecurityDescriptor () {};
RtlNormalizeSecurityDescriptor = createAutoLoader(lib, "RtlNormalizeSecurityDescriptor", BOOLEAN /* BOOLEAN */, [
	inout(pointer(PSECURITY_DESCRIPTOR)), /* in out  PSECURITY_DESCRIPTOR * SecurityDescriptor          */
	DWORD,                                /* in      DWORD                  SecurityDescriptorLength    */
	out(pointer(PSECURITY_DESCRIPTOR)),   /* out opt PSECURITY_DESCRIPTOR * NewSecurityDescriptor       */
	out(PDWORD),                          /* out opt PDWORD                 NewSecurityDescriptorLength */
	BOOLEAN,                              /* in      BOOLEAN                CheckOnly                   */
], f => RtlNormalizeSecurityDescriptor = f);

export function RtlGetDeviceFamilyInfoEnum () {};
RtlGetDeviceFamilyInfoEnum = createAutoLoader(lib, "RtlGetDeviceFamilyInfoEnum", VOID /* VOID */, [
	out(pointer(ULONGLONG)), /* out opt ULONGLONG * pullUAPInfo     */
	out(pointer(DWORD)),     /* out opt DWORD *     pulDeviceFamily */
	out(pointer(DWORD)),     /* out opt DWORD *     pulDeviceForm   */
], f => RtlGetDeviceFamilyInfoEnum = f);

export function RtlConvertDeviceFamilyInfoToString () {};
RtlConvertDeviceFamilyInfoToString = createAutoLoader(lib, "RtlConvertDeviceFamilyInfoToString", DWORD /* DWORD */, [
	inout(PDWORD), /* in out PDWORD pulDeviceFamilyBufferSize */
	inout(PDWORD), /* in out PDWORD pulDeviceFormBufferSize   */
	PWSTR,         /*        PWSTR  DeviceFamily              */
	PWSTR,         /*        PWSTR  DeviceForm                */
], f => RtlConvertDeviceFamilyInfoToString = f);

export function RtlSwitchedVVI () {};
RtlSwitchedVVI = createAutoLoader(lib, "RtlSwitchedVVI", DWORD /* DWORD */, [
	PRTL_OSVERSIONINFOEXW, /* in PRTL_OSVERSIONINFOEXW VersionInfo   */
	DWORD,                 /* in DWORD                 TypeMask      */
	ULONGLONG,             /* in ULONGLONG             ConditionMask */
], f => RtlSwitchedVVI = f);

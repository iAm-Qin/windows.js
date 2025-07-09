// basic
import {
	int, size_t,
} from "../../types.js";

// basetsd.h
import {
	DWORD64, PDWORD64,
	ULONG_PTR, PULONG_PTR,
	SIZE_T,
} from "../basetsd.h/basetsd.js";

// minwindef.h
import {
	DWORD, PDWORD,
	WORD,
	BYTE,
} from "../minwindef.h/minWindef.js";

// winnt.h
import {
	BOOLEAN,
	PVOID,
	PWSTR,
	LONGLONG, ULONGLONG,
	VOID,
} from "./winnt.js";
import {
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
	PNV_MEMORY_RANGE,
	PCORRELATION_VECTOR,
	PCUSTOM_SYSTEM_EVENT_TRIGGER_CONFIG,
	PRTL_OSVERSIONINFOEXW,
} from "./structs.js";


export function Int32x32To64 (a, b);
export function UInt32x32To64 (a, b);
export function Int64ShllMod32 (Value: ULONGLONG, ShiftCount: DWORD): ULONGLONG;
export function Int64ShraMod32 (Value: LONGLONG, ShiftCount: DWORD): LONGLONG;
export function Int64ShrlMod32 (Value: ULONGLONG, ShiftCount: DWORD): ULONGLONG;
export function RtlUnwind2 (TargetFrame: FRAME_POINTERS, TargetIp: PVOID, ExceptionRecord: PEXCEPTION_RECORD, ReturnValue: PVOID, ContextRecord: PCONTEXT): VOID;
export function RtlCaptureContext (ContextRecord: PCONTEXT): VOID;
export function RtlCaptureContext2 (ContextRecord: PCONTEXT): VOID;
export function RtlUnwind (TargetFrame: PVOID, TargetIp: PVOID, ExceptionRecord: PEXCEPTION_RECORD, ReturnValue: PVOID): VOID;
export function RtlAddGrowableFunctionTable (DynamicTable: "PVOID*", FunctionTable: PRUNTIME_FUNCTION, EntryCount: DWORD, MaximumEntryCount: DWORD, RangeBase: ULONG_PTR, RangeEnd: ULONG_PTR): DWORD;
export function RtlGrowFunctionTable (DynamicTable: PVOID, NewEntryCount: DWORD): VOID;
export function RtlDeleteGrowableFunctionTable (DynamicTable: PVOID): VOID;
export function RtlLookupFunctionEntry (ControlPc: DWORD64, ImageBase: PDWORD64, HistoryTable: PUNWIND_HISTORY_TABLE): PRUNTIME_FUNCTION;
export function RtlUnwindEx (TargetFrame: PVOID, TargetIp: PVOID, ExceptionRecord: PEXCEPTION_RECORD, ReturnValue: PVOID, ContextRecord: PCONTEXT, HistoryTable: PUNWIND_HISTORY_TABLE): VOID;
export function RtlVirtualUnwind (HandlerType: DWORD, ImageBase: DWORD64, ControlPc: DWORD64, FunctionEntry: PRUNTIME_FUNCTION, ContextRecord: PCONTEXT, HandlerData: "PVOID*", EstablisherFrame: PDWORD64, ContextPointers: PKNONVOLATILE_CONTEXT_POINTERS): PEXCEPTION_ROUTINE;
export function RtlAddGrowableFunctionTable (DynamicTable: "PVOID*", FunctionTable: PRUNTIME_FUNCTION, EntryCount: DWORD, MaximumEntryCount: DWORD, RangeBase: ULONG_PTR, RangeEnd: ULONG_PTR): DWORD;
export function RtlGrowFunctionTable (DynamicTable: PVOID, NewEntryCount: DWORD): VOID;
export function RtlDeleteGrowableFunctionTable (DynamicTable: PVOID): VOID;
export function RtlLookupFunctionEntry (ControlPc: ULONG_PTR, ImageBase: PDWORD, HistoryTable: PUNWIND_HISTORY_TABLE): PRUNTIME_FUNCTION;
export function RtlUnwindEx (TargetFrame: PVOID, TargetIp: PVOID, ExceptionRecord: PEXCEPTION_RECORD, ReturnValue: PVOID, ContextRecord: PCONTEXT, HistoryTable: PUNWIND_HISTORY_TABLE): VOID;
export function RtlVirtualUnwind (HandlerType: DWORD, ImageBase: DWORD, ControlPc: DWORD, FunctionEntry: PRUNTIME_FUNCTION, ContextRecord: PCONTEXT, HandlerData: "PVOID*", EstablisherFrame: PDWORD, ContextPointers: PKNONVOLATILE_CONTEXT_POINTERS): PEXCEPTION_ROUTINE;
export function RtlAddGrowableFunctionTable (DynamicTable: "PVOID*", FunctionTable: PRUNTIME_FUNCTION, EntryCount: DWORD, MaximumEntryCount: DWORD, RangeBase: ULONG_PTR, RangeEnd: ULONG_PTR): DWORD;
export function RtlGrowFunctionTable (DynamicTable: PVOID, NewEntryCount: DWORD): VOID;
export function RtlDeleteGrowableFunctionTable (DynamicTable: PVOID): VOID;
export function RtlLookupFunctionEntry (ControlPc: ULONG_PTR, ImageBase: PULONG_PTR, HistoryTable: PUNWIND_HISTORY_TABLE): PRUNTIME_FUNCTION;
export function RtlUnwindEx (TargetFrame: PVOID, TargetIp: PVOID, ExceptionRecord: PEXCEPTION_RECORD, ReturnValue: PVOID, ContextRecord: PCONTEXT, HistoryTable: PUNWIND_HISTORY_TABLE): VOID;
export function RtlVirtualUnwind (HandlerType: DWORD, ImageBase: ULONG_PTR, ControlPc: ULONG_PTR, FunctionEntry: PRUNTIME_FUNCTION, ContextRecord: PCONTEXT, HandlerData: "PVOID*", EstablisherFrame: PULONG_PTR, ContextPointers: PKNONVOLATILE_CONTEXT_POINTERS): PEXCEPTION_ROUTINE;
export function RtlUnwindEx (TargetFrame: PVOID, TargetIp: PVOID, ExceptionRecord: PEXCEPTION_RECORD, ReturnValue: PVOID, ContextRecord: PCONTEXT, HistoryTable: PVOID): VOID;
export function RtlLookupFunctionEntryCHPE (ControlPc: ULONG_PTR, ImageBase: PULONG_PTR, HistoryTable: PVOID): PIMAGE_ARM64_RUNTIME_FUNCTION_ENTRY;
export function RtlRaiseException (ExceptionRecord: PEXCEPTION_RECORD): VOID;
export function RtlPcToFileHeader (PcValue: PVOID, BaseOfImage: "PVOID*"): PVOID;
export function RtlCompareMemory (Source1: "VOID*", Source2: "VOID*", Length: SIZE_T): SIZE_T;
export function RtlInitializeSListHead (ListHead: PSLIST_HEADER): VOID;
export function RtlFirstEntrySList (ListHead: "SLIST_HEADER *"): PSLIST_ENTRY;
export function RtlInterlockedPopEntrySList (ListHead: PSLIST_HEADER): PSLIST_ENTRY;
export function RtlInterlockedPushEntrySList (ListHead: PSLIST_HEADER, ListEntry: PSLIST_ENTRY): PSLIST_ENTRY;
export function RtlInterlockedPushListSListEx (ListHead: PSLIST_HEADER, List: PSLIST_ENTRY, ListEnd: PSLIST_ENTRY, Count: DWORD): PSLIST_ENTRY;
export function RtlInterlockedFlushSList (ListHead: PSLIST_HEADER): PSLIST_ENTRY;
export function RtlQueryDepthSList (ListHead: PSLIST_HEADER): WORD;
export function RtlGetReturnAddressHijackTarget (): ULONG_PTR;
export function VerSetConditionMask (ConditionMask: ULONGLONG, TypeMask: DWORD, Condition: BYTE): ULONGLONG;
export function RtlGetProductInfo (OSMajorVersion: DWORD, OSMinorVersion: DWORD, SpMajorVersion: DWORD, SpMinorVersion: DWORD, ReturnedProductType: PDWORD): BOOLEAN;
export function RtlCrc32 (Buffer: "void *", Size: size_t, InitialCrc: DWORD): DWORD;
export function RtlCrc64 (Buffer: "void *", Size: size_t, InitialCrc: ULONGLONG): ULONGLONG;
export function RtlOsDeploymentState (Flags: DWORD): OS_DEPLOYEMENT_STATE_VALUES;
export function RtlGetNonVolatileToken (NvBuffer: PVOID, Size: SIZE_T, NvToken: "PVOID *"): DWORD;
export function RtlFreeNonVolatileToken (NvToken: PVOID): DWORD;
export function RtlFlushNonVolatileMemory (NvToken: PVOID, NvBuffer: PVOID, Size: SIZE_T, Flags: DWORD): DWORD;
export function RtlDrainNonVolatileFlush (NvToken: PVOID): DWORD;
export function RtlWriteNonVolatileMemory (NvToken: PVOID, NvDestination: "VOID UNALIGNED *", Source: "VOID UNALIGNED *", Size: SIZE_T, Flags: DWORD): DWORD;
export function RtlFillNonVolatileMemory (NvToken: PVOID, NvDestination: "VOID UNALIGNED *", Size: SIZE_T, Value: BYTE, Flags: DWORD): DWORD;
export function RtlFlushNonVolatileMemoryRanges (NvToken: PVOID, NvRanges: PNV_MEMORY_RANGE, NumRanges: SIZE_T, Flags: DWORD): DWORD;
export function RtlInitializeCorrelationVector (CorrelationVector: PCORRELATION_VECTOR, Version: int, Guid: "GUID *"): DWORD;
export function RtlIncrementCorrelationVector (CorrelationVector: PCORRELATION_VECTOR): DWORD;
export function RtlExtendCorrelationVector (CorrelationVector: PCORRELATION_VECTOR): DWORD;
export function RtlValidateCorrelationVector (Vector: PCORRELATION_VECTOR): DWORD;
export function RtlRaiseCustomSystemEventTrigger (TriggerConfig: PCUSTOM_SYSTEM_EVENT_TRIGGER_CONFIG): DWORD;
export function RtlIsZeroMemory (Buffer: PVOID, Length: SIZE_T): BOOLEAN;
export function RtlNormalizeSecurityDescriptor (SecurityDescriptor: "PSECURITY_DESCRIPTOR *", SecurityDescriptorLength: DWORD, NewSecurityDescriptor: "PSECURITY_DESCRIPTOR *", NewSecurityDescriptorLength: PDWORD, CheckOnly: BOOLEAN): BOOLEAN;
export function RtlGetDeviceFamilyInfoEnum (pullUAPInfo: "ULONGLONG *", pulDeviceFamily: "DWORD *", pulDeviceForm: "DWORD *"): VOID;
export function RtlConvertDeviceFamilyInfoToString (pulDeviceFamilyBufferSize: PDWORD, pulDeviceFormBufferSize: PDWORD, DeviceFamily: PWSTR, DeviceForm: PWSTR): DWORD;
export function RtlSwitchedVVI (VersionInfo: PRTL_OSVERSIONINFOEXW, TypeMask: DWORD, ConditionMask: ULONGLONG): DWORD;

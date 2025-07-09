import process from "process";

import koffi from "koffi";

// basic
import {isArch64} from "../../types.js";
import {array, struct, union, bitfield} from "../../types.js";
import {pointer, inout, sizeof} from "../../types.js";
import {int, uint, __int64, double, float} from "../../types.js";

// basetsd.h
import {
	LONG64, PLONG64,
	DWORD64, PDWORD64,
	INT8,
	INT16,
	INT32,
	INT64,
	UINT8,
	UINT16,
	UINT32,
	UINT64,
	ULONG_PTR,
	KAFFINITY,
	SIZE_T,
} from "../basetsd.h/basetsd.js";

// guiddef.h
import {
	CLSID,
	GUID,
} from "../guiddef.h/guiddef.js";

// minwindef.h
import {
	DWORD, PDWORD,
	WORD,
	BYTE, PBYTE,
} from "../minwindef.h/minWindef.js";

// winnt.h
import {
	ACCESS_REASON,
	BOOLEAN,
	CHAR,
	HANDLE,
	LONG,
	LONGLONG,
	PACCESS_MASK,
	PACCESS_TOKEN,
	PCLAIMS_BLOB,
	PCSTR,
	PCWSTR,
	PSECURITY_ATTRIBUTES_OPAQUE,
	PSECURITY_DESCRIPTOR,
	PSID,
	PULONGLONG,
	PVOID,
	PVOID64,
	PWSTR,
	SECURITY_CONTEXT_TRACKING_MODE,
	SECURITY_DESCRIPTOR_CONTROL,
	SHORT,
	SID_HASH_ENTRY,
	TP_VERSION,
	ULONGLONG,
	VOID,
	WCHAR,
} from "./winnt.js";
import {
	ANYSIZE_ARRAY,
	ARM64_MAX_BREAKPOINTS,
	ARM64_MAX_WATCHPOINTS,
	ARM_MAX_BREAKPOINTS,
	ARM_MAX_WATCHPOINTS,
	ENCLAVE_SHORT_ID_LENGTH,
	EXCEPTION_MAXIMUM_PARAMETERS,
	HIBERFILE_TYPE_MAX,
	IMAGE_ENCLAVE_LONG_ID_LENGTH, IMAGE_ENCLAVE_SHORT_ID_LENGTH,
	IMAGE_NUMBEROF_DIRECTORY_ENTRIES,
	IMAGE_SIZEOF_SHORT_NAME, IMAGE_SIZEOF_SYMBOL,
	MAXIMUM_SUPPORTED_EXTENSION,
	MAX_HW_COUNTERS,
	MEM_EXTENDED_PARAMETER_TYPE_BITS,
	NUM_DISCHARGE_POLICIES,
	POLICY_AUDIT_SUBCATEGORY_COUNT,
	POWER_SYSTEM_MAXIMUM,
	PROCESSOR_IDLESTATE_POLICY_COUNT,
	PROC_IDLE_BUCKET_COUNT, PROC_IDLE_BUCKET_COUNT_EX,
	RTL_CORRELATION_VECTOR_STRING_LENGTH,
	SECURITY_IMPERSONATION_LEVEL,
	SECURITY_MAX_SID_SIZE,
	SID_HASH_SIZE,
	SIZE_OF_80387_REGISTERS,
	TOKEN_SOURCE_LENGTH,
	UNWIND_HISTORY_TABLE_SIZE,
	WOW64_MAXIMUM_SUPPORTED_EXTENSION,
	WOW64_SIZE_OF_80387_REGISTERS,
} from "./winnt.js";
import {
	ACTCTX_COMPATIBILITY_ELEMENT_TYPE,
	ACTCTX_REQUESTED_RUN_LEVEL,
	DEVICE_POWER_STATE,
	HARDWARE_COUNTER_TYPE,
	IMAGE_POLICY_ENTRY_TYPE,
	IMAGE_POLICY_ID,
	JOBOBJECT_RATE_CONTROL_TOLERANCE,
	JOBOBJECT_RATE_CONTROL_TOLERANCE_INTERVAL,
	JOB_OBJECT_IO_RATE_CONTROL_FLAGS,
	JOB_OBJECT_NET_RATE_CONTROL_FLAGS,
	LOGICAL_PROCESSOR_RELATIONSHIP,
	POWER_ACTION,
	POWER_MONITOR_REQUEST_REASON,
	POWER_USER_PRESENCE_TYPE,
	PROCESSOR_CACHE_TYPE,
	SERVERSILO_STATE,
	SYSTEM_POWER_CONDITION,
	SYSTEM_POWER_STATE,
	SharedVirtualDiskHandleState,
	SharedVirtualDiskSupportType,
	TOKEN_TYPE,
	TP_CALLBACK_PRIORITY,
} from "./enums.js";
import {PTP_CLEANUP_GROUP_CANCEL_CALLBACK, PTP_SIMPLE_CALLBACK} from "./callbacks.js";
import {ACTIVATION_CONTEXT, PTP_CLEANUP_GROUP, PTP_POOL, UOW} from "./unknown.js";


// todo 本文件中有很多 alignment: 16 未实现

//region forward declarations

const _EXCEPTION_RECORD = koffi.opaque();
const _CONTEXT = koffi.opaque();
const __IMAGE_RUNTIME_FUNCTION_ENTRY = koffi.opaque();
const __IMAGE_ARM64_RUNTIME_FUNCTION_ENTRY = koffi.opaque();

//endregion

export const EXCEPTION_ROUTINE = pointer(koffi.proto("__stdcall", "EXCEPTION_ROUTINE", VOID /* VOID */, [
	inout(pointer(_EXCEPTION_RECORD)), /* in out struct _EXCEPTION_RECORD * ExceptionRecord   */
	pointer(PVOID),                    /* in     PVOID                      EstablisherFrame  */
	inout(pointer(_CONTEXT)),          /* in out struct _CONTEXT *          ContextRecord     */
	pointer(PVOID),                    /* in     PVOID                      DispatcherContext */
]));
export const PEXCEPTION_ROUTINE = pointer(EXCEPTION_ROUTINE);

export const RUNTIME_FUNCTION = __IMAGE_RUNTIME_FUNCTION_ENTRY;
export const PRUNTIME_FUNCTION = pointer(__IMAGE_RUNTIME_FUNCTION_ENTRY);

export const ARM64_RUNTIME_FUNCTION = __IMAGE_ARM64_RUNTIME_FUNCTION_ENTRY;
export const PARM64_RUNTIME_FUNCTION = pointer(__IMAGE_ARM64_RUNTIME_FUNCTION_ENTRY);

// @formatter: off

export const PROCESSOR_NUMBER = struct({
	Group    : WORD, // WORD
	Number   : BYTE, // BYTE
	Reserved : BYTE, // BYTE
});
export const PPROCESSOR_NUMBER = pointer(PROCESSOR_NUMBER);

export const GROUP_AFFINITY = struct({
	Mask     : KAFFINITY,      // KAFFINITY
	Group    : WORD,           // WORD
	Reserved : array(WORD, 3), // WORD
});
export const PGROUP_AFFINITY = pointer(GROUP_AFFINITY);

export const FLOAT128 = struct({
	LowPart  : __int64, // __int64
	HighPart : __int64, // __int64
});
export const PFLOAT128 = pointer(FLOAT128);

export const LARGE_INTEGER = union({
	s        : struct({
		LowPart  : DWORD, // DWORD
		HighPart : LONG,  // LONG
	}), // struct
	u        : struct({
		LowPart  : DWORD, // DWORD
		HighPart : LONG,  // LONG
	}), // struct
	QuadPart : LONGLONG, // LONGLONG
});

export const PLARGE_INTEGER = pointer(LARGE_INTEGER);

export const ULARGE_INTEGER = union({
	s        : struct({
		LowPart  : DWORD, // DWORD
		HighPart : DWORD, // DWORD
	}), // struct
	u        : struct({
		LowPart  : DWORD, // DWORD
		HighPart : DWORD, // DWORD
	}), // struct
	QuadPart : ULONGLONG, // ULONGLONG
});

export const PULARGE_INTEGER = pointer(ULARGE_INTEGER);

export const LUID = struct({
	LowPart  : DWORD, // DWORD
	HighPart : LONG,  // LONG
});
export const PLUID = pointer(LUID);

export const LIST_ENTRY = koffi.opaque();
struct(LIST_ENTRY, {
	Flink : pointer(LIST_ENTRY), // struct _LIST_ENTRY*
	Blink : pointer(LIST_ENTRY), // struct _LIST_ENTRY*
});

export const PLIST_ENTRY = pointer(LIST_ENTRY);
export const RESTRICTED_POINTER = pointer(LIST_ENTRY);

export const SINGLE_LIST_ENTRY = koffi.opaque();
struct(SINGLE_LIST_ENTRY, {
	Next : pointer(SINGLE_LIST_ENTRY), // struct _SINGLE_LIST_ENTRY*
});
export const PSINGLE_LIST_ENTRY = pointer(SINGLE_LIST_ENTRY);

export const LIST_ENTRY32 = struct({
	Flink : DWORD, // DWORD
	Blink : DWORD, // DWORD
});
export const PLIST_ENTRY32 = pointer(LIST_ENTRY32);

export const LIST_ENTRY64 = struct({
	Flink : ULONGLONG, // ULONGLONG
	Blink : ULONGLONG, // ULONGLONG
});
export const PLIST_ENTRY64 = pointer(LIST_ENTRY64);

export const OBJECTID = struct({
	Lineage    : GUID,  // GUID
	Uniquifier : DWORD, // DWORD
});

export const M128A = struct({
	Low  : ULONGLONG, // ULONGLONG
	High : LONGLONG,  // LONGLONG
});//{alignment: 16}
export const PM128A = pointer(M128A);

export const XSAVE_FORMAT = struct({
	ControlWord    : WORD,                             // WORD
	StatusWord     : WORD,                             // WORD
	TagWord        : BYTE,                             // BYTE
	Reserved1      : BYTE,                             // BYTE
	ErrorOpcode    : WORD,                             // WORD
	ErrorOffset    : DWORD,                            // DWORD
	ErrorSelector  : WORD,                             // WORD
	Reserved2      : WORD,                             // WORD
	DataOffset     : DWORD,                            // DWORD
	DataSelector   : WORD,                             // WORD
	Reserved3      : WORD,                             // WORD
	MxCsr          : DWORD,                            // DWORD
	MxCsr_Mask     : DWORD,                            // DWORD
	FloatRegisters : array(M128A, 8),                  // M128A
	XmmRegisters   : array(M128A, isArch64 ? 16 : 8),  // M128A
	Reserved4      : array(BYTE, isArch64 ? 96 : 224), // BYTE
});//{alignment: 16}

export const PXSAVE_FORMAT = pointer(XSAVE_FORMAT);

export const XSAVE_CET_U_FORMAT = struct({
	Ia32CetUMsr   : DWORD64, // DWORD64
	Ia32Pl3SspMsr : DWORD64, // DWORD64
});
export const PXSAVE_CET_U_FORMAT = pointer(XSAVE_CET_U_FORMAT);

export const XSAVE_AREA_HEADER = struct({
	Mask           : DWORD64,           // DWORD64
	CompactionMask : DWORD64,           // DWORD64
	Reserved2      : array(DWORD64, 6), // DWORD64
}/*, {alignment: 8}*/);
export const PXSAVE_AREA_HEADER = pointer(XSAVE_AREA_HEADER);

export const XSAVE_AREA = struct({
	LegacyState : XSAVE_FORMAT,      // XSAVE_FORMAT
	Header      : XSAVE_AREA_HEADER, // XSAVE_AREA_HEADER
});//{alignment: 16}
export const PXSAVE_AREA = pointer(XSAVE_AREA);

export const XSTATE_CONTEXT = struct({
	Mask      : DWORD64,     // DWORD64
	Length    : DWORD,       // DWORD
	Reserved1 : DWORD,       // DWORD
	Area      : PXSAVE_AREA, // PXSAVE_AREA
	Reserved2 : DWORD,       // DWORD // #if defined(_X86_)
	Buffer    : PVOID,       // PVOID
	Reserved3 : DWORD,       // DWORD // #if defined(_X86_)
});
export const PXSTATE_CONTEXT = pointer(XSTATE_CONTEXT);

export const SCOPE_TABLE_AMD64 = struct({
	Count       : DWORD,  // DWORD
	ScopeRecord : array(struct({
		BeginAddress   : DWORD, // DWORD
		EndAddress     : DWORD, // DWORD
		HandlerAddress : DWORD, // DWORD
		JumpTarget     : DWORD, // DWORD
	}), 1), // struct
});
export const PSCOPE_TABLE_AMD64 = pointer(SCOPE_TABLE_AMD64);


export const XMM_SAVE_AREA32 = XSAVE_FORMAT;
export const PXMM_SAVE_AREA32 = pointer(XSAVE_FORMAT);



//
// Scope table structure definition.
//

export const SCOPE_TABLE_ARM = struct({
	Count       : DWORD,  // DWORD
	ScopeRecord : array(struct({
		BeginAddress   : DWORD, // DWORD
		EndAddress     : DWORD, // DWORD
		HandlerAddress : DWORD, // DWORD
		JumpTarget     : DWORD, // DWORD
	}), 1), // struct
});
export const PSCOPE_TABLE_ARM = pointer(SCOPE_TABLE_ARM);

export const NEON128 = struct({
	Low  : ULONGLONG, // ULONGLONG
	High : LONGLONG,  // LONGLONG
});
export const PNEON128 = pointer(NEON128);

export const SCOPE_TABLE_ARM64 = struct({
	Count       : DWORD,  // DWORD
	ScopeRecord : array(struct({
		BeginAddress   : DWORD, // DWORD
		EndAddress     : DWORD, // DWORD
		HandlerAddress : DWORD, // DWORD
		JumpTarget     : DWORD, // DWORD
	}), 1), // struct
});
export const PSCOPE_TABLE_ARM64 = pointer(SCOPE_TABLE_ARM64);

export const SCOPE_TABLE =
"x64" === process.arch ?
SCOPE_TABLE_AMD64
:
"arm" === process.arch ?
SCOPE_TABLE_ARM
:
"arm64" === process.arch ?
SCOPE_TABLE_ARM64
:
"ia32" === process.arch ?
koffi.types.void
:
null
;
export const PSCOPE_TABLE = pointer(SCOPE_TABLE);

export const ARM64_NT_NEON128 = union({
	s : struct({
		Low  : ULONGLONG, // ULONGLONG
		High : LONGLONG,  // LONGLONG
	}), // struct
	D : array(double, 2), // double
	S : array(float, 4),  // float
	H : array(WORD, 8),   // WORD
	B : array(BYTE, 16),  // BYTE
});
export const PARM64_NT_NEON128 = pointer(ARM64_NT_NEON128);


export const ARM64_NT_CONTEXT = struct({
	ContextFlags : DWORD,                                     // DWORD
	Cpsr         : DWORD,                                     // DWORD            // NZVF + DAIF + CurrentEL + SPSel
	u            : union({
		s : struct({
			X0  : DWORD64, // DWORD64
			X1  : DWORD64, // DWORD64
			X2  : DWORD64, // DWORD64
			X3  : DWORD64, // DWORD64
			X4  : DWORD64, // DWORD64
			X5  : DWORD64, // DWORD64
			X6  : DWORD64, // DWORD64
			X7  : DWORD64, // DWORD64
			X8  : DWORD64, // DWORD64
			X9  : DWORD64, // DWORD64
			X10 : DWORD64, // DWORD64
			X11 : DWORD64, // DWORD64
			X12 : DWORD64, // DWORD64
			X13 : DWORD64, // DWORD64
			X14 : DWORD64, // DWORD64
			X15 : DWORD64, // DWORD64
			X16 : DWORD64, // DWORD64
			X17 : DWORD64, // DWORD64
			X18 : DWORD64, // DWORD64
			X19 : DWORD64, // DWORD64
			X20 : DWORD64, // DWORD64
			X21 : DWORD64, // DWORD64
			X22 : DWORD64, // DWORD64
			X23 : DWORD64, // DWORD64
			X24 : DWORD64, // DWORD64
			X25 : DWORD64, // DWORD64
			X26 : DWORD64, // DWORD64
			X27 : DWORD64, // DWORD64
			X28 : DWORD64, // DWORD64
			Fp  : DWORD64, // DWORD64
			Lr  : DWORD64, // DWORD64
		}), // struct
		X : array(DWORD64, 31), // DWORD64
	}), // union
	Sp           : DWORD64,                                   // DWORD64
	Pc           : DWORD64,                                   // DWORD64
	V            : array(ARM64_NT_NEON128, 32),           // ARM64_NT_NEON128
	Fpcr         : DWORD,                                     // DWORD
	Fpsr         : DWORD,                                     // DWORD
	Bcr          : array(DWORD, ARM64_MAX_BREAKPOINTS),   // DWORD
	Bvr          : array(DWORD64, ARM64_MAX_BREAKPOINTS), // DWORD64
	Wcr          : array(DWORD, ARM64_MAX_WATCHPOINTS),   // DWORD
	Wvr          : array(DWORD64, ARM64_MAX_WATCHPOINTS), // DWORD64
}/*, {alignment: 16}*/);
export const PARM64_NT_CONTEXT = pointer(ARM64_NT_CONTEXT);

export const FLOATING_SAVE_AREA = struct({
	ControlWord   : DWORD,                                    // DWORD
	StatusWord    : DWORD,                                    // DWORD
	TagWord       : DWORD,                                    // DWORD
	ErrorOffset   : DWORD,                                    // DWORD
	ErrorSelector : DWORD,                                    // DWORD
	DataOffset    : DWORD,                                    // DWORD
	DataSelector  : DWORD,                                    // DWORD
	RegisterArea  : array(BYTE, SIZE_OF_80387_REGISTERS), // BYTE
	Spare0        : DWORD,                                    // DWORD
});

export const CONTEXT =
"x64" === process.arch ?
struct(_CONTEXT, {
	P1Home               : DWORD64,                   // DWORD64
	P2Home               : DWORD64,                   // DWORD64
	P3Home               : DWORD64,                   // DWORD64
	P4Home               : DWORD64,                   // DWORD64
	P5Home               : DWORD64,                   // DWORD64
	P6Home               : DWORD64,                   // DWORD64
	ContextFlags         : DWORD,                     // DWORD
	MxCsr                : DWORD,                     // DWORD
	SegCs                : WORD,                      // WORD
	SegDs                : WORD,                      // WORD
	SegEs                : WORD,                      // WORD
	SegFs                : WORD,                      // WORD
	SegGs                : WORD,                      // WORD
	SegSs                : WORD,                      // WORD
	EFlags               : DWORD,                     // DWORD
	Dr0                  : DWORD64,                   // DWORD64
	Dr1                  : DWORD64,                   // DWORD64
	Dr2                  : DWORD64,                   // DWORD64
	Dr3                  : DWORD64,                   // DWORD64
	Dr6                  : DWORD64,                   // DWORD64
	Dr7                  : DWORD64,                   // DWORD64
	Rax                  : DWORD64,                   // DWORD64
	Rcx                  : DWORD64,                   // DWORD64
	Rdx                  : DWORD64,                   // DWORD64
	Rbx                  : DWORD64,                   // DWORD64
	Rsp                  : DWORD64,                   // DWORD64
	Rbp                  : DWORD64,                   // DWORD64
	Rsi                  : DWORD64,                   // DWORD64
	Rdi                  : DWORD64,                   // DWORD64
	R8                   : DWORD64,                   // DWORD64
	R9                   : DWORD64,                   // DWORD64
	R10                  : DWORD64,                   // DWORD64
	R11                  : DWORD64,                   // DWORD64
	R12                  : DWORD64,                   // DWORD64
	R13                  : DWORD64,                   // DWORD64
	R14                  : DWORD64,                   // DWORD64
	R15                  : DWORD64,                   // DWORD64
	Rip                  : DWORD64,                   // DWORD64
	u                    : union({
		FltSave : XMM_SAVE_AREA32, // XMM_SAVE_AREA32
		s       : struct({
			Header : array(M128A, 2, "Array"), // M128A
			Legacy : array(M128A, 8, "Array"), // M128A
			Xmm0   : M128A,                    // M128A
			Xmm1   : M128A,                    // M128A
			Xmm2   : M128A,                    // M128A
			Xmm3   : M128A,                    // M128A
			Xmm4   : M128A,                    // M128A
			Xmm5   : M128A,                    // M128A
			Xmm6   : M128A,                    // M128A
			Xmm7   : M128A,                    // M128A
			Xmm8   : M128A,                    // M128A
			Xmm9   : M128A,                    // M128A
			Xmm10  : M128A,                    // M128A
			Xmm11  : M128A,                    // M128A
			Xmm12  : M128A,                    // M128A
			Xmm13  : M128A,                    // M128A
			Xmm14  : M128A,                    // M128A
			Xmm15  : M128A,                    // M128A
		}), // struct
	}), // union
	VectorRegister       : array(M128A, 26, "Array"), // M128A
	VectorControl        : DWORD64,                   // DWORD64
	DebugControl         : DWORD64,                   // DWORD64
	LastBranchToRip      : DWORD64,                   // DWORD64
	LastBranchFromRip    : DWORD64,                   // DWORD64
	LastExceptionToRip   : DWORD64,                   // DWORD64
	LastExceptionFromRip : DWORD64,                   // DWORD64
}/*, {alignment: 16}*/)
:
"arm" === process.arch ?
struct(_CONTEXT, {
	ContextFlags : DWORD,                             // DWORD
	R0           : DWORD,                             // DWORD
	R1           : DWORD,                             // DWORD
	R2           : DWORD,                             // DWORD
	R3           : DWORD,                             // DWORD
	R4           : DWORD,                             // DWORD
	R5           : DWORD,                             // DWORD
	R6           : DWORD,                             // DWORD
	R7           : DWORD,                             // DWORD
	R8           : DWORD,                             // DWORD
	R9           : DWORD,                             // DWORD
	R10          : DWORD,                             // DWORD
	R11          : DWORD,                             // DWORD
	R12          : DWORD,                             // DWORD
	Sp           : DWORD,                             // DWORD
	Lr           : DWORD,                             // DWORD
	Pc           : DWORD,                             // DWORD
	Cpsr         : DWORD,                             // DWORD
	Fpscr        : DWORD,                             // DWORD
	Padding      : DWORD,                             // DWORD
	u            : union({
		Q : array(NEON128, 16),   // NEON128
		D : array(ULONGLONG, 32), // ULONGLONG
		S : array(DWORD, 32),     // DWORD
	}), // union
	Bvr          : array(DWORD, ARM_MAX_BREAKPOINTS), // DWORD
	Bcr          : array(DWORD, ARM_MAX_BREAKPOINTS), // DWORD
	Wvr          : array(DWORD, ARM_MAX_WATCHPOINTS), // DWORD
	Wcr          : array(DWORD, ARM_MAX_WATCHPOINTS), // DWORD
	Padding2     : array(DWORD, 2),                   // DWORD
}/*, {alignment: 8}*/)
:
"arm64" === process.arch ?
ARM64_NT_CONTEXT
:
"ia32" === process.arch ?
struct({
	ContextFlags      : DWORD,                                    // DWORD
	Dr0               : DWORD,                                    // DWORD
	Dr1               : DWORD,                                    // DWORD
	Dr2               : DWORD,                                    // DWORD
	Dr3               : DWORD,                                    // DWORD
	Dr6               : DWORD,                                    // DWORD
	Dr7               : DWORD,                                    // DWORD
	FloatSave         : FLOATING_SAVE_AREA,                       // FLOATING_SAVE_AREA
	SegGs             : DWORD,                                    // DWORD
	SegFs             : DWORD,                                    // DWORD
	SegEs             : DWORD,                                    // DWORD
	SegDs             : DWORD,                                    // DWORD
	Edi               : DWORD,                                    // DWORD
	Esi               : DWORD,                                    // DWORD
	Ebx               : DWORD,                                    // DWORD
	Edx               : DWORD,                                    // DWORD
	Ecx               : DWORD,                                    // DWORD
	Eax               : DWORD,                                    // DWORD
	Ebp               : DWORD,                                    // DWORD
	Eip               : DWORD,                                    // DWORD
	SegCs             : DWORD,                                    // DWORD              // MUST BE SANITIZED
	EFlags            : DWORD,                                    // DWORD              // MUST BE SANITIZED
	Esp               : DWORD,                                    // DWORD
	SegSs             : DWORD,                                    // DWORD
	ExtendedRegisters : array(BYTE, MAXIMUM_SUPPORTED_EXTENSION), // BYTE
})
:
null
;
export const PCONTEXT = pointer(CONTEXT);

export const UNWIND_HISTORY_TABLE_ENTRY =
"x64" === process.arch ?
struct({
	ImageBase     : DWORD64,           // DWORD64
	FunctionEntry : PRUNTIME_FUNCTION, // PRUNTIME_FUNCTION
})
:
"arm" === process.arch ?
struct({
	ImageBase     : DWORD,             // DWORD
	FunctionEntry : PRUNTIME_FUNCTION, // PRUNTIME_FUNCTION
})
:
"arm64" === process.arch ?
struct({
	ImageBase     : DWORD64,                 // DWORD64
	FunctionEntry : PARM64_RUNTIME_FUNCTION, // PARM64_RUNTIME_FUNCTION
})
:
"ia32" === process.arch ?
koffi.types.void
:
null
;
export const PUNWIND_HISTORY_TABLE_ENTRY = pointer(UNWIND_HISTORY_TABLE_ENTRY);

export const UNWIND_HISTORY_TABLE =
"x64" === process.arch ?
struct({
	Count       : DWORD,                                                            // DWORD
	LocalHint   : BYTE,                                                             // BYTE
	GlobalHint  : BYTE,                                                             // BYTE
	Search      : BYTE,                                                             // BYTE
	Once        : BYTE,                                                             // BYTE
	LowAddress  : DWORD64,                                                          // DWORD64
	HighAddress : DWORD64,                                                          // DWORD64
	Entry       : array(UNWIND_HISTORY_TABLE_ENTRY, UNWIND_HISTORY_TABLE_SIZE), // UNWIND_HISTORY_TABLE_ENTRY
})
:
"arm" === process.arch ?
struct({
	Count       : DWORD,                                                        // DWORD
	LocalHint   : BYTE,                                                         // BYTE
	GlobalHint  : BYTE,                                                         // BYTE
	Search      : BYTE,                                                         // BYTE
	Once        : BYTE,                                                         // BYTE
	LowAddress  : DWORD,                                                        // DWORD
	HighAddress : DWORD,                                                        // DWORD
	Entry       : array(UNWIND_HISTORY_TABLE_ENTRY, UNWIND_HISTORY_TABLE_SIZE), // UNWIND_HISTORY_TABLE_ENTRY
})
:
"arm64" === process.arch ?
struct({
	Count       : DWORD,                                                        // DWORD
	LocalHint   : BYTE,                                                         // BYTE
	GlobalHint  : BYTE,                                                         // BYTE
	Search      : BYTE,                                                         // BYTE
	Once        : BYTE,                                                         // BYTE
	LowAddress  : DWORD64,                                                      // DWORD64
	HighAddress : DWORD64,                                                      // DWORD64
	Entry       : array(UNWIND_HISTORY_TABLE_ENTRY, UNWIND_HISTORY_TABLE_SIZE), // UNWIND_HISTORY_TABLE_ENTRY
})
:
"ia32" === process.arch ?
koffi.types.void
:
null
;
export const PUNWIND_HISTORY_TABLE = pointer(UNWIND_HISTORY_TABLE);

export const DISPATCHER_CONTEXT_ARM64 = struct({
	ControlPc            : ULONG_PTR,               // ULONG_PTR
	ImageBase            : ULONG_PTR,               // ULONG_PTR
	FunctionEntry        : PARM64_RUNTIME_FUNCTION, // PARM64_RUNTIME_FUNCTION
	EstablisherFrame     : ULONG_PTR,               // ULONG_PTR
	TargetPc             : ULONG_PTR,               // ULONG_PTR
	ContextRecord        : PARM64_NT_CONTEXT,       // PARM64_NT_CONTEXT
	LanguageHandler      : PEXCEPTION_ROUTINE,      // PEXCEPTION_ROUTINE
	HandlerData          : PVOID,                   // PVOID
	HistoryTable         : PUNWIND_HISTORY_TABLE,   // PUNWIND_HISTORY_TABLE
	ScopeIndex           : DWORD,                   // DWORD
	ControlPcIsUnwound   : BOOLEAN,                 // BOOLEAN
	NonVolatileRegisters : PBYTE,                   // PBYTE
});
export const PDISPATCHER_CONTEXT_ARM64 = pointer(DISPATCHER_CONTEXT_ARM64);

export const DISPATCHER_CONTEXT =
"x64" === process.arch ?
struct({
	ControlPc        : DWORD64,               // DWORD64
	ImageBase        : DWORD64,               // DWORD64
	FunctionEntry    : PRUNTIME_FUNCTION,     // PRUNTIME_FUNCTION
	EstablisherFrame : DWORD64,               // DWORD64
	TargetIp         : DWORD64,               // DWORD64
	ContextRecord    : PCONTEXT,              // PCONTEXT
	LanguageHandler  : PEXCEPTION_ROUTINE,    // PEXCEPTION_ROUTINE
	HandlerData      : PVOID,                 // PVOID
	HistoryTable     : PUNWIND_HISTORY_TABLE, // PUNWIND_HISTORY_TABLE
	ScopeIndex       : DWORD,                 // DWORD
	Fill0            : DWORD,                 // DWORD
})
:
"arm" === process.arch ?
struct({
	ControlPc            : DWORD,                 // DWORD
	ImageBase            : DWORD,                 // DWORD
	FunctionEntry        : PRUNTIME_FUNCTION,     // PRUNTIME_FUNCTION
	EstablisherFrame     : DWORD,                 // DWORD
	TargetPc             : DWORD,                 // DWORD
	ContextRecord        : PCONTEXT,              // PCONTEXT
	LanguageHandler      : PEXCEPTION_ROUTINE,    // PEXCEPTION_ROUTINE
	HandlerData          : PVOID,                 // PVOID
	HistoryTable         : PUNWIND_HISTORY_TABLE, // PUNWIND_HISTORY_TABLE
	ScopeIndex           : DWORD,                 // DWORD
	ControlPcIsUnwound   : BOOLEAN,               // BOOLEAN
	NonVolatileRegisters : PBYTE,                 // PBYTE
	Reserved             : DWORD,                 // DWORD
})
:
"arm64" === process.arch ?
DISPATCHER_CONTEXT_ARM64
:
"ia32" === process.arch ?
koffi.types.void
:
null
;
export const PDISPATCHER_CONTEXT = pointer(DISPATCHER_CONTEXT);

//
// Define exception filter and termination handler function types.
//
const EXCEPTION_POINTERS = koffi.opaque();	// 前向引用声明

export const PEXCEPTION_FILTER = koffi.proto("__stdcall", "PEXCEPTION_FILTER", LONG /* LONG */, [
	pointer(EXCEPTION_POINTERS), /*  struct _EXCEPTION_POINTERS * ExceptionPointers */
	"x64" === process.arch ?   //#ifdef _AMD64_
	PVOID                              /*  PVOID                        EstablisherFrame  */
	:
	"arm" === process.arch ?   //#ifdef _ARM_
	DWORD                              /*  DWORD                        EstablisherFrame  */
	:
	"arm64" === process.arch ? //#if defined(_ARM64_) || defined(_CHPE_X86_ARM64_)
	DWORD64                            /*  DWORD64                      EstablisherFrame  */
	:
	DWORD
]);

export const PTERMINATION_HANDLER = koffi.proto("__stdcall", "PTERMINATION_HANDLER", VOID /* VOID */, [
	BOOLEAN, /*  BOOLEAN AbnormalTermination */
	"x64" === process.arch ?
	PVOID    /*  PVOID   EstablisherFrame    */
	:
	"arm" === process.arch ?
	DWORD    /*  DWORD   EstablisherFrame    */
	:
	"arm64" === process.arch ?
	DWORD64  /*  DWORD64 EstablisherFrame    */
	:
	DWORD
]);

export const LDT_ENTRY = struct({
	LimitLow : WORD,  // WORD
	BaseLow  : WORD,  // WORD
	HighWord : union({
		Bytes : struct({
			BaseMid : BYTE, // BYTE
			Flags1  : BYTE, // BYTE // Declare as bytes to avoid alignment
			Flags2  : BYTE, // BYTE // Problems.
			BaseHi  : BYTE, // BYTE
		}), // struct
		Bits  : struct({
			BaseMid     : bitfield(DWORD, 8), // DWORD
			Type        : bitfield(DWORD, 5), // DWORD
			Dpl         : bitfield(DWORD, 2), // DWORD
			Pres        : bitfield(DWORD, 1), // DWORD
			LimitHi     : bitfield(DWORD, 4), // DWORD
			Sys         : bitfield(DWORD, 1), // DWORD
			Reserved_0  : bitfield(DWORD, 1), // DWORD
			Default_Big : bitfield(DWORD, 1), // DWORD
			Granularity : bitfield(DWORD, 1), // DWORD
			BaseHi      : bitfield(DWORD, 8), // DWORD
		}), // struct
	}), // union
});
export const PLDT_ENTRY = pointer(LDT_ENTRY);


export const KNONVOLATILE_CONTEXT_POINTERS_ARM64 = struct({
	X19 : PDWORD64, // PDWORD64
	X20 : PDWORD64, // PDWORD64
	X21 : PDWORD64, // PDWORD64
	X22 : PDWORD64, // PDWORD64
	X23 : PDWORD64, // PDWORD64
	X24 : PDWORD64, // PDWORD64
	X25 : PDWORD64, // PDWORD64
	X26 : PDWORD64, // PDWORD64
	X27 : PDWORD64, // PDWORD64
	X28 : PDWORD64, // PDWORD64
	Fp  : PDWORD64, // PDWORD64
	Lr  : PDWORD64, // PDWORD64
	D8  : PDWORD64, // PDWORD64
	D9  : PDWORD64, // PDWORD64
	D10 : PDWORD64, // PDWORD64
	D11 : PDWORD64, // PDWORD64
	D12 : PDWORD64, // PDWORD64
	D13 : PDWORD64, // PDWORD64
	D14 : PDWORD64, // PDWORD64
	D15 : PDWORD64, // PDWORD64
});
export const PKNONVOLATILE_CONTEXT_POINTERS_ARM64 = pointer(KNONVOLATILE_CONTEXT_POINTERS_ARM64);

export const KNONVOLATILE_CONTEXT_POINTERS =
"x64" === process.arch ?
struct({
	u  : union({
		FloatingContext : array(PM128A, 16), // PM128A
		s               : struct({
			Xmm0  : PM128A, // PM128A
			Xmm1  : PM128A, // PM128A
			Xmm2  : PM128A, // PM128A
			Xmm3  : PM128A, // PM128A
			Xmm4  : PM128A, // PM128A
			Xmm5  : PM128A, // PM128A
			Xmm6  : PM128A, // PM128A
			Xmm7  : PM128A, // PM128A
			Xmm8  : PM128A, // PM128A
			Xmm9  : PM128A, // PM128A
			Xmm10 : PM128A, // PM128A
			Xmm11 : PM128A, // PM128A
			Xmm12 : PM128A, // PM128A
			Xmm13 : PM128A, // PM128A
			Xmm14 : PM128A, // PM128A
			Xmm15 : PM128A, // PM128A
		}), // struct
	}), // union
	u2 : union({
		IntegerContext : array(PDWORD64, 16), // PDWORD64
		s              : struct({
			Rax : PDWORD64, // PDWORD64
			Rcx : PDWORD64, // PDWORD64
			Rdx : PDWORD64, // PDWORD64
			Rbx : PDWORD64, // PDWORD64
			Rsp : PDWORD64, // PDWORD64
			Rbp : PDWORD64, // PDWORD64
			Rsi : PDWORD64, // PDWORD64
			Rdi : PDWORD64, // PDWORD64
			R8  : PDWORD64, // PDWORD64
			R9  : PDWORD64, // PDWORD64
			R10 : PDWORD64, // PDWORD64
			R11 : PDWORD64, // PDWORD64
			R12 : PDWORD64, // PDWORD64
			R13 : PDWORD64, // PDWORD64
			R14 : PDWORD64, // PDWORD64
			R15 : PDWORD64, // PDWORD64
		}), // struct
	}), // union
})
:
"arm" === process.arch ?
struct({
	R4  : PDWORD,     // PDWORD
	R5  : PDWORD,     // PDWORD
	R6  : PDWORD,     // PDWORD
	R7  : PDWORD,     // PDWORD
	R8  : PDWORD,     // PDWORD
	R9  : PDWORD,     // PDWORD
	R10 : PDWORD,     // PDWORD
	R11 : PDWORD,     // PDWORD
	Lr  : PDWORD,     // PDWORD
	D8  : PULONGLONG, // PULONGLONG
	D9  : PULONGLONG, // PULONGLONG
	D10 : PULONGLONG, // PULONGLONG
	D11 : PULONGLONG, // PULONGLONG
	D12 : PULONGLONG, // PULONGLONG
	D13 : PULONGLONG, // PULONGLONG
	D14 : PULONGLONG, // PULONGLONG
	D15 : PULONGLONG, // PULONGLONG
})
:
"arm64" === process.arch ?
KNONVOLATILE_CONTEXT_POINTERS_ARM64
:
"ia32" === process.arch ?
struct({
	Dummy : DWORD, // DWORD
})
:
null
;
export const PKNONVOLATILE_CONTEXT_POINTERS = pointer(KNONVOLATILE_CONTEXT_POINTERS);



export const WOW64_FLOATING_SAVE_AREA = struct({
	ControlWord   : DWORD,                                      // DWORD
	StatusWord    : DWORD,                                      // DWORD
	TagWord       : DWORD,                                      // DWORD
	ErrorOffset   : DWORD,                                      // DWORD
	ErrorSelector : DWORD,                                      // DWORD
	DataOffset    : DWORD,                                      // DWORD
	DataSelector  : DWORD,                                      // DWORD
	RegisterArea  : array(BYTE, WOW64_SIZE_OF_80387_REGISTERS), // BYTE
	Cr0NpxState   : DWORD,                                      // DWORD
});

export const WOW64_CONTEXT = struct({
	ContextFlags      : DWORD,                                          // DWORD
	Dr0               : DWORD,                                          // DWORD
	Dr1               : DWORD,                                          // DWORD
	Dr2               : DWORD,                                          // DWORD
	Dr3               : DWORD,                                          // DWORD
	Dr6               : DWORD,                                          // DWORD
	Dr7               : DWORD,                                          // DWORD
	FloatSave         : WOW64_FLOATING_SAVE_AREA,                       // WOW64_FLOATING_SAVE_AREA
	SegGs             : DWORD,                                          // DWORD
	SegFs             : DWORD,                                          // DWORD
	SegEs             : DWORD,                                          // DWORD
	SegDs             : DWORD,                                          // DWORD
	Edi               : DWORD,                                          // DWORD
	Esi               : DWORD,                                          // DWORD
	Ebx               : DWORD,                                          // DWORD
	Edx               : DWORD,                                          // DWORD
	Ecx               : DWORD,                                          // DWORD
	Eax               : DWORD,                                          // DWORD
	Ebp               : DWORD,                                          // DWORD
	Eip               : DWORD,                                          // DWORD
	SegCs             : DWORD,                                          // DWORD                    // MUST BE SANITIZED
	EFlags            : DWORD,                                          // DWORD                    // MUST BE SANITIZED
	Esp               : DWORD,                                          // DWORD
	SegSs             : DWORD,                                          // DWORD
	ExtendedRegisters : array(BYTE, WOW64_MAXIMUM_SUPPORTED_EXTENSION), // BYTE
});
export const PWOW64_CONTEXT = pointer(WOW64_CONTEXT);

export const WOW64_LDT_ENTRY = struct({
	LimitLow : WORD,  // WORD
	BaseLow  : WORD,  // WORD
	HighWord : union({
		Bytes : struct({
			BaseMid : BYTE, // BYTE
			Flags1  : BYTE, // BYTE // Declare as bytes to avoid alignment
			Flags2  : BYTE, // BYTE // Problems.
			BaseHi  : BYTE, // BYTE
		}), // struct
		Bits  : struct({
			BaseMid     : bitfield(DWORD, 8), // DWORD
			Type        : bitfield(DWORD, 5), // DWORD
			Dpl         : bitfield(DWORD, 2), // DWORD
			Pres        : bitfield(DWORD, 1), // DWORD
			LimitHi     : bitfield(DWORD, 4), // DWORD
			Sys         : bitfield(DWORD, 1), // DWORD
			Reserved_0  : bitfield(DWORD, 1), // DWORD
			Default_Big : bitfield(DWORD, 1), // DWORD
			Granularity : bitfield(DWORD, 1), // DWORD
			BaseHi      : bitfield(DWORD, 8), // DWORD
		}), // struct
	}), // union
});
export const PWOW64_LDT_ENTRY = pointer(WOW64_LDT_ENTRY);

export const WOW64_DESCRIPTOR_TABLE_ENTRY = struct({
	Selector   : DWORD,           // DWORD
	Descriptor : WOW64_LDT_ENTRY, // WOW64_LDT_ENTRY
});
export const PWOW64_DESCRIPTOR_TABLE_ENTRY = pointer(WOW64_DESCRIPTOR_TABLE_ENTRY);

export const EXCEPTION_RECORD = struct(_EXCEPTION_RECORD, {
	ExceptionCode        : DWORD,                                           // DWORD
	ExceptionFlags       : DWORD,                                           // DWORD
	ExceptionRecord      : pointer(_EXCEPTION_RECORD),                      // struct _EXCEPTION_RECORD*
	ExceptionAddress     : PVOID,                                           // PVOID
	NumberParameters     : DWORD,                                           // DWORD
	ExceptionInformation : array(ULONG_PTR, EXCEPTION_MAXIMUM_PARAMETERS),  // ULONG_PTR
});
export const PEXCEPTION_RECORD = pointer(EXCEPTION_RECORD);

export const EXCEPTION_RECORD32 = struct({
	ExceptionCode        : DWORD,                                      // DWORD
	ExceptionFlags       : DWORD,                                      // DWORD
	ExceptionRecord      : DWORD,                                      // DWORD
	ExceptionAddress     : DWORD,                                      // DWORD
	NumberParameters     : DWORD,                                      // DWORD
	ExceptionInformation : array(DWORD, EXCEPTION_MAXIMUM_PARAMETERS), // DWORD
});
export const PEXCEPTION_RECORD32 = pointer(EXCEPTION_RECORD32);

export const EXCEPTION_RECORD64 = struct({
	ExceptionCode        : DWORD,                                        // DWORD
	ExceptionFlags       : DWORD,                                        // DWORD
	ExceptionRecord      : DWORD64,                                      // DWORD64
	ExceptionAddress     : DWORD64,                                      // DWORD64
	NumberParameters     : DWORD,                                        // DWORD
	__unusedAlignment    : DWORD,                                        // DWORD
	ExceptionInformation : array(DWORD64, EXCEPTION_MAXIMUM_PARAMETERS), // DWORD64
});
export const PEXCEPTION_RECORD64 = pointer(EXCEPTION_RECORD64);

export {EXCEPTION_POINTERS};
struct(EXCEPTION_POINTERS, {
	ExceptionRecord : PEXCEPTION_RECORD, // PEXCEPTION_RECORD
	ContextRecord   : PCONTEXT,          // PCONTEXT
});
export const PEXCEPTION_POINTERS = pointer(EXCEPTION_POINTERS);

export const ACCESS_MASK = struct({
	SpecificRights  : WORD,              // WORD
	StandardRights  : BYTE,              // BYTE
	AccessSystemAcl : bitfield(BYTE, 1), // BYTE
	Reserved        : bitfield(BYTE, 3), // BYTE
	GenericAll      : bitfield(BYTE, 1), // BYTE
	GenericExecute  : bitfield(BYTE, 1), // BYTE
	GenericWrite    : bitfield(BYTE, 1), // BYTE
	GenericRead     : bitfield(BYTE, 1), // BYTE
});

export const GENERIC_MAPPING = struct({
	GenericRead    : ACCESS_MASK, // ACCESS_MASK
	GenericWrite   : ACCESS_MASK, // ACCESS_MASK
	GenericExecute : ACCESS_MASK, // ACCESS_MASK
	GenericAll     : ACCESS_MASK, // ACCESS_MASK
});
export const PGENERIC_MAPPING = pointer(GENERIC_MAPPING);

export const LUID_AND_ATTRIBUTES = struct({
	Luid       : LUID,  // LUID
	Attributes : DWORD, // DWORD
});
export const PLUID_AND_ATTRIBUTES = pointer(LUID_AND_ATTRIBUTES);
export const LUID_AND_ATTRIBUTES_ARRAY = array(LUID_AND_ATTRIBUTES, ANYSIZE_ARRAY);
export const PLUID_AND_ATTRIBUTES_ARRAY = pointer(LUID_AND_ATTRIBUTES_ARRAY);

export const SID_IDENTIFIER_AUTHORITY = struct({
	Value : array(BYTE, 6), // BYTE
});
export const PSID_IDENTIFIER_AUTHORITY = pointer(SID_IDENTIFIER_AUTHORITY);

export const SID = struct({
	Revision            : BYTE,                        // BYTE
	SubAuthorityCount   : BYTE,                        // BYTE
	IdentifierAuthority : SID_IDENTIFIER_AUTHORITY,    // SID_IDENTIFIER_AUTHORITY
	SubAuthority        : array(DWORD, ANYSIZE_ARRAY), // DWORD
});
export const PISID = pointer(SID);

export const SE_SID = union({
	Sid    : SID,                                // SID
	Buffer : array(BYTE, SECURITY_MAX_SID_SIZE), // BYTE
});
export const PSE_SID = pointer(SE_SID);

export const SID_AND_ATTRIBUTES = struct({
	Sid        : PISID, // PISID
	// Sid        : PSID,  // PSID
	Attributes : DWORD, // DWORD
});
export const PSID_AND_ATTRIBUTES = pointer(SID_AND_ATTRIBUTES);
export const SID_AND_ATTRIBUTES_ARRAY = array(SID_AND_ATTRIBUTES, ANYSIZE_ARRAY);
export const PSID_AND_ATTRIBUTES_ARRAY = pointer(SID_AND_ATTRIBUTES_ARRAY);

export const SID_AND_ATTRIBUTES_HASH = struct({
	SidCount : DWORD,                                // DWORD
	SidAttr  : PSID_AND_ATTRIBUTES,                  // PSID_AND_ATTRIBUTES
	Hash     : array(SID_HASH_ENTRY, SID_HASH_SIZE), // SID_HASH_ENTRY
});
export const PSID_AND_ATTRIBUTES_HASH = pointer(SID_AND_ATTRIBUTES_HASH);

export const ACL = struct({
	AclRevision : BYTE, // BYTE
	Sbz1        : BYTE, // BYTE
	AclSize     : WORD, // WORD
	AceCount    : WORD, // WORD
	Sbz2        : WORD, // WORD
});
export const PACL = pointer(ACL);

export const ACE_HEADER = struct({
	AceType  : BYTE, // BYTE
	AceFlags : BYTE, // BYTE
	AceSize  : WORD, // WORD
});
export const PACE_HEADER = pointer(ACE_HEADER);

export const ACCESS_ALLOWED_ACE = struct({
	Header   : ACE_HEADER,  // ACE_HEADER
	Mask     : ACCESS_MASK, // ACCESS_MASK
	SidStart : DWORD,       // DWORD
});
export const PACCESS_ALLOWED_ACE = pointer(ACCESS_ALLOWED_ACE);

export const ACCESS_DENIED_ACE = struct({
	Header   : ACE_HEADER,  // ACE_HEADER
	Mask     : ACCESS_MASK, // ACCESS_MASK
	SidStart : DWORD,       // DWORD
});
export const PACCESS_DENIED_ACE = pointer(ACCESS_DENIED_ACE);

export const SYSTEM_AUDIT_ACE = struct({
	Header   : ACE_HEADER,  // ACE_HEADER
	Mask     : ACCESS_MASK, // ACCESS_MASK
	SidStart : DWORD,       // DWORD
});
export const PSYSTEM_AUDIT_ACE = pointer(SYSTEM_AUDIT_ACE);

export const SYSTEM_ALARM_ACE = struct({
	Header   : ACE_HEADER,  // ACE_HEADER
	Mask     : ACCESS_MASK, // ACCESS_MASK
	SidStart : DWORD,       // DWORD
});
export const PSYSTEM_ALARM_ACE = pointer(SYSTEM_ALARM_ACE);

export const SYSTEM_RESOURCE_ATTRIBUTE_ACE = struct({
	Header   : ACE_HEADER,  // ACE_HEADER
	Mask     : ACCESS_MASK, // ACCESS_MASK
	SidStart : DWORD,       // DWORD
	// Sid followed by CLAIM_SECURITY_ATTRIBUTE_RELATIVE_V1 structure
});
export const PSYSTEM_RESOURCE_ATTRIBUTE_ACE = pointer(SYSTEM_RESOURCE_ATTRIBUTE_ACE);

export const SYSTEM_SCOPED_POLICY_ID_ACE = struct({
	Header   : ACE_HEADER,  // ACE_HEADER
	Mask     : ACCESS_MASK, // ACCESS_MASK
	SidStart : DWORD,       // DWORD
});
export const PSYSTEM_SCOPED_POLICY_ID_ACE = pointer(SYSTEM_SCOPED_POLICY_ID_ACE);

export const SYSTEM_MANDATORY_LABEL_ACE = struct({
	Header   : ACE_HEADER,  // ACE_HEADER
	Mask     : ACCESS_MASK, // ACCESS_MASK
	SidStart : DWORD,       // DWORD
});
export const PSYSTEM_MANDATORY_LABEL_ACE = pointer(SYSTEM_MANDATORY_LABEL_ACE);

export const SYSTEM_PROCESS_TRUST_LABEL_ACE = struct({
	Header   : ACE_HEADER,  // ACE_HEADER
	Mask     : ACCESS_MASK, // ACCESS_MASK
	SidStart : DWORD,       // DWORD
});
export const PSYSTEM_PROCESS_TRUST_LABEL_ACE = pointer(SYSTEM_PROCESS_TRUST_LABEL_ACE);

export const SYSTEM_ACCESS_FILTER_ACE = struct({
	Header   : ACE_HEADER,  // ACE_HEADER
	Mask     : ACCESS_MASK, // ACCESS_MASK
	SidStart : DWORD,       // DWORD
	// Filter Condition follows the SID
});
export const PSYSTEM_ACCESS_FILTER_ACE = pointer(SYSTEM_ACCESS_FILTER_ACE);

export const ACCESS_ALLOWED_OBJECT_ACE = struct({
	Header              : ACE_HEADER,  // ACE_HEADER
	Mask                : ACCESS_MASK, // ACCESS_MASK
	Flags               : DWORD,       // DWORD
	ObjectType          : GUID,        // GUID
	InheritedObjectType : GUID,        // GUID
	SidStart            : DWORD,       // DWORD
});
export const PACCESS_ALLOWED_OBJECT_ACE = pointer(ACCESS_ALLOWED_OBJECT_ACE);

export const ACCESS_DENIED_OBJECT_ACE = struct({
	Header              : ACE_HEADER,  // ACE_HEADER
	Mask                : ACCESS_MASK, // ACCESS_MASK
	Flags               : DWORD,       // DWORD
	ObjectType          : GUID,        // GUID
	InheritedObjectType : GUID,        // GUID
	SidStart            : DWORD,       // DWORD
});
export const PACCESS_DENIED_OBJECT_ACE = pointer(ACCESS_DENIED_OBJECT_ACE);

export const SYSTEM_AUDIT_OBJECT_ACE = struct({
	Header              : ACE_HEADER,  // ACE_HEADER
	Mask                : ACCESS_MASK, // ACCESS_MASK
	Flags               : DWORD,       // DWORD
	ObjectType          : GUID,        // GUID
	InheritedObjectType : GUID,        // GUID
	SidStart            : DWORD,       // DWORD
});
export const PSYSTEM_AUDIT_OBJECT_ACE = pointer(SYSTEM_AUDIT_OBJECT_ACE);

export const SYSTEM_ALARM_OBJECT_ACE = struct({
	Header              : ACE_HEADER,  // ACE_HEADER
	Mask                : ACCESS_MASK, // ACCESS_MASK
	Flags               : DWORD,       // DWORD
	ObjectType          : GUID,        // GUID
	InheritedObjectType : GUID,        // GUID
	SidStart            : DWORD,       // DWORD
});
export const PSYSTEM_ALARM_OBJECT_ACE = pointer(SYSTEM_ALARM_OBJECT_ACE);

export const ACCESS_ALLOWED_CALLBACK_ACE = struct({
	Header   : ACE_HEADER,  // ACE_HEADER
	Mask     : ACCESS_MASK, // ACCESS_MASK
	SidStart : DWORD,       // DWORD
	// Opaque resource manager specific data
});
export const PACCESS_ALLOWED_CALLBACK_ACE = pointer(ACCESS_ALLOWED_CALLBACK_ACE);

export const ACCESS_DENIED_CALLBACK_ACE = struct({
	Header   : ACE_HEADER,  // ACE_HEADER
	Mask     : ACCESS_MASK, // ACCESS_MASK
	SidStart : DWORD,       // DWORD
	// Opaque resource manager specific data
});
export const PACCESS_DENIED_CALLBACK_ACE = pointer(ACCESS_DENIED_CALLBACK_ACE);

export const SYSTEM_AUDIT_CALLBACK_ACE = struct({
	Header   : ACE_HEADER,  // ACE_HEADER
	Mask     : ACCESS_MASK, // ACCESS_MASK
	SidStart : DWORD,       // DWORD
	// Opaque resource manager specific data
});
export const PSYSTEM_AUDIT_CALLBACK_ACE = pointer(SYSTEM_AUDIT_CALLBACK_ACE);

export const SYSTEM_ALARM_CALLBACK_ACE = struct({
	Header   : ACE_HEADER,  // ACE_HEADER
	Mask     : ACCESS_MASK, // ACCESS_MASK
	SidStart : DWORD,       // DWORD
	// Opaque resource manager specific data
});
export const PSYSTEM_ALARM_CALLBACK_ACE = pointer(SYSTEM_ALARM_CALLBACK_ACE);

export const ACCESS_ALLOWED_CALLBACK_OBJECT_ACE = struct({
	Header              : ACE_HEADER,  // ACE_HEADER
	Mask                : ACCESS_MASK, // ACCESS_MASK
	Flags               : DWORD,       // DWORD
	ObjectType          : GUID,        // GUID
	InheritedObjectType : GUID,        // GUID
	SidStart            : DWORD,       // DWORD
	// Opaque resource manager specific data
});
export const PACCESS_ALLOWED_CALLBACK_OBJECT_ACE = pointer(ACCESS_ALLOWED_CALLBACK_OBJECT_ACE);

export const ACCESS_DENIED_CALLBACK_OBJECT_ACE = struct({
	Header              : ACE_HEADER,  // ACE_HEADER
	Mask                : ACCESS_MASK, // ACCESS_MASK
	Flags               : DWORD,       // DWORD
	ObjectType          : GUID,        // GUID
	InheritedObjectType : GUID,        // GUID
	SidStart            : DWORD,       // DWORD
	// Opaque resource manager specific data
});
export const PACCESS_DENIED_CALLBACK_OBJECT_ACE = pointer(ACCESS_DENIED_CALLBACK_OBJECT_ACE);

export const SYSTEM_AUDIT_CALLBACK_OBJECT_ACE = struct({
	Header              : ACE_HEADER,  // ACE_HEADER
	Mask                : ACCESS_MASK, // ACCESS_MASK
	Flags               : DWORD,       // DWORD
	ObjectType          : GUID,        // GUID
	InheritedObjectType : GUID,        // GUID
	SidStart            : DWORD,       // DWORD
	// Opaque resource manager specific data
});
export const PSYSTEM_AUDIT_CALLBACK_OBJECT_ACE = pointer(SYSTEM_AUDIT_CALLBACK_OBJECT_ACE);

export const SYSTEM_ALARM_CALLBACK_OBJECT_ACE = struct({
	Header              : ACE_HEADER,  // ACE_HEADER
	Mask                : ACCESS_MASK, // ACCESS_MASK
	Flags               : DWORD,       // DWORD
	ObjectType          : GUID,        // GUID
	InheritedObjectType : GUID,        // GUID
	SidStart            : DWORD,       // DWORD
	// Opaque resource manager specific data
});
export const PSYSTEM_ALARM_CALLBACK_OBJECT_ACE = pointer(SYSTEM_ALARM_CALLBACK_OBJECT_ACE);

export const ACL_REVISION_INFORMATION = struct({
	AclRevision : DWORD, // DWORD
});
export const PACL_REVISION_INFORMATION = pointer(ACL_REVISION_INFORMATION);

export const ACL_SIZE_INFORMATION = struct({
	AceCount      : DWORD, // DWORD
	AclBytesInUse : DWORD, // DWORD
	AclBytesFree  : DWORD, // DWORD
});
export const PACL_SIZE_INFORMATION = pointer(ACL_SIZE_INFORMATION);

export const SECURITY_DESCRIPTOR_RELATIVE = struct({
	Revision : BYTE,                        // BYTE
	Sbz1     : BYTE,                        // BYTE
	Control  : SECURITY_DESCRIPTOR_CONTROL, // SECURITY_DESCRIPTOR_CONTROL
	Owner    : DWORD,                       // DWORD
	Group    : DWORD,                       // DWORD
	Sacl     : DWORD,                       // DWORD
	Dacl     : DWORD,                       // DWORD
});
export const PISECURITY_DESCRIPTOR_RELATIVE = pointer(SECURITY_DESCRIPTOR_RELATIVE);

export const SECURITY_DESCRIPTOR = struct({
	Revision : BYTE,                        // BYTE
	Sbz1     : BYTE,                        // BYTE
	Control  : SECURITY_DESCRIPTOR_CONTROL, // SECURITY_DESCRIPTOR_CONTROL
	Owner    : PSID,                        // PSID
	Group    : PSID,                        // PSID
	Sacl     : PACL,                        // PACL
	Dacl     : PACL,                        // PACL
});
export const PISECURITY_DESCRIPTOR = pointer(SECURITY_DESCRIPTOR);

export const SECURITY_OBJECT_AI_PARAMS = struct({
	Size           : DWORD, // DWORD //Set to sizeof(SECURITY_OBJECT_AI_PARAMS)
	ConstraintMask : DWORD, // DWORD
});
export const PSECURITY_OBJECT_AI_PARAMS = pointer(SECURITY_OBJECT_AI_PARAMS);

export const OBJECT_TYPE_LIST = struct({
	Level      : WORD,          // WORD
	Sbz        : WORD,          // WORD
	ObjectType : pointer(GUID), // GUID*
});
export const POBJECT_TYPE_LIST = pointer(OBJECT_TYPE_LIST);

export const PRIVILEGE_SET = struct({
	PrivilegeCount : DWORD,                                     // DWORD
	Control        : DWORD,                                     // DWORD
	Privilege      : array(LUID_AND_ATTRIBUTES, ANYSIZE_ARRAY), // LUID_AND_ATTRIBUTES
});
export const PPRIVILEGE_SET = pointer(PRIVILEGE_SET);

export const ACCESS_REASONS = struct({
	Data : array(ACCESS_REASON, 32), // ACCESS_REASON
});
export const PACCESS_REASONS = pointer(ACCESS_REASONS);

export const SE_SECURITY_DESCRIPTOR = struct({
	Size               : DWORD,                // DWORD
	Flags              : DWORD,                // DWORD
	SecurityDescriptor : PSECURITY_DESCRIPTOR, // PSECURITY_DESCRIPTOR
});
export const PSE_SECURITY_DESCRIPTOR = pointer(SE_SECURITY_DESCRIPTOR);

export const SE_ACCESS_REQUEST = struct({
	Size                    : DWORD,                   // DWORD
	SeSecurityDescriptor    : PSE_SECURITY_DESCRIPTOR, // PSE_SECURITY_DESCRIPTOR
	DesiredAccess           : ACCESS_MASK,             // ACCESS_MASK
	PreviouslyGrantedAccess : ACCESS_MASK,             // ACCESS_MASK
	PrincipalSelfSid        : PSID,                    // PSID                    // Need to watch how this field affects the cache.
	GenericMapping          : PGENERIC_MAPPING,        // PGENERIC_MAPPING
	ObjectTypeListCount     : DWORD,                   // DWORD
	ObjectTypeList          : POBJECT_TYPE_LIST,       // POBJECT_TYPE_LIST
});
export const PSE_ACCESS_REQUEST = pointer(SE_ACCESS_REQUEST);

export const SE_ACCESS_REPLY = struct({
	Size            : DWORD,                   // DWORD
	ResultListCount : DWORD,                   // DWORD           // Indicate the array size of GrantedAccess and AccessStatus, it only can be either 1 or ObjectTypeListCount.
	GrantedAccess   : PACCESS_MASK,            // PACCESS_MASK
	AccessStatus    : PDWORD,                  // PDWORD
	AccessReason    : PACCESS_REASONS,         // PACCESS_REASONS
	Privileges      : pointer(PPRIVILEGE_SET), // PPRIVILEGE_SET*
});
export const PSE_ACCESS_REPLY = pointer(SE_ACCESS_REPLY);

export const TOKEN_USER = struct({
	User : SID_AND_ATTRIBUTES, // SID_AND_ATTRIBUTES
});
export const PTOKEN_USER = pointer(TOKEN_USER);

export const SE_TOKEN_USER = struct({
	u  : union({
		TokenUser : TOKEN_USER,         // TOKEN_USER
		User      : SID_AND_ATTRIBUTES, // SID_AND_ATTRIBUTES
	}), // union
	u2 : union({
		Sid    : SID,                                // SID
		Buffer : array(BYTE, SECURITY_MAX_SID_SIZE), // BYTE
	}), // union
});

export const TOKEN_GROUPS = struct({
	GroupCount : DWORD,                                        // DWORD
	Groups     : array(SID_AND_ATTRIBUTES, ANYSIZE_ARRAY), // SID_AND_ATTRIBUTES
});
export const PTOKEN_GROUPS = pointer(TOKEN_GROUPS);

export const TOKEN_PRIVILEGES = struct({
	PrivilegeCount : DWORD,                                     // DWORD
	Privileges     : array(LUID_AND_ATTRIBUTES, ANYSIZE_ARRAY), // LUID_AND_ATTRIBUTES
});
export const PTOKEN_PRIVILEGES = pointer(TOKEN_PRIVILEGES);

export const TOKEN_OWNER = struct({
	Owner : PSID, // PSID
});
export const PTOKEN_OWNER = pointer(TOKEN_OWNER);

export const TOKEN_PRIMARY_GROUP = struct({
	PrimaryGroup : PSID, // PSID
});
export const PTOKEN_PRIMARY_GROUP = pointer(TOKEN_PRIMARY_GROUP);

export const TOKEN_DEFAULT_DACL = struct({
	DefaultDacl : PACL, // PACL
});
export const PTOKEN_DEFAULT_DACL = pointer(TOKEN_DEFAULT_DACL);

export const TOKEN_USER_CLAIMS = struct({
	UserClaims : PCLAIMS_BLOB, // PCLAIMS_BLOB
});
export const PTOKEN_USER_CLAIMS = pointer(TOKEN_USER_CLAIMS);

export const TOKEN_DEVICE_CLAIMS = struct({
	DeviceClaims : PCLAIMS_BLOB, // PCLAIMS_BLOB
});
export const PTOKEN_DEVICE_CLAIMS = pointer(TOKEN_DEVICE_CLAIMS);

export const TOKEN_GROUPS_AND_PRIVILEGES = struct({
	SidCount            : DWORD,                // DWORD
	SidLength           : DWORD,                // DWORD
	Sids                : PSID_AND_ATTRIBUTES,  // PSID_AND_ATTRIBUTES
	RestrictedSidCount  : DWORD,                // DWORD
	RestrictedSidLength : DWORD,                // DWORD
	RestrictedSids      : PSID_AND_ATTRIBUTES,  // PSID_AND_ATTRIBUTES
	PrivilegeCount      : DWORD,                // DWORD
	PrivilegeLength     : DWORD,                // DWORD
	Privileges          : PLUID_AND_ATTRIBUTES, // PLUID_AND_ATTRIBUTES
	AuthenticationId    : LUID,                 // LUID
});
export const PTOKEN_GROUPS_AND_PRIVILEGES = pointer(TOKEN_GROUPS_AND_PRIVILEGES);

export const TOKEN_LINKED_TOKEN = struct({
	LinkedToken : HANDLE, // HANDLE
});
export const PTOKEN_LINKED_TOKEN = pointer(TOKEN_LINKED_TOKEN);

export const TOKEN_ELEVATION = struct({
	TokenIsElevated : DWORD, // DWORD
});
export const PTOKEN_ELEVATION = pointer(TOKEN_ELEVATION);

export const TOKEN_MANDATORY_LABEL = struct({
	Label : SID_AND_ATTRIBUTES, // SID_AND_ATTRIBUTES
});
export const PTOKEN_MANDATORY_LABEL = pointer(TOKEN_MANDATORY_LABEL);

export const TOKEN_MANDATORY_POLICY = struct({
	Policy : DWORD, // DWORD
});
export const PTOKEN_MANDATORY_POLICY = pointer(TOKEN_MANDATORY_POLICY);

export const TOKEN_ACCESS_INFORMATION = struct({
	SidHash            : PSID_AND_ATTRIBUTES_HASH,     // PSID_AND_ATTRIBUTES_HASH
	RestrictedSidHash  : PSID_AND_ATTRIBUTES_HASH,     // PSID_AND_ATTRIBUTES_HASH
	Privileges         : PTOKEN_PRIVILEGES,            // PTOKEN_PRIVILEGES
	AuthenticationId   : LUID,                         // LUID
	TokenType          : TOKEN_TYPE,                   // TOKEN_TYPE
	ImpersonationLevel : SECURITY_IMPERSONATION_LEVEL, // SECURITY_IMPERSONATION_LEVEL
	MandatoryPolicy    : TOKEN_MANDATORY_POLICY,       // TOKEN_MANDATORY_POLICY
	Flags              : DWORD,                        // DWORD
	AppContainerNumber : DWORD,                        // DWORD
	PackageSid         : PSID,                         // PSID
	CapabilitiesHash   : PSID_AND_ATTRIBUTES_HASH,     // PSID_AND_ATTRIBUTES_HASH
	TrustLevelSid      : PSID,                         // PSID
	SecurityAttributes : PSECURITY_ATTRIBUTES_OPAQUE,  // PSECURITY_ATTRIBUTES_OPAQUE
});
export const PTOKEN_ACCESS_INFORMATION = pointer(TOKEN_ACCESS_INFORMATION);

export const TOKEN_AUDIT_POLICY = struct({
	PerUserPolicy : array(BYTE, ((POLICY_AUDIT_SUBCATEGORY_COUNT) >> 1) + 1), // BYTE
});
export const PTOKEN_AUDIT_POLICY = pointer(TOKEN_AUDIT_POLICY);

export const TOKEN_SOURCE = struct({
	SourceName       : array(CHAR, TOKEN_SOURCE_LENGTH, "String"), // CHAR
	SourceIdentifier : LUID,                                       // LUID
});
export const PTOKEN_SOURCE = pointer(TOKEN_SOURCE);

export const TOKEN_STATISTICS = struct({
	TokenId            : LUID,                         // LUID
	AuthenticationId   : LUID,                         // LUID
	ExpirationTime     : LARGE_INTEGER,                // LARGE_INTEGER
	TokenType          : TOKEN_TYPE,                   // TOKEN_TYPE
	ImpersonationLevel : SECURITY_IMPERSONATION_LEVEL, // SECURITY_IMPERSONATION_LEVEL
	DynamicCharged     : DWORD,                        // DWORD
	DynamicAvailable   : DWORD,                        // DWORD
	GroupCount         : DWORD,                        // DWORD
	PrivilegeCount     : DWORD,                        // DWORD
	ModifiedId         : LUID,                         // LUID
});
export const PTOKEN_STATISTICS = pointer(TOKEN_STATISTICS);

export const TOKEN_CONTROL = struct({
	TokenId          : LUID,         // LUID
	AuthenticationId : LUID,         // LUID
	ModifiedId       : LUID,         // LUID
	TokenSource      : TOKEN_SOURCE, // TOKEN_SOURCE
});
export const PTOKEN_CONTROL = pointer(TOKEN_CONTROL);

export const TOKEN_ORIGIN = struct({
	OriginatingLogonSession : LUID, // LUID
});
export const PTOKEN_ORIGIN = pointer(TOKEN_ORIGIN);

export const TOKEN_APPCONTAINER_INFORMATION = struct({
	TokenAppContainer : PSID, // PSID
});
export const PTOKEN_APPCONTAINER_INFORMATION = pointer(TOKEN_APPCONTAINER_INFORMATION);

export const TOKEN_SID_INFORMATION = struct({
	Sid : PSID, // PSID
});
export const PTOKEN_SID_INFORMATION = pointer(TOKEN_SID_INFORMATION);

export const TOKEN_BNO_ISOLATION_INFORMATION = struct({
	IsolationPrefix  : PWSTR,   // PWSTR
	IsolationEnabled : BOOLEAN, // BOOLEAN
});
export const PTOKEN_BNO_ISOLATION_INFORMATION = pointer(TOKEN_BNO_ISOLATION_INFORMATION);

export const CLAIM_SECURITY_ATTRIBUTE_FQBN_VALUE = struct({
	Version : DWORD64, // DWORD64
	Name    : PWSTR,   // PWSTR
});
export const PCLAIM_SECURITY_ATTRIBUTE_FQBN_VALUE = pointer(CLAIM_SECURITY_ATTRIBUTE_FQBN_VALUE);

export const CLAIM_SECURITY_ATTRIBUTE_OCTET_STRING_VALUE = struct({
	pValue      : PVOID, // PVOID //  Pointer is BYTE aligned.
	ValueLength : DWORD, // DWORD //  In bytes
});
export const PCLAIM_SECURITY_ATTRIBUTE_OCTET_STRING_VALUE = pointer(CLAIM_SECURITY_ATTRIBUTE_OCTET_STRING_VALUE);

export const CLAIM_SECURITY_ATTRIBUTE_V1 = struct({
	Name       : PWSTR, // PWSTR
	ValueType  : WORD,  // WORD
	Reserved   : WORD,  // WORD
	Flags      : DWORD, // DWORD
	ValueCount : DWORD, // DWORD
	Values     : union({
		pInt64       : PLONG64,                                      // PLONG64
		pUint64      : PDWORD64,                                     // PDWORD64
		ppString     : pointer(PWSTR),                               // PWSTR*
		pFqbn        : PCLAIM_SECURITY_ATTRIBUTE_FQBN_VALUE,         // PCLAIM_SECURITY_ATTRIBUTE_FQBN_VALUE
		pOctetString : PCLAIM_SECURITY_ATTRIBUTE_OCTET_STRING_VALUE, // PCLAIM_SECURITY_ATTRIBUTE_OCTET_STRING_VALUE
	}), // union
});
export const PCLAIM_SECURITY_ATTRIBUTE_V1 = pointer(CLAIM_SECURITY_ATTRIBUTE_V1);

export const CLAIM_SECURITY_ATTRIBUTE_RELATIVE_V1 = struct({
	Name       : DWORD, // DWORD
	ValueType  : WORD,  // WORD
	Reserved   : WORD,  // WORD
	Flags      : DWORD, // DWORD
	ValueCount : DWORD, // DWORD
	Values     : union({
		pInt64       : array(DWORD, ANYSIZE_ARRAY), // DWORD
		pUint64      : array(DWORD, ANYSIZE_ARRAY), // DWORD
		ppString     : array(DWORD, ANYSIZE_ARRAY), // DWORD
		pFqbn        : array(DWORD, ANYSIZE_ARRAY), // DWORD
		pOctetString : array(DWORD, ANYSIZE_ARRAY), // DWORD
	}), // union
});
export const PCLAIM_SECURITY_ATTRIBUTE_RELATIVE_V1 = pointer(CLAIM_SECURITY_ATTRIBUTE_RELATIVE_V1);

export const CLAIM_SECURITY_ATTRIBUTES_INFORMATION = struct({
	Version        : WORD,  // WORD
	Reserved       : WORD,  // WORD
	AttributeCount : DWORD, // DWORD
	Attribute      : union({
		pAttributeV1 : PCLAIM_SECURITY_ATTRIBUTE_V1, // PCLAIM_SECURITY_ATTRIBUTE_V1
	}), // union
});
export const PCLAIM_SECURITY_ATTRIBUTES_INFORMATION = pointer(CLAIM_SECURITY_ATTRIBUTES_INFORMATION);

export const SECURITY_QUALITY_OF_SERVICE = struct({
	Length              : DWORD,                          // DWORD
	ImpersonationLevel  : SECURITY_IMPERSONATION_LEVEL,   // SECURITY_IMPERSONATION_LEVEL
	ContextTrackingMode : SECURITY_CONTEXT_TRACKING_MODE, // SECURITY_CONTEXT_TRACKING_MODE
	EffectiveOnly       : BOOLEAN,                        // BOOLEAN
});
export const PSECURITY_QUALITY_OF_SERVICE = pointer(SECURITY_QUALITY_OF_SERVICE);

export const SE_IMPERSONATION_STATE = struct({
	Token         : PACCESS_TOKEN,                // PACCESS_TOKEN
	CopyOnOpen    : BOOLEAN,                      // BOOLEAN
	EffectiveOnly : BOOLEAN,                      // BOOLEAN
	Level         : SECURITY_IMPERSONATION_LEVEL, // SECURITY_IMPERSONATION_LEVEL
});
export const PSE_IMPERSONATION_STATE = pointer(SE_IMPERSONATION_STATE);

export const SECURITY_CAPABILITIES = struct({
	AppContainerSid : PSID,                // PSID
	Capabilities    : PSID_AND_ATTRIBUTES, // PSID_AND_ATTRIBUTES
	CapabilityCount : DWORD,               // DWORD
	Reserved        : DWORD,               // DWORD
});
export const PSECURITY_CAPABILITIES = pointer(SECURITY_CAPABILITIES);
export const LPSECURITY_CAPABILITIES = pointer(SECURITY_CAPABILITIES);

export const JOB_SET_ARRAY = struct({
	JobHandle   : HANDLE, // HANDLE // Handle to job object to insert
	MemberLevel : DWORD,  // DWORD  // Level of this job in the set. Must be > 0. Can be sparse.
	Flags       : DWORD,  // DWORD  // Unused. Must be zero
});
export const PJOB_SET_ARRAY = pointer(JOB_SET_ARRAY);

export const EXCEPTION_REGISTRATION_RECORD = koffi.opaque();
struct(EXCEPTION_REGISTRATION_RECORD, {
	Next    : pointer(EXCEPTION_REGISTRATION_RECORD), // struct _EXCEPTION_REGISTRATION_RECORD *
	Handler : pointer(PEXCEPTION_ROUTINE),            // PEXCEPTION_ROUTINE
});
export const PEXCEPTION_REGISTRATION_RECORD = pointer(EXCEPTION_REGISTRATION_RECORD);

export const NT_TIB = koffi.opaque();
struct(NT_TIB, {
	ExceptionList        : pointer(EXCEPTION_REGISTRATION_RECORD), // struct _EXCEPTION_REGISTRATION_RECORD*
	StackBase            : PVOID,                                  // PVOID
	StackLimit           : PVOID,                                  // PVOID
	SubSystemTib         : PVOID,                                  // PVOID
	u                    : union({
		FiberData : PVOID, // PVOID
		Version   : DWORD, // DWORD
	}),
	ArbitraryUserPointer : PVOID,                                  // PVOID
	Self                 : pointer(NT_TIB),                        // struct _NT_TIB*
});
export const PNT_TIB = pointer(NT_TIB);

export const NT_TIB32 = struct({
	ExceptionList        : DWORD, // DWORD
	StackBase            : DWORD, // DWORD
	StackLimit           : DWORD, // DWORD
	SubSystemTib         : DWORD, // DWORD
	u                    : union({
		FiberData : DWORD, // DWORD
		Version   : DWORD, // DWORD
	}),
	ArbitraryUserPointer : DWORD, // DWORD
	Self                 : DWORD, // DWORD
});
export const PNT_TIB32 = pointer(NT_TIB32);

export const NT_TIB64 = struct({
	ExceptionList        : DWORD64, // DWORD64
	StackBase            : DWORD64, // DWORD64
	StackLimit           : DWORD64, // DWORD64
	SubSystemTib         : DWORD64, // DWORD64
	u                    : union({
		FiberData : DWORD64, // DWORD64
		Version   : DWORD64, // DWORD64
	}),
	ArbitraryUserPointer : DWORD64, // DWORD64
	Self                 : DWORD64, // DWORD64
});
export const PNT_TIB64 = pointer(NT_TIB64);

export const UMS_CREATE_THREAD_ATTRIBUTES = struct({
	UmsVersion        : DWORD, // DWORD
	UmsContext        : PVOID, // PVOID
	UmsCompletionList : PVOID, // PVOID
});
export const PUMS_CREATE_THREAD_ATTRIBUTES = pointer(UMS_CREATE_THREAD_ATTRIBUTES);

export const WOW64_ARCHITECTURE_INFORMATION = struct({
	Machine       : bitfield(DWORD, 16), // DWORD
	KernelMode    : bitfield(DWORD, 1),  // DWORD
	UserMode      : bitfield(DWORD, 1),  // DWORD
	Native        : bitfield(DWORD, 1),  // DWORD
	Process       : bitfield(DWORD, 1),  // DWORD
	ReservedZero0 : bitfield(DWORD, 12), // DWORD
});

export const PROCESS_DYNAMIC_EH_CONTINUATION_TARGET = struct({
	TargetAddress : ULONG_PTR, // ULONG_PTR
	Flags         : ULONG_PTR, // ULONG_PTR
});
export const PPROCESS_DYNAMIC_EH_CONTINUATION_TARGET = pointer(PROCESS_DYNAMIC_EH_CONTINUATION_TARGET);

export const PROCESS_DYNAMIC_EH_CONTINUATION_TARGETS_INFORMATION = struct({
	NumberOfTargets : WORD,                                    // WORD
	Reserved        : WORD,                                    // WORD
	Reserved2       : DWORD,                                   // DWORD
	Targets         : PPROCESS_DYNAMIC_EH_CONTINUATION_TARGET, // PPROCESS_DYNAMIC_EH_CONTINUATION_TARGET
});
export const PPROCESS_DYNAMIC_EH_CONTINUATION_TARGETS_INFORMATION = pointer(PROCESS_DYNAMIC_EH_CONTINUATION_TARGETS_INFORMATION);

export const PROCESS_DYNAMIC_ENFORCED_ADDRESS_RANGE = struct({
	BaseAddress : ULONG_PTR, // ULONG_PTR
	Size        : SIZE_T,    // SIZE_T
	Flags       : DWORD,     // DWORD
});
export const PPROCESS_DYNAMIC_ENFORCED_ADDRESS_RANGE = pointer(PROCESS_DYNAMIC_ENFORCED_ADDRESS_RANGE);

export const PROCESS_DYNAMIC_ENFORCED_ADDRESS_RANGES_INFORMATION = struct({
	NumberOfRanges : WORD,                                    // WORD
	Reserved       : WORD,                                    // WORD
	Reserved2      : DWORD,                                   // DWORD
	Ranges         : PPROCESS_DYNAMIC_ENFORCED_ADDRESS_RANGE, // PPROCESS_DYNAMIC_ENFORCED_ADDRESS_RANGE
});
export const PPROCESS_DYNAMIC_ENFORCED_ADDRESS_RANGES_INFORMATION = pointer(PROCESS_DYNAMIC_ENFORCED_ADDRESS_RANGES_INFORMATION);

export const QUOTA_LIMITS = struct({
	PagedPoolLimit        : SIZE_T,        // SIZE_T
	NonPagedPoolLimit     : SIZE_T,        // SIZE_T
	MinimumWorkingSetSize : SIZE_T,        // SIZE_T
	MaximumWorkingSetSize : SIZE_T,        // SIZE_T
	PagefileLimit         : SIZE_T,        // SIZE_T
	TimeLimit             : LARGE_INTEGER, // LARGE_INTEGER
});
export const PQUOTA_LIMITS = pointer(QUOTA_LIMITS);

export const RATE_QUOTA_LIMIT = union({
	RateData : DWORD,  // DWORD
	s        : struct({
		RatePercent : bitfield(DWORD, 7),  // DWORD
		Reserved0   : bitfield(DWORD, 25), // DWORD
	}), // struct
});
export const PRATE_QUOTA_LIMIT = pointer(RATE_QUOTA_LIMIT);

export const QUOTA_LIMITS_EX = struct({
	PagedPoolLimit        : SIZE_T,           // SIZE_T
	NonPagedPoolLimit     : SIZE_T,           // SIZE_T
	MinimumWorkingSetSize : SIZE_T,           // SIZE_T
	MaximumWorkingSetSize : SIZE_T,           // SIZE_T
	PagefileLimit         : SIZE_T,           // SIZE_T           // Limit expressed in pages
	TimeLimit             : LARGE_INTEGER,    // LARGE_INTEGER
	WorkingSetLimit       : SIZE_T,           // SIZE_T           // Limit expressed in pages
	Reserved2             : SIZE_T,           // SIZE_T
	Reserved3             : SIZE_T,           // SIZE_T
	Reserved4             : SIZE_T,           // SIZE_T
	Flags                 : DWORD,            // DWORD
	CpuRateLimit          : RATE_QUOTA_LIMIT, // RATE_QUOTA_LIMIT
});
export const PQUOTA_LIMITS_EX = pointer(QUOTA_LIMITS_EX);

export const IO_COUNTERS = struct({
	ReadOperationCount  : ULONGLONG, // ULONGLONG
	WriteOperationCount : ULONGLONG, // ULONGLONG
	OtherOperationCount : ULONGLONG, // ULONGLONG
	ReadTransferCount   : ULONGLONG, // ULONGLONG
	WriteTransferCount  : ULONGLONG, // ULONGLONG
	OtherTransferCount  : ULONGLONG, // ULONGLONG
});
export const PIO_COUNTERS = pointer(IO_COUNTERS);

export const PROCESS_MITIGATION_ASLR_POLICY = struct({
	u : union({
		Flags : DWORD,  // DWORD
		s     : struct({
			EnableBottomUpRandomization : bitfield(DWORD, 1),  // DWORD
			EnableForceRelocateImages   : bitfield(DWORD, 1),  // DWORD
			EnableHighEntropy           : bitfield(DWORD, 1),  // DWORD
			DisallowStrippedImages      : bitfield(DWORD, 1),  // DWORD
			ReservedFlags               : bitfield(DWORD, 28), // DWORD
		}), // struct
	}), // union
});
export const PPROCESS_MITIGATION_ASLR_POLICY = pointer(PROCESS_MITIGATION_ASLR_POLICY);

export const PROCESS_MITIGATION_DEP_POLICY = struct({
	u         : union({
		Flags : DWORD,  // DWORD
		s     : struct({
			Enable                   : bitfield(DWORD, 1),  // DWORD
			DisableAtlThunkEmulation : bitfield(DWORD, 1),  // DWORD
			ReservedFlags            : bitfield(DWORD, 30), // DWORD
		}), // struct
	}), // union
	Permanent : BOOLEAN, // BOOLEAN
});
export const PPROCESS_MITIGATION_DEP_POLICY = pointer(PROCESS_MITIGATION_DEP_POLICY);

export const PROCESS_MITIGATION_STRICT_HANDLE_CHECK_POLICY = struct({
	u : union({
		Flags : DWORD,  // DWORD
		s     : struct({
			RaiseExceptionOnInvalidHandleReference : bitfield(DWORD, 1),  // DWORD
			HandleExceptionsPermanentlyEnabled     : bitfield(DWORD, 1),  // DWORD
			ReservedFlags                          : bitfield(DWORD, 30), // DWORD
		}), // struct
	}), // union
});
export const PPROCESS_MITIGATION_STRICT_HANDLE_CHECK_POLICY = pointer(PROCESS_MITIGATION_STRICT_HANDLE_CHECK_POLICY);

export const PROCESS_MITIGATION_SYSTEM_CALL_DISABLE_POLICY = struct({
	u : union({
		Flags : DWORD,  // DWORD
		s     : struct({
			DisallowWin32kSystemCalls      : bitfield(DWORD, 1),  // DWORD
			AuditDisallowWin32kSystemCalls : bitfield(DWORD, 1),  // DWORD
			ReservedFlags                  : bitfield(DWORD, 30), // DWORD
		}), // struct
	}), // union
});
export const PPROCESS_MITIGATION_SYSTEM_CALL_DISABLE_POLICY = pointer(PROCESS_MITIGATION_SYSTEM_CALL_DISABLE_POLICY);

export const PROCESS_MITIGATION_EXTENSION_POINT_DISABLE_POLICY = struct({
	u : union({
		Flags : DWORD,  // DWORD
		s     : struct({
			DisableExtensionPoints : bitfield(DWORD, 1),  // DWORD
			ReservedFlags          : bitfield(DWORD, 31), // DWORD
		}), // struct
	}), // union
});
export const PPROCESS_MITIGATION_EXTENSION_POINT_DISABLE_POLICY = pointer(PROCESS_MITIGATION_EXTENSION_POINT_DISABLE_POLICY);

export const PROCESS_MITIGATION_DYNAMIC_CODE_POLICY = struct({
	u : union({
		Flags : DWORD,  // DWORD
		s     : struct({
			ProhibitDynamicCode      : bitfield(DWORD, 1),  // DWORD
			AllowThreadOptOut        : bitfield(DWORD, 1),  // DWORD
			AllowRemoteDowngrade     : bitfield(DWORD, 1),  // DWORD
			AuditProhibitDynamicCode : bitfield(DWORD, 1),  // DWORD
			ReservedFlags            : bitfield(DWORD, 28), // DWORD
		}), // struct
	}), // union
});
export const PPROCESS_MITIGATION_DYNAMIC_CODE_POLICY = pointer(PROCESS_MITIGATION_DYNAMIC_CODE_POLICY);

export const PROCESS_MITIGATION_CONTROL_FLOW_GUARD_POLICY = struct({
	u : union({
		Flags : DWORD,  // DWORD
		s     : struct({
			EnableControlFlowGuard  : bitfield(DWORD, 1),  // DWORD
			EnableExportSuppression : bitfield(DWORD, 1),  // DWORD
			StrictMode              : bitfield(DWORD, 1),  // DWORD
			ReservedFlags           : bitfield(DWORD, 29), // DWORD
		}), // struct
	}), // union
});
export const PPROCESS_MITIGATION_CONTROL_FLOW_GUARD_POLICY = pointer(PROCESS_MITIGATION_CONTROL_FLOW_GUARD_POLICY);

export const PROCESS_MITIGATION_BINARY_SIGNATURE_POLICY = struct({
	u : union({
		Flags : DWORD,  // DWORD
		s     : struct({
			MicrosoftSignedOnly      : bitfield(DWORD, 1),  // DWORD
			StoreSignedOnly          : bitfield(DWORD, 1),  // DWORD
			MitigationOptIn          : bitfield(DWORD, 1),  // DWORD
			AuditMicrosoftSignedOnly : bitfield(DWORD, 1),  // DWORD
			AuditStoreSignedOnly     : bitfield(DWORD, 1),  // DWORD
			ReservedFlags            : bitfield(DWORD, 27), // DWORD
		}), // struct
	}), // union
});
export const PPROCESS_MITIGATION_BINARY_SIGNATURE_POLICY = pointer(PROCESS_MITIGATION_BINARY_SIGNATURE_POLICY);

export const PROCESS_MITIGATION_FONT_DISABLE_POLICY = struct({
	u : union({
		Flags : DWORD,  // DWORD
		s     : struct({
			DisableNonSystemFonts     : bitfield(DWORD, 1),  // DWORD
			AuditNonSystemFontLoading : bitfield(DWORD, 1),  // DWORD
			ReservedFlags             : bitfield(DWORD, 30), // DWORD
		}), // struct
	}), // union
});
export const PPROCESS_MITIGATION_FONT_DISABLE_POLICY = pointer(PROCESS_MITIGATION_FONT_DISABLE_POLICY);

export const PROCESS_MITIGATION_IMAGE_LOAD_POLICY = struct({
	u : union({
		Flags : DWORD,  // DWORD
		s     : struct({
			NoRemoteImages                 : bitfield(DWORD, 1),  // DWORD
			NoLowMandatoryLabelImages      : bitfield(DWORD, 1),  // DWORD
			PreferSystem32Images           : bitfield(DWORD, 1),  // DWORD
			AuditNoRemoteImages            : bitfield(DWORD, 1),  // DWORD
			AuditNoLowMandatoryLabelImages : bitfield(DWORD, 1),  // DWORD
			ReservedFlags                  : bitfield(DWORD, 27), // DWORD
		}), // struct
	}), // union
});
export const PPROCESS_MITIGATION_IMAGE_LOAD_POLICY = pointer(PROCESS_MITIGATION_IMAGE_LOAD_POLICY);

export const PROCESS_MITIGATION_SYSTEM_CALL_FILTER_POLICY = struct({
	u : union({
		Flags : DWORD,  // DWORD
		s     : struct({
			FilterId      : bitfield(DWORD, 4),  // DWORD
			ReservedFlags : bitfield(DWORD, 28), // DWORD
		}), // struct
	}), // union
});
export const PPROCESS_MITIGATION_SYSTEM_CALL_FILTER_POLICY = pointer(PROCESS_MITIGATION_SYSTEM_CALL_FILTER_POLICY);

export const PROCESS_MITIGATION_PAYLOAD_RESTRICTION_POLICY = struct({
	u : union({
		Flags : DWORD,  // DWORD
		s     : struct({
			EnableExportAddressFilter     : bitfield(DWORD, 1),  // DWORD
			AuditExportAddressFilter      : bitfield(DWORD, 1),  // DWORD
			EnableExportAddressFilterPlus : bitfield(DWORD, 1),  // DWORD
			AuditExportAddressFilterPlus  : bitfield(DWORD, 1),  // DWORD
			EnableImportAddressFilter     : bitfield(DWORD, 1),  // DWORD
			AuditImportAddressFilter      : bitfield(DWORD, 1),  // DWORD
			EnableRopStackPivot           : bitfield(DWORD, 1),  // DWORD
			AuditRopStackPivot            : bitfield(DWORD, 1),  // DWORD
			EnableRopCallerCheck          : bitfield(DWORD, 1),  // DWORD
			AuditRopCallerCheck           : bitfield(DWORD, 1),  // DWORD
			EnableRopSimExec              : bitfield(DWORD, 1),  // DWORD
			AuditRopSimExec               : bitfield(DWORD, 1),  // DWORD
			ReservedFlags                 : bitfield(DWORD, 20), // DWORD
		}), // struct
	}), // union
});
export const PPROCESS_MITIGATION_PAYLOAD_RESTRICTION_POLICY = pointer(PROCESS_MITIGATION_PAYLOAD_RESTRICTION_POLICY);

export const PROCESS_MITIGATION_CHILD_PROCESS_POLICY = struct({
	u : union({
		Flags : DWORD,  // DWORD
		s     : struct({
			NoChildProcessCreation      : bitfield(DWORD, 1),  // DWORD
			AuditNoChildProcessCreation : bitfield(DWORD, 1),  // DWORD
			AllowSecureProcessCreation  : bitfield(DWORD, 1),  // DWORD
			ReservedFlags               : bitfield(DWORD, 29), // DWORD
		}), // struct
	}), // union
});
export const PPROCESS_MITIGATION_CHILD_PROCESS_POLICY = pointer(PROCESS_MITIGATION_CHILD_PROCESS_POLICY);

export const PROCESS_MITIGATION_SIDE_CHANNEL_ISOLATION_POLICY = struct({
	u : union({
		Flags : DWORD,  // DWORD
		s     : struct({
			SmtBranchTargetIsolation      : bitfield(DWORD, 1),  // DWORD
			IsolateSecurityDomain         : bitfield(DWORD, 1),  // DWORD
			DisablePageCombine            : bitfield(DWORD, 1),  // DWORD
			SpeculativeStoreBypassDisable : bitfield(DWORD, 1),  // DWORD
			ReservedFlags                 : bitfield(DWORD, 28), // DWORD
		}), // struct
	}), // union
});
export const PPROCESS_MITIGATION_SIDE_CHANNEL_ISOLATION_POLICY = pointer(PROCESS_MITIGATION_SIDE_CHANNEL_ISOLATION_POLICY);

export const PROCESS_MITIGATION_USER_SHADOW_STACK_POLICY = struct({
	u : union({
		Flags : DWORD,  // DWORD
		s     : struct({
			EnableUserShadowStack             : bitfield(DWORD, 1),  // DWORD
			AuditUserShadowStack              : bitfield(DWORD, 1),  // DWORD
			SetContextIpValidation            : bitfield(DWORD, 1),  // DWORD
			AuditSetContextIpValidation       : bitfield(DWORD, 1),  // DWORD
			EnableUserShadowStackStrictMode   : bitfield(DWORD, 1),  // DWORD
			BlockNonCetBinaries               : bitfield(DWORD, 1),  // DWORD
			BlockNonCetBinariesNonEhcont      : bitfield(DWORD, 1),  // DWORD
			AuditBlockNonCetBinaries          : bitfield(DWORD, 1),  // DWORD
			CetDynamicApisOutOfProcOnly       : bitfield(DWORD, 1),  // DWORD
			SetContextIpValidationRelaxedMode : bitfield(DWORD, 1),  // DWORD
			ReservedFlags                     : bitfield(DWORD, 22), // DWORD
		}), // struct
	}), // union
});
export const PPROCESS_MITIGATION_USER_SHADOW_STACK_POLICY = pointer(PROCESS_MITIGATION_USER_SHADOW_STACK_POLICY);

export const JOBOBJECT_BASIC_ACCOUNTING_INFORMATION = struct({
	TotalUserTime             : LARGE_INTEGER, // LARGE_INTEGER
	TotalKernelTime           : LARGE_INTEGER, // LARGE_INTEGER
	ThisPeriodTotalUserTime   : LARGE_INTEGER, // LARGE_INTEGER
	ThisPeriodTotalKernelTime : LARGE_INTEGER, // LARGE_INTEGER
	TotalPageFaultCount       : DWORD,         // DWORD
	TotalProcesses            : DWORD,         // DWORD
	ActiveProcesses           : DWORD,         // DWORD
	TotalTerminatedProcesses  : DWORD,         // DWORD
});
export const PJOBOBJECT_BASIC_ACCOUNTING_INFORMATION = pointer(JOBOBJECT_BASIC_ACCOUNTING_INFORMATION);

export const JOBOBJECT_BASIC_LIMIT_INFORMATION = struct({
	PerProcessUserTimeLimit : LARGE_INTEGER, // LARGE_INTEGER
	PerJobUserTimeLimit     : LARGE_INTEGER, // LARGE_INTEGER
	LimitFlags              : DWORD,         // DWORD
	MinimumWorkingSetSize   : SIZE_T,        // SIZE_T
	MaximumWorkingSetSize   : SIZE_T,        // SIZE_T
	ActiveProcessLimit      : DWORD,         // DWORD
	Affinity                : ULONG_PTR,     // ULONG_PTR
	PriorityClass           : DWORD,         // DWORD
	SchedulingClass         : DWORD,         // DWORD
});
export const PJOBOBJECT_BASIC_LIMIT_INFORMATION = pointer(JOBOBJECT_BASIC_LIMIT_INFORMATION);

export const JOBOBJECT_EXTENDED_LIMIT_INFORMATION = struct({
	BasicLimitInformation : JOBOBJECT_BASIC_LIMIT_INFORMATION, // JOBOBJECT_BASIC_LIMIT_INFORMATION
	IoInfo                : IO_COUNTERS,                       // IO_COUNTERS
	ProcessMemoryLimit    : SIZE_T,                            // SIZE_T
	JobMemoryLimit        : SIZE_T,                            // SIZE_T
	PeakProcessMemoryUsed : SIZE_T,                            // SIZE_T
	PeakJobMemoryUsed     : SIZE_T,                            // SIZE_T
});
export const PJOBOBJECT_EXTENDED_LIMIT_INFORMATION = pointer(JOBOBJECT_EXTENDED_LIMIT_INFORMATION);

export const JOBOBJECT_BASIC_PROCESS_ID_LIST = struct({
	NumberOfAssignedProcesses : DWORD,               // DWORD
	NumberOfProcessIdsInList  : DWORD,               // DWORD
	ProcessIdList             : array(ULONG_PTR, 1), // ULONG_PTR
});
export const PJOBOBJECT_BASIC_PROCESS_ID_LIST = pointer(JOBOBJECT_BASIC_PROCESS_ID_LIST);

export const JOBOBJECT_BASIC_UI_RESTRICTIONS = struct({
	UIRestrictionsClass : DWORD, // DWORD
});
export const PJOBOBJECT_BASIC_UI_RESTRICTIONS = pointer(JOBOBJECT_BASIC_UI_RESTRICTIONS);

export const JOBOBJECT_SECURITY_LIMIT_INFORMATION = struct({
	SecurityLimitFlags : DWORD,             // DWORD
	JobToken           : HANDLE,            // HANDLE
	SidsToDisable      : PTOKEN_GROUPS,     // PTOKEN_GROUPS
	PrivilegesToDelete : PTOKEN_PRIVILEGES, // PTOKEN_PRIVILEGES
	RestrictedSids     : PTOKEN_GROUPS,     // PTOKEN_GROUPS
});
export const PJOBOBJECT_SECURITY_LIMIT_INFORMATION = pointer(JOBOBJECT_SECURITY_LIMIT_INFORMATION);

export const JOBOBJECT_END_OF_JOB_TIME_INFORMATION = struct({
	EndOfJobTimeAction : DWORD, // DWORD
});
export const PJOBOBJECT_END_OF_JOB_TIME_INFORMATION = pointer(JOBOBJECT_END_OF_JOB_TIME_INFORMATION);

export const JOBOBJECT_ASSOCIATE_COMPLETION_PORT = struct({
	CompletionKey  : PVOID,  // PVOID
	CompletionPort : HANDLE, // HANDLE
});
export const PJOBOBJECT_ASSOCIATE_COMPLETION_PORT = pointer(JOBOBJECT_ASSOCIATE_COMPLETION_PORT);

export const JOBOBJECT_BASIC_AND_IO_ACCOUNTING_INFORMATION = struct({
	BasicInfo : JOBOBJECT_BASIC_ACCOUNTING_INFORMATION, // JOBOBJECT_BASIC_ACCOUNTING_INFORMATION
	IoInfo    : IO_COUNTERS,                            // IO_COUNTERS
});
export const PJOBOBJECT_BASIC_AND_IO_ACCOUNTING_INFORMATION = pointer(JOBOBJECT_BASIC_AND_IO_ACCOUNTING_INFORMATION);

export const JOBOBJECT_JOBSET_INFORMATION = struct({
	MemberLevel : DWORD, // DWORD
});
export const PJOBOBJECT_JOBSET_INFORMATION = pointer(JOBOBJECT_JOBSET_INFORMATION);

export const JOBOBJECT_NOTIFICATION_LIMIT_INFORMATION = struct({
	IoReadBytesLimit             : DWORD64,                                   // DWORD64
	IoWriteBytesLimit            : DWORD64,                                   // DWORD64
	PerJobUserTimeLimit          : LARGE_INTEGER,                             // LARGE_INTEGER
	JobMemoryLimit               : DWORD64,                                   // DWORD64
	RateControlTolerance         : JOBOBJECT_RATE_CONTROL_TOLERANCE,          // JOBOBJECT_RATE_CONTROL_TOLERANCE
	RateControlToleranceInterval : JOBOBJECT_RATE_CONTROL_TOLERANCE_INTERVAL, // JOBOBJECT_RATE_CONTROL_TOLERANCE_INTERVAL
	LimitFlags                   : DWORD,                                     // DWORD
});
export const PJOBOBJECT_NOTIFICATION_LIMIT_INFORMATION = pointer(JOBOBJECT_NOTIFICATION_LIMIT_INFORMATION);

export const JOBOBJECT_NOTIFICATION_LIMIT_INFORMATION_2 = struct({
	IoReadBytesLimit                : DWORD64,                                   // DWORD64
	IoWriteBytesLimit               : DWORD64,                                   // DWORD64
	PerJobUserTimeLimit             : LARGE_INTEGER,                             // LARGE_INTEGER
	u                               : union({
		JobHighMemoryLimit : DWORD64, // DWORD64
		JobMemoryLimit     : DWORD64, // DWORD64
	}), // union
	u2                              : union({
		RateControlTolerance    : JOBOBJECT_RATE_CONTROL_TOLERANCE, // JOBOBJECT_RATE_CONTROL_TOLERANCE
		CpuRateControlTolerance : JOBOBJECT_RATE_CONTROL_TOLERANCE, // JOBOBJECT_RATE_CONTROL_TOLERANCE
	}), // union
	u3                              : union({
		RateControlToleranceInterval    : JOBOBJECT_RATE_CONTROL_TOLERANCE_INTERVAL, // JOBOBJECT_RATE_CONTROL_TOLERANCE_INTERVAL
		CpuRateControlToleranceInterval : JOBOBJECT_RATE_CONTROL_TOLERANCE_INTERVAL, // JOBOBJECT_RATE_CONTROL_TOLERANCE_INTERVAL
	}), // union
	LimitFlags                      : DWORD,                                     // DWORD
	IoRateControlTolerance          : JOBOBJECT_RATE_CONTROL_TOLERANCE,          // JOBOBJECT_RATE_CONTROL_TOLERANCE
	JobLowMemoryLimit               : DWORD64,                                   // DWORD64
	IoRateControlToleranceInterval  : JOBOBJECT_RATE_CONTROL_TOLERANCE_INTERVAL, // JOBOBJECT_RATE_CONTROL_TOLERANCE_INTERVAL
	NetRateControlTolerance         : JOBOBJECT_RATE_CONTROL_TOLERANCE,          // JOBOBJECT_RATE_CONTROL_TOLERANCE
	NetRateControlToleranceInterval : JOBOBJECT_RATE_CONTROL_TOLERANCE_INTERVAL, // JOBOBJECT_RATE_CONTROL_TOLERANCE_INTERVAL
});

export const JOBOBJECT_LIMIT_VIOLATION_INFORMATION = struct({
	LimitFlags                : DWORD,                            // DWORD
	ViolationLimitFlags       : DWORD,                            // DWORD
	IoReadBytes               : DWORD64,                          // DWORD64
	IoReadBytesLimit          : DWORD64,                          // DWORD64
	IoWriteBytes              : DWORD64,                          // DWORD64
	IoWriteBytesLimit         : DWORD64,                          // DWORD64
	PerJobUserTime            : LARGE_INTEGER,                    // LARGE_INTEGER
	PerJobUserTimeLimit       : LARGE_INTEGER,                    // LARGE_INTEGER
	JobMemory                 : DWORD64,                          // DWORD64
	JobMemoryLimit            : DWORD64,                          // DWORD64
	RateControlTolerance      : JOBOBJECT_RATE_CONTROL_TOLERANCE, // JOBOBJECT_RATE_CONTROL_TOLERANCE
	RateControlToleranceLimit : JOBOBJECT_RATE_CONTROL_TOLERANCE, // JOBOBJECT_RATE_CONTROL_TOLERANCE
});
export const PJOBOBJECT_LIMIT_VIOLATION_INFORMATION = pointer(JOBOBJECT_LIMIT_VIOLATION_INFORMATION);

export const JOBOBJECT_LIMIT_VIOLATION_INFORMATION_2 = struct({
	LimitFlags                   : DWORD,                            // DWORD
	ViolationLimitFlags          : DWORD,                            // DWORD
	IoReadBytes                  : DWORD64,                          // DWORD64
	IoReadBytesLimit             : DWORD64,                          // DWORD64
	IoWriteBytes                 : DWORD64,                          // DWORD64
	IoWriteBytesLimit            : DWORD64,                          // DWORD64
	PerJobUserTime               : LARGE_INTEGER,                    // LARGE_INTEGER
	PerJobUserTimeLimit          : LARGE_INTEGER,                    // LARGE_INTEGER
	JobMemory                    : DWORD64,                          // DWORD64
	u                            : union({
		JobHighMemoryLimit : DWORD64, // DWORD64
		JobMemoryLimit     : DWORD64, // DWORD64
	}), // union
	u2                           : union({
		RateControlTolerance    : JOBOBJECT_RATE_CONTROL_TOLERANCE, // JOBOBJECT_RATE_CONTROL_TOLERANCE
		CpuRateControlTolerance : JOBOBJECT_RATE_CONTROL_TOLERANCE, // JOBOBJECT_RATE_CONTROL_TOLERANCE
	}), // union
	u3                           : union({
		RateControlToleranceLimit    : JOBOBJECT_RATE_CONTROL_TOLERANCE, // JOBOBJECT_RATE_CONTROL_TOLERANCE
		CpuRateControlToleranceLimit : JOBOBJECT_RATE_CONTROL_TOLERANCE, // JOBOBJECT_RATE_CONTROL_TOLERANCE
	}), // union
	JobLowMemoryLimit            : DWORD64,                          // DWORD64
	IoRateControlTolerance       : JOBOBJECT_RATE_CONTROL_TOLERANCE, // JOBOBJECT_RATE_CONTROL_TOLERANCE
	IoRateControlToleranceLimit  : JOBOBJECT_RATE_CONTROL_TOLERANCE, // JOBOBJECT_RATE_CONTROL_TOLERANCE
	NetRateControlTolerance      : JOBOBJECT_RATE_CONTROL_TOLERANCE, // JOBOBJECT_RATE_CONTROL_TOLERANCE
	NetRateControlToleranceLimit : JOBOBJECT_RATE_CONTROL_TOLERANCE, // JOBOBJECT_RATE_CONTROL_TOLERANCE
});

export const JOBOBJECT_CPU_RATE_CONTROL_INFORMATION = struct({
	ControlFlags : DWORD, // DWORD
	u            : union({
		CpuRate : DWORD,  // DWORD
		Weight  : DWORD,  // DWORD
		s       : struct({
			MinRate : WORD, // WORD
			MaxRate : WORD, // WORD
		}), // struct
	}), // union
});
export const PJOBOBJECT_CPU_RATE_CONTROL_INFORMATION = pointer(JOBOBJECT_CPU_RATE_CONTROL_INFORMATION);

export const JOBOBJECT_NET_RATE_CONTROL_INFORMATION = struct({
	MaxBandwidth : DWORD64,                           // DWORD64
	ControlFlags : JOB_OBJECT_NET_RATE_CONTROL_FLAGS, // JOB_OBJECT_NET_RATE_CONTROL_FLAGS
	DscpTag      : BYTE,                              // BYTE
});

export const JOBOBJECT_IO_RATE_CONTROL_INFORMATION_NATIVE = struct({
	MaxIops          : LONG64,                           // LONG64
	MaxBandwidth     : LONG64,                           // LONG64
	ReservationIops  : LONG64,                           // LONG64
	VolumeName       : PWSTR,                            // PWSTR
	BaseIoSize       : DWORD,                            // DWORD
	ControlFlags     : JOB_OBJECT_IO_RATE_CONTROL_FLAGS, // JOB_OBJECT_IO_RATE_CONTROL_FLAGS
	VolumeNameLength : WORD,                             // WORD
});
export const JOBOBJECT_IO_RATE_CONTROL_INFORMATION_NATIVE_V1 = JOBOBJECT_IO_RATE_CONTROL_INFORMATION_NATIVE;

export const JOBOBJECT_IO_RATE_CONTROL_INFORMATION_NATIVE_V2 = struct({
	MaxIops                        : LONG64,                           // LONG64
	MaxBandwidth                   : LONG64,                           // LONG64
	ReservationIops                : LONG64,                           // LONG64
	VolumeName                     : PWSTR,                            // PWSTR
	BaseIoSize                     : DWORD,                            // DWORD
	ControlFlags                   : JOB_OBJECT_IO_RATE_CONTROL_FLAGS, // JOB_OBJECT_IO_RATE_CONTROL_FLAGS
	VolumeNameLength               : WORD,                             // WORD
	CriticalReservationIops        : LONG64,                           // LONG64
	ReservationBandwidth           : LONG64,                           // LONG64
	CriticalReservationBandwidth   : LONG64,                           // LONG64
	MaxTimePercent                 : LONG64,                           // LONG64
	ReservationTimePercent         : LONG64,                           // LONG64
	CriticalReservationTimePercent : LONG64,                           // LONG64
});

export const JOBOBJECT_IO_RATE_CONTROL_INFORMATION_NATIVE_V3 = struct({
	MaxIops                        : LONG64,                           // LONG64
	MaxBandwidth                   : LONG64,                           // LONG64
	ReservationIops                : LONG64,                           // LONG64
	VolumeName                     : PWSTR,                            // PWSTR
	BaseIoSize                     : DWORD,                            // DWORD
	ControlFlags                   : JOB_OBJECT_IO_RATE_CONTROL_FLAGS, // JOB_OBJECT_IO_RATE_CONTROL_FLAGS
	VolumeNameLength               : WORD,                             // WORD
	CriticalReservationIops        : LONG64,                           // LONG64
	ReservationBandwidth           : LONG64,                           // LONG64
	CriticalReservationBandwidth   : LONG64,                           // LONG64
	MaxTimePercent                 : LONG64,                           // LONG64
	ReservationTimePercent         : LONG64,                           // LONG64
	CriticalReservationTimePercent : LONG64,                           // LONG64
	SoftMaxIops                    : LONG64,                           // LONG64
	SoftMaxBandwidth               : LONG64,                           // LONG64
	SoftMaxTimePercent             : LONG64,                           // LONG64
	LimitExcessNotifyIops          : LONG64,                           // LONG64
	LimitExcessNotifyBandwidth     : LONG64,                           // LONG64
	LimitExcessNotifyTimePercent   : LONG64,                           // LONG64
});

export const JOBOBJECT_IO_ATTRIBUTION_STATS = struct({
	IoCount                       : ULONG_PTR, // ULONG_PTR
	TotalNonOverlappedQueueTime   : ULONGLONG, // ULONGLONG
	TotalNonOverlappedServiceTime : ULONGLONG, // ULONGLONG
	TotalSize                     : ULONGLONG, // ULONGLONG
});
export const PJOBOBJECT_IO_ATTRIBUTION_STATS = pointer(JOBOBJECT_IO_ATTRIBUTION_STATS);

export const JOBOBJECT_IO_ATTRIBUTION_INFORMATION = struct({
	ControlFlags : DWORD,                          // DWORD
	ReadStats    : JOBOBJECT_IO_ATTRIBUTION_STATS, // JOBOBJECT_IO_ATTRIBUTION_STATS
	WriteStats   : JOBOBJECT_IO_ATTRIBUTION_STATS, // JOBOBJECT_IO_ATTRIBUTION_STATS
});
export const PJOBOBJECT_IO_ATTRIBUTION_INFORMATION = pointer(JOBOBJECT_IO_ATTRIBUTION_INFORMATION);

export const SILOOBJECT_BASIC_INFORMATION = struct({
	SiloId            : DWORD,          // DWORD
	SiloParentId      : DWORD,          // DWORD
	NumberOfProcesses : DWORD,          // DWORD
	IsInServerSilo    : BOOLEAN,        // BOOLEAN
	Reserved          : array(BYTE, 3), // BYTE
});
export const PSILOOBJECT_BASIC_INFORMATION = pointer(SILOOBJECT_BASIC_INFORMATION);

export const SERVERSILO_BASIC_INFORMATION = struct({
	ServiceSessionId     : DWORD,            // DWORD
	State                : SERVERSILO_STATE, // SERVERSILO_STATE
	ExitStatus           : DWORD,            // DWORD
	IsDownlevelContainer : BOOLEAN,          // BOOLEAN
	ApiSetSchema         : PVOID,            // PVOID
	HostApiSetSchema     : PVOID,            // PVOID
});
export const PSERVERSILO_BASIC_INFORMATION = pointer(SERVERSILO_BASIC_INFORMATION);

export const CACHE_DESCRIPTOR = struct({
	Level         : BYTE,                 // BYTE
	Associativity : BYTE,                 // BYTE
	LineSize      : WORD,                 // WORD
	Size          : DWORD,                // DWORD
	Type          : PROCESSOR_CACHE_TYPE, // PROCESSOR_CACHE_TYPE
});
export const PCACHE_DESCRIPTOR = pointer(CACHE_DESCRIPTOR);

export const SYSTEM_LOGICAL_PROCESSOR_INFORMATION = struct({
	ProcessorMask : ULONG_PTR,                      // ULONG_PTR
	Relationship  : LOGICAL_PROCESSOR_RELATIONSHIP, // LOGICAL_PROCESSOR_RELATIONSHIP
	u             : union({
		ProcessorCore : struct({
			Flags : BYTE, // BYTE
		}), // struct
		NumaNode      : struct({
			NodeNumber : DWORD, // DWORD
		}), // struct
		Cache         : CACHE_DESCRIPTOR,    // CACHE_DESCRIPTOR
		Reserved      : array(ULONGLONG, 2), // ULONGLONG
	}), // union
});
export const PSYSTEM_LOGICAL_PROCESSOR_INFORMATION = pointer(SYSTEM_LOGICAL_PROCESSOR_INFORMATION);

export const PROCESSOR_RELATIONSHIP = struct({
	Flags           : BYTE,                                 // BYTE
	EfficiencyClass : BYTE,                                 // BYTE
	Reserved        : array(BYTE, 20),                      // BYTE
	GroupCount      : WORD,                                 // WORD
	GroupMask       : array(GROUP_AFFINITY, ANYSIZE_ARRAY), // GROUP_AFFINITY
});
export const PPROCESSOR_RELATIONSHIP = pointer(PROCESSOR_RELATIONSHIP);

export const NUMA_NODE_RELATIONSHIP = struct({
	NodeNumber : DWORD,           // DWORD
	Reserved   : array(BYTE, 20), // BYTE
	GroupMask  : GROUP_AFFINITY,  // GROUP_AFFINITY
});
export const PNUMA_NODE_RELATIONSHIP = pointer(NUMA_NODE_RELATIONSHIP);

export const CACHE_RELATIONSHIP = struct({
	Level         : BYTE,                 // BYTE
	Associativity : BYTE,                 // BYTE
	LineSize      : WORD,                 // WORD
	CacheSize     : DWORD,                // DWORD
	Type          : PROCESSOR_CACHE_TYPE, // PROCESSOR_CACHE_TYPE
	Reserved      : array(BYTE, 20),      // BYTE
	GroupMask     : GROUP_AFFINITY,       // GROUP_AFFINITY
});
export const PCACHE_RELATIONSHIP = pointer(CACHE_RELATIONSHIP);

export const PROCESSOR_GROUP_INFO = struct({
	MaximumProcessorCount : BYTE,            // BYTE
	ActiveProcessorCount  : BYTE,            // BYTE
	Reserved              : array(BYTE, 38), // BYTE
	ActiveProcessorMask   : KAFFINITY,       // KAFFINITY
});
export const PPROCESSOR_GROUP_INFO = pointer(PROCESSOR_GROUP_INFO);

export const GROUP_RELATIONSHIP = struct({
	MaximumGroupCount : WORD,                                       // WORD
	ActiveGroupCount  : WORD,                                       // WORD
	Reserved          : array(BYTE, 20),                            // BYTE
	GroupInfo         : array(PROCESSOR_GROUP_INFO, ANYSIZE_ARRAY), // PROCESSOR_GROUP_INFO
});
export const PGROUP_RELATIONSHIP = pointer(GROUP_RELATIONSHIP);

export const SYSTEM_POOL_ZEROING_INFORMATION = struct({
	PoolZeroingSupportPresent : BOOLEAN, // BOOLEAN
});
export const PSYSTEM_POOL_ZEROING_INFORMATION = pointer(SYSTEM_POOL_ZEROING_INFORMATION);

export const SYSTEM_PROCESSOR_CYCLE_TIME_INFORMATION = struct({
	CycleTime : DWORD64, // DWORD64
});
export const PSYSTEM_PROCESSOR_CYCLE_TIME_INFORMATION = pointer(SYSTEM_PROCESSOR_CYCLE_TIME_INFORMATION);

export const XSTATE_FEATURE = struct({
	Offset : DWORD, // DWORD
	Size   : DWORD, // DWORD
});
export const PXSTATE_FEATURE = pointer(XSTATE_FEATURE);

export const MEMORY_BASIC_INFORMATION = struct({
	BaseAddress       : PVOID,  // PVOID
	AllocationBase    : PVOID,  // PVOID
	AllocationProtect : DWORD,  // DWORD
	PartitionId       : WORD,   // WORD   // #if defined (_WIN64)
	RegionSize        : SIZE_T, // SIZE_T
	State             : DWORD,  // DWORD
	Protect           : DWORD,  // DWORD
	Type              : DWORD,  // DWORD
});
export const PMEMORY_BASIC_INFORMATION = pointer(MEMORY_BASIC_INFORMATION);

export const MEMORY_BASIC_INFORMATION32 = struct({
	BaseAddress       : DWORD, // DWORD
	AllocationBase    : DWORD, // DWORD
	AllocationProtect : DWORD, // DWORD
	RegionSize        : DWORD, // DWORD
	State             : DWORD, // DWORD
	Protect           : DWORD, // DWORD
	Type              : DWORD, // DWORD
});
export const PMEMORY_BASIC_INFORMATION32 = pointer(MEMORY_BASIC_INFORMATION32);

export const MEMORY_BASIC_INFORMATION64 = struct({
	BaseAddress       : ULONGLONG, // ULONGLONG
	AllocationBase    : ULONGLONG, // ULONGLONG
	AllocationProtect : DWORD,     // DWORD
	__alignment1      : DWORD,     // DWORD
	RegionSize        : ULONGLONG, // ULONGLONG
	State             : DWORD,     // DWORD
	Protect           : DWORD,     // DWORD
	Type              : DWORD,     // DWORD
	__alignment2      : DWORD,     // DWORD
}/*, {alignment: 16}*/);
export const PMEMORY_BASIC_INFORMATION64 = pointer(MEMORY_BASIC_INFORMATION64);

export const CFG_CALL_TARGET_INFO = struct({
	Offset : ULONG_PTR, // ULONG_PTR
	Flags  : ULONG_PTR, // ULONG_PTR
});
export const PCFG_CALL_TARGET_INFO = pointer(CFG_CALL_TARGET_INFO);

export const MEM_ADDRESS_REQUIREMENTS = struct({
	LowestStartingAddress : PVOID,  // PVOID
	HighestEndingAddress  : PVOID,  // PVOID
	Alignment             : SIZE_T, // SIZE_T
});
export const PMEM_ADDRESS_REQUIREMENTS = pointer(MEM_ADDRESS_REQUIREMENTS);

export const MEM_EXTENDED_PARAMETER = struct({
	s : struct({
		Type     : bitfield(DWORD64, MEM_EXTENDED_PARAMETER_TYPE_BITS),      // DWORD64
		Reserved : bitfield(DWORD64, 64 - MEM_EXTENDED_PARAMETER_TYPE_BITS), // DWORD64
	}), // struct
	u : union({
		ULong64 : DWORD64, // DWORD64
		Pointer : PVOID,   // PVOID
		Size    : SIZE_T,  // SIZE_T
		Handle  : HANDLE,  // HANDLE
		ULong   : DWORD,   // DWORD
	}), // union
}/*, {alignment: 8}*/);
export const PMEM_EXTENDED_PARAMETER = pointer(MEM_EXTENDED_PARAMETER);

export const ENCLAVE_CREATE_INFO_SGX = struct({
	Secs : array(BYTE, 4096), // BYTE
});
export const PENCLAVE_CREATE_INFO_SGX = pointer(ENCLAVE_CREATE_INFO_SGX);

export const ENCLAVE_INIT_INFO_SGX = struct({
	SigStruct  : array(BYTE, 1808), // BYTE
	Reserved1  : array(BYTE, 240),  // BYTE
	EInitToken : array(BYTE, 304),  // BYTE
	Reserved2  : array(BYTE, 1744), // BYTE
});
export const PENCLAVE_INIT_INFO_SGX = pointer(ENCLAVE_INIT_INFO_SGX);

export const ENCLAVE_CREATE_INFO_VBS = struct({
	Flags   : DWORD,           // DWORD
	OwnerID : array(BYTE, 32), // BYTE
});
export const PENCLAVE_CREATE_INFO_VBS = pointer(ENCLAVE_CREATE_INFO_VBS);

export const ENCLAVE_CREATE_INFO_VBS_BASIC = struct({
	Flags   : DWORD,           // DWORD
	OwnerID : array(BYTE, 32), // BYTE
});
export const PENCLAVE_CREATE_INFO_VBS_BASIC = pointer(ENCLAVE_CREATE_INFO_VBS_BASIC);

export const ENCLAVE_LOAD_DATA_VBS_BASIC = struct({
	PageType : DWORD, // DWORD
});
export const PENCLAVE_LOAD_DATA_VBS_BASIC = pointer(ENCLAVE_LOAD_DATA_VBS_BASIC);

export const ENCLAVE_INIT_INFO_VBS_BASIC = struct({
	FamilyId    : array(BYTE, ENCLAVE_SHORT_ID_LENGTH), // BYTE
	ImageId     : array(BYTE, ENCLAVE_SHORT_ID_LENGTH), // BYTE
	EnclaveSize : ULONGLONG,                            // ULONGLONG
	EnclaveSvn  : DWORD,                                // DWORD
	Reserved    : DWORD,                                // DWORD
	u           : union({
		SignatureInfoHandle : HANDLE,    // HANDLE
		Unused              : ULONGLONG, // ULONGLONG
	}), // union
});
export const PENCLAVE_INIT_INFO_VBS_BASIC = pointer(ENCLAVE_INIT_INFO_VBS_BASIC);

export const ENCLAVE_INIT_INFO_VBS = struct({
	Length      : DWORD, // DWORD
	ThreadCount : DWORD, // DWORD
});
export const PENCLAVE_INIT_INFO_VBS = pointer(ENCLAVE_INIT_INFO_VBS);

export const FILE_ID_128 = struct({
	Identifier : array(BYTE, 16), // BYTE
});
export const PFILE_ID_128 = pointer(FILE_ID_128);

export const FILE_NOTIFY_INFORMATION = struct({
	NextEntryOffset : DWORD,                     // DWORD
	Action          : DWORD,                     // DWORD
	FileNameLength  : DWORD,                     // DWORD
	FileName        : array(WCHAR, 1, "String"), // WCHAR
});
export const PFILE_NOTIFY_INFORMATION = pointer(FILE_NOTIFY_INFORMATION);

export const FILE_NOTIFY_EXTENDED_INFORMATION = struct({
	NextEntryOffset      : DWORD,                     // DWORD
	Action               : DWORD,                     // DWORD
	CreationTime         : LARGE_INTEGER,             // LARGE_INTEGER
	LastModificationTime : LARGE_INTEGER,             // LARGE_INTEGER
	LastChangeTime       : LARGE_INTEGER,             // LARGE_INTEGER
	LastAccessTime       : LARGE_INTEGER,             // LARGE_INTEGER
	AllocatedLength      : LARGE_INTEGER,             // LARGE_INTEGER
	FileSize             : LARGE_INTEGER,             // LARGE_INTEGER
	FileAttributes       : DWORD,                     // DWORD
	ReparsePointTag      : DWORD,                     // DWORD
	FileId               : LARGE_INTEGER,             // LARGE_INTEGER
	ParentFileId         : LARGE_INTEGER,             // LARGE_INTEGER
	FileNameLength       : DWORD,                     // DWORD
	FileName             : array(WCHAR, 1, "String"), // WCHAR
});
export const PFILE_NOTIFY_EXTENDED_INFORMATION = pointer(FILE_NOTIFY_EXTENDED_INFORMATION);

export const FILE_SEGMENT_ELEMENT = union({
	Buffer    : PVOID64,   // PVOID64
	Alignment : ULONGLONG, // ULONGLONG
});
export const PFILE_SEGMENT_ELEMENT = pointer(FILE_SEGMENT_ELEMENT);

export const REPARSE_GUID_DATA_BUFFER = struct({
	ReparseTag           : DWORD,  // DWORD
	ReparseDataLength    : WORD,   // WORD
	Reserved             : WORD,   // WORD
	ReparseGuid          : GUID,   // GUID
	GenericReparseBuffer : struct({
		DataBuffer : array(BYTE, 1), // BYTE
	}), // struct
});
export const PREPARSE_GUID_DATA_BUFFER = pointer(REPARSE_GUID_DATA_BUFFER);

export const SCRUB_DATA_INPUT = struct({
	Size          : DWORD,            // DWORD
	Flags         : DWORD,            // DWORD
	MaximumIos    : DWORD,            // DWORD
	ObjectId      : array(DWORD, 4),  // DWORD
	Reserved      : array(DWORD, 25), // DWORD
	ResumeContext : array(BYTE, 816), // BYTE
});
export const PSCRUB_DATA_INPUT = pointer(SCRUB_DATA_INPUT);

export const SCRUB_PARITY_EXTENT = struct({
	Offset : LONGLONG,  // LONGLONG
	Length : ULONGLONG, // ULONGLONG
});
export const PSCRUB_PARITY_EXTENT = pointer(SCRUB_PARITY_EXTENT);

export const SCRUB_PARITY_EXTENT_DATA = struct({
	Size                         : WORD,                                      // WORD
	Flags                        : WORD,                                      // WORD
	NumberOfParityExtents        : WORD,                                      // WORD
	MaximumNumberOfParityExtents : WORD,                                      // WORD
	ParityExtents                : array(SCRUB_PARITY_EXTENT, ANYSIZE_ARRAY), // SCRUB_PARITY_EXTENT
});
export const PSCRUB_PARITY_EXTENT_DATA = pointer(SCRUB_PARITY_EXTENT_DATA);

export const SCRUB_DATA_OUTPUT = struct({
	Size                            : DWORD,            // DWORD
	Flags                           : DWORD,            // DWORD
	Status                          : DWORD,            // DWORD
	ErrorFileOffset                 : ULONGLONG,        // ULONGLONG
	ErrorLength                     : ULONGLONG,        // ULONGLONG
	NumberOfBytesRepaired           : ULONGLONG,        // ULONGLONG
	NumberOfBytesFailed             : ULONGLONG,        // ULONGLONG
	InternalFileReference           : ULONGLONG,        // ULONGLONG
	ResumeContextLength             : WORD,             // WORD
	ParityExtentDataOffset          : WORD,             // WORD
	Reserved                        : array(DWORD, 9),  // DWORD
	NumberOfMetadataBytesProcessed  : ULONGLONG,        // ULONGLONG
	NumberOfDataBytesProcessed      : ULONGLONG,        // ULONGLONG
	TotalNumberOfMetadataBytesInUse : ULONGLONG,        // ULONGLONG
	TotalNumberOfDataBytesInUse     : ULONGLONG,        // ULONGLONG
	ResumeContext                   : array(BYTE, 816), // BYTE
});
export const PSCRUB_DATA_OUTPUT = pointer(SCRUB_DATA_OUTPUT);

export const SHARED_VIRTUAL_DISK_SUPPORT = struct({
	SharedVirtualDiskSupport : SharedVirtualDiskSupportType, // SharedVirtualDiskSupportType
	HandleState              : SharedVirtualDiskHandleState, // SharedVirtualDiskHandleState
});
export const PSHARED_VIRTUAL_DISK_SUPPORT = pointer(SHARED_VIRTUAL_DISK_SUPPORT);

export const REARRANGE_FILE_DATA = struct({
	SourceStartingOffset : ULONGLONG, // ULONGLONG
	TargetOffset         : ULONGLONG, // ULONGLONG
	SourceFileHandle     : HANDLE,    // HANDLE
	Length               : DWORD,     // DWORD
	Flags                : DWORD,     // DWORD
});
export const PREARRANGE_FILE_DATA = pointer(REARRANGE_FILE_DATA);

export const REARRANGE_FILE_DATA32 = struct({
	SourceStartingOffset : ULONGLONG, // ULONGLONG
	TargetOffset         : ULONGLONG, // ULONGLONG
	SourceFileHandle     : UINT32,    // UINT32
	Length               : DWORD,     // DWORD
	Flags                : DWORD,     // DWORD
});
export const PREARRANGE_FILE_DATA32 = pointer(REARRANGE_FILE_DATA32);

export const SHUFFLE_FILE_DATA = struct({
	StartingOffset : LONGLONG, // LONGLONG
	Length         : LONGLONG, // LONGLONG
	Flags          : DWORD,    // DWORD
});
export const PSHUFFLE_FILE_DATA = pointer(SHUFFLE_FILE_DATA);

export const NETWORK_APP_INSTANCE_EA = struct({
	AppInstanceID : GUID,  // GUID
	CsvFlags      : DWORD, // DWORD
});
export const PNETWORK_APP_INSTANCE_EA = pointer(NETWORK_APP_INSTANCE_EA);

export const CM_POWER_DATA = struct({
	PD_Size                 : DWORD,                                           // DWORD
	PD_MostRecentPowerState : DEVICE_POWER_STATE,                              // DEVICE_POWER_STATE
	PD_Capabilities         : DWORD,                                           // DWORD
	PD_D1Latency            : DWORD,                                           // DWORD
	PD_D2Latency            : DWORD,                                           // DWORD
	PD_D3Latency            : DWORD,                                           // DWORD
	PD_PowerStateMapping    : array(DEVICE_POWER_STATE, POWER_SYSTEM_MAXIMUM), // DEVICE_POWER_STATE
	PD_DeepestSystemWake    : SYSTEM_POWER_STATE,                              // SYSTEM_POWER_STATE
});
export const PCM_POWER_DATA = pointer(CM_POWER_DATA);

export const POWER_USER_PRESENCE = struct({
	UserPresence : POWER_USER_PRESENCE_TYPE, // POWER_USER_PRESENCE_TYPE
});
export const PPOWER_USER_PRESENCE = pointer(POWER_USER_PRESENCE);

export const POWER_SESSION_CONNECT = struct({
	Connected : BOOLEAN, // BOOLEAN // TRUE - connected, FALSE - disconnected
	Console   : BOOLEAN, // BOOLEAN // TRUE - console, FALSE - TS (not used for Connected = FALSE)
});
export const PPOWER_SESSION_CONNECT = pointer(POWER_SESSION_CONNECT);

export const POWER_SESSION_TIMEOUTS = struct({
	InputTimeout   : DWORD, // DWORD
	DisplayTimeout : DWORD, // DWORD
});
export const PPOWER_SESSION_TIMEOUTS = pointer(POWER_SESSION_TIMEOUTS);

export const POWER_SESSION_RIT_STATE = struct({
	Active        : BOOLEAN, // BOOLEAN // TRUE - RIT input received, FALSE - RIT timeout
	LastInputTime : DWORD,   // DWORD   // last input time held for this session
});
export const PPOWER_SESSION_RIT_STATE = pointer(POWER_SESSION_RIT_STATE);

export const POWER_SESSION_WINLOGON = struct({
	SessionId : DWORD,   // DWORD   // the Win32k session identifier
	Console   : BOOLEAN, // BOOLEAN // TRUE - for console session, FALSE - for remote session
	Locked    : BOOLEAN, // BOOLEAN // TRUE - lock, FALSE - unlock
});
export const PPOWER_SESSION_WINLOGON = pointer(POWER_SESSION_WINLOGON);

export const POWER_SESSION_ALLOW_EXTERNAL_DMA_DEVICES = struct({
	IsAllowed : BOOLEAN, // BOOLEAN
});
export const PPOWER_SESSION_ALLOW_EXTERNAL_DMA_DEVICES = pointer(POWER_SESSION_ALLOW_EXTERNAL_DMA_DEVICES);

export const POWER_IDLE_RESILIENCY = struct({
	CoalescingTimeout    : DWORD, // DWORD
	IdleResiliencyPeriod : DWORD, // DWORD
});
export const PPOWER_IDLE_RESILIENCY = pointer(POWER_IDLE_RESILIENCY);

export const POWER_MONITOR_INVOCATION = struct({
	Console       : BOOLEAN,                      // BOOLEAN
	RequestReason : POWER_MONITOR_REQUEST_REASON, // POWER_MONITOR_REQUEST_REASON
});
export const PPOWER_MONITOR_INVOCATION = pointer(POWER_MONITOR_INVOCATION);

export const RESUME_PERFORMANCE = struct({
	PostTimeMs              : DWORD,     // DWORD
	TotalResumeTimeMs       : ULONGLONG, // ULONGLONG
	ResumeCompleteTimestamp : ULONGLONG, // ULONGLONG
});
export const PRESUME_PERFORMANCE = pointer(RESUME_PERFORMANCE);

export const SET_POWER_SETTING_VALUE = struct({
	Version        : DWORD,                      // DWORD
	Guid           : GUID,                       // GUID
	PowerCondition : SYSTEM_POWER_CONDITION,     // SYSTEM_POWER_CONDITION
	DataLength     : DWORD,                      // DWORD
	Data           : array(BYTE, ANYSIZE_ARRAY), // BYTE
});
export const PSET_POWER_SETTING_VALUE = pointer(SET_POWER_SETTING_VALUE);

export const NOTIFY_USER_POWER_SETTING = struct({
	Guid : GUID, // GUID
});
export const PNOTIFY_USER_POWER_SETTING = pointer(NOTIFY_USER_POWER_SETTING);

export const APPLICATIONLAUNCH_SETTING_VALUE = struct({
	ActivationTime   : LARGE_INTEGER, // LARGE_INTEGER
	Flags            : DWORD,         // DWORD
	ButtonInstanceID : DWORD,         // DWORD
});
export const PAPPLICATIONLAUNCH_SETTING_VALUE = pointer(APPLICATIONLAUNCH_SETTING_VALUE);

export const POWER_PLATFORM_INFORMATION = struct({
	AoAc : BOOLEAN, // BOOLEAN
});
export const PPOWER_PLATFORM_INFORMATION = pointer(POWER_PLATFORM_INFORMATION);

export const BATTERY_REPORTING_SCALE = struct({
	Granularity : DWORD, // DWORD
	Capacity    : DWORD, // DWORD
});
export const PBATTERY_REPORTING_SCALE = pointer(BATTERY_REPORTING_SCALE);

export const PPM_WMI_LEGACY_PERFSTATE = struct({
	Frequency        : DWORD, // DWORD
	Flags            : DWORD, // DWORD
	PercentFrequency : DWORD, // DWORD
});
export const PPPM_WMI_LEGACY_PERFSTATE = pointer(PPM_WMI_LEGACY_PERFSTATE);

export const PPM_WMI_IDLE_STATE = struct({
	Latency        : DWORD, // DWORD
	Power          : DWORD, // DWORD
	TimeCheck      : DWORD, // DWORD
	PromotePercent : BYTE,  // BYTE
	DemotePercent  : BYTE,  // BYTE
	StateType      : BYTE,  // BYTE
	Reserved       : BYTE,  // BYTE
	StateFlags     : DWORD, // DWORD
	Context        : DWORD, // DWORD
	IdleHandler    : DWORD, // DWORD
	Reserved1      : DWORD, // DWORD // reserved for future use
});
export const PPPM_WMI_IDLE_STATE = pointer(PPM_WMI_IDLE_STATE);

export const PPM_WMI_IDLE_STATES = struct({
	Type             : DWORD,                                    // DWORD
	Count            : DWORD,                                    // DWORD
	TargetState      : DWORD,                                    // DWORD              // current idle state
	OldState         : DWORD,                                    // DWORD              // previous idle state
	TargetProcessors : DWORD64,                                  // DWORD64
	State            : array(PPM_WMI_IDLE_STATE, ANYSIZE_ARRAY), // PPM_WMI_IDLE_STATE
});
export const PPPM_WMI_IDLE_STATES = pointer(PPM_WMI_IDLE_STATES);

export const PPM_WMI_IDLE_STATES_EX = struct({
	Type             : DWORD,                                    // DWORD
	Count            : DWORD,                                    // DWORD
	TargetState      : DWORD,                                    // DWORD              // current idle state
	OldState         : DWORD,                                    // DWORD              // previous idle state
	TargetProcessors : PVOID,                                    // PVOID
	State            : array(PPM_WMI_IDLE_STATE, ANYSIZE_ARRAY), // PPM_WMI_IDLE_STATE
});
export const PPPM_WMI_IDLE_STATES_EX = pointer(PPM_WMI_IDLE_STATES_EX);

export const PPM_WMI_PERF_STATE = struct({
	Frequency        : DWORD,   // DWORD   // in Mhz
	Power            : DWORD,   // DWORD   // in milliwatts
	PercentFrequency : BYTE,    // BYTE
	IncreaseLevel    : BYTE,    // BYTE    // goto higher state
	DecreaseLevel    : BYTE,    // BYTE    // goto lower state
	Type             : BYTE,    // BYTE    // performance or throttle
	IncreaseTime     : DWORD,   // DWORD   // in tick counts
	DecreaseTime     : DWORD,   // DWORD   // in tick counts
	Control          : DWORD64, // DWORD64 // control value
	Status           : DWORD64, // DWORD64 // control value
	HitCount         : DWORD,   // DWORD
	Reserved1        : DWORD,   // DWORD   // reserved for future use
	Reserved2        : DWORD64, // DWORD64
	Reserved3        : DWORD64, // DWORD64
});
export const PPPM_WMI_PERF_STATE = pointer(PPM_WMI_PERF_STATE);

export const PPM_WMI_PERF_STATES = struct({
	Count             : DWORD,                                    // DWORD
	MaxFrequency      : DWORD,                                    // DWORD
	CurrentState      : DWORD,                                    // DWORD              // current state
	MaxPerfState      : DWORD,                                    // DWORD              // fastest state considering policy restrictions
	MinPerfState      : DWORD,                                    // DWORD              // slowest state considering policy restrictions
	LowestPerfState   : DWORD,                                    // DWORD              // slowest perf state, fixed, aka the "knee"
	ThermalConstraint : DWORD,                                    // DWORD
	BusyAdjThreshold  : BYTE,                                     // BYTE
	PolicyType        : BYTE,                                     // BYTE               // domain coordination
	Type              : BYTE,                                     // BYTE
	Reserved          : BYTE,                                     // BYTE
	TimerInterval     : DWORD,                                    // DWORD
	TargetProcessors  : DWORD64,                                  // DWORD64            // domain affinity
	PStateHandler     : DWORD,                                    // DWORD
	PStateContext     : DWORD,                                    // DWORD
	TStateHandler     : DWORD,                                    // DWORD
	TStateContext     : DWORD,                                    // DWORD
	FeedbackHandler   : DWORD,                                    // DWORD
	Reserved1         : DWORD,                                    // DWORD
	Reserved2         : DWORD64,                                  // DWORD64
	State             : array(PPM_WMI_PERF_STATE, ANYSIZE_ARRAY), // PPM_WMI_PERF_STATE
});
export const PPPM_WMI_PERF_STATES = pointer(PPM_WMI_PERF_STATES);

export const PPM_WMI_PERF_STATES_EX = struct({
	Count             : DWORD,                                    // DWORD
	MaxFrequency      : DWORD,                                    // DWORD
	CurrentState      : DWORD,                                    // DWORD              // current state
	MaxPerfState      : DWORD,                                    // DWORD              // fastest state considering policy restrictions
	MinPerfState      : DWORD,                                    // DWORD              // slowest state considering policy restrictions
	LowestPerfState   : DWORD,                                    // DWORD              // slowest perf state, fixed, aka the "knee"
	ThermalConstraint : DWORD,                                    // DWORD
	BusyAdjThreshold  : BYTE,                                     // BYTE
	PolicyType        : BYTE,                                     // BYTE               // domain coordination
	Type              : BYTE,                                     // BYTE
	Reserved          : BYTE,                                     // BYTE
	TimerInterval     : DWORD,                                    // DWORD
	TargetProcessors  : PVOID,                                    // PVOID              // domain affinity
	PStateHandler     : DWORD,                                    // DWORD
	PStateContext     : DWORD,                                    // DWORD
	TStateHandler     : DWORD,                                    // DWORD
	TStateContext     : DWORD,                                    // DWORD
	FeedbackHandler   : DWORD,                                    // DWORD
	Reserved1         : DWORD,                                    // DWORD
	Reserved2         : DWORD64,                                  // DWORD64
	State             : array(PPM_WMI_PERF_STATE, ANYSIZE_ARRAY), // PPM_WMI_PERF_STATE
});
export const PPPM_WMI_PERF_STATES_EX = pointer(PPM_WMI_PERF_STATES_EX);

export const PPM_IDLE_STATE_ACCOUNTING = struct({
	IdleTransitions    : DWORD,                                // DWORD
	FailedTransitions  : DWORD,                                // DWORD
	InvalidBucketIndex : DWORD,                                // DWORD
	TotalTime          : DWORD64,                              // DWORD64
	IdleTimeBuckets    : array(DWORD, PROC_IDLE_BUCKET_COUNT), // DWORD
});
export const PPPM_IDLE_STATE_ACCOUNTING = pointer(PPM_IDLE_STATE_ACCOUNTING);

export const PPM_IDLE_ACCOUNTING = struct({
	StateCount       : DWORD,                                           // DWORD
	TotalTransitions : DWORD,                                           // DWORD
	ResetCount       : DWORD,                                           // DWORD
	StartTime        : DWORD64,                                         // DWORD64
	State            : array(PPM_IDLE_STATE_ACCOUNTING, ANYSIZE_ARRAY), // PPM_IDLE_STATE_ACCOUNTING
});
export const PPPM_IDLE_ACCOUNTING = pointer(PPM_IDLE_ACCOUNTING);

export const PPM_IDLE_STATE_BUCKET_EX = struct({
	TotalTimeUs : DWORD64, // DWORD64
	MinTimeUs   : DWORD,   // DWORD
	MaxTimeUs   : DWORD,   // DWORD
	Count       : DWORD,   // DWORD
});
export const PPPM_IDLE_STATE_BUCKET_EX = pointer(PPM_IDLE_STATE_BUCKET_EX);

export const PPM_IDLE_STATE_ACCOUNTING_EX = struct({
	TotalTime            : DWORD64,                                                    // DWORD64
	IdleTransitions      : DWORD,                                                      // DWORD
	FailedTransitions    : DWORD,                                                      // DWORD
	InvalidBucketIndex   : DWORD,                                                      // DWORD
	MinTimeUs            : DWORD,                                                      // DWORD
	MaxTimeUs            : DWORD,                                                      // DWORD
	CancelledTransitions : DWORD,                                                      // DWORD
	IdleTimeBuckets      : array(PPM_IDLE_STATE_BUCKET_EX, PROC_IDLE_BUCKET_COUNT_EX), // PPM_IDLE_STATE_BUCKET_EX
});
export const PPPM_IDLE_STATE_ACCOUNTING_EX = pointer(PPM_IDLE_STATE_ACCOUNTING_EX);

export const PPM_IDLE_ACCOUNTING_EX = struct({
	StateCount       : DWORD,                                              // DWORD
	TotalTransitions : DWORD,                                              // DWORD
	ResetCount       : DWORD,                                              // DWORD
	AbortCount       : DWORD,                                              // DWORD
	StartTime        : DWORD64,                                            // DWORD64
	State            : array(PPM_IDLE_STATE_ACCOUNTING_EX, ANYSIZE_ARRAY), // PPM_IDLE_STATE_ACCOUNTING_EX
});
export const PPPM_IDLE_ACCOUNTING_EX = pointer(PPM_IDLE_ACCOUNTING_EX);

export const PPM_PERFSTATE_EVENT = struct({
	State     : DWORD, // DWORD
	Status    : DWORD, // DWORD
	Latency   : DWORD, // DWORD
	Speed     : DWORD, // DWORD
	Processor : DWORD, // DWORD
});
export const PPPM_PERFSTATE_EVENT = pointer(PPM_PERFSTATE_EVENT);

export const PPM_PERFSTATE_DOMAIN_EVENT = struct({
	State      : DWORD,   // DWORD
	Latency    : DWORD,   // DWORD
	Speed      : DWORD,   // DWORD
	Processors : DWORD64, // DWORD64
});
export const PPPM_PERFSTATE_DOMAIN_EVENT = pointer(PPM_PERFSTATE_DOMAIN_EVENT);

export const PPM_IDLESTATE_EVENT = struct({
	NewState   : DWORD,   // DWORD
	OldState   : DWORD,   // DWORD
	Processors : DWORD64, // DWORD64
});
export const PPPM_IDLESTATE_EVENT = pointer(PPM_IDLESTATE_EVENT);

export const PPM_THERMALCHANGE_EVENT = struct({
	ThermalConstraint : DWORD,   // DWORD
	Processors        : DWORD64, // DWORD64
});
export const PPPM_THERMALCHANGE_EVENT = pointer(PPM_THERMALCHANGE_EVENT);

export const PPM_THERMAL_POLICY_EVENT = struct({
	Mode       : BYTE,    // BYTE
	Processors : DWORD64, // DWORD64
});
export const PPPM_THERMAL_POLICY_EVENT = pointer(PPM_THERMAL_POLICY_EVENT);

export const POWER_ACTION_POLICY = struct({
	Action    : POWER_ACTION, // POWER_ACTION
	Flags     : DWORD,        // DWORD
	EventCode : DWORD,        // DWORD
});
export const PPOWER_ACTION_POLICY = pointer(POWER_ACTION_POLICY);

export const SYSTEM_POWER_LEVEL = struct({
	Enable         : BOOLEAN,             // BOOLEAN
	Spare          : array(BYTE, 3),      // BYTE
	BatteryLevel   : DWORD,               // DWORD
	PowerPolicy    : POWER_ACTION_POLICY, // POWER_ACTION_POLICY
	MinSystemState : SYSTEM_POWER_STATE,  // SYSTEM_POWER_STATE
});
export const PSYSTEM_POWER_LEVEL = pointer(SYSTEM_POWER_LEVEL);

export const SYSTEM_POWER_POLICY = struct({
	Revision                    : DWORD,                                             // DWORD
	PowerButton                 : POWER_ACTION_POLICY,                               // POWER_ACTION_POLICY
	SleepButton                 : POWER_ACTION_POLICY,                               // POWER_ACTION_POLICY
	LidClose                    : POWER_ACTION_POLICY,                               // POWER_ACTION_POLICY
	LidOpenWake                 : SYSTEM_POWER_STATE,                                // SYSTEM_POWER_STATE
	Reserved                    : DWORD,                                             // DWORD               // "system idle" detection
	Idle                        : POWER_ACTION_POLICY,                               // POWER_ACTION_POLICY
	IdleTimeout                 : DWORD,                                             // DWORD
	IdleSensitivity             : BYTE,                                              // BYTE
	DynamicThrottle             : BYTE,                                              // BYTE
	Spare2                      : array(BYTE, 2),                                    // BYTE                // meaning of power action "sleep"
	MinSleep                    : SYSTEM_POWER_STATE,                                // SYSTEM_POWER_STATE
	MaxSleep                    : SYSTEM_POWER_STATE,                                // SYSTEM_POWER_STATE
	ReducedLatencySleep         : SYSTEM_POWER_STATE,                                // SYSTEM_POWER_STATE
	WinLogonFlags               : DWORD,                                             // DWORD
	Spare3                      : DWORD,                                             // DWORD               // parameters for dozing
	DozeS4Timeout               : DWORD,                                             // DWORD               // battery policies
	BroadcastCapacityResolution : DWORD,                                             // DWORD
	DischargePolicy             : array(SYSTEM_POWER_LEVEL, NUM_DISCHARGE_POLICIES), // SYSTEM_POWER_LEVEL  // video policies
	VideoTimeout                : DWORD,                                             // DWORD
	VideoDimDisplay             : BOOLEAN,                                           // BOOLEAN
	VideoReserved               : array(DWORD, 3),                                   // DWORD               // hard disk policies
	SpindownTimeout             : DWORD,                                             // DWORD               // processor policies
	OptimizeForPower            : BOOLEAN,                                           // BOOLEAN
	FanThrottleTolerance        : BYTE,                                              // BYTE
	ForcedThrottle              : BYTE,                                              // BYTE
	MinThrottle                 : BYTE,                                              // BYTE
	OverThrottled               : POWER_ACTION_POLICY,                               // POWER_ACTION_POLICY
});
export const PSYSTEM_POWER_POLICY = pointer(SYSTEM_POWER_POLICY);

export const PROCESSOR_IDLESTATE_INFO = struct({
	TimeCheck      : DWORD,          // DWORD
	DemotePercent  : BYTE,           // BYTE
	PromotePercent : BYTE,           // BYTE
	Spare          : array(BYTE, 2), // BYTE
});
export const PPROCESSOR_IDLESTATE_INFO = pointer(PROCESSOR_IDLESTATE_INFO);

export const PROCESSOR_IDLESTATE_POLICY = struct({
	Revision    : WORD,                                                              // WORD
	Flags       : union({
		AsWORD : WORD,   // WORD
		s      : struct({
			AllowScaling : bitfield(WORD, 1),  // WORD
			Disabled     : bitfield(WORD, 1),  // WORD
			Reserved     : bitfield(WORD, 14), // WORD
		}), // struct
	}), // union
	PolicyCount : DWORD,                                                             // DWORD
	Policy      : array(PROCESSOR_IDLESTATE_INFO, PROCESSOR_IDLESTATE_POLICY_COUNT), // PROCESSOR_IDLESTATE_INFO
});
export const PPROCESSOR_IDLESTATE_POLICY = pointer(PROCESSOR_IDLESTATE_POLICY);

export const PROCESSOR_POWER_POLICY_INFO = struct({
	TimeCheck      : DWORD,               // DWORD // in US
	DemoteLimit    : DWORD,               // DWORD // in US
	PromoteLimit   : DWORD,               // DWORD // in US
	DemotePercent  : BYTE,                // BYTE
	PromotePercent : BYTE,                // BYTE
	Spare          : array(BYTE, 2),      // BYTE  // Flags
	AllowDemotion  : bitfield(DWORD, 1),  // DWORD
	AllowPromotion : bitfield(DWORD, 1),  // DWORD
	Reserved       : bitfield(DWORD, 30), // DWORD
});
export const PPROCESSOR_POWER_POLICY_INFO = pointer(PROCESSOR_POWER_POLICY_INFO);

export const PROCESSOR_POWER_POLICY = struct({
	Revision        : DWORD,                                 // DWORD
	DynamicThrottle : BYTE,                                  // BYTE
	Spare           : array(BYTE, 3),                        // BYTE
	DisableCStates  : bitfield(DWORD, 1),                    // DWORD
	Reserved        : bitfield(DWORD, 31),                   // DWORD
	PolicyCount     : DWORD,                                 // DWORD
	Policy          : array(PROCESSOR_POWER_POLICY_INFO, 3), // PROCESSOR_POWER_POLICY_INFO
});
export const PPROCESSOR_POWER_POLICY = pointer(PROCESSOR_POWER_POLICY);

export const PROCESSOR_PERFSTATE_POLICY = struct({
	Revision         : DWORD, // DWORD
	MaxThrottle      : BYTE,  // BYTE
	MinThrottle      : BYTE,  // BYTE
	BusyAdjThreshold : BYTE,  // BYTE
	u                : union({
		Spare : BYTE,  // BYTE
		Flags : union({
			AsBYTE : BYTE,   // BYTE
			s      : struct({
				NoDomainAccounting : bitfield(BYTE, 1), // BYTE
				IncreasePolicy     : bitfield(BYTE, 2), // BYTE
				DecreasePolicy     : bitfield(BYTE, 2), // BYTE
				Reserved           : bitfield(BYTE, 3), // BYTE
			}), // struct
		}), // union
	}), // union
	TimeCheck        : DWORD, // DWORD
	IncreaseTime     : DWORD, // DWORD
	DecreaseTime     : DWORD, // DWORD
	IncreasePercent  : DWORD, // DWORD
	DecreasePercent  : DWORD, // DWORD
});
export const PPROCESSOR_PERFSTATE_POLICY = pointer(PROCESSOR_PERFSTATE_POLICY);

export const ADMINISTRATOR_POWER_POLICY = struct({
	MinSleep           : SYSTEM_POWER_STATE, // SYSTEM_POWER_STATE
	MaxSleep           : SYSTEM_POWER_STATE, // SYSTEM_POWER_STATE // video policies
	MinVideoTimeout    : DWORD,              // DWORD
	MaxVideoTimeout    : DWORD,              // DWORD              // disk policies
	MinSpindownTimeout : DWORD,              // DWORD
	MaxSpindownTimeout : DWORD,              // DWORD
});
export const PADMINISTRATOR_POWER_POLICY = pointer(ADMINISTRATOR_POWER_POLICY);

export const HIBERFILE_BUCKET = struct({
	MaxPhysicalMemory     : DWORD64,                          // DWORD64
	PhysicalMemoryPercent : array(DWORD, HIBERFILE_TYPE_MAX), // DWORD
});
export const PHIBERFILE_BUCKET = pointer(HIBERFILE_BUCKET);

export const SYSTEM_POWER_CAPABILITIES = struct({
	// Misc supported system features
	PowerButtonPresent        : BOOLEAN,                           // BOOLEAN
	SleepButtonPresent        : BOOLEAN,                           // BOOLEAN
	LidPresent                : BOOLEAN,                           // BOOLEAN
	SystemS1                  : BOOLEAN,                           // BOOLEAN
	SystemS2                  : BOOLEAN,                           // BOOLEAN
	SystemS3                  : BOOLEAN,                           // BOOLEAN
	SystemS4                  : BOOLEAN,                           // BOOLEAN // hibernate
	SystemS5                  : BOOLEAN,                           // BOOLEAN // off
	HiberFilePresent          : BOOLEAN,                           // BOOLEAN
	FullWake                  : BOOLEAN,                           // BOOLEAN
	VideoDimPresent           : BOOLEAN,                           // BOOLEAN
	ApmPresent                : BOOLEAN,                           // BOOLEAN
	UpsPresent                : BOOLEAN,                           // BOOLEAN

	// Processors
	ThermalControl            : BOOLEAN,                           // BOOLEAN
	ProcessorThrottle         : BOOLEAN,                           // BOOLEAN
	ProcessorMinThrottle      : BYTE,                              // BYTE

	//#if (NTDDI_VERSION < NTDDI_WINXP)
	// ProcessorThrottleScale : BYTE,                              // BYTE
	// spare2                 : array(BYTE, 4),                    // BYTE
	//#else
	ProcessorMaxThrottle      : BYTE,                              // BYTE
	FastSystemS4              : BOOLEAN,                           // BOOLEAN
	Hiberboot                 : BOOLEAN,                           // BOOLEAN
	WakeAlarmPresent          : BOOLEAN,                           // BOOLEAN
	AoAc                      : BOOLEAN,                           // BOOLEAN
	//#endif

	// Disk
	DiskSpinDown              : BOOLEAN,                           // BOOLEAN

	//#if (NTDDI_VERSION < NTDDI_WINTHRESHOLD)
	// spare3                 : array( BYTE, 8),                   // BYTE
	//#else
	HiberFileType             : BYTE,                              // BYTE
	AoAcConnectivitySupported : BOOLEAN,                           // BOOLEAN
	spare3                    : array(BYTE, 6),                    // BYTE
	//#endif

	SystemBatteriesPresent    : BOOLEAN,                           // BOOLEAN
	BatteriesAreShortTerm     : BOOLEAN,                           // BOOLEAN
	BatteryScale              : array(BATTERY_REPORTING_SCALE, 3), // BATTERY_REPORTING_SCALE
	AcOnLineWake              : SYSTEM_POWER_STATE,                // SYSTEM_POWER_STATE
	SoftLidWake               : SYSTEM_POWER_STATE,                // SYSTEM_POWER_STATE
	RtcWake                   : SYSTEM_POWER_STATE,                // SYSTEM_POWER_STATE
	MinDeviceWakeState        : SYSTEM_POWER_STATE,                // SYSTEM_POWER_STATE
	DefaultLowLatencyWake     : SYSTEM_POWER_STATE,                // SYSTEM_POWER_STATE

});
export const PSYSTEM_POWER_CAPABILITIES = pointer(SYSTEM_POWER_CAPABILITIES);

export const SYSTEM_BATTERY_STATE = struct({
	AcOnLine          : BOOLEAN,           // BOOLEAN
	BatteryPresent    : BOOLEAN,           // BOOLEAN
	Charging          : BOOLEAN,           // BOOLEAN
	Discharging       : BOOLEAN,           // BOOLEAN
	Spare1            : array(BOOLEAN, 3), // BOOLEAN
	Tag               : BYTE,              // BYTE
	MaxCapacity       : DWORD,             // DWORD
	RemainingCapacity : DWORD,             // DWORD
	Rate              : DWORD,             // DWORD
	EstimatedTime     : DWORD,             // DWORD
	DefaultAlert1     : DWORD,             // DWORD
	DefaultAlert2     : DWORD,             // DWORD
});
export const PSYSTEM_BATTERY_STATE = pointer(SYSTEM_BATTERY_STATE);

export const IMAGE_DOS_HEADER = struct({
	e_magic    : WORD,            // WORD // EXE header
	e_cblp     : WORD,            // WORD // Bytes on last page of file
	e_cp       : WORD,            // WORD // Pages in file
	e_crlc     : WORD,            // WORD // Relocations
	e_cparhdr  : WORD,            // WORD // Size of header in paragraphs
	e_minalloc : WORD,            // WORD // Minimum extra paragraphs needed
	e_maxalloc : WORD,            // WORD // Maximum extra paragraphs needed
	e_ss       : WORD,            // WORD // Initial (relative) SS value
	e_sp       : WORD,            // WORD // Initial SP value
	e_csum     : WORD,            // WORD // Checksum
	e_ip       : WORD,            // WORD // Initial IP value
	e_cs       : WORD,            // WORD // Initial (relative) CS value
	e_lfarlc   : WORD,            // WORD // File address of relocation table
	e_ovno     : WORD,            // WORD // Overlay number
	e_res      : array(WORD, 4),  // WORD // Reserved words
	e_oemid    : WORD,            // WORD // OEM identifier (for e_oeminfo)
	e_oeminfo  : WORD,            // WORD // OEM information; e_oemid specific
	e_res2     : array(WORD, 10), // WORD // Reserved words
	e_lfanew   : LONG,            // LONG // File address of new exe header
});
export const PIMAGE_DOS_HEADER = pointer(IMAGE_DOS_HEADER);

export const IMAGE_OS2_HEADER = struct({
	ne_magic        : WORD, // WORD
	ne_ver          : CHAR, // CHAR
	ne_rev          : CHAR, // CHAR
	ne_enttab       : WORD, // WORD
	ne_cbenttab     : WORD, // WORD
	ne_crc          : LONG, // LONG
	ne_flags        : WORD, // WORD
	ne_autodata     : WORD, // WORD
	ne_heap         : WORD, // WORD
	ne_stack        : WORD, // WORD
	ne_csip         : LONG, // LONG
	ne_sssp         : LONG, // LONG
	ne_cseg         : WORD, // WORD
	ne_cmod         : WORD, // WORD
	ne_cbnrestab    : WORD, // WORD
	ne_segtab       : WORD, // WORD
	ne_rsrctab      : WORD, // WORD
	ne_restab       : WORD, // WORD
	ne_modtab       : WORD, // WORD
	ne_imptab       : WORD, // WORD
	ne_nrestab      : LONG, // LONG
	ne_cmovent      : WORD, // WORD
	ne_align        : WORD, // WORD
	ne_cres         : WORD, // WORD
	ne_exetyp       : BYTE, // BYTE
	ne_flagsothers  : BYTE, // BYTE
	ne_pretthunks   : WORD, // WORD
	ne_psegrefbytes : WORD, // WORD
	ne_swaparea     : WORD, // WORD
	ne_expver       : WORD, // WORD
});
export const PIMAGE_OS2_HEADER = pointer(IMAGE_OS2_HEADER);

export const IMAGE_VXD_HEADER = struct({
	e32_magic        : WORD,            // WORD
	e32_border       : BYTE,            // BYTE
	e32_worder       : BYTE,            // BYTE
	e32_level        : DWORD,           // DWORD
	e32_cpu          : WORD,            // WORD
	e32_os           : WORD,            // WORD
	e32_ver          : DWORD,           // DWORD
	e32_mflags       : DWORD,           // DWORD
	e32_mpages       : DWORD,           // DWORD
	e32_startobj     : DWORD,           // DWORD
	e32_eip          : DWORD,           // DWORD
	e32_stackobj     : DWORD,           // DWORD
	e32_esp          : DWORD,           // DWORD
	e32_pagesize     : DWORD,           // DWORD
	e32_lastpagesize : DWORD,           // DWORD
	e32_fixupsize    : DWORD,           // DWORD
	e32_fixupsum     : DWORD,           // DWORD
	e32_ldrsize      : DWORD,           // DWORD
	e32_ldrsum       : DWORD,           // DWORD
	e32_objtab       : DWORD,           // DWORD
	e32_objcnt       : DWORD,           // DWORD
	e32_objmap       : DWORD,           // DWORD
	e32_itermap      : DWORD,           // DWORD
	e32_rsrctab      : DWORD,           // DWORD
	e32_rsrccnt      : DWORD,           // DWORD
	e32_restab       : DWORD,           // DWORD
	e32_enttab       : DWORD,           // DWORD
	e32_dirtab       : DWORD,           // DWORD
	e32_dircnt       : DWORD,           // DWORD
	e32_fpagetab     : DWORD,           // DWORD
	e32_frectab      : DWORD,           // DWORD
	e32_impmod       : DWORD,           // DWORD
	e32_impmodcnt    : DWORD,           // DWORD
	e32_impproc      : DWORD,           // DWORD
	e32_pagesum      : DWORD,           // DWORD
	e32_datapage     : DWORD,           // DWORD
	e32_preload      : DWORD,           // DWORD
	e32_nrestab      : DWORD,           // DWORD
	e32_cbnrestab    : DWORD,           // DWORD
	e32_nressum      : DWORD,           // DWORD
	e32_autodata     : DWORD,           // DWORD
	e32_debuginfo    : DWORD,           // DWORD
	e32_debuglen     : DWORD,           // DWORD
	e32_instpreload  : DWORD,           // DWORD
	e32_instdemand   : DWORD,           // DWORD
	e32_heapsize     : DWORD,           // DWORD
	e32_res3         : array(BYTE, 12), // BYTE
	e32_winresoff    : DWORD,           // DWORD
	e32_winreslen    : DWORD,           // DWORD
	e32_devid        : WORD,            // WORD
	e32_ddkver       : WORD,            // WORD
});
export const PIMAGE_VXD_HEADER = pointer(IMAGE_VXD_HEADER);

export const IMAGE_FILE_HEADER = struct({
	Machine              : WORD,  // WORD
	NumberOfSections     : WORD,  // WORD
	TimeDateStamp        : DWORD, // DWORD
	PointerToSymbolTable : DWORD, // DWORD
	NumberOfSymbols      : DWORD, // DWORD
	SizeOfOptionalHeader : WORD,  // WORD
	Characteristics      : WORD,  // WORD
});
export const PIMAGE_FILE_HEADER = pointer(IMAGE_FILE_HEADER);

export const IMAGE_DATA_DIRECTORY = struct({
	VirtualAddress : DWORD, // DWORD
	Size           : DWORD, // DWORD
});
export const PIMAGE_DATA_DIRECTORY = pointer(IMAGE_DATA_DIRECTORY);

export const IMAGE_OPTIONAL_HEADER32 = struct({
	Magic                       : WORD,                                                          // WORD
	MajorLinkerVersion          : BYTE,                                                          // BYTE
	MinorLinkerVersion          : BYTE,                                                          // BYTE
	SizeOfCode                  : DWORD,                                                         // DWORD
	SizeOfInitializedData       : DWORD,                                                         // DWORD
	SizeOfUninitializedData     : DWORD,                                                         // DWORD
	AddressOfEntryPoint         : DWORD,                                                         // DWORD
	BaseOfCode                  : DWORD,                                                         // DWORD
	BaseOfData                  : DWORD,                                                         // DWORD
	ImageBase                   : DWORD,                                                         // DWORD
	SectionAlignment            : DWORD,                                                         // DWORD
	FileAlignment               : DWORD,                                                         // DWORD
	MajorOperatingSystemVersion : WORD,                                                          // WORD
	MinorOperatingSystemVersion : WORD,                                                          // WORD
	MajorImageVersion           : WORD,                                                          // WORD
	MinorImageVersion           : WORD,                                                          // WORD
	MajorSubsystemVersion       : WORD,                                                          // WORD
	MinorSubsystemVersion       : WORD,                                                          // WORD
	Win32VersionValue           : DWORD,                                                         // DWORD
	SizeOfImage                 : DWORD,                                                         // DWORD
	SizeOfHeaders               : DWORD,                                                         // DWORD
	CheckSum                    : DWORD,                                                         // DWORD
	Subsystem                   : WORD,                                                          // WORD
	DllCharacteristics          : WORD,                                                          // WORD
	SizeOfStackReserve          : DWORD,                                                         // DWORD
	SizeOfStackCommit           : DWORD,                                                         // DWORD
	SizeOfHeapReserve           : DWORD,                                                         // DWORD
	SizeOfHeapCommit            : DWORD,                                                         // DWORD
	LoaderFlags                 : DWORD,                                                         // DWORD
	NumberOfRvaAndSizes         : DWORD,                                                         // DWORD
	DataDirectory               : array(IMAGE_DATA_DIRECTORY, IMAGE_NUMBEROF_DIRECTORY_ENTRIES), // IMAGE_DATA_DIRECTORY
});
export const PIMAGE_OPTIONAL_HEADER32 = pointer(IMAGE_OPTIONAL_HEADER32);

export const IMAGE_ROM_OPTIONAL_HEADER = struct({
	Magic                   : WORD,            // WORD
	MajorLinkerVersion      : BYTE,            // BYTE
	MinorLinkerVersion      : BYTE,            // BYTE
	SizeOfCode              : DWORD,           // DWORD
	SizeOfInitializedData   : DWORD,           // DWORD
	SizeOfUninitializedData : DWORD,           // DWORD
	AddressOfEntryPoint     : DWORD,           // DWORD
	BaseOfCode              : DWORD,           // DWORD
	BaseOfData              : DWORD,           // DWORD
	BaseOfBss               : DWORD,           // DWORD
	GprMask                 : DWORD,           // DWORD
	CprMask                 : array(DWORD, 4), // DWORD
	GpValue                 : DWORD,           // DWORD
});
export const PIMAGE_ROM_OPTIONAL_HEADER = pointer(IMAGE_ROM_OPTIONAL_HEADER);

export const IMAGE_OPTIONAL_HEADER64 = struct({
	Magic                       : WORD,                                                          // WORD
	MajorLinkerVersion          : BYTE,                                                          // BYTE
	MinorLinkerVersion          : BYTE,                                                          // BYTE
	SizeOfCode                  : DWORD,                                                         // DWORD
	SizeOfInitializedData       : DWORD,                                                         // DWORD
	SizeOfUninitializedData     : DWORD,                                                         // DWORD
	AddressOfEntryPoint         : DWORD,                                                         // DWORD
	BaseOfCode                  : DWORD,                                                         // DWORD
	ImageBase                   : ULONGLONG,                                                     // ULONGLONG
	SectionAlignment            : DWORD,                                                         // DWORD
	FileAlignment               : DWORD,                                                         // DWORD
	MajorOperatingSystemVersion : WORD,                                                          // WORD
	MinorOperatingSystemVersion : WORD,                                                          // WORD
	MajorImageVersion           : WORD,                                                          // WORD
	MinorImageVersion           : WORD,                                                          // WORD
	MajorSubsystemVersion       : WORD,                                                          // WORD
	MinorSubsystemVersion       : WORD,                                                          // WORD
	Win32VersionValue           : DWORD,                                                         // DWORD
	SizeOfImage                 : DWORD,                                                         // DWORD
	SizeOfHeaders               : DWORD,                                                         // DWORD
	CheckSum                    : DWORD,                                                         // DWORD
	Subsystem                   : WORD,                                                          // WORD
	DllCharacteristics          : WORD,                                                          // WORD
	SizeOfStackReserve          : ULONGLONG,                                                     // ULONGLONG
	SizeOfStackCommit           : ULONGLONG,                                                     // ULONGLONG
	SizeOfHeapReserve           : ULONGLONG,                                                     // ULONGLONG
	SizeOfHeapCommit            : ULONGLONG,                                                     // ULONGLONG
	LoaderFlags                 : DWORD,                                                         // DWORD
	NumberOfRvaAndSizes         : DWORD,                                                         // DWORD
	DataDirectory               : array(IMAGE_DATA_DIRECTORY, IMAGE_NUMBEROF_DIRECTORY_ENTRIES), // IMAGE_DATA_DIRECTORY
});
export const PIMAGE_OPTIONAL_HEADER64 = pointer(IMAGE_OPTIONAL_HEADER64);

export const IMAGE_OPTIONAL_HEADER = isArch64 ? IMAGE_OPTIONAL_HEADER64 : IMAGE_OPTIONAL_HEADER32;
export const PIMAGE_OPTIONAL_HEADER = isArch64 ? PIMAGE_OPTIONAL_HEADER64 : PIMAGE_OPTIONAL_HEADER32;

export const IMAGE_NT_HEADERS64 = struct({
	Signature      : DWORD,                   // DWORD
	FileHeader     : IMAGE_FILE_HEADER,       // IMAGE_FILE_HEADER
	OptionalHeader : IMAGE_OPTIONAL_HEADER64, // IMAGE_OPTIONAL_HEADER64
});
export const PIMAGE_NT_HEADERS64 = pointer(IMAGE_NT_HEADERS64);

export const IMAGE_NT_HEADERS32 = struct({
	Signature      : DWORD,                   // DWORD
	FileHeader     : IMAGE_FILE_HEADER,       // IMAGE_FILE_HEADER
	OptionalHeader : IMAGE_OPTIONAL_HEADER32, // IMAGE_OPTIONAL_HEADER32
});
export const PIMAGE_NT_HEADERS32 = pointer(IMAGE_NT_HEADERS32);

export const IMAGE_NT_HEADERS = isArch64 ? IMAGE_NT_HEADERS64 : IMAGE_NT_HEADERS32;
export const PIMAGE_NT_HEADERS = isArch64 ? PIMAGE_NT_HEADERS64 : PIMAGE_NT_HEADERS32;

export const IMAGE_ROM_HEADERS = struct({
	FileHeader     : IMAGE_FILE_HEADER,         // IMAGE_FILE_HEADER
	OptionalHeader : IMAGE_ROM_OPTIONAL_HEADER, // IMAGE_ROM_OPTIONAL_HEADER
});
export const PIMAGE_ROM_HEADERS = pointer(IMAGE_ROM_HEADERS);

export const ANON_OBJECT_HEADER = struct({
	Sig1          : WORD,  // WORD  // Must be IMAGE_FILE_MACHINE_UNKNOWN
	Sig2          : WORD,  // WORD  // Must be 0xffff
	Version       : WORD,  // WORD  // >= 1 (implies the CLSID field is present)
	Machine       : WORD,  // WORD
	TimeDateStamp : DWORD, // DWORD
	ClassID       : CLSID, // CLSID // Used to invoke CoCreateInstance
	SizeOfData    : DWORD, // DWORD // Size of data that follows the header
});

export const ANON_OBJECT_HEADER_V2 = struct({
	Sig1           : WORD,  // WORD  // Must be IMAGE_FILE_MACHINE_UNKNOWN
	Sig2           : WORD,  // WORD  // Must be 0xffff
	Version        : WORD,  // WORD  // >= 2 (implies the Flags field is present - otherwise V1)
	Machine        : WORD,  // WORD
	TimeDateStamp  : DWORD, // DWORD
	ClassID        : CLSID, // CLSID // Used to invoke CoCreateInstance
	SizeOfData     : DWORD, // DWORD // Size of data that follows the header
	Flags          : DWORD, // DWORD // 0x1 -> contains metadata
	MetaDataSize   : DWORD, // DWORD // Size of CLR metadata
	MetaDataOffset : DWORD, // DWORD // Offset of CLR metadata
});

export const ANON_OBJECT_HEADER_BIGOBJ = struct({
	Sig1                 : WORD,  // WORD  // Must be IMAGE_FILE_MACHINE_UNKNOWN
	Sig2                 : WORD,  // WORD  // Must be 0xffff
	Version              : WORD,  // WORD  // >= 2 (implies the Flags field is present)
	Machine              : WORD,  // WORD  // Actual machine - IMAGE_FILE_MACHINE_xxx
	TimeDateStamp        : DWORD, // DWORD
	ClassID              : CLSID, // CLSID // {D1BAA1C7-BAEE-4ba9-AF20-FAF66AA4DCB8}
	SizeOfData           : DWORD, // DWORD // Size of data that follows the header
	Flags                : DWORD, // DWORD // 0x1 -> contains metadata
	MetaDataSize         : DWORD, // DWORD // Size of CLR metadata
	MetaDataOffset       : DWORD, // DWORD // Offset of CLR metadata
	NumberOfSections     : DWORD, // DWORD // extended from WORD
	PointerToSymbolTable : DWORD, // DWORD
	NumberOfSymbols      : DWORD, // DWORD
});

export const IMAGE_SECTION_HEADER = struct({
	Name                 : array(BYTE, IMAGE_SIZEOF_SHORT_NAME), // BYTE
	Misc                 : union({
		PhysicalAddress : DWORD, // DWORD
		VirtualSize     : DWORD, // DWORD
	}), // union
	VirtualAddress       : DWORD,                                // DWORD
	SizeOfRawData        : DWORD,                                // DWORD
	PointerToRawData     : DWORD,                                // DWORD
	PointerToRelocations : DWORD,                                // DWORD
	PointerToLinenumbers : DWORD,                                // DWORD
	NumberOfRelocations  : WORD,                                 // WORD
	NumberOfLinenumbers  : WORD,                                 // WORD
	Characteristics      : DWORD,                                // DWORD
});
export const PIMAGE_SECTION_HEADER = pointer(IMAGE_SECTION_HEADER);

export const IMAGE_SYMBOL = struct({
	N                  : union({
		ShortName : array(BYTE, 8),  // BYTE
		Name      : struct({
			Short : DWORD, // DWORD // if 0, use LongName
			Long  : DWORD, // DWORD // offset into string table
		}), // struct
		LongName  : array(DWORD, 2), // DWORD  // PBYTE [2]
	}), // union
	Value              : DWORD, // DWORD
	SectionNumber      : SHORT, // SHORT
	Type               : WORD,  // WORD
	StorageClass       : BYTE,  // BYTE
	NumberOfAuxSymbols : BYTE,  // BYTE
});
export const PIMAGE_SYMBOL = pointer(IMAGE_SYMBOL);

export const IMAGE_SYMBOL_EX = struct({
	N                  : union({
		ShortName : array(BYTE, 8),  // BYTE
		Name      : struct({
			Short : DWORD, // DWORD // if 0, use LongName
			Long  : DWORD, // DWORD // offset into string table
		}), // struct
		LongName  : array(DWORD, 2), // DWORD  // PBYTE  [2]
	}), // union
	Value              : DWORD, // DWORD
	SectionNumber      : LONG,  // LONG
	Type               : WORD,  // WORD
	StorageClass       : BYTE,  // BYTE
	NumberOfAuxSymbols : BYTE,  // BYTE
});
export const PIMAGE_SYMBOL_EX = pointer(IMAGE_SYMBOL_EX);

export const IMAGE_AUX_SYMBOL_TOKEN_DEF = struct({
	bAuxType         : BYTE,            // BYTE  // IMAGE_AUX_SYMBOL_TYPE
	bReserved        : BYTE,            // BYTE  // Must be 0
	SymbolTableIndex : DWORD,           // DWORD
	rgbReserved      : array(BYTE, 12), // BYTE  // Must be 0
});
export const PIMAGE_AUX_SYMBOL_TOKEN_DEF = pointer(IMAGE_AUX_SYMBOL_TOKEN_DEF);

export const IMAGE_AUX_SYMBOL = union({
	Sym      : struct({
		TagIndex : DWORD, // DWORD // struct, union, or enum tag index
		Misc     : union({
			LnSz      : struct({
				Linenumber : WORD, // WORD // declaration line number
				Size       : WORD, // WORD // size of struct, union, or enum
			}), // struct
			TotalSize : DWORD,  // DWORD
		}), // union
		FcnAry   : union({
			Function : struct({	// if ISFCN, tag, or .bb
				PointerToLinenumber   : DWORD, // DWORD
				PointerToNextFunction : DWORD, // DWORD
			}), // struct
			Array    : struct({
				Dimension : array(WORD, 4), // WORD
			}), // struct
		}), // union
		TvIndex  : WORD,  // WORD  // tv index
	}), // struct
	File     : struct({
		Name : array(BYTE, IMAGE_SIZEOF_SYMBOL), // BYTE
	}), // struct
	Section  : struct({
		Length              : DWORD, // DWORD // section length
		NumberOfRelocations : WORD,  // WORD  // number of relocation entries
		NumberOfLinenumbers : WORD,  // WORD  // number of line numbers
		CheckSum            : DWORD, // DWORD // checksum for communal
		Number              : SHORT, // SHORT // section number to associate with
		Selection           : BYTE,  // BYTE  // communal selection type
		bReserved           : BYTE,  // BYTE
		HighNumber          : SHORT, // SHORT // high bits of the section number
	}), // struct
	TokenDef : IMAGE_AUX_SYMBOL_TOKEN_DEF, // IMAGE_AUX_SYMBOL_TOKEN_DEF
	CRC      : struct({
		crc         : DWORD,           // DWORD
		rgbReserved : array(BYTE, 14), // BYTE
	}), // struct
});
export const PIMAGE_AUX_SYMBOL = pointer(IMAGE_AUX_SYMBOL);

export const IMAGE_AUX_SYMBOL_EX = union({
	Sym         : struct({
		WeakDefaultSymIndex : DWORD,           // DWORD // the weak extern default symbol index
		WeakSearchType      : DWORD,           // DWORD
		rgbReserved         : array(BYTE, 12), // BYTE
	}), // struct
	File        : struct({
		Name : array(BYTE, sizeof(IMAGE_SYMBOL_EX)), // BYTE
	}), // struct
	Section     : struct({
		Length              : DWORD,          // DWORD // section length
		NumberOfRelocations : WORD,           // WORD  // number of relocation entries
		NumberOfLinenumbers : WORD,           // WORD  // number of line numbers
		CheckSum            : DWORD,          // DWORD // checksum for communal
		Number              : SHORT,          // SHORT // section number to associate with
		Selection           : BYTE,           // BYTE  // communal selection type
		bReserved           : BYTE,           // BYTE
		HighNumber          : SHORT,          // SHORT // high bits of the section number
		rgbReserved         : array(BYTE, 2), // BYTE
	}), // struct
	TokenDef    : IMAGE_AUX_SYMBOL_TOKEN_DEF, // IMAGE_AUX_SYMBOL_TOKEN_DEF
	rgbReserved : array(BYTE, 2),             // BYTE
	CRC         : struct({
		crc         : DWORD,           // DWORD
		rgbReserved : array(BYTE, 16), // BYTE
	}), // struct
});
export const PIMAGE_AUX_SYMBOL_EX = pointer(IMAGE_AUX_SYMBOL_EX);

export const IMAGE_RELOCATION = struct({
	u                : union({
		VirtualAddress : DWORD, // DWORD
		RelocCount     : DWORD, // DWORD // Set to the real count when IMAGE_SCN_LNK_NRELOC_OVFL is set
	}), // union
	SymbolTableIndex : DWORD, // DWORD
	Type             : WORD,  // WORD
});
export const PIMAGE_RELOCATION = pointer(IMAGE_RELOCATION);

export const IMAGE_LINENUMBER = struct({
	Type       : union({
		SymbolTableIndex : DWORD, // DWORD // Symbol table index of function name if Linenumber is 0.
		VirtualAddress   : DWORD, // DWORD // Virtual address of line number.
	}), // union
	Linenumber : WORD,  // WORD  // Line number.
});
export const PIMAGE_LINENUMBER = pointer(IMAGE_LINENUMBER);

export const IMAGE_BASE_RELOCATION = struct({
	VirtualAddress : DWORD,          // DWORD
	SizeOfBlock    : DWORD,          // DWORD
	TypeOffset     : array(WORD, 1), // WORD
});
export const PIMAGE_BASE_RELOCATION = pointer(IMAGE_BASE_RELOCATION);

export const IMAGE_ARCHIVE_MEMBER_HEADER = struct({
	Name      : array(BYTE, 16), // BYTE // File member name - `/' terminated.
	Date      : array(BYTE, 12), // BYTE // File member date - decimal.
	UserID    : array(BYTE, 6),  // BYTE // File member user id - decimal.
	GroupID   : array(BYTE, 6),  // BYTE // File member group id - decimal.
	Mode      : array(BYTE, 8),  // BYTE // File member mode - octal.
	Size      : array(BYTE, 10), // BYTE // File member size - decimal.
	EndHeader : array(BYTE, 2),  // BYTE // String to end header.
});
export const PIMAGE_ARCHIVE_MEMBER_HEADER = pointer(IMAGE_ARCHIVE_MEMBER_HEADER);

export const IMAGE_EXPORT_DIRECTORY = struct({
	Characteristics       : DWORD, // DWORD
	TimeDateStamp         : DWORD, // DWORD
	MajorVersion          : WORD,  // WORD
	MinorVersion          : WORD,  // WORD
	Name                  : DWORD, // DWORD
	Base                  : DWORD, // DWORD
	NumberOfFunctions     : DWORD, // DWORD
	NumberOfNames         : DWORD, // DWORD
	AddressOfFunctions    : DWORD, // DWORD // RVA from base of image
	AddressOfNames        : DWORD, // DWORD // RVA from base of image
	AddressOfNameOrdinals : DWORD, // DWORD // RVA from base of image
});
export const PIMAGE_EXPORT_DIRECTORY = pointer(IMAGE_EXPORT_DIRECTORY);

export const IMAGE_IMPORT_BY_NAME = struct({
	Hint : WORD,                     // WORD
	Name : array(CHAR, 1, "String"), // CHAR
});
export const PIMAGE_IMPORT_BY_NAME = pointer(IMAGE_IMPORT_BY_NAME);

export const IMAGE_THUNK_DATA64 = struct({
	u1 : union({
		ForwarderString : ULONGLONG, // ULONGLONG // PBYTE
		Function        : ULONGLONG, // ULONGLONG // PDWORD
		Ordinal         : ULONGLONG, // ULONGLONG
		AddressOfData   : ULONGLONG, // ULONGLONG // PIMAGE_IMPORT_BY_NAME
	}), // union
});
export const PIMAGE_THUNK_DATA64 = pointer(IMAGE_THUNK_DATA64);

export const IMAGE_THUNK_DATA32 = struct({
	u1 : union({
		ForwarderString : DWORD, // DWORD // PBYTE
		Function        : DWORD, // DWORD // PDWORD
		Ordinal         : DWORD, // DWORD
		AddressOfData   : DWORD, // DWORD // PIMAGE_IMPORT_BY_NAME
	}), // union
});
export const PIMAGE_THUNK_DATA32 = pointer(IMAGE_THUNK_DATA32);

export const IMAGE_TLS_DIRECTORY64 = struct({
	StartAddressOfRawData : ULONGLONG, // ULONGLONG
	EndAddressOfRawData   : ULONGLONG, // ULONGLONG
	AddressOfIndex        : ULONGLONG, // ULONGLONG // PDWORD
	AddressOfCallBacks    : ULONGLONG, // ULONGLONG // PIMAGE_TLS_CALLBACK *;
	SizeOfZeroFill        : DWORD,     // DWORD
	u                     : union({
		Characteristics : DWORD,  // DWORD
		s               : struct({
			Reserved0 : bitfield(DWORD, 20), // DWORD
			Alignment : bitfield(DWORD, 4),  // DWORD
			Reserved1 : bitfield(DWORD, 8),  // DWORD
		}), // struct
	}), // union
});
export const PIMAGE_TLS_DIRECTORY64 = pointer(IMAGE_TLS_DIRECTORY64);

export const IMAGE_TLS_DIRECTORY32 = struct({
	StartAddressOfRawData : DWORD, // DWORD
	EndAddressOfRawData   : DWORD, // DWORD
	AddressOfIndex        : DWORD, // DWORD // PDWORD
	AddressOfCallBacks    : DWORD, // DWORD // PIMAGE_TLS_CALLBACK *
	SizeOfZeroFill        : DWORD, // DWORD
	u                     : union({
		Characteristics : DWORD,  // DWORD
		s               : struct({
			Reserved0 : bitfield(DWORD, 20), // DWORD
			Alignment : bitfield(DWORD, 4),  // DWORD
			Reserved1 : bitfield(DWORD, 8),  // DWORD
		}), // struct
	}), // union
});
export const PIMAGE_TLS_DIRECTORY32 = pointer(IMAGE_TLS_DIRECTORY32);

export const IMAGE_THUNK_DATA = isArch64 ? IMAGE_THUNK_DATA64 : IMAGE_THUNK_DATA32;
export const PIMAGE_THUNK_DATA = isArch64 ? PIMAGE_THUNK_DATA64 : PIMAGE_THUNK_DATA32;
export const IMAGE_TLS_DIRECTORY = isArch64 ? IMAGE_TLS_DIRECTORY64 : IMAGE_TLS_DIRECTORY32;
export const PIMAGE_TLS_DIRECTORY = isArch64 ? PIMAGE_TLS_DIRECTORY64 : PIMAGE_TLS_DIRECTORY32;

export const IMAGE_IMPORT_DESCRIPTOR = struct({
	u              : union({
		Characteristics    : DWORD, // DWORD // 0 for terminating null import descriptor
		OriginalFirstThunk : DWORD, // DWORD // RVA to original unbound IAT (PIMAGE_THUNK_DATA)
	}), // union
	TimeDateStamp  : DWORD, // DWORD // 0 if not bound,
	ForwarderChain : DWORD, // DWORD // -1 if no forwarders
	Name           : DWORD, // DWORD
	FirstThunk     : DWORD, // DWORD // RVA to IAT (if bound this IAT has actual addresses)
});
export const PIMAGE_IMPORT_DESCRIPTOR = pointer(IMAGE_IMPORT_DESCRIPTOR);

export const IMAGE_BOUND_IMPORT_DESCRIPTOR = struct({
	TimeDateStamp               : DWORD, // DWORD
	OffsetModuleName            : WORD,  // WORD
	NumberOfModuleForwarderRefs : WORD,  // WORD
	// Array of zero or more IMAGE_BOUND_FORWARDER_REF follows
});
export const PIMAGE_BOUND_IMPORT_DESCRIPTOR = pointer(IMAGE_BOUND_IMPORT_DESCRIPTOR);

export const IMAGE_BOUND_FORWARDER_REF = struct({
	TimeDateStamp    : DWORD, // DWORD
	OffsetModuleName : WORD,  // WORD
	Reserved         : WORD,  // WORD
});
export const PIMAGE_BOUND_FORWARDER_REF = pointer(IMAGE_BOUND_FORWARDER_REF);

export const IMAGE_DELAYLOAD_DESCRIPTOR = struct({
	Attributes                 : union({
		AllAttributes : DWORD,  // DWORD
		s             : struct({
			RvaBased           : bitfield(DWORD, 1),  // DWORD // Delay load version 2
			ReservedAttributes : bitfield(DWORD, 31), // DWORD
		}), // struct
	}), // union
	DllNameRVA                 : DWORD, // DWORD // RVA to the name of the target library (NULL-terminate ASCII string)
	ModuleHandleRVA            : DWORD, // DWORD // RVA to the HMODULE caching location (PHMODULE)
	ImportAddressTableRVA      : DWORD, // DWORD // RVA to the start of the IAT (PIMAGE_THUNK_DATA)
	ImportNameTableRVA         : DWORD, // DWORD // RVA to the start of the name table (PIMAGE_THUNK_DATA::AddressOfData)
	BoundImportAddressTableRVA : DWORD, // DWORD // RVA to an optional bound IAT
	UnloadInformationTableRVA  : DWORD, // DWORD // RVA to an optional unload info table
	TimeDateStamp              : DWORD, // DWORD // 0 if not bound,
});
export const PIMAGE_DELAYLOAD_DESCRIPTOR = pointer(IMAGE_DELAYLOAD_DESCRIPTOR);
export const PCIMAGE_DELAYLOAD_DESCRIPTOR = pointer(IMAGE_DELAYLOAD_DESCRIPTOR);

export const IMAGE_RESOURCE_DIRECTORY = struct({
	Characteristics      : DWORD, // DWORD
	TimeDateStamp        : DWORD, // DWORD
	MajorVersion         : WORD,  // WORD
	MinorVersion         : WORD,  // WORD
	NumberOfNamedEntries : WORD,  // WORD
	NumberOfIdEntries    : WORD,  // WORD
	//  IMAGE_RESOURCE_DIRECTORY_ENTRY DirectoryEntries[];
});
export const PIMAGE_RESOURCE_DIRECTORY = pointer(IMAGE_RESOURCE_DIRECTORY);

export const IMAGE_RESOURCE_DIRECTORY_ENTRY = struct({
	u  : union({
		s    : struct({
			NameOffset   : bitfield(DWORD, 31), // DWORD
			NameIsString : bitfield(DWORD, 1),  // DWORD
		}), // struct
		Name : DWORD,  // DWORD
		Id   : WORD,   // WORD
	}), // union
	u2 : union({
		OffsetToData : DWORD,  // DWORD
		s2           : struct({
			OffsetToDirectory : bitfield(DWORD, 31), // DWORD
			DataIsDirectory   : bitfield(DWORD, 1),  // DWORD
		}), // struct
	}), // union
});
export const PIMAGE_RESOURCE_DIRECTORY_ENTRY = pointer(IMAGE_RESOURCE_DIRECTORY_ENTRY);

export const IMAGE_RESOURCE_DIRECTORY_STRING = struct({
	Length     : WORD,                     // WORD
	NameString : array(CHAR, 1, "String"), // CHAR
});
export const PIMAGE_RESOURCE_DIRECTORY_STRING = pointer(IMAGE_RESOURCE_DIRECTORY_STRING);

export const IMAGE_RESOURCE_DIR_STRING_U = struct({
	Length     : WORD,                      // WORD
	NameString : array(WCHAR, 1, "String"), // WCHAR
});
export const PIMAGE_RESOURCE_DIR_STRING_U = pointer(IMAGE_RESOURCE_DIR_STRING_U);

export const IMAGE_RESOURCE_DATA_ENTRY = struct({
	OffsetToData : DWORD, // DWORD
	Size         : DWORD, // DWORD
	CodePage     : DWORD, // DWORD
	Reserved     : DWORD, // DWORD
});
export const PIMAGE_RESOURCE_DATA_ENTRY = pointer(IMAGE_RESOURCE_DATA_ENTRY);

export const IMAGE_LOAD_CONFIG_CODE_INTEGRITY = struct({
	Flags         : WORD,  // WORD  // Flags to indicate if CI information is available, etc.
	Catalog       : WORD,  // WORD  // 0xFFFF means not available
	CatalogOffset : DWORD, // DWORD
	Reserved      : DWORD, // DWORD // Additional bitmask to be defined later
});
export const PIMAGE_LOAD_CONFIG_CODE_INTEGRITY = pointer(IMAGE_LOAD_CONFIG_CODE_INTEGRITY);

// IMAGE_DYNAMIC_RELOCATION_TABLE 在后面定义

export const IMAGE_DYNAMIC_RELOCATION32 = struct({
	Symbol          : DWORD,                           // DWORD
	BaseRelocSize   : DWORD,                           // DWORD
	BaseRelocations : array(IMAGE_BASE_RELOCATION, 1), // IMAGE_BASE_RELOCATION
});
export const PIMAGE_DYNAMIC_RELOCATION32 = pointer(IMAGE_DYNAMIC_RELOCATION32);

export const IMAGE_DYNAMIC_RELOCATION64 = struct({
	Symbol          : ULONGLONG,                       // ULONGLONG
	BaseRelocSize   : DWORD,                           // DWORD
	BaseRelocations : array(IMAGE_BASE_RELOCATION, 1), // IMAGE_BASE_RELOCATION
});
export const PIMAGE_DYNAMIC_RELOCATION64 = pointer(IMAGE_DYNAMIC_RELOCATION64);

export const IMAGE_DYNAMIC_RELOCATION = isArch64 ? IMAGE_DYNAMIC_RELOCATION64 : IMAGE_DYNAMIC_RELOCATION32;
export const PIMAGE_DYNAMIC_RELOCATION = isArch64 ? PIMAGE_DYNAMIC_RELOCATION64 : PIMAGE_DYNAMIC_RELOCATION32;

export const IMAGE_DYNAMIC_RELOCATION_TABLE = struct({
	Version            : DWORD,                                  // DWORD
	Size               : DWORD,                                  // DWORD
	DynamicRelocations : array(IMAGE_DYNAMIC_RELOCATION, 1), // IMAGE_DYNAMIC_RELOCATION
});
export const PIMAGE_DYNAMIC_RELOCATION_TABLE = pointer(IMAGE_DYNAMIC_RELOCATION_TABLE);

export const IMAGE_DYNAMIC_RELOCATION32_V2 = struct({
	HeaderSize    : DWORD, // DWORD
	FixupInfoSize : DWORD, // DWORD
	Symbol        : DWORD, // DWORD
	SymbolGroup   : DWORD, // DWORD
	Flags         : DWORD, // DWORD
	// ...     variable length header fields
});
export const PIMAGE_DYNAMIC_RELOCATION32_V2 = pointer(IMAGE_DYNAMIC_RELOCATION32_V2);

export const IMAGE_DYNAMIC_RELOCATION64_V2 = struct({
	HeaderSize    : DWORD,     // DWORD
	FixupInfoSize : DWORD,     // DWORD
	Symbol        : ULONGLONG, // ULONGLONG
	SymbolGroup   : DWORD,     // DWORD
	Flags         : DWORD,     // DWORD
	// ...     variable length header fields
});
export const PIMAGE_DYNAMIC_RELOCATION64_V2 = pointer(IMAGE_DYNAMIC_RELOCATION64_V2);

export const IMAGE_DYNAMIC_RELOCATION_V2 = isArch64 ? IMAGE_DYNAMIC_RELOCATION64_V2 : IMAGE_DYNAMIC_RELOCATION32_V2;
export const PIMAGE_DYNAMIC_RELOCATION_V2 = isArch64 ? PIMAGE_DYNAMIC_RELOCATION64_V2 : PIMAGE_DYNAMIC_RELOCATION32_V2;

export const IMAGE_PROLOGUE_DYNAMIC_RELOCATION_HEADER = struct({
	PrologueByteCount : BYTE,                                  // BYTE
	PrologueBytes     : array(BYTE, 255/*PrologueByteCount*/), // BYTE
});
export const PIMAGE_PROLOGUE_DYNAMIC_RELOCATION_HEADER = pointer(IMAGE_PROLOGUE_DYNAMIC_RELOCATION_HEADER);

export const IMAGE_EPILOGUE_DYNAMIC_RELOCATION_HEADER = struct({
	EpilogueCount               : DWORD,                // DWORD
	EpilogueByteCount           : BYTE,                 // BYTE
	BranchDescriptorElementSize : BYTE,                 // BYTE
	BranchDescriptorCount       : WORD,                 // WORD
	// BranchDescriptors           : array(BYTE, 1), // BYTE
	// BranchDescriptorBitMap      : array(BYTE, 1), // BYTE
});
export const PIMAGE_EPILOGUE_DYNAMIC_RELOCATION_HEADER = pointer(IMAGE_EPILOGUE_DYNAMIC_RELOCATION_HEADER);

export const IMAGE_IMPORT_CONTROL_TRANSFER_DYNAMIC_RELOCATION = struct({
	PageRelativeOffset : bitfield(DWORD, 12), // DWORD
	IndirectCall       : bitfield(DWORD, 1),  // DWORD
	IATIndex           : bitfield(DWORD, 19), // DWORD
});
export const PIMAGE_IMPORT_CONTROL_TRANSFER_DYNAMIC_RELOCATION = pointer(IMAGE_IMPORT_CONTROL_TRANSFER_DYNAMIC_RELOCATION);

export const IMAGE_INDIR_CONTROL_TRANSFER_DYNAMIC_RELOCATION = struct({
	PageRelativeOffset : bitfield(WORD, 12), // WORD
	IndirectCall       : bitfield(WORD, 1),  // WORD
	RexWPrefix         : bitfield(WORD, 1),  // WORD
	CfgCheck           : bitfield(WORD, 1),  // WORD
	Reserved           : bitfield(WORD, 1),  // WORD
});
export const PIMAGE_INDIR_CONTROL_TRANSFER_DYNAMIC_RELOCATION = pointer(IMAGE_INDIR_CONTROL_TRANSFER_DYNAMIC_RELOCATION);

export const IMAGE_SWITCHTABLE_BRANCH_DYNAMIC_RELOCATION = struct({
	PageRelativeOffset : bitfield(WORD, 12), // WORD
	RegisterNumber     : bitfield(WORD, 4),  // WORD
});
export const PIMAGE_SWITCHTABLE_BRANCH_DYNAMIC_RELOCATION = pointer(IMAGE_SWITCHTABLE_BRANCH_DYNAMIC_RELOCATION);

export const IMAGE_LOAD_CONFIG_DIRECTORY32 = struct({
	Size                                     : DWORD,                            // DWORD
	TimeDateStamp                            : DWORD,                            // DWORD
	MajorVersion                             : WORD,                             // WORD
	MinorVersion                             : WORD,                             // WORD
	GlobalFlagsClear                         : DWORD,                            // DWORD
	GlobalFlagsSet                           : DWORD,                            // DWORD
	CriticalSectionDefaultTimeout            : DWORD,                            // DWORD
	DeCommitFreeBlockThreshold               : DWORD,                            // DWORD
	DeCommitTotalFreeThreshold               : DWORD,                            // DWORD
	LockPrefixTable                          : DWORD,                            // DWORD                            // VA
	MaximumAllocationSize                    : DWORD,                            // DWORD
	VirtualMemoryThreshold                   : DWORD,                            // DWORD
	ProcessHeapFlags                         : DWORD,                            // DWORD
	ProcessAffinityMask                      : DWORD,                            // DWORD
	CSDVersion                               : WORD,                             // WORD
	DependentLoadFlags                       : WORD,                             // WORD
	EditList                                 : DWORD,                            // DWORD
	SecurityCookie                           : DWORD,                            // DWORD
	SEHandlerTable                           : DWORD,                            // DWORD
	SEHandlerCount                           : DWORD,                            // DWORD
	GuardCFCheckFunctionPointer              : DWORD,                            // DWORD
	GuardCFDispatchFunctionPointer           : DWORD,                            // DWORD
	GuardCFFunctionTable                     : DWORD,                            // DWORD
	GuardCFFunctionCount                     : DWORD,                            // DWORD
	GuardFlags                               : DWORD,                            // DWORD
	CodeIntegrity                            : IMAGE_LOAD_CONFIG_CODE_INTEGRITY, // IMAGE_LOAD_CONFIG_CODE_INTEGRITY
	GuardAddressTakenIatEntryTable           : DWORD,                            // DWORD
	GuardAddressTakenIatEntryCount           : DWORD,                            // DWORD
	GuardLongJumpTargetTable                 : DWORD,                            // DWORD
	GuardLongJumpTargetCount                 : DWORD,                            // DWORD
	DynamicValueRelocTable                   : DWORD,                            // DWORD
	CHPEMetadataPointer                      : DWORD,                            // DWORD
	GuardRFFailureRoutine                    : DWORD,                            // DWORD
	GuardRFFailureRoutineFunctionPointer     : DWORD,                            // DWORD
	DynamicValueRelocTableOffset             : DWORD,                            // DWORD
	DynamicValueRelocTableSection            : WORD,                             // WORD
	Reserved2                                : WORD,                             // WORD
	GuardRFVerifyStackPointerFunctionPointer : DWORD,                            // DWORD
	HotPatchTableOffset                      : DWORD,                            // DWORD
	Reserved3                                : DWORD,                            // DWORD
	EnclaveConfigurationPointer              : DWORD,                            // DWORD
	VolatileMetadataPointer                  : DWORD,                            // DWORD
	GuardEHContinuationTable                 : DWORD,                            // DWORD
	GuardEHContinuationCount                 : DWORD,                            // DWORD
});
export const PIMAGE_LOAD_CONFIG_DIRECTORY32 = pointer(IMAGE_LOAD_CONFIG_DIRECTORY32);

export const IMAGE_LOAD_CONFIG_DIRECTORY64 = struct({
	Size                                     : DWORD,                            // DWORD
	TimeDateStamp                            : DWORD,                            // DWORD
	MajorVersion                             : WORD,                             // WORD
	MinorVersion                             : WORD,                             // WORD
	GlobalFlagsClear                         : DWORD,                            // DWORD
	GlobalFlagsSet                           : DWORD,                            // DWORD
	CriticalSectionDefaultTimeout            : DWORD,                            // DWORD
	DeCommitFreeBlockThreshold               : ULONGLONG,                        // ULONGLONG
	DeCommitTotalFreeThreshold               : ULONGLONG,                        // ULONGLONG
	LockPrefixTable                          : ULONGLONG,                        // ULONGLONG
	MaximumAllocationSize                    : ULONGLONG,                        // ULONGLONG
	VirtualMemoryThreshold                   : ULONGLONG,                        // ULONGLONG
	ProcessAffinityMask                      : ULONGLONG,                        // ULONGLONG
	ProcessHeapFlags                         : DWORD,                            // DWORD
	CSDVersion                               : WORD,                             // WORD
	DependentLoadFlags                       : WORD,                             // WORD
	EditList                                 : ULONGLONG,                        // ULONGLONG
	SecurityCookie                           : ULONGLONG,                        // ULONGLONG
	SEHandlerTable                           : ULONGLONG,                        // ULONGLONG
	SEHandlerCount                           : ULONGLONG,                        // ULONGLONG
	GuardCFCheckFunctionPointer              : ULONGLONG,                        // ULONGLONG
	GuardCFDispatchFunctionPointer           : ULONGLONG,                        // ULONGLONG
	GuardCFFunctionTable                     : ULONGLONG,                        // ULONGLONG
	GuardCFFunctionCount                     : ULONGLONG,                        // ULONGLONG
	GuardFlags                               : DWORD,                            // DWORD
	CodeIntegrity                            : IMAGE_LOAD_CONFIG_CODE_INTEGRITY, // IMAGE_LOAD_CONFIG_CODE_INTEGRITY
	GuardAddressTakenIatEntryTable           : ULONGLONG,                        // ULONGLONG
	GuardAddressTakenIatEntryCount           : ULONGLONG,                        // ULONGLONG
	GuardLongJumpTargetTable                 : ULONGLONG,                        // ULONGLONG
	GuardLongJumpTargetCount                 : ULONGLONG,                        // ULONGLONG
	DynamicValueRelocTable                   : ULONGLONG,                        // ULONGLONG
	CHPEMetadataPointer                      : ULONGLONG,                        // ULONGLONG
	GuardRFFailureRoutine                    : ULONGLONG,                        // ULONGLONG
	GuardRFFailureRoutineFunctionPointer     : ULONGLONG,                        // ULONGLONG
	DynamicValueRelocTableOffset             : DWORD,                            // DWORD
	DynamicValueRelocTableSection            : WORD,                             // WORD
	Reserved2                                : WORD,                             // WORD
	GuardRFVerifyStackPointerFunctionPointer : ULONGLONG,                        // ULONGLONG
	HotPatchTableOffset                      : DWORD,                            // DWORD
	Reserved3                                : DWORD,                            // DWORD
	EnclaveConfigurationPointer              : ULONGLONG,                        // ULONGLONG
	VolatileMetadataPointer                  : ULONGLONG,                        // ULONGLONG
	GuardEHContinuationTable                 : ULONGLONG,                        // ULONGLONG
	GuardEHContinuationCount                 : ULONGLONG,                        // ULONGLONG
});
export const PIMAGE_LOAD_CONFIG_DIRECTORY64 = pointer(IMAGE_LOAD_CONFIG_DIRECTORY64);

export const IMAGE_LOAD_CONFIG_DIRECTORY = isArch64 ?IMAGE_LOAD_CONFIG_DIRECTORY64 : IMAGE_LOAD_CONFIG_DIRECTORY32;
export const PIMAGE_LOAD_CONFIG_DIRECTORY = isArch64 ? PIMAGE_LOAD_CONFIG_DIRECTORY64 : PIMAGE_LOAD_CONFIG_DIRECTORY32;

export const IMAGE_HOT_PATCH_INFO = struct({
	Version        : DWORD, // DWORD
	Size           : DWORD, // DWORD
	SequenceNumber : DWORD, // DWORD
	BaseImageList  : DWORD, // DWORD
	BaseImageCount : DWORD, // DWORD
	BufferOffset   : DWORD, // DWORD // Version 2 and later
	ExtraPatchSize : DWORD, // DWORD // Version 3 and later
});
export const PIMAGE_HOT_PATCH_INFO = pointer(IMAGE_HOT_PATCH_INFO);

export const IMAGE_HOT_PATCH_BASE = struct({
	SequenceNumber        : DWORD, // DWORD
	Flags                 : DWORD, // DWORD
	OriginalTimeDateStamp : DWORD, // DWORD
	OriginalCheckSum      : DWORD, // DWORD
	CodeIntegrityInfo     : DWORD, // DWORD
	CodeIntegritySize     : DWORD, // DWORD
	PatchTable            : DWORD, // DWORD
	BufferOffset          : DWORD, // DWORD // Version 2 and later
});
export const PIMAGE_HOT_PATCH_BASE = pointer(IMAGE_HOT_PATCH_BASE);

export const IMAGE_HOT_PATCH_HASHES = struct({
	SHA256 : array(BYTE, 32), // BYTE
	SHA1   : array(BYTE, 20), // BYTE
});
export const PIMAGE_HOT_PATCH_HASHES = pointer(IMAGE_HOT_PATCH_HASHES);

export const IMAGE_CE_RUNTIME_FUNCTION_ENTRY = struct({
	FuncStart     : DWORD,               // DWORD
	PrologLen     : bitfield(DWORD, 8),  // DWORD
	FuncLen       : bitfield(DWORD, 22), // DWORD
	ThirtyTwoBit  : bitfield(DWORD, 1),  // DWORD
	ExceptionFlag : bitfield(DWORD, 1),  // DWORD
});
export const PIMAGE_CE_RUNTIME_FUNCTION_ENTRY = pointer(IMAGE_CE_RUNTIME_FUNCTION_ENTRY);

export const IMAGE_ARM_RUNTIME_FUNCTION_ENTRY = struct({
	BeginAddress : DWORD, // DWORD
	u            : union({
		UnwindData : DWORD,  // DWORD
		s          : struct({
			Flag           : bitfield(DWORD, 2),  // DWORD
			FunctionLength : bitfield(DWORD, 11), // DWORD
			Ret            : bitfield(DWORD, 2),  // DWORD
			H              : bitfield(DWORD, 1),  // DWORD
			Reg            : bitfield(DWORD, 3),  // DWORD
			R              : bitfield(DWORD, 1),  // DWORD
			L              : bitfield(DWORD, 1),  // DWORD
			C              : bitfield(DWORD, 1),  // DWORD
			StackAdjust    : bitfield(DWORD, 10), // DWORD
		}), // struct
	}), // union
});
export const PIMAGE_ARM_RUNTIME_FUNCTION_ENTRY = pointer(IMAGE_ARM_RUNTIME_FUNCTION_ENTRY);

export const IMAGE_ARM64_RUNTIME_FUNCTION_ENTRY = struct({
	BeginAddress : DWORD, // DWORD
	u            : union({
		UnwindData : DWORD,  // DWORD
		s          : struct({
			Flag           : bitfield(DWORD, 2),  // DWORD
			FunctionLength : bitfield(DWORD, 11), // DWORD
			RegF           : bitfield(DWORD, 3),  // DWORD
			RegI           : bitfield(DWORD, 4),  // DWORD
			H              : bitfield(DWORD, 1),  // DWORD
			CR             : bitfield(DWORD, 2),  // DWORD
			FrameSize      : bitfield(DWORD, 9),  // DWORD
		}), // struct
	}), // union
});
export const PIMAGE_ARM64_RUNTIME_FUNCTION_ENTRY = pointer(IMAGE_ARM64_RUNTIME_FUNCTION_ENTRY);

export const IMAGE_ARM64_RUNTIME_FUNCTION_ENTRY_XDATA = union({
	HeaderData : DWORD, // DWORD
	s          : struct({
		FunctionLength       : bitfield(DWORD, 18), // DWORD // in words (2 bytes)
		Version              : bitfield(DWORD, 2),  // DWORD
		ExceptionDataPresent : bitfield(DWORD, 1),  // DWORD
		EpilogInHeader       : bitfield(DWORD, 1),  // DWORD
		EpilogCount          : bitfield(DWORD, 5),  // DWORD // number of epilogs or byte index of the first unwind code for the one only epilog
		CodeWords            : bitfield(DWORD, 5),  // DWORD // number of dwords with unwind codes
	}), // struct
});

export const IMAGE_ALPHA64_RUNTIME_FUNCTION_ENTRY = struct({
	BeginAddress     : ULONGLONG, // ULONGLONG
	EndAddress       : ULONGLONG, // ULONGLONG
	ExceptionHandler : ULONGLONG, // ULONGLONG
	HandlerData      : ULONGLONG, // ULONGLONG
	PrologEndAddress : ULONGLONG, // ULONGLONG
});
export const PIMAGE_ALPHA64_RUNTIME_FUNCTION_ENTRY = pointer(IMAGE_ALPHA64_RUNTIME_FUNCTION_ENTRY);

export const IMAGE_ALPHA_RUNTIME_FUNCTION_ENTRY = struct({
	BeginAddress     : DWORD, // DWORD
	EndAddress       : DWORD, // DWORD
	ExceptionHandler : DWORD, // DWORD
	HandlerData      : DWORD, // DWORD
	PrologEndAddress : DWORD, // DWORD
});
export const PIMAGE_ALPHA_RUNTIME_FUNCTION_ENTRY = pointer(IMAGE_ALPHA_RUNTIME_FUNCTION_ENTRY);

export const _IMAGE_RUNTIME_FUNCTION_ENTRY = struct(__IMAGE_RUNTIME_FUNCTION_ENTRY, {
	BeginAddress : DWORD, // DWORD
	EndAddress   : DWORD, // DWORD
	u            : union({
		UnwindInfoAddress : DWORD, // DWORD
		UnwindData        : DWORD, // DWORD
	}), // union
});
export const _PIMAGE_RUNTIME_FUNCTION_ENTRY = pointer(_IMAGE_RUNTIME_FUNCTION_ENTRY);

export const IMAGE_IA64_RUNTIME_FUNCTION_ENTRY = _IMAGE_RUNTIME_FUNCTION_ENTRY;
export const PIMAGE_IA64_RUNTIME_FUNCTION_ENTRY = _PIMAGE_RUNTIME_FUNCTION_ENTRY;

export const IMAGE_AXP64_RUNTIME_FUNCTION_ENTRY = IMAGE_ALPHA64_RUNTIME_FUNCTION_ENTRY;
export const PIMAGE_AXP64_RUNTIME_FUNCTION_ENTRY = PIMAGE_ALPHA64_RUNTIME_FUNCTION_ENTRY;

export const IMAGE_RUNTIME_FUNCTION_ENTRY =
	"axp64" === process.arch ? IMAGE_ALPHA64_RUNTIME_FUNCTION_ENTRY :
	"alpha" === process.arch ? IMAGE_ALPHA_RUNTIME_FUNCTION_ENTRY :
	"arm64" === process.arch ? IMAGE_ARM64_RUNTIME_FUNCTION_ENTRY :
	"arm"   === process.arch ? IMAGE_ARM_RUNTIME_FUNCTION_ENTRY
                             : _IMAGE_RUNTIME_FUNCTION_ENTRY
;

export const PIMAGE_RUNTIME_FUNCTION_ENTRY =
	"axp64" === process.arch ? PIMAGE_ALPHA64_RUNTIME_FUNCTION_ENTRY :
	"alpha" === process.arch ? PIMAGE_ALPHA_RUNTIME_FUNCTION_ENTRY :
	"arm64" === process.arch ? PIMAGE_ARM64_RUNTIME_FUNCTION_ENTRY :
	"arm"   === process.arch ? PIMAGE_ARM_RUNTIME_FUNCTION_ENTRY
                             : _PIMAGE_RUNTIME_FUNCTION_ENTRY
;

export const IMAGE_ENCLAVE_CONFIG32 = struct({
	Size                      : DWORD,                                      // DWORD
	MinimumRequiredConfigSize : DWORD,                                      // DWORD
	PolicyFlags               : DWORD,                                      // DWORD
	NumberOfImports           : DWORD,                                      // DWORD
	ImportList                : DWORD,                                      // DWORD
	ImportEntrySize           : DWORD,                                      // DWORD
	FamilyID                  : array(BYTE, IMAGE_ENCLAVE_SHORT_ID_LENGTH), // BYTE
	ImageID                   : array(BYTE, IMAGE_ENCLAVE_SHORT_ID_LENGTH), // BYTE
	ImageVersion              : DWORD,                                      // DWORD
	SecurityVersion           : DWORD,                                      // DWORD
	EnclaveSize               : DWORD,                                      // DWORD
	NumberOfThreads           : DWORD,                                      // DWORD
	EnclaveFlags              : DWORD,                                      // DWORD
});
export const PIMAGE_ENCLAVE_CONFIG32 = pointer(IMAGE_ENCLAVE_CONFIG32);

export const IMAGE_ENCLAVE_CONFIG64 = struct({
	Size                      : DWORD,                                      // DWORD
	MinimumRequiredConfigSize : DWORD,                                      // DWORD
	PolicyFlags               : DWORD,                                      // DWORD
	NumberOfImports           : DWORD,                                      // DWORD
	ImportList                : DWORD,                                      // DWORD
	ImportEntrySize           : DWORD,                                      // DWORD
	FamilyID                  : array(BYTE, IMAGE_ENCLAVE_SHORT_ID_LENGTH), // BYTE
	ImageID                   : array(BYTE, IMAGE_ENCLAVE_SHORT_ID_LENGTH), // BYTE
	ImageVersion              : DWORD,                                      // DWORD
	SecurityVersion           : DWORD,                                      // DWORD
	EnclaveSize               : ULONGLONG,                                  // ULONGLONG
	NumberOfThreads           : DWORD,                                      // DWORD
	EnclaveFlags              : DWORD,                                      // DWORD
});
export const PIMAGE_ENCLAVE_CONFIG64 = pointer(IMAGE_ENCLAVE_CONFIG64);

export const IMAGE_ENCLAVE_CONFIG = isArch64 ? IMAGE_ENCLAVE_CONFIG64 : IMAGE_ENCLAVE_CONFIG32;
export const PIMAGE_ENCLAVE_CONFIG = isArch64 ? PIMAGE_ENCLAVE_CONFIG64 : PIMAGE_ENCLAVE_CONFIG32;

export const IMAGE_ENCLAVE_IMPORT = struct({
	MatchType              : DWORD,                                      // DWORD
	MinimumSecurityVersion : DWORD,                                      // DWORD
	UniqueOrAuthorID       : array(BYTE, IMAGE_ENCLAVE_LONG_ID_LENGTH),  // BYTE
	FamilyID               : array(BYTE, IMAGE_ENCLAVE_SHORT_ID_LENGTH), // BYTE
	ImageID                : array(BYTE, IMAGE_ENCLAVE_SHORT_ID_LENGTH), // BYTE
	ImportName             : DWORD,                                      // DWORD
	Reserved               : DWORD,                                      // DWORD
});
export const PIMAGE_ENCLAVE_IMPORT = pointer(IMAGE_ENCLAVE_IMPORT);

export const IMAGE_DEBUG_DIRECTORY = struct({
	Characteristics  : DWORD, // DWORD
	TimeDateStamp    : DWORD, // DWORD
	MajorVersion     : WORD,  // WORD
	MinorVersion     : WORD,  // WORD
	Type             : DWORD, // DWORD
	SizeOfData       : DWORD, // DWORD
	AddressOfRawData : DWORD, // DWORD
	PointerToRawData : DWORD, // DWORD
});
export const PIMAGE_DEBUG_DIRECTORY = pointer(IMAGE_DEBUG_DIRECTORY);

export const IMAGE_COFF_SYMBOLS_HEADER = struct({
	NumberOfSymbols      : DWORD, // DWORD
	LvaToFirstSymbol     : DWORD, // DWORD
	NumberOfLinenumbers  : DWORD, // DWORD
	LvaToFirstLinenumber : DWORD, // DWORD
	RvaToFirstByteOfCode : DWORD, // DWORD
	RvaToLastByteOfCode  : DWORD, // DWORD
	RvaToFirstByteOfData : DWORD, // DWORD
	RvaToLastByteOfData  : DWORD, // DWORD
});
export const PIMAGE_COFF_SYMBOLS_HEADER = pointer(IMAGE_COFF_SYMBOLS_HEADER);

export const FPO_DATA = struct({
	ulOffStart : DWORD,             // DWORD // offset 1st byte of function code
	cbProcSize : DWORD,             // DWORD // # bytes in function
	cdwLocals  : DWORD,             // DWORD // # bytes in locals/4
	cdwParams  : WORD,              // WORD  // # bytes in params/4
	cbProlog   : bitfield(WORD, 8), // WORD  // # bytes in prolog
	cbRegs     : bitfield(WORD, 3), // WORD  // # regs saved
	fHasSEH    : bitfield(WORD, 1), // WORD  // TRUE if SEH in func
	fUseBP     : bitfield(WORD, 1), // WORD  // TRUE if EBP has been allocated
	reserved   : bitfield(WORD, 1), // WORD  // reserved for future use
	cbFrame    : bitfield(WORD, 2), // WORD  // frame type
});
export const PFPO_DATA = pointer(FPO_DATA);

export const IMAGE_DEBUG_MISC = struct({
	DataType : DWORD,          // DWORD   // type of misc data, see defines
	Length   : DWORD,          // DWORD   // total length of record, rounded to four
	Unicode  : BOOLEAN,        // BOOLEAN // TRUE if data is unicode string
	Reserved : array(BYTE, 3), // BYTE
	Data     : array(BYTE, 1), // BYTE    // Actual data
});
export const PIMAGE_DEBUG_MISC = pointer(IMAGE_DEBUG_MISC);

export const IMAGE_FUNCTION_ENTRY = struct({
	StartingAddress : DWORD, // DWORD
	EndingAddress   : DWORD, // DWORD
	EndOfPrologue   : DWORD, // DWORD
});
export const PIMAGE_FUNCTION_ENTRY = pointer(IMAGE_FUNCTION_ENTRY);

export const IMAGE_FUNCTION_ENTRY64 = struct({
	StartingAddress : ULONGLONG, // ULONGLONG
	EndingAddress   : ULONGLONG, // ULONGLONG
	u               : union({
		EndOfPrologue     : ULONGLONG, // ULONGLONG
		UnwindInfoAddress : ULONGLONG, // ULONGLONG
	}), // union
});
export const PIMAGE_FUNCTION_ENTRY64 = pointer(IMAGE_FUNCTION_ENTRY64);

export const IMAGE_SEPARATE_DEBUG_HEADER = struct({
	Signature          : WORD,            // WORD
	Flags              : WORD,            // WORD
	Machine            : WORD,            // WORD
	Characteristics    : WORD,            // WORD
	TimeDateStamp      : DWORD,           // DWORD
	CheckSum           : DWORD,           // DWORD
	ImageBase          : DWORD,           // DWORD
	SizeOfImage        : DWORD,           // DWORD
	NumberOfSections   : DWORD,           // DWORD
	ExportedNamesSize  : DWORD,           // DWORD
	DebugDirectorySize : DWORD,           // DWORD
	SectionAlignment   : DWORD,           // DWORD
	Reserved           : array(DWORD, 2), // DWORD
});
export const PIMAGE_SEPARATE_DEBUG_HEADER = pointer(IMAGE_SEPARATE_DEBUG_HEADER);

export const NON_PAGED_DEBUG_INFO = struct({
	Signature       : WORD,      // WORD
	Flags           : WORD,      // WORD
	Size            : DWORD,     // DWORD
	Machine         : WORD,      // WORD
	Characteristics : WORD,      // WORD
	TimeDateStamp   : DWORD,     // DWORD
	CheckSum        : DWORD,     // DWORD
	SizeOfImage     : DWORD,     // DWORD
	ImageBase       : ULONGLONG, // ULONGLONG
});
export const PNON_PAGED_DEBUG_INFO = pointer(NON_PAGED_DEBUG_INFO);

export const IMAGE_ARCHITECTURE_HEADER = struct({
	AmaskValue  : bitfield(uint, 1), // unsigned int // 1 -> code section depends on mask bit
	                                                 // 0 -> new instruction depends on mask bit
	int         : bitfield(int, 7),  // int          // MBZ
	AmaskShift  : bitfield(uint, 8), // unsigned int // Amask bit in question for this fixup
	int2        : bitfield(int, 16), // int          // MBZ
	FirstEntryRVA : DWORD,           // DWORD        // RVA into .arch section to array of ARCHITECTURE_ENTRY's
});
export const PIMAGE_ARCHITECTURE_HEADER = pointer(IMAGE_ARCHITECTURE_HEADER);

export const IMAGE_ARCHITECTURE_ENTRY = struct({
	FixupInstRVA : DWORD, // DWORD // RVA of instruction to fixup
	NewInst      : DWORD, // DWORD // fixup instruction (see alphaops.h)
});
export const PIMAGE_ARCHITECTURE_ENTRY = pointer(IMAGE_ARCHITECTURE_ENTRY);

export const IMPORT_OBJECT_HEADER = struct({
	Sig1          : WORD,               // WORD  // Must be IMAGE_FILE_MACHINE_UNKNOWN
	Sig2          : WORD,               // WORD  // Must be IMPORT_OBJECT_HDR_SIG2.
	Version       : WORD,               // WORD
	Machine       : WORD,               // WORD
	TimeDateStamp : DWORD,              // DWORD // Time/date stamp
	SizeOfData    : DWORD,              // DWORD // particularly useful for incremental links
	u             : union({
		Ordinal : WORD, // WORD // if grf & IMPORT_OBJECT_ORDINAL
		Hint    : WORD, // WORD
	}), // union
	Type          : bitfield(WORD, 2),  // WORD  // IMPORT_TYPE
	NameType      : bitfield(WORD, 3),  // WORD  // IMPORT_NAME_TYPE
	Reserved      : bitfield(WORD, 11), // WORD  // Reserved. Must be zero.
});

export const IMAGE_COR20_HEADER = struct({
	// Header versioning
	cb                      : DWORD,                // DWORD
	MajorRuntimeVersion     : WORD,                 // WORD
	MinorRuntimeVersion     : WORD,                 // WORD

	// Symbol table and startup information
	MetaData                : IMAGE_DATA_DIRECTORY, // IMAGE_DATA_DIRECTORY
	Flags                   : DWORD,                // DWORD

	// If COMIMAGE_FLAGS_NATIVE_ENTRYPOINT is not set, EntryPointToken represents a managed entrypoint.
	// If COMIMAGE_FLAGS_NATIVE_ENTRYPOINT is set, EntryPointRVA represents an RVA to a native entrypoint.
	DUMMYUNIONNAME          : union({
		EntryPointToken : DWORD, // DWORD
		EntryPointRVA   : DWORD, // DWORD
	}), // union

	// Binding information
	Resources               : IMAGE_DATA_DIRECTORY, // IMAGE_DATA_DIRECTORY
	StrongNameSignature     : IMAGE_DATA_DIRECTORY, // IMAGE_DATA_DIRECTORY

	// Regular fixup and binding information
	CodeManagerTable        : IMAGE_DATA_DIRECTORY, // IMAGE_DATA_DIRECTORY
	VTableFixups            : IMAGE_DATA_DIRECTORY, // IMAGE_DATA_DIRECTORY
	ExportAddressTableJumps : IMAGE_DATA_DIRECTORY, // IMAGE_DATA_DIRECTORY

	// Precompiled image info (internal use only - set to zero)
	ManagedNativeHeader     : IMAGE_DATA_DIRECTORY, // IMAGE_DATA_DIRECTORY
});
export const PIMAGE_COR20_HEADER = pointer(IMAGE_COR20_HEADER);

export const SLIST_ENTRY = isArch64 ?
koffi.opaque()
:
SINGLE_LIST_ENTRY;
if (isArch64) {
	struct(SLIST_ENTRY, {
		Next : pointer(SLIST_ENTRY), // struct _SLIST_ENTRY*
	}/*, {alignment: 16}*/)
}
export const PSLIST_ENTRY = pointer(SLIST_ENTRY);

export const SLIST_HEADER = isArch64 ?
union({
	s           : struct({
		Alignment : ULONGLONG, // ULONGLONG
		Region    : ULONGLONG, // ULONGLONG
	}),
	HeaderArm64 : struct({
		Depth     : bitfield(ULONGLONG, 16), // ULONGLONG
		Sequence  : bitfield(ULONGLONG, 48), // ULONGLONG
		Reserved  : bitfield(ULONGLONG, 4),  // ULONGLONG
		NextEntry : bitfield(ULONGLONG, 60), // ULONGLONG // last 4 bits are always 0's
	}), // struct
})
:
union({
	Alignment : ULONGLONG, // ULONGLONG
	s         : struct({
		Next     : SLIST_ENTRY, // SLIST_ENTRY
		Depth    : WORD,        // WORD
		Reserved : WORD,        // WORD
	}), // struct
});
export const PSLIST_HEADER = pointer(SLIST_HEADER);

export const RTL_RUN_ONCE = union({
	Ptr : PVOID, // PVOID
});
export const PRTL_RUN_ONCE = pointer(RTL_RUN_ONCE);

export const RTL_BARRIER = struct({
	Reserved1 : DWORD,               // DWORD
	Reserved2 : DWORD,               // DWORD
	Reserved3 : array(ULONG_PTR, 2), // ULONG_PTR
	Reserved4 : DWORD,               // DWORD
	Reserved5 : DWORD,               // DWORD
});
export const PRTL_BARRIER = pointer(RTL_BARRIER);

export const MESSAGE_RESOURCE_ENTRY = struct({
	Length : WORD,           // WORD
	Flags  : WORD,           // WORD
	Text   : array(BYTE, 1), // BYTE
});
export const PMESSAGE_RESOURCE_ENTRY = pointer(MESSAGE_RESOURCE_ENTRY);

export const MESSAGE_RESOURCE_BLOCK = struct({
	LowId           : DWORD, // DWORD
	HighId          : DWORD, // DWORD
	OffsetToEntries : DWORD, // DWORD
});
export const PMESSAGE_RESOURCE_BLOCK = pointer(MESSAGE_RESOURCE_BLOCK);

export const MESSAGE_RESOURCE_DATA = struct({
	NumberOfBlocks : DWORD,                            // DWORD
	Blocks         : array(MESSAGE_RESOURCE_BLOCK, 1), // MESSAGE_RESOURCE_BLOCK
});
export const PMESSAGE_RESOURCE_DATA = pointer(MESSAGE_RESOURCE_DATA);

export const OSVERSIONINFOA = struct({
	dwOSVersionInfoSize : DWORD,                      // DWORD
	dwMajorVersion      : DWORD,                      // DWORD
	dwMinorVersion      : DWORD,                      // DWORD
	dwBuildNumber       : DWORD,                      // DWORD
	dwPlatformId        : DWORD,                      // DWORD
	szCSDVersion        : array(CHAR, 128, "String"), // CHAR  // Maintenance string for PSS usage
});
export const POSVERSIONINFOA = pointer(OSVERSIONINFOA);
export const LPOSVERSIONINFOA = pointer(OSVERSIONINFOA);

export const OSVERSIONINFOW = struct({
	dwOSVersionInfoSize : DWORD,                       // DWORD
	dwMajorVersion      : DWORD,                       // DWORD
	dwMinorVersion      : DWORD,                       // DWORD
	dwBuildNumber       : DWORD,                       // DWORD
	dwPlatformId        : DWORD,                       // DWORD
	szCSDVersion        : array(WCHAR, 128, "String"), // WCHAR // Maintenance string for PSS usage
});
export const POSVERSIONINFOW = pointer(OSVERSIONINFOW);
export const LPOSVERSIONINFOW = pointer(OSVERSIONINFOW);
export const OSVERSIONINFO = OSVERSIONINFOW;
export const POSVERSIONINFO = POSVERSIONINFOW;
export const LPOSVERSIONINFO = LPOSVERSIONINFOW;

export const OSVERSIONINFOEXA = struct({
	dwOSVersionInfoSize : DWORD,                      // DWORD
	dwMajorVersion      : DWORD,                      // DWORD
	dwMinorVersion      : DWORD,                      // DWORD
	dwBuildNumber       : DWORD,                      // DWORD
	dwPlatformId        : DWORD,                      // DWORD
	szCSDVersion        : array(CHAR, 128, "String"), // CHAR  // Maintenance string for PSS usage
	wServicePackMajor   : WORD,                       // WORD
	wServicePackMinor   : WORD,                       // WORD
	wSuiteMask          : WORD,                       // WORD
	wProductType        : BYTE,                       // BYTE
	wReserved           : BYTE,                       // BYTE
});
export const POSVERSIONINFOEXA = pointer(OSVERSIONINFOEXA);
export const LPOSVERSIONINFOEXA = pointer(OSVERSIONINFOEXA);

export const OSVERSIONINFOEXW = struct({
	dwOSVersionInfoSize : DWORD,                       // DWORD
	dwMajorVersion      : DWORD,                       // DWORD
	dwMinorVersion      : DWORD,                       // DWORD
	dwBuildNumber       : DWORD,                       // DWORD
	dwPlatformId        : DWORD,                       // DWORD
	szCSDVersion        : array(WCHAR, 128, "String"), // WCHAR // Maintenance string for PSS usage
	wServicePackMajor   : WORD,                        // WORD
	wServicePackMinor   : WORD,                        // WORD
	wSuiteMask          : WORD,                        // WORD
	wProductType        : BYTE,                        // BYTE
	wReserved           : BYTE,                        // BYTE
});
export const POSVERSIONINFOEXW = pointer(OSVERSIONINFOEXW);
export const LPOSVERSIONINFOEXW = pointer(OSVERSIONINFOEXW);
export const RTL_OSVERSIONINFOEXW = OSVERSIONINFOEXW;
export const PRTL_OSVERSIONINFOEXW = pointer(OSVERSIONINFOEXW);
export const OSVERSIONINFOEX = OSVERSIONINFOEXW;
export const POSVERSIONINFOEX = POSVERSIONINFOEXW;
export const LPOSVERSIONINFOEX = LPOSVERSIONINFOEXW;

export const NV_MEMORY_RANGE = struct({
	BaseAddress : pointer(VOID), // VOID*
	Length      : SIZE_T,        // SIZE_T
});
export const PNV_MEMORY_RANGE = pointer(NV_MEMORY_RANGE);

export const CORRELATION_VECTOR = struct({
	Version : CHAR,                                                        // CHAR
	Vector  : array(CHAR, RTL_CORRELATION_VECTOR_STRING_LENGTH, "String"), // CHAR
});
export const PCORRELATION_VECTOR = pointer(CORRELATION_VECTOR);

export const CUSTOM_SYSTEM_EVENT_TRIGGER_CONFIG = struct({
	Size      : DWORD,  // DWORD
	TriggerId : PCWSTR, // PCWSTR
});
export const PCUSTOM_SYSTEM_EVENT_TRIGGER_CONFIG = pointer(CUSTOM_SYSTEM_EVENT_TRIGGER_CONFIG);

export const IMAGE_POLICY_ENTRY = struct({
	Type     : IMAGE_POLICY_ENTRY_TYPE, // IMAGE_POLICY_ENTRY_TYPE
	PolicyId : IMAGE_POLICY_ID,         // IMAGE_POLICY_ID
	u        : union({
		None               : pointer(VOID), // const VOID*
		BoolValue          : BOOLEAN,       // BOOLEAN
		Int8Value          : INT8,          // INT8
		UInt8Value         : UINT8,         // UINT8
		Int16Value         : INT16,         // INT16
		UInt16Value        : UINT16,        // UINT16
		Int32Value         : INT32,         // INT32
		UInt32Value        : UINT32,        // UINT32
		Int64Value         : INT64,         // INT64
		UInt64Value        : UINT64,        // UINT64
		AnsiStringValue    : PCSTR,         // PCSTR
		UnicodeStringValue : PCWSTR,        // PCWSTR
	}), // union
});
export const PCIMAGE_POLICY_ENTRY = pointer(IMAGE_POLICY_ENTRY);

export const IMAGE_POLICY_METADATA = struct({
	Version       : BYTE,                         // BYTE
	Reserved0     : array(BYTE, 7),               // BYTE
	ApplicationId : ULONGLONG,                    // ULONGLONG
	Policies      : array(IMAGE_POLICY_ENTRY, 1), // IMAGE_POLICY_ENTRY
});
export const PCIMAGE_POLICY_METADATA = pointer(IMAGE_POLICY_METADATA);

const RTL_CRITICAL_SECTION = koffi.opaque();	// 前向引用声明

export const RTL_CRITICAL_SECTION_DEBUG = struct({
	Type                      : WORD,                          // WORD
	CreatorBackTraceIndex     : WORD,                          // WORD
	CriticalSection           : pointer(RTL_CRITICAL_SECTION), // struct _RTL_CRITICAL_SECTION*
	ProcessLocksList          : LIST_ENTRY,                    // LIST_ENTRY
	EntryCount                : DWORD,                         // DWORD
	ContentionCount           : DWORD,                         // DWORD
	Flags                     : DWORD,                         // DWORD
	CreatorBackTraceIndexHigh : WORD,                          // WORD
	SpareWORD                 : WORD,                          // WORD
});
export const PRTL_CRITICAL_SECTION_DEBUG = pointer(RTL_CRITICAL_SECTION_DEBUG);

export {RTL_CRITICAL_SECTION};
struct(RTL_CRITICAL_SECTION, {
	DebugInfo      : PRTL_CRITICAL_SECTION_DEBUG, // PRTL_CRITICAL_SECTION_DEBUG
	LockCount      : LONG,                        // LONG
	RecursionCount : LONG,                        // LONG
	OwningThread   : HANDLE,                      // HANDLE                      // from the thread's ClientId->UniqueThread
	LockSemaphore  : HANDLE,                      // HANDLE
	SpinCount      : ULONG_PTR,                   // ULONG_PTR                   // force size on 64-bit systems when packed
});
export const PRTL_CRITICAL_SECTION = pointer(RTL_CRITICAL_SECTION);

export const RTL_SRWLOCK = struct({
	Ptr : PVOID, // PVOID
});
export const PRTL_SRWLOCK = pointer(RTL_SRWLOCK);

export const RTL_CONDITION_VARIABLE = struct({
	Ptr : PVOID, // PVOID
});
export const PRTL_CONDITION_VARIABLE = pointer(RTL_CONDITION_VARIABLE);

export const PVECTORED_EXCEPTION_HANDLER = pointer(koffi.proto("__stdcall", "PVECTORED_EXCEPTION_HANDLER", LONG /* LONG */, [
	pointer(EXCEPTION_POINTERS), /*  struct _EXCEPTION_POINTERS * ExceptionInfo */
]));

export const HEAP_OPTIMIZE_RESOURCES_INFORMATION = struct({
	Version : DWORD, // DWORD
	Flags   : DWORD, // DWORD
});
export const PHEAP_OPTIMIZE_RESOURCES_INFORMATION = pointer(HEAP_OPTIMIZE_RESOURCES_INFORMATION);

export const ACTIVATION_CONTEXT_QUERY_INDEX = struct({
	ulAssemblyIndex       : DWORD, // DWORD
	ulFileIndexInAssembly : DWORD, // DWORD
});
export const PACTIVATION_CONTEXT_QUERY_INDEX = pointer(ACTIVATION_CONTEXT_QUERY_INDEX);

export const ASSEMBLY_FILE_DETAILED_INFORMATION = struct({
	ulFlags          : DWORD,  // DWORD
	ulFilenameLength : DWORD,  // DWORD
	ulPathLength     : DWORD,  // DWORD
	lpFileName       : PCWSTR, // PCWSTR
	lpFilePath       : PCWSTR, // PCWSTR
});
export const PASSEMBLY_FILE_DETAILED_INFORMATION = pointer(ASSEMBLY_FILE_DETAILED_INFORMATION);

export const ACTIVATION_CONTEXT_ASSEMBLY_DETAILED_INFORMATION = struct({
	ulFlags                           : DWORD,         // DWORD
	ulEncodedAssemblyIdentityLength   : DWORD,         // DWORD         // in bytes
	ulManifestPathType                : DWORD,         // DWORD         // ACTIVATION_CONTEXT_PATH_TYPE_*
	ulManifestPathLength              : DWORD,         // DWORD         // in bytes
	liManifestLastWriteTime           : LARGE_INTEGER, // LARGE_INTEGER // FILETIME
	ulPolicyPathType                  : DWORD,         // DWORD         // ACTIVATION_CONTEXT_PATH_TYPE_*
	ulPolicyPathLength                : DWORD,         // DWORD         // in bytes
	liPolicyLastWriteTime             : LARGE_INTEGER, // LARGE_INTEGER // FILETIME
	ulMetadataSatelliteRosterIndex    : DWORD,         // DWORD
	ulManifestVersionMajor            : DWORD,         // DWORD         // 1
	ulManifestVersionMinor            : DWORD,         // DWORD         // 0
	ulPolicyVersionMajor              : DWORD,         // DWORD         // 0
	ulPolicyVersionMinor              : DWORD,         // DWORD         // 0
	ulAssemblyDirectoryNameLength     : DWORD,         // DWORD         // in bytes
	lpAssemblyEncodedAssemblyIdentity : PCWSTR,        // PCWSTR
	lpAssemblyManifestPath            : PCWSTR,        // PCWSTR
	lpAssemblyPolicyPath              : PCWSTR,        // PCWSTR
	lpAssemblyDirectoryName           : PCWSTR,        // PCWSTR
	ulFileCount                       : DWORD,         // DWORD
});
export const PACTIVATION_CONTEXT_ASSEMBLY_DETAILED_INFORMATION = pointer(ACTIVATION_CONTEXT_ASSEMBLY_DETAILED_INFORMATION);

export const ACTIVATION_CONTEXT_RUN_LEVEL_INFORMATION = struct({
	ulFlags  : DWORD,                      // DWORD
	RunLevel : ACTCTX_REQUESTED_RUN_LEVEL, // ACTCTX_REQUESTED_RUN_LEVEL
	UiAccess : DWORD,                      // DWORD
});
export const PACTIVATION_CONTEXT_RUN_LEVEL_INFORMATION = pointer(ACTIVATION_CONTEXT_RUN_LEVEL_INFORMATION);

export const COMPATIBILITY_CONTEXT_ELEMENT = struct({
	Id               : GUID,                              // GUID
	Type             : ACTCTX_COMPATIBILITY_ELEMENT_TYPE, // ACTCTX_COMPATIBILITY_ELEMENT_TYPE
	MaxVersionTested : ULONGLONG,                         // ULONGLONG
});
export const PCOMPATIBILITY_CONTEXT_ELEMENT = pointer(COMPATIBILITY_CONTEXT_ELEMENT);

export const ACTIVATION_CONTEXT_COMPATIBILITY_INFORMATION = struct({
	ElementCount : DWORD,                                   // DWORD
	Elements     : array(COMPATIBILITY_CONTEXT_ELEMENT, 1), // COMPATIBILITY_CONTEXT_ELEMENT
});
export const PACTIVATION_CONTEXT_COMPATIBILITY_INFORMATION = pointer(ACTIVATION_CONTEXT_COMPATIBILITY_INFORMATION);

export const SUPPORTED_OS_INFO = struct({
	MajorVersion : WORD, // WORD
	MinorVersion : WORD, // WORD
});
export const PSUPPORTED_OS_INFO = pointer(SUPPORTED_OS_INFO);

export const MAXVERSIONTESTED_INFO = struct({
	MaxVersionTested : ULONGLONG, // ULONGLONG
});
export const PMAXVERSIONTESTED_INFO = pointer(MAXVERSIONTESTED_INFO);

export const ACTIVATION_CONTEXT_DETAILED_INFORMATION = struct({
	dwFlags                      : DWORD,  // DWORD
	ulFormatVersion              : DWORD,  // DWORD
	ulAssemblyCount              : DWORD,  // DWORD
	ulRootManifestPathType       : DWORD,  // DWORD
	ulRootManifestPathChars      : DWORD,  // DWORD
	ulRootConfigurationPathType  : DWORD,  // DWORD
	ulRootConfigurationPathChars : DWORD,  // DWORD
	ulAppDirPathType             : DWORD,  // DWORD
	ulAppDirPathChars            : DWORD,  // DWORD
	lpRootManifestPath           : PCWSTR, // PCWSTR
	lpRootConfigurationPath      : PCWSTR, // PCWSTR
	lpAppDirPath                 : PCWSTR, // PCWSTR
});
export const PACTIVATION_CONTEXT_DETAILED_INFORMATION = pointer(ACTIVATION_CONTEXT_DETAILED_INFORMATION);

export const HARDWARE_COUNTER_DATA = struct({
	Type     : HARDWARE_COUNTER_TYPE, // HARDWARE_COUNTER_TYPE
	Reserved : DWORD,                 // DWORD
	Value    : DWORD64,               // DWORD64
});
export const PHARDWARE_COUNTER_DATA = pointer(HARDWARE_COUNTER_DATA);

export const PERFORMANCE_DATA = struct({
	Size               : WORD,                                          // WORD
	Version            : BYTE,                                          // BYTE
	HwCountersCount    : BYTE,                                          // BYTE
	ContextSwitchCount : DWORD,                                         // DWORD
	WaitReasonBitMap   : DWORD64,                                       // DWORD64
	CycleTime          : DWORD64,                                       // DWORD64
	RetryCount         : DWORD,                                         // DWORD
	Reserved           : DWORD,                                         // DWORD
	HwCounters         : array(HARDWARE_COUNTER_DATA, MAX_HW_COUNTERS), // HARDWARE_COUNTER_DATA
});
export const PPERFORMANCE_DATA = pointer(PERFORMANCE_DATA);

export const EVENTLOGRECORD = struct({
	Length              : DWORD, // DWORD // Length of full record
	Reserved            : DWORD, // DWORD // Used by the service
	RecordNumber        : DWORD, // DWORD // Absolute record number
	TimeGenerated       : DWORD, // DWORD // Seconds since 1-1-1970
	TimeWritten         : DWORD, // DWORD // Seconds since 1-1-1970
	EventID             : DWORD, // DWORD
	EventType           : WORD,  // WORD
	NumStrings          : WORD,  // WORD
	EventCategory       : WORD,  // WORD
	ReservedFlags       : WORD,  // WORD  // For use with paired events (auditing)
	ClosingRecordNumber : DWORD, // DWORD // For use with paired events (auditing)
	StringOffset        : DWORD, // DWORD // Offset from beginning of record
	UserSidLength       : DWORD, // DWORD
	UserSidOffset       : DWORD, // DWORD
	DataLength          : DWORD, // DWORD
	DataOffset          : DWORD, // DWORD // Offset from beginning of record
});
export const PEVENTLOGRECORD = pointer(EVENTLOGRECORD);

export const TAPE_ERASE = struct({
	Type      : DWORD,   // DWORD
	Immediate : BOOLEAN, // BOOLEAN
});
export const PTAPE_ERASE = pointer(TAPE_ERASE);

export const TAPE_PREPARE = struct({
	Operation : DWORD,   // DWORD
	Immediate : BOOLEAN, // BOOLEAN
});
export const PTAPE_PREPARE = pointer(TAPE_PREPARE);

export const TAPE_WRITE_MARKS = struct({
	Type      : DWORD,   // DWORD
	Count     : DWORD,   // DWORD
	Immediate : BOOLEAN, // BOOLEAN
});
export const PTAPE_WRITE_MARKS = pointer(TAPE_WRITE_MARKS);

export const TAPE_GET_POSITION = struct({
	Type      : DWORD,         // DWORD
	Partition : DWORD,         // DWORD
	Offset    : LARGE_INTEGER, // LARGE_INTEGER
});
export const PTAPE_GET_POSITION = pointer(TAPE_GET_POSITION);

export const TAPE_SET_POSITION = struct({
	Method    : DWORD,         // DWORD
	Partition : DWORD,         // DWORD
	Offset    : LARGE_INTEGER, // LARGE_INTEGER
	Immediate : BOOLEAN,       // BOOLEAN
});
export const PTAPE_SET_POSITION = pointer(TAPE_SET_POSITION);

export const TAPE_GET_DRIVE_PARAMETERS = struct({
	ECC                   : BOOLEAN, // BOOLEAN
	Compression           : BOOLEAN, // BOOLEAN
	DataPadding           : BOOLEAN, // BOOLEAN
	ReportSetmarks        : BOOLEAN, // BOOLEAN
	DefaultBlockSize      : DWORD,   // DWORD
	MaximumBlockSize      : DWORD,   // DWORD
	MinimumBlockSize      : DWORD,   // DWORD
	MaximumPartitionCount : DWORD,   // DWORD
	FeaturesLow           : DWORD,   // DWORD
	FeaturesHigh          : DWORD,   // DWORD
	EOTWarningZoneSize    : DWORD,   // DWORD
});
export const PTAPE_GET_DRIVE_PARAMETERS = pointer(TAPE_GET_DRIVE_PARAMETERS);

export const TAPE_SET_DRIVE_PARAMETERS = struct({
	ECC                : BOOLEAN, // BOOLEAN
	Compression        : BOOLEAN, // BOOLEAN
	DataPadding        : BOOLEAN, // BOOLEAN
	ReportSetmarks     : BOOLEAN, // BOOLEAN
	EOTWarningZoneSize : DWORD,   // DWORD
});
export const PTAPE_SET_DRIVE_PARAMETERS = pointer(TAPE_SET_DRIVE_PARAMETERS);

export const TAPE_GET_MEDIA_PARAMETERS = struct({
	Capacity       : LARGE_INTEGER, // LARGE_INTEGER
	Remaining      : LARGE_INTEGER, // LARGE_INTEGER
	BlockSize      : DWORD,         // DWORD
	PartitionCount : DWORD,         // DWORD
	WriteProtected : BOOLEAN,       // BOOLEAN
});
export const PTAPE_GET_MEDIA_PARAMETERS = pointer(TAPE_GET_MEDIA_PARAMETERS);

export const TAPE_SET_MEDIA_PARAMETERS = struct({
	BlockSize : DWORD, // DWORD
});
export const PTAPE_SET_MEDIA_PARAMETERS = pointer(TAPE_SET_MEDIA_PARAMETERS);

export const TAPE_CREATE_PARTITION = struct({
	Method : DWORD, // DWORD
	Count  : DWORD, // DWORD
	Size   : DWORD, // DWORD
});
export const PTAPE_CREATE_PARTITION = pointer(TAPE_CREATE_PARTITION);

export const TAPE_WMI_OPERATIONS = struct({
	Method         : DWORD, // DWORD
	DataBufferSize : DWORD, // DWORD
	DataBuffer     : PVOID, // PVOID
});
export const PTAPE_WMI_OPERATIONS = pointer(TAPE_WMI_OPERATIONS);

export const TRANSACTION_BASIC_INFORMATION = struct({
	TransactionId : GUID,  // GUID
	State         : DWORD, // DWORD
	Outcome       : DWORD, // DWORD
});
export const PTRANSACTION_BASIC_INFORMATION = pointer(TRANSACTION_BASIC_INFORMATION);

export const TRANSACTIONMANAGER_BASIC_INFORMATION = struct({
	TmIdentity   : GUID,          // GUID
	VirtualClock : LARGE_INTEGER, // LARGE_INTEGER
});
export const PTRANSACTIONMANAGER_BASIC_INFORMATION = pointer(TRANSACTIONMANAGER_BASIC_INFORMATION);

export const TRANSACTIONMANAGER_LOG_INFORMATION = struct({
	LogIdentity : GUID, // GUID
});
export const PTRANSACTIONMANAGER_LOG_INFORMATION = pointer(TRANSACTIONMANAGER_LOG_INFORMATION);

export const TRANSACTIONMANAGER_LOGPATH_INFORMATION = struct({
	LogPathLength : DWORD,                     // DWORD
	LogPath       : array(WCHAR, 1, "String"), // WCHAR // Variable size
	Data          : array(BYTE, 1),            //       // Variable size data not declared
});
export const PTRANSACTIONMANAGER_LOGPATH_INFORMATION = pointer(TRANSACTIONMANAGER_LOGPATH_INFORMATION);

export const TRANSACTIONMANAGER_RECOVERY_INFORMATION = struct({
	LastRecoveredLsn : ULONGLONG, // ULONGLONG
});
export const PTRANSACTIONMANAGER_RECOVERY_INFORMATION = pointer(TRANSACTIONMANAGER_RECOVERY_INFORMATION);

export const TRANSACTIONMANAGER_OLDEST_INFORMATION = struct({
	OldestTransactionGuid : GUID, // GUID
});
export const PTRANSACTIONMANAGER_OLDEST_INFORMATION = pointer(TRANSACTIONMANAGER_OLDEST_INFORMATION);

export const TRANSACTION_PROPERTIES_INFORMATION = struct({
	IsolationLevel    : DWORD,                     // DWORD
	IsolationFlags    : DWORD,                     // DWORD
	Timeout           : LARGE_INTEGER,             // LARGE_INTEGER
	Outcome           : DWORD,                     // DWORD
	DescriptionLength : DWORD,                     // DWORD
	Description       : array(WCHAR, 1, "String"), // WCHAR         // Variable size
	Data              : array(BYTE, 1),            //               // Variable size data not declared
});
export const PTRANSACTION_PROPERTIES_INFORMATION = pointer(TRANSACTION_PROPERTIES_INFORMATION);

export const TRANSACTION_BIND_INFORMATION = struct({
	TmHandle : HANDLE, // HANDLE
});
export const PTRANSACTION_BIND_INFORMATION = pointer(TRANSACTION_BIND_INFORMATION);

export const TRANSACTION_ENLISTMENT_PAIR = struct({
	EnlistmentId      : GUID, // GUID
	ResourceManagerId : GUID, // GUID
});
export const PTRANSACTION_ENLISTMENT_PAIR = pointer(TRANSACTION_ENLISTMENT_PAIR);

export const TRANSACTION_ENLISTMENTS_INFORMATION = struct({
	NumberOfEnlistments : DWORD,                                 // DWORD
	EnlistmentPair      : array(TRANSACTION_ENLISTMENT_PAIR, 1), // TRANSACTION_ENLISTMENT_PAIR // Variable size
});
export const PTRANSACTION_ENLISTMENTS_INFORMATION = pointer(TRANSACTION_ENLISTMENTS_INFORMATION);

export const TRANSACTION_SUPERIOR_ENLISTMENT_INFORMATION = struct({
	SuperiorEnlistmentPair : TRANSACTION_ENLISTMENT_PAIR, // TRANSACTION_ENLISTMENT_PAIR
});
export const PTRANSACTION_SUPERIOR_ENLISTMENT_INFORMATION = pointer(TRANSACTION_SUPERIOR_ENLISTMENT_INFORMATION);

export const RESOURCEMANAGER_BASIC_INFORMATION = struct({
	ResourceManagerId : GUID,                      // GUID
	DescriptionLength : DWORD,                     // DWORD
	Description       : array(WCHAR, 1, "String"), // WCHAR // Variable size
});
export const PRESOURCEMANAGER_BASIC_INFORMATION = pointer(RESOURCEMANAGER_BASIC_INFORMATION);

export const RESOURCEMANAGER_COMPLETION_INFORMATION = struct({
	IoCompletionPortHandle : HANDLE,    // HANDLE
	CompletionKey          : ULONG_PTR, // ULONG_PTR
});
export const PRESOURCEMANAGER_COMPLETION_INFORMATION = pointer(RESOURCEMANAGER_COMPLETION_INFORMATION);

export const ENLISTMENT_BASIC_INFORMATION = struct({
	EnlistmentId      : GUID, // GUID
	TransactionId     : GUID, // GUID
	ResourceManagerId : GUID, // GUID
});
export const PENLISTMENT_BASIC_INFORMATION = pointer(ENLISTMENT_BASIC_INFORMATION);

export const ENLISTMENT_CRM_INFORMATION = struct({
	CrmTransactionManagerId : GUID, // GUID
	CrmResourceManagerId    : GUID, // GUID
	CrmEnlistmentId         : GUID, // GUID
});
export const PENLISTMENT_CRM_INFORMATION = pointer(ENLISTMENT_CRM_INFORMATION);

export const TRANSACTION_LIST_ENTRY = struct({
	UOW : UOW, // UOW
});
export const PTRANSACTION_LIST_ENTRY = pointer(TRANSACTION_LIST_ENTRY);

export const TRANSACTION_LIST_INFORMATION = struct({
	NumberOfTransactions   : DWORD,                            // DWORD
	TransactionInformation : array(TRANSACTION_LIST_ENTRY, 1), // TRANSACTION_LIST_ENTRY // Var size
});
export const PTRANSACTION_LIST_INFORMATION = pointer(TRANSACTION_LIST_INFORMATION);

export const KTMOBJECT_CURSOR = struct({
	enumerated    : GUID,           // GUID  // The last GUID
	LastQuery     : GUID,           // GUID
	ObjectIdCount : DWORD,          // DWORD
	ObjectIds     : array(GUID, 1), // GUID
});
export const PKTMOBJECT_CURSOR = pointer(KTMOBJECT_CURSOR);

export const TP_POOL_STACK_INFORMATION = struct({
	StackReserve : SIZE_T, // SIZE_T
	StackCommit  : SIZE_T, // SIZE_T
});
export const PTP_POOL_STACK_INFORMATION = pointer(TP_POOL_STACK_INFORMATION);

export const TP_CALLBACK_ENVIRON_V3 = struct({
	Version                    : TP_VERSION,                                 // TP_VERSION
	Pool                       : PTP_POOL,                                   // PTP_POOL
	CleanupGroup               : PTP_CLEANUP_GROUP,                          // PTP_CLEANUP_GROUP
	CleanupGroupCancelCallback : pointer(PTP_CLEANUP_GROUP_CANCEL_CALLBACK), // PTP_CLEANUP_GROUP_CANCEL_CALLBACK
	RaceDll                    : PVOID,                                      // PVOID
	ActivationContext          : pointer(ACTIVATION_CONTEXT),                // struct _ACTIVATION_CONTEXT*
	FinalizationCallback       : pointer(PTP_SIMPLE_CALLBACK),               // PTP_SIMPLE_CALLBACK
	u                          : union({
		Flags : DWORD,  // DWORD
		s     : struct({
			LongFunction : bitfield(DWORD, 1),  // DWORD
			Persistent   : bitfield(DWORD, 1),  // DWORD
			Private      : bitfield(DWORD, 30), // DWORD
		}), // struct
	}), // union
	CallbackPriority           : TP_CALLBACK_PRIORITY,                       // TP_CALLBACK_PRIORITY
	Size                       : DWORD,                                      // DWORD
});
export const TP_CALLBACK_ENVIRON = TP_CALLBACK_ENVIRON_V3;
export const PTP_CALLBACK_ENVIRON = pointer(TP_CALLBACK_ENVIRON_V3);

// < win7
export const TP_CALLBACK_ENVIRON_V1 = struct({
	Version                    : TP_VERSION,                                 // TP_VERSION
	Pool                       : PTP_POOL,                                   // PTP_POOL
	CleanupGroup               : PTP_CLEANUP_GROUP,                          // PTP_CLEANUP_GROUP
	CleanupGroupCancelCallback : pointer(PTP_CLEANUP_GROUP_CANCEL_CALLBACK), // PTP_CLEANUP_GROUP_CANCEL_CALLBACK
	RaceDll                    : PVOID,                                      // PVOID
	ActivationContext          : pointer(ACTIVATION_CONTEXT),                // struct _ACTIVATION_CONTEXT*
	FinalizationCallback       : pointer(PTP_SIMPLE_CALLBACK),               // PTP_SIMPLE_CALLBACK
	u                          : union({
		Flags : DWORD,  // DWORD
		s     : struct({
			LongFunction : bitfield(DWORD, 1),  // DWORD
			Persistent   : bitfield(DWORD, 1),  // DWORD
			Private      : bitfield(DWORD, 30), // DWORD
		}), // struct
	}), // union
});


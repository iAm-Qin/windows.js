import koffi from "koffi";

import {pointer} from "../../types.js";

// basetsd.h
import {
	ULONG_PTR,
	SIZE_T,
} from "../basetsd.h/basetsd.js";

// minwindef.h
import {DWORD} from "../minwindef.h/minWindef.js";

// winnt.h
import {VOID, PVOID, BOOLEAN, TP_WAIT_RESULT} from "./winnt.js";
import {RTL_UMS_SCHEDULER_REASON} from "./enums.js";
import {PTP_CALLBACK_INSTANCE, PTP_TIMER, PTP_WAIT, PTP_WORK} from "./unknown.js";


// some callbacks are moved to struct.js

export const PRTL_UMS_SCHEDULER_ENTRY_POINT = pointer(koffi.proto("__stdcall", "PRTL_UMS_SCHEDULER_ENTRY_POINT", VOID /* VOID */, [
	RTL_UMS_SCHEDULER_REASON, /* in RTL_UMS_SCHEDULER_REASON Reason            */
	ULONG_PTR,                /* in ULONG_PTR                ActivationPayload */
	PVOID,                    /* in PVOID                    SchedulerParam    */
]));

export const PIMAGE_TLS_CALLBACK = pointer(koffi.proto("__stdcall", "PIMAGE_TLS_CALLBACK", VOID /* VOID */, [
	PVOID, /*  PVOID DllHandle */
	DWORD, /*  DWORD Reason    */
	PVOID, /*  PVOID Reserved  */
]));

export const PAPCFUNC = pointer(koffi.proto("__stdcall", "PAPCFUNC", VOID /* VOID */, [
	ULONG_PTR, /* in ULONG_PTR Parameter */
]));

export const WAITORTIMERCALLBACKFUNC = pointer(koffi.proto("__stdcall", "WAITORTIMERCALLBACKFUNC", VOID /* VOID */, [
	PVOID,   /*  PVOID    */
	BOOLEAN, /*  BOOLEAN  */
]));
export const WAITORTIMERCALLBACK = WAITORTIMERCALLBACKFUNC;

export const WORKERCALLBACKFUNC = pointer(koffi.proto("__stdcall", "WORKERCALLBACKFUNC", VOID /* VOID */, [
	PVOID, /*  PVOID  */
]));

export const APC_CALLBACK_FUNCTION = pointer(koffi.proto("__stdcall", "APC_CALLBACK_FUNCTION", VOID /* VOID */, [
	DWORD, /*  DWORD  */
	PVOID, /*  PVOID  */
	PVOID, /*  PVOID  */
]));

export const PFLS_CALLBACK_FUNCTION = pointer(koffi.proto("__stdcall", "PFLS_CALLBACK_FUNCTION", VOID /* VOID */, [
	PVOID, /* in PVOID lpFlsData */
]));

export const PSECURE_MEMORY_CACHE_CALLBACK = pointer(koffi.proto("__stdcall", "PSECURE_MEMORY_CACHE_CALLBACK", BOOLEAN /* BOOLEAN */, [
	PVOID,  /*    PVOID  Addr  */
	SIZE_T, /* in SIZE_T Range */
]));

export const PTP_SIMPLE_CALLBACK = pointer(koffi.proto("__stdcall", "PTP_SIMPLE_CALLBACK", VOID /* VOID */, [
	PTP_CALLBACK_INSTANCE, /* in out     PTP_CALLBACK_INSTANCE Instance */
	PVOID,                 /* in out opt PVOID                 Context  */
]));

export const PTP_CLEANUP_GROUP_CANCEL_CALLBACK = pointer(koffi.proto("__stdcall", "PTP_CLEANUP_GROUP_CANCEL_CALLBACK", VOID /* VOID */, [
	PVOID, /* in out opt PVOID ObjectContext  */
	PVOID, /* in out opt PVOID CleanupContext */
]));

export const PTP_WORK_CALLBACK = pointer(koffi.proto("__stdcall", "PTP_WORK_CALLBACK", VOID /* VOID */, [
	PTP_CALLBACK_INSTANCE, /* in out     PTP_CALLBACK_INSTANCE Instance */
	PVOID,                 /* in out opt PVOID                 Context  */
	PTP_WORK,              /* in out     PTP_WORK              Work     */
]));

export const PTP_TIMER_CALLBACK = pointer(koffi.proto("__stdcall", "PTP_TIMER_CALLBACK", VOID /* VOID */, [
	PTP_CALLBACK_INSTANCE, /* in out     PTP_CALLBACK_INSTANCE Instance */
	PVOID,                 /* in out opt PVOID                 Context  */
	PTP_TIMER,             /* in out     PTP_TIMER             Timer    */
]));

export const PTP_WAIT_CALLBACK = pointer(koffi.proto("__stdcall", "PTP_WAIT_CALLBACK", VOID /* VOID */, [
	PTP_CALLBACK_INSTANCE, /* in out     PTP_CALLBACK_INSTANCE Instance   */
	PVOID,                 /* in out opt PVOID                 Context    */
	PTP_WAIT,              /* in out     PTP_WAIT              Wait       */
	TP_WAIT_RESULT,        /* in         TP_WAIT_RESULT        WaitResult */
]));

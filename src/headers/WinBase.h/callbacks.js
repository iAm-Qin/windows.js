import koffi from "koffi";

import {pointer, inout} from "../../types.js";

// minwindef.h
import {
	DWORD,
	PBYTE,
	UINT,
	ULONG, PULONG,
	LPVOID,
} from "../minwindef.h/minWindef.js";

// winnt.h
import {
	HANDLE,
} from "../winnt.h/winnt.js";
import {
	LPSTR, LPWSTR,
	VOID, PVOID,
} from "../winnt.h/winnt.js";

import {LARGE_INTEGER} from "../winnt.h/structs.js";

export const PFIBER_START_ROUTINE = pointer(koffi.proto("__stdcall", "PFIBER_START_ROUTINE", VOID /* VOID */, [
	LPVOID, /*  LPVOID lpFiberParameter */
]));
export const LPFIBER_START_ROUTINE = PFIBER_START_ROUTINE;

export const PFIBER_CALLOUT_ROUTINE = pointer(koffi.proto("__stdcall", "PFIBER_CALLOUT_ROUTINE", LPVOID /* LPVOID */, [
	LPVOID, /*  LPVOID lpParameter */
]));

export const PRESTORE_LAST_ERROR = pointer(koffi.proto("__stdcall", "PRESTORE_LAST_ERROR", VOID /* VOID */, [
	DWORD, /*  DWORD  */
]));

export const PFE_EXPORT_FUNC = pointer(koffi.proto("__stdcall", "PFE_EXPORT_FUNC", DWORD /* DWORD */, [
	PBYTE, /*        PBYTE pbData            */
	PVOID, /* in opt PVOID pvCallbackContext */
	ULONG, /* in     ULONG ulLength          */
]));

export const PFE_IMPORT_FUNC = pointer(koffi.proto("__stdcall", "PFE_IMPORT_FUNC", DWORD /* DWORD */, [
	PBYTE,         /*        PBYTE  pbData            */
	PVOID,         /* in opt PVOID  pvCallbackContext */
	inout(PULONG), /* in out PULONG ulLength          */
]));

export const PGET_SYSTEM_WOW64_DIRECTORY_A = pointer(koffi.proto("__stdcall", "PGET_SYSTEM_WOW64_DIRECTORY_A", UINT /* UINT */, [
	LPSTR, /*    LPSTR lpBuffer */
	UINT,  /* in UINT  uSize    */
]));

export const PGET_SYSTEM_WOW64_DIRECTORY_W = pointer(koffi.proto("__stdcall", "PGET_SYSTEM_WOW64_DIRECTORY_W", UINT /* UINT */, [
	LPWSTR, /*    LPWSTR lpBuffer */
	UINT,   /* in UINT   uSize    */
]));
export const PGET_SYSTEM_WOW64_DIRECTORY_ = PGET_SYSTEM_WOW64_DIRECTORY_W;

export const LPPROGRESS_ROUTINE = pointer(koffi.proto("__stdcall", "LPPROGRESS_ROUTINE", DWORD /* DWORD */, [
	LARGE_INTEGER, /* in     LARGE_INTEGER TotalFileSize          */
	LARGE_INTEGER, /* in     LARGE_INTEGER TotalBytesTransferred  */
	LARGE_INTEGER, /* in     LARGE_INTEGER StreamSize             */
	LARGE_INTEGER, /* in     LARGE_INTEGER StreamBytesTransferred */
	DWORD,         /* in     DWORD         dwStreamNumber         */
	DWORD,         /* in     DWORD         dwCallbackReason       */
	HANDLE,        /* in     HANDLE        hSourceFile            */
	HANDLE,        /* in     HANDLE        hDestinationFile       */
	LPVOID,        /* in opt LPVOID        lpData                 */
]));

// defined in ./structs.js
// export const PCOPYFILE2_PROGRESS_ROUTINE = pointer(koffi.proto("__stdcall", "PCOPYFILE2_PROGRESS_ROUTINE", COPYFILE2_MESSAGE_ACTION /* COPYFILE2_MESSAGE_ACTION */, [
// 	pointer(COPYFILE2_MESSAGE), /* in     const COPYFILE2_MESSAGE * pMessage          */
// 	PVOID,                      /* in opt PVOID                     pvCallbackContext */
// ]));

export const APPLICATION_RECOVERY_CALLBACK = pointer(koffi.proto("__stdcall", "APPLICATION_RECOVERY_CALLBACK", DWORD /* DWORD */, [
	PVOID, /*  PVOID pvParameter */
]));

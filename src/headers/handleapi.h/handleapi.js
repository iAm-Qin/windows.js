import koffi from "koffi";

import {out} from "../../types.js";

// minwindef.h
import {BOOL, DWORD, LPDWORD, LPHANDLE} from "../minwindef.h/minWindef.js";

// winnt.h
import {HANDLE} from "../winnt.h/winnt.js";


const lib = koffi.load("kernel32.dll");
import {createAutoLoader} from "../../internals/loader.js";

export const INVALID_HANDLE_VALUE = (-1);

export function CloseHandle () {};
CloseHandle = createAutoLoader(lib, "CloseHandle", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hObject */
], f => CloseHandle = f);

export function DuplicateHandle () {};
DuplicateHandle = createAutoLoader(lib, "DuplicateHandle", BOOL /* BOOL */, [
	HANDLE,   /* in HANDLE   hSourceProcessHandle */
	HANDLE,   /* in HANDLE   hSourceHandle        */
	HANDLE,   /* in HANDLE   hTargetProcessHandle */
	LPHANDLE, /*    LPHANDLE lpTargetHandle       */
	DWORD,    /* in DWORD    dwDesiredAccess      */
	BOOL,     /* in BOOL     bInheritHandle       */
	DWORD,    /* in DWORD    dwOptions            */
], f => DuplicateHandle = f);

export function CompareObjectHandles () {};
CompareObjectHandles = createAutoLoader(lib, "CompareObjectHandles", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hFirstObjectHandle  */
	HANDLE, /* in HANDLE hSecondObjectHandle */
], f => CompareObjectHandles = f);

export function GetHandleInformation () {};
GetHandleInformation = createAutoLoader(lib, "GetHandleInformation", BOOL /* BOOL */, [
	HANDLE,       /* in  HANDLE  hObject   */
	out(LPDWORD), /* out LPDWORD lpdwFlags */
], f => GetHandleInformation = f);

export function SetHandleInformation () {};
SetHandleInformation = createAutoLoader(lib, "SetHandleInformation", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hObject */
	DWORD,  /* in DWORD  dwMask  */
	DWORD,  /* in DWORD  dwFlags */
], f => SetHandleInformation = f);

// basic
import {HANDLE} from "../winnt.h/winnt.js";

// minwindef.h
import {BOOL, DWORD, LPDWORD, LPHANDLE} from "../minwindef.h/minWindef.js";


export function CloseHandle (hObject: HANDLE): BOOL;
export function DuplicateHandle (hSourceProcessHandle: HANDLE, hSourceHandle: HANDLE, hTargetProcessHandle: HANDLE, lpTargetHandle: LPHANDLE, dwDesiredAccess: DWORD, bInheritHandle: BOOL, dwOptions: DWORD): BOOL;
export function CompareObjectHandles (hFirstObjectHandle: HANDLE, hSecondObjectHandle: HANDLE): BOOL;
export function GetHandleInformation (hObject: HANDLE, lpdwFlags: LPDWORD): BOOL;
export function SetHandleInformation (hObject: HANDLE, dwMask: DWORD, dwFlags: DWORD): BOOL;

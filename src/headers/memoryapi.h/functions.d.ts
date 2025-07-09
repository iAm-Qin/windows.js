// basetsd.h
import {
	ULONG_PTR, PULONG_PTR,
	ULONG64,
	SIZE_T, PSIZE_T,
} from "../basetsd.h/basetsd.js";

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
	HANDLE,
} from "../winnt.h/winnt.js";
import {
	LPCWSTR, PCWSTR,
	VOID, PVOID,
} from "../winnt.h/winnt.js";
import {
	PMEMORY_BASIC_INFORMATION,
} from "../winnt.h/structs.js";

// minWinBase.h
import {
	LPSECURITY_ATTRIBUTES, PSECURITY_ATTRIBUTES,
} from "../minwinbase.h/minWinBase.js";

// memoryapi.h
import {MEMORY_RESOURCE_NOTIFICATION_TYPE, WIN32_MEMORY_INFORMATION_CLASS} from "./memoryapi.js";
import {PWIN32_MEMORY_RANGE_ENTRY} from "./memoryapi.js";
import {PBAD_MEMORY_CALLBACK_ROUTINE} from "./memoryapi.js";


export function VirtualAlloc (lpAddress: LPVOID, dwSize: SIZE_T, flAllocationType: DWORD, flProtect: DWORD): LPVOID;
export function VirtualProtect (lpAddress: LPVOID, dwSize: SIZE_T, flNewProtect: DWORD, lpflOldProtect: PDWORD): BOOL;
export function VirtualQuery (lpAddress: LPCVOID, lpBuffer: PMEMORY_BASIC_INFORMATION, dwLength: SIZE_T): SIZE_T;
export function VirtualAllocEx (hProcess: HANDLE, lpAddress: LPVOID, dwSize: SIZE_T, flAllocationType: DWORD, flProtect: DWORD): LPVOID;
export function VirtualProtectEx (hProcess: HANDLE, lpAddress: LPVOID, dwSize: SIZE_T, flNewProtect: DWORD, lpflOldProtect: PDWORD): BOOL;
export function VirtualQueryEx (hProcess: HANDLE, lpAddress: LPCVOID, lpBuffer: PMEMORY_BASIC_INFORMATION, dwLength: SIZE_T): SIZE_T;
export function ReadProcessMemory (hProcess: HANDLE, lpBaseAddress: LPCVOID, lpBuffer: LPVOID, nSize: SIZE_T, lpNumberOfBytesRead: "SIZE_T*"): BOOL;
export function WriteProcessMemory (hProcess: HANDLE, lpBaseAddress: LPVOID, lpBuffer: LPCVOID, nSize: SIZE_T, lpNumberOfBytesWritten: "SIZE_T*"): BOOL;
export function CreateFileMappingW (hFile: HANDLE, lpFileMappingAttributes: LPSECURITY_ATTRIBUTES, flProtect: DWORD, dwMaximumSizeHigh: DWORD, dwMaximumSizeLow: DWORD, lpName: LPCWSTR): HANDLE;
export function CreateFileMapping (hFile: HANDLE, lpFileMappingAttributes: LPSECURITY_ATTRIBUTES, flProtect: DWORD, dwMaximumSizeHigh: DWORD, dwMaximumSizeLow: DWORD, lpName: LPCWSTR): HANDLE;
export function OpenFileMappingW (dwDesiredAccess: DWORD, bInheritHandle: BOOL, lpName: LPCWSTR): HANDLE;
export function OpenFileMapping (dwDesiredAccess: DWORD, bInheritHandle: BOOL, lpName: LPCWSTR): HANDLE;
export function MapViewOfFile (hFileMappingObject: HANDLE, dwDesiredAccess: DWORD, dwFileOffsetHigh: DWORD, dwFileOffsetLow: DWORD, dwNumberOfBytesToMap: SIZE_T): LPVOID;
export function MapViewOfFileEx (hFileMappingObject: HANDLE, dwDesiredAccess: DWORD, dwFileOffsetHigh: DWORD, dwFileOffsetLow: DWORD, dwNumberOfBytesToMap: SIZE_T, lpBaseAddress: LPVOID): LPVOID;
export function VirtualFreeEx (hProcess: HANDLE, lpAddress: LPVOID, dwSize: SIZE_T, dwFreeType: DWORD);
export function FlushViewOfFile (lpBaseAddress: LPCVOID, dwNumberOfBytesToFlush: SIZE_T): BOOL;
export function UnmapViewOfFile (lpBaseAddress: LPCVOID): BOOL;
export function GetLargePageMinimum (): SIZE_T;
export function GetProcessWorkingSetSizeEx (hProcess: HANDLE, lpMinimumWorkingSetSize: PSIZE_T, lpMaximumWorkingSetSize: PSIZE_T, Flags: PDWORD): BOOL;
export function SetProcessWorkingSetSizeEx (hProcess: HANDLE, dwMinimumWorkingSetSize: SIZE_T, dwMaximumWorkingSetSize: SIZE_T, Flags: DWORD): BOOL;
export function VirtualLock (lpAddress: LPVOID, dwSize: SIZE_T): BOOL;
export function VirtualUnlock (lpAddress: LPVOID, dwSize: SIZE_T): BOOL;
export function GetWriteWatch (dwFlags: DWORD, lpBaseAddress: PVOID, dwRegionSize: SIZE_T, lpAddresses: "PVOID*", lpdwCount: "ULONG_PTR*", lpdwGranularity: LPDWORD): UINT;
export function ResetWriteWatch (lpBaseAddress: LPVOID, dwRegionSize: SIZE_T): UINT;
export function CreateMemoryResourceNotification (NotificationType: MEMORY_RESOURCE_NOTIFICATION_TYPE): HANDLE;
export function QueryMemoryResourceNotification (ResourceNotificationHandle: HANDLE, ResourceState: PBOOL): BOOL;
export function GetSystemFileCacheSize (lpMinimumFileCacheSize: PSIZE_T, lpMaximumFileCacheSize: PSIZE_T, lpFlags: PDWORD): BOOL;
export function SetSystemFileCacheSize (MinimumFileCacheSize: SIZE_T, MaximumFileCacheSize: SIZE_T, Flags: DWORD): BOOL;
export function CreateFileMappingNumaW (hFile: HANDLE, lpFileMappingAttributes: LPSECURITY_ATTRIBUTES, flProtect: DWORD, dwMaximumSizeHigh: DWORD, dwMaximumSizeLow: DWORD, lpName: LPCWSTR, nndPreferred: DWORD): HANDLE;
export function CreateFileMappingNuma (hFile: HANDLE, lpFileMappingAttributes: LPSECURITY_ATTRIBUTES, flProtect: DWORD, dwMaximumSizeHigh: DWORD, dwMaximumSizeLow: DWORD, lpName: LPCWSTR, nndPreferred: DWORD): HANDLE;
export function PrefetchVirtualMemory (hProcess: HANDLE, NumberOfEntries: ULONG_PTR, VirtualAddresses: PWIN32_MEMORY_RANGE_ENTRY, Flags: ULONG): BOOL;
export function CreateFileMappingFromApp (hFile: HANDLE, SecurityAttributes: PSECURITY_ATTRIBUTES, PageProtection: ULONG, MaximumSize: ULONG64, Name: PCWSTR): HANDLE;
export function MapViewOfFileFromApp (hFileMappingObject: HANDLE, DesiredAccess: ULONG, FileOffset: ULONG64, NumberOfBytesToMap: SIZE_T): PVOID;
export function UnmapViewOfFileEx (BaseAddress: PVOID, UnmapFlags: ULONG): BOOL;
export function FreeUserPhysicalPages (hProcess: HANDLE, NumberOfPages: PULONG_PTR, PageArray: PULONG_PTR): BOOL;
export function VirtualAllocExNuma (hProcess: HANDLE, lpAddress: LPVOID, dwSize: SIZE_T, flAllocationType: DWORD, flProtect: DWORD, nndPreferred: DWORD): LPVOID;
export function GetMemoryErrorHandlingCapabilities (Capabilities: PULONG): BOOL;
export function BAD_MEMORY_CALLBACK_ROUTINE (): VOID;
export function RegisterBadMemoryNotification (Callback: PBAD_MEMORY_CALLBACK_ROUTINE): PVOID;
export function UnregisterBadMemoryNotification (RegistrationHandle: PVOID): BOOL;
export function ReclaimVirtualMemory (VirtualAddress: "void *", Size: SIZE_T): DWORD;
export function VirtualAllocFromApp (BaseAddress: PVOID, Size: SIZE_T, AllocationType: ULONG, Protection: ULONG): PVOID;
export function VirtualProtectFromApp (Address: PVOID, Size: SIZE_T, NewProtection: ULONG, OldProtection: PULONG): BOOL;
export function OpenFileMappingFromApp (DesiredAccess: ULONG, InheritHandle: BOOL, Name: PCWSTR): HANDLE;
export function QueryVirtualMemoryInformation (Process: HANDLE, VirtualAddress: "VOID*", MemoryInformationClass: WIN32_MEMORY_INFORMATION_CLASS, MemoryInformation: PVOID, MemoryInformationSize: SIZE_T, ReturnSize: PSIZE_T): BOOL;
export function MapViewOfFileNuma2 (FileMappingHandle: HANDLE, ProcessHandle: HANDLE, Offset: ULONG64, BaseAddress: PVOID, ViewSize: SIZE_T, AllocationType: ULONG, PageProtection: ULONG, PreferredNode: ULONG): PVOID;
export function UnmapViewOfFile2 (Process: HANDLE, BaseAddress: PVOID, UnmapFlags: ULONG): BOOL;
export function VirtualUnlockEx (Process: HANDLE, Address: LPVOID, Size: SIZE_T): BOOL;

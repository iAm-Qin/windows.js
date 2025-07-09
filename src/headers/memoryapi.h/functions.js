import koffi from "koffi";

// basic
import {pointer, out, inout} from "../../types.js";

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


const lib = koffi.load("kernel32.dll");
import {createAutoLoader} from "../../internals/loader.js";

export function VirtualAlloc () {};
VirtualAlloc = createAutoLoader(lib, "VirtualAlloc", LPVOID /* LPVOID */, [
	LPVOID, /* in opt LPVOID lpAddress        */
	SIZE_T, /* in     SIZE_T dwSize           */
	DWORD,  /* in     DWORD  flAllocationType */
	DWORD,  /* in     DWORD  flProtect        */
], f => VirtualAlloc = f);

export function VirtualProtect () {};
VirtualProtect = createAutoLoader(lib, "VirtualProtect", BOOL /* BOOL */, [
	LPVOID,      /* in  LPVOID lpAddress      */
	SIZE_T,      /* in  SIZE_T dwSize         */
	DWORD,       /* in  DWORD  flNewProtect   */
	out(PDWORD), /* out PDWORD lpflOldProtect */
], f => VirtualProtect = f);

export function VirtualQuery () {};
VirtualQuery = createAutoLoader(lib, "VirtualQuery", SIZE_T /* SIZE_T */, [
	LPCVOID,                   /* in opt LPCVOID                   lpAddress */
	PMEMORY_BASIC_INFORMATION, /*        PMEMORY_BASIC_INFORMATION lpBuffer  */
	SIZE_T,                    /* in     SIZE_T                    dwLength  */
], f => VirtualQuery = f);

export function VirtualAllocEx () {};
VirtualAllocEx = createAutoLoader(lib, "VirtualAllocEx", LPVOID /* LPVOID */, [
	HANDLE, /* in     HANDLE hProcess         */
	LPVOID, /* in opt LPVOID lpAddress        */
	SIZE_T, /* in     SIZE_T dwSize           */
	DWORD,  /* in     DWORD  flAllocationType */
	DWORD,  /* in     DWORD  flProtect        */
], f => VirtualAllocEx = f);

export function VirtualProtectEx () {};
VirtualProtectEx = createAutoLoader(lib, "VirtualProtectEx", BOOL /* BOOL */, [
	HANDLE,      /* in  HANDLE hProcess       */
	LPVOID,      /* in  LPVOID lpAddress      */
	SIZE_T,      /* in  SIZE_T dwSize         */
	DWORD,       /* in  DWORD  flNewProtect   */
	out(PDWORD), /* out PDWORD lpflOldProtect */
], f => VirtualProtectEx = f);

export function VirtualQueryEx () {};
VirtualQueryEx = createAutoLoader(lib, "VirtualQueryEx", SIZE_T /* SIZE_T */, [
	HANDLE,                    /* in     HANDLE                    hProcess  */
	LPCVOID,                   /* in opt LPCVOID                   lpAddress */
	PMEMORY_BASIC_INFORMATION, /*        PMEMORY_BASIC_INFORMATION lpBuffer  */
	SIZE_T,                    /* in     SIZE_T                    dwLength  */
], f => VirtualQueryEx = f);

export function ReadProcessMemory () {};
ReadProcessMemory = createAutoLoader(lib, "ReadProcessMemory", BOOL /* BOOL */, [
	HANDLE,               /* in      HANDLE  hProcess            */
	LPCVOID,              /* in      LPCVOID lpBaseAddress       */
	LPVOID,               /*         LPVOID  lpBuffer            */
	SIZE_T,               /* in      SIZE_T  nSize               */
	out(pointer(SIZE_T)), /* out opt SIZE_T* lpNumberOfBytesRead */
], f => ReadProcessMemory = f);

export function WriteProcessMemory () {};
WriteProcessMemory = createAutoLoader(lib, "WriteProcessMemory", BOOL /* BOOL */, [
	HANDLE,               /* in      HANDLE  hProcess               */
	LPVOID,               /* in      LPVOID  lpBaseAddress          */
	LPCVOID,              /*         LPCVOID lpBuffer               */
	SIZE_T,               /* in      SIZE_T  nSize                  */
	out(pointer(SIZE_T)), /* out opt SIZE_T* lpNumberOfBytesWritten */
], f => WriteProcessMemory = f);

export function CreateFileMappingW () {};
CreateFileMappingW = createAutoLoader(lib, "CreateFileMappingW", HANDLE /* HANDLE */, [
	HANDLE,                /* in     HANDLE                hFile                   */
	LPSECURITY_ATTRIBUTES, /* in opt LPSECURITY_ATTRIBUTES lpFileMappingAttributes */
	DWORD,                 /* in     DWORD                 flProtect               */
	DWORD,                 /* in     DWORD                 dwMaximumSizeHigh       */
	DWORD,                 /* in     DWORD                 dwMaximumSizeLow        */
	LPCWSTR,               /* in opt LPCWSTR               lpName                  */
], f => CreateFileMappingW = f);
export {CreateFileMappingW as CreateFileMapping};

export function OpenFileMappingW () {};
OpenFileMappingW = createAutoLoader(lib, "OpenFileMappingW", HANDLE /* HANDLE */, [
	DWORD,   /* in DWORD   dwDesiredAccess */
	BOOL,    /* in BOOL    bInheritHandle  */
	LPCWSTR, /* in LPCWSTR lpName          */
], f => OpenFileMappingW = f);
export {OpenFileMappingW as OpenFileMapping};

export function MapViewOfFile () {};
MapViewOfFile = createAutoLoader(lib, "MapViewOfFile", LPVOID /* LPVOID */, [
	HANDLE, /* in HANDLE hFileMappingObject   */
	DWORD,  /* in DWORD  dwDesiredAccess      */
	DWORD,  /* in DWORD  dwFileOffsetHigh     */
	DWORD,  /* in DWORD  dwFileOffsetLow      */
	SIZE_T, /* in SIZE_T dwNumberOfBytesToMap */
], f => MapViewOfFile = f);

export function MapViewOfFileEx () {};
MapViewOfFileEx = createAutoLoader(lib, "MapViewOfFileEx", LPVOID /* LPVOID */, [
	HANDLE, /* in     HANDLE hFileMappingObject   */
	DWORD,  /* in     DWORD  dwDesiredAccess      */
	DWORD,  /* in     DWORD  dwFileOffsetHigh     */
	DWORD,  /* in     DWORD  dwFileOffsetLow      */
	SIZE_T, /* in     SIZE_T dwNumberOfBytesToMap */
	LPVOID, /* in opt LPVOID lpBaseAddress        */
], f => MapViewOfFileEx = f);

export function FlushViewOfFile () {};
FlushViewOfFile = createAutoLoader(lib, "FlushViewOfFile", BOOL /* BOOL */, [
	LPCVOID, /* in LPCVOID lpBaseAddress          */
	SIZE_T,  /* in SIZE_T  dwNumberOfBytesToFlush */
], f => FlushViewOfFile = f);

export function VirtualFreeEx () {};
VirtualFreeEx = createAutoLoader(lib, "VirtualFreeEx", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hProcess   */
	LPVOID, /*    LPVOID lpAddress  */
	SIZE_T, /* in SIZE_T dwSize     */
	DWORD,  /* in DWORD  dwFreeType */
], f => VirtualFreeEx = f);

export function UnmapViewOfFile () {};
UnmapViewOfFile = createAutoLoader(lib, "UnmapViewOfFile", BOOL /* BOOL */, [
	LPCVOID, /* in LPCVOID lpBaseAddress */
], f => UnmapViewOfFile = f);

export function GetLargePageMinimum () {};
GetLargePageMinimum = createAutoLoader(lib, "GetLargePageMinimum", SIZE_T /* SIZE_T */, [
	/* void */
], f => GetLargePageMinimum = f);

export function GetProcessWorkingSetSizeEx () {};
GetProcessWorkingSetSizeEx = createAutoLoader(lib, "GetProcessWorkingSetSizeEx", BOOL /* BOOL */, [
	HANDLE,       /* in  HANDLE  hProcess                */
	out(PSIZE_T), /* out PSIZE_T lpMinimumWorkingSetSize */
	out(PSIZE_T), /* out PSIZE_T lpMaximumWorkingSetSize */
	out(PDWORD),  /* out PDWORD  Flags                   */
], f => GetProcessWorkingSetSizeEx = f);

export function SetProcessWorkingSetSizeEx () {};
SetProcessWorkingSetSizeEx = createAutoLoader(lib, "SetProcessWorkingSetSizeEx", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hProcess                */
	SIZE_T, /* in SIZE_T dwMinimumWorkingSetSize */
	SIZE_T, /* in SIZE_T dwMaximumWorkingSetSize */
	DWORD,  /* in DWORD  Flags                   */
], f => SetProcessWorkingSetSizeEx = f);

export function VirtualLock () {};
VirtualLock = createAutoLoader(lib, "VirtualLock", BOOL /* BOOL */, [
	LPVOID, /* in LPVOID lpAddress */
	SIZE_T, /* in SIZE_T dwSize    */
], f => VirtualLock = f);

export function VirtualUnlock () {};
VirtualUnlock = createAutoLoader(lib, "VirtualUnlock", BOOL /* BOOL */, [
	LPVOID, /* in LPVOID lpAddress */
	SIZE_T, /* in SIZE_T dwSize    */
], f => VirtualUnlock = f);

export function GetWriteWatch () {};
GetWriteWatch = createAutoLoader(lib, "GetWriteWatch", UINT /* UINT */, [
	DWORD,                     /* in         DWORD      dwFlags         */
	PVOID,                     /* in         PVOID      lpBaseAddress   */
	SIZE_T,                    /* in         SIZE_T     dwRegionSize    */
	pointer(PVOID),            /*            PVOID*     lpAddresses     */
	inout(pointer(ULONG_PTR)), /* in out opt ULONG_PTR* lpdwCount       */
	out(LPDWORD),              /* out opt    LPDWORD    lpdwGranularity */
], f => GetWriteWatch = f);

export function ResetWriteWatch () {};
ResetWriteWatch = createAutoLoader(lib, "ResetWriteWatch", UINT /* UINT */, [
	LPVOID, /* in LPVOID lpBaseAddress */
	SIZE_T, /* in SIZE_T dwRegionSize  */
], f => ResetWriteWatch = f);

export function CreateMemoryResourceNotification () {};
CreateMemoryResourceNotification = createAutoLoader(lib, "CreateMemoryResourceNotification", HANDLE /* HANDLE */, [
	MEMORY_RESOURCE_NOTIFICATION_TYPE, /* in MEMORY_RESOURCE_NOTIFICATION_TYPE NotificationType */
], f => CreateMemoryResourceNotification = f);

export function QueryMemoryResourceNotification () {};
QueryMemoryResourceNotification = createAutoLoader(lib, "QueryMemoryResourceNotification", BOOL /* BOOL */, [
	HANDLE,     /* in  HANDLE ResourceNotificationHandle */
	out(PBOOL), /* out PBOOL  ResourceState              */
], f => QueryMemoryResourceNotification = f);

export function GetSystemFileCacheSize () {};
GetSystemFileCacheSize = createAutoLoader(lib, "GetSystemFileCacheSize", BOOL /* BOOL */, [
	out(PSIZE_T), /* out PSIZE_T lpMinimumFileCacheSize */
	out(PSIZE_T), /* out PSIZE_T lpMaximumFileCacheSize */
	out(PDWORD),  /* out PDWORD  lpFlags                */
], f => GetSystemFileCacheSize = f);

export function SetSystemFileCacheSize () {};
SetSystemFileCacheSize = createAutoLoader(lib, "SetSystemFileCacheSize", BOOL /* BOOL */, [
	SIZE_T, /* in SIZE_T MinimumFileCacheSize */
	SIZE_T, /* in SIZE_T MaximumFileCacheSize */
	DWORD,  /* in DWORD  Flags                */
], f => SetSystemFileCacheSize = f);

export function CreateFileMappingNumaW () {};
CreateFileMappingNumaW = createAutoLoader(lib, "CreateFileMappingNumaW", HANDLE /* HANDLE */, [
	HANDLE,                /* in     HANDLE                hFile                   */
	LPSECURITY_ATTRIBUTES, /* in opt LPSECURITY_ATTRIBUTES lpFileMappingAttributes */
	DWORD,                 /* in     DWORD                 flProtect               */
	DWORD,                 /* in     DWORD                 dwMaximumSizeHigh       */
	DWORD,                 /* in     DWORD                 dwMaximumSizeLow        */
	LPCWSTR,               /* in opt LPCWSTR               lpName                  */
	DWORD,                 /* in     DWORD                 nndPreferred            */
], f => CreateFileMappingNumaW = f);
export {CreateFileMappingNumaW as CreateFileMappingNuma};

export function PrefetchVirtualMemory () {};
PrefetchVirtualMemory = createAutoLoader(lib, "PrefetchVirtualMemory", BOOL /* BOOL */, [
	HANDLE,                    /* in HANDLE                    hProcess         */
	ULONG_PTR,                 /* in ULONG_PTR                 NumberOfEntries  */
	PWIN32_MEMORY_RANGE_ENTRY, /*    PWIN32_MEMORY_RANGE_ENTRY VirtualAddresses */
	ULONG,                     /* in ULONG                     Flags            */
], f => PrefetchVirtualMemory = f);

export function CreateFileMappingFromApp () {};
CreateFileMappingFromApp = createAutoLoader(lib, "CreateFileMappingFromApp", HANDLE /* HANDLE */, [
	HANDLE,               /* in     HANDLE               hFile              */
	PSECURITY_ATTRIBUTES, /* in opt PSECURITY_ATTRIBUTES SecurityAttributes */
	ULONG,                /* in     ULONG                PageProtection     */
	ULONG64,              /* in     ULONG64              MaximumSize        */
	PCWSTR,               /* in opt PCWSTR               Name               */
], f => CreateFileMappingFromApp = f);

export function MapViewOfFileFromApp () {};
MapViewOfFileFromApp = createAutoLoader(lib, "MapViewOfFileFromApp", PVOID /* PVOID */, [
	HANDLE,  /* in HANDLE  hFileMappingObject */
	ULONG,   /* in ULONG   DesiredAccess      */
	ULONG64, /* in ULONG64 FileOffset         */
	SIZE_T,  /* in SIZE_T  NumberOfBytesToMap */
], f => MapViewOfFileFromApp = f);

export function UnmapViewOfFileEx () {};
UnmapViewOfFileEx = createAutoLoader(lib, "UnmapViewOfFileEx", BOOL /* BOOL */, [
	PVOID, /* in PVOID BaseAddress */
	ULONG, /* in ULONG UnmapFlags  */
], f => UnmapViewOfFileEx = f);

export function FreeUserPhysicalPages () {};
FreeUserPhysicalPages = createAutoLoader(lib, "FreeUserPhysicalPages", BOOL /* BOOL */, [
	HANDLE,            /* in     HANDLE     hProcess      */
	inout(PULONG_PTR), /* in out PULONG_PTR NumberOfPages */
	PULONG_PTR,        /*        PULONG_PTR PageArray     */
], f => FreeUserPhysicalPages = f);

export function VirtualAllocExNuma () {};
VirtualAllocExNuma = createAutoLoader(lib, "VirtualAllocExNuma", LPVOID /* LPVOID */, [
	HANDLE, /* in     HANDLE hProcess         */
	LPVOID, /* in opt LPVOID lpAddress        */
	SIZE_T, /* in     SIZE_T dwSize           */
	DWORD,  /* in     DWORD  flAllocationType */
	DWORD,  /* in     DWORD  flProtect        */
	DWORD,  /* in     DWORD  nndPreferred     */
], f => VirtualAllocExNuma = f);

export function GetMemoryErrorHandlingCapabilities () {};
GetMemoryErrorHandlingCapabilities = createAutoLoader(lib, "GetMemoryErrorHandlingCapabilities", BOOL /* BOOL */, [
	out(PULONG), /* out PULONG Capabilities */
], f => GetMemoryErrorHandlingCapabilities = f);

export function BAD_MEMORY_CALLBACK_ROUTINE () {};
BAD_MEMORY_CALLBACK_ROUTINE = createAutoLoader(lib, "BAD_MEMORY_CALLBACK_ROUTINE", VOID /* VOID */, [
	/* void */
], f => BAD_MEMORY_CALLBACK_ROUTINE = f);

export function RegisterBadMemoryNotification () {};
RegisterBadMemoryNotification = createAutoLoader(lib, "RegisterBadMemoryNotification", PVOID /* PVOID */, [
	PBAD_MEMORY_CALLBACK_ROUTINE, /* in PBAD_MEMORY_CALLBACK_ROUTINE Callback */
], f => RegisterBadMemoryNotification = f);

export function UnregisterBadMemoryNotification () {};
UnregisterBadMemoryNotification = createAutoLoader(lib, "UnregisterBadMemoryNotification", BOOL /* BOOL */, [
	PVOID, /* in PVOID RegistrationHandle */
], f => UnregisterBadMemoryNotification = f);

export function ReclaimVirtualMemory () {};
ReclaimVirtualMemory = createAutoLoader(lib, "ReclaimVirtualMemory", DWORD /* DWORD */, [
	pointer(koffi.types.void), /*    void const* VirtualAddress */
	SIZE_T,                    /* in SIZE_T      Size           */
], f => ReclaimVirtualMemory = f);

export function VirtualAllocFromApp () {};
VirtualAllocFromApp = createAutoLoader(lib, "VirtualAllocFromApp", PVOID /* PVOID */, [
	PVOID,  /* in opt PVOID  BaseAddress    */
	SIZE_T, /* in     SIZE_T Size           */
	ULONG,  /* in     ULONG  AllocationType */
	ULONG,  /* in     ULONG  Protection     */
], f => VirtualAllocFromApp = f);

export function VirtualProtectFromApp () {};
VirtualProtectFromApp = createAutoLoader(lib, "VirtualProtectFromApp", BOOL /* BOOL */, [
	PVOID,       /* in  PVOID  Address       */
	SIZE_T,      /* in  SIZE_T Size          */
	ULONG,       /* in  ULONG  NewProtection */
	out(PULONG), /* out PULONG OldProtection */
], f => VirtualProtectFromApp = f);

export function OpenFileMappingFromApp () {};
OpenFileMappingFromApp = createAutoLoader(lib, "OpenFileMappingFromApp", HANDLE /* HANDLE */, [
	ULONG,  /* in ULONG  DesiredAccess */
	BOOL,   /* in BOOL   InheritHandle */
	PCWSTR, /* in PCWSTR Name          */
], f => OpenFileMappingFromApp = f);

export function QueryVirtualMemoryInformation () {};
QueryVirtualMemoryInformation = createAutoLoader(lib, "QueryVirtualMemoryInformation", BOOL /* BOOL */, [
	HANDLE,                         /* in      HANDLE                         Process                */
	pointer(VOID),                  /* in      const VOID*                    VirtualAddress         */
	WIN32_MEMORY_INFORMATION_CLASS, /* in      WIN32_MEMORY_INFORMATION_CLASS MemoryInformationClass */
	PVOID,                          /*         PVOID                          MemoryInformation      */
	SIZE_T,                         /* in      SIZE_T                         MemoryInformationSize  */
	out(PSIZE_T),                   /* out opt PSIZE_T                        ReturnSize             */
], f => QueryVirtualMemoryInformation = f);

export function MapViewOfFileNuma2 () {};
MapViewOfFileNuma2 = createAutoLoader(lib, "MapViewOfFileNuma2", PVOID /* PVOID */, [
	HANDLE,  /* in     HANDLE  FileMappingHandle */
	HANDLE,  /* in     HANDLE  ProcessHandle     */
	ULONG64, /* in     ULONG64 Offset            */
	PVOID,   /* in opt PVOID   BaseAddress       */
	SIZE_T,  /* in     SIZE_T  ViewSize          */
	ULONG,   /* in     ULONG   AllocationType    */
	ULONG,   /* in     ULONG   PageProtection    */
	ULONG,   /* in     ULONG   PreferredNode     */
], f => MapViewOfFileNuma2 = f);

export function UnmapViewOfFile2 () {};
UnmapViewOfFile2 = createAutoLoader(lib, "UnmapViewOfFile2", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE Process     */
	PVOID,  /* in PVOID  BaseAddress */
	ULONG,  /* in ULONG  UnmapFlags  */
], f => UnmapViewOfFile2 = f);

export function VirtualUnlockEx () {};
VirtualUnlockEx = createAutoLoader(lib, "VirtualUnlockEx", BOOL /* BOOL */, [
	HANDLE, /* in opt HANDLE Process */
	LPVOID, /* in     LPVOID Address */
	SIZE_T, /* in     SIZE_T Size    */
], f => VirtualUnlockEx = f);

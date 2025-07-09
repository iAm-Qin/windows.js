import koffi from "koffi";

import {pointer} from "../../types.js";

// basic
import {int, struct, union, bitfield} from "../../types.js";

// basetsd.h
import {SIZE_T} from "../basetsd.h/basetsd.js";

// winnt.h
import {
	SECTION_MAP_WRITE,
	SECTION_MAP_READ,
	SECTION_ALL_ACCESS,
	SECTION_MAP_EXECUTE_EXPLICIT,
	VOID, PVOID,
} from "../winnt.h/winnt.js";

// minwindef.h
import {ULONG} from "../minwindef.h/minWindef.js";

// @formatter: off

export const FILE_MAP_WRITE           = SECTION_MAP_WRITE;
export const FILE_MAP_READ            = SECTION_MAP_READ;
export const FILE_MAP_ALL_ACCESS      = SECTION_ALL_ACCESS;
export const FILE_MAP_EXECUTE         = SECTION_MAP_EXECUTE_EXPLICIT;
export const FILE_MAP_COPY            = 0x00000001;
export const FILE_MAP_RESERVE         = 0x80000000;
export const FILE_MAP_TARGETS_INVALID = 0x40000000;
export const FILE_MAP_LARGE_PAGES     = 0x20000000;


export const MEMORY_RESOURCE_NOTIFICATION_TYPE = int;
export const LowMemoryResourceNotification = 0;
export const HighMemoryResourceNotification = 1;

export const FILE_CACHE_MAX_HARD_ENABLE  = 0x00000001;
export const FILE_CACHE_MAX_HARD_DISABLE = 0x00000002;
export const FILE_CACHE_MIN_HARD_ENABLE  = 0x00000004;
export const FILE_CACHE_MIN_HARD_DISABLE = 0x00000008;

export const WIN32_MEMORY_RANGE_ENTRY = struct({
	VirtualAddress : PVOID,  // PVOID
	NumberOfBytes  : SIZE_T, // SIZE_T
});
export const PWIN32_MEMORY_RANGE_ENTRY = pointer(WIN32_MEMORY_RANGE_ENTRY);

export const MEHC_PATROL_SCRUBBER_PRESENT = 0x1;

export const BAD_MEMORY_CALLBACK_ROUTINE = koffi.proto("__stdcall", "BAD_MEMORY_CALLBACK_ROUTINE", VOID, []);
export const PBAD_MEMORY_CALLBACK_ROUTINE = pointer(BAD_MEMORY_CALLBACK_ROUTINE);

export const OFFER_PRIORITY = int;
export const VmOfferPriorityVeryLow = 1;
export const VmOfferPriorityLow = 2;
export const VmOfferPriorityBelowNormal = 3;
export const VmOfferPriorityNormal = 4;

export const WIN32_MEMORY_INFORMATION_CLASS = int;
export const MemoryRegionInfo = 0;

export const WIN32_MEMORY_REGION_INFORMATION = struct({
	AllocationBase    : PVOID,  // PVOID
	AllocationProtect : ULONG,  // ULONG
	u                 : union({
		Flags : ULONG,  // ULONG
		s     : struct({
			Private        : bitfield(ULONG, 1),  // ULONG
			MappedDataFile : bitfield(ULONG, 1),  // ULONG
			MappedImage    : bitfield(ULONG, 1),  // ULONG
			MappedPageFile : bitfield(ULONG, 1),  // ULONG
			MappedPhysical : bitfield(ULONG, 1),  // ULONG
			DirectMapped   : bitfield(ULONG, 1),  // ULONG
			Reserved       : bitfield(ULONG, 26), // ULONG
		}), // struct
	}), // union
	RegionSize        : SIZE_T, // SIZE_T
	CommitSize        : SIZE_T, // SIZE_T
});

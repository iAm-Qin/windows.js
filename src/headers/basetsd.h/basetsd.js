import koffi from "koffi";

import {isArch64} from "../../types.js";
import {pointer} from "../../types.js";
import {
	char, uchar,
	short, ushort,
	int, uint,
	__int64, u__int64,
	size_t,
} from "../../types.js";

export const POINTER_64 = u__int64;	// typedef unsigned __int64 POINTER_64_INT;

export const INT8 = char;		// typedef signed char         INT8, *PINT8;
export const INT16 = short;		// typedef signed short        INT16, *PINT16;
export const INT32 = int;		// typedef signed int          INT32, *PINT32;
export const INT64 = __int64;	// typedef signed __int64      INT64, *PINT64;
export const UINT8 = uchar;		// typedef unsigned char       UINT8, *PUINT8;
export const UINT16 = ushort;	// typedef unsigned short      UINT16, *PUINT16;
export const UINT32 = uint;		// typedef unsigned int        UINT32, *PUINT32;
export const UINT64 = u__int64;	// typedef unsigned __int64    UINT64, *PUINT64;

//
// The following types are guaranteed to be signed and 32 bits wide.
//

export const LONG32 = int;	// typedef signed int LONG32, *PLONG32;
export const PLONG32 = pointer(LONG32);

//
// The following types are guaranteed to be unsigned and 32 bits wide.
//

export const ULONG32 = koffi.types.uint32;	// typedef unsigned int ULONG32, *PULONG32;
export const PULONG32 = pointer(ULONG32);
export const DWORD32 = koffi.types.uint32;	// typedef unsigned int DWORD32, *PDWORD32;
export const PDWORD32 = pointer(DWORD32);

// 以下前 4 个，从名字看像是指针，实际意思是保证和指针一样大小(详见 SDK 中的解释)。P 开头的才是指针类型。
//
// The INT_PTR is guaranteed to be the same size as a pointer.  Its
// size with change with pointer size (32/64).  It should be used
// anywhere that a pointer is cast to an integer type. UINT_PTR is
// the unsigned variation.
//
export const INT_PTR = size_t;
export const UINT_PTR = size_t;
export const LONG_PTR = size_t;
export const ULONG_PTR = size_t;
export const PINT_PTR = pointer(INT_PTR);
export const PUINT_PTR = pointer(UINT_PTR);
export const PLONG_PTR = pointer(LONG_PTR);
export const PULONG_PTR = pointer(ULONG_PTR);

export const ADDRESS_TAG_BIT = isArch64 ? 0x40000000000n : 0x80000000;

export const SHANDLE_PTR = __int64;
export const HANDLE_PTR = u__int64;
export const UHALF_PTR = isArch64 ? uint : ushort;
export const PUHALF_PTR = pointer(UHALF_PTR);
export const HALF_PTR = isArch64 ? int : short;
export const PHALF_PTR = pointer(HALF_PTR);

//
// SIZE_T used for counts or ranges which need to span the range of
// of a pointer.  SSIZE_T is the signed variation.
//

export const SIZE_T = size_t;		// typedef ULONG_PTR SIZE_T, *PSIZE_T;
export const PSIZE_T = pointer(SIZE_T);
export const SSIZE_T = size_t;		// typedef LONG_PTR SSIZE_T, *PSSIZE_T;
export const PSSIZE_T = pointer(SIZE_T);

export const MAXUINT_PTR = isArch64 ? 0xFFFF_FFFF_FFFF_FFFFn : 0xFFFF_FFFF;
export const MAXINT_PTR = isArch64 ? 0x7FFF_FFFF_FFFF_FFFFn : 0x7FFF_FFFF;
export const MININT_PTR = isArch64 ? -0x8000_0000_0000_0000n : -0x8000_0000;
export const MAXULONG_PTR = isArch64 ? 0xFFFF_FFFF_FFFF_FFFFn : 0xFFFF_FFFF;
export const MAXLONG_PTR = isArch64 ? 0x7FFF_FFFF_FFFF_FFFFn : 0x7FFF_FFFF;
export const MINLONG_PTR = isArch64 ? -0x8000_0000_0000_0000n : -0x8000_0000;
export const MAXUHALF_PTR = isArch64 ? 0xFFFF_FFFF : 0xFFFF;
export const MAXHALF_PTR = isArch64 ? 0x7FFF_FFFF : 0x7FFF;
export const MINHALF_PTR = isArch64 ? -0x8000_0000 : -0x8000;

export const MAXUINT8 = 0xFF;
export const MAXINT8 = 0x7F;
export const MININT8 = -0x80;

export const MAXUINT16 = 0xFFFF;
export const MAXINT16 = 0x7FFF;
export const MININT16 = -0x8000;

export const MAXUINT32 = 0xFFFF_FFFF;
export const MAXINT32 = 0x7FFF_FFFF;
export const MININT32 = -0x8000_0000;

export const MAXUINT64 = 0xFFFF_FFFF_FFFF_FFFFn;
export const MAXINT64 = 0x7FFF_FFFF_FFFF_FFFFn;
export const MININT64 = -0x8000_0000_0000_0000n;

export const MAXULONG32 = 0xFFFF_FFFF;
export const MAXLONG32 = 0x7FFF_FFFF;
export const MINLONG32 = -0x8000_0000;

export const MAXULONG64 = 0xFFFF_FFFF_FFFF_FFFFn;
export const MAXLONG64 = 0x7FFF_FFFF_FFFF_FFFFn;
export const MINLONG64 = -0x8000_0000_0000_0000n;

export const MAXULONGLONG = 0xFFFF_FFFF_FFFF_FFFFn;
export const MINLONGLONG = -0x8000_0000_0000_0000n;

export const MAXSIZE_T = isArch64 ? 0xFFFF_FFFF_FFFF_FFFFn : 0xFFFF_FFFF;
export const MAXSSIZE_T = isArch64 ? 0x7FFF_FFFF_FFFF_FFFFn : 0x7FFF_FFFF;
export const MINSSIZE_T = isArch64 ? -0x8000_0000_0000_0000n : -0x8000_0000;

export const MAXUINT = 0xFFFF_FFFF;
export const MAXINT = 0x7FFF_FFFF;
export const MININT = -0x8000_0000;

export const MAXDWORD32 = 0xFFFF_FFFF;
export const MAXDWORD64 = 0xFFFF_FFFF_FFFF_FFFFn;

//
// Add Windows flavor DWORD_PTR types
//

export const DWORD_PTR = ULONG_PTR;			// typedef ULONG_PTR DWORD_PTR, *PDWORD_PTR;
export const PDWORD_PTR = pointer(ULONG_PTR);

//
// The following types are guaranteed to be signed and 64 bits wide.
//

export const LONG64 = __int64;// typedef __int64 LONG64, *PLONG64;
export const PLONG64 = pointer(LONG64);

//
// The following types are guaranteed to be unsigned and 64 bits wide.
//

export const ULONG64 = u__int64;	// typedef unsigned __int64 ULONG64, *PULONG64;
export const PULONG64 = pointer(ULONG64);
export const DWORD64 = u__int64;	// typedef unsigned __int64 DWORD64, *PDWORD64;
export const PDWORD64 = pointer(DWORD64);

//
// Legacy thread affinity.
//

export const KAFFINITY = ULONG_PTR;					// typedef ULONG_PTR KAFFINITY;
export const PKAFFINITY = pointer(KAFFINITY);	// typedef KAFFINITY *PKAFFINITY;



import koffi from "koffi";

import {typecast} from "../../macros.js";

import {
	struct,
	uchar,
	ushort,
	int, uint,
	long, ulong,
	u__int64,
	float,
} from "../../types.js";
import {pointer} from "../../types.js";

// basetsd.h
import {INT_PTR, UINT_PTR, LONG_PTR, DWORD_PTR} from "../basetsd.h/basetsd.js";

// winnt.h
import {HANDLE} from "../winnt.h/minWinnt.js";

export const ULONG = ulong;					// typedef unsigned long ULONG;
export const PULONG = pointer(ULONG);		// typedef ULONG *PULONG;
export const USHORT = ushort;				// typedef unsigned short USHORT;
export const PUSHORT = pointer(USHORT);		// typedef USHORT *PUSHORT;
export const UCHAR = uchar;					// typedef unsigned char UCHAR;
export const PUCHAR = pointer(UCHAR);		// typedef UCHAR *PUCHAR;
export const PSZ = koffi.types.string;		// typedef _Null_terminated_ char *PSZ;

export const MAX_PATH = 260;

export const FALSE = 0;
export const TRUE = 1;

export const QWORD = u__int64;	// 我定义的，非 windows sdk
export const DWORD = ulong;					// typedef unsigned long       DWORD;
export const BOOL = int;					// typedef int                 BOOL;	// printf("%lu\n", sizeof(BOOL));	// 4
export const BYTE = uchar;					// typedef unsigned char       BYTE;
export const WORD = ushort;					// typedef unsigned short      WORD;
export const FLOAT = float;					// typedef float               FLOAT;
export const PFLOAT = pointer(FLOAT);		// typedef FLOAT               *PFLOAT;
export const PBOOL = pointer(BOOL);			// typedef BOOL near           *PBOOL;
export const LPBOOL = pointer(BOOL);		// typedef BOOL far            *LPBOOL;
export const PBYTE = pointer(BYTE);			// typedef BYTE near           *PBYTE;
export const LPBYTE = pointer(BYTE);		// typedef BYTE far            *LPBYTE;
export const PINT = pointer(int);			// typedef int near            *PINT;
export const LPINT = pointer(int);			// typedef int far             *LPINT;
export const PWORD = pointer(WORD);			// typedef WORD near           *PWORD;
export const LPWORD = pointer(WORD);		// typedef WORD far            *LPWORD;
export const LPLONG = pointer(long);		// typedef long far            *LPLONG;
export const PDWORD = pointer(DWORD);		// typedef DWORD near          *PDWORD;
export const LPDWORD = pointer(DWORD);		// typedef DWORD far           *LPDWORD;
export const LPVOID = pointer(koffi.types.void);	// typedef void far            *LPVOID;
export const LPCVOID = pointer(koffi.types.void);	// typedef CONST void far      *LPCVOID;

export const INT = int;						// typedef int                 INT;
export const UINT = uint;					// typedef unsigned int        UINT;
export const PUINT = pointer(uint);			// typedef unsigned int        *PUINT;

/* Types use for passing & returning polymorphic values */
export const WPARAM = UINT_PTR;				// typedef UINT_PTR            WPARAM;
export const LPARAM = LONG_PTR;				// typedef LONG_PTR            LPARAM;
export const LRESULT = LONG_PTR;			// typedef LONG_PTR            LRESULT;

export function LOWORD (l) {
	return typecast(WORD, BigInt(typecast(DWORD_PTR, l)) & 0xFFFFn);
}

export function HIWORD (l) {
	return typecast(WORD, (BigInt(typecast(DWORD_PTR, l)) >> 16n) & 0xFFFFn);
}

export function LOBYTE (w) {
	return typecast(BYTE, BigInt(typecast(DWORD_PTR, w)) & 0xFFFFn);
}

export function HIBYTE (w) {
	return typecast(BYTE, (BigInt(typecast(DWORD_PTR, w)) >> 16n) & 0xFFFFn);
}

export const SPHANDLE = HANDLE;				// typedef HANDLE NEAR         *SPHANDLE;
export const LPHANDLE = HANDLE;				// typedef HANDLE FAR          *LPHANDLE;
export const HGLOBAL = HANDLE;				// typedef HANDLE              HGLOBAL;
export const HLOCAL = HANDLE;				// typedef HANDLE              HLOCAL;
export const GLOBALHANDLE = HANDLE;			// typedef HANDLE              GLOBALHANDLE;
export const LOCALHANDLE = HANDLE;			// typedef HANDLE              LOCALHANDLE;

export const FARPROC = pointer(koffi.proto("__stdcall", "FARPROC", INT_PTR /* INT_PTR */, []));
export const NEARPROC = pointer(koffi.proto("__stdcall", "NEARPROC", INT_PTR /* INT_PTR */, []));
export const PROC = pointer(koffi.proto("__stdcall", "PROC", INT_PTR /* INT_PTR */, []));

export const ATOM = WORD;	// typedef WORD                ATOM;   //BUGBUG - might want to remove this from minwin

export const HKEY = HANDLE;					// DECLARE_HANDLE(HKEY);
export const PHKEY = pointer(HKEY);			// typedef HKEY *PHKEY;
export const HMETAFILE = HANDLE;			// DECLARE_HANDLE(HMETAFILE);
export const HINSTANCE = HANDLE;			// DECLARE_HANDLE(HINSTANCE);
export const HMODULE = HINSTANCE;	// typedef HINSTANCE HMODULE;      /* HMODULEs can be used in place of HINSTANCEs */
export const HRGN = HANDLE;					// DECLARE_HANDLE(HRGN);
export const HRSRC = HANDLE;				// DECLARE_HANDLE(HRSRC);
export const HSPRITE = HANDLE;				// DECLARE_HANDLE(HSPRITE);
export const HLSURF = HANDLE;				// DECLARE_HANDLE(HLSURF);
export const HSTR = HANDLE;					// DECLARE_HANDLE(HSTR);
export const HTASK = HANDLE;				// DECLARE_HANDLE(HTASK);
export const HWINSTA = HANDLE;				// DECLARE_HANDLE(HWINSTA);
export const HKL = HANDLE;					// DECLARE_HANDLE(HKL);

export const HFILE = int;					// typedef int HFILE;

//
//  File System time stamps are represented with the following structure:
//

// @formatter: off
export const FILETIME = struct({
	dwLowDateTime  : DWORD, // DWORD
	dwHighDateTime : DWORD, // DWORD
});
// @formatter: on
export const PFILETIME = pointer(FILETIME);
export const LPFILETIME = PFILETIME;

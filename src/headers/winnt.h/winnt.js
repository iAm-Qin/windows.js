import koffi from "koffi";

import {array, struct, pointer, sizeof} from "../../types.js";
import {__int64, u__int64, char, int, isArch64, long, short, wchar_t} from "../../types.js";

import {L, TEXT, typecast} from "../../macros.js";

// basetsd.h
import {LONG_PTR, MINLONG64, ULONG_PTR} from "../basetsd.h/basetsd.js";

// minwindef.h
import {BYTE, DWORD, FALSE, PDWORD, TRUE, WORD} from "../minwindef.h/minWindef.js";


//region forward declarations

const ULONGLONG = u__int64;		// typedef unsigned __int64 ULONGLONG;

//endregion

// @formatter: off

export const ANYSIZE_ARRAY = 1;

export const MAX_NATURAL_ALIGNMENT = isArch64 ? sizeof(ULONGLONG) : sizeof(DWORD);
export const MEMORY_ALLOCATION_ALIGNMENT = isArch64 ? 16 : 8;
export const SYSTEM_CACHE_ALIGNMENT_SIZE = 64;

export const PRAGMA_DEPRECATED_DDK = 1;

// begin_ntoshvp

//
// Void
//

export const PVOID = pointer(koffi.types.void);		// typedef void *PVOID;
export const PVOID64 = pointer(koffi.types.void);	// typedef void * POINTER_64 PVOID64;


//
// Basics
//

export const VOID = koffi.types.void;	// #define VOID void
export const CHAR = char;				// typedef char CHAR;
export const SHORT = short;				// typedef short SHORT;
export const LONG = long;				// typedef long LONG;
export const INT = int;					// typedef int INT;

//
// UNICODE (Wide Character) types
//

export const WCHAR = wchar_t;		// typedef wchar_t WCHAR;

export const PWCHAR = koffi.types.str16;
export const LPWCH = koffi.types.str16;
export const PWCH = koffi.types.str16;
export const LPCWCH = koffi.types.str16;
export const PCWCH = koffi.types.str16;

export const NWPSTR = koffi.types.str16;
export const LPWSTR = koffi.types.str16;
export const PWSTR = koffi.types.str16;
export const PZPWSTR = pointer(PWSTR);
export const PCZPWSTR = pointer(PWSTR);
export const LPUWSTR = koffi.types.str16;	// 带 U 的是 UNALIGNED，本节(UNICODE (Wide Character) types)下同
export const PUWSTR = koffi.types.str16;
export const LPCWSTR = koffi.types.str16;
export const PCWSTR = koffi.types.str16;
export const PZPCWSTR = pointer(PCWSTR);
export const PCZPCWSTR = pointer(PCWSTR);
export const LPCUWSTR = koffi.types.str16;
export const PCUWSTR = koffi.types.str16;

export const PZZWSTR = koffi.types.str16;
export const PCZZWSTR = koffi.types.str16;
export const PUZZWSTR = koffi.types.str16;
export const PCUZZWSTR = koffi.types.str16;

export const PNZWCH = koffi.types.str16;
export const PCNZWCH = koffi.types.str16;
export const PUNZWCH = koffi.types.str16;
export const PCUNZWCH = koffi.types.str16;

export const LPCWCHAR = koffi.types.str16;
export const PCWCHAR = koffi.types.str16;
export const LPCUWCHAR = koffi.types.str16;
export const PCUWCHAR = koffi.types.str16;

//
//  UCS (Universal Character Set) types
//

export const UCSCHAR = koffi.types.uint32;

//
//  Even pre-Unicode agreement, UCS values are always in the
//  range U+00000000 to U+7FFFFFFF, so we'll pick an obvious
//  value.

export const UCSCHAR_INVALID_CHARACTER = (0xffffffff);

export const MIN_UCSCHAR = (0);

//
//  We'll assume here that the ISO-10646 / Unicode agreement
//  not to assign code points after U+0010FFFF holds so that
//  we do not have to have separate "UCSCHAR" and "UNICODECHAR"
//  types.
//

export const MAX_UCSCHAR = (0x0010FFFF);

export const PUCSCHAR = pointer(UCSCHAR);
export const PCUCSCHAR = pointer(UCSCHAR);

export const PUCSSTR = pointer(UCSCHAR);
export const PUUCSSTR = pointer(UCSCHAR);	// 带 U 的是 UNALIGNED，本节(UCS (Universal Character Set) types)下同

export const PCUCSSTR = pointer(UCSCHAR);
export const PCUUCSSTR = pointer(UCSCHAR);

export const PUUCSCHAR = pointer(UCSCHAR);
export const PCUUCSCHAR = pointer(UCSCHAR);

//
// ANSI (Multi-byte Character) types
//
export const PCHAR = pointer(CHAR);
export const LPCH = pointer(CHAR);
export const PCH = pointer(CHAR);
export const LPCCH = pointer(CHAR);
export const PCCH = pointer(CHAR);

export const NPSTR = koffi.types.string;
export const LPSTR = koffi.types.string;
export const PSTR = koffi.types.string;
export const PZPSTR = koffi.types.string;
export const PCZPSTR = koffi.types.string;
export const LPCSTR = koffi.types.string;
export const PCSTR = koffi.types.string;
export const PZPCSTR = koffi.types.string;
export const PCZPCSTR = koffi.types.string;

export const PZZSTR = koffi.types.string;
export const PCZZSTR = koffi.types.string;

export const PNZCH = pointer(CHAR);
export const PCNZCH = pointer(CHAR);


//
// Neutral ANSI/UNICODE types and macros
//
export const TCHAR = WCHAR;
export const PTCHAR = koffi.types.string;
export const TBYTE = WCHAR;
export const PTBYTE = koffi.types.string;
export const LPTCH = LPWCH;
export const PTCH = LPWCH;
export const LPCTCH = LPCWCH;
export const PCTCH = LPCWCH;
export const PTSTR = LPWSTR;
export const LPTSTR = LPWSTR;
export const PCTSTR = LPCWSTR;
export const LPCTSTR = LPCWSTR;
export const PUTSTR = LPUWSTR;
export const LPUTSTR = LPUWSTR;
export const PCUTSTR = LPCUWSTR;
export const LPCUTSTR = LPCUWSTR;
export const LP = LPWSTR;
export const PZZTSTR = PZZWSTR;
export const PCZZTSTR = PCZZWSTR;
export const PUZZTSTR = PUZZWSTR;
export const PCUZZTSTR = PCUZZWSTR;
export const PZPTSTR = PZPWSTR;
export const PNZTCH = PNZWCH;
export const PCNZTCH = PCNZWCH;
export const PUNZTCH = PUNZWCH;
export const PCUNZTCH = PCUNZWCH;

export const PSHORT = pointer(SHORT);
export const PLONG = pointer(LONG);

export const ALL_PROCESSOR_GROUPS = 0xffff;

export const MAXIMUM_PROC_PER_GROUP = isArch64 ? 64 : 32;
export const MAXIMUM_PROCESSORS = MAXIMUM_PROC_PER_GROUP;

// begin_ntoshvp

//
// Handle to an Object
//

// minwindef.h 循环引用
export {HANDLE, PHANDLE} from './minWinnt.js';

// end_ntoshvp

//
// Flag (bit) fields
//

export const FCHAR = BYTE;
export const FSHORT = WORD;
export const FLONG = DWORD;

// begin_ntoshvp

export const HRESULT = LONG;

// end_ntoshvp

export const CCHAR = char;
export const LCID = DWORD;
export const PLCID = PDWORD;
export const LANGID = WORD;

export const APPLICATION_ERROR_MASK = 0x20000000;
export const ERROR_SEVERITY_SUCCESS = 0x00000000;
export const ERROR_SEVERITY_INFORMATIONAL = 0x40000000;
export const ERROR_SEVERITY_WARNING = 0x80000000;
export const ERROR_SEVERITY_ERROR = 0xC0000000;
// begin_ntoshvp

export const LONGLONG = __int64;	// typedef __int64 LONGLONG;
export {ULONGLONG};					// typedef unsigned __int64 ULONGLONG;

export const MAXLONGLONG = (0x7fffffffffffffffn);

export const PLONGLONG = pointer(LONGLONG);		// typedef LONGLONG *PLONGLONG;
export const PULONGLONG = pointer(ULONGLONG);	// typedef ULONGLONG *PULONGLONG;

export const USN = LONGLONG;

//
// Reference count.
//

export const RTL_REFERENCE_COUNT = LONG_PTR;
export const PRTL_REFERENCE_COUNT = pointer(LONG_PTR);
export const RTL_REFERENCE_COUNT32 = LONG;
export const PRTL_REFERENCE_COUNT32 = pointer(LONG);

export const DWORDLONG = ULONGLONG;
export const PDWORDLONG = pointer(DWORDLONG);

//
// Define rotate intrinsics.
//

// export const RotateLeft8 = _rotl8;
// export const RotateLeft16 = _rotl16;
// export const RotateRight8 = _rotr8;
// export const RotateRight16 = _rotr16;

// export const RotateLeft32 = _rotl;
// export const RotateLeft64 = _rotl64;
// export const RotateRight32 = _rotr;
// export const RotateRight64 = _rotr64;

export const ANSI_NULL = (0);
export const UNICODE_NULL = (0);
export const UNICODE_STRING_MAX_BYTES = (65534);
export const UNICODE_STRING_MAX_CHARS = (32767);
export const BOOLEAN = BYTE;
export const PBOOLEAN = pointer(BOOLEAN);

export const MINCHAR = 0x80;
export const MAXCHAR = 0x7f;
export const MINSHORT = 0x8000;
export const MAXSHORT = 0x7fff;
export const MINLONG = 0x80000000;
export const MAXLONG = 0x7fffffff;
export const MAXBYTE = 0xff;
export const MAXWORD = 0xffff;
export const MAXDWORD = 0xffffffff;
// begin_ntoshvp
//
// Calculate the byte offset of a field in a structure of type type.
//

export /*@__NO_SIDE_EFFECTS__*/ function FIELD_OFFSET (type, field) {
	const offset = koffi.offsetof(type, field);
	return typecast(LONG, offset);
}

export /*@__NO_SIDE_EFFECTS__*/ function UFIELD_OFFSET (type, field) {
	const offset = koffi.offsetof(type, field);
	return typecast(DWORD, offset);
}

//
// Calculate the size of a field in a structure of type type, without
// knowing or stating the type of the field.
//
export /*@__NO_SIDE_EFFECTS__*/ function RTL_FIELD_SIZE (type, field) {
	const member = koffi.introspect(type).members[field];
	if (undefined === member) {
		throw `There's no field '${field}' in '${type.name}'.`;
	}
	return sizeof(member.type);
}

//
// Calculate the size of a structure of type type up through and
// including a field.
//
export /*@__NO_SIDE_EFFECTS__*/ function RTL_SIZEOF_THROUGH_FIELD (type, field) {
	return (FIELD_OFFSET(type, field) + RTL_FIELD_SIZE(type, field));
}

// end_ntoshvp

//
//  RTL_CONTAINS_FIELD usage:
//
//      if (RTL_CONTAINS_FIELD(pBlock, pBlock->cbSize, dwMumble))
//          // safe to use pBlock->dwMumble
//
export /*@__NO_SIDE_EFFECTS__*/ function RTL_CONTAINS_FIELD (Struct, Size, Field) {
	return ( FIELD_OFFSET(Struct, Field) + RTL_FIELD_SIZE(Struct, Field) <= (Size) );
}


//
// Enclave ID definitions
//

export const ENCLAVE_SHORT_ID_LENGTH            = 16;
export const ENCLAVE_LONG_ID_LENGTH             = 32;

export const VER_SERVER_NT                      = 0x80000000;
export const VER_WORKSTATION_NT                 = 0x40000000;
export const VER_SUITE_SMALLBUSINESS            = 0x00000001;
export const VER_SUITE_ENTERPRISE               = 0x00000002;
export const VER_SUITE_BACKOFFICE               = 0x00000004;
export const VER_SUITE_COMMUNICATIONS           = 0x00000008;
export const VER_SUITE_TERMINAL                 = 0x00000010;
export const VER_SUITE_SMALLBUSINESS_RESTRICTED = 0x00000020;
export const VER_SUITE_EMBEDDEDNT               = 0x00000040;
export const VER_SUITE_DATACENTER               = 0x00000080;
export const VER_SUITE_SINGLEUSERTS             = 0x00000100;
export const VER_SUITE_PERSONAL                 = 0x00000200;
export const VER_SUITE_BLADE                    = 0x00000400;
export const VER_SUITE_EMBEDDED_RESTRICTED      = 0x00000800;
export const VER_SUITE_SECURITY_APPLIANCE       = 0x00001000;
export const VER_SUITE_STORAGE_SERVER           = 0x00002000;
export const VER_SUITE_COMPUTE_SERVER           = 0x00004000;
export const VER_SUITE_WH_SERVER                = 0x00008000;
export const VER_SUITE_MULTIUSERTS              = 0x00020000;



//
// Product types
// This list grows with each OS release.
//
// There is no ordering of values to ensure callers
// do an equality test i.e. greater-than and less-than
// comparisons are not useful.
//
// NOTE: Values in this list should never be deleted.
//       When a product-type 'X' gets dropped from a
//       OS release onwards, the value of 'X' continues
//       to be used in the mapping table of GetProductInfo.
//

export const PRODUCT_UNDEFINED                           = 0x00000000;
export const PRODUCT_ULTIMATE                            = 0x00000001;
export const PRODUCT_HOME_BASIC                          = 0x00000002;
export const PRODUCT_HOME_PREMIUM                        = 0x00000003;
export const PRODUCT_ENTERPRISE                          = 0x00000004;
export const PRODUCT_HOME_BASIC_N                        = 0x00000005;
export const PRODUCT_BUSINESS                            = 0x00000006;
export const PRODUCT_STANDARD_SERVER                     = 0x00000007;
export const PRODUCT_DATACENTER_SERVER                   = 0x00000008;
export const PRODUCT_SMALLBUSINESS_SERVER                = 0x00000009;
export const PRODUCT_STARTER                             = 0x0000000B;
export const PRODUCT_DATACENTER_SERVER_CORE              = 0x0000000C;
export const PRODUCT_STANDARD_SERVER_CORE                = 0x0000000D;
export const PRODUCT_ENTERPRISE_SERVER_CORE              = 0x0000000E;
export const PRODUCT_ENTERPRISE_SERVER_IA64              = 0x0000000F;
export const PRODUCT_BUSINESS_N                          = 0x00000010;
export const PRODUCT_WEB_SERVER                          = 0x00000011;
export const PRODUCT_CLUSTER_SERVER                      = 0x00000012;
export const PRODUCT_HOME_SERVER                         = 0x00000013;
export const PRODUCT_STORAGE_EXPRESS_SERVER              = 0x00000014;
export const PRODUCT_STORAGE_STANDARD_SERVER             = 0x00000015;
export const PRODUCT_STORAGE_WORKGROUP_SERVER            = 0x00000016;
export const PRODUCT_STORAGE_ENTERPRISE_SERVER           = 0x00000017;
export const PRODUCT_SERVER_FOR_SMALLBUSINESS            = 0x00000018;
export const PRODUCT_SMALLBUSINESS_SERVER_PREMIUM        = 0x00000019;
export const PRODUCT_ENTERPRISE_N                        = 0x0000001B;
export const PRODUCT_ULTIMATE_N                          = 0x0000001C;
export const PRODUCT_WEB_SERVER_CORE                     = 0x0000001D;
export const PRODUCT_MEDIUMBUSINESS_SERVER_MANAGEMENT    = 0x0000001E;
export const PRODUCT_MEDIUMBUSINESS_SERVER_SECURITY      = 0x0000001F;
export const PRODUCT_MEDIUMBUSINESS_SERVER_MESSAGING     = 0x00000020;
export const PRODUCT_SERVER_FOUNDATION                   = 0x00000021;
export const PRODUCT_HOME_PREMIUM_SERVER                 = 0x00000022;
export const PRODUCT_SERVER_FOR_SMALLBUSINESS_V          = 0x00000023;
export const PRODUCT_STANDARD_SERVER_V                   = 0x00000024;
export const PRODUCT_DATACENTER_SERVER_V                 = 0x00000025;
export const PRODUCT_ENTERPRISE_SERVER_V                 = 0x00000026;
export const PRODUCT_DATACENTER_SERVER_CORE_V            = 0x00000027;
export const PRODUCT_STANDARD_SERVER_CORE_V              = 0x00000028;
export const PRODUCT_ENTERPRISE_SERVER_CORE_V            = 0x00000029;
export const PRODUCT_STORAGE_EXPRESS_SERVER_CORE         = 0x0000002B;
export const PRODUCT_STORAGE_STANDARD_SERVER_CORE        = 0x0000002C;
export const PRODUCT_STORAGE_WORKGROUP_SERVER_CORE       = 0x0000002D;
export const PRODUCT_STORAGE_ENTERPRISE_SERVER_CORE      = 0x0000002E;
export const PRODUCT_STARTER_N                           = 0x0000002F;
export const PRODUCT_PROFESSIONAL                        = 0x00000030;
export const PRODUCT_PROFESSIONAL_N                      = 0x00000031;
export const PRODUCT_SB_SOLUTION_SERVER                  = 0x00000032;
export const PRODUCT_SERVER_FOR_SB_SOLUTIONS             = 0x00000033;
export const PRODUCT_STANDARD_SERVER_SOLUTIONS           = 0x00000034;
export const PRODUCT_STANDARD_SERVER_SOLUTIONS_CORE      = 0x00000035;
export const PRODUCT_SB_SOLUTION_SERVER_EM               = 0x00000036;
export const PRODUCT_SERVER_FOR_SB_SOLUTIONS_EM          = 0x00000037;
export const PRODUCT_SOLUTION_EMBEDDEDSERVER             = 0x00000038;
export const PRODUCT_SOLUTION_EMBEDDEDSERVER_CORE        = 0x00000039;
export const PRODUCT_ESSENTIALBUSINESS_SERVER_MGMT       = 0x0000003B;
export const PRODUCT_ESSENTIALBUSINESS_SERVER_ADDL       = 0x0000003C;
export const PRODUCT_ESSENTIALBUSINESS_SERVER_MGMTSVC    = 0x0000003D;
export const PRODUCT_ESSENTIALBUSINESS_SERVER_ADDLSVC    = 0x0000003E;
export const PRODUCT_SMALLBUSINESS_SERVER_PREMIUM_CORE   = 0x0000003F;
export const PRODUCT_CLUSTER_SERVER_V                    = 0x00000040;
export const PRODUCT_EMBEDDED                            = 0x00000041;
export const PRODUCT_STARTER_E                           = 0x00000042;
export const PRODUCT_HOME_BASIC_E                        = 0x00000043;
export const PRODUCT_HOME_PREMIUM_E                      = 0x00000044;
export const PRODUCT_PROFESSIONAL_E                      = 0x00000045;
export const PRODUCT_ENTERPRISE_E                        = 0x00000046;
export const PRODUCT_ULTIMATE_E                          = 0x00000047;
export const PRODUCT_ENTERPRISE_EVALUATION               = 0x00000048;
export const PRODUCT_MULTIPOINT_STANDARD_SERVER          = 0x0000004C;
export const PRODUCT_MULTIPOINT_PREMIUM_SERVER           = 0x0000004D;
export const PRODUCT_STANDARD_EVALUATION_SERVER          = 0x0000004F;
export const PRODUCT_DATACENTER_EVALUATION_SERVER        = 0x00000050;
export const PRODUCT_ENTERPRISE_N_EVALUATION             = 0x00000054;
export const PRODUCT_EMBEDDED_AUTOMOTIVE                 = 0x00000055;
export const PRODUCT_EMBEDDED_INDUSTRY_A                 = 0x00000056;
export const PRODUCT_THINPC                              = 0x00000057;
export const PRODUCT_EMBEDDED_A                          = 0x00000058;
export const PRODUCT_EMBEDDED_INDUSTRY                   = 0x00000059;
export const PRODUCT_EMBEDDED_INDUSTRY_E                 = 0x0000005B;
export const PRODUCT_EMBEDDED_INDUSTRY_A_E               = 0x0000005C;
export const PRODUCT_STORAGE_WORKGROUP_EVALUATION_SERVER = 0x0000005F;
export const PRODUCT_STORAGE_STANDARD_EVALUATION_SERVER  = 0x00000060;
export const PRODUCT_CORE_ARM                            = 0x00000061;
export const PRODUCT_CORE_N                              = 0x00000062;
export const PRODUCT_CORE_COUNTRYSPECIFIC                = 0x00000063;
export const PRODUCT_CORE_SINGLELANGUAGE                 = 0x00000064;
export const PRODUCT_CORE                                = 0x00000065;
export const PRODUCT_PROFESSIONAL_WMC                    = 0x00000067;
export const PRODUCT_EMBEDDED_INDUSTRY_EVAL              = 0x00000069;
export const PRODUCT_EMBEDDED_EVAL                       = 0x0000006B;
export const PRODUCT_EMBEDDED_E_EVAL                     = 0x0000006C;
export const PRODUCT_NANO_SERVER                         = 0x0000006D;
export const PRODUCT_CLOUD_STORAGE_SERVER                = 0x0000006E;
export const PRODUCT_CORE_CONNECTED                      = 0x0000006F;
export const PRODUCT_PROFESSIONAL_STUDENT                = 0x00000070;
export const PRODUCT_CORE_CONNECTED_N                    = 0x00000071;
export const PRODUCT_PROFESSIONAL_STUDENT_N              = 0x00000072;
export const PRODUCT_CORE_CONNECTED_SINGLELANGUAGE       = 0x00000073;
export const PRODUCT_CORE_CONNECTED_COUNTRYSPECIFIC      = 0x00000074;
export const PRODUCT_CONNECTED_CAR                       = 0x00000075;
export const PRODUCT_INDUSTRY_HANDHELD                   = 0x00000076;
export const PRODUCT_PPI_PRO                             = 0x00000077;
export const PRODUCT_ARM64_SERVER                        = 0x00000078;
export const PRODUCT_EDUCATION                           = 0x00000079;
export const PRODUCT_IOTUAP                              = 0x0000007B;
export const PRODUCT_CLOUD_HOST_INFRASTRUCTURE_SERVER    = 0x0000007C;
export const PRODUCT_ENTERPRISE_S                        = 0x0000007D;
export const PRODUCT_ENTERPRISE_S_N                      = 0x0000007E;
export const PRODUCT_PROFESSIONAL_S                      = 0x0000007F;
export const PRODUCT_PROFESSIONAL_S_N                    = 0x00000080;
export const PRODUCT_ENTERPRISE_S_EVALUATION             = 0x00000081;
export const PRODUCT_ENTERPRISE_S_N_EVALUATION           = 0x00000082;
export const PRODUCT_HOLOGRAPHIC                         = 0x00000087;
export const PRODUCT_HOLOGRAPHIC_BUSINESS                = 0x00000088;
export const PRODUCT_PRO_CHINA                           = 0x0000008B;
export const PRODUCT_ENTERPRISE_SUBSCRIPTION             = 0x0000008C;
export const PRODUCT_ENTERPRISE_SUBSCRIPTION_N           = 0x0000008D;
export const PRODUCT_DATACENTER_NANO_SERVER              = 0x0000008F;
export const PRODUCT_STANDARD_NANO_SERVER                = 0x00000090;
export const PRODUCT_DATACENTER_A_SERVER_CORE            = 0x00000091;
export const PRODUCT_STANDARD_A_SERVER_CORE              = 0x00000092;
export const PRODUCT_DATACENTER_WS_SERVER_CORE           = 0x00000093;
export const PRODUCT_STANDARD_WS_SERVER_CORE             = 0x00000094;
export const PRODUCT_UTILITY_VM                          = 0x00000095;
export const PRODUCT_DATACENTER_EVALUATION_SERVER_CORE   = 0x0000009F;
export const PRODUCT_STANDARD_EVALUATION_SERVER_CORE     = 0x000000A0;
export const PRODUCT_PRO_WORKSTATION                     = 0x000000A1;
export const PRODUCT_PRO_WORKSTATION_N                   = 0x000000A2;
export const PRODUCT_PRO_FOR_EDUCATION                   = 0x000000A4;
export const PRODUCT_PRO_FOR_EDUCATION_N                 = 0x000000A5;
export const PRODUCT_AZURE_SERVER_CORE                   = 0x000000A8;
export const PRODUCT_AZURE_NANO_SERVER                   = 0x000000A9;
export const PRODUCT_ENTERPRISEG                         = 0x000000AB;
export const PRODUCT_ENTERPRISEGN                        = 0x000000AC;
export const PRODUCT_SERVERRDSH                          = 0x000000AF;
export const PRODUCT_CLOUD                               = 0x000000B2;
export const PRODUCT_CLOUDN                              = 0x000000B3;
export const PRODUCT_HUBOS                               = 0x000000B4;
export const PRODUCT_ONECOREUPDATEOS                     = 0x000000B6;
export const PRODUCT_CLOUDE                              = 0x000000B7;
export const PRODUCT_ANDROMEDA                           = 0x000000B8;
export const PRODUCT_IOTOS                               = 0x000000B9;
export const PRODUCT_IOTEDGEOS                           = 0x000000BB;
export const PRODUCT_IOTENTERPRISE                       = 0x000000BC;
export const PRODUCT_LITE                                = 0x000000BD;
export const PRODUCT_IOTENTERPRISES                      = 0x000000BF;
export const PRODUCT_XBOX_SYSTEMOS                       = 0x000000C0;
export const PRODUCT_XBOX_NATIVEOS                       = 0x000000C1;
export const PRODUCT_XBOX_GAMEOS                         = 0x000000C2;
export const PRODUCT_XBOX_ERAOS                          = 0x000000C3;
export const PRODUCT_XBOX_DURANGOHOSTOS                  = 0x000000C4;
export const PRODUCT_XBOX_SCARLETTHOSTOS                 = 0x000000C5;

export const PRODUCT_UNLICENSED                          = 0xABCDABCD;


//#include <sdkddkver.h>

//
// ** DEPRECATED ** DEPRECATED ** DEPRECATED ** DEPRECATED ** DEPRECATED **
//
//  DEPRECATED: The Language ID  concept is deprecated, please use
//  Locale Names instead, eg: "en" instead of a LANGID like 0x09.
//  See the documentation for GetLocaleInfoEx.
//
//  Note that the named locale APIs (eg GetLocaleInfoEx) are preferred.
//
//  WARNING: Not all locales/languages have unique Language IDs
//
//  The following two combinations of primary language ID and
//  sublanguage ID have special semantics:
//
//    Primary Language ID   Sublanguage ID      Result
//    -------------------   ---------------     ------------------------
//    LANG_NEUTRAL          SUBLANG_NEUTRAL     Language neutral
//    LANG_NEUTRAL          SUBLANG_DEFAULT     User default language
//    LANG_NEUTRAL          SUBLANG_SYS_DEFAULT System default language
//    LANG_INVARIANT        SUBLANG_NEUTRAL     Invariant locale
//
//  This concept is deprecated.  It is strongly recommended that
//  applications test for locale names instead of Language IDs / LCIDs.
//
//  Primary language IDs.
//
//  WARNING: This pattern is broken and not followed for all languages.
//           Serbian, Bosnian & Croatian are a few examples.
//
//  WARNING: There are > 6000 human languages.  The PRIMARYLANGID construct
//           cannot support all languages your application may encounter.
//           Please use Language Names, such as "en".
//
//  WARNING: Some languages may have more than one PRIMARYLANGID.  Please
//           use Locale Names, such as "en-FJ".
//
//  WARNING: Some languages do not have assigned LANGIDs.  Please use
//           Locale Names, such as "tlh-Piqd".
//
//  It is recommended that applications test for locale names or actual LCIDs.
//
//  Note that the LANG, SUBLANG construction is not always consistent.
//  The named locale APIs (eg GetLocaleInfoEx) are recommended.
//
// ** DEPRECATED ** DEPRECATED ** DEPRECATED ** DEPRECATED ** DEPRECATED **
//
export const LANG_NEUTRAL             = 0x00;
export const LANG_INVARIANT           = 0x7f;
export const LANG_AFRIKAANS           = 0x36;
export const LANG_ALBANIAN            = 0x1c;
export const LANG_ALSATIAN            = 0x84;
export const LANG_AMHARIC             = 0x5e;
export const LANG_ARABIC              = 0x01;
export const LANG_ARMENIAN            = 0x2b;
export const LANG_ASSAMESE            = 0x4d;
export const LANG_AZERI               = 0x2c;
export const LANG_AZERBAIJANI         = 0x2c;
export const LANG_BANGLA              = 0x45;
export const LANG_BASHKIR             = 0x6d;
export const LANG_BASQUE              = 0x2d;
export const LANG_BELARUSIAN          = 0x23;
export const LANG_BENGALI             = 0x45;
export const LANG_BRETON              = 0x7e;
export const LANG_BOSNIAN             = 0x1a;
export const LANG_BOSNIAN_NEUTRAL     = 0x781a;
export const LANG_BULGARIAN           = 0x02;
export const LANG_CATALAN             = 0x03;
export const LANG_CENTRAL_KURDISH     = 0x92;
export const LANG_CHEROKEE            = 0x5c;
export const LANG_CHINESE             = 0x04;
export const LANG_CHINESE_SIMPLIFIED  = 0x04;
export const LANG_CHINESE_TRADITIONAL = 0x7c04;
export const LANG_CORSICAN            = 0x83;
export const LANG_CROATIAN            = 0x1a;
export const LANG_CZECH               = 0x05;
export const LANG_DANISH              = 0x06;
export const LANG_DARI                = 0x8c;
export const LANG_DIVEHI              = 0x65;
export const LANG_DUTCH               = 0x13;
export const LANG_ENGLISH             = 0x09;
export const LANG_ESTONIAN            = 0x25;
export const LANG_FAEROESE            = 0x38;
export const LANG_FARSI               = 0x29;
export const LANG_FILIPINO            = 0x64;
export const LANG_FINNISH             = 0x0b;
export const LANG_FRENCH              = 0x0c;
export const LANG_FRISIAN             = 0x62;
export const LANG_FULAH               = 0x67;
export const LANG_GALICIAN            = 0x56;
export const LANG_GEORGIAN            = 0x37;
export const LANG_GERMAN              = 0x07;
export const LANG_GREEK               = 0x08;
export const LANG_GREENLANDIC         = 0x6f;
export const LANG_GUJARATI            = 0x47;
export const LANG_HAUSA               = 0x68;
export const LANG_HAWAIIAN            = 0x75;
export const LANG_HEBREW              = 0x0d;
export const LANG_HINDI               = 0x39;
export const LANG_HUNGARIAN           = 0x0e;
export const LANG_ICELANDIC           = 0x0f;
export const LANG_IGBO                = 0x70;
export const LANG_INDONESIAN          = 0x21;
export const LANG_INUKTITUT           = 0x5d;
export const LANG_IRISH               = 0x3c;
export const LANG_ITALIAN             = 0x10;
export const LANG_JAPANESE            = 0x11;
export const LANG_KANNADA             = 0x4b;
export const LANG_KASHMIRI            = 0x60;
export const LANG_KAZAK               = 0x3f;
export const LANG_KHMER               = 0x53;
export const LANG_KICHE               = 0x86;
export const LANG_KINYARWANDA         = 0x87;
export const LANG_KONKANI             = 0x57;
export const LANG_KOREAN              = 0x12;
export const LANG_KYRGYZ              = 0x40;
export const LANG_LAO                 = 0x54;
export const LANG_LATVIAN             = 0x26;
export const LANG_LITHUANIAN          = 0x27;
export const LANG_LOWER_SORBIAN       = 0x2e;
export const LANG_LUXEMBOURGISH       = 0x6e;
export const LANG_MACEDONIAN          = 0x2f;
export const LANG_MALAY               = 0x3e;
export const LANG_MALAYALAM           = 0x4c;
export const LANG_MALTESE             = 0x3a;
export const LANG_MANIPURI            = 0x58;
export const LANG_MAORI               = 0x81;
export const LANG_MAPUDUNGUN          = 0x7a;
export const LANG_MARATHI             = 0x4e;
export const LANG_MOHAWK              = 0x7c;
export const LANG_MONGOLIAN           = 0x50;
export const LANG_NEPALI              = 0x61;
export const LANG_NORWEGIAN           = 0x14;
export const LANG_OCCITAN             = 0x82;
export const LANG_ODIA                = 0x48;
export const LANG_ORIYA               = 0x48;
export const LANG_PASHTO              = 0x63;
export const LANG_PERSIAN             = 0x29;
export const LANG_POLISH              = 0x15;
export const LANG_PORTUGUESE          = 0x16;
export const LANG_PULAR               = 0x67;
export const LANG_PUNJABI             = 0x46;
export const LANG_QUECHUA             = 0x6b;
export const LANG_ROMANIAN            = 0x18;
export const LANG_ROMANSH             = 0x17;
export const LANG_RUSSIAN             = 0x19;
export const LANG_SAKHA               = 0x85;
export const LANG_SAMI                = 0x3b;
export const LANG_SANSKRIT            = 0x4f;
export const LANG_SCOTTISH_GAELIC     = 0x91;
export const LANG_SERBIAN             = 0x1a;
export const LANG_SERBIAN_NEUTRAL     = 0x7c1a;
export const LANG_SINDHI              = 0x59;
export const LANG_SINHALESE           = 0x5b;
export const LANG_SLOVAK              = 0x1b;
export const LANG_SLOVENIAN           = 0x24;
export const LANG_SOTHO               = 0x6c;
export const LANG_SPANISH             = 0x0a;
export const LANG_SWAHILI             = 0x41;
export const LANG_SWEDISH             = 0x1d;
export const LANG_SYRIAC              = 0x5a;
export const LANG_TAJIK               = 0x28;
export const LANG_TAMAZIGHT           = 0x5f;
export const LANG_TAMIL               = 0x49;
export const LANG_TATAR               = 0x44;
export const LANG_TELUGU              = 0x4a;
export const LANG_THAI                = 0x1e;
export const LANG_TIBETAN             = 0x51;
export const LANG_TIGRIGNA            = 0x73;
export const LANG_TIGRINYA            = 0x73;
export const LANG_TSWANA              = 0x32;
export const LANG_TURKISH             = 0x1f;
export const LANG_TURKMEN             = 0x42;
export const LANG_UIGHUR              = 0x80;
export const LANG_UKRAINIAN           = 0x22;
export const LANG_UPPER_SORBIAN       = 0x2e;
export const LANG_URDU                = 0x20;
export const LANG_UZBEK               = 0x43;
export const LANG_VALENCIAN           = 0x03;
export const LANG_VIETNAMESE          = 0x2a;
export const LANG_WELSH               = 0x52;
export const LANG_WOLOF               = 0x88;
export const LANG_XHOSA               = 0x34;
export const LANG_YAKUT               = 0x85;
export const LANG_YI                  = 0x78;
export const LANG_YORUBA              = 0x6a;
export const LANG_ZULU                = 0x35;

//
// ** DEPRECATED ** DEPRECATED ** DEPRECATED ** DEPRECATED ** DEPRECATED **
//
//  DEPRECATED: The Sublanguage ID concept is deprecated, please use
//  Locale Names instead, eg: "en-US" instead of an LCID like 0x0409.
//  See the documentation for GetLocaleInfoEx.
//
//  The name immediately following SUBLANG_ dictates which primary
//  language ID that sublanguage ID can be combined with to form a
//  valid language ID.
//
//  Note that the LANG, SUBLANG construction is not always consistent.
//  The named locale APIs (eg GetLocaleInfoEx) are recommended.
//
//  WARNING: The pattern is broken and not followed for all languages.
//           Serbian, Bosnian & Croatian are a few examples.
//
//  WARNING: The "SUBLANG" depends on the primary language and is inconsistent.
//           SUBLANG_ENGLISH_US is 0x1 and SUBLANG_SPANISH_US is 0x15, so
//           it is impossible to determine region merely by inspecting the
//           SUBLANG.  Please use Locale Names such as "en-US" instead.
//
//  WARNING: Numerous SUBLANGS are assigned the same value, so 0x01 could be
//           US, French, or many other variations.  Please use Locale Names
//           such as "en-US" instead.  If that is not possible, consider
//           testing the entire LCID, eg: 0x0409.
//
//  WARNING: There are > 6000 human languages.  The PRIMARYLANGID construct
//           cannot support all languages your application may encounter.
//           Please use Language Names, such as "en".
//
//  WARNING: There are > 200 country-regions.  The SUBLANGID construct cannot
//           represent all valid dialects of languages such as English.
//           Please use Locale Names, such as "en-US".
//
//  WARNING: Some languages may have more than one PRIMARYLANGID.  Please
//           use Locale Names, such as "en-FJ".
//
//  WARNING: Some languages do not have assigned LANGIDs.  Please use
//           Locale Names, such as "tlh-Piqd".
//
// ** DEPRECATED ** DEPRECATED ** DEPRECATED ** DEPRECATED ** DEPRECATED **
//
export const SUBLANG_NEUTRAL                             = 0x00; // language neutral
export const SUBLANG_DEFAULT                             = 0x01; // user default
export const SUBLANG_SYS_DEFAULT                         = 0x02; // system default
export const SUBLANG_CUSTOM_DEFAULT                      = 0x03; // default custom language/locale
export const SUBLANG_CUSTOM_UNSPECIFIED                  = 0x04; // custom language/locale
export const SUBLANG_UI_CUSTOM_DEFAULT                   = 0x05; // Default custom MUI language/locale

export const SUBLANG_AFRIKAANS_SOUTH_AFRICA              = 0x01; // Afrikaans (South Africa) 0x0436 af-ZA
export const SUBLANG_ALBANIAN_ALBANIA                    = 0x01; // Albanian (Albania) 0x041c sq-AL
export const SUBLANG_ALSATIAN_FRANCE                     = 0x01; // Alsatian (France) 0x0484
export const SUBLANG_AMHARIC_ETHIOPIA                    = 0x01; // Amharic (Ethiopia) 0x045e
export const SUBLANG_ARABIC_SAUDI_ARABIA                 = 0x01; // Arabic (Saudi Arabia)
export const SUBLANG_ARABIC_IRAQ                         = 0x02; // Arabic (Iraq)
export const SUBLANG_ARABIC_EGYPT                        = 0x03; // Arabic (Egypt)
export const SUBLANG_ARABIC_LIBYA                        = 0x04; // Arabic (Libya)
export const SUBLANG_ARABIC_ALGERIA                      = 0x05; // Arabic (Algeria)
export const SUBLANG_ARABIC_MOROCCO                      = 0x06; // Arabic (Morocco)
export const SUBLANG_ARABIC_TUNISIA                      = 0x07; // Arabic (Tunisia)
export const SUBLANG_ARABIC_OMAN                         = 0x08; // Arabic (Oman)
export const SUBLANG_ARABIC_YEMEN                        = 0x09; // Arabic (Yemen)
export const SUBLANG_ARABIC_SYRIA                        = 0x0a; // Arabic (Syria)
export const SUBLANG_ARABIC_JORDAN                       = 0x0b; // Arabic (Jordan)
export const SUBLANG_ARABIC_LEBANON                      = 0x0c; // Arabic (Lebanon)
export const SUBLANG_ARABIC_KUWAIT                       = 0x0d; // Arabic (Kuwait)
export const SUBLANG_ARABIC_UAE                          = 0x0e; // Arabic (U.A.E)
export const SUBLANG_ARABIC_BAHRAIN                      = 0x0f; // Arabic (Bahrain)
export const SUBLANG_ARABIC_QATAR                        = 0x10; // Arabic (Qatar)
export const SUBLANG_ARMENIAN_ARMENIA                    = 0x01; // Armenian (Armenia) 0x042b hy-AM
export const SUBLANG_ASSAMESE_INDIA                      = 0x01; // Assamese (India) 0x044d
export const SUBLANG_AZERI_LATIN                         = 0x01; // Azeri (Latin) - for Azerbaijani, SUBLANG_AZERBAIJANI_AZERBAIJAN_LATIN preferred
export const SUBLANG_AZERI_CYRILLIC                      = 0x02; // Azeri (Cyrillic) - for Azerbaijani, SUBLANG_AZERBAIJANI_AZERBAIJAN_CYRILLIC preferred
export const SUBLANG_AZERBAIJANI_AZERBAIJAN_LATIN        = 0x01; // Azerbaijani (Azerbaijan, Latin)
export const SUBLANG_AZERBAIJANI_AZERBAIJAN_CYRILLIC     = 0x02; // Azerbaijani (Azerbaijan, Cyrillic)
export const SUBLANG_BANGLA_INDIA                        = 0x01; // Bangla (India)
export const SUBLANG_BANGLA_BANGLADESH                   = 0x02; // Bangla (Bangladesh)
export const SUBLANG_BASHKIR_RUSSIA                      = 0x01; // Bashkir (Russia) 0x046d ba-RU
export const SUBLANG_BASQUE_BASQUE                       = 0x01; // Basque (Basque) 0x042d eu-ES
export const SUBLANG_BELARUSIAN_BELARUS                  = 0x01; // Belarusian (Belarus) 0x0423 be-BY
export const SUBLANG_BENGALI_INDIA                       = 0x01; // Bengali (India) - Note some prefer SUBLANG_BANGLA_INDIA
export const SUBLANG_BENGALI_BANGLADESH                  = 0x02; // Bengali (Bangladesh) - Note some prefer SUBLANG_BANGLA_BANGLADESH
export const SUBLANG_BOSNIAN_BOSNIA_HERZEGOVINA_LATIN    = 0x05; // Bosnian (Bosnia and Herzegovina - Latin) 0x141a bs-BA-Latn
export const SUBLANG_BOSNIAN_BOSNIA_HERZEGOVINA_CYRILLIC = 0x08; // Bosnian (Bosnia and Herzegovina - Cyrillic) 0x201a bs-BA-Cyrl
export const SUBLANG_BRETON_FRANCE                       = 0x01; // Breton (France) 0x047e
export const SUBLANG_BULGARIAN_BULGARIA                  = 0x01; // Bulgarian (Bulgaria) 0x0402
export const SUBLANG_CATALAN_CATALAN                     = 0x01; // Catalan (Catalan) 0x0403
export const SUBLANG_CENTRAL_KURDISH_IRAQ                = 0x01; // Central Kurdish (Iraq) 0x0492 ku-Arab-IQ
export const SUBLANG_CHEROKEE_CHEROKEE                   = 0x01; // Cherokee (Cherokee) 0x045c chr-Cher-US
export const SUBLANG_CHINESE_TRADITIONAL                 = 0x01; // Chinese (Taiwan) 0x0404 zh-TW
export const SUBLANG_CHINESE_SIMPLIFIED                  = 0x02; // Chinese (PR China) 0x0804 zh-CN
export const SUBLANG_CHINESE_HONGKONG                    = 0x03; // Chinese (Hong Kong S.A.R., P.R.C.) 0x0c04 zh-HK
export const SUBLANG_CHINESE_SINGAPORE                   = 0x04; // Chinese (Singapore) 0x1004 zh-SG
export const SUBLANG_CHINESE_MACAU                       = 0x05; // Chinese (Macau S.A.R.) 0x1404 zh-MO
export const SUBLANG_CORSICAN_FRANCE                     = 0x01; // Corsican (France) 0x0483
export const SUBLANG_CZECH_CZECH_REPUBLIC                = 0x01; // Czech (Czech Republic) 0x0405
export const SUBLANG_CROATIAN_CROATIA                    = 0x01; // Croatian (Croatia)
export const SUBLANG_CROATIAN_BOSNIA_HERZEGOVINA_LATIN   = 0x04; // Croatian (Bosnia and Herzegovina - Latin) 0x101a hr-BA
export const SUBLANG_DANISH_DENMARK                      = 0x01; // Danish (Denmark) 0x0406
export const SUBLANG_DARI_AFGHANISTAN                    = 0x01; // Dari (Afghanistan)
export const SUBLANG_DIVEHI_MALDIVES                     = 0x01; // Divehi (Maldives) 0x0465 div-MV
export const SUBLANG_DUTCH                               = 0x01; // Dutch
export const SUBLANG_DUTCH_BELGIAN                       = 0x02; // Dutch (Belgian)
export const SUBLANG_ENGLISH_US                          = 0x01; // English (USA)
export const SUBLANG_ENGLISH_UK                          = 0x02; // English (UK)
export const SUBLANG_ENGLISH_AUS                         = 0x03; // English (Australian)
export const SUBLANG_ENGLISH_CAN                         = 0x04; // English (Canadian)
export const SUBLANG_ENGLISH_NZ                          = 0x05; // English (New Zealand)
export const SUBLANG_ENGLISH_EIRE                        = 0x06; // English (Irish)
export const SUBLANG_ENGLISH_SOUTH_AFRICA                = 0x07; // English (South Africa)
export const SUBLANG_ENGLISH_JAMAICA                     = 0x08; // English (Jamaica)
export const SUBLANG_ENGLISH_CARIBBEAN                   = 0x09; // English (Caribbean)
export const SUBLANG_ENGLISH_BELIZE                      = 0x0a; // English (Belize)
export const SUBLANG_ENGLISH_TRINIDAD                    = 0x0b; // English (Trinidad)
export const SUBLANG_ENGLISH_ZIMBABWE                    = 0x0c; // English (Zimbabwe)
export const SUBLANG_ENGLISH_PHILIPPINES                 = 0x0d; // English (Philippines)
export const SUBLANG_ENGLISH_INDIA                       = 0x10; // English (India)
export const SUBLANG_ENGLISH_MALAYSIA                    = 0x11; // English (Malaysia)
export const SUBLANG_ENGLISH_SINGAPORE                   = 0x12; // English (Singapore)
export const SUBLANG_ESTONIAN_ESTONIA                    = 0x01; // Estonian (Estonia) 0x0425 et-EE
export const SUBLANG_FAEROESE_FAROE_ISLANDS              = 0x01; // Faroese (Faroe Islands) 0x0438 fo-FO
export const SUBLANG_FILIPINO_PHILIPPINES                = 0x01; // Filipino (Philippines) 0x0464 fil-PH
export const SUBLANG_FINNISH_FINLAND                     = 0x01; // Finnish (Finland) 0x040b
export const SUBLANG_FRENCH                              = 0x01; // French
export const SUBLANG_FRENCH_BELGIAN                      = 0x02; // French (Belgian)
export const SUBLANG_FRENCH_CANADIAN                     = 0x03; // French (Canadian)
export const SUBLANG_FRENCH_SWISS                        = 0x04; // French (Swiss)
export const SUBLANG_FRENCH_LUXEMBOURG                   = 0x05; // French (Luxembourg)
export const SUBLANG_FRENCH_MONACO                       = 0x06; // French (Monaco)
export const SUBLANG_FRISIAN_NETHERLANDS                 = 0x01; // Frisian (Netherlands) 0x0462 fy-NL
export const SUBLANG_FULAH_SENEGAL                       = 0x02; // Fulah (Senegal) 0x0867 ff-Latn-SN
export const SUBLANG_GALICIAN_GALICIAN                   = 0x01; // Galician (Galician) 0x0456 gl-ES
export const SUBLANG_GEORGIAN_GEORGIA                    = 0x01; // Georgian (Georgia) 0x0437 ka-GE
export const SUBLANG_GERMAN                              = 0x01; // German
export const SUBLANG_GERMAN_SWISS                        = 0x02; // German (Swiss)
export const SUBLANG_GERMAN_AUSTRIAN                     = 0x03; // German (Austrian)
export const SUBLANG_GERMAN_LUXEMBOURG                   = 0x04; // German (Luxembourg)
export const SUBLANG_GERMAN_LIECHTENSTEIN                = 0x05; // German (Liechtenstein)
export const SUBLANG_GREEK_GREECE                        = 0x01; // Greek (Greece)
export const SUBLANG_GREENLANDIC_GREENLAND               = 0x01; // Greenlandic (Greenland) 0x046f kl-GL
export const SUBLANG_GUJARATI_INDIA                      = 0x01; // Gujarati (India (Gujarati Script)) 0x0447 gu-IN
export const SUBLANG_HAUSA_NIGERIA_LATIN                 = 0x01; // Hausa (Latin, Nigeria) 0x0468 ha-NG-Latn
export const SUBLANG_HAWAIIAN_US                         = 0x01; // Hawiian (US) 0x0475 haw-US
export const SUBLANG_HEBREW_ISRAEL                       = 0x01; // Hebrew (Israel) 0x040d
export const SUBLANG_HINDI_INDIA                         = 0x01; // Hindi (India) 0x0439 hi-IN
export const SUBLANG_HUNGARIAN_HUNGARY                   = 0x01; // Hungarian (Hungary) 0x040e
export const SUBLANG_ICELANDIC_ICELAND                   = 0x01; // Icelandic (Iceland) 0x040f
export const SUBLANG_IGBO_NIGERIA                        = 0x01; // Igbo (Nigeria) 0x0470 ig-NG
export const SUBLANG_INDONESIAN_INDONESIA                = 0x01; // Indonesian (Indonesia) 0x0421 id-ID
export const SUBLANG_INUKTITUT_CANADA                    = 0x01; // Inuktitut (Syllabics) (Canada) 0x045d iu-CA-Cans
export const SUBLANG_INUKTITUT_CANADA_LATIN              = 0x02; // Inuktitut (Canada - Latin)
export const SUBLANG_IRISH_IRELAND                       = 0x02; // Irish (Ireland)
export const SUBLANG_ITALIAN                             = 0x01; // Italian
export const SUBLANG_ITALIAN_SWISS                       = 0x02; // Italian (Swiss)
export const SUBLANG_JAPANESE_JAPAN                      = 0x01; // Japanese (Japan) 0x0411
export const SUBLANG_KANNADA_INDIA                       = 0x01; // Kannada (India (Kannada Script)) 0x044b kn-IN
export const SUBLANG_KASHMIRI_SASIA                      = 0x02; // Kashmiri (South Asia)
export const SUBLANG_KASHMIRI_INDIA                      = 0x02; // For app compatibility only
export const SUBLANG_KAZAK_KAZAKHSTAN                    = 0x01; // Kazakh (Kazakhstan) 0x043f kk-KZ
export const SUBLANG_KHMER_CAMBODIA                      = 0x01; // Khmer (Cambodia) 0x0453 kh-KH
export const SUBLANG_KICHE_GUATEMALA                     = 0x01; // K'iche (Guatemala)
export const SUBLANG_KINYARWANDA_RWANDA                  = 0x01; // Kinyarwanda (Rwanda) 0x0487 rw-RW
export const SUBLANG_KONKANI_INDIA                       = 0x01; // Konkani (India) 0x0457 kok-IN
export const SUBLANG_KOREAN                              = 0x01; // Korean (Extended Wansung)
export const SUBLANG_KYRGYZ_KYRGYZSTAN                   = 0x01; // Kyrgyz (Kyrgyzstan) 0x0440 ky-KG
export const SUBLANG_LAO_LAO                             = 0x01; // Lao (Lao PDR) 0x0454 lo-LA
export const SUBLANG_LATVIAN_LATVIA                      = 0x01; // Latvian (Latvia) 0x0426 lv-LV
export const SUBLANG_LITHUANIAN                          = 0x01; // Lithuanian
export const SUBLANG_LOWER_SORBIAN_GERMANY               = 0x02; // Lower Sorbian (Germany) 0x082e wee-DE
export const SUBLANG_LUXEMBOURGISH_LUXEMBOURG            = 0x01; // Luxembourgish (Luxembourg) 0x046e lb-LU
export const SUBLANG_MACEDONIAN_MACEDONIA                = 0x01; // Macedonian (Macedonia (FYROM)) 0x042f mk-MK
export const SUBLANG_MALAY_MALAYSIA                      = 0x01; // Malay (Malaysia)
export const SUBLANG_MALAY_BRUNEI_DARUSSALAM             = 0x02; // Malay (Brunei Darussalam)
export const SUBLANG_MALAYALAM_INDIA                     = 0x01; // Malayalam (India (Malayalam Script) ) 0x044c ml-IN
export const SUBLANG_MALTESE_MALTA                       = 0x01; // Maltese (Malta) 0x043a mt-MT
export const SUBLANG_MAORI_NEW_ZEALAND                   = 0x01; // Maori (New Zealand) 0x0481 mi-NZ
export const SUBLANG_MAPUDUNGUN_CHILE                    = 0x01; // Mapudungun (Chile) 0x047a arn-CL
export const SUBLANG_MARATHI_INDIA                       = 0x01; // Marathi (India) 0x044e mr-IN
export const SUBLANG_MOHAWK_MOHAWK                       = 0x01; // Mohawk (Mohawk) 0x047c moh-CA
export const SUBLANG_MONGOLIAN_CYRILLIC_MONGOLIA         = 0x01; // Mongolian (Cyrillic, Mongolia)
export const SUBLANG_MONGOLIAN_PRC                       = 0x02; // Mongolian (PRC)
export const SUBLANG_NEPALI_INDIA                        = 0x02; // Nepali (India)
export const SUBLANG_NEPALI_NEPAL                        = 0x01; // Nepali (Nepal) 0x0461 ne-NP
export const SUBLANG_NORWEGIAN_BOKMAL                    = 0x01; // Norwegian (Bokmal)
export const SUBLANG_NORWEGIAN_NYNORSK                   = 0x02; // Norwegian (Nynorsk)
export const SUBLANG_OCCITAN_FRANCE                      = 0x01; // Occitan (France) 0x0482 oc-FR
export const SUBLANG_ODIA_INDIA                          = 0x01; // Odia (India (Odia Script)) 0x0448 or-IN
export const SUBLANG_ORIYA_INDIA                         = 0x01; // Deprecated: use SUBLANG_ODIA_INDIA instead
export const SUBLANG_PASHTO_AFGHANISTAN                  = 0x01; // Pashto (Afghanistan)
export const SUBLANG_PERSIAN_IRAN                        = 0x01; // Persian (Iran) 0x0429 fa-IR
export const SUBLANG_POLISH_POLAND                       = 0x01; // Polish (Poland) 0x0415
export const SUBLANG_PORTUGUESE                          = 0x02; // Portuguese
export const SUBLANG_PORTUGUESE_BRAZILIAN                = 0x01; // Portuguese (Brazil)
export const SUBLANG_PULAR_SENEGAL                       = 0x02; // Deprecated: Use SUBLANG_FULAH_SENEGAL instead
export const SUBLANG_PUNJABI_INDIA                       = 0x01; // Punjabi (India (Gurmukhi Script)) 0x0446 pa-IN
export const SUBLANG_PUNJABI_PAKISTAN                    = 0x02; // Punjabi (Pakistan (Arabic Script)) 0x0846 pa-Arab-PK
export const SUBLANG_QUECHUA_BOLIVIA                     = 0x01; // Quechua (Bolivia)
export const SUBLANG_QUECHUA_ECUADOR                     = 0x02; // Quechua (Ecuador)
export const SUBLANG_QUECHUA_PERU                        = 0x03; // Quechua (Peru)
export const SUBLANG_ROMANIAN_ROMANIA                    = 0x01; // Romanian (Romania) 0x0418
export const SUBLANG_ROMANSH_SWITZERLAND                 = 0x01; // Romansh (Switzerland) 0x0417 rm-CH
export const SUBLANG_RUSSIAN_RUSSIA                      = 0x01; // Russian (Russia) 0x0419
export const SUBLANG_SAKHA_RUSSIA                        = 0x01; // Sakha (Russia) 0x0485 sah-RU
export const SUBLANG_SAMI_NORTHERN_NORWAY                = 0x01; // Northern Sami (Norway)
export const SUBLANG_SAMI_NORTHERN_SWEDEN                = 0x02; // Northern Sami (Sweden)
export const SUBLANG_SAMI_NORTHERN_FINLAND               = 0x03; // Northern Sami (Finland)
export const SUBLANG_SAMI_LULE_NORWAY                    = 0x04; // Lule Sami (Norway)
export const SUBLANG_SAMI_LULE_SWEDEN                    = 0x05; // Lule Sami (Sweden)
export const SUBLANG_SAMI_SOUTHERN_NORWAY                = 0x06; // Southern Sami (Norway)
export const SUBLANG_SAMI_SOUTHERN_SWEDEN                = 0x07; // Southern Sami (Sweden)
export const SUBLANG_SAMI_SKOLT_FINLAND                  = 0x08; // Skolt Sami (Finland)
export const SUBLANG_SAMI_INARI_FINLAND                  = 0x09; // Inari Sami (Finland)
export const SUBLANG_SANSKRIT_INDIA                      = 0x01; // Sanskrit (India) 0x044f sa-IN
export const SUBLANG_SCOTTISH_GAELIC                     = 0x01; // Scottish Gaelic (United Kingdom) 0x0491 gd-GB
export const SUBLANG_SERBIAN_BOSNIA_HERZEGOVINA_LATIN    = 0x06; // Serbian (Bosnia and Herzegovina - Latin)
export const SUBLANG_SERBIAN_BOSNIA_HERZEGOVINA_CYRILLIC = 0x07; // Serbian (Bosnia and Herzegovina - Cyrillic)
export const SUBLANG_SERBIAN_MONTENEGRO_LATIN            = 0x0b; // Serbian (Montenegro - Latn)
export const SUBLANG_SERBIAN_MONTENEGRO_CYRILLIC         = 0x0c; // Serbian (Montenegro - Cyrillic)
export const SUBLANG_SERBIAN_SERBIA_LATIN                = 0x09; // Serbian (Serbia - Latin)
export const SUBLANG_SERBIAN_SERBIA_CYRILLIC             = 0x0a; // Serbian (Serbia - Cyrillic)
export const SUBLANG_SERBIAN_CROATIA                     = 0x01; // Croatian (Croatia) 0x041a hr-HR
export const SUBLANG_SERBIAN_LATIN                       = 0x02; // Serbian (Latin)
export const SUBLANG_SERBIAN_CYRILLIC                    = 0x03; // Serbian (Cyrillic)
export const SUBLANG_SINDHI_INDIA                        = 0x01; // Sindhi (India) reserved 0x0459
export const SUBLANG_SINDHI_PAKISTAN                     = 0x02; // Sindhi (Pakistan) 0x0859 sd-Arab-PK
export const SUBLANG_SINDHI_AFGHANISTAN                  = 0x02; // For app compatibility only
export const SUBLANG_SINHALESE_SRI_LANKA                 = 0x01; // Sinhalese (Sri Lanka)
export const SUBLANG_SOTHO_NORTHERN_SOUTH_AFRICA         = 0x01; // Northern Sotho (South Africa)
export const SUBLANG_SLOVAK_SLOVAKIA                     = 0x01; // Slovak (Slovakia) 0x041b sk-SK
export const SUBLANG_SLOVENIAN_SLOVENIA                  = 0x01; // Slovenian (Slovenia) 0x0424 sl-SI
export const SUBLANG_SPANISH                             = 0x01; // Spanish (Castilian)
export const SUBLANG_SPANISH_MEXICAN                     = 0x02; // Spanish (Mexico)
export const SUBLANG_SPANISH_MODERN                      = 0x03; // Spanish (Modern)
export const SUBLANG_SPANISH_GUATEMALA                   = 0x04; // Spanish (Guatemala)
export const SUBLANG_SPANISH_COSTA_RICA                  = 0x05; // Spanish (Costa Rica)
export const SUBLANG_SPANISH_PANAMA                      = 0x06; // Spanish (Panama)
export const SUBLANG_SPANISH_DOMINICAN_REPUBLIC          = 0x07; // Spanish (Dominican Republic)
export const SUBLANG_SPANISH_VENEZUELA                   = 0x08; // Spanish (Venezuela)
export const SUBLANG_SPANISH_COLOMBIA                    = 0x09; // Spanish (Colombia)
export const SUBLANG_SPANISH_PERU                        = 0x0a; // Spanish (Peru)
export const SUBLANG_SPANISH_ARGENTINA                   = 0x0b; // Spanish (Argentina)
export const SUBLANG_SPANISH_ECUADOR                     = 0x0c; // Spanish (Ecuador)
export const SUBLANG_SPANISH_CHILE                       = 0x0d; // Spanish (Chile)
export const SUBLANG_SPANISH_URUGUAY                     = 0x0e; // Spanish (Uruguay)
export const SUBLANG_SPANISH_PARAGUAY                    = 0x0f; // Spanish (Paraguay)
export const SUBLANG_SPANISH_BOLIVIA                     = 0x10; // Spanish (Bolivia)
export const SUBLANG_SPANISH_EL_SALVADOR                 = 0x11; // Spanish (El Salvador)
export const SUBLANG_SPANISH_HONDURAS                    = 0x12; // Spanish (Honduras)
export const SUBLANG_SPANISH_NICARAGUA                   = 0x13; // Spanish (Nicaragua)
export const SUBLANG_SPANISH_PUERTO_RICO                 = 0x14; // Spanish (Puerto Rico)
export const SUBLANG_SPANISH_US                          = 0x15; // Spanish (United States)
export const SUBLANG_SWAHILI_KENYA                       = 0x01; // Swahili (Kenya) 0x0441 sw-KE
export const SUBLANG_SWEDISH                             = 0x01; // Swedish
export const SUBLANG_SWEDISH_FINLAND                     = 0x02; // Swedish (Finland)
export const SUBLANG_SYRIAC_SYRIA                        = 0x01; // Syriac (Syria) 0x045a syr-SY
export const SUBLANG_TAJIK_TAJIKISTAN                    = 0x01; // Tajik (Tajikistan) 0x0428 tg-TJ-Cyrl
export const SUBLANG_TAMAZIGHT_ALGERIA_LATIN             = 0x02; // Tamazight (Latin, Algeria) 0x085f tzm-Latn-DZ
export const SUBLANG_TAMAZIGHT_MOROCCO_TIFINAGH          = 0x04; // Tamazight (Tifinagh) 0x105f tzm-Tfng-MA
export const SUBLANG_TAMIL_INDIA                         = 0x01; // Tamil (India)
export const SUBLANG_TAMIL_SRI_LANKA                     = 0x02; // Tamil (Sri Lanka) 0x0849 ta-LK
export const SUBLANG_TATAR_RUSSIA                        = 0x01; // Tatar (Russia) 0x0444 tt-RU
export const SUBLANG_TELUGU_INDIA                        = 0x01; // Telugu (India (Telugu Script)) 0x044a te-IN
export const SUBLANG_THAI_THAILAND                       = 0x01; // Thai (Thailand) 0x041e th-TH
export const SUBLANG_TIBETAN_PRC                         = 0x01; // Tibetan (PRC)
export const SUBLANG_TIGRIGNA_ERITREA                    = 0x02; // Tigrigna (Eritrea)
export const SUBLANG_TIGRINYA_ERITREA                    = 0x02; // Tigrinya (Eritrea) 0x0873 ti-ER (preferred spelling)
export const SUBLANG_TIGRINYA_ETHIOPIA                   = 0x01; // Tigrinya (Ethiopia) 0x0473 ti-ET
export const SUBLANG_TSWANA_BOTSWANA                     = 0x02; // Setswana / Tswana (Botswana) 0x0832 tn-BW
export const SUBLANG_TSWANA_SOUTH_AFRICA                 = 0x01; // Setswana / Tswana (South Africa) 0x0432 tn-ZA
export const SUBLANG_TURKISH_TURKEY                      = 0x01; // Turkish (Turkey) 0x041f tr-TR
export const SUBLANG_TURKMEN_TURKMENISTAN                = 0x01; // Turkmen (Turkmenistan) 0x0442 tk-TM
export const SUBLANG_UIGHUR_PRC                          = 0x01; // Uighur (PRC) 0x0480 ug-CN
export const SUBLANG_UKRAINIAN_UKRAINE                   = 0x01; // Ukrainian (Ukraine) 0x0422 uk-UA
export const SUBLANG_UPPER_SORBIAN_GERMANY               = 0x01; // Upper Sorbian (Germany) 0x042e wen-DE
export const SUBLANG_URDU_PAKISTAN                       = 0x01; // Urdu (Pakistan)
export const SUBLANG_URDU_INDIA                          = 0x02; // Urdu (India)
export const SUBLANG_UZBEK_LATIN                         = 0x01; // Uzbek (Latin)
export const SUBLANG_UZBEK_CYRILLIC                      = 0x02; // Uzbek (Cyrillic)
export const SUBLANG_VALENCIAN_VALENCIA                  = 0x02; // Valencian (Valencia) 0x0803 ca-ES-Valencia
export const SUBLANG_VIETNAMESE_VIETNAM                  = 0x01; // Vietnamese (Vietnam) 0x042a vi-VN
export const SUBLANG_WELSH_UNITED_KINGDOM                = 0x01; // Welsh (United Kingdom) 0x0452 cy-GB
export const SUBLANG_WOLOF_SENEGAL                       = 0x01; // Wolof (Senegal)
export const SUBLANG_XHOSA_SOUTH_AFRICA                  = 0x01; // isiXhosa / Xhosa (South Africa) 0x0434 xh-ZA
export const SUBLANG_YAKUT_RUSSIA                        = 0x01; // Deprecated: use SUBLANG_SAKHA_RUSSIA instead
export const SUBLANG_YI_PRC                              = 0x01; // Yi (PRC)) 0x0478
export const SUBLANG_YORUBA_NIGERIA                      = 0x01; // Yoruba (Nigeria) 046a yo-NG
export const SUBLANG_ZULU_SOUTH_AFRICA                   = 0x01; // isiZulu / Zulu (South Africa) 0x0435 zu-ZA




//
//  Sorting IDs.
//
//  Note that the named locale APIs (eg CompareStringExEx) are recommended.
//

export const SORT_DEFAULT                = 0x0; // sorting default

export const SORT_INVARIANT_MATH         = 0x1; // Invariant (Mathematical Symbols)

export const SORT_JAPANESE_XJIS          = 0x0; // Japanese XJIS order
export const SORT_JAPANESE_UNICODE       = 0x1; // Japanese Unicode order (no longer supported)
export const SORT_JAPANESE_RADICALSTROKE = 0x4; // Japanese radical/stroke order

export const SORT_CHINESE_BIG5           = 0x0; // Chinese BIG5 order
export const SORT_CHINESE_PRCP           = 0x0; // PRC Chinese Phonetic order
export const SORT_CHINESE_UNICODE        = 0x1; // Chinese Unicode order (no longer supported)
export const SORT_CHINESE_PRC            = 0x2; // PRC Chinese Stroke Count order
export const SORT_CHINESE_BOPOMOFO       = 0x3; // Traditional Chinese Bopomofo order
export const SORT_CHINESE_RADICALSTROKE  = 0x4; // Traditional Chinese radical/stroke order.

export const SORT_KOREAN_KSC             = 0x0; // Korean KSC order
export const SORT_KOREAN_UNICODE         = 0x1; // Korean Unicode order (no longer supported)

export const SORT_GERMAN_PHONE_BOOK      = 0x1; // German Phone Book order

export const SORT_HUNGARIAN_DEFAULT      = 0x0; // Hungarian Default order
export const SORT_HUNGARIAN_TECHNICAL    = 0x1; // Hungarian Technical order

export const SORT_GEORGIAN_TRADITIONAL   = 0x0; // Georgian Traditional order
export const SORT_GEORGIAN_MODERN        = 0x1; // Georgian Modern order

// end_r_winnt

//
// ** DEPRECATED ** DEPRECATED ** DEPRECATED ** DEPRECATED ** DEPRECATED **
//
//  DEPRECATED: The LCID/LANGID/SORTID concept is deprecated, please use
//  Locale Names instead, eg: "en-US" instead of an LCID like 0x0409.
//  See the documentation for GetLocaleInfoEx.
//
//  A language ID is a 16 bit value which is the combination of a
//  primary language ID and a secondary language ID.  The bits are
//  allocated as follows:
//
//       +-----------------------+-------------------------+
//       |     Sublanguage ID    |   Primary Language ID   |
//       +-----------------------+-------------------------+
//        15                   10 9                       0   bit
//
//  WARNING:  This pattern is broken and not followed for all languages.
//            Serbian, Bosnian & Croatian are a few examples.
//
//  WARNING:  There are > 6000 human languages.  The PRIMARYLANGID construct
//            cannot support all languages your application may encounter.
//            Please use Language Names, such as "en".
//
//  WARNING:  There are > 200 country-regions.  The SUBLANGID construct cannot
//            represent all valid dialects of languages such as English.
//            Please use Locale Names, such as "en-US".
//
//  WARNING:  Some languages may have more than one PRIMARYLANGID.  Please
//            use Locale Names, such as "en-FJ".
//
//  WARNING:  Some languages do not have assigned LANGIDs.  Please use
//            Locale Names, such as "tlh-Piqd".
//
//  It is recommended that applications test for locale names rather than
//  attempting to construct/deconstruct LANGID/PRIMARYLANGID/SUBLANGID
//
//  Language ID creation/extraction macros:
//
//    MAKELANGID    - construct language id from a primary language id and
//                    a sublanguage id.
//    PRIMARYLANGID - extract primary language id from a language id.
//    SUBLANGID     - extract sublanguage id from a language id.
//
//  Note that the LANG, SUBLANG construction is not always consistent.
//  The named locale APIs (eg GetLocaleInfoEx) are recommended.
//
//  DEPRECATED: Language IDs do not exist for all locales
//
// ** DEPRECATED ** DEPRECATED ** DEPRECATED ** DEPRECATED ** DEPRECATED **
//
// #define MAKELANGID(p, s)       ((((WORD  )(s)) << 10) | (WORD  )(p))
// #define PRIMARYLANGID(lgid)    ((WORD  )(lgid) & 0x3ff)
// #define SUBLANGID(lgid)        ((WORD  )(lgid) >> 10)


//
// ** DEPRECATED ** DEPRECATED ** DEPRECATED ** DEPRECATED ** DEPRECATED **
//
//  DEPRECATED: The LCID/LANGID/SORTID concept is deprecated, please use
//  Locale Names instead, eg: en-US instead of an LCID like 0x0409.
//  See the documentation for GetLocaleInfoEx.
//
//  A locale ID is a 32 bit value which is the combination of a
//  language ID, a sort ID, and a reserved area.  The bits are
//  allocated as follows:
//
//       +-------------+---------+-------------------------+
//       |   Reserved  | Sort ID |      Language ID        |
//       +-------------+---------+-------------------------+
//        31         20 19     16 15                      0   bit
//
//  WARNING: This pattern isn't always followed (es-ES_tradnl vs es-ES for example)
//
//  WARNING: Some locales do not have assigned LCIDs.  Please use
//           Locale Names, such as "tlh-Piqd".
//
//  It is recommended that applications test for locale names rather than
//  attempting to rely on LCID or LANGID behavior.
//
//  DEPRECATED: Locale ID creation/extraction macros:
//
//    MAKELCID            - construct the locale id from a language id and a sort id.
//    MAKESORTLCID        - construct the locale id from a language id, sort id, and sort version.
//    LANGIDFROMLCID      - extract the language id from a locale id.
//    SORTIDFROMLCID      - extract the sort id from a locale id.
//    SORTVERSIONFROMLCID - extract the sort version from a locale id.
//
//  Note that the LANG, SUBLANG construction is not always consistent.
//  The named locale APIs (eg GetLocaleInfoEx) are recommended.
//
//  DEPRECATED: LCIDs do not exist for all locales.
//
// ** DEPRECATED ** DEPRECATED ** DEPRECATED ** DEPRECATED ** DEPRECATED **
//
export const NLS_VALID_LOCALE_MASK = 0x000fffff;

// #define MAKELCID(lgid, srtid)  ((DWORD)((((DWORD)((WORD  )(srtid))) << 16) |  \
//                                          ((DWORD)((WORD  )(lgid)))))
// #define MAKESORTLCID(lgid, srtid, ver)                                            \
//                                ((DWORD)((MAKELCID(lgid, srtid)) |             \
//                                     (((DWORD)((WORD  )(ver))) << 20)))
// #define LANGIDFROMLCID(lcid)   ((WORD  )(lcid))
// #define SORTIDFROMLCID(lcid)   ((WORD  )((((DWORD)(lcid)) >> 16) & 0xf))
// #define SORTVERSIONFROMLCID(lcid)  ((WORD  )((((DWORD)(lcid)) >> 20) & 0xf))

// Maximum Locale Name Length in Windows
// Locale names are preferred to the deprecated LCID/LANGID concepts.
//
// Locale names should follow the BCP47 recommendations and typically
// include language, script, regional variant, and perhaps additional specifiers.
// BCP47 allows some variation, eg: en-US is preferred to en-Latn-US.
export const LOCALE_NAME_MAX_LENGTH = 85;

//
// ** DEPRECATED ** DEPRECATED ** DEPRECATED ** DEPRECATED ** DEPRECATED **
//
//  Deprecated default System and User IDs for language and locale.
//
//  Locale names such as LOCALE_NAME_SYSTEM_DEFAULT, LOCALE_NAME_USER_DEFAULT,
//  and LOCALE_NAME_INVARIANT are preferred.  See documentation for GetLocaleInfoEx.
//

// export const LANG_SYSTEM_DEFAULT = (MAKELANGID(LANG_NEUTRAL, SUBLANG_SYS_DEFAULT));
// export const LANG_USER_DEFAULT = (MAKELANGID(LANG_NEUTRAL, SUBLANG_DEFAULT));
// export const LOCALE_SYSTEM_DEFAULT = (MAKELCID(LANG_SYSTEM_DEFAULT, SORT_DEFAULT));
// export const LOCALE_USER_DEFAULT = (MAKELCID(LANG_USER_DEFAULT, SORT_DEFAULT));

//
//  Other special IDs for language and locale.
//
//  DEPRECATED: These identifiers are all underspecified and lose information.
//              Please use Locale Names such as "en-FJ".
//              See documentation for GetLocaleInfoEx.
//
// export const LOCALE_CUSTOM_DEFAULT =
// 	(MAKELCID(MAKELANGID(LANG_NEUTRAL, SUBLANG_CUSTOM_DEFAULT), SORT_DEFAULT));
// export const LOCALE_CUSTOM_UNSPECIFIED =
// 	(MAKELCID(MAKELANGID(LANG_NEUTRAL, SUBLANG_CUSTOM_UNSPECIFIED), SORT_DEFAULT));
// export const LOCALE_CUSTOM_UI_DEFAULT =
// 	(MAKELCID(MAKELANGID(LANG_NEUTRAL, SUBLANG_UI_CUSTOM_DEFAULT), SORT_DEFAULT));
// export const LOCALE_NEUTRAL =
// 	(MAKELCID(MAKELANGID(LANG_NEUTRAL, SUBLANG_NEUTRAL), SORT_DEFAULT));
// export const LOCALE_INVARIANT =
// 	(MAKELCID(MAKELANGID(LANG_INVARIANT, SUBLANG_NEUTRAL), SORT_DEFAULT));

//
// Transient keyboard Locale IDs (LCIDs)
// Should only be used for keyboard layout identification
//
//  DEPRECATED: These identifiers are all transient and will change, even at
//              different times on the same system.
//              Please use Locale Names such as "en-FJ".
//              See documentation for GetLocaleInfoEx.
//
export const LOCALE_TRANSIENT_KEYBOARD1 = 0x2000;
export const LOCALE_TRANSIENT_KEYBOARD2 = 0x2400;
export const LOCALE_TRANSIENT_KEYBOARD3 = 0x2800;
export const LOCALE_TRANSIENT_KEYBOARD4 = 0x2c00;

//
// Locale with an unassigned LCID
// These locales cannot be queried by LCID
// Currently same as LOCALE_CUSTOM_UNSPECIFIED
//
// DEPRECATED: Please use Locale Names; see documentation for GetLocaleInfoEx.
//
// export const LOCALE_UNASSIGNED_LCID = LOCALE_CUSTOM_UNSPECIFIED;

// begin_ntminiport begin_ntndis begin_ntminitape

//
// Macros used to eliminate compiler warning generated when formal
// parameters or local variables are not declared.
//
// Use DBG_UNREFERENCED_PARAMETER() when a parameter is not yet
// referenced but will be once the module is completely developed.
//
// Use DBG_UNREFERENCED_LOCAL_VARIABLE() when a local variable is not yet
// referenced but will be once the module is completely developed.
//
// Use UNREFERENCED_PARAMETER() if a parameter will never be referenced.
//
// DBG_UNREFERENCED_PARAMETER and DBG_UNREFERENCED_LOCAL_VARIABLE will
// eventually be made into a null macro to help determine whether there
// is unfinished work.
//

// begin_ntoshvp

/*lint -save -e767 */
export const STATUS_WAIT_0                     = (0x00000000);
export const STATUS_ABANDONED_WAIT_0           = (0x00000080);
export const STATUS_USER_APC                   = (0x000000C0);
export const STATUS_TIMEOUT                    = (0x00000102);
export const STATUS_PENDING                    = (0x00000103);
export const DBG_EXCEPTION_HANDLED             = (0x00010001);
export const DBG_CONTINUE                      = (0x00010002);
export const STATUS_SEGMENT_NOTIFICATION       = (0x40000005);
export const STATUS_FATAL_APP_EXIT             = (0x40000015);
export const DBG_REPLY_LATER                   = (0x40010001);
export const DBG_TERMINATE_THREAD              = (0x40010003);
export const DBG_TERMINATE_PROCESS             = (0x40010004);
export const DBG_CONTROL_C                     = (0x40010005);
export const DBG_PRINTEXCEPTION_C              = (0x40010006);
export const DBG_RIPEXCEPTION                  = (0x40010007);
export const DBG_CONTROL_BREAK                 = (0x40010008);
export const DBG_COMMAND_EXCEPTION             = (0x40010009);
export const DBG_PRINTEXCEPTION_WIDE_C         = (0x4001000A);
export const STATUS_GUARD_PAGE_VIOLATION       = (0x80000001);
export const STATUS_DATATYPE_MISALIGNMENT      = (0x80000002);
export const STATUS_BREAKPOINT                 = (0x80000003);
export const STATUS_SINGLE_STEP                = (0x80000004);
export const STATUS_LONGJUMP                   = (0x80000026);
export const STATUS_UNWIND_CONSOLIDATE         = (0x80000029);
export const DBG_EXCEPTION_NOT_HANDLED         = (0x80010001);
export const STATUS_ACCESS_VIOLATION           = (0xC0000005);
export const STATUS_IN_PAGE_ERROR              = (0xC0000006);
export const STATUS_INVALID_HANDLE             = (0xC0000008);
export const STATUS_INVALID_PARAMETER          = (0xC000000D);
export const STATUS_NO_MEMORY                  = (0xC0000017);
export const STATUS_ILLEGAL_INSTRUCTION        = (0xC000001D);
export const STATUS_NONCONTINUABLE_EXCEPTION   = (0xC0000025);
export const STATUS_INVALID_DISPOSITION        = (0xC0000026);
export const STATUS_ARRAY_BOUNDS_EXCEEDED      = (0xC000008C);
export const STATUS_FLOAT_DENORMAL_OPERAND     = (0xC000008D);
export const STATUS_FLOAT_DIVIDE_BY_ZERO       = (0xC000008E);
export const STATUS_FLOAT_INEXACT_RESULT       = (0xC000008F);
export const STATUS_FLOAT_INVALID_OPERATION    = (0xC0000090);
export const STATUS_FLOAT_OVERFLOW             = (0xC0000091);
export const STATUS_FLOAT_STACK_CHECK          = (0xC0000092);
export const STATUS_FLOAT_UNDERFLOW            = (0xC0000093);
export const STATUS_INTEGER_DIVIDE_BY_ZERO     = (0xC0000094);
export const STATUS_INTEGER_OVERFLOW           = (0xC0000095);
export const STATUS_PRIVILEGED_INSTRUCTION     = (0xC0000096);
export const STATUS_STACK_OVERFLOW             = (0xC00000FD);
export const STATUS_DLL_NOT_FOUND              = (0xC0000135);
export const STATUS_ORDINAL_NOT_FOUND          = (0xC0000138);
export const STATUS_ENTRYPOINT_NOT_FOUND       = (0xC0000139);
export const STATUS_CONTROL_C_EXIT             = (0xC000013A);
export const STATUS_DLL_INIT_FAILED            = (0xC0000142);
export const STATUS_CONTROL_STACK_VIOLATION    = (0xC00001B2);
export const STATUS_FLOAT_MULTIPLE_FAULTS      = (0xC00002B4);
export const STATUS_FLOAT_MULTIPLE_TRAPS       = (0xC00002B5);
export const STATUS_REG_NAT_CONSUMPTION        = (0xC00002C9);
export const STATUS_HEAP_CORRUPTION            = (0xC0000374);
export const STATUS_STACK_BUFFER_OVERRUN       = (0xC0000409);
export const STATUS_INVALID_CRUNTIME_PARAMETER = (0xC0000417);
export const STATUS_ASSERTION_FAILURE          = (0xC0000420);
export const STATUS_ENCLAVE_VIOLATION          = (0xC00004A2);
export const STATUS_INTERRUPTED                = (0xC0000515);
export const STATUS_THREAD_NOT_RUNNING         = (0xC0000516);
export const STATUS_ALREADY_REGISTERED         = (0xC0000718);
export const STATUS_SXS_EARLY_DEACTIVATION     = (0xC015000F);
export const STATUS_SXS_INVALID_DEACTIVATION   = (0xC0150010);
/*lint -restore */

export const MAXIMUM_WAIT_OBJECTS = 64; // Maximum number of wait objects
export const MAXIMUM_SUSPEND_COUNT = MAXCHAR; // Maximum times thread can be suspended

export const KSPIN_LOCK = ULONG_PTR;
export const PKSPIN_LOCK = pointer(KSPIN_LOCK);

// begin_ntoshvp

// end_ntoshvp

const cpuArch = {
	current () {
		return {
			x64: "amd64",
			ia32: "i386"
		}[process.arch] ?? process.arch;
	}
};

// export const BitTest = _bittest;
// export const BitTestAndComplement = _bittestandcomplement;
// export const BitTestAndSet = _bittestandset;
// export const BitTestAndReset = _bittestandreset;
// export const InterlockedBitTestAndSet = _interlockedbittestandset;
// export const InterlockedBitTestAndSetAcquire = _interlockedbittestandset;
// export const InterlockedBitTestAndSetRelease = _interlockedbittestandset;
// export const InterlockedBitTestAndSetNoFence = _interlockedbittestandset;
// export const InterlockedBitTestAndReset = _interlockedbittestandreset;
// export const InterlockedBitTestAndResetAcquire = _interlockedbittestandreset;
// export const InterlockedBitTestAndResetRelease = _interlockedbittestandreset;
// export const InterlockedBitTestAndResetNoFence = _interlockedbittestandreset;
// export const BitTest64 = _bittest64;
// export const BitTestAndComplement64 = _bittestandcomplement64;
// export const BitTestAndSet64 = _bittestandset64;
// export const BitTestAndReset64 = _bittestandreset64;
// export const InterlockedBitTestAndSet64 = _interlockedbittestandset64;
// export const InterlockedBitTestAndSet64Acquire = _interlockedbittestandset64;
// export const InterlockedBitTestAndSet64Release = _interlockedbittestandset64;
// export const InterlockedBitTestAndSet64NoFence = _interlockedbittestandset64;
// export const InterlockedBitTestAndReset64 = _interlockedbittestandreset64;
// export const InterlockedBitTestAndReset64Acquire = _interlockedbittestandreset64;
// export const InterlockedBitTestAndReset64Release = _interlockedbittestandreset64;
// export const InterlockedBitTestAndReset64NoFence = _interlockedbittestandreset64;
// export const BitScanForward = _BitScanForward;
// export const BitScanReverse = _BitScanReverse;
// export const BitScanForward64 = _BitScanForward64;
// export const BitScanReverse64 = _BitScanReverse64;
// export const InterlockedIncrement16 = _InterlockedIncrement16;
// export const InterlockedIncrementAcquire16 = _InterlockedIncrement16;
// export const InterlockedIncrementRelease16 = _InterlockedIncrement16;
// export const InterlockedIncrementNoFence16 = _InterlockedIncrement16;
// export const InterlockedDecrement16 = _InterlockedDecrement16;
// export const InterlockedDecrementAcquire16 = _InterlockedDecrement16;
// export const InterlockedDecrementRelease16 = _InterlockedDecrement16;
// export const InterlockedDecrementNoFence16 = _InterlockedDecrement16;
// export const InterlockedCompareExchange16 = _InterlockedCompareExchange16;
// export const InterlockedCompareExchangeAcquire16 = _InterlockedCompareExchange16;
// export const InterlockedCompareExchangeRelease16 = _InterlockedCompareExchange16;
// export const InterlockedCompareExchangeNoFence16 = _InterlockedCompareExchange16;
// export const InterlockedAnd = _InterlockedAnd;
// export const InterlockedAndAcquire = _InterlockedAnd;
// export const InterlockedAndRelease = _InterlockedAnd;
// export const InterlockedAndNoFence = _InterlockedAnd;
// export const InterlockedOr = _InterlockedOr;
// export const InterlockedOrAcquire = _InterlockedOr;
// export const InterlockedOrRelease = _InterlockedOr;
// export const InterlockedOrNoFence = _InterlockedOr;
// export const InterlockedXor = _InterlockedXor;
// export const InterlockedXorAcquire = _InterlockedXor;
// export const InterlockedXorRelease = _InterlockedXor;
// export const InterlockedXorNoFence = _InterlockedXor;
// export const InterlockedIncrement = _InterlockedIncrement;
// export const InterlockedIncrementAcquire = _InterlockedIncrement;
// export const InterlockedIncrementRelease = _InterlockedIncrement;
// export const InterlockedIncrementNoFence = _InterlockedIncrement;
// export const InterlockedDecrement = _InterlockedDecrement;
// export const InterlockedDecrementAcquire = _InterlockedDecrement;
// export const InterlockedDecrementRelease = _InterlockedDecrement;
// export const InterlockedDecrementNoFence = _InterlockedDecrement;
// export const InterlockedAdd = _InlineInterlockedAdd;
// export const InterlockedAddAcquire = _InlineInterlockedAdd;
// export const InterlockedAddRelease = _InlineInterlockedAdd;
// export const InterlockedAddNoFence = _InlineInterlockedAdd;
// export const InterlockedExchange = _InterlockedExchange;
// export const InterlockedExchangeAcquire = _InterlockedExchange;
// export const InterlockedExchangeNoFence = _InterlockedExchange;
// export const InterlockedExchangeAdd = _InterlockedExchangeAdd;
// export const InterlockedExchangeAddAcquire = _InterlockedExchangeAdd;
// export const InterlockedExchangeAddRelease = _InterlockedExchangeAdd;
// export const InterlockedExchangeAddNoFence = _InterlockedExchangeAdd;
// export const InterlockedCompareExchange = _InterlockedCompareExchange;
// export const InterlockedCompareExchangeAcquire = _InterlockedCompareExchange;
// export const InterlockedCompareExchangeRelease = _InterlockedCompareExchange;
// export const InterlockedCompareExchangeNoFence = _InterlockedCompareExchange;
// export const InterlockedAnd64 = _InterlockedAnd64;
// export const InterlockedAnd64Acquire = _InterlockedAnd64;
// export const InterlockedAnd64Release = _InterlockedAnd64;
// export const InterlockedAnd64NoFence = _InterlockedAnd64;
// export const InterlockedAndAffinity = InterlockedAnd64;
// export const InterlockedOr64 = _InterlockedOr64;
// export const InterlockedOr64Acquire = _InterlockedOr64;
// export const InterlockedOr64Release = _InterlockedOr64;
// export const InterlockedOr64NoFence = _InterlockedOr64;
// export const InterlockedOrAffinity = InterlockedOr64;
// export const InterlockedXor64 = _InterlockedXor64;
// export const InterlockedXor64Acquire = _InterlockedXor64;
// export const InterlockedXor64Release = _InterlockedXor64;
// export const InterlockedXor64NoFence = _InterlockedXor64;
// export const InterlockedIncrement64 = _InterlockedIncrement64;
// export const InterlockedIncrementAcquire64 = _InterlockedIncrement64;
// export const InterlockedIncrementRelease64 = _InterlockedIncrement64;
// export const InterlockedIncrementNoFence64 = _InterlockedIncrement64;
// export const InterlockedDecrement64 = _InterlockedDecrement64;
// export const InterlockedDecrementAcquire64 = _InterlockedDecrement64;
// export const InterlockedDecrementRelease64 = _InterlockedDecrement64;
// export const InterlockedDecrementNoFence64 = _InterlockedDecrement64;
// export const InterlockedAdd64 = _InlineInterlockedAdd64;
// export const InterlockedAddAcquire64 = _InlineInterlockedAdd64;
// export const InterlockedAddRelease64 = _InlineInterlockedAdd64;
// export const InterlockedAddNoFence64 = _InlineInterlockedAdd64;
// export const InterlockedExchange64 = _InterlockedExchange64;
// export const InterlockedExchangeAcquire64 = InterlockedExchange64;
// export const InterlockedExchangeNoFence64 = InterlockedExchange64;
// export const InterlockedExchangeAdd64 = _InterlockedExchangeAdd64;
// export const InterlockedExchangeAddAcquire64 = _InterlockedExchangeAdd64;
// export const InterlockedExchangeAddRelease64 = _InterlockedExchangeAdd64;
// export const InterlockedExchangeAddNoFence64 = _InterlockedExchangeAdd64;
// export const InterlockedCompareExchange64 = _InterlockedCompareExchange64;
// export const InterlockedCompareExchangeAcquire64 = InterlockedCompareExchange64;
// export const InterlockedCompareExchangeRelease64 = InterlockedCompareExchange64;
// export const InterlockedCompareExchangeNoFence64 = InterlockedCompareExchange64;
// export const InterlockedCompareExchange128 = _InterlockedCompareExchange128;
// export const InterlockedExchangePointer = _InterlockedExchangePointer;
// export const InterlockedExchangePointerNoFence = _InterlockedExchangePointer;
// export const InterlockedExchangePointerAcquire = _InterlockedExchangePointer;
// export const InterlockedCompareExchangePointer = _InterlockedCompareExchangePointer;
// export const InterlockedCompareExchangePointerAcquire = _InterlockedCompareExchangePointer;
// export const InterlockedCompareExchangePointerRelease = _InterlockedCompareExchangePointer;
// export const InterlockedCompareExchangePointerNoFence = _InterlockedCompareExchangePointer;
// export const InterlockedExchange8 = _InterlockedExchange8;
// export const InterlockedExchange16 = _InterlockedExchange16;
// export const InterlockedExchangeAdd8 = _InterlockedExchangeAdd8;
// export const InterlockedAnd8 = _InterlockedAnd8;
// export const InterlockedOr8 = _InterlockedOr8;
// export const InterlockedXor8 = _InterlockedXor8;
// export const InterlockedAnd16 = _InterlockedAnd16;
// export const InterlockedOr16 = _InterlockedOr16;
// export const InterlockedXor16 = _InterlockedXor16;
// export const CpuIdEx = __cpuidex;
// export const FastFence = __faststorefence;
// export const LoadFence = _mm_lfence;
// export const MemoryFence = _mm_mfence;
// export const StoreFence = _mm_sfence;
// export const SpeculationFence = LoadFence;

// export const _MM_HINT_T0 = 1;
// export const _MM_HINT_T1 = 2;
// export const _MM_HINT_T2 = 3;
// export const _MM_HINT_NTA = 0;

// export const YieldProcessor = _mm_pause;
// export const MemoryBarrier = __faststorefence;

// export const PF_TEMPORAL_LEVEL_1 = _MM_HINT_T0;
// export const PF_TEMPORAL_LEVEL_2 = _MM_HINT_T1;
// export const PF_TEMPORAL_LEVEL_3 = _MM_HINT_T2;

// export const ReadMxCsr = _mm_getcsr;
// export const WriteMxCsr = _mm_setcsr;
// export const GetSegmentLimit = __segmentlimit;
// export const ReadPMC = __readpmc;
// export const MultiplyHigh = __mulh;
// export const UnsignedMultiplyHigh = __umulh;
// export const PopulationCount64 = __popcnt64;
// export const ShiftLeft128 = __shiftleft128;
// export const ShiftRight128 = __shiftright128;
// export const Multiply128 = _mul128;
// export const UnsignedMultiply128 = _umul128;

export const EXCEPTION_READ_FAULT = 0;		// 这 3 个值各平台都是一样的，在此定义一次，后面的都注释掉了
export const EXCEPTION_WRITE_FAULT = 1;
export const EXCEPTION_EXECUTE_FAULT = 8;

export const CONTEXT_AMD64                  = 0x00100000;
cpuArch.amd64 = (() => {
	const CONTEXT_CONTROL                = (CONTEXT_AMD64 | 0x00000001);
	const CONTEXT_INTEGER                = (CONTEXT_AMD64 | 0x00000002);
	const CONTEXT_SEGMENTS               = (CONTEXT_AMD64 | 0x00000004);
	const CONTEXT_FLOATING_POINT         = (CONTEXT_AMD64 | 0x00000008);
	const CONTEXT_DEBUG_REGISTERS        = (CONTEXT_AMD64 | 0x00000010);
	const CONTEXT_FULL                   = (CONTEXT_CONTROL | CONTEXT_INTEGER |
                                            CONTEXT_FLOATING_POINT);
	const CONTEXT_ALL                    = (CONTEXT_CONTROL | CONTEXT_INTEGER |
                                            CONTEXT_SEGMENTS | CONTEXT_FLOATING_POINT |
                                            CONTEXT_DEBUG_REGISTERS);
	const CONTEXT_XSTATE                 = (CONTEXT_AMD64 | 0x00000040);
	const CONTEXT_EXCEPTION_ACTIVE       = 0x08000000;
	const CONTEXT_SERVICE_ACTIVE         = 0x10000000;
	const CONTEXT_EXCEPTION_REQUEST      = 0x40000000;
	const CONTEXT_EXCEPTION_REPORTING    = 0x80000000;
	return {
		CONTEXT_CONTROL,
		CONTEXT_INTEGER,
		CONTEXT_SEGMENTS,
		CONTEXT_FLOATING_POINT,
		CONTEXT_DEBUG_REGISTERS,
		CONTEXT_FULL,
		CONTEXT_ALL,
		CONTEXT_XSTATE,
		CONTEXT_EXCEPTION_ACTIVE,
		CONTEXT_SERVICE_ACTIVE,
		CONTEXT_EXCEPTION_REQUEST,
		CONTEXT_EXCEPTION_REPORTING,
	}
})();

export const CONTEXT_KERNEL_DEBUGGER        = 0x04000000;

export const INITIAL_MXCSR = 0x1f80;
export const INITIAL_FPCSR = 0x027f;

export const RUNTIME_FUNCTION_INDIRECT = 0x1;

export const UNW_FLAG_NHANDLER    = 0x0;
export const UNW_FLAG_EHANDLER    = 0x1;
export const UNW_FLAG_UHANDLER    = 0x2;
export const UNW_FLAG_CHAININFO   = 0x4;
export const UNW_FLAG_NO_EPILOGUE = 0x80000000;

export const UNWIND_CHAIN_LIMIT   = 32;

export const UNWIND_HISTORY_TABLE_SIZE = 12;

export const OUT_OF_PROCESS_FUNCTION_TABLE_CALLBACK_EXPORT_NAME =
	"OutOfProcessFunctionTableCallback";

// export const BitTest = _bittest;
// export const BitTestAndComplement = _bittestandcomplement;
// export const BitTestAndSet = _bittestandset;
// export const BitTestAndReset = _bittestandreset;
// export const InterlockedBitTestAndSet = _interlockedbittestandset;
// export const InterlockedBitTestAndSetAcquire = _interlockedbittestandset_acq;
// export const InterlockedBitTestAndSetRelease = _interlockedbittestandset_re;
// export const InterlockedBitTestAndSetNoFence = _interlockedbittestandset_nf;
// export const InterlockedBitTestAndReset = _interlockedbittestandreset;
// export const InterlockedBitTestAndResetAcquire = _interlockedbittestandreset_acq;
// export const InterlockedBitTestAndResetRelease = _interlockedbittestandreset_re;
// export const InterlockedBitTestAndResetNoFence = _interlockedbittestandreset_nf;
// export const BitScanForward = _BitScanForward;
// export const BitScanReverse = _BitScanReverse;
// export const BitScanReverse64 = _InlineBitScanReverse64;
// export const InterlockedAnd8 = _InterlockedAnd8;
// export const InterlockedOr8 = _InterlockedOr8;
// export const InterlockedXor8 = _InterlockedXor8;
// export const InterlockedExchangeAdd8 = _InterlockedExchangeAdd8;
// export const InterlockedAnd16 = _InterlockedAnd16;
// export const InterlockedOr16 = _InterlockedOr16;
// export const InterlockedXor16 = _InterlockedXor16;
// export const InterlockedIncrement16 = _InterlockedIncrement16;
// export const InterlockedDecrement16 = _InterlockedDecrement16;
// export const InterlockedCompareExchange16 = _InterlockedCompareExchange16;
// export const InterlockedAnd = _InterlockedAnd;
// export const InterlockedOr = _InterlockedOr;
// export const InterlockedXor = _InterlockedXor;
// export const InterlockedIncrement = _InterlockedIncrement;
// export const InterlockedDecrement = _InterlockedDecrement;
// export const InterlockedAdd = _InterlockedAdd;
// export const InterlockedExchange = _InterlockedExchange;
// export const InterlockedExchangeAdd = _InterlockedExchangeAdd;
// export const InterlockedCompareExchange = _InterlockedCompareExchange;
// export const InterlockedAnd64 = _InterlockedAnd64;
// export const InterlockedAndAffinity = InterlockedAnd64;
// export const InterlockedOr64 = _InterlockedOr64;
// export const InterlockedOrAffinity = InterlockedOr64;
// export const InterlockedXor64 = _InterlockedXor64;
// export const InterlockedIncrement64 = _InterlockedIncrement64;
// export const InterlockedDecrement64 = _InterlockedDecrement64;
// export const InterlockedAdd64 = _InterlockedAdd64;
// export const InterlockedExchange64 = _InterlockedExchange64;
// export const InterlockedExchangeAdd64 = _InterlockedExchangeAdd64;
// export const InterlockedCompareExchange64 = _InterlockedCompareExchange64;
// export const InterlockedExchangePointer = _InterlockedExchangePointer;
// export const InterlockedCompareExchangePointer = _InterlockedCompareExchangePointer;
// export const InterlockedExchange16 = _InterlockedExchange16;
// export const InterlockedAndAcquire8 = _InterlockedAnd8_acq;
// export const InterlockedAndRelease8 = _InterlockedAnd8_re;
// export const InterlockedAndNoFence8 = _InterlockedAnd8_nf;
// export const InterlockedOrAcquire8 = _InterlockedOr8_acq;
// export const InterlockedOrRelease8 = _InterlockedOr8_re;
// export const InterlockedOrNoFence8 = _InterlockedOr8_nf;
// export const InterlockedXorAcquire8 = _InterlockedXor8_acq;
// export const InterlockedXorRelease8 = _InterlockedXor8_re;
// export const InterlockedXorNoFence8 = _InterlockedXor8_nf;
// export const InterlockedAndAcquire16 = _InterlockedAnd16_acq;
// export const InterlockedAndRelease16 = _InterlockedAnd16_re;
// export const InterlockedAndNoFence16 = _InterlockedAnd16_nf;
// export const InterlockedOrAcquire16 = _InterlockedOr16_acq;
// export const InterlockedOrRelease16 = _InterlockedOr16_re;
// export const InterlockedOrNoFence16 = _InterlockedOr16_nf;
// export const InterlockedXorAcquire16 = _InterlockedXor16_acq;
// export const InterlockedXorRelease16 = _InterlockedXor16_re;
// export const InterlockedXorNoFence16 = _InterlockedXor16_nf;
// export const InterlockedIncrementAcquire16 = _InterlockedIncrement16_acq;
// export const InterlockedIncrementRelease16 = _InterlockedIncrement16_re;
// export const InterlockedIncrementNoFence16 = _InterlockedIncrement16_nf;
// export const InterlockedDecrementAcquire16 = _InterlockedDecrement16_acq;
// export const InterlockedDecrementRelease16 = _InterlockedDecrement16_re;
// export const InterlockedDecrementNoFence16 = _InterlockedDecrement16_nf;
// export const InterlockedExchangeAcquire16 = _InterlockedExchange16_acq;
// export const InterlockedExchangeNoFence16 = _InterlockedExchange16_nf;
// export const InterlockedCompareExchangeAcquire16 = _InterlockedCompareExchange16_acq;
// export const InterlockedCompareExchangeRelease16 = _InterlockedCompareExchange16_re;
// export const InterlockedCompareExchangeNoFence16 = _InterlockedCompareExchange16_nf;
// export const InterlockedAndAcquire = _InterlockedAnd_acq;
// export const InterlockedAndRelease = _InterlockedAnd_re;
// export const InterlockedAndNoFence = _InterlockedAnd_nf;
// export const InterlockedOrAcquire = _InterlockedOr_acq;
// export const InterlockedOrRelease = _InterlockedOr_re;
// export const InterlockedOrNoFence = _InterlockedOr_nf;
// export const InterlockedXorAcquire = _InterlockedXor_acq;
// export const InterlockedXorRelease = _InterlockedXor_re;
// export const InterlockedXorNoFence = _InterlockedXor_nf;
// export const InterlockedIncrementAcquire = _InterlockedIncrement_acq;
// export const InterlockedIncrementRelease = _InterlockedIncrement_re;
// export const InterlockedIncrementNoFence = _InterlockedIncrement_nf;
// export const InterlockedDecrementAcquire = _InterlockedDecrement_acq;
// export const InterlockedDecrementRelease = _InterlockedDecrement_re;
// export const InterlockedDecrementNoFence = _InterlockedDecrement_nf;
// export const InterlockedAddAcquire = _InterlockedAdd_acq;
// export const InterlockedAddRelease = _InterlockedAdd_re;
// export const InterlockedAddNoFence = _InterlockedAdd_nf;
// export const InterlockedExchangeAcquire = _InterlockedExchange_acq;
// export const InterlockedExchangeNoFence = _InterlockedExchange_nf;
// export const InterlockedExchangeAddAcquire = _InterlockedExchangeAdd_acq;
// export const InterlockedExchangeAddRelease = _InterlockedExchangeAdd_re;
// export const InterlockedExchangeAddNoFence = _InterlockedExchangeAdd_nf;
// export const InterlockedCompareExchangeAcquire = _InterlockedCompareExchange_acq;
// export const InterlockedCompareExchangeRelease = _InterlockedCompareExchange_re;
// export const InterlockedCompareExchangeNoFence = _InterlockedCompareExchange_nf;
// export const InterlockedAndAcquire64 = _InterlockedAnd64_acq;
// export const InterlockedAndRelease64 = _InterlockedAnd64_re;
// export const InterlockedAndNoFence64 = _InterlockedAnd64_nf;
// export const InterlockedOrAcquire64 = _InterlockedOr64_acq;
// export const InterlockedOrRelease64 = _InterlockedOr64_re;
// export const InterlockedOrNoFence64 = _InterlockedOr64_nf;
// export const InterlockedXorAcquire64 = _InterlockedXor64_acq;
// export const InterlockedXorRelease64 = _InterlockedXor64_re;
// export const InterlockedXorNoFence64 = _InterlockedXor64_nf;
// export const InterlockedIncrementAcquire64 = _InterlockedIncrement64_acq;
// export const InterlockedIncrementRelease64 = _InterlockedIncrement64_re;
// export const InterlockedIncrementNoFence64 = _InterlockedIncrement64_nf;
// export const InterlockedDecrementAcquire64 = _InterlockedDecrement64_acq;
// export const InterlockedDecrementRelease64 = _InterlockedDecrement64_re;
// export const InterlockedDecrementNoFence64 = _InterlockedDecrement64_nf;
// export const InterlockedAddAcquire64 = _InterlockedAdd64_acq;
// export const InterlockedAddRelease64 = _InterlockedAdd64_re;
// export const InterlockedAddNoFence64 = _InterlockedAdd64_nf;
// export const InterlockedExchangeAcquire64 = _InterlockedExchange64_acq;
// export const InterlockedExchangeNoFence64 = _InterlockedExchange64_nf;
// export const InterlockedExchangeAddAcquire64 = _InterlockedExchangeAdd64_acq;
// export const InterlockedExchangeAddRelease64 = _InterlockedExchangeAdd64_re;
// export const InterlockedExchangeAddNoFence64 = _InterlockedExchangeAdd64_nf;
// export const InterlockedCompareExchangeAcquire64 = _InterlockedCompareExchange64_acq;
// export const InterlockedCompareExchangeRelease64 = _InterlockedCompareExchange64_re;
// export const InterlockedCompareExchangeNoFence64 = _InterlockedCompareExchange64_nf;
// export const InterlockedExchangePointerAcquire = _InterlockedExchangePointer_acq;
// export const InterlockedExchangePointerNoFence = _InterlockedExchangePointer_nf;
// export const InterlockedCompareExchangePointerAcquire = _InterlockedCompareExchangePointer_acq;
// export const InterlockedCompareExchangePointerRelease = _InterlockedCompareExchangePointer_re;
// export const InterlockedCompareExchangePointerNoFence = _InterlockedCompareExchangePointer_nf;

export const CP15_PMSELR    = [15, 0, 9, 12, 5]; // Event Counter Selection Register
export const CP15_PMXEVCNTR = [15, 0, 9, 13, 2]; // Event Count Register
export const CP15_TPIDRURW  = [15, 0, 13, 0, 2]; // Software Thread ID Register, User Read/Write
export const CP15_TPIDRURO  = [15, 0, 13, 0, 3]; // Software Thread ID Register, User Read Only
export const CP15_TPIDRPRW  = [15, 0, 13, 0, 4]; // Software Thread ID Register, Privileged Only

// export const PF_TEMPORAL_LEVEL_1 = 0;
// export const PF_TEMPORAL_LEVEL_2 = 1;
// export const PF_TEMPORAL_LEVEL_3 = 2;
// export const PF_NON_TEMPORAL_LEVEL_ALL = 3;

// export const EXCEPTION_READ_FAULT = 0;		// 这 3 个值各平台都是一样的
// export const EXCEPTION_WRITE_FAULT = 1;
// export const EXCEPTION_EXECUTE_FAULT = 8;

export const CONTEXT_ARM = 0x00200000;
cpuArch.arm = (() => {
	const CONTEXT_CONTROL             = (CONTEXT_ARM | 0x1);
	const CONTEXT_INTEGER             = (CONTEXT_ARM | 0x2);
	const CONTEXT_FLOATING_POINT      = (CONTEXT_ARM | 0x4);
	const CONTEXT_DEBUG_REGISTERS     = (CONTEXT_ARM | 0x8);
	const CONTEXT_FULL                = (CONTEXT_CONTROL | CONTEXT_INTEGER | CONTEXT_FLOATING_POINT);
	const CONTEXT_ALL                 = (CONTEXT_CONTROL | CONTEXT_INTEGER | CONTEXT_FLOATING_POINT | CONTEXT_DEBUG_REGISTERS);
	const CONTEXT_EXCEPTION_ACTIVE    = 0x8000000;
	const CONTEXT_SERVICE_ACTIVE      = 0x10000000;
	const CONTEXT_EXCEPTION_REQUEST   = 0x40000000;
	const CONTEXT_EXCEPTION_REPORTING = 0x80000000;
	return {
		CONTEXT_CONTROL,
		CONTEXT_INTEGER,
		CONTEXT_FLOATING_POINT,
		CONTEXT_DEBUG_REGISTERS,
		CONTEXT_FULL,
		CONTEXT_ALL,
		CONTEXT_EXCEPTION_ACTIVE,
		CONTEXT_SERVICE_ACTIVE,
		CONTEXT_EXCEPTION_REQUEST,
		CONTEXT_EXCEPTION_REPORTING,
	}
})();
export const CONTEXT_UNWOUND_TO_CALL = 0x20000000;
export const INITIAL_CPSR = 0x10;
export const INITIAL_FPSCR = 0;

export const ARM_MAX_BREAKPOINTS = 8;
export const ARM_MAX_WATCHPOINTS = 1;

// export const UNW_FLAG_NHANDLER = 0x0;
// export const UNW_FLAG_EHANDLER = 0x1;
// export const UNW_FLAG_UHANDLER = 0x2;

// export const UNWIND_HISTORY_TABLE_SIZE = 12;

// export const OUT_OF_PROCESS_FUNCTION_TABLE_CALLBACK_EXPORT_NAME =	// 值相同，保留一个
// 	"OutOfProcessFunctionTableCallback";

// export const BitTest = _bittest;
// export const BitTestAndComplement = _bittestandcomplement;
// export const BitTestAndSet = _bittestandset;
// export const BitTestAndReset = _bittestandreset;
// export const InterlockedBitTestAndSet = _interlockedbittestandset;
// export const InterlockedBitTestAndSetAcquire = _interlockedbittestandset_acq;
// export const InterlockedBitTestAndSetRelease = _interlockedbittestandset_re;
// export const InterlockedBitTestAndSetNoFence = _interlockedbittestandset_nf;
// export const InterlockedBitTestAndReset = _interlockedbittestandreset;
// export const InterlockedBitTestAndResetAcquire = _interlockedbittestandreset_acq;
// export const InterlockedBitTestAndResetRelease = _interlockedbittestandreset_re;
// export const InterlockedBitTestAndResetNoFence = _interlockedbittestandreset_nf;
// export const BitTest64 = _bittest64;
// export const BitTestAndComplement64 = _bittestandcomplement64;
// export const BitTestAndSet64 = _bittestandset64;
// export const BitTestAndReset64 = _bittestandreset64;
// export const InterlockedBitTestAndSet64 = _interlockedbittestandset64;
// export const InterlockedBitTestAndSet64Acquire = _interlockedbittestandset64;
// export const InterlockedBitTestAndSet64Release = _interlockedbittestandset64;
// export const InterlockedBitTestAndReset64 = _interlockedbittestandreset64;
// export const InterlockedBitTestAndReset64Acquire = _interlockedbittestandreset64;
// export const InterlockedBitTestAndReset64Release = _interlockedbittestandreset64;
// export const BitScanForward = _BitScanForward;
// export const BitScanReverse = _BitScanReverse;
// export const BitScanForward64 = _BitScanForward64;
// export const BitScanReverse64 = _BitScanReverse64;
// export const InterlockedAnd8 = _InterlockedAnd8;
// export const InterlockedOr8 = _InterlockedOr8;
// export const InterlockedXor8 = _InterlockedXor8;
// export const InterlockedExchangeAdd8 = _InterlockedExchangeAdd8;
// export const InterlockedAnd16 = _InterlockedAnd16;
// export const InterlockedOr16 = _InterlockedOr16;
// export const InterlockedXor16 = _InterlockedXor16;
// export const InterlockedIncrement16 = _InterlockedIncrement16;
// export const InterlockedDecrement16 = _InterlockedDecrement16;
// export const InterlockedCompareExchange16 = _InterlockedCompareExchange16;
// export const InterlockedAnd = _InterlockedAnd;
// export const InterlockedOr = _InterlockedOr;
// export const InterlockedXor = _InterlockedXor;
// export const InterlockedIncrement = _InterlockedIncrement;
// export const InterlockedDecrement = _InterlockedDecrement;
// export const InterlockedAdd = _InterlockedAdd;
// export const InterlockedExchange = _InterlockedExchange;
// export const InterlockedExchangeAdd = _InterlockedExchangeAdd;
// export const InterlockedCompareExchange = _InterlockedCompareExchange;
// export const InterlockedAnd64 = _InterlockedAnd64;
// export const InterlockedAndAffinity = InterlockedAnd64;
// export const InterlockedOr64 = _InterlockedOr64;
// export const InterlockedOrAffinity = InterlockedOr64;
// export const InterlockedXor64 = _InterlockedXor64;
// export const InterlockedIncrement64 = _InterlockedIncrement64;
// export const InterlockedDecrement64 = _InterlockedDecrement64;
// export const InterlockedAdd64 = _InterlockedAdd64;
// export const InterlockedExchange64 = _InterlockedExchange64;
// export const InterlockedExchangeAdd64 = _InterlockedExchangeAdd64;
// export const InterlockedCompareExchange64 = _InterlockedCompareExchange64;
// export const InterlockedExchangePointer = _InterlockedExchangePointer;
// export const InterlockedCompareExchangePointer = _InterlockedCompareExchangePointer;
// export const InterlockedExchange16 = _InterlockedExchange16;
// export const InterlockedAndAcquire8 = _InterlockedAnd8_acq;
// export const InterlockedAndRelease8 = _InterlockedAnd8_re;
// export const InterlockedAndNoFence8 = _InterlockedAnd8_nf;
// export const InterlockedOrAcquire8 = _InterlockedOr8_acq;
// export const InterlockedOrRelease8 = _InterlockedOr8_re;
// export const InterlockedOrNoFence8 = _InterlockedOr8_nf;
// export const InterlockedXorAcquire8 = _InterlockedXor8_acq;
// export const InterlockedXorRelease8 = _InterlockedXor8_re;
// export const InterlockedXorNoFence8 = _InterlockedXor8_nf;
// export const InterlockedAndAcquire16 = _InterlockedAnd16_acq;
// export const InterlockedAndRelease16 = _InterlockedAnd16_re;
// export const InterlockedAndNoFence16 = _InterlockedAnd16_nf;
// export const InterlockedOrAcquire16 = _InterlockedOr16_acq;
// export const InterlockedOrRelease16 = _InterlockedOr16_re;
// export const InterlockedOrNoFence16 = _InterlockedOr16_nf;
// export const InterlockedXorAcquire16 = _InterlockedXor16_acq;
// export const InterlockedXorRelease16 = _InterlockedXor16_re;
// export const InterlockedXorNoFence16 = _InterlockedXor16_nf;
// export const InterlockedIncrementAcquire16 = _InterlockedIncrement16_acq;
// export const InterlockedIncrementRelease16 = _InterlockedIncrement16_re;
// export const InterlockedIncrementNoFence16 = _InterlockedIncrement16_nf;
// export const InterlockedDecrementAcquire16 = _InterlockedDecrement16_acq;
// export const InterlockedDecrementRelease16 = _InterlockedDecrement16_re;
// export const InterlockedDecrementNoFence16 = _InterlockedDecrement16_nf;
// export const InterlockedExchangeAcquire16 = _InterlockedExchange16_acq;
// export const InterlockedExchangeNoFence16 = _InterlockedExchange16_nf;
// export const InterlockedCompareExchangeAcquire16 = _InterlockedCompareExchange16_acq;
// export const InterlockedCompareExchangeRelease16 = _InterlockedCompareExchange16_re;
// export const InterlockedCompareExchangeNoFence16 = _InterlockedCompareExchange16_nf;
// export const InterlockedAndAcquire = _InterlockedAnd_acq;
// export const InterlockedAndRelease = _InterlockedAnd_re;
// export const InterlockedAndNoFence = _InterlockedAnd_nf;
// export const InterlockedOrAcquire = _InterlockedOr_acq;
// export const InterlockedOrRelease = _InterlockedOr_re;
// export const InterlockedOrNoFence = _InterlockedOr_nf;
// export const InterlockedXorAcquire = _InterlockedXor_acq;
// export const InterlockedXorRelease = _InterlockedXor_re;
// export const InterlockedXorNoFence = _InterlockedXor_nf;
// export const InterlockedIncrementAcquire = _InterlockedIncrement_acq;
// export const InterlockedIncrementRelease = _InterlockedIncrement_re;
// export const InterlockedIncrementNoFence = _InterlockedIncrement_nf;
// export const InterlockedDecrementAcquire = _InterlockedDecrement_acq;
// export const InterlockedDecrementRelease = _InterlockedDecrement_re;
// export const InterlockedDecrementNoFence = _InterlockedDecrement_nf;
// export const InterlockedAddAcquire = _InterlockedAdd_acq;
// export const InterlockedAddRelease = _InterlockedAdd_re;
// export const InterlockedAddNoFence = _InterlockedAdd_nf;
// export const InterlockedExchangeAcquire = _InterlockedExchange_acq;
// export const InterlockedExchangeNoFence = _InterlockedExchange_nf;
// export const InterlockedExchangeAddAcquire = _InterlockedExchangeAdd_acq;
// export const InterlockedExchangeAddRelease = _InterlockedExchangeAdd_re;
// export const InterlockedExchangeAddNoFence = _InterlockedExchangeAdd_nf;
// export const InterlockedCompareExchangeAcquire = _InterlockedCompareExchange_acq;
// export const InterlockedCompareExchangeRelease = _InterlockedCompareExchange_re;
// export const InterlockedCompareExchangeNoFence = _InterlockedCompareExchange_nf;
// export const InterlockedAndAcquire64 = _InterlockedAnd64_acq;
// export const InterlockedAndRelease64 = _InterlockedAnd64_re;
// export const InterlockedAndNoFence64 = _InterlockedAnd64_nf;
// export const InterlockedOrAcquire64 = _InterlockedOr64_acq;
// export const InterlockedOrRelease64 = _InterlockedOr64_re;
// export const InterlockedOrNoFence64 = _InterlockedOr64_nf;
// export const InterlockedXorAcquire64 = _InterlockedXor64_acq;
// export const InterlockedXorRelease64 = _InterlockedXor64_re;
// export const InterlockedXorNoFence64 = _InterlockedXor64_nf;
// export const InterlockedIncrementAcquire64 = _InterlockedIncrement64_acq;
// export const InterlockedIncrementRelease64 = _InterlockedIncrement64_re;
// export const InterlockedIncrementNoFence64 = _InterlockedIncrement64_nf;
// export const InterlockedDecrementAcquire64 = _InterlockedDecrement64_acq;
// export const InterlockedDecrementRelease64 = _InterlockedDecrement64_re;
// export const InterlockedDecrementNoFence64 = _InterlockedDecrement64_nf;
// export const InterlockedAddAcquire64 = _InterlockedAdd64_acq;
// export const InterlockedAddRelease64 = _InterlockedAdd64_re;
// export const InterlockedAddNoFence64 = _InterlockedAdd64_nf;
// export const InterlockedExchangeAcquire64 = _InterlockedExchange64_acq;
// export const InterlockedExchangeNoFence64 = _InterlockedExchange64_nf;
// export const InterlockedExchangeAddAcquire64 = _InterlockedExchangeAdd64_acq;
// export const InterlockedExchangeAddRelease64 = _InterlockedExchangeAdd64_re;
// export const InterlockedExchangeAddNoFence64 = _InterlockedExchangeAdd64_nf;
// export const InterlockedCompareExchangeAcquire64 = _InterlockedCompareExchange64_acq;
// export const InterlockedCompareExchangeRelease64 = _InterlockedCompareExchange64_re;
// export const InterlockedCompareExchangeNoFence64 = _InterlockedCompareExchange64_nf;
// export const InterlockedCompareExchange128 = _InterlockedCompareExchange128;
// export const InterlockedAnd64Acquire = _InterlockedAnd64_acq;
// export const InterlockedAnd64Release = _InterlockedAnd64_re;
// export const InterlockedAnd64NoFence = _InterlockedAnd64_nf;
// export const InterlockedOr64Acquire = _InterlockedOr64_acq;
// export const InterlockedOr64Release = _InterlockedOr64_re;
// export const InterlockedOr64NoFence = _InterlockedOr64_nf;
// export const InterlockedXor64Acquire = _InterlockedXor64_acq;
// export const InterlockedXor64Release = _InterlockedXor64_re;
// export const InterlockedXor64NoFence = _InterlockedXor64_nf;
// export const InterlockedExchangePointerAcquire = _InterlockedExchangePointer_acq;
// export const InterlockedExchangePointerNoFence = _InterlockedExchangePointer_nf;
// export const InterlockedCompareExchangePointerAcquire = _InterlockedCompareExchangePointer_acq;
// export const InterlockedCompareExchangePointerRelease = _InterlockedCompareExchangePointer_re;
// export const InterlockedCompareExchangePointerNoFence = _InterlockedCompareExchangePointer_nf;

// export const ARM64_CNTVCT        = ARM64_SYSREG(3, 3, 14, 0, 2);
// export const ARM64_PMCCNTR_EL0   = ARM64_SYSREG(3, 3, 9, 13, 0);
// export const ARM64_PMSELR_EL0    = ARM64_SYSREG(3, 3, 9, 12, 5);
// export const ARM64_PMXEVCNTR_EL0 = ARM64_SYSREG(3, 3, 9, 13, 2);
// export const ARM64_TPIDR_EL0     = ARM64_SYSREG(3, 3, 13, 0, 2);
// export const ARM64_TPIDRRO_EL0   = ARM64_SYSREG(3, 3, 13, 0, 3);
// export const ARM64_TPIDR_EL1     = ARM64_SYSREG(3, 0, 13, 0, 4);

// export const PF_TEMPORAL_LEVEL_1 = 0;
// export const PF_TEMPORAL_LEVEL_2 = 1;
// export const PF_TEMPORAL_LEVEL_3 = 2;
// export const PF_NON_TEMPORAL_LEVEL_ALL = 3;

// export const MultiplyHigh = __mulh;
// export const UnsignedMultiplyHigh = __umulh;

// export const EXCEPTION_READ_FAULT = 0;	// 值相同，保留一个
// export const EXCEPTION_WRITE_FAULT = 1;
// export const EXCEPTION_EXECUTE_FAULT = 8;

// export const INITIAL_CPSR = 0x10;	// 值相同，保留一个
// export const INITIAL_FPSCR = 0;

export const CONTEXT_ARM64 = 0x00400000;
export const CONTEXT_ARM64_CONTROL = (CONTEXT_ARM64 | 0x1);
export const CONTEXT_ARM64_INTEGER = (CONTEXT_ARM64 | 0x2);
export const CONTEXT_ARM64_FLOATING_POINT = (CONTEXT_ARM64 | 0x4);
export const CONTEXT_ARM64_DEBUG_REGISTERS = (CONTEXT_ARM64 | 0x8);
export const CONTEXT_ARM64_X18 = (CONTEXT_ARM64 | 0x10);
export const CONTEXT_ARM64_FULL = (CONTEXT_ARM64_CONTROL | CONTEXT_ARM64_INTEGER | CONTEXT_ARM64_FLOATING_POINT);
export const CONTEXT_ARM64_ALL = (CONTEXT_ARM64_CONTROL | CONTEXT_ARM64_INTEGER | CONTEXT_ARM64_FLOATING_POINT | CONTEXT_ARM64_DEBUG_REGISTERS | CONTEXT_ARM64_X18);
cpuArch.arm64 = (() => {
	const CONTEXT_CONTROL = CONTEXT_ARM64_CONTROL;
	const CONTEXT_INTEGER = CONTEXT_ARM64_INTEGER;
	const CONTEXT_FLOATING_POINT = CONTEXT_ARM64_FLOATING_POINT;
	const CONTEXT_DEBUG_REGISTERS = CONTEXT_ARM64_DEBUG_REGISTERS;
	const CONTEXT_FULL = CONTEXT_ARM64_FULL;
	const CONTEXT_ALL = CONTEXT_ARM64_ALL;
	const CONTEXT_EXCEPTION_ACTIVE = 0x08000000;
	const CONTEXT_SERVICE_ACTIVE = 0x10000000;
	const CONTEXT_EXCEPTION_REQUEST = 0x40000000;
	const CONTEXT_EXCEPTION_REPORTING = 0x80000000;
	const CONTEXT_UNWOUND_TO_CALL = 0x20000000;
	return {
		CONTEXT_CONTROL,
		CONTEXT_INTEGER,
		CONTEXT_FLOATING_POINT,
		CONTEXT_DEBUG_REGISTERS,
		CONTEXT_FULL,
		CONTEXT_ALL,
		CONTEXT_EXCEPTION_ACTIVE,
		CONTEXT_SERVICE_ACTIVE,
		CONTEXT_EXCEPTION_REQUEST,
		CONTEXT_EXCEPTION_REPORTING,
		CONTEXT_UNWOUND_TO_CALL,
	};
})();
export const CONTEXT_RET_TO_GUEST = 0x04000000;
export const ARM64_MAX_BREAKPOINTS = 8;
export const ARM64_MAX_WATCHPOINTS = 2;
// export const _ARM64_NT_CONTEXT = _CONTEXT;
// export const ARM64_NT_NEON128 = NEON128;

// export const UNW_FLAG_NHANDLER = 0x0;	// 值相同，保留一个
// export const UNW_FLAG_EHANDLER = 0x1;
// export const UNW_FLAG_UHANDLER = 0x2;

// export const UNWIND_HISTORY_TABLE_SIZE = 12;	// 值相同，保留一个
// export const _DISPATCHER_CONTEXT_ARM64 = _DISPATCHER_CONTEXT;
// export const OUT_OF_PROCESS_FUNCTION_TABLE_CALLBACK_EXPORT_NAME =	// 值相同，保留一个
// 	"OutOfProcessFunctionTableCallback";
export const BREAK_DEBUG_BASE = 0x080000;
export const ASSERT_BREAKPOINT = (BREAK_DEBUG_BASE + 3);

// export const BitTest = _bittest;
// export const BitTestAndComplement = _bittestandcomplement;
// export const BitTestAndSet = _bittestandset;
// export const BitTestAndReset = _bittestandreset;
// export const InterlockedBitTestAndSet = _interlockedbittestandset;
// export const InterlockedBitTestAndSetAcquire = _interlockedbittestandset;
// export const InterlockedBitTestAndSetRelease = _interlockedbittestandset;
// export const InterlockedBitTestAndSetNoFence = _interlockedbittestandset;
// export const InterlockedBitTestAndReset = _interlockedbittestandreset;
// export const InterlockedBitTestAndResetAcquire = _interlockedbittestandreset;
// export const InterlockedBitTestAndResetRelease = _interlockedbittestandreset;
// export const InterlockedBitTestAndResetNoFence = _interlockedbittestandreset;
// export const BitScanForward = _BitScanForward;
// export const BitScanReverse = _BitScanReverse;
// export const BitScanForward64 = _InlineBitScanForward64;
// export const BitScanReverse64 = _InlineBitScanReverse64;
// export const InterlockedIncrement16 = _InterlockedIncrement16;
// export const InterlockedIncrementAcquire16 = _InterlockedIncrement16;
// export const InterlockedIncrementRelease16 = _InterlockedIncrement16;
// export const InterlockedIncrementNoFence16 = _InterlockedIncrement16;
// export const InterlockedDecrement16 = _InterlockedDecrement16;
// export const InterlockedDecrementAcquire16 = _InterlockedDecrement16;
// export const InterlockedDecrementRelease16 = _InterlockedDecrement16;
// export const InterlockedDecrementNoFence16 = _InterlockedDecrement16;
// export const InterlockedCompareExchange16 = _InterlockedCompareExchange16;
// export const InterlockedCompareExchangeAcquire16 = _InterlockedCompareExchange16;
// export const InterlockedCompareExchangeRelease16 = _InterlockedCompareExchange16;
// export const InterlockedCompareExchangeNoFence16 = _InterlockedCompareExchange16;
// export const InterlockedCompareExchange64 = _InterlockedCompareExchange64;
// export const InterlockedCompareExchangeAcquire64 = _InterlockedCompareExchange64;
// export const InterlockedCompareExchangeRelease64 = _InterlockedCompareExchange64;
// export const InterlockedCompareExchangeNoFence64 = _InterlockedCompareExchange64;
// export const InterlockedAnd = _InterlockedAnd;
// export const InterlockedAndAcquire = _InterlockedAnd;
// export const InterlockedAndRelease = _InterlockedAnd;
// export const InterlockedAndNoFence = _InterlockedAnd;
// export const InterlockedOr = _InterlockedOr;
// export const InterlockedOrAcquire = _InterlockedOr;
// export const InterlockedOrRelease = _InterlockedOr;
// export const InterlockedOrNoFence = _InterlockedOr;
// export const InterlockedXor = _InterlockedXor;
// export const InterlockedXorAcquire = _InterlockedXor;
// export const InterlockedXorRelease = _InterlockedXor;
// export const InterlockedXorNoFence = _InterlockedXor;
// export const InterlockedIncrement = _InterlockedIncrement;
// export const InterlockedIncrementAcquire = _InterlockedIncrement;
// export const InterlockedIncrementRelease = _InterlockedIncrement;
// export const InterlockedIncrementNoFence = _InterlockedIncrement;
// export const InterlockedDecrement = _InterlockedDecrement;
// export const InterlockedDecrementAcquire = _InterlockedDecrement;
// export const InterlockedDecrementRelease = _InterlockedDecrement;
// export const InterlockedDecrementNoFence = _InterlockedDecrement;
// export const InterlockedAdd = _InlineInterlockedAdd;
// export const InterlockedAddAcquire = _InlineInterlockedAdd;
// export const InterlockedAddRelease = _InlineInterlockedAdd;
// export const InterlockedAddNoFence = _InlineInterlockedAdd;
// export const InterlockedAddNoFence64 = _InlineInterlockedAdd64;
// export const InterlockedExchange = _InterlockedExchange;
// export const InterlockedExchangeAcquire = _InterlockedExchange;
// export const InterlockedExchangeNoFence = _InterlockedExchange;
// export const InterlockedExchangeAdd = _InterlockedExchangeAdd;
// export const InterlockedExchangeAddAcquire = _InterlockedExchangeAdd;
// export const InterlockedExchangeAddRelease = _InterlockedExchangeAdd;
// export const InterlockedExchangeAddNoFence = _InterlockedExchangeAdd;
// export const InterlockedCompareExchange = _InterlockedCompareExchange;
// export const InterlockedCompareExchangeAcquire = _InterlockedCompareExchange;
// export const InterlockedCompareExchangeRelease = _InterlockedCompareExchange;
// export const InterlockedCompareExchangeNoFence = _InterlockedCompareExchange;
// export const InterlockedExchange16 = _InterlockedExchange16;
// export const InterlockedExchangePointer = _InlineInterlockedExchangePointer;
// export const InterlockedExchangePointerAcquire = _InlineInterlockedExchangePointer;
// export const InterlockedExchangePointerRelease = _InlineInterlockedExchangePointer;
// export const InterlockedExchangePointerNoFence = _InlineInterlockedExchangePointer;
// export const InterlockedCompareExchangePointer =
// 	_InlineInterlockedCompareExchangePointer;
// export const InterlockedCompareExchangePointerAcquire =
// 	_InlineInterlockedCompareExchangePointer;
// export const InterlockedCompareExchangePointerRelease =
// 	_InlineInterlockedCompareExchangePointer;
// export const InterlockedCompareExchangePointerNoFence =
// 	_InlineInterlockedCompareExchangePointer;
// export const InterlockedExchange8 = _InterlockedExchange8;
// export const InterlockedExchange16 = _InterlockedExchange16;
// export const InterlockedExchangeAdd8 = _InterlockedExchangeAdd8;
// export const InterlockedAnd8 = _InterlockedAnd8;
// export const InterlockedOr8 = _InterlockedOr8;
// export const InterlockedXor8 = _InterlockedXor8;
// export const InterlockedAnd16 = _InterlockedAnd16;
// export const InterlockedOr16 = _InterlockedOr16;
// export const InterlockedXor16 = _InterlockedXor16;
// export const InterlockedCompareExchange16 = _InterlockedCompareExchange16;
// export const InterlockedIncrement16 = _InterlockedIncrement16;
// export const InterlockedDecrement16 = _InterlockedDecrement16;
// export const InterlockedCompareExchange64 = _InterlockedCompareExchange64;
// export const InterlockedAnd64 = _InlineInterlockedAnd64;
// export const InterlockedAnd64Acquire = _InlineInterlockedAnd64;
// export const InterlockedAnd64Release = _InlineInterlockedAnd64;
// export const InterlockedAnd64NoFence = _InlineInterlockedAnd64;
// export const InterlockedAdd64 = _InlineInterlockedAdd64;
// export const InterlockedAddAcquire64 = _InlineInterlockedAdd64;
// export const InterlockedAddRelease64 = _InlineInterlockedAdd64;
// export const InterlockedAddNoFence64 = _InlineInterlockedAdd64;
// export const InterlockedXor = _InterlockedXor;
// export const InterlockedOr64 = _InlineInterlockedOr64;
// export const InterlockedXor64 = _InlineInterlockedXor64;
// export const InterlockedIncrement64 = _InlineInterlockedIncrement64;
// export const InterlockedIncrementAcquire64 = InterlockedIncrement64;
// export const InterlockedIncrementRelease64 = InterlockedIncrement64;
// export const InterlockedIncrementNoFence64 = InterlockedIncrement64;
// export const InterlockedDecrement64 = _InlineInterlockedDecrement64;
// export const InterlockedDecrementAcquire64 = InterlockedDecrement64;
// export const InterlockedDecrementRelease64 = InterlockedDecrement64;
// export const InterlockedDecrementNoFence64 = InterlockedDecrement64;
// export const InterlockedExchange64 = _InlineInterlockedExchange64;
// export const InterlockedExchangeAcquire64 = InterlockedExchange64;
// export const InterlockedExchangeNoFence64 = _InlineInterlockedExchange64;
// export const InterlockedExchangeAdd64 = _InlineInterlockedExchangeAdd64;
// export const InterlockedExchangeAddNoFence64 = _InlineInterlockedExchangeAdd64;
// export const CpuIdEx = __cpuidex;
// export const YieldProcessor = _mm_pause;

// export const _MM_HINT_T0 = 1;
// export const _MM_HINT_T1 = 2;
// export const _MM_HINT_T2 = 3;
// export const _MM_HINT_NTA = 0;
// export const PF_TEMPORAL_LEVEL_1 = _MM_HINT_T0;
// export const PF_TEMPORAL_LEVEL_2 = _MM_HINT_T1;
// export const PF_TEMPORAL_LEVEL_3 = _MM_HINT_T2;

// export const ReadPMC = __readpmc;

// export const EXCEPTION_READ_FAULT = 0;	// 值相同，保留一个
// export const EXCEPTION_WRITE_FAULT = 1;
// export const EXCEPTION_EXECUTE_FAULT = 8;

export const SIZE_OF_80387_REGISTERS = 80;
export const CONTEXT_i386 = 0x00010000;
export const CONTEXT_i486 = 0x00010000;
cpuArch.i386 = (() => {
	const CONTEXT_CONTROL             = (CONTEXT_i386 | 0x00000001);
	const CONTEXT_INTEGER             = (CONTEXT_i386 | 0x00000002);
	const CONTEXT_SEGMENTS            = (CONTEXT_i386 | 0x00000004);
	const CONTEXT_FLOATING_POINT      = (CONTEXT_i386 | 0x00000008);
	const CONTEXT_DEBUG_REGISTERS     = (CONTEXT_i386 | 0x00000010);
	const CONTEXT_EXTENDED_REGISTERS  = (CONTEXT_i386 | 0x00000020);
	const CONTEXT_FULL                = (CONTEXT_CONTROL | CONTEXT_INTEGER |
	                                     CONTEXT_SEGMENTS);
	const CONTEXT_ALL                 = (CONTEXT_CONTROL | CONTEXT_INTEGER | CONTEXT_SEGMENTS |
	                                     CONTEXT_FLOATING_POINT | CONTEXT_DEBUG_REGISTERS |
	                                     CONTEXT_EXTENDED_REGISTERS);
	const CONTEXT_XSTATE              = (CONTEXT_i386 | 0x00000040);
	const CONTEXT_EXCEPTION_ACTIVE    = 0x08000000;
	const CONTEXT_SERVICE_ACTIVE      = 0x10000000;
	const CONTEXT_EXCEPTION_REQUEST   = 0x40000000;
	const CONTEXT_EXCEPTION_REPORTING = 0x80000000;
	return  {
		CONTEXT_CONTROL,
		CONTEXT_INTEGER,
		CONTEXT_SEGMENTS,
		CONTEXT_FLOATING_POINT,
		CONTEXT_DEBUG_REGISTERS,
		CONTEXT_EXTENDED_REGISTERS,
		CONTEXT_FULL,
		CONTEXT_ALL,
		CONTEXT_XSTATE,
		CONTEXT_EXCEPTION_ACTIVE,
		CONTEXT_SERVICE_ACTIVE,
		CONTEXT_EXCEPTION_REQUEST,
		CONTEXT_EXCEPTION_REPORTING,
	};
})();

export const MAXIMUM_SUPPORTED_EXTENSION = 512;

// export const ReadSizeTAcquire = ReadULongPtrAcquire;
// export const ReadSizeTNoFence = ReadULongPtrNoFence;
// export const ReadSizeTRaw = ReadULongPtrRaw;
// export const WriteSizeTRelease = WriteULongPtrRelease;
// export const WriteSizeTNoFence = WriteULongPtrNoFence;
// export const WriteSizeTRaw = WriteULongPtrRaw;
// export const ReadLongPtrAcquire = ReadAcquire;
// export const ReadLongPtrNoFence = ReadNoFence;
// export const ReadLongPtrRaw = ReadRaw;
// export const WriteLongPtrRelease = WriteRelease;
// export const WriteLongPtrNoFence = WriteNoFence;
// export const WriteLongPtrRaw = WriteRaw;
// export const ReadULongPtrAcquire = ReadULongAcquire;
// export const ReadULongPtrNoFence = ReadULongNoFence;
// export const ReadULongPtrRaw = ReadULongRaw;
// export const WriteULongPtrRelease = WriteULongRelease;
// export const WriteULongPtrNoFence = WriteULongNoFence;
// export const WriteULongPtrRaw = WriteULongRaw;
// export const ReadLongPtrAcquire = ReadAcquire64;
// export const ReadLongPtrNoFence = ReadNoFence64;
// export const ReadLongPtrRaw = ReadRaw64;
// export const WriteLongPtrRelease = WriteRelease64;
// export const WriteLongPtrNoFence = WriteNoFence64;
// export const WriteLongPtrRaw = WriteRaw64;
// export const ReadULongPtrAcquire = ReadULong64Acquire;
// export const ReadULongPtrNoFence = ReadULong64NoFence;
// export const ReadULongPtrRaw = ReadULong64Raw;
// export const WriteULongPtrRelease = WriteULong64Release;
// export const WriteULongPtrNoFence = WriteULong64NoFence;
// export const WriteULongPtrRaw = WriteULong64Raw;

export const CONTEXT_CONTROL = cpuArch[/*@__PURE__*/cpuArch.current()]?.CONTEXT_CONTROL;
export const CONTEXT_INTEGER = cpuArch[/*@__PURE__*/cpuArch.current()]?.CONTEXT_INTEGER;
export const CONTEXT_SEGMENTS = cpuArch[/*@__PURE__*/cpuArch.current()]?.CONTEXT_SEGMENTS;
export const CONTEXT_FLOATING_POINT = cpuArch[/*@__PURE__*/cpuArch.current()]?.CONTEXT_FLOATING_POINT;
export const CONTEXT_DEBUG_REGISTERS = cpuArch[/*@__PURE__*/cpuArch.current()]?.CONTEXT_DEBUG_REGISTERS;
export const CONTEXT_EXTENDED_REGISTERS = cpuArch[/*@__PURE__*/cpuArch.current()]?.CONTEXT_EXTENDED_REGISTERS;
export const CONTEXT_FULL = cpuArch[/*@__PURE__*/cpuArch.current()]?.CONTEXT_FULL;
export const CONTEXT_ALL = cpuArch[/*@__PURE__*/cpuArch.current()]?.CONTEXT_ALL;
export const CONTEXT_XSTATE = cpuArch[/*@__PURE__*/cpuArch.current()]?.CONTEXT_XSTATE;
export const CONTEXT_EXCEPTION_ACTIVE = cpuArch[/*@__PURE__*/cpuArch.current()]?.CONTEXT_EXCEPTION_ACTIVE;
export const CONTEXT_SERVICE_ACTIVE = cpuArch[/*@__PURE__*/cpuArch.current()]?.CONTEXT_SERVICE_ACTIVE;
export const CONTEXT_EXCEPTION_REQUEST = cpuArch[/*@__PURE__*/cpuArch.current()]?.CONTEXT_EXCEPTION_REQUEST;
export const CONTEXT_EXCEPTION_REPORTING = cpuArch[/*@__PURE__*/cpuArch.current()]?.CONTEXT_EXCEPTION_REPORTING;

export const WOW64_CONTEXT_i386 = 0x00010000; // this assumes that i386 and
export const WOW64_CONTEXT_i486 = 0x00010000; // i486 have identical context records

export const WOW64_CONTEXT_CONTROL            = (WOW64_CONTEXT_i386 | 0x00000001); // SS:SP, CS:IP, FLAGS, BP
export const WOW64_CONTEXT_INTEGER            = (WOW64_CONTEXT_i386 | 0x00000002); // AX, BX, CX, DX, SI, DI
export const WOW64_CONTEXT_SEGMENTS           = (WOW64_CONTEXT_i386 | 0x00000004); // DS, ES, FS, GS
export const WOW64_CONTEXT_FLOATING_POINT     = (WOW64_CONTEXT_i386 | 0x00000008); // 387 state
export const WOW64_CONTEXT_DEBUG_REGISTERS    = (WOW64_CONTEXT_i386 | 0x00000010); // DB 0-3,6,7
export const WOW64_CONTEXT_EXTENDED_REGISTERS = (WOW64_CONTEXT_i386 | 0x00000020); // cpu specific extensions


export const WOW64_CONTEXT_FULL = (WOW64_CONTEXT_CONTROL | WOW64_CONTEXT_INTEGER | WOW64_CONTEXT_SEGMENTS);
export const WOW64_CONTEXT_ALL  = (WOW64_CONTEXT_CONTROL | WOW64_CONTEXT_INTEGER | WOW64_CONTEXT_SEGMENTS |
									WOW64_CONTEXT_FLOATING_POINT | WOW64_CONTEXT_DEBUG_REGISTERS |
									WOW64_CONTEXT_EXTENDED_REGISTERS);

export const WOW64_CONTEXT_XSTATE             = (WOW64_CONTEXT_i386 | 0x00000040);

export const WOW64_CONTEXT_EXCEPTION_ACTIVE    = 0x08000000;
export const WOW64_CONTEXT_SERVICE_ACTIVE      = 0x10000000;
export const WOW64_CONTEXT_EXCEPTION_REQUEST   = 0x40000000;
export const WOW64_CONTEXT_EXCEPTION_REPORTING = 0x80000000;

//
//  Define the size of the 80387 save area, which is in the context frame.
//

export const WOW64_SIZE_OF_80387_REGISTERS = 80;

export const WOW64_MAXIMUM_SUPPORTED_EXTENSION = 512;

export const EXCEPTION_NONCONTINUABLE  = 0x1;  // Noncontinuable exception
export const EXCEPTION_UNWINDING       = 0x2;  // Unwind is in progress
export const EXCEPTION_EXIT_UNWIND     = 0x4;  // Exit unwind is in progress
export const EXCEPTION_STACK_INVALID   = 0x8;  // Stack out of limits or unaligned
export const EXCEPTION_NESTED_CALL     = 0x10; // Nested exception handler call
export const EXCEPTION_TARGET_UNWIND   = 0x20; // Target unwind in progress
export const EXCEPTION_COLLIDED_UNWIND = 0x40; // Collided exception handler call

export const EXCEPTION_UNWIND = (EXCEPTION_UNWINDING | EXCEPTION_EXIT_UNWIND |
                                 EXCEPTION_TARGET_UNWIND | EXCEPTION_COLLIDED_UNWIND);

export const EXCEPTION_MAXIMUM_PARAMETERS = 15; // maximum number of exception parameters

export const PACCESS_TOKEN = PVOID;
export const PSECURITY_DESCRIPTOR = PVOID;
export const PSID = PVOID;
export const PCLAIMS_BLOB = PVOID;

////////////////////////////////////////////////////////////////////////
//                                                                    //
//                             ACCESS MASK                            //
//                                                                    //
////////////////////////////////////////////////////////////////////////

//
//  Define the access mask as a longword sized structure divided up as
//  follows:
//
//       3 3 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1
//       1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0
//      +---------------+---------------+-------------------------------+
//      |G|G|G|G|Res'd|A| StandardRights|         SpecificRights        |
//      |R|W|E|A|     |S|               |                               |
//      +-+-------------+---------------+-------------------------------+
//
//      typedef struct _ACCESS_MASK {
//          WORD   SpecificRights;
//          BYTE  StandardRights;
//          BYTE  AccessSystemAcl : 1;
//          BYTE  Reserved : 3;
//          BYTE  GenericAll : 1;
//          BYTE  GenericExecute : 1;
//          BYTE  GenericWrite : 1;
//          BYTE  GenericRead : 1;
//      } ACCESS_MASK;
//      typedef ACCESS_MASK *PACCESS_MASK;
//
//  but to make life simple for programmer's we'll allow them to specify
//  a desired access mask by simply OR'ing together mulitple single rights
//  and treat an access mask as a DWORD.  For example
//
//      DesiredAccess = DELETE | READ_CONTROL
//
//  So we'll declare ACCESS_MASK as DWORD
//

// begin_wdm
// begin_ntoshvp
export const ACCESS_MASK = DWORD;
export const PACCESS_MASK = pointer(ACCESS_MASK);

// end_ntoshvp
// begin_access
////////////////////////////////////////////////////////////////////////
//                                                                    //
//                             ACCESS TYPES                           //
//                                                                    //
////////////////////////////////////////////////////////////////////////


// begin_wdm
//
//  The following are masks for the predefined standard access types
//

export const DELETE                   = (0x00010000);
export const READ_CONTROL             = (0x00020000);
export const WRITE_DAC                = (0x00040000);
export const WRITE_OWNER              = (0x00080000);
export const SYNCHRONIZE              = (0x00100000);

export const STANDARD_RIGHTS_REQUIRED = (0x000F0000);

export const STANDARD_RIGHTS_READ     = (READ_CONTROL);
export const STANDARD_RIGHTS_WRITE    = (READ_CONTROL);
export const STANDARD_RIGHTS_EXECUTE  = (READ_CONTROL);

export const STANDARD_RIGHTS_ALL      = (0x001F0000);

export const SPECIFIC_RIGHTS_ALL      = (0x0000FFFF);

//
// AccessSystemAcl access type
//

export const ACCESS_SYSTEM_SECURITY   = (0x01000000);

//
// MaximumAllowed access type
//

export const MAXIMUM_ALLOWED          = (0x02000000);

//
//  These are the generic rights.
//

export const GENERIC_READ             = (0x80000000);
export const GENERIC_WRITE            = (0x40000000);
export const GENERIC_EXECUTE          = (0x20000000);
export const GENERIC_ALL              = (0x10000000);


export const SID_IDENTIFIER_AUTHORITY = struct({
	Value : array(BYTE, 6), // BYTE
});
export const PSID_IDENTIFIER_AUTHORITY = pointer(SID_IDENTIFIER_AUTHORITY);

export const SID = struct({
	Revision            : BYTE,                            // BYTE
	SubAuthorityCount   : BYTE,                            // BYTE
	IdentifierAuthority : SID_IDENTIFIER_AUTHORITY,        // SID_IDENTIFIER_AUTHORITY
	SubAuthority        : array(DWORD, ANYSIZE_ARRAY), // DWORD
});
export const PISID = pointer(SID);


export const SID_REVISION                    = (1); // Current revision level
export const SID_MAX_SUB_AUTHORITIES         = (15);
export const SID_RECOMMENDED_SUB_AUTHORITIES = (1); // Will change to around 6

                                                    // in a future release.
export const SECURITY_MAX_SID_SIZE =
	(sizeof(SID) - sizeof(DWORD) + (SID_MAX_SUB_AUTHORITIES * sizeof(DWORD)));

export const SECURITY_MAX_SID_STRING_CHARACTERS =
	(2 + 4 + 15 + (11 * SID_MAX_SUB_AUTHORITIES) + 1);

export const SID_HASH_SIZE = 32;
export const SID_HASH_ENTRY = ULONG_PTR;
export const PSID_HASH_ENTRY = pointer(ULONG_PTR);

/////////////////////////////////////////////////////////////////////////////
//                                                                         //
// Universal well-known SIDs                                               //
//                                                                         //
//     Null SID                     S-1-0-0                                //
//     World                        S-1-1-0                                //
//     Local                        S-1-2-0                                //
//     Creator Owner ID             S-1-3-0                                //
//     Creator Group ID             S-1-3-1                                //
//     Creator Owner Server ID      S-1-3-2                                //
//     Creator Group Server ID      S-1-3-3                                //
//                                                                         //
//     (Non-unique IDs)             S-1-4                                  //
//                                                                         //
/////////////////////////////////////////////////////////////////////////////

export const SECURITY_NULL_SID_AUTHORITY         = [0, 0, 0, 0, 0, 0];	// {0,0,0,0,0,0}
export const SECURITY_WORLD_SID_AUTHORITY        = [0, 0, 0, 0, 0, 1];	// {0,0,0,0,0,1}
export const SECURITY_LOCAL_SID_AUTHORITY        = [0, 0, 0, 0, 0, 2];	// {0,0,0,0,0,2}
export const SECURITY_CREATOR_SID_AUTHORITY      = [0, 0, 0, 0, 0, 3];	// {0,0,0,0,0,3}
export const SECURITY_NON_UNIQUE_AUTHORITY       = [0, 0, 0, 0, 0, 4];	// {0,0,0,0,0,4}
export const SECURITY_RESOURCE_MANAGER_AUTHORITY = [0, 0, 0, 0, 0, 9];	// {0,0,0,0,0,9}

export const SECURITY_NULL_RID                 = (0x00000000);
export const SECURITY_WORLD_RID                = (0x00000000);
export const SECURITY_LOCAL_RID                = (0x00000000);
export const SECURITY_LOCAL_LOGON_RID          = (0x00000001);

export const SECURITY_CREATOR_OWNER_RID        = (0x00000000);
export const SECURITY_CREATOR_GROUP_RID        = (0x00000001);

export const SECURITY_CREATOR_OWNER_SERVER_RID = (0x00000002);
export const SECURITY_CREATOR_GROUP_SERVER_RID = (0x00000003);

export const SECURITY_CREATOR_OWNER_RIGHTS_RID = (0x00000004);

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// NT well-known SIDs                                                        //
//                                                                           //
//     NT Authority            S-1-5                                         //
//     Dialup                  S-1-5-1                                       //
//                                                                           //
//     Network                 S-1-5-2                                       //
//     Batch                   S-1-5-3                                       //
//     Interactive             S-1-5-4                                       //
//     (Logon IDs)             S-1-5-5-X-Y                                   //
//     Service                 S-1-5-6                                       //
//     AnonymousLogon          S-1-5-7       (aka null logon session)        //
//     Proxy                   S-1-5-8                                       //
//     Enterprise DC (EDC)     S-1-5-9       (aka domain controller account) //
//     Self                    S-1-5-10      (self RID)                      //
//     Authenticated User      S-1-5-11      (Authenticated user somewhere)  //
//     Restricted Code         S-1-5-12      (Running restricted code)       //
//     Terminal Server         S-1-5-13      (Running on Terminal Server)    //
//     Remote Logon            S-1-5-14      (Remote Interactive Logon)      //
//     This Organization       S-1-5-15                                      //
//                                                                           //
//     IUser                   S-1-5-17
//     Local System            S-1-5-18                                      //
//     Local Service           S-1-5-19                                      //
//     Network Service         S-1-5-20                                      //
//                                                                           //
//     (NT non-unique IDs)     S-1-5-0x15-... (NT Domain Sids)               //
//                                                                           //
//     (Built-in domain)       S-1-5-0x20                                    //
//                                                                           //
//     (Security Package IDs)  S-1-5-0x40                                    //
//     NTLM Authentication     S-1-5-0x40-10                                 //
//     SChannel Authentication S-1-5-0x40-14                                 //
//     Digest Authentication   S-1-5-0x40-21                                 //
//                                                                           //
//     Other Organization      S-1-5-1000    (>=1000 can not be filtered)    //
//                                                                           //
//                                                                           //
// NOTE: the relative identifier values (RIDs) determine which security      //
//       boundaries the SID is allowed to cross.  Before adding new RIDs,    //
//       a determination needs to be made regarding which range they should  //
//       be added to in order to ensure proper "SID filtering"               //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////


export const SECURITY_NT_AUTHORITY = [0, 0, 0, 0, 0, 5];	// {0,0,0,0,0,5}   // ntifs

export const SECURITY_DIALUP_RID                                 = (0x00000001);
export const SECURITY_NETWORK_RID                                = (0x00000002);
export const SECURITY_BATCH_RID                                  = (0x00000003);
export const SECURITY_INTERACTIVE_RID                            = (0x00000004);
export const SECURITY_LOGON_IDS_RID                              = (0x00000005);
export const SECURITY_LOGON_IDS_RID_COUNT                        = (3);
export const SECURITY_SERVICE_RID                                = (0x00000006);
export const SECURITY_ANONYMOUS_LOGON_RID                        = (0x00000007);
export const SECURITY_PROXY_RID                                  = (0x00000008);
export const SECURITY_ENTERPRISE_CONTROLLERS_RID                 = (0x00000009);
export const SECURITY_SERVER_LOGON_RID                           = SECURITY_ENTERPRISE_CONTROLLERS_RID;
export const SECURITY_PRINCIPAL_SELF_RID                         = (0x0000000A);
export const SECURITY_AUTHENTICATED_USER_RID                     = (0x0000000B);
export const SECURITY_RESTRICTED_CODE_RID                        = (0x0000000C);
export const SECURITY_TERMINAL_SERVER_RID                        = (0x0000000D);
export const SECURITY_REMOTE_LOGON_RID                           = (0x0000000E);
export const SECURITY_THIS_ORGANIZATION_RID                      = (0x0000000F);
export const SECURITY_IUSER_RID                                  = (0x00000011);
export const SECURITY_LOCAL_SYSTEM_RID                           = (0x00000012);
export const SECURITY_LOCAL_SERVICE_RID                          = (0x00000013);
export const SECURITY_NETWORK_SERVICE_RID                        = (0x00000014);

export const SECURITY_NT_NON_UNIQUE                              = (0x00000015);
export const SECURITY_NT_NON_UNIQUE_SUB_AUTH_COUNT               = (3);

export const SECURITY_ENTERPRISE_READONLY_CONTROLLERS_RID        = (0x00000016);
export const SECURITY_BUILTIN_DOMAIN_RID                         = (0x00000020);
export const SECURITY_WRITE_RESTRICTED_CODE_RID                  = (0x00000021);
export const SECURITY_PACKAGE_BASE_RID                           = (0x00000040);
export const SECURITY_PACKAGE_RID_COUNT                          = (2);
export const SECURITY_PACKAGE_NTLM_RID                           = (0x0000000A);
export const SECURITY_PACKAGE_SCHANNEL_RID                       = (0x0000000E);
export const SECURITY_PACKAGE_DIGEST_RID                         = (0x00000015);
export const SECURITY_CRED_TYPE_BASE_RID                         = (0x00000041);
export const SECURITY_CRED_TYPE_RID_COUNT                        = (2);
export const SECURITY_CRED_TYPE_THIS_ORG_CERT_RID                = (0x00000001);
export const SECURITY_MIN_BASE_RID                               = (0x00000050);
export const SECURITY_SERVICE_ID_BASE_RID                        = (0x00000050);
export const SECURITY_SERVICE_ID_RID_COUNT                       = (6);
export const SECURITY_RESERVED_ID_BASE_RID                       = (0x00000051);
export const SECURITY_APPPOOL_ID_BASE_RID                        = (0x00000052);
export const SECURITY_APPPOOL_ID_RID_COUNT                       = (6);
export const SECURITY_VIRTUALSERVER_ID_BASE_RID                  = (0x00000053);
export const SECURITY_VIRTUALSERVER_ID_RID_COUNT                 = (6);
export const SECURITY_USERMODEDRIVERHOST_ID_BASE_RID             = (0x00000054);
export const SECURITY_USERMODEDRIVERHOST_ID_RID_COUNT            = (6);
export const SECURITY_CLOUD_INFRASTRUCTURE_SERVICES_ID_BASE_RID  = (0x00000055);
export const SECURITY_CLOUD_INFRASTRUCTURE_SERVICES_ID_RID_COUNT = (6);
export const SECURITY_WMIHOST_ID_BASE_RID                        = (0x00000056);
export const SECURITY_WMIHOST_ID_RID_COUNT                       = (6);
export const SECURITY_TASK_ID_BASE_RID                           = (0x00000057);
export const SECURITY_NFS_ID_BASE_RID                            = (0x00000058);
export const SECURITY_COM_ID_BASE_RID                            = (0x00000059);
export const SECURITY_WINDOW_MANAGER_BASE_RID                    = (0x0000005A);
export const SECURITY_RDV_GFX_BASE_RID                           = (0x0000005B);
export const SECURITY_DASHOST_ID_BASE_RID                        = (0x0000005C);
export const SECURITY_DASHOST_ID_RID_COUNT                       = (6);
export const SECURITY_USERMANAGER_ID_BASE_RID                    = (0x0000005D);
export const SECURITY_USERMANAGER_ID_RID_COUNT                   = (6);
export const SECURITY_WINRM_ID_BASE_RID                          = (0x0000005E);
export const SECURITY_WINRM_ID_RID_COUNT                         = (6);
export const SECURITY_CCG_ID_BASE_RID                            = (0x0000005F);
export const SECURITY_UMFD_BASE_RID                              = (0x00000060);
export const SECURITY_VIRTUALACCOUNT_ID_RID_COUNT                = (6);

//
// Virtual account logon is not limited to inbox callers.  Reserve base RID 0x6F for application usage.
//

export const SECURITY_MAX_BASE_RID                               = (0x0000006F);
export const SECURITY_MAX_ALWAYS_FILTERED                        = (0x000003E7);
export const SECURITY_MIN_NEVER_FILTERED                         = (0x000003E8);
export const SECURITY_OTHER_ORGANIZATION_RID                     = (0x000003E8);

//
//Service SID type RIDs are in the range 0x50- 0x6F.  Therefore, we are giving  the next available RID to Windows Mobile team.
//
export const SECURITY_WINDOWSMOBILE_ID_BASE_RID                  = (0x00000070);

//
// Installer Capability Group Sid related. Currently Base RID is same as LOCAL DOMAIN.
//
export const SECURITY_INSTALLER_GROUP_CAPABILITY_BASE            = (0x20);
export const SECURITY_INSTALLER_GROUP_CAPABILITY_RID_COUNT       = (9);

// Note: This is because the App Capability Rid is S-1-15-3-1024-...
//       whereas the service group rid is          S-1-5-32-...
//	The number of RIDs from hash (8) are the same for both
export const SECURITY_INSTALLER_CAPABILITY_RID_COUNT             = (10);

//
//Well-known group for local accounts
//
export const SECURITY_LOCAL_ACCOUNT_RID                          = (0x00000071);
export const SECURITY_LOCAL_ACCOUNT_AND_ADMIN_RID                = (0x00000072);

/////////////////////////////////////////////////////////////////////////////
//                                                                         //
// well-known domain relative sub-authority values (RIDs)...               //
//                                                                         //
/////////////////////////////////////////////////////////////////////////////


export const DOMAIN_GROUP_RID_AUTHORIZATION_DATA_IS_COMPOUNDED       = (0x000001F0);
export const DOMAIN_GROUP_RID_AUTHORIZATION_DATA_CONTAINS_CLAIMS    = (0x000001F1);
export const DOMAIN_GROUP_RID_ENTERPRISE_READONLY_DOMAIN_CONTROLLERS = (0x000001F2);

export const FOREST_USER_RID_MAX = (0x000001F3);

// Well-known users ...

export const DOMAIN_USER_RID_ADMIN           = (0x000001F4);
export const DOMAIN_USER_RID_GUEST           = (0x000001F5);
export const DOMAIN_USER_RID_KRBTGT          = (0x000001F6);
export const DOMAIN_USER_RID_DEFAULT_ACCOUNT = (0x000001F7);
export const DOMAIN_USER_RID_WDAG_ACCOUNT    = (0x000001F8);
export const DOMAIN_USER_RID_MAX             = (0x000003E7);


// well-known groups ...

export const DOMAIN_GROUP_RID_ADMINS                = (0x00000200);
export const DOMAIN_GROUP_RID_USERS                 = (0x00000201);
export const DOMAIN_GROUP_RID_GUESTS                = (0x00000202);
export const DOMAIN_GROUP_RID_COMPUTERS             = (0x00000203);
export const DOMAIN_GROUP_RID_CONTROLLERS           = (0x00000204);
export const DOMAIN_GROUP_RID_CERT_ADMINS           = (0x00000205);
export const DOMAIN_GROUP_RID_SCHEMA_ADMINS         = (0x00000206);
export const DOMAIN_GROUP_RID_ENTERPRISE_ADMINS     = (0x00000207);
export const DOMAIN_GROUP_RID_POLICY_ADMINS         = (0x00000208);
export const DOMAIN_GROUP_RID_READONLY_CONTROLLERS  = (0x00000209);
export const DOMAIN_GROUP_RID_CLONEABLE_CONTROLLERS = (0x0000020A);
export const DOMAIN_GROUP_RID_CDC_RESERVED          = (0x0000020C);
export const DOMAIN_GROUP_RID_PROTECTED_USERS       = (0x0000020D);
export const DOMAIN_GROUP_RID_KEY_ADMINS            = (0x0000020E);
export const DOMAIN_GROUP_RID_ENTERPRISE_KEY_ADMINS = (0x0000020F);

// well-known aliases ...

export const DOMAIN_ALIAS_RID_ADMINS                         = (0x00000220);
export const DOMAIN_ALIAS_RID_USERS                          = (0x00000221);
export const DOMAIN_ALIAS_RID_GUESTS                         = (0x00000222);
export const DOMAIN_ALIAS_RID_POWER_USERS                    = (0x00000223);
export const DOMAIN_ALIAS_RID_ACCOUNT_OPS                    = (0x00000224);
export const DOMAIN_ALIAS_RID_SYSTEM_OPS                     = (0x00000225);
export const DOMAIN_ALIAS_RID_PRINT_OPS                      = (0x00000226);
export const DOMAIN_ALIAS_RID_BACKUP_OPS                     = (0x00000227);
export const DOMAIN_ALIAS_RID_REPLICATOR                     = (0x00000228);
export const DOMAIN_ALIAS_RID_RAS_SERVERS                    = (0x00000229);
export const DOMAIN_ALIAS_RID_PREW2KCOMPACCESS               = (0x0000022A);
export const DOMAIN_ALIAS_RID_REMOTE_DESKTOP_USERS           = (0x0000022B);
export const DOMAIN_ALIAS_RID_NETWORK_CONFIGURATION_OPS      = (0x0000022C);
export const DOMAIN_ALIAS_RID_INCOMING_FOREST_TRUST_BUILDERS = (0x0000022D);
export const DOMAIN_ALIAS_RID_MONITORING_USERS               = (0x0000022E);
export const DOMAIN_ALIAS_RID_LOGGING_USERS                  = (0x0000022F);
export const DOMAIN_ALIAS_RID_AUTHORIZATIONACCESS            = (0x00000230);
export const DOMAIN_ALIAS_RID_TS_LICENSE_SERVERS             = (0x00000231);
export const DOMAIN_ALIAS_RID_DCOM_USERS                     = (0x00000232);
export const DOMAIN_ALIAS_RID_IUSERS                         = (0x00000238);
export const DOMAIN_ALIAS_RID_CRYPTO_OPERATORS               = (0x00000239);
export const DOMAIN_ALIAS_RID_CACHEABLE_PRINCIPALS_GROUP     = (0x0000023B);
export const DOMAIN_ALIAS_RID_NON_CACHEABLE_PRINCIPALS_GROUP = (0x0000023C);
export const DOMAIN_ALIAS_RID_EVENT_LOG_READERS_GROUP        = (0x0000023D);
export const DOMAIN_ALIAS_RID_CERTSVC_DCOM_ACCESS_GROUP      = (0x0000023E);
export const DOMAIN_ALIAS_RID_RDS_REMOTE_ACCESS_SERVERS      = (0x0000023F);
export const DOMAIN_ALIAS_RID_RDS_ENDPOINT_SERVERS           = (0x00000240);
export const DOMAIN_ALIAS_RID_RDS_MANAGEMENT_SERVERS         = (0x00000241);
export const DOMAIN_ALIAS_RID_HYPER_V_ADMINS                 = (0x00000242);
export const DOMAIN_ALIAS_RID_ACCESS_CONTROL_ASSISTANCE_OPS  = (0x00000243);
export const DOMAIN_ALIAS_RID_REMOTE_MANAGEMENT_USERS        = (0x00000244);
export const DOMAIN_ALIAS_RID_DEFAULT_ACCOUNT                = (0x00000245);
export const DOMAIN_ALIAS_RID_STORAGE_REPLICA_ADMINS         = (0x00000246);
export const DOMAIN_ALIAS_RID_DEVICE_OWNERS                  = (0x00000247);


//
// Application Package Authority.
//

export const SECURITY_APP_PACKAGE_AUTHORITY         = [0, 0, 0, 0, 0, 15];	// {0,0,0,0,0,15}
export const SECURITY_APP_PACKAGE_BASE_RID          = (0x00000002);
export const SECURITY_BUILTIN_APP_PACKAGE_RID_COUNT = (2);
export const SECURITY_APP_PACKAGE_RID_COUNT         = (8);
export const SECURITY_CAPABILITY_BASE_RID           = (0x00000003);
export const SECURITY_CAPABILITY_APP_RID            = (0x000000400);
export const SECURITY_BUILTIN_CAPABILITY_RID_COUNT  = (2);
export const SECURITY_CAPABILITY_RID_COUNT          = (5);
export const SECURITY_PARENT_PACKAGE_RID_COUNT      = (SECURITY_APP_PACKAGE_RID_COUNT);
export const SECURITY_CHILD_PACKAGE_RID_COUNT       = (12);


//
// Built-in Packages.
//

export const SECURITY_BUILTIN_PACKAGE_ANY_PACKAGE            = (0x00000001);
export const SECURITY_BUILTIN_PACKAGE_ANY_RESTRICTED_PACKAGE = (0x00000002);

//
// Built-in Capabilities.
//

export const SECURITY_CAPABILITY_INTERNET_CLIENT               = (0x00000001);
export const SECURITY_CAPABILITY_INTERNET_CLIENT_SERVER        = (0x00000002);
export const SECURITY_CAPABILITY_PRIVATE_NETWORK_CLIENT_SERVER = (0x00000003);
export const SECURITY_CAPABILITY_PICTURES_LIBRARY              = (0x00000004);
export const SECURITY_CAPABILITY_VIDEOS_LIBRARY                = (0x00000005);
export const SECURITY_CAPABILITY_MUSIC_LIBRARY                 = (0x00000006);
export const SECURITY_CAPABILITY_DOCUMENTS_LIBRARY             = (0x00000007);
export const SECURITY_CAPABILITY_ENTERPRISE_AUTHENTICATION     = (0x00000008);
export const SECURITY_CAPABILITY_SHARED_USER_CERTIFICATES      = (0x00000009);
export const SECURITY_CAPABILITY_REMOVABLE_STORAGE             = (0x0000000A);
export const SECURITY_CAPABILITY_APPOINTMENTS                  = (0x0000000B);
export const SECURITY_CAPABILITY_CONTACTS                      = (0x0000000C);
export const SECURITY_CAPABILITY_INTERNET_EXPLORER             = (0x00001000);


//
// Mandatory Label Authority.
//

export const SECURITY_MANDATORY_LABEL_AUTHORITY = [0, 0, 0, 0, 0, 16];	// {0,0,0,0,0,16}
export const SECURITY_MANDATORY_UNTRUSTED_RID   = (0x00000000);
export const SECURITY_MANDATORY_LOW_RID         = (0x00001000);
export const SECURITY_MANDATORY_MEDIUM_RID      = (0x00002000);
export const SECURITY_MANDATORY_MEDIUM_PLUS_RID = (SECURITY_MANDATORY_MEDIUM_RID + 0x100);
export const SECURITY_MANDATORY_HIGH_RID        = (0x00003000);
export const SECURITY_MANDATORY_SYSTEM_RID      = (0x00004000);


//
// SECURITY_MANDATORY_MAXIMUM_USER_RID is the highest RID that
// can be set by a usermode caller.
//

export const SECURITY_MANDATORY_PROTECTED_PROCESS_RID = (0x00005000);

export const SECURITY_MANDATORY_MAXIMUM_USER_RID = SECURITY_MANDATORY_SYSTEM_RID;

export const SECURITY_SCOPED_POLICY_ID_AUTHORITY = [0, 0, 0, 0, 0, 17];	// {0,0,0,0,0,17}

//
// Authentication Authority
//

export const SECURITY_AUTHENTICATION_AUTHORITY                    = [0, 0, 0, 0, 0, 18];	// {0,0,0,0,0,18}
export const SECURITY_AUTHENTICATION_AUTHORITY_RID_COUNT          = (1);
export const SECURITY_AUTHENTICATION_AUTHORITY_ASSERTED_RID       = (0x00000001);
export const SECURITY_AUTHENTICATION_SERVICE_ASSERTED_RID         = (0x00000002);
export const SECURITY_AUTHENTICATION_FRESH_KEY_AUTH_RID           = (0x00000003);
export const SECURITY_AUTHENTICATION_KEY_TRUST_RID                = (0x00000004);
export const SECURITY_AUTHENTICATION_KEY_PROPERTY_MFA_RID         = (0x00000005);
export const SECURITY_AUTHENTICATION_KEY_PROPERTY_ATTESTATION_RID = (0x00000006);

//
// Process Trust Authority
//

export const SECURITY_PROCESS_TRUST_AUTHORITY                   = [0, 0, 0, 0, 0, 19];	// {0,0,0,0,0,19}
export const SECURITY_PROCESS_TRUST_AUTHORITY_RID_COUNT         = (2);
export const SECURITY_PROCESS_PROTECTION_TYPE_FULL_RID          = (0x00000400);
export const SECURITY_PROCESS_PROTECTION_TYPE_LITE_RID          = (0x00000200);
export const SECURITY_PROCESS_PROTECTION_TYPE_NONE_RID          = (0x00000000);
export const SECURITY_PROCESS_PROTECTION_LEVEL_WINTCB_RID       = (0x00002000);
export const SECURITY_PROCESS_PROTECTION_LEVEL_WINDOWS_RID      = (0x00001000);
export const SECURITY_PROCESS_PROTECTION_LEVEL_APP_RID          = (0x00000800);
export const SECURITY_PROCESS_PROTECTION_LEVEL_ANTIMALWARE_RID  = (0x00000600);
export const SECURITY_PROCESS_PROTECTION_LEVEL_AUTHENTICODE_RID = (0x00000400);
export const SECURITY_PROCESS_PROTECTION_LEVEL_NONE_RID         = (0x00000000);

//
// Trusted Installer RIDs
//

export const SECURITY_TRUSTED_INSTALLER_RID1 = 956008885;
export const SECURITY_TRUSTED_INSTALLER_RID2 = 3418522649;
export const SECURITY_TRUSTED_INSTALLER_RID3 = 1831038044;
export const SECURITY_TRUSTED_INSTALLER_RID4 = 1853292631;
export const SECURITY_TRUSTED_INSTALLER_RID5 = 2271478464;


//
// Allocate the System Luid.  The first 1000 LUIDs are reserved.
// Use #999 here (0x3e7 = 999)
//

export const SYSTEM_LUID              = [0x3e7, 0x0];	// { 0x3e7, 0x0 }
export const ANONYMOUS_LOGON_LUID     = [0x3e6, 0x0];	// { 0x3e6, 0x0 }
export const LOCALSERVICE_LUID        = [0x3e5, 0x0];	// { 0x3e5, 0x0 }
export const NETWORKSERVICE_LUID      = [0x3e4, 0x0];	// { 0x3e4, 0x0 }
export const IUSER_LUID               = [0x3e3, 0x0];	// { 0x3e3, 0x0 }
export const PROTECTED_TO_SYSTEM_LUID = [0x3e2, 0x0];	// { 0x3e2, 0x0 }

// end_ntifs

////////////////////////////////////////////////////////////////////////
//                                                                    //
//                          User and Group related SID attributes     //
//                                                                    //
////////////////////////////////////////////////////////////////////////

//
// Group attributes
//

export const SE_GROUP_MANDATORY          = (0x00000001);
export const SE_GROUP_ENABLED_BY_DEFAULT = (0x00000002);
export const SE_GROUP_ENABLED            = (0x00000004);
export const SE_GROUP_OWNER              = (0x00000008);
export const SE_GROUP_USE_FOR_DENY_ONLY  = (0x00000010);
export const SE_GROUP_INTEGRITY          = (0x00000020);
export const SE_GROUP_INTEGRITY_ENABLED  = (0x00000040);
export const SE_GROUP_LOGON_ID           = (0xC0000000);
export const SE_GROUP_RESOURCE           = (0x20000000);

export const SE_GROUP_VALID_ATTRIBUTES = (SE_GROUP_MANDATORY          |
                                          SE_GROUP_ENABLED_BY_DEFAULT |
                                          SE_GROUP_ENABLED            |
                                          SE_GROUP_OWNER              |
                                          SE_GROUP_USE_FOR_DENY_ONLY  |
                                          SE_GROUP_LOGON_ID           |
                                          SE_GROUP_RESOURCE           |
                                          SE_GROUP_INTEGRITY          |
                                          SE_GROUP_INTEGRITY_ENABLED);
//
// User attributes
//

// (None yet defined.)


////////////////////////////////////////////////////////////////////////
//                                                                    //
//                         ACL  and  ACE                              //
//                                                                    //
////////////////////////////////////////////////////////////////////////

//
//  Define an ACL and the ACE format.  The structure of an ACL header
//  followed by one or more ACEs.  Pictorally the structure of an ACL header
//  is as follows:
//
//       3 3 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1
//       1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0
//      +-------------------------------+---------------+---------------+
//      |            AclSize            |      Sbz1     |  AclRevision  |
//      +-------------------------------+---------------+---------------+
//      |              Sbz2             |           AceCount            |
//      +-------------------------------+-------------------------------+
//
//  The current AclRevision is defined to be ACL_REVISION.
//
//  AclSize is the size, in bytes, allocated for the ACL.  This includes
//  the ACL header, ACES, and remaining free space in the buffer.
//
//  AceCount is the number of ACES in the ACL.
//

// begin_wdm
// This is the *current* ACL revision

export const ACL_REVISION    = (2);
export const ACL_REVISION_DS = (4);

// This is the history of ACL revisions.  Add a new one whenever
// ACL_REVISION is updated

export const ACL_REVISION1 = (1);
export const ACL_REVISION2 = (2);
export const ACL_REVISION3 = (3);
export const ACL_REVISION4 = (4);
export const MIN_ACL_REVISION = ACL_REVISION2;
export const MAX_ACL_REVISION = ACL_REVISION4;


// end_wdm
// begin_ntifs

//
//  The structure of an ACE is a common ace header followed by ace type
//  specific data.  Pictorally the structure of the common ace header is
//  as follows:
//
//       3 3 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1
//       1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0
//      +---------------+-------+-------+---------------+---------------+
//      |            AceSize            |    AceFlags   |     AceType   |
//      +---------------+-------+-------+---------------+---------------+
//
//  AceType denotes the type of the ace, there are some predefined ace
//  types
//
//  AceSize is the size, in bytes, of ace.
//
//  AceFlags are the Ace flags for audit and inheritance, defined shortly.


//
//  The following are the predefined ace types that go into the AceType
//  field of an Ace header.
//

export const ACCESS_MIN_MS_ACE_TYPE                  = (0x0);
export const ACCESS_ALLOWED_ACE_TYPE                 = (0x0);
export const ACCESS_DENIED_ACE_TYPE                  = (0x1);
export const SYSTEM_AUDIT_ACE_TYPE                   = (0x2);
export const SYSTEM_ALARM_ACE_TYPE                   = (0x3);
export const ACCESS_MAX_MS_V2_ACE_TYPE               = (0x3);
export const ACCESS_ALLOWED_COMPOUND_ACE_TYPE        = (0x4);
export const ACCESS_MAX_MS_V3_ACE_TYPE               = (0x4);
export const ACCESS_MIN_MS_OBJECT_ACE_TYPE           = (0x5);
export const ACCESS_ALLOWED_OBJECT_ACE_TYPE          = (0x5);
export const ACCESS_DENIED_OBJECT_ACE_TYPE           = (0x6);
export const SYSTEM_AUDIT_OBJECT_ACE_TYPE            = (0x7);
export const SYSTEM_ALARM_OBJECT_ACE_TYPE            = (0x8);
export const ACCESS_MAX_MS_OBJECT_ACE_TYPE           = (0x8);
export const ACCESS_MAX_MS_V4_ACE_TYPE               = (0x8);
export const ACCESS_MAX_MS_ACE_TYPE                  = (0x8);
export const ACCESS_ALLOWED_CALLBACK_ACE_TYPE        = (0x9);
export const ACCESS_DENIED_CALLBACK_ACE_TYPE         = (0xA);
export const ACCESS_ALLOWED_CALLBACK_OBJECT_ACE_TYPE = (0xB);
export const ACCESS_DENIED_CALLBACK_OBJECT_ACE_TYPE  = (0xC);
export const SYSTEM_AUDIT_CALLBACK_ACE_TYPE          = (0xD);
export const SYSTEM_ALARM_CALLBACK_ACE_TYPE          = (0xE);
export const SYSTEM_AUDIT_CALLBACK_OBJECT_ACE_TYPE   = (0xF);
export const SYSTEM_ALARM_CALLBACK_OBJECT_ACE_TYPE   = (0x10);
export const SYSTEM_MANDATORY_LABEL_ACE_TYPE         = (0x11);
export const SYSTEM_RESOURCE_ATTRIBUTE_ACE_TYPE      = (0x12);
export const SYSTEM_SCOPED_POLICY_ID_ACE_TYPE        = (0x13);
export const SYSTEM_PROCESS_TRUST_LABEL_ACE_TYPE     = (0x14);
export const SYSTEM_ACCESS_FILTER_ACE_TYPE           = (0x15);
export const ACCESS_MAX_MS_V5_ACE_TYPE               = (0x15);


//
//  The following are the inherit flags that go into the AceFlags field
//  of an Ace header.
//

export const OBJECT_INHERIT_ACE       = (0x1);
export const CONTAINER_INHERIT_ACE    = (0x2);
export const NO_PROPAGATE_INHERIT_ACE = (0x4);
export const INHERIT_ONLY_ACE         = (0x8);
export const INHERITED_ACE            = (0x10);
export const VALID_INHERIT_FLAGS      = (0x1F);


//  The following are the currently defined ACE flags that go into the
//  AceFlags field of an ACE header.  Each ACE type has its own set of
//  AceFlags.
//
//

//
// ACCESS_ALLOWED_ACE_TYPE
//
// These control whether the ACE is critical and cannot be removed.
//
// CRITICAL_ACE_FLAG - used only with access allowed ACE types to
// indicate that the ACE is critical and cannot be removed.
//

export const CRITICAL_ACE_FLAG = (0x20);

//
//  SYSTEM_AUDIT and SYSTEM_ALARM AceFlags
//
//  These control the signaling of audit and alarms for success or failure.
//
//  SUCCESSFUL_ACCESS_ACE_FLAG - used only with system audit and alarm ACE
//  types to indicate that a message is generated for successful accesses.
//
//  FAILED_ACCESS_ACE_FLAG - used only with system audit and alarm ACE types
//  to indicate that a message is generated for failed accesses.
//

export const SUCCESSFUL_ACCESS_ACE_FLAG = (0x40);
export const FAILED_ACCESS_ACE_FLAG     = (0x80);

//
//  SYSTEM_ACCESS_FILTER_ACE AceFlags
//
//  These control the behaviour of SYSTEM_ACCESS_FILTER_ACE .
//
//  TRUST_PROTECTED_FILTER_ACE_FLAG - used only with SYSTEM_FILTERING_ACE_TYPE
//  ACEs to indicate that this ACE may not be deleted/modified except when the,
//  the current Trust Level dominates the one specified in the Ace SID.
//  If this flag is set then the SID in the ACE should be a valid TrustLevelSid.
//

export const TRUST_PROTECTED_FILTER_ACE_FLAG = (0x40);


//
//  We'll define the structure of the predefined ACE types.  Pictorally
//  the structure of the predefined ACE's is as follows:
//
//       3 3 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1
//       1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0
//      +---------------+-------+-------+---------------+---------------+
//      |    AceFlags   | Resd  |Inherit|    AceSize    |     AceType   |
//      +---------------+-------+-------+---------------+---------------+
//      |                              Mask                             |
//      +---------------------------------------------------------------+
//      |                                                               |
//      +                                                               +
//      |                                                               |
//      +                              Sid                              +
//      |                                                               |
//      +                                                               +
//      |                                                               |
//      +---------------------------------------------------------------+
//
//  Mask is the access mask associated with the ACE.  This is either the
//  access allowed, access denied, audit, or alarm mask.
//
//  Sid is the Sid associated with the ACE.
//

//  The following are the four predefined ACE types.

//  Examine the AceType field in the Header to determine
//  which structure is appropriate to use for casting.


export const SYSTEM_MANDATORY_LABEL_NO_WRITE_UP   = 0x1;
export const SYSTEM_MANDATORY_LABEL_NO_READ_UP    = 0x2;
export const SYSTEM_MANDATORY_LABEL_NO_EXECUTE_UP = 0x4;
export const SYSTEM_MANDATORY_LABEL_VALID_MASK = (SYSTEM_MANDATORY_LABEL_NO_WRITE_UP |
	SYSTEM_MANDATORY_LABEL_NO_READ_UP |
	SYSTEM_MANDATORY_LABEL_NO_EXECUTE_UP);

// Placeholder value that allows all ranges
export const SYSTEM_PROCESS_TRUST_LABEL_VALID_MASK  = 0x00ffffff;
export const SYSTEM_PROCESS_TRUST_NOCONSTRAINT_MASK = 0xffffffff;
export const SYSTEM_ACCESS_FILTER_VALID_MASK        = 0x00ffffff;
export const SYSTEM_ACCESS_FILTER_NOCONSTRAINT_MASK = 0xffffffff;
// end_ntifs


//
// Currently define Flags for "OBJECT" ACE types.
//

export const ACE_OBJECT_TYPE_PRESENT           = 0x1;
export const ACE_INHERITED_OBJECT_TYPE_PRESENT = 0x2;


//
//  The following declarations are used for setting and querying information
//  about and ACL.  First are the various information classes available to
//  the user.
//


////////////////////////////////////////////////////////////////////////
//                                                                    //
//                             SECURITY_DESCRIPTOR                    //
//                                                                    //
////////////////////////////////////////////////////////////////////////
//
//  Define the Security Descriptor and related data types.
//  This is an opaque data structure.
//

// begin_wdm
//
// Current security descriptor revision value
//

export const SECURITY_DESCRIPTOR_REVISION  = (1);
export const SECURITY_DESCRIPTOR_REVISION1 = (1);

// end_wdm
// begin_ntifs

export const SECURITY_DESCRIPTOR_CONTROL = WORD;
export const PSECURITY_DESCRIPTOR_CONTROL = pointer(WORD);


// export const SECURITY_DESCRIPTOR_MIN_LENGTH = (sizeof(SECURITY_DESCRIPTOR));
export const SE_OWNER_DEFAULTED       = (0x0001);
export const SE_GROUP_DEFAULTED       = (0x0002);
export const SE_DACL_PRESENT          = (0x0004);
export const SE_DACL_DEFAULTED        = (0x0008);
export const SE_SACL_PRESENT          = (0x0010);
export const SE_SACL_DEFAULTED        = (0x0020);
export const SE_DACL_AUTO_INHERIT_REQ = (0x0100);
export const SE_SACL_AUTO_INHERIT_REQ = (0x0200);
export const SE_DACL_AUTO_INHERITED   = (0x0400);
export const SE_SACL_AUTO_INHERITED   = (0x0800);
export const SE_DACL_PROTECTED        = (0x1000);
export const SE_SACL_PROTECTED        = (0x2000);
export const SE_RM_CONTROL_VALID      = (0x4000);
export const SE_SELF_RELATIVE         = (0x8000);

//
//  Where:
//
//      SE_OWNER_DEFAULTED - This boolean flag, when set, indicates that the
//          SID pointed to by the Owner field was provided by a
//          defaulting mechanism rather than explicitly provided by the
//          original provider of the security descriptor.  This may
//          affect the treatment of the SID with respect to inheritence
//          of an owner.
//
//      SE_GROUP_DEFAULTED - This boolean flag, when set, indicates that the
//          SID in the Group field was provided by a defaulting mechanism
//          rather than explicitly provided by the original provider of
//          the security descriptor.  This may affect the treatment of
//          the SID with respect to inheritence of a primary group.
//
//      SE_DACL_PRESENT - This boolean flag, when set, indicates that the
//          security descriptor contains a discretionary ACL.  If this
//          flag is set and the Dacl field of the SECURITY_DESCRIPTOR is
//          null, then a null ACL is explicitly being specified.
//
//      SE_DACL_DEFAULTED - This boolean flag, when set, indicates that the
//          ACL pointed to by the Dacl field was provided by a defaulting
//          mechanism rather than explicitly provided by the original
//          provider of the security descriptor.  This may affect the
//          treatment of the ACL with respect to inheritence of an ACL.
//          This flag is ignored if the DaclPresent flag is not set.
//
//      SE_SACL_PRESENT - This boolean flag, when set,  indicates that the
//          security descriptor contains a system ACL pointed to by the
//          Sacl field.  If this flag is set and the Sacl field of the
//          SECURITY_DESCRIPTOR is null, then an empty (but present)
//          ACL is being specified.
//
//      SE_SACL_DEFAULTED - This boolean flag, when set, indicates that the
//          ACL pointed to by the Sacl field was provided by a defaulting
//          mechanism rather than explicitly provided by the original
//          provider of the security descriptor.  This may affect the
//          treatment of the ACL with respect to inheritence of an ACL.
//          This flag is ignored if the SaclPresent flag is not set.
//
//      SE_SELF_RELATIVE - This boolean flag, when set, indicates that the
//          security descriptor is in self-relative form.  In this form,
//          all fields of the security descriptor are contiguous in memory
//          and all pointer fields are expressed as offsets from the
//          beginning of the security descriptor.  This form is useful
//          for treating security descriptors as opaque data structures
//          for transmission in communication protocol or for storage on
//          secondary media.
//
//
//
// Pictorially the structure of a security descriptor is as follows:
//
//       3 3 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1
//       1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0
//      +---------------------------------------------------------------+
//      |            Control            |Reserved1 (SBZ)|   Revision    |
//      +---------------------------------------------------------------+
//      |                            Owner                              |
//      +---------------------------------------------------------------+
//      |                            Group                              |
//      +---------------------------------------------------------------+
//      |                            Sacl                               |
//      +---------------------------------------------------------------+
//      |                            Dacl                               |
//      +---------------------------------------------------------------+
//
// In general, this data structure should be treated opaquely to ensure future
// compatibility.
//
//


//
// DS values for Level
//

export const ACCESS_OBJECT_GUID       = 0;
export const ACCESS_PROPERTY_SET_GUID = 1;
export const ACCESS_PROPERTY_GUID     = 2;

export const ACCESS_MAX_LEVEL         = 4;

//
// Parameters to NtAccessCheckByTypeAndAditAlarm
//

export const AUDIT_ALLOW_NO_PRIVILEGE = 0x1;

//
// DS values for Source and ObjectTypeName
//

export const ACCESS_DS_SOURCE_A = "DS";
export const ACCESS_DS_SOURCE_W = L("DS");
export const ACCESS_DS_OBJECT_TYPE_NAME_A = "Directory Service Object";
export const ACCESS_DS_OBJECT_TYPE_NAME_W = L("Directory Service Object");

////////////////////////////////////////////////////////////////////////
//                                                                    //
//               Privilege Related Data Structures                    //
//                                                                    //
////////////////////////////////////////////////////////////////////////

// end_ntifs
// begin_wdm
//
// Privilege attributes
//

export const SE_PRIVILEGE_ENABLED_BY_DEFAULT = (0x00000001);
export const SE_PRIVILEGE_ENABLED            = (0x00000002);
export const SE_PRIVILEGE_REMOVED            = (0X00000004);
export const SE_PRIVILEGE_USED_FOR_ACCESS    = (0x80000000);

export const SE_PRIVILEGE_VALID_ATTRIBUTES = (SE_PRIVILEGE_ENABLED_BY_DEFAULT |
	SE_PRIVILEGE_ENABLED |
	SE_PRIVILEGE_REMOVED |
	SE_PRIVILEGE_USED_FOR_ACCESS);

//
// Privilege Set Control flags
//

export const PRIVILEGE_SET_ALL_NECESSARY = (1);

//
//  Privilege Set - This is defined for a privilege set of one.
//                  If more than one privilege is needed, then this structure
//                  will need to be allocated with more space.
//
//  Note: don't change this structure without fixing the INITIAL_PRIVILEGE_SET
//  structure (defined in se.h)
//


//
// Values for different access granted\denied reasons:
// AccessReasonAceN = AccessReasonAce + N.
// AccessReasonPrivilegeN = AccessReasonPrivilege + N.
//

export const ACCESS_REASON_TYPE_MASK = 0x00ff0000;
export const ACCESS_REASON_DATA_MASK = 0x0000ffff;
export const ACCESS_REASON_STAGING_MASK = 0x80000000;
export const ACCESS_REASON_EXDATA_MASK  = 0x7f000000;

export const ACCESS_REASON = DWORD;

//
// Structure to hold pointer to security descriptor and its unique id, which
// can be used for caching access check results.
// (NOTE NOTE) The cache key can be constructed by SecurityDescriptorId, Token and
// PrincipalSelfSid. Watch how GenericMapping affects the cache results.
//
export const SE_SECURITY_DESCRIPTOR_FLAG_NO_OWNER_ACE         = 0x00000001;
export const SE_SECURITY_DESCRIPTOR_FLAG_NO_LABEL_ACE         = 0x00000002;
export const SE_SECURITY_DESCRIPTOR_FLAG_NO_ACCESS_FILTER_ACE = 0x00000004;
export const SE_SECURITY_DESCRIPTOR_VALID_FLAGS               = 0x00000007;

export const SE_ACCESS_CHECK_FLAG_NO_LEARNING_MODE_LOGGING    = 0x00000008;
export const SE_ACCESS_CHECK_VALID_FLAGS                      = 0x00000008;


////////////////////////////////////////////////////////////////////////
//                                                                    //
//               NT Defined Privileges                                //
//                                                                    //
////////////////////////////////////////////////////////////////////////

export const SE_CREATE_TOKEN_NAME                      = TEXT("SeCreateTokenPrivilege");
export const SE_ASSIGNPRIMARYTOKEN_NAME                = TEXT("SeAssignPrimaryTokenPrivilege");
export const SE_LOCK_MEMORY_NAME                       = TEXT("SeLockMemoryPrivilege");
export const SE_INCREASE_QUOTA_NAME                    = TEXT("SeIncreaseQuotaPrivilege");
export const SE_UNSOLICITED_INPUT_NAME                 = TEXT("SeUnsolicitedInputPrivilege");
export const SE_MACHINE_ACCOUNT_NAME                   = TEXT("SeMachineAccountPrivilege");
export const SE_TCB_NAME                               = TEXT("SeTcbPrivilege");
export const SE_SECURITY_NAME                          = TEXT("SeSecurityPrivilege");
export const SE_TAKE_OWNERSHIP_NAME                    = TEXT("SeTakeOwnershipPrivilege");
export const SE_LOAD_DRIVER_NAME                       = TEXT("SeLoadDriverPrivilege");
export const SE_SYSTEM_PROFILE_NAME                    = TEXT("SeSystemProfilePrivilege");
export const SE_SYSTEMTIME_NAME                        = TEXT("SeSystemtimePrivilege");
export const SE_PROF_SINGLE_PROCESS_NAME               = TEXT("SeProfileSingleProcessPrivilege");
export const SE_INC_BASE_PRIORITY_NAME                 = TEXT("SeIncreaseBasePriorityPrivilege");
export const SE_CREATE_PAGEFILE_NAME                   = TEXT("SeCreatePagefilePrivilege");
export const SE_CREATE_PERMANENT_NAME                  = TEXT("SeCreatePermanentPrivilege");
export const SE_BACKUP_NAME                            = TEXT("SeBackupPrivilege");
export const SE_RESTORE_NAME                           = TEXT("SeRestorePrivilege");
export const SE_SHUTDOWN_NAME                          = TEXT("SeShutdownPrivilege");
export const SE_DEBUG_NAME                             = TEXT("SeDebugPrivilege");
export const SE_AUDIT_NAME                             = TEXT("SeAuditPrivilege");
export const SE_SYSTEM_ENVIRONMENT_NAME                = TEXT("SeSystemEnvironmentPrivilege");
export const SE_CHANGE_NOTIFY_NAME                     = TEXT("SeChangeNotifyPrivilege");
export const SE_REMOTE_SHUTDOWN_NAME                   = TEXT("SeRemoteShutdownPrivilege");
export const SE_UNDOCK_NAME                            = TEXT("SeUndockPrivilege");
export const SE_SYNC_AGENT_NAME                        = TEXT("SeSyncAgentPrivilege");
export const SE_ENABLE_DELEGATION_NAME                 = TEXT("SeEnableDelegationPrivilege");
export const SE_MANAGE_VOLUME_NAME                     = TEXT("SeManageVolumePrivilege");
export const SE_IMPERSONATE_NAME                       = TEXT("SeImpersonatePrivilege");
export const SE_CREATE_GLOBAL_NAME                     = TEXT("SeCreateGlobalPrivilege");
export const SE_TRUSTED_CREDMAN_ACCESS_NAME            = TEXT("SeTrustedCredManAccessPrivilege");
export const SE_RELABEL_NAME                           = TEXT("SeRelabelPrivilege");
export const SE_INC_WORKING_SET_NAME                   = TEXT("SeIncreaseWorkingSetPrivilege");
export const SE_TIME_ZONE_NAME                         = TEXT("SeTimeZonePrivilege");
export const SE_CREATE_SYMBOLIC_LINK_NAME              = TEXT("SeCreateSymbolicLinkPrivilege");
export const SE_DELEGATE_SESSION_USER_IMPERSONATE_NAME = TEXT("SeDelegateSessionUserImpersonatePrivilege");

// begin_ntosifs

//
// List Of String Capabilities.
//
export const SE_ACTIVATE_AS_USER_CAPABILITY = L("activateAsUser");
export const SE_CONSTRAINED_IMPERSONATION_CAPABILITY = L("constrainedImpersonation");
export const SE_SESSION_IMPERSONATION_CAPABILITY = L("sessionImpersonation");
export const SE_MUMA_CAPABILITY = L("muma");
export const SE_DEVELOPMENT_MODE_NETWORK_CAPABILITY = L("developmentModeNetwork");

// end_ntosifs


////////////////////////////////////////////////////////////////////
//                                                                //
//           Security Quality Of Service                          //
//                                                                //
//                                                                //
////////////////////////////////////////////////////////////////////

// begin_wdm
//
// Impersonation Level
//
// Impersonation level is represented by a pair of bits in Windows.
// If a new impersonation level is added or lowest value is changed from
// 0 to something else, fix the Windows CreateFile call.
//

export const SECURITY_IMPERSONATION_LEVEL = int;
export const SecurityAnonymous = 0;
export const SecurityIdentification = 1;
export const SecurityImpersonation = 2;
export const SecurityDelegation = 3;

export const SECURITY_MAX_IMPERSONATION_LEVEL = SecurityDelegation;
export const SECURITY_MIN_IMPERSONATION_LEVEL = SecurityAnonymous;
export const DEFAULT_IMPERSONATION_LEVEL = SecurityImpersonation;
export const VALID_IMPERSONATION_LEVEL = (L) => (((L) >= SECURITY_MIN_IMPERSONATION_LEVEL) && ((L) <= SECURITY_MAX_IMPERSONATION_LEVEL));

////////////////////////////////////////////////////////////////////
//                                                                //
//           Token Object Definitions                             //
//                                                                //
//                                                                //
////////////////////////////////////////////////////////////////////

// begin_access

//
// Token Specific Access Rights.
//

export const TOKEN_ASSIGN_PRIMARY    = (0x0001);
export const TOKEN_DUPLICATE         = (0x0002);
export const TOKEN_IMPERSONATE       = (0x0004);
export const TOKEN_QUERY             = (0x0008);
export const TOKEN_QUERY_SOURCE      = (0x0010);
export const TOKEN_ADJUST_PRIVILEGES = (0x0020);
export const TOKEN_ADJUST_GROUPS     = (0x0040);
export const TOKEN_ADJUST_DEFAULT    = (0x0080);
export const TOKEN_ADJUST_SESSIONID  = (0x0100);

export const TOKEN_ALL_ACCESS_P = (STANDARD_RIGHTS_REQUIRED |
	TOKEN_ASSIGN_PRIMARY |
	TOKEN_DUPLICATE |
	TOKEN_IMPERSONATE |
	TOKEN_QUERY |
	TOKEN_QUERY_SOURCE |
	TOKEN_ADJUST_PRIVILEGES |
	TOKEN_ADJUST_GROUPS |
	TOKEN_ADJUST_DEFAULT);
export const TOKEN_ALL_ACCESS = (TOKEN_ALL_ACCESS_P |
	TOKEN_ADJUST_SESSIONID);
export const TOKEN_READ = (STANDARD_RIGHTS_READ |
	TOKEN_QUERY);
export const TOKEN_WRITE = (STANDARD_RIGHTS_WRITE |
	TOKEN_ADJUST_PRIVILEGES |
	TOKEN_ADJUST_GROUPS |
	TOKEN_ADJUST_DEFAULT);
export const TOKEN_EXECUTE = (STANDARD_RIGHTS_EXECUTE);
export const TOKEN_TRUST_CONSTRAINT_MASK = (STANDARD_RIGHTS_READ |
	TOKEN_QUERY |
	TOKEN_QUERY_SOURCE);
export const TOKEN_ACCESS_PSEUDO_HANDLE_WIN8 = (TOKEN_QUERY | TOKEN_QUERY_SOURCE);
export const TOKEN_ACCESS_PSEUDO_HANDLE = TOKEN_ACCESS_PSEUDO_HANDLE_WIN8;

//
// end_access
//
//
// Token Types
//

// export const TOKEN_USER_MAX_SIZE = ((TOKEN_USER).size + SECURITY_MAX_SID_SIZE);
// export const TOKEN_OWNER_MAX_SIZE = ((TOKEN_OWNER).size + SECURITY_MAX_SID_SIZE);
export const TOKEN_MANDATORY_POLICY_OFF             = 0x0;
export const TOKEN_MANDATORY_POLICY_NO_WRITE_UP     = 0x1;
export const TOKEN_MANDATORY_POLICY_NEW_PROCESS_MIN = 0x2;

export const TOKEN_MANDATORY_POLICY_VALID_MASK = (TOKEN_MANDATORY_POLICY_NO_WRITE_UP |
	TOKEN_MANDATORY_POLICY_NEW_PROCESS_MIN);
// export const TOKEN_INTEGRITY_LEVEL_MAX_SIZE = (((((TOKEN_MANDATORY_LABEL).size) + (PVOID).size - 1) & ~((PVOID).size - 1)) + SECURITY_MAX_SID_SIZE);

export const PSECURITY_ATTRIBUTES_OPAQUE = PVOID;

export const POLICY_AUDIT_SUBCATEGORY_COUNT = (59);
export const TOKEN_SOURCE_LENGTH = 8;
// export const TOKEN_APPCONTAINER_SID_MAX_SIZE = ((TOKEN_APPCONTAINER_INFORMATION).size + SECURITY_MAX_SID_SIZE);

//
//  *** Claim Security attributes ***
//
//      These #defines and data structures (almost) exactly mirror
//      the Token_XXX definitions (except for PWSTR/PUNICODE changes)
//      in ntseapi.w as well as AUTHZ_XXX in authz.w.
//      Keep them in sync.
//
//
//  Security attribute data types ...
//

export const CLAIM_SECURITY_ATTRIBUTE_TYPE_INVALID = 0x00;

export const CLAIM_SECURITY_ATTRIBUTE_TYPE_INT64   = 0x01;
export const CLAIM_SECURITY_ATTRIBUTE_TYPE_UINT64  = 0x02;

//
//  Case insensitive attribute value string by default.
//  Unless the flag CLAIM_SECURITY_ATTRIBUTE_VALUE_CASE_SENSITIVE
//  is set indicating otherwise.
//

export const CLAIM_SECURITY_ATTRIBUTE_TYPE_STRING = 0x03;

//
//  Fully-qualified binary name.
//


export const CLAIM_SECURITY_ATTRIBUTE_TYPE_FQBN = 0x04;

export const CLAIM_SECURITY_ATTRIBUTE_TYPE_SID = 0x05;

export const CLAIM_SECURITY_ATTRIBUTE_TYPE_BOOLEAN = 0x06;


export const CLAIM_SECURITY_ATTRIBUTE_TYPE_OCTET_STRING = 0x10;

//
// Attribute Flags
//

//
//  Attribute must not be inherited across process spawns.
//

export const CLAIM_SECURITY_ATTRIBUTE_NON_INHERITABLE = 0x0001;
export const CLAIM_SECURITY_ATTRIBUTE_VALUE_CASE_SENSITIVE = 0x0002;
export const CLAIM_SECURITY_ATTRIBUTE_USE_FOR_DENY_ONLY = 0x0004;
export const CLAIM_SECURITY_ATTRIBUTE_DISABLED_BY_DEFAULT = 0x0008;
export const CLAIM_SECURITY_ATTRIBUTE_DISABLED = 0x0010;
export const CLAIM_SECURITY_ATTRIBUTE_MANDATORY = 0x0020;
export const CLAIM_SECURITY_ATTRIBUTE_VALID_FLAGS = (
	CLAIM_SECURITY_ATTRIBUTE_NON_INHERITABLE |
	CLAIM_SECURITY_ATTRIBUTE_VALUE_CASE_SENSITIVE |
	CLAIM_SECURITY_ATTRIBUTE_USE_FOR_DENY_ONLY |
	CLAIM_SECURITY_ATTRIBUTE_DISABLED_BY_DEFAULT |
	CLAIM_SECURITY_ATTRIBUTE_DISABLED |
	CLAIM_SECURITY_ATTRIBUTE_MANDATORY);
export const CLAIM_SECURITY_ATTRIBUTE_CUSTOM_FLAGS = 0xFFFF0000;
export const CLAIM_SECURITY_ATTRIBUTES_INFORMATION_VERSION_V1 = 1;
export const CLAIM_SECURITY_ATTRIBUTES_INFORMATION_VERSION =
	CLAIM_SECURITY_ATTRIBUTES_INFORMATION_VERSION_V1;

export const SECURITY_DYNAMIC_TRACKING = (TRUE);
export const SECURITY_STATIC_TRACKING = (FALSE);

export const SECURITY_CONTEXT_TRACKING_MODE = BOOLEAN;
export const PSECURITY_CONTEXT_TRACKING_MODE = pointer(BOOLEAN);

export const DISABLE_MAX_PRIVILEGE = 0x1;
export const SANDBOX_INERT         = 0x2;
export const LUA_TOKEN             = 0x4;
export const WRITE_RESTRICTED      = 0x8;

export const SECURITY_INFORMATION = DWORD;
export const PSECURITY_INFORMATION = pointer(DWORD);

export const OWNER_SECURITY_INFORMATION               = (0x00000001);
export const GROUP_SECURITY_INFORMATION               = (0x00000002);
export const DACL_SECURITY_INFORMATION                = (0x00000004);
export const SACL_SECURITY_INFORMATION                = (0x00000008);
export const LABEL_SECURITY_INFORMATION               = (0x00000010);
export const ATTRIBUTE_SECURITY_INFORMATION           = (0x00000020);
export const SCOPE_SECURITY_INFORMATION               = (0x00000040);
export const PROCESS_TRUST_LABEL_SECURITY_INFORMATION = (0x00000080);
export const ACCESS_FILTER_SECURITY_INFORMATION       = (0x00000100);
export const BACKUP_SECURITY_INFORMATION              = (0x00010000);
export const PROTECTED_DACL_SECURITY_INFORMATION      = (0x80000000);
export const PROTECTED_SACL_SECURITY_INFORMATION      = (0x40000000);
export const UNPROTECTED_DACL_SECURITY_INFORMATION    = (0x20000000);
export const UNPROTECTED_SACL_SECURITY_INFORMATION    = (0x10000000);


//
// Base signing levels.
//

export const SE_SIGNING_LEVEL = BYTE;
export const PSE_SIGNING_LEVEL = pointer(BYTE);

export const SE_SIGNING_LEVEL_UNCHECKED       = 0x00000000;
export const SE_SIGNING_LEVEL_UNSIGNED        = 0x00000001;
export const SE_SIGNING_LEVEL_ENTERPRISE      = 0x00000002;
export const SE_SIGNING_LEVEL_CUSTOM_1        = 0x00000003;
export const SE_SIGNING_LEVEL_DEVELOPER       = SE_SIGNING_LEVEL_CUSTOM_1;
export const SE_SIGNING_LEVEL_AUTHENTICODE    = 0x00000004;
export const SE_SIGNING_LEVEL_CUSTOM_2        = 0x00000005;
export const SE_SIGNING_LEVEL_STORE           = 0x00000006;
export const SE_SIGNING_LEVEL_CUSTOM_3        = 0x00000007;
export const SE_SIGNING_LEVEL_ANTIMALWARE     = SE_SIGNING_LEVEL_CUSTOM_3;
export const SE_SIGNING_LEVEL_MICROSOFT       = 0x00000008;
export const SE_SIGNING_LEVEL_CUSTOM_4        = 0x00000009;
export const SE_SIGNING_LEVEL_DYNAMIC_CODEGEN = 0x0000000B;
export const SE_SIGNING_LEVEL_WINDOWS         = 0x0000000C;
export const SE_SIGNING_LEVEL_CUSTOM_7        = 0x0000000D;
export const SE_SIGNING_LEVEL_WINDOWS_TCB     = 0x0000000E;
export const SE_SIGNING_LEVEL_CUSTOM_6        = 0x0000000F;



export const SE_LEARNING_MODE_FLAG_PERMISSIVE = 0x00000001;

export const PROCESS_TERMINATE                 = (0x0001);
export const PROCESS_CREATE_THREAD             = (0x0002);
export const PROCESS_SET_SESSIONID             = (0x0004);
export const PROCESS_VM_OPERATION              = (0x0008);
export const PROCESS_VM_READ                   = (0x0010);
export const PROCESS_VM_WRITE                  = (0x0020);
export const PROCESS_DUP_HANDLE                = (0x0040);
export const PROCESS_CREATE_PROCESS            = (0x0080);
export const PROCESS_SET_QUOTA                 = (0x0100);
export const PROCESS_SET_INFORMATION           = (0x0200);
export const PROCESS_QUERY_INFORMATION         = (0x0400);
export const PROCESS_SUSPEND_RESUME            = (0x0800);
export const PROCESS_QUERY_LIMITED_INFORMATION = (0x1000);
export const PROCESS_SET_LIMITED_INFORMATION   = (0x2000);

//#if (NTDDI_VERSION >= NTDDI_VISTA)
export const PROCESS_ALL_ACCESS = (STANDARD_RIGHTS_REQUIRED | SYNCHRONIZE |
	0xFFFF);
//#else
// export const PROCESS_ALL_ACCESS = (STANDARD_RIGHTS_REQUIRED | SYNCHRONIZE |
//                                    0xFFF);
//#endif
export const THREAD_TERMINATE                 = (0x0001);
export const THREAD_SUSPEND_RESUME            = (0x0002);
export const THREAD_GET_CONTEXT               = (0x0008);
export const THREAD_SET_CONTEXT               = (0x0010);
export const THREAD_QUERY_INFORMATION         = (0x0040);
export const THREAD_SET_INFORMATION           = (0x0020);
export const THREAD_SET_THREAD_TOKEN          = (0x0080);
export const THREAD_IMPERSONATE               = (0x0100);
export const THREAD_DIRECT_IMPERSONATION      = (0x0200);
export const THREAD_SET_LIMITED_INFORMATION   = (0x0400);
export const THREAD_QUERY_LIMITED_INFORMATION = (0x0800);
export const THREAD_RESUME                    = (0x1000);

//#if (NTDDI_VERSION >= NTDDI_VISTA)
export const THREAD_ALL_ACCESS = (STANDARD_RIGHTS_REQUIRED | SYNCHRONIZE |
                                  0xFFFF);
//#else
// export const THREAD_ALL_ACCESS = (STANDARD_RIGHTS_REQUIRED | SYNCHRONIZE |
//                                    0x3FF);
//#endif
export const JOB_OBJECT_ASSIGN_PROCESS          = (0x0001);
export const JOB_OBJECT_SET_ATTRIBUTES          = (0x0002);
export const JOB_OBJECT_QUERY                   = (0x0004);
export const JOB_OBJECT_TERMINATE               = (0x0008);
export const JOB_OBJECT_SET_SECURITY_ATTRIBUTES = (0x0010);
export const JOB_OBJECT_IMPERSONATE             = (0x0020);
export const JOB_OBJECT_ALL_ACCESS              = (STANDARD_RIGHTS_REQUIRED | SYNCHRONIZE |
                                                   0x3F);

export const FLS_MAXIMUM_AVAILABLE = 4080;
export const TLS_MINIMUM_AVAILABLE = 64;

export const THREAD_DYNAMIC_CODE_ALLOW  = 1;     // Opt-out of dynamic code generation.
export const THREAD_BASE_PRIORITY_LOWRT = 15;    // value that gets a thread to LowRealtime-1
export const THREAD_BASE_PRIORITY_MAX   = 2;     // maximum thread base priority boost
export const THREAD_BASE_PRIORITY_MIN   = (-2);  // minimum thread base priority boost
export const THREAD_BASE_PRIORITY_IDLE  = (-15); // value that gets a thread to idle


//
// Page/memory priorities.
//

export const MEMORY_PRIORITY_LOWEST       = 0;
export const MEMORY_PRIORITY_VERY_LOW     = 1;
export const MEMORY_PRIORITY_LOW          = 2;
export const MEMORY_PRIORITY_MEDIUM       = 3;
export const MEMORY_PRIORITY_BELOW_NORMAL = 4;
export const MEMORY_PRIORITY_NORMAL       = 5;

export const DYNAMIC_EH_CONTINUATION_TARGET_ADD       = (0x00000001);
export const DYNAMIC_EH_CONTINUATION_TARGET_PROCESSED = (0x00000002);
export const DYNAMIC_ENFORCED_ADDRESS_RANGE_ADD       = (0x00000001);
export const DYNAMIC_ENFORCED_ADDRESS_RANGE_PROCESSED = (0x00000002);

export const QUOTA_LIMITS_HARDWS_MIN_ENABLE  = 0x00000001;
export const QUOTA_LIMITS_HARDWS_MIN_DISABLE = 0x00000002;
export const QUOTA_LIMITS_HARDWS_MAX_ENABLE  = 0x00000004;
export const QUOTA_LIMITS_HARDWS_MAX_DISABLE = 0x00000008;
export const QUOTA_LIMITS_USE_DEFAULT_LIMITS = 0x00000010;

export const MAX_HW_COUNTERS = 16;
export const THREAD_PROFILING_FLAG_DISPATCH = 0x00000001;

export const JOB_OBJECT_NET_RATE_CONTROL_MAX_DSCP_TAG = 64;
export const JOB_OBJECT_TERMINATE_AT_END_OF_JOB       = 0;
export const JOB_OBJECT_POST_AT_END_OF_JOB            = 1;
export const JOB_OBJECT_MSG_END_OF_JOB_TIME           = 1;
export const JOB_OBJECT_MSG_END_OF_PROCESS_TIME       = 2;
export const JOB_OBJECT_MSG_ACTIVE_PROCESS_LIMIT      = 3;
export const JOB_OBJECT_MSG_ACTIVE_PROCESS_ZERO       = 4;
export const JOB_OBJECT_MSG_NEW_PROCESS               = 6;
export const JOB_OBJECT_MSG_EXIT_PROCESS              = 7;
export const JOB_OBJECT_MSG_ABNORMAL_EXIT_PROCESS     = 8;
export const JOB_OBJECT_MSG_PROCESS_MEMORY_LIMIT      = 9;
export const JOB_OBJECT_MSG_JOB_MEMORY_LIMIT          = 10;
export const JOB_OBJECT_MSG_NOTIFICATION_LIMIT        = 11;
export const JOB_OBJECT_MSG_JOB_CYCLE_TIME_LIMIT      = 12;
export const JOB_OBJECT_MSG_SILO_TERMINATED           = 13;

export const JOB_OBJECT_MSG_MINIMUM = 1;
export const JOB_OBJECT_MSG_MAXIMUM = 13;

export const JOB_OBJECT_VALID_COMPLETION_FILTER =
	(((1 << (JOB_OBJECT_MSG_MAXIMUM + 1)) - 1) -
		((1 << JOB_OBJECT_MSG_MINIMUM) - 1));

export const JOB_OBJECT_LIMIT_WORKINGSET                 = 0x00000001;
export const JOB_OBJECT_LIMIT_PROCESS_TIME               = 0x00000002;
export const JOB_OBJECT_LIMIT_JOB_TIME                   = 0x00000004;
export const JOB_OBJECT_LIMIT_ACTIVE_PROCESS             = 0x00000008;
export const JOB_OBJECT_LIMIT_AFFINITY                   = 0x00000010;
export const JOB_OBJECT_LIMIT_PRIORITY_CLASS             = 0x00000020;
export const JOB_OBJECT_LIMIT_PRESERVE_JOB_TIME          = 0x00000040;
export const JOB_OBJECT_LIMIT_SCHEDULING_CLASS           = 0x00000080;
export const JOB_OBJECT_LIMIT_PROCESS_MEMORY             = 0x00000100;
export const JOB_OBJECT_LIMIT_JOB_MEMORY                 = 0x00000200;
export const JOB_OBJECT_LIMIT_JOB_MEMORY_HIGH            = JOB_OBJECT_LIMIT_JOB_MEMORY;
export const JOB_OBJECT_LIMIT_DIE_ON_UNHANDLED_EXCEPTION = 0x00000400;
export const JOB_OBJECT_LIMIT_BREAKAWAY_OK               = 0x00000800;
export const JOB_OBJECT_LIMIT_SILENT_BREAKAWAY_OK        = 0x00001000;
export const JOB_OBJECT_LIMIT_KILL_ON_JOB_CLOSE          = 0x00002000;
export const JOB_OBJECT_LIMIT_SUBSET_AFFINITY            = 0x00004000;
export const JOB_OBJECT_LIMIT_JOB_MEMORY_LOW             = 0x00008000;
export const JOB_OBJECT_LIMIT_JOB_READ_BYTES             = 0x00010000;
export const JOB_OBJECT_LIMIT_JOB_WRITE_BYTES            = 0x00020000;
export const JOB_OBJECT_LIMIT_RATE_CONTROL               = 0x00040000;
export const JOB_OBJECT_LIMIT_CPU_RATE_CONTROL           = JOB_OBJECT_LIMIT_RATE_CONTROL;
export const JOB_OBJECT_LIMIT_IO_RATE_CONTROL            = 0x00080000;
export const JOB_OBJECT_LIMIT_NET_RATE_CONTROL           = 0x00100000;
export const JOB_OBJECT_LIMIT_VALID_FLAGS                = 0x0007ffff;
export const JOB_OBJECT_BASIC_LIMIT_VALID_FLAGS          = 0x000000ff;
export const JOB_OBJECT_EXTENDED_LIMIT_VALID_FLAGS       = 0x00007fff;

export const JOB_OBJECT_NOTIFICATION_LIMIT_VALID_FLAGS =
	(JOB_OBJECT_LIMIT_JOB_READ_BYTES |
		JOB_OBJECT_LIMIT_JOB_WRITE_BYTES |
		JOB_OBJECT_LIMIT_JOB_TIME |
		JOB_OBJECT_LIMIT_JOB_MEMORY_LOW |
		JOB_OBJECT_LIMIT_JOB_MEMORY_HIGH |
		JOB_OBJECT_LIMIT_CPU_RATE_CONTROL |
		JOB_OBJECT_LIMIT_IO_RATE_CONTROL |
		JOB_OBJECT_LIMIT_NET_RATE_CONTROL);

export const JOB_OBJECT_UILIMIT_NONE                  = 0x00000000;
export const JOB_OBJECT_UILIMIT_HANDLES               = 0x00000001;
export const JOB_OBJECT_UILIMIT_READCLIPBOARD         = 0x00000002;
export const JOB_OBJECT_UILIMIT_WRITECLIPBOARD        = 0x00000004;
export const JOB_OBJECT_UILIMIT_SYSTEMPARAMETERS      = 0x00000008;
export const JOB_OBJECT_UILIMIT_DISPLAYSETTINGS       = 0x00000010;
export const JOB_OBJECT_UILIMIT_GLOBALATOMS           = 0x00000020;
export const JOB_OBJECT_UILIMIT_DESKTOP               = 0x00000040;
export const JOB_OBJECT_UILIMIT_EXITWINDOWS           = 0x00000080;
export const JOB_OBJECT_UILIMIT_ALL                   = 0x000000FF;
export const JOB_OBJECT_UI_VALID_FLAGS                = 0x000000FF;
export const JOB_OBJECT_SECURITY_NO_ADMIN             = 0x00000001;
export const JOB_OBJECT_SECURITY_RESTRICTED_TOKEN     = 0x00000002;
export const JOB_OBJECT_SECURITY_ONLY_TOKEN           = 0x00000004;
export const JOB_OBJECT_SECURITY_FILTER_TOKENS        = 0x00000008;
export const JOB_OBJECT_SECURITY_VALID_FLAGS          = 0x0000000f;
export const JOB_OBJECT_CPU_RATE_CONTROL_ENABLE       = 0x1;
export const JOB_OBJECT_CPU_RATE_CONTROL_WEIGHT_BASED = 0x2;
export const JOB_OBJECT_CPU_RATE_CONTROL_HARD_CAP     = 0x4;
export const JOB_OBJECT_CPU_RATE_CONTROL_NOTIFY       = 0x8;
export const JOB_OBJECT_CPU_RATE_CONTROL_MIN_MAX_RATE = 0x10;
export const JOB_OBJECT_CPU_RATE_CONTROL_VALID_FLAGS  = 0x1f;

export const EVENT_MODIFY_STATE = 0x0002;
export const EVENT_ALL_ACCESS = (STANDARD_RIGHTS_REQUIRED | SYNCHRONIZE | 0x3);

export const MUTANT_QUERY_STATE = 0x0001;
export const MUTANT_ALL_ACCESS = (STANDARD_RIGHTS_REQUIRED | SYNCHRONIZE |
	MUTANT_QUERY_STATE);

export const SEMAPHORE_MODIFY_STATE = 0x0002;
export const SEMAPHORE_ALL_ACCESS = (STANDARD_RIGHTS_REQUIRED | SYNCHRONIZE | 0x3);

export const TIMER_QUERY_STATE  = 0x0001;
export const TIMER_MODIFY_STATE = 0x0002;

export const TIMER_ALL_ACCESS = (STANDARD_RIGHTS_REQUIRED | SYNCHRONIZE |
	TIMER_QUERY_STATE | TIMER_MODIFY_STATE);

export const TIME_ZONE_ID_UNKNOWN  = 0;
export const TIME_ZONE_ID_STANDARD = 1;
export const TIME_ZONE_ID_DAYLIGHT = 2;

export const LTP_PC_SMT = 0x1;

export const CACHE_FULLY_ASSOCIATIVE = 0xFF;

export const SYSTEM_CPU_SET_INFORMATION_PARKED = 0x1;
export const SYSTEM_CPU_SET_INFORMATION_ALLOCATED = 0x2;
export const SYSTEM_CPU_SET_INFORMATION_ALLOCATED_TO_TARGET_PROCESS = 0x4;
export const SYSTEM_CPU_SET_INFORMATION_REALTIME = 0x8;

export const PROCESSOR_INTEL_386     = 386;
export const PROCESSOR_INTEL_486     = 486;
export const PROCESSOR_INTEL_PENTIUM = 586;
export const PROCESSOR_INTEL_IA64    = 2200;
export const PROCESSOR_AMD_X8664     = 8664;
export const PROCESSOR_MIPS_R4000    = 4000;
export const PROCESSOR_ALPHA_21064   = 21064;
export const PROCESSOR_PPC_601       = 601;
export const PROCESSOR_PPC_603       = 603;
export const PROCESSOR_PPC_604       = 604;
export const PROCESSOR_PPC_620       = 620;
export const PROCESSOR_HITACHI_SH3   = 10003;
export const PROCESSOR_HITACHI_SH3E  = 10004;
export const PROCESSOR_HITACHI_SH4   = 10005;
export const PROCESSOR_MOTOROLA_821  = 821;
export const PROCESSOR_SHx_SH3       = 103;
export const PROCESSOR_SHx_SH4       = 104;
export const PROCESSOR_STRONGARM     = 2577;
export const PROCESSOR_ARM720        = 1824;
export const PROCESSOR_ARM820        = 2080;
export const PROCESSOR_ARM920        = 2336;
export const PROCESSOR_ARM_7TDMI     = 70001;
export const PROCESSOR_OPTIL         = 0x494f;

export const PROCESSOR_ARCHITECTURE_INTEL          = 0;
export const PROCESSOR_ARCHITECTURE_MIPS           = 1;
export const PROCESSOR_ARCHITECTURE_ALPHA          = 2;
export const PROCESSOR_ARCHITECTURE_PPC            = 3;
export const PROCESSOR_ARCHITECTURE_SHX            = 4;
export const PROCESSOR_ARCHITECTURE_ARM            = 5;
export const PROCESSOR_ARCHITECTURE_IA64           = 6;
export const PROCESSOR_ARCHITECTURE_ALPHA64        = 7;
export const PROCESSOR_ARCHITECTURE_MSIL           = 8;
export const PROCESSOR_ARCHITECTURE_AMD64          = 9;
export const PROCESSOR_ARCHITECTURE_IA32_ON_WIN64  = 10;
export const PROCESSOR_ARCHITECTURE_NEUTRAL        = 11;
export const PROCESSOR_ARCHITECTURE_ARM64          = 12;
export const PROCESSOR_ARCHITECTURE_ARM32_ON_WIN64 = 13;
export const PROCESSOR_ARCHITECTURE_IA32_ON_ARM64  = 14;

export const PROCESSOR_ARCHITECTURE_UNKNOWN = 0xFFFF;

export const PF_FLOATING_POINT_PRECISION_ERRATA       = 0;
export const PF_FLOATING_POINT_EMULATED               = 1;
export const PF_COMPARE_EXCHANGE_DOUBLE               = 2;
export const PF_MMX_INSTRUCTIONS_AVAILABLE            = 3;
export const PF_PPC_MOVEMEM_64BIT_OK                  = 4;
export const PF_ALPHA_BYTE_INSTRUCTIONS               = 5;
export const PF_XMMI_INSTRUCTIONS_AVAILABLE           = 6;
export const PF_3DNOW_INSTRUCTIONS_AVAILABLE          = 7;
export const PF_RDTSC_INSTRUCTION_AVAILABLE           = 8;
export const PF_PAE_ENABLED                           = 9;
export const PF_XMMI64_INSTRUCTIONS_AVAILABLE         = 10;
export const PF_SSE_DAZ_MODE_AVAILABLE                = 11;
export const PF_NX_ENABLED                            = 12;
export const PF_SSE3_INSTRUCTIONS_AVAILABLE           = 13;
export const PF_COMPARE_EXCHANGE128                   = 14;
export const PF_COMPARE64_EXCHANGE128                 = 15;
export const PF_CHANNELS_ENABLED                      = 16;
export const PF_XSAVE_ENABLED                         = 17;
export const PF_ARM_VFP_32_REGISTERS_AVAILABLE        = 18;
export const PF_ARM_NEON_INSTRUCTIONS_AVAILABLE       = 19;
export const PF_SECOND_LEVEL_ADDRESS_TRANSLATION      = 20;
export const PF_VIRT_FIRMWARE_ENABLED                 = 21;
export const PF_RDWRFSGSBASE_AVAILABLE                = 22;
export const PF_FASTFAIL_AVAILABLE                    = 23;
export const PF_ARM_DIVIDE_INSTRUCTION_AVAILABLE      = 24;
export const PF_ARM_64BIT_LOADSTORE_ATOMIC            = 25;
export const PF_ARM_EXTERNAL_CACHE_AVAILABLE          = 26;
export const PF_ARM_FMAC_INSTRUCTIONS_AVAILABLE       = 27;
export const PF_RDRAND_INSTRUCTION_AVAILABLE          = 28;
export const PF_ARM_V8_INSTRUCTIONS_AVAILABLE         = 29;
export const PF_ARM_V8_CRYPTO_INSTRUCTIONS_AVAILABLE  = 30;
export const PF_ARM_V8_CRC32_INSTRUCTIONS_AVAILABLE   = 31;
export const PF_RDTSCP_INSTRUCTION_AVAILABLE          = 32;
export const PF_RDPID_INSTRUCTION_AVAILABLE           = 33;
export const PF_ARM_V81_ATOMIC_INSTRUCTIONS_AVAILABLE = 34;
export const PF_MONITORX_INSTRUCTION_AVAILABLE        = 35;
export const PF_SSSE3_INSTRUCTIONS_AVAILABLE          = 36;
export const PF_SSE4_1_INSTRUCTIONS_AVAILABLE         = 37;
export const PF_SSE4_2_INSTRUCTIONS_AVAILABLE         = 38;
export const PF_AVX_INSTRUCTIONS_AVAILABLE            = 39;
export const PF_AVX2_INSTRUCTIONS_AVAILABLE           = 40;
export const PF_AVX512F_INSTRUCTIONS_AVAILABLE        = 41;

export const XSTATE_LEGACY_FLOATING_POINT = (0);
export const XSTATE_LEGACY_SSE            = (1);
export const XSTATE_GSSE                  = (2);
export const XSTATE_AVX                   = (XSTATE_GSSE);
export const XSTATE_MPX_BNDREGS           = (3);
export const XSTATE_MPX_BNDCSR            = (4);
export const XSTATE_AVX512_KMASK          = (5);
export const XSTATE_AVX512_ZMM_H          = (6);
export const XSTATE_AVX512_ZMM            = (7);
export const XSTATE_IPT                   = (8);
export const XSTATE_CET_U                 = (11);
export const XSTATE_LWP                   = (62);
export const MAXIMUM_XSTATE_FEATURES      = (64);

export const XSTATE_MASK_LEGACY_FLOATING_POINT   = (1n << BigInt(XSTATE_LEGACY_FLOATING_POINT));
export const XSTATE_MASK_LEGACY_SSE              = (1n << BigInt(XSTATE_LEGACY_SSE));
export const XSTATE_MASK_LEGACY                  = (XSTATE_MASK_LEGACY_FLOATING_POINT |
                                                    XSTATE_MASK_LEGACY_SSE);
export const XSTATE_MASK_GSSE                    = (1n << BigInt(XSTATE_GSSE));
export const XSTATE_MASK_AVX                     = (XSTATE_MASK_GSSE);
export const XSTATE_MASK_MPX                     = ((1n << BigInt(XSTATE_MPX_BNDREGS)) |
                                                    (1n << BigInt(XSTATE_MPX_BNDCSR)));
export const XSTATE_MASK_AVX512                  = ((1n << BigInt(XSTATE_AVX512_KMASK)) |
                                                    (1n << BigInt(XSTATE_AVX512_ZMM_H)) |
                                                    (1n << BigInt(XSTATE_AVX512_ZMM)));
export const XSTATE_MASK_IPT                     = (1n << BigInt(XSTATE_IPT));
export const XSTATE_MASK_CET_U                   = (1n << BigInt(XSTATE_CET_U));
export const XSTATE_MASK_LWP                     = (1n << BigInt(XSTATE_LWP));
export const XSTATE_MASK_ALLOWED                 = (XSTATE_MASK_LEGACY |
                                                    XSTATE_MASK_AVX |
                                                    XSTATE_MASK_MPX |
                                                    XSTATE_MASK_AVX512 |
                                                    XSTATE_MASK_IPT |
                                                    XSTATE_MASK_CET_U |
                                                    XSTATE_MASK_LWP);
export const XSTATE_MASK_PERSISTENT              = ((1n << BigInt(XSTATE_MPX_BNDCSR)) |
                                                    XSTATE_MASK_LWP);
export const XSTATE_MASK_USER_VISIBLE_SUPERVISOR = (XSTATE_MASK_CET_U);
export const XSTATE_COMPACTION_ENABLE            = (63);
export const XSTATE_COMPACTION_ENABLE_MASK       = (1n << BigInt(XSTATE_COMPACTION_ENABLE));
export const XSTATE_ALIGN_BIT                    = (1);
export const XSTATE_ALIGN_MASK                   = (1n << BigInt(XSTATE_ALIGN_BIT));
export const XSTATE_CONTROLFLAG_XSAVEOPT_MASK    = (1);
export const XSTATE_CONTROLFLAG_XSAVEC_MASK      = (2);
export const XSTATE_CONTROLFLAG_VALID_MASK       = (XSTATE_CONTROLFLAG_XSAVEOPT_MASK |
                                                    XSTATE_CONTROLFLAG_XSAVEC_MASK);

export const CFG_CALL_TARGET_VALID                              = (0x00000001);
export const CFG_CALL_TARGET_PROCESSED                          = (0x00000002);
export const CFG_CALL_TARGET_CONVERT_EXPORT_SUPPRESSED_TO_VALID = (0x00000004);

export const SECTION_QUERY                = 0x0001;
export const SECTION_MAP_WRITE            = 0x0002;
export const SECTION_MAP_READ             = 0x0004;
export const SECTION_MAP_EXECUTE          = 0x0008;
export const SECTION_EXTEND_SIZE          = 0x0010;
export const SECTION_MAP_EXECUTE_EXPLICIT = 0x0020;
export const SECTION_ALL_ACCESS           = (STANDARD_RIGHTS_REQUIRED | SECTION_QUERY |
                                             SECTION_MAP_WRITE |
                                             SECTION_MAP_READ |
                                             SECTION_MAP_EXECUTE |
                                             SECTION_EXTEND_SIZE);
export const SESSION_QUERY_ACCESS         = 0x0001;
export const SESSION_MODIFY_ACCESS        = 0x0002;
export const SESSION_ALL_ACCESS           = (STANDARD_RIGHTS_REQUIRED |
                                             SESSION_QUERY_ACCESS |
                                             SESSION_MODIFY_ACCESS);

export const PAGE_NOACCESS                   = 0x01;
export const PAGE_READONLY                   = 0x02;
export const PAGE_READWRITE                  = 0x04;
export const PAGE_WRITECOPY                  = 0x08;
export const PAGE_EXECUTE                    = 0x10;
export const PAGE_EXECUTE_READ               = 0x20;
export const PAGE_EXECUTE_READWRITE          = 0x40;
export const PAGE_EXECUTE_WRITECOPY          = 0x80;
export const PAGE_GUARD                      = 0x100;
export const PAGE_NOCACHE                    = 0x200;
export const PAGE_WRITECOMBINE               = 0x400;
export const PAGE_GRAPHICS_NOACCESS          = 0x0800;
export const PAGE_GRAPHICS_READONLY          = 0x1000;
export const PAGE_GRAPHICS_READWRITE         = 0x2000;
export const PAGE_GRAPHICS_EXECUTE           = 0x4000;
export const PAGE_GRAPHICS_EXECUTE_READ      = 0x8000;
export const PAGE_GRAPHICS_EXECUTE_READWRITE = 0x10000;
export const PAGE_GRAPHICS_COHERENT          = 0x20000;
export const PAGE_GRAPHICS_NOCACHE           = 0x40000;
export const PAGE_ENCLAVE_THREAD_CONTROL     = 0x80000000;
export const PAGE_REVERT_TO_FILE_MAP         = 0x80000000;
export const PAGE_TARGETS_NO_UPDATE          = 0x40000000;
export const PAGE_TARGETS_INVALID            = 0x40000000;
export const PAGE_ENCLAVE_UNVALIDATED        = 0x20000000;
export const PAGE_ENCLAVE_MASK               = 0x10000000;
export const PAGE_ENCLAVE_DECOMMIT           = (PAGE_ENCLAVE_MASK | 0);
export const PAGE_ENCLAVE_SS_FIRST           = (PAGE_ENCLAVE_MASK | 1);
export const PAGE_ENCLAVE_SS_REST            = (PAGE_ENCLAVE_MASK | 2);

export const MEM_COMMIT                     = 0x00001000;
export const MEM_RESERVE                    = 0x00002000;
export const MEM_REPLACE_PLACEHOLDER        = 0x00004000;
export const MEM_RESERVE_PLACEHOLDER        = 0x00040000;
export const MEM_RESET                      = 0x00080000;
export const MEM_TOP_DOWN                   = 0x00100000;
export const MEM_WRITE_WATCH                = 0x00200000;
export const MEM_PHYSICAL                   = 0x00400000;
export const MEM_ROTATE                     = 0x00800000;
export const MEM_DIFFERENT_IMAGE_BASE_OK    = 0x00800000;
export const MEM_RESET_UNDO                 = 0x01000000;
export const MEM_LARGE_PAGES                = 0x20000000;
export const MEM_4MB_PAGES                  = 0x80000000;
export const MEM_64K_PAGES                  = (MEM_LARGE_PAGES | MEM_PHYSICAL);
export const MEM_UNMAP_WITH_TRANSIENT_BOOST = 0x00000001;
export const MEM_COALESCE_PLACEHOLDERS      = 0x00000001;
export const MEM_PRESERVE_PLACEHOLDER       = 0x00000002;
export const MEM_DECOMMIT                   = 0x00004000;
export const MEM_RELEASE                    = 0x00008000;
export const MEM_FREE                       = 0x00010000;

export const MEM_EXTENDED_PARAMETER_GRAPHICS            = 0x00000001;
export const MEM_EXTENDED_PARAMETER_NONPAGED            = 0x00000002;
export const MEM_EXTENDED_PARAMETER_ZERO_PAGES_OPTIONAL = 0x00000004;
export const MEM_EXTENDED_PARAMETER_NONPAGED_LARGE      = 0x00000008;
export const MEM_EXTENDED_PARAMETER_NONPAGED_HUGE       = 0x00000010;
export const MEM_EXTENDED_PARAMETER_SOFT_FAULT_PAGES    = 0x00000020;

export const MEM_EXTENDED_PARAMETER_NUMA_NODE_MANDATORY = MINLONG64;
export const MEM_EXTENDED_PARAMETER_TYPE_BITS = 8;

export const SEC_PARTITION_OWNER_HANDLE = 0x00040000;
export const SEC_64K_PAGES              = 0x00080000;
export const SEC_FILE                   = 0x00800000;
export const SEC_IMAGE                  = 0x01000000;
export const SEC_PROTECTED_IMAGE        = 0x02000000;
export const SEC_RESERVE                = 0x04000000;
export const SEC_COMMIT                 = 0x08000000;
export const SEC_NOCACHE                = 0x10000000;
export const SEC_WRITECOMBINE           = 0x40000000;
export const SEC_LARGE_PAGES            = 0x80000000;
export const SEC_IMAGE_NO_EXECUTE       = (SEC_IMAGE | SEC_NOCACHE);

export const MEM_PRIVATE            = 0x00020000;
export const MEM_MAPPED             = 0x00040000;
export const MEM_IMAGE              = 0x01000000;
export const WRITE_WATCH_FLAG_RESET = 0x01;

export const ENCLAVE_TYPE_SGX       = 0x00000001;
export const ENCLAVE_TYPE_SGX2      = 0x00000002;
export const ENCLAVE_TYPE_VBS       = 0x00000010;
export const ENCLAVE_VBS_FLAG_DEBUG = 0x00000001;
export const ENCLAVE_TYPE_VBS_BASIC = 0x00000011;

export const VBS_BASIC_PAGE_MEASURED_DATA     = 0x00000001;
export const VBS_BASIC_PAGE_UNMEASURED_DATA   = 0x00000002;
export const VBS_BASIC_PAGE_ZERO_FILL         = 0x00000003;
export const VBS_BASIC_PAGE_THREAD_DESCRIPTOR = 0x00000004;
export const VBS_BASIC_PAGE_SYSTEM_CALL       = 0x00000005;

export const FILE_READ_DATA                       = (0x0001);
export const FILE_LIST_DIRECTORY                  = (0x0001);
export const FILE_WRITE_DATA                      = (0x0002);
export const FILE_ADD_FILE                        = (0x0002);
export const FILE_APPEND_DATA                     = (0x0004);
export const FILE_ADD_SUBDIRECTORY                = (0x0004);
export const FILE_CREATE_PIPE_INSTANCE            = (0x0004);
export const FILE_READ_EA                         = (0x0008);
export const FILE_WRITE_EA                        = (0x0010);
export const FILE_EXECUTE                         = (0x0020);
export const FILE_TRAVERSE                        = (0x0020);
export const FILE_DELETE_CHILD                    = (0x0040);
export const FILE_READ_ATTRIBUTES                 = (0x0080);
export const FILE_WRITE_ATTRIBUTES                = (0x0100);
export const FILE_ALL_ACCESS                      = (STANDARD_RIGHTS_REQUIRED | SYNCHRONIZE | 0x1FF);
export const FILE_GENERIC_READ                    = (STANDARD_RIGHTS_READ |
                                                     FILE_READ_DATA |
                                                     FILE_READ_ATTRIBUTES |
                                                     FILE_READ_EA |
                                                     SYNCHRONIZE);
export const FILE_GENERIC_WRITE                   = (STANDARD_RIGHTS_WRITE |
                                                     FILE_WRITE_DATA |
                                                     FILE_WRITE_ATTRIBUTES |
                                                     FILE_WRITE_EA |
                                                     FILE_APPEND_DATA |
                                                     SYNCHRONIZE);
export const FILE_GENERIC_EXECUTE                 = (STANDARD_RIGHTS_EXECUTE |
                                                     FILE_READ_ATTRIBUTES |
                                                     FILE_EXECUTE |
                                                     SYNCHRONIZE);
export const FILE_SHARE_READ                      = 0x00000001;
export const FILE_SHARE_WRITE                     = 0x00000002;
export const FILE_SHARE_DELETE                    = 0x00000004;
export const FILE_ATTRIBUTE_READONLY              = 0x00000001;
export const FILE_ATTRIBUTE_HIDDEN                = 0x00000002;
export const FILE_ATTRIBUTE_SYSTEM                = 0x00000004;
export const FILE_ATTRIBUTE_DIRECTORY             = 0x00000010;
export const FILE_ATTRIBUTE_ARCHIVE               = 0x00000020;
export const FILE_ATTRIBUTE_DEVICE                = 0x00000040;
export const FILE_ATTRIBUTE_NORMAL                = 0x00000080;
export const FILE_ATTRIBUTE_TEMPORARY             = 0x00000100;
export const FILE_ATTRIBUTE_SPARSE_FILE           = 0x00000200;
export const FILE_ATTRIBUTE_REPARSE_POINT         = 0x00000400;
export const FILE_ATTRIBUTE_COMPRESSED            = 0x00000800;
export const FILE_ATTRIBUTE_OFFLINE               = 0x00001000;
export const FILE_ATTRIBUTE_NOT_CONTENT_INDEXED   = 0x00002000;
export const FILE_ATTRIBUTE_ENCRYPTED             = 0x00004000;
export const FILE_ATTRIBUTE_INTEGRITY_STREAM      = 0x00008000;
export const FILE_ATTRIBUTE_VIRTUAL               = 0x00010000;
export const FILE_ATTRIBUTE_NO_SCRUB_DATA         = 0x00020000;
export const FILE_ATTRIBUTE_EA                    = 0x00040000;
export const FILE_ATTRIBUTE_PINNED                = 0x00080000;
export const FILE_ATTRIBUTE_UNPINNED              = 0x00100000;
export const FILE_ATTRIBUTE_RECALL_ON_OPEN        = 0x00040000;
export const FILE_ATTRIBUTE_RECALL_ON_DATA_ACCESS = 0x00400000;
export const TREE_CONNECT_ATTRIBUTE_PRIVACY       = 0x00004000;
export const TREE_CONNECT_ATTRIBUTE_INTEGRITY     = 0x00008000;
export const TREE_CONNECT_ATTRIBUTE_GLOBAL        = 0x00000004;
export const TREE_CONNECT_ATTRIBUTE_PINNED        = 0x00000002;
export const FILE_ATTRIBUTE_STRICTLY_SEQUENTIAL   = 0x20000000;
export const FILE_NOTIFY_CHANGE_FILE_NAME         = 0x00000001;
export const FILE_NOTIFY_CHANGE_DIR_NAME          = 0x00000002;
export const FILE_NOTIFY_CHANGE_ATTRIBUTES        = 0x00000004;
export const FILE_NOTIFY_CHANGE_SIZE              = 0x00000008;
export const FILE_NOTIFY_CHANGE_LAST_WRITE        = 0x00000010;
export const FILE_NOTIFY_CHANGE_LAST_ACCESS       = 0x00000020;
export const FILE_NOTIFY_CHANGE_CREATION          = 0x00000040;
export const FILE_NOTIFY_CHANGE_SECURITY          = 0x00000100;
export const FILE_ACTION_ADDED                    = 0x00000001;
export const FILE_ACTION_REMOVED                  = 0x00000002;
export const FILE_ACTION_MODIFIED                 = 0x00000003;
export const FILE_ACTION_RENAMED_OLD_NAME         = 0x00000004;
export const FILE_ACTION_RENAMED_NEW_NAME         = 0x00000005;
export const MAILSLOT_NO_MESSAGE                  = (-1);
export const MAILSLOT_WAIT_FOREVER                = (-1);
export const FILE_CASE_SENSITIVE_SEARCH           = 0x00000001;
export const FILE_CASE_PRESERVED_NAMES            = 0x00000002;
export const FILE_UNICODE_ON_DISK                 = 0x00000004;
export const FILE_PERSISTENT_ACLS                 = 0x00000008;
export const FILE_FILE_COMPRESSION                = 0x00000010;
export const FILE_VOLUME_QUOTAS                   = 0x00000020;
export const FILE_SUPPORTS_SPARSE_FILES           = 0x00000040;
export const FILE_SUPPORTS_REPARSE_POINTS         = 0x00000080;
export const FILE_SUPPORTS_REMOTE_STORAGE         = 0x00000100;
export const FILE_RETURNS_CLEANUP_RESULT_INFO     = 0x00000200;
export const FILE_SUPPORTS_POSIX_UNLINK_RENAME    = 0x00000400;
export const FILE_VOLUME_IS_COMPRESSED            = 0x00008000;
export const FILE_SUPPORTS_OBJECT_IDS             = 0x00010000;
export const FILE_SUPPORTS_ENCRYPTION             = 0x00020000;
export const FILE_NAMED_STREAMS                   = 0x00040000;
export const FILE_READ_ONLY_VOLUME                = 0x00080000;
export const FILE_SEQUENTIAL_WRITE_ONCE           = 0x00100000;
export const FILE_SUPPORTS_TRANSACTIONS           = 0x00200000;
export const FILE_SUPPORTS_HARD_LINKS             = 0x00400000;
export const FILE_SUPPORTS_EXTENDED_ATTRIBUTES    = 0x00800000;
export const FILE_SUPPORTS_OPEN_BY_FILE_ID        = 0x01000000;
export const FILE_SUPPORTS_USN_JOURNAL            = 0x02000000;
export const FILE_SUPPORTS_INTEGRITY_STREAMS      = 0x04000000;
export const FILE_SUPPORTS_BLOCK_REFCOUNTING      = 0x08000000;
export const FILE_SUPPORTS_SPARSE_VDL             = 0x10000000;
export const FILE_DAX_VOLUME                      = 0x20000000;
export const FILE_SUPPORTS_GHOSTING               = 0x40000000;
export const FILE_INVALID_FILE_ID                 = (-1n);
export const FILE_CS_FLAG_CASE_SENSITIVE_DIR      = 0x00000001;

export const FLUSH_FLAGS_FILE_DATA_ONLY      = 0x00000001;
export const FLUSH_FLAGS_NO_SYNC             = 0x00000002;
export const FLUSH_FLAGS_FILE_DATA_SYNC_ONLY = 0x00000004;

// defined in decircular.js
// export const REPARSE_GUID_DATA_BUFFER_HEADER_SIZE = UFIELD_OFFSET(REPARSE_GUID_DATA_BUFFER, "GenericReparseBuffer");

export const MAXIMUM_REPARSE_DATA_BUFFER_SIZE = (16 * 1024);

export const IO_REPARSE_TAG_RESERVED_ZERO    = (0);
export const IO_REPARSE_TAG_RESERVED_ONE     = (1);
export const IO_REPARSE_TAG_RESERVED_TWO     = (2);
export const IO_REPARSE_TAG_RESERVED_RANGE   = IO_REPARSE_TAG_RESERVED_TWO;
export const IO_REPARSE_TAG_MOUNT_POINT      = (0xA0000003);
export const IO_REPARSE_TAG_HSM              = (0xC0000004);
export const IO_REPARSE_TAG_HSM2             = (0x80000006);
export const IO_REPARSE_TAG_SIS              = (0x80000007);
export const IO_REPARSE_TAG_WIM              = (0x80000008);
export const IO_REPARSE_TAG_CSV              = (0x80000009);
export const IO_REPARSE_TAG_DFS              = (0x8000000A);
export const IO_REPARSE_TAG_SYMLINK          = (0xA000000C);
export const IO_REPARSE_TAG_DFSR             = (0x80000012);
export const IO_REPARSE_TAG_DEDUP            = (0x80000013);
export const IO_REPARSE_TAG_NFS              = (0x80000014);
export const IO_REPARSE_TAG_FILE_PLACEHOLDER = (0x80000015);
export const IO_REPARSE_TAG_WOF              = (0x80000017);
export const IO_REPARSE_TAG_WCI              = (0x80000018);
export const IO_REPARSE_TAG_WCI_1            = (0x90001018);
export const IO_REPARSE_TAG_GLOBAL_REPARSE   = (0xA0000019);
export const IO_REPARSE_TAG_CLOUD            = (0x9000001A);
export const IO_REPARSE_TAG_CLOUD_1          = (0x9000101A);
export const IO_REPARSE_TAG_CLOUD_2          = (0x9000201A);
export const IO_REPARSE_TAG_CLOUD_3          = (0x9000301A);
export const IO_REPARSE_TAG_CLOUD_4          = (0x9000401A);
export const IO_REPARSE_TAG_CLOUD_5          = (0x9000501A);
export const IO_REPARSE_TAG_CLOUD_6          = (0x9000601A);
export const IO_REPARSE_TAG_CLOUD_7          = (0x9000701A);
export const IO_REPARSE_TAG_CLOUD_8          = (0x9000801A);
export const IO_REPARSE_TAG_CLOUD_9          = (0x9000901A);
export const IO_REPARSE_TAG_CLOUD_A          = (0x9000A01A);
export const IO_REPARSE_TAG_CLOUD_B          = (0x9000B01A);
export const IO_REPARSE_TAG_CLOUD_C          = (0x9000C01A);
export const IO_REPARSE_TAG_CLOUD_D          = (0x9000D01A);
export const IO_REPARSE_TAG_CLOUD_E          = (0x9000E01A);
export const IO_REPARSE_TAG_CLOUD_F          = (0x9000F01A);
export const IO_REPARSE_TAG_CLOUD_MASK       = (0x0000F000);
export const IO_REPARSE_TAG_APPEXECLINK      = (0x8000001B);
export const IO_REPARSE_TAG_PROJFS           = (0x9000001C);
export const IO_REPARSE_TAG_STORAGE_SYNC     = (0x8000001E);
export const IO_REPARSE_TAG_WCI_TOMBSTONE    = (0xA000001F);
export const IO_REPARSE_TAG_UNHANDLED        = (0x80000020);
export const IO_REPARSE_TAG_ONEDRIVE         = (0x80000021);
export const IO_REPARSE_TAG_PROJFS_TOMBSTONE = (0xA0000022);
export const IO_REPARSE_TAG_AF_UNIX          = (0x80000023);
export const IO_REPARSE_TAG_WCI_LINK         = (0xA0000027);
export const IO_REPARSE_TAG_WCI_LINK_1       = (0xA0001027);

export const SCRUB_DATA_INPUT_FLAG_RESUME                           = 0x00000001;
export const SCRUB_DATA_INPUT_FLAG_SKIP_IN_SYNC                     = 0x00000002;
export const SCRUB_DATA_INPUT_FLAG_SKIP_NON_INTEGRITY_DATA          = 0x00000004;
export const SCRUB_DATA_INPUT_FLAG_IGNORE_REDUNDANCY                = 0x00000008;
export const SCRUB_DATA_INPUT_FLAG_SKIP_DATA                        = 0x00000010;
export const SCRUB_DATA_INPUT_FLAG_SCRUB_BY_OBJECT_ID               = 0x00000020;
export const SCRUB_DATA_INPUT_FLAG_OPLOCK_NOT_ACQUIRED              = 0x00000040;
export const SCRUB_DATA_OUTPUT_FLAG_INCOMPLETE                      = 0x00000001;
export const SCRUB_DATA_OUTPUT_FLAG_NON_USER_DATA_RANGE             = 0x00010000;
export const SCRUB_DATA_OUTPUT_FLAG_PARITY_EXTENT_DATA_RETURNED     = 0x00020000;
export const SCRUB_DATA_OUTPUT_FLAG_RESUME_CONTEXT_LENGTH_SPECIFIED = 0x00040000;

export const SHUFFLE_FILE_FLAG_SKIP_INITIALIZING_NEW_CLUSTERS = (0x00000001);

export const IO_COMPLETION_MODIFY_STATE = 0x0002;
export const IO_COMPLETION_ALL_ACCESS   = (STANDARD_RIGHTS_REQUIRED | SYNCHRONIZE | 0x3);
export const IO_QOS_MAX_RESERVATION     = 1000000000;

export const SMB_CCF_APP_INSTANCE_EA_NAME = "ClusteredApplicationInstance";

export const NETWORK_APP_INSTANCE_CSV_FLAGS_VALID_ONLY_IF_CSV_COORDINATOR = 0x00000001;

export const DUPLICATE_CLOSE_SOURCE = 0x00000001;
export const DUPLICATE_SAME_ACCESS  = 0x00000002;

export const POWERBUTTON_ACTION_INDEX_NOTHING              = 0;
export const POWERBUTTON_ACTION_INDEX_SLEEP                = 1;
export const POWERBUTTON_ACTION_INDEX_HIBERNATE            = 2;
export const POWERBUTTON_ACTION_INDEX_SHUTDOWN             = 3;
export const POWERBUTTON_ACTION_INDEX_TURN_OFF_THE_DISPLAY = 4;
export const POWERBUTTON_ACTION_VALUE_NOTHING              = 0;
export const POWERBUTTON_ACTION_VALUE_SLEEP                = 2;
export const POWERBUTTON_ACTION_VALUE_HIBERNATE            = 3;
export const POWERBUTTON_ACTION_VALUE_SHUTDOWN             = 6;
export const POWERBUTTON_ACTION_VALUE_TURN_OFF_THE_DISPLAY = 8;

export const PERFSTATE_POLICY_CHANGE_IDEAL            = 0;
export const PERFSTATE_POLICY_CHANGE_SINGLE           = 1;
export const PERFSTATE_POLICY_CHANGE_ROCKET           = 2;
export const PERFSTATE_POLICY_CHANGE_IDEAL_AGGRESSIVE = 3;
export const PERFSTATE_POLICY_CHANGE_DECREASE_MAX     = PERFSTATE_POLICY_CHANGE_ROCKET;
export const PERFSTATE_POLICY_CHANGE_INCREASE_MAX     = PERFSTATE_POLICY_CHANGE_IDEAL_AGGRESSIVE;

export const PROCESSOR_THROTTLE_DISABLED                                  = 0;
export const PROCESSOR_THROTTLE_ENABLED                                   = 1;
export const PROCESSOR_THROTTLE_AUTOMATIC                                 = 2;
export const PROCESSOR_PERF_BOOST_POLICY_DISABLED                         = 0;
export const PROCESSOR_PERF_BOOST_POLICY_MAX                              = 100;
export const PROCESSOR_PERF_BOOST_MODE_DISABLED                           = 0;
export const PROCESSOR_PERF_BOOST_MODE_ENABLED                            = 1;
export const PROCESSOR_PERF_BOOST_MODE_AGGRESSIVE                         = 2;
export const PROCESSOR_PERF_BOOST_MODE_EFFICIENT_ENABLED                  = 3;
export const PROCESSOR_PERF_BOOST_MODE_EFFICIENT_AGGRESSIVE               = 4;
export const PROCESSOR_PERF_BOOST_MODE_AGGRESSIVE_AT_GUARANTEED           = 5;
export const PROCESSOR_PERF_BOOST_MODE_EFFICIENT_AGGRESSIVE_AT_GUARANTEED = 6;
export const PROCESSOR_PERF_BOOST_MODE_MAX = PROCESSOR_PERF_BOOST_MODE_EFFICIENT_AGGRESSIVE_AT_GUARANTEED;
export const PROCESSOR_PERF_AUTONOMOUS_MODE_DISABLED                      = 0;
export const PROCESSOR_PERF_AUTONOMOUS_MODE_ENABLED                       = 1;
export const PROCESSOR_PERF_PERFORMANCE_PREFERENCE                        = 0xff;
export const PROCESSOR_PERF_ENERGY_PREFERENCE                             = 0;
export const PROCESSOR_PERF_MINIMUM_ACTIVITY_WINDOW                       = 0;
export const PROCESSOR_PERF_MAXIMUM_ACTIVITY_WINDOW                       = 1270000000;
export const PROCESSOR_DUTY_CYCLING_DISABLED                              = 0;
export const PROCESSOR_DUTY_CYCLING_ENABLED                               = 1;

export const CORE_PARKING_POLICY_CHANGE_IDEAL     = 0;
export const CORE_PARKING_POLICY_CHANGE_SINGLE    = 1;
export const CORE_PARKING_POLICY_CHANGE_ROCKET    = 2;
export const CORE_PARKING_POLICY_CHANGE_MULTISTEP = 3;
export const CORE_PARKING_POLICY_CHANGE_MAX       = CORE_PARKING_POLICY_CHANGE_MULTISTEP;

export const POWER_DEVICE_IDLE_POLICY_PERFORMANCE         = 0;
export const POWER_DEVICE_IDLE_POLICY_CONSERVATIVE        = 1;
export const POWER_CONNECTIVITY_IN_STANDBY_DISABLED       = 0;
export const POWER_CONNECTIVITY_IN_STANDBY_ENABLED        = 1;
export const POWER_CONNECTIVITY_IN_STANDBY_SYSTEM_MANAGED = 2;
export const POWER_DISCONNECTED_STANDBY_MODE_NORMAL       = 0;
export const POWER_DISCONNECTED_STANDBY_MODE_AGGRESSIVE   = 1;
export const POWER_SYSTEM_MAXIMUM                         = 7;

export const ES_SYSTEM_REQUIRED   = (0x00000001);
export const ES_DISPLAY_REQUIRED  = (0x00000002);
export const ES_USER_PRESENT      = (0x00000004);
export const ES_AWAYMODE_REQUIRED = (0x00000040);
export const ES_CONTINUOUS        = (0x80000000);

export const EXECUTION_STATE = DWORD;	// typedef DWORD EXECUTION_STATE, *PEXECUTION_STATE;
export const PEXECUTION_STATE = pointer(EXECUTION_STATE);

export const DIAGNOSTIC_REASON_VERSION         = 0;
export const DIAGNOSTIC_REASON_SIMPLE_STRING   = 0x00000001;
export const DIAGNOSTIC_REASON_DETAILED_STRING = 0x00000002;
export const DIAGNOSTIC_REASON_NOT_SPECIFIED   = 0x80000000;
export const DIAGNOSTIC_REASON_INVALID_FLAGS   = (~0x80000007);

export const POWER_REQUEST_CONTEXT_VERSION         = DIAGNOSTIC_REASON_VERSION;
export const POWER_REQUEST_CONTEXT_SIMPLE_STRING   = DIAGNOSTIC_REASON_SIMPLE_STRING;
export const POWER_REQUEST_CONTEXT_DETAILED_STRING = DIAGNOSTIC_REASON_DETAILED_STRING;

export const PDCAP_D0_SUPPORTED           = 0x00000001;
export const PDCAP_D1_SUPPORTED           = 0x00000002;
export const PDCAP_D2_SUPPORTED           = 0x00000004;
export const PDCAP_D3_SUPPORTED           = 0x00000008;
export const PDCAP_WAKE_FROM_D0_SUPPORTED = 0x00000010;
export const PDCAP_WAKE_FROM_D1_SUPPORTED = 0x00000020;
export const PDCAP_WAKE_FROM_D2_SUPPORTED = 0x00000040;
export const PDCAP_WAKE_FROM_D3_SUPPORTED = 0x00000080;
export const PDCAP_WARM_EJECT_SUPPORTED   = 0x00000100;

export const POWER_SETTING_VALUE_VERSION = (0x1);

//
// define platform roles
//

export const POWER_PLATFORM_ROLE           = int;
export const PlatformRoleUnspecified       = 0;
export const PlatformRoleDesktop           = 1;
export const PlatformRoleMobile            = 2;
export const PlatformRoleWorkstation       = 3;
export const PlatformRoleEnterpriseServer  = 4;
export const PlatformRoleSOHOServer        = 5;
export const PlatformRoleAppliancePC       = 6;
export const PlatformRolePerformanceServer = 7;
export const PlatformRoleSlate             = 8;
export const PlatformRoleMaximum           = 9;

export const POWER_PLATFORM_ROLE_V1          = (0x00000001);
export const POWER_PLATFORM_ROLE_V1_MAX      = (PlatformRolePerformanceServer + 1);
export const POWER_PLATFORM_ROLE_V2          = (0x00000002);
export const POWER_PLATFORM_ROLE_V2_MAX      = (PlatformRoleSlate + 1);
export const POWER_PLATFORM_ROLE_VERSION     = POWER_PLATFORM_ROLE_V2;
export const POWER_PLATFORM_ROLE_VERSION_MAX = POWER_PLATFORM_ROLE_V2_MAX;

export const PROC_IDLE_BUCKET_COUNT    = 6;
export const PROC_IDLE_BUCKET_COUNT_EX = 16;

export const ACPI_PPM_SOFTWARE_ALL = 0xFC;
export const ACPI_PPM_SOFTWARE_ANY = 0xFD;
export const ACPI_PPM_HARDWARE_ALL = 0xFE;

export const MS_PPM_SOFTWARE_ALL = 0x1;

export const PPM_FIRMWARE_ACPI1C2                   = 0x00000001;
export const PPM_FIRMWARE_ACPI1C3                   = 0x00000002;
export const PPM_FIRMWARE_ACPI1TSTATES              = 0x00000004;
export const PPM_FIRMWARE_CST                       = 0x00000008;
export const PPM_FIRMWARE_CSD                       = 0x00000010;
export const PPM_FIRMWARE_PCT                       = 0x00000020;
export const PPM_FIRMWARE_PSS                       = 0x00000040;
export const PPM_FIRMWARE_XPSS                      = 0x00000080;
export const PPM_FIRMWARE_PPC                       = 0x00000100;
export const PPM_FIRMWARE_PSD                       = 0x00000200;
export const PPM_FIRMWARE_PTC                       = 0x00000400;
export const PPM_FIRMWARE_TSS                       = 0x00000800;
export const PPM_FIRMWARE_TPC                       = 0x00001000;
export const PPM_FIRMWARE_TSD                       = 0x00002000;
export const PPM_FIRMWARE_PCCH                      = 0x00004000;
export const PPM_FIRMWARE_PCCP                      = 0x00008000;
export const PPM_FIRMWARE_OSC                       = 0x00010000;
export const PPM_FIRMWARE_PDC                       = 0x00020000;
export const PPM_FIRMWARE_CPC                       = 0x00040000;
export const PPM_FIRMWARE_LPI                       = 0x00080000;
export const PPM_PERFORMANCE_IMPLEMENTATION_NONE    = 0x00000000;
export const PPM_PERFORMANCE_IMPLEMENTATION_PSTATES = 0x00000001;
export const PPM_PERFORMANCE_IMPLEMENTATION_PCCV1   = 0x00000002;
export const PPM_PERFORMANCE_IMPLEMENTATION_CPPC    = 0x00000003;
export const PPM_PERFORMANCE_IMPLEMENTATION_PEP     = 0x00000004;
export const PPM_IDLE_IMPLEMENTATION_NONE           = 0x00000000;
export const PPM_IDLE_IMPLEMENTATION_CSTATES        = 0x00000001;
export const PPM_IDLE_IMPLEMENTATION_PEP            = 0x00000002;
export const PPM_IDLE_IMPLEMENTATION_MICROPEP       = 0x00000003;
export const PPM_IDLE_IMPLEMENTATION_LPISTATES      = 0x00000004;

export const POWER_ACTION_QUERY_ALLOWED        = 0x00000001;
export const POWER_ACTION_UI_ALLOWED           = 0x00000002;
export const POWER_ACTION_OVERRIDE_APPS        = 0x00000004;
export const POWER_ACTION_HIBERBOOT            = 0x00000008;
export const POWER_ACTION_USER_NOTIFY          = 0x00000010;
export const POWER_ACTION_DOZE_TO_HIBERNATE    = 0x00000020;
export const POWER_ACTION_ACPI_CRITICAL        = 0x01000000;
export const POWER_ACTION_ACPI_USER_NOTIFY     = 0x02000000;
export const POWER_ACTION_DIRECTED_DRIPS       = 0x04000000;
export const POWER_ACTION_PSEUDO_TRANSITION    = 0x08000000;
export const POWER_ACTION_LIGHTEST_FIRST       = 0x10000000;
export const POWER_ACTION_LOCK_CONSOLE         = 0x20000000;
export const POWER_ACTION_DISABLE_WAKES        = 0x40000000;
export const POWER_ACTION_CRITICAL             = 0x80000000;
export const POWER_LEVEL_USER_NOTIFY_TEXT      = 0x00000001;
export const POWER_LEVEL_USER_NOTIFY_SOUND     = 0x00000002;
export const POWER_LEVEL_USER_NOTIFY_EXEC      = 0x00000004;
export const POWER_USER_NOTIFY_BUTTON          = 0x00000008;
export const POWER_USER_NOTIFY_SHUTDOWN        = 0x00000010;
export const POWER_USER_NOTIFY_FORCED_SHUTDOWN = 0x00000020;
export const POWER_FORCE_TRIGGER_RESET         = 0x80000000;

export const BATTERY_DISCHARGE_FLAGS_EVENTCODE_MASK = 0x00000007;
export const BATTERY_DISCHARGE_FLAGS_ENABLE         = 0x80000000;

export const NUM_DISCHARGE_POLICIES = 4;

export const DISCHARGE_POLICY_CRITICAL = 0;
export const DISCHARGE_POLICY_LOW      = 1;

export const PROCESSOR_IDLESTATE_POLICY_COUNT = 0x3;

export const PO_THROTTLE_NONE     = 0;
export const PO_THROTTLE_CONSTANT = 1;
export const PO_THROTTLE_DEGRADE  = 2;
export const PO_THROTTLE_ADAPTIVE = 3;
export const PO_THROTTLE_MAXIMUM  = 4;

export const HIBERFILE_TYPE_NONE    = 0x00;
export const HIBERFILE_TYPE_REDUCED = 0x01;
export const HIBERFILE_TYPE_FULL    = 0x02;
export const HIBERFILE_TYPE_MAX     = 0x03;

export const IMAGE_DOS_SIGNATURE    = 0x5A4D;
export const IMAGE_OS2_SIGNATURE    = 0x454E;
export const IMAGE_OS2_SIGNATURE_LE = 0x454C;
export const IMAGE_VXD_SIGNATURE    = 0x454C;
export const IMAGE_NT_SIGNATURE     = 0x00004550;

// export const IMAGE_OS2_SIGNATURE = 0x4E45;	// mac
// export const IMAGE_OS2_SIGNATURE_LE = 0x4C45;
// export const IMAGE_NT_SIGNATURE = 0x50450000;

export const IMAGE_SIZEOF_FILE_HEADER = 20;

export const IMAGE_FILE_RELOCS_STRIPPED         = 0x0001;
export const IMAGE_FILE_EXECUTABLE_IMAGE        = 0x0002;
export const IMAGE_FILE_LINE_NUMS_STRIPPED      = 0x0004;
export const IMAGE_FILE_LOCAL_SYMS_STRIPPED     = 0x0008;
export const IMAGE_FILE_AGGRESIVE_WS_TRIM       = 0x0010;
export const IMAGE_FILE_LARGE_ADDRESS_AWARE     = 0x0020;
export const IMAGE_FILE_BYTES_REVERSED_LO       = 0x0080;
export const IMAGE_FILE_32BIT_MACHINE           = 0x0100;
export const IMAGE_FILE_DEBUG_STRIPPED          = 0x0200;
export const IMAGE_FILE_REMOVABLE_RUN_FROM_SWAP = 0x0400;
export const IMAGE_FILE_NET_RUN_FROM_SWAP       = 0x0800;
export const IMAGE_FILE_SYSTEM                  = 0x1000;
export const IMAGE_FILE_DLL                     = 0x2000;
export const IMAGE_FILE_UP_SYSTEM_ONLY          = 0x4000;
export const IMAGE_FILE_BYTES_REVERSED_HI       = 0x8000;
export const IMAGE_FILE_MACHINE_UNKNOWN         = 0;
export const IMAGE_FILE_MACHINE_TARGET_HOST     = 0x0001;
export const IMAGE_FILE_MACHINE_I386            = 0x014c;
export const IMAGE_FILE_MACHINE_R3000           = 0x0162;
export const IMAGE_FILE_MACHINE_R4000           = 0x0166;
export const IMAGE_FILE_MACHINE_R10000          = 0x0168;
export const IMAGE_FILE_MACHINE_WCEMIPSV2       = 0x0169;
export const IMAGE_FILE_MACHINE_ALPHA           = 0x0184;
export const IMAGE_FILE_MACHINE_SH3             = 0x01a2;
export const IMAGE_FILE_MACHINE_SH3DSP          = 0x01a3;
export const IMAGE_FILE_MACHINE_SH3E            = 0x01a4;
export const IMAGE_FILE_MACHINE_SH4             = 0x01a6;
export const IMAGE_FILE_MACHINE_SH5             = 0x01a8;
export const IMAGE_FILE_MACHINE_ARM             = 0x01c0;
export const IMAGE_FILE_MACHINE_THUMB           = 0x01c2;
export const IMAGE_FILE_MACHINE_ARMNT           = 0x01c4;
export const IMAGE_FILE_MACHINE_AM33            = 0x01d3;
export const IMAGE_FILE_MACHINE_POWERPC         = 0x01F0;
export const IMAGE_FILE_MACHINE_POWERPCFP       = 0x01f1;
export const IMAGE_FILE_MACHINE_IA64            = 0x0200;
export const IMAGE_FILE_MACHINE_MIPS16          = 0x0266;
export const IMAGE_FILE_MACHINE_ALPHA64         = 0x0284;
export const IMAGE_FILE_MACHINE_MIPSFPU         = 0x0366;
export const IMAGE_FILE_MACHINE_MIPSFPU16       = 0x0466;
export const IMAGE_FILE_MACHINE_AXP64           = IMAGE_FILE_MACHINE_ALPHA64;
export const IMAGE_FILE_MACHINE_TRICORE         = 0x0520;
export const IMAGE_FILE_MACHINE_CEF             = 0x0CEF;
export const IMAGE_FILE_MACHINE_EBC             = 0x0EBC;
export const IMAGE_FILE_MACHINE_AMD64           = 0x8664;
export const IMAGE_FILE_MACHINE_M32R            = 0x9041;
export const IMAGE_FILE_MACHINE_ARM64           = 0xAA64;
export const IMAGE_FILE_MACHINE_CEE             = 0xC0EE;

export const IMAGE_NUMBEROF_DIRECTORY_ENTRIES = 16;

export const IMAGE_NT_OPTIONAL_HDR32_MAGIC = 0x10b;
export const IMAGE_NT_OPTIONAL_HDR64_MAGIC = 0x20b;
export const IMAGE_ROM_OPTIONAL_HDR_MAGIC  = 0x107;

export const IMAGE_SUBSYSTEM_UNKNOWN                  = 0;
export const IMAGE_SUBSYSTEM_NATIVE                   = 1;
export const IMAGE_SUBSYSTEM_WINDOWS_GUI              = 2;
export const IMAGE_SUBSYSTEM_WINDOWS_CUI              = 3;
export const IMAGE_SUBSYSTEM_OS2_CUI                  = 5;
export const IMAGE_SUBSYSTEM_POSIX_CUI                = 7;
export const IMAGE_SUBSYSTEM_NATIVE_WINDOWS           = 8;
export const IMAGE_SUBSYSTEM_WINDOWS_CE_GUI           = 9;
export const IMAGE_SUBSYSTEM_EFI_APPLICATION          = 10;
export const IMAGE_SUBSYSTEM_EFI_BOOT_SERVICE_DRIVER  = 11;
export const IMAGE_SUBSYSTEM_EFI_RUNTIME_DRIVER       = 12;
export const IMAGE_SUBSYSTEM_EFI_ROM                  = 13;
export const IMAGE_SUBSYSTEM_XBOX                     = 14;
export const IMAGE_SUBSYSTEM_WINDOWS_BOOT_APPLICATION = 16;
export const IMAGE_SUBSYSTEM_XBOX_CODE_CATALOG        = 17;

export const IMAGE_DLLCHARACTERISTICS_HIGH_ENTROPY_VA       = 0x0020;
export const IMAGE_DLLCHARACTERISTICS_DYNAMIC_BASE          = 0x0040;
export const IMAGE_DLLCHARACTERISTICS_FORCE_INTEGRITY       = 0x0080;
export const IMAGE_DLLCHARACTERISTICS_NX_COMPAT             = 0x0100;
export const IMAGE_DLLCHARACTERISTICS_NO_ISOLATION          = 0x0200;
export const IMAGE_DLLCHARACTERISTICS_NO_SEH                = 0x0400;
export const IMAGE_DLLCHARACTERISTICS_NO_BIND               = 0x0800;
export const IMAGE_DLLCHARACTERISTICS_APPCONTAINER          = 0x1000;
export const IMAGE_DLLCHARACTERISTICS_WDM_DRIVER            = 0x2000;
export const IMAGE_DLLCHARACTERISTICS_GUARD_CF              = 0x4000;
export const IMAGE_DLLCHARACTERISTICS_TERMINAL_SERVER_AWARE = 0x8000;

export const IMAGE_DIRECTORY_ENTRY_EXPORT         = 0;
export const IMAGE_DIRECTORY_ENTRY_IMPORT         = 1;
export const IMAGE_DIRECTORY_ENTRY_RESOURCE       = 2;
export const IMAGE_DIRECTORY_ENTRY_EXCEPTION      = 3;
export const IMAGE_DIRECTORY_ENTRY_SECURITY       = 4;
export const IMAGE_DIRECTORY_ENTRY_BASERELOC      = 5;
export const IMAGE_DIRECTORY_ENTRY_DEBUG          = 6;
export const IMAGE_DIRECTORY_ENTRY_ARCHITECTURE   = 7;
export const IMAGE_DIRECTORY_ENTRY_GLOBALPTR      = 8;
export const IMAGE_DIRECTORY_ENTRY_TLS            = 9;
export const IMAGE_DIRECTORY_ENTRY_LOAD_CONFIG    = 10;
export const IMAGE_DIRECTORY_ENTRY_BOUND_IMPORT   = 11;
export const IMAGE_DIRECTORY_ENTRY_IAT            = 12;
export const IMAGE_DIRECTORY_ENTRY_DELAY_IMPORT   = 13;
export const IMAGE_DIRECTORY_ENTRY_COM_DESCRIPTOR = 14;

export const IMAGE_SIZEOF_SHORT_NAME = 8;
export const IMAGE_SIZEOF_SECTION_HEADER = 40;

export const IMAGE_SCN_TYPE_NO_PAD            = 0x00000008;
export const IMAGE_SCN_CNT_CODE               = 0x00000020;
export const IMAGE_SCN_CNT_INITIALIZED_DATA   = 0x00000040;
export const IMAGE_SCN_CNT_UNINITIALIZED_DATA = 0x00000080;
export const IMAGE_SCN_LNK_OTHER              = 0x00000100;
export const IMAGE_SCN_LNK_INFO               = 0x00000200;
export const IMAGE_SCN_LNK_REMOVE             = 0x00000800;
export const IMAGE_SCN_LNK_COMDAT             = 0x00001000;
export const IMAGE_SCN_NO_DEFER_SPEC_EXC      = 0x00004000;
export const IMAGE_SCN_GPREL                  = 0x00008000;
export const IMAGE_SCN_MEM_FARDATA            = 0x00008000;
export const IMAGE_SCN_MEM_PURGEABLE          = 0x00020000;
export const IMAGE_SCN_MEM_16BIT              = 0x00020000;
export const IMAGE_SCN_MEM_LOCKED             = 0x00040000;
export const IMAGE_SCN_MEM_PRELOAD            = 0x00080000;
export const IMAGE_SCN_ALIGN_1BYTES           = 0x00100000;
export const IMAGE_SCN_ALIGN_2BYTES           = 0x00200000;
export const IMAGE_SCN_ALIGN_4BYTES           = 0x00300000;
export const IMAGE_SCN_ALIGN_8BYTES           = 0x00400000;
export const IMAGE_SCN_ALIGN_16BYTES          = 0x00500000;
export const IMAGE_SCN_ALIGN_32BYTES          = 0x00600000;
export const IMAGE_SCN_ALIGN_64BYTES          = 0x00700000;
export const IMAGE_SCN_ALIGN_128BYTES         = 0x00800000;
export const IMAGE_SCN_ALIGN_256BYTES         = 0x00900000;
export const IMAGE_SCN_ALIGN_512BYTES         = 0x00A00000;
export const IMAGE_SCN_ALIGN_1024BYTES        = 0x00B00000;
export const IMAGE_SCN_ALIGN_2048BYTES        = 0x00C00000;
export const IMAGE_SCN_ALIGN_4096BYTES        = 0x00D00000;
export const IMAGE_SCN_ALIGN_8192BYTES        = 0x00E00000;
export const IMAGE_SCN_ALIGN_MASK             = 0x00F00000;
export const IMAGE_SCN_LNK_NRELOC_OVFL        = 0x01000000;
export const IMAGE_SCN_MEM_DISCARDABLE        = 0x02000000;
export const IMAGE_SCN_MEM_NOT_CACHED         = 0x04000000;
export const IMAGE_SCN_MEM_NOT_PAGED          = 0x08000000;
export const IMAGE_SCN_MEM_SHARED             = 0x10000000;
export const IMAGE_SCN_MEM_EXECUTE            = 0x20000000;
export const IMAGE_SCN_MEM_READ               = 0x40000000;
export const IMAGE_SCN_MEM_WRITE              = 0x80000000;
export const IMAGE_SCN_SCALE_INDEX            = 0x00000001;

export const IMAGE_SIZEOF_SYMBOL = 18;

export const IMAGE_SYM_UNDEFINED              = 0;
export const IMAGE_SYM_ABSOLUTE               = -1;
export const IMAGE_SYM_DEBUG                  = -2;
export const IMAGE_SYM_SECTION_MAX            = 0xFEFF;
export const IMAGE_SYM_SECTION_MAX_EX         = MAXLONG;
export const IMAGE_SYM_TYPE_NULL              = 0x0000;
export const IMAGE_SYM_TYPE_VOID              = 0x0001;
export const IMAGE_SYM_TYPE_CHAR              = 0x0002;
export const IMAGE_SYM_TYPE_SHORT             = 0x0003;
export const IMAGE_SYM_TYPE_INT               = 0x0004;
export const IMAGE_SYM_TYPE_LONG              = 0x0005;
export const IMAGE_SYM_TYPE_FLOAT             = 0x0006;
export const IMAGE_SYM_TYPE_DOUBLE            = 0x0007;
export const IMAGE_SYM_TYPE_STRUCT            = 0x0008;
export const IMAGE_SYM_TYPE_UNION             = 0x0009;
export const IMAGE_SYM_TYPE_MOE               = 0x000B;
export const IMAGE_SYM_TYPE_BYTE              = 0x000C;
export const IMAGE_SYM_TYPE_WORD              = 0x000D;
export const IMAGE_SYM_TYPE_UINT              = 0x000E;
export const IMAGE_SYM_TYPE_DWORD             = 0x000F;
export const IMAGE_SYM_TYPE_PCODE             = 0x8000;
export const IMAGE_SYM_DTYPE_NULL             = 0;
export const IMAGE_SYM_DTYPE_POINTER          = 1;
export const IMAGE_SYM_DTYPE_FUNCTION         = 2;
export const IMAGE_SYM_DTYPE_ARRAY            = 3;
export const IMAGE_SYM_CLASS_END_OF_FUNCTION  = -1;
export const IMAGE_SYM_CLASS_NULL             = 0x0000;
export const IMAGE_SYM_CLASS_AUTOMATIC        = 0x0001;
export const IMAGE_SYM_CLASS_EXTERNAL         = 0x0002;
export const IMAGE_SYM_CLASS_STATIC           = 0x0003;
export const IMAGE_SYM_CLASS_REGISTER         = 0x0004;
export const IMAGE_SYM_CLASS_EXTERNAL_DEF     = 0x0005;
export const IMAGE_SYM_CLASS_LABEL            = 0x0006;
export const IMAGE_SYM_CLASS_UNDEFINED_LABEL  = 0x0007;
export const IMAGE_SYM_CLASS_MEMBER_OF_STRUCT = 0x0008;
export const IMAGE_SYM_CLASS_ARGUMENT         = 0x0009;
export const IMAGE_SYM_CLASS_MEMBER_OF_UNION  = 0x000B;
export const IMAGE_SYM_CLASS_UNION_TAG        = 0x000C;
export const IMAGE_SYM_CLASS_TYPE_DEFINITION  = 0x000D;
export const IMAGE_SYM_CLASS_UNDEFINED_STATIC = 0x000E;
export const IMAGE_SYM_CLASS_ENUM_TAG         = 0x000F;
export const IMAGE_SYM_CLASS_MEMBER_OF_ENUM   = 0x0010;
export const IMAGE_SYM_CLASS_REGISTER_PARAM   = 0x0011;
export const IMAGE_SYM_CLASS_BIT_FIELD        = 0x0012;
export const IMAGE_SYM_CLASS_FAR_EXTERNAL     = 0x0044;
export const IMAGE_SYM_CLASS_BLOCK            = 0x0064;
export const IMAGE_SYM_CLASS_FUNCTION         = 0x0065;
export const IMAGE_SYM_CLASS_END_OF_STRUCT    = 0x0066;
export const IMAGE_SYM_CLASS_FILE             = 0x0067;
export const IMAGE_SYM_CLASS_SECTION          = 0x0068;
export const IMAGE_SYM_CLASS_WEAK_EXTERNAL    = 0x0069;
export const IMAGE_SYM_CLASS_CLR_TOKEN        = 0x006B;

export const N_BTMASK = 0x000F;
export const N_TMASK  = 0x0030;
export const N_TMASK1 = 0x00C0;
export const N_TMASK2 = 0x00F0;
export const N_BTSHFT = 4;
export const N_TSHIFT = 2;

export const IMAGE_COMDAT_SELECT_NODUPLICATES = 1;
export const IMAGE_COMDAT_SELECT_ANY          = 2;
export const IMAGE_COMDAT_SELECT_SAME_SIZE    = 3;
export const IMAGE_COMDAT_SELECT_EXACT_MATCH  = 4;
export const IMAGE_COMDAT_SELECT_ASSOCIATIVE  = 5;
export const IMAGE_COMDAT_SELECT_LARGEST      = 6;
export const IMAGE_COMDAT_SELECT_NEWEST       = 7;

export const IMAGE_WEAK_EXTERN_SEARCH_NOLIBRARY = 1;
export const IMAGE_WEAK_EXTERN_SEARCH_LIBRARY   = 2;
export const IMAGE_WEAK_EXTERN_SEARCH_ALIAS     = 3;
export const IMAGE_WEAK_EXTERN_ANTI_DEPENDENCY  = 4;

export const IMAGE_REL_I386_ABSOLUTE                    = 0x0000;
export const IMAGE_REL_I386_DIR16                       = 0x0001;
export const IMAGE_REL_I386_REL16                       = 0x0002;
export const IMAGE_REL_I386_DIR32                       = 0x0006;
export const IMAGE_REL_I386_DIR32NB                     = 0x0007;
export const IMAGE_REL_I386_SEG12                       = 0x0009;
export const IMAGE_REL_I386_SECREL                      = 0x000B;
export const IMAGE_REL_I386_TOKEN                       = 0x000C;
export const IMAGE_REL_I386_SECREL7                     = 0x000D;
export const IMAGE_REL_I386_REL32                       = 0x0014;

export const IMAGE_REL_MIPS_ABSOLUTE                    = 0x0000;
export const IMAGE_REL_MIPS_REFHALF                     = 0x0001;
export const IMAGE_REL_MIPS_REFWORD                     = 0x0002;
export const IMAGE_REL_MIPS_JMPADDR                     = 0x0003;
export const IMAGE_REL_MIPS_REFHI                       = 0x0004;
export const IMAGE_REL_MIPS_REFLO                       = 0x0005;
export const IMAGE_REL_MIPS_GPREL                       = 0x0006;
export const IMAGE_REL_MIPS_LITERAL                     = 0x0007;
export const IMAGE_REL_MIPS_SECREL                      = 0x000B;
export const IMAGE_REL_MIPS_SECRELLO                    = 0x000C;
export const IMAGE_REL_MIPS_SECRELHI                    = 0x000D;
export const IMAGE_REL_MIPS_TOKEN                       = 0x000E;
export const IMAGE_REL_MIPS_JMPADDR16                   = 0x0010;
export const IMAGE_REL_MIPS_REFWORDNB                   = 0x0022;
export const IMAGE_REL_MIPS_PAIR                        = 0x0025;

export const IMAGE_REL_ALPHA_ABSOLUTE                   = 0x0000;
export const IMAGE_REL_ALPHA_REFLONG                    = 0x0001;
export const IMAGE_REL_ALPHA_REFQUAD                    = 0x0002;
export const IMAGE_REL_ALPHA_GPREL32                    = 0x0003;
export const IMAGE_REL_ALPHA_LITERAL                    = 0x0004;
export const IMAGE_REL_ALPHA_LITUSE                     = 0x0005;
export const IMAGE_REL_ALPHA_GPDISP                     = 0x0006;
export const IMAGE_REL_ALPHA_BRADDR                     = 0x0007;
export const IMAGE_REL_ALPHA_HINT                       = 0x0008;
export const IMAGE_REL_ALPHA_INLINE_REFLONG             = 0x0009;
export const IMAGE_REL_ALPHA_REFLO                      = 0x000B;
export const IMAGE_REL_ALPHA_PAIR                       = 0x000C;
export const IMAGE_REL_ALPHA_MATCH                      = 0x000D;
export const IMAGE_REL_ALPHA_SECTION                    = 0x000E;
export const IMAGE_REL_ALPHA_SECREL                     = 0x000F;
export const IMAGE_REL_ALPHA_REFLONGNB                  = 0x0010;
export const IMAGE_REL_ALPHA_SECRELLO                   = 0x0011;
export const IMAGE_REL_ALPHA_SECRELHI                   = 0x0012;
export const IMAGE_REL_ALPHA_REFQ3                      = 0x0013;
export const IMAGE_REL_ALPHA_REFQ2                      = 0x0014;
export const IMAGE_REL_ALPHA_REFQ1                      = 0x0015;
export const IMAGE_REL_ALPHA_GPRELLO                    = 0x0016;
export const IMAGE_REL_ALPHA_GPRELHI                    = 0x0017;

export const IMAGE_REL_PPC_ABSOLUTE                     = 0x0000;
export const IMAGE_REL_PPC_ADDR64                       = 0x0001;
export const IMAGE_REL_PPC_ADDR32                       = 0x0002;
export const IMAGE_REL_PPC_ADDR24                       = 0x0003;
export const IMAGE_REL_PPC_ADDR16                       = 0x0004;
export const IMAGE_REL_PPC_ADDR14                       = 0x0005;
export const IMAGE_REL_PPC_REL24                        = 0x0006;
export const IMAGE_REL_PPC_REL14                        = 0x0007;
export const IMAGE_REL_PPC_TOCREL16                     = 0x0008;
export const IMAGE_REL_PPC_TOCREL14                     = 0x0009;
export const IMAGE_REL_PPC_SECREL                       = 0x000B;
export const IMAGE_REL_PPC_SECTION                      = 0x000C;
export const IMAGE_REL_PPC_IFGLUE                       = 0x000D;
export const IMAGE_REL_PPC_IMGLUE                       = 0x000E;
export const IMAGE_REL_PPC_SECREL16                     = 0x000F;
export const IMAGE_REL_PPC_REFHI                        = 0x0010;
export const IMAGE_REL_PPC_REFLO                        = 0x0011;
export const IMAGE_REL_PPC_PAIR                         = 0x0012;
export const IMAGE_REL_PPC_SECRELLO                     = 0x0013;
export const IMAGE_REL_PPC_SECRELHI                     = 0x0014;
export const IMAGE_REL_PPC_GPREL                        = 0x0015;
export const IMAGE_REL_PPC_TOKEN                        = 0x0016;
export const IMAGE_REL_PPC_TYPEMASK                     = 0x00FF;
export const IMAGE_REL_PPC_NEG                          = 0x0100;
export const IMAGE_REL_PPC_BRTAKEN                      = 0x0200;
export const IMAGE_REL_PPC_BRNTAKEN                     = 0x0400;
export const IMAGE_REL_PPC_TOCDEFN                      = 0x0800;

export const IMAGE_REL_SH3_ABSOLUTE                     = 0x0000;
export const IMAGE_REL_SH3_DIRECT16                     = 0x0001;
export const IMAGE_REL_SH3_DIRECT32                     = 0x0002;
export const IMAGE_REL_SH3_DIRECT8                      = 0x0003;
export const IMAGE_REL_SH3_DIRECT8_WORD                 = 0x0004;
export const IMAGE_REL_SH3_DIRECT8_LONG                 = 0x0005;
export const IMAGE_REL_SH3_DIRECT4                      = 0x0006;
export const IMAGE_REL_SH3_DIRECT4_WORD                 = 0x0007;
export const IMAGE_REL_SH3_DIRECT4_LONG                 = 0x0008;
export const IMAGE_REL_SH3_PCREL8_WORD                  = 0x0009;
export const IMAGE_REL_SH3_PCREL12_WORD                 = 0x000B;
export const IMAGE_REL_SH3_STARTOF_SECTION              = 0x000C;
export const IMAGE_REL_SH3_SIZEOF_SECTION               = 0x000D;
export const IMAGE_REL_SH3_SECTION                      = 0x000E;
export const IMAGE_REL_SH3_SECREL                       = 0x000F;
export const IMAGE_REL_SH3_DIRECT32_NB                  = 0x0010;
export const IMAGE_REL_SH3_GPREL4_LONG                  = 0x0011;
export const IMAGE_REL_SH3_TOKEN                        = 0x0012;
export const IMAGE_REL_SHM_PCRELPT                      = 0x0013;
export const IMAGE_REL_SHM_REFLO                        = 0x0014;
export const IMAGE_REL_SHM_REFHALF                      = 0x0015;
export const IMAGE_REL_SHM_RELLO                        = 0x0016;
export const IMAGE_REL_SHM_RELHALF                      = 0x0017;
export const IMAGE_REL_SHM_PAIR                         = 0x0018;
export const IMAGE_REL_SH_NOMODE                        = 0x8000;

export const IMAGE_REL_ARM_ABSOLUTE                     = 0x0000;
export const IMAGE_REL_ARM_ADDR32                       = 0x0001;
export const IMAGE_REL_ARM_ADDR32NB                     = 0x0002;
export const IMAGE_REL_ARM_BRANCH24                     = 0x0003;
export const IMAGE_REL_ARM_BRANCH11                     = 0x0004;
export const IMAGE_REL_ARM_TOKEN                        = 0x0005;
export const IMAGE_REL_ARM_GPREL12                      = 0x0006;
export const IMAGE_REL_ARM_GPREL7                       = 0x0007;
export const IMAGE_REL_ARM_BLX24                        = 0x0008;
export const IMAGE_REL_ARM_BLX11                        = 0x0009;
export const IMAGE_REL_ARM_SECTION                      = 0x000E;
export const IMAGE_REL_ARM_SECREL                       = 0x000F;
export const IMAGE_REL_ARM_MOV32A                       = 0x0010;
export const IMAGE_REL_ARM_MOV32                        = 0x0010;
export const IMAGE_REL_ARM_MOV32T                       = 0x0011;
export const IMAGE_REL_THUMB_MOV32                      = 0x0011;
export const IMAGE_REL_ARM_BRANCH20T                    = 0x0012;
export const IMAGE_REL_THUMB_BRANCH20                   = 0x0012;
export const IMAGE_REL_ARM_BRANCH24T                    = 0x0014;
export const IMAGE_REL_THUMB_BRANCH24                   = 0x0014;
export const IMAGE_REL_ARM_BLX23T                       = 0x0015;
export const IMAGE_REL_THUMB_BLX23                      = 0x0015;

export const IMAGE_REL_AM_ABSOLUTE                      = 0x0000;
export const IMAGE_REL_AM_ADDR32                        = 0x0001;
export const IMAGE_REL_AM_ADDR32NB                      = 0x0002;
export const IMAGE_REL_AM_CALL32                        = 0x0003;
export const IMAGE_REL_AM_FUNCINFO                      = 0x0004;
export const IMAGE_REL_AM_REL32_1                       = 0x0005;
export const IMAGE_REL_AM_REL32_2                       = 0x0006;
export const IMAGE_REL_AM_SECREL                        = 0x0007;
export const IMAGE_REL_AM_SECTION                       = 0x0008;
export const IMAGE_REL_AM_TOKEN                         = 0x0009;

export const IMAGE_REL_ARM64_ABSOLUTE                   = 0x0000;
export const IMAGE_REL_ARM64_ADDR32                     = 0x0001;
export const IMAGE_REL_ARM64_ADDR32NB                   = 0x0002;
export const IMAGE_REL_ARM64_BRANCH26                   = 0x0003;
export const IMAGE_REL_ARM64_PAGEBASE_REL21             = 0x0004;
export const IMAGE_REL_ARM64_REL21                      = 0x0005;
export const IMAGE_REL_ARM64_PAGEOFFSET_12A             = 0x0006;
export const IMAGE_REL_ARM64_PAGEOFFSET_12L             = 0x0007;
export const IMAGE_REL_ARM64_SECREL                     = 0x0008;
export const IMAGE_REL_ARM64_SECREL_LOW12A              = 0x0009;
export const IMAGE_REL_ARM64_SECREL_LOW12L              = 0x000B;
export const IMAGE_REL_ARM64_TOKEN                      = 0x000C;
export const IMAGE_REL_ARM64_SECTION                    = 0x000D;
export const IMAGE_REL_ARM64_ADDR64                     = 0x000E;
export const IMAGE_REL_ARM64_BRANCH19                   = 0x000F;

export const IMAGE_REL_AMD64_ABSOLUTE                   = 0x0000;
export const IMAGE_REL_AMD64_ADDR64                     = 0x0001;
export const IMAGE_REL_AMD64_ADDR32                     = 0x0002;
export const IMAGE_REL_AMD64_ADDR32NB                   = 0x0003;
export const IMAGE_REL_AMD64_REL32                      = 0x0004;
export const IMAGE_REL_AMD64_REL32_1                    = 0x0005;
export const IMAGE_REL_AMD64_REL32_2                    = 0x0006;
export const IMAGE_REL_AMD64_REL32_3                    = 0x0007;
export const IMAGE_REL_AMD64_REL32_4                    = 0x0008;
export const IMAGE_REL_AMD64_REL32_5                    = 0x0009;
export const IMAGE_REL_AMD64_SECREL                     = 0x000B;
export const IMAGE_REL_AMD64_SECREL7                    = 0x000C;
export const IMAGE_REL_AMD64_TOKEN                      = 0x000D;
export const IMAGE_REL_AMD64_SREL32                     = 0x000E;
export const IMAGE_REL_AMD64_PAIR                       = 0x000F;
export const IMAGE_REL_AMD64_SSPAN32                    = 0x0010;
export const IMAGE_REL_AMD64_EHANDLER                   = 0x0011;
export const IMAGE_REL_AMD64_IMPORT_BR                  = 0x0012;
export const IMAGE_REL_AMD64_IMPORT_CALL                = 0x0013;
export const IMAGE_REL_AMD64_CFG_BR                     = 0x0014;
export const IMAGE_REL_AMD64_CFG_BR_REX                 = 0x0015;
export const IMAGE_REL_AMD64_CFG_CALL                   = 0x0016;
export const IMAGE_REL_AMD64_INDIR_BR                   = 0x0017;
export const IMAGE_REL_AMD64_INDIR_BR_REX               = 0x0018;
export const IMAGE_REL_AMD64_INDIR_CALL                 = 0x0019;
export const IMAGE_REL_AMD64_INDIR_BR_SWITCHTABLE_FIRST = 0x0020;
export const IMAGE_REL_AMD64_INDIR_BR_SWITCHTABLE_LAST  = 0x002F;

export const IMAGE_REL_IA64_ABSOLUTE                    = 0x0000;
export const IMAGE_REL_IA64_IMM14                       = 0x0001;
export const IMAGE_REL_IA64_IMM22                       = 0x0002;
export const IMAGE_REL_IA64_IMM64                       = 0x0003;
export const IMAGE_REL_IA64_DIR32                       = 0x0004;
export const IMAGE_REL_IA64_DIR64                       = 0x0005;
export const IMAGE_REL_IA64_PCREL21B                    = 0x0006;
export const IMAGE_REL_IA64_PCREL21M                    = 0x0007;
export const IMAGE_REL_IA64_PCREL21F                    = 0x0008;
export const IMAGE_REL_IA64_GPREL22                     = 0x0009;
export const IMAGE_REL_IA64_SECTION                     = 0x000B;
export const IMAGE_REL_IA64_SECREL22                    = 0x000C;
export const IMAGE_REL_IA64_SECREL64I                   = 0x000D;
export const IMAGE_REL_IA64_SECREL32                    = 0x000E;
export const IMAGE_REL_IA64_DIR32NB                     = 0x0010;
export const IMAGE_REL_IA64_SREL14                      = 0x0011;
export const IMAGE_REL_IA64_SREL22                      = 0x0012;
export const IMAGE_REL_IA64_SREL32                      = 0x0013;
export const IMAGE_REL_IA64_UREL32                      = 0x0014;
export const IMAGE_REL_IA64_PCREL60X                    = 0x0015;
export const IMAGE_REL_IA64_PCREL60B                    = 0x0016;
export const IMAGE_REL_IA64_PCREL60F                    = 0x0017;
export const IMAGE_REL_IA64_PCREL60I                    = 0x0018;
export const IMAGE_REL_IA64_PCREL60M                    = 0x0019;
export const IMAGE_REL_IA64_TOKEN                       = 0x001B;
export const IMAGE_REL_IA64_GPREL32                     = 0x001C;
export const IMAGE_REL_IA64_ADDEND                      = 0x001F;

export const IMAGE_REL_CEF_ABSOLUTE                     = 0x0000;
export const IMAGE_REL_CEF_ADDR32                       = 0x0001;
export const IMAGE_REL_CEF_ADDR64                       = 0x0002;
export const IMAGE_REL_CEF_ADDR32NB                     = 0x0003;
export const IMAGE_REL_CEF_SECTION                      = 0x0004;
export const IMAGE_REL_CEF_SECREL                       = 0x0005;
export const IMAGE_REL_CEF_TOKEN                        = 0x0006;

export const IMAGE_REL_CEE_ABSOLUTE                     = 0x0000;
export const IMAGE_REL_CEE_ADDR32                       = 0x0001;
export const IMAGE_REL_CEE_ADDR64                       = 0x0002;
export const IMAGE_REL_CEE_ADDR32NB                     = 0x0003;
export const IMAGE_REL_CEE_SECTION                      = 0x0004;
export const IMAGE_REL_CEE_SECREL                       = 0x0005;
export const IMAGE_REL_CEE_TOKEN                        = 0x0006;

export const IMAGE_REL_M32R_ABSOLUTE                    = 0x0000;
export const IMAGE_REL_M32R_ADDR32                      = 0x0001;
export const IMAGE_REL_M32R_ADDR32NB                    = 0x0002;
export const IMAGE_REL_M32R_ADDR24                      = 0x0003;
export const IMAGE_REL_M32R_GPREL16                     = 0x0004;
export const IMAGE_REL_M32R_PCREL24                     = 0x0005;
export const IMAGE_REL_M32R_PCREL16                     = 0x0006;
export const IMAGE_REL_M32R_PCREL8                      = 0x0007;
export const IMAGE_REL_M32R_REFHALF                     = 0x0008;
export const IMAGE_REL_M32R_REFHI                       = 0x0009;
export const IMAGE_REL_M32R_PAIR                        = 0x000B;
export const IMAGE_REL_M32R_SECTION                     = 0x000C;
export const IMAGE_REL_M32R_SECREL32                    = 0x000D;
export const IMAGE_REL_M32R_TOKEN                       = 0x000E;

export const IMAGE_REL_EBC_ABSOLUTE                     = 0x0000;
export const IMAGE_REL_EBC_ADDR32NB                     = 0x0001;
export const IMAGE_REL_EBC_REL32                        = 0x0002;
export const IMAGE_REL_EBC_SECTION                      = 0x0003;
export const IMAGE_REL_EBC_SECREL                       = 0x0004;

export const EMARCH_ENC_I17_IMM7B_INST_WORD_X      = 3;
export const EMARCH_ENC_I17_IMM7B_SIZE_X           = 7;
export const EMARCH_ENC_I17_IMM7B_INST_WORD_POS_X  = 4;
export const EMARCH_ENC_I17_IMM7B_VAL_POS_X        = 0;
export const EMARCH_ENC_I17_IMM9D_INST_WORD_X      = 3;
export const EMARCH_ENC_I17_IMM9D_SIZE_X           = 9;
export const EMARCH_ENC_I17_IMM9D_INST_WORD_POS_X  = 18;
export const EMARCH_ENC_I17_IMM9D_VAL_POS_X        = 7;
export const EMARCH_ENC_I17_IMM5C_INST_WORD_X      = 3;
export const EMARCH_ENC_I17_IMM5C_SIZE_X           = 5;
export const EMARCH_ENC_I17_IMM5C_INST_WORD_POS_X  = 13;
export const EMARCH_ENC_I17_IMM5C_VAL_POS_X        = 16;
export const EMARCH_ENC_I17_IC_INST_WORD_X         = 3;
export const EMARCH_ENC_I17_IC_SIZE_X              = 1;
export const EMARCH_ENC_I17_IC_INST_WORD_POS_X     = 12;
export const EMARCH_ENC_I17_IC_VAL_POS_X           = 21;
export const EMARCH_ENC_I17_IMM41a_INST_WORD_X     = 1;
export const EMARCH_ENC_I17_IMM41a_SIZE_X          = 10;
export const EMARCH_ENC_I17_IMM41a_INST_WORD_POS_X = 14;
export const EMARCH_ENC_I17_IMM41a_VAL_POS_X       = 22;
export const EMARCH_ENC_I17_IMM41b_INST_WORD_X     = 1;
export const EMARCH_ENC_I17_IMM41b_SIZE_X          = 8;
export const EMARCH_ENC_I17_IMM41b_INST_WORD_POS_X = 24;
export const EMARCH_ENC_I17_IMM41b_VAL_POS_X       = 32;
export const EMARCH_ENC_I17_IMM41c_INST_WORD_X     = 2;
export const EMARCH_ENC_I17_IMM41c_SIZE_X          = 23;
export const EMARCH_ENC_I17_IMM41c_INST_WORD_POS_X = 0;
export const EMARCH_ENC_I17_IMM41c_VAL_POS_X       = 40;
export const EMARCH_ENC_I17_SIGN_INST_WORD_X       = 3;
export const EMARCH_ENC_I17_SIGN_SIZE_X            = 1;
export const EMARCH_ENC_I17_SIGN_INST_WORD_POS_X   = 27;
export const EMARCH_ENC_I17_SIGN_VAL_POS_X         = 63;
export const X3_OPCODE_INST_WORD_X                 = 3;
export const X3_OPCODE_SIZE_X                      = 4;
export const X3_OPCODE_INST_WORD_POS_X             = 28;
export const X3_OPCODE_SIGN_VAL_POS_X              = 0;
export const X3_I_INST_WORD_X                      = 3;
export const X3_I_SIZE_X                           = 1;
export const X3_I_INST_WORD_POS_X                  = 27;
export const X3_I_SIGN_VAL_POS_X                   = 59;
export const X3_D_WH_INST_WORD_X                   = 3;
export const X3_D_WH_SIZE_X                        = 3;
export const X3_D_WH_INST_WORD_POS_X               = 24;
export const X3_D_WH_SIGN_VAL_POS_X                = 0;
export const X3_IMM20_INST_WORD_X                  = 3;
export const X3_IMM20_SIZE_X                       = 20;
export const X3_IMM20_INST_WORD_POS_X              = 4;
export const X3_IMM20_SIGN_VAL_POS_X               = 0;
export const X3_IMM39_1_INST_WORD_X                = 2;
export const X3_IMM39_1_SIZE_X                     = 23;
export const X3_IMM39_1_INST_WORD_POS_X            = 0;
export const X3_IMM39_1_SIGN_VAL_POS_X             = 36;
export const X3_IMM39_2_INST_WORD_X                = 1;
export const X3_IMM39_2_SIZE_X                     = 16;
export const X3_IMM39_2_INST_WORD_POS_X            = 16;
export const X3_IMM39_2_SIGN_VAL_POS_X             = 20;
export const X3_P_INST_WORD_X                      = 3;
export const X3_P_SIZE_X                           = 4;
export const X3_P_INST_WORD_POS_X                  = 0;
export const X3_P_SIGN_VAL_POS_X                   = 0;
export const X3_TMPLT_INST_WORD_X                  = 0;
export const X3_TMPLT_SIZE_X                       = 4;
export const X3_TMPLT_INST_WORD_POS_X              = 0;
export const X3_TMPLT_SIGN_VAL_POS_X               = 0;
export const X3_BTYPE_QP_INST_WORD_X               = 2;
export const X3_BTYPE_QP_SIZE_X                    = 9;
export const X3_BTYPE_QP_INST_WORD_POS_X           = 23;
export const X3_BTYPE_QP_INST_VAL_POS_X            = 0;
export const X3_EMPTY_INST_WORD_X                  = 1;
export const X3_EMPTY_SIZE_X                       = 2;
export const X3_EMPTY_INST_WORD_POS_X              = 14;
export const X3_EMPTY_INST_VAL_POS_X               = 0;

export const IMAGE_REL_BASED_ABSOLUTE           = 0;
export const IMAGE_REL_BASED_HIGH               = 1;
export const IMAGE_REL_BASED_LOW                = 2;
export const IMAGE_REL_BASED_HIGHLOW            = 3;
export const IMAGE_REL_BASED_HIGHADJ            = 4;
export const IMAGE_REL_BASED_MACHINE_SPECIFIC_5 = 5;
export const IMAGE_REL_BASED_RESERVED           = 6;
export const IMAGE_REL_BASED_MACHINE_SPECIFIC_7 = 7;
export const IMAGE_REL_BASED_MACHINE_SPECIFIC_8 = 8;
export const IMAGE_REL_BASED_MACHINE_SPECIFIC_9 = 9;
export const IMAGE_REL_BASED_DIR64              = 10;

export const IMAGE_REL_BASED_IA64_IMM64         = 9;
export const IMAGE_REL_BASED_MIPS_JMPADDR       = 5;
export const IMAGE_REL_BASED_MIPS_JMPADDR16     = 9;
export const IMAGE_REL_BASED_ARM_MOV32          = 5;
export const IMAGE_REL_BASED_THUMB_MOV32        = 7;
export const IMAGE_ARCHIVE_START_SIZE           = 8;
export const IMAGE_ARCHIVE_START                = "!<arch>\n";
export const IMAGE_ARCHIVE_END                  = "`\n";
export const IMAGE_ARCHIVE_PAD                  = "\n";
export const IMAGE_ARCHIVE_LINKER_MEMBER        = "/               ";
export const IMAGE_ARCHIVE_LONGNAMES_MEMBER     = "//              ";
export const IMAGE_ARCHIVE_HYBRIDMAP_MEMBER     = "/<HYBRIDMAP>/   ";

export const IMAGE_SIZEOF_ARCHIVE_MEMBER_HDR    = 60;
export const IMAGE_ORDINAL_FLAG64               = 0x8000000000000000;
export const IMAGE_ORDINAL_FLAG32               = 0x80000000;
export const IMAGE_ORDINAL_FLAG                 = isArch64 ? IMAGE_ORDINAL_FLAG64 : IMAGE_ORDINAL_FLAG32;

export const IMAGE_RESOURCE_NAME_IS_STRING                                          = 0x80000000;
export const IMAGE_RESOURCE_DATA_IS_DIRECTORY                                       = 0x80000000;

export const IMAGE_DYNAMIC_RELOCATION_GUARD_RF_PROLOGUE                             = 0x00000001;
export const IMAGE_DYNAMIC_RELOCATION_GUARD_RF_EPILOGUE                             = 0x00000002;
export const IMAGE_DYNAMIC_RELOCATION_GUARD_IMPORT_CONTROL_TRANSFER                 = 0x00000003;
export const IMAGE_DYNAMIC_RELOCATION_GUARD_INDIR_CONTROL_TRANSFER                  = 0x00000004;
export const IMAGE_DYNAMIC_RELOCATION_GUARD_SWITCHTABLE_BRANCH                      = 0x00000005;

export const IMAGE_HOT_PATCH_BASE_OBLIGATORY                                        = 0x00000001;
export const IMAGE_HOT_PATCH_BASE_CAN_ROLL_BACK                                     = 0x00000002;
export const IMAGE_HOT_PATCH_CHUNK_INVERSE                                          = 0x80000000;
export const IMAGE_HOT_PATCH_CHUNK_OBLIGATORY                                       = 0x40000000;
export const IMAGE_HOT_PATCH_CHUNK_RESERVED                                         = 0x3FF03000;
export const IMAGE_HOT_PATCH_CHUNK_TYPE                                             = 0x000FC000;
export const IMAGE_HOT_PATCH_CHUNK_SOURCE_RVA                                       = 0x00008000;
export const IMAGE_HOT_PATCH_CHUNK_TARGET_RVA                                       = 0x00004000;
export const IMAGE_HOT_PATCH_CHUNK_SIZE                                             = 0x00000FFF;
export const IMAGE_HOT_PATCH_NONE                                                   = 0x00000000;
export const IMAGE_HOT_PATCH_FUNCTION                                               = 0x0001C000;
export const IMAGE_HOT_PATCH_ABSOLUTE                                               = 0x0002C000;
export const IMAGE_HOT_PATCH_REL32                                                  = 0x0003C000;
export const IMAGE_HOT_PATCH_CALL_TARGET                                            = 0x00044000;
export const IMAGE_HOT_PATCH_INDIRECT                                               = 0x0005C000;
export const IMAGE_HOT_PATCH_NO_CALL_TARGET                                         = 0x00064000;
export const IMAGE_HOT_PATCH_DYNAMIC_VALUE                                          = 0x00078000;

export const IMAGE_GUARD_CF_INSTRUMENTED                                            = 0x00000100;
export const IMAGE_GUARD_CFW_INSTRUMENTED                                           = 0x00000200;
export const IMAGE_GUARD_CF_FUNCTION_TABLE_PRESENT                                  = 0x00000400;
export const IMAGE_GUARD_SECURITY_COOKIE_UNUSED                                     = 0x00000800;
export const IMAGE_GUARD_PROTECT_DELAYLOAD_IAT                                      = 0x00001000;
export const IMAGE_GUARD_DELAYLOAD_IAT_IN_ITS_OWN_SECTION                           = 0x00002000;
export const IMAGE_GUARD_CF_EXPORT_SUPPRESSION_INFO_PRESENT                         = 0x00004000;
export const IMAGE_GUARD_CF_ENABLE_EXPORT_SUPPRESSION                               = 0x00008000;
export const IMAGE_GUARD_CF_LONGJUMP_TABLE_PRESENT                                  = 0x00010000;
export const IMAGE_GUARD_RF_INSTRUMENTED                                            = 0x00020000;
export const IMAGE_GUARD_RF_ENABLE                                                  = 0x00040000;
export const IMAGE_GUARD_RF_STRICT                                                  = 0x00080000;
export const IMAGE_GUARD_RETPOLINE_PRESENT                                          = 0x00100000;
export const IMAGE_GUARD_EH_CONTINUATION_TABLE_PRESENT                              = 0x00400000;
export const IMAGE_GUARD_CF_FUNCTION_TABLE_SIZE_MASK                                = 0xF0000000;
export const IMAGE_GUARD_CF_FUNCTION_TABLE_SIZE_SHIFT                               = 28;
export const IMAGE_GUARD_FLAG_FID_SUPPRESSED                                        = 0x01;
export const IMAGE_GUARD_FLAG_EXPORT_SUPPRESSED                                     = 0x02;

export const IMAGE_ENCLAVE_LONG_ID_LENGTH                                           = ENCLAVE_LONG_ID_LENGTH;
export const IMAGE_ENCLAVE_SHORT_ID_LENGTH                                          = ENCLAVE_SHORT_ID_LENGTH;
// export const IMAGE_ENCLAVE_MINIMUM_CONFIG_SIZE                                   = FIELD_OFFSET(IMAGE_ENCLAVE_CONFIG, EnclaveFlags);
export const IMAGE_ENCLAVE_POLICY_DEBUGGABLE                                        = 0x00000001;
export const IMAGE_ENCLAVE_FLAG_PRIMARY_IMAGE                                       = 0x00000001;
export const IMAGE_ENCLAVE_IMPORT_MATCH_NONE                                        = 0x00000000;
export const IMAGE_ENCLAVE_IMPORT_MATCH_UNIQUE_ID                                   = 0x00000001;
export const IMAGE_ENCLAVE_IMPORT_MATCH_AUTHOR_ID                                   = 0x00000002;
export const IMAGE_ENCLAVE_IMPORT_MATCH_FAMILY_ID                                   = 0x00000003;
export const IMAGE_ENCLAVE_IMPORT_MATCH_IMAGE_ID                                    = 0x00000004;

export const IMAGE_DEBUG_TYPE_UNKNOWN                                               = 0;
export const IMAGE_DEBUG_TYPE_COFF                                                  = 1;
export const IMAGE_DEBUG_TYPE_CODEVIEW                                              = 2;
export const IMAGE_DEBUG_TYPE_FPO                                                   = 3;
export const IMAGE_DEBUG_TYPE_MISC                                                  = 4;
export const IMAGE_DEBUG_TYPE_EXCEPTION                                             = 5;
export const IMAGE_DEBUG_TYPE_FIXUP                                                 = 6;
export const IMAGE_DEBUG_TYPE_OMAP_TO_SRC                                           = 7;
export const IMAGE_DEBUG_TYPE_OMAP_FROM_SRC                                         = 8;
export const IMAGE_DEBUG_TYPE_BORLAND                                               = 9;
export const IMAGE_DEBUG_TYPE_RESERVED10                                            = 10;
export const IMAGE_DEBUG_TYPE_CLSID                                                 = 11;
export const IMAGE_DEBUG_TYPE_VC_FEATURE                                            = 12;
export const IMAGE_DEBUG_TYPE_POGO                                                  = 13;
export const IMAGE_DEBUG_TYPE_ILTCG                                                 = 14;
export const IMAGE_DEBUG_TYPE_MPX                                                   = 15;
export const IMAGE_DEBUG_TYPE_REPRO                                                 = 16;
export const IMAGE_DEBUG_TYPE_EX_DLLCHARACTERISTICS                                 = 20;

export const IMAGE_DLLCHARACTERISTICS_EX_CET_COMPAT                                 = 0x01;
export const IMAGE_DLLCHARACTERISTICS_EX_CET_COMPAT_STRICT_MODE                     = 0x02;
export const IMAGE_DLLCHARACTERISTICS_EX_CET_SET_CONTEXT_IP_VALIDATION_RELAXED_MODE = 0x04;
export const IMAGE_DLLCHARACTERISTICS_EX_CET_DYNAMIC_APIS_ALLOW_IN_PROC             = 0x08;
export const IMAGE_DLLCHARACTERISTICS_EX_CET_RESERVED_1                             = 0x10;
export const IMAGE_DLLCHARACTERISTICS_EX_CET_RESERVED_2                             = 0x20;

export const FRAME_FPO                                                              = 0;
export const FRAME_TRAP                                                             = 1;
export const FRAME_TSS                                                              = 2;
export const FRAME_NONFPO                                                           = 3;
export const SIZEOF_RFPO_DATA                                                       = 16;
export const IMAGE_DEBUG_MISC_EXENAME                                               = 1;

export const IMAGE_SEPARATE_DEBUG_SIGNATURE                                         = 0x4944;
export const NON_PAGED_DEBUG_SIGNATURE                                              = 0x494E;
// export const IMAGE_SEPARATE_DEBUG_SIGNATURE                                      = 0x4449;	// mac
// export const NON_PAGED_DEBUG_SIGNATURE                                           = 0x4E49;
export const IMAGE_SEPARATE_DEBUG_FLAGS_MASK                                        = 0x8000;
export const IMAGE_SEPARATE_DEBUG_MISMATCH                                          = 0x8000;

export const IMPORT_OBJECT_HDR_SIG2 = 0xffff;

export const RTL_RUN_ONCE_CHECK_ONLY        = 0x00000001;
export const RTL_RUN_ONCE_ASYNC             = 0x00000002;
export const RTL_RUN_ONCE_INIT_FAILED       = 0x00000004;
export const RTL_RUN_ONCE_CTX_RESERVED_BITS = 2;

export const FAST_FAIL_LEGACY_GS_VIOLATION              = 0;
export const FAST_FAIL_VTGUARD_CHECK_FAILURE            = 1;
export const FAST_FAIL_STACK_COOKIE_CHECK_FAILURE       = 2;
export const FAST_FAIL_CORRUPT_LIST_ENTRY               = 3;
export const FAST_FAIL_INCORRECT_STACK                  = 4;
export const FAST_FAIL_INVALID_ARG                      = 5;
export const FAST_FAIL_GS_COOKIE_INIT                   = 6;
export const FAST_FAIL_FATAL_APP_EXIT                   = 7;
export const FAST_FAIL_RANGE_CHECK_FAILURE              = 8;
export const FAST_FAIL_UNSAFE_REGISTRY_ACCESS           = 9;
export const FAST_FAIL_GUARD_ICALL_CHECK_FAILURE        = 10;
export const FAST_FAIL_GUARD_WRITE_CHECK_FAILURE        = 11;
export const FAST_FAIL_INVALID_FIBER_SWITCH             = 12;
export const FAST_FAIL_INVALID_SET_OF_CONTEXT           = 13;
export const FAST_FAIL_INVALID_REFERENCE_COUNT          = 14;
export const FAST_FAIL_INVALID_JUMP_BUFFER              = 18;
export const FAST_FAIL_MRDATA_MODIFIED                  = 19;
export const FAST_FAIL_CERTIFICATION_FAILURE            = 20;
export const FAST_FAIL_INVALID_EXCEPTION_CHAIN          = 21;
export const FAST_FAIL_CRYPTO_LIBRARY                   = 22;
export const FAST_FAIL_INVALID_CALL_IN_DLL_CALLOUT      = 23;
export const FAST_FAIL_INVALID_IMAGE_BASE               = 24;
export const FAST_FAIL_DLOAD_PROTECTION_FAILURE         = 25;
export const FAST_FAIL_UNSAFE_EXTENSION_CALL            = 26;
export const FAST_FAIL_DEPRECATED_SERVICE_INVOKED       = 27;
export const FAST_FAIL_INVALID_BUFFER_ACCESS            = 28;
export const FAST_FAIL_INVALID_BALANCED_TREE            = 29;
export const FAST_FAIL_INVALID_NEXT_THREAD              = 30;
export const FAST_FAIL_GUARD_ICALL_CHECK_SUPPRESSED     = 31;
export const FAST_FAIL_APCS_DISABLED                    = 32;
export const FAST_FAIL_INVALID_IDLE_STATE               = 33;
export const FAST_FAIL_MRDATA_PROTECTION_FAILURE        = 34;
export const FAST_FAIL_UNEXPECTED_HEAP_EXCEPTION        = 35;
export const FAST_FAIL_INVALID_LOCK_STATE               = 36;
export const FAST_FAIL_GUARD_JUMPTABLE                  = 37;
export const FAST_FAIL_INVALID_LONGJUMP_TARGET          = 38;
export const FAST_FAIL_INVALID_DISPATCH_CONTEXT         = 39;
export const FAST_FAIL_INVALID_THREAD                   = 40;
export const FAST_FAIL_INVALID_SYSCALL_NUMBER           = 41;
export const FAST_FAIL_INVALID_FILE_OPERATION           = 42;
export const FAST_FAIL_LPAC_ACCESS_DENIED               = 43;
export const FAST_FAIL_GUARD_SS_FAILURE                 = 44;
export const FAST_FAIL_LOADER_CONTINUITY_FAILURE        = 45;
export const FAST_FAIL_GUARD_EXPORT_SUPPRESSION_FAILURE = 46;
export const FAST_FAIL_INVALID_CONTROL_STACK            = 47;
export const FAST_FAIL_SET_CONTEXT_DENIED               = 48;
export const FAST_FAIL_INVALID_IAT                      = 49;
export const FAST_FAIL_HEAP_METADATA_CORRUPTION         = 50;
export const FAST_FAIL_PAYLOAD_RESTRICTION_VIOLATION    = 51;
export const FAST_FAIL_LOW_LABEL_ACCESS_DENIED          = 52;
export const FAST_FAIL_ENCLAVE_CALL_FAILURE             = 53;
export const FAST_FAIL_UNHANDLED_LSS_EXCEPTON           = 54;
export const FAST_FAIL_ADMINLESS_ACCESS_DENIED          = 55;
export const FAST_FAIL_UNEXPECTED_CALL                  = 56;
export const FAST_FAIL_CONTROL_INVALID_RETURN_ADDRESS   = 57;
export const FAST_FAIL_UNEXPECTED_HOST_BEHAVIOR         = 58;
export const FAST_FAIL_FLAGS_CORRUPTION                 = 59;
export const FAST_FAIL_VEH_CORRUPTION                   = 60;
export const FAST_FAIL_ETW_CORRUPTION                   = 61;
export const FAST_FAIL_RIO_ABORT                        = 62;
export const FAST_FAIL_INVALID_PFN                      = 63;
export const FAST_FAIL_INVALID_FAST_FAIL_CODE           = 0xFFFFFFFF;

export const HEAP_NO_SERIALIZE             = 0x00000001;
export const HEAP_GROWABLE                 = 0x00000002;
export const HEAP_GENERATE_EXCEPTIONS      = 0x00000004;
export const HEAP_ZERO_MEMORY              = 0x00000008;
export const HEAP_REALLOC_IN_PLACE_ONLY    = 0x00000010;
export const HEAP_TAIL_CHECKING_ENABLED    = 0x00000020;
export const HEAP_FREE_CHECKING_ENABLED    = 0x00000040;
export const HEAP_DISABLE_COALESCE_ON_FREE = 0x00000080;
export const HEAP_CREATE_ALIGN_16          = 0x00010000;
export const HEAP_CREATE_ENABLE_TRACING    = 0x00020000;
export const HEAP_CREATE_ENABLE_EXECUTE    = 0x00040000;
export const HEAP_MAXIMUM_TAG              = 0x0FFF;
export const HEAP_PSEUDO_TAG_FLAG          = 0x8000;
export const HEAP_TAG_SHIFT                = 18;
export const HEAP_CREATE_SEGMENT_HEAP      = 0x00000100;
export const HEAP_CREATE_HARDENED          = 0x00000200;

export const IS_TEXT_UNICODE_ASCII16            = 0x0001;
export const IS_TEXT_UNICODE_REVERSE_ASCII16    = 0x0010;
export const IS_TEXT_UNICODE_STATISTICS         = 0x0002;
export const IS_TEXT_UNICODE_REVERSE_STATISTICS = 0x0020;
export const IS_TEXT_UNICODE_CONTROLS           = 0x0004;
export const IS_TEXT_UNICODE_REVERSE_CONTROLS   = 0x0040;
export const IS_TEXT_UNICODE_SIGNATURE          = 0x0008;
export const IS_TEXT_UNICODE_REVERSE_SIGNATURE  = 0x0080;
export const IS_TEXT_UNICODE_ILLEGAL_CHARS      = 0x0100;
export const IS_TEXT_UNICODE_ODD_LENGTH         = 0x0200;
export const IS_TEXT_UNICODE_DBCS_LEADBYTE      = 0x0400;
export const IS_TEXT_UNICODE_NULL_BYTES         = 0x1000;
export const IS_TEXT_UNICODE_UNICODE_MASK       = 0x000F;
export const IS_TEXT_UNICODE_REVERSE_MASK       = 0x00F0;
export const IS_TEXT_UNICODE_NOT_UNICODE_MASK   = 0x0F00;
export const IS_TEXT_UNICODE_NOT_ASCII_MASK     = 0xF000;

export const COMPRESSION_FORMAT_NONE        = (0x0000);
export const COMPRESSION_FORMAT_DEFAULT     = (0x0001);
export const COMPRESSION_FORMAT_LZNT1       = (0x0002);
export const COMPRESSION_FORMAT_XPRESS      = (0x0003);
export const COMPRESSION_FORMAT_XPRESS_HUFF = (0x0004);
export const COMPRESSION_ENGINE_STANDARD    = (0x0000);
export const COMPRESSION_ENGINE_MAXIMUM     = (0x0100);
export const COMPRESSION_ENGINE_HIBER       = (0x0200);

// export const memcpy = memcpy_inline;

export const SEF_DACL_AUTO_INHERIT             = 0x01;
export const SEF_SACL_AUTO_INHERIT             = 0x02;
export const SEF_DEFAULT_DESCRIPTOR_FOR_OBJECT = 0x04;
export const SEF_AVOID_PRIVILEGE_CHECK         = 0x08;
export const SEF_AVOID_OWNER_CHECK             = 0x10;
export const SEF_DEFAULT_OWNER_FROM_PARENT     = 0x20;
export const SEF_DEFAULT_GROUP_FROM_PARENT     = 0x40;
export const SEF_MACL_NO_WRITE_UP              = 0x100;
export const SEF_MACL_NO_READ_UP               = 0x200;
export const SEF_MACL_NO_EXECUTE_UP            = 0x400;
export const SEF_AI_USE_EXTRA_PARAMS           = 0x800;
export const SEF_AVOID_OWNER_RESTRICTION       = 0x1000;
export const SEF_FORCE_USER_MODE               = 0x2000;
export const SEF_MACL_VALID_FLAGS              = (SEF_MACL_NO_WRITE_UP |
                                                  SEF_MACL_NO_READ_UP |
                                                  SEF_MACL_NO_EXECUTE_UP);
export const MESSAGE_RESOURCE_UNICODE = 0x0001;
export const MESSAGE_RESOURCE_UTF8 = 0x0002;

export const VER_EQUAL                       = 1;
export const VER_GREATER                     = 2;
export const VER_GREATER_EQUAL               = 3;
export const VER_LESS                        = 4;
export const VER_LESS_EQUAL                  = 5;
export const VER_AND                         = 6;
export const VER_OR                          = 7;
export const VER_CONDITION_MASK              = 7;
export const VER_NUM_BITS_PER_CONDITION_MASK = 3;

export const VER_MINORVERSION         = 0x0000001;
export const VER_MAJORVERSION         = 0x0000002;
export const VER_BUILDNUMBER          = 0x0000004;
export const VER_PLATFORMID           = 0x0000008;
export const VER_SERVICEPACKMINOR     = 0x0000010;
export const VER_SERVICEPACKMAJOR     = 0x0000020;
export const VER_SUITENAME            = 0x0000040;
export const VER_PRODUCT_TYPE         = 0x0000080;
export const VER_NT_WORKSTATION       = 0x0000001;
export const VER_NT_DOMAIN_CONTROLLER = 0x0000002;
export const VER_NT_SERVER            = 0x0000003;

export const VER_PLATFORM_WIN32s        = 0;
export const VER_PLATFORM_WIN32_WINDOWS = 1;
export const VER_PLATFORM_WIN32_NT      = 2;
export const RTL_UMS_VERSION            = (0x0100);
export const VRL_PREDEFINED_CLASS_BEGIN = (1 << 0);
export const VRL_CUSTOM_CLASS_BEGIN     = (1 << 8);
export const VRL_CLASS_CONSISTENCY      = (VRL_PREDEFINED_CLASS_BEGIN << 0);
export const VRL_ENABLE_KERNEL_BREAKS   = (1 << 31);

export const CTMF_INCLUDE_APPCONTAINER = 0x00000001;
export const CTMF_INCLUDE_LPAC         = 0x00000002;

export const CTMF_VALID_FLAGS = (CTMF_INCLUDE_APPCONTAINER | CTMF_INCLUDE_LPAC);

export const FLUSH_NV_MEMORY_IN_FLAG_NO_DRAIN = (0x00000001);
export const FLUSH_NV_MEMORY_DEFAULT_TOKEN    = (-1);

export const WRITE_NV_MEMORY_FLAG_FLUSH        = (0x00000001);
export const WRITE_NV_MEMORY_FLAG_NON_TEMPORAL = (0x00000002);
// export const WRITE_NV_MEMORY_FLAG_PERSIST   = (WRITE_NV_MEMORY_FLAG_FLUSH
// 	| WRITE_NV_MEMORY_FLAG_NON_TEMPORA);
export const WRITE_NV_MEMORY_FLAG_NO_DRAIN     = (0x00000100);

export const FILL_NV_MEMORY_FLAG_FLUSH        = (0x00000001);
export const FILL_NV_MEMORY_FLAG_NON_TEMPORAL = (0x00000002);
// export const FILL_NV_MEMORY_FLAG_PERSIST   = (FILL_NV_MEMORY_FLAG_FLUSH
// 	| FILL_NV_MEMORY_FLAG_NON_TEMPORA);
export const FILL_NV_MEMORY_FLAG_NO_DRAIN     = (0x00000100);

export const RTL_CORRELATION_VECTOR_STRING_LENGTH    = 129;
export const RTL_CORRELATION_VECTOR_VERSION_1        = (1);
export const RTL_CORRELATION_VECTOR_VERSION_2        = (2);
export const RTL_CORRELATION_VECTOR_VERSION_CURRENT  = RTL_CORRELATION_VECTOR_VERSION_2;
export const RTL_CORRELATION_VECTOR_V1_PREFIX_LENGTH = (16);
export const RTL_CORRELATION_VECTOR_V1_LENGTH        = (64);
export const RTL_CORRELATION_VECTOR_V2_PREFIX_LENGTH = (22);
export const RTL_CORRELATION_VECTOR_V2_LENGTH        = (128);

export const IMAGE_POLICY_METADATA_VERSION = 1;
export const IMAGE_POLICY_SECTION_NAME = ".tPolicy";
// export const IMAGE_POLICY_METADATA_NAME = __ImagePolicyMetadata;

export const RTL_CRITICAL_SECTION_FLAG_NO_DEBUG_INFO    = 0x01000000;
export const RTL_CRITICAL_SECTION_FLAG_DYNAMIC_SPIN     = 0x02000000;
export const RTL_CRITICAL_SECTION_FLAG_STATIC_INIT      = 0x04000000;
export const RTL_CRITICAL_SECTION_FLAG_RESOURCE_TYPE    = 0x08000000;
export const RTL_CRITICAL_SECTION_FLAG_FORCE_DEBUG_INFO = 0x10000000;
export const RTL_CRITICAL_SECTION_ALL_FLAG_BITS         = 0xFF000000;
export const RTL_CRITICAL_SECTION_FLAG_RESERVED = (RTL_CRITICAL_SECTION_ALL_FLAG_BITS & (~(RTL_CRITICAL_SECTION_FLAG_NO_DEBUG_INFO | RTL_CRITICAL_SECTION_FLAG_DYNAMIC_SPIN | RTL_CRITICAL_SECTION_FLAG_STATIC_INIT | RTL_CRITICAL_SECTION_FLAG_RESOURCE_TYPE | RTL_CRITICAL_SECTION_FLAG_FORCE_DEBUG_INFO)));
export const RTL_CRITICAL_SECTION_DEBUG_FLAG_STATIC_INIT = 0x00000001;
export const RTL_SRWLOCK_INIT = [0];
export const RTL_CONDITION_VARIABLE_INIT = [0];
export const RTL_CONDITION_VARIABLE_LOCKMODE_SHARED = 0x1;

export const HEAP_OPTIMIZE_RESOURCES_CURRENT_VERSION = 1;

export const WT_EXECUTEDEFAULT              = 0x00000000;
export const WT_EXECUTEINIOTHREAD           = 0x00000001;
export const WT_EXECUTEINUITHREAD           = 0x00000002;
export const WT_EXECUTEINWAITTHREAD         = 0x00000004;
export const WT_EXECUTEONLYONCE             = 0x00000008;
export const WT_EXECUTEINTIMERTHREAD        = 0x00000020;
export const WT_EXECUTELONGFUNCTION         = 0x00000010;
export const WT_EXECUTEINPERSISTENTIOTHREAD = 0x00000040;
export const WT_EXECUTEINPERSISTENTTHREAD   = 0x00000080;
export const WT_TRANSFER_IMPERSONATION      = 0x00000100;

export const WT_EXECUTEINLONGTHREAD         = 0x00000010;
export const WT_EXECUTEDELETEWAIT           = 0x00000008;

export const ACTIVATION_CONTEXT_INFO_CLASS                          = int;
export const ActivationContextBasicInformation                      = 1;
export const ActivationContextDetailedInformation                   = 2;
export const AssemblyDetailedInformationInActivationContext         = 3;
export const FileInformationInAssemblyOfAssemblyInActivationContext = 4;
export const RunlevelInformationInActivationContext                 = 5;
export const CompatibilityInformationInActivationContext            = 6;
export const ActivationContextManifestResourceName                  = 7;
export const MaxActivationContextInfoClass                          = 8;
export const AssemblyDetailedInformationInActivationContxt          = 3;
export const FileInformationInAssemblyOfAssemblyInActivationContxt  = 4;

export const ACTIVATIONCONTEXTINFOCLASS = ACTIVATION_CONTEXT_INFO_CLASS;

export const ACTIVATION_CONTEXT_PATH_TYPE_NONE        = (1);
export const ACTIVATION_CONTEXT_PATH_TYPE_WIN32_FILE  = (2);
export const ACTIVATION_CONTEXT_PATH_TYPE_URL         = (3);
export const ACTIVATION_CONTEXT_PATH_TYPE_ASSEMBLYREF = (4);

// export const _ASSEMBLY_DLL_REDIRECTION_DETAILED_INFORMATION = _ASSEMBLY_FILE_DETAILED_INFORMATION;
// export const ASSEMBLY_DLL_REDIRECTION_DETAILED_INFORMATION = ASSEMBLY_FILE_DETAILED_INFORMATION;
// export const PASSEMBLY_DLL_REDIRECTION_DETAILED_INFORMATION = PASSEMBLY_FILE_DETAILED_INFORMATION;
// export const PCASSEMBLY_DLL_REDIRECTION_DETAILED_INFORMATION = PCASSEMBLY_FILE_DETAILED_INFORMATION;

export const CREATE_BOUNDARY_DESCRIPTOR_ADD_APPCONTAINER_SID = 0x1;

export const PERFORMANCE_DATA_VERSION = 1;

export const READ_THREAD_PROFILING_FLAG_DISPATCHING       = 0x00000001;
export const READ_THREAD_PROFILING_FLAG_HARDWARE_COUNTERS = 0x00000002;

export const UNIFIEDBUILDREVISION_KEY = L("\\Registry\\Machine\\Software\\Microsoft\\Windows NT\\CurrentVersion");
export const UNIFIEDBUILDREVISION_VALUE = L("UBR");

export const UNIFIEDBUILDREVISION_MIN = 0x00000000;

export const DEVICEFAMILYDEVICEFORM_KEY = L("\\Registry\\Machine\\Software\\Microsoft\\Windows NT\\CurrentVersion\\OEM");
export const DEVICEFAMILYDEVICEFORM_VALUE = L("DeviceForm");

export const DEVICEFAMILYINFOENUM_UAP                   = 0x00000000;
export const DEVICEFAMILYINFOENUM_WINDOWS_8X            = 0x00000001;
export const DEVICEFAMILYINFOENUM_WINDOWS_PHONE_8X      = 0x00000002;
export const DEVICEFAMILYINFOENUM_DESKTOP               = 0x00000003;
export const DEVICEFAMILYINFOENUM_MOBILE                = 0x00000004;
export const DEVICEFAMILYINFOENUM_XBOX                  = 0x00000005;
export const DEVICEFAMILYINFOENUM_TEAM                  = 0x00000006;
export const DEVICEFAMILYINFOENUM_IOT                   = 0x00000007;
export const DEVICEFAMILYINFOENUM_IOT_HEADLESS          = 0x00000008;
export const DEVICEFAMILYINFOENUM_SERVER                = 0x00000009;
export const DEVICEFAMILYINFOENUM_XBOXSRA               = 0x0000000B;
export const DEVICEFAMILYINFOENUM_XBOXERA               = 0x0000000C;
export const DEVICEFAMILYINFOENUM_SERVER_NANO           = 0x0000000D;
export const DEVICEFAMILYINFOENUM_8828080               = 0x0000000E;
export const DEVICEFAMILYINFOENUM_7067329               = 0x0000000F;
export const DEVICEFAMILYINFOENUM_WINDOWS_CORE          = 0x00000010;
export const DEVICEFAMILYINFOENUM_WINDOWS_CORE_HEADLESS = 0x00000011;
export const DEVICEFAMILYINFOENUM_MAX                   = 0x00000011;

export const DEVICEFAMILYDEVICEFORM_UNKNOWN               = 0x00000000;
export const DEVICEFAMILYDEVICEFORM_PHONE                 = 0x00000001;
export const DEVICEFAMILYDEVICEFORM_TABLET                = 0x00000002;
export const DEVICEFAMILYDEVICEFORM_DESKTOP               = 0x00000003;
export const DEVICEFAMILYDEVICEFORM_NOTEBOOK              = 0x00000004;
export const DEVICEFAMILYDEVICEFORM_CONVERTIBLE           = 0x00000005;
export const DEVICEFAMILYDEVICEFORM_DETACHABLE            = 0x00000006;
export const DEVICEFAMILYDEVICEFORM_ALLINONE              = 0x00000007;
export const DEVICEFAMILYDEVICEFORM_STICKPC               = 0x00000008;
export const DEVICEFAMILYDEVICEFORM_PUCK                  = 0x00000009;
export const DEVICEFAMILYDEVICEFORM_HMD                   = 0x0000000B;
export const DEVICEFAMILYDEVICEFORM_INDUSTRY_HANDHELD     = 0x0000000C;
export const DEVICEFAMILYDEVICEFORM_INDUSTRY_TABLET       = 0x0000000D;
export const DEVICEFAMILYDEVICEFORM_BANKING               = 0x0000000E;
export const DEVICEFAMILYDEVICEFORM_BUILDING_AUTOMATION   = 0x0000000F;
export const DEVICEFAMILYDEVICEFORM_DIGITAL_SIGNAGE       = 0x00000010;
export const DEVICEFAMILYDEVICEFORM_GAMING                = 0x00000011;
export const DEVICEFAMILYDEVICEFORM_HOME_AUTOMATION       = 0x00000012;
export const DEVICEFAMILYDEVICEFORM_INDUSTRIAL_AUTOMATION = 0x00000013;
export const DEVICEFAMILYDEVICEFORM_KIOSK                 = 0x00000014;
export const DEVICEFAMILYDEVICEFORM_MAKER_BOARD           = 0x00000015;
export const DEVICEFAMILYDEVICEFORM_MEDICAL               = 0x00000016;
export const DEVICEFAMILYDEVICEFORM_NETWORKING            = 0x00000017;
export const DEVICEFAMILYDEVICEFORM_POINT_OF_SERVICE      = 0x00000018;
export const DEVICEFAMILYDEVICEFORM_PRINTING              = 0x00000019;
export const DEVICEFAMILYDEVICEFORM_TOY                   = 0x0000001B;
export const DEVICEFAMILYDEVICEFORM_VENDING               = 0x0000001C;
export const DEVICEFAMILYDEVICEFORM_INDUSTRY_OTHER        = 0x0000001D;
export const DEVICEFAMILYDEVICEFORM_XBOX_ONE              = 0x0000001E;
export const DEVICEFAMILYDEVICEFORM_XBOX_ONE_S            = 0x0000001F;
export const DEVICEFAMILYDEVICEFORM_XBOX_ONE_X            = 0x00000020;
export const DEVICEFAMILYDEVICEFORM_XBOX_ONE_X_DEVKIT     = 0x00000021;
export const DEVICEFAMILYDEVICEFORM_MAX                   = 0x00000021;

export const DLL_PROCESS_ATTACH = 1;
export const DLL_THREAD_ATTACH  = 2;
export const DLL_THREAD_DETACH  = 3;
export const DLL_PROCESS_DETACH = 0;

export const EVENTLOG_SEQUENTIAL_READ       = 0x0001;
export const EVENTLOG_SEEK_READ             = 0x0002;
export const EVENTLOG_FORWARDS_READ         = 0x0004;
export const EVENTLOG_BACKWARDS_READ        = 0x0008;
export const EVENTLOG_SUCCESS               = 0x0000;
export const EVENTLOG_ERROR_TYPE            = 0x0001;
export const EVENTLOG_WARNING_TYPE          = 0x0002;
export const EVENTLOG_INFORMATION_TYPE      = 0x0004;
export const EVENTLOG_AUDIT_SUCCESS         = 0x0008;
export const EVENTLOG_AUDIT_FAILURE         = 0x0010;
export const EVENTLOG_START_PAIRED_EVENT    = 0x0001;
export const EVENTLOG_END_PAIRED_EVENT      = 0x0002;
export const EVENTLOG_END_ALL_PAIRED_EVENTS = 0x0004;
export const EVENTLOG_PAIRED_EVENT_ACTIVE   = 0x0008;
export const EVENTLOG_PAIRED_EVENT_INACTIVE = 0x0010;

export const MAXLOGICALLOGNAMESIZE = 256;

export const KEY_QUERY_VALUE        = (0x0001);
export const KEY_SET_VALUE          = (0x0002);
export const KEY_CREATE_SUB_KEY     = (0x0004);
export const KEY_ENUMERATE_SUB_KEYS = (0x0008);
export const KEY_NOTIFY             = (0x0010);
export const KEY_CREATE_LINK        = (0x0020);
export const KEY_WOW64_32KEY        = (0x0200);
export const KEY_WOW64_64KEY        = (0x0100);
export const KEY_WOW64_RES          = (0x0300);
export const KEY_READ               = ((STANDARD_RIGHTS_READ |
                                        KEY_QUERY_VALUE |
                                        KEY_ENUMERATE_SUB_KEYS |
                                        KEY_NOTIFY)
                                        &
                                        (~SYNCHRONIZE));
export const KEY_WRITE              = ((STANDARD_RIGHTS_WRITE |
                                        KEY_SET_VALUE |
                                        KEY_CREATE_SUB_KEY)
                                        &
                                        (~SYNCHRONIZE));
export const KEY_EXECUTE            = ((KEY_READ)
                                        &
                                        (~SYNCHRONIZE));
export const KEY_ALL_ACCESS         = ((STANDARD_RIGHTS_ALL |
                                        KEY_QUERY_VALUE |
                                        KEY_SET_VALUE |
                                        KEY_CREATE_SUB_KEY |
                                        KEY_ENUMERATE_SUB_KEYS |
                                        KEY_NOTIFY |
                                        KEY_CREATE_LINK)
                                        &
                                        (~SYNCHRONIZE));

export const REG_OPTION_RESERVED            = (0x00000000);
export const REG_OPTION_NON_VOLATILE        = (0x00000000);
export const REG_OPTION_VOLATILE            = (0x00000001);
export const REG_OPTION_CREATE_LINK         = (0x00000002);
export const REG_OPTION_BACKUP_RESTORE      = (0x00000004);
export const REG_OPTION_OPEN_LINK           = (0x00000008);
export const REG_OPTION_DONT_VIRTUALIZE     = (0x00000010);
export const REG_LEGAL_OPTION               = (REG_OPTION_RESERVED |
                                               REG_OPTION_NON_VOLATILE |
                                               REG_OPTION_VOLATILE |
                                               REG_OPTION_CREATE_LINK |
                                               REG_OPTION_BACKUP_RESTORE |
                                               REG_OPTION_OPEN_LINK |
                                               REG_OPTION_DONT_VIRTUALIZE);
export const REG_OPEN_LEGAL_OPTION          = (REG_OPTION_RESERVED |
                                               REG_OPTION_BACKUP_RESTORE |
                                               REG_OPTION_OPEN_LINK |
                                               REG_OPTION_DONT_VIRTUALIZE);
export const REG_CREATED_NEW_KEY            = (0x00000001);
export const REG_OPENED_EXISTING_KEY        = (0x00000002);
export const REG_STANDARD_FORMAT            = 1;
export const REG_LATEST_FORMAT              = 2;
export const REG_NO_COMPRESSION             = 4;
export const REG_WHOLE_HIVE_VOLATILE        = (0x00000001);
export const REG_REFRESH_HIVE               = (0x00000002);
export const REG_NO_LAZY_FLUSH              = (0x00000004);
export const REG_FORCE_RESTORE              = (0x00000008);
export const REG_APP_HIVE                   = (0x00000010);
export const REG_PROCESS_PRIVATE            = (0x00000020);
export const REG_START_JOURNAL              = (0x00000040);
export const REG_HIVE_EXACT_FILE_GROWTH     = (0x00000080);
export const REG_HIVE_NO_RM                 = (0x00000100);
export const REG_HIVE_SINGLE_LOG            = (0x00000200);
export const REG_BOOT_HIVE                  = (0x00000400);
export const REG_LOAD_HIVE_OPEN_HANDLE      = (0x00000800);
export const REG_FLUSH_HIVE_FILE_GROWTH     = (0x00001000);
export const REG_OPEN_READ_ONLY             = (0x00002000);
export const REG_IMMUTABLE                  = (0x00004000);
export const REG_NO_IMPERSONATION_FALLBACK  = (0x00008000);
export const REG_APP_HIVE_OPEN_READ_ONLY    = (REG_OPEN_READ_ONLY);
export const REG_FORCE_UNLOAD               = 1;
export const REG_UNLOAD_LEGAL_FLAGS         = (REG_FORCE_UNLOAD);
export const REG_NOTIFY_CHANGE_NAME         = (0x00000001);
export const REG_NOTIFY_CHANGE_ATTRIBUTES   = (0x00000002);
export const REG_NOTIFY_CHANGE_LAST_SET     = (0x00000004);
export const REG_NOTIFY_CHANGE_SECURITY     = (0x00000008);
export const REG_NOTIFY_THREAD_AGNOSTIC     = (0x10000000);
export const REG_LEGAL_CHANGE_FILTER        = (REG_NOTIFY_CHANGE_NAME |
                                               REG_NOTIFY_CHANGE_ATTRIBUTES |
                                               REG_NOTIFY_CHANGE_LAST_SET |
                                               REG_NOTIFY_CHANGE_SECURITY |
                                               REG_NOTIFY_THREAD_AGNOSTIC);
export const REG_NONE                       = (0);
export const REG_SZ                         = (1);
export const REG_EXPAND_SZ                  = (2);
export const REG_BINARY                     = (3);
export const REG_DWORD                      = (4);
export const REG_DWORD_LITTLE_ENDIAN        = (4);
export const REG_DWORD_BIG_ENDIAN           = (5);
export const REG_LINK                       = (6);
export const REG_MULTI_SZ                   = (7);
export const REG_RESOURCE_LIST              = (8);
export const REG_FULL_RESOURCE_DESCRIPTOR   = (9);
export const REG_RESOURCE_REQUIREMENTS_LIST = (10);
export const REG_QWORD                      = (11);
export const REG_QWORD_LITTLE_ENDIAN        = (11);

export const SERVICE_KERNEL_DRIVER        = 0x00000001;
export const SERVICE_FILE_SYSTEM_DRIVER   = 0x00000002;
export const SERVICE_ADAPTER              = 0x00000004;
export const SERVICE_RECOGNIZER_DRIVER    = 0x00000008;
export const SERVICE_DRIVER               = (SERVICE_KERNEL_DRIVER |
                                             SERVICE_FILE_SYSTEM_DRIVER |
                                             SERVICE_RECOGNIZER_DRIVER);
export const SERVICE_WIN32_OWN_PROCESS    = 0x00000010;
export const SERVICE_WIN32_SHARE_PROCESS  = 0x00000020;
export const SERVICE_WIN32                = (SERVICE_WIN32_OWN_PROCESS |
                                             SERVICE_WIN32_SHARE_PROCESS);
export const SERVICE_USER_SERVICE         = 0x00000040;
export const SERVICE_USERSERVICE_INSTANCE = 0x00000080;
export const SERVICE_USER_SHARE_PROCESS   = (SERVICE_USER_SERVICE |
                                             SERVICE_WIN32_SHARE_PROCESS);
export const SERVICE_USER_OWN_PROCESS     = (SERVICE_USER_SERVICE |
                                             SERVICE_WIN32_OWN_PROCESS);
export const SERVICE_INTERACTIVE_PROCESS  = 0x00000100;
export const SERVICE_PKG_SERVICE          = 0x00000200;
export const SERVICE_TYPE_ALL             = (SERVICE_WIN32 |
                                             SERVICE_ADAPTER |
                                             SERVICE_DRIVER |
                                             SERVICE_INTERACTIVE_PROCESS |
                                             SERVICE_USER_SERVICE |
                                             SERVICE_USERSERVICE_INSTANCE |
                                             SERVICE_PKG_SERVICE);
export const SERVICE_BOOT_START           = 0x00000000;
export const SERVICE_SYSTEM_START         = 0x00000001;
export const SERVICE_AUTO_START           = 0x00000002;
export const SERVICE_DEMAND_START         = 0x00000003;
export const SERVICE_DISABLED             = 0x00000004;
export const SERVICE_ERROR_IGNORE         = 0x00000000;
export const SERVICE_ERROR_NORMAL         = 0x00000001;
export const SERVICE_ERROR_SEVERE         = 0x00000002;
export const SERVICE_ERROR_CRITICAL       = 0x00000003;

export const CM_SERVICE_NETWORK_BOOT_LOAD      = 0x00000001;
export const CM_SERVICE_VIRTUAL_DISK_BOOT_LOAD = 0x00000002;
export const CM_SERVICE_USB_DISK_BOOT_LOAD     = 0x00000004;
export const CM_SERVICE_SD_DISK_BOOT_LOAD      = 0x00000008;
export const CM_SERVICE_USB3_DISK_BOOT_LOAD    = 0x00000010;
export const CM_SERVICE_MEASURED_BOOT_LOAD     = 0x00000020;
export const CM_SERVICE_VERIFIER_BOOT_LOAD     = 0x00000040;
export const CM_SERVICE_WINPE_BOOT_LOAD        = 0x00000080;
export const CM_SERVICE_RAM_DISK_BOOT_LOAD     = 0x00000100;
export const CM_SERVICE_VALID_PROMOTION_MASK   = (CM_SERVICE_NETWORK_BOOT_LOAD |
                                                  CM_SERVICE_VIRTUAL_DISK_BOOT_LOAD |
                                                  CM_SERVICE_USB_DISK_BOOT_LOAD |
                                                  CM_SERVICE_SD_DISK_BOOT_LOAD |
                                                  CM_SERVICE_USB3_DISK_BOOT_LOAD |
                                                  CM_SERVICE_MEASURED_BOOT_LOAD |
                                                  CM_SERVICE_VERIFIER_BOOT_LOAD |
                                                  CM_SERVICE_WINPE_BOOT_LOAD |
                                                  CM_SERVICE_RAM_DISK_BOOT_LOAD);
export const TAPE_ERASE_LONG              = 1;
export const TAPE_LOAD                    = 0;
export const TAPE_UNLOAD                  = 1;
export const TAPE_TENSION                 = 2;
export const TAPE_LOCK                    = 3;
export const TAPE_UNLOCK                  = 4;
export const TAPE_FORMAT                  = 5;
export const TAPE_SETMARKS                = 0;
export const TAPE_FILEMARKS               = 1;
export const TAPE_SHORT_FILEMARKS         = 2;
export const TAPE_LONG_FILEMARKS          = 3;
export const TAPE_ABSOLUTE_POSITION       = 0;
export const TAPE_LOGICAL_POSITION        = 1;
export const TAPE_PSEUDO_LOGICAL_POSITION = 2;
export const TAPE_REWIND                  = 0;
export const TAPE_ABSOLUTE_BLOCK          = 1;
export const TAPE_LOGICAL_BLOCK           = 2;
export const TAPE_PSEUDO_LOGICAL_BLOCK    = 3;
export const TAPE_SPACE_END_OF_DATA       = 4;
export const TAPE_SPACE_RELATIVE_BLOCKS   = 5;
export const TAPE_SPACE_FILEMARKS         = 6;
export const TAPE_SPACE_SEQUENTIAL_FMKS   = 7;
export const TAPE_SPACE_SETMARKS          = 8;
export const TAPE_SPACE_SEQUENTIAL_SMKS   = 9;

export const TAPE_DRIVE_FIXED             = 0x00000001;
export const TAPE_DRIVE_SELECT            = 0x00000002;
export const TAPE_DRIVE_INITIATOR         = 0x00000004;
export const TAPE_DRIVE_ERASE_SHORT       = 0x00000010;
export const TAPE_DRIVE_ERASE_LONG        = 0x00000020;
export const TAPE_DRIVE_ERASE_BOP_ONLY    = 0x00000040;
export const TAPE_DRIVE_ERASE_IMMEDIATE   = 0x00000080;
export const TAPE_DRIVE_TAPE_CAPACITY     = 0x00000100;
export const TAPE_DRIVE_TAPE_REMAINING    = 0x00000200;
export const TAPE_DRIVE_FIXED_BLOCK       = 0x00000400;
export const TAPE_DRIVE_VARIABLE_BLOCK    = 0x00000800;
export const TAPE_DRIVE_WRITE_PROTECT     = 0x00001000;
export const TAPE_DRIVE_EOT_WZ_SIZE       = 0x00002000;
export const TAPE_DRIVE_ECC               = 0x00010000;
export const TAPE_DRIVE_COMPRESSION       = 0x00020000;
export const TAPE_DRIVE_PADDING           = 0x00040000;
export const TAPE_DRIVE_REPORT_SMKS       = 0x00080000;
export const TAPE_DRIVE_GET_ABSOLUTE_BLK  = 0x00100000;
export const TAPE_DRIVE_GET_LOGICAL_BLK   = 0x00200000;
export const TAPE_DRIVE_SET_EOT_WZ_SIZE   = 0x00400000;
export const TAPE_DRIVE_EJECT_MEDIA       = 0x01000000;
export const TAPE_DRIVE_CLEAN_REQUESTS    = 0x02000000;
export const TAPE_DRIVE_SET_CMP_BOP_ONLY  = 0x04000000;
export const TAPE_DRIVE_RESERVED_BIT      = 0x80000000;
export const TAPE_DRIVE_LOAD_UNLOAD       = 0x80000001;
export const TAPE_DRIVE_TENSION           = 0x80000002;
export const TAPE_DRIVE_LOCK_UNLOCK       = 0x80000004;
export const TAPE_DRIVE_REWIND_IMMEDIATE  = 0x80000008;
export const TAPE_DRIVE_SET_BLOCK_SIZE    = 0x80000010;
export const TAPE_DRIVE_LOAD_UNLD_IMMED   = 0x80000020;
export const TAPE_DRIVE_TENSION_IMMED     = 0x80000040;
export const TAPE_DRIVE_LOCK_UNLK_IMMED   = 0x80000080;
export const TAPE_DRIVE_SET_ECC           = 0x80000100;
export const TAPE_DRIVE_SET_COMPRESSION   = 0x80000200;
export const TAPE_DRIVE_SET_PADDING       = 0x80000400;
export const TAPE_DRIVE_SET_REPORT_SMKS   = 0x80000800;
export const TAPE_DRIVE_ABSOLUTE_BLK      = 0x80001000;
export const TAPE_DRIVE_ABS_BLK_IMMED     = 0x80002000;
export const TAPE_DRIVE_LOGICAL_BLK       = 0x80004000;
export const TAPE_DRIVE_LOG_BLK_IMMED     = 0x80008000;
export const TAPE_DRIVE_END_OF_DATA       = 0x80010000;
export const TAPE_DRIVE_RELATIVE_BLKS     = 0x80020000;
export const TAPE_DRIVE_FILEMARKS         = 0x80040000;
export const TAPE_DRIVE_SEQUENTIAL_FMKS   = 0x80080000;
export const TAPE_DRIVE_SETMARKS          = 0x80100000;
export const TAPE_DRIVE_SEQUENTIAL_SMKS   = 0x80200000;
export const TAPE_DRIVE_REVERSE_POSITION  = 0x80400000;
export const TAPE_DRIVE_SPACE_IMMEDIATE   = 0x80800000;
export const TAPE_DRIVE_WRITE_SETMARKS    = 0x81000000;
export const TAPE_DRIVE_WRITE_FILEMARKS   = 0x82000000;
export const TAPE_DRIVE_WRITE_SHORT_FMKS  = 0x84000000;
export const TAPE_DRIVE_WRITE_LONG_FMKS   = 0x88000000;
export const TAPE_DRIVE_WRITE_MARK_IMMED  = 0x90000000;
export const TAPE_DRIVE_FORMAT            = 0xA0000000;
export const TAPE_DRIVE_FORMAT_IMMEDIATE  = 0xC0000000;
export const TAPE_DRIVE_HIGH_FEATURES     = 0x80000000;

export const TAPE_FIXED_PARTITIONS        = 0;
export const TAPE_SELECT_PARTITIONS       = 1;
export const TAPE_INITIATOR_PARTITIONS    = 2;
export const TAPE_QUERY_DRIVE_PARAMETERS  = 0;
export const TAPE_QUERY_MEDIA_CAPACITY    = 1;
export const TAPE_CHECK_FOR_DRIVE_PROBLEM = 2;
export const TAPE_QUERY_IO_ERROR_DATA     = 3;
export const TAPE_QUERY_DEVICE_ERROR_DATA = 4;

export const TRANSACTIONMANAGER_QUERY_INFORMATION = (0x0001);
export const TRANSACTIONMANAGER_SET_INFORMATION   = (0x0002);
export const TRANSACTIONMANAGER_RECOVER           = (0x0004);
export const TRANSACTIONMANAGER_RENAME            = (0x0008);
export const TRANSACTIONMANAGER_CREATE_RM         = (0x0010);
export const TRANSACTIONMANAGER_BIND_TRANSACTION  = (0x0020);
export const TRANSACTIONMANAGER_GENERIC_READ      = (STANDARD_RIGHTS_READ |
                                                     TRANSACTIONMANAGER_QUERY_INFORMATION);
export const TRANSACTIONMANAGER_GENERIC_WRITE     = (STANDARD_RIGHTS_WRITE |
                                                     TRANSACTIONMANAGER_SET_INFORMATION |
                                                     TRANSACTIONMANAGER_RECOVER |
                                                     TRANSACTIONMANAGER_RENAME |
                                                     TRANSACTIONMANAGER_CREATE_RM);
export const TRANSACTIONMANAGER_GENERIC_EXECUTE   = (STANDARD_RIGHTS_EXECUTE);
export const TRANSACTIONMANAGER_ALL_ACCESS        = (STANDARD_RIGHTS_REQUIRED |
                                                     TRANSACTIONMANAGER_GENERIC_READ |
                                                     TRANSACTIONMANAGER_GENERIC_WRITE |
                                                     TRANSACTIONMANAGER_GENERIC_EXECUTE |
                                                     TRANSACTIONMANAGER_BIND_TRANSACTION);
export const TRANSACTION_QUERY_INFORMATION        = (0x0001);
export const TRANSACTION_SET_INFORMATION          = (0x0002);
export const TRANSACTION_ENLIST                   = (0x0004);
export const TRANSACTION_COMMIT                   = (0x0008);
export const TRANSACTION_ROLLBACK                 = (0x0010);
export const TRANSACTION_PROPAGATE                = (0x0020);
export const TRANSACTION_RIGHT_RESERVED1          = (0x0040);
export const TRANSACTION_GENERIC_READ             = (STANDARD_RIGHTS_READ |
                                                     TRANSACTION_QUERY_INFORMATION |
                                                     SYNCHRONIZE);
export const TRANSACTION_GENERIC_WRITE            = (STANDARD_RIGHTS_WRITE |
                                                     TRANSACTION_SET_INFORMATION |
                                                     TRANSACTION_COMMIT |
                                                     TRANSACTION_ENLIST |
                                                     TRANSACTION_ROLLBACK |
                                                     TRANSACTION_PROPAGATE |
                                                     SYNCHRONIZE);
export const TRANSACTION_GENERIC_EXECUTE          = (STANDARD_RIGHTS_EXECUTE |
                                                     TRANSACTION_COMMIT |
                                                     TRANSACTION_ROLLBACK |
                                                     SYNCHRONIZE);
export const TRANSACTION_ALL_ACCESS               = (STANDARD_RIGHTS_REQUIRED |
                                                     TRANSACTION_GENERIC_READ |
                                                     TRANSACTION_GENERIC_WRITE |
                                                     TRANSACTION_GENERIC_EXECUTE);
export const TRANSACTION_RESOURCE_MANAGER_RIGHTS  = (TRANSACTION_GENERIC_READ |
                                                     STANDARD_RIGHTS_WRITE |
                                                     TRANSACTION_SET_INFORMATION |
                                                     TRANSACTION_ENLIST |
                                                     TRANSACTION_ROLLBACK |
                                                     TRANSACTION_PROPAGATE |
                                                     SYNCHRONIZE);

export const RESOURCEMANAGER_QUERY_INFORMATION    = (0x0001);
export const RESOURCEMANAGER_SET_INFORMATION      = (0x0002);
export const RESOURCEMANAGER_RECOVER              = (0x0004);
export const RESOURCEMANAGER_ENLIST               = (0x0008);
export const RESOURCEMANAGER_GET_NOTIFICATION     = (0x0010);
export const RESOURCEMANAGER_REGISTER_PROTOCOL    = (0x0020);
export const RESOURCEMANAGER_COMPLETE_PROPAGATION = (0x0040);
export const RESOURCEMANAGER_GENERIC_READ         = (STANDARD_RIGHTS_READ |
                                                     RESOURCEMANAGER_QUERY_INFORMATION |
                                                     SYNCHRONIZE);
export const RESOURCEMANAGER_GENERIC_WRITE        = (STANDARD_RIGHTS_WRITE |
                                                     RESOURCEMANAGER_SET_INFORMATION |
                                                     RESOURCEMANAGER_RECOVER |
                                                     RESOURCEMANAGER_ENLIST |
                                                     RESOURCEMANAGER_GET_NOTIFICATION |
                                                     RESOURCEMANAGER_REGISTER_PROTOCOL |
                                                     RESOURCEMANAGER_COMPLETE_PROPAGATION |
                                                     SYNCHRONIZE);
export const RESOURCEMANAGER_GENERIC_EXECUTE      = (STANDARD_RIGHTS_EXECUTE |
                                                     RESOURCEMANAGER_RECOVER |
                                                     RESOURCEMANAGER_ENLIST |
                                                     RESOURCEMANAGER_GET_NOTIFICATION |
                                                     RESOURCEMANAGER_COMPLETE_PROPAGATION |
                                                     SYNCHRONIZE);
export const RESOURCEMANAGER_ALL_ACCESS           = (STANDARD_RIGHTS_REQUIRED |
                                                     RESOURCEMANAGER_GENERIC_READ |
                                                     RESOURCEMANAGER_GENERIC_WRITE |
                                                     RESOURCEMANAGER_GENERIC_EXECUTE);

export const ENLISTMENT_QUERY_INFORMATION  = (0x0001);
export const ENLISTMENT_SET_INFORMATION    = (0x0002);
export const ENLISTMENT_RECOVER            = (0x0004);
export const ENLISTMENT_SUBORDINATE_RIGHTS = (0x0008);
export const ENLISTMENT_SUPERIOR_RIGHTS    = (0x0010);
export const ENLISTMENT_GENERIC_READ       = (STANDARD_RIGHTS_READ |
                                              ENLISTMENT_QUERY_INFORMATION);
export const ENLISTMENT_GENERIC_WRITE      = (STANDARD_RIGHTS_WRITE |
                                              ENLISTMENT_SET_INFORMATION |
                                              ENLISTMENT_RECOVER |
                                              ENLISTMENT_SUBORDINATE_RIGHTS |
                                              ENLISTMENT_SUPERIOR_RIGHTS);
export const ENLISTMENT_GENERIC_EXECUTE    = (STANDARD_RIGHTS_EXECUTE |
                                              ENLISTMENT_RECOVER |
                                              ENLISTMENT_SUBORDINATE_RIGHTS |
                                              ENLISTMENT_SUPERIOR_RIGHTS);
export const ENLISTMENT_ALL_ACCESS         = (STANDARD_RIGHTS_REQUIRED |
                                              ENLISTMENT_GENERIC_READ |
                                              ENLISTMENT_GENERIC_WRITE |
                                              ENLISTMENT_GENERIC_EXECUTE);

export const TP_VERSION = DWORD;
export const PTP_VERSION = pointer(DWORD);
export const TP_WAIT_RESULT = DWORD;

export const PcTeb = 0x18;

export const ACTIVATION_CONTEXT_SECTION_ASSEMBLY_INFORMATION         = (1);
export const ACTIVATION_CONTEXT_SECTION_DLL_REDIRECTION              = (2);
export const ACTIVATION_CONTEXT_SECTION_WINDOW_CLASS_REDIRECTION     = (3);
export const ACTIVATION_CONTEXT_SECTION_COM_SERVER_REDIRECTION       = (4);
export const ACTIVATION_CONTEXT_SECTION_COM_INTERFACE_REDIRECTION    = (5);
export const ACTIVATION_CONTEXT_SECTION_COM_TYPE_LIBRARY_REDIRECTION = (6);
export const ACTIVATION_CONTEXT_SECTION_COM_PROGID_REDIRECTION       = (7);
export const ACTIVATION_CONTEXT_SECTION_GLOBAL_OBJECT_RENAME_TABLE   = (8);
export const ACTIVATION_CONTEXT_SECTION_CLR_SURROGATES               = (9);
export const ACTIVATION_CONTEXT_SECTION_APPLICATION_SETTINGS         = (10);
export const ACTIVATION_CONTEXT_SECTION_COMPATIBILITY_INFO           = (11);
export const ACTIVATION_CONTEXT_SECTION_WINRT_ACTIVATABLE_CLASSES    = (12);

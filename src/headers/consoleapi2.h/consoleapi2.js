import koffi from "koffi";

import {array, struct, pointer, out, inout} from "../../types.js";

import {CHAR, HANDLE, LPCSTR, LPCWSTR, LPSTR, LPWSTR, WCHAR} from "../winnt.h/winnt.js";
import {BOOL, DWORD, LPDWORD, LPVOID, LPWORD, UINT, ULONG, WORD} from "../minwindef.h/minWindef.js";
import {CHAR_INFO, COORD, INPUT_RECORD, PCHAR_INFO, PSMALL_RECT, SMALL_RECT} from "../wincontypes.h/wincontypes.js";
import {SECURITY_ATTRIBUTES} from "../minwinbase.h/minWinBase.js";
import {COLORREF} from "../windef.h/windef.js";


const lib = koffi.load("kernel32.dll");
import {createAutoLoader} from "../../internals/loader.js";

// @formatter: off

export const FOREGROUND_BLUE = 0x0001;
export const FOREGROUND_GREEN = 0x0002;
export const FOREGROUND_RED = 0x0004;
export const FOREGROUND_INTENSITY = 0x0008;
export const BACKGROUND_BLUE = 0x0010;
export const BACKGROUND_GREEN = 0x0020;
export const BACKGROUND_RED = 0x0040;
export const BACKGROUND_INTENSITY = 0x0080;
export const COMMON_LVB_LEADING_BYTE = 0x0100;
export const COMMON_LVB_TRAILING_BYTE = 0x0200;
export const COMMON_LVB_GRID_HORIZONTAL = 0x0400;
export const COMMON_LVB_GRID_LVERTICAL = 0x0800;
export const COMMON_LVB_GRID_RVERTICAL = 0x1000;
export const COMMON_LVB_REVERSE_VIDEO = 0x4000;
export const COMMON_LVB_UNDERSCORE = 0x8000;
export const COMMON_LVB_SBCSDBCS = 0x0300;

export function FillConsoleOutputCharacterA () {};
FillConsoleOutputCharacterA = createAutoLoader(lib, "FillConsoleOutputCharacterA", BOOL /* BOOL */, [
	HANDLE,       /* in  HANDLE  hConsoleOutput         */
	CHAR,         /* in  CHAR    cCharacter             */
	DWORD,        /* in  DWORD   nLength                */
	COORD,        /* in  COORD   dwWriteCoord           */
	out(LPDWORD), /* out LPDWORD lpNumberOfCharsWritten */
], f => FillConsoleOutputCharacterA = f);

export function FillConsoleOutputCharacterW () {};
FillConsoleOutputCharacterW = createAutoLoader(lib, "FillConsoleOutputCharacterW", BOOL /* BOOL */, [
	HANDLE,       /* in  HANDLE  hConsoleOutput         */
	WCHAR,        /* in  WCHAR   cCharacter             */
	DWORD,        /* in  DWORD   nLength                */
	COORD,        /* in  COORD   dwWriteCoord           */
	out(LPDWORD), /* out LPDWORD lpNumberOfCharsWritten */
], f => FillConsoleOutputCharacterW = f);
export {FillConsoleOutputCharacterW as FillConsoleOutputCharacter};

export function FillConsoleOutputAttribute () {};
FillConsoleOutputAttribute = createAutoLoader(lib, "FillConsoleOutputAttribute", BOOL /* BOOL */, [
	HANDLE,       /* in  HANDLE  hConsoleOutput         */
	WORD,         /* in  WORD    wAttribute             */
	DWORD,        /* in  DWORD   nLength                */
	COORD,        /* in  COORD   dwWriteCoord           */
	out(LPDWORD), /* out LPDWORD lpNumberOfAttrsWritten */
], f => FillConsoleOutputAttribute = f);

export function GenerateConsoleCtrlEvent () {};
GenerateConsoleCtrlEvent = createAutoLoader(lib, "GenerateConsoleCtrlEvent", BOOL /* BOOL */, [
	DWORD, /* in DWORD dwCtrlEvent      */
	DWORD, /* in DWORD dwProcessGroupId */
], f => GenerateConsoleCtrlEvent = f);

export function CreateConsoleScreenBuffer () {};
CreateConsoleScreenBuffer = createAutoLoader(lib, "CreateConsoleScreenBuffer", HANDLE /* HANDLE */, [
	DWORD,                        /* in       DWORD                      dwDesiredAccess      */
	DWORD,                        /* in       DWORD                      dwShareMode          */
	pointer(SECURITY_ATTRIBUTES), /* in opt   CONST SECURITY_ATTRIBUTES* lpSecurityAttributes */
	DWORD,                        /* in       DWORD                      dwFlags              */
	LPVOID,                       /* reserved LPVOID                     lpScreenBufferData   */
], f => CreateConsoleScreenBuffer = f);

export function SetConsoleActiveScreenBuffer () {};
SetConsoleActiveScreenBuffer = createAutoLoader(lib, "SetConsoleActiveScreenBuffer", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hConsoleOutput */
], f => SetConsoleActiveScreenBuffer = f);

export function FlushConsoleInputBuffer () {};
FlushConsoleInputBuffer = createAutoLoader(lib, "FlushConsoleInputBuffer", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hConsoleInput */
], f => FlushConsoleInputBuffer = f);

export function SetConsoleCP () {};
SetConsoleCP = createAutoLoader(lib, "SetConsoleCP", BOOL /* BOOL */, [
	UINT, /* in UINT wCodePageID */
], f => SetConsoleCP = f);

export function SetConsoleOutputCP () {};
SetConsoleOutputCP = createAutoLoader(lib, "SetConsoleOutputCP", BOOL /* BOOL */, [
	UINT, /* in UINT wCodePageID */
], f => SetConsoleOutputCP = f);

export const CONSOLE_CURSOR_INFO = struct({
	dwSize   : DWORD, // DWORD
	bVisible : BOOL,  // BOOL
});
export const PCONSOLE_CURSOR_INFO = pointer(CONSOLE_CURSOR_INFO);

export function GetConsoleCursorInfo () {};
GetConsoleCursorInfo = createAutoLoader(lib, "GetConsoleCursorInfo", BOOL /* BOOL */, [
	HANDLE,                    /* in  HANDLE               hConsoleOutput      */
	out(PCONSOLE_CURSOR_INFO), /* out PCONSOLE_CURSOR_INFO lpConsoleCursorInfo */
], f => GetConsoleCursorInfo = f);

export function SetConsoleCursorInfo () {};
SetConsoleCursorInfo = createAutoLoader(lib, "SetConsoleCursorInfo", BOOL /* BOOL */, [
	HANDLE,                       /* in HANDLE                     hConsoleOutput      */
	pointer(CONSOLE_CURSOR_INFO), /* in CONST CONSOLE_CURSOR_INFO* lpConsoleCursorInfo */
], f => SetConsoleCursorInfo = f);

export const CONSOLE_SCREEN_BUFFER_INFO = struct({
	dwSize              : COORD,      // COORD
	dwCursorPosition    : COORD,      // COORD
	wAttributes         : WORD,       // WORD
	srWindow            : SMALL_RECT, // SMALL_RECT
	dwMaximumWindowSize : COORD,      // COORD
});
export const PCONSOLE_SCREEN_BUFFER_INFO = pointer(CONSOLE_SCREEN_BUFFER_INFO);

export function GetConsoleScreenBufferInfo () {};
GetConsoleScreenBufferInfo = createAutoLoader(lib, "GetConsoleScreenBufferInfo", BOOL /* BOOL */, [
	HANDLE,                           /* in  HANDLE                      hConsoleOutput            */
	out(PCONSOLE_SCREEN_BUFFER_INFO), /* out PCONSOLE_SCREEN_BUFFER_INFO lpConsoleScreenBufferInfo */
], f => GetConsoleScreenBufferInfo = f);

export const CONSOLE_SCREEN_BUFFER_INFOEX = struct({
	cbSize               : ULONG,               // ULONG
	dwSize               : COORD,               // COORD
	dwCursorPosition     : COORD,               // COORD
	wAttributes          : WORD,                // WORD
	srWindow             : SMALL_RECT,          // SMALL_RECT
	dwMaximumWindowSize  : COORD,               // COORD
	wPopupAttributes     : WORD,                // WORD
	bFullscreenSupported : BOOL,                // BOOL
	ColorTable           : array(COLORREF, 16), // COLORREF
});
export const PCONSOLE_SCREEN_BUFFER_INFOEX = pointer(CONSOLE_SCREEN_BUFFER_INFOEX);

export function GetConsoleScreenBufferInfoEx () {};
GetConsoleScreenBufferInfoEx = createAutoLoader(lib, "GetConsoleScreenBufferInfoEx", BOOL /* BOOL */, [
	HANDLE,                               /* in     HANDLE                        hConsoleOutput              */
	inout(PCONSOLE_SCREEN_BUFFER_INFOEX), /* in out PCONSOLE_SCREEN_BUFFER_INFOEX lpConsoleScreenBufferInfoEx */
], f => GetConsoleScreenBufferInfoEx = f);

export function SetConsoleScreenBufferInfoEx () {};
SetConsoleScreenBufferInfoEx = createAutoLoader(lib, "SetConsoleScreenBufferInfoEx", BOOL /* BOOL */, [
	HANDLE,                        /* in HANDLE                        hConsoleOutput              */
	PCONSOLE_SCREEN_BUFFER_INFOEX, /* in PCONSOLE_SCREEN_BUFFER_INFOEX lpConsoleScreenBufferInfoEx */
], f => SetConsoleScreenBufferInfoEx = f);

export function SetConsoleScreenBufferSize () {};
SetConsoleScreenBufferSize = createAutoLoader(lib, "SetConsoleScreenBufferSize", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hConsoleOutput */
	COORD,  /* in COORD  dwSize         */
], f => SetConsoleScreenBufferSize = f);

export function SetConsoleCursorPosition () {};
SetConsoleCursorPosition = createAutoLoader(lib, "SetConsoleCursorPosition", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hConsoleOutput   */
	COORD,  /* in COORD  dwCursorPosition */
], f => SetConsoleCursorPosition = f);

export function GetLargestConsoleWindowSize () {};
GetLargestConsoleWindowSize = createAutoLoader(lib, "GetLargestConsoleWindowSize", COORD /* COORD */, [
	HANDLE, /* in HANDLE hConsoleOutput */
], f => GetLargestConsoleWindowSize = f);

export function SetConsoleTextAttribute () {};
SetConsoleTextAttribute = createAutoLoader(lib, "SetConsoleTextAttribute", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hConsoleOutput */
	WORD,   /* in WORD   wAttributes    */
], f => SetConsoleTextAttribute = f);

export function SetConsoleWindowInfo () {};
SetConsoleWindowInfo = createAutoLoader(lib, "SetConsoleWindowInfo", BOOL /* BOOL */, [
	HANDLE,              /* in HANDLE            hConsoleOutput  */
	BOOL,                /* in BOOL              bAbsolute       */
	pointer(SMALL_RECT), /* in CONST SMALL_RECT* lpConsoleWindow */
], f => SetConsoleWindowInfo = f);

export function WriteConsoleOutputCharacterA () {};
WriteConsoleOutputCharacterA = createAutoLoader(lib, "WriteConsoleOutputCharacterA", BOOL /* BOOL */, [
	HANDLE,       /* in  HANDLE  hConsoleOutput         */
	LPCSTR,       /*     LPCSTR  lpCharacter            */
	DWORD,        /* in  DWORD   nLength                */
	COORD,        /* in  COORD   dwWriteCoord           */
	out(LPDWORD), /* out LPDWORD lpNumberOfCharsWritten */
], f => WriteConsoleOutputCharacterA = f);

export function WriteConsoleOutputCharacterW () {};
WriteConsoleOutputCharacterW = createAutoLoader(lib, "WriteConsoleOutputCharacterW", BOOL /* BOOL */, [
	HANDLE,       /* in  HANDLE  hConsoleOutput         */
	LPCWSTR,      /*     LPCWSTR lpCharacter            */
	DWORD,        /* in  DWORD   nLength                */
	COORD,        /* in  COORD   dwWriteCoord           */
	out(LPDWORD), /* out LPDWORD lpNumberOfCharsWritten */
], f => WriteConsoleOutputCharacterW = f);
export {WriteConsoleOutputCharacterW as WriteConsoleOutputCharacter};

export function WriteConsoleOutputAttribute () {};
WriteConsoleOutputAttribute = createAutoLoader(lib, "WriteConsoleOutputAttribute", BOOL /* BOOL */, [
	HANDLE,        /* in  HANDLE      hConsoleOutput         */
	pointer(WORD), /*     CONST WORD* lpAttribute            */
	DWORD,         /* in  DWORD       nLength                */
	COORD,         /* in  COORD       dwWriteCoord           */
	out(LPDWORD),  /* out LPDWORD     lpNumberOfAttrsWritten */
], f => WriteConsoleOutputAttribute = f);

export function ReadConsoleOutputCharacterA () {};
ReadConsoleOutputCharacterA = createAutoLoader(lib, "ReadConsoleOutputCharacterA", BOOL /* BOOL */, [
	HANDLE,       /* in  HANDLE  hConsoleOutput      */
	LPSTR,        /*     LPSTR   lpCharacter         */
	DWORD,        /* in  DWORD   nLength             */
	COORD,        /* in  COORD   dwReadCoord         */
	out(LPDWORD), /* out LPDWORD lpNumberOfCharsRead */
], f => ReadConsoleOutputCharacterA = f);

export function ReadConsoleOutputCharacterW () {};
ReadConsoleOutputCharacterW = createAutoLoader(lib, "ReadConsoleOutputCharacterW", BOOL /* BOOL */, [
	HANDLE,       /* in  HANDLE  hConsoleOutput      */
	LPWSTR,       /*     LPWSTR  lpCharacter         */
	DWORD,        /* in  DWORD   nLength             */
	COORD,        /* in  COORD   dwReadCoord         */
	out(LPDWORD), /* out LPDWORD lpNumberOfCharsRead */
], f => ReadConsoleOutputCharacterW = f);
export {ReadConsoleOutputCharacterW as ReadConsoleOutputCharacter};

export function ReadConsoleOutputAttribute () {};
ReadConsoleOutputAttribute = createAutoLoader(lib, "ReadConsoleOutputAttribute", BOOL /* BOOL */, [
	HANDLE,       /* in  HANDLE  hConsoleOutput      */
	LPWORD,       /*     LPWORD  lpAttribute         */
	DWORD,        /* in  DWORD   nLength             */
	COORD,        /* in  COORD   dwReadCoord         */
	out(LPDWORD), /* out LPDWORD lpNumberOfAttrsRead */
], f => ReadConsoleOutputAttribute = f);

export function WriteConsoleInputA () {};
WriteConsoleInputA = createAutoLoader(lib, "WriteConsoleInputA", BOOL /* BOOL */, [
	HANDLE,                /* in  HANDLE              hConsoleInput           */
	pointer(INPUT_RECORD), /*     CONST INPUT_RECORD* lpBuffer                */
	DWORD,                 /* in  DWORD               nLength                 */
	out(LPDWORD),          /* out LPDWORD             lpNumberOfEventsWritten */
], f => WriteConsoleInputA = f);

export function WriteConsoleInputW () {};
WriteConsoleInputW = createAutoLoader(lib, "WriteConsoleInputW", BOOL /* BOOL */, [
	HANDLE,                /* in  HANDLE              hConsoleInput           */
	pointer(INPUT_RECORD), /*     CONST INPUT_RECORD* lpBuffer                */
	DWORD,                 /* in  DWORD               nLength                 */
	out(LPDWORD),          /* out LPDWORD             lpNumberOfEventsWritten */
], f => WriteConsoleInputW = f);
export {WriteConsoleInputW as WriteConsoleInput};

export function ScrollConsoleScreenBufferA () {};
ScrollConsoleScreenBufferA = createAutoLoader(lib, "ScrollConsoleScreenBufferA", BOOL /* BOOL */, [
	HANDLE,              /* in     HANDLE            hConsoleOutput      */
	pointer(SMALL_RECT), /* in     CONST SMALL_RECT* lpScrollRectangle   */
	pointer(SMALL_RECT), /* in opt CONST SMALL_RECT* lpClipRectangle     */
	COORD,               /* in     COORD             dwDestinationOrigin */
	pointer(CHAR_INFO),  /* in     CONST CHAR_INFO*  lpFill              */
], f => ScrollConsoleScreenBufferA = f);

export function ScrollConsoleScreenBufferW () {};
ScrollConsoleScreenBufferW = createAutoLoader(lib, "ScrollConsoleScreenBufferW", BOOL /* BOOL */, [
	HANDLE,              /* in     HANDLE            hConsoleOutput      */
	pointer(SMALL_RECT), /* in     CONST SMALL_RECT* lpScrollRectangle   */
	pointer(SMALL_RECT), /* in opt CONST SMALL_RECT* lpClipRectangle     */
	COORD,               /* in     COORD             dwDestinationOrigin */
	pointer(CHAR_INFO),  /* in     CONST CHAR_INFO*  lpFill              */
], f => ScrollConsoleScreenBufferW = f);
export {ScrollConsoleScreenBufferW as ScrollConsoleScreenBuffer};

export function WriteConsoleOutputA () {};
WriteConsoleOutputA = createAutoLoader(lib, "WriteConsoleOutputA", BOOL /* BOOL */, [
	HANDLE,             /* in     HANDLE           hConsoleOutput */
	pointer(CHAR_INFO), /*        CONST CHAR_INFO* lpBuffer       */
	COORD,              /* in     COORD            dwBufferSize   */
	COORD,              /* in     COORD            dwBufferCoord  */
	inout(PSMALL_RECT), /* in out PSMALL_RECT      lpWriteRegion  */
], f => WriteConsoleOutputA = f);

export function WriteConsoleOutputW () {};
WriteConsoleOutputW = createAutoLoader(lib, "WriteConsoleOutputW", BOOL /* BOOL */, [
	HANDLE,             /* in     HANDLE           hConsoleOutput */
	pointer(CHAR_INFO), /*        CONST CHAR_INFO* lpBuffer       */
	COORD,              /* in     COORD            dwBufferSize   */
	COORD,              /* in     COORD            dwBufferCoord  */
	inout(PSMALL_RECT), /* in out PSMALL_RECT      lpWriteRegion  */
], f => WriteConsoleOutputW = f);
export {WriteConsoleOutputW as WriteConsoleOutput};

export function ReadConsoleOutputA () {};
ReadConsoleOutputA = createAutoLoader(lib, "ReadConsoleOutputA", BOOL /* BOOL */, [
	HANDLE,             /* in     HANDLE      hConsoleOutput */
	PCHAR_INFO,         /*        PCHAR_INFO  lpBuffer       */
	COORD,              /* in     COORD       dwBufferSize   */
	COORD,              /* in     COORD       dwBufferCoord  */
	inout(PSMALL_RECT), /* in out PSMALL_RECT lpReadRegion   */
], f => ReadConsoleOutputA = f);

export function ReadConsoleOutputW () {};
ReadConsoleOutputW = createAutoLoader(lib, "ReadConsoleOutputW", BOOL /* BOOL */, [
	HANDLE,             /* in     HANDLE      hConsoleOutput */
	PCHAR_INFO,         /*        PCHAR_INFO  lpBuffer       */
	COORD,              /* in     COORD       dwBufferSize   */
	COORD,              /* in     COORD       dwBufferCoord  */
	inout(PSMALL_RECT), /* in out PSMALL_RECT lpReadRegion   */
], f => ReadConsoleOutputW = f);
export {ReadConsoleOutputW as ReadConsoleOutput};

export function GetConsoleTitleA () {};
GetConsoleTitleA = createAutoLoader(lib, "GetConsoleTitleA", DWORD /* DWORD */, [
	LPSTR, /*    LPSTR lpConsoleTitle */
	DWORD, /* in DWORD nSize          */
], f => GetConsoleTitleA = f);

export function GetConsoleTitleW () {};
GetConsoleTitleW = createAutoLoader(lib, "GetConsoleTitleW", DWORD /* DWORD */, [
	LPWSTR, /*    LPWSTR lpConsoleTitle */
	DWORD,  /* in DWORD  nSize          */
], f => GetConsoleTitleW = f);
export {GetConsoleTitleW as GetConsoleTitle};

export function GetConsoleOriginalTitleA () {};
GetConsoleOriginalTitleA = createAutoLoader(lib, "GetConsoleOriginalTitleA", DWORD /* DWORD */, [
	LPSTR, /*    LPSTR lpConsoleTitle */
	DWORD, /* in DWORD nSize          */
], f => GetConsoleOriginalTitleA = f);

export function GetConsoleOriginalTitleW () {};
GetConsoleOriginalTitleW = createAutoLoader(lib, "GetConsoleOriginalTitleW", DWORD /* DWORD */, [
	LPWSTR, /*    LPWSTR lpConsoleTitle */
	DWORD,  /* in DWORD  nSize          */
], f => GetConsoleOriginalTitleW = f);
export {GetConsoleOriginalTitleW as GetConsoleOriginalTitle};

export function SetConsoleTitleA () {};
SetConsoleTitleA = createAutoLoader(lib, "SetConsoleTitleA", BOOL /* BOOL */, [
	LPCSTR, /* in LPCSTR lpConsoleTitle */
], f => SetConsoleTitleA = f);

export function SetConsoleTitleW () {};
SetConsoleTitleW = createAutoLoader(lib, "SetConsoleTitleW", BOOL /* BOOL */, [
	LPCWSTR, /* in LPCWSTR lpConsoleTitle */
], f => SetConsoleTitleW = f);
export {SetConsoleTitleW as SetConsoleTitle};

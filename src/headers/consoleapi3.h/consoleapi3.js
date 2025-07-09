import koffi from "koffi";

// basic
import {array, struct, pointer, out} from "../../types.js";

// minwindef.h
import {
	DWORD, LPDWORD,
	BOOL,
	UINT,
	ULONG,
} from "../minwindef.h/minWindef.js";

// windef.h
import {HWND} from "../windef.h/windef.js";

// winnt.h
import {HANDLE} from "../winnt.h/winnt.js";
import {
	WCHAR,
	LPSTR, LPWSTR,
	VOID,
} from "../winnt.h/winnt.js";

// wincontypes.h
import {COORD, PCONSOLE_FONT_INFO, PCOORD, SMALL_RECT} from "../wincontypes.h/wincontypes.js";
import {LF_FACESIZE} from "../wingdi.h/constants.js";


const lib = koffi.load("kernel32.dll");
import {createAutoLoader} from "../../internals/loader.js";

// @formatter: off

export function GetNumberOfConsoleMouseButtons () {};
GetNumberOfConsoleMouseButtons = createAutoLoader(lib, "GetNumberOfConsoleMouseButtons", BOOL /* BOOL */, [
	out(LPDWORD), /* out LPDWORD lpNumberOfMouseButtons */
], f => GetNumberOfConsoleMouseButtons = f);

export function GetConsoleFontSize () {};
GetConsoleFontSize = createAutoLoader(lib, "GetConsoleFontSize", COORD /* COORD */, [
	HANDLE, /* in HANDLE hConsoleOutput */
	DWORD,  /* in DWORD  nFont          */
], f => GetConsoleFontSize = f);

export function GetCurrentConsoleFont () {};
GetCurrentConsoleFont = createAutoLoader(lib, "GetCurrentConsoleFont", BOOL /* BOOL */, [
	HANDLE,                  /* in  HANDLE             hConsoleOutput       */
	BOOL,                    /* in  BOOL               bMaximumWindow       */
	out(PCONSOLE_FONT_INFO), /* out PCONSOLE_FONT_INFO lpConsoleCurrentFont */
], f => GetCurrentConsoleFont = f);

export const CONSOLE_FONT_INFOEX = struct({
	cbSize     : ULONG,                               // ULONG
	nFont      : DWORD,                               // DWORD
	dwFontSize : COORD,                               // COORD
	FontFamily : UINT,                                // UINT
	FontWeight : UINT,                                // UINT
	FaceName   : array(WCHAR, LF_FACESIZE, "String"), // WCHAR
});
export const PCONSOLE_FONT_INFOEX = pointer(CONSOLE_FONT_INFOEX);

export function GetCurrentConsoleFontEx () {};
GetCurrentConsoleFontEx = createAutoLoader(lib, "GetCurrentConsoleFontEx", BOOL /* BOOL */, [
	HANDLE,                    /* in  HANDLE               hConsoleOutput         */
	BOOL,                      /* in  BOOL                 bMaximumWindow         */
	out(PCONSOLE_FONT_INFOEX), /* out PCONSOLE_FONT_INFOEX lpConsoleCurrentFontEx */
], f => GetCurrentConsoleFontEx = f);

export function SetCurrentConsoleFontEx () {};
SetCurrentConsoleFontEx = createAutoLoader(lib, "SetCurrentConsoleFontEx", BOOL /* BOOL */, [
	HANDLE,               /* in HANDLE               hConsoleOutput         */
	BOOL,                 /* in BOOL                 bMaximumWindow         */
	PCONSOLE_FONT_INFOEX, /* in PCONSOLE_FONT_INFOEX lpConsoleCurrentFontEx */
], f => SetCurrentConsoleFontEx = f);

//
// Selection flags
//

export const CONSOLE_NO_SELECTION          = 0x0000;
export const CONSOLE_SELECTION_IN_PROGRESS = 0x0001; // selection has begun
export const CONSOLE_SELECTION_NOT_EMPTY   = 0x0002; // non-null select rectangle
export const CONSOLE_MOUSE_SELECTION       = 0x0004; // selecting with mouse
export const CONSOLE_MOUSE_DOWN            = 0x0008; // mouse is down

export const CONSOLE_SELECTION_INFO = struct({
	dwFlags           : DWORD,      // DWORD
	dwSelectionAnchor : COORD,      // COORD
	srSelection       : SMALL_RECT, // SMALL_RECT
});
export const PCONSOLE_SELECTION_INFO = pointer(CONSOLE_SELECTION_INFO);

export function GetConsoleSelectionInfo () {};
GetConsoleSelectionInfo = createAutoLoader(lib, "GetConsoleSelectionInfo", BOOL /* BOOL */, [
	out(PCONSOLE_SELECTION_INFO), /* out PCONSOLE_SELECTION_INFO lpConsoleSelectionInfo */
], f => GetConsoleSelectionInfo = f);


//
// History flags
//

export const HISTORY_NO_DUP_FLAG = 0x1;

export const CONSOLE_HISTORY_INFO = struct({
	cbSize                 : UINT,  // UINT
	HistoryBufferSize      : UINT,  // UINT
	NumberOfHistoryBuffers : UINT,  // UINT
	dwFlags                : DWORD, // DWORD
});
export const PCONSOLE_HISTORY_INFO = pointer(CONSOLE_HISTORY_INFO);

export function GetConsoleHistoryInfo () {};
GetConsoleHistoryInfo = createAutoLoader(lib, "GetConsoleHistoryInfo", BOOL /* BOOL */, [
	out(PCONSOLE_HISTORY_INFO), /* out PCONSOLE_HISTORY_INFO lpConsoleHistoryInfo */
], f => GetConsoleHistoryInfo = f);

export function SetConsoleHistoryInfo () {};
SetConsoleHistoryInfo = createAutoLoader(lib, "SetConsoleHistoryInfo", BOOL /* BOOL */, [
	PCONSOLE_HISTORY_INFO, /* in PCONSOLE_HISTORY_INFO lpConsoleHistoryInfo */
], f => SetConsoleHistoryInfo = f);


export const CONSOLE_FULLSCREEN = 1;
export const CONSOLE_FULLSCREEN_HARDWARE = 2;

export function GetConsoleDisplayMode () {};
GetConsoleDisplayMode = createAutoLoader(lib, "GetConsoleDisplayMode", BOOL /* BOOL */, [
	out(LPDWORD), /* out LPDWORD lpModeFlags */
], f => GetConsoleDisplayMode = f);

export const CONSOLE_FULLSCREEN_MODE = 1;
export const CONSOLE_WINDOWED_MODE = 2;

export function SetConsoleDisplayMode () {};
SetConsoleDisplayMode = createAutoLoader(lib, "SetConsoleDisplayMode", BOOL /* BOOL */, [
	HANDLE,      /* in      HANDLE hConsoleOutput              */
	DWORD,       /* in      DWORD  dwFlags                     */
	out(PCOORD), /* out opt PCOORD lpNewScreenBufferDimensions */
], f => SetConsoleDisplayMode = f);

export function GetConsoleWindow () {};
GetConsoleWindow = createAutoLoader(lib, "GetConsoleWindow", HWND /* HWND */, [
	/* void */
], f => GetConsoleWindow = f);

export function AddConsoleAliasA () {};
AddConsoleAliasA = createAutoLoader(lib, "AddConsoleAliasA", BOOL /* BOOL */, [
	LPSTR, /* in LPSTR Source  */
	LPSTR, /* in LPSTR Target  */
	LPSTR, /* in LPSTR ExeName */
], f => AddConsoleAliasA = f);

export function AddConsoleAliasW () {};
AddConsoleAliasW = createAutoLoader(lib, "AddConsoleAliasW", BOOL /* BOOL */, [
	LPWSTR, /* in LPWSTR Source  */
	LPWSTR, /* in LPWSTR Target  */
	LPWSTR, /* in LPWSTR ExeName */
], f => AddConsoleAliasW = f);
export {AddConsoleAliasW as AddConsoleAlias};

export function GetConsoleAliasA () {};
GetConsoleAliasA = createAutoLoader(lib, "GetConsoleAliasA", DWORD /* DWORD */, [
	LPSTR, /* in LPSTR Source             */
	LPSTR, /*    LPSTR TargetBuffer       */
	DWORD, /* in DWORD TargetBufferLength */
	LPSTR, /* in LPSTR ExeName            */
], f => GetConsoleAliasA = f);

export function GetConsoleAliasW () {};
GetConsoleAliasW = createAutoLoader(lib, "GetConsoleAliasW", DWORD /* DWORD */, [
	LPWSTR, /* in LPWSTR Source             */
	LPWSTR, /*    LPWSTR TargetBuffer       */
	DWORD,  /* in DWORD  TargetBufferLength */
	LPWSTR, /* in LPWSTR ExeName            */
], f => GetConsoleAliasW = f);
export {GetConsoleAliasW as GetConsoleAlias};

export function GetConsoleAliasesLengthA () {};
GetConsoleAliasesLengthA = createAutoLoader(lib, "GetConsoleAliasesLengthA", DWORD /* DWORD */, [
	LPSTR, /* in LPSTR ExeName */
], f => GetConsoleAliasesLengthA = f);

export function GetConsoleAliasesLengthW () {};
GetConsoleAliasesLengthW = createAutoLoader(lib, "GetConsoleAliasesLengthW", DWORD /* DWORD */, [
	LPWSTR, /* in LPWSTR ExeName */
], f => GetConsoleAliasesLengthW = f);
export {GetConsoleAliasesLengthW as GetConsoleAliasesLength};

export function GetConsoleAliasExesLengthA () {};
GetConsoleAliasExesLengthA = createAutoLoader(lib, "GetConsoleAliasExesLengthA", DWORD /* DWORD */, [
	/* void */
], f => GetConsoleAliasExesLengthA = f);

export function GetConsoleAliasExesLengthW () {};
GetConsoleAliasExesLengthW = createAutoLoader(lib, "GetConsoleAliasExesLengthW", DWORD /* DWORD */, [
	/* void */
], f => GetConsoleAliasExesLengthW = f);
export {GetConsoleAliasExesLengthW as GetConsoleAliasExesLength};

export function GetConsoleAliasesA () {};
GetConsoleAliasesA = createAutoLoader(lib, "GetConsoleAliasesA", DWORD /* DWORD */, [
	LPSTR, /*    LPSTR AliasBuffer       */
	DWORD, /* in DWORD AliasBufferLength */
	LPSTR, /* in LPSTR ExeName           */
], f => GetConsoleAliasesA = f);

export function GetConsoleAliasesW () {};
GetConsoleAliasesW = createAutoLoader(lib, "GetConsoleAliasesW", DWORD /* DWORD */, [
	LPWSTR, /*    LPWSTR AliasBuffer       */
	DWORD,  /* in DWORD  AliasBufferLength */
	LPWSTR, /* in LPWSTR ExeName           */
], f => GetConsoleAliasesW = f);
export {GetConsoleAliasesW as GetConsoleAliases};

export function GetConsoleAliasExesA () {};
GetConsoleAliasExesA = createAutoLoader(lib, "GetConsoleAliasExesA", DWORD /* DWORD */, [
	LPSTR, /*    LPSTR ExeNameBuffer       */
	DWORD, /* in DWORD ExeNameBufferLength */
], f => GetConsoleAliasExesA = f);

export function GetConsoleAliasExesW () {};
GetConsoleAliasExesW = createAutoLoader(lib, "GetConsoleAliasExesW", DWORD /* DWORD */, [
	LPWSTR, /*    LPWSTR ExeNameBuffer       */
	DWORD,  /* in DWORD  ExeNameBufferLength */
], f => GetConsoleAliasExesW = f);
export {GetConsoleAliasExesW as GetConsoleAliasExes};

export function ExpungeConsoleCommandHistoryA () {};
ExpungeConsoleCommandHistoryA = createAutoLoader(lib, "ExpungeConsoleCommandHistoryA", VOID /* VOID */, [
	LPSTR, /* in LPSTR ExeName */
], f => ExpungeConsoleCommandHistoryA = f);

export function ExpungeConsoleCommandHistoryW () {};
ExpungeConsoleCommandHistoryW = createAutoLoader(lib, "ExpungeConsoleCommandHistoryW", VOID /* VOID */, [
	LPWSTR, /* in LPWSTR ExeName */
], f => ExpungeConsoleCommandHistoryW = f);
export {ExpungeConsoleCommandHistoryW as ExpungeConsoleCommandHistory};

export function SetConsoleNumberOfCommandsA () {};
SetConsoleNumberOfCommandsA = createAutoLoader(lib, "SetConsoleNumberOfCommandsA", BOOL /* BOOL */, [
	DWORD, /* in DWORD Number  */
	LPSTR, /* in LPSTR ExeName */
], f => SetConsoleNumberOfCommandsA = f);

export function SetConsoleNumberOfCommandsW () {};
SetConsoleNumberOfCommandsW = createAutoLoader(lib, "SetConsoleNumberOfCommandsW", BOOL /* BOOL */, [
	DWORD,  /* in DWORD  Number  */
	LPWSTR, /* in LPWSTR ExeName */
], f => SetConsoleNumberOfCommandsW = f);
export {SetConsoleNumberOfCommandsW as SetConsoleNumberOfCommands};

export function GetConsoleCommandHistoryLengthA () {};
GetConsoleCommandHistoryLengthA = createAutoLoader(lib, "GetConsoleCommandHistoryLengthA", DWORD /* DWORD */, [
	LPSTR, /* in LPSTR ExeName */
], f => GetConsoleCommandHistoryLengthA = f);

export function GetConsoleCommandHistoryLengthW () {};
GetConsoleCommandHistoryLengthW = createAutoLoader(lib, "GetConsoleCommandHistoryLengthW", DWORD /* DWORD */, [
	LPWSTR, /* in LPWSTR ExeName */
], f => GetConsoleCommandHistoryLengthW = f);
export {GetConsoleCommandHistoryLengthW as GetConsoleCommandHistoryLength};

export function GetConsoleCommandHistoryA () {};
GetConsoleCommandHistoryA = createAutoLoader(lib, "GetConsoleCommandHistoryA", DWORD /* DWORD */, [
	LPSTR, /*    LPSTR Commands            */
	DWORD, /* in DWORD CommandBufferLength */
	LPSTR, /* in LPSTR ExeName             */
], f => GetConsoleCommandHistoryA = f);

export function GetConsoleCommandHistoryW () {};
GetConsoleCommandHistoryW = createAutoLoader(lib, "GetConsoleCommandHistoryW", DWORD /* DWORD */, [
	LPWSTR, /*    LPWSTR Commands            */
	DWORD,  /* in DWORD  CommandBufferLength */
	LPWSTR, /* in LPWSTR ExeName             */
], f => GetConsoleCommandHistoryW = f);
export {GetConsoleCommandHistoryW as GetConsoleCommandHistory};

export function GetConsoleProcessList () {};
GetConsoleProcessList = createAutoLoader(lib, "GetConsoleProcessList", DWORD /* DWORD */, [
	LPDWORD, /*    LPDWORD lpdwProcessList */
	DWORD,   /* in DWORD   dwProcessCount  */
], f => GetConsoleProcessList = f);

import koffi from "koffi";

import {typecast} from "../../macros.js";
import {struct, pointer, out} from "../../types.js";

import {BOOL, DWORD, LPDWORD, LPVOID, UINT, ULONG} from "../minwindef.h/minWindef.js";
import {HANDLE, HRESULT, VOID} from "../winnt.h/winnt.js";
import {COORD, HPCON, PINPUT_RECORD} from "../wincontypes.h/wincontypes.js";


const lib = koffi.load("kernel32.dll");
import {createAutoLoader} from "../../internals/loader.js";

// @formatter: off

export function AllocConsole () {};
AllocConsole = createAutoLoader(lib, "AllocConsole", BOOL /* BOOL */, [
	/* void */
], f => AllocConsole = f);

export function FreeConsole () {};
FreeConsole = createAutoLoader(lib, "FreeConsole", BOOL /* BOOL */, [
	/* void */
], f => FreeConsole = f);

export function AttachConsole () {};
AttachConsole = createAutoLoader(lib, "AttachConsole", BOOL /* BOOL */, [
	DWORD, /* in DWORD dwProcessId */
], f => AttachConsole = f);

export const ATTACH_PARENT_PROCESS = typecast(DWORD, (-1));

export function GetConsoleCP () {};
GetConsoleCP = createAutoLoader(lib, "GetConsoleCP", UINT /* UINT */, [
	/* void */
], f => GetConsoleCP = f);

export function GetConsoleOutputCP () {};
GetConsoleOutputCP = createAutoLoader(lib, "GetConsoleOutputCP", UINT /* UINT */, [
	/* void */
], f => GetConsoleOutputCP = f);

export const ENABLE_PROCESSED_INPUT = 0x0001;
export const ENABLE_LINE_INPUT = 0x0002;
export const ENABLE_ECHO_INPUT = 0x0004;
export const ENABLE_WINDOW_INPUT = 0x0008;
export const ENABLE_MOUSE_INPUT = 0x0010;
export const ENABLE_INSERT_MODE = 0x0020;
export const ENABLE_QUICK_EDIT_MODE = 0x0040;
export const ENABLE_EXTENDED_FLAGS = 0x0080;
export const ENABLE_AUTO_POSITION = 0x0100;
export const ENABLE_VIRTUAL_TERMINAL_INPUT = 0x0200;
export const ENABLE_PROCESSED_OUTPUT = 0x0001;
export const ENABLE_WRAP_AT_EOL_OUTPUT = 0x0002;
export const ENABLE_VIRTUAL_TERMINAL_PROCESSING = 0x0004;
export const DISABLE_NEWLINE_AUTO_RETURN = 0x0008;
export const ENABLE_LVB_GRID_WORLDWIDE = 0x0010;

export function GetConsoleMode () {};
GetConsoleMode = createAutoLoader(lib, "GetConsoleMode", BOOL /* BOOL */, [
	HANDLE,       /* in  HANDLE  hConsoleHandle */
	out(LPDWORD), /* out LPDWORD lpMode         */
], f => GetConsoleMode = f);

export function SetConsoleMode () {};
SetConsoleMode = createAutoLoader(lib, "SetConsoleMode", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE hConsoleHandle */
	DWORD,  /* in DWORD  dwMode         */
], f => SetConsoleMode = f);

export function GetNumberOfConsoleInputEvents () {};
GetNumberOfConsoleInputEvents = createAutoLoader(lib, "GetNumberOfConsoleInputEvents", BOOL /* BOOL */, [
	HANDLE,       /* in  HANDLE  hConsoleInput    */
	out(LPDWORD), /* out LPDWORD lpNumberOfEvents */
], f => GetNumberOfConsoleInputEvents = f);

export function PeekConsoleInputA () {};
PeekConsoleInputA = createAutoLoader(lib, "PeekConsoleInputA", BOOL /* BOOL */, [
	HANDLE,        /* in  HANDLE        hConsoleInput        */
	PINPUT_RECORD, /*     PINPUT_RECORD lpBuffer             */
	DWORD,         /* in  DWORD         nLength              */
	out(LPDWORD),  /* out LPDWORD       lpNumberOfEventsRead */
], f => PeekConsoleInputA = f);

export function PeekConsoleInputW () {};
PeekConsoleInputW = createAutoLoader(lib, "PeekConsoleInputW", BOOL /* BOOL */, [
	HANDLE,        /* in  HANDLE        hConsoleInput        */
	PINPUT_RECORD, /*     PINPUT_RECORD lpBuffer             */
	DWORD,         /* in  DWORD         nLength              */
	out(LPDWORD),  /* out LPDWORD       lpNumberOfEventsRead */
], f => PeekConsoleInputW = f);
export {PeekConsoleInputW as PeekConsoleInput};

export function WriteConsoleA () {};
WriteConsoleA = createAutoLoader(lib, "WriteConsoleA", BOOL /* BOOL */, [
	HANDLE,        /* in       HANDLE      hConsoleOutput         */
	pointer(VOID), /*          CONST VOID* lpBuffer               */
	DWORD,         /* in       DWORD       nNumberOfCharsToWrite  */
	out(LPDWORD),  /* out opt  LPDWORD     lpNumberOfCharsWritten */
	LPVOID,        /* reserved LPVOID      lpReserved             */
], f => WriteConsoleA = f);

export const CONSOLE_READCONSOLE_CONTROL = struct({
	nLength           : ULONG, // ULONG
	nInitialChars     : ULONG, // ULONG
	dwCtrlWakeupMask  : ULONG, // ULONG
	dwControlKeyState : ULONG, // ULONG
});
export const PCONSOLE_READCONSOLE_CONTROL = pointer(CONSOLE_READCONSOLE_CONTROL);

export function WriteConsoleW () {};
WriteConsoleW = createAutoLoader(lib, "WriteConsoleW", BOOL /* BOOL */, [
	HANDLE,        /* in       HANDLE      hConsoleOutput         */
	pointer(VOID), /*          CONST VOID* lpBuffer               */
	DWORD,         /* in       DWORD       nNumberOfCharsToWrite  */
	out(LPDWORD),  /* out opt  LPDWORD     lpNumberOfCharsWritten */
	LPVOID,        /* reserved LPVOID      lpReserved             */
], f => WriteConsoleW = f);
export {WriteConsoleW as WriteConsole};

export const CTRL_C_EVENT = 0;
export const CTRL_BREAK_EVENT = 1;
export const CTRL_CLOSE_EVENT = 2;
export const CTRL_LOGOFF_EVENT = 5;
export const CTRL_SHUTDOWN_EVENT = 6;

export const PHANDLER_ROUTINE = pointer(koffi.proto("__stdcall", "PHANDLER_ROUTINE", BOOL /* BOOL */, [
	DWORD, /* in DWORD CtrlType */
]));

export function SetConsoleCtrlHandler () {};
SetConsoleCtrlHandler = createAutoLoader(lib, "SetConsoleCtrlHandler", BOOL /* BOOL */, [
	PHANDLER_ROUTINE, /* in opt PHANDLER_ROUTINE HandlerRoutine */
	BOOL,             /* in     BOOL             Add            */
], f => SetConsoleCtrlHandler = f);

export const PSEUDOCONSOLE_INHERIT_CURSOR = (0x1);

export function CreatePseudoConsole () {};
CreatePseudoConsole = createAutoLoader(lib, "CreatePseudoConsole", HRESULT /* HRESULT */, [
	COORD,               /* in  COORD  size    */
	HANDLE,              /* in  HANDLE hInput  */
	HANDLE,              /* in  HANDLE hOutput */
	DWORD,               /* in  DWORD  dwFlags */
	out(pointer(HPCON)), /* out HPCON* phPC    */
], f => CreatePseudoConsole = f);

export function ResizePseudoConsole () {};
ResizePseudoConsole = createAutoLoader(lib, "ResizePseudoConsole", HRESULT /* HRESULT */, [
	HPCON, /* in HPCON hPC  */
	COORD, /* in COORD size */
], f => ResizePseudoConsole = f);

export function ClosePseudoConsole () {};
ClosePseudoConsole = createAutoLoader(lib, "ClosePseudoConsole", VOID /* VOID */, [
	HPCON, /* in HPCON hPC */
], f => ClosePseudoConsole = f);

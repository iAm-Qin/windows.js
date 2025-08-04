import {BOOL, DWORD, LPDWORD, LPVOID, UINT} from "../minwindef.h/minWindef.js";
import {HANDLE, HRESULT, VOID} from "../winnt.h";
import {COORD, HPCON, PINPUT_RECORD} from "../wincontypes.h/wincontypes.js";


export function AllocConsole (): BOOL;
export function FreeConsole (): BOOL;
export function AttachConsole (dwProcessId: DWORD): BOOL;
export function GetConsoleCP (): UINT;
export function GetConsoleOutputCP (): UINT;
export function GetConsoleMode (hConsoleHandle: HANDLE, lpMode: LPDWORD): BOOL;
export function SetConsoleMode (hConsoleHandle: HANDLE, dwMode: DWORD): BOOL;
export function GetNumberOfConsoleInputEvents (hConsoleInput: HANDLE, lpNumberOfEvents: LPDWORD): BOOL;
export function PeekConsoleInputA (hConsoleInput: HANDLE, lpBuffer: PINPUT_RECORD, nLength: DWORD, lpNumberOfEventsRead: LPDWORD): BOOL;
export function PeekConsoleInputW (hConsoleInput: HANDLE, lpBuffer: PINPUT_RECORD, nLength: DWORD, lpNumberOfEventsRead: LPDWORD): BOOL;
export function PeekConsoleInput (hConsoleInput: HANDLE, lpBuffer: PINPUT_RECORD, nLength: DWORD, lpNumberOfEventsRead: LPDWORD): BOOL;
export function WriteConsoleA (hConsoleOutput: HANDLE, lpBuffer: "VOID*", nNumberOfCharsToWrite: DWORD, lpNumberOfCharsWritten: LPDWORD, lpReserved: LPVOID): BOOL;
export function WriteConsoleW (hConsoleOutput: HANDLE, lpBuffer: "VOID*", nNumberOfCharsToWrite: DWORD, lpNumberOfCharsWritten: LPDWORD, lpReserved: LPVOID): BOOL;
export function WriteConsole (hConsoleOutput: HANDLE, lpBuffer: "VOID*", nNumberOfCharsToWrite: DWORD, lpNumberOfCharsWritten: LPDWORD, lpReserved: LPVOID): BOOL;
export function SetConsoleCtrlHandler (HandlerRoutine: PHANDLER_ROUTINE, Add: BOOL): BOOL;
export function CreatePseudoConsole (size: COORD, hInput: HANDLE, hOutput: HANDLE, dwFlags: DWORD, phPC: "HPCON*"): HRESULT;
export function ResizePseudoConsole (hPC: HPCON, size: COORD): HRESULT;
export function ClosePseudoConsole (hPC: HPCON): VOID;

// minwindef.h
import {
	DWORD, LPDWORD,
	BOOL,
} from "../minwindef.h/minWindef.js";

// windef.h
import {HWND} from "../windef.h/windef.js";

// winnt.h
import {
	HANDLE,
	LPSTR, LPWSTR,
	VOID,
} from "../winnt.h/winnt.js";

// wincontypes.h
import {COORD, PCONSOLE_FONT_INFO, PCOORD} from "../wincontypes.h/wincontypes.js";

// consoleapi3.h
import {
	PCONSOLE_FONT_INFOEX,
	PCONSOLE_SELECTION_INFO,
	PCONSOLE_HISTORY_INFO,
} from "./consoleapi3.js";


export function GetNumberOfConsoleMouseButtons (lpNumberOfMouseButtons: LPDWORD): BOOL;
export function GetConsoleFontSize (hConsoleOutput: HANDLE, nFont: DWORD): COORD;
export function GetCurrentConsoleFont (hConsoleOutput: HANDLE, bMaximumWindow: BOOL, lpConsoleCurrentFont: PCONSOLE_FONT_INFO): BOOL;
export function GetCurrentConsoleFontEx (hConsoleOutput: HANDLE, bMaximumWindow: BOOL, lpConsoleCurrentFontEx: PCONSOLE_FONT_INFOEX): BOOL;
export function SetCurrentConsoleFontEx (hConsoleOutput: HANDLE, bMaximumWindow: BOOL, lpConsoleCurrentFontEx: PCONSOLE_FONT_INFOEX): BOOL;
export function GetConsoleSelectionInfo (lpConsoleSelectionInfo: PCONSOLE_SELECTION_INFO): BOOL;
export function GetConsoleHistoryInfo (lpConsoleHistoryInfo: PCONSOLE_HISTORY_INFO): BOOL;
export function SetConsoleHistoryInfo (lpConsoleHistoryInfo: PCONSOLE_HISTORY_INFO): BOOL;
export function GetConsoleDisplayMode (lpModeFlags: LPDWORD): BOOL;
export function SetConsoleDisplayMode (hConsoleOutput: HANDLE, dwFlags: DWORD, lpNewScreenBufferDimensions: PCOORD): BOOL;
export function GetConsoleWindow (): HWND;
export function AddConsoleAliasA (Source: LPSTR, Target: LPSTR, ExeName: LPSTR): BOOL;
export function AddConsoleAliasW (Source: LPWSTR, Target: LPWSTR, ExeName: LPWSTR): BOOL;
export function AddConsoleAlias (Source: LPWSTR, Target: LPWSTR, ExeName: LPWSTR): BOOL;
export function GetConsoleAliasA (Source: LPSTR, TargetBuffer: LPSTR, TargetBufferLength: DWORD, ExeName: LPSTR): DWORD;
export function GetConsoleAliasW (Source: LPWSTR, TargetBuffer: LPWSTR, TargetBufferLength: DWORD, ExeName: LPWSTR): DWORD;
export function GetConsoleAlias (Source: LPWSTR, TargetBuffer: LPWSTR, TargetBufferLength: DWORD, ExeName: LPWSTR): DWORD;
export function GetConsoleAliasesLengthA (ExeName: LPSTR): DWORD;
export function GetConsoleAliasesLengthW (ExeName: LPWSTR): DWORD;
export function GetConsoleAliasesLength (ExeName: LPWSTR): DWORD;
export function GetConsoleAliasExesLengthA (): DWORD;
export function GetConsoleAliasExesLengthW (): DWORD;
export function GetConsoleAliasExesLength (): DWORD;
export function GetConsoleAliasesA (AliasBuffer: LPSTR, AliasBufferLength: DWORD, ExeName: LPSTR): DWORD;
export function GetConsoleAliasesW (AliasBuffer: LPWSTR, AliasBufferLength: DWORD, ExeName: LPWSTR): DWORD;
export function GetConsoleAliases (AliasBuffer: LPWSTR, AliasBufferLength: DWORD, ExeName: LPWSTR): DWORD;
export function GetConsoleAliasExesA (ExeNameBuffer: LPSTR, ExeNameBufferLength: DWORD): DWORD;
export function GetConsoleAliasExesW (ExeNameBuffer: LPWSTR, ExeNameBufferLength: DWORD): DWORD;
export function GetConsoleAliasExes (ExeNameBuffer: LPWSTR, ExeNameBufferLength: DWORD): DWORD;
export function ExpungeConsoleCommandHistoryA (ExeName: LPSTR): VOID;
export function ExpungeConsoleCommandHistoryW (ExeName: LPWSTR): VOID;
export function ExpungeConsoleCommandHistory (ExeName: LPWSTR): VOID;
export function SetConsoleNumberOfCommandsA (Number: DWORD, ExeName: LPSTR): BOOL;
export function SetConsoleNumberOfCommandsW (Number: DWORD, ExeName: LPWSTR): BOOL;
export function SetConsoleNumberOfCommands (Number: DWORD, ExeName: LPWSTR): BOOL;
export function GetConsoleCommandHistoryLengthA (ExeName: LPSTR): DWORD;
export function GetConsoleCommandHistoryLengthW (ExeName: LPWSTR): DWORD;
export function GetConsoleCommandHistoryLength (ExeName: LPWSTR): DWORD;
export function GetConsoleCommandHistoryA (Commands: LPSTR, CommandBufferLength: DWORD, ExeName: LPSTR): DWORD;
export function GetConsoleCommandHistoryW (Commands: LPWSTR, CommandBufferLength: DWORD, ExeName: LPWSTR): DWORD;
export function GetConsoleCommandHistory (Commands: LPWSTR, CommandBufferLength: DWORD, ExeName: LPWSTR): DWORD;
export function GetConsoleProcessList (lpdwProcessList: LPDWORD, dwProcessCount: DWORD): DWORD;

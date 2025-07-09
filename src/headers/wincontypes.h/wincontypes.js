// basic
import {struct, union, pointer} from "../../types.js";

// minwindef.h
import {
	DWORD,
	WORD,
	BOOL,
	UINT,
} from "../minwindef.h/minWindef.js";

// winnt.h
import {
	SHORT,
	CHAR,
	WCHAR,
	VOID,
} from "../winnt.h/winnt.js";

// @formatter: off

export const COORD = struct({
	X : SHORT, // SHORT
	Y : SHORT, // SHORT
});
export const PCOORD = pointer(COORD);

export const SMALL_RECT = struct({
	Left   : SHORT, // SHORT
	Top    : SHORT, // SHORT
	Right  : SHORT, // SHORT
	Bottom : SHORT, // SHORT
});
export const PSMALL_RECT = pointer(SMALL_RECT);

export const KEY_EVENT_RECORD = struct({
	bKeyDown          : BOOL,  // BOOL
	wRepeatCount      : WORD,  // WORD
	wVirtualKeyCode   : WORD,  // WORD
	wVirtualScanCode  : WORD,  // WORD
	uChar             : union({
		UnicodeChar : WCHAR, // WCHAR
		AsciiChar   : CHAR,  // CHAR
	}), // union
	dwControlKeyState : DWORD, // DWORD
});
export const PKEY_EVENT_RECORD = pointer(KEY_EVENT_RECORD);

//
// ControlKeyState flags
//

export const RIGHT_ALT_PRESSED = 0x0001;
export const LEFT_ALT_PRESSED = 0x0002;
export const RIGHT_CTRL_PRESSED = 0x0004;
export const LEFT_CTRL_PRESSED = 0x0008;
export const SHIFT_PRESSED = 0x0010;
export const NUMLOCK_ON = 0x0020;
export const SCROLLLOCK_ON = 0x0040;
export const CAPSLOCK_ON = 0x0080;
export const ENHANCED_KEY = 0x0100;
export const NLS_DBCSCHAR = 0x00010000;
export const NLS_ALPHANUMERIC = 0x00000000;
export const NLS_KATAKANA = 0x00020000;
export const NLS_HIRAGANA = 0x00040000;
export const NLS_ROMAN = 0x00400000;
export const NLS_IME_CONVERSION = 0x00800000;
export const ALTNUMPAD_BIT = 0x04000000;
export const NLS_IME_DISABLE = 0x20000000;

export const MOUSE_EVENT_RECORD = struct({
	dwMousePosition   : COORD, // COORD
	dwButtonState     : DWORD, // DWORD
	dwControlKeyState : DWORD, // DWORD
	dwEventFlags      : DWORD, // DWORD
});
export const PMOUSE_EVENT_RECORD = pointer(MOUSE_EVENT_RECORD);

//
// ButtonState flags
//

export const FROM_LEFT_1ST_BUTTON_PRESSED = 0x0001;
export const RIGHTMOST_BUTTON_PRESSED     = 0x0002;
export const FROM_LEFT_2ND_BUTTON_PRESSED = 0x0004;
export const FROM_LEFT_3RD_BUTTON_PRESSED = 0x0008;
export const FROM_LEFT_4TH_BUTTON_PRESSED = 0x0010;

//
// EventFlags
//

export const MOUSE_MOVED    = 0x0001;
export const DOUBLE_CLICK   = 0x0002;
export const MOUSE_WHEELED  = 0x0004;
export const MOUSE_HWHEELED = 0x0008;

export const WINDOW_BUFFER_SIZE_RECORD = struct({
	dwSize : COORD, // COORD
});
export const PWINDOW_BUFFER_SIZE_RECORD = pointer(WINDOW_BUFFER_SIZE_RECORD);

export const MENU_EVENT_RECORD = struct({
	dwCommandId : UINT, // UINT
});
export const PMENU_EVENT_RECORD = pointer(MENU_EVENT_RECORD);

export const FOCUS_EVENT_RECORD = struct({
	bSetFocus : BOOL, // BOOL
});
export const PFOCUS_EVENT_RECORD = pointer(FOCUS_EVENT_RECORD);

export const INPUT_RECORD = struct({
	EventType : WORD,  // WORD
	Event     : union({
		KeyEvent              : KEY_EVENT_RECORD,          // KEY_EVENT_RECORD
		MouseEvent            : MOUSE_EVENT_RECORD,        // MOUSE_EVENT_RECORD
		WindowBufferSizeEvent : WINDOW_BUFFER_SIZE_RECORD, // WINDOW_BUFFER_SIZE_RECORD
		MenuEvent             : MENU_EVENT_RECORD,         // MENU_EVENT_RECORD
		FocusEvent            : FOCUS_EVENT_RECORD,        // FOCUS_EVENT_RECORD
	}), // union
});

//
//  EventType flags:
//

export const KEY_EVENT = 0x0001;
export const MOUSE_EVENT = 0x0002;
export const WINDOW_BUFFER_SIZE_EVENT = 0x0004;
export const MENU_EVENT = 0x0008;
export const FOCUS_EVENT = 0x0010;

export const CHAR_INFO = struct({
	Char       : union({
		UnicodeChar : WCHAR, // WCHAR
		AsciiChar   : CHAR,  // CHAR
	}), // union
	Attributes : WORD,  // WORD
});
export const PCHAR_INFO = pointer(CHAR_INFO);

export const CONSOLE_FONT_INFO = struct({
	nFont      : DWORD, // DWORD
	dwFontSize : COORD, // COORD
});
export const PCONSOLE_FONT_INFO = pointer(CONSOLE_FONT_INFO);

export const HPCON = pointer(VOID);

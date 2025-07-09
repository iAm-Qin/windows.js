// basetsd.h
import {
	UINT32,
} from "../basetsd.h/basetsd.js";

// minwindef.h
import {DWORD, FARPROC} from "../minwindef.h/minWindef.js";

// winnt.h
import {HANDLE} from "../winnt.h/winnt.js";
import {VOID, PVOID} from "../winnt.h/winnt.js";

// winuser.h
import {NAMEENUMPROCA, NAMEENUMPROCW} from "./callbacks.js";

export const HDWP = HANDLE;
export const MENUTEMPLATEA = VOID;
export const MENUTEMPLATEW = VOID;
export const MENUTEMPLATE = MENUTEMPLATEW;
export const LPMENUTEMPLATEA = PVOID;
export const LPMENUTEMPLATEW = PVOID;
export const LPMENUTEMPLATE = LPMENUTEMPLATEW;
export const DLGPROC = FARPROC;
export const TIMERPROC = FARPROC;
export const GRAYSTRINGPROC = FARPROC;
export const WNDENUMPROC = FARPROC;
export const HOOKPROC = FARPROC;
export const SENDASYNCPROC = FARPROC;
export const EDITWORDBREAKPROCA = FARPROC;
export const EDITWORDBREAKPROCW = FARPROC;
export const PROPENUMPROCA = FARPROC;
export const PROPENUMPROCW = FARPROC;
export const PROPENUMPROCEXA = FARPROC;
export const PROPENUMPROCEXW = FARPROC;
export const DRAWSTATEPROC = FARPROC;
export const PROPENUMPROC = PROPENUMPROCW;
export const PROPENUMPROCEX = PROPENUMPROCEXW;
export const EDITWORDBREAKPROC = EDITWORDBREAKPROCW;
export const WINSTAENUMPROCW = NAMEENUMPROCW;
export const DESKTOPENUMPROCW = NAMEENUMPROCW;
export const WINSTAENUMPROCA = NAMEENUMPROCA;
export const DESKTOPENUMPROCA = NAMEENUMPROCA;
export const WINSTAENUMPROC = WINSTAENUMPROCW;
export const DESKTOPENUMPROC = DESKTOPENUMPROCW;

export const HDEVNOTIFY = PVOID;
export const HPOWERNOTIFY = PVOID;
export const POINTER_INPUT_TYPE = DWORD;
export const POINTER_FLAGS = UINT32;
export const TOUCH_FLAGS = UINT32;
export const TOUCH_MASK = UINT32;
export const PEN_FLAGS = UINT32;
export const PEN_MASK = UINT32;

export const HELPPOLY = DWORD;
export const HGESTUREINFO = HANDLE;
export const HTOUCHINPUT = HANDLE;
export const HSYNTHETICPOINTERDEVICE = HANDLE;

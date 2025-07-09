// basic
import {int} from "../../types.js";
import {array, struct, pointer} from "../../types.js";

// minwindef.h
import {BYTE, DWORD} from "../minwindef.h/minWindef.js";

// winnt.h
import {HANDLE} from "../winnt.h/winnt.js";
import {LONG, SHORT} from "../winnt.h/winnt.js";

// @formatter: off

export const HWND = HANDLE;					// DECLARE_HANDLE            (HWND);
export const HHOOK = HANDLE;				// DECLARE_HANDLE            (HHOOK);
export const HGDIOBJ = HANDLE;				// typedef void NEAR* HGDIOBJ;
export const HACCEL = HANDLE;				// DECLARE_HANDLE(HACCEL);
export const HBITMAP = HANDLE;				// DECLARE_HANDLE(HBITMAP);
export const HBRUSH = HANDLE;				// DECLARE_HANDLE(HBRUSH);
export const HCOLORSPACE = HANDLE;			// DECLARE_HANDLE(HCOLORSPACE);
export const HDC = HANDLE;					// DECLARE_HANDLE(HDC);
export const HGLRC = HANDLE;				// DECLARE_HANDLE(HGLRC);          // OpenGL
export const HDESK = HANDLE;				// DECLARE_HANDLE(HDESK);
export const HENHMETAFILE = HANDLE;			// DECLARE_HANDLE(HENHMETAFILE);
export const HFONT = HANDLE;				// DECLARE_HANDLE(HFONT);
export const HICON = HANDLE;				// DECLARE_HANDLE(HICON);
export const HMENU = HANDLE;				// DECLARE_HANDLE(HMENU);
export const HPALETTE = HANDLE;				// DECLARE_HANDLE(HPALETTE);
export const HPEN = HANDLE;					// DECLARE_HANDLE(HPEN);
export const HWINEVENTHOOK = HANDLE;		// DECLARE_HANDLE(HWINEVENTHOOK);
export const HMONITOR = HANDLE;				// DECLARE_HANDLE(HMONITOR);
export const HUMPD = HANDLE;				// DECLARE_HANDLE(HUMPD);
export const HCURSOR = HICON;				// typedef HICON HCURSOR;

export const COLORREF = DWORD;				// typedef DWORD   COLORREF;
export const LPCOLORREF = pointer(DWORD);// typedef DWORD   *LPCOLORREF;

export const HFILE_ERROR = -1;

export const RECT = struct({
	left   : LONG, // LONG
	top    : LONG, // LONG
	right  : LONG, // LONG
	bottom : LONG, // LONG
});
export const PRECT = pointer(RECT);
export const LPRECT = PRECT;
export const LPCRECT = PRECT;

export const RECTL = struct({
	left   : LONG, // LONG
	top    : LONG, // LONG
	right  : LONG, // LONG
	bottom : LONG, // LONG
});
export const PRECTL = pointer(RECTL);
export const LPRECTL = PRECTL;

export const POINT = struct({
	x : LONG, // LONG
	y : LONG, // LONG
});
export const PPOINT = pointer(POINT);
export const LPPOINT = PPOINT;

export const POINTL = struct({
	x : LONG, // LONG
	y : LONG, // LONG
});
export const PPOINTL = pointer(POINTL);
export const LPPOINTL = PPOINTL;

export const SIZE = struct({
	cx : LONG, // LONG
	cy : LONG, // LONG
});
export const PSIZE = pointer(SIZE);
export const LPSIZE = PSIZE;
export const SIZEL = SIZE;
export const PSIZEL = PSIZE;
export const LPSIZEL = PSIZE;

export const POINTS = struct({
	y : SHORT, // SHORT
	x : SHORT, // SHORT
});
export const PPOINTS = pointer(POINTS);
export const LPPOINTS = PPOINTS;

export const APP_LOCAL_DEVICE_ID_SIZE = 32;

export const APP_LOCAL_DEVICE_ID = struct({
	value : array(BYTE, APP_LOCAL_DEVICE_ID_SIZE), // BYTE
});

/* mode selections for the device mode function */
export const DM_UPDATE = 1;
export const DM_COPY = 2;
export const DM_PROMPT = 4;
export const DM_MODIFY = 8;

export const DM_IN_BUFFER = DM_MODIFY;
export const DM_IN_PROMPT = DM_PROMPT;
export const DM_OUT_BUFFER = DM_COPY;
export const DM_OUT_DEFAULT = DM_UPDATE;

/* device capabilities indices */
export const DC_FIELDS = 1;
export const DC_PAPERS = 2;
export const DC_PAPERSIZE = 3;
export const DC_MINEXTENT = 4;
export const DC_MAXEXTENT = 5;
export const DC_BINS = 6;
export const DC_DUPLEX = 7;
export const DC_SIZE = 8;
export const DC_EXTRA = 9;
export const DC_VERSION = 10;
export const DC_DRIVER = 11;
export const DC_BINNAMES = 12;
export const DC_ENUMRESOLUTIONS = 13;
export const DC_FILEDEPENDENCIES = 14;
export const DC_TRUETYPE = 15;
export const DC_PAPERNAMES = 16;
export const DC_ORIENTATION = 17;
export const DC_COPIES = 18;

export const DPI_AWARENESS_CONTEXT = HANDLE;// DECLARE_HANDLE(DPI_AWARENESS_CONTEXT);

export const DPI_AWARENESS = int;
export const DPI_AWARENESS_INVALID = -1;
export const DPI_AWARENESS_UNAWARE = 0;
export const DPI_AWARENESS_SYSTEM_AWARE = 1;
export const DPI_AWARENESS_PER_MONITOR_AWARE = 2;

export const DPI_HOSTING_BEHAVIOR = int;
export const DPI_HOSTING_BEHAVIOR_INVALID = -1;
export const DPI_HOSTING_BEHAVIOR_DEFAULT = 0;
export const DPI_HOSTING_BEHAVIOR_MIXED = 1;

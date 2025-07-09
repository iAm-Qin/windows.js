import koffi from "koffi";

// basic
import {struct, pointer} from "../../types.js";

// minwindef.h
import {
	DWORD, WORD,
	LPVOID,
	LPARAM,
	HGLOBAL, HINSTANCE,
} from "../minwindef.h/minWindef.js";

// windef.h
import {COLORREF} from "../windef.h/windef.js";
import {POINT, RECT} from "../windef.h/windef.js";
import {HMENU, HWND, HDC} from "../windef.h/windef.js";

// winnt.h
import {
	HANDLE,
	INT,
	LPSTR, LPCSTR, LPWSTR, LPCWSTR,
} from "../winnt.h/winnt.js";

// todo unknwnbase.h
export const LPUNKNOWN = pointer(koffi.opaque());

// todo prsht.h
export const HPROPSHEETPAGE = HANDLE;

// winuser.h
import {NMHDR} from "../WinUser.h/structs.js";

// wingdi.h
import {LPLOGFONTA, LPLOGFONTW} from "../wingdi.h/structs.js";

import {LPCCHOOKPROC, LPCFHOOKPROC, LPFRHOOKPROC, LPOFNHOOKPROC, LPPAGEPAINTHOOK, LPPAGESETUPHOOK, LPPRINTHOOKPROC, LPSETUPHOOKPROC} from "./callbacks.js";

// @formatter: off

export const EDITMENU = struct({
	hmenu   : HMENU, // HMENU
	idEdit  : WORD,  // WORD
	idCut   : WORD,  // WORD
	idCopy  : WORD,  // WORD
	idPaste : WORD,  // WORD
	idClear : WORD,  // WORD
	idUndo  : WORD,  // WORD
});
export const LPEDITMENU = pointer(EDITMENU);

export const OPENFILENAME_NT4A = struct({
	lStructSize       : DWORD,         // DWORD
	hwndOwner         : HWND,          // HWND
	hInstance         : HINSTANCE,     // HINSTANCE
	lpstrFilter       : LPCSTR,        // LPCSTR
	lpstrCustomFilter : LPSTR,         // LPSTR
	nMaxCustFilter    : DWORD,         // DWORD
	nFilterIndex      : DWORD,         // DWORD
	lpstrFile         : LPSTR,         // LPSTR
	nMaxFile          : DWORD,         // DWORD
	lpstrFileTitle    : LPSTR,         // LPSTR
	nMaxFileTitle     : DWORD,         // DWORD
	lpstrInitialDir   : LPCSTR,        // LPCSTR
	lpstrTitle        : LPCSTR,        // LPCSTR
	Flags             : DWORD,         // DWORD
	nFileOffset       : WORD,          // WORD
	nFileExtension    : WORD,          // WORD
	lpstrDefExt       : LPCSTR,        // LPCSTR
	lCustData         : LPARAM,        // LPARAM
	lpfnHook          : LPOFNHOOKPROC, // LPOFNHOOKPROC
	lpTemplateName    : LPCSTR,        // LPCSTR
});
export const LPOPENFILENAME_NT4A = pointer(OPENFILENAME_NT4A);

export const OPENFILENAME_NT4W = struct({
	lStructSize       : DWORD,         // DWORD
	hwndOwner         : HWND,          // HWND
	hInstance         : HINSTANCE,     // HINSTANCE
	lpstrFilter       : LPCWSTR,       // LPCWSTR
	lpstrCustomFilter : LPWSTR,        // LPWSTR
	nMaxCustFilter    : DWORD,         // DWORD
	nFilterIndex      : DWORD,         // DWORD
	lpstrFile         : LPWSTR,        // LPWSTR
	nMaxFile          : DWORD,         // DWORD
	lpstrFileTitle    : LPWSTR,        // LPWSTR
	nMaxFileTitle     : DWORD,         // DWORD
	lpstrInitialDir   : LPCWSTR,       // LPCWSTR
	lpstrTitle        : LPCWSTR,       // LPCWSTR
	Flags             : DWORD,         // DWORD
	nFileOffset       : WORD,          // WORD
	nFileExtension    : WORD,          // WORD
	lpstrDefExt       : LPCWSTR,       // LPCWSTR
	lCustData         : LPARAM,        // LPARAM
	lpfnHook          : LPOFNHOOKPROC, // LPOFNHOOKPROC
	lpTemplateName    : LPCWSTR,       // LPCWSTR
});
export const LPOPENFILENAME_NT4W = pointer(OPENFILENAME_NT4W);
export const OPENFILENAME_NT4 = OPENFILENAME_NT4W;
export const LPOPENFILENAME_NT4 = LPOPENFILENAME_NT4W;

export const OPENFILENAMEA = struct({
	lStructSize       : DWORD,                     // DWORD
	hwndOwner         : HWND,                      // HWND
	hInstance         : HINSTANCE,                 // HINSTANCE
	lpstrFilter       : LPCSTR,                    // LPCSTR
	lpstrCustomFilter : LPSTR,                     // LPSTR
	nMaxCustFilter    : DWORD,                     // DWORD
	nFilterIndex      : DWORD,                     // DWORD
	lpstrFile         : LPSTR,                     // LPSTR
	nMaxFile          : DWORD,                     // DWORD
	lpstrFileTitle    : LPSTR,                     // LPSTR
	nMaxFileTitle     : DWORD,                     // DWORD
	lpstrInitialDir   : LPCSTR,                    // LPCSTR
	lpstrTitle        : LPCSTR,                    // LPCSTR
	Flags             : DWORD,                     // DWORD
	nFileOffset       : WORD,                      // WORD
	nFileExtension    : WORD,                      // WORD
	lpstrDefExt       : LPCSTR,                    // LPCSTR
	lCustData         : LPARAM,                    // LPARAM
	lpfnHook          : LPOFNHOOKPROC,             // LPOFNHOOKPROC
	lpTemplateName    : LPCSTR,                    // LPCSTR
	// lpEditInfo        : LPEDITMENU,                // LPEDITMENU	// mac
	// lpstrPrompt       : LPCSTR,                    // LPCSTR
	pvReserved        : pointer(koffi.types.void), // void*
	dwReserved        : DWORD,                     // DWORD
	FlagsEx           : DWORD,                     // DWORD
});
export const LPOPENFILENAMEA = pointer(OPENFILENAMEA);

export const OPENFILENAMEW = struct({
	lStructSize       : DWORD,                     // DWORD
	hwndOwner         : HWND,                      // HWND
	hInstance         : HINSTANCE,                 // HINSTANCE
	lpstrFilter       : LPCWSTR,                   // LPCWSTR
	lpstrCustomFilter : LPWSTR,                    // LPWSTR
	nMaxCustFilter    : DWORD,                     // DWORD
	nFilterIndex      : DWORD,                     // DWORD
	lpstrFile         : LPWSTR,                    // LPWSTR
	nMaxFile          : DWORD,                     // DWORD
	lpstrFileTitle    : LPWSTR,                    // LPWSTR
	nMaxFileTitle     : DWORD,                     // DWORD
	lpstrInitialDir   : LPCWSTR,                   // LPCWSTR
	lpstrTitle        : LPCWSTR,                   // LPCWSTR
	Flags             : DWORD,                     // DWORD
	nFileOffset       : WORD,                      // WORD
	nFileExtension    : WORD,                      // WORD
	lpstrDefExt       : LPCWSTR,                   // LPCWSTR
	lCustData         : LPARAM,                    // LPARAM
	lpfnHook          : LPOFNHOOKPROC,             // LPOFNHOOKPROC
	lpTemplateName    : LPCWSTR,                   // LPCWSTR
	// lpEditInfo        : LPEDITMENU,                // LPEDITMENU	// mac
	// lpstrPrompt       : LPCSTR,                    // LPCSTR
	pvReserved        : pointer(koffi.types.void), // void*
	dwReserved        : DWORD,                     // DWORD
	FlagsEx           : DWORD,                     // DWORD
});
export const LPOPENFILENAMEW = pointer(OPENFILENAMEW);
export const OPENFILENAME = OPENFILENAMEW;
export const LPOPENFILENAME = LPOPENFILENAMEW;

export const OFNOTIFYA = struct({
	hdr     : NMHDR,           // NMHDR
	lpOFN   : LPOPENFILENAMEA, // LPOPENFILENAMEA
	pszFile : LPSTR,           // LPSTR           // May be NULL
});
export const LPOFNOTIFYA = pointer(OFNOTIFYA);

export const OFNOTIFYW = struct({
	hdr     : NMHDR,           // NMHDR
	lpOFN   : LPOPENFILENAMEW, // LPOPENFILENAMEW
	pszFile : LPWSTR,          // LPWSTR          // May be NULL
});
export const LPOFNOTIFYW = pointer(OFNOTIFYW);
export const OFNOTIFY = OFNOTIFYW;
export const LPOFNOTIFY = LPOFNOTIFYW;

export const OFNOTIFYEXA = struct({
	hdr   : NMHDR,           // NMHDR
	lpOFN : LPOPENFILENAMEA, // LPOPENFILENAMEA
	psf   : LPVOID,          // LPVOID
	pidl  : LPVOID,          // LPVOID          // May be NULL
});
export const LPOFNOTIFYEXA = pointer(OFNOTIFYEXA);

export const OFNOTIFYEXW = struct({
	hdr   : NMHDR,           // NMHDR
	lpOFN : LPOPENFILENAMEW, // LPOPENFILENAMEW
	psf   : LPVOID,          // LPVOID
	pidl  : LPVOID,          // LPVOID          // May be NULL
});
export const LPOFNOTIFYEXW = pointer(OFNOTIFYEXW);
export const OFNOTIFYEX = OFNOTIFYEXW;
export const LPOFNOTIFYEX = LPOFNOTIFYEXW;

export const CHOOSECOLORA = struct({
	lStructSize    : DWORD,             // DWORD
	hwndOwner      : HWND,              // HWND
	hInstance      : HWND,              // HWND
	rgbResult      : COLORREF,          // COLORREF
	lpCustColors   : pointer(COLORREF), // COLORREF*
	Flags          : DWORD,             // DWORD
	lCustData      : LPARAM,            // LPARAM
	lpfnHook       : LPCCHOOKPROC,      // LPCCHOOKPROC
	lpTemplateName : LPCSTR,            // LPCSTR
});
export const LPCHOOSECOLORA = pointer(CHOOSECOLORA);

export const CHOOSECOLORW = struct({
	lStructSize    : DWORD,             // DWORD
	hwndOwner      : HWND,              // HWND
	hInstance      : HWND,              // HWND
	rgbResult      : COLORREF,          // COLORREF
	lpCustColors   : pointer(COLORREF), // COLORREF*
	Flags          : DWORD,             // DWORD
	lCustData      : LPARAM,            // LPARAM
	lpfnHook       : LPCCHOOKPROC,      // LPCCHOOKPROC
	lpTemplateName : LPCWSTR,           // LPCWSTR
	// lpEditInfo     : LPEDITMENU,            // LPEDITMENU		// mac
});
export const LPCHOOSECOLORW = pointer(CHOOSECOLORW);
export const CHOOSECOLOR = CHOOSECOLORW;
export const LPCHOOSECOLOR = LPCHOOSECOLORW;

// export const CHOOSECOLORA = struct({
// 	lStructSize    : DWORD,             // DWORD
// 	hwndOwner      : HWND,              // HWND
// 	hInstance      : HWND,              // HWND
// 	rgbResult      : COLORREF,          // COLORREF
// 	lpCustColors   : pointer(COLORREF), // COLORREF*
// 	Flags          : DWORD,             // DWORD
// 	lCustData      : LPARAM,            // LPARAM
// 	lpfnHook       : LPCCHOOKPROC,      // LPCCHOOKPROC
// 	lpTemplateName : LPCSTR,            // LPCSTR
// 	lpEditInfo     : LPEDITMENU,        // LPEDITMENU
// });
// export const LPCHOOSECOLORA = pointer(CHOOSECOLORA);

// export const CHOOSECOLORW = struct({
// 	lStructSize    : DWORD,             // DWORD
// 	hwndOwner      : HWND,              // HWND
// 	hInstance      : HWND,              // HWND
// 	rgbResult      : COLORREF,          // COLORREF
// 	lpCustColors   : pointer(COLORREF), // COLORREF*
// 	Flags          : DWORD,             // DWORD
// 	lCustData      : LPARAM,            // LPARAM
// 	lpfnHook       : LPCCHOOKPROC,      // LPCCHOOKPROC
// 	lpTemplateName : LPCWSTR,           // LPCWSTR
// 	lpEditInfo     : LPEDITMENU,        // LPEDITMENU
// });
// export const LPCHOOSECOLORW = pointer(CHOOSECOLORW);
// export const CHOOSECOLOR = CHOOSECOLORW;
// export const LPCHOOSECOLOR = LPCHOOSECOLORW;

export const FINDREPLACEA = struct({
	lStructSize      : DWORD,        // DWORD
	hwndOwner        : HWND,         // HWND
	hInstance        : HINSTANCE,    // HINSTANCE
	Flags            : DWORD,        // DWORD
	lpstrFindWhat    : LPSTR,        // LPSTR
	lpstrReplaceWith : LPSTR,        // LPSTR
	wFindWhatLen     : WORD,         // WORD
	wReplaceWithLen  : WORD,         // WORD
	lCustData        : LPARAM,       // LPARAM
	lpfnHook         : LPFRHOOKPROC, // LPFRHOOKPROC
	lpTemplateName   : LPCSTR,       // LPCSTR
});
export const LPFINDREPLACEA = pointer(FINDREPLACEA);

export const FINDREPLACEW = struct({
	lStructSize      : DWORD,        // DWORD
	hwndOwner        : HWND,         // HWND
	hInstance        : HINSTANCE,    // HINSTANCE
	Flags            : DWORD,        // DWORD
	lpstrFindWhat    : LPWSTR,       // LPWSTR
	lpstrReplaceWith : LPWSTR,       // LPWSTR
	wFindWhatLen     : WORD,         // WORD
	wReplaceWithLen  : WORD,         // WORD
	lCustData        : LPARAM,       // LPARAM
	lpfnHook         : LPFRHOOKPROC, // LPFRHOOKPROC
	lpTemplateName   : LPCWSTR,      // LPCWSTR
});
export const LPFINDREPLACEW = pointer(FINDREPLACEW);
export const FINDREPLACE = FINDREPLACEW;
export const LPFINDREPLACE = LPFINDREPLACEW;

export const CHOOSEFONTA = struct({
	lStructSize            : DWORD,        // DWORD
	hwndOwner              : HWND,         // HWND
	hDC                    : HDC,          // HDC
	lpLogFont              : LPLOGFONTA,   // LPLOGFONTA
	iPointSize             : INT,          // INT
	Flags                  : DWORD,        // DWORD
	rgbColors              : COLORREF,     // COLORREF
	lCustData              : LPARAM,       // LPARAM
	lpfnHook               : LPCFHOOKPROC, // LPCFHOOKPROC
	lpTemplateName         : LPCSTR,       // LPCSTR
	hInstance              : HINSTANCE,    // HINSTANCE
	lpszStyle              : LPSTR,        // LPSTR
	nFontType              : WORD,         // WORD
	___MISSING_ALIGNMENT__ : WORD,         // WORD
	nSizeMin               : INT,          // INT
	nSizeMax               : INT,          // INT
});
export const LPCHOOSEFONTA = pointer(CHOOSEFONTA);

export const CHOOSEFONTW = struct({
	lStructSize            : DWORD,        // DWORD
	hwndOwner              : HWND,         // HWND
	hDC                    : HDC,          // HDC
	lpLogFont              : LPLOGFONTW,   // LPLOGFONTW
	iPointSize             : INT,          // INT
	Flags                  : DWORD,        // DWORD
	rgbColors              : COLORREF,     // COLORREF
	lCustData              : LPARAM,       // LPARAM
	lpfnHook               : LPCFHOOKPROC, // LPCFHOOKPROC
	lpTemplateName         : LPCWSTR,      // LPCWSTR
	hInstance              : HINSTANCE,    // HINSTANCE
	lpszStyle              : LPWSTR,       // LPWSTR
	nFontType              : WORD,         // WORD
	___MISSING_ALIGNMENT__ : WORD,         // WORD
	nSizeMin               : INT,          // INT
	nSizeMax               : INT,          // INT
});
export const LPCHOOSEFONTW = pointer(CHOOSEFONTW);
export const CHOOSEFONT = CHOOSEFONTW;
export const LPCHOOSEFONT = LPCHOOSEFONTW;
export const PCCHOOSEFONTW = pointer(CHOOSEFONTW);
export const PCCHOOSEFONT = PCCHOOSEFONTW;

export const PRINTDLGA = struct({
	lStructSize         : DWORD,           // DWORD
	hwndOwner           : HWND,            // HWND
	hDevMode            : HGLOBAL,         // HGLOBAL
	hDevNames           : HGLOBAL,         // HGLOBAL
	hDC                 : HDC,             // HDC
	Flags               : DWORD,           // DWORD
	nFromPage           : WORD,            // WORD
	nToPage             : WORD,            // WORD
	nMinPage            : WORD,            // WORD
	nMaxPage            : WORD,            // WORD
	nCopies             : WORD,            // WORD
	hInstance           : HINSTANCE,       // HINSTANCE
	lCustData           : LPARAM,          // LPARAM
	lpfnPrintHook       : LPPRINTHOOKPROC, // LPPRINTHOOKPROC
	lpfnSetupHook       : LPSETUPHOOKPROC, // LPSETUPHOOKPROC
	lpPrintTemplateName : LPCSTR,          // LPCSTR
	lpSetupTemplateName : LPCSTR,          // LPCSTR
	hPrintTemplate      : HGLOBAL,         // HGLOBAL
	hSetupTemplate      : HGLOBAL,         // HGLOBAL
});
export const LPPRINTDLGA = pointer(PRINTDLGA);

export const PRINTDLGW = struct({
	lStructSize         : DWORD,           // DWORD
	hwndOwner           : HWND,            // HWND
	hDevMode            : HGLOBAL,         // HGLOBAL
	hDevNames           : HGLOBAL,         // HGLOBAL
	hDC                 : HDC,             // HDC
	Flags               : DWORD,           // DWORD
	nFromPage           : WORD,            // WORD
	nToPage             : WORD,            // WORD
	nMinPage            : WORD,            // WORD
	nMaxPage            : WORD,            // WORD
	nCopies             : WORD,            // WORD
	hInstance           : HINSTANCE,       // HINSTANCE
	lCustData           : LPARAM,          // LPARAM
	lpfnPrintHook       : LPPRINTHOOKPROC, // LPPRINTHOOKPROC
	lpfnSetupHook       : LPSETUPHOOKPROC, // LPSETUPHOOKPROC
	lpPrintTemplateName : LPCWSTR,         // LPCWSTR
	lpSetupTemplateName : LPCWSTR,         // LPCWSTR
	hPrintTemplate      : HGLOBAL,         // HGLOBAL
	hSetupTemplate      : HGLOBAL,         // HGLOBAL
});
export const LPPRINTDLGW = pointer(PRINTDLGW);
export const PRINTDLG = PRINTDLGW;
export const LPPRINTDLG = LPPRINTDLGW;

export const PRINTPAGERANGE = struct({
	nFromPage : DWORD, // DWORD
	nToPage   : DWORD, // DWORD
});
export const LPPRINTPAGERANGE = pointer(PRINTPAGERANGE);
export const PCPRINTPAGERANGE = pointer(PRINTPAGERANGE);

export const PRINTDLGEXA = struct({
	lStructSize         : DWORD,                   // DWORD            // size of structure in bytes
	hwndOwner           : HWND,                    // HWND             // caller's window handle
	hDevMode            : HGLOBAL,                 // HGLOBAL          // handle to DevMode
	hDevNames           : HGLOBAL,                 // HGLOBAL          // handle to DevNames
	hDC                 : HDC,                     // HDC              // printer DC/IC or NULL
	Flags               : DWORD,                   // DWORD            // PD_ flags
	Flags2              : DWORD,                   // DWORD            // reserved
	ExclusionFlags      : DWORD,                   // DWORD            // items to exclude from driver pages
	nPageRanges         : DWORD,                   // DWORD            // number of page ranges
	nMaxPageRanges      : DWORD,                   // DWORD            // max number of page ranges
	lpPageRanges        : LPPRINTPAGERANGE,        // LPPRINTPAGERANGE // array of page ranges
	nMinPage            : DWORD,                   // DWORD            // min page number
	nMaxPage            : DWORD,                   // DWORD            // max page number
	nCopies             : DWORD,                   // DWORD            // number of copies
	hInstance           : HINSTANCE,               // HINSTANCE        // instance handle
	lpPrintTemplateName : LPCSTR,                  // LPCSTR           // template name for app specific area
	lpCallback          : LPUNKNOWN,               // LPUNKNOWN        // app callback interface
	nPropertyPages      : DWORD,                   // DWORD            // number of app property pages in lphPropertyPages
	lphPropertyPages    : pointer(HPROPSHEETPAGE), // HPROPSHEETPAGE*  // array of app property page handles
	nStartPage          : DWORD,                   // DWORD            // start page id
	dwResultAction      : DWORD,                   // DWORD            // result action if S_OK is returned
});
export const LPPRINTDLGEXA = pointer(PRINTDLGEXA);

export const PRINTDLGEXW = struct({
	lStructSize         : DWORD,                   // DWORD            // size of structure in bytes
	hwndOwner           : HWND,                    // HWND             // caller's window handle
	hDevMode            : HGLOBAL,                 // HGLOBAL          // handle to DevMode
	hDevNames           : HGLOBAL,                 // HGLOBAL          // handle to DevNames
	hDC                 : HDC,                     // HDC              // printer DC/IC or NULL
	Flags               : DWORD,                   // DWORD            // PD_ flags
	Flags2              : DWORD,                   // DWORD            // reserved
	ExclusionFlags      : DWORD,                   // DWORD            // items to exclude from driver pages
	nPageRanges         : DWORD,                   // DWORD            // number of page ranges
	nMaxPageRanges      : DWORD,                   // DWORD            // max number of page ranges
	lpPageRanges        : LPPRINTPAGERANGE,        // LPPRINTPAGERANGE // array of page ranges
	nMinPage            : DWORD,                   // DWORD            // min page number
	nMaxPage            : DWORD,                   // DWORD            // max page number
	nCopies             : DWORD,                   // DWORD            // number of copies
	hInstance           : HINSTANCE,               // HINSTANCE        // instance handle
	lpPrintTemplateName : LPCWSTR,                 // LPCWSTR          // template name for app specific area
	lpCallback          : LPUNKNOWN,               // LPUNKNOWN        // app callback interface
	nPropertyPages      : DWORD,                   // DWORD            // number of app property pages in lphPropertyPages
	lphPropertyPages    : pointer(HPROPSHEETPAGE), // HPROPSHEETPAGE*  // array of app property page handles
	nStartPage          : DWORD,                   // DWORD            // start page id
	dwResultAction      : DWORD,                   // DWORD            // result action if S_OK is returned
});
export const LPPRINTDLGEXW = pointer(PRINTDLGEXW);
export const PRINTDLGEX = PRINTDLGEXW;
export const LPPRINTDLGEX = LPPRINTDLGEXW;

export const DEVNAMES = struct({
	wDriverOffset : WORD, // WORD
	wDeviceOffset : WORD, // WORD
	wOutputOffset : WORD, // WORD
	wDefault      : WORD, // WORD
});
export const LPDEVNAMES = pointer(DEVNAMES);
export const PCDEVNAMES = pointer(DEVNAMES);

export const PAGESETUPDLGA = struct({
	lStructSize             : DWORD,           // DWORD
	hwndOwner               : HWND,            // HWND
	hDevMode                : HGLOBAL,         // HGLOBAL
	hDevNames               : HGLOBAL,         // HGLOBAL
	Flags                   : DWORD,           // DWORD
	ptPaperSize             : POINT,           // POINT
	rtMinMargin             : RECT,            // RECT
	rtMargin                : RECT,            // RECT
	hInstance               : HINSTANCE,       // HINSTANCE
	lCustData               : LPARAM,          // LPARAM
	lpfnPageSetupHook       : LPPAGESETUPHOOK, // LPPAGESETUPHOOK
	lpfnPagePaintHook       : LPPAGEPAINTHOOK, // LPPAGEPAINTHOOK
	lpPageSetupTemplateName : LPCSTR,          // LPCSTR
	hPageSetupTemplate      : HGLOBAL,         // HGLOBAL
});
export const LPPAGESETUPDLGA = pointer(PAGESETUPDLGA);

export const PAGESETUPDLGW = struct({
	lStructSize             : DWORD,           // DWORD
	hwndOwner               : HWND,            // HWND
	hDevMode                : HGLOBAL,         // HGLOBAL
	hDevNames               : HGLOBAL,         // HGLOBAL
	Flags                   : DWORD,           // DWORD
	ptPaperSize             : POINT,           // POINT
	rtMinMargin             : RECT,            // RECT
	rtMargin                : RECT,            // RECT
	hInstance               : HINSTANCE,       // HINSTANCE
	lCustData               : LPARAM,          // LPARAM
	lpfnPageSetupHook       : LPPAGESETUPHOOK, // LPPAGESETUPHOOK
	lpfnPagePaintHook       : LPPAGEPAINTHOOK, // LPPAGEPAINTHOOK
	lpPageSetupTemplateName : LPCWSTR,         // LPCWSTR
	hPageSetupTemplate      : HGLOBAL,         // HGLOBAL
});
export const LPPAGESETUPDLGW = pointer(PAGESETUPDLGW);
export const PAGESETUPDLG = PAGESETUPDLGW;
export const LPPAGESETUPDLG = LPPAGESETUPDLGW;

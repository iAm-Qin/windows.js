import koffi from "koffi";

// basic
import {pointer, out, inout} from "../../types.js";
import {
	int,
} from "../../types.js";

// minwindef.h
import {
	DWORD, LPDWORD,
	LPWORD,
	BYTE, LPBYTE,
	BOOL,
	FLOAT, PFLOAT,
	INT, LPINT,
	UINT,
	ULONG,
	LPVOID,
	PROC,
	LPARAM,
	HRGN, HGLOBAL,
	HMETAFILE,
} from "../minwindef.h/minWindef.js";

// windef.h
import {
	COLORREF,
	LPRECT, RECT,
	POINT, LPPOINT,
	LPSIZE,
	HDC, HBRUSH, HBITMAP, HFONT, HPEN, HGDIOBJ, HPALETTE, HENHMETAFILE, HCOLORSPACE, HGLRC,
} from "../windef.h/windef.js";

// winnt.h
import {
	HANDLE,
} from "../winnt.h/winnt.js";
import {
	LPSTR, LPCSTR, LPWSTR, LPCWSTR,
	VOID, PVOID, LONG,
} from "../winnt.h/winnt.js";

// wingdi.h
import {
	BITMAP,
	BITMAPINFO,
	BITMAPINFOHEADER,
	BLENDFUNCTION,
	COLORADJUSTMENT,
	DEVMODEA,
	DEVMODEW,
	DOCINFOA,
	DOCINFOW,
	ENHMETARECORD,
	ENUMLOGFONTEXDVA,
	ENUMLOGFONTEXDVW,
	LOGBRUSH,
	LOGFONTA,
	LOGFONTW,
	LOGPEN,
	LPABC,
	LPABCFLOAT,
	LPCHARSETINFO,
	LPCOLORADJUSTMENT,
	LPENHMETAHEADER,
	LPFONTSIGNATURE,
	LPGCP_RESULTSA,
	LPGCP_RESULTSW,
	LPGLYPHMETRICS,
	LPGLYPHMETRICSFLOAT,
	LPGLYPHSET,
	LPHANDLETABLE,
	LPKERNINGPAIR,
	LPLAYERPLANEDESCRIPTOR,
	LPLOGCOLORSPACEA,
	LPLOGCOLORSPACEW,
	LPLOGFONTA,
	LPLOGFONTW,
	LPMETARECORD,
	LPOUTLINETEXTMETRICA,
	LPOUTLINETEXTMETRICW,
	LPPALETTEENTRY,
	LPPIXELFORMATDESCRIPTOR,
	LPRASTERIZER_STATUS,
	LPRGBTRIPLE,
	LPTEXTMETRICA,
	LPTEXTMETRICW,
	LPXFORM,
	MAT2,
	METAFILEPICT,
	PALETTEENTRY,
	PGDIREGISTERDDRAWPACKET,
	PIXELFORMATDESCRIPTOR,
	POLYTEXTA,
	POLYTEXTW,
	PTRIVERTEX,
	RGBQUAD,
	RGNDATA,
	WGLSWAP,
	XFORM,
} from "./structs.js";
import {ABORTPROC, ENHMFENUMPROC, FONTENUMPROCA, FONTENUMPROCW, GDIMARSHALLOC, GOBJENUMPROC, ICMENUMPROCA, ICMENUMPROCW, LINEDDAPROC, MFENUMPROC} from "./callbacks.js";


const lib = koffi.load("gdi32.dll");
import {createAutoLoader} from "../../internals/loader.js";

export function AddFontResourceA () {};
AddFontResourceA = createAutoLoader(lib, "AddFontResourceA", int /* int */, [
	LPCSTR, /* in LPCSTR  */
], f => AddFontResourceA = f);

export function AddFontResourceW () {};
AddFontResourceW = createAutoLoader(lib, "AddFontResourceW", int /* int */, [
	LPCWSTR, /* in LPCWSTR  */
], f => AddFontResourceW = f);
export {AddFontResourceW as AddFontResource};

export function AnimatePalette () {};
AnimatePalette = createAutoLoader(lib, "AnimatePalette", BOOL /* BOOL */, [
	HPALETTE,              /* in HPALETTE             hPal        */
	UINT,                  /* in UINT                 iStartIndex */
	UINT,                  /* in UINT                 cEntries    */
	pointer(PALETTEENTRY), /*    CONST PALETTEENTRY * ppe         */
], f => AnimatePalette = f);

export function Arc () {};
Arc = createAutoLoader(lib, "Arc", BOOL /* BOOL */, [
	HDC, /* in HDC hdc */
	int, /* in int x1  */
	int, /* in int y1  */
	int, /* in int x2  */
	int, /* in int y2  */
	int, /* in int x3  */
	int, /* in int y3  */
	int, /* in int x4  */
	int, /* in int y4  */
], f => Arc = f);

export function BitBlt () {};
BitBlt = createAutoLoader(lib, "BitBlt", BOOL /* BOOL */, [
	HDC,   /* in     HDC   hdc    */
	int,   /* in     int   x      */
	int,   /* in     int   y      */
	int,   /* in     int   cx     */
	int,   /* in     int   cy     */
	HDC,   /* in opt HDC   hdcSrc */
	int,   /* in     int   x1     */
	int,   /* in     int   y1     */
	DWORD, /* in     DWORD rop    */
], f => BitBlt = f);

export function CancelDC () {};
CancelDC = createAutoLoader(lib, "CancelDC", BOOL /* BOOL */, [
	HDC, /* in HDC hdc */
], f => CancelDC = f);

export function Chord () {};
Chord = createAutoLoader(lib, "Chord", BOOL /* BOOL */, [
	HDC, /* in HDC hdc */
	int, /* in int x1  */
	int, /* in int y1  */
	int, /* in int x2  */
	int, /* in int y2  */
	int, /* in int x3  */
	int, /* in int y3  */
	int, /* in int x4  */
	int, /* in int y4  */
], f => Chord = f);

export function ChoosePixelFormat () {};
ChoosePixelFormat = createAutoLoader(lib, "ChoosePixelFormat", int /* int */, [
	HDC,                            /* in HDC                           hdc  */
	pointer(PIXELFORMATDESCRIPTOR), /* in CONST PIXELFORMATDESCRIPTOR * ppfd */
], f => ChoosePixelFormat = f);

export function CloseMetaFile () {};
CloseMetaFile = createAutoLoader(lib, "CloseMetaFile", HMETAFILE /* HMETAFILE */, [
	HDC, /* in HDC hdc */
], f => CloseMetaFile = f);

export function CombineRgn () {};
CombineRgn = createAutoLoader(lib, "CombineRgn", int /* int */, [
	HRGN, /* in opt HRGN hrgnDst  */
	HRGN, /* in opt HRGN hrgnSrc1 */
	HRGN, /* in opt HRGN hrgnSrc2 */
	int,  /* in     int  iMode    */
], f => CombineRgn = f);

export function CopyMetaFileA () {};
CopyMetaFileA = createAutoLoader(lib, "CopyMetaFileA", HMETAFILE /* HMETAFILE */, [
	HMETAFILE, /* in     HMETAFILE  */
	LPCSTR,    /* in opt LPCSTR     */
], f => CopyMetaFileA = f);

export function CopyMetaFileW () {};
CopyMetaFileW = createAutoLoader(lib, "CopyMetaFileW", HMETAFILE /* HMETAFILE */, [
	HMETAFILE, /* in     HMETAFILE  */
	LPCWSTR,   /* in opt LPCWSTR    */
], f => CopyMetaFileW = f);
export {CopyMetaFileW as CopyMetaFile};

export function CreateBitmap () {};
CreateBitmap = createAutoLoader(lib, "CreateBitmap", HBITMAP /* HBITMAP */, [
	int,           /* in     int          nWidth    */
	int,           /* in     int          nHeight   */
	UINT,          /* in     UINT         nPlanes   */
	UINT,          /* in     UINT         nBitCount */
	pointer(VOID), /* in opt CONST VOID * lpBits    */
], f => CreateBitmap = f);

export function CreateBitmapIndirect () {};
CreateBitmapIndirect = createAutoLoader(lib, "CreateBitmapIndirect", HBITMAP /* HBITMAP */, [
	pointer(BITMAP), /* in CONST BITMAP * pbm */
], f => CreateBitmapIndirect = f);

export function CreateBrushIndirect () {};
CreateBrushIndirect = createAutoLoader(lib, "CreateBrushIndirect", HBRUSH /* HBRUSH */, [
	pointer(LOGBRUSH), /* in CONST LOGBRUSH * plbrush */
], f => CreateBrushIndirect = f);

export function CreateCompatibleBitmap () {};
CreateCompatibleBitmap = createAutoLoader(lib, "CreateCompatibleBitmap", HBITMAP /* HBITMAP */, [
	HDC, /* in HDC hdc */
	int, /* in int cx  */
	int, /* in int cy  */
], f => CreateCompatibleBitmap = f);

export function CreateDiscardableBitmap () {};
CreateDiscardableBitmap = createAutoLoader(lib, "CreateDiscardableBitmap", HBITMAP /* HBITMAP */, [
	HDC, /* in HDC hdc */
	int, /* in int cx  */
	int, /* in int cy  */
], f => CreateDiscardableBitmap = f);

export function CreateCompatibleDC () {};
CreateCompatibleDC = createAutoLoader(lib, "CreateCompatibleDC", HDC /* HDC */, [
	HDC, /* in opt HDC hdc */
], f => CreateCompatibleDC = f);

export function CreateDCA () {};
CreateDCA = createAutoLoader(lib, "CreateDCA", HDC /* HDC */, [
	LPCSTR,            /* in opt LPCSTR           pwszDriver */
	LPCSTR,            /* in opt LPCSTR           pwszDevice */
	LPCSTR,            /* in opt LPCSTR           pszPort    */
	pointer(DEVMODEA), /* in opt CONST DEVMODEA * pdm        */
], f => CreateDCA = f);

export function CreateDCW () {};
CreateDCW = createAutoLoader(lib, "CreateDCW", HDC /* HDC */, [
	LPCWSTR,           /* in opt LPCWSTR          pwszDriver */
	LPCWSTR,           /* in opt LPCWSTR          pwszDevice */
	LPCWSTR,           /* in opt LPCWSTR          pszPort    */
	pointer(DEVMODEW), /* in opt CONST DEVMODEW * pdm        */
], f => CreateDCW = f);
export {CreateDCW as CreateDC};

export function CreateDIBitmap () {};
CreateDIBitmap = createAutoLoader(lib, "CreateDIBitmap", HBITMAP /* HBITMAP */, [
	HDC,                       /* in     HDC                      hdc    */
	pointer(BITMAPINFOHEADER), /* in opt CONST BITMAPINFOHEADER * pbmih  */
	DWORD,                     /* in     DWORD                    flInit */
	pointer(VOID),             /* in opt CONST VOID *             pjBits */
	pointer(BITMAPINFO),       /* in opt CONST BITMAPINFO *       pbmi   */
	UINT,                      /* in     UINT                     iUsage */
], f => CreateDIBitmap = f);

export function CreateDIBPatternBrush () {};
CreateDIBPatternBrush = createAutoLoader(lib, "CreateDIBPatternBrush", HBRUSH /* HBRUSH */, [
	HGLOBAL, /* in HGLOBAL h      */
	UINT,    /* in UINT    iUsage */
], f => CreateDIBPatternBrush = f);

export function CreateDIBPatternBrushPt () {};
CreateDIBPatternBrushPt = createAutoLoader(lib, "CreateDIBPatternBrushPt", HBRUSH /* HBRUSH */, [
	pointer(VOID), /* in CONST VOID * lpPackedDIB */
	UINT,          /* in UINT         iUsage      */
], f => CreateDIBPatternBrushPt = f);

export function CreateEllipticRgn () {};
CreateEllipticRgn = createAutoLoader(lib, "CreateEllipticRgn", HRGN /* HRGN */, [
	int, /* in int x1 */
	int, /* in int y1 */
	int, /* in int x2 */
	int, /* in int y2 */
], f => CreateEllipticRgn = f);

export function CreateEllipticRgnIndirect () {};
CreateEllipticRgnIndirect = createAutoLoader(lib, "CreateEllipticRgnIndirect", HRGN /* HRGN */, [
	pointer(RECT), /* in CONST RECT * lprect */
], f => CreateEllipticRgnIndirect = f);

export function CreateFontIndirectA () {};
CreateFontIndirectA = createAutoLoader(lib, "CreateFontIndirectA", HFONT /* HFONT */, [
	pointer(LOGFONTA), /* in CONST LOGFONTA * lplf */
], f => CreateFontIndirectA = f);

export function CreateFontIndirectW () {};
CreateFontIndirectW = createAutoLoader(lib, "CreateFontIndirectW", HFONT /* HFONT */, [
	pointer(LOGFONTW), /* in CONST LOGFONTW * lplf */
], f => CreateFontIndirectW = f);
export {CreateFontIndirectW as CreateFontIndirect};

export function CreateFontA () {};
CreateFontA = createAutoLoader(lib, "CreateFontA", HFONT /* HFONT */, [
	int,    /* in     int    cHeight         */
	int,    /* in     int    cWidth          */
	int,    /* in     int    cEscapement     */
	int,    /* in     int    cOrientation    */
	int,    /* in     int    cWeight         */
	DWORD,  /* in     DWORD  bItalic         */
	DWORD,  /* in     DWORD  bUnderline      */
	DWORD,  /* in     DWORD  bStrikeOut      */
	DWORD,  /* in     DWORD  iCharSet        */
	DWORD,  /* in     DWORD  iOutPrecision   */
	DWORD,  /* in     DWORD  iClipPrecision  */
	DWORD,  /* in     DWORD  iQuality        */
	DWORD,  /* in     DWORD  iPitchAndFamily */
	LPCSTR, /* in opt LPCSTR pszFaceName     */
], f => CreateFontA = f);

export function CreateFontW () {};
CreateFontW = createAutoLoader(lib, "CreateFontW", HFONT /* HFONT */, [
	int,     /* in     int     cHeight         */
	int,     /* in     int     cWidth          */
	int,     /* in     int     cEscapement     */
	int,     /* in     int     cOrientation    */
	int,     /* in     int     cWeight         */
	DWORD,   /* in     DWORD   bItalic         */
	DWORD,   /* in     DWORD   bUnderline      */
	DWORD,   /* in     DWORD   bStrikeOut      */
	DWORD,   /* in     DWORD   iCharSet        */
	DWORD,   /* in     DWORD   iOutPrecision   */
	DWORD,   /* in     DWORD   iClipPrecision  */
	DWORD,   /* in     DWORD   iQuality        */
	DWORD,   /* in     DWORD   iPitchAndFamily */
	LPCWSTR, /* in opt LPCWSTR pszFaceName     */
], f => CreateFontW = f);
export {CreateFontW as CreateFont};

export function CreateHatchBrush () {};
CreateHatchBrush = createAutoLoader(lib, "CreateHatchBrush", HBRUSH /* HBRUSH */, [
	int,      /* in int      iHatch */
	COLORREF, /* in COLORREF color  */
], f => CreateHatchBrush = f);

export function CreateICA () {};
CreateICA = createAutoLoader(lib, "CreateICA", HDC /* HDC */, [
	LPCSTR,            /* in opt LPCSTR           pszDriver */
	LPCSTR,            /* in opt LPCSTR           pszDevice */
	LPCSTR,            /* in opt LPCSTR           pszPort   */
	pointer(DEVMODEA), /* in opt CONST DEVMODEA * pdm       */
], f => CreateICA = f);

export function CreateICW () {};
CreateICW = createAutoLoader(lib, "CreateICW", HDC /* HDC */, [
	LPCWSTR,           /* in opt LPCWSTR          pszDriver */
	LPCWSTR,           /* in opt LPCWSTR          pszDevice */
	LPCWSTR,           /* in opt LPCWSTR          pszPort   */
	pointer(DEVMODEW), /* in opt CONST DEVMODEW * pdm       */
], f => CreateICW = f);
export {CreateICW as CreateIC};

export function CreateMetaFileA () {};
CreateMetaFileA = createAutoLoader(lib, "CreateMetaFileA", HDC /* HDC */, [
	LPCSTR, /* in opt LPCSTR pszFile */
], f => CreateMetaFileA = f);

export function CreateMetaFileW () {};
CreateMetaFileW = createAutoLoader(lib, "CreateMetaFileW", HDC /* HDC */, [
	LPCWSTR, /* in opt LPCWSTR pszFile */
], f => CreateMetaFileW = f);
export {CreateMetaFileW as CreateMetaFile};

export function CreatePen () {};
CreatePen = createAutoLoader(lib, "CreatePen", HPEN /* HPEN */, [
	int,      /* in int      iStyle */
	int,      /* in int      cWidth */
	COLORREF, /* in COLORREF color  */
], f => CreatePen = f);

export function CreatePenIndirect () {};
CreatePenIndirect = createAutoLoader(lib, "CreatePenIndirect", HPEN /* HPEN */, [
	pointer(LOGPEN), /* in CONST LOGPEN * plpen */
], f => CreatePenIndirect = f);

export function CreatePolyPolygonRgn () {};
CreatePolyPolygonRgn = createAutoLoader(lib, "CreatePolyPolygonRgn", HRGN /* HRGN */, [
	pointer(POINT), /* in CONST POINT * pptl  */
	pointer(INT),   /*    CONST INT *   pc    */
	int,            /* in int           cPoly */
	int,            /* in int           iMode */
], f => CreatePolyPolygonRgn = f);

export function CreatePatternBrush () {};
CreatePatternBrush = createAutoLoader(lib, "CreatePatternBrush", HBRUSH /* HBRUSH */, [
	HBITMAP, /* in HBITMAP hbm */
], f => CreatePatternBrush = f);

export function CreateRectRgn () {};
CreateRectRgn = createAutoLoader(lib, "CreateRectRgn", HRGN /* HRGN */, [
	int, /* in int x1 */
	int, /* in int y1 */
	int, /* in int x2 */
	int, /* in int y2 */
], f => CreateRectRgn = f);

export function CreateRectRgnIndirect () {};
CreateRectRgnIndirect = createAutoLoader(lib, "CreateRectRgnIndirect", HRGN /* HRGN */, [
	pointer(RECT), /* in CONST RECT * lprect */
], f => CreateRectRgnIndirect = f);

export function CreateRoundRectRgn () {};
CreateRoundRectRgn = createAutoLoader(lib, "CreateRoundRectRgn", HRGN /* HRGN */, [
	int, /* in int x1 */
	int, /* in int y1 */
	int, /* in int x2 */
	int, /* in int y2 */
	int, /* in int w  */
	int, /* in int h  */
], f => CreateRoundRectRgn = f);

export function CreateScalableFontResourceA () {};
CreateScalableFontResourceA = createAutoLoader(lib, "CreateScalableFontResourceA", BOOL /* BOOL */, [
	DWORD,  /* in     DWORD  fdwHidden */
	LPCSTR, /* in     LPCSTR lpszFont  */
	LPCSTR, /* in     LPCSTR lpszFile  */
	LPCSTR, /* in opt LPCSTR lpszPath  */
], f => CreateScalableFontResourceA = f);

export function CreateScalableFontResourceW () {};
CreateScalableFontResourceW = createAutoLoader(lib, "CreateScalableFontResourceW", BOOL /* BOOL */, [
	DWORD,   /* in     DWORD   fdwHidden */
	LPCWSTR, /* in     LPCWSTR lpszFont  */
	LPCWSTR, /* in     LPCWSTR lpszFile  */
	LPCWSTR, /* in opt LPCWSTR lpszPath  */
], f => CreateScalableFontResourceW = f);
export {CreateScalableFontResourceW as CreateScalableFontResource};

export function CreateSolidBrush () {};
CreateSolidBrush = createAutoLoader(lib, "CreateSolidBrush", HBRUSH /* HBRUSH */, [
	COLORREF, /* in COLORREF color */
], f => CreateSolidBrush = f);

export function DeleteDC () {};
DeleteDC = createAutoLoader(lib, "DeleteDC", BOOL /* BOOL */, [
	HDC, /* in HDC hdc */
], f => DeleteDC = f);

export function DeleteMetaFile () {};
DeleteMetaFile = createAutoLoader(lib, "DeleteMetaFile", BOOL /* BOOL */, [
	HMETAFILE, /* in HMETAFILE hmf */
], f => DeleteMetaFile = f);

export function DeleteObject () {};
DeleteObject = createAutoLoader(lib, "DeleteObject", BOOL /* BOOL */, [
	HGDIOBJ, /* in HGDIOBJ ho */
], f => DeleteObject = f);

export function DescribePixelFormat () {};
DescribePixelFormat = createAutoLoader(lib, "DescribePixelFormat", int /* int */, [
	HDC,                     /* in HDC                     hdc          */
	int,                     /* in int                     iPixelFormat */
	UINT,                    /* in UINT                    nBytes       */
	LPPIXELFORMATDESCRIPTOR, /*    LPPIXELFORMATDESCRIPTOR ppfd         */
], f => DescribePixelFormat = f);

export function DrawEscape () {};
DrawEscape = createAutoLoader(lib, "DrawEscape", int /* int */, [
	HDC,    /* in HDC    hdc     */
	int,    /* in int    iEscape */
	int,    /* in int    cjIn    */
	LPCSTR, /*    LPCSTR lpIn    */
], f => DrawEscape = f);

export function Ellipse () {};
Ellipse = createAutoLoader(lib, "Ellipse", BOOL /* BOOL */, [
	HDC, /* in HDC hdc    */
	int, /* in int left   */
	int, /* in int top    */
	int, /* in int right  */
	int, /* in int bottom */
], f => Ellipse = f);

export function EnumFontFamiliesExA () {};
EnumFontFamiliesExA = createAutoLoader(lib, "EnumFontFamiliesExA", int /* int */, [
	HDC,           /* in HDC           hdc       */
	LPLOGFONTA,    /* in LPLOGFONTA    lpLogfont */
	FONTENUMPROCA, /* in FONTENUMPROCA lpProc    */
	LPARAM,        /* in LPARAM        lParam    */
	DWORD,         /* in DWORD         dwFlags   */
], f => EnumFontFamiliesExA = f);

export function EnumFontFamiliesExW () {};
EnumFontFamiliesExW = createAutoLoader(lib, "EnumFontFamiliesExW", int /* int */, [
	HDC,           /* in HDC           hdc       */
	LPLOGFONTW,    /* in LPLOGFONTW    lpLogfont */
	FONTENUMPROCW, /* in FONTENUMPROCW lpProc    */
	LPARAM,        /* in LPARAM        lParam    */
	DWORD,         /* in DWORD         dwFlags   */
], f => EnumFontFamiliesExW = f);
export {EnumFontFamiliesExW as EnumFontFamiliesEx};

export function EnumFontFamiliesA () {};
EnumFontFamiliesA = createAutoLoader(lib, "EnumFontFamiliesA", int /* int */, [
	HDC,           /* in     HDC           hdc       */
	LPCSTR,        /* in opt LPCSTR        lpLogfont */
	FONTENUMPROCA, /* in     FONTENUMPROCA lpProc    */
	LPARAM,        /* in     LPARAM        lParam    */
], f => EnumFontFamiliesA = f);

export function EnumFontFamiliesW () {};
EnumFontFamiliesW = createAutoLoader(lib, "EnumFontFamiliesW", int /* int */, [
	HDC,           /* in     HDC           hdc       */
	LPCWSTR,       /* in opt LPCWSTR       lpLogfont */
	FONTENUMPROCW, /* in     FONTENUMPROCW lpProc    */
	LPARAM,        /* in     LPARAM        lParam    */
], f => EnumFontFamiliesW = f);
export {EnumFontFamiliesW as EnumFontFamilies};

export function EnumFontsA () {};
EnumFontsA = createAutoLoader(lib, "EnumFontsA", int /* int */, [
	HDC,           /* in     HDC           hdc       */
	LPCSTR,        /* in opt LPCSTR        lpLogfont */
	FONTENUMPROCA, /* in     FONTENUMPROCA lpProc    */
	LPARAM,        /* in     LPARAM        lParam    */
], f => EnumFontsA = f);

export function EnumFontsW () {};
EnumFontsW = createAutoLoader(lib, "EnumFontsW", int /* int */, [
	HDC,           /* in     HDC           hdc       */
	LPCWSTR,       /* in opt LPCWSTR       lpLogfont */
	FONTENUMPROCW, /* in     FONTENUMPROCW lpProc    */
	LPARAM,        /* in     LPARAM        lParam    */
], f => EnumFontsW = f);
export {EnumFontsW as EnumFonts};

//#ifdef STRICT
export function EnumObjects () {};
EnumObjects = createAutoLoader(lib, "EnumObjects", int /* int */, [
	HDC,          /* in HDC          hdc    */
	int,          /* in int          nType  */
	GOBJENUMPROC, /* in GOBJENUMPROC lpFunc */
	LPARAM,       /* in LPARAM       lParam */
], f => EnumObjects = f);
//#else
// export function EnumObjects() {}
// EnumObjects = createAutoLoader(lib, "EnumObjects", int /* int */, [
// 	HDC,          /* in HDC          hdc    */
// 	int,          /* in int          nType  */
// 	GOBJENUMPROC, /* in GOBJENUMPROC lpFunc */
// 	LPVOID,       /* in LPVOID       lParam */
// ], f => EnumObjects = f);
//#endif

export function EqualRgn () {};
EqualRgn = createAutoLoader(lib, "EqualRgn", BOOL /* BOOL */, [
	HRGN, /* in HRGN hrgn1 */
	HRGN, /* in HRGN hrgn2 */
], f => EqualRgn = f);

export function Escape () {};
Escape = createAutoLoader(lib, "Escape", int /* int */, [
	HDC,         /* in      HDC    hdc     */
	int,         /* in      int    iEscape */
	int,         /* in      int    cjIn    */
	LPCSTR,      /*         LPCSTR pvIn    */
	out(LPVOID), /* out opt LPVOID pvOut   */
], f => Escape = f);

export function ExtEscape () {};
ExtEscape = createAutoLoader(lib, "ExtEscape", int /* int */, [
	HDC,    /* in HDC    hdc       */
	int,    /* in int    iEscape   */
	int,    /* in int    cjInput   */
	LPCSTR, /*    LPCSTR lpInData  */
	int,    /* in int    cjOutput  */
	LPSTR,  /*    LPSTR  lpOutData */
], f => ExtEscape = f);

export function ExcludeClipRect () {};
ExcludeClipRect = createAutoLoader(lib, "ExcludeClipRect", int /* int */, [
	HDC, /* in HDC hdc    */
	int, /* in int left   */
	int, /* in int top    */
	int, /* in int right  */
	int, /* in int bottom */
], f => ExcludeClipRect = f);

export function ExtCreateRegion () {};
ExtCreateRegion = createAutoLoader(lib, "ExtCreateRegion", HRGN /* HRGN */, [
	pointer(XFORM),   /* in opt CONST XFORM *   lpx    */
	DWORD,            /* in     DWORD           nCount */
	pointer(RGNDATA), /*        CONST RGNDATA * lpData */
], f => ExtCreateRegion = f);

export function ExtFloodFill () {};
ExtFloodFill = createAutoLoader(lib, "ExtFloodFill", BOOL /* BOOL */, [
	HDC,      /* in HDC      hdc   */
	int,      /* in int      x     */
	int,      /* in int      y     */
	COLORREF, /* in COLORREF color */
	UINT,     /* in UINT     type  */
], f => ExtFloodFill = f);

export function FillRgn () {};
FillRgn = createAutoLoader(lib, "FillRgn", BOOL /* BOOL */, [
	HDC,    /* in HDC    hdc  */
	HRGN,   /* in HRGN   hrgn */
	HBRUSH, /* in HBRUSH hbr  */
], f => FillRgn = f);

export function FloodFill () {};
FloodFill = createAutoLoader(lib, "FloodFill", BOOL /* BOOL */, [
	HDC,      /* in HDC      hdc   */
	int,      /* in int      x     */
	int,      /* in int      y     */
	COLORREF, /* in COLORREF color */
], f => FloodFill = f);

export function FrameRgn () {};
FrameRgn = createAutoLoader(lib, "FrameRgn", BOOL /* BOOL */, [
	HDC,    /* in HDC    hdc  */
	HRGN,   /* in HRGN   hrgn */
	HBRUSH, /* in HBRUSH hbr  */
	int,    /* in int    w    */
	int,    /* in int    h    */
], f => FrameRgn = f);

export function GetROP2 () {};
GetROP2 = createAutoLoader(lib, "GetROP2", int /* int */, [
	HDC, /* in HDC hdc */
], f => GetROP2 = f);

export function GetAspectRatioFilterEx () {};
GetAspectRatioFilterEx = createAutoLoader(lib, "GetAspectRatioFilterEx", BOOL /* BOOL */, [
	HDC,         /* in  HDC    hdc    */
	out(LPSIZE), /* out LPSIZE lpsize */
], f => GetAspectRatioFilterEx = f);

export function GetBkColor () {};
GetBkColor = createAutoLoader(lib, "GetBkColor", COLORREF /* COLORREF */, [
	HDC, /* in HDC hdc */
], f => GetBkColor = f);

export function GetDCBrushColor () {};
GetDCBrushColor = createAutoLoader(lib, "GetDCBrushColor", COLORREF /* COLORREF */, [
	HDC, /* in HDC hdc */
], f => GetDCBrushColor = f);

export function GetDCPenColor () {};
GetDCPenColor = createAutoLoader(lib, "GetDCPenColor", COLORREF /* COLORREF */, [
	HDC, /* in HDC hdc */
], f => GetDCPenColor = f);

export function GetBkMode () {};
GetBkMode = createAutoLoader(lib, "GetBkMode", int /* int */, [
	HDC, /* in HDC hdc */
], f => GetBkMode = f);

export function GetBitmapBits () {};
GetBitmapBits = createAutoLoader(lib, "GetBitmapBits", LONG /* LONG */, [
	HBITMAP, /* in HBITMAP hbit    */
	LONG,    /* in LONG    cb      */
	LPVOID,  /*    LPVOID  lpvBits */
], f => GetBitmapBits = f);

export function GetBitmapDimensionEx () {};
GetBitmapDimensionEx = createAutoLoader(lib, "GetBitmapDimensionEx", BOOL /* BOOL */, [
	HBITMAP,     /* in  HBITMAP hbit   */
	out(LPSIZE), /* out LPSIZE  lpsize */
], f => GetBitmapDimensionEx = f);

export function GetBoundsRect () {};
GetBoundsRect = createAutoLoader(lib, "GetBoundsRect", UINT /* UINT */, [
	HDC,         /* in  HDC    hdc    */
	out(LPRECT), /* out LPRECT lprect */
	UINT,        /* in  UINT   flags  */
], f => GetBoundsRect = f);

export function GetBrushOrgEx () {};
GetBrushOrgEx = createAutoLoader(lib, "GetBrushOrgEx", BOOL /* BOOL */, [
	HDC,          /* in  HDC     hdc  */
	out(LPPOINT), /* out LPPOINT lppt */
], f => GetBrushOrgEx = f);

export function GetCharWidthA () {};
GetCharWidthA = createAutoLoader(lib, "GetCharWidthA", BOOL /* BOOL */, [
	HDC,   /* in HDC   hdc      */
	UINT,  /* in UINT  iFirst   */
	UINT,  /* in UINT  iLast    */
	LPINT, /*    LPINT lpBuffer */
], f => GetCharWidthA = f);

export function GetCharWidthW () {};
GetCharWidthW = createAutoLoader(lib, "GetCharWidthW", BOOL /* BOOL */, [
	HDC,   /* in HDC   hdc      */
	UINT,  /* in UINT  iFirst   */
	UINT,  /* in UINT  iLast    */
	LPINT, /*    LPINT lpBuffer */
], f => GetCharWidthW = f);
export {GetCharWidthW as GetCharWidth};

export function GetCharWidth32A () {};
GetCharWidth32A = createAutoLoader(lib, "GetCharWidth32A", BOOL /* BOOL */, [
	HDC,   /* in HDC   hdc      */
	UINT,  /* in UINT  iFirst   */
	UINT,  /* in UINT  iLast    */
	LPINT, /*    LPINT lpBuffer */
], f => GetCharWidth32A = f);

export function GetCharWidth32W () {};
GetCharWidth32W = createAutoLoader(lib, "GetCharWidth32W", BOOL /* BOOL */, [
	HDC,   /* in HDC   hdc      */
	UINT,  /* in UINT  iFirst   */
	UINT,  /* in UINT  iLast    */
	LPINT, /*    LPINT lpBuffer */
], f => GetCharWidth32W = f);
export {GetCharWidth32W as GetCharWidth32};

export function GetCharWidthFloatA () {};
GetCharWidthFloatA = createAutoLoader(lib, "GetCharWidthFloatA", BOOL /* BOOL */, [
	HDC,    /* in HDC    hdc      */
	UINT,   /* in UINT   iFirst   */
	UINT,   /* in UINT   iLast    */
	PFLOAT, /*    PFLOAT lpBuffer */
], f => GetCharWidthFloatA = f);

export function GetCharWidthFloatW () {};
GetCharWidthFloatW = createAutoLoader(lib, "GetCharWidthFloatW", BOOL /* BOOL */, [
	HDC,    /* in HDC    hdc      */
	UINT,   /* in UINT   iFirst   */
	UINT,   /* in UINT   iLast    */
	PFLOAT, /*    PFLOAT lpBuffer */
], f => GetCharWidthFloatW = f);
export {GetCharWidthFloatW as GetCharWidthFloat};

export function GetCharABCWidthsA () {};
GetCharABCWidthsA = createAutoLoader(lib, "GetCharABCWidthsA", BOOL /* BOOL */, [
	HDC,   /* in HDC   hdc    */
	UINT,  /* in UINT  wFirst */
	UINT,  /* in UINT  wLast  */
	LPABC, /*    LPABC lpABC  */
], f => GetCharABCWidthsA = f);

export function GetCharABCWidthsW () {};
GetCharABCWidthsW = createAutoLoader(lib, "GetCharABCWidthsW", BOOL /* BOOL */, [
	HDC,   /* in HDC   hdc    */
	UINT,  /* in UINT  wFirst */
	UINT,  /* in UINT  wLast  */
	LPABC, /*    LPABC lpABC  */
], f => GetCharABCWidthsW = f);
export {GetCharABCWidthsW as GetCharABCWidths};

export function GetCharABCWidthsFloatA () {};
GetCharABCWidthsFloatA = createAutoLoader(lib, "GetCharABCWidthsFloatA", BOOL /* BOOL */, [
	HDC,        /* in HDC        hdc    */
	UINT,       /* in UINT       iFirst */
	UINT,       /* in UINT       iLast  */
	LPABCFLOAT, /*    LPABCFLOAT lpABC  */
], f => GetCharABCWidthsFloatA = f);

export function GetCharABCWidthsFloatW () {};
GetCharABCWidthsFloatW = createAutoLoader(lib, "GetCharABCWidthsFloatW", BOOL /* BOOL */, [
	HDC,        /* in HDC        hdc    */
	UINT,       /* in UINT       iFirst */
	UINT,       /* in UINT       iLast  */
	LPABCFLOAT, /*    LPABCFLOAT lpABC  */
], f => GetCharABCWidthsFloatW = f);
export {GetCharABCWidthsFloatW as GetCharABCWidthsFloat};

export function GetClipBox () {};
GetClipBox = createAutoLoader(lib, "GetClipBox", int /* int */, [
	HDC,         /* in  HDC    hdc    */
	out(LPRECT), /* out LPRECT lprect */
], f => GetClipBox = f);

export function GetClipRgn () {};
GetClipRgn = createAutoLoader(lib, "GetClipRgn", int /* int */, [
	HDC,  /* in HDC  hdc  */
	HRGN, /* in HRGN hrgn */
], f => GetClipRgn = f);

export function GetMetaRgn () {};
GetMetaRgn = createAutoLoader(lib, "GetMetaRgn", int /* int */, [
	HDC,  /* in HDC  hdc  */
	HRGN, /* in HRGN hrgn */
], f => GetMetaRgn = f);

export function GetCurrentObject () {};
GetCurrentObject = createAutoLoader(lib, "GetCurrentObject", HGDIOBJ /* HGDIOBJ */, [
	HDC,  /* in HDC  hdc  */
	UINT, /* in UINT type */
], f => GetCurrentObject = f);

export function GetCurrentPositionEx () {};
GetCurrentPositionEx = createAutoLoader(lib, "GetCurrentPositionEx", BOOL /* BOOL */, [
	HDC,          /* in  HDC     hdc  */
	out(LPPOINT), /* out LPPOINT lppt */
], f => GetCurrentPositionEx = f);

export function GetDeviceCaps () {};
GetDeviceCaps = createAutoLoader(lib, "GetDeviceCaps", int /* int */, [
	HDC, /* in opt HDC hdc   */
	int, /* in     int index */
], f => GetDeviceCaps = f);

export function GetGlyphOutlineA () {};
GetGlyphOutlineA = createAutoLoader(lib, "GetGlyphOutlineA", DWORD /* DWORD */, [
	HDC,                 /* in  HDC            hdc      */
	UINT,                /* in  UINT           uChar    */
	UINT,                /* in  UINT           fuFormat */
	out(LPGLYPHMETRICS), /* out LPGLYPHMETRICS lpgm     */
	DWORD,               /* in  DWORD          cjBuffer */
	LPVOID,              /*     LPVOID         pvBuffer */
	pointer(MAT2),       /* in  CONST MAT2 *   lpmat2   */
], f => GetGlyphOutlineA = f);

export function GetGlyphOutlineW () {};
GetGlyphOutlineW = createAutoLoader(lib, "GetGlyphOutlineW", DWORD /* DWORD */, [
	HDC,                 /* in  HDC            hdc      */
	UINT,                /* in  UINT           uChar    */
	UINT,                /* in  UINT           fuFormat */
	out(LPGLYPHMETRICS), /* out LPGLYPHMETRICS lpgm     */
	DWORD,               /* in  DWORD          cjBuffer */
	LPVOID,              /*     LPVOID         pvBuffer */
	pointer(MAT2),       /* in  CONST MAT2 *   lpmat2   */
], f => GetGlyphOutlineW = f);
export {GetGlyphOutlineW as GetGlyphOutline};

export function GetGraphicsMode () {};
GetGraphicsMode = createAutoLoader(lib, "GetGraphicsMode", int /* int */, [
	HDC, /* in HDC hdc */
], f => GetGraphicsMode = f);

export function GetMapMode () {};
GetMapMode = createAutoLoader(lib, "GetMapMode", int /* int */, [
	HDC, /* in HDC hdc */
], f => GetMapMode = f);

export function GetMetaFileBitsEx () {};
GetMetaFileBitsEx = createAutoLoader(lib, "GetMetaFileBitsEx", UINT /* UINT */, [
	HMETAFILE, /* in HMETAFILE hMF      */
	UINT,      /* in UINT      cbBuffer */
	LPVOID,    /*    LPVOID    lpData   */
], f => GetMetaFileBitsEx = f);

export function GetMetaFileA () {};
GetMetaFileA = createAutoLoader(lib, "GetMetaFileA", HMETAFILE /* HMETAFILE */, [
	LPCSTR, /* in LPCSTR lpName */
], f => GetMetaFileA = f);

export function GetMetaFileW () {};
GetMetaFileW = createAutoLoader(lib, "GetMetaFileW", HMETAFILE /* HMETAFILE */, [
	LPCWSTR, /* in LPCWSTR lpName */
], f => GetMetaFileW = f);
export {GetMetaFileW as GetMetaFile};

export function GetNearestColor () {};
GetNearestColor = createAutoLoader(lib, "GetNearestColor", COLORREF /* COLORREF */, [
	HDC,      /* in HDC      hdc   */
	COLORREF, /* in COLORREF color */
], f => GetNearestColor = f);

export function GetNearestPaletteIndex () {};
GetNearestPaletteIndex = createAutoLoader(lib, "GetNearestPaletteIndex", UINT /* UINT */, [
	HPALETTE, /* in HPALETTE h     */
	COLORREF, /* in COLORREF color */
], f => GetNearestPaletteIndex = f);

export function GetObjectType () {};
GetObjectType = createAutoLoader(lib, "GetObjectType", DWORD /* DWORD */, [
	HGDIOBJ, /* in HGDIOBJ h */
], f => GetObjectType = f);

export function GetOutlineTextMetricsA () {};
GetOutlineTextMetricsA = createAutoLoader(lib, "GetOutlineTextMetricsA", UINT /* UINT */, [
	HDC,                  /* in HDC                  hdc    */
	UINT,                 /* in UINT                 cjCopy */
	LPOUTLINETEXTMETRICA, /*    LPOUTLINETEXTMETRICA potm   */
], f => GetOutlineTextMetricsA = f);

export function GetOutlineTextMetricsW () {};
GetOutlineTextMetricsW = createAutoLoader(lib, "GetOutlineTextMetricsW", UINT /* UINT */, [
	HDC,                  /* in HDC                  hdc    */
	UINT,                 /* in UINT                 cjCopy */
	LPOUTLINETEXTMETRICW, /*    LPOUTLINETEXTMETRICW potm   */
], f => GetOutlineTextMetricsW = f);
export {GetOutlineTextMetricsW as GetOutlineTextMetrics};

export function GetPaletteEntries () {};
GetPaletteEntries = createAutoLoader(lib, "GetPaletteEntries", UINT /* UINT */, [
	HPALETTE,       /* in HPALETTE       hpal        */
	UINT,           /* in UINT           iStart      */
	UINT,           /* in UINT           cEntries    */
	LPPALETTEENTRY, /*    LPPALETTEENTRY pPalEntries */
], f => GetPaletteEntries = f);

export function GetPixel () {};
GetPixel = createAutoLoader(lib, "GetPixel", COLORREF /* COLORREF */, [
	HDC, /* in HDC hdc */
	int, /* in int x   */
	int, /* in int y   */
], f => GetPixel = f);

export function GetPixelFormat () {};
GetPixelFormat = createAutoLoader(lib, "GetPixelFormat", int /* int */, [
	HDC, /* in HDC hdc */
], f => GetPixelFormat = f);

export function GetPolyFillMode () {};
GetPolyFillMode = createAutoLoader(lib, "GetPolyFillMode", int /* int */, [
	HDC, /* in HDC hdc */
], f => GetPolyFillMode = f);

export function GetRasterizerCaps () {};
GetRasterizerCaps = createAutoLoader(lib, "GetRasterizerCaps", BOOL /* BOOL */, [
	LPRASTERIZER_STATUS, /*    LPRASTERIZER_STATUS lpraststat */
	UINT,                /* in UINT                cjBytes    */
], f => GetRasterizerCaps = f);

export function GetRandomRgn () {};
GetRandomRgn = createAutoLoader(lib, "GetRandomRgn", int /* int */, [
	HDC,  /* in HDC  hdc  */
	HRGN, /* in HRGN hrgn */
	INT,  /* in INT  i    */
], f => GetRandomRgn = f);

export function GetRgnBox () {};
GetRgnBox = createAutoLoader(lib, "GetRgnBox", int /* int */, [
	HRGN,        /* in  HRGN   hrgn */
	out(LPRECT), /* out LPRECT lprc */
], f => GetRgnBox = f);

export function GetStockObject () {};
GetStockObject = createAutoLoader(lib, "GetStockObject", HGDIOBJ /* HGDIOBJ */, [
	int, /* in int i */
], f => GetStockObject = f);

export function GetStretchBltMode () {};
GetStretchBltMode = createAutoLoader(lib, "GetStretchBltMode", int /* int */, [
	HDC, /* in HDC hdc */
], f => GetStretchBltMode = f);

export function GetSystemPaletteEntries () {};
GetSystemPaletteEntries = createAutoLoader(lib, "GetSystemPaletteEntries", UINT /* UINT */, [
	HDC,            /* in HDC            hdc         */
	UINT,           /* in UINT           iStart      */
	UINT,           /* in UINT           cEntries    */
	LPPALETTEENTRY, /*    LPPALETTEENTRY pPalEntries */
], f => GetSystemPaletteEntries = f);

export function GetSystemPaletteUse () {};
GetSystemPaletteUse = createAutoLoader(lib, "GetSystemPaletteUse", UINT /* UINT */, [
	HDC, /* in HDC hdc */
], f => GetSystemPaletteUse = f);

export function GetTextCharacterExtra () {};
GetTextCharacterExtra = createAutoLoader(lib, "GetTextCharacterExtra", int /* int */, [
	HDC, /* in HDC hdc */
], f => GetTextCharacterExtra = f);

export function GetTextAlign () {};
GetTextAlign = createAutoLoader(lib, "GetTextAlign", UINT /* UINT */, [
	HDC, /* in HDC hdc */
], f => GetTextAlign = f);

export function GetTextColor () {};
GetTextColor = createAutoLoader(lib, "GetTextColor", COLORREF /* COLORREF */, [
	HDC, /* in HDC hdc */
], f => GetTextColor = f);

export function GetTextExtentPointA () {};
GetTextExtentPointA = createAutoLoader(lib, "GetTextExtentPointA", BOOL /* BOOL */, [
	HDC,         /* in  HDC    hdc      */
	LPCSTR,      /*     LPCSTR lpString */
	int,         /* in  int    c        */
	out(LPSIZE), /* out LPSIZE lpsz     */
], f => GetTextExtentPointA = f);

export function GetTextExtentPointW () {};
GetTextExtentPointW = createAutoLoader(lib, "GetTextExtentPointW", BOOL /* BOOL */, [
	HDC,         /* in  HDC     hdc      */
	LPCWSTR,     /*     LPCWSTR lpString */
	int,         /* in  int     c        */
	out(LPSIZE), /* out LPSIZE  lpsz     */
], f => GetTextExtentPointW = f);
export {GetTextExtentPointW as GetTextExtentPoint};

export function GetTextExtentPoint32A () {};
GetTextExtentPoint32A = createAutoLoader(lib, "GetTextExtentPoint32A", BOOL /* BOOL */, [
	HDC,         /* in  HDC    hdc      */
	LPCSTR,      /*     LPCSTR lpString */
	int,         /* in  int    c        */
	out(LPSIZE), /* out LPSIZE psizl    */
], f => GetTextExtentPoint32A = f);

export function GetTextExtentPoint32W () {};
GetTextExtentPoint32W = createAutoLoader(lib, "GetTextExtentPoint32W", BOOL /* BOOL */, [
	HDC,         /* in  HDC     hdc      */
	LPCWSTR,     /*     LPCWSTR lpString */
	int,         /* in  int     c        */
	out(LPSIZE), /* out LPSIZE  psizl    */
], f => GetTextExtentPoint32W = f);
export {GetTextExtentPoint32W as GetTextExtentPoint32};

export function GetTextCharset () {};
GetTextCharset = createAutoLoader(lib, "GetTextCharset", int /* int */, [
	HDC, /* in HDC hdc */
], f => GetTextCharset = f);

export function GetTextCharsetInfo () {};
GetTextCharsetInfo = createAutoLoader(lib, "GetTextCharsetInfo", int /* int */, [
	HDC,                  /* in      HDC             hdc     */
	out(LPFONTSIGNATURE), /* out opt LPFONTSIGNATURE lpSig   */
	DWORD,                /* in      DWORD           dwFlags */
], f => GetTextCharsetInfo = f);

export function TranslateCharsetInfo () {};
TranslateCharsetInfo = createAutoLoader(lib, "TranslateCharsetInfo", BOOL /* BOOL */, [
	inout(pointer(DWORD)), /* in out DWORD FAR *   lpSrc   */
	out(LPCHARSETINFO),    /* out    LPCHARSETINFO lpCs    */
	DWORD,                 /* in     DWORD         dwFlags */
], f => TranslateCharsetInfo = f);

export function GetFontLanguageInfo () {};
GetFontLanguageInfo = createAutoLoader(lib, "GetFontLanguageInfo", DWORD /* DWORD */, [
	HDC, /* in HDC hdc */
], f => GetFontLanguageInfo = f);

export function GetCharacterPlacementA () {};
GetCharacterPlacementA = createAutoLoader(lib, "GetCharacterPlacementA", DWORD /* DWORD */, [
	HDC,                   /* in     HDC            hdc        */
	LPCSTR,                /*        LPCSTR         lpString   */
	int,                   /* in     int            nCount     */
	int,                   /* in     int            nMexExtent */
	inout(LPGCP_RESULTSA), /* in out LPGCP_RESULTSA lpResults  */
	DWORD,                 /* in     DWORD          dwFlags    */
], f => GetCharacterPlacementA = f);

export function GetCharacterPlacementW () {};
GetCharacterPlacementW = createAutoLoader(lib, "GetCharacterPlacementW", DWORD /* DWORD */, [
	HDC,                   /* in     HDC            hdc        */
	LPCWSTR,               /*        LPCWSTR        lpString   */
	int,                   /* in     int            nCount     */
	int,                   /* in     int            nMexExtent */
	inout(LPGCP_RESULTSW), /* in out LPGCP_RESULTSW lpResults  */
	DWORD,                 /* in     DWORD          dwFlags    */
], f => GetCharacterPlacementW = f);
export {GetCharacterPlacementW as GetCharacterPlacement};

export function GetFontUnicodeRanges () {};
GetFontUnicodeRanges = createAutoLoader(lib, "GetFontUnicodeRanges", DWORD /* DWORD */, [
	HDC,             /* in      HDC        hdc  */
	out(LPGLYPHSET), /* out opt LPGLYPHSET lpgs */
], f => GetFontUnicodeRanges = f);

export function GetGlyphIndicesA () {};
GetGlyphIndicesA = createAutoLoader(lib, "GetGlyphIndicesA", DWORD /* DWORD */, [
	HDC,    /* in HDC    hdc   */
	LPCSTR, /*    LPCSTR lpstr */
	int,    /* in int    c     */
	LPWORD, /*    LPWORD pgi   */
	DWORD,  /* in DWORD  fl    */
], f => GetGlyphIndicesA = f);

export function GetGlyphIndicesW () {};
GetGlyphIndicesW = createAutoLoader(lib, "GetGlyphIndicesW", DWORD /* DWORD */, [
	HDC,     /* in HDC     hdc   */
	LPCWSTR, /*    LPCWSTR lpstr */
	int,     /* in int     c     */
	LPWORD,  /*    LPWORD  pgi   */
	DWORD,   /* in DWORD   fl    */
], f => GetGlyphIndicesW = f);
export {GetGlyphIndicesW as GetGlyphIndices};

export function GetTextExtentPointI () {};
GetTextExtentPointI = createAutoLoader(lib, "GetTextExtentPointI", BOOL /* BOOL */, [
	HDC,         /* in  HDC    hdc   */
	LPWORD,      /*     LPWORD pgiIn */
	int,         /* in  int    cgi   */
	out(LPSIZE), /* out LPSIZE psize */
], f => GetTextExtentPointI = f);

export function GetTextExtentExPointI () {};
GetTextExtentExPointI = createAutoLoader(lib, "GetTextExtentExPointI", BOOL /* BOOL */, [
	HDC,         /* in      HDC    hdc         */
	LPWORD,      /*         LPWORD lpwszString */
	int,         /* in      int    cwchString  */
	int,         /* in      int    nMaxExtent  */
	out(LPINT),  /* out opt LPINT  lpnFit      */
	LPINT,       /*         LPINT  lpnDx       */
	out(LPSIZE), /* out     LPSIZE lpSize      */
], f => GetTextExtentExPointI = f);

export function AddFontResourceExA () {};
AddFontResourceExA = createAutoLoader(lib, "AddFontResourceExA", int /* int */, [
	LPCSTR, /* in       LPCSTR name */
	DWORD,  /* in       DWORD  fl   */
	PVOID,  /* reserved PVOID  res  */
], f => AddFontResourceExA = f);

export function AddFontResourceExW () {};
AddFontResourceExW = createAutoLoader(lib, "AddFontResourceExW", int /* int */, [
	LPCWSTR, /* in       LPCWSTR name */
	DWORD,   /* in       DWORD   fl   */
	PVOID,   /* reserved PVOID   res  */
], f => AddFontResourceExW = f);
export {AddFontResourceExW as AddFontResourceEx};

export function RemoveFontResourceExA () {};
RemoveFontResourceExA = createAutoLoader(lib, "RemoveFontResourceExA", BOOL /* BOOL */, [
	LPCSTR, /* in       LPCSTR name */
	DWORD,  /* in       DWORD  fl   */
	PVOID,  /* reserved PVOID  pdv  */
], f => RemoveFontResourceExA = f);

export function RemoveFontResourceExW () {};
RemoveFontResourceExW = createAutoLoader(lib, "RemoveFontResourceExW", BOOL /* BOOL */, [
	LPCWSTR, /* in       LPCWSTR name */
	DWORD,   /* in       DWORD   fl   */
	PVOID,   /* reserved PVOID   pdv  */
], f => RemoveFontResourceExW = f);
export {RemoveFontResourceExW as RemoveFontResourceEx};

export function AddFontMemResourceEx () {};
AddFontMemResourceEx = createAutoLoader(lib, "AddFontMemResourceEx", HANDLE /* HANDLE */, [
	PVOID,          /*          PVOID  pFileView */
	DWORD,          /* in       DWORD  cjSize    */
	PVOID,          /* reserved PVOID  pvResrved */
	pointer(DWORD), /* in       DWORD* pNumFonts */
], f => AddFontMemResourceEx = f);

export function RemoveFontMemResourceEx () {};
RemoveFontMemResourceEx = createAutoLoader(lib, "RemoveFontMemResourceEx", BOOL /* BOOL */, [
	HANDLE, /* in HANDLE h */
], f => RemoveFontMemResourceEx = f);

export function CreateFontIndirectExA () {};
CreateFontIndirectExA = createAutoLoader(lib, "CreateFontIndirectExA", HFONT /* HFONT */, [
	pointer(ENUMLOGFONTEXDVA), /* in CONST ENUMLOGFONTEXDVA*  */
], f => CreateFontIndirectExA = f);

export function CreateFontIndirectExW () {};
CreateFontIndirectExW = createAutoLoader(lib, "CreateFontIndirectExW", HFONT /* HFONT */, [
	pointer(ENUMLOGFONTEXDVW), /* in CONST ENUMLOGFONTEXDVW*  */
], f => CreateFontIndirectExW = f);
export {CreateFontIndirectExW as CreateFontIndirectEx};

export function GetViewportExtEx () {};
GetViewportExtEx = createAutoLoader(lib, "GetViewportExtEx", BOOL /* BOOL */, [
	HDC,         /* in  HDC    hdc    */
	out(LPSIZE), /* out LPSIZE lpsize */
], f => GetViewportExtEx = f);

export function GetViewportOrgEx () {};
GetViewportOrgEx = createAutoLoader(lib, "GetViewportOrgEx", BOOL /* BOOL */, [
	HDC,          /* in  HDC     hdc     */
	out(LPPOINT), /* out LPPOINT lppoint */
], f => GetViewportOrgEx = f);

export function GetWindowExtEx () {};
GetWindowExtEx = createAutoLoader(lib, "GetWindowExtEx", BOOL /* BOOL */, [
	HDC,         /* in  HDC    hdc    */
	out(LPSIZE), /* out LPSIZE lpsize */
], f => GetWindowExtEx = f);

export function GetWindowOrgEx () {};
GetWindowOrgEx = createAutoLoader(lib, "GetWindowOrgEx", BOOL /* BOOL */, [
	HDC,          /* in  HDC     hdc     */
	out(LPPOINT), /* out LPPOINT lppoint */
], f => GetWindowOrgEx = f);

export function IntersectClipRect () {};
IntersectClipRect = createAutoLoader(lib, "IntersectClipRect", int /* int */, [
	HDC, /* in HDC hdc    */
	int, /* in int left   */
	int, /* in int top    */
	int, /* in int right  */
	int, /* in int bottom */
], f => IntersectClipRect = f);

export function InvertRgn () {};
InvertRgn = createAutoLoader(lib, "InvertRgn", BOOL /* BOOL */, [
	HDC,  /* in HDC  hdc  */
	HRGN, /* in HRGN hrgn */
], f => InvertRgn = f);

export function LineDDA () {};
LineDDA = createAutoLoader(lib, "LineDDA", BOOL /* BOOL */, [
	int,         /* in     int         xStart */
	int,         /* in     int         yStart */
	int,         /* in     int         xEnd   */
	int,         /* in     int         yEnd   */
	LINEDDAPROC, /* in     LINEDDAPROC lpProc */
	LPARAM,      /* in opt LPARAM      data   */
], f => LineDDA = f);

export function LineTo () {};
LineTo = createAutoLoader(lib, "LineTo", BOOL /* BOOL */, [
	HDC, /* in HDC hdc */
	int, /* in int x   */
	int, /* in int y   */
], f => LineTo = f);

export function MaskBlt () {};
MaskBlt = createAutoLoader(lib, "MaskBlt", BOOL /* BOOL */, [
	HDC,     /* in HDC     hdcDest */
	int,     /* in int     xDest   */
	int,     /* in int     yDest   */
	int,     /* in int     width   */
	int,     /* in int     height  */
	HDC,     /* in HDC     hdcSrc  */
	int,     /* in int     xSrc    */
	int,     /* in int     ySrc    */
	HBITMAP, /* in HBITMAP hbmMask */
	int,     /* in int     xMask   */
	int,     /* in int     yMask   */
	DWORD,   /* in DWORD   rop     */
], f => MaskBlt = f);

export function PlgBlt () {};
PlgBlt = createAutoLoader(lib, "PlgBlt", BOOL /* BOOL */, [
	HDC,            /* in     HDC           hdcDest */
	pointer(POINT), /*        CONST POINT * lpPoint */
	HDC,            /* in     HDC           hdcSrc  */
	int,            /* in     int           xSrc    */
	int,            /* in     int           ySrc    */
	int,            /* in     int           width   */
	int,            /* in     int           height  */
	HBITMAP,        /* in opt HBITMAP       hbmMask */
	int,            /* in     int           xMask   */
	int,            /* in     int           yMask   */
], f => PlgBlt = f);

export function OffsetClipRgn () {};
OffsetClipRgn = createAutoLoader(lib, "OffsetClipRgn", int /* int */, [
	HDC, /* in HDC hdc */
	int, /* in int x   */
	int, /* in int y   */
], f => OffsetClipRgn = f);

export function OffsetRgn () {};
OffsetRgn = createAutoLoader(lib, "OffsetRgn", int /* int */, [
	HRGN, /* in HRGN hrgn */
	int,  /* in int  x    */
	int,  /* in int  y    */
], f => OffsetRgn = f);

export function PatBlt () {};
PatBlt = createAutoLoader(lib, "PatBlt", BOOL /* BOOL */, [
	HDC,   /* in HDC   hdc */
	int,   /* in int   x   */
	int,   /* in int   y   */
	int,   /* in int   w   */
	int,   /* in int   h   */
	DWORD, /* in DWORD rop */
], f => PatBlt = f);

export function Pie () {};
Pie = createAutoLoader(lib, "Pie", BOOL /* BOOL */, [
	HDC, /* in HDC hdc    */
	int, /* in int left   */
	int, /* in int top    */
	int, /* in int right  */
	int, /* in int bottom */
	int, /* in int xr1    */
	int, /* in int yr1    */
	int, /* in int xr2    */
	int, /* in int yr2    */
], f => Pie = f);

export function PlayMetaFile () {};
PlayMetaFile = createAutoLoader(lib, "PlayMetaFile", BOOL /* BOOL */, [
	HDC,       /* in HDC       hdc */
	HMETAFILE, /* in HMETAFILE hmf */
], f => PlayMetaFile = f);

export function PaintRgn () {};
PaintRgn = createAutoLoader(lib, "PaintRgn", BOOL /* BOOL */, [
	HDC,  /* in HDC  hdc  */
	HRGN, /* in HRGN hrgn */
], f => PaintRgn = f);

export function PolyPolygon () {};
PolyPolygon = createAutoLoader(lib, "PolyPolygon", BOOL /* BOOL */, [
	HDC,            /* in HDC           hdc */
	pointer(POINT), /* in CONST POINT * apt */
	pointer(INT),   /*    CONST INT *   asz */
	int,            /* in int           csz */
], f => PolyPolygon = f);

export function PtInRegion () {};
PtInRegion = createAutoLoader(lib, "PtInRegion", BOOL /* BOOL */, [
	HRGN, /* in HRGN hrgn */
	int,  /* in int  x    */
	int,  /* in int  y    */
], f => PtInRegion = f);

export function PtVisible () {};
PtVisible = createAutoLoader(lib, "PtVisible", BOOL /* BOOL */, [
	HDC, /* in HDC hdc */
	int, /* in int x   */
	int, /* in int y   */
], f => PtVisible = f);

export function RectInRegion () {};
RectInRegion = createAutoLoader(lib, "RectInRegion", BOOL /* BOOL */, [
	HRGN,          /* in HRGN         hrgn   */
	pointer(RECT), /* in CONST RECT * lprect */
], f => RectInRegion = f);

export function RectVisible () {};
RectVisible = createAutoLoader(lib, "RectVisible", BOOL /* BOOL */, [
	HDC,           /* in HDC          hdc    */
	pointer(RECT), /* in CONST RECT * lprect */
], f => RectVisible = f);

export function Rectangle () {};
Rectangle = createAutoLoader(lib, "Rectangle", BOOL /* BOOL */, [
	HDC, /* in HDC hdc    */
	int, /* in int left   */
	int, /* in int top    */
	int, /* in int right  */
	int, /* in int bottom */
], f => Rectangle = f);

export function RestoreDC () {};
RestoreDC = createAutoLoader(lib, "RestoreDC", BOOL /* BOOL */, [
	HDC, /* in HDC hdc      */
	int, /* in int nSavedDC */
], f => RestoreDC = f);

export function ResetDCA () {};
ResetDCA = createAutoLoader(lib, "ResetDCA", HDC /* HDC */, [
	HDC,               /* in HDC              hdc  */
	pointer(DEVMODEA), /* in CONST DEVMODEA * lpdm */
], f => ResetDCA = f);

export function ResetDCW () {};
ResetDCW = createAutoLoader(lib, "ResetDCW", HDC /* HDC */, [
	HDC,               /* in HDC              hdc  */
	pointer(DEVMODEW), /* in CONST DEVMODEW * lpdm */
], f => ResetDCW = f);
export {ResetDCW as ResetDC};

export function RealizePalette () {};
RealizePalette = createAutoLoader(lib, "RealizePalette", UINT /* UINT */, [
	HDC, /* in HDC hdc */
], f => RealizePalette = f);

export function RemoveFontResourceA () {};
RemoveFontResourceA = createAutoLoader(lib, "RemoveFontResourceA", BOOL /* BOOL */, [
	LPCSTR, /* in LPCSTR lpFileName */
], f => RemoveFontResourceA = f);

export function RemoveFontResourceW () {};
RemoveFontResourceW = createAutoLoader(lib, "RemoveFontResourceW", BOOL /* BOOL */, [
	LPCWSTR, /* in LPCWSTR lpFileName */
], f => RemoveFontResourceW = f);
export {RemoveFontResourceW as RemoveFontResource};

export function RoundRect () {};
RoundRect = createAutoLoader(lib, "RoundRect", BOOL /* BOOL */, [
	HDC, /* in HDC hdc    */
	int, /* in int left   */
	int, /* in int top    */
	int, /* in int right  */
	int, /* in int bottom */
	int, /* in int width  */
	int, /* in int height */
], f => RoundRect = f);

export function ResizePalette () {};
ResizePalette = createAutoLoader(lib, "ResizePalette", BOOL /* BOOL */, [
	HPALETTE, /* in HPALETTE hpal */
	UINT,     /* in UINT     n    */
], f => ResizePalette = f);

export function SaveDC () {};
SaveDC = createAutoLoader(lib, "SaveDC", int /* int */, [
	HDC, /* in HDC hdc */
], f => SaveDC = f);

export function SelectClipRgn () {};
SelectClipRgn = createAutoLoader(lib, "SelectClipRgn", int /* int */, [
	HDC,  /* in     HDC  hdc  */
	HRGN, /* in opt HRGN hrgn */
], f => SelectClipRgn = f);

export function ExtSelectClipRgn () {};
ExtSelectClipRgn = createAutoLoader(lib, "ExtSelectClipRgn", int /* int */, [
	HDC,  /* in     HDC  hdc  */
	HRGN, /* in opt HRGN hrgn */
	int,  /* in     int  mode */
], f => ExtSelectClipRgn = f);

export function SetMetaRgn () {};
SetMetaRgn = createAutoLoader(lib, "SetMetaRgn", int /* int */, [
	HDC, /* in HDC hdc */
], f => SetMetaRgn = f);

export function SelectObject () {};
SelectObject = createAutoLoader(lib, "SelectObject", HGDIOBJ /* HGDIOBJ */, [
	HDC,     /* in HDC     hdc */
	HGDIOBJ, /* in HGDIOBJ h   */
], f => SelectObject = f);

export function SelectPalette () {};
SelectPalette = createAutoLoader(lib, "SelectPalette", HPALETTE /* HPALETTE */, [
	HDC,      /* in HDC      hdc        */
	HPALETTE, /* in HPALETTE hPal       */
	BOOL,     /* in BOOL     bForceBkgd */
], f => SelectPalette = f);

export function SetBkColor () {};
SetBkColor = createAutoLoader(lib, "SetBkColor", COLORREF /* COLORREF */, [
	HDC,      /* in HDC      hdc   */
	COLORREF, /* in COLORREF color */
], f => SetBkColor = f);

export function SetDCBrushColor () {};
SetDCBrushColor = createAutoLoader(lib, "SetDCBrushColor", COLORREF /* COLORREF */, [
	HDC,      /* in HDC      hdc   */
	COLORREF, /* in COLORREF color */
], f => SetDCBrushColor = f);

export function SetDCPenColor () {};
SetDCPenColor = createAutoLoader(lib, "SetDCPenColor", COLORREF /* COLORREF */, [
	HDC,      /* in HDC      hdc   */
	COLORREF, /* in COLORREF color */
], f => SetDCPenColor = f);

export function SetBkMode () {};
SetBkMode = createAutoLoader(lib, "SetBkMode", int /* int */, [
	HDC, /* in HDC hdc  */
	int, /* in int mode */
], f => SetBkMode = f);

export function SetBitmapBits () {};
SetBitmapBits = createAutoLoader(lib, "SetBitmapBits", LONG /* LONG */, [
	HBITMAP,       /* in HBITMAP      hbm    */
	DWORD,         /* in DWORD        cb     */
	pointer(VOID), /*    CONST VOID * pvBits */
], f => SetBitmapBits = f);

export function SetBoundsRect () {};
SetBoundsRect = createAutoLoader(lib, "SetBoundsRect", UINT /* UINT */, [
	HDC,           /* in     HDC          hdc    */
	pointer(RECT), /* in opt CONST RECT * lprect */
	UINT,          /* in     UINT         flags  */
], f => SetBoundsRect = f);

export function SetDIBits () {};
SetDIBits = createAutoLoader(lib, "SetDIBits", int /* int */, [
	HDC,                 /* in opt HDC                hdc      */
	HBITMAP,             /* in     HBITMAP            hbm      */
	UINT,                /* in     UINT               start    */
	UINT,                /* in     UINT               cLines   */
	pointer(VOID),       /* in     CONST VOID *       lpBits   */
	pointer(BITMAPINFO), /* in     CONST BITMAPINFO * lpbmi    */
	UINT,                /* in     UINT               ColorUse */
], f => SetDIBits = f);

export function SetDIBitsToDevice () {};
SetDIBitsToDevice = createAutoLoader(lib, "SetDIBitsToDevice", int /* int */, [
	HDC,                 /* in HDC                hdc       */
	int,                 /* in int                xDest     */
	int,                 /* in int                yDest     */
	DWORD,               /* in DWORD              w         */
	DWORD,               /* in DWORD              h         */
	int,                 /* in int                xSrc      */
	int,                 /* in int                ySrc      */
	UINT,                /* in UINT               StartScan */
	UINT,                /* in UINT               cLines    */
	pointer(VOID),       /* in CONST VOID *       lpvBits   */
	pointer(BITMAPINFO), /* in CONST BITMAPINFO * lpbmi     */
	UINT,                /* in UINT               ColorUse  */
], f => SetDIBitsToDevice = f);

export function SetMapperFlags () {};
SetMapperFlags = createAutoLoader(lib, "SetMapperFlags", DWORD /* DWORD */, [
	HDC,   /* in HDC   hdc   */
	DWORD, /* in DWORD flags */
], f => SetMapperFlags = f);

export function SetGraphicsMode () {};
SetGraphicsMode = createAutoLoader(lib, "SetGraphicsMode", int /* int */, [
	HDC, /* in HDC hdc   */
	int, /* in int iMode */
], f => SetGraphicsMode = f);

export function SetMapMode () {};
SetMapMode = createAutoLoader(lib, "SetMapMode", int /* int */, [
	HDC, /* in HDC hdc   */
	int, /* in int iMode */
], f => SetMapMode = f);

export function SetLayout () {};
SetLayout = createAutoLoader(lib, "SetLayout", DWORD /* DWORD */, [
	HDC,   /* in HDC   hdc */
	DWORD, /* in DWORD l   */
], f => SetLayout = f);

export function GetLayout () {};
GetLayout = createAutoLoader(lib, "GetLayout", DWORD /* DWORD */, [
	HDC, /* in HDC hdc */
], f => GetLayout = f);

export function SetMetaFileBitsEx () {};
SetMetaFileBitsEx = createAutoLoader(lib, "SetMetaFileBitsEx", HMETAFILE /* HMETAFILE */, [
	UINT,          /* in UINT         cbBuffer */
	pointer(BYTE), /*    CONST BYTE * lpData   */
], f => SetMetaFileBitsEx = f);

export function SetPaletteEntries () {};
SetPaletteEntries = createAutoLoader(lib, "SetPaletteEntries", UINT /* UINT */, [
	HPALETTE,              /* in HPALETTE             hpal        */
	UINT,                  /* in UINT                 iStart      */
	UINT,                  /* in UINT                 cEntries    */
	pointer(PALETTEENTRY), /*    CONST PALETTEENTRY * pPalEntries */
], f => SetPaletteEntries = f);

export function SetPixel () {};
SetPixel = createAutoLoader(lib, "SetPixel", COLORREF /* COLORREF */, [
	HDC,      /* in HDC      hdc   */
	int,      /* in int      x     */
	int,      /* in int      y     */
	COLORREF, /* in COLORREF color */
], f => SetPixel = f);

export function SetPixelV () {};
SetPixelV = createAutoLoader(lib, "SetPixelV", BOOL /* BOOL */, [
	HDC,      /* in HDC      hdc   */
	int,      /* in int      x     */
	int,      /* in int      y     */
	COLORREF, /* in COLORREF color */
], f => SetPixelV = f);

export function SetPixelFormat () {};
SetPixelFormat = createAutoLoader(lib, "SetPixelFormat", BOOL /* BOOL */, [
	HDC,                            /* in HDC                           hdc    */
	int,                            /* in int                           format */
	pointer(PIXELFORMATDESCRIPTOR), /* in CONST PIXELFORMATDESCRIPTOR * ppfd   */
], f => SetPixelFormat = f);

export function SetPolyFillMode () {};
SetPolyFillMode = createAutoLoader(lib, "SetPolyFillMode", int /* int */, [
	HDC, /* in HDC hdc  */
	int, /* in int mode */
], f => SetPolyFillMode = f);

export function StretchBlt () {};
StretchBlt = createAutoLoader(lib, "StretchBlt", BOOL /* BOOL */, [
	HDC,   /* in     HDC   hdcDest */
	int,   /* in     int   xDest   */
	int,   /* in     int   yDest   */
	int,   /* in     int   wDest   */
	int,   /* in     int   hDest   */
	HDC,   /* in opt HDC   hdcSrc  */
	int,   /* in     int   xSrc    */
	int,   /* in     int   ySrc    */
	int,   /* in     int   wSrc    */
	int,   /* in     int   hSrc    */
	DWORD, /* in     DWORD rop     */
], f => StretchBlt = f);

export function SetRectRgn () {};
SetRectRgn = createAutoLoader(lib, "SetRectRgn", BOOL /* BOOL */, [
	HRGN, /* in HRGN hrgn   */
	int,  /* in int  left   */
	int,  /* in int  top    */
	int,  /* in int  right  */
	int,  /* in int  bottom */
], f => SetRectRgn = f);

export function StretchDIBits () {};
StretchDIBits = createAutoLoader(lib, "StretchDIBits", int /* int */, [
	HDC,                 /* in     HDC                hdc        */
	int,                 /* in     int                xDest      */
	int,                 /* in     int                yDest      */
	int,                 /* in     int                DestWidth  */
	int,                 /* in     int                DestHeight */
	int,                 /* in     int                xSrc       */
	int,                 /* in     int                ySrc       */
	int,                 /* in     int                SrcWidth   */
	int,                 /* in     int                SrcHeight  */
	pointer(VOID),       /* in opt CONST VOID *       lpBits     */
	pointer(BITMAPINFO), /* in     CONST BITMAPINFO * lpbmi      */
	UINT,                /* in     UINT               iUsage     */
	DWORD,               /* in     DWORD              rop        */
], f => StretchDIBits = f);

export function SetROP2 () {};
SetROP2 = createAutoLoader(lib, "SetROP2", int /* int */, [
	HDC, /* in HDC hdc  */
	int, /* in int rop2 */
], f => SetROP2 = f);

export function SetStretchBltMode () {};
SetStretchBltMode = createAutoLoader(lib, "SetStretchBltMode", int /* int */, [
	HDC, /* in HDC hdc  */
	int, /* in int mode */
], f => SetStretchBltMode = f);

export function SetSystemPaletteUse () {};
SetSystemPaletteUse = createAutoLoader(lib, "SetSystemPaletteUse", UINT /* UINT */, [
	HDC,  /* in HDC  hdc */
	UINT, /* in UINT use */
], f => SetSystemPaletteUse = f);

export function SetTextCharacterExtra () {};
SetTextCharacterExtra = createAutoLoader(lib, "SetTextCharacterExtra", int /* int */, [
	HDC, /* in HDC hdc   */
	int, /* in int extra */
], f => SetTextCharacterExtra = f);

export function SetTextColor () {};
SetTextColor = createAutoLoader(lib, "SetTextColor", COLORREF /* COLORREF */, [
	HDC,      /* in HDC      hdc   */
	COLORREF, /* in COLORREF color */
], f => SetTextColor = f);

export function SetTextAlign () {};
SetTextAlign = createAutoLoader(lib, "SetTextAlign", UINT /* UINT */, [
	HDC,  /* in HDC  hdc   */
	UINT, /* in UINT align */
], f => SetTextAlign = f);

export function SetTextJustification () {};
SetTextJustification = createAutoLoader(lib, "SetTextJustification", BOOL /* BOOL */, [
	HDC, /* in HDC hdc   */
	int, /* in int extra */
	int, /* in int count */
], f => SetTextJustification = f);

export function UpdateColors () {};
UpdateColors = createAutoLoader(lib, "UpdateColors", BOOL /* BOOL */, [
	HDC, /* in HDC hdc */
], f => UpdateColors = f);

export function GdiRegisterDdraw () {};
GdiRegisterDdraw = createAutoLoader(lib, "GdiRegisterDdraw", BOOL /* BOOL */, [
	PGDIREGISTERDDRAWPACKET,     /* in  PGDIREGISTERDDRAWPACKET pPacket      */
	out(pointer(GDIMARSHALLOC)), /* out GDIMARSHALLOC *         ppfnGdiAlloc */
], f => GdiRegisterDdraw = f);

export function GdiMarshalSize () {};
GdiMarshalSize = createAutoLoader(lib, "GdiMarshalSize", ULONG /* ULONG */, [
	/* void */
], f => GdiMarshalSize = f);

export function GdiMarshal () {};
GdiMarshal = createAutoLoader(lib, "GdiMarshal", VOID /* VOID */, [
	DWORD,        /*        DWORD   dwProcessIdTo */
	HGDIOBJ,      /* in     HGDIOBJ hGdiObj       */
	inout(PVOID), /* in out PVOID   pData         */
	ULONG,        /*        ULONG   ulFlags       */
], f => GdiMarshal = f);

export function GdiUnmarshal () {};
GdiUnmarshal = createAutoLoader(lib, "GdiUnmarshal", HGDIOBJ /* HGDIOBJ */, [
	PVOID, /* in PVOID pData   */
	ULONG, /*    ULONG ulFlags */
], f => GdiUnmarshal = f);

export function AlphaBlend () {};
AlphaBlend = createAutoLoader(lib, "AlphaBlend", BOOL /* BOOL */, [
	HDC,           /* in HDC           hdcDest     */
	int,           /* in int           xoriginDest */
	int,           /* in int           yoriginDest */
	int,           /* in int           wDest       */
	int,           /* in int           hDest       */
	HDC,           /* in HDC           hdcSrc      */
	int,           /* in int           xoriginSrc  */
	int,           /* in int           yoriginSrc  */
	int,           /* in int           wSrc        */
	int,           /* in int           hSrc        */
	BLENDFUNCTION, /* in BLENDFUNCTION ftn         */
], f => AlphaBlend = f);

export function TransparentBlt () {};
TransparentBlt = createAutoLoader(lib, "TransparentBlt", BOOL /* BOOL */, [
	HDC,  /* in HDC  hdcDest       */
	int,  /* in int  xoriginDest   */
	int,  /* in int  yoriginDest   */
	int,  /* in int  wDest         */
	int,  /* in int  hDest         */
	HDC,  /* in HDC  hdcSrc        */
	int,  /* in int  xoriginSrc    */
	int,  /* in int  yoriginSrc    */
	int,  /* in int  wSrc          */
	int,  /* in int  hSrc          */
	UINT, /* in UINT crTransparent */
], f => TransparentBlt = f);

export function GradientFill () {};
GradientFill = createAutoLoader(lib, "GradientFill", BOOL /* BOOL */, [
	HDC,        /* in HDC        hdc     */
	PTRIVERTEX, /*    PTRIVERTEX pVertex */
	ULONG,      /* in ULONG      nVertex */
	PVOID,      /* in PVOID      pMesh   */
	ULONG,      /* in ULONG      nMesh   */
	ULONG,      /* in ULONG      ulMode  */
], f => GradientFill = f);

export function GdiAlphaBlend () {};
GdiAlphaBlend = createAutoLoader(lib, "GdiAlphaBlend", BOOL /* BOOL */, [
	HDC,           /* in HDC           hdcDest     */
	int,           /* in int           xoriginDest */
	int,           /* in int           yoriginDest */
	int,           /* in int           wDest       */
	int,           /* in int           hDest       */
	HDC,           /* in HDC           hdcSrc      */
	int,           /* in int           xoriginSrc  */
	int,           /* in int           yoriginSrc  */
	int,           /* in int           wSrc        */
	int,           /* in int           hSrc        */
	BLENDFUNCTION, /* in BLENDFUNCTION ftn         */
], f => GdiAlphaBlend = f);

export function GdiTransparentBlt () {};
GdiTransparentBlt = createAutoLoader(lib, "GdiTransparentBlt", BOOL /* BOOL */, [
	HDC,  /* in HDC  hdcDest       */
	int,  /* in int  xoriginDest   */
	int,  /* in int  yoriginDest   */
	int,  /* in int  wDest         */
	int,  /* in int  hDest         */
	HDC,  /* in HDC  hdcSrc        */
	int,  /* in int  xoriginSrc    */
	int,  /* in int  yoriginSrc    */
	int,  /* in int  wSrc          */
	int,  /* in int  hSrc          */
	UINT, /* in UINT crTransparent */
], f => GdiTransparentBlt = f);

export function GdiGradientFill () {};
GdiGradientFill = createAutoLoader(lib, "GdiGradientFill", BOOL /* BOOL */, [
	HDC,        /* in HDC        hdc     */
	PTRIVERTEX, /*    PTRIVERTEX pVertex */
	ULONG,      /* in ULONG      nVertex */
	PVOID,      /* in PVOID      pMesh   */
	ULONG,      /* in ULONG      nCount  */
	ULONG,      /* in ULONG      ulMode  */
], f => GdiGradientFill = f);

export function PlayMetaFileRecord () {};
PlayMetaFileRecord = createAutoLoader(lib, "PlayMetaFileRecord", BOOL /* BOOL */, [
	HDC,           /* in HDC           hdc           */
	LPHANDLETABLE, /*    LPHANDLETABLE lpHandleTable */
	LPMETARECORD,  /* in LPMETARECORD  lpMR          */
	UINT,          /* in UINT          noObjs        */
], f => PlayMetaFileRecord = f);

export function EnumMetaFile () {};
EnumMetaFile = createAutoLoader(lib, "EnumMetaFile", BOOL /* BOOL */, [
	HDC,        /* in     HDC        hdc   */
	HMETAFILE,  /* in     HMETAFILE  hmf   */
	MFENUMPROC, /* in     MFENUMPROC proc  */
	LPARAM,     /* in opt LPARAM     param */
], f => EnumMetaFile = f);

export function CloseEnhMetaFile () {};
CloseEnhMetaFile = createAutoLoader(lib, "CloseEnhMetaFile", HENHMETAFILE /* HENHMETAFILE */, [
	HDC, /* in HDC hdc */
], f => CloseEnhMetaFile = f);

export function CopyEnhMetaFileA () {};
CopyEnhMetaFileA = createAutoLoader(lib, "CopyEnhMetaFileA", HENHMETAFILE /* HENHMETAFILE */, [
	HENHMETAFILE, /* in     HENHMETAFILE hEnh       */
	LPCSTR,       /* in opt LPCSTR       lpFileName */
], f => CopyEnhMetaFileA = f);

export function CopyEnhMetaFileW () {};
CopyEnhMetaFileW = createAutoLoader(lib, "CopyEnhMetaFileW", HENHMETAFILE /* HENHMETAFILE */, [
	HENHMETAFILE, /* in     HENHMETAFILE hEnh       */
	LPCWSTR,      /* in opt LPCWSTR      lpFileName */
], f => CopyEnhMetaFileW = f);
export {CopyEnhMetaFileW as CopyEnhMetaFile};

export function CreateEnhMetaFileA () {};
CreateEnhMetaFileA = createAutoLoader(lib, "CreateEnhMetaFileA", HDC /* HDC */, [
	HDC,           /* in opt HDC          hdc        */
	LPCSTR,        /* in opt LPCSTR       lpFilename */
	pointer(RECT), /* in opt CONST RECT * lprc       */
	LPCSTR,        /* in opt LPCSTR       lpDesc     */
], f => CreateEnhMetaFileA = f);

export function CreateEnhMetaFileW () {};
CreateEnhMetaFileW = createAutoLoader(lib, "CreateEnhMetaFileW", HDC /* HDC */, [
	HDC,           /* in opt HDC          hdc        */
	LPCWSTR,       /* in opt LPCWSTR      lpFilename */
	pointer(RECT), /* in opt CONST RECT * lprc       */
	LPCWSTR,       /* in opt LPCWSTR      lpDesc     */
], f => CreateEnhMetaFileW = f);
export {CreateEnhMetaFileW as CreateEnhMetaFile};

export function DeleteEnhMetaFile () {};
DeleteEnhMetaFile = createAutoLoader(lib, "DeleteEnhMetaFile", BOOL /* BOOL */, [
	HENHMETAFILE, /* in opt HENHMETAFILE hmf */
], f => DeleteEnhMetaFile = f);

export function EnumEnhMetaFile () {};
EnumEnhMetaFile = createAutoLoader(lib, "EnumEnhMetaFile", BOOL /* BOOL */, [
	HDC,           /* in opt HDC           hdc    */
	HENHMETAFILE,  /* in     HENHMETAFILE  hmf    */
	ENHMFENUMPROC, /* in     ENHMFENUMPROC proc   */
	LPVOID,        /* in opt LPVOID        param  */
	pointer(RECT), /* in opt CONST RECT *  lpRect */
], f => EnumEnhMetaFile = f);

export function GetEnhMetaFileA () {};
GetEnhMetaFileA = createAutoLoader(lib, "GetEnhMetaFileA", HENHMETAFILE /* HENHMETAFILE */, [
	LPCSTR, /* in LPCSTR lpName */
], f => GetEnhMetaFileA = f);

export function GetEnhMetaFileW () {};
GetEnhMetaFileW = createAutoLoader(lib, "GetEnhMetaFileW", HENHMETAFILE /* HENHMETAFILE */, [
	LPCWSTR, /* in LPCWSTR lpName */
], f => GetEnhMetaFileW = f);
export {GetEnhMetaFileW as GetEnhMetaFile};

export function GetEnhMetaFileBits () {};
GetEnhMetaFileBits = createAutoLoader(lib, "GetEnhMetaFileBits", UINT /* UINT */, [
	HENHMETAFILE, /* in HENHMETAFILE hEMF   */
	UINT,         /* in UINT         nSize  */
	LPBYTE,       /*    LPBYTE       lpData */
], f => GetEnhMetaFileBits = f);

export function GetEnhMetaFileDescriptionA () {};
GetEnhMetaFileDescriptionA = createAutoLoader(lib, "GetEnhMetaFileDescriptionA", UINT /* UINT */, [
	HENHMETAFILE, /* in HENHMETAFILE hemf          */
	UINT,         /* in UINT         cchBuffer     */
	LPSTR,        /*    LPSTR        lpDescription */
], f => GetEnhMetaFileDescriptionA = f);

export function GetEnhMetaFileDescriptionW () {};
GetEnhMetaFileDescriptionW = createAutoLoader(lib, "GetEnhMetaFileDescriptionW", UINT /* UINT */, [
	HENHMETAFILE, /* in HENHMETAFILE hemf          */
	UINT,         /* in UINT         cchBuffer     */
	LPWSTR,       /*    LPWSTR       lpDescription */
], f => GetEnhMetaFileDescriptionW = f);
export {GetEnhMetaFileDescriptionW as GetEnhMetaFileDescription};

export function GetEnhMetaFileHeader () {};
GetEnhMetaFileHeader = createAutoLoader(lib, "GetEnhMetaFileHeader", UINT /* UINT */, [
	HENHMETAFILE,    /* in HENHMETAFILE    hemf            */
	UINT,            /* in UINT            nSize           */
	LPENHMETAHEADER, /*    LPENHMETAHEADER lpEnhMetaHeader */
], f => GetEnhMetaFileHeader = f);

export function GetEnhMetaFilePaletteEntries () {};
GetEnhMetaFilePaletteEntries = createAutoLoader(lib, "GetEnhMetaFilePaletteEntries", UINT /* UINT */, [
	HENHMETAFILE,   /* in HENHMETAFILE   hemf             */
	UINT,           /* in UINT           nNumEntries      */
	LPPALETTEENTRY, /*    LPPALETTEENTRY lpPaletteEntries */
], f => GetEnhMetaFilePaletteEntries = f);

export function GetEnhMetaFilePixelFormat () {};
GetEnhMetaFilePixelFormat = createAutoLoader(lib, "GetEnhMetaFilePixelFormat", UINT /* UINT */, [
	HENHMETAFILE,                   /* in HENHMETAFILE            hemf     */
	UINT,                           /* in UINT                    cbBuffer */
	pointer(PIXELFORMATDESCRIPTOR), /*    PIXELFORMATDESCRIPTOR * ppfd     */
], f => GetEnhMetaFilePixelFormat = f);

export function GetWinMetaFileBits () {};
GetWinMetaFileBits = createAutoLoader(lib, "GetWinMetaFileBits", UINT /* UINT */, [
	HENHMETAFILE, /* in HENHMETAFILE hemf     */
	UINT,         /* in UINT         cbData16 */
	LPBYTE,       /*    LPBYTE       pData16  */
	INT,          /* in INT          iMapMode */
	HDC,          /* in HDC          hdcRef   */
], f => GetWinMetaFileBits = f);

export function PlayEnhMetaFile () {};
PlayEnhMetaFile = createAutoLoader(lib, "PlayEnhMetaFile", BOOL /* BOOL */, [
	HDC,           /* in HDC          hdc    */
	HENHMETAFILE,  /* in HENHMETAFILE hmf    */
	pointer(RECT), /* in CONST RECT * lprect */
], f => PlayEnhMetaFile = f);

export function PlayEnhMetaFileRecord () {};
PlayEnhMetaFileRecord = createAutoLoader(lib, "PlayEnhMetaFileRecord", BOOL /* BOOL */, [
	HDC,                    /* in HDC                   hdc */
	LPHANDLETABLE,          /*    LPHANDLETABLE         pht */
	pointer(ENHMETARECORD), /* in CONST ENHMETARECORD * pmr */
	UINT,                   /* in UINT                  cht */
], f => PlayEnhMetaFileRecord = f);

export function SetEnhMetaFileBits () {};
SetEnhMetaFileBits = createAutoLoader(lib, "SetEnhMetaFileBits", HENHMETAFILE /* HENHMETAFILE */, [
	UINT,          /* in UINT         nSize */
	pointer(BYTE), /*    CONST BYTE * pb    */
], f => SetEnhMetaFileBits = f);

export function SetWinMetaFileBits () {};
SetWinMetaFileBits = createAutoLoader(lib, "SetWinMetaFileBits", HENHMETAFILE /* HENHMETAFILE */, [
	UINT,                  /* in     UINT                 nSize        */
	pointer(BYTE),         /*        CONST BYTE *         lpMeta16Data */
	HDC,                   /* in opt HDC                  hdcRef       */
	pointer(METAFILEPICT), /* in opt CONST METAFILEPICT * lpMFP        */
], f => SetWinMetaFileBits = f);

export function GdiComment () {};
GdiComment = createAutoLoader(lib, "GdiComment", BOOL /* BOOL */, [
	HDC,           /* in HDC          hdc    */
	UINT,          /* in UINT         nSize  */
	pointer(BYTE), /*    CONST BYTE * lpData */
], f => GdiComment = f);

export function GetTextMetricsA () {};
GetTextMetricsA = createAutoLoader(lib, "GetTextMetricsA", BOOL /* BOOL */, [
	HDC,                /* in  HDC           hdc  */
	out(LPTEXTMETRICA), /* out LPTEXTMETRICA lptm */
], f => GetTextMetricsA = f);

export function GetTextMetricsW () {};
GetTextMetricsW = createAutoLoader(lib, "GetTextMetricsW", BOOL /* BOOL */, [
	HDC,                /* in  HDC           hdc  */
	out(LPTEXTMETRICW), /* out LPTEXTMETRICW lptm */
], f => GetTextMetricsW = f);
export {GetTextMetricsW as GetTextMetrics};

export function AngleArc () {};
AngleArc = createAutoLoader(lib, "AngleArc", BOOL /* BOOL */, [
	HDC,   /* in HDC   hdc        */
	int,   /* in int   x          */
	int,   /* in int   y          */
	DWORD, /* in DWORD r          */
	FLOAT, /* in FLOAT StartAngle */
	FLOAT, /* in FLOAT SweepAngle */
], f => AngleArc = f);

export function PolyPolyline () {};
PolyPolyline = createAutoLoader(lib, "PolyPolyline", BOOL /* BOOL */, [
	HDC,            /* in HDC           hdc */
	pointer(POINT), /* in CONST POINT * apt */
	pointer(DWORD), /*    CONST DWORD * asz */
	DWORD,          /* in DWORD         csz */
], f => PolyPolyline = f);

export function GetWorldTransform () {};
GetWorldTransform = createAutoLoader(lib, "GetWorldTransform", BOOL /* BOOL */, [
	HDC,          /* in  HDC     hdc  */
	out(LPXFORM), /* out LPXFORM lpxf */
], f => GetWorldTransform = f);

export function SetWorldTransform () {};
SetWorldTransform = createAutoLoader(lib, "SetWorldTransform", BOOL /* BOOL */, [
	HDC,            /* in HDC           hdc  */
	pointer(XFORM), /* in CONST XFORM * lpxf */
], f => SetWorldTransform = f);

export function ModifyWorldTransform () {};
ModifyWorldTransform = createAutoLoader(lib, "ModifyWorldTransform", BOOL /* BOOL */, [
	HDC,            /* in     HDC           hdc  */
	pointer(XFORM), /* in opt CONST XFORM * lpxf */
	DWORD,          /* in     DWORD         mode */
], f => ModifyWorldTransform = f);

export function CombineTransform () {};
CombineTransform = createAutoLoader(lib, "CombineTransform", BOOL /* BOOL */, [
	out(LPXFORM),   /* out LPXFORM       lpxfOut */
	pointer(XFORM), /* in  CONST XFORM * lpxf1   */
	pointer(XFORM), /* in  CONST XFORM * lpxf2   */
], f => CombineTransform = f);

export function SetDIBColorTable () {};
SetDIBColorTable = createAutoLoader(lib, "SetDIBColorTable", UINT /* UINT */, [
	HDC,              /* in HDC             hdc      */
	UINT,             /* in UINT            iStart   */
	UINT,             /* in UINT            cEntries */
	pointer(RGBQUAD), /*    CONST RGBQUAD * prgbq    */
], f => SetDIBColorTable = f);

export function SetColorAdjustment () {};
SetColorAdjustment = createAutoLoader(lib, "SetColorAdjustment", BOOL /* BOOL */, [
	HDC,                      /* in HDC                     hdc  */
	pointer(COLORADJUSTMENT), /* in CONST COLORADJUSTMENT * lpca */
], f => SetColorAdjustment = f);

export function GetColorAdjustment () {};
GetColorAdjustment = createAutoLoader(lib, "GetColorAdjustment", BOOL /* BOOL */, [
	HDC,                    /* in  HDC               hdc  */
	out(LPCOLORADJUSTMENT), /* out LPCOLORADJUSTMENT lpca */
], f => GetColorAdjustment = f);

export function CreateHalftonePalette () {};
CreateHalftonePalette = createAutoLoader(lib, "CreateHalftonePalette", HPALETTE /* HPALETTE */, [
	HDC, /* in opt HDC hdc */
], f => CreateHalftonePalette = f);

export function StartDocA () {};
StartDocA = createAutoLoader(lib, "StartDocA", int /* int */, [
	HDC,               /* in HDC              hdc  */
	pointer(DOCINFOA), /* in CONST DOCINFOA * lpdi */
], f => StartDocA = f);

export function StartDocW () {};
StartDocW = createAutoLoader(lib, "StartDocW", int /* int */, [
	HDC,               /* in HDC              hdc  */
	pointer(DOCINFOW), /* in CONST DOCINFOW * lpdi */
], f => StartDocW = f);
export {StartDocW as StartDoc};

export function EndDoc () {};
EndDoc = createAutoLoader(lib, "EndDoc", int /* int */, [
	HDC, /* in HDC hdc */
], f => EndDoc = f);

export function StartPage () {};
StartPage = createAutoLoader(lib, "StartPage", int /* int */, [
	HDC, /* in HDC hdc */
], f => StartPage = f);

export function EndPage () {};
EndPage = createAutoLoader(lib, "EndPage", int /* int */, [
	HDC, /* in HDC hdc */
], f => EndPage = f);

export function AbortDoc () {};
AbortDoc = createAutoLoader(lib, "AbortDoc", int /* int */, [
	HDC, /* in HDC hdc */
], f => AbortDoc = f);

export function SetAbortProc () {};
SetAbortProc = createAutoLoader(lib, "SetAbortProc", int /* int */, [
	HDC,       /* in HDC       hdc  */
	ABORTPROC, /* in ABORTPROC proc */
], f => SetAbortProc = f);

export function AbortPath () {};
AbortPath = createAutoLoader(lib, "AbortPath", BOOL /* BOOL */, [
	HDC, /* in HDC hdc */
], f => AbortPath = f);

export function ArcTo () {};
ArcTo = createAutoLoader(lib, "ArcTo", BOOL /* BOOL */, [
	HDC, /* in HDC hdc    */
	int, /* in int left   */
	int, /* in int top    */
	int, /* in int right  */
	int, /* in int bottom */
	int, /* in int xr1    */
	int, /* in int yr1    */
	int, /* in int xr2    */
	int, /* in int yr2    */
], f => ArcTo = f);

export function BeginPath () {};
BeginPath = createAutoLoader(lib, "BeginPath", BOOL /* BOOL */, [
	HDC, /* in HDC hdc */
], f => BeginPath = f);

export function CloseFigure () {};
CloseFigure = createAutoLoader(lib, "CloseFigure", BOOL /* BOOL */, [
	HDC, /* in HDC hdc */
], f => CloseFigure = f);

export function EndPath () {};
EndPath = createAutoLoader(lib, "EndPath", BOOL /* BOOL */, [
	HDC, /* in HDC hdc */
], f => EndPath = f);

export function FillPath () {};
FillPath = createAutoLoader(lib, "FillPath", BOOL /* BOOL */, [
	HDC, /* in HDC hdc */
], f => FillPath = f);

export function FlattenPath () {};
FlattenPath = createAutoLoader(lib, "FlattenPath", BOOL /* BOOL */, [
	HDC, /* in HDC hdc */
], f => FlattenPath = f);

export function GetPath () {};
GetPath = createAutoLoader(lib, "GetPath", int /* int */, [
	HDC,     /* in HDC     hdc */
	LPPOINT, /*    LPPOINT apt */
	LPBYTE,  /*    LPBYTE  aj  */
	int,     /*    int     cpt */
], f => GetPath = f);

export function PathToRegion () {};
PathToRegion = createAutoLoader(lib, "PathToRegion", HRGN /* HRGN */, [
	HDC, /* in HDC hdc */
], f => PathToRegion = f);

export function PolyDraw () {};
PolyDraw = createAutoLoader(lib, "PolyDraw", BOOL /* BOOL */, [
	HDC,            /* in HDC           hdc */
	pointer(POINT), /*    CONST POINT * apt */
	pointer(BYTE),  /*    CONST BYTE *  aj  */
	int,            /* in int           cpt */
], f => PolyDraw = f);

export function SelectClipPath () {};
SelectClipPath = createAutoLoader(lib, "SelectClipPath", BOOL /* BOOL */, [
	HDC, /* in HDC hdc  */
	int, /* in int mode */
], f => SelectClipPath = f);

export function SetArcDirection () {};
SetArcDirection = createAutoLoader(lib, "SetArcDirection", int /* int */, [
	HDC, /* in HDC hdc */
	int, /* in int dir */
], f => SetArcDirection = f);

export function SetMiterLimit () {};
SetMiterLimit = createAutoLoader(lib, "SetMiterLimit", BOOL /* BOOL */, [
	HDC,         /* in      HDC    hdc   */
	FLOAT,       /* in      FLOAT  limit */
	out(PFLOAT), /* out opt PFLOAT old   */
], f => SetMiterLimit = f);

export function StrokeAndFillPath () {};
StrokeAndFillPath = createAutoLoader(lib, "StrokeAndFillPath", BOOL /* BOOL */, [
	HDC, /* in HDC hdc */
], f => StrokeAndFillPath = f);

export function StrokePath () {};
StrokePath = createAutoLoader(lib, "StrokePath", BOOL /* BOOL */, [
	HDC, /* in HDC hdc */
], f => StrokePath = f);

export function WidenPath () {};
WidenPath = createAutoLoader(lib, "WidenPath", BOOL /* BOOL */, [
	HDC, /* in HDC hdc */
], f => WidenPath = f);

export function GetMiterLimit () {};
GetMiterLimit = createAutoLoader(lib, "GetMiterLimit", BOOL /* BOOL */, [
	HDC,         /* in  HDC    hdc    */
	out(PFLOAT), /* out PFLOAT plimit */
], f => GetMiterLimit = f);

export function GetArcDirection () {};
GetArcDirection = createAutoLoader(lib, "GetArcDirection", int /* int */, [
	HDC, /* in HDC hdc */
], f => GetArcDirection = f);

export function GetObjectA () {};
GetObjectA = createAutoLoader(lib, "GetObjectA", int /* int */, [
	HANDLE, /* in HANDLE h  */
	int,    /* in int    c  */
	LPVOID, /*    LPVOID pv */
], f => GetObjectA = f);

export function GetObjectW () {};
GetObjectW = createAutoLoader(lib, "GetObjectW", int /* int */, [
	HANDLE, /* in HANDLE h  */
	int,    /* in int    c  */
	LPVOID, /*    LPVOID pv */
], f => GetObjectW = f);
export {GetObjectW as GetObject};

export function MoveToEx () {};
MoveToEx = createAutoLoader(lib, "MoveToEx", BOOL /* BOOL */, [
	HDC,          /* in      HDC     hdc  */
	int,          /* in      int     x    */
	int,          /* in      int     y    */
	out(LPPOINT), /* out opt LPPOINT lppt */
], f => MoveToEx = f);

export function TextOutA () {};
TextOutA = createAutoLoader(lib, "TextOutA", BOOL /* BOOL */, [
	HDC,    /* in HDC    hdc      */
	int,    /* in int    x        */
	int,    /* in int    y        */
	LPCSTR, /*    LPCSTR lpString */
	int,    /* in int    c        */
], f => TextOutA = f);

export function TextOutW () {};
TextOutW = createAutoLoader(lib, "TextOutW", BOOL /* BOOL */, [
	HDC,     /* in HDC     hdc      */
	int,     /* in int     x        */
	int,     /* in int     y        */
	LPCWSTR, /*    LPCWSTR lpString */
	int,     /* in int     c        */
], f => TextOutW = f);
export {TextOutW as TextOut};

export function PolyTextOutA () {};
PolyTextOutA = createAutoLoader(lib, "PolyTextOutA", BOOL /* BOOL */, [
	HDC,                /* in HDC               hdc      */
	pointer(POLYTEXTA), /*    CONST POLYTEXTA * ppt      */
	int,                /* in int               nstrings */
], f => PolyTextOutA = f);

export function PolyTextOutW () {};
PolyTextOutW = createAutoLoader(lib, "PolyTextOutW", BOOL /* BOOL */, [
	HDC,                /* in HDC               hdc      */
	pointer(POLYTEXTW), /*    CONST POLYTEXTW * ppt      */
	int,                /* in int               nstrings */
], f => PolyTextOutW = f);
export {PolyTextOutW as PolyTextOut};

export function CreatePolygonRgn () {};
CreatePolygonRgn = createAutoLoader(lib, "CreatePolygonRgn", HRGN /* HRGN */, [
	pointer(POINT), /*    CONST POINT * pptl   */
	int,            /* in int           cPoint */
	int,            /* in int           iMode  */
], f => CreatePolygonRgn = f);

export function Polygon () {};
Polygon = createAutoLoader(lib, "Polygon", BOOL /* BOOL */, [
	HDC,            /* in HDC           hdc */
	pointer(POINT), /*    CONST POINT * apt */
	int,            /* in int           cpt */
], f => Polygon = f);

export function Polyline () {};
Polyline = createAutoLoader(lib, "Polyline", BOOL /* BOOL */, [
	HDC,            /* in HDC           hdc */
	pointer(POINT), /*    CONST POINT * apt */
	int,            /* in int           cpt */
], f => Polyline = f);

export function PolyBezier () {};
PolyBezier = createAutoLoader(lib, "PolyBezier", BOOL /* BOOL */, [
	HDC,            /* in HDC           hdc */
	pointer(POINT), /*    CONST POINT * apt */
	DWORD,          /* in DWORD         cpt */
], f => PolyBezier = f);

export function PolyBezierTo () {};
PolyBezierTo = createAutoLoader(lib, "PolyBezierTo", BOOL /* BOOL */, [
	HDC,            /* in HDC           hdc */
	pointer(POINT), /*    CONST POINT * apt */
	DWORD,          /* in DWORD         cpt */
], f => PolyBezierTo = f);

export function PolylineTo () {};
PolylineTo = createAutoLoader(lib, "PolylineTo", BOOL /* BOOL */, [
	HDC,            /* in HDC           hdc */
	pointer(POINT), /*    CONST POINT * apt */
	DWORD,          /* in DWORD         cpt */
], f => PolylineTo = f);

export function SetViewportExtEx () {};
SetViewportExtEx = createAutoLoader(lib, "SetViewportExtEx", BOOL /* BOOL */, [
	HDC,         /* in      HDC    hdc  */
	int,         /* in      int    x    */
	int,         /* in      int    y    */
	out(LPSIZE), /* out opt LPSIZE lpsz */
], f => SetViewportExtEx = f);

export function SetViewportOrgEx () {};
SetViewportOrgEx = createAutoLoader(lib, "SetViewportOrgEx", BOOL /* BOOL */, [
	HDC,          /* in      HDC     hdc  */
	int,          /* in      int     x    */
	int,          /* in      int     y    */
	out(LPPOINT), /* out opt LPPOINT lppt */
], f => SetViewportOrgEx = f);

export function SetWindowExtEx () {};
SetWindowExtEx = createAutoLoader(lib, "SetWindowExtEx", BOOL /* BOOL */, [
	HDC,         /* in      HDC    hdc  */
	int,         /* in      int    x    */
	int,         /* in      int    y    */
	out(LPSIZE), /* out opt LPSIZE lpsz */
], f => SetWindowExtEx = f);

export function SetWindowOrgEx () {};
SetWindowOrgEx = createAutoLoader(lib, "SetWindowOrgEx", BOOL /* BOOL */, [
	HDC,          /* in      HDC     hdc  */
	int,          /* in      int     x    */
	int,          /* in      int     y    */
	out(LPPOINT), /* out opt LPPOINT lppt */
], f => SetWindowOrgEx = f);

export function OffsetViewportOrgEx () {};
OffsetViewportOrgEx = createAutoLoader(lib, "OffsetViewportOrgEx", BOOL /* BOOL */, [
	HDC,          /* in      HDC     hdc  */
	int,          /* in      int     x    */
	int,          /* in      int     y    */
	out(LPPOINT), /* out opt LPPOINT lppt */
], f => OffsetViewportOrgEx = f);

export function OffsetWindowOrgEx () {};
OffsetWindowOrgEx = createAutoLoader(lib, "OffsetWindowOrgEx", BOOL /* BOOL */, [
	HDC,          /* in      HDC     hdc  */
	int,          /* in      int     x    */
	int,          /* in      int     y    */
	out(LPPOINT), /* out opt LPPOINT lppt */
], f => OffsetWindowOrgEx = f);

export function ScaleViewportExtEx () {};
ScaleViewportExtEx = createAutoLoader(lib, "ScaleViewportExtEx", BOOL /* BOOL */, [
	HDC,         /* in      HDC    hdc  */
	int,         /* in      int    xn   */
	int,         /* in      int    dx   */
	int,         /* in      int    yn   */
	int,         /* in      int    yd   */
	out(LPSIZE), /* out opt LPSIZE lpsz */
], f => ScaleViewportExtEx = f);

export function ScaleWindowExtEx () {};
ScaleWindowExtEx = createAutoLoader(lib, "ScaleWindowExtEx", BOOL /* BOOL */, [
	HDC,         /* in      HDC    hdc  */
	int,         /* in      int    xn   */
	int,         /* in      int    xd   */
	int,         /* in      int    yn   */
	int,         /* in      int    yd   */
	out(LPSIZE), /* out opt LPSIZE lpsz */
], f => ScaleWindowExtEx = f);

export function SetBitmapDimensionEx () {};
SetBitmapDimensionEx = createAutoLoader(lib, "SetBitmapDimensionEx", BOOL /* BOOL */, [
	HBITMAP,     /* in      HBITMAP hbm  */
	int,         /* in      int     w    */
	int,         /* in      int     h    */
	out(LPSIZE), /* out opt LPSIZE  lpsz */
], f => SetBitmapDimensionEx = f);

export function SetBrushOrgEx () {};
SetBrushOrgEx = createAutoLoader(lib, "SetBrushOrgEx", BOOL /* BOOL */, [
	HDC,          /* in      HDC     hdc  */
	int,          /* in      int     x    */
	int,          /* in      int     y    */
	out(LPPOINT), /* out opt LPPOINT lppt */
], f => SetBrushOrgEx = f);

export function GetTextFaceA () {};
GetTextFaceA = createAutoLoader(lib, "GetTextFaceA", int /* int */, [
	HDC,   /* in HDC   hdc    */
	int,   /* in int   c      */
	LPSTR, /*    LPSTR lpName */
], f => GetTextFaceA = f);

export function GetTextFaceW () {};
GetTextFaceW = createAutoLoader(lib, "GetTextFaceW", int /* int */, [
	HDC,    /* in HDC    hdc    */
	int,    /* in int    c      */
	LPWSTR, /*    LPWSTR lpName */
], f => GetTextFaceW = f);
export {GetTextFaceW as GetTextFace};

export function GetKerningPairsA () {};
GetKerningPairsA = createAutoLoader(lib, "GetKerningPairsA", DWORD /* DWORD */, [
	HDC,           /* in HDC           hdc        */
	DWORD,         /* in DWORD         nPairs     */
	LPKERNINGPAIR, /*    LPKERNINGPAIR lpKernPair */
], f => GetKerningPairsA = f);

export function GetKerningPairsW () {};
GetKerningPairsW = createAutoLoader(lib, "GetKerningPairsW", DWORD /* DWORD */, [
	HDC,           /* in HDC           hdc        */
	DWORD,         /* in DWORD         nPairs     */
	LPKERNINGPAIR, /*    LPKERNINGPAIR lpKernPair */
], f => GetKerningPairsW = f);
export {GetKerningPairsW as GetKerningPairs};

export function GetDCOrgEx () {};
GetDCOrgEx = createAutoLoader(lib, "GetDCOrgEx", BOOL /* BOOL */, [
	HDC,          /* in  HDC     hdc  */
	out(LPPOINT), /* out LPPOINT lppt */
], f => GetDCOrgEx = f);

export function FixBrushOrgEx () {};
FixBrushOrgEx = createAutoLoader(lib, "FixBrushOrgEx", BOOL /* BOOL */, [
	HDC,     /* in     HDC     hdc */
	int,     /* in     int     x   */
	int,     /* in     int     y   */
	LPPOINT, /* in opt LPPOINT ptl */
], f => FixBrushOrgEx = f);

export function UnrealizeObject () {};
UnrealizeObject = createAutoLoader(lib, "UnrealizeObject", BOOL /* BOOL */, [
	HGDIOBJ, /* in HGDIOBJ h */
], f => UnrealizeObject = f);

export function GdiFlush () {};
GdiFlush = createAutoLoader(lib, "GdiFlush", BOOL /* BOOL */, [
	/* void */
], f => GdiFlush = f);

export function GdiSetBatchLimit () {};
GdiSetBatchLimit = createAutoLoader(lib, "GdiSetBatchLimit", DWORD /* DWORD */, [
	DWORD, /* in DWORD dw */
], f => GdiSetBatchLimit = f);

export function GdiGetBatchLimit () {};
GdiGetBatchLimit = createAutoLoader(lib, "GdiGetBatchLimit", DWORD /* DWORD */, [
	/* void */
], f => GdiGetBatchLimit = f);

export function SetICMMode () {};
SetICMMode = createAutoLoader(lib, "SetICMMode", int /* int */, [
	HDC, /* in HDC hdc  */
	int, /* in int mode */
], f => SetICMMode = f);

export function CheckColorsInGamut () {};
CheckColorsInGamut = createAutoLoader(lib, "CheckColorsInGamut", BOOL /* BOOL */, [
	HDC,         /* in HDC         hdc         */
	LPRGBTRIPLE, /*    LPRGBTRIPLE lpRGBTriple */
	LPVOID,      /*    LPVOID      dlpBuffer   */
	DWORD,       /* in DWORD       nCount      */
], f => CheckColorsInGamut = f);

export function GetColorSpace () {};
GetColorSpace = createAutoLoader(lib, "GetColorSpace", HCOLORSPACE /* HCOLORSPACE */, [
	HDC, /* in HDC hdc */
], f => GetColorSpace = f);

export function GetLogColorSpaceA () {};
GetLogColorSpaceA = createAutoLoader(lib, "GetLogColorSpaceA", BOOL /* BOOL */, [
	HCOLORSPACE,      /* in HCOLORSPACE      hColorSpace */
	LPLOGCOLORSPACEA, /*    LPLOGCOLORSPACEA lpBuffer    */
	DWORD,            /* in DWORD            nSize       */
], f => GetLogColorSpaceA = f);

export function GetLogColorSpaceW () {};
GetLogColorSpaceW = createAutoLoader(lib, "GetLogColorSpaceW", BOOL /* BOOL */, [
	HCOLORSPACE,      /* in HCOLORSPACE      hColorSpace */
	LPLOGCOLORSPACEW, /*    LPLOGCOLORSPACEW lpBuffer    */
	DWORD,            /* in DWORD            nSize       */
], f => GetLogColorSpaceW = f);
export {GetLogColorSpaceW as GetLogColorSpace};

export function CreateColorSpaceA () {};
CreateColorSpaceA = createAutoLoader(lib, "CreateColorSpaceA", HCOLORSPACE /* HCOLORSPACE */, [
	LPLOGCOLORSPACEA, /* in LPLOGCOLORSPACEA lplcs */
], f => CreateColorSpaceA = f);

export function CreateColorSpaceW () {};
CreateColorSpaceW = createAutoLoader(lib, "CreateColorSpaceW", HCOLORSPACE /* HCOLORSPACE */, [
	LPLOGCOLORSPACEW, /* in LPLOGCOLORSPACEW lplcs */
], f => CreateColorSpaceW = f);
export {CreateColorSpaceW as CreateColorSpace};

export function SetColorSpace () {};
SetColorSpace = createAutoLoader(lib, "SetColorSpace", HCOLORSPACE /* HCOLORSPACE */, [
	HDC,         /* in HDC         hdc */
	HCOLORSPACE, /* in HCOLORSPACE hcs */
], f => SetColorSpace = f);

export function DeleteColorSpace () {};
DeleteColorSpace = createAutoLoader(lib, "DeleteColorSpace", BOOL /* BOOL */, [
	HCOLORSPACE, /* in HCOLORSPACE hcs */
], f => DeleteColorSpace = f);

export function GetICMProfileA () {};
GetICMProfileA = createAutoLoader(lib, "GetICMProfileA", BOOL /* BOOL */, [
	HDC,            /* in     HDC     hdc         */
	inout(LPDWORD), /* in out LPDWORD pBufSize    */
	LPSTR,          /*        LPSTR   pszFilename */
], f => GetICMProfileA = f);

export function GetICMProfileW () {};
GetICMProfileW = createAutoLoader(lib, "GetICMProfileW", BOOL /* BOOL */, [
	HDC,            /* in     HDC     hdc         */
	inout(LPDWORD), /* in out LPDWORD pBufSize    */
	LPWSTR,         /*        LPWSTR  pszFilename */
], f => GetICMProfileW = f);
export {GetICMProfileW as GetICMProfile};

export function SetICMProfileA () {};
SetICMProfileA = createAutoLoader(lib, "SetICMProfileA", BOOL /* BOOL */, [
	HDC,   /* in HDC   hdc        */
	LPSTR, /* in LPSTR lpFileName */
], f => SetICMProfileA = f);

export function SetICMProfileW () {};
SetICMProfileW = createAutoLoader(lib, "SetICMProfileW", BOOL /* BOOL */, [
	HDC,    /* in HDC    hdc        */
	LPWSTR, /* in LPWSTR lpFileName */
], f => SetICMProfileW = f);
export {SetICMProfileW as SetICMProfile};

export function GetDeviceGammaRamp () {};
GetDeviceGammaRamp = createAutoLoader(lib, "GetDeviceGammaRamp", BOOL /* BOOL */, [
	HDC,    /* in HDC    hdc    */
	LPVOID, /*    LPVOID lpRamp */
], f => GetDeviceGammaRamp = f);

export function SetDeviceGammaRamp () {};
SetDeviceGammaRamp = createAutoLoader(lib, "SetDeviceGammaRamp", BOOL /* BOOL */, [
	HDC,    /* in HDC    hdc    */
	LPVOID, /*    LPVOID lpRamp */
], f => SetDeviceGammaRamp = f);

export function ColorMatchToTarget () {};
ColorMatchToTarget = createAutoLoader(lib, "ColorMatchToTarget", BOOL /* BOOL */, [
	HDC,   /* in HDC   hdc       */
	HDC,   /* in HDC   hdcTarget */
	DWORD, /* in DWORD action    */
], f => ColorMatchToTarget = f);

export function EnumICMProfilesA () {};
EnumICMProfilesA = createAutoLoader(lib, "EnumICMProfilesA", int /* int */, [
	HDC,          /* in     HDC          hdc   */
	ICMENUMPROCA, /* in     ICMENUMPROCA proc  */
	LPARAM,       /* in opt LPARAM       param */
], f => EnumICMProfilesA = f);

export function EnumICMProfilesW () {};
EnumICMProfilesW = createAutoLoader(lib, "EnumICMProfilesW", int /* int */, [
	HDC,          /* in     HDC          hdc   */
	ICMENUMPROCW, /* in     ICMENUMPROCW proc  */
	LPARAM,       /* in opt LPARAM       param */
], f => EnumICMProfilesW = f);
export {EnumICMProfilesW as EnumICMProfiles};

export function UpdateICMRegKeyA () {};
UpdateICMRegKeyA = createAutoLoader(lib, "UpdateICMRegKeyA", BOOL /* BOOL */, [
	DWORD, /* reserved DWORD reserved     */
	LPSTR, /* in       LPSTR lpszCMID     */
	LPSTR, /* in       LPSTR lpszFileName */
	UINT,  /* in       UINT  command      */
], f => UpdateICMRegKeyA = f);

export function UpdateICMRegKeyW () {};
UpdateICMRegKeyW = createAutoLoader(lib, "UpdateICMRegKeyW", BOOL /* BOOL */, [
	DWORD,  /* reserved DWORD  reserved     */
	LPWSTR, /* in       LPWSTR lpszCMID     */
	LPWSTR, /* in       LPWSTR lpszFileName */
	UINT,   /* in       UINT   command      */
], f => UpdateICMRegKeyW = f);
export {UpdateICMRegKeyW as UpdateICMRegKey};

export function ColorCorrectPalette () {};
ColorCorrectPalette = createAutoLoader(lib, "ColorCorrectPalette", BOOL /* BOOL */, [
	HDC,      /* in HDC      hdc     */
	HPALETTE, /* in HPALETTE hPal    */
	DWORD,    /* in DWORD    deFirst */
	DWORD,    /* in DWORD    num     */
], f => ColorCorrectPalette = f);

export function wglCopyContext () {};
wglCopyContext = createAutoLoader(lib, "wglCopyContext", BOOL /* BOOL */, [
	HGLRC, /*  HGLRC  */
	HGLRC, /*  HGLRC  */
	UINT,  /*  UINT   */
], f => wglCopyContext = f);

export function wglCreateContext () {};
wglCreateContext = createAutoLoader(lib, "wglCreateContext", HGLRC /* HGLRC */, [
	HDC, /*  HDC  */
], f => wglCreateContext = f);

export function wglCreateLayerContext () {};
wglCreateLayerContext = createAutoLoader(lib, "wglCreateLayerContext", HGLRC /* HGLRC */, [
	HDC, /*  HDC  */
	int, /*  int  */
], f => wglCreateLayerContext = f);

export function wglDeleteContext () {};
wglDeleteContext = createAutoLoader(lib, "wglDeleteContext", BOOL /* BOOL */, [
	HGLRC, /*  HGLRC  */
], f => wglDeleteContext = f);

export function wglGetCurrentContext () {};
wglGetCurrentContext = createAutoLoader(lib, "wglGetCurrentContext", HGLRC /* HGLRC */, [
	/* void */
], f => wglGetCurrentContext = f);

export function wglGetCurrentDC () {};
wglGetCurrentDC = createAutoLoader(lib, "wglGetCurrentDC", HDC /* HDC */, [
	/* void */
], f => wglGetCurrentDC = f);

export function wglGetProcAddress () {};
wglGetProcAddress = createAutoLoader(lib, "wglGetProcAddress", PROC /* PROC */, [
	LPCSTR, /*  LPCSTR  */
], f => wglGetProcAddress = f);

export function wglMakeCurrent () {};
wglMakeCurrent = createAutoLoader(lib, "wglMakeCurrent", BOOL /* BOOL */, [
	HDC,   /*  HDC    */
	HGLRC, /*  HGLRC  */
], f => wglMakeCurrent = f);

export function wglShareLists () {};
wglShareLists = createAutoLoader(lib, "wglShareLists", BOOL /* BOOL */, [
	HGLRC, /*  HGLRC  */
	HGLRC, /*  HGLRC  */
], f => wglShareLists = f);

export function wglUseFontBitmapsA () {};
wglUseFontBitmapsA = createAutoLoader(lib, "wglUseFontBitmapsA", BOOL /* BOOL */, [
	HDC,   /*  HDC    */
	DWORD, /*  DWORD  */
	DWORD, /*  DWORD  */
	DWORD, /*  DWORD  */
], f => wglUseFontBitmapsA = f);

export function wglUseFontBitmapsW () {};
wglUseFontBitmapsW = createAutoLoader(lib, "wglUseFontBitmapsW", BOOL /* BOOL */, [
	HDC,   /*  HDC    */
	DWORD, /*  DWORD  */
	DWORD, /*  DWORD  */
	DWORD, /*  DWORD  */
], f => wglUseFontBitmapsW = f);
export {wglUseFontBitmapsW as wglUseFontBitmaps};

export function SwapBuffers () {};
SwapBuffers = createAutoLoader(lib, "SwapBuffers", BOOL /* BOOL */, [
	HDC, /*  HDC  */
], f => SwapBuffers = f);

export function wglUseFontOutlinesA () {};
wglUseFontOutlinesA = createAutoLoader(lib, "wglUseFontOutlinesA", BOOL /* BOOL */, [
	HDC,                 /*  HDC                  */
	DWORD,               /*  DWORD                */
	DWORD,               /*  DWORD                */
	DWORD,               /*  DWORD                */
	FLOAT,               /*  FLOAT                */
	FLOAT,               /*  FLOAT                */
	int,                 /*  int                  */
	LPGLYPHMETRICSFLOAT, /*  LPGLYPHMETRICSFLOAT  */
], f => wglUseFontOutlinesA = f);

export function wglUseFontOutlinesW () {};
wglUseFontOutlinesW = createAutoLoader(lib, "wglUseFontOutlinesW", BOOL /* BOOL */, [
	HDC,                 /*  HDC                  */
	DWORD,               /*  DWORD                */
	DWORD,               /*  DWORD                */
	DWORD,               /*  DWORD                */
	FLOAT,               /*  FLOAT                */
	FLOAT,               /*  FLOAT                */
	int,                 /*  int                  */
	LPGLYPHMETRICSFLOAT, /*  LPGLYPHMETRICSFLOAT  */
], f => wglUseFontOutlinesW = f);
export {wglUseFontOutlinesW as wglUseFontOutlines};

export function wglDescribeLayerPlane () {};
wglDescribeLayerPlane = createAutoLoader(lib, "wglDescribeLayerPlane", BOOL /* BOOL */, [
	HDC,                    /*  HDC                     */
	int,                    /*  int                     */
	int,                    /*  int                     */
	UINT,                   /*  UINT                    */
	LPLAYERPLANEDESCRIPTOR, /*  LPLAYERPLANEDESCRIPTOR  */
], f => wglDescribeLayerPlane = f);

export function wglSetLayerPaletteEntries () {};
wglSetLayerPaletteEntries = createAutoLoader(lib, "wglSetLayerPaletteEntries", int /* int */, [
	HDC,               /*  HDC              */
	int,               /*  int              */
	int,               /*  int              */
	int,               /*  int              */
	pointer(COLORREF), /*  CONST COLORREF*  */
], f => wglSetLayerPaletteEntries = f);

export function wglGetLayerPaletteEntries () {};
wglGetLayerPaletteEntries = createAutoLoader(lib, "wglGetLayerPaletteEntries", int /* int */, [
	HDC,               /*  HDC        */
	int,               /*  int        */
	int,               /*  int        */
	int,               /*  int        */
	pointer(COLORREF), /*  COLORREF*  */
], f => wglGetLayerPaletteEntries = f);

export function wglRealizeLayerPalette () {};
wglRealizeLayerPalette = createAutoLoader(lib, "wglRealizeLayerPalette", BOOL /* BOOL */, [
	HDC,  /*  HDC   */
	int,  /*  int   */
	BOOL, /*  BOOL  */
], f => wglRealizeLayerPalette = f);

export function wglSwapLayerBuffers () {};
wglSwapLayerBuffers = createAutoLoader(lib, "wglSwapLayerBuffers", BOOL /* BOOL */, [
	HDC,  /*  HDC   */
	UINT, /*  UINT  */
], f => wglSwapLayerBuffers = f);

export function wglSwapMultipleBuffers () {};
wglSwapMultipleBuffers = createAutoLoader(lib, "wglSwapMultipleBuffers", DWORD /* DWORD */, [
	UINT,             /*  UINT            */
	pointer(WGLSWAP), /*  CONST WGLSWAP*  */
], f => wglSwapMultipleBuffers = f);

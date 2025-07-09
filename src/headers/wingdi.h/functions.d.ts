// basic
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


export function AddFontResourceA (param0: LPCSTR): int;
export function AddFontResourceW (param0: LPCWSTR): int;
export function AddFontResource (param0: LPCWSTR): int;
export function AnimatePalette (hPal: HPALETTE, iStartIndex: UINT, cEntries: UINT, ppe: "PALETTEENTRY *"): BOOL;
export function Arc (hdc: HDC, x1: int, y1: int, x2: int, y2: int, x3: int, y3: int, x4: int, y4: int): BOOL;
export function BitBlt (hdc: HDC, x: int, y: int, cx: int, cy: int, hdcSrc: HDC, x1: int, y1: int, rop: DWORD): BOOL;
export function CancelDC (hdc: HDC): BOOL;
export function Chord (hdc: HDC, x1: int, y1: int, x2: int, y2: int, x3: int, y3: int, x4: int, y4: int): BOOL;
export function ChoosePixelFormat (hdc: HDC, ppfd: "PIXELFORMATDESCRIPTOR *"): int;
export function CloseMetaFile (hdc: HDC): HMETAFILE;
export function CombineRgn (hrgnDst: HRGN, hrgnSrc1: HRGN, hrgnSrc2: HRGN, iMode: int): int;
export function CopyMetaFileA (param0: HMETAFILE, param1: LPCSTR): HMETAFILE;
export function CopyMetaFileW (param0: HMETAFILE, param1: LPCWSTR): HMETAFILE;
export function CopyMetaFile (param0: HMETAFILE, param1: LPCWSTR): HMETAFILE;
export function CreateBitmap (nWidth: int, nHeight: int, nPlanes: UINT, nBitCount: UINT, lpBits: "VOID *"): HBITMAP;
export function CreateBitmapIndirect (pbm: "BITMAP *"): HBITMAP;
export function CreateBrushIndirect (plbrush: "LOGBRUSH *"): HBRUSH;
export function CreateCompatibleBitmap (hdc: HDC, cx: int, cy: int): HBITMAP;
export function CreateDiscardableBitmap (hdc: HDC, cx: int, cy: int): HBITMAP;
export function CreateCompatibleDC (hdc: HDC): HDC;
export function CreateDCA (pwszDriver: LPCSTR, pwszDevice: LPCSTR, pszPort: LPCSTR, pdm: "DEVMODEA *"): HDC;
export function CreateDCW (pwszDriver: LPCWSTR, pwszDevice: LPCWSTR, pszPort: LPCWSTR, pdm: "DEVMODEW *"): HDC;
export function CreateDC (pwszDriver: LPCWSTR, pwszDevice: LPCWSTR, pszPort: LPCWSTR, pdm: "DEVMODEW *"): HDC;
export function CreateDIBitmap (hdc: HDC, pbmih: "BITMAPINFOHEADER *", flInit: DWORD, pjBits: "VOID *", pbmi: "BITMAPINFO *", iUsage: UINT): HBITMAP;
export function CreateDIBPatternBrush (h: HGLOBAL, iUsage: UINT): HBRUSH;
export function CreateDIBPatternBrushPt (lpPackedDIB: "VOID *", iUsage: UINT): HBRUSH;
export function CreateEllipticRgn (x1: int, y1: int, x2: int, y2: int): HRGN;
export function CreateEllipticRgnIndirect (lprect: "RECT *"): HRGN;
export function CreateFontIndirectA (lplf: "LOGFONTA *"): HFONT;
export function CreateFontIndirectW (lplf: "LOGFONTW *"): HFONT;
export function CreateFontIndirect (lplf: "LOGFONTW *"): HFONT;
export function CreateFontA (cHeight: int, cWidth: int, cEscapement: int, cOrientation: int, cWeight: int, bItalic: DWORD, bUnderline: DWORD, bStrikeOut: DWORD, iCharSet: DWORD, iOutPrecision: DWORD, iClipPrecision: DWORD, iQuality: DWORD, iPitchAndFamily: DWORD, pszFaceName: LPCSTR): HFONT;
export function CreateFontW (cHeight: int, cWidth: int, cEscapement: int, cOrientation: int, cWeight: int, bItalic: DWORD, bUnderline: DWORD, bStrikeOut: DWORD, iCharSet: DWORD, iOutPrecision: DWORD, iClipPrecision: DWORD, iQuality: DWORD, iPitchAndFamily: DWORD, pszFaceName: LPCWSTR): HFONT;
export function CreateFont (cHeight: int, cWidth: int, cEscapement: int, cOrientation: int, cWeight: int, bItalic: DWORD, bUnderline: DWORD, bStrikeOut: DWORD, iCharSet: DWORD, iOutPrecision: DWORD, iClipPrecision: DWORD, iQuality: DWORD, iPitchAndFamily: DWORD, pszFaceName: LPCWSTR): HFONT;
export function CreateHatchBrush (iHatch: int, color: COLORREF): HBRUSH;
export function CreateICA (pszDriver: LPCSTR, pszDevice: LPCSTR, pszPort: LPCSTR, pdm: "DEVMODEA *"): HDC;
export function CreateICW (pszDriver: LPCWSTR, pszDevice: LPCWSTR, pszPort: LPCWSTR, pdm: "DEVMODEW *"): HDC;
export function CreateIC (pszDriver: LPCWSTR, pszDevice: LPCWSTR, pszPort: LPCWSTR, pdm: "DEVMODEW *"): HDC;
export function CreateMetaFileA (pszFile: LPCSTR): HDC;
export function CreateMetaFileW (pszFile: LPCWSTR): HDC;
export function CreateMetaFile (pszFile: LPCWSTR): HDC;
export function CreatePen (iStyle: int, cWidth: int, color: COLORREF): HPEN;
export function CreatePenIndirect (plpen: "LOGPEN *"): HPEN;
export function CreatePolyPolygonRgn (pptl: "POINT *", pc: "INT *", cPoly: int, iMode: int): HRGN;
export function CreatePatternBrush (hbm: HBITMAP): HBRUSH;
export function CreateRectRgn (x1: int, y1: int, x2: int, y2: int): HRGN;
export function CreateRectRgnIndirect (lprect: "RECT *"): HRGN;
export function CreateRoundRectRgn (x1: int, y1: int, x2: int, y2: int, w: int, h: int): HRGN;
export function CreateScalableFontResourceA (fdwHidden: DWORD, lpszFont: LPCSTR, lpszFile: LPCSTR, lpszPath: LPCSTR): BOOL;
export function CreateScalableFontResourceW (fdwHidden: DWORD, lpszFont: LPCWSTR, lpszFile: LPCWSTR, lpszPath: LPCWSTR): BOOL;
export function CreateScalableFontResource (fdwHidden: DWORD, lpszFont: LPCWSTR, lpszFile: LPCWSTR, lpszPath: LPCWSTR): BOOL;
export function CreateSolidBrush (color: COLORREF): HBRUSH;
export function DeleteDC (hdc: HDC): BOOL;
export function DeleteMetaFile (hmf: HMETAFILE): BOOL;
export function DeleteObject (ho: HGDIOBJ): BOOL;
export function DescribePixelFormat (hdc: HDC, iPixelFormat: int, nBytes: UINT, ppfd: LPPIXELFORMATDESCRIPTOR): int;
export function DrawEscape (hdc: HDC, iEscape: int, cjIn: int, lpIn: LPCSTR): int;
export function Ellipse (hdc: HDC, left: int, top: int, right: int, bottom: int): BOOL;
export function EnumFontFamiliesExA (hdc: HDC, lpLogfont: LPLOGFONTA, lpProc: FONTENUMPROCA, lParam: LPARAM, dwFlags: DWORD): int;
export function EnumFontFamiliesExW (hdc: HDC, lpLogfont: LPLOGFONTW, lpProc: FONTENUMPROCW, lParam: LPARAM, dwFlags: DWORD): int;
export function EnumFontFamiliesEx (hdc: HDC, lpLogfont: LPLOGFONTW, lpProc: FONTENUMPROCW, lParam: LPARAM, dwFlags: DWORD): int;
export function EnumFontFamiliesA (hdc: HDC, lpLogfont: LPCSTR, lpProc: FONTENUMPROCA, lParam: LPARAM): int;
export function EnumFontFamiliesW (hdc: HDC, lpLogfont: LPCWSTR, lpProc: FONTENUMPROCW, lParam: LPARAM): int;
export function EnumFontFamilies (hdc: HDC, lpLogfont: LPCWSTR, lpProc: FONTENUMPROCW, lParam: LPARAM): int;
export function EnumFontsA (hdc: HDC, lpLogfont: LPCSTR, lpProc: FONTENUMPROCA, lParam: LPARAM): int;
export function EnumFontsW (hdc: HDC, lpLogfont: LPCWSTR, lpProc: FONTENUMPROCW, lParam: LPARAM): int;
export function EnumFonts (hdc: HDC, lpLogfont: LPCWSTR, lpProc: FONTENUMPROCW, lParam: LPARAM): int;
export function EnumObjects (hdc: HDC, nType: int, lpFunc: GOBJENUMPROC, lParam: LPARAM): int;
export function EnumObjects (hdc: HDC, nType: int, lpFunc: GOBJENUMPROC, lParam: LPVOID): int;
export function EqualRgn (hrgn1: HRGN, hrgn2: HRGN): BOOL;
export function Escape (hdc: HDC, iEscape: int, cjIn: int, pvIn: LPCSTR, pvOut: LPVOID): int;
export function ExtEscape (hdc: HDC, iEscape: int, cjInput: int, lpInData: LPCSTR, cjOutput: int, lpOutData: LPSTR): int;
export function ExcludeClipRect (hdc: HDC, left: int, top: int, right: int, bottom: int): int;
export function ExtCreateRegion (lpx: "XFORM *", nCount: DWORD, lpData: "RGNDATA *"): HRGN;
export function ExtFloodFill (hdc: HDC, x: int, y: int, color: COLORREF, type: UINT): BOOL;
export function FillRgn (hdc: HDC, hrgn: HRGN, hbr: HBRUSH): BOOL;
export function FloodFill (hdc: HDC, x: int, y: int, color: COLORREF): BOOL;
export function FrameRgn (hdc: HDC, hrgn: HRGN, hbr: HBRUSH, w: int, h: int): BOOL;
export function GetROP2 (hdc: HDC): int;
export function GetAspectRatioFilterEx (hdc: HDC, lpsize: LPSIZE): BOOL;
export function GetBkColor (hdc: HDC): COLORREF;
export function GetDCBrushColor (hdc: HDC): COLORREF;
export function GetDCPenColor (hdc: HDC): COLORREF;
export function GetBkMode (hdc: HDC): int;
export function GetBitmapBits (hbit: HBITMAP, cb: LONG, lpvBits: LPVOID): LONG;
export function GetBitmapDimensionEx (hbit: HBITMAP, lpsize: LPSIZE): BOOL;
export function GetBoundsRect (hdc: HDC, lprect: LPRECT, flags: UINT): UINT;
export function GetBrushOrgEx (hdc: HDC, lppt: LPPOINT): BOOL;
export function GetCharWidthA (hdc: HDC, iFirst: UINT, iLast: UINT, lpBuffer: LPINT): BOOL;
export function GetCharWidthW (hdc: HDC, iFirst: UINT, iLast: UINT, lpBuffer: LPINT): BOOL;
export function GetCharWidth (hdc: HDC, iFirst: UINT, iLast: UINT, lpBuffer: LPINT): BOOL;
export function GetCharWidth32A (hdc: HDC, iFirst: UINT, iLast: UINT, lpBuffer: LPINT): BOOL;
export function GetCharWidth32W (hdc: HDC, iFirst: UINT, iLast: UINT, lpBuffer: LPINT): BOOL;
export function GetCharWidth32 (hdc: HDC, iFirst: UINT, iLast: UINT, lpBuffer: LPINT): BOOL;
export function GetCharWidthFloatA (hdc: HDC, iFirst: UINT, iLast: UINT, lpBuffer: PFLOAT): BOOL;
export function GetCharWidthFloatW (hdc: HDC, iFirst: UINT, iLast: UINT, lpBuffer: PFLOAT): BOOL;
export function GetCharWidthFloat (hdc: HDC, iFirst: UINT, iLast: UINT, lpBuffer: PFLOAT): BOOL;
export function GetCharABCWidthsA (hdc: HDC, wFirst: UINT, wLast: UINT, lpABC: LPABC): BOOL;
export function GetCharABCWidthsW (hdc: HDC, wFirst: UINT, wLast: UINT, lpABC: LPABC): BOOL;
export function GetCharABCWidths (hdc: HDC, wFirst: UINT, wLast: UINT, lpABC: LPABC): BOOL;
export function GetCharABCWidthsFloatA (hdc: HDC, iFirst: UINT, iLast: UINT, lpABC: LPABCFLOAT): BOOL;
export function GetCharABCWidthsFloatW (hdc: HDC, iFirst: UINT, iLast: UINT, lpABC: LPABCFLOAT): BOOL;
export function GetCharABCWidthsFloat (hdc: HDC, iFirst: UINT, iLast: UINT, lpABC: LPABCFLOAT): BOOL;
export function GetClipBox (hdc: HDC, lprect: LPRECT): int;
export function GetClipRgn (hdc: HDC, hrgn: HRGN): int;
export function GetMetaRgn (hdc: HDC, hrgn: HRGN): int;
export function GetCurrentObject (hdc: HDC, type: UINT): HGDIOBJ;
export function GetCurrentPositionEx (hdc: HDC, lppt: LPPOINT): BOOL;
export function GetDeviceCaps (hdc: HDC, index: int): int;
export function GetGlyphOutlineA (hdc: HDC, uChar: UINT, fuFormat: UINT, lpgm: LPGLYPHMETRICS, cjBuffer: DWORD, pvBuffer: LPVOID, lpmat2: "MAT2 *"): DWORD;
export function GetGlyphOutlineW (hdc: HDC, uChar: UINT, fuFormat: UINT, lpgm: LPGLYPHMETRICS, cjBuffer: DWORD, pvBuffer: LPVOID, lpmat2: "MAT2 *"): DWORD;
export function GetGlyphOutline (hdc: HDC, uChar: UINT, fuFormat: UINT, lpgm: LPGLYPHMETRICS, cjBuffer: DWORD, pvBuffer: LPVOID, lpmat2: "MAT2 *"): DWORD;
export function GetGraphicsMode (hdc: HDC): int;
export function GetMapMode (hdc: HDC): int;
export function GetMetaFileBitsEx (hMF: HMETAFILE, cbBuffer: UINT, lpData: LPVOID): UINT;
export function GetMetaFileA (lpName: LPCSTR): HMETAFILE;
export function GetMetaFileW (lpName: LPCWSTR): HMETAFILE;
export function GetMetaFile (lpName: LPCWSTR): HMETAFILE;
export function GetNearestColor (hdc: HDC, color: COLORREF): COLORREF;
export function GetNearestPaletteIndex (h: HPALETTE, color: COLORREF): UINT;
export function GetObjectType (h: HGDIOBJ): DWORD;
export function GetOutlineTextMetricsA (hdc: HDC, cjCopy: UINT, potm: LPOUTLINETEXTMETRICA): UINT;
export function GetOutlineTextMetricsW (hdc: HDC, cjCopy: UINT, potm: LPOUTLINETEXTMETRICW): UINT;
export function GetOutlineTextMetrics (hdc: HDC, cjCopy: UINT, potm: LPOUTLINETEXTMETRICW): UINT;
export function GetPaletteEntries (hpal: HPALETTE, iStart: UINT, cEntries: UINT, pPalEntries: LPPALETTEENTRY): UINT;
export function GetPixel (hdc: HDC, x: int, y: int): COLORREF;
export function GetPixelFormat (hdc: HDC): int;
export function GetPolyFillMode (hdc: HDC): int;
export function GetRasterizerCaps (lpraststat: LPRASTERIZER_STATUS, cjBytes: UINT): BOOL;
export function GetRandomRgn (hdc: HDC, hrgn: HRGN, i: INT): int;
export function GetRgnBox (hrgn: HRGN, lprc: LPRECT): int;
export function GetStockObject (i: int): HGDIOBJ;
export function GetStretchBltMode (hdc: HDC): int;
export function GetSystemPaletteEntries (hdc: HDC, iStart: UINT, cEntries: UINT, pPalEntries: LPPALETTEENTRY): UINT;
export function GetSystemPaletteUse (hdc: HDC): UINT;
export function GetTextCharacterExtra (hdc: HDC): int;
export function GetTextAlign (hdc: HDC): UINT;
export function GetTextColor (hdc: HDC): COLORREF;
export function GetTextExtentPointA (hdc: HDC, lpString: LPCSTR, c: int, lpsz: LPSIZE): BOOL;
export function GetTextExtentPointW (hdc: HDC, lpString: LPCWSTR, c: int, lpsz: LPSIZE): BOOL;
export function GetTextExtentPoint (hdc: HDC, lpString: LPCWSTR, c: int, lpsz: LPSIZE): BOOL;
export function GetTextExtentPoint32A (hdc: HDC, lpString: LPCSTR, c: int, psizl: LPSIZE): BOOL;
export function GetTextExtentPoint32W (hdc: HDC, lpString: LPCWSTR, c: int, psizl: LPSIZE): BOOL;
export function GetTextExtentPoint32 (hdc: HDC, lpString: LPCWSTR, c: int, psizl: LPSIZE): BOOL;
export function GetTextCharset (hdc: HDC): int;
export function GetTextCharsetInfo (hdc: HDC, lpSig: LPFONTSIGNATURE, dwFlags: DWORD): int;
export function TranslateCharsetInfo (lpSrc: "DWORD FAR *", lpCs: LPCHARSETINFO, dwFlags: DWORD): BOOL;
export function GetFontLanguageInfo (hdc: HDC): DWORD;
export function GetCharacterPlacementA (hdc: HDC, lpString: LPCSTR, nCount: int, nMexExtent: int, lpResults: LPGCP_RESULTSA, dwFlags: DWORD): DWORD;
export function GetCharacterPlacementW (hdc: HDC, lpString: LPCWSTR, nCount: int, nMexExtent: int, lpResults: LPGCP_RESULTSW, dwFlags: DWORD): DWORD;
export function GetCharacterPlacement (hdc: HDC, lpString: LPCWSTR, nCount: int, nMexExtent: int, lpResults: LPGCP_RESULTSW, dwFlags: DWORD): DWORD;
export function GetFontUnicodeRanges (hdc: HDC, lpgs: LPGLYPHSET): DWORD;
export function GetGlyphIndicesA (hdc: HDC, lpstr: LPCSTR, c: int, pgi: LPWORD, fl: DWORD): DWORD;
export function GetGlyphIndicesW (hdc: HDC, lpstr: LPCWSTR, c: int, pgi: LPWORD, fl: DWORD): DWORD;
export function GetGlyphIndices (hdc: HDC, lpstr: LPCWSTR, c: int, pgi: LPWORD, fl: DWORD): DWORD;
export function GetTextExtentPointI (hdc: HDC, pgiIn: LPWORD, cgi: int, psize: LPSIZE): BOOL;
export function GetTextExtentExPointI (hdc: HDC, lpwszString: LPWORD, cwchString: int, nMaxExtent: int, lpnFit: LPINT, lpnDx: LPINT, lpSize: LPSIZE): BOOL;
export function AddFontResourceExA (name: LPCSTR, fl: DWORD, res: PVOID): int;
export function AddFontResourceExW (name: LPCWSTR, fl: DWORD, res: PVOID): int;
export function AddFontResourceEx (name: LPCWSTR, fl: DWORD, res: PVOID): int;
export function RemoveFontResourceExA (name: LPCSTR, fl: DWORD, pdv: PVOID): BOOL;
export function RemoveFontResourceExW (name: LPCWSTR, fl: DWORD, pdv: PVOID): BOOL;
export function RemoveFontResourceEx (name: LPCWSTR, fl: DWORD, pdv: PVOID): BOOL;
export function AddFontMemResourceEx (pFileView: PVOID, cjSize: DWORD, pvResrved: PVOID, pNumFonts: "DWORD*"): HANDLE;
export function RemoveFontMemResourceEx (h: HANDLE): BOOL;
export function CreateFontIndirectExA (param0: "ENUMLOGFONTEXDVA*"): HFONT;
export function CreateFontIndirectExW (param0: "ENUMLOGFONTEXDVW*"): HFONT;
export function CreateFontIndirectEx (param0: "ENUMLOGFONTEXDVW*"): HFONT;
export function GetViewportExtEx (hdc: HDC, lpsize: LPSIZE): BOOL;
export function GetViewportOrgEx (hdc: HDC, lppoint: LPPOINT): BOOL;
export function GetWindowExtEx (hdc: HDC, lpsize: LPSIZE): BOOL;
export function GetWindowOrgEx (hdc: HDC, lppoint: LPPOINT): BOOL;
export function IntersectClipRect (hdc: HDC, left: int, top: int, right: int, bottom: int): int;
export function InvertRgn (hdc: HDC, hrgn: HRGN): BOOL;
export function LineDDA (xStart: int, yStart: int, xEnd: int, yEnd: int, lpProc: LINEDDAPROC, data: LPARAM): BOOL;
export function LineTo (hdc: HDC, x: int, y: int): BOOL;
export function MaskBlt (hdcDest: HDC, xDest: int, yDest: int, width: int, height: int, hdcSrc: HDC, xSrc: int, ySrc: int, hbmMask: HBITMAP, xMask: int, yMask: int, rop: DWORD): BOOL;
export function PlgBlt (hdcDest: HDC, lpPoint: "POINT *", hdcSrc: HDC, xSrc: int, ySrc: int, width: int, height: int, hbmMask: HBITMAP, xMask: int, yMask: int): BOOL;
export function OffsetClipRgn (hdc: HDC, x: int, y: int): int;
export function OffsetRgn (hrgn: HRGN, x: int, y: int): int;
export function PatBlt (hdc: HDC, x: int, y: int, w: int, h: int, rop: DWORD): BOOL;
export function Pie (hdc: HDC, left: int, top: int, right: int, bottom: int, xr1: int, yr1: int, xr2: int, yr2: int): BOOL;
export function PlayMetaFile (hdc: HDC, hmf: HMETAFILE): BOOL;
export function PaintRgn (hdc: HDC, hrgn: HRGN): BOOL;
export function PolyPolygon (hdc: HDC, apt: "POINT *", asz: "INT *", csz: int): BOOL;
export function PtInRegion (hrgn: HRGN, x: int, y: int): BOOL;
export function PtVisible (hdc: HDC, x: int, y: int): BOOL;
export function RectInRegion (hrgn: HRGN, lprect: "RECT *"): BOOL;
export function RectVisible (hdc: HDC, lprect: "RECT *"): BOOL;
export function Rectangle (hdc: HDC, left: int, top: int, right: int, bottom: int): BOOL;
export function RestoreDC (hdc: HDC, nSavedDC: int): BOOL;
export function ResetDCA (hdc: HDC, lpdm: "DEVMODEA *"): HDC;
export function ResetDCW (hdc: HDC, lpdm: "DEVMODEW *"): HDC;
export function ResetDC (hdc: HDC, lpdm: "DEVMODEW *"): HDC;
export function RealizePalette (hdc: HDC): UINT;
export function RemoveFontResourceA (lpFileName: LPCSTR): BOOL;
export function RemoveFontResourceW (lpFileName: LPCWSTR): BOOL;
export function RemoveFontResource (lpFileName: LPCWSTR): BOOL;
export function RoundRect (hdc: HDC, left: int, top: int, right: int, bottom: int, width: int, height: int): BOOL;
export function ResizePalette (hpal: HPALETTE, n: UINT): BOOL;
export function SaveDC (hdc: HDC): int;
export function SelectClipRgn (hdc: HDC, hrgn: HRGN): int;
export function ExtSelectClipRgn (hdc: HDC, hrgn: HRGN, mode: int): int;
export function SetMetaRgn (hdc: HDC): int;
export function SelectObject (hdc: HDC, h: HGDIOBJ): HGDIOBJ;
export function SelectPalette (hdc: HDC, hPal: HPALETTE, bForceBkgd: BOOL): HPALETTE;
export function SetBkColor (hdc: HDC, color: COLORREF): COLORREF;
export function SetDCBrushColor (hdc: HDC, color: COLORREF): COLORREF;
export function SetDCPenColor (hdc: HDC, color: COLORREF): COLORREF;
export function SetBkMode (hdc: HDC, mode: int): int;
export function SetBitmapBits (hbm: HBITMAP, cb: DWORD, pvBits: "VOID *"): LONG;
export function SetBoundsRect (hdc: HDC, lprect: "RECT *", flags: UINT): UINT;
export function SetDIBits (hdc: HDC, hbm: HBITMAP, start: UINT, cLines: UINT, lpBits: "VOID *", lpbmi: "BITMAPINFO *", ColorUse: UINT): int;
export function SetDIBitsToDevice (hdc: HDC, xDest: int, yDest: int, w: DWORD, h: DWORD, xSrc: int, ySrc: int, StartScan: UINT, cLines: UINT, lpvBits: "VOID *", lpbmi: "BITMAPINFO *", ColorUse: UINT): int;
export function SetMapperFlags (hdc: HDC, flags: DWORD): DWORD;
export function SetGraphicsMode (hdc: HDC, iMode: int): int;
export function SetMapMode (hdc: HDC, iMode: int): int;
export function SetLayout (hdc: HDC, l: DWORD): DWORD;
export function GetLayout (hdc: HDC): DWORD;
export function SetMetaFileBitsEx (cbBuffer: UINT, lpData: "BYTE *"): HMETAFILE;
export function SetPaletteEntries (hpal: HPALETTE, iStart: UINT, cEntries: UINT, pPalEntries: "PALETTEENTRY *"): UINT;
export function SetPixel (hdc: HDC, x: int, y: int, color: COLORREF): COLORREF;
export function SetPixelV (hdc: HDC, x: int, y: int, color: COLORREF): BOOL;
export function SetPixelFormat (hdc: HDC, format: int, ppfd: "PIXELFORMATDESCRIPTOR *"): BOOL;
export function SetPolyFillMode (hdc: HDC, mode: int): int;
export function StretchBlt (hdcDest: HDC, xDest: int, yDest: int, wDest: int, hDest: int, hdcSrc: HDC, xSrc: int, ySrc: int, wSrc: int, hSrc: int, rop: DWORD): BOOL;
export function SetRectRgn (hrgn: HRGN, left: int, top: int, right: int, bottom: int): BOOL;
export function StretchDIBits (hdc: HDC, xDest: int, yDest: int, DestWidth: int, DestHeight: int, xSrc: int, ySrc: int, SrcWidth: int, SrcHeight: int, lpBits: "VOID *", lpbmi: "BITMAPINFO *", iUsage: UINT, rop: DWORD): int;
export function SetROP2 (hdc: HDC, rop2: int): int;
export function SetStretchBltMode (hdc: HDC, mode: int): int;
export function SetSystemPaletteUse (hdc: HDC, use: UINT): UINT;
export function SetTextCharacterExtra (hdc: HDC, extra: int): int;
export function SetTextColor (hdc: HDC, color: COLORREF): COLORREF;
export function SetTextAlign (hdc: HDC, align: UINT): UINT;
export function SetTextJustification (hdc: HDC, extra: int, count: int): BOOL;
export function UpdateColors (hdc: HDC): BOOL;
export function GdiRegisterDdraw (pPacket: PGDIREGISTERDDRAWPACKET, ppfnGdiAlloc: "GDIMARSHALLOC *"): BOOL;
export function GdiMarshalSize (): ULONG;
export function GdiMarshal (dwProcessIdTo: DWORD, hGdiObj: HGDIOBJ, pData: PVOID, ulFlags: ULONG): VOID;
export function GdiUnmarshal (pData: PVOID, ulFlags: ULONG): HGDIOBJ;
export function AlphaBlend (hdcDest: HDC, xoriginDest: int, yoriginDest: int, wDest: int, hDest: int, hdcSrc: HDC, xoriginSrc: int, yoriginSrc: int, wSrc: int, hSrc: int, ftn: BLENDFUNCTION): BOOL;
export function TransparentBlt (hdcDest: HDC, xoriginDest: int, yoriginDest: int, wDest: int, hDest: int, hdcSrc: HDC, xoriginSrc: int, yoriginSrc: int, wSrc: int, hSrc: int, crTransparent: UINT): BOOL;
export function GradientFill (hdc: HDC, pVertex: PTRIVERTEX, nVertex: ULONG, pMesh: PVOID, nMesh: ULONG, ulMode: ULONG): BOOL;
export function GdiAlphaBlend (hdcDest: HDC, xoriginDest: int, yoriginDest: int, wDest: int, hDest: int, hdcSrc: HDC, xoriginSrc: int, yoriginSrc: int, wSrc: int, hSrc: int, ftn: BLENDFUNCTION): BOOL;
export function GdiTransparentBlt (hdcDest: HDC, xoriginDest: int, yoriginDest: int, wDest: int, hDest: int, hdcSrc: HDC, xoriginSrc: int, yoriginSrc: int, wSrc: int, hSrc: int, crTransparent: UINT): BOOL;
export function GdiGradientFill (hdc: HDC, pVertex: PTRIVERTEX, nVertex: ULONG, pMesh: PVOID, nCount: ULONG, ulMode: ULONG): BOOL;
export function PlayMetaFileRecord (hdc: HDC, lpHandleTable: LPHANDLETABLE, lpMR: LPMETARECORD, noObjs: UINT): BOOL;
export function EnumMetaFile (hdc: HDC, hmf: HMETAFILE, proc: MFENUMPROC, param: LPARAM): BOOL;
export function CloseEnhMetaFile (hdc: HDC): HENHMETAFILE;
export function CopyEnhMetaFileA (hEnh: HENHMETAFILE, lpFileName: LPCSTR): HENHMETAFILE;
export function CopyEnhMetaFileW (hEnh: HENHMETAFILE, lpFileName: LPCWSTR): HENHMETAFILE;
export function CopyEnhMetaFile (hEnh: HENHMETAFILE, lpFileName: LPCWSTR): HENHMETAFILE;
export function CreateEnhMetaFileA (hdc: HDC, lpFilename: LPCSTR, lprc: "RECT *", lpDesc: LPCSTR): HDC;
export function CreateEnhMetaFileW (hdc: HDC, lpFilename: LPCWSTR, lprc: "RECT *", lpDesc: LPCWSTR): HDC;
export function CreateEnhMetaFile (hdc: HDC, lpFilename: LPCWSTR, lprc: "RECT *", lpDesc: LPCWSTR): HDC;
export function DeleteEnhMetaFile (hmf: HENHMETAFILE): BOOL;
export function EnumEnhMetaFile (hdc: HDC, hmf: HENHMETAFILE, proc: ENHMFENUMPROC, param: LPVOID, lpRect: "RECT *"): BOOL;
export function GetEnhMetaFileA (lpName: LPCSTR): HENHMETAFILE;
export function GetEnhMetaFileW (lpName: LPCWSTR): HENHMETAFILE;
export function GetEnhMetaFile (lpName: LPCWSTR): HENHMETAFILE;
export function GetEnhMetaFileBits (hEMF: HENHMETAFILE, nSize: UINT, lpData: LPBYTE): UINT;
export function GetEnhMetaFileDescriptionA (hemf: HENHMETAFILE, cchBuffer: UINT, lpDescription: LPSTR): UINT;
export function GetEnhMetaFileDescriptionW (hemf: HENHMETAFILE, cchBuffer: UINT, lpDescription: LPWSTR): UINT;
export function GetEnhMetaFileDescription (hemf: HENHMETAFILE, cchBuffer: UINT, lpDescription: LPWSTR): UINT;
export function GetEnhMetaFileHeader (hemf: HENHMETAFILE, nSize: UINT, lpEnhMetaHeader: LPENHMETAHEADER): UINT;
export function GetEnhMetaFilePaletteEntries (hemf: HENHMETAFILE, nNumEntries: UINT, lpPaletteEntries: LPPALETTEENTRY): UINT;
export function GetEnhMetaFilePixelFormat (hemf: HENHMETAFILE, cbBuffer: UINT, ppfd: "PIXELFORMATDESCRIPTOR *"): UINT;
export function GetWinMetaFileBits (hemf: HENHMETAFILE, cbData16: UINT, pData16: LPBYTE, iMapMode: INT, hdcRef: HDC): UINT;
export function PlayEnhMetaFile (hdc: HDC, hmf: HENHMETAFILE, lprect: "RECT *"): BOOL;
export function PlayEnhMetaFileRecord (hdc: HDC, pht: LPHANDLETABLE, pmr: "ENHMETARECORD *", cht: UINT): BOOL;
export function SetEnhMetaFileBits (nSize: UINT, pb: "BYTE *"): HENHMETAFILE;
export function SetWinMetaFileBits (nSize: UINT, lpMeta16Data: "BYTE *", hdcRef: HDC, lpMFP: "METAFILEPICT *"): HENHMETAFILE;
export function GdiComment (hdc: HDC, nSize: UINT, lpData: "BYTE *"): BOOL;
export function GetTextMetricsA (hdc: HDC, lptm: LPTEXTMETRICA): BOOL;
export function GetTextMetricsW (hdc: HDC, lptm: LPTEXTMETRICW): BOOL;
export function GetTextMetrics (hdc: HDC, lptm: LPTEXTMETRICW): BOOL;
export function AngleArc (hdc: HDC, x: int, y: int, r: DWORD, StartAngle: FLOAT, SweepAngle: FLOAT): BOOL;
export function PolyPolyline (hdc: HDC, apt: "POINT *", asz: "DWORD *", csz: DWORD): BOOL;
export function GetWorldTransform (hdc: HDC, lpxf: LPXFORM): BOOL;
export function SetWorldTransform (hdc: HDC, lpxf: "XFORM *"): BOOL;
export function ModifyWorldTransform (hdc: HDC, lpxf: "XFORM *", mode: DWORD): BOOL;
export function CombineTransform (lpxfOut: LPXFORM, lpxf1: "XFORM *", lpxf2: "XFORM *"): BOOL;
export function SetDIBColorTable (hdc: HDC, iStart: UINT, cEntries: UINT, prgbq: "RGBQUAD *"): UINT;
export function SetColorAdjustment (hdc: HDC, lpca: "COLORADJUSTMENT *"): BOOL;
export function GetColorAdjustment (hdc: HDC, lpca: LPCOLORADJUSTMENT): BOOL;
export function CreateHalftonePalette (hdc: HDC): HPALETTE;
export function StartDocA (hdc: HDC, lpdi: "DOCINFOA *"): int;
export function StartDocW (hdc: HDC, lpdi: "DOCINFOW *"): int;
export function StartDoc (hdc: HDC, lpdi: "DOCINFOW *"): int;
export function EndDoc (hdc: HDC): int;
export function StartPage (hdc: HDC): int;
export function EndPage (hdc: HDC): int;
export function AbortDoc (hdc: HDC): int;
export function SetAbortProc (hdc: HDC, proc: ABORTPROC): int;
export function AbortPath (hdc: HDC): BOOL;
export function ArcTo (hdc: HDC, left: int, top: int, right: int, bottom: int, xr1: int, yr1: int, xr2: int, yr2: int): BOOL;
export function BeginPath (hdc: HDC): BOOL;
export function CloseFigure (hdc: HDC): BOOL;
export function EndPath (hdc: HDC): BOOL;
export function FillPath (hdc: HDC): BOOL;
export function FlattenPath (hdc: HDC): BOOL;
export function GetPath (hdc: HDC, apt: LPPOINT, aj: LPBYTE, cpt: int): int;
export function PathToRegion (hdc: HDC): HRGN;
export function PolyDraw (hdc: HDC, apt: "POINT *", aj: "BYTE *", cpt: int): BOOL;
export function SelectClipPath (hdc: HDC, mode: int): BOOL;
export function SetArcDirection (hdc: HDC, dir: int): int;
export function SetMiterLimit (hdc: HDC, limit: FLOAT, old: PFLOAT): BOOL;
export function StrokeAndFillPath (hdc: HDC): BOOL;
export function StrokePath (hdc: HDC): BOOL;
export function WidenPath (hdc: HDC): BOOL;
export function GetMiterLimit (hdc: HDC, plimit: PFLOAT): BOOL;
export function GetArcDirection (hdc: HDC): int;
export function GetObjectA (h: HANDLE, c: int, pv: LPVOID): int;
export function GetObjectW (h: HANDLE, c: int, pv: LPVOID): int;
export function GetObject (h: HANDLE, c: int, pv: LPVOID): int;
export function MoveToEx (hdc: HDC, x: int, y: int, lppt: LPPOINT): BOOL;
export function TextOutA (hdc: HDC, x: int, y: int, lpString: LPCSTR, c: int): BOOL;
export function TextOutW (hdc: HDC, x: int, y: int, lpString: LPCWSTR, c: int): BOOL;
export function TextOut (hdc: HDC, x: int, y: int, lpString: LPCWSTR, c: int): BOOL;
export function PolyTextOutA (hdc: HDC, ppt: "POLYTEXTA *", nstrings: int): BOOL;
export function PolyTextOutW (hdc: HDC, ppt: "POLYTEXTW *", nstrings: int): BOOL;
export function PolyTextOut (hdc: HDC, ppt: "POLYTEXTW *", nstrings: int): BOOL;
export function CreatePolygonRgn (pptl: "POINT *", cPoint: int, iMode: int): HRGN;
export function Polygon (hdc: HDC, apt: "POINT *", cpt: int): BOOL;
export function Polyline (hdc: HDC, apt: "POINT *", cpt: int): BOOL;
export function PolyBezier (hdc: HDC, apt: "POINT *", cpt: DWORD): BOOL;
export function PolyBezierTo (hdc: HDC, apt: "POINT *", cpt: DWORD): BOOL;
export function PolylineTo (hdc: HDC, apt: "POINT *", cpt: DWORD): BOOL;
export function SetViewportExtEx (hdc: HDC, x: int, y: int, lpsz: LPSIZE): BOOL;
export function SetViewportOrgEx (hdc: HDC, x: int, y: int, lppt: LPPOINT): BOOL;
export function SetWindowExtEx (hdc: HDC, x: int, y: int, lpsz: LPSIZE): BOOL;
export function SetWindowOrgEx (hdc: HDC, x: int, y: int, lppt: LPPOINT): BOOL;
export function OffsetViewportOrgEx (hdc: HDC, x: int, y: int, lppt: LPPOINT): BOOL;
export function OffsetWindowOrgEx (hdc: HDC, x: int, y: int, lppt: LPPOINT): BOOL;
export function ScaleViewportExtEx (hdc: HDC, xn: int, dx: int, yn: int, yd: int, lpsz: LPSIZE): BOOL;
export function ScaleWindowExtEx (hdc: HDC, xn: int, xd: int, yn: int, yd: int, lpsz: LPSIZE): BOOL;
export function SetBitmapDimensionEx (hbm: HBITMAP, w: int, h: int, lpsz: LPSIZE): BOOL;
export function SetBrushOrgEx (hdc: HDC, x: int, y: int, lppt: LPPOINT): BOOL;
export function GetTextFaceA (hdc: HDC, c: int, lpName: LPSTR): int;
export function GetTextFaceW (hdc: HDC, c: int, lpName: LPWSTR): int;
export function GetTextFace (hdc: HDC, c: int, lpName: LPWSTR): int;
export function GetKerningPairsA (hdc: HDC, nPairs: DWORD, lpKernPair: LPKERNINGPAIR): DWORD;
export function GetKerningPairsW (hdc: HDC, nPairs: DWORD, lpKernPair: LPKERNINGPAIR): DWORD;
export function GetKerningPairs (hdc: HDC, nPairs: DWORD, lpKernPair: LPKERNINGPAIR): DWORD;
export function GetDCOrgEx (hdc: HDC, lppt: LPPOINT): BOOL;
export function FixBrushOrgEx (hdc: HDC, x: int, y: int, ptl: LPPOINT): BOOL;
export function UnrealizeObject (h: HGDIOBJ): BOOL;
export function GdiFlush (): BOOL;
export function GdiSetBatchLimit (dw: DWORD): DWORD;
export function GdiGetBatchLimit (): DWORD;
export function SetICMMode (hdc: HDC, mode: int): int;
export function CheckColorsInGamut (hdc: HDC, lpRGBTriple: LPRGBTRIPLE, dlpBuffer: LPVOID, nCount: DWORD): BOOL;
export function GetColorSpace (hdc: HDC): HCOLORSPACE;
export function GetLogColorSpaceA (hColorSpace: HCOLORSPACE, lpBuffer: LPLOGCOLORSPACEA, nSize: DWORD): BOOL;
export function GetLogColorSpaceW (hColorSpace: HCOLORSPACE, lpBuffer: LPLOGCOLORSPACEW, nSize: DWORD): BOOL;
export function GetLogColorSpace (hColorSpace: HCOLORSPACE, lpBuffer: LPLOGCOLORSPACEW, nSize: DWORD): BOOL;
export function CreateColorSpaceA (lplcs: LPLOGCOLORSPACEA): HCOLORSPACE;
export function CreateColorSpaceW (lplcs: LPLOGCOLORSPACEW): HCOLORSPACE;
export function CreateColorSpace (lplcs: LPLOGCOLORSPACEW): HCOLORSPACE;
export function SetColorSpace (hdc: HDC, hcs: HCOLORSPACE): HCOLORSPACE;
export function DeleteColorSpace (hcs: HCOLORSPACE): BOOL;
export function GetICMProfileA (hdc: HDC, pBufSize: LPDWORD, pszFilename: LPSTR): BOOL;
export function GetICMProfileW (hdc: HDC, pBufSize: LPDWORD, pszFilename: LPWSTR): BOOL;
export function GetICMProfile (hdc: HDC, pBufSize: LPDWORD, pszFilename: LPWSTR): BOOL;
export function SetICMProfileA (hdc: HDC, lpFileName: LPSTR): BOOL;
export function SetICMProfileW (hdc: HDC, lpFileName: LPWSTR): BOOL;
export function SetICMProfile (hdc: HDC, lpFileName: LPWSTR): BOOL;
export function GetDeviceGammaRamp (hdc: HDC, lpRamp: LPVOID): BOOL;
export function SetDeviceGammaRamp (hdc: HDC, lpRamp: LPVOID): BOOL;
export function ColorMatchToTarget (hdc: HDC, hdcTarget: HDC, action: DWORD): BOOL;
export function EnumICMProfilesA (hdc: HDC, proc: ICMENUMPROCA, param: LPARAM): int;
export function EnumICMProfilesW (hdc: HDC, proc: ICMENUMPROCW, param: LPARAM): int;
export function EnumICMProfiles (hdc: HDC, proc: ICMENUMPROCW, param: LPARAM): int;
export function UpdateICMRegKeyA (reserved: DWORD, lpszCMID: LPSTR, lpszFileName: LPSTR, command: UINT): BOOL;
export function UpdateICMRegKeyW (reserved: DWORD, lpszCMID: LPWSTR, lpszFileName: LPWSTR, command: UINT): BOOL;
export function UpdateICMRegKey (reserved: DWORD, lpszCMID: LPWSTR, lpszFileName: LPWSTR, command: UINT): BOOL;
export function ColorCorrectPalette (hdc: HDC, hPal: HPALETTE, deFirst: DWORD, num: DWORD): BOOL;
export function wglCopyContext (param0: HGLRC, param1: HGLRC, param2: UINT): BOOL;
export function wglCreateContext (param0: HDC): HGLRC;
export function wglCreateLayerContext (param0: HDC, param1: int): HGLRC;
export function wglDeleteContext (param0: HGLRC): BOOL;
export function wglGetCurrentContext (): HGLRC;
export function wglGetCurrentDC (): HDC;
export function wglGetProcAddress (param0: LPCSTR): PROC;
export function wglMakeCurrent (param0: HDC, param1: HGLRC): BOOL;
export function wglShareLists (param0: HGLRC, param1: HGLRC): BOOL;
export function wglUseFontBitmapsA (param0: HDC, param1: DWORD, param2: DWORD, param3: DWORD): BOOL;
export function wglUseFontBitmapsW (param0: HDC, param1: DWORD, param2: DWORD, param3: DWORD): BOOL;
export function wglUseFontBitmaps (param0: HDC, param1: DWORD, param2: DWORD, param3: DWORD): BOOL;
export function SwapBuffers (param0: HDC): BOOL;
export function wglUseFontOutlinesA (param0: HDC, param1: DWORD, param2: DWORD, param3: DWORD, param4: FLOAT, param5: FLOAT, param6: int, param7: LPGLYPHMETRICSFLOAT): BOOL;
export function wglUseFontOutlinesW (param0: HDC, param1: DWORD, param2: DWORD, param3: DWORD, param4: FLOAT, param5: FLOAT, param6: int, param7: LPGLYPHMETRICSFLOAT): BOOL;
export function wglUseFontOutlines (param0: HDC, param1: DWORD, param2: DWORD, param3: DWORD, param4: FLOAT, param5: FLOAT, param6: int, param7: LPGLYPHMETRICSFLOAT): BOOL;
export function wglDescribeLayerPlane (param0: HDC, param1: int, param2: int, param3: UINT, param4: LPLAYERPLANEDESCRIPTOR): BOOL;
export function wglSetLayerPaletteEntries (param0: HDC, param1: int, param2: int, param3: int, param4: "COLORREF*"): int;
export function wglGetLayerPaletteEntries (param0: HDC, param1: int, param2: int, param3: int, param4: "COLORREF*"): int;
export function wglRealizeLayerPalette (param0: HDC, param1: int, param2: BOOL): BOOL;
export function wglSwapLayerBuffers (param0: HDC, param1: UINT): BOOL;
export function wglSwapMultipleBuffers (param0: UINT, param1: "WGLSWAP*"): DWORD;

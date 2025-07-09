import koffi from "koffi";

// basic
import {array, struct, union, bitfield, pointer} from "../../types.js";
import {int, short, char} from "../../types.js";

// basetsd.h
import {
	UINT16,
	UINT32,
	UINT64,
	ULONG_PTR,
} from "../basetsd.h/basetsd.js";

// minwindef.h
import {
	DWORD, WORD, BYTE, BOOL,
	FLOAT,
	HMETAFILE,
	INT, UINT,
	LPVOID,
	MAX_PATH,
	ULONG,
	USHORT,
} from "../minwindef.h/minWindef.js";

// windef.h
import {COLORREF, HGDIOBJ, HDC} from "../windef.h/windef.js";

// winnt.h
import {HANDLE} from "../winnt.h/winnt.js";
import {CHAR, WCHAR, PSTR, LPSTR, LPCSTR, LPWSTR, LPCWSTR, LONG, SHORT} from "../winnt.h/winnt.js";
import {HRESULT} from "../winnt.h/winnt.js";
import {LUID} from "../winnt.h/structs.js";

import {
	POINT, POINTL, POINTS,
	RECT, RECTL,
	SIZEL,
} from "../windef.h/windef.js";

// noinspection ES6PreferShortImport
import {CCHDEVICENAME} from "../WinUser.h/constants.js";

import {
	COLOR16,
	FXPT2DOT30,
	LCSCSTYPE,
	LCSGAMUTMATCH,
} from "./aliases.js";
import {
	DISPLAYCONFIG_COLOR_ENCODING,
	DISPLAYCONFIG_DEVICE_INFO_TYPE,
	DISPLAYCONFIG_MODE_INFO_TYPE,
	DISPLAYCONFIG_PIXELFORMAT,
	DISPLAYCONFIG_ROTATION,
	DISPLAYCONFIG_SCALING, DISPLAYCONFIG_SCANLINE_ORDERING,
	DISPLAYCONFIG_VIDEO_OUTPUT_TECHNOLOGY,
} from "./enums.js";
import {CCHFORMNAME, ELF_VENDOR_SIZE, LF_FACESIZE, LF_FULLFACESIZE, MM_MAX_AXES_NAMELEN, MM_MAX_NUMAXES} from "./constants.js";

// @formatter: off
export const DRAWPATRECT = struct({
	ptPosition : POINT, // POINT
	ptSize     : POINT, // POINT
	wStyle     : WORD,  // WORD
	wPattern   : WORD,  // WORD
});
export const PDRAWPATRECT = pointer(DRAWPATRECT);

export const PSINJECTDATA = struct({
	DataBytes      : DWORD, // DWORD
	InjectionPoint : WORD,  // WORD
	PageNumber     : WORD,  // WORD
});
export const PPSINJECTDATA = pointer(PSINJECTDATA);

export const PSFEATURE_OUTPUT = struct({
	bPageIndependent : BOOL, // BOOL
	bSetPageDevice   : BOOL, // BOOL
});
export const PPSFEATURE_OUTPUT = pointer(PSFEATURE_OUTPUT);

export const PSFEATURE_CUSTPAPER = struct({
	lOrientation  : LONG, // LONG
	lWidth        : LONG, // LONG
	lHeight       : LONG, // LONG
	lWidthOffset  : LONG, // LONG
	lHeightOffset : LONG, // LONG
});
export const PPSFEATURE_CUSTPAPER = pointer(PSFEATURE_CUSTPAPER);

export const XFORM = struct({
	eM11 : FLOAT, // FLOAT
	eM12 : FLOAT, // FLOAT
	eM21 : FLOAT, // FLOAT
	eM22 : FLOAT, // FLOAT
	eDx  : FLOAT, // FLOAT
	eDy  : FLOAT, // FLOAT
});
export const PXFORM = pointer(XFORM);
export const LPXFORM = pointer(XFORM);

export const BITMAP = struct({
	bmType       : LONG,   // LONG
	bmWidth      : LONG,   // LONG
	bmHeight     : LONG,   // LONG
	bmWidthBytes : LONG,   // LONG
	bmPlanes     : WORD,   // WORD
	bmBitsPixel  : WORD,   // WORD
	bmBits       : LPVOID, // LPVOID
});
export const PBITMAP = pointer(BITMAP);
export const NPBITMAP = pointer(BITMAP);
export const LPBITMAP = pointer(BITMAP);

export const RGBTRIPLE = struct({
	rgbtBlue  : BYTE, // BYTE
	rgbtGreen : BYTE, // BYTE
	rgbtRed   : BYTE, // BYTE
});
export const PRGBTRIPLE = pointer(RGBTRIPLE);
export const NPRGBTRIPLE = pointer(RGBTRIPLE);
export const LPRGBTRIPLE = pointer(RGBTRIPLE);

export const RGBQUAD = struct({
	rgbBlue     : BYTE, // BYTE
	rgbGreen    : BYTE, // BYTE
	rgbRed      : BYTE, // BYTE
	rgbReserved : BYTE, // BYTE
});
export const LPRGBQUAD = pointer(RGBQUAD);

export const CIEXYZ = struct({
	ciexyzX : FXPT2DOT30, // FXPT2DOT30
	ciexyzY : FXPT2DOT30, // FXPT2DOT30
	ciexyzZ : FXPT2DOT30, // FXPT2DOT30
});
export const LPCIEXYZ = pointer(CIEXYZ);

export const CIEXYZTRIPLE = struct({
	ciexyzRed   : CIEXYZ, // CIEXYZ
	ciexyzGreen : CIEXYZ, // CIEXYZ
	ciexyzBlue  : CIEXYZ, // CIEXYZ
});
export const LPCIEXYZTRIPLE = pointer(CIEXYZTRIPLE);

export const LOGCOLORSPACEA = struct({
	lcsSignature  : DWORD,                           // DWORD
	lcsVersion    : DWORD,                           // DWORD
	lcsSize       : DWORD,                           // DWORD
	lcsCSType     : LCSCSTYPE,                       // LCSCSTYPE
	lcsIntent     : LCSGAMUTMATCH,                   // LCSGAMUTMATCH
	lcsEndpoints  : CIEXYZTRIPLE,                    // CIEXYZTRIPLE
	lcsGammaRed   : DWORD,                           // DWORD
	lcsGammaGreen : DWORD,                           // DWORD
	lcsGammaBlue  : DWORD,                           // DWORD
	lcsFilename   : array(CHAR, MAX_PATH, "String"), // CHAR
});
export const LPLOGCOLORSPACEA = pointer(LOGCOLORSPACEA);

export const LOGCOLORSPACEW = struct({
	lcsSignature  : DWORD,                            // DWORD
	lcsVersion    : DWORD,                            // DWORD
	lcsSize       : DWORD,                            // DWORD
	lcsCSType     : LCSCSTYPE,                        // LCSCSTYPE
	lcsIntent     : LCSGAMUTMATCH,                    // LCSGAMUTMATCH
	lcsEndpoints  : CIEXYZTRIPLE,                     // CIEXYZTRIPLE
	lcsGammaRed   : DWORD,                            // DWORD
	lcsGammaGreen : DWORD,                            // DWORD
	lcsGammaBlue  : DWORD,                            // DWORD
	lcsFilename   : array(WCHAR, MAX_PATH, "String"), // WCHAR
});
export const LPLOGCOLORSPACEW = pointer(LOGCOLORSPACEW);
export const LOGCOLORSPACE = LOGCOLORSPACEW;
export const LPLOGCOLORSPACE = LPLOGCOLORSPACEW;

export const BITMAPCOREHEADER = struct({
	bcSize     : DWORD, // DWORD
	bcWidth    : WORD,  // WORD
	bcHeight   : WORD,  // WORD
	bcPlanes   : WORD,  // WORD
	bcBitCount : WORD,  // WORD
});
export const LPBITMAPCOREHEADER = pointer(BITMAPCOREHEADER);
export const PBITMAPCOREHEADER = pointer(BITMAPCOREHEADER);

export const BITMAPINFOHEADER = struct({
	biSize          : DWORD, // DWORD
	biWidth         : LONG,  // LONG
	biHeight        : LONG,  // LONG
	biPlanes        : WORD,  // WORD
	biBitCount      : WORD,  // WORD
	biCompression   : DWORD, // DWORD
	biSizeImage     : DWORD, // DWORD
	biXPelsPerMeter : LONG,  // LONG
	biYPelsPerMeter : LONG,  // LONG
	biClrUsed       : DWORD, // DWORD
	biClrImportant  : DWORD, // DWORD
});
export const LPBITMAPINFOHEADER = pointer(BITMAPINFOHEADER);
export const PBITMAPINFOHEADER = pointer(BITMAPINFOHEADER);

export const BITMAPV4HEADER = struct({
	bV4Size          : DWORD,        // DWORD
	bV4Width         : LONG,         // LONG
	bV4Height        : LONG,         // LONG
	bV4Planes        : WORD,         // WORD
	bV4BitCount      : WORD,         // WORD
	bV4V4Compression : DWORD,        // DWORD
	bV4SizeImage     : DWORD,        // DWORD
	bV4XPelsPerMeter : LONG,         // LONG
	bV4YPelsPerMeter : LONG,         // LONG
	bV4ClrUsed       : DWORD,        // DWORD
	bV4ClrImportant  : DWORD,        // DWORD
	bV4RedMask       : DWORD,        // DWORD
	bV4GreenMask     : DWORD,        // DWORD
	bV4BlueMask      : DWORD,        // DWORD
	bV4AlphaMask     : DWORD,        // DWORD
	bV4CSType        : DWORD,        // DWORD
	bV4Endpoints     : CIEXYZTRIPLE, // CIEXYZTRIPLE
	bV4GammaRed      : DWORD,        // DWORD
	bV4GammaGreen    : DWORD,        // DWORD
	bV4GammaBlue     : DWORD,        // DWORD
});
export const LPBITMAPV4HEADER = pointer(BITMAPV4HEADER);
export const PBITMAPV4HEADER = pointer(BITMAPV4HEADER);

export const BITMAPV5HEADER = struct({
	bV5Size          : DWORD,        // DWORD
	bV5Width         : LONG,         // LONG
	bV5Height        : LONG,         // LONG
	bV5Planes        : WORD,         // WORD
	bV5BitCount      : WORD,         // WORD
	bV5Compression   : DWORD,        // DWORD
	bV5SizeImage     : DWORD,        // DWORD
	bV5XPelsPerMeter : LONG,         // LONG
	bV5YPelsPerMeter : LONG,         // LONG
	bV5ClrUsed       : DWORD,        // DWORD
	bV5ClrImportant  : DWORD,        // DWORD
	bV5RedMask       : DWORD,        // DWORD
	bV5GreenMask     : DWORD,        // DWORD
	bV5BlueMask      : DWORD,        // DWORD
	bV5AlphaMask     : DWORD,        // DWORD
	bV5CSType        : DWORD,        // DWORD
	bV5Endpoints     : CIEXYZTRIPLE, // CIEXYZTRIPLE
	bV5GammaRed      : DWORD,        // DWORD
	bV5GammaGreen    : DWORD,        // DWORD
	bV5GammaBlue     : DWORD,        // DWORD
	bV5Intent        : DWORD,        // DWORD
	bV5ProfileData   : DWORD,        // DWORD
	bV5ProfileSize   : DWORD,        // DWORD
	bV5Reserved      : DWORD,        // DWORD
});
export const LPBITMAPV5HEADER = pointer(BITMAPV5HEADER);
export const PBITMAPV5HEADER = pointer(BITMAPV5HEADER);

export const BITMAPINFO = struct({
	bmiHeader : BITMAPINFOHEADER,  // BITMAPINFOHEADER
	bmiColors : array(RGBQUAD, 1), // RGBQUAD
});
export const LPBITMAPINFO = pointer(BITMAPINFO);
export const PBITMAPINFO = pointer(BITMAPINFO);

export const BITMAPCOREINFO = struct({
	bmciHeader : BITMAPCOREHEADER,    // BITMAPCOREHEADER
	bmciColors : array(RGBTRIPLE, 1), // RGBTRIPLE
});
export const LPBITMAPCOREINFO = pointer(BITMAPCOREINFO);
export const PBITMAPCOREINFO = pointer(BITMAPCOREINFO);

export const BITMAPFILEHEADER = struct({
	bfType      : WORD,  // WORD
	bfSize      : DWORD, // DWORD
	bfReserved1 : WORD,  // WORD
	bfReserved2 : WORD,  // WORD
	bfOffBits   : DWORD, // DWORD
});
export const LPBITMAPFILEHEADER = pointer(BITMAPFILEHEADER);
export const PBITMAPFILEHEADER = pointer(BITMAPFILEHEADER);

export const FONTSIGNATURE = struct({
	fsUsb : array(DWORD, 4), // DWORD
	fsCsb : array(DWORD, 2), // DWORD
});
export const PFONTSIGNATURE = pointer(FONTSIGNATURE);
export const LPFONTSIGNATURE = pointer(FONTSIGNATURE);

export const CHARSETINFO = struct({
	ciCharset : UINT,          // UINT
	ciACP     : UINT,          // UINT
	fs        : FONTSIGNATURE, // FONTSIGNATURE
});
export const PCHARSETINFO = pointer(CHARSETINFO);
export const NPCHARSETINFO = pointer(CHARSETINFO);
export const LPCHARSETINFO = pointer(CHARSETINFO);

export const LOCALESIGNATURE = struct({
	lsUsb          : array(DWORD, 4), // DWORD
	lsCsbDefault   : array(DWORD, 2), // DWORD
	lsCsbSupported : array(DWORD, 2), // DWORD
});
export const PLOCALESIGNATURE = pointer(LOCALESIGNATURE);
export const LPLOCALESIGNATURE = pointer(LOCALESIGNATURE);

export const HANDLETABLE = struct({
	objectHandle : array(HGDIOBJ, 1), // HGDIOBJ
});
export const PHANDLETABLE = pointer(HANDLETABLE);
export const LPHANDLETABLE = pointer(HANDLETABLE);

export const METARECORD = struct({
	rdSize     : DWORD,          // DWORD
	rdFunction : WORD,           // WORD
	rdParm     : array(WORD, 1), // WORD
});
export const PMETARECORD = pointer(METARECORD);
export const LPMETARECORD = pointer(METARECORD);

export const METAFILEPICT = struct({
	mm   : LONG,      // LONG
	xExt : LONG,      // LONG
	yExt : LONG,      // LONG
	hMF  : HMETAFILE, // HMETAFILE
});
export const LPMETAFILEPICT = pointer(METAFILEPICT);

export const METAHEADER = struct({
	mtType         : WORD,  // WORD
	mtHeaderSize   : WORD,  // WORD
	mtVersion      : WORD,  // WORD
	mtSize         : DWORD, // DWORD
	mtNoObjects    : WORD,  // WORD
	mtMaxRecord    : DWORD, // DWORD
	mtNoParameters : WORD,  // WORD
});
export const PMETAHEADER = pointer(METAHEADER);
export const LPMETAHEADER = pointer(METAHEADER);

export const ENHMETARECORD = struct({
	iType : DWORD,           // DWORD // Record type EMR_XXX
	nSize : DWORD,           // DWORD // Record size in bytes
	dParm : array(DWORD, 1), // DWORD // Parameters
});
export const PENHMETARECORD = pointer(ENHMETARECORD);
export const LPENHMETARECORD = pointer(ENHMETARECORD);

export const ENHMETAHEADER = struct({
	iType          : DWORD, // DWORD
	nSize          : DWORD, // DWORD
	rclBounds      : RECTL, // RECTL
	rclFrame       : RECTL, // RECTL
	dSignature     : DWORD, // DWORD
	nVersion       : DWORD, // DWORD
	nBytes         : DWORD, // DWORD
	nRecords       : DWORD, // DWORD
	nHandles       : WORD,  // WORD
	sReserved      : WORD,  // WORD
	nDescription   : DWORD, // DWORD
	offDescription : DWORD, // DWORD
	nPalEntries    : DWORD, // DWORD
	szlDevice      : SIZEL, // SIZEL
	szlMillimeters : SIZEL, // SIZEL
	cbPixelFormat  : DWORD, // DWORD
	offPixelFormat : DWORD, // DWORD
	bOpenGL        : DWORD, // DWORD
	szlMicrometers : SIZEL, // SIZEL
});
export const PENHMETAHEADER = pointer(ENHMETAHEADER);
export const LPENHMETAHEADER = pointer(ENHMETAHEADER);

export const TEXTMETRICA = struct({
	tmHeight           : LONG, // LONG
	tmAscent           : LONG, // LONG
	tmDescent          : LONG, // LONG
	tmInternalLeading  : LONG, // LONG
	tmExternalLeading  : LONG, // LONG
	tmAveCharWidth     : LONG, // LONG
	tmMaxCharWidth     : LONG, // LONG
	tmWeight           : LONG, // LONG
	tmOverhang         : LONG, // LONG
	tmDigitizedAspectX : LONG, // LONG
	tmDigitizedAspectY : LONG, // LONG
	tmFirstChar        : BYTE, // BYTE
	tmLastChar         : BYTE, // BYTE
	tmDefaultChar      : BYTE, // BYTE
	tmBreakChar        : BYTE, // BYTE
	tmItalic           : BYTE, // BYTE
	tmUnderlined       : BYTE, // BYTE
	tmStruckOut        : BYTE, // BYTE
	tmPitchAndFamily   : BYTE, // BYTE
	tmCharSet          : BYTE, // BYTE
});
export const PTEXTMETRICA = pointer(TEXTMETRICA);
export const NPTEXTMETRICA = pointer(TEXTMETRICA);
export const LPTEXTMETRICA = pointer(TEXTMETRICA);

export const TEXTMETRICW = struct({
	tmHeight           : LONG,  // LONG
	tmAscent           : LONG,  // LONG
	tmDescent          : LONG,  // LONG
	tmInternalLeading  : LONG,  // LONG
	tmExternalLeading  : LONG,  // LONG
	tmAveCharWidth     : LONG,  // LONG
	tmMaxCharWidth     : LONG,  // LONG
	tmWeight           : LONG,  // LONG
	tmOverhang         : LONG,  // LONG
	tmDigitizedAspectX : LONG,  // LONG
	tmDigitizedAspectY : LONG,  // LONG
	tmFirstChar        : WCHAR, // WCHAR
	tmLastChar         : WCHAR, // WCHAR
	tmDefaultChar      : WCHAR, // WCHAR
	tmBreakChar        : WCHAR, // WCHAR
	tmItalic           : BYTE,  // BYTE
	tmUnderlined       : BYTE,  // BYTE
	tmStruckOut        : BYTE,  // BYTE
	tmPitchAndFamily   : BYTE,  // BYTE
	tmCharSet          : BYTE,  // BYTE
});
export const PTEXTMETRICW = pointer(TEXTMETRICW);
export const NPTEXTMETRICW = pointer(TEXTMETRICW);
export const LPTEXTMETRICW = pointer(TEXTMETRICW);
export const TEXTMETRIC = TEXTMETRICW;
export const PTEXTMETRIC = PTEXTMETRICW;
export const NPTEXTMETRIC = NPTEXTMETRICW;
export const LPTEXTMETRIC = LPTEXTMETRICW;

export const NEWTEXTMETRICA = struct({
	tmHeight           : LONG,  // LONG
	tmAscent           : LONG,  // LONG
	tmDescent          : LONG,  // LONG
	tmInternalLeading  : LONG,  // LONG
	tmExternalLeading  : LONG,  // LONG
	tmAveCharWidth     : LONG,  // LONG
	tmMaxCharWidth     : LONG,  // LONG
	tmWeight           : LONG,  // LONG
	tmOverhang         : LONG,  // LONG
	tmDigitizedAspectX : LONG,  // LONG
	tmDigitizedAspectY : LONG,  // LONG
	tmFirstChar        : BYTE,  // BYTE
	tmLastChar         : BYTE,  // BYTE
	tmDefaultChar      : BYTE,  // BYTE
	tmBreakChar        : BYTE,  // BYTE
	tmItalic           : BYTE,  // BYTE
	tmUnderlined       : BYTE,  // BYTE
	tmStruckOut        : BYTE,  // BYTE
	tmPitchAndFamily   : BYTE,  // BYTE
	tmCharSet          : BYTE,  // BYTE
	ntmFlags           : DWORD, // DWORD
	ntmSizeEM          : UINT,  // UINT
	ntmCellHeight      : UINT,  // UINT
	ntmAvgWidth        : UINT,  // UINT
});
export const PNEWTEXTMETRICA = pointer(NEWTEXTMETRICA);
export const NPNEWTEXTMETRICA = pointer(NEWTEXTMETRICA);
export const LPNEWTEXTMETRICA = pointer(NEWTEXTMETRICA);

export const NEWTEXTMETRICW = struct({
	tmHeight           : LONG,  // LONG
	tmAscent           : LONG,  // LONG
	tmDescent          : LONG,  // LONG
	tmInternalLeading  : LONG,  // LONG
	tmExternalLeading  : LONG,  // LONG
	tmAveCharWidth     : LONG,  // LONG
	tmMaxCharWidth     : LONG,  // LONG
	tmWeight           : LONG,  // LONG
	tmOverhang         : LONG,  // LONG
	tmDigitizedAspectX : LONG,  // LONG
	tmDigitizedAspectY : LONG,  // LONG
	tmFirstChar        : WCHAR, // WCHAR
	tmLastChar         : WCHAR, // WCHAR
	tmDefaultChar      : WCHAR, // WCHAR
	tmBreakChar        : WCHAR, // WCHAR
	tmItalic           : BYTE,  // BYTE
	tmUnderlined       : BYTE,  // BYTE
	tmStruckOut        : BYTE,  // BYTE
	tmPitchAndFamily   : BYTE,  // BYTE
	tmCharSet          : BYTE,  // BYTE
	ntmFlags           : DWORD, // DWORD
	ntmSizeEM          : UINT,  // UINT
	ntmCellHeight      : UINT,  // UINT
	ntmAvgWidth        : UINT,  // UINT
});
export const PNEWTEXTMETRICW = pointer(NEWTEXTMETRICW);
export const NPNEWTEXTMETRICW = pointer(NEWTEXTMETRICW);
export const LPNEWTEXTMETRICW = pointer(NEWTEXTMETRICW);
export const NEWTEXTMETRIC = NEWTEXTMETRICW;
export const PNEWTEXTMETRIC = PNEWTEXTMETRICW;
export const NPNEWTEXTMETRIC = NPNEWTEXTMETRICW;
export const LPNEWTEXTMETRIC = LPNEWTEXTMETRICW;

export const NEWTEXTMETRICEXA = struct({
	ntmTm      : NEWTEXTMETRICA, // NEWTEXTMETRICA
	ntmFontSig : FONTSIGNATURE,  // FONTSIGNATURE
});

export const NEWTEXTMETRICEXW = struct({
	ntmTm      : NEWTEXTMETRICW, // NEWTEXTMETRICW
	ntmFontSig : FONTSIGNATURE,  // FONTSIGNATURE
});
export const NEWTEXTMETRICEX = NEWTEXTMETRICEXW;

export const PELARRAY = struct({
	paXCount : LONG, // LONG
	paYCount : LONG, // LONG
	paXExt   : LONG, // LONG
	paYExt   : LONG, // LONG
	paRGBs   : BYTE, // BYTE
});
export const PPELARRAY = pointer(PELARRAY);
export const NPPELARRAY = pointer(PELARRAY);
export const LPPELARRAY = pointer(PELARRAY);

export const LOGBRUSH = struct({
	lbStyle : UINT,      // UINT
	lbColor : COLORREF,  // COLORREF
	lbHatch : ULONG_PTR, // ULONG_PTR
});
export const PLOGBRUSH = pointer(LOGBRUSH);
export const NPLOGBRUSH = pointer(LOGBRUSH);
export const LPLOGBRUSH = pointer(LOGBRUSH);

export const PATTERN = LOGBRUSH;
export const PPATTERN = pointer(PATTERN);
export const NPPATTERN = pointer(PATTERN);
export const LPPATTERN = pointer(PATTERN);

export const LOGBRUSH32 = struct({
	lbStyle : UINT,     // UINT
	lbColor : COLORREF, // COLORREF
	lbHatch : ULONG,    // ULONG
});
export const PLOGBRUSH32 = pointer(LOGBRUSH32);
export const NPLOGBRUSH32 = pointer(LOGBRUSH32);
export const LPLOGBRUSH32 = pointer(LOGBRUSH32);

export const LOGPEN = struct({
	lopnStyle : UINT,     // UINT
	lopnWidth : POINT,    // POINT
	lopnColor : COLORREF, // COLORREF
});
export const PLOGPEN = pointer(LOGPEN);
export const NPLOGPEN = pointer(LOGPEN);
export const LPLOGPEN = pointer(LOGPEN);

export const EXTLOGPEN = struct({
	elpPenStyle   : DWORD,           // DWORD
	elpWidth      : DWORD,           // DWORD
	elpBrushStyle : UINT,            // UINT
	elpColor      : COLORREF,        // COLORREF
	elpHatch      : ULONG_PTR,       // ULONG_PTR
	elpNumEntries : DWORD,           // DWORD
	elpStyleEntry : array(DWORD, 1), // DWORD
});
export const PEXTLOGPEN = pointer(EXTLOGPEN);
export const NPEXTLOGPEN = pointer(EXTLOGPEN);
export const LPEXTLOGPEN = pointer(EXTLOGPEN);

export const EXTLOGPEN32 = struct({
	elpPenStyle   : DWORD,           // DWORD
	elpWidth      : DWORD,           // DWORD
	elpBrushStyle : UINT,            // UINT
	elpColor      : COLORREF,        // COLORREF
	elpHatch      : ULONG,           // ULONG
	elpNumEntries : DWORD,           // DWORD
	elpStyleEntry : array(DWORD, 1), // DWORD
});
export const PEXTLOGPEN32 = pointer(EXTLOGPEN32);
export const NPEXTLOGPEN32 = pointer(EXTLOGPEN32);
export const LPEXTLOGPEN32 = pointer(EXTLOGPEN32);

export const PALETTEENTRY = struct({
	peRed   : BYTE, // BYTE
	peGreen : BYTE, // BYTE
	peBlue  : BYTE, // BYTE
	peFlags : BYTE, // BYTE
});
export const PPALETTEENTRY = pointer(PALETTEENTRY);
export const LPPALETTEENTRY = pointer(PALETTEENTRY);

export const LOGPALETTE = struct({
	palVersion    : WORD,                   // WORD
	palNumEntries : WORD,                   // WORD
	palPalEntry   : array(PALETTEENTRY, 1), // PALETTEENTRY
});
export const PLOGPALETTE = pointer(LOGPALETTE);
export const NPLOGPALETTE = pointer(LOGPALETTE);
export const LPLOGPALETTE = pointer(LOGPALETTE);

export const LOGFONTA = struct({
	lfHeight         : LONG,                               // LONG
	lfWidth          : LONG,                               // LONG
	lfEscapement     : LONG,                               // LONG
	lfOrientation    : LONG,                               // LONG
	lfWeight         : LONG,                               // LONG
	lfItalic         : BYTE,                               // BYTE
	lfUnderline      : BYTE,                               // BYTE
	lfStrikeOut      : BYTE,                               // BYTE
	lfCharSet        : BYTE,                               // BYTE
	lfOutPrecision   : BYTE,                               // BYTE
	lfClipPrecision  : BYTE,                               // BYTE
	lfQuality        : BYTE,                               // BYTE
	lfPitchAndFamily : BYTE,                               // BYTE
	lfFaceName       : array(CHAR, LF_FACESIZE, "String"), // CHAR
});
export const PLOGFONTA = pointer(LOGFONTA);
export const NPLOGFONTA = pointer(LOGFONTA);
export const LPLOGFONTA = pointer(LOGFONTA);

export const LOGFONTW = struct({
	lfHeight         : LONG,                                // LONG
	lfWidth          : LONG,                                // LONG
	lfEscapement     : LONG,                                // LONG
	lfOrientation    : LONG,                                // LONG
	lfWeight         : LONG,                                // LONG
	lfItalic         : BYTE,                                // BYTE
	lfUnderline      : BYTE,                                // BYTE
	lfStrikeOut      : BYTE,                                // BYTE
	lfCharSet        : BYTE,                                // BYTE
	lfOutPrecision   : BYTE,                                // BYTE
	lfClipPrecision  : BYTE,                                // BYTE
	lfQuality        : BYTE,                                // BYTE
	lfPitchAndFamily : BYTE,                                // BYTE
	lfFaceName       : array(WCHAR, LF_FACESIZE, "String"), // WCHAR
});
export const PLOGFONTW = pointer(LOGFONTW);
export const NPLOGFONTW = pointer(LOGFONTW);
export const LPLOGFONTW = pointer(LOGFONTW);
export const LOGFONT = LOGFONTW;
export const PLOGFONT = PLOGFONTW;
export const NPLOGFONT = NPLOGFONTW;
export const LPLOGFONT = LPLOGFONTW;

export const ENUMLOGFONTA = struct({
	elfLogFont  : LOGFONTA,                     // LOGFONTA
	elfFullName : array(BYTE, LF_FULLFACESIZE), // BYTE
	elfStyle    : array(BYTE, LF_FACESIZE),     // BYTE
});
export const LPENUMLOGFONTA = pointer(ENUMLOGFONTA);

export const ENUMLOGFONTW = struct({
	elfLogFont  : LOGFONTW,                                // LOGFONTW
	elfFullName : array(WCHAR, LF_FULLFACESIZE, "String"), // WCHAR
	elfStyle    : array(WCHAR, LF_FACESIZE, "String"),     // WCHAR
});
export const LPENUMLOGFONTW = pointer(ENUMLOGFONTW);
export const ENUMLOGFONT = ENUMLOGFONTW;
export const LPENUMLOGFONT = LPENUMLOGFONTW;

export const ENUMLOGFONTEXA = struct({
	elfLogFont  : LOGFONTA,                     // LOGFONTA
	elfFullName : array(BYTE, LF_FULLFACESIZE), // BYTE
	elfStyle    : array(BYTE, LF_FACESIZE),     // BYTE
	elfScript   : array(BYTE, LF_FACESIZE),     // BYTE
});
export const LPENUMLOGFONTEXA = pointer(ENUMLOGFONTEXA);

export const ENUMLOGFONTEXW = struct({
	elfLogFont  : LOGFONTW,                                // LOGFONTW
	elfFullName : array(WCHAR, LF_FULLFACESIZE, "String"), // WCHAR
	elfStyle    : array(WCHAR, LF_FACESIZE, "String"),     // WCHAR
	elfScript   : array(WCHAR, LF_FACESIZE, "String"),     // WCHAR
});
export const LPENUMLOGFONTEXW = pointer(ENUMLOGFONTEXW);
export const ENUMLOGFONTEX = ENUMLOGFONTEXW;
export const LPENUMLOGFONTEX = LPENUMLOGFONTEXW;

export const PANOSE = struct({
	bFamilyType      : BYTE, // BYTE
	bSerifStyle      : BYTE, // BYTE
	bWeight          : BYTE, // BYTE
	bProportion      : BYTE, // BYTE
	bContrast        : BYTE, // BYTE
	bStrokeVariation : BYTE, // BYTE
	bArmStyle        : BYTE, // BYTE
	bLetterform      : BYTE, // BYTE
	bMidline         : BYTE, // BYTE
	bXHeight         : BYTE, // BYTE
});
export const LPPANOSE = pointer(PANOSE);

export const EXTLOGFONTA = struct({
	elfLogFont   : LOGFONTA,                     // LOGFONTA
	elfFullName  : array(BYTE, LF_FULLFACESIZE), // BYTE
	elfStyle     : array(BYTE, LF_FACESIZE),     // BYTE
	elfVersion   : DWORD,                        // DWORD
	elfStyleSize : DWORD,                        // DWORD
	elfMatch     : DWORD,                        // DWORD
	elfReserved  : DWORD,                        // DWORD
	elfVendorId  : array(BYTE, ELF_VENDOR_SIZE), // BYTE
	elfCulture   : DWORD,                        // DWORD
	elfPanose    : PANOSE,                       // PANOSE
});
export const PEXTLOGFONTA = pointer(EXTLOGFONTA);
export const NPEXTLOGFONTA = pointer(EXTLOGFONTA);
export const LPEXTLOGFONTA = pointer(EXTLOGFONTA);

export const EXTLOGFONTW = struct({
	elfLogFont   : LOGFONTW,                                // LOGFONTW
	elfFullName  : array(WCHAR, LF_FULLFACESIZE, "String"), // WCHAR
	elfStyle     : array(WCHAR, LF_FACESIZE, "String"),     // WCHAR
	elfVersion   : DWORD,                                   // DWORD
	elfStyleSize : DWORD,                                   // DWORD
	elfMatch     : DWORD,                                   // DWORD
	elfReserved  : DWORD,                                   // DWORD
	elfVendorId  : array(BYTE, ELF_VENDOR_SIZE),            // BYTE
	elfCulture   : DWORD,                                   // DWORD
	elfPanose    : PANOSE,                                  // PANOSE
});
export const PEXTLOGFONTW = pointer(EXTLOGFONTW);
export const NPEXTLOGFONTW = pointer(EXTLOGFONTW);
export const LPEXTLOGFONTW = pointer(EXTLOGFONTW);
export const EXTLOGFONT = EXTLOGFONTW;
export const PEXTLOGFONT = PEXTLOGFONTW;
export const NPEXTLOGFONT = NPEXTLOGFONTW;
export const LPEXTLOGFONT = LPEXTLOGFONTW;

export const DEVMODEA = struct({
	dmDeviceName       : array(BYTE, CCHDEVICENAME), // BYTE
	dmSpecVersion      : WORD,                       // WORD
	dmDriverVersion    : WORD,                       // WORD
	dmSize             : WORD,                       // WORD
	dmDriverExtra      : WORD,                       // WORD
	dmFields           : DWORD,                      // DWORD
	u                  : union({
		s  : struct({
			dmOrientation   : short, // short
			dmPaperSize     : short, // short
			dmPaperLength   : short, // short
			dmPaperWidth    : short, // short
			dmScale         : short, // short
			dmCopies        : short, // short
			dmDefaultSource : short, // short
			dmPrintQuality  : short, // short
		}), // struct
		s2 : struct({
			dmPosition           : POINTL, // POINTL
			dmDisplayOrientation : DWORD,  // DWORD
			dmDisplayFixedOutput : DWORD,  // DWORD
		}), // struct
	}), // union
	dmColor            : short,                      // short
	dmDuplex           : short,                      // short
	dmYResolution      : short,                      // short
	dmTTOption         : short,                      // short
	dmCollate          : short,                      // short
	dmFormName         : array(BYTE, CCHFORMNAME),   // BYTE
	dmLogPixels        : WORD,                       // WORD
	dmBitsPerPel       : DWORD,                      // DWORD
	dmPelsWidth        : DWORD,                      // DWORD
	dmPelsHeight       : DWORD,                      // DWORD
	u2                 : union({
		dmDisplayFlags : DWORD, // DWORD
		dmNup          : DWORD, // DWORD
	}), // union
	dmDisplayFrequency : DWORD,                      // DWORD
	dmICMMethod        : DWORD,                      // DWORD
	dmICMIntent        : DWORD,                      // DWORD
	dmMediaType        : DWORD,                      // DWORD
	dmDitherType       : DWORD,                      // DWORD
	dmReserved1        : DWORD,                      // DWORD
	dmReserved2        : DWORD,                      // DWORD
	dmPanningWidth     : DWORD,                      // DWORD
	dmPanningHeight    : DWORD,                      // DWORD
});
export const PDEVMODEA = pointer(DEVMODEA);
export const NPDEVMODEA = pointer(DEVMODEA);
export const LPDEVMODEA = pointer(DEVMODEA);

export const DEVMODEW = struct({
	dmDeviceName       : array(WCHAR, CCHDEVICENAME, "String"), // WCHAR
	dmSpecVersion      : WORD,                                  // WORD
	dmDriverVersion    : WORD,                                  // WORD
	dmSize             : WORD,                                  // WORD
	dmDriverExtra      : WORD,                                  // WORD
	dmFields           : DWORD,                                 // DWORD
	u                  : union({
		s  : struct({
			dmOrientation   : short, // short
			dmPaperSize     : short, // short
			dmPaperLength   : short, // short
			dmPaperWidth    : short, // short
			dmScale         : short, // short
			dmCopies        : short, // short
			dmDefaultSource : short, // short
			dmPrintQuality  : short, // short
		}), // struct
		s2 : struct({
			dmPosition           : POINTL, // POINTL
			dmDisplayOrientation : DWORD,  // DWORD
			dmDisplayFixedOutput : DWORD,  // DWORD
		}), // struct
	}), // union
	dmColor            : short,                                 // short
	dmDuplex           : short,                                 // short
	dmYResolution      : short,                                 // short
	dmTTOption         : short,                                 // short
	dmCollate          : short,                                 // short
	dmFormName         : array(WCHAR, CCHFORMNAME, "String"),   // WCHAR
	dmLogPixels        : WORD,                                  // WORD
	dmBitsPerPel       : DWORD,                                 // DWORD
	dmPelsWidth        : DWORD,                                 // DWORD
	dmPelsHeight       : DWORD,                                 // DWORD
	u2                 : union({
		dmDisplayFlags : DWORD, // DWORD
		dmNup          : DWORD, // DWORD
	}), // union
	dmDisplayFrequency : DWORD,                                 // DWORD
	dmICMMethod        : DWORD,                                 // DWORD
	dmICMIntent        : DWORD,                                 // DWORD
	dmMediaType        : DWORD,                                 // DWORD
	dmDitherType       : DWORD,                                 // DWORD
	dmReserved1        : DWORD,                                 // DWORD
	dmReserved2        : DWORD,                                 // DWORD
	dmPanningWidth     : DWORD,                                 // DWORD
	dmPanningHeight    : DWORD,                                 // DWORD
});
export const PDEVMODEW = pointer(DEVMODEW);
export const NPDEVMODEW = pointer(DEVMODEW);
export const LPDEVMODEW = pointer(DEVMODEW);
export const DEVMODE = DEVMODEW;     // typedef DEVMODEW DEVMODE;
export const PDEVMODE = PDEVMODEW;   // typedef PDEVMODEW PDEVMODE;
export const NPDEVMODE = NPDEVMODEW; // typedef NPDEVMODEW NPDEVMODE;
export const LPDEVMODE = LPDEVMODEW; // typedef LPDEVMODEW LPDEVMODE;

export const DISPLAY_DEVICEA = struct({
	cb           : DWORD,                      // DWORD
	DeviceName   : array(CHAR, 32, "String"),  // CHAR
	DeviceString : array(CHAR, 128, "String"), // CHAR
	StateFlags   : DWORD,                      // DWORD
	DeviceID     : array(CHAR, 128, "String"), // CHAR
	DeviceKey    : array(CHAR, 128, "String"), // CHAR
});
export const PDISPLAY_DEVICEA = pointer(DISPLAY_DEVICEA);
export const LPDISPLAY_DEVICEA = pointer(DISPLAY_DEVICEA);

export const DISPLAY_DEVICEW = struct({
	cb           : DWORD,                       // DWORD
	DeviceName   : array(WCHAR, 32, "String"),  // WCHAR
	DeviceString : array(WCHAR, 128, "String"), // WCHAR
	StateFlags   : DWORD,                       // DWORD
	DeviceID     : array(WCHAR, 128, "String"), // WCHAR
	DeviceKey    : array(WCHAR, 128, "String"), // WCHAR
});
export const PDISPLAY_DEVICEW = pointer(DISPLAY_DEVICEW);
export const LPDISPLAY_DEVICEW = pointer(DISPLAY_DEVICEW);
export const DISPLAY_DEVICE = DISPLAY_DEVICEW;
export const PDISPLAY_DEVICE = PDISPLAY_DEVICEW;
export const LPDISPLAY_DEVICE = LPDISPLAY_DEVICEW;

export const DISPLAYCONFIG_RATIONAL = struct({
	Numerator   : UINT32, // UINT32
	Denominator : UINT32, // UINT32
});

export const DISPLAYCONFIG_2DREGION = struct({
	cx : UINT32, // UINT32
	cy : UINT32, // UINT32
});

export const DISPLAYCONFIG_VIDEO_SIGNAL_INFO = struct({
	pixelRate        : UINT64,                          // UINT64
	hSyncFreq        : DISPLAYCONFIG_RATIONAL,          // DISPLAYCONFIG_RATIONAL
	vSyncFreq        : DISPLAYCONFIG_RATIONAL,          // DISPLAYCONFIG_RATIONAL
	activeSize       : DISPLAYCONFIG_2DREGION,          // DISPLAYCONFIG_2DREGION
	totalSize        : DISPLAYCONFIG_2DREGION,          // DISPLAYCONFIG_2DREGION
	u                : union({
		AdditionalSignalInfo : struct({
			videoStandard    : bitfield(UINT32, 16), // UINT32
			vSyncFreqDivider : bitfield(UINT32, 6),  // UINT32
			reserved         : bitfield(UINT32, 10), // UINT32
		}),
		videoStandard        : UINT32, // UINT32
	}),
	scanLineOrdering : DISPLAYCONFIG_SCANLINE_ORDERING, // DISPLAYCONFIG_SCANLINE_ORDERING
});

export const DISPLAYCONFIG_SOURCE_MODE = struct({
	width       : UINT32,                    // UINT32
	height      : UINT32,                    // UINT32
	pixelFormat : DISPLAYCONFIG_PIXELFORMAT, // DISPLAYCONFIG_PIXELFORMAT
	position    : POINTL,                    // POINTL
});

export const DISPLAYCONFIG_TARGET_MODE = struct({
	targetVideoSignalInfo : DISPLAYCONFIG_VIDEO_SIGNAL_INFO, // DISPLAYCONFIG_VIDEO_SIGNAL_INFO
});

export const DISPLAYCONFIG_DESKTOP_IMAGE_INFO = struct({
	PathSourceSize     : POINTL, // POINTL
	DesktopImageRegion : RECTL,  // RECTL
	DesktopImageClip   : RECTL,  // RECTL
});

export const DISPLAYCONFIG_MODE_INFO = struct({
	infoType  : DISPLAYCONFIG_MODE_INFO_TYPE, // DISPLAYCONFIG_MODE_INFO_TYPE
	id        : UINT32,                       // UINT32
	adapterId : LUID,                         // LUID
	u         : union({
		targetMode       : DISPLAYCONFIG_TARGET_MODE,        // DISPLAYCONFIG_TARGET_MODE
		sourceMode       : DISPLAYCONFIG_SOURCE_MODE,        // DISPLAYCONFIG_SOURCE_MODE
		desktopImageInfo : DISPLAYCONFIG_DESKTOP_IMAGE_INFO, // DISPLAYCONFIG_DESKTOP_IMAGE_INFO
	}), // union
});

export const DISPLAYCONFIG_PATH_SOURCE_INFO = struct({
	adapterId   : LUID,   // LUID
	id          : UINT32, // UINT32
	u           : union({
		modeInfoIdx : UINT32, // UINT32
		s           : struct({
			cloneGroupId      : bitfield(UINT32, 16), // UINT32
			sourceModeInfoIdx : bitfield(UINT32, 16), // UINT32
		}), // struct
	}), // union
	statusFlags : UINT32, // UINT32
});

export const DISPLAYCONFIG_PATH_TARGET_INFO = struct({
	adapterId        : LUID,                                  // LUID
	id               : UINT32,                                // UINT32
	u                : union({
		modeInfoIdx : UINT32, // UINT32
		s           : struct({
			desktopModeInfoIdx : bitfield(UINT32, 16), // UINT32
			targetModeInfoIdx  : bitfield(UINT32, 16), // UINT32
		}), // struct
	}), // union
	outputTechnology : DISPLAYCONFIG_VIDEO_OUTPUT_TECHNOLOGY, // DISPLAYCONFIG_VIDEO_OUTPUT_TECHNOLOGY
	rotation         : DISPLAYCONFIG_ROTATION,                // DISPLAYCONFIG_ROTATION
	scaling          : DISPLAYCONFIG_SCALING,                 // DISPLAYCONFIG_SCALING
	refreshRate      : DISPLAYCONFIG_RATIONAL,                // DISPLAYCONFIG_RATIONAL
	scanLineOrdering : DISPLAYCONFIG_SCANLINE_ORDERING,       // DISPLAYCONFIG_SCANLINE_ORDERING
	targetAvailable  : BOOL,                                  // BOOL
	statusFlags      : UINT32,                                // UINT32
});

export const DISPLAYCONFIG_PATH_INFO = struct({
	sourceInfo : DISPLAYCONFIG_PATH_SOURCE_INFO, // DISPLAYCONFIG_PATH_SOURCE_INFO
	targetInfo : DISPLAYCONFIG_PATH_TARGET_INFO, // DISPLAYCONFIG_PATH_TARGET_INFO
	flags      : UINT32,                         // UINT32
});

export const DISPLAYCONFIG_DEVICE_INFO_HEADER = struct({
	type      : DISPLAYCONFIG_DEVICE_INFO_TYPE, // DISPLAYCONFIG_DEVICE_INFO_TYPE
	size      : UINT32,                         // UINT32
	adapterId : LUID,                           // LUID
	id        : UINT32,                         // UINT32
});

export const DISPLAYCONFIG_SOURCE_DEVICE_NAME = struct({
	header            : DISPLAYCONFIG_DEVICE_INFO_HEADER,      // DISPLAYCONFIG_DEVICE_INFO_HEADER
	viewGdiDeviceName : array(WCHAR, CCHDEVICENAME, "String"), // WCHAR
});

export const DISPLAYCONFIG_TARGET_DEVICE_NAME_FLAGS = struct({
	u : union({
		s     : struct({
			friendlyNameFromEdid : bitfield(UINT32, 1),  // UINT32
			friendlyNameForced   : bitfield(UINT32, 1),  // UINT32
			edidIdsValid         : bitfield(UINT32, 1),  // UINT32
			reserved             : bitfield(UINT32, 29), // UINT32
		}), // struct
		value : UINT32, // UINT32
	}), // union
});

export const DISPLAYCONFIG_TARGET_DEVICE_NAME = struct({
	header                    : DISPLAYCONFIG_DEVICE_INFO_HEADER,       // DISPLAYCONFIG_DEVICE_INFO_HEADER
	flags                     : DISPLAYCONFIG_TARGET_DEVICE_NAME_FLAGS, // DISPLAYCONFIG_TARGET_DEVICE_NAME_FLAGS
	outputTechnology          : DISPLAYCONFIG_VIDEO_OUTPUT_TECHNOLOGY,  // DISPLAYCONFIG_VIDEO_OUTPUT_TECHNOLOGY
	edidManufactureId         : UINT16,                                 // UINT16
	edidProductCodeId         : UINT16,                                 // UINT16
	connectorInstance         : UINT32,                                 // UINT32
	monitorFriendlyDeviceName : array(WCHAR, 64, "String"),             // WCHAR
	monitorDevicePath         : array(WCHAR, 128, "String"),            // WCHAR
});

export const DISPLAYCONFIG_TARGET_PREFERRED_MODE = struct({
	header     : DISPLAYCONFIG_DEVICE_INFO_HEADER, // DISPLAYCONFIG_DEVICE_INFO_HEADER
	width      : UINT32,                           // UINT32
	height     : UINT32,                           // UINT32
	targetMode : DISPLAYCONFIG_TARGET_MODE,        // DISPLAYCONFIG_TARGET_MODE
});

export const DISPLAYCONFIG_ADAPTER_NAME = struct({
	header            : DISPLAYCONFIG_DEVICE_INFO_HEADER, // DISPLAYCONFIG_DEVICE_INFO_HEADER
	adapterDevicePath : array(WCHAR, 128, "String"),      // WCHAR
});

export const DISPLAYCONFIG_TARGET_BASE_TYPE = struct({
	header               : DISPLAYCONFIG_DEVICE_INFO_HEADER,      // DISPLAYCONFIG_DEVICE_INFO_HEADER
	baseOutputTechnology : DISPLAYCONFIG_VIDEO_OUTPUT_TECHNOLOGY, // DISPLAYCONFIG_VIDEO_OUTPUT_TECHNOLOGY
});

export const DISPLAYCONFIG_SET_TARGET_PERSISTENCE = struct({
	header : DISPLAYCONFIG_DEVICE_INFO_HEADER, // DISPLAYCONFIG_DEVICE_INFO_HEADER
	u      : union({
		s     : struct({
			bootPersistenceOn : bitfield(UINT32, 1),  // UINT32
			reserved          : bitfield(UINT32, 31), // UINT32
		}), // struct
		value : UINT32, // UINT32
	}), // union
});

export const DISPLAYCONFIG_SUPPORT_VIRTUAL_RESOLUTION = struct({
	header : DISPLAYCONFIG_DEVICE_INFO_HEADER, // DISPLAYCONFIG_DEVICE_INFO_HEADER
	s      : union({
		s     : struct({
			disableMonitorVirtualResolution : bitfield(UINT32, 1),  // UINT32
			reserved                        : bitfield(UINT32, 31), // UINT32
		}), // struct
		value : UINT32, // UINT32
	}), // union
});

export const DISPLAYCONFIG_GET_ADVANCED_COLOR_INFO = struct({
	header              : DISPLAYCONFIG_DEVICE_INFO_HEADER, // DISPLAYCONFIG_DEVICE_INFO_HEADER
	u                   : union({
		s     : struct({
			advancedColorSupported     : bitfield(UINT32, 1),  // UINT32 // A type of advanced color is supported
			advancedColorEnabled       : bitfield(UINT32, 1),  // UINT32 // A type of advanced color is enabled
			wideColorEnforced          : bitfield(UINT32, 1),  // UINT32 // Wide color gamut is enabled
			advancedColorForceDisabled : bitfield(UINT32, 1),  // UINT32 // Advanced color is force disabled due to system/OS policy
			reserved                   : bitfield(UINT32, 28), // UINT32
		}), // struct
		value : UINT32, // UINT32
	}), // union
	colorEncoding       : DISPLAYCONFIG_COLOR_ENCODING,     // DISPLAYCONFIG_COLOR_ENCODING
	bitsPerColorChannel : UINT32,                           // UINT32
});

export const DISPLAYCONFIG_SET_ADVANCED_COLOR_STATE = struct({
	header : DISPLAYCONFIG_DEVICE_INFO_HEADER, // DISPLAYCONFIG_DEVICE_INFO_HEADER
	u      : union({
		s     : struct({
			enableAdvancedColor : bitfield(UINT32, 1),  // UINT32
			reserved            : bitfield(UINT32, 31), // UINT32
		}), // struct
		value : UINT32, // UINT32
	}), // union
});

export const DISPLAYCONFIG_SDR_WHITE_LEVEL = struct({
	header        : DISPLAYCONFIG_DEVICE_INFO_HEADER, // DISPLAYCONFIG_DEVICE_INFO_HEADER
	SDRWhiteLevel : ULONG,                            // ULONG
});

export const RGNDATAHEADER = struct({
	dwSize   : DWORD, // DWORD
	iType    : DWORD, // DWORD
	nCount   : DWORD, // DWORD
	nRgnSize : DWORD, // DWORD
	rcBound  : RECT,  // RECT
});
export const PRGNDATAHEADER = pointer(RGNDATAHEADER);

export const RGNDATA = struct({
	rdh    : RGNDATAHEADER,            // RGNDATAHEADER
	Buffer : array(char, 1, "String"), // char
});
export const PRGNDATA = pointer(RGNDATA);
export const NPRGNDATA = pointer(RGNDATA);
export const LPRGNDATA = pointer(RGNDATA);

export const ABC = struct({
	abcA : int,  // int
	abcB : UINT, // UINT
	abcC : int,  // int
});
export const PABC = pointer(ABC);
export const NPABC = pointer(ABC);
export const LPABC = pointer(ABC);

export const ABCFLOAT = struct({
	abcfA : FLOAT, // FLOAT
	abcfB : FLOAT, // FLOAT
	abcfC : FLOAT, // FLOAT
});
export const PABCFLOAT = pointer(ABCFLOAT);
export const NPABCFLOAT = pointer(ABCFLOAT);
export const LPABCFLOAT = pointer(ABCFLOAT);

export const OUTLINETEXTMETRICA = struct({
	otmSize                : UINT,        // UINT
	otmTextMetrics         : TEXTMETRICA, // TEXTMETRICA
	otmFiller              : BYTE,        // BYTE
	otmPanoseNumber        : PANOSE,      // PANOSE
	otmfsSelection         : UINT,        // UINT
	otmfsType              : UINT,        // UINT
	otmsCharSlopeRise      : int,         // int
	otmsCharSlopeRun       : int,         // int
	otmItalicAngle         : int,         // int
	otmEMSquare            : UINT,        // UINT
	otmAscent              : int,         // int
	otmDescent             : int,         // int
	otmLineGap             : UINT,        // UINT
	otmsCapEmHeight        : UINT,        // UINT
	otmsXHeight            : UINT,        // UINT
	otmrcFontBox           : RECT,        // RECT
	otmMacAscent           : int,         // int
	otmMacDescent          : int,         // int
	otmMacLineGap          : UINT,        // UINT
	otmusMinimumPPEM       : UINT,        // UINT
	otmptSubscriptSize     : POINT,       // POINT
	otmptSubscriptOffset   : POINT,       // POINT
	otmptSuperscriptSize   : POINT,       // POINT
	otmptSuperscriptOffset : POINT,       // POINT
	otmsStrikeoutSize      : UINT,        // UINT
	otmsStrikeoutPosition  : int,         // int
	otmsUnderscoreSize     : int,         // int
	otmsUnderscorePosition : int,         // int
	otmpFamilyName         : PSTR,        // PSTR
	otmpFaceName           : PSTR,        // PSTR
	otmpStyleName          : PSTR,        // PSTR
	otmpFullName           : PSTR,        // PSTR
});
export const POUTLINETEXTMETRICA = pointer(OUTLINETEXTMETRICA);
export const NPOUTLINETEXTMETRICA = pointer(OUTLINETEXTMETRICA);
export const LPOUTLINETEXTMETRICA = pointer(OUTLINETEXTMETRICA);

export const OUTLINETEXTMETRICW = struct({
	otmSize                : UINT,        // UINT
	otmTextMetrics         : TEXTMETRICW, // TEXTMETRICW
	otmFiller              : BYTE,        // BYTE
	otmPanoseNumber        : PANOSE,      // PANOSE
	otmfsSelection         : UINT,        // UINT
	otmfsType              : UINT,        // UINT
	otmsCharSlopeRise      : int,         // int
	otmsCharSlopeRun       : int,         // int
	otmItalicAngle         : int,         // int
	otmEMSquare            : UINT,        // UINT
	otmAscent              : int,         // int
	otmDescent             : int,         // int
	otmLineGap             : UINT,        // UINT
	otmsCapEmHeight        : UINT,        // UINT
	otmsXHeight            : UINT,        // UINT
	otmrcFontBox           : RECT,        // RECT
	otmMacAscent           : int,         // int
	otmMacDescent          : int,         // int
	otmMacLineGap          : UINT,        // UINT
	otmusMinimumPPEM       : UINT,        // UINT
	otmptSubscriptSize     : POINT,       // POINT
	otmptSubscriptOffset   : POINT,       // POINT
	otmptSuperscriptSize   : POINT,       // POINT
	otmptSuperscriptOffset : POINT,       // POINT
	otmsStrikeoutSize      : UINT,        // UINT
	otmsStrikeoutPosition  : int,         // int
	otmsUnderscoreSize     : int,         // int
	otmsUnderscorePosition : int,         // int
	otmpFamilyName         : PSTR,        // PSTR
	otmpFaceName           : PSTR,        // PSTR
	otmpStyleName          : PSTR,        // PSTR
	otmpFullName           : PSTR,        // PSTR
});
export const POUTLINETEXTMETRICW = pointer(OUTLINETEXTMETRICW);
export const NPOUTLINETEXTMETRICW = pointer(OUTLINETEXTMETRICW);
export const LPOUTLINETEXTMETRICW = pointer(OUTLINETEXTMETRICW);
export const OUTLINETEXTMETRIC = OUTLINETEXTMETRICW;
export const POUTLINETEXTMETRIC = POUTLINETEXTMETRICW;
export const NPOUTLINETEXTMETRIC = NPOUTLINETEXTMETRICW;
export const LPOUTLINETEXTMETRIC = LPOUTLINETEXTMETRICW;

export const POLYTEXTA = struct({
	x       : int,          // int
	y       : int,          // int
	n       : UINT,         // UINT
	lpstr   : LPCSTR,       // LPCSTR
	uiFlags : UINT,         // UINT
	rcl     : RECT,         // RECT
	pdx     : pointer(int), // int*
});
export const PPOLYTEXTA = pointer(POLYTEXTA);
export const NPPOLYTEXTA = pointer(POLYTEXTA);
export const LPPOLYTEXTA = pointer(POLYTEXTA);

export const POLYTEXTW = struct({
	x       : int,          // int
	y       : int,          // int
	n       : UINT,         // UINT
	lpstr   : LPCWSTR,      // LPCWSTR
	uiFlags : UINT,         // UINT
	rcl     : RECT,         // RECT
	pdx     : pointer(int), // int*
});
export const PPOLYTEXTW = pointer(POLYTEXTW);
export const NPPOLYTEXTW = pointer(POLYTEXTW);
export const LPPOLYTEXTW = pointer(POLYTEXTW);
export const POLYTEXT = POLYTEXTW;
export const PPOLYTEXT = PPOLYTEXTW;
export const NPPOLYTEXT = NPPOLYTEXTW;
export const LPPOLYTEXT = LPPOLYTEXTW;

export const FIXED = struct({
	fract : WORD,  // WORD
	value : short, // short
});

export const MAT2 = struct({
	eM11 : FIXED, // FIXED
	eM12 : FIXED, // FIXED
	eM21 : FIXED, // FIXED
	eM22 : FIXED, // FIXED
});
export const LPMAT2 = pointer(MAT2);

export const GLYPHMETRICS = struct({
	gmBlackBoxX     : UINT,  // UINT
	gmBlackBoxY     : UINT,  // UINT
	gmptGlyphOrigin : POINT, // POINT
	gmCellIncX      : short, // short
	gmCellIncY      : short, // short
});
export const LPGLYPHMETRICS = pointer(GLYPHMETRICS);

export const POINTFX = struct({
	x : FIXED, // FIXED
	y : FIXED, // FIXED
});
export const LPPOINTFX = pointer(POINTFX);

export const TTPOLYCURVE = struct({
	wType : WORD,              // WORD
	cpfx  : WORD,              // WORD
	apfx  : array(POINTFX, 1), // POINTFX
});
export const LPTTPOLYCURVE = pointer(TTPOLYCURVE);

export const TTPOLYGONHEADER = struct({
	cb       : DWORD,   // DWORD
	dwType   : DWORD,   // DWORD
	pfxStart : POINTFX, // POINTFX
});
export const LPTTPOLYGONHEADER = pointer(TTPOLYGONHEADER);

export const GCP_RESULTSA = struct({
	lStructSize : DWORD,         // DWORD
	lpOutString : LPSTR,         // LPSTR
	lpOrder     : pointer(UINT), // UINT FAR*
	lpDx        : pointer(int),  // int FAR*
	lpCaretPos  : pointer(int),  // int FAR*
	lpClass     : LPSTR,         // LPSTR
	lpGlyphs    : LPWSTR,        // LPWSTR
	nGlyphs     : UINT,          // UINT
	nMaxFit     : int,           // int
});
export const LPGCP_RESULTSA = pointer(GCP_RESULTSA);

export const GCP_RESULTSW = struct({
	lStructSize : DWORD,         // DWORD
	lpOutString : LPWSTR,        // LPWSTR
	lpOrder     : pointer(UINT), // UINT FAR*
	lpDx        : pointer(int),  // int FAR*
	lpCaretPos  : pointer(int),  // int FAR*
	lpClass     : LPSTR,         // LPSTR
	lpGlyphs    : LPWSTR,        // LPWSTR
	nGlyphs     : UINT,          // UINT
	nMaxFit     : int,           // int
});
export const LPGCP_RESULTSW = pointer(GCP_RESULTSW);
export const GCP_RESULTS = GCP_RESULTSW;
export const LPGCP_RESULTS = LPGCP_RESULTSW;

export const RASTERIZER_STATUS = struct({
	nSize       : short, // short
	wFlags      : short, // short
	nLanguageID : short, // short
});
export const LPRASTERIZER_STATUS = pointer(RASTERIZER_STATUS);

export const PIXELFORMATDESCRIPTOR = struct({
	nSize           : WORD,  // WORD
	nVersion        : WORD,  // WORD
	dwFlags         : DWORD, // DWORD
	iPixelType      : BYTE,  // BYTE
	cColorBits      : BYTE,  // BYTE
	cRedBits        : BYTE,  // BYTE
	cRedShift       : BYTE,  // BYTE
	cGreenBits      : BYTE,  // BYTE
	cGreenShift     : BYTE,  // BYTE
	cBlueBits       : BYTE,  // BYTE
	cBlueShift      : BYTE,  // BYTE
	cAlphaBits      : BYTE,  // BYTE
	cAlphaShift     : BYTE,  // BYTE
	cAccumBits      : BYTE,  // BYTE
	cAccumRedBits   : BYTE,  // BYTE
	cAccumGreenBits : BYTE,  // BYTE
	cAccumBlueBits  : BYTE,  // BYTE
	cAccumAlphaBits : BYTE,  // BYTE
	cDepthBits      : BYTE,  // BYTE
	cStencilBits    : BYTE,  // BYTE
	cAuxBuffers     : BYTE,  // BYTE
	iLayerType      : BYTE,  // BYTE
	bReserved       : BYTE,  // BYTE
	dwLayerMask     : DWORD, // DWORD
	dwVisibleMask   : DWORD, // DWORD
	dwDamageMask    : DWORD, // DWORD
});
export const PPIXELFORMATDESCRIPTOR = pointer(PIXELFORMATDESCRIPTOR);
export const LPPIXELFORMATDESCRIPTOR = pointer(PIXELFORMATDESCRIPTOR);

export const WCRANGE = struct({
	wcLow   : WCHAR,  // WCHAR
	cGlyphs : USHORT, // USHORT
});
export const PWCRANGE = pointer(WCRANGE);
export const LPWCRANGE = pointer(WCRANGE);

export const GLYPHSET = struct({
	cbThis           : DWORD,             // DWORD
	flAccel          : DWORD,             // DWORD
	cGlyphsSupported : DWORD,             // DWORD
	cRanges          : DWORD,             // DWORD
	ranges           : array(WCRANGE, 1), // WCRANGE
});
export const PGLYPHSET = pointer(GLYPHSET);
export const LPGLYPHSET = pointer(GLYPHSET);

export const DESIGNVECTOR = struct({
	dvReserved : DWORD,                       // DWORD
	dvNumAxes  : DWORD,                       // DWORD
	dvValues   : array(LONG, MM_MAX_NUMAXES), // LONG
});
export const PDESIGNVECTOR = pointer(DESIGNVECTOR);
export const LPDESIGNVECTOR = pointer(DESIGNVECTOR);

export const AXISINFOA = struct({
	axMinValue : LONG,                             // LONG
	axMaxValue : LONG,                             // LONG
	axAxisName : array(BYTE, MM_MAX_AXES_NAMELEN), // BYTE
});
export const PAXISINFOA = pointer(AXISINFOA);
export const LPAXISINFOA = pointer(AXISINFOA);

export const AXISINFOW = struct({
	axMinValue : LONG,                                        // LONG
	axMaxValue : LONG,                                        // LONG
	axAxisName : array(WCHAR, MM_MAX_AXES_NAMELEN, "String"), // WCHAR
});
export const PAXISINFOW = pointer(AXISINFOW);
export const LPAXISINFOW = pointer(AXISINFOW);
export const AXISINFO = AXISINFOW;
export const PAXISINFO = PAXISINFOW;
export const LPAXISINFO = LPAXISINFOW;

export const AXESLISTA = struct({
	axlReserved : DWORD,                            // DWORD
	axlNumAxes  : DWORD,                            // DWORD
	axlAxisInfo : array(AXISINFOA, MM_MAX_NUMAXES), // AXISINFOA
});
export const PAXESLISTA = pointer(AXESLISTA);
export const LPAXESLISTA = pointer(AXESLISTA);

export const AXESLISTW = struct({
	axlReserved : DWORD,                            // DWORD
	axlNumAxes  : DWORD,                            // DWORD
	axlAxisInfo : array(AXISINFOW, MM_MAX_NUMAXES), // AXISINFOW
});
export const PAXESLISTW = pointer(AXESLISTW);
export const LPAXESLISTW = pointer(AXESLISTW);
export const AXESLIST = AXESLISTW;
export const PAXESLIST = PAXESLISTW;
export const LPAXESLIST = LPAXESLISTW;

export const ENUMLOGFONTEXDVA = struct({
	elfEnumLogfontEx : ENUMLOGFONTEXA, // ENUMLOGFONTEXA
	elfDesignVector  : DESIGNVECTOR,   // DESIGNVECTOR
});
export const PENUMLOGFONTEXDVA = pointer(ENUMLOGFONTEXDVA);
export const LPENUMLOGFONTEXDVA = pointer(ENUMLOGFONTEXDVA);

export const ENUMLOGFONTEXDVW = struct({
	elfEnumLogfontEx : ENUMLOGFONTEXW, // ENUMLOGFONTEXW
	elfDesignVector  : DESIGNVECTOR,   // DESIGNVECTOR
});
export const PENUMLOGFONTEXDVW = pointer(ENUMLOGFONTEXDVW);
export const LPENUMLOGFONTEXDVW = pointer(ENUMLOGFONTEXDVW);
export const ENUMLOGFONTEXDV = ENUMLOGFONTEXDVW;
export const PENUMLOGFONTEXDV = PENUMLOGFONTEXDVW;
export const LPENUMLOGFONTEXDV = LPENUMLOGFONTEXDVW;

export const ENUMTEXTMETRICA = struct({
	etmNewTextMetricEx : NEWTEXTMETRICEXA, // NEWTEXTMETRICEXA
	etmAxesList        : AXESLISTA,        // AXESLISTA
});
export const PENUMTEXTMETRICA = pointer(ENUMTEXTMETRICA);
export const LPENUMTEXTMETRICA = pointer(ENUMTEXTMETRICA);

export const ENUMTEXTMETRICW = struct({
	etmNewTextMetricEx : NEWTEXTMETRICEXW, // NEWTEXTMETRICEXW
	etmAxesList        : AXESLISTW,        // AXESLISTW
});
export const PENUMTEXTMETRICW = pointer(ENUMTEXTMETRICW);
export const LPENUMTEXTMETRICW = pointer(ENUMTEXTMETRICW);
export const ENUMTEXTMETRIC = ENUMTEXTMETRICW;
export const PENUMTEXTMETRIC = PENUMTEXTMETRICW;
export const LPENUMTEXTMETRIC = LPENUMTEXTMETRICW;

export const DDRAWMARSHCALLBACKMARSHAL = pointer(koffi.proto("__stdcall", "DDRAWMARSHCALLBACKMARSHAL", HRESULT /* HRESULT */, [
	HGDIOBJ,             /* in  HGDIOBJ  hGdiObj    */
	LPVOID,              /* in  LPVOID   pGdiRef    */
	pointer(LPVOID), /* out LPVOID * ppDDrawRef */
]));

export const DDRAWMARSHCALLBACKUNMARSHAL = pointer(koffi.proto("__stdcall", "DDRAWMARSHCALLBACKUNMARSHAL", HRESULT /* HRESULT */, [
	LPVOID,              /* in  LPVOID   pData      */
	pointer(HDC),    /* out HDC *    phdc       */
	pointer(LPVOID), /* out LPVOID * ppDDrawRef */
]));

export const DDRAWMARSHCALLBACKRELEASE = pointer(koffi.proto("__stdcall", "DDRAWMARSHCALLBACKRELEASE", HRESULT /* HRESULT */, [
	LPVOID, /* in LPVOID pDDrawRef */
]));

export const GDIREGISTERDDRAWPACKET = struct({
	dwSize         : DWORD,                       // DWORD
	dwVersion      : DWORD,                       // DWORD
	pfnDdMarshal   : DDRAWMARSHCALLBACKMARSHAL,   // DDRAWMARSHCALLBACKMARSHAL
	pfnDdUnmarshal : DDRAWMARSHCALLBACKUNMARSHAL, // DDRAWMARSHCALLBACKUNMARSHAL
	pfnDdRelease   : DDRAWMARSHCALLBACKRELEASE,   // DDRAWMARSHCALLBACKRELEASE
});
export const PGDIREGISTERDDRAWPACKET = pointer(GDIREGISTERDDRAWPACKET);

export const TRIVERTEX = struct({
	x     : LONG,    // LONG
	y     : LONG,    // LONG
	Red   : COLOR16, // COLOR16
	Green : COLOR16, // COLOR16
	Blue  : COLOR16, // COLOR16
	Alpha : COLOR16, // COLOR16
});
export const PTRIVERTEX = pointer(TRIVERTEX);
export const LPTRIVERTEX = pointer(TRIVERTEX);

export const GRADIENT_TRIANGLE = struct({
	Vertex1 : ULONG, // ULONG
	Vertex2 : ULONG, // ULONG
	Vertex3 : ULONG, // ULONG
});
export const PGRADIENT_TRIANGLE = pointer(GRADIENT_TRIANGLE);
export const LPGRADIENT_TRIANGLE = pointer(GRADIENT_TRIANGLE);

export const GRADIENT_RECT = struct({
	UpperLeft  : ULONG, // ULONG
	LowerRight : ULONG, // ULONG
});
export const PGRADIENT_RECT = pointer(GRADIENT_RECT);
export const LPGRADIENT_RECT = pointer(GRADIENT_RECT);

export const BLENDFUNCTION = struct({
	BlendOp             : BYTE, // BYTE
	BlendFlags          : BYTE, // BYTE
	SourceConstantAlpha : BYTE, // BYTE
	AlphaFormat         : BYTE, // BYTE
});
export const PBLENDFUNCTION = pointer(BLENDFUNCTION);

export const DIBSECTION = struct({
	dsBm        : BITMAP,           // BITMAP
	dsBmih      : BITMAPINFOHEADER, // BITMAPINFOHEADER
	dsBitfields : array(DWORD, 3),  // DWORD
	dshSection  : HANDLE,           // HANDLE
	dsOffset    : DWORD,            // DWORD
});
export const LPDIBSECTION = pointer(DIBSECTION);
export const PDIBSECTION = pointer(DIBSECTION);

export const COLORADJUSTMENT = struct({
	caSize            : WORD,  // WORD
	caFlags           : WORD,  // WORD
	caIlluminantIndex : WORD,  // WORD
	caRedGamma        : WORD,  // WORD
	caGreenGamma      : WORD,  // WORD
	caBlueGamma       : WORD,  // WORD
	caReferenceBlack  : WORD,  // WORD
	caReferenceWhite  : WORD,  // WORD
	caContrast        : SHORT, // SHORT
	caBrightness      : SHORT, // SHORT
	caColorfulness    : SHORT, // SHORT
	caRedGreenTint    : SHORT, // SHORT
});
export const PCOLORADJUSTMENT = pointer(COLORADJUSTMENT);
export const LPCOLORADJUSTMENT = pointer(COLORADJUSTMENT);

export const DOCINFOA = struct({
	cbSize       : int,    // int
	lpszDocName  : LPCSTR, // LPCSTR
	lpszOutput   : LPCSTR, // LPCSTR
	lpszDatatype : LPCSTR, // LPCSTR
	fwType       : DWORD,  // DWORD
});
export const LPDOCINFOA = pointer(DOCINFOA);

export const DOCINFOW = struct({
	cbSize       : int,     // int
	lpszDocName  : LPCWSTR, // LPCWSTR
	lpszOutput   : LPCWSTR, // LPCWSTR
	lpszDatatype : LPCWSTR, // LPCWSTR
	fwType       : DWORD,   // DWORD
});
export const LPDOCINFOW = pointer(DOCINFOW);
export const DOCINFO = DOCINFOW;
export const LPDOCINFO = LPDOCINFOW;

export const KERNINGPAIR = struct({
	wFirst      : WORD, // WORD
	wSecond     : WORD, // WORD
	iKernAmount : int,  // int
});
export const LPKERNINGPAIR = pointer(KERNINGPAIR);

export const EMR = struct({
	iType : DWORD, // DWORD // Enhanced metafile record type
	nSize : DWORD, // DWORD // Length of the record in bytes.
});
export const PEMR = pointer(EMR);

export const EMRTEXT = struct({
	ptlReference : POINTL, // POINTL
	nChars       : DWORD,  // DWORD
	offString    : DWORD,  // DWORD  // Offset to the string
	fOptions     : DWORD,  // DWORD
	rcl          : RECTL,  // RECTL
	offDx        : DWORD,  // DWORD  // Offset to the inter-character spacing array.
});
export const PEMRTEXT = pointer(EMRTEXT);

export const EMRABORTPATH = struct({
	emr : EMR, // EMR
});
export const PEMRABORTPATH = pointer(EMRABORTPATH);

export const EMRSELECTCLIPPATH = struct({
	emr   : EMR,   // EMR
	iMode : DWORD, // DWORD
});
export const PEMRSELECTCLIPPATH = pointer(EMRSELECTCLIPPATH);

export const EMRSETMITERLIMIT = struct({
	emr         : EMR,   // EMR
	eMiterLimit : FLOAT, // FLOAT
});
export const PEMRSETMITERLIMIT = pointer(EMRSETMITERLIMIT);

export const EMRRESTOREDC = struct({
	emr       : EMR,  // EMR
	iRelative : LONG, // LONG // Specifies a relative instance
});
export const PEMRRESTOREDC = pointer(EMRRESTOREDC);

export const EMRSETARCDIRECTION = struct({
	emr           : EMR,   // EMR
	iArcDirection : DWORD, // DWORD // Specifies the arc direction in the
});
export const PEMRSETARCDIRECTION = pointer(EMRSETARCDIRECTION);

export const EMRSETMAPPERFLAGS = struct({
	emr     : EMR,   // EMR
	dwFlags : DWORD, // DWORD
});
export const PEMRSETMAPPERFLAGS = pointer(EMRSETMAPPERFLAGS);

export const EMRSETBKCOLOR = struct({
	emr     : EMR,      // EMR
	crColor : COLORREF, // COLORREF
});
export const PEMRSETBKCOLOR = pointer(EMRSETBKCOLOR);

export const EMRSELECTOBJECT = struct({
	emr      : EMR,   // EMR
	ihObject : DWORD, // DWORD // Object handle index
});
export const PEMRSELECTOBJECT = pointer(EMRSELECTOBJECT);

export const EMRSELECTPALETTE = struct({
	emr   : EMR,   // EMR
	ihPal : DWORD, // DWORD // Palette handle index, background mode only
});
export const PEMRSELECTPALETTE = pointer(EMRSELECTPALETTE);

export const EMRRESIZEPALETTE = struct({
	emr      : EMR,   // EMR
	ihPal    : DWORD, // DWORD // Palette handle index
	cEntries : DWORD, // DWORD
});
export const PEMRRESIZEPALETTE = pointer(EMRRESIZEPALETTE);

export const EMRSETPALETTEENTRIES = struct({
	emr         : EMR,                    // EMR
	ihPal       : DWORD,                  // DWORD        // Palette handle index
	iStart      : DWORD,                  // DWORD
	cEntries    : DWORD,                  // DWORD
	aPalEntries : array(PALETTEENTRY, 1), // PALETTEENTRY // The peFlags fields do not contain any flags
});
export const PEMRSETPALETTEENTRIES = pointer(EMRSETPALETTEENTRIES);

export const EMRSETCOLORADJUSTMENT = struct({
	emr             : EMR,             // EMR
	ColorAdjustment : COLORADJUSTMENT, // COLORADJUSTMENT
});
export const PEMRSETCOLORADJUSTMENT = pointer(EMRSETCOLORADJUSTMENT);

export const EMRGDICOMMENT = struct({
	emr    : EMR,            // EMR
	cbData : DWORD,          // DWORD // Size of data in bytes
	Data   : array(BYTE, 1), // BYTE
});
export const PEMRGDICOMMENT = pointer(EMRGDICOMMENT);

export const EMREOF = struct({
	emr           : EMR,   // EMR
	nPalEntries   : DWORD, // DWORD // Number of palette entries
	offPalEntries : DWORD, // DWORD // Offset to the palette entries
	nSizeLast     : DWORD, // DWORD // Same as nSize and must be the last DWORD
});
export const PEMREOF = pointer(EMREOF);

export const EMRLINETO = struct({
	emr : EMR,    // EMR
	ptl : POINTL, // POINTL
});
export const PEMRLINETO = pointer(EMRLINETO);

export const EMROFFSETCLIPRGN = struct({
	emr       : EMR,    // EMR
	ptlOffset : POINTL, // POINTL
});
export const PEMROFFSETCLIPRGN = pointer(EMROFFSETCLIPRGN);

export const EMRFILLPATH = struct({
	emr       : EMR,   // EMR
	rclBounds : RECTL, // RECTL // Inclusive-inclusive bounds in device units
});
export const PEMRFILLPATH = pointer(EMRFILLPATH);

export const EMREXCLUDECLIPRECT = struct({
	emr     : EMR,   // EMR
	rclClip : RECTL, // RECTL
});
export const PEMREXCLUDECLIPRECT = pointer(EMREXCLUDECLIPRECT);

export const EMRSETVIEWPORTORGEX = struct({
	emr       : EMR,    // EMR
	ptlOrigin : POINTL, // POINTL
});
export const PEMRSETVIEWPORTORGEX = pointer(EMRSETVIEWPORTORGEX);

export const EMRSETVIEWPORTEXTEX = struct({
	emr       : EMR,   // EMR
	szlExtent : SIZEL, // SIZEL
});
export const PEMRSETVIEWPORTEXTEX = pointer(EMRSETVIEWPORTEXTEX);

export const EMRSCALEVIEWPORTEXTEX = struct({
	emr    : EMR,  // EMR
	xNum   : LONG, // LONG
	xDenom : LONG, // LONG
	yNum   : LONG, // LONG
	yDenom : LONG, // LONG
});
export const PEMRSCALEVIEWPORTEXTEX = pointer(EMRSCALEVIEWPORTEXTEX);

export const EMRSETWORLDTRANSFORM = struct({
	emr   : EMR,   // EMR
	xform : XFORM, // XFORM
});
export const PEMRSETWORLDTRANSFORM = pointer(EMRSETWORLDTRANSFORM);

export const EMRMODIFYWORLDTRANSFORM = struct({
	emr   : EMR,   // EMR
	xform : XFORM, // XFORM
	iMode : DWORD, // DWORD
});
export const PEMRMODIFYWORLDTRANSFORM = pointer(EMRMODIFYWORLDTRANSFORM);

export const EMRSETPIXELV = struct({
	emr      : EMR,      // EMR
	ptlPixel : POINTL,   // POINTL
	crColor  : COLORREF, // COLORREF
});
export const PEMRSETPIXELV = pointer(EMRSETPIXELV);

export const EMREXTFLOODFILL = struct({
	emr      : EMR,      // EMR
	ptlStart : POINTL,   // POINTL
	crColor  : COLORREF, // COLORREF
	iMode    : DWORD,    // DWORD
});
export const PEMREXTFLOODFILL = pointer(EMREXTFLOODFILL);

export const EMRELLIPSE = struct({
	emr    : EMR,   // EMR
	rclBox : RECTL, // RECTL // Inclusive-inclusive bounding rectangle
});
export const PEMRELLIPSE = pointer(EMRELLIPSE);

export const EMRROUNDRECT = struct({
	emr       : EMR,   // EMR
	rclBox    : RECTL, // RECTL // Inclusive-inclusive bounding rectangle
	szlCorner : SIZEL, // SIZEL
});
export const PEMRROUNDRECT = pointer(EMRROUNDRECT);

export const EMRARC = struct({
	emr      : EMR,    // EMR
	rclBox   : RECTL,  // RECTL  // Inclusive-inclusive bounding rectangle
	ptlStart : POINTL, // POINTL
	ptlEnd   : POINTL, // POINTL
});
export const PEMRARC = pointer(EMRARC);

export const EMRANGLEARC = struct({
	emr         : EMR,    // EMR
	ptlCenter   : POINTL, // POINTL
	nRadius     : DWORD,  // DWORD
	eStartAngle : FLOAT,  // FLOAT
	eSweepAngle : FLOAT,  // FLOAT
});
export const PEMRANGLEARC = pointer(EMRANGLEARC);

export const EMRPOLYLINE = struct({
	emr       : EMR,              // EMR
	rclBounds : RECTL,            // RECTL  // Inclusive-inclusive bounds in device units
	cptl      : DWORD,            // DWORD
	aptl      : array(POINTL, 1), // POINTL
});
export const PEMRPOLYLINE = pointer(EMRPOLYLINE);

export const EMRPOLYLINE16 = struct({
	emr       : EMR,              // EMR
	rclBounds : RECTL,            // RECTL  // Inclusive-inclusive bounds in device units
	cpts      : DWORD,            // DWORD
	apts      : array(POINTS, 1), // POINTS
});
export const PEMRPOLYLINE16 = pointer(EMRPOLYLINE16);

export const EMRPOLYDRAW = struct({
	emr       : EMR,              // EMR
	rclBounds : RECTL,            // RECTL  // Inclusive-inclusive bounds in device units
	cptl      : DWORD,            // DWORD  // Number of points
	aptl      : array(POINTL, 1), // POINTL // Array of points
	abTypes   : array(BYTE, 1),   // BYTE   // Array of point types
});
export const PEMRPOLYDRAW = pointer(EMRPOLYDRAW);
export const EMRPOLYDRA = EMRPOLYDRAW;
export const PEMRPOLYDRA = PEMRPOLYDRAW;

export const EMRPOLYDRAW16 = struct({
	emr       : EMR,              // EMR
	rclBounds : RECTL,            // RECTL  // Inclusive-inclusive bounds in device units
	cpts      : DWORD,            // DWORD  // Number of points
	apts      : array(POINTS, 1), // POINTS // Array of points
	abTypes   : array(BYTE, 1),   // BYTE   // Array of point types
});
export const PEMRPOLYDRAW16 = pointer(EMRPOLYDRAW16);

export const EMRPOLYPOLYLINE = struct({
	emr         : EMR,              // EMR
	rclBounds   : RECTL,            // RECTL  // Inclusive-inclusive bounds in device units
	nPolys      : DWORD,            // DWORD  // Number of polys
	cptl        : DWORD,            // DWORD  // Total number of points in all polys
	aPolyCounts : array(DWORD, 1),  // DWORD  // Array of point counts for each poly
	aptl        : array(POINTL, 1), // POINTL // Array of points
});
export const PEMRPOLYPOLYLINE = pointer(EMRPOLYPOLYLINE);

export const EMRPOLYPOLYLINE16 = struct({
	emr         : EMR,              // EMR
	rclBounds   : RECTL,            // RECTL  // Inclusive-inclusive bounds in device units
	nPolys      : DWORD,            // DWORD  // Number of polys
	cpts        : DWORD,            // DWORD  // Total number of points in all polys
	aPolyCounts : array(DWORD, 1),  // DWORD  // Array of point counts for each poly
	apts        : array(POINTS, 1), // POINTS // Array of points
});
export const PEMRPOLYPOLYLINE16 = pointer(EMRPOLYPOLYLINE16);

export const EMRINVERTRGN = struct({
	emr       : EMR,            // EMR
	rclBounds : RECTL,          // RECTL // Inclusive-inclusive bounds in device units
	cbRgnData : DWORD,          // DWORD // Size of region data in bytes
	RgnData   : array(BYTE, 1), // BYTE
});
export const PEMRINVERTRGN = pointer(EMRINVERTRGN);

export const EMRFILLRGN = struct({
	emr       : EMR,            // EMR
	rclBounds : RECTL,          // RECTL // Inclusive-inclusive bounds in device units
	cbRgnData : DWORD,          // DWORD // Size of region data in bytes
	ihBrush   : DWORD,          // DWORD // Brush handle index
	RgnData   : array(BYTE, 1), // BYTE
});
export const PEMRFILLRGN = pointer(EMRFILLRGN);

export const EMRFRAMERGN = struct({
	emr       : EMR,            // EMR
	rclBounds : RECTL,          // RECTL // Inclusive-inclusive bounds in device units
	cbRgnData : DWORD,          // DWORD // Size of region data in bytes
	ihBrush   : DWORD,          // DWORD // Brush handle index
	szlStroke : SIZEL,          // SIZEL
	RgnData   : array(BYTE, 1), // BYTE
});
export const PEMRFRAMERGN = pointer(EMRFRAMERGN);

export const EMREXTSELECTCLIPRGN = struct({
	emr       : EMR,            // EMR
	cbRgnData : DWORD,          // DWORD // Size of region data in bytes
	iMode     : DWORD,          // DWORD
	RgnData   : array(BYTE, 1), // BYTE
});
export const PEMREXTSELECTCLIPRGN = pointer(EMREXTSELECTCLIPRGN);

export const EMREXTTEXTOUTA = struct({
	emr           : EMR,     // EMR
	rclBounds     : RECTL,   // RECTL   // Inclusive-inclusive bounds in device units
	iGraphicsMode : DWORD,   // DWORD   // Current graphics mode
	exScale       : FLOAT,   // FLOAT   // X and Y scales from Page units to .01mm units
	eyScale       : FLOAT,   // FLOAT   //   if graphics mode is GM_COMPATIBLE.
	emrtext       : EMRTEXT, // EMRTEXT // This is followed by the string and spacing
});
export const PEMREXTTEXTOUTA = pointer(EMREXTTEXTOUTA);

export const EMRPOLYTEXTOUTA = struct({
	emr           : EMR,               // EMR
	rclBounds     : RECTL,             // RECTL   // Inclusive-inclusive bounds in device units
	iGraphicsMode : DWORD,             // DWORD   // Current graphics mode
	exScale       : FLOAT,             // FLOAT   // X and Y scales from Page units to .01mm units
	eyScale       : FLOAT,             // FLOAT   //   if graphics mode is GM_COMPATIBLE.
	cStrings      : LONG,              // LONG
	aemrtext      : array(EMRTEXT, 1), // EMRTEXT // Array of EMRTEXT structures.  This is
});
export const PEMRPOLYTEXTOUTA = pointer(EMRPOLYTEXTOUTA);

export const EMRBITBLT = struct({
	emr          : EMR,      // EMR
	rclBounds    : RECTL,    // RECTL    // Inclusive-inclusive bounds in device units
	xDest        : LONG,     // LONG
	yDest        : LONG,     // LONG
	cxDest       : LONG,     // LONG
	cyDest       : LONG,     // LONG
	dwRop        : DWORD,    // DWORD
	xSrc         : LONG,     // LONG
	ySrc         : LONG,     // LONG
	xformSrc     : XFORM,    // XFORM    // Source DC transform
	crBkColorSrc : COLORREF, // COLORREF // Source DC BkColor in RGB
	iUsageSrc    : DWORD,    // DWORD    // Source bitmap info color table usage
	offBmiSrc    : DWORD,    // DWORD    // Offset to the source BITMAPINFO structure
	cbBmiSrc     : DWORD,    // DWORD    // Size of the source BITMAPINFO structure
	offBitsSrc   : DWORD,    // DWORD    // Offset to the source bitmap bits
	cbBitsSrc    : DWORD,    // DWORD    // Size of the source bitmap bits
});
export const PEMRBITBLT = pointer(EMRBITBLT);

export const EMRSTRETCHBLT = struct({
	emr          : EMR,      // EMR
	rclBounds    : RECTL,    // RECTL    // Inclusive-inclusive bounds in device units
	xDest        : LONG,     // LONG
	yDest        : LONG,     // LONG
	cxDest       : LONG,     // LONG
	cyDest       : LONG,     // LONG
	dwRop        : DWORD,    // DWORD
	xSrc         : LONG,     // LONG
	ySrc         : LONG,     // LONG
	xformSrc     : XFORM,    // XFORM    // Source DC transform
	crBkColorSrc : COLORREF, // COLORREF // Source DC BkColor in RGB
	iUsageSrc    : DWORD,    // DWORD    // Source bitmap info color table usage
	offBmiSrc    : DWORD,    // DWORD    // Offset to the source BITMAPINFO structure
	cbBmiSrc     : DWORD,    // DWORD    // Size of the source BITMAPINFO structure
	offBitsSrc   : DWORD,    // DWORD    // Offset to the source bitmap bits
	cbBitsSrc    : DWORD,    // DWORD    // Size of the source bitmap bits
	cxSrc        : LONG,     // LONG
	cySrc        : LONG,     // LONG
});
export const PEMRSTRETCHBLT = pointer(EMRSTRETCHBLT);

export const EMRMASKBLT = struct({
	emr          : EMR,      // EMR
	rclBounds    : RECTL,    // RECTL    // Inclusive-inclusive bounds in device units
	xDest        : LONG,     // LONG
	yDest        : LONG,     // LONG
	cxDest       : LONG,     // LONG
	cyDest       : LONG,     // LONG
	dwRop        : DWORD,    // DWORD
	xSrc         : LONG,     // LONG
	ySrc         : LONG,     // LONG
	xformSrc     : XFORM,    // XFORM    // Source DC transform
	crBkColorSrc : COLORREF, // COLORREF // Source DC BkColor in RGB
	iUsageSrc    : DWORD,    // DWORD    // Source bitmap info color table usage
	offBmiSrc    : DWORD,    // DWORD    // Offset to the source BITMAPINFO structure
	cbBmiSrc     : DWORD,    // DWORD    // Size of the source BITMAPINFO structure
	offBitsSrc   : DWORD,    // DWORD    // Offset to the source bitmap bits
	cbBitsSrc    : DWORD,    // DWORD    // Size of the source bitmap bits
	xMask        : LONG,     // LONG
	yMask        : LONG,     // LONG
	iUsageMask   : DWORD,    // DWORD    // Mask bitmap info color table usage
	offBmiMask   : DWORD,    // DWORD    // Offset to the mask BITMAPINFO structure if any
	cbBmiMask    : DWORD,    // DWORD    // Size of the mask BITMAPINFO structure if any
	offBitsMask  : DWORD,    // DWORD    // Offset to the mask bitmap bits if any
	cbBitsMask   : DWORD,    // DWORD    // Size of the mask bitmap bits if any
});
export const PEMRMASKBLT = pointer(EMRMASKBLT);

export const EMRPLGBLT = struct({
	emr          : EMR,              // EMR
	rclBounds    : RECTL,            // RECTL    // Inclusive-inclusive bounds in device units
	aptlDest     : array(POINTL, 3), // POINTL
	xSrc         : LONG,             // LONG
	ySrc         : LONG,             // LONG
	cxSrc        : LONG,             // LONG
	cySrc        : LONG,             // LONG
	xformSrc     : XFORM,            // XFORM    // Source DC transform
	crBkColorSrc : COLORREF,         // COLORREF // Source DC BkColor in RGB
	iUsageSrc    : DWORD,            // DWORD    // Source bitmap info color table usage
	offBmiSrc    : DWORD,            // DWORD    // Offset to the source BITMAPINFO structure
	cbBmiSrc     : DWORD,            // DWORD    // Size of the source BITMAPINFO structure
	offBitsSrc   : DWORD,            // DWORD    // Offset to the source bitmap bits
	cbBitsSrc    : DWORD,            // DWORD    // Size of the source bitmap bits
	xMask        : LONG,             // LONG
	yMask        : LONG,             // LONG
	iUsageMask   : DWORD,            // DWORD    // Mask bitmap info color table usage
	offBmiMask   : DWORD,            // DWORD    // Offset to the mask BITMAPINFO structure if any
	cbBmiMask    : DWORD,            // DWORD    // Size of the mask BITMAPINFO structure if any
	offBitsMask  : DWORD,            // DWORD    // Offset to the mask bitmap bits if any
	cbBitsMask   : DWORD,            // DWORD    // Size of the mask bitmap bits if any
});
export const PEMRPLGBLT = pointer(EMRPLGBLT);

export const EMRSETDIBITSTODEVICE = struct({
	emr        : EMR,   // EMR
	rclBounds  : RECTL, // RECTL // Inclusive-inclusive bounds in device units
	xDest      : LONG,  // LONG
	yDest      : LONG,  // LONG
	xSrc       : LONG,  // LONG
	ySrc       : LONG,  // LONG
	cxSrc      : LONG,  // LONG
	cySrc      : LONG,  // LONG
	offBmiSrc  : DWORD, // DWORD // Offset to the source BITMAPINFO structure
	cbBmiSrc   : DWORD, // DWORD // Size of the source BITMAPINFO structure
	offBitsSrc : DWORD, // DWORD // Offset to the source bitmap bits
	cbBitsSrc  : DWORD, // DWORD // Size of the source bitmap bits
	iUsageSrc  : DWORD, // DWORD // Source bitmap info color table usage
	iStartScan : DWORD, // DWORD
	cScans     : DWORD, // DWORD
});
export const PEMRSETDIBITSTODEVICE = pointer(EMRSETDIBITSTODEVICE);

export const EMRSTRETCHDIBITS = struct({
	emr        : EMR,   // EMR
	rclBounds  : RECTL, // RECTL // Inclusive-inclusive bounds in device units
	xDest      : LONG,  // LONG
	yDest      : LONG,  // LONG
	xSrc       : LONG,  // LONG
	ySrc       : LONG,  // LONG
	cxSrc      : LONG,  // LONG
	cySrc      : LONG,  // LONG
	offBmiSrc  : DWORD, // DWORD // Offset to the source BITMAPINFO structure
	cbBmiSrc   : DWORD, // DWORD // Size of the source BITMAPINFO structure
	offBitsSrc : DWORD, // DWORD // Offset to the source bitmap bits
	cbBitsSrc  : DWORD, // DWORD // Size of the source bitmap bits
	iUsageSrc  : DWORD, // DWORD // Source bitmap info color table usage
	dwRop      : DWORD, // DWORD
	cxDest     : LONG,  // LONG
	cyDest     : LONG,  // LONG
});
export const PEMRSTRETCHDIBITS = pointer(EMRSTRETCHDIBITS);

export const EMREXTCREATEFONTINDIRECTW = struct({
	emr    : EMR,         // EMR
	ihFont : DWORD,       // DWORD       // Font handle index
	elfw   : EXTLOGFONTW, // EXTLOGFONTW
});
export const PEMREXTCREATEFONTINDIRECTW = pointer(EMREXTCREATEFONTINDIRECTW);
export const EMREXTCREATEFONTINDIRECT = EMREXTCREATEFONTINDIRECTW;
export const PEMREXTCREATEFONTINDIRECT = PEMREXTCREATEFONTINDIRECTW;

export const EMRCREATEPALETTE = struct({
	emr   : EMR,        // EMR
	ihPal : DWORD,      // DWORD      // Palette handle index
	lgpl  : LOGPALETTE, // LOGPALETTE // The peFlags fields in the palette entries
});
export const PEMRCREATEPALETTE = pointer(EMRCREATEPALETTE);

export const EMRCREATEPEN = struct({
	emr   : EMR,    // EMR
	ihPen : DWORD,  // DWORD  // Pen handle index
	lopn  : LOGPEN, // LOGPEN
});
export const PEMRCREATEPEN = pointer(EMRCREATEPEN);

export const EMREXTCREATEPEN = struct({
	emr     : EMR,         // EMR
	ihPen   : DWORD,       // DWORD       // Pen handle index
	offBmi  : DWORD,       // DWORD       // Offset to the BITMAPINFO structure if any
	cbBmi   : DWORD,       // DWORD       // Size of the BITMAPINFO structure if any
	offBits : DWORD,       // DWORD       // Offset to the brush bitmap bits if any
	cbBits  : DWORD,       // DWORD       // Size of the brush bitmap bits if any
	elp     : EXTLOGPEN32, // EXTLOGPEN32 // The extended pen with the style array.
});
export const PEMREXTCREATEPEN = pointer(EMREXTCREATEPEN);

export const EMRCREATEBRUSHINDIRECT = struct({
	emr     : EMR,        // EMR
	ihBrush : DWORD,      // DWORD      // Brush handle index
	lb      : LOGBRUSH32, // LOGBRUSH32 // The style must be BS_SOLID, BS_HOLLOW,
});
export const PEMRCREATEBRUSHINDIRECT = pointer(EMRCREATEBRUSHINDIRECT);

export const EMRCREATEMONOBRUSH = struct({
	emr     : EMR,   // EMR
	ihBrush : DWORD, // DWORD // Brush handle index
	iUsage  : DWORD, // DWORD // Bitmap info color table usage
	offBmi  : DWORD, // DWORD // Offset to the BITMAPINFO structure
	cbBmi   : DWORD, // DWORD // Size of the BITMAPINFO structure
	offBits : DWORD, // DWORD // Offset to the bitmap bits
	cbBits  : DWORD, // DWORD // Size of the bitmap bits
});
export const PEMRCREATEMONOBRUSH = pointer(EMRCREATEMONOBRUSH);

export const EMRCREATEDIBPATTERNBRUSHPT = struct({
	emr     : EMR,   // EMR
	ihBrush : DWORD, // DWORD // Brush handle index
	iUsage  : DWORD, // DWORD // Bitmap info color table usage
	offBmi  : DWORD, // DWORD // Offset to the BITMAPINFO structure
	cbBmi   : DWORD, // DWORD // Size of the BITMAPINFO structure
	offBits : DWORD, // DWORD // Offset to the bitmap bits
	cbBits  : DWORD, // DWORD // Size of the bitmap bits
});
export const PEMRCREATEDIBPATTERNBRUSHPT = pointer(EMRCREATEDIBPATTERNBRUSHPT);

export const EMRFORMAT = struct({
	dSignature : DWORD, // DWORD // Format signature, e.g. ENHMETA_SIGNATURE.
	nVersion   : DWORD, // DWORD // Format version number.
	cbData     : DWORD, // DWORD // Size of data in bytes.
	offData    : DWORD, // DWORD // Offset to data from GDICOMMENT_IDENTIFIER.
});
export const PEMRFORMAT = pointer(EMRFORMAT);

export const EMRGLSRECORD = struct({
	emr    : EMR,            // EMR
	cbData : DWORD,          // DWORD // Size of data in bytes
	Data   : array(BYTE, 1), // BYTE
});
export const PEMRGLSRECORD = pointer(EMRGLSRECORD);

export const EMRGLSBOUNDEDRECORD = struct({
	emr       : EMR,            // EMR
	rclBounds : RECTL,          // RECTL // Bounds in recording coordinates
	cbData    : DWORD,          // DWORD // Size of data in bytes
	Data      : array(BYTE, 1), // BYTE
});
export const PEMRGLSBOUNDEDRECORD = pointer(EMRGLSBOUNDEDRECORD);

export const EMRPIXELFORMAT = struct({
	emr : EMR,                   // EMR
	pfd : PIXELFORMATDESCRIPTOR, // PIXELFORMATDESCRIPTOR
});
export const PEMRPIXELFORMAT = pointer(EMRPIXELFORMAT);

export const EMRCREATECOLORSPACE = struct({
	emr  : EMR,            // EMR
	ihCS : DWORD,          // DWORD          // ColorSpace handle index
	lcs  : LOGCOLORSPACEA, // LOGCOLORSPACEA // Ansi version of LOGCOLORSPACE
});
export const PEMRCREATECOLORSPACE = pointer(EMRCREATECOLORSPACE);

export const EMRSETCOLORSPACE = struct({
	emr  : EMR,   // EMR
	ihCS : DWORD, // DWORD // ColorSpace handle index
});
export const PEMRSETCOLORSPACE = pointer(EMRSETCOLORSPACE);

export const EMREXTESCAPE = struct({
	emr       : EMR,            // EMR
	iEscape   : INT,            // INT  // Escape code
	cbEscData : INT,            // INT  // Size of escape data
	EscData   : array(BYTE, 1), // BYTE // Escape data
});
export const PEMREXTESCAPE = pointer(EMREXTESCAPE);

export const EMRNAMEDESCAPE = struct({
	emr       : EMR,            // EMR
	iEscape   : INT,            // INT  // Escape code
	cbDriver  : INT,            // INT  // Size of driver name
	cbEscData : INT,            // INT  // Size of escape data
	EscData   : array(BYTE, 1), // BYTE // Driver name and Escape data
});
export const PEMRNAMEDESCAPE = pointer(EMRNAMEDESCAPE);

export const EMRSETICMPROFILE = struct({
	emr     : EMR,            // EMR
	dwFlags : DWORD,          // DWORD // flags
	cbName  : DWORD,          // DWORD // Size of desired profile name
	cbData  : DWORD,          // DWORD // Size of raw profile data if attached
	Data    : array(BYTE, 1), // BYTE  // Array size is cbName + cbData
});
export const PEMRSETICMPROFILE = pointer(EMRSETICMPROFILE);

export const EMRCREATECOLORSPACEW = struct({
	emr     : EMR,            // EMR
	ihCS    : DWORD,          // DWORD          // ColorSpace handle index
	lcs     : LOGCOLORSPACEW, // LOGCOLORSPACEW // Unicode version of logical color space structure
	dwFlags : DWORD,          // DWORD          // flags
	cbData  : DWORD,          // DWORD          // size of raw source profile data if attached
	Data    : array(BYTE, 1), // BYTE           // Array size is cbData
});
export const PEMRCREATECOLORSPACEW = pointer(EMRCREATECOLORSPACEW);
// export const EMRCREATECOLORSPACE = EMRCREATECOLORSPACEW;
// export const PEMRCREATECOLORSPACE = PEMRCREATECOLORSPACEW;

export const EMRCOLORMATCHTOTARGET = struct({
	emr      : EMR,            // EMR
	dwAction : DWORD,          // DWORD // CS_ENABLE, CS_DISABLE or CS_DELETE_TRANSFORM
	dwFlags  : DWORD,          // DWORD // flags
	cbName   : DWORD,          // DWORD // Size of desired target profile name
	cbData   : DWORD,          // DWORD // Size of raw target profile data if attached
	Data     : array(BYTE, 1), // BYTE  // Array size is cbName + cbData
});
export const PEMRCOLORMATCHTOTARGET = pointer(EMRCOLORMATCHTOTARGET);

export const EMRCOLORCORRECTPALETTE = struct({
	emr         : EMR,   // EMR
	ihPalette   : DWORD, // DWORD // Palette handle index
	nFirstEntry : DWORD, // DWORD // Index of first entry to correct
	nPalEntries : DWORD, // DWORD // Number of palette entries to correct
	nReserved   : DWORD, // DWORD // Reserved
});
export const PEMRCOLORCORRECTPALETTE = pointer(EMRCOLORCORRECTPALETTE);

export const EMRALPHABLEND = struct({
	emr          : EMR,      // EMR
	rclBounds    : RECTL,    // RECTL    // Inclusive-inclusive bounds in device units
	xDest        : LONG,     // LONG
	yDest        : LONG,     // LONG
	cxDest       : LONG,     // LONG
	cyDest       : LONG,     // LONG
	dwRop        : DWORD,    // DWORD
	xSrc         : LONG,     // LONG
	ySrc         : LONG,     // LONG
	xformSrc     : XFORM,    // XFORM    // Source DC transform
	crBkColorSrc : COLORREF, // COLORREF // Source DC BkColor in RGB
	iUsageSrc    : DWORD,    // DWORD    // Source bitmap info color table usage
	offBmiSrc    : DWORD,    // DWORD    // Offset to the source BITMAPINFO structure
	cbBmiSrc     : DWORD,    // DWORD    // Size of the source BITMAPINFO structure
	offBitsSrc   : DWORD,    // DWORD    // Offset to the source bitmap bits
	cbBitsSrc    : DWORD,    // DWORD    // Size of the source bitmap bits
	cxSrc        : LONG,     // LONG
	cySrc        : LONG,     // LONG
});
export const PEMRALPHABLEND = pointer(EMRALPHABLEND);

export const EMRGRADIENTFILL = struct({
	emr       : EMR,                 // EMR
	rclBounds : RECTL,               // RECTL     // Inclusive-inclusive bounds in device units
	nVer      : DWORD,               // DWORD
	nTri      : DWORD,               // DWORD
	ulMode    : ULONG,               // ULONG
	Ver       : array(TRIVERTEX, 1), // TRIVERTEX
});
export const PEMRGRADIENTFILL = pointer(EMRGRADIENTFILL);

export const EMRTRANSPARENTBLT = struct({
	emr          : EMR,      // EMR
	rclBounds    : RECTL,    // RECTL    // Inclusive-inclusive bounds in device units
	xDest        : LONG,     // LONG
	yDest        : LONG,     // LONG
	cxDest       : LONG,     // LONG
	cyDest       : LONG,     // LONG
	dwRop        : DWORD,    // DWORD
	xSrc         : LONG,     // LONG
	ySrc         : LONG,     // LONG
	xformSrc     : XFORM,    // XFORM    // Source DC transform
	crBkColorSrc : COLORREF, // COLORREF // Source DC BkColor in RGB
	iUsageSrc    : DWORD,    // DWORD    // Source bitmap info color table usage
	offBmiSrc    : DWORD,    // DWORD    // Offset to the source BITMAPINFO structure
	cbBmiSrc     : DWORD,    // DWORD    // Size of the source BITMAPINFO structure
	offBitsSrc   : DWORD,    // DWORD    // Offset to the source bitmap bits
	cbBitsSrc    : DWORD,    // DWORD    // Size of the source bitmap bits
	cxSrc        : LONG,     // LONG
	cySrc        : LONG,     // LONG
});
export const PEMRTRANSPARENTBLT = pointer(EMRTRANSPARENTBLT);

export const POINTFLOAT = struct({
	x : FLOAT, // FLOAT
	y : FLOAT, // FLOAT
});
export const PPOINTFLOAT = pointer(POINTFLOAT);

export const GLYPHMETRICSFLOAT = struct({
	gmfBlackBoxX     : FLOAT,      // FLOAT
	gmfBlackBoxY     : FLOAT,      // FLOAT
	gmfptGlyphOrigin : POINTFLOAT, // POINTFLOAT
	gmfCellIncX      : FLOAT,      // FLOAT
	gmfCellIncY      : FLOAT,      // FLOAT
});
export const PGLYPHMETRICSFLOAT = pointer(GLYPHMETRICSFLOAT);
export const LPGLYPHMETRICSFLOAT = pointer(GLYPHMETRICSFLOAT);

export const LAYERPLANEDESCRIPTOR = struct({
	nSize           : WORD,     // WORD
	nVersion        : WORD,     // WORD
	dwFlags         : DWORD,    // DWORD
	iPixelType      : BYTE,     // BYTE
	cColorBits      : BYTE,     // BYTE
	cRedBits        : BYTE,     // BYTE
	cRedShift       : BYTE,     // BYTE
	cGreenBits      : BYTE,     // BYTE
	cGreenShift     : BYTE,     // BYTE
	cBlueBits       : BYTE,     // BYTE
	cBlueShift      : BYTE,     // BYTE
	cAlphaBits      : BYTE,     // BYTE
	cAlphaShift     : BYTE,     // BYTE
	cAccumBits      : BYTE,     // BYTE
	cAccumRedBits   : BYTE,     // BYTE
	cAccumGreenBits : BYTE,     // BYTE
	cAccumBlueBits  : BYTE,     // BYTE
	cAccumAlphaBits : BYTE,     // BYTE
	cDepthBits      : BYTE,     // BYTE
	cStencilBits    : BYTE,     // BYTE
	cAuxBuffers     : BYTE,     // BYTE
	iLayerPlane     : BYTE,     // BYTE
	bReserved       : BYTE,     // BYTE
	crTransparent   : COLORREF, // COLORREF
});
export const PLAYERPLANEDESCRIPTOR = pointer(LAYERPLANEDESCRIPTOR);
export const LPLAYERPLANEDESCRIPTOR = pointer(LAYERPLANEDESCRIPTOR);

export const WGLSWAP = struct({
	hdc     : HDC,  // HDC
	uiFlags : UINT, // UINT
});
export const PWGLSWAP = pointer(WGLSWAP);
export const LPWGLSWAP = pointer(WGLSWAP);


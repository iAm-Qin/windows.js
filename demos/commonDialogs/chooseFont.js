import koffi from "koffi";

import {ChooseFont, CommDlgExtendedError} from "windows.js";
import {CF_EFFECTS, CF_USESTYLE} from "windows.js";
import {LOGFONT, CHOOSEFONT} from "windows.js";


const lf = Buffer.alloc(koffi.sizeof(LOGFONT));
const cf = {
	lStructSize: koffi.sizeof(CHOOSEFONT),
	hwndOwner: 0,
	hDC: 0,
	lpLogFont: lf,	// must use `Buffer`, even though the parameter of `ChooseFont` is declared `out`, and even though the field of `CHOOSEFONT` is declared `out`
	iPointSize: 0,
	Flags: CF_EFFECTS | CF_USESTYLE,
	rgbColors: 0xff,
	lCustData: 0,
	lpfnHook: null,
	lpTemplateName: null,
	hInstance: 0,
	lpszStyle: "宋体",	// todo don't know how to use it
	nFontType: 0,
	nSizeMin: 0,
	nSizeMax: 0,
};
const dr = await ChooseFont(cf);
if (!dr) {
	console.log("You cancelled the dialog, or an error code: ", (await CommDlgExtendedError()).toString(16));
} else {
	console.log({
		iPointSize: `${cf.iPointSize}`,	// font size * 10
		fontType: `${cf.nFontType}, 0x${cf.nFontType.toString(16)}`,
		logFont: koffi.decode(lf, LOGFONT),
	});
}

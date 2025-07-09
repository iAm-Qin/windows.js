import koffi from "koffi";

import {ChooseColor, CommDlgExtendedError} from "windows.js";
import {CHOOSECOLOR} from "windows.js";


const custColors = Buffer.from(""
	+ "FFFFFF00"
	+ "FFFF8000"
	+ "FFFF0000"
	+ "FF800000"
	+ "FF000000"
	+ "80000000"
	+ "00FFFF00"
	+ "00FF8000"
	+ "00FF0000"
	+ "00800000"
	+ "0000FF00"
	+ "AAAAAA00"
	+ "99999900"
	+ "66666600"
	+ "33333300"
	+ "11111100"
	, "hex");
const cc = {
	lStructSize: koffi.sizeof(CHOOSECOLOR),
	hwndOwner: 0,
	hInstance: 0,
	rgbResult: 0xff,	// maybe no way to set the default color
	lpCustColors: custColors,
	Flags: 0,
	lCustData: 0,
	lpfnHook: null,
	lpTemplateName: null,
	// lpEditInfo: null,
};
const dr = await ChooseColor(cc);
if (!dr) {
	console.log("You cancelled the dialog, or an error code: ", (await CommDlgExtendedError()).toString(16));
} else {
	console.log({
		rgbResult: `${cc.rgbResult}, #${cc.rgbResult.toString(16).padStart(6, "0")}`,
		custColors: custColors.toString("hex"),
	});
}

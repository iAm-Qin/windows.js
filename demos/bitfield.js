import {FindWindow, GetMenuBarInfo, GetLastError, FormatMessage} from "windows.js";
import {OBJID_MENU, FORMAT_MESSAGE_FROM_SYSTEM, FORMAT_MESSAGE_IGNORE_INSERTS} from "windows.js";
import {MENUBARINFO} from "windows.js";	// the only struct containing bitfields in `WinUser.h`
import {sizeof} from "windows.js";

const hWnd = await FindWindow("Notepad", null);
if (!hWnd) {
	console.log("`Notepad` window not found.");
	process.exit();
}

const mbi = new MENUBARINFO({	// **IMPORTANT** Must use the `new` operator to create the struct instance.
	cbSize: sizeof(MENUBARINFO),// **IMPORTANT** Do NOT use `koffi.sizeof()`. Use the export function of `windows.js`.
});

setInterval(async function () {
	console.clear();
	const r = await GetMenuBarInfo(hWnd, OBJID_MENU, 0, mbi.buffer);	// **IMPORTANT** Must pass the `structInstance.buffer` as the argument.
	if (!r) {
		const errorCode = await GetLastError();
		const buffer = Buffer.alloc(500 * 2);
		const len = await FormatMessage(
			FORMAT_MESSAGE_FROM_SYSTEM | FORMAT_MESSAGE_IGNORE_INSERTS,
			null, errorCode, 0, buffer, 500, null);
		return console.log({errorCode, msg: buffer.slice(0, len * 2).toString("ucs-2")});
	}
	console.log({r, menuBarInfo: mbi.toObject()});	// **IMPORTANT** Use the `structInstance.toObject()` to get the js object.

	if (!mbi.fBarFocused) {
		console.log("Please activate the notepad window, and click the menu bar.");
	} else {
		console.log("The menu bar of the notepad window is activated.");
	}
	console.log("Move the window to see the member `rcBar` change.");
}, 400);

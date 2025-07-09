/**
 * Calls the win32 `GetLastError` function when failed calling other win32 api function with `koffi` library.
 *
 * Unlike `ffi-napi`, `koffi` library will not call apis that will clear the last error code.
 * We don't need to write extra code for calling that function.
 * So `windows.js` directly uses `koffi.load("kernel32.dll").func("GetLastError")` to load the function.
 * With `ffi-napi`, we have to use `get-last-error` library.
 *
 * Unlike `ffi-napi`, you can use the async mode of the specific function for which you want to get the error code.
 *
 */
import {GetLastError, FormatMessage, LoadIcon, LoadImage} from "windows.js";
import {
	FORMAT_MESSAGE_FROM_SYSTEM, FORMAT_MESSAGE_IGNORE_INSERTS,
	IMAGE_ICON, LR_LOADFROMFILE, LR_LOADTRANSPARENT,
} from "windows.js";

if (0 === LoadIcon.sync(0, "notExists.ico")) {
	const errorCode = GetLastError.sync();
	console.log(errorCode, errorCode.toString(16));	// 1813, 0x715 - ERROR_RESOURCE_TYPE_NOT_FOUND

	const buffer = Buffer.alloc(500 * 2);
	const len = await FormatMessage(
		FORMAT_MESSAGE_FROM_SYSTEM | FORMAT_MESSAGE_IGNORE_INSERTS,
		null, errorCode, 0, buffer, 500, null);
	console.log({len, str: buffer.slice(0, len * 2).toString("ucs-2")});
}

if (0 === LoadImage.sync(0, "notExists.ico", IMAGE_ICON, 16, 16, LR_LOADFROMFILE | LR_LOADTRANSPARENT)) {
	const errorCode = GetLastError.sync();
	console.log(errorCode);	// 2 - ERROR_FILE_NOT_FOUND

	const buffer = Buffer.alloc(500 * 2);
	const len = await FormatMessage(
		FORMAT_MESSAGE_FROM_SYSTEM | FORMAT_MESSAGE_IGNORE_INSERTS,
		null, errorCode, 0, buffer, 500, null);
	console.log({len, str: buffer.slice(0, len * 2).toString("ucs-2")});
}

// async mode
if (0 === await LoadImage(0, "notExists.ico", IMAGE_ICON, 16, 16, LR_LOADFROMFILE | LR_LOADTRANSPARENT)) {
	console.log("Getting last error in async mode:", await GetLastError());
}

// callback mode
LoadImage.callback(0, "notExists.ico", IMAGE_ICON, 16, 16, LR_LOADFROMFILE | LR_LOADTRANSPARENT, async (err, r) => {
	if (0 === r) {
		console.log("Getting last error in callback mode:", await GetLastError());
	}

	const hIcon = await LoadImage(0, "icon.ico", IMAGE_ICON, 16, 16, LR_LOADFROMFILE | LR_LOADTRANSPARENT);
	console.log({hIcon});
});

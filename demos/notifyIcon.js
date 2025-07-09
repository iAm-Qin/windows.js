import koffi from "koffi";

import {
	PostQuitMessage, DefWindowProc,
	LoadImage,
	RegisterClassEx, CreateWindowEx,
	GetMessage, TranslateMessage, DispatchMessage,
	Shell_NotifyIconW,
	LOWORD, HIWORD,
	typecast,
} from "windows.js";
import {
	short,
	NULL,
} from "windows.js";
import {WNDPROC} from "windows.js";
import {MSG, WNDCLASSEX, NOTIFYICONDATA} from "windows.js";
import {
	IMAGE_ICON, LR_LOADFROMFILE, LR_LOADTRANSPARENT, WM_APP, WM_MOUSEMOVE, WM_CONTEXTMENU, HWND_MESSAGE,
	NIF_ICON,
	NIF_INFO,
	NIF_MESSAGE,
	NIF_TIP,
	NIIF_INFO,
	NIIF_LARGE_ICON,
	NIIF_USER,
	NIM_ADD,
	NIM_DELETE,
	NIM_SETVERSION,
	NIN_SELECT,
	NOTIFYICON_VERSION_4,
} from "windows.js";

import {hellos} from "./common.js";


const WMAPP_NOTIFYCALLBACK = WM_APP + 1;

// creates a window for receiving messages
const wndProc = koffi.register(function (hWnd, msg, wParam, lParam) {
	console.log("msg:", msg, "w:", wParam, "l:", lParam.toString(16));
	switch (msg) {
		case WMAPP_NOTIFYCALLBACK:
			const nid = HIWORD(lParam);
			console.log({nid});
			const x = typecast(short, LOWORD(wParam));
			const y = typecast(short, HIWORD(wParam));
			console.log({x, y});
			switch (LOWORD(lParam)) {
				case NIN_SELECT:	// NIN_SELECT is for VERSION_4
					console.log("Deleting the tray icon...");
					const ret = Shell_NotifyIconW.sync(NIM_DELETE, notifyIconData);
					console.log("Shell_NotifyIcon(NIM_DELETE):", ret);
					PostQuitMessage.sync(0);
					break;
				case WM_MOUSEMOVE:
					console.log("WM_MOUSEMOVE");
					break;
				case WM_CONTEXTMENU:
					console.log("WM_CONTEXTMENU");
					break;
			}
			break;
		default:
			return DefWindowProc.sync(hWnd, msg, wParam, lParam);
	}
	return 0;
}, WNDPROC);
const className = "aFormClass";
const wndClassEx = {
	cbSize: koffi.sizeof(WNDCLASSEX),
	lpfnWndProc: wndProc,
	lpszClassName: className,
};
await RegisterClassEx(wndClassEx);
const hWnd = CreateWindowEx.sync(0, className, "aForm", 0, 0, 0, 0, 0, HWND_MESSAGE, 0, 0, null);
console.log("hWnd:", hWnd.toString(16));

const hIcon = await LoadImage(0, "icon.ico", IMAGE_ICON, 16, 16, LR_LOADFROMFILE | LR_LOADTRANSPARENT);
console.log("hIcon:", hIcon.toString(16));

// creates the tray icon
const notifyIconData = {
	cbSize: koffi.sizeof(NOTIFYICONDATA),
	hWnd,
	uID: 1,
	uCallbackMessage: WMAPP_NOTIFYCALLBACK,
	uFlags: NIF_MESSAGE | NIF_ICON | NIF_TIP | NIF_INFO,
	hIcon,
	hBalloonIcon: hIcon,
	szTip: "Hello, I'm a tray icon! 你好，我是托盘图标！",
	szInfo: hellos,
	szInfoTitle: "Hello. 你好！",
	dwInfoFlags: NIIF_USER,
	u: {
		uVersion: NOTIFYICON_VERSION_4,	// uVersion is not for NIM_ADD. It's for NIM_SETVERSION
	},
};

console.log("Adding a tray icon...");
let ret = await Shell_NotifyIconW(NIM_ADD, notifyIconData);
console.log("Shell_NotifyIcon(NIM_ADD):", ret);

console.log("Setting version of the tray icon...");
ret = await Shell_NotifyIconW(NIM_SETVERSION, notifyIconData);
console.log("Shell_NotifyIcon(NIM_SETVERSION):", ret);

// message loop
const msg = {};
while (GetMessage.sync(msg, NULL, 0, 0)) {	// do NOT use async, or the function never returns
	TranslateMessage.sync(msg);				// do NOT use async, or the function never returns
	DispatchMessage.sync(msg);				// do NOT use async, or the function never returns
}

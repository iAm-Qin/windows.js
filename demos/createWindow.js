/**
 * Windows API 'CreateWindowEx' Example.
 * The Hello world of the Windows GUI.
 */
import koffi from "koffi";

import {
	CreateFont,
	BeginPaint, SelectObject, GetClientRect, SetTextColor, SetBkMode, DrawText, EndPaint,
	GetStockObject,
	PostQuitMessage, DefWindowProc,
	LoadImage,
	RegisterClassEx, CreateWindowEx,
	ShowWindow, UpdateWindow,
	GetMessage, TranslateMessage, DispatchMessage,
} from "windows.js";
import {
	IMAGE_ICON,
	LR_LOADFROMFILE, LR_LOADTRANSPARENT,
	DT_CENTER, DT_VCENTER,
	CS_HREDRAW, CS_VREDRAW,
	CW_USEDEFAULT,
	WS_OVERLAPPEDWINDOW,
	WM_DESTROY, WM_PAINT,
	SW_SHOWNORMAL,
	FALSE, NULL,
} from "windows.js";
import {ANSI_CHARSET, CLIP_DEFAULT_PRECIS, DEFAULT_PITCH, DEFAULT_QUALITY, FF_DONTCARE, FW_DONTCARE, OUT_TT_PRECIS, TRANSPARENT, WHITE_BRUSH} from "windows.js";
import {WNDPROC} from "windows.js";
import {WNDCLASSEX, MSG, PAINTSTRUCT, RECT} from "windows.js";

import {hellos} from "./common.js";

import polyfill from "esm-dirname-polyfill";

polyfill(import.meta);

import {Worker, isMainThread, threadId, parentPort} from "worker_threads";


if (isMainThread) {
	const filename = import.meta.filename;
	const worker = new Worker(filename);
	worker.on("error", console.error);
	worker.on("message", msg => {
		switch (msg.msg) {
			case "log":
				console.log(...msg.args);
				break;
			case "exit":
				clearInterval(timer);
				break;
		}
	});
	const timer = setInterval(() => console.log("Main thread timer"), 1000);
} else {
	// Cannot directly output after entering the message loop,
	// because the script of the worker thread does not return and javascript is single-thread.
	// We post the messages to the main thread to output it.
	// **NOTE** You may lose some information while posting, because only serializable values can be post.
	console.log = function (...args) {
		parentPort.postMessage({threadId, msg: "log", args});
	};

	// Cannot trigger after entering the message loop,
	// because the script of the worker thread is not returned and javascript is single thread.
	const timer = setInterval(() => console.log("Worker thread timer"), 1000);


	// the font
	const hFont = await CreateFont(24, 0, 0, 0, FW_DONTCARE, FALSE, FALSE, FALSE, ANSI_CHARSET,
		OUT_TT_PRECIS, CLIP_DEFAULT_PRECIS, DEFAULT_QUALITY,
		DEFAULT_PITCH | FF_DONTCARE, "");
	console.log({hFont});

	// the window proc
	const wndProc = koffi.register(function (hWnd, msg, wParam, lParam) {	// Do NOT use async for a Window proc
		console.log("Window proc called. hWnd:", hWnd.toString(16), "msg:", msg, "wParam:", wParam, "lParam:", lParam.toString(16));

		switch (msg) {
			case WM_PAINT: {
				const ps = Buffer.alloc(100);
				const rc = Buffer.alloc(100);
				const hDc = BeginPaint.sync(hWnd, ps);	// Do NOT use async in a Window proc

				SelectObject.sync(hDc, hFont);

				GetClientRect.sync(hWnd, rc);
				SetTextColor.sync(hDc, 0);
				SetBkMode.sync(hDc, TRANSPARENT);
				DrawText.sync(hDc, hellos, -1, rc, DT_CENTER | DT_VCENTER);

				EndPaint.sync(hWnd, ps);
				break;
			}
			case WM_DESTROY:
				PostQuitMessage.sync(0);	// Do NOT use async in a Window proc
				break;
			default:
				const r = DefWindowProc.sync(hWnd, msg, wParam, lParam);	// Do NOT use async
				console.log("DefWindowProc:", r);
				return r;
		}
		return 0;	// Must return 0, or the DispatchMessage function will raise an error when close the window.
	}, WNDPROC);

	// registers the window class
	const className = "aFormClass";
	const wndClassEx = {
		cbSize: koffi.sizeof(WNDCLASSEX),
		lpfnWndProc: wndProc,
		lpszClassName: className,

		// below are optional
		style: CS_HREDRAW | CS_VREDRAW,
		hbrBackground: await GetStockObject(WHITE_BRUSH),
		hIconSm: await LoadImage(0, "icon.ico", IMAGE_ICON, 16, 16, LR_LOADFROMFILE | LR_LOADTRANSPARENT),
	};
	const atom = await RegisterClassEx(wndClassEx);	// can be async
	console.log({atom});

	// creates the window
	const hWnd = CreateWindowEx.sync(0, className, "a form created in node.js", WS_OVERLAPPEDWINDOW,
		CW_USEDEFAULT, CW_USEDEFAULT, CW_USEDEFAULT, CW_USEDEFAULT,
		0, 0, 0, null);	// Do NOT use async, or the ShowWindow function never returns.
	console.log("hWnd:", hWnd.toString(16));

	// shows the window
	console.log("ShowWindow:", ShowWindow.sync(hWnd, SW_SHOWNORMAL));	// Do NOT use async，会卡死的
	console.log("UpdateWindow:", UpdateWindow.sync(hWnd));				// Do NOT use async, or the function never returns.

	// the message loop
	const msg = {};
	while (GetMessage.sync(msg, NULL, 0, 0)) {	// Do NOT use async, or the function never returns.
		TranslateMessage.sync(msg);				// Do NOT use async, or the function never returns.
		DispatchMessage.sync(msg);				// Do NOT use async, or the function never returns.
	}

	parentPort.postMessage({threadId, msg: "exit"});
	clearInterval(timer);
}

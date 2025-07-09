import koffi from "koffi";

import {
	RegisterWindowMessage,
	DefWindowProc, PostQuitMessage,
	RegisterClassEx, CreateWindowEx,
	GetMessage, TranslateMessage, DispatchMessage,
	IsDialogMessage,
} from "windows.js";
import {FindText, ReplaceText, CommDlgExtendedError} from "windows.js";
import {FINDREPLACE} from "windows.js";
import {
	FINDMSGSTRING,
	FR_DIALOGTERM, FR_FINDNEXT, FR_REPLACE, FR_REPLACEALL, FR_DOWN, FR_MATCHCASE, FR_WHOLEWORD,
	WM_CREATE,
	NULL,
} from "windows.js";

import {WNDPROC} from "windows.js";
import {WNDCLASSEX} from "windows.js";
import {HWND_MESSAGE} from "windows.js";


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

	// message identifier for FINDMSGSTRING
	const uFindReplaceMsg = await RegisterWindowMessage(FINDMSGSTRING);
	console.log({uFindReplaceMsg});

	let hDlg;

	// creates a window for receiving messages
	const wndProc = koffi.register(function (hWnd, msg, wParam, lParam) {
		console.log("msg:", msg, "w:", wParam, "l:", lParam.toString(16));
		switch (msg) {
			case uFindReplaceMsg:

				// casts the `lParam` into `FINDREPLACE*`.
				// equivalent to `FINDREPLACE* pfr = (FINDREPLACE*) lParam;` in C language.
				const buf = Buffer.alloc(8);
				buf.writeBigInt64LE(BigInt(lParam));
				const pfr = koffi.decode(buf, koffi.pointer(FINDREPLACE));

				const fr = koffi.decode(pfr, FINDREPLACE);
				console.log({fr});
				if (fr.Flags & FR_FINDNEXT) {
					console.log("You clicked the `Find Next` button.");
					console.log("lpstrFindWhat:", fr.lpstrFindWhat);
					console.log("FR_DOWN:", !!(fr.Flags & FR_DOWN));
					console.log("FR_MATCHCASE:", !!(fr.Flags & FR_MATCHCASE));
					console.log("FR_WHOLEWORD:", !!(fr.Flags & FR_WHOLEWORD));
				}
				if (fr.Flags & FR_REPLACE) {
					console.log("You clicked the `Replace` button.");
					console.log("lpstrFindWhat:", fr.lpstrFindWhat);
					console.log("lpstrReplaceWith:", fr.lpstrReplaceWith);
					console.log("FR_DOWN:", !!(fr.Flags & FR_DOWN));
					console.log("FR_MATCHCASE:", !!(fr.Flags & FR_MATCHCASE));
					console.log("FR_WHOLEWORD:", !!(fr.Flags & FR_WHOLEWORD));
				}
				if (fr.Flags & FR_REPLACEALL) {
					console.log("You clicked the `Replace All` button.");
					console.log("lpstrFindWhat:", fr.lpstrFindWhat);
					console.log("lpstrReplaceWith:", fr.lpstrReplaceWith);
					console.log("FR_DOWN:", !!(fr.Flags & FR_DOWN));
					console.log("FR_MATCHCASE:", !!(fr.Flags & FR_MATCHCASE));
					console.log("FR_WHOLEWORD:", !!(fr.Flags & FR_WHOLEWORD));
				}
				if (fr.Flags & FR_DIALOGTERM) {
					console.log("The dialog is closing. The handle of the dialog will be invalid.");
					hDlg = null;
					PostQuitMessage.sync(0);
				}
				break;
			case WM_CREATE: {
				// **IMPORTANT** Should NOT create the dialog before entering the message loop

				const findWhat = Buffer.alloc(100 * 2);	// at least 80 characters
				const replaceWith = Buffer.alloc(100 * 2);
				const fr = {
					lStructSize: koffi.sizeof(FINDREPLACE),
					hwndOwner: hWnd,	// must not be NULL
					hInstance: 0,
					Flags: 0,
					lpstrFindWhat: findWhat,
					lpstrReplaceWith: replaceWith,
					wFindWhatLen: findWhat.length / 2,
					wReplaceWithLen: replaceWith.length / 2,
					lCustData: 0,
					lpfnHook: null,
					lpTemplateName: null,
				};
				hDlg = ReplaceText.sync(fr);
				if (!hDlg) {
					console.log("An error code: ", (CommDlgExtendedError.sync()).toString(16));
				}
				break;
			}
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

	// **IMPORTANT** Should NOT create the dialog here, it must be created after entering the message loop

	// message loop
	const msg = {};
	while (GetMessage.sync(msg, NULL, 0, 0)) {	// do NOT use async, or the function never returns
		if (hDlg && IsDialogMessage.sync(hDlg, msg)) {
			continue;
		}
		TranslateMessage.sync(msg);		// do NOT use async, or the function never returns
		DispatchMessage.sync(msg);		// do NOT use async, or the function never returns
	}

	parentPort.postMessage({threadId, msg: "exit"});
}

import koffi from "koffi";

import {
	GetModuleHandle, GetModuleFileName,
	GetConsoleWindow, GetStdHandle, GetCommandLine,
	CommandLineToArgvW,
	GetCurrentDirectory,
	LocalFree,
} from "windows.js";
import {MAX_PATH} from "windows.js";
import {STD_ERROR_HANDLE, STD_INPUT_HANDLE, STD_OUTPUT_HANDLE} from "windows.js";
import {LPCWSTR} from "windows.js";
import {int} from "windows.js";

// Gets the handle of current module(node.exe).
const hInstance = await GetModuleHandle(null/* or 0 */);
console.log({hInstance, hex: hInstance.toString(16)});

// Gets the filepath of current module
const filepath = Buffer.alloc(MAX_PATH * 2);
const len = await GetModuleFileName(hInstance/* or 0 */, filepath, MAX_PATH);
console.log({
	len, filepath: filepath.slice(0, len * 2).toString("ucs2"),
	wholeBufferToString: filepath.toString("ucs-2"),
});
{
	// Can also pass the js Array with one element of string to the functions,
	// because the parameters of the functions are declared `_Out_` or `_Inout_`
	const filepath = ["\0".repeat(MAX_PATH * 2)];
	const len = await GetModuleFileName(hInstance/* or 0 */, filepath, MAX_PATH);
	console.log({len, filepath: filepath[0]});
}

// Gets the handles of the console window.
const hConsoleWnd = await GetConsoleWindow();
console.log({hConsoleWnd, hex: hConsoleWnd.toString(16)});

const hConsoleInput = await GetStdHandle(STD_INPUT_HANDLE);
console.log({hConsoleInput, hex: hConsoleInput.toString(16)});

const hConsoleOutput = await GetStdHandle(STD_OUTPUT_HANDLE);
console.log({hConsoleOutput, hex: hConsoleOutput.toString(16)});

const hConsoleError = await GetStdHandle(STD_ERROR_HANDLE);
console.log({hConsoleError, hex: hConsoleError.toString(16)});

// Gets the command line and parse it.
console.log("commandLine:", (await GetCommandLine()).toString());
const pArgn = koffi.alloc(int, 1);
const szArgv = await CommandLineToArgvW(await GetCommandLine(), pArgn);
console.log({szArgv});
if (szArgv) {
	const argn = koffi.decode(pArgn, int);
	const argv = koffi.decode(szArgv, koffi.array(LPCWSTR, argn + 1));	// crashes if argn + 2
	console.log({argn, argv});
	await LocalFree(koffi.address(szArgv));
}
koffi.free(pArgn);

// Gets the current directory
{
	const currentDirectory = Buffer.alloc(MAX_PATH * 2);
	const len = await GetCurrentDirectory(MAX_PATH, currentDirectory);
	console.log({len, currentDirectory: currentDirectory.slice(0, len * 2).toString("ucs2")});
}

// Get the handles and filepath of other modules.
{
	const hInstanceKernel32 = await GetModuleHandle("kernel32.dll");
	console.log({hInstanceKernel32, hex: hInstanceKernel32.toString(16)});

	const len = await GetModuleFileName(hInstanceKernel32, filepath, MAX_PATH);
	console.log({len, filepath: filepath.slice(0, len * 2).toString("ucs2")});
}
{
	const hInstanceUser32 = await GetModuleHandle("user32.dll");
	console.log({hInstanceUser32, hex: hInstanceUser32.toString(16)});

	const len = await GetModuleFileName(hInstanceUser32, filepath, MAX_PATH);
	console.log({len, filepath: filepath.slice(0, len * 2).toString("ucs2")});
}

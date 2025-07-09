windows.js
=============

The Windows SDK.

Supports most functions, structs, callbacks, constants and enums in the user32.dll, kernel32.dll, gdi32.dll, shell32.dll, and comdlg32.dll.

Loads the functions on demand.

**Supports the bitfield feature in structs.**

**Supports the Treeshake.**

### Dependencies

- koffi (https://koffi.dev/)

### Minimum

- `node.js` 16.20.2 (maybe lower, but I didn't test.)
- `windows` 7
- `electron` I didn't test.

### Remark

- **NOTE** Only the symbols(functions, structs, etc.) used in `demos/**` are tested. No guarantee to the correction of the rest ones. Use them carefully.

Installation
------------

```
> npm install windows.js@npm:@qinjianwei/windows.js
```

Sadly the package name `windows.js` is used by an empty package. I cannot use it.

Examples
--------

### ESModule style

```js
// hello.js

import {MessageBox} from "windows.js";
import {MB_OK} from "windows.js";
import {hellos} from "./common.js";

await MessageBox(0, "大家好，我是来自 node.js 星球的 Windows SDK，这是我对 MessageBox 函数调用。\n" +
	"Hello! I'm being rendered by the MessageBox API of the Windows SDK of Node.js\n" + hellos, "hello，您好!", MB_OK);
```

### CommonJS style

```js
// hello-commonJs.cjs

const fs = require("fs");
const path = require("path");

(async function () {
	console.log(__filename);

	const {MessageBox, MB_OK} = await import(`windows.js`);

	await MessageBox(0, "Call the Windows SDK in a CommonJS file.\n", "", MB_OK);
})();
```

### Async/Sync/Callback mode

```js
// hello-syncMode.js

import {MessageBox} from "windows.js";
import {MB_OK} from "windows.js";

await MessageBox(0, "async mode", "windows.js", MB_OK);
MessageBox.sync(0, "sync mode", "windows.js", MB_OK);
MessageBox.callback(0, "The callback mode the `koffi` supplied is preserved.\n" +
	"But I don't think anyone intends to use it any more, " +
	"because we have the graceful `await` operator to call the `async` function. Amazing!",
	"callback mode", MB_OK,
	(err, dr) => {
		if (err) {
			return console.error(err);
		}
		console.log({dr});
	},
);
```

### GetLastError

This package supplies the `GetLastError` function to get the error code after calling apis.

Unlike `ffi-napi`, `koffi` library will not call apis that will clear the last error code. We don't need to write extra code for calling that function. So `windows.js` directly uses `koffi.load
("kernel32.dll").func("GetLastError")` to load the function. With `ffi-napi`, we have to use `get-last-error` library.

Unlike `ffi-napi`, you can use the async mode of the specific function for which you want to get the error code.

```js
// getLastError.js

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
```

### Bitfield in structs

Bitfield in structs is now supported. Because the `koffi` does not support it, it took me a few days to implement this feature in js code. The struct, union, array, and bitfield dependant each other.
I have to implement all of them.

See the `demos/bitfield.js` for the demo getting the menu bar info of a notepad window using the only struct `MENUBARINFO` containing bitfields in `WinUser.h`.

#### Differences to the `koffi`

- Must use the `new` operator to create the struct instance.
- Do NOT use `koffi.sizeof()`. Use the `sizeof()` exported from `windows.js`.
- Must pass the `structInstance.buffer` as the argument.
- Use the `structInstance.toObject()` to get the js object.

```js
import {sizeof} from "windows.js";

const mbi = new MENUBARINFO({	// **IMPORTANT** Must use the `new` operator to create the struct instance.
	cbSize: sizeof(MENUBARINFO),// **IMPORTANT** Do NOT use `koffi.sizeof()`. Use the export function of `windows.js`.
});
const r = await GetMenuBarInfo(hWnd, OBJID_MENU, 0, mbi.buffer);	// **IMPORTANT** Must pass the `structInstance.buffer` as the argument.
console.log({r, menuBarInfo: mbi.toObject()});	// **IMPORTANT** Use the `structInstance.toObject()` to get the js object.
```

### See the `demos` directory for more examples.

- `createWindow.js` The Hello world of the Windows GUI.
- `notifyIcon.js` Creates a tray icon which can be closed by clicking on it.
- `moduleInfo.js` Basic infomation getting, using functions in `kernel32.dll`.
- `loadLibraryRemote.js` Demonstrates the injection of dll into the `explorer.exe` process.
- `commonDialogs/*.js` Examples of calling the functions in `comdlg32.dll`.
- `bitfield.js` Demonstrates the bitfield support in the structs.

Unicode and ANSI
--------

Some Windows APIs are defined two versions: Unicode and ANSI. The SDK supports both of them.

Calling APIs ending with `W` will use the unicode version, while `A` stands for the ANSI version.

If a symbol(function, struct, callback, etc.) has both the two versions, a default alias without the ending `W` or `A` to the unicode version is also exported.

Strongly recommend using the unicode version.

```js
import {MessageBox, MessageBoxA, MessageBoxW} from "windows.js";
import {MB_OK} from "windows.js";
import {L} from "windows.js";

await MessageBoxA(0, "I am Node.JS!", "Hello, World!", MB_OK);
await MessageBoxW(0, "I am Node.JS!", "Hello, World!", MB_OK);

// You don't need to use the `L` function for strings anymore.
// Unlike `ffi-napi`, the `koffi` library supports `str16` for unicode strings to declare parameters.
// You can directly pass the js strings to the functions, now!
// But if you love this style, you can keep it. The `L` function now directly returns the string inputted.
await MessageBoxW(0, L("I am Node.JS!"), L("Hello, World!"), MB_OK);

// MessageBox is the alias of MessageBoxW.
await MessageBox(0, "I am Node.JS!", "Hello, World!", MB_OK);
```

Treeshake
--------

The package exports a default config of `rollup` at `./treeshake/rollup.config`. You can use it to extend your config. See the example:

```js
// demos/rollup.config.js

import defConfig from "windows.js/treeshake/rollup.config";

// change the default config here, or at the `Object.assign()`.
defConfig.treeshake.moduleSideEffects = false;

export default {
	input: "hello.js",
	output: {
		file: "dist/hello.js",
		sourcemap: true,
		sourcemapExcludeSources: true,
	},
	treeshake: Object.assign({}, defConfig.treeshake),
	external: Object.assign({}, defConfig.external),
};
```

```shell
> rollup -c
```

```js
// outputs(see `demos/dist/hello.js`):

import koffi from 'koffi';
import 'process';
import {promisify} from 'util';

const int = koffi.types.int;
const uint = koffi.types.uint;

const HANDLE = koffi.types.size_t;

const UINT = uint;

const LPCWSTR = koffi.types.str16;

const HWND = HANDLE;

function createAutoLoader (lib, entryName, entryType, entryParams, loaded = func => {}) {
	// ...
}

const MB_OK = 0x00000000;

const lib = koffi.load("user32.dll");

function MessageBoxW () {}

MessageBoxW = createAutoLoader(lib, "MessageBoxW", int /* int */, [
	HWND,    /* in opt HWND    hWnd      */
	LPCWSTR, /* in opt LPCWSTR lpText    */
	LPCWSTR, /* in opt LPCWSTR lpCaption */
	UINT,    /* in     UINT    uType     */
], f => MessageBoxW = f);

const hellos = ""
	// ...
;

// MessageBox 是 MessageBoxW 的别名。
// MessageBox is the alias for MessageBoxW.
await MessageBoxW(0, "大家好，我是来自 node.js 星球的 Windows SDK，这是我对 MessageBox 函数的调用。\n" +
	"Hello! I'm being rendered by the MessageBox API of the Windows SDK of Node.js\n" + hellos, "hello，您好!", MB_OK);
//# sourceMappingURL=hello.js.map
```

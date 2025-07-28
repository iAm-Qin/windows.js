import koffi from "koffi";

import {struct, array, sizeof} from "windows.js";
import {
	GetLastError, FormatMessage,
	FindResource, LoadResource, SizeofResource, LockResource,
} from "windows.js";
import {RT_VERSION, FORMAT_MESSAGE_FROM_SYSTEM, FORMAT_MESSAGE_IGNORE_INSERTS} from "windows.js";
import {NULL, DWORD, WCHAR, WORD} from "windows.js";


const hRsrc = await FindResource(NULL, 1, RT_VERSION);	// works by passing integer values
console.log({hRsrc});
{
	// also works by passing string values that start with a pound sign(#)
	// and the remaining characters represent a decimal number that specifies
	// the integer identifier of the resource's name or type.
	const hRsrc = await FindResource(NULL, "#1", "#" + RT_VERSION);
	console.log({hRsrc});
}

if (NULL === hRsrc) {
	await showError("Error FindResource:");
}

const hGlobal = await LoadResource(NULL, hRsrc);
console.log({hGlobal});
if (NULL === hGlobal) {
	await showError("Error LoadResource:");
}

const size = await SizeofResource(NULL, hGlobal);
console.log({size});
if (0 === size) {
	await showError("Error SizeofResource:");
}

const lpvoid = await LockResource(hGlobal);
if (null === lpvoid) {
	await showError("Error LockResource:");
}

//@formatter: off
const VS_VERSIONINFO = struct({
	wLength      : WORD,                       // WORD  wLength
	wValueLength : WORD,                       // WORD  wValueLength
	wType        : WORD,                       // WORD  wType
	szKey        : array(WCHAR, 16, "String"), // WCHAR szKey[16]
	Padding1     : WORD,                       // WORD  Padding1
});
const VS_FIXEDFILEINFO = struct({
	dwSignature        : DWORD, // DWORD dwSignature
	dwStrucVersion     : DWORD, // DWORD dwStrucVersion
	dwFileVersionMS    : DWORD, // DWORD dwFileVersionMS
	dwFileVersionLS    : DWORD, // DWORD dwFileVersionLS
	dwProductVersionMS : DWORD, // DWORD dwProductVersionMS
	dwProductVersionLS : DWORD, // DWORD dwProductVersionLS
	dwFileFlagsMask    : DWORD, // DWORD dwFileFlagsMask
	dwFileFlags        : DWORD, // DWORD dwFileFlags
	dwFileOS           : DWORD, // DWORD dwFileOS
	dwFileType         : DWORD, // DWORD dwFileType
	dwFileSubtype      : DWORD, // DWORD dwFileSubtype
	dwFileDateMS       : DWORD, // DWORD dwFileDateMS
	dwFileDateLS       : DWORD, // DWORD dwFileDateLS
});
const StringFileInfo = struct({
	wLength      : WORD,                       // WORD        wLength
	wValueLength : WORD,                       // WORD        wValueLength
	wType        : WORD,                       // WORD        wType
	szKey        : array(WCHAR, 15, "String"), // WCHAR       szKey
	// Padding   : WORD,                       // WORD        Padding
	// Children  : StringTable,                // StringTable Children
})
const StringTable = struct({
	wLength      : WORD,                      // WORD   wLength
	wValueLength : WORD,                      // WORD   wValueLength
	wType        : WORD,                      // WORD   wType
	szKey        : array(WCHAR, 9, "String"), // WCHAR  szKey
	// Padding   : WORD,                      // WORD   Padding
	// Children  : String,                    // String Children
})
const String = struct({
	wLength      : WORD,  // WORD  wLength
	wValueLength : WORD,  // WORD  wValueLength
	wType        : WORD,  // WORD  wType
	// szKey     : WCHAR, // WCHAR szKey
	// Padding   : WORD,  // WORD  Padding
	// Value     : WORD,  // WORD  Value
	// Padding2  : WORD,  //                     // Figured out. Not in the doc(2023/06/13) of microsoft.
})
//@formatter: on

let offset = 0;

const versionInfo = koffi.decode(lpvoid, VS_VERSIONINFO);
console.log({versionInfo});
offset += sizeof(VS_VERSIONINFO);

const vsFixedFileInfo = koffi.decode(lpvoid, offset, VS_FIXEDFILEINFO);
console.log({vsFixedFileInfo});
offset += sizeof(VS_FIXEDFILEINFO);

const stringFileInfo = koffi.decode(lpvoid, offset, StringFileInfo);
console.log({stringFileInfo});
offset += sizeof(StringFileInfo);

const stringTable = koffi.decode(lpvoid, offset, StringTable);
stringTable.offset = offset;
console.log({stringTable});
offset += sizeof(StringTable);

while (offset - stringTable.offset < stringTable.wLength) {
	const string = koffi.decode(lpvoid, offset, String);
	offset += sizeof(String);

	const szKey = koffi.decode(lpvoid, offset, "wchar", string.wLength);
	offset += (szKey.length + 1) * sizeof(WCHAR);
	offset += offset % sizeof(DWORD);	// padding to DWORD

	const value = koffi.decode(lpvoid, offset, "wchar", string.wValueLength);
	offset += (value.length + 1) * sizeof(WCHAR);
	offset += offset % sizeof(DWORD);	// padding to DWORD

	console.log({string, szKey, value});
}

async function showError (msg) {
	const errorCode = await GetLastError();
	const buffer = Buffer.alloc(500 * 2);
	const len = await FormatMessage(
		FORMAT_MESSAGE_FROM_SYSTEM | FORMAT_MESSAGE_IGNORE_INSERTS,
		null, errorCode, 0, buffer, 500, null);
	console.log(msg, errorCode, errorCode.toString(16), koffi.decode(buffer, "wchar", len));
	process.exit();
}

import koffi from "koffi";

// basic
import {pointer, out} from "../../types.js";
import {va_list} from "../../types.js";

// minwindef.h
import {DWORD, LPCVOID, LPVOID} from "../minwindef.h/minWindef.js";


const lib = koffi.load("kernel32.dll");
import {createAutoLoader} from "../../internals/loader.js";

// 头文件声明太复杂，正则表达式识别不了，手动添加

export function FormatMessageA () {}

FormatMessageA = createAutoLoader(lib, "FormatMessageA", DWORD /* DWORD */, [
	DWORD,            /* in     DWORD     dwFlags      */
	LPCVOID,          /* in opt LPCVOID   lpSource     */
	DWORD,            /* in     DWORD     dwMessageId  */
	DWORD,            /* in     DWORD     dwLanguageId */
	out(LPVOID),      /* out    LPSTR     lpBuffer     */
	DWORD,            /* in     DWORD     nSize        */
	pointer(va_list), /* in opt va_list * Arguments    */
], f => FormatMessageA = f);

export function FormatMessageW () {}

FormatMessageW = createAutoLoader(lib, "FormatMessageW", DWORD /* DWORD */, [
	DWORD,            /* in     DWORD     dwFlags      */
	LPCVOID,          /* in opt LPCVOID   lpSource     */
	DWORD,            /* in     DWORD     dwMessageId  */
	DWORD,            /* in     DWORD     dwLanguageId */
	out(LPVOID),      /* out    LPWSTR    lpBuffer     */
	DWORD,            /* in     DWORD     nSize        */
	pointer(va_list), /* in opt va_list * Arguments    */
], f => FormatMessageW = f);
export {FormatMessageW as FormatMessage};

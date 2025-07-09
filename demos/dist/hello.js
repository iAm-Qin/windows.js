import koffi from 'koffi';
import { promisify } from 'util';

const int = koffi.types.int;
const uint = koffi.types.uint;
const size_t = koffi.types.size_t;

// winnt.h 循环引用
const HANDLE = size_t;

const UINT = uint;					// typedef unsigned int        UINT;

const LPCWSTR = koffi.types.str16;

/***
 * 为指定的 entryPoint 创建一个 loader。
 * 注：
 * 1、loader 加载的函数是异步模式。
 * 2、也可使用 .sync() 调用原同步方法，如 .MessageBox.sync(0, "", "", 0)。
 * 3、也可使用 .callback() 调用 原异步方法。
 *
 * @param lib         {object} `koffi` 加载的动态库，如：`lib = koffi.load("user32.dll")`。
 * @param entryName   {string} 函数(entryPoint)名称。
 * @param entryType   {any}  函数返回值类型。
 * @param entryParams {Array}  参数定义。
 * @param loaded      {function(function)} 回调，用于覆盖掉原来的 loader，如 `f => MessageBox = f`，后续调用就会直接调用已加载的函数了。一定要使用此办法，否则虽然能运行，但每次调用函数都会先调用 loader，效率就低了。
 *
 * @return {function<Promise>}
 */
function createAutoLoader (lib, entryName, entryType, entryParams, loaded = func => {}) {
	// 思路：首先赋值为 loader，首次调用时调用的是 loader，loader 中使用 koffi 加载对应的函数并调用，
	// 并用所加载的函数覆盖掉 loader；后续调用则是直接调用已加载的函数。

	loader.sync = syncLoader;
	loader.callback = callbackLoader;
	return loader;	// 首先赋值为 loader

	/**
	 * 先加载，再调用。
	 * 注：
	 * 1、加载时，会将本 loader 覆盖掉，再次调用则不会再次加载。
	 * 2、手动加载时也会将本 loader 覆盖掉。
	 * 3、加载的函数是异步模式(async function)，如需同步模式请手动加载。
	 * 4、也可以使用 .sync() 调用原同步方法，如 .MessageBox.sync(0, "", "", 0)。
	 * 5、也可以使用 .callback() 调用原异步方法，如 .MessageBox.callback(0, "", "", 0, (err, dr) => {})。
	 *
	 * @return {Promise<*>}
	 */
	async function loader () {
		const func = load();
		return await func(...arguments);
	}

	function syncLoader () {
		const func = load();
		return func.sync(...arguments);
	}

	function callbackLoader () {
		const func = load();
		return func.callback(...arguments);
	}

	/**
	 * loader 的通用方法。
	 */
	function load () {
		const func = lib.func("__stdcall", entryName, entryType, entryParams);
		const sync = func;
		const callback = func.async;
		const promise = promisify(callback);	// 默认是异步模式
		promise.sync = sync;					// 并且保留同步模式
		promise.callback = callback;			// 并且保留回调模式
		loaded(promise);	// 覆盖掉原来的 loader
		return promise;	// 是为了给3个 loader 用
	}
}

// @formatter: off

const HWND = HANDLE;					// DECLARE_HANDLE            (HWND);

const MB_OK = 0x00000000;

const lib = koffi.load("user32.dll");

function MessageBoxW () {}MessageBoxW = createAutoLoader(lib, "MessageBoxW", int /* int */, [
	HWND,    /* in opt HWND    hWnd      */
	LPCWSTR, /* in opt LPCWSTR lpText    */
	LPCWSTR, /* in opt LPCWSTR lpCaption */
	UINT,    /* in     UINT    uType     */
], f => MessageBoxW = f);

const hellos = ""
	+ "Hello" + "\r\n"
	+ "你好" + "\r\n"
	+ "こんにちは" + "\r\n"	// 日语
	+ "안녕하세요" + "\r\n"	// 韩语
	+ "Bonjour" + "\r\n"	// 法语
	+ "Hallo" + "\r\n"		// 德语
	+ "Привет" + "\r\n"		// 俄语
	+ "مرحبا" + "\r\n"		// 阿拉伯语
	+ "hej" + "\r\n"		// 丹麦语
	+ "Olá" + "\r\n"		// 葡萄牙语
	+ "tere" + "\r\n"		// 爱沙尼亚语
	+ "Hallo" + "\r\n"		// 荷兰语
	+ "Buenas" + "\r\n"		// 西班牙语
	+ "здравей" + "\r\n"	// 保加利亚语
	+ "ahoj" + "\r\n"		// 捷克语
	+ "hej" + "\r\n"		// 瑞典语
	+ "Γεια σου" + "\r\n"	// 希腊语
	+ "Ciao" + "\r\n"		// 意大利语
	+ "cześć" + "\r\n"		// 波兰语
	+ "bună" + "\r\n"		// 罗马尼亚语
	+ "zdravo" + "\r\n"		// 斯洛文尼亚语
	+ "helló" + "\r\n"		// 匈牙利语
	+ "hei" + "\r\n"		// 芬兰语
	+ "สวัสดี" + "\r\n"		// 泰语
;

// MessageBox 是 MessageBoxW 的别名。
// MessageBox is the alias for MessageBoxW.
await MessageBoxW(0, "大家好，我是来自 node.js 星球的 Windows SDK，这是我对 MessageBox 函数的调用。\n" +
	"Hello! I'm being rendered by the MessageBox API of the Windows SDK of Node.js\n" + hellos, "hello，您好!", MB_OK);
//# sourceMappingURL=hello.js.map

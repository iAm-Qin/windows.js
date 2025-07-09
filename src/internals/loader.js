import {promisify} from "util";

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
export /*@__NO_SIDE_EFFECTS__*/ function createAutoLoader (lib, entryName, entryType, entryParams, loaded = func => {}) {
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

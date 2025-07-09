/**
 * Demonstrates the injection of dll into the `explorer.exe` process.
 *
 * Unfortunately, this demo is only available on 32bit system, because we use the
 * `CreateRemoteThread` to call the `LoadLibrary` in the target process and the
 * `GetExitCodeThread` to get the handle of the dll.
 *
 * The `LoadLibrary` returns HMODULE, which can be 64bit on 64bit system,
 * and the `GetExitCodeThread` can only get the lower 32bit.
 *
 * In the 64bit system, the real handle of the dll injected cannot be got.
 * The dll can only be loaded and cannot be freed.
 *
 * 本示例演示将 DLL 注入到 `explorer.exe` 中，实现无进程运行。
 *
 * 不幸的是，本示例只能在 32 位系统里运行。因为是使用 `CreateRemoteThread` 在目标进程中调用
 * `LoadLibrary`，然后使用 `GetExitCodeThread` 获取返回的句柄。
 * 在 64 位系统中，`LoadLibrary` 返回的句柄是 64 位的，而 `GetExitCodeThread`
 * 只能获取到 32 位返回值，所以在64 位系统中无法获取到 DLL 句柄，只能加载 DLL，无法释放。
 */

import path from "path";

import koffi from "koffi";
import findProcess from "find-process";

import polyfill from "esm-dirname-polyfill";

const {__dirname, __filename} = polyfill(import.meta);

import {
	OpenProcess, VirtualAllocEx, WriteProcessMemory, GetModuleHandle, GetProcAddress, CreateRemoteThread, WaitForSingleObject, GetExitCodeThread, CloseHandle, VirtualFreeEx,
} from "windows.js";
import {
	PROCESS_CREATE_THREAD, PROCESS_VM_OPERATION, PROCESS_VM_WRITE,
	MEM_COMMIT, PAGE_EXECUTE_READWRITE,
	INFINITE,
	FALSE, SIZE_T, DWORD,
	PTHREAD_START_ROUTINE,
} from "windows.js";


// find the process
const found = await findProcess("name", "explorer.exe");
if (!found[0]) {
	console.log("Process `explorer.exe` not found.");
	process.exit();
}
const remoteProcessId = found[0].pid;
console.log("`explorer.exe` pid:", remoteProcessId);

// Loads
const dllFilename = `LoadLibraryRemote-demoDll-${process.arch}.dll`;
const hRemoteLib = await loadLibraryRemote(remoteProcessId, path.join(__dirname, dllFilename));
console.log({hRemoteLib});

if (!hRemoteLib) {
	console.log("Error loading remote library");
	process.exit();
}

console.log("A message box will be shown with the same window icon as `explorer` in the taskbar.");
console.log("Sometimes, it is not brought to the foreground. Please check the `explorer` window icon in the taskbar.");

// Frees
setTimeout(async () => {
	const r = await freeLibraryRemote(remoteProcessId, hRemoteLib);
	console.log("freeLibraryRemote:", r);
}, 2000);


/**
 * loadLibraryRemote.
 * @param remoteProcessId id
 * @param dllFilename name
 * @return {Promise<HANDLE|void>} The handle of the remote thread.
 */
async function loadLibraryRemote (remoteProcessId, dllFilename) {
	// Opens the remote process
	const hRemoteProcess = await OpenProcess(
		PROCESS_CREATE_THREAD | PROCESS_VM_OPERATION | PROCESS_VM_WRITE,
		FALSE, remoteProcessId);
	if (0 === hRemoteProcess) {
		return console.log("Error calling OpenProcess");
	}
	try {
		const bufDllFilename = Buffer.from(dllFilename + "\0", "ucs2");

		// Allocates memory in the remote process for storing the string of dll filename.
		//
		// 在远程进程中申请内存，用于写入 DLL 文件名字符串。
		const dllFilenameBytes = bufDllFilename.length;
		const lpAddrDllFilename = await VirtualAllocEx(hRemoteProcess, null, dllFilenameBytes,
			MEM_COMMIT, PAGE_EXECUTE_READWRITE);
		if (!lpAddrDllFilename) {
			return console.log("Error calling VirtualAllocEx");
		}
		try {
			// Writes the dll filename string into the memory of the remote process.
			//
			// 将 DLL 文件名字符串写入刚才申请的内存。
			const wrtn = koffi.alloc(SIZE_T, 1);
			await WriteProcessMemory(hRemoteProcess, lpAddrDllFilename, bufDllFilename, dllFilenameBytes, wrtn);
			if (koffi.decode(wrtn, SIZE_T) !== dllFilenameBytes) {
				return console.log("Error calling WriteProcessMemory");
			}
			koffi.free(wrtn);

			// Gets the address of `LoadLibraryW` function(it is the same in any process.
			// we can get it in the local process and use it in the remote process.)
			// The `LoadLibraryW` has one parameter: the dll filename
			// that can be passed into from the 5th argument of `CreateRemoteThread`.
			//
			// 获取 `LoadLibraryW` 的地址(这在任何进程中都是一样的，所以这里在本地进程中获取到的，一样可以用于远程进程)。
			// `LoadLibraryW` 函数需要一个参数：DLL文件名，刚好可以从 CreateRemoteThread 函数的第 5 个参数传入。
			const hKernel32 = await GetModuleHandle("kernel32");
			const pfnStartAddr = await GetProcAddress(hKernel32, "LoadLibraryW");
			if (!pfnStartAddr) {
				return console.log("Error calling GetProcAddress");
			}

			const threadProcAddr = koffi.as(pfnStartAddr, PTHREAD_START_ROUTINE);

			// Creates a remote thread whose address of procedure is the `LoadLibraryW` function,
			// and an argument of the address allocated storing the dll filename.
			// Thus once the thread runs, it executes `LoadLibraryW(dllFileName);`.
			//
			// 创建远程线程。线程过程地址即是 `LoadLibraryW`，线程参数即是在远程进程中申请的用于存储 DLL 文件名字符串的内存地址，
			// 这样这个线程一运行就相当于执行 `LoadLibraryW(dllFileName);`
			const pRemoteThreadId = koffi.alloc(DWORD, 1);
			const hRemoteThread = await CreateRemoteThread(
				hRemoteProcess, null, 0, threadProcAddr, lpAddrDllFilename, 0, pRemoteThreadId);
			if (0 === hRemoteThread) {
				return console.log("Error calling CreateRemoteThread");
			}
			const remoteThreadId = koffi.decode(pRemoteThreadId, DWORD);
			console.log({remoteThreadId});
			koffi.free(pRemoteThreadId);

			await WaitForSingleObject(hRemoteThread, INFINITE);

			// Gets the return value of the remote thread(It is the handle of the library loaded.
			// In another way to say, it is the return value of the `LoadLibraryW` function.)
			//
			// 获取线程返回值，此处即为所加载的 DLL 的句柄（即 LoadLibraryW 函数的返回值）。
			//
			// Now, we almost finish the whole work.
			// In fact we have run only one statement:
			//     hRemoteLib = LoadLibraryW(dllFileName);
			// But we have to do a lot for it.
			// It is really a bad ass method.
			// Finally, let's get the handle and return it!
			//
			// 至此，整个过程基本已完成，仅仅相当于执行了一句代码：
			//     hRemoteLib = LoadLibraryW(dllFileName);
			// 但是不得不额外做很多的事。
			// 整个过程都是非常牛叉的做法。
			// 最后让我们获取它并返回吧!
			const phRemoteLib = koffi.alloc(DWORD, 1);
			await GetExitCodeThread(hRemoteThread, phRemoteLib);
			const hRemoteLib = koffi.decode(phRemoteLib, DWORD);

			// Let's do some final work. Free the resources that help us do the whole thing.
			await CloseHandle(hRemoteThread);
			koffi.free(phRemoteLib);

			return hRemoteLib;
		} finally {
			// Frees the memory we allocated, or it may be a leak.
			await VirtualFreeEx(hRemoteProcess, lpAddrDllFilename, dllFilenameBytes, MEM_COMMIT);
		}
	} finally {
		await CloseHandle(hRemoteProcess);
	}
}

async function freeLibraryRemote (remoteProcessId, hRemoteLib) {
	// Opens the remote process
	const hRemoteProcess = await OpenProcess(
		PROCESS_CREATE_THREAD | PROCESS_VM_OPERATION | PROCESS_VM_WRITE,
		FALSE, remoteProcessId);
	if (0 === hRemoteProcess) {
		return console.log("Error calling OpenProcess");
	}
	try {
		// Gets the address of FreeLibrary function(it is the same both in local process and remote process).
		const freeLibrary = await GetProcAddress(await GetModuleHandle("kernel32.dll"), "FreeLibrary");

		const threadProcAddr = koffi.as(freeLibrary, PTHREAD_START_ROUTINE);

		// Creates a remote thread in order to call `FreeLibrary(hRemoteLib)`.
		// Because the FreeLibrary takes only one argument `hLibrary` which is an integer,
		// we can directly pass it to the 5th parameter of `CreateRemoteThread` function
		// and no need to alloc memory like we loaded it before.
		//
		// FreeLibrary 的唯一参数是一个整数，直接传给 CreateRemoteThread 函数的第 5 个参数就可以了，不用像加载 DLL 那样去申请内存。
		const pRemoteThreadId = koffi.alloc(DWORD, 1);
		const hRemoteThread = await CreateRemoteThread(
			hRemoteProcess, null, 0, threadProcAddr, hRemoteLib, 0, pRemoteThreadId);
		if (0 === hRemoteThread) {
			return console.log("Error calling CreateRemoteThread");
		}
		const remoteThreadId = koffi.decode(pRemoteThreadId, DWORD);
		console.log({remoteThreadId});
		koffi.free(pRemoteThreadId);

		await WaitForSingleObject(hRemoteThread, INFINITE);

		const pThreadRet = koffi.alloc(DWORD, 1);
		await GetExitCodeThread(hRemoteThread, pThreadRet);
		await CloseHandle(hRemoteThread);

		const threadRet = koffi.decode(pThreadRet, DWORD);
		koffi.free(pThreadRet);

		return threadRet;
	} finally {
		await CloseHandle(hRemoteProcess);
	}
}

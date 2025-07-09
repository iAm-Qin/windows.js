import koffi from "koffi";

import {out} from "../../types.js";

import {DWORD, HMODULE} from "../minwindef.h/minWindef.js";

import {LPSTR, LPWSTR} from "../winnt.h/winnt.js";

const lib = koffi.load("kernel32.dll");

import {createAutoLoader} from "../../internals/loader.js";

export function GetModuleFileNameA () {}

GetModuleFileNameA = createAutoLoader(lib, "GetModuleFileNameA", DWORD /* DWORD */, [
	HMODULE,    /* in  HMODULE hModule    */
	out(LPSTR), /* out LPSTR  lpFilename */
	DWORD,      /* in  DWORD   nSize      */
], f => GetModuleFileNameA = f);

export function GetModuleFileNameW () {}

GetModuleFileNameW = createAutoLoader(lib, "GetModuleFileNameW", DWORD /* DWORD */, [
	HMODULE,     /* in  HMODULE hModule    */
	out(LPWSTR), /* out LPWSTR  lpFilename */
	DWORD,       /* in  DWORD   nSize      */
], f => GetModuleFileNameW = f);
export {GetModuleFileNameW as GetModuleFileName};

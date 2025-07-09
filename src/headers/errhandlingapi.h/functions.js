import koffi from "koffi";

// minwindef.h
import {DWORD} from "../minwindef.h/minWindef.js";


const lib = koffi.load("kernel32.dll");
import {createAutoLoader} from "../../internals/loader.js";

export function GetLastError () {};
GetLastError = createAutoLoader(lib, "GetLastError", DWORD, [
	/* void */
], f => GetLastError = f);

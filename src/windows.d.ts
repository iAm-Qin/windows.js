import {TypeInfo} from "koffi";

export * from "./types.js";
export * from "./macros.js";


// 注意：路径名是区分大小写的，如果两次引用同一个文件大小写不同，模块系统会加载两次。

export * from "./headers/basetsd.h/basetsd.js";
export * from "./headers/guiddef.h/guiddef.js";

export * from "./headers/winnt.h/index.js";
export * from "./headers/minwindef.h/minWindef.js";
export * from "./headers/windef.h/windef.js";
export * from "./headers/winerror.h/winerror.js";
export * from "./headers/minwinbase.h/minWinBase.js";
export * from "./headers/wincontypes.h/wincontypes.js";
export * from "./headers/consoleapi3.h/consoleapi3.js";
export * from "./headers/handleapi.h/handleapi.js";
export * from "./headers/libloaderapi.h/libloaderapi.js";
export * from "./headers/processenv.h/processenv.js";
export * from "./headers/processthreadsapi.h/constants.js";
export * from "./headers/processthreadsapi.h/enums.js";
export * from "./headers/processthreadsapi.h/structs.js";
export * from "./headers/memoryapi.h/memoryapi.js";
export * from "./headers/synchapi.h/synchapi.js";

export * from "./headers/WinBase.h/index.js";
export * from "./headers/WinUser.h/index.js";
export * from "./headers/wingdi.h/index.js";
export * from "./headers/shellapi.h/index.js";
export * from "./headers/commdlg.h/index.js";

export * from "./headers/commdlg.h/functions.d.ts";
export * from "./headers/consoleapi.h/functions.d.ts";
export * from "./headers/consoleapi2.h/functions.d.ts";
export * from "./headers/consoleapi3.h/functions.d.ts";
export * from "./headers/handleapi.h/functions.d.ts";
export * from "./headers/libloaderapi.h/functions.d.ts";
export * from "./headers/memoryapi.h/functions.d.ts";
export * from "./headers/processenv.h/functions.d.ts";
export * from "./headers/processthreadsapi.h/functions.d.ts";
export * from "./headers/shellapi.h/functions.d.ts";
export * from "./headers/synchapi.h/functions.d.ts";
export * from "./headers/WinBase.h/functions.d.ts";
export * from "./headers/WinBase.h/functions2.d.ts";
export * from "./headers/wingdi.h/functions.d.ts";
export * from "./headers/WinUser.h/functions.d.ts";
export * from "./headers/WinUser.h/functions2.d.ts";

export type PrimitiveType = TypeInfo & {
	get (buffer: Buffer, offset: number);
	unsigned: boolean;
};

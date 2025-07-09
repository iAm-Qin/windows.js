import koffi from "koffi";

import {pointer} from "../../types.js";
import {isArch64} from "../../types.js";

// minwindef.h
import {LPVOID, ULONG} from "../minwindef.h/minWindef.js";

// winnt.h
import {PEXCEPTION_POINTERS, PEXCEPTION_RECORD, PLDT_ENTRY} from "../winnt.h/structs.js";
import {PRTL_UMS_SCHEDULER_ENTRY_POINT} from "../winnt.h/callbacks.js";

// minwinbase.h
import {REASON_CONTEXT} from "../minwinbase.h/minWinBase.js";

export const LPLDT_ENTRY = isArch64 ? LPVOID : PLDT_ENTRY;
export const LPEXCEPTION_RECORD = PEXCEPTION_RECORD;
export const LPEXCEPTION_POINTERS = PEXCEPTION_POINTERS;
export const PUMS_CONTEXT = pointer(koffi.types.void);
export const PUMS_COMPLETION_LIST = pointer(koffi.types.void);
export const PUMS_SCHEDULER_ENTRY_POINT = PRTL_UMS_SCHEDULER_ENTRY_POINT;
export const POWER_REQUEST_CONTEXT = REASON_CONTEXT;
export const OPERATION_ID = ULONG;
export const PERATION_ID = ULONG;

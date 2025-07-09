import koffi from "koffi";

import {pointer} from "../../types.js";

// guiddef.h
import {GUID} from "../guiddef.h/guiddef.js";

export const UOW = GUID;

export const TP_POOL = koffi.opaque();
export const PTP_POOL = pointer(TP_POOL);

export const TP_CLEANUP_GROUP = koffi.opaque();
export const PTP_CLEANUP_GROUP = pointer(TP_CLEANUP_GROUP);

export const ACTIVATION_CONTEXT = koffi.opaque();

export const TP_CALLBACK_INSTANCE = koffi.opaque();
export const PTP_CALLBACK_INSTANCE = pointer(TP_CALLBACK_INSTANCE);

export const TP_WORK = koffi.opaque();
export const PTP_WORK = pointer(TP_WORK);

export const TP_TIMER = koffi.opaque();
export const PTP_TIMER = pointer(TP_TIMER);

export const TP_WAIT = koffi.opaque();
export const PTP_WAIT = pointer(TP_WAIT);

export const TP_IO = koffi.opaque();
export const PTP_IO = pointer(TP_IO);

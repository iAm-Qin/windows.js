// basic
import {pointer} from "../../types.js";
import {long} from "../../types.js";

// minwindef.h
import {USHORT} from "../minwindef.h/minWindef.js";

// winnt.h
import {WCHAR, LONG} from "../winnt.h/winnt.js";

export const LCSCSTYPE = LONG;
export const LCSGAMUTMATCH = LONG;
export const FXPT16DOT16 = long;
export const LPFXPT16DOT16 = pointer(FXPT16DOT16);
export const FXPT2DOT30 = long;
export const LPFXPT2DOT30 = pointer(FXPT2DOT30);
export const BCHAR = WCHAR;

export const COLOR16 = USHORT;

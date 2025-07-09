// basic
import {size_t} from "../../types.js";
import {pointer} from "../../types.js";

// winnt.h 循环引用
export const HANDLE = size_t;
export const PHANDLE = pointer(HANDLE);

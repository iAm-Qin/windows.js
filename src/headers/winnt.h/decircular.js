// winnt.h
import {UFIELD_OFFSET} from "./winnt.js";
import {REPARSE_GUID_DATA_BUFFER} from "./structs.js";

export const REPARSE_GUID_DATA_BUFFER_HEADER_SIZE = UFIELD_OFFSET(REPARSE_GUID_DATA_BUFFER, "GenericReparseBuffer");

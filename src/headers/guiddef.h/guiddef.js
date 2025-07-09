import koffi from "koffi";

import {
	char, long, short,
	array, struct, pointer, sizeof,
} from "../../types.js";

export const GUID = struct({
	Data1: long,           // unsigned long  Data1
	Data2: short,          // unsigned short Data2
	Data3: short,          // unsigned short Data3
	Data4: array(char, 8), // unsigned char  Data4[ 8 ]
});
export const LPGUID = pointer(GUID);	// typedef GUID *LPGUID;
export const LPCGUID = pointer(GUID);	// typedef const GUID *LPCGUID;

export const IID = GUID;				// typedef GUID IID;
export const LPIID = pointer(IID);		// typedef IID *LPIID;
export const CLSID = GUID;				// typedef GUID CLSID;
export const LPCLSID = pointer(CLSID);	// typedef CLSID *LPCLSID;
export const FMTID = GUID;				// typedef GUID FMTID;
export const LPFMTID = pointer(FMTID);	// typedef FMTID *LPFMTID;

export const REFGUID = pointer(GUID);

export const REFIID = pointer(IID);

export const REFCLSID = pointer(CLSID);

export const REFFMTID = pointer(FMTID);

export function IsEqualGUID (rguid1, rguid2) {
	const sizeofGUID = sizeof(GUID);
	const buf1 = convertToBuffer(rguid1);
	const buf2 = convertToBuffer(rguid2);

	for (let i = 0; i < sizeofGUID; i++) {
		if (buf1[i] !== buf2[i]) {
			return false;
		}
	}
	return true;

	function convertToBuffer (guid) {
		try {
			return koffi.view(guid, sizeofGUID);
		} catch (ex) {
			const buf = Buffer.allocUnsafe(sizeofGUID);
			koffi.encode(buf, GUID, guid);
			return buf;
		}
	}
}

export {IsEqualGUID as IsEqualIID};

export {IsEqualGUID as IsEqualCLSID};

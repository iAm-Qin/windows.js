#include "pch.h"
#include <stdio.h>

DWORD tid = 0;

DWORD tid2 = 0;

DWORD threadProc(void* lp) {
	MessageBox(0, L"This MessageBox is called from a dll injected into the `explorer.exe` process.", L"LoadLibraryRemote demo", 0);
	tid = 0;
	return 0;
}

BOOL APIENTRY DllMain(
	HMODULE hModule,
	DWORD  ul_reason_for_call,
	LPVOID lpReserved
) {
	switch (ul_reason_for_call) {
	case DLL_PROCESS_ATTACH:
	case DLL_THREAD_ATTACH:
		if (!tid) {
			CreateThread(NULL, 0, (LPTHREAD_START_ROUTINE)threadProc, NULL, 0, &tid);
		}
		break;
	case DLL_THREAD_DETACH:
	case DLL_PROCESS_DETACH:
		break;
	}
	return TRUE;
}

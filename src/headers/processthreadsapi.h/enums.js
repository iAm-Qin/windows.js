import {int} from "../../types.js";

export const THREAD_INFORMATION_CLASS = int;
export const ThreadMemoryPriority = 0;
export const ThreadAbsoluteCpuPriority = 1;
export const ThreadDynamicCodePolicy = 2;
export const ThreadPowerThrottling = 3;
export const ThreadInformationClassMax = 4;

export const PROCESS_INFORMATION_CLASS = int;
export const ProcessMemoryPriority = 0;
export const ProcessMemoryExhaustionInfo = 1;
export const ProcessAppMemoryInfo = 2;
export const ProcessInPrivateInfo = 3;
export const ProcessPowerThrottling = 4;
export const ProcessReservedValue1 = 5;
export const ProcessTelemetryCoverageInfo = 6;
export const ProcessProtectionLevelInfo = 7;
export const ProcessLeapSecondInfo = 8;
export const ProcessInformationClassMax = 9;

export const PROCESS_MEMORY_EXHAUSTION_TYPE = int;
export const PMETypeFailFastOnCommitFailure = 0;
export const PMETypeMax = 1;

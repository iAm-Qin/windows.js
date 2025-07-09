import {int} from "../../types.js";

import {RTL_UMS_THREAD_INFO_CLASS, PRTL_UMS_THREAD_INFO_CLASS} from "../winnt.h/enums.js";

export const UMS_THREAD_INFO_CLASS = RTL_UMS_THREAD_INFO_CLASS;
export const PUMS_THREAD_INFO_CLASS = PRTL_UMS_THREAD_INFO_CLASS;

export const DEP_SYSTEM_POLICY_TYPE = int;
export const DEPPolicyAlwaysOff = 0;
export const DEPPolicyAlwaysOn = 1;
export const DEPPolicyOptIn = 2;
export const DEPPolicyOptOut = 3;
export const DEPTotalPolicyCount = 4;

export const PROC_THREAD_ATTRIBUTE_NUM = int;
export const ProcThreadAttributeParentProcess = 0;
export const ProcThreadAttributeHandleList = 2;
export const ProcThreadAttributeGroupAffinity = 3;
export const ProcThreadAttributePreferredNode = 4;
export const ProcThreadAttributeIdealProcessor = 5;
export const ProcThreadAttributeUmsThread = 6;
export const ProcThreadAttributeMitigationPolicy = 7;
export const ProcThreadAttributeSecurityCapabilities = 9;
export const ProcThreadAttributeProtectionLevel = 11;
export const ProcThreadAttributeJobList = 13;
export const ProcThreadAttributeChildProcessPolicy = 14;
export const ProcThreadAttributeAllApplicationPackagesPolicy = 15;
export const ProcThreadAttributeWin32kFilter = 16;
export const ProcThreadAttributeSafeOpenPromptOriginClaim = 17;
export const ProcThreadAttributeDesktopAppPolicy = 18;
export const ProcThreadAttributePseudoConsole = 22;
export const ProcThreadAttributeMitigationAuditPolicy = 24;

export const COPYFILE2_MESSAGE_TYPE = int;
export const COPYFILE2_CALLBACK_NONE = 0;
export const COPYFILE2_CALLBACK_CHUNK_STARTED = 1;
export const COPYFILE2_CALLBACK_CHUNK_FINISHED = 2;
export const COPYFILE2_CALLBACK_STREAM_STARTED = 3;
export const COPYFILE2_CALLBACK_STREAM_FINISHED = 4;
export const COPYFILE2_CALLBACK_POLL_CONTINUE = 5;
export const COPYFILE2_CALLBACK_ERROR = 6;
export const COPYFILE2_CALLBACK_MAX = 7;

export const COPYFILE2_MESSAGE_ACTION = int;
export const COPYFILE2_PROGRESS_CONTINUE = 0;
export const COPYFILE2_PROGRESS_CANCEL = 1;
export const COPYFILE2_PROGRESS_STOP = 2;
export const COPYFILE2_PROGRESS_QUIET = 3;
export const COPYFILE2_PROGRESS_PAUSE = 4;

export const COPYFILE2_COPY_PHASE = int;
export const COPYFILE2_PHASE_NONE = 0;
export const COPYFILE2_PHASE_PREPARE_SOURCE = 1;
export const COPYFILE2_PHASE_PREPARE_DEST = 2;
export const COPYFILE2_PHASE_READ_SOURCE = 3;
export const COPYFILE2_PHASE_WRITE_DESTINATION = 4;
export const COPYFILE2_PHASE_SERVER_COPY = 5;
export const COPYFILE2_PHASE_NAMEGRAFT_COPY = 6;
export const COPYFILE2_PHASE_MAX = 7;

export const PRIORITY_HINT = int;
export const IoPriorityHintVeryLow = 0;
export const IoPriorityHintLow = 1;
export const IoPriorityHintNormal = 2;
export const MaximumIoPriorityHintType = 3;

export const FILE_ID_TYPE = int;
export const FileIdType = 0;
export const ObjectIdType = 1;
export const ExtendedFileIdType = 2;
export const MaximumFileIdType = 3;

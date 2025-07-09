// basic
import {int} from "../../types.js";
import {pointer} from "../../types.js";

// winnt.h
import {
	SERVICE_KERNEL_DRIVER,
	SERVICE_FILE_SYSTEM_DRIVER,
	SERVICE_WIN32_OWN_PROCESS,
	SERVICE_WIN32_SHARE_PROCESS,
	SERVICE_ADAPTER,
	SERVICE_RECOGNIZER_DRIVER,
	SERVICE_BOOT_START,
	SERVICE_SYSTEM_START,
	SERVICE_AUTO_START,
	SERVICE_DEMAND_START,
	SERVICE_DISABLED,
	SERVICE_ERROR_IGNORE,
	SERVICE_ERROR_NORMAL,
	SERVICE_ERROR_SEVERE,
	SERVICE_ERROR_CRITICAL,
} from "./winnt.js";


export const COMPARTMENT_ID = int;
export const UNSPECIFIED_COMPARTMENT_ID = 0;
export const DEFAULT_COMPARTMENT_ID = 1;
export const PCOMPARTMENT_ID = pointer(COMPARTMENT_ID);

export const SID_NAME_USE = int;
export const SidTypeUser = 1;
export const SidTypeGroup = 2;
export const SidTypeDomain = 3;
export const SidTypeAlias = 4;
export const SidTypeWellKnownGroup = 5;
export const SidTypeDeletedAccount = 6;
export const SidTypeInvalid = 7;
export const SidTypeUnknown = 8;
export const SidTypeComputer = 9;
export const SidTypeLabel = 10;
export const SidTypeLogonSession = 11;
export const PSID_NAME_USE = pointer(SID_NAME_USE);

export const WELL_KNOWN_SID_TYPE = int;
export const WinNullSid = 0;
export const WinWorldSid = 1;
export const WinLocalSid = 2;
export const WinCreatorOwnerSid = 3;
export const WinCreatorGroupSid = 4;
export const WinCreatorOwnerServerSid = 5;
export const WinCreatorGroupServerSid = 6;
export const WinNtAuthoritySid = 7;
export const WinDialupSid = 8;
export const WinNetworkSid = 9;
export const WinBatchSid = 10;
export const WinInteractiveSid = 11;
export const WinServiceSid = 12;
export const WinAnonymousSid = 13;
export const WinProxySid = 14;
export const WinEnterpriseControllersSid = 15;
export const WinSelfSid = 16;
export const WinAuthenticatedUserSid = 17;
export const WinRestrictedCodeSid = 18;
export const WinTerminalServerSid = 19;
export const WinRemoteLogonIdSid = 20;
export const WinLogonIdsSid = 21;
export const WinLocalSystemSid = 22;
export const WinLocalServiceSid = 23;
export const WinNetworkServiceSid = 24;
export const WinBuiltinDomainSid = 25;
export const WinBuiltinAdministratorsSid = 26;
export const WinBuiltinUsersSid = 27;
export const WinBuiltinGuestsSid = 28;
export const WinBuiltinPowerUsersSid = 29;
export const WinBuiltinAccountOperatorsSid = 30;
export const WinBuiltinSystemOperatorsSid = 31;
export const WinBuiltinPrintOperatorsSid = 32;
export const WinBuiltinBackupOperatorsSid = 33;
export const WinBuiltinReplicatorSid = 34;
export const WinBuiltinPreWindows2000CompatibleAccessSid = 35;
export const WinBuiltinRemoteDesktopUsersSid = 36;
export const WinBuiltinNetworkConfigurationOperatorsSid = 37;
export const WinAccountAdministratorSid = 38;
export const WinAccountGuestSid = 39;
export const WinAccountKrbtgtSid = 40;
export const WinAccountDomainAdminsSid = 41;
export const WinAccountDomainUsersSid = 42;
export const WinAccountDomainGuestsSid = 43;
export const WinAccountComputersSid = 44;
export const WinAccountControllersSid = 45;
export const WinAccountCertAdminsSid = 46;
export const WinAccountSchemaAdminsSid = 47;
export const WinAccountEnterpriseAdminsSid = 48;
export const WinAccountPolicyAdminsSid = 49;
export const WinAccountRasAndIasServersSid = 50;
export const WinNTLMAuthenticationSid = 51;
export const WinDigestAuthenticationSid = 52;
export const WinSChannelAuthenticationSid = 53;
export const WinThisOrganizationSid = 54;
export const WinOtherOrganizationSid = 55;
export const WinBuiltinIncomingForestTrustBuildersSid = 56;
export const WinBuiltinPerfMonitoringUsersSid = 57;
export const WinBuiltinPerfLoggingUsersSid = 58;
export const WinBuiltinAuthorizationAccessSid = 59;
export const WinBuiltinTerminalServerLicenseServersSid = 60;
export const WinBuiltinDCOMUsersSid = 61;
export const WinBuiltinIUsersSid = 62;
export const WinIUserSid = 63;
export const WinBuiltinCryptoOperatorsSid = 64;
export const WinUntrustedLabelSid = 65;
export const WinLowLabelSid = 66;
export const WinMediumLabelSid = 67;
export const WinHighLabelSid = 68;
export const WinSystemLabelSid = 69;
export const WinWriteRestrictedCodeSid = 70;
export const WinCreatorOwnerRightsSid = 71;
export const WinCacheablePrincipalsGroupSid = 72;
export const WinNonCacheablePrincipalsGroupSid = 73;
export const WinEnterpriseReadonlyControllersSid = 74;
export const WinAccountReadonlyControllersSid = 75;
export const WinBuiltinEventLogReadersGroup = 76;
export const WinNewEnterpriseReadonlyControllersSid = 77;
export const WinBuiltinCertSvcDComAccessGroup = 78;
export const WinMediumPlusLabelSid = 79;
export const WinLocalLogonSid = 80;
export const WinConsoleLogonSid = 81;
export const WinThisOrganizationCertificateSid = 82;
export const WinApplicationPackageAuthoritySid = 83;
export const WinBuiltinAnyPackageSid = 84;
export const WinCapabilityInternetClientSid = 85;
export const WinCapabilityInternetClientServerSid = 86;
export const WinCapabilityPrivateNetworkClientServerSid = 87;
export const WinCapabilityPicturesLibrarySid = 88;
export const WinCapabilityVideosLibrarySid = 89;
export const WinCapabilityMusicLibrarySid = 90;
export const WinCapabilityDocumentsLibrarySid = 91;
export const WinCapabilitySharedUserCertificatesSid = 92;
export const WinCapabilityEnterpriseAuthenticationSid = 93;
export const WinCapabilityRemovableStorageSid = 94;
export const WinBuiltinRDSRemoteAccessServersSid = 95;
export const WinBuiltinRDSEndpointServersSid = 96;
export const WinBuiltinRDSManagementServersSid = 97;
export const WinUserModeDriversSid = 98;
export const WinBuiltinHyperVAdminsSid = 99;
export const WinAccountCloneableControllersSid = 100;
export const WinBuiltinAccessControlAssistanceOperatorsSid = 101;
export const WinBuiltinRemoteManagementUsersSid = 102;
export const WinAuthenticationAuthorityAssertedSid = 103;
export const WinAuthenticationServiceAssertedSid = 104;
export const WinLocalAccountSid = 105;
export const WinLocalAccountAndAdministratorSid = 106;
export const WinAccountProtectedUsersSid = 107;
export const WinCapabilityAppointmentsSid = 108;
export const WinCapabilityContactsSid = 109;
export const WinAccountDefaultSystemManagedSid = 110;
export const WinBuiltinDefaultSystemManagedGroupSid = 111;
export const WinBuiltinStorageReplicaAdminsSid = 112;
export const WinAccountKeyAdminsSid = 113;
export const WinAccountEnterpriseKeyAdminsSid = 114;
export const WinAuthenticationKeyTrustSid = 115;
export const WinAuthenticationKeyPropertyMFASid = 116;
export const WinAuthenticationKeyPropertyAttestationSid = 117;
export const WinAuthenticationFreshKeyAuthSid = 118;
export const WinBuiltinDeviceOwnersSid = 119;

export const ACL_INFORMATION_CLASS = int;
export const AclRevisionInformation = 1;
export const AclSizeInformation = 2;

export const AUDIT_EVENT_TYPE = int;
export const AuditEventObjectAccess = 0;
export const AuditEventDirectoryServiceAccess = 1;
export const PAUDIT_EVENT_TYPE = pointer(AUDIT_EVENT_TYPE);

export const ACCESS_REASON_TYPE = int;
export const AccessReasonNone = 0x00000000;
export const AccessReasonAllowedAce = 0x00010000;
export const AccessReasonDeniedAce = 0x00020000;
export const AccessReasonAllowedParentAce = 0x00030000;
export const AccessReasonDeniedParentAce = 0x00040000;
export const AccessReasonNotGrantedByCape = 0x00050000;
export const AccessReasonNotGrantedByParentCape = 0x00060000;
export const AccessReasonNotGrantedToAppContainer = 0x00070000;
export const AccessReasonMissingPrivilege = 0x00100000;
export const AccessReasonFromPrivilege = 0x00200000;
export const AccessReasonIntegrityLevel = 0x00300000;
export const AccessReasonOwnership = 0x00400000;
export const AccessReasonNullDacl = 0x00500000;
export const AccessReasonEmptyDacl = 0x00600000;
export const AccessReasonNoSD = 0x00700000;
export const AccessReasonNoGrant = 0x00800000;
export const AccessReasonTrustLabel = 0x00900000;
export const AccessReasonFilterAce = 0x00a00000;

export const SECURITY_IMPERSONATION_LEVEL = int;
export const SecurityAnonymous = 0;
export const SecurityIdentification = 1;
export const SecurityImpersonation = 2;
export const SecurityDelegation = 3;
export const PSECURITY_IMPERSONATION_LEVEL = pointer(SECURITY_IMPERSONATION_LEVEL);

export const TOKEN_TYPE = int;
export const TokenPrimary = 1;
export const TokenImpersonation = 2;
export const PTOKEN_TYPE = pointer(TOKEN_TYPE);

export const TOKEN_ELEVATION_TYPE = int;
export const TokenElevationTypeDefault = 1;
export const TokenElevationTypeFull = 2;
export const TokenElevationTypeLimited = 3;
export const PTOKEN_ELEVATION_TYPE = pointer(TOKEN_ELEVATION_TYPE);

export const TOKEN_INFORMATION_CLASS = int;
export const TokenUser = 1;
export const TokenGroups = 2;
export const TokenPrivileges = 3;
export const TokenOwner = 4;
export const TokenPrimaryGroup = 5;
export const TokenDefaultDacl = 6;
export const TokenSource = 7;
export const TokenType = 8;
export const TokenImpersonationLevel = 9;
export const TokenStatistics = 10;
export const TokenRestrictedSids = 11;
export const TokenSessionId = 12;
export const TokenGroupsAndPrivileges = 13;
export const TokenSessionReference = 14;
export const TokenSandBoxInert = 15;
export const TokenAuditPolicy = 16;
export const TokenOrigin = 17;
export const TokenElevationType = 18;
export const TokenLinkedToken = 19;
export const TokenElevation = 20;
export const TokenHasRestrictions = 21;
export const TokenAccessInformation = 22;
export const TokenVirtualizationAllowed = 23;
export const TokenVirtualizationEnabled = 24;
export const TokenIntegrityLevel = 25;
export const TokenUIAccess = 26;
export const TokenMandatoryPolicy = 27;
export const TokenLogonSid = 28;
export const TokenIsAppContainer = 29;
export const TokenCapabilities = 30;
export const TokenAppContainerSid = 31;
export const TokenAppContainerNumber = 32;
export const TokenUserClaimAttributes = 33;
export const TokenDeviceClaimAttributes = 34;
export const TokenRestrictedUserClaimAttributes = 35;
export const TokenRestrictedDeviceClaimAttributes = 36;
export const TokenDeviceGroups = 37;
export const TokenRestrictedDeviceGroups = 38;
export const TokenSecurityAttributes = 39;
export const TokenIsRestricted = 40;
export const TokenProcessTrustLevel = 41;
export const TokenPrivateNameSpace = 42;
export const TokenSingletonAttributes = 43;
export const TokenBnoIsolation = 44;
export const TokenChildProcessFlags = 45;
export const TokenIsLessPrivilegedAppContainer = 46;
export const TokenIsSandboxed = 47;
export const TokenOriginatingProcessTrustLevel = 48;
export const MaxTokenInfoClass = 49;
export const PTOKEN_INFORMATION_CLASS = pointer(TOKEN_INFORMATION_CLASS);

export const MANDATORY_LEVEL = int;
export const MandatoryLevelUntrusted = 0;
export const MandatoryLevelLow = 1;
export const MandatoryLevelMedium = 2;
export const MandatoryLevelHigh = 3;
export const MandatoryLevelSystem = 4;
export const MandatoryLevelSecureProcess = 5;
export const MandatoryLevelCount = 6;
export const PMANDATORY_LEVEL = pointer(MANDATORY_LEVEL);

export const SE_IMAGE_SIGNATURE_TYPE = int;
export const SeImageSignatureNone = 0;
export const SeImageSignatureEmbedded = 1;
export const SeImageSignatureCache = 2;
export const SeImageSignatureCatalogCached = 3;
export const SeImageSignatureCatalogNotCached = 4;
export const SeImageSignatureCatalogHint = 5;
export const SeImageSignaturePackageCatalog = 6;
export const PSE_IMAGE_SIGNATURE_TYPE = pointer(SE_IMAGE_SIGNATURE_TYPE);

export const SE_LEARNING_MODE_DATA_TYPE = int;
export const SeLearningModeInvalidType = 0;
export const SeLearningModeSettings = 1;
export const SeLearningModeMax = 2;

export const HARDWARE_COUNTER_TYPE = int;
export const PMCCounter = 0;
export const MaxHardwareCounterType = 1;
export const PHARDWARE_COUNTER_TYPE = pointer(HARDWARE_COUNTER_TYPE);

export const PROCESS_MITIGATION_POLICY = int;
export const ProcessDEPPolicy = 0;
export const ProcessASLRPolicy = 1;
export const ProcessDynamicCodePolicy = 2;
export const ProcessStrictHandleCheckPolicy = 3;
export const ProcessSystemCallDisablePolicy = 4;
export const ProcessMitigationOptionsMask = 5;
export const ProcessExtensionPointDisablePolicy = 6;
export const ProcessControlFlowGuardPolicy = 7;
export const ProcessSignaturePolicy = 8;
export const ProcessFontDisablePolicy = 9;
export const ProcessImageLoadPolicy = 10;
export const ProcessSystemCallFilterPolicy = 11;
export const ProcessPayloadRestrictionPolicy = 12;
export const ProcessChildProcessPolicy = 13;
export const ProcessSideChannelIsolationPolicy = 14;
export const ProcessUserShadowStackPolicy = 15;
export const MaxProcessMitigationPolicy = 16;
export const PPROCESS_MITIGATION_POLICY = pointer(PROCESS_MITIGATION_POLICY);

export const JOBOBJECT_RATE_CONTROL_TOLERANCE = int;
export const ToleranceLow = 1;
export const ToleranceMedium = 2;
export const ToleranceHigh = 3;
export const PJOBOBJECT_RATE_CONTROL_TOLERANCE = pointer(JOBOBJECT_RATE_CONTROL_TOLERANCE);

export const JOBOBJECT_RATE_CONTROL_TOLERANCE_INTERVAL = int;
export const ToleranceIntervalShort = 1;
export const ToleranceIntervalMedium = 2;
export const ToleranceIntervalLong = 3;
export const PJOBOBJECT_RATE_CONTROL_TOLERANCE_INTERVAL = pointer(JOBOBJECT_RATE_CONTROL_TOLERANCE_INTERVAL);

export const JOB_OBJECT_NET_RATE_CONTROL_FLAGS = int;
export const JOB_OBJECT_NET_RATE_CONTROL_ENABLE = 0x1;
export const JOB_OBJECT_NET_RATE_CONTROL_MAX_BANDWIDTH = 0x2;
export const JOB_OBJECT_NET_RATE_CONTROL_DSCP_TAG = 0x4;
export const JOB_OBJECT_NET_RATE_CONTROL_VALID_FLAGS = 0x7;

export const JOB_OBJECT_IO_RATE_CONTROL_FLAGS = int;
export const JOB_OBJECT_IO_RATE_CONTROL_ENABLE = 0x1;
export const JOB_OBJECT_IO_RATE_CONTROL_STANDALONE_VOLUME = 0x2;
export const JOB_OBJECT_IO_RATE_CONTROL_FORCE_UNIT_ACCESS_ALL = 0x4;
export const JOB_OBJECT_IO_RATE_CONTROL_FORCE_UNIT_ACCESS_ON_SOFT_CAP = 0x8;
export const JOB_OBJECT_IO_RATE_CONTROL_VALID_FLAGS = JOB_OBJECT_IO_RATE_CONTROL_ENABLE |
	JOB_OBJECT_IO_RATE_CONTROL_STANDALONE_VOLUME |
	JOB_OBJECT_IO_RATE_CONTROL_FORCE_UNIT_ACCESS_ALL |
	JOB_OBJECT_IO_RATE_CONTROL_FORCE_UNIT_ACCESS_ON_SOFT_CAP;

export const JOBOBJECT_IO_ATTRIBUTION_CONTROL_FLAGS = int;
export const JOBOBJECT_IO_ATTRIBUTION_CONTROL_ENABLE = 0x1;
export const JOBOBJECT_IO_ATTRIBUTION_CONTROL_DISABLE = 0x2;
export const JOBOBJECT_IO_ATTRIBUTION_CONTROL_VALID_FLAGS = 0x3;

export const JOBOBJECTINFOCLASS = int;
export const JobObjectBasicAccountingInformation = 1;
export const JobObjectBasicLimitInformation = 2;
export const JobObjectBasicProcessIdList = 3;
export const JobObjectBasicUIRestrictions = 4;
export const JobObjectSecurityLimitInformation = 5;
export const JobObjectEndOfJobTimeInformation = 6;
export const JobObjectAssociateCompletionPortInformation = 7;
export const JobObjectBasicAndIoAccountingInformation = 8;
export const JobObjectExtendedLimitInformation = 9;
export const JobObjectJobSetInformation = 10;
export const JobObjectGroupInformation = 11;
export const JobObjectNotificationLimitInformation = 12;
export const JobObjectLimitViolationInformation = 13;
export const JobObjectGroupInformationEx = 14;
export const JobObjectCpuRateControlInformation = 15;
export const JobObjectCompletionFilter = 16;
export const JobObjectCompletionCounter = 17;
export const JobObjectReserved1Information = 18;
export const JobObjectReserved2Information = 19;
export const JobObjectReserved3Information = 20;
export const JobObjectReserved4Information = 21;
export const JobObjectReserved5Information = 22;
export const JobObjectReserved6Information = 23;
export const JobObjectReserved7Information = 24;
export const JobObjectReserved8Information = 25;
export const JobObjectReserved9Information = 26;
export const JobObjectReserved10Information = 27;
export const JobObjectReserved11Information = 28;
export const JobObjectReserved12Information = 29;
export const JobObjectReserved13Information = 30;
export const JobObjectReserved14Information = 31;
export const JobObjectNetRateControlInformation = 32;
export const JobObjectNotificationLimitInformation2 = 33;
export const JobObjectLimitViolationInformation2 = 34;
export const JobObjectCreateSilo = 35;
export const JobObjectSiloBasicInformation = 36;
export const JobObjectReserved15Information = 37;
export const JobObjectReserved16Information = 38;
export const JobObjectReserved17Information = 39;
export const JobObjectReserved18Information = 40;
export const JobObjectReserved19Information = 41;
export const JobObjectReserved20Information = 42;
export const JobObjectReserved21Information = 43;
export const JobObjectReserved22Information = 44;
export const JobObjectReserved23Information = 45;
export const JobObjectReserved24Information = 46;
export const JobObjectReserved25Information = 47;
export const MaxJobObjectInfoClass = 48;

export const SERVERSILO_STATE = int;
export const SERVERSILO_INITING = 0;
export const SERVERSILO_STARTED = 1;
export const SERVERSILO_SHUTTING_DOWN = 2;
export const SERVERSILO_TERMINATING = 3;
export const SERVERSILO_TERMINATED = 4;
export const PSERVERSILO_STATE = pointer(SERVERSILO_STATE);

export const FIRMWARE_TYPE = int;
export const FirmwareTypeUnknown = 0;
export const FirmwareTypeBios = 1;
export const FirmwareTypeUefi = 2;
export const FirmwareTypeMax = 3;
export const PFIRMWARE_TYPE = pointer(FIRMWARE_TYPE);

export const LOGICAL_PROCESSOR_RELATIONSHIP = int;
export const RelationProcessorCore = 0;
export const RelationNumaNode = 1;
export const RelationCache = 2;
export const RelationProcessorPackage = 3;
export const RelationGroup = 4;
export const RelationAll = 0xffff;

export const PROCESSOR_CACHE_TYPE = int;
export const CacheUnified = 0;
export const CacheInstruction = 1;
export const CacheData = 2;
export const CacheTrace = 3;

export const CPU_SET_INFORMATION_TYPE = int;
export const CpuSetInformation = 0;
export const PCPU_SET_INFORMATION_TYPE = pointer(CPU_SET_INFORMATION_TYPE);

export const MEM_EXTENDED_PARAMETER_TYPE = int;
export const MemExtendedParameterInvalidType = 0;
export const MemExtendedParameterAddressRequirements = 1;
export const MemExtendedParameterNumaNode = 2;
export const MemExtendedParameterPartitionHandle = 3;
export const MemExtendedParameterUserPhysicalHandle = 4;
export const MemExtendedParameterAttributeFlags = 5;
export const MemExtendedParameterMax = 6;
export const PMEM_EXTENDED_PARAMETER_TYPE = pointer(MEM_EXTENDED_PARAMETER_TYPE);

export const MEM_SECTION_EXTENDED_PARAMETER_TYPE = int;
export const MemSectionExtendedParameterInvalidType = 0;
export const MemSectionExtendedParameterUserPhysicalFlags = 1;
export const MemSectionExtendedParameterNumaNode = 2;
export const MemSectionExtendedParameterMax = 3;
export const PMEM_SECTION_EXTENDED_PARAMETER_TYPE = pointer(MEM_SECTION_EXTENDED_PARAMETER_TYPE);

export const SharedVirtualDiskSupportType = int;
export const SharedVirtualDisksUnsupported = 0;
export const SharedVirtualDisksSupported = 1;
export const SharedVirtualDiskSnapshotsSupported = 3;
export const SharedVirtualDiskCDPSnapshotsSupported = 7;

export const SharedVirtualDiskHandleState = int;
export const SharedVirtualDiskHandleStateNone = 0;
export const SharedVirtualDiskHandleStateFileShared = 1;
export const SharedVirtualDiskHandleStateHandleShared = 3;

export const SYSTEM_POWER_STATE = int;
export const PowerSystemUnspecified = 0;
export const PowerSystemWorking = 1;
export const PowerSystemSleeping1 = 2;
export const PowerSystemSleeping2 = 3;
export const PowerSystemSleeping3 = 4;
export const PowerSystemHibernate = 5;
export const PowerSystemShutdown = 6;
export const PowerSystemMaximum = 7;
export const PSYSTEM_POWER_STATE = pointer(SYSTEM_POWER_STATE);

export const POWER_ACTION = int;
export const PowerActionNone = 0;
export const PowerActionReserved = 1;
export const PowerActionSleep = 2;
export const PowerActionHibernate = 3;
export const PowerActionShutdown = 4;
export const PowerActionShutdownReset = 5;
export const PowerActionShutdownOff = 6;
export const PowerActionWarmEject = 7;
export const PowerActionDisplayOff = 8;
export const PPOWER_ACTION = pointer(POWER_ACTION);

export const DEVICE_POWER_STATE = int;
export const PowerDeviceUnspecified = 0;
export const PowerDeviceD0 = 1;
export const PowerDeviceD1 = 2;
export const PowerDeviceD2 = 3;
export const PowerDeviceD3 = 4;
export const PowerDeviceMaximum = 5;
export const PDEVICE_POWER_STATE = pointer(DEVICE_POWER_STATE);

export const MONITOR_DISPLAY_STATE = int;
export const PowerMonitorOff = 0;
export const PowerMonitorOn = 1;
export const PowerMonitorDim = 2;
export const PMONITOR_DISPLAY_STATE = pointer(MONITOR_DISPLAY_STATE);

export const USER_ACTIVITY_PRESENCE = int;
export const PowerUserPresent = 0;
export const PowerUserNotPresent = 1;
export const PowerUserInactive = 2;
export const PowerUserMaximum = 3;
export const PowerUserInvalid = PowerUserMaximum;
export const PUSER_ACTIVITY_PRESENCE = pointer(USER_ACTIVITY_PRESENCE);

export const LATENCY_TIME = int;
export const LT_DONT_CARE = 0;
export const LT_LOWEST_LATENCY = 1;

export const POWER_REQUEST_TYPE = int;
export const PowerRequestDisplayRequired = 0;
export const PowerRequestSystemRequired = 1;
export const PowerRequestAwayModeRequired = 2;
export const PowerRequestExecutionRequired = 3;
export const PPOWER_REQUEST_TYPE = pointer(POWER_REQUEST_TYPE);

export const POWER_INFORMATION_LEVEL = int;
export const SystemPowerPolicyAc = 0;
export const SystemPowerPolicyDc = 1;
export const VerifySystemPolicyAc = 2;
export const VerifySystemPolicyDc = 3;
export const SystemPowerCapabilities = 4;
export const SystemBatteryState = 5;
export const SystemPowerStateHandler = 6;
export const ProcessorStateHandler = 7;
export const SystemPowerPolicyCurrent = 8;
export const AdministratorPowerPolicy = 9;
export const SystemReserveHiberFile = 10;
export const ProcessorInformation = 11;
export const SystemPowerInformation = 12;
export const ProcessorStateHandler2 = 13;
export const LastWakeTime = 14;
export const LastSleepTime = 15;
export const SystemExecutionState = 16;
export const SystemPowerStateNotifyHandler = 17;
export const ProcessorPowerPolicyAc = 18;
export const ProcessorPowerPolicyDc = 19;
export const VerifyProcessorPowerPolicyAc = 20;
export const VerifyProcessorPowerPolicyDc = 21;
export const ProcessorPowerPolicyCurrent = 22;
export const SystemPowerStateLogging = 23;
export const SystemPowerLoggingEntry = 24;
export const SetPowerSettingValue = 25;
export const NotifyUserPowerSetting = 26;
export const PowerInformationLevelUnused0 = 27;
export const SystemMonitorHiberBootPowerOff = 28;
export const SystemVideoState = 29;
export const TraceApplicationPowerMessage = 30;
export const TraceApplicationPowerMessageEnd = 31;
export const ProcessorPerfStates = 32;
export const ProcessorIdleStates = 33;
export const ProcessorCap = 34;
export const SystemWakeSource = 35;
export const SystemHiberFileInformation = 36;
export const TraceServicePowerMessage = 37;
export const ProcessorLoad = 38;
export const PowerShutdownNotification = 39;
export const MonitorCapabilities = 40;
export const SessionPowerInit = 41;
export const SessionDisplayState = 42;
export const PowerRequestCreate = 43;
export const PowerRequestAction = 44;
export const GetPowerRequestList = 45;
export const ProcessorInformationEx = 46;
export const NotifyUserModeLegacyPowerEvent = 47;
export const GroupPark = 48;
export const ProcessorIdleDomains = 49;
export const WakeTimerList = 50;
export const SystemHiberFileSize = 51;
export const ProcessorIdleStatesHv = 52;
export const ProcessorPerfStatesHv = 53;
export const ProcessorPerfCapHv = 54;
export const ProcessorSetIdle = 55;
export const LogicalProcessorIdling = 56;
export const UserPresence = 57;
export const PowerSettingNotificationName = 58;
export const GetPowerSettingValue = 59;
export const IdleResiliency = 60;
export const SessionRITState = 61;
export const SessionConnectNotification = 62;
export const SessionPowerCleanup = 63;
export const SessionLockState = 64;
export const SystemHiberbootState = 65;
export const PlatformInformation = 66;
export const PdcInvocation = 67;
export const MonitorInvocation = 68;
export const FirmwareTableInformationRegistered = 69;
export const SetShutdownSelectedTime = 70;
export const SuspendResumeInvocation = 71;
export const PlmPowerRequestCreate = 72;
export const ScreenOff = 73;
export const CsDeviceNotification = 74;
export const PlatformRole = 75;
export const LastResumePerformance = 76;
export const DisplayBurst = 77;
export const ExitLatencySamplingPercentage = 78;
export const RegisterSpmPowerSettings = 79;
export const PlatformIdleStates = 80;
export const ProcessorIdleVeto = 81;
export const PlatformIdleVeto = 82;
export const SystemBatteryStatePrecise = 83;
export const ThermalEvent = 84;
export const PowerRequestActionInternal = 85;
export const BatteryDeviceState = 86;
export const PowerInformationInternal = 87;
export const ThermalStandby = 88;
export const SystemHiberFileType = 89;
export const PhysicalPowerButtonPress = 90;
export const QueryPotentialDripsConstraint = 91;
export const EnergyTrackerCreate = 92;
export const EnergyTrackerQuery = 93;
export const UpdateBlackBoxRecorder = 94;
export const SessionAllowExternalDmaDevices = 95;
export const PowerInformationLevelMaximum = 96;

export const POWER_USER_PRESENCE_TYPE = int;
export const UserNotPresent = 0;
export const UserPresent = 1;
export const UserUnknown = 0xff;
export const PPOWER_USER_PRESENCE_TYPE = pointer(POWER_USER_PRESENCE_TYPE);

export const POWER_MONITOR_REQUEST_REASON = int;
export const MonitorRequestReasonUnknown = 0;
export const MonitorRequestReasonPowerButton = 1;
export const MonitorRequestReasonRemoteConnection = 2;
export const MonitorRequestReasonScMonitorpower = 3;
export const MonitorRequestReasonUserInput = 4;
export const MonitorRequestReasonAcDcDisplayBurst = 5;
export const MonitorRequestReasonUserDisplayBurst = 6;
export const MonitorRequestReasonPoSetSystemState = 7;
export const MonitorRequestReasonSetThreadExecutionState = 8;
export const MonitorRequestReasonFullWake = 9;
export const MonitorRequestReasonSessionUnlock = 10;
export const MonitorRequestReasonScreenOffRequest = 11;
export const MonitorRequestReasonIdleTimeout = 12;
export const MonitorRequestReasonPolicyChange = 13;
export const MonitorRequestReasonSleepButton = 14;
export const MonitorRequestReasonLid = 15;
export const MonitorRequestReasonBatteryCountChange = 16;
export const MonitorRequestReasonGracePeriod = 17;
export const MonitorRequestReasonPnP = 18;
export const MonitorRequestReasonDP = 19;
export const MonitorRequestReasonSxTransition = 20;
export const MonitorRequestReasonSystemIdle = 21;
export const MonitorRequestReasonNearProximity = 22;
export const MonitorRequestReasonThermalStandby = 23;
export const MonitorRequestReasonResumePdc = 24;
export const MonitorRequestReasonResumeS4 = 25;
export const MonitorRequestReasonTerminal = 26;
export const MonitorRequestReasonPdcSignal = 27;
export const MonitorRequestReasonAcDcDisplayBurstSuppressed = 28;
export const MonitorRequestReasonSystemStateEntered = 29;
export const MonitorRequestReasonWinrt = 30;
export const MonitorRequestReasonUserInputKeyboard = 31;
export const MonitorRequestReasonUserInputMouse = 32;
export const MonitorRequestReasonUserInputTouch = 33;
export const MonitorRequestReasonUserInputPen = 34;
export const MonitorRequestReasonUserInputAccelerometer = 35;
export const MonitorRequestReasonUserInputHid = 36;
export const MonitorRequestReasonUserInputPoUserPresent = 37;
export const MonitorRequestReasonUserInputSessionSwitch = 38;
export const MonitorRequestReasonUserInputInitialization = 39;
export const MonitorRequestReasonPdcSignalWindowsMobilePwrNotif = 40;
export const MonitorRequestReasonPdcSignalWindowsMobileShell = 41;
export const MonitorRequestReasonPdcSignalHeyCortana = 42;
export const MonitorRequestReasonPdcSignalHolographicShell = 43;
export const MonitorRequestReasonPdcSignalFingerprint = 44;
export const MonitorRequestReasonDirectedDrips = 45;
export const MonitorRequestReasonDim = 46;
export const MonitorRequestReasonBuiltinPanel = 47;
export const MonitorRequestReasonDisplayRequiredUnDim = 48;
export const MonitorRequestReasonBatteryCountChangeSuppressed = 49;
export const MonitorRequestReasonResumeModernStandby = 50;
export const MonitorRequestReasonMax = 51;

export const POWER_MONITOR_REQUEST_TYPE = int;
export const MonitorRequestTypeOff = 0;
export const MonitorRequestTypeOnAndPresent = 1;
export const MonitorRequestTypeToggleOn = 2;

export const SYSTEM_POWER_CONDITION = int;
export const PoAc = 0;
export const PoDc = 1;
export const PoHot = 2;
export const PoConditionMaximum = 3;

export const POWER_PLATFORM_ROLE = int;
export const PlatformRoleUnspecified = 0;
export const PlatformRoleDesktop = 1;
export const PlatformRoleMobile = 2;
export const PlatformRoleWorkstation = 3;
export const PlatformRoleEnterpriseServer = 4;
export const PlatformRoleSOHOServer = 5;
export const PlatformRoleAppliancePC = 6;
export const PlatformRolePerformanceServer = 7;
export const PlatformRoleSlate = 8;
export const PlatformRoleMaximum = 9;
export const PPOWER_PLATFORM_ROLE = pointer(POWER_PLATFORM_ROLE);

export const HIBERFILE_BUCKET_SIZE = int;
export const HiberFileBucket1GB = 0;
export const HiberFileBucket2GB = 1;
export const HiberFileBucket4GB = 2;
export const HiberFileBucket8GB = 3;
export const HiberFileBucket16GB = 4;
export const HiberFileBucket32GB = 5;
export const HiberFileBucketUnlimited = 6;
export const HiberFileBucketMax = 7;
export const PHIBERFILE_BUCKET_SIZE = pointer(HIBERFILE_BUCKET_SIZE);

export const IMAGE_AUX_SYMBOL_TYPE = int;
export const IMAGE_AUX_SYMBOL_TYPE_TOKEN_DEF = 1;

export const ARM64_FNPDATA_FLAGS = int;
export const PdataRefToFullXdata = 0;
export const PdataPackedUnwindFunction = 1;
export const PdataPackedUnwindFragment = 2;

export const ARM64_FNPDATA_CR = int;
export const PdataCrUnchained = 0;
export const PdataCrUnchainedSavedLr = 1;
export const PdataCrChainedWithPac = 2;
export const PdataCrChained = 3;

export const IMPORT_OBJECT_TYPE = int;
export const IMPORT_OBJECT_CODE = 0;
export const IMPORT_OBJECT_DATA = 1;
export const IMPORT_OBJECT_CONST = 2;

export const IMPORT_OBJECT_NAME_TYPE = int;
export const IMPORT_OBJECT_ORDINAL = 0;
export const IMPORT_OBJECT_NAME = 1;
export const IMPORT_OBJECT_NAME_NO_PREFIX = 2;
export const IMPORT_OBJECT_NAME_UNDECORATE = 3;
export const IMPORT_OBJECT_NAME_EXPORTAS = 4;

export const ReplacesCorHdrNumericDefines = int;
export const COMIMAGE_FLAGS_ILONLY = 0x00000001;
export const COMIMAGE_FLAGS_32BITREQUIRED = 0x00000002;
export const COMIMAGE_FLAGS_IL_LIBRARY = 0x00000004;
export const COMIMAGE_FLAGS_STRONGNAMESIGNED = 0x00000008;
export const COMIMAGE_FLAGS_NATIVE_ENTRYPOINT = 0x00000010;
export const COMIMAGE_FLAGS_TRACKDEBUGDATA = 0x00010000;
export const COMIMAGE_FLAGS_32BITPREFERRED = 0x00020000;
export const COR_VERSION_MAJOR_V2 = 2;
export const COR_VERSION_MAJOR = COR_VERSION_MAJOR_V2;
export const COR_VERSION_MINOR = 5;
export const COR_DELETED_NAME_LENGTH = 8;
export const COR_VTABLEGAP_NAME_LENGTH = 8;
export const NATIVE_TYPE_MAX_CB = 1;
export const COR_ILMETHOD_SECT_SMALL_MAX_DATASIZE = 0xFF;
export const IMAGE_COR_MIH_METHODRVA = 0x01;
export const IMAGE_COR_MIH_EHRVA = 0x02;
export const IMAGE_COR_MIH_BASICBLOCK = 0x08;
export const COR_VTABLE_32BIT = 0x01;
export const COR_VTABLE_64BIT = 0x02;
export const COR_VTABLE_FROM_UNMANAGED = 0x04;
export const COR_VTABLE_FROM_UNMANAGED_RETAIN_APPDOMAIN = 0x08;
export const COR_VTABLE_CALL_MOST_DERIVED = 0x10;
export const IMAGE_COR_EATJ_THUNK_SIZE = 32;
export const MAX_CLASS_NAME = 1024;
export const MAX_PACKAGE_NAME = 1024;

export const RTL_UMS_THREAD_INFO_CLASS = int;
export const UmsThreadInvalidInfoClass = 0;
export const UmsThreadUserContext = 1;
export const UmsThreadPriority = 2;
export const UmsThreadAffinity = 3;
export const UmsThreadTeb = 4;
export const UmsThreadIsSuspended = 5;
export const UmsThreadIsTerminated = 6;
export const UmsThreadMaxInfoClass = 7;
export const PRTL_UMS_THREAD_INFO_CLASS = pointer(RTL_UMS_THREAD_INFO_CLASS);

export const RTL_UMS_SCHEDULER_REASON = int;
export const UmsSchedulerStartup = 0;
export const UmsSchedulerThreadBlocked = 1;
export const UmsSchedulerThreadYield = 2;
export const PRTL_UMS_SCHEDULER_REASON = pointer(RTL_UMS_SCHEDULER_REASON);

export const OS_DEPLOYEMENT_STATE_VALUES = int;
export const OS_DEPLOYMENT_STANDARD = 1;
export const OS_DEPLOYMENT_COMPACT = 2;

export const IMAGE_POLICY_ENTRY_TYPE = int;
export const ImagePolicyEntryTypeNone = 0;
export const ImagePolicyEntryTypeBool = 1;
export const ImagePolicyEntryTypeInt8 = 2;
export const ImagePolicyEntryTypeUInt8 = 3;
export const ImagePolicyEntryTypeInt16 = 4;
export const ImagePolicyEntryTypeUInt16 = 5;
export const ImagePolicyEntryTypeInt32 = 6;
export const ImagePolicyEntryTypeUInt32 = 7;
export const ImagePolicyEntryTypeInt64 = 8;
export const ImagePolicyEntryTypeUInt64 = 9;
export const ImagePolicyEntryTypeAnsiString = 10;
export const ImagePolicyEntryTypeUnicodeString = 11;
export const ImagePolicyEntryTypeOverride = 12;
export const ImagePolicyEntryTypeMaximum = 13;

export const IMAGE_POLICY_ID = int;
export const ImagePolicyIdNone = 0;
export const ImagePolicyIdEtw = 1;
export const ImagePolicyIdDebug = 2;
export const ImagePolicyIdCrashDump = 3;
export const ImagePolicyIdCrashDumpKey = 4;
export const ImagePolicyIdCrashDumpKeyGuid = 5;
export const ImagePolicyIdParentSd = 6;
export const ImagePolicyIdParentSdRev = 7;
export const ImagePolicyIdSvn = 8;
export const ImagePolicyIdDeviceId = 9;
export const ImagePolicyIdCapability = 10;
export const ImagePolicyIdScenarioId = 11;
export const ImagePolicyIdMaximum = 12;

export const HEAP_INFORMATION_CLASS = int;
export const HeapCompatibilityInformation = 0;
export const HeapEnableTerminationOnCorruption = 1;
export const HeapOptimizeResources = 3;

export const ACTIVATION_CONTEXT_INFO_CLASS = int;
export const ActivationContextBasicInformation = 1;
export const ActivationContextDetailedInformation = 2;
export const AssemblyDetailedInformationInActivationContext = 3;
export const FileInformationInAssemblyOfAssemblyInActivationContext = 4;
export const RunlevelInformationInActivationContext = 5;
export const CompatibilityInformationInActivationContext = 6;
export const ActivationContextManifestResourceName = 7;
export const MaxActivationContextInfoClass = 8;
export const AssemblyDetailedInformationInActivationContxt = 3;
export const FileInformationInAssemblyOfAssemblyInActivationContxt = 4;

export const ACTCTX_REQUESTED_RUN_LEVEL = int;
export const ACTCTX_RUN_LEVEL_UNSPECIFIED = 0;
export const ACTCTX_RUN_LEVEL_AS_INVOKER = 1;
export const ACTCTX_RUN_LEVEL_HIGHEST_AVAILABLE = 2;
export const ACTCTX_RUN_LEVEL_REQUIRE_ADMIN = 3;
export const ACTCTX_RUN_LEVEL_NUMBERS = 4;

export const ACTCTX_COMPATIBILITY_ELEMENT_TYPE = int;
export const ACTCTX_COMPATIBILITY_ELEMENT_TYPE_UNKNOWN = 0;
export const ACTCTX_COMPATIBILITY_ELEMENT_TYPE_OS = 1;
export const ACTCTX_COMPATIBILITY_ELEMENT_TYPE_MITIGATION = 2;
export const ACTCTX_COMPATIBILITY_ELEMENT_TYPE_MAXVERSIONTESTED = 3;

export const SERVICE_NODE_TYPE = int;
export const DriverType = SERVICE_KERNEL_DRIVER;
export const FileSystemType = SERVICE_FILE_SYSTEM_DRIVER;
export const Win32ServiceOwnProcess = SERVICE_WIN32_OWN_PROCESS;
export const Win32ServiceShareProcess = SERVICE_WIN32_SHARE_PROCESS;
export const AdapterType = SERVICE_ADAPTER;
export const RecognizerType = SERVICE_RECOGNIZER_DRIVER;

export const SERVICE_LOAD_TYPE = int;
export const BootLoad = SERVICE_BOOT_START;
export const SystemLoad = SERVICE_SYSTEM_START;
export const AutoLoad = SERVICE_AUTO_START;
export const DemandLoad = SERVICE_DEMAND_START;
export const DisableLoad = SERVICE_DISABLED;

export const SERVICE_ERROR_TYPE = int;
export const IgnoreError = SERVICE_ERROR_IGNORE;
export const NormalError = SERVICE_ERROR_NORMAL;
export const SevereError = SERVICE_ERROR_SEVERE;
export const CriticalError = SERVICE_ERROR_CRITICAL;

export const TAPE_DRIVE_PROBLEM_TYPE = int;
export const TapeDriveProblemNone = 0;
export const TapeDriveReadWriteWarning = 1;
export const TapeDriveReadWriteError = 2;
export const TapeDriveReadWarning = 3;
export const TapeDriveWriteWarning = 4;
export const TapeDriveReadError = 5;
export const TapeDriveWriteError = 6;
export const TapeDriveHardwareError = 7;
export const TapeDriveUnsupportedMedia = 8;
export const TapeDriveScsiConnectionError = 9;
export const TapeDriveTimetoClean = 10;
export const TapeDriveCleanDriveNow = 11;
export const TapeDriveMediaLifeExpired = 12;
export const TapeDriveSnappedTape = 13;

export const TRANSACTION_OUTCOME = int;
export const TransactionOutcomeUndetermined = 1;
export const TransactionOutcomeCommitted = 2;
export const TransactionOutcomeAborted = 3;

export const TRANSACTION_STATE = int;
export const TransactionStateNormal = 1;
export const TransactionStateIndoubt = 2;
export const TransactionStateCommittedNotify = 3;

export const TRANSACTION_INFORMATION_CLASS = int;
export const TransactionBasicInformation = 0;
export const TransactionPropertiesInformation = 1;
export const TransactionEnlistmentInformation = 2;
export const TransactionSuperiorEnlistmentInformation = 3;
export const TransactionBindInformation = 4;
export const TransactionDTCPrivateInformation = 5;

export const TRANSACTIONMANAGER_INFORMATION_CLASS = int;
export const TransactionManagerBasicInformation = 0;
export const TransactionManagerLogInformation = 1;
export const TransactionManagerLogPathInformation = 2;
export const TransactionManagerRecoveryInformation = 4;
export const TransactionManagerOnlineProbeInformation = 3;
export const TransactionManagerOldestTransactionInformation = 5;

export const RESOURCEMANAGER_INFORMATION_CLASS = int;
export const ResourceManagerBasicInformation = 0;
export const ResourceManagerCompletionInformation = 1;

export const ENLISTMENT_INFORMATION_CLASS = int;
export const EnlistmentBasicInformation = 0;
export const EnlistmentRecoveryInformation = 1;
export const EnlistmentCrmInformation = 2;

export const KTMOBJECT_TYPE = int;
export const KTMOBJECT_TRANSACTION = 0;
export const KTMOBJECT_TRANSACTION_MANAGER = 1;
export const KTMOBJECT_RESOURCE_MANAGER = 2;
export const KTMOBJECT_ENLISTMENT = 3;
export const KTMOBJECT_INVALID = 4;

export const TP_CALLBACK_PRIORITY = int;
export const TP_CALLBACK_PRIORITY_HIGH = 0;
export const TP_CALLBACK_PRIORITY_NORMAL = 1;
export const TP_CALLBACK_PRIORITY_LOW = 2;
export const TP_CALLBACK_PRIORITY_INVALID = 3;
export const TP_CALLBACK_PRIORITY_COUNT = TP_CALLBACK_PRIORITY_INVALID;

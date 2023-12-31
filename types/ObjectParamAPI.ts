import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { AccessTokenIdListResponse } from '../models/AccessTokenIdListResponse';
import { AccessTokenIdResponse } from '../models/AccessTokenIdResponse';
import { AccessTokenRequest } from '../models/AccessTokenRequest';
import { AccessTokenResponse } from '../models/AccessTokenResponse';
import { AddPacerCredentialRequest } from '../models/AddPacerCredentialRequest';
import { AdditionalLevels } from '../models/AdditionalLevels';
import { AdditionalLevels1 } from '../models/AdditionalLevels1';
import { Address } from '../models/Address';
import { AllCourtsPacerCaseLocatorCaseSearch200Response } from '../models/AllCourtsPacerCaseLocatorCaseSearch200Response';
import { AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerPageInfo } from '../models/AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerPageInfo';
import { AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerReceipt } from '../models/AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerReceipt';
import { AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerSearchResultsArrayInner } from '../models/AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerSearchResultsArrayInner';
import { AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerSearchResultsArrayInnerPacerContent } from '../models/AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerSearchResultsArrayInnerPacerContent';
import { AllCourtsPacerCaseLocatorPartySearch200Response } from '../models/AllCourtsPacerCaseLocatorPartySearch200Response';
import { AllCourtsPacerCaseLocatorPartySearch200ResponsePacerSearchResultsArrayInner } from '../models/AllCourtsPacerCaseLocatorPartySearch200ResponsePacerSearchResultsArrayInner';
import { AllCourtsPacerCaseLocatorPartySearch200ResponsePacerSearchResultsArrayInnerPacerContent } from '../models/AllCourtsPacerCaseLocatorPartySearch200ResponsePacerSearchResultsArrayInnerPacerContent';
import { AreaOfLaw } from '../models/AreaOfLaw';
import { AreaOfLaw1 } from '../models/AreaOfLaw1';
import { AreaOfLawResponse } from '../models/AreaOfLawResponse';
import { AssociatedNormAttorney } from '../models/AssociatedNormAttorney';
import { AssociatedNormAttorney1 } from '../models/AssociatedNormAttorney1';
import { AssociatedNormAttorneyResponse } from '../models/AssociatedNormAttorneyResponse';
import { AssociatedNormAttorneyResponse1 } from '../models/AssociatedNormAttorneyResponse1';
import { AssociatedNormJudge } from '../models/AssociatedNormJudge';
import { AssociatedNormJudge1 } from '../models/AssociatedNormJudge1';
import { AssociatedNormJudgeResponse } from '../models/AssociatedNormJudgeResponse';
import { AssociatedNormJudgeResponse1 } from '../models/AssociatedNormJudgeResponse1';
import { AssociatedNormLawFirm } from '../models/AssociatedNormLawFirm';
import { AssociatedNormLawFirm1 } from '../models/AssociatedNormLawFirm1';
import { AssociatedNormLawFirmResponse } from '../models/AssociatedNormLawFirmResponse';
import { AssociatedNormLawFirmResponse1 } from '../models/AssociatedNormLawFirmResponse1';
import { AssociatedNormParty } from '../models/AssociatedNormParty';
import { AssociatedNormParty1 } from '../models/AssociatedNormParty1';
import { AssociatedNormPartyResponse } from '../models/AssociatedNormPartyResponse';
import { AssociatedNormPartyResponse1 } from '../models/AssociatedNormPartyResponse1';
import { AssociatedSoSPerson } from '../models/AssociatedSoSPerson';
import { AssociatedSoSPerson1 } from '../models/AssociatedSoSPerson1';
import { Attorney } from '../models/Attorney';
import { AttorneyAnalyticsAPI } from '../models/AttorneyAnalyticsAPI';
import { AttorneyAnalyticsAPI1 } from '../models/AttorneyAnalyticsAPI1';
import { AttorneyLawFirm } from '../models/AttorneyLawFirm';
import { AttorneyRepresentationType } from '../models/AttorneyRepresentationType';
import { AttorneyRepresentationType1 } from '../models/AttorneyRepresentationType1';
import { AttorneyRepresentationTypeResponse } from '../models/AttorneyRepresentationTypeResponse';
import { AttorneyType } from '../models/AttorneyType';
import { AttorneyType1 } from '../models/AttorneyType1';
import { AttorneyTypeResponse } from '../models/AttorneyTypeResponse';
import { Attorneys } from '../models/Attorneys';
import { BarRecord } from '../models/BarRecord';
import { BarRecord1 } from '../models/BarRecord1';
import { BarRecordPreview } from '../models/BarRecordPreview';
import { BarRecordPreview1 } from '../models/BarRecordPreview1';
import { BarSourceData } from '../models/BarSourceData';
import { BarSourceData1 } from '../models/BarSourceData1';
import { BarSourceData1AdministrativeActionsArrayInner } from '../models/BarSourceData1AdministrativeActionsArrayInner';
import { BarSourceData1AdvancedDegreeArrayInner } from '../models/BarSourceData1AdvancedDegreeArrayInner';
import { BarSourceData1BarStatusArrayInner } from '../models/BarSourceData1BarStatusArrayInner';
import { BarSourceData1BoardCertificationsArrayInner } from '../models/BarSourceData1BoardCertificationsArrayInner';
import { BarSourceData1CommitteesArrayInner } from '../models/BarSourceData1CommitteesArrayInner';
import { BarSourceData1CourtHistoryArrayInner } from '../models/BarSourceData1CourtHistoryArrayInner';
import { BarSourceData1CourtOfAdmissions } from '../models/BarSourceData1CourtOfAdmissions';
import { BarSourceData1DisciplinaryHistoryArrayInner } from '../models/BarSourceData1DisciplinaryHistoryArrayInner';
import { BarSourceData1DisciplineSummariesArrayInner } from '../models/BarSourceData1DisciplineSummariesArrayInner';
import { BarSourceData1EmploymentHistoryArrayInner } from '../models/BarSourceData1EmploymentHistoryArrayInner';
import { BarSourceData1FeesOptionsArrayInner } from '../models/BarSourceData1FeesOptionsArrayInner';
import { BarSourceData1InvolvementsArrayInner } from '../models/BarSourceData1InvolvementsArrayInner';
import { BarSourceData1LawSchoolArrayInner } from '../models/BarSourceData1LawSchoolArrayInner';
import { BarSourceData1Name } from '../models/BarSourceData1Name';
import { BarSourceData1OpenActionStatusArrayInner } from '../models/BarSourceData1OpenActionStatusArrayInner';
import { BarSourceData1OtherJurisdictionArrayInner } from '../models/BarSourceData1OtherJurisdictionArrayInner';
import { BarSourceData1PublicHearingArrayInner } from '../models/BarSourceData1PublicHearingArrayInner';
import { BarSourceData1ReasonForInactivation } from '../models/BarSourceData1ReasonForInactivation';
import { BarSourceData1RelatedCasesArrayInner } from '../models/BarSourceData1RelatedCasesArrayInner';
import { BarSourceData1SourceInfo } from '../models/BarSourceData1SourceInfo';
import { BarSourceData1StatewideGrievanceCommitteeHistoryArrayInner } from '../models/BarSourceData1StatewideGrievanceCommitteeHistoryArrayInner';
import { BarSourceData1StatusHistoryArrayInner } from '../models/BarSourceData1StatusHistoryArrayInner';
import { BarSourceData1TenYearDisciplineArrayInner } from '../models/BarSourceData1TenYearDisciplineArrayInner';
import { BillingCycleUsageResponse } from '../models/BillingCycleUsageResponse';
import { BillingCyclesResponse } from '../models/BillingCyclesResponse';
import { CallbackListResponse } from '../models/CallbackListResponse';
import { Case } from '../models/Case';
import { CaseAnalyticsAPI } from '../models/CaseAnalyticsAPI';
import { CaseAnalyticsAPI1 } from '../models/CaseAnalyticsAPI1';
import { CaseCauseOfAction } from '../models/CaseCauseOfAction';
import { CaseCharge } from '../models/CaseCharge';
import { CaseClass } from '../models/CaseClass';
import { CaseClass1 } from '../models/CaseClass1';
import { CaseClassCoverage } from '../models/CaseClassCoverage';
import { CaseClassResponse } from '../models/CaseClassResponse';
import { CaseCountAnalyticsByAreaOfLaw } from '../models/CaseCountAnalyticsByAreaOfLaw';
import { CaseCountAnalyticsByAreaOfLaw1 } from '../models/CaseCountAnalyticsByAreaOfLaw1';
import { CaseCountAnalyticsByAreaOfLawResponse } from '../models/CaseCountAnalyticsByAreaOfLawResponse';
import { CaseCountAnalyticsByAreaOfLawResponse1 } from '../models/CaseCountAnalyticsByAreaOfLawResponse1';
import { CaseCountAnalyticsByCaseClass } from '../models/CaseCountAnalyticsByCaseClass';
import { CaseCountAnalyticsByCaseClass1 } from '../models/CaseCountAnalyticsByCaseClass1';
import { CaseCountAnalyticsByCaseClassResponse } from '../models/CaseCountAnalyticsByCaseClassResponse';
import { CaseCountAnalyticsByCaseClassResponse1 } from '../models/CaseCountAnalyticsByCaseClassResponse1';
import { CaseCountAnalyticsByCaseFiledDate } from '../models/CaseCountAnalyticsByCaseFiledDate';
import { CaseCountAnalyticsByCaseFiledDate1 } from '../models/CaseCountAnalyticsByCaseFiledDate1';
import { CaseCountAnalyticsByCaseFiledDateResponse } from '../models/CaseCountAnalyticsByCaseFiledDateResponse';
import { CaseCountAnalyticsByCaseFiledDateResponse1 } from '../models/CaseCountAnalyticsByCaseFiledDateResponse1';
import { CaseCountAnalyticsByCaseType } from '../models/CaseCountAnalyticsByCaseType';
import { CaseCountAnalyticsByCaseType1 } from '../models/CaseCountAnalyticsByCaseType1';
import { CaseCountAnalyticsByCaseTypeGroup } from '../models/CaseCountAnalyticsByCaseTypeGroup';
import { CaseCountAnalyticsByCaseTypeGroup1 } from '../models/CaseCountAnalyticsByCaseTypeGroup1';
import { CaseCountAnalyticsByCaseTypeGroupResponse } from '../models/CaseCountAnalyticsByCaseTypeGroupResponse';
import { CaseCountAnalyticsByCaseTypeGroupResponse1 } from '../models/CaseCountAnalyticsByCaseTypeGroupResponse1';
import { CaseCountAnalyticsByCaseTypeResponse } from '../models/CaseCountAnalyticsByCaseTypeResponse';
import { CaseCountAnalyticsByCaseTypeResponse1 } from '../models/CaseCountAnalyticsByCaseTypeResponse1';
import { CaseCountAnalyticsByCourt } from '../models/CaseCountAnalyticsByCourt';
import { CaseCountAnalyticsByCourt1 } from '../models/CaseCountAnalyticsByCourt1';
import { CaseCountAnalyticsByCourt1Geo } from '../models/CaseCountAnalyticsByCourt1Geo';
import { CaseCountAnalyticsByCourtLocation } from '../models/CaseCountAnalyticsByCourtLocation';
import { CaseCountAnalyticsByCourtLocation1 } from '../models/CaseCountAnalyticsByCourtLocation1';
import { CaseCountAnalyticsByCourtLocationResponse } from '../models/CaseCountAnalyticsByCourtLocationResponse';
import { CaseCountAnalyticsByCourtLocationResponse1 } from '../models/CaseCountAnalyticsByCourtLocationResponse1';
import { CaseCountAnalyticsByCourtResponse } from '../models/CaseCountAnalyticsByCourtResponse';
import { CaseCountAnalyticsByCourtResponse1 } from '../models/CaseCountAnalyticsByCourtResponse1';
import { CaseCountAnalyticsByCourtSystem } from '../models/CaseCountAnalyticsByCourtSystem';
import { CaseCountAnalyticsByCourtSystem1 } from '../models/CaseCountAnalyticsByCourtSystem1';
import { CaseCountAnalyticsByCourtSystemResponse } from '../models/CaseCountAnalyticsByCourtSystemResponse';
import { CaseCountAnalyticsByCourtSystemResponse1 } from '../models/CaseCountAnalyticsByCourtSystemResponse1';
import { CaseCountAnalyticsByCourtType } from '../models/CaseCountAnalyticsByCourtType';
import { CaseCountAnalyticsByCourtType1 } from '../models/CaseCountAnalyticsByCourtType1';
import { CaseCountAnalyticsByCourtTypeResponse } from '../models/CaseCountAnalyticsByCourtTypeResponse';
import { CaseCountAnalyticsByCourtTypeResponse1 } from '../models/CaseCountAnalyticsByCourtTypeResponse1';
import { CaseCountAnalyticsByJurisdictionGeo } from '../models/CaseCountAnalyticsByJurisdictionGeo';
import { CaseCountAnalyticsByJurisdictionGeo1 } from '../models/CaseCountAnalyticsByJurisdictionGeo1';
import { CaseCountAnalyticsByJurisdictionGeoResponse } from '../models/CaseCountAnalyticsByJurisdictionGeoResponse';
import { CaseCountAnalyticsByJurisdictionGeoResponse1 } from '../models/CaseCountAnalyticsByJurisdictionGeoResponse1';
import { CaseCountAnalyticsByNormAttorney } from '../models/CaseCountAnalyticsByNormAttorney';
import { CaseCountAnalyticsByNormAttorney1 } from '../models/CaseCountAnalyticsByNormAttorney1';
import { CaseCountAnalyticsByNormAttorneyResponse } from '../models/CaseCountAnalyticsByNormAttorneyResponse';
import { CaseCountAnalyticsByNormAttorneyResponse1 } from '../models/CaseCountAnalyticsByNormAttorneyResponse1';
import { CaseCountAnalyticsByNormJudge } from '../models/CaseCountAnalyticsByNormJudge';
import { CaseCountAnalyticsByNormJudge1 } from '../models/CaseCountAnalyticsByNormJudge1';
import { CaseCountAnalyticsByNormJudgeResponse } from '../models/CaseCountAnalyticsByNormJudgeResponse';
import { CaseCountAnalyticsByNormJudgeResponse1 } from '../models/CaseCountAnalyticsByNormJudgeResponse1';
import { CaseCountAnalyticsByNormLawFirm } from '../models/CaseCountAnalyticsByNormLawFirm';
import { CaseCountAnalyticsByNormLawFirm1 } from '../models/CaseCountAnalyticsByNormLawFirm1';
import { CaseCountAnalyticsByNormLawFirmResponse } from '../models/CaseCountAnalyticsByNormLawFirmResponse';
import { CaseCountAnalyticsByNormLawFirmResponse1 } from '../models/CaseCountAnalyticsByNormLawFirmResponse1';
import { CaseCountAnalyticsByNormParty } from '../models/CaseCountAnalyticsByNormParty';
import { CaseCountAnalyticsByNormParty1 } from '../models/CaseCountAnalyticsByNormParty1';
import { CaseCountAnalyticsByNormPartyResponse } from '../models/CaseCountAnalyticsByNormPartyResponse';
import { CaseCountAnalyticsByNormPartyResponse1 } from '../models/CaseCountAnalyticsByNormPartyResponse1';
import { CaseCountAnalyticsByPartyRole } from '../models/CaseCountAnalyticsByPartyRole';
import { CaseCountAnalyticsByPartyRole1 } from '../models/CaseCountAnalyticsByPartyRole1';
import { CaseCountAnalyticsByPartyRoleGroup } from '../models/CaseCountAnalyticsByPartyRoleGroup';
import { CaseCountAnalyticsByPartyRoleGroup1 } from '../models/CaseCountAnalyticsByPartyRoleGroup1';
import { CaseCountAnalyticsByPartyRoleGroupResponse } from '../models/CaseCountAnalyticsByPartyRoleGroupResponse';
import { CaseCountAnalyticsByPartyRoleGroupResponse1 } from '../models/CaseCountAnalyticsByPartyRoleGroupResponse1';
import { CaseCountAnalyticsByPartyRoleResponse } from '../models/CaseCountAnalyticsByPartyRoleResponse';
import { CaseCountAnalyticsByPartyRoleResponse1 } from '../models/CaseCountAnalyticsByPartyRoleResponse1';
import { CaseDocument } from '../models/CaseDocument';
import { CaseDocumentOrderCallback } from '../models/CaseDocumentOrderCallback';
import { CaseDocumentOrderCallbackListResponse } from '../models/CaseDocumentOrderCallbackListResponse';
import { CaseDocumentOrderPacerOptions } from '../models/CaseDocumentOrderPacerOptions';
import { CaseDocumentOrderRequest } from '../models/CaseDocumentOrderRequest';
import { CaseDocuments } from '../models/CaseDocuments';
import { CaseExportCallback } from '../models/CaseExportCallback';
import { CaseExportCallbackListResponse } from '../models/CaseExportCallbackListResponse';
import { CaseRelationshipType } from '../models/CaseRelationshipType';
import { CaseRelationshipType1 } from '../models/CaseRelationshipType1';
import { CaseRelationshipTypeResponse } from '../models/CaseRelationshipTypeResponse';
import { CaseSearchResponse } from '../models/CaseSearchResponse';
import { CaseSearchResult } from '../models/CaseSearchResult';
import { CaseSearchResult1 } from '../models/CaseSearchResult1';
import { CaseSearchResult1MatchedObjectArrayInner } from '../models/CaseSearchResult1MatchedObjectArrayInner';
import { CaseStats } from '../models/CaseStats';
import { CaseStatus } from '../models/CaseStatus';
import { CaseStatus1 } from '../models/CaseStatus1';
import { CaseStatusGroup } from '../models/CaseStatusGroup';
import { CaseStatusGroup1 } from '../models/CaseStatusGroup1';
import { CaseStatusGroupResponse } from '../models/CaseStatusGroupResponse';
import { CaseStatusResponse } from '../models/CaseStatusResponse';
import { CaseTimeline } from '../models/CaseTimeline';
import { CaseTimeline1 } from '../models/CaseTimeline1';
import { CaseTrack } from '../models/CaseTrack';
import { CaseTrackListResponse } from '../models/CaseTrackListResponse';
import { CaseTrackPostRequest } from '../models/CaseTrackPostRequest';
import { CaseTrackPostRequestLastTrackedDetails } from '../models/CaseTrackPostRequestLastTrackedDetails';
import { CaseTrackPreview } from '../models/CaseTrackPreview';
import { CaseTrackRequest } from '../models/CaseTrackRequest';
import { CaseTrackSchedule } from '../models/CaseTrackSchedule';
import { CaseType } from '../models/CaseType';
import { CaseType1 } from '../models/CaseType1';
import { CaseTypeGroup } from '../models/CaseTypeGroup';
import { CaseTypeGroup1 } from '../models/CaseTypeGroup1';
import { CaseTypeGroupResponse } from '../models/CaseTypeGroupResponse';
import { CaseTypeResponse } from '../models/CaseTypeResponse';
import { CaseUpdate } from '../models/CaseUpdate';
import { CaseUpdateListResponse } from '../models/CaseUpdateListResponse';
import { CaseUpdatePacerOptions } from '../models/CaseUpdatePacerOptions';
import { CaseUpdatePacerOptionsResponse } from '../models/CaseUpdatePacerOptionsResponse';
import { CaseUpdatePacerOptionsResponse1 } from '../models/CaseUpdatePacerOptionsResponse1';
import { CaseUpdatePreview } from '../models/CaseUpdatePreview';
import { CaseUpdateRequest } from '../models/CaseUpdateRequest';
import { CauseOfAction } from '../models/CauseOfAction';
import { CauseOfAction1 } from '../models/CauseOfAction1';
import { CauseOfActionAdditionalData } from '../models/CauseOfActionAdditionalData';
import { CauseOfActionAdditionalData1 } from '../models/CauseOfActionAdditionalData1';
import { CauseOfActionAdditionalDataResponse } from '../models/CauseOfActionAdditionalDataResponse';
import { CauseOfActionGroup } from '../models/CauseOfActionGroup';
import { CauseOfActionGroup1 } from '../models/CauseOfActionGroup1';
import { CauseOfActionGroupResponse } from '../models/CauseOfActionGroupResponse';
import { CauseOfActionResponse } from '../models/CauseOfActionResponse';
import { Charge } from '../models/Charge';
import { Charge1 } from '../models/Charge1';
import { ChargeAdditionalData } from '../models/ChargeAdditionalData';
import { ChargeAdditionalData1 } from '../models/ChargeAdditionalData1';
import { ChargeAdditionalDataResponse } from '../models/ChargeAdditionalDataResponse';
import { ChargeDegree } from '../models/ChargeDegree';
import { ChargeDegree1 } from '../models/ChargeDegree1';
import { ChargeDegreeResponse } from '../models/ChargeDegreeResponse';
import { ChargeGroup } from '../models/ChargeGroup';
import { ChargeGroup1 } from '../models/ChargeGroup1';
import { ChargeGroupResponse } from '../models/ChargeGroupResponse';
import { ChargeResponse } from '../models/ChargeResponse';
import { ChargeSeverity } from '../models/ChargeSeverity';
import { ChargeSeverity1 } from '../models/ChargeSeverity1';
import { ChargeSeverityResponse } from '../models/ChargeSeverityResponse';
import { Contact } from '../models/Contact';
import { Court } from '../models/Court';
import { Court1 } from '../models/Court1';
import { CourtCoverage } from '../models/CourtCoverage';
import { CourtLocation } from '../models/CourtLocation';
import { CourtLocation1 } from '../models/CourtLocation1';
import { CourtLocationResponse } from '../models/CourtLocationResponse';
import { CourtLocationResponse1 } from '../models/CourtLocationResponse1';
import { CourtResponse } from '../models/CourtResponse';
import { CourtServiceStatus } from '../models/CourtServiceStatus';
import { CourtServiceStatusResponse } from '../models/CourtServiceStatusResponse';
import { CourtSystem } from '../models/CourtSystem';
import { CourtSystem1 } from '../models/CourtSystem1';
import { CourtSystemResponse } from '../models/CourtSystemResponse';
import { CourtType } from '../models/CourtType';
import { CourtType1 } from '../models/CourtType1';
import { CourtTypeResponse } from '../models/CourtTypeResponse';
import { DailyUsageResponse } from '../models/DailyUsageResponse';
import { DocketEntries } from '../models/DocketEntries';
import { DocketEntry } from '../models/DocketEntry';
import { DocketEntryPrimaryDocuments } from '../models/DocketEntryPrimaryDocuments';
import { DocketEntrySecondaryDocuments } from '../models/DocketEntrySecondaryDocuments';
import { DocumentDownload } from '../models/DocumentDownload';
import { Email } from '../models/Email';
import { Exception } from '../models/Exception';
import { Exception1 } from '../models/Exception1';
import { ExportCase200Response } from '../models/ExportCase200Response';
import { ExportFile } from '../models/ExportFile';
import { ExportFile1 } from '../models/ExportFile1';
import { ExtractedFields } from '../models/ExtractedFields';
import { GenerateNewToken200Response } from '../models/GenerateNewToken200Response';
import { GenerateNewTokenRequest } from '../models/GenerateNewTokenRequest';
import { GetAreasOfLaw200Response } from '../models/GetAreasOfLaw200Response';
import { GetAttorneyRepresentationTypes200Response } from '../models/GetAttorneyRepresentationTypes200Response';
import { GetAttorneyTypes200Response } from '../models/GetAttorneyTypes200Response';
import { GetBillingCycles200Response } from '../models/GetBillingCycles200Response';
import { GetBillingUsageByBillingCycle200Response } from '../models/GetBillingUsageByBillingCycle200Response';
import { GetBillingUsageByBillingCycle200ResponseApiCallsBillable } from '../models/GetBillingUsageByBillingCycle200ResponseApiCallsBillable';
import { GetBillingUsageByBillingCycle200ResponseApiCallsCredited } from '../models/GetBillingUsageByBillingCycle200ResponseApiCallsCredited';
import { GetBillingUsageByBillingCycle200ResponseApiCallsMade } from '../models/GetBillingUsageByBillingCycle200ResponseApiCallsMade';
import { GetBillingUsageByBillingCycle200ResponseBillingCycle } from '../models/GetBillingUsageByBillingCycle200ResponseBillingCycle';
import { GetCallbacks200Response } from '../models/GetCallbacks200Response';
import { GetCallbacks200ResponseCaseDocumentOrderCallbacks } from '../models/GetCallbacks200ResponseCaseDocumentOrderCallbacks';
import { GetCallbacks200ResponseCaseExportCallbacks } from '../models/GetCallbacks200ResponseCaseExportCallbacks';
import { GetCase200Response } from '../models/GetCase200Response';
import { GetCase200ResponseAttorneys } from '../models/GetCase200ResponseAttorneys';
import { GetCase200ResponseAttorneysAttorneyArrayInner } from '../models/GetCase200ResponseAttorneysAttorneyArrayInner';
import { GetCase200ResponseAttorneysAttorneyArrayInnerAttorneyLawFirmArrayInner } from '../models/GetCase200ResponseAttorneysAttorneyArrayInnerAttorneyLawFirmArrayInner';
import { GetCase200ResponseCaseDocuments } from '../models/GetCase200ResponseCaseDocuments';
import { GetCase200ResponseCaseStats } from '../models/GetCase200ResponseCaseStats';
import { GetCase200ResponseCauseOfActionArrayInner } from '../models/GetCase200ResponseCauseOfActionArrayInner';
import { GetCase200ResponseChargeArrayInner } from '../models/GetCase200ResponseChargeArrayInner';
import { GetCase200ResponseDocketEntries } from '../models/GetCase200ResponseDocketEntries';
import { GetCase200ResponseDocketEntriesDocketEntryArrayInner } from '../models/GetCase200ResponseDocketEntriesDocketEntryArrayInner';
import { GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments } from '../models/GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments';
import { GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner } from '../models/GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner';
import { GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerPreviewDocument } from '../models/GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerPreviewDocument';
import { GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments } from '../models/GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments';
import { GetCase200ResponseDocketEntriesDocketEntryArrayInnerReferencedDocketNumberArrayInner } from '../models/GetCase200ResponseDocketEntriesDocketEntryArrayInnerReferencedDocketNumberArrayInner';
import { GetCase200ResponseHearings } from '../models/GetCase200ResponseHearings';
import { GetCase200ResponseHearingsHearingArrayInner } from '../models/GetCase200ResponseHearingsHearingArrayInner';
import { GetCase200ResponseJudges } from '../models/GetCase200ResponseJudges';
import { GetCase200ResponseJudgesJudgeArrayInner } from '../models/GetCase200ResponseJudgesJudgeArrayInner';
import { GetCase200ResponseParties } from '../models/GetCase200ResponseParties';
import { GetCase200ResponsePartiesPartyArrayInner } from '../models/GetCase200ResponsePartiesPartyArrayInner';
import { GetCase200ResponsePartiesPartyArrayInnerContact } from '../models/GetCase200ResponsePartiesPartyArrayInnerContact';
import { GetCase200ResponsePartiesPartyArrayInnerContactAddressArrayInner } from '../models/GetCase200ResponsePartiesPartyArrayInnerContactAddressArrayInner';
import { GetCase200ResponsePartiesPartyArrayInnerContactEmailArrayInner } from '../models/GetCase200ResponsePartiesPartyArrayInnerContactEmailArrayInner';
import { GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInner } from '../models/GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInner';
import { GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations } from '../models/GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations';
import { GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociationsPartyAttorneyAssociationArrayInner } from '../models/GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociationsPartyAttorneyAssociationArrayInner';
import { GetCase200ResponseRelatedCases } from '../models/GetCase200ResponseRelatedCases';
import { GetCase200ResponseRelatedCasesRelatedCaseArrayInner } from '../models/GetCase200ResponseRelatedCasesRelatedCaseArrayInner';
import { GetCase200ResponseSourceCaseData } from '../models/GetCase200ResponseSourceCaseData';
import { GetCase200ResponseSourceCaseDataNatureOfSuitArrayInner } from '../models/GetCase200ResponseSourceCaseDataNatureOfSuitArrayInner';
import { GetCase200ResponseSourceCaseDataSourceCauseOfActionArrayInner } from '../models/GetCase200ResponseSourceCaseDataSourceCauseOfActionArrayInner';
import { GetCase200ResponseSourceCaseDataSourceChargeArrayInner } from '../models/GetCase200ResponseSourceCaseDataSourceChargeArrayInner';
import { GetCase200ResponseSourceCaseDataSourceChargeArrayInnerSourceChargeAdditionalDataArrayInner } from '../models/GetCase200ResponseSourceCaseDataSourceChargeArrayInnerSourceChargeAdditionalDataArrayInner';
import { GetCase200ResponseSourceCaseDataSourcePageDataInner } from '../models/GetCase200ResponseSourceCaseDataSourcePageDataInner';
import { GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceData } from '../models/GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceData';
import { GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataExtractedFields } from '../models/GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataExtractedFields';
import { GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInner } from '../models/GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInner';
import { GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInnerChildArrayInner } from '../models/GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInnerChildArrayInner';
import { GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInnerChildArrayInnerChildArrayInner } from '../models/GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInnerChildArrayInnerChildArrayInner';
import { GetCaseDocumentDownloadById200Response } from '../models/GetCaseDocumentDownloadById200Response';
import { GetCaseDocumentOrderCallbacks200Response } from '../models/GetCaseDocumentOrderCallbacks200Response';
import { GetCaseExportCallbacks200Response } from '../models/GetCaseExportCallbacks200Response';
import { GetCaseRelationshipTypes200Response } from '../models/GetCaseRelationshipTypes200Response';
import { GetCaseStatusGroups200Response } from '../models/GetCaseStatusGroups200Response';
import { GetCaseTracks200Response } from '../models/GetCaseTracks200Response';
import { GetCaseTracks200ResponseCaseTrackPreviewArrayInner } from '../models/GetCaseTracks200ResponseCaseTrackPreviewArrayInner';
import { GetCaseTypeGroups200Response } from '../models/GetCaseTypeGroups200Response';
import { GetCaseTypes200Response } from '../models/GetCaseTypes200Response';
import { GetCaseUpdates200Response } from '../models/GetCaseUpdates200Response';
import { GetCaseUpdates200ResponseCaseUpdatePreviewArrayInner } from '../models/GetCaseUpdates200ResponseCaseUpdatePreviewArrayInner';
import { GetCasesClass200Response } from '../models/GetCasesClass200Response';
import { GetCasesStatus200Response } from '../models/GetCasesStatus200Response';
import { GetCausesOfAction200Response } from '../models/GetCausesOfAction200Response';
import { GetCausesOfActionAdditionalData200Response } from '../models/GetCausesOfActionAdditionalData200Response';
import { GetCausesOfActionGroup200Response } from '../models/GetCausesOfActionGroup200Response';
import { GetChargeGroups200Response } from '../models/GetChargeGroups200Response';
import { GetCharges200Response } from '../models/GetCharges200Response';
import { GetChargesAdditionalData200Response } from '../models/GetChargesAdditionalData200Response';
import { GetChargesDegree200Response } from '../models/GetChargesDegree200Response';
import { GetChargesSeverity200Response } from '../models/GetChargesSeverity200Response';
import { GetCourtCoverage200Response } from '../models/GetCourtCoverage200Response';
import { GetCourtCoverage200ResponseCaseClassCoverageArrayInner } from '../models/GetCourtCoverage200ResponseCaseClassCoverageArrayInner';
import { GetCourtSystems200Response } from '../models/GetCourtSystems200Response';
import { GetCourtTypes200Response } from '../models/GetCourtTypes200Response';
import { GetCourts200Response } from '../models/GetCourts200Response';
import { GetCourtsServiceStatus200Response } from '../models/GetCourtsServiceStatus200Response';
import { GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner } from '../models/GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner';
import { GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus } from '../models/GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus';
import { GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetails } from '../models/GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetails';
import { GetDailyUsageByDate200Response } from '../models/GetDailyUsageByDate200Response';
import { GetJudgeTypes200Response } from '../models/GetJudgeTypes200Response';
import { GetPacerCredential200Response } from '../models/GetPacerCredential200Response';
import { GetPacerCredential200ResponsePacerCredentialArrayInner } from '../models/GetPacerCredential200ResponsePacerCredentialArrayInner';
import { GetPartyRoleGroups200Response } from '../models/GetPartyRoleGroups200Response';
import { GetPartyRoles200Response } from '../models/GetPartyRoles200Response';
import { Hearing } from '../models/Hearing';
import { Hearings } from '../models/Hearings';
import { ImportPacerCaseByCourtUsingCaseNumber200Response } from '../models/ImportPacerCaseByCourtUsingCaseNumber200Response';
import { ImportPacerCaseByCourtUsingCaseNumber200ResponsePacerImportCaseResultsArrayInner } from '../models/ImportPacerCaseByCourtUsingCaseNumber200ResponsePacerImportCaseResultsArrayInner';
import { Individual } from '../models/Individual';
import { InvalidateAccessTokenRequest } from '../models/InvalidateAccessTokenRequest';
import { InvalidateTokenRequest } from '../models/InvalidateTokenRequest';
import { Judge } from '../models/Judge';
import { JudgeAnalyticsAPI } from '../models/JudgeAnalyticsAPI';
import { JudgeAnalyticsAPI1 } from '../models/JudgeAnalyticsAPI1';
import { JudgeType } from '../models/JudgeType';
import { JudgeType1 } from '../models/JudgeType1';
import { JudgeTypeResponse } from '../models/JudgeTypeResponse';
import { Judges } from '../models/Judges';
import { JurisdictionGeo } from '../models/JurisdictionGeo';
import { JurisdictionGeo1 } from '../models/JurisdictionGeo1';
import { JurisdictionGeoResponse } from '../models/JurisdictionGeoResponse';
import { JurisdictionGeoResponse1 } from '../models/JurisdictionGeoResponse1';
import { LastTrackedDetails } from '../models/LastTrackedDetails';
import { LawFirmAnalyticsAPI } from '../models/LawFirmAnalyticsAPI';
import { LawFirmAnalyticsAPI1 } from '../models/LawFirmAnalyticsAPI1';
import { ListAllTokenIds200Response } from '../models/ListAllTokenIds200Response';
import { ListAllTokenIds200ResponseAccessTokenIdArrayInner } from '../models/ListAllTokenIds200ResponseAccessTokenIdArrayInner';
import { MatchedObject } from '../models/MatchedObject';
import { NatureOfSuit } from '../models/NatureOfSuit';
import { NormAttorney } from '../models/NormAttorney';
import { NormAttorney1 } from '../models/NormAttorney1';
import { NormAttorneySearchResponse } from '../models/NormAttorneySearchResponse';
import { NormAttorneySearchResult } from '../models/NormAttorneySearchResult';
import { NormCorporateGroup } from '../models/NormCorporateGroup';
import { NormCorporateGroup1 } from '../models/NormCorporateGroup1';
import { NormJudge } from '../models/NormJudge';
import { NormJudge1 } from '../models/NormJudge1';
import { NormJudgePublicData } from '../models/NormJudgePublicData';
import { NormJudgePublicData1 } from '../models/NormJudgePublicData1';
import { NormJudgePublicData1AbaRatings } from '../models/NormJudgePublicData1AbaRatings';
import { NormJudgePublicData1Bio } from '../models/NormJudgePublicData1Bio';
import { NormJudgePublicData1EducationArrayInner } from '../models/NormJudgePublicData1EducationArrayInner';
import { NormJudgePublicData1JudicialSource } from '../models/NormJudgePublicData1JudicialSource';
import { NormJudgePublicData1NameHistoryArrayInner } from '../models/NormJudgePublicData1NameHistoryArrayInner';
import { NormJudgeSearchResponse } from '../models/NormJudgeSearchResponse';
import { NormJudgeSearchResult } from '../models/NormJudgeSearchResult';
import { NormLawFirm } from '../models/NormLawFirm';
import { NormLawFirm1 } from '../models/NormLawFirm1';
import { NormLawFirmSearchResponse } from '../models/NormLawFirmSearchResponse';
import { NormLawFirmSearchResult } from '../models/NormLawFirmSearchResult';
import { NormOrganization } from '../models/NormOrganization';
import { NormOrganization1 } from '../models/NormOrganization1';
import { NormOrganization1TickerArrayInner } from '../models/NormOrganization1TickerArrayInner';
import { NormParty } from '../models/NormParty';
import { NormParty1 } from '../models/NormParty1';
import { NormPartySearchResponse } from '../models/NormPartySearchResponse';
import { NormPartySearchResult } from '../models/NormPartySearchResult';
import { OrderCaseDocument200Response } from '../models/OrderCaseDocument200Response';
import { OrderCaseDocumentRequest } from '../models/OrderCaseDocumentRequest';
import { OrderCaseDocumentRequestPacerOptions } from '../models/OrderCaseDocumentRequestPacerOptions';
import { PACERCaseSearchContent } from '../models/PACERCaseSearchContent';
import { PACERCaseSearchResults } from '../models/PACERCaseSearchResults';
import { PACERImportCase } from '../models/PACERImportCase';
import { PACERImportCaseResults } from '../models/PACERImportCaseResults';
import { PACERPartySearchContent } from '../models/PACERPartySearchContent';
import { PACERPartySearchResults } from '../models/PACERPartySearchResults';
import { PACERSearchPageInfo } from '../models/PACERSearchPageInfo';
import { PACERSearchReceipt } from '../models/PACERSearchReceipt';
import { PCLCase } from '../models/PCLCase';
import { PCLParty } from '../models/PCLParty';
import { PacerCredential } from '../models/PacerCredential';
import { PacerCredentialListResponse } from '../models/PacerCredentialListResponse';
import { PacerCredentialRequest } from '../models/PacerCredentialRequest';
import { Parties } from '../models/Parties';
import { Party } from '../models/Party';
import { PartyAnalyticsAPI } from '../models/PartyAnalyticsAPI';
import { PartyAnalyticsAPI1 } from '../models/PartyAnalyticsAPI1';
import { PartyAttorneyAssociation } from '../models/PartyAttorneyAssociation';
import { PartyAttorneyAssociations } from '../models/PartyAttorneyAssociations';
import { PartyRole } from '../models/PartyRole';
import { PartyRole1 } from '../models/PartyRole1';
import { PartyRoleGroup } from '../models/PartyRoleGroup';
import { PartyRoleGroup1 } from '../models/PartyRoleGroup1';
import { PartyRoleGroupResponse } from '../models/PartyRoleGroupResponse';
import { PartyRoleResponse } from '../models/PartyRoleResponse';
import { Phone } from '../models/Phone';
import { PossibleNormAttorney } from '../models/PossibleNormAttorney';
import { PossibleNormAttorney1 } from '../models/PossibleNormAttorney1';
import { PossibleNormAttorney1ScoreConstituents } from '../models/PossibleNormAttorney1ScoreConstituents';
import { PossibleNormJudge } from '../models/PossibleNormJudge';
import { PossibleNormJudge1 } from '../models/PossibleNormJudge1';
import { PossibleNormJudge1ScoreConstituents } from '../models/PossibleNormJudge1ScoreConstituents';
import { PossibleNormLawFirm } from '../models/PossibleNormLawFirm';
import { PossibleNormLawFirm1 } from '../models/PossibleNormLawFirm1';
import { PossibleNormLawFirm1ScoreConstituents } from '../models/PossibleNormLawFirm1ScoreConstituents';
import { PossibleNormLawFirm1SourceDetails } from '../models/PossibleNormLawFirm1SourceDetails';
import { PossibleNormParty } from '../models/PossibleNormParty';
import { PossibleNormParty1 } from '../models/PossibleNormParty1';
import { PossibleNormParty1ScoreConstituents } from '../models/PossibleNormParty1ScoreConstituents';
import { PreviewDocument } from '../models/PreviewDocument';
import { RawOrderedData } from '../models/RawOrderedData';
import { RawOrderedDataChild } from '../models/RawOrderedDataChild';
import { ReferencedDocketNumber } from '../models/ReferencedDocketNumber';
import { RelatedCase } from '../models/RelatedCase';
import { RelatedCases } from '../models/RelatedCases';
import { RelatedNormParty } from '../models/RelatedNormParty';
import { RelatedNormParty1 } from '../models/RelatedNormParty1';
import { SOSAssociatedNormOrganization } from '../models/SOSAssociatedNormOrganization';
import { SOSAssociatedNormOrganization1 } from '../models/SOSAssociatedNormOrganization1';
import { SOSData } from '../models/SOSData';
import { SOSData1 } from '../models/SOSData1';
import { SOSDataPreview } from '../models/SOSDataPreview';
import { SOSDataPreview1 } from '../models/SOSDataPreview1';
import { SOSNameChange } from '../models/SOSNameChange';
import { SOSNameChange1 } from '../models/SOSNameChange1';
import { Schedule } from '../models/Schedule';
import { Schedule1 } from '../models/Schedule1';
import { Schedule2 } from '../models/Schedule2';
import { SearchCases200Response } from '../models/SearchCases200Response';
import { SearchNormalizedAttorneys200Response } from '../models/SearchNormalizedAttorneys200Response';
import { SearchNormalizedAttorneys200ResponseNormAttorneySearchResultArrayInner } from '../models/SearchNormalizedAttorneys200ResponseNormAttorneySearchResultArrayInner';
import { SearchNormalizedJudges200Response } from '../models/SearchNormalizedJudges200Response';
import { SearchNormalizedJudges200ResponseNormJudgeSearchResultArrayInner } from '../models/SearchNormalizedJudges200ResponseNormJudgeSearchResultArrayInner';
import { SearchNormalizedLawFirms200Response } from '../models/SearchNormalizedLawFirms200Response';
import { SearchNormalizedLawFirms200ResponseNormLawFirmSearchResultArrayInner } from '../models/SearchNormalizedLawFirms200ResponseNormLawFirmSearchResultArrayInner';
import { SearchNormalizedParties200Response } from '../models/SearchNormalizedParties200Response';
import { SearchNormalizedParties200ResponseNormPartySearchResultArrayInner } from '../models/SearchNormalizedParties200ResponseNormPartySearchResultArrayInner';
import { ServiceHistory } from '../models/ServiceHistory';
import { ServiceHistory1 } from '../models/ServiceHistory1';
import { ServiceStatus } from '../models/ServiceStatus';
import { ServiceStatusDownDetails } from '../models/ServiceStatusDownDetails';
import { SimilarNormAttorney } from '../models/SimilarNormAttorney';
import { SimilarNormAttorney1 } from '../models/SimilarNormAttorney1';
import { SourceCaseData } from '../models/SourceCaseData';
import { SourceCauseOfAction } from '../models/SourceCauseOfAction';
import { SourceCharge } from '../models/SourceCharge';
import { SourceChargeAdditionalData } from '../models/SourceChargeAdditionalData';
import { SourcePageData } from '../models/SourcePageData';
import { SourceStructuredData } from '../models/SourceStructuredData';
import { Success } from '../models/Success';
import { Success1 } from '../models/Success1';
import { TrackCaseRequest } from '../models/TrackCaseRequest';
import { UpdateCase200Response } from '../models/UpdateCase200Response';
import { UpdateCaseRequest } from '../models/UpdateCaseRequest';
import { UpdateCaseRequestPacerOptions } from '../models/UpdateCaseRequestPacerOptions';
import { UpdateCaseRequestPacerOptionsAdditionalPageArrayInner } from '../models/UpdateCaseRequestPacerOptionsAdditionalPageArrayInner';

import { ObservableAttorneyAnalyticsAPIApi } from "./ObservableAPI";
import { AttorneyAnalyticsAPIApiRequestFactory, AttorneyAnalyticsAPIApiResponseProcessor} from "../apis/AttorneyAnalyticsAPIApi";

export interface AttorneyAnalyticsAPIApiGetNormAttorneyByIdRequest {
    /**
     * Norm ID of Attorney.    - minimum: 18   - maximum: 18 
     * @type string
     * @memberof AttorneyAnalyticsAPIApigetNormAttorneyById
     */
    normAttorneyId: string
}

export interface AttorneyAnalyticsAPIApiGetNormJudgesAssociatedWithNormAttorneyRequest {
    /**
     * Norm ID of Attorney.    - minimum: 18   - maximum: 18 
     * @type string
     * @memberof AttorneyAnalyticsAPIApigetNormJudgesAssociatedWithNormAttorney
     */
    normAttorneyId: string
    /**
     * The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above.
     * @type string
     * @memberof AttorneyAnalyticsAPIApigetNormJudgesAssociatedWithNormAttorney
     */
    q?: string
    /**
     * The page number of the desired page of results. - minimum: 1 
     * @type number
     * @memberof AttorneyAnalyticsAPIApigetNormJudgesAssociatedWithNormAttorney
     */
    pageNumber?: number
}

export interface AttorneyAnalyticsAPIApiGetNormLawFirmsAssociatedWithNormAttorneyRequest {
    /**
     * The normAttorneyId value of the desired attorney.    - minimum: 18   - maximum: 18 
     * @type string
     * @memberof AttorneyAnalyticsAPIApigetNormLawFirmsAssociatedWithNormAttorney
     */
    normAttorneyId: string
    /**
     * The keyword expression targeting the desired firms. Keyword expressions should be constructed according to the guidelines shown above.
     * @type string
     * @memberof AttorneyAnalyticsAPIApigetNormLawFirmsAssociatedWithNormAttorney
     */
    q?: string
    /**
     * The page number of the desired page of results. - minimum: 1 
     * @type number
     * @memberof AttorneyAnalyticsAPIApigetNormLawFirmsAssociatedWithNormAttorney
     */
    pageNumber?: number
}

export interface AttorneyAnalyticsAPIApiGetNormPartiesAssociatedWithNormAttorneyRequest {
    /**
     * The normAttorneyId value of the desired attorney.   - minimum: 18   - maximum: 18 
     * @type string
     * @memberof AttorneyAnalyticsAPIApigetNormPartiesAssociatedWithNormAttorney
     */
    normAttorneyId: string
    /**
     * The keyword expression targeting the desired parties. Keyword expressions should be constructed according to the guidelines shown above.
     * @type string
     * @memberof AttorneyAnalyticsAPIApigetNormPartiesAssociatedWithNormAttorney
     */
    q?: string
    /**
     * The page number of the desired page of results. - minimum: 1 
     * @type number
     * @memberof AttorneyAnalyticsAPIApigetNormPartiesAssociatedWithNormAttorney
     */
    pageNumber?: number
}

export interface AttorneyAnalyticsAPIApiSearchNormalizedAttorneysRequest {
    /**
     * The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters.&lt;/a&gt; 
     * @type string
     * @memberof AttorneyAnalyticsAPIApisearchNormalizedAttorneys
     */
    q?: string
    /**
     * The page number of the desired page of results. - Minimum: 1 - Maximum: 1000 
     * @type number
     * @memberof AttorneyAnalyticsAPIApisearchNormalizedAttorneys
     */
    pageNumber?: number
}

export interface AttorneyAnalyticsAPIApiSearchNormalizedAttorneysByIdRequest {
    /**
     * Norm Attorney Search information for the given normAttorneySearchId.
     * @type string
     * @memberof AttorneyAnalyticsAPIApisearchNormalizedAttorneysById
     */
    normAttorneySearchId: string
    /**
     * The page number of the desired page of results. - Minimum: 1 - Maximum: 1000 
     * @type number
     * @memberof AttorneyAnalyticsAPIApisearchNormalizedAttorneysById
     */
    pageNumber?: number
}

export class ObjectAttorneyAnalyticsAPIApi {
    private api: ObservableAttorneyAnalyticsAPIApi

    public constructor(configuration: Configuration, requestFactory?: AttorneyAnalyticsAPIApiRequestFactory, responseProcessor?: AttorneyAnalyticsAPIApiResponseProcessor) {
        this.api = new ObservableAttorneyAnalyticsAPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint retrieves information on the attorney in our normalized attorney database which matches the normAttorneyId specified in the request.
     * Norm Attorney Details.
     * @param param the request object
     */
    public getNormAttorneyByIdWithHttpInfo(param: AttorneyAnalyticsAPIApiGetNormAttorneyByIdRequest, options?: Configuration): Promise<HttpInfo<NormAttorney1>> {
        return this.api.getNormAttorneyByIdWithHttpInfo(param.normAttorneyId,  options).toPromise();
    }

    /**
     * This endpoint retrieves information on the attorney in our normalized attorney database which matches the normAttorneyId specified in the request.
     * Norm Attorney Details.
     * @param param the request object
     */
    public getNormAttorneyById(param: AttorneyAnalyticsAPIApiGetNormAttorneyByIdRequest, options?: Configuration): Promise<NormAttorney1> {
        return this.api.getNormAttorneyById(param.normAttorneyId,  options).toPromise();
    }

    /**
     * This endpoint returns information on all judges which have appeared in cases with the attorney specified by the normAttorneyId. The returned judges are ordered in descending order of number of cases shared with the relevant attorney. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\"  AND  courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTV4vCEaKrhystBz\", \"CORTKQiA4LJuv54tEj\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all judges associated with attorney with norm id NATYfwmXwRHS279WPY of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Judges faced by the Attorney.
     * @param param the request object
     */
    public getNormJudgesAssociatedWithNormAttorneyWithHttpInfo(param: AttorneyAnalyticsAPIApiGetNormJudgesAssociatedWithNormAttorneyRequest, options?: Configuration): Promise<HttpInfo<AssociatedNormJudgeResponse1>> {
        return this.api.getNormJudgesAssociatedWithNormAttorneyWithHttpInfo(param.normAttorneyId, param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * This endpoint returns information on all judges which have appeared in cases with the attorney specified by the normAttorneyId. The returned judges are ordered in descending order of number of cases shared with the relevant attorney. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\"  AND  courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTV4vCEaKrhystBz\", \"CORTKQiA4LJuv54tEj\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all judges associated with attorney with norm id NATYfwmXwRHS279WPY of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Judges faced by the Attorney.
     * @param param the request object
     */
    public getNormJudgesAssociatedWithNormAttorney(param: AttorneyAnalyticsAPIApiGetNormJudgesAssociatedWithNormAttorneyRequest, options?: Configuration): Promise<AssociatedNormJudgeResponse1> {
        return this.api.getNormJudgesAssociatedWithNormAttorney(param.normAttorneyId, param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve law firms with which the specified attorney is known to have been associated. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\"  AND  courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTV4vCEaKrhystBz\", \"CORTKQiA4LJuv54tEj\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed  |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed  |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple Ids Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all LawFirms associated with attorney with norm id NATYfwmXwRHS279WPY of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Law Firms the attorney has worked for.
     * @param param the request object
     */
    public getNormLawFirmsAssociatedWithNormAttorneyWithHttpInfo(param: AttorneyAnalyticsAPIApiGetNormLawFirmsAssociatedWithNormAttorneyRequest, options?: Configuration): Promise<HttpInfo<AssociatedNormLawFirmResponse1>> {
        return this.api.getNormLawFirmsAssociatedWithNormAttorneyWithHttpInfo(param.normAttorneyId, param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve law firms with which the specified attorney is known to have been associated. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\"  AND  courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTV4vCEaKrhystBz\", \"CORTKQiA4LJuv54tEj\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed  |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed  |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple Ids Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all LawFirms associated with attorney with norm id NATYfwmXwRHS279WPY of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Law Firms the attorney has worked for.
     * @param param the request object
     */
    public getNormLawFirmsAssociatedWithNormAttorney(param: AttorneyAnalyticsAPIApiGetNormLawFirmsAssociatedWithNormAttorneyRequest, options?: Configuration): Promise<AssociatedNormLawFirmResponse1> {
        return this.api.getNormLawFirmsAssociatedWithNormAttorney(param.normAttorneyId, param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve the parties for which an attorney is known to have represented. <br><br> ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\"  AND  courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTV4vCEaKrhystBz\", \"CORTKQiA4LJuv54tEj\")**| | **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed  |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed  |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Attorney Party Type Group Object.. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **caseFiledDate** | Single Allowed   |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple Ids Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all parties associated with attorney with norm id NATYfwmXwRHS279WPY of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Parties Represented By the Attorney.
     * @param param the request object
     */
    public getNormPartiesAssociatedWithNormAttorneyWithHttpInfo(param: AttorneyAnalyticsAPIApiGetNormPartiesAssociatedWithNormAttorneyRequest, options?: Configuration): Promise<HttpInfo<AssociatedNormPartyResponse1>> {
        return this.api.getNormPartiesAssociatedWithNormAttorneyWithHttpInfo(param.normAttorneyId, param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve the parties for which an attorney is known to have represented. <br><br> ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\"  AND  courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTV4vCEaKrhystBz\", \"CORTKQiA4LJuv54tEj\")**| | **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed  |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed  |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Attorney Party Type Group Object.. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **caseFiledDate** | Single Allowed   |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple Ids Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all parties associated with attorney with norm id NATYfwmXwRHS279WPY of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Parties Represented By the Attorney.
     * @param param the request object
     */
    public getNormPartiesAssociatedWithNormAttorney(param: AttorneyAnalyticsAPIApiGetNormPartiesAssociatedWithNormAttorneyRequest, options?: Configuration): Promise<AssociatedNormPartyResponse1> {
        return this.api.getNormPartiesAssociatedWithNormAttorney(param.normAttorneyId, param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * ### This endpoint retrieves information, including the normAttorneyId, on all attorneys in our normalized attorney database which match the request parameters. All query parameters supported by this API can be found in the schema section below. 
     * Attorney search.
     * @param param the request object
     */
    public searchNormalizedAttorneysWithHttpInfo(param: AttorneyAnalyticsAPIApiSearchNormalizedAttorneysRequest = {}, options?: Configuration): Promise<HttpInfo<SearchNormalizedAttorneys200Response>> {
        return this.api.searchNormalizedAttorneysWithHttpInfo(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * ### This endpoint retrieves information, including the normAttorneyId, on all attorneys in our normalized attorney database which match the request parameters. All query parameters supported by this API can be found in the schema section below. 
     * Attorney search.
     * @param param the request object
     */
    public searchNormalizedAttorneys(param: AttorneyAnalyticsAPIApiSearchNormalizedAttorneysRequest = {}, options?: Configuration): Promise<SearchNormalizedAttorneys200Response> {
        return this.api.searchNormalizedAttorneys(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * ### All query parameters supported for this API can be found in below schema section. Schema --> NormAttorneySearchQueryObject 
     * Norm attorney search results for a given normAttorneySearchId.
     * @param param the request object
     */
    public searchNormalizedAttorneysByIdWithHttpInfo(param: AttorneyAnalyticsAPIApiSearchNormalizedAttorneysByIdRequest, options?: Configuration): Promise<HttpInfo<SearchNormalizedAttorneys200Response>> {
        return this.api.searchNormalizedAttorneysByIdWithHttpInfo(param.normAttorneySearchId, param.pageNumber,  options).toPromise();
    }

    /**
     * ### All query parameters supported for this API can be found in below schema section. Schema --> NormAttorneySearchQueryObject 
     * Norm attorney search results for a given normAttorneySearchId.
     * @param param the request object
     */
    public searchNormalizedAttorneysById(param: AttorneyAnalyticsAPIApiSearchNormalizedAttorneysByIdRequest, options?: Configuration): Promise<SearchNormalizedAttorneys200Response> {
        return this.api.searchNormalizedAttorneysById(param.normAttorneySearchId, param.pageNumber,  options).toPromise();
    }

}

import { ObservableAuthenticationAPIApi } from "./ObservableAPI";
import { AuthenticationAPIApiRequestFactory, AuthenticationAPIApiResponseProcessor} from "../apis/AuthenticationAPIApi";

export interface AuthenticationAPIApiGenerateNewTokenRequest {
    /**
     * The endpoint accepts your Client ID and Client Secret ID as part of the request.
     * @type GenerateNewTokenRequest
     * @memberof AuthenticationAPIApigenerateNewToken
     */
    generateNewTokenRequest?: GenerateNewTokenRequest
}

export interface AuthenticationAPIApiInvalidateAllTokensRequest {
    /**
     * The endpoint accepts your Client ID and Secret Client ID as part of the request.
     * @type GenerateNewTokenRequest
     * @memberof AuthenticationAPIApiinvalidateAllTokens
     */
    generateNewTokenRequest?: GenerateNewTokenRequest
}

export interface AuthenticationAPIApiInvalidateTokenRequest {
    /**
     * The endpoint accepts your Client ID, Client Secret ID and the Token ID for the access token you wish to invalidate as part of the request. You can obtain a list of all Token IDs from the /listAllTokenIds endpoint within this API.
     * @type InvalidateTokenRequest
     * @memberof AuthenticationAPIApiinvalidateToken
     */
    invalidateTokenRequest?: InvalidateTokenRequest
}

export interface AuthenticationAPIApiListAllTokenIdsRequest {
    /**
     * The endpoint accepts your Client ID and Client Secret ID as part of the request.
     * @type GenerateNewTokenRequest
     * @memberof AuthenticationAPIApilistAllTokenIds
     */
    generateNewTokenRequest?: GenerateNewTokenRequest
}

export class ObjectAuthenticationAPIApi {
    private api: ObservableAuthenticationAPIApi

    public constructor(configuration: Configuration, requestFactory?: AuthenticationAPIApiRequestFactory, responseProcessor?: AuthenticationAPIApiResponseProcessor) {
        this.api = new ObservableAuthenticationAPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint allows you to generate a new access token, which is a required field for all UniCourt API endpoints except for the Authentication API. To generate a new token, you must provide your Client ID and Client Secret ID which you can find by logging into your UniCourt account. At any time, you can have a maximum of 10 active access tokens. The tokens never expire and, if you make a request which would otherwise lead to you having more than 10 active tokens, you will receive an error message.
     * Generate new token to access API.
     * @param param the request object
     */
    public generateNewTokenWithHttpInfo(param: AuthenticationAPIApiGenerateNewTokenRequest = {}, options?: Configuration): Promise<HttpInfo<GenerateNewToken200Response>> {
        return this.api.generateNewTokenWithHttpInfo(param.generateNewTokenRequest,  options).toPromise();
    }

    /**
     * This endpoint allows you to generate a new access token, which is a required field for all UniCourt API endpoints except for the Authentication API. To generate a new token, you must provide your Client ID and Client Secret ID which you can find by logging into your UniCourt account. At any time, you can have a maximum of 10 active access tokens. The tokens never expire and, if you make a request which would otherwise lead to you having more than 10 active tokens, you will receive an error message.
     * Generate new token to access API.
     * @param param the request object
     */
    public generateNewToken(param: AuthenticationAPIApiGenerateNewTokenRequest = {}, options?: Configuration): Promise<GenerateNewToken200Response> {
        return this.api.generateNewToken(param.generateNewTokenRequest,  options).toPromise();
    }

    /**
     * An endpoint which allows you to invalidate all existing access tokens associated with your UniCourt account.
     * API to invalidate all access tokens.
     * @param param the request object
     */
    public invalidateAllTokensWithHttpInfo(param: AuthenticationAPIApiInvalidateAllTokensRequest = {}, options?: Configuration): Promise<HttpInfo<Success1>> {
        return this.api.invalidateAllTokensWithHttpInfo(param.generateNewTokenRequest,  options).toPromise();
    }

    /**
     * An endpoint which allows you to invalidate all existing access tokens associated with your UniCourt account.
     * API to invalidate all access tokens.
     * @param param the request object
     */
    public invalidateAllTokens(param: AuthenticationAPIApiInvalidateAllTokensRequest = {}, options?: Configuration): Promise<Success1> {
        return this.api.invalidateAllTokens(param.generateNewTokenRequest,  options).toPromise();
    }

    /**
     * An endpoint which allows you to invalidate a given access token.
     * API to invalidate the access token.
     * @param param the request object
     */
    public invalidateTokenWithHttpInfo(param: AuthenticationAPIApiInvalidateTokenRequest = {}, options?: Configuration): Promise<HttpInfo<Success1>> {
        return this.api.invalidateTokenWithHttpInfo(param.invalidateTokenRequest,  options).toPromise();
    }

    /**
     * An endpoint which allows you to invalidate a given access token.
     * API to invalidate the access token.
     * @param param the request object
     */
    public invalidateToken(param: AuthenticationAPIApiInvalidateTokenRequest = {}, options?: Configuration): Promise<Success1> {
        return this.api.invalidateToken(param.invalidateTokenRequest,  options).toPromise();
    }

    /**
     * An endpoint which allows you to view all active access tokens associated with your Client ID and Client Secret ID.
     * API to list all the access tokens Id.
     * @param param the request object
     */
    public listAllTokenIdsWithHttpInfo(param: AuthenticationAPIApiListAllTokenIdsRequest = {}, options?: Configuration): Promise<HttpInfo<ListAllTokenIds200Response>> {
        return this.api.listAllTokenIdsWithHttpInfo(param.generateNewTokenRequest,  options).toPromise();
    }

    /**
     * An endpoint which allows you to view all active access tokens associated with your Client ID and Client Secret ID.
     * API to list all the access tokens Id.
     * @param param the request object
     */
    public listAllTokenIds(param: AuthenticationAPIApiListAllTokenIdsRequest = {}, options?: Configuration): Promise<ListAllTokenIds200Response> {
        return this.api.listAllTokenIds(param.generateNewTokenRequest,  options).toPromise();
    }

}

import { ObservableCallbackAPIApi } from "./ObservableAPI";
import { CallbackAPIApiRequestFactory, CallbackAPIApiResponseProcessor} from "../apis/CallbackAPIApi";

export interface CallbackAPIApiGetCallbacksRequest {
    /**
     * Date for which fetch the callback type list. By default, the date will be set to current date.
     * @type Date
     * @memberof CallbackAPIApigetCallbacks
     */
    date?: Date
    /**
     * Status of the callbacks. Default status will fetch all callbacks.
     * @type &#39;IN_PROGRESS&#39; | &#39;COMPLETE&#39; | &#39;FAILURE&#39;
     * @memberof CallbackAPIApigetCallbacks
     */
    status?: 'IN_PROGRESS' | 'COMPLETE' | 'FAILURE'
}

export class ObjectCallbackAPIApi {
    private api: ObservableCallbackAPIApi

    public constructor(configuration: Configuration, requestFactory?: CallbackAPIApiRequestFactory, responseProcessor?: CallbackAPIApiResponseProcessor) {
        this.api = new ObservableCallbackAPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get list of callback types with count for a requested Date.
     * Get list of callback types with count for a requested Date.
     * @param param the request object
     */
    public getCallbacksWithHttpInfo(param: CallbackAPIApiGetCallbacksRequest = {}, options?: Configuration): Promise<HttpInfo<GetCallbacks200Response>> {
        return this.api.getCallbacksWithHttpInfo(param.date, param.status,  options).toPromise();
    }

    /**
     * Get list of callback types with count for a requested Date.
     * Get list of callback types with count for a requested Date.
     * @param param the request object
     */
    public getCallbacks(param: CallbackAPIApiGetCallbacksRequest = {}, options?: Configuration): Promise<GetCallbacks200Response> {
        return this.api.getCallbacks(param.date, param.status,  options).toPromise();
    }

}

import { ObservableCaseAnalyticsAPIApi } from "./ObservableAPI";
import { CaseAnalyticsAPIApiRequestFactory, CaseAnalyticsAPIApiResponseProcessor} from "../apis/CaseAnalyticsAPIApi";

export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByAreaOfLawRequest {
    /**
     * The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @type string
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByAreaOfLaw
     */
    q?: string
    /**
     * The page number of the desired page of results. - minimum: 1 
     * @type number
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByAreaOfLaw
     */
    pageNumber?: number
}

export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByCaseClassRequest {
    /**
     * The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @type string
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByCaseClass
     */
    q?: string
    /**
     * The page number of the desired page of results. - minimum: 1 
     * @type number
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByCaseClass
     */
    pageNumber?: number
}

export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByCaseFiledDateRequest {
    /**
     * GroupBy
     * @type &#39;Yearly&#39; | &#39;Quarterly&#39; | &#39;Monthly&#39; | &#39;Weekly&#39;
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByCaseFiledDate
     */
    groupBy: 'Yearly' | 'Quarterly' | 'Monthly' | 'Weekly'
    /**
     * The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @type string
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByCaseFiledDate
     */
    q?: string
    /**
     * The page number of the desired page of results. - minimum: 1 
     * @type number
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByCaseFiledDate
     */
    pageNumber?: number
}

export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByCaseTypeRequest {
    /**
     * The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @type string
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByCaseType
     */
    q?: string
    /**
     * The page number of the desired page of results. - minimum: 1 
     * @type number
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByCaseType
     */
    pageNumber?: number
}

export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByCaseTypeGroupRequest {
    /**
     * The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @type string
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByCaseTypeGroup
     */
    q?: string
    /**
     * The page number of the desired page of results. - minimum: 1 
     * @type number
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByCaseTypeGroup
     */
    pageNumber?: number
}

export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByCourtRequest {
    /**
     * The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @type string
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByCourt
     */
    q?: string
    /**
     * The page number of the desired page of results. - minimum: 1 
     * @type number
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByCourt
     */
    pageNumber?: number
}

export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByCourtLocationRequest {
    /**
     * The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @type string
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByCourtLocation
     */
    q?: string
    /**
     * The page number of the desired page of results. - minimum: 1 
     * @type number
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByCourtLocation
     */
    pageNumber?: number
}

export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByCourtSystemRequest {
    /**
     * The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @type string
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByCourtSystem
     */
    q?: string
    /**
     * The page number of the desired page of results. - minimum: 1 
     * @type number
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByCourtSystem
     */
    pageNumber?: number
}

export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByCourtTypeRequest {
    /**
     * The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @type string
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByCourtType
     */
    q?: string
    /**
     * The page number of the desired page of results. - minimum: 1 
     * @type number
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByCourtType
     */
    pageNumber?: number
}

export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByJurisdictionGeoRequest {
    /**
     * The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @type string
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByJurisdictionGeo
     */
    q?: string
    /**
     * The page number of the desired page of results. - minimum: 1 
     * @type number
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByJurisdictionGeo
     */
    pageNumber?: number
}

export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByNormAttorneyRequest {
    /**
     * The keyword expression targeting the desired attorneys.
     * @type string
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByNormAttorney
     */
    q?: string
    /**
     * The page number of the desired page of results. - minimum: 1 
     * @type number
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByNormAttorney
     */
    pageNumber?: number
}

export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByNormJudgeRequest {
    /**
     * The keyword expression targeting the desired judges. Keywords should be constructed according to the guidelines given above.
     * @type string
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByNormJudge
     */
    q?: string
    /**
     * The page number of the desired page of results. - minimum: 1 
     * @type number
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByNormJudge
     */
    pageNumber?: number
}

export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByNormLawFirmRequest {
    /**
     * The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above.
     * @type string
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByNormLawFirm
     */
    q?: string
    /**
     * The page number of the desired page of results. - minimum: 1 
     * @type number
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByNormLawFirm
     */
    pageNumber?: number
}

export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByNormPartyRequest {
    /**
     * The keyword expression targeting the desired parties. Keywords should be constructed according to the guidelines given above.
     * @type string
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByNormParty
     */
    q?: string
    /**
     * The page number of the desired page of results. - minimum: 1 
     * @type number
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByNormParty
     */
    pageNumber?: number
}

export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByOpposingNormAttorneyForANormAttorneyRequest {
    /**
     * The normAttorneyId value of the attorney for whom opposing-counsel attorneys are to be retrieved.    - minimum: 18   - maximum: 18 
     * @type string
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByOpposingNormAttorneyForANormAttorney
     */
    normAttorneyId: string
    /**
     * The keyword expression targeting the desired opposing counsel attorneys.
     * @type string
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByOpposingNormAttorneyForANormAttorney
     */
    q?: string
    /**
     * The page number of the desired page of results. - minimum: 1 
     * @type number
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByOpposingNormAttorneyForANormAttorney
     */
    pageNumber?: number
}

export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByOpposingNormLawFirmForANormLawFirmRequest {
    /**
     * The normLawFirmId value of the law firm for which opposing firms are to be retrieved.   - minimum: 18   - maximum: 18 
     * @type string
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByOpposingNormLawFirmForANormLawFirm
     */
    normLawFirmId: string
    /**
     * The keyword expression targeting the desired opposing counsel firms.
     * @type string
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByOpposingNormLawFirmForANormLawFirm
     */
    q?: string
    /**
     * The page number of the desired page of results. - minimum: 1 
     * @type number
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByOpposingNormLawFirmForANormLawFirm
     */
    pageNumber?: number
}

export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByOpposingNormPartyForANormPartyRequest {
    /**
     * The normPartyId value of the party for which opposing parties are to be retrieved.   - minimum: 18   - maximum: 18 
     * @type string
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByOpposingNormPartyForANormParty
     */
    normPartyId: string
    /**
     * The keyword expression targeting the opposing parties that should be retrieved. Keywords should be constructed according to the guidelines given above.
     * @type string
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByOpposingNormPartyForANormParty
     */
    q?: string
    /**
     * The page number of the desired page of results. - minimum: 1 
     * @type number
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByOpposingNormPartyForANormParty
     */
    pageNumber?: number
}

export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByPartyRoleRequest {
    /**
     * The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @type string
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByPartyRole
     */
    q?: string
    /**
     * The page number of the desired page of results. - minimum: 1 
     * @type number
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByPartyRole
     */
    pageNumber?: number
}

export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByPartyRoleGroupRequest {
    /**
     * The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @type string
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByPartyRoleGroup
     */
    q?: string
    /**
     * The page number of the desired page of results. - minimum: 1 
     * @type number
     * @memberof CaseAnalyticsAPIApigetCaseCountAnalyticsByPartyRoleGroup
     */
    pageNumber?: number
}

export class ObjectCaseAnalyticsAPIApi {
    private api: ObservableCaseAnalyticsAPIApi

    public constructor(configuration: Configuration, requestFactory?: CaseAnalyticsAPIApiRequestFactory, responseProcessor?: CaseAnalyticsAPIApiResponseProcessor) {
        this.api = new ObservableCaseAnalyticsAPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve case counts by area of law. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by Area Of Law of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Area Of Law.
     * @param param the request object
     */
    public getCaseCountAnalyticsByAreaOfLawWithHttpInfo(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByAreaOfLawRequest = {}, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByAreaOfLawResponse1>> {
        return this.api.getCaseCountAnalyticsByAreaOfLawWithHttpInfo(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case counts by area of law. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by Area Of Law of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Area Of Law.
     * @param param the request object
     */
    public getCaseCountAnalyticsByAreaOfLaw(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByAreaOfLawRequest = {}, options?: Configuration): Promise<CaseCountAnalyticsByAreaOfLawResponse1> {
        return this.api.getCaseCountAnalyticsByAreaOfLaw(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case counts by case class. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed   |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by Case Class  of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Case Class.
     * @param param the request object
     */
    public getCaseCountAnalyticsByCaseClassWithHttpInfo(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByCaseClassRequest = {}, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByCaseClassResponse1>> {
        return this.api.getCaseCountAnalyticsByCaseClassWithHttpInfo(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case counts by case class. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed   |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by Case Class  of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Case Class.
     * @param param the request object
     */
    public getCaseCountAnalyticsByCaseClass(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByCaseClassRequest = {}, options?: Configuration): Promise<CaseCountAnalyticsByCaseClassResponse1> {
        return this.api.getCaseCountAnalyticsByCaseClass(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case count analytics by filing date. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by case filed date of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Case Filed Date.
     * @param param the request object
     */
    public getCaseCountAnalyticsByCaseFiledDateWithHttpInfo(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByCaseFiledDateRequest, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByCaseFiledDateResponse1>> {
        return this.api.getCaseCountAnalyticsByCaseFiledDateWithHttpInfo(param.groupBy, param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case count analytics by filing date. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by case filed date of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Case Filed Date.
     * @param param the request object
     */
    public getCaseCountAnalyticsByCaseFiledDate(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByCaseFiledDateRequest, options?: Configuration): Promise<CaseCountAnalyticsByCaseFiledDateResponse1> {
        return this.api.getCaseCountAnalyticsByCaseFiledDate(param.groupBy, param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case counts by case type. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by case types  of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Case Type.
     * @param param the request object
     */
    public getCaseCountAnalyticsByCaseTypeWithHttpInfo(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByCaseTypeRequest = {}, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByCaseTypeResponse1>> {
        return this.api.getCaseCountAnalyticsByCaseTypeWithHttpInfo(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case counts by case type. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by case types  of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Case Type.
     * @param param the request object
     */
    public getCaseCountAnalyticsByCaseType(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByCaseTypeRequest = {}, options?: Configuration): Promise<CaseCountAnalyticsByCaseTypeResponse1> {
        return this.api.getCaseCountAnalyticsByCaseType(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case counts by case type group. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed  |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed   |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by case type catgeory of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Case Type Group.
     * @param param the request object
     */
    public getCaseCountAnalyticsByCaseTypeGroupWithHttpInfo(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByCaseTypeGroupRequest = {}, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByCaseTypeGroupResponse1>> {
        return this.api.getCaseCountAnalyticsByCaseTypeGroupWithHttpInfo(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case counts by case type group. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed  |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed   |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by case type catgeory of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Case Type Group.
     * @param param the request object
     */
    public getCaseCountAnalyticsByCaseTypeGroup(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByCaseTypeGroupRequest = {}, options?: Configuration): Promise<CaseCountAnalyticsByCaseTypeGroupResponse1> {
        return this.api.getCaseCountAnalyticsByCaseTypeGroup(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case counts by court. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by Court of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Court.
     * @param param the request object
     */
    public getCaseCountAnalyticsByCourtWithHttpInfo(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByCourtRequest = {}, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByCourtResponse1>> {
        return this.api.getCaseCountAnalyticsByCourtWithHttpInfo(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case counts by court. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by Court of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Court.
     * @param param the request object
     */
    public getCaseCountAnalyticsByCourt(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByCourtRequest = {}, options?: Configuration): Promise<CaseCountAnalyticsByCourtResponse1> {
        return this.api.getCaseCountAnalyticsByCourt(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case counts by court location. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by court location  of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Court Location.
     * @param param the request object
     */
    public getCaseCountAnalyticsByCourtLocationWithHttpInfo(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByCourtLocationRequest = {}, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByCourtLocationResponse1>> {
        return this.api.getCaseCountAnalyticsByCourtLocationWithHttpInfo(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case counts by court location. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by court location  of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Court Location.
     * @param param the request object
     */
    public getCaseCountAnalyticsByCourtLocation(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByCourtLocationRequest = {}, options?: Configuration): Promise<CaseCountAnalyticsByCourtLocationResponse1> {
        return this.api.getCaseCountAnalyticsByCourtLocation(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case counts by court system. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by court system of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Court System.
     * @param param the request object
     */
    public getCaseCountAnalyticsByCourtSystemWithHttpInfo(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByCourtSystemRequest = {}, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByCourtSystemResponse1>> {
        return this.api.getCaseCountAnalyticsByCourtSystemWithHttpInfo(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case counts by court system. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by court system of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Court System.
     * @param param the request object
     */
    public getCaseCountAnalyticsByCourtSystem(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByCourtSystemRequest = {}, options?: Configuration): Promise<CaseCountAnalyticsByCourtSystemResponse1> {
        return this.api.getCaseCountAnalyticsByCourtSystem(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case counts by court type. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed   |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by court type  of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by CourtType.
     * @param param the request object
     */
    public getCaseCountAnalyticsByCourtTypeWithHttpInfo(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByCourtTypeRequest = {}, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByCourtTypeResponse1>> {
        return this.api.getCaseCountAnalyticsByCourtTypeWithHttpInfo(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case counts by court type. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed   |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by court type  of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by CourtType.
     * @param param the request object
     */
    public getCaseCountAnalyticsByCourtType(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByCourtTypeRequest = {}, options?: Configuration): Promise<CaseCountAnalyticsByCourtTypeResponse1> {
        return this.api.getCaseCountAnalyticsByCourtType(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case counts by jurisdiction geography. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by jurisdiction geo of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Jurisdiction Geo.
     * @param param the request object
     */
    public getCaseCountAnalyticsByJurisdictionGeoWithHttpInfo(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByJurisdictionGeoRequest = {}, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByJurisdictionGeoResponse1>> {
        return this.api.getCaseCountAnalyticsByJurisdictionGeoWithHttpInfo(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case counts by jurisdiction geography. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by jurisdiction geo of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Jurisdiction Geo.
     * @param param the request object
     */
    public getCaseCountAnalyticsByJurisdictionGeo(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByJurisdictionGeoRequest = {}, options?: Configuration): Promise<CaseCountAnalyticsByJurisdictionGeoResponse1> {
        return this.api.getCaseCountAnalyticsByJurisdictionGeo(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case counts for the specified attorneys. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed  |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by norm attorney of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Attorney.
     * @param param the request object
     */
    public getCaseCountAnalyticsByNormAttorneyWithHttpInfo(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByNormAttorneyRequest = {}, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByNormAttorneyResponse1>> {
        return this.api.getCaseCountAnalyticsByNormAttorneyWithHttpInfo(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case counts for the specified attorneys. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed  |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by norm attorney of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Attorney.
     * @param param the request object
     */
    public getCaseCountAnalyticsByNormAttorney(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByNormAttorneyRequest = {}, options?: Configuration): Promise<CaseCountAnalyticsByNormAttorneyResponse1> {
        return this.api.getCaseCountAnalyticsByNormAttorney(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case counts for judges. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **normAttorneyId** | Multiple Ids Allowed |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed  |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by norm judge of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Judge.
     * @param param the request object
     */
    public getCaseCountAnalyticsByNormJudgeWithHttpInfo(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByNormJudgeRequest = {}, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByNormJudgeResponse1>> {
        return this.api.getCaseCountAnalyticsByNormJudgeWithHttpInfo(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case counts for judges. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **normAttorneyId** | Multiple Ids Allowed |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed  |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by norm judge of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Judge.
     * @param param the request object
     */
    public getCaseCountAnalyticsByNormJudge(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByNormJudgeRequest = {}, options?: Configuration): Promise<CaseCountAnalyticsByNormJudgeResponse1> {
        return this.api.getCaseCountAnalyticsByNormJudge(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Returns Case Analytics by Norm Law Firm. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by norm lawfirm  of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Norm Law Firm.
     * @param param the request object
     */
    public getCaseCountAnalyticsByNormLawFirmWithHttpInfo(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByNormLawFirmRequest = {}, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByNormLawFirmResponse1>> {
        return this.api.getCaseCountAnalyticsByNormLawFirmWithHttpInfo(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Returns Case Analytics by Norm Law Firm. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by norm lawfirm  of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Norm Law Firm.
     * @param param the request object
     */
    public getCaseCountAnalyticsByNormLawFirm(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByNormLawFirmRequest = {}, options?: Configuration): Promise<CaseCountAnalyticsByNormLawFirmResponse1> {
        return this.api.getCaseCountAnalyticsByNormLawFirm(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case counts for parties. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by norm party of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Party.
     * @param param the request object
     */
    public getCaseCountAnalyticsByNormPartyWithHttpInfo(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByNormPartyRequest = {}, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByNormPartyResponse1>> {
        return this.api.getCaseCountAnalyticsByNormPartyWithHttpInfo(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case counts for parties. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by norm party of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Party.
     * @param param the request object
     */
    public getCaseCountAnalyticsByNormParty(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByNormPartyRequest = {}, options?: Configuration): Promise<CaseCountAnalyticsByNormPartyResponse1> {
        return this.api.getCaseCountAnalyticsByNormParty(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case counts for attorneys who have appeared as opposing counsel to the specified attorney. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normPartyId** | Single Allowed  |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Single Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGYevnGAWWENhEQ9\"** | | **normJudgeId** | Single Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDpTTZt6KQaRP7Qr\"** | | **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by norm attorney with norm id NATYY29p78c7UoyJJ of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2013 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2013-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Opposing Norm Attorney.
     * @param param the request object
     */
    public getCaseCountAnalyticsByOpposingNormAttorneyForANormAttorneyWithHttpInfo(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByOpposingNormAttorneyForANormAttorneyRequest, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByNormAttorneyResponse1>> {
        return this.api.getCaseCountAnalyticsByOpposingNormAttorneyForANormAttorneyWithHttpInfo(param.normAttorneyId, param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case counts for attorneys who have appeared as opposing counsel to the specified attorney. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normPartyId** | Single Allowed  |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Single Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGYevnGAWWENhEQ9\"** | | **normJudgeId** | Single Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDpTTZt6KQaRP7Qr\"** | | **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by norm attorney with norm id NATYY29p78c7UoyJJ of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2013 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2013-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Opposing Norm Attorney.
     * @param param the request object
     */
    public getCaseCountAnalyticsByOpposingNormAttorneyForANormAttorney(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByOpposingNormAttorneyForANormAttorneyRequest, options?: Configuration): Promise<CaseCountAnalyticsByNormAttorneyResponse1> {
        return this.api.getCaseCountAnalyticsByOpposingNormAttorneyForANormAttorney(param.normAttorneyId, param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case counts for law firms that have appeared as opposing counsel against the specified law firm. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Single Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYp7kmEQtt8jQ3eQ\"** | | **normPartyId** | Single Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Single Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by norm lawfirm with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Opposing Norm Law Firm.
     * @param param the request object
     */
    public getCaseCountAnalyticsByOpposingNormLawFirmForANormLawFirmWithHttpInfo(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByOpposingNormLawFirmForANormLawFirmRequest, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByNormLawFirmResponse1>> {
        return this.api.getCaseCountAnalyticsByOpposingNormLawFirmForANormLawFirmWithHttpInfo(param.normLawFirmId, param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case counts for law firms that have appeared as opposing counsel against the specified law firm. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Single Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYp7kmEQtt8jQ3eQ\"** | | **normPartyId** | Single Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Single Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by norm lawfirm with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Opposing Norm Law Firm.
     * @param param the request object
     */
    public getCaseCountAnalyticsByOpposingNormLawFirmForANormLawFirm(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByOpposingNormLawFirmForANormLawFirmRequest, options?: Configuration): Promise<CaseCountAnalyticsByNormLawFirmResponse1> {
        return this.api.getCaseCountAnalyticsByOpposingNormLawFirmForANormLawFirm(param.normLawFirmId, param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case counts for parties that have opposed the specified party. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Single Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normLawFirmId** | Single Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Single Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by norm party with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2013 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2013-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Opposing Norm Party.
     * @param param the request object
     */
    public getCaseCountAnalyticsByOpposingNormPartyForANormPartyWithHttpInfo(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByOpposingNormPartyForANormPartyRequest, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByNormPartyResponse1>> {
        return this.api.getCaseCountAnalyticsByOpposingNormPartyForANormPartyWithHttpInfo(param.normPartyId, param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case counts for parties that have opposed the specified party. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Single Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normLawFirmId** | Single Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Single Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by norm party with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2013 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2013-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Opposing Norm Party.
     * @param param the request object
     */
    public getCaseCountAnalyticsByOpposingNormPartyForANormParty(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByOpposingNormPartyForANormPartyRequest, options?: Configuration): Promise<CaseCountAnalyticsByNormPartyResponse1> {
        return this.api.getCaseCountAnalyticsByOpposingNormPartyForANormParty(param.normPartyId, param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case counts by party type. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normPartyId** | Multiple Ids Allowed  |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by party role of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Party Role.
     * @param param the request object
     */
    public getCaseCountAnalyticsByPartyRoleWithHttpInfo(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByPartyRoleRequest = {}, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByPartyRoleResponse1>> {
        return this.api.getCaseCountAnalyticsByPartyRoleWithHttpInfo(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case counts by party type. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normPartyId** | Multiple Ids Allowed  |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by party role of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Party Role.
     * @param param the request object
     */
    public getCaseCountAnalyticsByPartyRole(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByPartyRoleRequest = {}, options?: Configuration): Promise<CaseCountAnalyticsByPartyRoleResponse1> {
        return this.api.getCaseCountAnalyticsByPartyRole(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case counts by party type group. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normPartyId** | Multiple Ids Allowed  |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by Party Role Group of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Party Role Group.
     * @param param the request object
     */
    public getCaseCountAnalyticsByPartyRoleGroupWithHttpInfo(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByPartyRoleGroupRequest = {}, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByPartyRoleGroupResponse1>> {
        return this.api.getCaseCountAnalyticsByPartyRoleGroupWithHttpInfo(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case counts by party type group. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normPartyId** | Multiple Ids Allowed  |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by Party Role Group of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Party Role Group.
     * @param param the request object
     */
    public getCaseCountAnalyticsByPartyRoleGroup(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByPartyRoleGroupRequest = {}, options?: Configuration): Promise<CaseCountAnalyticsByPartyRoleGroupResponse1> {
        return this.api.getCaseCountAnalyticsByPartyRoleGroup(param.q, param.pageNumber,  options).toPromise();
    }

}

import { ObservableCaseDocketAPIApi } from "./ObservableAPI";
import { CaseDocketAPIApiRequestFactory, CaseDocketAPIApiResponseProcessor} from "../apis/CaseDocketAPIApi";

export interface CaseDocketAPIApiGetAttorneyAssociatedPartiesRequest {
    /**
     * Retrieve the parties represented by the attorney with the specified attorneyId value.
     * @type string
     * @memberof CaseDocketAPIApigetAttorneyAssociatedParties
     */
    attorneyId: string
    /**
     * Query parameter specifying the page number of the search results to be retrieved.
     * @type number
     * @memberof CaseDocketAPIApigetAttorneyAssociatedParties
     */
    pageNumber?: number
}

export interface CaseDocketAPIApiGetAttorneyByIdRequest {
    /**
     * Retrieve the attorney with the specified attorneyId value.
     * @type string
     * @memberof CaseDocketAPIApigetAttorneyById
     */
    attorneyId: string
}

export interface CaseDocketAPIApiGetCaseRequest {
    /**
     * Retrieve the case with the specified caseId value.
     * @type string
     * @memberof CaseDocketAPIApigetCase
     */
    caseId: string
}

export interface CaseDocketAPIApiGetCaseAttorneysRequest {
    /**
     * Retrieve the case with the specified caseId value.
     * @type string
     * @memberof CaseDocketAPIApigetCaseAttorneys
     */
    caseId: string
    /**
     * Retrieve attorneys in the case with the specified caseId value whose isVisible flag is set to the specified value.
     * @type boolean
     * @memberof CaseDocketAPIApigetCaseAttorneys
     */
    isVisible?: boolean
    /**
     * Query parameter specifying the page number of the search results to be retrieved.
     * @type number
     * @memberof CaseDocketAPIApigetCaseAttorneys
     */
    pageNumber?: number
}

export interface CaseDocketAPIApiGetCaseDocketEntriesRequest {
    /**
     * Retrieve the case with the specified caseId value.
     * @type string
     * @memberof CaseDocketAPIApigetCaseDocketEntries
     */
    caseId: string
    /**
     * Retrieve the docket entry witih the specified docket number in the case with the specified caseId value.
     * @type number
     * @memberof CaseDocketAPIApigetCaseDocketEntries
     */
    docketNumber?: number
    /**
     * Sort the retrieved docket entries in ascending order or descending order of date.
     * @type &#39;latest to oldest&#39; | &#39;oldest to latest&#39;
     * @memberof CaseDocketAPIApigetCaseDocketEntries
     */
    sortBy?: 'latest to oldest' | 'oldest to latest'
    /**
     * Query parameter specifying the page number of the search results to be retrieved.
     * @type number
     * @memberof CaseDocketAPIApigetCaseDocketEntries
     */
    pageNumber?: number
}

export interface CaseDocketAPIApiGetCaseHearingsRequest {
    /**
     * Retrieve the case with the specified caseId value.
     * @type string
     * @memberof CaseDocketAPIApigetCaseHearings
     */
    caseId: string
    /**
     * Specify the sort order of hearings in the case with the specified caseId.
     * @type &#39;latest to oldest&#39; | &#39;oldest to latest&#39;
     * @memberof CaseDocketAPIApigetCaseHearings
     */
    sortBy?: 'latest to oldest' | 'oldest to latest'
    /**
     * Query parameter specifying the page number of the search results to be retrieved.
     * @type number
     * @memberof CaseDocketAPIApigetCaseHearings
     */
    pageNumber?: number
}

export interface CaseDocketAPIApiGetCaseJudgesRequest {
    /**
     * Retrieve the case with the specified caseId value.
     * @type string
     * @memberof CaseDocketAPIApigetCaseJudges
     */
    caseId: string
    /**
     * Retrieve attorneys judges in the case with the specified caseId value whose isVisible flag is set to the specified value.
     * @type boolean
     * @memberof CaseDocketAPIApigetCaseJudges
     */
    isVisible?: boolean
    /**
     * Query parameter specifying the page number of the search results to be retrieved.
     * @type number
     * @memberof CaseDocketAPIApigetCaseJudges
     */
    pageNumber?: number
}

export interface CaseDocketAPIApiGetCasePartiesRequest {
    /**
     * Retrieve the case with the specified caseId value.
     * @type string
     * @memberof CaseDocketAPIApigetCaseParties
     */
    caseId: string
    /**
     * Retrieve parties in the case with the specified caseId value whose isVisible flag is set to the specified value.
     * @type boolean
     * @memberof CaseDocketAPIApigetCaseParties
     */
    isVisible?: boolean
    /**
     * Query parameter specifying the page number of the search results to be retrieved.
     * @type number
     * @memberof CaseDocketAPIApigetCaseParties
     */
    pageNumber?: number
    /**
     * Retrieve all parties with the specified partyRoleId value in the case with the specified caseId value.
     * @type string
     * @memberof CaseDocketAPIApigetCaseParties
     */
    partyRoleId?: string
    /**
     * Retrieve all parties with the specified partyRoleGroupId value in the case with the specified caseId value.
     * @type string
     * @memberof CaseDocketAPIApigetCaseParties
     */
    partyRoleGroupId?: string
    /**
     * Retrieve all parties with the specified attorneyRepresentationTypeId value in the case with the specified caseId value.
     * @type string
     * @memberof CaseDocketAPIApigetCaseParties
     */
    attorneyRepresentationTypeId?: string
    /**
     * Retrieve all parties with the specified partyClassificationType value in the case with the specified caseId value.
     * @type &#39;INDIVIDUAL&#39; | &#39;COMPANY&#39; | &#39;OTHER&#39;
     * @memberof CaseDocketAPIApigetCaseParties
     */
    partyClassificationType?: 'INDIVIDUAL' | 'COMPANY' | 'OTHER'
}

export interface CaseDocketAPIApiGetCaseRelatedCasesRequest {
    /**
     * Retrieve the case with the specified caseId value.
     * @type string
     * @memberof CaseDocketAPIApigetCaseRelatedCases
     */
    caseId: string
    /**
     * Query parameter specifying the page number of the search results to be retrieved.
     * @type number
     * @memberof CaseDocketAPIApigetCaseRelatedCases
     */
    pageNumber?: number
}

export interface CaseDocketAPIApiGetJudgeByIdRequest {
    /**
     * Retrieve the judge with the specified judgeId value.
     * @type string
     * @memberof CaseDocketAPIApigetJudgeById
     */
    judgeId: string
}

export interface CaseDocketAPIApiGetPartyAssociatedAttorneysRequest {
    /**
     * Retrieve the party with the specified partyId value.
     * @type string
     * @memberof CaseDocketAPIApigetPartyAssociatedAttorneys
     */
    partyId: string
    /**
     * Query parameter specifying the page number of the search results to be retrieved.
     * @type number
     * @memberof CaseDocketAPIApigetPartyAssociatedAttorneys
     */
    pageNumber?: number
}

export interface CaseDocketAPIApiGetPartyByIdRequest {
    /**
     * Retrieve the party with the specified partyId value.
     * @type string
     * @memberof CaseDocketAPIApigetPartyById
     */
    partyId: string
}

export interface CaseDocketAPIApiGetPrimaryDocumentsForDocketEntriesRequest {
    /**
     * Retrieve the case with the specified caseId value.
     * @type string
     * @memberof CaseDocketAPIApigetPrimaryDocumentsForDocketEntries
     */
    caseId: string
    /**
     * Retrieve the primary documents associated with the specified docket number in the case with the specified caseId value.
     * @type number
     * @memberof CaseDocketAPIApigetPrimaryDocumentsForDocketEntries
     */
    docketNumber: number
    /**
     * Retrieve the primary documents in the with the specified inLibrary flag in the case with the specified caseId value.
     * @type boolean
     * @memberof CaseDocketAPIApigetPrimaryDocumentsForDocketEntries
     */
    inLibrary?: boolean
    /**
     * Retrieve all primary documents in the case with the specified caseId value that were first fetched by UniCourt on the specified date or within the specified date.
     * @type Date
     * @memberof CaseDocketAPIApigetPrimaryDocumentsForDocketEntries
     */
    afterFirstFetchDate?: Date
    /**
     * Retrieve all primary documents in the case with the specified caseId value that were added to the Crowdsourced Library on the specified date or within the specified date.
     * @type Date
     * @memberof CaseDocketAPIApigetPrimaryDocumentsForDocketEntries
     */
    libraryDate?: Date
    /**
     * Query parameter specifying the page number of the search results to be retrieved.
     * @type number
     * @memberof CaseDocketAPIApigetPrimaryDocumentsForDocketEntries
     */
    pageNumber?: number
}

export interface CaseDocketAPIApiGetSecondaryDocumentsForDocketEntriesRequest {
    /**
     * Retrieve the case with the specified caseId value.
     * @type string
     * @memberof CaseDocketAPIApigetSecondaryDocumentsForDocketEntries
     */
    caseId: string
    /**
     * Retrieve the secondary documents associated with the specified docket number in the case with the specified caseId value.
     * @type number
     * @memberof CaseDocketAPIApigetSecondaryDocumentsForDocketEntries
     */
    docketNumber: number
    /**
     * Retrieve the secondary documents in the with the specified inLibrary flag in the case with the specified caseId value.
     * @type boolean
     * @memberof CaseDocketAPIApigetSecondaryDocumentsForDocketEntries
     */
    inLibrary?: boolean
    /**
     * Retrieve all secondary documents in the case with the specified caseId value that were first fetched by UniCourt on the specified date or within the specified date.
     * @type Date
     * @memberof CaseDocketAPIApigetSecondaryDocumentsForDocketEntries
     */
    afterFirstFetchDate?: Date
    /**
     * Retrieve all secondary documents in the case with the specified caseId value that were added to the Crowdsourced Library on the specified date or within the specified date.
     * @type Date
     * @memberof CaseDocketAPIApigetSecondaryDocumentsForDocketEntries
     */
    libraryDate?: Date
    /**
     * Query parameter specifying the page number of the search results to be retrieved.
     * @type number
     * @memberof CaseDocketAPIApigetSecondaryDocumentsForDocketEntries
     */
    pageNumber?: number
}

export class ObjectCaseDocketAPIApi {
    private api: ObservableCaseDocketAPIApi

    public constructor(configuration: Configuration, requestFactory?: CaseDocketAPIApiRequestFactory, responseProcessor?: CaseDocketAPIApiResponseProcessor) {
        this.api = new ObservableCaseDocketAPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve the parties represented by the attorney with the specified attorneyId value.
     * Gets Associated Party details for a requested Attorney ID.
     * @param param the request object
     */
    public getAttorneyAssociatedPartiesWithHttpInfo(param: CaseDocketAPIApiGetAttorneyAssociatedPartiesRequest, options?: Configuration): Promise<HttpInfo<GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations>> {
        return this.api.getAttorneyAssociatedPartiesWithHttpInfo(param.attorneyId, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve the parties represented by the attorney with the specified attorneyId value.
     * Gets Associated Party details for a requested Attorney ID.
     * @param param the request object
     */
    public getAttorneyAssociatedParties(param: CaseDocketAPIApiGetAttorneyAssociatedPartiesRequest, options?: Configuration): Promise<GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations> {
        return this.api.getAttorneyAssociatedParties(param.attorneyId, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve the attorney with the specified attorneyId value.
     * Gets details for a requested Attorney ID.
     * @param param the request object
     */
    public getAttorneyByIdWithHttpInfo(param: CaseDocketAPIApiGetAttorneyByIdRequest, options?: Configuration): Promise<HttpInfo<GetCase200ResponseAttorneysAttorneyArrayInner>> {
        return this.api.getAttorneyByIdWithHttpInfo(param.attorneyId,  options).toPromise();
    }

    /**
     * Retrieve the attorney with the specified attorneyId value.
     * Gets details for a requested Attorney ID.
     * @param param the request object
     */
    public getAttorneyById(param: CaseDocketAPIApiGetAttorneyByIdRequest, options?: Configuration): Promise<GetCase200ResponseAttorneysAttorneyArrayInner> {
        return this.api.getAttorneyById(param.attorneyId,  options).toPromise();
    }

    /**
     * Retrieve the case with the specified caseId value.
     * Gets case information for a requested Case ID.
     * @param param the request object
     */
    public getCaseWithHttpInfo(param: CaseDocketAPIApiGetCaseRequest, options?: Configuration): Promise<HttpInfo<GetCase200Response>> {
        return this.api.getCaseWithHttpInfo(param.caseId,  options).toPromise();
    }

    /**
     * Retrieve the case with the specified caseId value.
     * Gets case information for a requested Case ID.
     * @param param the request object
     */
    public getCase(param: CaseDocketAPIApiGetCaseRequest, options?: Configuration): Promise<GetCase200Response> {
        return this.api.getCase(param.caseId,  options).toPromise();
    }

    /**
     * Retrieve the attorneys in the case with the specified caseId value.
     * Gets Attorneys for a requested Case ID.
     * @param param the request object
     */
    public getCaseAttorneysWithHttpInfo(param: CaseDocketAPIApiGetCaseAttorneysRequest, options?: Configuration): Promise<HttpInfo<GetCase200ResponseAttorneys>> {
        return this.api.getCaseAttorneysWithHttpInfo(param.caseId, param.isVisible, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve the attorneys in the case with the specified caseId value.
     * Gets Attorneys for a requested Case ID.
     * @param param the request object
     */
    public getCaseAttorneys(param: CaseDocketAPIApiGetCaseAttorneysRequest, options?: Configuration): Promise<GetCase200ResponseAttorneys> {
        return this.api.getCaseAttorneys(param.caseId, param.isVisible, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve the docket entries in the case with the specified caseId value.
     * Gets Docket Entries for a requested Case ID.
     * @param param the request object
     */
    public getCaseDocketEntriesWithHttpInfo(param: CaseDocketAPIApiGetCaseDocketEntriesRequest, options?: Configuration): Promise<HttpInfo<GetCase200ResponseDocketEntries>> {
        return this.api.getCaseDocketEntriesWithHttpInfo(param.caseId, param.docketNumber, param.sortBy, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve the docket entries in the case with the specified caseId value.
     * Gets Docket Entries for a requested Case ID.
     * @param param the request object
     */
    public getCaseDocketEntries(param: CaseDocketAPIApiGetCaseDocketEntriesRequest, options?: Configuration): Promise<GetCase200ResponseDocketEntries> {
        return this.api.getCaseDocketEntries(param.caseId, param.docketNumber, param.sortBy, param.pageNumber,  options).toPromise();
    }

    /**
     * Gets Hearings for a requested Case ID.
     * Gets Hearings for a requested Case ID.
     * @param param the request object
     */
    public getCaseHearingsWithHttpInfo(param: CaseDocketAPIApiGetCaseHearingsRequest, options?: Configuration): Promise<HttpInfo<GetCase200ResponseHearings>> {
        return this.api.getCaseHearingsWithHttpInfo(param.caseId, param.sortBy, param.pageNumber,  options).toPromise();
    }

    /**
     * Gets Hearings for a requested Case ID.
     * Gets Hearings for a requested Case ID.
     * @param param the request object
     */
    public getCaseHearings(param: CaseDocketAPIApiGetCaseHearingsRequest, options?: Configuration): Promise<GetCase200ResponseHearings> {
        return this.api.getCaseHearings(param.caseId, param.sortBy, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve the judges involved in the specified case.
     * Gets Judges for a requested Case ID.
     * @param param the request object
     */
    public getCaseJudgesWithHttpInfo(param: CaseDocketAPIApiGetCaseJudgesRequest, options?: Configuration): Promise<HttpInfo<GetCase200ResponseJudges>> {
        return this.api.getCaseJudgesWithHttpInfo(param.caseId, param.isVisible, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve the judges involved in the specified case.
     * Gets Judges for a requested Case ID.
     * @param param the request object
     */
    public getCaseJudges(param: CaseDocketAPIApiGetCaseJudgesRequest, options?: Configuration): Promise<GetCase200ResponseJudges> {
        return this.api.getCaseJudges(param.caseId, param.isVisible, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve the parties involved in the case with the specified caseId value.
     * Gets Parties for a requested Case ID.
     * @param param the request object
     */
    public getCasePartiesWithHttpInfo(param: CaseDocketAPIApiGetCasePartiesRequest, options?: Configuration): Promise<HttpInfo<GetCase200ResponseParties>> {
        return this.api.getCasePartiesWithHttpInfo(param.caseId, param.isVisible, param.pageNumber, param.partyRoleId, param.partyRoleGroupId, param.attorneyRepresentationTypeId, param.partyClassificationType,  options).toPromise();
    }

    /**
     * Retrieve the parties involved in the case with the specified caseId value.
     * Gets Parties for a requested Case ID.
     * @param param the request object
     */
    public getCaseParties(param: CaseDocketAPIApiGetCasePartiesRequest, options?: Configuration): Promise<GetCase200ResponseParties> {
        return this.api.getCaseParties(param.caseId, param.isVisible, param.pageNumber, param.partyRoleId, param.partyRoleGroupId, param.attorneyRepresentationTypeId, param.partyClassificationType,  options).toPromise();
    }

    /**
     * Retrieve cases that UniCourt has identified as related to the case with the specified caseId value.
     * Gets Related Cases for a requested Case ID.
     * @param param the request object
     */
    public getCaseRelatedCasesWithHttpInfo(param: CaseDocketAPIApiGetCaseRelatedCasesRequest, options?: Configuration): Promise<HttpInfo<GetCase200ResponseRelatedCases>> {
        return this.api.getCaseRelatedCasesWithHttpInfo(param.caseId, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve cases that UniCourt has identified as related to the case with the specified caseId value.
     * Gets Related Cases for a requested Case ID.
     * @param param the request object
     */
    public getCaseRelatedCases(param: CaseDocketAPIApiGetCaseRelatedCasesRequest, options?: Configuration): Promise<GetCase200ResponseRelatedCases> {
        return this.api.getCaseRelatedCases(param.caseId, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve the judge with the specified judgeId value.
     * Gets details for a requested Judge ID.
     * @param param the request object
     */
    public getJudgeByIdWithHttpInfo(param: CaseDocketAPIApiGetJudgeByIdRequest, options?: Configuration): Promise<HttpInfo<GetCase200ResponseJudgesJudgeArrayInner>> {
        return this.api.getJudgeByIdWithHttpInfo(param.judgeId,  options).toPromise();
    }

    /**
     * Retrieve the judge with the specified judgeId value.
     * Gets details for a requested Judge ID.
     * @param param the request object
     */
    public getJudgeById(param: CaseDocketAPIApiGetJudgeByIdRequest, options?: Configuration): Promise<GetCase200ResponseJudgesJudgeArrayInner> {
        return this.api.getJudgeById(param.judgeId,  options).toPromise();
    }

    /**
     * Retrieve the attorneys in the case with the specified partyId value.
     * Gets Associated Attorney details for a requested Party ID.
     * @param param the request object
     */
    public getPartyAssociatedAttorneysWithHttpInfo(param: CaseDocketAPIApiGetPartyAssociatedAttorneysRequest, options?: Configuration): Promise<HttpInfo<GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations>> {
        return this.api.getPartyAssociatedAttorneysWithHttpInfo(param.partyId, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve the attorneys in the case with the specified partyId value.
     * Gets Associated Attorney details for a requested Party ID.
     * @param param the request object
     */
    public getPartyAssociatedAttorneys(param: CaseDocketAPIApiGetPartyAssociatedAttorneysRequest, options?: Configuration): Promise<GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations> {
        return this.api.getPartyAssociatedAttorneys(param.partyId, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve the party with the specified partyId value.
     * Gets details for a requested Party ID.
     * @param param the request object
     */
    public getPartyByIdWithHttpInfo(param: CaseDocketAPIApiGetPartyByIdRequest, options?: Configuration): Promise<HttpInfo<GetCase200ResponsePartiesPartyArrayInner>> {
        return this.api.getPartyByIdWithHttpInfo(param.partyId,  options).toPromise();
    }

    /**
     * Retrieve the party with the specified partyId value.
     * Gets details for a requested Party ID.
     * @param param the request object
     */
    public getPartyById(param: CaseDocketAPIApiGetPartyByIdRequest, options?: Configuration): Promise<GetCase200ResponsePartiesPartyArrayInner> {
        return this.api.getPartyById(param.partyId,  options).toPromise();
    }

    /**
     * Retrieve the primary documents in the case with the specified caseId value.
     * Gets Primary Documents of Docket Entries.
     * @param param the request object
     */
    public getPrimaryDocumentsForDocketEntriesWithHttpInfo(param: CaseDocketAPIApiGetPrimaryDocumentsForDocketEntriesRequest, options?: Configuration): Promise<HttpInfo<GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments>> {
        return this.api.getPrimaryDocumentsForDocketEntriesWithHttpInfo(param.caseId, param.docketNumber, param.inLibrary, param.afterFirstFetchDate, param.libraryDate, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve the primary documents in the case with the specified caseId value.
     * Gets Primary Documents of Docket Entries.
     * @param param the request object
     */
    public getPrimaryDocumentsForDocketEntries(param: CaseDocketAPIApiGetPrimaryDocumentsForDocketEntriesRequest, options?: Configuration): Promise<GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments> {
        return this.api.getPrimaryDocumentsForDocketEntries(param.caseId, param.docketNumber, param.inLibrary, param.afterFirstFetchDate, param.libraryDate, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve the secondary documents in the case with the specified caseId value.
     * Gets Secondary Documents of Docket Entries.
     * @param param the request object
     */
    public getSecondaryDocumentsForDocketEntriesWithHttpInfo(param: CaseDocketAPIApiGetSecondaryDocumentsForDocketEntriesRequest, options?: Configuration): Promise<HttpInfo<GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments>> {
        return this.api.getSecondaryDocumentsForDocketEntriesWithHttpInfo(param.caseId, param.docketNumber, param.inLibrary, param.afterFirstFetchDate, param.libraryDate, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve the secondary documents in the case with the specified caseId value.
     * Gets Secondary Documents of Docket Entries.
     * @param param the request object
     */
    public getSecondaryDocumentsForDocketEntries(param: CaseDocketAPIApiGetSecondaryDocumentsForDocketEntriesRequest, options?: Configuration): Promise<GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments> {
        return this.api.getSecondaryDocumentsForDocketEntries(param.caseId, param.docketNumber, param.inLibrary, param.afterFirstFetchDate, param.libraryDate, param.pageNumber,  options).toPromise();
    }

}

import { ObservableCaseDocumentsAPIApi } from "./ObservableAPI";
import { CaseDocumentsAPIApiRequestFactory, CaseDocumentsAPIApiResponseProcessor} from "../apis/CaseDocumentsAPIApi";

export interface CaseDocumentsAPIApiGetCaseDocumentDownloadByIdRequest {
    /**
     * Document ID which you want to download.
     * @type string
     * @memberof CaseDocumentsAPIApigetCaseDocumentDownloadById
     */
    caseDocumentId: string
    /**
     * If the document you want to download is a preview of a document.
     * @type boolean
     * @memberof CaseDocumentsAPIApigetCaseDocumentDownloadById
     */
    isPreviewDocument?: boolean
}

export interface CaseDocumentsAPIApiGetCaseDocumentOrderCallbackByIdRequest {
    /**
     * Unique Id for the Case Document Order Callback.
     * @type string
     * @memberof CaseDocumentsAPIApigetCaseDocumentOrderCallbackById
     */
    caseDocumentOrderCallbackId: string
}

export interface CaseDocumentsAPIApiGetCaseDocumentOrderCallbacksRequest {
    /**
     * Date for which fetch the Case Document Order Callback list. By default, the date will be set to current date.
     * @type Date
     * @memberof CaseDocumentsAPIApigetCaseDocumentOrderCallbacks
     */
    date?: Date
    /**
     * Status of Document Order callbacks. Default status will fetch all callbacks.
     * @type &#39;IN_PROGRESS&#39; | &#39;DELAYED&#39; | &#39;COMPLETE&#39; | &#39;FAILURE&#39;
     * @memberof CaseDocumentsAPIApigetCaseDocumentOrderCallbacks
     */
    status?: 'IN_PROGRESS' | 'DELAYED' | 'COMPLETE' | 'FAILURE'
    /**
     * Page to fetch the Case Document Order Callback list.&lt;br&gt;   - Minimum: 1 
     * @type number
     * @memberof CaseDocumentsAPIApigetCaseDocumentOrderCallbacks
     */
    pageNumber?: number
}

export interface CaseDocumentsAPIApiGetCaseDocumentsRequest {
    /**
     * Case ID for which you want the data for.
     * @type string
     * @memberof CaseDocumentsAPIApigetCaseDocuments
     */
    caseId: string
    /**
     * Filter all the documents those are added to the UniCourt library.
     * @type boolean
     * @memberof CaseDocumentsAPIApigetCaseDocuments
     */
    inLibrary?: boolean
    /**
     * Get all the documents which were added to the case on or after a specific date.
     * @type Date
     * @memberof CaseDocumentsAPIApigetCaseDocuments
     */
    afterFirstFetchDate?: Date
    /**
     * Sort all the documents based on the date when the document was added to the UniCourt Library.
     * @type Date
     * @memberof CaseDocumentsAPIApigetCaseDocuments
     */
    libraryDate?: Date
    /**
     * Sort all the documents based on the date it was fetched from the source site.
     * @type Date
     * @memberof CaseDocumentsAPIApigetCaseDocuments
     */
    firstFetchDate?: Date
    /**
     * Sort documents with document order.
     * @type &#39;latest to oldest&#39; | &#39;oldest to latest&#39;
     * @memberof CaseDocumentsAPIApigetCaseDocuments
     */
    sortBy?: 'latest to oldest' | 'oldest to latest'
    /**
     * The page for which the result should be retrieved.
     * @type number
     * @memberof CaseDocumentsAPIApigetCaseDocuments
     */
    pageNumber?: number
}

export interface CaseDocumentsAPIApiGetDocumentByIdRequest {
    /**
     * Specific Case Dcoument ID for which you want the data for.
     * @type string
     * @memberof CaseDocumentsAPIApigetDocumentById
     */
    caseDocumentId: string
}

export interface CaseDocumentsAPIApiOrderCaseDocumentRequest {
    /**
     * If the Case Document Order is for Preview, then the value for &#x60;&#x60;isPreviewOnly&#x60;&#x60; should be &#x60;&#x60;true&#x60;&#x60; else &#x60;&#x60;false&#x60;&#x60;. 
     * @type OrderCaseDocumentRequest
     * @memberof CaseDocumentsAPIApiorderCaseDocument
     */
    orderCaseDocumentRequest?: OrderCaseDocumentRequest
}

export class ObjectCaseDocumentsAPIApi {
    private api: ObservableCaseDocumentsAPIApi

    public constructor(configuration: Configuration, requestFactory?: CaseDocumentsAPIApiRequestFactory, responseProcessor?: CaseDocumentsAPIApiResponseProcessor) {
        this.api = new ObservableCaseDocumentsAPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets downloadable URL for a requested Document ID.
     * Gets downloadable URL for a requested Document ID.
     * @param param the request object
     */
    public getCaseDocumentDownloadByIdWithHttpInfo(param: CaseDocumentsAPIApiGetCaseDocumentDownloadByIdRequest, options?: Configuration): Promise<HttpInfo<GetCaseDocumentDownloadById200Response>> {
        return this.api.getCaseDocumentDownloadByIdWithHttpInfo(param.caseDocumentId, param.isPreviewDocument,  options).toPromise();
    }

    /**
     * Gets downloadable URL for a requested Document ID.
     * Gets downloadable URL for a requested Document ID.
     * @param param the request object
     */
    public getCaseDocumentDownloadById(param: CaseDocumentsAPIApiGetCaseDocumentDownloadByIdRequest, options?: Configuration): Promise<GetCaseDocumentDownloadById200Response> {
        return this.api.getCaseDocumentDownloadById(param.caseDocumentId, param.isPreviewDocument,  options).toPromise();
    }

    /**
     * Get Case Document Order Callback for a requested Case Document Order Callback Id.
     * Get Case Document Order Callback for a requested Case Document Order Callback Id.
     * @param param the request object
     */
    public getCaseDocumentOrderCallbackByIdWithHttpInfo(param: CaseDocumentsAPIApiGetCaseDocumentOrderCallbackByIdRequest, options?: Configuration): Promise<HttpInfo<OrderCaseDocument200Response>> {
        return this.api.getCaseDocumentOrderCallbackByIdWithHttpInfo(param.caseDocumentOrderCallbackId,  options).toPromise();
    }

    /**
     * Get Case Document Order Callback for a requested Case Document Order Callback Id.
     * Get Case Document Order Callback for a requested Case Document Order Callback Id.
     * @param param the request object
     */
    public getCaseDocumentOrderCallbackById(param: CaseDocumentsAPIApiGetCaseDocumentOrderCallbackByIdRequest, options?: Configuration): Promise<OrderCaseDocument200Response> {
        return this.api.getCaseDocumentOrderCallbackById(param.caseDocumentOrderCallbackId,  options).toPromise();
    }

    /**
     * Get Case Document Order Callback list for a requested Date.
     * Get Case Document Order Callback list for a requested Date.
     * @param param the request object
     */
    public getCaseDocumentOrderCallbacksWithHttpInfo(param: CaseDocumentsAPIApiGetCaseDocumentOrderCallbacksRequest = {}, options?: Configuration): Promise<HttpInfo<GetCaseDocumentOrderCallbacks200Response>> {
        return this.api.getCaseDocumentOrderCallbacksWithHttpInfo(param.date, param.status, param.pageNumber,  options).toPromise();
    }

    /**
     * Get Case Document Order Callback list for a requested Date.
     * Get Case Document Order Callback list for a requested Date.
     * @param param the request object
     */
    public getCaseDocumentOrderCallbacks(param: CaseDocumentsAPIApiGetCaseDocumentOrderCallbacksRequest = {}, options?: Configuration): Promise<GetCaseDocumentOrderCallbacks200Response> {
        return this.api.getCaseDocumentOrderCallbacks(param.date, param.status, param.pageNumber,  options).toPromise();
    }

    /**
     * Gets Documents for a requested Case ID.
     * Gets Documents for a requested Case ID.
     * @param param the request object
     */
    public getCaseDocumentsWithHttpInfo(param: CaseDocumentsAPIApiGetCaseDocumentsRequest, options?: Configuration): Promise<HttpInfo<GetCase200ResponseCaseDocuments>> {
        return this.api.getCaseDocumentsWithHttpInfo(param.caseId, param.inLibrary, param.afterFirstFetchDate, param.libraryDate, param.firstFetchDate, param.sortBy, param.pageNumber,  options).toPromise();
    }

    /**
     * Gets Documents for a requested Case ID.
     * Gets Documents for a requested Case ID.
     * @param param the request object
     */
    public getCaseDocuments(param: CaseDocumentsAPIApiGetCaseDocumentsRequest, options?: Configuration): Promise<GetCase200ResponseCaseDocuments> {
        return this.api.getCaseDocuments(param.caseId, param.inLibrary, param.afterFirstFetchDate, param.libraryDate, param.firstFetchDate, param.sortBy, param.pageNumber,  options).toPromise();
    }

    /**
     * Gets details for a requested Document ID.
     * Gets details for a requested Document ID.
     * @param param the request object
     */
    public getDocumentByIdWithHttpInfo(param: CaseDocumentsAPIApiGetDocumentByIdRequest, options?: Configuration): Promise<HttpInfo<GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner>> {
        return this.api.getDocumentByIdWithHttpInfo(param.caseDocumentId,  options).toPromise();
    }

    /**
     * Gets details for a requested Document ID.
     * Gets details for a requested Document ID.
     * @param param the request object
     */
    public getDocumentById(param: CaseDocumentsAPIApiGetDocumentByIdRequest, options?: Configuration): Promise<GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner> {
        return this.api.getDocumentById(param.caseDocumentId,  options).toPromise();
    }

    /**
     * Add Case Document Order for requested Document Ids. The status will be ``IN_PROGRESS`` after it has been requested. If the request is not processed within 4 hours, it will be reported as ``DELAYED``.  If the request is still incomplete after 4 hours, it will remain in the DELAYED status for up to 72 hours after the request was approved. Such requests will be recorded as ``TIMEOUT`` after 72 hours.
     * Add Case Document Order for requested Document Ids.
     * @param param the request object
     */
    public orderCaseDocumentWithHttpInfo(param: CaseDocumentsAPIApiOrderCaseDocumentRequest = {}, options?: Configuration): Promise<HttpInfo<OrderCaseDocument200Response>> {
        return this.api.orderCaseDocumentWithHttpInfo(param.orderCaseDocumentRequest,  options).toPromise();
    }

    /**
     * Add Case Document Order for requested Document Ids. The status will be ``IN_PROGRESS`` after it has been requested. If the request is not processed within 4 hours, it will be reported as ``DELAYED``.  If the request is still incomplete after 4 hours, it will remain in the DELAYED status for up to 72 hours after the request was approved. Such requests will be recorded as ``TIMEOUT`` after 72 hours.
     * Add Case Document Order for requested Document Ids.
     * @param param the request object
     */
    public orderCaseDocument(param: CaseDocumentsAPIApiOrderCaseDocumentRequest = {}, options?: Configuration): Promise<OrderCaseDocument200Response> {
        return this.api.orderCaseDocument(param.orderCaseDocumentRequest,  options).toPromise();
    }

}

import { ObservableCaseExportAPIApi } from "./ObservableAPI";
import { CaseExportAPIApiRequestFactory, CaseExportAPIApiResponseProcessor} from "../apis/CaseExportAPIApi";

export interface CaseExportAPIApiExportCaseRequest {
    /**
     * The caseId value of the case for which case export information is to be retrieved.
     * @type string
     * @memberof CaseExportAPIApiexportCase
     */
    caseId: string
}

export interface CaseExportAPIApiGetCaseExportCallbackByIdRequest {
    /**
     * The caseExportCallbackId value of the case export callback object to be retrieved.
     * @type string
     * @memberof CaseExportAPIApigetCaseExportCallbackById
     */
    caseExportCallbackId: string
}

export interface CaseExportAPIApiGetCaseExportCallbacksRequest {
    /**
     * The date for which callbacks are to be retrieved.
     * @type Date
     * @memberof CaseExportAPIApigetCaseExportCallbacks
     */
    date?: Date
    /**
     * The status code of the callbacks to be retrieved.
     * @type &#39;IN_PROGRESS&#39; | &#39;COMPLETE&#39; | &#39;FAILURE&#39;
     * @memberof CaseExportAPIApigetCaseExportCallbacks
     */
    status?: 'IN_PROGRESS' | 'COMPLETE' | 'FAILURE'
    /**
     * The page number of the callbacks to be retrieved.&lt;br&gt;   - Minimum: 1 
     * @type number
     * @memberof CaseExportAPIApigetCaseExportCallbacks
     */
    pageNumber?: number
}

export class ObjectCaseExportAPIApi {
    private api: ObservableCaseExportAPIApi

    public constructor(configuration: Configuration, requestFactory?: CaseExportAPIApiRequestFactory, responseProcessor?: CaseExportAPIApiResponseProcessor) {
        this.api = new ObservableCaseExportAPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve information about the specified case export.
     * Gets case exported for a requested Case ID.
     * @param param the request object
     */
    public exportCaseWithHttpInfo(param: CaseExportAPIApiExportCaseRequest, options?: Configuration): Promise<HttpInfo<ExportCase200Response>> {
        return this.api.exportCaseWithHttpInfo(param.caseId,  options).toPromise();
    }

    /**
     * Retrieve information about the specified case export.
     * Gets case exported for a requested Case ID.
     * @param param the request object
     */
    public exportCase(param: CaseExportAPIApiExportCaseRequest, options?: Configuration): Promise<ExportCase200Response> {
        return this.api.exportCase(param.caseId,  options).toPromise();
    }

    /**
     * Retrieve the specified case export callback object.
     * Get Case Export Callback for a requested Case Export Callback Id.
     * @param param the request object
     */
    public getCaseExportCallbackByIdWithHttpInfo(param: CaseExportAPIApiGetCaseExportCallbackByIdRequest, options?: Configuration): Promise<HttpInfo<ExportCase200Response>> {
        return this.api.getCaseExportCallbackByIdWithHttpInfo(param.caseExportCallbackId,  options).toPromise();
    }

    /**
     * Retrieve the specified case export callback object.
     * Get Case Export Callback for a requested Case Export Callback Id.
     * @param param the request object
     */
    public getCaseExportCallbackById(param: CaseExportAPIApiGetCaseExportCallbackByIdRequest, options?: Configuration): Promise<ExportCase200Response> {
        return this.api.getCaseExportCallbackById(param.caseExportCallbackId,  options).toPromise();
    }

    /**
     * Retrieve callbacks according to the specified criteria.
     * Get Case Export Callback list for a requested Date.
     * @param param the request object
     */
    public getCaseExportCallbacksWithHttpInfo(param: CaseExportAPIApiGetCaseExportCallbacksRequest = {}, options?: Configuration): Promise<HttpInfo<GetCaseExportCallbacks200Response>> {
        return this.api.getCaseExportCallbacksWithHttpInfo(param.date, param.status, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve callbacks according to the specified criteria.
     * Get Case Export Callback list for a requested Date.
     * @param param the request object
     */
    public getCaseExportCallbacks(param: CaseExportAPIApiGetCaseExportCallbacksRequest = {}, options?: Configuration): Promise<GetCaseExportCallbacks200Response> {
        return this.api.getCaseExportCallbacks(param.date, param.status, param.pageNumber,  options).toPromise();
    }

}

import { ObservableCaseSearchAPIApi } from "./ObservableAPI";
import { CaseSearchAPIApiRequestFactory, CaseSearchAPIApiResponseProcessor} from "../apis/CaseSearchAPIApi";

export interface CaseSearchAPIApiSearchCasesRequest {
    /**
     * Query parameter for keyword expressions.&lt;/a&gt; 
     * @type string
     * @memberof CaseSearchAPIApisearchCases
     */
    q: string
    /**
     * Query parameter specifying how results are to be sorted. Results can be sorted according to filedDate or relevancy.
     * @type &#39;filedDate&#39; | &#39;relevancy&#39;
     * @memberof CaseSearchAPIApisearchCases
     */
    sort?: 'filedDate' | 'relevancy'
    /**
     * Query parameter specifying whether search result are sorted in ascending or descending order.
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CaseSearchAPIApisearchCases
     */
    order?: 'asc' | 'desc'
    /**
     * The page number of the desired page of results. - Minimum: 1 - Maximum: 1000 
     * @type number
     * @memberof CaseSearchAPIApisearchCases
     */
    pageNumber?: number
}

export interface CaseSearchAPIApiSearchCasesByIdRequest {
    /**
     * Case Search information for the given caseSearchId.
     * @type string
     * @memberof CaseSearchAPIApisearchCasesById
     */
    caseSearchId: string
    /**
     * The page number of the desired page of results. - Minimum: 1 - Maximum: 1000 
     * @type number
     * @memberof CaseSearchAPIApisearchCasesById
     */
    pageNumber?: number
}

export class ObjectCaseSearchAPIApi {
    private api: ObservableCaseSearchAPIApi

    public constructor(configuration: Configuration, requestFactory?: CaseSearchAPIApiRequestFactory, responseProcessor?: CaseSearchAPIApiResponseProcessor) {
        this.api = new ObservableCaseSearchAPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint retrieves cases according to keyword expressions you provide. <br> Keyword expressions are constructed according to the rules described below. <br><br> This API supports multiple use cases:   - Search for multiple keywords  `Google OR Facebook`.   - Search within particular attributes.   - Relational search using terms and connectors.   - And much more. ----  ## Allowed Connectors in Keyword Expressions | Connector | Description  | Example | | ------| ------|------| | **AND** |Find cases containing each of the terms joined by AND connectors.|**personal AND injury**| | **OR**  |Find cases containing any of the terms joined by OR connectors.|**order OR decision**| | **NOT** |Find cases that do not contain the specified term.|**personal AND NOT injury**.  Find cases with the word “personal” and not “injury”.| | **“[phrase]”** |Find the exact phrase placed between the quotation marks.|**\"personal injury”**| | **~**  |Find cases in which the specified words appear near each other. For example, \"personal injury\" ~ 5 targets cases in which the word \"personal\" appears within 5 words of the word \"injury\".|**“personal injury” ~ 5** - Find cases with “personal” within five words of “injury”. | | **( … )** |Specifies the order in which connectors are to be appliied in a keyword expression.| **personal AND (injury OR fall)** - Find cases with the word personal injury or personal fall.|  <br><br> ## Fields and Connectors Searching | Filed | Description  | Example | | ------| ------|------| |**caseNumber** |Find cases with the specified case number (i.e., docket number).| **caseNumber:\"2020-L-007212\"** - Find cases whose case number matches given case number number.| |**caseName** |Find cases with the specified case title.| **caseName:\"THOMAS P. CARNEY, INC. VS BEHLER JAMES Et Al\"** - Find cases whose case name matches given terms.| |**Court**|Find cases in the specified court.|**(Court:(name:(New York)))** - Find cases in New York state.<br>| |**CaseStatus**|Find cases witih the specified case status.|**(CaseStatus:(name:Disposed))** - All disposed cases.<br>| |**CaseType**|Find cases of the specified case type. | **(CaseType:(name:Property))** - Cases with case type “property”.| |**Party** | Find cases involving the specified party.| **(Party:(name:Apple))** - Find cases involving Apple. | |**partyId**|Find cases involving a party with the specified partyId value.|**(Party:(partyId:\"PRTYgu1ffe866484c2\"))**| |**PartyRole** | Find cases in which at least one party has the specified party role. | **(Party:((PartyRole:(name:\"plaintiff\"))))** - Find cases with party role “plaintiff”.<br><br> **(Party:((PartyRole:(name:defendant)) AND (AttorneyRepresentationType:(name:(Attorney represented)))))** - Find cases where a party is acting as defendant and represented by an attorney.| |**AttorneyRepresentationType**| Find cases in which at least one party has the specified attorney representation type.|**(Party:(AttorneyRepresentationType:(name:\"attorney represented\")))** - Find cases where a party is represented by an attorney. | |**Attorney** | Find cases involving the specified attorney. | **(Attorney:(name:\"David Boies\"))** - Find cases involving the attorney David Boies. | |**AttorneyType**|Find cases involving at least one attorney of the specified attorney type.|**(Attorney:((AttorneyType:(name:\"Lead Attorney\"))))**| |**Judge** |Find cases involving the specified judge. | **(Judge:(name:\"Posner\"))** - Find cases involving Judge Posner.| |**JudgeType**|Find cases involving at least one judge of the specified judge type.|**(Judge:((JudgeType:(name:\"Magistrate\"))))**| |**CaseStats**|Find cases with the specified case statistics.|**(CaseStats:(partyCount:[10 TO 100]))** - Find cases involving 10 to 100 parties.<br>**(CaseStats:(attorneyCount:[2 TO 40]))** - Find cases involving 2 to 40 attorneys.<br>**(CaseStats:(judgeCount:[\\* TO 2]))** - Find cases involving up to 2 judges. <br>**(CaseStats:(docketEntryCount:[10 TO 100]))** - Find cases having 10 to 100 docket_entries. <br>**(CaseStats:(allCaseDocumentCount:[10 TO 100]))** - Find cases having 10 to 100 documents. | |**filedDate** | Find cases that were filed on the specified date or within the specified date range. | **filedDate:[2020-03-15 TO 2021-12-01]** - Find the most recently filed cases between March 15, 2020 and December 1, 2021 (inclusive). | |**lastFetchDate**| Find cases in which UniCourt last checked for updates on the specified date or within the specified date range. |**(lastFetchDate:[now-60d TO \\*\\])** - Find cases that were updated by UniCourt in the last 60 days. | |**lastFetchDateWithUpdates**|Find cases in which UniCourt last detected an update on the specified date or within the specified date range.|**(lastFetchDateWithUpdates:[now-6d TO \\*\\])** - Find cases for the changes found on court site in last 6 days.| |**participantsLastFetchDate**|Find cases in which information cocnerning participants was last updated on the specified date or within the specified date range.|**(participantsLastFetchDate:[now-6d TO \\*\\])** - Find cases where the participant\'s information was updated in last 6 days.| |**DocketEntry**|Find cases in which at least one docket entry contains the specified text.|**(DocketEntry:(text:(Motion to Compel Responses) AND docketEntryDate:[2020-01-01T00:00:00 TO 2020-05-01T00:00:00]))** - Find cases with docket text “Motion to Compel Responses” and action date between 2020-01-01 and 2020-05-01.| |**docketEntryDate**|Find cases in which at least one docket entry was made on the specified date or within the specified date range.|**(DocketEntry:(docketEntryDate:[2020-01-01T00:00:00 TO 2020-05-01T00:00:00])) AND (CaseStats:(allCaseDocumentCount:[0 TO 10]))** - Find cases with docket action date between 2020-01-01 and 2020-05-01 having up to 10 documents associated with it.| |**HearingDate**| Find cases with at least one hearing scheduled for the specified date or within the specified date range.|**(Hearing:(hearingDate:[now TO now+10d]))** - Find cases where hearing is scheduled in next 10 days.| |**HearingDate**| Search for cases where hearing is going to happen in 10 to 20days.|**(Hearing:(hearingDate:[now+10d TO now+20d]))** - Find cases where hearing is scheduled in next 10 to 20 days.| |**JurisdictionGeo**|Find cases in which the law of the specified state governs.|**(JurisdictionGeo:(state:\"New York\"))**- Find cases where Jurisdiction is New York state.| |**Party Address Exists**|Find cases with Party addresses.|**(Party:(Contact:(Address:(stateName:\\*))))**- Returns only those cases that have addresses for parties.| |**Document**|Find cases with specific document name and preview is available for the document.|**(CaseDocument:(name:\"civil case cover sheet\" AND isPreviewAvailable:true))**- Returns cases with document civil case cover sheet and preview is available.|  <br><br> --- ## Party Sub Filter Examples |Example |Explanation | |---|---| |**(Party:(name:google AND (PartyRole:(name:\"plaintiff\"))))**|Find cases involving at least one plaintiff whose name contains the term \"Google\".| |**(Party:(name:\"OTELIA PEREIDA\" AND (AttorneyRepresentationType:(name:\"Attorney represented\")))) AND (Attorney:(name:\"Law Offices of Todd M Friedman\"))**|Find cases where the Party is *OTELIA PEREIDA* and is represented by the attorney *Law Offices of Todd M Friedman*.|  --- ### All query parameters supported for this API can be found in below schema section. Schema -->  CaseSearchQueryObject 
     * Case search.
     * @param param the request object
     */
    public searchCasesWithHttpInfo(param: CaseSearchAPIApiSearchCasesRequest, options?: Configuration): Promise<HttpInfo<SearchCases200Response>> {
        return this.api.searchCasesWithHttpInfo(param.q, param.sort, param.order, param.pageNumber,  options).toPromise();
    }

    /**
     * This endpoint retrieves cases according to keyword expressions you provide. <br> Keyword expressions are constructed according to the rules described below. <br><br> This API supports multiple use cases:   - Search for multiple keywords  `Google OR Facebook`.   - Search within particular attributes.   - Relational search using terms and connectors.   - And much more. ----  ## Allowed Connectors in Keyword Expressions | Connector | Description  | Example | | ------| ------|------| | **AND** |Find cases containing each of the terms joined by AND connectors.|**personal AND injury**| | **OR**  |Find cases containing any of the terms joined by OR connectors.|**order OR decision**| | **NOT** |Find cases that do not contain the specified term.|**personal AND NOT injury**.  Find cases with the word “personal” and not “injury”.| | **“[phrase]”** |Find the exact phrase placed between the quotation marks.|**\"personal injury”**| | **~**  |Find cases in which the specified words appear near each other. For example, \"personal injury\" ~ 5 targets cases in which the word \"personal\" appears within 5 words of the word \"injury\".|**“personal injury” ~ 5** - Find cases with “personal” within five words of “injury”. | | **( … )** |Specifies the order in which connectors are to be appliied in a keyword expression.| **personal AND (injury OR fall)** - Find cases with the word personal injury or personal fall.|  <br><br> ## Fields and Connectors Searching | Filed | Description  | Example | | ------| ------|------| |**caseNumber** |Find cases with the specified case number (i.e., docket number).| **caseNumber:\"2020-L-007212\"** - Find cases whose case number matches given case number number.| |**caseName** |Find cases with the specified case title.| **caseName:\"THOMAS P. CARNEY, INC. VS BEHLER JAMES Et Al\"** - Find cases whose case name matches given terms.| |**Court**|Find cases in the specified court.|**(Court:(name:(New York)))** - Find cases in New York state.<br>| |**CaseStatus**|Find cases witih the specified case status.|**(CaseStatus:(name:Disposed))** - All disposed cases.<br>| |**CaseType**|Find cases of the specified case type. | **(CaseType:(name:Property))** - Cases with case type “property”.| |**Party** | Find cases involving the specified party.| **(Party:(name:Apple))** - Find cases involving Apple. | |**partyId**|Find cases involving a party with the specified partyId value.|**(Party:(partyId:\"PRTYgu1ffe866484c2\"))**| |**PartyRole** | Find cases in which at least one party has the specified party role. | **(Party:((PartyRole:(name:\"plaintiff\"))))** - Find cases with party role “plaintiff”.<br><br> **(Party:((PartyRole:(name:defendant)) AND (AttorneyRepresentationType:(name:(Attorney represented)))))** - Find cases where a party is acting as defendant and represented by an attorney.| |**AttorneyRepresentationType**| Find cases in which at least one party has the specified attorney representation type.|**(Party:(AttorneyRepresentationType:(name:\"attorney represented\")))** - Find cases where a party is represented by an attorney. | |**Attorney** | Find cases involving the specified attorney. | **(Attorney:(name:\"David Boies\"))** - Find cases involving the attorney David Boies. | |**AttorneyType**|Find cases involving at least one attorney of the specified attorney type.|**(Attorney:((AttorneyType:(name:\"Lead Attorney\"))))**| |**Judge** |Find cases involving the specified judge. | **(Judge:(name:\"Posner\"))** - Find cases involving Judge Posner.| |**JudgeType**|Find cases involving at least one judge of the specified judge type.|**(Judge:((JudgeType:(name:\"Magistrate\"))))**| |**CaseStats**|Find cases with the specified case statistics.|**(CaseStats:(partyCount:[10 TO 100]))** - Find cases involving 10 to 100 parties.<br>**(CaseStats:(attorneyCount:[2 TO 40]))** - Find cases involving 2 to 40 attorneys.<br>**(CaseStats:(judgeCount:[\\* TO 2]))** - Find cases involving up to 2 judges. <br>**(CaseStats:(docketEntryCount:[10 TO 100]))** - Find cases having 10 to 100 docket_entries. <br>**(CaseStats:(allCaseDocumentCount:[10 TO 100]))** - Find cases having 10 to 100 documents. | |**filedDate** | Find cases that were filed on the specified date or within the specified date range. | **filedDate:[2020-03-15 TO 2021-12-01]** - Find the most recently filed cases between March 15, 2020 and December 1, 2021 (inclusive). | |**lastFetchDate**| Find cases in which UniCourt last checked for updates on the specified date or within the specified date range. |**(lastFetchDate:[now-60d TO \\*\\])** - Find cases that were updated by UniCourt in the last 60 days. | |**lastFetchDateWithUpdates**|Find cases in which UniCourt last detected an update on the specified date or within the specified date range.|**(lastFetchDateWithUpdates:[now-6d TO \\*\\])** - Find cases for the changes found on court site in last 6 days.| |**participantsLastFetchDate**|Find cases in which information cocnerning participants was last updated on the specified date or within the specified date range.|**(participantsLastFetchDate:[now-6d TO \\*\\])** - Find cases where the participant\'s information was updated in last 6 days.| |**DocketEntry**|Find cases in which at least one docket entry contains the specified text.|**(DocketEntry:(text:(Motion to Compel Responses) AND docketEntryDate:[2020-01-01T00:00:00 TO 2020-05-01T00:00:00]))** - Find cases with docket text “Motion to Compel Responses” and action date between 2020-01-01 and 2020-05-01.| |**docketEntryDate**|Find cases in which at least one docket entry was made on the specified date or within the specified date range.|**(DocketEntry:(docketEntryDate:[2020-01-01T00:00:00 TO 2020-05-01T00:00:00])) AND (CaseStats:(allCaseDocumentCount:[0 TO 10]))** - Find cases with docket action date between 2020-01-01 and 2020-05-01 having up to 10 documents associated with it.| |**HearingDate**| Find cases with at least one hearing scheduled for the specified date or within the specified date range.|**(Hearing:(hearingDate:[now TO now+10d]))** - Find cases where hearing is scheduled in next 10 days.| |**HearingDate**| Search for cases where hearing is going to happen in 10 to 20days.|**(Hearing:(hearingDate:[now+10d TO now+20d]))** - Find cases where hearing is scheduled in next 10 to 20 days.| |**JurisdictionGeo**|Find cases in which the law of the specified state governs.|**(JurisdictionGeo:(state:\"New York\"))**- Find cases where Jurisdiction is New York state.| |**Party Address Exists**|Find cases with Party addresses.|**(Party:(Contact:(Address:(stateName:\\*))))**- Returns only those cases that have addresses for parties.| |**Document**|Find cases with specific document name and preview is available for the document.|**(CaseDocument:(name:\"civil case cover sheet\" AND isPreviewAvailable:true))**- Returns cases with document civil case cover sheet and preview is available.|  <br><br> --- ## Party Sub Filter Examples |Example |Explanation | |---|---| |**(Party:(name:google AND (PartyRole:(name:\"plaintiff\"))))**|Find cases involving at least one plaintiff whose name contains the term \"Google\".| |**(Party:(name:\"OTELIA PEREIDA\" AND (AttorneyRepresentationType:(name:\"Attorney represented\")))) AND (Attorney:(name:\"Law Offices of Todd M Friedman\"))**|Find cases where the Party is *OTELIA PEREIDA* and is represented by the attorney *Law Offices of Todd M Friedman*.|  --- ### All query parameters supported for this API can be found in below schema section. Schema -->  CaseSearchQueryObject 
     * Case search.
     * @param param the request object
     */
    public searchCases(param: CaseSearchAPIApiSearchCasesRequest, options?: Configuration): Promise<SearchCases200Response> {
        return this.api.searchCases(param.q, param.sort, param.order, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve the search results corresponding to the specified caseSearchId value. 
     * Case search results for a given caseSearchId.
     * @param param the request object
     */
    public searchCasesByIdWithHttpInfo(param: CaseSearchAPIApiSearchCasesByIdRequest, options?: Configuration): Promise<HttpInfo<SearchCases200Response>> {
        return this.api.searchCasesByIdWithHttpInfo(param.caseSearchId, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve the search results corresponding to the specified caseSearchId value. 
     * Case search results for a given caseSearchId.
     * @param param the request object
     */
    public searchCasesById(param: CaseSearchAPIApiSearchCasesByIdRequest, options?: Configuration): Promise<SearchCases200Response> {
        return this.api.searchCasesById(param.caseSearchId, param.pageNumber,  options).toPromise();
    }

}

import { ObservableCaseTrackingAPIApi } from "./ObservableAPI";
import { CaseTrackingAPIApiRequestFactory, CaseTrackingAPIApiResponseProcessor} from "../apis/CaseTrackingAPIApi";

export interface CaseTrackingAPIApiGetCaseTrackByIdRequest {
    /**
     * The caseId value for which case tracking information is to be retrieved.
     * @type string
     * @memberof CaseTrackingAPIApigetCaseTrackById
     */
    caseId: string
}

export interface CaseTrackingAPIApiGetCaseTracksRequest {
    /**
     * The lastFetchDate value of the tracked case. The date value should be entered in the format YYYY-MM-DDTHH:MM:SS+ZZ:zz. 
     * @type Date
     * @memberof CaseTrackingAPIApigetCaseTracks
     */
    lastFetchDate?: Date
    /**
     * The date on which changes were last found in the case information. 
     * @type Date
     * @memberof CaseTrackingAPIApigetCaseTracks
     */
    lastFetchDateWithUpdates?: Date
    /**
     * The page number of the results to be retrieved.&lt;br&gt;   - Minimum: 1 
     * @type number
     * @memberof CaseTrackingAPIApigetCaseTracks
     */
    pageNumber?: number
}

export interface CaseTrackingAPIApiRemoveCaseTrackByIdRequest {
    /**
     * The caseId value for which case tracking information is to be retrieved.
     * @type string
     * @memberof CaseTrackingAPIApiremoveCaseTrackById
     */
    caseId: string
}

export interface CaseTrackingAPIApiTrackCaseRequest {
    /**
     * 
     * @type TrackCaseRequest
     * @memberof CaseTrackingAPIApitrackCase
     */
    trackCaseRequest?: TrackCaseRequest
}

export class ObjectCaseTrackingAPIApi {
    private api: ObservableCaseTrackingAPIApi

    public constructor(configuration: Configuration, requestFactory?: CaseTrackingAPIApiRequestFactory, responseProcessor?: CaseTrackingAPIApiResponseProcessor) {
        this.api = new ObservableCaseTrackingAPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve case tracking information for the specified caseId value.
     * Get Case Track for a requested Case Id.
     * @param param the request object
     */
    public getCaseTrackByIdWithHttpInfo(param: CaseTrackingAPIApiGetCaseTrackByIdRequest, options?: Configuration): Promise<HttpInfo<CaseTrackPostRequest>> {
        return this.api.getCaseTrackByIdWithHttpInfo(param.caseId,  options).toPromise();
    }

    /**
     * Retrieve case tracking information for the specified caseId value.
     * Get Case Track for a requested Case Id.
     * @param param the request object
     */
    public getCaseTrackById(param: CaseTrackingAPIApiGetCaseTrackByIdRequest, options?: Configuration): Promise<CaseTrackPostRequest> {
        return this.api.getCaseTrackById(param.caseId,  options).toPromise();
    }

    /**
     * Retrieve a list of all tracked cases.
     * Get Case Track list.
     * @param param the request object
     */
    public getCaseTracksWithHttpInfo(param: CaseTrackingAPIApiGetCaseTracksRequest = {}, options?: Configuration): Promise<HttpInfo<GetCaseTracks200Response>> {
        return this.api.getCaseTracksWithHttpInfo(param.lastFetchDate, param.lastFetchDateWithUpdates, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve a list of all tracked cases.
     * Get Case Track list.
     * @param param the request object
     */
    public getCaseTracks(param: CaseTrackingAPIApiGetCaseTracksRequest = {}, options?: Configuration): Promise<GetCaseTracks200Response> {
        return this.api.getCaseTracks(param.lastFetchDate, param.lastFetchDateWithUpdates, param.pageNumber,  options).toPromise();
    }

    /**
     * Remove Case Track for a specific Case Id.
     * Remove Case Track for a specific Case Id.
     * @param param the request object
     */
    public removeCaseTrackByIdWithHttpInfo(param: CaseTrackingAPIApiRemoveCaseTrackByIdRequest, options?: Configuration): Promise<HttpInfo<Success1>> {
        return this.api.removeCaseTrackByIdWithHttpInfo(param.caseId,  options).toPromise();
    }

    /**
     * Remove Case Track for a specific Case Id.
     * Remove Case Track for a specific Case Id.
     * @param param the request object
     */
    public removeCaseTrackById(param: CaseTrackingAPIApiRemoveCaseTrackByIdRequest, options?: Configuration): Promise<Success1> {
        return this.api.removeCaseTrackById(param.caseId,  options).toPromise();
    }

    /**
     * Track the specified case.
     * Add Case Track for the requested Case Id.
     * @param param the request object
     */
    public trackCaseWithHttpInfo(param: CaseTrackingAPIApiTrackCaseRequest = {}, options?: Configuration): Promise<HttpInfo<Success1>> {
        return this.api.trackCaseWithHttpInfo(param.trackCaseRequest,  options).toPromise();
    }

    /**
     * Track the specified case.
     * Add Case Track for the requested Case Id.
     * @param param the request object
     */
    public trackCase(param: CaseTrackingAPIApiTrackCaseRequest = {}, options?: Configuration): Promise<Success1> {
        return this.api.trackCase(param.trackCaseRequest,  options).toPromise();
    }

}

import { ObservableCaseUpdateAPIApi } from "./ObservableAPI";
import { CaseUpdateAPIApiRequestFactory, CaseUpdateAPIApiResponseProcessor} from "../apis/CaseUpdateAPIApi";

export interface CaseUpdateAPIApiGetCaseUpdateByCaseIdRequest {
    /**
     * The caseId value of the case object for which updates are to be retrieved.
     * @type string
     * @memberof CaseUpdateAPIApigetCaseUpdateByCaseId
     */
    caseId: string
}

export interface CaseUpdateAPIApiGetCaseUpdatesRequest {
    /**
     * The caseId value of the case for which updates should be retrieved.
     * @type string
     * @memberof CaseUpdateAPIApigetCaseUpdates
     */
    caseId?: string
    /**
     * The date for which case updates are to be retrieved.
     * @type Date
     * @memberof CaseUpdateAPIApigetCaseUpdates
     */
    requestedDate?: Date
    /**
     * Status of the case updates to be retrieved.
     * @type &#39;IN_PROGRESS&#39; | &#39;COMPLETE&#39; | &#39;FAILURE&#39;
     * @memberof CaseUpdateAPIApigetCaseUpdates
     */
    status?: 'IN_PROGRESS' | 'COMPLETE' | 'FAILURE'
    /**
     * The page number of the callbacks to be retrieved.&lt;br&gt;   - Minimum: 1 
     * @type number
     * @memberof CaseUpdateAPIApigetCaseUpdates
     */
    pageNumber?: number
}

export interface CaseUpdateAPIApiUpdateCaseRequest {
    /**
     * 
     * @type UpdateCaseRequest
     * @memberof CaseUpdateAPIApiupdateCase
     */
    updateCaseRequest?: UpdateCaseRequest
}

export class ObjectCaseUpdateAPIApi {
    private api: ObservableCaseUpdateAPIApi

    public constructor(configuration: Configuration, requestFactory?: CaseUpdateAPIApiRequestFactory, responseProcessor?: CaseUpdateAPIApiResponseProcessor) {
        this.api = new ObservableCaseUpdateAPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve case updates for the specified case object.
     * Get Case Updates for a requested CaseId.
     * @param param the request object
     */
    public getCaseUpdateByCaseIdWithHttpInfo(param: CaseUpdateAPIApiGetCaseUpdateByCaseIdRequest, options?: Configuration): Promise<HttpInfo<UpdateCase200Response>> {
        return this.api.getCaseUpdateByCaseIdWithHttpInfo(param.caseId,  options).toPromise();
    }

    /**
     * Retrieve case updates for the specified case object.
     * Get Case Updates for a requested CaseId.
     * @param param the request object
     */
    public getCaseUpdateByCaseId(param: CaseUpdateAPIApiGetCaseUpdateByCaseIdRequest, options?: Configuration): Promise<UpdateCase200Response> {
        return this.api.getCaseUpdateByCaseId(param.caseId,  options).toPromise();
    }

    /**
     * Retrieve case updates for the specified date.
     * Get Case Update  list for a requested Date.
     * @param param the request object
     */
    public getCaseUpdatesWithHttpInfo(param: CaseUpdateAPIApiGetCaseUpdatesRequest = {}, options?: Configuration): Promise<HttpInfo<GetCaseUpdates200Response>> {
        return this.api.getCaseUpdatesWithHttpInfo(param.caseId, param.requestedDate, param.status, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve case updates for the specified date.
     * Get Case Update  list for a requested Date.
     * @param param the request object
     */
    public getCaseUpdates(param: CaseUpdateAPIApiGetCaseUpdatesRequest = {}, options?: Configuration): Promise<GetCaseUpdates200Response> {
        return this.api.getCaseUpdates(param.caseId, param.requestedDate, param.status, param.pageNumber,  options).toPromise();
    }

    /**
     * Request case updates for the specified case.
     * Add Case Update for the requested Case Id.
     * @param param the request object
     */
    public updateCaseWithHttpInfo(param: CaseUpdateAPIApiUpdateCaseRequest = {}, options?: Configuration): Promise<HttpInfo<UpdateCase200Response>> {
        return this.api.updateCaseWithHttpInfo(param.updateCaseRequest,  options).toPromise();
    }

    /**
     * Request case updates for the specified case.
     * Add Case Update for the requested Case Id.
     * @param param the request object
     */
    public updateCase(param: CaseUpdateAPIApiUpdateCaseRequest = {}, options?: Configuration): Promise<UpdateCase200Response> {
        return this.api.updateCase(param.updateCaseRequest,  options).toPromise();
    }

}

import { ObservableCourtAvailabilityAPIApi } from "./ObservableAPI";
import { CourtAvailabilityAPIApiRequestFactory, CourtAvailabilityAPIApiResponseProcessor} from "../apis/CourtAvailabilityAPIApi";

export interface CourtAvailabilityAPIApiGetCourtCoverageRequest {
    /**
     * The courtId value of the target court.
     * @type string
     * @memberof CourtAvailabilityAPIApigetCourtCoverage
     */
    courtId: string
}

export class ObjectCourtAvailabilityAPIApi {
    private api: ObservableCourtAvailabilityAPIApi

    public constructor(configuration: Configuration, requestFactory?: CourtAvailabilityAPIApiRequestFactory, responseProcessor?: CourtAvailabilityAPIApiResponseProcessor) {
        this.api = new ObservableCourtAvailabilityAPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Determine whether the specified court is covered by UniCourt.
     * Gets Court Coverage of all courts of specific type.
     * @param param the request object
     */
    public getCourtCoverageWithHttpInfo(param: CourtAvailabilityAPIApiGetCourtCoverageRequest, options?: Configuration): Promise<HttpInfo<GetCourtCoverage200Response>> {
        return this.api.getCourtCoverageWithHttpInfo(param.courtId,  options).toPromise();
    }

    /**
     * Determine whether the specified court is covered by UniCourt.
     * Gets Court Coverage of all courts of specific type.
     * @param param the request object
     */
    public getCourtCoverage(param: CourtAvailabilityAPIApiGetCourtCoverageRequest, options?: Configuration): Promise<GetCourtCoverage200Response> {
        return this.api.getCourtCoverage(param.courtId,  options).toPromise();
    }

}

import { ObservableCourtStandardsAPIApi } from "./ObservableAPI";
import { CourtStandardsAPIApiRequestFactory, CourtStandardsAPIApiResponseProcessor} from "../apis/CourtStandardsAPIApi";

export interface CourtStandardsAPIApiGetAppealCourtsForCourtRequest {
    /**
     * The courtId value of the target court.
     * @type string
     * @memberof CourtStandardsAPIApigetAppealCourtsForCourt
     */
    courtId: string
    /**
     * The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @type number
     * @memberof CourtStandardsAPIApigetAppealCourtsForCourt
     */
    pageNumber?: number
    /**
     * The field according to which search results are to be sorted.
     * @type &#39;name&#39;
     * @memberof CourtStandardsAPIApigetAppealCourtsForCourt
     */
    sort?: 'name'
    /**
     * Whether search results are to be shown in ascending or descending order.
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CourtStandardsAPIApigetAppealCourtsForCourt
     */
    order?: 'asc' | 'desc'
}

export interface CourtStandardsAPIApiGetAreaOfLawRequest {
    /**
     * The areaOfLawId value of the desired area of law.
     * @type string
     * @memberof CourtStandardsAPIApigetAreaOfLaw
     */
    areaOfLawId: string
}

export interface CourtStandardsAPIApiGetAreasOfLawRequest {
    /**
     * Retrieve one or more areas of law using a keyword expression. Keyword expressions should be constructed according to the rules given above.&lt;/a&gt; 
     * @type string
     * @memberof CourtStandardsAPIApigetAreasOfLaw
     */
    q?: string
    /**
     * The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @type number
     * @memberof CourtStandardsAPIApigetAreasOfLaw
     */
    pageNumber?: number
    /**
     * The field according to which search results are to be sorted.
     * @type &#39;name&#39;
     * @memberof CourtStandardsAPIApigetAreasOfLaw
     */
    sort?: 'name'
    /**
     * Whether search results are to be shown in ascending or descending order.
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CourtStandardsAPIApigetAreasOfLaw
     */
    order?: 'asc' | 'desc'
}

export interface CourtStandardsAPIApiGetAttorneyRepresentationTypeRequest {
    /**
     * The attorneyRepresentationTypeId value of the desired attorney representation type.
     * @type string
     * @memberof CourtStandardsAPIApigetAttorneyRepresentationType
     */
    attorneyRepresentationTypeId: string
}

export interface CourtStandardsAPIApiGetAttorneyRepresentationTypesRequest {
    /**
     * The keyword expression targeting the attorney representation type.&lt;/a&gt; 
     * @type string
     * @memberof CourtStandardsAPIApigetAttorneyRepresentationTypes
     */
    q?: string
    /**
     * The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @type number
     * @memberof CourtStandardsAPIApigetAttorneyRepresentationTypes
     */
    pageNumber?: number
    /**
     * The field according to which search results are to be sorted.
     * @type &#39;name&#39;
     * @memberof CourtStandardsAPIApigetAttorneyRepresentationTypes
     */
    sort?: 'name'
    /**
     * Whether search results are to be shown in ascending or descending order.
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CourtStandardsAPIApigetAttorneyRepresentationTypes
     */
    order?: 'asc' | 'desc'
}

export interface CourtStandardsAPIApiGetAttorneyTypeRequest {
    /**
     * The attorneyTypeId value of the desired attorney type.
     * @type string
     * @memberof CourtStandardsAPIApigetAttorneyType
     */
    attorneyTypeId: string
}

export interface CourtStandardsAPIApiGetAttorneyTypesRequest {
    /**
     * The keyword expression targeting the attorney type.&lt;/a&gt; 
     * @type string
     * @memberof CourtStandardsAPIApigetAttorneyTypes
     */
    q?: string
    /**
     * The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @type number
     * @memberof CourtStandardsAPIApigetAttorneyTypes
     */
    pageNumber?: number
    /**
     * The field according to which search results are to be sorted.
     * @type &#39;name&#39;
     * @memberof CourtStandardsAPIApigetAttorneyTypes
     */
    sort?: 'name'
    /**
     * Whether search results are to be shown in ascending or descending order.
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CourtStandardsAPIApigetAttorneyTypes
     */
    order?: 'asc' | 'desc'
}

export interface CourtStandardsAPIApiGetCaseClassRequest {
    /**
     * The caseClassId value of the desired case class.
     * @type string
     * @memberof CourtStandardsAPIApigetCaseClass
     */
    caseClassId: string
}

export interface CourtStandardsAPIApiGetCaseRelationshipTypeRequest {
    /**
     * The caseRelationshipTypeId value of the desired case relationship type.
     * @type string
     * @memberof CourtStandardsAPIApigetCaseRelationshipType
     */
    caseRelationshipTypeId: string
}

export interface CourtStandardsAPIApiGetCaseRelationshipTypesRequest {
    /**
     * The keyword expression targeting the case relationship type.&lt;/a&gt; 
     * @type string
     * @memberof CourtStandardsAPIApigetCaseRelationshipTypes
     */
    q?: string
    /**
     * The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @type number
     * @memberof CourtStandardsAPIApigetCaseRelationshipTypes
     */
    pageNumber?: number
    /**
     * The field according to which search results are to be sorted.
     * @type &#39;name&#39;
     * @memberof CourtStandardsAPIApigetCaseRelationshipTypes
     */
    sort?: 'name'
    /**
     * Whether search results are to be shown in ascending or descending order.
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CourtStandardsAPIApigetCaseRelationshipTypes
     */
    order?: 'asc' | 'desc'
}

export interface CourtStandardsAPIApiGetCaseStatusRequest {
    /**
     * The caseStatusId value of the desired case status.
     * @type string
     * @memberof CourtStandardsAPIApigetCaseStatus
     */
    caseStatusId: string
}

export interface CourtStandardsAPIApiGetCaseStatusGroupRequest {
    /**
     * The caseStatusGroupId value of the desired case status group.
     * @type string
     * @memberof CourtStandardsAPIApigetCaseStatusGroup
     */
    caseStatusGroupId: string
}

export interface CourtStandardsAPIApiGetCaseStatusGroupsRequest {
    /**
     * The keyword expression targeting the desired case status group.&lt;/a&gt; 
     * @type string
     * @memberof CourtStandardsAPIApigetCaseStatusGroups
     */
    q?: string
    /**
     * The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @type number
     * @memberof CourtStandardsAPIApigetCaseStatusGroups
     */
    pageNumber?: number
    /**
     * The field according to which search results are to be sorted.
     * @type &#39;name&#39;
     * @memberof CourtStandardsAPIApigetCaseStatusGroups
     */
    sort?: 'name'
    /**
     * Whether search results are to be shown in ascending or descending order.
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CourtStandardsAPIApigetCaseStatusGroups
     */
    order?: 'asc' | 'desc'
}

export interface CourtStandardsAPIApiGetCaseTypeRequest {
    /**
     * The caseTypeId value of the desired case type.
     * @type string
     * @memberof CourtStandardsAPIApigetCaseType
     */
    caseTypeId: string
}

export interface CourtStandardsAPIApiGetCaseTypeGroupRequest {
    /**
     * caseTypeGroupId
     * @type string
     * @memberof CourtStandardsAPIApigetCaseTypeGroup
     */
    caseTypeGroupId: string
}

export interface CourtStandardsAPIApiGetCaseTypeGroupsRequest {
    /**
     * Retrieve one or more case type groups using a keyword expression. Keyword expressions should be constructed according to the rules given above.&lt;/a&gt; 
     * @type string
     * @memberof CourtStandardsAPIApigetCaseTypeGroups
     */
    q?: string
    /**
     * The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @type number
     * @memberof CourtStandardsAPIApigetCaseTypeGroups
     */
    pageNumber?: number
    /**
     * The field according to which search results are to be sorted.
     * @type &#39;name&#39;
     * @memberof CourtStandardsAPIApigetCaseTypeGroups
     */
    sort?: 'name'
    /**
     * Whether search results are to be shown in ascending or descending order.
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CourtStandardsAPIApigetCaseTypeGroups
     */
    order?: 'asc' | 'desc'
}

export interface CourtStandardsAPIApiGetCaseTypesRequest {
    /**
     * Retrieve one or more case types using a keyword expression. Keyword expressions should be constructed according to the rules given above.&lt;/a&gt; 
     * @type string
     * @memberof CourtStandardsAPIApigetCaseTypes
     */
    q?: string
    /**
     * The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @type number
     * @memberof CourtStandardsAPIApigetCaseTypes
     */
    pageNumber?: number
    /**
     * The field according to which search results are to be sorted.
     * @type &#39;name&#39;
     * @memberof CourtStandardsAPIApigetCaseTypes
     */
    sort?: 'name'
    /**
     * Whether search results are to be shown in ascending or descending order.
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CourtStandardsAPIApigetCaseTypes
     */
    order?: 'asc' | 'desc'
}

export interface CourtStandardsAPIApiGetCasesClassRequest {
    /**
     * The keyword expression targeting the desired case class.&lt;/a&gt; 
     * @type string
     * @memberof CourtStandardsAPIApigetCasesClass
     */
    q?: string
    /**
     * The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @type number
     * @memberof CourtStandardsAPIApigetCasesClass
     */
    pageNumber?: number
    /**
     * The field according to which search results are to be sorted.
     * @type &#39;name&#39;
     * @memberof CourtStandardsAPIApigetCasesClass
     */
    sort?: 'name'
    /**
     * Whether search results are to be shown in ascending or descending order.
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CourtStandardsAPIApigetCasesClass
     */
    order?: 'asc' | 'desc'
}

export interface CourtStandardsAPIApiGetCasesStatusRequest {
    /**
     * The keyword expression targeting the desired case status.&lt;/a&gt; 
     * @type string
     * @memberof CourtStandardsAPIApigetCasesStatus
     */
    q?: string
    /**
     * The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @type number
     * @memberof CourtStandardsAPIApigetCasesStatus
     */
    pageNumber?: number
    /**
     * The field according to which search results are to be sorted.
     * @type &#39;name&#39;
     * @memberof CourtStandardsAPIApigetCasesStatus
     */
    sort?: 'name'
    /**
     * Whether search results are to be shown in ascending or descending order.
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CourtStandardsAPIApigetCasesStatus
     */
    order?: 'asc' | 'desc'
}

export interface CourtStandardsAPIApiGetCauseOfActionRequest {
    /**
     * The causeOfActionId value of the desired cause of action.
     * @type string
     * @memberof CourtStandardsAPIApigetCauseOfAction
     */
    causeOfActionId: string
}

export interface CourtStandardsAPIApiGetCauseOfActionAdditionalDataRequest {
    /**
     * The causeOfActionAdditionalDataId value of the desired cause of action additional data.
     * @type string
     * @memberof CourtStandardsAPIApigetCauseOfActionAdditionalData
     */
    causeOfActionAdditionalDataId: string
}

export interface CourtStandardsAPIApiGetCauseOfActionGroupRequest {
    /**
     * causeOfActionGroupId
     * @type string
     * @memberof CourtStandardsAPIApigetCauseOfActionGroup
     */
    causeOfActionGroupId: string
}

export interface CourtStandardsAPIApiGetCausesOfActionRequest {
    /**
     * The keyword expression targeting the desired cause of action.&lt;/a&gt; 
     * @type string
     * @memberof CourtStandardsAPIApigetCausesOfAction
     */
    q?: string
    /**
     * The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @type number
     * @memberof CourtStandardsAPIApigetCausesOfAction
     */
    pageNumber?: number
    /**
     * The field according to which search results are to be sorted.
     * @type &#39;name&#39;
     * @memberof CourtStandardsAPIApigetCausesOfAction
     */
    sort?: 'name'
    /**
     * Whether search results are to be shown in ascending or descending order.
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CourtStandardsAPIApigetCausesOfAction
     */
    order?: 'asc' | 'desc'
}

export interface CourtStandardsAPIApiGetCausesOfActionAdditionalDataRequest {
    /**
     * The keyword expression targeting the desired cause of action additional data.&lt;/a&gt; 
     * @type string
     * @memberof CourtStandardsAPIApigetCausesOfActionAdditionalData
     */
    q?: string
    /**
     * The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @type number
     * @memberof CourtStandardsAPIApigetCausesOfActionAdditionalData
     */
    pageNumber?: number
    /**
     * The field according to which search results are to be sorted.
     * @type &#39;name&#39;
     * @memberof CourtStandardsAPIApigetCausesOfActionAdditionalData
     */
    sort?: 'name'
    /**
     * Whether search results are to be shown in ascending or descending order.
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CourtStandardsAPIApigetCausesOfActionAdditionalData
     */
    order?: 'asc' | 'desc'
}

export interface CourtStandardsAPIApiGetCausesOfActionGroupRequest {
    /**
     * The keyword expression targeting the desired cause of action group.&lt;/a&gt; 
     * @type string
     * @memberof CourtStandardsAPIApigetCausesOfActionGroup
     */
    q?: string
    /**
     * The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @type number
     * @memberof CourtStandardsAPIApigetCausesOfActionGroup
     */
    pageNumber?: number
    /**
     * The field according to which search results are to be sorted.
     * @type &#39;name&#39;
     * @memberof CourtStandardsAPIApigetCausesOfActionGroup
     */
    sort?: 'name'
    /**
     * Whether search results are to be shown in ascending or descending order.
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CourtStandardsAPIApigetCausesOfActionGroup
     */
    order?: 'asc' | 'desc'
}

export interface CourtStandardsAPIApiGetChargeRequest {
    /**
     * The chargeId value of the desired charge.
     * @type string
     * @memberof CourtStandardsAPIApigetCharge
     */
    chargeId: string
}

export interface CourtStandardsAPIApiGetChargeAdditionalDataRequest {
    /**
     * The chargeAdditionalDataId value of the desired charge additional data.
     * @type string
     * @memberof CourtStandardsAPIApigetChargeAdditionalData
     */
    chargeAdditionalDataId: string
}

export interface CourtStandardsAPIApiGetChargeDegreeRequest {
    /**
     * The chargeDegreeId value of the desired charge degree.
     * @type string
     * @memberof CourtStandardsAPIApigetChargeDegree
     */
    chargeDegreeId: string
}

export interface CourtStandardsAPIApiGetChargeGroupRequest {
    /**
     * The chargeGroupId value of the desired charge group.
     * @type string
     * @memberof CourtStandardsAPIApigetChargeGroup
     */
    chargeGroupId: string
}

export interface CourtStandardsAPIApiGetChargeGroupsRequest {
    /**
     * The keyword expression targeting the desired charge group.&lt;/a&gt; 
     * @type string
     * @memberof CourtStandardsAPIApigetChargeGroups
     */
    q?: string
    /**
     * The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @type number
     * @memberof CourtStandardsAPIApigetChargeGroups
     */
    pageNumber?: number
    /**
     * The field according to which search results are to be sorted.
     * @type &#39;name&#39;
     * @memberof CourtStandardsAPIApigetChargeGroups
     */
    sort?: 'name'
    /**
     * Whether search results are to be shown in ascending or descending order.
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CourtStandardsAPIApigetChargeGroups
     */
    order?: 'asc' | 'desc'
}

export interface CourtStandardsAPIApiGetChargeSeverityRequest {
    /**
     * The chargeSeverityId value of the desired charge severity.
     * @type string
     * @memberof CourtStandardsAPIApigetChargeSeverity
     */
    chargeSeverityId: string
}

export interface CourtStandardsAPIApiGetChargesRequest {
    /**
     * The keyword expression targeting the desired charge.&lt;/a&gt; 
     * @type string
     * @memberof CourtStandardsAPIApigetCharges
     */
    q?: string
    /**
     * The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @type number
     * @memberof CourtStandardsAPIApigetCharges
     */
    pageNumber?: number
    /**
     * The field according to which search results are to be sorted.
     * @type &#39;name&#39;
     * @memberof CourtStandardsAPIApigetCharges
     */
    sort?: 'name'
    /**
     * Whether search results are to be shown in ascending or descending order.
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CourtStandardsAPIApigetCharges
     */
    order?: 'asc' | 'desc'
}

export interface CourtStandardsAPIApiGetChargesAdditionalDataRequest {
    /**
     * The keyword expression targeting the desired charge additional data.&lt;/a&gt; 
     * @type string
     * @memberof CourtStandardsAPIApigetChargesAdditionalData
     */
    q?: string
    /**
     * The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @type number
     * @memberof CourtStandardsAPIApigetChargesAdditionalData
     */
    pageNumber?: number
    /**
     * The field according to which search results are to be sorted.
     * @type &#39;name&#39;
     * @memberof CourtStandardsAPIApigetChargesAdditionalData
     */
    sort?: 'name'
    /**
     * Whether search results are to be shown in ascending or descending order.
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CourtStandardsAPIApigetChargesAdditionalData
     */
    order?: 'asc' | 'desc'
}

export interface CourtStandardsAPIApiGetChargesDegreeRequest {
    /**
     * The keyword expression targeting the desired charge degree.&lt;/a&gt; 
     * @type string
     * @memberof CourtStandardsAPIApigetChargesDegree
     */
    q?: string
    /**
     * The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @type number
     * @memberof CourtStandardsAPIApigetChargesDegree
     */
    pageNumber?: number
    /**
     * The field according to which search results are to be sorted.
     * @type &#39;name&#39;
     * @memberof CourtStandardsAPIApigetChargesDegree
     */
    sort?: 'name'
    /**
     * Whether search results are to be shown in ascending or descending order.
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CourtStandardsAPIApigetChargesDegree
     */
    order?: 'asc' | 'desc'
}

export interface CourtStandardsAPIApiGetChargesSeverityRequest {
    /**
     * The keyword expression targeting the desired charge severity.&lt;/a&gt; 
     * @type string
     * @memberof CourtStandardsAPIApigetChargesSeverity
     */
    q?: string
    /**
     * The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @type number
     * @memberof CourtStandardsAPIApigetChargesSeverity
     */
    pageNumber?: number
    /**
     * The field according to which search results are to be sorted.
     * @type &#39;name&#39;
     * @memberof CourtStandardsAPIApigetChargesSeverity
     */
    sort?: 'name'
    /**
     * Whether search results are to be shown in ascending or descending order.
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CourtStandardsAPIApigetChargesSeverity
     */
    order?: 'asc' | 'desc'
}

export interface CourtStandardsAPIApiGetCourtRequest {
    /**
     * The courtId value of the target court.
     * @type string
     * @memberof CourtStandardsAPIApigetCourt
     */
    courtId: string
}

export interface CourtStandardsAPIApiGetCourtLocationRequest {
    /**
     * courtLocationId
     * @type string
     * @memberof CourtStandardsAPIApigetCourtLocation
     */
    courtLocationId: string
}

export interface CourtStandardsAPIApiGetCourtLocationsRequest {
    /**
     * The keyword expression that sets forth the criteria concerning the court location or court locations to target. Keyword expressions should be constructed according to the rules shown above.&lt;/a&gt; 
     * @type string
     * @memberof CourtStandardsAPIApigetCourtLocations
     */
    q?: string
    /**
     * The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @type number
     * @memberof CourtStandardsAPIApigetCourtLocations
     */
    pageNumber?: number
    /**
     * The field according to which search results are to be sorted.
     * @type &#39;name&#39;
     * @memberof CourtStandardsAPIApigetCourtLocations
     */
    sort?: 'name'
    /**
     * Whether search results are to be shown in ascending or descending order.
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CourtStandardsAPIApigetCourtLocations
     */
    order?: 'asc' | 'desc'
}

export interface CourtStandardsAPIApiGetCourtLocationsForCourtRequest {
    /**
     * The courtId value of the target court.
     * @type string
     * @memberof CourtStandardsAPIApigetCourtLocationsForCourt
     */
    courtId: string
    /**
     * The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @type number
     * @memberof CourtStandardsAPIApigetCourtLocationsForCourt
     */
    pageNumber?: number
    /**
     * The field according to which search results are to be sorted.
     * @type &#39;name&#39;
     * @memberof CourtStandardsAPIApigetCourtLocationsForCourt
     */
    sort?: 'name'
    /**
     * Whether search results are to be shown in ascending or descending order.
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CourtStandardsAPIApigetCourtLocationsForCourt
     */
    order?: 'asc' | 'desc'
}

export interface CourtStandardsAPIApiGetCourtServiceStatusRequest {
    /**
     * The courtServiceStatusId value of the desired court.
     * @type string
     * @memberof CourtStandardsAPIApigetCourtServiceStatus
     */
    courtServiceStatusId: string
}

export interface CourtStandardsAPIApiGetCourtSystemRequest {
    /**
     * The courtSystemId value of the court system to be retrieved.
     * @type string
     * @memberof CourtStandardsAPIApigetCourtSystem
     */
    courtSystemId: string
}

export interface CourtStandardsAPIApiGetCourtSystemsRequest {
    /**
     * The keyword expression that sets forth the criteria concerning the court system or court systems. Keyword expressions should be constructed according to the rules shown above.&lt;/a&gt; 
     * @type string
     * @memberof CourtStandardsAPIApigetCourtSystems
     */
    q?: string
    /**
     * The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @type number
     * @memberof CourtStandardsAPIApigetCourtSystems
     */
    pageNumber?: number
    /**
     * The field according to which search results are to be sorted.
     * @type &#39;name&#39;
     * @memberof CourtStandardsAPIApigetCourtSystems
     */
    sort?: 'name'
    /**
     * Whether search results are to be shown in ascending or descending order.
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CourtStandardsAPIApigetCourtSystems
     */
    order?: 'asc' | 'desc'
}

export interface CourtStandardsAPIApiGetCourtTypeRequest {
    /**
     * The courtTypeId value of the court type to be retrieved.
     * @type string
     * @memberof CourtStandardsAPIApigetCourtType
     */
    courtTypeId: string
}

export interface CourtStandardsAPIApiGetCourtTypesRequest {
    /**
     * The keyword expression that sets forth the criteria concerning the court type or court types. Keyword expressions should be constructed according to the rules shown above.&lt;/a&gt; 
     * @type string
     * @memberof CourtStandardsAPIApigetCourtTypes
     */
    q?: string
    /**
     * The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @type number
     * @memberof CourtStandardsAPIApigetCourtTypes
     */
    pageNumber?: number
    /**
     * The field according to which search results are to be sorted.
     * @type &#39;name&#39;
     * @memberof CourtStandardsAPIApigetCourtTypes
     */
    sort?: 'name'
    /**
     * Whether search results are to be shown in ascending or descending order.
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CourtStandardsAPIApigetCourtTypes
     */
    order?: 'asc' | 'desc'
}

export interface CourtStandardsAPIApiGetCourtsRequest {
    /**
     * The keyword expression that sets forth the criteria concerning the court or courts to be retrieved. Keyword expressions should be constructed according to the rules shown above.&lt;/a&gt; 
     * @type string
     * @memberof CourtStandardsAPIApigetCourts
     */
    q?: string
    /**
     * The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @type number
     * @memberof CourtStandardsAPIApigetCourts
     */
    pageNumber?: number
    /**
     * The field according to which search results are to be sorted.
     * @type &#39;name&#39;
     * @memberof CourtStandardsAPIApigetCourts
     */
    sort?: 'name'
    /**
     * Whether search results are to be shown in ascending or descending order.
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CourtStandardsAPIApigetCourts
     */
    order?: 'asc' | 'desc'
}

export interface CourtStandardsAPIApiGetCourtsForCourtLocationRequest {
    /**
     * The courtLocationId value of the court location for which courts are to be retrieved.
     * @type string
     * @memberof CourtStandardsAPIApigetCourtsForCourtLocation
     */
    courtLocationId: string
    /**
     * The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @type number
     * @memberof CourtStandardsAPIApigetCourtsForCourtLocation
     */
    pageNumber?: number
    /**
     * The field according to which search results are to be sorted.
     * @type &#39;name&#39;
     * @memberof CourtStandardsAPIApigetCourtsForCourtLocation
     */
    sort?: 'name'
    /**
     * Whether search results are to be shown in ascending or descending order.
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CourtStandardsAPIApigetCourtsForCourtLocation
     */
    order?: 'asc' | 'desc'
}

export interface CourtStandardsAPIApiGetCourtsForJurisdictionGeoRequest {
    /**
     * jurisdictionGeoId
     * @type string
     * @memberof CourtStandardsAPIApigetCourtsForJurisdictionGeo
     */
    jurisdictionGeoId: string
    /**
     * Page number. - minimum: 1 - maximum: 100 
     * @type number
     * @memberof CourtStandardsAPIApigetCourtsForJurisdictionGeo
     */
    pageNumber?: number
    /**
     * Sort field.
     * @type &#39;name&#39;
     * @memberof CourtStandardsAPIApigetCourtsForJurisdictionGeo
     */
    sort?: 'name'
    /**
     * Sort order.
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CourtStandardsAPIApigetCourtsForJurisdictionGeo
     */
    order?: 'asc' | 'desc'
}

export interface CourtStandardsAPIApiGetCourtsServiceStatusRequest {
    /**
     * The keyword expression targeting the desired court. Keyword expressions should be constructed according to the rules given above.&lt;/a&gt; 
     * @type string
     * @memberof CourtStandardsAPIApigetCourtsServiceStatus
     */
    q?: string
    /**
     * The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @type number
     * @memberof CourtStandardsAPIApigetCourtsServiceStatus
     */
    pageNumber?: number
    /**
     * The field according to which search results are to be sorted.
     * @type &#39;name&#39;
     * @memberof CourtStandardsAPIApigetCourtsServiceStatus
     */
    sort?: 'name'
    /**
     * Whether search results are to be shown in ascending or descending order.
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CourtStandardsAPIApigetCourtsServiceStatus
     */
    order?: 'asc' | 'desc'
}

export interface CourtStandardsAPIApiGetJudgeTypeRequest {
    /**
     * The judgeTypeId of the desired judge type.
     * @type string
     * @memberof CourtStandardsAPIApigetJudgeType
     */
    judgeTypeId: string
}

export interface CourtStandardsAPIApiGetJudgeTypesRequest {
    /**
     * The keyword expression targeting the judge type.&lt;/a&gt; 
     * @type string
     * @memberof CourtStandardsAPIApigetJudgeTypes
     */
    q?: string
    /**
     * The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @type number
     * @memberof CourtStandardsAPIApigetJudgeTypes
     */
    pageNumber?: number
    /**
     * The field according to which search results are to be sorted.
     * @type &#39;name&#39;
     * @memberof CourtStandardsAPIApigetJudgeTypes
     */
    sort?: 'name'
    /**
     * Whether search results are to be shown in ascending or descending order.
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CourtStandardsAPIApigetJudgeTypes
     */
    order?: 'asc' | 'desc'
}

export interface CourtStandardsAPIApiGetJurisdictionGeoRequest {
    /**
     * The jurisdictionGeoId value of the desired jurisdiction geography.
     * @type string
     * @memberof CourtStandardsAPIApigetJurisdictionGeo
     */
    jurisdictionGeoId: string
}

export interface CourtStandardsAPIApiGetJurisdictionGeoForCourtRequest {
    /**
     * The courtId value of the target court.
     * @type string
     * @memberof CourtStandardsAPIApigetJurisdictionGeoForCourt
     */
    courtId: string
    /**
     * The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @type number
     * @memberof CourtStandardsAPIApigetJurisdictionGeoForCourt
     */
    pageNumber?: number
    /**
     * The field according to which search results are to be sorted.
     * @type &#39;state&#39;
     * @memberof CourtStandardsAPIApigetJurisdictionGeoForCourt
     */
    sort?: 'state'
    /**
     * Whether search results are to be shown in ascending or descending order.
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CourtStandardsAPIApigetJurisdictionGeoForCourt
     */
    order?: 'asc' | 'desc'
}

export interface CourtStandardsAPIApiGetJurisdictionsGeoRequest {
    /**
     * The keyword expression targeting the desired jurisdiction geography. Keyword expressions should be constructed according to the rules given above.&lt;/a&gt; 
     * @type string
     * @memberof CourtStandardsAPIApigetJurisdictionsGeo
     */
    q?: string
    /**
     * The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @type number
     * @memberof CourtStandardsAPIApigetJurisdictionsGeo
     */
    pageNumber?: number
    /**
     * The field according to which search results are to be sorted.
     * @type &#39;state&#39;
     * @memberof CourtStandardsAPIApigetJurisdictionsGeo
     */
    sort?: 'state'
    /**
     * Whether search results are to be shown in ascending or descending order.
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CourtStandardsAPIApigetJurisdictionsGeo
     */
    order?: 'asc' | 'desc'
}

export interface CourtStandardsAPIApiGetPartyRoleRequest {
    /**
     * The partyRoleId value of the desired party role.
     * @type string
     * @memberof CourtStandardsAPIApigetPartyRole
     */
    partyRoleId: string
}

export interface CourtStandardsAPIApiGetPartyRoleGroupRequest {
    /**
     * The partyRoleGroupId value of the desired party role group.
     * @type string
     * @memberof CourtStandardsAPIApigetPartyRoleGroup
     */
    partyRoleGroupId: string
}

export interface CourtStandardsAPIApiGetPartyRoleGroupsRequest {
    /**
     * The keyword expression targeting the desired party role group.&lt;/a&gt; 
     * @type string
     * @memberof CourtStandardsAPIApigetPartyRoleGroups
     */
    q?: string
    /**
     * The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @type number
     * @memberof CourtStandardsAPIApigetPartyRoleGroups
     */
    pageNumber?: number
    /**
     * The field according to which search results are to be sorted.
     * @type &#39;name&#39;
     * @memberof CourtStandardsAPIApigetPartyRoleGroups
     */
    sort?: 'name'
    /**
     * Whether search results are to be shown in ascending or descending order.
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CourtStandardsAPIApigetPartyRoleGroups
     */
    order?: 'asc' | 'desc'
}

export interface CourtStandardsAPIApiGetPartyRolesRequest {
    /**
     * The keyword expression targeting the desired party role.&lt;/a&gt; 
     * @type string
     * @memberof CourtStandardsAPIApigetPartyRoles
     */
    q?: string
    /**
     * The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @type number
     * @memberof CourtStandardsAPIApigetPartyRoles
     */
    pageNumber?: number
    /**
     * The field according to which search results are to be sorted.
     * @type &#39;name&#39;
     * @memberof CourtStandardsAPIApigetPartyRoles
     */
    sort?: 'name'
    /**
     * Whether search results are to be shown in ascending or descending order.
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CourtStandardsAPIApigetPartyRoles
     */
    order?: 'asc' | 'desc'
}

export class ObjectCourtStandardsAPIApi {
    private api: ObservableCourtStandardsAPIApi

    public constructor(configuration: Configuration, requestFactory?: CourtStandardsAPIApiRequestFactory, responseProcessor?: CourtStandardsAPIApiResponseProcessor) {
        this.api = new ObservableCourtStandardsAPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve the appeals courts associated with the specified court. 
     * Appeal Court Objects for given courtId.
     * @param param the request object
     */
    public getAppealCourtsForCourtWithHttpInfo(param: CourtStandardsAPIApiGetAppealCourtsForCourtRequest, options?: Configuration): Promise<HttpInfo<GetCourts200Response>> {
        return this.api.getAppealCourtsForCourtWithHttpInfo(param.courtId, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve the appeals courts associated with the specified court. 
     * Appeal Court Objects for given courtId.
     * @param param the request object
     */
    public getAppealCourtsForCourt(param: CourtStandardsAPIApiGetAppealCourtsForCourtRequest, options?: Configuration): Promise<GetCourts200Response> {
        return this.api.getAppealCourtsForCourt(param.courtId, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve the specified area of law. 
     * AreaOfLaw Object for the given AreaOfLaw Id.
     * @param param the request object
     */
    public getAreaOfLawWithHttpInfo(param: CourtStandardsAPIApiGetAreaOfLawRequest, options?: Configuration): Promise<HttpInfo<AreaOfLaw1>> {
        return this.api.getAreaOfLawWithHttpInfo(param.areaOfLawId,  options).toPromise();
    }

    /**
     * Retrieve the specified area of law. 
     * AreaOfLaw Object for the given AreaOfLaw Id.
     * @param param the request object
     */
    public getAreaOfLaw(param: CourtStandardsAPIApiGetAreaOfLawRequest, options?: Configuration): Promise<AreaOfLaw1> {
        return this.api.getAreaOfLaw(param.areaOfLawId,  options).toPromise();
    }

    /**
     * The keyword expression targeting the desired area of law.   ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> AreaOfLawQueryObject 
     * AreaOfLaw Object.
     * @param param the request object
     */
    public getAreasOfLawWithHttpInfo(param: CourtStandardsAPIApiGetAreasOfLawRequest = {}, options?: Configuration): Promise<HttpInfo<GetAreasOfLaw200Response>> {
        return this.api.getAreasOfLawWithHttpInfo(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * The keyword expression targeting the desired area of law.   ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> AreaOfLawQueryObject 
     * AreaOfLaw Object.
     * @param param the request object
     */
    public getAreasOfLaw(param: CourtStandardsAPIApiGetAreasOfLawRequest = {}, options?: Configuration): Promise<GetAreasOfLaw200Response> {
        return this.api.getAreasOfLaw(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve the specified attorney representation type. 
     * Attorney Representation Type Object for the given attorneyRepresentationTypeId.
     * @param param the request object
     */
    public getAttorneyRepresentationTypeWithHttpInfo(param: CourtStandardsAPIApiGetAttorneyRepresentationTypeRequest, options?: Configuration): Promise<HttpInfo<AttorneyRepresentationType1>> {
        return this.api.getAttorneyRepresentationTypeWithHttpInfo(param.attorneyRepresentationTypeId,  options).toPromise();
    }

    /**
     * Retrieve the specified attorney representation type. 
     * Attorney Representation Type Object for the given attorneyRepresentationTypeId.
     * @param param the request object
     */
    public getAttorneyRepresentationType(param: CourtStandardsAPIApiGetAttorneyRepresentationTypeRequest, options?: Configuration): Promise<AttorneyRepresentationType1> {
        return this.api.getAttorneyRepresentationType(param.attorneyRepresentationTypeId,  options).toPromise();
    }

    /**
     * Retrieve an attorney representation type using a keyword expression. Keyword expressions should be constructed according to the rules given above. ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below Schema section. Schema --> AttorneyRepresentationTypeQueryObject 
     * Attorney Representation Type Object.
     * @param param the request object
     */
    public getAttorneyRepresentationTypesWithHttpInfo(param: CourtStandardsAPIApiGetAttorneyRepresentationTypesRequest = {}, options?: Configuration): Promise<HttpInfo<GetAttorneyRepresentationTypes200Response>> {
        return this.api.getAttorneyRepresentationTypesWithHttpInfo(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve an attorney representation type using a keyword expression. Keyword expressions should be constructed according to the rules given above. ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below Schema section. Schema --> AttorneyRepresentationTypeQueryObject 
     * Attorney Representation Type Object.
     * @param param the request object
     */
    public getAttorneyRepresentationTypes(param: CourtStandardsAPIApiGetAttorneyRepresentationTypesRequest = {}, options?: Configuration): Promise<GetAttorneyRepresentationTypes200Response> {
        return this.api.getAttorneyRepresentationTypes(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve a specified attorney type object. 
     * Attorney Type Object for given Attorney Type Id.
     * @param param the request object
     */
    public getAttorneyTypeWithHttpInfo(param: CourtStandardsAPIApiGetAttorneyTypeRequest, options?: Configuration): Promise<HttpInfo<AttorneyType1>> {
        return this.api.getAttorneyTypeWithHttpInfo(param.attorneyTypeId,  options).toPromise();
    }

    /**
     * Retrieve a specified attorney type object. 
     * Attorney Type Object for given Attorney Type Id.
     * @param param the request object
     */
    public getAttorneyType(param: CourtStandardsAPIApiGetAttorneyTypeRequest, options?: Configuration): Promise<AttorneyType1> {
        return this.api.getAttorneyType(param.attorneyTypeId,  options).toPromise();
    }

    /**
     * Retrieve an attorney type using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below Schema section. Schema --> AttorneyTypeQueryObject 
     * Attorney Type Object.
     * @param param the request object
     */
    public getAttorneyTypesWithHttpInfo(param: CourtStandardsAPIApiGetAttorneyTypesRequest = {}, options?: Configuration): Promise<HttpInfo<GetAttorneyTypes200Response>> {
        return this.api.getAttorneyTypesWithHttpInfo(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve an attorney type using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below Schema section. Schema --> AttorneyTypeQueryObject 
     * Attorney Type Object.
     * @param param the request object
     */
    public getAttorneyTypes(param: CourtStandardsAPIApiGetAttorneyTypesRequest = {}, options?: Configuration): Promise<GetAttorneyTypes200Response> {
        return this.api.getAttorneyTypes(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve the specified case class. 
     * Case Class Object for the given Case Class Id.
     * @param param the request object
     */
    public getCaseClassWithHttpInfo(param: CourtStandardsAPIApiGetCaseClassRequest, options?: Configuration): Promise<HttpInfo<CaseClass1>> {
        return this.api.getCaseClassWithHttpInfo(param.caseClassId,  options).toPromise();
    }

    /**
     * Retrieve the specified case class. 
     * Case Class Object for the given Case Class Id.
     * @param param the request object
     */
    public getCaseClass(param: CourtStandardsAPIApiGetCaseClassRequest, options?: Configuration): Promise<CaseClass1> {
        return this.api.getCaseClass(param.caseClassId,  options).toPromise();
    }

    /**
     * Retrieve the specified case relationship type. 
     * Case Relationship Type Object for the given caseRelationshipTypeId.
     * @param param the request object
     */
    public getCaseRelationshipTypeWithHttpInfo(param: CourtStandardsAPIApiGetCaseRelationshipTypeRequest, options?: Configuration): Promise<HttpInfo<CaseRelationshipType1>> {
        return this.api.getCaseRelationshipTypeWithHttpInfo(param.caseRelationshipTypeId,  options).toPromise();
    }

    /**
     * Retrieve the specified case relationship type. 
     * Case Relationship Type Object for the given caseRelationshipTypeId.
     * @param param the request object
     */
    public getCaseRelationshipType(param: CourtStandardsAPIApiGetCaseRelationshipTypeRequest, options?: Configuration): Promise<CaseRelationshipType1> {
        return this.api.getCaseRelationshipType(param.caseRelationshipTypeId,  options).toPromise();
    }

    /**
     * Retrieve an case relationship type using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CaseRelationshipTypeQueryObject 
     * Case Relationship Type Object.
     * @param param the request object
     */
    public getCaseRelationshipTypesWithHttpInfo(param: CourtStandardsAPIApiGetCaseRelationshipTypesRequest = {}, options?: Configuration): Promise<HttpInfo<GetCaseRelationshipTypes200Response>> {
        return this.api.getCaseRelationshipTypesWithHttpInfo(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve an case relationship type using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CaseRelationshipTypeQueryObject 
     * Case Relationship Type Object.
     * @param param the request object
     */
    public getCaseRelationshipTypes(param: CourtStandardsAPIApiGetCaseRelationshipTypesRequest = {}, options?: Configuration): Promise<GetCaseRelationshipTypes200Response> {
        return this.api.getCaseRelationshipTypes(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve the specified case status. 
     * Returns the caseStatus information for the given caseStatusId.
     * @param param the request object
     */
    public getCaseStatusWithHttpInfo(param: CourtStandardsAPIApiGetCaseStatusRequest, options?: Configuration): Promise<HttpInfo<CaseStatus1>> {
        return this.api.getCaseStatusWithHttpInfo(param.caseStatusId,  options).toPromise();
    }

    /**
     * Retrieve the specified case status. 
     * Returns the caseStatus information for the given caseStatusId.
     * @param param the request object
     */
    public getCaseStatus(param: CourtStandardsAPIApiGetCaseStatusRequest, options?: Configuration): Promise<CaseStatus1> {
        return this.api.getCaseStatus(param.caseStatusId,  options).toPromise();
    }

    /**
     * Retrieve the specified case status group. 
     * Returns the caseStatusGroup information for the given caseStatusGroupId.
     * @param param the request object
     */
    public getCaseStatusGroupWithHttpInfo(param: CourtStandardsAPIApiGetCaseStatusGroupRequest, options?: Configuration): Promise<HttpInfo<CaseStatusGroup1>> {
        return this.api.getCaseStatusGroupWithHttpInfo(param.caseStatusGroupId,  options).toPromise();
    }

    /**
     * Retrieve the specified case status group. 
     * Returns the caseStatusGroup information for the given caseStatusGroupId.
     * @param param the request object
     */
    public getCaseStatusGroup(param: CourtStandardsAPIApiGetCaseStatusGroupRequest, options?: Configuration): Promise<CaseStatusGroup1> {
        return this.api.getCaseStatusGroup(param.caseStatusGroupId,  options).toPromise();
    }

    /**
     * Retrieve a case status group using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CaseStatusGroupQueryObject 
     * Case Status Group Object.
     * @param param the request object
     */
    public getCaseStatusGroupsWithHttpInfo(param: CourtStandardsAPIApiGetCaseStatusGroupsRequest = {}, options?: Configuration): Promise<HttpInfo<GetCaseStatusGroups200Response>> {
        return this.api.getCaseStatusGroupsWithHttpInfo(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve a case status group using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CaseStatusGroupQueryObject 
     * Case Status Group Object.
     * @param param the request object
     */
    public getCaseStatusGroups(param: CourtStandardsAPIApiGetCaseStatusGroupsRequest = {}, options?: Configuration): Promise<GetCaseStatusGroups200Response> {
        return this.api.getCaseStatusGroups(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve the specified case type. 
     * CaseType Object for given Case Type Id.
     * @param param the request object
     */
    public getCaseTypeWithHttpInfo(param: CourtStandardsAPIApiGetCaseTypeRequest, options?: Configuration): Promise<HttpInfo<CaseType1>> {
        return this.api.getCaseTypeWithHttpInfo(param.caseTypeId,  options).toPromise();
    }

    /**
     * Retrieve the specified case type. 
     * CaseType Object for given Case Type Id.
     * @param param the request object
     */
    public getCaseType(param: CourtStandardsAPIApiGetCaseTypeRequest, options?: Configuration): Promise<CaseType1> {
        return this.api.getCaseType(param.caseTypeId,  options).toPromise();
    }

    /**
     * Retrieve the specified case type group. 
     * CaseType Group for the given CaseType Group Id.
     * @param param the request object
     */
    public getCaseTypeGroupWithHttpInfo(param: CourtStandardsAPIApiGetCaseTypeGroupRequest, options?: Configuration): Promise<HttpInfo<CaseTypeGroup1>> {
        return this.api.getCaseTypeGroupWithHttpInfo(param.caseTypeGroupId,  options).toPromise();
    }

    /**
     * Retrieve the specified case type group. 
     * CaseType Group for the given CaseType Group Id.
     * @param param the request object
     */
    public getCaseTypeGroup(param: CourtStandardsAPIApiGetCaseTypeGroupRequest, options?: Configuration): Promise<CaseTypeGroup1> {
        return this.api.getCaseTypeGroup(param.caseTypeGroupId,  options).toPromise();
    }

    /**
     * Retrieve one or more case type groups using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CaseTypeGroupQueryObject 
     * CaseTypeGroup Object.
     * @param param the request object
     */
    public getCaseTypeGroupsWithHttpInfo(param: CourtStandardsAPIApiGetCaseTypeGroupsRequest = {}, options?: Configuration): Promise<HttpInfo<GetCaseTypeGroups200Response>> {
        return this.api.getCaseTypeGroupsWithHttpInfo(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve one or more case type groups using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CaseTypeGroupQueryObject 
     * CaseTypeGroup Object.
     * @param param the request object
     */
    public getCaseTypeGroups(param: CourtStandardsAPIApiGetCaseTypeGroupsRequest = {}, options?: Configuration): Promise<GetCaseTypeGroups200Response> {
        return this.api.getCaseTypeGroups(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve one or more case types using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CaseTypeQueryObject 
     * Case Type Object.
     * @param param the request object
     */
    public getCaseTypesWithHttpInfo(param: CourtStandardsAPIApiGetCaseTypesRequest = {}, options?: Configuration): Promise<HttpInfo<GetCaseTypes200Response>> {
        return this.api.getCaseTypesWithHttpInfo(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve one or more case types using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CaseTypeQueryObject 
     * Case Type Object.
     * @param param the request object
     */
    public getCaseTypes(param: CourtStandardsAPIApiGetCaseTypesRequest = {}, options?: Configuration): Promise<GetCaseTypes200Response> {
        return this.api.getCaseTypes(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve one or more case classes using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CaseClassQueryObject 
     * Case Class Object.
     * @param param the request object
     */
    public getCasesClassWithHttpInfo(param: CourtStandardsAPIApiGetCasesClassRequest = {}, options?: Configuration): Promise<HttpInfo<GetCasesClass200Response>> {
        return this.api.getCasesClassWithHttpInfo(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve one or more case classes using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CaseClassQueryObject 
     * Case Class Object.
     * @param param the request object
     */
    public getCasesClass(param: CourtStandardsAPIApiGetCasesClassRequest = {}, options?: Configuration): Promise<GetCasesClass200Response> {
        return this.api.getCasesClass(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve a case status using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below Schema section. Schema --> CaseStatusQueryObject 
     * Case Status Object.
     * @param param the request object
     */
    public getCasesStatusWithHttpInfo(param: CourtStandardsAPIApiGetCasesStatusRequest = {}, options?: Configuration): Promise<HttpInfo<GetCasesStatus200Response>> {
        return this.api.getCasesStatusWithHttpInfo(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve a case status using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below Schema section. Schema --> CaseStatusQueryObject 
     * Case Status Object.
     * @param param the request object
     */
    public getCasesStatus(param: CourtStandardsAPIApiGetCasesStatusRequest = {}, options?: Configuration): Promise<GetCasesStatus200Response> {
        return this.api.getCasesStatus(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve the specified cause of action. 
     * CauseOfAction Object for the given causeOfActionId.
     * @param param the request object
     */
    public getCauseOfActionWithHttpInfo(param: CourtStandardsAPIApiGetCauseOfActionRequest, options?: Configuration): Promise<HttpInfo<CauseOfAction1>> {
        return this.api.getCauseOfActionWithHttpInfo(param.causeOfActionId,  options).toPromise();
    }

    /**
     * Retrieve the specified cause of action. 
     * CauseOfAction Object for the given causeOfActionId.
     * @param param the request object
     */
    public getCauseOfAction(param: CourtStandardsAPIApiGetCauseOfActionRequest, options?: Configuration): Promise<CauseOfAction1> {
        return this.api.getCauseOfAction(param.causeOfActionId,  options).toPromise();
    }

    /**
     * Retrieve the specified cause of action additional data. 
     * CauseOfActionAdditionalData Object for the given causeOfActionAdditionalDataId.
     * @param param the request object
     */
    public getCauseOfActionAdditionalDataWithHttpInfo(param: CourtStandardsAPIApiGetCauseOfActionAdditionalDataRequest, options?: Configuration): Promise<HttpInfo<CauseOfActionAdditionalData1>> {
        return this.api.getCauseOfActionAdditionalDataWithHttpInfo(param.causeOfActionAdditionalDataId,  options).toPromise();
    }

    /**
     * Retrieve the specified cause of action additional data. 
     * CauseOfActionAdditionalData Object for the given causeOfActionAdditionalDataId.
     * @param param the request object
     */
    public getCauseOfActionAdditionalData(param: CourtStandardsAPIApiGetCauseOfActionAdditionalDataRequest, options?: Configuration): Promise<CauseOfActionAdditionalData1> {
        return this.api.getCauseOfActionAdditionalData(param.causeOfActionAdditionalDataId,  options).toPromise();
    }

    /**
     * Retrieve the specified cause of action group. 
     * CauseOfActionGroup Object for the given causeOfActionGroupId.
     * @param param the request object
     */
    public getCauseOfActionGroupWithHttpInfo(param: CourtStandardsAPIApiGetCauseOfActionGroupRequest, options?: Configuration): Promise<HttpInfo<CauseOfActionGroup1>> {
        return this.api.getCauseOfActionGroupWithHttpInfo(param.causeOfActionGroupId,  options).toPromise();
    }

    /**
     * Retrieve the specified cause of action group. 
     * CauseOfActionGroup Object for the given causeOfActionGroupId.
     * @param param the request object
     */
    public getCauseOfActionGroup(param: CourtStandardsAPIApiGetCauseOfActionGroupRequest, options?: Configuration): Promise<CauseOfActionGroup1> {
        return this.api.getCauseOfActionGroup(param.causeOfActionGroupId,  options).toPromise();
    }

    /**
     * Retrieve a cause of action using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CauseOfActionQueryObject 
     * CauseOfAction Object.
     * @param param the request object
     */
    public getCausesOfActionWithHttpInfo(param: CourtStandardsAPIApiGetCausesOfActionRequest = {}, options?: Configuration): Promise<HttpInfo<GetCausesOfAction200Response>> {
        return this.api.getCausesOfActionWithHttpInfo(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve a cause of action using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CauseOfActionQueryObject 
     * CauseOfAction Object.
     * @param param the request object
     */
    public getCausesOfAction(param: CourtStandardsAPIApiGetCausesOfActionRequest = {}, options?: Configuration): Promise<GetCausesOfAction200Response> {
        return this.api.getCausesOfAction(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve a cause of action additional data using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CauseOfActionAdditionalDataQueryObject 
     * CauseOfActionAdditionaData Object.
     * @param param the request object
     */
    public getCausesOfActionAdditionalDataWithHttpInfo(param: CourtStandardsAPIApiGetCausesOfActionAdditionalDataRequest = {}, options?: Configuration): Promise<HttpInfo<GetCausesOfActionAdditionalData200Response>> {
        return this.api.getCausesOfActionAdditionalDataWithHttpInfo(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve a cause of action additional data using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CauseOfActionAdditionalDataQueryObject 
     * CauseOfActionAdditionaData Object.
     * @param param the request object
     */
    public getCausesOfActionAdditionalData(param: CourtStandardsAPIApiGetCausesOfActionAdditionalDataRequest = {}, options?: Configuration): Promise<GetCausesOfActionAdditionalData200Response> {
        return this.api.getCausesOfActionAdditionalData(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve a cause of action group using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CauseOfActionGroupQueryObject 
     * CauseOfActionGroup Object.
     * @param param the request object
     */
    public getCausesOfActionGroupWithHttpInfo(param: CourtStandardsAPIApiGetCausesOfActionGroupRequest = {}, options?: Configuration): Promise<HttpInfo<GetCausesOfActionGroup200Response>> {
        return this.api.getCausesOfActionGroupWithHttpInfo(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve a cause of action group using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CauseOfActionGroupQueryObject 
     * CauseOfActionGroup Object.
     * @param param the request object
     */
    public getCausesOfActionGroup(param: CourtStandardsAPIApiGetCausesOfActionGroupRequest = {}, options?: Configuration): Promise<GetCausesOfActionGroup200Response> {
        return this.api.getCausesOfActionGroup(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve the specified charge. 
     * Charge Object for the given chargeId.
     * @param param the request object
     */
    public getChargeWithHttpInfo(param: CourtStandardsAPIApiGetChargeRequest, options?: Configuration): Promise<HttpInfo<Charge1>> {
        return this.api.getChargeWithHttpInfo(param.chargeId,  options).toPromise();
    }

    /**
     * Retrieve the specified charge. 
     * Charge Object for the given chargeId.
     * @param param the request object
     */
    public getCharge(param: CourtStandardsAPIApiGetChargeRequest, options?: Configuration): Promise<Charge1> {
        return this.api.getCharge(param.chargeId,  options).toPromise();
    }

    /**
     * Retrieve the specified charge additional data. 
     * Charge Additional Data Object for the given chargeAdditionalDataId.
     * @param param the request object
     */
    public getChargeAdditionalDataWithHttpInfo(param: CourtStandardsAPIApiGetChargeAdditionalDataRequest, options?: Configuration): Promise<HttpInfo<ChargeAdditionalData1>> {
        return this.api.getChargeAdditionalDataWithHttpInfo(param.chargeAdditionalDataId,  options).toPromise();
    }

    /**
     * Retrieve the specified charge additional data. 
     * Charge Additional Data Object for the given chargeAdditionalDataId.
     * @param param the request object
     */
    public getChargeAdditionalData(param: CourtStandardsAPIApiGetChargeAdditionalDataRequest, options?: Configuration): Promise<ChargeAdditionalData1> {
        return this.api.getChargeAdditionalData(param.chargeAdditionalDataId,  options).toPromise();
    }

    /**
     * Retrieve the specified charge degree. 
     * ChargeDegree Object for the given chargeDegreeId.
     * @param param the request object
     */
    public getChargeDegreeWithHttpInfo(param: CourtStandardsAPIApiGetChargeDegreeRequest, options?: Configuration): Promise<HttpInfo<ChargeDegree1>> {
        return this.api.getChargeDegreeWithHttpInfo(param.chargeDegreeId,  options).toPromise();
    }

    /**
     * Retrieve the specified charge degree. 
     * ChargeDegree Object for the given chargeDegreeId.
     * @param param the request object
     */
    public getChargeDegree(param: CourtStandardsAPIApiGetChargeDegreeRequest, options?: Configuration): Promise<ChargeDegree1> {
        return this.api.getChargeDegree(param.chargeDegreeId,  options).toPromise();
    }

    /**
     * Retrieve the specified charge group. 
     * Charge Group Object for the given chargeGroupId.
     * @param param the request object
     */
    public getChargeGroupWithHttpInfo(param: CourtStandardsAPIApiGetChargeGroupRequest, options?: Configuration): Promise<HttpInfo<ChargeGroup1>> {
        return this.api.getChargeGroupWithHttpInfo(param.chargeGroupId,  options).toPromise();
    }

    /**
     * Retrieve the specified charge group. 
     * Charge Group Object for the given chargeGroupId.
     * @param param the request object
     */
    public getChargeGroup(param: CourtStandardsAPIApiGetChargeGroupRequest, options?: Configuration): Promise<ChargeGroup1> {
        return this.api.getChargeGroup(param.chargeGroupId,  options).toPromise();
    }

    /**
     * Retrieve one or more charge groups using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> ChargeGroupQueryObject 
     * Charge Group Object.
     * @param param the request object
     */
    public getChargeGroupsWithHttpInfo(param: CourtStandardsAPIApiGetChargeGroupsRequest = {}, options?: Configuration): Promise<HttpInfo<GetChargeGroups200Response>> {
        return this.api.getChargeGroupsWithHttpInfo(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve one or more charge groups using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> ChargeGroupQueryObject 
     * Charge Group Object.
     * @param param the request object
     */
    public getChargeGroups(param: CourtStandardsAPIApiGetChargeGroupsRequest = {}, options?: Configuration): Promise<GetChargeGroups200Response> {
        return this.api.getChargeGroups(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve the specified charge severity. 
     * ChargeSeverity Object for the given chargeSeverityId.
     * @param param the request object
     */
    public getChargeSeverityWithHttpInfo(param: CourtStandardsAPIApiGetChargeSeverityRequest, options?: Configuration): Promise<HttpInfo<ChargeSeverity1>> {
        return this.api.getChargeSeverityWithHttpInfo(param.chargeSeverityId,  options).toPromise();
    }

    /**
     * Retrieve the specified charge severity. 
     * ChargeSeverity Object for the given chargeSeverityId.
     * @param param the request object
     */
    public getChargeSeverity(param: CourtStandardsAPIApiGetChargeSeverityRequest, options?: Configuration): Promise<ChargeSeverity1> {
        return this.api.getChargeSeverity(param.chargeSeverityId,  options).toPromise();
    }

    /**
     * Retrieve one or more charges using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> ChargeQueryObject 
     * Charge Object.
     * @param param the request object
     */
    public getChargesWithHttpInfo(param: CourtStandardsAPIApiGetChargesRequest = {}, options?: Configuration): Promise<HttpInfo<GetCharges200Response>> {
        return this.api.getChargesWithHttpInfo(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve one or more charges using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> ChargeQueryObject 
     * Charge Object.
     * @param param the request object
     */
    public getCharges(param: CourtStandardsAPIApiGetChargesRequest = {}, options?: Configuration): Promise<GetCharges200Response> {
        return this.api.getCharges(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve additional information on a charge using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> ChargeAdditionalDataQueryObject 
     * Charge Additional Data Object.
     * @param param the request object
     */
    public getChargesAdditionalDataWithHttpInfo(param: CourtStandardsAPIApiGetChargesAdditionalDataRequest = {}, options?: Configuration): Promise<HttpInfo<GetChargesAdditionalData200Response>> {
        return this.api.getChargesAdditionalDataWithHttpInfo(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve additional information on a charge using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> ChargeAdditionalDataQueryObject 
     * Charge Additional Data Object.
     * @param param the request object
     */
    public getChargesAdditionalData(param: CourtStandardsAPIApiGetChargesAdditionalDataRequest = {}, options?: Configuration): Promise<GetChargesAdditionalData200Response> {
        return this.api.getChargesAdditionalData(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve a charge degree using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> ChargeDegreeQueryObject 
     * ChargeDegree Object.
     * @param param the request object
     */
    public getChargesDegreeWithHttpInfo(param: CourtStandardsAPIApiGetChargesDegreeRequest = {}, options?: Configuration): Promise<HttpInfo<GetChargesDegree200Response>> {
        return this.api.getChargesDegreeWithHttpInfo(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve a charge degree using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> ChargeDegreeQueryObject 
     * ChargeDegree Object.
     * @param param the request object
     */
    public getChargesDegree(param: CourtStandardsAPIApiGetChargesDegreeRequest = {}, options?: Configuration): Promise<GetChargesDegree200Response> {
        return this.api.getChargesDegree(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve a charge severity using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> ChargeSeverityQueryObject 
     * ChargeSeverity Object.
     * @param param the request object
     */
    public getChargesSeverityWithHttpInfo(param: CourtStandardsAPIApiGetChargesSeverityRequest = {}, options?: Configuration): Promise<HttpInfo<GetChargesSeverity200Response>> {
        return this.api.getChargesSeverityWithHttpInfo(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve a charge severity using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> ChargeSeverityQueryObject 
     * ChargeSeverity Object.
     * @param param the request object
     */
    public getChargesSeverity(param: CourtStandardsAPIApiGetChargesSeverityRequest = {}, options?: Configuration): Promise<GetChargesSeverity200Response> {
        return this.api.getChargesSeverity(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve information about a specified court. 
     * Court Object for given courtId.
     * @param param the request object
     */
    public getCourtWithHttpInfo(param: CourtStandardsAPIApiGetCourtRequest, options?: Configuration): Promise<HttpInfo<Court1>> {
        return this.api.getCourtWithHttpInfo(param.courtId,  options).toPromise();
    }

    /**
     * Retrieve information about a specified court. 
     * Court Object for given courtId.
     * @param param the request object
     */
    public getCourt(param: CourtStandardsAPIApiGetCourtRequest, options?: Configuration): Promise<Court1> {
        return this.api.getCourt(param.courtId,  options).toPromise();
    }

    /**
     * Contains the Court Location Object. 
     * Courthouse Object for given Court Location Id.
     * @param param the request object
     */
    public getCourtLocationWithHttpInfo(param: CourtStandardsAPIApiGetCourtLocationRequest, options?: Configuration): Promise<HttpInfo<CourtLocation1>> {
        return this.api.getCourtLocationWithHttpInfo(param.courtLocationId,  options).toPromise();
    }

    /**
     * Contains the Court Location Object. 
     * Courthouse Object for given Court Location Id.
     * @param param the request object
     */
    public getCourtLocation(param: CourtStandardsAPIApiGetCourtLocationRequest, options?: Configuration): Promise<CourtLocation1> {
        return this.api.getCourtLocation(param.courtLocationId,  options).toPromise();
    }

    /**
     * Retrieve the specified court location or court locations.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CourtLocationQueryObject 
     * Courthouse Object.
     * @param param the request object
     */
    public getCourtLocationsWithHttpInfo(param: CourtStandardsAPIApiGetCourtLocationsRequest = {}, options?: Configuration): Promise<HttpInfo<CourtLocationResponse1>> {
        return this.api.getCourtLocationsWithHttpInfo(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve the specified court location or court locations.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CourtLocationQueryObject 
     * Courthouse Object.
     * @param param the request object
     */
    public getCourtLocations(param: CourtStandardsAPIApiGetCourtLocationsRequest = {}, options?: Configuration): Promise<CourtLocationResponse1> {
        return this.api.getCourtLocations(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve the court locations associated with the specified court. 
     * Associated Court Location for given courtId.
     * @param param the request object
     */
    public getCourtLocationsForCourtWithHttpInfo(param: CourtStandardsAPIApiGetCourtLocationsForCourtRequest, options?: Configuration): Promise<HttpInfo<CourtLocationResponse1>> {
        return this.api.getCourtLocationsForCourtWithHttpInfo(param.courtId, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve the court locations associated with the specified court. 
     * Associated Court Location for given courtId.
     * @param param the request object
     */
    public getCourtLocationsForCourt(param: CourtStandardsAPIApiGetCourtLocationsForCourtRequest, options?: Configuration): Promise<CourtLocationResponse1> {
        return this.api.getCourtLocationsForCourt(param.courtId, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve the court status of the specified court. 
     * Court Service Status Object for the given courtServiceStatusId.
     * @param param the request object
     */
    public getCourtServiceStatusWithHttpInfo(param: CourtStandardsAPIApiGetCourtServiceStatusRequest, options?: Configuration): Promise<HttpInfo<GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner>> {
        return this.api.getCourtServiceStatusWithHttpInfo(param.courtServiceStatusId,  options).toPromise();
    }

    /**
     * Retrieve the court status of the specified court. 
     * Court Service Status Object for the given courtServiceStatusId.
     * @param param the request object
     */
    public getCourtServiceStatus(param: CourtStandardsAPIApiGetCourtServiceStatusRequest, options?: Configuration): Promise<GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner> {
        return this.api.getCourtServiceStatus(param.courtServiceStatusId,  options).toPromise();
    }

    /**
     * Retrieve the specified court system. 
     * Court System Object for given courtSystemId.
     * @param param the request object
     */
    public getCourtSystemWithHttpInfo(param: CourtStandardsAPIApiGetCourtSystemRequest, options?: Configuration): Promise<HttpInfo<CourtSystem1>> {
        return this.api.getCourtSystemWithHttpInfo(param.courtSystemId,  options).toPromise();
    }

    /**
     * Retrieve the specified court system. 
     * Court System Object for given courtSystemId.
     * @param param the request object
     */
    public getCourtSystem(param: CourtStandardsAPIApiGetCourtSystemRequest, options?: Configuration): Promise<CourtSystem1> {
        return this.api.getCourtSystem(param.courtSystemId,  options).toPromise();
    }

    /**
     * Retrieve information about the specified court system or court systems.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------|         | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CourtSystemQueryObject 
     * Court System Objects.
     * @param param the request object
     */
    public getCourtSystemsWithHttpInfo(param: CourtStandardsAPIApiGetCourtSystemsRequest = {}, options?: Configuration): Promise<HttpInfo<GetCourtSystems200Response>> {
        return this.api.getCourtSystemsWithHttpInfo(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve information about the specified court system or court systems.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------|         | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CourtSystemQueryObject 
     * Court System Objects.
     * @param param the request object
     */
    public getCourtSystems(param: CourtStandardsAPIApiGetCourtSystemsRequest = {}, options?: Configuration): Promise<GetCourtSystems200Response> {
        return this.api.getCourtSystems(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve the information concerning the specific court type. 
     * Court Type Object for given courtTypeId.
     * @param param the request object
     */
    public getCourtTypeWithHttpInfo(param: CourtStandardsAPIApiGetCourtTypeRequest, options?: Configuration): Promise<HttpInfo<CourtType1>> {
        return this.api.getCourtTypeWithHttpInfo(param.courtTypeId,  options).toPromise();
    }

    /**
     * Retrieve the information concerning the specific court type. 
     * Court Type Object for given courtTypeId.
     * @param param the request object
     */
    public getCourtType(param: CourtStandardsAPIApiGetCourtTypeRequest, options?: Configuration): Promise<CourtType1> {
        return this.api.getCourtType(param.courtTypeId,  options).toPromise();
    }

    /**
     * Retrieve court types recognized by UniCourt.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------|         | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CourtTypeQueryObject 
     * Court Type Objects.
     * @param param the request object
     */
    public getCourtTypesWithHttpInfo(param: CourtStandardsAPIApiGetCourtTypesRequest = {}, options?: Configuration): Promise<HttpInfo<GetCourtTypes200Response>> {
        return this.api.getCourtTypesWithHttpInfo(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve court types recognized by UniCourt.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------|         | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CourtTypeQueryObject 
     * Court Type Objects.
     * @param param the request object
     */
    public getCourtTypes(param: CourtStandardsAPIApiGetCourtTypesRequest = {}, options?: Configuration): Promise<GetCourtTypes200Response> {
        return this.api.getCourtTypes(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve information about a specified court or courts.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------|         | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CourtQueryObject 
     * Court Objects.
     * @param param the request object
     */
    public getCourtsWithHttpInfo(param: CourtStandardsAPIApiGetCourtsRequest = {}, options?: Configuration): Promise<HttpInfo<GetCourts200Response>> {
        return this.api.getCourtsWithHttpInfo(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve information about a specified court or courts.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------|         | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CourtQueryObject 
     * Court Objects.
     * @param param the request object
     */
    public getCourts(param: CourtStandardsAPIApiGetCourtsRequest = {}, options?: Configuration): Promise<GetCourts200Response> {
        return this.api.getCourts(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve the courts associated with the specified court location. 
     * Associated Court for given Court Location.
     * @param param the request object
     */
    public getCourtsForCourtLocationWithHttpInfo(param: CourtStandardsAPIApiGetCourtsForCourtLocationRequest, options?: Configuration): Promise<HttpInfo<GetCourts200Response>> {
        return this.api.getCourtsForCourtLocationWithHttpInfo(param.courtLocationId, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve the courts associated with the specified court location. 
     * Associated Court for given Court Location.
     * @param param the request object
     */
    public getCourtsForCourtLocation(param: CourtStandardsAPIApiGetCourtsForCourtLocationRequest, options?: Configuration): Promise<GetCourts200Response> {
        return this.api.getCourtsForCourtLocation(param.courtLocationId, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Returns Associated Court for given Jurisdiction Geo. 
     * Associated Court for given Jurisdiction Geo.
     * @param param the request object
     */
    public getCourtsForJurisdictionGeoWithHttpInfo(param: CourtStandardsAPIApiGetCourtsForJurisdictionGeoRequest, options?: Configuration): Promise<HttpInfo<GetCourts200Response>> {
        return this.api.getCourtsForJurisdictionGeoWithHttpInfo(param.jurisdictionGeoId, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Returns Associated Court for given Jurisdiction Geo. 
     * Associated Court for given Jurisdiction Geo.
     * @param param the request object
     */
    public getCourtsForJurisdictionGeo(param: CourtStandardsAPIApiGetCourtsForJurisdictionGeoRequest, options?: Configuration): Promise<GetCourts200Response> {
        return this.api.getCourtsForJurisdictionGeo(param.jurisdictionGeoId, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve the status of one or more courts using a keyword expression.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CourtServiceStatusQueryObject 
     * Court Service Status Object.
     * @param param the request object
     */
    public getCourtsServiceStatusWithHttpInfo(param: CourtStandardsAPIApiGetCourtsServiceStatusRequest = {}, options?: Configuration): Promise<HttpInfo<GetCourtsServiceStatus200Response>> {
        return this.api.getCourtsServiceStatusWithHttpInfo(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve the status of one or more courts using a keyword expression.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CourtServiceStatusQueryObject 
     * Court Service Status Object.
     * @param param the request object
     */
    public getCourtsServiceStatus(param: CourtStandardsAPIApiGetCourtsServiceStatusRequest = {}, options?: Configuration): Promise<GetCourtsServiceStatus200Response> {
        return this.api.getCourtsServiceStatus(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve the specified judge type. 
     * Judge Type Object for the given judgeTypeId.
     * @param param the request object
     */
    public getJudgeTypeWithHttpInfo(param: CourtStandardsAPIApiGetJudgeTypeRequest, options?: Configuration): Promise<HttpInfo<JudgeType1>> {
        return this.api.getJudgeTypeWithHttpInfo(param.judgeTypeId,  options).toPromise();
    }

    /**
     * Retrieve the specified judge type. 
     * Judge Type Object for the given judgeTypeId.
     * @param param the request object
     */
    public getJudgeType(param: CourtStandardsAPIApiGetJudgeTypeRequest, options?: Configuration): Promise<JudgeType1> {
        return this.api.getJudgeType(param.judgeTypeId,  options).toPromise();
    }

    /**
     * Retrieve a judge type using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> JudgeTypeQueryObject 
     * Judge Type Object.
     * @param param the request object
     */
    public getJudgeTypesWithHttpInfo(param: CourtStandardsAPIApiGetJudgeTypesRequest = {}, options?: Configuration): Promise<HttpInfo<GetJudgeTypes200Response>> {
        return this.api.getJudgeTypesWithHttpInfo(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve a judge type using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> JudgeTypeQueryObject 
     * Judge Type Object.
     * @param param the request object
     */
    public getJudgeTypes(param: CourtStandardsAPIApiGetJudgeTypesRequest = {}, options?: Configuration): Promise<GetJudgeTypes200Response> {
        return this.api.getJudgeTypes(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve the specified jurisdiction geography. 
     * Jurisdiction Geo Object for given Jurisdiction Geo Id.
     * @param param the request object
     */
    public getJurisdictionGeoWithHttpInfo(param: CourtStandardsAPIApiGetJurisdictionGeoRequest, options?: Configuration): Promise<HttpInfo<JurisdictionGeo1>> {
        return this.api.getJurisdictionGeoWithHttpInfo(param.jurisdictionGeoId,  options).toPromise();
    }

    /**
     * Retrieve the specified jurisdiction geography. 
     * Jurisdiction Geo Object for given Jurisdiction Geo Id.
     * @param param the request object
     */
    public getJurisdictionGeo(param: CourtStandardsAPIApiGetJurisdictionGeoRequest, options?: Configuration): Promise<JurisdictionGeo1> {
        return this.api.getJurisdictionGeo(param.jurisdictionGeoId,  options).toPromise();
    }

    /**
     * Retrieve the jurisdiction geography object for the specified court. 
     * Jurisdiction Geo Objects for given courtId.
     * @param param the request object
     */
    public getJurisdictionGeoForCourtWithHttpInfo(param: CourtStandardsAPIApiGetJurisdictionGeoForCourtRequest, options?: Configuration): Promise<HttpInfo<JurisdictionGeoResponse1>> {
        return this.api.getJurisdictionGeoForCourtWithHttpInfo(param.courtId, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve the jurisdiction geography object for the specified court. 
     * Jurisdiction Geo Objects for given courtId.
     * @param param the request object
     */
    public getJurisdictionGeoForCourt(param: CourtStandardsAPIApiGetJurisdictionGeoForCourtRequest, options?: Configuration): Promise<JurisdictionGeoResponse1> {
        return this.api.getJurisdictionGeoForCourt(param.courtId, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve one or more jurisdiction geographies using a keyword expression.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> JurisdictionGeoQueryObject 
     * Jurisdiction Geo Object.
     * @param param the request object
     */
    public getJurisdictionsGeoWithHttpInfo(param: CourtStandardsAPIApiGetJurisdictionsGeoRequest = {}, options?: Configuration): Promise<HttpInfo<JurisdictionGeoResponse1>> {
        return this.api.getJurisdictionsGeoWithHttpInfo(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve one or more jurisdiction geographies using a keyword expression.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> JurisdictionGeoQueryObject 
     * Jurisdiction Geo Object.
     * @param param the request object
     */
    public getJurisdictionsGeo(param: CourtStandardsAPIApiGetJurisdictionsGeoRequest = {}, options?: Configuration): Promise<JurisdictionGeoResponse1> {
        return this.api.getJurisdictionsGeo(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve the specified party role. 
     * Party Role Object.
     * @param param the request object
     */
    public getPartyRoleWithHttpInfo(param: CourtStandardsAPIApiGetPartyRoleRequest, options?: Configuration): Promise<HttpInfo<PartyRole1>> {
        return this.api.getPartyRoleWithHttpInfo(param.partyRoleId,  options).toPromise();
    }

    /**
     * Retrieve the specified party role. 
     * Party Role Object.
     * @param param the request object
     */
    public getPartyRole(param: CourtStandardsAPIApiGetPartyRoleRequest, options?: Configuration): Promise<PartyRole1> {
        return this.api.getPartyRole(param.partyRoleId,  options).toPromise();
    }

    /**
     * Retrieve the specified party role group. 
     * Party Role Group Object.
     * @param param the request object
     */
    public getPartyRoleGroupWithHttpInfo(param: CourtStandardsAPIApiGetPartyRoleGroupRequest, options?: Configuration): Promise<HttpInfo<PartyRoleGroup1>> {
        return this.api.getPartyRoleGroupWithHttpInfo(param.partyRoleGroupId,  options).toPromise();
    }

    /**
     * Retrieve the specified party role group. 
     * Party Role Group Object.
     * @param param the request object
     */
    public getPartyRoleGroup(param: CourtStandardsAPIApiGetPartyRoleGroupRequest, options?: Configuration): Promise<PartyRoleGroup1> {
        return this.api.getPartyRoleGroup(param.partyRoleGroupId,  options).toPromise();
    }

    /**
     * Retrieve a party role group using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> PartyRoleGroupQueryObject 
     * Party Role Group Object.
     * @param param the request object
     */
    public getPartyRoleGroupsWithHttpInfo(param: CourtStandardsAPIApiGetPartyRoleGroupsRequest = {}, options?: Configuration): Promise<HttpInfo<GetPartyRoleGroups200Response>> {
        return this.api.getPartyRoleGroupsWithHttpInfo(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve a party role group using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> PartyRoleGroupQueryObject 
     * Party Role Group Object.
     * @param param the request object
     */
    public getPartyRoleGroups(param: CourtStandardsAPIApiGetPartyRoleGroupsRequest = {}, options?: Configuration): Promise<GetPartyRoleGroups200Response> {
        return this.api.getPartyRoleGroups(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve a party role using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> PartyRoleQueryObject 
     * Party Role Object.
     * @param param the request object
     */
    public getPartyRolesWithHttpInfo(param: CourtStandardsAPIApiGetPartyRolesRequest = {}, options?: Configuration): Promise<HttpInfo<GetPartyRoles200Response>> {
        return this.api.getPartyRolesWithHttpInfo(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieve a party role using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> PartyRoleQueryObject 
     * Party Role Object.
     * @param param the request object
     */
    public getPartyRoles(param: CourtStandardsAPIApiGetPartyRolesRequest = {}, options?: Configuration): Promise<GetPartyRoles200Response> {
        return this.api.getPartyRoles(param.q, param.pageNumber, param.sort, param.order,  options).toPromise();
    }

}

import { ObservableJudgeAnalyticsAPIApi } from "./ObservableAPI";
import { JudgeAnalyticsAPIApiRequestFactory, JudgeAnalyticsAPIApiResponseProcessor} from "../apis/JudgeAnalyticsAPIApi";

export interface JudgeAnalyticsAPIApiGetNormAttorneysAssociatedWithNormJudgeRequest {
    /**
     * The normJudgeId value of the desired judge.   - minimum: 18   - maximum: 18 
     * @type string
     * @memberof JudgeAnalyticsAPIApigetNormAttorneysAssociatedWithNormJudge
     */
    normJudgeId: string
    /**
     * The keyword expression targeting the desired attorneys.
     * @type string
     * @memberof JudgeAnalyticsAPIApigetNormAttorneysAssociatedWithNormJudge
     */
    q?: string
    /**
     * The page number of the desired page of results. - minimum: 1 
     * @type number
     * @memberof JudgeAnalyticsAPIApigetNormAttorneysAssociatedWithNormJudge
     */
    pageNumber?: number
}

export interface JudgeAnalyticsAPIApiGetNormJudgeByIdRequest {
    /**
     * The normJudgeId value of the desired judge.   - minimum: 18   - maximum: 18 
     * @type string
     * @memberof JudgeAnalyticsAPIApigetNormJudgeById
     */
    normJudgeId: string
}

export interface JudgeAnalyticsAPIApiGetNormLawFirmsAssociatedWithNormJudgeRequest {
    /**
     * The normJudgeId value of the desired judge.   - minimum: 18   - maximum: 18 
     * @type string
     * @memberof JudgeAnalyticsAPIApigetNormLawFirmsAssociatedWithNormJudge
     */
    normJudgeId: string
    /**
     * The keyword expression targeting the desired law firms.
     * @type string
     * @memberof JudgeAnalyticsAPIApigetNormLawFirmsAssociatedWithNormJudge
     */
    q?: string
    /**
     * The page number of the desired page of results. - minimum: 1 
     * @type number
     * @memberof JudgeAnalyticsAPIApigetNormLawFirmsAssociatedWithNormJudge
     */
    pageNumber?: number
}

export interface JudgeAnalyticsAPIApiGetNormPartiesAssociatedWithNormJudgeRequest {
    /**
     * The normJudgeId value of the desired judge.   - minimum: 18   - maximum: 18 
     * @type string
     * @memberof JudgeAnalyticsAPIApigetNormPartiesAssociatedWithNormJudge
     */
    normJudgeId: string
    /**
     * The keyword expression targeting the desired parties.
     * @type string
     * @memberof JudgeAnalyticsAPIApigetNormPartiesAssociatedWithNormJudge
     */
    q?: string
    /**
     * The page number of the desired page of results. - minimum: 1 
     * @type number
     * @memberof JudgeAnalyticsAPIApigetNormPartiesAssociatedWithNormJudge
     */
    pageNumber?: number
}

export interface JudgeAnalyticsAPIApiSearchNormalizedJudgesRequest {
    /**
     * The keyword expression targeting the desired judge.&lt;/a&gt; 
     * @type string
     * @memberof JudgeAnalyticsAPIApisearchNormalizedJudges
     */
    q?: string
    /**
     * The page number of the desired page of results. - Minimum: 1 - Maximum: 1000 
     * @type number
     * @memberof JudgeAnalyticsAPIApisearchNormalizedJudges
     */
    pageNumber?: number
}

export interface JudgeAnalyticsAPIApiSearchNormalizedJudgesByIdRequest {
    /**
     * The normJudgeSearchId value of the desired search.
     * @type string
     * @memberof JudgeAnalyticsAPIApisearchNormalizedJudgesById
     */
    normJudgeSearchId: string
    /**
     * The page number of the desired page of results. - Minimum: 1 - Maximum: 1000 
     * @type number
     * @memberof JudgeAnalyticsAPIApisearchNormalizedJudgesById
     */
    pageNumber?: number
}

export class ObjectJudgeAnalyticsAPIApi {
    private api: ObservableJudgeAnalyticsAPIApi

    public constructor(configuration: Configuration, requestFactory?: JudgeAnalyticsAPIApiRequestFactory, responseProcessor?: JudgeAnalyticsAPIApiResponseProcessor) {
        this.api = new ObservableJudgeAnalyticsAPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Search for attorneys who have appeared before the specified judge using a keyword expression. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtLocationId IN (\"COLODj4BBVTho3pKpz\",\"COLOPUfJRhw5yPxgRi\")**| | **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple Ids Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all attorneys associated with judge with norm id NJUDT7jCZyFNeLGpRq of all cases with case type id CTYPGkaW3aGJyKGyfn and case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Attorneys Associated with the Judge.
     * @param param the request object
     */
    public getNormAttorneysAssociatedWithNormJudgeWithHttpInfo(param: JudgeAnalyticsAPIApiGetNormAttorneysAssociatedWithNormJudgeRequest, options?: Configuration): Promise<HttpInfo<AssociatedNormAttorneyResponse1>> {
        return this.api.getNormAttorneysAssociatedWithNormJudgeWithHttpInfo(param.normJudgeId, param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Search for attorneys who have appeared before the specified judge using a keyword expression. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtLocationId IN (\"COLODj4BBVTho3pKpz\",\"COLOPUfJRhw5yPxgRi\")**| | **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple Ids Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all attorneys associated with judge with norm id NJUDT7jCZyFNeLGpRq of all cases with case type id CTYPGkaW3aGJyKGyfn and case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Attorneys Associated with the Judge.
     * @param param the request object
     */
    public getNormAttorneysAssociatedWithNormJudge(param: JudgeAnalyticsAPIApiGetNormAttorneysAssociatedWithNormJudgeRequest, options?: Configuration): Promise<AssociatedNormAttorneyResponse1> {
        return this.api.getNormAttorneysAssociatedWithNormJudge(param.normJudgeId, param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve the specified judge. 
     * Norm Judge Details.
     * @param param the request object
     */
    public getNormJudgeByIdWithHttpInfo(param: JudgeAnalyticsAPIApiGetNormJudgeByIdRequest, options?: Configuration): Promise<HttpInfo<NormJudge1>> {
        return this.api.getNormJudgeByIdWithHttpInfo(param.normJudgeId,  options).toPromise();
    }

    /**
     * Retrieve the specified judge. 
     * Norm Judge Details.
     * @param param the request object
     */
    public getNormJudgeById(param: JudgeAnalyticsAPIApiGetNormJudgeByIdRequest, options?: Configuration): Promise<NormJudge1> {
        return this.api.getNormJudgeById(param.normJudgeId,  options).toPromise();
    }

    /**
     * Search for law firms that have appeared before the specified judge using a keyword expression. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLOPUfJRhw5yPxgRi\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtLocationId IN (\"COLODj4BBVTho3pKpz\",\"COLOPUfJRhw5yPxgRi\")**| | **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo**  | Multiple Ids Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all Law Firms associated with judge with norm id NJUDT7jCZyFNeLGpRq of all cases with case type id CTYPGkaW3aGJyKGyfn and case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Law Firms Associated With the Judge.
     * @param param the request object
     */
    public getNormLawFirmsAssociatedWithNormJudgeWithHttpInfo(param: JudgeAnalyticsAPIApiGetNormLawFirmsAssociatedWithNormJudgeRequest, options?: Configuration): Promise<HttpInfo<AssociatedNormLawFirmResponse1>> {
        return this.api.getNormLawFirmsAssociatedWithNormJudgeWithHttpInfo(param.normJudgeId, param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Search for law firms that have appeared before the specified judge using a keyword expression. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLOPUfJRhw5yPxgRi\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtLocationId IN (\"COLODj4BBVTho3pKpz\",\"COLOPUfJRhw5yPxgRi\")**| | **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo**  | Multiple Ids Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all Law Firms associated with judge with norm id NJUDT7jCZyFNeLGpRq of all cases with case type id CTYPGkaW3aGJyKGyfn and case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Law Firms Associated With the Judge.
     * @param param the request object
     */
    public getNormLawFirmsAssociatedWithNormJudge(param: JudgeAnalyticsAPIApiGetNormLawFirmsAssociatedWithNormJudgeRequest, options?: Configuration): Promise<AssociatedNormLawFirmResponse1> {
        return this.api.getNormLawFirmsAssociatedWithNormJudge(param.normJudgeId, param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Search for parties that have appeared before the specified judge using a keyword expression. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtLocationId IN (\"COLODj4BBVTho3pKpz\",\"COLOPUfJRhw5yPxgRi\")**| | **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple Ids Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all Parties associated with judge with norm id NJUDT7jCZyFNeLGpRq of all cases with case type id CTYPGkaW3aGJyKGyfn and case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Parties Associated with the Judge.
     * @param param the request object
     */
    public getNormPartiesAssociatedWithNormJudgeWithHttpInfo(param: JudgeAnalyticsAPIApiGetNormPartiesAssociatedWithNormJudgeRequest, options?: Configuration): Promise<HttpInfo<AssociatedNormPartyResponse1>> {
        return this.api.getNormPartiesAssociatedWithNormJudgeWithHttpInfo(param.normJudgeId, param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Search for parties that have appeared before the specified judge using a keyword expression. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtLocationId IN (\"COLODj4BBVTho3pKpz\",\"COLOPUfJRhw5yPxgRi\")**| | **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple Ids Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all Parties associated with judge with norm id NJUDT7jCZyFNeLGpRq of all cases with case type id CTYPGkaW3aGJyKGyfn and case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Parties Associated with the Judge.
     * @param param the request object
     */
    public getNormPartiesAssociatedWithNormJudge(param: JudgeAnalyticsAPIApiGetNormPartiesAssociatedWithNormJudgeRequest, options?: Configuration): Promise<AssociatedNormPartyResponse1> {
        return this.api.getNormPartiesAssociatedWithNormJudge(param.normJudgeId, param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * ### Search for a judge using a keyword expression. 
     * Judge search.
     * @param param the request object
     */
    public searchNormalizedJudgesWithHttpInfo(param: JudgeAnalyticsAPIApiSearchNormalizedJudgesRequest = {}, options?: Configuration): Promise<HttpInfo<SearchNormalizedJudges200Response>> {
        return this.api.searchNormalizedJudgesWithHttpInfo(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * ### Search for a judge using a keyword expression. 
     * Judge search.
     * @param param the request object
     */
    public searchNormalizedJudges(param: JudgeAnalyticsAPIApiSearchNormalizedJudgesRequest = {}, options?: Configuration): Promise<SearchNormalizedJudges200Response> {
        return this.api.searchNormalizedJudges(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * ### Retrieve the desired search for a judge. 
     * Norm judge search results for a given normJudgeSearchId.
     * @param param the request object
     */
    public searchNormalizedJudgesByIdWithHttpInfo(param: JudgeAnalyticsAPIApiSearchNormalizedJudgesByIdRequest, options?: Configuration): Promise<HttpInfo<SearchNormalizedJudges200Response>> {
        return this.api.searchNormalizedJudgesByIdWithHttpInfo(param.normJudgeSearchId, param.pageNumber,  options).toPromise();
    }

    /**
     * ### Retrieve the desired search for a judge. 
     * Norm judge search results for a given normJudgeSearchId.
     * @param param the request object
     */
    public searchNormalizedJudgesById(param: JudgeAnalyticsAPIApiSearchNormalizedJudgesByIdRequest, options?: Configuration): Promise<SearchNormalizedJudges200Response> {
        return this.api.searchNormalizedJudgesById(param.normJudgeSearchId, param.pageNumber,  options).toPromise();
    }

}

import { ObservableLawFirmAnalyticsAPIApi } from "./ObservableAPI";
import { LawFirmAnalyticsAPIApiRequestFactory, LawFirmAnalyticsAPIApiResponseProcessor} from "../apis/LawFirmAnalyticsAPIApi";

export interface LawFirmAnalyticsAPIApiGetNormAttorneysAssociatedWithNormLawFirmRequest {
    /**
     * The normLawFirmId value of the desired normalized law firm.   - minimum: 18   - maximum: 18 
     * @type string
     * @memberof LawFirmAnalyticsAPIApigetNormAttorneysAssociatedWithNormLawFirm
     */
    normLawFirmId: string
    /**
     * The keyword expression targeting the desired attorneys. Keywords should be constructed according to the guidelines given above.
     * @type string
     * @memberof LawFirmAnalyticsAPIApigetNormAttorneysAssociatedWithNormLawFirm
     */
    q?: string
    /**
     * The page number of the desired page of results. - minimum: 1 
     * @type number
     * @memberof LawFirmAnalyticsAPIApigetNormAttorneysAssociatedWithNormLawFirm
     */
    pageNumber?: number
}

export interface LawFirmAnalyticsAPIApiGetNormJudgesAssociatedWithNormLawFirmRequest {
    /**
     * The normLawFirmId value of the desired normalized law firm.   - minimum: 18   - maximum: 18 
     * @type string
     * @memberof LawFirmAnalyticsAPIApigetNormJudgesAssociatedWithNormLawFirm
     */
    normLawFirmId: string
    /**
     * The keyword expression targeting the desired judges. Keywords should be constructed according to the guidelines given above.
     * @type string
     * @memberof LawFirmAnalyticsAPIApigetNormJudgesAssociatedWithNormLawFirm
     */
    q?: string
    /**
     * The page number of the desired page of results. - minimum: 1 
     * @type number
     * @memberof LawFirmAnalyticsAPIApigetNormJudgesAssociatedWithNormLawFirm
     */
    pageNumber?: number
}

export interface LawFirmAnalyticsAPIApiGetNormLawFirmByIdRequest {
    /**
     * The normLawFirmId value of the desired normalized law firm.   - minimum: 18   - maximum: 18 
     * @type string
     * @memberof LawFirmAnalyticsAPIApigetNormLawFirmById
     */
    normLawFirmId: string
}

export interface LawFirmAnalyticsAPIApiGetNormPartiesAssociatedWithNormLawFirmRequest {
    /**
     * The normLawFirmId value of the desired normalized law firm.   - minimum: 18   - maximum: 18 
     * @type string
     * @memberof LawFirmAnalyticsAPIApigetNormPartiesAssociatedWithNormLawFirm
     */
    normLawFirmId: string
    /**
     * The keyword expression targeting the desired parties. Keywords should be constructed according to the guidelines given above.
     * @type string
     * @memberof LawFirmAnalyticsAPIApigetNormPartiesAssociatedWithNormLawFirm
     */
    q?: string
    /**
     * The page number of the desired page of results. - minimum: 1 
     * @type number
     * @memberof LawFirmAnalyticsAPIApigetNormPartiesAssociatedWithNormLawFirm
     */
    pageNumber?: number
}

export interface LawFirmAnalyticsAPIApiSearchNormalizedLawFirmsRequest {
    /**
     * The keyword expression targeting the desired law firms.&lt;/a&gt; 
     * @type string
     * @memberof LawFirmAnalyticsAPIApisearchNormalizedLawFirms
     */
    q?: string
    /**
     * The page number of the desired page of results. - Minimum: 1 - Maximum: 1000 
     * @type number
     * @memberof LawFirmAnalyticsAPIApisearchNormalizedLawFirms
     */
    pageNumber?: number
}

export interface LawFirmAnalyticsAPIApiSearchNormalizedLawFirmsByIdRequest {
    /**
     * The normLawFirmSearchId value of the search to be retrieved.
     * @type string
     * @memberof LawFirmAnalyticsAPIApisearchNormalizedLawFirmsById
     */
    normLawFirmSearchId: string
    /**
     * The page number of the desired page of results. - Minimum: 1 - Maximum: 1000 
     * @type number
     * @memberof LawFirmAnalyticsAPIApisearchNormalizedLawFirmsById
     */
    pageNumber?: number
}

export class ObjectLawFirmAnalyticsAPIApi {
    private api: ObservableLawFirmAnalyticsAPIApi

    public constructor(configuration: Configuration, requestFactory?: LawFirmAnalyticsAPIApiRequestFactory, responseProcessor?: LawFirmAnalyticsAPIApiResponseProcessor) {
        this.api = new ObservableLawFirmAnalyticsAPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve the attorneys associated with a given normalized law firm. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId**  | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed  |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed  |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **caseFiledDate**  | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo**  | Multiple Ids Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br>         ## Example Query Query to get all attorneys associated with LawFirm with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Attorneys working for the Law Firm.
     * @param param the request object
     */
    public getNormAttorneysAssociatedWithNormLawFirmWithHttpInfo(param: LawFirmAnalyticsAPIApiGetNormAttorneysAssociatedWithNormLawFirmRequest, options?: Configuration): Promise<HttpInfo<AssociatedNormAttorneyResponse1>> {
        return this.api.getNormAttorneysAssociatedWithNormLawFirmWithHttpInfo(param.normLawFirmId, param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve the attorneys associated with a given normalized law firm. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId**  | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed  |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed  |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **caseFiledDate**  | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo**  | Multiple Ids Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br>         ## Example Query Query to get all attorneys associated with LawFirm with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Attorneys working for the Law Firm.
     * @param param the request object
     */
    public getNormAttorneysAssociatedWithNormLawFirm(param: LawFirmAnalyticsAPIApiGetNormAttorneysAssociatedWithNormLawFirmRequest, options?: Configuration): Promise<AssociatedNormAttorneyResponse1> {
        return this.api.getNormAttorneysAssociatedWithNormLawFirm(param.normLawFirmId, param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve the judges before which a given normalized law firm has appeared. <br><br> ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **caseFiledDate** | Single Allowed   |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple Ids Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all judges associated with LawFirm with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Judges Faced By the Law Firm.
     * @param param the request object
     */
    public getNormJudgesAssociatedWithNormLawFirmWithHttpInfo(param: LawFirmAnalyticsAPIApiGetNormJudgesAssociatedWithNormLawFirmRequest, options?: Configuration): Promise<HttpInfo<AssociatedNormJudgeResponse1>> {
        return this.api.getNormJudgesAssociatedWithNormLawFirmWithHttpInfo(param.normLawFirmId, param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve the judges before which a given normalized law firm has appeared. <br><br> ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **caseFiledDate** | Single Allowed   |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple Ids Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all judges associated with LawFirm with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Judges Faced By the Law Firm.
     * @param param the request object
     */
    public getNormJudgesAssociatedWithNormLawFirm(param: LawFirmAnalyticsAPIApiGetNormJudgesAssociatedWithNormLawFirmRequest, options?: Configuration): Promise<AssociatedNormJudgeResponse1> {
        return this.api.getNormJudgesAssociatedWithNormLawFirm(param.normLawFirmId, param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve the specified normalized law firm. 
     * Norm LawFirm Details.
     * @param param the request object
     */
    public getNormLawFirmByIdWithHttpInfo(param: LawFirmAnalyticsAPIApiGetNormLawFirmByIdRequest, options?: Configuration): Promise<HttpInfo<NormLawFirm1>> {
        return this.api.getNormLawFirmByIdWithHttpInfo(param.normLawFirmId,  options).toPromise();
    }

    /**
     * Retrieve the specified normalized law firm. 
     * Norm LawFirm Details.
     * @param param the request object
     */
    public getNormLawFirmById(param: LawFirmAnalyticsAPIApiGetNormLawFirmByIdRequest, options?: Configuration): Promise<NormLawFirm1> {
        return this.api.getNormLawFirmById(param.normLawFirmId,  options).toPromise();
    }

    /**
     * Retrieve the parties that the given normalized law firm has represented. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all parties associated with LawFirm with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Parties Represented by the Law Firm.
     * @param param the request object
     */
    public getNormPartiesAssociatedWithNormLawFirmWithHttpInfo(param: LawFirmAnalyticsAPIApiGetNormPartiesAssociatedWithNormLawFirmRequest, options?: Configuration): Promise<HttpInfo<AssociatedNormPartyResponse1>> {
        return this.api.getNormPartiesAssociatedWithNormLawFirmWithHttpInfo(param.normLawFirmId, param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve the parties that the given normalized law firm has represented. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all parties associated with LawFirm with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Parties Represented by the Law Firm.
     * @param param the request object
     */
    public getNormPartiesAssociatedWithNormLawFirm(param: LawFirmAnalyticsAPIApiGetNormPartiesAssociatedWithNormLawFirmRequest, options?: Configuration): Promise<AssociatedNormPartyResponse1> {
        return this.api.getNormPartiesAssociatedWithNormLawFirm(param.normLawFirmId, param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * ### Retrieve a normalized law firm using a keyword expression. 
     * Law firm search.
     * @param param the request object
     */
    public searchNormalizedLawFirmsWithHttpInfo(param: LawFirmAnalyticsAPIApiSearchNormalizedLawFirmsRequest = {}, options?: Configuration): Promise<HttpInfo<SearchNormalizedLawFirms200Response>> {
        return this.api.searchNormalizedLawFirmsWithHttpInfo(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * ### Retrieve a normalized law firm using a keyword expression. 
     * Law firm search.
     * @param param the request object
     */
    public searchNormalizedLawFirms(param: LawFirmAnalyticsAPIApiSearchNormalizedLawFirmsRequest = {}, options?: Configuration): Promise<SearchNormalizedLawFirms200Response> {
        return this.api.searchNormalizedLawFirms(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * ### Retrieve the specified search for a normalized law firm. 
     * Norm law firm search result for a given normLawFirmSearchId.
     * @param param the request object
     */
    public searchNormalizedLawFirmsByIdWithHttpInfo(param: LawFirmAnalyticsAPIApiSearchNormalizedLawFirmsByIdRequest, options?: Configuration): Promise<HttpInfo<SearchNormalizedLawFirms200Response>> {
        return this.api.searchNormalizedLawFirmsByIdWithHttpInfo(param.normLawFirmSearchId, param.pageNumber,  options).toPromise();
    }

    /**
     * ### Retrieve the specified search for a normalized law firm. 
     * Norm law firm search result for a given normLawFirmSearchId.
     * @param param the request object
     */
    public searchNormalizedLawFirmsById(param: LawFirmAnalyticsAPIApiSearchNormalizedLawFirmsByIdRequest, options?: Configuration): Promise<SearchNormalizedLawFirms200Response> {
        return this.api.searchNormalizedLawFirmsById(param.normLawFirmSearchId, param.pageNumber,  options).toPromise();
    }

}

import { ObservablePACERAPIApi } from "./ObservableAPI";
import { PACERAPIApiRequestFactory, PACERAPIApiResponseProcessor} from "../apis/PACERAPIApi";

export interface PACERAPIApiAllCourtsPacerCaseLocatorCaseSearchRequest {
    /**
     * The username of the PACER account under which the search is to be performed.
     * @type string
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorCaseSearch
     */
    pacerUserId: string
    /**
     * The PACER client code under which the search is to be performed.
     * @type string
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorCaseSearch
     */
    pacerClientCode: string
    /**
     * The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @type string
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorCaseSearch
     */
    caseNumber?: string
    /**
     * The PACER-assigned identifier of the target case.
     * @type number
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorCaseSearch
     */
    pacerCaseId?: number
    /**
     * The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @type string
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorCaseSearch
     */
    caseTitle?: string
    /**
     * The divisional office in which the case was filed.
     * @type number
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorCaseSearch
     */
    caseOffice?: number
    /**
     * The PACER-assigned sequence number of the target case. Ex 12345
     * @type number
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorCaseSearch
     */
    caseSequenceNumber?: number
    /**
     * The two- or four-digit year in which the target case was filed.
     * @type number
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorCaseSearch
     */
    caseYear?: number
    /**
     * The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @type Array&lt;string&gt;
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorCaseSearch
     */
    caseTypeArray?: Array<string>
    /**
     * The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @type Array&lt;string&gt;
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorCaseSearch
     */
    courtRegionIdArray?: Array<string>
    /**
     * The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorCaseSearch
     */
    caseFiledStartDate?: Date
    /**
     * The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorCaseSearch
     */
    caseFiledEndDate?: Date
    /**
     * The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorCaseSearch
     */
    caseTerminatedStartDate?: Date
    /**
     * The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorCaseSearch
     */
    caseTerminatedEndDate?: Date
    /**
     * How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC
     * @type string
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorCaseSearch
     */
    sortParameterQuery?: string
    /**
     * Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @type &#39;open&#39; | &#39;closed&#39;
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorCaseSearch
     */
    caseStatus?: 'open' | 'closed'
    /**
     * The page number of the search results to be retrieved.
     * @type number
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorCaseSearch
     */
    pageNumber?: number
}

export interface PACERAPIApiAllCourtsPacerCaseLocatorPartySearchRequest {
    /**
     * The username of the PACER account under which the search is to be performed.
     * @type string
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorPartySearch
     */
    pacerUserId: string
    /**
     * The PACER client code under which the search is to be performed.
     * @type string
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorPartySearch
     */
    pacerClientCode: string
    /**
     * The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @type string
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorPartySearch
     */
    caseNumber?: string
    /**
     * The PACER-assigned identifier of the target case.
     * @type number
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorPartySearch
     */
    pacerCaseId?: number
    /**
     * The last name (for an individual) or the entity name (for a business entity) of the target party.
     * @type string
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorPartySearch
     */
    lastName?: string
    /**
     * The first name of the target party.
     * @type string
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorPartySearch
     */
    firstName?: string
    /**
     * The middle name of the target party.
     * @type string
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorPartySearch
     */
    middleName?: string
    /**
     * The suffix (e.g., Jr., III) of the target party\&#39;s name.
     * @type string
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorPartySearch
     */
    generation?: string
    /**
     * The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @type string
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorPartySearch
     */
    partyType?: string
    /**
     * Specify whether the search string must match the name of the target party exactly.
     * @type boolean
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorPartySearch
     */
    partyExactNameMatch?: boolean
    /**
     * The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @type Array&lt;string&gt;
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorPartySearch
     */
    partyRoleArray?: Array<string>
    /**
     * The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @type string
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorPartySearch
     */
    caseTitle?: string
    /**
     * The divisional office in which the case was filed.
     * @type number
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorPartySearch
     */
    caseOffice?: number
    /**
     * The PACER-assigned sequence number of the target case.
     * @type number
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorPartySearch
     */
    caseSequenceNumber?: number
    /**
     * The two- or four-digit year in which the target case was filed.
     * @type number
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorPartySearch
     */
    caseYear?: number
    /**
     * The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @type Array&lt;string&gt;
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorPartySearch
     */
    caseTypeArray?: Array<string>
    /**
     * The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @type Array&lt;string&gt;
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorPartySearch
     */
    courtRegionIdArray?: Array<string>
    /**
     * Limit the results of the search to those cases from the year specified or later
     * @type number
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorPartySearch
     */
    caseYearFrom?: number
    /**
     * Limit the results of the search to those cases from the year specified or earlier
     * @type number
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorPartySearch
     */
    caseYearTo?: number
    /**
     * The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorPartySearch
     */
    caseFiledStartDate?: Date
    /**
     * The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorPartySearch
     */
    caseFiledEndDate?: Date
    /**
     * The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorPartySearch
     */
    caseTerminatedStartDate?: Date
    /**
     * The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorPartySearch
     */
    caseTerminatedEndDate?: Date
    /**
     * How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtCase.caseOffice,ASC&amp;caseid,DESC
     * @type string
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorPartySearch
     */
    sortParameterQuery?: string
    /**
     * Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @type &#39;open&#39; | &#39;closed&#39;
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorPartySearch
     */
    caseStatus?: 'open' | 'closed'
    /**
     * The page number of the search results to be retrieved.
     * @type number
     * @memberof PACERAPIApiallCourtsPacerCaseLocatorPartySearch
     */
    pageNumber?: number
}

export interface PACERAPIApiAppealCourtsPacerCaseLocatorCaseSearchRequest {
    /**
     * The username of the PACER account under which the search is to be performed.
     * @type string
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorCaseSearch
     */
    pacerUserId: string
    /**
     * The PACER client code under which the search is to be performed.
     * @type string
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorCaseSearch
     */
    pacerClientCode: string
    /**
     * The case number of the target case. You may use the following case-number formats:    yy-nnnnn    where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits).
     * @type string
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorCaseSearch
     */
    caseNumber?: string
    /**
     * The PACER-assigned identifier of the target case.
     * @type number
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorCaseSearch
     */
    pacerCaseId?: number
    /**
     * The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @type string
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorCaseSearch
     */
    caseTitle?: string
    /**
     * The divisional office in which the case was filed.
     * @type number
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorCaseSearch
     */
    caseOffice?: number
    /**
     * The PACER-assigned sequence number of the target case. Ex 12345
     * @type number
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorCaseSearch
     */
    caseSequenceNumber?: number
    /**
     * The two- or four-digit year in which the target case was filed.
     * @type number
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorCaseSearch
     */
    caseYear?: number
    /**
     * The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @type Array&lt;string&gt;
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorCaseSearch
     */
    caseTypeArray?: Array<string>
    /**
     * The PACER-assigned nature of suit classification of the target case. Please see Appendix E for valid nature-of-suit classifications for cases in U.S. Courts of Appeals.    Scenario: When mulitple nature of suits needs to be requested.    Imagine for a given case number 12-1234 I would like to search with the nature of suit 1110 (Insurance) and 1150 (Overpayments &amp; Enforc. of Judgments), My query in the request will look like the example mentioned below.    Example: natureOfSuitsArray&#x3D;1110&amp;natureOfSuitsArray&#x3D;1150
     * @type Array&lt;string&gt;
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorCaseSearch
     */
    natureOfSuitsArray?: Array<string>
    /**
     * The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @type Array&lt;string&gt;
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorCaseSearch
     */
    courtRegionIdArray?: Array<string>
    /**
     * The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorCaseSearch
     */
    caseFiledStartDate?: Date
    /**
     * The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorCaseSearch
     */
    caseFiledEndDate?: Date
    /**
     * The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorCaseSearch
     */
    caseTerminatedStartDate?: Date
    /**
     * The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorCaseSearch
     */
    caseTerminatedEndDate?: Date
    /**
     * How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC
     * @type string
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorCaseSearch
     */
    sortParameterQuery?: string
    /**
     * Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @type &#39;open&#39; | &#39;closed&#39;
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorCaseSearch
     */
    caseStatus?: 'open' | 'closed'
    /**
     * The page number of the search results to be retrieved.
     * @type number
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorCaseSearch
     */
    pageNumber?: number
}

export interface PACERAPIApiAppealCourtsPacerCaseLocatorPartySearchRequest {
    /**
     * The username of the PACER account under which the search is to be performed.
     * @type string
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorPartySearch
     */
    pacerUserId: string
    /**
     * The PACER client code under which the search is to be performed.
     * @type string
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorPartySearch
     */
    pacerClientCode: string
    /**
     * The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @type string
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorPartySearch
     */
    caseNumber?: string
    /**
     * The PACER-assigned identifier of the target case.
     * @type number
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorPartySearch
     */
    pacerCaseId?: number
    /**
     * The last name (for an individual) or the entity name (for a business entity) of the target party.
     * @type string
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorPartySearch
     */
    lastName?: string
    /**
     * The first name of the target party.
     * @type string
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorPartySearch
     */
    firstName?: string
    /**
     * The middle name of the target party.
     * @type string
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorPartySearch
     */
    middleName?: string
    /**
     * The suffix (e.g., Jr., III) of the target party\&#39;s name.
     * @type string
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorPartySearch
     */
    generation?: string
    /**
     * The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @type string
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorPartySearch
     */
    partyType?: string
    /**
     * Specify whether the search string must match the name of the target party exactly.
     * @type boolean
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorPartySearch
     */
    partyExactNameMatch?: boolean
    /**
     * The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @type Array&lt;string&gt;
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorPartySearch
     */
    partyRoleArray?: Array<string>
    /**
     * The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @type string
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorPartySearch
     */
    caseTitle?: string
    /**
     * The divisional office in which the case was filed.
     * @type number
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorPartySearch
     */
    caseOffice?: number
    /**
     * The PACER-assigned sequence number of the target case. Ex 12345
     * @type number
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorPartySearch
     */
    caseSequenceNumber?: number
    /**
     * The two- or four-digit year in which the target case was filed.
     * @type number
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorPartySearch
     */
    caseYear?: number
    /**
     * The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @type Array&lt;string&gt;
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorPartySearch
     */
    caseTypeArray?: Array<string>
    /**
     * The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @type Array&lt;string&gt;
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorPartySearch
     */
    courtRegionIdArray?: Array<string>
    /**
     * Limit the results of the search to those cases from the year specified or later
     * @type number
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorPartySearch
     */
    caseYearFrom?: number
    /**
     * Limit the results of the search to those cases from the year specified or earlier
     * @type number
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorPartySearch
     */
    caseYearTo?: number
    /**
     * The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorPartySearch
     */
    caseFiledStartDate?: Date
    /**
     * The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorPartySearch
     */
    caseFiledEndDate?: Date
    /**
     * The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorPartySearch
     */
    caseTerminatedStartDate?: Date
    /**
     * The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorPartySearch
     */
    caseTerminatedEndDate?: Date
    /**
     * How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtCase.caseOffice,ASC&amp;caseid,DESC
     * @type string
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorPartySearch
     */
    sortParameterQuery?: string
    /**
     * Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @type &#39;open&#39; | &#39;closed&#39;
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorPartySearch
     */
    caseStatus?: 'open' | 'closed'
    /**
     * The page number of the search results to be retrieved.
     * @type number
     * @memberof PACERAPIApiappealCourtsPacerCaseLocatorPartySearch
     */
    pageNumber?: number
}

export interface PACERAPIApiBankruptcyCourtsPacerCaseLocatorCaseSearchRequest {
    /**
     * The username of the PACER account under which the search is to be performed.
     * @type string
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorCaseSearch
     */
    pacerUserId: string
    /**
     * The PACER client code under which the search is to be performed.
     * @type string
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorCaseSearch
     */
    pacerClientCode: string
    /**
     * The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @type string
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorCaseSearch
     */
    caseNumber?: string
    /**
     * The PACER-assigned identifier of the target case.
     * @type number
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorCaseSearch
     */
    pacerCaseId?: number
    /**
     * The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @type string
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorCaseSearch
     */
    caseTitle?: string
    /**
     * The divisional office in which the case was filed.
     * @type number
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorCaseSearch
     */
    caseOffice?: number
    /**
     * The PACER-assigned sequence number of the target case. Ex 12345
     * @type number
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorCaseSearch
     */
    caseSequenceNumber?: number
    /**
     * The two- or four-digit year in which the target case was filed.
     * @type number
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorCaseSearch
     */
    caseYear?: number
    /**
     * The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @type Array&lt;string&gt;
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorCaseSearch
     */
    caseTypeArray?: Array<string>
    /**
     * The chapter of the U.S. Bankruptcy Code under which the target case was filed. Please see Appendix D for a list of valid chapter numbers.    Scenario: When mulitple Federal Bankruptcy Chapters needs to be requested.    Imagine for a given case number 12-1234 I would like to search with the Federal Bankruptcy Chapters 7 (Chapter 7) and 11 (Chapter 11), My query in the request will look like the example mentioned below.    Example: federalBankruptcyChapterArray&#x3D;7&amp;federalBankruptcyChapterArray&#x3D;11
     * @type Array&lt;string&gt;
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorCaseSearch
     */
    federalBankruptcyChapterArray?: Array<string>
    /**
     * The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @type Array&lt;string&gt;
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorCaseSearch
     */
    courtRegionIdArray?: Array<string>
    /**
     * The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorCaseSearch
     */
    caseFiledStartDate?: Date
    /**
     * The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorCaseSearch
     */
    caseFiledEndDate?: Date
    /**
     * The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorCaseSearch
     */
    caseTerminatedStartDate?: Date
    /**
     * The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorCaseSearch
     */
    caseTerminatedEndDate?: Date
    /**
     * The date on which or after which the target case was marked as discharged within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type.
     * @type Date
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorCaseSearch
     */
    caseDischargedStartDate?: Date
    /**
     * The date on which or before which the target case was marked as discharged within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type.
     * @type Date
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorCaseSearch
     */
    caseDischargedEndDate?: Date
    /**
     * The date on which or after which the target case was marked as dismissed within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type.
     * @type Date
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorCaseSearch
     */
    caseDismissedStartDate?: Date
    /**
     * The date on which or before which the target case was marked as dismissed within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorCaseSearch
     */
    caseDismissedEndDate?: Date
    /**
     * How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC
     * @type string
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorCaseSearch
     */
    sortParameterQuery?: string
    /**
     * Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @type &#39;open&#39; | &#39;closed&#39;
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorCaseSearch
     */
    caseStatus?: 'open' | 'closed'
    /**
     * The page number of the search results to be retrieved.
     * @type number
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorCaseSearch
     */
    pageNumber?: number
}

export interface PACERAPIApiBankruptcyCourtsPacerCaseLocatorPartySearchRequest {
    /**
     * The username of the PACER account under which the search is to be performed.
     * @type string
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorPartySearch
     */
    pacerUserId: string
    /**
     * The PACER client code under which the search is to be performed.
     * @type string
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorPartySearch
     */
    pacerClientCode: string
    /**
     * The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @type string
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorPartySearch
     */
    caseNumber?: string
    /**
     * The PACER-assigned identifier of the target case.
     * @type number
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorPartySearch
     */
    pacerCaseId?: number
    /**
     * The last name (for an individual) or the entity name (for a business entity) of the target party.
     * @type string
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorPartySearch
     */
    lastName?: string
    /**
     * The first name of the target party.
     * @type string
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorPartySearch
     */
    firstName?: string
    /**
     * The middle name of the target party.
     * @type string
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorPartySearch
     */
    middleName?: string
    /**
     * The suffix (e.g., Jr., III) of the target party\&#39;s name.
     * @type string
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorPartySearch
     */
    generation?: string
    /**
     * The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @type string
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorPartySearch
     */
    partyType?: string
    /**
     * Specify whether the search string must match the name of the target party exactly.
     * @type boolean
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorPartySearch
     */
    partyExactNameMatch?: boolean
    /**
     * The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @type Array&lt;string&gt;
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorPartySearch
     */
    partyRoleArray?: Array<string>
    /**
     * The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @type string
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorPartySearch
     */
    caseTitle?: string
    /**
     * The divisional office in which the case was filed.
     * @type number
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorPartySearch
     */
    caseOffice?: number
    /**
     * The PACER-assigned sequence number of the target case. Ex 12345
     * @type number
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorPartySearch
     */
    caseSequenceNumber?: number
    /**
     * The two- or four-digit year in which the target case was filed.
     * @type number
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorPartySearch
     */
    caseYear?: number
    /**
     * The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @type Array&lt;string&gt;
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorPartySearch
     */
    caseTypeArray?: Array<string>
    /**
     * The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @type Array&lt;string&gt;
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorPartySearch
     */
    courtRegionIdArray?: Array<string>
    /**
     * Limit the results of the search to those cases from the year specified or later
     * @type number
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorPartySearch
     */
    caseYearFrom?: number
    /**
     * Limit the results of the search to those cases from the year specified or earlier
     * @type number
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorPartySearch
     */
    caseYearTo?: number
    /**
     * The Social Security number or the federal Employer Identification Number of the target party. Either number can be entered with or without dashes.
     * @type string
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorPartySearch
     */
    ssnOrEin?: string
    /**
     * The last four digits of the Social Security number of the target party.   Note: When specified, a last name/entity name must also be specified.
     * @type string
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorPartySearch
     */
    fourDigitSsn?: string
    /**
     * The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorPartySearch
     */
    caseFiledStartDate?: Date
    /**
     * The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorPartySearch
     */
    caseFiledEndDate?: Date
    /**
     * The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorPartySearch
     */
    caseTerminatedStartDate?: Date
    /**
     * The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorPartySearch
     */
    caseTerminatedEndDate?: Date
    /**
     * The date on which or after which the target case was marked as discharged within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type.
     * @type Date
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorPartySearch
     */
    caseDischargedStartDate?: Date
    /**
     * The date on which or before which the target case was marked as discharged within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type.
     * @type Date
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorPartySearch
     */
    caseDischargedEndDate?: Date
    /**
     * The date on which or after which the target case was marked as dismissed within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type.
     * @type Date
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorPartySearch
     */
    caseDismissedStartDate?: Date
    /**
     * The date on which or before which the target case was marked as dismissed within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorPartySearch
     */
    caseDismissedEndDate?: Date
    /**
     * How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtCase.caseOffice,ASC&amp;caseid,DESC
     * @type string
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorPartySearch
     */
    sortParameterQuery?: string
    /**
     * Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @type &#39;open&#39; | &#39;closed&#39;
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorPartySearch
     */
    caseStatus?: 'open' | 'closed'
    /**
     * The page number of the search results to be retrieved.
     * @type number
     * @memberof PACERAPIApibankruptcyCourtsPacerCaseLocatorPartySearch
     */
    pageNumber?: number
}

export interface PACERAPIApiCivilCourtsPacerCaseLocatorCaseSearchRequest {
    /**
     * The username of the PACER account under which the search is to be performed.
     * @type string
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorCaseSearch
     */
    pacerUserId: string
    /**
     * The PACER client code under which the search is to be performed.
     * @type string
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorCaseSearch
     */
    pacerClientCode: string
    /**
     * The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @type string
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorCaseSearch
     */
    caseNumber?: string
    /**
     * The PACER-assigned identifier of the target case.
     * @type number
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorCaseSearch
     */
    pacerCaseId?: number
    /**
     * The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @type string
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorCaseSearch
     */
    caseTitle?: string
    /**
     * The divisional office in which the case was filed.
     * @type number
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorCaseSearch
     */
    caseOffice?: number
    /**
     * The PACER-assigned sequence number of the target case.
     * @type number
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorCaseSearch
     */
    caseSequenceNumber?: number
    /**
     * The two- or four-digit year in which the target case was filed.
     * @type number
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorCaseSearch
     */
    caseYear?: number
    /**
     * The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @type Array&lt;string&gt;
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorCaseSearch
     */
    caseTypeArray?: Array<string>
    /**
     * The PACER-assigned nature of suit classification of the target case. Please see Appendix E for valid nature-of-suit classifications for cases.    Scenario: When mulitple nature of suits needs to be requested.    Imagine for a given case number 12-1234 I would like to search with the nature of suit 110 (Insurance) and 140 (Negotiable Instrument), My query in the request will look like the example mentioned below.    Example: natureOfSuitsArray&#x3D;110&amp;natureOfSuitsArray&#x3D;140
     * @type Array&lt;string&gt;
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorCaseSearch
     */
    natureOfSuitsArray?: Array<string>
    /**
     * The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @type Array&lt;string&gt;
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorCaseSearch
     */
    courtRegionIdArray?: Array<string>
    /**
     * The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorCaseSearch
     */
    caseFiledStartDate?: Date
    /**
     * The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorCaseSearch
     */
    caseFiledEndDate?: Date
    /**
     * The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorCaseSearch
     */
    caseTerminatedStartDate?: Date
    /**
     * The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorCaseSearch
     */
    caseTerminatedEndDate?: Date
    /**
     * How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC
     * @type string
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorCaseSearch
     */
    sortParameterQuery?: string
    /**
     * Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @type &#39;open&#39; | &#39;closed&#39;
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorCaseSearch
     */
    caseStatus?: 'open' | 'closed'
    /**
     * The page number of the search results to be retrieved.
     * @type number
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorCaseSearch
     */
    pageNumber?: number
}

export interface PACERAPIApiCivilCourtsPacerCaseLocatorPartySearchRequest {
    /**
     * The username of the PACER account under which the search is to be performed.
     * @type string
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorPartySearch
     */
    pacerUserId: string
    /**
     * The PACER client code under which the search is to be performed.
     * @type string
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorPartySearch
     */
    pacerClientCode: string
    /**
     * The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @type string
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorPartySearch
     */
    caseNumber?: string
    /**
     * The PACER-assigned identifier of the target case.
     * @type number
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorPartySearch
     */
    pacerCaseId?: number
    /**
     * The last name (for an individual) or the entity name (for a business entity) of the target party.
     * @type string
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorPartySearch
     */
    lastName?: string
    /**
     * The first name of the target party.
     * @type string
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorPartySearch
     */
    firstName?: string
    /**
     * The middle name of the target party.
     * @type string
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorPartySearch
     */
    middleName?: string
    /**
     * The name suffix (e.g., III, MD).
     * @type string
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorPartySearch
     */
    generation?: string
    /**
     * The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @type string
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorPartySearch
     */
    partyType?: string
    /**
     * Specify whether the search string must match the name of the target party exactly.
     * @type boolean
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorPartySearch
     */
    partyExactNameMatch?: boolean
    /**
     * The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @type Array&lt;string&gt;
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorPartySearch
     */
    partyRoleArray?: Array<string>
    /**
     * The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @type string
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorPartySearch
     */
    caseTitle?: string
    /**
     * The divisional office in which the case was filed.
     * @type number
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorPartySearch
     */
    caseOffice?: number
    /**
     * The PACER-assigned sequence number of the target case. Ex 12345
     * @type number
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorPartySearch
     */
    caseSequenceNumber?: number
    /**
     * The two- or four-digit year in which the target case was filed.
     * @type number
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorPartySearch
     */
    caseYear?: number
    /**
     * The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @type Array&lt;string&gt;
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorPartySearch
     */
    caseTypeArray?: Array<string>
    /**
     * The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @type Array&lt;string&gt;
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorPartySearch
     */
    courtRegionIdArray?: Array<string>
    /**
     * Limit the results of the search to those cases from the year specified or later
     * @type number
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorPartySearch
     */
    caseYearFrom?: number
    /**
     * Limit the results of the search to those cases from the year specified or earlier
     * @type number
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorPartySearch
     */
    caseYearTo?: number
    /**
     * The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorPartySearch
     */
    caseFiledStartDate?: Date
    /**
     * The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorPartySearch
     */
    caseFiledEndDate?: Date
    /**
     * The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorPartySearch
     */
    caseTerminatedStartDate?: Date
    /**
     * The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorPartySearch
     */
    caseTerminatedEndDate?: Date
    /**
     * How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtCase.caseOffice,ASC&amp;caseid,DESC
     * @type string
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorPartySearch
     */
    sortParameterQuery?: string
    /**
     * Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @type &#39;open&#39; | &#39;closed&#39;
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorPartySearch
     */
    caseStatus?: 'open' | 'closed'
    /**
     * The page number of the search results to be retrieved.
     * @type number
     * @memberof PACERAPIApicivilCourtsPacerCaseLocatorPartySearch
     */
    pageNumber?: number
}

export interface PACERAPIApiCriminalCourtsPacerCaseLocatorCaseSearchRequest {
    /**
     * The username of the PACER account under which the search is to be performed.
     * @type string
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorCaseSearch
     */
    pacerUserId: string
    /**
     * The PACER client code under which the search is to be performed.
     * @type string
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorCaseSearch
     */
    pacerClientCode: string
    /**
     * The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @type string
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorCaseSearch
     */
    caseNumber?: string
    /**
     * The PACER-assigned identifier of the target case.
     * @type number
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorCaseSearch
     */
    pacerCaseId?: number
    /**
     * The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @type string
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorCaseSearch
     */
    caseTitle?: string
    /**
     * The divisional office in which the case was filed.
     * @type number
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorCaseSearch
     */
    caseOffice?: number
    /**
     * The PACER-assigned sequence number of the target case. Ex 12345
     * @type number
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorCaseSearch
     */
    caseSequenceNumber?: number
    /**
     * The two- or four-digit year in which the target case was filed.
     * @type number
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorCaseSearch
     */
    caseYear?: number
    /**
     * The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @type Array&lt;string&gt;
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorCaseSearch
     */
    caseTypeArray?: Array<string>
    /**
     * The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @type Array&lt;string&gt;
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorCaseSearch
     */
    courtRegionIdArray?: Array<string>
    /**
     * The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorCaseSearch
     */
    caseFiledStartDate?: Date
    /**
     * The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorCaseSearch
     */
    caseFiledEndDate?: Date
    /**
     * The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorCaseSearch
     */
    caseTerminatedStartDate?: Date
    /**
     * The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorCaseSearch
     */
    caseTerminatedEndDate?: Date
    /**
     * How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC
     * @type string
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorCaseSearch
     */
    sortParameterQuery?: string
    /**
     * Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @type &#39;open&#39; | &#39;closed&#39;
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorCaseSearch
     */
    caseStatus?: 'open' | 'closed'
    /**
     * The page number of the search results to be retrieved.
     * @type number
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorCaseSearch
     */
    pageNumber?: number
}

export interface PACERAPIApiCriminalCourtsPacerCaseLocatorPartySearchRequest {
    /**
     * The username of the PACER account under which the search is to be performed.
     * @type string
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorPartySearch
     */
    pacerUserId: string
    /**
     * The PACER client code under which the search is to be performed.
     * @type string
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorPartySearch
     */
    pacerClientCode: string
    /**
     * The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @type string
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorPartySearch
     */
    caseNumber?: string
    /**
     * The PACER-assigned identifier of the target case.
     * @type number
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorPartySearch
     */
    pacerCaseId?: number
    /**
     * The last name (for an individual) or the entity name (for a business entity) of the target party.
     * @type string
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorPartySearch
     */
    lastName?: string
    /**
     * The first name of the target party.
     * @type string
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorPartySearch
     */
    firstName?: string
    /**
     * The middle name of the target party.
     * @type string
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorPartySearch
     */
    middleName?: string
    /**
     * The suffix (e.g., Jr., III) of the target party\&#39;s name.
     * @type string
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorPartySearch
     */
    generation?: string
    /**
     * The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @type string
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorPartySearch
     */
    partyType?: string
    /**
     * Specify whether the search string must match the name of the target party exactly.
     * @type boolean
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorPartySearch
     */
    partyExactNameMatch?: boolean
    /**
     * The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @type Array&lt;string&gt;
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorPartySearch
     */
    partyRoleArray?: Array<string>
    /**
     * The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @type string
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorPartySearch
     */
    caseTitle?: string
    /**
     * The divisional office in which the case was filed.
     * @type number
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorPartySearch
     */
    caseOffice?: number
    /**
     * The PACER-assigned sequence number of the target case. Ex 12345
     * @type number
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorPartySearch
     */
    caseSequenceNumber?: number
    /**
     * The two- or four-digit year in which the target case was filed.
     * @type number
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorPartySearch
     */
    caseYear?: number
    /**
     * The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @type Array&lt;string&gt;
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorPartySearch
     */
    caseTypeArray?: Array<string>
    /**
     * The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @type Array&lt;string&gt;
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorPartySearch
     */
    courtRegionIdArray?: Array<string>
    /**
     * Limit the results of the search to those cases from the year specified or later
     * @type number
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorPartySearch
     */
    caseYearFrom?: number
    /**
     * Limit the results of the search to those cases from the year specified or earlier
     * @type number
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorPartySearch
     */
    caseYearTo?: number
    /**
     * The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorPartySearch
     */
    caseFiledStartDate?: Date
    /**
     * The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorPartySearch
     */
    caseFiledEndDate?: Date
    /**
     * The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorPartySearch
     */
    caseTerminatedStartDate?: Date
    /**
     * The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorPartySearch
     */
    caseTerminatedEndDate?: Date
    /**
     * How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtCase.caseOffice,ASC&amp;caseid,DESC
     * @type string
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorPartySearch
     */
    sortParameterQuery?: string
    /**
     * Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @type &#39;open&#39; | &#39;closed&#39;
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorPartySearch
     */
    caseStatus?: 'open' | 'closed'
    /**
     * The page number of the search results to be retrieved.
     * @type number
     * @memberof PACERAPIApicriminalCourtsPacerCaseLocatorPartySearch
     */
    pageNumber?: number
}

export interface PACERAPIApiImportPacerCaseByCourtUsingCaseNumberRequest {
    /**
     * The PACER username of the PACER account under which the case should be imported.
     * @type string
     * @memberof PACERAPIApiimportPacerCaseByCourtUsingCaseNumber
     */
    pacerUserId: string
    /**
     * The PACER client code under which the case should be imported.
     * @type string
     * @memberof PACERAPIApiimportPacerCaseByCourtUsingCaseNumber
     */
    pacerClientCode: string
    /**
     * The case number of the case to be imported.
     * @type string
     * @memberof PACERAPIApiimportPacerCaseByCourtUsingCaseNumber
     */
    caseNumber: string
    /**
     * The courtId value of the court from which the case is to be imported.
     * @type string
     * @memberof PACERAPIApiimportPacerCaseByCourtUsingCaseNumber
     */
    courtId: string
}

export interface PACERAPIApiMultiDistrictCourtsPacerCaseLocatorCaseSearchRequest {
    /**
     * The username of the PACER account under which the search is to be performed.
     * @type string
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorCaseSearch
     */
    pacerUserId: string
    /**
     * The PACER client code under which the search is to be performed.
     * @type string
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorCaseSearch
     */
    pacerClientCode: string
    /**
     * The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @type string
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorCaseSearch
     */
    caseNumber?: string
    /**
     * Master JPML Case Number.
     * @type number
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorCaseSearch
     */
    jpmlNumber?: number
    /**
     * The PACER-assigned identifier of the target case.
     * @type number
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorCaseSearch
     */
    pacerCaseId?: number
    /**
     * The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @type string
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorCaseSearch
     */
    caseTitle?: string
    /**
     * The divisional office in which the case was filed.
     * @type number
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorCaseSearch
     */
    caseOffice?: number
    /**
     * The PACER-assigned sequence number of the target case. Ex 12345
     * @type number
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorCaseSearch
     */
    caseSequenceNumber?: number
    /**
     * The two- or four-digit year in which the target case was filed.
     * @type number
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorCaseSearch
     */
    caseYear?: number
    /**
     * The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @type Array&lt;string&gt;
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorCaseSearch
     */
    caseTypeArray?: Array<string>
    /**
     * The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @type Array&lt;string&gt;
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorCaseSearch
     */
    courtRegionIdArray?: Array<string>
    /**
     * The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorCaseSearch
     */
    caseFiledStartDate?: Date
    /**
     * The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorCaseSearch
     */
    caseFiledEndDate?: Date
    /**
     * The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorCaseSearch
     */
    caseTerminatedStartDate?: Date
    /**
     * The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorCaseSearch
     */
    caseTerminatedEndDate?: Date
    /**
     * How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC
     * @type string
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorCaseSearch
     */
    sortParameterQuery?: string
    /**
     * Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @type &#39;open&#39; | &#39;closed&#39;
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorCaseSearch
     */
    caseStatus?: 'open' | 'closed'
    /**
     * The page number of the search results to be retrieved.
     * @type number
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorCaseSearch
     */
    pageNumber?: number
}

export interface PACERAPIApiMultiDistrictCourtsPacerCaseLocatorPartySearchRequest {
    /**
     * The username of the PACER account under which the search is to be performed.
     * @type string
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorPartySearch
     */
    pacerUserId: string
    /**
     * The PACER client code under which the search is to be performed.
     * @type string
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorPartySearch
     */
    pacerClientCode: string
    /**
     * The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @type string
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorPartySearch
     */
    caseNumber?: string
    /**
     * Master JPML Case Number.
     * @type number
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorPartySearch
     */
    jpmlNumber?: number
    /**
     * The PACER-assigned identifier of the target case.
     * @type number
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorPartySearch
     */
    pacerCaseId?: number
    /**
     * The last name (for an individual) or the entity name (for a business entity) of the target party.
     * @type string
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorPartySearch
     */
    lastName?: string
    /**
     * The first name of the target party.
     * @type string
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorPartySearch
     */
    firstName?: string
    /**
     * The middle name of the target party.
     * @type string
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorPartySearch
     */
    middleName?: string
    /**
     * The suffix (e.g., Jr., III) of the target party\&#39;s name.
     * @type string
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorPartySearch
     */
    generation?: string
    /**
     * The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @type string
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorPartySearch
     */
    partyType?: string
    /**
     * Specify whether the search string must match the name of the target party exactly.
     * @type boolean
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorPartySearch
     */
    partyExactNameMatch?: boolean
    /**
     * The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @type Array&lt;string&gt;
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorPartySearch
     */
    partyRoleArray?: Array<string>
    /**
     * The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @type string
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorPartySearch
     */
    caseTitle?: string
    /**
     * The divisional office in which the case was filed.
     * @type number
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorPartySearch
     */
    caseOffice?: number
    /**
     * The PACER-assigned sequence number of the target case. Ex 12345
     * @type number
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorPartySearch
     */
    caseSequenceNumber?: number
    /**
     * The two- or four-digit year in which the target case was filed.
     * @type number
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorPartySearch
     */
    caseYear?: number
    /**
     * The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @type Array&lt;string&gt;
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorPartySearch
     */
    caseTypeArray?: Array<string>
    /**
     * The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @type Array&lt;string&gt;
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorPartySearch
     */
    courtRegionIdArray?: Array<string>
    /**
     * Limit the results of the search to those cases from the year specified or later
     * @type number
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorPartySearch
     */
    caseYearFrom?: number
    /**
     * Limit the results of the search to those cases from the year specified or earlier
     * @type number
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorPartySearch
     */
    caseYearTo?: number
    /**
     * The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorPartySearch
     */
    caseFiledStartDate?: Date
    /**
     * The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorPartySearch
     */
    caseFiledEndDate?: Date
    /**
     * The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorPartySearch
     */
    caseTerminatedStartDate?: Date
    /**
     * The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @type Date
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorPartySearch
     */
    caseTerminatedEndDate?: Date
    /**
     * How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtCase.caseOffice,ASC&amp;caseid,DESC
     * @type string
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorPartySearch
     */
    sortParameterQuery?: string
    /**
     * Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @type &#39;open&#39; | &#39;closed&#39;
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorPartySearch
     */
    caseStatus?: 'open' | 'closed'
    /**
     * The page number of the search results to be retrieved.
     * @type number
     * @memberof PACERAPIApimultiDistrictCourtsPacerCaseLocatorPartySearch
     */
    pageNumber?: number
}

export class ObjectPACERAPIApi {
    private api: ObservablePACERAPIApi

    public constructor(configuration: Configuration, requestFactory?: PACERAPIApiRequestFactory, responseProcessor?: PACERAPIApiResponseProcessor) {
        this.api = new ObservablePACERAPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Search all courts within the PACER system for a particular case.
     * PACER Case Locator Search API for All Courts.
     * @param param the request object
     */
    public allCourtsPacerCaseLocatorCaseSearchWithHttpInfo(param: PACERAPIApiAllCourtsPacerCaseLocatorCaseSearchRequest, options?: Configuration): Promise<HttpInfo<AllCourtsPacerCaseLocatorCaseSearch200Response>> {
        return this.api.allCourtsPacerCaseLocatorCaseSearchWithHttpInfo(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber,  options).toPromise();
    }

    /**
     * Search all courts within the PACER system for a particular case.
     * PACER Case Locator Search API for All Courts.
     * @param param the request object
     */
    public allCourtsPacerCaseLocatorCaseSearch(param: PACERAPIApiAllCourtsPacerCaseLocatorCaseSearchRequest, options?: Configuration): Promise<AllCourtsPacerCaseLocatorCaseSearch200Response> {
        return this.api.allCourtsPacerCaseLocatorCaseSearch(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber,  options).toPromise();
    }

    /**
     * Search for the specified party across all PACER case filings.
     * PACER Case Locator Search API for All Courts.
     * @param param the request object
     */
    public allCourtsPacerCaseLocatorPartySearchWithHttpInfo(param: PACERAPIApiAllCourtsPacerCaseLocatorPartySearchRequest, options?: Configuration): Promise<HttpInfo<AllCourtsPacerCaseLocatorPartySearch200Response>> {
        return this.api.allCourtsPacerCaseLocatorPartySearchWithHttpInfo(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.lastName, param.firstName, param.middleName, param.generation, param.partyType, param.partyExactNameMatch, param.partyRoleArray, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseYearFrom, param.caseYearTo, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber,  options).toPromise();
    }

    /**
     * Search for the specified party across all PACER case filings.
     * PACER Case Locator Search API for All Courts.
     * @param param the request object
     */
    public allCourtsPacerCaseLocatorPartySearch(param: PACERAPIApiAllCourtsPacerCaseLocatorPartySearchRequest, options?: Configuration): Promise<AllCourtsPacerCaseLocatorPartySearch200Response> {
        return this.api.allCourtsPacerCaseLocatorPartySearch(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.lastName, param.firstName, param.middleName, param.generation, param.partyType, param.partyExactNameMatch, param.partyRoleArray, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseYearFrom, param.caseYearTo, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber,  options).toPromise();
    }

    /**
     * Search for PACER cases filed in U.S. Courts of Appeals.
     * PACER Case Locator Search API for All Courts.
     * @param param the request object
     */
    public appealCourtsPacerCaseLocatorCaseSearchWithHttpInfo(param: PACERAPIApiAppealCourtsPacerCaseLocatorCaseSearchRequest, options?: Configuration): Promise<HttpInfo<AllCourtsPacerCaseLocatorCaseSearch200Response>> {
        return this.api.appealCourtsPacerCaseLocatorCaseSearchWithHttpInfo(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.natureOfSuitsArray, param.courtRegionIdArray, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber,  options).toPromise();
    }

    /**
     * Search for PACER cases filed in U.S. Courts of Appeals.
     * PACER Case Locator Search API for All Courts.
     * @param param the request object
     */
    public appealCourtsPacerCaseLocatorCaseSearch(param: PACERAPIApiAppealCourtsPacerCaseLocatorCaseSearchRequest, options?: Configuration): Promise<AllCourtsPacerCaseLocatorCaseSearch200Response> {
        return this.api.appealCourtsPacerCaseLocatorCaseSearch(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.natureOfSuitsArray, param.courtRegionIdArray, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber,  options).toPromise();
    }

    /**
     * Search for the specified party across all PACER appeals cases.
     * PACER Case Locator Search API for All Courts.
     * @param param the request object
     */
    public appealCourtsPacerCaseLocatorPartySearchWithHttpInfo(param: PACERAPIApiAppealCourtsPacerCaseLocatorPartySearchRequest, options?: Configuration): Promise<HttpInfo<AllCourtsPacerCaseLocatorPartySearch200Response>> {
        return this.api.appealCourtsPacerCaseLocatorPartySearchWithHttpInfo(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.lastName, param.firstName, param.middleName, param.generation, param.partyType, param.partyExactNameMatch, param.partyRoleArray, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseYearFrom, param.caseYearTo, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber,  options).toPromise();
    }

    /**
     * Search for the specified party across all PACER appeals cases.
     * PACER Case Locator Search API for All Courts.
     * @param param the request object
     */
    public appealCourtsPacerCaseLocatorPartySearch(param: PACERAPIApiAppealCourtsPacerCaseLocatorPartySearchRequest, options?: Configuration): Promise<AllCourtsPacerCaseLocatorPartySearch200Response> {
        return this.api.appealCourtsPacerCaseLocatorPartySearch(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.lastName, param.firstName, param.middleName, param.generation, param.partyType, param.partyExactNameMatch, param.partyRoleArray, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseYearFrom, param.caseYearTo, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber,  options).toPromise();
    }

    /**
     * Search for PACER cases filed in U.S. Bankruptcy Courts.
     * PACER Case Locator Search API for Bankruptcy Courts.
     * @param param the request object
     */
    public bankruptcyCourtsPacerCaseLocatorCaseSearchWithHttpInfo(param: PACERAPIApiBankruptcyCourtsPacerCaseLocatorCaseSearchRequest, options?: Configuration): Promise<HttpInfo<AllCourtsPacerCaseLocatorCaseSearch200Response>> {
        return this.api.bankruptcyCourtsPacerCaseLocatorCaseSearchWithHttpInfo(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.federalBankruptcyChapterArray, param.courtRegionIdArray, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.caseDischargedStartDate, param.caseDischargedEndDate, param.caseDismissedStartDate, param.caseDismissedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber,  options).toPromise();
    }

    /**
     * Search for PACER cases filed in U.S. Bankruptcy Courts.
     * PACER Case Locator Search API for Bankruptcy Courts.
     * @param param the request object
     */
    public bankruptcyCourtsPacerCaseLocatorCaseSearch(param: PACERAPIApiBankruptcyCourtsPacerCaseLocatorCaseSearchRequest, options?: Configuration): Promise<AllCourtsPacerCaseLocatorCaseSearch200Response> {
        return this.api.bankruptcyCourtsPacerCaseLocatorCaseSearch(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.federalBankruptcyChapterArray, param.courtRegionIdArray, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.caseDischargedStartDate, param.caseDischargedEndDate, param.caseDismissedStartDate, param.caseDismissedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber,  options).toPromise();
    }

    /**
     * Search for the specified party in PACER bankruptcy filings.
     * PACER Case Locator Search API for All Courts.
     * @param param the request object
     */
    public bankruptcyCourtsPacerCaseLocatorPartySearchWithHttpInfo(param: PACERAPIApiBankruptcyCourtsPacerCaseLocatorPartySearchRequest, options?: Configuration): Promise<HttpInfo<AllCourtsPacerCaseLocatorPartySearch200Response>> {
        return this.api.bankruptcyCourtsPacerCaseLocatorPartySearchWithHttpInfo(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.lastName, param.firstName, param.middleName, param.generation, param.partyType, param.partyExactNameMatch, param.partyRoleArray, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseYearFrom, param.caseYearTo, param.ssnOrEin, param.fourDigitSsn, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.caseDischargedStartDate, param.caseDischargedEndDate, param.caseDismissedStartDate, param.caseDismissedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber,  options).toPromise();
    }

    /**
     * Search for the specified party in PACER bankruptcy filings.
     * PACER Case Locator Search API for All Courts.
     * @param param the request object
     */
    public bankruptcyCourtsPacerCaseLocatorPartySearch(param: PACERAPIApiBankruptcyCourtsPacerCaseLocatorPartySearchRequest, options?: Configuration): Promise<AllCourtsPacerCaseLocatorPartySearch200Response> {
        return this.api.bankruptcyCourtsPacerCaseLocatorPartySearch(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.lastName, param.firstName, param.middleName, param.generation, param.partyType, param.partyExactNameMatch, param.partyRoleArray, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseYearFrom, param.caseYearTo, param.ssnOrEin, param.fourDigitSsn, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.caseDischargedStartDate, param.caseDischargedEndDate, param.caseDismissedStartDate, param.caseDismissedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber,  options).toPromise();
    }

    /**
     * Search for civil cases filed in PACER.
     * PACER Case Locator Search API for All Courts.
     * @param param the request object
     */
    public civilCourtsPacerCaseLocatorCaseSearchWithHttpInfo(param: PACERAPIApiCivilCourtsPacerCaseLocatorCaseSearchRequest, options?: Configuration): Promise<HttpInfo<AllCourtsPacerCaseLocatorCaseSearch200Response>> {
        return this.api.civilCourtsPacerCaseLocatorCaseSearchWithHttpInfo(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.natureOfSuitsArray, param.courtRegionIdArray, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber,  options).toPromise();
    }

    /**
     * Search for civil cases filed in PACER.
     * PACER Case Locator Search API for All Courts.
     * @param param the request object
     */
    public civilCourtsPacerCaseLocatorCaseSearch(param: PACERAPIApiCivilCourtsPacerCaseLocatorCaseSearchRequest, options?: Configuration): Promise<AllCourtsPacerCaseLocatorCaseSearch200Response> {
        return this.api.civilCourtsPacerCaseLocatorCaseSearch(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.natureOfSuitsArray, param.courtRegionIdArray, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber,  options).toPromise();
    }

    /**
     * Search for the specified party in civil cases filed in PACER.
     * PACER Case Locator Search API for All Courts.
     * @param param the request object
     */
    public civilCourtsPacerCaseLocatorPartySearchWithHttpInfo(param: PACERAPIApiCivilCourtsPacerCaseLocatorPartySearchRequest, options?: Configuration): Promise<HttpInfo<AllCourtsPacerCaseLocatorPartySearch200Response>> {
        return this.api.civilCourtsPacerCaseLocatorPartySearchWithHttpInfo(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.lastName, param.firstName, param.middleName, param.generation, param.partyType, param.partyExactNameMatch, param.partyRoleArray, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseYearFrom, param.caseYearTo, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber,  options).toPromise();
    }

    /**
     * Search for the specified party in civil cases filed in PACER.
     * PACER Case Locator Search API for All Courts.
     * @param param the request object
     */
    public civilCourtsPacerCaseLocatorPartySearch(param: PACERAPIApiCivilCourtsPacerCaseLocatorPartySearchRequest, options?: Configuration): Promise<AllCourtsPacerCaseLocatorPartySearch200Response> {
        return this.api.civilCourtsPacerCaseLocatorPartySearch(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.lastName, param.firstName, param.middleName, param.generation, param.partyType, param.partyExactNameMatch, param.partyRoleArray, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseYearFrom, param.caseYearTo, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber,  options).toPromise();
    }

    /**
     * Search for criminal cases in PACER.
     * PACER Case Locator Search API for All Courts.
     * @param param the request object
     */
    public criminalCourtsPacerCaseLocatorCaseSearchWithHttpInfo(param: PACERAPIApiCriminalCourtsPacerCaseLocatorCaseSearchRequest, options?: Configuration): Promise<HttpInfo<AllCourtsPacerCaseLocatorCaseSearch200Response>> {
        return this.api.criminalCourtsPacerCaseLocatorCaseSearchWithHttpInfo(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber,  options).toPromise();
    }

    /**
     * Search for criminal cases in PACER.
     * PACER Case Locator Search API for All Courts.
     * @param param the request object
     */
    public criminalCourtsPacerCaseLocatorCaseSearch(param: PACERAPIApiCriminalCourtsPacerCaseLocatorCaseSearchRequest, options?: Configuration): Promise<AllCourtsPacerCaseLocatorCaseSearch200Response> {
        return this.api.criminalCourtsPacerCaseLocatorCaseSearch(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber,  options).toPromise();
    }

    /**
     * Search for the specified party in PACER criminal cases.
     * PACER Case Locator Search API for All Courts.
     * @param param the request object
     */
    public criminalCourtsPacerCaseLocatorPartySearchWithHttpInfo(param: PACERAPIApiCriminalCourtsPacerCaseLocatorPartySearchRequest, options?: Configuration): Promise<HttpInfo<AllCourtsPacerCaseLocatorPartySearch200Response>> {
        return this.api.criminalCourtsPacerCaseLocatorPartySearchWithHttpInfo(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.lastName, param.firstName, param.middleName, param.generation, param.partyType, param.partyExactNameMatch, param.partyRoleArray, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseYearFrom, param.caseYearTo, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber,  options).toPromise();
    }

    /**
     * Search for the specified party in PACER criminal cases.
     * PACER Case Locator Search API for All Courts.
     * @param param the request object
     */
    public criminalCourtsPacerCaseLocatorPartySearch(param: PACERAPIApiCriminalCourtsPacerCaseLocatorPartySearchRequest, options?: Configuration): Promise<AllCourtsPacerCaseLocatorPartySearch200Response> {
        return this.api.criminalCourtsPacerCaseLocatorPartySearch(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.lastName, param.firstName, param.middleName, param.generation, param.partyType, param.partyExactNameMatch, param.partyRoleArray, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseYearFrom, param.caseYearTo, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber,  options).toPromise();
    }

    /**
     * Import the specified case from PACER.    Workflow:     1.This API will return the Find Case results from the court site in a form of array of UniCourt Case Objects. These case objects will consists only Meta information of the case if not already present in the UniCourt Database.     2.To get the full updated case information one will have to request the caseUpdate API by passing the caseId.    Note:     1.Charges for Find Case in District, Bankruptcy and National Courts is free. Find case for Appeal Courts will be charged at minimum rate of $0.1. The fee charged by the court for find case can be found in the response of this API in the field courtFee.     2.The results of the search has less Meta information in case objects compared to the Meta information of cases found using the PCL search APIs.
     * Find PACER Case for a requested Case Number and Court.
     * @param param the request object
     */
    public importPacerCaseByCourtUsingCaseNumberWithHttpInfo(param: PACERAPIApiImportPacerCaseByCourtUsingCaseNumberRequest, options?: Configuration): Promise<HttpInfo<ImportPacerCaseByCourtUsingCaseNumber200Response>> {
        return this.api.importPacerCaseByCourtUsingCaseNumberWithHttpInfo(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.courtId,  options).toPromise();
    }

    /**
     * Import the specified case from PACER.    Workflow:     1.This API will return the Find Case results from the court site in a form of array of UniCourt Case Objects. These case objects will consists only Meta information of the case if not already present in the UniCourt Database.     2.To get the full updated case information one will have to request the caseUpdate API by passing the caseId.    Note:     1.Charges for Find Case in District, Bankruptcy and National Courts is free. Find case for Appeal Courts will be charged at minimum rate of $0.1. The fee charged by the court for find case can be found in the response of this API in the field courtFee.     2.The results of the search has less Meta information in case objects compared to the Meta information of cases found using the PCL search APIs.
     * Find PACER Case for a requested Case Number and Court.
     * @param param the request object
     */
    public importPacerCaseByCourtUsingCaseNumber(param: PACERAPIApiImportPacerCaseByCourtUsingCaseNumberRequest, options?: Configuration): Promise<ImportPacerCaseByCourtUsingCaseNumber200Response> {
        return this.api.importPacerCaseByCourtUsingCaseNumber(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.courtId,  options).toPromise();
    }

    /**
     * Search for multidistrict litigation in PACER.
     * PACER Case Locator Search API for All Courts.
     * @param param the request object
     */
    public multiDistrictCourtsPacerCaseLocatorCaseSearchWithHttpInfo(param: PACERAPIApiMultiDistrictCourtsPacerCaseLocatorCaseSearchRequest, options?: Configuration): Promise<HttpInfo<AllCourtsPacerCaseLocatorCaseSearch200Response>> {
        return this.api.multiDistrictCourtsPacerCaseLocatorCaseSearchWithHttpInfo(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.jpmlNumber, param.pacerCaseId, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber,  options).toPromise();
    }

    /**
     * Search for multidistrict litigation in PACER.
     * PACER Case Locator Search API for All Courts.
     * @param param the request object
     */
    public multiDistrictCourtsPacerCaseLocatorCaseSearch(param: PACERAPIApiMultiDistrictCourtsPacerCaseLocatorCaseSearchRequest, options?: Configuration): Promise<AllCourtsPacerCaseLocatorCaseSearch200Response> {
        return this.api.multiDistrictCourtsPacerCaseLocatorCaseSearch(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.jpmlNumber, param.pacerCaseId, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber,  options).toPromise();
    }

    /**
     * Search for the specified party in multidistrict litigation in PACER.
     * PACER Case Locator Search API for All Courts.
     * @param param the request object
     */
    public multiDistrictCourtsPacerCaseLocatorPartySearchWithHttpInfo(param: PACERAPIApiMultiDistrictCourtsPacerCaseLocatorPartySearchRequest, options?: Configuration): Promise<HttpInfo<AllCourtsPacerCaseLocatorPartySearch200Response>> {
        return this.api.multiDistrictCourtsPacerCaseLocatorPartySearchWithHttpInfo(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.jpmlNumber, param.pacerCaseId, param.lastName, param.firstName, param.middleName, param.generation, param.partyType, param.partyExactNameMatch, param.partyRoleArray, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseYearFrom, param.caseYearTo, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber,  options).toPromise();
    }

    /**
     * Search for the specified party in multidistrict litigation in PACER.
     * PACER Case Locator Search API for All Courts.
     * @param param the request object
     */
    public multiDistrictCourtsPacerCaseLocatorPartySearch(param: PACERAPIApiMultiDistrictCourtsPacerCaseLocatorPartySearchRequest, options?: Configuration): Promise<AllCourtsPacerCaseLocatorPartySearch200Response> {
        return this.api.multiDistrictCourtsPacerCaseLocatorPartySearch(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.jpmlNumber, param.pacerCaseId, param.lastName, param.firstName, param.middleName, param.generation, param.partyType, param.partyExactNameMatch, param.partyRoleArray, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseYearFrom, param.caseYearTo, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber,  options).toPromise();
    }

}

import { ObservablePACERCredentialAPIApi } from "./ObservableAPI";
import { PACERCredentialAPIApiRequestFactory, PACERCredentialAPIApiResponseProcessor} from "../apis/PACERCredentialAPIApi";

export interface PACERCredentialAPIApiAddPacerCredentialRequest {
    /**
     * 
     * @type AddPacerCredentialRequest
     * @memberof PACERCredentialAPIApiaddPacerCredential
     */
    addPacerCredentialRequest?: AddPacerCredentialRequest
}

export interface PACERCredentialAPIApiGetPacerCredentialRequest {
    /**
     * The page number of the PACER credentials to be retrieved.&lt;br&gt;   - Minimum: 1 
     * @type number
     * @memberof PACERCredentialAPIApigetPacerCredential
     */
    pageNumber?: number
}

export interface PACERCredentialAPIApiGetPacerCredentialByIdRequest {
    /**
     * The PACER username for which PACER credentials are to be retrieved.
     * @type string
     * @memberof PACERCredentialAPIApigetPacerCredentialById
     */
    pacerUserId: string
}

export interface PACERCredentialAPIApiRemovePacerCredentialByIdRequest {
    /**
     * The PACER username for which PACER credentials are to be retrieved.
     * @type string
     * @memberof PACERCredentialAPIApiremovePacerCredentialById
     */
    pacerUserId: string
}

export class ObjectPACERCredentialAPIApi {
    private api: ObservablePACERCredentialAPIApi

    public constructor(configuration: Configuration, requestFactory?: PACERCredentialAPIApiRequestFactory, responseProcessor?: PACERCredentialAPIApiResponseProcessor) {
        this.api = new ObservablePACERCredentialAPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Register PACER credentials with UniCourt.
     * Add Pacer Credential.
     * @param param the request object
     */
    public addPacerCredentialWithHttpInfo(param: PACERCredentialAPIApiAddPacerCredentialRequest = {}, options?: Configuration): Promise<HttpInfo<Success1>> {
        return this.api.addPacerCredentialWithHttpInfo(param.addPacerCredentialRequest,  options).toPromise();
    }

    /**
     * Register PACER credentials with UniCourt.
     * Add Pacer Credential.
     * @param param the request object
     */
    public addPacerCredential(param: PACERCredentialAPIApiAddPacerCredentialRequest = {}, options?: Configuration): Promise<Success1> {
        return this.api.addPacerCredential(param.addPacerCredentialRequest,  options).toPromise();
    }

    /**
     * List registered PACER credentials.
     * Get Pacer Credential List.
     * @param param the request object
     */
    public getPacerCredentialWithHttpInfo(param: PACERCredentialAPIApiGetPacerCredentialRequest = {}, options?: Configuration): Promise<HttpInfo<GetPacerCredential200Response>> {
        return this.api.getPacerCredentialWithHttpInfo(param.pageNumber,  options).toPromise();
    }

    /**
     * List registered PACER credentials.
     * Get Pacer Credential List.
     * @param param the request object
     */
    public getPacerCredential(param: PACERCredentialAPIApiGetPacerCredentialRequest = {}, options?: Configuration): Promise<GetPacerCredential200Response> {
        return this.api.getPacerCredential(param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve the PACER credentials for the specified PACER username.
     * Get Pacer Credential for a requested pacer User Id.
     * @param param the request object
     */
    public getPacerCredentialByIdWithHttpInfo(param: PACERCredentialAPIApiGetPacerCredentialByIdRequest, options?: Configuration): Promise<HttpInfo<GetPacerCredential200ResponsePacerCredentialArrayInner>> {
        return this.api.getPacerCredentialByIdWithHttpInfo(param.pacerUserId,  options).toPromise();
    }

    /**
     * Retrieve the PACER credentials for the specified PACER username.
     * Get Pacer Credential for a requested pacer User Id.
     * @param param the request object
     */
    public getPacerCredentialById(param: PACERCredentialAPIApiGetPacerCredentialByIdRequest, options?: Configuration): Promise<GetPacerCredential200ResponsePacerCredentialArrayInner> {
        return this.api.getPacerCredentialById(param.pacerUserId,  options).toPromise();
    }

    /**
     * De-register the PACER credentials for the specified PACER username.
     * Remove Pacer credential for a specific Pacer User Id.
     * @param param the request object
     */
    public removePacerCredentialByIdWithHttpInfo(param: PACERCredentialAPIApiRemovePacerCredentialByIdRequest, options?: Configuration): Promise<HttpInfo<Success1>> {
        return this.api.removePacerCredentialByIdWithHttpInfo(param.pacerUserId,  options).toPromise();
    }

    /**
     * De-register the PACER credentials for the specified PACER username.
     * Remove Pacer credential for a specific Pacer User Id.
     * @param param the request object
     */
    public removePacerCredentialById(param: PACERCredentialAPIApiRemovePacerCredentialByIdRequest, options?: Configuration): Promise<Success1> {
        return this.api.removePacerCredentialById(param.pacerUserId,  options).toPromise();
    }

}

import { ObservablePartyAnalyticsAPIApi } from "./ObservableAPI";
import { PartyAnalyticsAPIApiRequestFactory, PartyAnalyticsAPIApiResponseProcessor} from "../apis/PartyAnalyticsAPIApi";

export interface PartyAnalyticsAPIApiGetNormAttorneysAssociatedWithNormPartyRequest {
    /**
     * The normPartyID value of the desired party.   - minimum: 18   - maximum: 18 
     * @type string
     * @memberof PartyAnalyticsAPIApigetNormAttorneysAssociatedWithNormParty
     */
    normPartyId: string
    /**
     * The keyword expression targeting the desired attorneys.
     * @type string
     * @memberof PartyAnalyticsAPIApigetNormAttorneysAssociatedWithNormParty
     */
    q?: string
    /**
     * The page number of the desired page of results. - minimum: 1 
     * @type number
     * @memberof PartyAnalyticsAPIApigetNormAttorneysAssociatedWithNormParty
     */
    pageNumber?: number
}

export interface PartyAnalyticsAPIApiGetNormJudgesAssociatedWithNormPartyRequest {
    /**
     * The normPartyId value of the desired party.   - minimum: 18   - maximum: 18 
     * @type string
     * @memberof PartyAnalyticsAPIApigetNormJudgesAssociatedWithNormParty
     */
    normPartyId: string
    /**
     * The keyword expression targeting the desired judges. Keywords should be constructed according to the guidelines given above.
     * @type string
     * @memberof PartyAnalyticsAPIApigetNormJudgesAssociatedWithNormParty
     */
    q?: string
    /**
     * The page number of the desired page of results. - minimum: 1 
     * @type number
     * @memberof PartyAnalyticsAPIApigetNormJudgesAssociatedWithNormParty
     */
    pageNumber?: number
}

export interface PartyAnalyticsAPIApiGetNormLawFirmsAssociatedWithNormPartyRequest {
    /**
     * The normPartyId value of the desired party.   - minimum: 18   - maximum: 18 
     * @type string
     * @memberof PartyAnalyticsAPIApigetNormLawFirmsAssociatedWithNormParty
     */
    normPartyId: string
    /**
     * The keyword expression targeting the desired law firms.
     * @type string
     * @memberof PartyAnalyticsAPIApigetNormLawFirmsAssociatedWithNormParty
     */
    q?: string
    /**
     * The page number of the desired page of results. - minimum: 1 
     * @type number
     * @memberof PartyAnalyticsAPIApigetNormLawFirmsAssociatedWithNormParty
     */
    pageNumber?: number
}

export interface PartyAnalyticsAPIApiGetNormPartyByIdRequest {
    /**
     * The normPartyId value of the desired party.   - minimum: 18   - maximum: 18 
     * @type string
     * @memberof PartyAnalyticsAPIApigetNormPartyById
     */
    normPartyId: string
}

export interface PartyAnalyticsAPIApiSearchNormalizedPartiesRequest {
    /**
     * The keyword expression targeting the desired party.&lt;/a&gt; 
     * @type string
     * @memberof PartyAnalyticsAPIApisearchNormalizedParties
     */
    q?: string
    /**
     * The page number of the desired page of results. - Minimum: 1 - Maximum: 1000 
     * @type number
     * @memberof PartyAnalyticsAPIApisearchNormalizedParties
     */
    pageNumber?: number
}

export interface PartyAnalyticsAPIApiSearchNormalizedPartiesByIdRequest {
    /**
     * The normPartySearchId value of the search to be retrieved.
     * @type string
     * @memberof PartyAnalyticsAPIApisearchNormalizedPartiesById
     */
    normPartySearchId: string
    /**
     * The page number of the desired page of results. - Minimum: 1 - Maximum: 1000 
     * @type number
     * @memberof PartyAnalyticsAPIApisearchNormalizedPartiesById
     */
    pageNumber?: number
}

export class ObjectPartyAnalyticsAPIApi {
    private api: ObservablePartyAnalyticsAPIApi

    public constructor(configuration: Configuration, requestFactory?: PartyAnalyticsAPIApiRequestFactory, responseProcessor?: PartyAnalyticsAPIApiResponseProcessor) {
        this.api = new ObservablePartyAnalyticsAPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Search for attorneys who have represented a given party using a keyword expression. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTV4vCEaKrhystBz\",\"CORTYsomR6GiiiPovp\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all attorneys associated with Party with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Attorneys that represented the Party.
     * @param param the request object
     */
    public getNormAttorneysAssociatedWithNormPartyWithHttpInfo(param: PartyAnalyticsAPIApiGetNormAttorneysAssociatedWithNormPartyRequest, options?: Configuration): Promise<HttpInfo<AssociatedNormAttorneyResponse1>> {
        return this.api.getNormAttorneysAssociatedWithNormPartyWithHttpInfo(param.normPartyId, param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Search for attorneys who have represented a given party using a keyword expression. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTV4vCEaKrhystBz\",\"CORTYsomR6GiiiPovp\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all attorneys associated with Party with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Attorneys that represented the Party.
     * @param param the request object
     */
    public getNormAttorneysAssociatedWithNormParty(param: PartyAnalyticsAPIApiGetNormAttorneysAssociatedWithNormPartyRequest, options?: Configuration): Promise<AssociatedNormAttorneyResponse1> {
        return this.api.getNormAttorneysAssociatedWithNormParty(param.normPartyId, param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Search for judges before whom a party has appeared using a keyword expression. <br><br> ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTV4vCEaKrhystBz\",\"CORTYsomR6GiiiPovp\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all judges associated with Party with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Judges Faced By the Party.
     * @param param the request object
     */
    public getNormJudgesAssociatedWithNormPartyWithHttpInfo(param: PartyAnalyticsAPIApiGetNormJudgesAssociatedWithNormPartyRequest, options?: Configuration): Promise<HttpInfo<AssociatedNormJudgeResponse1>> {
        return this.api.getNormJudgesAssociatedWithNormPartyWithHttpInfo(param.normPartyId, param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Search for judges before whom a party has appeared using a keyword expression. <br><br> ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTV4vCEaKrhystBz\",\"CORTYsomR6GiiiPovp\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all judges associated with Party with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Judges Faced By the Party.
     * @param param the request object
     */
    public getNormJudgesAssociatedWithNormParty(param: PartyAnalyticsAPIApiGetNormJudgesAssociatedWithNormPartyRequest, options?: Configuration): Promise<AssociatedNormJudgeResponse1> {
        return this.api.getNormJudgesAssociatedWithNormParty(param.normPartyId, param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Search for law firms that have represented the specified party using a keyword expression. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTV4vCEaKrhystBz\",\"CORTYsomR6GiiiPovp\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all lawfirms associated with Party with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Law Firms that represented the Party.
     * @param param the request object
     */
    public getNormLawFirmsAssociatedWithNormPartyWithHttpInfo(param: PartyAnalyticsAPIApiGetNormLawFirmsAssociatedWithNormPartyRequest, options?: Configuration): Promise<HttpInfo<AssociatedNormLawFirmResponse1>> {
        return this.api.getNormLawFirmsAssociatedWithNormPartyWithHttpInfo(param.normPartyId, param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Search for law firms that have represented the specified party using a keyword expression. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTV4vCEaKrhystBz\",\"CORTYsomR6GiiiPovp\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all lawfirms associated with Party with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Law Firms that represented the Party.
     * @param param the request object
     */
    public getNormLawFirmsAssociatedWithNormParty(param: PartyAnalyticsAPIApiGetNormLawFirmsAssociatedWithNormPartyRequest, options?: Configuration): Promise<AssociatedNormLawFirmResponse1> {
        return this.api.getNormLawFirmsAssociatedWithNormParty(param.normPartyId, param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve the specified party. 
     * Norm Party Details.
     * @param param the request object
     */
    public getNormPartyByIdWithHttpInfo(param: PartyAnalyticsAPIApiGetNormPartyByIdRequest, options?: Configuration): Promise<HttpInfo<NormParty1>> {
        return this.api.getNormPartyByIdWithHttpInfo(param.normPartyId,  options).toPromise();
    }

    /**
     * Retrieve the specified party. 
     * Norm Party Details.
     * @param param the request object
     */
    public getNormPartyById(param: PartyAnalyticsAPIApiGetNormPartyByIdRequest, options?: Configuration): Promise<NormParty1> {
        return this.api.getNormPartyById(param.normPartyId,  options).toPromise();
    }

    /**
     * ### Search for a party using a keyword expression. 
     * Party search.
     * @param param the request object
     */
    public searchNormalizedPartiesWithHttpInfo(param: PartyAnalyticsAPIApiSearchNormalizedPartiesRequest = {}, options?: Configuration): Promise<HttpInfo<SearchNormalizedParties200Response>> {
        return this.api.searchNormalizedPartiesWithHttpInfo(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * ### Search for a party using a keyword expression. 
     * Party search.
     * @param param the request object
     */
    public searchNormalizedParties(param: PartyAnalyticsAPIApiSearchNormalizedPartiesRequest = {}, options?: Configuration): Promise<SearchNormalizedParties200Response> {
        return this.api.searchNormalizedParties(param.q, param.pageNumber,  options).toPromise();
    }

    /**
     * ### Retrieve a search for a party. 
     * Norm party search results for a given normPartySearchId.
     * @param param the request object
     */
    public searchNormalizedPartiesByIdWithHttpInfo(param: PartyAnalyticsAPIApiSearchNormalizedPartiesByIdRequest, options?: Configuration): Promise<HttpInfo<SearchNormalizedParties200Response>> {
        return this.api.searchNormalizedPartiesByIdWithHttpInfo(param.normPartySearchId, param.pageNumber,  options).toPromise();
    }

    /**
     * ### Retrieve a search for a party. 
     * Norm party search results for a given normPartySearchId.
     * @param param the request object
     */
    public searchNormalizedPartiesById(param: PartyAnalyticsAPIApiSearchNormalizedPartiesByIdRequest, options?: Configuration): Promise<SearchNormalizedParties200Response> {
        return this.api.searchNormalizedPartiesById(param.normPartySearchId, param.pageNumber,  options).toPromise();
    }

}

import { ObservableUsageAPIApi } from "./ObservableAPI";
import { UsageAPIApiRequestFactory, UsageAPIApiResponseProcessor} from "../apis/UsageAPIApi";

export interface UsageAPIApiGetBillingCyclesRequest {
}

export interface UsageAPIApiGetBillingUsageByBillingCycleRequest {
    /**
     * The date obtainable from the /billingCycles endpoint which is used as an identifier for the specific billing cycle you wish to obtain information on.
     * @type string
     * @memberof UsageAPIApigetBillingUsageByBillingCycle
     */
    billingCycle: string
}

export interface UsageAPIApiGetDailyUsageByDateRequest {
    /**
     * The specific date for which you wish to obtain information on API usage.
     * @type string
     * @memberof UsageAPIApigetDailyUsageByDate
     */
    date: string
}

export class ObjectUsageAPIApi {
    private api: ObservableUsageAPIApi

    public constructor(configuration: Configuration, requestFactory?: UsageAPIApiRequestFactory, responseProcessor?: UsageAPIApiResponseProcessor) {
        this.api = new ObservableUsageAPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * An endpoint to obtain information on the previous 12 billing cycles.
     * Get all the previous 12 billing cycles.
     * @param param the request object
     */
    public getBillingCyclesWithHttpInfo(param: UsageAPIApiGetBillingCyclesRequest = {}, options?: Configuration): Promise<HttpInfo<GetBillingCycles200Response>> {
        return this.api.getBillingCyclesWithHttpInfo( options).toPromise();
    }

    /**
     * An endpoint to obtain information on the previous 12 billing cycles.
     * Get all the previous 12 billing cycles.
     * @param param the request object
     */
    public getBillingCycles(param: UsageAPIApiGetBillingCyclesRequest = {}, options?: Configuration): Promise<GetBillingCycles200Response> {
        return this.api.getBillingCycles( options).toPromise();
    }

    /**
     * An endpoint to obtain information on API usage for a specific billing cycle.
     * Specify the billing cycle to know the API usage.
     * @param param the request object
     */
    public getBillingUsageByBillingCycleWithHttpInfo(param: UsageAPIApiGetBillingUsageByBillingCycleRequest, options?: Configuration): Promise<HttpInfo<GetBillingUsageByBillingCycle200Response>> {
        return this.api.getBillingUsageByBillingCycleWithHttpInfo(param.billingCycle,  options).toPromise();
    }

    /**
     * An endpoint to obtain information on API usage for a specific billing cycle.
     * Specify the billing cycle to know the API usage.
     * @param param the request object
     */
    public getBillingUsageByBillingCycle(param: UsageAPIApiGetBillingUsageByBillingCycleRequest, options?: Configuration): Promise<GetBillingUsageByBillingCycle200Response> {
        return this.api.getBillingUsageByBillingCycle(param.billingCycle,  options).toPromise();
    }

    /**
     * An endpoint to obtain information on API usage for a specific day.
     * Get API usage for a requested Date.
     * @param param the request object
     */
    public getDailyUsageByDateWithHttpInfo(param: UsageAPIApiGetDailyUsageByDateRequest, options?: Configuration): Promise<HttpInfo<GetDailyUsageByDate200Response>> {
        return this.api.getDailyUsageByDateWithHttpInfo(param.date,  options).toPromise();
    }

    /**
     * An endpoint to obtain information on API usage for a specific day.
     * Get API usage for a requested Date.
     * @param param the request object
     */
    public getDailyUsageByDate(param: UsageAPIApiGetDailyUsageByDateRequest, options?: Configuration): Promise<GetDailyUsageByDate200Response> {
        return this.api.getDailyUsageByDate(param.date,  options).toPromise();
    }

}

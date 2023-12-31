import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AttorneyAnalyticsAPIApiRequestFactory, AttorneyAnalyticsAPIApiResponseProcessor} from "../apis/AttorneyAnalyticsAPIApi";
export class ObservableAttorneyAnalyticsAPIApi {
    private requestFactory: AttorneyAnalyticsAPIApiRequestFactory;
    private responseProcessor: AttorneyAnalyticsAPIApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AttorneyAnalyticsAPIApiRequestFactory,
        responseProcessor?: AttorneyAnalyticsAPIApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AttorneyAnalyticsAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AttorneyAnalyticsAPIApiResponseProcessor();
    }

    /**
     * This endpoint retrieves information on the attorney in our normalized attorney database which matches the normAttorneyId specified in the request.
     * Norm Attorney Details.
     * @param normAttorneyId Norm ID of Attorney.    - minimum: 18   - maximum: 18 
     */
    public getNormAttorneyByIdWithHttpInfo(normAttorneyId: string, _options?: Configuration): Observable<HttpInfo<NormAttorney1>> {
        const requestContextPromise = this.requestFactory.getNormAttorneyById(normAttorneyId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNormAttorneyByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint retrieves information on the attorney in our normalized attorney database which matches the normAttorneyId specified in the request.
     * Norm Attorney Details.
     * @param normAttorneyId Norm ID of Attorney.    - minimum: 18   - maximum: 18 
     */
    public getNormAttorneyById(normAttorneyId: string, _options?: Configuration): Observable<NormAttorney1> {
        return this.getNormAttorneyByIdWithHttpInfo(normAttorneyId, _options).pipe(map((apiResponse: HttpInfo<NormAttorney1>) => apiResponse.data));
    }

    /**
     * This endpoint returns information on all judges which have appeared in cases with the attorney specified by the normAttorneyId. The returned judges are ordered in descending order of number of cases shared with the relevant attorney. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\"  AND  courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTV4vCEaKrhystBz\", \"CORTKQiA4LJuv54tEj\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all judges associated with attorney with norm id NATYfwmXwRHS279WPY of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Judges faced by the Attorney.
     * @param normAttorneyId Norm ID of Attorney.    - minimum: 18   - maximum: 18 
     * @param q The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getNormJudgesAssociatedWithNormAttorneyWithHttpInfo(normAttorneyId: string, q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<AssociatedNormJudgeResponse1>> {
        const requestContextPromise = this.requestFactory.getNormJudgesAssociatedWithNormAttorney(normAttorneyId, q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNormJudgesAssociatedWithNormAttorneyWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint returns information on all judges which have appeared in cases with the attorney specified by the normAttorneyId. The returned judges are ordered in descending order of number of cases shared with the relevant attorney. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\"  AND  courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTV4vCEaKrhystBz\", \"CORTKQiA4LJuv54tEj\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all judges associated with attorney with norm id NATYfwmXwRHS279WPY of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Judges faced by the Attorney.
     * @param normAttorneyId Norm ID of Attorney.    - minimum: 18   - maximum: 18 
     * @param q The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getNormJudgesAssociatedWithNormAttorney(normAttorneyId: string, q?: string, pageNumber?: number, _options?: Configuration): Observable<AssociatedNormJudgeResponse1> {
        return this.getNormJudgesAssociatedWithNormAttorneyWithHttpInfo(normAttorneyId, q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<AssociatedNormJudgeResponse1>) => apiResponse.data));
    }

    /**
     * Retrieve law firms with which the specified attorney is known to have been associated. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\"  AND  courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTV4vCEaKrhystBz\", \"CORTKQiA4LJuv54tEj\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed  |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed  |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple Ids Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all LawFirms associated with attorney with norm id NATYfwmXwRHS279WPY of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Law Firms the attorney has worked for.
     * @param normAttorneyId The normAttorneyId value of the desired attorney.    - minimum: 18   - maximum: 18 
     * @param q The keyword expression targeting the desired firms. Keyword expressions should be constructed according to the guidelines shown above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getNormLawFirmsAssociatedWithNormAttorneyWithHttpInfo(normAttorneyId: string, q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<AssociatedNormLawFirmResponse1>> {
        const requestContextPromise = this.requestFactory.getNormLawFirmsAssociatedWithNormAttorney(normAttorneyId, q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNormLawFirmsAssociatedWithNormAttorneyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve law firms with which the specified attorney is known to have been associated. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\"  AND  courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTV4vCEaKrhystBz\", \"CORTKQiA4LJuv54tEj\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed  |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed  |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple Ids Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all LawFirms associated with attorney with norm id NATYfwmXwRHS279WPY of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Law Firms the attorney has worked for.
     * @param normAttorneyId The normAttorneyId value of the desired attorney.    - minimum: 18   - maximum: 18 
     * @param q The keyword expression targeting the desired firms. Keyword expressions should be constructed according to the guidelines shown above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getNormLawFirmsAssociatedWithNormAttorney(normAttorneyId: string, q?: string, pageNumber?: number, _options?: Configuration): Observable<AssociatedNormLawFirmResponse1> {
        return this.getNormLawFirmsAssociatedWithNormAttorneyWithHttpInfo(normAttorneyId, q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<AssociatedNormLawFirmResponse1>) => apiResponse.data));
    }

    /**
     * Retrieve the parties for which an attorney is known to have represented. <br><br> ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\"  AND  courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTV4vCEaKrhystBz\", \"CORTKQiA4LJuv54tEj\")**| | **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed  |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed  |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Attorney Party Type Group Object.. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **caseFiledDate** | Single Allowed   |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple Ids Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all parties associated with attorney with norm id NATYfwmXwRHS279WPY of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Parties Represented By the Attorney.
     * @param normAttorneyId The normAttorneyId value of the desired attorney.   - minimum: 18   - maximum: 18 
     * @param q The keyword expression targeting the desired parties. Keyword expressions should be constructed according to the guidelines shown above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getNormPartiesAssociatedWithNormAttorneyWithHttpInfo(normAttorneyId: string, q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<AssociatedNormPartyResponse1>> {
        const requestContextPromise = this.requestFactory.getNormPartiesAssociatedWithNormAttorney(normAttorneyId, q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNormPartiesAssociatedWithNormAttorneyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the parties for which an attorney is known to have represented. <br><br> ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\"  AND  courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTV4vCEaKrhystBz\", \"CORTKQiA4LJuv54tEj\")**| | **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed  |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed  |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Attorney Party Type Group Object.. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **caseFiledDate** | Single Allowed   |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple Ids Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all parties associated with attorney with norm id NATYfwmXwRHS279WPY of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Parties Represented By the Attorney.
     * @param normAttorneyId The normAttorneyId value of the desired attorney.   - minimum: 18   - maximum: 18 
     * @param q The keyword expression targeting the desired parties. Keyword expressions should be constructed according to the guidelines shown above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getNormPartiesAssociatedWithNormAttorney(normAttorneyId: string, q?: string, pageNumber?: number, _options?: Configuration): Observable<AssociatedNormPartyResponse1> {
        return this.getNormPartiesAssociatedWithNormAttorneyWithHttpInfo(normAttorneyId, q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<AssociatedNormPartyResponse1>) => apiResponse.data));
    }

    /**
     * ### This endpoint retrieves information, including the normAttorneyId, on all attorneys in our normalized attorney database which match the request parameters. All query parameters supported by this API can be found in the schema section below. 
     * Attorney search.
     * @param q The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters.&lt;/a&gt; 
     * @param pageNumber The page number of the desired page of results. - Minimum: 1 - Maximum: 1000 
     */
    public searchNormalizedAttorneysWithHttpInfo(q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<SearchNormalizedAttorneys200Response>> {
        const requestContextPromise = this.requestFactory.searchNormalizedAttorneys(q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchNormalizedAttorneysWithHttpInfo(rsp)));
            }));
    }

    /**
     * ### This endpoint retrieves information, including the normAttorneyId, on all attorneys in our normalized attorney database which match the request parameters. All query parameters supported by this API can be found in the schema section below. 
     * Attorney search.
     * @param q The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters.&lt;/a&gt; 
     * @param pageNumber The page number of the desired page of results. - Minimum: 1 - Maximum: 1000 
     */
    public searchNormalizedAttorneys(q?: string, pageNumber?: number, _options?: Configuration): Observable<SearchNormalizedAttorneys200Response> {
        return this.searchNormalizedAttorneysWithHttpInfo(q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<SearchNormalizedAttorneys200Response>) => apiResponse.data));
    }

    /**
     * ### All query parameters supported for this API can be found in below schema section. Schema --> NormAttorneySearchQueryObject 
     * Norm attorney search results for a given normAttorneySearchId.
     * @param normAttorneySearchId Norm Attorney Search information for the given normAttorneySearchId.
     * @param pageNumber The page number of the desired page of results. - Minimum: 1 - Maximum: 1000 
     */
    public searchNormalizedAttorneysByIdWithHttpInfo(normAttorneySearchId: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<SearchNormalizedAttorneys200Response>> {
        const requestContextPromise = this.requestFactory.searchNormalizedAttorneysById(normAttorneySearchId, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchNormalizedAttorneysByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * ### All query parameters supported for this API can be found in below schema section. Schema --> NormAttorneySearchQueryObject 
     * Norm attorney search results for a given normAttorneySearchId.
     * @param normAttorneySearchId Norm Attorney Search information for the given normAttorneySearchId.
     * @param pageNumber The page number of the desired page of results. - Minimum: 1 - Maximum: 1000 
     */
    public searchNormalizedAttorneysById(normAttorneySearchId: string, pageNumber?: number, _options?: Configuration): Observable<SearchNormalizedAttorneys200Response> {
        return this.searchNormalizedAttorneysByIdWithHttpInfo(normAttorneySearchId, pageNumber, _options).pipe(map((apiResponse: HttpInfo<SearchNormalizedAttorneys200Response>) => apiResponse.data));
    }

}

import { AuthenticationAPIApiRequestFactory, AuthenticationAPIApiResponseProcessor} from "../apis/AuthenticationAPIApi";
export class ObservableAuthenticationAPIApi {
    private requestFactory: AuthenticationAPIApiRequestFactory;
    private responseProcessor: AuthenticationAPIApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthenticationAPIApiRequestFactory,
        responseProcessor?: AuthenticationAPIApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthenticationAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthenticationAPIApiResponseProcessor();
    }

    /**
     * This endpoint allows you to generate a new access token, which is a required field for all UniCourt API endpoints except for the Authentication API. To generate a new token, you must provide your Client ID and Client Secret ID which you can find by logging into your UniCourt account. At any time, you can have a maximum of 10 active access tokens. The tokens never expire and, if you make a request which would otherwise lead to you having more than 10 active tokens, you will receive an error message.
     * Generate new token to access API.
     * @param generateNewTokenRequest The endpoint accepts your Client ID and Client Secret ID as part of the request.
     */
    public generateNewTokenWithHttpInfo(generateNewTokenRequest?: GenerateNewTokenRequest, _options?: Configuration): Observable<HttpInfo<GenerateNewToken200Response>> {
        const requestContextPromise = this.requestFactory.generateNewToken(generateNewTokenRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.generateNewTokenWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint allows you to generate a new access token, which is a required field for all UniCourt API endpoints except for the Authentication API. To generate a new token, you must provide your Client ID and Client Secret ID which you can find by logging into your UniCourt account. At any time, you can have a maximum of 10 active access tokens. The tokens never expire and, if you make a request which would otherwise lead to you having more than 10 active tokens, you will receive an error message.
     * Generate new token to access API.
     * @param generateNewTokenRequest The endpoint accepts your Client ID and Client Secret ID as part of the request.
     */
    public generateNewToken(generateNewTokenRequest?: GenerateNewTokenRequest, _options?: Configuration): Observable<GenerateNewToken200Response> {
        return this.generateNewTokenWithHttpInfo(generateNewTokenRequest, _options).pipe(map((apiResponse: HttpInfo<GenerateNewToken200Response>) => apiResponse.data));
    }

    /**
     * An endpoint which allows you to invalidate all existing access tokens associated with your UniCourt account.
     * API to invalidate all access tokens.
     * @param generateNewTokenRequest The endpoint accepts your Client ID and Secret Client ID as part of the request.
     */
    public invalidateAllTokensWithHttpInfo(generateNewTokenRequest?: GenerateNewTokenRequest, _options?: Configuration): Observable<HttpInfo<Success1>> {
        const requestContextPromise = this.requestFactory.invalidateAllTokens(generateNewTokenRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.invalidateAllTokensWithHttpInfo(rsp)));
            }));
    }

    /**
     * An endpoint which allows you to invalidate all existing access tokens associated with your UniCourt account.
     * API to invalidate all access tokens.
     * @param generateNewTokenRequest The endpoint accepts your Client ID and Secret Client ID as part of the request.
     */
    public invalidateAllTokens(generateNewTokenRequest?: GenerateNewTokenRequest, _options?: Configuration): Observable<Success1> {
        return this.invalidateAllTokensWithHttpInfo(generateNewTokenRequest, _options).pipe(map((apiResponse: HttpInfo<Success1>) => apiResponse.data));
    }

    /**
     * An endpoint which allows you to invalidate a given access token.
     * API to invalidate the access token.
     * @param invalidateTokenRequest The endpoint accepts your Client ID, Client Secret ID and the Token ID for the access token you wish to invalidate as part of the request. You can obtain a list of all Token IDs from the /listAllTokenIds endpoint within this API.
     */
    public invalidateTokenWithHttpInfo(invalidateTokenRequest?: InvalidateTokenRequest, _options?: Configuration): Observable<HttpInfo<Success1>> {
        const requestContextPromise = this.requestFactory.invalidateToken(invalidateTokenRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.invalidateTokenWithHttpInfo(rsp)));
            }));
    }

    /**
     * An endpoint which allows you to invalidate a given access token.
     * API to invalidate the access token.
     * @param invalidateTokenRequest The endpoint accepts your Client ID, Client Secret ID and the Token ID for the access token you wish to invalidate as part of the request. You can obtain a list of all Token IDs from the /listAllTokenIds endpoint within this API.
     */
    public invalidateToken(invalidateTokenRequest?: InvalidateTokenRequest, _options?: Configuration): Observable<Success1> {
        return this.invalidateTokenWithHttpInfo(invalidateTokenRequest, _options).pipe(map((apiResponse: HttpInfo<Success1>) => apiResponse.data));
    }

    /**
     * An endpoint which allows you to view all active access tokens associated with your Client ID and Client Secret ID.
     * API to list all the access tokens Id.
     * @param generateNewTokenRequest The endpoint accepts your Client ID and Client Secret ID as part of the request.
     */
    public listAllTokenIdsWithHttpInfo(generateNewTokenRequest?: GenerateNewTokenRequest, _options?: Configuration): Observable<HttpInfo<ListAllTokenIds200Response>> {
        const requestContextPromise = this.requestFactory.listAllTokenIds(generateNewTokenRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAllTokenIdsWithHttpInfo(rsp)));
            }));
    }

    /**
     * An endpoint which allows you to view all active access tokens associated with your Client ID and Client Secret ID.
     * API to list all the access tokens Id.
     * @param generateNewTokenRequest The endpoint accepts your Client ID and Client Secret ID as part of the request.
     */
    public listAllTokenIds(generateNewTokenRequest?: GenerateNewTokenRequest, _options?: Configuration): Observable<ListAllTokenIds200Response> {
        return this.listAllTokenIdsWithHttpInfo(generateNewTokenRequest, _options).pipe(map((apiResponse: HttpInfo<ListAllTokenIds200Response>) => apiResponse.data));
    }

}

import { CallbackAPIApiRequestFactory, CallbackAPIApiResponseProcessor} from "../apis/CallbackAPIApi";
export class ObservableCallbackAPIApi {
    private requestFactory: CallbackAPIApiRequestFactory;
    private responseProcessor: CallbackAPIApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CallbackAPIApiRequestFactory,
        responseProcessor?: CallbackAPIApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CallbackAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CallbackAPIApiResponseProcessor();
    }

    /**
     * Get list of callback types with count for a requested Date.
     * Get list of callback types with count for a requested Date.
     * @param date Date for which fetch the callback type list. By default, the date will be set to current date.
     * @param status Status of the callbacks. Default status will fetch all callbacks.
     */
    public getCallbacksWithHttpInfo(date?: Date, status?: 'IN_PROGRESS' | 'COMPLETE' | 'FAILURE', _options?: Configuration): Observable<HttpInfo<GetCallbacks200Response>> {
        const requestContextPromise = this.requestFactory.getCallbacks(date, status, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCallbacksWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get list of callback types with count for a requested Date.
     * Get list of callback types with count for a requested Date.
     * @param date Date for which fetch the callback type list. By default, the date will be set to current date.
     * @param status Status of the callbacks. Default status will fetch all callbacks.
     */
    public getCallbacks(date?: Date, status?: 'IN_PROGRESS' | 'COMPLETE' | 'FAILURE', _options?: Configuration): Observable<GetCallbacks200Response> {
        return this.getCallbacksWithHttpInfo(date, status, _options).pipe(map((apiResponse: HttpInfo<GetCallbacks200Response>) => apiResponse.data));
    }

}

import { CaseAnalyticsAPIApiRequestFactory, CaseAnalyticsAPIApiResponseProcessor} from "../apis/CaseAnalyticsAPIApi";
export class ObservableCaseAnalyticsAPIApi {
    private requestFactory: CaseAnalyticsAPIApiRequestFactory;
    private responseProcessor: CaseAnalyticsAPIApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CaseAnalyticsAPIApiRequestFactory,
        responseProcessor?: CaseAnalyticsAPIApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CaseAnalyticsAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CaseAnalyticsAPIApiResponseProcessor();
    }

    /**
     * Retrieve case counts by area of law. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by Area Of Law of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Area Of Law.
     * @param q The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByAreaOfLawWithHttpInfo(q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<CaseCountAnalyticsByAreaOfLawResponse1>> {
        const requestContextPromise = this.requestFactory.getCaseCountAnalyticsByAreaOfLaw(q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseCountAnalyticsByAreaOfLawWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve case counts by area of law. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by Area Of Law of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Area Of Law.
     * @param q The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByAreaOfLaw(q?: string, pageNumber?: number, _options?: Configuration): Observable<CaseCountAnalyticsByAreaOfLawResponse1> {
        return this.getCaseCountAnalyticsByAreaOfLawWithHttpInfo(q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<CaseCountAnalyticsByAreaOfLawResponse1>) => apiResponse.data));
    }

    /**
     * Retrieve case counts by case class. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed   |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by Case Class  of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Case Class.
     * @param q The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByCaseClassWithHttpInfo(q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<CaseCountAnalyticsByCaseClassResponse1>> {
        const requestContextPromise = this.requestFactory.getCaseCountAnalyticsByCaseClass(q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseCountAnalyticsByCaseClassWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve case counts by case class. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed   |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by Case Class  of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Case Class.
     * @param q The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByCaseClass(q?: string, pageNumber?: number, _options?: Configuration): Observable<CaseCountAnalyticsByCaseClassResponse1> {
        return this.getCaseCountAnalyticsByCaseClassWithHttpInfo(q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<CaseCountAnalyticsByCaseClassResponse1>) => apiResponse.data));
    }

    /**
     * Retrieve case count analytics by filing date. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by case filed date of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Case Filed Date.
     * @param groupBy GroupBy
     * @param q The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByCaseFiledDateWithHttpInfo(groupBy: 'Yearly' | 'Quarterly' | 'Monthly' | 'Weekly', q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<CaseCountAnalyticsByCaseFiledDateResponse1>> {
        const requestContextPromise = this.requestFactory.getCaseCountAnalyticsByCaseFiledDate(groupBy, q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseCountAnalyticsByCaseFiledDateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve case count analytics by filing date. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by case filed date of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Case Filed Date.
     * @param groupBy GroupBy
     * @param q The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByCaseFiledDate(groupBy: 'Yearly' | 'Quarterly' | 'Monthly' | 'Weekly', q?: string, pageNumber?: number, _options?: Configuration): Observable<CaseCountAnalyticsByCaseFiledDateResponse1> {
        return this.getCaseCountAnalyticsByCaseFiledDateWithHttpInfo(groupBy, q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<CaseCountAnalyticsByCaseFiledDateResponse1>) => apiResponse.data));
    }

    /**
     * Retrieve case counts by case type. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by case types  of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Case Type.
     * @param q The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByCaseTypeWithHttpInfo(q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<CaseCountAnalyticsByCaseTypeResponse1>> {
        const requestContextPromise = this.requestFactory.getCaseCountAnalyticsByCaseType(q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseCountAnalyticsByCaseTypeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve case counts by case type. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by case types  of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Case Type.
     * @param q The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByCaseType(q?: string, pageNumber?: number, _options?: Configuration): Observable<CaseCountAnalyticsByCaseTypeResponse1> {
        return this.getCaseCountAnalyticsByCaseTypeWithHttpInfo(q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<CaseCountAnalyticsByCaseTypeResponse1>) => apiResponse.data));
    }

    /**
     * Retrieve case counts by case type group. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed  |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed   |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by case type catgeory of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Case Type Group.
     * @param q The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByCaseTypeGroupWithHttpInfo(q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<CaseCountAnalyticsByCaseTypeGroupResponse1>> {
        const requestContextPromise = this.requestFactory.getCaseCountAnalyticsByCaseTypeGroup(q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseCountAnalyticsByCaseTypeGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve case counts by case type group. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed  |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed   |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by case type catgeory of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Case Type Group.
     * @param q The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByCaseTypeGroup(q?: string, pageNumber?: number, _options?: Configuration): Observable<CaseCountAnalyticsByCaseTypeGroupResponse1> {
        return this.getCaseCountAnalyticsByCaseTypeGroupWithHttpInfo(q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<CaseCountAnalyticsByCaseTypeGroupResponse1>) => apiResponse.data));
    }

    /**
     * Retrieve case counts by court. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by Court of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Court.
     * @param q The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByCourtWithHttpInfo(q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<CaseCountAnalyticsByCourtResponse1>> {
        const requestContextPromise = this.requestFactory.getCaseCountAnalyticsByCourt(q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseCountAnalyticsByCourtWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve case counts by court. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by Court of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Court.
     * @param q The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByCourt(q?: string, pageNumber?: number, _options?: Configuration): Observable<CaseCountAnalyticsByCourtResponse1> {
        return this.getCaseCountAnalyticsByCourtWithHttpInfo(q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<CaseCountAnalyticsByCourtResponse1>) => apiResponse.data));
    }

    /**
     * Retrieve case counts by court location. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by court location  of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Court Location.
     * @param q The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByCourtLocationWithHttpInfo(q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<CaseCountAnalyticsByCourtLocationResponse1>> {
        const requestContextPromise = this.requestFactory.getCaseCountAnalyticsByCourtLocation(q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseCountAnalyticsByCourtLocationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve case counts by court location. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by court location  of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Court Location.
     * @param q The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByCourtLocation(q?: string, pageNumber?: number, _options?: Configuration): Observable<CaseCountAnalyticsByCourtLocationResponse1> {
        return this.getCaseCountAnalyticsByCourtLocationWithHttpInfo(q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<CaseCountAnalyticsByCourtLocationResponse1>) => apiResponse.data));
    }

    /**
     * Retrieve case counts by court system. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by court system of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Court System.
     * @param q The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByCourtSystemWithHttpInfo(q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<CaseCountAnalyticsByCourtSystemResponse1>> {
        const requestContextPromise = this.requestFactory.getCaseCountAnalyticsByCourtSystem(q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseCountAnalyticsByCourtSystemWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve case counts by court system. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by court system of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Court System.
     * @param q The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByCourtSystem(q?: string, pageNumber?: number, _options?: Configuration): Observable<CaseCountAnalyticsByCourtSystemResponse1> {
        return this.getCaseCountAnalyticsByCourtSystemWithHttpInfo(q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<CaseCountAnalyticsByCourtSystemResponse1>) => apiResponse.data));
    }

    /**
     * Retrieve case counts by court type. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed   |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by court type  of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by CourtType.
     * @param q The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByCourtTypeWithHttpInfo(q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<CaseCountAnalyticsByCourtTypeResponse1>> {
        const requestContextPromise = this.requestFactory.getCaseCountAnalyticsByCourtType(q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseCountAnalyticsByCourtTypeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve case counts by court type. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed   |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by court type  of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by CourtType.
     * @param q The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByCourtType(q?: string, pageNumber?: number, _options?: Configuration): Observable<CaseCountAnalyticsByCourtTypeResponse1> {
        return this.getCaseCountAnalyticsByCourtTypeWithHttpInfo(q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<CaseCountAnalyticsByCourtTypeResponse1>) => apiResponse.data));
    }

    /**
     * Retrieve case counts by jurisdiction geography. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by jurisdiction geo of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Jurisdiction Geo.
     * @param q The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByJurisdictionGeoWithHttpInfo(q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<CaseCountAnalyticsByJurisdictionGeoResponse1>> {
        const requestContextPromise = this.requestFactory.getCaseCountAnalyticsByJurisdictionGeo(q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseCountAnalyticsByJurisdictionGeoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve case counts by jurisdiction geography. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by jurisdiction geo of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Jurisdiction Geo.
     * @param q The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByJurisdictionGeo(q?: string, pageNumber?: number, _options?: Configuration): Observable<CaseCountAnalyticsByJurisdictionGeoResponse1> {
        return this.getCaseCountAnalyticsByJurisdictionGeoWithHttpInfo(q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<CaseCountAnalyticsByJurisdictionGeoResponse1>) => apiResponse.data));
    }

    /**
     * Retrieve case counts for the specified attorneys. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed  |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by norm attorney of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Attorney.
     * @param q The keyword expression targeting the desired attorneys.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByNormAttorneyWithHttpInfo(q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<CaseCountAnalyticsByNormAttorneyResponse1>> {
        const requestContextPromise = this.requestFactory.getCaseCountAnalyticsByNormAttorney(q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseCountAnalyticsByNormAttorneyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve case counts for the specified attorneys. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed  |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by norm attorney of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Attorney.
     * @param q The keyword expression targeting the desired attorneys.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByNormAttorney(q?: string, pageNumber?: number, _options?: Configuration): Observable<CaseCountAnalyticsByNormAttorneyResponse1> {
        return this.getCaseCountAnalyticsByNormAttorneyWithHttpInfo(q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<CaseCountAnalyticsByNormAttorneyResponse1>) => apiResponse.data));
    }

    /**
     * Retrieve case counts for judges. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **normAttorneyId** | Multiple Ids Allowed |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed  |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by norm judge of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Judge.
     * @param q The keyword expression targeting the desired judges. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByNormJudgeWithHttpInfo(q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<CaseCountAnalyticsByNormJudgeResponse1>> {
        const requestContextPromise = this.requestFactory.getCaseCountAnalyticsByNormJudge(q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseCountAnalyticsByNormJudgeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve case counts for judges. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **normAttorneyId** | Multiple Ids Allowed |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normPartyId** | Multiple Ids Allowed  |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by norm judge of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Judge.
     * @param q The keyword expression targeting the desired judges. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByNormJudge(q?: string, pageNumber?: number, _options?: Configuration): Observable<CaseCountAnalyticsByNormJudgeResponse1> {
        return this.getCaseCountAnalyticsByNormJudgeWithHttpInfo(q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<CaseCountAnalyticsByNormJudgeResponse1>) => apiResponse.data));
    }

    /**
     * Returns Case Analytics by Norm Law Firm. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by norm lawfirm  of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Norm Law Firm.
     * @param q The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByNormLawFirmWithHttpInfo(q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<CaseCountAnalyticsByNormLawFirmResponse1>> {
        const requestContextPromise = this.requestFactory.getCaseCountAnalyticsByNormLawFirm(q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseCountAnalyticsByNormLawFirmWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns Case Analytics by Norm Law Firm. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by norm lawfirm  of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Norm Law Firm.
     * @param q The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByNormLawFirm(q?: string, pageNumber?: number, _options?: Configuration): Observable<CaseCountAnalyticsByNormLawFirmResponse1> {
        return this.getCaseCountAnalyticsByNormLawFirmWithHttpInfo(q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<CaseCountAnalyticsByNormLawFirmResponse1>) => apiResponse.data));
    }

    /**
     * Retrieve case counts for parties. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by norm party of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Party.
     * @param q The keyword expression targeting the desired parties. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByNormPartyWithHttpInfo(q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<CaseCountAnalyticsByNormPartyResponse1>> {
        const requestContextPromise = this.requestFactory.getCaseCountAnalyticsByNormParty(q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseCountAnalyticsByNormPartyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve case counts for parties. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by norm party of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Party.
     * @param q The keyword expression targeting the desired parties. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByNormParty(q?: string, pageNumber?: number, _options?: Configuration): Observable<CaseCountAnalyticsByNormPartyResponse1> {
        return this.getCaseCountAnalyticsByNormPartyWithHttpInfo(q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<CaseCountAnalyticsByNormPartyResponse1>) => apiResponse.data));
    }

    /**
     * Retrieve case counts for attorneys who have appeared as opposing counsel to the specified attorney. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normPartyId** | Single Allowed  |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Single Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGYevnGAWWENhEQ9\"** | | **normJudgeId** | Single Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDpTTZt6KQaRP7Qr\"** | | **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by norm attorney with norm id NATYY29p78c7UoyJJ of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2013 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2013-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Opposing Norm Attorney.
     * @param normAttorneyId The normAttorneyId value of the attorney for whom opposing-counsel attorneys are to be retrieved.    - minimum: 18   - maximum: 18 
     * @param q The keyword expression targeting the desired opposing counsel attorneys.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByOpposingNormAttorneyForANormAttorneyWithHttpInfo(normAttorneyId: string, q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<CaseCountAnalyticsByNormAttorneyResponse1>> {
        const requestContextPromise = this.requestFactory.getCaseCountAnalyticsByOpposingNormAttorneyForANormAttorney(normAttorneyId, q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseCountAnalyticsByOpposingNormAttorneyForANormAttorneyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve case counts for attorneys who have appeared as opposing counsel to the specified attorney. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normPartyId** | Single Allowed  |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normLawFirmId** | Single Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGYevnGAWWENhEQ9\"** | | **normJudgeId** | Single Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDpTTZt6KQaRP7Qr\"** | | **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by norm attorney with norm id NATYY29p78c7UoyJJ of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2013 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2013-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Opposing Norm Attorney.
     * @param normAttorneyId The normAttorneyId value of the attorney for whom opposing-counsel attorneys are to be retrieved.    - minimum: 18   - maximum: 18 
     * @param q The keyword expression targeting the desired opposing counsel attorneys.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByOpposingNormAttorneyForANormAttorney(normAttorneyId: string, q?: string, pageNumber?: number, _options?: Configuration): Observable<CaseCountAnalyticsByNormAttorneyResponse1> {
        return this.getCaseCountAnalyticsByOpposingNormAttorneyForANormAttorneyWithHttpInfo(normAttorneyId, q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<CaseCountAnalyticsByNormAttorneyResponse1>) => apiResponse.data));
    }

    /**
     * Retrieve case counts for law firms that have appeared as opposing counsel against the specified law firm. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Single Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYp7kmEQtt8jQ3eQ\"** | | **normPartyId** | Single Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Single Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by norm lawfirm with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Opposing Norm Law Firm.
     * @param normLawFirmId The normLawFirmId value of the law firm for which opposing firms are to be retrieved.   - minimum: 18   - maximum: 18 
     * @param q The keyword expression targeting the desired opposing counsel firms.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByOpposingNormLawFirmForANormLawFirmWithHttpInfo(normLawFirmId: string, q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<CaseCountAnalyticsByNormLawFirmResponse1>> {
        const requestContextPromise = this.requestFactory.getCaseCountAnalyticsByOpposingNormLawFirmForANormLawFirm(normLawFirmId, q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseCountAnalyticsByOpposingNormLawFirmForANormLawFirmWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve case counts for law firms that have appeared as opposing counsel against the specified law firm. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Single Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYp7kmEQtt8jQ3eQ\"** | | **normPartyId** | Single Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Single Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by norm lawfirm with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Opposing Norm Law Firm.
     * @param normLawFirmId The normLawFirmId value of the law firm for which opposing firms are to be retrieved.   - minimum: 18   - maximum: 18 
     * @param q The keyword expression targeting the desired opposing counsel firms.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByOpposingNormLawFirmForANormLawFirm(normLawFirmId: string, q?: string, pageNumber?: number, _options?: Configuration): Observable<CaseCountAnalyticsByNormLawFirmResponse1> {
        return this.getCaseCountAnalyticsByOpposingNormLawFirmForANormLawFirmWithHttpInfo(normLawFirmId, q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<CaseCountAnalyticsByNormLawFirmResponse1>) => apiResponse.data));
    }

    /**
     * Retrieve case counts for parties that have opposed the specified party. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Single Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normLawFirmId** | Single Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Single Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by norm party with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2013 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2013-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Opposing Norm Party.
     * @param normPartyId The normPartyId value of the party for which opposing parties are to be retrieved.   - minimum: 18   - maximum: 18 
     * @param q The keyword expression targeting the opposing parties that should be retrieved. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByOpposingNormPartyForANormPartyWithHttpInfo(normPartyId: string, q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<CaseCountAnalyticsByNormPartyResponse1>> {
        const requestContextPromise = this.requestFactory.getCaseCountAnalyticsByOpposingNormPartyForANormParty(normPartyId, q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseCountAnalyticsByOpposingNormPartyForANormPartyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve case counts for parties that have opposed the specified party. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normAttorneyId** | Single Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** | | **normLawFirmId** | Single Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** | | **normJudgeId** | Single Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by norm party with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2013 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2013-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Opposing Norm Party.
     * @param normPartyId The normPartyId value of the party for which opposing parties are to be retrieved.   - minimum: 18   - maximum: 18 
     * @param q The keyword expression targeting the opposing parties that should be retrieved. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByOpposingNormPartyForANormParty(normPartyId: string, q?: string, pageNumber?: number, _options?: Configuration): Observable<CaseCountAnalyticsByNormPartyResponse1> {
        return this.getCaseCountAnalyticsByOpposingNormPartyForANormPartyWithHttpInfo(normPartyId, q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<CaseCountAnalyticsByNormPartyResponse1>) => apiResponse.data));
    }

    /**
     * Retrieve case counts by party type. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normPartyId** | Multiple Ids Allowed  |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by party role of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Party Role.
     * @param q The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByPartyRoleWithHttpInfo(q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<CaseCountAnalyticsByPartyRoleResponse1>> {
        const requestContextPromise = this.requestFactory.getCaseCountAnalyticsByPartyRole(q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseCountAnalyticsByPartyRoleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve case counts by party type. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normPartyId** | Multiple Ids Allowed  |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by party role of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Party Role.
     * @param q The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByPartyRole(q?: string, pageNumber?: number, _options?: Configuration): Observable<CaseCountAnalyticsByPartyRoleResponse1> {
        return this.getCaseCountAnalyticsByPartyRoleWithHttpInfo(q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<CaseCountAnalyticsByPartyRoleResponse1>) => apiResponse.data));
    }

    /**
     * Retrieve case counts by party type group. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normPartyId** | Multiple Ids Allowed  |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by Party Role Group of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Party Role Group.
     * @param q The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByPartyRoleGroupWithHttpInfo(q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<CaseCountAnalyticsByPartyRoleGroupResponse1>> {
        const requestContextPromise = this.requestFactory.getCaseCountAnalyticsByPartyRoleGroup(q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseCountAnalyticsByPartyRoleGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve case counts by party type group. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **normPartyId** | Multiple Ids Allowed  |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get case count grouped by Party Role Group of all cases with case type id CTYPGkaW3aGJyKGyfn and filed between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Case Count Analytics by Party Role Group.
     * @param q The keyword expression targeting the desired cases. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getCaseCountAnalyticsByPartyRoleGroup(q?: string, pageNumber?: number, _options?: Configuration): Observable<CaseCountAnalyticsByPartyRoleGroupResponse1> {
        return this.getCaseCountAnalyticsByPartyRoleGroupWithHttpInfo(q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<CaseCountAnalyticsByPartyRoleGroupResponse1>) => apiResponse.data));
    }

}

import { CaseDocketAPIApiRequestFactory, CaseDocketAPIApiResponseProcessor} from "../apis/CaseDocketAPIApi";
export class ObservableCaseDocketAPIApi {
    private requestFactory: CaseDocketAPIApiRequestFactory;
    private responseProcessor: CaseDocketAPIApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CaseDocketAPIApiRequestFactory,
        responseProcessor?: CaseDocketAPIApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CaseDocketAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CaseDocketAPIApiResponseProcessor();
    }

    /**
     * Retrieve the parties represented by the attorney with the specified attorneyId value.
     * Gets Associated Party details for a requested Attorney ID.
     * @param attorneyId Retrieve the parties represented by the attorney with the specified attorneyId value.
     * @param pageNumber Query parameter specifying the page number of the search results to be retrieved.
     */
    public getAttorneyAssociatedPartiesWithHttpInfo(attorneyId: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations>> {
        const requestContextPromise = this.requestFactory.getAttorneyAssociatedParties(attorneyId, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAttorneyAssociatedPartiesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the parties represented by the attorney with the specified attorneyId value.
     * Gets Associated Party details for a requested Attorney ID.
     * @param attorneyId Retrieve the parties represented by the attorney with the specified attorneyId value.
     * @param pageNumber Query parameter specifying the page number of the search results to be retrieved.
     */
    public getAttorneyAssociatedParties(attorneyId: string, pageNumber?: number, _options?: Configuration): Observable<GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations> {
        return this.getAttorneyAssociatedPartiesWithHttpInfo(attorneyId, pageNumber, _options).pipe(map((apiResponse: HttpInfo<GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations>) => apiResponse.data));
    }

    /**
     * Retrieve the attorney with the specified attorneyId value.
     * Gets details for a requested Attorney ID.
     * @param attorneyId Retrieve the attorney with the specified attorneyId value.
     */
    public getAttorneyByIdWithHttpInfo(attorneyId: string, _options?: Configuration): Observable<HttpInfo<GetCase200ResponseAttorneysAttorneyArrayInner>> {
        const requestContextPromise = this.requestFactory.getAttorneyById(attorneyId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAttorneyByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the attorney with the specified attorneyId value.
     * Gets details for a requested Attorney ID.
     * @param attorneyId Retrieve the attorney with the specified attorneyId value.
     */
    public getAttorneyById(attorneyId: string, _options?: Configuration): Observable<GetCase200ResponseAttorneysAttorneyArrayInner> {
        return this.getAttorneyByIdWithHttpInfo(attorneyId, _options).pipe(map((apiResponse: HttpInfo<GetCase200ResponseAttorneysAttorneyArrayInner>) => apiResponse.data));
    }

    /**
     * Retrieve the case with the specified caseId value.
     * Gets case information for a requested Case ID.
     * @param caseId Retrieve the case with the specified caseId value.
     */
    public getCaseWithHttpInfo(caseId: string, _options?: Configuration): Observable<HttpInfo<GetCase200Response>> {
        const requestContextPromise = this.requestFactory.getCase(caseId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the case with the specified caseId value.
     * Gets case information for a requested Case ID.
     * @param caseId Retrieve the case with the specified caseId value.
     */
    public getCase(caseId: string, _options?: Configuration): Observable<GetCase200Response> {
        return this.getCaseWithHttpInfo(caseId, _options).pipe(map((apiResponse: HttpInfo<GetCase200Response>) => apiResponse.data));
    }

    /**
     * Retrieve the attorneys in the case with the specified caseId value.
     * Gets Attorneys for a requested Case ID.
     * @param caseId Retrieve the case with the specified caseId value.
     * @param isVisible Retrieve attorneys in the case with the specified caseId value whose isVisible flag is set to the specified value.
     * @param pageNumber Query parameter specifying the page number of the search results to be retrieved.
     */
    public getCaseAttorneysWithHttpInfo(caseId: string, isVisible?: boolean, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<GetCase200ResponseAttorneys>> {
        const requestContextPromise = this.requestFactory.getCaseAttorneys(caseId, isVisible, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseAttorneysWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the attorneys in the case with the specified caseId value.
     * Gets Attorneys for a requested Case ID.
     * @param caseId Retrieve the case with the specified caseId value.
     * @param isVisible Retrieve attorneys in the case with the specified caseId value whose isVisible flag is set to the specified value.
     * @param pageNumber Query parameter specifying the page number of the search results to be retrieved.
     */
    public getCaseAttorneys(caseId: string, isVisible?: boolean, pageNumber?: number, _options?: Configuration): Observable<GetCase200ResponseAttorneys> {
        return this.getCaseAttorneysWithHttpInfo(caseId, isVisible, pageNumber, _options).pipe(map((apiResponse: HttpInfo<GetCase200ResponseAttorneys>) => apiResponse.data));
    }

    /**
     * Retrieve the docket entries in the case with the specified caseId value.
     * Gets Docket Entries for a requested Case ID.
     * @param caseId Retrieve the case with the specified caseId value.
     * @param docketNumber Retrieve the docket entry witih the specified docket number in the case with the specified caseId value.
     * @param sortBy Sort the retrieved docket entries in ascending order or descending order of date.
     * @param pageNumber Query parameter specifying the page number of the search results to be retrieved.
     */
    public getCaseDocketEntriesWithHttpInfo(caseId: string, docketNumber?: number, sortBy?: 'latest to oldest' | 'oldest to latest', pageNumber?: number, _options?: Configuration): Observable<HttpInfo<GetCase200ResponseDocketEntries>> {
        const requestContextPromise = this.requestFactory.getCaseDocketEntries(caseId, docketNumber, sortBy, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseDocketEntriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the docket entries in the case with the specified caseId value.
     * Gets Docket Entries for a requested Case ID.
     * @param caseId Retrieve the case with the specified caseId value.
     * @param docketNumber Retrieve the docket entry witih the specified docket number in the case with the specified caseId value.
     * @param sortBy Sort the retrieved docket entries in ascending order or descending order of date.
     * @param pageNumber Query parameter specifying the page number of the search results to be retrieved.
     */
    public getCaseDocketEntries(caseId: string, docketNumber?: number, sortBy?: 'latest to oldest' | 'oldest to latest', pageNumber?: number, _options?: Configuration): Observable<GetCase200ResponseDocketEntries> {
        return this.getCaseDocketEntriesWithHttpInfo(caseId, docketNumber, sortBy, pageNumber, _options).pipe(map((apiResponse: HttpInfo<GetCase200ResponseDocketEntries>) => apiResponse.data));
    }

    /**
     * Gets Hearings for a requested Case ID.
     * Gets Hearings for a requested Case ID.
     * @param caseId Retrieve the case with the specified caseId value.
     * @param sortBy Specify the sort order of hearings in the case with the specified caseId.
     * @param pageNumber Query parameter specifying the page number of the search results to be retrieved.
     */
    public getCaseHearingsWithHttpInfo(caseId: string, sortBy?: 'latest to oldest' | 'oldest to latest', pageNumber?: number, _options?: Configuration): Observable<HttpInfo<GetCase200ResponseHearings>> {
        const requestContextPromise = this.requestFactory.getCaseHearings(caseId, sortBy, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseHearingsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets Hearings for a requested Case ID.
     * Gets Hearings for a requested Case ID.
     * @param caseId Retrieve the case with the specified caseId value.
     * @param sortBy Specify the sort order of hearings in the case with the specified caseId.
     * @param pageNumber Query parameter specifying the page number of the search results to be retrieved.
     */
    public getCaseHearings(caseId: string, sortBy?: 'latest to oldest' | 'oldest to latest', pageNumber?: number, _options?: Configuration): Observable<GetCase200ResponseHearings> {
        return this.getCaseHearingsWithHttpInfo(caseId, sortBy, pageNumber, _options).pipe(map((apiResponse: HttpInfo<GetCase200ResponseHearings>) => apiResponse.data));
    }

    /**
     * Retrieve the judges involved in the specified case.
     * Gets Judges for a requested Case ID.
     * @param caseId Retrieve the case with the specified caseId value.
     * @param isVisible Retrieve attorneys judges in the case with the specified caseId value whose isVisible flag is set to the specified value.
     * @param pageNumber Query parameter specifying the page number of the search results to be retrieved.
     */
    public getCaseJudgesWithHttpInfo(caseId: string, isVisible?: boolean, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<GetCase200ResponseJudges>> {
        const requestContextPromise = this.requestFactory.getCaseJudges(caseId, isVisible, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseJudgesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the judges involved in the specified case.
     * Gets Judges for a requested Case ID.
     * @param caseId Retrieve the case with the specified caseId value.
     * @param isVisible Retrieve attorneys judges in the case with the specified caseId value whose isVisible flag is set to the specified value.
     * @param pageNumber Query parameter specifying the page number of the search results to be retrieved.
     */
    public getCaseJudges(caseId: string, isVisible?: boolean, pageNumber?: number, _options?: Configuration): Observable<GetCase200ResponseJudges> {
        return this.getCaseJudgesWithHttpInfo(caseId, isVisible, pageNumber, _options).pipe(map((apiResponse: HttpInfo<GetCase200ResponseJudges>) => apiResponse.data));
    }

    /**
     * Retrieve the parties involved in the case with the specified caseId value.
     * Gets Parties for a requested Case ID.
     * @param caseId Retrieve the case with the specified caseId value.
     * @param isVisible Retrieve parties in the case with the specified caseId value whose isVisible flag is set to the specified value.
     * @param pageNumber Query parameter specifying the page number of the search results to be retrieved.
     * @param partyRoleId Retrieve all parties with the specified partyRoleId value in the case with the specified caseId value.
     * @param partyRoleGroupId Retrieve all parties with the specified partyRoleGroupId value in the case with the specified caseId value.
     * @param attorneyRepresentationTypeId Retrieve all parties with the specified attorneyRepresentationTypeId value in the case with the specified caseId value.
     * @param partyClassificationType Retrieve all parties with the specified partyClassificationType value in the case with the specified caseId value.
     */
    public getCasePartiesWithHttpInfo(caseId: string, isVisible?: boolean, pageNumber?: number, partyRoleId?: string, partyRoleGroupId?: string, attorneyRepresentationTypeId?: string, partyClassificationType?: 'INDIVIDUAL' | 'COMPANY' | 'OTHER', _options?: Configuration): Observable<HttpInfo<GetCase200ResponseParties>> {
        const requestContextPromise = this.requestFactory.getCaseParties(caseId, isVisible, pageNumber, partyRoleId, partyRoleGroupId, attorneyRepresentationTypeId, partyClassificationType, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCasePartiesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the parties involved in the case with the specified caseId value.
     * Gets Parties for a requested Case ID.
     * @param caseId Retrieve the case with the specified caseId value.
     * @param isVisible Retrieve parties in the case with the specified caseId value whose isVisible flag is set to the specified value.
     * @param pageNumber Query parameter specifying the page number of the search results to be retrieved.
     * @param partyRoleId Retrieve all parties with the specified partyRoleId value in the case with the specified caseId value.
     * @param partyRoleGroupId Retrieve all parties with the specified partyRoleGroupId value in the case with the specified caseId value.
     * @param attorneyRepresentationTypeId Retrieve all parties with the specified attorneyRepresentationTypeId value in the case with the specified caseId value.
     * @param partyClassificationType Retrieve all parties with the specified partyClassificationType value in the case with the specified caseId value.
     */
    public getCaseParties(caseId: string, isVisible?: boolean, pageNumber?: number, partyRoleId?: string, partyRoleGroupId?: string, attorneyRepresentationTypeId?: string, partyClassificationType?: 'INDIVIDUAL' | 'COMPANY' | 'OTHER', _options?: Configuration): Observable<GetCase200ResponseParties> {
        return this.getCasePartiesWithHttpInfo(caseId, isVisible, pageNumber, partyRoleId, partyRoleGroupId, attorneyRepresentationTypeId, partyClassificationType, _options).pipe(map((apiResponse: HttpInfo<GetCase200ResponseParties>) => apiResponse.data));
    }

    /**
     * Retrieve cases that UniCourt has identified as related to the case with the specified caseId value.
     * Gets Related Cases for a requested Case ID.
     * @param caseId Retrieve the case with the specified caseId value.
     * @param pageNumber Query parameter specifying the page number of the search results to be retrieved.
     */
    public getCaseRelatedCasesWithHttpInfo(caseId: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<GetCase200ResponseRelatedCases>> {
        const requestContextPromise = this.requestFactory.getCaseRelatedCases(caseId, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseRelatedCasesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve cases that UniCourt has identified as related to the case with the specified caseId value.
     * Gets Related Cases for a requested Case ID.
     * @param caseId Retrieve the case with the specified caseId value.
     * @param pageNumber Query parameter specifying the page number of the search results to be retrieved.
     */
    public getCaseRelatedCases(caseId: string, pageNumber?: number, _options?: Configuration): Observable<GetCase200ResponseRelatedCases> {
        return this.getCaseRelatedCasesWithHttpInfo(caseId, pageNumber, _options).pipe(map((apiResponse: HttpInfo<GetCase200ResponseRelatedCases>) => apiResponse.data));
    }

    /**
     * Retrieve the judge with the specified judgeId value.
     * Gets details for a requested Judge ID.
     * @param judgeId Retrieve the judge with the specified judgeId value.
     */
    public getJudgeByIdWithHttpInfo(judgeId: string, _options?: Configuration): Observable<HttpInfo<GetCase200ResponseJudgesJudgeArrayInner>> {
        const requestContextPromise = this.requestFactory.getJudgeById(judgeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getJudgeByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the judge with the specified judgeId value.
     * Gets details for a requested Judge ID.
     * @param judgeId Retrieve the judge with the specified judgeId value.
     */
    public getJudgeById(judgeId: string, _options?: Configuration): Observable<GetCase200ResponseJudgesJudgeArrayInner> {
        return this.getJudgeByIdWithHttpInfo(judgeId, _options).pipe(map((apiResponse: HttpInfo<GetCase200ResponseJudgesJudgeArrayInner>) => apiResponse.data));
    }

    /**
     * Retrieve the attorneys in the case with the specified partyId value.
     * Gets Associated Attorney details for a requested Party ID.
     * @param partyId Retrieve the party with the specified partyId value.
     * @param pageNumber Query parameter specifying the page number of the search results to be retrieved.
     */
    public getPartyAssociatedAttorneysWithHttpInfo(partyId: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations>> {
        const requestContextPromise = this.requestFactory.getPartyAssociatedAttorneys(partyId, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPartyAssociatedAttorneysWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the attorneys in the case with the specified partyId value.
     * Gets Associated Attorney details for a requested Party ID.
     * @param partyId Retrieve the party with the specified partyId value.
     * @param pageNumber Query parameter specifying the page number of the search results to be retrieved.
     */
    public getPartyAssociatedAttorneys(partyId: string, pageNumber?: number, _options?: Configuration): Observable<GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations> {
        return this.getPartyAssociatedAttorneysWithHttpInfo(partyId, pageNumber, _options).pipe(map((apiResponse: HttpInfo<GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations>) => apiResponse.data));
    }

    /**
     * Retrieve the party with the specified partyId value.
     * Gets details for a requested Party ID.
     * @param partyId Retrieve the party with the specified partyId value.
     */
    public getPartyByIdWithHttpInfo(partyId: string, _options?: Configuration): Observable<HttpInfo<GetCase200ResponsePartiesPartyArrayInner>> {
        const requestContextPromise = this.requestFactory.getPartyById(partyId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPartyByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the party with the specified partyId value.
     * Gets details for a requested Party ID.
     * @param partyId Retrieve the party with the specified partyId value.
     */
    public getPartyById(partyId: string, _options?: Configuration): Observable<GetCase200ResponsePartiesPartyArrayInner> {
        return this.getPartyByIdWithHttpInfo(partyId, _options).pipe(map((apiResponse: HttpInfo<GetCase200ResponsePartiesPartyArrayInner>) => apiResponse.data));
    }

    /**
     * Retrieve the primary documents in the case with the specified caseId value.
     * Gets Primary Documents of Docket Entries.
     * @param caseId Retrieve the case with the specified caseId value.
     * @param docketNumber Retrieve the primary documents associated with the specified docket number in the case with the specified caseId value.
     * @param inLibrary Retrieve the primary documents in the with the specified inLibrary flag in the case with the specified caseId value.
     * @param afterFirstFetchDate Retrieve all primary documents in the case with the specified caseId value that were first fetched by UniCourt on the specified date or within the specified date.
     * @param libraryDate Retrieve all primary documents in the case with the specified caseId value that were added to the Crowdsourced Library on the specified date or within the specified date.
     * @param pageNumber Query parameter specifying the page number of the search results to be retrieved.
     */
    public getPrimaryDocumentsForDocketEntriesWithHttpInfo(caseId: string, docketNumber: number, inLibrary?: boolean, afterFirstFetchDate?: Date, libraryDate?: Date, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments>> {
        const requestContextPromise = this.requestFactory.getPrimaryDocumentsForDocketEntries(caseId, docketNumber, inLibrary, afterFirstFetchDate, libraryDate, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPrimaryDocumentsForDocketEntriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the primary documents in the case with the specified caseId value.
     * Gets Primary Documents of Docket Entries.
     * @param caseId Retrieve the case with the specified caseId value.
     * @param docketNumber Retrieve the primary documents associated with the specified docket number in the case with the specified caseId value.
     * @param inLibrary Retrieve the primary documents in the with the specified inLibrary flag in the case with the specified caseId value.
     * @param afterFirstFetchDate Retrieve all primary documents in the case with the specified caseId value that were first fetched by UniCourt on the specified date or within the specified date.
     * @param libraryDate Retrieve all primary documents in the case with the specified caseId value that were added to the Crowdsourced Library on the specified date or within the specified date.
     * @param pageNumber Query parameter specifying the page number of the search results to be retrieved.
     */
    public getPrimaryDocumentsForDocketEntries(caseId: string, docketNumber: number, inLibrary?: boolean, afterFirstFetchDate?: Date, libraryDate?: Date, pageNumber?: number, _options?: Configuration): Observable<GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments> {
        return this.getPrimaryDocumentsForDocketEntriesWithHttpInfo(caseId, docketNumber, inLibrary, afterFirstFetchDate, libraryDate, pageNumber, _options).pipe(map((apiResponse: HttpInfo<GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments>) => apiResponse.data));
    }

    /**
     * Retrieve the secondary documents in the case with the specified caseId value.
     * Gets Secondary Documents of Docket Entries.
     * @param caseId Retrieve the case with the specified caseId value.
     * @param docketNumber Retrieve the secondary documents associated with the specified docket number in the case with the specified caseId value.
     * @param inLibrary Retrieve the secondary documents in the with the specified inLibrary flag in the case with the specified caseId value.
     * @param afterFirstFetchDate Retrieve all secondary documents in the case with the specified caseId value that were first fetched by UniCourt on the specified date or within the specified date.
     * @param libraryDate Retrieve all secondary documents in the case with the specified caseId value that were added to the Crowdsourced Library on the specified date or within the specified date.
     * @param pageNumber Query parameter specifying the page number of the search results to be retrieved.
     */
    public getSecondaryDocumentsForDocketEntriesWithHttpInfo(caseId: string, docketNumber: number, inLibrary?: boolean, afterFirstFetchDate?: Date, libraryDate?: Date, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments>> {
        const requestContextPromise = this.requestFactory.getSecondaryDocumentsForDocketEntries(caseId, docketNumber, inLibrary, afterFirstFetchDate, libraryDate, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSecondaryDocumentsForDocketEntriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the secondary documents in the case with the specified caseId value.
     * Gets Secondary Documents of Docket Entries.
     * @param caseId Retrieve the case with the specified caseId value.
     * @param docketNumber Retrieve the secondary documents associated with the specified docket number in the case with the specified caseId value.
     * @param inLibrary Retrieve the secondary documents in the with the specified inLibrary flag in the case with the specified caseId value.
     * @param afterFirstFetchDate Retrieve all secondary documents in the case with the specified caseId value that were first fetched by UniCourt on the specified date or within the specified date.
     * @param libraryDate Retrieve all secondary documents in the case with the specified caseId value that were added to the Crowdsourced Library on the specified date or within the specified date.
     * @param pageNumber Query parameter specifying the page number of the search results to be retrieved.
     */
    public getSecondaryDocumentsForDocketEntries(caseId: string, docketNumber: number, inLibrary?: boolean, afterFirstFetchDate?: Date, libraryDate?: Date, pageNumber?: number, _options?: Configuration): Observable<GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments> {
        return this.getSecondaryDocumentsForDocketEntriesWithHttpInfo(caseId, docketNumber, inLibrary, afterFirstFetchDate, libraryDate, pageNumber, _options).pipe(map((apiResponse: HttpInfo<GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments>) => apiResponse.data));
    }

}

import { CaseDocumentsAPIApiRequestFactory, CaseDocumentsAPIApiResponseProcessor} from "../apis/CaseDocumentsAPIApi";
export class ObservableCaseDocumentsAPIApi {
    private requestFactory: CaseDocumentsAPIApiRequestFactory;
    private responseProcessor: CaseDocumentsAPIApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CaseDocumentsAPIApiRequestFactory,
        responseProcessor?: CaseDocumentsAPIApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CaseDocumentsAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CaseDocumentsAPIApiResponseProcessor();
    }

    /**
     * Gets downloadable URL for a requested Document ID.
     * Gets downloadable URL for a requested Document ID.
     * @param caseDocumentId Document ID which you want to download.
     * @param isPreviewDocument If the document you want to download is a preview of a document.
     */
    public getCaseDocumentDownloadByIdWithHttpInfo(caseDocumentId: string, isPreviewDocument?: boolean, _options?: Configuration): Observable<HttpInfo<GetCaseDocumentDownloadById200Response>> {
        const requestContextPromise = this.requestFactory.getCaseDocumentDownloadById(caseDocumentId, isPreviewDocument, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseDocumentDownloadByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets downloadable URL for a requested Document ID.
     * Gets downloadable URL for a requested Document ID.
     * @param caseDocumentId Document ID which you want to download.
     * @param isPreviewDocument If the document you want to download is a preview of a document.
     */
    public getCaseDocumentDownloadById(caseDocumentId: string, isPreviewDocument?: boolean, _options?: Configuration): Observable<GetCaseDocumentDownloadById200Response> {
        return this.getCaseDocumentDownloadByIdWithHttpInfo(caseDocumentId, isPreviewDocument, _options).pipe(map((apiResponse: HttpInfo<GetCaseDocumentDownloadById200Response>) => apiResponse.data));
    }

    /**
     * Get Case Document Order Callback for a requested Case Document Order Callback Id.
     * Get Case Document Order Callback for a requested Case Document Order Callback Id.
     * @param caseDocumentOrderCallbackId Unique Id for the Case Document Order Callback.
     */
    public getCaseDocumentOrderCallbackByIdWithHttpInfo(caseDocumentOrderCallbackId: string, _options?: Configuration): Observable<HttpInfo<OrderCaseDocument200Response>> {
        const requestContextPromise = this.requestFactory.getCaseDocumentOrderCallbackById(caseDocumentOrderCallbackId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseDocumentOrderCallbackByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Case Document Order Callback for a requested Case Document Order Callback Id.
     * Get Case Document Order Callback for a requested Case Document Order Callback Id.
     * @param caseDocumentOrderCallbackId Unique Id for the Case Document Order Callback.
     */
    public getCaseDocumentOrderCallbackById(caseDocumentOrderCallbackId: string, _options?: Configuration): Observable<OrderCaseDocument200Response> {
        return this.getCaseDocumentOrderCallbackByIdWithHttpInfo(caseDocumentOrderCallbackId, _options).pipe(map((apiResponse: HttpInfo<OrderCaseDocument200Response>) => apiResponse.data));
    }

    /**
     * Get Case Document Order Callback list for a requested Date.
     * Get Case Document Order Callback list for a requested Date.
     * @param date Date for which fetch the Case Document Order Callback list. By default, the date will be set to current date.
     * @param status Status of Document Order callbacks. Default status will fetch all callbacks.
     * @param pageNumber Page to fetch the Case Document Order Callback list.&lt;br&gt;   - Minimum: 1 
     */
    public getCaseDocumentOrderCallbacksWithHttpInfo(date?: Date, status?: 'IN_PROGRESS' | 'DELAYED' | 'COMPLETE' | 'FAILURE', pageNumber?: number, _options?: Configuration): Observable<HttpInfo<GetCaseDocumentOrderCallbacks200Response>> {
        const requestContextPromise = this.requestFactory.getCaseDocumentOrderCallbacks(date, status, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseDocumentOrderCallbacksWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Case Document Order Callback list for a requested Date.
     * Get Case Document Order Callback list for a requested Date.
     * @param date Date for which fetch the Case Document Order Callback list. By default, the date will be set to current date.
     * @param status Status of Document Order callbacks. Default status will fetch all callbacks.
     * @param pageNumber Page to fetch the Case Document Order Callback list.&lt;br&gt;   - Minimum: 1 
     */
    public getCaseDocumentOrderCallbacks(date?: Date, status?: 'IN_PROGRESS' | 'DELAYED' | 'COMPLETE' | 'FAILURE', pageNumber?: number, _options?: Configuration): Observable<GetCaseDocumentOrderCallbacks200Response> {
        return this.getCaseDocumentOrderCallbacksWithHttpInfo(date, status, pageNumber, _options).pipe(map((apiResponse: HttpInfo<GetCaseDocumentOrderCallbacks200Response>) => apiResponse.data));
    }

    /**
     * Gets Documents for a requested Case ID.
     * Gets Documents for a requested Case ID.
     * @param caseId Case ID for which you want the data for.
     * @param inLibrary Filter all the documents those are added to the UniCourt library.
     * @param afterFirstFetchDate Get all the documents which were added to the case on or after a specific date.
     * @param libraryDate Sort all the documents based on the date when the document was added to the UniCourt Library.
     * @param firstFetchDate Sort all the documents based on the date it was fetched from the source site.
     * @param sortBy Sort documents with document order.
     * @param pageNumber The page for which the result should be retrieved.
     */
    public getCaseDocumentsWithHttpInfo(caseId: string, inLibrary?: boolean, afterFirstFetchDate?: Date, libraryDate?: Date, firstFetchDate?: Date, sortBy?: 'latest to oldest' | 'oldest to latest', pageNumber?: number, _options?: Configuration): Observable<HttpInfo<GetCase200ResponseCaseDocuments>> {
        const requestContextPromise = this.requestFactory.getCaseDocuments(caseId, inLibrary, afterFirstFetchDate, libraryDate, firstFetchDate, sortBy, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseDocumentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets Documents for a requested Case ID.
     * Gets Documents for a requested Case ID.
     * @param caseId Case ID for which you want the data for.
     * @param inLibrary Filter all the documents those are added to the UniCourt library.
     * @param afterFirstFetchDate Get all the documents which were added to the case on or after a specific date.
     * @param libraryDate Sort all the documents based on the date when the document was added to the UniCourt Library.
     * @param firstFetchDate Sort all the documents based on the date it was fetched from the source site.
     * @param sortBy Sort documents with document order.
     * @param pageNumber The page for which the result should be retrieved.
     */
    public getCaseDocuments(caseId: string, inLibrary?: boolean, afterFirstFetchDate?: Date, libraryDate?: Date, firstFetchDate?: Date, sortBy?: 'latest to oldest' | 'oldest to latest', pageNumber?: number, _options?: Configuration): Observable<GetCase200ResponseCaseDocuments> {
        return this.getCaseDocumentsWithHttpInfo(caseId, inLibrary, afterFirstFetchDate, libraryDate, firstFetchDate, sortBy, pageNumber, _options).pipe(map((apiResponse: HttpInfo<GetCase200ResponseCaseDocuments>) => apiResponse.data));
    }

    /**
     * Gets details for a requested Document ID.
     * Gets details for a requested Document ID.
     * @param caseDocumentId Specific Case Dcoument ID for which you want the data for.
     */
    public getDocumentByIdWithHttpInfo(caseDocumentId: string, _options?: Configuration): Observable<HttpInfo<GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner>> {
        const requestContextPromise = this.requestFactory.getDocumentById(caseDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDocumentByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets details for a requested Document ID.
     * Gets details for a requested Document ID.
     * @param caseDocumentId Specific Case Dcoument ID for which you want the data for.
     */
    public getDocumentById(caseDocumentId: string, _options?: Configuration): Observable<GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner> {
        return this.getDocumentByIdWithHttpInfo(caseDocumentId, _options).pipe(map((apiResponse: HttpInfo<GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner>) => apiResponse.data));
    }

    /**
     * Add Case Document Order for requested Document Ids. The status will be ``IN_PROGRESS`` after it has been requested. If the request is not processed within 4 hours, it will be reported as ``DELAYED``.  If the request is still incomplete after 4 hours, it will remain in the DELAYED status for up to 72 hours after the request was approved. Such requests will be recorded as ``TIMEOUT`` after 72 hours.
     * Add Case Document Order for requested Document Ids.
     * @param orderCaseDocumentRequest If the Case Document Order is for Preview, then the value for &#x60;&#x60;isPreviewOnly&#x60;&#x60; should be &#x60;&#x60;true&#x60;&#x60; else &#x60;&#x60;false&#x60;&#x60;. 
     */
    public orderCaseDocumentWithHttpInfo(orderCaseDocumentRequest?: OrderCaseDocumentRequest, _options?: Configuration): Observable<HttpInfo<OrderCaseDocument200Response>> {
        const requestContextPromise = this.requestFactory.orderCaseDocument(orderCaseDocumentRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orderCaseDocumentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add Case Document Order for requested Document Ids. The status will be ``IN_PROGRESS`` after it has been requested. If the request is not processed within 4 hours, it will be reported as ``DELAYED``.  If the request is still incomplete after 4 hours, it will remain in the DELAYED status for up to 72 hours after the request was approved. Such requests will be recorded as ``TIMEOUT`` after 72 hours.
     * Add Case Document Order for requested Document Ids.
     * @param orderCaseDocumentRequest If the Case Document Order is for Preview, then the value for &#x60;&#x60;isPreviewOnly&#x60;&#x60; should be &#x60;&#x60;true&#x60;&#x60; else &#x60;&#x60;false&#x60;&#x60;. 
     */
    public orderCaseDocument(orderCaseDocumentRequest?: OrderCaseDocumentRequest, _options?: Configuration): Observable<OrderCaseDocument200Response> {
        return this.orderCaseDocumentWithHttpInfo(orderCaseDocumentRequest, _options).pipe(map((apiResponse: HttpInfo<OrderCaseDocument200Response>) => apiResponse.data));
    }

}

import { CaseExportAPIApiRequestFactory, CaseExportAPIApiResponseProcessor} from "../apis/CaseExportAPIApi";
export class ObservableCaseExportAPIApi {
    private requestFactory: CaseExportAPIApiRequestFactory;
    private responseProcessor: CaseExportAPIApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CaseExportAPIApiRequestFactory,
        responseProcessor?: CaseExportAPIApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CaseExportAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CaseExportAPIApiResponseProcessor();
    }

    /**
     * Retrieve information about the specified case export.
     * Gets case exported for a requested Case ID.
     * @param caseId The caseId value of the case for which case export information is to be retrieved.
     */
    public exportCaseWithHttpInfo(caseId: string, _options?: Configuration): Observable<HttpInfo<ExportCase200Response>> {
        const requestContextPromise = this.requestFactory.exportCase(caseId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exportCaseWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve information about the specified case export.
     * Gets case exported for a requested Case ID.
     * @param caseId The caseId value of the case for which case export information is to be retrieved.
     */
    public exportCase(caseId: string, _options?: Configuration): Observable<ExportCase200Response> {
        return this.exportCaseWithHttpInfo(caseId, _options).pipe(map((apiResponse: HttpInfo<ExportCase200Response>) => apiResponse.data));
    }

    /**
     * Retrieve the specified case export callback object.
     * Get Case Export Callback for a requested Case Export Callback Id.
     * @param caseExportCallbackId The caseExportCallbackId value of the case export callback object to be retrieved.
     */
    public getCaseExportCallbackByIdWithHttpInfo(caseExportCallbackId: string, _options?: Configuration): Observable<HttpInfo<ExportCase200Response>> {
        const requestContextPromise = this.requestFactory.getCaseExportCallbackById(caseExportCallbackId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseExportCallbackByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the specified case export callback object.
     * Get Case Export Callback for a requested Case Export Callback Id.
     * @param caseExportCallbackId The caseExportCallbackId value of the case export callback object to be retrieved.
     */
    public getCaseExportCallbackById(caseExportCallbackId: string, _options?: Configuration): Observable<ExportCase200Response> {
        return this.getCaseExportCallbackByIdWithHttpInfo(caseExportCallbackId, _options).pipe(map((apiResponse: HttpInfo<ExportCase200Response>) => apiResponse.data));
    }

    /**
     * Retrieve callbacks according to the specified criteria.
     * Get Case Export Callback list for a requested Date.
     * @param date The date for which callbacks are to be retrieved.
     * @param status The status code of the callbacks to be retrieved.
     * @param pageNumber The page number of the callbacks to be retrieved.&lt;br&gt;   - Minimum: 1 
     */
    public getCaseExportCallbacksWithHttpInfo(date?: Date, status?: 'IN_PROGRESS' | 'COMPLETE' | 'FAILURE', pageNumber?: number, _options?: Configuration): Observable<HttpInfo<GetCaseExportCallbacks200Response>> {
        const requestContextPromise = this.requestFactory.getCaseExportCallbacks(date, status, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseExportCallbacksWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve callbacks according to the specified criteria.
     * Get Case Export Callback list for a requested Date.
     * @param date The date for which callbacks are to be retrieved.
     * @param status The status code of the callbacks to be retrieved.
     * @param pageNumber The page number of the callbacks to be retrieved.&lt;br&gt;   - Minimum: 1 
     */
    public getCaseExportCallbacks(date?: Date, status?: 'IN_PROGRESS' | 'COMPLETE' | 'FAILURE', pageNumber?: number, _options?: Configuration): Observable<GetCaseExportCallbacks200Response> {
        return this.getCaseExportCallbacksWithHttpInfo(date, status, pageNumber, _options).pipe(map((apiResponse: HttpInfo<GetCaseExportCallbacks200Response>) => apiResponse.data));
    }

}

import { CaseSearchAPIApiRequestFactory, CaseSearchAPIApiResponseProcessor} from "../apis/CaseSearchAPIApi";
export class ObservableCaseSearchAPIApi {
    private requestFactory: CaseSearchAPIApiRequestFactory;
    private responseProcessor: CaseSearchAPIApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CaseSearchAPIApiRequestFactory,
        responseProcessor?: CaseSearchAPIApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CaseSearchAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CaseSearchAPIApiResponseProcessor();
    }

    /**
     * This endpoint retrieves cases according to keyword expressions you provide. <br> Keyword expressions are constructed according to the rules described below. <br><br> This API supports multiple use cases:   - Search for multiple keywords  `Google OR Facebook`.   - Search within particular attributes.   - Relational search using terms and connectors.   - And much more. ----  ## Allowed Connectors in Keyword Expressions | Connector | Description  | Example | | ------| ------|------| | **AND** |Find cases containing each of the terms joined by AND connectors.|**personal AND injury**| | **OR**  |Find cases containing any of the terms joined by OR connectors.|**order OR decision**| | **NOT** |Find cases that do not contain the specified term.|**personal AND NOT injury**.  Find cases with the word “personal” and not “injury”.| | **“[phrase]”** |Find the exact phrase placed between the quotation marks.|**\"personal injury”**| | **~**  |Find cases in which the specified words appear near each other. For example, \"personal injury\" ~ 5 targets cases in which the word \"personal\" appears within 5 words of the word \"injury\".|**“personal injury” ~ 5** - Find cases with “personal” within five words of “injury”. | | **( … )** |Specifies the order in which connectors are to be appliied in a keyword expression.| **personal AND (injury OR fall)** - Find cases with the word personal injury or personal fall.|  <br><br> ## Fields and Connectors Searching | Filed | Description  | Example | | ------| ------|------| |**caseNumber** |Find cases with the specified case number (i.e., docket number).| **caseNumber:\"2020-L-007212\"** - Find cases whose case number matches given case number number.| |**caseName** |Find cases with the specified case title.| **caseName:\"THOMAS P. CARNEY, INC. VS BEHLER JAMES Et Al\"** - Find cases whose case name matches given terms.| |**Court**|Find cases in the specified court.|**(Court:(name:(New York)))** - Find cases in New York state.<br>| |**CaseStatus**|Find cases witih the specified case status.|**(CaseStatus:(name:Disposed))** - All disposed cases.<br>| |**CaseType**|Find cases of the specified case type. | **(CaseType:(name:Property))** - Cases with case type “property”.| |**Party** | Find cases involving the specified party.| **(Party:(name:Apple))** - Find cases involving Apple. | |**partyId**|Find cases involving a party with the specified partyId value.|**(Party:(partyId:\"PRTYgu1ffe866484c2\"))**| |**PartyRole** | Find cases in which at least one party has the specified party role. | **(Party:((PartyRole:(name:\"plaintiff\"))))** - Find cases with party role “plaintiff”.<br><br> **(Party:((PartyRole:(name:defendant)) AND (AttorneyRepresentationType:(name:(Attorney represented)))))** - Find cases where a party is acting as defendant and represented by an attorney.| |**AttorneyRepresentationType**| Find cases in which at least one party has the specified attorney representation type.|**(Party:(AttorneyRepresentationType:(name:\"attorney represented\")))** - Find cases where a party is represented by an attorney. | |**Attorney** | Find cases involving the specified attorney. | **(Attorney:(name:\"David Boies\"))** - Find cases involving the attorney David Boies. | |**AttorneyType**|Find cases involving at least one attorney of the specified attorney type.|**(Attorney:((AttorneyType:(name:\"Lead Attorney\"))))**| |**Judge** |Find cases involving the specified judge. | **(Judge:(name:\"Posner\"))** - Find cases involving Judge Posner.| |**JudgeType**|Find cases involving at least one judge of the specified judge type.|**(Judge:((JudgeType:(name:\"Magistrate\"))))**| |**CaseStats**|Find cases with the specified case statistics.|**(CaseStats:(partyCount:[10 TO 100]))** - Find cases involving 10 to 100 parties.<br>**(CaseStats:(attorneyCount:[2 TO 40]))** - Find cases involving 2 to 40 attorneys.<br>**(CaseStats:(judgeCount:[\\* TO 2]))** - Find cases involving up to 2 judges. <br>**(CaseStats:(docketEntryCount:[10 TO 100]))** - Find cases having 10 to 100 docket_entries. <br>**(CaseStats:(allCaseDocumentCount:[10 TO 100]))** - Find cases having 10 to 100 documents. | |**filedDate** | Find cases that were filed on the specified date or within the specified date range. | **filedDate:[2020-03-15 TO 2021-12-01]** - Find the most recently filed cases between March 15, 2020 and December 1, 2021 (inclusive). | |**lastFetchDate**| Find cases in which UniCourt last checked for updates on the specified date or within the specified date range. |**(lastFetchDate:[now-60d TO \\*\\])** - Find cases that were updated by UniCourt in the last 60 days. | |**lastFetchDateWithUpdates**|Find cases in which UniCourt last detected an update on the specified date or within the specified date range.|**(lastFetchDateWithUpdates:[now-6d TO \\*\\])** - Find cases for the changes found on court site in last 6 days.| |**participantsLastFetchDate**|Find cases in which information cocnerning participants was last updated on the specified date or within the specified date range.|**(participantsLastFetchDate:[now-6d TO \\*\\])** - Find cases where the participant\'s information was updated in last 6 days.| |**DocketEntry**|Find cases in which at least one docket entry contains the specified text.|**(DocketEntry:(text:(Motion to Compel Responses) AND docketEntryDate:[2020-01-01T00:00:00 TO 2020-05-01T00:00:00]))** - Find cases with docket text “Motion to Compel Responses” and action date between 2020-01-01 and 2020-05-01.| |**docketEntryDate**|Find cases in which at least one docket entry was made on the specified date or within the specified date range.|**(DocketEntry:(docketEntryDate:[2020-01-01T00:00:00 TO 2020-05-01T00:00:00])) AND (CaseStats:(allCaseDocumentCount:[0 TO 10]))** - Find cases with docket action date between 2020-01-01 and 2020-05-01 having up to 10 documents associated with it.| |**HearingDate**| Find cases with at least one hearing scheduled for the specified date or within the specified date range.|**(Hearing:(hearingDate:[now TO now+10d]))** - Find cases where hearing is scheduled in next 10 days.| |**HearingDate**| Search for cases where hearing is going to happen in 10 to 20days.|**(Hearing:(hearingDate:[now+10d TO now+20d]))** - Find cases where hearing is scheduled in next 10 to 20 days.| |**JurisdictionGeo**|Find cases in which the law of the specified state governs.|**(JurisdictionGeo:(state:\"New York\"))**- Find cases where Jurisdiction is New York state.| |**Party Address Exists**|Find cases with Party addresses.|**(Party:(Contact:(Address:(stateName:\\*))))**- Returns only those cases that have addresses for parties.| |**Document**|Find cases with specific document name and preview is available for the document.|**(CaseDocument:(name:\"civil case cover sheet\" AND isPreviewAvailable:true))**- Returns cases with document civil case cover sheet and preview is available.|  <br><br> --- ## Party Sub Filter Examples |Example |Explanation | |---|---| |**(Party:(name:google AND (PartyRole:(name:\"plaintiff\"))))**|Find cases involving at least one plaintiff whose name contains the term \"Google\".| |**(Party:(name:\"OTELIA PEREIDA\" AND (AttorneyRepresentationType:(name:\"Attorney represented\")))) AND (Attorney:(name:\"Law Offices of Todd M Friedman\"))**|Find cases where the Party is *OTELIA PEREIDA* and is represented by the attorney *Law Offices of Todd M Friedman*.|  --- ### All query parameters supported for this API can be found in below schema section. Schema -->  CaseSearchQueryObject 
     * Case search.
     * @param q Query parameter for keyword expressions.&lt;/a&gt; 
     * @param sort Query parameter specifying how results are to be sorted. Results can be sorted according to filedDate or relevancy.
     * @param order Query parameter specifying whether search result are sorted in ascending or descending order.
     * @param pageNumber The page number of the desired page of results. - Minimum: 1 - Maximum: 1000 
     */
    public searchCasesWithHttpInfo(q: string, sort?: 'filedDate' | 'relevancy', order?: 'asc' | 'desc', pageNumber?: number, _options?: Configuration): Observable<HttpInfo<SearchCases200Response>> {
        const requestContextPromise = this.requestFactory.searchCases(q, sort, order, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchCasesWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint retrieves cases according to keyword expressions you provide. <br> Keyword expressions are constructed according to the rules described below. <br><br> This API supports multiple use cases:   - Search for multiple keywords  `Google OR Facebook`.   - Search within particular attributes.   - Relational search using terms and connectors.   - And much more. ----  ## Allowed Connectors in Keyword Expressions | Connector | Description  | Example | | ------| ------|------| | **AND** |Find cases containing each of the terms joined by AND connectors.|**personal AND injury**| | **OR**  |Find cases containing any of the terms joined by OR connectors.|**order OR decision**| | **NOT** |Find cases that do not contain the specified term.|**personal AND NOT injury**.  Find cases with the word “personal” and not “injury”.| | **“[phrase]”** |Find the exact phrase placed between the quotation marks.|**\"personal injury”**| | **~**  |Find cases in which the specified words appear near each other. For example, \"personal injury\" ~ 5 targets cases in which the word \"personal\" appears within 5 words of the word \"injury\".|**“personal injury” ~ 5** - Find cases with “personal” within five words of “injury”. | | **( … )** |Specifies the order in which connectors are to be appliied in a keyword expression.| **personal AND (injury OR fall)** - Find cases with the word personal injury or personal fall.|  <br><br> ## Fields and Connectors Searching | Filed | Description  | Example | | ------| ------|------| |**caseNumber** |Find cases with the specified case number (i.e., docket number).| **caseNumber:\"2020-L-007212\"** - Find cases whose case number matches given case number number.| |**caseName** |Find cases with the specified case title.| **caseName:\"THOMAS P. CARNEY, INC. VS BEHLER JAMES Et Al\"** - Find cases whose case name matches given terms.| |**Court**|Find cases in the specified court.|**(Court:(name:(New York)))** - Find cases in New York state.<br>| |**CaseStatus**|Find cases witih the specified case status.|**(CaseStatus:(name:Disposed))** - All disposed cases.<br>| |**CaseType**|Find cases of the specified case type. | **(CaseType:(name:Property))** - Cases with case type “property”.| |**Party** | Find cases involving the specified party.| **(Party:(name:Apple))** - Find cases involving Apple. | |**partyId**|Find cases involving a party with the specified partyId value.|**(Party:(partyId:\"PRTYgu1ffe866484c2\"))**| |**PartyRole** | Find cases in which at least one party has the specified party role. | **(Party:((PartyRole:(name:\"plaintiff\"))))** - Find cases with party role “plaintiff”.<br><br> **(Party:((PartyRole:(name:defendant)) AND (AttorneyRepresentationType:(name:(Attorney represented)))))** - Find cases where a party is acting as defendant and represented by an attorney.| |**AttorneyRepresentationType**| Find cases in which at least one party has the specified attorney representation type.|**(Party:(AttorneyRepresentationType:(name:\"attorney represented\")))** - Find cases where a party is represented by an attorney. | |**Attorney** | Find cases involving the specified attorney. | **(Attorney:(name:\"David Boies\"))** - Find cases involving the attorney David Boies. | |**AttorneyType**|Find cases involving at least one attorney of the specified attorney type.|**(Attorney:((AttorneyType:(name:\"Lead Attorney\"))))**| |**Judge** |Find cases involving the specified judge. | **(Judge:(name:\"Posner\"))** - Find cases involving Judge Posner.| |**JudgeType**|Find cases involving at least one judge of the specified judge type.|**(Judge:((JudgeType:(name:\"Magistrate\"))))**| |**CaseStats**|Find cases with the specified case statistics.|**(CaseStats:(partyCount:[10 TO 100]))** - Find cases involving 10 to 100 parties.<br>**(CaseStats:(attorneyCount:[2 TO 40]))** - Find cases involving 2 to 40 attorneys.<br>**(CaseStats:(judgeCount:[\\* TO 2]))** - Find cases involving up to 2 judges. <br>**(CaseStats:(docketEntryCount:[10 TO 100]))** - Find cases having 10 to 100 docket_entries. <br>**(CaseStats:(allCaseDocumentCount:[10 TO 100]))** - Find cases having 10 to 100 documents. | |**filedDate** | Find cases that were filed on the specified date or within the specified date range. | **filedDate:[2020-03-15 TO 2021-12-01]** - Find the most recently filed cases between March 15, 2020 and December 1, 2021 (inclusive). | |**lastFetchDate**| Find cases in which UniCourt last checked for updates on the specified date or within the specified date range. |**(lastFetchDate:[now-60d TO \\*\\])** - Find cases that were updated by UniCourt in the last 60 days. | |**lastFetchDateWithUpdates**|Find cases in which UniCourt last detected an update on the specified date or within the specified date range.|**(lastFetchDateWithUpdates:[now-6d TO \\*\\])** - Find cases for the changes found on court site in last 6 days.| |**participantsLastFetchDate**|Find cases in which information cocnerning participants was last updated on the specified date or within the specified date range.|**(participantsLastFetchDate:[now-6d TO \\*\\])** - Find cases where the participant\'s information was updated in last 6 days.| |**DocketEntry**|Find cases in which at least one docket entry contains the specified text.|**(DocketEntry:(text:(Motion to Compel Responses) AND docketEntryDate:[2020-01-01T00:00:00 TO 2020-05-01T00:00:00]))** - Find cases with docket text “Motion to Compel Responses” and action date between 2020-01-01 and 2020-05-01.| |**docketEntryDate**|Find cases in which at least one docket entry was made on the specified date or within the specified date range.|**(DocketEntry:(docketEntryDate:[2020-01-01T00:00:00 TO 2020-05-01T00:00:00])) AND (CaseStats:(allCaseDocumentCount:[0 TO 10]))** - Find cases with docket action date between 2020-01-01 and 2020-05-01 having up to 10 documents associated with it.| |**HearingDate**| Find cases with at least one hearing scheduled for the specified date or within the specified date range.|**(Hearing:(hearingDate:[now TO now+10d]))** - Find cases where hearing is scheduled in next 10 days.| |**HearingDate**| Search for cases where hearing is going to happen in 10 to 20days.|**(Hearing:(hearingDate:[now+10d TO now+20d]))** - Find cases where hearing is scheduled in next 10 to 20 days.| |**JurisdictionGeo**|Find cases in which the law of the specified state governs.|**(JurisdictionGeo:(state:\"New York\"))**- Find cases where Jurisdiction is New York state.| |**Party Address Exists**|Find cases with Party addresses.|**(Party:(Contact:(Address:(stateName:\\*))))**- Returns only those cases that have addresses for parties.| |**Document**|Find cases with specific document name and preview is available for the document.|**(CaseDocument:(name:\"civil case cover sheet\" AND isPreviewAvailable:true))**- Returns cases with document civil case cover sheet and preview is available.|  <br><br> --- ## Party Sub Filter Examples |Example |Explanation | |---|---| |**(Party:(name:google AND (PartyRole:(name:\"plaintiff\"))))**|Find cases involving at least one plaintiff whose name contains the term \"Google\".| |**(Party:(name:\"OTELIA PEREIDA\" AND (AttorneyRepresentationType:(name:\"Attorney represented\")))) AND (Attorney:(name:\"Law Offices of Todd M Friedman\"))**|Find cases where the Party is *OTELIA PEREIDA* and is represented by the attorney *Law Offices of Todd M Friedman*.|  --- ### All query parameters supported for this API can be found in below schema section. Schema -->  CaseSearchQueryObject 
     * Case search.
     * @param q Query parameter for keyword expressions.&lt;/a&gt; 
     * @param sort Query parameter specifying how results are to be sorted. Results can be sorted according to filedDate or relevancy.
     * @param order Query parameter specifying whether search result are sorted in ascending or descending order.
     * @param pageNumber The page number of the desired page of results. - Minimum: 1 - Maximum: 1000 
     */
    public searchCases(q: string, sort?: 'filedDate' | 'relevancy', order?: 'asc' | 'desc', pageNumber?: number, _options?: Configuration): Observable<SearchCases200Response> {
        return this.searchCasesWithHttpInfo(q, sort, order, pageNumber, _options).pipe(map((apiResponse: HttpInfo<SearchCases200Response>) => apiResponse.data));
    }

    /**
     * Retrieve the search results corresponding to the specified caseSearchId value. 
     * Case search results for a given caseSearchId.
     * @param caseSearchId Case Search information for the given caseSearchId.
     * @param pageNumber The page number of the desired page of results. - Minimum: 1 - Maximum: 1000 
     */
    public searchCasesByIdWithHttpInfo(caseSearchId: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<SearchCases200Response>> {
        const requestContextPromise = this.requestFactory.searchCasesById(caseSearchId, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchCasesByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the search results corresponding to the specified caseSearchId value. 
     * Case search results for a given caseSearchId.
     * @param caseSearchId Case Search information for the given caseSearchId.
     * @param pageNumber The page number of the desired page of results. - Minimum: 1 - Maximum: 1000 
     */
    public searchCasesById(caseSearchId: string, pageNumber?: number, _options?: Configuration): Observable<SearchCases200Response> {
        return this.searchCasesByIdWithHttpInfo(caseSearchId, pageNumber, _options).pipe(map((apiResponse: HttpInfo<SearchCases200Response>) => apiResponse.data));
    }

}

import { CaseTrackingAPIApiRequestFactory, CaseTrackingAPIApiResponseProcessor} from "../apis/CaseTrackingAPIApi";
export class ObservableCaseTrackingAPIApi {
    private requestFactory: CaseTrackingAPIApiRequestFactory;
    private responseProcessor: CaseTrackingAPIApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CaseTrackingAPIApiRequestFactory,
        responseProcessor?: CaseTrackingAPIApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CaseTrackingAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CaseTrackingAPIApiResponseProcessor();
    }

    /**
     * Retrieve case tracking information for the specified caseId value.
     * Get Case Track for a requested Case Id.
     * @param caseId The caseId value for which case tracking information is to be retrieved.
     */
    public getCaseTrackByIdWithHttpInfo(caseId: string, _options?: Configuration): Observable<HttpInfo<CaseTrackPostRequest>> {
        const requestContextPromise = this.requestFactory.getCaseTrackById(caseId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseTrackByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve case tracking information for the specified caseId value.
     * Get Case Track for a requested Case Id.
     * @param caseId The caseId value for which case tracking information is to be retrieved.
     */
    public getCaseTrackById(caseId: string, _options?: Configuration): Observable<CaseTrackPostRequest> {
        return this.getCaseTrackByIdWithHttpInfo(caseId, _options).pipe(map((apiResponse: HttpInfo<CaseTrackPostRequest>) => apiResponse.data));
    }

    /**
     * Retrieve a list of all tracked cases.
     * Get Case Track list.
     * @param lastFetchDate The lastFetchDate value of the tracked case. The date value should be entered in the format YYYY-MM-DDTHH:MM:SS+ZZ:zz. 
     * @param lastFetchDateWithUpdates The date on which changes were last found in the case information. 
     * @param pageNumber The page number of the results to be retrieved.&lt;br&gt;   - Minimum: 1 
     */
    public getCaseTracksWithHttpInfo(lastFetchDate?: Date, lastFetchDateWithUpdates?: Date, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<GetCaseTracks200Response>> {
        const requestContextPromise = this.requestFactory.getCaseTracks(lastFetchDate, lastFetchDateWithUpdates, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseTracksWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a list of all tracked cases.
     * Get Case Track list.
     * @param lastFetchDate The lastFetchDate value of the tracked case. The date value should be entered in the format YYYY-MM-DDTHH:MM:SS+ZZ:zz. 
     * @param lastFetchDateWithUpdates The date on which changes were last found in the case information. 
     * @param pageNumber The page number of the results to be retrieved.&lt;br&gt;   - Minimum: 1 
     */
    public getCaseTracks(lastFetchDate?: Date, lastFetchDateWithUpdates?: Date, pageNumber?: number, _options?: Configuration): Observable<GetCaseTracks200Response> {
        return this.getCaseTracksWithHttpInfo(lastFetchDate, lastFetchDateWithUpdates, pageNumber, _options).pipe(map((apiResponse: HttpInfo<GetCaseTracks200Response>) => apiResponse.data));
    }

    /**
     * Remove Case Track for a specific Case Id.
     * Remove Case Track for a specific Case Id.
     * @param caseId The caseId value for which case tracking information is to be retrieved.
     */
    public removeCaseTrackByIdWithHttpInfo(caseId: string, _options?: Configuration): Observable<HttpInfo<Success1>> {
        const requestContextPromise = this.requestFactory.removeCaseTrackById(caseId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeCaseTrackByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove Case Track for a specific Case Id.
     * Remove Case Track for a specific Case Id.
     * @param caseId The caseId value for which case tracking information is to be retrieved.
     */
    public removeCaseTrackById(caseId: string, _options?: Configuration): Observable<Success1> {
        return this.removeCaseTrackByIdWithHttpInfo(caseId, _options).pipe(map((apiResponse: HttpInfo<Success1>) => apiResponse.data));
    }

    /**
     * Track the specified case.
     * Add Case Track for the requested Case Id.
     * @param trackCaseRequest 
     */
    public trackCaseWithHttpInfo(trackCaseRequest?: TrackCaseRequest, _options?: Configuration): Observable<HttpInfo<Success1>> {
        const requestContextPromise = this.requestFactory.trackCase(trackCaseRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.trackCaseWithHttpInfo(rsp)));
            }));
    }

    /**
     * Track the specified case.
     * Add Case Track for the requested Case Id.
     * @param trackCaseRequest 
     */
    public trackCase(trackCaseRequest?: TrackCaseRequest, _options?: Configuration): Observable<Success1> {
        return this.trackCaseWithHttpInfo(trackCaseRequest, _options).pipe(map((apiResponse: HttpInfo<Success1>) => apiResponse.data));
    }

}

import { CaseUpdateAPIApiRequestFactory, CaseUpdateAPIApiResponseProcessor} from "../apis/CaseUpdateAPIApi";
export class ObservableCaseUpdateAPIApi {
    private requestFactory: CaseUpdateAPIApiRequestFactory;
    private responseProcessor: CaseUpdateAPIApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CaseUpdateAPIApiRequestFactory,
        responseProcessor?: CaseUpdateAPIApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CaseUpdateAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CaseUpdateAPIApiResponseProcessor();
    }

    /**
     * Retrieve case updates for the specified case object.
     * Get Case Updates for a requested CaseId.
     * @param caseId The caseId value of the case object for which updates are to be retrieved.
     */
    public getCaseUpdateByCaseIdWithHttpInfo(caseId: string, _options?: Configuration): Observable<HttpInfo<UpdateCase200Response>> {
        const requestContextPromise = this.requestFactory.getCaseUpdateByCaseId(caseId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseUpdateByCaseIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve case updates for the specified case object.
     * Get Case Updates for a requested CaseId.
     * @param caseId The caseId value of the case object for which updates are to be retrieved.
     */
    public getCaseUpdateByCaseId(caseId: string, _options?: Configuration): Observable<UpdateCase200Response> {
        return this.getCaseUpdateByCaseIdWithHttpInfo(caseId, _options).pipe(map((apiResponse: HttpInfo<UpdateCase200Response>) => apiResponse.data));
    }

    /**
     * Retrieve case updates for the specified date.
     * Get Case Update  list for a requested Date.
     * @param caseId The caseId value of the case for which updates should be retrieved.
     * @param requestedDate The date for which case updates are to be retrieved.
     * @param status Status of the case updates to be retrieved.
     * @param pageNumber The page number of the callbacks to be retrieved.&lt;br&gt;   - Minimum: 1 
     */
    public getCaseUpdatesWithHttpInfo(caseId?: string, requestedDate?: Date, status?: 'IN_PROGRESS' | 'COMPLETE' | 'FAILURE', pageNumber?: number, _options?: Configuration): Observable<HttpInfo<GetCaseUpdates200Response>> {
        const requestContextPromise = this.requestFactory.getCaseUpdates(caseId, requestedDate, status, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseUpdatesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve case updates for the specified date.
     * Get Case Update  list for a requested Date.
     * @param caseId The caseId value of the case for which updates should be retrieved.
     * @param requestedDate The date for which case updates are to be retrieved.
     * @param status Status of the case updates to be retrieved.
     * @param pageNumber The page number of the callbacks to be retrieved.&lt;br&gt;   - Minimum: 1 
     */
    public getCaseUpdates(caseId?: string, requestedDate?: Date, status?: 'IN_PROGRESS' | 'COMPLETE' | 'FAILURE', pageNumber?: number, _options?: Configuration): Observable<GetCaseUpdates200Response> {
        return this.getCaseUpdatesWithHttpInfo(caseId, requestedDate, status, pageNumber, _options).pipe(map((apiResponse: HttpInfo<GetCaseUpdates200Response>) => apiResponse.data));
    }

    /**
     * Request case updates for the specified case.
     * Add Case Update for the requested Case Id.
     * @param updateCaseRequest 
     */
    public updateCaseWithHttpInfo(updateCaseRequest?: UpdateCaseRequest, _options?: Configuration): Observable<HttpInfo<UpdateCase200Response>> {
        const requestContextPromise = this.requestFactory.updateCase(updateCaseRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCaseWithHttpInfo(rsp)));
            }));
    }

    /**
     * Request case updates for the specified case.
     * Add Case Update for the requested Case Id.
     * @param updateCaseRequest 
     */
    public updateCase(updateCaseRequest?: UpdateCaseRequest, _options?: Configuration): Observable<UpdateCase200Response> {
        return this.updateCaseWithHttpInfo(updateCaseRequest, _options).pipe(map((apiResponse: HttpInfo<UpdateCase200Response>) => apiResponse.data));
    }

}

import { CourtAvailabilityAPIApiRequestFactory, CourtAvailabilityAPIApiResponseProcessor} from "../apis/CourtAvailabilityAPIApi";
export class ObservableCourtAvailabilityAPIApi {
    private requestFactory: CourtAvailabilityAPIApiRequestFactory;
    private responseProcessor: CourtAvailabilityAPIApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CourtAvailabilityAPIApiRequestFactory,
        responseProcessor?: CourtAvailabilityAPIApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CourtAvailabilityAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CourtAvailabilityAPIApiResponseProcessor();
    }

    /**
     * Determine whether the specified court is covered by UniCourt.
     * Gets Court Coverage of all courts of specific type.
     * @param courtId The courtId value of the target court.
     */
    public getCourtCoverageWithHttpInfo(courtId: string, _options?: Configuration): Observable<HttpInfo<GetCourtCoverage200Response>> {
        const requestContextPromise = this.requestFactory.getCourtCoverage(courtId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCourtCoverageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Determine whether the specified court is covered by UniCourt.
     * Gets Court Coverage of all courts of specific type.
     * @param courtId The courtId value of the target court.
     */
    public getCourtCoverage(courtId: string, _options?: Configuration): Observable<GetCourtCoverage200Response> {
        return this.getCourtCoverageWithHttpInfo(courtId, _options).pipe(map((apiResponse: HttpInfo<GetCourtCoverage200Response>) => apiResponse.data));
    }

}

import { CourtStandardsAPIApiRequestFactory, CourtStandardsAPIApiResponseProcessor} from "../apis/CourtStandardsAPIApi";
export class ObservableCourtStandardsAPIApi {
    private requestFactory: CourtStandardsAPIApiRequestFactory;
    private responseProcessor: CourtStandardsAPIApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CourtStandardsAPIApiRequestFactory,
        responseProcessor?: CourtStandardsAPIApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CourtStandardsAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CourtStandardsAPIApiResponseProcessor();
    }

    /**
     * Retrieve the appeals courts associated with the specified court. 
     * Appeal Court Objects for given courtId.
     * @param courtId The courtId value of the target court.
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getAppealCourtsForCourtWithHttpInfo(courtId: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<HttpInfo<GetCourts200Response>> {
        const requestContextPromise = this.requestFactory.getAppealCourtsForCourt(courtId, pageNumber, sort, order, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAppealCourtsForCourtWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the appeals courts associated with the specified court. 
     * Appeal Court Objects for given courtId.
     * @param courtId The courtId value of the target court.
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getAppealCourtsForCourt(courtId: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<GetCourts200Response> {
        return this.getAppealCourtsForCourtWithHttpInfo(courtId, pageNumber, sort, order, _options).pipe(map((apiResponse: HttpInfo<GetCourts200Response>) => apiResponse.data));
    }

    /**
     * Retrieve the specified area of law. 
     * AreaOfLaw Object for the given AreaOfLaw Id.
     * @param areaOfLawId The areaOfLawId value of the desired area of law.
     */
    public getAreaOfLawWithHttpInfo(areaOfLawId: string, _options?: Configuration): Observable<HttpInfo<AreaOfLaw1>> {
        const requestContextPromise = this.requestFactory.getAreaOfLaw(areaOfLawId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAreaOfLawWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the specified area of law. 
     * AreaOfLaw Object for the given AreaOfLaw Id.
     * @param areaOfLawId The areaOfLawId value of the desired area of law.
     */
    public getAreaOfLaw(areaOfLawId: string, _options?: Configuration): Observable<AreaOfLaw1> {
        return this.getAreaOfLawWithHttpInfo(areaOfLawId, _options).pipe(map((apiResponse: HttpInfo<AreaOfLaw1>) => apiResponse.data));
    }

    /**
     * The keyword expression targeting the desired area of law.   ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> AreaOfLawQueryObject 
     * AreaOfLaw Object.
     * @param q Retrieve one or more areas of law using a keyword expression. Keyword expressions should be constructed according to the rules given above.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getAreasOfLawWithHttpInfo(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<HttpInfo<GetAreasOfLaw200Response>> {
        const requestContextPromise = this.requestFactory.getAreasOfLaw(q, pageNumber, sort, order, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAreasOfLawWithHttpInfo(rsp)));
            }));
    }

    /**
     * The keyword expression targeting the desired area of law.   ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> AreaOfLawQueryObject 
     * AreaOfLaw Object.
     * @param q Retrieve one or more areas of law using a keyword expression. Keyword expressions should be constructed according to the rules given above.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getAreasOfLaw(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<GetAreasOfLaw200Response> {
        return this.getAreasOfLawWithHttpInfo(q, pageNumber, sort, order, _options).pipe(map((apiResponse: HttpInfo<GetAreasOfLaw200Response>) => apiResponse.data));
    }

    /**
     * Retrieve the specified attorney representation type. 
     * Attorney Representation Type Object for the given attorneyRepresentationTypeId.
     * @param attorneyRepresentationTypeId The attorneyRepresentationTypeId value of the desired attorney representation type.
     */
    public getAttorneyRepresentationTypeWithHttpInfo(attorneyRepresentationTypeId: string, _options?: Configuration): Observable<HttpInfo<AttorneyRepresentationType1>> {
        const requestContextPromise = this.requestFactory.getAttorneyRepresentationType(attorneyRepresentationTypeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAttorneyRepresentationTypeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the specified attorney representation type. 
     * Attorney Representation Type Object for the given attorneyRepresentationTypeId.
     * @param attorneyRepresentationTypeId The attorneyRepresentationTypeId value of the desired attorney representation type.
     */
    public getAttorneyRepresentationType(attorneyRepresentationTypeId: string, _options?: Configuration): Observable<AttorneyRepresentationType1> {
        return this.getAttorneyRepresentationTypeWithHttpInfo(attorneyRepresentationTypeId, _options).pipe(map((apiResponse: HttpInfo<AttorneyRepresentationType1>) => apiResponse.data));
    }

    /**
     * Retrieve an attorney representation type using a keyword expression. Keyword expressions should be constructed according to the rules given above. ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below Schema section. Schema --> AttorneyRepresentationTypeQueryObject 
     * Attorney Representation Type Object.
     * @param q The keyword expression targeting the attorney representation type.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getAttorneyRepresentationTypesWithHttpInfo(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<HttpInfo<GetAttorneyRepresentationTypes200Response>> {
        const requestContextPromise = this.requestFactory.getAttorneyRepresentationTypes(q, pageNumber, sort, order, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAttorneyRepresentationTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve an attorney representation type using a keyword expression. Keyword expressions should be constructed according to the rules given above. ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below Schema section. Schema --> AttorneyRepresentationTypeQueryObject 
     * Attorney Representation Type Object.
     * @param q The keyword expression targeting the attorney representation type.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getAttorneyRepresentationTypes(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<GetAttorneyRepresentationTypes200Response> {
        return this.getAttorneyRepresentationTypesWithHttpInfo(q, pageNumber, sort, order, _options).pipe(map((apiResponse: HttpInfo<GetAttorneyRepresentationTypes200Response>) => apiResponse.data));
    }

    /**
     * Retrieve a specified attorney type object. 
     * Attorney Type Object for given Attorney Type Id.
     * @param attorneyTypeId The attorneyTypeId value of the desired attorney type.
     */
    public getAttorneyTypeWithHttpInfo(attorneyTypeId: string, _options?: Configuration): Observable<HttpInfo<AttorneyType1>> {
        const requestContextPromise = this.requestFactory.getAttorneyType(attorneyTypeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAttorneyTypeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a specified attorney type object. 
     * Attorney Type Object for given Attorney Type Id.
     * @param attorneyTypeId The attorneyTypeId value of the desired attorney type.
     */
    public getAttorneyType(attorneyTypeId: string, _options?: Configuration): Observable<AttorneyType1> {
        return this.getAttorneyTypeWithHttpInfo(attorneyTypeId, _options).pipe(map((apiResponse: HttpInfo<AttorneyType1>) => apiResponse.data));
    }

    /**
     * Retrieve an attorney type using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below Schema section. Schema --> AttorneyTypeQueryObject 
     * Attorney Type Object.
     * @param q The keyword expression targeting the attorney type.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getAttorneyTypesWithHttpInfo(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<HttpInfo<GetAttorneyTypes200Response>> {
        const requestContextPromise = this.requestFactory.getAttorneyTypes(q, pageNumber, sort, order, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAttorneyTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve an attorney type using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below Schema section. Schema --> AttorneyTypeQueryObject 
     * Attorney Type Object.
     * @param q The keyword expression targeting the attorney type.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getAttorneyTypes(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<GetAttorneyTypes200Response> {
        return this.getAttorneyTypesWithHttpInfo(q, pageNumber, sort, order, _options).pipe(map((apiResponse: HttpInfo<GetAttorneyTypes200Response>) => apiResponse.data));
    }

    /**
     * Retrieve the specified case class. 
     * Case Class Object for the given Case Class Id.
     * @param caseClassId The caseClassId value of the desired case class.
     */
    public getCaseClassWithHttpInfo(caseClassId: string, _options?: Configuration): Observable<HttpInfo<CaseClass1>> {
        const requestContextPromise = this.requestFactory.getCaseClass(caseClassId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseClassWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the specified case class. 
     * Case Class Object for the given Case Class Id.
     * @param caseClassId The caseClassId value of the desired case class.
     */
    public getCaseClass(caseClassId: string, _options?: Configuration): Observable<CaseClass1> {
        return this.getCaseClassWithHttpInfo(caseClassId, _options).pipe(map((apiResponse: HttpInfo<CaseClass1>) => apiResponse.data));
    }

    /**
     * Retrieve the specified case relationship type. 
     * Case Relationship Type Object for the given caseRelationshipTypeId.
     * @param caseRelationshipTypeId The caseRelationshipTypeId value of the desired case relationship type.
     */
    public getCaseRelationshipTypeWithHttpInfo(caseRelationshipTypeId: string, _options?: Configuration): Observable<HttpInfo<CaseRelationshipType1>> {
        const requestContextPromise = this.requestFactory.getCaseRelationshipType(caseRelationshipTypeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseRelationshipTypeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the specified case relationship type. 
     * Case Relationship Type Object for the given caseRelationshipTypeId.
     * @param caseRelationshipTypeId The caseRelationshipTypeId value of the desired case relationship type.
     */
    public getCaseRelationshipType(caseRelationshipTypeId: string, _options?: Configuration): Observable<CaseRelationshipType1> {
        return this.getCaseRelationshipTypeWithHttpInfo(caseRelationshipTypeId, _options).pipe(map((apiResponse: HttpInfo<CaseRelationshipType1>) => apiResponse.data));
    }

    /**
     * Retrieve an case relationship type using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CaseRelationshipTypeQueryObject 
     * Case Relationship Type Object.
     * @param q The keyword expression targeting the case relationship type.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getCaseRelationshipTypesWithHttpInfo(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<HttpInfo<GetCaseRelationshipTypes200Response>> {
        const requestContextPromise = this.requestFactory.getCaseRelationshipTypes(q, pageNumber, sort, order, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseRelationshipTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve an case relationship type using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CaseRelationshipTypeQueryObject 
     * Case Relationship Type Object.
     * @param q The keyword expression targeting the case relationship type.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getCaseRelationshipTypes(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<GetCaseRelationshipTypes200Response> {
        return this.getCaseRelationshipTypesWithHttpInfo(q, pageNumber, sort, order, _options).pipe(map((apiResponse: HttpInfo<GetCaseRelationshipTypes200Response>) => apiResponse.data));
    }

    /**
     * Retrieve the specified case status. 
     * Returns the caseStatus information for the given caseStatusId.
     * @param caseStatusId The caseStatusId value of the desired case status.
     */
    public getCaseStatusWithHttpInfo(caseStatusId: string, _options?: Configuration): Observable<HttpInfo<CaseStatus1>> {
        const requestContextPromise = this.requestFactory.getCaseStatus(caseStatusId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the specified case status. 
     * Returns the caseStatus information for the given caseStatusId.
     * @param caseStatusId The caseStatusId value of the desired case status.
     */
    public getCaseStatus(caseStatusId: string, _options?: Configuration): Observable<CaseStatus1> {
        return this.getCaseStatusWithHttpInfo(caseStatusId, _options).pipe(map((apiResponse: HttpInfo<CaseStatus1>) => apiResponse.data));
    }

    /**
     * Retrieve the specified case status group. 
     * Returns the caseStatusGroup information for the given caseStatusGroupId.
     * @param caseStatusGroupId The caseStatusGroupId value of the desired case status group.
     */
    public getCaseStatusGroupWithHttpInfo(caseStatusGroupId: string, _options?: Configuration): Observable<HttpInfo<CaseStatusGroup1>> {
        const requestContextPromise = this.requestFactory.getCaseStatusGroup(caseStatusGroupId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseStatusGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the specified case status group. 
     * Returns the caseStatusGroup information for the given caseStatusGroupId.
     * @param caseStatusGroupId The caseStatusGroupId value of the desired case status group.
     */
    public getCaseStatusGroup(caseStatusGroupId: string, _options?: Configuration): Observable<CaseStatusGroup1> {
        return this.getCaseStatusGroupWithHttpInfo(caseStatusGroupId, _options).pipe(map((apiResponse: HttpInfo<CaseStatusGroup1>) => apiResponse.data));
    }

    /**
     * Retrieve a case status group using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CaseStatusGroupQueryObject 
     * Case Status Group Object.
     * @param q The keyword expression targeting the desired case status group.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getCaseStatusGroupsWithHttpInfo(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<HttpInfo<GetCaseStatusGroups200Response>> {
        const requestContextPromise = this.requestFactory.getCaseStatusGroups(q, pageNumber, sort, order, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseStatusGroupsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a case status group using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CaseStatusGroupQueryObject 
     * Case Status Group Object.
     * @param q The keyword expression targeting the desired case status group.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getCaseStatusGroups(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<GetCaseStatusGroups200Response> {
        return this.getCaseStatusGroupsWithHttpInfo(q, pageNumber, sort, order, _options).pipe(map((apiResponse: HttpInfo<GetCaseStatusGroups200Response>) => apiResponse.data));
    }

    /**
     * Retrieve the specified case type. 
     * CaseType Object for given Case Type Id.
     * @param caseTypeId The caseTypeId value of the desired case type.
     */
    public getCaseTypeWithHttpInfo(caseTypeId: string, _options?: Configuration): Observable<HttpInfo<CaseType1>> {
        const requestContextPromise = this.requestFactory.getCaseType(caseTypeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseTypeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the specified case type. 
     * CaseType Object for given Case Type Id.
     * @param caseTypeId The caseTypeId value of the desired case type.
     */
    public getCaseType(caseTypeId: string, _options?: Configuration): Observable<CaseType1> {
        return this.getCaseTypeWithHttpInfo(caseTypeId, _options).pipe(map((apiResponse: HttpInfo<CaseType1>) => apiResponse.data));
    }

    /**
     * Retrieve the specified case type group. 
     * CaseType Group for the given CaseType Group Id.
     * @param caseTypeGroupId caseTypeGroupId
     */
    public getCaseTypeGroupWithHttpInfo(caseTypeGroupId: string, _options?: Configuration): Observable<HttpInfo<CaseTypeGroup1>> {
        const requestContextPromise = this.requestFactory.getCaseTypeGroup(caseTypeGroupId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseTypeGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the specified case type group. 
     * CaseType Group for the given CaseType Group Id.
     * @param caseTypeGroupId caseTypeGroupId
     */
    public getCaseTypeGroup(caseTypeGroupId: string, _options?: Configuration): Observable<CaseTypeGroup1> {
        return this.getCaseTypeGroupWithHttpInfo(caseTypeGroupId, _options).pipe(map((apiResponse: HttpInfo<CaseTypeGroup1>) => apiResponse.data));
    }

    /**
     * Retrieve one or more case type groups using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CaseTypeGroupQueryObject 
     * CaseTypeGroup Object.
     * @param q Retrieve one or more case type groups using a keyword expression. Keyword expressions should be constructed according to the rules given above.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getCaseTypeGroupsWithHttpInfo(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<HttpInfo<GetCaseTypeGroups200Response>> {
        const requestContextPromise = this.requestFactory.getCaseTypeGroups(q, pageNumber, sort, order, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseTypeGroupsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve one or more case type groups using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CaseTypeGroupQueryObject 
     * CaseTypeGroup Object.
     * @param q Retrieve one or more case type groups using a keyword expression. Keyword expressions should be constructed according to the rules given above.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getCaseTypeGroups(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<GetCaseTypeGroups200Response> {
        return this.getCaseTypeGroupsWithHttpInfo(q, pageNumber, sort, order, _options).pipe(map((apiResponse: HttpInfo<GetCaseTypeGroups200Response>) => apiResponse.data));
    }

    /**
     * Retrieve one or more case types using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CaseTypeQueryObject 
     * Case Type Object.
     * @param q Retrieve one or more case types using a keyword expression. Keyword expressions should be constructed according to the rules given above.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getCaseTypesWithHttpInfo(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<HttpInfo<GetCaseTypes200Response>> {
        const requestContextPromise = this.requestFactory.getCaseTypes(q, pageNumber, sort, order, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaseTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve one or more case types using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CaseTypeQueryObject 
     * Case Type Object.
     * @param q Retrieve one or more case types using a keyword expression. Keyword expressions should be constructed according to the rules given above.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getCaseTypes(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<GetCaseTypes200Response> {
        return this.getCaseTypesWithHttpInfo(q, pageNumber, sort, order, _options).pipe(map((apiResponse: HttpInfo<GetCaseTypes200Response>) => apiResponse.data));
    }

    /**
     * Retrieve one or more case classes using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CaseClassQueryObject 
     * Case Class Object.
     * @param q The keyword expression targeting the desired case class.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getCasesClassWithHttpInfo(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<HttpInfo<GetCasesClass200Response>> {
        const requestContextPromise = this.requestFactory.getCasesClass(q, pageNumber, sort, order, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCasesClassWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve one or more case classes using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CaseClassQueryObject 
     * Case Class Object.
     * @param q The keyword expression targeting the desired case class.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getCasesClass(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<GetCasesClass200Response> {
        return this.getCasesClassWithHttpInfo(q, pageNumber, sort, order, _options).pipe(map((apiResponse: HttpInfo<GetCasesClass200Response>) => apiResponse.data));
    }

    /**
     * Retrieve a case status using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below Schema section. Schema --> CaseStatusQueryObject 
     * Case Status Object.
     * @param q The keyword expression targeting the desired case status.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getCasesStatusWithHttpInfo(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<HttpInfo<GetCasesStatus200Response>> {
        const requestContextPromise = this.requestFactory.getCasesStatus(q, pageNumber, sort, order, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCasesStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a case status using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below Schema section. Schema --> CaseStatusQueryObject 
     * Case Status Object.
     * @param q The keyword expression targeting the desired case status.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getCasesStatus(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<GetCasesStatus200Response> {
        return this.getCasesStatusWithHttpInfo(q, pageNumber, sort, order, _options).pipe(map((apiResponse: HttpInfo<GetCasesStatus200Response>) => apiResponse.data));
    }

    /**
     * Retrieve the specified cause of action. 
     * CauseOfAction Object for the given causeOfActionId.
     * @param causeOfActionId The causeOfActionId value of the desired cause of action.
     */
    public getCauseOfActionWithHttpInfo(causeOfActionId: string, _options?: Configuration): Observable<HttpInfo<CauseOfAction1>> {
        const requestContextPromise = this.requestFactory.getCauseOfAction(causeOfActionId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCauseOfActionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the specified cause of action. 
     * CauseOfAction Object for the given causeOfActionId.
     * @param causeOfActionId The causeOfActionId value of the desired cause of action.
     */
    public getCauseOfAction(causeOfActionId: string, _options?: Configuration): Observable<CauseOfAction1> {
        return this.getCauseOfActionWithHttpInfo(causeOfActionId, _options).pipe(map((apiResponse: HttpInfo<CauseOfAction1>) => apiResponse.data));
    }

    /**
     * Retrieve the specified cause of action additional data. 
     * CauseOfActionAdditionalData Object for the given causeOfActionAdditionalDataId.
     * @param causeOfActionAdditionalDataId The causeOfActionAdditionalDataId value of the desired cause of action additional data.
     */
    public getCauseOfActionAdditionalDataWithHttpInfo(causeOfActionAdditionalDataId: string, _options?: Configuration): Observable<HttpInfo<CauseOfActionAdditionalData1>> {
        const requestContextPromise = this.requestFactory.getCauseOfActionAdditionalData(causeOfActionAdditionalDataId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCauseOfActionAdditionalDataWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the specified cause of action additional data. 
     * CauseOfActionAdditionalData Object for the given causeOfActionAdditionalDataId.
     * @param causeOfActionAdditionalDataId The causeOfActionAdditionalDataId value of the desired cause of action additional data.
     */
    public getCauseOfActionAdditionalData(causeOfActionAdditionalDataId: string, _options?: Configuration): Observable<CauseOfActionAdditionalData1> {
        return this.getCauseOfActionAdditionalDataWithHttpInfo(causeOfActionAdditionalDataId, _options).pipe(map((apiResponse: HttpInfo<CauseOfActionAdditionalData1>) => apiResponse.data));
    }

    /**
     * Retrieve the specified cause of action group. 
     * CauseOfActionGroup Object for the given causeOfActionGroupId.
     * @param causeOfActionGroupId causeOfActionGroupId
     */
    public getCauseOfActionGroupWithHttpInfo(causeOfActionGroupId: string, _options?: Configuration): Observable<HttpInfo<CauseOfActionGroup1>> {
        const requestContextPromise = this.requestFactory.getCauseOfActionGroup(causeOfActionGroupId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCauseOfActionGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the specified cause of action group. 
     * CauseOfActionGroup Object for the given causeOfActionGroupId.
     * @param causeOfActionGroupId causeOfActionGroupId
     */
    public getCauseOfActionGroup(causeOfActionGroupId: string, _options?: Configuration): Observable<CauseOfActionGroup1> {
        return this.getCauseOfActionGroupWithHttpInfo(causeOfActionGroupId, _options).pipe(map((apiResponse: HttpInfo<CauseOfActionGroup1>) => apiResponse.data));
    }

    /**
     * Retrieve a cause of action using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CauseOfActionQueryObject 
     * CauseOfAction Object.
     * @param q The keyword expression targeting the desired cause of action.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getCausesOfActionWithHttpInfo(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<HttpInfo<GetCausesOfAction200Response>> {
        const requestContextPromise = this.requestFactory.getCausesOfAction(q, pageNumber, sort, order, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCausesOfActionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a cause of action using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CauseOfActionQueryObject 
     * CauseOfAction Object.
     * @param q The keyword expression targeting the desired cause of action.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getCausesOfAction(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<GetCausesOfAction200Response> {
        return this.getCausesOfActionWithHttpInfo(q, pageNumber, sort, order, _options).pipe(map((apiResponse: HttpInfo<GetCausesOfAction200Response>) => apiResponse.data));
    }

    /**
     * Retrieve a cause of action additional data using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CauseOfActionAdditionalDataQueryObject 
     * CauseOfActionAdditionaData Object.
     * @param q The keyword expression targeting the desired cause of action additional data.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getCausesOfActionAdditionalDataWithHttpInfo(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<HttpInfo<GetCausesOfActionAdditionalData200Response>> {
        const requestContextPromise = this.requestFactory.getCausesOfActionAdditionalData(q, pageNumber, sort, order, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCausesOfActionAdditionalDataWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a cause of action additional data using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CauseOfActionAdditionalDataQueryObject 
     * CauseOfActionAdditionaData Object.
     * @param q The keyword expression targeting the desired cause of action additional data.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getCausesOfActionAdditionalData(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<GetCausesOfActionAdditionalData200Response> {
        return this.getCausesOfActionAdditionalDataWithHttpInfo(q, pageNumber, sort, order, _options).pipe(map((apiResponse: HttpInfo<GetCausesOfActionAdditionalData200Response>) => apiResponse.data));
    }

    /**
     * Retrieve a cause of action group using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CauseOfActionGroupQueryObject 
     * CauseOfActionGroup Object.
     * @param q The keyword expression targeting the desired cause of action group.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getCausesOfActionGroupWithHttpInfo(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<HttpInfo<GetCausesOfActionGroup200Response>> {
        const requestContextPromise = this.requestFactory.getCausesOfActionGroup(q, pageNumber, sort, order, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCausesOfActionGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a cause of action group using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CauseOfActionGroupQueryObject 
     * CauseOfActionGroup Object.
     * @param q The keyword expression targeting the desired cause of action group.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getCausesOfActionGroup(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<GetCausesOfActionGroup200Response> {
        return this.getCausesOfActionGroupWithHttpInfo(q, pageNumber, sort, order, _options).pipe(map((apiResponse: HttpInfo<GetCausesOfActionGroup200Response>) => apiResponse.data));
    }

    /**
     * Retrieve the specified charge. 
     * Charge Object for the given chargeId.
     * @param chargeId The chargeId value of the desired charge.
     */
    public getChargeWithHttpInfo(chargeId: string, _options?: Configuration): Observable<HttpInfo<Charge1>> {
        const requestContextPromise = this.requestFactory.getCharge(chargeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getChargeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the specified charge. 
     * Charge Object for the given chargeId.
     * @param chargeId The chargeId value of the desired charge.
     */
    public getCharge(chargeId: string, _options?: Configuration): Observable<Charge1> {
        return this.getChargeWithHttpInfo(chargeId, _options).pipe(map((apiResponse: HttpInfo<Charge1>) => apiResponse.data));
    }

    /**
     * Retrieve the specified charge additional data. 
     * Charge Additional Data Object for the given chargeAdditionalDataId.
     * @param chargeAdditionalDataId The chargeAdditionalDataId value of the desired charge additional data.
     */
    public getChargeAdditionalDataWithHttpInfo(chargeAdditionalDataId: string, _options?: Configuration): Observable<HttpInfo<ChargeAdditionalData1>> {
        const requestContextPromise = this.requestFactory.getChargeAdditionalData(chargeAdditionalDataId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getChargeAdditionalDataWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the specified charge additional data. 
     * Charge Additional Data Object for the given chargeAdditionalDataId.
     * @param chargeAdditionalDataId The chargeAdditionalDataId value of the desired charge additional data.
     */
    public getChargeAdditionalData(chargeAdditionalDataId: string, _options?: Configuration): Observable<ChargeAdditionalData1> {
        return this.getChargeAdditionalDataWithHttpInfo(chargeAdditionalDataId, _options).pipe(map((apiResponse: HttpInfo<ChargeAdditionalData1>) => apiResponse.data));
    }

    /**
     * Retrieve the specified charge degree. 
     * ChargeDegree Object for the given chargeDegreeId.
     * @param chargeDegreeId The chargeDegreeId value of the desired charge degree.
     */
    public getChargeDegreeWithHttpInfo(chargeDegreeId: string, _options?: Configuration): Observable<HttpInfo<ChargeDegree1>> {
        const requestContextPromise = this.requestFactory.getChargeDegree(chargeDegreeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getChargeDegreeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the specified charge degree. 
     * ChargeDegree Object for the given chargeDegreeId.
     * @param chargeDegreeId The chargeDegreeId value of the desired charge degree.
     */
    public getChargeDegree(chargeDegreeId: string, _options?: Configuration): Observable<ChargeDegree1> {
        return this.getChargeDegreeWithHttpInfo(chargeDegreeId, _options).pipe(map((apiResponse: HttpInfo<ChargeDegree1>) => apiResponse.data));
    }

    /**
     * Retrieve the specified charge group. 
     * Charge Group Object for the given chargeGroupId.
     * @param chargeGroupId The chargeGroupId value of the desired charge group.
     */
    public getChargeGroupWithHttpInfo(chargeGroupId: string, _options?: Configuration): Observable<HttpInfo<ChargeGroup1>> {
        const requestContextPromise = this.requestFactory.getChargeGroup(chargeGroupId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getChargeGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the specified charge group. 
     * Charge Group Object for the given chargeGroupId.
     * @param chargeGroupId The chargeGroupId value of the desired charge group.
     */
    public getChargeGroup(chargeGroupId: string, _options?: Configuration): Observable<ChargeGroup1> {
        return this.getChargeGroupWithHttpInfo(chargeGroupId, _options).pipe(map((apiResponse: HttpInfo<ChargeGroup1>) => apiResponse.data));
    }

    /**
     * Retrieve one or more charge groups using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> ChargeGroupQueryObject 
     * Charge Group Object.
     * @param q The keyword expression targeting the desired charge group.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getChargeGroupsWithHttpInfo(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<HttpInfo<GetChargeGroups200Response>> {
        const requestContextPromise = this.requestFactory.getChargeGroups(q, pageNumber, sort, order, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getChargeGroupsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve one or more charge groups using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> ChargeGroupQueryObject 
     * Charge Group Object.
     * @param q The keyword expression targeting the desired charge group.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getChargeGroups(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<GetChargeGroups200Response> {
        return this.getChargeGroupsWithHttpInfo(q, pageNumber, sort, order, _options).pipe(map((apiResponse: HttpInfo<GetChargeGroups200Response>) => apiResponse.data));
    }

    /**
     * Retrieve the specified charge severity. 
     * ChargeSeverity Object for the given chargeSeverityId.
     * @param chargeSeverityId The chargeSeverityId value of the desired charge severity.
     */
    public getChargeSeverityWithHttpInfo(chargeSeverityId: string, _options?: Configuration): Observable<HttpInfo<ChargeSeverity1>> {
        const requestContextPromise = this.requestFactory.getChargeSeverity(chargeSeverityId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getChargeSeverityWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the specified charge severity. 
     * ChargeSeverity Object for the given chargeSeverityId.
     * @param chargeSeverityId The chargeSeverityId value of the desired charge severity.
     */
    public getChargeSeverity(chargeSeverityId: string, _options?: Configuration): Observable<ChargeSeverity1> {
        return this.getChargeSeverityWithHttpInfo(chargeSeverityId, _options).pipe(map((apiResponse: HttpInfo<ChargeSeverity1>) => apiResponse.data));
    }

    /**
     * Retrieve one or more charges using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> ChargeQueryObject 
     * Charge Object.
     * @param q The keyword expression targeting the desired charge.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getChargesWithHttpInfo(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<HttpInfo<GetCharges200Response>> {
        const requestContextPromise = this.requestFactory.getCharges(q, pageNumber, sort, order, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getChargesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve one or more charges using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> ChargeQueryObject 
     * Charge Object.
     * @param q The keyword expression targeting the desired charge.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getCharges(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<GetCharges200Response> {
        return this.getChargesWithHttpInfo(q, pageNumber, sort, order, _options).pipe(map((apiResponse: HttpInfo<GetCharges200Response>) => apiResponse.data));
    }

    /**
     * Retrieve additional information on a charge using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> ChargeAdditionalDataQueryObject 
     * Charge Additional Data Object.
     * @param q The keyword expression targeting the desired charge additional data.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getChargesAdditionalDataWithHttpInfo(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<HttpInfo<GetChargesAdditionalData200Response>> {
        const requestContextPromise = this.requestFactory.getChargesAdditionalData(q, pageNumber, sort, order, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getChargesAdditionalDataWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve additional information on a charge using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> ChargeAdditionalDataQueryObject 
     * Charge Additional Data Object.
     * @param q The keyword expression targeting the desired charge additional data.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getChargesAdditionalData(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<GetChargesAdditionalData200Response> {
        return this.getChargesAdditionalDataWithHttpInfo(q, pageNumber, sort, order, _options).pipe(map((apiResponse: HttpInfo<GetChargesAdditionalData200Response>) => apiResponse.data));
    }

    /**
     * Retrieve a charge degree using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> ChargeDegreeQueryObject 
     * ChargeDegree Object.
     * @param q The keyword expression targeting the desired charge degree.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getChargesDegreeWithHttpInfo(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<HttpInfo<GetChargesDegree200Response>> {
        const requestContextPromise = this.requestFactory.getChargesDegree(q, pageNumber, sort, order, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getChargesDegreeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a charge degree using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> ChargeDegreeQueryObject 
     * ChargeDegree Object.
     * @param q The keyword expression targeting the desired charge degree.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getChargesDegree(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<GetChargesDegree200Response> {
        return this.getChargesDegreeWithHttpInfo(q, pageNumber, sort, order, _options).pipe(map((apiResponse: HttpInfo<GetChargesDegree200Response>) => apiResponse.data));
    }

    /**
     * Retrieve a charge severity using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> ChargeSeverityQueryObject 
     * ChargeSeverity Object.
     * @param q The keyword expression targeting the desired charge severity.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getChargesSeverityWithHttpInfo(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<HttpInfo<GetChargesSeverity200Response>> {
        const requestContextPromise = this.requestFactory.getChargesSeverity(q, pageNumber, sort, order, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getChargesSeverityWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a charge severity using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> ChargeSeverityQueryObject 
     * ChargeSeverity Object.
     * @param q The keyword expression targeting the desired charge severity.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getChargesSeverity(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<GetChargesSeverity200Response> {
        return this.getChargesSeverityWithHttpInfo(q, pageNumber, sort, order, _options).pipe(map((apiResponse: HttpInfo<GetChargesSeverity200Response>) => apiResponse.data));
    }

    /**
     * Retrieve information about a specified court. 
     * Court Object for given courtId.
     * @param courtId The courtId value of the target court.
     */
    public getCourtWithHttpInfo(courtId: string, _options?: Configuration): Observable<HttpInfo<Court1>> {
        const requestContextPromise = this.requestFactory.getCourt(courtId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCourtWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve information about a specified court. 
     * Court Object for given courtId.
     * @param courtId The courtId value of the target court.
     */
    public getCourt(courtId: string, _options?: Configuration): Observable<Court1> {
        return this.getCourtWithHttpInfo(courtId, _options).pipe(map((apiResponse: HttpInfo<Court1>) => apiResponse.data));
    }

    /**
     * Contains the Court Location Object. 
     * Courthouse Object for given Court Location Id.
     * @param courtLocationId courtLocationId
     */
    public getCourtLocationWithHttpInfo(courtLocationId: string, _options?: Configuration): Observable<HttpInfo<CourtLocation1>> {
        const requestContextPromise = this.requestFactory.getCourtLocation(courtLocationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCourtLocationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Contains the Court Location Object. 
     * Courthouse Object for given Court Location Id.
     * @param courtLocationId courtLocationId
     */
    public getCourtLocation(courtLocationId: string, _options?: Configuration): Observable<CourtLocation1> {
        return this.getCourtLocationWithHttpInfo(courtLocationId, _options).pipe(map((apiResponse: HttpInfo<CourtLocation1>) => apiResponse.data));
    }

    /**
     * Retrieve the specified court location or court locations.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CourtLocationQueryObject 
     * Courthouse Object.
     * @param q The keyword expression that sets forth the criteria concerning the court location or court locations to target. Keyword expressions should be constructed according to the rules shown above.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getCourtLocationsWithHttpInfo(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<HttpInfo<CourtLocationResponse1>> {
        const requestContextPromise = this.requestFactory.getCourtLocations(q, pageNumber, sort, order, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCourtLocationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the specified court location or court locations.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CourtLocationQueryObject 
     * Courthouse Object.
     * @param q The keyword expression that sets forth the criteria concerning the court location or court locations to target. Keyword expressions should be constructed according to the rules shown above.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getCourtLocations(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<CourtLocationResponse1> {
        return this.getCourtLocationsWithHttpInfo(q, pageNumber, sort, order, _options).pipe(map((apiResponse: HttpInfo<CourtLocationResponse1>) => apiResponse.data));
    }

    /**
     * Retrieve the court locations associated with the specified court. 
     * Associated Court Location for given courtId.
     * @param courtId The courtId value of the target court.
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getCourtLocationsForCourtWithHttpInfo(courtId: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<HttpInfo<CourtLocationResponse1>> {
        const requestContextPromise = this.requestFactory.getCourtLocationsForCourt(courtId, pageNumber, sort, order, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCourtLocationsForCourtWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the court locations associated with the specified court. 
     * Associated Court Location for given courtId.
     * @param courtId The courtId value of the target court.
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getCourtLocationsForCourt(courtId: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<CourtLocationResponse1> {
        return this.getCourtLocationsForCourtWithHttpInfo(courtId, pageNumber, sort, order, _options).pipe(map((apiResponse: HttpInfo<CourtLocationResponse1>) => apiResponse.data));
    }

    /**
     * Retrieve the court status of the specified court. 
     * Court Service Status Object for the given courtServiceStatusId.
     * @param courtServiceStatusId The courtServiceStatusId value of the desired court.
     */
    public getCourtServiceStatusWithHttpInfo(courtServiceStatusId: string, _options?: Configuration): Observable<HttpInfo<GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner>> {
        const requestContextPromise = this.requestFactory.getCourtServiceStatus(courtServiceStatusId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCourtServiceStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the court status of the specified court. 
     * Court Service Status Object for the given courtServiceStatusId.
     * @param courtServiceStatusId The courtServiceStatusId value of the desired court.
     */
    public getCourtServiceStatus(courtServiceStatusId: string, _options?: Configuration): Observable<GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner> {
        return this.getCourtServiceStatusWithHttpInfo(courtServiceStatusId, _options).pipe(map((apiResponse: HttpInfo<GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner>) => apiResponse.data));
    }

    /**
     * Retrieve the specified court system. 
     * Court System Object for given courtSystemId.
     * @param courtSystemId The courtSystemId value of the court system to be retrieved.
     */
    public getCourtSystemWithHttpInfo(courtSystemId: string, _options?: Configuration): Observable<HttpInfo<CourtSystem1>> {
        const requestContextPromise = this.requestFactory.getCourtSystem(courtSystemId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCourtSystemWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the specified court system. 
     * Court System Object for given courtSystemId.
     * @param courtSystemId The courtSystemId value of the court system to be retrieved.
     */
    public getCourtSystem(courtSystemId: string, _options?: Configuration): Observable<CourtSystem1> {
        return this.getCourtSystemWithHttpInfo(courtSystemId, _options).pipe(map((apiResponse: HttpInfo<CourtSystem1>) => apiResponse.data));
    }

    /**
     * Retrieve information about the specified court system or court systems.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------|         | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CourtSystemQueryObject 
     * Court System Objects.
     * @param q The keyword expression that sets forth the criteria concerning the court system or court systems. Keyword expressions should be constructed according to the rules shown above.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getCourtSystemsWithHttpInfo(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<HttpInfo<GetCourtSystems200Response>> {
        const requestContextPromise = this.requestFactory.getCourtSystems(q, pageNumber, sort, order, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCourtSystemsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve information about the specified court system or court systems.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------|         | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CourtSystemQueryObject 
     * Court System Objects.
     * @param q The keyword expression that sets forth the criteria concerning the court system or court systems. Keyword expressions should be constructed according to the rules shown above.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getCourtSystems(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<GetCourtSystems200Response> {
        return this.getCourtSystemsWithHttpInfo(q, pageNumber, sort, order, _options).pipe(map((apiResponse: HttpInfo<GetCourtSystems200Response>) => apiResponse.data));
    }

    /**
     * Retrieve the information concerning the specific court type. 
     * Court Type Object for given courtTypeId.
     * @param courtTypeId The courtTypeId value of the court type to be retrieved.
     */
    public getCourtTypeWithHttpInfo(courtTypeId: string, _options?: Configuration): Observable<HttpInfo<CourtType1>> {
        const requestContextPromise = this.requestFactory.getCourtType(courtTypeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCourtTypeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the information concerning the specific court type. 
     * Court Type Object for given courtTypeId.
     * @param courtTypeId The courtTypeId value of the court type to be retrieved.
     */
    public getCourtType(courtTypeId: string, _options?: Configuration): Observable<CourtType1> {
        return this.getCourtTypeWithHttpInfo(courtTypeId, _options).pipe(map((apiResponse: HttpInfo<CourtType1>) => apiResponse.data));
    }

    /**
     * Retrieve court types recognized by UniCourt.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------|         | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CourtTypeQueryObject 
     * Court Type Objects.
     * @param q The keyword expression that sets forth the criteria concerning the court type or court types. Keyword expressions should be constructed according to the rules shown above.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getCourtTypesWithHttpInfo(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<HttpInfo<GetCourtTypes200Response>> {
        const requestContextPromise = this.requestFactory.getCourtTypes(q, pageNumber, sort, order, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCourtTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve court types recognized by UniCourt.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------|         | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CourtTypeQueryObject 
     * Court Type Objects.
     * @param q The keyword expression that sets forth the criteria concerning the court type or court types. Keyword expressions should be constructed according to the rules shown above.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getCourtTypes(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<GetCourtTypes200Response> {
        return this.getCourtTypesWithHttpInfo(q, pageNumber, sort, order, _options).pipe(map((apiResponse: HttpInfo<GetCourtTypes200Response>) => apiResponse.data));
    }

    /**
     * Retrieve information about a specified court or courts.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------|         | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CourtQueryObject 
     * Court Objects.
     * @param q The keyword expression that sets forth the criteria concerning the court or courts to be retrieved. Keyword expressions should be constructed according to the rules shown above.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getCourtsWithHttpInfo(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<HttpInfo<GetCourts200Response>> {
        const requestContextPromise = this.requestFactory.getCourts(q, pageNumber, sort, order, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCourtsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve information about a specified court or courts.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------|         | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CourtQueryObject 
     * Court Objects.
     * @param q The keyword expression that sets forth the criteria concerning the court or courts to be retrieved. Keyword expressions should be constructed according to the rules shown above.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getCourts(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<GetCourts200Response> {
        return this.getCourtsWithHttpInfo(q, pageNumber, sort, order, _options).pipe(map((apiResponse: HttpInfo<GetCourts200Response>) => apiResponse.data));
    }

    /**
     * Retrieve the courts associated with the specified court location. 
     * Associated Court for given Court Location.
     * @param courtLocationId The courtLocationId value of the court location for which courts are to be retrieved.
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getCourtsForCourtLocationWithHttpInfo(courtLocationId: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<HttpInfo<GetCourts200Response>> {
        const requestContextPromise = this.requestFactory.getCourtsForCourtLocation(courtLocationId, pageNumber, sort, order, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCourtsForCourtLocationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the courts associated with the specified court location. 
     * Associated Court for given Court Location.
     * @param courtLocationId The courtLocationId value of the court location for which courts are to be retrieved.
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getCourtsForCourtLocation(courtLocationId: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<GetCourts200Response> {
        return this.getCourtsForCourtLocationWithHttpInfo(courtLocationId, pageNumber, sort, order, _options).pipe(map((apiResponse: HttpInfo<GetCourts200Response>) => apiResponse.data));
    }

    /**
     * Returns Associated Court for given Jurisdiction Geo. 
     * Associated Court for given Jurisdiction Geo.
     * @param jurisdictionGeoId jurisdictionGeoId
     * @param pageNumber Page number. - minimum: 1 - maximum: 100 
     * @param sort Sort field.
     * @param order Sort order.
     */
    public getCourtsForJurisdictionGeoWithHttpInfo(jurisdictionGeoId: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<HttpInfo<GetCourts200Response>> {
        const requestContextPromise = this.requestFactory.getCourtsForJurisdictionGeo(jurisdictionGeoId, pageNumber, sort, order, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCourtsForJurisdictionGeoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns Associated Court for given Jurisdiction Geo. 
     * Associated Court for given Jurisdiction Geo.
     * @param jurisdictionGeoId jurisdictionGeoId
     * @param pageNumber Page number. - minimum: 1 - maximum: 100 
     * @param sort Sort field.
     * @param order Sort order.
     */
    public getCourtsForJurisdictionGeo(jurisdictionGeoId: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<GetCourts200Response> {
        return this.getCourtsForJurisdictionGeoWithHttpInfo(jurisdictionGeoId, pageNumber, sort, order, _options).pipe(map((apiResponse: HttpInfo<GetCourts200Response>) => apiResponse.data));
    }

    /**
     * Retrieve the status of one or more courts using a keyword expression.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CourtServiceStatusQueryObject 
     * Court Service Status Object.
     * @param q The keyword expression targeting the desired court. Keyword expressions should be constructed according to the rules given above.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getCourtsServiceStatusWithHttpInfo(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<HttpInfo<GetCourtsServiceStatus200Response>> {
        const requestContextPromise = this.requestFactory.getCourtsServiceStatus(q, pageNumber, sort, order, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCourtsServiceStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the status of one or more courts using a keyword expression.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CourtServiceStatusQueryObject 
     * Court Service Status Object.
     * @param q The keyword expression targeting the desired court. Keyword expressions should be constructed according to the rules given above.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getCourtsServiceStatus(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<GetCourtsServiceStatus200Response> {
        return this.getCourtsServiceStatusWithHttpInfo(q, pageNumber, sort, order, _options).pipe(map((apiResponse: HttpInfo<GetCourtsServiceStatus200Response>) => apiResponse.data));
    }

    /**
     * Retrieve the specified judge type. 
     * Judge Type Object for the given judgeTypeId.
     * @param judgeTypeId The judgeTypeId of the desired judge type.
     */
    public getJudgeTypeWithHttpInfo(judgeTypeId: string, _options?: Configuration): Observable<HttpInfo<JudgeType1>> {
        const requestContextPromise = this.requestFactory.getJudgeType(judgeTypeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getJudgeTypeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the specified judge type. 
     * Judge Type Object for the given judgeTypeId.
     * @param judgeTypeId The judgeTypeId of the desired judge type.
     */
    public getJudgeType(judgeTypeId: string, _options?: Configuration): Observable<JudgeType1> {
        return this.getJudgeTypeWithHttpInfo(judgeTypeId, _options).pipe(map((apiResponse: HttpInfo<JudgeType1>) => apiResponse.data));
    }

    /**
     * Retrieve a judge type using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> JudgeTypeQueryObject 
     * Judge Type Object.
     * @param q The keyword expression targeting the judge type.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getJudgeTypesWithHttpInfo(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<HttpInfo<GetJudgeTypes200Response>> {
        const requestContextPromise = this.requestFactory.getJudgeTypes(q, pageNumber, sort, order, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getJudgeTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a judge type using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> JudgeTypeQueryObject 
     * Judge Type Object.
     * @param q The keyword expression targeting the judge type.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getJudgeTypes(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<GetJudgeTypes200Response> {
        return this.getJudgeTypesWithHttpInfo(q, pageNumber, sort, order, _options).pipe(map((apiResponse: HttpInfo<GetJudgeTypes200Response>) => apiResponse.data));
    }

    /**
     * Retrieve the specified jurisdiction geography. 
     * Jurisdiction Geo Object for given Jurisdiction Geo Id.
     * @param jurisdictionGeoId The jurisdictionGeoId value of the desired jurisdiction geography.
     */
    public getJurisdictionGeoWithHttpInfo(jurisdictionGeoId: string, _options?: Configuration): Observable<HttpInfo<JurisdictionGeo1>> {
        const requestContextPromise = this.requestFactory.getJurisdictionGeo(jurisdictionGeoId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getJurisdictionGeoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the specified jurisdiction geography. 
     * Jurisdiction Geo Object for given Jurisdiction Geo Id.
     * @param jurisdictionGeoId The jurisdictionGeoId value of the desired jurisdiction geography.
     */
    public getJurisdictionGeo(jurisdictionGeoId: string, _options?: Configuration): Observable<JurisdictionGeo1> {
        return this.getJurisdictionGeoWithHttpInfo(jurisdictionGeoId, _options).pipe(map((apiResponse: HttpInfo<JurisdictionGeo1>) => apiResponse.data));
    }

    /**
     * Retrieve the jurisdiction geography object for the specified court. 
     * Jurisdiction Geo Objects for given courtId.
     * @param courtId The courtId value of the target court.
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getJurisdictionGeoForCourtWithHttpInfo(courtId: string, pageNumber?: number, sort?: 'state', order?: 'asc' | 'desc', _options?: Configuration): Observable<HttpInfo<JurisdictionGeoResponse1>> {
        const requestContextPromise = this.requestFactory.getJurisdictionGeoForCourt(courtId, pageNumber, sort, order, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getJurisdictionGeoForCourtWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the jurisdiction geography object for the specified court. 
     * Jurisdiction Geo Objects for given courtId.
     * @param courtId The courtId value of the target court.
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getJurisdictionGeoForCourt(courtId: string, pageNumber?: number, sort?: 'state', order?: 'asc' | 'desc', _options?: Configuration): Observable<JurisdictionGeoResponse1> {
        return this.getJurisdictionGeoForCourtWithHttpInfo(courtId, pageNumber, sort, order, _options).pipe(map((apiResponse: HttpInfo<JurisdictionGeoResponse1>) => apiResponse.data));
    }

    /**
     * Retrieve one or more jurisdiction geographies using a keyword expression.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> JurisdictionGeoQueryObject 
     * Jurisdiction Geo Object.
     * @param q The keyword expression targeting the desired jurisdiction geography. Keyword expressions should be constructed according to the rules given above.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getJurisdictionsGeoWithHttpInfo(q?: string, pageNumber?: number, sort?: 'state', order?: 'asc' | 'desc', _options?: Configuration): Observable<HttpInfo<JurisdictionGeoResponse1>> {
        const requestContextPromise = this.requestFactory.getJurisdictionsGeo(q, pageNumber, sort, order, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getJurisdictionsGeoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve one or more jurisdiction geographies using a keyword expression.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> JurisdictionGeoQueryObject 
     * Jurisdiction Geo Object.
     * @param q The keyword expression targeting the desired jurisdiction geography. Keyword expressions should be constructed according to the rules given above.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getJurisdictionsGeo(q?: string, pageNumber?: number, sort?: 'state', order?: 'asc' | 'desc', _options?: Configuration): Observable<JurisdictionGeoResponse1> {
        return this.getJurisdictionsGeoWithHttpInfo(q, pageNumber, sort, order, _options).pipe(map((apiResponse: HttpInfo<JurisdictionGeoResponse1>) => apiResponse.data));
    }

    /**
     * Retrieve the specified party role. 
     * Party Role Object.
     * @param partyRoleId The partyRoleId value of the desired party role.
     */
    public getPartyRoleWithHttpInfo(partyRoleId: string, _options?: Configuration): Observable<HttpInfo<PartyRole1>> {
        const requestContextPromise = this.requestFactory.getPartyRole(partyRoleId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPartyRoleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the specified party role. 
     * Party Role Object.
     * @param partyRoleId The partyRoleId value of the desired party role.
     */
    public getPartyRole(partyRoleId: string, _options?: Configuration): Observable<PartyRole1> {
        return this.getPartyRoleWithHttpInfo(partyRoleId, _options).pipe(map((apiResponse: HttpInfo<PartyRole1>) => apiResponse.data));
    }

    /**
     * Retrieve the specified party role group. 
     * Party Role Group Object.
     * @param partyRoleGroupId The partyRoleGroupId value of the desired party role group.
     */
    public getPartyRoleGroupWithHttpInfo(partyRoleGroupId: string, _options?: Configuration): Observable<HttpInfo<PartyRoleGroup1>> {
        const requestContextPromise = this.requestFactory.getPartyRoleGroup(partyRoleGroupId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPartyRoleGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the specified party role group. 
     * Party Role Group Object.
     * @param partyRoleGroupId The partyRoleGroupId value of the desired party role group.
     */
    public getPartyRoleGroup(partyRoleGroupId: string, _options?: Configuration): Observable<PartyRoleGroup1> {
        return this.getPartyRoleGroupWithHttpInfo(partyRoleGroupId, _options).pipe(map((apiResponse: HttpInfo<PartyRoleGroup1>) => apiResponse.data));
    }

    /**
     * Retrieve a party role group using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> PartyRoleGroupQueryObject 
     * Party Role Group Object.
     * @param q The keyword expression targeting the desired party role group.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getPartyRoleGroupsWithHttpInfo(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<HttpInfo<GetPartyRoleGroups200Response>> {
        const requestContextPromise = this.requestFactory.getPartyRoleGroups(q, pageNumber, sort, order, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPartyRoleGroupsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a party role group using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> PartyRoleGroupQueryObject 
     * Party Role Group Object.
     * @param q The keyword expression targeting the desired party role group.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getPartyRoleGroups(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<GetPartyRoleGroups200Response> {
        return this.getPartyRoleGroupsWithHttpInfo(q, pageNumber, sort, order, _options).pipe(map((apiResponse: HttpInfo<GetPartyRoleGroups200Response>) => apiResponse.data));
    }

    /**
     * Retrieve a party role using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> PartyRoleQueryObject 
     * Party Role Object.
     * @param q The keyword expression targeting the desired party role.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getPartyRolesWithHttpInfo(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<HttpInfo<GetPartyRoles200Response>> {
        const requestContextPromise = this.requestFactory.getPartyRoles(q, pageNumber, sort, order, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPartyRolesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a party role using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> PartyRoleQueryObject 
     * Party Role Object.
     * @param q The keyword expression targeting the desired party role.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public getPartyRoles(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Observable<GetPartyRoles200Response> {
        return this.getPartyRolesWithHttpInfo(q, pageNumber, sort, order, _options).pipe(map((apiResponse: HttpInfo<GetPartyRoles200Response>) => apiResponse.data));
    }

}

import { JudgeAnalyticsAPIApiRequestFactory, JudgeAnalyticsAPIApiResponseProcessor} from "../apis/JudgeAnalyticsAPIApi";
export class ObservableJudgeAnalyticsAPIApi {
    private requestFactory: JudgeAnalyticsAPIApiRequestFactory;
    private responseProcessor: JudgeAnalyticsAPIApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: JudgeAnalyticsAPIApiRequestFactory,
        responseProcessor?: JudgeAnalyticsAPIApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new JudgeAnalyticsAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new JudgeAnalyticsAPIApiResponseProcessor();
    }

    /**
     * Search for attorneys who have appeared before the specified judge using a keyword expression. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtLocationId IN (\"COLODj4BBVTho3pKpz\",\"COLOPUfJRhw5yPxgRi\")**| | **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple Ids Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all attorneys associated with judge with norm id NJUDT7jCZyFNeLGpRq of all cases with case type id CTYPGkaW3aGJyKGyfn and case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Attorneys Associated with the Judge.
     * @param normJudgeId The normJudgeId value of the desired judge.   - minimum: 18   - maximum: 18 
     * @param q The keyword expression targeting the desired attorneys.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getNormAttorneysAssociatedWithNormJudgeWithHttpInfo(normJudgeId: string, q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<AssociatedNormAttorneyResponse1>> {
        const requestContextPromise = this.requestFactory.getNormAttorneysAssociatedWithNormJudge(normJudgeId, q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNormAttorneysAssociatedWithNormJudgeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search for attorneys who have appeared before the specified judge using a keyword expression. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtLocationId IN (\"COLODj4BBVTho3pKpz\",\"COLOPUfJRhw5yPxgRi\")**| | **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple Ids Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all attorneys associated with judge with norm id NJUDT7jCZyFNeLGpRq of all cases with case type id CTYPGkaW3aGJyKGyfn and case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Attorneys Associated with the Judge.
     * @param normJudgeId The normJudgeId value of the desired judge.   - minimum: 18   - maximum: 18 
     * @param q The keyword expression targeting the desired attorneys.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getNormAttorneysAssociatedWithNormJudge(normJudgeId: string, q?: string, pageNumber?: number, _options?: Configuration): Observable<AssociatedNormAttorneyResponse1> {
        return this.getNormAttorneysAssociatedWithNormJudgeWithHttpInfo(normJudgeId, q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<AssociatedNormAttorneyResponse1>) => apiResponse.data));
    }

    /**
     * Retrieve the specified judge. 
     * Norm Judge Details.
     * @param normJudgeId The normJudgeId value of the desired judge.   - minimum: 18   - maximum: 18 
     */
    public getNormJudgeByIdWithHttpInfo(normJudgeId: string, _options?: Configuration): Observable<HttpInfo<NormJudge1>> {
        const requestContextPromise = this.requestFactory.getNormJudgeById(normJudgeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNormJudgeByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the specified judge. 
     * Norm Judge Details.
     * @param normJudgeId The normJudgeId value of the desired judge.   - minimum: 18   - maximum: 18 
     */
    public getNormJudgeById(normJudgeId: string, _options?: Configuration): Observable<NormJudge1> {
        return this.getNormJudgeByIdWithHttpInfo(normJudgeId, _options).pipe(map((apiResponse: HttpInfo<NormJudge1>) => apiResponse.data));
    }

    /**
     * Search for law firms that have appeared before the specified judge using a keyword expression. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLOPUfJRhw5yPxgRi\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtLocationId IN (\"COLODj4BBVTho3pKpz\",\"COLOPUfJRhw5yPxgRi\")**| | **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo**  | Multiple Ids Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all Law Firms associated with judge with norm id NJUDT7jCZyFNeLGpRq of all cases with case type id CTYPGkaW3aGJyKGyfn and case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Law Firms Associated With the Judge.
     * @param normJudgeId The normJudgeId value of the desired judge.   - minimum: 18   - maximum: 18 
     * @param q The keyword expression targeting the desired law firms.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getNormLawFirmsAssociatedWithNormJudgeWithHttpInfo(normJudgeId: string, q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<AssociatedNormLawFirmResponse1>> {
        const requestContextPromise = this.requestFactory.getNormLawFirmsAssociatedWithNormJudge(normJudgeId, q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNormLawFirmsAssociatedWithNormJudgeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search for law firms that have appeared before the specified judge using a keyword expression. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLOPUfJRhw5yPxgRi\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtLocationId IN (\"COLODj4BBVTho3pKpz\",\"COLOPUfJRhw5yPxgRi\")**| | **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo**  | Multiple Ids Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all Law Firms associated with judge with norm id NJUDT7jCZyFNeLGpRq of all cases with case type id CTYPGkaW3aGJyKGyfn and case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Law Firms Associated With the Judge.
     * @param normJudgeId The normJudgeId value of the desired judge.   - minimum: 18   - maximum: 18 
     * @param q The keyword expression targeting the desired law firms.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getNormLawFirmsAssociatedWithNormJudge(normJudgeId: string, q?: string, pageNumber?: number, _options?: Configuration): Observable<AssociatedNormLawFirmResponse1> {
        return this.getNormLawFirmsAssociatedWithNormJudgeWithHttpInfo(normJudgeId, q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<AssociatedNormLawFirmResponse1>) => apiResponse.data));
    }

    /**
     * Search for parties that have appeared before the specified judge using a keyword expression. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtLocationId IN (\"COLODj4BBVTho3pKpz\",\"COLOPUfJRhw5yPxgRi\")**| | **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple Ids Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all Parties associated with judge with norm id NJUDT7jCZyFNeLGpRq of all cases with case type id CTYPGkaW3aGJyKGyfn and case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Parties Associated with the Judge.
     * @param normJudgeId The normJudgeId value of the desired judge.   - minimum: 18   - maximum: 18 
     * @param q The keyword expression targeting the desired parties.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getNormPartiesAssociatedWithNormJudgeWithHttpInfo(normJudgeId: string, q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<AssociatedNormPartyResponse1>> {
        const requestContextPromise = this.requestFactory.getNormPartiesAssociatedWithNormJudge(normJudgeId, q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNormPartiesAssociatedWithNormJudgeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search for parties that have appeared before the specified judge using a keyword expression. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtLocationId IN (\"COLODj4BBVTho3pKpz\",\"COLOPUfJRhw5yPxgRi\")**| | **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple Ids Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all Parties associated with judge with norm id NJUDT7jCZyFNeLGpRq of all cases with case type id CTYPGkaW3aGJyKGyfn and case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Parties Associated with the Judge.
     * @param normJudgeId The normJudgeId value of the desired judge.   - minimum: 18   - maximum: 18 
     * @param q The keyword expression targeting the desired parties.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getNormPartiesAssociatedWithNormJudge(normJudgeId: string, q?: string, pageNumber?: number, _options?: Configuration): Observable<AssociatedNormPartyResponse1> {
        return this.getNormPartiesAssociatedWithNormJudgeWithHttpInfo(normJudgeId, q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<AssociatedNormPartyResponse1>) => apiResponse.data));
    }

    /**
     * ### Search for a judge using a keyword expression. 
     * Judge search.
     * @param q The keyword expression targeting the desired judge.&lt;/a&gt; 
     * @param pageNumber The page number of the desired page of results. - Minimum: 1 - Maximum: 1000 
     */
    public searchNormalizedJudgesWithHttpInfo(q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<SearchNormalizedJudges200Response>> {
        const requestContextPromise = this.requestFactory.searchNormalizedJudges(q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchNormalizedJudgesWithHttpInfo(rsp)));
            }));
    }

    /**
     * ### Search for a judge using a keyword expression. 
     * Judge search.
     * @param q The keyword expression targeting the desired judge.&lt;/a&gt; 
     * @param pageNumber The page number of the desired page of results. - Minimum: 1 - Maximum: 1000 
     */
    public searchNormalizedJudges(q?: string, pageNumber?: number, _options?: Configuration): Observable<SearchNormalizedJudges200Response> {
        return this.searchNormalizedJudgesWithHttpInfo(q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<SearchNormalizedJudges200Response>) => apiResponse.data));
    }

    /**
     * ### Retrieve the desired search for a judge. 
     * Norm judge search results for a given normJudgeSearchId.
     * @param normJudgeSearchId The normJudgeSearchId value of the desired search.
     * @param pageNumber The page number of the desired page of results. - Minimum: 1 - Maximum: 1000 
     */
    public searchNormalizedJudgesByIdWithHttpInfo(normJudgeSearchId: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<SearchNormalizedJudges200Response>> {
        const requestContextPromise = this.requestFactory.searchNormalizedJudgesById(normJudgeSearchId, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchNormalizedJudgesByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * ### Retrieve the desired search for a judge. 
     * Norm judge search results for a given normJudgeSearchId.
     * @param normJudgeSearchId The normJudgeSearchId value of the desired search.
     * @param pageNumber The page number of the desired page of results. - Minimum: 1 - Maximum: 1000 
     */
    public searchNormalizedJudgesById(normJudgeSearchId: string, pageNumber?: number, _options?: Configuration): Observable<SearchNormalizedJudges200Response> {
        return this.searchNormalizedJudgesByIdWithHttpInfo(normJudgeSearchId, pageNumber, _options).pipe(map((apiResponse: HttpInfo<SearchNormalizedJudges200Response>) => apiResponse.data));
    }

}

import { LawFirmAnalyticsAPIApiRequestFactory, LawFirmAnalyticsAPIApiResponseProcessor} from "../apis/LawFirmAnalyticsAPIApi";
export class ObservableLawFirmAnalyticsAPIApi {
    private requestFactory: LawFirmAnalyticsAPIApiRequestFactory;
    private responseProcessor: LawFirmAnalyticsAPIApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LawFirmAnalyticsAPIApiRequestFactory,
        responseProcessor?: LawFirmAnalyticsAPIApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LawFirmAnalyticsAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LawFirmAnalyticsAPIApiResponseProcessor();
    }

    /**
     * Retrieve the attorneys associated with a given normalized law firm. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId**  | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed  |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed  |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **caseFiledDate**  | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo**  | Multiple Ids Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br>         ## Example Query Query to get all attorneys associated with LawFirm with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Attorneys working for the Law Firm.
     * @param normLawFirmId The normLawFirmId value of the desired normalized law firm.   - minimum: 18   - maximum: 18 
     * @param q The keyword expression targeting the desired attorneys. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getNormAttorneysAssociatedWithNormLawFirmWithHttpInfo(normLawFirmId: string, q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<AssociatedNormAttorneyResponse1>> {
        const requestContextPromise = this.requestFactory.getNormAttorneysAssociatedWithNormLawFirm(normLawFirmId, q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNormAttorneysAssociatedWithNormLawFirmWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the attorneys associated with a given normalized law firm. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId**  | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed  |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed  |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **caseFiledDate**  | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo**  | Multiple Ids Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br>         ## Example Query Query to get all attorneys associated with LawFirm with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Attorneys working for the Law Firm.
     * @param normLawFirmId The normLawFirmId value of the desired normalized law firm.   - minimum: 18   - maximum: 18 
     * @param q The keyword expression targeting the desired attorneys. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getNormAttorneysAssociatedWithNormLawFirm(normLawFirmId: string, q?: string, pageNumber?: number, _options?: Configuration): Observable<AssociatedNormAttorneyResponse1> {
        return this.getNormAttorneysAssociatedWithNormLawFirmWithHttpInfo(normLawFirmId, q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<AssociatedNormAttorneyResponse1>) => apiResponse.data));
    }

    /**
     * Retrieve the judges before which a given normalized law firm has appeared. <br><br> ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **caseFiledDate** | Single Allowed   |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple Ids Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all judges associated with LawFirm with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Judges Faced By the Law Firm.
     * @param normLawFirmId The normLawFirmId value of the desired normalized law firm.   - minimum: 18   - maximum: 18 
     * @param q The keyword expression targeting the desired judges. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getNormJudgesAssociatedWithNormLawFirmWithHttpInfo(normLawFirmId: string, q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<AssociatedNormJudgeResponse1>> {
        const requestContextPromise = this.requestFactory.getNormJudgesAssociatedWithNormLawFirm(normLawFirmId, q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNormJudgesAssociatedWithNormLawFirmWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the judges before which a given normalized law firm has appeared. <br><br> ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **caseFiledDate** | Single Allowed   |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple Ids Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all judges associated with LawFirm with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Judges Faced By the Law Firm.
     * @param normLawFirmId The normLawFirmId value of the desired normalized law firm.   - minimum: 18   - maximum: 18 
     * @param q The keyword expression targeting the desired judges. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getNormJudgesAssociatedWithNormLawFirm(normLawFirmId: string, q?: string, pageNumber?: number, _options?: Configuration): Observable<AssociatedNormJudgeResponse1> {
        return this.getNormJudgesAssociatedWithNormLawFirmWithHttpInfo(normLawFirmId, q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<AssociatedNormJudgeResponse1>) => apiResponse.data));
    }

    /**
     * Retrieve the specified normalized law firm. 
     * Norm LawFirm Details.
     * @param normLawFirmId The normLawFirmId value of the desired normalized law firm.   - minimum: 18   - maximum: 18 
     */
    public getNormLawFirmByIdWithHttpInfo(normLawFirmId: string, _options?: Configuration): Observable<HttpInfo<NormLawFirm1>> {
        const requestContextPromise = this.requestFactory.getNormLawFirmById(normLawFirmId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNormLawFirmByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the specified normalized law firm. 
     * Norm LawFirm Details.
     * @param normLawFirmId The normLawFirmId value of the desired normalized law firm.   - minimum: 18   - maximum: 18 
     */
    public getNormLawFirmById(normLawFirmId: string, _options?: Configuration): Observable<NormLawFirm1> {
        return this.getNormLawFirmByIdWithHttpInfo(normLawFirmId, _options).pipe(map((apiResponse: HttpInfo<NormLawFirm1>) => apiResponse.data));
    }

    /**
     * Retrieve the parties that the given normalized law firm has represented. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all parties associated with LawFirm with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Parties Represented by the Law Firm.
     * @param normLawFirmId The normLawFirmId value of the desired normalized law firm.   - minimum: 18   - maximum: 18 
     * @param q The keyword expression targeting the desired parties. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getNormPartiesAssociatedWithNormLawFirmWithHttpInfo(normLawFirmId: string, q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<AssociatedNormPartyResponse1>> {
        const requestContextPromise = this.requestFactory.getNormPartiesAssociatedWithNormLawFirm(normLawFirmId, q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNormPartiesAssociatedWithNormLawFirmWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the parties that the given normalized law firm has represented. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all parties associated with LawFirm with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Parties Represented by the Law Firm.
     * @param normLawFirmId The normLawFirmId value of the desired normalized law firm.   - minimum: 18   - maximum: 18 
     * @param q The keyword expression targeting the desired parties. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getNormPartiesAssociatedWithNormLawFirm(normLawFirmId: string, q?: string, pageNumber?: number, _options?: Configuration): Observable<AssociatedNormPartyResponse1> {
        return this.getNormPartiesAssociatedWithNormLawFirmWithHttpInfo(normLawFirmId, q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<AssociatedNormPartyResponse1>) => apiResponse.data));
    }

    /**
     * ### Retrieve a normalized law firm using a keyword expression. 
     * Law firm search.
     * @param q The keyword expression targeting the desired law firms.&lt;/a&gt; 
     * @param pageNumber The page number of the desired page of results. - Minimum: 1 - Maximum: 1000 
     */
    public searchNormalizedLawFirmsWithHttpInfo(q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<SearchNormalizedLawFirms200Response>> {
        const requestContextPromise = this.requestFactory.searchNormalizedLawFirms(q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchNormalizedLawFirmsWithHttpInfo(rsp)));
            }));
    }

    /**
     * ### Retrieve a normalized law firm using a keyword expression. 
     * Law firm search.
     * @param q The keyword expression targeting the desired law firms.&lt;/a&gt; 
     * @param pageNumber The page number of the desired page of results. - Minimum: 1 - Maximum: 1000 
     */
    public searchNormalizedLawFirms(q?: string, pageNumber?: number, _options?: Configuration): Observable<SearchNormalizedLawFirms200Response> {
        return this.searchNormalizedLawFirmsWithHttpInfo(q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<SearchNormalizedLawFirms200Response>) => apiResponse.data));
    }

    /**
     * ### Retrieve the specified search for a normalized law firm. 
     * Norm law firm search result for a given normLawFirmSearchId.
     * @param normLawFirmSearchId The normLawFirmSearchId value of the search to be retrieved.
     * @param pageNumber The page number of the desired page of results. - Minimum: 1 - Maximum: 1000 
     */
    public searchNormalizedLawFirmsByIdWithHttpInfo(normLawFirmSearchId: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<SearchNormalizedLawFirms200Response>> {
        const requestContextPromise = this.requestFactory.searchNormalizedLawFirmsById(normLawFirmSearchId, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchNormalizedLawFirmsByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * ### Retrieve the specified search for a normalized law firm. 
     * Norm law firm search result for a given normLawFirmSearchId.
     * @param normLawFirmSearchId The normLawFirmSearchId value of the search to be retrieved.
     * @param pageNumber The page number of the desired page of results. - Minimum: 1 - Maximum: 1000 
     */
    public searchNormalizedLawFirmsById(normLawFirmSearchId: string, pageNumber?: number, _options?: Configuration): Observable<SearchNormalizedLawFirms200Response> {
        return this.searchNormalizedLawFirmsByIdWithHttpInfo(normLawFirmSearchId, pageNumber, _options).pipe(map((apiResponse: HttpInfo<SearchNormalizedLawFirms200Response>) => apiResponse.data));
    }

}

import { PACERAPIApiRequestFactory, PACERAPIApiResponseProcessor} from "../apis/PACERAPIApi";
export class ObservablePACERAPIApi {
    private requestFactory: PACERAPIApiRequestFactory;
    private responseProcessor: PACERAPIApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PACERAPIApiRequestFactory,
        responseProcessor?: PACERAPIApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PACERAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PACERAPIApiResponseProcessor();
    }

    /**
     * Search all courts within the PACER system for a particular case.
     * PACER Case Locator Search API for All Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case. Ex 12345
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public allCourtsPacerCaseLocatorCaseSearchWithHttpInfo(pacerUserId: string, pacerClientCode: string, caseNumber?: string, pacerCaseId?: number, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, courtRegionIdArray?: Array<string>, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Observable<HttpInfo<AllCourtsPacerCaseLocatorCaseSearch200Response>> {
        const requestContextPromise = this.requestFactory.allCourtsPacerCaseLocatorCaseSearch(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.allCourtsPacerCaseLocatorCaseSearchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search all courts within the PACER system for a particular case.
     * PACER Case Locator Search API for All Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case. Ex 12345
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public allCourtsPacerCaseLocatorCaseSearch(pacerUserId: string, pacerClientCode: string, caseNumber?: string, pacerCaseId?: number, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, courtRegionIdArray?: Array<string>, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Observable<AllCourtsPacerCaseLocatorCaseSearch200Response> {
        return this.allCourtsPacerCaseLocatorCaseSearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options).pipe(map((apiResponse: HttpInfo<AllCourtsPacerCaseLocatorCaseSearch200Response>) => apiResponse.data));
    }

    /**
     * Search for the specified party across all PACER case filings.
     * PACER Case Locator Search API for All Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param lastName The last name (for an individual) or the entity name (for a business entity) of the target party.
     * @param firstName The first name of the target party.
     * @param middleName The middle name of the target party.
     * @param generation The suffix (e.g., Jr., III) of the target party\&#39;s name.
     * @param partyType The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param partyExactNameMatch Specify whether the search string must match the name of the target party exactly.
     * @param partyRoleArray The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case.
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseYearFrom Limit the results of the search to those cases from the year specified or later
     * @param caseYearTo Limit the results of the search to those cases from the year specified or earlier
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtCase.caseOffice,ASC&amp;caseid,DESC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public allCourtsPacerCaseLocatorPartySearchWithHttpInfo(pacerUserId: string, pacerClientCode: string, caseNumber?: string, pacerCaseId?: number, lastName?: string, firstName?: string, middleName?: string, generation?: string, partyType?: string, partyExactNameMatch?: boolean, partyRoleArray?: Array<string>, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, courtRegionIdArray?: Array<string>, caseYearFrom?: number, caseYearTo?: number, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Observable<HttpInfo<AllCourtsPacerCaseLocatorPartySearch200Response>> {
        const requestContextPromise = this.requestFactory.allCourtsPacerCaseLocatorPartySearch(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.allCourtsPacerCaseLocatorPartySearchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search for the specified party across all PACER case filings.
     * PACER Case Locator Search API for All Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param lastName The last name (for an individual) or the entity name (for a business entity) of the target party.
     * @param firstName The first name of the target party.
     * @param middleName The middle name of the target party.
     * @param generation The suffix (e.g., Jr., III) of the target party\&#39;s name.
     * @param partyType The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param partyExactNameMatch Specify whether the search string must match the name of the target party exactly.
     * @param partyRoleArray The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case.
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseYearFrom Limit the results of the search to those cases from the year specified or later
     * @param caseYearTo Limit the results of the search to those cases from the year specified or earlier
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtCase.caseOffice,ASC&amp;caseid,DESC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public allCourtsPacerCaseLocatorPartySearch(pacerUserId: string, pacerClientCode: string, caseNumber?: string, pacerCaseId?: number, lastName?: string, firstName?: string, middleName?: string, generation?: string, partyType?: string, partyExactNameMatch?: boolean, partyRoleArray?: Array<string>, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, courtRegionIdArray?: Array<string>, caseYearFrom?: number, caseYearTo?: number, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Observable<AllCourtsPacerCaseLocatorPartySearch200Response> {
        return this.allCourtsPacerCaseLocatorPartySearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options).pipe(map((apiResponse: HttpInfo<AllCourtsPacerCaseLocatorPartySearch200Response>) => apiResponse.data));
    }

    /**
     * Search for PACER cases filed in U.S. Courts of Appeals.
     * PACER Case Locator Search API for All Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits).
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case. Ex 12345
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param natureOfSuitsArray The PACER-assigned nature of suit classification of the target case. Please see Appendix E for valid nature-of-suit classifications for cases in U.S. Courts of Appeals.    Scenario: When mulitple nature of suits needs to be requested.    Imagine for a given case number 12-1234 I would like to search with the nature of suit 1110 (Insurance) and 1150 (Overpayments &amp; Enforc. of Judgments), My query in the request will look like the example mentioned below.    Example: natureOfSuitsArray&#x3D;1110&amp;natureOfSuitsArray&#x3D;1150
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public appealCourtsPacerCaseLocatorCaseSearchWithHttpInfo(pacerUserId: string, pacerClientCode: string, caseNumber?: string, pacerCaseId?: number, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, natureOfSuitsArray?: Array<string>, courtRegionIdArray?: Array<string>, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Observable<HttpInfo<AllCourtsPacerCaseLocatorCaseSearch200Response>> {
        const requestContextPromise = this.requestFactory.appealCourtsPacerCaseLocatorCaseSearch(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, natureOfSuitsArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appealCourtsPacerCaseLocatorCaseSearchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search for PACER cases filed in U.S. Courts of Appeals.
     * PACER Case Locator Search API for All Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits).
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case. Ex 12345
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param natureOfSuitsArray The PACER-assigned nature of suit classification of the target case. Please see Appendix E for valid nature-of-suit classifications for cases in U.S. Courts of Appeals.    Scenario: When mulitple nature of suits needs to be requested.    Imagine for a given case number 12-1234 I would like to search with the nature of suit 1110 (Insurance) and 1150 (Overpayments &amp; Enforc. of Judgments), My query in the request will look like the example mentioned below.    Example: natureOfSuitsArray&#x3D;1110&amp;natureOfSuitsArray&#x3D;1150
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public appealCourtsPacerCaseLocatorCaseSearch(pacerUserId: string, pacerClientCode: string, caseNumber?: string, pacerCaseId?: number, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, natureOfSuitsArray?: Array<string>, courtRegionIdArray?: Array<string>, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Observable<AllCourtsPacerCaseLocatorCaseSearch200Response> {
        return this.appealCourtsPacerCaseLocatorCaseSearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, natureOfSuitsArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options).pipe(map((apiResponse: HttpInfo<AllCourtsPacerCaseLocatorCaseSearch200Response>) => apiResponse.data));
    }

    /**
     * Search for the specified party across all PACER appeals cases.
     * PACER Case Locator Search API for All Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param lastName The last name (for an individual) or the entity name (for a business entity) of the target party.
     * @param firstName The first name of the target party.
     * @param middleName The middle name of the target party.
     * @param generation The suffix (e.g., Jr., III) of the target party\&#39;s name.
     * @param partyType The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param partyExactNameMatch Specify whether the search string must match the name of the target party exactly.
     * @param partyRoleArray The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case. Ex 12345
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseYearFrom Limit the results of the search to those cases from the year specified or later
     * @param caseYearTo Limit the results of the search to those cases from the year specified or earlier
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtCase.caseOffice,ASC&amp;caseid,DESC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public appealCourtsPacerCaseLocatorPartySearchWithHttpInfo(pacerUserId: string, pacerClientCode: string, caseNumber?: string, pacerCaseId?: number, lastName?: string, firstName?: string, middleName?: string, generation?: string, partyType?: string, partyExactNameMatch?: boolean, partyRoleArray?: Array<string>, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, courtRegionIdArray?: Array<string>, caseYearFrom?: number, caseYearTo?: number, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Observable<HttpInfo<AllCourtsPacerCaseLocatorPartySearch200Response>> {
        const requestContextPromise = this.requestFactory.appealCourtsPacerCaseLocatorPartySearch(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appealCourtsPacerCaseLocatorPartySearchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search for the specified party across all PACER appeals cases.
     * PACER Case Locator Search API for All Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param lastName The last name (for an individual) or the entity name (for a business entity) of the target party.
     * @param firstName The first name of the target party.
     * @param middleName The middle name of the target party.
     * @param generation The suffix (e.g., Jr., III) of the target party\&#39;s name.
     * @param partyType The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param partyExactNameMatch Specify whether the search string must match the name of the target party exactly.
     * @param partyRoleArray The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case. Ex 12345
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseYearFrom Limit the results of the search to those cases from the year specified or later
     * @param caseYearTo Limit the results of the search to those cases from the year specified or earlier
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtCase.caseOffice,ASC&amp;caseid,DESC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public appealCourtsPacerCaseLocatorPartySearch(pacerUserId: string, pacerClientCode: string, caseNumber?: string, pacerCaseId?: number, lastName?: string, firstName?: string, middleName?: string, generation?: string, partyType?: string, partyExactNameMatch?: boolean, partyRoleArray?: Array<string>, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, courtRegionIdArray?: Array<string>, caseYearFrom?: number, caseYearTo?: number, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Observable<AllCourtsPacerCaseLocatorPartySearch200Response> {
        return this.appealCourtsPacerCaseLocatorPartySearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options).pipe(map((apiResponse: HttpInfo<AllCourtsPacerCaseLocatorPartySearch200Response>) => apiResponse.data));
    }

    /**
     * Search for PACER cases filed in U.S. Bankruptcy Courts.
     * PACER Case Locator Search API for Bankruptcy Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case. Ex 12345
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param federalBankruptcyChapterArray The chapter of the U.S. Bankruptcy Code under which the target case was filed. Please see Appendix D for a list of valid chapter numbers.    Scenario: When mulitple Federal Bankruptcy Chapters needs to be requested.    Imagine for a given case number 12-1234 I would like to search with the Federal Bankruptcy Chapters 7 (Chapter 7) and 11 (Chapter 11), My query in the request will look like the example mentioned below.    Example: federalBankruptcyChapterArray&#x3D;7&amp;federalBankruptcyChapterArray&#x3D;11
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseDischargedStartDate The date on which or after which the target case was marked as discharged within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type.
     * @param caseDischargedEndDate The date on which or before which the target case was marked as discharged within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type.
     * @param caseDismissedStartDate The date on which or after which the target case was marked as dismissed within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type.
     * @param caseDismissedEndDate The date on which or before which the target case was marked as dismissed within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public bankruptcyCourtsPacerCaseLocatorCaseSearchWithHttpInfo(pacerUserId: string, pacerClientCode: string, caseNumber?: string, pacerCaseId?: number, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, federalBankruptcyChapterArray?: Array<string>, courtRegionIdArray?: Array<string>, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, caseDischargedStartDate?: Date, caseDischargedEndDate?: Date, caseDismissedStartDate?: Date, caseDismissedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Observable<HttpInfo<AllCourtsPacerCaseLocatorCaseSearch200Response>> {
        const requestContextPromise = this.requestFactory.bankruptcyCourtsPacerCaseLocatorCaseSearch(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, federalBankruptcyChapterArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, caseDischargedStartDate, caseDischargedEndDate, caseDismissedStartDate, caseDismissedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bankruptcyCourtsPacerCaseLocatorCaseSearchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search for PACER cases filed in U.S. Bankruptcy Courts.
     * PACER Case Locator Search API for Bankruptcy Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case. Ex 12345
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param federalBankruptcyChapterArray The chapter of the U.S. Bankruptcy Code under which the target case was filed. Please see Appendix D for a list of valid chapter numbers.    Scenario: When mulitple Federal Bankruptcy Chapters needs to be requested.    Imagine for a given case number 12-1234 I would like to search with the Federal Bankruptcy Chapters 7 (Chapter 7) and 11 (Chapter 11), My query in the request will look like the example mentioned below.    Example: federalBankruptcyChapterArray&#x3D;7&amp;federalBankruptcyChapterArray&#x3D;11
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseDischargedStartDate The date on which or after which the target case was marked as discharged within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type.
     * @param caseDischargedEndDate The date on which or before which the target case was marked as discharged within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type.
     * @param caseDismissedStartDate The date on which or after which the target case was marked as dismissed within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type.
     * @param caseDismissedEndDate The date on which or before which the target case was marked as dismissed within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public bankruptcyCourtsPacerCaseLocatorCaseSearch(pacerUserId: string, pacerClientCode: string, caseNumber?: string, pacerCaseId?: number, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, federalBankruptcyChapterArray?: Array<string>, courtRegionIdArray?: Array<string>, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, caseDischargedStartDate?: Date, caseDischargedEndDate?: Date, caseDismissedStartDate?: Date, caseDismissedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Observable<AllCourtsPacerCaseLocatorCaseSearch200Response> {
        return this.bankruptcyCourtsPacerCaseLocatorCaseSearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, federalBankruptcyChapterArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, caseDischargedStartDate, caseDischargedEndDate, caseDismissedStartDate, caseDismissedEndDate, sortParameterQuery, caseStatus, pageNumber, _options).pipe(map((apiResponse: HttpInfo<AllCourtsPacerCaseLocatorCaseSearch200Response>) => apiResponse.data));
    }

    /**
     * Search for the specified party in PACER bankruptcy filings.
     * PACER Case Locator Search API for All Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param lastName The last name (for an individual) or the entity name (for a business entity) of the target party.
     * @param firstName The first name of the target party.
     * @param middleName The middle name of the target party.
     * @param generation The suffix (e.g., Jr., III) of the target party\&#39;s name.
     * @param partyType The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param partyExactNameMatch Specify whether the search string must match the name of the target party exactly.
     * @param partyRoleArray The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case. Ex 12345
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseYearFrom Limit the results of the search to those cases from the year specified or later
     * @param caseYearTo Limit the results of the search to those cases from the year specified or earlier
     * @param ssnOrEin The Social Security number or the federal Employer Identification Number of the target party. Either number can be entered with or without dashes.
     * @param fourDigitSsn The last four digits of the Social Security number of the target party.   Note: When specified, a last name/entity name must also be specified.
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseDischargedStartDate The date on which or after which the target case was marked as discharged within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type.
     * @param caseDischargedEndDate The date on which or before which the target case was marked as discharged within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type.
     * @param caseDismissedStartDate The date on which or after which the target case was marked as dismissed within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type.
     * @param caseDismissedEndDate The date on which or before which the target case was marked as dismissed within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtCase.caseOffice,ASC&amp;caseid,DESC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public bankruptcyCourtsPacerCaseLocatorPartySearchWithHttpInfo(pacerUserId: string, pacerClientCode: string, caseNumber?: string, pacerCaseId?: number, lastName?: string, firstName?: string, middleName?: string, generation?: string, partyType?: string, partyExactNameMatch?: boolean, partyRoleArray?: Array<string>, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, courtRegionIdArray?: Array<string>, caseYearFrom?: number, caseYearTo?: number, ssnOrEin?: string, fourDigitSsn?: string, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, caseDischargedStartDate?: Date, caseDischargedEndDate?: Date, caseDismissedStartDate?: Date, caseDismissedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Observable<HttpInfo<AllCourtsPacerCaseLocatorPartySearch200Response>> {
        const requestContextPromise = this.requestFactory.bankruptcyCourtsPacerCaseLocatorPartySearch(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, ssnOrEin, fourDigitSsn, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, caseDischargedStartDate, caseDischargedEndDate, caseDismissedStartDate, caseDismissedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bankruptcyCourtsPacerCaseLocatorPartySearchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search for the specified party in PACER bankruptcy filings.
     * PACER Case Locator Search API for All Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param lastName The last name (for an individual) or the entity name (for a business entity) of the target party.
     * @param firstName The first name of the target party.
     * @param middleName The middle name of the target party.
     * @param generation The suffix (e.g., Jr., III) of the target party\&#39;s name.
     * @param partyType The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param partyExactNameMatch Specify whether the search string must match the name of the target party exactly.
     * @param partyRoleArray The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case. Ex 12345
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseYearFrom Limit the results of the search to those cases from the year specified or later
     * @param caseYearTo Limit the results of the search to those cases from the year specified or earlier
     * @param ssnOrEin The Social Security number or the federal Employer Identification Number of the target party. Either number can be entered with or without dashes.
     * @param fourDigitSsn The last four digits of the Social Security number of the target party.   Note: When specified, a last name/entity name must also be specified.
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseDischargedStartDate The date on which or after which the target case was marked as discharged within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type.
     * @param caseDischargedEndDate The date on which or before which the target case was marked as discharged within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type.
     * @param caseDismissedStartDate The date on which or after which the target case was marked as dismissed within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type.
     * @param caseDismissedEndDate The date on which or before which the target case was marked as dismissed within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtCase.caseOffice,ASC&amp;caseid,DESC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public bankruptcyCourtsPacerCaseLocatorPartySearch(pacerUserId: string, pacerClientCode: string, caseNumber?: string, pacerCaseId?: number, lastName?: string, firstName?: string, middleName?: string, generation?: string, partyType?: string, partyExactNameMatch?: boolean, partyRoleArray?: Array<string>, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, courtRegionIdArray?: Array<string>, caseYearFrom?: number, caseYearTo?: number, ssnOrEin?: string, fourDigitSsn?: string, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, caseDischargedStartDate?: Date, caseDischargedEndDate?: Date, caseDismissedStartDate?: Date, caseDismissedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Observable<AllCourtsPacerCaseLocatorPartySearch200Response> {
        return this.bankruptcyCourtsPacerCaseLocatorPartySearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, ssnOrEin, fourDigitSsn, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, caseDischargedStartDate, caseDischargedEndDate, caseDismissedStartDate, caseDismissedEndDate, sortParameterQuery, caseStatus, pageNumber, _options).pipe(map((apiResponse: HttpInfo<AllCourtsPacerCaseLocatorPartySearch200Response>) => apiResponse.data));
    }

    /**
     * Search for civil cases filed in PACER.
     * PACER Case Locator Search API for All Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case.
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param natureOfSuitsArray The PACER-assigned nature of suit classification of the target case. Please see Appendix E for valid nature-of-suit classifications for cases.    Scenario: When mulitple nature of suits needs to be requested.    Imagine for a given case number 12-1234 I would like to search with the nature of suit 110 (Insurance) and 140 (Negotiable Instrument), My query in the request will look like the example mentioned below.    Example: natureOfSuitsArray&#x3D;110&amp;natureOfSuitsArray&#x3D;140
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public civilCourtsPacerCaseLocatorCaseSearchWithHttpInfo(pacerUserId: string, pacerClientCode: string, caseNumber?: string, pacerCaseId?: number, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, natureOfSuitsArray?: Array<string>, courtRegionIdArray?: Array<string>, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Observable<HttpInfo<AllCourtsPacerCaseLocatorCaseSearch200Response>> {
        const requestContextPromise = this.requestFactory.civilCourtsPacerCaseLocatorCaseSearch(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, natureOfSuitsArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.civilCourtsPacerCaseLocatorCaseSearchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search for civil cases filed in PACER.
     * PACER Case Locator Search API for All Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case.
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param natureOfSuitsArray The PACER-assigned nature of suit classification of the target case. Please see Appendix E for valid nature-of-suit classifications for cases.    Scenario: When mulitple nature of suits needs to be requested.    Imagine for a given case number 12-1234 I would like to search with the nature of suit 110 (Insurance) and 140 (Negotiable Instrument), My query in the request will look like the example mentioned below.    Example: natureOfSuitsArray&#x3D;110&amp;natureOfSuitsArray&#x3D;140
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public civilCourtsPacerCaseLocatorCaseSearch(pacerUserId: string, pacerClientCode: string, caseNumber?: string, pacerCaseId?: number, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, natureOfSuitsArray?: Array<string>, courtRegionIdArray?: Array<string>, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Observable<AllCourtsPacerCaseLocatorCaseSearch200Response> {
        return this.civilCourtsPacerCaseLocatorCaseSearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, natureOfSuitsArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options).pipe(map((apiResponse: HttpInfo<AllCourtsPacerCaseLocatorCaseSearch200Response>) => apiResponse.data));
    }

    /**
     * Search for the specified party in civil cases filed in PACER.
     * PACER Case Locator Search API for All Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param lastName The last name (for an individual) or the entity name (for a business entity) of the target party.
     * @param firstName The first name of the target party.
     * @param middleName The middle name of the target party.
     * @param generation The name suffix (e.g., III, MD).
     * @param partyType The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param partyExactNameMatch Specify whether the search string must match the name of the target party exactly.
     * @param partyRoleArray The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case. Ex 12345
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseYearFrom Limit the results of the search to those cases from the year specified or later
     * @param caseYearTo Limit the results of the search to those cases from the year specified or earlier
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtCase.caseOffice,ASC&amp;caseid,DESC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public civilCourtsPacerCaseLocatorPartySearchWithHttpInfo(pacerUserId: string, pacerClientCode: string, caseNumber?: string, pacerCaseId?: number, lastName?: string, firstName?: string, middleName?: string, generation?: string, partyType?: string, partyExactNameMatch?: boolean, partyRoleArray?: Array<string>, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, courtRegionIdArray?: Array<string>, caseYearFrom?: number, caseYearTo?: number, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Observable<HttpInfo<AllCourtsPacerCaseLocatorPartySearch200Response>> {
        const requestContextPromise = this.requestFactory.civilCourtsPacerCaseLocatorPartySearch(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.civilCourtsPacerCaseLocatorPartySearchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search for the specified party in civil cases filed in PACER.
     * PACER Case Locator Search API for All Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param lastName The last name (for an individual) or the entity name (for a business entity) of the target party.
     * @param firstName The first name of the target party.
     * @param middleName The middle name of the target party.
     * @param generation The name suffix (e.g., III, MD).
     * @param partyType The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param partyExactNameMatch Specify whether the search string must match the name of the target party exactly.
     * @param partyRoleArray The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case. Ex 12345
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseYearFrom Limit the results of the search to those cases from the year specified or later
     * @param caseYearTo Limit the results of the search to those cases from the year specified or earlier
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtCase.caseOffice,ASC&amp;caseid,DESC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public civilCourtsPacerCaseLocatorPartySearch(pacerUserId: string, pacerClientCode: string, caseNumber?: string, pacerCaseId?: number, lastName?: string, firstName?: string, middleName?: string, generation?: string, partyType?: string, partyExactNameMatch?: boolean, partyRoleArray?: Array<string>, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, courtRegionIdArray?: Array<string>, caseYearFrom?: number, caseYearTo?: number, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Observable<AllCourtsPacerCaseLocatorPartySearch200Response> {
        return this.civilCourtsPacerCaseLocatorPartySearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options).pipe(map((apiResponse: HttpInfo<AllCourtsPacerCaseLocatorPartySearch200Response>) => apiResponse.data));
    }

    /**
     * Search for criminal cases in PACER.
     * PACER Case Locator Search API for All Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case. Ex 12345
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public criminalCourtsPacerCaseLocatorCaseSearchWithHttpInfo(pacerUserId: string, pacerClientCode: string, caseNumber?: string, pacerCaseId?: number, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, courtRegionIdArray?: Array<string>, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Observable<HttpInfo<AllCourtsPacerCaseLocatorCaseSearch200Response>> {
        const requestContextPromise = this.requestFactory.criminalCourtsPacerCaseLocatorCaseSearch(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.criminalCourtsPacerCaseLocatorCaseSearchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search for criminal cases in PACER.
     * PACER Case Locator Search API for All Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case. Ex 12345
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public criminalCourtsPacerCaseLocatorCaseSearch(pacerUserId: string, pacerClientCode: string, caseNumber?: string, pacerCaseId?: number, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, courtRegionIdArray?: Array<string>, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Observable<AllCourtsPacerCaseLocatorCaseSearch200Response> {
        return this.criminalCourtsPacerCaseLocatorCaseSearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options).pipe(map((apiResponse: HttpInfo<AllCourtsPacerCaseLocatorCaseSearch200Response>) => apiResponse.data));
    }

    /**
     * Search for the specified party in PACER criminal cases.
     * PACER Case Locator Search API for All Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param lastName The last name (for an individual) or the entity name (for a business entity) of the target party.
     * @param firstName The first name of the target party.
     * @param middleName The middle name of the target party.
     * @param generation The suffix (e.g., Jr., III) of the target party\&#39;s name.
     * @param partyType The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param partyExactNameMatch Specify whether the search string must match the name of the target party exactly.
     * @param partyRoleArray The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case. Ex 12345
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseYearFrom Limit the results of the search to those cases from the year specified or later
     * @param caseYearTo Limit the results of the search to those cases from the year specified or earlier
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtCase.caseOffice,ASC&amp;caseid,DESC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public criminalCourtsPacerCaseLocatorPartySearchWithHttpInfo(pacerUserId: string, pacerClientCode: string, caseNumber?: string, pacerCaseId?: number, lastName?: string, firstName?: string, middleName?: string, generation?: string, partyType?: string, partyExactNameMatch?: boolean, partyRoleArray?: Array<string>, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, courtRegionIdArray?: Array<string>, caseYearFrom?: number, caseYearTo?: number, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Observable<HttpInfo<AllCourtsPacerCaseLocatorPartySearch200Response>> {
        const requestContextPromise = this.requestFactory.criminalCourtsPacerCaseLocatorPartySearch(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.criminalCourtsPacerCaseLocatorPartySearchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search for the specified party in PACER criminal cases.
     * PACER Case Locator Search API for All Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param lastName The last name (for an individual) or the entity name (for a business entity) of the target party.
     * @param firstName The first name of the target party.
     * @param middleName The middle name of the target party.
     * @param generation The suffix (e.g., Jr., III) of the target party\&#39;s name.
     * @param partyType The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param partyExactNameMatch Specify whether the search string must match the name of the target party exactly.
     * @param partyRoleArray The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case. Ex 12345
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseYearFrom Limit the results of the search to those cases from the year specified or later
     * @param caseYearTo Limit the results of the search to those cases from the year specified or earlier
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtCase.caseOffice,ASC&amp;caseid,DESC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public criminalCourtsPacerCaseLocatorPartySearch(pacerUserId: string, pacerClientCode: string, caseNumber?: string, pacerCaseId?: number, lastName?: string, firstName?: string, middleName?: string, generation?: string, partyType?: string, partyExactNameMatch?: boolean, partyRoleArray?: Array<string>, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, courtRegionIdArray?: Array<string>, caseYearFrom?: number, caseYearTo?: number, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Observable<AllCourtsPacerCaseLocatorPartySearch200Response> {
        return this.criminalCourtsPacerCaseLocatorPartySearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options).pipe(map((apiResponse: HttpInfo<AllCourtsPacerCaseLocatorPartySearch200Response>) => apiResponse.data));
    }

    /**
     * Import the specified case from PACER.    Workflow:     1.This API will return the Find Case results from the court site in a form of array of UniCourt Case Objects. These case objects will consists only Meta information of the case if not already present in the UniCourt Database.     2.To get the full updated case information one will have to request the caseUpdate API by passing the caseId.    Note:     1.Charges for Find Case in District, Bankruptcy and National Courts is free. Find case for Appeal Courts will be charged at minimum rate of $0.1. The fee charged by the court for find case can be found in the response of this API in the field courtFee.     2.The results of the search has less Meta information in case objects compared to the Meta information of cases found using the PCL search APIs.
     * Find PACER Case for a requested Case Number and Court.
     * @param pacerUserId The PACER username of the PACER account under which the case should be imported.
     * @param pacerClientCode The PACER client code under which the case should be imported.
     * @param caseNumber The case number of the case to be imported.
     * @param courtId The courtId value of the court from which the case is to be imported.
     */
    public importPacerCaseByCourtUsingCaseNumberWithHttpInfo(pacerUserId: string, pacerClientCode: string, caseNumber: string, courtId: string, _options?: Configuration): Observable<HttpInfo<ImportPacerCaseByCourtUsingCaseNumber200Response>> {
        const requestContextPromise = this.requestFactory.importPacerCaseByCourtUsingCaseNumber(pacerUserId, pacerClientCode, caseNumber, courtId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.importPacerCaseByCourtUsingCaseNumberWithHttpInfo(rsp)));
            }));
    }

    /**
     * Import the specified case from PACER.    Workflow:     1.This API will return the Find Case results from the court site in a form of array of UniCourt Case Objects. These case objects will consists only Meta information of the case if not already present in the UniCourt Database.     2.To get the full updated case information one will have to request the caseUpdate API by passing the caseId.    Note:     1.Charges for Find Case in District, Bankruptcy and National Courts is free. Find case for Appeal Courts will be charged at minimum rate of $0.1. The fee charged by the court for find case can be found in the response of this API in the field courtFee.     2.The results of the search has less Meta information in case objects compared to the Meta information of cases found using the PCL search APIs.
     * Find PACER Case for a requested Case Number and Court.
     * @param pacerUserId The PACER username of the PACER account under which the case should be imported.
     * @param pacerClientCode The PACER client code under which the case should be imported.
     * @param caseNumber The case number of the case to be imported.
     * @param courtId The courtId value of the court from which the case is to be imported.
     */
    public importPacerCaseByCourtUsingCaseNumber(pacerUserId: string, pacerClientCode: string, caseNumber: string, courtId: string, _options?: Configuration): Observable<ImportPacerCaseByCourtUsingCaseNumber200Response> {
        return this.importPacerCaseByCourtUsingCaseNumberWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, courtId, _options).pipe(map((apiResponse: HttpInfo<ImportPacerCaseByCourtUsingCaseNumber200Response>) => apiResponse.data));
    }

    /**
     * Search for multidistrict litigation in PACER.
     * PACER Case Locator Search API for All Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @param jpmlNumber Master JPML Case Number.
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case. Ex 12345
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public multiDistrictCourtsPacerCaseLocatorCaseSearchWithHttpInfo(pacerUserId: string, pacerClientCode: string, caseNumber?: string, jpmlNumber?: number, pacerCaseId?: number, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, courtRegionIdArray?: Array<string>, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Observable<HttpInfo<AllCourtsPacerCaseLocatorCaseSearch200Response>> {
        const requestContextPromise = this.requestFactory.multiDistrictCourtsPacerCaseLocatorCaseSearch(pacerUserId, pacerClientCode, caseNumber, jpmlNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.multiDistrictCourtsPacerCaseLocatorCaseSearchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search for multidistrict litigation in PACER.
     * PACER Case Locator Search API for All Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @param jpmlNumber Master JPML Case Number.
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case. Ex 12345
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public multiDistrictCourtsPacerCaseLocatorCaseSearch(pacerUserId: string, pacerClientCode: string, caseNumber?: string, jpmlNumber?: number, pacerCaseId?: number, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, courtRegionIdArray?: Array<string>, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Observable<AllCourtsPacerCaseLocatorCaseSearch200Response> {
        return this.multiDistrictCourtsPacerCaseLocatorCaseSearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, jpmlNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options).pipe(map((apiResponse: HttpInfo<AllCourtsPacerCaseLocatorCaseSearch200Response>) => apiResponse.data));
    }

    /**
     * Search for the specified party in multidistrict litigation in PACER.
     * PACER Case Locator Search API for All Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @param jpmlNumber Master JPML Case Number.
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param lastName The last name (for an individual) or the entity name (for a business entity) of the target party.
     * @param firstName The first name of the target party.
     * @param middleName The middle name of the target party.
     * @param generation The suffix (e.g., Jr., III) of the target party\&#39;s name.
     * @param partyType The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param partyExactNameMatch Specify whether the search string must match the name of the target party exactly.
     * @param partyRoleArray The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case. Ex 12345
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseYearFrom Limit the results of the search to those cases from the year specified or later
     * @param caseYearTo Limit the results of the search to those cases from the year specified or earlier
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtCase.caseOffice,ASC&amp;caseid,DESC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public multiDistrictCourtsPacerCaseLocatorPartySearchWithHttpInfo(pacerUserId: string, pacerClientCode: string, caseNumber?: string, jpmlNumber?: number, pacerCaseId?: number, lastName?: string, firstName?: string, middleName?: string, generation?: string, partyType?: string, partyExactNameMatch?: boolean, partyRoleArray?: Array<string>, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, courtRegionIdArray?: Array<string>, caseYearFrom?: number, caseYearTo?: number, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Observable<HttpInfo<AllCourtsPacerCaseLocatorPartySearch200Response>> {
        const requestContextPromise = this.requestFactory.multiDistrictCourtsPacerCaseLocatorPartySearch(pacerUserId, pacerClientCode, caseNumber, jpmlNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.multiDistrictCourtsPacerCaseLocatorPartySearchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search for the specified party in multidistrict litigation in PACER.
     * PACER Case Locator Search API for All Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @param jpmlNumber Master JPML Case Number.
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param lastName The last name (for an individual) or the entity name (for a business entity) of the target party.
     * @param firstName The first name of the target party.
     * @param middleName The middle name of the target party.
     * @param generation The suffix (e.g., Jr., III) of the target party\&#39;s name.
     * @param partyType The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param partyExactNameMatch Specify whether the search string must match the name of the target party exactly.
     * @param partyRoleArray The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case. Ex 12345
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseYearFrom Limit the results of the search to those cases from the year specified or later
     * @param caseYearTo Limit the results of the search to those cases from the year specified or earlier
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtCase.caseOffice,ASC&amp;caseid,DESC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public multiDistrictCourtsPacerCaseLocatorPartySearch(pacerUserId: string, pacerClientCode: string, caseNumber?: string, jpmlNumber?: number, pacerCaseId?: number, lastName?: string, firstName?: string, middleName?: string, generation?: string, partyType?: string, partyExactNameMatch?: boolean, partyRoleArray?: Array<string>, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, courtRegionIdArray?: Array<string>, caseYearFrom?: number, caseYearTo?: number, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Observable<AllCourtsPacerCaseLocatorPartySearch200Response> {
        return this.multiDistrictCourtsPacerCaseLocatorPartySearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, jpmlNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options).pipe(map((apiResponse: HttpInfo<AllCourtsPacerCaseLocatorPartySearch200Response>) => apiResponse.data));
    }

}

import { PACERCredentialAPIApiRequestFactory, PACERCredentialAPIApiResponseProcessor} from "../apis/PACERCredentialAPIApi";
export class ObservablePACERCredentialAPIApi {
    private requestFactory: PACERCredentialAPIApiRequestFactory;
    private responseProcessor: PACERCredentialAPIApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PACERCredentialAPIApiRequestFactory,
        responseProcessor?: PACERCredentialAPIApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PACERCredentialAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PACERCredentialAPIApiResponseProcessor();
    }

    /**
     * Register PACER credentials with UniCourt.
     * Add Pacer Credential.
     * @param addPacerCredentialRequest 
     */
    public addPacerCredentialWithHttpInfo(addPacerCredentialRequest?: AddPacerCredentialRequest, _options?: Configuration): Observable<HttpInfo<Success1>> {
        const requestContextPromise = this.requestFactory.addPacerCredential(addPacerCredentialRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addPacerCredentialWithHttpInfo(rsp)));
            }));
    }

    /**
     * Register PACER credentials with UniCourt.
     * Add Pacer Credential.
     * @param addPacerCredentialRequest 
     */
    public addPacerCredential(addPacerCredentialRequest?: AddPacerCredentialRequest, _options?: Configuration): Observable<Success1> {
        return this.addPacerCredentialWithHttpInfo(addPacerCredentialRequest, _options).pipe(map((apiResponse: HttpInfo<Success1>) => apiResponse.data));
    }

    /**
     * List registered PACER credentials.
     * Get Pacer Credential List.
     * @param pageNumber The page number of the PACER credentials to be retrieved.&lt;br&gt;   - Minimum: 1 
     */
    public getPacerCredentialWithHttpInfo(pageNumber?: number, _options?: Configuration): Observable<HttpInfo<GetPacerCredential200Response>> {
        const requestContextPromise = this.requestFactory.getPacerCredential(pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPacerCredentialWithHttpInfo(rsp)));
            }));
    }

    /**
     * List registered PACER credentials.
     * Get Pacer Credential List.
     * @param pageNumber The page number of the PACER credentials to be retrieved.&lt;br&gt;   - Minimum: 1 
     */
    public getPacerCredential(pageNumber?: number, _options?: Configuration): Observable<GetPacerCredential200Response> {
        return this.getPacerCredentialWithHttpInfo(pageNumber, _options).pipe(map((apiResponse: HttpInfo<GetPacerCredential200Response>) => apiResponse.data));
    }

    /**
     * Retrieve the PACER credentials for the specified PACER username.
     * Get Pacer Credential for a requested pacer User Id.
     * @param pacerUserId The PACER username for which PACER credentials are to be retrieved.
     */
    public getPacerCredentialByIdWithHttpInfo(pacerUserId: string, _options?: Configuration): Observable<HttpInfo<GetPacerCredential200ResponsePacerCredentialArrayInner>> {
        const requestContextPromise = this.requestFactory.getPacerCredentialById(pacerUserId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPacerCredentialByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the PACER credentials for the specified PACER username.
     * Get Pacer Credential for a requested pacer User Id.
     * @param pacerUserId The PACER username for which PACER credentials are to be retrieved.
     */
    public getPacerCredentialById(pacerUserId: string, _options?: Configuration): Observable<GetPacerCredential200ResponsePacerCredentialArrayInner> {
        return this.getPacerCredentialByIdWithHttpInfo(pacerUserId, _options).pipe(map((apiResponse: HttpInfo<GetPacerCredential200ResponsePacerCredentialArrayInner>) => apiResponse.data));
    }

    /**
     * De-register the PACER credentials for the specified PACER username.
     * Remove Pacer credential for a specific Pacer User Id.
     * @param pacerUserId The PACER username for which PACER credentials are to be retrieved.
     */
    public removePacerCredentialByIdWithHttpInfo(pacerUserId: string, _options?: Configuration): Observable<HttpInfo<Success1>> {
        const requestContextPromise = this.requestFactory.removePacerCredentialById(pacerUserId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removePacerCredentialByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * De-register the PACER credentials for the specified PACER username.
     * Remove Pacer credential for a specific Pacer User Id.
     * @param pacerUserId The PACER username for which PACER credentials are to be retrieved.
     */
    public removePacerCredentialById(pacerUserId: string, _options?: Configuration): Observable<Success1> {
        return this.removePacerCredentialByIdWithHttpInfo(pacerUserId, _options).pipe(map((apiResponse: HttpInfo<Success1>) => apiResponse.data));
    }

}

import { PartyAnalyticsAPIApiRequestFactory, PartyAnalyticsAPIApiResponseProcessor} from "../apis/PartyAnalyticsAPIApi";
export class ObservablePartyAnalyticsAPIApi {
    private requestFactory: PartyAnalyticsAPIApiRequestFactory;
    private responseProcessor: PartyAnalyticsAPIApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PartyAnalyticsAPIApiRequestFactory,
        responseProcessor?: PartyAnalyticsAPIApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PartyAnalyticsAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PartyAnalyticsAPIApiResponseProcessor();
    }

    /**
     * Search for attorneys who have represented a given party using a keyword expression. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTV4vCEaKrhystBz\",\"CORTYsomR6GiiiPovp\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all attorneys associated with Party with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Attorneys that represented the Party.
     * @param normPartyId The normPartyID value of the desired party.   - minimum: 18   - maximum: 18 
     * @param q The keyword expression targeting the desired attorneys.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getNormAttorneysAssociatedWithNormPartyWithHttpInfo(normPartyId: string, q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<AssociatedNormAttorneyResponse1>> {
        const requestContextPromise = this.requestFactory.getNormAttorneysAssociatedWithNormParty(normPartyId, q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNormAttorneysAssociatedWithNormPartyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search for attorneys who have represented a given party using a keyword expression. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTV4vCEaKrhystBz\",\"CORTYsomR6GiiiPovp\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all attorneys associated with Party with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Attorneys that represented the Party.
     * @param normPartyId The normPartyID value of the desired party.   - minimum: 18   - maximum: 18 
     * @param q The keyword expression targeting the desired attorneys.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getNormAttorneysAssociatedWithNormParty(normPartyId: string, q?: string, pageNumber?: number, _options?: Configuration): Observable<AssociatedNormAttorneyResponse1> {
        return this.getNormAttorneysAssociatedWithNormPartyWithHttpInfo(normPartyId, q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<AssociatedNormAttorneyResponse1>) => apiResponse.data));
    }

    /**
     * Search for judges before whom a party has appeared using a keyword expression. <br><br> ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTV4vCEaKrhystBz\",\"CORTYsomR6GiiiPovp\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all judges associated with Party with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Judges Faced By the Party.
     * @param normPartyId The normPartyId value of the desired party.   - minimum: 18   - maximum: 18 
     * @param q The keyword expression targeting the desired judges. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getNormJudgesAssociatedWithNormPartyWithHttpInfo(normPartyId: string, q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<AssociatedNormJudgeResponse1>> {
        const requestContextPromise = this.requestFactory.getNormJudgesAssociatedWithNormParty(normPartyId, q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNormJudgesAssociatedWithNormPartyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search for judges before whom a party has appeared using a keyword expression. <br><br> ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTV4vCEaKrhystBz\",\"CORTYsomR6GiiiPovp\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all judges associated with Party with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 
     * Judges Faced By the Party.
     * @param normPartyId The normPartyId value of the desired party.   - minimum: 18   - maximum: 18 
     * @param q The keyword expression targeting the desired judges. Keywords should be constructed according to the guidelines given above.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getNormJudgesAssociatedWithNormParty(normPartyId: string, q?: string, pageNumber?: number, _options?: Configuration): Observable<AssociatedNormJudgeResponse1> {
        return this.getNormJudgesAssociatedWithNormPartyWithHttpInfo(normPartyId, q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<AssociatedNormJudgeResponse1>) => apiResponse.data));
    }

    /**
     * Search for law firms that have represented the specified party using a keyword expression. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTV4vCEaKrhystBz\",\"CORTYsomR6GiiiPovp\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all lawfirms associated with Party with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Law Firms that represented the Party.
     * @param normPartyId The normPartyId value of the desired party.   - minimum: 18   - maximum: 18 
     * @param q The keyword expression targeting the desired law firms.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getNormLawFirmsAssociatedWithNormPartyWithHttpInfo(normPartyId: string, q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<AssociatedNormLawFirmResponse1>> {
        const requestContextPromise = this.requestFactory.getNormLawFirmsAssociatedWithNormParty(normPartyId, q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNormLawFirmsAssociatedWithNormPartyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search for law firms that have represented the specified party using a keyword expression. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTV4vCEaKrhystBz\",\"CORTYsomR6GiiiPovp\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all lawfirms associated with Party with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 
     * Law Firms that represented the Party.
     * @param normPartyId The normPartyId value of the desired party.   - minimum: 18   - maximum: 18 
     * @param q The keyword expression targeting the desired law firms.
     * @param pageNumber The page number of the desired page of results. - minimum: 1 
     */
    public getNormLawFirmsAssociatedWithNormParty(normPartyId: string, q?: string, pageNumber?: number, _options?: Configuration): Observable<AssociatedNormLawFirmResponse1> {
        return this.getNormLawFirmsAssociatedWithNormPartyWithHttpInfo(normPartyId, q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<AssociatedNormLawFirmResponse1>) => apiResponse.data));
    }

    /**
     * Retrieve the specified party. 
     * Norm Party Details.
     * @param normPartyId The normPartyId value of the desired party.   - minimum: 18   - maximum: 18 
     */
    public getNormPartyByIdWithHttpInfo(normPartyId: string, _options?: Configuration): Observable<HttpInfo<NormParty1>> {
        const requestContextPromise = this.requestFactory.getNormPartyById(normPartyId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNormPartyByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the specified party. 
     * Norm Party Details.
     * @param normPartyId The normPartyId value of the desired party.   - minimum: 18   - maximum: 18 
     */
    public getNormPartyById(normPartyId: string, _options?: Configuration): Observable<NormParty1> {
        return this.getNormPartyByIdWithHttpInfo(normPartyId, _options).pipe(map((apiResponse: HttpInfo<NormParty1>) => apiResponse.data));
    }

    /**
     * ### Search for a party using a keyword expression. 
     * Party search.
     * @param q The keyword expression targeting the desired party.&lt;/a&gt; 
     * @param pageNumber The page number of the desired page of results. - Minimum: 1 - Maximum: 1000 
     */
    public searchNormalizedPartiesWithHttpInfo(q?: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<SearchNormalizedParties200Response>> {
        const requestContextPromise = this.requestFactory.searchNormalizedParties(q, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchNormalizedPartiesWithHttpInfo(rsp)));
            }));
    }

    /**
     * ### Search for a party using a keyword expression. 
     * Party search.
     * @param q The keyword expression targeting the desired party.&lt;/a&gt; 
     * @param pageNumber The page number of the desired page of results. - Minimum: 1 - Maximum: 1000 
     */
    public searchNormalizedParties(q?: string, pageNumber?: number, _options?: Configuration): Observable<SearchNormalizedParties200Response> {
        return this.searchNormalizedPartiesWithHttpInfo(q, pageNumber, _options).pipe(map((apiResponse: HttpInfo<SearchNormalizedParties200Response>) => apiResponse.data));
    }

    /**
     * ### Retrieve a search for a party. 
     * Norm party search results for a given normPartySearchId.
     * @param normPartySearchId The normPartySearchId value of the search to be retrieved.
     * @param pageNumber The page number of the desired page of results. - Minimum: 1 - Maximum: 1000 
     */
    public searchNormalizedPartiesByIdWithHttpInfo(normPartySearchId: string, pageNumber?: number, _options?: Configuration): Observable<HttpInfo<SearchNormalizedParties200Response>> {
        const requestContextPromise = this.requestFactory.searchNormalizedPartiesById(normPartySearchId, pageNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchNormalizedPartiesByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * ### Retrieve a search for a party. 
     * Norm party search results for a given normPartySearchId.
     * @param normPartySearchId The normPartySearchId value of the search to be retrieved.
     * @param pageNumber The page number of the desired page of results. - Minimum: 1 - Maximum: 1000 
     */
    public searchNormalizedPartiesById(normPartySearchId: string, pageNumber?: number, _options?: Configuration): Observable<SearchNormalizedParties200Response> {
        return this.searchNormalizedPartiesByIdWithHttpInfo(normPartySearchId, pageNumber, _options).pipe(map((apiResponse: HttpInfo<SearchNormalizedParties200Response>) => apiResponse.data));
    }

}

import { UsageAPIApiRequestFactory, UsageAPIApiResponseProcessor} from "../apis/UsageAPIApi";
export class ObservableUsageAPIApi {
    private requestFactory: UsageAPIApiRequestFactory;
    private responseProcessor: UsageAPIApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UsageAPIApiRequestFactory,
        responseProcessor?: UsageAPIApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UsageAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UsageAPIApiResponseProcessor();
    }

    /**
     * An endpoint to obtain information on the previous 12 billing cycles.
     * Get all the previous 12 billing cycles.
     */
    public getBillingCyclesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<GetBillingCycles200Response>> {
        const requestContextPromise = this.requestFactory.getBillingCycles(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBillingCyclesWithHttpInfo(rsp)));
            }));
    }

    /**
     * An endpoint to obtain information on the previous 12 billing cycles.
     * Get all the previous 12 billing cycles.
     */
    public getBillingCycles(_options?: Configuration): Observable<GetBillingCycles200Response> {
        return this.getBillingCyclesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<GetBillingCycles200Response>) => apiResponse.data));
    }

    /**
     * An endpoint to obtain information on API usage for a specific billing cycle.
     * Specify the billing cycle to know the API usage.
     * @param billingCycle The date obtainable from the /billingCycles endpoint which is used as an identifier for the specific billing cycle you wish to obtain information on.
     */
    public getBillingUsageByBillingCycleWithHttpInfo(billingCycle: string, _options?: Configuration): Observable<HttpInfo<GetBillingUsageByBillingCycle200Response>> {
        const requestContextPromise = this.requestFactory.getBillingUsageByBillingCycle(billingCycle, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBillingUsageByBillingCycleWithHttpInfo(rsp)));
            }));
    }

    /**
     * An endpoint to obtain information on API usage for a specific billing cycle.
     * Specify the billing cycle to know the API usage.
     * @param billingCycle The date obtainable from the /billingCycles endpoint which is used as an identifier for the specific billing cycle you wish to obtain information on.
     */
    public getBillingUsageByBillingCycle(billingCycle: string, _options?: Configuration): Observable<GetBillingUsageByBillingCycle200Response> {
        return this.getBillingUsageByBillingCycleWithHttpInfo(billingCycle, _options).pipe(map((apiResponse: HttpInfo<GetBillingUsageByBillingCycle200Response>) => apiResponse.data));
    }

    /**
     * An endpoint to obtain information on API usage for a specific day.
     * Get API usage for a requested Date.
     * @param date The specific date for which you wish to obtain information on API usage.
     */
    public getDailyUsageByDateWithHttpInfo(date: string, _options?: Configuration): Observable<HttpInfo<GetDailyUsageByDate200Response>> {
        const requestContextPromise = this.requestFactory.getDailyUsageByDate(date, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDailyUsageByDateWithHttpInfo(rsp)));
            }));
    }

    /**
     * An endpoint to obtain information on API usage for a specific day.
     * Get API usage for a requested Date.
     * @param date The specific date for which you wish to obtain information on API usage.
     */
    public getDailyUsageByDate(date: string, _options?: Configuration): Observable<GetDailyUsageByDate200Response> {
        return this.getDailyUsageByDateWithHttpInfo(date, _options).pipe(map((apiResponse: HttpInfo<GetDailyUsageByDate200Response>) => apiResponse.data));
    }

}

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSerializer = void 0;
__exportStar(require("../models/AccessTokenIdListResponse"), exports);
__exportStar(require("../models/AccessTokenIdResponse"), exports);
__exportStar(require("../models/AccessTokenRequest"), exports);
__exportStar(require("../models/AccessTokenResponse"), exports);
__exportStar(require("../models/AddPacerCredentialRequest"), exports);
__exportStar(require("../models/AdditionalLevels"), exports);
__exportStar(require("../models/AdditionalLevels1"), exports);
__exportStar(require("../models/Address"), exports);
__exportStar(require("../models/AllCourtsPacerCaseLocatorCaseSearch200Response"), exports);
__exportStar(require("../models/AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerPageInfo"), exports);
__exportStar(require("../models/AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerReceipt"), exports);
__exportStar(require("../models/AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerSearchResultsArrayInner"), exports);
__exportStar(require("../models/AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerSearchResultsArrayInnerPacerContent"), exports);
__exportStar(require("../models/AllCourtsPacerCaseLocatorPartySearch200Response"), exports);
__exportStar(require("../models/AllCourtsPacerCaseLocatorPartySearch200ResponsePacerSearchResultsArrayInner"), exports);
__exportStar(require("../models/AllCourtsPacerCaseLocatorPartySearch200ResponsePacerSearchResultsArrayInnerPacerContent"), exports);
__exportStar(require("../models/AreaOfLaw"), exports);
__exportStar(require("../models/AreaOfLaw1"), exports);
__exportStar(require("../models/AreaOfLawResponse"), exports);
__exportStar(require("../models/AssociatedNormAttorney"), exports);
__exportStar(require("../models/AssociatedNormAttorney1"), exports);
__exportStar(require("../models/AssociatedNormAttorneyResponse"), exports);
__exportStar(require("../models/AssociatedNormAttorneyResponse1"), exports);
__exportStar(require("../models/AssociatedNormJudge"), exports);
__exportStar(require("../models/AssociatedNormJudge1"), exports);
__exportStar(require("../models/AssociatedNormJudgeResponse"), exports);
__exportStar(require("../models/AssociatedNormJudgeResponse1"), exports);
__exportStar(require("../models/AssociatedNormLawFirm"), exports);
__exportStar(require("../models/AssociatedNormLawFirm1"), exports);
__exportStar(require("../models/AssociatedNormLawFirmResponse"), exports);
__exportStar(require("../models/AssociatedNormLawFirmResponse1"), exports);
__exportStar(require("../models/AssociatedNormParty"), exports);
__exportStar(require("../models/AssociatedNormParty1"), exports);
__exportStar(require("../models/AssociatedNormPartyResponse"), exports);
__exportStar(require("../models/AssociatedNormPartyResponse1"), exports);
__exportStar(require("../models/AssociatedSoSPerson"), exports);
__exportStar(require("../models/AssociatedSoSPerson1"), exports);
__exportStar(require("../models/Attorney"), exports);
__exportStar(require("../models/AttorneyAnalyticsAPI"), exports);
__exportStar(require("../models/AttorneyAnalyticsAPI1"), exports);
__exportStar(require("../models/AttorneyLawFirm"), exports);
__exportStar(require("../models/AttorneyRepresentationType"), exports);
__exportStar(require("../models/AttorneyRepresentationType1"), exports);
__exportStar(require("../models/AttorneyRepresentationTypeResponse"), exports);
__exportStar(require("../models/AttorneyType"), exports);
__exportStar(require("../models/AttorneyType1"), exports);
__exportStar(require("../models/AttorneyTypeResponse"), exports);
__exportStar(require("../models/Attorneys"), exports);
__exportStar(require("../models/BarRecord"), exports);
__exportStar(require("../models/BarRecord1"), exports);
__exportStar(require("../models/BarRecordPreview"), exports);
__exportStar(require("../models/BarRecordPreview1"), exports);
__exportStar(require("../models/BarSourceData"), exports);
__exportStar(require("../models/BarSourceData1"), exports);
__exportStar(require("../models/BarSourceData1AdministrativeActionsArrayInner"), exports);
__exportStar(require("../models/BarSourceData1AdvancedDegreeArrayInner"), exports);
__exportStar(require("../models/BarSourceData1BarStatusArrayInner"), exports);
__exportStar(require("../models/BarSourceData1BoardCertificationsArrayInner"), exports);
__exportStar(require("../models/BarSourceData1CommitteesArrayInner"), exports);
__exportStar(require("../models/BarSourceData1CourtHistoryArrayInner"), exports);
__exportStar(require("../models/BarSourceData1CourtOfAdmissions"), exports);
__exportStar(require("../models/BarSourceData1DisciplinaryHistoryArrayInner"), exports);
__exportStar(require("../models/BarSourceData1DisciplineSummariesArrayInner"), exports);
__exportStar(require("../models/BarSourceData1EmploymentHistoryArrayInner"), exports);
__exportStar(require("../models/BarSourceData1FeesOptionsArrayInner"), exports);
__exportStar(require("../models/BarSourceData1InvolvementsArrayInner"), exports);
__exportStar(require("../models/BarSourceData1LawSchoolArrayInner"), exports);
__exportStar(require("../models/BarSourceData1Name"), exports);
__exportStar(require("../models/BarSourceData1OpenActionStatusArrayInner"), exports);
__exportStar(require("../models/BarSourceData1OtherJurisdictionArrayInner"), exports);
__exportStar(require("../models/BarSourceData1PublicHearingArrayInner"), exports);
__exportStar(require("../models/BarSourceData1ReasonForInactivation"), exports);
__exportStar(require("../models/BarSourceData1RelatedCasesArrayInner"), exports);
__exportStar(require("../models/BarSourceData1SourceInfo"), exports);
__exportStar(require("../models/BarSourceData1StatewideGrievanceCommitteeHistoryArrayInner"), exports);
__exportStar(require("../models/BarSourceData1StatusHistoryArrayInner"), exports);
__exportStar(require("../models/BarSourceData1TenYearDisciplineArrayInner"), exports);
__exportStar(require("../models/BillingCycleUsageResponse"), exports);
__exportStar(require("../models/BillingCyclesResponse"), exports);
__exportStar(require("../models/CallbackListResponse"), exports);
__exportStar(require("../models/Case"), exports);
__exportStar(require("../models/CaseAnalyticsAPI"), exports);
__exportStar(require("../models/CaseAnalyticsAPI1"), exports);
__exportStar(require("../models/CaseCauseOfAction"), exports);
__exportStar(require("../models/CaseCharge"), exports);
__exportStar(require("../models/CaseClass"), exports);
__exportStar(require("../models/CaseClass1"), exports);
__exportStar(require("../models/CaseClassCoverage"), exports);
__exportStar(require("../models/CaseClassResponse"), exports);
__exportStar(require("../models/CaseCountAnalyticsByAreaOfLaw"), exports);
__exportStar(require("../models/CaseCountAnalyticsByAreaOfLaw1"), exports);
__exportStar(require("../models/CaseCountAnalyticsByAreaOfLawResponse"), exports);
__exportStar(require("../models/CaseCountAnalyticsByAreaOfLawResponse1"), exports);
__exportStar(require("../models/CaseCountAnalyticsByCaseClass"), exports);
__exportStar(require("../models/CaseCountAnalyticsByCaseClass1"), exports);
__exportStar(require("../models/CaseCountAnalyticsByCaseClassResponse"), exports);
__exportStar(require("../models/CaseCountAnalyticsByCaseClassResponse1"), exports);
__exportStar(require("../models/CaseCountAnalyticsByCaseFiledDate"), exports);
__exportStar(require("../models/CaseCountAnalyticsByCaseFiledDate1"), exports);
__exportStar(require("../models/CaseCountAnalyticsByCaseFiledDateResponse"), exports);
__exportStar(require("../models/CaseCountAnalyticsByCaseFiledDateResponse1"), exports);
__exportStar(require("../models/CaseCountAnalyticsByCaseType"), exports);
__exportStar(require("../models/CaseCountAnalyticsByCaseType1"), exports);
__exportStar(require("../models/CaseCountAnalyticsByCaseTypeGroup"), exports);
__exportStar(require("../models/CaseCountAnalyticsByCaseTypeGroup1"), exports);
__exportStar(require("../models/CaseCountAnalyticsByCaseTypeGroupResponse"), exports);
__exportStar(require("../models/CaseCountAnalyticsByCaseTypeGroupResponse1"), exports);
__exportStar(require("../models/CaseCountAnalyticsByCaseTypeResponse"), exports);
__exportStar(require("../models/CaseCountAnalyticsByCaseTypeResponse1"), exports);
__exportStar(require("../models/CaseCountAnalyticsByCourt"), exports);
__exportStar(require("../models/CaseCountAnalyticsByCourt1"), exports);
__exportStar(require("../models/CaseCountAnalyticsByCourt1Geo"), exports);
__exportStar(require("../models/CaseCountAnalyticsByCourtLocation"), exports);
__exportStar(require("../models/CaseCountAnalyticsByCourtLocation1"), exports);
__exportStar(require("../models/CaseCountAnalyticsByCourtLocationResponse"), exports);
__exportStar(require("../models/CaseCountAnalyticsByCourtLocationResponse1"), exports);
__exportStar(require("../models/CaseCountAnalyticsByCourtResponse"), exports);
__exportStar(require("../models/CaseCountAnalyticsByCourtResponse1"), exports);
__exportStar(require("../models/CaseCountAnalyticsByCourtSystem"), exports);
__exportStar(require("../models/CaseCountAnalyticsByCourtSystem1"), exports);
__exportStar(require("../models/CaseCountAnalyticsByCourtSystemResponse"), exports);
__exportStar(require("../models/CaseCountAnalyticsByCourtSystemResponse1"), exports);
__exportStar(require("../models/CaseCountAnalyticsByCourtType"), exports);
__exportStar(require("../models/CaseCountAnalyticsByCourtType1"), exports);
__exportStar(require("../models/CaseCountAnalyticsByCourtTypeResponse"), exports);
__exportStar(require("../models/CaseCountAnalyticsByCourtTypeResponse1"), exports);
__exportStar(require("../models/CaseCountAnalyticsByJurisdictionGeo"), exports);
__exportStar(require("../models/CaseCountAnalyticsByJurisdictionGeo1"), exports);
__exportStar(require("../models/CaseCountAnalyticsByJurisdictionGeoResponse"), exports);
__exportStar(require("../models/CaseCountAnalyticsByJurisdictionGeoResponse1"), exports);
__exportStar(require("../models/CaseCountAnalyticsByNormAttorney"), exports);
__exportStar(require("../models/CaseCountAnalyticsByNormAttorney1"), exports);
__exportStar(require("../models/CaseCountAnalyticsByNormAttorneyResponse"), exports);
__exportStar(require("../models/CaseCountAnalyticsByNormAttorneyResponse1"), exports);
__exportStar(require("../models/CaseCountAnalyticsByNormJudge"), exports);
__exportStar(require("../models/CaseCountAnalyticsByNormJudge1"), exports);
__exportStar(require("../models/CaseCountAnalyticsByNormJudgeResponse"), exports);
__exportStar(require("../models/CaseCountAnalyticsByNormJudgeResponse1"), exports);
__exportStar(require("../models/CaseCountAnalyticsByNormLawFirm"), exports);
__exportStar(require("../models/CaseCountAnalyticsByNormLawFirm1"), exports);
__exportStar(require("../models/CaseCountAnalyticsByNormLawFirmResponse"), exports);
__exportStar(require("../models/CaseCountAnalyticsByNormLawFirmResponse1"), exports);
__exportStar(require("../models/CaseCountAnalyticsByNormParty"), exports);
__exportStar(require("../models/CaseCountAnalyticsByNormParty1"), exports);
__exportStar(require("../models/CaseCountAnalyticsByNormPartyResponse"), exports);
__exportStar(require("../models/CaseCountAnalyticsByNormPartyResponse1"), exports);
__exportStar(require("../models/CaseCountAnalyticsByPartyRole"), exports);
__exportStar(require("../models/CaseCountAnalyticsByPartyRole1"), exports);
__exportStar(require("../models/CaseCountAnalyticsByPartyRoleGroup"), exports);
__exportStar(require("../models/CaseCountAnalyticsByPartyRoleGroup1"), exports);
__exportStar(require("../models/CaseCountAnalyticsByPartyRoleGroupResponse"), exports);
__exportStar(require("../models/CaseCountAnalyticsByPartyRoleGroupResponse1"), exports);
__exportStar(require("../models/CaseCountAnalyticsByPartyRoleResponse"), exports);
__exportStar(require("../models/CaseCountAnalyticsByPartyRoleResponse1"), exports);
__exportStar(require("../models/CaseDocument"), exports);
__exportStar(require("../models/CaseDocumentOrderCallback"), exports);
__exportStar(require("../models/CaseDocumentOrderCallbackListResponse"), exports);
__exportStar(require("../models/CaseDocumentOrderPacerOptions"), exports);
__exportStar(require("../models/CaseDocumentOrderRequest"), exports);
__exportStar(require("../models/CaseDocuments"), exports);
__exportStar(require("../models/CaseExportCallback"), exports);
__exportStar(require("../models/CaseExportCallbackListResponse"), exports);
__exportStar(require("../models/CaseRelationshipType"), exports);
__exportStar(require("../models/CaseRelationshipType1"), exports);
__exportStar(require("../models/CaseRelationshipTypeResponse"), exports);
__exportStar(require("../models/CaseSearchResponse"), exports);
__exportStar(require("../models/CaseSearchResult"), exports);
__exportStar(require("../models/CaseSearchResult1"), exports);
__exportStar(require("../models/CaseSearchResult1MatchedObjectArrayInner"), exports);
__exportStar(require("../models/CaseStats"), exports);
__exportStar(require("../models/CaseStatus"), exports);
__exportStar(require("../models/CaseStatus1"), exports);
__exportStar(require("../models/CaseStatusGroup"), exports);
__exportStar(require("../models/CaseStatusGroup1"), exports);
__exportStar(require("../models/CaseStatusGroupResponse"), exports);
__exportStar(require("../models/CaseStatusResponse"), exports);
__exportStar(require("../models/CaseTimeline"), exports);
__exportStar(require("../models/CaseTimeline1"), exports);
__exportStar(require("../models/CaseTrack"), exports);
__exportStar(require("../models/CaseTrackListResponse"), exports);
__exportStar(require("../models/CaseTrackPostRequest"), exports);
__exportStar(require("../models/CaseTrackPostRequestLastTrackedDetails"), exports);
__exportStar(require("../models/CaseTrackPreview"), exports);
__exportStar(require("../models/CaseTrackRequest"), exports);
__exportStar(require("../models/CaseTrackSchedule"), exports);
__exportStar(require("../models/CaseType"), exports);
__exportStar(require("../models/CaseType1"), exports);
__exportStar(require("../models/CaseTypeGroup"), exports);
__exportStar(require("../models/CaseTypeGroup1"), exports);
__exportStar(require("../models/CaseTypeGroupResponse"), exports);
__exportStar(require("../models/CaseTypeResponse"), exports);
__exportStar(require("../models/CaseUpdate"), exports);
__exportStar(require("../models/CaseUpdateListResponse"), exports);
__exportStar(require("../models/CaseUpdatePacerOptions"), exports);
__exportStar(require("../models/CaseUpdatePacerOptionsResponse"), exports);
__exportStar(require("../models/CaseUpdatePacerOptionsResponse1"), exports);
__exportStar(require("../models/CaseUpdatePreview"), exports);
__exportStar(require("../models/CaseUpdateRequest"), exports);
__exportStar(require("../models/CauseOfAction"), exports);
__exportStar(require("../models/CauseOfAction1"), exports);
__exportStar(require("../models/CauseOfActionAdditionalData"), exports);
__exportStar(require("../models/CauseOfActionAdditionalData1"), exports);
__exportStar(require("../models/CauseOfActionAdditionalDataResponse"), exports);
__exportStar(require("../models/CauseOfActionGroup"), exports);
__exportStar(require("../models/CauseOfActionGroup1"), exports);
__exportStar(require("../models/CauseOfActionGroupResponse"), exports);
__exportStar(require("../models/CauseOfActionResponse"), exports);
__exportStar(require("../models/Charge"), exports);
__exportStar(require("../models/Charge1"), exports);
__exportStar(require("../models/ChargeAdditionalData"), exports);
__exportStar(require("../models/ChargeAdditionalData1"), exports);
__exportStar(require("../models/ChargeAdditionalDataResponse"), exports);
__exportStar(require("../models/ChargeDegree"), exports);
__exportStar(require("../models/ChargeDegree1"), exports);
__exportStar(require("../models/ChargeDegreeResponse"), exports);
__exportStar(require("../models/ChargeGroup"), exports);
__exportStar(require("../models/ChargeGroup1"), exports);
__exportStar(require("../models/ChargeGroupResponse"), exports);
__exportStar(require("../models/ChargeResponse"), exports);
__exportStar(require("../models/ChargeSeverity"), exports);
__exportStar(require("../models/ChargeSeverity1"), exports);
__exportStar(require("../models/ChargeSeverityResponse"), exports);
__exportStar(require("../models/Contact"), exports);
__exportStar(require("../models/Court"), exports);
__exportStar(require("../models/Court1"), exports);
__exportStar(require("../models/CourtCoverage"), exports);
__exportStar(require("../models/CourtLocation"), exports);
__exportStar(require("../models/CourtLocation1"), exports);
__exportStar(require("../models/CourtLocationResponse"), exports);
__exportStar(require("../models/CourtLocationResponse1"), exports);
__exportStar(require("../models/CourtResponse"), exports);
__exportStar(require("../models/CourtServiceStatus"), exports);
__exportStar(require("../models/CourtServiceStatusResponse"), exports);
__exportStar(require("../models/CourtSystem"), exports);
__exportStar(require("../models/CourtSystem1"), exports);
__exportStar(require("../models/CourtSystemResponse"), exports);
__exportStar(require("../models/CourtType"), exports);
__exportStar(require("../models/CourtType1"), exports);
__exportStar(require("../models/CourtTypeResponse"), exports);
__exportStar(require("../models/DailyUsageResponse"), exports);
__exportStar(require("../models/DocketEntries"), exports);
__exportStar(require("../models/DocketEntry"), exports);
__exportStar(require("../models/DocketEntryPrimaryDocuments"), exports);
__exportStar(require("../models/DocketEntrySecondaryDocuments"), exports);
__exportStar(require("../models/DocumentDownload"), exports);
__exportStar(require("../models/Email"), exports);
__exportStar(require("../models/Exception"), exports);
__exportStar(require("../models/Exception1"), exports);
__exportStar(require("../models/ExportCase200Response"), exports);
__exportStar(require("../models/ExportFile"), exports);
__exportStar(require("../models/ExportFile1"), exports);
__exportStar(require("../models/ExtractedFields"), exports);
__exportStar(require("../models/GenerateNewToken200Response"), exports);
__exportStar(require("../models/GenerateNewTokenRequest"), exports);
__exportStar(require("../models/GetAreasOfLaw200Response"), exports);
__exportStar(require("../models/GetAttorneyRepresentationTypes200Response"), exports);
__exportStar(require("../models/GetAttorneyTypes200Response"), exports);
__exportStar(require("../models/GetBillingCycles200Response"), exports);
__exportStar(require("../models/GetBillingUsageByBillingCycle200Response"), exports);
__exportStar(require("../models/GetBillingUsageByBillingCycle200ResponseApiCallsBillable"), exports);
__exportStar(require("../models/GetBillingUsageByBillingCycle200ResponseApiCallsCredited"), exports);
__exportStar(require("../models/GetBillingUsageByBillingCycle200ResponseApiCallsMade"), exports);
__exportStar(require("../models/GetBillingUsageByBillingCycle200ResponseBillingCycle"), exports);
__exportStar(require("../models/GetCallbacks200Response"), exports);
__exportStar(require("../models/GetCallbacks200ResponseCaseDocumentOrderCallbacks"), exports);
__exportStar(require("../models/GetCallbacks200ResponseCaseExportCallbacks"), exports);
__exportStar(require("../models/GetCase200Response"), exports);
__exportStar(require("../models/GetCase200ResponseAttorneys"), exports);
__exportStar(require("../models/GetCase200ResponseAttorneysAttorneyArrayInner"), exports);
__exportStar(require("../models/GetCase200ResponseAttorneysAttorneyArrayInnerAttorneyLawFirmArrayInner"), exports);
__exportStar(require("../models/GetCase200ResponseCaseDocuments"), exports);
__exportStar(require("../models/GetCase200ResponseCaseStats"), exports);
__exportStar(require("../models/GetCase200ResponseCauseOfActionArrayInner"), exports);
__exportStar(require("../models/GetCase200ResponseChargeArrayInner"), exports);
__exportStar(require("../models/GetCase200ResponseDocketEntries"), exports);
__exportStar(require("../models/GetCase200ResponseDocketEntriesDocketEntryArrayInner"), exports);
__exportStar(require("../models/GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments"), exports);
__exportStar(require("../models/GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner"), exports);
__exportStar(require("../models/GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerPreviewDocument"), exports);
__exportStar(require("../models/GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments"), exports);
__exportStar(require("../models/GetCase200ResponseDocketEntriesDocketEntryArrayInnerReferencedDocketNumberArrayInner"), exports);
__exportStar(require("../models/GetCase200ResponseHearings"), exports);
__exportStar(require("../models/GetCase200ResponseHearingsHearingArrayInner"), exports);
__exportStar(require("../models/GetCase200ResponseJudges"), exports);
__exportStar(require("../models/GetCase200ResponseJudgesJudgeArrayInner"), exports);
__exportStar(require("../models/GetCase200ResponseParties"), exports);
__exportStar(require("../models/GetCase200ResponsePartiesPartyArrayInner"), exports);
__exportStar(require("../models/GetCase200ResponsePartiesPartyArrayInnerContact"), exports);
__exportStar(require("../models/GetCase200ResponsePartiesPartyArrayInnerContactAddressArrayInner"), exports);
__exportStar(require("../models/GetCase200ResponsePartiesPartyArrayInnerContactEmailArrayInner"), exports);
__exportStar(require("../models/GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInner"), exports);
__exportStar(require("../models/GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations"), exports);
__exportStar(require("../models/GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociationsPartyAttorneyAssociationArrayInner"), exports);
__exportStar(require("../models/GetCase200ResponseRelatedCases"), exports);
__exportStar(require("../models/GetCase200ResponseRelatedCasesRelatedCaseArrayInner"), exports);
__exportStar(require("../models/GetCase200ResponseSourceCaseData"), exports);
__exportStar(require("../models/GetCase200ResponseSourceCaseDataNatureOfSuitArrayInner"), exports);
__exportStar(require("../models/GetCase200ResponseSourceCaseDataSourceCauseOfActionArrayInner"), exports);
__exportStar(require("../models/GetCase200ResponseSourceCaseDataSourceChargeArrayInner"), exports);
__exportStar(require("../models/GetCase200ResponseSourceCaseDataSourceChargeArrayInnerSourceChargeAdditionalDataArrayInner"), exports);
__exportStar(require("../models/GetCase200ResponseSourceCaseDataSourcePageDataInner"), exports);
__exportStar(require("../models/GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceData"), exports);
__exportStar(require("../models/GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataExtractedFields"), exports);
__exportStar(require("../models/GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInner"), exports);
__exportStar(require("../models/GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInnerChildArrayInner"), exports);
__exportStar(require("../models/GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInnerChildArrayInnerChildArrayInner"), exports);
__exportStar(require("../models/GetCaseDocumentDownloadById200Response"), exports);
__exportStar(require("../models/GetCaseDocumentOrderCallbacks200Response"), exports);
__exportStar(require("../models/GetCaseExportCallbacks200Response"), exports);
__exportStar(require("../models/GetCaseRelationshipTypes200Response"), exports);
__exportStar(require("../models/GetCaseStatusGroups200Response"), exports);
__exportStar(require("../models/GetCaseTracks200Response"), exports);
__exportStar(require("../models/GetCaseTracks200ResponseCaseTrackPreviewArrayInner"), exports);
__exportStar(require("../models/GetCaseTypeGroups200Response"), exports);
__exportStar(require("../models/GetCaseTypes200Response"), exports);
__exportStar(require("../models/GetCaseUpdates200Response"), exports);
__exportStar(require("../models/GetCaseUpdates200ResponseCaseUpdatePreviewArrayInner"), exports);
__exportStar(require("../models/GetCasesClass200Response"), exports);
__exportStar(require("../models/GetCasesStatus200Response"), exports);
__exportStar(require("../models/GetCausesOfAction200Response"), exports);
__exportStar(require("../models/GetCausesOfActionAdditionalData200Response"), exports);
__exportStar(require("../models/GetCausesOfActionGroup200Response"), exports);
__exportStar(require("../models/GetChargeGroups200Response"), exports);
__exportStar(require("../models/GetCharges200Response"), exports);
__exportStar(require("../models/GetChargesAdditionalData200Response"), exports);
__exportStar(require("../models/GetChargesDegree200Response"), exports);
__exportStar(require("../models/GetChargesSeverity200Response"), exports);
__exportStar(require("../models/GetCourtCoverage200Response"), exports);
__exportStar(require("../models/GetCourtCoverage200ResponseCaseClassCoverageArrayInner"), exports);
__exportStar(require("../models/GetCourtSystems200Response"), exports);
__exportStar(require("../models/GetCourtTypes200Response"), exports);
__exportStar(require("../models/GetCourts200Response"), exports);
__exportStar(require("../models/GetCourtsServiceStatus200Response"), exports);
__exportStar(require("../models/GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner"), exports);
__exportStar(require("../models/GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus"), exports);
__exportStar(require("../models/GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetails"), exports);
__exportStar(require("../models/GetDailyUsageByDate200Response"), exports);
__exportStar(require("../models/GetJudgeTypes200Response"), exports);
__exportStar(require("../models/GetPacerCredential200Response"), exports);
__exportStar(require("../models/GetPacerCredential200ResponsePacerCredentialArrayInner"), exports);
__exportStar(require("../models/GetPartyRoleGroups200Response"), exports);
__exportStar(require("../models/GetPartyRoles200Response"), exports);
__exportStar(require("../models/Hearing"), exports);
__exportStar(require("../models/Hearings"), exports);
__exportStar(require("../models/ImportPacerCaseByCourtUsingCaseNumber200Response"), exports);
__exportStar(require("../models/ImportPacerCaseByCourtUsingCaseNumber200ResponsePacerImportCaseResultsArrayInner"), exports);
__exportStar(require("../models/Individual"), exports);
__exportStar(require("../models/InvalidateAccessTokenRequest"), exports);
__exportStar(require("../models/InvalidateTokenRequest"), exports);
__exportStar(require("../models/Judge"), exports);
__exportStar(require("../models/JudgeAnalyticsAPI"), exports);
__exportStar(require("../models/JudgeAnalyticsAPI1"), exports);
__exportStar(require("../models/JudgeType"), exports);
__exportStar(require("../models/JudgeType1"), exports);
__exportStar(require("../models/JudgeTypeResponse"), exports);
__exportStar(require("../models/Judges"), exports);
__exportStar(require("../models/JurisdictionGeo"), exports);
__exportStar(require("../models/JurisdictionGeo1"), exports);
__exportStar(require("../models/JurisdictionGeoResponse"), exports);
__exportStar(require("../models/JurisdictionGeoResponse1"), exports);
__exportStar(require("../models/LastTrackedDetails"), exports);
__exportStar(require("../models/LawFirmAnalyticsAPI"), exports);
__exportStar(require("../models/LawFirmAnalyticsAPI1"), exports);
__exportStar(require("../models/ListAllTokenIds200Response"), exports);
__exportStar(require("../models/ListAllTokenIds200ResponseAccessTokenIdArrayInner"), exports);
__exportStar(require("../models/MatchedObject"), exports);
__exportStar(require("../models/NatureOfSuit"), exports);
__exportStar(require("../models/NormAttorney"), exports);
__exportStar(require("../models/NormAttorney1"), exports);
__exportStar(require("../models/NormAttorneySearchResponse"), exports);
__exportStar(require("../models/NormAttorneySearchResult"), exports);
__exportStar(require("../models/NormCorporateGroup"), exports);
__exportStar(require("../models/NormCorporateGroup1"), exports);
__exportStar(require("../models/NormJudge"), exports);
__exportStar(require("../models/NormJudge1"), exports);
__exportStar(require("../models/NormJudgePublicData"), exports);
__exportStar(require("../models/NormJudgePublicData1"), exports);
__exportStar(require("../models/NormJudgePublicData1AbaRatings"), exports);
__exportStar(require("../models/NormJudgePublicData1Bio"), exports);
__exportStar(require("../models/NormJudgePublicData1EducationArrayInner"), exports);
__exportStar(require("../models/NormJudgePublicData1JudicialSource"), exports);
__exportStar(require("../models/NormJudgePublicData1NameHistoryArrayInner"), exports);
__exportStar(require("../models/NormJudgeSearchResponse"), exports);
__exportStar(require("../models/NormJudgeSearchResult"), exports);
__exportStar(require("../models/NormLawFirm"), exports);
__exportStar(require("../models/NormLawFirm1"), exports);
__exportStar(require("../models/NormLawFirmSearchResponse"), exports);
__exportStar(require("../models/NormLawFirmSearchResult"), exports);
__exportStar(require("../models/NormOrganization"), exports);
__exportStar(require("../models/NormOrganization1"), exports);
__exportStar(require("../models/NormOrganization1TickerArrayInner"), exports);
__exportStar(require("../models/NormParty"), exports);
__exportStar(require("../models/NormParty1"), exports);
__exportStar(require("../models/NormPartySearchResponse"), exports);
__exportStar(require("../models/NormPartySearchResult"), exports);
__exportStar(require("../models/OrderCaseDocument200Response"), exports);
__exportStar(require("../models/OrderCaseDocumentRequest"), exports);
__exportStar(require("../models/OrderCaseDocumentRequestPacerOptions"), exports);
__exportStar(require("../models/PACERCaseSearchContent"), exports);
__exportStar(require("../models/PACERCaseSearchResults"), exports);
__exportStar(require("../models/PACERImportCase"), exports);
__exportStar(require("../models/PACERImportCaseResults"), exports);
__exportStar(require("../models/PACERPartySearchContent"), exports);
__exportStar(require("../models/PACERPartySearchResults"), exports);
__exportStar(require("../models/PACERSearchPageInfo"), exports);
__exportStar(require("../models/PACERSearchReceipt"), exports);
__exportStar(require("../models/PCLCase"), exports);
__exportStar(require("../models/PCLParty"), exports);
__exportStar(require("../models/PacerCredential"), exports);
__exportStar(require("../models/PacerCredentialListResponse"), exports);
__exportStar(require("../models/PacerCredentialRequest"), exports);
__exportStar(require("../models/Parties"), exports);
__exportStar(require("../models/Party"), exports);
__exportStar(require("../models/PartyAnalyticsAPI"), exports);
__exportStar(require("../models/PartyAnalyticsAPI1"), exports);
__exportStar(require("../models/PartyAttorneyAssociation"), exports);
__exportStar(require("../models/PartyAttorneyAssociations"), exports);
__exportStar(require("../models/PartyRole"), exports);
__exportStar(require("../models/PartyRole1"), exports);
__exportStar(require("../models/PartyRoleGroup"), exports);
__exportStar(require("../models/PartyRoleGroup1"), exports);
__exportStar(require("../models/PartyRoleGroupResponse"), exports);
__exportStar(require("../models/PartyRoleResponse"), exports);
__exportStar(require("../models/Phone"), exports);
__exportStar(require("../models/PossibleNormAttorney"), exports);
__exportStar(require("../models/PossibleNormAttorney1"), exports);
__exportStar(require("../models/PossibleNormAttorney1ScoreConstituents"), exports);
__exportStar(require("../models/PossibleNormJudge"), exports);
__exportStar(require("../models/PossibleNormJudge1"), exports);
__exportStar(require("../models/PossibleNormJudge1ScoreConstituents"), exports);
__exportStar(require("../models/PossibleNormLawFirm"), exports);
__exportStar(require("../models/PossibleNormLawFirm1"), exports);
__exportStar(require("../models/PossibleNormLawFirm1ScoreConstituents"), exports);
__exportStar(require("../models/PossibleNormLawFirm1SourceDetails"), exports);
__exportStar(require("../models/PossibleNormParty"), exports);
__exportStar(require("../models/PossibleNormParty1"), exports);
__exportStar(require("../models/PossibleNormParty1ScoreConstituents"), exports);
__exportStar(require("../models/PreviewDocument"), exports);
__exportStar(require("../models/RawOrderedData"), exports);
__exportStar(require("../models/RawOrderedDataChild"), exports);
__exportStar(require("../models/ReferencedDocketNumber"), exports);
__exportStar(require("../models/RelatedCase"), exports);
__exportStar(require("../models/RelatedCases"), exports);
__exportStar(require("../models/RelatedNormParty"), exports);
__exportStar(require("../models/RelatedNormParty1"), exports);
__exportStar(require("../models/SOSAssociatedNormOrganization"), exports);
__exportStar(require("../models/SOSAssociatedNormOrganization1"), exports);
__exportStar(require("../models/SOSData"), exports);
__exportStar(require("../models/SOSData1"), exports);
__exportStar(require("../models/SOSDataPreview"), exports);
__exportStar(require("../models/SOSDataPreview1"), exports);
__exportStar(require("../models/SOSNameChange"), exports);
__exportStar(require("../models/SOSNameChange1"), exports);
__exportStar(require("../models/Schedule"), exports);
__exportStar(require("../models/Schedule1"), exports);
__exportStar(require("../models/Schedule2"), exports);
__exportStar(require("../models/SearchCases200Response"), exports);
__exportStar(require("../models/SearchNormalizedAttorneys200Response"), exports);
__exportStar(require("../models/SearchNormalizedAttorneys200ResponseNormAttorneySearchResultArrayInner"), exports);
__exportStar(require("../models/SearchNormalizedJudges200Response"), exports);
__exportStar(require("../models/SearchNormalizedJudges200ResponseNormJudgeSearchResultArrayInner"), exports);
__exportStar(require("../models/SearchNormalizedLawFirms200Response"), exports);
__exportStar(require("../models/SearchNormalizedLawFirms200ResponseNormLawFirmSearchResultArrayInner"), exports);
__exportStar(require("../models/SearchNormalizedParties200Response"), exports);
__exportStar(require("../models/SearchNormalizedParties200ResponseNormPartySearchResultArrayInner"), exports);
__exportStar(require("../models/ServiceHistory"), exports);
__exportStar(require("../models/ServiceHistory1"), exports);
__exportStar(require("../models/ServiceStatus"), exports);
__exportStar(require("../models/ServiceStatusDownDetails"), exports);
__exportStar(require("../models/SimilarNormAttorney"), exports);
__exportStar(require("../models/SimilarNormAttorney1"), exports);
__exportStar(require("../models/SourceCaseData"), exports);
__exportStar(require("../models/SourceCauseOfAction"), exports);
__exportStar(require("../models/SourceCharge"), exports);
__exportStar(require("../models/SourceChargeAdditionalData"), exports);
__exportStar(require("../models/SourcePageData"), exports);
__exportStar(require("../models/SourceStructuredData"), exports);
__exportStar(require("../models/Success"), exports);
__exportStar(require("../models/Success1"), exports);
__exportStar(require("../models/TrackCaseRequest"), exports);
__exportStar(require("../models/UpdateCase200Response"), exports);
__exportStar(require("../models/UpdateCaseRequest"), exports);
__exportStar(require("../models/UpdateCaseRequestPacerOptions"), exports);
__exportStar(require("../models/UpdateCaseRequestPacerOptionsAdditionalPageArrayInner"), exports);
var AccessTokenIdListResponse_1 = require("../models/AccessTokenIdListResponse");
var AccessTokenIdResponse_1 = require("../models/AccessTokenIdResponse");
var AccessTokenRequest_1 = require("../models/AccessTokenRequest");
var AccessTokenResponse_1 = require("../models/AccessTokenResponse");
var AddPacerCredentialRequest_1 = require("../models/AddPacerCredentialRequest");
var AdditionalLevels_1 = require("../models/AdditionalLevels");
var AdditionalLevels1_1 = require("../models/AdditionalLevels1");
var Address_1 = require("../models/Address");
var AllCourtsPacerCaseLocatorCaseSearch200Response_1 = require("../models/AllCourtsPacerCaseLocatorCaseSearch200Response");
var AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerPageInfo_1 = require("../models/AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerPageInfo");
var AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerReceipt_1 = require("../models/AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerReceipt");
var AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerSearchResultsArrayInner_1 = require("../models/AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerSearchResultsArrayInner");
var AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerSearchResultsArrayInnerPacerContent_1 = require("../models/AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerSearchResultsArrayInnerPacerContent");
var AllCourtsPacerCaseLocatorPartySearch200Response_1 = require("../models/AllCourtsPacerCaseLocatorPartySearch200Response");
var AllCourtsPacerCaseLocatorPartySearch200ResponsePacerSearchResultsArrayInner_1 = require("../models/AllCourtsPacerCaseLocatorPartySearch200ResponsePacerSearchResultsArrayInner");
var AllCourtsPacerCaseLocatorPartySearch200ResponsePacerSearchResultsArrayInnerPacerContent_1 = require("../models/AllCourtsPacerCaseLocatorPartySearch200ResponsePacerSearchResultsArrayInnerPacerContent");
var AreaOfLaw_1 = require("../models/AreaOfLaw");
var AreaOfLaw1_1 = require("../models/AreaOfLaw1");
var AreaOfLawResponse_1 = require("../models/AreaOfLawResponse");
var AssociatedNormAttorney_1 = require("../models/AssociatedNormAttorney");
var AssociatedNormAttorney1_1 = require("../models/AssociatedNormAttorney1");
var AssociatedNormAttorneyResponse_1 = require("../models/AssociatedNormAttorneyResponse");
var AssociatedNormAttorneyResponse1_1 = require("../models/AssociatedNormAttorneyResponse1");
var AssociatedNormJudge_1 = require("../models/AssociatedNormJudge");
var AssociatedNormJudge1_1 = require("../models/AssociatedNormJudge1");
var AssociatedNormJudgeResponse_1 = require("../models/AssociatedNormJudgeResponse");
var AssociatedNormJudgeResponse1_1 = require("../models/AssociatedNormJudgeResponse1");
var AssociatedNormLawFirm_1 = require("../models/AssociatedNormLawFirm");
var AssociatedNormLawFirm1_1 = require("../models/AssociatedNormLawFirm1");
var AssociatedNormLawFirmResponse_1 = require("../models/AssociatedNormLawFirmResponse");
var AssociatedNormLawFirmResponse1_1 = require("../models/AssociatedNormLawFirmResponse1");
var AssociatedNormParty_1 = require("../models/AssociatedNormParty");
var AssociatedNormParty1_1 = require("../models/AssociatedNormParty1");
var AssociatedNormPartyResponse_1 = require("../models/AssociatedNormPartyResponse");
var AssociatedNormPartyResponse1_1 = require("../models/AssociatedNormPartyResponse1");
var AssociatedSoSPerson_1 = require("../models/AssociatedSoSPerson");
var AssociatedSoSPerson1_1 = require("../models/AssociatedSoSPerson1");
var Attorney_1 = require("../models/Attorney");
var AttorneyAnalyticsAPI_1 = require("../models/AttorneyAnalyticsAPI");
var AttorneyAnalyticsAPI1_1 = require("../models/AttorneyAnalyticsAPI1");
var AttorneyLawFirm_1 = require("../models/AttorneyLawFirm");
var AttorneyRepresentationType_1 = require("../models/AttorneyRepresentationType");
var AttorneyRepresentationType1_1 = require("../models/AttorneyRepresentationType1");
var AttorneyRepresentationTypeResponse_1 = require("../models/AttorneyRepresentationTypeResponse");
var AttorneyType_1 = require("../models/AttorneyType");
var AttorneyType1_1 = require("../models/AttorneyType1");
var AttorneyTypeResponse_1 = require("../models/AttorneyTypeResponse");
var Attorneys_1 = require("../models/Attorneys");
var BarRecord_1 = require("../models/BarRecord");
var BarRecord1_1 = require("../models/BarRecord1");
var BarRecordPreview_1 = require("../models/BarRecordPreview");
var BarRecordPreview1_1 = require("../models/BarRecordPreview1");
var BarSourceData_1 = require("../models/BarSourceData");
var BarSourceData1_1 = require("../models/BarSourceData1");
var BarSourceData1AdministrativeActionsArrayInner_1 = require("../models/BarSourceData1AdministrativeActionsArrayInner");
var BarSourceData1AdvancedDegreeArrayInner_1 = require("../models/BarSourceData1AdvancedDegreeArrayInner");
var BarSourceData1BarStatusArrayInner_1 = require("../models/BarSourceData1BarStatusArrayInner");
var BarSourceData1BoardCertificationsArrayInner_1 = require("../models/BarSourceData1BoardCertificationsArrayInner");
var BarSourceData1CommitteesArrayInner_1 = require("../models/BarSourceData1CommitteesArrayInner");
var BarSourceData1CourtHistoryArrayInner_1 = require("../models/BarSourceData1CourtHistoryArrayInner");
var BarSourceData1CourtOfAdmissions_1 = require("../models/BarSourceData1CourtOfAdmissions");
var BarSourceData1DisciplinaryHistoryArrayInner_1 = require("../models/BarSourceData1DisciplinaryHistoryArrayInner");
var BarSourceData1DisciplineSummariesArrayInner_1 = require("../models/BarSourceData1DisciplineSummariesArrayInner");
var BarSourceData1EmploymentHistoryArrayInner_1 = require("../models/BarSourceData1EmploymentHistoryArrayInner");
var BarSourceData1FeesOptionsArrayInner_1 = require("../models/BarSourceData1FeesOptionsArrayInner");
var BarSourceData1InvolvementsArrayInner_1 = require("../models/BarSourceData1InvolvementsArrayInner");
var BarSourceData1LawSchoolArrayInner_1 = require("../models/BarSourceData1LawSchoolArrayInner");
var BarSourceData1Name_1 = require("../models/BarSourceData1Name");
var BarSourceData1OpenActionStatusArrayInner_1 = require("../models/BarSourceData1OpenActionStatusArrayInner");
var BarSourceData1OtherJurisdictionArrayInner_1 = require("../models/BarSourceData1OtherJurisdictionArrayInner");
var BarSourceData1PublicHearingArrayInner_1 = require("../models/BarSourceData1PublicHearingArrayInner");
var BarSourceData1ReasonForInactivation_1 = require("../models/BarSourceData1ReasonForInactivation");
var BarSourceData1RelatedCasesArrayInner_1 = require("../models/BarSourceData1RelatedCasesArrayInner");
var BarSourceData1SourceInfo_1 = require("../models/BarSourceData1SourceInfo");
var BarSourceData1StatewideGrievanceCommitteeHistoryArrayInner_1 = require("../models/BarSourceData1StatewideGrievanceCommitteeHistoryArrayInner");
var BarSourceData1StatusHistoryArrayInner_1 = require("../models/BarSourceData1StatusHistoryArrayInner");
var BarSourceData1TenYearDisciplineArrayInner_1 = require("../models/BarSourceData1TenYearDisciplineArrayInner");
var BillingCycleUsageResponse_1 = require("../models/BillingCycleUsageResponse");
var BillingCyclesResponse_1 = require("../models/BillingCyclesResponse");
var CallbackListResponse_1 = require("../models/CallbackListResponse");
var Case_1 = require("../models/Case");
var CaseAnalyticsAPI_1 = require("../models/CaseAnalyticsAPI");
var CaseAnalyticsAPI1_1 = require("../models/CaseAnalyticsAPI1");
var CaseCauseOfAction_1 = require("../models/CaseCauseOfAction");
var CaseCharge_1 = require("../models/CaseCharge");
var CaseClass_1 = require("../models/CaseClass");
var CaseClass1_1 = require("../models/CaseClass1");
var CaseClassCoverage_1 = require("../models/CaseClassCoverage");
var CaseClassResponse_1 = require("../models/CaseClassResponse");
var CaseCountAnalyticsByAreaOfLaw_1 = require("../models/CaseCountAnalyticsByAreaOfLaw");
var CaseCountAnalyticsByAreaOfLaw1_1 = require("../models/CaseCountAnalyticsByAreaOfLaw1");
var CaseCountAnalyticsByAreaOfLawResponse_1 = require("../models/CaseCountAnalyticsByAreaOfLawResponse");
var CaseCountAnalyticsByAreaOfLawResponse1_1 = require("../models/CaseCountAnalyticsByAreaOfLawResponse1");
var CaseCountAnalyticsByCaseClass_1 = require("../models/CaseCountAnalyticsByCaseClass");
var CaseCountAnalyticsByCaseClass1_1 = require("../models/CaseCountAnalyticsByCaseClass1");
var CaseCountAnalyticsByCaseClassResponse_1 = require("../models/CaseCountAnalyticsByCaseClassResponse");
var CaseCountAnalyticsByCaseClassResponse1_1 = require("../models/CaseCountAnalyticsByCaseClassResponse1");
var CaseCountAnalyticsByCaseFiledDate_1 = require("../models/CaseCountAnalyticsByCaseFiledDate");
var CaseCountAnalyticsByCaseFiledDate1_1 = require("../models/CaseCountAnalyticsByCaseFiledDate1");
var CaseCountAnalyticsByCaseFiledDateResponse_1 = require("../models/CaseCountAnalyticsByCaseFiledDateResponse");
var CaseCountAnalyticsByCaseFiledDateResponse1_1 = require("../models/CaseCountAnalyticsByCaseFiledDateResponse1");
var CaseCountAnalyticsByCaseType_1 = require("../models/CaseCountAnalyticsByCaseType");
var CaseCountAnalyticsByCaseType1_1 = require("../models/CaseCountAnalyticsByCaseType1");
var CaseCountAnalyticsByCaseTypeGroup_1 = require("../models/CaseCountAnalyticsByCaseTypeGroup");
var CaseCountAnalyticsByCaseTypeGroup1_1 = require("../models/CaseCountAnalyticsByCaseTypeGroup1");
var CaseCountAnalyticsByCaseTypeGroupResponse_1 = require("../models/CaseCountAnalyticsByCaseTypeGroupResponse");
var CaseCountAnalyticsByCaseTypeGroupResponse1_1 = require("../models/CaseCountAnalyticsByCaseTypeGroupResponse1");
var CaseCountAnalyticsByCaseTypeResponse_1 = require("../models/CaseCountAnalyticsByCaseTypeResponse");
var CaseCountAnalyticsByCaseTypeResponse1_1 = require("../models/CaseCountAnalyticsByCaseTypeResponse1");
var CaseCountAnalyticsByCourt_1 = require("../models/CaseCountAnalyticsByCourt");
var CaseCountAnalyticsByCourt1_1 = require("../models/CaseCountAnalyticsByCourt1");
var CaseCountAnalyticsByCourt1Geo_1 = require("../models/CaseCountAnalyticsByCourt1Geo");
var CaseCountAnalyticsByCourtLocation_1 = require("../models/CaseCountAnalyticsByCourtLocation");
var CaseCountAnalyticsByCourtLocation1_1 = require("../models/CaseCountAnalyticsByCourtLocation1");
var CaseCountAnalyticsByCourtLocationResponse_1 = require("../models/CaseCountAnalyticsByCourtLocationResponse");
var CaseCountAnalyticsByCourtLocationResponse1_1 = require("../models/CaseCountAnalyticsByCourtLocationResponse1");
var CaseCountAnalyticsByCourtResponse_1 = require("../models/CaseCountAnalyticsByCourtResponse");
var CaseCountAnalyticsByCourtResponse1_1 = require("../models/CaseCountAnalyticsByCourtResponse1");
var CaseCountAnalyticsByCourtSystem_1 = require("../models/CaseCountAnalyticsByCourtSystem");
var CaseCountAnalyticsByCourtSystem1_1 = require("../models/CaseCountAnalyticsByCourtSystem1");
var CaseCountAnalyticsByCourtSystemResponse_1 = require("../models/CaseCountAnalyticsByCourtSystemResponse");
var CaseCountAnalyticsByCourtSystemResponse1_1 = require("../models/CaseCountAnalyticsByCourtSystemResponse1");
var CaseCountAnalyticsByCourtType_1 = require("../models/CaseCountAnalyticsByCourtType");
var CaseCountAnalyticsByCourtType1_1 = require("../models/CaseCountAnalyticsByCourtType1");
var CaseCountAnalyticsByCourtTypeResponse_1 = require("../models/CaseCountAnalyticsByCourtTypeResponse");
var CaseCountAnalyticsByCourtTypeResponse1_1 = require("../models/CaseCountAnalyticsByCourtTypeResponse1");
var CaseCountAnalyticsByJurisdictionGeo_1 = require("../models/CaseCountAnalyticsByJurisdictionGeo");
var CaseCountAnalyticsByJurisdictionGeo1_1 = require("../models/CaseCountAnalyticsByJurisdictionGeo1");
var CaseCountAnalyticsByJurisdictionGeoResponse_1 = require("../models/CaseCountAnalyticsByJurisdictionGeoResponse");
var CaseCountAnalyticsByJurisdictionGeoResponse1_1 = require("../models/CaseCountAnalyticsByJurisdictionGeoResponse1");
var CaseCountAnalyticsByNormAttorney_1 = require("../models/CaseCountAnalyticsByNormAttorney");
var CaseCountAnalyticsByNormAttorney1_1 = require("../models/CaseCountAnalyticsByNormAttorney1");
var CaseCountAnalyticsByNormAttorneyResponse_1 = require("../models/CaseCountAnalyticsByNormAttorneyResponse");
var CaseCountAnalyticsByNormAttorneyResponse1_1 = require("../models/CaseCountAnalyticsByNormAttorneyResponse1");
var CaseCountAnalyticsByNormJudge_1 = require("../models/CaseCountAnalyticsByNormJudge");
var CaseCountAnalyticsByNormJudge1_1 = require("../models/CaseCountAnalyticsByNormJudge1");
var CaseCountAnalyticsByNormJudgeResponse_1 = require("../models/CaseCountAnalyticsByNormJudgeResponse");
var CaseCountAnalyticsByNormJudgeResponse1_1 = require("../models/CaseCountAnalyticsByNormJudgeResponse1");
var CaseCountAnalyticsByNormLawFirm_1 = require("../models/CaseCountAnalyticsByNormLawFirm");
var CaseCountAnalyticsByNormLawFirm1_1 = require("../models/CaseCountAnalyticsByNormLawFirm1");
var CaseCountAnalyticsByNormLawFirmResponse_1 = require("../models/CaseCountAnalyticsByNormLawFirmResponse");
var CaseCountAnalyticsByNormLawFirmResponse1_1 = require("../models/CaseCountAnalyticsByNormLawFirmResponse1");
var CaseCountAnalyticsByNormParty_1 = require("../models/CaseCountAnalyticsByNormParty");
var CaseCountAnalyticsByNormParty1_1 = require("../models/CaseCountAnalyticsByNormParty1");
var CaseCountAnalyticsByNormPartyResponse_1 = require("../models/CaseCountAnalyticsByNormPartyResponse");
var CaseCountAnalyticsByNormPartyResponse1_1 = require("../models/CaseCountAnalyticsByNormPartyResponse1");
var CaseCountAnalyticsByPartyRole_1 = require("../models/CaseCountAnalyticsByPartyRole");
var CaseCountAnalyticsByPartyRole1_1 = require("../models/CaseCountAnalyticsByPartyRole1");
var CaseCountAnalyticsByPartyRoleGroup_1 = require("../models/CaseCountAnalyticsByPartyRoleGroup");
var CaseCountAnalyticsByPartyRoleGroup1_1 = require("../models/CaseCountAnalyticsByPartyRoleGroup1");
var CaseCountAnalyticsByPartyRoleGroupResponse_1 = require("../models/CaseCountAnalyticsByPartyRoleGroupResponse");
var CaseCountAnalyticsByPartyRoleGroupResponse1_1 = require("../models/CaseCountAnalyticsByPartyRoleGroupResponse1");
var CaseCountAnalyticsByPartyRoleResponse_1 = require("../models/CaseCountAnalyticsByPartyRoleResponse");
var CaseCountAnalyticsByPartyRoleResponse1_1 = require("../models/CaseCountAnalyticsByPartyRoleResponse1");
var CaseDocument_1 = require("../models/CaseDocument");
var CaseDocumentOrderCallback_1 = require("../models/CaseDocumentOrderCallback");
var CaseDocumentOrderCallbackListResponse_1 = require("../models/CaseDocumentOrderCallbackListResponse");
var CaseDocumentOrderPacerOptions_1 = require("../models/CaseDocumentOrderPacerOptions");
var CaseDocumentOrderRequest_1 = require("../models/CaseDocumentOrderRequest");
var CaseDocuments_1 = require("../models/CaseDocuments");
var CaseExportCallback_1 = require("../models/CaseExportCallback");
var CaseExportCallbackListResponse_1 = require("../models/CaseExportCallbackListResponse");
var CaseRelationshipType_1 = require("../models/CaseRelationshipType");
var CaseRelationshipType1_1 = require("../models/CaseRelationshipType1");
var CaseRelationshipTypeResponse_1 = require("../models/CaseRelationshipTypeResponse");
var CaseSearchResponse_1 = require("../models/CaseSearchResponse");
var CaseSearchResult_1 = require("../models/CaseSearchResult");
var CaseSearchResult1_1 = require("../models/CaseSearchResult1");
var CaseSearchResult1MatchedObjectArrayInner_1 = require("../models/CaseSearchResult1MatchedObjectArrayInner");
var CaseStats_1 = require("../models/CaseStats");
var CaseStatus_1 = require("../models/CaseStatus");
var CaseStatus1_1 = require("../models/CaseStatus1");
var CaseStatusGroup_1 = require("../models/CaseStatusGroup");
var CaseStatusGroup1_1 = require("../models/CaseStatusGroup1");
var CaseStatusGroupResponse_1 = require("../models/CaseStatusGroupResponse");
var CaseStatusResponse_1 = require("../models/CaseStatusResponse");
var CaseTimeline_1 = require("../models/CaseTimeline");
var CaseTimeline1_1 = require("../models/CaseTimeline1");
var CaseTrack_1 = require("../models/CaseTrack");
var CaseTrackListResponse_1 = require("../models/CaseTrackListResponse");
var CaseTrackPostRequest_1 = require("../models/CaseTrackPostRequest");
var CaseTrackPostRequestLastTrackedDetails_1 = require("../models/CaseTrackPostRequestLastTrackedDetails");
var CaseTrackPreview_1 = require("../models/CaseTrackPreview");
var CaseTrackRequest_1 = require("../models/CaseTrackRequest");
var CaseTrackSchedule_1 = require("../models/CaseTrackSchedule");
var CaseType_1 = require("../models/CaseType");
var CaseType1_1 = require("../models/CaseType1");
var CaseTypeGroup_1 = require("../models/CaseTypeGroup");
var CaseTypeGroup1_1 = require("../models/CaseTypeGroup1");
var CaseTypeGroupResponse_1 = require("../models/CaseTypeGroupResponse");
var CaseTypeResponse_1 = require("../models/CaseTypeResponse");
var CaseUpdate_1 = require("../models/CaseUpdate");
var CaseUpdateListResponse_1 = require("../models/CaseUpdateListResponse");
var CaseUpdatePacerOptions_1 = require("../models/CaseUpdatePacerOptions");
var CaseUpdatePacerOptionsResponse_1 = require("../models/CaseUpdatePacerOptionsResponse");
var CaseUpdatePacerOptionsResponse1_1 = require("../models/CaseUpdatePacerOptionsResponse1");
var CaseUpdatePreview_1 = require("../models/CaseUpdatePreview");
var CaseUpdateRequest_1 = require("../models/CaseUpdateRequest");
var CauseOfAction_1 = require("../models/CauseOfAction");
var CauseOfAction1_1 = require("../models/CauseOfAction1");
var CauseOfActionAdditionalData_1 = require("../models/CauseOfActionAdditionalData");
var CauseOfActionAdditionalData1_1 = require("../models/CauseOfActionAdditionalData1");
var CauseOfActionAdditionalDataResponse_1 = require("../models/CauseOfActionAdditionalDataResponse");
var CauseOfActionGroup_1 = require("../models/CauseOfActionGroup");
var CauseOfActionGroup1_1 = require("../models/CauseOfActionGroup1");
var CauseOfActionGroupResponse_1 = require("../models/CauseOfActionGroupResponse");
var CauseOfActionResponse_1 = require("../models/CauseOfActionResponse");
var Charge_1 = require("../models/Charge");
var Charge1_1 = require("../models/Charge1");
var ChargeAdditionalData_1 = require("../models/ChargeAdditionalData");
var ChargeAdditionalData1_1 = require("../models/ChargeAdditionalData1");
var ChargeAdditionalDataResponse_1 = require("../models/ChargeAdditionalDataResponse");
var ChargeDegree_1 = require("../models/ChargeDegree");
var ChargeDegree1_1 = require("../models/ChargeDegree1");
var ChargeDegreeResponse_1 = require("../models/ChargeDegreeResponse");
var ChargeGroup_1 = require("../models/ChargeGroup");
var ChargeGroup1_1 = require("../models/ChargeGroup1");
var ChargeGroupResponse_1 = require("../models/ChargeGroupResponse");
var ChargeResponse_1 = require("../models/ChargeResponse");
var ChargeSeverity_1 = require("../models/ChargeSeverity");
var ChargeSeverity1_1 = require("../models/ChargeSeverity1");
var ChargeSeverityResponse_1 = require("../models/ChargeSeverityResponse");
var Contact_1 = require("../models/Contact");
var Court_1 = require("../models/Court");
var Court1_1 = require("../models/Court1");
var CourtCoverage_1 = require("../models/CourtCoverage");
var CourtLocation_1 = require("../models/CourtLocation");
var CourtLocation1_1 = require("../models/CourtLocation1");
var CourtLocationResponse_1 = require("../models/CourtLocationResponse");
var CourtLocationResponse1_1 = require("../models/CourtLocationResponse1");
var CourtResponse_1 = require("../models/CourtResponse");
var CourtServiceStatus_1 = require("../models/CourtServiceStatus");
var CourtServiceStatusResponse_1 = require("../models/CourtServiceStatusResponse");
var CourtSystem_1 = require("../models/CourtSystem");
var CourtSystem1_1 = require("../models/CourtSystem1");
var CourtSystemResponse_1 = require("../models/CourtSystemResponse");
var CourtType_1 = require("../models/CourtType");
var CourtType1_1 = require("../models/CourtType1");
var CourtTypeResponse_1 = require("../models/CourtTypeResponse");
var DailyUsageResponse_1 = require("../models/DailyUsageResponse");
var DocketEntries_1 = require("../models/DocketEntries");
var DocketEntry_1 = require("../models/DocketEntry");
var DocketEntryPrimaryDocuments_1 = require("../models/DocketEntryPrimaryDocuments");
var DocketEntrySecondaryDocuments_1 = require("../models/DocketEntrySecondaryDocuments");
var DocumentDownload_1 = require("../models/DocumentDownload");
var Email_1 = require("../models/Email");
var Exception_1 = require("../models/Exception");
var Exception1_1 = require("../models/Exception1");
var ExportCase200Response_1 = require("../models/ExportCase200Response");
var ExportFile_1 = require("../models/ExportFile");
var ExportFile1_1 = require("../models/ExportFile1");
var ExtractedFields_1 = require("../models/ExtractedFields");
var GenerateNewToken200Response_1 = require("../models/GenerateNewToken200Response");
var GenerateNewTokenRequest_1 = require("../models/GenerateNewTokenRequest");
var GetAreasOfLaw200Response_1 = require("../models/GetAreasOfLaw200Response");
var GetAttorneyRepresentationTypes200Response_1 = require("../models/GetAttorneyRepresentationTypes200Response");
var GetAttorneyTypes200Response_1 = require("../models/GetAttorneyTypes200Response");
var GetBillingCycles200Response_1 = require("../models/GetBillingCycles200Response");
var GetBillingUsageByBillingCycle200Response_1 = require("../models/GetBillingUsageByBillingCycle200Response");
var GetBillingUsageByBillingCycle200ResponseApiCallsBillable_1 = require("../models/GetBillingUsageByBillingCycle200ResponseApiCallsBillable");
var GetBillingUsageByBillingCycle200ResponseApiCallsCredited_1 = require("../models/GetBillingUsageByBillingCycle200ResponseApiCallsCredited");
var GetBillingUsageByBillingCycle200ResponseApiCallsMade_1 = require("../models/GetBillingUsageByBillingCycle200ResponseApiCallsMade");
var GetBillingUsageByBillingCycle200ResponseBillingCycle_1 = require("../models/GetBillingUsageByBillingCycle200ResponseBillingCycle");
var GetCallbacks200Response_1 = require("../models/GetCallbacks200Response");
var GetCallbacks200ResponseCaseDocumentOrderCallbacks_1 = require("../models/GetCallbacks200ResponseCaseDocumentOrderCallbacks");
var GetCallbacks200ResponseCaseExportCallbacks_1 = require("../models/GetCallbacks200ResponseCaseExportCallbacks");
var GetCase200Response_1 = require("../models/GetCase200Response");
var GetCase200ResponseAttorneys_1 = require("../models/GetCase200ResponseAttorneys");
var GetCase200ResponseAttorneysAttorneyArrayInner_1 = require("../models/GetCase200ResponseAttorneysAttorneyArrayInner");
var GetCase200ResponseAttorneysAttorneyArrayInnerAttorneyLawFirmArrayInner_1 = require("../models/GetCase200ResponseAttorneysAttorneyArrayInnerAttorneyLawFirmArrayInner");
var GetCase200ResponseCaseDocuments_1 = require("../models/GetCase200ResponseCaseDocuments");
var GetCase200ResponseCaseStats_1 = require("../models/GetCase200ResponseCaseStats");
var GetCase200ResponseCauseOfActionArrayInner_1 = require("../models/GetCase200ResponseCauseOfActionArrayInner");
var GetCase200ResponseChargeArrayInner_1 = require("../models/GetCase200ResponseChargeArrayInner");
var GetCase200ResponseDocketEntries_1 = require("../models/GetCase200ResponseDocketEntries");
var GetCase200ResponseDocketEntriesDocketEntryArrayInner_1 = require("../models/GetCase200ResponseDocketEntriesDocketEntryArrayInner");
var GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments_1 = require("../models/GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments");
var GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner_1 = require("../models/GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner");
var GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerPreviewDocument_1 = require("../models/GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerPreviewDocument");
var GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments_1 = require("../models/GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments");
var GetCase200ResponseDocketEntriesDocketEntryArrayInnerReferencedDocketNumberArrayInner_1 = require("../models/GetCase200ResponseDocketEntriesDocketEntryArrayInnerReferencedDocketNumberArrayInner");
var GetCase200ResponseHearings_1 = require("../models/GetCase200ResponseHearings");
var GetCase200ResponseHearingsHearingArrayInner_1 = require("../models/GetCase200ResponseHearingsHearingArrayInner");
var GetCase200ResponseJudges_1 = require("../models/GetCase200ResponseJudges");
var GetCase200ResponseJudgesJudgeArrayInner_1 = require("../models/GetCase200ResponseJudgesJudgeArrayInner");
var GetCase200ResponseParties_1 = require("../models/GetCase200ResponseParties");
var GetCase200ResponsePartiesPartyArrayInner_1 = require("../models/GetCase200ResponsePartiesPartyArrayInner");
var GetCase200ResponsePartiesPartyArrayInnerContact_1 = require("../models/GetCase200ResponsePartiesPartyArrayInnerContact");
var GetCase200ResponsePartiesPartyArrayInnerContactAddressArrayInner_1 = require("../models/GetCase200ResponsePartiesPartyArrayInnerContactAddressArrayInner");
var GetCase200ResponsePartiesPartyArrayInnerContactEmailArrayInner_1 = require("../models/GetCase200ResponsePartiesPartyArrayInnerContactEmailArrayInner");
var GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInner_1 = require("../models/GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInner");
var GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations_1 = require("../models/GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations");
var GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociationsPartyAttorneyAssociationArrayInner_1 = require("../models/GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociationsPartyAttorneyAssociationArrayInner");
var GetCase200ResponseRelatedCases_1 = require("../models/GetCase200ResponseRelatedCases");
var GetCase200ResponseRelatedCasesRelatedCaseArrayInner_1 = require("../models/GetCase200ResponseRelatedCasesRelatedCaseArrayInner");
var GetCase200ResponseSourceCaseData_1 = require("../models/GetCase200ResponseSourceCaseData");
var GetCase200ResponseSourceCaseDataNatureOfSuitArrayInner_1 = require("../models/GetCase200ResponseSourceCaseDataNatureOfSuitArrayInner");
var GetCase200ResponseSourceCaseDataSourceCauseOfActionArrayInner_1 = require("../models/GetCase200ResponseSourceCaseDataSourceCauseOfActionArrayInner");
var GetCase200ResponseSourceCaseDataSourceChargeArrayInner_1 = require("../models/GetCase200ResponseSourceCaseDataSourceChargeArrayInner");
var GetCase200ResponseSourceCaseDataSourceChargeArrayInnerSourceChargeAdditionalDataArrayInner_1 = require("../models/GetCase200ResponseSourceCaseDataSourceChargeArrayInnerSourceChargeAdditionalDataArrayInner");
var GetCase200ResponseSourceCaseDataSourcePageDataInner_1 = require("../models/GetCase200ResponseSourceCaseDataSourcePageDataInner");
var GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceData_1 = require("../models/GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceData");
var GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataExtractedFields_1 = require("../models/GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataExtractedFields");
var GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInner_1 = require("../models/GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInner");
var GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInnerChildArrayInner_1 = require("../models/GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInnerChildArrayInner");
var GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInnerChildArrayInnerChildArrayInner_1 = require("../models/GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInnerChildArrayInnerChildArrayInner");
var GetCaseDocumentDownloadById200Response_1 = require("../models/GetCaseDocumentDownloadById200Response");
var GetCaseDocumentOrderCallbacks200Response_1 = require("../models/GetCaseDocumentOrderCallbacks200Response");
var GetCaseExportCallbacks200Response_1 = require("../models/GetCaseExportCallbacks200Response");
var GetCaseRelationshipTypes200Response_1 = require("../models/GetCaseRelationshipTypes200Response");
var GetCaseStatusGroups200Response_1 = require("../models/GetCaseStatusGroups200Response");
var GetCaseTracks200Response_1 = require("../models/GetCaseTracks200Response");
var GetCaseTracks200ResponseCaseTrackPreviewArrayInner_1 = require("../models/GetCaseTracks200ResponseCaseTrackPreviewArrayInner");
var GetCaseTypeGroups200Response_1 = require("../models/GetCaseTypeGroups200Response");
var GetCaseTypes200Response_1 = require("../models/GetCaseTypes200Response");
var GetCaseUpdates200Response_1 = require("../models/GetCaseUpdates200Response");
var GetCaseUpdates200ResponseCaseUpdatePreviewArrayInner_1 = require("../models/GetCaseUpdates200ResponseCaseUpdatePreviewArrayInner");
var GetCasesClass200Response_1 = require("../models/GetCasesClass200Response");
var GetCasesStatus200Response_1 = require("../models/GetCasesStatus200Response");
var GetCausesOfAction200Response_1 = require("../models/GetCausesOfAction200Response");
var GetCausesOfActionAdditionalData200Response_1 = require("../models/GetCausesOfActionAdditionalData200Response");
var GetCausesOfActionGroup200Response_1 = require("../models/GetCausesOfActionGroup200Response");
var GetChargeGroups200Response_1 = require("../models/GetChargeGroups200Response");
var GetCharges200Response_1 = require("../models/GetCharges200Response");
var GetChargesAdditionalData200Response_1 = require("../models/GetChargesAdditionalData200Response");
var GetChargesDegree200Response_1 = require("../models/GetChargesDegree200Response");
var GetChargesSeverity200Response_1 = require("../models/GetChargesSeverity200Response");
var GetCourtCoverage200Response_1 = require("../models/GetCourtCoverage200Response");
var GetCourtCoverage200ResponseCaseClassCoverageArrayInner_1 = require("../models/GetCourtCoverage200ResponseCaseClassCoverageArrayInner");
var GetCourtSystems200Response_1 = require("../models/GetCourtSystems200Response");
var GetCourtTypes200Response_1 = require("../models/GetCourtTypes200Response");
var GetCourts200Response_1 = require("../models/GetCourts200Response");
var GetCourtsServiceStatus200Response_1 = require("../models/GetCourtsServiceStatus200Response");
var GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner_1 = require("../models/GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner");
var GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus_1 = require("../models/GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus");
var GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetails_1 = require("../models/GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetails");
var GetDailyUsageByDate200Response_1 = require("../models/GetDailyUsageByDate200Response");
var GetJudgeTypes200Response_1 = require("../models/GetJudgeTypes200Response");
var GetPacerCredential200Response_1 = require("../models/GetPacerCredential200Response");
var GetPacerCredential200ResponsePacerCredentialArrayInner_1 = require("../models/GetPacerCredential200ResponsePacerCredentialArrayInner");
var GetPartyRoleGroups200Response_1 = require("../models/GetPartyRoleGroups200Response");
var GetPartyRoles200Response_1 = require("../models/GetPartyRoles200Response");
var Hearing_1 = require("../models/Hearing");
var Hearings_1 = require("../models/Hearings");
var ImportPacerCaseByCourtUsingCaseNumber200Response_1 = require("../models/ImportPacerCaseByCourtUsingCaseNumber200Response");
var ImportPacerCaseByCourtUsingCaseNumber200ResponsePacerImportCaseResultsArrayInner_1 = require("../models/ImportPacerCaseByCourtUsingCaseNumber200ResponsePacerImportCaseResultsArrayInner");
var Individual_1 = require("../models/Individual");
var InvalidateAccessTokenRequest_1 = require("../models/InvalidateAccessTokenRequest");
var InvalidateTokenRequest_1 = require("../models/InvalidateTokenRequest");
var Judge_1 = require("../models/Judge");
var JudgeAnalyticsAPI_1 = require("../models/JudgeAnalyticsAPI");
var JudgeAnalyticsAPI1_1 = require("../models/JudgeAnalyticsAPI1");
var JudgeType_1 = require("../models/JudgeType");
var JudgeType1_1 = require("../models/JudgeType1");
var JudgeTypeResponse_1 = require("../models/JudgeTypeResponse");
var Judges_1 = require("../models/Judges");
var JurisdictionGeo_1 = require("../models/JurisdictionGeo");
var JurisdictionGeo1_1 = require("../models/JurisdictionGeo1");
var JurisdictionGeoResponse_1 = require("../models/JurisdictionGeoResponse");
var JurisdictionGeoResponse1_1 = require("../models/JurisdictionGeoResponse1");
var LastTrackedDetails_1 = require("../models/LastTrackedDetails");
var LawFirmAnalyticsAPI_1 = require("../models/LawFirmAnalyticsAPI");
var LawFirmAnalyticsAPI1_1 = require("../models/LawFirmAnalyticsAPI1");
var ListAllTokenIds200Response_1 = require("../models/ListAllTokenIds200Response");
var ListAllTokenIds200ResponseAccessTokenIdArrayInner_1 = require("../models/ListAllTokenIds200ResponseAccessTokenIdArrayInner");
var MatchedObject_1 = require("../models/MatchedObject");
var NatureOfSuit_1 = require("../models/NatureOfSuit");
var NormAttorney_1 = require("../models/NormAttorney");
var NormAttorney1_1 = require("../models/NormAttorney1");
var NormAttorneySearchResponse_1 = require("../models/NormAttorneySearchResponse");
var NormAttorneySearchResult_1 = require("../models/NormAttorneySearchResult");
var NormCorporateGroup_1 = require("../models/NormCorporateGroup");
var NormCorporateGroup1_1 = require("../models/NormCorporateGroup1");
var NormJudge_1 = require("../models/NormJudge");
var NormJudge1_1 = require("../models/NormJudge1");
var NormJudgePublicData_1 = require("../models/NormJudgePublicData");
var NormJudgePublicData1_1 = require("../models/NormJudgePublicData1");
var NormJudgePublicData1AbaRatings_1 = require("../models/NormJudgePublicData1AbaRatings");
var NormJudgePublicData1Bio_1 = require("../models/NormJudgePublicData1Bio");
var NormJudgePublicData1EducationArrayInner_1 = require("../models/NormJudgePublicData1EducationArrayInner");
var NormJudgePublicData1JudicialSource_1 = require("../models/NormJudgePublicData1JudicialSource");
var NormJudgePublicData1NameHistoryArrayInner_1 = require("../models/NormJudgePublicData1NameHistoryArrayInner");
var NormJudgeSearchResponse_1 = require("../models/NormJudgeSearchResponse");
var NormJudgeSearchResult_1 = require("../models/NormJudgeSearchResult");
var NormLawFirm_1 = require("../models/NormLawFirm");
var NormLawFirm1_1 = require("../models/NormLawFirm1");
var NormLawFirmSearchResponse_1 = require("../models/NormLawFirmSearchResponse");
var NormLawFirmSearchResult_1 = require("../models/NormLawFirmSearchResult");
var NormOrganization_1 = require("../models/NormOrganization");
var NormOrganization1_1 = require("../models/NormOrganization1");
var NormOrganization1TickerArrayInner_1 = require("../models/NormOrganization1TickerArrayInner");
var NormParty_1 = require("../models/NormParty");
var NormParty1_1 = require("../models/NormParty1");
var NormPartySearchResponse_1 = require("../models/NormPartySearchResponse");
var NormPartySearchResult_1 = require("../models/NormPartySearchResult");
var OrderCaseDocument200Response_1 = require("../models/OrderCaseDocument200Response");
var OrderCaseDocumentRequest_1 = require("../models/OrderCaseDocumentRequest");
var OrderCaseDocumentRequestPacerOptions_1 = require("../models/OrderCaseDocumentRequestPacerOptions");
var PACERCaseSearchContent_1 = require("../models/PACERCaseSearchContent");
var PACERCaseSearchResults_1 = require("../models/PACERCaseSearchResults");
var PACERImportCase_1 = require("../models/PACERImportCase");
var PACERImportCaseResults_1 = require("../models/PACERImportCaseResults");
var PACERPartySearchContent_1 = require("../models/PACERPartySearchContent");
var PACERPartySearchResults_1 = require("../models/PACERPartySearchResults");
var PACERSearchPageInfo_1 = require("../models/PACERSearchPageInfo");
var PACERSearchReceipt_1 = require("../models/PACERSearchReceipt");
var PCLCase_1 = require("../models/PCLCase");
var PCLParty_1 = require("../models/PCLParty");
var PacerCredential_1 = require("../models/PacerCredential");
var PacerCredentialListResponse_1 = require("../models/PacerCredentialListResponse");
var PacerCredentialRequest_1 = require("../models/PacerCredentialRequest");
var Parties_1 = require("../models/Parties");
var Party_1 = require("../models/Party");
var PartyAnalyticsAPI_1 = require("../models/PartyAnalyticsAPI");
var PartyAnalyticsAPI1_1 = require("../models/PartyAnalyticsAPI1");
var PartyAttorneyAssociation_1 = require("../models/PartyAttorneyAssociation");
var PartyAttorneyAssociations_1 = require("../models/PartyAttorneyAssociations");
var PartyRole_1 = require("../models/PartyRole");
var PartyRole1_1 = require("../models/PartyRole1");
var PartyRoleGroup_1 = require("../models/PartyRoleGroup");
var PartyRoleGroup1_1 = require("../models/PartyRoleGroup1");
var PartyRoleGroupResponse_1 = require("../models/PartyRoleGroupResponse");
var PartyRoleResponse_1 = require("../models/PartyRoleResponse");
var Phone_1 = require("../models/Phone");
var PossibleNormAttorney_1 = require("../models/PossibleNormAttorney");
var PossibleNormAttorney1_1 = require("../models/PossibleNormAttorney1");
var PossibleNormAttorney1ScoreConstituents_1 = require("../models/PossibleNormAttorney1ScoreConstituents");
var PossibleNormJudge_1 = require("../models/PossibleNormJudge");
var PossibleNormJudge1_1 = require("../models/PossibleNormJudge1");
var PossibleNormJudge1ScoreConstituents_1 = require("../models/PossibleNormJudge1ScoreConstituents");
var PossibleNormLawFirm_1 = require("../models/PossibleNormLawFirm");
var PossibleNormLawFirm1_1 = require("../models/PossibleNormLawFirm1");
var PossibleNormLawFirm1ScoreConstituents_1 = require("../models/PossibleNormLawFirm1ScoreConstituents");
var PossibleNormLawFirm1SourceDetails_1 = require("../models/PossibleNormLawFirm1SourceDetails");
var PossibleNormParty_1 = require("../models/PossibleNormParty");
var PossibleNormParty1_1 = require("../models/PossibleNormParty1");
var PossibleNormParty1ScoreConstituents_1 = require("../models/PossibleNormParty1ScoreConstituents");
var PreviewDocument_1 = require("../models/PreviewDocument");
var RawOrderedData_1 = require("../models/RawOrderedData");
var RawOrderedDataChild_1 = require("../models/RawOrderedDataChild");
var ReferencedDocketNumber_1 = require("../models/ReferencedDocketNumber");
var RelatedCase_1 = require("../models/RelatedCase");
var RelatedCases_1 = require("../models/RelatedCases");
var RelatedNormParty_1 = require("../models/RelatedNormParty");
var RelatedNormParty1_1 = require("../models/RelatedNormParty1");
var SOSAssociatedNormOrganization_1 = require("../models/SOSAssociatedNormOrganization");
var SOSAssociatedNormOrganization1_1 = require("../models/SOSAssociatedNormOrganization1");
var SOSData_1 = require("../models/SOSData");
var SOSData1_1 = require("../models/SOSData1");
var SOSDataPreview_1 = require("../models/SOSDataPreview");
var SOSDataPreview1_1 = require("../models/SOSDataPreview1");
var SOSNameChange_1 = require("../models/SOSNameChange");
var SOSNameChange1_1 = require("../models/SOSNameChange1");
var Schedule_1 = require("../models/Schedule");
var Schedule1_1 = require("../models/Schedule1");
var Schedule2_1 = require("../models/Schedule2");
var SearchCases200Response_1 = require("../models/SearchCases200Response");
var SearchNormalizedAttorneys200Response_1 = require("../models/SearchNormalizedAttorneys200Response");
var SearchNormalizedAttorneys200ResponseNormAttorneySearchResultArrayInner_1 = require("../models/SearchNormalizedAttorneys200ResponseNormAttorneySearchResultArrayInner");
var SearchNormalizedJudges200Response_1 = require("../models/SearchNormalizedJudges200Response");
var SearchNormalizedJudges200ResponseNormJudgeSearchResultArrayInner_1 = require("../models/SearchNormalizedJudges200ResponseNormJudgeSearchResultArrayInner");
var SearchNormalizedLawFirms200Response_1 = require("../models/SearchNormalizedLawFirms200Response");
var SearchNormalizedLawFirms200ResponseNormLawFirmSearchResultArrayInner_1 = require("../models/SearchNormalizedLawFirms200ResponseNormLawFirmSearchResultArrayInner");
var SearchNormalizedParties200Response_1 = require("../models/SearchNormalizedParties200Response");
var SearchNormalizedParties200ResponseNormPartySearchResultArrayInner_1 = require("../models/SearchNormalizedParties200ResponseNormPartySearchResultArrayInner");
var ServiceHistory_1 = require("../models/ServiceHistory");
var ServiceHistory1_1 = require("../models/ServiceHistory1");
var ServiceStatus_1 = require("../models/ServiceStatus");
var ServiceStatusDownDetails_1 = require("../models/ServiceStatusDownDetails");
var SimilarNormAttorney_1 = require("../models/SimilarNormAttorney");
var SimilarNormAttorney1_1 = require("../models/SimilarNormAttorney1");
var SourceCaseData_1 = require("../models/SourceCaseData");
var SourceCauseOfAction_1 = require("../models/SourceCauseOfAction");
var SourceCharge_1 = require("../models/SourceCharge");
var SourceChargeAdditionalData_1 = require("../models/SourceChargeAdditionalData");
var SourcePageData_1 = require("../models/SourcePageData");
var SourceStructuredData_1 = require("../models/SourceStructuredData");
var Success_1 = require("../models/Success");
var Success1_1 = require("../models/Success1");
var TrackCaseRequest_1 = require("../models/TrackCaseRequest");
var UpdateCase200Response_1 = require("../models/UpdateCase200Response");
var UpdateCaseRequest_1 = require("../models/UpdateCaseRequest");
var UpdateCaseRequestPacerOptions_1 = require("../models/UpdateCaseRequestPacerOptions");
var UpdateCaseRequestPacerOptionsAdditionalPageArrayInner_1 = require("../models/UpdateCaseRequestPacerOptionsAdditionalPageArrayInner");
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var supportedMediaTypes = {
    "application/json": Infinity,
    "application/json-patch+json": 1,
    "application/merge-patch+json": 1,
    "application/strategic-merge-patch+json": 1,
    "application/octet-stream": 0,
    "application/x-www-form-urlencoded": 0
};
var enumsMap = new Set([
    "AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerSearchResultsArrayInnerPacerContentPclJurisdictionTypeEnum",
    "AllCourtsPacerCaseLocatorPartySearch200ResponsePacerSearchResultsArrayInnerPacerContentPclJurisdictionTypeEnum",
    "AssociatedSoSPersonEntityTypeEnum",
    "AssociatedSoSPerson1EntityTypeEnum",
    "BarRecordStatusEnum",
    "BarRecord1StatusEnum",
    "CaseSourceDataStatusEnum",
    "CaseCountAnalyticsByCaseFiledDateGroupedByEnum",
    "CaseCountAnalyticsByCaseFiledDateQuarterEnum",
    "CaseCountAnalyticsByCaseFiledDateMonthStringEnum",
    "CaseCountAnalyticsByCaseFiledDate1GroupedByEnum",
    "CaseCountAnalyticsByCaseFiledDate1QuarterEnum",
    "CaseCountAnalyticsByCaseFiledDate1MonthStringEnum",
    "CaseDocumentEstimatedOrderDurationEnum",
    "CaseDocumentSourceDataStatusEnum",
    "CaseDocumentOrderCallbackStatusEnum",
    "CaseExportCallbackStatusEnum",
    "CaseTrackScheduleTypeEnum",
    "CaseUpdateStatusEnum",
    "CaseUpdatePacerOptionsRefreshTypeEnum",
    "CaseUpdatePacerOptionsResponseRefreshTypeEnum",
    "CaseUpdatePacerOptionsResponse1RefreshTypeEnum",
    "CaseUpdatePreviewStatusEnum",
    "DocketEntryDocketBadgeEnum",
    "DocketEntryBoundaryEnum",
    "ExportCase200ResponseStatusEnum",
    "GetCase200ResponseSourceDataStatusEnum",
    "GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketBadgeEnum",
    "GetCase200ResponseDocketEntriesDocketEntryArrayInnerBoundaryEnum",
    "GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerEstimatedOrderDurationEnum",
    "GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerSourceDataStatusEnum",
    "GetCase200ResponsePartiesPartyArrayInnerPartyClassificationTypeEnum",
    "GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInnerPhoneTypeEnum",
    "GetCaseUpdates200ResponseCaseUpdatePreviewArrayInnerStatusEnum",
    "GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceDetailsEnum",
    "GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetailsReasonEnum",
    "NormJudgePublicData1JudicialSourceTypeEnum",
    "NormOrganizationOrganizationTypeEnum",
    "NormOrganization1OrganizationTypeEnum",
    "NormPartyPartyClassificationTypeEnum",
    "NormParty1PartyClassificationTypeEnum",
    "OrderCaseDocument200ResponseStatusEnum",
    "PACERCaseSearchContentPclJurisdictionTypeEnum",
    "PACERPartySearchContentPclJurisdictionTypeEnum",
    "PartyPartyClassificationTypeEnum",
    "PhonePhoneTypeEnum",
    "PossibleNormAttorney1ScoreConstituentsBarIdEnum",
    "PossibleNormAttorney1ScoreConstituentsAddressEnum",
    "PossibleNormAttorney1ScoreConstituentsEmailEnum",
    "PossibleNormAttorney1ScoreConstituentsPhoneEnum",
    "PossibleNormAttorney1ScoreConstituentsLawFirmEnum",
    "PossibleNormJudge1ScoreConstituentsAddressEnum",
    "PossibleNormJudge1ScoreConstituentsEmailEnum",
    "PossibleNormJudge1ScoreConstituentsPhoneEnum",
    "PossibleNormLawFirm1ScoreConstituentsSecretaryOfStateIdEnum",
    "PossibleNormLawFirm1ScoreConstituentsAddressEnum",
    "PossibleNormLawFirm1ScoreConstituentsEmailEnum",
    "PossibleNormLawFirm1ScoreConstituentsPhoneEnum",
    "PossibleNormLawFirm1SourceDetailsSourceEnum",
    "PossibleNormParty1ScoreConstituentsSecretaryOfStateIdEnum",
    "PossibleNormParty1ScoreConstituentsAddressEnum",
    "PossibleNormParty1ScoreConstituentsEmailEnum",
    "PossibleNormParty1ScoreConstituentsPhoneEnum",
    "RelatedNormPartyRelationshipTypeEnum",
    "RelatedNormParty1RelationshipTypeEnum",
    "SOSAssociatedNormOrganizationRelationshipTypeEnum",
    "SOSAssociatedNormOrganization1RelationshipTypeEnum",
    "SOSDataStatusEnum",
    "SOSData1StatusEnum",
    "ScheduleTypeEnum",
    "Schedule1TypeEnum",
    "Schedule2TypeEnum",
    "ServiceStatusServiceDetailsEnum",
    "ServiceStatusDownDetailsReasonEnum",
    "UpdateCase200ResponseStatusEnum",
    "UpdateCaseRequestPacerOptionsRefreshTypeEnum",
    "UpdateCaseRequestPacerOptionsAdditionalPageArrayInnerPageEnum",
]);
var typeMap = {
    "AccessTokenIdListResponse": AccessTokenIdListResponse_1.AccessTokenIdListResponse,
    "AccessTokenIdResponse": AccessTokenIdResponse_1.AccessTokenIdResponse,
    "AccessTokenRequest": AccessTokenRequest_1.AccessTokenRequest,
    "AccessTokenResponse": AccessTokenResponse_1.AccessTokenResponse,
    "AddPacerCredentialRequest": AddPacerCredentialRequest_1.AddPacerCredentialRequest,
    "AdditionalLevels": AdditionalLevels_1.AdditionalLevels,
    "AdditionalLevels1": AdditionalLevels1_1.AdditionalLevels1,
    "Address": Address_1.Address,
    "AllCourtsPacerCaseLocatorCaseSearch200Response": AllCourtsPacerCaseLocatorCaseSearch200Response_1.AllCourtsPacerCaseLocatorCaseSearch200Response,
    "AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerPageInfo": AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerPageInfo_1.AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerPageInfo,
    "AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerReceipt": AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerReceipt_1.AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerReceipt,
    "AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerSearchResultsArrayInner": AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerSearchResultsArrayInner_1.AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerSearchResultsArrayInner,
    "AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerSearchResultsArrayInnerPacerContent": AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerSearchResultsArrayInnerPacerContent_1.AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerSearchResultsArrayInnerPacerContent,
    "AllCourtsPacerCaseLocatorPartySearch200Response": AllCourtsPacerCaseLocatorPartySearch200Response_1.AllCourtsPacerCaseLocatorPartySearch200Response,
    "AllCourtsPacerCaseLocatorPartySearch200ResponsePacerSearchResultsArrayInner": AllCourtsPacerCaseLocatorPartySearch200ResponsePacerSearchResultsArrayInner_1.AllCourtsPacerCaseLocatorPartySearch200ResponsePacerSearchResultsArrayInner,
    "AllCourtsPacerCaseLocatorPartySearch200ResponsePacerSearchResultsArrayInnerPacerContent": AllCourtsPacerCaseLocatorPartySearch200ResponsePacerSearchResultsArrayInnerPacerContent_1.AllCourtsPacerCaseLocatorPartySearch200ResponsePacerSearchResultsArrayInnerPacerContent,
    "AreaOfLaw": AreaOfLaw_1.AreaOfLaw,
    "AreaOfLaw1": AreaOfLaw1_1.AreaOfLaw1,
    "AreaOfLawResponse": AreaOfLawResponse_1.AreaOfLawResponse,
    "AssociatedNormAttorney": AssociatedNormAttorney_1.AssociatedNormAttorney,
    "AssociatedNormAttorney1": AssociatedNormAttorney1_1.AssociatedNormAttorney1,
    "AssociatedNormAttorneyResponse": AssociatedNormAttorneyResponse_1.AssociatedNormAttorneyResponse,
    "AssociatedNormAttorneyResponse1": AssociatedNormAttorneyResponse1_1.AssociatedNormAttorneyResponse1,
    "AssociatedNormJudge": AssociatedNormJudge_1.AssociatedNormJudge,
    "AssociatedNormJudge1": AssociatedNormJudge1_1.AssociatedNormJudge1,
    "AssociatedNormJudgeResponse": AssociatedNormJudgeResponse_1.AssociatedNormJudgeResponse,
    "AssociatedNormJudgeResponse1": AssociatedNormJudgeResponse1_1.AssociatedNormJudgeResponse1,
    "AssociatedNormLawFirm": AssociatedNormLawFirm_1.AssociatedNormLawFirm,
    "AssociatedNormLawFirm1": AssociatedNormLawFirm1_1.AssociatedNormLawFirm1,
    "AssociatedNormLawFirmResponse": AssociatedNormLawFirmResponse_1.AssociatedNormLawFirmResponse,
    "AssociatedNormLawFirmResponse1": AssociatedNormLawFirmResponse1_1.AssociatedNormLawFirmResponse1,
    "AssociatedNormParty": AssociatedNormParty_1.AssociatedNormParty,
    "AssociatedNormParty1": AssociatedNormParty1_1.AssociatedNormParty1,
    "AssociatedNormPartyResponse": AssociatedNormPartyResponse_1.AssociatedNormPartyResponse,
    "AssociatedNormPartyResponse1": AssociatedNormPartyResponse1_1.AssociatedNormPartyResponse1,
    "AssociatedSoSPerson": AssociatedSoSPerson_1.AssociatedSoSPerson,
    "AssociatedSoSPerson1": AssociatedSoSPerson1_1.AssociatedSoSPerson1,
    "Attorney": Attorney_1.Attorney,
    "AttorneyAnalyticsAPI": AttorneyAnalyticsAPI_1.AttorneyAnalyticsAPI,
    "AttorneyAnalyticsAPI1": AttorneyAnalyticsAPI1_1.AttorneyAnalyticsAPI1,
    "AttorneyLawFirm": AttorneyLawFirm_1.AttorneyLawFirm,
    "AttorneyRepresentationType": AttorneyRepresentationType_1.AttorneyRepresentationType,
    "AttorneyRepresentationType1": AttorneyRepresentationType1_1.AttorneyRepresentationType1,
    "AttorneyRepresentationTypeResponse": AttorneyRepresentationTypeResponse_1.AttorneyRepresentationTypeResponse,
    "AttorneyType": AttorneyType_1.AttorneyType,
    "AttorneyType1": AttorneyType1_1.AttorneyType1,
    "AttorneyTypeResponse": AttorneyTypeResponse_1.AttorneyTypeResponse,
    "Attorneys": Attorneys_1.Attorneys,
    "BarRecord": BarRecord_1.BarRecord,
    "BarRecord1": BarRecord1_1.BarRecord1,
    "BarRecordPreview": BarRecordPreview_1.BarRecordPreview,
    "BarRecordPreview1": BarRecordPreview1_1.BarRecordPreview1,
    "BarSourceData": BarSourceData_1.BarSourceData,
    "BarSourceData1": BarSourceData1_1.BarSourceData1,
    "BarSourceData1AdministrativeActionsArrayInner": BarSourceData1AdministrativeActionsArrayInner_1.BarSourceData1AdministrativeActionsArrayInner,
    "BarSourceData1AdvancedDegreeArrayInner": BarSourceData1AdvancedDegreeArrayInner_1.BarSourceData1AdvancedDegreeArrayInner,
    "BarSourceData1BarStatusArrayInner": BarSourceData1BarStatusArrayInner_1.BarSourceData1BarStatusArrayInner,
    "BarSourceData1BoardCertificationsArrayInner": BarSourceData1BoardCertificationsArrayInner_1.BarSourceData1BoardCertificationsArrayInner,
    "BarSourceData1CommitteesArrayInner": BarSourceData1CommitteesArrayInner_1.BarSourceData1CommitteesArrayInner,
    "BarSourceData1CourtHistoryArrayInner": BarSourceData1CourtHistoryArrayInner_1.BarSourceData1CourtHistoryArrayInner,
    "BarSourceData1CourtOfAdmissions": BarSourceData1CourtOfAdmissions_1.BarSourceData1CourtOfAdmissions,
    "BarSourceData1DisciplinaryHistoryArrayInner": BarSourceData1DisciplinaryHistoryArrayInner_1.BarSourceData1DisciplinaryHistoryArrayInner,
    "BarSourceData1DisciplineSummariesArrayInner": BarSourceData1DisciplineSummariesArrayInner_1.BarSourceData1DisciplineSummariesArrayInner,
    "BarSourceData1EmploymentHistoryArrayInner": BarSourceData1EmploymentHistoryArrayInner_1.BarSourceData1EmploymentHistoryArrayInner,
    "BarSourceData1FeesOptionsArrayInner": BarSourceData1FeesOptionsArrayInner_1.BarSourceData1FeesOptionsArrayInner,
    "BarSourceData1InvolvementsArrayInner": BarSourceData1InvolvementsArrayInner_1.BarSourceData1InvolvementsArrayInner,
    "BarSourceData1LawSchoolArrayInner": BarSourceData1LawSchoolArrayInner_1.BarSourceData1LawSchoolArrayInner,
    "BarSourceData1Name": BarSourceData1Name_1.BarSourceData1Name,
    "BarSourceData1OpenActionStatusArrayInner": BarSourceData1OpenActionStatusArrayInner_1.BarSourceData1OpenActionStatusArrayInner,
    "BarSourceData1OtherJurisdictionArrayInner": BarSourceData1OtherJurisdictionArrayInner_1.BarSourceData1OtherJurisdictionArrayInner,
    "BarSourceData1PublicHearingArrayInner": BarSourceData1PublicHearingArrayInner_1.BarSourceData1PublicHearingArrayInner,
    "BarSourceData1ReasonForInactivation": BarSourceData1ReasonForInactivation_1.BarSourceData1ReasonForInactivation,
    "BarSourceData1RelatedCasesArrayInner": BarSourceData1RelatedCasesArrayInner_1.BarSourceData1RelatedCasesArrayInner,
    "BarSourceData1SourceInfo": BarSourceData1SourceInfo_1.BarSourceData1SourceInfo,
    "BarSourceData1StatewideGrievanceCommitteeHistoryArrayInner": BarSourceData1StatewideGrievanceCommitteeHistoryArrayInner_1.BarSourceData1StatewideGrievanceCommitteeHistoryArrayInner,
    "BarSourceData1StatusHistoryArrayInner": BarSourceData1StatusHistoryArrayInner_1.BarSourceData1StatusHistoryArrayInner,
    "BarSourceData1TenYearDisciplineArrayInner": BarSourceData1TenYearDisciplineArrayInner_1.BarSourceData1TenYearDisciplineArrayInner,
    "BillingCycleUsageResponse": BillingCycleUsageResponse_1.BillingCycleUsageResponse,
    "BillingCyclesResponse": BillingCyclesResponse_1.BillingCyclesResponse,
    "CallbackListResponse": CallbackListResponse_1.CallbackListResponse,
    "Case": Case_1.Case,
    "CaseAnalyticsAPI": CaseAnalyticsAPI_1.CaseAnalyticsAPI,
    "CaseAnalyticsAPI1": CaseAnalyticsAPI1_1.CaseAnalyticsAPI1,
    "CaseCauseOfAction": CaseCauseOfAction_1.CaseCauseOfAction,
    "CaseCharge": CaseCharge_1.CaseCharge,
    "CaseClass": CaseClass_1.CaseClass,
    "CaseClass1": CaseClass1_1.CaseClass1,
    "CaseClassCoverage": CaseClassCoverage_1.CaseClassCoverage,
    "CaseClassResponse": CaseClassResponse_1.CaseClassResponse,
    "CaseCountAnalyticsByAreaOfLaw": CaseCountAnalyticsByAreaOfLaw_1.CaseCountAnalyticsByAreaOfLaw,
    "CaseCountAnalyticsByAreaOfLaw1": CaseCountAnalyticsByAreaOfLaw1_1.CaseCountAnalyticsByAreaOfLaw1,
    "CaseCountAnalyticsByAreaOfLawResponse": CaseCountAnalyticsByAreaOfLawResponse_1.CaseCountAnalyticsByAreaOfLawResponse,
    "CaseCountAnalyticsByAreaOfLawResponse1": CaseCountAnalyticsByAreaOfLawResponse1_1.CaseCountAnalyticsByAreaOfLawResponse1,
    "CaseCountAnalyticsByCaseClass": CaseCountAnalyticsByCaseClass_1.CaseCountAnalyticsByCaseClass,
    "CaseCountAnalyticsByCaseClass1": CaseCountAnalyticsByCaseClass1_1.CaseCountAnalyticsByCaseClass1,
    "CaseCountAnalyticsByCaseClassResponse": CaseCountAnalyticsByCaseClassResponse_1.CaseCountAnalyticsByCaseClassResponse,
    "CaseCountAnalyticsByCaseClassResponse1": CaseCountAnalyticsByCaseClassResponse1_1.CaseCountAnalyticsByCaseClassResponse1,
    "CaseCountAnalyticsByCaseFiledDate": CaseCountAnalyticsByCaseFiledDate_1.CaseCountAnalyticsByCaseFiledDate,
    "CaseCountAnalyticsByCaseFiledDate1": CaseCountAnalyticsByCaseFiledDate1_1.CaseCountAnalyticsByCaseFiledDate1,
    "CaseCountAnalyticsByCaseFiledDateResponse": CaseCountAnalyticsByCaseFiledDateResponse_1.CaseCountAnalyticsByCaseFiledDateResponse,
    "CaseCountAnalyticsByCaseFiledDateResponse1": CaseCountAnalyticsByCaseFiledDateResponse1_1.CaseCountAnalyticsByCaseFiledDateResponse1,
    "CaseCountAnalyticsByCaseType": CaseCountAnalyticsByCaseType_1.CaseCountAnalyticsByCaseType,
    "CaseCountAnalyticsByCaseType1": CaseCountAnalyticsByCaseType1_1.CaseCountAnalyticsByCaseType1,
    "CaseCountAnalyticsByCaseTypeGroup": CaseCountAnalyticsByCaseTypeGroup_1.CaseCountAnalyticsByCaseTypeGroup,
    "CaseCountAnalyticsByCaseTypeGroup1": CaseCountAnalyticsByCaseTypeGroup1_1.CaseCountAnalyticsByCaseTypeGroup1,
    "CaseCountAnalyticsByCaseTypeGroupResponse": CaseCountAnalyticsByCaseTypeGroupResponse_1.CaseCountAnalyticsByCaseTypeGroupResponse,
    "CaseCountAnalyticsByCaseTypeGroupResponse1": CaseCountAnalyticsByCaseTypeGroupResponse1_1.CaseCountAnalyticsByCaseTypeGroupResponse1,
    "CaseCountAnalyticsByCaseTypeResponse": CaseCountAnalyticsByCaseTypeResponse_1.CaseCountAnalyticsByCaseTypeResponse,
    "CaseCountAnalyticsByCaseTypeResponse1": CaseCountAnalyticsByCaseTypeResponse1_1.CaseCountAnalyticsByCaseTypeResponse1,
    "CaseCountAnalyticsByCourt": CaseCountAnalyticsByCourt_1.CaseCountAnalyticsByCourt,
    "CaseCountAnalyticsByCourt1": CaseCountAnalyticsByCourt1_1.CaseCountAnalyticsByCourt1,
    "CaseCountAnalyticsByCourt1Geo": CaseCountAnalyticsByCourt1Geo_1.CaseCountAnalyticsByCourt1Geo,
    "CaseCountAnalyticsByCourtLocation": CaseCountAnalyticsByCourtLocation_1.CaseCountAnalyticsByCourtLocation,
    "CaseCountAnalyticsByCourtLocation1": CaseCountAnalyticsByCourtLocation1_1.CaseCountAnalyticsByCourtLocation1,
    "CaseCountAnalyticsByCourtLocationResponse": CaseCountAnalyticsByCourtLocationResponse_1.CaseCountAnalyticsByCourtLocationResponse,
    "CaseCountAnalyticsByCourtLocationResponse1": CaseCountAnalyticsByCourtLocationResponse1_1.CaseCountAnalyticsByCourtLocationResponse1,
    "CaseCountAnalyticsByCourtResponse": CaseCountAnalyticsByCourtResponse_1.CaseCountAnalyticsByCourtResponse,
    "CaseCountAnalyticsByCourtResponse1": CaseCountAnalyticsByCourtResponse1_1.CaseCountAnalyticsByCourtResponse1,
    "CaseCountAnalyticsByCourtSystem": CaseCountAnalyticsByCourtSystem_1.CaseCountAnalyticsByCourtSystem,
    "CaseCountAnalyticsByCourtSystem1": CaseCountAnalyticsByCourtSystem1_1.CaseCountAnalyticsByCourtSystem1,
    "CaseCountAnalyticsByCourtSystemResponse": CaseCountAnalyticsByCourtSystemResponse_1.CaseCountAnalyticsByCourtSystemResponse,
    "CaseCountAnalyticsByCourtSystemResponse1": CaseCountAnalyticsByCourtSystemResponse1_1.CaseCountAnalyticsByCourtSystemResponse1,
    "CaseCountAnalyticsByCourtType": CaseCountAnalyticsByCourtType_1.CaseCountAnalyticsByCourtType,
    "CaseCountAnalyticsByCourtType1": CaseCountAnalyticsByCourtType1_1.CaseCountAnalyticsByCourtType1,
    "CaseCountAnalyticsByCourtTypeResponse": CaseCountAnalyticsByCourtTypeResponse_1.CaseCountAnalyticsByCourtTypeResponse,
    "CaseCountAnalyticsByCourtTypeResponse1": CaseCountAnalyticsByCourtTypeResponse1_1.CaseCountAnalyticsByCourtTypeResponse1,
    "CaseCountAnalyticsByJurisdictionGeo": CaseCountAnalyticsByJurisdictionGeo_1.CaseCountAnalyticsByJurisdictionGeo,
    "CaseCountAnalyticsByJurisdictionGeo1": CaseCountAnalyticsByJurisdictionGeo1_1.CaseCountAnalyticsByJurisdictionGeo1,
    "CaseCountAnalyticsByJurisdictionGeoResponse": CaseCountAnalyticsByJurisdictionGeoResponse_1.CaseCountAnalyticsByJurisdictionGeoResponse,
    "CaseCountAnalyticsByJurisdictionGeoResponse1": CaseCountAnalyticsByJurisdictionGeoResponse1_1.CaseCountAnalyticsByJurisdictionGeoResponse1,
    "CaseCountAnalyticsByNormAttorney": CaseCountAnalyticsByNormAttorney_1.CaseCountAnalyticsByNormAttorney,
    "CaseCountAnalyticsByNormAttorney1": CaseCountAnalyticsByNormAttorney1_1.CaseCountAnalyticsByNormAttorney1,
    "CaseCountAnalyticsByNormAttorneyResponse": CaseCountAnalyticsByNormAttorneyResponse_1.CaseCountAnalyticsByNormAttorneyResponse,
    "CaseCountAnalyticsByNormAttorneyResponse1": CaseCountAnalyticsByNormAttorneyResponse1_1.CaseCountAnalyticsByNormAttorneyResponse1,
    "CaseCountAnalyticsByNormJudge": CaseCountAnalyticsByNormJudge_1.CaseCountAnalyticsByNormJudge,
    "CaseCountAnalyticsByNormJudge1": CaseCountAnalyticsByNormJudge1_1.CaseCountAnalyticsByNormJudge1,
    "CaseCountAnalyticsByNormJudgeResponse": CaseCountAnalyticsByNormJudgeResponse_1.CaseCountAnalyticsByNormJudgeResponse,
    "CaseCountAnalyticsByNormJudgeResponse1": CaseCountAnalyticsByNormJudgeResponse1_1.CaseCountAnalyticsByNormJudgeResponse1,
    "CaseCountAnalyticsByNormLawFirm": CaseCountAnalyticsByNormLawFirm_1.CaseCountAnalyticsByNormLawFirm,
    "CaseCountAnalyticsByNormLawFirm1": CaseCountAnalyticsByNormLawFirm1_1.CaseCountAnalyticsByNormLawFirm1,
    "CaseCountAnalyticsByNormLawFirmResponse": CaseCountAnalyticsByNormLawFirmResponse_1.CaseCountAnalyticsByNormLawFirmResponse,
    "CaseCountAnalyticsByNormLawFirmResponse1": CaseCountAnalyticsByNormLawFirmResponse1_1.CaseCountAnalyticsByNormLawFirmResponse1,
    "CaseCountAnalyticsByNormParty": CaseCountAnalyticsByNormParty_1.CaseCountAnalyticsByNormParty,
    "CaseCountAnalyticsByNormParty1": CaseCountAnalyticsByNormParty1_1.CaseCountAnalyticsByNormParty1,
    "CaseCountAnalyticsByNormPartyResponse": CaseCountAnalyticsByNormPartyResponse_1.CaseCountAnalyticsByNormPartyResponse,
    "CaseCountAnalyticsByNormPartyResponse1": CaseCountAnalyticsByNormPartyResponse1_1.CaseCountAnalyticsByNormPartyResponse1,
    "CaseCountAnalyticsByPartyRole": CaseCountAnalyticsByPartyRole_1.CaseCountAnalyticsByPartyRole,
    "CaseCountAnalyticsByPartyRole1": CaseCountAnalyticsByPartyRole1_1.CaseCountAnalyticsByPartyRole1,
    "CaseCountAnalyticsByPartyRoleGroup": CaseCountAnalyticsByPartyRoleGroup_1.CaseCountAnalyticsByPartyRoleGroup,
    "CaseCountAnalyticsByPartyRoleGroup1": CaseCountAnalyticsByPartyRoleGroup1_1.CaseCountAnalyticsByPartyRoleGroup1,
    "CaseCountAnalyticsByPartyRoleGroupResponse": CaseCountAnalyticsByPartyRoleGroupResponse_1.CaseCountAnalyticsByPartyRoleGroupResponse,
    "CaseCountAnalyticsByPartyRoleGroupResponse1": CaseCountAnalyticsByPartyRoleGroupResponse1_1.CaseCountAnalyticsByPartyRoleGroupResponse1,
    "CaseCountAnalyticsByPartyRoleResponse": CaseCountAnalyticsByPartyRoleResponse_1.CaseCountAnalyticsByPartyRoleResponse,
    "CaseCountAnalyticsByPartyRoleResponse1": CaseCountAnalyticsByPartyRoleResponse1_1.CaseCountAnalyticsByPartyRoleResponse1,
    "CaseDocument": CaseDocument_1.CaseDocument,
    "CaseDocumentOrderCallback": CaseDocumentOrderCallback_1.CaseDocumentOrderCallback,
    "CaseDocumentOrderCallbackListResponse": CaseDocumentOrderCallbackListResponse_1.CaseDocumentOrderCallbackListResponse,
    "CaseDocumentOrderPacerOptions": CaseDocumentOrderPacerOptions_1.CaseDocumentOrderPacerOptions,
    "CaseDocumentOrderRequest": CaseDocumentOrderRequest_1.CaseDocumentOrderRequest,
    "CaseDocuments": CaseDocuments_1.CaseDocuments,
    "CaseExportCallback": CaseExportCallback_1.CaseExportCallback,
    "CaseExportCallbackListResponse": CaseExportCallbackListResponse_1.CaseExportCallbackListResponse,
    "CaseRelationshipType": CaseRelationshipType_1.CaseRelationshipType,
    "CaseRelationshipType1": CaseRelationshipType1_1.CaseRelationshipType1,
    "CaseRelationshipTypeResponse": CaseRelationshipTypeResponse_1.CaseRelationshipTypeResponse,
    "CaseSearchResponse": CaseSearchResponse_1.CaseSearchResponse,
    "CaseSearchResult": CaseSearchResult_1.CaseSearchResult,
    "CaseSearchResult1": CaseSearchResult1_1.CaseSearchResult1,
    "CaseSearchResult1MatchedObjectArrayInner": CaseSearchResult1MatchedObjectArrayInner_1.CaseSearchResult1MatchedObjectArrayInner,
    "CaseStats": CaseStats_1.CaseStats,
    "CaseStatus": CaseStatus_1.CaseStatus,
    "CaseStatus1": CaseStatus1_1.CaseStatus1,
    "CaseStatusGroup": CaseStatusGroup_1.CaseStatusGroup,
    "CaseStatusGroup1": CaseStatusGroup1_1.CaseStatusGroup1,
    "CaseStatusGroupResponse": CaseStatusGroupResponse_1.CaseStatusGroupResponse,
    "CaseStatusResponse": CaseStatusResponse_1.CaseStatusResponse,
    "CaseTimeline": CaseTimeline_1.CaseTimeline,
    "CaseTimeline1": CaseTimeline1_1.CaseTimeline1,
    "CaseTrack": CaseTrack_1.CaseTrack,
    "CaseTrackListResponse": CaseTrackListResponse_1.CaseTrackListResponse,
    "CaseTrackPostRequest": CaseTrackPostRequest_1.CaseTrackPostRequest,
    "CaseTrackPostRequestLastTrackedDetails": CaseTrackPostRequestLastTrackedDetails_1.CaseTrackPostRequestLastTrackedDetails,
    "CaseTrackPreview": CaseTrackPreview_1.CaseTrackPreview,
    "CaseTrackRequest": CaseTrackRequest_1.CaseTrackRequest,
    "CaseTrackSchedule": CaseTrackSchedule_1.CaseTrackSchedule,
    "CaseType": CaseType_1.CaseType,
    "CaseType1": CaseType1_1.CaseType1,
    "CaseTypeGroup": CaseTypeGroup_1.CaseTypeGroup,
    "CaseTypeGroup1": CaseTypeGroup1_1.CaseTypeGroup1,
    "CaseTypeGroupResponse": CaseTypeGroupResponse_1.CaseTypeGroupResponse,
    "CaseTypeResponse": CaseTypeResponse_1.CaseTypeResponse,
    "CaseUpdate": CaseUpdate_1.CaseUpdate,
    "CaseUpdateListResponse": CaseUpdateListResponse_1.CaseUpdateListResponse,
    "CaseUpdatePacerOptions": CaseUpdatePacerOptions_1.CaseUpdatePacerOptions,
    "CaseUpdatePacerOptionsResponse": CaseUpdatePacerOptionsResponse_1.CaseUpdatePacerOptionsResponse,
    "CaseUpdatePacerOptionsResponse1": CaseUpdatePacerOptionsResponse1_1.CaseUpdatePacerOptionsResponse1,
    "CaseUpdatePreview": CaseUpdatePreview_1.CaseUpdatePreview,
    "CaseUpdateRequest": CaseUpdateRequest_1.CaseUpdateRequest,
    "CauseOfAction": CauseOfAction_1.CauseOfAction,
    "CauseOfAction1": CauseOfAction1_1.CauseOfAction1,
    "CauseOfActionAdditionalData": CauseOfActionAdditionalData_1.CauseOfActionAdditionalData,
    "CauseOfActionAdditionalData1": CauseOfActionAdditionalData1_1.CauseOfActionAdditionalData1,
    "CauseOfActionAdditionalDataResponse": CauseOfActionAdditionalDataResponse_1.CauseOfActionAdditionalDataResponse,
    "CauseOfActionGroup": CauseOfActionGroup_1.CauseOfActionGroup,
    "CauseOfActionGroup1": CauseOfActionGroup1_1.CauseOfActionGroup1,
    "CauseOfActionGroupResponse": CauseOfActionGroupResponse_1.CauseOfActionGroupResponse,
    "CauseOfActionResponse": CauseOfActionResponse_1.CauseOfActionResponse,
    "Charge": Charge_1.Charge,
    "Charge1": Charge1_1.Charge1,
    "ChargeAdditionalData": ChargeAdditionalData_1.ChargeAdditionalData,
    "ChargeAdditionalData1": ChargeAdditionalData1_1.ChargeAdditionalData1,
    "ChargeAdditionalDataResponse": ChargeAdditionalDataResponse_1.ChargeAdditionalDataResponse,
    "ChargeDegree": ChargeDegree_1.ChargeDegree,
    "ChargeDegree1": ChargeDegree1_1.ChargeDegree1,
    "ChargeDegreeResponse": ChargeDegreeResponse_1.ChargeDegreeResponse,
    "ChargeGroup": ChargeGroup_1.ChargeGroup,
    "ChargeGroup1": ChargeGroup1_1.ChargeGroup1,
    "ChargeGroupResponse": ChargeGroupResponse_1.ChargeGroupResponse,
    "ChargeResponse": ChargeResponse_1.ChargeResponse,
    "ChargeSeverity": ChargeSeverity_1.ChargeSeverity,
    "ChargeSeverity1": ChargeSeverity1_1.ChargeSeverity1,
    "ChargeSeverityResponse": ChargeSeverityResponse_1.ChargeSeverityResponse,
    "Contact": Contact_1.Contact,
    "Court": Court_1.Court,
    "Court1": Court1_1.Court1,
    "CourtCoverage": CourtCoverage_1.CourtCoverage,
    "CourtLocation": CourtLocation_1.CourtLocation,
    "CourtLocation1": CourtLocation1_1.CourtLocation1,
    "CourtLocationResponse": CourtLocationResponse_1.CourtLocationResponse,
    "CourtLocationResponse1": CourtLocationResponse1_1.CourtLocationResponse1,
    "CourtResponse": CourtResponse_1.CourtResponse,
    "CourtServiceStatus": CourtServiceStatus_1.CourtServiceStatus,
    "CourtServiceStatusResponse": CourtServiceStatusResponse_1.CourtServiceStatusResponse,
    "CourtSystem": CourtSystem_1.CourtSystem,
    "CourtSystem1": CourtSystem1_1.CourtSystem1,
    "CourtSystemResponse": CourtSystemResponse_1.CourtSystemResponse,
    "CourtType": CourtType_1.CourtType,
    "CourtType1": CourtType1_1.CourtType1,
    "CourtTypeResponse": CourtTypeResponse_1.CourtTypeResponse,
    "DailyUsageResponse": DailyUsageResponse_1.DailyUsageResponse,
    "DocketEntries": DocketEntries_1.DocketEntries,
    "DocketEntry": DocketEntry_1.DocketEntry,
    "DocketEntryPrimaryDocuments": DocketEntryPrimaryDocuments_1.DocketEntryPrimaryDocuments,
    "DocketEntrySecondaryDocuments": DocketEntrySecondaryDocuments_1.DocketEntrySecondaryDocuments,
    "DocumentDownload": DocumentDownload_1.DocumentDownload,
    "Email": Email_1.Email,
    "Exception": Exception_1.Exception,
    "Exception1": Exception1_1.Exception1,
    "ExportCase200Response": ExportCase200Response_1.ExportCase200Response,
    "ExportFile": ExportFile_1.ExportFile,
    "ExportFile1": ExportFile1_1.ExportFile1,
    "ExtractedFields": ExtractedFields_1.ExtractedFields,
    "GenerateNewToken200Response": GenerateNewToken200Response_1.GenerateNewToken200Response,
    "GenerateNewTokenRequest": GenerateNewTokenRequest_1.GenerateNewTokenRequest,
    "GetAreasOfLaw200Response": GetAreasOfLaw200Response_1.GetAreasOfLaw200Response,
    "GetAttorneyRepresentationTypes200Response": GetAttorneyRepresentationTypes200Response_1.GetAttorneyRepresentationTypes200Response,
    "GetAttorneyTypes200Response": GetAttorneyTypes200Response_1.GetAttorneyTypes200Response,
    "GetBillingCycles200Response": GetBillingCycles200Response_1.GetBillingCycles200Response,
    "GetBillingUsageByBillingCycle200Response": GetBillingUsageByBillingCycle200Response_1.GetBillingUsageByBillingCycle200Response,
    "GetBillingUsageByBillingCycle200ResponseApiCallsBillable": GetBillingUsageByBillingCycle200ResponseApiCallsBillable_1.GetBillingUsageByBillingCycle200ResponseApiCallsBillable,
    "GetBillingUsageByBillingCycle200ResponseApiCallsCredited": GetBillingUsageByBillingCycle200ResponseApiCallsCredited_1.GetBillingUsageByBillingCycle200ResponseApiCallsCredited,
    "GetBillingUsageByBillingCycle200ResponseApiCallsMade": GetBillingUsageByBillingCycle200ResponseApiCallsMade_1.GetBillingUsageByBillingCycle200ResponseApiCallsMade,
    "GetBillingUsageByBillingCycle200ResponseBillingCycle": GetBillingUsageByBillingCycle200ResponseBillingCycle_1.GetBillingUsageByBillingCycle200ResponseBillingCycle,
    "GetCallbacks200Response": GetCallbacks200Response_1.GetCallbacks200Response,
    "GetCallbacks200ResponseCaseDocumentOrderCallbacks": GetCallbacks200ResponseCaseDocumentOrderCallbacks_1.GetCallbacks200ResponseCaseDocumentOrderCallbacks,
    "GetCallbacks200ResponseCaseExportCallbacks": GetCallbacks200ResponseCaseExportCallbacks_1.GetCallbacks200ResponseCaseExportCallbacks,
    "GetCase200Response": GetCase200Response_1.GetCase200Response,
    "GetCase200ResponseAttorneys": GetCase200ResponseAttorneys_1.GetCase200ResponseAttorneys,
    "GetCase200ResponseAttorneysAttorneyArrayInner": GetCase200ResponseAttorneysAttorneyArrayInner_1.GetCase200ResponseAttorneysAttorneyArrayInner,
    "GetCase200ResponseAttorneysAttorneyArrayInnerAttorneyLawFirmArrayInner": GetCase200ResponseAttorneysAttorneyArrayInnerAttorneyLawFirmArrayInner_1.GetCase200ResponseAttorneysAttorneyArrayInnerAttorneyLawFirmArrayInner,
    "GetCase200ResponseCaseDocuments": GetCase200ResponseCaseDocuments_1.GetCase200ResponseCaseDocuments,
    "GetCase200ResponseCaseStats": GetCase200ResponseCaseStats_1.GetCase200ResponseCaseStats,
    "GetCase200ResponseCauseOfActionArrayInner": GetCase200ResponseCauseOfActionArrayInner_1.GetCase200ResponseCauseOfActionArrayInner,
    "GetCase200ResponseChargeArrayInner": GetCase200ResponseChargeArrayInner_1.GetCase200ResponseChargeArrayInner,
    "GetCase200ResponseDocketEntries": GetCase200ResponseDocketEntries_1.GetCase200ResponseDocketEntries,
    "GetCase200ResponseDocketEntriesDocketEntryArrayInner": GetCase200ResponseDocketEntriesDocketEntryArrayInner_1.GetCase200ResponseDocketEntriesDocketEntryArrayInner,
    "GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments": GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments_1.GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments,
    "GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner": GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner_1.GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner,
    "GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerPreviewDocument": GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerPreviewDocument_1.GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerPreviewDocument,
    "GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments": GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments_1.GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments,
    "GetCase200ResponseDocketEntriesDocketEntryArrayInnerReferencedDocketNumberArrayInner": GetCase200ResponseDocketEntriesDocketEntryArrayInnerReferencedDocketNumberArrayInner_1.GetCase200ResponseDocketEntriesDocketEntryArrayInnerReferencedDocketNumberArrayInner,
    "GetCase200ResponseHearings": GetCase200ResponseHearings_1.GetCase200ResponseHearings,
    "GetCase200ResponseHearingsHearingArrayInner": GetCase200ResponseHearingsHearingArrayInner_1.GetCase200ResponseHearingsHearingArrayInner,
    "GetCase200ResponseJudges": GetCase200ResponseJudges_1.GetCase200ResponseJudges,
    "GetCase200ResponseJudgesJudgeArrayInner": GetCase200ResponseJudgesJudgeArrayInner_1.GetCase200ResponseJudgesJudgeArrayInner,
    "GetCase200ResponseParties": GetCase200ResponseParties_1.GetCase200ResponseParties,
    "GetCase200ResponsePartiesPartyArrayInner": GetCase200ResponsePartiesPartyArrayInner_1.GetCase200ResponsePartiesPartyArrayInner,
    "GetCase200ResponsePartiesPartyArrayInnerContact": GetCase200ResponsePartiesPartyArrayInnerContact_1.GetCase200ResponsePartiesPartyArrayInnerContact,
    "GetCase200ResponsePartiesPartyArrayInnerContactAddressArrayInner": GetCase200ResponsePartiesPartyArrayInnerContactAddressArrayInner_1.GetCase200ResponsePartiesPartyArrayInnerContactAddressArrayInner,
    "GetCase200ResponsePartiesPartyArrayInnerContactEmailArrayInner": GetCase200ResponsePartiesPartyArrayInnerContactEmailArrayInner_1.GetCase200ResponsePartiesPartyArrayInnerContactEmailArrayInner,
    "GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInner": GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInner_1.GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInner,
    "GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations": GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations_1.GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations,
    "GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociationsPartyAttorneyAssociationArrayInner": GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociationsPartyAttorneyAssociationArrayInner_1.GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociationsPartyAttorneyAssociationArrayInner,
    "GetCase200ResponseRelatedCases": GetCase200ResponseRelatedCases_1.GetCase200ResponseRelatedCases,
    "GetCase200ResponseRelatedCasesRelatedCaseArrayInner": GetCase200ResponseRelatedCasesRelatedCaseArrayInner_1.GetCase200ResponseRelatedCasesRelatedCaseArrayInner,
    "GetCase200ResponseSourceCaseData": GetCase200ResponseSourceCaseData_1.GetCase200ResponseSourceCaseData,
    "GetCase200ResponseSourceCaseDataNatureOfSuitArrayInner": GetCase200ResponseSourceCaseDataNatureOfSuitArrayInner_1.GetCase200ResponseSourceCaseDataNatureOfSuitArrayInner,
    "GetCase200ResponseSourceCaseDataSourceCauseOfActionArrayInner": GetCase200ResponseSourceCaseDataSourceCauseOfActionArrayInner_1.GetCase200ResponseSourceCaseDataSourceCauseOfActionArrayInner,
    "GetCase200ResponseSourceCaseDataSourceChargeArrayInner": GetCase200ResponseSourceCaseDataSourceChargeArrayInner_1.GetCase200ResponseSourceCaseDataSourceChargeArrayInner,
    "GetCase200ResponseSourceCaseDataSourceChargeArrayInnerSourceChargeAdditionalDataArrayInner": GetCase200ResponseSourceCaseDataSourceChargeArrayInnerSourceChargeAdditionalDataArrayInner_1.GetCase200ResponseSourceCaseDataSourceChargeArrayInnerSourceChargeAdditionalDataArrayInner,
    "GetCase200ResponseSourceCaseDataSourcePageDataInner": GetCase200ResponseSourceCaseDataSourcePageDataInner_1.GetCase200ResponseSourceCaseDataSourcePageDataInner,
    "GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceData": GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceData_1.GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceData,
    "GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataExtractedFields": GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataExtractedFields_1.GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataExtractedFields,
    "GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInner": GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInner_1.GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInner,
    "GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInnerChildArrayInner": GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInnerChildArrayInner_1.GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInnerChildArrayInner,
    "GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInnerChildArrayInnerChildArrayInner": GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInnerChildArrayInnerChildArrayInner_1.GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInnerChildArrayInnerChildArrayInner,
    "GetCaseDocumentDownloadById200Response": GetCaseDocumentDownloadById200Response_1.GetCaseDocumentDownloadById200Response,
    "GetCaseDocumentOrderCallbacks200Response": GetCaseDocumentOrderCallbacks200Response_1.GetCaseDocumentOrderCallbacks200Response,
    "GetCaseExportCallbacks200Response": GetCaseExportCallbacks200Response_1.GetCaseExportCallbacks200Response,
    "GetCaseRelationshipTypes200Response": GetCaseRelationshipTypes200Response_1.GetCaseRelationshipTypes200Response,
    "GetCaseStatusGroups200Response": GetCaseStatusGroups200Response_1.GetCaseStatusGroups200Response,
    "GetCaseTracks200Response": GetCaseTracks200Response_1.GetCaseTracks200Response,
    "GetCaseTracks200ResponseCaseTrackPreviewArrayInner": GetCaseTracks200ResponseCaseTrackPreviewArrayInner_1.GetCaseTracks200ResponseCaseTrackPreviewArrayInner,
    "GetCaseTypeGroups200Response": GetCaseTypeGroups200Response_1.GetCaseTypeGroups200Response,
    "GetCaseTypes200Response": GetCaseTypes200Response_1.GetCaseTypes200Response,
    "GetCaseUpdates200Response": GetCaseUpdates200Response_1.GetCaseUpdates200Response,
    "GetCaseUpdates200ResponseCaseUpdatePreviewArrayInner": GetCaseUpdates200ResponseCaseUpdatePreviewArrayInner_1.GetCaseUpdates200ResponseCaseUpdatePreviewArrayInner,
    "GetCasesClass200Response": GetCasesClass200Response_1.GetCasesClass200Response,
    "GetCasesStatus200Response": GetCasesStatus200Response_1.GetCasesStatus200Response,
    "GetCausesOfAction200Response": GetCausesOfAction200Response_1.GetCausesOfAction200Response,
    "GetCausesOfActionAdditionalData200Response": GetCausesOfActionAdditionalData200Response_1.GetCausesOfActionAdditionalData200Response,
    "GetCausesOfActionGroup200Response": GetCausesOfActionGroup200Response_1.GetCausesOfActionGroup200Response,
    "GetChargeGroups200Response": GetChargeGroups200Response_1.GetChargeGroups200Response,
    "GetCharges200Response": GetCharges200Response_1.GetCharges200Response,
    "GetChargesAdditionalData200Response": GetChargesAdditionalData200Response_1.GetChargesAdditionalData200Response,
    "GetChargesDegree200Response": GetChargesDegree200Response_1.GetChargesDegree200Response,
    "GetChargesSeverity200Response": GetChargesSeverity200Response_1.GetChargesSeverity200Response,
    "GetCourtCoverage200Response": GetCourtCoverage200Response_1.GetCourtCoverage200Response,
    "GetCourtCoverage200ResponseCaseClassCoverageArrayInner": GetCourtCoverage200ResponseCaseClassCoverageArrayInner_1.GetCourtCoverage200ResponseCaseClassCoverageArrayInner,
    "GetCourtSystems200Response": GetCourtSystems200Response_1.GetCourtSystems200Response,
    "GetCourtTypes200Response": GetCourtTypes200Response_1.GetCourtTypes200Response,
    "GetCourts200Response": GetCourts200Response_1.GetCourts200Response,
    "GetCourtsServiceStatus200Response": GetCourtsServiceStatus200Response_1.GetCourtsServiceStatus200Response,
    "GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner": GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner_1.GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner,
    "GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus": GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus_1.GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus,
    "GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetails": GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetails_1.GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetails,
    "GetDailyUsageByDate200Response": GetDailyUsageByDate200Response_1.GetDailyUsageByDate200Response,
    "GetJudgeTypes200Response": GetJudgeTypes200Response_1.GetJudgeTypes200Response,
    "GetPacerCredential200Response": GetPacerCredential200Response_1.GetPacerCredential200Response,
    "GetPacerCredential200ResponsePacerCredentialArrayInner": GetPacerCredential200ResponsePacerCredentialArrayInner_1.GetPacerCredential200ResponsePacerCredentialArrayInner,
    "GetPartyRoleGroups200Response": GetPartyRoleGroups200Response_1.GetPartyRoleGroups200Response,
    "GetPartyRoles200Response": GetPartyRoles200Response_1.GetPartyRoles200Response,
    "Hearing": Hearing_1.Hearing,
    "Hearings": Hearings_1.Hearings,
    "ImportPacerCaseByCourtUsingCaseNumber200Response": ImportPacerCaseByCourtUsingCaseNumber200Response_1.ImportPacerCaseByCourtUsingCaseNumber200Response,
    "ImportPacerCaseByCourtUsingCaseNumber200ResponsePacerImportCaseResultsArrayInner": ImportPacerCaseByCourtUsingCaseNumber200ResponsePacerImportCaseResultsArrayInner_1.ImportPacerCaseByCourtUsingCaseNumber200ResponsePacerImportCaseResultsArrayInner,
    "Individual": Individual_1.Individual,
    "InvalidateAccessTokenRequest": InvalidateAccessTokenRequest_1.InvalidateAccessTokenRequest,
    "InvalidateTokenRequest": InvalidateTokenRequest_1.InvalidateTokenRequest,
    "Judge": Judge_1.Judge,
    "JudgeAnalyticsAPI": JudgeAnalyticsAPI_1.JudgeAnalyticsAPI,
    "JudgeAnalyticsAPI1": JudgeAnalyticsAPI1_1.JudgeAnalyticsAPI1,
    "JudgeType": JudgeType_1.JudgeType,
    "JudgeType1": JudgeType1_1.JudgeType1,
    "JudgeTypeResponse": JudgeTypeResponse_1.JudgeTypeResponse,
    "Judges": Judges_1.Judges,
    "JurisdictionGeo": JurisdictionGeo_1.JurisdictionGeo,
    "JurisdictionGeo1": JurisdictionGeo1_1.JurisdictionGeo1,
    "JurisdictionGeoResponse": JurisdictionGeoResponse_1.JurisdictionGeoResponse,
    "JurisdictionGeoResponse1": JurisdictionGeoResponse1_1.JurisdictionGeoResponse1,
    "LastTrackedDetails": LastTrackedDetails_1.LastTrackedDetails,
    "LawFirmAnalyticsAPI": LawFirmAnalyticsAPI_1.LawFirmAnalyticsAPI,
    "LawFirmAnalyticsAPI1": LawFirmAnalyticsAPI1_1.LawFirmAnalyticsAPI1,
    "ListAllTokenIds200Response": ListAllTokenIds200Response_1.ListAllTokenIds200Response,
    "ListAllTokenIds200ResponseAccessTokenIdArrayInner": ListAllTokenIds200ResponseAccessTokenIdArrayInner_1.ListAllTokenIds200ResponseAccessTokenIdArrayInner,
    "MatchedObject": MatchedObject_1.MatchedObject,
    "NatureOfSuit": NatureOfSuit_1.NatureOfSuit,
    "NormAttorney": NormAttorney_1.NormAttorney,
    "NormAttorney1": NormAttorney1_1.NormAttorney1,
    "NormAttorneySearchResponse": NormAttorneySearchResponse_1.NormAttorneySearchResponse,
    "NormAttorneySearchResult": NormAttorneySearchResult_1.NormAttorneySearchResult,
    "NormCorporateGroup": NormCorporateGroup_1.NormCorporateGroup,
    "NormCorporateGroup1": NormCorporateGroup1_1.NormCorporateGroup1,
    "NormJudge": NormJudge_1.NormJudge,
    "NormJudge1": NormJudge1_1.NormJudge1,
    "NormJudgePublicData": NormJudgePublicData_1.NormJudgePublicData,
    "NormJudgePublicData1": NormJudgePublicData1_1.NormJudgePublicData1,
    "NormJudgePublicData1AbaRatings": NormJudgePublicData1AbaRatings_1.NormJudgePublicData1AbaRatings,
    "NormJudgePublicData1Bio": NormJudgePublicData1Bio_1.NormJudgePublicData1Bio,
    "NormJudgePublicData1EducationArrayInner": NormJudgePublicData1EducationArrayInner_1.NormJudgePublicData1EducationArrayInner,
    "NormJudgePublicData1JudicialSource": NormJudgePublicData1JudicialSource_1.NormJudgePublicData1JudicialSource,
    "NormJudgePublicData1NameHistoryArrayInner": NormJudgePublicData1NameHistoryArrayInner_1.NormJudgePublicData1NameHistoryArrayInner,
    "NormJudgeSearchResponse": NormJudgeSearchResponse_1.NormJudgeSearchResponse,
    "NormJudgeSearchResult": NormJudgeSearchResult_1.NormJudgeSearchResult,
    "NormLawFirm": NormLawFirm_1.NormLawFirm,
    "NormLawFirm1": NormLawFirm1_1.NormLawFirm1,
    "NormLawFirmSearchResponse": NormLawFirmSearchResponse_1.NormLawFirmSearchResponse,
    "NormLawFirmSearchResult": NormLawFirmSearchResult_1.NormLawFirmSearchResult,
    "NormOrganization": NormOrganization_1.NormOrganization,
    "NormOrganization1": NormOrganization1_1.NormOrganization1,
    "NormOrganization1TickerArrayInner": NormOrganization1TickerArrayInner_1.NormOrganization1TickerArrayInner,
    "NormParty": NormParty_1.NormParty,
    "NormParty1": NormParty1_1.NormParty1,
    "NormPartySearchResponse": NormPartySearchResponse_1.NormPartySearchResponse,
    "NormPartySearchResult": NormPartySearchResult_1.NormPartySearchResult,
    "OrderCaseDocument200Response": OrderCaseDocument200Response_1.OrderCaseDocument200Response,
    "OrderCaseDocumentRequest": OrderCaseDocumentRequest_1.OrderCaseDocumentRequest,
    "OrderCaseDocumentRequestPacerOptions": OrderCaseDocumentRequestPacerOptions_1.OrderCaseDocumentRequestPacerOptions,
    "PACERCaseSearchContent": PACERCaseSearchContent_1.PACERCaseSearchContent,
    "PACERCaseSearchResults": PACERCaseSearchResults_1.PACERCaseSearchResults,
    "PACERImportCase": PACERImportCase_1.PACERImportCase,
    "PACERImportCaseResults": PACERImportCaseResults_1.PACERImportCaseResults,
    "PACERPartySearchContent": PACERPartySearchContent_1.PACERPartySearchContent,
    "PACERPartySearchResults": PACERPartySearchResults_1.PACERPartySearchResults,
    "PACERSearchPageInfo": PACERSearchPageInfo_1.PACERSearchPageInfo,
    "PACERSearchReceipt": PACERSearchReceipt_1.PACERSearchReceipt,
    "PCLCase": PCLCase_1.PCLCase,
    "PCLParty": PCLParty_1.PCLParty,
    "PacerCredential": PacerCredential_1.PacerCredential,
    "PacerCredentialListResponse": PacerCredentialListResponse_1.PacerCredentialListResponse,
    "PacerCredentialRequest": PacerCredentialRequest_1.PacerCredentialRequest,
    "Parties": Parties_1.Parties,
    "Party": Party_1.Party,
    "PartyAnalyticsAPI": PartyAnalyticsAPI_1.PartyAnalyticsAPI,
    "PartyAnalyticsAPI1": PartyAnalyticsAPI1_1.PartyAnalyticsAPI1,
    "PartyAttorneyAssociation": PartyAttorneyAssociation_1.PartyAttorneyAssociation,
    "PartyAttorneyAssociations": PartyAttorneyAssociations_1.PartyAttorneyAssociations,
    "PartyRole": PartyRole_1.PartyRole,
    "PartyRole1": PartyRole1_1.PartyRole1,
    "PartyRoleGroup": PartyRoleGroup_1.PartyRoleGroup,
    "PartyRoleGroup1": PartyRoleGroup1_1.PartyRoleGroup1,
    "PartyRoleGroupResponse": PartyRoleGroupResponse_1.PartyRoleGroupResponse,
    "PartyRoleResponse": PartyRoleResponse_1.PartyRoleResponse,
    "Phone": Phone_1.Phone,
    "PossibleNormAttorney": PossibleNormAttorney_1.PossibleNormAttorney,
    "PossibleNormAttorney1": PossibleNormAttorney1_1.PossibleNormAttorney1,
    "PossibleNormAttorney1ScoreConstituents": PossibleNormAttorney1ScoreConstituents_1.PossibleNormAttorney1ScoreConstituents,
    "PossibleNormJudge": PossibleNormJudge_1.PossibleNormJudge,
    "PossibleNormJudge1": PossibleNormJudge1_1.PossibleNormJudge1,
    "PossibleNormJudge1ScoreConstituents": PossibleNormJudge1ScoreConstituents_1.PossibleNormJudge1ScoreConstituents,
    "PossibleNormLawFirm": PossibleNormLawFirm_1.PossibleNormLawFirm,
    "PossibleNormLawFirm1": PossibleNormLawFirm1_1.PossibleNormLawFirm1,
    "PossibleNormLawFirm1ScoreConstituents": PossibleNormLawFirm1ScoreConstituents_1.PossibleNormLawFirm1ScoreConstituents,
    "PossibleNormLawFirm1SourceDetails": PossibleNormLawFirm1SourceDetails_1.PossibleNormLawFirm1SourceDetails,
    "PossibleNormParty": PossibleNormParty_1.PossibleNormParty,
    "PossibleNormParty1": PossibleNormParty1_1.PossibleNormParty1,
    "PossibleNormParty1ScoreConstituents": PossibleNormParty1ScoreConstituents_1.PossibleNormParty1ScoreConstituents,
    "PreviewDocument": PreviewDocument_1.PreviewDocument,
    "RawOrderedData": RawOrderedData_1.RawOrderedData,
    "RawOrderedDataChild": RawOrderedDataChild_1.RawOrderedDataChild,
    "ReferencedDocketNumber": ReferencedDocketNumber_1.ReferencedDocketNumber,
    "RelatedCase": RelatedCase_1.RelatedCase,
    "RelatedCases": RelatedCases_1.RelatedCases,
    "RelatedNormParty": RelatedNormParty_1.RelatedNormParty,
    "RelatedNormParty1": RelatedNormParty1_1.RelatedNormParty1,
    "SOSAssociatedNormOrganization": SOSAssociatedNormOrganization_1.SOSAssociatedNormOrganization,
    "SOSAssociatedNormOrganization1": SOSAssociatedNormOrganization1_1.SOSAssociatedNormOrganization1,
    "SOSData": SOSData_1.SOSData,
    "SOSData1": SOSData1_1.SOSData1,
    "SOSDataPreview": SOSDataPreview_1.SOSDataPreview,
    "SOSDataPreview1": SOSDataPreview1_1.SOSDataPreview1,
    "SOSNameChange": SOSNameChange_1.SOSNameChange,
    "SOSNameChange1": SOSNameChange1_1.SOSNameChange1,
    "Schedule": Schedule_1.Schedule,
    "Schedule1": Schedule1_1.Schedule1,
    "Schedule2": Schedule2_1.Schedule2,
    "SearchCases200Response": SearchCases200Response_1.SearchCases200Response,
    "SearchNormalizedAttorneys200Response": SearchNormalizedAttorneys200Response_1.SearchNormalizedAttorneys200Response,
    "SearchNormalizedAttorneys200ResponseNormAttorneySearchResultArrayInner": SearchNormalizedAttorneys200ResponseNormAttorneySearchResultArrayInner_1.SearchNormalizedAttorneys200ResponseNormAttorneySearchResultArrayInner,
    "SearchNormalizedJudges200Response": SearchNormalizedJudges200Response_1.SearchNormalizedJudges200Response,
    "SearchNormalizedJudges200ResponseNormJudgeSearchResultArrayInner": SearchNormalizedJudges200ResponseNormJudgeSearchResultArrayInner_1.SearchNormalizedJudges200ResponseNormJudgeSearchResultArrayInner,
    "SearchNormalizedLawFirms200Response": SearchNormalizedLawFirms200Response_1.SearchNormalizedLawFirms200Response,
    "SearchNormalizedLawFirms200ResponseNormLawFirmSearchResultArrayInner": SearchNormalizedLawFirms200ResponseNormLawFirmSearchResultArrayInner_1.SearchNormalizedLawFirms200ResponseNormLawFirmSearchResultArrayInner,
    "SearchNormalizedParties200Response": SearchNormalizedParties200Response_1.SearchNormalizedParties200Response,
    "SearchNormalizedParties200ResponseNormPartySearchResultArrayInner": SearchNormalizedParties200ResponseNormPartySearchResultArrayInner_1.SearchNormalizedParties200ResponseNormPartySearchResultArrayInner,
    "ServiceHistory": ServiceHistory_1.ServiceHistory,
    "ServiceHistory1": ServiceHistory1_1.ServiceHistory1,
    "ServiceStatus": ServiceStatus_1.ServiceStatus,
    "ServiceStatusDownDetails": ServiceStatusDownDetails_1.ServiceStatusDownDetails,
    "SimilarNormAttorney": SimilarNormAttorney_1.SimilarNormAttorney,
    "SimilarNormAttorney1": SimilarNormAttorney1_1.SimilarNormAttorney1,
    "SourceCaseData": SourceCaseData_1.SourceCaseData,
    "SourceCauseOfAction": SourceCauseOfAction_1.SourceCauseOfAction,
    "SourceCharge": SourceCharge_1.SourceCharge,
    "SourceChargeAdditionalData": SourceChargeAdditionalData_1.SourceChargeAdditionalData,
    "SourcePageData": SourcePageData_1.SourcePageData,
    "SourceStructuredData": SourceStructuredData_1.SourceStructuredData,
    "Success": Success_1.Success,
    "Success1": Success1_1.Success1,
    "TrackCaseRequest": TrackCaseRequest_1.TrackCaseRequest,
    "UpdateCase200Response": UpdateCase200Response_1.UpdateCase200Response,
    "UpdateCaseRequest": UpdateCaseRequest_1.UpdateCaseRequest,
    "UpdateCaseRequestPacerOptions": UpdateCaseRequestPacerOptions_1.UpdateCaseRequestPacerOptions,
    "UpdateCaseRequestPacerOptionsAdditionalPageArrayInner": UpdateCaseRequestPacerOptionsAdditionalPageArrayInner_1.UpdateCaseRequestPacerOptionsAdditionalPageArrayInner,
};
var ObjectSerializer = (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type, format) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var date = data_1[_i];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            if (format == "date") {
                var month = data.getMonth() + 1;
                month = month < 10 ? "0" + month.toString() : month.toString();
                var day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();
                return data.getFullYear() + "-" + month + "-" + day;
            }
            else {
                return data.toISOString();
            }
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var _a = 0, attributeTypes_1 = attributeTypes; _a < attributeTypes_1.length; _a++) {
                var attributeType = attributeTypes_1[_a];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type, format) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                var date = data_2[_i];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var _a = 0, attributeTypes_2 = attributeTypes; _a < attributeTypes_2.length; _a++) {
                var attributeType = attributeTypes_2[_a];
                var value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    };
    ObjectSerializer.normalizeMediaType = function (mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    };
    ObjectSerializer.getPreferredMediaType = function (mediaTypes) {
        if (mediaTypes.length === 0) {
            return "application/json";
        }
        var normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        var selectedMediaType = undefined;
        var selectedRank = -Infinity;
        for (var _i = 0, normalMediaTypes_1 = normalMediaTypes; _i < normalMediaTypes_1.length; _i++) {
            var mediaType = normalMediaTypes_1[_i];
            if (supportedMediaTypes[mediaType] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType];
            }
        }
        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }
        return selectedMediaType;
    };
    ObjectSerializer.stringify = function (data, mediaType) {
        if (mediaType === "text/plain") {
            return String(data);
        }
        if (mediaType === "application/json" || mediaType === "application/json-patch+json" || mediaType === "application/merge-patch+json" || mediaType === "application/strategic-merge-patch+json") {
            return JSON.stringify(data);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    };
    ObjectSerializer.parse = function (rawData, mediaType) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }
        if (mediaType === "text/plain") {
            return rawData;
        }
        if (mediaType === "application/json" || mediaType === "application/json-patch+json" || mediaType === "application/merge-patch+json" || mediaType === "application/strategic-merge-patch+json") {
            return JSON.parse(rawData);
        }
        if (mediaType === "text/html") {
            return rawData;
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
//# sourceMappingURL=ObjectSerializer.js.map
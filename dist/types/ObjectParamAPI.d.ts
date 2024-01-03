import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { AddPacerCredentialRequest } from '../models/AddPacerCredentialRequest';
import { AllCourtsPacerCaseLocatorCaseSearch200Response } from '../models/AllCourtsPacerCaseLocatorCaseSearch200Response';
import { AllCourtsPacerCaseLocatorPartySearch200Response } from '../models/AllCourtsPacerCaseLocatorPartySearch200Response';
import { AreaOfLaw1 } from '../models/AreaOfLaw1';
import { AssociatedNormAttorneyResponse1 } from '../models/AssociatedNormAttorneyResponse1';
import { AssociatedNormJudgeResponse1 } from '../models/AssociatedNormJudgeResponse1';
import { AssociatedNormLawFirmResponse1 } from '../models/AssociatedNormLawFirmResponse1';
import { AssociatedNormPartyResponse1 } from '../models/AssociatedNormPartyResponse1';
import { AttorneyRepresentationType1 } from '../models/AttorneyRepresentationType1';
import { AttorneyType1 } from '../models/AttorneyType1';
import { CaseClass1 } from '../models/CaseClass1';
import { CaseCountAnalyticsByAreaOfLawResponse1 } from '../models/CaseCountAnalyticsByAreaOfLawResponse1';
import { CaseCountAnalyticsByCaseClassResponse1 } from '../models/CaseCountAnalyticsByCaseClassResponse1';
import { CaseCountAnalyticsByCaseFiledDateResponse1 } from '../models/CaseCountAnalyticsByCaseFiledDateResponse1';
import { CaseCountAnalyticsByCaseTypeGroupResponse1 } from '../models/CaseCountAnalyticsByCaseTypeGroupResponse1';
import { CaseCountAnalyticsByCaseTypeResponse1 } from '../models/CaseCountAnalyticsByCaseTypeResponse1';
import { CaseCountAnalyticsByCourtLocationResponse1 } from '../models/CaseCountAnalyticsByCourtLocationResponse1';
import { CaseCountAnalyticsByCourtResponse1 } from '../models/CaseCountAnalyticsByCourtResponse1';
import { CaseCountAnalyticsByCourtSystemResponse1 } from '../models/CaseCountAnalyticsByCourtSystemResponse1';
import { CaseCountAnalyticsByCourtTypeResponse1 } from '../models/CaseCountAnalyticsByCourtTypeResponse1';
import { CaseCountAnalyticsByJurisdictionGeoResponse1 } from '../models/CaseCountAnalyticsByJurisdictionGeoResponse1';
import { CaseCountAnalyticsByNormAttorneyResponse1 } from '../models/CaseCountAnalyticsByNormAttorneyResponse1';
import { CaseCountAnalyticsByNormJudgeResponse1 } from '../models/CaseCountAnalyticsByNormJudgeResponse1';
import { CaseCountAnalyticsByNormLawFirmResponse1 } from '../models/CaseCountAnalyticsByNormLawFirmResponse1';
import { CaseCountAnalyticsByNormPartyResponse1 } from '../models/CaseCountAnalyticsByNormPartyResponse1';
import { CaseCountAnalyticsByPartyRoleGroupResponse1 } from '../models/CaseCountAnalyticsByPartyRoleGroupResponse1';
import { CaseCountAnalyticsByPartyRoleResponse1 } from '../models/CaseCountAnalyticsByPartyRoleResponse1';
import { CaseRelationshipType1 } from '../models/CaseRelationshipType1';
import { CaseStatus1 } from '../models/CaseStatus1';
import { CaseStatusGroup1 } from '../models/CaseStatusGroup1';
import { CaseTrackPostRequest } from '../models/CaseTrackPostRequest';
import { CaseType1 } from '../models/CaseType1';
import { CaseTypeGroup1 } from '../models/CaseTypeGroup1';
import { CauseOfAction1 } from '../models/CauseOfAction1';
import { CauseOfActionAdditionalData1 } from '../models/CauseOfActionAdditionalData1';
import { CauseOfActionGroup1 } from '../models/CauseOfActionGroup1';
import { Charge1 } from '../models/Charge1';
import { ChargeAdditionalData1 } from '../models/ChargeAdditionalData1';
import { ChargeDegree1 } from '../models/ChargeDegree1';
import { ChargeGroup1 } from '../models/ChargeGroup1';
import { ChargeSeverity1 } from '../models/ChargeSeverity1';
import { Court1 } from '../models/Court1';
import { CourtLocation1 } from '../models/CourtLocation1';
import { CourtLocationResponse1 } from '../models/CourtLocationResponse1';
import { CourtSystem1 } from '../models/CourtSystem1';
import { CourtType1 } from '../models/CourtType1';
import { ExportCase200Response } from '../models/ExportCase200Response';
import { GenerateNewToken200Response } from '../models/GenerateNewToken200Response';
import { GenerateNewTokenRequest } from '../models/GenerateNewTokenRequest';
import { GetAreasOfLaw200Response } from '../models/GetAreasOfLaw200Response';
import { GetAttorneyRepresentationTypes200Response } from '../models/GetAttorneyRepresentationTypes200Response';
import { GetAttorneyTypes200Response } from '../models/GetAttorneyTypes200Response';
import { GetBillingCycles200Response } from '../models/GetBillingCycles200Response';
import { GetBillingUsageByBillingCycle200Response } from '../models/GetBillingUsageByBillingCycle200Response';
import { GetCallbacks200Response } from '../models/GetCallbacks200Response';
import { GetCase200Response } from '../models/GetCase200Response';
import { GetCase200ResponseAttorneys } from '../models/GetCase200ResponseAttorneys';
import { GetCase200ResponseAttorneysAttorneyArrayInner } from '../models/GetCase200ResponseAttorneysAttorneyArrayInner';
import { GetCase200ResponseCaseDocuments } from '../models/GetCase200ResponseCaseDocuments';
import { GetCase200ResponseDocketEntries } from '../models/GetCase200ResponseDocketEntries';
import { GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments } from '../models/GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments';
import { GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner } from '../models/GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner';
import { GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments } from '../models/GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments';
import { GetCase200ResponseHearings } from '../models/GetCase200ResponseHearings';
import { GetCase200ResponseJudges } from '../models/GetCase200ResponseJudges';
import { GetCase200ResponseJudgesJudgeArrayInner } from '../models/GetCase200ResponseJudgesJudgeArrayInner';
import { GetCase200ResponseParties } from '../models/GetCase200ResponseParties';
import { GetCase200ResponsePartiesPartyArrayInner } from '../models/GetCase200ResponsePartiesPartyArrayInner';
import { GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations } from '../models/GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations';
import { GetCase200ResponseRelatedCases } from '../models/GetCase200ResponseRelatedCases';
import { GetCaseDocumentDownloadById200Response } from '../models/GetCaseDocumentDownloadById200Response';
import { GetCaseDocumentOrderCallbacks200Response } from '../models/GetCaseDocumentOrderCallbacks200Response';
import { GetCaseExportCallbacks200Response } from '../models/GetCaseExportCallbacks200Response';
import { GetCaseRelationshipTypes200Response } from '../models/GetCaseRelationshipTypes200Response';
import { GetCaseStatusGroups200Response } from '../models/GetCaseStatusGroups200Response';
import { GetCaseTracks200Response } from '../models/GetCaseTracks200Response';
import { GetCaseTypeGroups200Response } from '../models/GetCaseTypeGroups200Response';
import { GetCaseTypes200Response } from '../models/GetCaseTypes200Response';
import { GetCaseUpdates200Response } from '../models/GetCaseUpdates200Response';
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
import { GetCourtSystems200Response } from '../models/GetCourtSystems200Response';
import { GetCourtTypes200Response } from '../models/GetCourtTypes200Response';
import { GetCourts200Response } from '../models/GetCourts200Response';
import { GetCourtsServiceStatus200Response } from '../models/GetCourtsServiceStatus200Response';
import { GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner } from '../models/GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner';
import { GetDailyUsageByDate200Response } from '../models/GetDailyUsageByDate200Response';
import { GetJudgeTypes200Response } from '../models/GetJudgeTypes200Response';
import { GetPacerCredential200Response } from '../models/GetPacerCredential200Response';
import { GetPacerCredential200ResponsePacerCredentialArrayInner } from '../models/GetPacerCredential200ResponsePacerCredentialArrayInner';
import { GetPartyRoleGroups200Response } from '../models/GetPartyRoleGroups200Response';
import { GetPartyRoles200Response } from '../models/GetPartyRoles200Response';
import { ImportPacerCaseByCourtUsingCaseNumber200Response } from '../models/ImportPacerCaseByCourtUsingCaseNumber200Response';
import { InvalidateTokenRequest } from '../models/InvalidateTokenRequest';
import { JudgeType1 } from '../models/JudgeType1';
import { JurisdictionGeo1 } from '../models/JurisdictionGeo1';
import { JurisdictionGeoResponse1 } from '../models/JurisdictionGeoResponse1';
import { ListAllTokenIds200Response } from '../models/ListAllTokenIds200Response';
import { NormAttorney1 } from '../models/NormAttorney1';
import { NormJudge1 } from '../models/NormJudge1';
import { NormLawFirm1 } from '../models/NormLawFirm1';
import { NormParty1 } from '../models/NormParty1';
import { OrderCaseDocument200Response } from '../models/OrderCaseDocument200Response';
import { OrderCaseDocumentRequest } from '../models/OrderCaseDocumentRequest';
import { PartyRole1 } from '../models/PartyRole1';
import { PartyRoleGroup1 } from '../models/PartyRoleGroup1';
import { SearchCases200Response } from '../models/SearchCases200Response';
import { SearchNormalizedAttorneys200Response } from '../models/SearchNormalizedAttorneys200Response';
import { SearchNormalizedJudges200Response } from '../models/SearchNormalizedJudges200Response';
import { SearchNormalizedLawFirms200Response } from '../models/SearchNormalizedLawFirms200Response';
import { SearchNormalizedParties200Response } from '../models/SearchNormalizedParties200Response';
import { Success1 } from '../models/Success1';
import { TrackCaseRequest } from '../models/TrackCaseRequest';
import { UpdateCase200Response } from '../models/UpdateCase200Response';
import { UpdateCaseRequest } from '../models/UpdateCaseRequest';
import { AttorneyAnalyticsAPIApiRequestFactory, AttorneyAnalyticsAPIApiResponseProcessor } from "../apis/AttorneyAnalyticsAPIApi";
export interface AttorneyAnalyticsAPIApiGetNormAttorneyByIdRequest {
    normAttorneyId: string;
}
export interface AttorneyAnalyticsAPIApiGetNormJudgesAssociatedWithNormAttorneyRequest {
    normAttorneyId: string;
    q?: string;
    pageNumber?: number;
}
export interface AttorneyAnalyticsAPIApiGetNormLawFirmsAssociatedWithNormAttorneyRequest {
    normAttorneyId: string;
    q?: string;
    pageNumber?: number;
}
export interface AttorneyAnalyticsAPIApiGetNormPartiesAssociatedWithNormAttorneyRequest {
    normAttorneyId: string;
    q?: string;
    pageNumber?: number;
}
export interface AttorneyAnalyticsAPIApiSearchNormalizedAttorneysRequest {
    q?: string;
    pageNumber?: number;
}
export interface AttorneyAnalyticsAPIApiSearchNormalizedAttorneysByIdRequest {
    normAttorneySearchId: string;
    pageNumber?: number;
}
export declare class ObjectAttorneyAnalyticsAPIApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AttorneyAnalyticsAPIApiRequestFactory, responseProcessor?: AttorneyAnalyticsAPIApiResponseProcessor);
    getNormAttorneyByIdWithHttpInfo(param: AttorneyAnalyticsAPIApiGetNormAttorneyByIdRequest, options?: Configuration): Promise<HttpInfo<NormAttorney1>>;
    getNormAttorneyById(param: AttorneyAnalyticsAPIApiGetNormAttorneyByIdRequest, options?: Configuration): Promise<NormAttorney1>;
    getNormJudgesAssociatedWithNormAttorneyWithHttpInfo(param: AttorneyAnalyticsAPIApiGetNormJudgesAssociatedWithNormAttorneyRequest, options?: Configuration): Promise<HttpInfo<AssociatedNormJudgeResponse1>>;
    getNormJudgesAssociatedWithNormAttorney(param: AttorneyAnalyticsAPIApiGetNormJudgesAssociatedWithNormAttorneyRequest, options?: Configuration): Promise<AssociatedNormJudgeResponse1>;
    getNormLawFirmsAssociatedWithNormAttorneyWithHttpInfo(param: AttorneyAnalyticsAPIApiGetNormLawFirmsAssociatedWithNormAttorneyRequest, options?: Configuration): Promise<HttpInfo<AssociatedNormLawFirmResponse1>>;
    getNormLawFirmsAssociatedWithNormAttorney(param: AttorneyAnalyticsAPIApiGetNormLawFirmsAssociatedWithNormAttorneyRequest, options?: Configuration): Promise<AssociatedNormLawFirmResponse1>;
    getNormPartiesAssociatedWithNormAttorneyWithHttpInfo(param: AttorneyAnalyticsAPIApiGetNormPartiesAssociatedWithNormAttorneyRequest, options?: Configuration): Promise<HttpInfo<AssociatedNormPartyResponse1>>;
    getNormPartiesAssociatedWithNormAttorney(param: AttorneyAnalyticsAPIApiGetNormPartiesAssociatedWithNormAttorneyRequest, options?: Configuration): Promise<AssociatedNormPartyResponse1>;
    searchNormalizedAttorneysWithHttpInfo(param?: AttorneyAnalyticsAPIApiSearchNormalizedAttorneysRequest, options?: Configuration): Promise<HttpInfo<SearchNormalizedAttorneys200Response>>;
    searchNormalizedAttorneys(param?: AttorneyAnalyticsAPIApiSearchNormalizedAttorneysRequest, options?: Configuration): Promise<SearchNormalizedAttorneys200Response>;
    searchNormalizedAttorneysByIdWithHttpInfo(param: AttorneyAnalyticsAPIApiSearchNormalizedAttorneysByIdRequest, options?: Configuration): Promise<HttpInfo<SearchNormalizedAttorneys200Response>>;
    searchNormalizedAttorneysById(param: AttorneyAnalyticsAPIApiSearchNormalizedAttorneysByIdRequest, options?: Configuration): Promise<SearchNormalizedAttorneys200Response>;
}
import { AuthenticationAPIApiRequestFactory, AuthenticationAPIApiResponseProcessor } from "../apis/AuthenticationAPIApi";
export interface AuthenticationAPIApiGenerateNewTokenRequest {
    generateNewTokenRequest?: GenerateNewTokenRequest;
}
export interface AuthenticationAPIApiInvalidateAllTokensRequest {
    generateNewTokenRequest?: GenerateNewTokenRequest;
}
export interface AuthenticationAPIApiInvalidateTokenRequest {
    invalidateTokenRequest?: InvalidateTokenRequest;
}
export interface AuthenticationAPIApiListAllTokenIdsRequest {
    generateNewTokenRequest?: GenerateNewTokenRequest;
}
export declare class ObjectAuthenticationAPIApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AuthenticationAPIApiRequestFactory, responseProcessor?: AuthenticationAPIApiResponseProcessor);
    generateNewTokenWithHttpInfo(param?: AuthenticationAPIApiGenerateNewTokenRequest, options?: Configuration): Promise<HttpInfo<GenerateNewToken200Response>>;
    generateNewToken(param?: AuthenticationAPIApiGenerateNewTokenRequest, options?: Configuration): Promise<GenerateNewToken200Response>;
    invalidateAllTokensWithHttpInfo(param?: AuthenticationAPIApiInvalidateAllTokensRequest, options?: Configuration): Promise<HttpInfo<Success1>>;
    invalidateAllTokens(param?: AuthenticationAPIApiInvalidateAllTokensRequest, options?: Configuration): Promise<Success1>;
    invalidateTokenWithHttpInfo(param?: AuthenticationAPIApiInvalidateTokenRequest, options?: Configuration): Promise<HttpInfo<Success1>>;
    invalidateToken(param?: AuthenticationAPIApiInvalidateTokenRequest, options?: Configuration): Promise<Success1>;
    listAllTokenIdsWithHttpInfo(param?: AuthenticationAPIApiListAllTokenIdsRequest, options?: Configuration): Promise<HttpInfo<ListAllTokenIds200Response>>;
    listAllTokenIds(param?: AuthenticationAPIApiListAllTokenIdsRequest, options?: Configuration): Promise<ListAllTokenIds200Response>;
}
import { CallbackAPIApiRequestFactory, CallbackAPIApiResponseProcessor } from "../apis/CallbackAPIApi";
export interface CallbackAPIApiGetCallbacksRequest {
    date?: Date;
    status?: 'IN_PROGRESS' | 'COMPLETE' | 'FAILURE';
}
export declare class ObjectCallbackAPIApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CallbackAPIApiRequestFactory, responseProcessor?: CallbackAPIApiResponseProcessor);
    getCallbacksWithHttpInfo(param?: CallbackAPIApiGetCallbacksRequest, options?: Configuration): Promise<HttpInfo<GetCallbacks200Response>>;
    getCallbacks(param?: CallbackAPIApiGetCallbacksRequest, options?: Configuration): Promise<GetCallbacks200Response>;
}
import { CaseAnalyticsAPIApiRequestFactory, CaseAnalyticsAPIApiResponseProcessor } from "../apis/CaseAnalyticsAPIApi";
export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByAreaOfLawRequest {
    q?: string;
    pageNumber?: number;
}
export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByCaseClassRequest {
    q?: string;
    pageNumber?: number;
}
export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByCaseFiledDateRequest {
    groupBy: 'Yearly' | 'Quarterly' | 'Monthly' | 'Weekly';
    q?: string;
    pageNumber?: number;
}
export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByCaseTypeRequest {
    q?: string;
    pageNumber?: number;
}
export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByCaseTypeGroupRequest {
    q?: string;
    pageNumber?: number;
}
export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByCourtRequest {
    q?: string;
    pageNumber?: number;
}
export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByCourtLocationRequest {
    q?: string;
    pageNumber?: number;
}
export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByCourtSystemRequest {
    q?: string;
    pageNumber?: number;
}
export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByCourtTypeRequest {
    q?: string;
    pageNumber?: number;
}
export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByJurisdictionGeoRequest {
    q?: string;
    pageNumber?: number;
}
export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByNormAttorneyRequest {
    q?: string;
    pageNumber?: number;
}
export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByNormJudgeRequest {
    q?: string;
    pageNumber?: number;
}
export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByNormLawFirmRequest {
    q?: string;
    pageNumber?: number;
}
export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByNormPartyRequest {
    q?: string;
    pageNumber?: number;
}
export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByOpposingNormAttorneyForANormAttorneyRequest {
    normAttorneyId: string;
    q?: string;
    pageNumber?: number;
}
export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByOpposingNormLawFirmForANormLawFirmRequest {
    normLawFirmId: string;
    q?: string;
    pageNumber?: number;
}
export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByOpposingNormPartyForANormPartyRequest {
    normPartyId: string;
    q?: string;
    pageNumber?: number;
}
export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByPartyRoleRequest {
    q?: string;
    pageNumber?: number;
}
export interface CaseAnalyticsAPIApiGetCaseCountAnalyticsByPartyRoleGroupRequest {
    q?: string;
    pageNumber?: number;
}
export declare class ObjectCaseAnalyticsAPIApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CaseAnalyticsAPIApiRequestFactory, responseProcessor?: CaseAnalyticsAPIApiResponseProcessor);
    getCaseCountAnalyticsByAreaOfLawWithHttpInfo(param?: CaseAnalyticsAPIApiGetCaseCountAnalyticsByAreaOfLawRequest, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByAreaOfLawResponse1>>;
    getCaseCountAnalyticsByAreaOfLaw(param?: CaseAnalyticsAPIApiGetCaseCountAnalyticsByAreaOfLawRequest, options?: Configuration): Promise<CaseCountAnalyticsByAreaOfLawResponse1>;
    getCaseCountAnalyticsByCaseClassWithHttpInfo(param?: CaseAnalyticsAPIApiGetCaseCountAnalyticsByCaseClassRequest, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByCaseClassResponse1>>;
    getCaseCountAnalyticsByCaseClass(param?: CaseAnalyticsAPIApiGetCaseCountAnalyticsByCaseClassRequest, options?: Configuration): Promise<CaseCountAnalyticsByCaseClassResponse1>;
    getCaseCountAnalyticsByCaseFiledDateWithHttpInfo(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByCaseFiledDateRequest, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByCaseFiledDateResponse1>>;
    getCaseCountAnalyticsByCaseFiledDate(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByCaseFiledDateRequest, options?: Configuration): Promise<CaseCountAnalyticsByCaseFiledDateResponse1>;
    getCaseCountAnalyticsByCaseTypeWithHttpInfo(param?: CaseAnalyticsAPIApiGetCaseCountAnalyticsByCaseTypeRequest, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByCaseTypeResponse1>>;
    getCaseCountAnalyticsByCaseType(param?: CaseAnalyticsAPIApiGetCaseCountAnalyticsByCaseTypeRequest, options?: Configuration): Promise<CaseCountAnalyticsByCaseTypeResponse1>;
    getCaseCountAnalyticsByCaseTypeGroupWithHttpInfo(param?: CaseAnalyticsAPIApiGetCaseCountAnalyticsByCaseTypeGroupRequest, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByCaseTypeGroupResponse1>>;
    getCaseCountAnalyticsByCaseTypeGroup(param?: CaseAnalyticsAPIApiGetCaseCountAnalyticsByCaseTypeGroupRequest, options?: Configuration): Promise<CaseCountAnalyticsByCaseTypeGroupResponse1>;
    getCaseCountAnalyticsByCourtWithHttpInfo(param?: CaseAnalyticsAPIApiGetCaseCountAnalyticsByCourtRequest, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByCourtResponse1>>;
    getCaseCountAnalyticsByCourt(param?: CaseAnalyticsAPIApiGetCaseCountAnalyticsByCourtRequest, options?: Configuration): Promise<CaseCountAnalyticsByCourtResponse1>;
    getCaseCountAnalyticsByCourtLocationWithHttpInfo(param?: CaseAnalyticsAPIApiGetCaseCountAnalyticsByCourtLocationRequest, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByCourtLocationResponse1>>;
    getCaseCountAnalyticsByCourtLocation(param?: CaseAnalyticsAPIApiGetCaseCountAnalyticsByCourtLocationRequest, options?: Configuration): Promise<CaseCountAnalyticsByCourtLocationResponse1>;
    getCaseCountAnalyticsByCourtSystemWithHttpInfo(param?: CaseAnalyticsAPIApiGetCaseCountAnalyticsByCourtSystemRequest, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByCourtSystemResponse1>>;
    getCaseCountAnalyticsByCourtSystem(param?: CaseAnalyticsAPIApiGetCaseCountAnalyticsByCourtSystemRequest, options?: Configuration): Promise<CaseCountAnalyticsByCourtSystemResponse1>;
    getCaseCountAnalyticsByCourtTypeWithHttpInfo(param?: CaseAnalyticsAPIApiGetCaseCountAnalyticsByCourtTypeRequest, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByCourtTypeResponse1>>;
    getCaseCountAnalyticsByCourtType(param?: CaseAnalyticsAPIApiGetCaseCountAnalyticsByCourtTypeRequest, options?: Configuration): Promise<CaseCountAnalyticsByCourtTypeResponse1>;
    getCaseCountAnalyticsByJurisdictionGeoWithHttpInfo(param?: CaseAnalyticsAPIApiGetCaseCountAnalyticsByJurisdictionGeoRequest, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByJurisdictionGeoResponse1>>;
    getCaseCountAnalyticsByJurisdictionGeo(param?: CaseAnalyticsAPIApiGetCaseCountAnalyticsByJurisdictionGeoRequest, options?: Configuration): Promise<CaseCountAnalyticsByJurisdictionGeoResponse1>;
    getCaseCountAnalyticsByNormAttorneyWithHttpInfo(param?: CaseAnalyticsAPIApiGetCaseCountAnalyticsByNormAttorneyRequest, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByNormAttorneyResponse1>>;
    getCaseCountAnalyticsByNormAttorney(param?: CaseAnalyticsAPIApiGetCaseCountAnalyticsByNormAttorneyRequest, options?: Configuration): Promise<CaseCountAnalyticsByNormAttorneyResponse1>;
    getCaseCountAnalyticsByNormJudgeWithHttpInfo(param?: CaseAnalyticsAPIApiGetCaseCountAnalyticsByNormJudgeRequest, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByNormJudgeResponse1>>;
    getCaseCountAnalyticsByNormJudge(param?: CaseAnalyticsAPIApiGetCaseCountAnalyticsByNormJudgeRequest, options?: Configuration): Promise<CaseCountAnalyticsByNormJudgeResponse1>;
    getCaseCountAnalyticsByNormLawFirmWithHttpInfo(param?: CaseAnalyticsAPIApiGetCaseCountAnalyticsByNormLawFirmRequest, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByNormLawFirmResponse1>>;
    getCaseCountAnalyticsByNormLawFirm(param?: CaseAnalyticsAPIApiGetCaseCountAnalyticsByNormLawFirmRequest, options?: Configuration): Promise<CaseCountAnalyticsByNormLawFirmResponse1>;
    getCaseCountAnalyticsByNormPartyWithHttpInfo(param?: CaseAnalyticsAPIApiGetCaseCountAnalyticsByNormPartyRequest, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByNormPartyResponse1>>;
    getCaseCountAnalyticsByNormParty(param?: CaseAnalyticsAPIApiGetCaseCountAnalyticsByNormPartyRequest, options?: Configuration): Promise<CaseCountAnalyticsByNormPartyResponse1>;
    getCaseCountAnalyticsByOpposingNormAttorneyForANormAttorneyWithHttpInfo(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByOpposingNormAttorneyForANormAttorneyRequest, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByNormAttorneyResponse1>>;
    getCaseCountAnalyticsByOpposingNormAttorneyForANormAttorney(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByOpposingNormAttorneyForANormAttorneyRequest, options?: Configuration): Promise<CaseCountAnalyticsByNormAttorneyResponse1>;
    getCaseCountAnalyticsByOpposingNormLawFirmForANormLawFirmWithHttpInfo(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByOpposingNormLawFirmForANormLawFirmRequest, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByNormLawFirmResponse1>>;
    getCaseCountAnalyticsByOpposingNormLawFirmForANormLawFirm(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByOpposingNormLawFirmForANormLawFirmRequest, options?: Configuration): Promise<CaseCountAnalyticsByNormLawFirmResponse1>;
    getCaseCountAnalyticsByOpposingNormPartyForANormPartyWithHttpInfo(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByOpposingNormPartyForANormPartyRequest, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByNormPartyResponse1>>;
    getCaseCountAnalyticsByOpposingNormPartyForANormParty(param: CaseAnalyticsAPIApiGetCaseCountAnalyticsByOpposingNormPartyForANormPartyRequest, options?: Configuration): Promise<CaseCountAnalyticsByNormPartyResponse1>;
    getCaseCountAnalyticsByPartyRoleWithHttpInfo(param?: CaseAnalyticsAPIApiGetCaseCountAnalyticsByPartyRoleRequest, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByPartyRoleResponse1>>;
    getCaseCountAnalyticsByPartyRole(param?: CaseAnalyticsAPIApiGetCaseCountAnalyticsByPartyRoleRequest, options?: Configuration): Promise<CaseCountAnalyticsByPartyRoleResponse1>;
    getCaseCountAnalyticsByPartyRoleGroupWithHttpInfo(param?: CaseAnalyticsAPIApiGetCaseCountAnalyticsByPartyRoleGroupRequest, options?: Configuration): Promise<HttpInfo<CaseCountAnalyticsByPartyRoleGroupResponse1>>;
    getCaseCountAnalyticsByPartyRoleGroup(param?: CaseAnalyticsAPIApiGetCaseCountAnalyticsByPartyRoleGroupRequest, options?: Configuration): Promise<CaseCountAnalyticsByPartyRoleGroupResponse1>;
}
import { CaseDocketAPIApiRequestFactory, CaseDocketAPIApiResponseProcessor } from "../apis/CaseDocketAPIApi";
export interface CaseDocketAPIApiGetAttorneyAssociatedPartiesRequest {
    attorneyId: string;
    pageNumber?: number;
}
export interface CaseDocketAPIApiGetAttorneyByIdRequest {
    attorneyId: string;
}
export interface CaseDocketAPIApiGetCaseRequest {
    caseId: string;
}
export interface CaseDocketAPIApiGetCaseAttorneysRequest {
    caseId: string;
    isVisible?: boolean;
    pageNumber?: number;
}
export interface CaseDocketAPIApiGetCaseDocketEntriesRequest {
    caseId: string;
    docketNumber?: number;
    sortBy?: 'latest to oldest' | 'oldest to latest';
    pageNumber?: number;
}
export interface CaseDocketAPIApiGetCaseHearingsRequest {
    caseId: string;
    sortBy?: 'latest to oldest' | 'oldest to latest';
    pageNumber?: number;
}
export interface CaseDocketAPIApiGetCaseJudgesRequest {
    caseId: string;
    isVisible?: boolean;
    pageNumber?: number;
}
export interface CaseDocketAPIApiGetCasePartiesRequest {
    caseId: string;
    isVisible?: boolean;
    pageNumber?: number;
    partyRoleId?: string;
    partyRoleGroupId?: string;
    attorneyRepresentationTypeId?: string;
    partyClassificationType?: 'INDIVIDUAL' | 'COMPANY' | 'OTHER';
}
export interface CaseDocketAPIApiGetCaseRelatedCasesRequest {
    caseId: string;
    pageNumber?: number;
}
export interface CaseDocketAPIApiGetJudgeByIdRequest {
    judgeId: string;
}
export interface CaseDocketAPIApiGetPartyAssociatedAttorneysRequest {
    partyId: string;
    pageNumber?: number;
}
export interface CaseDocketAPIApiGetPartyByIdRequest {
    partyId: string;
}
export interface CaseDocketAPIApiGetPrimaryDocumentsForDocketEntriesRequest {
    caseId: string;
    docketNumber: number;
    inLibrary?: boolean;
    afterFirstFetchDate?: Date;
    libraryDate?: Date;
    pageNumber?: number;
}
export interface CaseDocketAPIApiGetSecondaryDocumentsForDocketEntriesRequest {
    caseId: string;
    docketNumber: number;
    inLibrary?: boolean;
    afterFirstFetchDate?: Date;
    libraryDate?: Date;
    pageNumber?: number;
}
export declare class ObjectCaseDocketAPIApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CaseDocketAPIApiRequestFactory, responseProcessor?: CaseDocketAPIApiResponseProcessor);
    getAttorneyAssociatedPartiesWithHttpInfo(param: CaseDocketAPIApiGetAttorneyAssociatedPartiesRequest, options?: Configuration): Promise<HttpInfo<GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations>>;
    getAttorneyAssociatedParties(param: CaseDocketAPIApiGetAttorneyAssociatedPartiesRequest, options?: Configuration): Promise<GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations>;
    getAttorneyByIdWithHttpInfo(param: CaseDocketAPIApiGetAttorneyByIdRequest, options?: Configuration): Promise<HttpInfo<GetCase200ResponseAttorneysAttorneyArrayInner>>;
    getAttorneyById(param: CaseDocketAPIApiGetAttorneyByIdRequest, options?: Configuration): Promise<GetCase200ResponseAttorneysAttorneyArrayInner>;
    getCaseWithHttpInfo(param: CaseDocketAPIApiGetCaseRequest, options?: Configuration): Promise<HttpInfo<GetCase200Response>>;
    getCase(param: CaseDocketAPIApiGetCaseRequest, options?: Configuration): Promise<GetCase200Response>;
    getCaseAttorneysWithHttpInfo(param: CaseDocketAPIApiGetCaseAttorneysRequest, options?: Configuration): Promise<HttpInfo<GetCase200ResponseAttorneys>>;
    getCaseAttorneys(param: CaseDocketAPIApiGetCaseAttorneysRequest, options?: Configuration): Promise<GetCase200ResponseAttorneys>;
    getCaseDocketEntriesWithHttpInfo(param: CaseDocketAPIApiGetCaseDocketEntriesRequest, options?: Configuration): Promise<HttpInfo<GetCase200ResponseDocketEntries>>;
    getCaseDocketEntries(param: CaseDocketAPIApiGetCaseDocketEntriesRequest, options?: Configuration): Promise<GetCase200ResponseDocketEntries>;
    getCaseHearingsWithHttpInfo(param: CaseDocketAPIApiGetCaseHearingsRequest, options?: Configuration): Promise<HttpInfo<GetCase200ResponseHearings>>;
    getCaseHearings(param: CaseDocketAPIApiGetCaseHearingsRequest, options?: Configuration): Promise<GetCase200ResponseHearings>;
    getCaseJudgesWithHttpInfo(param: CaseDocketAPIApiGetCaseJudgesRequest, options?: Configuration): Promise<HttpInfo<GetCase200ResponseJudges>>;
    getCaseJudges(param: CaseDocketAPIApiGetCaseJudgesRequest, options?: Configuration): Promise<GetCase200ResponseJudges>;
    getCasePartiesWithHttpInfo(param: CaseDocketAPIApiGetCasePartiesRequest, options?: Configuration): Promise<HttpInfo<GetCase200ResponseParties>>;
    getCaseParties(param: CaseDocketAPIApiGetCasePartiesRequest, options?: Configuration): Promise<GetCase200ResponseParties>;
    getCaseRelatedCasesWithHttpInfo(param: CaseDocketAPIApiGetCaseRelatedCasesRequest, options?: Configuration): Promise<HttpInfo<GetCase200ResponseRelatedCases>>;
    getCaseRelatedCases(param: CaseDocketAPIApiGetCaseRelatedCasesRequest, options?: Configuration): Promise<GetCase200ResponseRelatedCases>;
    getJudgeByIdWithHttpInfo(param: CaseDocketAPIApiGetJudgeByIdRequest, options?: Configuration): Promise<HttpInfo<GetCase200ResponseJudgesJudgeArrayInner>>;
    getJudgeById(param: CaseDocketAPIApiGetJudgeByIdRequest, options?: Configuration): Promise<GetCase200ResponseJudgesJudgeArrayInner>;
    getPartyAssociatedAttorneysWithHttpInfo(param: CaseDocketAPIApiGetPartyAssociatedAttorneysRequest, options?: Configuration): Promise<HttpInfo<GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations>>;
    getPartyAssociatedAttorneys(param: CaseDocketAPIApiGetPartyAssociatedAttorneysRequest, options?: Configuration): Promise<GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations>;
    getPartyByIdWithHttpInfo(param: CaseDocketAPIApiGetPartyByIdRequest, options?: Configuration): Promise<HttpInfo<GetCase200ResponsePartiesPartyArrayInner>>;
    getPartyById(param: CaseDocketAPIApiGetPartyByIdRequest, options?: Configuration): Promise<GetCase200ResponsePartiesPartyArrayInner>;
    getPrimaryDocumentsForDocketEntriesWithHttpInfo(param: CaseDocketAPIApiGetPrimaryDocumentsForDocketEntriesRequest, options?: Configuration): Promise<HttpInfo<GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments>>;
    getPrimaryDocumentsForDocketEntries(param: CaseDocketAPIApiGetPrimaryDocumentsForDocketEntriesRequest, options?: Configuration): Promise<GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments>;
    getSecondaryDocumentsForDocketEntriesWithHttpInfo(param: CaseDocketAPIApiGetSecondaryDocumentsForDocketEntriesRequest, options?: Configuration): Promise<HttpInfo<GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments>>;
    getSecondaryDocumentsForDocketEntries(param: CaseDocketAPIApiGetSecondaryDocumentsForDocketEntriesRequest, options?: Configuration): Promise<GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments>;
}
import { CaseDocumentsAPIApiRequestFactory, CaseDocumentsAPIApiResponseProcessor } from "../apis/CaseDocumentsAPIApi";
export interface CaseDocumentsAPIApiGetCaseDocumentDownloadByIdRequest {
    caseDocumentId: string;
    isPreviewDocument?: boolean;
}
export interface CaseDocumentsAPIApiGetCaseDocumentOrderCallbackByIdRequest {
    caseDocumentOrderCallbackId: string;
}
export interface CaseDocumentsAPIApiGetCaseDocumentOrderCallbacksRequest {
    date?: Date;
    status?: 'IN_PROGRESS' | 'DELAYED' | 'COMPLETE' | 'FAILURE';
    pageNumber?: number;
}
export interface CaseDocumentsAPIApiGetCaseDocumentsRequest {
    caseId: string;
    inLibrary?: boolean;
    afterFirstFetchDate?: Date;
    libraryDate?: Date;
    firstFetchDate?: Date;
    sortBy?: 'latest to oldest' | 'oldest to latest';
    pageNumber?: number;
}
export interface CaseDocumentsAPIApiGetDocumentByIdRequest {
    caseDocumentId: string;
}
export interface CaseDocumentsAPIApiOrderCaseDocumentRequest {
    orderCaseDocumentRequest?: OrderCaseDocumentRequest;
}
export declare class ObjectCaseDocumentsAPIApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CaseDocumentsAPIApiRequestFactory, responseProcessor?: CaseDocumentsAPIApiResponseProcessor);
    getCaseDocumentDownloadByIdWithHttpInfo(param: CaseDocumentsAPIApiGetCaseDocumentDownloadByIdRequest, options?: Configuration): Promise<HttpInfo<GetCaseDocumentDownloadById200Response>>;
    getCaseDocumentDownloadById(param: CaseDocumentsAPIApiGetCaseDocumentDownloadByIdRequest, options?: Configuration): Promise<GetCaseDocumentDownloadById200Response>;
    getCaseDocumentOrderCallbackByIdWithHttpInfo(param: CaseDocumentsAPIApiGetCaseDocumentOrderCallbackByIdRequest, options?: Configuration): Promise<HttpInfo<OrderCaseDocument200Response>>;
    getCaseDocumentOrderCallbackById(param: CaseDocumentsAPIApiGetCaseDocumentOrderCallbackByIdRequest, options?: Configuration): Promise<OrderCaseDocument200Response>;
    getCaseDocumentOrderCallbacksWithHttpInfo(param?: CaseDocumentsAPIApiGetCaseDocumentOrderCallbacksRequest, options?: Configuration): Promise<HttpInfo<GetCaseDocumentOrderCallbacks200Response>>;
    getCaseDocumentOrderCallbacks(param?: CaseDocumentsAPIApiGetCaseDocumentOrderCallbacksRequest, options?: Configuration): Promise<GetCaseDocumentOrderCallbacks200Response>;
    getCaseDocumentsWithHttpInfo(param: CaseDocumentsAPIApiGetCaseDocumentsRequest, options?: Configuration): Promise<HttpInfo<GetCase200ResponseCaseDocuments>>;
    getCaseDocuments(param: CaseDocumentsAPIApiGetCaseDocumentsRequest, options?: Configuration): Promise<GetCase200ResponseCaseDocuments>;
    getDocumentByIdWithHttpInfo(param: CaseDocumentsAPIApiGetDocumentByIdRequest, options?: Configuration): Promise<HttpInfo<GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner>>;
    getDocumentById(param: CaseDocumentsAPIApiGetDocumentByIdRequest, options?: Configuration): Promise<GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner>;
    orderCaseDocumentWithHttpInfo(param?: CaseDocumentsAPIApiOrderCaseDocumentRequest, options?: Configuration): Promise<HttpInfo<OrderCaseDocument200Response>>;
    orderCaseDocument(param?: CaseDocumentsAPIApiOrderCaseDocumentRequest, options?: Configuration): Promise<OrderCaseDocument200Response>;
}
import { CaseExportAPIApiRequestFactory, CaseExportAPIApiResponseProcessor } from "../apis/CaseExportAPIApi";
export interface CaseExportAPIApiExportCaseRequest {
    caseId: string;
}
export interface CaseExportAPIApiGetCaseExportCallbackByIdRequest {
    caseExportCallbackId: string;
}
export interface CaseExportAPIApiGetCaseExportCallbacksRequest {
    date?: Date;
    status?: 'IN_PROGRESS' | 'COMPLETE' | 'FAILURE';
    pageNumber?: number;
}
export declare class ObjectCaseExportAPIApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CaseExportAPIApiRequestFactory, responseProcessor?: CaseExportAPIApiResponseProcessor);
    exportCaseWithHttpInfo(param: CaseExportAPIApiExportCaseRequest, options?: Configuration): Promise<HttpInfo<ExportCase200Response>>;
    exportCase(param: CaseExportAPIApiExportCaseRequest, options?: Configuration): Promise<ExportCase200Response>;
    getCaseExportCallbackByIdWithHttpInfo(param: CaseExportAPIApiGetCaseExportCallbackByIdRequest, options?: Configuration): Promise<HttpInfo<ExportCase200Response>>;
    getCaseExportCallbackById(param: CaseExportAPIApiGetCaseExportCallbackByIdRequest, options?: Configuration): Promise<ExportCase200Response>;
    getCaseExportCallbacksWithHttpInfo(param?: CaseExportAPIApiGetCaseExportCallbacksRequest, options?: Configuration): Promise<HttpInfo<GetCaseExportCallbacks200Response>>;
    getCaseExportCallbacks(param?: CaseExportAPIApiGetCaseExportCallbacksRequest, options?: Configuration): Promise<GetCaseExportCallbacks200Response>;
}
import { CaseSearchAPIApiRequestFactory, CaseSearchAPIApiResponseProcessor } from "../apis/CaseSearchAPIApi";
export interface CaseSearchAPIApiSearchCasesRequest {
    q: string;
    sort?: 'filedDate' | 'relevancy';
    order?: 'asc' | 'desc';
    pageNumber?: number;
}
export interface CaseSearchAPIApiSearchCasesByIdRequest {
    caseSearchId: string;
    pageNumber?: number;
}
export declare class ObjectCaseSearchAPIApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CaseSearchAPIApiRequestFactory, responseProcessor?: CaseSearchAPIApiResponseProcessor);
    searchCasesWithHttpInfo(param: CaseSearchAPIApiSearchCasesRequest, options?: Configuration): Promise<HttpInfo<SearchCases200Response>>;
    searchCases(param: CaseSearchAPIApiSearchCasesRequest, options?: Configuration): Promise<SearchCases200Response>;
    searchCasesByIdWithHttpInfo(param: CaseSearchAPIApiSearchCasesByIdRequest, options?: Configuration): Promise<HttpInfo<SearchCases200Response>>;
    searchCasesById(param: CaseSearchAPIApiSearchCasesByIdRequest, options?: Configuration): Promise<SearchCases200Response>;
}
import { CaseTrackingAPIApiRequestFactory, CaseTrackingAPIApiResponseProcessor } from "../apis/CaseTrackingAPIApi";
export interface CaseTrackingAPIApiGetCaseTrackByIdRequest {
    caseId: string;
}
export interface CaseTrackingAPIApiGetCaseTracksRequest {
    lastFetchDate?: Date;
    lastFetchDateWithUpdates?: Date;
    pageNumber?: number;
}
export interface CaseTrackingAPIApiRemoveCaseTrackByIdRequest {
    caseId: string;
}
export interface CaseTrackingAPIApiTrackCaseRequest {
    trackCaseRequest?: TrackCaseRequest;
}
export declare class ObjectCaseTrackingAPIApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CaseTrackingAPIApiRequestFactory, responseProcessor?: CaseTrackingAPIApiResponseProcessor);
    getCaseTrackByIdWithHttpInfo(param: CaseTrackingAPIApiGetCaseTrackByIdRequest, options?: Configuration): Promise<HttpInfo<CaseTrackPostRequest>>;
    getCaseTrackById(param: CaseTrackingAPIApiGetCaseTrackByIdRequest, options?: Configuration): Promise<CaseTrackPostRequest>;
    getCaseTracksWithHttpInfo(param?: CaseTrackingAPIApiGetCaseTracksRequest, options?: Configuration): Promise<HttpInfo<GetCaseTracks200Response>>;
    getCaseTracks(param?: CaseTrackingAPIApiGetCaseTracksRequest, options?: Configuration): Promise<GetCaseTracks200Response>;
    removeCaseTrackByIdWithHttpInfo(param: CaseTrackingAPIApiRemoveCaseTrackByIdRequest, options?: Configuration): Promise<HttpInfo<Success1>>;
    removeCaseTrackById(param: CaseTrackingAPIApiRemoveCaseTrackByIdRequest, options?: Configuration): Promise<Success1>;
    trackCaseWithHttpInfo(param?: CaseTrackingAPIApiTrackCaseRequest, options?: Configuration): Promise<HttpInfo<Success1>>;
    trackCase(param?: CaseTrackingAPIApiTrackCaseRequest, options?: Configuration): Promise<Success1>;
}
import { CaseUpdateAPIApiRequestFactory, CaseUpdateAPIApiResponseProcessor } from "../apis/CaseUpdateAPIApi";
export interface CaseUpdateAPIApiGetCaseUpdateByCaseIdRequest {
    caseId: string;
}
export interface CaseUpdateAPIApiGetCaseUpdatesRequest {
    caseId?: string;
    requestedDate?: Date;
    status?: 'IN_PROGRESS' | 'COMPLETE' | 'FAILURE';
    pageNumber?: number;
}
export interface CaseUpdateAPIApiUpdateCaseRequest {
    updateCaseRequest?: UpdateCaseRequest;
}
export declare class ObjectCaseUpdateAPIApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CaseUpdateAPIApiRequestFactory, responseProcessor?: CaseUpdateAPIApiResponseProcessor);
    getCaseUpdateByCaseIdWithHttpInfo(param: CaseUpdateAPIApiGetCaseUpdateByCaseIdRequest, options?: Configuration): Promise<HttpInfo<UpdateCase200Response>>;
    getCaseUpdateByCaseId(param: CaseUpdateAPIApiGetCaseUpdateByCaseIdRequest, options?: Configuration): Promise<UpdateCase200Response>;
    getCaseUpdatesWithHttpInfo(param?: CaseUpdateAPIApiGetCaseUpdatesRequest, options?: Configuration): Promise<HttpInfo<GetCaseUpdates200Response>>;
    getCaseUpdates(param?: CaseUpdateAPIApiGetCaseUpdatesRequest, options?: Configuration): Promise<GetCaseUpdates200Response>;
    updateCaseWithHttpInfo(param?: CaseUpdateAPIApiUpdateCaseRequest, options?: Configuration): Promise<HttpInfo<UpdateCase200Response>>;
    updateCase(param?: CaseUpdateAPIApiUpdateCaseRequest, options?: Configuration): Promise<UpdateCase200Response>;
}
import { CourtAvailabilityAPIApiRequestFactory, CourtAvailabilityAPIApiResponseProcessor } from "../apis/CourtAvailabilityAPIApi";
export interface CourtAvailabilityAPIApiGetCourtCoverageRequest {
    courtId: string;
}
export declare class ObjectCourtAvailabilityAPIApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CourtAvailabilityAPIApiRequestFactory, responseProcessor?: CourtAvailabilityAPIApiResponseProcessor);
    getCourtCoverageWithHttpInfo(param: CourtAvailabilityAPIApiGetCourtCoverageRequest, options?: Configuration): Promise<HttpInfo<GetCourtCoverage200Response>>;
    getCourtCoverage(param: CourtAvailabilityAPIApiGetCourtCoverageRequest, options?: Configuration): Promise<GetCourtCoverage200Response>;
}
import { CourtStandardsAPIApiRequestFactory, CourtStandardsAPIApiResponseProcessor } from "../apis/CourtStandardsAPIApi";
export interface CourtStandardsAPIApiGetAppealCourtsForCourtRequest {
    courtId: string;
    pageNumber?: number;
    sort?: 'name';
    order?: 'asc' | 'desc';
}
export interface CourtStandardsAPIApiGetAreaOfLawRequest {
    areaOfLawId: string;
}
export interface CourtStandardsAPIApiGetAreasOfLawRequest {
    q?: string;
    pageNumber?: number;
    sort?: 'name';
    order?: 'asc' | 'desc';
}
export interface CourtStandardsAPIApiGetAttorneyRepresentationTypeRequest {
    attorneyRepresentationTypeId: string;
}
export interface CourtStandardsAPIApiGetAttorneyRepresentationTypesRequest {
    q?: string;
    pageNumber?: number;
    sort?: 'name';
    order?: 'asc' | 'desc';
}
export interface CourtStandardsAPIApiGetAttorneyTypeRequest {
    attorneyTypeId: string;
}
export interface CourtStandardsAPIApiGetAttorneyTypesRequest {
    q?: string;
    pageNumber?: number;
    sort?: 'name';
    order?: 'asc' | 'desc';
}
export interface CourtStandardsAPIApiGetCaseClassRequest {
    caseClassId: string;
}
export interface CourtStandardsAPIApiGetCaseRelationshipTypeRequest {
    caseRelationshipTypeId: string;
}
export interface CourtStandardsAPIApiGetCaseRelationshipTypesRequest {
    q?: string;
    pageNumber?: number;
    sort?: 'name';
    order?: 'asc' | 'desc';
}
export interface CourtStandardsAPIApiGetCaseStatusRequest {
    caseStatusId: string;
}
export interface CourtStandardsAPIApiGetCaseStatusGroupRequest {
    caseStatusGroupId: string;
}
export interface CourtStandardsAPIApiGetCaseStatusGroupsRequest {
    q?: string;
    pageNumber?: number;
    sort?: 'name';
    order?: 'asc' | 'desc';
}
export interface CourtStandardsAPIApiGetCaseTypeRequest {
    caseTypeId: string;
}
export interface CourtStandardsAPIApiGetCaseTypeGroupRequest {
    caseTypeGroupId: string;
}
export interface CourtStandardsAPIApiGetCaseTypeGroupsRequest {
    q?: string;
    pageNumber?: number;
    sort?: 'name';
    order?: 'asc' | 'desc';
}
export interface CourtStandardsAPIApiGetCaseTypesRequest {
    q?: string;
    pageNumber?: number;
    sort?: 'name';
    order?: 'asc' | 'desc';
}
export interface CourtStandardsAPIApiGetCasesClassRequest {
    q?: string;
    pageNumber?: number;
    sort?: 'name';
    order?: 'asc' | 'desc';
}
export interface CourtStandardsAPIApiGetCasesStatusRequest {
    q?: string;
    pageNumber?: number;
    sort?: 'name';
    order?: 'asc' | 'desc';
}
export interface CourtStandardsAPIApiGetCauseOfActionRequest {
    causeOfActionId: string;
}
export interface CourtStandardsAPIApiGetCauseOfActionAdditionalDataRequest {
    causeOfActionAdditionalDataId: string;
}
export interface CourtStandardsAPIApiGetCauseOfActionGroupRequest {
    causeOfActionGroupId: string;
}
export interface CourtStandardsAPIApiGetCausesOfActionRequest {
    q?: string;
    pageNumber?: number;
    sort?: 'name';
    order?: 'asc' | 'desc';
}
export interface CourtStandardsAPIApiGetCausesOfActionAdditionalDataRequest {
    q?: string;
    pageNumber?: number;
    sort?: 'name';
    order?: 'asc' | 'desc';
}
export interface CourtStandardsAPIApiGetCausesOfActionGroupRequest {
    q?: string;
    pageNumber?: number;
    sort?: 'name';
    order?: 'asc' | 'desc';
}
export interface CourtStandardsAPIApiGetChargeRequest {
    chargeId: string;
}
export interface CourtStandardsAPIApiGetChargeAdditionalDataRequest {
    chargeAdditionalDataId: string;
}
export interface CourtStandardsAPIApiGetChargeDegreeRequest {
    chargeDegreeId: string;
}
export interface CourtStandardsAPIApiGetChargeGroupRequest {
    chargeGroupId: string;
}
export interface CourtStandardsAPIApiGetChargeGroupsRequest {
    q?: string;
    pageNumber?: number;
    sort?: 'name';
    order?: 'asc' | 'desc';
}
export interface CourtStandardsAPIApiGetChargeSeverityRequest {
    chargeSeverityId: string;
}
export interface CourtStandardsAPIApiGetChargesRequest {
    q?: string;
    pageNumber?: number;
    sort?: 'name';
    order?: 'asc' | 'desc';
}
export interface CourtStandardsAPIApiGetChargesAdditionalDataRequest {
    q?: string;
    pageNumber?: number;
    sort?: 'name';
    order?: 'asc' | 'desc';
}
export interface CourtStandardsAPIApiGetChargesDegreeRequest {
    q?: string;
    pageNumber?: number;
    sort?: 'name';
    order?: 'asc' | 'desc';
}
export interface CourtStandardsAPIApiGetChargesSeverityRequest {
    q?: string;
    pageNumber?: number;
    sort?: 'name';
    order?: 'asc' | 'desc';
}
export interface CourtStandardsAPIApiGetCourtRequest {
    courtId: string;
}
export interface CourtStandardsAPIApiGetCourtLocationRequest {
    courtLocationId: string;
}
export interface CourtStandardsAPIApiGetCourtLocationsRequest {
    q?: string;
    pageNumber?: number;
    sort?: 'name';
    order?: 'asc' | 'desc';
}
export interface CourtStandardsAPIApiGetCourtLocationsForCourtRequest {
    courtId: string;
    pageNumber?: number;
    sort?: 'name';
    order?: 'asc' | 'desc';
}
export interface CourtStandardsAPIApiGetCourtServiceStatusRequest {
    courtServiceStatusId: string;
}
export interface CourtStandardsAPIApiGetCourtSystemRequest {
    courtSystemId: string;
}
export interface CourtStandardsAPIApiGetCourtSystemsRequest {
    q?: string;
    pageNumber?: number;
    sort?: 'name';
    order?: 'asc' | 'desc';
}
export interface CourtStandardsAPIApiGetCourtTypeRequest {
    courtTypeId: string;
}
export interface CourtStandardsAPIApiGetCourtTypesRequest {
    q?: string;
    pageNumber?: number;
    sort?: 'name';
    order?: 'asc' | 'desc';
}
export interface CourtStandardsAPIApiGetCourtsRequest {
    q?: string;
    pageNumber?: number;
    sort?: 'name';
    order?: 'asc' | 'desc';
}
export interface CourtStandardsAPIApiGetCourtsForCourtLocationRequest {
    courtLocationId: string;
    pageNumber?: number;
    sort?: 'name';
    order?: 'asc' | 'desc';
}
export interface CourtStandardsAPIApiGetCourtsForJurisdictionGeoRequest {
    jurisdictionGeoId: string;
    pageNumber?: number;
    sort?: 'name';
    order?: 'asc' | 'desc';
}
export interface CourtStandardsAPIApiGetCourtsServiceStatusRequest {
    q?: string;
    pageNumber?: number;
    sort?: 'name';
    order?: 'asc' | 'desc';
}
export interface CourtStandardsAPIApiGetJudgeTypeRequest {
    judgeTypeId: string;
}
export interface CourtStandardsAPIApiGetJudgeTypesRequest {
    q?: string;
    pageNumber?: number;
    sort?: 'name';
    order?: 'asc' | 'desc';
}
export interface CourtStandardsAPIApiGetJurisdictionGeoRequest {
    jurisdictionGeoId: string;
}
export interface CourtStandardsAPIApiGetJurisdictionGeoForCourtRequest {
    courtId: string;
    pageNumber?: number;
    sort?: 'state';
    order?: 'asc' | 'desc';
}
export interface CourtStandardsAPIApiGetJurisdictionsGeoRequest {
    q?: string;
    pageNumber?: number;
    sort?: 'state';
    order?: 'asc' | 'desc';
}
export interface CourtStandardsAPIApiGetPartyRoleRequest {
    partyRoleId: string;
}
export interface CourtStandardsAPIApiGetPartyRoleGroupRequest {
    partyRoleGroupId: string;
}
export interface CourtStandardsAPIApiGetPartyRoleGroupsRequest {
    q?: string;
    pageNumber?: number;
    sort?: 'name';
    order?: 'asc' | 'desc';
}
export interface CourtStandardsAPIApiGetPartyRolesRequest {
    q?: string;
    pageNumber?: number;
    sort?: 'name';
    order?: 'asc' | 'desc';
}
export declare class ObjectCourtStandardsAPIApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CourtStandardsAPIApiRequestFactory, responseProcessor?: CourtStandardsAPIApiResponseProcessor);
    getAppealCourtsForCourtWithHttpInfo(param: CourtStandardsAPIApiGetAppealCourtsForCourtRequest, options?: Configuration): Promise<HttpInfo<GetCourts200Response>>;
    getAppealCourtsForCourt(param: CourtStandardsAPIApiGetAppealCourtsForCourtRequest, options?: Configuration): Promise<GetCourts200Response>;
    getAreaOfLawWithHttpInfo(param: CourtStandardsAPIApiGetAreaOfLawRequest, options?: Configuration): Promise<HttpInfo<AreaOfLaw1>>;
    getAreaOfLaw(param: CourtStandardsAPIApiGetAreaOfLawRequest, options?: Configuration): Promise<AreaOfLaw1>;
    getAreasOfLawWithHttpInfo(param?: CourtStandardsAPIApiGetAreasOfLawRequest, options?: Configuration): Promise<HttpInfo<GetAreasOfLaw200Response>>;
    getAreasOfLaw(param?: CourtStandardsAPIApiGetAreasOfLawRequest, options?: Configuration): Promise<GetAreasOfLaw200Response>;
    getAttorneyRepresentationTypeWithHttpInfo(param: CourtStandardsAPIApiGetAttorneyRepresentationTypeRequest, options?: Configuration): Promise<HttpInfo<AttorneyRepresentationType1>>;
    getAttorneyRepresentationType(param: CourtStandardsAPIApiGetAttorneyRepresentationTypeRequest, options?: Configuration): Promise<AttorneyRepresentationType1>;
    getAttorneyRepresentationTypesWithHttpInfo(param?: CourtStandardsAPIApiGetAttorneyRepresentationTypesRequest, options?: Configuration): Promise<HttpInfo<GetAttorneyRepresentationTypes200Response>>;
    getAttorneyRepresentationTypes(param?: CourtStandardsAPIApiGetAttorneyRepresentationTypesRequest, options?: Configuration): Promise<GetAttorneyRepresentationTypes200Response>;
    getAttorneyTypeWithHttpInfo(param: CourtStandardsAPIApiGetAttorneyTypeRequest, options?: Configuration): Promise<HttpInfo<AttorneyType1>>;
    getAttorneyType(param: CourtStandardsAPIApiGetAttorneyTypeRequest, options?: Configuration): Promise<AttorneyType1>;
    getAttorneyTypesWithHttpInfo(param?: CourtStandardsAPIApiGetAttorneyTypesRequest, options?: Configuration): Promise<HttpInfo<GetAttorneyTypes200Response>>;
    getAttorneyTypes(param?: CourtStandardsAPIApiGetAttorneyTypesRequest, options?: Configuration): Promise<GetAttorneyTypes200Response>;
    getCaseClassWithHttpInfo(param: CourtStandardsAPIApiGetCaseClassRequest, options?: Configuration): Promise<HttpInfo<CaseClass1>>;
    getCaseClass(param: CourtStandardsAPIApiGetCaseClassRequest, options?: Configuration): Promise<CaseClass1>;
    getCaseRelationshipTypeWithHttpInfo(param: CourtStandardsAPIApiGetCaseRelationshipTypeRequest, options?: Configuration): Promise<HttpInfo<CaseRelationshipType1>>;
    getCaseRelationshipType(param: CourtStandardsAPIApiGetCaseRelationshipTypeRequest, options?: Configuration): Promise<CaseRelationshipType1>;
    getCaseRelationshipTypesWithHttpInfo(param?: CourtStandardsAPIApiGetCaseRelationshipTypesRequest, options?: Configuration): Promise<HttpInfo<GetCaseRelationshipTypes200Response>>;
    getCaseRelationshipTypes(param?: CourtStandardsAPIApiGetCaseRelationshipTypesRequest, options?: Configuration): Promise<GetCaseRelationshipTypes200Response>;
    getCaseStatusWithHttpInfo(param: CourtStandardsAPIApiGetCaseStatusRequest, options?: Configuration): Promise<HttpInfo<CaseStatus1>>;
    getCaseStatus(param: CourtStandardsAPIApiGetCaseStatusRequest, options?: Configuration): Promise<CaseStatus1>;
    getCaseStatusGroupWithHttpInfo(param: CourtStandardsAPIApiGetCaseStatusGroupRequest, options?: Configuration): Promise<HttpInfo<CaseStatusGroup1>>;
    getCaseStatusGroup(param: CourtStandardsAPIApiGetCaseStatusGroupRequest, options?: Configuration): Promise<CaseStatusGroup1>;
    getCaseStatusGroupsWithHttpInfo(param?: CourtStandardsAPIApiGetCaseStatusGroupsRequest, options?: Configuration): Promise<HttpInfo<GetCaseStatusGroups200Response>>;
    getCaseStatusGroups(param?: CourtStandardsAPIApiGetCaseStatusGroupsRequest, options?: Configuration): Promise<GetCaseStatusGroups200Response>;
    getCaseTypeWithHttpInfo(param: CourtStandardsAPIApiGetCaseTypeRequest, options?: Configuration): Promise<HttpInfo<CaseType1>>;
    getCaseType(param: CourtStandardsAPIApiGetCaseTypeRequest, options?: Configuration): Promise<CaseType1>;
    getCaseTypeGroupWithHttpInfo(param: CourtStandardsAPIApiGetCaseTypeGroupRequest, options?: Configuration): Promise<HttpInfo<CaseTypeGroup1>>;
    getCaseTypeGroup(param: CourtStandardsAPIApiGetCaseTypeGroupRequest, options?: Configuration): Promise<CaseTypeGroup1>;
    getCaseTypeGroupsWithHttpInfo(param?: CourtStandardsAPIApiGetCaseTypeGroupsRequest, options?: Configuration): Promise<HttpInfo<GetCaseTypeGroups200Response>>;
    getCaseTypeGroups(param?: CourtStandardsAPIApiGetCaseTypeGroupsRequest, options?: Configuration): Promise<GetCaseTypeGroups200Response>;
    getCaseTypesWithHttpInfo(param?: CourtStandardsAPIApiGetCaseTypesRequest, options?: Configuration): Promise<HttpInfo<GetCaseTypes200Response>>;
    getCaseTypes(param?: CourtStandardsAPIApiGetCaseTypesRequest, options?: Configuration): Promise<GetCaseTypes200Response>;
    getCasesClassWithHttpInfo(param?: CourtStandardsAPIApiGetCasesClassRequest, options?: Configuration): Promise<HttpInfo<GetCasesClass200Response>>;
    getCasesClass(param?: CourtStandardsAPIApiGetCasesClassRequest, options?: Configuration): Promise<GetCasesClass200Response>;
    getCasesStatusWithHttpInfo(param?: CourtStandardsAPIApiGetCasesStatusRequest, options?: Configuration): Promise<HttpInfo<GetCasesStatus200Response>>;
    getCasesStatus(param?: CourtStandardsAPIApiGetCasesStatusRequest, options?: Configuration): Promise<GetCasesStatus200Response>;
    getCauseOfActionWithHttpInfo(param: CourtStandardsAPIApiGetCauseOfActionRequest, options?: Configuration): Promise<HttpInfo<CauseOfAction1>>;
    getCauseOfAction(param: CourtStandardsAPIApiGetCauseOfActionRequest, options?: Configuration): Promise<CauseOfAction1>;
    getCauseOfActionAdditionalDataWithHttpInfo(param: CourtStandardsAPIApiGetCauseOfActionAdditionalDataRequest, options?: Configuration): Promise<HttpInfo<CauseOfActionAdditionalData1>>;
    getCauseOfActionAdditionalData(param: CourtStandardsAPIApiGetCauseOfActionAdditionalDataRequest, options?: Configuration): Promise<CauseOfActionAdditionalData1>;
    getCauseOfActionGroupWithHttpInfo(param: CourtStandardsAPIApiGetCauseOfActionGroupRequest, options?: Configuration): Promise<HttpInfo<CauseOfActionGroup1>>;
    getCauseOfActionGroup(param: CourtStandardsAPIApiGetCauseOfActionGroupRequest, options?: Configuration): Promise<CauseOfActionGroup1>;
    getCausesOfActionWithHttpInfo(param?: CourtStandardsAPIApiGetCausesOfActionRequest, options?: Configuration): Promise<HttpInfo<GetCausesOfAction200Response>>;
    getCausesOfAction(param?: CourtStandardsAPIApiGetCausesOfActionRequest, options?: Configuration): Promise<GetCausesOfAction200Response>;
    getCausesOfActionAdditionalDataWithHttpInfo(param?: CourtStandardsAPIApiGetCausesOfActionAdditionalDataRequest, options?: Configuration): Promise<HttpInfo<GetCausesOfActionAdditionalData200Response>>;
    getCausesOfActionAdditionalData(param?: CourtStandardsAPIApiGetCausesOfActionAdditionalDataRequest, options?: Configuration): Promise<GetCausesOfActionAdditionalData200Response>;
    getCausesOfActionGroupWithHttpInfo(param?: CourtStandardsAPIApiGetCausesOfActionGroupRequest, options?: Configuration): Promise<HttpInfo<GetCausesOfActionGroup200Response>>;
    getCausesOfActionGroup(param?: CourtStandardsAPIApiGetCausesOfActionGroupRequest, options?: Configuration): Promise<GetCausesOfActionGroup200Response>;
    getChargeWithHttpInfo(param: CourtStandardsAPIApiGetChargeRequest, options?: Configuration): Promise<HttpInfo<Charge1>>;
    getCharge(param: CourtStandardsAPIApiGetChargeRequest, options?: Configuration): Promise<Charge1>;
    getChargeAdditionalDataWithHttpInfo(param: CourtStandardsAPIApiGetChargeAdditionalDataRequest, options?: Configuration): Promise<HttpInfo<ChargeAdditionalData1>>;
    getChargeAdditionalData(param: CourtStandardsAPIApiGetChargeAdditionalDataRequest, options?: Configuration): Promise<ChargeAdditionalData1>;
    getChargeDegreeWithHttpInfo(param: CourtStandardsAPIApiGetChargeDegreeRequest, options?: Configuration): Promise<HttpInfo<ChargeDegree1>>;
    getChargeDegree(param: CourtStandardsAPIApiGetChargeDegreeRequest, options?: Configuration): Promise<ChargeDegree1>;
    getChargeGroupWithHttpInfo(param: CourtStandardsAPIApiGetChargeGroupRequest, options?: Configuration): Promise<HttpInfo<ChargeGroup1>>;
    getChargeGroup(param: CourtStandardsAPIApiGetChargeGroupRequest, options?: Configuration): Promise<ChargeGroup1>;
    getChargeGroupsWithHttpInfo(param?: CourtStandardsAPIApiGetChargeGroupsRequest, options?: Configuration): Promise<HttpInfo<GetChargeGroups200Response>>;
    getChargeGroups(param?: CourtStandardsAPIApiGetChargeGroupsRequest, options?: Configuration): Promise<GetChargeGroups200Response>;
    getChargeSeverityWithHttpInfo(param: CourtStandardsAPIApiGetChargeSeverityRequest, options?: Configuration): Promise<HttpInfo<ChargeSeverity1>>;
    getChargeSeverity(param: CourtStandardsAPIApiGetChargeSeverityRequest, options?: Configuration): Promise<ChargeSeverity1>;
    getChargesWithHttpInfo(param?: CourtStandardsAPIApiGetChargesRequest, options?: Configuration): Promise<HttpInfo<GetCharges200Response>>;
    getCharges(param?: CourtStandardsAPIApiGetChargesRequest, options?: Configuration): Promise<GetCharges200Response>;
    getChargesAdditionalDataWithHttpInfo(param?: CourtStandardsAPIApiGetChargesAdditionalDataRequest, options?: Configuration): Promise<HttpInfo<GetChargesAdditionalData200Response>>;
    getChargesAdditionalData(param?: CourtStandardsAPIApiGetChargesAdditionalDataRequest, options?: Configuration): Promise<GetChargesAdditionalData200Response>;
    getChargesDegreeWithHttpInfo(param?: CourtStandardsAPIApiGetChargesDegreeRequest, options?: Configuration): Promise<HttpInfo<GetChargesDegree200Response>>;
    getChargesDegree(param?: CourtStandardsAPIApiGetChargesDegreeRequest, options?: Configuration): Promise<GetChargesDegree200Response>;
    getChargesSeverityWithHttpInfo(param?: CourtStandardsAPIApiGetChargesSeverityRequest, options?: Configuration): Promise<HttpInfo<GetChargesSeverity200Response>>;
    getChargesSeverity(param?: CourtStandardsAPIApiGetChargesSeverityRequest, options?: Configuration): Promise<GetChargesSeverity200Response>;
    getCourtWithHttpInfo(param: CourtStandardsAPIApiGetCourtRequest, options?: Configuration): Promise<HttpInfo<Court1>>;
    getCourt(param: CourtStandardsAPIApiGetCourtRequest, options?: Configuration): Promise<Court1>;
    getCourtLocationWithHttpInfo(param: CourtStandardsAPIApiGetCourtLocationRequest, options?: Configuration): Promise<HttpInfo<CourtLocation1>>;
    getCourtLocation(param: CourtStandardsAPIApiGetCourtLocationRequest, options?: Configuration): Promise<CourtLocation1>;
    getCourtLocationsWithHttpInfo(param?: CourtStandardsAPIApiGetCourtLocationsRequest, options?: Configuration): Promise<HttpInfo<CourtLocationResponse1>>;
    getCourtLocations(param?: CourtStandardsAPIApiGetCourtLocationsRequest, options?: Configuration): Promise<CourtLocationResponse1>;
    getCourtLocationsForCourtWithHttpInfo(param: CourtStandardsAPIApiGetCourtLocationsForCourtRequest, options?: Configuration): Promise<HttpInfo<CourtLocationResponse1>>;
    getCourtLocationsForCourt(param: CourtStandardsAPIApiGetCourtLocationsForCourtRequest, options?: Configuration): Promise<CourtLocationResponse1>;
    getCourtServiceStatusWithHttpInfo(param: CourtStandardsAPIApiGetCourtServiceStatusRequest, options?: Configuration): Promise<HttpInfo<GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner>>;
    getCourtServiceStatus(param: CourtStandardsAPIApiGetCourtServiceStatusRequest, options?: Configuration): Promise<GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner>;
    getCourtSystemWithHttpInfo(param: CourtStandardsAPIApiGetCourtSystemRequest, options?: Configuration): Promise<HttpInfo<CourtSystem1>>;
    getCourtSystem(param: CourtStandardsAPIApiGetCourtSystemRequest, options?: Configuration): Promise<CourtSystem1>;
    getCourtSystemsWithHttpInfo(param?: CourtStandardsAPIApiGetCourtSystemsRequest, options?: Configuration): Promise<HttpInfo<GetCourtSystems200Response>>;
    getCourtSystems(param?: CourtStandardsAPIApiGetCourtSystemsRequest, options?: Configuration): Promise<GetCourtSystems200Response>;
    getCourtTypeWithHttpInfo(param: CourtStandardsAPIApiGetCourtTypeRequest, options?: Configuration): Promise<HttpInfo<CourtType1>>;
    getCourtType(param: CourtStandardsAPIApiGetCourtTypeRequest, options?: Configuration): Promise<CourtType1>;
    getCourtTypesWithHttpInfo(param?: CourtStandardsAPIApiGetCourtTypesRequest, options?: Configuration): Promise<HttpInfo<GetCourtTypes200Response>>;
    getCourtTypes(param?: CourtStandardsAPIApiGetCourtTypesRequest, options?: Configuration): Promise<GetCourtTypes200Response>;
    getCourtsWithHttpInfo(param?: CourtStandardsAPIApiGetCourtsRequest, options?: Configuration): Promise<HttpInfo<GetCourts200Response>>;
    getCourts(param?: CourtStandardsAPIApiGetCourtsRequest, options?: Configuration): Promise<GetCourts200Response>;
    getCourtsForCourtLocationWithHttpInfo(param: CourtStandardsAPIApiGetCourtsForCourtLocationRequest, options?: Configuration): Promise<HttpInfo<GetCourts200Response>>;
    getCourtsForCourtLocation(param: CourtStandardsAPIApiGetCourtsForCourtLocationRequest, options?: Configuration): Promise<GetCourts200Response>;
    getCourtsForJurisdictionGeoWithHttpInfo(param: CourtStandardsAPIApiGetCourtsForJurisdictionGeoRequest, options?: Configuration): Promise<HttpInfo<GetCourts200Response>>;
    getCourtsForJurisdictionGeo(param: CourtStandardsAPIApiGetCourtsForJurisdictionGeoRequest, options?: Configuration): Promise<GetCourts200Response>;
    getCourtsServiceStatusWithHttpInfo(param?: CourtStandardsAPIApiGetCourtsServiceStatusRequest, options?: Configuration): Promise<HttpInfo<GetCourtsServiceStatus200Response>>;
    getCourtsServiceStatus(param?: CourtStandardsAPIApiGetCourtsServiceStatusRequest, options?: Configuration): Promise<GetCourtsServiceStatus200Response>;
    getJudgeTypeWithHttpInfo(param: CourtStandardsAPIApiGetJudgeTypeRequest, options?: Configuration): Promise<HttpInfo<JudgeType1>>;
    getJudgeType(param: CourtStandardsAPIApiGetJudgeTypeRequest, options?: Configuration): Promise<JudgeType1>;
    getJudgeTypesWithHttpInfo(param?: CourtStandardsAPIApiGetJudgeTypesRequest, options?: Configuration): Promise<HttpInfo<GetJudgeTypes200Response>>;
    getJudgeTypes(param?: CourtStandardsAPIApiGetJudgeTypesRequest, options?: Configuration): Promise<GetJudgeTypes200Response>;
    getJurisdictionGeoWithHttpInfo(param: CourtStandardsAPIApiGetJurisdictionGeoRequest, options?: Configuration): Promise<HttpInfo<JurisdictionGeo1>>;
    getJurisdictionGeo(param: CourtStandardsAPIApiGetJurisdictionGeoRequest, options?: Configuration): Promise<JurisdictionGeo1>;
    getJurisdictionGeoForCourtWithHttpInfo(param: CourtStandardsAPIApiGetJurisdictionGeoForCourtRequest, options?: Configuration): Promise<HttpInfo<JurisdictionGeoResponse1>>;
    getJurisdictionGeoForCourt(param: CourtStandardsAPIApiGetJurisdictionGeoForCourtRequest, options?: Configuration): Promise<JurisdictionGeoResponse1>;
    getJurisdictionsGeoWithHttpInfo(param?: CourtStandardsAPIApiGetJurisdictionsGeoRequest, options?: Configuration): Promise<HttpInfo<JurisdictionGeoResponse1>>;
    getJurisdictionsGeo(param?: CourtStandardsAPIApiGetJurisdictionsGeoRequest, options?: Configuration): Promise<JurisdictionGeoResponse1>;
    getPartyRoleWithHttpInfo(param: CourtStandardsAPIApiGetPartyRoleRequest, options?: Configuration): Promise<HttpInfo<PartyRole1>>;
    getPartyRole(param: CourtStandardsAPIApiGetPartyRoleRequest, options?: Configuration): Promise<PartyRole1>;
    getPartyRoleGroupWithHttpInfo(param: CourtStandardsAPIApiGetPartyRoleGroupRequest, options?: Configuration): Promise<HttpInfo<PartyRoleGroup1>>;
    getPartyRoleGroup(param: CourtStandardsAPIApiGetPartyRoleGroupRequest, options?: Configuration): Promise<PartyRoleGroup1>;
    getPartyRoleGroupsWithHttpInfo(param?: CourtStandardsAPIApiGetPartyRoleGroupsRequest, options?: Configuration): Promise<HttpInfo<GetPartyRoleGroups200Response>>;
    getPartyRoleGroups(param?: CourtStandardsAPIApiGetPartyRoleGroupsRequest, options?: Configuration): Promise<GetPartyRoleGroups200Response>;
    getPartyRolesWithHttpInfo(param?: CourtStandardsAPIApiGetPartyRolesRequest, options?: Configuration): Promise<HttpInfo<GetPartyRoles200Response>>;
    getPartyRoles(param?: CourtStandardsAPIApiGetPartyRolesRequest, options?: Configuration): Promise<GetPartyRoles200Response>;
}
import { JudgeAnalyticsAPIApiRequestFactory, JudgeAnalyticsAPIApiResponseProcessor } from "../apis/JudgeAnalyticsAPIApi";
export interface JudgeAnalyticsAPIApiGetNormAttorneysAssociatedWithNormJudgeRequest {
    normJudgeId: string;
    q?: string;
    pageNumber?: number;
}
export interface JudgeAnalyticsAPIApiGetNormJudgeByIdRequest {
    normJudgeId: string;
}
export interface JudgeAnalyticsAPIApiGetNormLawFirmsAssociatedWithNormJudgeRequest {
    normJudgeId: string;
    q?: string;
    pageNumber?: number;
}
export interface JudgeAnalyticsAPIApiGetNormPartiesAssociatedWithNormJudgeRequest {
    normJudgeId: string;
    q?: string;
    pageNumber?: number;
}
export interface JudgeAnalyticsAPIApiSearchNormalizedJudgesRequest {
    q?: string;
    pageNumber?: number;
}
export interface JudgeAnalyticsAPIApiSearchNormalizedJudgesByIdRequest {
    normJudgeSearchId: string;
    pageNumber?: number;
}
export declare class ObjectJudgeAnalyticsAPIApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: JudgeAnalyticsAPIApiRequestFactory, responseProcessor?: JudgeAnalyticsAPIApiResponseProcessor);
    getNormAttorneysAssociatedWithNormJudgeWithHttpInfo(param: JudgeAnalyticsAPIApiGetNormAttorneysAssociatedWithNormJudgeRequest, options?: Configuration): Promise<HttpInfo<AssociatedNormAttorneyResponse1>>;
    getNormAttorneysAssociatedWithNormJudge(param: JudgeAnalyticsAPIApiGetNormAttorneysAssociatedWithNormJudgeRequest, options?: Configuration): Promise<AssociatedNormAttorneyResponse1>;
    getNormJudgeByIdWithHttpInfo(param: JudgeAnalyticsAPIApiGetNormJudgeByIdRequest, options?: Configuration): Promise<HttpInfo<NormJudge1>>;
    getNormJudgeById(param: JudgeAnalyticsAPIApiGetNormJudgeByIdRequest, options?: Configuration): Promise<NormJudge1>;
    getNormLawFirmsAssociatedWithNormJudgeWithHttpInfo(param: JudgeAnalyticsAPIApiGetNormLawFirmsAssociatedWithNormJudgeRequest, options?: Configuration): Promise<HttpInfo<AssociatedNormLawFirmResponse1>>;
    getNormLawFirmsAssociatedWithNormJudge(param: JudgeAnalyticsAPIApiGetNormLawFirmsAssociatedWithNormJudgeRequest, options?: Configuration): Promise<AssociatedNormLawFirmResponse1>;
    getNormPartiesAssociatedWithNormJudgeWithHttpInfo(param: JudgeAnalyticsAPIApiGetNormPartiesAssociatedWithNormJudgeRequest, options?: Configuration): Promise<HttpInfo<AssociatedNormPartyResponse1>>;
    getNormPartiesAssociatedWithNormJudge(param: JudgeAnalyticsAPIApiGetNormPartiesAssociatedWithNormJudgeRequest, options?: Configuration): Promise<AssociatedNormPartyResponse1>;
    searchNormalizedJudgesWithHttpInfo(param?: JudgeAnalyticsAPIApiSearchNormalizedJudgesRequest, options?: Configuration): Promise<HttpInfo<SearchNormalizedJudges200Response>>;
    searchNormalizedJudges(param?: JudgeAnalyticsAPIApiSearchNormalizedJudgesRequest, options?: Configuration): Promise<SearchNormalizedJudges200Response>;
    searchNormalizedJudgesByIdWithHttpInfo(param: JudgeAnalyticsAPIApiSearchNormalizedJudgesByIdRequest, options?: Configuration): Promise<HttpInfo<SearchNormalizedJudges200Response>>;
    searchNormalizedJudgesById(param: JudgeAnalyticsAPIApiSearchNormalizedJudgesByIdRequest, options?: Configuration): Promise<SearchNormalizedJudges200Response>;
}
import { LawFirmAnalyticsAPIApiRequestFactory, LawFirmAnalyticsAPIApiResponseProcessor } from "../apis/LawFirmAnalyticsAPIApi";
export interface LawFirmAnalyticsAPIApiGetNormAttorneysAssociatedWithNormLawFirmRequest {
    normLawFirmId: string;
    q?: string;
    pageNumber?: number;
}
export interface LawFirmAnalyticsAPIApiGetNormJudgesAssociatedWithNormLawFirmRequest {
    normLawFirmId: string;
    q?: string;
    pageNumber?: number;
}
export interface LawFirmAnalyticsAPIApiGetNormLawFirmByIdRequest {
    normLawFirmId: string;
}
export interface LawFirmAnalyticsAPIApiGetNormPartiesAssociatedWithNormLawFirmRequest {
    normLawFirmId: string;
    q?: string;
    pageNumber?: number;
}
export interface LawFirmAnalyticsAPIApiSearchNormalizedLawFirmsRequest {
    q?: string;
    pageNumber?: number;
}
export interface LawFirmAnalyticsAPIApiSearchNormalizedLawFirmsByIdRequest {
    normLawFirmSearchId: string;
    pageNumber?: number;
}
export declare class ObjectLawFirmAnalyticsAPIApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: LawFirmAnalyticsAPIApiRequestFactory, responseProcessor?: LawFirmAnalyticsAPIApiResponseProcessor);
    getNormAttorneysAssociatedWithNormLawFirmWithHttpInfo(param: LawFirmAnalyticsAPIApiGetNormAttorneysAssociatedWithNormLawFirmRequest, options?: Configuration): Promise<HttpInfo<AssociatedNormAttorneyResponse1>>;
    getNormAttorneysAssociatedWithNormLawFirm(param: LawFirmAnalyticsAPIApiGetNormAttorneysAssociatedWithNormLawFirmRequest, options?: Configuration): Promise<AssociatedNormAttorneyResponse1>;
    getNormJudgesAssociatedWithNormLawFirmWithHttpInfo(param: LawFirmAnalyticsAPIApiGetNormJudgesAssociatedWithNormLawFirmRequest, options?: Configuration): Promise<HttpInfo<AssociatedNormJudgeResponse1>>;
    getNormJudgesAssociatedWithNormLawFirm(param: LawFirmAnalyticsAPIApiGetNormJudgesAssociatedWithNormLawFirmRequest, options?: Configuration): Promise<AssociatedNormJudgeResponse1>;
    getNormLawFirmByIdWithHttpInfo(param: LawFirmAnalyticsAPIApiGetNormLawFirmByIdRequest, options?: Configuration): Promise<HttpInfo<NormLawFirm1>>;
    getNormLawFirmById(param: LawFirmAnalyticsAPIApiGetNormLawFirmByIdRequest, options?: Configuration): Promise<NormLawFirm1>;
    getNormPartiesAssociatedWithNormLawFirmWithHttpInfo(param: LawFirmAnalyticsAPIApiGetNormPartiesAssociatedWithNormLawFirmRequest, options?: Configuration): Promise<HttpInfo<AssociatedNormPartyResponse1>>;
    getNormPartiesAssociatedWithNormLawFirm(param: LawFirmAnalyticsAPIApiGetNormPartiesAssociatedWithNormLawFirmRequest, options?: Configuration): Promise<AssociatedNormPartyResponse1>;
    searchNormalizedLawFirmsWithHttpInfo(param?: LawFirmAnalyticsAPIApiSearchNormalizedLawFirmsRequest, options?: Configuration): Promise<HttpInfo<SearchNormalizedLawFirms200Response>>;
    searchNormalizedLawFirms(param?: LawFirmAnalyticsAPIApiSearchNormalizedLawFirmsRequest, options?: Configuration): Promise<SearchNormalizedLawFirms200Response>;
    searchNormalizedLawFirmsByIdWithHttpInfo(param: LawFirmAnalyticsAPIApiSearchNormalizedLawFirmsByIdRequest, options?: Configuration): Promise<HttpInfo<SearchNormalizedLawFirms200Response>>;
    searchNormalizedLawFirmsById(param: LawFirmAnalyticsAPIApiSearchNormalizedLawFirmsByIdRequest, options?: Configuration): Promise<SearchNormalizedLawFirms200Response>;
}
import { PACERAPIApiRequestFactory, PACERAPIApiResponseProcessor } from "../apis/PACERAPIApi";
export interface PACERAPIApiAllCourtsPacerCaseLocatorCaseSearchRequest {
    pacerUserId: string;
    pacerClientCode: string;
    caseNumber?: string;
    pacerCaseId?: number;
    caseTitle?: string;
    caseOffice?: number;
    caseSequenceNumber?: number;
    caseYear?: number;
    caseTypeArray?: Array<string>;
    courtRegionIdArray?: Array<string>;
    caseFiledStartDate?: Date;
    caseFiledEndDate?: Date;
    caseTerminatedStartDate?: Date;
    caseTerminatedEndDate?: Date;
    sortParameterQuery?: string;
    caseStatus?: 'open' | 'closed';
    pageNumber?: number;
}
export interface PACERAPIApiAllCourtsPacerCaseLocatorPartySearchRequest {
    pacerUserId: string;
    pacerClientCode: string;
    caseNumber?: string;
    pacerCaseId?: number;
    lastName?: string;
    firstName?: string;
    middleName?: string;
    generation?: string;
    partyType?: string;
    partyExactNameMatch?: boolean;
    partyRoleArray?: Array<string>;
    caseTitle?: string;
    caseOffice?: number;
    caseSequenceNumber?: number;
    caseYear?: number;
    caseTypeArray?: Array<string>;
    courtRegionIdArray?: Array<string>;
    caseYearFrom?: number;
    caseYearTo?: number;
    caseFiledStartDate?: Date;
    caseFiledEndDate?: Date;
    caseTerminatedStartDate?: Date;
    caseTerminatedEndDate?: Date;
    sortParameterQuery?: string;
    caseStatus?: 'open' | 'closed';
    pageNumber?: number;
}
export interface PACERAPIApiAppealCourtsPacerCaseLocatorCaseSearchRequest {
    pacerUserId: string;
    pacerClientCode: string;
    caseNumber?: string;
    pacerCaseId?: number;
    caseTitle?: string;
    caseOffice?: number;
    caseSequenceNumber?: number;
    caseYear?: number;
    caseTypeArray?: Array<string>;
    natureOfSuitsArray?: Array<string>;
    courtRegionIdArray?: Array<string>;
    caseFiledStartDate?: Date;
    caseFiledEndDate?: Date;
    caseTerminatedStartDate?: Date;
    caseTerminatedEndDate?: Date;
    sortParameterQuery?: string;
    caseStatus?: 'open' | 'closed';
    pageNumber?: number;
}
export interface PACERAPIApiAppealCourtsPacerCaseLocatorPartySearchRequest {
    pacerUserId: string;
    pacerClientCode: string;
    caseNumber?: string;
    pacerCaseId?: number;
    lastName?: string;
    firstName?: string;
    middleName?: string;
    generation?: string;
    partyType?: string;
    partyExactNameMatch?: boolean;
    partyRoleArray?: Array<string>;
    caseTitle?: string;
    caseOffice?: number;
    caseSequenceNumber?: number;
    caseYear?: number;
    caseTypeArray?: Array<string>;
    courtRegionIdArray?: Array<string>;
    caseYearFrom?: number;
    caseYearTo?: number;
    caseFiledStartDate?: Date;
    caseFiledEndDate?: Date;
    caseTerminatedStartDate?: Date;
    caseTerminatedEndDate?: Date;
    sortParameterQuery?: string;
    caseStatus?: 'open' | 'closed';
    pageNumber?: number;
}
export interface PACERAPIApiBankruptcyCourtsPacerCaseLocatorCaseSearchRequest {
    pacerUserId: string;
    pacerClientCode: string;
    caseNumber?: string;
    pacerCaseId?: number;
    caseTitle?: string;
    caseOffice?: number;
    caseSequenceNumber?: number;
    caseYear?: number;
    caseTypeArray?: Array<string>;
    federalBankruptcyChapterArray?: Array<string>;
    courtRegionIdArray?: Array<string>;
    caseFiledStartDate?: Date;
    caseFiledEndDate?: Date;
    caseTerminatedStartDate?: Date;
    caseTerminatedEndDate?: Date;
    caseDischargedStartDate?: Date;
    caseDischargedEndDate?: Date;
    caseDismissedStartDate?: Date;
    caseDismissedEndDate?: Date;
    sortParameterQuery?: string;
    caseStatus?: 'open' | 'closed';
    pageNumber?: number;
}
export interface PACERAPIApiBankruptcyCourtsPacerCaseLocatorPartySearchRequest {
    pacerUserId: string;
    pacerClientCode: string;
    caseNumber?: string;
    pacerCaseId?: number;
    lastName?: string;
    firstName?: string;
    middleName?: string;
    generation?: string;
    partyType?: string;
    partyExactNameMatch?: boolean;
    partyRoleArray?: Array<string>;
    caseTitle?: string;
    caseOffice?: number;
    caseSequenceNumber?: number;
    caseYear?: number;
    caseTypeArray?: Array<string>;
    courtRegionIdArray?: Array<string>;
    caseYearFrom?: number;
    caseYearTo?: number;
    ssnOrEin?: string;
    fourDigitSsn?: string;
    caseFiledStartDate?: Date;
    caseFiledEndDate?: Date;
    caseTerminatedStartDate?: Date;
    caseTerminatedEndDate?: Date;
    caseDischargedStartDate?: Date;
    caseDischargedEndDate?: Date;
    caseDismissedStartDate?: Date;
    caseDismissedEndDate?: Date;
    sortParameterQuery?: string;
    caseStatus?: 'open' | 'closed';
    pageNumber?: number;
}
export interface PACERAPIApiCivilCourtsPacerCaseLocatorCaseSearchRequest {
    pacerUserId: string;
    pacerClientCode: string;
    caseNumber?: string;
    pacerCaseId?: number;
    caseTitle?: string;
    caseOffice?: number;
    caseSequenceNumber?: number;
    caseYear?: number;
    caseTypeArray?: Array<string>;
    natureOfSuitsArray?: Array<string>;
    courtRegionIdArray?: Array<string>;
    caseFiledStartDate?: Date;
    caseFiledEndDate?: Date;
    caseTerminatedStartDate?: Date;
    caseTerminatedEndDate?: Date;
    sortParameterQuery?: string;
    caseStatus?: 'open' | 'closed';
    pageNumber?: number;
}
export interface PACERAPIApiCivilCourtsPacerCaseLocatorPartySearchRequest {
    pacerUserId: string;
    pacerClientCode: string;
    caseNumber?: string;
    pacerCaseId?: number;
    lastName?: string;
    firstName?: string;
    middleName?: string;
    generation?: string;
    partyType?: string;
    partyExactNameMatch?: boolean;
    partyRoleArray?: Array<string>;
    caseTitle?: string;
    caseOffice?: number;
    caseSequenceNumber?: number;
    caseYear?: number;
    caseTypeArray?: Array<string>;
    courtRegionIdArray?: Array<string>;
    caseYearFrom?: number;
    caseYearTo?: number;
    caseFiledStartDate?: Date;
    caseFiledEndDate?: Date;
    caseTerminatedStartDate?: Date;
    caseTerminatedEndDate?: Date;
    sortParameterQuery?: string;
    caseStatus?: 'open' | 'closed';
    pageNumber?: number;
}
export interface PACERAPIApiCriminalCourtsPacerCaseLocatorCaseSearchRequest {
    pacerUserId: string;
    pacerClientCode: string;
    caseNumber?: string;
    pacerCaseId?: number;
    caseTitle?: string;
    caseOffice?: number;
    caseSequenceNumber?: number;
    caseYear?: number;
    caseTypeArray?: Array<string>;
    courtRegionIdArray?: Array<string>;
    caseFiledStartDate?: Date;
    caseFiledEndDate?: Date;
    caseTerminatedStartDate?: Date;
    caseTerminatedEndDate?: Date;
    sortParameterQuery?: string;
    caseStatus?: 'open' | 'closed';
    pageNumber?: number;
}
export interface PACERAPIApiCriminalCourtsPacerCaseLocatorPartySearchRequest {
    pacerUserId: string;
    pacerClientCode: string;
    caseNumber?: string;
    pacerCaseId?: number;
    lastName?: string;
    firstName?: string;
    middleName?: string;
    generation?: string;
    partyType?: string;
    partyExactNameMatch?: boolean;
    partyRoleArray?: Array<string>;
    caseTitle?: string;
    caseOffice?: number;
    caseSequenceNumber?: number;
    caseYear?: number;
    caseTypeArray?: Array<string>;
    courtRegionIdArray?: Array<string>;
    caseYearFrom?: number;
    caseYearTo?: number;
    caseFiledStartDate?: Date;
    caseFiledEndDate?: Date;
    caseTerminatedStartDate?: Date;
    caseTerminatedEndDate?: Date;
    sortParameterQuery?: string;
    caseStatus?: 'open' | 'closed';
    pageNumber?: number;
}
export interface PACERAPIApiImportPacerCaseByCourtUsingCaseNumberRequest {
    pacerUserId: string;
    pacerClientCode: string;
    caseNumber: string;
    courtId: string;
}
export interface PACERAPIApiMultiDistrictCourtsPacerCaseLocatorCaseSearchRequest {
    pacerUserId: string;
    pacerClientCode: string;
    caseNumber?: string;
    jpmlNumber?: number;
    pacerCaseId?: number;
    caseTitle?: string;
    caseOffice?: number;
    caseSequenceNumber?: number;
    caseYear?: number;
    caseTypeArray?: Array<string>;
    courtRegionIdArray?: Array<string>;
    caseFiledStartDate?: Date;
    caseFiledEndDate?: Date;
    caseTerminatedStartDate?: Date;
    caseTerminatedEndDate?: Date;
    sortParameterQuery?: string;
    caseStatus?: 'open' | 'closed';
    pageNumber?: number;
}
export interface PACERAPIApiMultiDistrictCourtsPacerCaseLocatorPartySearchRequest {
    pacerUserId: string;
    pacerClientCode: string;
    caseNumber?: string;
    jpmlNumber?: number;
    pacerCaseId?: number;
    lastName?: string;
    firstName?: string;
    middleName?: string;
    generation?: string;
    partyType?: string;
    partyExactNameMatch?: boolean;
    partyRoleArray?: Array<string>;
    caseTitle?: string;
    caseOffice?: number;
    caseSequenceNumber?: number;
    caseYear?: number;
    caseTypeArray?: Array<string>;
    courtRegionIdArray?: Array<string>;
    caseYearFrom?: number;
    caseYearTo?: number;
    caseFiledStartDate?: Date;
    caseFiledEndDate?: Date;
    caseTerminatedStartDate?: Date;
    caseTerminatedEndDate?: Date;
    sortParameterQuery?: string;
    caseStatus?: 'open' | 'closed';
    pageNumber?: number;
}
export declare class ObjectPACERAPIApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PACERAPIApiRequestFactory, responseProcessor?: PACERAPIApiResponseProcessor);
    allCourtsPacerCaseLocatorCaseSearchWithHttpInfo(param: PACERAPIApiAllCourtsPacerCaseLocatorCaseSearchRequest, options?: Configuration): Promise<HttpInfo<AllCourtsPacerCaseLocatorCaseSearch200Response>>;
    allCourtsPacerCaseLocatorCaseSearch(param: PACERAPIApiAllCourtsPacerCaseLocatorCaseSearchRequest, options?: Configuration): Promise<AllCourtsPacerCaseLocatorCaseSearch200Response>;
    allCourtsPacerCaseLocatorPartySearchWithHttpInfo(param: PACERAPIApiAllCourtsPacerCaseLocatorPartySearchRequest, options?: Configuration): Promise<HttpInfo<AllCourtsPacerCaseLocatorPartySearch200Response>>;
    allCourtsPacerCaseLocatorPartySearch(param: PACERAPIApiAllCourtsPacerCaseLocatorPartySearchRequest, options?: Configuration): Promise<AllCourtsPacerCaseLocatorPartySearch200Response>;
    appealCourtsPacerCaseLocatorCaseSearchWithHttpInfo(param: PACERAPIApiAppealCourtsPacerCaseLocatorCaseSearchRequest, options?: Configuration): Promise<HttpInfo<AllCourtsPacerCaseLocatorCaseSearch200Response>>;
    appealCourtsPacerCaseLocatorCaseSearch(param: PACERAPIApiAppealCourtsPacerCaseLocatorCaseSearchRequest, options?: Configuration): Promise<AllCourtsPacerCaseLocatorCaseSearch200Response>;
    appealCourtsPacerCaseLocatorPartySearchWithHttpInfo(param: PACERAPIApiAppealCourtsPacerCaseLocatorPartySearchRequest, options?: Configuration): Promise<HttpInfo<AllCourtsPacerCaseLocatorPartySearch200Response>>;
    appealCourtsPacerCaseLocatorPartySearch(param: PACERAPIApiAppealCourtsPacerCaseLocatorPartySearchRequest, options?: Configuration): Promise<AllCourtsPacerCaseLocatorPartySearch200Response>;
    bankruptcyCourtsPacerCaseLocatorCaseSearchWithHttpInfo(param: PACERAPIApiBankruptcyCourtsPacerCaseLocatorCaseSearchRequest, options?: Configuration): Promise<HttpInfo<AllCourtsPacerCaseLocatorCaseSearch200Response>>;
    bankruptcyCourtsPacerCaseLocatorCaseSearch(param: PACERAPIApiBankruptcyCourtsPacerCaseLocatorCaseSearchRequest, options?: Configuration): Promise<AllCourtsPacerCaseLocatorCaseSearch200Response>;
    bankruptcyCourtsPacerCaseLocatorPartySearchWithHttpInfo(param: PACERAPIApiBankruptcyCourtsPacerCaseLocatorPartySearchRequest, options?: Configuration): Promise<HttpInfo<AllCourtsPacerCaseLocatorPartySearch200Response>>;
    bankruptcyCourtsPacerCaseLocatorPartySearch(param: PACERAPIApiBankruptcyCourtsPacerCaseLocatorPartySearchRequest, options?: Configuration): Promise<AllCourtsPacerCaseLocatorPartySearch200Response>;
    civilCourtsPacerCaseLocatorCaseSearchWithHttpInfo(param: PACERAPIApiCivilCourtsPacerCaseLocatorCaseSearchRequest, options?: Configuration): Promise<HttpInfo<AllCourtsPacerCaseLocatorCaseSearch200Response>>;
    civilCourtsPacerCaseLocatorCaseSearch(param: PACERAPIApiCivilCourtsPacerCaseLocatorCaseSearchRequest, options?: Configuration): Promise<AllCourtsPacerCaseLocatorCaseSearch200Response>;
    civilCourtsPacerCaseLocatorPartySearchWithHttpInfo(param: PACERAPIApiCivilCourtsPacerCaseLocatorPartySearchRequest, options?: Configuration): Promise<HttpInfo<AllCourtsPacerCaseLocatorPartySearch200Response>>;
    civilCourtsPacerCaseLocatorPartySearch(param: PACERAPIApiCivilCourtsPacerCaseLocatorPartySearchRequest, options?: Configuration): Promise<AllCourtsPacerCaseLocatorPartySearch200Response>;
    criminalCourtsPacerCaseLocatorCaseSearchWithHttpInfo(param: PACERAPIApiCriminalCourtsPacerCaseLocatorCaseSearchRequest, options?: Configuration): Promise<HttpInfo<AllCourtsPacerCaseLocatorCaseSearch200Response>>;
    criminalCourtsPacerCaseLocatorCaseSearch(param: PACERAPIApiCriminalCourtsPacerCaseLocatorCaseSearchRequest, options?: Configuration): Promise<AllCourtsPacerCaseLocatorCaseSearch200Response>;
    criminalCourtsPacerCaseLocatorPartySearchWithHttpInfo(param: PACERAPIApiCriminalCourtsPacerCaseLocatorPartySearchRequest, options?: Configuration): Promise<HttpInfo<AllCourtsPacerCaseLocatorPartySearch200Response>>;
    criminalCourtsPacerCaseLocatorPartySearch(param: PACERAPIApiCriminalCourtsPacerCaseLocatorPartySearchRequest, options?: Configuration): Promise<AllCourtsPacerCaseLocatorPartySearch200Response>;
    importPacerCaseByCourtUsingCaseNumberWithHttpInfo(param: PACERAPIApiImportPacerCaseByCourtUsingCaseNumberRequest, options?: Configuration): Promise<HttpInfo<ImportPacerCaseByCourtUsingCaseNumber200Response>>;
    importPacerCaseByCourtUsingCaseNumber(param: PACERAPIApiImportPacerCaseByCourtUsingCaseNumberRequest, options?: Configuration): Promise<ImportPacerCaseByCourtUsingCaseNumber200Response>;
    multiDistrictCourtsPacerCaseLocatorCaseSearchWithHttpInfo(param: PACERAPIApiMultiDistrictCourtsPacerCaseLocatorCaseSearchRequest, options?: Configuration): Promise<HttpInfo<AllCourtsPacerCaseLocatorCaseSearch200Response>>;
    multiDistrictCourtsPacerCaseLocatorCaseSearch(param: PACERAPIApiMultiDistrictCourtsPacerCaseLocatorCaseSearchRequest, options?: Configuration): Promise<AllCourtsPacerCaseLocatorCaseSearch200Response>;
    multiDistrictCourtsPacerCaseLocatorPartySearchWithHttpInfo(param: PACERAPIApiMultiDistrictCourtsPacerCaseLocatorPartySearchRequest, options?: Configuration): Promise<HttpInfo<AllCourtsPacerCaseLocatorPartySearch200Response>>;
    multiDistrictCourtsPacerCaseLocatorPartySearch(param: PACERAPIApiMultiDistrictCourtsPacerCaseLocatorPartySearchRequest, options?: Configuration): Promise<AllCourtsPacerCaseLocatorPartySearch200Response>;
}
import { PACERCredentialAPIApiRequestFactory, PACERCredentialAPIApiResponseProcessor } from "../apis/PACERCredentialAPIApi";
export interface PACERCredentialAPIApiAddPacerCredentialRequest {
    addPacerCredentialRequest?: AddPacerCredentialRequest;
}
export interface PACERCredentialAPIApiGetPacerCredentialRequest {
    pageNumber?: number;
}
export interface PACERCredentialAPIApiGetPacerCredentialByIdRequest {
    pacerUserId: string;
}
export interface PACERCredentialAPIApiRemovePacerCredentialByIdRequest {
    pacerUserId: string;
}
export declare class ObjectPACERCredentialAPIApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PACERCredentialAPIApiRequestFactory, responseProcessor?: PACERCredentialAPIApiResponseProcessor);
    addPacerCredentialWithHttpInfo(param?: PACERCredentialAPIApiAddPacerCredentialRequest, options?: Configuration): Promise<HttpInfo<Success1>>;
    addPacerCredential(param?: PACERCredentialAPIApiAddPacerCredentialRequest, options?: Configuration): Promise<Success1>;
    getPacerCredentialWithHttpInfo(param?: PACERCredentialAPIApiGetPacerCredentialRequest, options?: Configuration): Promise<HttpInfo<GetPacerCredential200Response>>;
    getPacerCredential(param?: PACERCredentialAPIApiGetPacerCredentialRequest, options?: Configuration): Promise<GetPacerCredential200Response>;
    getPacerCredentialByIdWithHttpInfo(param: PACERCredentialAPIApiGetPacerCredentialByIdRequest, options?: Configuration): Promise<HttpInfo<GetPacerCredential200ResponsePacerCredentialArrayInner>>;
    getPacerCredentialById(param: PACERCredentialAPIApiGetPacerCredentialByIdRequest, options?: Configuration): Promise<GetPacerCredential200ResponsePacerCredentialArrayInner>;
    removePacerCredentialByIdWithHttpInfo(param: PACERCredentialAPIApiRemovePacerCredentialByIdRequest, options?: Configuration): Promise<HttpInfo<Success1>>;
    removePacerCredentialById(param: PACERCredentialAPIApiRemovePacerCredentialByIdRequest, options?: Configuration): Promise<Success1>;
}
import { PartyAnalyticsAPIApiRequestFactory, PartyAnalyticsAPIApiResponseProcessor } from "../apis/PartyAnalyticsAPIApi";
export interface PartyAnalyticsAPIApiGetNormAttorneysAssociatedWithNormPartyRequest {
    normPartyId: string;
    q?: string;
    pageNumber?: number;
}
export interface PartyAnalyticsAPIApiGetNormJudgesAssociatedWithNormPartyRequest {
    normPartyId: string;
    q?: string;
    pageNumber?: number;
}
export interface PartyAnalyticsAPIApiGetNormLawFirmsAssociatedWithNormPartyRequest {
    normPartyId: string;
    q?: string;
    pageNumber?: number;
}
export interface PartyAnalyticsAPIApiGetNormPartyByIdRequest {
    normPartyId: string;
}
export interface PartyAnalyticsAPIApiSearchNormalizedPartiesRequest {
    q?: string;
    pageNumber?: number;
}
export interface PartyAnalyticsAPIApiSearchNormalizedPartiesByIdRequest {
    normPartySearchId: string;
    pageNumber?: number;
}
export declare class ObjectPartyAnalyticsAPIApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PartyAnalyticsAPIApiRequestFactory, responseProcessor?: PartyAnalyticsAPIApiResponseProcessor);
    getNormAttorneysAssociatedWithNormPartyWithHttpInfo(param: PartyAnalyticsAPIApiGetNormAttorneysAssociatedWithNormPartyRequest, options?: Configuration): Promise<HttpInfo<AssociatedNormAttorneyResponse1>>;
    getNormAttorneysAssociatedWithNormParty(param: PartyAnalyticsAPIApiGetNormAttorneysAssociatedWithNormPartyRequest, options?: Configuration): Promise<AssociatedNormAttorneyResponse1>;
    getNormJudgesAssociatedWithNormPartyWithHttpInfo(param: PartyAnalyticsAPIApiGetNormJudgesAssociatedWithNormPartyRequest, options?: Configuration): Promise<HttpInfo<AssociatedNormJudgeResponse1>>;
    getNormJudgesAssociatedWithNormParty(param: PartyAnalyticsAPIApiGetNormJudgesAssociatedWithNormPartyRequest, options?: Configuration): Promise<AssociatedNormJudgeResponse1>;
    getNormLawFirmsAssociatedWithNormPartyWithHttpInfo(param: PartyAnalyticsAPIApiGetNormLawFirmsAssociatedWithNormPartyRequest, options?: Configuration): Promise<HttpInfo<AssociatedNormLawFirmResponse1>>;
    getNormLawFirmsAssociatedWithNormParty(param: PartyAnalyticsAPIApiGetNormLawFirmsAssociatedWithNormPartyRequest, options?: Configuration): Promise<AssociatedNormLawFirmResponse1>;
    getNormPartyByIdWithHttpInfo(param: PartyAnalyticsAPIApiGetNormPartyByIdRequest, options?: Configuration): Promise<HttpInfo<NormParty1>>;
    getNormPartyById(param: PartyAnalyticsAPIApiGetNormPartyByIdRequest, options?: Configuration): Promise<NormParty1>;
    searchNormalizedPartiesWithHttpInfo(param?: PartyAnalyticsAPIApiSearchNormalizedPartiesRequest, options?: Configuration): Promise<HttpInfo<SearchNormalizedParties200Response>>;
    searchNormalizedParties(param?: PartyAnalyticsAPIApiSearchNormalizedPartiesRequest, options?: Configuration): Promise<SearchNormalizedParties200Response>;
    searchNormalizedPartiesByIdWithHttpInfo(param: PartyAnalyticsAPIApiSearchNormalizedPartiesByIdRequest, options?: Configuration): Promise<HttpInfo<SearchNormalizedParties200Response>>;
    searchNormalizedPartiesById(param: PartyAnalyticsAPIApiSearchNormalizedPartiesByIdRequest, options?: Configuration): Promise<SearchNormalizedParties200Response>;
}
import { UsageAPIApiRequestFactory, UsageAPIApiResponseProcessor } from "../apis/UsageAPIApi";
export interface UsageAPIApiGetBillingCyclesRequest {
}
export interface UsageAPIApiGetBillingUsageByBillingCycleRequest {
    billingCycle: string;
}
export interface UsageAPIApiGetDailyUsageByDateRequest {
    date: string;
}
export declare class ObjectUsageAPIApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: UsageAPIApiRequestFactory, responseProcessor?: UsageAPIApiResponseProcessor);
    getBillingCyclesWithHttpInfo(param?: UsageAPIApiGetBillingCyclesRequest, options?: Configuration): Promise<HttpInfo<GetBillingCycles200Response>>;
    getBillingCycles(param?: UsageAPIApiGetBillingCyclesRequest, options?: Configuration): Promise<GetBillingCycles200Response>;
    getBillingUsageByBillingCycleWithHttpInfo(param: UsageAPIApiGetBillingUsageByBillingCycleRequest, options?: Configuration): Promise<HttpInfo<GetBillingUsageByBillingCycle200Response>>;
    getBillingUsageByBillingCycle(param: UsageAPIApiGetBillingUsageByBillingCycleRequest, options?: Configuration): Promise<GetBillingUsageByBillingCycle200Response>;
    getDailyUsageByDateWithHttpInfo(param: UsageAPIApiGetDailyUsageByDateRequest, options?: Configuration): Promise<HttpInfo<GetDailyUsageByDate200Response>>;
    getDailyUsageByDate(param: UsageAPIApiGetDailyUsageByDateRequest, options?: Configuration): Promise<GetDailyUsageByDate200Response>;
}

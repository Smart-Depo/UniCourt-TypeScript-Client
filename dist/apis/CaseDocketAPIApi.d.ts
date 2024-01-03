import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { GetCase200Response } from '../models/GetCase200Response';
import { GetCase200ResponseAttorneys } from '../models/GetCase200ResponseAttorneys';
import { GetCase200ResponseAttorneysAttorneyArrayInner } from '../models/GetCase200ResponseAttorneysAttorneyArrayInner';
import { GetCase200ResponseDocketEntries } from '../models/GetCase200ResponseDocketEntries';
import { GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments } from '../models/GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments';
import { GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments } from '../models/GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments';
import { GetCase200ResponseHearings } from '../models/GetCase200ResponseHearings';
import { GetCase200ResponseJudges } from '../models/GetCase200ResponseJudges';
import { GetCase200ResponseJudgesJudgeArrayInner } from '../models/GetCase200ResponseJudgesJudgeArrayInner';
import { GetCase200ResponseParties } from '../models/GetCase200ResponseParties';
import { GetCase200ResponsePartiesPartyArrayInner } from '../models/GetCase200ResponsePartiesPartyArrayInner';
import { GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations } from '../models/GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations';
import { GetCase200ResponseRelatedCases } from '../models/GetCase200ResponseRelatedCases';
export declare class CaseDocketAPIApiRequestFactory extends BaseAPIRequestFactory {
    getAttorneyAssociatedParties(attorneyId: string, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    getAttorneyById(attorneyId: string, _options?: Configuration): Promise<RequestContext>;
    getCase(caseId: string, _options?: Configuration): Promise<RequestContext>;
    getCaseAttorneys(caseId: string, isVisible?: boolean, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    getCaseDocketEntries(caseId: string, docketNumber?: number, sortBy?: 'latest to oldest' | 'oldest to latest', pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    getCaseHearings(caseId: string, sortBy?: 'latest to oldest' | 'oldest to latest', pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    getCaseJudges(caseId: string, isVisible?: boolean, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    getCaseParties(caseId: string, isVisible?: boolean, pageNumber?: number, partyRoleId?: string, partyRoleGroupId?: string, attorneyRepresentationTypeId?: string, partyClassificationType?: 'INDIVIDUAL' | 'COMPANY' | 'OTHER', _options?: Configuration): Promise<RequestContext>;
    getCaseRelatedCases(caseId: string, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    getJudgeById(judgeId: string, _options?: Configuration): Promise<RequestContext>;
    getPartyAssociatedAttorneys(partyId: string, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    getPartyById(partyId: string, _options?: Configuration): Promise<RequestContext>;
    getPrimaryDocumentsForDocketEntries(caseId: string, docketNumber: number, inLibrary?: boolean, afterFirstFetchDate?: Date, libraryDate?: Date, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    getSecondaryDocumentsForDocketEntries(caseId: string, docketNumber: number, inLibrary?: boolean, afterFirstFetchDate?: Date, libraryDate?: Date, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class CaseDocketAPIApiResponseProcessor {
    getAttorneyAssociatedPartiesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations>>;
    getAttorneyByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCase200ResponseAttorneysAttorneyArrayInner>>;
    getCaseWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCase200Response>>;
    getCaseAttorneysWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCase200ResponseAttorneys>>;
    getCaseDocketEntriesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCase200ResponseDocketEntries>>;
    getCaseHearingsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCase200ResponseHearings>>;
    getCaseJudgesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCase200ResponseJudges>>;
    getCasePartiesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCase200ResponseParties>>;
    getCaseRelatedCasesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCase200ResponseRelatedCases>>;
    getJudgeByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCase200ResponseJudgesJudgeArrayInner>>;
    getPartyAssociatedAttorneysWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations>>;
    getPartyByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCase200ResponsePartiesPartyArrayInner>>;
    getPrimaryDocumentsForDocketEntriesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments>>;
    getSecondaryDocumentsForDocketEntriesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments>>;
}

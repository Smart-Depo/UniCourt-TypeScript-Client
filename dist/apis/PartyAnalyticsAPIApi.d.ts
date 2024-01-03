import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { AssociatedNormAttorneyResponse1 } from '../models/AssociatedNormAttorneyResponse1';
import { AssociatedNormJudgeResponse1 } from '../models/AssociatedNormJudgeResponse1';
import { AssociatedNormLawFirmResponse1 } from '../models/AssociatedNormLawFirmResponse1';
import { NormParty1 } from '../models/NormParty1';
import { SearchNormalizedParties200Response } from '../models/SearchNormalizedParties200Response';
export declare class PartyAnalyticsAPIApiRequestFactory extends BaseAPIRequestFactory {
    getNormAttorneysAssociatedWithNormParty(normPartyId: string, q?: string, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    getNormJudgesAssociatedWithNormParty(normPartyId: string, q?: string, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    getNormLawFirmsAssociatedWithNormParty(normPartyId: string, q?: string, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    getNormPartyById(normPartyId: string, _options?: Configuration): Promise<RequestContext>;
    searchNormalizedParties(q?: string, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    searchNormalizedPartiesById(normPartySearchId: string, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class PartyAnalyticsAPIApiResponseProcessor {
    getNormAttorneysAssociatedWithNormPartyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssociatedNormAttorneyResponse1>>;
    getNormJudgesAssociatedWithNormPartyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssociatedNormJudgeResponse1>>;
    getNormLawFirmsAssociatedWithNormPartyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssociatedNormLawFirmResponse1>>;
    getNormPartyByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<NormParty1>>;
    searchNormalizedPartiesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SearchNormalizedParties200Response>>;
    searchNormalizedPartiesByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SearchNormalizedParties200Response>>;
}

import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { AssociatedNormAttorneyResponse1 } from '../models/AssociatedNormAttorneyResponse1';
import { AssociatedNormJudgeResponse1 } from '../models/AssociatedNormJudgeResponse1';
import { AssociatedNormPartyResponse1 } from '../models/AssociatedNormPartyResponse1';
import { NormLawFirm1 } from '../models/NormLawFirm1';
import { SearchNormalizedLawFirms200Response } from '../models/SearchNormalizedLawFirms200Response';
export declare class LawFirmAnalyticsAPIApiRequestFactory extends BaseAPIRequestFactory {
    getNormAttorneysAssociatedWithNormLawFirm(normLawFirmId: string, q?: string, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    getNormJudgesAssociatedWithNormLawFirm(normLawFirmId: string, q?: string, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    getNormLawFirmById(normLawFirmId: string, _options?: Configuration): Promise<RequestContext>;
    getNormPartiesAssociatedWithNormLawFirm(normLawFirmId: string, q?: string, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    searchNormalizedLawFirms(q?: string, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    searchNormalizedLawFirmsById(normLawFirmSearchId: string, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class LawFirmAnalyticsAPIApiResponseProcessor {
    getNormAttorneysAssociatedWithNormLawFirmWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssociatedNormAttorneyResponse1>>;
    getNormJudgesAssociatedWithNormLawFirmWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssociatedNormJudgeResponse1>>;
    getNormLawFirmByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<NormLawFirm1>>;
    getNormPartiesAssociatedWithNormLawFirmWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssociatedNormPartyResponse1>>;
    searchNormalizedLawFirmsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SearchNormalizedLawFirms200Response>>;
    searchNormalizedLawFirmsByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SearchNormalizedLawFirms200Response>>;
}

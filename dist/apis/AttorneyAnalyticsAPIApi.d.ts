import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { AssociatedNormJudgeResponse1 } from '../models/AssociatedNormJudgeResponse1';
import { AssociatedNormLawFirmResponse1 } from '../models/AssociatedNormLawFirmResponse1';
import { AssociatedNormPartyResponse1 } from '../models/AssociatedNormPartyResponse1';
import { NormAttorney1 } from '../models/NormAttorney1';
import { SearchNormalizedAttorneys200Response } from '../models/SearchNormalizedAttorneys200Response';
export declare class AttorneyAnalyticsAPIApiRequestFactory extends BaseAPIRequestFactory {
    getNormAttorneyById(normAttorneyId: string, _options?: Configuration): Promise<RequestContext>;
    getNormJudgesAssociatedWithNormAttorney(normAttorneyId: string, q?: string, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    getNormLawFirmsAssociatedWithNormAttorney(normAttorneyId: string, q?: string, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    getNormPartiesAssociatedWithNormAttorney(normAttorneyId: string, q?: string, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    searchNormalizedAttorneys(q?: string, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    searchNormalizedAttorneysById(normAttorneySearchId: string, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class AttorneyAnalyticsAPIApiResponseProcessor {
    getNormAttorneyByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<NormAttorney1>>;
    getNormJudgesAssociatedWithNormAttorneyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssociatedNormJudgeResponse1>>;
    getNormLawFirmsAssociatedWithNormAttorneyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssociatedNormLawFirmResponse1>>;
    getNormPartiesAssociatedWithNormAttorneyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssociatedNormPartyResponse1>>;
    searchNormalizedAttorneysWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SearchNormalizedAttorneys200Response>>;
    searchNormalizedAttorneysByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SearchNormalizedAttorneys200Response>>;
}

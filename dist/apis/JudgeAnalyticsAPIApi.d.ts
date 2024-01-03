import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { AssociatedNormAttorneyResponse1 } from '../models/AssociatedNormAttorneyResponse1';
import { AssociatedNormLawFirmResponse1 } from '../models/AssociatedNormLawFirmResponse1';
import { AssociatedNormPartyResponse1 } from '../models/AssociatedNormPartyResponse1';
import { NormJudge1 } from '../models/NormJudge1';
import { SearchNormalizedJudges200Response } from '../models/SearchNormalizedJudges200Response';
export declare class JudgeAnalyticsAPIApiRequestFactory extends BaseAPIRequestFactory {
    getNormAttorneysAssociatedWithNormJudge(normJudgeId: string, q?: string, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    getNormJudgeById(normJudgeId: string, _options?: Configuration): Promise<RequestContext>;
    getNormLawFirmsAssociatedWithNormJudge(normJudgeId: string, q?: string, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    getNormPartiesAssociatedWithNormJudge(normJudgeId: string, q?: string, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    searchNormalizedJudges(q?: string, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    searchNormalizedJudgesById(normJudgeSearchId: string, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class JudgeAnalyticsAPIApiResponseProcessor {
    getNormAttorneysAssociatedWithNormJudgeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssociatedNormAttorneyResponse1>>;
    getNormJudgeByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<NormJudge1>>;
    getNormLawFirmsAssociatedWithNormJudgeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssociatedNormLawFirmResponse1>>;
    getNormPartiesAssociatedWithNormJudgeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssociatedNormPartyResponse1>>;
    searchNormalizedJudgesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SearchNormalizedJudges200Response>>;
    searchNormalizedJudgesByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SearchNormalizedJudges200Response>>;
}

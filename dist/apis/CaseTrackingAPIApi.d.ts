import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { CaseTrackPostRequest } from '../models/CaseTrackPostRequest';
import { GetCaseTracks200Response } from '../models/GetCaseTracks200Response';
import { Success1 } from '../models/Success1';
import { TrackCaseRequest } from '../models/TrackCaseRequest';
export declare class CaseTrackingAPIApiRequestFactory extends BaseAPIRequestFactory {
    getCaseTrackById(caseId: string, _options?: Configuration): Promise<RequestContext>;
    getCaseTracks(lastFetchDate?: Date, lastFetchDateWithUpdates?: Date, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    removeCaseTrackById(caseId: string, _options?: Configuration): Promise<RequestContext>;
    trackCase(trackCaseRequest?: TrackCaseRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class CaseTrackingAPIApiResponseProcessor {
    getCaseTrackByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CaseTrackPostRequest>>;
    getCaseTracksWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCaseTracks200Response>>;
    removeCaseTrackByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Success1>>;
    trackCaseWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Success1>>;
}

import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { GetCourtCoverage200Response } from '../models/GetCourtCoverage200Response';
export declare class CourtAvailabilityAPIApiRequestFactory extends BaseAPIRequestFactory {
    getCourtCoverage(courtId: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class CourtAvailabilityAPIApiResponseProcessor {
    getCourtCoverageWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCourtCoverage200Response>>;
}

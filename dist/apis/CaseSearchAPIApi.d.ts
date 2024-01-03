import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { SearchCases200Response } from '../models/SearchCases200Response';
export declare class CaseSearchAPIApiRequestFactory extends BaseAPIRequestFactory {
    searchCases(q: string, sort?: 'filedDate' | 'relevancy', order?: 'asc' | 'desc', pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    searchCasesById(caseSearchId: string, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class CaseSearchAPIApiResponseProcessor {
    searchCasesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SearchCases200Response>>;
    searchCasesByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SearchCases200Response>>;
}

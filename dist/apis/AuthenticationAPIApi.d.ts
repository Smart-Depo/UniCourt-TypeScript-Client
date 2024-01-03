import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { GenerateNewToken200Response } from '../models/GenerateNewToken200Response';
import { GenerateNewTokenRequest } from '../models/GenerateNewTokenRequest';
import { InvalidateTokenRequest } from '../models/InvalidateTokenRequest';
import { ListAllTokenIds200Response } from '../models/ListAllTokenIds200Response';
import { Success1 } from '../models/Success1';
export declare class AuthenticationAPIApiRequestFactory extends BaseAPIRequestFactory {
    generateNewToken(generateNewTokenRequest?: GenerateNewTokenRequest, _options?: Configuration): Promise<RequestContext>;
    invalidateAllTokens(generateNewTokenRequest?: GenerateNewTokenRequest, _options?: Configuration): Promise<RequestContext>;
    invalidateToken(invalidateTokenRequest?: InvalidateTokenRequest, _options?: Configuration): Promise<RequestContext>;
    listAllTokenIds(generateNewTokenRequest?: GenerateNewTokenRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class AuthenticationAPIApiResponseProcessor {
    generateNewTokenWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GenerateNewToken200Response>>;
    invalidateAllTokensWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Success1>>;
    invalidateTokenWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Success1>>;
    listAllTokenIdsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListAllTokenIds200Response>>;
}

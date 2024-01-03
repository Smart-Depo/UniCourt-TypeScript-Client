import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { GetCallbacks200Response } from '../models/GetCallbacks200Response';
export declare class CallbackAPIApiRequestFactory extends BaseAPIRequestFactory {
    getCallbacks(date?: Date, status?: 'IN_PROGRESS' | 'COMPLETE' | 'FAILURE', _options?: Configuration): Promise<RequestContext>;
}
export declare class CallbackAPIApiResponseProcessor {
    getCallbacksWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCallbacks200Response>>;
}

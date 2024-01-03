import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { GetCaseUpdates200Response } from '../models/GetCaseUpdates200Response';
import { UpdateCase200Response } from '../models/UpdateCase200Response';
import { UpdateCaseRequest } from '../models/UpdateCaseRequest';
export declare class CaseUpdateAPIApiRequestFactory extends BaseAPIRequestFactory {
    getCaseUpdateByCaseId(caseId: string, _options?: Configuration): Promise<RequestContext>;
    getCaseUpdates(caseId?: string, requestedDate?: Date, status?: 'IN_PROGRESS' | 'COMPLETE' | 'FAILURE', pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    updateCase(updateCaseRequest?: UpdateCaseRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class CaseUpdateAPIApiResponseProcessor {
    getCaseUpdateByCaseIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UpdateCase200Response>>;
    getCaseUpdatesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCaseUpdates200Response>>;
    updateCaseWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UpdateCase200Response>>;
}

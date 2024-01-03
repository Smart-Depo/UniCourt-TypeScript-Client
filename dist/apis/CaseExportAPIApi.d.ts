import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { ExportCase200Response } from '../models/ExportCase200Response';
import { GetCaseExportCallbacks200Response } from '../models/GetCaseExportCallbacks200Response';
export declare class CaseExportAPIApiRequestFactory extends BaseAPIRequestFactory {
    exportCase(caseId: string, _options?: Configuration): Promise<RequestContext>;
    getCaseExportCallbackById(caseExportCallbackId: string, _options?: Configuration): Promise<RequestContext>;
    getCaseExportCallbacks(date?: Date, status?: 'IN_PROGRESS' | 'COMPLETE' | 'FAILURE', pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class CaseExportAPIApiResponseProcessor {
    exportCaseWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ExportCase200Response>>;
    getCaseExportCallbackByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ExportCase200Response>>;
    getCaseExportCallbacksWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCaseExportCallbacks200Response>>;
}

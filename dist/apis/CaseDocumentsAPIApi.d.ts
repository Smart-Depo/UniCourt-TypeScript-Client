import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { GetCase200ResponseCaseDocuments } from '../models/GetCase200ResponseCaseDocuments';
import { GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner } from '../models/GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner';
import { GetCaseDocumentDownloadById200Response } from '../models/GetCaseDocumentDownloadById200Response';
import { GetCaseDocumentOrderCallbacks200Response } from '../models/GetCaseDocumentOrderCallbacks200Response';
import { OrderCaseDocument200Response } from '../models/OrderCaseDocument200Response';
import { OrderCaseDocumentRequest } from '../models/OrderCaseDocumentRequest';
export declare class CaseDocumentsAPIApiRequestFactory extends BaseAPIRequestFactory {
    getCaseDocumentDownloadById(caseDocumentId: string, isPreviewDocument?: boolean, _options?: Configuration): Promise<RequestContext>;
    getCaseDocumentOrderCallbackById(caseDocumentOrderCallbackId: string, _options?: Configuration): Promise<RequestContext>;
    getCaseDocumentOrderCallbacks(date?: Date, status?: 'IN_PROGRESS' | 'DELAYED' | 'COMPLETE' | 'FAILURE', pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    getCaseDocuments(caseId: string, inLibrary?: boolean, afterFirstFetchDate?: Date, libraryDate?: Date, firstFetchDate?: Date, sortBy?: 'latest to oldest' | 'oldest to latest', pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    getDocumentById(caseDocumentId: string, _options?: Configuration): Promise<RequestContext>;
    orderCaseDocument(orderCaseDocumentRequest?: OrderCaseDocumentRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class CaseDocumentsAPIApiResponseProcessor {
    getCaseDocumentDownloadByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCaseDocumentDownloadById200Response>>;
    getCaseDocumentOrderCallbackByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<OrderCaseDocument200Response>>;
    getCaseDocumentOrderCallbacksWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCaseDocumentOrderCallbacks200Response>>;
    getCaseDocumentsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCase200ResponseCaseDocuments>>;
    getDocumentByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner>>;
    orderCaseDocumentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<OrderCaseDocument200Response>>;
}

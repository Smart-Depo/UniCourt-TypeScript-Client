// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { Exception1 } from '../models/Exception1';
import { GetCase200ResponseCaseDocuments } from '../models/GetCase200ResponseCaseDocuments';
import { GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner } from '../models/GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner';
import { GetCaseDocumentDownloadById200Response } from '../models/GetCaseDocumentDownloadById200Response';
import { GetCaseDocumentOrderCallbacks200Response } from '../models/GetCaseDocumentOrderCallbacks200Response';
import { OrderCaseDocument200Response } from '../models/OrderCaseDocument200Response';
import { OrderCaseDocumentRequest } from '../models/OrderCaseDocumentRequest';

/**
 * no description
 */
export class CaseDocumentsAPIApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Gets downloadable URL for a requested Document ID.
     * Gets downloadable URL for a requested Document ID.
     * @param caseDocumentId Document ID which you want to download.
     * @param isPreviewDocument If the document you want to download is a preview of a document.
     */
    public async getCaseDocumentDownloadById(caseDocumentId: string, isPreviewDocument?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'caseDocumentId' is not null or undefined
        if (caseDocumentId === null || caseDocumentId === undefined) {
            throw new RequiredError("CaseDocumentsAPIApi", "getCaseDocumentDownloadById", "caseDocumentId");
        }



        // Path Params
        const localVarPath = '/caseDocumentDownload/{caseDocumentId}'
            .replace('{' + 'caseDocumentId' + '}', encodeURIComponent(String(caseDocumentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (isPreviewDocument !== undefined) {
            requestContext.setQueryParam("isPreviewDocument", ObjectSerializer.serialize(isPreviewDocument, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get Case Document Order Callback for a requested Case Document Order Callback Id.
     * Get Case Document Order Callback for a requested Case Document Order Callback Id.
     * @param caseDocumentOrderCallbackId Unique Id for the Case Document Order Callback.
     */
    public async getCaseDocumentOrderCallbackById(caseDocumentOrderCallbackId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'caseDocumentOrderCallbackId' is not null or undefined
        if (caseDocumentOrderCallbackId === null || caseDocumentOrderCallbackId === undefined) {
            throw new RequiredError("CaseDocumentsAPIApi", "getCaseDocumentOrderCallbackById", "caseDocumentOrderCallbackId");
        }


        // Path Params
        const localVarPath = '/caseDocumentOrder/callbacks/{caseDocumentOrderCallbackId}'
            .replace('{' + 'caseDocumentOrderCallbackId' + '}', encodeURIComponent(String(caseDocumentOrderCallbackId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get Case Document Order Callback list for a requested Date.
     * Get Case Document Order Callback list for a requested Date.
     * @param date Date for which fetch the Case Document Order Callback list. By default, the date will be set to current date.
     * @param status Status of Document Order callbacks. Default status will fetch all callbacks.
     * @param pageNumber Page to fetch the Case Document Order Callback list.&lt;br&gt;   - Minimum: 1 
     */
    public async getCaseDocumentOrderCallbacks(date?: Date, status?: 'IN_PROGRESS' | 'DELAYED' | 'COMPLETE' | 'FAILURE', pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/caseDocumentOrder/callbacks';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (date !== undefined) {
            requestContext.setQueryParam("date", ObjectSerializer.serialize(date, "Date", "date-time"));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "'IN_PROGRESS' | 'DELAYED' | 'COMPLETE' | 'FAILURE'", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets Documents for a requested Case ID.
     * Gets Documents for a requested Case ID.
     * @param caseId Case ID for which you want the data for.
     * @param inLibrary Filter all the documents those are added to the UniCourt library.
     * @param afterFirstFetchDate Get all the documents which were added to the case on or after a specific date.
     * @param libraryDate Sort all the documents based on the date when the document was added to the UniCourt Library.
     * @param firstFetchDate Sort all the documents based on the date it was fetched from the source site.
     * @param sortBy Sort documents with document order.
     * @param pageNumber The page for which the result should be retrieved.
     */
    public async getCaseDocuments(caseId: string, inLibrary?: boolean, afterFirstFetchDate?: Date, libraryDate?: Date, firstFetchDate?: Date, sortBy?: 'latest to oldest' | 'oldest to latest', pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new RequiredError("CaseDocumentsAPIApi", "getCaseDocuments", "caseId");
        }








        // Path Params
        const localVarPath = '/case/{caseId}/documents'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (inLibrary !== undefined) {
            requestContext.setQueryParam("inLibrary", ObjectSerializer.serialize(inLibrary, "boolean", ""));
        }

        // Query Params
        if (afterFirstFetchDate !== undefined) {
            requestContext.setQueryParam("afterFirstFetchDate", ObjectSerializer.serialize(afterFirstFetchDate, "Date", "date-time"));
        }

        // Query Params
        if (libraryDate !== undefined) {
            requestContext.setQueryParam("libraryDate", ObjectSerializer.serialize(libraryDate, "Date", "date-time"));
        }

        // Query Params
        if (firstFetchDate !== undefined) {
            requestContext.setQueryParam("firstFetchDate", ObjectSerializer.serialize(firstFetchDate, "Date", "date-time"));
        }

        // Query Params
        if (sortBy !== undefined) {
            requestContext.setQueryParam("sortBy", ObjectSerializer.serialize(sortBy, "'latest to oldest' | 'oldest to latest'", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets details for a requested Document ID.
     * Gets details for a requested Document ID.
     * @param caseDocumentId Specific Case Dcoument ID for which you want the data for.
     */
    public async getDocumentById(caseDocumentId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'caseDocumentId' is not null or undefined
        if (caseDocumentId === null || caseDocumentId === undefined) {
            throw new RequiredError("CaseDocumentsAPIApi", "getDocumentById", "caseDocumentId");
        }


        // Path Params
        const localVarPath = '/caseDocument/{caseDocumentId}'
            .replace('{' + 'caseDocumentId' + '}', encodeURIComponent(String(caseDocumentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Add Case Document Order for requested Document Ids. The status will be ``IN_PROGRESS`` after it has been requested. If the request is not processed within 4 hours, it will be reported as ``DELAYED``.  If the request is still incomplete after 4 hours, it will remain in the DELAYED status for up to 72 hours after the request was approved. Such requests will be recorded as ``TIMEOUT`` after 72 hours.
     * Add Case Document Order for requested Document Ids.
     * @param orderCaseDocumentRequest If the Case Document Order is for Preview, then the value for &#x60;&#x60;isPreviewOnly&#x60;&#x60; should be &#x60;&#x60;true&#x60;&#x60; else &#x60;&#x60;false&#x60;&#x60;. 
     */
    public async orderCaseDocument(orderCaseDocumentRequest?: OrderCaseDocumentRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/caseDocumentOrder';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(orderCaseDocumentRequest, "OrderCaseDocumentRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class CaseDocumentsAPIApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCaseDocumentDownloadById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCaseDocumentDownloadByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCaseDocumentDownloadById200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCaseDocumentDownloadById200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCaseDocumentDownloadById200Response", ""
            ) as GetCaseDocumentDownloadById200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Invalid Input Parameter", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("451", response.httpStatusCode)) {
            const body: GetCaseDocumentDownloadById200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCaseDocumentDownloadById200Response", ""
            ) as GetCaseDocumentDownloadById200Response;
            throw new ApiException<GetCaseDocumentDownloadById200Response>(response.httpStatusCode, "Sealed Case", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCaseDocumentDownloadById200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCaseDocumentDownloadById200Response", ""
            ) as GetCaseDocumentDownloadById200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCaseDocumentOrderCallbackById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCaseDocumentOrderCallbackByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<OrderCaseDocument200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OrderCaseDocument200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderCaseDocument200Response", ""
            ) as OrderCaseDocument200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("451", response.httpStatusCode)) {
            const body: OrderCaseDocument200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderCaseDocument200Response", ""
            ) as OrderCaseDocument200Response;
            throw new ApiException<OrderCaseDocument200Response>(response.httpStatusCode, "Sealed Case", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OrderCaseDocument200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderCaseDocument200Response", ""
            ) as OrderCaseDocument200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCaseDocumentOrderCallbacks
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCaseDocumentOrderCallbacksWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCaseDocumentOrderCallbacks200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCaseDocumentOrderCallbacks200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCaseDocumentOrderCallbacks200Response", ""
            ) as GetCaseDocumentOrderCallbacks200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Bad Request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCaseDocumentOrderCallbacks200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCaseDocumentOrderCallbacks200Response", ""
            ) as GetCaseDocumentOrderCallbacks200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCaseDocuments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCaseDocumentsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCase200ResponseCaseDocuments >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCase200ResponseCaseDocuments = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCase200ResponseCaseDocuments", ""
            ) as GetCase200ResponseCaseDocuments;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Invalid Input Parameter", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Resource Not Found", body, response.headers);
        }
        if (isCodeInRange("451", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Sealed Case", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCase200ResponseCaseDocuments = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCase200ResponseCaseDocuments", ""
            ) as GetCase200ResponseCaseDocuments;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDocumentById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDocumentByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner", ""
            ) as GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Resource Not Found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner", ""
            ) as GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderCaseDocument
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderCaseDocumentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<OrderCaseDocument200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OrderCaseDocument200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderCaseDocument200Response", ""
            ) as OrderCaseDocument200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("402", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Payment Required", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OrderCaseDocument200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderCaseDocument200Response", ""
            ) as OrderCaseDocument200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

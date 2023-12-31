// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { Exception1 } from '../models/Exception1';
import { ExportCase200Response } from '../models/ExportCase200Response';
import { GetCaseExportCallbacks200Response } from '../models/GetCaseExportCallbacks200Response';

/**
 * no description
 */
export class CaseExportAPIApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Retrieve information about the specified case export.
     * Gets case exported for a requested Case ID.
     * @param caseId The caseId value of the case for which case export information is to be retrieved.
     */
    public async exportCase(caseId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new RequiredError("CaseExportAPIApi", "exportCase", "caseId");
        }


        // Path Params
        const localVarPath = '/caseExport/{caseId}'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));

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
     * Retrieve the specified case export callback object.
     * Get Case Export Callback for a requested Case Export Callback Id.
     * @param caseExportCallbackId The caseExportCallbackId value of the case export callback object to be retrieved.
     */
    public async getCaseExportCallbackById(caseExportCallbackId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'caseExportCallbackId' is not null or undefined
        if (caseExportCallbackId === null || caseExportCallbackId === undefined) {
            throw new RequiredError("CaseExportAPIApi", "getCaseExportCallbackById", "caseExportCallbackId");
        }


        // Path Params
        const localVarPath = '/caseExport/callbacks/{caseExportCallbackId}'
            .replace('{' + 'caseExportCallbackId' + '}', encodeURIComponent(String(caseExportCallbackId)));

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
     * Retrieve callbacks according to the specified criteria.
     * Get Case Export Callback list for a requested Date.
     * @param date The date for which callbacks are to be retrieved.
     * @param status The status code of the callbacks to be retrieved.
     * @param pageNumber The page number of the callbacks to be retrieved.&lt;br&gt;   - Minimum: 1 
     */
    public async getCaseExportCallbacks(date?: Date, status?: 'IN_PROGRESS' | 'COMPLETE' | 'FAILURE', pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/caseExport/callbacks';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (date !== undefined) {
            requestContext.setQueryParam("date", ObjectSerializer.serialize(date, "Date", "date-time"));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "'IN_PROGRESS' | 'COMPLETE' | 'FAILURE'", ""));
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

}

export class CaseExportAPIApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to exportCase
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exportCaseWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ExportCase200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ExportCase200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExportCase200Response", ""
            ) as ExportCase200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Not Found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ExportCase200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExportCase200Response", ""
            ) as ExportCase200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCaseExportCallbackById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCaseExportCallbackByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ExportCase200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ExportCase200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExportCase200Response", ""
            ) as ExportCase200Response;
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
            const body: ExportCase200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExportCase200Response", ""
            ) as ExportCase200Response;
            throw new ApiException<ExportCase200Response>(response.httpStatusCode, "Sealed Case", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ExportCase200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExportCase200Response", ""
            ) as ExportCase200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCaseExportCallbacks
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCaseExportCallbacksWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCaseExportCallbacks200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCaseExportCallbacks200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCaseExportCallbacks200Response", ""
            ) as GetCaseExportCallbacks200Response;
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
            const body: GetCaseExportCallbacks200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCaseExportCallbacks200Response", ""
            ) as GetCaseExportCallbacks200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

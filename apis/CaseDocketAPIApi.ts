// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { Exception1 } from '../models/Exception1';
import { GetCase200Response } from '../models/GetCase200Response';
import { GetCase200ResponseAttorneys } from '../models/GetCase200ResponseAttorneys';
import { GetCase200ResponseAttorneysAttorneyArrayInner } from '../models/GetCase200ResponseAttorneysAttorneyArrayInner';
import { GetCase200ResponseDocketEntries } from '../models/GetCase200ResponseDocketEntries';
import { GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments } from '../models/GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments';
import { GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments } from '../models/GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments';
import { GetCase200ResponseHearings } from '../models/GetCase200ResponseHearings';
import { GetCase200ResponseJudges } from '../models/GetCase200ResponseJudges';
import { GetCase200ResponseJudgesJudgeArrayInner } from '../models/GetCase200ResponseJudgesJudgeArrayInner';
import { GetCase200ResponseParties } from '../models/GetCase200ResponseParties';
import { GetCase200ResponsePartiesPartyArrayInner } from '../models/GetCase200ResponsePartiesPartyArrayInner';
import { GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations } from '../models/GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations';
import { GetCase200ResponseRelatedCases } from '../models/GetCase200ResponseRelatedCases';

/**
 * no description
 */
export class CaseDocketAPIApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Retrieve the parties represented by the attorney with the specified attorneyId value.
     * Gets Associated Party details for a requested Attorney ID.
     * @param attorneyId Retrieve the parties represented by the attorney with the specified attorneyId value.
     * @param pageNumber Query parameter specifying the page number of the search results to be retrieved.
     */
    public async getAttorneyAssociatedParties(attorneyId: string, pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'attorneyId' is not null or undefined
        if (attorneyId === null || attorneyId === undefined) {
            throw new RequiredError("CaseDocketAPIApi", "getAttorneyAssociatedParties", "attorneyId");
        }



        // Path Params
        const localVarPath = '/attorney/{attorneyId}/associatedParties'
            .replace('{' + 'attorneyId' + '}', encodeURIComponent(String(attorneyId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

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
     * Retrieve the attorney with the specified attorneyId value.
     * Gets details for a requested Attorney ID.
     * @param attorneyId Retrieve the attorney with the specified attorneyId value.
     */
    public async getAttorneyById(attorneyId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'attorneyId' is not null or undefined
        if (attorneyId === null || attorneyId === undefined) {
            throw new RequiredError("CaseDocketAPIApi", "getAttorneyById", "attorneyId");
        }


        // Path Params
        const localVarPath = '/attorney/{attorneyId}'
            .replace('{' + 'attorneyId' + '}', encodeURIComponent(String(attorneyId)));

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
     * Retrieve the case with the specified caseId value.
     * Gets case information for a requested Case ID.
     * @param caseId Retrieve the case with the specified caseId value.
     */
    public async getCase(caseId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new RequiredError("CaseDocketAPIApi", "getCase", "caseId");
        }


        // Path Params
        const localVarPath = '/case/{caseId}'
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
     * Retrieve the attorneys in the case with the specified caseId value.
     * Gets Attorneys for a requested Case ID.
     * @param caseId Retrieve the case with the specified caseId value.
     * @param isVisible Retrieve attorneys in the case with the specified caseId value whose isVisible flag is set to the specified value.
     * @param pageNumber Query parameter specifying the page number of the search results to be retrieved.
     */
    public async getCaseAttorneys(caseId: string, isVisible?: boolean, pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new RequiredError("CaseDocketAPIApi", "getCaseAttorneys", "caseId");
        }




        // Path Params
        const localVarPath = '/case/{caseId}/attorneys'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (isVisible !== undefined) {
            requestContext.setQueryParam("isVisible", ObjectSerializer.serialize(isVisible, "boolean", ""));
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
     * Retrieve the docket entries in the case with the specified caseId value.
     * Gets Docket Entries for a requested Case ID.
     * @param caseId Retrieve the case with the specified caseId value.
     * @param docketNumber Retrieve the docket entry witih the specified docket number in the case with the specified caseId value.
     * @param sortBy Sort the retrieved docket entries in ascending order or descending order of date.
     * @param pageNumber Query parameter specifying the page number of the search results to be retrieved.
     */
    public async getCaseDocketEntries(caseId: string, docketNumber?: number, sortBy?: 'latest to oldest' | 'oldest to latest', pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new RequiredError("CaseDocketAPIApi", "getCaseDocketEntries", "caseId");
        }





        // Path Params
        const localVarPath = '/case/{caseId}/docketEntries'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (docketNumber !== undefined) {
            requestContext.setQueryParam("docketNumber", ObjectSerializer.serialize(docketNumber, "number", ""));
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
     * Gets Hearings for a requested Case ID.
     * Gets Hearings for a requested Case ID.
     * @param caseId Retrieve the case with the specified caseId value.
     * @param sortBy Specify the sort order of hearings in the case with the specified caseId.
     * @param pageNumber Query parameter specifying the page number of the search results to be retrieved.
     */
    public async getCaseHearings(caseId: string, sortBy?: 'latest to oldest' | 'oldest to latest', pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new RequiredError("CaseDocketAPIApi", "getCaseHearings", "caseId");
        }




        // Path Params
        const localVarPath = '/case/{caseId}/hearings'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

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
     * Retrieve the judges involved in the specified case.
     * Gets Judges for a requested Case ID.
     * @param caseId Retrieve the case with the specified caseId value.
     * @param isVisible Retrieve attorneys judges in the case with the specified caseId value whose isVisible flag is set to the specified value.
     * @param pageNumber Query parameter specifying the page number of the search results to be retrieved.
     */
    public async getCaseJudges(caseId: string, isVisible?: boolean, pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new RequiredError("CaseDocketAPIApi", "getCaseJudges", "caseId");
        }




        // Path Params
        const localVarPath = '/case/{caseId}/judges'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (isVisible !== undefined) {
            requestContext.setQueryParam("isVisible", ObjectSerializer.serialize(isVisible, "boolean", ""));
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
     * Retrieve the parties involved in the case with the specified caseId value.
     * Gets Parties for a requested Case ID.
     * @param caseId Retrieve the case with the specified caseId value.
     * @param isVisible Retrieve parties in the case with the specified caseId value whose isVisible flag is set to the specified value.
     * @param pageNumber Query parameter specifying the page number of the search results to be retrieved.
     * @param partyRoleId Retrieve all parties with the specified partyRoleId value in the case with the specified caseId value.
     * @param partyRoleGroupId Retrieve all parties with the specified partyRoleGroupId value in the case with the specified caseId value.
     * @param attorneyRepresentationTypeId Retrieve all parties with the specified attorneyRepresentationTypeId value in the case with the specified caseId value.
     * @param partyClassificationType Retrieve all parties with the specified partyClassificationType value in the case with the specified caseId value.
     */
    public async getCaseParties(caseId: string, isVisible?: boolean, pageNumber?: number, partyRoleId?: string, partyRoleGroupId?: string, attorneyRepresentationTypeId?: string, partyClassificationType?: 'INDIVIDUAL' | 'COMPANY' | 'OTHER', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new RequiredError("CaseDocketAPIApi", "getCaseParties", "caseId");
        }








        // Path Params
        const localVarPath = '/case/{caseId}/parties'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (isVisible !== undefined) {
            requestContext.setQueryParam("isVisible", ObjectSerializer.serialize(isVisible, "boolean", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (partyRoleId !== undefined) {
            requestContext.setQueryParam("partyRoleId", ObjectSerializer.serialize(partyRoleId, "string", ""));
        }

        // Query Params
        if (partyRoleGroupId !== undefined) {
            requestContext.setQueryParam("partyRoleGroupId", ObjectSerializer.serialize(partyRoleGroupId, "string", ""));
        }

        // Query Params
        if (attorneyRepresentationTypeId !== undefined) {
            requestContext.setQueryParam("attorneyRepresentationTypeId", ObjectSerializer.serialize(attorneyRepresentationTypeId, "string", ""));
        }

        // Query Params
        if (partyClassificationType !== undefined) {
            requestContext.setQueryParam("partyClassificationType", ObjectSerializer.serialize(partyClassificationType, "'INDIVIDUAL' | 'COMPANY' | 'OTHER'", ""));
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
     * Retrieve cases that UniCourt has identified as related to the case with the specified caseId value.
     * Gets Related Cases for a requested Case ID.
     * @param caseId Retrieve the case with the specified caseId value.
     * @param pageNumber Query parameter specifying the page number of the search results to be retrieved.
     */
    public async getCaseRelatedCases(caseId: string, pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new RequiredError("CaseDocketAPIApi", "getCaseRelatedCases", "caseId");
        }



        // Path Params
        const localVarPath = '/case/{caseId}/relatedCases'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

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
     * Retrieve the judge with the specified judgeId value.
     * Gets details for a requested Judge ID.
     * @param judgeId Retrieve the judge with the specified judgeId value.
     */
    public async getJudgeById(judgeId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'judgeId' is not null or undefined
        if (judgeId === null || judgeId === undefined) {
            throw new RequiredError("CaseDocketAPIApi", "getJudgeById", "judgeId");
        }


        // Path Params
        const localVarPath = '/judge/{judgeId}'
            .replace('{' + 'judgeId' + '}', encodeURIComponent(String(judgeId)));

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
     * Retrieve the attorneys in the case with the specified partyId value.
     * Gets Associated Attorney details for a requested Party ID.
     * @param partyId Retrieve the party with the specified partyId value.
     * @param pageNumber Query parameter specifying the page number of the search results to be retrieved.
     */
    public async getPartyAssociatedAttorneys(partyId: string, pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'partyId' is not null or undefined
        if (partyId === null || partyId === undefined) {
            throw new RequiredError("CaseDocketAPIApi", "getPartyAssociatedAttorneys", "partyId");
        }



        // Path Params
        const localVarPath = '/party/{partyId}/associatedAttorneys'
            .replace('{' + 'partyId' + '}', encodeURIComponent(String(partyId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

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
     * Retrieve the party with the specified partyId value.
     * Gets details for a requested Party ID.
     * @param partyId Retrieve the party with the specified partyId value.
     */
    public async getPartyById(partyId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'partyId' is not null or undefined
        if (partyId === null || partyId === undefined) {
            throw new RequiredError("CaseDocketAPIApi", "getPartyById", "partyId");
        }


        // Path Params
        const localVarPath = '/party/{partyId}'
            .replace('{' + 'partyId' + '}', encodeURIComponent(String(partyId)));

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
     * Retrieve the primary documents in the case with the specified caseId value.
     * Gets Primary Documents of Docket Entries.
     * @param caseId Retrieve the case with the specified caseId value.
     * @param docketNumber Retrieve the primary documents associated with the specified docket number in the case with the specified caseId value.
     * @param inLibrary Retrieve the primary documents in the with the specified inLibrary flag in the case with the specified caseId value.
     * @param afterFirstFetchDate Retrieve all primary documents in the case with the specified caseId value that were first fetched by UniCourt on the specified date or within the specified date.
     * @param libraryDate Retrieve all primary documents in the case with the specified caseId value that were added to the Crowdsourced Library on the specified date or within the specified date.
     * @param pageNumber Query parameter specifying the page number of the search results to be retrieved.
     */
    public async getPrimaryDocumentsForDocketEntries(caseId: string, docketNumber: number, inLibrary?: boolean, afterFirstFetchDate?: Date, libraryDate?: Date, pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new RequiredError("CaseDocketAPIApi", "getPrimaryDocumentsForDocketEntries", "caseId");
        }


        // verify required parameter 'docketNumber' is not null or undefined
        if (docketNumber === null || docketNumber === undefined) {
            throw new RequiredError("CaseDocketAPIApi", "getPrimaryDocumentsForDocketEntries", "docketNumber");
        }






        // Path Params
        const localVarPath = '/case/{caseId}/docketEntries/primaryDocuments'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (docketNumber !== undefined) {
            requestContext.setQueryParam("docketNumber", ObjectSerializer.serialize(docketNumber, "number", ""));
        }

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
     * Retrieve the secondary documents in the case with the specified caseId value.
     * Gets Secondary Documents of Docket Entries.
     * @param caseId Retrieve the case with the specified caseId value.
     * @param docketNumber Retrieve the secondary documents associated with the specified docket number in the case with the specified caseId value.
     * @param inLibrary Retrieve the secondary documents in the with the specified inLibrary flag in the case with the specified caseId value.
     * @param afterFirstFetchDate Retrieve all secondary documents in the case with the specified caseId value that were first fetched by UniCourt on the specified date or within the specified date.
     * @param libraryDate Retrieve all secondary documents in the case with the specified caseId value that were added to the Crowdsourced Library on the specified date or within the specified date.
     * @param pageNumber Query parameter specifying the page number of the search results to be retrieved.
     */
    public async getSecondaryDocumentsForDocketEntries(caseId: string, docketNumber: number, inLibrary?: boolean, afterFirstFetchDate?: Date, libraryDate?: Date, pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new RequiredError("CaseDocketAPIApi", "getSecondaryDocumentsForDocketEntries", "caseId");
        }


        // verify required parameter 'docketNumber' is not null or undefined
        if (docketNumber === null || docketNumber === undefined) {
            throw new RequiredError("CaseDocketAPIApi", "getSecondaryDocumentsForDocketEntries", "docketNumber");
        }






        // Path Params
        const localVarPath = '/case/{caseId}/docketEntries/secondaryDocuments'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (docketNumber !== undefined) {
            requestContext.setQueryParam("docketNumber", ObjectSerializer.serialize(docketNumber, "number", ""));
        }

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

export class CaseDocketAPIApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAttorneyAssociatedParties
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAttorneyAssociatedPartiesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations", ""
            ) as GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations;
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
            const body: GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations", ""
            ) as GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAttorneyById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAttorneyByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCase200ResponseAttorneysAttorneyArrayInner >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCase200ResponseAttorneysAttorneyArrayInner = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCase200ResponseAttorneysAttorneyArrayInner", ""
            ) as GetCase200ResponseAttorneysAttorneyArrayInner;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
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
            const body: GetCase200ResponseAttorneysAttorneyArrayInner = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCase200ResponseAttorneysAttorneyArrayInner", ""
            ) as GetCase200ResponseAttorneysAttorneyArrayInner;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCase
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCaseWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCase200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCase200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCase200Response", ""
            ) as GetCase200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
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
            const body: GetCase200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCase200Response", ""
            ) as GetCase200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCaseAttorneys
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCaseAttorneysWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCase200ResponseAttorneys >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCase200ResponseAttorneys = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCase200ResponseAttorneys", ""
            ) as GetCase200ResponseAttorneys;
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
            const body: GetCase200ResponseAttorneys = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCase200ResponseAttorneys", ""
            ) as GetCase200ResponseAttorneys;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCaseDocketEntries
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCaseDocketEntriesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCase200ResponseDocketEntries >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCase200ResponseDocketEntries = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCase200ResponseDocketEntries", ""
            ) as GetCase200ResponseDocketEntries;
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
            const body: GetCase200ResponseDocketEntries = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCase200ResponseDocketEntries", ""
            ) as GetCase200ResponseDocketEntries;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCaseHearings
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCaseHearingsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCase200ResponseHearings >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCase200ResponseHearings = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCase200ResponseHearings", ""
            ) as GetCase200ResponseHearings;
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
            const body: GetCase200ResponseHearings = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCase200ResponseHearings", ""
            ) as GetCase200ResponseHearings;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCaseJudges
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCaseJudgesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCase200ResponseJudges >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCase200ResponseJudges = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCase200ResponseJudges", ""
            ) as GetCase200ResponseJudges;
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
            const body: GetCase200ResponseJudges = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCase200ResponseJudges", ""
            ) as GetCase200ResponseJudges;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCaseParties
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCasePartiesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCase200ResponseParties >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCase200ResponseParties = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCase200ResponseParties", ""
            ) as GetCase200ResponseParties;
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
            const body: GetCase200ResponseParties = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCase200ResponseParties", ""
            ) as GetCase200ResponseParties;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCaseRelatedCases
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCaseRelatedCasesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCase200ResponseRelatedCases >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCase200ResponseRelatedCases = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCase200ResponseRelatedCases", ""
            ) as GetCase200ResponseRelatedCases;
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
            const body: GetCase200ResponseRelatedCases = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCase200ResponseRelatedCases", ""
            ) as GetCase200ResponseRelatedCases;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getJudgeById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getJudgeByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCase200ResponseJudgesJudgeArrayInner >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCase200ResponseJudgesJudgeArrayInner = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCase200ResponseJudgesJudgeArrayInner", ""
            ) as GetCase200ResponseJudgesJudgeArrayInner;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
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
            const body: GetCase200ResponseJudgesJudgeArrayInner = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCase200ResponseJudgesJudgeArrayInner", ""
            ) as GetCase200ResponseJudgesJudgeArrayInner;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPartyAssociatedAttorneys
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPartyAssociatedAttorneysWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations", ""
            ) as GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations;
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
            const body: GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations", ""
            ) as GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPartyById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPartyByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCase200ResponsePartiesPartyArrayInner >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCase200ResponsePartiesPartyArrayInner = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCase200ResponsePartiesPartyArrayInner", ""
            ) as GetCase200ResponsePartiesPartyArrayInner;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
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
            const body: GetCase200ResponsePartiesPartyArrayInner = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCase200ResponsePartiesPartyArrayInner", ""
            ) as GetCase200ResponsePartiesPartyArrayInner;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPrimaryDocumentsForDocketEntries
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPrimaryDocumentsForDocketEntriesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments", ""
            ) as GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments;
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
            const body: GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments", ""
            ) as GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSecondaryDocumentsForDocketEntries
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSecondaryDocumentsForDocketEntriesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments", ""
            ) as GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments;
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
            const body: GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments", ""
            ) as GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

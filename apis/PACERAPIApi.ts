// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AllCourtsPacerCaseLocatorCaseSearch200Response } from '../models/AllCourtsPacerCaseLocatorCaseSearch200Response';
import { AllCourtsPacerCaseLocatorPartySearch200Response } from '../models/AllCourtsPacerCaseLocatorPartySearch200Response';
import { Exception1 } from '../models/Exception1';
import { ImportPacerCaseByCourtUsingCaseNumber200Response } from '../models/ImportPacerCaseByCourtUsingCaseNumber200Response';

/**
 * no description
 */
export class PACERAPIApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Search all courts within the PACER system for a particular case.
     * PACER Case Locator Search API for All Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case. Ex 12345
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public async allCourtsPacerCaseLocatorCaseSearch(pacerUserId: string, pacerClientCode: string, caseNumber?: string, pacerCaseId?: number, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, courtRegionIdArray?: Array<string>, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pacerUserId' is not null or undefined
        if (pacerUserId === null || pacerUserId === undefined) {
            throw new RequiredError("PACERAPIApi", "allCourtsPacerCaseLocatorCaseSearch", "pacerUserId");
        }


        // verify required parameter 'pacerClientCode' is not null or undefined
        if (pacerClientCode === null || pacerClientCode === undefined) {
            throw new RequiredError("PACERAPIApi", "allCourtsPacerCaseLocatorCaseSearch", "pacerClientCode");
        }

















        // Path Params
        const localVarPath = '/pacerCaseLocator/caseSearch/allCourts';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pacerUserId !== undefined) {
            requestContext.setQueryParam("pacerUserId", ObjectSerializer.serialize(pacerUserId, "string", ""));
        }

        // Query Params
        if (pacerClientCode !== undefined) {
            requestContext.setQueryParam("pacerClientCode", ObjectSerializer.serialize(pacerClientCode, "string", ""));
        }

        // Query Params
        if (caseNumber !== undefined) {
            requestContext.setQueryParam("caseNumber", ObjectSerializer.serialize(caseNumber, "string", ""));
        }

        // Query Params
        if (pacerCaseId !== undefined) {
            requestContext.setQueryParam("pacerCaseId", ObjectSerializer.serialize(pacerCaseId, "number", ""));
        }

        // Query Params
        if (caseTitle !== undefined) {
            requestContext.setQueryParam("caseTitle", ObjectSerializer.serialize(caseTitle, "string", ""));
        }

        // Query Params
        if (caseOffice !== undefined) {
            requestContext.setQueryParam("caseOffice", ObjectSerializer.serialize(caseOffice, "number", ""));
        }

        // Query Params
        if (caseSequenceNumber !== undefined) {
            requestContext.setQueryParam("caseSequenceNumber", ObjectSerializer.serialize(caseSequenceNumber, "number", ""));
        }

        // Query Params
        if (caseYear !== undefined) {
            requestContext.setQueryParam("caseYear", ObjectSerializer.serialize(caseYear, "number", ""));
        }

        // Query Params
        if (caseTypeArray !== undefined) {
            requestContext.setQueryParam("caseTypeArray", ObjectSerializer.serialize(caseTypeArray, "Array<string>", ""));
        }

        // Query Params
        if (courtRegionIdArray !== undefined) {
            requestContext.setQueryParam("courtRegionIdArray", ObjectSerializer.serialize(courtRegionIdArray, "Array<string>", ""));
        }

        // Query Params
        if (caseFiledStartDate !== undefined) {
            requestContext.setQueryParam("caseFiledStartDate", ObjectSerializer.serialize(caseFiledStartDate, "Date", "date-time"));
        }

        // Query Params
        if (caseFiledEndDate !== undefined) {
            requestContext.setQueryParam("caseFiledEndDate", ObjectSerializer.serialize(caseFiledEndDate, "Date", "date-time"));
        }

        // Query Params
        if (caseTerminatedStartDate !== undefined) {
            requestContext.setQueryParam("caseTerminatedStartDate", ObjectSerializer.serialize(caseTerminatedStartDate, "Date", "date-time"));
        }

        // Query Params
        if (caseTerminatedEndDate !== undefined) {
            requestContext.setQueryParam("caseTerminatedEndDate", ObjectSerializer.serialize(caseTerminatedEndDate, "Date", "date-time"));
        }

        // Query Params
        if (sortParameterQuery !== undefined) {
            requestContext.setQueryParam("sortParameterQuery", ObjectSerializer.serialize(sortParameterQuery, "string", ""));
        }

        // Query Params
        if (caseStatus !== undefined) {
            requestContext.setQueryParam("caseStatus", ObjectSerializer.serialize(caseStatus, "'open' | 'closed'", ""));
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
     * Search for the specified party across all PACER case filings.
     * PACER Case Locator Search API for All Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param lastName The last name (for an individual) or the entity name (for a business entity) of the target party.
     * @param firstName The first name of the target party.
     * @param middleName The middle name of the target party.
     * @param generation The suffix (e.g., Jr., III) of the target party\&#39;s name.
     * @param partyType The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param partyExactNameMatch Specify whether the search string must match the name of the target party exactly.
     * @param partyRoleArray The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case.
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseYearFrom Limit the results of the search to those cases from the year specified or later
     * @param caseYearTo Limit the results of the search to those cases from the year specified or earlier
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtCase.caseOffice,ASC&amp;caseid,DESC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public async allCourtsPacerCaseLocatorPartySearch(pacerUserId: string, pacerClientCode: string, caseNumber?: string, pacerCaseId?: number, lastName?: string, firstName?: string, middleName?: string, generation?: string, partyType?: string, partyExactNameMatch?: boolean, partyRoleArray?: Array<string>, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, courtRegionIdArray?: Array<string>, caseYearFrom?: number, caseYearTo?: number, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pacerUserId' is not null or undefined
        if (pacerUserId === null || pacerUserId === undefined) {
            throw new RequiredError("PACERAPIApi", "allCourtsPacerCaseLocatorPartySearch", "pacerUserId");
        }


        // verify required parameter 'pacerClientCode' is not null or undefined
        if (pacerClientCode === null || pacerClientCode === undefined) {
            throw new RequiredError("PACERAPIApi", "allCourtsPacerCaseLocatorPartySearch", "pacerClientCode");
        }


























        // Path Params
        const localVarPath = '/pacerCaseLocator/partySearch/allCourts';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pacerUserId !== undefined) {
            requestContext.setQueryParam("pacerUserId", ObjectSerializer.serialize(pacerUserId, "string", ""));
        }

        // Query Params
        if (pacerClientCode !== undefined) {
            requestContext.setQueryParam("pacerClientCode", ObjectSerializer.serialize(pacerClientCode, "string", ""));
        }

        // Query Params
        if (caseNumber !== undefined) {
            requestContext.setQueryParam("caseNumber", ObjectSerializer.serialize(caseNumber, "string", ""));
        }

        // Query Params
        if (pacerCaseId !== undefined) {
            requestContext.setQueryParam("pacerCaseId", ObjectSerializer.serialize(pacerCaseId, "number", ""));
        }

        // Query Params
        if (lastName !== undefined) {
            requestContext.setQueryParam("lastName", ObjectSerializer.serialize(lastName, "string", ""));
        }

        // Query Params
        if (firstName !== undefined) {
            requestContext.setQueryParam("firstName", ObjectSerializer.serialize(firstName, "string", ""));
        }

        // Query Params
        if (middleName !== undefined) {
            requestContext.setQueryParam("middleName", ObjectSerializer.serialize(middleName, "string", ""));
        }

        // Query Params
        if (generation !== undefined) {
            requestContext.setQueryParam("generation", ObjectSerializer.serialize(generation, "string", ""));
        }

        // Query Params
        if (partyType !== undefined) {
            requestContext.setQueryParam("partyType", ObjectSerializer.serialize(partyType, "string", ""));
        }

        // Query Params
        if (partyExactNameMatch !== undefined) {
            requestContext.setQueryParam("partyExactNameMatch", ObjectSerializer.serialize(partyExactNameMatch, "boolean", ""));
        }

        // Query Params
        if (partyRoleArray !== undefined) {
            requestContext.setQueryParam("partyRoleArray", ObjectSerializer.serialize(partyRoleArray, "Array<string>", ""));
        }

        // Query Params
        if (caseTitle !== undefined) {
            requestContext.setQueryParam("caseTitle", ObjectSerializer.serialize(caseTitle, "string", ""));
        }

        // Query Params
        if (caseOffice !== undefined) {
            requestContext.setQueryParam("caseOffice", ObjectSerializer.serialize(caseOffice, "number", ""));
        }

        // Query Params
        if (caseSequenceNumber !== undefined) {
            requestContext.setQueryParam("caseSequenceNumber", ObjectSerializer.serialize(caseSequenceNumber, "number", ""));
        }

        // Query Params
        if (caseYear !== undefined) {
            requestContext.setQueryParam("caseYear", ObjectSerializer.serialize(caseYear, "number", ""));
        }

        // Query Params
        if (caseTypeArray !== undefined) {
            requestContext.setQueryParam("caseTypeArray", ObjectSerializer.serialize(caseTypeArray, "Array<string>", ""));
        }

        // Query Params
        if (courtRegionIdArray !== undefined) {
            requestContext.setQueryParam("courtRegionIdArray", ObjectSerializer.serialize(courtRegionIdArray, "Array<string>", ""));
        }

        // Query Params
        if (caseYearFrom !== undefined) {
            requestContext.setQueryParam("caseYearFrom", ObjectSerializer.serialize(caseYearFrom, "number", ""));
        }

        // Query Params
        if (caseYearTo !== undefined) {
            requestContext.setQueryParam("caseYearTo", ObjectSerializer.serialize(caseYearTo, "number", ""));
        }

        // Query Params
        if (caseFiledStartDate !== undefined) {
            requestContext.setQueryParam("caseFiledStartDate", ObjectSerializer.serialize(caseFiledStartDate, "Date", "date-time"));
        }

        // Query Params
        if (caseFiledEndDate !== undefined) {
            requestContext.setQueryParam("caseFiledEndDate", ObjectSerializer.serialize(caseFiledEndDate, "Date", "date-time"));
        }

        // Query Params
        if (caseTerminatedStartDate !== undefined) {
            requestContext.setQueryParam("caseTerminatedStartDate", ObjectSerializer.serialize(caseTerminatedStartDate, "Date", "date-time"));
        }

        // Query Params
        if (caseTerminatedEndDate !== undefined) {
            requestContext.setQueryParam("caseTerminatedEndDate", ObjectSerializer.serialize(caseTerminatedEndDate, "Date", "date-time"));
        }

        // Query Params
        if (sortParameterQuery !== undefined) {
            requestContext.setQueryParam("sortParameterQuery", ObjectSerializer.serialize(sortParameterQuery, "string", ""));
        }

        // Query Params
        if (caseStatus !== undefined) {
            requestContext.setQueryParam("caseStatus", ObjectSerializer.serialize(caseStatus, "'open' | 'closed'", ""));
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
     * Search for PACER cases filed in U.S. Courts of Appeals.
     * PACER Case Locator Search API for All Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits).
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case. Ex 12345
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param natureOfSuitsArray The PACER-assigned nature of suit classification of the target case. Please see Appendix E for valid nature-of-suit classifications for cases in U.S. Courts of Appeals.    Scenario: When mulitple nature of suits needs to be requested.    Imagine for a given case number 12-1234 I would like to search with the nature of suit 1110 (Insurance) and 1150 (Overpayments &amp; Enforc. of Judgments), My query in the request will look like the example mentioned below.    Example: natureOfSuitsArray&#x3D;1110&amp;natureOfSuitsArray&#x3D;1150
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public async appealCourtsPacerCaseLocatorCaseSearch(pacerUserId: string, pacerClientCode: string, caseNumber?: string, pacerCaseId?: number, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, natureOfSuitsArray?: Array<string>, courtRegionIdArray?: Array<string>, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pacerUserId' is not null or undefined
        if (pacerUserId === null || pacerUserId === undefined) {
            throw new RequiredError("PACERAPIApi", "appealCourtsPacerCaseLocatorCaseSearch", "pacerUserId");
        }


        // verify required parameter 'pacerClientCode' is not null or undefined
        if (pacerClientCode === null || pacerClientCode === undefined) {
            throw new RequiredError("PACERAPIApi", "appealCourtsPacerCaseLocatorCaseSearch", "pacerClientCode");
        }


















        // Path Params
        const localVarPath = '/pacerCaseLocator/caseSearch/appealCourts';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pacerUserId !== undefined) {
            requestContext.setQueryParam("pacerUserId", ObjectSerializer.serialize(pacerUserId, "string", ""));
        }

        // Query Params
        if (pacerClientCode !== undefined) {
            requestContext.setQueryParam("pacerClientCode", ObjectSerializer.serialize(pacerClientCode, "string", ""));
        }

        // Query Params
        if (caseNumber !== undefined) {
            requestContext.setQueryParam("caseNumber", ObjectSerializer.serialize(caseNumber, "string", ""));
        }

        // Query Params
        if (pacerCaseId !== undefined) {
            requestContext.setQueryParam("pacerCaseId", ObjectSerializer.serialize(pacerCaseId, "number", ""));
        }

        // Query Params
        if (caseTitle !== undefined) {
            requestContext.setQueryParam("caseTitle", ObjectSerializer.serialize(caseTitle, "string", ""));
        }

        // Query Params
        if (caseOffice !== undefined) {
            requestContext.setQueryParam("caseOffice", ObjectSerializer.serialize(caseOffice, "number", ""));
        }

        // Query Params
        if (caseSequenceNumber !== undefined) {
            requestContext.setQueryParam("caseSequenceNumber", ObjectSerializer.serialize(caseSequenceNumber, "number", ""));
        }

        // Query Params
        if (caseYear !== undefined) {
            requestContext.setQueryParam("caseYear", ObjectSerializer.serialize(caseYear, "number", ""));
        }

        // Query Params
        if (caseTypeArray !== undefined) {
            requestContext.setQueryParam("caseTypeArray", ObjectSerializer.serialize(caseTypeArray, "Array<string>", ""));
        }

        // Query Params
        if (natureOfSuitsArray !== undefined) {
            requestContext.setQueryParam("natureOfSuitsArray", ObjectSerializer.serialize(natureOfSuitsArray, "Array<string>", ""));
        }

        // Query Params
        if (courtRegionIdArray !== undefined) {
            requestContext.setQueryParam("courtRegionIdArray", ObjectSerializer.serialize(courtRegionIdArray, "Array<string>", ""));
        }

        // Query Params
        if (caseFiledStartDate !== undefined) {
            requestContext.setQueryParam("caseFiledStartDate", ObjectSerializer.serialize(caseFiledStartDate, "Date", "date-time"));
        }

        // Query Params
        if (caseFiledEndDate !== undefined) {
            requestContext.setQueryParam("caseFiledEndDate", ObjectSerializer.serialize(caseFiledEndDate, "Date", "date-time"));
        }

        // Query Params
        if (caseTerminatedStartDate !== undefined) {
            requestContext.setQueryParam("caseTerminatedStartDate", ObjectSerializer.serialize(caseTerminatedStartDate, "Date", "date-time"));
        }

        // Query Params
        if (caseTerminatedEndDate !== undefined) {
            requestContext.setQueryParam("caseTerminatedEndDate", ObjectSerializer.serialize(caseTerminatedEndDate, "Date", "date-time"));
        }

        // Query Params
        if (sortParameterQuery !== undefined) {
            requestContext.setQueryParam("sortParameterQuery", ObjectSerializer.serialize(sortParameterQuery, "string", ""));
        }

        // Query Params
        if (caseStatus !== undefined) {
            requestContext.setQueryParam("caseStatus", ObjectSerializer.serialize(caseStatus, "'open' | 'closed'", ""));
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
     * Search for the specified party across all PACER appeals cases.
     * PACER Case Locator Search API for All Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param lastName The last name (for an individual) or the entity name (for a business entity) of the target party.
     * @param firstName The first name of the target party.
     * @param middleName The middle name of the target party.
     * @param generation The suffix (e.g., Jr., III) of the target party\&#39;s name.
     * @param partyType The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param partyExactNameMatch Specify whether the search string must match the name of the target party exactly.
     * @param partyRoleArray The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case. Ex 12345
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseYearFrom Limit the results of the search to those cases from the year specified or later
     * @param caseYearTo Limit the results of the search to those cases from the year specified or earlier
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtCase.caseOffice,ASC&amp;caseid,DESC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public async appealCourtsPacerCaseLocatorPartySearch(pacerUserId: string, pacerClientCode: string, caseNumber?: string, pacerCaseId?: number, lastName?: string, firstName?: string, middleName?: string, generation?: string, partyType?: string, partyExactNameMatch?: boolean, partyRoleArray?: Array<string>, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, courtRegionIdArray?: Array<string>, caseYearFrom?: number, caseYearTo?: number, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pacerUserId' is not null or undefined
        if (pacerUserId === null || pacerUserId === undefined) {
            throw new RequiredError("PACERAPIApi", "appealCourtsPacerCaseLocatorPartySearch", "pacerUserId");
        }


        // verify required parameter 'pacerClientCode' is not null or undefined
        if (pacerClientCode === null || pacerClientCode === undefined) {
            throw new RequiredError("PACERAPIApi", "appealCourtsPacerCaseLocatorPartySearch", "pacerClientCode");
        }


























        // Path Params
        const localVarPath = '/pacerCaseLocator/partySearch/appealCourts';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pacerUserId !== undefined) {
            requestContext.setQueryParam("pacerUserId", ObjectSerializer.serialize(pacerUserId, "string", ""));
        }

        // Query Params
        if (pacerClientCode !== undefined) {
            requestContext.setQueryParam("pacerClientCode", ObjectSerializer.serialize(pacerClientCode, "string", ""));
        }

        // Query Params
        if (caseNumber !== undefined) {
            requestContext.setQueryParam("caseNumber", ObjectSerializer.serialize(caseNumber, "string", ""));
        }

        // Query Params
        if (pacerCaseId !== undefined) {
            requestContext.setQueryParam("pacerCaseId", ObjectSerializer.serialize(pacerCaseId, "number", ""));
        }

        // Query Params
        if (lastName !== undefined) {
            requestContext.setQueryParam("lastName", ObjectSerializer.serialize(lastName, "string", ""));
        }

        // Query Params
        if (firstName !== undefined) {
            requestContext.setQueryParam("firstName", ObjectSerializer.serialize(firstName, "string", ""));
        }

        // Query Params
        if (middleName !== undefined) {
            requestContext.setQueryParam("middleName", ObjectSerializer.serialize(middleName, "string", ""));
        }

        // Query Params
        if (generation !== undefined) {
            requestContext.setQueryParam("generation", ObjectSerializer.serialize(generation, "string", ""));
        }

        // Query Params
        if (partyType !== undefined) {
            requestContext.setQueryParam("partyType", ObjectSerializer.serialize(partyType, "string", ""));
        }

        // Query Params
        if (partyExactNameMatch !== undefined) {
            requestContext.setQueryParam("partyExactNameMatch", ObjectSerializer.serialize(partyExactNameMatch, "boolean", ""));
        }

        // Query Params
        if (partyRoleArray !== undefined) {
            requestContext.setQueryParam("partyRoleArray", ObjectSerializer.serialize(partyRoleArray, "Array<string>", ""));
        }

        // Query Params
        if (caseTitle !== undefined) {
            requestContext.setQueryParam("caseTitle", ObjectSerializer.serialize(caseTitle, "string", ""));
        }

        // Query Params
        if (caseOffice !== undefined) {
            requestContext.setQueryParam("caseOffice", ObjectSerializer.serialize(caseOffice, "number", ""));
        }

        // Query Params
        if (caseSequenceNumber !== undefined) {
            requestContext.setQueryParam("caseSequenceNumber", ObjectSerializer.serialize(caseSequenceNumber, "number", ""));
        }

        // Query Params
        if (caseYear !== undefined) {
            requestContext.setQueryParam("caseYear", ObjectSerializer.serialize(caseYear, "number", ""));
        }

        // Query Params
        if (caseTypeArray !== undefined) {
            requestContext.setQueryParam("caseTypeArray", ObjectSerializer.serialize(caseTypeArray, "Array<string>", ""));
        }

        // Query Params
        if (courtRegionIdArray !== undefined) {
            requestContext.setQueryParam("courtRegionIdArray", ObjectSerializer.serialize(courtRegionIdArray, "Array<string>", ""));
        }

        // Query Params
        if (caseYearFrom !== undefined) {
            requestContext.setQueryParam("caseYearFrom", ObjectSerializer.serialize(caseYearFrom, "number", ""));
        }

        // Query Params
        if (caseYearTo !== undefined) {
            requestContext.setQueryParam("caseYearTo", ObjectSerializer.serialize(caseYearTo, "number", ""));
        }

        // Query Params
        if (caseFiledStartDate !== undefined) {
            requestContext.setQueryParam("caseFiledStartDate", ObjectSerializer.serialize(caseFiledStartDate, "Date", "date-time"));
        }

        // Query Params
        if (caseFiledEndDate !== undefined) {
            requestContext.setQueryParam("caseFiledEndDate", ObjectSerializer.serialize(caseFiledEndDate, "Date", "date-time"));
        }

        // Query Params
        if (caseTerminatedStartDate !== undefined) {
            requestContext.setQueryParam("caseTerminatedStartDate", ObjectSerializer.serialize(caseTerminatedStartDate, "Date", "date-time"));
        }

        // Query Params
        if (caseTerminatedEndDate !== undefined) {
            requestContext.setQueryParam("caseTerminatedEndDate", ObjectSerializer.serialize(caseTerminatedEndDate, "Date", "date-time"));
        }

        // Query Params
        if (sortParameterQuery !== undefined) {
            requestContext.setQueryParam("sortParameterQuery", ObjectSerializer.serialize(sortParameterQuery, "string", ""));
        }

        // Query Params
        if (caseStatus !== undefined) {
            requestContext.setQueryParam("caseStatus", ObjectSerializer.serialize(caseStatus, "'open' | 'closed'", ""));
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
     * Search for PACER cases filed in U.S. Bankruptcy Courts.
     * PACER Case Locator Search API for Bankruptcy Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case. Ex 12345
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param federalBankruptcyChapterArray The chapter of the U.S. Bankruptcy Code under which the target case was filed. Please see Appendix D for a list of valid chapter numbers.    Scenario: When mulitple Federal Bankruptcy Chapters needs to be requested.    Imagine for a given case number 12-1234 I would like to search with the Federal Bankruptcy Chapters 7 (Chapter 7) and 11 (Chapter 11), My query in the request will look like the example mentioned below.    Example: federalBankruptcyChapterArray&#x3D;7&amp;federalBankruptcyChapterArray&#x3D;11
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseDischargedStartDate The date on which or after which the target case was marked as discharged within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type.
     * @param caseDischargedEndDate The date on which or before which the target case was marked as discharged within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type.
     * @param caseDismissedStartDate The date on which or after which the target case was marked as dismissed within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type.
     * @param caseDismissedEndDate The date on which or before which the target case was marked as dismissed within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public async bankruptcyCourtsPacerCaseLocatorCaseSearch(pacerUserId: string, pacerClientCode: string, caseNumber?: string, pacerCaseId?: number, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, federalBankruptcyChapterArray?: Array<string>, courtRegionIdArray?: Array<string>, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, caseDischargedStartDate?: Date, caseDischargedEndDate?: Date, caseDismissedStartDate?: Date, caseDismissedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pacerUserId' is not null or undefined
        if (pacerUserId === null || pacerUserId === undefined) {
            throw new RequiredError("PACERAPIApi", "bankruptcyCourtsPacerCaseLocatorCaseSearch", "pacerUserId");
        }


        // verify required parameter 'pacerClientCode' is not null or undefined
        if (pacerClientCode === null || pacerClientCode === undefined) {
            throw new RequiredError("PACERAPIApi", "bankruptcyCourtsPacerCaseLocatorCaseSearch", "pacerClientCode");
        }






















        // Path Params
        const localVarPath = '/pacerCaseLocator/caseSearch/bankruptcyCourts';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pacerUserId !== undefined) {
            requestContext.setQueryParam("pacerUserId", ObjectSerializer.serialize(pacerUserId, "string", ""));
        }

        // Query Params
        if (pacerClientCode !== undefined) {
            requestContext.setQueryParam("pacerClientCode", ObjectSerializer.serialize(pacerClientCode, "string", ""));
        }

        // Query Params
        if (caseNumber !== undefined) {
            requestContext.setQueryParam("caseNumber", ObjectSerializer.serialize(caseNumber, "string", ""));
        }

        // Query Params
        if (pacerCaseId !== undefined) {
            requestContext.setQueryParam("pacerCaseId", ObjectSerializer.serialize(pacerCaseId, "number", ""));
        }

        // Query Params
        if (caseTitle !== undefined) {
            requestContext.setQueryParam("caseTitle", ObjectSerializer.serialize(caseTitle, "string", ""));
        }

        // Query Params
        if (caseOffice !== undefined) {
            requestContext.setQueryParam("caseOffice", ObjectSerializer.serialize(caseOffice, "number", ""));
        }

        // Query Params
        if (caseSequenceNumber !== undefined) {
            requestContext.setQueryParam("caseSequenceNumber", ObjectSerializer.serialize(caseSequenceNumber, "number", ""));
        }

        // Query Params
        if (caseYear !== undefined) {
            requestContext.setQueryParam("caseYear", ObjectSerializer.serialize(caseYear, "number", ""));
        }

        // Query Params
        if (caseTypeArray !== undefined) {
            requestContext.setQueryParam("caseTypeArray", ObjectSerializer.serialize(caseTypeArray, "Array<string>", ""));
        }

        // Query Params
        if (federalBankruptcyChapterArray !== undefined) {
            requestContext.setQueryParam("federalBankruptcyChapterArray", ObjectSerializer.serialize(federalBankruptcyChapterArray, "Array<string>", ""));
        }

        // Query Params
        if (courtRegionIdArray !== undefined) {
            requestContext.setQueryParam("courtRegionIdArray", ObjectSerializer.serialize(courtRegionIdArray, "Array<string>", ""));
        }

        // Query Params
        if (caseFiledStartDate !== undefined) {
            requestContext.setQueryParam("caseFiledStartDate", ObjectSerializer.serialize(caseFiledStartDate, "Date", "date-time"));
        }

        // Query Params
        if (caseFiledEndDate !== undefined) {
            requestContext.setQueryParam("caseFiledEndDate", ObjectSerializer.serialize(caseFiledEndDate, "Date", "date-time"));
        }

        // Query Params
        if (caseTerminatedStartDate !== undefined) {
            requestContext.setQueryParam("caseTerminatedStartDate", ObjectSerializer.serialize(caseTerminatedStartDate, "Date", "date-time"));
        }

        // Query Params
        if (caseTerminatedEndDate !== undefined) {
            requestContext.setQueryParam("caseTerminatedEndDate", ObjectSerializer.serialize(caseTerminatedEndDate, "Date", "date-time"));
        }

        // Query Params
        if (caseDischargedStartDate !== undefined) {
            requestContext.setQueryParam("caseDischargedStartDate", ObjectSerializer.serialize(caseDischargedStartDate, "Date", "date-time"));
        }

        // Query Params
        if (caseDischargedEndDate !== undefined) {
            requestContext.setQueryParam("caseDischargedEndDate", ObjectSerializer.serialize(caseDischargedEndDate, "Date", "date-time"));
        }

        // Query Params
        if (caseDismissedStartDate !== undefined) {
            requestContext.setQueryParam("caseDismissedStartDate", ObjectSerializer.serialize(caseDismissedStartDate, "Date", "date-time"));
        }

        // Query Params
        if (caseDismissedEndDate !== undefined) {
            requestContext.setQueryParam("caseDismissedEndDate", ObjectSerializer.serialize(caseDismissedEndDate, "Date", "date-time"));
        }

        // Query Params
        if (sortParameterQuery !== undefined) {
            requestContext.setQueryParam("sortParameterQuery", ObjectSerializer.serialize(sortParameterQuery, "string", ""));
        }

        // Query Params
        if (caseStatus !== undefined) {
            requestContext.setQueryParam("caseStatus", ObjectSerializer.serialize(caseStatus, "'open' | 'closed'", ""));
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
     * Search for the specified party in PACER bankruptcy filings.
     * PACER Case Locator Search API for All Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param lastName The last name (for an individual) or the entity name (for a business entity) of the target party.
     * @param firstName The first name of the target party.
     * @param middleName The middle name of the target party.
     * @param generation The suffix (e.g., Jr., III) of the target party\&#39;s name.
     * @param partyType The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param partyExactNameMatch Specify whether the search string must match the name of the target party exactly.
     * @param partyRoleArray The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case. Ex 12345
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseYearFrom Limit the results of the search to those cases from the year specified or later
     * @param caseYearTo Limit the results of the search to those cases from the year specified or earlier
     * @param ssnOrEin The Social Security number or the federal Employer Identification Number of the target party. Either number can be entered with or without dashes.
     * @param fourDigitSsn The last four digits of the Social Security number of the target party.   Note: When specified, a last name/entity name must also be specified.
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseDischargedStartDate The date on which or after which the target case was marked as discharged within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type.
     * @param caseDischargedEndDate The date on which or before which the target case was marked as discharged within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type.
     * @param caseDismissedStartDate The date on which or after which the target case was marked as dismissed within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type.
     * @param caseDismissedEndDate The date on which or before which the target case was marked as dismissed within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtCase.caseOffice,ASC&amp;caseid,DESC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public async bankruptcyCourtsPacerCaseLocatorPartySearch(pacerUserId: string, pacerClientCode: string, caseNumber?: string, pacerCaseId?: number, lastName?: string, firstName?: string, middleName?: string, generation?: string, partyType?: string, partyExactNameMatch?: boolean, partyRoleArray?: Array<string>, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, courtRegionIdArray?: Array<string>, caseYearFrom?: number, caseYearTo?: number, ssnOrEin?: string, fourDigitSsn?: string, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, caseDischargedStartDate?: Date, caseDischargedEndDate?: Date, caseDismissedStartDate?: Date, caseDismissedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pacerUserId' is not null or undefined
        if (pacerUserId === null || pacerUserId === undefined) {
            throw new RequiredError("PACERAPIApi", "bankruptcyCourtsPacerCaseLocatorPartySearch", "pacerUserId");
        }


        // verify required parameter 'pacerClientCode' is not null or undefined
        if (pacerClientCode === null || pacerClientCode === undefined) {
            throw new RequiredError("PACERAPIApi", "bankruptcyCourtsPacerCaseLocatorPartySearch", "pacerClientCode");
        }
































        // Path Params
        const localVarPath = '/pacerCaseLocator/partySearch/bankruptcyCourts';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pacerUserId !== undefined) {
            requestContext.setQueryParam("pacerUserId", ObjectSerializer.serialize(pacerUserId, "string", ""));
        }

        // Query Params
        if (pacerClientCode !== undefined) {
            requestContext.setQueryParam("pacerClientCode", ObjectSerializer.serialize(pacerClientCode, "string", ""));
        }

        // Query Params
        if (caseNumber !== undefined) {
            requestContext.setQueryParam("caseNumber", ObjectSerializer.serialize(caseNumber, "string", ""));
        }

        // Query Params
        if (pacerCaseId !== undefined) {
            requestContext.setQueryParam("pacerCaseId", ObjectSerializer.serialize(pacerCaseId, "number", ""));
        }

        // Query Params
        if (lastName !== undefined) {
            requestContext.setQueryParam("lastName", ObjectSerializer.serialize(lastName, "string", ""));
        }

        // Query Params
        if (firstName !== undefined) {
            requestContext.setQueryParam("firstName", ObjectSerializer.serialize(firstName, "string", ""));
        }

        // Query Params
        if (middleName !== undefined) {
            requestContext.setQueryParam("middleName", ObjectSerializer.serialize(middleName, "string", ""));
        }

        // Query Params
        if (generation !== undefined) {
            requestContext.setQueryParam("generation", ObjectSerializer.serialize(generation, "string", ""));
        }

        // Query Params
        if (partyType !== undefined) {
            requestContext.setQueryParam("partyType", ObjectSerializer.serialize(partyType, "string", ""));
        }

        // Query Params
        if (partyExactNameMatch !== undefined) {
            requestContext.setQueryParam("partyExactNameMatch", ObjectSerializer.serialize(partyExactNameMatch, "boolean", ""));
        }

        // Query Params
        if (partyRoleArray !== undefined) {
            requestContext.setQueryParam("partyRoleArray", ObjectSerializer.serialize(partyRoleArray, "Array<string>", ""));
        }

        // Query Params
        if (caseTitle !== undefined) {
            requestContext.setQueryParam("caseTitle", ObjectSerializer.serialize(caseTitle, "string", ""));
        }

        // Query Params
        if (caseOffice !== undefined) {
            requestContext.setQueryParam("caseOffice", ObjectSerializer.serialize(caseOffice, "number", ""));
        }

        // Query Params
        if (caseSequenceNumber !== undefined) {
            requestContext.setQueryParam("caseSequenceNumber", ObjectSerializer.serialize(caseSequenceNumber, "number", ""));
        }

        // Query Params
        if (caseYear !== undefined) {
            requestContext.setQueryParam("caseYear", ObjectSerializer.serialize(caseYear, "number", ""));
        }

        // Query Params
        if (caseTypeArray !== undefined) {
            requestContext.setQueryParam("caseTypeArray", ObjectSerializer.serialize(caseTypeArray, "Array<string>", ""));
        }

        // Query Params
        if (courtRegionIdArray !== undefined) {
            requestContext.setQueryParam("courtRegionIdArray", ObjectSerializer.serialize(courtRegionIdArray, "Array<string>", ""));
        }

        // Query Params
        if (caseYearFrom !== undefined) {
            requestContext.setQueryParam("caseYearFrom", ObjectSerializer.serialize(caseYearFrom, "number", ""));
        }

        // Query Params
        if (caseYearTo !== undefined) {
            requestContext.setQueryParam("caseYearTo", ObjectSerializer.serialize(caseYearTo, "number", ""));
        }

        // Query Params
        if (ssnOrEin !== undefined) {
            requestContext.setQueryParam("ssnOrEin", ObjectSerializer.serialize(ssnOrEin, "string", ""));
        }

        // Query Params
        if (fourDigitSsn !== undefined) {
            requestContext.setQueryParam("fourDigitSsn", ObjectSerializer.serialize(fourDigitSsn, "string", ""));
        }

        // Query Params
        if (caseFiledStartDate !== undefined) {
            requestContext.setQueryParam("caseFiledStartDate", ObjectSerializer.serialize(caseFiledStartDate, "Date", "date-time"));
        }

        // Query Params
        if (caseFiledEndDate !== undefined) {
            requestContext.setQueryParam("caseFiledEndDate", ObjectSerializer.serialize(caseFiledEndDate, "Date", "date-time"));
        }

        // Query Params
        if (caseTerminatedStartDate !== undefined) {
            requestContext.setQueryParam("caseTerminatedStartDate", ObjectSerializer.serialize(caseTerminatedStartDate, "Date", "date-time"));
        }

        // Query Params
        if (caseTerminatedEndDate !== undefined) {
            requestContext.setQueryParam("caseTerminatedEndDate", ObjectSerializer.serialize(caseTerminatedEndDate, "Date", "date-time"));
        }

        // Query Params
        if (caseDischargedStartDate !== undefined) {
            requestContext.setQueryParam("caseDischargedStartDate", ObjectSerializer.serialize(caseDischargedStartDate, "Date", "date-time"));
        }

        // Query Params
        if (caseDischargedEndDate !== undefined) {
            requestContext.setQueryParam("caseDischargedEndDate", ObjectSerializer.serialize(caseDischargedEndDate, "Date", "date-time"));
        }

        // Query Params
        if (caseDismissedStartDate !== undefined) {
            requestContext.setQueryParam("caseDismissedStartDate", ObjectSerializer.serialize(caseDismissedStartDate, "Date", "date-time"));
        }

        // Query Params
        if (caseDismissedEndDate !== undefined) {
            requestContext.setQueryParam("caseDismissedEndDate", ObjectSerializer.serialize(caseDismissedEndDate, "Date", "date-time"));
        }

        // Query Params
        if (sortParameterQuery !== undefined) {
            requestContext.setQueryParam("sortParameterQuery", ObjectSerializer.serialize(sortParameterQuery, "string", ""));
        }

        // Query Params
        if (caseStatus !== undefined) {
            requestContext.setQueryParam("caseStatus", ObjectSerializer.serialize(caseStatus, "'open' | 'closed'", ""));
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
     * Search for civil cases filed in PACER.
     * PACER Case Locator Search API for All Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case.
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param natureOfSuitsArray The PACER-assigned nature of suit classification of the target case. Please see Appendix E for valid nature-of-suit classifications for cases.    Scenario: When mulitple nature of suits needs to be requested.    Imagine for a given case number 12-1234 I would like to search with the nature of suit 110 (Insurance) and 140 (Negotiable Instrument), My query in the request will look like the example mentioned below.    Example: natureOfSuitsArray&#x3D;110&amp;natureOfSuitsArray&#x3D;140
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public async civilCourtsPacerCaseLocatorCaseSearch(pacerUserId: string, pacerClientCode: string, caseNumber?: string, pacerCaseId?: number, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, natureOfSuitsArray?: Array<string>, courtRegionIdArray?: Array<string>, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pacerUserId' is not null or undefined
        if (pacerUserId === null || pacerUserId === undefined) {
            throw new RequiredError("PACERAPIApi", "civilCourtsPacerCaseLocatorCaseSearch", "pacerUserId");
        }


        // verify required parameter 'pacerClientCode' is not null or undefined
        if (pacerClientCode === null || pacerClientCode === undefined) {
            throw new RequiredError("PACERAPIApi", "civilCourtsPacerCaseLocatorCaseSearch", "pacerClientCode");
        }


















        // Path Params
        const localVarPath = '/pacerCaseLocator/caseSearch/civilCourts';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pacerUserId !== undefined) {
            requestContext.setQueryParam("pacerUserId", ObjectSerializer.serialize(pacerUserId, "string", ""));
        }

        // Query Params
        if (pacerClientCode !== undefined) {
            requestContext.setQueryParam("pacerClientCode", ObjectSerializer.serialize(pacerClientCode, "string", ""));
        }

        // Query Params
        if (caseNumber !== undefined) {
            requestContext.setQueryParam("caseNumber", ObjectSerializer.serialize(caseNumber, "string", ""));
        }

        // Query Params
        if (pacerCaseId !== undefined) {
            requestContext.setQueryParam("pacerCaseId", ObjectSerializer.serialize(pacerCaseId, "number", ""));
        }

        // Query Params
        if (caseTitle !== undefined) {
            requestContext.setQueryParam("caseTitle", ObjectSerializer.serialize(caseTitle, "string", ""));
        }

        // Query Params
        if (caseOffice !== undefined) {
            requestContext.setQueryParam("caseOffice", ObjectSerializer.serialize(caseOffice, "number", ""));
        }

        // Query Params
        if (caseSequenceNumber !== undefined) {
            requestContext.setQueryParam("caseSequenceNumber", ObjectSerializer.serialize(caseSequenceNumber, "number", ""));
        }

        // Query Params
        if (caseYear !== undefined) {
            requestContext.setQueryParam("caseYear", ObjectSerializer.serialize(caseYear, "number", ""));
        }

        // Query Params
        if (caseTypeArray !== undefined) {
            requestContext.setQueryParam("caseTypeArray", ObjectSerializer.serialize(caseTypeArray, "Array<string>", ""));
        }

        // Query Params
        if (natureOfSuitsArray !== undefined) {
            requestContext.setQueryParam("natureOfSuitsArray", ObjectSerializer.serialize(natureOfSuitsArray, "Array<string>", ""));
        }

        // Query Params
        if (courtRegionIdArray !== undefined) {
            requestContext.setQueryParam("courtRegionIdArray", ObjectSerializer.serialize(courtRegionIdArray, "Array<string>", ""));
        }

        // Query Params
        if (caseFiledStartDate !== undefined) {
            requestContext.setQueryParam("caseFiledStartDate", ObjectSerializer.serialize(caseFiledStartDate, "Date", "date-time"));
        }

        // Query Params
        if (caseFiledEndDate !== undefined) {
            requestContext.setQueryParam("caseFiledEndDate", ObjectSerializer.serialize(caseFiledEndDate, "Date", "date-time"));
        }

        // Query Params
        if (caseTerminatedStartDate !== undefined) {
            requestContext.setQueryParam("caseTerminatedStartDate", ObjectSerializer.serialize(caseTerminatedStartDate, "Date", "date-time"));
        }

        // Query Params
        if (caseTerminatedEndDate !== undefined) {
            requestContext.setQueryParam("caseTerminatedEndDate", ObjectSerializer.serialize(caseTerminatedEndDate, "Date", "date-time"));
        }

        // Query Params
        if (sortParameterQuery !== undefined) {
            requestContext.setQueryParam("sortParameterQuery", ObjectSerializer.serialize(sortParameterQuery, "string", ""));
        }

        // Query Params
        if (caseStatus !== undefined) {
            requestContext.setQueryParam("caseStatus", ObjectSerializer.serialize(caseStatus, "'open' | 'closed'", ""));
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
     * Search for the specified party in civil cases filed in PACER.
     * PACER Case Locator Search API for All Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param lastName The last name (for an individual) or the entity name (for a business entity) of the target party.
     * @param firstName The first name of the target party.
     * @param middleName The middle name of the target party.
     * @param generation The name suffix (e.g., III, MD).
     * @param partyType The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param partyExactNameMatch Specify whether the search string must match the name of the target party exactly.
     * @param partyRoleArray The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case. Ex 12345
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseYearFrom Limit the results of the search to those cases from the year specified or later
     * @param caseYearTo Limit the results of the search to those cases from the year specified or earlier
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtCase.caseOffice,ASC&amp;caseid,DESC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public async civilCourtsPacerCaseLocatorPartySearch(pacerUserId: string, pacerClientCode: string, caseNumber?: string, pacerCaseId?: number, lastName?: string, firstName?: string, middleName?: string, generation?: string, partyType?: string, partyExactNameMatch?: boolean, partyRoleArray?: Array<string>, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, courtRegionIdArray?: Array<string>, caseYearFrom?: number, caseYearTo?: number, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pacerUserId' is not null or undefined
        if (pacerUserId === null || pacerUserId === undefined) {
            throw new RequiredError("PACERAPIApi", "civilCourtsPacerCaseLocatorPartySearch", "pacerUserId");
        }


        // verify required parameter 'pacerClientCode' is not null or undefined
        if (pacerClientCode === null || pacerClientCode === undefined) {
            throw new RequiredError("PACERAPIApi", "civilCourtsPacerCaseLocatorPartySearch", "pacerClientCode");
        }


























        // Path Params
        const localVarPath = '/pacerCaseLocator/partySearch/civilCourts';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pacerUserId !== undefined) {
            requestContext.setQueryParam("pacerUserId", ObjectSerializer.serialize(pacerUserId, "string", ""));
        }

        // Query Params
        if (pacerClientCode !== undefined) {
            requestContext.setQueryParam("pacerClientCode", ObjectSerializer.serialize(pacerClientCode, "string", ""));
        }

        // Query Params
        if (caseNumber !== undefined) {
            requestContext.setQueryParam("caseNumber", ObjectSerializer.serialize(caseNumber, "string", ""));
        }

        // Query Params
        if (pacerCaseId !== undefined) {
            requestContext.setQueryParam("pacerCaseId", ObjectSerializer.serialize(pacerCaseId, "number", ""));
        }

        // Query Params
        if (lastName !== undefined) {
            requestContext.setQueryParam("lastName", ObjectSerializer.serialize(lastName, "string", ""));
        }

        // Query Params
        if (firstName !== undefined) {
            requestContext.setQueryParam("firstName", ObjectSerializer.serialize(firstName, "string", ""));
        }

        // Query Params
        if (middleName !== undefined) {
            requestContext.setQueryParam("middleName", ObjectSerializer.serialize(middleName, "string", ""));
        }

        // Query Params
        if (generation !== undefined) {
            requestContext.setQueryParam("generation", ObjectSerializer.serialize(generation, "string", ""));
        }

        // Query Params
        if (partyType !== undefined) {
            requestContext.setQueryParam("partyType", ObjectSerializer.serialize(partyType, "string", ""));
        }

        // Query Params
        if (partyExactNameMatch !== undefined) {
            requestContext.setQueryParam("partyExactNameMatch", ObjectSerializer.serialize(partyExactNameMatch, "boolean", ""));
        }

        // Query Params
        if (partyRoleArray !== undefined) {
            requestContext.setQueryParam("partyRoleArray", ObjectSerializer.serialize(partyRoleArray, "Array<string>", ""));
        }

        // Query Params
        if (caseTitle !== undefined) {
            requestContext.setQueryParam("caseTitle", ObjectSerializer.serialize(caseTitle, "string", ""));
        }

        // Query Params
        if (caseOffice !== undefined) {
            requestContext.setQueryParam("caseOffice", ObjectSerializer.serialize(caseOffice, "number", ""));
        }

        // Query Params
        if (caseSequenceNumber !== undefined) {
            requestContext.setQueryParam("caseSequenceNumber", ObjectSerializer.serialize(caseSequenceNumber, "number", ""));
        }

        // Query Params
        if (caseYear !== undefined) {
            requestContext.setQueryParam("caseYear", ObjectSerializer.serialize(caseYear, "number", ""));
        }

        // Query Params
        if (caseTypeArray !== undefined) {
            requestContext.setQueryParam("caseTypeArray", ObjectSerializer.serialize(caseTypeArray, "Array<string>", ""));
        }

        // Query Params
        if (courtRegionIdArray !== undefined) {
            requestContext.setQueryParam("courtRegionIdArray", ObjectSerializer.serialize(courtRegionIdArray, "Array<string>", ""));
        }

        // Query Params
        if (caseYearFrom !== undefined) {
            requestContext.setQueryParam("caseYearFrom", ObjectSerializer.serialize(caseYearFrom, "number", ""));
        }

        // Query Params
        if (caseYearTo !== undefined) {
            requestContext.setQueryParam("caseYearTo", ObjectSerializer.serialize(caseYearTo, "number", ""));
        }

        // Query Params
        if (caseFiledStartDate !== undefined) {
            requestContext.setQueryParam("caseFiledStartDate", ObjectSerializer.serialize(caseFiledStartDate, "Date", "date-time"));
        }

        // Query Params
        if (caseFiledEndDate !== undefined) {
            requestContext.setQueryParam("caseFiledEndDate", ObjectSerializer.serialize(caseFiledEndDate, "Date", "date-time"));
        }

        // Query Params
        if (caseTerminatedStartDate !== undefined) {
            requestContext.setQueryParam("caseTerminatedStartDate", ObjectSerializer.serialize(caseTerminatedStartDate, "Date", "date-time"));
        }

        // Query Params
        if (caseTerminatedEndDate !== undefined) {
            requestContext.setQueryParam("caseTerminatedEndDate", ObjectSerializer.serialize(caseTerminatedEndDate, "Date", "date-time"));
        }

        // Query Params
        if (sortParameterQuery !== undefined) {
            requestContext.setQueryParam("sortParameterQuery", ObjectSerializer.serialize(sortParameterQuery, "string", ""));
        }

        // Query Params
        if (caseStatus !== undefined) {
            requestContext.setQueryParam("caseStatus", ObjectSerializer.serialize(caseStatus, "'open' | 'closed'", ""));
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
     * Search for criminal cases in PACER.
     * PACER Case Locator Search API for All Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case. Ex 12345
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public async criminalCourtsPacerCaseLocatorCaseSearch(pacerUserId: string, pacerClientCode: string, caseNumber?: string, pacerCaseId?: number, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, courtRegionIdArray?: Array<string>, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pacerUserId' is not null or undefined
        if (pacerUserId === null || pacerUserId === undefined) {
            throw new RequiredError("PACERAPIApi", "criminalCourtsPacerCaseLocatorCaseSearch", "pacerUserId");
        }


        // verify required parameter 'pacerClientCode' is not null or undefined
        if (pacerClientCode === null || pacerClientCode === undefined) {
            throw new RequiredError("PACERAPIApi", "criminalCourtsPacerCaseLocatorCaseSearch", "pacerClientCode");
        }

















        // Path Params
        const localVarPath = '/pacerCaseLocator/caseSearch/criminalCourts';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pacerUserId !== undefined) {
            requestContext.setQueryParam("pacerUserId", ObjectSerializer.serialize(pacerUserId, "string", ""));
        }

        // Query Params
        if (pacerClientCode !== undefined) {
            requestContext.setQueryParam("pacerClientCode", ObjectSerializer.serialize(pacerClientCode, "string", ""));
        }

        // Query Params
        if (caseNumber !== undefined) {
            requestContext.setQueryParam("caseNumber", ObjectSerializer.serialize(caseNumber, "string", ""));
        }

        // Query Params
        if (pacerCaseId !== undefined) {
            requestContext.setQueryParam("pacerCaseId", ObjectSerializer.serialize(pacerCaseId, "number", ""));
        }

        // Query Params
        if (caseTitle !== undefined) {
            requestContext.setQueryParam("caseTitle", ObjectSerializer.serialize(caseTitle, "string", ""));
        }

        // Query Params
        if (caseOffice !== undefined) {
            requestContext.setQueryParam("caseOffice", ObjectSerializer.serialize(caseOffice, "number", ""));
        }

        // Query Params
        if (caseSequenceNumber !== undefined) {
            requestContext.setQueryParam("caseSequenceNumber", ObjectSerializer.serialize(caseSequenceNumber, "number", ""));
        }

        // Query Params
        if (caseYear !== undefined) {
            requestContext.setQueryParam("caseYear", ObjectSerializer.serialize(caseYear, "number", ""));
        }

        // Query Params
        if (caseTypeArray !== undefined) {
            requestContext.setQueryParam("caseTypeArray", ObjectSerializer.serialize(caseTypeArray, "Array<string>", ""));
        }

        // Query Params
        if (courtRegionIdArray !== undefined) {
            requestContext.setQueryParam("courtRegionIdArray", ObjectSerializer.serialize(courtRegionIdArray, "Array<string>", ""));
        }

        // Query Params
        if (caseFiledStartDate !== undefined) {
            requestContext.setQueryParam("caseFiledStartDate", ObjectSerializer.serialize(caseFiledStartDate, "Date", "date-time"));
        }

        // Query Params
        if (caseFiledEndDate !== undefined) {
            requestContext.setQueryParam("caseFiledEndDate", ObjectSerializer.serialize(caseFiledEndDate, "Date", "date-time"));
        }

        // Query Params
        if (caseTerminatedStartDate !== undefined) {
            requestContext.setQueryParam("caseTerminatedStartDate", ObjectSerializer.serialize(caseTerminatedStartDate, "Date", "date-time"));
        }

        // Query Params
        if (caseTerminatedEndDate !== undefined) {
            requestContext.setQueryParam("caseTerminatedEndDate", ObjectSerializer.serialize(caseTerminatedEndDate, "Date", "date-time"));
        }

        // Query Params
        if (sortParameterQuery !== undefined) {
            requestContext.setQueryParam("sortParameterQuery", ObjectSerializer.serialize(sortParameterQuery, "string", ""));
        }

        // Query Params
        if (caseStatus !== undefined) {
            requestContext.setQueryParam("caseStatus", ObjectSerializer.serialize(caseStatus, "'open' | 'closed'", ""));
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
     * Search for the specified party in PACER criminal cases.
     * PACER Case Locator Search API for All Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param lastName The last name (for an individual) or the entity name (for a business entity) of the target party.
     * @param firstName The first name of the target party.
     * @param middleName The middle name of the target party.
     * @param generation The suffix (e.g., Jr., III) of the target party\&#39;s name.
     * @param partyType The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param partyExactNameMatch Specify whether the search string must match the name of the target party exactly.
     * @param partyRoleArray The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case. Ex 12345
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseYearFrom Limit the results of the search to those cases from the year specified or later
     * @param caseYearTo Limit the results of the search to those cases from the year specified or earlier
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtCase.caseOffice,ASC&amp;caseid,DESC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public async criminalCourtsPacerCaseLocatorPartySearch(pacerUserId: string, pacerClientCode: string, caseNumber?: string, pacerCaseId?: number, lastName?: string, firstName?: string, middleName?: string, generation?: string, partyType?: string, partyExactNameMatch?: boolean, partyRoleArray?: Array<string>, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, courtRegionIdArray?: Array<string>, caseYearFrom?: number, caseYearTo?: number, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pacerUserId' is not null or undefined
        if (pacerUserId === null || pacerUserId === undefined) {
            throw new RequiredError("PACERAPIApi", "criminalCourtsPacerCaseLocatorPartySearch", "pacerUserId");
        }


        // verify required parameter 'pacerClientCode' is not null or undefined
        if (pacerClientCode === null || pacerClientCode === undefined) {
            throw new RequiredError("PACERAPIApi", "criminalCourtsPacerCaseLocatorPartySearch", "pacerClientCode");
        }


























        // Path Params
        const localVarPath = '/pacerCaseLocator/partySearch/criminalCourts';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pacerUserId !== undefined) {
            requestContext.setQueryParam("pacerUserId", ObjectSerializer.serialize(pacerUserId, "string", ""));
        }

        // Query Params
        if (pacerClientCode !== undefined) {
            requestContext.setQueryParam("pacerClientCode", ObjectSerializer.serialize(pacerClientCode, "string", ""));
        }

        // Query Params
        if (caseNumber !== undefined) {
            requestContext.setQueryParam("caseNumber", ObjectSerializer.serialize(caseNumber, "string", ""));
        }

        // Query Params
        if (pacerCaseId !== undefined) {
            requestContext.setQueryParam("pacerCaseId", ObjectSerializer.serialize(pacerCaseId, "number", ""));
        }

        // Query Params
        if (lastName !== undefined) {
            requestContext.setQueryParam("lastName", ObjectSerializer.serialize(lastName, "string", ""));
        }

        // Query Params
        if (firstName !== undefined) {
            requestContext.setQueryParam("firstName", ObjectSerializer.serialize(firstName, "string", ""));
        }

        // Query Params
        if (middleName !== undefined) {
            requestContext.setQueryParam("middleName", ObjectSerializer.serialize(middleName, "string", ""));
        }

        // Query Params
        if (generation !== undefined) {
            requestContext.setQueryParam("generation", ObjectSerializer.serialize(generation, "string", ""));
        }

        // Query Params
        if (partyType !== undefined) {
            requestContext.setQueryParam("partyType", ObjectSerializer.serialize(partyType, "string", ""));
        }

        // Query Params
        if (partyExactNameMatch !== undefined) {
            requestContext.setQueryParam("partyExactNameMatch", ObjectSerializer.serialize(partyExactNameMatch, "boolean", ""));
        }

        // Query Params
        if (partyRoleArray !== undefined) {
            requestContext.setQueryParam("partyRoleArray", ObjectSerializer.serialize(partyRoleArray, "Array<string>", ""));
        }

        // Query Params
        if (caseTitle !== undefined) {
            requestContext.setQueryParam("caseTitle", ObjectSerializer.serialize(caseTitle, "string", ""));
        }

        // Query Params
        if (caseOffice !== undefined) {
            requestContext.setQueryParam("caseOffice", ObjectSerializer.serialize(caseOffice, "number", ""));
        }

        // Query Params
        if (caseSequenceNumber !== undefined) {
            requestContext.setQueryParam("caseSequenceNumber", ObjectSerializer.serialize(caseSequenceNumber, "number", ""));
        }

        // Query Params
        if (caseYear !== undefined) {
            requestContext.setQueryParam("caseYear", ObjectSerializer.serialize(caseYear, "number", ""));
        }

        // Query Params
        if (caseTypeArray !== undefined) {
            requestContext.setQueryParam("caseTypeArray", ObjectSerializer.serialize(caseTypeArray, "Array<string>", ""));
        }

        // Query Params
        if (courtRegionIdArray !== undefined) {
            requestContext.setQueryParam("courtRegionIdArray", ObjectSerializer.serialize(courtRegionIdArray, "Array<string>", ""));
        }

        // Query Params
        if (caseYearFrom !== undefined) {
            requestContext.setQueryParam("caseYearFrom", ObjectSerializer.serialize(caseYearFrom, "number", ""));
        }

        // Query Params
        if (caseYearTo !== undefined) {
            requestContext.setQueryParam("caseYearTo", ObjectSerializer.serialize(caseYearTo, "number", ""));
        }

        // Query Params
        if (caseFiledStartDate !== undefined) {
            requestContext.setQueryParam("caseFiledStartDate", ObjectSerializer.serialize(caseFiledStartDate, "Date", "date-time"));
        }

        // Query Params
        if (caseFiledEndDate !== undefined) {
            requestContext.setQueryParam("caseFiledEndDate", ObjectSerializer.serialize(caseFiledEndDate, "Date", "date-time"));
        }

        // Query Params
        if (caseTerminatedStartDate !== undefined) {
            requestContext.setQueryParam("caseTerminatedStartDate", ObjectSerializer.serialize(caseTerminatedStartDate, "Date", "date-time"));
        }

        // Query Params
        if (caseTerminatedEndDate !== undefined) {
            requestContext.setQueryParam("caseTerminatedEndDate", ObjectSerializer.serialize(caseTerminatedEndDate, "Date", "date-time"));
        }

        // Query Params
        if (sortParameterQuery !== undefined) {
            requestContext.setQueryParam("sortParameterQuery", ObjectSerializer.serialize(sortParameterQuery, "string", ""));
        }

        // Query Params
        if (caseStatus !== undefined) {
            requestContext.setQueryParam("caseStatus", ObjectSerializer.serialize(caseStatus, "'open' | 'closed'", ""));
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
     * Import the specified case from PACER.    Workflow:     1.This API will return the Find Case results from the court site in a form of array of UniCourt Case Objects. These case objects will consists only Meta information of the case if not already present in the UniCourt Database.     2.To get the full updated case information one will have to request the caseUpdate API by passing the caseId.    Note:     1.Charges for Find Case in District, Bankruptcy and National Courts is free. Find case for Appeal Courts will be charged at minimum rate of $0.1. The fee charged by the court for find case can be found in the response of this API in the field courtFee.     2.The results of the search has less Meta information in case objects compared to the Meta information of cases found using the PCL search APIs.
     * Find PACER Case for a requested Case Number and Court.
     * @param pacerUserId The PACER username of the PACER account under which the case should be imported.
     * @param pacerClientCode The PACER client code under which the case should be imported.
     * @param caseNumber The case number of the case to be imported.
     * @param courtId The courtId value of the court from which the case is to be imported.
     */
    public async importPacerCaseByCourtUsingCaseNumber(pacerUserId: string, pacerClientCode: string, caseNumber: string, courtId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pacerUserId' is not null or undefined
        if (pacerUserId === null || pacerUserId === undefined) {
            throw new RequiredError("PACERAPIApi", "importPacerCaseByCourtUsingCaseNumber", "pacerUserId");
        }


        // verify required parameter 'pacerClientCode' is not null or undefined
        if (pacerClientCode === null || pacerClientCode === undefined) {
            throw new RequiredError("PACERAPIApi", "importPacerCaseByCourtUsingCaseNumber", "pacerClientCode");
        }


        // verify required parameter 'caseNumber' is not null or undefined
        if (caseNumber === null || caseNumber === undefined) {
            throw new RequiredError("PACERAPIApi", "importPacerCaseByCourtUsingCaseNumber", "caseNumber");
        }


        // verify required parameter 'courtId' is not null or undefined
        if (courtId === null || courtId === undefined) {
            throw new RequiredError("PACERAPIApi", "importPacerCaseByCourtUsingCaseNumber", "courtId");
        }


        // Path Params
        const localVarPath = '/pacer/importCaseByCourtUsingCaseNumber';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pacerUserId !== undefined) {
            requestContext.setQueryParam("pacerUserId", ObjectSerializer.serialize(pacerUserId, "string", ""));
        }

        // Query Params
        if (pacerClientCode !== undefined) {
            requestContext.setQueryParam("pacerClientCode", ObjectSerializer.serialize(pacerClientCode, "string", ""));
        }

        // Query Params
        if (caseNumber !== undefined) {
            requestContext.setQueryParam("caseNumber", ObjectSerializer.serialize(caseNumber, "string", ""));
        }

        // Query Params
        if (courtId !== undefined) {
            requestContext.setQueryParam("courtId", ObjectSerializer.serialize(courtId, "string", ""));
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
     * Search for multidistrict litigation in PACER.
     * PACER Case Locator Search API for All Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @param jpmlNumber Master JPML Case Number.
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case. Ex 12345
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public async multiDistrictCourtsPacerCaseLocatorCaseSearch(pacerUserId: string, pacerClientCode: string, caseNumber?: string, jpmlNumber?: number, pacerCaseId?: number, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, courtRegionIdArray?: Array<string>, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pacerUserId' is not null or undefined
        if (pacerUserId === null || pacerUserId === undefined) {
            throw new RequiredError("PACERAPIApi", "multiDistrictCourtsPacerCaseLocatorCaseSearch", "pacerUserId");
        }


        // verify required parameter 'pacerClientCode' is not null or undefined
        if (pacerClientCode === null || pacerClientCode === undefined) {
            throw new RequiredError("PACERAPIApi", "multiDistrictCourtsPacerCaseLocatorCaseSearch", "pacerClientCode");
        }


















        // Path Params
        const localVarPath = '/pacerCaseLocator/caseSearch/multiDistrictCourts';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pacerUserId !== undefined) {
            requestContext.setQueryParam("pacerUserId", ObjectSerializer.serialize(pacerUserId, "string", ""));
        }

        // Query Params
        if (pacerClientCode !== undefined) {
            requestContext.setQueryParam("pacerClientCode", ObjectSerializer.serialize(pacerClientCode, "string", ""));
        }

        // Query Params
        if (caseNumber !== undefined) {
            requestContext.setQueryParam("caseNumber", ObjectSerializer.serialize(caseNumber, "string", ""));
        }

        // Query Params
        if (jpmlNumber !== undefined) {
            requestContext.setQueryParam("jpmlNumber", ObjectSerializer.serialize(jpmlNumber, "number", ""));
        }

        // Query Params
        if (pacerCaseId !== undefined) {
            requestContext.setQueryParam("pacerCaseId", ObjectSerializer.serialize(pacerCaseId, "number", ""));
        }

        // Query Params
        if (caseTitle !== undefined) {
            requestContext.setQueryParam("caseTitle", ObjectSerializer.serialize(caseTitle, "string", ""));
        }

        // Query Params
        if (caseOffice !== undefined) {
            requestContext.setQueryParam("caseOffice", ObjectSerializer.serialize(caseOffice, "number", ""));
        }

        // Query Params
        if (caseSequenceNumber !== undefined) {
            requestContext.setQueryParam("caseSequenceNumber", ObjectSerializer.serialize(caseSequenceNumber, "number", ""));
        }

        // Query Params
        if (caseYear !== undefined) {
            requestContext.setQueryParam("caseYear", ObjectSerializer.serialize(caseYear, "number", ""));
        }

        // Query Params
        if (caseTypeArray !== undefined) {
            requestContext.setQueryParam("caseTypeArray", ObjectSerializer.serialize(caseTypeArray, "Array<string>", ""));
        }

        // Query Params
        if (courtRegionIdArray !== undefined) {
            requestContext.setQueryParam("courtRegionIdArray", ObjectSerializer.serialize(courtRegionIdArray, "Array<string>", ""));
        }

        // Query Params
        if (caseFiledStartDate !== undefined) {
            requestContext.setQueryParam("caseFiledStartDate", ObjectSerializer.serialize(caseFiledStartDate, "Date", "date-time"));
        }

        // Query Params
        if (caseFiledEndDate !== undefined) {
            requestContext.setQueryParam("caseFiledEndDate", ObjectSerializer.serialize(caseFiledEndDate, "Date", "date-time"));
        }

        // Query Params
        if (caseTerminatedStartDate !== undefined) {
            requestContext.setQueryParam("caseTerminatedStartDate", ObjectSerializer.serialize(caseTerminatedStartDate, "Date", "date-time"));
        }

        // Query Params
        if (caseTerminatedEndDate !== undefined) {
            requestContext.setQueryParam("caseTerminatedEndDate", ObjectSerializer.serialize(caseTerminatedEndDate, "Date", "date-time"));
        }

        // Query Params
        if (sortParameterQuery !== undefined) {
            requestContext.setQueryParam("sortParameterQuery", ObjectSerializer.serialize(sortParameterQuery, "string", ""));
        }

        // Query Params
        if (caseStatus !== undefined) {
            requestContext.setQueryParam("caseStatus", ObjectSerializer.serialize(caseStatus, "'open' | 'closed'", ""));
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
     * Search for the specified party in multidistrict litigation in PACER.
     * PACER Case Locator Search API for All Courts.
     * @param pacerUserId The username of the PACER account under which the search is to be performed.
     * @param pacerClientCode The PACER client code under which the search is to be performed.
     * @param caseNumber The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit).
     * @param jpmlNumber Master JPML Case Number.
     * @param pacerCaseId The PACER-assigned identifier of the target case.
     * @param lastName The last name (for an individual) or the entity name (for a business entity) of the target party.
     * @param firstName The first name of the target party.
     * @param middleName The middle name of the target party.
     * @param generation The suffix (e.g., Jr., III) of the target party\&#39;s name.
     * @param partyType The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param partyExactNameMatch Specify whether the search string must match the name of the target party exactly.
     * @param partyRoleArray The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.
     * @param caseTitle The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.
     * @param caseOffice The divisional office in which the case was filed.
     * @param caseSequenceNumber The PACER-assigned sequence number of the target case. Ex 12345
     * @param caseYear The two- or four-digit year in which the target case was filed.
     * @param caseTypeArray The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr
     * @param courtRegionIdArray The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae
     * @param caseYearFrom Limit the results of the search to those cases from the year specified or later
     * @param caseYearTo Limit the results of the search to those cases from the year specified or earlier
     * @param caseFiledStartDate The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseFiledEndDate The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedStartDate The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param caseTerminatedEndDate The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).
     * @param sortParameterQuery How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtCase.caseOffice,ASC&amp;caseid,DESC
     * @param caseStatus Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER.
     * @param pageNumber The page number of the search results to be retrieved.
     */
    public async multiDistrictCourtsPacerCaseLocatorPartySearch(pacerUserId: string, pacerClientCode: string, caseNumber?: string, jpmlNumber?: number, pacerCaseId?: number, lastName?: string, firstName?: string, middleName?: string, generation?: string, partyType?: string, partyExactNameMatch?: boolean, partyRoleArray?: Array<string>, caseTitle?: string, caseOffice?: number, caseSequenceNumber?: number, caseYear?: number, caseTypeArray?: Array<string>, courtRegionIdArray?: Array<string>, caseYearFrom?: number, caseYearTo?: number, caseFiledStartDate?: Date, caseFiledEndDate?: Date, caseTerminatedStartDate?: Date, caseTerminatedEndDate?: Date, sortParameterQuery?: string, caseStatus?: 'open' | 'closed', pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pacerUserId' is not null or undefined
        if (pacerUserId === null || pacerUserId === undefined) {
            throw new RequiredError("PACERAPIApi", "multiDistrictCourtsPacerCaseLocatorPartySearch", "pacerUserId");
        }


        // verify required parameter 'pacerClientCode' is not null or undefined
        if (pacerClientCode === null || pacerClientCode === undefined) {
            throw new RequiredError("PACERAPIApi", "multiDistrictCourtsPacerCaseLocatorPartySearch", "pacerClientCode");
        }



























        // Path Params
        const localVarPath = '/pacerCaseLocator/partySearch/multiDistrictCourts';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pacerUserId !== undefined) {
            requestContext.setQueryParam("pacerUserId", ObjectSerializer.serialize(pacerUserId, "string", ""));
        }

        // Query Params
        if (pacerClientCode !== undefined) {
            requestContext.setQueryParam("pacerClientCode", ObjectSerializer.serialize(pacerClientCode, "string", ""));
        }

        // Query Params
        if (caseNumber !== undefined) {
            requestContext.setQueryParam("caseNumber", ObjectSerializer.serialize(caseNumber, "string", ""));
        }

        // Query Params
        if (jpmlNumber !== undefined) {
            requestContext.setQueryParam("jpmlNumber", ObjectSerializer.serialize(jpmlNumber, "number", ""));
        }

        // Query Params
        if (pacerCaseId !== undefined) {
            requestContext.setQueryParam("pacerCaseId", ObjectSerializer.serialize(pacerCaseId, "number", ""));
        }

        // Query Params
        if (lastName !== undefined) {
            requestContext.setQueryParam("lastName", ObjectSerializer.serialize(lastName, "string", ""));
        }

        // Query Params
        if (firstName !== undefined) {
            requestContext.setQueryParam("firstName", ObjectSerializer.serialize(firstName, "string", ""));
        }

        // Query Params
        if (middleName !== undefined) {
            requestContext.setQueryParam("middleName", ObjectSerializer.serialize(middleName, "string", ""));
        }

        // Query Params
        if (generation !== undefined) {
            requestContext.setQueryParam("generation", ObjectSerializer.serialize(generation, "string", ""));
        }

        // Query Params
        if (partyType !== undefined) {
            requestContext.setQueryParam("partyType", ObjectSerializer.serialize(partyType, "string", ""));
        }

        // Query Params
        if (partyExactNameMatch !== undefined) {
            requestContext.setQueryParam("partyExactNameMatch", ObjectSerializer.serialize(partyExactNameMatch, "boolean", ""));
        }

        // Query Params
        if (partyRoleArray !== undefined) {
            requestContext.setQueryParam("partyRoleArray", ObjectSerializer.serialize(partyRoleArray, "Array<string>", ""));
        }

        // Query Params
        if (caseTitle !== undefined) {
            requestContext.setQueryParam("caseTitle", ObjectSerializer.serialize(caseTitle, "string", ""));
        }

        // Query Params
        if (caseOffice !== undefined) {
            requestContext.setQueryParam("caseOffice", ObjectSerializer.serialize(caseOffice, "number", ""));
        }

        // Query Params
        if (caseSequenceNumber !== undefined) {
            requestContext.setQueryParam("caseSequenceNumber", ObjectSerializer.serialize(caseSequenceNumber, "number", ""));
        }

        // Query Params
        if (caseYear !== undefined) {
            requestContext.setQueryParam("caseYear", ObjectSerializer.serialize(caseYear, "number", ""));
        }

        // Query Params
        if (caseTypeArray !== undefined) {
            requestContext.setQueryParam("caseTypeArray", ObjectSerializer.serialize(caseTypeArray, "Array<string>", ""));
        }

        // Query Params
        if (courtRegionIdArray !== undefined) {
            requestContext.setQueryParam("courtRegionIdArray", ObjectSerializer.serialize(courtRegionIdArray, "Array<string>", ""));
        }

        // Query Params
        if (caseYearFrom !== undefined) {
            requestContext.setQueryParam("caseYearFrom", ObjectSerializer.serialize(caseYearFrom, "number", ""));
        }

        // Query Params
        if (caseYearTo !== undefined) {
            requestContext.setQueryParam("caseYearTo", ObjectSerializer.serialize(caseYearTo, "number", ""));
        }

        // Query Params
        if (caseFiledStartDate !== undefined) {
            requestContext.setQueryParam("caseFiledStartDate", ObjectSerializer.serialize(caseFiledStartDate, "Date", "date-time"));
        }

        // Query Params
        if (caseFiledEndDate !== undefined) {
            requestContext.setQueryParam("caseFiledEndDate", ObjectSerializer.serialize(caseFiledEndDate, "Date", "date-time"));
        }

        // Query Params
        if (caseTerminatedStartDate !== undefined) {
            requestContext.setQueryParam("caseTerminatedStartDate", ObjectSerializer.serialize(caseTerminatedStartDate, "Date", "date-time"));
        }

        // Query Params
        if (caseTerminatedEndDate !== undefined) {
            requestContext.setQueryParam("caseTerminatedEndDate", ObjectSerializer.serialize(caseTerminatedEndDate, "Date", "date-time"));
        }

        // Query Params
        if (sortParameterQuery !== undefined) {
            requestContext.setQueryParam("sortParameterQuery", ObjectSerializer.serialize(sortParameterQuery, "string", ""));
        }

        // Query Params
        if (caseStatus !== undefined) {
            requestContext.setQueryParam("caseStatus", ObjectSerializer.serialize(caseStatus, "'open' | 'closed'", ""));
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

export class PACERAPIApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to allCourtsPacerCaseLocatorCaseSearch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async allCourtsPacerCaseLocatorCaseSearchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AllCourtsPacerCaseLocatorCaseSearch200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AllCourtsPacerCaseLocatorCaseSearch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AllCourtsPacerCaseLocatorCaseSearch200Response", ""
            ) as AllCourtsPacerCaseLocatorCaseSearch200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Invalid Input Parameter", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AllCourtsPacerCaseLocatorCaseSearch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AllCourtsPacerCaseLocatorCaseSearch200Response", ""
            ) as AllCourtsPacerCaseLocatorCaseSearch200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to allCourtsPacerCaseLocatorPartySearch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async allCourtsPacerCaseLocatorPartySearchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AllCourtsPacerCaseLocatorPartySearch200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AllCourtsPacerCaseLocatorPartySearch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AllCourtsPacerCaseLocatorPartySearch200Response", ""
            ) as AllCourtsPacerCaseLocatorPartySearch200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Invalid Input Parameter", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AllCourtsPacerCaseLocatorPartySearch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AllCourtsPacerCaseLocatorPartySearch200Response", ""
            ) as AllCourtsPacerCaseLocatorPartySearch200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appealCourtsPacerCaseLocatorCaseSearch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appealCourtsPacerCaseLocatorCaseSearchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AllCourtsPacerCaseLocatorCaseSearch200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AllCourtsPacerCaseLocatorCaseSearch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AllCourtsPacerCaseLocatorCaseSearch200Response", ""
            ) as AllCourtsPacerCaseLocatorCaseSearch200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Invalid Input Parameter", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AllCourtsPacerCaseLocatorCaseSearch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AllCourtsPacerCaseLocatorCaseSearch200Response", ""
            ) as AllCourtsPacerCaseLocatorCaseSearch200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appealCourtsPacerCaseLocatorPartySearch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appealCourtsPacerCaseLocatorPartySearchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AllCourtsPacerCaseLocatorPartySearch200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AllCourtsPacerCaseLocatorPartySearch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AllCourtsPacerCaseLocatorPartySearch200Response", ""
            ) as AllCourtsPacerCaseLocatorPartySearch200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Invalid Input Parameter", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AllCourtsPacerCaseLocatorPartySearch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AllCourtsPacerCaseLocatorPartySearch200Response", ""
            ) as AllCourtsPacerCaseLocatorPartySearch200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to bankruptcyCourtsPacerCaseLocatorCaseSearch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async bankruptcyCourtsPacerCaseLocatorCaseSearchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AllCourtsPacerCaseLocatorCaseSearch200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AllCourtsPacerCaseLocatorCaseSearch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AllCourtsPacerCaseLocatorCaseSearch200Response", ""
            ) as AllCourtsPacerCaseLocatorCaseSearch200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Invalid Input Parameter", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AllCourtsPacerCaseLocatorCaseSearch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AllCourtsPacerCaseLocatorCaseSearch200Response", ""
            ) as AllCourtsPacerCaseLocatorCaseSearch200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to bankruptcyCourtsPacerCaseLocatorPartySearch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async bankruptcyCourtsPacerCaseLocatorPartySearchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AllCourtsPacerCaseLocatorPartySearch200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AllCourtsPacerCaseLocatorPartySearch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AllCourtsPacerCaseLocatorPartySearch200Response", ""
            ) as AllCourtsPacerCaseLocatorPartySearch200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Invalid Input Parameter", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AllCourtsPacerCaseLocatorPartySearch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AllCourtsPacerCaseLocatorPartySearch200Response", ""
            ) as AllCourtsPacerCaseLocatorPartySearch200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to civilCourtsPacerCaseLocatorCaseSearch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async civilCourtsPacerCaseLocatorCaseSearchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AllCourtsPacerCaseLocatorCaseSearch200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AllCourtsPacerCaseLocatorCaseSearch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AllCourtsPacerCaseLocatorCaseSearch200Response", ""
            ) as AllCourtsPacerCaseLocatorCaseSearch200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Invalid Input Parameter", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AllCourtsPacerCaseLocatorCaseSearch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AllCourtsPacerCaseLocatorCaseSearch200Response", ""
            ) as AllCourtsPacerCaseLocatorCaseSearch200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to civilCourtsPacerCaseLocatorPartySearch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async civilCourtsPacerCaseLocatorPartySearchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AllCourtsPacerCaseLocatorPartySearch200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AllCourtsPacerCaseLocatorPartySearch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AllCourtsPacerCaseLocatorPartySearch200Response", ""
            ) as AllCourtsPacerCaseLocatorPartySearch200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Invalid Input Parameter", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AllCourtsPacerCaseLocatorPartySearch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AllCourtsPacerCaseLocatorPartySearch200Response", ""
            ) as AllCourtsPacerCaseLocatorPartySearch200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to criminalCourtsPacerCaseLocatorCaseSearch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async criminalCourtsPacerCaseLocatorCaseSearchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AllCourtsPacerCaseLocatorCaseSearch200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AllCourtsPacerCaseLocatorCaseSearch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AllCourtsPacerCaseLocatorCaseSearch200Response", ""
            ) as AllCourtsPacerCaseLocatorCaseSearch200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Invalid Input Parameter", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AllCourtsPacerCaseLocatorCaseSearch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AllCourtsPacerCaseLocatorCaseSearch200Response", ""
            ) as AllCourtsPacerCaseLocatorCaseSearch200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to criminalCourtsPacerCaseLocatorPartySearch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async criminalCourtsPacerCaseLocatorPartySearchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AllCourtsPacerCaseLocatorPartySearch200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AllCourtsPacerCaseLocatorPartySearch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AllCourtsPacerCaseLocatorPartySearch200Response", ""
            ) as AllCourtsPacerCaseLocatorPartySearch200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Invalid Input Parameter", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AllCourtsPacerCaseLocatorPartySearch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AllCourtsPacerCaseLocatorPartySearch200Response", ""
            ) as AllCourtsPacerCaseLocatorPartySearch200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to importPacerCaseByCourtUsingCaseNumber
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async importPacerCaseByCourtUsingCaseNumberWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ImportPacerCaseByCourtUsingCaseNumber200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ImportPacerCaseByCourtUsingCaseNumber200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ImportPacerCaseByCourtUsingCaseNumber200Response", ""
            ) as ImportPacerCaseByCourtUsingCaseNumber200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Invalid Input Parameter", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ImportPacerCaseByCourtUsingCaseNumber200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ImportPacerCaseByCourtUsingCaseNumber200Response", ""
            ) as ImportPacerCaseByCourtUsingCaseNumber200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to multiDistrictCourtsPacerCaseLocatorCaseSearch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async multiDistrictCourtsPacerCaseLocatorCaseSearchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AllCourtsPacerCaseLocatorCaseSearch200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AllCourtsPacerCaseLocatorCaseSearch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AllCourtsPacerCaseLocatorCaseSearch200Response", ""
            ) as AllCourtsPacerCaseLocatorCaseSearch200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Invalid Input Parameter", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AllCourtsPacerCaseLocatorCaseSearch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AllCourtsPacerCaseLocatorCaseSearch200Response", ""
            ) as AllCourtsPacerCaseLocatorCaseSearch200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to multiDistrictCourtsPacerCaseLocatorPartySearch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async multiDistrictCourtsPacerCaseLocatorPartySearchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AllCourtsPacerCaseLocatorPartySearch200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AllCourtsPacerCaseLocatorPartySearch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AllCourtsPacerCaseLocatorPartySearch200Response", ""
            ) as AllCourtsPacerCaseLocatorPartySearch200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Invalid Input Parameter", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AllCourtsPacerCaseLocatorPartySearch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AllCourtsPacerCaseLocatorPartySearch200Response", ""
            ) as AllCourtsPacerCaseLocatorPartySearch200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

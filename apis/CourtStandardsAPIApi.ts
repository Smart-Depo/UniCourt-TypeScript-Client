// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AreaOfLaw1 } from '../models/AreaOfLaw1';
import { AttorneyRepresentationType1 } from '../models/AttorneyRepresentationType1';
import { AttorneyType1 } from '../models/AttorneyType1';
import { CaseClass1 } from '../models/CaseClass1';
import { CaseRelationshipType1 } from '../models/CaseRelationshipType1';
import { CaseStatus1 } from '../models/CaseStatus1';
import { CaseStatusGroup1 } from '../models/CaseStatusGroup1';
import { CaseType1 } from '../models/CaseType1';
import { CaseTypeGroup1 } from '../models/CaseTypeGroup1';
import { CauseOfAction1 } from '../models/CauseOfAction1';
import { CauseOfActionAdditionalData1 } from '../models/CauseOfActionAdditionalData1';
import { CauseOfActionGroup1 } from '../models/CauseOfActionGroup1';
import { Charge1 } from '../models/Charge1';
import { ChargeAdditionalData1 } from '../models/ChargeAdditionalData1';
import { ChargeDegree1 } from '../models/ChargeDegree1';
import { ChargeGroup1 } from '../models/ChargeGroup1';
import { ChargeSeverity1 } from '../models/ChargeSeverity1';
import { Court1 } from '../models/Court1';
import { CourtLocation1 } from '../models/CourtLocation1';
import { CourtLocationResponse1 } from '../models/CourtLocationResponse1';
import { CourtSystem1 } from '../models/CourtSystem1';
import { CourtType1 } from '../models/CourtType1';
import { Exception1 } from '../models/Exception1';
import { GetAreasOfLaw200Response } from '../models/GetAreasOfLaw200Response';
import { GetAttorneyRepresentationTypes200Response } from '../models/GetAttorneyRepresentationTypes200Response';
import { GetAttorneyTypes200Response } from '../models/GetAttorneyTypes200Response';
import { GetCaseRelationshipTypes200Response } from '../models/GetCaseRelationshipTypes200Response';
import { GetCaseStatusGroups200Response } from '../models/GetCaseStatusGroups200Response';
import { GetCaseTypeGroups200Response } from '../models/GetCaseTypeGroups200Response';
import { GetCaseTypes200Response } from '../models/GetCaseTypes200Response';
import { GetCasesClass200Response } from '../models/GetCasesClass200Response';
import { GetCasesStatus200Response } from '../models/GetCasesStatus200Response';
import { GetCausesOfAction200Response } from '../models/GetCausesOfAction200Response';
import { GetCausesOfActionAdditionalData200Response } from '../models/GetCausesOfActionAdditionalData200Response';
import { GetCausesOfActionGroup200Response } from '../models/GetCausesOfActionGroup200Response';
import { GetChargeGroups200Response } from '../models/GetChargeGroups200Response';
import { GetCharges200Response } from '../models/GetCharges200Response';
import { GetChargesAdditionalData200Response } from '../models/GetChargesAdditionalData200Response';
import { GetChargesDegree200Response } from '../models/GetChargesDegree200Response';
import { GetChargesSeverity200Response } from '../models/GetChargesSeverity200Response';
import { GetCourtSystems200Response } from '../models/GetCourtSystems200Response';
import { GetCourtTypes200Response } from '../models/GetCourtTypes200Response';
import { GetCourts200Response } from '../models/GetCourts200Response';
import { GetCourtsServiceStatus200Response } from '../models/GetCourtsServiceStatus200Response';
import { GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner } from '../models/GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner';
import { GetJudgeTypes200Response } from '../models/GetJudgeTypes200Response';
import { GetPartyRoleGroups200Response } from '../models/GetPartyRoleGroups200Response';
import { GetPartyRoles200Response } from '../models/GetPartyRoles200Response';
import { JudgeType1 } from '../models/JudgeType1';
import { JurisdictionGeo1 } from '../models/JurisdictionGeo1';
import { JurisdictionGeoResponse1 } from '../models/JurisdictionGeoResponse1';
import { PartyRole1 } from '../models/PartyRole1';
import { PartyRoleGroup1 } from '../models/PartyRoleGroup1';

/**
 * no description
 */
export class CourtStandardsAPIApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Retrieve the appeals courts associated with the specified court. 
     * Appeal Court Objects for given courtId.
     * @param courtId The courtId value of the target court.
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public async getAppealCourtsForCourt(courtId: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'courtId' is not null or undefined
        if (courtId === null || courtId === undefined) {
            throw new RequiredError("CourtStandardsAPIApi", "getAppealCourtsForCourt", "courtId");
        }





        // Path Params
        const localVarPath = '/masterData/court/{courtId}/appealCourts'
            .replace('{' + 'courtId' + '}', encodeURIComponent(String(courtId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'name'", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'asc' | 'desc'", ""));
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
     * Retrieve the specified area of law. 
     * AreaOfLaw Object for the given AreaOfLaw Id.
     * @param areaOfLawId The areaOfLawId value of the desired area of law.
     */
    public async getAreaOfLaw(areaOfLawId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'areaOfLawId' is not null or undefined
        if (areaOfLawId === null || areaOfLawId === undefined) {
            throw new RequiredError("CourtStandardsAPIApi", "getAreaOfLaw", "areaOfLawId");
        }


        // Path Params
        const localVarPath = '/masterData/areaOfLaw/{areaOfLawId}'
            .replace('{' + 'areaOfLawId' + '}', encodeURIComponent(String(areaOfLawId)));

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
     * The keyword expression targeting the desired area of law.   ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> AreaOfLawQueryObject 
     * AreaOfLaw Object.
     * @param q Retrieve one or more areas of law using a keyword expression. Keyword expressions should be constructed according to the rules given above.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public async getAreasOfLaw(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/masterData/areaOfLaw';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (q !== undefined) {
            requestContext.setQueryParam("q", ObjectSerializer.serialize(q, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'name'", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'asc' | 'desc'", ""));
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
     * Retrieve the specified attorney representation type. 
     * Attorney Representation Type Object for the given attorneyRepresentationTypeId.
     * @param attorneyRepresentationTypeId The attorneyRepresentationTypeId value of the desired attorney representation type.
     */
    public async getAttorneyRepresentationType(attorneyRepresentationTypeId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'attorneyRepresentationTypeId' is not null or undefined
        if (attorneyRepresentationTypeId === null || attorneyRepresentationTypeId === undefined) {
            throw new RequiredError("CourtStandardsAPIApi", "getAttorneyRepresentationType", "attorneyRepresentationTypeId");
        }


        // Path Params
        const localVarPath = '/masterData/attorneyRepresentationType/{attorneyRepresentationTypeId}'
            .replace('{' + 'attorneyRepresentationTypeId' + '}', encodeURIComponent(String(attorneyRepresentationTypeId)));

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
     * Retrieve an attorney representation type using a keyword expression. Keyword expressions should be constructed according to the rules given above. ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below Schema section. Schema --> AttorneyRepresentationTypeQueryObject 
     * Attorney Representation Type Object.
     * @param q The keyword expression targeting the attorney representation type.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public async getAttorneyRepresentationTypes(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/masterData/attorneyRepresentationType';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (q !== undefined) {
            requestContext.setQueryParam("q", ObjectSerializer.serialize(q, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'name'", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'asc' | 'desc'", ""));
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
     * Retrieve a specified attorney type object. 
     * Attorney Type Object for given Attorney Type Id.
     * @param attorneyTypeId The attorneyTypeId value of the desired attorney type.
     */
    public async getAttorneyType(attorneyTypeId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'attorneyTypeId' is not null or undefined
        if (attorneyTypeId === null || attorneyTypeId === undefined) {
            throw new RequiredError("CourtStandardsAPIApi", "getAttorneyType", "attorneyTypeId");
        }


        // Path Params
        const localVarPath = '/masterData/attorneyType/{attorneyTypeId}'
            .replace('{' + 'attorneyTypeId' + '}', encodeURIComponent(String(attorneyTypeId)));

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
     * Retrieve an attorney type using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below Schema section. Schema --> AttorneyTypeQueryObject 
     * Attorney Type Object.
     * @param q The keyword expression targeting the attorney type.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public async getAttorneyTypes(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/masterData/attorneyType';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (q !== undefined) {
            requestContext.setQueryParam("q", ObjectSerializer.serialize(q, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'name'", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'asc' | 'desc'", ""));
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
     * Retrieve the specified case class. 
     * Case Class Object for the given Case Class Id.
     * @param caseClassId The caseClassId value of the desired case class.
     */
    public async getCaseClass(caseClassId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'caseClassId' is not null or undefined
        if (caseClassId === null || caseClassId === undefined) {
            throw new RequiredError("CourtStandardsAPIApi", "getCaseClass", "caseClassId");
        }


        // Path Params
        const localVarPath = '/masterData/caseClass/{caseClassId}'
            .replace('{' + 'caseClassId' + '}', encodeURIComponent(String(caseClassId)));

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
     * Retrieve the specified case relationship type. 
     * Case Relationship Type Object for the given caseRelationshipTypeId.
     * @param caseRelationshipTypeId The caseRelationshipTypeId value of the desired case relationship type.
     */
    public async getCaseRelationshipType(caseRelationshipTypeId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'caseRelationshipTypeId' is not null or undefined
        if (caseRelationshipTypeId === null || caseRelationshipTypeId === undefined) {
            throw new RequiredError("CourtStandardsAPIApi", "getCaseRelationshipType", "caseRelationshipTypeId");
        }


        // Path Params
        const localVarPath = '/masterData/caseRelationshipType/{caseRelationshipTypeId}'
            .replace('{' + 'caseRelationshipTypeId' + '}', encodeURIComponent(String(caseRelationshipTypeId)));

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
     * Retrieve an case relationship type using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CaseRelationshipTypeQueryObject 
     * Case Relationship Type Object.
     * @param q The keyword expression targeting the case relationship type.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public async getCaseRelationshipTypes(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/masterData/caseRelationshipType';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (q !== undefined) {
            requestContext.setQueryParam("q", ObjectSerializer.serialize(q, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'name'", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'asc' | 'desc'", ""));
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
     * Retrieve the specified case status. 
     * Returns the caseStatus information for the given caseStatusId.
     * @param caseStatusId The caseStatusId value of the desired case status.
     */
    public async getCaseStatus(caseStatusId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'caseStatusId' is not null or undefined
        if (caseStatusId === null || caseStatusId === undefined) {
            throw new RequiredError("CourtStandardsAPIApi", "getCaseStatus", "caseStatusId");
        }


        // Path Params
        const localVarPath = '/masterData/caseStatus/{caseStatusId}'
            .replace('{' + 'caseStatusId' + '}', encodeURIComponent(String(caseStatusId)));

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
     * Retrieve the specified case status group. 
     * Returns the caseStatusGroup information for the given caseStatusGroupId.
     * @param caseStatusGroupId The caseStatusGroupId value of the desired case status group.
     */
    public async getCaseStatusGroup(caseStatusGroupId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'caseStatusGroupId' is not null or undefined
        if (caseStatusGroupId === null || caseStatusGroupId === undefined) {
            throw new RequiredError("CourtStandardsAPIApi", "getCaseStatusGroup", "caseStatusGroupId");
        }


        // Path Params
        const localVarPath = '/masterData/caseStatusGroup/{caseStatusGroupId}'
            .replace('{' + 'caseStatusGroupId' + '}', encodeURIComponent(String(caseStatusGroupId)));

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
     * Retrieve a case status group using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CaseStatusGroupQueryObject 
     * Case Status Group Object.
     * @param q The keyword expression targeting the desired case status group.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public async getCaseStatusGroups(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/masterData/caseStatusGroup';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (q !== undefined) {
            requestContext.setQueryParam("q", ObjectSerializer.serialize(q, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'name'", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'asc' | 'desc'", ""));
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
     * Retrieve the specified case type. 
     * CaseType Object for given Case Type Id.
     * @param caseTypeId The caseTypeId value of the desired case type.
     */
    public async getCaseType(caseTypeId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'caseTypeId' is not null or undefined
        if (caseTypeId === null || caseTypeId === undefined) {
            throw new RequiredError("CourtStandardsAPIApi", "getCaseType", "caseTypeId");
        }


        // Path Params
        const localVarPath = '/masterData/caseType/{caseTypeId}'
            .replace('{' + 'caseTypeId' + '}', encodeURIComponent(String(caseTypeId)));

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
     * Retrieve the specified case type group. 
     * CaseType Group for the given CaseType Group Id.
     * @param caseTypeGroupId caseTypeGroupId
     */
    public async getCaseTypeGroup(caseTypeGroupId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'caseTypeGroupId' is not null or undefined
        if (caseTypeGroupId === null || caseTypeGroupId === undefined) {
            throw new RequiredError("CourtStandardsAPIApi", "getCaseTypeGroup", "caseTypeGroupId");
        }


        // Path Params
        const localVarPath = '/masterData/caseTypeGroup/{caseTypeGroupId}'
            .replace('{' + 'caseTypeGroupId' + '}', encodeURIComponent(String(caseTypeGroupId)));

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
     * Retrieve one or more case type groups using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CaseTypeGroupQueryObject 
     * CaseTypeGroup Object.
     * @param q Retrieve one or more case type groups using a keyword expression. Keyword expressions should be constructed according to the rules given above.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public async getCaseTypeGroups(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/masterData/caseTypeGroup';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (q !== undefined) {
            requestContext.setQueryParam("q", ObjectSerializer.serialize(q, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'name'", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'asc' | 'desc'", ""));
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
     * Retrieve one or more case types using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CaseTypeQueryObject 
     * Case Type Object.
     * @param q Retrieve one or more case types using a keyword expression. Keyword expressions should be constructed according to the rules given above.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public async getCaseTypes(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/masterData/caseType';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (q !== undefined) {
            requestContext.setQueryParam("q", ObjectSerializer.serialize(q, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'name'", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'asc' | 'desc'", ""));
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
     * Retrieve one or more case classes using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CaseClassQueryObject 
     * Case Class Object.
     * @param q The keyword expression targeting the desired case class.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public async getCasesClass(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/masterData/caseClass';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (q !== undefined) {
            requestContext.setQueryParam("q", ObjectSerializer.serialize(q, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'name'", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'asc' | 'desc'", ""));
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
     * Retrieve a case status using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below Schema section. Schema --> CaseStatusQueryObject 
     * Case Status Object.
     * @param q The keyword expression targeting the desired case status.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public async getCasesStatus(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/masterData/caseStatus';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (q !== undefined) {
            requestContext.setQueryParam("q", ObjectSerializer.serialize(q, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'name'", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'asc' | 'desc'", ""));
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
     * Retrieve the specified cause of action. 
     * CauseOfAction Object for the given causeOfActionId.
     * @param causeOfActionId The causeOfActionId value of the desired cause of action.
     */
    public async getCauseOfAction(causeOfActionId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'causeOfActionId' is not null or undefined
        if (causeOfActionId === null || causeOfActionId === undefined) {
            throw new RequiredError("CourtStandardsAPIApi", "getCauseOfAction", "causeOfActionId");
        }


        // Path Params
        const localVarPath = '/masterData/causeOfAction/{causeOfActionId}'
            .replace('{' + 'causeOfActionId' + '}', encodeURIComponent(String(causeOfActionId)));

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
     * Retrieve the specified cause of action additional data. 
     * CauseOfActionAdditionalData Object for the given causeOfActionAdditionalDataId.
     * @param causeOfActionAdditionalDataId The causeOfActionAdditionalDataId value of the desired cause of action additional data.
     */
    public async getCauseOfActionAdditionalData(causeOfActionAdditionalDataId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'causeOfActionAdditionalDataId' is not null or undefined
        if (causeOfActionAdditionalDataId === null || causeOfActionAdditionalDataId === undefined) {
            throw new RequiredError("CourtStandardsAPIApi", "getCauseOfActionAdditionalData", "causeOfActionAdditionalDataId");
        }


        // Path Params
        const localVarPath = '/masterData/causeOfActionAdditionalData/{causeOfActionAdditionalDataId}'
            .replace('{' + 'causeOfActionAdditionalDataId' + '}', encodeURIComponent(String(causeOfActionAdditionalDataId)));

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
     * Retrieve the specified cause of action group. 
     * CauseOfActionGroup Object for the given causeOfActionGroupId.
     * @param causeOfActionGroupId causeOfActionGroupId
     */
    public async getCauseOfActionGroup(causeOfActionGroupId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'causeOfActionGroupId' is not null or undefined
        if (causeOfActionGroupId === null || causeOfActionGroupId === undefined) {
            throw new RequiredError("CourtStandardsAPIApi", "getCauseOfActionGroup", "causeOfActionGroupId");
        }


        // Path Params
        const localVarPath = '/masterData/causeOfActionGroup/{causeOfActionGroupId}'
            .replace('{' + 'causeOfActionGroupId' + '}', encodeURIComponent(String(causeOfActionGroupId)));

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
     * Retrieve a cause of action using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CauseOfActionQueryObject 
     * CauseOfAction Object.
     * @param q The keyword expression targeting the desired cause of action.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public async getCausesOfAction(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/masterData/causeOfAction';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (q !== undefined) {
            requestContext.setQueryParam("q", ObjectSerializer.serialize(q, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'name'", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'asc' | 'desc'", ""));
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
     * Retrieve a cause of action additional data using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CauseOfActionAdditionalDataQueryObject 
     * CauseOfActionAdditionaData Object.
     * @param q The keyword expression targeting the desired cause of action additional data.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public async getCausesOfActionAdditionalData(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/masterData/causeOfActionAdditionalData';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (q !== undefined) {
            requestContext.setQueryParam("q", ObjectSerializer.serialize(q, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'name'", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'asc' | 'desc'", ""));
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
     * Retrieve a cause of action group using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CauseOfActionGroupQueryObject 
     * CauseOfActionGroup Object.
     * @param q The keyword expression targeting the desired cause of action group.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public async getCausesOfActionGroup(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/masterData/causeOfActionGroup';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (q !== undefined) {
            requestContext.setQueryParam("q", ObjectSerializer.serialize(q, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'name'", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'asc' | 'desc'", ""));
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
     * Retrieve the specified charge. 
     * Charge Object for the given chargeId.
     * @param chargeId The chargeId value of the desired charge.
     */
    public async getCharge(chargeId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'chargeId' is not null or undefined
        if (chargeId === null || chargeId === undefined) {
            throw new RequiredError("CourtStandardsAPIApi", "getCharge", "chargeId");
        }


        // Path Params
        const localVarPath = '/masterData/charge/{chargeId}'
            .replace('{' + 'chargeId' + '}', encodeURIComponent(String(chargeId)));

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
     * Retrieve the specified charge additional data. 
     * Charge Additional Data Object for the given chargeAdditionalDataId.
     * @param chargeAdditionalDataId The chargeAdditionalDataId value of the desired charge additional data.
     */
    public async getChargeAdditionalData(chargeAdditionalDataId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'chargeAdditionalDataId' is not null or undefined
        if (chargeAdditionalDataId === null || chargeAdditionalDataId === undefined) {
            throw new RequiredError("CourtStandardsAPIApi", "getChargeAdditionalData", "chargeAdditionalDataId");
        }


        // Path Params
        const localVarPath = '/masterData/chargeAdditionalData/{chargeAdditionalDataId}'
            .replace('{' + 'chargeAdditionalDataId' + '}', encodeURIComponent(String(chargeAdditionalDataId)));

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
     * Retrieve the specified charge degree. 
     * ChargeDegree Object for the given chargeDegreeId.
     * @param chargeDegreeId The chargeDegreeId value of the desired charge degree.
     */
    public async getChargeDegree(chargeDegreeId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'chargeDegreeId' is not null or undefined
        if (chargeDegreeId === null || chargeDegreeId === undefined) {
            throw new RequiredError("CourtStandardsAPIApi", "getChargeDegree", "chargeDegreeId");
        }


        // Path Params
        const localVarPath = '/masterData/chargeDegree/{chargeDegreeId}'
            .replace('{' + 'chargeDegreeId' + '}', encodeURIComponent(String(chargeDegreeId)));

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
     * Retrieve the specified charge group. 
     * Charge Group Object for the given chargeGroupId.
     * @param chargeGroupId The chargeGroupId value of the desired charge group.
     */
    public async getChargeGroup(chargeGroupId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'chargeGroupId' is not null or undefined
        if (chargeGroupId === null || chargeGroupId === undefined) {
            throw new RequiredError("CourtStandardsAPIApi", "getChargeGroup", "chargeGroupId");
        }


        // Path Params
        const localVarPath = '/masterData/chargeGroup/{chargeGroupId}'
            .replace('{' + 'chargeGroupId' + '}', encodeURIComponent(String(chargeGroupId)));

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
     * Retrieve one or more charge groups using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> ChargeGroupQueryObject 
     * Charge Group Object.
     * @param q The keyword expression targeting the desired charge group.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public async getChargeGroups(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/masterData/chargeGroup';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (q !== undefined) {
            requestContext.setQueryParam("q", ObjectSerializer.serialize(q, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'name'", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'asc' | 'desc'", ""));
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
     * Retrieve the specified charge severity. 
     * ChargeSeverity Object for the given chargeSeverityId.
     * @param chargeSeverityId The chargeSeverityId value of the desired charge severity.
     */
    public async getChargeSeverity(chargeSeverityId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'chargeSeverityId' is not null or undefined
        if (chargeSeverityId === null || chargeSeverityId === undefined) {
            throw new RequiredError("CourtStandardsAPIApi", "getChargeSeverity", "chargeSeverityId");
        }


        // Path Params
        const localVarPath = '/masterData/chargeSeverity/{chargeSeverityId}'
            .replace('{' + 'chargeSeverityId' + '}', encodeURIComponent(String(chargeSeverityId)));

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
     * Retrieve one or more charges using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> ChargeQueryObject 
     * Charge Object.
     * @param q The keyword expression targeting the desired charge.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public async getCharges(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/masterData/charge';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (q !== undefined) {
            requestContext.setQueryParam("q", ObjectSerializer.serialize(q, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'name'", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'asc' | 'desc'", ""));
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
     * Retrieve additional information on a charge using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> ChargeAdditionalDataQueryObject 
     * Charge Additional Data Object.
     * @param q The keyword expression targeting the desired charge additional data.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public async getChargesAdditionalData(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/masterData/chargeAdditionalData';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (q !== undefined) {
            requestContext.setQueryParam("q", ObjectSerializer.serialize(q, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'name'", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'asc' | 'desc'", ""));
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
     * Retrieve a charge degree using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> ChargeDegreeQueryObject 
     * ChargeDegree Object.
     * @param q The keyword expression targeting the desired charge degree.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public async getChargesDegree(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/masterData/chargeDegree';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (q !== undefined) {
            requestContext.setQueryParam("q", ObjectSerializer.serialize(q, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'name'", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'asc' | 'desc'", ""));
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
     * Retrieve a charge severity using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> ChargeSeverityQueryObject 
     * ChargeSeverity Object.
     * @param q The keyword expression targeting the desired charge severity.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public async getChargesSeverity(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/masterData/chargeSeverity';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (q !== undefined) {
            requestContext.setQueryParam("q", ObjectSerializer.serialize(q, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'name'", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'asc' | 'desc'", ""));
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
     * Retrieve information about a specified court. 
     * Court Object for given courtId.
     * @param courtId The courtId value of the target court.
     */
    public async getCourt(courtId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'courtId' is not null or undefined
        if (courtId === null || courtId === undefined) {
            throw new RequiredError("CourtStandardsAPIApi", "getCourt", "courtId");
        }


        // Path Params
        const localVarPath = '/masterData/court/{courtId}'
            .replace('{' + 'courtId' + '}', encodeURIComponent(String(courtId)));

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
     * Contains the Court Location Object. 
     * Courthouse Object for given Court Location Id.
     * @param courtLocationId courtLocationId
     */
    public async getCourtLocation(courtLocationId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'courtLocationId' is not null or undefined
        if (courtLocationId === null || courtLocationId === undefined) {
            throw new RequiredError("CourtStandardsAPIApi", "getCourtLocation", "courtLocationId");
        }


        // Path Params
        const localVarPath = '/masterData/courtLocation/{courtLocationId}'
            .replace('{' + 'courtLocationId' + '}', encodeURIComponent(String(courtLocationId)));

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
     * Retrieve the specified court location or court locations.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CourtLocationQueryObject 
     * Courthouse Object.
     * @param q The keyword expression that sets forth the criteria concerning the court location or court locations to target. Keyword expressions should be constructed according to the rules shown above.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public async getCourtLocations(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/masterData/courtLocation';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (q !== undefined) {
            requestContext.setQueryParam("q", ObjectSerializer.serialize(q, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'name'", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'asc' | 'desc'", ""));
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
     * Retrieve the court locations associated with the specified court. 
     * Associated Court Location for given courtId.
     * @param courtId The courtId value of the target court.
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public async getCourtLocationsForCourt(courtId: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'courtId' is not null or undefined
        if (courtId === null || courtId === undefined) {
            throw new RequiredError("CourtStandardsAPIApi", "getCourtLocationsForCourt", "courtId");
        }





        // Path Params
        const localVarPath = '/masterData/court/{courtId}/courtLocations'
            .replace('{' + 'courtId' + '}', encodeURIComponent(String(courtId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'name'", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'asc' | 'desc'", ""));
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
     * Retrieve the court status of the specified court. 
     * Court Service Status Object for the given courtServiceStatusId.
     * @param courtServiceStatusId The courtServiceStatusId value of the desired court.
     */
    public async getCourtServiceStatus(courtServiceStatusId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'courtServiceStatusId' is not null or undefined
        if (courtServiceStatusId === null || courtServiceStatusId === undefined) {
            throw new RequiredError("CourtStandardsAPIApi", "getCourtServiceStatus", "courtServiceStatusId");
        }


        // Path Params
        const localVarPath = '/masterData/courtServiceStatus/{courtServiceStatusId}'
            .replace('{' + 'courtServiceStatusId' + '}', encodeURIComponent(String(courtServiceStatusId)));

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
     * Retrieve the specified court system. 
     * Court System Object for given courtSystemId.
     * @param courtSystemId The courtSystemId value of the court system to be retrieved.
     */
    public async getCourtSystem(courtSystemId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'courtSystemId' is not null or undefined
        if (courtSystemId === null || courtSystemId === undefined) {
            throw new RequiredError("CourtStandardsAPIApi", "getCourtSystem", "courtSystemId");
        }


        // Path Params
        const localVarPath = '/masterData/courtSystem/{courtSystemId}'
            .replace('{' + 'courtSystemId' + '}', encodeURIComponent(String(courtSystemId)));

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
     * Retrieve information about the specified court system or court systems.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------|         | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CourtSystemQueryObject 
     * Court System Objects.
     * @param q The keyword expression that sets forth the criteria concerning the court system or court systems. Keyword expressions should be constructed according to the rules shown above.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public async getCourtSystems(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/masterData/courtSystem';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (q !== undefined) {
            requestContext.setQueryParam("q", ObjectSerializer.serialize(q, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'name'", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'asc' | 'desc'", ""));
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
     * Retrieve the information concerning the specific court type. 
     * Court Type Object for given courtTypeId.
     * @param courtTypeId The courtTypeId value of the court type to be retrieved.
     */
    public async getCourtType(courtTypeId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'courtTypeId' is not null or undefined
        if (courtTypeId === null || courtTypeId === undefined) {
            throw new RequiredError("CourtStandardsAPIApi", "getCourtType", "courtTypeId");
        }


        // Path Params
        const localVarPath = '/masterData/courtType/{courtTypeId}'
            .replace('{' + 'courtTypeId' + '}', encodeURIComponent(String(courtTypeId)));

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
     * Retrieve court types recognized by UniCourt.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------|         | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CourtTypeQueryObject 
     * Court Type Objects.
     * @param q The keyword expression that sets forth the criteria concerning the court type or court types. Keyword expressions should be constructed according to the rules shown above.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public async getCourtTypes(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/masterData/courtType';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (q !== undefined) {
            requestContext.setQueryParam("q", ObjectSerializer.serialize(q, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'name'", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'asc' | 'desc'", ""));
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
     * Retrieve information about a specified court or courts.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------|         | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CourtQueryObject 
     * Court Objects.
     * @param q The keyword expression that sets forth the criteria concerning the court or courts to be retrieved. Keyword expressions should be constructed according to the rules shown above.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public async getCourts(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/masterData/court';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (q !== undefined) {
            requestContext.setQueryParam("q", ObjectSerializer.serialize(q, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'name'", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'asc' | 'desc'", ""));
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
     * Retrieve the courts associated with the specified court location. 
     * Associated Court for given Court Location.
     * @param courtLocationId The courtLocationId value of the court location for which courts are to be retrieved.
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public async getCourtsForCourtLocation(courtLocationId: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'courtLocationId' is not null or undefined
        if (courtLocationId === null || courtLocationId === undefined) {
            throw new RequiredError("CourtStandardsAPIApi", "getCourtsForCourtLocation", "courtLocationId");
        }





        // Path Params
        const localVarPath = '/masterData/courtLocation/{courtLocationId}/courts'
            .replace('{' + 'courtLocationId' + '}', encodeURIComponent(String(courtLocationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'name'", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'asc' | 'desc'", ""));
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
     * Returns Associated Court for given Jurisdiction Geo. 
     * Associated Court for given Jurisdiction Geo.
     * @param jurisdictionGeoId jurisdictionGeoId
     * @param pageNumber Page number. - minimum: 1 - maximum: 100 
     * @param sort Sort field.
     * @param order Sort order.
     */
    public async getCourtsForJurisdictionGeo(jurisdictionGeoId: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'jurisdictionGeoId' is not null or undefined
        if (jurisdictionGeoId === null || jurisdictionGeoId === undefined) {
            throw new RequiredError("CourtStandardsAPIApi", "getCourtsForJurisdictionGeo", "jurisdictionGeoId");
        }





        // Path Params
        const localVarPath = '/masterData/jurisdictionGeo/{jurisdictionGeoId}/courts'
            .replace('{' + 'jurisdictionGeoId' + '}', encodeURIComponent(String(jurisdictionGeoId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'name'", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'asc' | 'desc'", ""));
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
     * Retrieve the status of one or more courts using a keyword expression.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CourtServiceStatusQueryObject 
     * Court Service Status Object.
     * @param q The keyword expression targeting the desired court. Keyword expressions should be constructed according to the rules given above.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public async getCourtsServiceStatus(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/masterData/courtServiceStatus';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (q !== undefined) {
            requestContext.setQueryParam("q", ObjectSerializer.serialize(q, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'name'", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'asc' | 'desc'", ""));
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
     * Retrieve the specified judge type. 
     * Judge Type Object for the given judgeTypeId.
     * @param judgeTypeId The judgeTypeId of the desired judge type.
     */
    public async getJudgeType(judgeTypeId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'judgeTypeId' is not null or undefined
        if (judgeTypeId === null || judgeTypeId === undefined) {
            throw new RequiredError("CourtStandardsAPIApi", "getJudgeType", "judgeTypeId");
        }


        // Path Params
        const localVarPath = '/masterData/judgeType/{judgeTypeId}'
            .replace('{' + 'judgeTypeId' + '}', encodeURIComponent(String(judgeTypeId)));

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
     * Retrieve a judge type using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> JudgeTypeQueryObject 
     * Judge Type Object.
     * @param q The keyword expression targeting the judge type.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public async getJudgeTypes(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/masterData/judgeType';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (q !== undefined) {
            requestContext.setQueryParam("q", ObjectSerializer.serialize(q, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'name'", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'asc' | 'desc'", ""));
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
     * Retrieve the specified jurisdiction geography. 
     * Jurisdiction Geo Object for given Jurisdiction Geo Id.
     * @param jurisdictionGeoId The jurisdictionGeoId value of the desired jurisdiction geography.
     */
    public async getJurisdictionGeo(jurisdictionGeoId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'jurisdictionGeoId' is not null or undefined
        if (jurisdictionGeoId === null || jurisdictionGeoId === undefined) {
            throw new RequiredError("CourtStandardsAPIApi", "getJurisdictionGeo", "jurisdictionGeoId");
        }


        // Path Params
        const localVarPath = '/masterData/jurisdictionGeo/{jurisdictionGeoId}'
            .replace('{' + 'jurisdictionGeoId' + '}', encodeURIComponent(String(jurisdictionGeoId)));

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
     * Retrieve the jurisdiction geography object for the specified court. 
     * Jurisdiction Geo Objects for given courtId.
     * @param courtId The courtId value of the target court.
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public async getJurisdictionGeoForCourt(courtId: string, pageNumber?: number, sort?: 'state', order?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'courtId' is not null or undefined
        if (courtId === null || courtId === undefined) {
            throw new RequiredError("CourtStandardsAPIApi", "getJurisdictionGeoForCourt", "courtId");
        }





        // Path Params
        const localVarPath = '/masterData/court/{courtId}/jurisdictionGeo'
            .replace('{' + 'courtId' + '}', encodeURIComponent(String(courtId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'state'", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'asc' | 'desc'", ""));
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
     * Retrieve one or more jurisdiction geographies using a keyword expression.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> JurisdictionGeoQueryObject 
     * Jurisdiction Geo Object.
     * @param q The keyword expression targeting the desired jurisdiction geography. Keyword expressions should be constructed according to the rules given above.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public async getJurisdictionsGeo(q?: string, pageNumber?: number, sort?: 'state', order?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/masterData/jurisdictionGeo';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (q !== undefined) {
            requestContext.setQueryParam("q", ObjectSerializer.serialize(q, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'state'", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'asc' | 'desc'", ""));
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
     * Retrieve the specified party role. 
     * Party Role Object.
     * @param partyRoleId The partyRoleId value of the desired party role.
     */
    public async getPartyRole(partyRoleId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'partyRoleId' is not null or undefined
        if (partyRoleId === null || partyRoleId === undefined) {
            throw new RequiredError("CourtStandardsAPIApi", "getPartyRole", "partyRoleId");
        }


        // Path Params
        const localVarPath = '/masterData/partyRole/{partyRoleId}'
            .replace('{' + 'partyRoleId' + '}', encodeURIComponent(String(partyRoleId)));

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
     * Retrieve the specified party role group. 
     * Party Role Group Object.
     * @param partyRoleGroupId The partyRoleGroupId value of the desired party role group.
     */
    public async getPartyRoleGroup(partyRoleGroupId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'partyRoleGroupId' is not null or undefined
        if (partyRoleGroupId === null || partyRoleGroupId === undefined) {
            throw new RequiredError("CourtStandardsAPIApi", "getPartyRoleGroup", "partyRoleGroupId");
        }


        // Path Params
        const localVarPath = '/masterData/partyRoleGroup/{partyRoleGroupId}'
            .replace('{' + 'partyRoleGroupId' + '}', encodeURIComponent(String(partyRoleGroupId)));

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
     * Retrieve a party role group using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> PartyRoleGroupQueryObject 
     * Party Role Group Object.
     * @param q The keyword expression targeting the desired party role group.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public async getPartyRoleGroups(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/masterData/partyRoleGroup';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (q !== undefined) {
            requestContext.setQueryParam("q", ObjectSerializer.serialize(q, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'name'", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'asc' | 'desc'", ""));
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
     * Retrieve a party role using a keyword expression. Keyword expressions should be constructed according to the rules given above.  ## Logical Operators | Connector | Description  | Example | | ------| ------|------| | **AND** |Find data containing all connected terms.|**google AND facebook**| | **OR**  |Find data containing any connected term.| **order OR decision**| | **NOT** |Exclude data.| **google NOT apple**.| | **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** | | **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|  ### All Filter Query parameters supported for this API can be found in below schema section. Schema --> PartyRoleQueryObject 
     * Party Role Object.
     * @param q The keyword expression targeting the desired party role.&lt;/a&gt; 
     * @param pageNumber The page number of the results to be retrieved. - minimum: 1 - maximum: 100 
     * @param sort The field according to which search results are to be sorted.
     * @param order Whether search results are to be shown in ascending or descending order.
     */
    public async getPartyRoles(q?: string, pageNumber?: number, sort?: 'name', order?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/masterData/partyRole';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (q !== undefined) {
            requestContext.setQueryParam("q", ObjectSerializer.serialize(q, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'name'", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'asc' | 'desc'", ""));
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

export class CourtStandardsAPIApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAppealCourtsForCourt
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAppealCourtsForCourtWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCourts200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCourts200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCourts200Response", ""
            ) as GetCourts200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the request is invalid.", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the resource is not found.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCourts200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCourts200Response", ""
            ) as GetCourts200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAreaOfLaw
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAreaOfLawWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AreaOfLaw1 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AreaOfLaw1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AreaOfLaw1", ""
            ) as AreaOfLaw1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the resource is not found.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AreaOfLaw1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AreaOfLaw1", ""
            ) as AreaOfLaw1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAreasOfLaw
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAreasOfLawWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetAreasOfLaw200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetAreasOfLaw200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetAreasOfLaw200Response", ""
            ) as GetAreasOfLaw200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the request is invalid.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetAreasOfLaw200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetAreasOfLaw200Response", ""
            ) as GetAreasOfLaw200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAttorneyRepresentationType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAttorneyRepresentationTypeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AttorneyRepresentationType1 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AttorneyRepresentationType1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AttorneyRepresentationType1", ""
            ) as AttorneyRepresentationType1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the resource is not found.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AttorneyRepresentationType1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AttorneyRepresentationType1", ""
            ) as AttorneyRepresentationType1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAttorneyRepresentationTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAttorneyRepresentationTypesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetAttorneyRepresentationTypes200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetAttorneyRepresentationTypes200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetAttorneyRepresentationTypes200Response", ""
            ) as GetAttorneyRepresentationTypes200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the request is invalid.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetAttorneyRepresentationTypes200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetAttorneyRepresentationTypes200Response", ""
            ) as GetAttorneyRepresentationTypes200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAttorneyType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAttorneyTypeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AttorneyType1 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AttorneyType1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AttorneyType1", ""
            ) as AttorneyType1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the resource is not found.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AttorneyType1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AttorneyType1", ""
            ) as AttorneyType1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAttorneyTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAttorneyTypesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetAttorneyTypes200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetAttorneyTypes200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetAttorneyTypes200Response", ""
            ) as GetAttorneyTypes200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the request is invalid.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetAttorneyTypes200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetAttorneyTypes200Response", ""
            ) as GetAttorneyTypes200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCaseClass
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCaseClassWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CaseClass1 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CaseClass1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CaseClass1", ""
            ) as CaseClass1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the resource is not found.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CaseClass1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CaseClass1", ""
            ) as CaseClass1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCaseRelationshipType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCaseRelationshipTypeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CaseRelationshipType1 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CaseRelationshipType1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CaseRelationshipType1", ""
            ) as CaseRelationshipType1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the resource is not found.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CaseRelationshipType1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CaseRelationshipType1", ""
            ) as CaseRelationshipType1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCaseRelationshipTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCaseRelationshipTypesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCaseRelationshipTypes200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCaseRelationshipTypes200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCaseRelationshipTypes200Response", ""
            ) as GetCaseRelationshipTypes200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the request is invalid.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCaseRelationshipTypes200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCaseRelationshipTypes200Response", ""
            ) as GetCaseRelationshipTypes200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCaseStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCaseStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CaseStatus1 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CaseStatus1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CaseStatus1", ""
            ) as CaseStatus1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the resource is not found.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CaseStatus1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CaseStatus1", ""
            ) as CaseStatus1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCaseStatusGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCaseStatusGroupWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CaseStatusGroup1 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CaseStatusGroup1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CaseStatusGroup1", ""
            ) as CaseStatusGroup1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the resource is not found.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CaseStatusGroup1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CaseStatusGroup1", ""
            ) as CaseStatusGroup1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCaseStatusGroups
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCaseStatusGroupsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCaseStatusGroups200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCaseStatusGroups200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCaseStatusGroups200Response", ""
            ) as GetCaseStatusGroups200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the request is invalid.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCaseStatusGroups200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCaseStatusGroups200Response", ""
            ) as GetCaseStatusGroups200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCaseType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCaseTypeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CaseType1 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CaseType1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CaseType1", ""
            ) as CaseType1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the resource is not found.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CaseType1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CaseType1", ""
            ) as CaseType1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCaseTypeGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCaseTypeGroupWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CaseTypeGroup1 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CaseTypeGroup1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CaseTypeGroup1", ""
            ) as CaseTypeGroup1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the resource is not found.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CaseTypeGroup1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CaseTypeGroup1", ""
            ) as CaseTypeGroup1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCaseTypeGroups
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCaseTypeGroupsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCaseTypeGroups200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCaseTypeGroups200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCaseTypeGroups200Response", ""
            ) as GetCaseTypeGroups200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the request is invalid.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCaseTypeGroups200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCaseTypeGroups200Response", ""
            ) as GetCaseTypeGroups200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCaseTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCaseTypesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCaseTypes200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCaseTypes200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCaseTypes200Response", ""
            ) as GetCaseTypes200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the request is invalid.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCaseTypes200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCaseTypes200Response", ""
            ) as GetCaseTypes200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCasesClass
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCasesClassWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCasesClass200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCasesClass200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCasesClass200Response", ""
            ) as GetCasesClass200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the request is invalid.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCasesClass200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCasesClass200Response", ""
            ) as GetCasesClass200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCasesStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCasesStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCasesStatus200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCasesStatus200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCasesStatus200Response", ""
            ) as GetCasesStatus200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the request is invalid.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCasesStatus200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCasesStatus200Response", ""
            ) as GetCasesStatus200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCauseOfAction
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCauseOfActionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CauseOfAction1 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CauseOfAction1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CauseOfAction1", ""
            ) as CauseOfAction1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the resource is not found.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CauseOfAction1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CauseOfAction1", ""
            ) as CauseOfAction1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCauseOfActionAdditionalData
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCauseOfActionAdditionalDataWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CauseOfActionAdditionalData1 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CauseOfActionAdditionalData1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CauseOfActionAdditionalData1", ""
            ) as CauseOfActionAdditionalData1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the resource is not found.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CauseOfActionAdditionalData1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CauseOfActionAdditionalData1", ""
            ) as CauseOfActionAdditionalData1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCauseOfActionGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCauseOfActionGroupWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CauseOfActionGroup1 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CauseOfActionGroup1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CauseOfActionGroup1", ""
            ) as CauseOfActionGroup1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the resource is not found.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CauseOfActionGroup1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CauseOfActionGroup1", ""
            ) as CauseOfActionGroup1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCausesOfAction
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCausesOfActionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCausesOfAction200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCausesOfAction200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCausesOfAction200Response", ""
            ) as GetCausesOfAction200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the request is invalid.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCausesOfAction200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCausesOfAction200Response", ""
            ) as GetCausesOfAction200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCausesOfActionAdditionalData
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCausesOfActionAdditionalDataWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCausesOfActionAdditionalData200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCausesOfActionAdditionalData200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCausesOfActionAdditionalData200Response", ""
            ) as GetCausesOfActionAdditionalData200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the request is invalid.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCausesOfActionAdditionalData200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCausesOfActionAdditionalData200Response", ""
            ) as GetCausesOfActionAdditionalData200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCausesOfActionGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCausesOfActionGroupWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCausesOfActionGroup200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCausesOfActionGroup200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCausesOfActionGroup200Response", ""
            ) as GetCausesOfActionGroup200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the request is invalid.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCausesOfActionGroup200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCausesOfActionGroup200Response", ""
            ) as GetCausesOfActionGroup200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCharge
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getChargeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Charge1 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Charge1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Charge1", ""
            ) as Charge1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the resource is not found.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Charge1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Charge1", ""
            ) as Charge1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getChargeAdditionalData
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getChargeAdditionalDataWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ChargeAdditionalData1 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ChargeAdditionalData1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ChargeAdditionalData1", ""
            ) as ChargeAdditionalData1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the resource is not found.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ChargeAdditionalData1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ChargeAdditionalData1", ""
            ) as ChargeAdditionalData1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getChargeDegree
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getChargeDegreeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ChargeDegree1 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ChargeDegree1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ChargeDegree1", ""
            ) as ChargeDegree1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the resource is not found.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ChargeDegree1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ChargeDegree1", ""
            ) as ChargeDegree1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getChargeGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getChargeGroupWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ChargeGroup1 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ChargeGroup1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ChargeGroup1", ""
            ) as ChargeGroup1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the resource is not found.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ChargeGroup1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ChargeGroup1", ""
            ) as ChargeGroup1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getChargeGroups
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getChargeGroupsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetChargeGroups200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetChargeGroups200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetChargeGroups200Response", ""
            ) as GetChargeGroups200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the request is invalid.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetChargeGroups200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetChargeGroups200Response", ""
            ) as GetChargeGroups200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getChargeSeverity
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getChargeSeverityWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ChargeSeverity1 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ChargeSeverity1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ChargeSeverity1", ""
            ) as ChargeSeverity1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the resource is not found.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ChargeSeverity1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ChargeSeverity1", ""
            ) as ChargeSeverity1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCharges
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getChargesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCharges200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCharges200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCharges200Response", ""
            ) as GetCharges200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the request is invalid.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCharges200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCharges200Response", ""
            ) as GetCharges200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getChargesAdditionalData
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getChargesAdditionalDataWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetChargesAdditionalData200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetChargesAdditionalData200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetChargesAdditionalData200Response", ""
            ) as GetChargesAdditionalData200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the request is invalid.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetChargesAdditionalData200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetChargesAdditionalData200Response", ""
            ) as GetChargesAdditionalData200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getChargesDegree
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getChargesDegreeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetChargesDegree200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetChargesDegree200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetChargesDegree200Response", ""
            ) as GetChargesDegree200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the request is invalid.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetChargesDegree200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetChargesDegree200Response", ""
            ) as GetChargesDegree200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getChargesSeverity
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getChargesSeverityWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetChargesSeverity200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetChargesSeverity200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetChargesSeverity200Response", ""
            ) as GetChargesSeverity200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the request is invalid.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetChargesSeverity200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetChargesSeverity200Response", ""
            ) as GetChargesSeverity200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCourt
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCourtWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Court1 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Court1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Court1", ""
            ) as Court1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the resource is not found.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Court1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Court1", ""
            ) as Court1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCourtLocation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCourtLocationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CourtLocation1 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CourtLocation1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CourtLocation1", ""
            ) as CourtLocation1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the resource is not found.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CourtLocation1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CourtLocation1", ""
            ) as CourtLocation1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCourtLocations
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCourtLocationsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CourtLocationResponse1 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CourtLocationResponse1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CourtLocationResponse1", ""
            ) as CourtLocationResponse1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the request is invalid.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CourtLocationResponse1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CourtLocationResponse1", ""
            ) as CourtLocationResponse1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCourtLocationsForCourt
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCourtLocationsForCourtWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CourtLocationResponse1 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CourtLocationResponse1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CourtLocationResponse1", ""
            ) as CourtLocationResponse1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the request is invalid.", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the resource is not found.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CourtLocationResponse1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CourtLocationResponse1", ""
            ) as CourtLocationResponse1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCourtServiceStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCourtServiceStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner", ""
            ) as GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the resource is not found.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner", ""
            ) as GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCourtSystem
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCourtSystemWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CourtSystem1 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CourtSystem1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CourtSystem1", ""
            ) as CourtSystem1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the resource is not found.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CourtSystem1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CourtSystem1", ""
            ) as CourtSystem1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCourtSystems
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCourtSystemsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCourtSystems200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCourtSystems200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCourtSystems200Response", ""
            ) as GetCourtSystems200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the request is invalid.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCourtSystems200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCourtSystems200Response", ""
            ) as GetCourtSystems200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCourtType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCourtTypeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CourtType1 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CourtType1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CourtType1", ""
            ) as CourtType1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the resource is not found.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CourtType1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CourtType1", ""
            ) as CourtType1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCourtTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCourtTypesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCourtTypes200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCourtTypes200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCourtTypes200Response", ""
            ) as GetCourtTypes200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the request is invalid.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCourtTypes200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCourtTypes200Response", ""
            ) as GetCourtTypes200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCourts
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCourtsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCourts200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCourts200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCourts200Response", ""
            ) as GetCourts200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the request is invalid.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCourts200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCourts200Response", ""
            ) as GetCourts200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCourtsForCourtLocation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCourtsForCourtLocationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCourts200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCourts200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCourts200Response", ""
            ) as GetCourts200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the request is invalid.", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the resource is not found.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCourts200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCourts200Response", ""
            ) as GetCourts200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCourtsForJurisdictionGeo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCourtsForJurisdictionGeoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCourts200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCourts200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCourts200Response", ""
            ) as GetCourts200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the request is invalid.", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the resource is not found.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCourts200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCourts200Response", ""
            ) as GetCourts200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCourtsServiceStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCourtsServiceStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCourtsServiceStatus200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCourtsServiceStatus200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCourtsServiceStatus200Response", ""
            ) as GetCourtsServiceStatus200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the request is invalid.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCourtsServiceStatus200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCourtsServiceStatus200Response", ""
            ) as GetCourtsServiceStatus200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getJudgeType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getJudgeTypeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<JudgeType1 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: JudgeType1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JudgeType1", ""
            ) as JudgeType1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the resource is not found.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: JudgeType1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JudgeType1", ""
            ) as JudgeType1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getJudgeTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getJudgeTypesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetJudgeTypes200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetJudgeTypes200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetJudgeTypes200Response", ""
            ) as GetJudgeTypes200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the request is invalid.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetJudgeTypes200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetJudgeTypes200Response", ""
            ) as GetJudgeTypes200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getJurisdictionGeo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getJurisdictionGeoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<JurisdictionGeo1 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: JurisdictionGeo1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JurisdictionGeo1", ""
            ) as JurisdictionGeo1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the resource is not found.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: JurisdictionGeo1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JurisdictionGeo1", ""
            ) as JurisdictionGeo1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getJurisdictionGeoForCourt
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getJurisdictionGeoForCourtWithHttpInfo(response: ResponseContext): Promise<HttpInfo<JurisdictionGeoResponse1 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: JurisdictionGeoResponse1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JurisdictionGeoResponse1", ""
            ) as JurisdictionGeoResponse1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the request is invalid.", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the resource is not found.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: JurisdictionGeoResponse1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JurisdictionGeoResponse1", ""
            ) as JurisdictionGeoResponse1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getJurisdictionsGeo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getJurisdictionsGeoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<JurisdictionGeoResponse1 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: JurisdictionGeoResponse1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JurisdictionGeoResponse1", ""
            ) as JurisdictionGeoResponse1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the request is invalid.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: JurisdictionGeoResponse1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JurisdictionGeoResponse1", ""
            ) as JurisdictionGeoResponse1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPartyRole
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPartyRoleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PartyRole1 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PartyRole1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PartyRole1", ""
            ) as PartyRole1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the resource is not found.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PartyRole1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PartyRole1", ""
            ) as PartyRole1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPartyRoleGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPartyRoleGroupWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PartyRoleGroup1 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PartyRoleGroup1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PartyRoleGroup1", ""
            ) as PartyRoleGroup1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the resource is not found.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PartyRoleGroup1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PartyRoleGroup1", ""
            ) as PartyRoleGroup1;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPartyRoleGroups
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPartyRoleGroupsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetPartyRoleGroups200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetPartyRoleGroups200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetPartyRoleGroups200Response", ""
            ) as GetPartyRoleGroups200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the request is invalid.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetPartyRoleGroups200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetPartyRoleGroups200Response", ""
            ) as GetPartyRoleGroups200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPartyRoles
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPartyRolesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetPartyRoles200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetPartyRoles200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetPartyRoles200Response", ""
            ) as GetPartyRoles200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Exception1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Exception1", ""
            ) as Exception1;
            throw new ApiException<Exception1>(response.httpStatusCode, "Returned if the request is invalid.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetPartyRoles200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetPartyRoles200Response", ""
            ) as GetPartyRoles200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

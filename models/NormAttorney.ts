/**
 * UniCourt Enterprise APIs
 * <button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button> 
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AttorneyAnalyticsAPI1 } from '../models/AttorneyAnalyticsAPI1';
import { BarRecord1 } from '../models/BarRecord1';
import { CaseAnalyticsAPI1 } from '../models/CaseAnalyticsAPI1';
import { SimilarNormAttorney1 } from '../models/SimilarNormAttorney1';
import { HttpFile } from '../http/http';

/**
* Norm Attorney
*/
export class NormAttorney {
    'object': string;
    'normAttorneyId': string;
    'name': string;
    'firstName': string;
    'middleName': string | null;
    'lastName': string;
    'caseSearchAPI': string;
    'caseAnalyticsAPI': CaseAnalyticsAPI1;
    'hasAssociatedPublicData': boolean;
    'barRecordArray': Array<BarRecord1>;
    'attorneyAnalyticsAPI': AttorneyAnalyticsAPI1;
    'similarNormAttorneyArray': Array<SimilarNormAttorney1>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "normAttorneyId",
            "baseName": "normAttorneyId",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "middleName",
            "baseName": "middleName",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseSearchAPI",
            "baseName": "caseSearchAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseAnalyticsAPI",
            "baseName": "caseAnalyticsAPI",
            "type": "CaseAnalyticsAPI1",
            "format": ""
        },
        {
            "name": "hasAssociatedPublicData",
            "baseName": "hasAssociatedPublicData",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "barRecordArray",
            "baseName": "barRecordArray",
            "type": "Array<BarRecord1>",
            "format": ""
        },
        {
            "name": "attorneyAnalyticsAPI",
            "baseName": "attorneyAnalyticsAPI",
            "type": "AttorneyAnalyticsAPI1",
            "format": ""
        },
        {
            "name": "similarNormAttorneyArray",
            "baseName": "similarNormAttorneyArray",
            "type": "Array<SimilarNormAttorney1>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NormAttorney.attributeTypeMap;
    }

    public constructor() {
    }
}


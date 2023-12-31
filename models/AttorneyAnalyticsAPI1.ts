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

import { HttpFile } from '../http/http';

export class AttorneyAnalyticsAPI1 {
    'object': string;
    /**
    * Link to Details for the Attorney.
    */
    'normAttorneyAPI': string;
    'associatedNormJudgesAPI': string;
    'associatedNormLawFirmsAPI': string;
    'associatedNormPartiesAPI': string;
    'caseCountAnalyticsByOpposingNormAttorneyAPI': string;
    'caseCountAnalyticsByOpposingNormLawFirmAPI': string | null;
    'caseCountAnalyticsByOpposingNormPartyAPI': string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "normAttorneyAPI",
            "baseName": "normAttorneyAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "associatedNormJudgesAPI",
            "baseName": "associatedNormJudgesAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "associatedNormLawFirmsAPI",
            "baseName": "associatedNormLawFirmsAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "associatedNormPartiesAPI",
            "baseName": "associatedNormPartiesAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseCountAnalyticsByOpposingNormAttorneyAPI",
            "baseName": "caseCountAnalyticsByOpposingNormAttorneyAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseCountAnalyticsByOpposingNormLawFirmAPI",
            "baseName": "caseCountAnalyticsByOpposingNormLawFirmAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseCountAnalyticsByOpposingNormPartyAPI",
            "baseName": "caseCountAnalyticsByOpposingNormPartyAPI",
            "type": "string",
            "format": "uri"
        }    ];

    static getAttributeTypeMap() {
        return AttorneyAnalyticsAPI1.attributeTypeMap;
    }

    public constructor() {
    }
}


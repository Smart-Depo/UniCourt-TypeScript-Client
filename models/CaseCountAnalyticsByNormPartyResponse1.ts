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

import { CaseCountAnalyticsByNormParty1 } from '../models/CaseCountAnalyticsByNormParty1';
import { HttpFile } from '../http/http';

export class CaseCountAnalyticsByNormPartyResponse1 {
    'object': string;
    'results': Array<CaseCountAnalyticsByNormParty1>;
    /**
    * Next page of results if applicable.
    */
    'nextPageAPI': string | null;
    /**
    * Link to previous page of results.
    */
    'previousPageAPI': string | null;
    /**
    * Total no. of pages.
    */
    'totalPages': number;
    /**
    * Total no. of Cases for this criteria.
    */
    'totalCaseCount': number;
    /**
    * Total no. of NormParty for this criteria.
    */
    'totalNormPartyCount': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<CaseCountAnalyticsByNormParty1>",
            "format": ""
        },
        {
            "name": "nextPageAPI",
            "baseName": "nextPageAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "previousPageAPI",
            "baseName": "previousPageAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "totalPages",
            "baseName": "totalPages",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalCaseCount",
            "baseName": "totalCaseCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalNormPartyCount",
            "baseName": "totalNormPartyCount",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CaseCountAnalyticsByNormPartyResponse1.attributeTypeMap;
    }

    public constructor() {
    }
}


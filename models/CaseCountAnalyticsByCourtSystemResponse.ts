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

import { CaseCountAnalyticsByCourtSystem1 } from '../models/CaseCountAnalyticsByCourtSystem1';
import { HttpFile } from '../http/http';

/**
* Case Counts by Court System.
*/
export class CaseCountAnalyticsByCourtSystemResponse {
    'object': string;
    /**
    * Next page of results if applicable.
    */
    'nextPageAPI': string | null;
    /**
    * Link to previous page of results.
    */
    'previousPageAPI': string | null;
    'results': Array<CaseCountAnalyticsByCourtSystem1>;
    /**
    * Total no. of pages.
    */
    'totalPages': number;
    /**
    * Total no. of Cases for this criteria.
    */
    'totalCaseCount': number;
    /**
    * Total no. of Court System for this criteria.
    */
    'totalCourtSystemCount': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
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
            "name": "results",
            "baseName": "results",
            "type": "Array<CaseCountAnalyticsByCourtSystem1>",
            "format": ""
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
            "name": "totalCourtSystemCount",
            "baseName": "totalCourtSystemCount",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CaseCountAnalyticsByCourtSystemResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


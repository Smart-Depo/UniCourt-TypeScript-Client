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

import { CaseCountAnalyticsByCourt1 } from '../models/CaseCountAnalyticsByCourt1';
import { HttpFile } from '../http/http';

/**
* Case Counts by Court.
*/
export class CaseCountAnalyticsByCourtResponse1 {
    'object': string;
    /**
    * Next page of results if applicable.
    */
    'nextPageAPI': string | null;
    /**
    * Link to previous page of results.
    */
    'previousPageAPI': string | null;
    'results': Array<CaseCountAnalyticsByCourt1>;
    /**
    * Total no. of pages.
    */
    'totalPages': number;
    /**
    * Total no. of Cases for this criteria.
    */
    'totalCaseCount': number;
    /**
    * Total no. of Court for this criteria.
    */
    'totalCourtCount': number;

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
            "type": "Array<CaseCountAnalyticsByCourt1>",
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
            "name": "totalCourtCount",
            "baseName": "totalCourtCount",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CaseCountAnalyticsByCourtResponse1.attributeTypeMap;
    }

    public constructor() {
    }
}


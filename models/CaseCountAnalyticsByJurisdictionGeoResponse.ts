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

import { CaseCountAnalyticsByJurisdictionGeo1 } from '../models/CaseCountAnalyticsByJurisdictionGeo1';
import { HttpFile } from '../http/http';

/**
* Case Counts by Juridiction Geo Response.
*/
export class CaseCountAnalyticsByJurisdictionGeoResponse {
    'object': string;
    /**
    * Next page of results if applicable.
    */
    'nextPageAPI': string | null;
    /**
    * Link to previous page of results.
    */
    'previousPageAPI': string | null;
    'results': Array<CaseCountAnalyticsByJurisdictionGeo1>;
    /**
    * Total no. of pages.
    */
    'totalPages': number;
    /**
    * Total no. of Cases for this criteria.
    */
    'totalCaseCount': number;
    /**
    * Total no. of Jurisdiction for this criteria.
    */
    'totalJurisdictionGeoCount': number;

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
            "type": "Array<CaseCountAnalyticsByJurisdictionGeo1>",
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
            "name": "totalJurisdictionGeoCount",
            "baseName": "totalJurisdictionGeoCount",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CaseCountAnalyticsByJurisdictionGeoResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


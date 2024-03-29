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

import { GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceData } from '../models/GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceData';
import { HttpFile } from '../http/http';

/**
* Source data from different pages in the court website.
*/
export class GetCase200ResponseSourceCaseDataSourcePageDataInner {
    /**
    * Name of the object
    */
    'object': string;
    /**
    * Pages supported for PACER pacerCaseQuery, pacerDocketReport, pacerCaseSummary, pacerAssociatedCases, pacerCaseLocatorResults, hearing, relatedCases.
    */
    'pageName': string;
    'additionalSourceData': GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceData | null;
    /**
    * When was the page first fetched from the court site.
    */
    'firstFetchDate': string;
    /**
    * When was the page last fetched from the court site.
    */
    'lastFetchDate': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "pageName",
            "baseName": "pageName",
            "type": "string",
            "format": ""
        },
        {
            "name": "additionalSourceData",
            "baseName": "additionalSourceData",
            "type": "GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceData",
            "format": ""
        },
        {
            "name": "firstFetchDate",
            "baseName": "firstFetchDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastFetchDate",
            "baseName": "lastFetchDate",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetCase200ResponseSourceCaseDataSourcePageDataInner.attributeTypeMap;
    }

    public constructor() {
    }
}


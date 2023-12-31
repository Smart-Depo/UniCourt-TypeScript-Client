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

export class AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerPageInfo {
    /**
    * Name of the object
    */
    'object': string;
    /**
    * Current Page number.
    */
    'number': number;
    /**
    * Number of results obtained in a page..
    */
    'size': number;
    /**
    * Total pages of data available.
    */
    'totalPages': number;
    /**
    * Total number of records available
    */
    'totalElements': number;
    /**
    * Number of records returned.
    */
    'numberOfElements': number;
    /**
    * Indicates if the current page is the first page.
    */
    'first': boolean;
    /**
    * Indicates if the current page is the last page.
    */
    'last': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "number",
            "format": ""
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalPages",
            "baseName": "totalPages",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalElements",
            "baseName": "totalElements",
            "type": "number",
            "format": ""
        },
        {
            "name": "numberOfElements",
            "baseName": "numberOfElements",
            "type": "number",
            "format": ""
        },
        {
            "name": "first",
            "baseName": "first",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "last",
            "baseName": "last",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerPageInfo.attributeTypeMap;
    }

    public constructor() {
    }
}


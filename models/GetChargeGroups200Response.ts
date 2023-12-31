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

import { ChargeGroup1 } from '../models/ChargeGroup1';
import { HttpFile } from '../http/http';

export class GetChargeGroups200Response {
    'object': string;
    'chargeGroupArray': Array<ChargeGroup1>;
    /**
    * Link to next page.
    */
    'nextPageAPI': string | null;
    /**
    * Link to previous page.
    */
    'previousPageAPI': string | null;
    /**
    * Page number for which results where obtained.
    */
    'pageNumber': number;
    /**
    * Total number of pages to obtain all the objects.
    */
    'totalPages': number;
    /**
    * Total number of matches found.
    */
    'totalCount': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "chargeGroupArray",
            "baseName": "chargeGroupArray",
            "type": "Array<ChargeGroup1>",
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
            "name": "pageNumber",
            "baseName": "pageNumber",
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
            "name": "totalCount",
            "baseName": "totalCount",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetChargeGroups200Response.attributeTypeMap;
    }

    public constructor() {
    }
}


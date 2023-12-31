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

import { AssociatedNormJudge1 } from '../models/AssociatedNormJudge1';
import { HttpFile } from '../http/http';

export class AssociatedNormJudgeResponse {
    'associatedNormJudgeArray': Array<AssociatedNormJudge1>;
    /**
    * Next page of results if applicable.
    */
    'nextPageAPI': string | null;
    /**
    * Previous page of results if applicable.
    */
    'previousPageAPI': string | null;
    /**
    * Total no. of pages.
    */
    'totalPages': number;
    /**
    * Total no. of results for this criteria.
    */
    'totalCount': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "associatedNormJudgeArray",
            "baseName": "associatedNormJudgeArray",
            "type": "Array<AssociatedNormJudge1>",
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
            "name": "totalCount",
            "baseName": "totalCount",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AssociatedNormJudgeResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


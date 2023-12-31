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

export class BarSourceData1RelatedCasesArrayInner {
    'caseId': string | null;
    'caseDetails': string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "caseId",
            "baseName": "caseId",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseDetails",
            "baseName": "caseDetails",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BarSourceData1RelatedCasesArrayInner.attributeTypeMap;
    }

    public constructor() {
    }
}

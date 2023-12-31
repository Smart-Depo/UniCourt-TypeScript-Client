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

import { CaseTypeGroup1 } from '../models/CaseTypeGroup1';
import { HttpFile } from '../http/http';

export class CaseCountAnalyticsByCaseTypeGroup1 {
    'object': string;
    'caseCount': number;
    /**
    * Link to cases for this criteria.
    */
    'caseSearchAPI': string;
    'caseTypeGroup': CaseTypeGroup1;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseCount",
            "baseName": "caseCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "caseSearchAPI",
            "baseName": "caseSearchAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseTypeGroup",
            "baseName": "caseTypeGroup",
            "type": "CaseTypeGroup1",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CaseCountAnalyticsByCaseTypeGroup1.attributeTypeMap;
    }

    public constructor() {
    }
}

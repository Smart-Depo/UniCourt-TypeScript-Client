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

import { CaseCountAnalyticsByCourt1Geo } from '../models/CaseCountAnalyticsByCourt1Geo';
import { CourtSystem1 } from '../models/CourtSystem1';
import { HttpFile } from '../http/http';

export class CaseCountAnalyticsByCourtSystem {
    'object': string;
    'caseCount': number;
    /**
    * link to cases for this criteria.
    */
    'caseSearchAPI': string;
    'courtSystem': CourtSystem1;
    'geo': CaseCountAnalyticsByCourt1Geo | null;

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
            "name": "courtSystem",
            "baseName": "courtSystem",
            "type": "CourtSystem1",
            "format": ""
        },
        {
            "name": "geo",
            "baseName": "Geo",
            "type": "CaseCountAnalyticsByCourt1Geo",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CaseCountAnalyticsByCourtSystem.attributeTypeMap;
    }

    public constructor() {
    }
}


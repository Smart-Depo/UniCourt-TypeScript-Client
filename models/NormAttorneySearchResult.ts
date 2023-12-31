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

import { CaseSearchResult1MatchedObjectArrayInner } from '../models/CaseSearchResult1MatchedObjectArrayInner';
import { HttpFile } from '../http/http';

export class NormAttorneySearchResult {
    'object': string;
    'normAttorneyId': string;
    'name': string;
    'firstFetchDate': Date;
    'lastFetchDate': Date;
    'hasAssociatedPublicData': boolean;
    'normAttorneyDetailsAPI': string;
    'matchedObjectArray': Array<CaseSearchResult1MatchedObjectArrayInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "normAttorneyId",
            "baseName": "normAttorneyId",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "firstFetchDate",
            "baseName": "firstFetchDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lastFetchDate",
            "baseName": "lastFetchDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "hasAssociatedPublicData",
            "baseName": "hasAssociatedPublicData",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "normAttorneyDetailsAPI",
            "baseName": "normAttorneyDetailsAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "matchedObjectArray",
            "baseName": "matchedObjectArray",
            "type": "Array<CaseSearchResult1MatchedObjectArrayInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NormAttorneySearchResult.attributeTypeMap;
    }

    public constructor() {
    }
}


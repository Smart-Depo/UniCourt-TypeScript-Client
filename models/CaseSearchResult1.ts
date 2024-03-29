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
import { CaseStatus1 } from '../models/CaseStatus1';
import { CaseType1 } from '../models/CaseType1';
import { Court1 } from '../models/Court1';
import { CourtLocation1 } from '../models/CourtLocation1';
import { HttpFile } from '../http/http';

export class CaseSearchResult1 {
    'object': string;
    'caseId': string;
    'caseName': string | null;
    'caseNumber': string;
    'filedDate': Date;
    'court': Court1 | null;
    'courtLocation': CourtLocation1 | null;
    'caseType': CaseType1 | null;
    'caseStatus': CaseStatus1 | null;
    'firstFetchDate': Date;
    'lastFetchDate': Date;
    'lastFetchDateWithUpdates': Date;
    'participantsLastFetchDate': Date | null;
    'caseAPI': string;
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
            "name": "caseId",
            "baseName": "caseId",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseName",
            "baseName": "caseName",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseNumber",
            "baseName": "caseNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "filedDate",
            "baseName": "filedDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "court",
            "baseName": "court",
            "type": "Court1",
            "format": ""
        },
        {
            "name": "courtLocation",
            "baseName": "courtLocation",
            "type": "CourtLocation1",
            "format": ""
        },
        {
            "name": "caseType",
            "baseName": "caseType",
            "type": "CaseType1",
            "format": ""
        },
        {
            "name": "caseStatus",
            "baseName": "caseStatus",
            "type": "CaseStatus1",
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
            "name": "lastFetchDateWithUpdates",
            "baseName": "lastFetchDateWithUpdates",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "participantsLastFetchDate",
            "baseName": "participantsLastFetchDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "caseAPI",
            "baseName": "caseAPI",
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
        return CaseSearchResult1.attributeTypeMap;
    }

    public constructor() {
    }
}


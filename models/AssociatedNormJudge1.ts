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

import { CaseTimeline1 } from '../models/CaseTimeline1';
import { HttpFile } from '../http/http';

/**
* Associated Judge
*/
export class AssociatedNormJudge1 {
    'object': string;
    'normJudgeId': string;
    /**
    * Link to Details from the Judge.
    */
    'normJudgeAPI': string;
    'caseTimeline': CaseTimeline1;
    'name': string;
    'firstName': string;
    'middleName': string | null;
    'lastName': string;
    /**
    * Link to related cases for this association.
    */
    'caseSearchAPI': string;
    'caseCount': number;
    'version': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "normJudgeId",
            "baseName": "normJudgeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "normJudgeAPI",
            "baseName": "normJudgeAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseTimeline",
            "baseName": "caseTimeline",
            "type": "CaseTimeline1",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "middleName",
            "baseName": "middleName",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseSearchAPI",
            "baseName": "caseSearchAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseCount",
            "baseName": "caseCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AssociatedNormJudge1.attributeTypeMap;
    }

    public constructor() {
    }
}

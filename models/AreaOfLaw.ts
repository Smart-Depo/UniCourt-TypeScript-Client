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

export class AreaOfLaw {
    'object': string;
    'areaOfLawId': string;
    'caseClassId': string;
    'caseClass': string;
    'name': string;
    /**
    * The date and time when it was first created. This date and time is in UTC. Formatted as YYYY-MM-DD HH:MM:SS.
    */
    'createdDate': Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "areaOfLawId",
            "baseName": "areaOfLawId",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseClassId",
            "baseName": "caseClassId",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseClass",
            "baseName": "caseClass",
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
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return AreaOfLaw.attributeTypeMap;
    }

    public constructor() {
    }
}


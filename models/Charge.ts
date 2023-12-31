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

export class Charge {
    'object': string;
    'chargeId': string;
    'chargeGroupId': string;
    'chargeGroup': string;
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
            "name": "chargeId",
            "baseName": "chargeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "chargeGroupId",
            "baseName": "chargeGroupId",
            "type": "string",
            "format": ""
        },
        {
            "name": "chargeGroup",
            "baseName": "chargeGroup",
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
        return Charge.attributeTypeMap;
    }

    public constructor() {
    }
}


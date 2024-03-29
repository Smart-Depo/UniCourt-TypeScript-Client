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

export class Schedule {
    /**
    * Name of the object.
    */
    'object': string;
    'type': ScheduleTypeEnum;
    /**
    * [] -> if schedule type is daily <br> 1-7 -> if schedule type is weekly <br> 1-31 -> if schedule type is monthly 
    */
    'days': Array<number>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ScheduleTypeEnum",
            "format": ""
        },
        {
            "name": "days",
            "baseName": "days",
            "type": "Array<number>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Schedule.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum ScheduleTypeEnum {
    Daily = 'daily',
    Weekly = 'weekly',
    Monthly = 'monthly'
}


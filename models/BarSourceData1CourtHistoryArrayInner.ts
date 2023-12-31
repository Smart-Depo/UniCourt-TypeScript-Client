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

export class BarSourceData1CourtHistoryArrayInner {
    'action': string | null;
    'actionComments': string | null;
    'reinstatedDate': Date | null;
    'startDate': Date | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "string",
            "format": ""
        },
        {
            "name": "actionComments",
            "baseName": "actionComments",
            "type": "string",
            "format": ""
        },
        {
            "name": "reinstatedDate",
            "baseName": "reinstatedDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return BarSourceData1CourtHistoryArrayInner.attributeTypeMap;
    }

    public constructor() {
    }
}


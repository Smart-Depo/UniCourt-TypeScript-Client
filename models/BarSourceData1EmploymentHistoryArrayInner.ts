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

export class BarSourceData1EmploymentHistoryArrayInner {
    'employer': string | null;
    'endDate': Date | null;
    'startDate': Date | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "employer",
            "baseName": "employer",
            "type": "string",
            "format": ""
        },
        {
            "name": "endDate",
            "baseName": "endDate",
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
        return BarSourceData1EmploymentHistoryArrayInner.attributeTypeMap;
    }

    public constructor() {
    }
}


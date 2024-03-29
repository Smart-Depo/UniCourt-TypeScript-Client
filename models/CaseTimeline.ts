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

export class CaseTimeline {
    'object': string;
    /**
    * The first date when the two entities have appeared together in the case. (These dates are determined from case filed dates)
    */
    'firstCaseFiledDate': Date;
    /**
    * The last date when the two entities have appeared together in the case. (These dates are determined from case filed dates)
    */
    'lastCaseFiledDate': Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "firstCaseFiledDate",
            "baseName": "firstCaseFiledDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lastCaseFiledDate",
            "baseName": "lastCaseFiledDate",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return CaseTimeline.attributeTypeMap;
    }

    public constructor() {
    }
}


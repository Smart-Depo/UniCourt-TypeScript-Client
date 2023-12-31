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

import { CauseOfAction1 } from '../models/CauseOfAction1';
import { CauseOfActionAdditionalData1 } from '../models/CauseOfActionAdditionalData1';
import { HttpFile } from '../http/http';

export class GetCase200ResponseCauseOfActionArrayInner {
    /**
    * Name of the object
    */
    'object': string;
    'causeOfAction': CauseOfAction1 | null;
    'causeOfActionAdditionalDataArray': Array<CauseOfActionAdditionalData1>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "causeOfAction",
            "baseName": "causeOfAction",
            "type": "CauseOfAction1",
            "format": ""
        },
        {
            "name": "causeOfActionAdditionalDataArray",
            "baseName": "causeOfActionAdditionalDataArray",
            "type": "Array<CauseOfActionAdditionalData1>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetCase200ResponseCauseOfActionArrayInner.attributeTypeMap;
    }

    public constructor() {
    }
}


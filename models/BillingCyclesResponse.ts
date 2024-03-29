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

export class BillingCyclesResponse {
    /**
    * Name of the object.
    */
    'object': string;
    /**
    * Array of previous 12 Billing Cycles.
    */
    'billingCycleArray': Array<string> | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "billingCycleArray",
            "baseName": "billingCycleArray",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BillingCyclesResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


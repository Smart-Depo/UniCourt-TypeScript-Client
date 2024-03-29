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

import { Charge1 } from '../models/Charge1';
import { ChargeAdditionalData1 } from '../models/ChargeAdditionalData1';
import { ChargeDegree1 } from '../models/ChargeDegree1';
import { ChargeSeverity1 } from '../models/ChargeSeverity1';
import { HttpFile } from '../http/http';

export class GetCase200ResponseChargeArrayInner {
    /**
    * Name of the object
    */
    'object': string;
    'charge': Charge1 | null;
    'chargeDegree': ChargeDegree1 | null;
    'chargeSeverity': ChargeSeverity1 | null;
    'chargeAdditionalDataArray': Array<ChargeAdditionalData1>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "charge",
            "baseName": "charge",
            "type": "Charge1",
            "format": ""
        },
        {
            "name": "chargeDegree",
            "baseName": "chargeDegree",
            "type": "ChargeDegree1",
            "format": ""
        },
        {
            "name": "chargeSeverity",
            "baseName": "chargeSeverity",
            "type": "ChargeSeverity1",
            "format": ""
        },
        {
            "name": "chargeAdditionalDataArray",
            "baseName": "chargeAdditionalDataArray",
            "type": "Array<ChargeAdditionalData1>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetCase200ResponseChargeArrayInner.attributeTypeMap;
    }

    public constructor() {
    }
}


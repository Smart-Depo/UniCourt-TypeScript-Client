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

import { GetCase200ResponseSourceCaseDataSourceChargeArrayInnerSourceChargeAdditionalDataArrayInner } from '../models/GetCase200ResponseSourceCaseDataSourceChargeArrayInnerSourceChargeAdditionalDataArrayInner';
import { HttpFile } from '../http/http';

/**
* Source charge data from the source site.
*/
export class SourceCharge {
    /**
    * Name of the object
    */
    'object': string;
    /**
    * Raw charge data from the source site.
    */
    'sourceChargeRaw': string;
    /**
    * Charge data from the source site.
    */
    'sourceCharge': string | null;
    /**
    * Signifies if the charge is currently isVisible or not for the case.
    */
    'isVisible': boolean;
    /**
    * Statute of a charge.
    */
    'sourceStatute': string | null;
    /**
    * Charge degree data from the source site.
    */
    'sourceChargeDegree': string | null;
    /**
    * Charge severity data from the source site.
    */
    'sourceChargeSeverity': string | null;
    /**
    * Additional data related to the charge which is available in the source site.
    */
    'sourceChargeAdditionalDataArray': Array<GetCase200ResponseSourceCaseDataSourceChargeArrayInnerSourceChargeAdditionalDataArrayInner>;
    /**
    * When this charge was first fetched from the court site.
    */
    'firstFetchDate': string;
    /**
    * When this charge was last fetched from the court site.
    */
    'lastFetchDate': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceChargeRaw",
            "baseName": "sourceChargeRaw",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceCharge",
            "baseName": "sourceCharge",
            "type": "string",
            "format": ""
        },
        {
            "name": "isVisible",
            "baseName": "isVisible",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "sourceStatute",
            "baseName": "sourceStatute",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceChargeDegree",
            "baseName": "sourceChargeDegree",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceChargeSeverity",
            "baseName": "sourceChargeSeverity",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceChargeAdditionalDataArray",
            "baseName": "sourceChargeAdditionalDataArray",
            "type": "Array<GetCase200ResponseSourceCaseDataSourceChargeArrayInnerSourceChargeAdditionalDataArrayInner>",
            "format": ""
        },
        {
            "name": "firstFetchDate",
            "baseName": "firstFetchDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastFetchDate",
            "baseName": "lastFetchDate",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SourceCharge.attributeTypeMap;
    }

    public constructor() {
    }
}


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

/**
* Phone object data schema.
*/
export class Phone {
    'object': string;
    /**
    * Phone Number
    */
    'phoneNumber': string;
    /**
    * Resolved phone type (ideally from master data).
    */
    'phoneType': PhonePhoneTypeEnum;
    /**
    * Boolean indicating if the phone is visible or not.
    */
    'isVisible': boolean;
    /**
    * Date at which this record is created in UniCourt.
    */
    'firstFetchDate': Date;
    /**
    * Date at which this record was updated in UniCourt.
    */
    'lastFetchDate': Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "phoneType",
            "baseName": "phoneType",
            "type": "PhonePhoneTypeEnum",
            "format": ""
        },
        {
            "name": "isVisible",
            "baseName": "isVisible",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "firstFetchDate",
            "baseName": "firstFetchDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lastFetchDate",
            "baseName": "lastFetchDate",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return Phone.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum PhonePhoneTypeEnum {
    Default = 'DEFAULT',
    Office = 'OFFICE',
    Fax = 'FAX',
    Phone = 'PHONE'
}


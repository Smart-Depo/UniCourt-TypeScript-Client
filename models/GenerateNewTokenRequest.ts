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

export class GenerateNewTokenRequest {
    /**
    * Your Client ID obtainable by logging into your UniCourt account.
    */
    'clientId': string;
    /**
    * Your Client Secret ID obtainable by logging into your UniCourt account.
    */
    'clientSecret': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "clientId",
            "baseName": "clientId",
            "type": "string",
            "format": ""
        },
        {
            "name": "clientSecret",
            "baseName": "clientSecret",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GenerateNewTokenRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

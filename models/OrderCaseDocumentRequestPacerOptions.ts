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
* **Applicable for PACER cases.**
*/
export class OrderCaseDocumentRequestPacerOptions {
    /**
    * Your PACER credentials username. This is mandatory when a PACER Case is being requested in the API. For Non PACER cases this is not mandatory. Suppose your request consists of Non PACER and PACER Cases then this needs to be passed becuase you are requesting a PACER case too.
    */
    'pacerUserId': string;
    /**
    * PACER Client Code. This is mandatory if your setting in PACER website is set to True for required client code.
    */
    'pacerClientCode'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pacerUserId",
            "baseName": "pacerUserId",
            "type": "string",
            "format": ""
        },
        {
            "name": "pacerClientCode",
            "baseName": "pacerClientCode",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OrderCaseDocumentRequestPacerOptions.attributeTypeMap;
    }

    public constructor() {
    }
}


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

import { UpdateCaseRequestPacerOptions } from '../models/UpdateCaseRequestPacerOptions';
import { HttpFile } from '../http/http';

export class UpdateCaseRequest {
    /**
    * UniCourt\'s Case Id for update.
    */
    'caseId': string;
    'pacerOptions'?: UpdateCaseRequestPacerOptions;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "caseId",
            "baseName": "caseId",
            "type": "string",
            "format": ""
        },
        {
            "name": "pacerOptions",
            "baseName": "pacerOptions",
            "type": "UpdateCaseRequestPacerOptions",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateCaseRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


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

import { Schedule1 } from '../models/Schedule1';
import { UpdateCaseRequest } from '../models/UpdateCaseRequest';
import { HttpFile } from '../http/http';

export class CaseTrackRequest {
    'caseTrackParams': UpdateCaseRequest;
    'schedule': Schedule1;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "caseTrackParams",
            "baseName": "caseTrackParams",
            "type": "UpdateCaseRequest",
            "format": ""
        },
        {
            "name": "schedule",
            "baseName": "schedule",
            "type": "Schedule1",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CaseTrackRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


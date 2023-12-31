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

import { CaseUpdatePacerOptionsResponse1 } from '../models/CaseUpdatePacerOptionsResponse1';
import { Exception1 } from '../models/Exception1';
import { HttpFile } from '../http/http';

export class LastTrackedDetails {
    /**
    * Name of the object.
    */
    'object': string;
    'pacerOptions': CaseUpdatePacerOptionsResponse1 | null;
    /**
    * The date and time when the case was tracked for this account.
    */
    'lastTrackDate': Date | null;
    'lastTrackException': Exception1 | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "pacerOptions",
            "baseName": "pacerOptions",
            "type": "CaseUpdatePacerOptionsResponse1",
            "format": ""
        },
        {
            "name": "lastTrackDate",
            "baseName": "lastTrackDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lastTrackException",
            "baseName": "lastTrackException",
            "type": "Exception1",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LastTrackedDetails.attributeTypeMap;
    }

    public constructor() {
    }
}

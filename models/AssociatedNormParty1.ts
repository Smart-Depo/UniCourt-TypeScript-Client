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

import { CaseTimeline1 } from '../models/CaseTimeline1';
import { SOSDataPreview1 } from '../models/SOSDataPreview1';
import { HttpFile } from '../http/http';

export class AssociatedNormParty1 {
    'object': string;
    'normPartyId': string;
    /**
    * Link to Details for the Party.
    */
    'normPartyAPI': string;
    'caseTimeline': CaseTimeline1;
    'name': string;
    /**
    * Link to related cases for this association.
    */
    'caseSearchAPI': string;
    'caseCount': number;
    'sosDataArray': Array<SOSDataPreview1>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "normPartyId",
            "baseName": "normPartyId",
            "type": "string",
            "format": ""
        },
        {
            "name": "normPartyAPI",
            "baseName": "normPartyAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseTimeline",
            "baseName": "caseTimeline",
            "type": "CaseTimeline1",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseSearchAPI",
            "baseName": "caseSearchAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseCount",
            "baseName": "caseCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "sosDataArray",
            "baseName": "sosDataArray",
            "type": "Array<SOSDataPreview1>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AssociatedNormParty1.attributeTypeMap;
    }

    public constructor() {
    }
}

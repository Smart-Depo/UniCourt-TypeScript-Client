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

export class RelatedNormParty1 {
    'object': string;
    'normPartyId': string;
    'relationshipType': RelatedNormParty1RelationshipTypeEnum;

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
            "name": "relationshipType",
            "baseName": "relationshipType",
            "type": "RelatedNormParty1RelationshipTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RelatedNormParty1.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum RelatedNormParty1RelationshipTypeEnum {
    Parent = 'Parent',
    Child = 'Child',
    SameCorporateGroup = 'Same_Corporate_Group'
}


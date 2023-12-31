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

import { GetCase200ResponsePartiesPartyArrayInner } from '../models/GetCase200ResponsePartiesPartyArrayInner';
import { HttpFile } from '../http/http';

export class Parties {
    /**
    * Name of the object
    */
    'object': string;
    /**
    * Page number for which results where obtained.
    */
    'pageNumber': number;
    'partyArray': Array<GetCase200ResponsePartiesPartyArrayInner>;
    /**
    * Link to next page of a particular entity in a Case.
    */
    'nextPageAPI': string | null;
    /**
    * Total number of pages to obtain all the objects of a party in the Case.
    */
    'totalPages': number;
    /**
    * Total number of parties of the Case entity in a Case.
    */
    'totalCount': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "pageNumber",
            "baseName": "pageNumber",
            "type": "number",
            "format": ""
        },
        {
            "name": "partyArray",
            "baseName": "partyArray",
            "type": "Array<GetCase200ResponsePartiesPartyArrayInner>",
            "format": ""
        },
        {
            "name": "nextPageAPI",
            "baseName": "nextPageAPI",
            "type": "string",
            "format": ""
        },
        {
            "name": "totalPages",
            "baseName": "totalPages",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalCount",
            "baseName": "totalCount",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Parties.attributeTypeMap;
    }

    public constructor() {
    }
}

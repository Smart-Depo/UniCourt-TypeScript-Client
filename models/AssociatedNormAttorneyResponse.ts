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

import { AssociatedNormAttorney1 } from '../models/AssociatedNormAttorney1';
import { HttpFile } from '../http/http';

export class AssociatedNormAttorneyResponse {
    'associatedNormAttorneyArray': Array<AssociatedNormAttorney1>;
    /**
    * Next page of results if applicable.
    */
    'nextPageAPI': string | null;
    /**
    * Previous page of results if applicable.
    */
    'previousPageAPI': string | null;
    /**
    * Total no. of pages.
    */
    'totalPages': number;
    /**
    * Total no. of results for this criteria.
    */
    'totalCount': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "associatedNormAttorneyArray",
            "baseName": "associatedNormAttorneyArray",
            "type": "Array<AssociatedNormAttorney1>",
            "format": ""
        },
        {
            "name": "nextPageAPI",
            "baseName": "nextPageAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "previousPageAPI",
            "baseName": "previousPageAPI",
            "type": "string",
            "format": "uri"
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
        return AssociatedNormAttorneyResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


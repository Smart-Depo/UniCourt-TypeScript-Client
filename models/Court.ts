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

import { AdditionalLevels1 } from '../models/AdditionalLevels1';
import { HttpFile } from '../http/http';

export class Court {
    'object': string;
    'courtId': string;
    'courtTypeId': string;
    'courtSystemId': string;
    'type': string;
    'system': string;
    'name': string;
    'nameAka': string;
    'additionalLevels': AdditionalLevels1 | null;
    'containerType': string | null;
    'container': string | null;
    /**
    * The date and time when the Court was first created. This date and time is in UTC. Formatted as YYYY-MM-DD HH:MM:SS.
    */
    'createdDate': Date;
    'jurisdictionGeoForCourtAPI': string | null;
    'courtLocationsForCourtAPI': string | null;
    'appealCourtsForCourtAPI': string | null;
    'courtServiceStatusAPI': string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "courtId",
            "baseName": "courtId",
            "type": "string",
            "format": ""
        },
        {
            "name": "courtTypeId",
            "baseName": "courtTypeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "courtSystemId",
            "baseName": "courtSystemId",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "system",
            "baseName": "system",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "nameAka",
            "baseName": "nameAka",
            "type": "string",
            "format": ""
        },
        {
            "name": "additionalLevels",
            "baseName": "additionalLevels",
            "type": "AdditionalLevels1",
            "format": ""
        },
        {
            "name": "containerType",
            "baseName": "containerType",
            "type": "string",
            "format": ""
        },
        {
            "name": "container",
            "baseName": "container",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "jurisdictionGeoForCourtAPI",
            "baseName": "jurisdictionGeoForCourtAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "courtLocationsForCourtAPI",
            "baseName": "courtLocationsForCourtAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "appealCourtsForCourtAPI",
            "baseName": "appealCourtsForCourtAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "courtServiceStatusAPI",
            "baseName": "courtServiceStatusAPI",
            "type": "string",
            "format": "uri"
        }    ];

    static getAttributeTypeMap() {
        return Court.attributeTypeMap;
    }

    public constructor() {
    }
}

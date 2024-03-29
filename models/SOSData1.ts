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

import { AssociatedSoSPerson1 } from '../models/AssociatedSoSPerson1';
import { GetCase200ResponsePartiesPartyArrayInnerContact } from '../models/GetCase200ResponsePartiesPartyArrayInnerContact';
import { SOSAssociatedNormOrganization1 } from '../models/SOSAssociatedNormOrganization1';
import { SOSNameChange1 } from '../models/SOSNameChange1';
import { HttpFile } from '../http/http';

export class SOSData1 {
    'object': string;
    'sosNumber': string | null;
    'stateCode': string;
    'fein': string | null;
    'domesticRegistration': boolean;
    'registeredDate': Date | null;
    'status': SOSData1StatusEnum | null;
    'isActive': boolean;
    'inactivationDate': Date | null;
    'associatedSoSPersonArray': Array<AssociatedSoSPerson1>;
    'contact': GetCase200ResponsePartiesPartyArrayInnerContact;
    'nameChangesArray': Array<SOSNameChange1>;
    'sosAssociatedNormOrganizationArray': Array<SOSAssociatedNormOrganization1>;
    'firstFetchDate': Date;
    'lastFetchDate': Date;
    /**
    * Last Fetch Date of Organization with Updates.
    */
    'lastFetchDateWithUpdates': Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "sosNumber",
            "baseName": "sosNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "stateCode",
            "baseName": "stateCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "fein",
            "baseName": "fein",
            "type": "string",
            "format": ""
        },
        {
            "name": "domesticRegistration",
            "baseName": "domesticRegistration",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "registeredDate",
            "baseName": "registeredDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "SOSData1StatusEnum",
            "format": ""
        },
        {
            "name": "isActive",
            "baseName": "isActive",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "inactivationDate",
            "baseName": "inactivationDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "associatedSoSPersonArray",
            "baseName": "associatedSoSPersonArray",
            "type": "Array<AssociatedSoSPerson1>",
            "format": ""
        },
        {
            "name": "contact",
            "baseName": "contact",
            "type": "GetCase200ResponsePartiesPartyArrayInnerContact",
            "format": ""
        },
        {
            "name": "nameChangesArray",
            "baseName": "nameChangesArray",
            "type": "Array<SOSNameChange1>",
            "format": ""
        },
        {
            "name": "sosAssociatedNormOrganizationArray",
            "baseName": "sosAssociatedNormOrganizationArray",
            "type": "Array<SOSAssociatedNormOrganization1>",
            "format": ""
        },
        {
            "name": "firstFetchDate",
            "baseName": "firstFetchDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lastFetchDate",
            "baseName": "lastFetchDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lastFetchDateWithUpdates",
            "baseName": "lastFetchDateWithUpdates",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return SOSData1.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum SOSData1StatusEnum {
    Active = 'Active'
}


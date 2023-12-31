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

import { AttorneyRepresentationType1 } from '../models/AttorneyRepresentationType1';
import { GetCase200ResponsePartiesPartyArrayInnerContact } from '../models/GetCase200ResponsePartiesPartyArrayInnerContact';
import { GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations } from '../models/GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations';
import { PartyRole1 } from '../models/PartyRole1';
import { PossibleNormParty1 } from '../models/PossibleNormParty1';
import { HttpFile } from '../http/http';

export class Party {
    /**
    * Name of the object
    */
    'object': string;
    /**
    * ID for the party in this case. This ID is unique within a case and NOT across cases. If the same party were to appear in another case this ID would be different.
    */
    'partyId': string;
    /**
    * Name of the party as provided by Court.
    */
    'name': string;
    'namePrefix': string | null;
    /**
    * First name of the party. This is normalized by UniCourt.
    */
    'firstName': string | null;
    /**
    * Middle name of the party. This is normalized by UniCourt.
    */
    'middleName': string | null;
    /**
    * Last name of the party. This is normalized by UniCourt.
    */
    'lastName': string | null;
    'nameSuffix': string | null;
    'contact': GetCase200ResponsePartiesPartyArrayInnerContact;
    /**
    * To know the type of an entity in a case, if it is an Individual, Company or Other. An entity to a case could be the parties, attorneys or judges involved.
    */
    'partyClassificationType': PartyPartyClassificationTypeEnum;
    'partyRole': PartyRole1 | null;
    /**
    * Party Type as provided by Court.
    */
    'sourcePartyRole': string;
    /**
    * Signifies if the party as this party type is currently isVisible or not for the case.
    */
    'isVisible': boolean;
    /**
    * When was the party first fetched from the court site.
    */
    'firstFetchDate': Date;
    /**
    * When was the party last fetched from the court site.
    */
    'lastFetchDate': Date;
    'attorneyRepresentationType': AttorneyRepresentationType1 | null;
    'partyAttorneyAssociations': GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations | null;
    'possibleNormPartyArray': Array<PossibleNormParty1>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "partyId",
            "baseName": "partyId",
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
            "name": "namePrefix",
            "baseName": "namePrefix",
            "type": "string",
            "format": ""
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "middleName",
            "baseName": "middleName",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string",
            "format": ""
        },
        {
            "name": "nameSuffix",
            "baseName": "nameSuffix",
            "type": "string",
            "format": ""
        },
        {
            "name": "contact",
            "baseName": "contact",
            "type": "GetCase200ResponsePartiesPartyArrayInnerContact",
            "format": ""
        },
        {
            "name": "partyClassificationType",
            "baseName": "partyClassificationType",
            "type": "PartyPartyClassificationTypeEnum",
            "format": ""
        },
        {
            "name": "partyRole",
            "baseName": "partyRole",
            "type": "PartyRole1",
            "format": ""
        },
        {
            "name": "sourcePartyRole",
            "baseName": "sourcePartyRole",
            "type": "string",
            "format": ""
        },
        {
            "name": "isVisible",
            "baseName": "isVisible",
            "type": "boolean",
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
            "name": "attorneyRepresentationType",
            "baseName": "attorneyRepresentationType",
            "type": "AttorneyRepresentationType1",
            "format": ""
        },
        {
            "name": "partyAttorneyAssociations",
            "baseName": "partyAttorneyAssociations",
            "type": "GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations",
            "format": ""
        },
        {
            "name": "possibleNormPartyArray",
            "baseName": "possibleNormPartyArray",
            "type": "Array<PossibleNormParty1>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Party.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum PartyPartyClassificationTypeEnum {
    Individual = 'INDIVIDUAL',
    Company = 'COMPANY',
    Other = 'OTHER'
}


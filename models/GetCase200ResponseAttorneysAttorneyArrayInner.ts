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

import { AttorneyType1 } from '../models/AttorneyType1';
import { GetCase200ResponseAttorneysAttorneyArrayInnerAttorneyLawFirmArrayInner } from '../models/GetCase200ResponseAttorneysAttorneyArrayInnerAttorneyLawFirmArrayInner';
import { GetCase200ResponsePartiesPartyArrayInnerContact } from '../models/GetCase200ResponsePartiesPartyArrayInnerContact';
import { GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations } from '../models/GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations';
import { PossibleNormAttorney1 } from '../models/PossibleNormAttorney1';
import { PossibleNormLawFirm1 } from '../models/PossibleNormLawFirm1';
import { HttpFile } from '../http/http';

export class GetCase200ResponseAttorneysAttorneyArrayInner {
    /**
    * Name of the object
    */
    'object': string;
    /**
    * ID for the attorney in this case. This ID is unique within a case and NOT across cases. If the same attorney were to appear in another case this ID would be different.
    */
    'attorneyId': string;
    /**
    * Name of the attorney as provided by Court.
    */
    'name': string;
    'namePrefix': string | null;
    /**
    * First name of the attorney. This is normalized by UniCourt.
    */
    'firstName': string | null;
    /**
    * Middle name of the attorney. This is normalized by UniCourt.
    */
    'middleName': string | null;
    /**
    * Last name of the attorney. This is normalized by UniCourt.
    */
    'lastName': string | null;
    'nameSuffix': string | null;
    'contact': GetCase200ResponsePartiesPartyArrayInnerContact;
    'attorneyLawFirmArray': Array<GetCase200ResponseAttorneysAttorneyArrayInnerAttorneyLawFirmArrayInner>;
    /**
    * The bar enrollment number of an attorney.
    */
    'barNumber': string | null;
    'attorneyType': AttorneyType1 | null;
    /**
    * Attorney Type as provided by Court.
    */
    'sourceAttorneyType': string;
    /**
    * Signifies if the attorney as this attorney type is currently isVisible or not for the case.
    */
    'isVisible': boolean;
    /**
    * When was the attorney first fetched from the court site.
    */
    'firstFetchDate': Date;
    /**
    * When was the attorney last fetched from the court site.
    */
    'lastFetchDate': Date;
    'partyAttorneyAssociations': GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations | null;
    'possibleNormAttorneyArray': Array<PossibleNormAttorney1>;
    /**
    * Possible Norm Lawfirm array for a Attorney.
    */
    'possibleNormLawFirmArray': Array<PossibleNormLawFirm1>;
    /**
    * Party Role Group Id for a Attorney.
    */
    'partyRoleGroupIdArray': Array<string>;
    /**
    * Party Role Id for a Attorney.
    */
    'partyRoleIdArray': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "attorneyId",
            "baseName": "attorneyId",
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
            "name": "attorneyLawFirmArray",
            "baseName": "attorneyLawFirmArray",
            "type": "Array<GetCase200ResponseAttorneysAttorneyArrayInnerAttorneyLawFirmArrayInner>",
            "format": ""
        },
        {
            "name": "barNumber",
            "baseName": "barNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "attorneyType",
            "baseName": "attorneyType",
            "type": "AttorneyType1",
            "format": ""
        },
        {
            "name": "sourceAttorneyType",
            "baseName": "sourceAttorneyType",
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
            "name": "partyAttorneyAssociations",
            "baseName": "partyAttorneyAssociations",
            "type": "GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations",
            "format": ""
        },
        {
            "name": "possibleNormAttorneyArray",
            "baseName": "possibleNormAttorneyArray",
            "type": "Array<PossibleNormAttorney1>",
            "format": ""
        },
        {
            "name": "possibleNormLawFirmArray",
            "baseName": "possibleNormLawFirmArray",
            "type": "Array<PossibleNormLawFirm1>",
            "format": ""
        },
        {
            "name": "partyRoleGroupIdArray",
            "baseName": "partyRoleGroupIdArray",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "partyRoleIdArray",
            "baseName": "partyRoleIdArray",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetCase200ResponseAttorneysAttorneyArrayInner.attributeTypeMap;
    }

    public constructor() {
    }
}


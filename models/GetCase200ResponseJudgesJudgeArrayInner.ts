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

import { GetCase200ResponsePartiesPartyArrayInnerContact } from '../models/GetCase200ResponsePartiesPartyArrayInnerContact';
import { JudgeType1 } from '../models/JudgeType1';
import { PossibleNormJudge1 } from '../models/PossibleNormJudge1';
import { HttpFile } from '../http/http';

export class GetCase200ResponseJudgesJudgeArrayInner {
    /**
    * Name of the object
    */
    'object': string;
    /**
    * ID for the judge in this case. This ID is unique within a case and NOT across cases. If the same Judge were to appear in another case this ID would be different.
    */
    'judgeId': string;
    /**
    * Name of the judge as provided by Court.
    */
    'name': string;
    'namePrefix': string | null;
    /**
    * First name of the judge. This is normalized by UniCourt.
    */
    'firstName': string | null;
    /**
    * Middle name of the judge. This is normalized by UniCourt.
    */
    'middleName': string | null;
    /**
    * Last name of the judge. This is normalized by UniCourt.
    */
    'lastName': string | null;
    'nameSuffix': string | null;
    'contact': GetCase200ResponsePartiesPartyArrayInnerContact;
    'judgeType': JudgeType1 | null;
    'sourceJudgeType': string;
    /**
    * Signifies if the judge as this judge type is currently isVisible or not for the case.
    */
    'isVisible': boolean;
    /**
    * When was the judge first fetched from the court site.
    */
    'firstFetchDate': Date;
    /**
    * When was the judge last fetched from the court site.
    */
    'lastFetchDate': Date;
    'possibleNormJudgeArray': Array<PossibleNormJudge1>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "judgeId",
            "baseName": "judgeId",
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
            "name": "judgeType",
            "baseName": "judgeType",
            "type": "JudgeType1",
            "format": ""
        },
        {
            "name": "sourceJudgeType",
            "baseName": "sourceJudgeType",
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
            "name": "possibleNormJudgeArray",
            "baseName": "possibleNormJudgeArray",
            "type": "Array<PossibleNormJudge1>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetCase200ResponseJudgesJudgeArrayInner.attributeTypeMap;
    }

    public constructor() {
    }
}


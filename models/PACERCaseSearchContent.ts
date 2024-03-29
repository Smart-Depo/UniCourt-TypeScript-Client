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

export class PACERCaseSearchContent {
    /**
    * Name of the object
    */
    'object': string;
    /**
    * Link to case in the case management/electronic case files (CM/ECF) system at the court.
    */
    'pclCaseLink': string | null;
    /**
    * Link to case in the case management/electronic case files (CM/ECF) system at the court.
    */
    'pclJurisdictionType': PACERCaseSearchContentPclJurisdictionTypeEnum | null;
    /**
    * Sequentially generated number that identifies the case.
    */
    'pclCaseId': number;
    /**
    * Case Number.
    */
    'pclCaseNumberFull': string | null;
    /**
    * Title of the case.
    */
    'pclCaseTitle': string | null;
    /**
    * The divisional office in which the case was filed.
    */
    'pclCaseOffice': string | null;
    /**
    * The sequence number of the case.
    */
    'pclCaseNumber': number;
    /**
    * Code that identifies the type of case.
    */
    'pclCaseType': string | null;
    /**
    * The year in which the case falls. Could be two or four digit.
    */
    'pclCaseYear': number;
    /**
    * The general geographical region or specific court district. The court ID is the abbreviation of the court location combined with the court type (dc or bk). Please refer the Appendix B
    */
    'pclCourtId': string | null;
    /**
    * Filing date of the case.
    */
    'pclDateFiled': string | null;
    /**
    * JPML Case Seed number.
    */
    'pclJpmlNumber': number | null;
    /**
    * Which court does this mdl belongs too.
    */
    'pclMdlCourtId': string | null;
    /**
    * This parameter represents the mdl date ordered of the case when it is present
    */
    'pclMdlDateOrdered': string | null;
    /**
    * This parameter represents the mdl date received of the case when it is present
    */
    'pclMdlDateReceived': string | null;
    /**
    * This parameter represents the mdl extension of the case when it is present
    */
    'pclMdlExtension': string | null;
    /**
    * This parameter represents the mdl judge lastname of the case when it is present
    */
    'pclMdlJudgeLastName': string | null;
    /**
    * This parameter represents the mdl lit type of the case when it is present
    */
    'pclMdlLittype': string | null;
    /**
    * This parameter represents the mdl status of the case when it is present
    */
    'pclMdlStatus': string | null;
    /**
    * This parameter represents the mdl transferee of the case when it is present
    */
    'pclMdlTransferee': string | null;
    /**
    * This parameter represents the mdl transferee district of the case when it is present
    */
    'pclMdlTransfereeDistrict': string | null;
    /**
    * This parameter represents the civil cto number of the case when it is present
    */
    'pclCivilCtoNumber': string | null;
    /**
    * This parameter represents the civil disposition date of the case when it is present
    */
    'pclCivilDateDisposition': string | null;
    /**
    * This parameter represents the civil initiated date of the case when it is present
    */
    'pclCivilDateInitiated': string | null;
    /**
    * This parameter represents the civil terminated date of the case when it is present
    */
    'pclCivilDateTerminated': string | null;
    /**
    * This parameter represents the civil stat disposition of the case when it is present
    */
    'pclCivilStatDisposition': string | null;
    /**
    * This parameter represents the civil stat initiated of the case when it is present
    */
    'pclCivilStatInitiated': string | null;
    /**
    * This parameter represents the civil stat terminated of the case when it is present
    */
    'pclCivilStatTerminated': string | null;
    /**
    * This parameter represents the civil transferee of the case when it is present
    */
    'pclCivilTransferee': string | null;
    /**
    * This parameter represents the bankruptcy chapter of the case when it is present
    */
    'pclBankruptcyChapter': string | null;
    /**
    * This parameter represents the date discharged of the case when it is present
    */
    'pclDateDischarged': string | null;
    /**
    * This parameter represents the date dismissed of the case when it is present
    */
    'pclDateDismissed': string | null;
    /**
    * This parameter represents the date reopened of the case when it is present
    */
    'pclDateReopened': string | null;
    /**
    * This parameter represents the date termed of the case when it is present
    */
    'pclDateTermed': string | null;
    /**
    * This parameter represents the disposition of the case when it is present
    */
    'pclDisposition': string | null;
    /**
    * This parameter represents the disposition method of the case when it is present
    */
    'pclDispositionMethod': string | null;
    /**
    * This parameter represents the joint bankruptcy flag of the case when it is present
    */
    'pclJointBankruptcyFlag': string | null;
    /**
    * This parameter represents the joint discharged date of the case when it is present
    */
    'pclJointDischargedDate': string | null;
    /**
    * This parameter represents the joint dismissed date of the case when it is present
    */
    'pclJointDismissedDate': string | null;
    /**
    * This parameter represents the joint disposition method of the case when it is present
    */
    'pclJointDispositionMethod': string | null;
    /**
    * This parameter represents the nature of suit of the case when it is present
    */
    'pclNatureOfSuit': string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclCaseLink",
            "baseName": "pclCaseLink",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclJurisdictionType",
            "baseName": "pclJurisdictionType",
            "type": "PACERCaseSearchContentPclJurisdictionTypeEnum",
            "format": ""
        },
        {
            "name": "pclCaseId",
            "baseName": "pclCaseId",
            "type": "number",
            "format": ""
        },
        {
            "name": "pclCaseNumberFull",
            "baseName": "pclCaseNumberFull",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclCaseTitle",
            "baseName": "pclCaseTitle",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclCaseOffice",
            "baseName": "pclCaseOffice",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclCaseNumber",
            "baseName": "pclCaseNumber",
            "type": "number",
            "format": ""
        },
        {
            "name": "pclCaseType",
            "baseName": "pclCaseType",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclCaseYear",
            "baseName": "pclCaseYear",
            "type": "number",
            "format": ""
        },
        {
            "name": "pclCourtId",
            "baseName": "pclCourtId",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclDateFiled",
            "baseName": "pclDateFiled",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclJpmlNumber",
            "baseName": "pclJpmlNumber",
            "type": "number",
            "format": ""
        },
        {
            "name": "pclMdlCourtId",
            "baseName": "pclMdlCourtId",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclMdlDateOrdered",
            "baseName": "pclMdlDateOrdered",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclMdlDateReceived",
            "baseName": "pclMdlDateReceived",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclMdlExtension",
            "baseName": "pclMdlExtension",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclMdlJudgeLastName",
            "baseName": "pclMdlJudgeLastName",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclMdlLittype",
            "baseName": "pclMdlLittype",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclMdlStatus",
            "baseName": "pclMdlStatus",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclMdlTransferee",
            "baseName": "pclMdlTransferee",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclMdlTransfereeDistrict",
            "baseName": "pclMdlTransfereeDistrict",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclCivilCtoNumber",
            "baseName": "pclCivilCtoNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclCivilDateDisposition",
            "baseName": "pclCivilDateDisposition",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclCivilDateInitiated",
            "baseName": "pclCivilDateInitiated",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclCivilDateTerminated",
            "baseName": "pclCivilDateTerminated",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclCivilStatDisposition",
            "baseName": "pclCivilStatDisposition",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclCivilStatInitiated",
            "baseName": "pclCivilStatInitiated",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclCivilStatTerminated",
            "baseName": "pclCivilStatTerminated",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclCivilTransferee",
            "baseName": "pclCivilTransferee",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclBankruptcyChapter",
            "baseName": "pclBankruptcyChapter",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclDateDischarged",
            "baseName": "pclDateDischarged",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclDateDismissed",
            "baseName": "pclDateDismissed",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclDateReopened",
            "baseName": "pclDateReopened",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclDateTermed",
            "baseName": "pclDateTermed",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclDisposition",
            "baseName": "pclDisposition",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclDispositionMethod",
            "baseName": "pclDispositionMethod",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclJointBankruptcyFlag",
            "baseName": "pclJointBankruptcyFlag",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclJointDischargedDate",
            "baseName": "pclJointDischargedDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclJointDismissedDate",
            "baseName": "pclJointDismissedDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclJointDispositionMethod",
            "baseName": "pclJointDispositionMethod",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclNatureOfSuit",
            "baseName": "pclNatureOfSuit",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PACERCaseSearchContent.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum PACERCaseSearchContentPclJurisdictionTypeEnum {
    Appellate = 'Appellate',
    Bankruptcy = 'Bankruptcy',
    Criminal = 'Criminal',
    Civil = 'Civil',
    MultiDistrictLitigation = 'Multi-district Litigation',
    Null = 'null'
}


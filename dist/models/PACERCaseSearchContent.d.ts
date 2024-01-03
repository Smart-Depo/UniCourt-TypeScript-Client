export declare class PACERCaseSearchContent {
    'object': string;
    'pclCaseLink': string | null;
    'pclJurisdictionType': PACERCaseSearchContentPclJurisdictionTypeEnum | null;
    'pclCaseId': number;
    'pclCaseNumberFull': string | null;
    'pclCaseTitle': string | null;
    'pclCaseOffice': string | null;
    'pclCaseNumber': number;
    'pclCaseType': string | null;
    'pclCaseYear': number;
    'pclCourtId': string | null;
    'pclDateFiled': string | null;
    'pclJpmlNumber': number | null;
    'pclMdlCourtId': string | null;
    'pclMdlDateOrdered': string | null;
    'pclMdlDateReceived': string | null;
    'pclMdlExtension': string | null;
    'pclMdlJudgeLastName': string | null;
    'pclMdlLittype': string | null;
    'pclMdlStatus': string | null;
    'pclMdlTransferee': string | null;
    'pclMdlTransfereeDistrict': string | null;
    'pclCivilCtoNumber': string | null;
    'pclCivilDateDisposition': string | null;
    'pclCivilDateInitiated': string | null;
    'pclCivilDateTerminated': string | null;
    'pclCivilStatDisposition': string | null;
    'pclCivilStatInitiated': string | null;
    'pclCivilStatTerminated': string | null;
    'pclCivilTransferee': string | null;
    'pclBankruptcyChapter': string | null;
    'pclDateDischarged': string | null;
    'pclDateDismissed': string | null;
    'pclDateReopened': string | null;
    'pclDateTermed': string | null;
    'pclDisposition': string | null;
    'pclDispositionMethod': string | null;
    'pclJointBankruptcyFlag': string | null;
    'pclJointDischargedDate': string | null;
    'pclJointDismissedDate': string | null;
    'pclJointDispositionMethod': string | null;
    'pclNatureOfSuit': string | null;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export declare enum PACERCaseSearchContentPclJurisdictionTypeEnum {
    Appellate = "Appellate",
    Bankruptcy = "Bankruptcy",
    Criminal = "Criminal",
    Civil = "Civil",
    MultiDistrictLitigation = "Multi-district Litigation",
    Null = "null"
}

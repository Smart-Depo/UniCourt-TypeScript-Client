import { AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerSearchResultsArrayInnerPacerContent } from '../models/AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerSearchResultsArrayInnerPacerContent';
export declare class PACERPartySearchContent {
    'object': string;
    'pclJurisdictionType': PACERPartySearchContentPclJurisdictionTypeEnum | null;
    'pclCaseId': number;
    'pclCaseNumberFull': string | null;
    'pclCaseTitle': string | null;
    'pclCaseOffice': string | null;
    'pclCaseNumber': number;
    'pclCaseType': string | null;
    'pclCaseYear': number;
    'pclCourtId': string | null;
    'pclDateFiled': string | null;
    'pclLastName': string | null;
    'pclFirstName': string | null;
    'pclMiddleName': string | null;
    'pclGeneration': string | null;
    'pclPartyRole': string | null;
    'pclPartyType': string | null;
    'pclCourtCase': AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerSearchResultsArrayInnerPacerContent;
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
export declare enum PACERPartySearchContentPclJurisdictionTypeEnum {
    Appellate = "Appellate",
    Bankruptcy = "Bankruptcy",
    Criminal = "Criminal",
    Civil = "Civil",
    MultiDistrictLitigation = "Multi-district Litigation",
    Null = "null"
}

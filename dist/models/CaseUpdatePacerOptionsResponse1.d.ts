import { UpdateCaseRequestPacerOptionsAdditionalPageArrayInner } from '../models/UpdateCaseRequestPacerOptionsAdditionalPageArrayInner';
export declare class CaseUpdatePacerOptionsResponse1 {
    'object': string;
    'pacerUserId': string;
    'pacerClientCode': string | null;
    'fetchParticipantsIfOlderThanDays': number;
    'refreshType': CaseUpdatePacerOptionsResponse1RefreshTypeEnum | null;
    'additionalPageArray': Array<UpdateCaseRequestPacerOptionsAdditionalPageArrayInner> | null;
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
export declare enum CaseUpdatePacerOptionsResponse1RefreshTypeEnum {
    FetchNewDocketEntries = "fetchNewDocketEntries",
    FetchAllDocketEntries = "fetchAllDocketEntries"
}

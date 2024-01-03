import { UpdateCaseRequestPacerOptionsAdditionalPageArrayInner } from '../models/UpdateCaseRequestPacerOptionsAdditionalPageArrayInner';
export declare class CaseUpdatePacerOptionsResponse {
    'object': string;
    'pacerUserId': string;
    'pacerClientCode': string | null;
    'fetchParticipantsIfOlderThanDays': number;
    'refreshType': CaseUpdatePacerOptionsResponseRefreshTypeEnum | null;
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
export declare enum CaseUpdatePacerOptionsResponseRefreshTypeEnum {
    FetchNewDocketEntries = "fetchNewDocketEntries",
    FetchAllDocketEntries = "fetchAllDocketEntries"
}

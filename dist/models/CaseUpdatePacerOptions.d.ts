import { UpdateCaseRequestPacerOptionsAdditionalPageArrayInner } from '../models/UpdateCaseRequestPacerOptionsAdditionalPageArrayInner';
export declare class CaseUpdatePacerOptions {
    'pacerUserId': string;
    'pacerClientCode'?: string | null;
    'fetchParticipantsIfOlderThanDays'?: number;
    'refreshType'?: CaseUpdatePacerOptionsRefreshTypeEnum | null;
    'additionalPageArray'?: Array<UpdateCaseRequestPacerOptionsAdditionalPageArrayInner> | null;
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
export declare enum CaseUpdatePacerOptionsRefreshTypeEnum {
    FetchNewDocketEntries = "fetchNewDocketEntries",
    FetchAllDocketEntries = "fetchAllDocketEntries"
}

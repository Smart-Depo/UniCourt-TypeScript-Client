export declare class UpdateCaseRequestPacerOptionsAdditionalPageArrayInner {
    'page'?: UpdateCaseRequestPacerOptionsAdditionalPageArrayInnerPageEnum;
    'fetchIfOlderThanDays'?: number;
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
export declare enum UpdateCaseRequestPacerOptionsAdditionalPageArrayInnerPageEnum {
    AssociatedCases = "associatedCases",
    CaseSummary = "caseSummary",
    ListOfCreditors = "listOfCreditors"
}

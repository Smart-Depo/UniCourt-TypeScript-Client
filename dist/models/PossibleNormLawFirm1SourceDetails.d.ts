export declare class PossibleNormLawFirm1SourceDetails {
    'source': PossibleNormLawFirm1SourceDetailsSourceEnum | null;
    'linkedNormAttorneyIdArray': Array<string>;
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
export declare enum PossibleNormLawFirm1SourceDetailsSourceEnum {
    LinkedInOtherCases = "Case_Attorney_Linked_In_Other_Cases",
    FieldContainsLawFirm = "Case_Attorney_Field_Contains_Law_Firm"
}

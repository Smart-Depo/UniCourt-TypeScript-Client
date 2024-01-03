export declare class PossibleNormLawFirm1ScoreConstituents {
    'nameSimilarityScore': number;
    'otherPotentialNormLawFirms': number;
    'secretaryOfStateId': PossibleNormLawFirm1ScoreConstituentsSecretaryOfStateIdEnum;
    'address': PossibleNormLawFirm1ScoreConstituentsAddressEnum;
    'email': PossibleNormLawFirm1ScoreConstituentsEmailEnum;
    'phone': PossibleNormLawFirm1ScoreConstituentsPhoneEnum;
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
export declare enum PossibleNormLawFirm1ScoreConstituentsSecretaryOfStateIdEnum {
    Matched = "Matched",
    Mismatched = "Mismatched",
    NotProvidedByDataSource = "Not_Provided_By_Data_Source"
}
export declare enum PossibleNormLawFirm1ScoreConstituentsAddressEnum {
    Matched = "Matched",
    Mismatched = "Mismatched",
    NotProvidedByDataSource = "Not_Provided_By_Data_Source"
}
export declare enum PossibleNormLawFirm1ScoreConstituentsEmailEnum {
    Matched = "Matched",
    Mismatched = "Mismatched",
    NotProvidedByDataSource = "Not_Provided_By_Data_Source"
}
export declare enum PossibleNormLawFirm1ScoreConstituentsPhoneEnum {
    Matched = "Matched",
    Mismatched = "Mismatched",
    NotProvidedByDataSource = "Not_Provided_By_Data_Source"
}

export declare class PossibleNormAttorney1ScoreConstituents {
    'nameSimilarityScore': number;
    'otherPotentialNormAttorneys': number;
    'barId': PossibleNormAttorney1ScoreConstituentsBarIdEnum;
    'address': PossibleNormAttorney1ScoreConstituentsAddressEnum;
    'email': PossibleNormAttorney1ScoreConstituentsEmailEnum;
    'phone': PossibleNormAttorney1ScoreConstituentsPhoneEnum;
    'lawFirm': PossibleNormAttorney1ScoreConstituentsLawFirmEnum;
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
export declare enum PossibleNormAttorney1ScoreConstituentsBarIdEnum {
    Matched = "Matched",
    Mismatched = "Mismatched",
    NotProvidedByDataSource = "Not_Provided_By_Data_Source"
}
export declare enum PossibleNormAttorney1ScoreConstituentsAddressEnum {
    Matched = "Matched",
    Mismatched = "Mismatched",
    NotProvidedByDataSource = "Not_Provided_By_Data_Source"
}
export declare enum PossibleNormAttorney1ScoreConstituentsEmailEnum {
    Matched = "Matched",
    Mismatched = "Mismatched",
    NotProvidedByDataSource = "Not_Provided_By_Data_Source"
}
export declare enum PossibleNormAttorney1ScoreConstituentsPhoneEnum {
    Matched = "Matched",
    Mismatched = "Mismatched",
    NotProvidedByDataSource = "Not_Provided_By_Data_Source"
}
export declare enum PossibleNormAttorney1ScoreConstituentsLawFirmEnum {
    Matched = "Matched",
    Mismatched = "Mismatched",
    NotProvidedByDataSource = "Not_Provided_By_Data_Source"
}

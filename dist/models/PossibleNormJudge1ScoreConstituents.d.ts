export declare class PossibleNormJudge1ScoreConstituents {
    'nameSimilarityScore': number;
    'otherPotentialNormJudges': number;
    'address': PossibleNormJudge1ScoreConstituentsAddressEnum;
    'email': PossibleNormJudge1ScoreConstituentsEmailEnum;
    'phone': PossibleNormJudge1ScoreConstituentsPhoneEnum;
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
export declare enum PossibleNormJudge1ScoreConstituentsAddressEnum {
    Matched = "Matched",
    Mismatched = "Mismatched",
    NotProvidedByDataSource = "Not_Provided_By_Data_Source"
}
export declare enum PossibleNormJudge1ScoreConstituentsEmailEnum {
    Matched = "Matched",
    Mismatched = "Mismatched",
    NotProvidedByDataSource = "Not_Provided_By_Data_Source"
}
export declare enum PossibleNormJudge1ScoreConstituentsPhoneEnum {
    Matched = "Matched",
    Mismatched = "Mismatched",
    NotProvidedByDataSource = "Not_Provided_By_Data_Source"
}

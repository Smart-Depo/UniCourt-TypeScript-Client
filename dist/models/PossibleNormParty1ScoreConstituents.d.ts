export declare class PossibleNormParty1ScoreConstituents {
    'nameSimilarityScore': number;
    'otherPotentialNormParties': number;
    'secretaryOfStateId': PossibleNormParty1ScoreConstituentsSecretaryOfStateIdEnum;
    'address': PossibleNormParty1ScoreConstituentsAddressEnum;
    'email': PossibleNormParty1ScoreConstituentsEmailEnum;
    'phone': PossibleNormParty1ScoreConstituentsPhoneEnum;
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
export declare enum PossibleNormParty1ScoreConstituentsSecretaryOfStateIdEnum {
    Matched = "Matched",
    Mismatched = "Mismatched",
    NotProvidedByDataSource = "Not_Provided_By_Data_Source"
}
export declare enum PossibleNormParty1ScoreConstituentsAddressEnum {
    Matched = "Matched",
    Mismatched = "Mismatched",
    NotProvidedByDataSource = "Not_Provided_By_Data_Source"
}
export declare enum PossibleNormParty1ScoreConstituentsEmailEnum {
    Matched = "Matched",
    Mismatched = "Mismatched",
    NotProvidedByDataSource = "Not_Provided_By_Data_Source"
}
export declare enum PossibleNormParty1ScoreConstituentsPhoneEnum {
    Matched = "Matched",
    Mismatched = "Mismatched",
    NotProvidedByDataSource = "Not_Provided_By_Data_Source"
}

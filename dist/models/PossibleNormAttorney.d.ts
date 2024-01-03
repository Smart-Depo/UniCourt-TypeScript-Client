import { PossibleNormAttorney1ScoreConstituents } from '../models/PossibleNormAttorney1ScoreConstituents';
export declare class PossibleNormAttorney {
    'object': string;
    'normAttorneyId': string;
    'normAttorneyName': string;
    'bestMatch': boolean;
    'confidenceScore': number;
    'scoreConstituents': PossibleNormAttorney1ScoreConstituents;
    'normAttorneyAPI': string;
    'associatedNormJudgesAPI': string;
    'associatedNormLawFirmsAPI': string;
    'associatedNormPartiesAPI': string;
    'caseCountAnalyticsByNormAttorneyAPI': string;
    'caseCountAnalyticsByOpposingNormAttorneyAPI': string;
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

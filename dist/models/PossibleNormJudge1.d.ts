import { PossibleNormJudge1ScoreConstituents } from '../models/PossibleNormJudge1ScoreConstituents';
export declare class PossibleNormJudge1 {
    'object': string;
    'normJudgeId': string;
    'normJudgeName': string;
    'bestMatch': boolean;
    'confidenceScore': number | null;
    'scoreConstituents': PossibleNormJudge1ScoreConstituents | null;
    'normJudgeAPI': string;
    'associatedNormAttorneysAPI': string;
    'associatedNormLawFirmsAPI': string;
    'associatedNormPartiesAPI': string;
    'caseCountAnalyticsByNormJudgeAPI': string;
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

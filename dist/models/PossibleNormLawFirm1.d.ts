import { PossibleNormLawFirm1ScoreConstituents } from '../models/PossibleNormLawFirm1ScoreConstituents';
import { PossibleNormLawFirm1SourceDetails } from '../models/PossibleNormLawFirm1SourceDetails';
export declare class PossibleNormLawFirm1 {
    'object': string;
    'normLawFirmId': string;
    'normLawFirmName': string;
    'bestMatch': boolean;
    'sourceDetails': PossibleNormLawFirm1SourceDetails;
    'confidenceScore': number;
    'scoreConstituents': PossibleNormLawFirm1ScoreConstituents;
    'normLawFirmAPI': string;
    'associatedNormAttorneyAPI': string;
    'associatedNormJudgeAPI': string;
    'associatedNormPartiesAPI': string;
    'caseCountAnalyticsByNormLawFirmAPI': string;
    'caseCountAnalyticsByOpposingNormLawFirmAPI': string;
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

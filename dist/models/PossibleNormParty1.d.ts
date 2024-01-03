import { PossibleNormParty1ScoreConstituents } from '../models/PossibleNormParty1ScoreConstituents';
export declare class PossibleNormParty1 {
    'object': string;
    'normPartyId': string;
    'normPartyName': string;
    'bestMatch': boolean;
    'confidenceScore': number;
    'scoreConstituents': PossibleNormParty1ScoreConstituents;
    'normPartyAPI': string;
    'associatedNormAttorneysAPI': string;
    'associatedNormLawFirmsAPI': string;
    'associatedNormJudgesAPI': string;
    'caseCountAnalyticsByNormPartyAPI': string;
    'caseCountAnalyticsByOpposingNormPartyAPI': string;
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

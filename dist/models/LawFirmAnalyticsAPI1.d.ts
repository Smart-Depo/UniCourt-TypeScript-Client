export declare class LawFirmAnalyticsAPI1 {
    'object': string;
    'normLawFirmAPI': string;
    'associatedNormAttorneyAPI': string;
    'associatedNormJudgeAPI': string;
    'associatedNormPartiesAPI': string;
    'caseCountAnalyticsByOpposingNormAttorneyAPI': string | null;
    'caseCountAnalyticsByOpposingNormLawFirmAPI': string;
    'caseCountAnalyticsByOpposingNormPartyAPI': string | null;
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

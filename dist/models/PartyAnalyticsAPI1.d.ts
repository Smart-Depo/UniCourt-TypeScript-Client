export declare class PartyAnalyticsAPI1 {
    'object': string;
    'normPartyAPI': string;
    'associatedNormAttorneysAPI': string;
    'associatedNormLawFirmsAPI': string;
    'associatedNormJudgesAPI': string;
    'caseCountAnalyticsByOpposingNormAttorneyAPI': string | null;
    'caseCountAnalyticsByOpposingNormLawFirmAPI': string | null;
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

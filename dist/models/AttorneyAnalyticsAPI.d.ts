export declare class AttorneyAnalyticsAPI {
    'object': string;
    'normAttorneyAPI': string;
    'associatedNormJudgesAPI': string;
    'associatedNormLawFirmsAPI': string;
    'associatedNormPartiesAPI': string;
    'caseCountAnalyticsByOpposingNormAttorneyAPI': string;
    'caseCountAnalyticsByOpposingNormLawFirmAPI': string | null;
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

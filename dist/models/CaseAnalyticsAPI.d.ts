export declare class CaseAnalyticsAPI {
    'object': string;
    'caseCountAnalyticsByCourtAPI': string;
    'caseCountAnalyticsByCourtTypeAPI': string;
    'caseCountAnalyticsByCourtSystemAPI': string;
    'caseCountAnalyticsByCourtLocationAPI': string;
    'caseCountAnalyticsByJurisdictionGeoAPI': string;
    'caseCountAnalyticsByAreaOfLawAPI': string;
    'caseCountAnalyticsByCaseClassAPI': string;
    'caseCountAnalyticsByCaseTypeAPI': string;
    'caseCountAnalyticsByCaseTypeGroupAPI': string;
    'caseCountAnalyticsByPartyRoleAPI': string | null;
    'caseCountAnalyticsByPartyRoleGroupAPI': string | null;
    'totalCases': number;
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

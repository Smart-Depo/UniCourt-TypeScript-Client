export declare class CaseCountAnalyticsByNormParty1 {
    'object': string;
    'normPartyId': string;
    'normPartyName': string;
    'caseSearchAPI': string | null;
    'caseCount': number;
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

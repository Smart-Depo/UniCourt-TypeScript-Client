export declare class CaseCountAnalyticsByNormLawFirm {
    'object': string;
    'normLawFirmId': string;
    'normLawFirmName': string;
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

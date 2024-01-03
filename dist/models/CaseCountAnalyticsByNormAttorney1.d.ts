export declare class CaseCountAnalyticsByNormAttorney1 {
    'object': string;
    'normAttorneyId': string;
    'normAttorneyName': string;
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

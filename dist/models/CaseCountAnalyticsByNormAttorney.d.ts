export declare class CaseCountAnalyticsByNormAttorney {
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

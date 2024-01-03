export declare class CaseCountAnalyticsByNormJudge1 {
    'object': string;
    'normJudgeId': string;
    'normJudgeName': string;
    'caseSearchAPI': string;
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

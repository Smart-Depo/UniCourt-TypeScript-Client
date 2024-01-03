import { CaseCountAnalyticsByNormJudge1 } from '../models/CaseCountAnalyticsByNormJudge1';
export declare class CaseCountAnalyticsByNormJudgeResponse1 {
    'object': string;
    'results': Array<CaseCountAnalyticsByNormJudge1>;
    'nextPageAPI': string | null;
    'previousPageAPI': string | null;
    'totalPages': number;
    'totalCaseCount': number;
    'totalNormJudgeCount': number;
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

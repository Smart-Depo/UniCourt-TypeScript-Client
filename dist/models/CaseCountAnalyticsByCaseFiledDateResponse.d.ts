import { CaseCountAnalyticsByCaseFiledDate1 } from '../models/CaseCountAnalyticsByCaseFiledDate1';
export declare class CaseCountAnalyticsByCaseFiledDateResponse {
    'object': string;
    'nextPageAPI': string | null;
    'previousPageAPI': string | null;
    'results': Array<CaseCountAnalyticsByCaseFiledDate1>;
    'totalPages': number;
    'totalCaseCount': number;
    'totalCaseFiledDateCount': number;
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

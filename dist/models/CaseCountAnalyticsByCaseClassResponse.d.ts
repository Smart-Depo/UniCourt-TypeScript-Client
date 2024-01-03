import { CaseCountAnalyticsByCaseClass1 } from '../models/CaseCountAnalyticsByCaseClass1';
export declare class CaseCountAnalyticsByCaseClassResponse {
    'object': string;
    'nextPageAPI': string | null;
    'previousPageAPI': string | null;
    'results': Array<CaseCountAnalyticsByCaseClass1>;
    'totalPages': number;
    'totalCaseCount': number;
    'totalCaseClassCount': number;
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

import { CaseCountAnalyticsByCaseType1 } from '../models/CaseCountAnalyticsByCaseType1';
export declare class CaseCountAnalyticsByCaseTypeResponse1 {
    'object': string;
    'nextPageAPI': string | null;
    'previousPageAPI': string | null;
    'results': Array<CaseCountAnalyticsByCaseType1>;
    'totalPages': number;
    'totalCaseCount': number;
    'totalCaseTypeCount': number;
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

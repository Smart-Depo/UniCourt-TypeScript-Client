import { CaseCountAnalyticsByCourt1 } from '../models/CaseCountAnalyticsByCourt1';
export declare class CaseCountAnalyticsByCourtResponse {
    'object': string;
    'nextPageAPI': string | null;
    'previousPageAPI': string | null;
    'results': Array<CaseCountAnalyticsByCourt1>;
    'totalPages': number;
    'totalCaseCount': number;
    'totalCourtCount': number;
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

import { CaseCountAnalyticsByCourtLocation1 } from '../models/CaseCountAnalyticsByCourtLocation1';
export declare class CaseCountAnalyticsByCourtLocationResponse {
    'object': string;
    'nextPageAPI': string | null;
    'previousPageAPI': string | null;
    'results': Array<CaseCountAnalyticsByCourtLocation1>;
    'totalPages': number;
    'totalCaseCount': number;
    'totalCourtLocationCount': number;
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

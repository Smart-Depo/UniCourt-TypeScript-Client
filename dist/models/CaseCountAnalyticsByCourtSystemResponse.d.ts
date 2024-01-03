import { CaseCountAnalyticsByCourtSystem1 } from '../models/CaseCountAnalyticsByCourtSystem1';
export declare class CaseCountAnalyticsByCourtSystemResponse {
    'object': string;
    'nextPageAPI': string | null;
    'previousPageAPI': string | null;
    'results': Array<CaseCountAnalyticsByCourtSystem1>;
    'totalPages': number;
    'totalCaseCount': number;
    'totalCourtSystemCount': number;
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

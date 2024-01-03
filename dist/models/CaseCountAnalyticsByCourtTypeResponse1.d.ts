import { CaseCountAnalyticsByCourtType1 } from '../models/CaseCountAnalyticsByCourtType1';
export declare class CaseCountAnalyticsByCourtTypeResponse1 {
    'object': string;
    'nextPageAPI': string | null;
    'previousPageAPI': string | null;
    'results': Array<CaseCountAnalyticsByCourtType1>;
    'totalPages': number;
    'totalCaseCount': number;
    'totalCourtTypeCount': number;
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

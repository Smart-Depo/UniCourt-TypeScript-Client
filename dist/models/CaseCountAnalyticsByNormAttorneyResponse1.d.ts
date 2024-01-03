import { CaseCountAnalyticsByNormAttorney1 } from '../models/CaseCountAnalyticsByNormAttorney1';
export declare class CaseCountAnalyticsByNormAttorneyResponse1 {
    'object': string;
    'results': Array<CaseCountAnalyticsByNormAttorney1>;
    'nextPageAPI': string | null;
    'previousPageAPI': string | null;
    'totalPages': number;
    'totalCaseCount': number;
    'totalNormAttorneyCount': number;
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

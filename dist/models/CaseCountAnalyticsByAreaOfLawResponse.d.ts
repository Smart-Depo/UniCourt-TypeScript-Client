import { CaseCountAnalyticsByAreaOfLaw1 } from '../models/CaseCountAnalyticsByAreaOfLaw1';
export declare class CaseCountAnalyticsByAreaOfLawResponse {
    'object': string;
    'nextPageAPI': string | null;
    'previousPageAPI': string | null;
    'results': Array<CaseCountAnalyticsByAreaOfLaw1>;
    'totalPages': number;
    'totalCaseCount': number;
    'totalAreaOfLawCount': number;
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

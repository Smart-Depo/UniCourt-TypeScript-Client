import { CaseCountAnalyticsByCaseTypeGroup1 } from '../models/CaseCountAnalyticsByCaseTypeGroup1';
export declare class CaseCountAnalyticsByCaseTypeGroupResponse1 {
    'object': string;
    'nextPageAPI': string | null;
    'previousPageAPI': string | null;
    'results': Array<CaseCountAnalyticsByCaseTypeGroup1>;
    'totalPages': number;
    'totalCaseCount': number;
    'totalCaseTypeGroupCount': number;
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

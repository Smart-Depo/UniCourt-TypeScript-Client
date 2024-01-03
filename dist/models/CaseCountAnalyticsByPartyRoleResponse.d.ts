import { CaseCountAnalyticsByPartyRole1 } from '../models/CaseCountAnalyticsByPartyRole1';
export declare class CaseCountAnalyticsByPartyRoleResponse {
    'object': string;
    'nextPageAPI': string | null;
    'previousPageAPI': string | null;
    'results': Array<CaseCountAnalyticsByPartyRole1>;
    'totalPages': number;
    'totalCaseCount': number;
    'totalPartyRoleCount': number;
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

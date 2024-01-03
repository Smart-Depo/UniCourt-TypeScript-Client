import { CaseCountAnalyticsByPartyRoleGroup1 } from '../models/CaseCountAnalyticsByPartyRoleGroup1';
export declare class CaseCountAnalyticsByPartyRoleGroupResponse {
    'object': string;
    'nextPageAPI': string | null;
    'previousPageAPI': string | null;
    'results': Array<CaseCountAnalyticsByPartyRoleGroup1>;
    'totalPages': number;
    'totalCaseCount': number;
    'totalPartyRoleGroupCount': number;
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

import { PartyRoleGroup1 } from '../models/PartyRoleGroup1';
export declare class CaseCountAnalyticsByPartyRoleGroup {
    'object': string;
    'caseCount': number;
    'caseSearchAPI': string;
    'partyRoleGroup': PartyRoleGroup1;
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

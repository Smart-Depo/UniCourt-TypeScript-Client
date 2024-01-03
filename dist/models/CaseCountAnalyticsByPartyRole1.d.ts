import { PartyRole1 } from '../models/PartyRole1';
export declare class CaseCountAnalyticsByPartyRole1 {
    'object': string;
    'caseCount': number;
    'caseSearchAPI': string;
    'partyRole': PartyRole1 | null;
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

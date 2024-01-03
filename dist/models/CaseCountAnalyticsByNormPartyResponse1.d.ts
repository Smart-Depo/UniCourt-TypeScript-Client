import { CaseCountAnalyticsByNormParty1 } from '../models/CaseCountAnalyticsByNormParty1';
export declare class CaseCountAnalyticsByNormPartyResponse1 {
    'object': string;
    'results': Array<CaseCountAnalyticsByNormParty1>;
    'nextPageAPI': string | null;
    'previousPageAPI': string | null;
    'totalPages': number;
    'totalCaseCount': number;
    'totalNormPartyCount': number;
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

import { CaseCountAnalyticsByNormLawFirm1 } from '../models/CaseCountAnalyticsByNormLawFirm1';
export declare class CaseCountAnalyticsByNormLawFirmResponse {
    'object': string;
    'results': Array<CaseCountAnalyticsByNormLawFirm1>;
    'nextPageAPI': string | null;
    'previousPageAPI': string | null;
    'totalPages': number;
    'totalCaseCount': number;
    'totalNormLawFirmCount': number;
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

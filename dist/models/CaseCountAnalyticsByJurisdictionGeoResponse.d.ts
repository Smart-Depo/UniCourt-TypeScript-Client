import { CaseCountAnalyticsByJurisdictionGeo1 } from '../models/CaseCountAnalyticsByJurisdictionGeo1';
export declare class CaseCountAnalyticsByJurisdictionGeoResponse {
    'object': string;
    'nextPageAPI': string | null;
    'previousPageAPI': string | null;
    'results': Array<CaseCountAnalyticsByJurisdictionGeo1>;
    'totalPages': number;
    'totalCaseCount': number;
    'totalJurisdictionGeoCount': number;
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

import { CaseCountAnalyticsByCourt1Geo } from '../models/CaseCountAnalyticsByCourt1Geo';
import { JurisdictionGeo1 } from '../models/JurisdictionGeo1';
export declare class CaseCountAnalyticsByJurisdictionGeo {
    'object': string;
    'caseCount': number;
    'caseSearchAPI': string;
    'jurisdictionGeo': JurisdictionGeo1;
    'geo': CaseCountAnalyticsByCourt1Geo | null;
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

import { CaseCountAnalyticsByCourt1Geo } from '../models/CaseCountAnalyticsByCourt1Geo';
import { CourtSystem1 } from '../models/CourtSystem1';
export declare class CaseCountAnalyticsByCourtSystem {
    'object': string;
    'caseCount': number;
    'caseSearchAPI': string;
    'courtSystem': CourtSystem1;
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

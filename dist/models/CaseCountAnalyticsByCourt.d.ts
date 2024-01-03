import { CaseCountAnalyticsByCourt1Geo } from '../models/CaseCountAnalyticsByCourt1Geo';
import { Court1 } from '../models/Court1';
export declare class CaseCountAnalyticsByCourt {
    'object': string;
    'caseCount': number;
    'caseSearchAPI': string;
    'court': Court1 | null;
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

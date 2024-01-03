import { CaseCountAnalyticsByCourt1Geo } from '../models/CaseCountAnalyticsByCourt1Geo';
import { Court1 } from '../models/Court1';
import { CourtLocation1 } from '../models/CourtLocation1';
export declare class CaseCountAnalyticsByCourtLocation {
    'object': string;
    'caseCount': number;
    'caseSearchAPI': string;
    'courtLocation': CourtLocation1 | null;
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

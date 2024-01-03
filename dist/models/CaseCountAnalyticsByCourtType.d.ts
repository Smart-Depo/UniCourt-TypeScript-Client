import { CaseCountAnalyticsByCourt1Geo } from '../models/CaseCountAnalyticsByCourt1Geo';
import { CourtType1 } from '../models/CourtType1';
export declare class CaseCountAnalyticsByCourtType {
    'object': string;
    'caseCount': number;
    'caseSearchAPI': string;
    'courtType': CourtType1;
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

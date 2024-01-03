import { CaseType1 } from '../models/CaseType1';
export declare class CaseCountAnalyticsByCaseType1 {
    'object': string;
    'caseCount': number;
    'caseSearchAPI': string;
    'caseType': CaseType1 | null;
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

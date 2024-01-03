import { CaseTypeGroup1 } from '../models/CaseTypeGroup1';
export declare class CaseCountAnalyticsByCaseTypeGroup {
    'object': string;
    'caseCount': number;
    'caseSearchAPI': string;
    'caseTypeGroup': CaseTypeGroup1;
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

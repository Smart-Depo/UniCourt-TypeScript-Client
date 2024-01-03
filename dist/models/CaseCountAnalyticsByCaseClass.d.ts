import { CaseClass1 } from '../models/CaseClass1';
export declare class CaseCountAnalyticsByCaseClass {
    'object': string;
    'caseCount': number;
    'caseSearchAPI': string;
    'caseClass': CaseClass1;
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

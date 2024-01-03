import { AreaOfLaw1 } from '../models/AreaOfLaw1';
export declare class CaseCountAnalyticsByAreaOfLaw1 {
    'object': string;
    'caseCount': number;
    'caseSearchAPI': string;
    'areaOfLaw': AreaOfLaw1;
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

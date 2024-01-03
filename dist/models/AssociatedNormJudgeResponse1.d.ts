import { AssociatedNormJudge1 } from '../models/AssociatedNormJudge1';
export declare class AssociatedNormJudgeResponse1 {
    'associatedNormJudgeArray': Array<AssociatedNormJudge1>;
    'nextPageAPI': string | null;
    'previousPageAPI': string | null;
    'totalPages': number;
    'totalCount': number;
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

import { CaseSearchResult1MatchedObjectArrayInner } from '../models/CaseSearchResult1MatchedObjectArrayInner';
export declare class NormJudgeSearchResult {
    'object': string;
    'normJudgeId': string;
    'name': string;
    'firstFetchDate': Date;
    'lastFetchDate': Date;
    'normJudgeDetailsAPI': string;
    'matchedObjectArray': Array<CaseSearchResult1MatchedObjectArrayInner>;
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

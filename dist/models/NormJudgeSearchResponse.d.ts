import { SearchNormalizedJudges200ResponseNormJudgeSearchResultArrayInner } from '../models/SearchNormalizedJudges200ResponseNormJudgeSearchResultArrayInner';
export declare class NormJudgeSearchResponse {
    'object': string;
    'normJudgeSearchResultArray': Array<SearchNormalizedJudges200ResponseNormJudgeSearchResultArrayInner>;
    'q': string;
    'normJudgeSearchId': string;
    'nextPageAPI': string | null;
    'previousPageAPI': string | null;
    'pageNumber': number;
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

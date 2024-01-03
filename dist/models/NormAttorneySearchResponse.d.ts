import { SearchNormalizedAttorneys200ResponseNormAttorneySearchResultArrayInner } from '../models/SearchNormalizedAttorneys200ResponseNormAttorneySearchResultArrayInner';
export declare class NormAttorneySearchResponse {
    'object': string;
    'normAttorneySearchResultArray': Array<SearchNormalizedAttorneys200ResponseNormAttorneySearchResultArrayInner>;
    'q': string;
    'normAttorneySearchId': string;
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

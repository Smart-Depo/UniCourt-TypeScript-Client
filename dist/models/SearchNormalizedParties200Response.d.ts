import { SearchNormalizedParties200ResponseNormPartySearchResultArrayInner } from '../models/SearchNormalizedParties200ResponseNormPartySearchResultArrayInner';
export declare class SearchNormalizedParties200Response {
    'object': string;
    'normPartySearchResultArray': Array<SearchNormalizedParties200ResponseNormPartySearchResultArrayInner>;
    'q': string;
    'normPartySearchId': string;
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

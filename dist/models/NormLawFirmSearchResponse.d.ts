import { SearchNormalizedLawFirms200ResponseNormLawFirmSearchResultArrayInner } from '../models/SearchNormalizedLawFirms200ResponseNormLawFirmSearchResultArrayInner';
export declare class NormLawFirmSearchResponse {
    'object': string;
    'normLawFirmSearchResultArray': Array<SearchNormalizedLawFirms200ResponseNormLawFirmSearchResultArrayInner>;
    'q': string;
    'normLawFirmSearchId': string;
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

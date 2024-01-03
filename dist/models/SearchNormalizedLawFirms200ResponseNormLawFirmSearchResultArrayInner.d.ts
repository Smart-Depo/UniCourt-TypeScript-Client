import { CaseSearchResult1MatchedObjectArrayInner } from '../models/CaseSearchResult1MatchedObjectArrayInner';
export declare class SearchNormalizedLawFirms200ResponseNormLawFirmSearchResultArrayInner {
    'object': string;
    'normLawFirmId': string;
    'name': string;
    'firstFetchDate': Date;
    'lastFetchDate': Date;
    'normLawFirmDetailsAPI': string;
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

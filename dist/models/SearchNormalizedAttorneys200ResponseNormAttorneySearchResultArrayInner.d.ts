import { CaseSearchResult1MatchedObjectArrayInner } from '../models/CaseSearchResult1MatchedObjectArrayInner';
export declare class SearchNormalizedAttorneys200ResponseNormAttorneySearchResultArrayInner {
    'object': string;
    'normAttorneyId': string;
    'name': string;
    'firstFetchDate': Date;
    'lastFetchDate': Date;
    'hasAssociatedPublicData': boolean;
    'normAttorneyDetailsAPI': string;
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

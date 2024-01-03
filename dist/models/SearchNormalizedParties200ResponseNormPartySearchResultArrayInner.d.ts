import { CaseSearchResult1MatchedObjectArrayInner } from '../models/CaseSearchResult1MatchedObjectArrayInner';
export declare class SearchNormalizedParties200ResponseNormPartySearchResultArrayInner {
    'object': string;
    'normPartyId': string;
    'name': string;
    'partyClassificationType': string;
    'firstFetchDate': Date;
    'lastFetchDate': Date;
    'normPartyDetailsAPI': string;
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

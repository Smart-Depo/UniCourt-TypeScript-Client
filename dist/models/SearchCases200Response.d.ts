import { CaseSearchResult1 } from '../models/CaseSearchResult1';
export declare class SearchCases200Response {
    'object': string;
    'caseSearchResultArray': Array<CaseSearchResult1>;
    'q': string;
    'caseSearchId': string;
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

import { GetCase200ResponseRelatedCasesRelatedCaseArrayInner } from '../models/GetCase200ResponseRelatedCasesRelatedCaseArrayInner';
export declare class GetCase200ResponseRelatedCases {
    'object': string;
    'pageNumber': number;
    'relatedCaseArray': Array<GetCase200ResponseRelatedCasesRelatedCaseArrayInner>;
    'nextPageAPI': string | null;
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

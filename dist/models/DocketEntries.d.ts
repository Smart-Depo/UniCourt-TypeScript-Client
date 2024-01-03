import { GetCase200ResponseDocketEntriesDocketEntryArrayInner } from '../models/GetCase200ResponseDocketEntriesDocketEntryArrayInner';
export declare class DocketEntries {
    'object': string;
    'pageNumber': number;
    'docketEntryArray': Array<GetCase200ResponseDocketEntriesDocketEntryArrayInner>;
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

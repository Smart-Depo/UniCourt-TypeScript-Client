import { GetCase200ResponsePartiesPartyArrayInner } from '../models/GetCase200ResponsePartiesPartyArrayInner';
export declare class Parties {
    'object': string;
    'pageNumber': number;
    'partyArray': Array<GetCase200ResponsePartiesPartyArrayInner>;
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

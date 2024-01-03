import { GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociationsPartyAttorneyAssociationArrayInner } from '../models/GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociationsPartyAttorneyAssociationArrayInner';
export declare class GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations {
    'object': string;
    'pageNumber': number;
    'partyAttorneyAssociationArray': Array<GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociationsPartyAttorneyAssociationArrayInner>;
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

import { GetCase200ResponsePartiesPartyArrayInnerContactAddressArrayInner } from '../models/GetCase200ResponsePartiesPartyArrayInnerContactAddressArrayInner';
import { GetCase200ResponsePartiesPartyArrayInnerContactEmailArrayInner } from '../models/GetCase200ResponsePartiesPartyArrayInnerContactEmailArrayInner';
import { GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInner } from '../models/GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInner';
export declare class GetCase200ResponsePartiesPartyArrayInnerContact {
    'object': string;
    'addressArray': Array<GetCase200ResponsePartiesPartyArrayInnerContactAddressArrayInner> | null;
    'phoneNumberArray': Array<GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInner> | null;
    'emailArray': Array<GetCase200ResponsePartiesPartyArrayInnerContactEmailArrayInner> | null;
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

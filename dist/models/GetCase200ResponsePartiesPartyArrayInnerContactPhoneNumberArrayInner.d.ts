export declare class GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInner {
    'object': string;
    'phoneNumber': string;
    'phoneType': GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInnerPhoneTypeEnum;
    'isVisible': boolean;
    'firstFetchDate': Date;
    'lastFetchDate': Date;
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
export declare enum GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInnerPhoneTypeEnum {
    Default = "DEFAULT",
    Office = "OFFICE",
    Fax = "FAX",
    Phone = "PHONE"
}

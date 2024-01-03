export declare class Phone {
    'object': string;
    'phoneNumber': string;
    'phoneType': PhonePhoneTypeEnum;
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
export declare enum PhonePhoneTypeEnum {
    Default = "DEFAULT",
    Office = "OFFICE",
    Fax = "FAX",
    Phone = "PHONE"
}

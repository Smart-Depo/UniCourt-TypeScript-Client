export declare class GetCase200ResponsePartiesPartyArrayInnerContactEmailArrayInner {
    'object': string;
    'emailId': string;
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

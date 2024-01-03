export declare class Address {
    'object': string;
    'streetAddress1': string | null;
    'streetAddress2': string | null;
    'city': string | null;
    'stateName': string;
    'stateCode': string | null;
    'countryName': string;
    'countryCode': string | null;
    'zip': string | null;
    'zip4': string | null;
    'isVisible': boolean;
    'firstFetchDate': Date;
    'lastFetchDate': Date;
    'latitude': number | null;
    'longitude': number | null;
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

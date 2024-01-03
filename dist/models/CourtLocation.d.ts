export declare class CourtLocation {
    'object': string;
    'courtLocationId': string;
    'name': string;
    'streetAddress1': string | null;
    'streetAddress2': string | null;
    'city': string | null;
    'stateName': string;
    'createdDate': Date;
    'courtsForCourtLocationAPI': string;
    'courtServiceStatusAPI': string | null;
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

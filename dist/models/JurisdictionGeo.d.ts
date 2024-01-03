export declare class JurisdictionGeo {
    'object': string;
    'jurisdictionGeoId': string;
    'country': string;
    'state': string;
    'county': string | null;
    'city': string | null;
    'fipsCode': string;
    'zipCodeArray': Array<string> | null;
    'createdDate': Date;
    'courtsForJurisdictionGeoAPI': string;
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

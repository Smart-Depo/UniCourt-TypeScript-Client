export declare class BarSourceData1Name {
    'name': string;
    'firstName': string;
    'middleName': string | null;
    'lastName': string;
    'prefix': string | null;
    'suffix': string | null;
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

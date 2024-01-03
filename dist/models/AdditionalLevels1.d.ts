export declare class AdditionalLevels1 {
    'object': string;
    'level1': string | null;
    'level2': string | null;
    'level3': string | null;
    'level4': string | null;
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

export declare class Schedule2 {
    'object': string;
    'type': Schedule2TypeEnum;
    'days': Array<number>;
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
export declare enum Schedule2TypeEnum {
    Daily = "daily",
    Weekly = "weekly",
    Monthly = "monthly"
}

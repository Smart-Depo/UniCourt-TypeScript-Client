export declare class Schedule1 {
    'type': Schedule1TypeEnum;
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
export declare enum Schedule1TypeEnum {
    Daily = "daily",
    Weekly = "weekly",
    Monthly = "monthly"
}

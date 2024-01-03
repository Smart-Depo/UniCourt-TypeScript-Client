export declare class Schedule {
    'object': string;
    'type': ScheduleTypeEnum;
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
export declare enum ScheduleTypeEnum {
    Daily = "daily",
    Weekly = "weekly",
    Monthly = "monthly"
}

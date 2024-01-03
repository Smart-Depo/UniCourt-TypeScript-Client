export declare class CaseTrackSchedule {
    'type': CaseTrackScheduleTypeEnum;
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
export declare enum CaseTrackScheduleTypeEnum {
    Daily = "daily",
    Weekly = "weekly",
    Monthly = "monthly"
}

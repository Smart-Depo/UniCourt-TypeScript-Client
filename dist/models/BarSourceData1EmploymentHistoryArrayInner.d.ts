export declare class BarSourceData1EmploymentHistoryArrayInner {
    'employer': string | null;
    'endDate': Date | null;
    'startDate': Date | null;
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

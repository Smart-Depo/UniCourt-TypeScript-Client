export declare class BarSourceData1CourtOfAdmissions {
    'courtStateArray': Array<string>;
    'federalArray': Array<string>;
    'otherCourtsArray': Array<string>;
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

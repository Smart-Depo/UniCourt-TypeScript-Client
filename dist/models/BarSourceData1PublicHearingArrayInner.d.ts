export declare class BarSourceData1PublicHearingArrayInner {
    'conduct': string | null;
    'date': Date | null;
    'issuedBy': string | null;
    'order': string | null;
    'respondent': string | null;
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

export declare class BarSourceData1CourtHistoryArrayInner {
    'action': string | null;
    'actionComments': string | null;
    'reinstatedDate': Date | null;
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

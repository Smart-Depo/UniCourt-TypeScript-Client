export declare class BarSourceData1AdministrativeActionsArrayInner {
    'caseNumber': string | null;
    'description': string | null;
    'effectiveDate': Date | null;
    'resultingStatus': string | null;
    'type': string | null;
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

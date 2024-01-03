export declare class ServiceHistory1 {
    'object': string;
    'appointedBy': string | null;
    'reasonForTermination': string | null;
    'sourceCourt': string | null;
    'title': string | null;
    'fromYear': number | null;
    'toYear': number | null;
    'fromDate': Date | null;
    'toDate': Date | null;
    'isVisible': boolean;
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

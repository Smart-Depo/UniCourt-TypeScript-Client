export declare class GetCase200ResponseSourceCaseDataSourceCauseOfActionArrayInner {
    'object': string;
    'isVisible': boolean;
    'sourceCauseOfActionRaw': string | null;
    'sourceCauseOfAction': string | null;
    'sourceStatute': string | null;
    'firstFetchDate': string;
    'lastFetchDate': string;
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

export declare class CauseOfActionAdditionalData1 {
    'object': string;
    'causeOfActionAdditionalDataId': string;
    'type': string;
    'value': string;
    'createdDate': Date;
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

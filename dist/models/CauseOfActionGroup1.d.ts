export declare class CauseOfActionGroup1 {
    'object': string;
    'causeOfActionGroupId': string;
    'name': string;
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

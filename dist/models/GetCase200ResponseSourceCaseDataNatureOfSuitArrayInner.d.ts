export declare class GetCase200ResponseSourceCaseDataNatureOfSuitArrayInner {
    'object': string;
    'sourceText': string | null;
    'code': number;
    'name': string | null;
    'section': string | null;
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

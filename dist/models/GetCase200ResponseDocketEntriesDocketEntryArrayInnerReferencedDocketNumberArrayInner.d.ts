export declare class GetCase200ResponseDocketEntriesDocketEntryArrayInnerReferencedDocketNumberArrayInner {
    'object': string;
    'docketNumber': number;
    'docketEntriesAPI': string | null;
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

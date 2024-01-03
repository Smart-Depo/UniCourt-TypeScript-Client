export declare class CaseSearchResult1MatchedObjectArrayInner {
    'object': string;
    'matchedObjectId': string;
    'matchedObjectName': string;
    'matchedObjectAttribute': string;
    'highlightSnippet': string;
    'matchedObjectAPI': string;
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

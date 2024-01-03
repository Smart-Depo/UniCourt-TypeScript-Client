export declare class CaseStats {
    'object': string;
    'partyCount': number;
    'attorneyCount': number;
    'judgeCount': number;
    'docketEntryCount': number;
    'freeCaseDocumentCount': number;
    'paidCaseDocumentCount': number;
    'allCaseDocumentCount': number;
    'caseDocumentInLibraryCount': number;
    'hearingCount': number;
    'relatedCaseCount': number;
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

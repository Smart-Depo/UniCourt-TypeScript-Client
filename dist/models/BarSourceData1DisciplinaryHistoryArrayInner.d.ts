export declare class BarSourceData1DisciplinaryHistoryArrayInner {
    'action': string | null;
    'caseNumber': string | null;
    'complaint': string | null;
    'contactId': string | null;
    'dateOfAction': Date | null;
    'definition': string | null;
    'disciplinaryDecision': string | null;
    'entryDate': Date | null;
    'information': string | null;
    'link': string | null;
    'note': string | null;
    'probationDate': Date | null;
    'reinstatedDate': Date | null;
    'rule': string | null;
    'ruleNumber': string | null;
    'sectionDate': Date | null;
    'status': string | null;
    'stayDate': Date | null;
    'supremeCourt': string | null;
    'term': string | null;
    'typeOfAction': string | null;
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

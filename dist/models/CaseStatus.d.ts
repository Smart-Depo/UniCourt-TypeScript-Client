export declare class CaseStatus {
    'object': string;
    'caseStatusId': string;
    'caseStatusGroupId': string;
    'caseStatusGroup': string;
    'name': string | null;
    'caseClassArray': Array<string> | null;
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

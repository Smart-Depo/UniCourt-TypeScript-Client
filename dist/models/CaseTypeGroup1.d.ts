export declare class CaseTypeGroup1 {
    'object': string;
    'caseTypeGroupId': string;
    'caseClassId': string;
    'areaOfLawId': string;
    'caseClass': string;
    'areaOfLaw': string;
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

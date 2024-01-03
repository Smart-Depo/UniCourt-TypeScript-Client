export declare class CaseType {
    'object': string;
    'caseTypeId': string;
    'caseClassId': string;
    'areaOfLawId': string | null;
    'caseTypeGroupId': string | null;
    'caseClass': string;
    'areaOfLaw': string | null;
    'caseTypeGroup': string | null;
    'name': string | null;
    'saliCode': string | null;
    'caseTypeTag': string | null;
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

export declare class AreaOfLaw1 {
    'object': string;
    'areaOfLawId': string;
    'caseClassId': string;
    'caseClass': string;
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
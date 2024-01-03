export declare class NormJudgePublicData1NameHistoryArrayInner {
    'firstName': string | null;
    'middleName': string | null;
    'lastName': string | null;
    'prefix': string | null;
    'suffix': string | null;
    'isVisible': boolean;
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

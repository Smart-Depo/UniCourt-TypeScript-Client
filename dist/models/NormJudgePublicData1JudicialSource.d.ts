export declare class NormJudgePublicData1JudicialSource {
    'name': string;
    'type': NormJudgePublicData1JudicialSourceTypeEnum;
    'url': string | null;
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
export declare enum NormJudgePublicData1JudicialSourceTypeEnum {
    Website = "Website",
    Other = "Other"
}

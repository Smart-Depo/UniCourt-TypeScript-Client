export declare class NormJudgePublicData1Bio {
    'ethnicity': string | null;
    'birthCity': string | null;
    'birthDate': Date | null;
    'birthState': string | null;
    'deathCity': string | null;
    'deathDate': Date | null;
    'deathState': string | null;
    'politicalAffiliation': string | null;
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

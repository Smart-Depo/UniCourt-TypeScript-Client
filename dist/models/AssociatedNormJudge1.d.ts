import { CaseTimeline1 } from '../models/CaseTimeline1';
export declare class AssociatedNormJudge1 {
    'object': string;
    'normJudgeId': string;
    'normJudgeAPI': string;
    'caseTimeline': CaseTimeline1;
    'name': string;
    'firstName': string;
    'middleName': string | null;
    'lastName': string;
    'caseSearchAPI': string;
    'caseCount': number;
    'version': string;
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

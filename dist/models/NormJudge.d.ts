import { CaseAnalyticsAPI1 } from '../models/CaseAnalyticsAPI1';
import { JudgeAnalyticsAPI1 } from '../models/JudgeAnalyticsAPI1';
import { NormJudgePublicData1 } from '../models/NormJudgePublicData1';
export declare class NormJudge {
    'object': string;
    'normJudgeId': string;
    'name': string;
    'firstName': string;
    'middleName': string | null;
    'lastName': string;
    'caseSearchAPI': string;
    'caseAnalyticsAPI': CaseAnalyticsAPI1;
    'hasAssociatedPublicData': boolean;
    'judicialDataArray': Array<NormJudgePublicData1>;
    'judgeAnalyticsAPI': JudgeAnalyticsAPI1;
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

import { GetCase200ResponsePartiesPartyArrayInnerContact } from '../models/GetCase200ResponsePartiesPartyArrayInnerContact';
import { JudgeType1 } from '../models/JudgeType1';
import { PossibleNormJudge1 } from '../models/PossibleNormJudge1';
export declare class Judge {
    'object': string;
    'judgeId': string;
    'name': string;
    'namePrefix': string | null;
    'firstName': string | null;
    'middleName': string | null;
    'lastName': string | null;
    'nameSuffix': string | null;
    'contact': GetCase200ResponsePartiesPartyArrayInnerContact;
    'judgeType': JudgeType1 | null;
    'sourceJudgeType': string;
    'isVisible': boolean;
    'firstFetchDate': Date;
    'lastFetchDate': Date;
    'possibleNormJudgeArray': Array<PossibleNormJudge1>;
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

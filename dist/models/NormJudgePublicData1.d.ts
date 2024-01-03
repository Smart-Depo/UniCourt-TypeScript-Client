import { GetCase200ResponsePartiesPartyArrayInnerContact } from '../models/GetCase200ResponsePartiesPartyArrayInnerContact';
import { NormJudgePublicData1AbaRatings } from '../models/NormJudgePublicData1AbaRatings';
import { NormJudgePublicData1Bio } from '../models/NormJudgePublicData1Bio';
import { NormJudgePublicData1EducationArrayInner } from '../models/NormJudgePublicData1EducationArrayInner';
import { NormJudgePublicData1JudicialSource } from '../models/NormJudgePublicData1JudicialSource';
import { NormJudgePublicData1NameHistoryArrayInner } from '../models/NormJudgePublicData1NameHistoryArrayInner';
import { ServiceHistory1 } from '../models/ServiceHistory1';
export declare class NormJudgePublicData1 {
    'object': string;
    'judicialStatus': string | null;
    'judicialSource': NormJudgePublicData1JudicialSource;
    'abaRatings': NormJudgePublicData1AbaRatings | null;
    'aliasArray': Array<string>;
    'bio': NormJudgePublicData1Bio;
    'contact': GetCase200ResponsePartiesPartyArrayInnerContact;
    'educationArray': Array<NormJudgePublicData1EducationArrayInner>;
    'professionalCareerArray': Array<string>;
    'serviceHistoryArray': Array<ServiceHistory1>;
    'nameHistoryArray': Array<NormJudgePublicData1NameHistoryArrayInner>;
    'firstFetchDate': Date | null;
    'lastFetchDate': Date | null;
    'lastFetchDateWithUpdates': Date | null;
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

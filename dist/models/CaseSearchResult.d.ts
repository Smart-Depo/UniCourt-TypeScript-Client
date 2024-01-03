import { CaseSearchResult1MatchedObjectArrayInner } from '../models/CaseSearchResult1MatchedObjectArrayInner';
import { CaseStatus1 } from '../models/CaseStatus1';
import { CaseType1 } from '../models/CaseType1';
import { Court1 } from '../models/Court1';
import { CourtLocation1 } from '../models/CourtLocation1';
export declare class CaseSearchResult {
    'object': string;
    'caseId': string;
    'caseName': string | null;
    'caseNumber': string;
    'filedDate': Date;
    'court': Court1 | null;
    'courtLocation': CourtLocation1 | null;
    'caseType': CaseType1 | null;
    'caseStatus': CaseStatus1 | null;
    'firstFetchDate': Date;
    'lastFetchDate': Date;
    'lastFetchDateWithUpdates': Date;
    'participantsLastFetchDate': Date | null;
    'caseAPI': string;
    'matchedObjectArray': Array<CaseSearchResult1MatchedObjectArrayInner>;
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

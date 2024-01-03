import { CaseStatus1 } from '../models/CaseStatus1';
import { CaseType1 } from '../models/CaseType1';
import { Court1 } from '../models/Court1';
import { CourtLocation1 } from '../models/CourtLocation1';
import { GetCase200ResponseAttorneys } from '../models/GetCase200ResponseAttorneys';
import { GetCase200ResponseCaseDocuments } from '../models/GetCase200ResponseCaseDocuments';
import { GetCase200ResponseCaseStats } from '../models/GetCase200ResponseCaseStats';
import { GetCase200ResponseCauseOfActionArrayInner } from '../models/GetCase200ResponseCauseOfActionArrayInner';
import { GetCase200ResponseChargeArrayInner } from '../models/GetCase200ResponseChargeArrayInner';
import { GetCase200ResponseDocketEntries } from '../models/GetCase200ResponseDocketEntries';
import { GetCase200ResponseHearings } from '../models/GetCase200ResponseHearings';
import { GetCase200ResponseJudges } from '../models/GetCase200ResponseJudges';
import { GetCase200ResponseParties } from '../models/GetCase200ResponseParties';
import { GetCase200ResponseRelatedCases } from '../models/GetCase200ResponseRelatedCases';
import { GetCase200ResponseSourceCaseData } from '../models/GetCase200ResponseSourceCaseData';
export declare class Case {
    'object': string;
    'caseId': string;
    'url': string | null;
    'caseNumber': string;
    'caseName': string | null;
    'filedDate': Date;
    'hasOnlyMetaInfo': boolean;
    'courtServiceStatusId': string | null;
    'courtServiceStatusAPI': string | null;
    'court': Court1 | null;
    'courtLocation': CourtLocation1 | null;
    'caseType': CaseType1 | null;
    'chargeArray': Array<GetCase200ResponseChargeArrayInner>;
    'caseStatus': CaseStatus1 | null;
    'causeOfActionArray': Array<GetCase200ResponseCauseOfActionArrayInner>;
    'firstFetchDate': Date;
    'lastFetchDate': Date;
    'lastFetchDateWithUpdates': Date;
    'participantsLastFetchDate': Date | null;
    'sourceDataStatus': CaseSourceDataStatusEnum | null;
    'sourceCaseData': GetCase200ResponseSourceCaseData;
    'hasDocumentsWithPreview': boolean;
    'exportAPI': string;
    'caseStats': GetCase200ResponseCaseStats;
    'parties': GetCase200ResponseParties | null;
    'attorneys': GetCase200ResponseAttorneys | null;
    'judges': GetCase200ResponseJudges | null;
    'docketEntries': GetCase200ResponseDocketEntries | null;
    'hearings': GetCase200ResponseHearings | null;
    'caseDocuments': GetCase200ResponseCaseDocuments | null;
    'relatedCases': GetCase200ResponseRelatedCases | null;
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
export declare enum CaseSourceDataStatusEnum {
    NoLongerAvailableInCourt = "NO_LONGER_AVAILABLE_IN_COURT",
    SourceDeprecated = "SOURCE_DEPRECATED",
    Null = "null"
}

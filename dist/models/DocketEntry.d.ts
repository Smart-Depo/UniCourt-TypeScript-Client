import { GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments } from '../models/GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments';
import { GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments } from '../models/GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments';
import { GetCase200ResponseDocketEntriesDocketEntryArrayInnerReferencedDocketNumberArrayInner } from '../models/GetCase200ResponseDocketEntriesDocketEntryArrayInnerReferencedDocketNumberArrayInner';
import { GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceData } from '../models/GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceData';
export declare class DocketEntry {
    'object': string;
    'sortOrder': number;
    'docketEntryDate': Date;
    'docketNumber': number | null;
    'docketBadge': DocketEntryDocketBadgeEnum;
    'text': string;
    'textStructured': GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceData | null;
    'referencedDocketNumberArray': Array<GetCase200ResponseDocketEntriesDocketEntryArrayInnerReferencedDocketNumberArrayInner>;
    'docketEntryPrimaryDocuments': GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments | null;
    'docketEntrySecondaryDocuments': GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments | null;
    'lastFetchDate': string;
    'boundary': DocketEntryBoundaryEnum | null;
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
export declare enum DocketEntryDocketBadgeEnum {
    Docket = "DOCKET",
    Charge = "CHARGE",
    Hearing = "HEARING",
    Judgement = "JUDGEMENT",
    Financial = "FINANCIAL",
    Disposition = "DISPOSITION",
    Sentence = "SENTENCE",
    Bond = "BOND",
    Bail = "BAIL",
    CauseOfAction = "CAUSE_OF_ACTION",
    Arrest = "ARREST",
    Warrant = "WARRANT",
    Summon = "SUMMON",
    Tickler = "TICKLER",
    Opinion = "OPINION"
}
export declare enum DocketEntryBoundaryEnum {
    First = "first",
    Last = "last",
    SingleDocketEntry = "single_docket_entry",
    Null = "null"
}

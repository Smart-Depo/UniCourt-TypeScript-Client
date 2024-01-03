import { GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments } from '../models/GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments';
import { GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments } from '../models/GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments';
import { GetCase200ResponseDocketEntriesDocketEntryArrayInnerReferencedDocketNumberArrayInner } from '../models/GetCase200ResponseDocketEntriesDocketEntryArrayInnerReferencedDocketNumberArrayInner';
import { GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceData } from '../models/GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceData';
export declare class GetCase200ResponseDocketEntriesDocketEntryArrayInner {
    'object': string;
    'sortOrder': number;
    'docketEntryDate': Date;
    'docketNumber': number | null;
    'docketBadge': GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketBadgeEnum;
    'text': string;
    'textStructured': GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceData | null;
    'referencedDocketNumberArray': Array<GetCase200ResponseDocketEntriesDocketEntryArrayInnerReferencedDocketNumberArrayInner>;
    'docketEntryPrimaryDocuments': GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments | null;
    'docketEntrySecondaryDocuments': GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments | null;
    'lastFetchDate': string;
    'boundary': GetCase200ResponseDocketEntriesDocketEntryArrayInnerBoundaryEnum | null;
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
export declare enum GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketBadgeEnum {
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
export declare enum GetCase200ResponseDocketEntriesDocketEntryArrayInnerBoundaryEnum {
    First = "first",
    Last = "last",
    SingleDocketEntry = "single_docket_entry",
    Null = "null"
}

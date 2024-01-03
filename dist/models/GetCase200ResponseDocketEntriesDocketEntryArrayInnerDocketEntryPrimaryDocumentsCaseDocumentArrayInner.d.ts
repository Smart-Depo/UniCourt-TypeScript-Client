import { GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerPreviewDocument } from '../models/GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerPreviewDocument';
export declare class GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner {
    'object': string;
    'caseDocumentId': string;
    'sortOrder': number | null;
    'name': string | null;
    'description': string | null;
    'documentFiledDate': string | null;
    'parentDocumentId': string | null;
    'childDocumentIdArray': Array<string>;
    'pages': number | null;
    'isPreviewAvailable': boolean;
    'previewDocument': GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerPreviewDocument | null;
    'price': number | null;
    'inLibrary': boolean;
    'addedToLibraryDate': string | null;
    'estimatedOrderDuration': GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerEstimatedOrderDurationEnum;
    'downloadAPI': string | null;
    'firstFetchDate': string;
    'sourceDataStatus': GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerSourceDataStatusEnum | null;
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
export declare enum GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerEstimatedOrderDurationEnum {
    EstimateUnavailable = "estimateUnavailable",
    WithinMinutes = "withinMinutes",
    WithinHours = "withinHours",
    WithinDays = "withinDays",
    WithinWeeks = "withinWeeks"
}
export declare enum GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerSourceDataStatusEnum {
    NoLongerAvailableInCourt = "NO_LONGER_AVAILABLE_IN_COURT",
    SourceDeprecated = "SOURCE_DEPRECATED",
    Sealed = "SEALED",
    Null = "null"
}

import { Exception1 } from '../models/Exception1';
import { ExportFile1 } from '../models/ExportFile1';
import { GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner } from '../models/GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner';
export declare class OrderCaseDocument200Response {
    'object': string;
    'caseDocumentOrderCallbackId': string;
    'caseDocumentId': string;
    'callbackGeneratedDate': Date | null;
    'status': OrderCaseDocument200ResponseStatusEnum;
    'caseDocument': GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner | null;
    'caseDocumentOrderCallbackAPI': string;
    'file': ExportFile1 | null;
    'exception': Exception1 | null;
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
export declare enum OrderCaseDocument200ResponseStatusEnum {
    Complete = "COMPLETE",
    Failure = "FAILURE",
    InProgress = "IN_PROGRESS",
    Delayed = "DELAYED"
}

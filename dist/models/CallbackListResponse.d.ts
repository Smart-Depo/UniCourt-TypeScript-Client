import { GetCallbacks200ResponseCaseDocumentOrderCallbacks } from '../models/GetCallbacks200ResponseCaseDocumentOrderCallbacks';
import { GetCallbacks200ResponseCaseExportCallbacks } from '../models/GetCallbacks200ResponseCaseExportCallbacks';
export declare class CallbackListResponse {
    'object': string;
    'caseDocumentOrderCallbacks': GetCallbacks200ResponseCaseDocumentOrderCallbacks;
    'caseExportCallbacks': GetCallbacks200ResponseCaseExportCallbacks;
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

import { Exception1 } from '../models/Exception1';
import { ExportFile1 } from '../models/ExportFile1';
export declare class ExportCase200Response {
    'object': string;
    'caseExportCallbackId': string;
    'caseId': string;
    'callbackGeneratedDate': Date | null;
    'status': ExportCase200ResponseStatusEnum;
    'caseExportCallbackAPI': string;
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
export declare enum ExportCase200ResponseStatusEnum {
    Complete = "COMPLETE",
    Failure = "FAILURE",
    InProgress = "IN_PROGRESS"
}

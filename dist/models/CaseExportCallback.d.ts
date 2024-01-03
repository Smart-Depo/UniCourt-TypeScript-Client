import { Exception1 } from '../models/Exception1';
import { ExportFile1 } from '../models/ExportFile1';
export declare class CaseExportCallback {
    'object': string;
    'caseExportCallbackId': string;
    'caseId': string;
    'callbackGeneratedDate': Date | null;
    'status': CaseExportCallbackStatusEnum;
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
export declare enum CaseExportCallbackStatusEnum {
    Complete = "COMPLETE",
    Failure = "FAILURE",
    InProgress = "IN_PROGRESS"
}

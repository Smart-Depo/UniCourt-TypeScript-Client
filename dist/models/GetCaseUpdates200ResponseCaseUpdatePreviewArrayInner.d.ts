import { CaseUpdatePacerOptionsResponse1 } from '../models/CaseUpdatePacerOptionsResponse1';
import { Exception1 } from '../models/Exception1';
export declare class GetCaseUpdates200ResponseCaseUpdatePreviewArrayInner {
    'object': string;
    'caseId': string;
    'status': GetCaseUpdates200ResponseCaseUpdatePreviewArrayInnerStatusEnum;
    'requestedDate': Date;
    'caseAPI': string;
    'pacerOptions': CaseUpdatePacerOptionsResponse1 | null;
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
export declare enum GetCaseUpdates200ResponseCaseUpdatePreviewArrayInnerStatusEnum {
    Complete = "COMPLETE",
    Failure = "FAILURE",
    InProgress = "IN_PROGRESS"
}

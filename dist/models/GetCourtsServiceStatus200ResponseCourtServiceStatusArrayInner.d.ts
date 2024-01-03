import { GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus } from '../models/GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus';
export declare class GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner {
    'object': string;
    'courtServiceStatusId': string;
    'courtIdArray': Array<string> | null;
    'courtLocationIdArray': Array<string> | null;
    'caseClassIdArray': Array<string> | null;
    'serviceStatusAsOn': string | null;
    'caseUpdateServiceStatus': GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus | null;
    'caseTrackServiceStatus': GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus | null;
    'caseDocumentOrderServiceStatus': GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus | null;
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

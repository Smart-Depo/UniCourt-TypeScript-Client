import { GetCase200ResponseSourceCaseDataNatureOfSuitArrayInner } from '../models/GetCase200ResponseSourceCaseDataNatureOfSuitArrayInner';
import { GetCase200ResponseSourceCaseDataSourceCauseOfActionArrayInner } from '../models/GetCase200ResponseSourceCaseDataSourceCauseOfActionArrayInner';
import { GetCase200ResponseSourceCaseDataSourceChargeArrayInner } from '../models/GetCase200ResponseSourceCaseDataSourceChargeArrayInner';
import { GetCase200ResponseSourceCaseDataSourcePageDataInner } from '../models/GetCase200ResponseSourceCaseDataSourcePageDataInner';
export declare class GetCase200ResponseSourceCaseData {
    'object': string;
    'sourceCourt': string;
    'sourceCaseType': string;
    'sourceChargeArray': Array<GetCase200ResponseSourceCaseDataSourceChargeArrayInner>;
    'natureOfSuitArray': Array<GetCase200ResponseSourceCaseDataNatureOfSuitArrayInner>;
    'sourceCauseOfActionArray': Array<GetCase200ResponseSourceCaseDataSourceCauseOfActionArrayInner>;
    'sourceCaseStatus': string;
    'sourcePageData': Array<GetCase200ResponseSourceCaseDataSourcePageDataInner>;
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

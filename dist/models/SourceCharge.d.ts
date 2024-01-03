import { GetCase200ResponseSourceCaseDataSourceChargeArrayInnerSourceChargeAdditionalDataArrayInner } from '../models/GetCase200ResponseSourceCaseDataSourceChargeArrayInnerSourceChargeAdditionalDataArrayInner';
export declare class SourceCharge {
    'object': string;
    'sourceChargeRaw': string;
    'sourceCharge': string | null;
    'isVisible': boolean;
    'sourceStatute': string | null;
    'sourceChargeDegree': string | null;
    'sourceChargeSeverity': string | null;
    'sourceChargeAdditionalDataArray': Array<GetCase200ResponseSourceCaseDataSourceChargeArrayInnerSourceChargeAdditionalDataArrayInner>;
    'firstFetchDate': string;
    'lastFetchDate': string;
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

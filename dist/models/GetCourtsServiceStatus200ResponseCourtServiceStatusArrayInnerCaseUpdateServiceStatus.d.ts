import { GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetails } from '../models/GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetails';
export declare class GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus {
    'object': string;
    'serviceUp': boolean;
    'serviceDetails': GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceDetailsEnum;
    'serviceStatusDownDetails': GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetails | null;
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
export declare enum GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceDetailsEnum {
    AcceptingCaseUpdates = "acceptingCaseUpdates",
    NotAcceptingCaseUpdates = "notAcceptingCaseUpdates",
    AcceptingCaseTrack = "acceptingCaseTrack",
    NotAcceptingCaseTrack = "notAcceptingCaseTrack",
    AcceptingAutoDocOrders = "acceptingAutoDocOrders",
    AcceptingManualDocOrders = "acceptingManualDocOrders",
    NotAcceptingAutoDocOrdersLimitExceeded = "notAcceptingAutoDocOrdersLimitExceeded",
    NotAcceptingManualDocOrdersLimitExceeded = "notAcceptingManualDocOrdersLimitExceeded",
    NotAcceptingDocOrders = "notAcceptingDocOrders"
}

import { AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerPageInfo } from '../models/AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerPageInfo';
import { AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerReceipt } from '../models/AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerReceipt';
import { AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerSearchResultsArrayInner } from '../models/AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerSearchResultsArrayInner';
export declare class PCLCase {
    'object': string;
    'pageNumber': number;
    'pacerReceipt': AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerReceipt;
    'pacerPageInfo': AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerPageInfo;
    'pacerSearchResultsArray': Array<AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerSearchResultsArrayInner>;
    'nextPageAPI': string | null;
    'totalPages': number;
    'totalCount': number;
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

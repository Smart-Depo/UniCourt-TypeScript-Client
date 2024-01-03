import { Court1 } from '../models/Court1';
import { GetCourtCoverage200ResponseCaseClassCoverageArrayInner } from '../models/GetCourtCoverage200ResponseCaseClassCoverageArrayInner';
export declare class GetCourtCoverage200Response {
    'object': string;
    'lastUpdateCountDate': string;
    'court': Court1 | null;
    'totalCaseCount': number;
    'totalCasesInLastThirtyDaysCount': number;
    'totalFreeCaseDocumentCount': number;
    'totalFreeCaseDocumentsInLastThirtyDaysCount': number;
    'totalPaidCaseDocumentCount': number;
    'totalPaidCaseDocumentsInLastThirtyDaysCount': number;
    'totalCaseDocumentInLibraryCount': number;
    'totalCaseDocumentInLibraryInLastThirtyDaysCount': number;
    'caseClassCoverageArray': Array<GetCourtCoverage200ResponseCaseClassCoverageArrayInner>;
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

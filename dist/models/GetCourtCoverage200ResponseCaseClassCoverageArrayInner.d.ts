import { CaseClass1 } from '../models/CaseClass1';
export declare class GetCourtCoverage200ResponseCaseClassCoverageArrayInner {
    'object': string;
    'caseClass': CaseClass1;
    'courtServiceStatusAPI': string;
    'caseCount': number;
    'casesInLastThirtyDaysCount': number;
    'freeCaseDocumentCount': number;
    'freeCaseDocumentsInLastThirtyDaysCount': number;
    'paidCaseDocumentCount': number;
    'paidCaseDocumentsInLastThirtyDaysCount': number;
    'caseDocumentInLibraryCount': number;
    'caseDocumentInLibraryInLastThirtyDaysCount': number;
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

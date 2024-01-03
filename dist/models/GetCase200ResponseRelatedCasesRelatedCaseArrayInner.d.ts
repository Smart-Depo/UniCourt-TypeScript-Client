import { CaseRelationshipType1 } from '../models/CaseRelationshipType1';
import { GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceData } from '../models/GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceData';
export declare class GetCase200ResponseRelatedCasesRelatedCaseArrayInner {
    'object': string;
    'caseId': string | null;
    'caseNumber': string;
    'caseName': string | null;
    'caseRelationshipType': CaseRelationshipType1 | null;
    'sourceCaseRelationshipType': string;
    'isVisible': boolean;
    'additionalSourceData': GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceData | null;
    'caseAPI': string | null;
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

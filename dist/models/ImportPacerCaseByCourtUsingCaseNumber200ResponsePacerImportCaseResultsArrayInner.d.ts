import { CaseSearchResult1 } from '../models/CaseSearchResult1';
export declare class ImportPacerCaseByCourtUsingCaseNumber200ResponsePacerImportCaseResultsArrayInner {
    'object': string;
    'hasOnlyMetaInfo': boolean;
    'uniCourtContent': CaseSearchResult1;
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

import { ImportPacerCaseByCourtUsingCaseNumber200ResponsePacerImportCaseResultsArrayInner } from '../models/ImportPacerCaseByCourtUsingCaseNumber200ResponsePacerImportCaseResultsArrayInner';
export declare class PACERImportCase {
    'object': string;
    'courtFee': number | null;
    'pacerImportCaseResultsArray': Array<ImportPacerCaseByCourtUsingCaseNumber200ResponsePacerImportCaseResultsArrayInner>;
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

import { AllCourtsPacerCaseLocatorPartySearch200ResponsePacerSearchResultsArrayInnerPacerContent } from '../models/AllCourtsPacerCaseLocatorPartySearch200ResponsePacerSearchResultsArrayInnerPacerContent';
import { CaseSearchResult1 } from '../models/CaseSearchResult1';
export declare class PACERPartySearchResults {
    'object': string;
    'pacerContent': AllCourtsPacerCaseLocatorPartySearch200ResponsePacerSearchResultsArrayInnerPacerContent;
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

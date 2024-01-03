import { GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataExtractedFields } from '../models/GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataExtractedFields';
import { GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInner } from '../models/GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInner';
export declare class SourceStructuredData {
    'rawOrderedDataArray': Array<GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInner>;
    'extractedFields': GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataExtractedFields | null;
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

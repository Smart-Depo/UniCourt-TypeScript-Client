import { GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceData } from '../models/GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceData';
export declare class Hearing {
    'object': string;
    'hearingDate': Date;
    'hearingDescription': string | null;
    'hearingStructured': GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceData | null;
    'location': string | null;
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

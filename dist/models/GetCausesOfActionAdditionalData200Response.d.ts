import { CauseOfActionAdditionalData1 } from '../models/CauseOfActionAdditionalData1';
export declare class GetCausesOfActionAdditionalData200Response {
    'object': string;
    'causeOfActionAdditionalDataArray': Array<CauseOfActionAdditionalData1>;
    'nextPageAPI': string | null;
    'previousPageAPI': string | null;
    'pageNumber': number;
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

import { CauseOfActionGroup1 } from '../models/CauseOfActionGroup1';
export declare class GetCausesOfActionGroup200Response {
    'object': string;
    'causeOfActionGroupArray': Array<CauseOfActionGroup1>;
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

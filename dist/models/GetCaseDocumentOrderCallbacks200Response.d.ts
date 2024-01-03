import { OrderCaseDocument200Response } from '../models/OrderCaseDocument200Response';
export declare class GetCaseDocumentOrderCallbacks200Response {
    'object': string;
    'totalPages': number;
    'totalCount': number;
    'pageNumber': number;
    'nextPageAPI': string | null;
    'previousPageAPI': string | null;
    'callbackArray': Array<OrderCaseDocument200Response>;
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

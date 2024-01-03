import { ChargeAdditionalData1 } from '../models/ChargeAdditionalData1';
export declare class GetChargesAdditionalData200Response {
    'object': string;
    'chargeAdditionalDataArray': Array<ChargeAdditionalData1>;
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

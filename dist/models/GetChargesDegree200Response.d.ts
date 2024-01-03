import { ChargeDegree1 } from '../models/ChargeDegree1';
export declare class GetChargesDegree200Response {
    'object': string;
    'chargeDegreeArray': Array<ChargeDegree1>;
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

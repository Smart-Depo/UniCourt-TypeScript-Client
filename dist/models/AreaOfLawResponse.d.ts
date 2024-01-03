import { AreaOfLaw1 } from '../models/AreaOfLaw1';
export declare class AreaOfLawResponse {
    'object': string;
    'areaOfLawArray': Array<AreaOfLaw1>;
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

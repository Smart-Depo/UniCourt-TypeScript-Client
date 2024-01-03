import { ExportCase200Response } from '../models/ExportCase200Response';
export declare class GetCaseExportCallbacks200Response {
    'object': string;
    'totalPages': number;
    'totalCount': number;
    'pageNumber': number;
    'nextPageAPI': string | null;
    'previousPageAPI': string | null;
    'callbackArray': Array<ExportCase200Response>;
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

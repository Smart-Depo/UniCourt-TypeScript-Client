import { GetCaseUpdates200ResponseCaseUpdatePreviewArrayInner } from '../models/GetCaseUpdates200ResponseCaseUpdatePreviewArrayInner';
export declare class GetCaseUpdates200Response {
    'object': string;
    'totalPages': number;
    'totalCount': number;
    'pageNumber': number;
    'nextPageAPI': string | null;
    'previousPageAPI': string | null;
    'caseUpdatePreviewArray': Array<GetCaseUpdates200ResponseCaseUpdatePreviewArrayInner>;
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

import { GetCaseTracks200ResponseCaseTrackPreviewArrayInner } from '../models/GetCaseTracks200ResponseCaseTrackPreviewArrayInner';
export declare class CaseTrackListResponse {
    'object': string;
    'totalPages': number;
    'totalCount': number;
    'pageNumber': number;
    'nextPageAPI': string | null;
    'previousPageAPI': string | null;
    'caseTrackPreviewArray': Array<GetCaseTracks200ResponseCaseTrackPreviewArrayInner>;
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

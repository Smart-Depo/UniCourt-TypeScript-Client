import { AttorneyRepresentationType1 } from '../models/AttorneyRepresentationType1';
export declare class AttorneyRepresentationTypeResponse {
    'object': string;
    'attorneyRepresentationTypeArray': Array<AttorneyRepresentationType1>;
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

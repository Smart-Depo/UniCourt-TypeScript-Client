import { GetCase200ResponseHearingsHearingArrayInner } from '../models/GetCase200ResponseHearingsHearingArrayInner';
export declare class Hearings {
    'object': string;
    'pageNumber': number;
    'hearingArray': Array<GetCase200ResponseHearingsHearingArrayInner>;
    'nextPageAPI': string | null;
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

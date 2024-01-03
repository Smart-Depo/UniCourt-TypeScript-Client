import { ListAllTokenIds200ResponseAccessTokenIdArrayInner } from '../models/ListAllTokenIds200ResponseAccessTokenIdArrayInner';
export declare class AccessTokenIdListResponse {
    'object': string;
    'accessTokenIdArray': Array<ListAllTokenIds200ResponseAccessTokenIdArrayInner>;
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

import { GetPacerCredential200ResponsePacerCredentialArrayInner } from '../models/GetPacerCredential200ResponsePacerCredentialArrayInner';
export declare class GetPacerCredential200Response {
    'object': string;
    'totalPages': number;
    'totalCount': number;
    'pageNumber': number;
    'nextPageAPI': string | null;
    'previousPageAPI': string | null;
    'pacerCredentialArray': Array<GetPacerCredential200ResponsePacerCredentialArrayInner>;
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

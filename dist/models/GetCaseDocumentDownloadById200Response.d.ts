import { Exception1 } from '../models/Exception1';
export declare class GetCaseDocumentDownloadById200Response {
    'object': string;
    'caseDocumentId': string;
    'expiryDate': string | null;
    'fileUrl': string | null;
    'caseDocumentDownloadAPI': string | null;
    'exception': Exception1 | null;
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

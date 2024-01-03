import { OrderCaseDocumentRequestPacerOptions } from '../models/OrderCaseDocumentRequestPacerOptions';
export declare class OrderCaseDocumentRequest {
    'caseDocumentId': string;
    'isPreviewOnly': boolean;
    'pacerOptions'?: OrderCaseDocumentRequestPacerOptions;
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

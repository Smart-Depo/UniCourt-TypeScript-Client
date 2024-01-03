import { UpdateCaseRequestPacerOptions } from '../models/UpdateCaseRequestPacerOptions';
export declare class UpdateCaseRequest {
    'caseId': string;
    'pacerOptions'?: UpdateCaseRequestPacerOptions;
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

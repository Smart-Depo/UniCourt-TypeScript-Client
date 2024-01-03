import { CaseUpdatePacerOptionsResponse1 } from '../models/CaseUpdatePacerOptionsResponse1';
import { Exception1 } from '../models/Exception1';
import { GetCase200Response } from '../models/GetCase200Response';
export declare class UpdateCase200Response {
    'object': string;
    'caseId': string;
    'status': UpdateCase200ResponseStatusEnum;
    'requestedDate': Date;
    'caseAPI': string;
    'pacerOptions': CaseUpdatePacerOptionsResponse1 | null;
    'exception': Exception1 | null;
    '_case': GetCase200Response | null;
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
export declare enum UpdateCase200ResponseStatusEnum {
    Complete = "COMPLETE",
    Failure = "FAILURE",
    InProgress = "IN_PROGRESS"
}

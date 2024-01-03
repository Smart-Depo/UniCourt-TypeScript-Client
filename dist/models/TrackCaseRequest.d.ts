import { Schedule1 } from '../models/Schedule1';
import { UpdateCaseRequest } from '../models/UpdateCaseRequest';
export declare class TrackCaseRequest {
    'caseTrackParams': UpdateCaseRequest;
    'schedule': Schedule1;
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

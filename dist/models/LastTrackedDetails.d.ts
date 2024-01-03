import { CaseUpdatePacerOptionsResponse1 } from '../models/CaseUpdatePacerOptionsResponse1';
import { Exception1 } from '../models/Exception1';
export declare class LastTrackedDetails {
    'object': string;
    'pacerOptions': CaseUpdatePacerOptionsResponse1 | null;
    'lastTrackDate': Date | null;
    'lastTrackException': Exception1 | null;
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

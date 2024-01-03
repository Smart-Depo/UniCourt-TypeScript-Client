import { CaseTrackPostRequestLastTrackedDetails } from '../models/CaseTrackPostRequestLastTrackedDetails';
import { CaseUpdatePacerOptionsResponse1 } from '../models/CaseUpdatePacerOptionsResponse1';
import { GetCase200Response } from '../models/GetCase200Response';
import { Schedule2 } from '../models/Schedule2';
export declare class CaseTrack {
    'object': string;
    'caseId': string;
    'pacerOptions': CaseUpdatePacerOptionsResponse1 | null;
    'schedule': Schedule2;
    'lastTrackedDetails': CaseTrackPostRequestLastTrackedDetails | null;
    'lastFetchDate': Date | null;
    'lastFetchDateWithUpdates': Date | null;
    'caseAPI': string;
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

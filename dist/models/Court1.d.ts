import { AdditionalLevels1 } from '../models/AdditionalLevels1';
export declare class Court1 {
    'object': string;
    'courtId': string;
    'courtTypeId': string;
    'courtSystemId': string;
    'type': string;
    'system': string;
    'name': string;
    'nameAka': string;
    'additionalLevels': AdditionalLevels1 | null;
    'containerType': string | null;
    'container': string | null;
    'createdDate': Date;
    'jurisdictionGeoForCourtAPI': string | null;
    'courtLocationsForCourtAPI': string | null;
    'appealCourtsForCourtAPI': string | null;
    'courtServiceStatusAPI': string | null;
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

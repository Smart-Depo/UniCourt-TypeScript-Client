import { AssociatedNormParty1 } from '../models/AssociatedNormParty1';
export declare class AssociatedNormPartyResponse1 {
    'associatedNormPartyArray': Array<AssociatedNormParty1>;
    'nextPageAPI': string | null;
    'previousPageAPI': string | null;
    'totalPages': number;
    'totalCount': number;
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

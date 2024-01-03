import { AssociatedNormAttorney1 } from '../models/AssociatedNormAttorney1';
export declare class AssociatedNormAttorneyResponse1 {
    'associatedNormAttorneyArray': Array<AssociatedNormAttorney1>;
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

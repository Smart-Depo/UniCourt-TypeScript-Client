import { AttorneyAnalyticsAPI1 } from '../models/AttorneyAnalyticsAPI1';
import { BarRecord1 } from '../models/BarRecord1';
import { CaseAnalyticsAPI1 } from '../models/CaseAnalyticsAPI1';
import { SimilarNormAttorney1 } from '../models/SimilarNormAttorney1';
export declare class NormAttorney1 {
    'object': string;
    'normAttorneyId': string;
    'name': string;
    'firstName': string;
    'middleName': string | null;
    'lastName': string;
    'caseSearchAPI': string;
    'caseAnalyticsAPI': CaseAnalyticsAPI1;
    'hasAssociatedPublicData': boolean;
    'barRecordArray': Array<BarRecord1>;
    'attorneyAnalyticsAPI': AttorneyAnalyticsAPI1;
    'similarNormAttorneyArray': Array<SimilarNormAttorney1>;
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

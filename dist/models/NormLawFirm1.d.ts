import { CaseAnalyticsAPI1 } from '../models/CaseAnalyticsAPI1';
import { LawFirmAnalyticsAPI1 } from '../models/LawFirmAnalyticsAPI1';
import { NormOrganization1 } from '../models/NormOrganization1';
export declare class NormLawFirm1 {
    'object': string;
    'normLawFirmId': string;
    'name': string;
    'caseSearchAPI': string;
    'caseAnalyticsAPI': CaseAnalyticsAPI1;
    'normOrganizationData': NormOrganization1;
    'lawFirmAnalyticsAPI': LawFirmAnalyticsAPI1;
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

import { CaseAnalyticsAPI1 } from '../models/CaseAnalyticsAPI1';
import { Individual } from '../models/Individual';
import { NormOrganization1 } from '../models/NormOrganization1';
import { PartyAnalyticsAPI1 } from '../models/PartyAnalyticsAPI1';
import { RelatedNormParty1 } from '../models/RelatedNormParty1';
export declare class NormParty1 {
    'object': string;
    'normPartyId': string;
    'name': string;
    'partyClassificationType': NormParty1PartyClassificationTypeEnum;
    'caseSearchAPI': string;
    'caseAnalyticsAPI': CaseAnalyticsAPI1;
    'individualData': Individual | null;
    'normOrganizationData': NormOrganization1;
    'partyAnalyticsAPI': PartyAnalyticsAPI1;
    'relatedNormPartyArray': Array<RelatedNormParty1>;
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
export declare enum NormParty1PartyClassificationTypeEnum {
    Individual = "Individual",
    Organization = "Organization"
}

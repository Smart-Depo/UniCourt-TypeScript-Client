import { NormCorporateGroup1 } from '../models/NormCorporateGroup1';
import { NormOrganization1TickerArrayInner } from '../models/NormOrganization1TickerArrayInner';
import { SOSData1 } from '../models/SOSData1';
export declare class NormOrganization {
    'object': string;
    'normOrganizationId': string;
    'name': string;
    'organizationType': NormOrganizationOrganizationTypeEnum;
    'lei': string | null;
    'cik': string | null;
    'tickerArray': Array<NormOrganization1TickerArrayInner>;
    'naics': string | null;
    'naicsDescription': string | null;
    'sic': string | null;
    'sicDescription': string | null;
    'isInvolvedInLitigation': boolean;
    'normPartyAPI': string;
    'normCorporateGroupArray': Array<NormCorporateGroup1>;
    'sosDataArray': Array<SOSData1>;
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
export declare enum NormOrganizationOrganizationTypeEnum {
    Business = "Business",
    GovernmentAgency = "GovernmentAgency"
}

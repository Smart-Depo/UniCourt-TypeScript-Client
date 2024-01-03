import { AttorneyRepresentationType1 } from '../models/AttorneyRepresentationType1';
import { GetCase200ResponsePartiesPartyArrayInnerContact } from '../models/GetCase200ResponsePartiesPartyArrayInnerContact';
import { GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations } from '../models/GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations';
import { PartyRole1 } from '../models/PartyRole1';
import { PossibleNormParty1 } from '../models/PossibleNormParty1';
export declare class GetCase200ResponsePartiesPartyArrayInner {
    'object': string;
    'partyId': string;
    'name': string;
    'namePrefix': string | null;
    'firstName': string | null;
    'middleName': string | null;
    'lastName': string | null;
    'nameSuffix': string | null;
    'contact': GetCase200ResponsePartiesPartyArrayInnerContact;
    'partyClassificationType': GetCase200ResponsePartiesPartyArrayInnerPartyClassificationTypeEnum;
    'partyRole': PartyRole1 | null;
    'sourcePartyRole': string;
    'isVisible': boolean;
    'firstFetchDate': Date;
    'lastFetchDate': Date;
    'attorneyRepresentationType': AttorneyRepresentationType1 | null;
    'partyAttorneyAssociations': GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations | null;
    'possibleNormPartyArray': Array<PossibleNormParty1>;
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
export declare enum GetCase200ResponsePartiesPartyArrayInnerPartyClassificationTypeEnum {
    Individual = "INDIVIDUAL",
    Company = "COMPANY",
    Other = "OTHER"
}

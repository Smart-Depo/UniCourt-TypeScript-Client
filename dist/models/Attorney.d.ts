import { AttorneyType1 } from '../models/AttorneyType1';
import { GetCase200ResponseAttorneysAttorneyArrayInnerAttorneyLawFirmArrayInner } from '../models/GetCase200ResponseAttorneysAttorneyArrayInnerAttorneyLawFirmArrayInner';
import { GetCase200ResponsePartiesPartyArrayInnerContact } from '../models/GetCase200ResponsePartiesPartyArrayInnerContact';
import { GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations } from '../models/GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations';
import { PossibleNormAttorney1 } from '../models/PossibleNormAttorney1';
import { PossibleNormLawFirm1 } from '../models/PossibleNormLawFirm1';
export declare class Attorney {
    'object': string;
    'attorneyId': string;
    'name': string;
    'namePrefix': string | null;
    'firstName': string | null;
    'middleName': string | null;
    'lastName': string | null;
    'nameSuffix': string | null;
    'contact': GetCase200ResponsePartiesPartyArrayInnerContact;
    'attorneyLawFirmArray': Array<GetCase200ResponseAttorneysAttorneyArrayInnerAttorneyLawFirmArrayInner>;
    'barNumber': string | null;
    'attorneyType': AttorneyType1 | null;
    'sourceAttorneyType': string;
    'isVisible': boolean;
    'firstFetchDate': Date;
    'lastFetchDate': Date;
    'partyAttorneyAssociations': GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations | null;
    'possibleNormAttorneyArray': Array<PossibleNormAttorney1>;
    'possibleNormLawFirmArray': Array<PossibleNormLawFirm1>;
    'partyRoleGroupIdArray': Array<string>;
    'partyRoleIdArray': Array<string>;
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

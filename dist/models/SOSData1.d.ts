import { AssociatedSoSPerson1 } from '../models/AssociatedSoSPerson1';
import { GetCase200ResponsePartiesPartyArrayInnerContact } from '../models/GetCase200ResponsePartiesPartyArrayInnerContact';
import { SOSAssociatedNormOrganization1 } from '../models/SOSAssociatedNormOrganization1';
import { SOSNameChange1 } from '../models/SOSNameChange1';
export declare class SOSData1 {
    'object': string;
    'sosNumber': string | null;
    'stateCode': string;
    'fein': string | null;
    'domesticRegistration': boolean;
    'registeredDate': Date | null;
    'status': SOSData1StatusEnum | null;
    'isActive': boolean;
    'inactivationDate': Date | null;
    'associatedSoSPersonArray': Array<AssociatedSoSPerson1>;
    'contact': GetCase200ResponsePartiesPartyArrayInnerContact;
    'nameChangesArray': Array<SOSNameChange1>;
    'sosAssociatedNormOrganizationArray': Array<SOSAssociatedNormOrganization1>;
    'firstFetchDate': Date;
    'lastFetchDate': Date;
    'lastFetchDateWithUpdates': Date;
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
export declare enum SOSData1StatusEnum {
    Active = "Active"
}

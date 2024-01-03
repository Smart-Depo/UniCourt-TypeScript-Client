import { GetCase200ResponsePartiesPartyArrayInnerContact } from '../models/GetCase200ResponsePartiesPartyArrayInnerContact';
export declare class AssociatedSoSPerson {
    'object': string;
    'contact': GetCase200ResponsePartiesPartyArrayInnerContact;
    'entityName': string;
    'entityType': AssociatedSoSPersonEntityTypeEnum;
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
export declare enum AssociatedSoSPersonEntityTypeEnum {
    Partner = "Partner",
    Agent = "Agent",
    Ceo = "CEO",
    PartnerGeneralMember = "Partner/General Member",
    PartnerGeneralMember2 = "Partner/GeneralMember"
}

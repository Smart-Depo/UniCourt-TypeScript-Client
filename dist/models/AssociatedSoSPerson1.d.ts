import { GetCase200ResponsePartiesPartyArrayInnerContact } from '../models/GetCase200ResponsePartiesPartyArrayInnerContact';
export declare class AssociatedSoSPerson1 {
    'object': string;
    'contact': GetCase200ResponsePartiesPartyArrayInnerContact;
    'entityName': string;
    'entityType': AssociatedSoSPerson1EntityTypeEnum;
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
export declare enum AssociatedSoSPerson1EntityTypeEnum {
    Partner = "Partner",
    Agent = "Agent",
    Ceo = "CEO",
    PartnerGeneralMember = "Partner/General Member",
    PartnerGeneralMember2 = "Partner/GeneralMember"
}

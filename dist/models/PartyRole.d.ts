export declare class PartyRole {
    'object': string;
    'partyRoleId': string;
    'partyRoleGroupId': string;
    'partyRoleGroup': string;
    'name': string;
    'description': string | null;
    'createdDate': Date;
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

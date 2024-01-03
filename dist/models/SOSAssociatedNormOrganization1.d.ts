export declare class SOSAssociatedNormOrganization1 {
    'object': string;
    'normOrganizationId': string | null;
    'normOrganizationAPI': string | null;
    'relationshipType': SOSAssociatedNormOrganization1RelationshipTypeEnum;
    'name': string;
    'fromDate': Date;
    'toDate': Date | null;
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
export declare enum SOSAssociatedNormOrganization1RelationshipTypeEnum {
    Parent = "Parent",
    Child = "Child"
}

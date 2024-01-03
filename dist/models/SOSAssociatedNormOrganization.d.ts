export declare class SOSAssociatedNormOrganization {
    'object': string;
    'normOrganizationId': string | null;
    'normOrganizationAPI': string | null;
    'relationshipType': SOSAssociatedNormOrganizationRelationshipTypeEnum;
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
export declare enum SOSAssociatedNormOrganizationRelationshipTypeEnum {
    Parent = "Parent",
    Child = "Child"
}

export declare class RelatedNormParty {
    'object': string;
    'normPartyId': string;
    'relationshipType': RelatedNormPartyRelationshipTypeEnum;
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
export declare enum RelatedNormPartyRelationshipTypeEnum {
    Parent = "Parent",
    Child = "Child",
    SameCorporateGroup = "Same_Corporate_Group"
}

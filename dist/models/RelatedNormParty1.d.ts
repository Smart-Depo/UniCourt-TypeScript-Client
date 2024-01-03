export declare class RelatedNormParty1 {
    'object': string;
    'normPartyId': string;
    'relationshipType': RelatedNormParty1RelationshipTypeEnum;
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
export declare enum RelatedNormParty1RelationshipTypeEnum {
    Parent = "Parent",
    Child = "Child",
    SameCorporateGroup = "Same_Corporate_Group"
}

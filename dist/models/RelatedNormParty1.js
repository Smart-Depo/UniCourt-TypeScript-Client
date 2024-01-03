"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatedNormParty1RelationshipTypeEnum = exports.RelatedNormParty1 = void 0;
var RelatedNormParty1 = (function () {
    function RelatedNormParty1() {
    }
    RelatedNormParty1.getAttributeTypeMap = function () {
        return RelatedNormParty1.attributeTypeMap;
    };
    RelatedNormParty1.discriminator = undefined;
    RelatedNormParty1.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "normPartyId",
            "baseName": "normPartyId",
            "type": "string",
            "format": ""
        },
        {
            "name": "relationshipType",
            "baseName": "relationshipType",
            "type": "RelatedNormParty1RelationshipTypeEnum",
            "format": ""
        }
    ];
    return RelatedNormParty1;
}());
exports.RelatedNormParty1 = RelatedNormParty1;
var RelatedNormParty1RelationshipTypeEnum;
(function (RelatedNormParty1RelationshipTypeEnum) {
    RelatedNormParty1RelationshipTypeEnum["Parent"] = "Parent";
    RelatedNormParty1RelationshipTypeEnum["Child"] = "Child";
    RelatedNormParty1RelationshipTypeEnum["SameCorporateGroup"] = "Same_Corporate_Group";
})(RelatedNormParty1RelationshipTypeEnum = exports.RelatedNormParty1RelationshipTypeEnum || (exports.RelatedNormParty1RelationshipTypeEnum = {}));
//# sourceMappingURL=RelatedNormParty1.js.map
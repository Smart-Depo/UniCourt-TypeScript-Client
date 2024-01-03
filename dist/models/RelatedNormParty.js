"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatedNormPartyRelationshipTypeEnum = exports.RelatedNormParty = void 0;
var RelatedNormParty = (function () {
    function RelatedNormParty() {
    }
    RelatedNormParty.getAttributeTypeMap = function () {
        return RelatedNormParty.attributeTypeMap;
    };
    RelatedNormParty.discriminator = undefined;
    RelatedNormParty.attributeTypeMap = [
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
            "type": "RelatedNormPartyRelationshipTypeEnum",
            "format": ""
        }
    ];
    return RelatedNormParty;
}());
exports.RelatedNormParty = RelatedNormParty;
var RelatedNormPartyRelationshipTypeEnum;
(function (RelatedNormPartyRelationshipTypeEnum) {
    RelatedNormPartyRelationshipTypeEnum["Parent"] = "Parent";
    RelatedNormPartyRelationshipTypeEnum["Child"] = "Child";
    RelatedNormPartyRelationshipTypeEnum["SameCorporateGroup"] = "Same_Corporate_Group";
})(RelatedNormPartyRelationshipTypeEnum = exports.RelatedNormPartyRelationshipTypeEnum || (exports.RelatedNormPartyRelationshipTypeEnum = {}));
//# sourceMappingURL=RelatedNormParty.js.map
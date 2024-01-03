"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociatedSoSPerson1EntityTypeEnum = exports.AssociatedSoSPerson1 = void 0;
var AssociatedSoSPerson1 = (function () {
    function AssociatedSoSPerson1() {
    }
    AssociatedSoSPerson1.getAttributeTypeMap = function () {
        return AssociatedSoSPerson1.attributeTypeMap;
    };
    AssociatedSoSPerson1.discriminator = undefined;
    AssociatedSoSPerson1.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "contact",
            "baseName": "contact",
            "type": "GetCase200ResponsePartiesPartyArrayInnerContact",
            "format": ""
        },
        {
            "name": "entityName",
            "baseName": "entityName",
            "type": "string",
            "format": ""
        },
        {
            "name": "entityType",
            "baseName": "entityType",
            "type": "AssociatedSoSPerson1EntityTypeEnum",
            "format": ""
        }
    ];
    return AssociatedSoSPerson1;
}());
exports.AssociatedSoSPerson1 = AssociatedSoSPerson1;
var AssociatedSoSPerson1EntityTypeEnum;
(function (AssociatedSoSPerson1EntityTypeEnum) {
    AssociatedSoSPerson1EntityTypeEnum["Partner"] = "Partner";
    AssociatedSoSPerson1EntityTypeEnum["Agent"] = "Agent";
    AssociatedSoSPerson1EntityTypeEnum["Ceo"] = "CEO";
    AssociatedSoSPerson1EntityTypeEnum["PartnerGeneralMember"] = "Partner/General Member";
    AssociatedSoSPerson1EntityTypeEnum["PartnerGeneralMember2"] = "Partner/GeneralMember";
})(AssociatedSoSPerson1EntityTypeEnum = exports.AssociatedSoSPerson1EntityTypeEnum || (exports.AssociatedSoSPerson1EntityTypeEnum = {}));
//# sourceMappingURL=AssociatedSoSPerson1.js.map
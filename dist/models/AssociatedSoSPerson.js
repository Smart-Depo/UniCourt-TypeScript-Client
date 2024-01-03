"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociatedSoSPersonEntityTypeEnum = exports.AssociatedSoSPerson = void 0;
var AssociatedSoSPerson = (function () {
    function AssociatedSoSPerson() {
    }
    AssociatedSoSPerson.getAttributeTypeMap = function () {
        return AssociatedSoSPerson.attributeTypeMap;
    };
    AssociatedSoSPerson.discriminator = undefined;
    AssociatedSoSPerson.attributeTypeMap = [
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
            "type": "AssociatedSoSPersonEntityTypeEnum",
            "format": ""
        }
    ];
    return AssociatedSoSPerson;
}());
exports.AssociatedSoSPerson = AssociatedSoSPerson;
var AssociatedSoSPersonEntityTypeEnum;
(function (AssociatedSoSPersonEntityTypeEnum) {
    AssociatedSoSPersonEntityTypeEnum["Partner"] = "Partner";
    AssociatedSoSPersonEntityTypeEnum["Agent"] = "Agent";
    AssociatedSoSPersonEntityTypeEnum["Ceo"] = "CEO";
    AssociatedSoSPersonEntityTypeEnum["PartnerGeneralMember"] = "Partner/General Member";
    AssociatedSoSPersonEntityTypeEnum["PartnerGeneralMember2"] = "Partner/GeneralMember";
})(AssociatedSoSPersonEntityTypeEnum = exports.AssociatedSoSPersonEntityTypeEnum || (exports.AssociatedSoSPersonEntityTypeEnum = {}));
//# sourceMappingURL=AssociatedSoSPerson.js.map
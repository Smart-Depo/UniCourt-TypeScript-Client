"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartyAttorneyAssociation = void 0;
var PartyAttorneyAssociation = (function () {
    function PartyAttorneyAssociation() {
    }
    PartyAttorneyAssociation.getAttributeTypeMap = function () {
        return PartyAttorneyAssociation.attributeTypeMap;
    };
    PartyAttorneyAssociation.discriminator = undefined;
    PartyAttorneyAssociation.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "partyAttorneyAssociationId",
            "baseName": "partyAttorneyAssociationId",
            "type": "string",
            "format": ""
        },
        {
            "name": "attorneyId",
            "baseName": "attorneyId",
            "type": "string",
            "format": ""
        },
        {
            "name": "partyId",
            "baseName": "partyId",
            "type": "string",
            "format": ""
        },
        {
            "name": "isVisible",
            "baseName": "isVisible",
            "type": "boolean",
            "format": ""
        }
    ];
    return PartyAttorneyAssociation;
}());
exports.PartyAttorneyAssociation = PartyAttorneyAssociation;
//# sourceMappingURL=PartyAttorneyAssociation.js.map
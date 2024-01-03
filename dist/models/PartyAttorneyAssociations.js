"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartyAttorneyAssociations = void 0;
var PartyAttorneyAssociations = (function () {
    function PartyAttorneyAssociations() {
    }
    PartyAttorneyAssociations.getAttributeTypeMap = function () {
        return PartyAttorneyAssociations.attributeTypeMap;
    };
    PartyAttorneyAssociations.discriminator = undefined;
    PartyAttorneyAssociations.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "pageNumber",
            "baseName": "pageNumber",
            "type": "number",
            "format": ""
        },
        {
            "name": "partyAttorneyAssociationArray",
            "baseName": "partyAttorneyAssociationArray",
            "type": "Array<GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociationsPartyAttorneyAssociationArrayInner>",
            "format": ""
        },
        {
            "name": "nextPageAPI",
            "baseName": "nextPageAPI",
            "type": "string",
            "format": ""
        },
        {
            "name": "totalPages",
            "baseName": "totalPages",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalCount",
            "baseName": "totalCount",
            "type": "number",
            "format": ""
        }
    ];
    return PartyAttorneyAssociations;
}());
exports.PartyAttorneyAssociations = PartyAttorneyAssociations;
//# sourceMappingURL=PartyAttorneyAssociations.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations = void 0;
var GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations = (function () {
    function GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations() {
    }
    GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations.getAttributeTypeMap = function () {
        return GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations.attributeTypeMap;
    };
    GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations.discriminator = undefined;
    GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations.attributeTypeMap = [
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
    return GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations;
}());
exports.GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations = GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations;
//# sourceMappingURL=GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations.js.map
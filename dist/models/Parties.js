"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parties = void 0;
var Parties = (function () {
    function Parties() {
    }
    Parties.getAttributeTypeMap = function () {
        return Parties.attributeTypeMap;
    };
    Parties.discriminator = undefined;
    Parties.attributeTypeMap = [
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
            "name": "partyArray",
            "baseName": "partyArray",
            "type": "Array<GetCase200ResponsePartiesPartyArrayInner>",
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
    return Parties;
}());
exports.Parties = Parties;
//# sourceMappingURL=Parties.js.map
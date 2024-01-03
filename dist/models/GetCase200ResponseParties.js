"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCase200ResponseParties = void 0;
var GetCase200ResponseParties = (function () {
    function GetCase200ResponseParties() {
    }
    GetCase200ResponseParties.getAttributeTypeMap = function () {
        return GetCase200ResponseParties.attributeTypeMap;
    };
    GetCase200ResponseParties.discriminator = undefined;
    GetCase200ResponseParties.attributeTypeMap = [
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
    return GetCase200ResponseParties;
}());
exports.GetCase200ResponseParties = GetCase200ResponseParties;
//# sourceMappingURL=GetCase200ResponseParties.js.map
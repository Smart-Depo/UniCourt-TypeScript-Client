"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartyRoleResponse = void 0;
var PartyRoleResponse = (function () {
    function PartyRoleResponse() {
    }
    PartyRoleResponse.getAttributeTypeMap = function () {
        return PartyRoleResponse.attributeTypeMap;
    };
    PartyRoleResponse.discriminator = undefined;
    PartyRoleResponse.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "partyRoleArray",
            "baseName": "partyRoleArray",
            "type": "Array<PartyRole1>",
            "format": ""
        },
        {
            "name": "nextPageAPI",
            "baseName": "nextPageAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "previousPageAPI",
            "baseName": "previousPageAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "pageNumber",
            "baseName": "pageNumber",
            "type": "number",
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
    return PartyRoleResponse;
}());
exports.PartyRoleResponse = PartyRoleResponse;
//# sourceMappingURL=PartyRoleResponse.js.map
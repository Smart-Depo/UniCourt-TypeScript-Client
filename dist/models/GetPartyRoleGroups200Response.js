"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPartyRoleGroups200Response = void 0;
var GetPartyRoleGroups200Response = (function () {
    function GetPartyRoleGroups200Response() {
    }
    GetPartyRoleGroups200Response.getAttributeTypeMap = function () {
        return GetPartyRoleGroups200Response.attributeTypeMap;
    };
    GetPartyRoleGroups200Response.discriminator = undefined;
    GetPartyRoleGroups200Response.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "partyRoleGroupArray",
            "baseName": "partyRoleGroupArray",
            "type": "Array<PartyRoleGroup1>",
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
    return GetPartyRoleGroups200Response;
}());
exports.GetPartyRoleGroups200Response = GetPartyRoleGroups200Response;
//# sourceMappingURL=GetPartyRoleGroups200Response.js.map
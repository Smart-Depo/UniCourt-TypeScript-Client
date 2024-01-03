"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPartyRoles200Response = void 0;
var GetPartyRoles200Response = (function () {
    function GetPartyRoles200Response() {
    }
    GetPartyRoles200Response.getAttributeTypeMap = function () {
        return GetPartyRoles200Response.attributeTypeMap;
    };
    GetPartyRoles200Response.discriminator = undefined;
    GetPartyRoles200Response.attributeTypeMap = [
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
    return GetPartyRoles200Response;
}());
exports.GetPartyRoles200Response = GetPartyRoles200Response;
//# sourceMappingURL=GetPartyRoles200Response.js.map
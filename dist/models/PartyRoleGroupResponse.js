"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartyRoleGroupResponse = void 0;
var PartyRoleGroupResponse = (function () {
    function PartyRoleGroupResponse() {
    }
    PartyRoleGroupResponse.getAttributeTypeMap = function () {
        return PartyRoleGroupResponse.attributeTypeMap;
    };
    PartyRoleGroupResponse.discriminator = undefined;
    PartyRoleGroupResponse.attributeTypeMap = [
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
    return PartyRoleGroupResponse;
}());
exports.PartyRoleGroupResponse = PartyRoleGroupResponse;
//# sourceMappingURL=PartyRoleGroupResponse.js.map
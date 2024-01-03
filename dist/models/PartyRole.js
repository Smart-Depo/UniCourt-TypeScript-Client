"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartyRole = void 0;
var PartyRole = (function () {
    function PartyRole() {
    }
    PartyRole.getAttributeTypeMap = function () {
        return PartyRole.attributeTypeMap;
    };
    PartyRole.discriminator = undefined;
    PartyRole.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "partyRoleId",
            "baseName": "partyRoleId",
            "type": "string",
            "format": ""
        },
        {
            "name": "partyRoleGroupId",
            "baseName": "partyRoleGroupId",
            "type": "string",
            "format": ""
        },
        {
            "name": "partyRoleGroup",
            "baseName": "partyRoleGroup",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "Date",
            "format": "date-time"
        }
    ];
    return PartyRole;
}());
exports.PartyRole = PartyRole;
//# sourceMappingURL=PartyRole.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartyRoleGroup = void 0;
var PartyRoleGroup = (function () {
    function PartyRoleGroup() {
    }
    PartyRoleGroup.getAttributeTypeMap = function () {
        return PartyRoleGroup.attributeTypeMap;
    };
    PartyRoleGroup.discriminator = undefined;
    PartyRoleGroup.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
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
    return PartyRoleGroup;
}());
exports.PartyRoleGroup = PartyRoleGroup;
//# sourceMappingURL=PartyRoleGroup.js.map
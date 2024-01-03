"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartyRoleGroup1 = void 0;
var PartyRoleGroup1 = (function () {
    function PartyRoleGroup1() {
    }
    PartyRoleGroup1.getAttributeTypeMap = function () {
        return PartyRoleGroup1.attributeTypeMap;
    };
    PartyRoleGroup1.discriminator = undefined;
    PartyRoleGroup1.attributeTypeMap = [
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
    return PartyRoleGroup1;
}());
exports.PartyRoleGroup1 = PartyRoleGroup1;
//# sourceMappingURL=PartyRoleGroup1.js.map
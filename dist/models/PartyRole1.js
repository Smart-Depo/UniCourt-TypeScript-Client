"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartyRole1 = void 0;
var PartyRole1 = (function () {
    function PartyRole1() {
    }
    PartyRole1.getAttributeTypeMap = function () {
        return PartyRole1.attributeTypeMap;
    };
    PartyRole1.discriminator = undefined;
    PartyRole1.attributeTypeMap = [
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
    return PartyRole1;
}());
exports.PartyRole1 = PartyRole1;
//# sourceMappingURL=PartyRole1.js.map
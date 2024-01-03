"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByPartyRoleGroup = void 0;
var CaseCountAnalyticsByPartyRoleGroup = (function () {
    function CaseCountAnalyticsByPartyRoleGroup() {
    }
    CaseCountAnalyticsByPartyRoleGroup.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByPartyRoleGroup.attributeTypeMap;
    };
    CaseCountAnalyticsByPartyRoleGroup.discriminator = undefined;
    CaseCountAnalyticsByPartyRoleGroup.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseCount",
            "baseName": "caseCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "caseSearchAPI",
            "baseName": "caseSearchAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "partyRoleGroup",
            "baseName": "partyRoleGroup",
            "type": "PartyRoleGroup1",
            "format": ""
        }
    ];
    return CaseCountAnalyticsByPartyRoleGroup;
}());
exports.CaseCountAnalyticsByPartyRoleGroup = CaseCountAnalyticsByPartyRoleGroup;
//# sourceMappingURL=CaseCountAnalyticsByPartyRoleGroup.js.map
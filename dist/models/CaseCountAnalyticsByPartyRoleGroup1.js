"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByPartyRoleGroup1 = void 0;
var CaseCountAnalyticsByPartyRoleGroup1 = (function () {
    function CaseCountAnalyticsByPartyRoleGroup1() {
    }
    CaseCountAnalyticsByPartyRoleGroup1.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByPartyRoleGroup1.attributeTypeMap;
    };
    CaseCountAnalyticsByPartyRoleGroup1.discriminator = undefined;
    CaseCountAnalyticsByPartyRoleGroup1.attributeTypeMap = [
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
    return CaseCountAnalyticsByPartyRoleGroup1;
}());
exports.CaseCountAnalyticsByPartyRoleGroup1 = CaseCountAnalyticsByPartyRoleGroup1;
//# sourceMappingURL=CaseCountAnalyticsByPartyRoleGroup1.js.map
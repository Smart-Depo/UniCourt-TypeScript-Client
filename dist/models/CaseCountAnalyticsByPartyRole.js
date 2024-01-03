"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByPartyRole = void 0;
var CaseCountAnalyticsByPartyRole = (function () {
    function CaseCountAnalyticsByPartyRole() {
    }
    CaseCountAnalyticsByPartyRole.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByPartyRole.attributeTypeMap;
    };
    CaseCountAnalyticsByPartyRole.discriminator = undefined;
    CaseCountAnalyticsByPartyRole.attributeTypeMap = [
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
            "name": "partyRole",
            "baseName": "partyRole",
            "type": "PartyRole1",
            "format": ""
        }
    ];
    return CaseCountAnalyticsByPartyRole;
}());
exports.CaseCountAnalyticsByPartyRole = CaseCountAnalyticsByPartyRole;
//# sourceMappingURL=CaseCountAnalyticsByPartyRole.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByPartyRole1 = void 0;
var CaseCountAnalyticsByPartyRole1 = (function () {
    function CaseCountAnalyticsByPartyRole1() {
    }
    CaseCountAnalyticsByPartyRole1.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByPartyRole1.attributeTypeMap;
    };
    CaseCountAnalyticsByPartyRole1.discriminator = undefined;
    CaseCountAnalyticsByPartyRole1.attributeTypeMap = [
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
    return CaseCountAnalyticsByPartyRole1;
}());
exports.CaseCountAnalyticsByPartyRole1 = CaseCountAnalyticsByPartyRole1;
//# sourceMappingURL=CaseCountAnalyticsByPartyRole1.js.map
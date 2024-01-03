"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByNormParty1 = void 0;
var CaseCountAnalyticsByNormParty1 = (function () {
    function CaseCountAnalyticsByNormParty1() {
    }
    CaseCountAnalyticsByNormParty1.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByNormParty1.attributeTypeMap;
    };
    CaseCountAnalyticsByNormParty1.discriminator = undefined;
    CaseCountAnalyticsByNormParty1.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "normPartyId",
            "baseName": "normPartyId",
            "type": "string",
            "format": ""
        },
        {
            "name": "normPartyName",
            "baseName": "normPartyName",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseSearchAPI",
            "baseName": "caseSearchAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseCount",
            "baseName": "caseCount",
            "type": "number",
            "format": ""
        }
    ];
    return CaseCountAnalyticsByNormParty1;
}());
exports.CaseCountAnalyticsByNormParty1 = CaseCountAnalyticsByNormParty1;
//# sourceMappingURL=CaseCountAnalyticsByNormParty1.js.map
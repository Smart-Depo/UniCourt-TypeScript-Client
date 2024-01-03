"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByNormParty = void 0;
var CaseCountAnalyticsByNormParty = (function () {
    function CaseCountAnalyticsByNormParty() {
    }
    CaseCountAnalyticsByNormParty.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByNormParty.attributeTypeMap;
    };
    CaseCountAnalyticsByNormParty.discriminator = undefined;
    CaseCountAnalyticsByNormParty.attributeTypeMap = [
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
    return CaseCountAnalyticsByNormParty;
}());
exports.CaseCountAnalyticsByNormParty = CaseCountAnalyticsByNormParty;
//# sourceMappingURL=CaseCountAnalyticsByNormParty.js.map
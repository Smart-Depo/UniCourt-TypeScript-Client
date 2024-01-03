"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByNormPartyResponse1 = void 0;
var CaseCountAnalyticsByNormPartyResponse1 = (function () {
    function CaseCountAnalyticsByNormPartyResponse1() {
    }
    CaseCountAnalyticsByNormPartyResponse1.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByNormPartyResponse1.attributeTypeMap;
    };
    CaseCountAnalyticsByNormPartyResponse1.discriminator = undefined;
    CaseCountAnalyticsByNormPartyResponse1.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<CaseCountAnalyticsByNormParty1>",
            "format": ""
        },
        {
            "name": "nextPageAPI",
            "baseName": "nextPageAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "previousPageAPI",
            "baseName": "previousPageAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "totalPages",
            "baseName": "totalPages",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalCaseCount",
            "baseName": "totalCaseCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalNormPartyCount",
            "baseName": "totalNormPartyCount",
            "type": "number",
            "format": ""
        }
    ];
    return CaseCountAnalyticsByNormPartyResponse1;
}());
exports.CaseCountAnalyticsByNormPartyResponse1 = CaseCountAnalyticsByNormPartyResponse1;
//# sourceMappingURL=CaseCountAnalyticsByNormPartyResponse1.js.map
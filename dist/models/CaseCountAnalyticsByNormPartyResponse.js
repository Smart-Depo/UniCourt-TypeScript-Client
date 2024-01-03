"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByNormPartyResponse = void 0;
var CaseCountAnalyticsByNormPartyResponse = (function () {
    function CaseCountAnalyticsByNormPartyResponse() {
    }
    CaseCountAnalyticsByNormPartyResponse.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByNormPartyResponse.attributeTypeMap;
    };
    CaseCountAnalyticsByNormPartyResponse.discriminator = undefined;
    CaseCountAnalyticsByNormPartyResponse.attributeTypeMap = [
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
    return CaseCountAnalyticsByNormPartyResponse;
}());
exports.CaseCountAnalyticsByNormPartyResponse = CaseCountAnalyticsByNormPartyResponse;
//# sourceMappingURL=CaseCountAnalyticsByNormPartyResponse.js.map
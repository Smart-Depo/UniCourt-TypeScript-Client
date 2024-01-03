"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByNormLawFirmResponse = void 0;
var CaseCountAnalyticsByNormLawFirmResponse = (function () {
    function CaseCountAnalyticsByNormLawFirmResponse() {
    }
    CaseCountAnalyticsByNormLawFirmResponse.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByNormLawFirmResponse.attributeTypeMap;
    };
    CaseCountAnalyticsByNormLawFirmResponse.discriminator = undefined;
    CaseCountAnalyticsByNormLawFirmResponse.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<CaseCountAnalyticsByNormLawFirm1>",
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
            "name": "totalNormLawFirmCount",
            "baseName": "totalNormLawFirmCount",
            "type": "number",
            "format": ""
        }
    ];
    return CaseCountAnalyticsByNormLawFirmResponse;
}());
exports.CaseCountAnalyticsByNormLawFirmResponse = CaseCountAnalyticsByNormLawFirmResponse;
//# sourceMappingURL=CaseCountAnalyticsByNormLawFirmResponse.js.map
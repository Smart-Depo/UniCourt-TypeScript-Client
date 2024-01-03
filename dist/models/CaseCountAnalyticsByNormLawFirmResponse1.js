"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByNormLawFirmResponse1 = void 0;
var CaseCountAnalyticsByNormLawFirmResponse1 = (function () {
    function CaseCountAnalyticsByNormLawFirmResponse1() {
    }
    CaseCountAnalyticsByNormLawFirmResponse1.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByNormLawFirmResponse1.attributeTypeMap;
    };
    CaseCountAnalyticsByNormLawFirmResponse1.discriminator = undefined;
    CaseCountAnalyticsByNormLawFirmResponse1.attributeTypeMap = [
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
    return CaseCountAnalyticsByNormLawFirmResponse1;
}());
exports.CaseCountAnalyticsByNormLawFirmResponse1 = CaseCountAnalyticsByNormLawFirmResponse1;
//# sourceMappingURL=CaseCountAnalyticsByNormLawFirmResponse1.js.map
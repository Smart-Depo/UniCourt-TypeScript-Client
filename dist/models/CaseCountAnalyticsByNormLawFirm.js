"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByNormLawFirm = void 0;
var CaseCountAnalyticsByNormLawFirm = (function () {
    function CaseCountAnalyticsByNormLawFirm() {
    }
    CaseCountAnalyticsByNormLawFirm.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByNormLawFirm.attributeTypeMap;
    };
    CaseCountAnalyticsByNormLawFirm.discriminator = undefined;
    CaseCountAnalyticsByNormLawFirm.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "normLawFirmId",
            "baseName": "normLawFirmId",
            "type": "string",
            "format": ""
        },
        {
            "name": "normLawFirmName",
            "baseName": "normLawFirmName",
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
    return CaseCountAnalyticsByNormLawFirm;
}());
exports.CaseCountAnalyticsByNormLawFirm = CaseCountAnalyticsByNormLawFirm;
//# sourceMappingURL=CaseCountAnalyticsByNormLawFirm.js.map
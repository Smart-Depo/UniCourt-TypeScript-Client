"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByNormJudgeResponse1 = void 0;
var CaseCountAnalyticsByNormJudgeResponse1 = (function () {
    function CaseCountAnalyticsByNormJudgeResponse1() {
    }
    CaseCountAnalyticsByNormJudgeResponse1.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByNormJudgeResponse1.attributeTypeMap;
    };
    CaseCountAnalyticsByNormJudgeResponse1.discriminator = undefined;
    CaseCountAnalyticsByNormJudgeResponse1.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<CaseCountAnalyticsByNormJudge1>",
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
            "name": "totalNormJudgeCount",
            "baseName": "totalNormJudgeCount",
            "type": "number",
            "format": ""
        }
    ];
    return CaseCountAnalyticsByNormJudgeResponse1;
}());
exports.CaseCountAnalyticsByNormJudgeResponse1 = CaseCountAnalyticsByNormJudgeResponse1;
//# sourceMappingURL=CaseCountAnalyticsByNormJudgeResponse1.js.map
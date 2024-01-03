"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByNormJudgeResponse = void 0;
var CaseCountAnalyticsByNormJudgeResponse = (function () {
    function CaseCountAnalyticsByNormJudgeResponse() {
    }
    CaseCountAnalyticsByNormJudgeResponse.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByNormJudgeResponse.attributeTypeMap;
    };
    CaseCountAnalyticsByNormJudgeResponse.discriminator = undefined;
    CaseCountAnalyticsByNormJudgeResponse.attributeTypeMap = [
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
    return CaseCountAnalyticsByNormJudgeResponse;
}());
exports.CaseCountAnalyticsByNormJudgeResponse = CaseCountAnalyticsByNormJudgeResponse;
//# sourceMappingURL=CaseCountAnalyticsByNormJudgeResponse.js.map
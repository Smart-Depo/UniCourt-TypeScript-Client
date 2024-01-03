"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByNormJudge = void 0;
var CaseCountAnalyticsByNormJudge = (function () {
    function CaseCountAnalyticsByNormJudge() {
    }
    CaseCountAnalyticsByNormJudge.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByNormJudge.attributeTypeMap;
    };
    CaseCountAnalyticsByNormJudge.discriminator = undefined;
    CaseCountAnalyticsByNormJudge.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "normJudgeId",
            "baseName": "normJudgeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "normJudgeName",
            "baseName": "normJudgeName",
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
    return CaseCountAnalyticsByNormJudge;
}());
exports.CaseCountAnalyticsByNormJudge = CaseCountAnalyticsByNormJudge;
//# sourceMappingURL=CaseCountAnalyticsByNormJudge.js.map
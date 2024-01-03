"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormJudge1 = void 0;
var NormJudge1 = (function () {
    function NormJudge1() {
    }
    NormJudge1.getAttributeTypeMap = function () {
        return NormJudge1.attributeTypeMap;
    };
    NormJudge1.discriminator = undefined;
    NormJudge1.attributeTypeMap = [
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
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "middleName",
            "baseName": "middleName",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "lastName",
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
            "name": "caseAnalyticsAPI",
            "baseName": "caseAnalyticsAPI",
            "type": "CaseAnalyticsAPI1",
            "format": ""
        },
        {
            "name": "hasAssociatedPublicData",
            "baseName": "hasAssociatedPublicData",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "judicialDataArray",
            "baseName": "judicialDataArray",
            "type": "Array<NormJudgePublicData1>",
            "format": ""
        },
        {
            "name": "judgeAnalyticsAPI",
            "baseName": "judgeAnalyticsAPI",
            "type": "JudgeAnalyticsAPI1",
            "format": ""
        }
    ];
    return NormJudge1;
}());
exports.NormJudge1 = NormJudge1;
//# sourceMappingURL=NormJudge1.js.map
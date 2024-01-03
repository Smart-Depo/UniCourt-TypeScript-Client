"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PossibleNormJudge1 = void 0;
var PossibleNormJudge1 = (function () {
    function PossibleNormJudge1() {
    }
    PossibleNormJudge1.getAttributeTypeMap = function () {
        return PossibleNormJudge1.attributeTypeMap;
    };
    PossibleNormJudge1.discriminator = undefined;
    PossibleNormJudge1.attributeTypeMap = [
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
            "name": "bestMatch",
            "baseName": "bestMatch",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "confidenceScore",
            "baseName": "confidenceScore",
            "type": "number",
            "format": "float"
        },
        {
            "name": "scoreConstituents",
            "baseName": "scoreConstituents",
            "type": "PossibleNormJudge1ScoreConstituents",
            "format": ""
        },
        {
            "name": "normJudgeAPI",
            "baseName": "normJudgeAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "associatedNormAttorneysAPI",
            "baseName": "associatedNormAttorneysAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "associatedNormLawFirmsAPI",
            "baseName": "associatedNormLawFirmsAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "associatedNormPartiesAPI",
            "baseName": "associatedNormPartiesAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseCountAnalyticsByNormJudgeAPI",
            "baseName": "caseCountAnalyticsByNormJudgeAPI",
            "type": "string",
            "format": "uri"
        }
    ];
    return PossibleNormJudge1;
}());
exports.PossibleNormJudge1 = PossibleNormJudge1;
//# sourceMappingURL=PossibleNormJudge1.js.map
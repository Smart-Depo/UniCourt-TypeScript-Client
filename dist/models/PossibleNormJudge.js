"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PossibleNormJudge = void 0;
var PossibleNormJudge = (function () {
    function PossibleNormJudge() {
    }
    PossibleNormJudge.getAttributeTypeMap = function () {
        return PossibleNormJudge.attributeTypeMap;
    };
    PossibleNormJudge.discriminator = undefined;
    PossibleNormJudge.attributeTypeMap = [
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
    return PossibleNormJudge;
}());
exports.PossibleNormJudge = PossibleNormJudge;
//# sourceMappingURL=PossibleNormJudge.js.map
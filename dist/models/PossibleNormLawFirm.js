"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PossibleNormLawFirm = void 0;
var PossibleNormLawFirm = (function () {
    function PossibleNormLawFirm() {
    }
    PossibleNormLawFirm.getAttributeTypeMap = function () {
        return PossibleNormLawFirm.attributeTypeMap;
    };
    PossibleNormLawFirm.discriminator = undefined;
    PossibleNormLawFirm.attributeTypeMap = [
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
            "name": "bestMatch",
            "baseName": "bestMatch",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "sourceDetails",
            "baseName": "sourceDetails",
            "type": "PossibleNormLawFirm1SourceDetails",
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
            "type": "PossibleNormLawFirm1ScoreConstituents",
            "format": ""
        },
        {
            "name": "normLawFirmAPI",
            "baseName": "normLawFirmAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "associatedNormAttorneyAPI",
            "baseName": "associatedNormAttorneyAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "associatedNormJudgeAPI",
            "baseName": "associatedNormJudgeAPI",
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
            "name": "caseCountAnalyticsByNormLawFirmAPI",
            "baseName": "caseCountAnalyticsByNormLawFirmAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseCountAnalyticsByOpposingNormLawFirmAPI",
            "baseName": "caseCountAnalyticsByOpposingNormLawFirmAPI",
            "type": "string",
            "format": "uri"
        }
    ];
    return PossibleNormLawFirm;
}());
exports.PossibleNormLawFirm = PossibleNormLawFirm;
//# sourceMappingURL=PossibleNormLawFirm.js.map
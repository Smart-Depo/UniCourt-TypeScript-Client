"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PossibleNormAttorney1 = void 0;
var PossibleNormAttorney1 = (function () {
    function PossibleNormAttorney1() {
    }
    PossibleNormAttorney1.getAttributeTypeMap = function () {
        return PossibleNormAttorney1.attributeTypeMap;
    };
    PossibleNormAttorney1.discriminator = undefined;
    PossibleNormAttorney1.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "normAttorneyId",
            "baseName": "normAttorneyId",
            "type": "string",
            "format": ""
        },
        {
            "name": "normAttorneyName",
            "baseName": "normAttorneyName",
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
            "type": "PossibleNormAttorney1ScoreConstituents",
            "format": ""
        },
        {
            "name": "normAttorneyAPI",
            "baseName": "normAttorneyAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "associatedNormJudgesAPI",
            "baseName": "associatedNormJudgesAPI",
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
            "name": "caseCountAnalyticsByNormAttorneyAPI",
            "baseName": "caseCountAnalyticsByNormAttorneyAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseCountAnalyticsByOpposingNormAttorneyAPI",
            "baseName": "caseCountAnalyticsByOpposingNormAttorneyAPI",
            "type": "string",
            "format": "uri"
        }
    ];
    return PossibleNormAttorney1;
}());
exports.PossibleNormAttorney1 = PossibleNormAttorney1;
//# sourceMappingURL=PossibleNormAttorney1.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PossibleNormAttorney = void 0;
var PossibleNormAttorney = (function () {
    function PossibleNormAttorney() {
    }
    PossibleNormAttorney.getAttributeTypeMap = function () {
        return PossibleNormAttorney.attributeTypeMap;
    };
    PossibleNormAttorney.discriminator = undefined;
    PossibleNormAttorney.attributeTypeMap = [
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
    return PossibleNormAttorney;
}());
exports.PossibleNormAttorney = PossibleNormAttorney;
//# sourceMappingURL=PossibleNormAttorney.js.map
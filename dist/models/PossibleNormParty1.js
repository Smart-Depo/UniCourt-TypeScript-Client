"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PossibleNormParty1 = void 0;
var PossibleNormParty1 = (function () {
    function PossibleNormParty1() {
    }
    PossibleNormParty1.getAttributeTypeMap = function () {
        return PossibleNormParty1.attributeTypeMap;
    };
    PossibleNormParty1.discriminator = undefined;
    PossibleNormParty1.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "normPartyId",
            "baseName": "normPartyId",
            "type": "string",
            "format": ""
        },
        {
            "name": "normPartyName",
            "baseName": "normPartyName",
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
            "type": "PossibleNormParty1ScoreConstituents",
            "format": ""
        },
        {
            "name": "normPartyAPI",
            "baseName": "normPartyAPI",
            "type": "string",
            "format": "url"
        },
        {
            "name": "associatedNormAttorneysAPI",
            "baseName": "associatedNormAttorneysAPI",
            "type": "string",
            "format": "url"
        },
        {
            "name": "associatedNormLawFirmsAPI",
            "baseName": "associatedNormLawFirmsAPI",
            "type": "string",
            "format": "url"
        },
        {
            "name": "associatedNormJudgesAPI",
            "baseName": "associatedNormJudgesAPI",
            "type": "string",
            "format": "url"
        },
        {
            "name": "caseCountAnalyticsByNormPartyAPI",
            "baseName": "caseCountAnalyticsByNormPartyAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseCountAnalyticsByOpposingNormPartyAPI",
            "baseName": "caseCountAnalyticsByOpposingNormPartyAPI",
            "type": "string",
            "format": "url"
        }
    ];
    return PossibleNormParty1;
}());
exports.PossibleNormParty1 = PossibleNormParty1;
//# sourceMappingURL=PossibleNormParty1.js.map
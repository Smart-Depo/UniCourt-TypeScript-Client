"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartyAnalyticsAPI1 = void 0;
var PartyAnalyticsAPI1 = (function () {
    function PartyAnalyticsAPI1() {
    }
    PartyAnalyticsAPI1.getAttributeTypeMap = function () {
        return PartyAnalyticsAPI1.attributeTypeMap;
    };
    PartyAnalyticsAPI1.discriminator = undefined;
    PartyAnalyticsAPI1.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "normPartyAPI",
            "baseName": "normPartyAPI",
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
            "name": "associatedNormJudgesAPI",
            "baseName": "associatedNormJudgesAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseCountAnalyticsByOpposingNormAttorneyAPI",
            "baseName": "caseCountAnalyticsByOpposingNormAttorneyAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseCountAnalyticsByOpposingNormLawFirmAPI",
            "baseName": "caseCountAnalyticsByOpposingNormLawFirmAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseCountAnalyticsByOpposingNormPartyAPI",
            "baseName": "caseCountAnalyticsByOpposingNormPartyAPI",
            "type": "string",
            "format": "uri"
        }
    ];
    return PartyAnalyticsAPI1;
}());
exports.PartyAnalyticsAPI1 = PartyAnalyticsAPI1;
//# sourceMappingURL=PartyAnalyticsAPI1.js.map
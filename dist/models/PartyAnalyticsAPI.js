"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartyAnalyticsAPI = void 0;
var PartyAnalyticsAPI = (function () {
    function PartyAnalyticsAPI() {
    }
    PartyAnalyticsAPI.getAttributeTypeMap = function () {
        return PartyAnalyticsAPI.attributeTypeMap;
    };
    PartyAnalyticsAPI.discriminator = undefined;
    PartyAnalyticsAPI.attributeTypeMap = [
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
    return PartyAnalyticsAPI;
}());
exports.PartyAnalyticsAPI = PartyAnalyticsAPI;
//# sourceMappingURL=PartyAnalyticsAPI.js.map
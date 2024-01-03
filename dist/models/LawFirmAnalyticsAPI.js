"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawFirmAnalyticsAPI = void 0;
var LawFirmAnalyticsAPI = (function () {
    function LawFirmAnalyticsAPI() {
    }
    LawFirmAnalyticsAPI.getAttributeTypeMap = function () {
        return LawFirmAnalyticsAPI.attributeTypeMap;
    };
    LawFirmAnalyticsAPI.discriminator = undefined;
    LawFirmAnalyticsAPI.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
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
    return LawFirmAnalyticsAPI;
}());
exports.LawFirmAnalyticsAPI = LawFirmAnalyticsAPI;
//# sourceMappingURL=LawFirmAnalyticsAPI.js.map
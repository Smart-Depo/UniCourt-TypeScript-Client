"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawFirmAnalyticsAPI1 = void 0;
var LawFirmAnalyticsAPI1 = (function () {
    function LawFirmAnalyticsAPI1() {
    }
    LawFirmAnalyticsAPI1.getAttributeTypeMap = function () {
        return LawFirmAnalyticsAPI1.attributeTypeMap;
    };
    LawFirmAnalyticsAPI1.discriminator = undefined;
    LawFirmAnalyticsAPI1.attributeTypeMap = [
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
    return LawFirmAnalyticsAPI1;
}());
exports.LawFirmAnalyticsAPI1 = LawFirmAnalyticsAPI1;
//# sourceMappingURL=LawFirmAnalyticsAPI1.js.map
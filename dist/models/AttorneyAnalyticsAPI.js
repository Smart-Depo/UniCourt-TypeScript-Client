"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttorneyAnalyticsAPI = void 0;
var AttorneyAnalyticsAPI = (function () {
    function AttorneyAnalyticsAPI() {
    }
    AttorneyAnalyticsAPI.getAttributeTypeMap = function () {
        return AttorneyAnalyticsAPI.attributeTypeMap;
    };
    AttorneyAnalyticsAPI.discriminator = undefined;
    AttorneyAnalyticsAPI.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
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
    return AttorneyAnalyticsAPI;
}());
exports.AttorneyAnalyticsAPI = AttorneyAnalyticsAPI;
//# sourceMappingURL=AttorneyAnalyticsAPI.js.map
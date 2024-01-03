"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JudgeAnalyticsAPI = void 0;
var JudgeAnalyticsAPI = (function () {
    function JudgeAnalyticsAPI() {
    }
    JudgeAnalyticsAPI.getAttributeTypeMap = function () {
        return JudgeAnalyticsAPI.attributeTypeMap;
    };
    JudgeAnalyticsAPI.discriminator = undefined;
    JudgeAnalyticsAPI.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
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
        }
    ];
    return JudgeAnalyticsAPI;
}());
exports.JudgeAnalyticsAPI = JudgeAnalyticsAPI;
//# sourceMappingURL=JudgeAnalyticsAPI.js.map
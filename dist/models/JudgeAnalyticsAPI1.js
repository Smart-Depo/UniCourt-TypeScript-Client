"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JudgeAnalyticsAPI1 = void 0;
var JudgeAnalyticsAPI1 = (function () {
    function JudgeAnalyticsAPI1() {
    }
    JudgeAnalyticsAPI1.getAttributeTypeMap = function () {
        return JudgeAnalyticsAPI1.attributeTypeMap;
    };
    JudgeAnalyticsAPI1.discriminator = undefined;
    JudgeAnalyticsAPI1.attributeTypeMap = [
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
    return JudgeAnalyticsAPI1;
}());
exports.JudgeAnalyticsAPI1 = JudgeAnalyticsAPI1;
//# sourceMappingURL=JudgeAnalyticsAPI1.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByNormAttorney = void 0;
var CaseCountAnalyticsByNormAttorney = (function () {
    function CaseCountAnalyticsByNormAttorney() {
    }
    CaseCountAnalyticsByNormAttorney.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByNormAttorney.attributeTypeMap;
    };
    CaseCountAnalyticsByNormAttorney.discriminator = undefined;
    CaseCountAnalyticsByNormAttorney.attributeTypeMap = [
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
            "name": "caseSearchAPI",
            "baseName": "caseSearchAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseCount",
            "baseName": "caseCount",
            "type": "number",
            "format": ""
        }
    ];
    return CaseCountAnalyticsByNormAttorney;
}());
exports.CaseCountAnalyticsByNormAttorney = CaseCountAnalyticsByNormAttorney;
//# sourceMappingURL=CaseCountAnalyticsByNormAttorney.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByNormAttorneyResponse1 = void 0;
var CaseCountAnalyticsByNormAttorneyResponse1 = (function () {
    function CaseCountAnalyticsByNormAttorneyResponse1() {
    }
    CaseCountAnalyticsByNormAttorneyResponse1.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByNormAttorneyResponse1.attributeTypeMap;
    };
    CaseCountAnalyticsByNormAttorneyResponse1.discriminator = undefined;
    CaseCountAnalyticsByNormAttorneyResponse1.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<CaseCountAnalyticsByNormAttorney1>",
            "format": ""
        },
        {
            "name": "nextPageAPI",
            "baseName": "nextPageAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "previousPageAPI",
            "baseName": "previousPageAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "totalPages",
            "baseName": "totalPages",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalCaseCount",
            "baseName": "totalCaseCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalNormAttorneyCount",
            "baseName": "totalNormAttorneyCount",
            "type": "number",
            "format": ""
        }
    ];
    return CaseCountAnalyticsByNormAttorneyResponse1;
}());
exports.CaseCountAnalyticsByNormAttorneyResponse1 = CaseCountAnalyticsByNormAttorneyResponse1;
//# sourceMappingURL=CaseCountAnalyticsByNormAttorneyResponse1.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByNormAttorneyResponse = void 0;
var CaseCountAnalyticsByNormAttorneyResponse = (function () {
    function CaseCountAnalyticsByNormAttorneyResponse() {
    }
    CaseCountAnalyticsByNormAttorneyResponse.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByNormAttorneyResponse.attributeTypeMap;
    };
    CaseCountAnalyticsByNormAttorneyResponse.discriminator = undefined;
    CaseCountAnalyticsByNormAttorneyResponse.attributeTypeMap = [
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
    return CaseCountAnalyticsByNormAttorneyResponse;
}());
exports.CaseCountAnalyticsByNormAttorneyResponse = CaseCountAnalyticsByNormAttorneyResponse;
//# sourceMappingURL=CaseCountAnalyticsByNormAttorneyResponse.js.map
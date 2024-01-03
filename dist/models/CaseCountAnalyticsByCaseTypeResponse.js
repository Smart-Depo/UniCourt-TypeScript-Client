"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByCaseTypeResponse = void 0;
var CaseCountAnalyticsByCaseTypeResponse = (function () {
    function CaseCountAnalyticsByCaseTypeResponse() {
    }
    CaseCountAnalyticsByCaseTypeResponse.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByCaseTypeResponse.attributeTypeMap;
    };
    CaseCountAnalyticsByCaseTypeResponse.discriminator = undefined;
    CaseCountAnalyticsByCaseTypeResponse.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
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
            "name": "results",
            "baseName": "results",
            "type": "Array<CaseCountAnalyticsByCaseType1>",
            "format": ""
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
            "name": "totalCaseTypeCount",
            "baseName": "totalCaseTypeCount",
            "type": "number",
            "format": ""
        }
    ];
    return CaseCountAnalyticsByCaseTypeResponse;
}());
exports.CaseCountAnalyticsByCaseTypeResponse = CaseCountAnalyticsByCaseTypeResponse;
//# sourceMappingURL=CaseCountAnalyticsByCaseTypeResponse.js.map
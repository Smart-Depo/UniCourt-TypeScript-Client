"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByCaseClassResponse = void 0;
var CaseCountAnalyticsByCaseClassResponse = (function () {
    function CaseCountAnalyticsByCaseClassResponse() {
    }
    CaseCountAnalyticsByCaseClassResponse.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByCaseClassResponse.attributeTypeMap;
    };
    CaseCountAnalyticsByCaseClassResponse.discriminator = undefined;
    CaseCountAnalyticsByCaseClassResponse.attributeTypeMap = [
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
            "type": "Array<CaseCountAnalyticsByCaseClass1>",
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
            "name": "totalCaseClassCount",
            "baseName": "totalCaseClassCount",
            "type": "number",
            "format": ""
        }
    ];
    return CaseCountAnalyticsByCaseClassResponse;
}());
exports.CaseCountAnalyticsByCaseClassResponse = CaseCountAnalyticsByCaseClassResponse;
//# sourceMappingURL=CaseCountAnalyticsByCaseClassResponse.js.map
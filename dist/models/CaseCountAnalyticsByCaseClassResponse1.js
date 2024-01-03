"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByCaseClassResponse1 = void 0;
var CaseCountAnalyticsByCaseClassResponse1 = (function () {
    function CaseCountAnalyticsByCaseClassResponse1() {
    }
    CaseCountAnalyticsByCaseClassResponse1.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByCaseClassResponse1.attributeTypeMap;
    };
    CaseCountAnalyticsByCaseClassResponse1.discriminator = undefined;
    CaseCountAnalyticsByCaseClassResponse1.attributeTypeMap = [
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
    return CaseCountAnalyticsByCaseClassResponse1;
}());
exports.CaseCountAnalyticsByCaseClassResponse1 = CaseCountAnalyticsByCaseClassResponse1;
//# sourceMappingURL=CaseCountAnalyticsByCaseClassResponse1.js.map
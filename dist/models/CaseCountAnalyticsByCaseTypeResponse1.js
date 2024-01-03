"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByCaseTypeResponse1 = void 0;
var CaseCountAnalyticsByCaseTypeResponse1 = (function () {
    function CaseCountAnalyticsByCaseTypeResponse1() {
    }
    CaseCountAnalyticsByCaseTypeResponse1.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByCaseTypeResponse1.attributeTypeMap;
    };
    CaseCountAnalyticsByCaseTypeResponse1.discriminator = undefined;
    CaseCountAnalyticsByCaseTypeResponse1.attributeTypeMap = [
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
    return CaseCountAnalyticsByCaseTypeResponse1;
}());
exports.CaseCountAnalyticsByCaseTypeResponse1 = CaseCountAnalyticsByCaseTypeResponse1;
//# sourceMappingURL=CaseCountAnalyticsByCaseTypeResponse1.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByCaseFiledDateResponse1 = void 0;
var CaseCountAnalyticsByCaseFiledDateResponse1 = (function () {
    function CaseCountAnalyticsByCaseFiledDateResponse1() {
    }
    CaseCountAnalyticsByCaseFiledDateResponse1.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByCaseFiledDateResponse1.attributeTypeMap;
    };
    CaseCountAnalyticsByCaseFiledDateResponse1.discriminator = undefined;
    CaseCountAnalyticsByCaseFiledDateResponse1.attributeTypeMap = [
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
            "type": "Array<CaseCountAnalyticsByCaseFiledDate1>",
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
            "name": "totalCaseFiledDateCount",
            "baseName": "totalCaseFiledDateCount",
            "type": "number",
            "format": ""
        }
    ];
    return CaseCountAnalyticsByCaseFiledDateResponse1;
}());
exports.CaseCountAnalyticsByCaseFiledDateResponse1 = CaseCountAnalyticsByCaseFiledDateResponse1;
//# sourceMappingURL=CaseCountAnalyticsByCaseFiledDateResponse1.js.map
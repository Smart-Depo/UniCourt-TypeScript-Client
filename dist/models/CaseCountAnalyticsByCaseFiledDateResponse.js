"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByCaseFiledDateResponse = void 0;
var CaseCountAnalyticsByCaseFiledDateResponse = (function () {
    function CaseCountAnalyticsByCaseFiledDateResponse() {
    }
    CaseCountAnalyticsByCaseFiledDateResponse.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByCaseFiledDateResponse.attributeTypeMap;
    };
    CaseCountAnalyticsByCaseFiledDateResponse.discriminator = undefined;
    CaseCountAnalyticsByCaseFiledDateResponse.attributeTypeMap = [
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
    return CaseCountAnalyticsByCaseFiledDateResponse;
}());
exports.CaseCountAnalyticsByCaseFiledDateResponse = CaseCountAnalyticsByCaseFiledDateResponse;
//# sourceMappingURL=CaseCountAnalyticsByCaseFiledDateResponse.js.map
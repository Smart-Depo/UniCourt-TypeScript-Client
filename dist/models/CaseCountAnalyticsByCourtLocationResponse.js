"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByCourtLocationResponse = void 0;
var CaseCountAnalyticsByCourtLocationResponse = (function () {
    function CaseCountAnalyticsByCourtLocationResponse() {
    }
    CaseCountAnalyticsByCourtLocationResponse.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByCourtLocationResponse.attributeTypeMap;
    };
    CaseCountAnalyticsByCourtLocationResponse.discriminator = undefined;
    CaseCountAnalyticsByCourtLocationResponse.attributeTypeMap = [
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
            "type": "Array<CaseCountAnalyticsByCourtLocation1>",
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
            "name": "totalCourtLocationCount",
            "baseName": "totalCourtLocationCount",
            "type": "number",
            "format": ""
        }
    ];
    return CaseCountAnalyticsByCourtLocationResponse;
}());
exports.CaseCountAnalyticsByCourtLocationResponse = CaseCountAnalyticsByCourtLocationResponse;
//# sourceMappingURL=CaseCountAnalyticsByCourtLocationResponse.js.map
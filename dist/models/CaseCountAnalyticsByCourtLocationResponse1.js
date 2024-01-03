"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByCourtLocationResponse1 = void 0;
var CaseCountAnalyticsByCourtLocationResponse1 = (function () {
    function CaseCountAnalyticsByCourtLocationResponse1() {
    }
    CaseCountAnalyticsByCourtLocationResponse1.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByCourtLocationResponse1.attributeTypeMap;
    };
    CaseCountAnalyticsByCourtLocationResponse1.discriminator = undefined;
    CaseCountAnalyticsByCourtLocationResponse1.attributeTypeMap = [
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
    return CaseCountAnalyticsByCourtLocationResponse1;
}());
exports.CaseCountAnalyticsByCourtLocationResponse1 = CaseCountAnalyticsByCourtLocationResponse1;
//# sourceMappingURL=CaseCountAnalyticsByCourtLocationResponse1.js.map
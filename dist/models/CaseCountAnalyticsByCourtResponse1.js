"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByCourtResponse1 = void 0;
var CaseCountAnalyticsByCourtResponse1 = (function () {
    function CaseCountAnalyticsByCourtResponse1() {
    }
    CaseCountAnalyticsByCourtResponse1.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByCourtResponse1.attributeTypeMap;
    };
    CaseCountAnalyticsByCourtResponse1.discriminator = undefined;
    CaseCountAnalyticsByCourtResponse1.attributeTypeMap = [
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
            "type": "Array<CaseCountAnalyticsByCourt1>",
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
            "name": "totalCourtCount",
            "baseName": "totalCourtCount",
            "type": "number",
            "format": ""
        }
    ];
    return CaseCountAnalyticsByCourtResponse1;
}());
exports.CaseCountAnalyticsByCourtResponse1 = CaseCountAnalyticsByCourtResponse1;
//# sourceMappingURL=CaseCountAnalyticsByCourtResponse1.js.map
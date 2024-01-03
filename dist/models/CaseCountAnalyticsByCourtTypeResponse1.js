"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByCourtTypeResponse1 = void 0;
var CaseCountAnalyticsByCourtTypeResponse1 = (function () {
    function CaseCountAnalyticsByCourtTypeResponse1() {
    }
    CaseCountAnalyticsByCourtTypeResponse1.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByCourtTypeResponse1.attributeTypeMap;
    };
    CaseCountAnalyticsByCourtTypeResponse1.discriminator = undefined;
    CaseCountAnalyticsByCourtTypeResponse1.attributeTypeMap = [
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
            "type": "Array<CaseCountAnalyticsByCourtType1>",
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
            "name": "totalCourtTypeCount",
            "baseName": "totalCourtTypeCount",
            "type": "number",
            "format": ""
        }
    ];
    return CaseCountAnalyticsByCourtTypeResponse1;
}());
exports.CaseCountAnalyticsByCourtTypeResponse1 = CaseCountAnalyticsByCourtTypeResponse1;
//# sourceMappingURL=CaseCountAnalyticsByCourtTypeResponse1.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByCourtSystemResponse1 = void 0;
var CaseCountAnalyticsByCourtSystemResponse1 = (function () {
    function CaseCountAnalyticsByCourtSystemResponse1() {
    }
    CaseCountAnalyticsByCourtSystemResponse1.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByCourtSystemResponse1.attributeTypeMap;
    };
    CaseCountAnalyticsByCourtSystemResponse1.discriminator = undefined;
    CaseCountAnalyticsByCourtSystemResponse1.attributeTypeMap = [
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
            "type": "Array<CaseCountAnalyticsByCourtSystem1>",
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
            "name": "totalCourtSystemCount",
            "baseName": "totalCourtSystemCount",
            "type": "number",
            "format": ""
        }
    ];
    return CaseCountAnalyticsByCourtSystemResponse1;
}());
exports.CaseCountAnalyticsByCourtSystemResponse1 = CaseCountAnalyticsByCourtSystemResponse1;
//# sourceMappingURL=CaseCountAnalyticsByCourtSystemResponse1.js.map
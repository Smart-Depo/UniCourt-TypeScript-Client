"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByCourtTypeResponse = void 0;
var CaseCountAnalyticsByCourtTypeResponse = (function () {
    function CaseCountAnalyticsByCourtTypeResponse() {
    }
    CaseCountAnalyticsByCourtTypeResponse.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByCourtTypeResponse.attributeTypeMap;
    };
    CaseCountAnalyticsByCourtTypeResponse.discriminator = undefined;
    CaseCountAnalyticsByCourtTypeResponse.attributeTypeMap = [
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
    return CaseCountAnalyticsByCourtTypeResponse;
}());
exports.CaseCountAnalyticsByCourtTypeResponse = CaseCountAnalyticsByCourtTypeResponse;
//# sourceMappingURL=CaseCountAnalyticsByCourtTypeResponse.js.map
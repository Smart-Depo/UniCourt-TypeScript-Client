"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByCourtResponse = void 0;
var CaseCountAnalyticsByCourtResponse = (function () {
    function CaseCountAnalyticsByCourtResponse() {
    }
    CaseCountAnalyticsByCourtResponse.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByCourtResponse.attributeTypeMap;
    };
    CaseCountAnalyticsByCourtResponse.discriminator = undefined;
    CaseCountAnalyticsByCourtResponse.attributeTypeMap = [
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
    return CaseCountAnalyticsByCourtResponse;
}());
exports.CaseCountAnalyticsByCourtResponse = CaseCountAnalyticsByCourtResponse;
//# sourceMappingURL=CaseCountAnalyticsByCourtResponse.js.map
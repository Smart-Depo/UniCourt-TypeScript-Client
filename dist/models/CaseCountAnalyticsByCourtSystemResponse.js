"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByCourtSystemResponse = void 0;
var CaseCountAnalyticsByCourtSystemResponse = (function () {
    function CaseCountAnalyticsByCourtSystemResponse() {
    }
    CaseCountAnalyticsByCourtSystemResponse.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByCourtSystemResponse.attributeTypeMap;
    };
    CaseCountAnalyticsByCourtSystemResponse.discriminator = undefined;
    CaseCountAnalyticsByCourtSystemResponse.attributeTypeMap = [
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
    return CaseCountAnalyticsByCourtSystemResponse;
}());
exports.CaseCountAnalyticsByCourtSystemResponse = CaseCountAnalyticsByCourtSystemResponse;
//# sourceMappingURL=CaseCountAnalyticsByCourtSystemResponse.js.map
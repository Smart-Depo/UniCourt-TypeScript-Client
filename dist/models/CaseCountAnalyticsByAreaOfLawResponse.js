"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByAreaOfLawResponse = void 0;
var CaseCountAnalyticsByAreaOfLawResponse = (function () {
    function CaseCountAnalyticsByAreaOfLawResponse() {
    }
    CaseCountAnalyticsByAreaOfLawResponse.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByAreaOfLawResponse.attributeTypeMap;
    };
    CaseCountAnalyticsByAreaOfLawResponse.discriminator = undefined;
    CaseCountAnalyticsByAreaOfLawResponse.attributeTypeMap = [
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
            "type": "Array<CaseCountAnalyticsByAreaOfLaw1>",
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
            "name": "totalAreaOfLawCount",
            "baseName": "totalAreaOfLawCount",
            "type": "number",
            "format": ""
        }
    ];
    return CaseCountAnalyticsByAreaOfLawResponse;
}());
exports.CaseCountAnalyticsByAreaOfLawResponse = CaseCountAnalyticsByAreaOfLawResponse;
//# sourceMappingURL=CaseCountAnalyticsByAreaOfLawResponse.js.map
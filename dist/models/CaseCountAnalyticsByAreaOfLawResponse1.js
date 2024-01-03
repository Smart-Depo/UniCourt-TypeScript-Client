"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByAreaOfLawResponse1 = void 0;
var CaseCountAnalyticsByAreaOfLawResponse1 = (function () {
    function CaseCountAnalyticsByAreaOfLawResponse1() {
    }
    CaseCountAnalyticsByAreaOfLawResponse1.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByAreaOfLawResponse1.attributeTypeMap;
    };
    CaseCountAnalyticsByAreaOfLawResponse1.discriminator = undefined;
    CaseCountAnalyticsByAreaOfLawResponse1.attributeTypeMap = [
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
    return CaseCountAnalyticsByAreaOfLawResponse1;
}());
exports.CaseCountAnalyticsByAreaOfLawResponse1 = CaseCountAnalyticsByAreaOfLawResponse1;
//# sourceMappingURL=CaseCountAnalyticsByAreaOfLawResponse1.js.map
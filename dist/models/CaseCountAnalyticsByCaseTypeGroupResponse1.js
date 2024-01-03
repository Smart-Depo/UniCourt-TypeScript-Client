"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByCaseTypeGroupResponse1 = void 0;
var CaseCountAnalyticsByCaseTypeGroupResponse1 = (function () {
    function CaseCountAnalyticsByCaseTypeGroupResponse1() {
    }
    CaseCountAnalyticsByCaseTypeGroupResponse1.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByCaseTypeGroupResponse1.attributeTypeMap;
    };
    CaseCountAnalyticsByCaseTypeGroupResponse1.discriminator = undefined;
    CaseCountAnalyticsByCaseTypeGroupResponse1.attributeTypeMap = [
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
            "type": "Array<CaseCountAnalyticsByCaseTypeGroup1>",
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
            "name": "totalCaseTypeGroupCount",
            "baseName": "totalCaseTypeGroupCount",
            "type": "number",
            "format": ""
        }
    ];
    return CaseCountAnalyticsByCaseTypeGroupResponse1;
}());
exports.CaseCountAnalyticsByCaseTypeGroupResponse1 = CaseCountAnalyticsByCaseTypeGroupResponse1;
//# sourceMappingURL=CaseCountAnalyticsByCaseTypeGroupResponse1.js.map
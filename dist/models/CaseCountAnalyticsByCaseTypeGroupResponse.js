"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByCaseTypeGroupResponse = void 0;
var CaseCountAnalyticsByCaseTypeGroupResponse = (function () {
    function CaseCountAnalyticsByCaseTypeGroupResponse() {
    }
    CaseCountAnalyticsByCaseTypeGroupResponse.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByCaseTypeGroupResponse.attributeTypeMap;
    };
    CaseCountAnalyticsByCaseTypeGroupResponse.discriminator = undefined;
    CaseCountAnalyticsByCaseTypeGroupResponse.attributeTypeMap = [
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
    return CaseCountAnalyticsByCaseTypeGroupResponse;
}());
exports.CaseCountAnalyticsByCaseTypeGroupResponse = CaseCountAnalyticsByCaseTypeGroupResponse;
//# sourceMappingURL=CaseCountAnalyticsByCaseTypeGroupResponse.js.map
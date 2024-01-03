"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByPartyRoleResponse = void 0;
var CaseCountAnalyticsByPartyRoleResponse = (function () {
    function CaseCountAnalyticsByPartyRoleResponse() {
    }
    CaseCountAnalyticsByPartyRoleResponse.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByPartyRoleResponse.attributeTypeMap;
    };
    CaseCountAnalyticsByPartyRoleResponse.discriminator = undefined;
    CaseCountAnalyticsByPartyRoleResponse.attributeTypeMap = [
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
            "type": "Array<CaseCountAnalyticsByPartyRole1>",
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
            "name": "totalPartyRoleCount",
            "baseName": "totalPartyRoleCount",
            "type": "number",
            "format": ""
        }
    ];
    return CaseCountAnalyticsByPartyRoleResponse;
}());
exports.CaseCountAnalyticsByPartyRoleResponse = CaseCountAnalyticsByPartyRoleResponse;
//# sourceMappingURL=CaseCountAnalyticsByPartyRoleResponse.js.map
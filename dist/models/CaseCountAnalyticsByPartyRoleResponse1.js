"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByPartyRoleResponse1 = void 0;
var CaseCountAnalyticsByPartyRoleResponse1 = (function () {
    function CaseCountAnalyticsByPartyRoleResponse1() {
    }
    CaseCountAnalyticsByPartyRoleResponse1.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByPartyRoleResponse1.attributeTypeMap;
    };
    CaseCountAnalyticsByPartyRoleResponse1.discriminator = undefined;
    CaseCountAnalyticsByPartyRoleResponse1.attributeTypeMap = [
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
    return CaseCountAnalyticsByPartyRoleResponse1;
}());
exports.CaseCountAnalyticsByPartyRoleResponse1 = CaseCountAnalyticsByPartyRoleResponse1;
//# sourceMappingURL=CaseCountAnalyticsByPartyRoleResponse1.js.map
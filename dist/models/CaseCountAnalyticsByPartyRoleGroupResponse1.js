"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByPartyRoleGroupResponse1 = void 0;
var CaseCountAnalyticsByPartyRoleGroupResponse1 = (function () {
    function CaseCountAnalyticsByPartyRoleGroupResponse1() {
    }
    CaseCountAnalyticsByPartyRoleGroupResponse1.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByPartyRoleGroupResponse1.attributeTypeMap;
    };
    CaseCountAnalyticsByPartyRoleGroupResponse1.discriminator = undefined;
    CaseCountAnalyticsByPartyRoleGroupResponse1.attributeTypeMap = [
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
            "type": "Array<CaseCountAnalyticsByPartyRoleGroup1>",
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
            "name": "totalPartyRoleGroupCount",
            "baseName": "totalPartyRoleGroupCount",
            "type": "number",
            "format": ""
        }
    ];
    return CaseCountAnalyticsByPartyRoleGroupResponse1;
}());
exports.CaseCountAnalyticsByPartyRoleGroupResponse1 = CaseCountAnalyticsByPartyRoleGroupResponse1;
//# sourceMappingURL=CaseCountAnalyticsByPartyRoleGroupResponse1.js.map
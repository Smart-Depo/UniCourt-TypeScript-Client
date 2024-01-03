"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByPartyRoleGroupResponse = void 0;
var CaseCountAnalyticsByPartyRoleGroupResponse = (function () {
    function CaseCountAnalyticsByPartyRoleGroupResponse() {
    }
    CaseCountAnalyticsByPartyRoleGroupResponse.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByPartyRoleGroupResponse.attributeTypeMap;
    };
    CaseCountAnalyticsByPartyRoleGroupResponse.discriminator = undefined;
    CaseCountAnalyticsByPartyRoleGroupResponse.attributeTypeMap = [
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
    return CaseCountAnalyticsByPartyRoleGroupResponse;
}());
exports.CaseCountAnalyticsByPartyRoleGroupResponse = CaseCountAnalyticsByPartyRoleGroupResponse;
//# sourceMappingURL=CaseCountAnalyticsByPartyRoleGroupResponse.js.map
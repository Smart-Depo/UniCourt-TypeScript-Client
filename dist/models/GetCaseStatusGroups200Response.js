"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCaseStatusGroups200Response = void 0;
var GetCaseStatusGroups200Response = (function () {
    function GetCaseStatusGroups200Response() {
    }
    GetCaseStatusGroups200Response.getAttributeTypeMap = function () {
        return GetCaseStatusGroups200Response.attributeTypeMap;
    };
    GetCaseStatusGroups200Response.discriminator = undefined;
    GetCaseStatusGroups200Response.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseStatusGroupArray",
            "baseName": "caseStatusGroupArray",
            "type": "Array<CaseStatusGroup1>",
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
            "name": "pageNumber",
            "baseName": "pageNumber",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalPages",
            "baseName": "totalPages",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalCount",
            "baseName": "totalCount",
            "type": "number",
            "format": ""
        }
    ];
    return GetCaseStatusGroups200Response;
}());
exports.GetCaseStatusGroups200Response = GetCaseStatusGroups200Response;
//# sourceMappingURL=GetCaseStatusGroups200Response.js.map
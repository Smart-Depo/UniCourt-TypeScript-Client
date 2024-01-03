"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCaseTypeGroups200Response = void 0;
var GetCaseTypeGroups200Response = (function () {
    function GetCaseTypeGroups200Response() {
    }
    GetCaseTypeGroups200Response.getAttributeTypeMap = function () {
        return GetCaseTypeGroups200Response.attributeTypeMap;
    };
    GetCaseTypeGroups200Response.discriminator = undefined;
    GetCaseTypeGroups200Response.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseTypeGroupArray",
            "baseName": "caseTypeGroupArray",
            "type": "Array<CaseTypeGroup1>",
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
    return GetCaseTypeGroups200Response;
}());
exports.GetCaseTypeGroups200Response = GetCaseTypeGroups200Response;
//# sourceMappingURL=GetCaseTypeGroups200Response.js.map
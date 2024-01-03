"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCaseTypes200Response = void 0;
var GetCaseTypes200Response = (function () {
    function GetCaseTypes200Response() {
    }
    GetCaseTypes200Response.getAttributeTypeMap = function () {
        return GetCaseTypes200Response.attributeTypeMap;
    };
    GetCaseTypes200Response.discriminator = undefined;
    GetCaseTypes200Response.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseTypeArray",
            "baseName": "caseTypeArray",
            "type": "Array<CaseType1>",
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
    return GetCaseTypes200Response;
}());
exports.GetCaseTypes200Response = GetCaseTypes200Response;
//# sourceMappingURL=GetCaseTypes200Response.js.map
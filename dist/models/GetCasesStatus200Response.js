"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCasesStatus200Response = void 0;
var GetCasesStatus200Response = (function () {
    function GetCasesStatus200Response() {
    }
    GetCasesStatus200Response.getAttributeTypeMap = function () {
        return GetCasesStatus200Response.attributeTypeMap;
    };
    GetCasesStatus200Response.discriminator = undefined;
    GetCasesStatus200Response.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseStatusArray",
            "baseName": "caseStatusArray",
            "type": "Array<CaseStatus1>",
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
    return GetCasesStatus200Response;
}());
exports.GetCasesStatus200Response = GetCasesStatus200Response;
//# sourceMappingURL=GetCasesStatus200Response.js.map
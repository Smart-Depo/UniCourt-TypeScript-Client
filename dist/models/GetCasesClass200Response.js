"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCasesClass200Response = void 0;
var GetCasesClass200Response = (function () {
    function GetCasesClass200Response() {
    }
    GetCasesClass200Response.getAttributeTypeMap = function () {
        return GetCasesClass200Response.attributeTypeMap;
    };
    GetCasesClass200Response.discriminator = undefined;
    GetCasesClass200Response.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseClassArray",
            "baseName": "caseClassArray",
            "type": "Array<CaseClass1>",
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
    return GetCasesClass200Response;
}());
exports.GetCasesClass200Response = GetCasesClass200Response;
//# sourceMappingURL=GetCasesClass200Response.js.map
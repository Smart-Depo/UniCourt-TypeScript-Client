"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCaseExportCallbacks200Response = void 0;
var GetCaseExportCallbacks200Response = (function () {
    function GetCaseExportCallbacks200Response() {
    }
    GetCaseExportCallbacks200Response.getAttributeTypeMap = function () {
        return GetCaseExportCallbacks200Response.attributeTypeMap;
    };
    GetCaseExportCallbacks200Response.discriminator = undefined;
    GetCaseExportCallbacks200Response.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
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
        },
        {
            "name": "pageNumber",
            "baseName": "pageNumber",
            "type": "number",
            "format": ""
        },
        {
            "name": "nextPageAPI",
            "baseName": "nextPageAPI",
            "type": "string",
            "format": ""
        },
        {
            "name": "previousPageAPI",
            "baseName": "previousPageAPI",
            "type": "string",
            "format": ""
        },
        {
            "name": "callbackArray",
            "baseName": "callbackArray",
            "type": "Array<ExportCase200Response>",
            "format": ""
        }
    ];
    return GetCaseExportCallbacks200Response;
}());
exports.GetCaseExportCallbacks200Response = GetCaseExportCallbacks200Response;
//# sourceMappingURL=GetCaseExportCallbacks200Response.js.map
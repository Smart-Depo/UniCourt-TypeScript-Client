"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCaseDocumentOrderCallbacks200Response = void 0;
var GetCaseDocumentOrderCallbacks200Response = (function () {
    function GetCaseDocumentOrderCallbacks200Response() {
    }
    GetCaseDocumentOrderCallbacks200Response.getAttributeTypeMap = function () {
        return GetCaseDocumentOrderCallbacks200Response.attributeTypeMap;
    };
    GetCaseDocumentOrderCallbacks200Response.discriminator = undefined;
    GetCaseDocumentOrderCallbacks200Response.attributeTypeMap = [
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
            "format": "uri"
        },
        {
            "name": "previousPageAPI",
            "baseName": "previousPageAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "callbackArray",
            "baseName": "callbackArray",
            "type": "Array<OrderCaseDocument200Response>",
            "format": ""
        }
    ];
    return GetCaseDocumentOrderCallbacks200Response;
}());
exports.GetCaseDocumentOrderCallbacks200Response = GetCaseDocumentOrderCallbacks200Response;
//# sourceMappingURL=GetCaseDocumentOrderCallbacks200Response.js.map
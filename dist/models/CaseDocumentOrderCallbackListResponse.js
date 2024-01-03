"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseDocumentOrderCallbackListResponse = void 0;
var CaseDocumentOrderCallbackListResponse = (function () {
    function CaseDocumentOrderCallbackListResponse() {
    }
    CaseDocumentOrderCallbackListResponse.getAttributeTypeMap = function () {
        return CaseDocumentOrderCallbackListResponse.attributeTypeMap;
    };
    CaseDocumentOrderCallbackListResponse.discriminator = undefined;
    CaseDocumentOrderCallbackListResponse.attributeTypeMap = [
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
    return CaseDocumentOrderCallbackListResponse;
}());
exports.CaseDocumentOrderCallbackListResponse = CaseDocumentOrderCallbackListResponse;
//# sourceMappingURL=CaseDocumentOrderCallbackListResponse.js.map
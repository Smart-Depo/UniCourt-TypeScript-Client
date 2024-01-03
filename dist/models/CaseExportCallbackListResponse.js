"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseExportCallbackListResponse = void 0;
var CaseExportCallbackListResponse = (function () {
    function CaseExportCallbackListResponse() {
    }
    CaseExportCallbackListResponse.getAttributeTypeMap = function () {
        return CaseExportCallbackListResponse.attributeTypeMap;
    };
    CaseExportCallbackListResponse.discriminator = undefined;
    CaseExportCallbackListResponse.attributeTypeMap = [
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
    return CaseExportCallbackListResponse;
}());
exports.CaseExportCallbackListResponse = CaseExportCallbackListResponse;
//# sourceMappingURL=CaseExportCallbackListResponse.js.map
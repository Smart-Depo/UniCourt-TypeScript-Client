"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCaseUpdates200Response = void 0;
var GetCaseUpdates200Response = (function () {
    function GetCaseUpdates200Response() {
    }
    GetCaseUpdates200Response.getAttributeTypeMap = function () {
        return GetCaseUpdates200Response.attributeTypeMap;
    };
    GetCaseUpdates200Response.discriminator = undefined;
    GetCaseUpdates200Response.attributeTypeMap = [
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
            "name": "caseUpdatePreviewArray",
            "baseName": "caseUpdatePreviewArray",
            "type": "Array<GetCaseUpdates200ResponseCaseUpdatePreviewArrayInner>",
            "format": ""
        }
    ];
    return GetCaseUpdates200Response;
}());
exports.GetCaseUpdates200Response = GetCaseUpdates200Response;
//# sourceMappingURL=GetCaseUpdates200Response.js.map
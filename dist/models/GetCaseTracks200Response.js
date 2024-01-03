"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCaseTracks200Response = void 0;
var GetCaseTracks200Response = (function () {
    function GetCaseTracks200Response() {
    }
    GetCaseTracks200Response.getAttributeTypeMap = function () {
        return GetCaseTracks200Response.attributeTypeMap;
    };
    GetCaseTracks200Response.discriminator = undefined;
    GetCaseTracks200Response.attributeTypeMap = [
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
            "name": "caseTrackPreviewArray",
            "baseName": "caseTrackPreviewArray",
            "type": "Array<GetCaseTracks200ResponseCaseTrackPreviewArrayInner>",
            "format": ""
        }
    ];
    return GetCaseTracks200Response;
}());
exports.GetCaseTracks200Response = GetCaseTracks200Response;
//# sourceMappingURL=GetCaseTracks200Response.js.map
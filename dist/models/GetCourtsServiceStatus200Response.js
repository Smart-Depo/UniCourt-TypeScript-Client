"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCourtsServiceStatus200Response = void 0;
var GetCourtsServiceStatus200Response = (function () {
    function GetCourtsServiceStatus200Response() {
    }
    GetCourtsServiceStatus200Response.getAttributeTypeMap = function () {
        return GetCourtsServiceStatus200Response.attributeTypeMap;
    };
    GetCourtsServiceStatus200Response.discriminator = undefined;
    GetCourtsServiceStatus200Response.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "courtServiceStatusArray",
            "baseName": "courtServiceStatusArray",
            "type": "Array<GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner>",
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
    return GetCourtsServiceStatus200Response;
}());
exports.GetCourtsServiceStatus200Response = GetCourtsServiceStatus200Response;
//# sourceMappingURL=GetCourtsServiceStatus200Response.js.map
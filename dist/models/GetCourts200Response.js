"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCourts200Response = void 0;
var GetCourts200Response = (function () {
    function GetCourts200Response() {
    }
    GetCourts200Response.getAttributeTypeMap = function () {
        return GetCourts200Response.attributeTypeMap;
    };
    GetCourts200Response.discriminator = undefined;
    GetCourts200Response.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "courtArray",
            "baseName": "courtArray",
            "type": "Array<Court1>",
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
    return GetCourts200Response;
}());
exports.GetCourts200Response = GetCourts200Response;
//# sourceMappingURL=GetCourts200Response.js.map
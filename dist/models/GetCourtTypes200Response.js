"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCourtTypes200Response = void 0;
var GetCourtTypes200Response = (function () {
    function GetCourtTypes200Response() {
    }
    GetCourtTypes200Response.getAttributeTypeMap = function () {
        return GetCourtTypes200Response.attributeTypeMap;
    };
    GetCourtTypes200Response.discriminator = undefined;
    GetCourtTypes200Response.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "courtTypeArray",
            "baseName": "courtTypeArray",
            "type": "Array<CourtType1>",
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
    return GetCourtTypes200Response;
}());
exports.GetCourtTypes200Response = GetCourtTypes200Response;
//# sourceMappingURL=GetCourtTypes200Response.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCourtSystems200Response = void 0;
var GetCourtSystems200Response = (function () {
    function GetCourtSystems200Response() {
    }
    GetCourtSystems200Response.getAttributeTypeMap = function () {
        return GetCourtSystems200Response.attributeTypeMap;
    };
    GetCourtSystems200Response.discriminator = undefined;
    GetCourtSystems200Response.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "courtSystemArray",
            "baseName": "courtSystemArray",
            "type": "Array<CourtSystem1>",
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
    return GetCourtSystems200Response;
}());
exports.GetCourtSystems200Response = GetCourtSystems200Response;
//# sourceMappingURL=GetCourtSystems200Response.js.map
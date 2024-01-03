"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAttorneyTypes200Response = void 0;
var GetAttorneyTypes200Response = (function () {
    function GetAttorneyTypes200Response() {
    }
    GetAttorneyTypes200Response.getAttributeTypeMap = function () {
        return GetAttorneyTypes200Response.attributeTypeMap;
    };
    GetAttorneyTypes200Response.discriminator = undefined;
    GetAttorneyTypes200Response.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "attorneyTypeArray",
            "baseName": "attorneyTypeArray",
            "type": "Array<AttorneyType1>",
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
    return GetAttorneyTypes200Response;
}());
exports.GetAttorneyTypes200Response = GetAttorneyTypes200Response;
//# sourceMappingURL=GetAttorneyTypes200Response.js.map
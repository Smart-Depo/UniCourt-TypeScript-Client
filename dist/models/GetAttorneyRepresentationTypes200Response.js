"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAttorneyRepresentationTypes200Response = void 0;
var GetAttorneyRepresentationTypes200Response = (function () {
    function GetAttorneyRepresentationTypes200Response() {
    }
    GetAttorneyRepresentationTypes200Response.getAttributeTypeMap = function () {
        return GetAttorneyRepresentationTypes200Response.attributeTypeMap;
    };
    GetAttorneyRepresentationTypes200Response.discriminator = undefined;
    GetAttorneyRepresentationTypes200Response.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "attorneyRepresentationTypeArray",
            "baseName": "attorneyRepresentationTypeArray",
            "type": "Array<AttorneyRepresentationType1>",
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
    return GetAttorneyRepresentationTypes200Response;
}());
exports.GetAttorneyRepresentationTypes200Response = GetAttorneyRepresentationTypes200Response;
//# sourceMappingURL=GetAttorneyRepresentationTypes200Response.js.map
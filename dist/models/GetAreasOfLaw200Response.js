"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAreasOfLaw200Response = void 0;
var GetAreasOfLaw200Response = (function () {
    function GetAreasOfLaw200Response() {
    }
    GetAreasOfLaw200Response.getAttributeTypeMap = function () {
        return GetAreasOfLaw200Response.attributeTypeMap;
    };
    GetAreasOfLaw200Response.discriminator = undefined;
    GetAreasOfLaw200Response.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "areaOfLawArray",
            "baseName": "areaOfLawArray",
            "type": "Array<AreaOfLaw1>",
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
    return GetAreasOfLaw200Response;
}());
exports.GetAreasOfLaw200Response = GetAreasOfLaw200Response;
//# sourceMappingURL=GetAreasOfLaw200Response.js.map
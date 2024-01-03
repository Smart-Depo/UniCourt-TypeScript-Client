"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetChargesDegree200Response = void 0;
var GetChargesDegree200Response = (function () {
    function GetChargesDegree200Response() {
    }
    GetChargesDegree200Response.getAttributeTypeMap = function () {
        return GetChargesDegree200Response.attributeTypeMap;
    };
    GetChargesDegree200Response.discriminator = undefined;
    GetChargesDegree200Response.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "chargeDegreeArray",
            "baseName": "chargeDegreeArray",
            "type": "Array<ChargeDegree1>",
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
    return GetChargesDegree200Response;
}());
exports.GetChargesDegree200Response = GetChargesDegree200Response;
//# sourceMappingURL=GetChargesDegree200Response.js.map
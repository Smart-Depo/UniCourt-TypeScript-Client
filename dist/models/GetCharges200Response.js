"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCharges200Response = void 0;
var GetCharges200Response = (function () {
    function GetCharges200Response() {
    }
    GetCharges200Response.getAttributeTypeMap = function () {
        return GetCharges200Response.attributeTypeMap;
    };
    GetCharges200Response.discriminator = undefined;
    GetCharges200Response.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "chargeArray",
            "baseName": "chargeArray",
            "type": "Array<Charge1>",
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
    return GetCharges200Response;
}());
exports.GetCharges200Response = GetCharges200Response;
//# sourceMappingURL=GetCharges200Response.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetChargeGroups200Response = void 0;
var GetChargeGroups200Response = (function () {
    function GetChargeGroups200Response() {
    }
    GetChargeGroups200Response.getAttributeTypeMap = function () {
        return GetChargeGroups200Response.attributeTypeMap;
    };
    GetChargeGroups200Response.discriminator = undefined;
    GetChargeGroups200Response.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "chargeGroupArray",
            "baseName": "chargeGroupArray",
            "type": "Array<ChargeGroup1>",
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
    return GetChargeGroups200Response;
}());
exports.GetChargeGroups200Response = GetChargeGroups200Response;
//# sourceMappingURL=GetChargeGroups200Response.js.map
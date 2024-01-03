"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetChargesAdditionalData200Response = void 0;
var GetChargesAdditionalData200Response = (function () {
    function GetChargesAdditionalData200Response() {
    }
    GetChargesAdditionalData200Response.getAttributeTypeMap = function () {
        return GetChargesAdditionalData200Response.attributeTypeMap;
    };
    GetChargesAdditionalData200Response.discriminator = undefined;
    GetChargesAdditionalData200Response.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "chargeAdditionalDataArray",
            "baseName": "chargeAdditionalDataArray",
            "type": "Array<ChargeAdditionalData1>",
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
    return GetChargesAdditionalData200Response;
}());
exports.GetChargesAdditionalData200Response = GetChargesAdditionalData200Response;
//# sourceMappingURL=GetChargesAdditionalData200Response.js.map
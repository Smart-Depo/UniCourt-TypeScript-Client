"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetChargesSeverity200Response = void 0;
var GetChargesSeverity200Response = (function () {
    function GetChargesSeverity200Response() {
    }
    GetChargesSeverity200Response.getAttributeTypeMap = function () {
        return GetChargesSeverity200Response.attributeTypeMap;
    };
    GetChargesSeverity200Response.discriminator = undefined;
    GetChargesSeverity200Response.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "chargeSeverityArray",
            "baseName": "chargeSeverityArray",
            "type": "Array<ChargeSeverity1>",
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
    return GetChargesSeverity200Response;
}());
exports.GetChargesSeverity200Response = GetChargesSeverity200Response;
//# sourceMappingURL=GetChargesSeverity200Response.js.map
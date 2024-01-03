"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeResponse = void 0;
var ChargeResponse = (function () {
    function ChargeResponse() {
    }
    ChargeResponse.getAttributeTypeMap = function () {
        return ChargeResponse.attributeTypeMap;
    };
    ChargeResponse.discriminator = undefined;
    ChargeResponse.attributeTypeMap = [
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
    return ChargeResponse;
}());
exports.ChargeResponse = ChargeResponse;
//# sourceMappingURL=ChargeResponse.js.map
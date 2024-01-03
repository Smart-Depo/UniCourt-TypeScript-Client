"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeAdditionalDataResponse = void 0;
var ChargeAdditionalDataResponse = (function () {
    function ChargeAdditionalDataResponse() {
    }
    ChargeAdditionalDataResponse.getAttributeTypeMap = function () {
        return ChargeAdditionalDataResponse.attributeTypeMap;
    };
    ChargeAdditionalDataResponse.discriminator = undefined;
    ChargeAdditionalDataResponse.attributeTypeMap = [
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
    return ChargeAdditionalDataResponse;
}());
exports.ChargeAdditionalDataResponse = ChargeAdditionalDataResponse;
//# sourceMappingURL=ChargeAdditionalDataResponse.js.map
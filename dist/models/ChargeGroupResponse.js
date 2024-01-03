"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeGroupResponse = void 0;
var ChargeGroupResponse = (function () {
    function ChargeGroupResponse() {
    }
    ChargeGroupResponse.getAttributeTypeMap = function () {
        return ChargeGroupResponse.attributeTypeMap;
    };
    ChargeGroupResponse.discriminator = undefined;
    ChargeGroupResponse.attributeTypeMap = [
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
    return ChargeGroupResponse;
}());
exports.ChargeGroupResponse = ChargeGroupResponse;
//# sourceMappingURL=ChargeGroupResponse.js.map
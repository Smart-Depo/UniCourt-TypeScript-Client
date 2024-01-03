"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeSeverityResponse = void 0;
var ChargeSeverityResponse = (function () {
    function ChargeSeverityResponse() {
    }
    ChargeSeverityResponse.getAttributeTypeMap = function () {
        return ChargeSeverityResponse.attributeTypeMap;
    };
    ChargeSeverityResponse.discriminator = undefined;
    ChargeSeverityResponse.attributeTypeMap = [
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
    return ChargeSeverityResponse;
}());
exports.ChargeSeverityResponse = ChargeSeverityResponse;
//# sourceMappingURL=ChargeSeverityResponse.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeDegreeResponse = void 0;
var ChargeDegreeResponse = (function () {
    function ChargeDegreeResponse() {
    }
    ChargeDegreeResponse.getAttributeTypeMap = function () {
        return ChargeDegreeResponse.attributeTypeMap;
    };
    ChargeDegreeResponse.discriminator = undefined;
    ChargeDegreeResponse.attributeTypeMap = [
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
    return ChargeDegreeResponse;
}());
exports.ChargeDegreeResponse = ChargeDegreeResponse;
//# sourceMappingURL=ChargeDegreeResponse.js.map
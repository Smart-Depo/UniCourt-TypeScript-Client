"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourtLocationResponse = void 0;
var CourtLocationResponse = (function () {
    function CourtLocationResponse() {
    }
    CourtLocationResponse.getAttributeTypeMap = function () {
        return CourtLocationResponse.attributeTypeMap;
    };
    CourtLocationResponse.discriminator = undefined;
    CourtLocationResponse.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "courtLocationArray",
            "baseName": "courtLocationArray",
            "type": "Array<CourtLocation1>",
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
    return CourtLocationResponse;
}());
exports.CourtLocationResponse = CourtLocationResponse;
//# sourceMappingURL=CourtLocationResponse.js.map
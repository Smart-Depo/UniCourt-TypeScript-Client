"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourtTypeResponse = void 0;
var CourtTypeResponse = (function () {
    function CourtTypeResponse() {
    }
    CourtTypeResponse.getAttributeTypeMap = function () {
        return CourtTypeResponse.attributeTypeMap;
    };
    CourtTypeResponse.discriminator = undefined;
    CourtTypeResponse.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "courtTypeArray",
            "baseName": "courtTypeArray",
            "type": "Array<CourtType1>",
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
    return CourtTypeResponse;
}());
exports.CourtTypeResponse = CourtTypeResponse;
//# sourceMappingURL=CourtTypeResponse.js.map
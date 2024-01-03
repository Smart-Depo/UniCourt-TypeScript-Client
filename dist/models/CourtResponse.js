"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourtResponse = void 0;
var CourtResponse = (function () {
    function CourtResponse() {
    }
    CourtResponse.getAttributeTypeMap = function () {
        return CourtResponse.attributeTypeMap;
    };
    CourtResponse.discriminator = undefined;
    CourtResponse.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "courtArray",
            "baseName": "courtArray",
            "type": "Array<Court1>",
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
    return CourtResponse;
}());
exports.CourtResponse = CourtResponse;
//# sourceMappingURL=CourtResponse.js.map
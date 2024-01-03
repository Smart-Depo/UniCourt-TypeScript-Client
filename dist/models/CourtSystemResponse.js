"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourtSystemResponse = void 0;
var CourtSystemResponse = (function () {
    function CourtSystemResponse() {
    }
    CourtSystemResponse.getAttributeTypeMap = function () {
        return CourtSystemResponse.attributeTypeMap;
    };
    CourtSystemResponse.discriminator = undefined;
    CourtSystemResponse.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "courtSystemArray",
            "baseName": "courtSystemArray",
            "type": "Array<CourtSystem1>",
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
    return CourtSystemResponse;
}());
exports.CourtSystemResponse = CourtSystemResponse;
//# sourceMappingURL=CourtSystemResponse.js.map
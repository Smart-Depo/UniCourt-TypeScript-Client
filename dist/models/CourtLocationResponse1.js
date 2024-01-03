"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourtLocationResponse1 = void 0;
var CourtLocationResponse1 = (function () {
    function CourtLocationResponse1() {
    }
    CourtLocationResponse1.getAttributeTypeMap = function () {
        return CourtLocationResponse1.attributeTypeMap;
    };
    CourtLocationResponse1.discriminator = undefined;
    CourtLocationResponse1.attributeTypeMap = [
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
    return CourtLocationResponse1;
}());
exports.CourtLocationResponse1 = CourtLocationResponse1;
//# sourceMappingURL=CourtLocationResponse1.js.map
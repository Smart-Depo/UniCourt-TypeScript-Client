"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourtServiceStatusResponse = void 0;
var CourtServiceStatusResponse = (function () {
    function CourtServiceStatusResponse() {
    }
    CourtServiceStatusResponse.getAttributeTypeMap = function () {
        return CourtServiceStatusResponse.attributeTypeMap;
    };
    CourtServiceStatusResponse.discriminator = undefined;
    CourtServiceStatusResponse.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "courtServiceStatusArray",
            "baseName": "courtServiceStatusArray",
            "type": "Array<GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner>",
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
    return CourtServiceStatusResponse;
}());
exports.CourtServiceStatusResponse = CourtServiceStatusResponse;
//# sourceMappingURL=CourtServiceStatusResponse.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormLawFirmSearchResponse = void 0;
var NormLawFirmSearchResponse = (function () {
    function NormLawFirmSearchResponse() {
    }
    NormLawFirmSearchResponse.getAttributeTypeMap = function () {
        return NormLawFirmSearchResponse.attributeTypeMap;
    };
    NormLawFirmSearchResponse.discriminator = undefined;
    NormLawFirmSearchResponse.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "normLawFirmSearchResultArray",
            "baseName": "normLawFirmSearchResultArray",
            "type": "Array<SearchNormalizedLawFirms200ResponseNormLawFirmSearchResultArrayInner>",
            "format": ""
        },
        {
            "name": "q",
            "baseName": "q",
            "type": "string",
            "format": ""
        },
        {
            "name": "normLawFirmSearchId",
            "baseName": "normLawFirmSearchId",
            "type": "string",
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
    return NormLawFirmSearchResponse;
}());
exports.NormLawFirmSearchResponse = NormLawFirmSearchResponse;
//# sourceMappingURL=NormLawFirmSearchResponse.js.map
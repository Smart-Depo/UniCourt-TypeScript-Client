"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchNormalizedLawFirms200Response = void 0;
var SearchNormalizedLawFirms200Response = (function () {
    function SearchNormalizedLawFirms200Response() {
    }
    SearchNormalizedLawFirms200Response.getAttributeTypeMap = function () {
        return SearchNormalizedLawFirms200Response.attributeTypeMap;
    };
    SearchNormalizedLawFirms200Response.discriminator = undefined;
    SearchNormalizedLawFirms200Response.attributeTypeMap = [
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
    return SearchNormalizedLawFirms200Response;
}());
exports.SearchNormalizedLawFirms200Response = SearchNormalizedLawFirms200Response;
//# sourceMappingURL=SearchNormalizedLawFirms200Response.js.map
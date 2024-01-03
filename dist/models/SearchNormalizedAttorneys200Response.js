"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchNormalizedAttorneys200Response = void 0;
var SearchNormalizedAttorneys200Response = (function () {
    function SearchNormalizedAttorneys200Response() {
    }
    SearchNormalizedAttorneys200Response.getAttributeTypeMap = function () {
        return SearchNormalizedAttorneys200Response.attributeTypeMap;
    };
    SearchNormalizedAttorneys200Response.discriminator = undefined;
    SearchNormalizedAttorneys200Response.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "normAttorneySearchResultArray",
            "baseName": "normAttorneySearchResultArray",
            "type": "Array<SearchNormalizedAttorneys200ResponseNormAttorneySearchResultArrayInner>",
            "format": ""
        },
        {
            "name": "q",
            "baseName": "q",
            "type": "string",
            "format": ""
        },
        {
            "name": "normAttorneySearchId",
            "baseName": "normAttorneySearchId",
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
    return SearchNormalizedAttorneys200Response;
}());
exports.SearchNormalizedAttorneys200Response = SearchNormalizedAttorneys200Response;
//# sourceMappingURL=SearchNormalizedAttorneys200Response.js.map
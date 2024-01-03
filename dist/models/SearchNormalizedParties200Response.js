"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchNormalizedParties200Response = void 0;
var SearchNormalizedParties200Response = (function () {
    function SearchNormalizedParties200Response() {
    }
    SearchNormalizedParties200Response.getAttributeTypeMap = function () {
        return SearchNormalizedParties200Response.attributeTypeMap;
    };
    SearchNormalizedParties200Response.discriminator = undefined;
    SearchNormalizedParties200Response.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "normPartySearchResultArray",
            "baseName": "normPartySearchResultArray",
            "type": "Array<SearchNormalizedParties200ResponseNormPartySearchResultArrayInner>",
            "format": ""
        },
        {
            "name": "q",
            "baseName": "q",
            "type": "string",
            "format": ""
        },
        {
            "name": "normPartySearchId",
            "baseName": "normPartySearchId",
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
    return SearchNormalizedParties200Response;
}());
exports.SearchNormalizedParties200Response = SearchNormalizedParties200Response;
//# sourceMappingURL=SearchNormalizedParties200Response.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormAttorneySearchResponse = void 0;
var NormAttorneySearchResponse = (function () {
    function NormAttorneySearchResponse() {
    }
    NormAttorneySearchResponse.getAttributeTypeMap = function () {
        return NormAttorneySearchResponse.attributeTypeMap;
    };
    NormAttorneySearchResponse.discriminator = undefined;
    NormAttorneySearchResponse.attributeTypeMap = [
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
    return NormAttorneySearchResponse;
}());
exports.NormAttorneySearchResponse = NormAttorneySearchResponse;
//# sourceMappingURL=NormAttorneySearchResponse.js.map
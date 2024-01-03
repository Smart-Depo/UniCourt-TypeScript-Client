"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchNormalizedJudges200Response = void 0;
var SearchNormalizedJudges200Response = (function () {
    function SearchNormalizedJudges200Response() {
    }
    SearchNormalizedJudges200Response.getAttributeTypeMap = function () {
        return SearchNormalizedJudges200Response.attributeTypeMap;
    };
    SearchNormalizedJudges200Response.discriminator = undefined;
    SearchNormalizedJudges200Response.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "normJudgeSearchResultArray",
            "baseName": "normJudgeSearchResultArray",
            "type": "Array<SearchNormalizedJudges200ResponseNormJudgeSearchResultArrayInner>",
            "format": ""
        },
        {
            "name": "q",
            "baseName": "q",
            "type": "string",
            "format": ""
        },
        {
            "name": "normJudgeSearchId",
            "baseName": "normJudgeSearchId",
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
    return SearchNormalizedJudges200Response;
}());
exports.SearchNormalizedJudges200Response = SearchNormalizedJudges200Response;
//# sourceMappingURL=SearchNormalizedJudges200Response.js.map
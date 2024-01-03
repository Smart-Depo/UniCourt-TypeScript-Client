"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormJudgeSearchResponse = void 0;
var NormJudgeSearchResponse = (function () {
    function NormJudgeSearchResponse() {
    }
    NormJudgeSearchResponse.getAttributeTypeMap = function () {
        return NormJudgeSearchResponse.attributeTypeMap;
    };
    NormJudgeSearchResponse.discriminator = undefined;
    NormJudgeSearchResponse.attributeTypeMap = [
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
    return NormJudgeSearchResponse;
}());
exports.NormJudgeSearchResponse = NormJudgeSearchResponse;
//# sourceMappingURL=NormJudgeSearchResponse.js.map
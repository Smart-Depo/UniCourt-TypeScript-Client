"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchNormalizedJudges200ResponseNormJudgeSearchResultArrayInner = void 0;
var SearchNormalizedJudges200ResponseNormJudgeSearchResultArrayInner = (function () {
    function SearchNormalizedJudges200ResponseNormJudgeSearchResultArrayInner() {
    }
    SearchNormalizedJudges200ResponseNormJudgeSearchResultArrayInner.getAttributeTypeMap = function () {
        return SearchNormalizedJudges200ResponseNormJudgeSearchResultArrayInner.attributeTypeMap;
    };
    SearchNormalizedJudges200ResponseNormJudgeSearchResultArrayInner.discriminator = undefined;
    SearchNormalizedJudges200ResponseNormJudgeSearchResultArrayInner.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "normJudgeId",
            "baseName": "normJudgeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "firstFetchDate",
            "baseName": "firstFetchDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lastFetchDate",
            "baseName": "lastFetchDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "normJudgeDetailsAPI",
            "baseName": "normJudgeDetailsAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "matchedObjectArray",
            "baseName": "matchedObjectArray",
            "type": "Array<CaseSearchResult1MatchedObjectArrayInner>",
            "format": ""
        }
    ];
    return SearchNormalizedJudges200ResponseNormJudgeSearchResultArrayInner;
}());
exports.SearchNormalizedJudges200ResponseNormJudgeSearchResultArrayInner = SearchNormalizedJudges200ResponseNormJudgeSearchResultArrayInner;
//# sourceMappingURL=SearchNormalizedJudges200ResponseNormJudgeSearchResultArrayInner.js.map
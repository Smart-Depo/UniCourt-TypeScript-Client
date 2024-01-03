"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormJudgeSearchResult = void 0;
var NormJudgeSearchResult = (function () {
    function NormJudgeSearchResult() {
    }
    NormJudgeSearchResult.getAttributeTypeMap = function () {
        return NormJudgeSearchResult.attributeTypeMap;
    };
    NormJudgeSearchResult.discriminator = undefined;
    NormJudgeSearchResult.attributeTypeMap = [
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
    return NormJudgeSearchResult;
}());
exports.NormJudgeSearchResult = NormJudgeSearchResult;
//# sourceMappingURL=NormJudgeSearchResult.js.map
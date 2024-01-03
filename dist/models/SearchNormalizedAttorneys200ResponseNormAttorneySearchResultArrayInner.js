"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchNormalizedAttorneys200ResponseNormAttorneySearchResultArrayInner = void 0;
var SearchNormalizedAttorneys200ResponseNormAttorneySearchResultArrayInner = (function () {
    function SearchNormalizedAttorneys200ResponseNormAttorneySearchResultArrayInner() {
    }
    SearchNormalizedAttorneys200ResponseNormAttorneySearchResultArrayInner.getAttributeTypeMap = function () {
        return SearchNormalizedAttorneys200ResponseNormAttorneySearchResultArrayInner.attributeTypeMap;
    };
    SearchNormalizedAttorneys200ResponseNormAttorneySearchResultArrayInner.discriminator = undefined;
    SearchNormalizedAttorneys200ResponseNormAttorneySearchResultArrayInner.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "normAttorneyId",
            "baseName": "normAttorneyId",
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
            "name": "hasAssociatedPublicData",
            "baseName": "hasAssociatedPublicData",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "normAttorneyDetailsAPI",
            "baseName": "normAttorneyDetailsAPI",
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
    return SearchNormalizedAttorneys200ResponseNormAttorneySearchResultArrayInner;
}());
exports.SearchNormalizedAttorneys200ResponseNormAttorneySearchResultArrayInner = SearchNormalizedAttorneys200ResponseNormAttorneySearchResultArrayInner;
//# sourceMappingURL=SearchNormalizedAttorneys200ResponseNormAttorneySearchResultArrayInner.js.map
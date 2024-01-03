"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchNormalizedParties200ResponseNormPartySearchResultArrayInner = void 0;
var SearchNormalizedParties200ResponseNormPartySearchResultArrayInner = (function () {
    function SearchNormalizedParties200ResponseNormPartySearchResultArrayInner() {
    }
    SearchNormalizedParties200ResponseNormPartySearchResultArrayInner.getAttributeTypeMap = function () {
        return SearchNormalizedParties200ResponseNormPartySearchResultArrayInner.attributeTypeMap;
    };
    SearchNormalizedParties200ResponseNormPartySearchResultArrayInner.discriminator = undefined;
    SearchNormalizedParties200ResponseNormPartySearchResultArrayInner.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "normPartyId",
            "baseName": "normPartyId",
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
            "name": "partyClassificationType",
            "baseName": "partyClassificationType",
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
            "name": "normPartyDetailsAPI",
            "baseName": "normPartyDetailsAPI",
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
    return SearchNormalizedParties200ResponseNormPartySearchResultArrayInner;
}());
exports.SearchNormalizedParties200ResponseNormPartySearchResultArrayInner = SearchNormalizedParties200ResponseNormPartySearchResultArrayInner;
//# sourceMappingURL=SearchNormalizedParties200ResponseNormPartySearchResultArrayInner.js.map
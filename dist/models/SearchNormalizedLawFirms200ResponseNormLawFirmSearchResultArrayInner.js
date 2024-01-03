"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchNormalizedLawFirms200ResponseNormLawFirmSearchResultArrayInner = void 0;
var SearchNormalizedLawFirms200ResponseNormLawFirmSearchResultArrayInner = (function () {
    function SearchNormalizedLawFirms200ResponseNormLawFirmSearchResultArrayInner() {
    }
    SearchNormalizedLawFirms200ResponseNormLawFirmSearchResultArrayInner.getAttributeTypeMap = function () {
        return SearchNormalizedLawFirms200ResponseNormLawFirmSearchResultArrayInner.attributeTypeMap;
    };
    SearchNormalizedLawFirms200ResponseNormLawFirmSearchResultArrayInner.discriminator = undefined;
    SearchNormalizedLawFirms200ResponseNormLawFirmSearchResultArrayInner.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "normLawFirmId",
            "baseName": "normLawFirmId",
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
            "name": "normLawFirmDetailsAPI",
            "baseName": "normLawFirmDetailsAPI",
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
    return SearchNormalizedLawFirms200ResponseNormLawFirmSearchResultArrayInner;
}());
exports.SearchNormalizedLawFirms200ResponseNormLawFirmSearchResultArrayInner = SearchNormalizedLawFirms200ResponseNormLawFirmSearchResultArrayInner;
//# sourceMappingURL=SearchNormalizedLawFirms200ResponseNormLawFirmSearchResultArrayInner.js.map
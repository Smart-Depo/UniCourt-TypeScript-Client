"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormLawFirmSearchResult = void 0;
var NormLawFirmSearchResult = (function () {
    function NormLawFirmSearchResult() {
    }
    NormLawFirmSearchResult.getAttributeTypeMap = function () {
        return NormLawFirmSearchResult.attributeTypeMap;
    };
    NormLawFirmSearchResult.discriminator = undefined;
    NormLawFirmSearchResult.attributeTypeMap = [
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
    return NormLawFirmSearchResult;
}());
exports.NormLawFirmSearchResult = NormLawFirmSearchResult;
//# sourceMappingURL=NormLawFirmSearchResult.js.map
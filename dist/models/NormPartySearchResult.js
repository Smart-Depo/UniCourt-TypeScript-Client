"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormPartySearchResult = void 0;
var NormPartySearchResult = (function () {
    function NormPartySearchResult() {
    }
    NormPartySearchResult.getAttributeTypeMap = function () {
        return NormPartySearchResult.attributeTypeMap;
    };
    NormPartySearchResult.discriminator = undefined;
    NormPartySearchResult.attributeTypeMap = [
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
    return NormPartySearchResult;
}());
exports.NormPartySearchResult = NormPartySearchResult;
//# sourceMappingURL=NormPartySearchResult.js.map
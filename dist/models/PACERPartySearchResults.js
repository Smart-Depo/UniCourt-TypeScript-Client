"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PACERPartySearchResults = void 0;
var PACERPartySearchResults = (function () {
    function PACERPartySearchResults() {
    }
    PACERPartySearchResults.getAttributeTypeMap = function () {
        return PACERPartySearchResults.attributeTypeMap;
    };
    PACERPartySearchResults.discriminator = undefined;
    PACERPartySearchResults.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "pacerContent",
            "baseName": "pacerContent",
            "type": "AllCourtsPacerCaseLocatorPartySearch200ResponsePacerSearchResultsArrayInnerPacerContent",
            "format": ""
        },
        {
            "name": "hasOnlyMetaInfo",
            "baseName": "hasOnlyMetaInfo",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "uniCourtContent",
            "baseName": "uniCourtContent",
            "type": "CaseSearchResult1",
            "format": ""
        }
    ];
    return PACERPartySearchResults;
}());
exports.PACERPartySearchResults = PACERPartySearchResults;
//# sourceMappingURL=PACERPartySearchResults.js.map
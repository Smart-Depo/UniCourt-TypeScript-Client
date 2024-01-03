"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PACERCaseSearchResults = void 0;
var PACERCaseSearchResults = (function () {
    function PACERCaseSearchResults() {
    }
    PACERCaseSearchResults.getAttributeTypeMap = function () {
        return PACERCaseSearchResults.attributeTypeMap;
    };
    PACERCaseSearchResults.discriminator = undefined;
    PACERCaseSearchResults.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "pacerContent",
            "baseName": "pacerContent",
            "type": "AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerSearchResultsArrayInnerPacerContent",
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
    return PACERCaseSearchResults;
}());
exports.PACERCaseSearchResults = PACERCaseSearchResults;
//# sourceMappingURL=PACERCaseSearchResults.js.map
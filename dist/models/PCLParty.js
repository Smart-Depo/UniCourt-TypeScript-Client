"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PCLParty = void 0;
var PCLParty = (function () {
    function PCLParty() {
    }
    PCLParty.getAttributeTypeMap = function () {
        return PCLParty.attributeTypeMap;
    };
    PCLParty.discriminator = undefined;
    PCLParty.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "pageNumber",
            "baseName": "pageNumber",
            "type": "number",
            "format": ""
        },
        {
            "name": "pacerReceipt",
            "baseName": "pacerReceipt",
            "type": "AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerReceipt",
            "format": ""
        },
        {
            "name": "pacerPageInfo",
            "baseName": "pacerPageInfo",
            "type": "AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerPageInfo",
            "format": ""
        },
        {
            "name": "pacerSearchResultsArray",
            "baseName": "pacerSearchResultsArray",
            "type": "Array<AllCourtsPacerCaseLocatorPartySearch200ResponsePacerSearchResultsArrayInner>",
            "format": ""
        },
        {
            "name": "nextPageAPI",
            "baseName": "nextPageAPI",
            "type": "string",
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
    return PCLParty;
}());
exports.PCLParty = PCLParty;
//# sourceMappingURL=PCLParty.js.map
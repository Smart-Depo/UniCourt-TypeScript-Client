"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllCourtsPacerCaseLocatorPartySearch200Response = void 0;
var AllCourtsPacerCaseLocatorPartySearch200Response = (function () {
    function AllCourtsPacerCaseLocatorPartySearch200Response() {
    }
    AllCourtsPacerCaseLocatorPartySearch200Response.getAttributeTypeMap = function () {
        return AllCourtsPacerCaseLocatorPartySearch200Response.attributeTypeMap;
    };
    AllCourtsPacerCaseLocatorPartySearch200Response.discriminator = undefined;
    AllCourtsPacerCaseLocatorPartySearch200Response.attributeTypeMap = [
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
    return AllCourtsPacerCaseLocatorPartySearch200Response;
}());
exports.AllCourtsPacerCaseLocatorPartySearch200Response = AllCourtsPacerCaseLocatorPartySearch200Response;
//# sourceMappingURL=AllCourtsPacerCaseLocatorPartySearch200Response.js.map
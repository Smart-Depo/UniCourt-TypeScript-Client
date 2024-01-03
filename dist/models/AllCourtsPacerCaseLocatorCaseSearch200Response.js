"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllCourtsPacerCaseLocatorCaseSearch200Response = void 0;
var AllCourtsPacerCaseLocatorCaseSearch200Response = (function () {
    function AllCourtsPacerCaseLocatorCaseSearch200Response() {
    }
    AllCourtsPacerCaseLocatorCaseSearch200Response.getAttributeTypeMap = function () {
        return AllCourtsPacerCaseLocatorCaseSearch200Response.attributeTypeMap;
    };
    AllCourtsPacerCaseLocatorCaseSearch200Response.discriminator = undefined;
    AllCourtsPacerCaseLocatorCaseSearch200Response.attributeTypeMap = [
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
            "type": "Array<AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerSearchResultsArrayInner>",
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
    return AllCourtsPacerCaseLocatorCaseSearch200Response;
}());
exports.AllCourtsPacerCaseLocatorCaseSearch200Response = AllCourtsPacerCaseLocatorCaseSearch200Response;
//# sourceMappingURL=AllCourtsPacerCaseLocatorCaseSearch200Response.js.map
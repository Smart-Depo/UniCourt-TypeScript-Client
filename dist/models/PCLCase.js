"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PCLCase = void 0;
var PCLCase = (function () {
    function PCLCase() {
    }
    PCLCase.getAttributeTypeMap = function () {
        return PCLCase.attributeTypeMap;
    };
    PCLCase.discriminator = undefined;
    PCLCase.attributeTypeMap = [
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
    return PCLCase;
}());
exports.PCLCase = PCLCase;
//# sourceMappingURL=PCLCase.js.map
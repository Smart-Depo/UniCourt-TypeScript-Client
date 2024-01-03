"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocketEntryPrimaryDocuments = void 0;
var DocketEntryPrimaryDocuments = (function () {
    function DocketEntryPrimaryDocuments() {
    }
    DocketEntryPrimaryDocuments.getAttributeTypeMap = function () {
        return DocketEntryPrimaryDocuments.attributeTypeMap;
    };
    DocketEntryPrimaryDocuments.discriminator = undefined;
    DocketEntryPrimaryDocuments.attributeTypeMap = [
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
            "name": "caseDocumentArray",
            "baseName": "caseDocumentArray",
            "type": "Array<GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner>",
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
    return DocketEntryPrimaryDocuments;
}());
exports.DocketEntryPrimaryDocuments = DocketEntryPrimaryDocuments;
//# sourceMappingURL=DocketEntryPrimaryDocuments.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocketEntrySecondaryDocuments = void 0;
var DocketEntrySecondaryDocuments = (function () {
    function DocketEntrySecondaryDocuments() {
    }
    DocketEntrySecondaryDocuments.getAttributeTypeMap = function () {
        return DocketEntrySecondaryDocuments.attributeTypeMap;
    };
    DocketEntrySecondaryDocuments.discriminator = undefined;
    DocketEntrySecondaryDocuments.attributeTypeMap = [
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
    return DocketEntrySecondaryDocuments;
}());
exports.DocketEntrySecondaryDocuments = DocketEntrySecondaryDocuments;
//# sourceMappingURL=DocketEntrySecondaryDocuments.js.map
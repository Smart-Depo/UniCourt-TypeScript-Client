"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseDocuments = void 0;
var CaseDocuments = (function () {
    function CaseDocuments() {
    }
    CaseDocuments.getAttributeTypeMap = function () {
        return CaseDocuments.attributeTypeMap;
    };
    CaseDocuments.discriminator = undefined;
    CaseDocuments.attributeTypeMap = [
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
    return CaseDocuments;
}());
exports.CaseDocuments = CaseDocuments;
//# sourceMappingURL=CaseDocuments.js.map
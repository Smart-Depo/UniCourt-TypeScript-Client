"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCase200ResponseCaseDocuments = void 0;
var GetCase200ResponseCaseDocuments = (function () {
    function GetCase200ResponseCaseDocuments() {
    }
    GetCase200ResponseCaseDocuments.getAttributeTypeMap = function () {
        return GetCase200ResponseCaseDocuments.attributeTypeMap;
    };
    GetCase200ResponseCaseDocuments.discriminator = undefined;
    GetCase200ResponseCaseDocuments.attributeTypeMap = [
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
    return GetCase200ResponseCaseDocuments;
}());
exports.GetCase200ResponseCaseDocuments = GetCase200ResponseCaseDocuments;
//# sourceMappingURL=GetCase200ResponseCaseDocuments.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseStats = void 0;
var CaseStats = (function () {
    function CaseStats() {
    }
    CaseStats.getAttributeTypeMap = function () {
        return CaseStats.attributeTypeMap;
    };
    CaseStats.discriminator = undefined;
    CaseStats.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "partyCount",
            "baseName": "partyCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "attorneyCount",
            "baseName": "attorneyCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "judgeCount",
            "baseName": "judgeCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "docketEntryCount",
            "baseName": "docketEntryCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "freeCaseDocumentCount",
            "baseName": "freeCaseDocumentCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "paidCaseDocumentCount",
            "baseName": "paidCaseDocumentCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "allCaseDocumentCount",
            "baseName": "allCaseDocumentCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "caseDocumentInLibraryCount",
            "baseName": "caseDocumentInLibraryCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "hearingCount",
            "baseName": "hearingCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "relatedCaseCount",
            "baseName": "relatedCaseCount",
            "type": "number",
            "format": ""
        }
    ];
    return CaseStats;
}());
exports.CaseStats = CaseStats;
//# sourceMappingURL=CaseStats.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseClassCoverage = void 0;
var CaseClassCoverage = (function () {
    function CaseClassCoverage() {
    }
    CaseClassCoverage.getAttributeTypeMap = function () {
        return CaseClassCoverage.attributeTypeMap;
    };
    CaseClassCoverage.discriminator = undefined;
    CaseClassCoverage.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseClass",
            "baseName": "caseClass",
            "type": "CaseClass1",
            "format": ""
        },
        {
            "name": "courtServiceStatusAPI",
            "baseName": "courtServiceStatusAPI",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseCount",
            "baseName": "caseCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "casesInLastThirtyDaysCount",
            "baseName": "casesInLastThirtyDaysCount",
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
            "name": "freeCaseDocumentsInLastThirtyDaysCount",
            "baseName": "freeCaseDocumentsInLastThirtyDaysCount",
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
            "name": "paidCaseDocumentsInLastThirtyDaysCount",
            "baseName": "paidCaseDocumentsInLastThirtyDaysCount",
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
            "name": "caseDocumentInLibraryInLastThirtyDaysCount",
            "baseName": "caseDocumentInLibraryInLastThirtyDaysCount",
            "type": "number",
            "format": ""
        }
    ];
    return CaseClassCoverage;
}());
exports.CaseClassCoverage = CaseClassCoverage;
//# sourceMappingURL=CaseClassCoverage.js.map
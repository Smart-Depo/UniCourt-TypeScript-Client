"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourtCoverage = void 0;
var CourtCoverage = (function () {
    function CourtCoverage() {
    }
    CourtCoverage.getAttributeTypeMap = function () {
        return CourtCoverage.attributeTypeMap;
    };
    CourtCoverage.discriminator = undefined;
    CourtCoverage.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastUpdateCountDate",
            "baseName": "lastUpdateCountDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "court",
            "baseName": "court",
            "type": "Court1",
            "format": ""
        },
        {
            "name": "totalCaseCount",
            "baseName": "totalCaseCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalCasesInLastThirtyDaysCount",
            "baseName": "totalCasesInLastThirtyDaysCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalFreeCaseDocumentCount",
            "baseName": "totalFreeCaseDocumentCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalFreeCaseDocumentsInLastThirtyDaysCount",
            "baseName": "totalFreeCaseDocumentsInLastThirtyDaysCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalPaidCaseDocumentCount",
            "baseName": "totalPaidCaseDocumentCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalPaidCaseDocumentsInLastThirtyDaysCount",
            "baseName": "totalPaidCaseDocumentsInLastThirtyDaysCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalCaseDocumentInLibraryCount",
            "baseName": "totalCaseDocumentInLibraryCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalCaseDocumentInLibraryInLastThirtyDaysCount",
            "baseName": "totalCaseDocumentInLibraryInLastThirtyDaysCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "caseClassCoverageArray",
            "baseName": "caseClassCoverageArray",
            "type": "Array<GetCourtCoverage200ResponseCaseClassCoverageArrayInner>",
            "format": ""
        }
    ];
    return CourtCoverage;
}());
exports.CourtCoverage = CourtCoverage;
//# sourceMappingURL=CourtCoverage.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCourtCoverage200Response = void 0;
var GetCourtCoverage200Response = (function () {
    function GetCourtCoverage200Response() {
    }
    GetCourtCoverage200Response.getAttributeTypeMap = function () {
        return GetCourtCoverage200Response.attributeTypeMap;
    };
    GetCourtCoverage200Response.discriminator = undefined;
    GetCourtCoverage200Response.attributeTypeMap = [
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
    return GetCourtCoverage200Response;
}());
exports.GetCourtCoverage200Response = GetCourtCoverage200Response;
//# sourceMappingURL=GetCourtCoverage200Response.js.map
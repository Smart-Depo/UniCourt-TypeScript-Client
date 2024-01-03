"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseSearchResult = void 0;
var CaseSearchResult = (function () {
    function CaseSearchResult() {
    }
    CaseSearchResult.getAttributeTypeMap = function () {
        return CaseSearchResult.attributeTypeMap;
    };
    CaseSearchResult.discriminator = undefined;
    CaseSearchResult.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseId",
            "baseName": "caseId",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseName",
            "baseName": "caseName",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseNumber",
            "baseName": "caseNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "filedDate",
            "baseName": "filedDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "court",
            "baseName": "court",
            "type": "Court1",
            "format": ""
        },
        {
            "name": "courtLocation",
            "baseName": "courtLocation",
            "type": "CourtLocation1",
            "format": ""
        },
        {
            "name": "caseType",
            "baseName": "caseType",
            "type": "CaseType1",
            "format": ""
        },
        {
            "name": "caseStatus",
            "baseName": "caseStatus",
            "type": "CaseStatus1",
            "format": ""
        },
        {
            "name": "firstFetchDate",
            "baseName": "firstFetchDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lastFetchDate",
            "baseName": "lastFetchDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lastFetchDateWithUpdates",
            "baseName": "lastFetchDateWithUpdates",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "participantsLastFetchDate",
            "baseName": "participantsLastFetchDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "caseAPI",
            "baseName": "caseAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "matchedObjectArray",
            "baseName": "matchedObjectArray",
            "type": "Array<CaseSearchResult1MatchedObjectArrayInner>",
            "format": ""
        }
    ];
    return CaseSearchResult;
}());
exports.CaseSearchResult = CaseSearchResult;
//# sourceMappingURL=CaseSearchResult.js.map
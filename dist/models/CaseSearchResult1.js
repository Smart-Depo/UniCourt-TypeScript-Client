"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseSearchResult1 = void 0;
var CaseSearchResult1 = (function () {
    function CaseSearchResult1() {
    }
    CaseSearchResult1.getAttributeTypeMap = function () {
        return CaseSearchResult1.attributeTypeMap;
    };
    CaseSearchResult1.discriminator = undefined;
    CaseSearchResult1.attributeTypeMap = [
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
    return CaseSearchResult1;
}());
exports.CaseSearchResult1 = CaseSearchResult1;
//# sourceMappingURL=CaseSearchResult1.js.map
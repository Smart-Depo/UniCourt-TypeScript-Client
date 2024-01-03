"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseSourceDataStatusEnum = exports.Case = void 0;
var Case = (function () {
    function Case() {
    }
    Case.getAttributeTypeMap = function () {
        return Case.attributeTypeMap;
    };
    Case.discriminator = undefined;
    Case.attributeTypeMap = [
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
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseNumber",
            "baseName": "caseNumber",
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
            "name": "filedDate",
            "baseName": "filedDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "hasOnlyMetaInfo",
            "baseName": "hasOnlyMetaInfo",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "courtServiceStatusId",
            "baseName": "courtServiceStatusId",
            "type": "string",
            "format": ""
        },
        {
            "name": "courtServiceStatusAPI",
            "baseName": "courtServiceStatusAPI",
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
            "name": "chargeArray",
            "baseName": "chargeArray",
            "type": "Array<GetCase200ResponseChargeArrayInner>",
            "format": ""
        },
        {
            "name": "caseStatus",
            "baseName": "caseStatus",
            "type": "CaseStatus1",
            "format": ""
        },
        {
            "name": "causeOfActionArray",
            "baseName": "causeOfActionArray",
            "type": "Array<GetCase200ResponseCauseOfActionArrayInner>",
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
            "name": "sourceDataStatus",
            "baseName": "sourceDataStatus",
            "type": "CaseSourceDataStatusEnum",
            "format": ""
        },
        {
            "name": "sourceCaseData",
            "baseName": "sourceCaseData",
            "type": "GetCase200ResponseSourceCaseData",
            "format": ""
        },
        {
            "name": "hasDocumentsWithPreview",
            "baseName": "hasDocumentsWithPreview",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "exportAPI",
            "baseName": "exportAPI",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseStats",
            "baseName": "caseStats",
            "type": "GetCase200ResponseCaseStats",
            "format": ""
        },
        {
            "name": "parties",
            "baseName": "parties",
            "type": "GetCase200ResponseParties",
            "format": ""
        },
        {
            "name": "attorneys",
            "baseName": "attorneys",
            "type": "GetCase200ResponseAttorneys",
            "format": ""
        },
        {
            "name": "judges",
            "baseName": "judges",
            "type": "GetCase200ResponseJudges",
            "format": ""
        },
        {
            "name": "docketEntries",
            "baseName": "docketEntries",
            "type": "GetCase200ResponseDocketEntries",
            "format": ""
        },
        {
            "name": "hearings",
            "baseName": "hearings",
            "type": "GetCase200ResponseHearings",
            "format": ""
        },
        {
            "name": "caseDocuments",
            "baseName": "caseDocuments",
            "type": "GetCase200ResponseCaseDocuments",
            "format": ""
        },
        {
            "name": "relatedCases",
            "baseName": "relatedCases",
            "type": "GetCase200ResponseRelatedCases",
            "format": ""
        }
    ];
    return Case;
}());
exports.Case = Case;
var CaseSourceDataStatusEnum;
(function (CaseSourceDataStatusEnum) {
    CaseSourceDataStatusEnum["NoLongerAvailableInCourt"] = "NO_LONGER_AVAILABLE_IN_COURT";
    CaseSourceDataStatusEnum["SourceDeprecated"] = "SOURCE_DEPRECATED";
    CaseSourceDataStatusEnum["Null"] = "null";
})(CaseSourceDataStatusEnum = exports.CaseSourceDataStatusEnum || (exports.CaseSourceDataStatusEnum = {}));
//# sourceMappingURL=Case.js.map
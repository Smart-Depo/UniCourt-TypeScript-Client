"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCaseTracks200ResponseCaseTrackPreviewArrayInner = void 0;
var GetCaseTracks200ResponseCaseTrackPreviewArrayInner = (function () {
    function GetCaseTracks200ResponseCaseTrackPreviewArrayInner() {
    }
    GetCaseTracks200ResponseCaseTrackPreviewArrayInner.getAttributeTypeMap = function () {
        return GetCaseTracks200ResponseCaseTrackPreviewArrayInner.attributeTypeMap;
    };
    GetCaseTracks200ResponseCaseTrackPreviewArrayInner.discriminator = undefined;
    GetCaseTracks200ResponseCaseTrackPreviewArrayInner.attributeTypeMap = [
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
            "name": "pacerOptions",
            "baseName": "pacerOptions",
            "type": "CaseUpdatePacerOptionsResponse1",
            "format": ""
        },
        {
            "name": "schedule",
            "baseName": "schedule",
            "type": "Schedule2",
            "format": ""
        },
        {
            "name": "lastTrackedDetails",
            "baseName": "lastTrackedDetails",
            "type": "CaseTrackPostRequestLastTrackedDetails",
            "format": ""
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
            "name": "caseAPI",
            "baseName": "caseAPI",
            "type": "string",
            "format": "uri"
        }
    ];
    return GetCaseTracks200ResponseCaseTrackPreviewArrayInner;
}());
exports.GetCaseTracks200ResponseCaseTrackPreviewArrayInner = GetCaseTracks200ResponseCaseTrackPreviewArrayInner;
//# sourceMappingURL=GetCaseTracks200ResponseCaseTrackPreviewArrayInner.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseTrackPostRequest = void 0;
var CaseTrackPostRequest = (function () {
    function CaseTrackPostRequest() {
    }
    CaseTrackPostRequest.getAttributeTypeMap = function () {
        return CaseTrackPostRequest.attributeTypeMap;
    };
    CaseTrackPostRequest.discriminator = undefined;
    CaseTrackPostRequest.attributeTypeMap = [
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
        },
        {
            "name": "_case",
            "baseName": "case",
            "type": "GetCase200Response",
            "format": ""
        }
    ];
    return CaseTrackPostRequest;
}());
exports.CaseTrackPostRequest = CaseTrackPostRequest;
//# sourceMappingURL=CaseTrackPostRequest.js.map
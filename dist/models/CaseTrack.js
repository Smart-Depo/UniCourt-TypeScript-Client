"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseTrack = void 0;
var CaseTrack = (function () {
    function CaseTrack() {
    }
    CaseTrack.getAttributeTypeMap = function () {
        return CaseTrack.attributeTypeMap;
    };
    CaseTrack.discriminator = undefined;
    CaseTrack.attributeTypeMap = [
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
    return CaseTrack;
}());
exports.CaseTrack = CaseTrack;
//# sourceMappingURL=CaseTrack.js.map
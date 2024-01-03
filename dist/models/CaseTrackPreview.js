"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseTrackPreview = void 0;
var CaseTrackPreview = (function () {
    function CaseTrackPreview() {
    }
    CaseTrackPreview.getAttributeTypeMap = function () {
        return CaseTrackPreview.attributeTypeMap;
    };
    CaseTrackPreview.discriminator = undefined;
    CaseTrackPreview.attributeTypeMap = [
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
    return CaseTrackPreview;
}());
exports.CaseTrackPreview = CaseTrackPreview;
//# sourceMappingURL=CaseTrackPreview.js.map
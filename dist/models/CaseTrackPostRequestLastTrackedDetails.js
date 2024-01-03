"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseTrackPostRequestLastTrackedDetails = void 0;
var CaseTrackPostRequestLastTrackedDetails = (function () {
    function CaseTrackPostRequestLastTrackedDetails() {
    }
    CaseTrackPostRequestLastTrackedDetails.getAttributeTypeMap = function () {
        return CaseTrackPostRequestLastTrackedDetails.attributeTypeMap;
    };
    CaseTrackPostRequestLastTrackedDetails.discriminator = undefined;
    CaseTrackPostRequestLastTrackedDetails.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
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
            "name": "lastTrackDate",
            "baseName": "lastTrackDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lastTrackException",
            "baseName": "lastTrackException",
            "type": "Exception1",
            "format": ""
        }
    ];
    return CaseTrackPostRequestLastTrackedDetails;
}());
exports.CaseTrackPostRequestLastTrackedDetails = CaseTrackPostRequestLastTrackedDetails;
//# sourceMappingURL=CaseTrackPostRequestLastTrackedDetails.js.map
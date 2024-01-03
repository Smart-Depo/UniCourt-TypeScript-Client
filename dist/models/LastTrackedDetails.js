"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LastTrackedDetails = void 0;
var LastTrackedDetails = (function () {
    function LastTrackedDetails() {
    }
    LastTrackedDetails.getAttributeTypeMap = function () {
        return LastTrackedDetails.attributeTypeMap;
    };
    LastTrackedDetails.discriminator = undefined;
    LastTrackedDetails.attributeTypeMap = [
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
    return LastTrackedDetails;
}());
exports.LastTrackedDetails = LastTrackedDetails;
//# sourceMappingURL=LastTrackedDetails.js.map
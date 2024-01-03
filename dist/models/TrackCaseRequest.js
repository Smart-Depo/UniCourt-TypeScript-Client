"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackCaseRequest = void 0;
var TrackCaseRequest = (function () {
    function TrackCaseRequest() {
    }
    TrackCaseRequest.getAttributeTypeMap = function () {
        return TrackCaseRequest.attributeTypeMap;
    };
    TrackCaseRequest.discriminator = undefined;
    TrackCaseRequest.attributeTypeMap = [
        {
            "name": "caseTrackParams",
            "baseName": "caseTrackParams",
            "type": "UpdateCaseRequest",
            "format": ""
        },
        {
            "name": "schedule",
            "baseName": "schedule",
            "type": "Schedule1",
            "format": ""
        }
    ];
    return TrackCaseRequest;
}());
exports.TrackCaseRequest = TrackCaseRequest;
//# sourceMappingURL=TrackCaseRequest.js.map
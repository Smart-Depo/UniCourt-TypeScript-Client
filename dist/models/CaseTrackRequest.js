"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseTrackRequest = void 0;
var CaseTrackRequest = (function () {
    function CaseTrackRequest() {
    }
    CaseTrackRequest.getAttributeTypeMap = function () {
        return CaseTrackRequest.attributeTypeMap;
    };
    CaseTrackRequest.discriminator = undefined;
    CaseTrackRequest.attributeTypeMap = [
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
    return CaseTrackRequest;
}());
exports.CaseTrackRequest = CaseTrackRequest;
//# sourceMappingURL=CaseTrackRequest.js.map
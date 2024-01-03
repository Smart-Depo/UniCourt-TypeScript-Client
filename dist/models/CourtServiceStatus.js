"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourtServiceStatus = void 0;
var CourtServiceStatus = (function () {
    function CourtServiceStatus() {
    }
    CourtServiceStatus.getAttributeTypeMap = function () {
        return CourtServiceStatus.attributeTypeMap;
    };
    CourtServiceStatus.discriminator = undefined;
    CourtServiceStatus.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "courtServiceStatusId",
            "baseName": "courtServiceStatusId",
            "type": "string",
            "format": ""
        },
        {
            "name": "courtIdArray",
            "baseName": "courtIdArray",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "courtLocationIdArray",
            "baseName": "courtLocationIdArray",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "caseClassIdArray",
            "baseName": "caseClassIdArray",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "serviceStatusAsOn",
            "baseName": "serviceStatusAsOn",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseUpdateServiceStatus",
            "baseName": "caseUpdateServiceStatus",
            "type": "GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus",
            "format": ""
        },
        {
            "name": "caseTrackServiceStatus",
            "baseName": "caseTrackServiceStatus",
            "type": "GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus",
            "format": ""
        },
        {
            "name": "caseDocumentOrderServiceStatus",
            "baseName": "caseDocumentOrderServiceStatus",
            "type": "GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus",
            "format": ""
        }
    ];
    return CourtServiceStatus;
}());
exports.CourtServiceStatus = CourtServiceStatus;
//# sourceMappingURL=CourtServiceStatus.js.map
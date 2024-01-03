"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner = void 0;
var GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner = (function () {
    function GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner() {
    }
    GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner.getAttributeTypeMap = function () {
        return GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner.attributeTypeMap;
    };
    GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner.discriminator = undefined;
    GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner.attributeTypeMap = [
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
    return GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner;
}());
exports.GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner = GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner;
//# sourceMappingURL=GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInner.js.map
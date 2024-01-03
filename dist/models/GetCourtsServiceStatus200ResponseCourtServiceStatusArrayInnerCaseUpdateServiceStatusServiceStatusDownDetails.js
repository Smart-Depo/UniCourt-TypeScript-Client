"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetailsReasonEnum = exports.GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetails = void 0;
var GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetails = (function () {
    function GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetails() {
    }
    GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetails.getAttributeTypeMap = function () {
        return GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetails.attributeTypeMap;
    };
    GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetails.discriminator = undefined;
    GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetails.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetailsReasonEnum",
            "format": ""
        },
        {
            "name": "details",
            "baseName": "details",
            "type": "string",
            "format": ""
        },
        {
            "name": "eta",
            "baseName": "eta",
            "type": "string",
            "format": ""
        }
    ];
    return GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetails;
}());
exports.GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetails = GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetails;
var GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetailsReasonEnum;
(function (GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetailsReasonEnum) {
    GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetailsReasonEnum["UnderMaintenance"] = "underMaintenance";
    GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetailsReasonEnum["NotIntegrated"] = "notIntegrated";
    GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetailsReasonEnum["BrokenIntegration"] = "brokenIntegration";
    GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetailsReasonEnum["SourceMigrated"] = "sourceMigrated";
})(GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetailsReasonEnum = exports.GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetailsReasonEnum || (exports.GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetailsReasonEnum = {}));
//# sourceMappingURL=GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetails.js.map
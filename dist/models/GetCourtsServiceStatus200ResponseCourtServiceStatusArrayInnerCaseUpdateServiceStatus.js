"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceDetailsEnum = exports.GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus = void 0;
var GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus = (function () {
    function GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus() {
    }
    GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus.getAttributeTypeMap = function () {
        return GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus.attributeTypeMap;
    };
    GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus.discriminator = undefined;
    GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "serviceUp",
            "baseName": "serviceUp",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "serviceDetails",
            "baseName": "serviceDetails",
            "type": "GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceDetailsEnum",
            "format": ""
        },
        {
            "name": "serviceStatusDownDetails",
            "baseName": "serviceStatusDownDetails",
            "type": "GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetails",
            "format": ""
        }
    ];
    return GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus;
}());
exports.GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus = GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus;
var GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceDetailsEnum;
(function (GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceDetailsEnum) {
    GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceDetailsEnum["AcceptingCaseUpdates"] = "acceptingCaseUpdates";
    GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceDetailsEnum["NotAcceptingCaseUpdates"] = "notAcceptingCaseUpdates";
    GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceDetailsEnum["AcceptingCaseTrack"] = "acceptingCaseTrack";
    GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceDetailsEnum["NotAcceptingCaseTrack"] = "notAcceptingCaseTrack";
    GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceDetailsEnum["AcceptingAutoDocOrders"] = "acceptingAutoDocOrders";
    GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceDetailsEnum["AcceptingManualDocOrders"] = "acceptingManualDocOrders";
    GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceDetailsEnum["NotAcceptingAutoDocOrdersLimitExceeded"] = "notAcceptingAutoDocOrdersLimitExceeded";
    GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceDetailsEnum["NotAcceptingManualDocOrdersLimitExceeded"] = "notAcceptingManualDocOrdersLimitExceeded";
    GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceDetailsEnum["NotAcceptingDocOrders"] = "notAcceptingDocOrders";
})(GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceDetailsEnum = exports.GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceDetailsEnum || (exports.GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceDetailsEnum = {}));
//# sourceMappingURL=GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus.js.map
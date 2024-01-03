"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceStatusServiceDetailsEnum = exports.ServiceStatus = void 0;
var ServiceStatus = (function () {
    function ServiceStatus() {
    }
    ServiceStatus.getAttributeTypeMap = function () {
        return ServiceStatus.attributeTypeMap;
    };
    ServiceStatus.discriminator = undefined;
    ServiceStatus.attributeTypeMap = [
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
            "type": "ServiceStatusServiceDetailsEnum",
            "format": ""
        },
        {
            "name": "serviceStatusDownDetails",
            "baseName": "serviceStatusDownDetails",
            "type": "GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetails",
            "format": ""
        }
    ];
    return ServiceStatus;
}());
exports.ServiceStatus = ServiceStatus;
var ServiceStatusServiceDetailsEnum;
(function (ServiceStatusServiceDetailsEnum) {
    ServiceStatusServiceDetailsEnum["AcceptingCaseUpdates"] = "acceptingCaseUpdates";
    ServiceStatusServiceDetailsEnum["NotAcceptingCaseUpdates"] = "notAcceptingCaseUpdates";
    ServiceStatusServiceDetailsEnum["AcceptingCaseTrack"] = "acceptingCaseTrack";
    ServiceStatusServiceDetailsEnum["NotAcceptingCaseTrack"] = "notAcceptingCaseTrack";
    ServiceStatusServiceDetailsEnum["AcceptingAutoDocOrders"] = "acceptingAutoDocOrders";
    ServiceStatusServiceDetailsEnum["AcceptingManualDocOrders"] = "acceptingManualDocOrders";
    ServiceStatusServiceDetailsEnum["NotAcceptingAutoDocOrdersLimitExceeded"] = "notAcceptingAutoDocOrdersLimitExceeded";
    ServiceStatusServiceDetailsEnum["NotAcceptingManualDocOrdersLimitExceeded"] = "notAcceptingManualDocOrdersLimitExceeded";
    ServiceStatusServiceDetailsEnum["NotAcceptingDocOrders"] = "notAcceptingDocOrders";
})(ServiceStatusServiceDetailsEnum = exports.ServiceStatusServiceDetailsEnum || (exports.ServiceStatusServiceDetailsEnum = {}));
//# sourceMappingURL=ServiceStatus.js.map
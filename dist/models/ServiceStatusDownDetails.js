"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceStatusDownDetailsReasonEnum = exports.ServiceStatusDownDetails = void 0;
var ServiceStatusDownDetails = (function () {
    function ServiceStatusDownDetails() {
    }
    ServiceStatusDownDetails.getAttributeTypeMap = function () {
        return ServiceStatusDownDetails.attributeTypeMap;
    };
    ServiceStatusDownDetails.discriminator = undefined;
    ServiceStatusDownDetails.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "ServiceStatusDownDetailsReasonEnum",
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
    return ServiceStatusDownDetails;
}());
exports.ServiceStatusDownDetails = ServiceStatusDownDetails;
var ServiceStatusDownDetailsReasonEnum;
(function (ServiceStatusDownDetailsReasonEnum) {
    ServiceStatusDownDetailsReasonEnum["UnderMaintenance"] = "underMaintenance";
    ServiceStatusDownDetailsReasonEnum["NotIntegrated"] = "notIntegrated";
    ServiceStatusDownDetailsReasonEnum["BrokenIntegration"] = "brokenIntegration";
    ServiceStatusDownDetailsReasonEnum["SourceMigrated"] = "sourceMigrated";
})(ServiceStatusDownDetailsReasonEnum = exports.ServiceStatusDownDetailsReasonEnum || (exports.ServiceStatusDownDetailsReasonEnum = {}));
//# sourceMappingURL=ServiceStatusDownDetails.js.map
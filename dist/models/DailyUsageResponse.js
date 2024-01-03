"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyUsageResponse = void 0;
var DailyUsageResponse = (function () {
    function DailyUsageResponse() {
    }
    DailyUsageResponse.getAttributeTypeMap = function () {
        return DailyUsageResponse.attributeTypeMap;
    };
    DailyUsageResponse.discriminator = undefined;
    DailyUsageResponse.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "usageStartTime",
            "baseName": "usageStartTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "usageEndTime",
            "baseName": "usageEndTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "apiUsage",
            "baseName": "apiUsage",
            "type": "any",
            "format": ""
        },
        {
            "name": "apiCallsMade",
            "baseName": "apiCallsMade",
            "type": "GetBillingUsageByBillingCycle200ResponseApiCallsMade",
            "format": ""
        },
        {
            "name": "apiCallsCredited",
            "baseName": "apiCallsCredited",
            "type": "GetBillingUsageByBillingCycle200ResponseApiCallsCredited",
            "format": ""
        },
        {
            "name": "apiCallsBillable",
            "baseName": "apiCallsBillable",
            "type": "GetBillingUsageByBillingCycle200ResponseApiCallsBillable",
            "format": ""
        }
    ];
    return DailyUsageResponse;
}());
exports.DailyUsageResponse = DailyUsageResponse;
//# sourceMappingURL=DailyUsageResponse.js.map
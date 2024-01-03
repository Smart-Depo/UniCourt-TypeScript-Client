"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDailyUsageByDate200Response = void 0;
var GetDailyUsageByDate200Response = (function () {
    function GetDailyUsageByDate200Response() {
    }
    GetDailyUsageByDate200Response.getAttributeTypeMap = function () {
        return GetDailyUsageByDate200Response.attributeTypeMap;
    };
    GetDailyUsageByDate200Response.discriminator = undefined;
    GetDailyUsageByDate200Response.attributeTypeMap = [
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
    return GetDailyUsageByDate200Response;
}());
exports.GetDailyUsageByDate200Response = GetDailyUsageByDate200Response;
//# sourceMappingURL=GetDailyUsageByDate200Response.js.map
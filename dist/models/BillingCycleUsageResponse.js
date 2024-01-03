"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingCycleUsageResponse = void 0;
var BillingCycleUsageResponse = (function () {
    function BillingCycleUsageResponse() {
    }
    BillingCycleUsageResponse.getAttributeTypeMap = function () {
        return BillingCycleUsageResponse.attributeTypeMap;
    };
    BillingCycleUsageResponse.discriminator = undefined;
    BillingCycleUsageResponse.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "billingCycle",
            "baseName": "billingCycle",
            "type": "GetBillingUsageByBillingCycle200ResponseBillingCycle",
            "format": ""
        },
        {
            "name": "days",
            "baseName": "days",
            "type": "any",
            "format": ""
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
        },
        {
            "name": "totalCasesTracked",
            "baseName": "totalCasesTracked",
            "type": "number",
            "format": ""
        }
    ];
    return BillingCycleUsageResponse;
}());
exports.BillingCycleUsageResponse = BillingCycleUsageResponse;
//# sourceMappingURL=BillingCycleUsageResponse.js.map
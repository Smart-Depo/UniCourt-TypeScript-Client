"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBillingUsageByBillingCycle200Response = void 0;
var GetBillingUsageByBillingCycle200Response = (function () {
    function GetBillingUsageByBillingCycle200Response() {
    }
    GetBillingUsageByBillingCycle200Response.getAttributeTypeMap = function () {
        return GetBillingUsageByBillingCycle200Response.attributeTypeMap;
    };
    GetBillingUsageByBillingCycle200Response.discriminator = undefined;
    GetBillingUsageByBillingCycle200Response.attributeTypeMap = [
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
    return GetBillingUsageByBillingCycle200Response;
}());
exports.GetBillingUsageByBillingCycle200Response = GetBillingUsageByBillingCycle200Response;
//# sourceMappingURL=GetBillingUsageByBillingCycle200Response.js.map
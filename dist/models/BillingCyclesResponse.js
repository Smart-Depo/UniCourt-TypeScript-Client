"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingCyclesResponse = void 0;
var BillingCyclesResponse = (function () {
    function BillingCyclesResponse() {
    }
    BillingCyclesResponse.getAttributeTypeMap = function () {
        return BillingCyclesResponse.attributeTypeMap;
    };
    BillingCyclesResponse.discriminator = undefined;
    BillingCyclesResponse.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "billingCycleArray",
            "baseName": "billingCycleArray",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return BillingCyclesResponse;
}());
exports.BillingCyclesResponse = BillingCyclesResponse;
//# sourceMappingURL=BillingCyclesResponse.js.map
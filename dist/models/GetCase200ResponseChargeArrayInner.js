"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCase200ResponseChargeArrayInner = void 0;
var GetCase200ResponseChargeArrayInner = (function () {
    function GetCase200ResponseChargeArrayInner() {
    }
    GetCase200ResponseChargeArrayInner.getAttributeTypeMap = function () {
        return GetCase200ResponseChargeArrayInner.attributeTypeMap;
    };
    GetCase200ResponseChargeArrayInner.discriminator = undefined;
    GetCase200ResponseChargeArrayInner.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "charge",
            "baseName": "charge",
            "type": "Charge1",
            "format": ""
        },
        {
            "name": "chargeDegree",
            "baseName": "chargeDegree",
            "type": "ChargeDegree1",
            "format": ""
        },
        {
            "name": "chargeSeverity",
            "baseName": "chargeSeverity",
            "type": "ChargeSeverity1",
            "format": ""
        },
        {
            "name": "chargeAdditionalDataArray",
            "baseName": "chargeAdditionalDataArray",
            "type": "Array<ChargeAdditionalData1>",
            "format": ""
        }
    ];
    return GetCase200ResponseChargeArrayInner;
}());
exports.GetCase200ResponseChargeArrayInner = GetCase200ResponseChargeArrayInner;
//# sourceMappingURL=GetCase200ResponseChargeArrayInner.js.map
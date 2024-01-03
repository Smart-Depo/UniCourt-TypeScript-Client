"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCharge = void 0;
var CaseCharge = (function () {
    function CaseCharge() {
    }
    CaseCharge.getAttributeTypeMap = function () {
        return CaseCharge.attributeTypeMap;
    };
    CaseCharge.discriminator = undefined;
    CaseCharge.attributeTypeMap = [
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
    return CaseCharge;
}());
exports.CaseCharge = CaseCharge;
//# sourceMappingURL=CaseCharge.js.map
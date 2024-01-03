"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeAdditionalData = void 0;
var ChargeAdditionalData = (function () {
    function ChargeAdditionalData() {
    }
    ChargeAdditionalData.getAttributeTypeMap = function () {
        return ChargeAdditionalData.attributeTypeMap;
    };
    ChargeAdditionalData.discriminator = undefined;
    ChargeAdditionalData.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "chargeAdditionalDataId",
            "baseName": "chargeAdditionalDataId",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "Date",
            "format": "date-time"
        }
    ];
    return ChargeAdditionalData;
}());
exports.ChargeAdditionalData = ChargeAdditionalData;
//# sourceMappingURL=ChargeAdditionalData.js.map
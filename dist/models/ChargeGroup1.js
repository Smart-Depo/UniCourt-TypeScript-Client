"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeGroup1 = void 0;
var ChargeGroup1 = (function () {
    function ChargeGroup1() {
    }
    ChargeGroup1.getAttributeTypeMap = function () {
        return ChargeGroup1.attributeTypeMap;
    };
    ChargeGroup1.discriminator = undefined;
    ChargeGroup1.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "chargeGroupId",
            "baseName": "chargeGroupId",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
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
    return ChargeGroup1;
}());
exports.ChargeGroup1 = ChargeGroup1;
//# sourceMappingURL=ChargeGroup1.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeGroup = void 0;
var ChargeGroup = (function () {
    function ChargeGroup() {
    }
    ChargeGroup.getAttributeTypeMap = function () {
        return ChargeGroup.attributeTypeMap;
    };
    ChargeGroup.discriminator = undefined;
    ChargeGroup.attributeTypeMap = [
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
    return ChargeGroup;
}());
exports.ChargeGroup = ChargeGroup;
//# sourceMappingURL=ChargeGroup.js.map
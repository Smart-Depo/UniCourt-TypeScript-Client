"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Charge1 = void 0;
var Charge1 = (function () {
    function Charge1() {
    }
    Charge1.getAttributeTypeMap = function () {
        return Charge1.attributeTypeMap;
    };
    Charge1.discriminator = undefined;
    Charge1.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "chargeId",
            "baseName": "chargeId",
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
            "name": "chargeGroup",
            "baseName": "chargeGroup",
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
    return Charge1;
}());
exports.Charge1 = Charge1;
//# sourceMappingURL=Charge1.js.map
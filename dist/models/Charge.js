"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Charge = void 0;
var Charge = (function () {
    function Charge() {
    }
    Charge.getAttributeTypeMap = function () {
        return Charge.attributeTypeMap;
    };
    Charge.discriminator = undefined;
    Charge.attributeTypeMap = [
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
    return Charge;
}());
exports.Charge = Charge;
//# sourceMappingURL=Charge.js.map
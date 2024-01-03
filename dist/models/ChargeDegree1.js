"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeDegree1 = void 0;
var ChargeDegree1 = (function () {
    function ChargeDegree1() {
    }
    ChargeDegree1.getAttributeTypeMap = function () {
        return ChargeDegree1.attributeTypeMap;
    };
    ChargeDegree1.discriminator = undefined;
    ChargeDegree1.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "chargeDegreeId",
            "baseName": "chargeDegreeId",
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
    return ChargeDegree1;
}());
exports.ChargeDegree1 = ChargeDegree1;
//# sourceMappingURL=ChargeDegree1.js.map
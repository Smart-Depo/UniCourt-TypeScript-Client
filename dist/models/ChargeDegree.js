"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeDegree = void 0;
var ChargeDegree = (function () {
    function ChargeDegree() {
    }
    ChargeDegree.getAttributeTypeMap = function () {
        return ChargeDegree.attributeTypeMap;
    };
    ChargeDegree.discriminator = undefined;
    ChargeDegree.attributeTypeMap = [
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
    return ChargeDegree;
}());
exports.ChargeDegree = ChargeDegree;
//# sourceMappingURL=ChargeDegree.js.map
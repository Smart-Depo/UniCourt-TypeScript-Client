"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schedule2TypeEnum = exports.Schedule2 = void 0;
var Schedule2 = (function () {
    function Schedule2() {
    }
    Schedule2.getAttributeTypeMap = function () {
        return Schedule2.attributeTypeMap;
    };
    Schedule2.discriminator = undefined;
    Schedule2.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "Schedule2TypeEnum",
            "format": ""
        },
        {
            "name": "days",
            "baseName": "days",
            "type": "Array<number>",
            "format": ""
        }
    ];
    return Schedule2;
}());
exports.Schedule2 = Schedule2;
var Schedule2TypeEnum;
(function (Schedule2TypeEnum) {
    Schedule2TypeEnum["Daily"] = "daily";
    Schedule2TypeEnum["Weekly"] = "weekly";
    Schedule2TypeEnum["Monthly"] = "monthly";
})(Schedule2TypeEnum = exports.Schedule2TypeEnum || (exports.Schedule2TypeEnum = {}));
//# sourceMappingURL=Schedule2.js.map
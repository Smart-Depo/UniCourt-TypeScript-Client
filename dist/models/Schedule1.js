"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schedule1TypeEnum = exports.Schedule1 = void 0;
var Schedule1 = (function () {
    function Schedule1() {
    }
    Schedule1.getAttributeTypeMap = function () {
        return Schedule1.attributeTypeMap;
    };
    Schedule1.discriminator = undefined;
    Schedule1.attributeTypeMap = [
        {
            "name": "type",
            "baseName": "type",
            "type": "Schedule1TypeEnum",
            "format": ""
        },
        {
            "name": "days",
            "baseName": "days",
            "type": "Array<number>",
            "format": ""
        }
    ];
    return Schedule1;
}());
exports.Schedule1 = Schedule1;
var Schedule1TypeEnum;
(function (Schedule1TypeEnum) {
    Schedule1TypeEnum["Daily"] = "daily";
    Schedule1TypeEnum["Weekly"] = "weekly";
    Schedule1TypeEnum["Monthly"] = "monthly";
})(Schedule1TypeEnum = exports.Schedule1TypeEnum || (exports.Schedule1TypeEnum = {}));
//# sourceMappingURL=Schedule1.js.map
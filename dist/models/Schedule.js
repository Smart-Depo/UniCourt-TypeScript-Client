"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleTypeEnum = exports.Schedule = void 0;
var Schedule = (function () {
    function Schedule() {
    }
    Schedule.getAttributeTypeMap = function () {
        return Schedule.attributeTypeMap;
    };
    Schedule.discriminator = undefined;
    Schedule.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ScheduleTypeEnum",
            "format": ""
        },
        {
            "name": "days",
            "baseName": "days",
            "type": "Array<number>",
            "format": ""
        }
    ];
    return Schedule;
}());
exports.Schedule = Schedule;
var ScheduleTypeEnum;
(function (ScheduleTypeEnum) {
    ScheduleTypeEnum["Daily"] = "daily";
    ScheduleTypeEnum["Weekly"] = "weekly";
    ScheduleTypeEnum["Monthly"] = "monthly";
})(ScheduleTypeEnum = exports.ScheduleTypeEnum || (exports.ScheduleTypeEnum = {}));
//# sourceMappingURL=Schedule.js.map
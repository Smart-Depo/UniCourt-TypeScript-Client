"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseTrackScheduleTypeEnum = exports.CaseTrackSchedule = void 0;
var CaseTrackSchedule = (function () {
    function CaseTrackSchedule() {
    }
    CaseTrackSchedule.getAttributeTypeMap = function () {
        return CaseTrackSchedule.attributeTypeMap;
    };
    CaseTrackSchedule.discriminator = undefined;
    CaseTrackSchedule.attributeTypeMap = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CaseTrackScheduleTypeEnum",
            "format": ""
        },
        {
            "name": "days",
            "baseName": "days",
            "type": "Array<number>",
            "format": ""
        }
    ];
    return CaseTrackSchedule;
}());
exports.CaseTrackSchedule = CaseTrackSchedule;
var CaseTrackScheduleTypeEnum;
(function (CaseTrackScheduleTypeEnum) {
    CaseTrackScheduleTypeEnum["Daily"] = "daily";
    CaseTrackScheduleTypeEnum["Weekly"] = "weekly";
    CaseTrackScheduleTypeEnum["Monthly"] = "monthly";
})(CaseTrackScheduleTypeEnum = exports.CaseTrackScheduleTypeEnum || (exports.CaseTrackScheduleTypeEnum = {}));
//# sourceMappingURL=CaseTrackSchedule.js.map
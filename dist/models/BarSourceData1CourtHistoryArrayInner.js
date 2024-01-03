"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarSourceData1CourtHistoryArrayInner = void 0;
var BarSourceData1CourtHistoryArrayInner = (function () {
    function BarSourceData1CourtHistoryArrayInner() {
    }
    BarSourceData1CourtHistoryArrayInner.getAttributeTypeMap = function () {
        return BarSourceData1CourtHistoryArrayInner.attributeTypeMap;
    };
    BarSourceData1CourtHistoryArrayInner.discriminator = undefined;
    BarSourceData1CourtHistoryArrayInner.attributeTypeMap = [
        {
            "name": "action",
            "baseName": "action",
            "type": "string",
            "format": ""
        },
        {
            "name": "actionComments",
            "baseName": "actionComments",
            "type": "string",
            "format": ""
        },
        {
            "name": "reinstatedDate",
            "baseName": "reinstatedDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "Date",
            "format": "date-time"
        }
    ];
    return BarSourceData1CourtHistoryArrayInner;
}());
exports.BarSourceData1CourtHistoryArrayInner = BarSourceData1CourtHistoryArrayInner;
//# sourceMappingURL=BarSourceData1CourtHistoryArrayInner.js.map
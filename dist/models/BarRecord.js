"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarRecordStatusEnum = exports.BarRecord = void 0;
var BarRecord = (function () {
    function BarRecord() {
    }
    BarRecord.getAttributeTypeMap = function () {
        return BarRecord.attributeTypeMap;
    };
    BarRecord.discriminator = undefined;
    BarRecord.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "barNumber",
            "baseName": "barNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "barSourceType",
            "baseName": "barSourceType",
            "type": "string",
            "format": ""
        },
        {
            "name": "admittedDate",
            "baseName": "admittedDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "stateCode",
            "baseName": "stateCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "BarRecordStatusEnum",
            "format": ""
        },
        {
            "name": "inactivationDate",
            "baseName": "inactivationDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "barSourceData",
            "baseName": "barSourceData",
            "type": "BarSourceData1",
            "format": ""
        },
        {
            "name": "contact",
            "baseName": "contact",
            "type": "GetCase200ResponsePartiesPartyArrayInnerContact",
            "format": ""
        },
        {
            "name": "firstFetchDate",
            "baseName": "firstFetchDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lastFetchDate",
            "baseName": "lastFetchDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lastFetchDateWithUpdates",
            "baseName": "lastFetchDateWithUpdates",
            "type": "Date",
            "format": "date-time"
        }
    ];
    return BarRecord;
}());
exports.BarRecord = BarRecord;
var BarRecordStatusEnum;
(function (BarRecordStatusEnum) {
    BarRecordStatusEnum["Active"] = "Active";
    BarRecordStatusEnum["Inactive"] = "Inactive";
    BarRecordStatusEnum["NotClassified"] = "Not Classified";
    BarRecordStatusEnum["Unknown"] = "Unknown";
})(BarRecordStatusEnum = exports.BarRecordStatusEnum || (exports.BarRecordStatusEnum = {}));
//# sourceMappingURL=BarRecord.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarRecord1StatusEnum = exports.BarRecord1 = void 0;
var BarRecord1 = (function () {
    function BarRecord1() {
    }
    BarRecord1.getAttributeTypeMap = function () {
        return BarRecord1.attributeTypeMap;
    };
    BarRecord1.discriminator = undefined;
    BarRecord1.attributeTypeMap = [
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
            "type": "BarRecord1StatusEnum",
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
    return BarRecord1;
}());
exports.BarRecord1 = BarRecord1;
var BarRecord1StatusEnum;
(function (BarRecord1StatusEnum) {
    BarRecord1StatusEnum["Active"] = "Active";
    BarRecord1StatusEnum["Inactive"] = "Inactive";
    BarRecord1StatusEnum["NotClassified"] = "Not Classified";
    BarRecord1StatusEnum["Unknown"] = "Unknown";
})(BarRecord1StatusEnum = exports.BarRecord1StatusEnum || (exports.BarRecord1StatusEnum = {}));
//# sourceMappingURL=BarRecord1.js.map
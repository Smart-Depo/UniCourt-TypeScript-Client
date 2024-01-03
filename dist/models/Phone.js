"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhonePhoneTypeEnum = exports.Phone = void 0;
var Phone = (function () {
    function Phone() {
    }
    Phone.getAttributeTypeMap = function () {
        return Phone.attributeTypeMap;
    };
    Phone.discriminator = undefined;
    Phone.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "phoneType",
            "baseName": "phoneType",
            "type": "PhonePhoneTypeEnum",
            "format": ""
        },
        {
            "name": "isVisible",
            "baseName": "isVisible",
            "type": "boolean",
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
        }
    ];
    return Phone;
}());
exports.Phone = Phone;
var PhonePhoneTypeEnum;
(function (PhonePhoneTypeEnum) {
    PhonePhoneTypeEnum["Default"] = "DEFAULT";
    PhonePhoneTypeEnum["Office"] = "OFFICE";
    PhonePhoneTypeEnum["Fax"] = "FAX";
    PhonePhoneTypeEnum["Phone"] = "PHONE";
})(PhonePhoneTypeEnum = exports.PhonePhoneTypeEnum || (exports.PhonePhoneTypeEnum = {}));
//# sourceMappingURL=Phone.js.map
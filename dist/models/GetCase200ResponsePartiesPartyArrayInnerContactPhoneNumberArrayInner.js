"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInnerPhoneTypeEnum = exports.GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInner = void 0;
var GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInner = (function () {
    function GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInner() {
    }
    GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInner.getAttributeTypeMap = function () {
        return GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInner.attributeTypeMap;
    };
    GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInner.discriminator = undefined;
    GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInner.attributeTypeMap = [
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
            "type": "GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInnerPhoneTypeEnum",
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
    return GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInner;
}());
exports.GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInner = GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInner;
var GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInnerPhoneTypeEnum;
(function (GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInnerPhoneTypeEnum) {
    GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInnerPhoneTypeEnum["Default"] = "DEFAULT";
    GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInnerPhoneTypeEnum["Office"] = "OFFICE";
    GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInnerPhoneTypeEnum["Fax"] = "FAX";
    GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInnerPhoneTypeEnum["Phone"] = "PHONE";
})(GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInnerPhoneTypeEnum = exports.GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInnerPhoneTypeEnum || (exports.GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInnerPhoneTypeEnum = {}));
//# sourceMappingURL=GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInner.js.map
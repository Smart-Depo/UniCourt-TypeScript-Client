"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCase200ResponsePartiesPartyArrayInnerContact = void 0;
var GetCase200ResponsePartiesPartyArrayInnerContact = (function () {
    function GetCase200ResponsePartiesPartyArrayInnerContact() {
    }
    GetCase200ResponsePartiesPartyArrayInnerContact.getAttributeTypeMap = function () {
        return GetCase200ResponsePartiesPartyArrayInnerContact.attributeTypeMap;
    };
    GetCase200ResponsePartiesPartyArrayInnerContact.discriminator = undefined;
    GetCase200ResponsePartiesPartyArrayInnerContact.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "addressArray",
            "baseName": "addressArray",
            "type": "Array<GetCase200ResponsePartiesPartyArrayInnerContactAddressArrayInner>",
            "format": ""
        },
        {
            "name": "phoneNumberArray",
            "baseName": "phoneNumberArray",
            "type": "Array<GetCase200ResponsePartiesPartyArrayInnerContactPhoneNumberArrayInner>",
            "format": ""
        },
        {
            "name": "emailArray",
            "baseName": "emailArray",
            "type": "Array<GetCase200ResponsePartiesPartyArrayInnerContactEmailArrayInner>",
            "format": ""
        }
    ];
    return GetCase200ResponsePartiesPartyArrayInnerContact;
}());
exports.GetCase200ResponsePartiesPartyArrayInnerContact = GetCase200ResponsePartiesPartyArrayInnerContact;
//# sourceMappingURL=GetCase200ResponsePartiesPartyArrayInnerContact.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
var Contact = (function () {
    function Contact() {
    }
    Contact.getAttributeTypeMap = function () {
        return Contact.attributeTypeMap;
    };
    Contact.discriminator = undefined;
    Contact.attributeTypeMap = [
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
    return Contact;
}());
exports.Contact = Contact;
//# sourceMappingURL=Contact.js.map
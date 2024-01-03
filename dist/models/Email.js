"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
var Email = (function () {
    function Email() {
    }
    Email.getAttributeTypeMap = function () {
        return Email.attributeTypeMap;
    };
    Email.discriminator = undefined;
    Email.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "emailId",
            "baseName": "emailId",
            "type": "string",
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
    return Email;
}());
exports.Email = Email;
//# sourceMappingURL=Email.js.map
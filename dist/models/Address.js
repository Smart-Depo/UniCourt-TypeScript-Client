"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
var Address = (function () {
    function Address() {
    }
    Address.getAttributeTypeMap = function () {
        return Address.attributeTypeMap;
    };
    Address.discriminator = undefined;
    Address.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "streetAddress1",
            "baseName": "streetAddress1",
            "type": "string",
            "format": ""
        },
        {
            "name": "streetAddress2",
            "baseName": "streetAddress2",
            "type": "string",
            "format": ""
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string",
            "format": ""
        },
        {
            "name": "stateName",
            "baseName": "stateName",
            "type": "string",
            "format": ""
        },
        {
            "name": "stateCode",
            "baseName": "stateCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "countryName",
            "baseName": "countryName",
            "type": "string",
            "format": ""
        },
        {
            "name": "countryCode",
            "baseName": "countryCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "zip",
            "baseName": "zip",
            "type": "string",
            "format": ""
        },
        {
            "name": "zip4",
            "baseName": "zip4",
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
        },
        {
            "name": "latitude",
            "baseName": "latitude",
            "type": "number",
            "format": ""
        },
        {
            "name": "longitude",
            "baseName": "longitude",
            "type": "number",
            "format": ""
        }
    ];
    return Address;
}());
exports.Address = Address;
//# sourceMappingURL=Address.js.map
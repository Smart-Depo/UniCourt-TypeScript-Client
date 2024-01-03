"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOSData1StatusEnum = exports.SOSData1 = void 0;
var SOSData1 = (function () {
    function SOSData1() {
    }
    SOSData1.getAttributeTypeMap = function () {
        return SOSData1.attributeTypeMap;
    };
    SOSData1.discriminator = undefined;
    SOSData1.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "sosNumber",
            "baseName": "sosNumber",
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
            "name": "fein",
            "baseName": "fein",
            "type": "string",
            "format": ""
        },
        {
            "name": "domesticRegistration",
            "baseName": "domesticRegistration",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "registeredDate",
            "baseName": "registeredDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "SOSData1StatusEnum",
            "format": ""
        },
        {
            "name": "isActive",
            "baseName": "isActive",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "inactivationDate",
            "baseName": "inactivationDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "associatedSoSPersonArray",
            "baseName": "associatedSoSPersonArray",
            "type": "Array<AssociatedSoSPerson1>",
            "format": ""
        },
        {
            "name": "contact",
            "baseName": "contact",
            "type": "GetCase200ResponsePartiesPartyArrayInnerContact",
            "format": ""
        },
        {
            "name": "nameChangesArray",
            "baseName": "nameChangesArray",
            "type": "Array<SOSNameChange1>",
            "format": ""
        },
        {
            "name": "sosAssociatedNormOrganizationArray",
            "baseName": "sosAssociatedNormOrganizationArray",
            "type": "Array<SOSAssociatedNormOrganization1>",
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
    return SOSData1;
}());
exports.SOSData1 = SOSData1;
var SOSData1StatusEnum;
(function (SOSData1StatusEnum) {
    SOSData1StatusEnum["Active"] = "Active";
})(SOSData1StatusEnum = exports.SOSData1StatusEnum || (exports.SOSData1StatusEnum = {}));
//# sourceMappingURL=SOSData1.js.map
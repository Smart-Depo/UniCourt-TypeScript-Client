"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOSDataStatusEnum = exports.SOSData = void 0;
var SOSData = (function () {
    function SOSData() {
    }
    SOSData.getAttributeTypeMap = function () {
        return SOSData.attributeTypeMap;
    };
    SOSData.discriminator = undefined;
    SOSData.attributeTypeMap = [
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
            "type": "SOSDataStatusEnum",
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
    return SOSData;
}());
exports.SOSData = SOSData;
var SOSDataStatusEnum;
(function (SOSDataStatusEnum) {
    SOSDataStatusEnum["Active"] = "Active";
})(SOSDataStatusEnum = exports.SOSDataStatusEnum || (exports.SOSDataStatusEnum = {}));
//# sourceMappingURL=SOSData.js.map
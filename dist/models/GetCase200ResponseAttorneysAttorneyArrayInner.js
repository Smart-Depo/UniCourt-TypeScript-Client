"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCase200ResponseAttorneysAttorneyArrayInner = void 0;
var GetCase200ResponseAttorneysAttorneyArrayInner = (function () {
    function GetCase200ResponseAttorneysAttorneyArrayInner() {
    }
    GetCase200ResponseAttorneysAttorneyArrayInner.getAttributeTypeMap = function () {
        return GetCase200ResponseAttorneysAttorneyArrayInner.attributeTypeMap;
    };
    GetCase200ResponseAttorneysAttorneyArrayInner.discriminator = undefined;
    GetCase200ResponseAttorneysAttorneyArrayInner.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "attorneyId",
            "baseName": "attorneyId",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "namePrefix",
            "baseName": "namePrefix",
            "type": "string",
            "format": ""
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "middleName",
            "baseName": "middleName",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string",
            "format": ""
        },
        {
            "name": "nameSuffix",
            "baseName": "nameSuffix",
            "type": "string",
            "format": ""
        },
        {
            "name": "contact",
            "baseName": "contact",
            "type": "GetCase200ResponsePartiesPartyArrayInnerContact",
            "format": ""
        },
        {
            "name": "attorneyLawFirmArray",
            "baseName": "attorneyLawFirmArray",
            "type": "Array<GetCase200ResponseAttorneysAttorneyArrayInnerAttorneyLawFirmArrayInner>",
            "format": ""
        },
        {
            "name": "barNumber",
            "baseName": "barNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "attorneyType",
            "baseName": "attorneyType",
            "type": "AttorneyType1",
            "format": ""
        },
        {
            "name": "sourceAttorneyType",
            "baseName": "sourceAttorneyType",
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
            "name": "partyAttorneyAssociations",
            "baseName": "partyAttorneyAssociations",
            "type": "GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations",
            "format": ""
        },
        {
            "name": "possibleNormAttorneyArray",
            "baseName": "possibleNormAttorneyArray",
            "type": "Array<PossibleNormAttorney1>",
            "format": ""
        },
        {
            "name": "possibleNormLawFirmArray",
            "baseName": "possibleNormLawFirmArray",
            "type": "Array<PossibleNormLawFirm1>",
            "format": ""
        },
        {
            "name": "partyRoleGroupIdArray",
            "baseName": "partyRoleGroupIdArray",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "partyRoleIdArray",
            "baseName": "partyRoleIdArray",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return GetCase200ResponseAttorneysAttorneyArrayInner;
}());
exports.GetCase200ResponseAttorneysAttorneyArrayInner = GetCase200ResponseAttorneysAttorneyArrayInner;
//# sourceMappingURL=GetCase200ResponseAttorneysAttorneyArrayInner.js.map
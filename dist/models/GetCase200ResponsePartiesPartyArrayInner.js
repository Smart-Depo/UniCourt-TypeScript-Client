"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCase200ResponsePartiesPartyArrayInnerPartyClassificationTypeEnum = exports.GetCase200ResponsePartiesPartyArrayInner = void 0;
var GetCase200ResponsePartiesPartyArrayInner = (function () {
    function GetCase200ResponsePartiesPartyArrayInner() {
    }
    GetCase200ResponsePartiesPartyArrayInner.getAttributeTypeMap = function () {
        return GetCase200ResponsePartiesPartyArrayInner.attributeTypeMap;
    };
    GetCase200ResponsePartiesPartyArrayInner.discriminator = undefined;
    GetCase200ResponsePartiesPartyArrayInner.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "partyId",
            "baseName": "partyId",
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
            "name": "partyClassificationType",
            "baseName": "partyClassificationType",
            "type": "GetCase200ResponsePartiesPartyArrayInnerPartyClassificationTypeEnum",
            "format": ""
        },
        {
            "name": "partyRole",
            "baseName": "partyRole",
            "type": "PartyRole1",
            "format": ""
        },
        {
            "name": "sourcePartyRole",
            "baseName": "sourcePartyRole",
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
            "name": "attorneyRepresentationType",
            "baseName": "attorneyRepresentationType",
            "type": "AttorneyRepresentationType1",
            "format": ""
        },
        {
            "name": "partyAttorneyAssociations",
            "baseName": "partyAttorneyAssociations",
            "type": "GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations",
            "format": ""
        },
        {
            "name": "possibleNormPartyArray",
            "baseName": "possibleNormPartyArray",
            "type": "Array<PossibleNormParty1>",
            "format": ""
        }
    ];
    return GetCase200ResponsePartiesPartyArrayInner;
}());
exports.GetCase200ResponsePartiesPartyArrayInner = GetCase200ResponsePartiesPartyArrayInner;
var GetCase200ResponsePartiesPartyArrayInnerPartyClassificationTypeEnum;
(function (GetCase200ResponsePartiesPartyArrayInnerPartyClassificationTypeEnum) {
    GetCase200ResponsePartiesPartyArrayInnerPartyClassificationTypeEnum["Individual"] = "INDIVIDUAL";
    GetCase200ResponsePartiesPartyArrayInnerPartyClassificationTypeEnum["Company"] = "COMPANY";
    GetCase200ResponsePartiesPartyArrayInnerPartyClassificationTypeEnum["Other"] = "OTHER";
})(GetCase200ResponsePartiesPartyArrayInnerPartyClassificationTypeEnum = exports.GetCase200ResponsePartiesPartyArrayInnerPartyClassificationTypeEnum || (exports.GetCase200ResponsePartiesPartyArrayInnerPartyClassificationTypeEnum = {}));
//# sourceMappingURL=GetCase200ResponsePartiesPartyArrayInner.js.map
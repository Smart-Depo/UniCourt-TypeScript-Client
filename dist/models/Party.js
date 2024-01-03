"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartyPartyClassificationTypeEnum = exports.Party = void 0;
var Party = (function () {
    function Party() {
    }
    Party.getAttributeTypeMap = function () {
        return Party.attributeTypeMap;
    };
    Party.discriminator = undefined;
    Party.attributeTypeMap = [
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
            "type": "PartyPartyClassificationTypeEnum",
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
    return Party;
}());
exports.Party = Party;
var PartyPartyClassificationTypeEnum;
(function (PartyPartyClassificationTypeEnum) {
    PartyPartyClassificationTypeEnum["Individual"] = "INDIVIDUAL";
    PartyPartyClassificationTypeEnum["Company"] = "COMPANY";
    PartyPartyClassificationTypeEnum["Other"] = "OTHER";
})(PartyPartyClassificationTypeEnum = exports.PartyPartyClassificationTypeEnum || (exports.PartyPartyClassificationTypeEnum = {}));
//# sourceMappingURL=Party.js.map
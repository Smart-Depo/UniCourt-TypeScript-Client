"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormPartyPartyClassificationTypeEnum = exports.NormParty = void 0;
var NormParty = (function () {
    function NormParty() {
    }
    NormParty.getAttributeTypeMap = function () {
        return NormParty.attributeTypeMap;
    };
    NormParty.discriminator = undefined;
    NormParty.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "normPartyId",
            "baseName": "normPartyId",
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
            "name": "partyClassificationType",
            "baseName": "partyClassificationType",
            "type": "NormPartyPartyClassificationTypeEnum",
            "format": ""
        },
        {
            "name": "caseSearchAPI",
            "baseName": "caseSearchAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseAnalyticsAPI",
            "baseName": "caseAnalyticsAPI",
            "type": "CaseAnalyticsAPI1",
            "format": ""
        },
        {
            "name": "individualData",
            "baseName": "individualData",
            "type": "Individual",
            "format": ""
        },
        {
            "name": "normOrganizationData",
            "baseName": "normOrganizationData",
            "type": "NormOrganization1",
            "format": ""
        },
        {
            "name": "partyAnalyticsAPI",
            "baseName": "partyAnalyticsAPI",
            "type": "PartyAnalyticsAPI1",
            "format": ""
        },
        {
            "name": "relatedNormPartyArray",
            "baseName": "relatedNormPartyArray",
            "type": "Array<RelatedNormParty1>",
            "format": ""
        }
    ];
    return NormParty;
}());
exports.NormParty = NormParty;
var NormPartyPartyClassificationTypeEnum;
(function (NormPartyPartyClassificationTypeEnum) {
    NormPartyPartyClassificationTypeEnum["Individual"] = "Individual";
    NormPartyPartyClassificationTypeEnum["Organization"] = "Organization";
})(NormPartyPartyClassificationTypeEnum = exports.NormPartyPartyClassificationTypeEnum || (exports.NormPartyPartyClassificationTypeEnum = {}));
//# sourceMappingURL=NormParty.js.map
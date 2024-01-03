"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormParty1PartyClassificationTypeEnum = exports.NormParty1 = void 0;
var NormParty1 = (function () {
    function NormParty1() {
    }
    NormParty1.getAttributeTypeMap = function () {
        return NormParty1.attributeTypeMap;
    };
    NormParty1.discriminator = undefined;
    NormParty1.attributeTypeMap = [
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
            "type": "NormParty1PartyClassificationTypeEnum",
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
    return NormParty1;
}());
exports.NormParty1 = NormParty1;
var NormParty1PartyClassificationTypeEnum;
(function (NormParty1PartyClassificationTypeEnum) {
    NormParty1PartyClassificationTypeEnum["Individual"] = "Individual";
    NormParty1PartyClassificationTypeEnum["Organization"] = "Organization";
})(NormParty1PartyClassificationTypeEnum = exports.NormParty1PartyClassificationTypeEnum || (exports.NormParty1PartyClassificationTypeEnum = {}));
//# sourceMappingURL=NormParty1.js.map
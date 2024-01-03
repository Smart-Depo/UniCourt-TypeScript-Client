"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormOrganization1OrganizationTypeEnum = exports.NormOrganization1 = void 0;
var NormOrganization1 = (function () {
    function NormOrganization1() {
    }
    NormOrganization1.getAttributeTypeMap = function () {
        return NormOrganization1.attributeTypeMap;
    };
    NormOrganization1.discriminator = undefined;
    NormOrganization1.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "normOrganizationId",
            "baseName": "normOrganizationId",
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
            "name": "organizationType",
            "baseName": "organizationType",
            "type": "NormOrganization1OrganizationTypeEnum",
            "format": ""
        },
        {
            "name": "lei",
            "baseName": "lei",
            "type": "string",
            "format": ""
        },
        {
            "name": "cik",
            "baseName": "cik",
            "type": "string",
            "format": ""
        },
        {
            "name": "tickerArray",
            "baseName": "tickerArray",
            "type": "Array<NormOrganization1TickerArrayInner>",
            "format": ""
        },
        {
            "name": "naics",
            "baseName": "naics",
            "type": "string",
            "format": ""
        },
        {
            "name": "naicsDescription",
            "baseName": "naicsDescription",
            "type": "string",
            "format": ""
        },
        {
            "name": "sic",
            "baseName": "sic",
            "type": "string",
            "format": ""
        },
        {
            "name": "sicDescription",
            "baseName": "sicDescription",
            "type": "string",
            "format": ""
        },
        {
            "name": "isInvolvedInLitigation",
            "baseName": "isInvolvedInLitigation",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "normPartyAPI",
            "baseName": "normPartyAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "normCorporateGroupArray",
            "baseName": "normCorporateGroupArray",
            "type": "Array<NormCorporateGroup1>",
            "format": ""
        },
        {
            "name": "sosDataArray",
            "baseName": "sosDataArray",
            "type": "Array<SOSData1>",
            "format": ""
        }
    ];
    return NormOrganization1;
}());
exports.NormOrganization1 = NormOrganization1;
var NormOrganization1OrganizationTypeEnum;
(function (NormOrganization1OrganizationTypeEnum) {
    NormOrganization1OrganizationTypeEnum["Business"] = "Business";
    NormOrganization1OrganizationTypeEnum["GovernmentAgency"] = "GovernmentAgency";
})(NormOrganization1OrganizationTypeEnum = exports.NormOrganization1OrganizationTypeEnum || (exports.NormOrganization1OrganizationTypeEnum = {}));
//# sourceMappingURL=NormOrganization1.js.map
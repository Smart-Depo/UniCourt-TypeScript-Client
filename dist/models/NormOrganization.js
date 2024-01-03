"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormOrganizationOrganizationTypeEnum = exports.NormOrganization = void 0;
var NormOrganization = (function () {
    function NormOrganization() {
    }
    NormOrganization.getAttributeTypeMap = function () {
        return NormOrganization.attributeTypeMap;
    };
    NormOrganization.discriminator = undefined;
    NormOrganization.attributeTypeMap = [
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
            "type": "NormOrganizationOrganizationTypeEnum",
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
    return NormOrganization;
}());
exports.NormOrganization = NormOrganization;
var NormOrganizationOrganizationTypeEnum;
(function (NormOrganizationOrganizationTypeEnum) {
    NormOrganizationOrganizationTypeEnum["Business"] = "Business";
    NormOrganizationOrganizationTypeEnum["GovernmentAgency"] = "GovernmentAgency";
})(NormOrganizationOrganizationTypeEnum = exports.NormOrganizationOrganizationTypeEnum || (exports.NormOrganizationOrganizationTypeEnum = {}));
//# sourceMappingURL=NormOrganization.js.map
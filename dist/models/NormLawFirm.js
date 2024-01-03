"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormLawFirm = void 0;
var NormLawFirm = (function () {
    function NormLawFirm() {
    }
    NormLawFirm.getAttributeTypeMap = function () {
        return NormLawFirm.attributeTypeMap;
    };
    NormLawFirm.discriminator = undefined;
    NormLawFirm.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "normLawFirmId",
            "baseName": "normLawFirmId",
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
            "name": "normOrganizationData",
            "baseName": "normOrganizationData",
            "type": "NormOrganization1",
            "format": ""
        },
        {
            "name": "lawFirmAnalyticsAPI",
            "baseName": "lawFirmAnalyticsAPI",
            "type": "LawFirmAnalyticsAPI1",
            "format": ""
        }
    ];
    return NormLawFirm;
}());
exports.NormLawFirm = NormLawFirm;
//# sourceMappingURL=NormLawFirm.js.map
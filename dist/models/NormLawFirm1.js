"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormLawFirm1 = void 0;
var NormLawFirm1 = (function () {
    function NormLawFirm1() {
    }
    NormLawFirm1.getAttributeTypeMap = function () {
        return NormLawFirm1.attributeTypeMap;
    };
    NormLawFirm1.discriminator = undefined;
    NormLawFirm1.attributeTypeMap = [
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
    return NormLawFirm1;
}());
exports.NormLawFirm1 = NormLawFirm1;
//# sourceMappingURL=NormLawFirm1.js.map